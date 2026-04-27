var mv=Object.defineProperty;var hv=(e,t,r)=>t in e?mv(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Ds=(e,t,r)=>hv(e,typeof t!="symbol"?t+"":t,r);function kp(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(n,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=r(i);fetch(i.href,o)}})();function Np(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ep={exports:{}},Qa={},Cp={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),gv=Symbol.for("react.portal"),vv=Symbol.for("react.fragment"),yv=Symbol.for("react.strict_mode"),xv=Symbol.for("react.profiler"),bv=Symbol.for("react.provider"),wv=Symbol.for("react.context"),jv=Symbol.for("react.forward_ref"),Sv=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),Nv=Symbol.for("react.lazy"),nd=Symbol.iterator;function Ev(e){return e===null||typeof e!="object"?null:(e=nd&&e[nd]||e["@@iterator"],typeof e=="function"?e:null)}var _p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pp=Object.assign,Rp={};function Kn(e,t,r){this.props=e,this.context=t,this.refs=Rp,this.updater=r||_p}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tp(){}Tp.prototype=Kn.prototype;function Tu(e,t,r){this.props=e,this.context=t,this.refs=Rp,this.updater=r||_p}var zu=Tu.prototype=new Tp;zu.constructor=Tu;Pp(zu,Kn.prototype);zu.isPureReactComponent=!0;var id=Array.isArray,zp=Object.prototype.hasOwnProperty,Lu={current:null},Lp={key:!0,ref:!0,__self:!0,__source:!0};function Dp(e,t,r){var n,i={},o=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)zp.call(t,n)&&!Lp.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:to,type:e,key:o,ref:s,props:i,_owner:Lu.current}}function Cv(e,t){return{$$typeof:to,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Du(e){return typeof e=="object"&&e!==null&&e.$$typeof===to}function _v(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var od=/\/+/g;function Ms(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_v(""+e.key):t.toString(36)}function Vo(e,t,r,n,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case to:case gv:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+Ms(s,0):n,id(i)?(r="",e!=null&&(r=e.replace(od,"$&/")+"/"),Vo(i,t,r,"",function(c){return c})):i!=null&&(Du(i)&&(i=Cv(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(od,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",id(e))for(var l=0;l<e.length;l++){o=e[l];var u=n+Ms(o,l);s+=Vo(o,t,r,u,i)}else if(u=Ev(e),typeof u=="function")for(e=u.call(e),l=0;!(o=e.next()).done;)o=o.value,u=n+Ms(o,l++),s+=Vo(o,t,r,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function wo(e,t,r){if(e==null)return e;var n=[],i=0;return Vo(e,n,"","",function(o){return t.call(r,o,i++)}),n}function Pv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ze={current:null},Ho={transition:null},Rv={ReactCurrentDispatcher:Ze,ReactCurrentBatchConfig:Ho,ReactCurrentOwner:Lu};function Mp(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:wo,forEach:function(e,t,r){wo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return wo(e,function(){t++}),t},toArray:function(e){return wo(e,function(t){return t})||[]},only:function(e){if(!Du(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ie.Component=Kn;ie.Fragment=vv;ie.Profiler=xv;ie.PureComponent=Tu;ie.StrictMode=yv;ie.Suspense=Sv;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rv;ie.act=Mp;ie.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Pp({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Lu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)zp.call(t,u)&&!Lp.hasOwnProperty(u)&&(n[u]=t[u]===void 0&&l!==void 0?l[u]:t[u])}var u=arguments.length-2;if(u===1)n.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];n.children=l}return{$$typeof:to,type:e.type,key:i,ref:o,props:n,_owner:s}};ie.createContext=function(e){return e={$$typeof:wv,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:bv,_context:e},e.Consumer=e};ie.createElement=Dp;ie.createFactory=function(e){var t=Dp.bind(null,e);return t.type=e,t};ie.createRef=function(){return{current:null}};ie.forwardRef=function(e){return{$$typeof:jv,render:e}};ie.isValidElement=Du;ie.lazy=function(e){return{$$typeof:Nv,_payload:{_status:-1,_result:e},_init:Pv}};ie.memo=function(e,t){return{$$typeof:kv,type:e,compare:t===void 0?null:t}};ie.startTransition=function(e){var t=Ho.transition;Ho.transition={};try{e()}finally{Ho.transition=t}};ie.unstable_act=Mp;ie.useCallback=function(e,t){return Ze.current.useCallback(e,t)};ie.useContext=function(e){return Ze.current.useContext(e)};ie.useDebugValue=function(){};ie.useDeferredValue=function(e){return Ze.current.useDeferredValue(e)};ie.useEffect=function(e,t){return Ze.current.useEffect(e,t)};ie.useId=function(){return Ze.current.useId()};ie.useImperativeHandle=function(e,t,r){return Ze.current.useImperativeHandle(e,t,r)};ie.useInsertionEffect=function(e,t){return Ze.current.useInsertionEffect(e,t)};ie.useLayoutEffect=function(e,t){return Ze.current.useLayoutEffect(e,t)};ie.useMemo=function(e,t){return Ze.current.useMemo(e,t)};ie.useReducer=function(e,t,r){return Ze.current.useReducer(e,t,r)};ie.useRef=function(e){return Ze.current.useRef(e)};ie.useState=function(e){return Ze.current.useState(e)};ie.useSyncExternalStore=function(e,t,r){return Ze.current.useSyncExternalStore(e,t,r)};ie.useTransition=function(){return Ze.current.useTransition()};ie.version="18.3.1";Cp.exports=ie;var w=Cp.exports;const Ap=Np(w),Tv=kp({__proto__:null,default:Ap},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=w,Lv=Symbol.for("react.element"),Dv=Symbol.for("react.fragment"),Mv=Object.prototype.hasOwnProperty,Av=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ov={key:!0,ref:!0,__self:!0,__source:!0};function Op(e,t,r){var n,i={},o=null,s=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Mv.call(t,n)&&!Ov.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:Lv,type:e,key:o,ref:s,props:i,_owner:Av.current}}Qa.Fragment=Dv;Qa.jsx=Op;Qa.jsxs=Op;Ep.exports=Qa;var a=Ep.exports,wl={},Fp={exports:{}},gt={},Ip={exports:{}},Up={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(L,H){var X=L.length;L.push(H);e:for(;0<X;){var Y=X-1>>>1,oe=L[Y];if(0<i(oe,H))L[Y]=H,L[X]=oe,X=Y;else break e}}function r(L){return L.length===0?null:L[0]}function n(L){if(L.length===0)return null;var H=L[0],X=L.pop();if(X!==H){L[0]=X;e:for(var Y=0,oe=L.length,De=oe>>>1;Y<De;){var M=2*(Y+1)-1,ee=L[M],ae=M+1,ye=L[ae];if(0>i(ee,X))ae<oe&&0>i(ye,ee)?(L[Y]=ye,L[ae]=X,Y=ae):(L[Y]=ee,L[M]=X,Y=M);else if(ae<oe&&0>i(ye,X))L[Y]=ye,L[ae]=X,Y=ae;else break e}}return H}function i(L,H){var X=L.sortIndex-H.sortIndex;return X!==0?X:L.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,p=3,y=!1,x=!1,v=!1,j=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(L){for(var H=r(c);H!==null;){if(H.callback===null)n(c);else if(H.startTime<=L)n(c),H.sortIndex=H.expirationTime,t(u,H);else break;H=r(c)}}function S(L){if(v=!1,b(L),!x)if(r(u)!==null)x=!0,O(N);else{var H=r(c);H!==null&&he(S,H.startTime-L)}}function N(L,H){x=!1,v&&(v=!1,g(C),C=-1),y=!0;var X=p;try{for(b(H),f=r(u);f!==null&&(!(f.expirationTime>H)||L&&!W());){var Y=f.callback;if(typeof Y=="function"){f.callback=null,p=f.priorityLevel;var oe=Y(f.expirationTime<=H);H=e.unstable_now(),typeof oe=="function"?f.callback=oe:f===r(u)&&n(u),b(H)}else n(u);f=r(u)}if(f!==null)var De=!0;else{var M=r(c);M!==null&&he(S,M.startTime-H),De=!1}return De}finally{f=null,p=X,y=!1}}var T=!1,m=null,C=-1,_=5,z=-1;function W(){return!(e.unstable_now()-z<_)}function V(){if(m!==null){var L=e.unstable_now();z=L;var H=!0;try{H=m(!0,L)}finally{H?J():(T=!1,m=null)}}else T=!1}var J;if(typeof h=="function")J=function(){h(V)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,me=ne.port2;ne.port1.onmessage=V,J=function(){me.postMessage(null)}}else J=function(){j(V,0)};function O(L){m=L,T||(T=!0,J())}function he(L,H){C=j(function(){L(e.unstable_now())},H)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(L){L.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,O(N))},e.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<L?Math.floor(1e3/L):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(u)},e.unstable_next=function(L){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var X=p;p=H;try{return L()}finally{p=X}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(L,H){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=p;p=L;try{return H()}finally{p=X}},e.unstable_scheduleCallback=function(L,H,X){var Y=e.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Y+X:Y):X=Y,L){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=X+oe,L={id:d++,callback:H,priorityLevel:L,startTime:X,expirationTime:oe,sortIndex:-1},X>Y?(L.sortIndex=X,t(c,L),r(u)===null&&L===r(c)&&(v?(g(C),C=-1):v=!0,he(S,X-Y))):(L.sortIndex=oe,t(u,L),x||y||(x=!0,O(N))),L},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(L){var H=p;return function(){var X=p;p=H;try{return L.apply(this,arguments)}finally{p=X}}}})(Up);Ip.exports=Up;var Fv=Ip.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=w,ht=Fv;function A(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bp=new Set,Li={};function un(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(Li[e]=t,e=0;e<t.length;e++)Bp.add(t[e])}var tr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jl=Object.prototype.hasOwnProperty,Uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ad={},sd={};function Bv(e){return jl.call(sd,e)?!0:jl.call(ad,e)?!1:Uv.test(e)?sd[e]=!0:(ad[e]=!0,!1)}function $v(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wv(e,t,r,n){if(t===null||typeof t>"u"||$v(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function et(e,t,r,n,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new et(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new et(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new et(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new et(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new et(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new et(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new et(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new et(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new et(e,5,!1,e.toLowerCase(),null,!1,!1)});var Mu=/[\-:]([a-z])/g;function Au(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Mu,Au);We[t]=new et(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Mu,Au);We[t]=new et(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Mu,Au);We[t]=new et(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new et(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new et(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ou(e,t,r,n){var i=We.hasOwnProperty(t)?We[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wv(t,r,i,n)&&(r=null),n||i===null?Bv(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var sr=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jo=Symbol.for("react.element"),xn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),Fu=Symbol.for("react.strict_mode"),Sl=Symbol.for("react.profiler"),$p=Symbol.for("react.provider"),Wp=Symbol.for("react.context"),Iu=Symbol.for("react.forward_ref"),kl=Symbol.for("react.suspense"),Nl=Symbol.for("react.suspense_list"),Uu=Symbol.for("react.memo"),mr=Symbol.for("react.lazy"),Vp=Symbol.for("react.offscreen"),ld=Symbol.iterator;function ii(e){return e===null||typeof e!="object"?null:(e=ld&&e[ld]||e["@@iterator"],typeof e=="function"?e:null)}var Ne=Object.assign,As;function gi(e){if(As===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);As=t&&t[1]||""}return`
`+As+e}var Os=!1;function Fs(e,t){if(!e||Os)return"";Os=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var n=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){n=c}e.call(t.prototype)}else{try{throw Error()}catch(c){n=c}e()}}catch(c){if(c&&n&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=n.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var u=`
`+i[s].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=s&&0<=l);break}}}finally{Os=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?gi(e):""}function Vv(e){switch(e.tag){case 5:return gi(e.type);case 16:return gi("Lazy");case 13:return gi("Suspense");case 19:return gi("SuspenseList");case 0:case 2:case 15:return e=Fs(e.type,!1),e;case 11:return e=Fs(e.type.render,!1),e;case 1:return e=Fs(e.type,!0),e;default:return""}}function El(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case xn:return"Portal";case Sl:return"Profiler";case Fu:return"StrictMode";case kl:return"Suspense";case Nl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wp:return(e.displayName||"Context")+".Consumer";case $p:return(e._context.displayName||"Context")+".Provider";case Iu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Uu:return t=e.displayName||null,t!==null?t:El(e.type)||"Memo";case mr:t=e._payload,e=e._init;try{return El(e(t))}catch{}}return null}function Hv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return El(t);case 8:return t===Fu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function qv(e){var t=Hp(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function So(e){e._valueTracker||(e._valueTracker=qv(e))}function qp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Hp(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function da(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Cl(e,t){var r=t.checked;return Ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ud(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Rr(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kp(e,t){t=t.checked,t!=null&&Ou(e,"checked",t,!1)}function _l(e,t){Kp(e,t);var r=Rr(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pl(e,t.type,r):t.hasOwnProperty("defaultValue")&&Pl(e,t.type,Rr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function cd(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Pl(e,t,r){(t!=="number"||da(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vi=Array.isArray;function Tn(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Rr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Rl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(A(91));return Ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dd(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(A(92));if(vi(r)){if(1<r.length)throw Error(A(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Rr(r)}}function Qp(e,t){var r=Rr(t.value),n=Rr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function fd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Tl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ko,Yp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ko.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Di(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(e){Kv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Si[t]=Si[e]})});function Gp(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Si.hasOwnProperty(e)&&Si[e]?(""+t).trim():t+"px"}function Jp(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Gp(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Qv=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(Qv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(A(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(A(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(A(61))}if(t.style!=null&&typeof t.style!="object")throw Error(A(62))}}function Ll(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dl=null;function Bu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ml=null,zn=null,Ln=null;function pd(e){if(e=io(e)){if(typeof Ml!="function")throw Error(A(280));var t=e.stateNode;t&&(t=Za(t),Ml(e.stateNode,e.type,t))}}function Zp(e){zn?Ln?Ln.push(e):Ln=[e]:zn=e}function em(){if(zn){var e=zn,t=Ln;if(Ln=zn=null,pd(e),t)for(e=0;e<t.length;e++)pd(t[e])}}function tm(e,t){return e(t)}function rm(){}var Is=!1;function nm(e,t,r){if(Is)return e(t,r);Is=!0;try{return tm(e,t,r)}finally{Is=!1,(zn!==null||Ln!==null)&&(rm(),em())}}function Mi(e,t){var r=e.stateNode;if(r===null)return null;var n=Za(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(A(231,t,typeof r));return r}var Al=!1;if(tr)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){Al=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{Al=!1}function Xv(e,t,r,n,i,o,s,l,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(d){this.onError(d)}}var ki=!1,fa=null,pa=!1,Ol=null,Yv={onError:function(e){ki=!0,fa=e}};function Gv(e,t,r,n,i,o,s,l,u){ki=!1,fa=null,Xv.apply(Yv,arguments)}function Jv(e,t,r,n,i,o,s,l,u){if(Gv.apply(this,arguments),ki){if(ki){var c=fa;ki=!1,fa=null}else throw Error(A(198));pa||(pa=!0,Ol=c)}}function cn(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function im(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function md(e){if(cn(e)!==e)throw Error(A(188))}function Zv(e){var t=e.alternate;if(!t){if(t=cn(e),t===null)throw Error(A(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var o=i.alternate;if(o===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===r)return md(i),e;if(o===n)return md(i),t;o=o.sibling}throw Error(A(188))}if(r.return!==n.return)r=i,n=o;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=o;break}if(l===n){s=!0,n=i,r=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===r){s=!0,r=o,n=i;break}if(l===n){s=!0,n=o,r=i;break}l=l.sibling}if(!s)throw Error(A(189))}}if(r.alternate!==n)throw Error(A(190))}if(r.tag!==3)throw Error(A(188));return r.stateNode.current===r?e:t}function om(e){return e=Zv(e),e!==null?am(e):null}function am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=am(e);if(t!==null)return t;e=e.sibling}return null}var sm=ht.unstable_scheduleCallback,hd=ht.unstable_cancelCallback,ey=ht.unstable_shouldYield,ty=ht.unstable_requestPaint,Pe=ht.unstable_now,ry=ht.unstable_getCurrentPriorityLevel,$u=ht.unstable_ImmediatePriority,lm=ht.unstable_UserBlockingPriority,ma=ht.unstable_NormalPriority,ny=ht.unstable_LowPriority,um=ht.unstable_IdlePriority,Xa=null,Bt=null;function iy(e){if(Bt&&typeof Bt.onCommitFiberRoot=="function")try{Bt.onCommitFiberRoot(Xa,e,void 0,(e.current.flags&128)===128)}catch{}}var zt=Math.clz32?Math.clz32:sy,oy=Math.log,ay=Math.LN2;function sy(e){return e>>>=0,e===0?32:31-(oy(e)/ay|0)|0}var No=64,Eo=4194304;function yi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ha(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,o=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=yi(l):(o&=s,o!==0&&(n=yi(o)))}else s=r&~i,s!==0?n=yi(s):o!==0&&(n=yi(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-zt(t),i=1<<r,n|=e[r],t&=~i;return n}function ly(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uy(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-zt(o),l=1<<s,u=i[s];u===-1?(!(l&r)||l&n)&&(i[s]=ly(l,t)):u<=t&&(e.expiredLanes|=l),o&=~l}}function Fl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cm(){var e=No;return No<<=1,!(No&4194240)&&(No=64),e}function Us(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function ro(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-zt(t),e[t]=r}function cy(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-zt(r),o=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~o}}function Wu(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-zt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var fe=0;function dm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fm,Vu,pm,mm,hm,Il=!1,Co=[],wr=null,jr=null,Sr=null,Ai=new Map,Oi=new Map,gr=[],dy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gd(e,t){switch(e){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":jr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":Ai.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oi.delete(t.pointerId)}}function ai(e,t,r,n,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[i]},t!==null&&(t=io(t),t!==null&&Vu(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fy(e,t,r,n,i){switch(t){case"focusin":return wr=ai(wr,e,t,r,n,i),!0;case"dragenter":return jr=ai(jr,e,t,r,n,i),!0;case"mouseover":return Sr=ai(Sr,e,t,r,n,i),!0;case"pointerover":var o=i.pointerId;return Ai.set(o,ai(Ai.get(o)||null,e,t,r,n,i)),!0;case"gotpointercapture":return o=i.pointerId,Oi.set(o,ai(Oi.get(o)||null,e,t,r,n,i)),!0}return!1}function gm(e){var t=Hr(e.target);if(t!==null){var r=cn(t);if(r!==null){if(t=r.tag,t===13){if(t=im(r),t!==null){e.blockedOn=t,hm(e.priority,function(){pm(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Dl=n,r.target.dispatchEvent(n),Dl=null}else return t=io(r),t!==null&&Vu(t),e.blockedOn=r,!1;t.shift()}return!0}function vd(e,t,r){qo(e)&&r.delete(t)}function py(){Il=!1,wr!==null&&qo(wr)&&(wr=null),jr!==null&&qo(jr)&&(jr=null),Sr!==null&&qo(Sr)&&(Sr=null),Ai.forEach(vd),Oi.forEach(vd)}function si(e,t){e.blockedOn===t&&(e.blockedOn=null,Il||(Il=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,py)))}function Fi(e){function t(i){return si(i,e)}if(0<Co.length){si(Co[0],e);for(var r=1;r<Co.length;r++){var n=Co[r];n.blockedOn===e&&(n.blockedOn=null)}}for(wr!==null&&si(wr,e),jr!==null&&si(jr,e),Sr!==null&&si(Sr,e),Ai.forEach(t),Oi.forEach(t),r=0;r<gr.length;r++)n=gr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<gr.length&&(r=gr[0],r.blockedOn===null);)gm(r),r.blockedOn===null&&gr.shift()}var Dn=sr.ReactCurrentBatchConfig,ga=!0;function my(e,t,r,n){var i=fe,o=Dn.transition;Dn.transition=null;try{fe=1,Hu(e,t,r,n)}finally{fe=i,Dn.transition=o}}function hy(e,t,r,n){var i=fe,o=Dn.transition;Dn.transition=null;try{fe=4,Hu(e,t,r,n)}finally{fe=i,Dn.transition=o}}function Hu(e,t,r,n){if(ga){var i=Ul(e,t,r,n);if(i===null)Ys(e,t,n,va,r),gd(e,n);else if(fy(i,e,t,r,n))n.stopPropagation();else if(gd(e,n),t&4&&-1<dy.indexOf(e)){for(;i!==null;){var o=io(i);if(o!==null&&fm(o),o=Ul(e,t,r,n),o===null&&Ys(e,t,n,va,r),o===i)break;i=o}i!==null&&n.stopPropagation()}else Ys(e,t,n,null,r)}}var va=null;function Ul(e,t,r,n){if(va=null,e=Bu(n),e=Hr(e),e!==null)if(t=cn(e),t===null)e=null;else if(r=t.tag,r===13){if(e=im(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return va=e,null}function vm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ry()){case $u:return 1;case lm:return 4;case ma:case ny:return 16;case um:return 536870912;default:return 16}default:return 16}}var yr=null,qu=null,Ko=null;function ym(){if(Ko)return Ko;var e,t=qu,r=t.length,n,i="value"in yr?yr.value:yr.textContent,o=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[o-n];n++);return Ko=i.slice(e,1<n?1-n:void 0)}function Qo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function yd(){return!1}function vt(e){function t(r,n,i,o,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_o:yd,this.isPropagationStopped=yd,this}return Ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ku=vt(Qn),no=Ne({},Qn,{view:0,detail:0}),gy=vt(no),Bs,$s,li,Ya=Ne({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(Bs=e.screenX-li.screenX,$s=e.screenY-li.screenY):$s=Bs=0,li=e),Bs)},movementY:function(e){return"movementY"in e?e.movementY:$s}}),xd=vt(Ya),vy=Ne({},Ya,{dataTransfer:0}),yy=vt(vy),xy=Ne({},no,{relatedTarget:0}),Ws=vt(xy),by=Ne({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),wy=vt(by),jy=Ne({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sy=vt(jy),ky=Ne({},Qn,{data:0}),bd=vt(ky),Ny={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ey={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cy[e])?!!t[e]:!1}function Qu(){return _y}var Py=Ne({},no,{key:function(e){if(e.key){var t=Ny[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ey[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qu,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ry=vt(Py),Ty=Ne({},Ya,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wd=vt(Ty),zy=Ne({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qu}),Ly=vt(zy),Dy=Ne({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),My=vt(Dy),Ay=Ne({},Ya,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Oy=vt(Ay),Fy=[9,13,27,32],Xu=tr&&"CompositionEvent"in window,Ni=null;tr&&"documentMode"in document&&(Ni=document.documentMode);var Iy=tr&&"TextEvent"in window&&!Ni,xm=tr&&(!Xu||Ni&&8<Ni&&11>=Ni),jd=" ",Sd=!1;function bm(e,t){switch(e){case"keyup":return Fy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function Uy(e,t){switch(e){case"compositionend":return wm(t);case"keypress":return t.which!==32?null:(Sd=!0,jd);case"textInput":return e=t.data,e===jd&&Sd?null:e;default:return null}}function By(e,t){if(wn)return e==="compositionend"||!Xu&&bm(e,t)?(e=ym(),Ko=qu=yr=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xm&&t.locale!=="ko"?null:t.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$y[e.type]:t==="textarea"}function jm(e,t,r,n){Zp(n),t=ya(t,"onChange"),0<t.length&&(r=new Ku("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ei=null,Ii=null;function Wy(e){Lm(e,0)}function Ga(e){var t=kn(e);if(qp(t))return e}function Vy(e,t){if(e==="change")return t}var Sm=!1;if(tr){var Vs;if(tr){var Hs="oninput"in document;if(!Hs){var Nd=document.createElement("div");Nd.setAttribute("oninput","return;"),Hs=typeof Nd.oninput=="function"}Vs=Hs}else Vs=!1;Sm=Vs&&(!document.documentMode||9<document.documentMode)}function Ed(){Ei&&(Ei.detachEvent("onpropertychange",km),Ii=Ei=null)}function km(e){if(e.propertyName==="value"&&Ga(Ii)){var t=[];jm(t,Ii,e,Bu(e)),nm(Wy,t)}}function Hy(e,t,r){e==="focusin"?(Ed(),Ei=t,Ii=r,Ei.attachEvent("onpropertychange",km)):e==="focusout"&&Ed()}function qy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ga(Ii)}function Ky(e,t){if(e==="click")return Ga(t)}function Qy(e,t){if(e==="input"||e==="change")return Ga(t)}function Xy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Xy;function Ui(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!jl.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function Cd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _d(e,t){var r=Cd(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Cd(r)}}function Nm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Em(){for(var e=window,t=da();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=da(e.document)}return t}function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yy(e){var t=Em(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Nm(r.ownerDocument.documentElement,r)){if(n!==null&&Yu(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,o=Math.min(n.start,i);n=n.end===void 0?o:Math.min(n.end,i),!e.extend&&o>n&&(i=n,n=o,o=i),i=_d(r,o);var s=_d(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gy=tr&&"documentMode"in document&&11>=document.documentMode,jn=null,Bl=null,Ci=null,$l=!1;function Pd(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;$l||jn==null||jn!==da(n)||(n=jn,"selectionStart"in n&&Yu(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Ci&&Ui(Ci,n)||(Ci=n,n=ya(Bl,"onSelect"),0<n.length&&(t=new Ku("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=jn)))}function Po(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Sn={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},qs={},Cm={};tr&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Ja(e){if(qs[e])return qs[e];if(!Sn[e])return e;var t=Sn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Cm)return qs[e]=t[r];return e}var _m=Ja("animationend"),Pm=Ja("animationiteration"),Rm=Ja("animationstart"),Tm=Ja("transitionend"),zm=new Map,Rd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(e,t){zm.set(e,t),un(t,[e])}for(var Ks=0;Ks<Rd.length;Ks++){var Qs=Rd[Ks],Jy=Qs.toLowerCase(),Zy=Qs[0].toUpperCase()+Qs.slice(1);Lr(Jy,"on"+Zy)}Lr(_m,"onAnimationEnd");Lr(Pm,"onAnimationIteration");Lr(Rm,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(Tm,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));un("onBeforeInput",["compositionend","keypress","textInput","paste"]);un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e0=new Set("cancel close invalid load scroll toggle".split(" ").concat(xi));function Td(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Jv(n,t,void 0,e),e.currentTarget=null}function Lm(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==o&&i.isPropagationStopped())break e;Td(i,l,c),o=u}else for(s=0;s<n.length;s++){if(l=n[s],u=l.instance,c=l.currentTarget,l=l.listener,u!==o&&i.isPropagationStopped())break e;Td(i,l,c),o=u}}}if(pa)throw e=Ol,pa=!1,Ol=null,e}function xe(e,t){var r=t[Kl];r===void 0&&(r=t[Kl]=new Set);var n=e+"__bubble";r.has(n)||(Dm(t,e,2,!1),r.add(n))}function Xs(e,t,r){var n=0;t&&(n|=4),Dm(r,e,n,t)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Bi(e){if(!e[Ro]){e[Ro]=!0,Bp.forEach(function(r){r!=="selectionchange"&&(e0.has(r)||Xs(r,!1,e),Xs(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ro]||(t[Ro]=!0,Xs("selectionchange",!1,t))}}function Dm(e,t,r,n){switch(vm(t)){case 1:var i=my;break;case 4:i=hy;break;default:i=Hu}r=i.bind(null,t,r,e),i=void 0,!Al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ys(e,t,r,n,i){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var u=s.tag;if((u===3||u===4)&&(u=s.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Hr(l),s===null)return;if(u=s.tag,u===5||u===6){n=o=s;continue e}l=l.parentNode}}n=n.return}nm(function(){var c=o,d=Bu(r),f=[];e:{var p=zm.get(e);if(p!==void 0){var y=Ku,x=e;switch(e){case"keypress":if(Qo(r)===0)break e;case"keydown":case"keyup":y=Ry;break;case"focusin":x="focus",y=Ws;break;case"focusout":x="blur",y=Ws;break;case"beforeblur":case"afterblur":y=Ws;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ly;break;case _m:case Pm:case Rm:y=wy;break;case Tm:y=My;break;case"scroll":y=gy;break;case"wheel":y=Oy;break;case"copy":case"cut":case"paste":y=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=wd}var v=(t&4)!==0,j=!v&&e==="scroll",g=v?p!==null?p+"Capture":null:p;v=[];for(var h=c,b;h!==null;){b=h;var S=b.stateNode;if(b.tag===5&&S!==null&&(b=S,g!==null&&(S=Mi(h,g),S!=null&&v.push($i(h,S,b)))),j)break;h=h.return}0<v.length&&(p=new y(p,x,null,r,d),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&r!==Dl&&(x=r.relatedTarget||r.fromElement)&&(Hr(x)||x[rr]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(x=r.relatedTarget||r.toElement,y=c,x=x?Hr(x):null,x!==null&&(j=cn(x),x!==j||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(v=xd,S="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=wd,S="onPointerLeave",g="onPointerEnter",h="pointer"),j=y==null?p:kn(y),b=x==null?p:kn(x),p=new v(S,h+"leave",y,r,d),p.target=j,p.relatedTarget=b,S=null,Hr(d)===c&&(v=new v(g,h+"enter",x,r,d),v.target=b,v.relatedTarget=j,S=v),j=S,y&&x)t:{for(v=y,g=x,h=0,b=v;b;b=hn(b))h++;for(b=0,S=g;S;S=hn(S))b++;for(;0<h-b;)v=hn(v),h--;for(;0<b-h;)g=hn(g),b--;for(;h--;){if(v===g||g!==null&&v===g.alternate)break t;v=hn(v),g=hn(g)}v=null}else v=null;y!==null&&zd(f,p,y,v,!1),x!==null&&j!==null&&zd(f,j,x,v,!0)}}e:{if(p=c?kn(c):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var N=Vy;else if(kd(p))if(Sm)N=Qy;else{N=qy;var T=Hy}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(N=Ky);if(N&&(N=N(e,c))){jm(f,N,r,d);break e}T&&T(e,p,c),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Pl(p,"number",p.value)}switch(T=c?kn(c):window,e){case"focusin":(kd(T)||T.contentEditable==="true")&&(jn=T,Bl=c,Ci=null);break;case"focusout":Ci=Bl=jn=null;break;case"mousedown":$l=!0;break;case"contextmenu":case"mouseup":case"dragend":$l=!1,Pd(f,r,d);break;case"selectionchange":if(Gy)break;case"keydown":case"keyup":Pd(f,r,d)}var m;if(Xu)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else wn?bm(e,r)&&(C="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(C="onCompositionStart");C&&(xm&&r.locale!=="ko"&&(wn||C!=="onCompositionStart"?C==="onCompositionEnd"&&wn&&(m=ym()):(yr=d,qu="value"in yr?yr.value:yr.textContent,wn=!0)),T=ya(c,C),0<T.length&&(C=new bd(C,e,null,r,d),f.push({event:C,listeners:T}),m?C.data=m:(m=wm(r),m!==null&&(C.data=m)))),(m=Iy?Uy(e,r):By(e,r))&&(c=ya(c,"onBeforeInput"),0<c.length&&(d=new bd("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:c}),d.data=m))}Lm(f,t)})}function $i(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ya(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Mi(e,r),o!=null&&n.unshift($i(e,o,i)),o=Mi(e,t),o!=null&&n.push($i(e,o,i))),e=e.return}return n}function hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zd(e,t,r,n,i){for(var o=t._reactName,s=[];r!==null&&r!==n;){var l=r,u=l.alternate,c=l.stateNode;if(u!==null&&u===n)break;l.tag===5&&c!==null&&(l=c,i?(u=Mi(r,o),u!=null&&s.unshift($i(r,u,l))):i||(u=Mi(r,o),u!=null&&s.push($i(r,u,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var t0=/\r\n?/g,r0=/\u0000|\uFFFD/g;function Ld(e){return(typeof e=="string"?e:""+e).replace(t0,`
`).replace(r0,"")}function To(e,t,r){if(t=Ld(t),Ld(e)!==t&&r)throw Error(A(425))}function xa(){}var Wl=null,Vl=null;function Hl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ql=typeof setTimeout=="function"?setTimeout:void 0,n0=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,i0=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(e){return Dd.resolve(null).then(e).catch(o0)}:ql;function o0(e){setTimeout(function(){throw e})}function Gs(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Fi(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Fi(t)}function kr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Md(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Xn,Wi="__reactProps$"+Xn,rr="__reactContainer$"+Xn,Kl="__reactEvents$"+Xn,a0="__reactListeners$"+Xn,s0="__reactHandles$"+Xn;function Hr(e){var t=e[Ut];if(t)return t;for(var r=e.parentNode;r;){if(t=r[rr]||r[Ut]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Md(e);e!==null;){if(r=e[Ut])return r;e=Md(e)}return t}e=r,r=e.parentNode}return null}function io(e){return e=e[Ut]||e[rr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function kn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(A(33))}function Za(e){return e[Wi]||null}var Ql=[],Nn=-1;function Dr(e){return{current:e}}function be(e){0>Nn||(e.current=Ql[Nn],Ql[Nn]=null,Nn--)}function ve(e,t){Nn++,Ql[Nn]=e.current,e.current=t}var Tr={},Qe=Dr(Tr),it=Dr(!1),Zr=Tr;function Fn(e,t){var r=e.type.contextTypes;if(!r)return Tr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in r)i[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ot(e){return e=e.childContextTypes,e!=null}function ba(){be(it),be(Qe)}function Ad(e,t,r){if(Qe.current!==Tr)throw Error(A(168));ve(Qe,t),ve(it,r)}function Mm(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(A(108,Hv(e)||"Unknown",i));return Ne({},r,n)}function wa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tr,Zr=Qe.current,ve(Qe,e),ve(it,it.current),!0}function Od(e,t,r){var n=e.stateNode;if(!n)throw Error(A(169));r?(e=Mm(e,t,Zr),n.__reactInternalMemoizedMergedChildContext=e,be(it),be(Qe),ve(Qe,e)):be(it),ve(it,r)}var Qt=null,es=!1,Js=!1;function Am(e){Qt===null?Qt=[e]:Qt.push(e)}function l0(e){es=!0,Am(e)}function Mr(){if(!Js&&Qt!==null){Js=!0;var e=0,t=fe;try{var r=Qt;for(fe=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Qt=null,es=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),sm($u,Mr),i}finally{fe=t,Js=!1}}return null}var En=[],Cn=0,ja=null,Sa=0,bt=[],wt=0,en=null,Yt=1,Gt="";function Br(e,t){En[Cn++]=Sa,En[Cn++]=ja,ja=e,Sa=t}function Om(e,t,r){bt[wt++]=Yt,bt[wt++]=Gt,bt[wt++]=en,en=e;var n=Yt;e=Gt;var i=32-zt(n)-1;n&=~(1<<i),r+=1;var o=32-zt(t)+i;if(30<o){var s=i-i%5;o=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Yt=1<<32-zt(t)+i|r<<i|n,Gt=o+e}else Yt=1<<o|r<<i|n,Gt=e}function Gu(e){e.return!==null&&(Br(e,1),Om(e,1,0))}function Ju(e){for(;e===ja;)ja=En[--Cn],En[Cn]=null,Sa=En[--Cn],En[Cn]=null;for(;e===en;)en=bt[--wt],bt[wt]=null,Gt=bt[--wt],bt[wt]=null,Yt=bt[--wt],bt[wt]=null}var mt=null,ft=null,je=!1,Rt=null;function Fm(e,t){var r=jt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Fd(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,mt=e,ft=kr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,mt=e,ft=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=en!==null?{id:Yt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=jt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,mt=e,ft=null,!0):!1;default:return!1}}function Xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yl(e){if(je){var t=ft;if(t){var r=t;if(!Fd(e,t)){if(Xl(e))throw Error(A(418));t=kr(r.nextSibling);var n=mt;t&&Fd(e,t)?Fm(n,r):(e.flags=e.flags&-4097|2,je=!1,mt=e)}}else{if(Xl(e))throw Error(A(418));e.flags=e.flags&-4097|2,je=!1,mt=e}}}function Id(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;mt=e}function zo(e){if(e!==mt)return!1;if(!je)return Id(e),je=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Hl(e.type,e.memoizedProps)),t&&(t=ft)){if(Xl(e))throw Im(),Error(A(418));for(;t;)Fm(e,t),t=kr(t.nextSibling)}if(Id(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(A(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){ft=kr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=mt?kr(e.stateNode.nextSibling):null;return!0}function Im(){for(var e=ft;e;)e=kr(e.nextSibling)}function In(){ft=mt=null,je=!1}function Zu(e){Rt===null?Rt=[e]:Rt.push(e)}var u0=sr.ReactCurrentBatchConfig;function ui(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(A(309));var n=r.stateNode}if(!n)throw Error(A(147,e));var i=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(A(284));if(!r._owner)throw Error(A(290,e))}return e}function Lo(e,t){throw e=Object.prototype.toString.call(t),Error(A(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ud(e){var t=e._init;return t(e._payload)}function Um(e){function t(g,h){if(e){var b=g.deletions;b===null?(g.deletions=[h],g.flags|=16):b.push(h)}}function r(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function n(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=_r(g,h),g.index=0,g.sibling=null,g}function o(g,h,b){return g.index=b,e?(b=g.alternate,b!==null?(b=b.index,b<h?(g.flags|=2,h):b):(g.flags|=2,h)):(g.flags|=1048576,h)}function s(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,h,b,S){return h===null||h.tag!==6?(h=ol(b,g.mode,S),h.return=g,h):(h=i(h,b),h.return=g,h)}function u(g,h,b,S){var N=b.type;return N===bn?d(g,h,b.props.children,S,b.key):h!==null&&(h.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===mr&&Ud(N)===h.type)?(S=i(h,b.props),S.ref=ui(g,h,b),S.return=g,S):(S=ta(b.type,b.key,b.props,null,g.mode,S),S.ref=ui(g,h,b),S.return=g,S)}function c(g,h,b,S){return h===null||h.tag!==4||h.stateNode.containerInfo!==b.containerInfo||h.stateNode.implementation!==b.implementation?(h=al(b,g.mode,S),h.return=g,h):(h=i(h,b.children||[]),h.return=g,h)}function d(g,h,b,S,N){return h===null||h.tag!==7?(h=Gr(b,g.mode,S,N),h.return=g,h):(h=i(h,b),h.return=g,h)}function f(g,h,b){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ol(""+h,g.mode,b),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case jo:return b=ta(h.type,h.key,h.props,null,g.mode,b),b.ref=ui(g,null,h),b.return=g,b;case xn:return h=al(h,g.mode,b),h.return=g,h;case mr:var S=h._init;return f(g,S(h._payload),b)}if(vi(h)||ii(h))return h=Gr(h,g.mode,b,null),h.return=g,h;Lo(g,h)}return null}function p(g,h,b,S){var N=h!==null?h.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return N!==null?null:l(g,h,""+b,S);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case jo:return b.key===N?u(g,h,b,S):null;case xn:return b.key===N?c(g,h,b,S):null;case mr:return N=b._init,p(g,h,N(b._payload),S)}if(vi(b)||ii(b))return N!==null?null:d(g,h,b,S,null);Lo(g,b)}return null}function y(g,h,b,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(b)||null,l(h,g,""+S,N);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case jo:return g=g.get(S.key===null?b:S.key)||null,u(h,g,S,N);case xn:return g=g.get(S.key===null?b:S.key)||null,c(h,g,S,N);case mr:var T=S._init;return y(g,h,b,T(S._payload),N)}if(vi(S)||ii(S))return g=g.get(b)||null,d(h,g,S,N,null);Lo(h,S)}return null}function x(g,h,b,S){for(var N=null,T=null,m=h,C=h=0,_=null;m!==null&&C<b.length;C++){m.index>C?(_=m,m=null):_=m.sibling;var z=p(g,m,b[C],S);if(z===null){m===null&&(m=_);break}e&&m&&z.alternate===null&&t(g,m),h=o(z,h,C),T===null?N=z:T.sibling=z,T=z,m=_}if(C===b.length)return r(g,m),je&&Br(g,C),N;if(m===null){for(;C<b.length;C++)m=f(g,b[C],S),m!==null&&(h=o(m,h,C),T===null?N=m:T.sibling=m,T=m);return je&&Br(g,C),N}for(m=n(g,m);C<b.length;C++)_=y(m,g,C,b[C],S),_!==null&&(e&&_.alternate!==null&&m.delete(_.key===null?C:_.key),h=o(_,h,C),T===null?N=_:T.sibling=_,T=_);return e&&m.forEach(function(W){return t(g,W)}),je&&Br(g,C),N}function v(g,h,b,S){var N=ii(b);if(typeof N!="function")throw Error(A(150));if(b=N.call(b),b==null)throw Error(A(151));for(var T=N=null,m=h,C=h=0,_=null,z=b.next();m!==null&&!z.done;C++,z=b.next()){m.index>C?(_=m,m=null):_=m.sibling;var W=p(g,m,z.value,S);if(W===null){m===null&&(m=_);break}e&&m&&W.alternate===null&&t(g,m),h=o(W,h,C),T===null?N=W:T.sibling=W,T=W,m=_}if(z.done)return r(g,m),je&&Br(g,C),N;if(m===null){for(;!z.done;C++,z=b.next())z=f(g,z.value,S),z!==null&&(h=o(z,h,C),T===null?N=z:T.sibling=z,T=z);return je&&Br(g,C),N}for(m=n(g,m);!z.done;C++,z=b.next())z=y(m,g,C,z.value,S),z!==null&&(e&&z.alternate!==null&&m.delete(z.key===null?C:z.key),h=o(z,h,C),T===null?N=z:T.sibling=z,T=z);return e&&m.forEach(function(V){return t(g,V)}),je&&Br(g,C),N}function j(g,h,b,S){if(typeof b=="object"&&b!==null&&b.type===bn&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case jo:e:{for(var N=b.key,T=h;T!==null;){if(T.key===N){if(N=b.type,N===bn){if(T.tag===7){r(g,T.sibling),h=i(T,b.props.children),h.return=g,g=h;break e}}else if(T.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===mr&&Ud(N)===T.type){r(g,T.sibling),h=i(T,b.props),h.ref=ui(g,T,b),h.return=g,g=h;break e}r(g,T);break}else t(g,T);T=T.sibling}b.type===bn?(h=Gr(b.props.children,g.mode,S,b.key),h.return=g,g=h):(S=ta(b.type,b.key,b.props,null,g.mode,S),S.ref=ui(g,h,b),S.return=g,g=S)}return s(g);case xn:e:{for(T=b.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===b.containerInfo&&h.stateNode.implementation===b.implementation){r(g,h.sibling),h=i(h,b.children||[]),h.return=g,g=h;break e}else{r(g,h);break}else t(g,h);h=h.sibling}h=al(b,g.mode,S),h.return=g,g=h}return s(g);case mr:return T=b._init,j(g,h,T(b._payload),S)}if(vi(b))return x(g,h,b,S);if(ii(b))return v(g,h,b,S);Lo(g,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,h!==null&&h.tag===6?(r(g,h.sibling),h=i(h,b),h.return=g,g=h):(r(g,h),h=ol(b,g.mode,S),h.return=g,g=h),s(g)):r(g,h)}return j}var Un=Um(!0),Bm=Um(!1),ka=Dr(null),Na=null,_n=null,ec=null;function tc(){ec=_n=Na=null}function rc(e){var t=ka.current;be(ka),e._currentValue=t}function Gl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Mn(e,t){Na=e,ec=_n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function kt(e){var t=e._currentValue;if(ec!==e)if(e={context:e,memoizedValue:t,next:null},_n===null){if(Na===null)throw Error(A(308));_n=e,Na.dependencies={lanes:0,firstContext:e}}else _n=_n.next=e;return t}var qr=null;function nc(e){qr===null?qr=[e]:qr.push(e)}function $m(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,nc(t)):(r.next=i.next,i.next=r),t.interleaved=r,nr(e,n)}function nr(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var hr=!1;function ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,le&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,nr(e,r)}return i=n.interleaved,i===null?(t.next=t,nc(n)):(t.next=i.next,i.next=t),n.interleaved=t,nr(e,r)}function Xo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Wu(e,r)}}function Bd(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?i=o=s:o=o.next=s,r=r.next}while(r!==null);o===null?i=o=t:o=o.next=t}else i=o=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ea(e,t,r,n){var i=e.updateQueue;hr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,s===null?o=c:s.next=c,s=u;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(o!==null){var f=i.baseState;s=0,d=c=u=null,l=o;do{var p=l.lane,y=l.eventTime;if((n&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,v=l;switch(p=t,y=r,v.tag){case 1:if(x=v.payload,typeof x=="function"){f=x.call(y,f,p);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,p=typeof x=="function"?x.call(y,f,p):x,p==null)break e;f=Ne({},f,p);break e;case 2:hr=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else y={eventTime:y,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=y,u=f):d=d.next=y,s|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(u=f),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);rn|=s,e.lanes=s,e.memoizedState=f}}function $d(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(A(191,i));i.call(n)}}}var oo={},$t=Dr(oo),Vi=Dr(oo),Hi=Dr(oo);function Kr(e){if(e===oo)throw Error(A(174));return e}function oc(e,t){switch(ve(Hi,t),ve(Vi,e),ve($t,oo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Tl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Tl(t,e)}be($t),ve($t,t)}function Bn(){be($t),be(Vi),be(Hi)}function Vm(e){Kr(Hi.current);var t=Kr($t.current),r=Tl(t,e.type);t!==r&&(ve(Vi,e),ve($t,r))}function ac(e){Vi.current===e&&(be($t),be(Vi))}var Se=Dr(0);function Ca(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zs=[];function sc(){for(var e=0;e<Zs.length;e++)Zs[e]._workInProgressVersionPrimary=null;Zs.length=0}var Yo=sr.ReactCurrentDispatcher,el=sr.ReactCurrentBatchConfig,tn=0,ke=null,Me=null,Oe=null,_a=!1,_i=!1,qi=0,c0=0;function Ve(){throw Error(A(321))}function lc(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Dt(e[r],t[r]))return!1;return!0}function uc(e,t,r,n,i,o){if(tn=o,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yo.current=e===null||e.memoizedState===null?m0:h0,e=r(n,i),_i){o=0;do{if(_i=!1,qi=0,25<=o)throw Error(A(301));o+=1,Oe=Me=null,t.updateQueue=null,Yo.current=g0,e=r(n,i)}while(_i)}if(Yo.current=Pa,t=Me!==null&&Me.next!==null,tn=0,Oe=Me=ke=null,_a=!1,t)throw Error(A(300));return e}function cc(){var e=qi!==0;return qi=0,e}function It(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ke.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Nt(){if(Me===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Oe===null?ke.memoizedState:Oe.next;if(t!==null)Oe=t,Me=e;else{if(e===null)throw Error(A(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Oe===null?ke.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function Ki(e,t){return typeof t=="function"?t(e):t}function tl(e){var t=Nt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var n=Me,i=n.baseQueue,o=r.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}n.baseQueue=i=o,r.pending=null}if(i!==null){o=i.next,n=n.baseState;var l=s=null,u=null,c=o;do{var d=c.lane;if((tn&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),n=c.hasEagerState?c.eagerState:e(n,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=f,s=n):u=u.next=f,ke.lanes|=d,rn|=d}c=c.next}while(c!==null&&c!==o);u===null?s=n:u.next=l,Dt(n,t.memoizedState)||(nt=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=u,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do o=i.lane,ke.lanes|=o,rn|=o,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function rl(e){var t=Nt(),r=t.queue;if(r===null)throw Error(A(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,o=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Dt(o,t.memoizedState)||(nt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Hm(){}function qm(e,t){var r=ke,n=Nt(),i=t(),o=!Dt(n.memoizedState,i);if(o&&(n.memoizedState=i,nt=!0),n=n.queue,dc(Xm.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||Oe!==null&&Oe.memoizedState.tag&1){if(r.flags|=2048,Qi(9,Qm.bind(null,r,n,i,t),void 0,null),Fe===null)throw Error(A(349));tn&30||Km(r,t,i)}return i}function Km(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Qm(e,t,r,n){t.value=r,t.getSnapshot=n,Ym(t)&&Gm(e)}function Xm(e,t,r){return r(function(){Ym(t)&&Gm(e)})}function Ym(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Dt(e,r)}catch{return!0}}function Gm(e){var t=nr(e,1);t!==null&&Lt(t,e,1,-1)}function Wd(e){var t=It();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:e},t.queue=e,e=e.dispatch=p0.bind(null,ke,e),[t.memoizedState,e]}function Qi(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Jm(){return Nt().memoizedState}function Go(e,t,r,n){var i=It();ke.flags|=e,i.memoizedState=Qi(1|t,r,void 0,n===void 0?null:n)}function ts(e,t,r,n){var i=Nt();n=n===void 0?null:n;var o=void 0;if(Me!==null){var s=Me.memoizedState;if(o=s.destroy,n!==null&&lc(n,s.deps)){i.memoizedState=Qi(t,r,o,n);return}}ke.flags|=e,i.memoizedState=Qi(1|t,r,o,n)}function Vd(e,t){return Go(8390656,8,e,t)}function dc(e,t){return ts(2048,8,e,t)}function Zm(e,t){return ts(4,2,e,t)}function eh(e,t){return ts(4,4,e,t)}function th(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rh(e,t,r){return r=r!=null?r.concat([e]):null,ts(4,4,th.bind(null,t,e),r)}function fc(){}function nh(e,t){var r=Nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&lc(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function ih(e,t){var r=Nt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&lc(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function oh(e,t,r){return tn&21?(Dt(r,t)||(r=cm(),ke.lanes|=r,rn|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=r)}function d0(e,t){var r=fe;fe=r!==0&&4>r?r:4,e(!0);var n=el.transition;el.transition={};try{e(!1),t()}finally{fe=r,el.transition=n}}function ah(){return Nt().memoizedState}function f0(e,t,r){var n=Cr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},sh(e))lh(t,r);else if(r=$m(e,t,r,n),r!==null){var i=Ge();Lt(r,e,n,i),uh(r,t,n)}}function p0(e,t,r){var n=Cr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(sh(e))lh(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,r);if(i.hasEagerState=!0,i.eagerState=l,Dt(l,s)){var u=t.interleaved;u===null?(i.next=i,nc(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}r=$m(e,t,i,n),r!==null&&(i=Ge(),Lt(r,e,n,i),uh(r,t,n))}}function sh(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function lh(e,t){_i=_a=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function uh(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Wu(e,r)}}var Pa={readContext:kt,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useInsertionEffect:Ve,useLayoutEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useMutableSource:Ve,useSyncExternalStore:Ve,useId:Ve,unstable_isNewReconciler:!1},m0={readContext:kt,useCallback:function(e,t){return It().memoizedState=[e,t===void 0?null:t],e},useContext:kt,useEffect:Vd,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Go(4194308,4,th.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){return Go(4,2,e,t)},useMemo:function(e,t){var r=It();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=It();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=f0.bind(null,ke,e),[n.memoizedState,e]},useRef:function(e){var t=It();return e={current:e},t.memoizedState=e},useState:Wd,useDebugValue:fc,useDeferredValue:function(e){return It().memoizedState=e},useTransition:function(){var e=Wd(!1),t=e[0];return e=d0.bind(null,e[1]),It().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ke,i=It();if(je){if(r===void 0)throw Error(A(407));r=r()}else{if(r=t(),Fe===null)throw Error(A(349));tn&30||Km(n,t,r)}i.memoizedState=r;var o={value:r,getSnapshot:t};return i.queue=o,Vd(Xm.bind(null,n,o,e),[e]),n.flags|=2048,Qi(9,Qm.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=It(),t=Fe.identifierPrefix;if(je){var r=Gt,n=Yt;r=(n&~(1<<32-zt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=qi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=c0++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},h0={readContext:kt,useCallback:nh,useContext:kt,useEffect:dc,useImperativeHandle:rh,useInsertionEffect:Zm,useLayoutEffect:eh,useMemo:ih,useReducer:tl,useRef:Jm,useState:function(){return tl(Ki)},useDebugValue:fc,useDeferredValue:function(e){var t=Nt();return oh(t,Me.memoizedState,e)},useTransition:function(){var e=tl(Ki)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Hm,useSyncExternalStore:qm,useId:ah,unstable_isNewReconciler:!1},g0={readContext:kt,useCallback:nh,useContext:kt,useEffect:dc,useImperativeHandle:rh,useInsertionEffect:Zm,useLayoutEffect:eh,useMemo:ih,useReducer:rl,useRef:Jm,useState:function(){return rl(Ki)},useDebugValue:fc,useDeferredValue:function(e){var t=Nt();return Me===null?t.memoizedState=e:oh(t,Me.memoizedState,e)},useTransition:function(){var e=rl(Ki)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:Hm,useSyncExternalStore:qm,useId:ah,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=Ne({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Jl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Ne({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var rs={isMounted:function(e){return(e=e._reactInternals)?cn(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ge(),i=Cr(e),o=Jt(n,i);o.payload=t,r!=null&&(o.callback=r),t=Nr(e,o,i),t!==null&&(Lt(t,e,i,n),Xo(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ge(),i=Cr(e),o=Jt(n,i);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=Nr(e,o,i),t!==null&&(Lt(t,e,i,n),Xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ge(),n=Cr(e),i=Jt(r,n);i.tag=2,t!=null&&(i.callback=t),t=Nr(e,i,n),t!==null&&(Lt(t,e,n,r),Xo(t,e,n))}};function Hd(e,t,r,n,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,s):t.prototype&&t.prototype.isPureReactComponent?!Ui(r,n)||!Ui(i,o):!0}function ch(e,t,r){var n=!1,i=Tr,o=t.contextType;return typeof o=="object"&&o!==null?o=kt(o):(i=ot(t)?Zr:Qe.current,n=t.contextTypes,o=(n=n!=null)?Fn(e,i):Tr),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=rs,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function qd(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&rs.enqueueReplaceState(t,t.state,null)}function Zl(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},ic(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=kt(o):(o=ot(t)?Zr:Qe.current,i.context=Fn(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Jl(e,t,o,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&rs.enqueueReplaceState(i,i.state,null),Ea(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function $n(e,t){try{var r="",n=t;do r+=Vv(n),n=n.return;while(n);var i=r}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function nl(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function eu(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var v0=typeof WeakMap=="function"?WeakMap:Map;function dh(e,t,r){r=Jt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ta||(Ta=!0,cu=n),eu(e,t)},r}function fh(e,t,r){r=Jt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){eu(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){eu(e,t),typeof n!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Kd(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new v0;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=T0.bind(null,e,t,r),t.then(e,e))}function Qd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Xd(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Jt(-1,1),t.tag=2,Nr(r,t,1))),r.lanes|=1),e)}var y0=sr.ReactCurrentOwner,nt=!1;function Ye(e,t,r,n){t.child=e===null?Bm(t,null,r,n):Un(t,e.child,r,n)}function Yd(e,t,r,n,i){r=r.render;var o=t.ref;return Mn(t,i),n=uc(e,t,r,n,o,i),r=cc(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ir(e,t,i)):(je&&r&&Gu(t),t.flags|=1,Ye(e,t,n,i),t.child)}function Gd(e,t,r,n,i){if(e===null){var o=r.type;return typeof o=="function"&&!bc(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,ph(e,t,o,n,i)):(e=ta(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(r=r.compare,r=r!==null?r:Ui,r(s,n)&&e.ref===t.ref)return ir(e,t,i)}return t.flags|=1,e=_r(o,n),e.ref=t.ref,e.return=t,t.child=e}function ph(e,t,r,n,i){if(e!==null){var o=e.memoizedProps;if(Ui(o,n)&&e.ref===t.ref)if(nt=!1,t.pendingProps=n=o,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,ir(e,t,i)}return tu(e,t,r,n,i)}function mh(e,t,r){var n=t.pendingProps,i=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Rn,ct),ct|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ve(Rn,ct),ct|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,ve(Rn,ct),ct|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,ve(Rn,ct),ct|=n;return Ye(e,t,i,r),t.child}function hh(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function tu(e,t,r,n,i){var o=ot(r)?Zr:Qe.current;return o=Fn(t,o),Mn(t,i),r=uc(e,t,r,n,o,i),n=cc(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ir(e,t,i)):(je&&n&&Gu(t),t.flags|=1,Ye(e,t,r,i),t.child)}function Jd(e,t,r,n,i){if(ot(r)){var o=!0;wa(t)}else o=!1;if(Mn(t,i),t.stateNode===null)Jo(e,t),ch(t,r,n),Zl(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var u=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=kt(c):(c=ot(r)?Zr:Qe.current,c=Fn(t,c));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||u!==c)&&qd(t,s,n,c),hr=!1;var p=t.memoizedState;s.state=p,Ea(t,n,s,i),u=t.memoizedState,l!==n||p!==u||it.current||hr?(typeof d=="function"&&(Jl(t,r,d,n),u=t.memoizedState),(l=hr||Hd(t,r,l,n,p,u,c))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=u),s.props=n,s.state=u,s.context=c,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Wm(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Ct(t.type,l),s.props=c,f=t.pendingProps,p=s.context,u=r.contextType,typeof u=="object"&&u!==null?u=kt(u):(u=ot(r)?Zr:Qe.current,u=Fn(t,u));var y=r.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||p!==u)&&qd(t,s,n,u),hr=!1,p=t.memoizedState,s.state=p,Ea(t,n,s,i);var x=t.memoizedState;l!==f||p!==x||it.current||hr?(typeof y=="function"&&(Jl(t,r,y,n),x=t.memoizedState),(c=hr||Hd(t,r,c,n,p,x,u)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,x,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,x,u)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),s.props=n,s.state=x,s.context=u,n=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return ru(e,t,r,n,o,i)}function ru(e,t,r,n,i,o){hh(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&Od(t,r,!1),ir(e,t,o);n=t.stateNode,y0.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=Un(t,e.child,null,o),t.child=Un(t,null,l,o)):Ye(e,t,l,o),t.memoizedState=n.state,i&&Od(t,r,!0),t.child}function gh(e){var t=e.stateNode;t.pendingContext?Ad(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ad(e,t.context,!1),oc(e,t.containerInfo)}function Zd(e,t,r,n,i){return In(),Zu(i),t.flags|=256,Ye(e,t,r,n),t.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(e){return{baseLanes:e,cachePool:null,transitions:null}}function vh(e,t,r){var n=t.pendingProps,i=Se.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ve(Se,i&1),e===null)return Yl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,o?(n=t.mode,o=t.child,s={mode:"hidden",children:s},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=os(s,n,0,null),e=Gr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=iu(r),t.memoizedState=nu,e):pc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return x0(e,t,s,n,l,i,r);if(o){o=n.fallback,s=t.mode,i=e.child,l=i.sibling;var u={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=u,t.deletions=null):(n=_r(i,u),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=_r(l,o):(o=Gr(o,s,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,s=e.child.memoizedState,s=s===null?iu(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~r,t.memoizedState=nu,n}return o=e.child,e=o.sibling,n=_r(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function pc(e,t){return t=os({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Do(e,t,r,n){return n!==null&&Zu(n),Un(t,e.child,null,r),e=pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function x0(e,t,r,n,i,o,s){if(r)return t.flags&256?(t.flags&=-257,n=nl(Error(A(422))),Do(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,i=t.mode,n=os({mode:"visible",children:n.children},i,0,null),o=Gr(o,i,s,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Un(t,e.child,null,s),t.child.memoizedState=iu(s),t.memoizedState=nu,o);if(!(t.mode&1))return Do(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,o=Error(A(419)),n=nl(o,n,void 0),Do(e,t,s,n)}if(l=(s&e.childLanes)!==0,nt||l){if(n=Fe,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,nr(e,i),Lt(n,e,i,-1))}return xc(),n=nl(Error(A(421))),Do(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=z0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ft=kr(i.nextSibling),mt=t,je=!0,Rt=null,e!==null&&(bt[wt++]=Yt,bt[wt++]=Gt,bt[wt++]=en,Yt=e.id,Gt=e.overflow,en=t),t=pc(t,n.children),t.flags|=4096,t)}function ef(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Gl(e.return,t,r)}function il(e,t,r,n,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=i)}function yh(e,t,r){var n=t.pendingProps,i=n.revealOrder,o=n.tail;if(Ye(e,t,n.children,r),n=Se.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ef(e,r,t);else if(e.tag===19)ef(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ve(Se,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Ca(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),il(t,!1,i,r,o);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ca(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}il(t,!0,r,null,o);break;case"together":il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ir(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(A(153));if(t.child!==null){for(e=t.child,r=_r(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=_r(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function b0(e,t,r){switch(t.tag){case 3:gh(t),In();break;case 5:Vm(t);break;case 1:ot(t.type)&&wa(t);break;case 4:oc(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ve(ka,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ve(Se,Se.current&1),t.flags|=128,null):r&t.child.childLanes?vh(e,t,r):(ve(Se,Se.current&1),e=ir(e,t,r),e!==null?e.sibling:null);ve(Se,Se.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return yh(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Se,Se.current),n)break;return null;case 22:case 23:return t.lanes=0,mh(e,t,r)}return ir(e,t,r)}var xh,ou,bh,wh;xh=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ou=function(){};bh=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Kr($t.current);var o=null;switch(r){case"input":i=Cl(e,i),n=Cl(e,n),o=[];break;case"select":i=Ne({},i,{value:void 0}),n=Ne({},n,{value:void 0}),o=[];break;case"textarea":i=Rl(e,i),n=Rl(e,n),o=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=xa)}zl(r,n);var s;r=null;for(c in i)if(!n.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Li.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in n){var u=n[c];if(l=i!=null?i[c]:void 0,n.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||u&&u.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in u)u.hasOwnProperty(s)&&l[s]!==u[s]&&(r||(r={}),r[s]=u[s])}else r||(o||(o=[]),o.push(c,r)),r=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Li.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&xe("scroll",e),o||l===u||(o=[])):(o=o||[]).push(c,u))}r&&(o=o||[]).push("style",r);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};wh=function(e,t,r,n){r!==n&&(t.flags|=4)};function ci(e,t){if(!je)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function w0(e,t,r){var n=t.pendingProps;switch(Ju(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return ot(t.type)&&ba(),He(t),null;case 3:return n=t.stateNode,Bn(),be(it),be(Qe),sc(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Rt!==null&&(pu(Rt),Rt=null))),ou(e,t),He(t),null;case 5:ac(t);var i=Kr(Hi.current);if(r=t.type,e!==null&&t.stateNode!=null)bh(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(A(166));return He(t),null}if(e=Kr($t.current),zo(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Ut]=t,n[Wi]=o,e=(t.mode&1)!==0,r){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(i=0;i<xi.length;i++)xe(xi[i],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":ud(n,o),xe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},xe("invalid",n);break;case"textarea":dd(n,o),xe("invalid",n)}zl(r,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?n.textContent!==l&&(o.suppressHydrationWarning!==!0&&To(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&To(n.textContent,l,e),i=["children",""+l]):Li.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&xe("scroll",n)}switch(r){case"input":So(n),cd(n,o,!0);break;case"textarea":So(n),fd(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=xa)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xp(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Ut]=t,e[Wi]=n,xh(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ll(r,n),r){case"dialog":xe("cancel",e),xe("close",e),i=n;break;case"iframe":case"object":case"embed":xe("load",e),i=n;break;case"video":case"audio":for(i=0;i<xi.length;i++)xe(xi[i],e);i=n;break;case"source":xe("error",e),i=n;break;case"img":case"image":case"link":xe("error",e),xe("load",e),i=n;break;case"details":xe("toggle",e),i=n;break;case"input":ud(e,n),i=Cl(e,n),xe("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Ne({},n,{value:void 0}),xe("invalid",e);break;case"textarea":dd(e,n),i=Rl(e,n),xe("invalid",e);break;default:i=n}zl(r,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var u=l[o];o==="style"?Jp(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Yp(e,u)):o==="children"?typeof u=="string"?(r!=="textarea"||u!=="")&&Di(e,u):typeof u=="number"&&Di(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Li.hasOwnProperty(o)?u!=null&&o==="onScroll"&&xe("scroll",e):u!=null&&Ou(e,o,u,s))}switch(r){case"input":So(e),cd(e,n,!1);break;case"textarea":So(e),fd(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Rr(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?Tn(e,!!n.multiple,o,!1):n.defaultValue!=null&&Tn(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=xa)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)wh(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(A(166));if(r=Kr(Hi.current),Kr($t.current),zo(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ut]=t,(o=n.nodeValue!==r)&&(e=mt,e!==null))switch(e.tag){case 3:To(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&To(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ut]=t,t.stateNode=n}return He(t),null;case 13:if(be(Se),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(je&&ft!==null&&t.mode&1&&!(t.flags&128))Im(),In(),t.flags|=98560,o=!1;else if(o=zo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(A(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(A(317));o[Ut]=t}else In(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),o=!1}else Rt!==null&&(pu(Rt),Rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||Se.current&1?Ae===0&&(Ae=3):xc())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return Bn(),ou(e,t),e===null&&Bi(t.stateNode.containerInfo),He(t),null;case 10:return rc(t.type._context),He(t),null;case 17:return ot(t.type)&&ba(),He(t),null;case 19:if(be(Se),o=t.memoizedState,o===null)return He(t),null;if(n=(t.flags&128)!==0,s=o.rendering,s===null)if(n)ci(o,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ca(e),s!==null){for(t.flags|=128,ci(o,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ve(Se,Se.current&1|2),t.child}e=e.sibling}o.tail!==null&&Pe()>Wn&&(t.flags|=128,n=!0,ci(o,!1),t.lanes=4194304)}else{if(!n)if(e=Ca(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ci(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!je)return He(t),null}else 2*Pe()-o.renderingStartTime>Wn&&r!==1073741824&&(t.flags|=128,n=!0,ci(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(r=o.last,r!==null?r.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Pe(),t.sibling=null,r=Se.current,ve(Se,n?r&1|2:r&1),t):(He(t),null);case 22:case 23:return yc(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?ct&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(A(156,t.tag))}function j0(e,t){switch(Ju(t),t.tag){case 1:return ot(t.type)&&ba(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bn(),be(it),be(Qe),sc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ac(t),null;case 13:if(be(Se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(A(340));In()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return be(Se),null;case 4:return Bn(),null;case 10:return rc(t.type._context),null;case 22:case 23:return yc(),null;case 24:return null;default:return null}}var Mo=!1,qe=!1,S0=typeof WeakSet=="function"?WeakSet:Set,I=null;function Pn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){_e(e,t,n)}else r.current=null}function au(e,t,r){try{r()}catch(n){_e(e,t,n)}}var tf=!1;function k0(e,t){if(Wl=ga,e=Em(),Yu(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var y;f!==r||i!==0&&f.nodeType!==3||(l=s+i),f!==o||n!==0&&f.nodeType!==3||(u=s+n),f.nodeType===3&&(s+=f.nodeValue.length),(y=f.firstChild)!==null;)p=f,f=y;for(;;){if(f===e)break t;if(p===r&&++c===i&&(l=s),p===o&&++d===n&&(u=s),(y=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=y}r=l===-1||u===-1?null:{start:l,end:u}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vl={focusedElem:e,selectionRange:r},ga=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,j=x.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:Ct(t.type,v),j);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(S){_e(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return x=tf,tf=!1,x}function Pi(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&au(t,r,o)}i=i.next}while(i!==n)}}function ns(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function su(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function jh(e){var t=e.alternate;t!==null&&(e.alternate=null,jh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ut],delete t[Wi],delete t[Kl],delete t[a0],delete t[s0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sh(e){return e.tag===5||e.tag===3||e.tag===4}function rf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=xa));else if(n!==4&&(e=e.child,e!==null))for(lu(e,t,r),e=e.sibling;e!==null;)lu(e,t,r),e=e.sibling}function uu(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(uu(e,t,r),e=e.sibling;e!==null;)uu(e,t,r),e=e.sibling}var Be=null,_t=!1;function fr(e,t,r){for(r=r.child;r!==null;)kh(e,t,r),r=r.sibling}function kh(e,t,r){if(Bt&&typeof Bt.onCommitFiberUnmount=="function")try{Bt.onCommitFiberUnmount(Xa,r)}catch{}switch(r.tag){case 5:qe||Pn(r,t);case 6:var n=Be,i=_t;Be=null,fr(e,t,r),Be=n,_t=i,Be!==null&&(_t?(e=Be,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Be.removeChild(r.stateNode));break;case 18:Be!==null&&(_t?(e=Be,r=r.stateNode,e.nodeType===8?Gs(e.parentNode,r):e.nodeType===1&&Gs(e,r),Fi(e)):Gs(Be,r.stateNode));break;case 4:n=Be,i=_t,Be=r.stateNode.containerInfo,_t=!0,fr(e,t,r),Be=n,_t=i;break;case 0:case 11:case 14:case 15:if(!qe&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&au(r,t,s),i=i.next}while(i!==n)}fr(e,t,r);break;case 1:if(!qe&&(Pn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){_e(r,t,l)}fr(e,t,r);break;case 21:fr(e,t,r);break;case 22:r.mode&1?(qe=(n=qe)||r.memoizedState!==null,fr(e,t,r),qe=n):fr(e,t,r);break;default:fr(e,t,r)}}function nf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new S0),t.forEach(function(n){var i=L0.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Et(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Be=l.stateNode,_t=!1;break e;case 3:Be=l.stateNode.containerInfo,_t=!0;break e;case 4:Be=l.stateNode.containerInfo,_t=!0;break e}l=l.return}if(Be===null)throw Error(A(160));kh(o,s,i),Be=null,_t=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){_e(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Nh(t,e),t=t.sibling}function Nh(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Ft(e),n&4){try{Pi(3,e,e.return),ns(3,e)}catch(v){_e(e,e.return,v)}try{Pi(5,e,e.return)}catch(v){_e(e,e.return,v)}}break;case 1:Et(t,e),Ft(e),n&512&&r!==null&&Pn(r,r.return);break;case 5:if(Et(t,e),Ft(e),n&512&&r!==null&&Pn(r,r.return),e.flags&32){var i=e.stateNode;try{Di(i,"")}catch(v){_e(e,e.return,v)}}if(n&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=r!==null?r.memoizedProps:o,l=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Kp(i,o),Ll(l,s);var c=Ll(l,o);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];d==="style"?Jp(i,f):d==="dangerouslySetInnerHTML"?Yp(i,f):d==="children"?Di(i,f):Ou(i,d,f,c)}switch(l){case"input":_l(i,o);break;case"textarea":Qp(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Tn(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Tn(i,!!o.multiple,o.defaultValue,!0):Tn(i,!!o.multiple,o.multiple?[]:"",!1))}i[Wi]=o}catch(v){_e(e,e.return,v)}}break;case 6:if(Et(t,e),Ft(e),n&4){if(e.stateNode===null)throw Error(A(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){_e(e,e.return,v)}}break;case 3:if(Et(t,e),Ft(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Fi(t.containerInfo)}catch(v){_e(e,e.return,v)}break;case 4:Et(t,e),Ft(e);break;case 13:Et(t,e),Ft(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(gc=Pe())),n&4&&nf(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(qe=(c=qe)||d,Et(t,e),qe=c):Et(t,e),Ft(e),n&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!d&&e.mode&1)for(I=e,d=e.child;d!==null;){for(f=I=d;I!==null;){switch(p=I,y=p.child,p.tag){case 0:case 11:case 14:case 15:Pi(4,p,p.return);break;case 1:Pn(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){_e(n,r,v)}}break;case 5:Pn(p,p.return);break;case 22:if(p.memoizedState!==null){af(f);continue}}y!==null?(y.return=p,I=y):af(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,u=f.memoizedProps.style,s=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Gp("display",s))}catch(v){_e(e,e.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){_e(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Et(t,e),Ft(e),n&4&&nf(e);break;case 21:break;default:Et(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Sh(r)){var n=r;break e}r=r.return}throw Error(A(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Di(i,""),n.flags&=-33);var o=rf(e);uu(e,o,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=rf(e);lu(e,l,s);break;default:throw Error(A(161))}}catch(u){_e(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function N0(e,t,r){I=e,Eh(e)}function Eh(e,t,r){for(var n=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||Mo;if(!s){var l=i.alternate,u=l!==null&&l.memoizedState!==null||qe;l=Mo;var c=qe;if(Mo=s,(qe=u)&&!c)for(I=i;I!==null;)s=I,u=s.child,s.tag===22&&s.memoizedState!==null?sf(i):u!==null?(u.return=s,I=u):sf(i);for(;o!==null;)I=o,Eh(o),o=o.sibling;I=i,Mo=l,qe=c}of(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):of(e)}}function of(e){for(;I!==null;){var t=I;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:qe||ns(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!qe)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ct(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&$d(t,o,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}$d(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&r.focus();break;case"img":u.src&&(r.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Fi(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}qe||t.flags&512&&su(t)}catch(p){_e(t,t.return,p)}}if(t===e){I=null;break}if(r=t.sibling,r!==null){r.return=t.return,I=r;break}I=t.return}}function af(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var r=t.sibling;if(r!==null){r.return=t.return,I=r;break}I=t.return}}function sf(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ns(4,t)}catch(u){_e(t,r,u)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(u){_e(t,i,u)}}var o=t.return;try{su(t)}catch(u){_e(t,o,u)}break;case 5:var s=t.return;try{su(t)}catch(u){_e(t,s,u)}}}catch(u){_e(t,t.return,u)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var E0=Math.ceil,Ra=sr.ReactCurrentDispatcher,mc=sr.ReactCurrentOwner,St=sr.ReactCurrentBatchConfig,le=0,Fe=null,Le=null,$e=0,ct=0,Rn=Dr(0),Ae=0,Xi=null,rn=0,is=0,hc=0,Ri=null,rt=null,gc=0,Wn=1/0,Kt=null,Ta=!1,cu=null,Er=null,Ao=!1,xr=null,za=0,Ti=0,du=null,Zo=-1,ea=0;function Ge(){return le&6?Pe():Zo!==-1?Zo:Zo=Pe()}function Cr(e){return e.mode&1?le&2&&$e!==0?$e&-$e:u0.transition!==null?(ea===0&&(ea=cm()),ea):(e=fe,e!==0||(e=window.event,e=e===void 0?16:vm(e.type)),e):1}function Lt(e,t,r,n){if(50<Ti)throw Ti=0,du=null,Error(A(185));ro(e,r,n),(!(le&2)||e!==Fe)&&(e===Fe&&(!(le&2)&&(is|=r),Ae===4&&vr(e,$e)),at(e,n),r===1&&le===0&&!(t.mode&1)&&(Wn=Pe()+500,es&&Mr()))}function at(e,t){var r=e.callbackNode;uy(e,t);var n=ha(e,e===Fe?$e:0);if(n===0)r!==null&&hd(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&hd(r),t===1)e.tag===0?l0(lf.bind(null,e)):Am(lf.bind(null,e)),i0(function(){!(le&6)&&Mr()}),r=null;else{switch(dm(n)){case 1:r=$u;break;case 4:r=lm;break;case 16:r=ma;break;case 536870912:r=um;break;default:r=ma}r=Dh(r,Ch.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Ch(e,t){if(Zo=-1,ea=0,le&6)throw Error(A(327));var r=e.callbackNode;if(An()&&e.callbackNode!==r)return null;var n=ha(e,e===Fe?$e:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=La(e,n);else{t=n;var i=le;le|=2;var o=Ph();(Fe!==e||$e!==t)&&(Kt=null,Wn=Pe()+500,Yr(e,t));do try{P0();break}catch(l){_h(e,l)}while(!0);tc(),Ra.current=o,le=i,Le!==null?t=0:(Fe=null,$e=0,t=Ae)}if(t!==0){if(t===2&&(i=Fl(e),i!==0&&(n=i,t=fu(e,i))),t===1)throw r=Xi,Yr(e,0),vr(e,n),at(e,Pe()),r;if(t===6)vr(e,n);else{if(i=e.current.alternate,!(n&30)&&!C0(i)&&(t=La(e,n),t===2&&(o=Fl(e),o!==0&&(n=o,t=fu(e,o))),t===1))throw r=Xi,Yr(e,0),vr(e,n),at(e,Pe()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(A(345));case 2:$r(e,rt,Kt);break;case 3:if(vr(e,n),(n&130023424)===n&&(t=gc+500-Pe(),10<t)){if(ha(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ql($r.bind(null,e,rt,Kt),t);break}$r(e,rt,Kt);break;case 4:if(vr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-zt(n);o=1<<s,s=t[s],s>i&&(i=s),n&=~o}if(n=i,n=Pe()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*E0(n/1960))-n,10<n){e.timeoutHandle=ql($r.bind(null,e,rt,Kt),n);break}$r(e,rt,Kt);break;case 5:$r(e,rt,Kt);break;default:throw Error(A(329))}}}return at(e,Pe()),e.callbackNode===r?Ch.bind(null,e):null}function fu(e,t){var r=Ri;return e.current.memoizedState.isDehydrated&&(Yr(e,t).flags|=256),e=La(e,t),e!==2&&(t=rt,rt=r,t!==null&&pu(t)),e}function pu(e){rt===null?rt=e:rt.push.apply(rt,e)}function C0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],o=i.getSnapshot;i=i.value;try{if(!Dt(o(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function vr(e,t){for(t&=~hc,t&=~is,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-zt(t),n=1<<r;e[r]=-1,t&=~n}}function lf(e){if(le&6)throw Error(A(327));An();var t=ha(e,0);if(!(t&1))return at(e,Pe()),null;var r=La(e,t);if(e.tag!==0&&r===2){var n=Fl(e);n!==0&&(t=n,r=fu(e,n))}if(r===1)throw r=Xi,Yr(e,0),vr(e,t),at(e,Pe()),r;if(r===6)throw Error(A(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$r(e,rt,Kt),at(e,Pe()),null}function vc(e,t){var r=le;le|=1;try{return e(t)}finally{le=r,le===0&&(Wn=Pe()+500,es&&Mr())}}function nn(e){xr!==null&&xr.tag===0&&!(le&6)&&An();var t=le;le|=1;var r=St.transition,n=fe;try{if(St.transition=null,fe=1,e)return e()}finally{fe=n,St.transition=r,le=t,!(le&6)&&Mr()}}function yc(){ct=Rn.current,be(Rn)}function Yr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,n0(r)),Le!==null)for(r=Le.return;r!==null;){var n=r;switch(Ju(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&ba();break;case 3:Bn(),be(it),be(Qe),sc();break;case 5:ac(n);break;case 4:Bn();break;case 13:be(Se);break;case 19:be(Se);break;case 10:rc(n.type._context);break;case 22:case 23:yc()}r=r.return}if(Fe=e,Le=e=_r(e.current,null),$e=ct=t,Ae=0,Xi=null,hc=is=rn=0,rt=Ri=null,qr!==null){for(t=0;t<qr.length;t++)if(r=qr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,o=r.pending;if(o!==null){var s=o.next;o.next=i,n.next=s}r.pending=n}qr=null}return e}function _h(e,t){do{var r=Le;try{if(tc(),Yo.current=Pa,_a){for(var n=ke.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}_a=!1}if(tn=0,Oe=Me=ke=null,_i=!1,qi=0,mc.current=null,r===null||r.return===null){Ae=1,Xi=t,Le=null;break}e:{var o=e,s=r.return,l=r,u=t;if(t=$e,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Qd(s);if(y!==null){y.flags&=-257,Xd(y,s,l,o,t),y.mode&1&&Kd(o,c,t),t=y,u=c;var x=t.updateQueue;if(x===null){var v=new Set;v.add(u),t.updateQueue=v}else x.add(u);break e}else{if(!(t&1)){Kd(o,c,t),xc();break e}u=Error(A(426))}}else if(je&&l.mode&1){var j=Qd(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),Xd(j,s,l,o,t),Zu($n(u,l));break e}}o=u=$n(u,l),Ae!==4&&(Ae=2),Ri===null?Ri=[o]:Ri.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=dh(o,u,t);Bd(o,g);break e;case 1:l=u;var h=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Er===null||!Er.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var S=fh(o,l,t);Bd(o,S);break e}}o=o.return}while(o!==null)}Th(r)}catch(N){t=N,Le===r&&r!==null&&(Le=r=r.return);continue}break}while(!0)}function Ph(){var e=Ra.current;return Ra.current=Pa,e===null?Pa:e}function xc(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Fe===null||!(rn&268435455)&&!(is&268435455)||vr(Fe,$e)}function La(e,t){var r=le;le|=2;var n=Ph();(Fe!==e||$e!==t)&&(Kt=null,Yr(e,t));do try{_0();break}catch(i){_h(e,i)}while(!0);if(tc(),le=r,Ra.current=n,Le!==null)throw Error(A(261));return Fe=null,$e=0,Ae}function _0(){for(;Le!==null;)Rh(Le)}function P0(){for(;Le!==null&&!ey();)Rh(Le)}function Rh(e){var t=Lh(e.alternate,e,ct);e.memoizedProps=e.pendingProps,t===null?Th(e):Le=t,mc.current=null}function Th(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=j0(r,t),r!==null){r.flags&=32767,Le=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,Le=null;return}}else if(r=w0(r,t,ct),r!==null){Le=r;return}if(t=t.sibling,t!==null){Le=t;return}Le=t=e}while(t!==null);Ae===0&&(Ae=5)}function $r(e,t,r){var n=fe,i=St.transition;try{St.transition=null,fe=1,R0(e,t,r,n)}finally{St.transition=i,fe=n}return null}function R0(e,t,r,n){do An();while(xr!==null);if(le&6)throw Error(A(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(A(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(cy(e,o),e===Fe&&(Le=Fe=null,$e=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Ao||(Ao=!0,Dh(ma,function(){return An(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=St.transition,St.transition=null;var s=fe;fe=1;var l=le;le|=4,mc.current=null,k0(e,r),Nh(r,e),Yy(Vl),ga=!!Wl,Vl=Wl=null,e.current=r,N0(r),ty(),le=l,fe=s,St.transition=o}else e.current=r;if(Ao&&(Ao=!1,xr=e,za=i),o=e.pendingLanes,o===0&&(Er=null),iy(r.stateNode),at(e,Pe()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Ta)throw Ta=!1,e=cu,cu=null,e;return za&1&&e.tag!==0&&An(),o=e.pendingLanes,o&1?e===du?Ti++:(Ti=0,du=e):Ti=0,Mr(),null}function An(){if(xr!==null){var e=dm(za),t=St.transition,r=fe;try{if(St.transition=null,fe=16>e?16:e,xr===null)var n=!1;else{if(e=xr,xr=null,za=0,le&6)throw Error(A(331));var i=le;for(le|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(I=c;I!==null;){var d=I;switch(d.tag){case 0:case 11:case 15:Pi(8,d,o)}var f=d.child;if(f!==null)f.return=d,I=f;else for(;I!==null;){d=I;var p=d.sibling,y=d.return;if(jh(d),d===c){I=null;break}if(p!==null){p.return=y,I=p;break}I=y}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var j=v.sibling;v.sibling=null,v=j}while(v!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Pi(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,I=g;break e}I=o.return}}var h=e.current;for(I=h;I!==null;){s=I;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,I=b;else e:for(s=h;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ns(9,l)}}catch(N){_e(l,l.return,N)}if(l===s){I=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,I=S;break e}I=l.return}}if(le=i,Mr(),Bt&&typeof Bt.onPostCommitFiberRoot=="function")try{Bt.onPostCommitFiberRoot(Xa,e)}catch{}n=!0}return n}finally{fe=r,St.transition=t}}return!1}function uf(e,t,r){t=$n(r,t),t=dh(e,t,1),e=Nr(e,t,1),t=Ge(),e!==null&&(ro(e,1,t),at(e,t))}function _e(e,t,r){if(e.tag===3)uf(e,e,r);else for(;t!==null;){if(t.tag===3){uf(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Er===null||!Er.has(n))){e=$n(r,e),e=fh(t,e,1),t=Nr(t,e,1),e=Ge(),t!==null&&(ro(t,1,e),at(t,e));break}}t=t.return}}function T0(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&r,Fe===e&&($e&r)===r&&(Ae===4||Ae===3&&($e&130023424)===$e&&500>Pe()-gc?Yr(e,0):hc|=r),at(e,t)}function zh(e,t){t===0&&(e.mode&1?(t=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):t=1);var r=Ge();e=nr(e,t),e!==null&&(ro(e,t,r),at(e,r))}function z0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),zh(e,r)}function L0(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(A(314))}n!==null&&n.delete(t),zh(e,r)}var Lh;Lh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)nt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return nt=!1,b0(e,t,r);nt=!!(e.flags&131072)}else nt=!1,je&&t.flags&1048576&&Om(t,Sa,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Jo(e,t),e=t.pendingProps;var i=Fn(t,Qe.current);Mn(t,r),i=uc(null,t,n,e,i,r);var o=cc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ot(n)?(o=!0,wa(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ic(t),i.updater=rs,t.stateNode=i,i._reactInternals=t,Zl(t,n,e,r),t=ru(null,t,n,!0,o,r)):(t.tag=0,je&&o&&Gu(t),Ye(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Jo(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=M0(n),e=Ct(n,e),i){case 0:t=tu(null,t,n,e,r);break e;case 1:t=Jd(null,t,n,e,r);break e;case 11:t=Yd(null,t,n,e,r);break e;case 14:t=Gd(null,t,n,Ct(n.type,e),r);break e}throw Error(A(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),tu(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),Jd(e,t,n,i,r);case 3:e:{if(gh(t),e===null)throw Error(A(387));n=t.pendingProps,o=t.memoizedState,i=o.element,Wm(e,t),Ea(t,n,null,r);var s=t.memoizedState;if(n=s.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=$n(Error(A(423)),t),t=Zd(e,t,n,r,i);break e}else if(n!==i){i=$n(Error(A(424)),t),t=Zd(e,t,n,r,i);break e}else for(ft=kr(t.stateNode.containerInfo.firstChild),mt=t,je=!0,Rt=null,r=Bm(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(In(),n===i){t=ir(e,t,r);break e}Ye(e,t,n,r)}t=t.child}return t;case 5:return Vm(t),e===null&&Yl(t),n=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Hl(n,i)?s=null:o!==null&&Hl(n,o)&&(t.flags|=32),hh(e,t),Ye(e,t,s,r),t.child;case 6:return e===null&&Yl(t),null;case 13:return vh(e,t,r);case 4:return oc(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Un(t,null,n,r):Ye(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),Yd(e,t,n,i,r);case 7:return Ye(e,t,t.pendingProps,r),t.child;case 8:return Ye(e,t,t.pendingProps.children,r),t.child;case 12:return Ye(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ve(ka,n._currentValue),n._currentValue=s,o!==null)if(Dt(o.value,s)){if(o.children===i.children&&!it.current){t=ir(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var u=l.firstContext;u!==null;){if(u.context===n){if(o.tag===1){u=Jt(-1,r&-r),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=r,u=o.alternate,u!==null&&(u.lanes|=r),Gl(o.return,r,t),l.lanes|=r;break}u=u.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(A(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Gl(s,r,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ye(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Mn(t,r),i=kt(i),n=n(i),t.flags|=1,Ye(e,t,n,r),t.child;case 14:return n=t.type,i=Ct(n,t.pendingProps),i=Ct(n.type,i),Gd(e,t,n,i,r);case 15:return ph(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),Jo(e,t),t.tag=1,ot(n)?(e=!0,wa(t)):e=!1,Mn(t,r),ch(t,n,i),Zl(t,n,i,r),ru(null,t,n,!0,e,r);case 19:return yh(e,t,r);case 22:return mh(e,t,r)}throw Error(A(156,t.tag))};function Dh(e,t){return sm(e,t)}function D0(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,r,n){return new D0(e,t,r,n)}function bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function M0(e){if(typeof e=="function")return bc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Iu)return 11;if(e===Uu)return 14}return 2}function _r(e,t){var r=e.alternate;return r===null?(r=jt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function ta(e,t,r,n,i,o){var s=2;if(n=e,typeof e=="function")bc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case bn:return Gr(r.children,i,o,t);case Fu:s=8,i|=8;break;case Sl:return e=jt(12,r,t,i|2),e.elementType=Sl,e.lanes=o,e;case kl:return e=jt(13,r,t,i),e.elementType=kl,e.lanes=o,e;case Nl:return e=jt(19,r,t,i),e.elementType=Nl,e.lanes=o,e;case Vp:return os(r,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $p:s=10;break e;case Wp:s=9;break e;case Iu:s=11;break e;case Uu:s=14;break e;case mr:s=16,n=null;break e}throw Error(A(130,e==null?e:typeof e,""))}return t=jt(s,r,t,i),t.elementType=e,t.type=n,t.lanes=o,t}function Gr(e,t,r,n){return e=jt(7,e,n,t),e.lanes=r,e}function os(e,t,r,n){return e=jt(22,e,n,t),e.elementType=Vp,e.lanes=r,e.stateNode={isHidden:!1},e}function ol(e,t,r){return e=jt(6,e,null,t),e.lanes=r,e}function al(e,t,r){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function A0(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Us(0),this.expirationTimes=Us(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Us(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wc(e,t,r,n,i,o,s,l,u){return e=new A0(e,t,r,l,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=jt(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ic(o),e}function O0(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xn,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Mh(e){if(!e)return Tr;e=e._reactInternals;e:{if(cn(e)!==e||e.tag!==1)throw Error(A(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ot(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(A(171))}if(e.tag===1){var r=e.type;if(ot(r))return Mm(e,r,t)}return t}function Ah(e,t,r,n,i,o,s,l,u){return e=wc(r,n,!0,e,i,o,s,l,u),e.context=Mh(null),r=e.current,n=Ge(),i=Cr(r),o=Jt(n,i),o.callback=t??null,Nr(r,o,i),e.current.lanes=i,ro(e,i,n),at(e,n),e}function as(e,t,r,n){var i=t.current,o=Ge(),s=Cr(i);return r=Mh(r),t.context===null?t.context=r:t.pendingContext=r,t=Jt(o,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Nr(i,t,s),e!==null&&(Lt(e,i,s,o),Xo(e,i,s)),s}function Da(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function jc(e,t){cf(e,t),(e=e.alternate)&&cf(e,t)}function F0(){return null}var Oh=typeof reportError=="function"?reportError:function(e){console.error(e)};function Sc(e){this._internalRoot=e}ss.prototype.render=Sc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(A(409));as(e,t,null,null)};ss.prototype.unmount=Sc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nn(function(){as(null,e,null,null)}),t[rr]=null}};function ss(e){this._internalRoot=e}ss.prototype.unstable_scheduleHydration=function(e){if(e){var t=mm();e={blockedOn:null,target:e,priority:t};for(var r=0;r<gr.length&&t!==0&&t<gr[r].priority;r++);gr.splice(r,0,e),r===0&&gm(e)}};function kc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ls(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function df(){}function I0(e,t,r,n,i){if(i){if(typeof n=="function"){var o=n;n=function(){var c=Da(s);o.call(c)}}var s=Ah(t,n,e,0,null,!1,!1,"",df);return e._reactRootContainer=s,e[rr]=s.current,Bi(e.nodeType===8?e.parentNode:e),nn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var c=Da(u);l.call(c)}}var u=wc(e,0,!1,null,null,!1,!1,"",df);return e._reactRootContainer=u,e[rr]=u.current,Bi(e.nodeType===8?e.parentNode:e),nn(function(){as(t,u,r,n)}),u}function us(e,t,r,n,i){var o=r._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var u=Da(s);l.call(u)}}as(t,s,e,i)}else s=I0(r,t,e,i,n);return Da(s)}fm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yi(t.pendingLanes);r!==0&&(Wu(t,r|1),at(t,Pe()),!(le&6)&&(Wn=Pe()+500,Mr()))}break;case 13:nn(function(){var n=nr(e,1);if(n!==null){var i=Ge();Lt(n,e,1,i)}}),jc(e,1)}};Vu=function(e){if(e.tag===13){var t=nr(e,134217728);if(t!==null){var r=Ge();Lt(t,e,134217728,r)}jc(e,134217728)}};pm=function(e){if(e.tag===13){var t=Cr(e),r=nr(e,t);if(r!==null){var n=Ge();Lt(r,e,t,n)}jc(e,t)}};mm=function(){return fe};hm=function(e,t){var r=fe;try{return fe=e,t()}finally{fe=r}};Ml=function(e,t,r){switch(t){case"input":if(_l(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Za(n);if(!i)throw Error(A(90));qp(n),_l(n,i)}}}break;case"textarea":Qp(e,r);break;case"select":t=r.value,t!=null&&Tn(e,!!r.multiple,t,!1)}};tm=vc;rm=nn;var U0={usingClientEntryPoint:!1,Events:[io,kn,Za,Zp,em,vc]},di={findFiberByHostInstance:Hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B0={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=om(e),e===null?null:e.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||F0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oo.isDisabled&&Oo.supportsFiber)try{Xa=Oo.inject(B0),Bt=Oo}catch{}}gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U0;gt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kc(t))throw Error(A(200));return O0(e,t,null,r)};gt.createRoot=function(e,t){if(!kc(e))throw Error(A(299));var r=!1,n="",i=Oh;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wc(e,1,!1,null,null,r,!1,n,i),e[rr]=t.current,Bi(e.nodeType===8?e.parentNode:e),new Sc(t)};gt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(A(188)):(e=Object.keys(e).join(","),Error(A(268,e)));return e=om(t),e=e===null?null:e.stateNode,e};gt.flushSync=function(e){return nn(e)};gt.hydrate=function(e,t,r){if(!ls(t))throw Error(A(200));return us(null,e,t,!0,r)};gt.hydrateRoot=function(e,t,r){if(!kc(e))throw Error(A(405));var n=r!=null&&r.hydratedSources||null,i=!1,o="",s=Oh;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Ah(t,null,e,1,r??null,i,!1,o,s),e[rr]=t.current,Bi(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new ss(t)};gt.render=function(e,t,r){if(!ls(t))throw Error(A(200));return us(null,e,t,!1,r)};gt.unmountComponentAtNode=function(e){if(!ls(e))throw Error(A(40));return e._reactRootContainer?(nn(function(){us(null,null,e,!1,function(){e._reactRootContainer=null,e[rr]=null})}),!0):!1};gt.unstable_batchedUpdates=vc;gt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ls(r))throw Error(A(200));if(e==null||e._reactInternals===void 0)throw Error(A(38));return us(e,t,r,!1,n)};gt.version="18.3.1-next-f1338f8080-20240426";function Fh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fh)}catch(e){console.error(e)}}Fh(),Fp.exports=gt;var Nc=Fp.exports;const $0=Np(Nc),W0=kp({__proto__:null,default:$0},[Nc]);var ff=Nc;wl.createRoot=ff.createRoot,wl.hydrateRoot=ff.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},we.apply(this,arguments)}var ze;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ze||(ze={}));const pf="popstate";function V0(e){e===void 0&&(e={});function t(n,i){let{pathname:o,search:s,hash:l}=n.location;return Yi("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:an(i)}return q0(t,r,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function on(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function H0(){return Math.random().toString(36).substr(2,8)}function mf(e,t){return{usr:e.state,key:e.key,idx:t}}function Yi(e,t,r,n){return r===void 0&&(r=null),we({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ar(t):t,{state:r,key:t&&t.key||n||H0()})}function an(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ar(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function q0(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:o=!1}=n,s=i.history,l=ze.Pop,u=null,c=d();c==null&&(c=0,s.replaceState(we({},s.state,{idx:c}),""));function d(){return(s.state||{idx:null}).idx}function f(){l=ze.Pop;let j=d(),g=j==null?null:j-c;c=j,u&&u({action:l,location:v.location,delta:g})}function p(j,g){l=ze.Push;let h=Yi(v.location,j,g);c=d()+1;let b=mf(h,c),S=v.createHref(h);try{s.pushState(b,"",S)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(S)}o&&u&&u({action:l,location:v.location,delta:1})}function y(j,g){l=ze.Replace;let h=Yi(v.location,j,g);c=d();let b=mf(h,c),S=v.createHref(h);s.replaceState(b,"",S),o&&u&&u({action:l,location:v.location,delta:0})}function x(j){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof j=="string"?j:an(j);return h=h.replace(/ $/,"%20"),te(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let v={get action(){return l},get location(){return e(i,s)},listen(j){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(pf,f),u=j,()=>{i.removeEventListener(pf,f),u=null}},createHref(j){return t(i,j)},createURL:x,encodeLocation(j){let g=x(j);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:y,go(j){return s.go(j)}};return v}var de;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(de||(de={}));const K0=new Set(["lazy","caseSensitive","path","id","index","children"]);function Q0(e){return e.index===!0}function Ma(e,t,r,n){return r===void 0&&(r=[]),n===void 0&&(n={}),e.map((i,o)=>{let s=[...r,String(o)],l=typeof i.id=="string"?i.id:s.join("-");if(te(i.index!==!0||!i.children,"Cannot specify children on an index route"),te(!n[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),Q0(i)){let u=we({},i,t(i),{id:l});return n[l]=u,u}else{let u=we({},i,t(i),{id:l,children:void 0});return n[l]=u,i.children&&(u.children=Ma(i.children,t,s,n)),u}})}function Wr(e,t,r){return r===void 0&&(r="/"),ra(e,t,r,!1)}function ra(e,t,r,n){let i=typeof t=="string"?Ar(t):t,o=or(i.pathname||"/",r);if(o==null)return null;let s=Ih(e);Y0(s);let l=null;for(let u=0;l==null&&u<s.length;++u){let c=sx(o);l=ox(s[u],c,n)}return l}function X0(e,t){let{route:r,pathname:n,params:i}=e;return{id:r.id,pathname:n,params:i,data:t[r.id],handle:r.handle}}function Ih(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(o,s,l)=>{let u={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};u.relativePath.startsWith("/")&&(te(u.relativePath.startsWith(n),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(n.length));let c=Zt([n,u.relativePath]),d=r.concat(u);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Ih(o.children,t,d,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:nx(c,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let u of Uh(o.path))i(o,s,u)}),t}function Uh(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return i?[o,""]:[o];let s=Uh(n.join("/")),l=[];return l.push(...s.map(u=>u===""?o:[o,u].join("/"))),i&&l.push(...s),l.map(u=>e.startsWith("/")&&u===""?"/":u)}function Y0(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:ix(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const G0=/^:[\w-]+$/,J0=3,Z0=2,ex=1,tx=10,rx=-2,hf=e=>e==="*";function nx(e,t){let r=e.split("/"),n=r.length;return r.some(hf)&&(n+=rx),t&&(n+=Z0),r.filter(i=>!hf(i)).reduce((i,o)=>i+(G0.test(o)?J0:o===""?ex:tx),n)}function ix(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function ox(e,t,r){r===void 0&&(r=!1);let{routesMeta:n}=e,i={},o="/",s=[];for(let l=0;l<n.length;++l){let u=n[l],c=l===n.length-1,d=o==="/"?t:t.slice(o.length)||"/",f=Aa({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),p=u.route;if(!f&&c&&r&&!n[n.length-1].route.index&&(f=Aa({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Zt([o,f.pathname]),pathnameBase:dx(Zt([o,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(o=Zt([o,f.pathnameBase]))}return s}function Aa(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=ax(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((c,d,f)=>{let{paramName:p,isOptional:y}=d;if(p==="*"){let v=l[f]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const x=l[f];return y&&!x?c[p]=void 0:c[p]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function ax(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),on(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,u)=>(n.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function sx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return on(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const lx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ux=e=>lx.test(e);function cx(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?Ar(e):e,o;if(r)if(ux(r))o=r;else{if(r.includes("//")){let s=r;r=r.replace(/\/\/+/g,"/"),on(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?o=gf(r.substring(1),"/"):o=gf(r,t)}else o=t;return{pathname:o,search:fx(n),hash:px(i)}}function gf(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function sl(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bh(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function cs(e,t){let r=Bh(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function ds(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=Ar(e):(i=we({},e),te(!i.pathname||!i.pathname.includes("?"),sl("?","pathname","search",i)),te(!i.pathname||!i.pathname.includes("#"),sl("#","pathname","hash",i)),te(!i.search||!i.search.includes("#"),sl("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=r;else{let f=t.length-1;if(!n&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let u=cx(i,l),c=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&r.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const Zt=e=>e.join("/").replace(/\/\/+/g,"/"),dx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),fx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,px=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Oa{constructor(t,r,n,i){i===void 0&&(i=!1),this.status=t,this.statusText=r||"",this.internal=i,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}}function Gi(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $h=["post","put","patch","delete"],mx=new Set($h),hx=["get",...$h],gx=new Set(hx),vx=new Set([301,302,303,307,308]),yx=new Set([307,308]),ll={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},xx={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},fi={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Ec=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bx=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Wh="remix-router-transitions";function wx(e){const t=e.window?e.window:typeof window<"u"?window:void 0,r=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",n=!r;te(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(e.mapRouteProperties)i=e.mapRouteProperties;else if(e.detectErrorBoundary){let k=e.detectErrorBoundary;i=E=>({hasErrorBoundary:k(E)})}else i=bx;let o={},s=Ma(e.routes,i,void 0,o),l,u=e.basename||"/",c=e.dataStrategy||Nx,d=e.patchRoutesOnNavigation,f=we({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,v7_skipActionErrorRevalidation:!1},e.future),p=null,y=new Set,x=null,v=null,j=null,g=e.hydrationData!=null,h=Wr(s,e.history.location,u),b=!1,S=null;if(h==null&&!d){let k=tt(404,{pathname:e.history.location.pathname}),{matches:E,route:R}=Cf(s);h=E,S={[R.id]:k}}h&&!e.hydrationData&&vo(h,s,e.history.location.pathname).active&&(h=null);let N;if(h)if(h.some(k=>k.route.lazy))N=!1;else if(!h.some(k=>k.route.loader))N=!0;else if(f.v7_partialHydration){let k=e.hydrationData?e.hydrationData.loaderData:null,E=e.hydrationData?e.hydrationData.errors:null;if(E){let R=h.findIndex(D=>E[D.route.id]!==void 0);N=h.slice(0,R+1).every(D=>!hu(D.route,k,E))}else N=h.every(R=>!hu(R.route,k,E))}else N=e.hydrationData!=null;else if(N=!1,h=[],f.v7_partialHydration){let k=vo(null,s,e.history.location.pathname);k.active&&k.matches&&(b=!0,h=k.matches)}let T,m={historyAction:e.history.action,location:e.history.location,matches:h,initialized:N,navigation:ll,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||S,fetchers:new Map,blockers:new Map},C=ze.Pop,_=!1,z,W=!1,V=new Map,J=null,ne=!1,me=!1,O=[],he=new Set,L=new Map,H=0,X=-1,Y=new Map,oe=new Set,De=new Map,M=new Map,ee=new Set,ae=new Map,ye=new Map,Vt;function ut(){if(p=e.history.listen(k=>{let{action:E,location:R,delta:D}=k;if(Vt){Vt(),Vt=void 0;return}on(ye.size===0||D!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let F=Zc({currentLocation:m.location,nextLocation:R,historyAction:E});if(F&&D!=null){let K=new Promise(G=>{Vt=G});e.history.go(D*-1),go(F,{state:"blocked",location:R,proceed(){go(F,{state:"proceeding",proceed:void 0,reset:void 0,location:R}),K.then(()=>e.history.go(D))},reset(){let G=new Map(m.blockers);G.set(F,fi),Xe({blockers:G})}});return}return Fr(E,R)}),r){Ix(t,V);let k=()=>Ux(t,V);t.addEventListener("pagehide",k),J=()=>t.removeEventListener("pagehide",k)}return m.initialized||Fr(ze.Pop,m.location,{initialHydration:!0}),T}function yt(){p&&p(),J&&J(),y.clear(),z&&z.abort(),m.fetchers.forEach((k,E)=>ho(E)),m.blockers.forEach((k,E)=>Jc(E))}function ur(k){return y.add(k),()=>y.delete(k)}function Xe(k,E){E===void 0&&(E={}),m=we({},m,k);let R=[],D=[];f.v7_fetcherPersist&&m.fetchers.forEach((F,K)=>{F.state==="idle"&&(ee.has(K)?D.push(K):R.push(K))}),ee.forEach(F=>{!m.fetchers.has(F)&&!L.has(F)&&D.push(F)}),[...y].forEach(F=>F(m,{deletedFetchers:D,viewTransitionOpts:E.viewTransitionOpts,flushSync:E.flushSync===!0})),f.v7_fetcherPersist?(R.forEach(F=>m.fetchers.delete(F)),D.forEach(F=>ho(F))):D.forEach(F=>ee.delete(F))}function dn(k,E,R){var D,F;let{flushSync:K}=R===void 0?{}:R,G=m.actionData!=null&&m.navigation.formMethod!=null&&Pt(m.navigation.formMethod)&&m.navigation.state==="loading"&&((D=k.state)==null?void 0:D._isRedirect)!==!0,B;E.actionData?Object.keys(E.actionData).length>0?B=E.actionData:B=null:G?B=m.actionData:B=null;let $=E.loaderData?Nf(m.loaderData,E.loaderData,E.matches||[],E.errors):m.loaderData,U=m.blockers;U.size>0&&(U=new Map(U),U.forEach((se,Ie)=>U.set(Ie,fi)));let q=_===!0||m.navigation.formMethod!=null&&Pt(m.navigation.formMethod)&&((F=k.state)==null?void 0:F._isRedirect)!==!0;l&&(s=l,l=void 0),ne||C===ze.Pop||(C===ze.Push?e.history.push(k,k.state):C===ze.Replace&&e.history.replace(k,k.state));let Z;if(C===ze.Pop){let se=V.get(m.location.pathname);se&&se.has(k.pathname)?Z={currentLocation:m.location,nextLocation:k}:V.has(k.pathname)&&(Z={currentLocation:k,nextLocation:m.location})}else if(W){let se=V.get(m.location.pathname);se?se.add(k.pathname):(se=new Set([k.pathname]),V.set(m.location.pathname,se)),Z={currentLocation:m.location,nextLocation:k}}Xe(we({},E,{actionData:B,loaderData:$,historyAction:C,location:k,initialized:!0,navigation:ll,revalidation:"idle",restoreScrollPosition:td(k,E.matches||m.matches),preventScrollReset:q,blockers:U}),{viewTransitionOpts:Z,flushSync:K===!0}),C=ze.Pop,_=!1,W=!1,ne=!1,me=!1,O=[]}async function Hc(k,E){if(typeof k=="number"){e.history.go(k);return}let R=mu(m.location,m.matches,u,f.v7_prependBasename,k,f.v7_relativeSplatPath,E==null?void 0:E.fromRouteId,E==null?void 0:E.relative),{path:D,submission:F,error:K}=vf(f.v7_normalizeFormMethod,!1,R,E),G=m.location,B=Yi(m.location,D,E&&E.state);B=we({},B,e.history.encodeLocation(B));let $=E&&E.replace!=null?E.replace:void 0,U=ze.Push;$===!0?U=ze.Replace:$===!1||F!=null&&Pt(F.formMethod)&&F.formAction===m.location.pathname+m.location.search&&(U=ze.Replace);let q=E&&"preventScrollReset"in E?E.preventScrollReset===!0:void 0,Z=(E&&E.flushSync)===!0,se=Zc({currentLocation:G,nextLocation:B,historyAction:U});if(se){go(se,{state:"blocked",location:B,proceed(){go(se,{state:"proceeding",proceed:void 0,reset:void 0,location:B}),Hc(k,E)},reset(){let Ie=new Map(m.blockers);Ie.set(se,fi),Xe({blockers:Ie})}});return}return await Fr(U,B,{submission:F,pendingError:K,preventScrollReset:q,replace:E&&E.replace,enableViewTransition:E&&E.viewTransition,flushSync:Z})}function ev(){if(Rs(),Xe({revalidation:"loading"}),m.navigation.state!=="submitting"){if(m.navigation.state==="idle"){Fr(m.historyAction,m.location,{startUninterruptedRevalidation:!0});return}Fr(C||m.historyAction,m.navigation.location,{overrideNavigation:m.navigation,enableViewTransition:W===!0})}}async function Fr(k,E,R){z&&z.abort(),z=null,C=k,ne=(R&&R.startUninterruptedRevalidation)===!0,cv(m.location,m.matches),_=(R&&R.preventScrollReset)===!0,W=(R&&R.enableViewTransition)===!0;let D=l||s,F=R&&R.overrideNavigation,K=R!=null&&R.initialHydration&&m.matches&&m.matches.length>0&&!b?m.matches:Wr(D,E,u),G=(R&&R.flushSync)===!0;if(K&&m.initialized&&!me&&Tx(m.location,E)&&!(R&&R.submission&&Pt(R.submission.formMethod))){dn(E,{matches:K},{flushSync:G});return}let B=vo(K,D,E.pathname);if(B.active&&B.matches&&(K=B.matches),!K){let{error:ge,notFoundMatches:ce,route:Ee}=Ts(E.pathname);dn(E,{matches:ce,loaderData:{},errors:{[Ee.id]:ge}},{flushSync:G});return}z=new AbortController;let $=gn(e.history,E,z.signal,R&&R.submission),U;if(R&&R.pendingError)U=[Vr(K).route.id,{type:de.error,error:R.pendingError}];else if(R&&R.submission&&Pt(R.submission.formMethod)){let ge=await tv($,E,R.submission,K,B.active,{replace:R.replace,flushSync:G});if(ge.shortCircuited)return;if(ge.pendingActionResult){let[ce,Ee]=ge.pendingActionResult;if(dt(Ee)&&Gi(Ee.error)&&Ee.error.status===404){z=null,dn(E,{matches:ge.matches,loaderData:{},errors:{[ce]:Ee.error}});return}}K=ge.matches||K,U=ge.pendingActionResult,F=ul(E,R.submission),G=!1,B.active=!1,$=gn(e.history,$.url,$.signal)}let{shortCircuited:q,matches:Z,loaderData:se,errors:Ie}=await rv($,E,K,B.active,F,R&&R.submission,R&&R.fetcherSubmission,R&&R.replace,R&&R.initialHydration===!0,G,U);q||(z=null,dn(E,we({matches:Z||K},Ef(U),{loaderData:se,errors:Ie})))}async function tv(k,E,R,D,F,K){K===void 0&&(K={}),Rs();let G=Ox(E,R);if(Xe({navigation:G},{flushSync:K.flushSync===!0}),F){let U=await yo(D,E.pathname,k.signal);if(U.type==="aborted")return{shortCircuited:!0};if(U.type==="error"){let q=Vr(U.partialMatches).route.id;return{matches:U.partialMatches,pendingActionResult:[q,{type:de.error,error:U.error}]}}else if(U.matches)D=U.matches;else{let{notFoundMatches:q,error:Z,route:se}=Ts(E.pathname);return{matches:q,pendingActionResult:[se.id,{type:de.error,error:Z}]}}}let B,$=bi(D,E);if(!$.route.action&&!$.route.lazy)B={type:de.error,error:tt(405,{method:k.method,pathname:E.pathname,routeId:$.route.id})};else if(B=(await ei("action",m,k,[$],D,null))[$.route.id],k.signal.aborted)return{shortCircuited:!0};if(Qr(B)){let U;return K&&K.replace!=null?U=K.replace:U=jf(B.response.headers.get("Location"),new URL(k.url),u,e.history)===m.location.pathname+m.location.search,await Ir(k,B,!0,{submission:R,replace:U}),{shortCircuited:!0}}if(br(B))throw tt(400,{type:"defer-action"});if(dt(B)){let U=Vr(D,$.route.id);return(K&&K.replace)!==!0&&(C=ze.Push),{matches:D,pendingActionResult:[U.route.id,B]}}return{matches:D,pendingActionResult:[$.route.id,B]}}async function rv(k,E,R,D,F,K,G,B,$,U,q){let Z=F||ul(E,K),se=K||G||Pf(Z),Ie=!ne&&(!f.v7_partialHydration||!$);if(D){if(Ie){let Ce=qc(q);Xe(we({navigation:Z},Ce!==void 0?{actionData:Ce}:{}),{flushSync:U})}let ue=await yo(R,E.pathname,k.signal);if(ue.type==="aborted")return{shortCircuited:!0};if(ue.type==="error"){let Ce=Vr(ue.partialMatches).route.id;return{matches:ue.partialMatches,loaderData:{},errors:{[Ce]:ue.error}}}else if(ue.matches)R=ue.matches;else{let{error:Ce,notFoundMatches:pn,route:ni}=Ts(E.pathname);return{matches:pn,loaderData:{},errors:{[ni.id]:Ce}}}}let ge=l||s,[ce,Ee]=xf(e.history,m,R,se,E,f.v7_partialHydration&&$===!0,f.v7_skipActionErrorRevalidation,me,O,he,ee,De,oe,ge,u,q);if(zs(ue=>!(R&&R.some(Ce=>Ce.route.id===ue))||ce&&ce.some(Ce=>Ce.route.id===ue)),X=++H,ce.length===0&&Ee.length===0){let ue=Yc();return dn(E,we({matches:R,loaderData:{},errors:q&&dt(q[1])?{[q[0]]:q[1].error}:null},Ef(q),ue?{fetchers:new Map(m.fetchers)}:{}),{flushSync:U}),{shortCircuited:!0}}if(Ie){let ue={};if(!D){ue.navigation=Z;let Ce=qc(q);Ce!==void 0&&(ue.actionData=Ce)}Ee.length>0&&(ue.fetchers=nv(Ee)),Xe(ue,{flushSync:U})}Ee.forEach(ue=>{dr(ue.key),ue.controller&&L.set(ue.key,ue.controller)});let fn=()=>Ee.forEach(ue=>dr(ue.key));z&&z.signal.addEventListener("abort",fn);let{loaderResults:ti,fetcherResults:qt}=await Kc(m,R,ce,Ee,k);if(k.signal.aborted)return{shortCircuited:!0};z&&z.signal.removeEventListener("abort",fn),Ee.forEach(ue=>L.delete(ue.key));let Ot=Fo(ti);if(Ot)return await Ir(k,Ot.result,!0,{replace:B}),{shortCircuited:!0};if(Ot=Fo(qt),Ot)return oe.add(Ot.key),await Ir(k,Ot.result,!0,{replace:B}),{shortCircuited:!0};let{loaderData:Ls,errors:ri}=kf(m,R,ti,q,Ee,qt,ae);ae.forEach((ue,Ce)=>{ue.subscribe(pn=>{(pn||ue.done)&&ae.delete(Ce)})}),f.v7_partialHydration&&$&&m.errors&&(ri=we({},m.errors,ri));let Ur=Yc(),xo=Gc(X),bo=Ur||xo||Ee.length>0;return we({matches:R,loaderData:Ls,errors:ri},bo?{fetchers:new Map(m.fetchers)}:{})}function qc(k){if(k&&!dt(k[1]))return{[k[0]]:k[1].data};if(m.actionData)return Object.keys(m.actionData).length===0?null:m.actionData}function nv(k){return k.forEach(E=>{let R=m.fetchers.get(E.key),D=pi(void 0,R?R.data:void 0);m.fetchers.set(E.key,D)}),new Map(m.fetchers)}function iv(k,E,R,D){if(n)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");dr(k);let F=(D&&D.flushSync)===!0,K=l||s,G=mu(m.location,m.matches,u,f.v7_prependBasename,R,f.v7_relativeSplatPath,E,D==null?void 0:D.relative),B=Wr(K,G,u),$=vo(B,K,G);if($.active&&$.matches&&(B=$.matches),!B){Ht(k,E,tt(404,{pathname:G}),{flushSync:F});return}let{path:U,submission:q,error:Z}=vf(f.v7_normalizeFormMethod,!0,G,D);if(Z){Ht(k,E,Z,{flushSync:F});return}let se=bi(B,U),Ie=(D&&D.preventScrollReset)===!0;if(q&&Pt(q.formMethod)){ov(k,E,U,se,B,$.active,F,Ie,q);return}De.set(k,{routeId:E,path:U}),av(k,E,U,se,B,$.active,F,Ie,q)}async function ov(k,E,R,D,F,K,G,B,$){Rs(),De.delete(k);function U(Te){if(!Te.route.action&&!Te.route.lazy){let mn=tt(405,{method:$.formMethod,pathname:R,routeId:E});return Ht(k,E,mn,{flushSync:G}),!0}return!1}if(!K&&U(D))return;let q=m.fetchers.get(k);cr(k,Fx($,q),{flushSync:G});let Z=new AbortController,se=gn(e.history,R,Z.signal,$);if(K){let Te=await yo(F,new URL(se.url).pathname,se.signal,k);if(Te.type==="aborted")return;if(Te.type==="error"){Ht(k,E,Te.error,{flushSync:G});return}else if(Te.matches){if(F=Te.matches,D=bi(F,R),U(D))return}else{Ht(k,E,tt(404,{pathname:R}),{flushSync:G});return}}L.set(k,Z);let Ie=H,ce=(await ei("action",m,se,[D],F,k))[D.route.id];if(se.signal.aborted){L.get(k)===Z&&L.delete(k);return}if(f.v7_fetcherPersist&&ee.has(k)){if(Qr(ce)||dt(ce)){cr(k,pr(void 0));return}}else{if(Qr(ce))if(L.delete(k),X>Ie){cr(k,pr(void 0));return}else return oe.add(k),cr(k,pi($)),Ir(se,ce,!1,{fetcherSubmission:$,preventScrollReset:B});if(dt(ce)){Ht(k,E,ce.error);return}}if(br(ce))throw tt(400,{type:"defer-action"});let Ee=m.navigation.location||m.location,fn=gn(e.history,Ee,Z.signal),ti=l||s,qt=m.navigation.state!=="idle"?Wr(ti,m.navigation.location,u):m.matches;te(qt,"Didn't find any matches after fetcher action");let Ot=++H;Y.set(k,Ot);let Ls=pi($,ce.data);m.fetchers.set(k,Ls);let[ri,Ur]=xf(e.history,m,qt,$,Ee,!1,f.v7_skipActionErrorRevalidation,me,O,he,ee,De,oe,ti,u,[D.route.id,ce]);Ur.filter(Te=>Te.key!==k).forEach(Te=>{let mn=Te.key,rd=m.fetchers.get(mn),pv=pi(void 0,rd?rd.data:void 0);m.fetchers.set(mn,pv),dr(mn),Te.controller&&L.set(mn,Te.controller)}),Xe({fetchers:new Map(m.fetchers)});let xo=()=>Ur.forEach(Te=>dr(Te.key));Z.signal.addEventListener("abort",xo);let{loaderResults:bo,fetcherResults:ue}=await Kc(m,qt,ri,Ur,fn);if(Z.signal.aborted)return;Z.signal.removeEventListener("abort",xo),Y.delete(k),L.delete(k),Ur.forEach(Te=>L.delete(Te.key));let Ce=Fo(bo);if(Ce)return Ir(fn,Ce.result,!1,{preventScrollReset:B});if(Ce=Fo(ue),Ce)return oe.add(Ce.key),Ir(fn,Ce.result,!1,{preventScrollReset:B});let{loaderData:pn,errors:ni}=kf(m,qt,bo,void 0,Ur,ue,ae);if(m.fetchers.has(k)){let Te=pr(ce.data);m.fetchers.set(k,Te)}Gc(Ot),m.navigation.state==="loading"&&Ot>X?(te(C,"Expected pending action"),z&&z.abort(),dn(m.navigation.location,{matches:qt,loaderData:pn,errors:ni,fetchers:new Map(m.fetchers)})):(Xe({errors:ni,loaderData:Nf(m.loaderData,pn,qt,ni),fetchers:new Map(m.fetchers)}),me=!1)}async function av(k,E,R,D,F,K,G,B,$){let U=m.fetchers.get(k);cr(k,pi($,U?U.data:void 0),{flushSync:G});let q=new AbortController,Z=gn(e.history,R,q.signal);if(K){let ce=await yo(F,new URL(Z.url).pathname,Z.signal,k);if(ce.type==="aborted")return;if(ce.type==="error"){Ht(k,E,ce.error,{flushSync:G});return}else if(ce.matches)F=ce.matches,D=bi(F,R);else{Ht(k,E,tt(404,{pathname:R}),{flushSync:G});return}}L.set(k,q);let se=H,ge=(await ei("loader",m,Z,[D],F,k))[D.route.id];if(br(ge)&&(ge=await Cc(ge,Z.signal,!0)||ge),L.get(k)===q&&L.delete(k),!Z.signal.aborted){if(ee.has(k)){cr(k,pr(void 0));return}if(Qr(ge))if(X>se){cr(k,pr(void 0));return}else{oe.add(k),await Ir(Z,ge,!1,{preventScrollReset:B});return}if(dt(ge)){Ht(k,E,ge.error);return}te(!br(ge),"Unhandled fetcher deferred data"),cr(k,pr(ge.data))}}async function Ir(k,E,R,D){let{submission:F,fetcherSubmission:K,preventScrollReset:G,replace:B}=D===void 0?{}:D;E.response.headers.has("X-Remix-Revalidate")&&(me=!0);let $=E.response.headers.get("Location");te($,"Expected a Location header on the redirect Response"),$=jf($,new URL(k.url),u,e.history);let U=Yi(m.location,$,{_isRedirect:!0});if(r){let ce=!1;if(E.response.headers.has("X-Remix-Reload-Document"))ce=!0;else if(Ec.test($)){const Ee=e.history.createURL($);ce=Ee.origin!==t.location.origin||or(Ee.pathname,u)==null}if(ce){B?t.location.replace($):t.location.assign($);return}}z=null;let q=B===!0||E.response.headers.has("X-Remix-Replace")?ze.Replace:ze.Push,{formMethod:Z,formAction:se,formEncType:Ie}=m.navigation;!F&&!K&&Z&&se&&Ie&&(F=Pf(m.navigation));let ge=F||K;if(yx.has(E.response.status)&&ge&&Pt(ge.formMethod))await Fr(q,U,{submission:we({},ge,{formAction:$}),preventScrollReset:G||_,enableViewTransition:R?W:void 0});else{let ce=ul(U,F);await Fr(q,U,{overrideNavigation:ce,fetcherSubmission:K,preventScrollReset:G||_,enableViewTransition:R?W:void 0})}}async function ei(k,E,R,D,F,K){let G,B={};try{G=await Ex(c,k,E,R,D,F,K,o,i)}catch($){return D.forEach(U=>{B[U.route.id]={type:de.error,error:$}}),B}for(let[$,U]of Object.entries(G))if(zx(U)){let q=U.result;B[$]={type:de.redirect,response:Px(q,R,$,F,u,f.v7_relativeSplatPath)}}else B[$]=await _x(U);return B}async function Kc(k,E,R,D,F){let K=k.matches,G=ei("loader",k,F,R,E,null),B=Promise.all(D.map(async q=>{if(q.matches&&q.match&&q.controller){let se=(await ei("loader",k,gn(e.history,q.path,q.controller.signal),[q.match],q.matches,q.key))[q.match.route.id];return{[q.key]:se}}else return Promise.resolve({[q.key]:{type:de.error,error:tt(404,{pathname:q.path})}})})),$=await G,U=(await B).reduce((q,Z)=>Object.assign(q,Z),{});return await Promise.all([Mx(E,$,F.signal,K,k.loaderData),Ax(E,U,D)]),{loaderResults:$,fetcherResults:U}}function Rs(){me=!0,O.push(...zs()),De.forEach((k,E)=>{L.has(E)&&he.add(E),dr(E)})}function cr(k,E,R){R===void 0&&(R={}),m.fetchers.set(k,E),Xe({fetchers:new Map(m.fetchers)},{flushSync:(R&&R.flushSync)===!0})}function Ht(k,E,R,D){D===void 0&&(D={});let F=Vr(m.matches,E);ho(k),Xe({errors:{[F.route.id]:R},fetchers:new Map(m.fetchers)},{flushSync:(D&&D.flushSync)===!0})}function Qc(k){return M.set(k,(M.get(k)||0)+1),ee.has(k)&&ee.delete(k),m.fetchers.get(k)||xx}function ho(k){let E=m.fetchers.get(k);L.has(k)&&!(E&&E.state==="loading"&&Y.has(k))&&dr(k),De.delete(k),Y.delete(k),oe.delete(k),f.v7_fetcherPersist&&ee.delete(k),he.delete(k),m.fetchers.delete(k)}function sv(k){let E=(M.get(k)||0)-1;E<=0?(M.delete(k),ee.add(k),f.v7_fetcherPersist||ho(k)):M.set(k,E),Xe({fetchers:new Map(m.fetchers)})}function dr(k){let E=L.get(k);E&&(E.abort(),L.delete(k))}function Xc(k){for(let E of k){let R=Qc(E),D=pr(R.data);m.fetchers.set(E,D)}}function Yc(){let k=[],E=!1;for(let R of oe){let D=m.fetchers.get(R);te(D,"Expected fetcher: "+R),D.state==="loading"&&(oe.delete(R),k.push(R),E=!0)}return Xc(k),E}function Gc(k){let E=[];for(let[R,D]of Y)if(D<k){let F=m.fetchers.get(R);te(F,"Expected fetcher: "+R),F.state==="loading"&&(dr(R),Y.delete(R),E.push(R))}return Xc(E),E.length>0}function lv(k,E){let R=m.blockers.get(k)||fi;return ye.get(k)!==E&&ye.set(k,E),R}function Jc(k){m.blockers.delete(k),ye.delete(k)}function go(k,E){let R=m.blockers.get(k)||fi;te(R.state==="unblocked"&&E.state==="blocked"||R.state==="blocked"&&E.state==="blocked"||R.state==="blocked"&&E.state==="proceeding"||R.state==="blocked"&&E.state==="unblocked"||R.state==="proceeding"&&E.state==="unblocked","Invalid blocker state transition: "+R.state+" -> "+E.state);let D=new Map(m.blockers);D.set(k,E),Xe({blockers:D})}function Zc(k){let{currentLocation:E,nextLocation:R,historyAction:D}=k;if(ye.size===0)return;ye.size>1&&on(!1,"A router only supports one blocker at a time");let F=Array.from(ye.entries()),[K,G]=F[F.length-1],B=m.blockers.get(K);if(!(B&&B.state==="proceeding")&&G({currentLocation:E,nextLocation:R,historyAction:D}))return K}function Ts(k){let E=tt(404,{pathname:k}),R=l||s,{matches:D,route:F}=Cf(R);return zs(),{notFoundMatches:D,route:F,error:E}}function zs(k){let E=[];return ae.forEach((R,D)=>{(!k||k(D))&&(R.cancel(),E.push(D),ae.delete(D))}),E}function uv(k,E,R){if(x=k,j=E,v=R||null,!g&&m.navigation===ll){g=!0;let D=td(m.location,m.matches);D!=null&&Xe({restoreScrollPosition:D})}return()=>{x=null,j=null,v=null}}function ed(k,E){return v&&v(k,E.map(D=>X0(D,m.loaderData)))||k.key}function cv(k,E){if(x&&j){let R=ed(k,E);x[R]=j()}}function td(k,E){if(x){let R=ed(k,E),D=x[R];if(typeof D=="number")return D}return null}function vo(k,E,R){if(d)if(k){if(Object.keys(k[0].params).length>0)return{active:!0,matches:ra(E,R,u,!0)}}else return{active:!0,matches:ra(E,R,u,!0)||[]};return{active:!1,matches:null}}async function yo(k,E,R,D){if(!d)return{type:"success",matches:k};let F=k;for(;;){let K=l==null,G=l||s,B=o;try{await d({signal:R,path:E,matches:F,fetcherKey:D,patch:(q,Z)=>{R.aborted||wf(q,Z,G,B,i)}})}catch(q){return{type:"error",error:q,partialMatches:F}}finally{K&&!R.aborted&&(s=[...s])}if(R.aborted)return{type:"aborted"};let $=Wr(G,E,u);if($)return{type:"success",matches:$};let U=ra(G,E,u,!0);if(!U||F.length===U.length&&F.every((q,Z)=>q.route.id===U[Z].route.id))return{type:"success",matches:null};F=U}}function dv(k){o={},l=Ma(k,i,void 0,o)}function fv(k,E){let R=l==null;wf(k,E,l||s,o,i),R&&(s=[...s],Xe({}))}return T={get basename(){return u},get future(){return f},get state(){return m},get routes(){return s},get window(){return t},initialize:ut,subscribe:ur,enableScrollRestoration:uv,navigate:Hc,fetch:iv,revalidate:ev,createHref:k=>e.history.createHref(k),encodeLocation:k=>e.history.encodeLocation(k),getFetcher:Qc,deleteFetcher:sv,dispose:yt,getBlocker:lv,deleteBlocker:Jc,patchRoutes:fv,_internalFetchControllers:L,_internalActiveDeferreds:ae,_internalSetRoutes:dv},T}function jx(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function mu(e,t,r,n,i,o,s,l){let u,c;if(s){u=[];for(let f of t)if(u.push(f),f.route.id===s){c=f;break}}else u=t,c=t[t.length-1];let d=ds(i||".",cs(u,o),or(e.pathname,r)||e.pathname,l==="path");if(i==null&&(d.search=e.search,d.hash=e.hash),(i==null||i===""||i===".")&&c){let f=_c(d.search);if(c.route.index&&!f)d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&f){let p=new URLSearchParams(d.search),y=p.getAll("index");p.delete("index"),y.filter(v=>v).forEach(v=>p.append("index",v));let x=p.toString();d.search=x?"?"+x:""}}return n&&r!=="/"&&(d.pathname=d.pathname==="/"?r:Zt([r,d.pathname])),an(d)}function vf(e,t,r,n){if(!n||!jx(n))return{path:r};if(n.formMethod&&!Dx(n.formMethod))return{path:r,error:tt(405,{method:n.formMethod})};let i=()=>({path:r,error:tt(400,{type:"invalid-body"})}),o=n.formMethod||"get",s=e?o.toUpperCase():o.toLowerCase(),l=qh(r);if(n.body!==void 0){if(n.formEncType==="text/plain"){if(!Pt(s))return i();let p=typeof n.body=="string"?n.body:n.body instanceof FormData||n.body instanceof URLSearchParams?Array.from(n.body.entries()).reduce((y,x)=>{let[v,j]=x;return""+y+v+"="+j+`
`},""):String(n.body);return{path:r,submission:{formMethod:s,formAction:l,formEncType:n.formEncType,formData:void 0,json:void 0,text:p}}}else if(n.formEncType==="application/json"){if(!Pt(s))return i();try{let p=typeof n.body=="string"?JSON.parse(n.body):n.body;return{path:r,submission:{formMethod:s,formAction:l,formEncType:n.formEncType,formData:void 0,json:p,text:void 0}}}catch{return i()}}}te(typeof FormData=="function","FormData is not available in this environment");let u,c;if(n.formData)u=gu(n.formData),c=n.formData;else if(n.body instanceof FormData)u=gu(n.body),c=n.body;else if(n.body instanceof URLSearchParams)u=n.body,c=Sf(u);else if(n.body==null)u=new URLSearchParams,c=new FormData;else try{u=new URLSearchParams(n.body),c=Sf(u)}catch{return i()}let d={formMethod:s,formAction:l,formEncType:n&&n.formEncType||"application/x-www-form-urlencoded",formData:c,json:void 0,text:void 0};if(Pt(d.formMethod))return{path:r,submission:d};let f=Ar(r);return t&&f.search&&_c(f.search)&&u.append("index",""),f.search="?"+u,{path:an(f),submission:d}}function yf(e,t,r){r===void 0&&(r=!1);let n=e.findIndex(i=>i.route.id===t);return n>=0?e.slice(0,r?n+1:n):e}function xf(e,t,r,n,i,o,s,l,u,c,d,f,p,y,x,v){let j=v?dt(v[1])?v[1].error:v[1].data:void 0,g=e.createURL(t.location),h=e.createURL(i),b=r;o&&t.errors?b=yf(r,Object.keys(t.errors)[0],!0):v&&dt(v[1])&&(b=yf(r,v[0]));let S=v?v[1].statusCode:void 0,N=s&&S&&S>=400,T=b.filter((C,_)=>{let{route:z}=C;if(z.lazy)return!0;if(z.loader==null)return!1;if(o)return hu(z,t.loaderData,t.errors);if(Sx(t.loaderData,t.matches[_],C)||u.some(J=>J===C.route.id))return!0;let W=t.matches[_],V=C;return bf(C,we({currentUrl:g,currentParams:W.params,nextUrl:h,nextParams:V.params},n,{actionResult:j,actionStatus:S,defaultShouldRevalidate:N?!1:l||g.pathname+g.search===h.pathname+h.search||g.search!==h.search||Vh(W,V)}))}),m=[];return f.forEach((C,_)=>{if(o||!r.some(ne=>ne.route.id===C.routeId)||d.has(_))return;let z=Wr(y,C.path,x);if(!z){m.push({key:_,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let W=t.fetchers.get(_),V=bi(z,C.path),J=!1;p.has(_)?J=!1:c.has(_)?(c.delete(_),J=!0):W&&W.state!=="idle"&&W.data===void 0?J=l:J=bf(V,we({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:r[r.length-1].params},n,{actionResult:j,actionStatus:S,defaultShouldRevalidate:N?!1:l})),J&&m.push({key:_,routeId:C.routeId,path:C.path,matches:z,match:V,controller:new AbortController})}),[T,m]}function hu(e,t,r){if(e.lazy)return!0;if(!e.loader)return!1;let n=t!=null&&t[e.id]!==void 0,i=r!=null&&r[e.id]!==void 0;return!n&&i?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!n&&!i}function Sx(e,t,r){let n=!t||r.route.id!==t.route.id,i=e[r.route.id]===void 0;return n||i}function Vh(e,t){let r=e.route.path;return e.pathname!==t.pathname||r!=null&&r.endsWith("*")&&e.params["*"]!==t.params["*"]}function bf(e,t){if(e.route.shouldRevalidate){let r=e.route.shouldRevalidate(t);if(typeof r=="boolean")return r}return t.defaultShouldRevalidate}function wf(e,t,r,n,i){var o;let s;if(e){let c=n[e];te(c,"No route found to patch children into: routeId = "+e),c.children||(c.children=[]),s=c.children}else s=r;let l=t.filter(c=>!s.some(d=>Hh(c,d))),u=Ma(l,i,[e||"_","patch",String(((o=s)==null?void 0:o.length)||"0")],n);s.push(...u)}function Hh(e,t){return"id"in e&&"id"in t&&e.id===t.id?!0:e.index===t.index&&e.path===t.path&&e.caseSensitive===t.caseSensitive?(!e.children||e.children.length===0)&&(!t.children||t.children.length===0)?!0:e.children.every((r,n)=>{var i;return(i=t.children)==null?void 0:i.some(o=>Hh(r,o))}):!1}async function kx(e,t,r){if(!e.lazy)return;let n=await e.lazy();if(!e.lazy)return;let i=r[e.id];te(i,"No route found in manifest");let o={};for(let s in n){let u=i[s]!==void 0&&s!=="hasErrorBoundary";on(!u,'Route "'+i.id+'" has a static property "'+s+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+s+'" will be ignored.')),!u&&!K0.has(s)&&(o[s]=n[s])}Object.assign(i,o),Object.assign(i,we({},t(i),{lazy:void 0}))}async function Nx(e){let{matches:t}=e,r=t.filter(i=>i.shouldLoad);return(await Promise.all(r.map(i=>i.resolve()))).reduce((i,o,s)=>Object.assign(i,{[r[s].route.id]:o}),{})}async function Ex(e,t,r,n,i,o,s,l,u,c){let d=o.map(y=>y.route.lazy?kx(y.route,u,l):void 0),f=o.map((y,x)=>{let v=d[x],j=i.some(h=>h.route.id===y.route.id);return we({},y,{shouldLoad:j,resolve:async h=>(h&&n.method==="GET"&&(y.route.lazy||y.route.loader)&&(j=!0),j?Cx(t,n,y,v,h,c):Promise.resolve({type:de.data,result:void 0}))})}),p=await e({matches:f,request:n,params:o[0].params,fetcherKey:s,context:c});try{await Promise.all(d)}catch{}return p}async function Cx(e,t,r,n,i,o){let s,l,u=c=>{let d,f=new Promise((x,v)=>d=v);l=()=>d(),t.signal.addEventListener("abort",l);let p=x=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+r.route.id+"]"))):c({request:t,params:r.params,context:o},...x!==void 0?[x]:[]),y=(async()=>{try{return{type:"data",result:await(i?i(v=>p(v)):p())}}catch(x){return{type:"error",result:x}}})();return Promise.race([y,f])};try{let c=r.route[e];if(n)if(c){let d,[f]=await Promise.all([u(c).catch(p=>{d=p}),n]);if(d!==void 0)throw d;s=f}else if(await n,c=r.route[e],c)s=await u(c);else if(e==="action"){let d=new URL(t.url),f=d.pathname+d.search;throw tt(405,{method:t.method,pathname:f,routeId:r.route.id})}else return{type:de.data,result:void 0};else if(c)s=await u(c);else{let d=new URL(t.url),f=d.pathname+d.search;throw tt(404,{pathname:f})}te(s.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+r.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:de.error,result:c}}finally{l&&t.signal.removeEventListener("abort",l)}return s}async function _x(e){let{result:t,type:r}=e;if(Kh(t)){let f;try{let p=t.headers.get("Content-Type");p&&/\bapplication\/json\b/.test(p)?t.body==null?f=null:f=await t.json():f=await t.text()}catch(p){return{type:de.error,error:p}}return r===de.error?{type:de.error,error:new Oa(t.status,t.statusText,f),statusCode:t.status,headers:t.headers}:{type:de.data,data:f,statusCode:t.status,headers:t.headers}}if(r===de.error){if(_f(t)){var n,i;if(t.data instanceof Error){var o,s;return{type:de.error,error:t.data,statusCode:(o=t.init)==null?void 0:o.status,headers:(s=t.init)!=null&&s.headers?new Headers(t.init.headers):void 0}}return{type:de.error,error:new Oa(((n=t.init)==null?void 0:n.status)||500,void 0,t.data),statusCode:Gi(t)?t.status:void 0,headers:(i=t.init)!=null&&i.headers?new Headers(t.init.headers):void 0}}return{type:de.error,error:t,statusCode:Gi(t)?t.status:void 0}}if(Lx(t)){var l,u;return{type:de.deferred,deferredData:t,statusCode:(l=t.init)==null?void 0:l.status,headers:((u=t.init)==null?void 0:u.headers)&&new Headers(t.init.headers)}}if(_f(t)){var c,d;return{type:de.data,data:t.data,statusCode:(c=t.init)==null?void 0:c.status,headers:(d=t.init)!=null&&d.headers?new Headers(t.init.headers):void 0}}return{type:de.data,data:t}}function Px(e,t,r,n,i,o){let s=e.headers.get("Location");if(te(s,"Redirects returned/thrown from loaders/actions must have a Location header"),!Ec.test(s)){let l=n.slice(0,n.findIndex(u=>u.route.id===r)+1);s=mu(new URL(t.url),l,i,!0,s,o),e.headers.set("Location",s)}return e}function jf(e,t,r,n){let i=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(Ec.test(e)){let o=e,s=o.startsWith("//")?new URL(t.protocol+o):new URL(o);if(i.includes(s.protocol))throw new Error("Invalid redirect location");let l=or(s.pathname,r)!=null;if(s.origin===t.origin&&l)return s.pathname+s.search+s.hash}try{let o=n.createURL(e);if(i.includes(o.protocol))throw new Error("Invalid redirect location")}catch{}return e}function gn(e,t,r,n){let i=e.createURL(qh(t)).toString(),o={signal:r};if(n&&Pt(n.formMethod)){let{formMethod:s,formEncType:l}=n;o.method=s.toUpperCase(),l==="application/json"?(o.headers=new Headers({"Content-Type":l}),o.body=JSON.stringify(n.json)):l==="text/plain"?o.body=n.text:l==="application/x-www-form-urlencoded"&&n.formData?o.body=gu(n.formData):o.body=n.formData}return new Request(i,o)}function gu(e){let t=new URLSearchParams;for(let[r,n]of e.entries())t.append(r,typeof n=="string"?n:n.name);return t}function Sf(e){let t=new FormData;for(let[r,n]of e.entries())t.append(r,n);return t}function Rx(e,t,r,n,i){let o={},s=null,l,u=!1,c={},d=r&&dt(r[1])?r[1].error:void 0;return e.forEach(f=>{if(!(f.route.id in t))return;let p=f.route.id,y=t[p];if(te(!Qr(y),"Cannot handle redirect results in processLoaderData"),dt(y)){let x=y.error;d!==void 0&&(x=d,d=void 0),s=s||{};{let v=Vr(e,p);s[v.route.id]==null&&(s[v.route.id]=x)}o[p]=void 0,u||(u=!0,l=Gi(y.error)?y.error.status:500),y.headers&&(c[p]=y.headers)}else br(y)?(n.set(p,y.deferredData),o[p]=y.deferredData.data,y.statusCode!=null&&y.statusCode!==200&&!u&&(l=y.statusCode),y.headers&&(c[p]=y.headers)):(o[p]=y.data,y.statusCode&&y.statusCode!==200&&!u&&(l=y.statusCode),y.headers&&(c[p]=y.headers))}),d!==void 0&&r&&(s={[r[0]]:d},o[r[0]]=void 0),{loaderData:o,errors:s,statusCode:l||200,loaderHeaders:c}}function kf(e,t,r,n,i,o,s){let{loaderData:l,errors:u}=Rx(t,r,n,s);return i.forEach(c=>{let{key:d,match:f,controller:p}=c,y=o[d];if(te(y,"Did not find corresponding fetcher result"),!(p&&p.signal.aborted))if(dt(y)){let x=Vr(e.matches,f==null?void 0:f.route.id);u&&u[x.route.id]||(u=we({},u,{[x.route.id]:y.error})),e.fetchers.delete(d)}else if(Qr(y))te(!1,"Unhandled fetcher revalidation redirect");else if(br(y))te(!1,"Unhandled fetcher deferred data");else{let x=pr(y.data);e.fetchers.set(d,x)}}),{loaderData:l,errors:u}}function Nf(e,t,r,n){let i=we({},t);for(let o of r){let s=o.route.id;if(t.hasOwnProperty(s)?t[s]!==void 0&&(i[s]=t[s]):e[s]!==void 0&&o.route.loader&&(i[s]=e[s]),n&&n.hasOwnProperty(s))break}return i}function Ef(e){return e?dt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Vr(e,t){return(t?e.slice(0,e.findIndex(n=>n.route.id===t)+1):[...e]).reverse().find(n=>n.route.hasErrorBoundary===!0)||e[0]}function Cf(e){let t=e.length===1?e[0]:e.find(r=>r.index||!r.path||r.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function tt(e,t){let{pathname:r,routeId:n,method:i,type:o,message:s}=t===void 0?{}:t,l="Unknown Server Error",u="Unknown @remix-run/router error";return e===400?(l="Bad Request",i&&r&&n?u="You made a "+i+' request to "'+r+'" but '+('did not provide a `loader` for route "'+n+'", ')+"so there is no way to handle the request.":o==="defer-action"?u="defer() is not supported in actions":o==="invalid-body"&&(u="Unable to encode submission body")):e===403?(l="Forbidden",u='Route "'+n+'" does not match URL "'+r+'"'):e===404?(l="Not Found",u='No route matches URL "'+r+'"'):e===405&&(l="Method Not Allowed",i&&r&&n?u="You made a "+i.toUpperCase()+' request to "'+r+'" but '+('did not provide an `action` for route "'+n+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new Oa(e||500,l,new Error(u),!0)}function Fo(e){let t=Object.entries(e);for(let r=t.length-1;r>=0;r--){let[n,i]=t[r];if(Qr(i))return{key:n,result:i}}}function qh(e){let t=typeof e=="string"?Ar(e):e;return an(we({},t,{hash:""}))}function Tx(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function zx(e){return Kh(e.result)&&vx.has(e.result.status)}function br(e){return e.type===de.deferred}function dt(e){return e.type===de.error}function Qr(e){return(e&&e.type)===de.redirect}function _f(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function Lx(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function Kh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function Dx(e){return gx.has(e.toLowerCase())}function Pt(e){return mx.has(e.toLowerCase())}async function Mx(e,t,r,n,i){let o=Object.entries(t);for(let s=0;s<o.length;s++){let[l,u]=o[s],c=e.find(p=>(p==null?void 0:p.route.id)===l);if(!c)continue;let d=n.find(p=>p.route.id===c.route.id),f=d!=null&&!Vh(d,c)&&(i&&i[c.route.id])!==void 0;br(u)&&f&&await Cc(u,r,!1).then(p=>{p&&(t[l]=p)})}}async function Ax(e,t,r){for(let n=0;n<r.length;n++){let{key:i,routeId:o,controller:s}=r[n],l=t[i];e.find(c=>(c==null?void 0:c.route.id)===o)&&br(l)&&(te(s,"Expected an AbortController for revalidating fetcher deferred result"),await Cc(l,s.signal,!0).then(c=>{c&&(t[i]=c)}))}}async function Cc(e,t,r){if(r===void 0&&(r=!1),!await e.deferredData.resolveData(t)){if(r)try{return{type:de.data,data:e.deferredData.unwrappedData}}catch(i){return{type:de.error,error:i}}return{type:de.data,data:e.deferredData.data}}}function _c(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function bi(e,t){let r=typeof t=="string"?Ar(t).search:t.search;if(e[e.length-1].route.index&&_c(r||""))return e[e.length-1];let n=Bh(e);return n[n.length-1]}function Pf(e){let{formMethod:t,formAction:r,formEncType:n,text:i,formData:o,json:s}=e;if(!(!t||!r||!n)){if(i!=null)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:void 0,text:i};if(o!=null)return{formMethod:t,formAction:r,formEncType:n,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:t,formAction:r,formEncType:n,formData:void 0,json:s,text:void 0}}}function ul(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Ox(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function pi(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function Fx(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function pr(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function Ix(e,t){try{let r=e.sessionStorage.getItem(Wh);if(r){let n=JSON.parse(r);for(let[i,o]of Object.entries(n||{}))o&&Array.isArray(o)&&t.set(i,new Set(o||[]))}}catch{}}function Ux(e,t){if(t.size>0){let r={};for(let[n,i]of t)r[n]=[...i];try{e.sessionStorage.setItem(Wh,JSON.stringify(r))}catch(n){on(!1,"Failed to save applied view transitions in sessionStorage ("+n+").")}}}/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fa.apply(this,arguments)}const ao=w.createContext(null),Pc=w.createContext(null),lr=w.createContext(null),Rc=w.createContext(null),Wt=w.createContext({outlet:null,matches:[],isDataRoute:!1}),Qh=w.createContext(null);function Bx(e,t){let{relative:r}=t===void 0?{}:t;Yn()||te(!1);let{basename:n,navigator:i}=w.useContext(lr),{hash:o,pathname:s,search:l}=fs(e,{relative:r}),u=s;return n!=="/"&&(u=s==="/"?n:Zt([n,s])),i.createHref({pathname:u,search:l,hash:o})}function Yn(){return w.useContext(Rc)!=null}function Or(){return Yn()||te(!1),w.useContext(Rc).location}function Xh(e){w.useContext(lr).static||w.useLayoutEffect(e)}function Gn(){let{isDataRoute:e}=w.useContext(Wt);return e?t1():$x()}function $x(){Yn()||te(!1);let e=w.useContext(ao),{basename:t,future:r,navigator:n}=w.useContext(lr),{matches:i}=w.useContext(Wt),{pathname:o}=Or(),s=JSON.stringify(cs(i,r.v7_relativeSplatPath)),l=w.useRef(!1);return Xh(()=>{l.current=!0}),w.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){n.go(c);return}let f=ds(c,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Zt([t,f.pathname])),(d.replace?n.replace:n.push)(f,d.state,d)},[t,n,s,o,e])}const Wx=w.createContext(null);function Vx(e){let t=w.useContext(Wt).outlet;return t&&w.createElement(Wx.Provider,{value:e},t)}function Tc(){let{matches:e}=w.useContext(Wt),t=e[e.length-1];return t?t.params:{}}function fs(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=w.useContext(lr),{matches:i}=w.useContext(Wt),{pathname:o}=Or(),s=JSON.stringify(cs(i,n.v7_relativeSplatPath));return w.useMemo(()=>ds(e,JSON.parse(s),o,r==="path"),[e,s,o,r])}function Hx(e,t,r,n){Yn()||te(!1);let{navigator:i}=w.useContext(lr),{matches:o}=w.useContext(Wt),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c=Or(),d;d=c;let f=d.pathname||"/",p=f;if(u!=="/"){let v=u.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(v.length).join("/")}let y=Wr(e,{pathname:p});return Yx(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},l,v.params),pathname:Zt([u,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?u:Zt([u,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),o,r,n)}function qx(){let e=e1(),t=Gi(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),r?w.createElement("pre",{style:i},r):null,null)}const Kx=w.createElement(qx,null);class Qx extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?w.createElement(Wt.Provider,{value:this.props.routeContext},w.createElement(Qh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Xx(e){let{routeContext:t,match:r,children:n}=e,i=w.useContext(ao);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),w.createElement(Wt.Provider,{value:t},n)}function Yx(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=n)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);d>=0||te(!1),s=s.slice(0,Math.min(s.length,d+1))}let u=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let d=0;d<s.length;d++){let f=s[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=d),f.route.id){let{loaderData:p,errors:y}=r,x=f.route.loader&&p[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||x){u=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((d,f,p)=>{let y,x=!1,v=null,j=null;r&&(y=l&&f.route.id?l[f.route.id]:void 0,v=f.route.errorElement||Kx,u&&(c<0&&p===0?(r1("route-fallback"),x=!0,j=null):c===p&&(x=!0,j=f.route.hydrateFallbackElement||null)));let g=t.concat(s.slice(0,p+1)),h=()=>{let b;return y?b=v:x?b=j:f.route.Component?b=w.createElement(f.route.Component,null):f.route.element?b=f.route.element:b=d,w.createElement(Xx,{match:f,routeContext:{outlet:d,matches:g,isDataRoute:r!=null},children:b})};return r&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?w.createElement(Qx,{location:r.location,revalidation:r.revalidation,component:v,error:y,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var Yh=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Yh||{}),Gh=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Gh||{});function Gx(e){let t=w.useContext(ao);return t||te(!1),t}function Jx(e){let t=w.useContext(Pc);return t||te(!1),t}function Zx(e){let t=w.useContext(Wt);return t||te(!1),t}function Jh(e){let t=Zx(),r=t.matches[t.matches.length-1];return r.route.id||te(!1),r.route.id}function e1(){var e;let t=w.useContext(Qh),r=Jx(Gh.UseRouteError),n=Jh();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function t1(){let{router:e}=Gx(Yh.UseNavigateStable),t=Jh(),r=w.useRef(!1);return Xh(()=>{r.current=!0}),w.useCallback(function(i,o){o===void 0&&(o={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Fa({fromRouteId:t},o)))},[e,t])}const Rf={};function r1(e,t,r){Rf[e]||(Rf[e]=!0)}function n1(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function i1(e){let{to:t,replace:r,state:n,relative:i}=e;Yn()||te(!1);let{future:o,static:s}=w.useContext(lr),{matches:l}=w.useContext(Wt),{pathname:u}=Or(),c=Gn(),d=ds(t,cs(l,o.v7_relativeSplatPath),u,i==="path"),f=JSON.stringify(d);return w.useEffect(()=>c(JSON.parse(f),{replace:r,state:n,relative:i}),[c,f,i,r,n]),null}function o1(e){return Vx(e.context)}function a1(e){let{basename:t="/",children:r=null,location:n,navigationType:i=ze.Pop,navigator:o,static:s=!1,future:l}=e;Yn()&&te(!1);let u=t.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:u,navigator:o,static:s,future:Fa({v7_relativeSplatPath:!1},l)}),[u,l,o,s]);typeof n=="string"&&(n=Ar(n));let{pathname:d="/",search:f="",hash:p="",state:y=null,key:x="default"}=n,v=w.useMemo(()=>{let j=or(d,u);return j==null?null:{location:{pathname:j,search:f,hash:p,state:y,key:x},navigationType:i}},[u,d,f,p,y,x,i]);return v==null?null:w.createElement(lr.Provider,{value:c},w.createElement(Rc.Provider,{children:r,value:v}))}new Promise(()=>{});function s1(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:w.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:w.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:w.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vn(){return Vn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Vn.apply(this,arguments)}function Zh(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,o;for(o=0;o<n.length;o++)i=n[o],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function l1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function u1(e,t){return e.button===0&&(!t||t==="_self")&&!l1(e)}function vu(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function c1(e,t){let r=vu(e);return t&&t.forEach((n,i)=>{r.has(i)||t.getAll(i).forEach(o=>{r.append(i,o)})}),r}const d1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],f1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],p1="6";try{window.__reactRouterVersion=p1}catch{}function m1(e,t){return wx({basename:void 0,future:Vn({},void 0,{v7_prependBasename:!0}),history:V0({window:void 0}),hydrationData:h1(),routes:e,mapRouteProperties:s1,dataStrategy:void 0,patchRoutesOnNavigation:void 0,window:void 0}).initialize()}function h1(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Vn({},t,{errors:g1(t.errors)})),t}function g1(e){if(!e)return null;let t=Object.entries(e),r={};for(let[n,i]of t)if(i&&i.__type==="RouteErrorResponse")r[n]=new Oa(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let o=window[i.__subType];if(typeof o=="function")try{let s=new o(i.message);s.stack="",r[n]=s}catch{}}if(r[n]==null){let o=new Error(i.message);o.stack="",r[n]=o}}else r[n]=i;return r}const eg=w.createContext({isTransitioning:!1}),v1=w.createContext(new Map),y1="startTransition",Tf=Tv[y1],x1="flushSync",zf=W0[x1];function b1(e){Tf?Tf(e):e()}function mi(e){zf?zf(e):e()}class w1{constructor(){this.status="pending",this.promise=new Promise((t,r)=>{this.resolve=n=>{this.status==="pending"&&(this.status="resolved",t(n))},this.reject=n=>{this.status==="pending"&&(this.status="rejected",r(n))}})}}function j1(e){let{fallbackElement:t,router:r,future:n}=e,[i,o]=w.useState(r.state),[s,l]=w.useState(),[u,c]=w.useState({isTransitioning:!1}),[d,f]=w.useState(),[p,y]=w.useState(),[x,v]=w.useState(),j=w.useRef(new Map),{v7_startTransition:g}=n||{},h=w.useCallback(C=>{g?b1(C):C()},[g]),b=w.useCallback((C,_)=>{let{deletedFetchers:z,flushSync:W,viewTransitionOpts:V}=_;C.fetchers.forEach((ne,me)=>{ne.data!==void 0&&j.current.set(me,ne.data)}),z.forEach(ne=>j.current.delete(ne));let J=r.window==null||r.window.document==null||typeof r.window.document.startViewTransition!="function";if(!V||J){W?mi(()=>o(C)):h(()=>o(C));return}if(W){mi(()=>{p&&(d&&d.resolve(),p.skipTransition()),c({isTransitioning:!0,flushSync:!0,currentLocation:V.currentLocation,nextLocation:V.nextLocation})});let ne=r.window.document.startViewTransition(()=>{mi(()=>o(C))});ne.finished.finally(()=>{mi(()=>{f(void 0),y(void 0),l(void 0),c({isTransitioning:!1})})}),mi(()=>y(ne));return}p?(d&&d.resolve(),p.skipTransition(),v({state:C,currentLocation:V.currentLocation,nextLocation:V.nextLocation})):(l(C),c({isTransitioning:!0,flushSync:!1,currentLocation:V.currentLocation,nextLocation:V.nextLocation}))},[r.window,p,d,j,h]);w.useLayoutEffect(()=>r.subscribe(b),[r,b]),w.useEffect(()=>{u.isTransitioning&&!u.flushSync&&f(new w1)},[u]),w.useEffect(()=>{if(d&&s&&r.window){let C=s,_=d.promise,z=r.window.document.startViewTransition(async()=>{h(()=>o(C)),await _});z.finished.finally(()=>{f(void 0),y(void 0),l(void 0),c({isTransitioning:!1})}),y(z)}},[h,s,d,r.window]),w.useEffect(()=>{d&&s&&i.location.key===s.location.key&&d.resolve()},[d,p,i.location,s]),w.useEffect(()=>{!u.isTransitioning&&x&&(l(x.state),c({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),v(void 0))},[u.isTransitioning,x]),w.useEffect(()=>{},[]);let S=w.useMemo(()=>({createHref:r.createHref,encodeLocation:r.encodeLocation,go:C=>r.navigate(C),push:(C,_,z)=>r.navigate(C,{state:_,preventScrollReset:z==null?void 0:z.preventScrollReset}),replace:(C,_,z)=>r.navigate(C,{replace:!0,state:_,preventScrollReset:z==null?void 0:z.preventScrollReset})}),[r]),N=r.basename||"/",T=w.useMemo(()=>({router:r,navigator:S,static:!1,basename:N}),[r,S,N]),m=w.useMemo(()=>({v7_relativeSplatPath:r.future.v7_relativeSplatPath}),[r.future.v7_relativeSplatPath]);return w.useEffect(()=>n1(n,r.future),[n,r.future]),w.createElement(w.Fragment,null,w.createElement(ao.Provider,{value:T},w.createElement(Pc.Provider,{value:i},w.createElement(v1.Provider,{value:j.current},w.createElement(eg.Provider,{value:u},w.createElement(a1,{basename:N,location:i.location,navigationType:i.historyAction,navigator:S,future:m},i.initialized||r.future.v7_partialHydration?w.createElement(S1,{routes:r.routes,future:r.future,state:i}):t))))),null)}const S1=w.memo(k1);function k1(e){let{routes:t,future:r,state:n}=e;return Hx(t,void 0,n,r)}const N1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",E1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,re=w.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:o,replace:s,state:l,target:u,to:c,preventScrollReset:d,viewTransition:f}=t,p=Zh(t,d1),{basename:y}=w.useContext(lr),x,v=!1;if(typeof c=="string"&&E1.test(c)&&(x=c,N1))try{let b=new URL(window.location.href),S=c.startsWith("//")?new URL(b.protocol+c):new URL(c),N=or(S.pathname,y);S.origin===b.origin&&N!=null?c=N+S.search+S.hash:v=!0}catch{}let j=Bx(c,{relative:i}),g=_1(c,{replace:s,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:f});function h(b){n&&n(b),b.defaultPrevented||g(b)}return w.createElement("a",Vn({},p,{href:x||j,onClick:v||o?n:h,ref:r,target:u}))}),na=w.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:i=!1,className:o="",end:s=!1,style:l,to:u,viewTransition:c,children:d}=t,f=Zh(t,f1),p=fs(u,{relative:f.relative}),y=Or(),x=w.useContext(Pc),{navigator:v,basename:j}=w.useContext(lr),g=x!=null&&R1(p)&&c===!0,h=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,b=y.pathname,S=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(b=b.toLowerCase(),S=S?S.toLowerCase():null,h=h.toLowerCase()),S&&j&&(S=or(S,j)||S);const N=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let T=b===h||!s&&b.startsWith(h)&&b.charAt(N)==="/",m=S!=null&&(S===h||!s&&S.startsWith(h)&&S.charAt(h.length)==="/"),C={isActive:T,isPending:m,isTransitioning:g},_=T?n:void 0,z;typeof o=="function"?z=o(C):z=[o,T?"active":null,m?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let W=typeof l=="function"?l(C):l;return w.createElement(re,Vn({},f,{"aria-current":_,className:z,ref:r,style:W,to:u,viewTransition:c}),typeof d=="function"?d(C):d)});var yu;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yu||(yu={}));var Lf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Lf||(Lf={}));function C1(e){let t=w.useContext(ao);return t||te(!1),t}function _1(e,t){let{target:r,replace:n,state:i,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,u=Gn(),c=Or(),d=fs(e,{relative:s});return w.useCallback(f=>{if(u1(f,r)){f.preventDefault();let p=n!==void 0?n:an(c)===an(d);u(e,{replace:p,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[c,u,d,n,i,r,e,o,s,l])}function P1(e){let t=w.useRef(vu(e)),r=w.useRef(!1),n=Or(),i=w.useMemo(()=>c1(n.search,r.current?null:t.current),[n.search]),o=Gn(),s=w.useCallback((l,u)=>{const c=vu(typeof l=="function"?l(i):l);r.current=!0,o("?"+c,u)},[o,i]);return[i,s]}function R1(e,t){t===void 0&&(t={});let r=w.useContext(eg);r==null&&te(!1);let{basename:n}=C1(yu.useViewTransitionState),i=fs(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=or(r.currentLocation.pathname,n)||r.currentLocation.pathname,s=or(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Aa(i.pathname,s)!=null||Aa(i.pathname,o)!=null}var tg={exports:{}},rg={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=w;function T1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var z1=typeof Object.is=="function"?Object.is:T1,L1=so.useSyncExternalStore,D1=so.useRef,M1=so.useEffect,A1=so.useMemo,O1=so.useDebugValue;rg.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var o=D1(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=A1(function(){function u(y){if(!c){if(c=!0,d=y,y=n(y),i!==void 0&&s.hasValue){var x=s.value;if(i(x,y))return f=x}return f=y}if(x=f,z1(d,y))return x;var v=n(y);return i!==void 0&&i(x,v)?(d=y,x):(d=y,f=v)}var c=!1,d,f,p=r===void 0?null:r;return[function(){return u(t())},p===null?void 0:function(){return u(p())}]},[t,r,n,i]);var l=L1(e,o[0],o[1]);return M1(function(){s.hasValue=!0,s.value=l},[l]),O1(l),l};tg.exports=rg;var F1=tg.exports;function I1(e){e()}function U1(){let e=null,t=null;return{clear(){e=null,t=null},notify(){I1(()=>{let r=e;for(;r;)r.callback(),r=r.next})},get(){const r=[];let n=e;for(;n;)r.push(n),n=n.next;return r},subscribe(r){let n=!0;const i=t={callback:r,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!n||e===null||(n=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var Df={notify(){},get:()=>[]};function B1(e,t){let r,n=Df,i=0,o=!1;function s(v){d();const j=n.subscribe(v);let g=!1;return()=>{g||(g=!0,j(),f())}}function l(){n.notify()}function u(){x.onStateChange&&x.onStateChange()}function c(){return o}function d(){i++,r||(r=e.subscribe(u),n=U1())}function f(){i--,r&&i===0&&(r(),r=void 0,n.clear(),n=Df)}function p(){o||(o=!0,d())}function y(){o&&(o=!1,f())}const x={addNestedSub:s,notifyNestedSubs:l,handleChangeWrapper:u,isSubscribed:c,trySubscribe:p,tryUnsubscribe:y,getListeners:()=>n};return x}var $1=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",W1=$1(),V1=()=>typeof navigator<"u"&&navigator.product==="ReactNative",H1=V1(),q1=()=>W1||H1?w.useLayoutEffect:w.useEffect,K1=q1(),cl=Symbol.for("react-redux-context"),dl=typeof globalThis<"u"?globalThis:{};function Q1(){if(!w.createContext)return{};const e=dl[cl]??(dl[cl]=new Map);let t=e.get(w.createContext);return t||(t=w.createContext(null),e.set(w.createContext,t)),t}var zr=Q1();function X1(e){const{children:t,context:r,serverState:n,store:i}=e,o=w.useMemo(()=>{const u=B1(i);return{store:i,subscription:u,getServerState:n?()=>n:void 0}},[i,n]),s=w.useMemo(()=>i.getState(),[i]);K1(()=>{const{subscription:u}=o;return u.onStateChange=u.notifyNestedSubs,u.trySubscribe(),s!==i.getState()&&u.notifyNestedSubs(),()=>{u.tryUnsubscribe(),u.onStateChange=void 0}},[o,s]);const l=r||zr;return w.createElement(l.Provider,{value:o},t)}var Y1=X1;function zc(e=zr){return function(){return w.useContext(e)}}var ng=zc();function ig(e=zr){const t=e===zr?ng:zc(e),r=()=>{const{store:n}=t();return n};return Object.assign(r,{withTypes:()=>r}),r}var G1=ig();function J1(e=zr){const t=e===zr?G1:ig(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var ps=J1(),Z1=(e,t)=>e===t;function eb(e=zr){const t=e===zr?ng:zc(e),r=(n,i={})=>{const{equalityFn:o=Z1}=typeof i=="function"?{equalityFn:i}:i,s=t(),{store:l,subscription:u,getServerState:c}=s;w.useRef(!0);const d=w.useCallback({[n.name](p){return n(p)}}[n.name],[n]),f=F1.useSyncExternalStoreWithSelector(u.addNestedSub,l.getState,c||l.getState,d,o);return w.useDebugValue(f),f};return Object.assign(r,{withTypes:()=>r}),r}var ms=eb();function Ue(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var tb=typeof Symbol=="function"&&Symbol.observable||"@@observable",Mf=tb,fl=()=>Math.random().toString(36).substring(7).split("").join("."),rb={INIT:`@@redux/INIT${fl()}`,REPLACE:`@@redux/REPLACE${fl()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${fl()}`},Ia=rb;function Lc(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function og(e,t,r){if(typeof e!="function")throw new Error(Ue(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(Ue(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(Ue(1));return r(og)(e,t)}let n=e,i=t,o=new Map,s=o,l=0,u=!1;function c(){s===o&&(s=new Map,o.forEach((j,g)=>{s.set(g,j)}))}function d(){if(u)throw new Error(Ue(3));return i}function f(j){if(typeof j!="function")throw new Error(Ue(4));if(u)throw new Error(Ue(5));let g=!0;c();const h=l++;return s.set(h,j),function(){if(g){if(u)throw new Error(Ue(6));g=!1,c(),s.delete(h),o=null}}}function p(j){if(!Lc(j))throw new Error(Ue(7));if(typeof j.type>"u")throw new Error(Ue(8));if(typeof j.type!="string")throw new Error(Ue(17));if(u)throw new Error(Ue(9));try{u=!0,i=n(i,j)}finally{u=!1}return(o=s).forEach(h=>{h()}),j}function y(j){if(typeof j!="function")throw new Error(Ue(10));n=j,p({type:Ia.REPLACE})}function x(){const j=f;return{subscribe(g){if(typeof g!="object"||g===null)throw new Error(Ue(11));function h(){const S=g;S.next&&S.next(d())}return h(),{unsubscribe:j(h)}},[Mf](){return this}}}return p({type:Ia.INIT}),{dispatch:p,subscribe:f,getState:d,replaceReducer:y,[Mf]:x}}function nb(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Ia.INIT})>"u")throw new Error(Ue(12));if(typeof r(void 0,{type:Ia.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ue(13))})}function ib(e){const t=Object.keys(e),r={};for(let o=0;o<t.length;o++){const s=t[o];typeof e[s]=="function"&&(r[s]=e[s])}const n=Object.keys(r);let i;try{nb(r)}catch(o){i=o}return function(s={},l){if(i)throw i;let u=!1;const c={};for(let d=0;d<n.length;d++){const f=n[d],p=r[f],y=s[f],x=p(y,l);if(typeof x>"u")throw l&&l.type,new Error(Ue(14));c[f]=x,u=u||x!==y}return u=u||n.length!==Object.keys(s).length,u?c:s}}function Ua(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function ob(...e){return t=>(r,n)=>{const i=t(r,n);let o=()=>{throw new Error(Ue(15))};const s={getState:i.getState,dispatch:(u,...c)=>o(u,...c)},l=e.map(u=>u(s));return o=Ua(...l)(i.dispatch),{...i,dispatch:o}}}function ab(e){return Lc(e)&&"type"in e&&typeof e.type=="string"}var ag=Symbol.for("immer-nothing"),Af=Symbol.for("immer-draftable"),Je=Symbol.for("immer-state");function Tt(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var pt=Object,Hn=pt.getPrototypeOf,Ba="constructor",hs="prototype",xu="configurable",$a="enumerable",ia="writable",Ji="value",ar=e=>!!e&&!!e[Je];function Mt(e){var t;return e?sg(e)||vs(e)||!!e[Af]||!!((t=e[Ba])!=null&&t[Af])||ys(e)||xs(e):!1}var sb=pt[hs][Ba].toString(),Of=new WeakMap;function sg(e){if(!e||!Dc(e))return!1;const t=Hn(e);if(t===null||t===pt[hs])return!0;const r=pt.hasOwnProperty.call(t,Ba)&&t[Ba];if(r===Object)return!0;if(!yn(r))return!1;let n=Of.get(r);return n===void 0&&(n=Function.toString.call(r),Of.set(r,n)),n===sb}function gs(e,t,r=!0){lo(e)===0?(r?Reflect.ownKeys(e):pt.keys(e)).forEach(i=>{t(i,e[i],e)}):e.forEach((n,i)=>t(i,n,e))}function lo(e){const t=e[Je];return t?t.type_:vs(e)?1:ys(e)?2:xs(e)?3:0}var Ff=(e,t,r=lo(e))=>r===2?e.has(t):pt[hs].hasOwnProperty.call(e,t),bu=(e,t,r=lo(e))=>r===2?e.get(t):e[t],Wa=(e,t,r,n=lo(e))=>{n===2?e.set(t,r):n===3?e.add(r):e[t]=r};function lb(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}var vs=Array.isArray,ys=e=>e instanceof Map,xs=e=>e instanceof Set,Dc=e=>typeof e=="object",yn=e=>typeof e=="function",pl=e=>typeof e=="boolean";function ub(e){const t=+e;return Number.isInteger(t)&&String(t)===e}var Xt=e=>e.copy_||e.base_,Mc=e=>e.modified_?e.copy_:e.base_;function wu(e,t){if(ys(e))return new Map(e);if(xs(e))return new Set(e);if(vs(e))return Array[hs].slice.call(e);const r=sg(e);if(t===!0||t==="class_only"&&!r){const n=pt.getOwnPropertyDescriptors(e);delete n[Je];let i=Reflect.ownKeys(n);for(let o=0;o<i.length;o++){const s=i[o],l=n[s];l[ia]===!1&&(l[ia]=!0,l[xu]=!0),(l.get||l.set)&&(n[s]={[xu]:!0,[ia]:!0,[$a]:l[$a],[Ji]:e[s]})}return pt.create(Hn(e),n)}else{const n=Hn(e);if(n!==null&&r)return{...e};const i=pt.create(n);return pt.assign(i,e)}}function Ac(e,t=!1){return bs(e)||ar(e)||!Mt(e)||(lo(e)>1&&pt.defineProperties(e,{set:Io,add:Io,clear:Io,delete:Io}),pt.freeze(e),t&&gs(e,(r,n)=>{Ac(n,!0)},!1)),e}function cb(){Tt(2)}var Io={[Ji]:cb};function bs(e){return e===null||!Dc(e)?!0:pt.isFrozen(e)}var Va="MapSet",ju="Patches",If="ArrayMethods",lg={};function sn(e){const t=lg[e];return t||Tt(0,e),t}var Uf=e=>!!lg[e],Zi,ug=()=>Zi,db=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Uf(Va)?sn(Va):void 0,arrayMethodsPlugin_:Uf(If)?sn(If):void 0});function Bf(e,t){t&&(e.patchPlugin_=sn(ju),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Su(e){ku(e),e.drafts_.forEach(fb),e.drafts_=null}function ku(e){e===Zi&&(Zi=e.parent_)}var $f=e=>Zi=db(Zi,e);function fb(e){const t=e[Je];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Wf(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];if(e!==void 0&&e!==r){r[Je].modified_&&(Su(t),Tt(4)),Mt(e)&&(e=Vf(t,e));const{patchPlugin_:i}=t;i&&i.generateReplacementPatches_(r[Je].base_,e,t)}else e=Vf(t,r);return pb(t,e,!0),Su(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ag?e:void 0}function Vf(e,t){if(bs(t))return t;const r=t[Je];if(!r)return Ha(t,e.handledSet_,e);if(!ws(r,e))return t;if(!r.modified_)return r.base_;if(!r.finalized_){const{callbacks_:n}=r;if(n)for(;n.length>0;)n.pop()(e);fg(r,e)}return r.copy_}function pb(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Ac(t,r)}function cg(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var ws=(e,t)=>e.scope_===t,mb=[];function dg(e,t,r,n){const i=Xt(e),o=e.type_;if(n!==void 0&&bu(i,n,o)===t){Wa(i,n,r,o);return}if(!e.draftLocations_){const l=e.draftLocations_=new Map;gs(i,(u,c)=>{if(ar(c)){const d=l.get(c)||[];d.push(u),l.set(c,d)}})}const s=e.draftLocations_.get(t)??mb;for(const l of s)Wa(i,l,r,o)}function hb(e,t,r){e.callbacks_.push(function(i){var l;const o=t;if(!o||!ws(o,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(o);const s=Mc(o);dg(e,o.draft_??o,s,r),fg(o,i)})}function fg(e,t){var n;if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(((n=e.assigned_)==null?void 0:n.size)??0)>0)){const{patchPlugin_:i}=t;if(i){const o=i.getPath(e);o&&i.generatePatches_(e,o,t)}cg(e)}}function gb(e,t,r){const{scope_:n}=e;if(ar(r)){const i=r[Je];ws(i,n)&&i.callbacks_.push(function(){oa(e);const s=Mc(i);dg(e,r,s,t)})}else Mt(r)&&e.callbacks_.push(function(){const o=Xt(e);e.type_===3?o.has(r)&&Ha(r,n.handledSet_,n):bu(o,t,e.type_)===r&&n.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&Ha(bu(e.copy_,t,e.type_),n.handledSet_,n)})}function Ha(e,t,r){return!r.immer_.autoFreeze_&&r.unfinalizedDrafts_<1||ar(e)||t.has(e)||!Mt(e)||bs(e)||(t.add(e),gs(e,(n,i)=>{if(ar(i)){const o=i[Je];if(ws(o,r)){const s=Mc(o);Wa(e,n,s,e.type_),cg(o)}}else Mt(i)&&Ha(i,t,r)})),e}function vb(e,t){const r=vs(e),n={type_:r?1:0,scope_:t?t.scope_:ug(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=n,o=qa;r&&(i=[n],o=eo);const{revoke:s,proxy:l}=Proxy.revocable(i,o);return n.draft_=l,n.revoke_=s,[l,n]}var qa={get(e,t){if(t===Je)return e;let r=e.scope_.arrayMethodsPlugin_;const n=e.type_===1&&typeof t=="string";if(n&&r!=null&&r.isArrayOperationMethod(t))return r.createMethodInterceptor(e,t);const i=Xt(e);if(!Ff(i,t,e.type_))return yb(e,i,t);const o=i[t];if(e.finalized_||!Mt(o)||n&&e.operationMethod&&(r!=null&&r.isMutatingArrayMethod(e.operationMethod))&&ub(t))return o;if(o===ml(e.base_,t)){oa(e);const s=e.type_===1?+t:t,l=Eu(e.scope_,o,e,s);return e.copy_[s]=l}return o},has(e,t){return t in Xt(e)},ownKeys(e){return Reflect.ownKeys(Xt(e))},set(e,t,r){const n=pg(Xt(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=ml(Xt(e),t),o=i==null?void 0:i[Je];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_.set(t,!1),!0;if(lb(r,i)&&(r!==void 0||Ff(e.base_,t,e.type_)))return!0;oa(e),Nu(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_.set(t,!0),gb(e,t,r)),!0},deleteProperty(e,t){return oa(e),ml(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),Nu(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=Xt(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{[ia]:!0,[xu]:e.type_!==1||t!=="length",[$a]:n[$a],[Ji]:r[t]}},defineProperty(){Tt(11)},getPrototypeOf(e){return Hn(e.base_)},setPrototypeOf(){Tt(12)}},eo={};for(let e in qa){let t=qa[e];eo[e]=function(){const r=arguments;return r[0]=r[0][0],t.apply(this,r)}}eo.deleteProperty=function(e,t){return eo.set.call(this,e,t,void 0)};eo.set=function(e,t,r){return qa.set.call(this,e[0],t,r,e[0])};function ml(e,t){const r=e[Je];return(r?Xt(r):e)[t]}function yb(e,t,r){var i;const n=pg(t,r);return n?Ji in n?n[Ji]:(i=n.get)==null?void 0:i.call(e.draft_):void 0}function pg(e,t){if(!(t in e))return;let r=Hn(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=Hn(r)}}function Nu(e){e.modified_||(e.modified_=!0,e.parent_&&Nu(e.parent_))}function oa(e){e.copy_||(e.assigned_=new Map,e.copy_=wu(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var xb=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(t,r,n)=>{if(yn(t)&&!yn(r)){const o=r;r=t;const s=this;return function(u=o,...c){return s.produce(u,d=>r.call(this,d,...c))}}yn(r)||Tt(6),n!==void 0&&!yn(n)&&Tt(7);let i;if(Mt(t)){const o=$f(this),s=Eu(o,t,void 0);let l=!0;try{i=r(s),l=!1}finally{l?Su(o):ku(o)}return Bf(o,n),Wf(i,o)}else if(!t||!Dc(t)){if(i=r(t),i===void 0&&(i=t),i===ag&&(i=void 0),this.autoFreeze_&&Ac(i,!0),n){const o=[],s=[];sn(ju).generateReplacementPatches_(t,i,{patches_:o,inversePatches_:s}),n(o,s)}return i}else Tt(1,t)},this.produceWithPatches=(t,r)=>{if(yn(t))return(s,...l)=>this.produceWithPatches(s,u=>t(u,...l));let n,i;return[this.produce(t,r,(s,l)=>{n=s,i=l}),n,i]},pl(e==null?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),pl(e==null?void 0:e.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),pl(e==null?void 0:e.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){Mt(e)||Tt(8),ar(e)&&(e=bb(e));const t=$f(this),r=Eu(t,e,void 0);return r[Je].isManual_=!0,ku(t),r}finishDraft(e,t){const r=e&&e[Je];(!r||!r.isManual_)&&Tt(9);const{scope_:n}=r;return Bf(n,t),Wf(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=sn(ju).applyPatches_;return ar(e)?n(e,t):this.produce(e,i=>n(i,t))}};function Eu(e,t,r,n){const[i,o]=ys(t)?sn(Va).proxyMap_(t,r):xs(t)?sn(Va).proxySet_(t,r):vb(t,r);return((r==null?void 0:r.scope_)??ug()).drafts_.push(i),o.callbacks_=(r==null?void 0:r.callbacks_)??[],o.key_=n,r&&n!==void 0?hb(r,o,n):o.callbacks_.push(function(u){var d;(d=u.mapSetPlugin_)==null||d.fixSetContents(o);const{patchPlugin_:c}=u;o.modified_&&c&&c.generatePatches_(o,[],u)}),i}function bb(e){return ar(e)||Tt(10,e),mg(e)}function mg(e){if(!Mt(e)||bs(e))return e;const t=e[Je];let r,n=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=wu(e,t.scope_.immer_.useStrictShallowCopy_),n=t.scope_.immer_.shouldUseStrictIteration()}else r=wu(e,!0);return gs(r,(i,o)=>{Wa(r,i,mg(o))},n),t&&(t.finalized_=!1),r}var wb=new xb,hg=wb.produce;function gg(e){return({dispatch:r,getState:n})=>i=>o=>typeof o=="function"?o(r,n,e):i(o)}var jb=gg(),Sb=gg,kb=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Ua:Ua.apply(null,arguments)},Nb=e=>e&&typeof e.match=="function";function zi(e,t){function r(...n){if(t){let i=t(...n);if(!i)throw new Error(er(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>ab(n)&&n.type===e,r}var vg=class wi extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,wi.prototype)}static get[Symbol.species](){return wi}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new wi(...t[0].concat(this)):new wi(...t.concat(this))}};function Hf(e){return Mt(e)?hg(e,()=>{}):e}function Uo(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function Eb(e){return typeof e=="boolean"}var Cb=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:i=!0,actionCreatorCheck:o=!0}=t??{};let s=new vg;return r&&(Eb(r)?s.push(jb):s.push(Sb(r.extraArgument))),s},_b="RTK_autoBatch",qf=e=>t=>{setTimeout(t,e)},Pb=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let i=!0,o=!1,s=!1;const l=new Set,u=e.type==="tick"?queueMicrotask:e.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:qf(10):e.type==="callback"?e.queueNotification:qf(e.timeout),c=()=>{s=!1,o&&(o=!1,l.forEach(d=>d()))};return Object.assign({},n,{subscribe(d){const f=()=>i&&d(),p=n.subscribe(f);return l.add(d),()=>{p(),l.delete(d)}},dispatch(d){var f;try{return i=!((f=d==null?void 0:d.meta)!=null&&f[_b]),o=!i,o&&(s||(s=!0,u(c))),n.dispatch(d)}finally{i=!0}}})},Rb=e=>function(r){const{autoBatch:n=!0}=r??{};let i=new vg(e);return n&&i.push(Pb(typeof n=="object"?n:void 0)),i};function Tb(e){const t=Cb(),{reducer:r=void 0,middleware:n,devTools:i=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{};let l;if(typeof r=="function")l=r;else if(Lc(r))l=ib(r);else throw new Error(er(1));let u;typeof n=="function"?u=n(t):u=t();let c=Ua;i&&(c=kb({trace:!1,...typeof i=="object"&&i}));const d=ob(...u),f=Rb(d);let p=typeof s=="function"?s(f):f();const y=c(...p);return og(l,o,y)}function yg(e){const t={},r=[];let n;const i={addCase(o,s){const l=typeof o=="string"?o:o.type;if(!l)throw new Error(er(28));if(l in t)throw new Error(er(29));return t[l]=s,i},addAsyncThunk(o,s){return s.pending&&(t[o.pending.type]=s.pending),s.rejected&&(t[o.rejected.type]=s.rejected),s.fulfilled&&(t[o.fulfilled.type]=s.fulfilled),s.settled&&r.push({matcher:o.settled,reducer:s.settled}),i},addMatcher(o,s){return r.push({matcher:o,reducer:s}),i},addDefaultCase(o){return n=o,i}};return e(i),[t,r,n]}function zb(e){return typeof e=="function"}function Lb(e,t){let[r,n,i]=yg(t),o;if(zb(e))o=()=>Hf(e());else{const l=Hf(e);o=()=>l}function s(l=o(),u){let c=[r[u.type],...n.filter(({matcher:d})=>d(u)).map(({reducer:d})=>d)];return c.filter(d=>!!d).length===0&&(c=[i]),c.reduce((d,f)=>{if(f)if(ar(d)){const y=f(d,u);return y===void 0?d:y}else{if(Mt(d))return hg(d,p=>f(p,u));{const p=f(d,u);if(p===void 0){if(d===null)return d;throw Error("A case reducer on a non-draftable value must not return undefined")}return p}}return d},l)}return s.getInitialState=o,s}var Db=(e,t)=>Nb(e)?e.match(t):e(t);function Mb(...e){return t=>e.some(r=>Db(r,t))}var Ab="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Ob=(e=21)=>{let t="",r=e;for(;r--;)t+=Ab[Math.random()*64|0];return t},Fb=["name","message","stack","code"],hl=class{constructor(e,t){Ds(this,"_type");this.payload=e,this.meta=t}},Kf=class{constructor(e,t){Ds(this,"_type");this.payload=e,this.meta=t}},Ib=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of Fb)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},Qf="External signal was aborted",Oc=(()=>{function e(t,r,n){const i=zi(t+"/fulfilled",(u,c,d,f)=>({payload:u,meta:{...f||{},arg:d,requestId:c,requestStatus:"fulfilled"}})),o=zi(t+"/pending",(u,c,d)=>({payload:void 0,meta:{...d||{},arg:c,requestId:u,requestStatus:"pending"}})),s=zi(t+"/rejected",(u,c,d,f,p)=>({payload:f,error:(n&&n.serializeError||Ib)(u||"Rejected"),meta:{...p||{},arg:d,requestId:c,rejectedWithValue:!!f,requestStatus:"rejected",aborted:(u==null?void 0:u.name)==="AbortError",condition:(u==null?void 0:u.name)==="ConditionError"}}));function l(u,{signal:c}={}){return(d,f,p)=>{const y=n!=null&&n.idGenerator?n.idGenerator(u):Ob(),x=new AbortController;let v,j;function g(b){j=b,x.abort()}c&&(c.aborted?g(Qf):c.addEventListener("abort",()=>g(Qf),{once:!0}));const h=async function(){var N,T;let b;try{let m=(N=n==null?void 0:n.condition)==null?void 0:N.call(n,u,{getState:f,extra:p});if(Bb(m)&&(m=await m),m===!1||x.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const C=new Promise((_,z)=>{v=()=>{z({name:"AbortError",message:j||"Aborted"})},x.signal.addEventListener("abort",v,{once:!0})});d(o(y,u,(T=n==null?void 0:n.getPendingMeta)==null?void 0:T.call(n,{requestId:y,arg:u},{getState:f,extra:p}))),b=await Promise.race([C,Promise.resolve(r(u,{dispatch:d,getState:f,extra:p,requestId:y,signal:x.signal,abort:g,rejectWithValue:(_,z)=>new hl(_,z),fulfillWithValue:(_,z)=>new Kf(_,z)})).then(_=>{if(_ instanceof hl)throw _;return _ instanceof Kf?i(_.payload,y,u,_.meta):i(_,y,u)})])}catch(m){b=m instanceof hl?s(null,y,u,m.payload,m.meta):s(m,y,u)}finally{v&&x.signal.removeEventListener("abort",v)}return n&&!n.dispatchConditionRejection&&s.match(b)&&b.meta.condition||d(b),b}();return Object.assign(h,{abort:g,requestId:y,arg:u,unwrap(){return h.then(Ub)}})}}return Object.assign(l,{pending:o,rejected:s,fulfilled:i,settled:Mb(s,i),typePrefix:t})}return e.withTypes=()=>e,e})();function Ub(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Bb(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var $b=Symbol.for("rtk-slice-createasyncthunk");function Wb(e,t){return`${e}/${t}`}function Vb({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[$b];return function(i){const{name:o,reducerPath:s=o}=i;if(!o)throw new Error(er(11));const l=(typeof i.reducers=="function"?i.reducers(Kb()):i.reducers)||{},u=Object.keys(l),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},d={addCase(S,N){const T=typeof S=="string"?S:S.type;if(!T)throw new Error(er(12));if(T in c.sliceCaseReducersByType)throw new Error(er(13));return c.sliceCaseReducersByType[T]=N,d},addMatcher(S,N){return c.sliceMatchers.push({matcher:S,reducer:N}),d},exposeAction(S,N){return c.actionCreators[S]=N,d},exposeCaseReducer(S,N){return c.sliceCaseReducersByName[S]=N,d}};u.forEach(S=>{const N=l[S],T={reducerName:S,type:Wb(o,S),createNotation:typeof i.reducers=="function"};Xb(N)?Gb(T,N,d,t):Qb(T,N,d)});function f(){const[S={},N=[],T=void 0]=typeof i.extraReducers=="function"?yg(i.extraReducers):[i.extraReducers],m={...S,...c.sliceCaseReducersByType};return Lb(i.initialState,C=>{for(let _ in m)C.addCase(_,m[_]);for(let _ of c.sliceMatchers)C.addMatcher(_.matcher,_.reducer);for(let _ of N)C.addMatcher(_.matcher,_.reducer);T&&C.addDefaultCase(T)})}const p=S=>S,y=new Map,x=new WeakMap;let v;function j(S,N){return v||(v=f()),v(S,N)}function g(){return v||(v=f()),v.getInitialState()}function h(S,N=!1){function T(C){let _=C[S];return typeof _>"u"&&N&&(_=Uo(x,T,g)),_}function m(C=p){const _=Uo(y,N,()=>new WeakMap);return Uo(_,C,()=>{const z={};for(const[W,V]of Object.entries(i.selectors??{}))z[W]=Hb(V,C,()=>Uo(x,C,g),N);return z})}return{reducerPath:S,getSelectors:m,get selectors(){return m(T)},selectSlice:T}}const b={name:o,reducer:j,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:g,...h(s),injectInto(S,{reducerPath:N,...T}={}){const m=N??s;return S.inject({reducerPath:m,reducer:j},T),{...b,...h(m,!0)}}};return b}}function Hb(e,t,r,n){function i(o,...s){let l=t(o);return typeof l>"u"&&n&&(l=r()),e(l,...s)}return i.unwrapped=e,i}var qb=Vb();function Kb(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function Qb({type:e,reducerName:t,createNotation:r},n,i){let o,s;if("reducer"in n){if(r&&!Yb(n))throw new Error(er(17));o=n.reducer,s=n.prepare}else o=n;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,s?zi(e,s):zi(e))}function Xb(e){return e._reducerDefinitionType==="asyncThunk"}function Yb(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Gb({type:e,reducerName:t},r,n,i){if(!i)throw new Error(er(18));const{payloadCreator:o,fulfilled:s,pending:l,rejected:u,settled:c,options:d}=r,f=i(e,o,d);n.exposeAction(t,f),s&&n.addCase(f.fulfilled,s),l&&n.addCase(f.pending,l),u&&n.addCase(f.rejected,u),c&&n.addMatcher(f.settled,c),n.exposeCaseReducer(t,{fulfilled:s||Bo,pending:l||Bo,rejected:u||Bo,settled:c||Bo})}function Bo(){}function er(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}function xg(e,t){return function(){return e.apply(t,arguments)}}const{toString:Jb}=Object.prototype,{getPrototypeOf:js}=Object,{iterator:Ss,toStringTag:bg}=Symbol,ks=(e=>t=>{const r=Jb.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),At=e=>(e=e.toLowerCase(),t=>ks(t)===e),Ns=e=>t=>typeof t===e,{isArray:Jn}=Array,qn=Ns("undefined");function uo(e){return e!==null&&!qn(e)&&e.constructor!==null&&!qn(e.constructor)&&st(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const wg=At("ArrayBuffer");function Zb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&wg(e.buffer),t}const ew=Ns("string"),st=Ns("function"),jg=Ns("number"),co=e=>e!==null&&typeof e=="object",tw=e=>e===!0||e===!1,aa=e=>{if(ks(e)!=="object")return!1;const t=js(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(bg in e)&&!(Ss in e)},rw=e=>{if(!co(e)||uo(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},nw=At("Date"),iw=At("File"),ow=e=>!!(e&&typeof e.uri<"u"),aw=e=>e&&typeof e.getParts<"u",sw=At("Blob"),lw=At("FileList"),uw=e=>co(e)&&st(e.pipe);function cw(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Xf=cw(),Yf=typeof Xf.FormData<"u"?Xf.FormData:void 0,dw=e=>{if(!e)return!1;if(Yf&&e instanceof Yf)return!0;const t=js(e);if(!t||t===Object.prototype||!st(e.append))return!1;const r=ks(e);return r==="formdata"||r==="object"&&st(e.toString)&&e.toString()==="[object FormData]"},fw=At("URLSearchParams"),[pw,mw,hw,gw]=["ReadableStream","Request","Response","Headers"].map(At),vw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function fo(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,i;if(typeof e!="object"&&(e=[e]),Jn(e))for(n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else{if(uo(e))return;const o=r?Object.getOwnPropertyNames(e):Object.keys(e),s=o.length;let l;for(n=0;n<s;n++)l=o[n],t.call(null,e[l],l,e)}}function Sg(e,t){if(uo(e))return null;t=t.toLowerCase();const r=Object.keys(e);let n=r.length,i;for(;n-- >0;)if(i=r[n],t===i.toLowerCase())return i;return null}const Xr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kg=e=>!qn(e)&&e!==Xr;function Cu(){const{caseless:e,skipUndefined:t}=kg(this)&&this||{},r={},n=(i,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const s=e&&Sg(r,o)||o;aa(r[s])&&aa(i)?r[s]=Cu(r[s],i):aa(i)?r[s]=Cu({},i):Jn(i)?r[s]=i.slice():(!t||!qn(i))&&(r[s]=i)};for(let i=0,o=arguments.length;i<o;i++)arguments[i]&&fo(arguments[i],n);return r}const yw=(e,t,r,{allOwnKeys:n}={})=>(fo(t,(i,o)=>{r&&st(i)?Object.defineProperty(e,o,{value:xg(i,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,o,{value:i,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:n}),e),xw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),bw=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},ww=(e,t,r,n)=>{let i,o,s;const l={};if(t=t||{},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),o=i.length;o-- >0;)s=i[o],(!n||n(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=r!==!1&&js(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},jw=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},Sw=e=>{if(!e)return null;if(Jn(e))return e;let t=e.length;if(!jg(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},kw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&js(Uint8Array)),Nw=(e,t)=>{const n=(e&&e[Ss]).call(e);let i;for(;(i=n.next())&&!i.done;){const o=i.value;t.call(e,o[0],o[1])}},Ew=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},Cw=At("HTMLFormElement"),_w=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,i){return n.toUpperCase()+i}),Gf=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Pw=At("RegExp"),Ng=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};fo(r,(i,o)=>{let s;(s=t(i,o,e))!==!1&&(n[o]=s||i)}),Object.defineProperties(e,n)},Rw=e=>{Ng(e,(t,r)=>{if(st(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(st(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Tw=(e,t)=>{const r={},n=i=>{i.forEach(o=>{r[o]=!0})};return Jn(e)?n(e):n(String(e).split(t)),r},zw=()=>{},Lw=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function Dw(e){return!!(e&&st(e.append)&&e[bg]==="FormData"&&e[Ss])}const Mw=e=>{const t=new Array(10),r=(n,i)=>{if(co(n)){if(t.indexOf(n)>=0)return;if(uo(n))return n;if(!("toJSON"in n)){t[i]=n;const o=Jn(n)?[]:{};return fo(n,(s,l)=>{const u=r(s,i+1);!qn(u)&&(o[l]=u)}),t[i]=void 0,o}}return n};return r(e,0)},Aw=At("AsyncFunction"),Ow=e=>e&&(co(e)||st(e))&&st(e.then)&&st(e.catch),Eg=((e,t)=>e?setImmediate:t?((r,n)=>(Xr.addEventListener("message",({source:i,data:o})=>{i===Xr&&o===r&&n.length&&n.shift()()},!1),i=>{n.push(i),Xr.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",st(Xr.postMessage)),Fw=typeof queueMicrotask<"u"?queueMicrotask.bind(Xr):typeof process<"u"&&process.nextTick||Eg,Iw=e=>e!=null&&st(e[Ss]),P={isArray:Jn,isArrayBuffer:wg,isBuffer:uo,isFormData:dw,isArrayBufferView:Zb,isString:ew,isNumber:jg,isBoolean:tw,isObject:co,isPlainObject:aa,isEmptyObject:rw,isReadableStream:pw,isRequest:mw,isResponse:hw,isHeaders:gw,isUndefined:qn,isDate:nw,isFile:iw,isReactNativeBlob:ow,isReactNative:aw,isBlob:sw,isRegExp:Pw,isFunction:st,isStream:uw,isURLSearchParams:fw,isTypedArray:kw,isFileList:lw,forEach:fo,merge:Cu,extend:yw,trim:vw,stripBOM:xw,inherits:bw,toFlatObject:ww,kindOf:ks,kindOfTest:At,endsWith:jw,toArray:Sw,forEachEntry:Nw,matchAll:Ew,isHTMLForm:Cw,hasOwnProperty:Gf,hasOwnProp:Gf,reduceDescriptors:Ng,freezeMethods:Rw,toObjectSet:Tw,toCamelCase:_w,noop:zw,toFiniteNumber:Lw,findKey:Sg,global:Xr,isContextDefined:kg,isSpecCompliantForm:Dw,toJSONObject:Mw,isAsyncFn:Aw,isThenable:Ow,setImmediate:Eg,asap:Fw,isIterable:Iw};let Q=class Cg extends Error{static from(t,r,n,i,o,s){const l=new Cg(t.message,r||t.code,n,i,o);return l.cause=t,l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),s&&Object.assign(l,s),l}constructor(t,r,n,i,o){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),n&&(this.config=n),i&&(this.request=i),o&&(this.response=o,this.status=o.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.status}}};Q.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Q.ERR_BAD_OPTION="ERR_BAD_OPTION";Q.ECONNABORTED="ECONNABORTED";Q.ETIMEDOUT="ETIMEDOUT";Q.ERR_NETWORK="ERR_NETWORK";Q.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Q.ERR_DEPRECATED="ERR_DEPRECATED";Q.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Q.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Q.ERR_CANCELED="ERR_CANCELED";Q.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Q.ERR_INVALID_URL="ERR_INVALID_URL";Q.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Uw=null;function _u(e){return P.isPlainObject(e)||P.isArray(e)}function _g(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function gl(e,t,r){return e?e.concat(t).map(function(i,o){return i=_g(i),!r&&o?"["+i+"]":i}).join(r?".":""):t}function Bw(e){return P.isArray(e)&&!e.some(_u)}const $w=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function Es(e,t,r){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=P.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(j,g){return!P.isUndefined(g[j])});const n=r.metaTokens,i=r.visitor||f,o=r.dots,s=r.indexes,l=r.Blob||typeof Blob<"u"&&Blob,u=r.maxDepth===void 0?100:r.maxDepth,c=l&&P.isSpecCompliantForm(t);if(!P.isFunction(i))throw new TypeError("visitor must be a function");function d(v){if(v===null)return"";if(P.isDate(v))return v.toISOString();if(P.isBoolean(v))return v.toString();if(!c&&P.isBlob(v))throw new Q("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(v)||P.isTypedArray(v)?c&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function f(v,j,g){let h=v;if(P.isReactNative(t)&&P.isReactNativeBlob(v))return t.append(gl(g,j,o),d(v)),!1;if(v&&!g&&typeof v=="object"){if(P.endsWith(j,"{}"))j=n?j:j.slice(0,-2),v=JSON.stringify(v);else if(P.isArray(v)&&Bw(v)||(P.isFileList(v)||P.endsWith(j,"[]"))&&(h=P.toArray(v)))return j=_g(j),h.forEach(function(S,N){!(P.isUndefined(S)||S===null)&&t.append(s===!0?gl([j],N,o):s===null?j:j+"[]",d(S))}),!1}return _u(v)?!0:(t.append(gl(g,j,o),d(v)),!1)}const p=[],y=Object.assign($w,{defaultVisitor:f,convertValue:d,isVisitable:_u});function x(v,j,g=0){if(!P.isUndefined(v)){if(g>u)throw new Q("Object is too deeply nested ("+g+" levels). Max depth: "+u,Q.ERR_FORM_DATA_DEPTH_EXCEEDED);if(p.indexOf(v)!==-1)throw Error("Circular reference detected in "+j.join("."));p.push(v),P.forEach(v,function(b,S){(!(P.isUndefined(b)||b===null)&&i.call(t,b,P.isString(S)?S.trim():S,j,y))===!0&&x(b,j?j.concat(S):[S],g+1)}),p.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Jf(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(n){return t[n]})}function Fc(e,t){this._pairs=[],e&&Es(e,this,t)}const Pg=Fc.prototype;Pg.append=function(t,r){this._pairs.push([t,r])};Pg.toString=function(t){const r=t?function(n){return t.call(this,n,Jf)}:Jf;return this._pairs.map(function(i){return r(i[0])+"="+r(i[1])},"").join("&")};function Ww(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Rg(e,t,r){if(!t)return e;const n=r&&r.encode||Ww,i=P.isFunction(r)?{serialize:r}:r,o=i&&i.serialize;let s;if(o?s=o(t,i):s=P.isURLSearchParams(t)?t.toString():new Fc(t,i).toString(n),s){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+s}return e}class Zf{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Ic={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},Vw=typeof URLSearchParams<"u"?URLSearchParams:Fc,Hw=typeof FormData<"u"?FormData:null,qw=typeof Blob<"u"?Blob:null,Kw={isBrowser:!0,classes:{URLSearchParams:Vw,FormData:Hw,Blob:qw},protocols:["http","https","file","blob","url","data"]},Uc=typeof window<"u"&&typeof document<"u",Pu=typeof navigator=="object"&&navigator||void 0,Qw=Uc&&(!Pu||["ReactNative","NativeScript","NS"].indexOf(Pu.product)<0),Xw=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",Yw=Uc&&window.location.href||"http://localhost",Gw=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Uc,hasStandardBrowserEnv:Qw,hasStandardBrowserWebWorkerEnv:Xw,navigator:Pu,origin:Yw},Symbol.toStringTag,{value:"Module"})),Ke={...Gw,...Kw};function Jw(e,t){return Es(e,new Ke.classes.URLSearchParams,{visitor:function(r,n,i,o){return Ke.isNode&&P.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function Zw(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function ej(e){const t={},r=Object.keys(e);let n;const i=r.length;let o;for(n=0;n<i;n++)o=r[n],t[o]=e[o];return t}function Tg(e){function t(r,n,i,o){let s=r[o++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),u=o>=r.length;return s=!s&&P.isArray(i)?i.length:s,u?(P.hasOwnProp(i,s)?i[s]=P.isArray(i[s])?i[s].concat(n):[i[s],n]:i[s]=n,!l):((!i[s]||!P.isObject(i[s]))&&(i[s]=[]),t(r,n,i[s],o)&&P.isArray(i[s])&&(i[s]=ej(i[s])),!l)}if(P.isFormData(e)&&P.isFunction(e.entries)){const r={};return P.forEachEntry(e,(n,i)=>{t(Zw(n),i,r,0)}),r}return null}const vn=(e,t)=>e!=null&&P.hasOwnProp(e,t)?e[t]:void 0;function tj(e,t,r){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const po={transitional:Ic,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",i=n.indexOf("application/json")>-1,o=P.isObject(t);if(o&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return i?JSON.stringify(Tg(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t)||P.isReadableStream(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){const u=vn(this,"formSerializer");if(n.indexOf("application/x-www-form-urlencoded")>-1)return Jw(t,u).toString();if((l=P.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=vn(this,"env"),d=c&&c.FormData;return Es(l?{"files[]":t}:t,d&&new d,u)}}return o||i?(r.setContentType("application/json",!1),tj(t)):t}],transformResponse:[function(t){const r=vn(this,"transitional")||po.transitional,n=r&&r.forcedJSONParsing,i=vn(this,"responseType"),o=i==="json";if(P.isResponse(t)||P.isReadableStream(t))return t;if(t&&P.isString(t)&&(n&&!i||o)){const l=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t,vn(this,"parseReviver"))}catch(u){if(l)throw u.name==="SyntaxError"?Q.from(u,Q.ERR_BAD_RESPONSE,this,null,vn(this,"response")):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ke.classes.FormData,Blob:Ke.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{po.headers[e]={}});const rj=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),nj=e=>{const t={};let r,n,i;return e&&e.split(`
`).forEach(function(s){i=s.indexOf(":"),r=s.substring(0,i).trim().toLowerCase(),n=s.substring(i+1).trim(),!(!r||t[r]&&rj[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},ep=Symbol("internals"),ij=/[^\x09\x20-\x7E\x80-\xFF]/g;function oj(e){let t=0,r=e.length;for(;t<r;){const n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;r>t;){const n=e.charCodeAt(r-1);if(n!==9&&n!==32)break;r-=1}return t===0&&r===e.length?e:e.slice(t,r)}function hi(e){return e&&String(e).trim().toLowerCase()}function aj(e){return oj(e.replace(ij,""))}function sa(e){return e===!1||e==null?e:P.isArray(e)?e.map(sa):aj(String(e))}function sj(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const lj=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function vl(e,t,r,n,i){if(P.isFunction(n))return n.call(this,t,r);if(i&&(t=r),!!P.isString(t)){if(P.isString(n))return t.indexOf(n)!==-1;if(P.isRegExp(n))return n.test(t)}}function uj(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function cj(e,t){const r=P.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(i,o,s){return this[n].call(this,t,i,o,s)},configurable:!0})})}let lt=class{constructor(t){t&&this.set(t)}set(t,r,n){const i=this;function o(l,u,c){const d=hi(u);if(!d)throw new Error("header name must be a non-empty string");const f=P.findKey(i,d);(!f||i[f]===void 0||c===!0||c===void 0&&i[f]!==!1)&&(i[f||u]=sa(l))}const s=(l,u)=>P.forEach(l,(c,d)=>o(c,d,u));if(P.isPlainObject(t)||t instanceof this.constructor)s(t,r);else if(P.isString(t)&&(t=t.trim())&&!lj(t))s(nj(t),r);else if(P.isObject(t)&&P.isIterable(t)){let l={},u,c;for(const d of t){if(!P.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[c=d[0]]=(u=l[c])?P.isArray(u)?[...u,d[1]]:[u,d[1]]:d[1]}s(l,r)}else t!=null&&o(r,t,n);return this}get(t,r){if(t=hi(t),t){const n=P.findKey(this,t);if(n){const i=this[n];if(!r)return i;if(r===!0)return sj(i);if(P.isFunction(r))return r.call(this,i,n);if(P.isRegExp(r))return r.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=hi(t),t){const n=P.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||vl(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let i=!1;function o(s){if(s=hi(s),s){const l=P.findKey(n,s);l&&(!r||vl(n,n[l],l,r))&&(delete n[l],i=!0)}}return P.isArray(t)?t.forEach(o):o(t),i}clear(t){const r=Object.keys(this);let n=r.length,i=!1;for(;n--;){const o=r[n];(!t||vl(this,this[o],o,t,!0))&&(delete this[o],i=!0)}return i}normalize(t){const r=this,n={};return P.forEach(this,(i,o)=>{const s=P.findKey(n,o);if(s){r[s]=sa(i),delete r[o];return}const l=t?uj(o):String(o).trim();l!==o&&delete r[o],r[l]=sa(i),n[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return P.forEach(this,(n,i)=>{n!=null&&n!==!1&&(r[i]=t&&P.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(i=>n.set(i)),n}static accessor(t){const n=(this[ep]=this[ep]={accessors:{}}).accessors,i=this.prototype;function o(s){const l=hi(s);n[l]||(cj(i,s),n[l]=!0)}return P.isArray(t)?t.forEach(o):o(t),this}};lt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(lt.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});P.freezeMethods(lt);function yl(e,t){const r=this||po,n=t||r,i=lt.from(n.headers);let o=n.data;return P.forEach(e,function(l){o=l.call(r,o,i.normalize(),t?t.status:void 0)}),i.normalize(),o}function zg(e){return!!(e&&e.__CANCEL__)}let mo=class extends Q{constructor(t,r,n){super(t??"canceled",Q.ERR_CANCELED,r,n),this.name="CanceledError",this.__CANCEL__=!0}};function Lg(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new Q("Request failed with status code "+r.status,[Q.ERR_BAD_REQUEST,Q.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function dj(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function fj(e,t){e=e||10;const r=new Array(e),n=new Array(e);let i=0,o=0,s;return t=t!==void 0?t:1e3,function(u){const c=Date.now(),d=n[o];s||(s=c),r[i]=u,n[i]=c;let f=o,p=0;for(;f!==i;)p+=r[f++],f=f%e;if(i=(i+1)%e,i===o&&(o=(o+1)%e),c-s<t)return;const y=d&&c-d;return y?Math.round(p*1e3/y):void 0}}function pj(e,t){let r=0,n=1e3/t,i,o;const s=(c,d=Date.now())=>{r=d,i=null,o&&(clearTimeout(o),o=null),e(...c)};return[(...c)=>{const d=Date.now(),f=d-r;f>=n?s(c,d):(i=c,o||(o=setTimeout(()=>{o=null,s(i)},n-f)))},()=>i&&s(i)]}const Ka=(e,t,r=3)=>{let n=0;const i=fj(50,250);return pj(o=>{const s=o.loaded,l=o.lengthComputable?o.total:void 0,u=l!=null?Math.min(s,l):s,c=Math.max(0,u-n),d=i(c);n=Math.max(n,u);const f={loaded:u,total:l,progress:l?u/l:void 0,bytes:c,rate:d||void 0,estimated:d&&l?(l-u)/d:void 0,event:o,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(f)},r)},tp=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},rp=e=>(...t)=>P.asap(()=>e(...t)),mj=Ke.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Ke.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Ke.origin),Ke.navigator&&/(msie|trident)/i.test(Ke.navigator.userAgent)):()=>!0,hj=Ke.hasStandardBrowserEnv?{write(e,t,r,n,i,o,s){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];P.isNumber(r)&&l.push(`expires=${new Date(r).toUTCString()}`),P.isString(n)&&l.push(`path=${n}`),P.isString(i)&&l.push(`domain=${i}`),o===!0&&l.push("secure"),P.isString(s)&&l.push(`SameSite=${s}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function gj(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function vj(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Dg(e,t,r){let n=!gj(t);return e&&(n||r===!1)?vj(e,t):t}const np=e=>e instanceof lt?{...e}:e;function ln(e,t){t=t||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function n(c,d,f,p){return P.isPlainObject(c)&&P.isPlainObject(d)?P.merge.call({caseless:p},c,d):P.isPlainObject(d)?P.merge({},d):P.isArray(d)?d.slice():d}function i(c,d,f,p){if(P.isUndefined(d)){if(!P.isUndefined(c))return n(void 0,c,f,p)}else return n(c,d,f,p)}function o(c,d){if(!P.isUndefined(d))return n(void 0,d)}function s(c,d){if(P.isUndefined(d)){if(!P.isUndefined(c))return n(void 0,c)}else return n(void 0,d)}function l(c,d,f){if(P.hasOwnProp(t,f))return n(c,d);if(P.hasOwnProp(e,f))return n(void 0,c)}const u={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,allowedSocketPaths:s,responseEncoding:s,validateStatus:l,headers:(c,d,f)=>i(np(c),np(d),f,!0)};return P.forEach(Object.keys({...e,...t}),function(d){if(d==="__proto__"||d==="constructor"||d==="prototype")return;const f=P.hasOwnProp(u,d)?u[d]:i,p=P.hasOwnProp(e,d)?e[d]:void 0,y=P.hasOwnProp(t,d)?t[d]:void 0,x=f(p,y,d);P.isUndefined(x)&&f!==l||(r[d]=x)}),r}const Mg=e=>{const t=ln({},e),r=p=>P.hasOwnProp(t,p)?t[p]:void 0,n=r("data");let i=r("withXSRFToken");const o=r("xsrfHeaderName"),s=r("xsrfCookieName");let l=r("headers");const u=r("auth"),c=r("baseURL"),d=r("allowAbsoluteUrls"),f=r("url");if(t.headers=l=lt.from(l),t.url=Rg(Dg(c,f,d),e.params,e.paramsSerializer),u&&l.set("Authorization","Basic "+btoa((u.username||"")+":"+(u.password?unescape(encodeURIComponent(u.password)):""))),P.isFormData(n)){if(Ke.hasStandardBrowserEnv||Ke.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(P.isFunction(n.getHeaders)){const p=n.getHeaders(),y=["content-type","content-length"];Object.entries(p).forEach(([x,v])=>{y.includes(x.toLowerCase())&&l.set(x,v)})}}if(Ke.hasStandardBrowserEnv&&(P.isFunction(i)&&(i=i(t)),i===!0||i==null&&mj(t.url))){const y=o&&s&&hj.read(s);y&&l.set(o,y)}return t},yj=typeof XMLHttpRequest<"u",xj=yj&&function(e){return new Promise(function(r,n){const i=Mg(e);let o=i.data;const s=lt.from(i.headers).normalize();let{responseType:l,onUploadProgress:u,onDownloadProgress:c}=i,d,f,p,y,x;function v(){y&&y(),x&&x(),i.cancelToken&&i.cancelToken.unsubscribe(d),i.signal&&i.signal.removeEventListener("abort",d)}let j=new XMLHttpRequest;j.open(i.method.toUpperCase(),i.url,!0),j.timeout=i.timeout;function g(){if(!j)return;const b=lt.from("getAllResponseHeaders"in j&&j.getAllResponseHeaders()),N={data:!l||l==="text"||l==="json"?j.responseText:j.response,status:j.status,statusText:j.statusText,headers:b,config:e,request:j};Lg(function(m){r(m),v()},function(m){n(m),v()},N),j=null}"onloadend"in j?j.onloadend=g:j.onreadystatechange=function(){!j||j.readyState!==4||j.status===0&&!(j.responseURL&&j.responseURL.indexOf("file:")===0)||setTimeout(g)},j.onabort=function(){j&&(n(new Q("Request aborted",Q.ECONNABORTED,e,j)),j=null)},j.onerror=function(S){const N=S&&S.message?S.message:"Network Error",T=new Q(N,Q.ERR_NETWORK,e,j);T.event=S||null,n(T),j=null},j.ontimeout=function(){let S=i.timeout?"timeout of "+i.timeout+"ms exceeded":"timeout exceeded";const N=i.transitional||Ic;i.timeoutErrorMessage&&(S=i.timeoutErrorMessage),n(new Q(S,N.clarifyTimeoutError?Q.ETIMEDOUT:Q.ECONNABORTED,e,j)),j=null},o===void 0&&s.setContentType(null),"setRequestHeader"in j&&P.forEach(s.toJSON(),function(S,N){j.setRequestHeader(N,S)}),P.isUndefined(i.withCredentials)||(j.withCredentials=!!i.withCredentials),l&&l!=="json"&&(j.responseType=i.responseType),c&&([p,x]=Ka(c,!0),j.addEventListener("progress",p)),u&&j.upload&&([f,y]=Ka(u),j.upload.addEventListener("progress",f),j.upload.addEventListener("loadend",y)),(i.cancelToken||i.signal)&&(d=b=>{j&&(n(!b||b.type?new mo(null,e,j):b),j.abort(),j=null)},i.cancelToken&&i.cancelToken.subscribe(d),i.signal&&(i.signal.aborted?d():i.signal.addEventListener("abort",d)));const h=dj(i.url);if(h&&Ke.protocols.indexOf(h)===-1){n(new Q("Unsupported protocol "+h+":",Q.ERR_BAD_REQUEST,e));return}j.send(o||null)})},bj=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,i;const o=function(c){if(!i){i=!0,l();const d=c instanceof Error?c:this.reason;n.abort(d instanceof Q?d:new mo(d instanceof Error?d.message:d))}};let s=t&&setTimeout(()=>{s=null,o(new Q(`timeout of ${t}ms exceeded`,Q.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(o):c.removeEventListener("abort",o)}),e=null)};e.forEach(c=>c.addEventListener("abort",o));const{signal:u}=n;return u.unsubscribe=()=>P.asap(l),u}},wj=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,i;for(;n<r;)i=n+t,yield e.slice(n,i),n=i},jj=async function*(e,t){for await(const r of Sj(e))yield*wj(r,t)},Sj=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},ip=(e,t,r,n)=>{const i=jj(e,t);let o=0,s,l=u=>{s||(s=!0,n&&n(u))};return new ReadableStream({async pull(u){try{const{done:c,value:d}=await i.next();if(c){l(),u.close();return}let f=d.byteLength;if(r){let p=o+=f;r(p)}u.enqueue(new Uint8Array(d))}catch(c){throw l(c),c}},cancel(u){return l(u),i.return()}},{highWaterMark:2})},op=64*1024,{isFunction:$o}=P,kj=(({Request:e,Response:t})=>({Request:e,Response:t}))(P.global),{ReadableStream:ap,TextEncoder:sp}=P.global,lp=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Nj=e=>{e=P.merge.call({skipUndefined:!0},kj,e);const{fetch:t,Request:r,Response:n}=e,i=t?$o(t):typeof fetch=="function",o=$o(r),s=$o(n);if(!i)return!1;const l=i&&$o(ap),u=i&&(typeof sp=="function"?(x=>v=>x.encode(v))(new sp):async x=>new Uint8Array(await new r(x).arrayBuffer())),c=o&&l&&lp(()=>{let x=!1;const v=new r(Ke.origin,{body:new ap,method:"POST",get duplex(){return x=!0,"half"}}),j=v.headers.has("Content-Type");return v.body!=null&&v.body.cancel(),x&&!j}),d=s&&l&&lp(()=>P.isReadableStream(new n("").body)),f={stream:d&&(x=>x.body)};i&&["text","arrayBuffer","blob","formData","stream"].forEach(x=>{!f[x]&&(f[x]=(v,j)=>{let g=v&&v[x];if(g)return g.call(v);throw new Q(`Response type '${x}' is not supported`,Q.ERR_NOT_SUPPORT,j)})});const p=async x=>{if(x==null)return 0;if(P.isBlob(x))return x.size;if(P.isSpecCompliantForm(x))return(await new r(Ke.origin,{method:"POST",body:x}).arrayBuffer()).byteLength;if(P.isArrayBufferView(x)||P.isArrayBuffer(x))return x.byteLength;if(P.isURLSearchParams(x)&&(x=x+""),P.isString(x))return(await u(x)).byteLength},y=async(x,v)=>{const j=P.toFiniteNumber(x.getContentLength());return j??p(v)};return async x=>{let{url:v,method:j,data:g,signal:h,cancelToken:b,timeout:S,onDownloadProgress:N,onUploadProgress:T,responseType:m,headers:C,withCredentials:_="same-origin",fetchOptions:z}=Mg(x),W=t||fetch;m=m?(m+"").toLowerCase():"text";let V=bj([h,b&&b.toAbortSignal()],S),J=null;const ne=V&&V.unsubscribe&&(()=>{V.unsubscribe()});let me;try{if(T&&c&&j!=="get"&&j!=="head"&&(me=await y(C,g))!==0){let Y=new r(v,{method:"POST",body:g,duplex:"half"}),oe;if(P.isFormData(g)&&(oe=Y.headers.get("content-type"))&&C.setContentType(oe),Y.body){const[De,M]=tp(me,Ka(rp(T)));g=ip(Y.body,op,De,M)}}P.isString(_)||(_=_?"include":"omit");const O=o&&"credentials"in r.prototype;if(P.isFormData(g)){const Y=C.getContentType();Y&&/^multipart\/form-data/i.test(Y)&&!/boundary=/i.test(Y)&&C.delete("content-type")}const he={...z,signal:V,method:j.toUpperCase(),headers:C.normalize().toJSON(),body:g,duplex:"half",credentials:O?_:void 0};J=o&&new r(v,he);let L=await(o?W(J,z):W(v,he));const H=d&&(m==="stream"||m==="response");if(d&&(N||H&&ne)){const Y={};["status","statusText","headers"].forEach(ee=>{Y[ee]=L[ee]});const oe=P.toFiniteNumber(L.headers.get("content-length")),[De,M]=N&&tp(oe,Ka(rp(N),!0))||[];L=new n(ip(L.body,op,De,()=>{M&&M(),ne&&ne()}),Y)}m=m||"text";let X=await f[P.findKey(f,m)||"text"](L,x);return!H&&ne&&ne(),await new Promise((Y,oe)=>{Lg(Y,oe,{data:X,headers:lt.from(L.headers),status:L.status,statusText:L.statusText,config:x,request:J})})}catch(O){throw ne&&ne(),O&&O.name==="TypeError"&&/Load failed|fetch/i.test(O.message)?Object.assign(new Q("Network Error",Q.ERR_NETWORK,x,J,O&&O.response),{cause:O.cause||O}):Q.from(O,O&&O.code,x,J,O&&O.response)}}},Ej=new Map,Ag=e=>{let t=e&&e.env||{};const{fetch:r,Request:n,Response:i}=t,o=[n,i,r];let s=o.length,l=s,u,c,d=Ej;for(;l--;)u=o[l],c=d.get(u),c===void 0&&d.set(u,c=l?new Map:Nj(t)),d=c;return c};Ag();const Bc={http:Uw,xhr:xj,fetch:{get:Ag}};P.forEach(Bc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const up=e=>`- ${e}`,Cj=e=>P.isFunction(e)||e===null||e===!1;function _j(e,t){e=P.isArray(e)?e:[e];const{length:r}=e;let n,i;const o={};for(let s=0;s<r;s++){n=e[s];let l;if(i=n,!Cj(n)&&(i=Bc[(l=String(n)).toLowerCase()],i===void 0))throw new Q(`Unknown adapter '${l}'`);if(i&&(P.isFunction(i)||(i=i.get(t))))break;o[l||"#"+s]=i}if(!i){const s=Object.entries(o).map(([u,c])=>`adapter ${u} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=r?s.length>1?`since :
`+s.map(up).join(`
`):" "+up(s[0]):"as no adapter specified";throw new Q("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return i}const Og={getAdapter:_j,adapters:Bc};function xl(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new mo(null,e)}function cp(e){return xl(e),e.headers=lt.from(e.headers),e.data=yl.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Og.getAdapter(e.adapter||po.adapter,e)(e).then(function(n){return xl(e),n.data=yl.call(e,e.transformResponse,n),n.headers=lt.from(n.headers),n},function(n){return zg(n)||(xl(e),n&&n.response&&(n.response.data=yl.call(e,e.transformResponse,n.response),n.response.headers=lt.from(n.response.headers))),Promise.reject(n)})}const Fg="1.15.2",Cs={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Cs[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const dp={};Cs.transitional=function(t,r,n){function i(o,s){return"[Axios v"+Fg+"] Transitional option '"+o+"'"+s+(n?". "+n:"")}return(o,s,l)=>{if(t===!1)throw new Q(i(s," has been removed"+(r?" in "+r:"")),Q.ERR_DEPRECATED);return r&&!dp[s]&&(dp[s]=!0,console.warn(i(s," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,s,l):!0}};Cs.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function Pj(e,t,r){if(typeof e!="object")throw new Q("options must be an object",Q.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let i=n.length;for(;i-- >0;){const o=n[i],s=Object.prototype.hasOwnProperty.call(t,o)?t[o]:void 0;if(s){const l=e[o],u=l===void 0||s(l,o,e);if(u!==!0)throw new Q("option "+o+" must be "+u,Q.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new Q("Unknown option "+o,Q.ERR_BAD_OPTION)}}const la={assertOptions:Pj,validators:Cs},xt=la.validators;let Jr=class{constructor(t){this.defaults=t||{},this.interceptors={request:new Zf,response:new Zf}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let i={};Error.captureStackTrace?Error.captureStackTrace(i):i=new Error;const o=(()=>{if(!i.stack)return"";const s=i.stack.indexOf(`
`);return s===-1?"":i.stack.slice(s+1)})();try{if(!n.stack)n.stack=o;else if(o){const s=o.indexOf(`
`),l=s===-1?-1:o.indexOf(`
`,s+1),u=l===-1?"":o.slice(l+1);String(n.stack).endsWith(u)||(n.stack+=`
`+o)}}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=ln(this.defaults,r);const{transitional:n,paramsSerializer:i,headers:o}=r;n!==void 0&&la.assertOptions(n,{silentJSONParsing:xt.transitional(xt.boolean),forcedJSONParsing:xt.transitional(xt.boolean),clarifyTimeoutError:xt.transitional(xt.boolean),legacyInterceptorReqResOrdering:xt.transitional(xt.boolean)},!1),i!=null&&(P.isFunction(i)?r.paramsSerializer={serialize:i}:la.assertOptions(i,{encode:xt.function,serialize:xt.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),la.assertOptions(r,{baseUrl:xt.spelling("baseURL"),withXsrfToken:xt.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let s=o&&P.merge(o.common,o[r.method]);o&&P.forEach(["delete","get","head","post","put","patch","common"],x=>{delete o[x]}),r.headers=lt.concat(s,o);const l=[];let u=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(r)===!1)return;u=u&&v.synchronous;const j=r.transitional||Ic;j&&j.legacyInterceptorReqResOrdering?l.unshift(v.fulfilled,v.rejected):l.push(v.fulfilled,v.rejected)});const c=[];this.interceptors.response.forEach(function(v){c.push(v.fulfilled,v.rejected)});let d,f=0,p;if(!u){const x=[cp.bind(this),void 0];for(x.unshift(...l),x.push(...c),p=x.length,d=Promise.resolve(r);f<p;)d=d.then(x[f++],x[f++]);return d}p=l.length;let y=r;for(;f<p;){const x=l[f++],v=l[f++];try{y=x(y)}catch(j){v.call(this,j);break}}try{d=cp.call(this,y)}catch(x){return Promise.reject(x)}for(f=0,p=c.length;f<p;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=ln(this.defaults,t);const r=Dg(t.baseURL,t.url,t.allowAbsoluteUrls);return Rg(r,t.params,t.paramsSerializer)}};P.forEach(["delete","get","head","options"],function(t){Jr.prototype[t]=function(r,n){return this.request(ln(n||{},{method:t,url:r,data:(n||{}).data}))}});P.forEach(["post","put","patch"],function(t){function r(n){return function(o,s,l){return this.request(ln(l||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}Jr.prototype[t]=r(),Jr.prototype[t+"Form"]=r(!0)});let Rj=class Ig{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(i=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](i);n._listeners=null}),this.promise.then=i=>{let o;const s=new Promise(l=>{n.subscribe(l),o=l}).then(i);return s.cancel=function(){n.unsubscribe(o)},s},t(function(o,s,l){n.reason||(n.reason=new mo(o,s,l),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Ig(function(i){t=i}),cancel:t}}};function Tj(e){return function(r){return e.apply(null,r)}}function zj(e){return P.isObject(e)&&e.isAxiosError===!0}const Ru={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Ru).forEach(([e,t])=>{Ru[t]=e});function Ug(e){const t=new Jr(e),r=xg(Jr.prototype.request,t);return P.extend(r,Jr.prototype,t,{allOwnKeys:!0}),P.extend(r,t,null,{allOwnKeys:!0}),r.create=function(i){return Ug(ln(e,i))},r}const Re=Ug(po);Re.Axios=Jr;Re.CanceledError=mo;Re.CancelToken=Rj;Re.isCancel=zg;Re.VERSION=Fg;Re.toFormData=Es;Re.AxiosError=Q;Re.Cancel=Re.CanceledError;Re.all=function(t){return Promise.all(t)};Re.spread=Tj;Re.isAxiosError=zj;Re.mergeConfig=ln;Re.AxiosHeaders=lt;Re.formToJSON=e=>Tg(P.isHTMLForm(e)?new FormData(e):e);Re.getAdapter=Og.getAdapter;Re.HttpStatusCode=Ru;Re.default=Re;const{Axios:mS,AxiosError:hS,CanceledError:gS,isCancel:vS,CancelToken:yS,VERSION:xS,all:bS,Cancel:wS,isAxiosError:jS,spread:SS,toFormData:kS,AxiosHeaders:NS,HttpStatusCode:ES,formToJSON:CS,getAdapter:_S,mergeConfig:PS}=Re,pe=Re.create({baseURL:"/api",headers:{"Content-Type":"application/json",Accept:"application/json"},withCredentials:!1});pe.interceptors.request.use(e=>{const t=localStorage.getItem("nexav_token");return t&&(e.headers.Authorization=`Bearer ${t}`),e});pe.interceptors.response.use(e=>e,e=>{var t;return((t=e.response)==null?void 0:t.status)===401&&(localStorage.removeItem("nexav_token"),window.location.pathname.startsWith("/admin")&&window.location.pathname!=="/admin/login"&&(window.location.href="/admin/login")),Promise.reject(e)});const Lj=e=>pe.post("/admin/login",e),Dj=()=>pe.get("/admin/me"),Mj=()=>pe.post("/admin/logout"),ua=Oc("auth/login",async(e,{rejectWithValue:t})=>{var r,n;try{const i=await Lj(e),o=i.data.token;return localStorage.setItem("nexav_token",o),{user:i.data.user,token:o}}catch(i){return t(((n=(r=i.response)==null?void 0:r.data)==null?void 0:n.message)||"Identifiants incorrects. Vérifiez votre e-mail et mot de passe.")}}),ca=Oc("auth/me",async(e,{rejectWithValue:t})=>{try{return(await Dj()).data}catch{return localStorage.removeItem("nexav_token"),t(null)}}),$c=Oc("auth/logout",async()=>{try{await Mj()}catch{}localStorage.removeItem("nexav_token")}),Bg=qb({name:"auth",initialState:{user:null,token:localStorage.getItem("nexav_token")||null,loading:!1,error:null,hydrated:!1},reducers:{clearError:e=>{e.error=null}},extraReducers:e=>{e.addCase(ua.pending,t=>{t.loading=!0,t.error=null}).addCase(ua.fulfilled,(t,r)=>{t.loading=!1,t.user=r.payload.user,t.token=r.payload.token,t.error=null}).addCase(ua.rejected,(t,r)=>{t.loading=!1,t.error=r.payload}).addCase(ca.pending,t=>{t.hydrated=!1}).addCase(ca.fulfilled,(t,r)=>{t.user=r.payload,t.hydrated=!0}).addCase(ca.rejected,t=>{t.user=null,t.token=null,t.hydrated=!0}).addCase($c.fulfilled,t=>{t.user=null,t.token=null})}}),{clearError:Aj}=Bg.actions,Oj=Bg.reducer,Fj=Tb({reducer:{auth:Oj}}),Ij=[{label:"Tous les produits",to:"/produits",dividerAfter:!0,children:[]},{label:"Affichage dynamique",to:"/produits/type/ecrans",children:[{label:"Écrans interactifs",to:"/produits/type/ecrans"},{label:"Totems interactifs",to:"/produits/type/ecrans"},{label:"Écran géant LED",to:"/produits/type/ecrans"},{label:"Mur d’image",to:"/produits/type/ecrans"},{label:"Support moniteurs",to:"/produits/type/ecrans"}]},{label:"Audiovisuel",to:"/produits/type/audiovisuel",children:[]},{label:"Logiciels",to:"/produits/type/logiciels",children:[]},{label:"Tablettes interactives",to:"/produits/type/tablettes",children:[]}],fp=[{label:"Accueil",to:"/"},{label:"Secteurs d'activités",to:"/secteurs"},{label:"Contact",to:"/contact#demande-form"}];function Uj({item:e,onClose:t}){const[r,n]=w.useState(!1),i=w.useRef(null),o=()=>{clearTimeout(i.current),n(!0)},s=()=>{i.current=setTimeout(()=>n(!1),200)};return e.children.length===0?a.jsxs("div",{className:"nb-dd-group",children:[a.jsx(re,{to:e.to,className:"nb-dd-item",onClick:t,children:a.jsx("span",{children:e.label})}),e.dividerAfter&&a.jsx("div",{className:"nb-dd-divider"})]}):a.jsxs("div",{className:"nb-dd-group",onMouseEnter:o,onMouseLeave:s,children:[a.jsxs(re,{to:e.to,className:"nb-dd-item",onClick:t,children:[a.jsx("span",{children:e.label}),a.jsx("span",{className:"nb-dd-arrow",children:"›"})]}),a.jsx("div",{className:`nb-sub-menu${r?" sub-open":""}`,onMouseEnter:o,onMouseLeave:s,children:e.children.map(l=>a.jsx(re,{to:l.to,className:"nb-sub-item",onClick:t,children:l.label},l.label))}),e.dividerAfter&&a.jsx("div",{className:"nb-dd-divider"})]})}function Bj(){const[e,t]=w.useState(!1),[r,n]=w.useState(!1),i=w.useRef(null),{token:o}=ms(p=>p.auth),s=ps(),l=Gn(),u=async()=>{await s($c()),l("/")},c=()=>{n(!1),t(!1)},d=()=>{clearTimeout(i.current),n(!0)},f=()=>{i.current=setTimeout(()=>n(!1),200)};return a.jsxs(a.Fragment,{children:[a.jsxs("nav",{className:"nb-root",children:[a.jsxs(re,{to:"/",className:"nb-brand",children:[a.jsx("div",{className:"nb-brand-icon",children:a.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("rect",{x:"3",y:"5",width:"11",height:"14",rx:"2",stroke:"currentColor",strokeWidth:"2"}),a.jsx("path",{d:"M17 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",stroke:"currentColor",strokeWidth:"2"}),a.jsx("path",{d:"M7 9h3M7 13h3",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}),a.jsxs("div",{className:"nb-brand-text",children:[a.jsx("strong",{children:"NEXAV"}),a.jsx("small",{children:"Digital Solutions"})]})]}),a.jsxs("ul",{className:"nb-links",children:[a.jsxs("li",{className:"nb-sol-wrap",onMouseEnter:d,onMouseLeave:f,children:[a.jsxs("button",{className:`nb-sol-btn${r?" open":""}`,onClick:()=>n(p=>!p),children:["Solutions",a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M2 4L6 8L10 4",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})})]}),r&&a.jsx("div",{className:"nb-dropdown open",onMouseEnter:d,onMouseLeave:f,children:Ij.map(p=>a.jsx(Uj,{item:p,onClose:c},p.label))})]}),fp.map(p=>a.jsx("li",{children:a.jsx(na,{to:p.to,className:({isActive:y})=>`nb-link${y?" active":""}`,children:p.label})},p.label)),o&&a.jsx("li",{children:a.jsx(re,{to:"/admin/dashboard",className:"nb-link",children:"Admin"})})]}),a.jsxs("div",{className:"nb-actions",children:[o?a.jsx("button",{onClick:u,className:"nb-btn-secondary",children:"Déconnexion"}):a.jsx(re,{to:"/contact#demande-form",className:"nb-btn-demo",children:"Demander une démo"}),a.jsxs("button",{className:"nb-hamburger",onClick:()=>t(p=>!p),"aria-label":"Menu",children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]})]}),e&&a.jsx("div",{className:"nb-mobile-overlay",onClick:()=>t(!1),children:a.jsxs("div",{className:"nb-mobile",onClick:p=>p.stopPropagation(),children:[a.jsx(re,{to:"/produits",className:"nb-m-link",onClick:()=>t(!1),children:"Solutions"}),fp.map(p=>a.jsx(re,{to:p.to,className:"nb-m-link",onClick:()=>t(!1),children:p.label},p.label)),o&&a.jsx(re,{to:"/admin/dashboard",className:"nb-m-link",onClick:()=>t(!1),children:"Admin"}),a.jsx("div",{className:"nb-m-divider"}),o?a.jsx("button",{className:"nb-m-demo",onClick:()=>{t(!1),u()},children:"Déconnexion"}):a.jsx(re,{to:"/contact#demande-form",className:"nb-m-demo",onClick:()=>t(!1),children:"Demander une démo"})]})}),a.jsx("style",{children:`
        /* ─── Sub-menu hover bridge fix ──────────────────────────────────────────
           The submenu is positioned 8px to the right of the parent item.
           A transparent ::before pseudo-element covers that gap so the cursor
           never leaves a "hot zone" while travelling from the item to the submenu.
           Visibility is controlled by the .sub-open class (React state) instead of
           pure CSS :hover so the 200ms JS timer governs close timing.
        ─────────────────────────────────────────────────────────────────────── */

        .nb-dd-group {
          position: relative;
        }

        .nb-dd-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nb-dd-arrow {
          color: #9ca3af;
          font-size: 1.1rem;
        }

        /* Sub-menu panel — hidden by default */
        .nb-sub-menu {
          position: absolute;
          top: 0;
          left: calc(100% + 8px);
          min-width: 220px;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.1);
          border-radius: 14px;
          padding: 6px;
          box-shadow: 0 16px 40px rgba(17,17,17,0.1);
          opacity: 0;
          pointer-events: none;
          transform: translateX(-6px);
          transition: opacity 0.18s ease, transform 0.18s ease;
          /* Extend the hit-box leftward to bridge the 8px gap */
          /* This transparent pseudo-element fills the space between parent and submenu */
        }

        /* Transparent bridge: extends the interactive area leftward by 12px
           so the cursor stays "inside" an element while crossing the gap */
        .nb-sub-menu::before {
          content: '';
          position: absolute;
          top: 0;
          left: -12px;       /* covers the 8px gap + 4px safety margin */
          width: 12px;
          height: 100%;
        }

        /* Open state driven by React (.sub-open class) */
        .nb-sub-menu.sub-open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
        }

        .nb-sub-item {
          display: block;
          padding: 9px 12px;
          border-radius: 8px;
          font-size: 0.84rem;
          font-weight: 700;
          color: #374151;
          text-decoration: none;
          white-space: nowrap;
        }

        .nb-sub-item:hover {
          background: #fff2ee;
          color: #E8490F;
        }

        /* ─── Navbar root ─────────────────────────────────────────────────────── */

        .nb-root {
          width: 100%;
          max-width: 100vw;
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          height: var(--nav-h, 64px);
          padding: 0 5%;
          background: #ffffff;
          border-bottom: 1px solid #eeeeee;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        /* ── Brand ── */
        .nb-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nb-brand-icon {
          width: 36px; height: 36px;
          background: #E8490F;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: #fff;
        }
        .nb-brand-text {
          display: flex; flex-direction: column;
          line-height: 1;
          color: #111;
        }
        .nb-brand-text strong {
          font-size: 1.1rem;
          font-weight: 800;
          letter-spacing: -0.04em;
        }
        .nb-brand-text small {
          margin-top: 3px;
          font-size: 0.53rem;
          font-weight: 800;
          letter-spacing: 0.07em;
          color: #E8490F;
          text-transform: uppercase;
        }

        /* ── Desktop nav ── */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          flex: 1;
          justify-content: center;
        }
        .nb-link {
          font-size: 0.875rem;
          font-weight: 700;
          color: #374151;
          text-decoration: none;
          padding: 6px 12px;
          border-radius: 8px;
          transition: color 0.15s, background 0.15s;
          white-space: nowrap;
        }
        .nb-link:hover,
        .nb-link.active {
          color: #E8490F;
          background: #fff2ee;
        }

        /* ── Solutions dropdown ── */
        .nb-sol-wrap {
          position: relative;
        }
        .nb-sol-btn {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.875rem; font-weight: 700;
          color: #374151;
          background: none; border: none;
          padding: 6px 12px; border-radius: 8px;
          cursor: pointer;
          transition: color 0.15s, background 0.15s;
        }
        .nb-sol-btn svg {
          transition: transform 0.2s;
        }
        .nb-sol-btn.open svg {
          transform: rotate(180deg);
        }
        .nb-sol-btn:hover,
        .nb-sol-btn.open {
          color: #E8490F;
          background: #fff2ee;
        }
        .nb-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 230px;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.1);
          border-radius: 16px;
          padding: 6px;
          box-shadow: 0 16px 40px rgba(17,17,17,0.1);
          z-index: 200;
        }
        /* Transparent bridge above the dropdown covering the 12px gap to nb-sol-btn */
        .nb-dropdown::before {
          content: '';
          position: absolute;
          top: -14px;
          left: 0;
          right: 0;
          height: 14px;
        }
        .nb-dd-item {
          display: flex; align-items: center; gap: 10px;
          padding: 8px 10px;
          border-radius: 8px;
          text-decoration: none;
          color: #111827;
          font-size: 0.85rem; font-weight: 700;
          transition: background 0.12s;
        }
        .nb-dd-item:hover {
          background: #fff2ee;
          color: #E8490F;
        }
        .nb-dd-icon {
          width: 28px; height: 28px;
          border-radius: 6px;
          background: #f5f5f5;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          color: #E8490F;
        }
        .nb-dd-divider {
          height: 1px;
          background: #f0f0f0;
          margin: 5px 6px;
        }

        /* ── Actions ── */
        .nb-actions {
          display: flex; align-items: center; gap: 8px;
          flex-shrink: 0;
        }
        .nb-btn-demo {
          background: #E8490F;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 8px 16px;
          font-size: 0.84rem; font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          white-space: nowrap;
          transition: background 0.15s, transform 0.1s;
          display: inline-block;
        }
        .nb-btn-demo:hover { background: #CC3D09; }
        .nb-btn-demo:active { transform: scale(0.98); }
        .nb-btn-secondary {
          background: none;
          color: #374151;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 7px 14px;
          font-size: 0.84rem; font-weight: 700;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s;
        }
        .nb-btn-secondary:hover { border-color: #E8490F; color: #E8490F; }

        /* ── Hamburger ── */
        .nb-hamburger {
          display: none;
          width: 40px; height: 40px;
          border-radius: 10px;
          border: 1px solid #e5e7eb;
          background: #fff;
          align-items: center; justify-content: center;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }
        .nb-hamburger span {
          width: 16px; height: 1.5px;
          background: #111;
          border-radius: 2px;
          display: block;
        }

        /* ── Mobile menu ── */
        .nb-mobile-overlay {
          position: fixed;
          inset: var(--nav-h, 64px) 0 0;
          z-index: 99;
          background: rgba(0,0,0,0.25);
          animation: fadeOverlay 0.18s ease forwards;
        }
        .nb-mobile {
          background: #fff;
          padding: 14px 5% 22px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          box-shadow: 0 18px 40px rgba(0,0,0,0.12);
          animation: slideMenu 0.22s ease forwards;
        }
        .nb-m-link {
          display: block;
          padding: 11px 12px;
          border-radius: 8px;
          font-size: 0.95rem; font-weight: 700;
          color: #111;
          text-decoration: none;
          transition: background 0.12s;
        }
        .nb-m-link:hover { background: #fff2ee; color: #E8490F; }
        .nb-m-divider {
          height: 1px;
          background: #f0f0f0;
          margin: 6px 0;
        }
        .nb-m-demo {
          display: block;
          width: 100%;
          margin-top: 4px;
          background: #E8490F;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 0.9rem; font-weight: 700;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
        }
        .nb-m-link,
        .nb-m-demo,
        .nb-m-divider {
          opacity: 0;
          transform: translateY(8px);
          animation: itemIn 0.22s ease forwards;
        }
        .nb-m-link:nth-child(1) { animation-delay: 0.03s; }
        .nb-m-link:nth-child(2) { animation-delay: 0.06s; }
        .nb-m-link:nth-child(3) { animation-delay: 0.09s; }
        .nb-m-link:nth-child(4) { animation-delay: 0.12s; }
        .nb-m-link:nth-child(5) { animation-delay: 0.15s; }
        .nb-m-divider { animation-delay: 0.16s; }
        .nb-m-demo    { animation-delay: 0.18s; }

        @keyframes fadeOverlay {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideMenu {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes itemIn {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Responsive ── */
        @media (max-width: 1120px) {
          .nb-root { padding: 0 5%; }
        }
        @media (max-width: 820px) {
          .nb-links { display: none; }
          .nb-btn-demo,
          .nb-btn-secondary { display: none; }
          .nb-hamburger { display: flex; }
        }
      `})]})}function $j(){const e=new Date().getFullYear(),t=[{title:"Solutions",links:[{label:"Tous les produits",to:"/produits"},{label:"Audiovisuel",to:"/produits/type/audiovisuel"},{label:"Écrans",to:"/produits/type/ecrans"},{label:"Logiciels",to:"/produits/type/logiciels"}]},{title:"Secteurs",links:[{label:"Éducation",to:"/contact?secteur=Éducation#demande-form"},{label:"Entreprise",to:"/contact?secteur=Entreprise#demande-form"},{label:"Restauration",to:"/contact?secteur=Restauration#demande-form"},{label:"Points de vente",to:"/contact?secteur=Point de vente#demande-form"},{label:"Santé",to:"/contact?secteur=Établissement de santé#demande-form"},{label:"Administration",to:"/contact?secteur=Administration#demande-form"}]},{title:"Nexav",links:[{label:"Accueil",to:"/"},{label:"Nos produits",to:"/produits"},{label:"Contact",to:"/contact#demande-form"},{label:"Demander une démo",to:"/contact#demande-form"}]}];return a.jsxs("footer",{className:"footer-light",children:[a.jsxs("div",{className:"footer-container",children:[a.jsxs("div",{className:"footer-grid",children:[a.jsxs("div",{children:[a.jsxs(re,{to:"/",className:"footer-brand",children:[a.jsx("span",{className:"footer-brand-icon",children:a.jsx(Wj,{})}),a.jsxs("span",{children:[a.jsx("strong",{children:"NEXAV"}),a.jsx("small",{children:"DIGITAL SOLUTIONS"})]})]}),a.jsx("p",{className:"footer-desc",children:"Solutions d'affichage dynamique et digital pour les entreprises modernes. Pilotez vos écrans, amplifiez votre message."}),a.jsx("div",{className:"footer-socials",children:["Li","In","Fb"].map(r=>a.jsx("a",{href:"#",children:r},r))})]}),t.map(r=>a.jsxs("div",{children:[a.jsx("h4",{children:r.title}),a.jsx("ul",{children:r.links.map(n=>a.jsx("li",{children:a.jsx(re,{to:n.to,children:n.label})},n.label))})]},r.title))]}),a.jsxs("div",{className:"footer-cta",children:[a.jsxs("div",{children:[a.jsx("p",{children:"Un projet en tête ?"}),a.jsx("span",{children:"Parlez-nous de votre besoin et recevez une réponse rapide."})]}),a.jsx(re,{to:"/contact#demande-form",className:"btn btn-primary btn-sm",children:"Demander une démo"})]}),a.jsxs("div",{className:"footer-bottom",children:[a.jsxs("p",{children:["© ",e," Nexav — Tous droits réservés. Casablanca, Maroc."]}),a.jsx("div",{children:["Mentions légales","Politique de confidentialité","CGU"].map(r=>a.jsx("a",{href:"#",children:r},r))})]})]}),a.jsx("style",{children:`
        .footer-light {
          background: #ffffff;
          border-top: 1px solid rgba(17,17,17,0.08);
          padding: 4rem 5% 2rem;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-brand {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          color: #111;
        }

        .footer-brand-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          background: var(--n-orange);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-brand span:last-child {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .footer-brand strong {
          font-family: var(--font-head);
          font-size: 1.15rem;
          font-weight: 800;
        }

        .footer-brand small {
          margin-top: 0.25rem;
          font-size: 0.58rem;
          font-weight: 800;
          color: var(--n-orange);
          letter-spacing: 0.05em;
        }

        .footer-desc {
          font-size: 0.9rem;
          color: var(--n-gray);
          line-height: 1.65;
          max-width: 330px;
        }

        .footer-socials {
          display: flex;
          gap: 0.6rem;
          margin-top: 1.5rem;
        }

        .footer-socials a {
          width: 34px;
          height: 34px;
          border-radius: 999px;
          background: #f4f4f4;
          border: 1px solid rgba(17,17,17,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 800;
          color: #111;
          transition: var(--transition);
        }

        .footer-socials a:hover {
          background: var(--n-orange);
          color: #fff;
          border-color: var(--n-orange);
        }

        .footer-grid h4 {
          font-family: var(--font-head);
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #111;
          margin-bottom: 1.2rem;
        }

        .footer-grid ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer-grid li a {
          font-size: 0.9rem;
          color: var(--n-gray);
          transition: var(--transition);
        }

        .footer-grid li a:hover {
          color: var(--n-orange);
        }

        .footer-cta {
          margin-top: 2.5rem;
          padding: 1.35rem 1.2rem;
          background: #fff7f4;
          border: 1px solid rgba(255,75,43,0.16);
          border-radius: var(--radius-lg);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .footer-cta p {
          font-family: var(--font-head);
          font-weight: 800;
          color: #111;
          font-size: 1rem;
          margin-bottom: 0.25rem;
        }

        .footer-cta span {
          font-size: 0.88rem;
          color: var(--n-gray);
        }

        .footer-bottom {
          border-top: 1px solid rgba(17,17,17,0.08);
          padding-top: 1.5rem;
          margin-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .footer-bottom p,
        .footer-bottom a {
          font-size: 0.78rem;
          color: #8a8a8a;
        }

        .footer-bottom div {
          display: flex;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .footer-cta .btn {
            width: 100%;
          }
        }
      `})]})}function Wj(){return a.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("rect",{x:"3",y:"5",width:"18",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"2"}),a.jsx("path",{d:"M8 21h8M12 17v4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}function Pr({children:e}){const{pathname:t}=Or();return w.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[t]),w.useEffect(()=>{const r=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&(o.target.classList.add("revealed"),r.unobserve(o.target))})},{threshold:.1});return document.querySelectorAll(".reveal").forEach(i=>r.observe(i)),()=>r.disconnect()},[t]),a.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",background:"#fff"},children:[a.jsx(Bj,{}),a.jsx("main",{style:{flex:1},children:e}),a.jsx($j,{}),a.jsx(re,{to:"/contact#demande-form",className:"floating-demo-btn",children:"Demander une démo"})]})}const Vj="/assets/hero-affichage-CGj9tWTP.png";function Hj(){return a.jsxs("section",{className:"hero-light",children:[a.jsxs("div",{className:"hero-content reveal",children:[a.jsxs("h1",{children:["L’affichage dynamique",a.jsx("br",{}),"n’a jamais été aussi simple !"]}),a.jsx("p",{children:"Tous les outils dont votre entreprise a besoin pour créer du contenu et gérer vos écrans à distance."}),a.jsxs("div",{className:"hero-actions",children:[a.jsx(re,{to:"/contact#demande-form",className:"btn btn-primary btn-lg",children:"Demander une démo"}),a.jsx(re,{to:"/produits",className:"btn btn-secondary btn-lg",children:"Découvrir les solutions"})]})]}),a.jsx("div",{className:"hero-image-wrap reveal reveal-delay-2",children:a.jsx("img",{src:Vj,alt:"Affichage dynamique Nexav"})}),a.jsx("style",{children:`
        .hero-light {
          min-height: 100vh;
          padding: calc(var(--nav-h) + 3.5rem) 5% 4rem;
          background: #f4f4f4;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }

        .hero-content {
          text-align: center;
          max-width: 1000px;
          margin: 0 auto 3.5rem;
        }

        .hero-content h1 {
          font-family: var(--font-head);
          font-size: clamp(2.3rem, 5.2vw, 4.6rem);
          font-weight: 800;
          line-height: 1.13;
          letter-spacing: -0.05em;
          color: var(--n-orange);
          margin-bottom: 1.3rem;
        }

        .hero-content p {
          font-size: clamp(1rem, 1.4vw, 1.25rem);
          color: #263241;
          line-height: 1.65;
          max-width: 860px;
          margin: 0 auto 2rem;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-image-wrap {
          width: min(100%, 1120px);
          margin: 0 auto;
        }

        .hero-image-wrap img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .hero-light {
            min-height: auto;
            padding: calc(var(--nav-h) + 2.5rem) 1rem 3rem;
          }

          .hero-content {
            margin-bottom: 2rem;
          }

          .hero-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 520px) {
          .hero-content h1 {
            font-size: 2.25rem;
          }
        }
      `})]})}const $g="/assets/education-BHkiOwet.jpg",Wg="/assets/entreprise-BeDJCfFD.jpg",Vg="/assets/point-de-vente-DqIhKKd-.jpg",Hg="/assets/restauration-C3avus0d.jpg",qg="/assets/administration-D4s3Oian.jpg",Kg="/assets/sante-RYaFzeFa.jpg",qj=[{key:"education",value:"Éducation",name:"Éducation",desc:"Tableaux interactifs, gestion des flux étudiants et communication campus unifiée.",image:$g},{key:"entreprise",value:"Entreprise",name:"Entreprise",desc:"Communication interne, KPIs en temps réel et affichage pour vos équipes.",image:Wg},{key:"point-de-vente",value:"Point de vente",name:"Points de vente",desc:"PLV digitale, promotions dynamiques, menu boards et bornes clients.",image:Vg},{key:"restauration",value:"Restauration",name:"Restauration",desc:"Menus digitaux mis à jour en temps réel et gestion multi-sites centralisée.",image:Hg},{key:"administration",value:"Administration",name:"Administration",desc:"Orientation des usagers, information institutionnelle et signalétique intelligente.",image:qg},{key:"etablissement-de-sante",value:"Établissement de santé",name:"Santé",desc:"Information patients, diffusion en salle d’attente et signalétique hospitalière.",image:Kg}];function Kj(){return a.jsxs("section",{id:"secteurs",className:"section section--navy",children:[a.jsxs("div",{className:"reveal secteurs-header",children:[a.jsx("div",{className:"section-tag",children:"Secteurs d'activité"}),a.jsxs("h2",{className:"section-title",children:["Une solution adaptée à",a.jsx("br",{}),a.jsx("span",{className:"accent",children:"chaque environnement"})]}),a.jsx("p",{className:"section-sub",children:"De l'éducation à la restauration, Nexav s'intègre dans tous vos espaces avec des configurations sur mesure."})]}),a.jsx("div",{className:"secteurs-grid",children:qj.map((e,t)=>a.jsx(Qj,{secteur:e,delay:t*.06},e.key))}),a.jsx("style",{children:`
        .secteurs-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 4rem;
        }

        .secteurs-header .section-sub {
          max-width: 500px;
          margin: 0 auto;
        }

        .secteurs-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        .secteur-card {
          position: relative;
          min-height: 300px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 1.5rem;
          color: #fff;
          transition: all 0.35s ease;
          isolation: isolate;
        }

        .secteur-card:hover {
          transform: translateY(-5px);
          border-color: rgba(12,91,232,0.45);
          box-shadow: 0 20px 50px rgba(0,0,0,0.6);
        }

        .secteur-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.02);
          transition: transform 0.55s ease, filter 0.55s ease;
          filter: saturate(0.95) contrast(1.05) brightness(0.75);
          z-index: -3;
        }

        .secteur-card:hover .secteur-img {
          transform: scale(1.08);
          filter: saturate(1.05) contrast(1.1) brightness(0.82);
        }

        .secteur-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(5,10,20,0.08) 0%, rgba(5,10,20,0.45) 42%, rgba(5,10,20,0.94) 100%),
            linear-gradient(135deg, rgba(12,91,232,0.28), rgba(0,212,255,0.06));
          z-index: -2;
        }

        .secteur-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 24px 24px;
          opacity: 0.3;
          z-index: -1;
        }

        .secteur-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.92);
          margin-bottom: 0.9rem;
        }

        .secteur-title {
          font-family: var(--font-head);
          font-size: 1.12rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
        }

        .secteur-desc {
          font-size: 0.84rem;
          color: rgba(255,255,255,0.7);
          line-height: 1.55;
          margin-bottom: 0.85rem;
        }

        .secteur-link {
          font-size: 0.8rem;
          color: var(--n-cyan);
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          opacity: 0;
          transform: translateY(6px);
          transition: all 0.25s ease;
        }

        .secteur-card:hover .secteur-link {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 980px) {
          .secteurs-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .secteurs-grid {
            grid-template-columns: 1fr;
          }

          .secteur-card {
            min-height: 260px;
            padding: 1.25rem;
          }

          .secteur-link {
            opacity: 1;
            transform: none;
          }
        }
      `})]})}function Qj({secteur:e,delay:t}){return a.jsxs(re,{to:`/contact?secteur=${encodeURIComponent(e.value)}#demande-form`,className:"reveal secteur-card",style:{transitionDelay:`${t}s`},children:[a.jsx("img",{src:e.image,alt:e.name,className:"secteur-img"}),a.jsx("div",{className:"secteur-overlay"}),a.jsx("div",{className:"secteur-pattern"}),a.jsxs("div",{style:{position:"relative",zIndex:1},children:[a.jsx("div",{className:"secteur-icon",children:a.jsx(Xj,{name:e.key})}),a.jsx("h3",{className:"secteur-title",children:e.name}),a.jsx("p",{className:"secteur-desc",children:e.desc}),a.jsxs("span",{className:"secteur-link",children:["Demander une étude",a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M2 6h8M6 2l4 4-4 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]})}function Xj({name:e}){const t={width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"education":return a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M3 8l9-5 9 5-9 5-9-5Z"}),a.jsx("path",{d:"M7 10.5v4.5c0 1.5 2.2 3 5 3s5-1.5 5-3v-4.5"})]});case"entreprise":return a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M4 21V7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v14"}),a.jsx("path",{d:"M14 10h5a1 1 0 0 1 1 1v10"}),a.jsx("path",{d:"M8 10h2M8 14h2M8 18h2M16 14h1M16 18h1"})]});case"point-de-vente":return a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M4 7h16"}),a.jsx("path",{d:"M6 7l1-3h10l1 3"}),a.jsx("path",{d:"M6 10v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8"}),a.jsx("path",{d:"M9 14h6"})]});case"restauration":return a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M6 3v8"}),a.jsx("path",{d:"M10 3v8"}),a.jsx("path",{d:"M6 7h4"}),a.jsx("path",{d:"M15 3c2 2 2 5 0 7v11"})]});case"administration":return a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M3 10h18"}),a.jsx("path",{d:"M5 10v8M10 10v8M14 10v8M19 10v8"}),a.jsx("path",{d:"M2 21h20"}),a.jsx("path",{d:"M12 3l9 5H3l9-5Z"})]});default:return a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M4 19V6a2 2 0 0 1 2-2h9l5 5v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"}),a.jsx("path",{d:"M15 4v5h5"}),a.jsx("path",{d:"M8 13h8M8 17h6"})]})}}const Yj=[{key:"remote",title:"Gestion à distance",desc:"Pilotez tous vos écrans depuis n'importe quel navigateur, où que vous soyez."},{key:"realtime",title:"Mises à jour en temps réel",desc:"Modifiez et diffusez vos contenus instantanément sans interruption."},{key:"schedule",title:"Planification intelligente",desc:"Programmez vos diffusions selon les jours, horaires et emplacements."},{key:"ready",title:"Solution clé en main",desc:"Installation rapide, interface simple et accompagnement adapté à votre besoin."}];function Gj(){return a.jsxs("section",{className:"section solution-light",children:[a.jsx("div",{className:"solution-container",children:a.jsxs("div",{className:"solution-grid",children:[a.jsxs("div",{className:"reveal",children:[a.jsx("div",{className:"section-tag",children:"La solution Nexav"}),a.jsxs("h2",{className:"section-title",children:["Une plateforme centralisée,",a.jsx("br",{}),"un ",a.jsx("span",{className:"accent",children:"contrôle total"})]}),a.jsx("p",{className:"section-sub solution-sub",children:"Gérez votre parc d’écrans depuis un tableau de bord unique, accessible depuis n’importe quel appareil."}),a.jsx("div",{className:"solution-features",children:Yj.map(e=>a.jsxs("div",{className:"solution-feature",children:[a.jsx("div",{className:"solution-icon",children:a.jsx(Jj,{name:e.key})}),a.jsxs("div",{children:[a.jsx("h4",{children:e.title}),a.jsx("p",{children:e.desc})]})]},e.title))})]}),a.jsx("div",{className:"reveal reveal-delay-2 solution-panel-wrap",children:a.jsxs("div",{className:"solution-panel",children:[a.jsxs("div",{className:"solution-panel-head",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Tableau de bord"}),a.jsx("strong",{children:"Gestion des diffusions"})]}),a.jsx("button",{children:"Nouvelle diffusion"})]}),a.jsx("div",{className:"solution-screens",children:[{name:"Hall principal",on:!0,pct:92},{name:"Vitrine nord",on:!0,pct:78},{name:"Restaurant",on:!0,pct:61},{name:"Salle conf.",on:!1,pct:0}].map(e=>a.jsxs("div",{className:"solution-screen-card",children:[a.jsxs("div",{className:"solution-screen-head",children:[a.jsx("span",{children:e.name}),a.jsx("span",{className:e.on?"status-dot on":"status-dot"})]}),a.jsx("div",{className:"progress-line",children:a.jsx("div",{style:{width:`${e.pct}%`}})}),a.jsx("div",{className:"solution-screen-status",children:e.on?`${e.pct}% actif`:"Hors ligne"})]},e.name))}),a.jsxs("div",{className:"solution-broadcast",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Prochaine diffusion"}),a.jsx("strong",{children:"Campagne entreprise — 14h30"})]}),a.jsx("p",{children:"dans 2h15"})]})]})})]})}),a.jsx("style",{children:`
        .solution-light {
          background: #fff;
        }

        .solution-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .solution-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          gap: 5rem;
          align-items: center;
        }

        .solution-sub {
          margin-bottom: 2.5rem;
        }

        .solution-features {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .solution-feature {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1rem 1.2rem;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-md);
          transition: var(--transition);
          box-shadow: 0 10px 25px rgba(17,17,17,0.04);
        }

        .solution-feature:hover {
          transform: translateY(-3px);
          border-color: rgba(255,75,43,0.28);
          box-shadow: 0 16px 35px rgba(17,17,17,0.08);
        }

        .solution-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fff3ef;
          border: 1px solid rgba(255,75,43,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--n-orange);
          flex-shrink: 0;
        }

        .solution-feature h4 {
          font-family: var(--font-head);
          font-size: 0.96rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.25rem;
        }

        .solution-feature p {
          font-size: 0.86rem;
          color: var(--n-gray);
          line-height: 1.6;
        }

        .solution-panel-wrap {
          position: relative;
          min-width: 0;
        }

        .solution-panel-wrap::before {
          content: "";
          position: absolute;
          inset: -12%;
          background: radial-gradient(circle, rgba(255,75,43,0.16), transparent 62%);
          pointer-events: none;
        }

        .solution-panel {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.1);
          border-radius: 26px;
          padding: 1.7rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(17,17,17,0.12);
        }

        .solution-panel::before {
          content: "";
          position: absolute;
          top: 0;
          left: 12%;
          right: 12%;
          height: 4px;
          border-radius: 0 0 8px 8px;
          background: var(--n-orange);
        }

        .solution-panel-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .solution-panel-head span {
          display: block;
          color: var(--n-gray);
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .solution-panel-head strong {
          font-family: var(--font-head);
          color: #111;
          font-size: 1rem;
        }

        .solution-panel-head button {
          background: var(--n-orange);
          border: none;
          color: #fff;
          border-radius: 999px;
          padding: 0.45rem 0.9rem;
          font-size: 0.75rem;
          font-weight: 800;
        }

        .solution-screens {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.75rem;
          margin-bottom: 0.85rem;
        }

        .solution-screen-card {
          background: #f7f7f7;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 14px;
          padding: 0.95rem;
          min-width: 0;
        }

        .solution-screen-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.55rem;
          font-size: 0.8rem;
          font-weight: 800;
          color: #111;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #9ca3af;
          flex-shrink: 0;
        }

        .status-dot.on {
          background: var(--n-orange);
          box-shadow: 0 0 0 4px rgba(255,75,43,0.12);
        }

        .progress-line {
          height: 5px;
          background: #e7e7e7;
          border-radius: 99px;
          overflow: hidden;
        }

        .progress-line > div {
          height: 100%;
          background: var(--n-orange);
          border-radius: 99px;
        }

        .solution-screen-status {
          font-size: 0.72rem;
          color: var(--n-gray);
          margin-top: 0.4rem;
          font-weight: 700;
        }

        .solution-broadcast {
          background: #fff7f4;
          border: 1px solid rgba(255,75,43,0.16);
          border-radius: 16px;
          padding: 0.9rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .solution-broadcast span {
          display: block;
          font-size: 0.68rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .solution-broadcast strong {
          color: #111;
          font-size: 0.9rem;
        }

        .solution-broadcast p {
          color: var(--n-orange);
          font-weight: 800;
          font-size: 0.82rem;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .solution-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 560px) {
          .solution-panel {
            padding: 1rem;
          }

          .solution-screens {
            grid-template-columns: 1fr;
          }

          .solution-broadcast {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})}function Jj({name:e}){const t={width:19,height:19,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};return e==="remote"?a.jsxs("svg",{...t,children:[a.jsx("circle",{cx:"12",cy:"12",r:"9"}),a.jsx("path",{d:"M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"})]}):e==="realtime"?a.jsx("svg",{...t,children:a.jsx("path",{d:"M13 2 4 14h7l-1 8 9-12h-7l1-8Z"})}):e==="schedule"?a.jsxs("svg",{...t,children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"17",rx:"2"}),a.jsx("path",{d:"M8 2v4M16 2v4M3 9h18"})]}):a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M12 3 4 7v6c0 5 3.5 7.5 8 8 4.5-.5 8-3 8-8V7l-8-4Z"}),a.jsx("path",{d:"m9 12 2 2 4-5"})]})}const Zj=[{num:"01",key:"create",title:"Créer",desc:"Concevez vos visuels ou importez vos propres contenus. Templates professionnels inclus."},{num:"02",key:"program",title:"Programmer",desc:"Définissez les horaires, les écrans cibles et les règles de diffusion."},{num:"03",key:"broadcast",title:"Diffuser",desc:"Vos écrans se mettent à jour automatiquement, en temps réel, même à distance."}];function e2(){return a.jsxs("section",{className:"section process-light",children:[a.jsxs("div",{className:"process-header reveal",children:[a.jsx("div",{className:"section-tag",children:"Comment ça marche"}),a.jsxs("h2",{className:"section-title",children:["Simple. Rapide. ",a.jsx("span",{className:"accent",children:"Efficace."})]}),a.jsx("p",{className:"section-sub",children:"Gérez vos écrans en 3 étapes depuis votre navigateur."})]}),a.jsxs("div",{className:"process-steps",children:[a.jsx("div",{className:"process-line"}),Zj.map((e,t)=>a.jsxs("div",{className:`reveal reveal-delay-${t+1} process-step`,children:[a.jsxs("div",{className:"process-circle",children:[a.jsx("span",{children:e.num}),a.jsx("div",{className:"process-icon",children:a.jsx(t2,{name:e.key})})]}),a.jsx("h3",{children:e.title}),a.jsx("p",{children:e.desc})]},e.num))]}),a.jsx("div",{className:"howit-wrap",children:a.jsxs("div",{className:"reveal howit-grid",children:[a.jsxs("div",{children:[a.jsx("div",{className:"section-tag",children:"Votre solution en ligne"}),a.jsxs("h3",{className:"howit-title",children:["Gérez depuis votre navigateur,",a.jsx("br",{}),"diffusez partout"]}),a.jsx("p",{className:"howit-text",children:"Créez vos playlists et gérez vos écrans depuis votre PC ou tablette. Votre contenu est automatiquement affiché sur les écrans concernés."}),a.jsx("div",{className:"howit-list",children:["Interface web accessible partout","Aucune installation logicielle","Compatible tous navigateurs","Mises à jour automatiques"].map(e=>a.jsxs("div",{className:"howit-item",children:[a.jsx("span",{children:"✓"}),a.jsx("p",{children:e})]},e))})]}),a.jsxs("div",{className:"howit-visual",children:[a.jsx("div",{className:"howit-screen-icon",children:a.jsx(r2,{})}),a.jsx("div",{className:"howit-screen-title",children:"Interface Nexav"}),a.jsx("div",{className:"howit-screen-text",children:"Accessible depuis tout navigateur"}),a.jsxs("div",{className:"howit-flow",children:[a.jsx(bl,{type:"laptop"}),a.jsx(pp,{}),a.jsx(bl,{type:"screen"}),a.jsx(pp,{}),a.jsx(bl,{type:"mobile"})]})]})]})}),a.jsx("style",{children:`
        .process-light {
          background: #f5f5f5;
        }

        .process-header {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 4.5rem;
        }

        .process-steps {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 2.5rem;
        }

        .process-line {
          position: absolute;
          top: 40px;
          left: calc(16.67% + 20px);
          right: calc(16.67% + 20px);
          height: 2px;
          background: linear-gradient(90deg, var(--n-orange), #111);
          opacity: 0.18;
          z-index: 0;
        }

        .process-step {
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .process-circle {
          width: 82px;
          height: 82px;
          border-radius: 50%;
          margin: 0 auto 1.75rem;
          background: #fff;
          border: 2px solid rgba(255,75,43,0.22);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--n-orange);
          box-shadow: 0 16px 35px rgba(17,17,17,0.08);
        }

        .process-circle span {
          font-family: var(--font-head);
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1;
        }

        .process-icon {
          margin-top: 0.2rem;
          color: #111;
        }

        .process-step h3 {
          font-family: var(--font-head);
          font-size: 1.22rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.65rem;
        }

        .process-step p {
          font-size: 0.9rem;
          color: var(--n-gray);
          line-height: 1.65;
        }

        .howit-wrap {
          max-width: 1000px;
          margin: 5rem auto 0;
        }

        .howit-grid {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 28px;
          padding: 2.5rem;
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(0,1fr);
          gap: 3rem;
          align-items: center;
          box-shadow: 0 20px 55px rgba(17,17,17,0.06);
        }

        .howit-title {
          font-family: var(--font-head);
          font-size: 1.55rem;
          font-weight: 800;
          line-height: 1.2;
          color: #111;
          margin-bottom: 1rem;
        }

        .howit-text {
          font-size: 0.92rem;
          color: var(--n-gray);
          line-height: 1.65;
          margin-bottom: 1.5rem;
        }

        .howit-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .howit-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.9rem;
        }

        .howit-item span {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff3ef;
          border: 1px solid rgba(255,75,43,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          color: var(--n-orange);
          font-weight: 900;
          flex-shrink: 0;
        }

        .howit-item p {
          color: #263241;
          font-weight: 700;
        }

        .howit-visual {
          background: #f7f7f7;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 22px;
          padding: 1.6rem;
          text-align: center;
          min-width: 0;
        }

        .howit-screen-icon {
          width: 60px;
          height: 60px;
          border-radius: 18px;
          margin: 0 auto 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--n-orange);
          color: #fff;
        }

        .howit-screen-title {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.4rem;
        }

        .howit-screen-text {
          font-size: 0.82rem;
          color: var(--n-gray);
          font-weight: 700;
        }

        .howit-flow {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.2rem;
          flex-wrap: wrap;
        }

        .mini-icon {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .process-steps {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .process-line {
            display: none;
          }

          .howit-grid {
            grid-template-columns: 1fr;
            padding: 1.4rem;
          }
        }
      `})]})}function t2({name:e}){const t={width:16,height:16,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};return e==="create"?a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M12 20h9"}),a.jsx("path",{d:"M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"})]}):e==="program"?a.jsxs("svg",{...t,children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"17",rx:"2"}),a.jsx("path",{d:"M8 2v4M16 2v4M3 9h18"})]}):a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M4 12h16"}),a.jsx("path",{d:"m14 6 6 6-6 6"}),a.jsx("path",{d:"M4 6v12"})]})}function r2(){return a.jsxs("svg",{width:"26",height:"26",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"}),a.jsx("path",{d:"M3 9h18"}),a.jsx("path",{d:"M7 6.5h.01M10 6.5h.01"})]})}function bl({type:e}){return a.jsx("div",{className:"mini-icon",children:a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:e==="mobile"?a.jsxs(a.Fragment,{children:[a.jsx("rect",{x:"8",y:"2",width:"8",height:"20",rx:"2"}),a.jsx("path",{d:"M11 18h2"})]}):a.jsxs(a.Fragment,{children:[a.jsx("rect",{x:"4",y:"5",width:"16",height:"10",rx:"1.5"}),a.jsx("path",{d:"M8 20h8M12 15v5"})]})})})}function pp(){return a.jsx("svg",{width:"34",height:"2",viewBox:"0 0 34 2",children:a.jsx("line",{x1:"0",y1:"1",x2:"34",y2:"1",stroke:"#ff4b2b",strokeWidth:"2",strokeDasharray:"4 2",opacity:"0.55"})})}const n2=[{key:"multi",title:"Multi-écrans",desc:"Gérez des dizaines d'écrans simultanément, groupés par site, étage ou catégorie personnalisée."},{key:"planification",title:"Planification avancée",desc:"Calendrier de diffusion précis, règles conditionnelles, playlists intelligentes et récurrentes."},{key:"supervision",title:"Supervision en direct",desc:"Visualisez l'état de chaque écran en temps réel avec des alertes automatiques et un suivi centralisé."},{key:"formats",title:"Tous formats",desc:"Écrans LED, LCD, tablettes, murs vidéo, bornes interactives : tous les formats sont pris en charge."},{key:"offline",title:"Diffusion hors ligne",desc:"Les playlists continuent de s'afficher même en cas de perte temporaire de connexion internet."},{key:"editor",title:"Éditeur intégré",desc:"Créez des contenus professionnels grâce à une bibliothèque de widgets et de modèles prêts à l’emploi."}];function i2(){return a.jsxs("section",{className:"section fonctions-light",children:[a.jsxs("div",{className:"fonctions-container",children:[a.jsxs("div",{className:"reveal fonctions-header",children:[a.jsx("div",{className:"section-tag",children:"Fonctionnalités"}),a.jsxs("h2",{className:"section-title",children:["Tout ce dont vous avez besoin,",a.jsx("br",{}),a.jsx("span",{className:"accent",children:"inclus d'emblée"})]})]}),a.jsx("div",{className:"fonctions-grid",children:n2.map((e,t)=>a.jsxs("div",{className:`reveal reveal-delay-${t%3+1} fonction-card`,children:[a.jsx("div",{className:"fonction-icon",children:a.jsx(o2,{name:e.key})}),a.jsx("h4",{children:e.title}),a.jsx("p",{children:e.desc})]},e.title))})]}),a.jsx("style",{children:`
        .fonctions-light {
          background: #fff;
        }

        .fonctions-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .fonctions-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .fonctions-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.15rem;
        }

        .fonction-card {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-lg);
          padding: 1.55rem;
          position: relative;
          overflow: hidden;
          transition: var(--transition);
          box-shadow: 0 10px 24px rgba(17,17,17,0.04);
        }

        .fonction-card::after {
          content: "";
          position: absolute;
          right: -40px;
          top: -40px;
          width: 110px;
          height: 110px;
          border-radius: 50%;
          background: rgba(255,75,43,0.08);
          transition: var(--transition);
        }

        .fonction-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,75,43,0.28);
          box-shadow: 0 18px 42px rgba(17,17,17,0.08);
        }

        .fonction-card:hover::after {
          transform: scale(1.25);
        }

        .fonction-icon {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          background: #fff3ef;
          border: 1px solid rgba(255,75,43,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          color: var(--n-orange);
          position: relative;
          z-index: 1;
        }

        .fonction-card h4 {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.45rem;
          position: relative;
          z-index: 1;
        }

        .fonction-card p {
          font-size: 0.86rem;
          color: var(--n-gray);
          line-height: 1.65;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .fonctions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 580px) {
          .fonctions-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function o2({name:e}){const t={width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};switch(e){case"multi":return a.jsxs("svg",{...t,children:[a.jsx("rect",{x:"3",y:"5",width:"7",height:"5",rx:"1.2"}),a.jsx("rect",{x:"14",y:"5",width:"7",height:"5",rx:"1.2"}),a.jsx("rect",{x:"8.5",y:"14",width:"7",height:"5",rx:"1.2"})]});case"planification":return a.jsxs("svg",{...t,children:[a.jsx("rect",{x:"3",y:"4",width:"18",height:"17",rx:"2"}),a.jsx("path",{d:"M8 2v4M16 2v4M3 9h18"})]});case"supervision":return a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z"}),a.jsx("circle",{cx:"12",cy:"12",r:"2.5"})]});case"formats":return a.jsxs("svg",{...t,children:[a.jsx("rect",{x:"3",y:"5",width:"10",height:"7",rx:"1.5"}),a.jsx("rect",{x:"16",y:"4",width:"5",height:"9",rx:"1.2"}),a.jsx("rect",{x:"8",y:"15",width:"8",height:"5",rx:"1.2"})]});case"offline":return a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M5 12a7 7 0 0 1 12.2-4.8"}),a.jsx("path",{d:"M19 12a7 7 0 0 1-12.2 4.8"}),a.jsx("path",{d:"M15 8h3V5"}),a.jsx("path",{d:"M9 16H6v3"})]});default:return a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M12 3v18"}),a.jsx("path",{d:"M3 12h18"}),a.jsx("path",{d:"M7 7h10v10H7z"})]})}}function a2(){return a.jsxs("section",{className:"section cta-orange",children:[a.jsx("div",{className:"cta-bg-circle one"}),a.jsx("div",{className:"cta-bg-circle two"}),a.jsxs("div",{className:"cta-box reveal",children:[a.jsx("div",{className:"section-tag",children:"Passez à l'action"}),a.jsxs("h2",{className:"section-title",children:["Prêt à transformer votre",a.jsx("br",{}),a.jsx("span",{className:"accent",children:"communication digitale ?"})]}),a.jsx("p",{className:"section-sub",children:"Demandez une démonstration et découvrez comment Nexav peut adapter l’affichage dynamique aux besoins de votre entreprise."}),a.jsxs("div",{className:"cta-actions",children:[a.jsx(re,{to:"/contact#demande-form",className:"btn btn-primary btn-lg",children:"Demander une démo"}),a.jsx(re,{to:"/contact#demande-form",className:"btn btn-secondary btn-lg",children:"Parler à un conseiller"})]}),a.jsx("div",{className:"cta-badges",children:[{label:"Réponse sous 24h"},{label:"Conseil gratuit"},{label:"Solution sur mesure"}].map(e=>a.jsxs("div",{className:"cta-badge",children:[a.jsx(s2,{}),a.jsx("span",{children:e.label})]},e.label))})]}),a.jsx("style",{children:`
        .cta-orange {
          position: relative;
          overflow: hidden;
          background: #fff7f4;
        }

        .cta-bg-circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,75,43,0.12);
          pointer-events: none;
        }

        .cta-bg-circle.one {
          width: 420px;
          height: 420px;
          top: -180px;
          left: 8%;
        }

        .cta-bg-circle.two {
          width: 300px;
          height: 300px;
          bottom: -140px;
          right: 10%;
        }

        .cta-box {
          max-width: 860px;
          margin: 0 auto;
          text-align: center;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 32px;
          padding: clamp(2rem, 5vw, 4rem);
          box-shadow: 0 22px 60px rgba(17,17,17,0.08);
          position: relative;
          z-index: 1;
        }

        .cta-box .section-sub {
          max-width: 560px;
          margin: 0 auto 2.3rem;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }

        .cta-badges {
          display: flex;
          justify-content: center;
          gap: 1.2rem;
          flex-wrap: wrap;
        }

        .cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.86rem;
          font-weight: 700;
          color: #263241;
        }

        .cta-badge svg {
          color: var(--n-orange);
        }

        @media (max-width: 620px) {
          .cta-actions {
            flex-direction: column;
          }

          .cta-box {
            border-radius: 24px;
          }
        }
      `})]})}function s2(){return a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",children:a.jsx("path",{d:"M20 6 9 17l-5-5",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round"})})}const l2=[{initials:"KA",name:"Karim Alaoui",role:"Directeur IT — Groupe GreenRetail",text:"Nexav nous a permis de déployer nos écrans rapidement. L'interface est intuitive et le support réactif.",stars:5},{initials:"SM",name:"Samira Meziane",role:"Responsable Communication — Clinique Atlas",text:"La gestion centralisée de nos écrans sur plusieurs sites est exactement ce dont nous avions besoin.",stars:5},{initials:"YB",name:"Youssef Benali",role:"Gérant — Réseau Saveur & Co",text:"Nos menus digitaux sont maintenant mis à jour instantanément. Le résultat est propre et professionnel.",stars:5}],u2=["TechnoGroup","MédiaMall","EduSmart","ClinicNet","RetailPro","AdminServices"];function c2(){return a.jsxs("section",{className:"section temoignages-light",children:[a.jsxs("div",{className:"temoignages-container",children:[a.jsxs("div",{className:"reveal temoignages-header",children:[a.jsx("div",{className:"section-tag",children:"Ils nous font confiance"}),a.jsxs("h2",{className:"section-title",children:["Ce que disent ",a.jsx("span",{className:"accent",children:"nos clients"})]})]}),a.jsx("div",{className:"temoignages-grid",children:l2.map((e,t)=>a.jsxs("div",{className:`reveal reveal-delay-${t+1} temoignage-card`,children:[a.jsx("div",{className:"quote-mark",children:"”"}),a.jsx("div",{className:"stars","aria-label":`${e.stars} étoiles`,children:Array(e.stars).fill(0).map((r,n)=>a.jsx("span",{children:"★"},n))}),a.jsxs("p",{className:"temoignage-text",children:["« ",e.text," »"]}),a.jsxs("div",{className:"temoignage-author",children:[a.jsx("div",{className:"author-avatar",children:e.initials}),a.jsxs("div",{children:[a.jsx("div",{className:"author-name",children:e.name}),a.jsx("div",{className:"author-role",children:e.role})]})]})]},e.name))}),a.jsxs("div",{className:"reveal partners",children:[a.jsx("p",{children:"Ils nous font confiance"}),a.jsx("div",{className:"partners-list",children:u2.map(e=>a.jsx("span",{children:e},e))})]})]}),a.jsx("style",{children:`
        .temoignages-light {
          background: #fff;
        }

        .temoignages-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .temoignages-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .temoignages-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.3rem;
        }

        .temoignage-card {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-lg);
          padding: 1.8rem;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
          box-shadow: 0 10px 24px rgba(17,17,17,0.04);
        }

        .temoignage-card:hover {
          border-color: rgba(255,75,43,0.28);
          transform: translateY(-5px);
          box-shadow: 0 18px 42px rgba(17,17,17,0.08);
        }

        .quote-mark {
          position: absolute;
          top: 1rem;
          right: 1.4rem;
          font-family: Georgia, serif;
          font-size: 4.5rem;
          line-height: 1;
          color: rgba(255,75,43,0.12);
          font-weight: 700;
        }

        .stars {
          display: flex;
          gap: 0.2rem;
          margin-bottom: 1rem;
          position: relative;
          z-index: 1;
        }

        .stars span {
          color: var(--n-orange);
          font-size: 0.95rem;
        }

        .temoignage-text {
          font-size: 0.92rem;
          color: #374151;
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .temoignage-author {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          min-width: 0;
          position: relative;
          z-index: 1;
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--n-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-head);
          font-size: 0.85rem;
          font-weight: 800;
          color: #fff;
          flex-shrink: 0;
          box-shadow: 0 10px 20px rgba(255,75,43,0.2);
        }

        .author-name {
          font-size: 0.95rem;
          font-weight: 800;
          color: #111;
        }

        .author-role {
          font-size: 0.78rem;
          color: var(--n-gray);
          margin-top: 0.15rem;
          line-height: 1.4;
        }

        .partners {
          margin-top: 4rem;
          padding-top: 3rem;
          border-top: 1px solid rgba(17,17,17,0.08);
        }

        .partners p {
          text-align: center;
          font-size: 0.75rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 800;
          margin-bottom: 1.25rem;
        }

        .partners-list {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .partners-list span {
          font-family: var(--font-head);
          font-size: 0.82rem;
          font-weight: 800;
          color: #111;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          background: #f5f5f5;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 999px;
          padding: 0.55rem 1rem;
        }

        @media (max-width: 900px) {
          .temoignages-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 520px) {
          .temoignage-card {
            padding: 1.25rem;
          }

          .partners-list {
            gap: 0.7rem;
          }

          .partners-list span {
            font-size: 0.75rem;
          }
        }
      `})]})}const Wc=()=>pe.get("/produits"),d2=e=>pe.get(`/produits/${e}`),Qg=()=>pe.get("/admin/produits"),f2=e=>pe.get(`/admin/produits/${e}`),p2=e=>pe.post("/admin/produits",e,{headers:{"Content-Type":"multipart/form-data"}}),m2=(e,t)=>pe.post(`/admin/produits/${e}`,t,{headers:{"Content-Type":"multipart/form-data"}}),h2=e=>pe.delete(`/admin/produits/${e}`),g2=e=>pe.get(`/admin/produits/${e}/medias`),v2=(e,t)=>pe.post(`/admin/produits/${e}/medias`,t,{headers:{"Content-Type":"multipart/form-data"}}),y2=e=>pe.delete(`/admin/medias/${e}`),x2=e=>pe.post("/demandes",e),Xg=()=>pe.get("/admin/demandes"),b2=(e,t)=>pe.put(`/admin/demandes/${e}/statut`,{statut:t}),w2=e=>pe.delete(`/admin/demandes/${e}`),j2=["Entreprise","Éducation","Établissement de santé","Restauration","Point de vente","Administration","Autre"],S2=["1-9","10-19","20-49","50-100","100+"];function Vc({produitId:e=null,onSuccess:t}){const[r]=P1(),[n,i]=w.useState([]),[o,s]=w.useState({nom:"",email:"",telephone:"",raison_sociale:"",secteur:"",nombre_ecrans:"",question:"",produit_id:e||""}),[l,u]=w.useState(!1),[c,d]=w.useState(!1),[f,p]=w.useState("");w.useEffect(()=>{e||Wc().then(v=>{var g;const j=Array.isArray(v.data)?v.data:((g=v.data)==null?void 0:g.produits)||[];i(j)}).catch(()=>{})},[e]),w.useEffect(()=>{const v=r.get("secteur");if(!v)return;const j=decodeURIComponent(v).trim().toLowerCase(),h={entreprise:"Entreprise",education:"Éducation",éducation:"Éducation","etablissement-de-sante":"Établissement de santé","établissement-de-santé":"Établissement de santé",sante:"Établissement de santé",santé:"Établissement de santé",restauration:"Restauration","point-de-vente":"Point de vente","points-de-vente":"Point de vente",administration:"Administration",autre:"Autre"}[j]||v;s(b=>({...b,secteur:h}))},[r]),w.useEffect(()=>{e&&s(v=>({...v,produit_id:e}))},[e]);const y=v=>{const{name:j,value:g}=v.target;s(h=>({...h,[j]:g}))},x=async v=>{var j,g;v.preventDefault(),u(!0),p("");try{const h={...o,produit_id:o.produit_id||e||""};h.produit_id||delete h.produit_id,await x2(h),d(!0),t==null||t(),s({nom:"",email:"",telephone:"",raison_sociale:"",secteur:o.secteur||"",nombre_ecrans:"",question:"",produit_id:e||""})}catch(h){p(((g=(j=h.response)==null?void 0:j.data)==null?void 0:g.message)||"Une erreur est survenue. Veuillez réessayer.")}finally{u(!1)}};return c?a.jsxs("div",{id:"demande-form",className:"demande-form-card success-card",children:[a.jsx("div",{className:"success-icon",children:a.jsx(k2,{})}),a.jsx("h3",{children:"Demande envoyée"}),a.jsx("p",{children:"Notre équipe vous contactera sous 24h pour discuter de votre projet."}),a.jsx("button",{onClick:()=>d(!1),className:"btn btn-secondary btn-sm",style:{marginTop:"1.5rem"},children:"Nouvelle demande"}),a.jsx(mp,{})]}):a.jsxs("div",{id:"demande-form",className:"demande-form-card",children:[a.jsx("h3",{children:"Demander une démonstration"}),a.jsx("p",{className:"form-intro",children:"Remplissez ce formulaire et nous vous recontactons sous 24h."}),f&&a.jsx("div",{className:"error-message",style:{marginBottom:"1rem"},children:f}),a.jsxs("form",{onSubmit:x,children:[a.jsxs("div",{className:"form-grid-2",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Nom complet *"}),a.jsx("input",{name:"nom",value:o.nom,onChange:y,placeholder:"Prénom et nom",className:"form-input",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"E-mail *"}),a.jsx("input",{name:"email",type:"email",value:o.email,onChange:y,placeholder:"votre@email.com",className:"form-input",required:!0})]})]}),a.jsxs("div",{className:"form-grid-2",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Téléphone"}),a.jsx("input",{name:"telephone",type:"tel",value:o.telephone,onChange:y,placeholder:"+212 6 XX XX XX XX",className:"form-input"})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Raison sociale"}),a.jsx("input",{name:"raison_sociale",value:o.raison_sociale,onChange:y,placeholder:"Votre entreprise",className:"form-input"})]})]}),a.jsxs("div",{className:"form-grid-2",children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Secteur d'activité *"}),a.jsxs("select",{name:"secteur",value:o.secteur,onChange:y,className:"form-select",required:!0,children:[a.jsx("option",{value:"",children:"Sélectionner"}),j2.map(v=>a.jsx("option",{value:v,children:v},v))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Nombre d'écrans *"}),a.jsxs("select",{name:"nombre_ecrans",value:o.nombre_ecrans,onChange:y,className:"form-select",required:!0,children:[a.jsx("option",{value:"",children:"Sélectionner"}),S2.map(v=>a.jsx("option",{value:v,children:v},v))]})]})]}),!e&&n.length>0&&a.jsxs("div",{className:"form-group",style:{marginBottom:"0.9rem"},children:[a.jsx("label",{className:"form-label",children:"Produit concerné"}),a.jsxs("select",{name:"produit_id",value:o.produit_id,onChange:y,className:"form-select",children:[a.jsx("option",{value:"",children:"Aucun produit spécifique"}),n.map(v=>a.jsx("option",{value:v.id,children:v.nom},v.id))]})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:"1.5rem"},children:[a.jsx("label",{className:"form-label",children:"Votre projet / question *"}),a.jsx("textarea",{name:"question",value:o.question,onChange:y,placeholder:"Décrivez votre besoin en quelques lignes.",className:"form-textarea",required:!0})]}),a.jsx("button",{type:"submit",disabled:l,className:"btn btn-primary btn-full",children:l?"Envoi en cours...":"Envoyer la demande"})]}),a.jsx(mp,{})]})}function mp(){return a.jsx("style",{children:`
      .demande-form-card {
        background: #ffffff;
        border: 1px solid rgba(17,17,17,0.08);
        border-radius: var(--radius-xl);
        padding: clamp(1.2rem, 3vw, 2.5rem);
        position: relative;
        overflow: hidden;
        scroll-margin-top: 100px;
        box-shadow: 0 20px 50px rgba(17,17,17,0.08);
      }

      .demande-form-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 12%;
        right: 12%;
        height: 4px;
        background: var(--n-orange);
        border-radius: 0 0 10px 10px;
      }

      .demande-form-card h3 {
        font-family: var(--font-head);
        font-size: 1.2rem;
        font-weight: 800;
        color: #111;
        margin-bottom: 0.45rem;
      }

      .form-intro,
      .success-card p {
        font-size: 0.9rem;
        color: var(--n-gray);
        margin-bottom: 1.8rem;
        line-height: 1.6;
      }

      .demande-form-card .form-label {
        color: #333;
      }

      .demande-form-card .form-input,
      .demande-form-card .form-select,
      .demande-form-card .form-textarea {
        background: #ffffff;
        color: #111;
        border: 1px solid rgba(17,17,17,0.14);
      }

      .demande-form-card .form-input:focus,
      .demande-form-card .form-select:focus,
      .demande-form-card .form-textarea:focus {
        border-color: rgba(255,75,43,0.65);
        box-shadow: 0 0 0 3px rgba(255,75,43,0.12);
      }

      .success-card {
        text-align: center;
      }

      .success-icon {
        width: 64px;
        height: 64px;
        margin: 0 auto 1rem;
        border-radius: 50%;
        background: #fff3ef;
        border: 1px solid rgba(255,75,43,0.2);
        color: var(--n-orange);
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `})}function k2(){return a.jsx("svg",{width:"30",height:"30",viewBox:"0 0 24 24",fill:"none",children:a.jsx("path",{d:"M20 6 9 17l-5-5",stroke:"currentColor",strokeWidth:"2.3",strokeLinecap:"round",strokeLinejoin:"round"})})}function N2(){return a.jsxs("section",{className:"section contact-home-light",children:[a.jsx("div",{className:"contact-container",children:a.jsxs("div",{className:"contact-grid",children:[a.jsxs("div",{className:"reveal",children:[a.jsx("div",{className:"section-tag",children:"Contact"}),a.jsxs("h2",{className:"section-title",children:["Parlons de",a.jsx("br",{}),a.jsx("span",{className:"accent",children:"votre projet"})]}),a.jsx("p",{className:"section-sub contact-sub",children:"Décrivez-nous vos besoins et un expert Nexav vous recontacte sous 24h pour construire votre solution sur mesure."}),a.jsx("div",{className:"contact-list",children:[{icon:"pin",label:"Adresse",value:"Casablanca, Maroc"},{icon:"mail",label:"E-mail",value:"contact@nexav.ma"},{icon:"phone",label:"Téléphone",value:"+212 5XX XX XX XX"}].map(e=>a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:a.jsx(hp,{name:e.icon})}),a.jsxs("div",{children:[a.jsx("div",{className:"contact-label",children:e.label}),a.jsx("div",{className:"contact-value",children:e.value})]})]},e.label))}),a.jsx("div",{className:"contact-badges",children:[{icon:"time",text:"Réponse sous 24h garantie"},{icon:"target",text:"Conseils personnalisés gratuits"},{icon:"lock",text:"Données confidentielles"}].map(e=>a.jsxs("div",{className:"contact-badge",children:[a.jsx(hp,{name:e.icon,small:!0}),a.jsx("span",{children:e.text})]},e.text))})]}),a.jsx("div",{className:"reveal reveal-delay-2 contact-form-box",children:a.jsx(Vc,{})})]})}),a.jsx("style",{children:`
        .contact-home-light {
          background: #f5f5f5;
          position: relative;
          overflow: hidden;
        }

        .contact-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.35fr);
          gap: 5rem;
          align-items: start;
        }

        .contact-sub {
          margin-bottom: 2.5rem;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.3rem;
        }

        .contact-item {
          display: flex;
          gap: 0.9rem;
          align-items: flex-start;
        }

        .contact-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid rgba(255,75,43,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--n-orange);
          flex-shrink: 0;
          box-shadow: 0 10px 25px rgba(17,17,17,0.05);
        }

        .contact-label {
          font-size: 0.72rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 0.2rem;
          font-weight: 800;
        }

        .contact-value {
          font-size: 0.95rem;
          color: #111;
          overflow-wrap: anywhere;
          font-weight: 700;
        }

        .contact-badges {
          margin-top: 2rem;
          padding: 1.25rem;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 14px 35px rgba(17,17,17,0.05);
        }

        .contact-badge {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: #263241;
          font-weight: 700;
        }

        .contact-badge svg {
          color: var(--n-orange);
          flex-shrink: 0;
        }

        .contact-form-box > div {
          background: #fff !important;
          border-color: rgba(17,17,17,0.1) !important;
          box-shadow: 0 22px 60px rgba(17,17,17,0.08);
        }

        @media (max-width: 980px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 520px) {
          .contact-badges {
            padding: 1rem;
          }

          .contact-icon {
            width: 38px;
            height: 38px;
          }
        }
      `})]})}function hp({name:e,small:t=!1}){const r=t?16:19,n={width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"};return e==="pin"?a.jsxs("svg",{...n,children:[a.jsx("path",{d:"M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"}),a.jsx("circle",{cx:"12",cy:"9",r:"2.3"})]}):e==="mail"?a.jsxs("svg",{...n,children:[a.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),a.jsx("path",{d:"m4 7 8 6 8-6"})]}):e==="phone"?a.jsx("svg",{...n,children:a.jsx("path",{d:"M22 16.9v2.3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.8 2 2 0 0 1 4.1 1.6h2.3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1l-1 1a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z"})}):e==="time"?a.jsxs("svg",{...n,children:[a.jsx("circle",{cx:"12",cy:"12",r:"9"}),a.jsx("path",{d:"M12 7v5l3 2"})]}):e==="target"?a.jsxs("svg",{...n,children:[a.jsx("circle",{cx:"12",cy:"12",r:"9"}),a.jsx("circle",{cx:"12",cy:"12",r:"5"}),a.jsx("circle",{cx:"12",cy:"12",r:"1.5"})]}):a.jsxs("svg",{...n,children:[a.jsx("rect",{x:"5",y:"11",width:"14",height:"10",rx:"2"}),a.jsx("path",{d:"M8 11V8a4 4 0 0 1 8 0v3"})]})}function E2(){return a.jsxs(Pr,{children:[a.jsx(Hj,{}),a.jsx(Kj,{}),a.jsx(Gj,{}),a.jsx(e2,{}),a.jsx(i2,{}),a.jsx(a2,{}),a.jsx(c2,{}),a.jsx(N2,{})]})}function _s({tag:e,title:t,subtitle:r,children:n}){return a.jsxs("section",{className:"page-header-light",children:[a.jsx("div",{className:"page-header-shape one"}),a.jsx("div",{className:"page-header-shape two"}),a.jsxs("div",{className:"page-header-content",children:[e&&a.jsx("div",{className:"section-tag",children:e}),a.jsx("h1",{className:"section-title",children:t}),r&&a.jsx("p",{className:"section-sub",children:r}),n&&a.jsx("div",{className:"page-header-children",children:n})]}),a.jsx("style",{children:`
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
      `})]})}function Yg({produit:e}){const t=e.image_principale?`/storage/${e.image_principale}`:null;return a.jsxs(re,{to:`/produits/${e.id}`,className:"product-card",children:[a.jsxs("div",{className:"product-card-image",children:[t?a.jsx("div",{className:"card-img-wrap",style:{backgroundImage:`url(${t})`}}):a.jsx("div",{className:"product-card-placeholder",children:a.jsx(_2,{})}),(e.type_produit||e.typeProduit)&&a.jsx("div",{className:"product-card-badge",children:(e.type_produit||e.typeProduit).nom})]}),a.jsxs("div",{className:"product-card-content",children:[a.jsx("h3",{children:e.nom}),e.description_courte&&a.jsx("p",{children:e.description_courte}),a.jsxs("div",{className:"product-card-footer",children:[a.jsxs("span",{children:["Voir les détails",a.jsx(C2,{})]}),e.video_url&&a.jsx("small",{children:"Vidéo dispo."})]})]}),a.jsx("style",{children:`
        .product-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-lg);
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          transition: 0.25s ease;
          box-shadow: 0 10px 26px rgba(17,17,17,0.05);
        }

        .product-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255,75,43,0.25);
          box-shadow: 0 18px 42px rgba(17,17,17,0.1);
        }

        .product-card:hover .card-img-wrap {
          transform: scale(1.04);
        }

        .product-card-image {
          height: 170px;
          overflow: hidden;
          background: #f3f4f6;
          position: relative;
          flex-shrink: 0;
        }

        .card-img-wrap {
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 0.45s ease;
        }

        .product-card-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--n-orange);
          background: #f6f6f6;
        }

        .product-card-badge {
          position: absolute;
          top: 0.75rem;
          left: 0.75rem;
          background: rgba(17,17,17,0.75);
          border-radius: 999px;
          padding: 0.25rem 0.7rem;
          font-size: 0.7rem;
          font-weight: 800;
          color: #fff;
          backdrop-filter: blur(8px);
        }

        .product-card-content {
          padding: 1.1rem 1.2rem 1.2rem;
          display: flex;
          flex-direction: column;
        }

        .product-card-content h3 {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 800;
          color: #111;
          line-height: 1.35;
          margin-bottom: 0.55rem;
        }

        .product-card-content p {
          font-size: 0.84rem;
          color: var(--n-gray);
          line-height: 1.55;
          margin-bottom: 1rem;
        }

        .product-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
          margin-top: 0.6rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(17,17,17,0.07);
        }

        .product-card-footer span {
          font-size: 0.82rem;
          color: var(--n-orange);
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
        }

        .product-card-footer small {
          font-size: 0.72rem;
          color: var(--n-gray);
          white-space: nowrap;
        }
      `})]})}function C2(){return a.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M2 6h8M6 2l4 4-4 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function _2(){return a.jsxs("svg",{width:"38",height:"38",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("rect",{x:"3",y:"5",width:"18",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1.7"}),a.jsx("path",{d:"M8 21h8M12 17v4",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round"})]})}const Gg=()=>pe.get("/types-produits"),Ps=()=>pe.get("/admin/types-produits"),P2=e=>pe.post("/admin/types-produits",e),R2=(e,t)=>pe.put(`/admin/types-produits/${e}`,t),T2=e=>pe.delete(`/admin/types-produits/${e}`),Jg=()=>pe.get("/admin/sous-types-produits"),z2=e=>pe.post("/admin/sous-types-produits",e),L2=(e,t)=>pe.put(`/admin/sous-types-produits/${e}`,t),D2=e=>pe.delete(`/admin/sous-types-produits/${e}`),Zg=()=>pe.get("/sous-types-produits");function M2(){const[e,t]=w.useState([]),[r,n]=w.useState([]),[i,o]=w.useState([]),[s,l]=w.useState("all"),[u,c]=w.useState("all"),[d,f]=w.useState(""),[p,y]=w.useState(!0),[x,v]=w.useState("");w.useEffect(()=>{Promise.all([Wc(),Gg(),Zg()]).then(([N,T,m])=>{t(Array.isArray(N.data)?N.data:N.data.produits||[]),n(Array.isArray(T.data)?T.data:T.data.types||[]),o(Array.isArray(m.data)?m.data:m.data.sous_types||m.data.sousTypes||[])}).catch(()=>v("Impossible de charger les produits.")).finally(()=>y(!1))},[]);const j=Array.isArray(e)?e:[],g=Array.isArray(i)?i:[],h=g.filter(N=>{var m,C;const T=(N==null?void 0:N.type_produit_id)??((m=N==null?void 0:N.typeProduit)==null?void 0:m.id)??((C=N==null?void 0:N.type_produit)==null?void 0:C.id);return String(T)===String(s)}),b=N=>{l(N),c("all")},S=j.filter(N=>{var _,z;const T=s==="all"||String(N.type_produit_id)===String(s),m=u==="all"||String(N.sous_type_produit_id)===String(u),C=!d||((_=N.nom)==null?void 0:_.toLowerCase().includes(d.toLowerCase()))||((z=N.description_courte)==null?void 0:z.toLowerCase().includes(d.toLowerCase()));return T&&m&&C&&N.actif!==!1});return a.jsxs(Pr,{children:[a.jsx(_s,{tag:"Catalogue",title:"Nos solutions digitales",subtitle:"Découvrez l'ensemble de nos produits et solutions pour équiper et connecter vos espaces.",children:a.jsxs("div",{className:"products-search",children:[a.jsx("span",{children:a.jsx(gp,{})}),a.jsx("input",{type:"text",placeholder:"Rechercher un produit...",value:d,onChange:N=>f(N.target.value),className:"form-input"})]})}),a.jsxs("div",{className:"products-filters",children:[a.jsxs("div",{className:"products-filters-inner",children:[a.jsx(Wo,{label:"Tous",active:s==="all",onClick:()=>b("all")}),r.map(N=>a.jsx(Wo,{label:N.nom,active:String(s)===String(N.id),onClick:()=>b(N.id)},N.id))]}),s!=="all"&&h.length>0&&a.jsxs("div",{className:"subtype-filter-inner",children:[a.jsx("span",{className:"subtype-label",children:"Sous-types :"}),a.jsx(Wo,{label:"Tous",active:u==="all",onClick:()=>c("all"),small:!0}),h.map(N=>a.jsx(Wo,{label:N.nom,active:String(u)===String(N.id),onClick:()=>c(N.id),small:!0},N.id))]})]}),a.jsx("section",{className:"section products-section",children:a.jsxs("div",{className:"products-container",children:[p&&a.jsxs("div",{className:"loading-center",children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Chargement des produits..."})]}),x&&a.jsx("div",{className:"error-message products-error",children:x}),!p&&!x&&a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:"products-count",children:[S.length," produit",S.length>1?"s":""," trouvé",S.length>1?"s":"",d&&a.jsxs(a.Fragment,{children:[" ","pour ",a.jsx("strong",{children:d})]})]}),S.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:a.jsx(gp,{})}),a.jsx("h3",{children:"Aucun produit trouvé"}),a.jsx("p",{style:{fontSize:"0.9rem",marginTop:"0.5rem"},children:"Essayez de modifier vos filtres ou votre recherche."})]}):a.jsx("div",{className:"products-grid",children:S.map(N=>a.jsx(Yg,{produit:N},N.id))})]})]})}),!p&&r.length>0&&a.jsx("section",{className:"section products-types",children:a.jsxs("div",{className:"products-container",children:[a.jsxs("div",{className:"reveal products-types-header",children:[a.jsx("div",{className:"section-tag",children:"Par catégorie"}),a.jsx("h2",{className:"section-title",children:"Parcourir par type de solution"})]}),a.jsx("div",{className:"types-grid",children:r.map(N=>(g.filter(T=>{var C,_;const m=(T==null?void 0:T.type_produit_id)??((C=T==null?void 0:T.typeProduit)==null?void 0:C.id)??((_=T==null?void 0:T.type_produit)==null?void 0:_.id);return String(m)===String(N.id)}),a.jsx("div",{className:"type-card",children:a.jsxs(re,{to:`/produits/type/${N.slug}`,className:"type-card-main",children:[a.jsx("div",{children:N.nom}),N.description&&a.jsx("p",{children:N.description}),a.jsxs("span",{children:["Voir les produits ",a.jsx(A2,{})]})]})},N.id)))})]})}),a.jsx("style",{children:`
        .products-search {
          position: relative;
          max-width: 460px;
          margin: 0 auto;
        }

        .products-search span {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--n-gray);
          z-index: 1;
        }

        .products-search input {
          padding-left: 2.8rem;
          border-radius: 999px;
          background: #fff;
          box-shadow: 0 12px 30px rgba(17,17,17,0.06);
        }

        .products-filters {
          background: #fff;
          padding: 1.45rem 5%;
          border-bottom: 1px solid rgba(17,17,17,0.08);
          position: sticky;
          top: var(--nav-h);
          z-index: 30;
        }

        .products-filters-inner,
        .subtype-filter-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .subtype-filter-inner {
          margin-top: 0.85rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(17,17,17,0.07);
        }

        .subtype-label {
          font-size: 0.78rem;
          color: var(--n-gray);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-right: 0.3rem;
        }

        .products-section {
          background: #fff;
        }

        .products-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .products-error {
          max-width: 420px;
          margin: 0 auto;
        }

        .products-count {
          font-size: 0.9rem;
          color: var(--n-gray);
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .products-count strong {
          color: var(--n-orange);
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 1.35rem;
        }

        .products-types {
          background: #f5f5f5;
        }

        .products-types-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
        }

        .type-card {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-md);
          padding: 1.4rem 1.2rem;
          transition: var(--transition);
          box-shadow: 0 10px 24px rgba(17,17,17,0.04);
        }

        .type-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,75,43,0.28);
          box-shadow: 0 18px 42px rgba(17,17,17,0.08);
        }

        .type-card-main {
          display: block;
          text-decoration: none;
        }

        .type-card-main div {
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.45rem;
        }

        .type-card-main p {
          font-size: 0.84rem;
          color: var(--n-gray);
          line-height: 1.55;
        }

        .type-card-main span {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          margin-top: 0.9rem;
          font-size: 0.82rem;
          color: var(--n-orange);
          font-weight: 800;
        }

        .type-sub-list {
          margin-top: 1rem;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(17,17,17,0.08);
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .type-sub-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.45rem 0.6rem;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          color: #374151;
          text-decoration: none;
          background: #fafafa;
          border: 1px solid rgba(17,17,17,0.06);
          transition: 0.2s;
        }

        .type-sub-link:hover {
          color: var(--n-orange);
          background: #fff2ee;
          border-color: rgba(255,75,43,0.18);
        }
      `})]})}function Wo({label:e,active:t,onClick:r,small:n=!1}){return a.jsxs("button",{onClick:r,className:t?"filter-tab active":"filter-tab",children:[e,a.jsx("style",{children:`
        .filter-tab {
          padding: ${n?"0.38rem 0.8rem":"0.5rem 1rem"};
          border-radius: 999px;
          font-size: ${n?"0.78rem":"0.86rem"};
          font-weight: 800;
          border: 1px solid rgba(17,17,17,0.1);
          background: #fff;
          color: #263241;
          cursor: pointer;
          transition: var(--transition);
          font-family: var(--font-body);
        }

        .filter-tab:hover,
        .filter-tab.active {
          border-color: var(--n-orange);
          background: var(--n-orange);
          color: #fff;
        }
      `})]})}function gp(){return a.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[a.jsx("circle",{cx:"11",cy:"11",r:"7"}),a.jsx("path",{d:"m20 20-3.5-3.5"})]})}function A2(){return a.jsx("svg",{width:"13",height:"13",viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M2 6h8M6 2l4 4-4 4",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})})}function O2(){const{slug:e}=Tc(),[t,r]=w.useState(null),[n,i]=w.useState([]),[o,s]=w.useState([]),[l,u]=w.useState([]),[c,d]=w.useState("all"),[f,p]=w.useState(!0),[y,x]=w.useState("");w.useEffect(()=>{p(!0),x(""),d("all"),Promise.all([Wc(),Gg(),Zg()]).then(([g,h,b])=>{const S=Array.isArray(h.data)?h.data:h.data.types||[],N=Array.isArray(g.data)?g.data:g.data.produits||[],T=Array.isArray(b.data)?b.data:b.data.sous_types||[],m=S.find(_=>_.slug===e);if(s(S),r(m||null),u(T),!m){i([]);return}const C=N.filter(_=>{var V,J;const z=String(_.type_produit_id)===String(m.id),W=((V=_.type_produit)==null?void 0:V.slug)===e||((J=_.typeProduit)==null?void 0:J.slug)===e;return(z||W)&&_.actif!==!1});i(C)}).catch(()=>x("Impossible de charger cette catégorie.")).finally(()=>p(!1))},[e]);const v=l.filter(g=>{var b,S;const h=g.type_produit_id||((b=g.typeProduit)==null?void 0:b.id)||((S=g.type_produit)==null?void 0:S.id);return t&&String(h)===String(t.id)}),j=n.filter(g=>c==="all"?!0:String(g.sous_type_produit_id)===String(c));return a.jsxs(Pr,{children:[a.jsx(_s,{tag:"Catégorie",title:t?t.nom:"Solutions",subtitle:(t==null?void 0:t.description)||"Découvrez nos produits par catégorie.",children:a.jsx(re,{to:"/produits",style:{color:"var(--n-orange)",fontWeight:800},children:"← Retour au catalogue"})}),o.length>0&&a.jsxs("div",{className:"type-filter-bar",children:[a.jsxs("div",{className:"type-filter-inner",children:[a.jsx("span",{children:"Catégories :"}),o.map(g=>a.jsx(re,{to:`/produits/type/${g.slug}`,className:g.slug===e?"type-filter active":"type-filter",children:g.nom},g.id))]}),v.length>0&&a.jsxs("div",{className:"subtype-filter-inner",children:[a.jsx("span",{children:"Sous-types :"}),a.jsx("button",{onClick:()=>d("all"),className:c==="all"?"type-filter active small":"type-filter small",children:"Tous"}),v.map(g=>a.jsx("button",{onClick:()=>d(g.id),className:String(c)===String(g.id)?"type-filter active small":"type-filter small",children:g.nom},g.id))]})]}),a.jsx("section",{className:"section produits-type-section",children:a.jsxs("div",{className:"produits-type-container",children:[f&&a.jsxs("div",{className:"loading-center",children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Chargement..."})]}),y&&a.jsx("div",{className:"error-message",style:{maxWidth:420,margin:"0 auto"},children:y}),!f&&!y&&j.length===0&&a.jsxs("div",{className:"empty-state",children:[a.jsx("h3",{children:"Aucun produit dans cette catégorie"}),a.jsx("p",{style:{fontSize:"0.9rem",marginTop:"0.5rem"},children:"Essayez un autre sous-type."}),a.jsx(re,{to:"/produits",className:"btn btn-secondary btn-sm",style:{marginTop:"1.5rem"},children:"Voir tous les produits"})]}),!f&&!y&&j.length>0&&a.jsxs(a.Fragment,{children:[a.jsxs("p",{className:"products-count",children:[j.length," produit",j.length>1?"s":""," disponible",j.length>1?"s":""]}),a.jsx("div",{className:"products-grid",children:j.map(g=>a.jsx(Yg,{produit:g},g.id))})]})]})}),a.jsx("style",{children:`
        .type-filter-bar {
          background: #fff;
          padding: 1.4rem 5%;
          border-bottom: 1px solid rgba(17,17,17,0.08);
          position: sticky;
          top: var(--nav-h);
          z-index: 30;
        }

        .type-filter-inner,
        .subtype-filter-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .subtype-filter-inner {
          margin-top: 0.85rem;
          padding-top: 0.85rem;
          border-top: 1px solid rgba(17,17,17,0.07);
        }

        .type-filter-inner span,
        .subtype-filter-inner span {
          font-size: 0.78rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
          margin-right: 0.5rem;
        }

        .type-filter {
          padding: 0.45rem 1rem;
          border-radius: 999px;
          font-size: 0.84rem;
          font-weight: 800;
          border: 1px solid rgba(17,17,17,0.1);
          background: #fff;
          color: #263241;
          transition: var(--transition);
          text-decoration: none;
          cursor: pointer;
          font-family: var(--font-body);
        }

        .type-filter.small {
          padding: 0.35rem 0.8rem;
          font-size: 0.78rem;
        }

        .type-filter:hover,
        .type-filter.active {
          background: var(--n-orange);
          border-color: var(--n-orange);
          color: #fff;
        }

        .produits-type-section {
          background: #fff;
        }

        .produits-type-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .products-count {
          font-size: 0.9rem;
          color: var(--n-gray);
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
          gap: 1.35rem;
        }
      `})]})}function F2(){const{id:e}=Tc(),[t,r]=w.useState(null),[n,i]=w.useState(!0),[o,s]=w.useState(""),[l,u]=w.useState(null);if(w.useEffect(()=>{d2(e).then(p=>{var j;const y=((j=p.data)==null?void 0:j.produit)||p.data;r(y);const v=(y.media_produits||y.mediaProduits||[]).find(g=>g.type_media==="image");u(v?`/storage/${v.chemin_media}`:y.image_principale?`/storage/${y.image_principale}`:null)}).catch(()=>s("Produit introuvable.")).finally(()=>i(!1))},[e]),n)return a.jsx(Pr,{children:a.jsxs("div",{className:"loading-center",style:{minHeight:"100vh"},children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Chargement du produit..."})]})});if(o||!t)return a.jsx(Pr,{children:a.jsx("div",{className:"loading-center",style:{minHeight:"100vh"},children:a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:"!"}),a.jsx("h3",{children:o||"Produit introuvable"}),a.jsx(re,{to:"/produits",className:"btn btn-secondary btn-sm",style:{marginTop:"1.5rem"},children:"Retour aux produits"})]})})});const c=t.media_produits||t.mediaProduits||[],d=c.filter(p=>p.type_media==="image"),f=c.filter(p=>p.type_media==="video");return a.jsxs(Pr,{children:[a.jsx("div",{className:"product-breadcrumb",children:a.jsxs("div",{className:"product-breadcrumb-inner",children:[a.jsx(re,{to:"/",children:"Accueil"}),a.jsx("span",{children:"›"}),a.jsx(re,{to:"/produits",children:"Produits"}),t.type_produit&&a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"›"}),a.jsx(re,{to:`/produits/type/${t.type_produit.slug}`,children:t.type_produit.nom})]}),a.jsx("span",{children:"›"}),a.jsx("strong",{children:t.nom})]})}),a.jsx("section",{className:"section product-detail-light",children:a.jsxs("div",{style:{maxWidth:1280,margin:"0 auto"},children:[a.jsxs("div",{className:"product-detail-grid",children:[a.jsxs("div",{className:"product-media",children:[a.jsx("div",{className:"product-main-image",children:l?a.jsx("img",{src:l,alt:t.nom}):a.jsx(I2,{})}),(t.image_principale||d.length>0)&&a.jsxs("div",{className:"product-thumbs",children:[t.image_principale&&a.jsx(vp,{src:`/storage/${t.image_principale}`,active:l===`/storage/${t.image_principale}`,onClick:()=>u(`/storage/${t.image_principale}`)}),d.map(p=>a.jsx(vp,{src:`/storage/${p.chemin_media}`,active:l===`/storage/${p.chemin_media}`,onClick:()=>u(`/storage/${p.chemin_media}`)},p.id))]}),(t.video_url||f.length>0)&&a.jsxs("div",{className:"product-videos",children:[a.jsx("div",{className:"product-video-label",children:"Vidéos"}),t.video_url&&a.jsx(yp,{url:t.video_url,title:t.nom}),f.map(p=>a.jsx(yp,{url:`/storage/${p.chemin_media}`,title:t.nom},p.id))]})]}),a.jsxs("div",{className:"product-info",children:[t.type_produit&&a.jsx(re,{to:`/produits/type/${t.type_produit.slug}`,className:"badge badge-cyan",children:t.type_produit.nom}),a.jsx("h1",{children:t.nom}),t.description_courte&&a.jsx("p",{className:"product-short",children:t.description_courte}),a.jsx("div",{className:"product-status",children:a.jsx("span",{className:`badge ${t.actif?"badge-green":"badge-gray"}`,children:t.actif?"Disponible":"Indisponible"})}),t.description_longue&&a.jsxs("div",{className:"product-long",children:[a.jsx("h3",{children:"Description détaillée"}),a.jsx("div",{children:t.description_longue})]}),a.jsxs("div",{className:"product-actions",children:[a.jsx("a",{href:"#demande",className:"btn btn-primary",children:"Demander une démonstration"}),a.jsx(re,{to:"/contact#demande-form",className:"btn btn-secondary",children:"Poser une question"})]})]})]}),a.jsxs("div",{id:"demande",className:"product-form-block",children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[a.jsx("div",{className:"section-tag",children:"Intéressé ?"}),a.jsx("h2",{className:"section-title",children:"Demander une démonstration"}),a.jsx("p",{className:"section-sub",style:{maxWidth:480,margin:"0 auto"},children:"Remplissez le formulaire et notre équipe vous contactera sous 24h."})]}),a.jsx(Vc,{produitId:t.id,produitName:t.nom})]})]})}),a.jsx("style",{children:`
        .product-detail-light {
          background: #ffffff;
        }

        .product-breadcrumb {
          padding: calc(var(--nav-h) + 2rem) 5% 1.2rem;
          background: #fff;
          border-bottom: 1px solid rgba(17,17,17,0.06);
        }

        .product-breadcrumb-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          gap: 0.5rem;
          align-items: center;
          flex-wrap: wrap;
          font-size: 0.82rem;
          color: var(--n-gray);
        }

        .product-breadcrumb-inner a {
          color: var(--n-gray);
        }

        .product-breadcrumb-inner strong {
          color: #111;
        }

        .product-detail-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: 5.5rem;
          margin-bottom: 6rem;
          align-items: start;
        }

        .product-media,
        .product-info {
          min-width: 0;
        }

        .product-main-image {
          height: 430px;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: #f4f4f4;
          border: 1px solid rgba(17,17,17,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--n-orange);
          box-shadow: 0 18px 45px rgba(17,17,17,0.08);
        }

        .product-main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-thumbs {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1.2rem;
        }

        .product-videos {
          margin-top: 2.2rem;
        }

        .product-video-label {
          font-size: 0.78rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
          margin-bottom: 0.8rem;
        }

        .product-info {
          padding-top: 1.2rem;
        }

        .product-info h1 {
          font-family: var(--font-head);
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.08;
          color: #111;
          margin: 1.4rem 0 1.4rem;
          font-weight: 900;
          letter-spacing: -0.04em;
        }

        .product-short {
          color: var(--n-gray);
          font-size: 1.08rem;
          line-height: 1.9;
          margin-bottom: 1.6rem;
        }

        .product-status {
          display: flex;
          gap: 0.6rem;
          margin-bottom: 2.4rem;
          flex-wrap: wrap;
        }

        .product-long {
          background: #fff;
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          margin-bottom: 2.4rem;
          box-shadow: 0 12px 30px rgba(17,17,17,0.05);
        }

        .product-long h3 {
          color: #111;
          font-family: var(--font-head);
          font-size: 1rem;
          font-weight: 800;
          margin-bottom: 0.9rem;
        }

        .product-long div {
          color: #444;
          line-height: 1.85;
          font-size: 0.95rem;
        }

        .product-actions {
          display: flex;
          gap: 0.9rem;
          flex-wrap: wrap;
          margin-top: 0.5rem;
        }

        .product-form-block {
          max-width: 760px;
          margin: 0 auto;
          scroll-margin-top: 100px;
        }

        .badge-cyan {
          background: #fff3ef;
          border: 1px solid rgba(255,75,43,0.2);
          color: var(--n-orange);
        }

        .badge-green {
          background: #ecfdf5;
          color: #059669;
        }

        .badge-gray {
          background: #f3f4f6;
          color: #6b7280;
        }

        @media (max-width: 900px) {
          .product-detail-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .product-main-image {
            height: 330px;
          }

          .product-info {
            padding-top: 0;
          }
        }

        @media (max-width: 520px) {
          .product-main-image {
            height: 250px;
          }

          .product-actions {
            flex-direction: column;
          }

          .product-actions .btn {
            width: 100%;
          }
        }
      `})]})}function vp({src:e,active:t,onClick:r}){return a.jsx("button",{type:"button",onClick:r,style:{width:78,height:58,borderRadius:10,overflow:"hidden",border:`2px solid ${t?"var(--n-orange)":"rgba(17,17,17,0.12)"}`,cursor:"pointer",flexShrink:0,transition:"border-color 0.2s",backgroundImage:`url(${e})`,backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"#f4f4f4"},"aria-label":"Changer l'image du produit"})}function yp({url:e,title:t}){var i;const r=e.includes("youtube.com")||e.includes("youtu.be"),n=r&&((i=e.match(/(?:v=|youtu\.be\/)([^&?/]+)/))==null?void 0:i[1])||"";return a.jsxs("div",{className:"video-frame",children:[r?a.jsx("iframe",{src:`https://www.youtube.com/embed/${n}`,title:t,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}):a.jsx("video",{src:e,controls:!0}),a.jsx("style",{children:`
        .video-frame {
          border-radius: 14px;
          overflow: hidden;
          background: #000;
          margin-bottom: 0.8rem;
          aspect-ratio: 16 / 9;
          position: relative;
          border: 1px solid rgba(17,17,17,0.08);
        }

        .video-frame iframe,
        .video-frame video {
          width: 100%;
          height: 100%;
          border: none;
          object-fit: contain;
        }
      `})]})}function I2(){return a.jsxs("svg",{width:"56",height:"56",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",children:[a.jsx("rect",{x:"3",y:"5",width:"18",height:"12",rx:"2"}),a.jsx("path",{d:"M8 21h8M12 17v4"})]})}const U2=[{icon:"adresse",label:"Adresse",value:"Casablanca, Maroc"},{icon:"email",label:"E-mail",value:"contact@nexav.ma"},{icon:"phone",label:"Téléphone",value:"+212 645 56 33 87"},{icon:"time",label:"Horaires",value:"Lun – Ven : 9h – 18h"}],B2=[{q:"Combien de temps prend l’installation ?",a:"La mise en ligne d’un écran prend généralement moins de 3 minutes."},{q:"Peut-on gérer plusieurs sites ?",a:"Oui, vous pouvez gérer tous vos écrans depuis une seule interface."},{q:"Fonctionne sans internet ?",a:"Oui, les contenus restent affichés même hors connexion."},{q:"Proposez-vous un essai ?",a:"Oui, un essai gratuit est disponible sans engagement."}];function $2(){return a.jsxs(Pr,{children:[a.jsx(_s,{tag:"Contact",title:"Parlons de votre projet",subtitle:"Notre équipe est disponible pour répondre à toutes vos questions."}),a.jsx("section",{className:"section contact-light",children:a.jsx("div",{className:"contact-container",children:a.jsxs("div",{className:"contact-grid",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"contact-title",children:"Nous contacter"}),a.jsx("p",{className:"contact-text",children:"Une question ? Un projet ? Notre équipe vous répond sous 24h."}),a.jsx("div",{className:"contact-list",children:U2.map(e=>a.jsxs("div",{className:"contact-item",children:[a.jsx("div",{className:"contact-icon",children:a.jsx(V2,{name:e.icon})}),a.jsxs("div",{children:[a.jsx("div",{className:"contact-label",children:e.label}),a.jsx("div",{className:"contact-value",children:e.value})]})]},e.label))}),a.jsxs("div",{className:"contact-faq",children:[a.jsx("h3",{children:"Questions fréquentes"}),B2.map((e,t)=>a.jsx(W2,{faq:e},t))]})]}),a.jsx("div",{className:"contact-form",children:a.jsx(Vc,{})})]})})}),a.jsx("style",{children:`
        .contact-light {
          background: #ffffff;
        }

        .contact-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-title {
          font-family: var(--font-head);
          font-size: 1.5rem;
          font-weight: 800;
          color: #111;
          margin-bottom: 0.6rem;
        }

        .contact-text {
          color: var(--n-gray);
          margin-bottom: 2rem;
          line-height: 1.65;
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          gap: 0.85rem;
          align-items: center;
        }

        .contact-icon {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 50%;
          background: #fff3ef;
          border: 1px solid rgba(255,75,43,0.22);
          color: var(--n-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 20px rgba(255,75,43,0.08);
        }

        .contact-icon svg {
          display: block;
        }

        .contact-label {
          font-size: 0.72rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-weight: 800;
          margin-bottom: 0.15rem;
        }

        .contact-value {
          font-weight: 800;
          color: #111;
        }

        .contact-faq h3 {
          margin-bottom: 1rem;
          font-weight: 800;
          color: #111;
          font-family: var(--font-head);
        }

        .contact-form > div {
          background: #fff !important;
          border: 1px solid rgba(17,17,17,0.08) !important;
          box-shadow: 0 20px 50px rgba(17,17,17,0.08);
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function W2({faq:e}){const[t,r]=w.useState(!1);return a.jsxs("div",{className:"faq-item",children:[a.jsxs("button",{onClick:()=>r(!t),className:"faq-btn",children:[e.q,a.jsx("span",{children:t?"−":"+"})]}),t&&a.jsx("p",{className:"faq-content",children:e.a}),a.jsx("style",{children:`
        .faq-item {
          border: 1px solid rgba(17,17,17,0.08);
          border-radius: 12px;
          margin-bottom: 0.65rem;
          overflow: hidden;
          background: #fff;
        }

        .faq-btn {
          width: 100%;
          padding: 0.95rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          border: none;
          font-weight: 800;
          color: #111;
          cursor: pointer;
          text-align: left;
        }

        .faq-btn span {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #fff3ef;
          color: var(--n-orange);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-left: 0.8rem;
        }

        .faq-content {
          padding: 0 1rem 1rem;
          font-size: 0.88rem;
          color: var(--n-gray);
          line-height: 1.65;
        }
      `})]})}function V2({name:e}){const t={width:19,height:19,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};return e==="adresse"?a.jsxs("svg",{...t,children:[a.jsx("path",{d:"M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"}),a.jsx("circle",{cx:"12",cy:"9",r:"2.3"})]}):e==="email"?a.jsxs("svg",{...t,children:[a.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2"}),a.jsx("path",{d:"m4 7 8 6 8-6"})]}):e==="phone"?a.jsx("svg",{...t,children:a.jsx("path",{d:"M22 16.9v2.3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.8 2 2 0 0 1 4.1 1.6h2.3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1l-1 1a16 16 0 0 0 6 6l1-1a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z"})}):a.jsxs("svg",{...t,children:[a.jsx("circle",{cx:"12",cy:"12",r:"9"}),a.jsx("path",{d:"M12 7v5l3 2"})]})}const H2=[{value:"Éducation",title:"Éducation",image:$g,desc:"Les écoles, universités et centres de formation ont besoin de communiquer rapidement avec les étudiants, visiteurs et équipes.",besoins:["Afficher les annonces importantes","Orienter les étudiants dans le campus","Diffuser les emplois du temps","Moderniser les salles avec des écrans interactifs"]},{value:"Entreprise",title:"Entreprise",image:Wg,desc:"Les entreprises utilisent l’affichage dynamique pour améliorer la communication interne et valoriser leurs informations en temps réel.",besoins:["Afficher les KPIs et statistiques","Partager les messages internes","Accueillir les visiteurs","Gérer plusieurs écrans depuis une seule interface"]},{value:"Point de vente",title:"Points de vente",image:Vg,desc:"Les magasins et showrooms ont besoin d’attirer l’attention, présenter leurs offres et améliorer l’expérience client.",besoins:["Afficher les promotions","Présenter les produits","Attirer les clients vers une offre","Créer une expérience moderne en boutique"]},{value:"Restauration",title:"Restauration",image:Hg,desc:"Les restaurants, cafés et snacks peuvent remplacer les menus classiques par des menus digitaux simples à mettre à jour.",besoins:["Afficher les menus digitaux","Modifier les prix rapidement","Présenter les offres du jour","Rendre l’espace plus moderne"]},{value:"Administration",title:"Administration",image:qg,desc:"Les administrations ont besoin d’orienter les visiteurs et de diffuser les informations officielles clairement.",besoins:["Orienter les visiteurs","Afficher les annonces officielles","Réduire la confusion dans les espaces publics","Améliorer la communication avec les usagers"]},{value:"Établissement de santé",title:"Santé",image:Kg,desc:"Les cliniques, cabinets et centres médicaux peuvent informer les patients et améliorer l’attente grâce aux écrans.",besoins:["Informer les patients","Afficher les consignes importantes","Organiser les files d’attente","Diffuser du contenu en salle d’attente"]}];function q2(){return a.jsxs(Pr,{children:[a.jsx(_s,{tag:"Secteurs d’activités",title:"Des solutions adaptées à chaque secteur",subtitle:"Découvrez comment Nexav aide les entreprises, écoles, restaurants, administrations et établissements de santé à mieux communiquer avec leurs écrans."}),a.jsxs("section",{className:"section secteurs-page",children:[a.jsx("div",{className:"secteurs-container",children:H2.map((e,t)=>a.jsxs("div",{className:`secteur-row ${t%2!==0?"reverse":""}`,children:[a.jsx("div",{className:"secteur-image",children:a.jsx("img",{src:e.image,alt:e.title})}),a.jsxs("div",{className:"secteur-content",children:[a.jsx("div",{className:"section-tag",children:e.title}),a.jsx("h2",{children:e.title}),a.jsx("p",{children:e.desc}),a.jsx("div",{className:"besoins-list",children:e.besoins.map(r=>a.jsxs("div",{className:"besoin-item",children:[a.jsx("span",{children:"✓"}),r]},r))}),a.jsx(re,{to:`/contact?secteur=${encodeURIComponent(e.value)}#demande-form`,className:"btn btn-primary",children:"Demander une solution"})]})]},e.title))}),a.jsx("style",{children:`
          .secteurs-page {
            background: #fff;
          }

          .secteurs-container {
            max-width: 1280px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 5rem;
          }

          .secteur-row {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            gap: 4rem;
            align-items: center;
          }

          .secteur-row.reverse .secteur-image {
            order: 2;
          }

          .secteur-row.reverse .secteur-content {
            order: 1;
          }

          .secteur-image {
            height: 360px;
            border-radius: 28px;
            overflow: hidden;
            box-shadow: 0 22px 60px rgba(17,17,17,0.12);
          }

          .secteur-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .secteur-content h2 {
            font-family: var(--font-head);
            font-size: clamp(1.8rem, 3vw, 2.7rem);
            font-weight: 800;
            color: #111;
            margin-bottom: 1rem;
          }

          .secteur-content p {
            font-size: 1rem;
            color: var(--n-gray);
            line-height: 1.75;
            margin-bottom: 1.6rem;
          }

          .besoins-list {
            display: grid;
            gap: 0.75rem;
            margin-bottom: 2rem;
          }

          .besoin-item {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            font-weight: 700;
            color: #263241;
          }

          .besoin-item span {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            background: #fff3ef;
            color: var(--n-orange);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.75rem;
            flex-shrink: 0;
          }

          @media (max-width: 900px) {
            .secteur-row,
            .secteur-row.reverse {
              grid-template-columns: 1fr;
              gap: 2rem;
            }

            .secteur-row.reverse .secteur-image,
            .secteur-row.reverse .secteur-content {
              order: initial;
            }

            .secteur-image {
              height: 280px;
            }
          }

          @media (max-width: 520px) {
            .secteurs-container {
              gap: 3.5rem;
            }

            .secteur-image {
              height: 230px;
              border-radius: 20px;
            }
          }
        `})]})]})}function K2(){const e=Gn(),t=ps(),{loading:r,error:n,token:i}=ms(f=>f.auth),[o,s]=w.useState({email:"",password:""}),[l,u]=w.useState(!1);w.useEffect(()=>(i&&e("/admin/dashboard",{replace:!0}),()=>t(Aj())),[i,e,t]);const c=f=>{s(p=>({...p,[f.target.name]:f.target.value}))},d=f=>{f.preventDefault(),t(ua(o))};return a.jsxs("div",{className:"admin-login-page",children:[a.jsx("div",{className:"login-bg-circle one"}),a.jsx("div",{className:"login-bg-circle two"}),a.jsxs("div",{className:"admin-login-wrap",children:[a.jsxs("div",{className:"login-logo-box",children:[a.jsx(re,{to:"/",className:"login-logo",children:"NEXAV"}),a.jsx("p",{children:"Accès administration"})]}),a.jsxs("div",{className:"login-card",children:[a.jsx("h2",{children:"Connexion"}),a.jsx("p",{children:"Entrez vos identifiants administrateur."}),n&&a.jsx("div",{className:"error-message",style:{marginBottom:"1.25rem"},children:n}),a.jsxs("form",{onSubmit:d,children:[a.jsxs("div",{className:"form-group",style:{marginBottom:"1rem"},children:[a.jsx("label",{className:"form-label",children:"Adresse e-mail"}),a.jsx("input",{name:"email",type:"email",value:o.email,onChange:c,placeholder:"admin@nexav.ma",className:"form-input",required:!0})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:"1.75rem"},children:[a.jsx("label",{className:"form-label",children:"Mot de passe"}),a.jsxs("div",{style:{position:"relative"},children:[a.jsx("input",{name:"password",type:l?"text":"password",value:o.password,onChange:c,placeholder:"••••••••",className:"form-input",style:{paddingRight:"3rem"},required:!0}),a.jsx("button",{type:"button",onClick:()=>u(!l),className:"show-password-btn",children:l?"Masquer":"Voir"})]})]}),a.jsx("button",{type:"submit",disabled:r,className:"btn btn-primary btn-full",children:r?"Connexion...":"Se connecter"})]})]}),a.jsx(re,{to:"/",className:"back-site",children:"← Retour au site"})]}),a.jsx("style",{children:`
        .admin-login-page {
          min-height: 100vh;
          background: #030810;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .login-bg-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          background: rgba(255,75,43,0.16);
          filter: blur(20px);
        }

        .login-bg-circle.one {
          width: 500px;
          height: 500px;
          top: -220px;
          left: 50%;
          transform: translateX(-50%);
        }

        .login-bg-circle.two {
          width: 320px;
          height: 320px;
          bottom: -150px;
          right: 8%;
        }

        .admin-login-wrap {
          width: 100%;
          max-width: 430px;
          position: relative;
          z-index: 1;
        }

        .login-logo-box {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-logo {
          font-family: var(--font-head);
          font-size: 2rem;
          font-weight: 900;
          color: #fff;
          text-decoration: none;
        }

        .login-logo-box p {
          font-size: 0.88rem;
          color: var(--n-orange);
          margin-top: 0.4rem;
          font-weight: 800;
        }

        .login-card {
          background: #06101E;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: var(--radius-xl);
          padding: 2.4rem;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 70px rgba(0,0,0,0.35);
        }

        .login-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 15%;
          right: 15%;
          height: 4px;
          background: var(--n-orange);
          border-radius: 0 0 10px 10px;
        }

        .login-card h2 {
          font-family: var(--font-head);
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.45rem;
        }

        .login-card > p {
          color: rgba(255,255,255,0.48);
          margin-bottom: 2rem;
          font-size: 0.88rem;
        }

        .show-password-btn {
          position: absolute;
          right: 0.85rem;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: var(--n-orange);
          font-weight: 800;
          font-size: 0.76rem;
          cursor: pointer;
        }

        .back-site {
          display: block;
          text-align: center;
          margin-top: 1.3rem;
          color: var(--n-gray);
          font-size: 0.86rem;
          text-decoration: none;
        }

        .back-site:hover {
          color: #fff;
        }
      `})]})}const Q2=[{label:"Sous-types",icon:"🧩",to:"/admin/sous-types-produits"},{label:"Tableau de bord",icon:"📊",to:"/admin/dashboard"},{label:"Types de produits",icon:"🗂️",to:"/admin/types-produits"},{label:"Produits",icon:"🖥️",to:"/admin/produits"},{label:"Demandes",icon:"📬",to:"/admin/demandes"}];function Zn({children:e,title:t}){var s;const r=Gn(),n=ps(),{user:i}=ms(l=>l.auth),o=async()=>{await n($c()),r("/admin/login")};return a.jsxs("div",{className:"admin-layout",children:[a.jsxs("aside",{className:"admin-sidebar",children:[a.jsxs("div",{className:"admin-logo-box",children:[a.jsx(na,{to:"/",className:"admin-logo",children:"NEXAV"}),a.jsx("div",{className:"admin-logo-sub",children:"Administration"})]}),a.jsx("nav",{className:"admin-nav",children:Q2.map(l=>a.jsxs(na,{to:l.to,className:({isActive:u})=>u?"admin-nav-link active":"admin-nav-link",children:[a.jsx("span",{children:l.icon}),l.label]},l.to))}),a.jsxs("div",{className:"admin-user-box",children:[i&&a.jsxs("div",{className:"admin-user",children:[a.jsx("div",{className:"admin-avatar",children:((s=i.name)==null?void 0:s.slice(0,2).toUpperCase())||"AD"}),a.jsxs("div",{children:[a.jsx("div",{className:"admin-user-name",children:i.name||"Admin"}),a.jsx("div",{className:"admin-user-email",children:i.email})]})]}),a.jsxs("button",{onClick:o,className:"admin-logout",children:[a.jsx("span",{children:"🚪"}),"Déconnexion"]})]})]}),a.jsxs("div",{className:"admin-main",children:[a.jsxs("header",{className:"admin-topbar",children:[a.jsx("h1",{children:t}),a.jsx(na,{to:"/",target:"_blank",className:"admin-site-link",children:"🌐 Voir le site"})]}),a.jsx("div",{className:"admin-content",children:e})]}),a.jsx("style",{children:`
        .admin-logo-box {
          padding: 1.5rem 1.4rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .admin-logo {
          font-family: var(--font-head);
          font-size: 1.4rem;
          font-weight: 900;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.04em;
        }

        .admin-logo-sub {
          font-size: 0.72rem;
          color: var(--n-orange);
          margin-top: 0.2rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
        }

        .admin-nav {
          flex: 1;
          padding: 1rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .admin-nav-link {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.72rem 0.9rem;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 700;
          color: rgba(255,255,255,0.58);
          text-decoration: none;
          transition: 0.2s;
        }

        .admin-nav-link:hover,
        .admin-nav-link.active {
          color: #fff;
          background: rgba(255,75,43,0.14);
          border: 1px solid rgba(255,75,43,0.22);
        }

        .admin-nav-link span {
          width: 22px;
          text-align: center;
        }

        .admin-user-box {
          padding: 1rem 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .admin-user {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.65rem 0.8rem;
          background: rgba(255,255,255,0.04);
          border-radius: 12px;
          margin-bottom: 0.65rem;
        }

        .admin-avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--n-orange);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          flex-shrink: 0;
        }

        .admin-user-name {
          font-size: 0.84rem;
          font-weight: 800;
          color: #fff;
        }

        .admin-user-email {
          font-size: 0.72rem;
          color: var(--n-gray);
          max-width: 160px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .admin-logout {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 0.85rem;
          background: transparent;
          border: 1px solid rgba(239,68,68,0.24);
          border-radius: 10px;
          color: #f87171;
          font-weight: 700;
          cursor: pointer;
        }

        .admin-logout:hover {
          background: rgba(239,68,68,0.08);
        }

        .admin-topbar h1 {
          font-family: var(--font-head);
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff;
        }

        .admin-site-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.82rem;
          color: var(--n-gray);
          text-decoration: none;
          padding: 0.45rem 0.8rem;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
        }

        .admin-site-link:hover {
          color: #fff;
          border-color: rgba(255,75,43,0.28);
        }
      `})]})}function X2(){const[e,t]=w.useState({produits:0,types:0,demandes:0,nouvellesDemandes:0}),[r,n]=w.useState([]),[i,o]=w.useState(!0);w.useEffect(()=>{Promise.all([Qg(),Ps(),Xg()]).then(([u,c,d])=>{const f=Array.isArray(u.data)?u.data:u.data.produits||[],p=Array.isArray(c.data)?c.data:c.data.types||[],y=Array.isArray(d.data)?d.data:d.data.demandes||[];n(y.slice(0,5)),t({produits:f.length,types:p.length,demandes:y.length,nouvellesDemandes:y.filter(x=>x.statut==="nouveau"||x.statut==="en_attente").length})}).catch(console.error).finally(()=>o(!1))},[]);const s=[{label:"Produits actifs",value:e.produits,icon:"🖥️",color:"var(--n-blue)",to:"/admin/produits"},{label:"Types de produits",value:e.types,icon:"🗂️",color:"#5B9DFF",to:"/admin/types-produits"},{label:"Total demandes",value:e.demandes,icon:"📬",color:"var(--n-cyan)",to:"/admin/demandes"},{label:"Nouvelles dem.",value:e.nouvellesDemandes,icon:"🔔",color:"#FFB800",to:"/admin/demandes"}],l=[{label:"Ajouter un produit",to:"/admin/produits?action=new",icon:"➕"},{label:"Ajouter un type",to:"/admin/types-produits?action=new",icon:"📁"},{label:"Voir les demandes",to:"/admin/demandes",icon:"📬"},{label:"Consulter le site public",to:"/",icon:"🌐",external:!0}];return a.jsxs(Zn,{title:"Tableau de bord",children:[a.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(12,91,232,0.12), rgba(0,212,255,0.06))",border:"1px solid rgba(12,91,232,0.2)",borderRadius:"var(--radius-lg)",padding:"1.5rem 2rem",marginBottom:"2rem",position:"relative",overflow:"hidden"},children:[a.jsx("div",{style:{position:"absolute",top:0,left:"10%",right:"10%",height:1,background:"linear-gradient(90deg,transparent,var(--n-blue),transparent)"}}),a.jsx("h2",{style:{fontFamily:"var(--font-head)",fontSize:"1.2rem",fontWeight:700,marginBottom:"0.3rem"},children:"Bienvenue sur Nexav Admin 👋"}),a.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.5)"},children:"Gérez vos produits, types et demandes depuis ce panneau de contrôle."})]}),i?a.jsx("div",{className:"loading-center",children:a.jsx("div",{className:"spinner"})}):a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"1rem",marginBottom:"2rem"},children:s.map(u=>a.jsxs(re,{to:u.to,style:{display:"block",textDecoration:"none",color:"inherit",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:"var(--radius-lg)",padding:"1.4rem",transition:"all 0.25s"},onMouseEnter:c=>{c.currentTarget.style.borderColor="rgba(12,91,232,0.3)",c.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:c=>{c.currentTarget.style.borderColor="rgba(255,255,255,0.07)",c.currentTarget.style.transform="translateY(0)"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"0.75rem"},children:[a.jsx("div",{style:{fontSize:"0.72rem",color:"var(--n-gray)",textTransform:"uppercase",letterSpacing:"0.07em"},children:u.label}),a.jsx("span",{style:{fontSize:"1.2rem"},children:u.icon})]}),a.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"2rem",fontWeight:800,color:u.color},children:u.value})]},u.label))}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 280px",gap:"1.5rem"},children:[a.jsxs("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid var(--n-border)",borderRadius:"var(--radius-lg)",overflow:"hidden"},children:[a.jsxs("div",{style:{padding:"1.2rem 1.5rem",borderBottom:"1px solid var(--n-border)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"0.95rem",fontWeight:700},children:"Dernières demandes"}),a.jsx(re,{to:"/admin/demandes",style:{fontSize:"0.78rem",color:"var(--n-cyan)",textDecoration:"none"},children:"Voir tout →"})]}),r.length===0?a.jsxs("div",{className:"empty-state",style:{padding:"2rem"},children:[a.jsx("div",{className:"empty-icon",children:"📬"}),a.jsx("h3",{children:"Aucune demande"})]}):a.jsxs("table",{className:"data-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Nom"}),a.jsx("th",{children:"Société"}),a.jsx("th",{children:"Secteur"}),a.jsx("th",{children:"Statut"})]})}),a.jsx("tbody",{children:r.map(u=>a.jsxs("tr",{children:[a.jsxs("td",{children:[a.jsx("div",{style:{fontWeight:500},children:u.nom}),a.jsx("div",{style:{fontSize:"0.75rem",color:"var(--n-gray)"},children:u.email})]}),a.jsx("td",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.65)"},children:u.raison_sociale||"—"}),a.jsx("td",{style:{fontSize:"0.85rem",color:"rgba(255,255,255,0.65)"},children:u.secteur||"—"}),a.jsx("td",{children:a.jsx(Y2,{statut:u.statut})})]},u.id))})]})]}),a.jsxs("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid var(--n-border)",borderRadius:"var(--radius-lg)",padding:"1.2rem"},children:[a.jsx("h3",{style:{fontFamily:"var(--font-head)",fontSize:"0.95rem",fontWeight:700,marginBottom:"1rem",padding:"0 0.3rem"},children:"Actions rapides"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:l.map(u=>a.jsxs(re,{to:u.to,target:u.external?"_blank":void 0,style:{display:"flex",alignItems:"center",gap:"0.6rem",padding:"0.7rem 0.85rem",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"var(--radius-sm)",fontSize:"0.85rem",color:"rgba(255,255,255,0.75)",textDecoration:"none",transition:"all 0.2s"},onMouseEnter:c=>{c.currentTarget.style.background="rgba(12,91,232,0.1)",c.currentTarget.style.borderColor="rgba(12,91,232,0.25)",c.currentTarget.style.color="#fff"},onMouseLeave:c=>{c.currentTarget.style.background="rgba(255,255,255,0.03)",c.currentTarget.style.borderColor="rgba(255,255,255,0.06)",c.currentTarget.style.color="rgba(255,255,255,0.75)"},children:[a.jsx("span",{children:u.icon}),u.label]},u.label))})]})]})]})]})}function Y2({statut:e}){const r={nouveau:{label:"Nouveau",cls:"badge-cyan"},en_attente:{label:"En attente",cls:"badge-amber"},traite:{label:"Traité",cls:"badge-green"},archive:{label:"Archivé",cls:"badge-gray"}}[e]||{label:e,cls:"badge-gray"};return a.jsx("span",{className:`badge ${r.cls}`,children:r.label})}const xp={nom:"",slug:"",description:""};function G2(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-")}function J2(){const[e,t]=w.useState([]),[r,n]=w.useState(!0),[i,o]=w.useState(null),[s,l]=w.useState(null),[u,c]=w.useState(xp),[d,f]=w.useState(!1),[p,y]=w.useState(""),[x,v]=w.useState(null),j=()=>{n(!0),Ps().then(m=>{const C=Array.isArray(m.data)?m.data:m.data.types||[];t(C)}).catch(()=>y("Erreur de chargement")).finally(()=>n(!1))};w.useEffect(()=>{j()},[]);const g=()=>{c(xp),l(null),y(""),o("create")},h=m=>{c({nom:m.nom,slug:m.slug,description:m.description||""}),l(m),y(""),o("edit")},b=()=>{o(null),y("")},S=m=>{const{name:C,value:_}=m.target;c(z=>({...z,[C]:_,...C==="nom"?{slug:G2(_)}:{}}))},N=async m=>{var C,_;m.preventDefault(),f(!0),y("");try{i==="create"?await P2(u):await R2(s.id,u),b(),j()}catch(z){y(((_=(C=z.response)==null?void 0:C.data)==null?void 0:_.message)||"Une erreur est survenue.")}finally{f(!1)}},T=async m=>{var C,_;try{await T2(m),v(null),j()}catch(z){y(((_=(C=z.response)==null?void 0:C.data)==null?void 0:_.message)||"Impossible de supprimer ce type."),v(null)}};return a.jsxs(Zn,{title:"Types de produits",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1.5rem"},children:[a.jsxs("div",{children:[a.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:700},children:"Types de produits"}),a.jsxs("p",{style:{fontSize:"0.83rem",color:"var(--n-gray)"},children:[e.length," type",e.length>1?"s":""]})]}),a.jsx("button",{onClick:g,className:"btn btn-primary btn-sm",children:"+ Nouveau type"})]}),p&&!i&&a.jsx("div",{className:"error-message",children:p}),r?a.jsx("div",{className:"loading-center",children:a.jsx("div",{className:"spinner"})}):e.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx("h3",{children:"Aucun type"}),a.jsx("button",{onClick:g,className:"btn btn-primary btn-sm",children:"Créer"})]}):a.jsxs("table",{className:"data-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"ID"}),a.jsx("th",{children:"Nom"}),a.jsx("th",{children:"Slug"}),a.jsx("th",{children:"Description"}),a.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),a.jsx("tbody",{children:e.map(m=>a.jsxs("tr",{children:[a.jsxs("td",{children:["#",m.id]}),a.jsx("td",{children:a.jsx("strong",{children:m.nom})}),a.jsx("td",{children:a.jsx("code",{style:{color:"var(--n-orange)",background:"rgba(255,75,43,0.08)",padding:"2px 6px",borderRadius:4},children:m.slug})}),a.jsx("td",{style:{color:"var(--n-gray)"},children:m.description||"—"}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",gap:"0.5rem",justifyContent:"flex-end"},children:[a.jsx("button",{onClick:()=>h(m),style:{background:"rgba(255,75,43,0.12)",border:"1px solid rgba(255,75,43,0.25)",color:"var(--n-orange)",padding:"5px 10px",borderRadius:6,cursor:"pointer"},children:"Modifier"}),a.jsx("button",{onClick:()=>v(m),style:{background:"rgba(239,68,68,0.08)",border:"1px solid rgba(239,68,68,0.2)",color:"#F87171",padding:"5px 10px",borderRadius:6,cursor:"pointer"},children:"Supprimer"})]})})]},m.id))})]}),i&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal",children:[a.jsxs("h2",{children:[i==="create"?"Créer":"Modifier"," un type"]}),p&&a.jsx("div",{className:"error-message",children:p}),a.jsxs("form",{onSubmit:N,children:[a.jsx("input",{name:"nom",value:u.nom,onChange:S,placeholder:"Nom",className:"form-input",required:!0}),a.jsx("input",{name:"slug",value:u.slug,onChange:S,className:"form-input",required:!0}),a.jsx("textarea",{name:"description",value:u.description,onChange:S,className:"form-textarea",placeholder:"Description"}),a.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[a.jsx("button",{type:"button",onClick:b,className:"btn btn-secondary btn-sm",children:"Annuler"}),a.jsx("button",{type:"submit",className:"btn btn-primary btn-sm",children:d?"...":"Enregistrer"})]})]})]})}),x&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal",children:[a.jsxs("p",{children:['Supprimer "',x.nom,'" ?']}),a.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"flex-end"},children:[a.jsx("button",{onClick:()=>v(null),children:"Annuler"}),a.jsx("button",{onClick:()=>T(x.id),children:"Supprimer"})]})]})})]})}const bp={nom:"",slug:"",type_produit_id:"",sous_type_produit_id:"",description_courte:"",description_longue:"",video_url:"",actif:!0,image_principale:null};function Z2(e){return e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s-]/g,"").trim().replace(/\s+/g,"-")}function eS(){const[e,t]=w.useState([]),[r,n]=w.useState([]),[i,o]=w.useState([]),[s,l]=w.useState(!0),[u,c]=w.useState(null),[d,f]=w.useState(null),[p,y]=w.useState(bp),[x,v]=w.useState(null),[j,g]=w.useState(null),[h,b]=w.useState(!1),[S,N]=w.useState(""),[T,m]=w.useState(null),[C,_]=w.useState("all"),[z,W]=w.useState(""),V=()=>{l(!0),N(""),Promise.all([Qg(),Ps(),Jg()]).then(([M,ee,ae])=>{t(Array.isArray(M.data)?M.data:M.data.produits||[]),n(Array.isArray(ee.data)?ee.data:ee.data.types||[]),o(Array.isArray(ae.data)?ae.data:ae.data.sous_types||ae.data.sousTypes||[])}).catch(()=>N("Erreur de chargement")).finally(()=>l(!1))};w.useEffect(()=>{V()},[]);const J=()=>{var M;y({...bp,type_produit_id:((M=r[0])==null?void 0:M.id)||"",sous_type_produit_id:""}),f(null),v(null),g(null),N(""),c("create")},ne=M=>{y({nom:M.nom||"",slug:M.slug||"",type_produit_id:M.type_produit_id||"",sous_type_produit_id:M.sous_type_produit_id||"",description_courte:M.description_courte||"",description_longue:M.description_longue||"",video_url:M.video_url||"",actif:!!M.actif,image_principale:null}),f(M),v(null),g(M.image_principale?`/storage/${M.image_principale}`:null),N(""),c("edit")},me=()=>{c(null),N("")},O=M=>{const{name:ee,value:ae,type:ye,checked:Vt}=M.target;y(ut=>{const yt={...ut,[ee]:ye==="checkbox"?Vt:ae,...ee==="nom"&&!d?{slug:Z2(ae)}:{}};return ee==="type_produit_id"&&(yt.sous_type_produit_id=""),yt})},he=M=>{const ee=M.target.files[0];ee&&(v(ee),g(URL.createObjectURL(ee)))},L=async M=>{var ee,ae,ye,Vt;M.preventDefault(),b(!0),N("");try{const ut=new FormData;Object.entries(p).forEach(([yt,ur])=>{if(yt!=="image_principale"){if(yt==="sous_type_produit_id"&&!ur){ut.append(yt,"");return}ur!=null&&ut.append(yt,typeof ur=="boolean"?ur?"1":"0":ur)}}),x&&ut.append("image_principale",x),u==="edit"?(ut.append("_method","PUT"),await m2(d.id,ut)):await p2(ut),me(),V()}catch(ut){const yt=(ae=(ee=ut.response)==null?void 0:ee.data)==null?void 0:ae.errors;N(yt?Object.values(yt).flat().join(" | "):((Vt=(ye=ut.response)==null?void 0:ye.data)==null?void 0:Vt.message)||"Une erreur est survenue.")}finally{b(!1)}},H=async M=>{var ee,ae;try{await h2(M),m(null),V()}catch(ye){N(((ae=(ee=ye.response)==null?void 0:ee.data)==null?void 0:ae.message)||"Impossible de supprimer."),m(null)}},Y=(Array.isArray(e)?e:[]).filter(M=>{var ye;const ee=C==="all"||String(M.type_produit_id)===String(C),ae=!z||((ye=M.nom)==null?void 0:ye.toLowerCase().includes(z.toLowerCase()));return ee&&ae}),De=(Array.isArray(i)?i:[]).filter(M=>{var ae,ye;const ee=(M==null?void 0:M.type_produit_id)??((ae=M==null?void 0:M.typeProduit)==null?void 0:ae.id)??((ye=M==null?void 0:M.type_produit)==null?void 0:ye.id)??null;return String(ee)===String(p==null?void 0:p.type_produit_id)});return a.jsxs(Zn,{title:"Produits",children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.25rem",flexWrap:"wrap",gap:"0.75rem"},children:[a.jsxs("div",{children:[a.jsx("h2",{style:{fontFamily:"var(--font-head)",fontSize:"1.1rem",fontWeight:700},children:"Produits"}),a.jsxs("p",{style:{fontSize:"0.83rem",color:"var(--n-gray)",marginTop:"0.2rem"},children:[Y.length," produit",Y.length>1?"s":""]})]}),a.jsx("button",{onClick:J,className:"btn btn-primary btn-sm",children:"+ Nouveau produit"})]}),a.jsxs("div",{style:{display:"flex",gap:"0.75rem",marginBottom:"1.25rem",flexWrap:"wrap",alignItems:"center"},children:[a.jsxs("div",{style:{position:"relative",flex:1,minWidth:200},children:[a.jsx("input",{type:"text",placeholder:"Rechercher...",value:z,onChange:M=>W(M.target.value),className:"form-input",style:{paddingLeft:"2.2rem"}}),a.jsx("span",{style:{position:"absolute",left:"0.7rem",top:"50%",transform:"translateY(-50%)",color:"var(--n-gray)",fontSize:"0.85rem"},children:"🔍"})]}),a.jsxs("select",{value:C,onChange:M=>_(M.target.value),className:"form-select",style:{width:"auto",minWidth:180},children:[a.jsx("option",{value:"all",children:"Tous les types"}),r.map(M=>a.jsx("option",{value:M.id,children:M.nom},M.id))]})]}),S&&!u&&a.jsx("div",{className:"error-message",style:{marginBottom:"1rem"},children:S}),s?a.jsx("div",{className:"loading-center",children:a.jsx("div",{className:"spinner"})}):Y.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx("div",{className:"empty-icon",children:"🖥️"}),a.jsx("h3",{children:"Aucun produit trouvé"}),a.jsx("button",{onClick:J,className:"btn btn-primary btn-sm",style:{marginTop:"1rem"},children:"Créer un produit"})]}):a.jsx("div",{className:"data-table-wrap",children:a.jsxs("table",{className:"data-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{style:{width:60},children:"Image"}),a.jsx("th",{children:"Nom"}),a.jsx("th",{children:"Type"}),a.jsx("th",{children:"Sous-type"}),a.jsx("th",{children:"Statut"}),a.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),a.jsx("tbody",{children:Y.map(M=>a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("div",{style:{width:48,height:36,borderRadius:6,overflow:"hidden",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.08)",backgroundImage:M.image_principale?`url(/storage/${M.image_principale})`:"none",backgroundSize:"cover",backgroundPosition:"center",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1rem"},children:!M.image_principale&&"🖥️"})}),a.jsxs("td",{children:[a.jsx("div",{style:{fontWeight:600},children:M.nom}),a.jsx("div",{style:{fontSize:"0.73rem",color:"var(--n-gray)"},children:M.slug})]}),a.jsx("td",{children:M.type_produit||M.typeProduit?a.jsx("span",{className:"badge badge-blue",children:(M.type_produit||M.typeProduit).nom}):a.jsx("span",{style:{color:"var(--n-gray)",fontSize:"0.83rem"},children:"—"})}),a.jsx("td",{children:M.sous_type_produit||M.sousTypeProduit?a.jsx("span",{className:"badge badge-gray",children:(M.sous_type_produit||M.sousTypeProduit).nom}):a.jsx("span",{style:{color:"var(--n-gray)",fontSize:"0.83rem"},children:"—"})}),a.jsx("td",{children:a.jsx("span",{className:`badge ${M.actif?"badge-green":"badge-gray"}`,children:M.actif?"● Actif":"● Inactif"})}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",gap:"0.4rem",justifyContent:"flex-end",flexWrap:"wrap"},children:[a.jsx(re,{to:`/admin/produits/${M.id}/medias`,style:{padding:"0.3rem 0.7rem",fontSize:"0.75rem",borderRadius:6,background:"rgba(255,75,43,0.1)",border:"1px solid rgba(255,75,43,0.25)",color:"var(--n-orange)",textDecoration:"none"},children:"Médias"}),a.jsx("button",{onClick:()=>ne(M),style:{padding:"0.3rem 0.7rem",fontSize:"0.75rem",borderRadius:6,background:"rgba(255,75,43,0.1)",border:"1px solid rgba(255,75,43,0.25)",color:"var(--n-orange)",cursor:"pointer",fontFamily:"var(--font-body)"},children:"Modifier"}),a.jsx("button",{onClick:()=>m(M),style:{padding:"0.3rem 0.7rem",fontSize:"0.75rem",borderRadius:6,background:"rgba(239,68,68,0.07)",border:"1px solid rgba(239,68,68,0.18)",color:"#F87171",cursor:"pointer",fontFamily:"var(--font-body)"},children:"Supprimer"})]})})]},M.id))})]})}),u&&a.jsx("div",{className:"modal-overlay",onClick:M=>{M.target===M.currentTarget&&me()},children:a.jsxs("div",{className:"modal",style:{maxWidth:640},children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"modal-title",children:u==="create"?"Nouveau produit":"Modifier le produit"}),a.jsx("button",{className:"modal-close",onClick:me,children:"✕"})]}),S&&a.jsx("div",{className:"error-message",style:{marginBottom:"1rem"},children:S}),a.jsxs("form",{onSubmit:L,children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.9rem",marginBottom:"0.9rem"},children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Nom *"}),a.jsx("input",{name:"nom",value:p.nom,onChange:O,className:"form-input",placeholder:"Nom du produit",required:!0})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Slug *"}),a.jsx("input",{name:"slug",value:p.slug,onChange:O,className:"form-input",required:!0})]})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.9rem",marginBottom:"0.9rem"},children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Type de produit *"}),a.jsxs("select",{name:"type_produit_id",value:p.type_produit_id,onChange:O,className:"form-select",required:!0,children:[a.jsx("option",{value:"",children:"Sélectionner..."}),r.map(M=>a.jsx("option",{value:M.id,children:M.nom},M.id))]})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Sous-type"}),a.jsxs("select",{name:"sous_type_produit_id",value:p.sous_type_produit_id,onChange:O,className:"form-select",disabled:!p.type_produit_id||De.length===0,children:[a.jsx("option",{value:"",children:De.length===0?"Aucun sous-type pour ce type":"Aucun sous-type"}),De.map(M=>a.jsx("option",{value:M.id,children:M.nom},M.id))]})]})]}),a.jsx("div",{style:{marginBottom:"0.9rem"},children:a.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.6rem",cursor:"pointer",fontSize:"0.87rem"},children:[a.jsx("input",{type:"checkbox",name:"actif",checked:p.actif,onChange:O,style:{width:16,height:16,accentColor:"var(--n-orange)"}}),"Produit actif"]})}),a.jsxs("div",{className:"form-group",style:{marginBottom:"0.9rem"},children:[a.jsx("label",{className:"form-label",children:"Description courte"}),a.jsx("input",{name:"description_courte",value:p.description_courte,onChange:O,className:"form-input",placeholder:"Résumé en une phrase..."})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:"0.9rem"},children:[a.jsx("label",{className:"form-label",children:"Description longue"}),a.jsx("textarea",{name:"description_longue",value:p.description_longue,onChange:O,className:"form-textarea",placeholder:"Description détaillée..."})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.9rem",marginBottom:"1.25rem"},children:[a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"URL vidéo"}),a.jsx("input",{name:"video_url",value:p.video_url,onChange:O,className:"form-input",placeholder:"https://youtu.be/..."})]}),a.jsxs("div",{className:"form-group",children:[a.jsx("label",{className:"form-label",children:"Image principale"}),a.jsx("input",{type:"file",accept:"image/*",onChange:he,style:{display:"none"},id:"img-upload"}),a.jsxs("label",{htmlFor:"img-upload",style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.6rem 0.9rem",background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"var(--radius-sm)",cursor:"pointer",fontSize:"0.85rem",color:"rgba(255,255,255,0.6)"},children:[a.jsx("span",{children:"📁"}),x?x.name:"Choisir une image..."]}),j&&a.jsx("div",{style:{marginTop:"0.5rem",width:80,height:56,borderRadius:6,overflow:"hidden",border:"1px solid rgba(255,255,255,0.1)"},children:a.jsx("img",{src:j,alt:"Aperçu",style:{width:"100%",height:"100%",objectFit:"cover"}})})]})]}),a.jsxs("div",{style:{display:"flex",gap:"0.75rem",justifyContent:"flex-end"},children:[a.jsx("button",{type:"button",onClick:me,className:"btn btn-secondary btn-sm",children:"Annuler"}),a.jsx("button",{type:"submit",disabled:h,className:"btn btn-primary btn-sm",children:h?"Enregistrement...":u==="create"?"Créer le produit":"Mettre à jour"})]})]})]})}),T&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal",style:{maxWidth:400},children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"modal-title",children:"Supprimer le produit"}),a.jsx("button",{className:"modal-close",onClick:()=>m(null),children:"✕"})]}),a.jsxs("p",{style:{fontSize:"0.9rem",color:"rgba(255,255,255,0.65)",marginBottom:"1.5rem",lineHeight:1.6},children:["Voulez-vous supprimer ",a.jsxs("strong",{style:{color:"#fff"},children:['"',T.nom,'"']})," ?"]}),a.jsxs("div",{style:{display:"flex",gap:"0.75rem",justifyContent:"flex-end"},children:[a.jsx("button",{onClick:()=>m(null),className:"btn btn-secondary btn-sm",children:"Annuler"}),a.jsx("button",{onClick:()=>H(T.id),style:{padding:"0.5rem 1.1rem",borderRadius:6,background:"rgba(239,68,68,0.15)",border:"1px solid rgba(239,68,68,0.35)",color:"#F87171",cursor:"pointer",fontSize:"0.83rem",fontFamily:"var(--font-body)"},children:"Supprimer définitivement"})]})]})})]})}function tS(){const{id:e}=Tc(),[t,r]=w.useState(null),[n,i]=w.useState([]),[o,s]=w.useState(!0),[l,u]=w.useState(!1),[c,d]=w.useState(""),[f,p]=w.useState(""),[y,x]=w.useState(null),[v,j]=w.useState("image"),[g,h]=w.useState(null),[b,S]=w.useState(null),[N,T]=w.useState(null),m=O=>(O==null?void 0:O.produit)||O||null,C=O=>{var he,L;return Array.isArray(O)?O:Array.isArray(O==null?void 0:O.medias)?O.medias:Array.isArray(O==null?void 0:O.media_produits)?O.media_produits:Array.isArray(O==null?void 0:O.mediaProduits)?O.mediaProduits:Array.isArray((he=O==null?void 0:O.produit)==null?void 0:he.media_produits)?O.produit.media_produits:Array.isArray((L=O==null?void 0:O.produit)==null?void 0:L.mediaProduits)?O.produit.mediaProduits:[]},_=()=>{s(!0),d(""),Promise.all([f2(e),g2(e)]).then(([O,he])=>{r(m(O.data)),i(C(he.data))}).catch(()=>d("Erreur de chargement")).finally(()=>s(!1))};w.useEffect(()=>{_()},[e]);const z=O=>{const he=O.target.files[0];he&&(h(he),he.type.startsWith("image")?S(URL.createObjectURL(he)):S(null))},W=async O=>{var he,L;if(O.preventDefault(),!!g){u(!0),d(""),p("");try{const H=new FormData;H.append("media",g),H.append("type_media",v),await v2(e,H),h(null),S(null),p("Média ajouté avec succès."),_()}catch(H){d(((L=(he=H.response)==null?void 0:he.data)==null?void 0:L.message)||"Erreur lors de l'upload.")}finally{u(!1)}}},V=async O=>{try{await y2(O),x(null),_()}catch{d("Impossible de supprimer ce média.")}},J=Array.isArray(n)?n:[],ne=J.filter(O=>O.type_media==="image"),me=J.filter(O=>O.type_media==="video");return a.jsxs(Zn,{title:t?`Médias — ${t.nom}`:"Médias produit",children:[a.jsxs("div",{className:"media-breadcrumb",children:[a.jsx(re,{to:"/admin/produits",children:"Produits"}),a.jsx("span",{children:"›"}),a.jsx("span",{children:(t==null?void 0:t.nom)||`Produit #${e}`}),a.jsx("span",{children:"›"}),a.jsx("strong",{children:"Médias"})]}),o?a.jsx("div",{className:"loading-center",children:a.jsx("div",{className:"spinner"})}):a.jsxs("div",{className:"media-admin-grid",children:[a.jsxs("div",{children:[c&&a.jsx("div",{className:"error-message",style:{marginBottom:"1rem"},children:c}),f&&a.jsx("div",{className:"success-message",style:{marginBottom:"1rem"},children:f}),a.jsxs("section",{className:"media-section",children:[a.jsx("div",{className:"media-section-head",children:a.jsxs("h3",{children:["Images ",a.jsxs("span",{children:["(",ne.length,")"]})]})}),ne.length===0?a.jsx(wp,{text:"Aucune image"}):a.jsx("div",{className:"images-grid",children:ne.map(O=>a.jsxs("div",{className:"image-card",children:[a.jsx("button",{type:"button",className:"image-preview",style:{backgroundImage:`url(/storage/${O.chemin_media})`},onClick:()=>T(`/storage/${O.chemin_media}`),"aria-label":"Afficher l'image"}),a.jsxs("div",{className:"media-card-foot",children:[a.jsxs("span",{children:["#",O.id]}),a.jsx("button",{onClick:()=>x(O),children:"Supprimer"})]})]},O.id))})]}),a.jsxs("section",{className:"media-section",children:[a.jsx("div",{className:"media-section-head",children:a.jsxs("h3",{children:["Vidéos ",a.jsxs("span",{children:["(",me.length,")"]})]})}),me.length===0?a.jsx(wp,{text:"Aucune vidéo",small:!0}):a.jsx("div",{className:"videos-list",children:me.map(O=>a.jsxs("div",{style:{width:200},children:[a.jsx("video",{src:`/storage/${O.chemin_media}`,controls:!0,style:{width:"100%",borderRadius:8}}),a.jsx("button",{onClick:()=>x(O),children:"Supprimer"})]},O.id))})]})]}),a.jsxs("aside",{className:"upload-card",children:[a.jsx("h3",{children:"Ajouter un média"}),a.jsxs("form",{onSubmit:W,children:[a.jsxs("div",{className:"form-group",style:{marginBottom:"0.9rem"},children:[a.jsx("label",{className:"form-label",children:"Type de média"}),a.jsxs("select",{value:v,onChange:O=>{j(O.target.value),h(null),S(null)},className:"form-select",children:[a.jsx("option",{value:"image",children:"Image"}),a.jsx("option",{value:"video",children:"Vidéo"})]})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:"1.25rem"},children:[a.jsx("label",{className:"form-label",children:"Fichier"}),a.jsx("input",{type:"file",accept:"image/*,video/*",onChange:z,id:"media-upload",style:{display:"none"}}),a.jsx("label",{htmlFor:"media-upload",className:g?"upload-zone active":"upload-zone",children:b?a.jsx("img",{src:b,alt:"Aperçu"}):a.jsxs(a.Fragment,{children:[v==="image"?a.jsx(rS,{}):a.jsx(nS,{}),a.jsx("span",{children:g?g.name:"Cliquez pour choisir un fichier"})]})})]}),a.jsx("button",{type:"submit",disabled:!g||l,className:"btn btn-primary btn-full btn-sm",style:{opacity:g?1:.5},children:l?"Upload en cours...":"Uploader le média"})]})]})]}),N&&a.jsx("div",{className:"modal-overlay",onClick:()=>T(null),children:a.jsxs("div",{className:"lightbox-box",children:[a.jsx("img",{src:N,alt:"Aperçu"}),a.jsx("button",{onClick:()=>T(null),children:"✕"})]})}),y&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal",style:{maxWidth:380},children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"modal-title",children:"Supprimer ce média"}),a.jsx("button",{className:"modal-close",onClick:()=>x(null),children:"✕"})]}),a.jsx("p",{className:"delete-text",children:"Cette action est irréversible. Le fichier sera définitivement supprimé."}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{onClick:()=>x(null),className:"btn btn-secondary btn-sm",children:"Annuler"}),a.jsx("button",{onClick:()=>V(y.id),className:"delete-btn",children:"Supprimer"})]})]})}),a.jsx("style",{children:`
        .media-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.83rem;
          color: var(--n-gray);
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
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
        }

        .media-admin-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 320px;
          gap: 2rem;
          align-items: start;
        }

        .media-section {
          margin-bottom: 2rem;
        }

        .media-section-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
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
        }

        .empty-media-box.small {
          height: 80px;
        }

        .images-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 0.75rem;
        }

        .image-card {
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
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

        .media-card-foot {
          padding: 0.55rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(10,22,40,0.75);
        }

        .media-card-foot span {
          font-size: 0.7rem;
          color: var(--n-gray);
        }

        .media-card-foot button,
        .delete-small {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.2);
          color: #f87171;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.73rem;
          padding: 0.25rem 0.55rem;
          font-family: var(--font-body);
        }

        .videos-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .video-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.8rem 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: var(--radius-sm);
        }

        .video-name {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.86rem;
          color: rgba(255,255,255,0.72);
          min-width: 0;
        }

        .video-name svg {
          color: var(--n-orange);
          flex-shrink: 0;
        }

        .video-name span {
          max-width: 320px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .upload-card {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          position: sticky;
          top: 80px;
        }

        .upload-card h3 {
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
        }

        .upload-zone:hover,
        .upload-zone.active {
          border-color: rgba(255,75,43,0.45);
          background: rgba(255,75,43,0.06);
        }

        .upload-zone svg {
          color: var(--n-orange);
        }

        .upload-zone span {
          font-size: 0.78rem;
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

        .delete-text {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.65);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .modal-actions {
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

        @media (max-width: 900px) {
          .media-admin-grid {
            grid-template-columns: 1fr;
          }

          .upload-card {
            position: relative;
            top: 0;
          }
        }
      `})]})}function wp({text:e,small:t=!1}){return a.jsx("div",{className:t?"empty-media-box small":"empty-media-box",children:e})}function rS(){return a.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("rect",{x:"3",y:"5",width:"18",height:"14",rx:"2",stroke:"currentColor",strokeWidth:"1.8"}),a.jsx("circle",{cx:"8",cy:"10",r:"1.5",stroke:"currentColor",strokeWidth:"1.8"}),a.jsx("path",{d:"M21 16l-5-5-4 4-2-2-5 5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}function nS(){return a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("rect",{x:"3",y:"5",width:"14",height:"14",rx:"2",stroke:"currentColor",strokeWidth:"1.8"}),a.jsx("path",{d:"M17 10l4-3v10l-4-3",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})]})}const ji=[{value:"nouveau",label:"Nouveau",cls:"badge-cyan"},{value:"en_attente",label:"En attente",cls:"badge-amber"},{value:"traite",label:"Traité",cls:"badge-green"},{value:"archive",label:"Archivé",cls:"badge-gray"}];function iS({statut:e}){const t=ji.find(r=>r.value===e)||{label:e,cls:"badge-gray"};return a.jsx("span",{className:`badge ${t.cls}`,children:t.label})}function oS(){var N,T;const[e,t]=w.useState([]),[r,n]=w.useState(!0),[i,o]=w.useState(""),[s,l]=w.useState(null),[u,c]=w.useState("all"),[d,f]=w.useState(""),[p,y]=w.useState(null),[x,v]=w.useState(null),j=()=>{n(!0),Xg().then(m=>{const C=Array.isArray(m.data)?m.data:m.data.demandes||[];t(C)}).catch(()=>o("Erreur de chargement")).finally(()=>n(!1))};w.useEffect(()=>{j()},[]);const g=e.filter(m=>{var W,V,J,ne;const C=u==="all"||m.statut===u,_=d.toLowerCase(),z=!_||((W=m.nom)==null?void 0:W.toLowerCase().includes(_))||((V=m.email)==null?void 0:V.toLowerCase().includes(_))||((J=m.raison_sociale)==null?void 0:J.toLowerCase().includes(_))||((ne=m.secteur)==null?void 0:ne.toLowerCase().includes(_));return C&&z}),h=async(m,C)=>{v(m);try{await b2(m,C),t(_=>_.map(z=>z.id===m?{...z,statut:C}:z)),(s==null?void 0:s.id)===m&&l(_=>({..._,statut:C}))}catch{o("Erreur lors de la mise à jour du statut.")}finally{v(null)}},b=async m=>{try{await w2(m),y(null),l(null),j()}catch{o("Impossible de supprimer cette demande.")}},S=ji.reduce((m,C)=>(m[C.value]=e.filter(_=>_.statut===C.value).length,m),{});return a.jsxs(Zn,{title:"Demandes",children:[a.jsx("div",{className:"demandes-head",children:a.jsxs("div",{children:[a.jsx("h2",{children:"Demandes clients"}),a.jsxs("p",{children:[g.length," demande",g.length>1?"s":""," affichée",g.length>1?"s":""]})]})}),a.jsxs("div",{className:"stats-chips",children:[a.jsx(jp,{label:"Total",count:e.length,active:u==="all",onClick:()=>c("all")}),ji.map(m=>a.jsx(jp,{label:m.label,count:S[m.value]||0,active:u===m.value,onClick:()=>c(m.value)},m.value))]}),a.jsxs("div",{className:"search-box",children:[a.jsx("input",{type:"text",placeholder:"Rechercher par nom, email, société...",value:d,onChange:m=>f(m.target.value),className:"form-input"}),a.jsx("span",{children:"⌕"})]}),i&&a.jsx("div",{className:"error-message",style:{marginBottom:"1rem"},children:i}),r?a.jsx("div",{className:"loading-center",children:a.jsx("div",{className:"spinner"})}):g.length===0?a.jsx("div",{className:"empty-state",children:a.jsx("h3",{children:"Aucune demande trouvée"})}):a.jsx("div",{className:"data-table-wrap",children:a.jsxs("table",{className:"data-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"#"}),a.jsx("th",{children:"Contact"}),a.jsx("th",{children:"Société"}),a.jsx("th",{children:"Secteur"}),a.jsx("th",{children:"Écrans"}),a.jsx("th",{children:"Produit"}),a.jsx("th",{children:"Statut"}),a.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),a.jsx("tbody",{children:g.map(m=>a.jsxs("tr",{children:[a.jsxs("td",{className:"muted",children:["#",m.id]}),a.jsxs("td",{children:[a.jsx("div",{className:"strong",children:m.nom}),a.jsx("div",{className:"muted",children:m.email}),m.telephone&&a.jsx("div",{className:"muted",children:m.telephone})]}),a.jsx("td",{children:m.raison_sociale||"—"}),a.jsx("td",{children:m.secteur||"—"}),a.jsx("td",{children:m.nombre_ecrans||"—"}),a.jsx("td",{children:m.produit?m.produit.nom:"—"}),a.jsx("td",{children:a.jsx(iS,{statut:m.statut})}),a.jsx("td",{children:a.jsxs("div",{className:"table-actions",children:[a.jsx("button",{onClick:()=>l(m),className:"action-btn view",children:"Détails"}),a.jsx("button",{onClick:()=>y(m),className:"action-btn delete",children:"Supprimer"})]})})]},m.id))})]})}),s&&a.jsx("div",{className:"modal-overlay",onClick:m=>{m.target===m.currentTarget&&l(null)},children:a.jsxs("div",{className:"modal",style:{maxWidth:620},children:[a.jsxs("div",{className:"modal-header",children:[a.jsxs("h2",{className:"modal-title",children:["Demande #",s.id]}),a.jsx("button",{className:"modal-close",onClick:()=>l(null),children:"✕"})]}),a.jsxs("div",{className:"status-box",children:[a.jsx("span",{children:"Statut :"}),ji.map(m=>a.jsx("button",{onClick:()=>h(s.id,m.value),disabled:x===s.id,className:s.statut===m.value?"status-btn active":"status-btn",children:m.label},m.value))]}),a.jsx("div",{className:"detail-grid",children:[{label:"Nom",value:s.nom},{label:"E-mail",value:s.email},{label:"Téléphone",value:s.telephone||"—"},{label:"Raison sociale",value:s.raison_sociale||"—"},{label:"Secteur",value:s.secteur||"—"},{label:"Nombre d'écrans",value:s.nombre_ecrans||"—"},{label:"Produit concerné",value:((N=s.produit)==null?void 0:N.nom)||"—"},{label:"Statut actuel",value:((T=ji.find(m=>m.value===s.statut))==null?void 0:T.label)||s.statut}].map(m=>a.jsxs("div",{className:"detail-item",children:[a.jsx("div",{children:m.label}),a.jsx("p",{children:m.value})]},m.label))}),s.question&&a.jsxs("div",{className:"message-box",children:[a.jsx("div",{children:"Message"}),a.jsx("p",{children:s.question})]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{onClick:()=>y(s),className:"action-btn delete",children:"Supprimer"}),a.jsx("button",{onClick:()=>l(null),className:"btn btn-secondary btn-sm",children:"Fermer"})]})]})}),p&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal",style:{maxWidth:400},children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"modal-title",children:"Supprimer la demande"}),a.jsx("button",{className:"modal-close",onClick:()=>y(null),children:"✕"})]}),a.jsxs("p",{className:"delete-text",children:["Supprimer la demande de ",a.jsx("strong",{children:p.nom})," ? Cette action est irréversible."]}),a.jsxs("div",{className:"modal-actions",children:[a.jsx("button",{onClick:()=>y(null),className:"btn btn-secondary btn-sm",children:"Annuler"}),a.jsx("button",{onClick:()=>b(p.id),className:"action-btn delete",children:"Supprimer"})]})]})}),a.jsx("style",{children:`
        .demandes-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.3rem;
        }

        .demandes-head h2 {
          font-family: var(--font-head);
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
        }

        .demandes-head p {
          font-size: 0.84rem;
          color: var(--n-gray);
          margin-top: 0.2rem;
        }

        .stats-chips {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .search-box {
          position: relative;
          max-width: 380px;
          margin-bottom: 1.25rem;
        }

        .search-box input {
          padding-left: 2.3rem;
        }

        .search-box span {
          position: absolute;
          left: 0.8rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--n-gray);
        }

        .strong {
          font-weight: 700;
          color: #fff;
        }

        .muted {
          color: var(--n-gray);
          font-size: 0.78rem;
        }

        .table-actions {
          display: flex;
          gap: 0.4rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 0.35rem 0.75rem;
          font-size: 0.76rem;
          border-radius: 7px;
          cursor: pointer;
          font-family: var(--font-body);
          font-weight: 700;
          transition: 0.2s;
        }

        .action-btn.view {
          background: rgba(255,75,43,0.12);
          border: 1px solid rgba(255,75,43,0.25);
          color: var(--n-orange);
        }

        .action-btn.view:hover {
          background: rgba(255,75,43,0.2);
        }

        .action-btn.delete {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.25);
          color: #f87171;
        }

        .action-btn.delete:hover {
          background: rgba(239,68,68,0.18);
        }

        .status-box {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
          padding: 0.9rem;
          background: rgba(255,255,255,0.03);
          border-radius: var(--radius-md);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .status-box > span {
          font-size: 0.78rem;
          color: var(--n-gray);
          margin-right: 0.25rem;
          align-self: center;
        }

        .status-btn {
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
          cursor: pointer;
          font-family: var(--font-body);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.55);
        }

        .status-btn.active {
          background: rgba(255,75,43,0.18);
          border-color: rgba(255,75,43,0.38);
          color: #fff;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }

        .detail-item {
          padding: 0.75rem 0.9rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 10px;
        }

        .detail-item div,
        .message-box div {
          font-size: 0.68rem;
          color: var(--n-gray);
          text-transform: uppercase;
          letter-spacing: 0.07em;
          margin-bottom: 0.25rem;
          font-weight: 800;
        }

        .detail-item p {
          font-size: 0.88rem;
          color: #fff;
        }

        .message-box {
          padding: 0.9rem 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 10px;
          margin-bottom: 1.25rem;
        }

        .message-box p {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.65;
        }

        .modal-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .delete-text {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.65);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .delete-text strong {
          color: #fff;
        }

        @media (max-width: 700px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function jp({label:e,count:t,active:r,onClick:n}){return a.jsxs("button",{onClick:n,className:r?"stat-chip active":"stat-chip",children:[e,a.jsx("span",{children:t}),a.jsx("style",{children:`
        .stat-chip {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.45rem 0.95rem;
          border-radius: 999px;
          font-size: 0.82rem;
          font-weight: 700;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.58);
          cursor: pointer;
          font-family: var(--font-body);
          transition: 0.2s;
        }

        .stat-chip:hover,
        .stat-chip.active {
          background: rgba(255,75,43,0.14);
          border-color: rgba(255,75,43,0.35);
          color: #fff;
        }

        .stat-chip span {
          background: rgba(255,255,255,0.08);
          border-radius: 999px;
          padding: 0.05rem 0.45rem;
          font-size: 0.72rem;
          font-weight: 900;
        }

        .stat-chip.active span {
          background: rgba(255,75,43,0.28);
          color: #fff;
        }
      `})]})}function aS(){const{token:e,hydrated:t}=ms(n=>n.auth),r=ps();return w.useEffect(()=>{e&&!t&&r(ca())},[e,t,r]),e?t?a.jsx(o1,{}):a.jsxs("div",{className:"loading-center",style:{minHeight:"100vh"},children:[a.jsx("div",{className:"spinner"}),a.jsx("p",{children:"Vérification de l'accès..."})]}):a.jsx(i1,{to:"/admin/login",replace:!0})}const Sp={type_produit_id:"",nom:"",description:""};function sS(){const[e,t]=w.useState([]),[r,n]=w.useState([]),[i,o]=w.useState(!0),[s,l]=w.useState(null),[u,c]=w.useState(null),[d,f]=w.useState(Sp),[p,y]=w.useState(!1),[x,v]=w.useState(""),[j,g]=w.useState(null),h=()=>{o(!0),v(""),Promise.all([Ps(),Jg()]).then(([_,z])=>{const W=Array.isArray(_.data)?_.data:_.data.types||[],V=Array.isArray(z.data)?z.data:z.data.sous_types||z.data.sousTypes||[];t(W),n(V)}).catch(()=>v("Erreur de chargement")).finally(()=>o(!1))};w.useEffect(()=>{h()},[]);const b=()=>{var _;f({...Sp,type_produit_id:((_=e[0])==null?void 0:_.id)||""}),c(null),v(""),l("create")},S=_=>{f({type_produit_id:_.type_produit_id||"",nom:_.nom||"",description:_.description||""}),c(_),v(""),l("edit")},N=()=>{l(null),c(null),v("")},T=_=>{const{name:z,value:W}=_.target;f(V=>({...V,[z]:W}))},m=async _=>{var z,W,V,J;_.preventDefault(),y(!0),v("");try{s==="create"?await z2(d):await L2(u.id,d),N(),h()}catch(ne){const me=(W=(z=ne.response)==null?void 0:z.data)==null?void 0:W.errors;v(me?Object.values(me).flat().join(" | "):((J=(V=ne.response)==null?void 0:V.data)==null?void 0:J.message)||"Une erreur est survenue.")}finally{y(!1)}},C=async _=>{var z,W;try{await D2(_),g(null),h()}catch(V){v(((W=(z=V.response)==null?void 0:z.data)==null?void 0:W.message)||"Impossible de supprimer ce sous-type."),g(null)}};return a.jsxs(Zn,{title:"Sous-types de produits",children:[a.jsxs("div",{className:"admin-page-head",children:[a.jsxs("div",{children:[a.jsx("h2",{children:"Sous-types de produits"}),a.jsxs("p",{children:[r.length," sous-type",r.length>1?"s":""," enregistré",r.length>1?"s":""]})]}),a.jsx("button",{onClick:b,className:"btn btn-primary btn-sm",children:"+ Nouveau sous-type"})]}),x&&!s&&a.jsx("div",{className:"error-message",style:{marginBottom:"1rem"},children:x}),i?a.jsx("div",{className:"loading-center",children:a.jsx("div",{className:"spinner"})}):r.length===0?a.jsxs("div",{className:"empty-state",children:[a.jsx("h3",{children:"Aucun sous-type"}),a.jsx("button",{onClick:b,className:"btn btn-primary btn-sm",style:{marginTop:"1rem"},children:"Créer le premier sous-type"})]}):a.jsx("div",{className:"data-table-wrap",children:a.jsxs("table",{className:"data-table",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"ID"}),a.jsx("th",{children:"Sous-type"}),a.jsx("th",{children:"Type parent"}),a.jsx("th",{children:"Slug"}),a.jsx("th",{children:"Description"}),a.jsx("th",{style:{textAlign:"right"},children:"Actions"})]})}),a.jsx("tbody",{children:r.map(_=>{var z,W,V;return a.jsxs("tr",{children:[a.jsxs("td",{style:{color:"var(--n-gray)",fontSize:"0.8rem"},children:["#",_.id]}),a.jsx("td",{children:a.jsx("strong",{style:{color:"#fff"},children:_.nom})}),a.jsx("td",{children:a.jsx("span",{className:"badge badge-cyan",children:((z=_.type_produit)==null?void 0:z.nom)||((W=_.typeProduit)==null?void 0:W.nom)||((V=e.find(J=>J.id===_.type_produit_id))==null?void 0:V.nom)||"—"})}),a.jsx("td",{children:a.jsx("code",{className:"admin-code",children:_.slug})}),a.jsx("td",{style:{color:"var(--n-gray)",fontSize:"0.84rem",maxWidth:320},children:_.description?_.description.length>90?_.description.slice(0,90)+"…":_.description:"—"}),a.jsx("td",{children:a.jsxs("div",{className:"table-actions",children:[a.jsx("button",{onClick:()=>S(_),className:"action-btn edit",children:"Modifier"}),a.jsx("button",{onClick:()=>g(_),className:"action-btn delete",children:"Supprimer"})]})})]},_.id)})})]})}),s&&a.jsx("div",{className:"modal-overlay",onClick:_=>{_.target===_.currentTarget&&N()},children:a.jsxs("div",{className:"modal",style:{maxWidth:540},children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"modal-title",children:s==="create"?"Nouveau sous-type":"Modifier le sous-type"}),a.jsx("button",{className:"modal-close",onClick:N,children:"✕"})]}),x&&a.jsx("div",{className:"error-message",style:{marginBottom:"1rem"},children:x}),a.jsxs("form",{onSubmit:m,children:[a.jsxs("div",{className:"form-group",style:{marginBottom:"1rem"},children:[a.jsx("label",{className:"form-label",children:"Type parent *"}),a.jsxs("select",{name:"type_produit_id",value:d.type_produit_id,onChange:T,className:"form-select",required:!0,children:[a.jsx("option",{value:"",children:"Sélectionner un type"}),e.map(_=>a.jsx("option",{value:_.id,children:_.nom},_.id))]})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:"1rem"},children:[a.jsx("label",{className:"form-label",children:"Nom du sous-type *"}),a.jsx("input",{name:"nom",value:d.nom,onChange:T,className:"form-input",placeholder:"Ex : Écrans interactifs",required:!0})]}),a.jsxs("div",{className:"form-group",style:{marginBottom:"1.5rem"},children:[a.jsx("label",{className:"form-label",children:"Description"}),a.jsx("textarea",{name:"description",value:d.description,onChange:T,className:"form-textarea",placeholder:"Description courte du sous-type...",style:{minHeight:90}})]}),a.jsxs("div",{style:{display:"flex",gap:"0.75rem",justifyContent:"flex-end",flexWrap:"wrap"},children:[a.jsx("button",{type:"button",onClick:N,className:"btn btn-secondary btn-sm",children:"Annuler"}),a.jsx("button",{type:"submit",disabled:p,className:"btn btn-primary btn-sm",children:p?"Enregistrement...":s==="create"?"Créer":"Mettre à jour"})]})]})]})}),j&&a.jsx("div",{className:"modal-overlay",children:a.jsxs("div",{className:"modal",style:{maxWidth:420},children:[a.jsxs("div",{className:"modal-header",children:[a.jsx("h2",{className:"modal-title",children:"Supprimer le sous-type"}),a.jsx("button",{className:"modal-close",onClick:()=>g(null),children:"✕"})]}),a.jsxs("p",{className:"delete-text",children:["Voulez-vous supprimer ",a.jsx("strong",{children:j.nom})," ? Les produits associés garderont le type principal mais perdront ce sous-type."]}),a.jsxs("div",{style:{display:"flex",gap:"0.75rem",justifyContent:"flex-end",flexWrap:"wrap"},children:[a.jsx("button",{onClick:()=>g(null),className:"btn btn-secondary btn-sm",children:"Annuler"}),a.jsx("button",{onClick:()=>C(j.id),className:"delete-btn",children:"Supprimer"})]})]})}),a.jsx("style",{children:`
        .admin-page-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .admin-page-head h2 {
          font-family: var(--font-head);
          font-size: 1.1rem;
          font-weight: 800;
          color: #fff;
        }

        .admin-page-head p {
          font-size: 0.84rem;
          color: var(--n-gray);
          margin-top: 0.2rem;
        }

        .admin-code {
          font-size: 0.78rem;
          color: var(--n-orange);
          background: rgba(255,75,43,0.08);
          padding: 0.18rem 0.45rem;
          border-radius: 5px;
        }

        .table-actions {
          display: flex;
          gap: 0.5rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 0.36rem 0.8rem;
          font-size: 0.78rem;
          border-radius: 7px;
          cursor: pointer;
          font-family: var(--font-body);
          font-weight: 700;
          transition: 0.2s;
        }

        .action-btn.edit {
          background: rgba(255,75,43,0.12);
          border: 1px solid rgba(255,75,43,0.25);
          color: var(--n-orange);
        }

        .action-btn.edit:hover {
          background: rgba(255,75,43,0.2);
        }

        .action-btn.delete,
        .delete-btn {
          background: rgba(239,68,68,0.1);
          border: 1px solid rgba(239,68,68,0.25);
          color: #f87171;
        }

        .action-btn.delete:hover,
        .delete-btn:hover {
          background: rgba(239,68,68,0.18);
        }

        .delete-text {
          font-size: 0.9rem;
          color: rgba(255,255,255,0.68);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .delete-text strong {
          color: #fff;
        }

        .delete-btn {
          padding: 0.5rem 1rem;
          border-radius: 7px;
          cursor: pointer;
          font-size: 0.83rem;
          font-family: var(--font-body);
          font-weight: 800;
        }
      `})]})}const lS=m1([{path:"/",element:a.jsx(E2,{})},{path:"/produits",element:a.jsx(M2,{})},{path:"/produits/type/:slug",element:a.jsx(O2,{})},{path:"/admin/sous-types-produits",element:a.jsx(sS,{})},{path:"/produits/:id",element:a.jsx(F2,{})},{path:"/contact",element:a.jsx($2,{})},{path:"/secteurs",element:a.jsx(q2,{})},{path:"/admin/login",element:a.jsx(K2,{})},{path:"/admin",element:a.jsx(aS,{}),children:[{path:"dashboard",element:a.jsx(X2,{})},{path:"types-produits",element:a.jsx(J2,{})},{path:"produits",element:a.jsx(eS,{})},{path:"produits/:id/medias",element:a.jsx(tS,{})},{path:"demandes",element:a.jsx(oS,{})}]},{path:"*",element:a.jsx(uS,{})}]);function uS(){return a.jsxs("div",{style:{minHeight:"100vh",background:"var(--n-dark)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"2rem"},children:[a.jsx("div",{style:{fontFamily:"var(--font-head)",fontSize:"6rem",fontWeight:800,color:"rgba(12,91,232,0.3)",lineHeight:1},children:"404"}),a.jsx("h1",{style:{fontFamily:"var(--font-head)",fontSize:"1.8rem",fontWeight:700,margin:"1rem 0 0.6rem"},children:"Page introuvable"}),a.jsx("p",{style:{fontSize:"0.95rem",color:"rgba(255,255,255,0.5)",marginBottom:"2rem"},children:"La page que vous recherchez n'existe pas ou a été déplacée."}),a.jsx("a",{href:"/",className:"btn btn-primary",children:"← Retour à l'accueil"})]})}wl.createRoot(document.getElementById("root")).render(a.jsx(Ap.StrictMode,{children:a.jsx(Y1,{store:Fj,children:a.jsx(j1,{router:lS})})}));
