export default function PageHeader({ tag, title, subtitle, children }) {
  return (
    <section className="page-header-light">
      <div className="page-header-shape one" />
      <div className="page-header-shape two" />

      <div className="page-header-content">
        {tag && <div className="section-tag">{tag}</div>}

        <h1 className="section-title">
          {title}
        </h1>

        {subtitle && (
          <p className="section-sub">
            {subtitle}
          </p>
        )}

        {children && (
          <div className="page-header-children">
            {children}
          </div>
        )}
      </div>

      <style>{`
        .page-header-light {
          padding: calc(var(--nav-h) + 4rem) 5% 4rem;
          background: linear-gradient(180deg, #fff7f4 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
          text-align: center;
          border-bottom: 1px solid rgba(17,17,17,0.06);
        }

        .page-header-shape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background: rgba(255,75,43,0.1);
        }

        .page-header-shape.one {
          width: 520px;
          height: 520px;
          top: -300px;
          left: 8%;
        }

        .page-header-shape.two {
          width: 360px;
          height: 360px;
          bottom: -220px;
          right: 12%;
        }

        .page-header-content {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
        }

        .page-header-light .section-title {
          font-size: clamp(2rem, 4.5vw, 3.3rem);
          margin-top: 0.5rem;
        }

        .page-header-light .section-sub {
          max-width: 560px;
          margin: 0.75rem auto 0;
        }

        .page-header-children {
          margin-top: 1.75rem;
        }

        @media (max-width: 520px) {
          .page-header-light {
            padding: calc(var(--nav-h) + 3rem) 1rem 3rem;
          }
        }
      `}</style>
    </section>
  )
}