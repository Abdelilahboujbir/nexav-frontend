import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import { adminGetProduit, adminGetMedias, adminAddMedia, adminDeleteMedia } from '../../api/produits'
import { assetUrl } from '../../api/assets'

export default function MediasAdmin() {
  const { id } = useParams()

  const [produit, setProduit] = useState(null)
  const [medias, setMedias] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [deleteConfirm, setDeleteConfirm] = useState(null)
  const [typeMedia, setTypeMedia] = useState('image')
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [lightbox, setLightbox] = useState(null)

  const normalizeProduit = (data) => data?.produit || data || null

  const normalizeMedias = (data) => {
    if (Array.isArray(data)) return data
    if (Array.isArray(data?.medias)) return data.medias
    if (Array.isArray(data?.media_produits)) return data.media_produits
    if (Array.isArray(data?.mediaProduits)) return data.mediaProduits
    if (Array.isArray(data?.produit?.media_produits)) return data.produit.media_produits
    if (Array.isArray(data?.produit?.mediaProduits)) return data.produit.mediaProduits
    return []
  }

  const load = () => {
    setLoading(true)
    setError('')

    Promise.all([adminGetProduit(id), adminGetMedias(id)])
      .then(([pRes, mRes]) => {
        setProduit(normalizeProduit(pRes.data))
        setMedias(normalizeMedias(mRes.data))
      })
      .catch(() => setError('Erreur de chargement'))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [id])

  const handleFile = (e) => {
    const f = e.target.files[0]
    if (!f) return

    setFile(f)

    if (f.type.startsWith('image')) {
      setPreview(URL.createObjectURL(f))
    } else {
      setPreview(null)
    }
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    if (!file) return

    setUploading(true)
    setError('')
    setSuccess('')

    try {
      const fd = new FormData()
      fd.append('media', file)
      fd.append('type_media', typeMedia)

      await adminAddMedia(id, fd)

      setFile(null)
      setPreview(null)
      setSuccess('Média ajouté avec succès.')
      load()
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de l'upload.")
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (mediaId) => {
    try {
      await adminDeleteMedia(mediaId)
      setDeleteConfirm(null)
      load()
    } catch {
      setError('Impossible de supprimer ce média.')
    }
  }

  const safeMedias = Array.isArray(medias) ? medias : []
  const images = safeMedias.filter((m) => m.type_media === 'image')
  const videos = safeMedias.filter((m) => m.type_media === 'video')

  return (
    <AdminLayout title={produit ? `Médias — ${produit.nom}` : 'Médias produit'}>
      <div className="media-breadcrumb">
        <Link to="/admin/produits">Produits</Link>
        <span>›</span>
        <span>{produit?.nom || `Produit #${id}`}</span>
        <span>›</span>
        <strong>Médias</strong>
      </div>

      {loading ? (
        <div className="loading-center">
          <div className="spinner" />
        </div>
      ) : (
        <div className="media-admin-grid">
          <div className="media-left">
            {error && <div className="error-message message-space">{error}</div>}
            {success && <div className="success-message message-space">{success}</div>}

            <section className="media-section">
              <div className="media-section-head">
                <h3>Images <span>({images.length})</span></h3>
              </div>

              {images.length === 0 ? (
                <EmptyBox text="Aucune image" />
              ) : (
                <div className="images-grid">
                  {images.map((m) => (
                    <div key={m.id} className="image-card">
                      <button
                        type="button"
                        className="image-preview"
                        style={{ backgroundImage: `url(${assetUrl(m.chemin_media)})` }}
                        onClick={() => setLightbox(assetUrl(m.chemin_media))}
                        aria-label="Afficher l'image"
                      />

                      <div className="media-card-foot">
                        <span>#{m.id}</span>
                        <button onClick={() => setDeleteConfirm(m)}>Supprimer</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="media-section">
              <div className="media-section-head">
                <h3>Vidéos <span>({videos.length})</span></h3>
              </div>

              {videos.length === 0 ? (
                <EmptyBox text="Aucune vidéo" small />
              ) : (
                <div className="videos-grid">
                  {videos.map((m) => (
                    <div key={m.id} className="video-card">
                      <video src={assetUrl(m.chemin_media)} controls />

                      <div className="media-card-foot">
                        <span>#{m.id}</span>
                        <button onClick={() => setDeleteConfirm(m)}>Supprimer</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>

          <aside className="upload-card">
            <h3>Ajouter un média</h3>

            <form onSubmit={handleUpload}>
              <div className="form-group form-space">
                <label className="form-label">Type de média</label>
                <select
                  value={typeMedia}
                  onChange={(e) => {
                    setTypeMedia(e.target.value)
                    setFile(null)
                    setPreview(null)
                  }}
                  className="form-select"
                >
                  <option value="image">Image</option>
                  <option value="video">Vidéo</option>
                </select>
              </div>

              <div className="form-group form-space-lg">
                <label className="form-label">Fichier</label>

                <input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFile}
                  id="media-upload"
                  style={{ display: 'none' }}
                />

                <label htmlFor="media-upload" className={file ? 'upload-zone active' : 'upload-zone'}>
                  {preview ? (
                    <img src={preview} alt="Aperçu" />
                  ) : (
                    <>
                      {typeMedia === 'image' ? <ImageIcon /> : <VideoIcon />}
                      <span>{file ? file.name : 'Cliquez pour choisir un fichier'}</span>
                    </>
                  )}
                </label>
              </div>

              <button
                type="submit"
                disabled={!file || uploading}
                className="btn btn-primary btn-full btn-sm"
                style={{ opacity: !file ? 0.5 : 1 }}
              >
                {uploading ? 'Upload en cours...' : 'Uploader le média'}
              </button>
            </form>
          </aside>
        </div>
      )}

      {lightbox && (
        <div className="modal-overlay" onClick={() => setLightbox(null)}>
          <div className="lightbox-box" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox} alt="Aperçu" />
            <button onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}

      {deleteConfirm && (
        <div className="modal-overlay">
          <div className="modal delete-modal">
            <div className="modal-header">
              <h2 className="modal-title">Supprimer ce média</h2>
              <button className="modal-close" onClick={() => setDeleteConfirm(null)}>✕</button>
            </div>

            <p className="delete-text">
              Cette action est irréversible. Le fichier sera définitivement supprimé.
            </p>

            <div className="modal-actions-responsive">
              <button onClick={() => setDeleteConfirm(null)} className="btn btn-secondary btn-sm">
                Annuler
              </button>

              <button onClick={() => handleDelete(deleteConfirm.id)} className="delete-btn">
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .media-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.83rem;
          color: var(--n-gray);
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          min-width: 0;
        }

        .media-breadcrumb a {
          color: var(--n-gray);
          text-decoration: none;
        }

        .media-breadcrumb a:hover {
          color: #fff;
        }

        .media-breadcrumb strong,
        .media-breadcrumb span:nth-child(3) {
          color: #fff;
          word-break: break-word;
        }

        .media-admin-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 320px;
          gap: 2rem;
          align-items: start;
        }

        .media-left {
          min-width: 0;
        }

        .message-space {
          margin-bottom: 1rem;
        }

        .media-section {
          margin-bottom: 2rem;
        }

        .media-section-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
          gap: 1rem;
        }

        .media-section-head h3,
        .upload-card h3 {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 800;
          color: #fff;
        }

        .media-section-head h3 span {
          color: var(--n-gray);
          font-weight: 600;
          font-size: 0.85rem;
        }

        .empty-media-box {
          height: 120px;
          border: 1px dashed rgba(255,255,255,0.12);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--n-gray);
          font-size: 0.85rem;
          text-align: center;
          padding: 1rem;
        }

        .empty-media-box.small {
          height: 80px;
        }

        .images-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 0.75rem;
        }

        .image-card,
        .video-card {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          min-width: 0;
        }

        .image-preview {
          width: 100%;
          height: 115px;
          border: none;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          display: block;
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 0.85rem;
        }

        .video-card video {
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #000;
          display: block;
        }

        .media-card-foot {
          padding: 0.55rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          background: rgba(10,22,40,0.75);
        }

        .media-card-foot span {
          font-size: 0.7rem;
          color: var(--n-gray);
        }

        .media-card-foot button {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.2);
          color: #f87171;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.73rem;
          padding: 0.25rem 0.55rem;
          font-family: var(--font-body);
        }

        .upload-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          position: sticky;
          top: 80px;
          min-width: 0;
        }

        .upload-card h3 {
          margin-bottom: 1.25rem;
        }

        .form-space {
          margin-bottom: 0.9rem;
        }

        .form-space-lg {
          margin-bottom: 1.25rem;
        }

        .upload-zone {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 120px;
          border: 2px dashed rgba(255,255,255,0.12);
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: 0.2s;
          gap: 0.5rem;
          background: transparent;
          color: var(--n-gray);
          text-align: center;
          padding: 0.8rem;
          min-width: 0;
        }

        .upload-zone:hover,
        .upload-zone.active {
          border-color: rgba(255,75,43,0.45);
          background: rgba(255,75,43,0.06);
        }

        .upload-zone svg {
          color: var(--n-orange);
          flex-shrink: 0;
        }

        .upload-zone span {
          font-size: 0.78rem;
          word-break: break-word;
          max-width: 100%;
        }

        .upload-zone img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .lightbox-box {
          max-width: 90vw;
          max-height: 90vh;
          position: relative;
        }

        .lightbox-box img {
          max-width: 100%;
          max-height: 85vh;
          border-radius: 12px;
          display: block;
        }

        .lightbox-box button {
          position: absolute;
          top: -16px;
          right: -16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #fff;
          border: none;
          color: #000;
          font-size: 1rem;
          cursor: pointer;
        }

        .delete-modal {
          max-width: 380px;
          width: min(380px, calc(100vw - 1.5rem));
        }

        .delete-text {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.65);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .modal-actions-responsive {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .delete-btn {
          padding: 0.5rem 1rem;
          border-radius: 7px;
          background: rgba(239,68,68,0.15);
          border: 1px solid rgba(239,68,68,0.35);
          color: #f87171;
          cursor: pointer;
          font-size: 0.83rem;
          font-family: var(--font-body);
          font-weight: 700;
        }

        @media (max-width: 1000px) {
          .media-admin-grid {
            grid-template-columns: 1fr;
          }

          .upload-card {
            position: relative;
            top: 0;
            order: -1;
          }
        }

        @media (max-width: 720px) {
          .images-grid {
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          }

          .videos-grid {
            grid-template-columns: 1fr;
          }

          .modal-actions-responsive {
            flex-direction: column-reverse;
          }

          .modal-actions-responsive .btn,
          .modal-actions-responsive .delete-btn {
            width: 100%;
          }
        }

        @media (max-width: 520px) {
          .media-admin-grid {
            gap: 1rem;
          }

          .upload-card {
            padding: 1rem;
          }

          .images-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.6rem;
          }

          .image-preview {
            height: 105px;
          }

          .media-card-foot {
            flex-direction: column;
            align-items: stretch;
          }

          .media-card-foot button {
            width: 100%;
          }

          .lightbox-box button {
            top: 8px;
            right: 8px;
          }
        }
      `}</style>
    </AdminLayout>
  )
}

function EmptyBox({ text, small = false }) {
  return <div className={small ? 'empty-media-box small' : 'empty-media-box'}>{text}</div>
}

function ImageIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M21 16l-5-5-4 4-2-2-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function VideoIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M17 10l4-3v10l-4-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}