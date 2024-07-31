function k0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const l=Object.getOwnPropertyDescriptor(r,o);l&&Object.defineProperty(e,o,l.get?l:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Pu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var zu={exports:{}},$o={},Mu={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sr=Symbol.for("react.element"),C0=Symbol.for("react.portal"),E0=Symbol.for("react.fragment"),_0=Symbol.for("react.strict_mode"),j0=Symbol.for("react.profiler"),N0=Symbol.for("react.provider"),P0=Symbol.for("react.context"),z0=Symbol.for("react.forward_ref"),M0=Symbol.for("react.suspense"),T0=Symbol.for("react.memo"),L0=Symbol.for("react.lazy"),ua=Symbol.iterator;function R0(e){return e===null||typeof e!="object"?null:(e=ua&&e[ua]||e["@@iterator"],typeof e=="function"?e:null)}var Tu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lu=Object.assign,Ru={};function jn(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||Tu}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ou(){}Ou.prototype=jn.prototype;function ts(e,t,n){this.props=e,this.context=t,this.refs=Ru,this.updater=n||Tu}var ns=ts.prototype=new Ou;ns.constructor=ts;Lu(ns,jn.prototype);ns.isPureReactComponent=!0;var ca=Array.isArray,Iu=Object.prototype.hasOwnProperty,rs={current:null},$u={key:!0,ref:!0,__self:!0,__source:!0};function Du(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Iu.call(t,r)&&!$u.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),f=0;f<s;f++)a[f]=arguments[f+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Sr,type:e,key:l,ref:i,props:o,_owner:rs.current}}function O0(e,t){return{$$typeof:Sr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function os(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sr}function I0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var fa=/\/+/g;function _l(e,t){return typeof e=="object"&&e!==null&&e.key!=null?I0(""+e.key):t.toString(36)}function Gr(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Sr:case C0:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+_l(i,0):r,ca(o)?(n="",e!=null&&(n=e.replace(fa,"$&/")+"/"),Gr(o,t,n,"",function(f){return f})):o!=null&&(os(o)&&(o=O0(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(fa,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",ca(e))for(var s=0;s<e.length;s++){l=e[s];var a=r+_l(l,s);i+=Gr(l,t,n,a,o)}else if(a=R0(e),typeof a=="function")for(e=a.call(e),s=0;!(l=e.next()).done;)l=l.value,a=r+_l(l,s++),i+=Gr(l,t,n,a,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function zr(e,t,n){if(e==null)return e;var r=[],o=0;return Gr(e,r,"","",function(l){return t.call(n,l,o++)}),r}function $0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ye={current:null},Zr={transition:null},D0={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:Zr,ReactCurrentOwner:rs};function Fu(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:zr,forEach:function(e,t,n){zr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return zr(e,function(){t++}),t},toArray:function(e){return zr(e,function(t){return t})||[]},only:function(e){if(!os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=jn;R.Fragment=E0;R.Profiler=j0;R.PureComponent=ts;R.StrictMode=_0;R.Suspense=M0;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;R.act=Fu;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lu({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=rs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Iu.call(t,a)&&!$u.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var f=0;f<a;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:Sr,type:e.type,key:o,ref:l,props:r,_owner:i}};R.createContext=function(e){return e={$$typeof:P0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:N0,_context:e},e.Consumer=e};R.createElement=Du;R.createFactory=function(e){var t=Du.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:z0,render:e}};R.isValidElement=os;R.lazy=function(e){return{$$typeof:L0,_payload:{_status:-1,_result:e},_init:$0}};R.memo=function(e,t){return{$$typeof:T0,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Zr.transition;Zr.transition={};try{e()}finally{Zr.transition=t}};R.unstable_act=Fu;R.useCallback=function(e,t){return ye.current.useCallback(e,t)};R.useContext=function(e){return ye.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ye.current.useDeferredValue(e)};R.useEffect=function(e,t){return ye.current.useEffect(e,t)};R.useId=function(){return ye.current.useId()};R.useImperativeHandle=function(e,t,n){return ye.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ye.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ye.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ye.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ye.current.useReducer(e,t,n)};R.useRef=function(e){return ye.current.useRef(e)};R.useState=function(e){return ye.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ye.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ye.current.useTransition()};R.version="18.3.1";Mu.exports=R;var L=Mu.exports;const Au=Pu(L),da=k0({__proto__:null,default:Au},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F0=L,A0=Symbol.for("react.element"),V0=Symbol.for("react.fragment"),U0=Object.prototype.hasOwnProperty,B0=F0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H0={key:!0,ref:!0,__self:!0,__source:!0};function Vu(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)U0.call(t,r)&&!H0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:A0,type:e,key:l,ref:i,props:o,_owner:B0.current}}$o.Fragment=V0;$o.jsx=Vu;$o.jsxs=Vu;zu.exports=$o;var c=zu.exports,ni={},Uu={exports:{}},Te={},Bu={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,M){var T=N.length;N.push(M);e:for(;0<T;){var Z=T-1>>>1,re=N[Z];if(0<o(re,M))N[Z]=M,N[T]=re,T=Z;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],T=N.pop();if(T!==M){N[0]=T;e:for(var Z=0,re=N.length,Nr=re>>>1;Z<Nr;){var Ot=2*(Z+1)-1,El=N[Ot],It=Ot+1,Pr=N[It];if(0>o(El,T))It<re&&0>o(Pr,El)?(N[Z]=Pr,N[It]=T,Z=It):(N[Z]=El,N[Ot]=T,Z=Ot);else if(It<re&&0>o(Pr,T))N[Z]=Pr,N[It]=T,Z=It;else break e}}return M}function o(N,M){var T=N.sortIndex-M.sortIndex;return T!==0?T:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var a=[],f=[],h=1,m=null,v=3,w=!1,x=!1,g=!1,z=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(N){for(var M=n(f);M!==null;){if(M.callback===null)r(f);else if(M.startTime<=N)r(f),M.sortIndex=M.expirationTime,t(a,M);else break;M=n(f)}}function y(N){if(g=!1,p(N),!x)if(n(a)!==null)x=!0,kl(E);else{var M=n(f);M!==null&&Cl(y,M.startTime-N)}}function E(N,M){x=!1,g&&(g=!1,d(P),P=-1),w=!0;var T=v;try{for(p(M),m=n(a);m!==null&&(!(m.expirationTime>M)||N&&!Ue());){var Z=m.callback;if(typeof Z=="function"){m.callback=null,v=m.priorityLevel;var re=Z(m.expirationTime<=M);M=e.unstable_now(),typeof re=="function"?m.callback=re:m===n(a)&&r(a),p(M)}else r(a);m=n(a)}if(m!==null)var Nr=!0;else{var Ot=n(f);Ot!==null&&Cl(y,Ot.startTime-M),Nr=!1}return Nr}finally{m=null,v=T,w=!1}}var _=!1,C=null,P=-1,G=5,O=-1;function Ue(){return!(e.unstable_now()-O<G)}function Mn(){if(C!==null){var N=e.unstable_now();O=N;var M=!0;try{M=C(!0,N)}finally{M?Tn():(_=!1,C=null)}}else _=!1}var Tn;if(typeof u=="function")Tn=function(){u(Mn)};else if(typeof MessageChannel<"u"){var aa=new MessageChannel,S0=aa.port2;aa.port1.onmessage=Mn,Tn=function(){S0.postMessage(null)}}else Tn=function(){z(Mn,0)};function kl(N){C=N,_||(_=!0,Tn())}function Cl(N,M){P=z(function(){N(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||w||(x=!0,kl(E))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return v},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(N){switch(v){case 1:case 2:case 3:var M=3;break;default:M=v}var T=v;v=M;try{return N()}finally{v=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var T=v;v=N;try{return M()}finally{v=T}},e.unstable_scheduleCallback=function(N,M,T){var Z=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Z+T:Z):T=Z,N){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=T+re,N={id:h++,callback:M,priorityLevel:N,startTime:T,expirationTime:re,sortIndex:-1},T>Z?(N.sortIndex=T,t(f,N),n(a)===null&&N===n(f)&&(g?(d(P),P=-1):g=!0,Cl(y,T-Z))):(N.sortIndex=re,t(a,N),x||w||(x=!0,kl(E))),N},e.unstable_shouldYield=Ue,e.unstable_wrapCallback=function(N){var M=v;return function(){var T=v;v=M;try{return N.apply(this,arguments)}finally{v=T}}}})(Hu);Bu.exports=Hu;var W0=Bu.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0=L,Me=W0;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wu=new Set,er={};function Gt(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(er[e]=t,e=0;e<t.length;e++)Wu.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ri=Object.prototype.hasOwnProperty,Y0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pa={},ma={};function X0(e){return ri.call(ma,e)?!0:ri.call(pa,e)?!1:Y0.test(e)?ma[e]=!0:(pa[e]=!0,!1)}function K0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function G0(e,t,n,r){if(t===null||typeof t>"u"||K0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var ce={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ce[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ce[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ce[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ce[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ce[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ce[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ce[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ce[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ce[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ls=/[\-:]([a-z])/g;function is(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ls,is);ce[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ls,is);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ls,is);ce[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});ce.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ce[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ss(e,t,n,r){var o=ce.hasOwnProperty(t)?ce[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(G0(t,n,o,r)&&(n=null),r||o===null?X0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=Q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Mr=Symbol.for("react.element"),qt=Symbol.for("react.portal"),bt=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),oi=Symbol.for("react.profiler"),Qu=Symbol.for("react.provider"),Yu=Symbol.for("react.context"),us=Symbol.for("react.forward_ref"),li=Symbol.for("react.suspense"),ii=Symbol.for("react.suspense_list"),cs=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Xu=Symbol.for("react.offscreen"),ha=Symbol.iterator;function Ln(e){return e===null||typeof e!="object"?null:(e=ha&&e[ha]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,jl;function Un(e){if(jl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jl=t&&t[1]||""}return`
`+jl+e}var Nl=!1;function Pl(e,t){if(!e||Nl)return"";Nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(f){var r=f}Reflect.construct(e,[],t)}else{try{t.call()}catch(f){r=f}e.call(t.prototype)}else{try{throw Error()}catch(f){r=f}e()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var o=f.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,s=l.length-1;1<=i&&0<=s&&o[i]!==l[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==l[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==l[s]){var a=`
`+o[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=s);break}}}finally{Nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Un(e):""}function Z0(e){switch(e.tag){case 5:return Un(e.type);case 16:return Un("Lazy");case 13:return Un("Suspense");case 19:return Un("SuspenseList");case 0:case 2:case 15:return e=Pl(e.type,!1),e;case 11:return e=Pl(e.type.render,!1),e;case 1:return e=Pl(e.type,!0),e;default:return""}}function si(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bt:return"Fragment";case qt:return"Portal";case oi:return"Profiler";case as:return"StrictMode";case li:return"Suspense";case ii:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Yu:return(e.displayName||"Context")+".Consumer";case Qu:return(e._context.displayName||"Context")+".Provider";case us:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cs:return t=e.displayName||null,t!==null?t:si(e.type)||"Memo";case ht:t=e._payload,e=e._init;try{return si(e(t))}catch{}}return null}function J0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return si(t);case 8:return t===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ku(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function q0(e){var t=Ku(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Tr(e){e._valueTracker||(e._valueTracker=q0(e))}function Gu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ku(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function co(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ai(e,t){var n=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function va(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=zt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zu(e,t){t=t.checked,t!=null&&ss(e,"checked",t,!1)}function ui(e,t){Zu(e,t);var n=zt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ci(e,t.type,n):t.hasOwnProperty("defaultValue")&&ci(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ga(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ci(e,t,n){(t!=="number"||co(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Bn=Array.isArray;function fn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+zt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function fi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ya(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(Bn(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:zt(n)}}function Ju(e,t){var n=zt(t.value),r=zt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function xa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function qu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?qu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,bu=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function tr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},b0=["Webkit","ms","Moz","O"];Object.keys(Qn).forEach(function(e){b0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qn[t]=Qn[e]})});function ec(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qn.hasOwnProperty(e)&&Qn[e]?(""+t).trim():t+"px"}function tc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ec(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ef=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pi(e,t){if(t){if(ef[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function mi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hi=null;function fs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vi=null,dn=null,pn=null;function wa(e){if(e=Er(e)){if(typeof vi!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Uo(t),vi(e.stateNode,e.type,t))}}function nc(e){dn?pn?pn.push(e):pn=[e]:dn=e}function rc(){if(dn){var e=dn,t=pn;if(pn=dn=null,wa(e),t)for(e=0;e<t.length;e++)wa(t[e])}}function oc(e,t){return e(t)}function lc(){}var zl=!1;function ic(e,t,n){if(zl)return e(t,n);zl=!0;try{return oc(e,t,n)}finally{zl=!1,(dn!==null||pn!==null)&&(lc(),rc())}}function nr(e,t){var n=e.stateNode;if(n===null)return null;var r=Uo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var gi=!1;if(ut)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){gi=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{gi=!1}function tf(e,t,n,r,o,l,i,s,a){var f=Array.prototype.slice.call(arguments,3);try{t.apply(n,f)}catch(h){this.onError(h)}}var Yn=!1,fo=null,po=!1,yi=null,nf={onError:function(e){Yn=!0,fo=e}};function rf(e,t,n,r,o,l,i,s,a){Yn=!1,fo=null,tf.apply(nf,arguments)}function of(e,t,n,r,o,l,i,s,a){if(rf.apply(this,arguments),Yn){if(Yn){var f=fo;Yn=!1,fo=null}else throw Error(S(198));po||(po=!0,yi=f)}}function Zt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function sc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Sa(e){if(Zt(e)!==e)throw Error(S(188))}function lf(e){var t=e.alternate;if(!t){if(t=Zt(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return Sa(o),e;if(l===r)return Sa(o),t;l=l.sibling}throw Error(S(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=l;break}if(s===r){i=!0,r=o,n=l;break}s=s.sibling}if(!i){for(s=l.child;s;){if(s===n){i=!0,n=l,r=o;break}if(s===r){i=!0,r=l,n=o;break}s=s.sibling}if(!i)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function ac(e){return e=lf(e),e!==null?uc(e):null}function uc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=uc(e);if(t!==null)return t;e=e.sibling}return null}var cc=Me.unstable_scheduleCallback,ka=Me.unstable_cancelCallback,sf=Me.unstable_shouldYield,af=Me.unstable_requestPaint,J=Me.unstable_now,uf=Me.unstable_getCurrentPriorityLevel,ds=Me.unstable_ImmediatePriority,fc=Me.unstable_UserBlockingPriority,mo=Me.unstable_NormalPriority,cf=Me.unstable_LowPriority,dc=Me.unstable_IdlePriority,Do=null,tt=null;function ff(e){if(tt&&typeof tt.onCommitFiberRoot=="function")try{tt.onCommitFiberRoot(Do,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:mf,df=Math.log,pf=Math.LN2;function mf(e){return e>>>=0,e===0?32:31-(df(e)/pf|0)|0}var Rr=64,Or=4194304;function Hn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ho(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=Hn(s):(l&=i,l!==0&&(r=Hn(l)))}else i=n&~o,i!==0?r=Hn(i):l!==0&&(r=Hn(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ye(t),o=1<<n,r|=e[n],t&=~o;return r}function hf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vf(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-Ye(l),s=1<<i,a=o[i];a===-1?(!(s&n)||s&r)&&(o[i]=hf(s,t)):a<=t&&(e.expiredLanes|=s),l&=~s}}function xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function pc(){var e=Rr;return Rr<<=1,!(Rr&4194240)&&(Rr=64),e}function Ml(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function kr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=n}function gf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ye(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ye(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hc,ms,vc,gc,yc,wi=!1,Ir=[],St=null,kt=null,Ct=null,rr=new Map,or=new Map,gt=[],yf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ca(e,t){switch(e){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":rr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function On(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=Er(t),t!==null&&ms(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function xf(e,t,n,r,o){switch(t){case"focusin":return St=On(St,e,t,n,r,o),!0;case"dragenter":return kt=On(kt,e,t,n,r,o),!0;case"mouseover":return Ct=On(Ct,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return rr.set(l,On(rr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,or.set(l,On(or.get(l)||null,e,t,n,r,o)),!0}return!1}function xc(e){var t=At(e.target);if(t!==null){var n=Zt(t);if(n!==null){if(t=n.tag,t===13){if(t=sc(n),t!==null){e.blockedOn=t,yc(e.priority,function(){vc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Si(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);hi=r,n.target.dispatchEvent(r),hi=null}else return t=Er(n),t!==null&&ms(t),e.blockedOn=n,!1;t.shift()}return!0}function Ea(e,t,n){Jr(e)&&n.delete(t)}function wf(){wi=!1,St!==null&&Jr(St)&&(St=null),kt!==null&&Jr(kt)&&(kt=null),Ct!==null&&Jr(Ct)&&(Ct=null),rr.forEach(Ea),or.forEach(Ea)}function In(e,t){e.blockedOn===t&&(e.blockedOn=null,wi||(wi=!0,Me.unstable_scheduleCallback(Me.unstable_NormalPriority,wf)))}function lr(e){function t(o){return In(o,e)}if(0<Ir.length){In(Ir[0],e);for(var n=1;n<Ir.length;n++){var r=Ir[n];r.blockedOn===e&&(r.blockedOn=null)}}for(St!==null&&In(St,e),kt!==null&&In(kt,e),Ct!==null&&In(Ct,e),rr.forEach(t),or.forEach(t),n=0;n<gt.length;n++)r=gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gt.length&&(n=gt[0],n.blockedOn===null);)xc(n),n.blockedOn===null&&gt.shift()}var mn=pt.ReactCurrentBatchConfig,vo=!0;function Sf(e,t,n,r){var o=F,l=mn.transition;mn.transition=null;try{F=1,hs(e,t,n,r)}finally{F=o,mn.transition=l}}function kf(e,t,n,r){var o=F,l=mn.transition;mn.transition=null;try{F=4,hs(e,t,n,r)}finally{F=o,mn.transition=l}}function hs(e,t,n,r){if(vo){var o=Si(e,t,n,r);if(o===null)Vl(e,t,r,go,n),Ca(e,r);else if(xf(o,e,t,n,r))r.stopPropagation();else if(Ca(e,r),t&4&&-1<yf.indexOf(e)){for(;o!==null;){var l=Er(o);if(l!==null&&hc(l),l=Si(e,t,n,r),l===null&&Vl(e,t,r,go,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else Vl(e,t,r,null,n)}}var go=null;function Si(e,t,n,r){if(go=null,e=fs(r),e=At(e),e!==null)if(t=Zt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=sc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return go=e,null}function wc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(uf()){case ds:return 1;case fc:return 4;case mo:case cf:return 16;case dc:return 536870912;default:return 16}default:return 16}}var xt=null,vs=null,qr=null;function Sc(){if(qr)return qr;var e,t=vs,n=t.length,r,o="value"in xt?xt.value:xt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return qr=o.slice(e,1<r?1-r:void 0)}function br(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $r(){return!0}function _a(){return!1}function Le(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?$r:_a,this.isPropagationStopped=_a,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$r)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$r)},persist:function(){},isPersistent:$r}),t}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=Le(Nn),Cr=X({},Nn,{view:0,detail:0}),Cf=Le(Cr),Tl,Ll,$n,Fo=X({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$n&&($n&&e.type==="mousemove"?(Tl=e.screenX-$n.screenX,Ll=e.screenY-$n.screenY):Ll=Tl=0,$n=e),Tl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),ja=Le(Fo),Ef=X({},Fo,{dataTransfer:0}),_f=Le(Ef),jf=X({},Cr,{relatedTarget:0}),Rl=Le(jf),Nf=X({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),Pf=Le(Nf),zf=X({},Nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mf=Le(zf),Tf=X({},Nn,{data:0}),Na=Le(Tf),Lf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function If(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Of[e])?!!t[e]:!1}function ys(){return If}var $f=X({},Cr,{key:function(e){if(e.key){var t=Lf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=br(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?br(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?br(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Df=Le($f),Ff=X({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pa=Le(Ff),Af=X({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),Vf=Le(Af),Uf=X({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bf=Le(Uf),Hf=X({},Fo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wf=Le(Hf),Qf=[9,13,27,32],xs=ut&&"CompositionEvent"in window,Xn=null;ut&&"documentMode"in document&&(Xn=document.documentMode);var Yf=ut&&"TextEvent"in window&&!Xn,kc=ut&&(!xs||Xn&&8<Xn&&11>=Xn),za=" ",Ma=!1;function Cc(e,t){switch(e){case"keyup":return Qf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var en=!1;function Xf(e,t){switch(e){case"compositionend":return Ec(t);case"keypress":return t.which!==32?null:(Ma=!0,za);case"textInput":return e=t.data,e===za&&Ma?null:e;default:return null}}function Kf(e,t){if(en)return e==="compositionend"||!xs&&Cc(e,t)?(e=Sc(),qr=vs=xt=null,en=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return kc&&t.locale!=="ko"?null:t.data;default:return null}}var Gf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ta(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Gf[e.type]:t==="textarea"}function _c(e,t,n,r){nc(r),t=yo(t,"onChange"),0<t.length&&(n=new gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,ir=null;function Zf(e){$c(e,0)}function Ao(e){var t=rn(e);if(Gu(t))return e}function Jf(e,t){if(e==="change")return t}var jc=!1;if(ut){var Ol;if(ut){var Il="oninput"in document;if(!Il){var La=document.createElement("div");La.setAttribute("oninput","return;"),Il=typeof La.oninput=="function"}Ol=Il}else Ol=!1;jc=Ol&&(!document.documentMode||9<document.documentMode)}function Ra(){Kn&&(Kn.detachEvent("onpropertychange",Nc),ir=Kn=null)}function Nc(e){if(e.propertyName==="value"&&Ao(ir)){var t=[];_c(t,ir,e,fs(e)),ic(Zf,t)}}function qf(e,t,n){e==="focusin"?(Ra(),Kn=t,ir=n,Kn.attachEvent("onpropertychange",Nc)):e==="focusout"&&Ra()}function bf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(ir)}function ed(e,t){if(e==="click")return Ao(t)}function td(e,t){if(e==="input"||e==="change")return Ao(t)}function nd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ke=typeof Object.is=="function"?Object.is:nd;function sr(e,t){if(Ke(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ri.call(t,o)||!Ke(e[o],t[o]))return!1}return!0}function Oa(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ia(e,t){var n=Oa(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Oa(n)}}function Pc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zc(){for(var e=window,t=co();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=co(e.document)}return t}function ws(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function rd(e){var t=zc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pc(n.ownerDocument.documentElement,n)){if(r!==null&&ws(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=Ia(n,l);var i=Ia(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var od=ut&&"documentMode"in document&&11>=document.documentMode,tn=null,ki=null,Gn=null,Ci=!1;function $a(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ci||tn==null||tn!==co(r)||(r=tn,"selectionStart"in r&&ws(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gn&&sr(Gn,r)||(Gn=r,r=yo(ki,"onSelect"),0<r.length&&(t=new gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=tn)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var nn={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionend:Dr("Transition","TransitionEnd")},$l={},Mc={};ut&&(Mc=document.createElement("div").style,"AnimationEvent"in window||(delete nn.animationend.animation,delete nn.animationiteration.animation,delete nn.animationstart.animation),"TransitionEvent"in window||delete nn.transitionend.transition);function Vo(e){if($l[e])return $l[e];if(!nn[e])return e;var t=nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mc)return $l[e]=t[n];return e}var Tc=Vo("animationend"),Lc=Vo("animationiteration"),Rc=Vo("animationstart"),Oc=Vo("transitionend"),Ic=new Map,Da="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tt(e,t){Ic.set(e,t),Gt(t,[e])}for(var Dl=0;Dl<Da.length;Dl++){var Fl=Da[Dl],ld=Fl.toLowerCase(),id=Fl[0].toUpperCase()+Fl.slice(1);Tt(ld,"on"+id)}Tt(Tc,"onAnimationEnd");Tt(Lc,"onAnimationIteration");Tt(Rc,"onAnimationStart");Tt("dblclick","onDoubleClick");Tt("focusin","onFocus");Tt("focusout","onBlur");Tt(Oc,"onTransitionEnd");yn("onMouseEnter",["mouseout","mouseover"]);yn("onMouseLeave",["mouseout","mouseover"]);yn("onPointerEnter",["pointerout","pointerover"]);yn("onPointerLeave",["pointerout","pointerover"]);Gt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Gt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Gt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Gt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Gt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function Fa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,of(r,t,void 0,e),e.currentTarget=null}function $c(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],a=s.instance,f=s.currentTarget;if(s=s.listener,a!==l&&o.isPropagationStopped())break e;Fa(o,s,f),l=a}else for(i=0;i<r.length;i++){if(s=r[i],a=s.instance,f=s.currentTarget,s=s.listener,a!==l&&o.isPropagationStopped())break e;Fa(o,s,f),l=a}}}if(po)throw e=yi,po=!1,yi=null,e}function B(e,t){var n=t[Pi];n===void 0&&(n=t[Pi]=new Set);var r=e+"__bubble";n.has(r)||(Dc(t,e,2,!1),n.add(r))}function Al(e,t,n){var r=0;t&&(r|=4),Dc(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function ar(e){if(!e[Fr]){e[Fr]=!0,Wu.forEach(function(n){n!=="selectionchange"&&(sd.has(n)||Al(n,!1,e),Al(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fr]||(t[Fr]=!0,Al("selectionchange",!1,t))}}function Dc(e,t,n,r){switch(wc(t)){case 1:var o=Sf;break;case 4:o=kf;break;default:o=hs}n=o.bind(null,t,n,e),o=void 0,!gi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vl(e,t,n,r,o){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;i=i.return}for(;s!==null;){if(i=At(s),i===null)return;if(a=i.tag,a===5||a===6){r=l=i;continue e}s=s.parentNode}}r=r.return}ic(function(){var f=l,h=fs(n),m=[];e:{var v=Ic.get(e);if(v!==void 0){var w=gs,x=e;switch(e){case"keypress":if(br(n)===0)break e;case"keydown":case"keyup":w=Df;break;case"focusin":x="focus",w=Rl;break;case"focusout":x="blur",w=Rl;break;case"beforeblur":case"afterblur":w=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ja;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=_f;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Vf;break;case Tc:case Lc:case Rc:w=Pf;break;case Oc:w=Bf;break;case"scroll":w=Cf;break;case"wheel":w=Wf;break;case"copy":case"cut":case"paste":w=Mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Pa}var g=(t&4)!==0,z=!g&&e==="scroll",d=g?v!==null?v+"Capture":null:v;g=[];for(var u=f,p;u!==null;){p=u;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,d!==null&&(y=nr(u,d),y!=null&&g.push(ur(u,y,p)))),z)break;u=u.return}0<g.length&&(v=new w(v,x,null,n,h),m.push({event:v,listeners:g}))}}if(!(t&7)){e:{if(v=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",v&&n!==hi&&(x=n.relatedTarget||n.fromElement)&&(At(x)||x[ct]))break e;if((w||v)&&(v=h.window===h?h:(v=h.ownerDocument)?v.defaultView||v.parentWindow:window,w?(x=n.relatedTarget||n.toElement,w=f,x=x?At(x):null,x!==null&&(z=Zt(x),x!==z||x.tag!==5&&x.tag!==6)&&(x=null)):(w=null,x=f),w!==x)){if(g=ja,y="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(g=Pa,y="onPointerLeave",d="onPointerEnter",u="pointer"),z=w==null?v:rn(w),p=x==null?v:rn(x),v=new g(y,u+"leave",w,n,h),v.target=z,v.relatedTarget=p,y=null,At(h)===f&&(g=new g(d,u+"enter",x,n,h),g.target=p,g.relatedTarget=z,y=g),z=y,w&&x)t:{for(g=w,d=x,u=0,p=g;p;p=Jt(p))u++;for(p=0,y=d;y;y=Jt(y))p++;for(;0<u-p;)g=Jt(g),u--;for(;0<p-u;)d=Jt(d),p--;for(;u--;){if(g===d||d!==null&&g===d.alternate)break t;g=Jt(g),d=Jt(d)}g=null}else g=null;w!==null&&Aa(m,v,w,g,!1),x!==null&&z!==null&&Aa(m,z,x,g,!0)}}e:{if(v=f?rn(f):window,w=v.nodeName&&v.nodeName.toLowerCase(),w==="select"||w==="input"&&v.type==="file")var E=Jf;else if(Ta(v))if(jc)E=td;else{E=bf;var _=qf}else(w=v.nodeName)&&w.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(E=ed);if(E&&(E=E(e,f))){_c(m,E,n,h);break e}_&&_(e,v,f),e==="focusout"&&(_=v._wrapperState)&&_.controlled&&v.type==="number"&&ci(v,"number",v.value)}switch(_=f?rn(f):window,e){case"focusin":(Ta(_)||_.contentEditable==="true")&&(tn=_,ki=f,Gn=null);break;case"focusout":Gn=ki=tn=null;break;case"mousedown":Ci=!0;break;case"contextmenu":case"mouseup":case"dragend":Ci=!1,$a(m,n,h);break;case"selectionchange":if(od)break;case"keydown":case"keyup":$a(m,n,h)}var C;if(xs)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else en?Cc(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(kc&&n.locale!=="ko"&&(en||P!=="onCompositionStart"?P==="onCompositionEnd"&&en&&(C=Sc()):(xt=h,vs="value"in xt?xt.value:xt.textContent,en=!0)),_=yo(f,P),0<_.length&&(P=new Na(P,e,null,n,h),m.push({event:P,listeners:_}),C?P.data=C:(C=Ec(n),C!==null&&(P.data=C)))),(C=Yf?Xf(e,n):Kf(e,n))&&(f=yo(f,"onBeforeInput"),0<f.length&&(h=new Na("onBeforeInput","beforeinput",null,n,h),m.push({event:h,listeners:f}),h.data=C))}$c(m,t)})}function ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function yo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=nr(e,n),l!=null&&r.unshift(ur(e,l,o)),l=nr(e,t),l!=null&&r.push(ur(e,l,o))),e=e.return}return r}function Jt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Aa(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var s=n,a=s.alternate,f=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&f!==null&&(s=f,o?(a=nr(n,l),a!=null&&i.unshift(ur(n,a,s))):o||(a=nr(n,l),a!=null&&i.push(ur(n,a,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var ad=/\r\n?/g,ud=/\u0000|\uFFFD/g;function Va(e){return(typeof e=="string"?e:""+e).replace(ad,`
`).replace(ud,"")}function Ar(e,t,n){if(t=Va(t),Va(e)!==t&&n)throw Error(S(425))}function xo(){}var Ei=null,_i=null;function ji(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ni=typeof setTimeout=="function"?setTimeout:void 0,cd=typeof clearTimeout=="function"?clearTimeout:void 0,Ua=typeof Promise=="function"?Promise:void 0,fd=typeof queueMicrotask=="function"?queueMicrotask:typeof Ua<"u"?function(e){return Ua.resolve(null).then(e).catch(dd)}:Ni;function dd(e){setTimeout(function(){throw e})}function Ul(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),lr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);lr(t)}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ba(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Pn=Math.random().toString(36).slice(2),be="__reactFiber$"+Pn,cr="__reactProps$"+Pn,ct="__reactContainer$"+Pn,Pi="__reactEvents$"+Pn,pd="__reactListeners$"+Pn,md="__reactHandles$"+Pn;function At(e){var t=e[be];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[be]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ba(e);e!==null;){if(n=e[be])return n;e=Ba(e)}return t}e=n,n=e.parentNode}return null}function Er(e){return e=e[be]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function rn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Uo(e){return e[cr]||null}var zi=[],on=-1;function Lt(e){return{current:e}}function H(e){0>on||(e.current=zi[on],zi[on]=null,on--)}function U(e,t){on++,zi[on]=e.current,e.current=t}var Mt={},he=Lt(Mt),ke=Lt(!1),Wt=Mt;function xn(e,t){var n=e.type.contextTypes;if(!n)return Mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ce(e){return e=e.childContextTypes,e!=null}function wo(){H(ke),H(he)}function Ha(e,t,n){if(he.current!==Mt)throw Error(S(168));U(he,t),U(ke,n)}function Fc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(S(108,J0(e)||"Unknown",o));return X({},n,r)}function So(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,Wt=he.current,U(he,e),U(ke,ke.current),!0}function Wa(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Fc(e,t,Wt),r.__reactInternalMemoizedMergedChildContext=e,H(ke),H(he),U(he,e)):H(ke),U(ke,n)}var lt=null,Bo=!1,Bl=!1;function Ac(e){lt===null?lt=[e]:lt.push(e)}function hd(e){Bo=!0,Ac(e)}function Rt(){if(!Bl&&lt!==null){Bl=!0;var e=0,t=F;try{var n=lt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lt=null,Bo=!1}catch(o){throw lt!==null&&(lt=lt.slice(e+1)),cc(ds,Rt),o}finally{F=t,Bl=!1}}return null}var ln=[],sn=0,ko=null,Co=0,Oe=[],Ie=0,Qt=null,it=1,st="";function $t(e,t){ln[sn++]=Co,ln[sn++]=ko,ko=e,Co=t}function Vc(e,t,n){Oe[Ie++]=it,Oe[Ie++]=st,Oe[Ie++]=Qt,Qt=e;var r=it;e=st;var o=32-Ye(r)-1;r&=~(1<<o),n+=1;var l=32-Ye(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,it=1<<32-Ye(t)+o|n<<o|r,st=l+e}else it=1<<l|n<<o|r,st=e}function Ss(e){e.return!==null&&($t(e,1),Vc(e,1,0))}function ks(e){for(;e===ko;)ko=ln[--sn],ln[sn]=null,Co=ln[--sn],ln[sn]=null;for(;e===Qt;)Qt=Oe[--Ie],Oe[Ie]=null,st=Oe[--Ie],Oe[Ie]=null,it=Oe[--Ie],Oe[Ie]=null}var Pe=null,Ne=null,W=!1,Qe=null;function Uc(e,t){var n=$e(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Pe=e,Ne=Et(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Pe=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Qt!==null?{id:it,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$e(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Pe=e,Ne=null,!0):!1;default:return!1}}function Mi(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ti(e){if(W){var t=Ne;if(t){var n=t;if(!Qa(e,t)){if(Mi(e))throw Error(S(418));t=Et(n.nextSibling);var r=Pe;t&&Qa(e,t)?Uc(r,n):(e.flags=e.flags&-4097|2,W=!1,Pe=e)}}else{if(Mi(e))throw Error(S(418));e.flags=e.flags&-4097|2,W=!1,Pe=e}}}function Ya(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Pe=e}function Vr(e){if(e!==Pe)return!1;if(!W)return Ya(e),W=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ji(e.type,e.memoizedProps)),t&&(t=Ne)){if(Mi(e))throw Bc(),Error(S(418));for(;t;)Uc(e,t),t=Et(t.nextSibling)}if(Ya(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Et(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Pe?Et(e.stateNode.nextSibling):null;return!0}function Bc(){for(var e=Ne;e;)e=Et(e.nextSibling)}function wn(){Ne=Pe=null,W=!1}function Cs(e){Qe===null?Qe=[e]:Qe.push(e)}var vd=pt.ReactCurrentBatchConfig;function Dn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var s=o.refs;i===null?delete s[l]:s[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Ur(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xa(e){var t=e._init;return t(e._payload)}function Hc(e){function t(d,u){if(e){var p=d.deletions;p===null?(d.deletions=[u],d.flags|=16):p.push(u)}}function n(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function r(d,u){for(d=new Map;u!==null;)u.key!==null?d.set(u.key,u):d.set(u.index,u),u=u.sibling;return d}function o(d,u){return d=Pt(d,u),d.index=0,d.sibling=null,d}function l(d,u,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<u?(d.flags|=2,u):p):(d.flags|=2,u)):(d.flags|=1048576,u)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,u,p,y){return u===null||u.tag!==6?(u=Gl(p,d.mode,y),u.return=d,u):(u=o(u,p),u.return=d,u)}function a(d,u,p,y){var E=p.type;return E===bt?h(d,u,p.props.children,y,p.key):u!==null&&(u.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Xa(E)===u.type)?(y=o(u,p.props),y.ref=Dn(d,u,p),y.return=d,y):(y=io(p.type,p.key,p.props,null,d.mode,y),y.ref=Dn(d,u,p),y.return=d,y)}function f(d,u,p,y){return u===null||u.tag!==4||u.stateNode.containerInfo!==p.containerInfo||u.stateNode.implementation!==p.implementation?(u=Zl(p,d.mode,y),u.return=d,u):(u=o(u,p.children||[]),u.return=d,u)}function h(d,u,p,y,E){return u===null||u.tag!==7?(u=Ht(p,d.mode,y,E),u.return=d,u):(u=o(u,p),u.return=d,u)}function m(d,u,p){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Gl(""+u,d.mode,p),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Mr:return p=io(u.type,u.key,u.props,null,d.mode,p),p.ref=Dn(d,null,u),p.return=d,p;case qt:return u=Zl(u,d.mode,p),u.return=d,u;case ht:var y=u._init;return m(d,y(u._payload),p)}if(Bn(u)||Ln(u))return u=Ht(u,d.mode,p,null),u.return=d,u;Ur(d,u)}return null}function v(d,u,p,y){var E=u!==null?u.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:s(d,u,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Mr:return p.key===E?a(d,u,p,y):null;case qt:return p.key===E?f(d,u,p,y):null;case ht:return E=p._init,v(d,u,E(p._payload),y)}if(Bn(p)||Ln(p))return E!==null?null:h(d,u,p,y,null);Ur(d,p)}return null}function w(d,u,p,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(p)||null,s(u,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Mr:return d=d.get(y.key===null?p:y.key)||null,a(u,d,y,E);case qt:return d=d.get(y.key===null?p:y.key)||null,f(u,d,y,E);case ht:var _=y._init;return w(d,u,p,_(y._payload),E)}if(Bn(y)||Ln(y))return d=d.get(p)||null,h(u,d,y,E,null);Ur(u,y)}return null}function x(d,u,p,y){for(var E=null,_=null,C=u,P=u=0,G=null;C!==null&&P<p.length;P++){C.index>P?(G=C,C=null):G=C.sibling;var O=v(d,C,p[P],y);if(O===null){C===null&&(C=G);break}e&&C&&O.alternate===null&&t(d,C),u=l(O,u,P),_===null?E=O:_.sibling=O,_=O,C=G}if(P===p.length)return n(d,C),W&&$t(d,P),E;if(C===null){for(;P<p.length;P++)C=m(d,p[P],y),C!==null&&(u=l(C,u,P),_===null?E=C:_.sibling=C,_=C);return W&&$t(d,P),E}for(C=r(d,C);P<p.length;P++)G=w(C,d,P,p[P],y),G!==null&&(e&&G.alternate!==null&&C.delete(G.key===null?P:G.key),u=l(G,u,P),_===null?E=G:_.sibling=G,_=G);return e&&C.forEach(function(Ue){return t(d,Ue)}),W&&$t(d,P),E}function g(d,u,p,y){var E=Ln(p);if(typeof E!="function")throw Error(S(150));if(p=E.call(p),p==null)throw Error(S(151));for(var _=E=null,C=u,P=u=0,G=null,O=p.next();C!==null&&!O.done;P++,O=p.next()){C.index>P?(G=C,C=null):G=C.sibling;var Ue=v(d,C,O.value,y);if(Ue===null){C===null&&(C=G);break}e&&C&&Ue.alternate===null&&t(d,C),u=l(Ue,u,P),_===null?E=Ue:_.sibling=Ue,_=Ue,C=G}if(O.done)return n(d,C),W&&$t(d,P),E;if(C===null){for(;!O.done;P++,O=p.next())O=m(d,O.value,y),O!==null&&(u=l(O,u,P),_===null?E=O:_.sibling=O,_=O);return W&&$t(d,P),E}for(C=r(d,C);!O.done;P++,O=p.next())O=w(C,d,P,O.value,y),O!==null&&(e&&O.alternate!==null&&C.delete(O.key===null?P:O.key),u=l(O,u,P),_===null?E=O:_.sibling=O,_=O);return e&&C.forEach(function(Mn){return t(d,Mn)}),W&&$t(d,P),E}function z(d,u,p,y){if(typeof p=="object"&&p!==null&&p.type===bt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Mr:e:{for(var E=p.key,_=u;_!==null;){if(_.key===E){if(E=p.type,E===bt){if(_.tag===7){n(d,_.sibling),u=o(_,p.props.children),u.return=d,d=u;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ht&&Xa(E)===_.type){n(d,_.sibling),u=o(_,p.props),u.ref=Dn(d,_,p),u.return=d,d=u;break e}n(d,_);break}else t(d,_);_=_.sibling}p.type===bt?(u=Ht(p.props.children,d.mode,y,p.key),u.return=d,d=u):(y=io(p.type,p.key,p.props,null,d.mode,y),y.ref=Dn(d,u,p),y.return=d,d=y)}return i(d);case qt:e:{for(_=p.key;u!==null;){if(u.key===_)if(u.tag===4&&u.stateNode.containerInfo===p.containerInfo&&u.stateNode.implementation===p.implementation){n(d,u.sibling),u=o(u,p.children||[]),u.return=d,d=u;break e}else{n(d,u);break}else t(d,u);u=u.sibling}u=Zl(p,d.mode,y),u.return=d,d=u}return i(d);case ht:return _=p._init,z(d,u,_(p._payload),y)}if(Bn(p))return x(d,u,p,y);if(Ln(p))return g(d,u,p,y);Ur(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,u!==null&&u.tag===6?(n(d,u.sibling),u=o(u,p),u.return=d,d=u):(n(d,u),u=Gl(p,d.mode,y),u.return=d,d=u),i(d)):n(d,u)}return z}var Sn=Hc(!0),Wc=Hc(!1),Eo=Lt(null),_o=null,an=null,Es=null;function _s(){Es=an=_o=null}function js(e){var t=Eo.current;H(Eo),e._currentValue=t}function Li(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function hn(e,t){_o=e,Es=an=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(Es!==e)if(e={context:e,memoizedValue:t,next:null},an===null){if(_o===null)throw Error(S(308));an=e,_o.dependencies={lanes:0,firstContext:e}}else an=an.next=e;return t}var Vt=null;function Ns(e){Vt===null?Vt=[e]:Vt.push(e)}function Qc(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ns(t)):(n.next=o.next,o.next=n),t.interleaved=n,ft(e,r)}function ft(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var vt=!1;function Ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function _t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,I&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,ft(e,n)}return o=r.interleaved,o===null?(t.next=t,Ns(r)):(t.next=o.next,o.next=t),r.interleaved=t,ft(e,n)}function eo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}function Ka(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function jo(e,t,n,r){var o=e.updateQueue;vt=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,f=a.next;a.next=null,i===null?l=f:i.next=f,i=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==i&&(s===null?h.firstBaseUpdate=f:s.next=f,h.lastBaseUpdate=a))}if(l!==null){var m=o.baseState;i=0,h=f=a=null,s=l;do{var v=s.lane,w=s.eventTime;if((r&v)===v){h!==null&&(h=h.next={eventTime:w,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,g=s;switch(v=t,w=n,g.tag){case 1:if(x=g.payload,typeof x=="function"){m=x.call(w,m,v);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=g.payload,v=typeof x=="function"?x.call(w,m,v):x,v==null)break e;m=X({},m,v);break e;case 2:vt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=o.effects,v===null?o.effects=[s]:v.push(s))}else w={eventTime:w,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(f=h=w,a=m):h=h.next=w,i|=v;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;v=s,s=v.next,v.next=null,o.lastBaseUpdate=v,o.shared.pending=null}}while(!0);if(h===null&&(a=m),o.baseState=a,o.firstBaseUpdate=f,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);Xt|=i,e.lanes=i,e.memoizedState=m}}function Ga(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(S(191,o));o.call(r)}}}var _r={},nt=Lt(_r),fr=Lt(_r),dr=Lt(_r);function Ut(e){if(e===_r)throw Error(S(174));return e}function zs(e,t){switch(U(dr,t),U(fr,e),U(nt,_r),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=di(t,e)}H(nt),U(nt,t)}function kn(){H(nt),H(fr),H(dr)}function Xc(e){Ut(dr.current);var t=Ut(nt.current),n=di(t,e.type);t!==n&&(U(fr,e),U(nt,n))}function Ms(e){fr.current===e&&(H(nt),H(fr))}var Q=Lt(0);function No(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Hl=[];function Ts(){for(var e=0;e<Hl.length;e++)Hl[e]._workInProgressVersionPrimary=null;Hl.length=0}var to=pt.ReactCurrentDispatcher,Wl=pt.ReactCurrentBatchConfig,Yt=0,Y=null,te=null,oe=null,Po=!1,Zn=!1,pr=0,gd=0;function fe(){throw Error(S(321))}function Ls(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ke(e[n],t[n]))return!1;return!0}function Rs(e,t,n,r,o,l){if(Yt=l,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=e===null||e.memoizedState===null?Sd:kd,e=n(r,o),Zn){l=0;do{if(Zn=!1,pr=0,25<=l)throw Error(S(301));l+=1,oe=te=null,t.updateQueue=null,to.current=Cd,e=n(r,o)}while(Zn)}if(to.current=zo,t=te!==null&&te.next!==null,Yt=0,oe=te=Y=null,Po=!1,t)throw Error(S(300));return e}function Os(){var e=pr!==0;return pr=0,e}function Ze(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return oe===null?Y.memoizedState=oe=e:oe=oe.next=e,oe}function Ae(){if(te===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=te.next;var t=oe===null?Y.memoizedState:oe.next;if(t!==null)oe=t,te=e;else{if(e===null)throw Error(S(310));te=e,e={memoizedState:te.memoizedState,baseState:te.baseState,baseQueue:te.baseQueue,queue:te.queue,next:null},oe===null?Y.memoizedState=oe=e:oe=oe.next=e}return oe}function mr(e,t){return typeof t=="function"?t(e):t}function Ql(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=te,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var s=i=null,a=null,f=l;do{var h=f.lane;if((Yt&h)===h)a!==null&&(a=a.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:e(r,f.action);else{var m={lane:h,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};a===null?(s=a=m,i=r):a=a.next=m,Y.lanes|=h,Xt|=h}f=f.next}while(f!==null&&f!==l);a===null?i=r:a.next=s,Ke(r,t.memoizedState)||(Se=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,Y.lanes|=l,Xt|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yl(e){var t=Ae(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);Ke(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Kc(){}function Gc(e,t){var n=Y,r=Ae(),o=t(),l=!Ke(r.memoizedState,o);if(l&&(r.memoizedState=o,Se=!0),r=r.queue,Is(qc.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||oe!==null&&oe.memoizedState.tag&1){if(n.flags|=2048,hr(9,Jc.bind(null,n,r,o,t),void 0,null),le===null)throw Error(S(349));Yt&30||Zc(n,t,o)}return o}function Zc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jc(e,t,n,r){t.value=n,t.getSnapshot=r,bc(t)&&e1(e)}function qc(e,t,n){return n(function(){bc(t)&&e1(e)})}function bc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ke(e,n)}catch{return!0}}function e1(e){var t=ft(e,1);t!==null&&Xe(t,e,1,-1)}function Za(e){var t=Ze();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:e},t.queue=e,e=e.dispatch=wd.bind(null,Y,e),[t.memoizedState,e]}function hr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Y.updateQueue,t===null?(t={lastEffect:null,stores:null},Y.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function t1(){return Ae().memoizedState}function no(e,t,n,r){var o=Ze();Y.flags|=e,o.memoizedState=hr(1|t,n,void 0,r===void 0?null:r)}function Ho(e,t,n,r){var o=Ae();r=r===void 0?null:r;var l=void 0;if(te!==null){var i=te.memoizedState;if(l=i.destroy,r!==null&&Ls(r,i.deps)){o.memoizedState=hr(t,n,l,r);return}}Y.flags|=e,o.memoizedState=hr(1|t,n,l,r)}function Ja(e,t){return no(8390656,8,e,t)}function Is(e,t){return Ho(2048,8,e,t)}function n1(e,t){return Ho(4,2,e,t)}function r1(e,t){return Ho(4,4,e,t)}function o1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function l1(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4,4,o1.bind(null,t,e),n)}function $s(){}function i1(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function s1(e,t){var n=Ae();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ls(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function a1(e,t,n){return Yt&21?(Ke(n,t)||(n=pc(),Y.lanes|=n,Xt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=n)}function yd(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Wl.transition;Wl.transition={};try{e(!1),t()}finally{F=n,Wl.transition=r}}function u1(){return Ae().memoizedState}function xd(e,t,n){var r=Nt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},c1(e))f1(t,n);else if(n=Qc(e,t,n,r),n!==null){var o=ge();Xe(n,e,r,o),d1(n,t,r)}}function wd(e,t,n){var r=Nt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(c1(e))f1(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,s=l(i,n);if(o.hasEagerState=!0,o.eagerState=s,Ke(s,i)){var a=t.interleaved;a===null?(o.next=o,Ns(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=Qc(e,t,o,r),n!==null&&(o=ge(),Xe(n,e,r,o),d1(n,t,r))}}function c1(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function f1(e,t){Zn=Po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function d1(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}var zo={readContext:Fe,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useInsertionEffect:fe,useLayoutEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useMutableSource:fe,useSyncExternalStore:fe,useId:fe,unstable_isNewReconciler:!1},Sd={readContext:Fe,useCallback:function(e,t){return Ze().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:Ja,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,no(4194308,4,o1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return no(4194308,4,e,t)},useInsertionEffect:function(e,t){return no(4,2,e,t)},useMemo:function(e,t){var n=Ze();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ze();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=xd.bind(null,Y,e),[r.memoizedState,e]},useRef:function(e){var t=Ze();return e={current:e},t.memoizedState=e},useState:Za,useDebugValue:$s,useDeferredValue:function(e){return Ze().memoizedState=e},useTransition:function(){var e=Za(!1),t=e[0];return e=yd.bind(null,e[1]),Ze().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Y,o=Ze();if(W){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),le===null)throw Error(S(349));Yt&30||Zc(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Ja(qc.bind(null,r,l,e),[e]),r.flags|=2048,hr(9,Jc.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Ze(),t=le.identifierPrefix;if(W){var n=st,r=it;n=(r&~(1<<32-Ye(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=pr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=gd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},kd={readContext:Fe,useCallback:i1,useContext:Fe,useEffect:Is,useImperativeHandle:l1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:s1,useReducer:Ql,useRef:t1,useState:function(){return Ql(mr)},useDebugValue:$s,useDeferredValue:function(e){var t=Ae();return a1(t,te.memoizedState,e)},useTransition:function(){var e=Ql(mr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Kc,useSyncExternalStore:Gc,useId:u1,unstable_isNewReconciler:!1},Cd={readContext:Fe,useCallback:i1,useContext:Fe,useEffect:Is,useImperativeHandle:l1,useInsertionEffect:n1,useLayoutEffect:r1,useMemo:s1,useReducer:Yl,useRef:t1,useState:function(){return Yl(mr)},useDebugValue:$s,useDeferredValue:function(e){var t=Ae();return te===null?t.memoizedState=e:a1(t,te.memoizedState,e)},useTransition:function(){var e=Yl(mr)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:Kc,useSyncExternalStore:Gc,useId:u1,unstable_isNewReconciler:!1};function He(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ri(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:X({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wo={isMounted:function(e){return(e=e._reactInternals)?Zt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Nt(e),l=at(r,o);l.payload=t,n!=null&&(l.callback=n),t=_t(e,l,o),t!==null&&(Xe(t,e,o,r),eo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Nt(e),l=at(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=_t(e,l,o),t!==null&&(Xe(t,e,o,r),eo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Nt(e),o=at(n,r);o.tag=2,t!=null&&(o.callback=t),t=_t(e,o,r),t!==null&&(Xe(t,e,r,n),eo(t,e,r))}};function qa(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(o,l):!0}function p1(e,t,n){var r=!1,o=Mt,l=t.contextType;return typeof l=="object"&&l!==null?l=Fe(l):(o=Ce(t)?Wt:he.current,r=t.contextTypes,l=(r=r!=null)?xn(e,o):Mt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function ba(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}function Oi(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Ps(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=Fe(l):(l=Ce(t)?Wt:he.current,o.context=xn(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(Ri(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Wo.enqueueReplaceState(o,o.state,null),jo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Cn(e,t){try{var n="",r=t;do n+=Z0(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Xl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ii(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ed=typeof WeakMap=="function"?WeakMap:Map;function m1(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){To||(To=!0,Qi=r),Ii(e,t)},n}function h1(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ii(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){Ii(e,t),typeof r!="function"&&(jt===null?jt=new Set([this]):jt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function eu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ed;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Fd.bind(null,e,t,n),t.then(e,e))}function tu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,_t(n,t,1))),n.lanes|=1),e)}var _d=pt.ReactCurrentOwner,Se=!1;function ve(e,t,n,r){t.child=e===null?Wc(t,null,n,r):Sn(t,e.child,n,r)}function ru(e,t,n,r,o){n=n.render;var l=t.ref;return hn(t,o),r=Rs(e,t,n,r,l,o),n=Os(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(W&&n&&Ss(t),t.flags|=1,ve(e,t,r,o),t.child)}function ou(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!Ws(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,v1(e,t,l,r,o)):(e=io(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&o)){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(i,r)&&e.ref===t.ref)return dt(e,t,o)}return t.flags|=1,e=Pt(l,r),e.ref=t.ref,e.return=t,t.child=e}function v1(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(sr(l,r)&&e.ref===t.ref)if(Se=!1,t.pendingProps=r=l,(e.lanes&o)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,dt(e,t,o)}return $i(e,t,n,r,o)}function g1(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(cn,je),je|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(cn,je),je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,U(cn,je),je|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,U(cn,je),je|=r;return ve(e,t,o,n),t.child}function y1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function $i(e,t,n,r,o){var l=Ce(n)?Wt:he.current;return l=xn(t,l),hn(t,o),n=Rs(e,t,n,r,l,o),r=Os(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,dt(e,t,o)):(W&&r&&Ss(t),t.flags|=1,ve(e,t,n,o),t.child)}function lu(e,t,n,r,o){if(Ce(n)){var l=!0;So(t)}else l=!1;if(hn(t,o),t.stateNode===null)ro(e,t),p1(t,n,r),Oi(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var a=i.context,f=n.contextType;typeof f=="object"&&f!==null?f=Fe(f):(f=Ce(n)?Wt:he.current,f=xn(t,f));var h=n.getDerivedStateFromProps,m=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||a!==f)&&ba(t,i,r,f),vt=!1;var v=t.memoizedState;i.state=v,jo(t,r,i,o),a=t.memoizedState,s!==r||v!==a||ke.current||vt?(typeof h=="function"&&(Ri(t,n,h,r),a=t.memoizedState),(s=vt||qa(t,n,s,r,v,a,f))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=f,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Yc(e,t),s=t.memoizedProps,f=t.type===t.elementType?s:He(t.type,s),i.props=f,m=t.pendingProps,v=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=Fe(a):(a=Ce(n)?Wt:he.current,a=xn(t,a));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==m||v!==a)&&ba(t,i,r,a),vt=!1,v=t.memoizedState,i.state=v,jo(t,r,i,o);var x=t.memoizedState;s!==m||v!==x||ke.current||vt?(typeof w=="function"&&(Ri(t,n,w,r),x=t.memoizedState),(f=vt||qa(t,n,f,r,v,x,a)||!1)?(h||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=a,r=f):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Di(e,t,n,r,l,o)}function Di(e,t,n,r,o,l){y1(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Wa(t,n,!1),dt(e,t,l);r=t.stateNode,_d.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Sn(t,e.child,null,l),t.child=Sn(t,null,s,l)):ve(e,t,s,l),t.memoizedState=r.state,o&&Wa(t,n,!0),t.child}function x1(e){var t=e.stateNode;t.pendingContext?Ha(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ha(e,t.context,!1),zs(e,t.containerInfo)}function iu(e,t,n,r,o){return wn(),Cs(o),t.flags|=256,ve(e,t,n,r),t.child}var Fi={dehydrated:null,treeContext:null,retryLane:0};function Ai(e){return{baseLanes:e,cachePool:null,transitions:null}}function w1(e,t,n){var r=t.pendingProps,o=Q.current,l=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),U(Q,o&1),e===null)return Ti(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Xo(i,r,0,null),e=Ht(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ai(n),t.memoizedState=Fi,e):Ds(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return jd(e,t,i,r,s,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Pt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?l=Pt(s,l):(l=Ht(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?Ai(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=Fi,r}return l=e.child,e=l.sibling,r=Pt(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ds(e,t){return t=Xo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Br(e,t,n,r){return r!==null&&Cs(r),Sn(t,e.child,null,n),e=Ds(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function jd(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Xl(Error(S(422))),Br(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Xo({mode:"visible",children:r.children},o,0,null),l=Ht(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&Sn(t,e.child,null,i),t.child.memoizedState=Ai(i),t.memoizedState=Fi,l);if(!(t.mode&1))return Br(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,l=Error(S(419)),r=Xl(l,r,void 0),Br(e,t,i,r)}if(s=(i&e.childLanes)!==0,Se||s){if(r=le,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,ft(e,o),Xe(r,e,o,-1))}return Hs(),r=Xl(Error(S(421))),Br(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Ad.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ne=Et(o.nextSibling),Pe=t,W=!0,Qe=null,e!==null&&(Oe[Ie++]=it,Oe[Ie++]=st,Oe[Ie++]=Qt,it=e.id,st=e.overflow,Qt=t),t=Ds(t,r.children),t.flags|=4096,t)}function su(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Li(e.return,t,n)}function Kl(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function S1(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(ve(e,t,r.children,n),r=Q.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&su(e,n,t);else if(e.tag===19)su(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Q,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&No(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Kl(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&No(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Kl(t,!0,n,null,l);break;case"together":Kl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nd(e,t,n){switch(t.tag){case 3:x1(t),wn();break;case 5:Xc(t);break;case 1:Ce(t.type)&&So(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;U(Eo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Q,Q.current&1),t.flags|=128,null):n&t.child.childLanes?w1(e,t,n):(U(Q,Q.current&1),e=dt(e,t,n),e!==null?e.sibling:null);U(Q,Q.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return S1(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),U(Q,Q.current),r)break;return null;case 22:case 23:return t.lanes=0,g1(e,t,n)}return dt(e,t,n)}var k1,Vi,C1,E1;k1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vi=function(){};C1=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ut(nt.current);var l=null;switch(n){case"input":o=ai(e,o),r=ai(e,r),l=[];break;case"select":o=X({},o,{value:void 0}),r=X({},r,{value:void 0}),l=[];break;case"textarea":o=fi(e,o),r=fi(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=xo)}pi(n,r);var i;n=null;for(f in o)if(!r.hasOwnProperty(f)&&o.hasOwnProperty(f)&&o[f]!=null)if(f==="style"){var s=o[f];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(er.hasOwnProperty(f)?l||(l=[]):(l=l||[]).push(f,null));for(f in r){var a=r[f];if(s=o!=null?o[f]:void 0,r.hasOwnProperty(f)&&a!==s&&(a!=null||s!=null))if(f==="style")if(s){for(i in s)!s.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&s[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(l||(l=[]),l.push(f,n)),n=a;else f==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(l=l||[]).push(f,a)):f==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(f,""+a):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(er.hasOwnProperty(f)?(a!=null&&f==="onScroll"&&B("scroll",e),l||s===a||(l=[])):(l=l||[]).push(f,a))}n&&(l=l||[]).push("style",n);var f=l;(t.updateQueue=f)&&(t.flags|=4)}};E1=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fn(e,t){if(!W)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function de(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Pd(e,t,n){var r=t.pendingProps;switch(ks(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return de(t),null;case 1:return Ce(t.type)&&wo(),de(t),null;case 3:return r=t.stateNode,kn(),H(ke),H(he),Ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Ki(Qe),Qe=null))),Vi(e,t),de(t),null;case 5:Ms(t);var o=Ut(dr.current);if(n=t.type,e!==null&&t.stateNode!=null)C1(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return de(t),null}if(e=Ut(nt.current),Vr(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[be]=t,r[cr]=l,e=(t.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(o=0;o<Wn.length;o++)B(Wn[o],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":va(r,l),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},B("invalid",r);break;case"textarea":ya(r,l),B("invalid",r)}pi(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var s=l[i];i==="children"?typeof s=="string"?r.textContent!==s&&(l.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(l.suppressHydrationWarning!==!0&&Ar(r.textContent,s,e),o=["children",""+s]):er.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&B("scroll",r)}switch(n){case"input":Tr(r),ga(r,l,!0);break;case"textarea":Tr(r),xa(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=xo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=qu(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[be]=t,e[cr]=r,k1(e,t,!1,!1),t.stateNode=e;e:{switch(i=mi(n,r),n){case"dialog":B("cancel",e),B("close",e),o=r;break;case"iframe":case"object":case"embed":B("load",e),o=r;break;case"video":case"audio":for(o=0;o<Wn.length;o++)B(Wn[o],e);o=r;break;case"source":B("error",e),o=r;break;case"img":case"image":case"link":B("error",e),B("load",e),o=r;break;case"details":B("toggle",e),o=r;break;case"input":va(e,r),o=ai(e,r),B("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=X({},r,{value:void 0}),B("invalid",e);break;case"textarea":ya(e,r),o=fi(e,r),B("invalid",e);break;default:o=r}pi(n,o),s=o;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];l==="style"?tc(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&bu(e,a)):l==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&tr(e,a):typeof a=="number"&&tr(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(er.hasOwnProperty(l)?a!=null&&l==="onScroll"&&B("scroll",e):a!=null&&ss(e,l,a,i))}switch(n){case"input":Tr(e),ga(e,r,!1);break;case"textarea":Tr(e),xa(e);break;case"option":r.value!=null&&e.setAttribute("value",""+zt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?fn(e,!!r.multiple,l,!1):r.defaultValue!=null&&fn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=xo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return de(t),null;case 6:if(e&&t.stateNode!=null)E1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Ut(dr.current),Ut(nt.current),Vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[be]=t,(l=r.nodeValue!==n)&&(e=Pe,e!==null))switch(e.tag){case 3:Ar(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ar(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[be]=t,t.stateNode=r}return de(t),null;case 13:if(H(Q),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(W&&Ne!==null&&t.mode&1&&!(t.flags&128))Bc(),wn(),t.flags|=98560,l=!1;else if(l=Vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(S(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(S(317));l[be]=t}else wn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;de(t),l=!1}else Qe!==null&&(Ki(Qe),Qe=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Q.current&1?ne===0&&(ne=3):Hs())),t.updateQueue!==null&&(t.flags|=4),de(t),null);case 4:return kn(),Vi(e,t),e===null&&ar(t.stateNode.containerInfo),de(t),null;case 10:return js(t.type._context),de(t),null;case 17:return Ce(t.type)&&wo(),de(t),null;case 19:if(H(Q),l=t.memoizedState,l===null)return de(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)Fn(l,!1);else{if(ne!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=No(e),i!==null){for(t.flags|=128,Fn(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Q,Q.current&1|2),t.child}e=e.sibling}l.tail!==null&&J()>En&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304)}else{if(!r)if(e=No(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fn(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!W)return de(t),null}else 2*J()-l.renderingStartTime>En&&n!==1073741824&&(t.flags|=128,r=!0,Fn(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=J(),t.sibling=null,n=Q.current,U(Q,r?n&1|2:n&1),t):(de(t),null);case 22:case 23:return Bs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?je&1073741824&&(de(t),t.subtreeFlags&6&&(t.flags|=8192)):de(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function zd(e,t){switch(ks(t),t.tag){case 1:return Ce(t.type)&&wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(),H(ke),H(he),Ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ms(t),null;case 13:if(H(Q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));wn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return H(Q),null;case 4:return kn(),null;case 10:return js(t.type._context),null;case 22:case 23:return Bs(),null;case 24:return null;default:return null}}var Hr=!1,me=!1,Md=typeof WeakSet=="function"?WeakSet:Set,j=null;function un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function Ui(e,t,n){try{n()}catch(r){K(e,t,r)}}var au=!1;function Td(e,t){if(Ei=vo,e=zc(),ws(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,s=-1,a=-1,f=0,h=0,m=e,v=null;t:for(;;){for(var w;m!==n||o!==0&&m.nodeType!==3||(s=i+o),m!==l||r!==0&&m.nodeType!==3||(a=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(w=m.firstChild)!==null;)v=m,m=w;for(;;){if(m===e)break t;if(v===n&&++f===o&&(s=i),v===l&&++h===r&&(a=i),(w=m.nextSibling)!==null)break;m=v,v=m.parentNode}m=w}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(_i={focusedElem:e,selectionRange:n},vo=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var g=x.memoizedProps,z=x.memoizedState,d=t.stateNode,u=d.getSnapshotBeforeUpdate(t.elementType===t.type?g:He(t.type,g),z);d.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){K(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return x=au,au=!1,x}function Jn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&Ui(t,n,l)}o=o.next}while(o!==r)}}function Qo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Bi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _1(e){var t=e.alternate;t!==null&&(e.alternate=null,_1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[be],delete t[cr],delete t[Pi],delete t[pd],delete t[md])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function j1(e){return e.tag===5||e.tag===3||e.tag===4}function uu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||j1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=xo));else if(r!==4&&(e=e.child,e!==null))for(Hi(e,t,n),e=e.sibling;e!==null;)Hi(e,t,n),e=e.sibling}function Wi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Wi(e,t,n),e=e.sibling;e!==null;)Wi(e,t,n),e=e.sibling}var se=null,We=!1;function mt(e,t,n){for(n=n.child;n!==null;)N1(e,t,n),n=n.sibling}function N1(e,t,n){if(tt&&typeof tt.onCommitFiberUnmount=="function")try{tt.onCommitFiberUnmount(Do,n)}catch{}switch(n.tag){case 5:me||un(n,t);case 6:var r=se,o=We;se=null,mt(e,t,n),se=r,We=o,se!==null&&(We?(e=se,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):se.removeChild(n.stateNode));break;case 18:se!==null&&(We?(e=se,n=n.stateNode,e.nodeType===8?Ul(e.parentNode,n):e.nodeType===1&&Ul(e,n),lr(e)):Ul(se,n.stateNode));break;case 4:r=se,o=We,se=n.stateNode.containerInfo,We=!0,mt(e,t,n),se=r,We=o;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&(l&2||l&4)&&Ui(n,t,i),o=o.next}while(o!==r)}mt(e,t,n);break;case 1:if(!me&&(un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){K(n,t,s)}mt(e,t,n);break;case 21:mt(e,t,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,mt(e,t,n),me=r):mt(e,t,n);break;default:mt(e,t,n)}}function cu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Md),t.forEach(function(r){var o=Vd.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:se=s.stateNode,We=!1;break e;case 3:se=s.stateNode.containerInfo,We=!0;break e;case 4:se=s.stateNode.containerInfo,We=!0;break e}s=s.return}if(se===null)throw Error(S(160));N1(l,i,o),se=null,We=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(f){K(o,t,f)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)P1(t,e),t=t.sibling}function P1(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ge(e),r&4){try{Jn(3,e,e.return),Qo(3,e)}catch(g){K(e,e.return,g)}try{Jn(5,e,e.return)}catch(g){K(e,e.return,g)}}break;case 1:Be(t,e),Ge(e),r&512&&n!==null&&un(n,n.return);break;case 5:if(Be(t,e),Ge(e),r&512&&n!==null&&un(n,n.return),e.flags&32){var o=e.stateNode;try{tr(o,"")}catch(g){K(e,e.return,g)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&l.type==="radio"&&l.name!=null&&Zu(o,l),mi(s,i);var f=mi(s,l);for(i=0;i<a.length;i+=2){var h=a[i],m=a[i+1];h==="style"?tc(o,m):h==="dangerouslySetInnerHTML"?bu(o,m):h==="children"?tr(o,m):ss(o,h,m,f)}switch(s){case"input":ui(o,l);break;case"textarea":Ju(o,l);break;case"select":var v=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?fn(o,!!l.multiple,w,!1):v!==!!l.multiple&&(l.defaultValue!=null?fn(o,!!l.multiple,l.defaultValue,!0):fn(o,!!l.multiple,l.multiple?[]:"",!1))}o[cr]=l}catch(g){K(e,e.return,g)}}break;case 6:if(Be(t,e),Ge(e),r&4){if(e.stateNode===null)throw Error(S(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(g){K(e,e.return,g)}}break;case 3:if(Be(t,e),Ge(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{lr(t.containerInfo)}catch(g){K(e,e.return,g)}break;case 4:Be(t,e),Ge(e);break;case 13:Be(t,e),Ge(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(Vs=J())),r&4&&cu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(me=(f=me)||h,Be(t,e),me=f):Be(t,e),Ge(e),r&8192){if(f=e.memoizedState!==null,(e.stateNode.isHidden=f)&&!h&&e.mode&1)for(j=e,h=e.child;h!==null;){for(m=j=h;j!==null;){switch(v=j,w=v.child,v.tag){case 0:case 11:case 14:case 15:Jn(4,v,v.return);break;case 1:un(v,v.return);var x=v.stateNode;if(typeof x.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(g){K(r,n,g)}}break;case 5:un(v,v.return);break;case 22:if(v.memoizedState!==null){du(m);continue}}w!==null?(w.return=v,j=w):du(m)}h=h.sibling}e:for(h=null,m=e;;){if(m.tag===5){if(h===null){h=m;try{o=m.stateNode,f?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(s=m.stateNode,a=m.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=ec("display",i))}catch(g){K(e,e.return,g)}}}else if(m.tag===6){if(h===null)try{m.stateNode.nodeValue=f?"":m.memoizedProps}catch(g){K(e,e.return,g)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;h===m&&(h=null),m=m.return}h===m&&(h=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Be(t,e),Ge(e),r&4&&cu(e);break;case 21:break;default:Be(t,e),Ge(e)}}function Ge(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(j1(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(tr(o,""),r.flags&=-33);var l=uu(e);Wi(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=uu(e);Hi(e,s,i);break;default:throw Error(S(161))}}catch(a){K(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ld(e,t,n){j=e,z1(e)}function z1(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var o=j,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Hr;if(!i){var s=o.alternate,a=s!==null&&s.memoizedState!==null||me;s=Hr;var f=me;if(Hr=i,(me=a)&&!f)for(j=o;j!==null;)i=j,a=i.child,i.tag===22&&i.memoizedState!==null?pu(o):a!==null?(a.return=i,j=a):pu(o);for(;l!==null;)j=l,z1(l),l=l.sibling;j=o,Hr=s,me=f}fu(e)}else o.subtreeFlags&8772&&l!==null?(l.return=o,j=l):fu(e)}}function fu(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:me||Qo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Ga(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ga(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var f=t.alternate;if(f!==null){var h=f.memoizedState;if(h!==null){var m=h.dehydrated;m!==null&&lr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}me||t.flags&512&&Bi(t)}catch(v){K(t,t.return,v)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function du(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function pu(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Qo(4,t)}catch(a){K(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){K(t,o,a)}}var l=t.return;try{Bi(t)}catch(a){K(t,l,a)}break;case 5:var i=t.return;try{Bi(t)}catch(a){K(t,i,a)}}}catch(a){K(t,t.return,a)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var Rd=Math.ceil,Mo=pt.ReactCurrentDispatcher,Fs=pt.ReactCurrentOwner,De=pt.ReactCurrentBatchConfig,I=0,le=null,b=null,ue=0,je=0,cn=Lt(0),ne=0,vr=null,Xt=0,Yo=0,As=0,qn=null,we=null,Vs=0,En=1/0,ot=null,To=!1,Qi=null,jt=null,Wr=!1,wt=null,Lo=0,bn=0,Yi=null,oo=-1,lo=0;function ge(){return I&6?J():oo!==-1?oo:oo=J()}function Nt(e){return e.mode&1?I&2&&ue!==0?ue&-ue:vd.transition!==null?(lo===0&&(lo=pc()),lo):(e=F,e!==0||(e=window.event,e=e===void 0?16:wc(e.type)),e):1}function Xe(e,t,n,r){if(50<bn)throw bn=0,Yi=null,Error(S(185));kr(e,n,r),(!(I&2)||e!==le)&&(e===le&&(!(I&2)&&(Yo|=n),ne===4&&yt(e,ue)),Ee(e,r),n===1&&I===0&&!(t.mode&1)&&(En=J()+500,Bo&&Rt()))}function Ee(e,t){var n=e.callbackNode;vf(e,t);var r=ho(e,e===le?ue:0);if(r===0)n!==null&&ka(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ka(n),t===1)e.tag===0?hd(mu.bind(null,e)):Ac(mu.bind(null,e)),fd(function(){!(I&6)&&Rt()}),n=null;else{switch(mc(r)){case 1:n=ds;break;case 4:n=fc;break;case 16:n=mo;break;case 536870912:n=dc;break;default:n=mo}n=D1(n,M1.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function M1(e,t){if(oo=-1,lo=0,I&6)throw Error(S(327));var n=e.callbackNode;if(vn()&&e.callbackNode!==n)return null;var r=ho(e,e===le?ue:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ro(e,r);else{t=r;var o=I;I|=2;var l=L1();(le!==e||ue!==t)&&(ot=null,En=J()+500,Bt(e,t));do try{$d();break}catch(s){T1(e,s)}while(!0);_s(),Mo.current=l,I=o,b!==null?t=0:(le=null,ue=0,t=ne)}if(t!==0){if(t===2&&(o=xi(e),o!==0&&(r=o,t=Xi(e,o))),t===1)throw n=vr,Bt(e,0),yt(e,r),Ee(e,J()),n;if(t===6)yt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Od(o)&&(t=Ro(e,r),t===2&&(l=xi(e),l!==0&&(r=l,t=Xi(e,l))),t===1))throw n=vr,Bt(e,0),yt(e,r),Ee(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Dt(e,we,ot);break;case 3:if(yt(e,r),(r&130023424)===r&&(t=Vs+500-J(),10<t)){if(ho(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ni(Dt.bind(null,e,we,ot),t);break}Dt(e,we,ot);break;case 4:if(yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Ye(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rd(r/1960))-r,10<r){e.timeoutHandle=Ni(Dt.bind(null,e,we,ot),r);break}Dt(e,we,ot);break;case 5:Dt(e,we,ot);break;default:throw Error(S(329))}}}return Ee(e,J()),e.callbackNode===n?M1.bind(null,e):null}function Xi(e,t){var n=qn;return e.current.memoizedState.isDehydrated&&(Bt(e,t).flags|=256),e=Ro(e,t),e!==2&&(t=we,we=n,t!==null&&Ki(t)),e}function Ki(e){we===null?we=e:we.push.apply(we,e)}function Od(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!Ke(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yt(e,t){for(t&=~As,t&=~Yo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ye(t),r=1<<n;e[n]=-1,t&=~r}}function mu(e){if(I&6)throw Error(S(327));vn();var t=ho(e,0);if(!(t&1))return Ee(e,J()),null;var n=Ro(e,t);if(e.tag!==0&&n===2){var r=xi(e);r!==0&&(t=r,n=Xi(e,r))}if(n===1)throw n=vr,Bt(e,0),yt(e,t),Ee(e,J()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Dt(e,we,ot),Ee(e,J()),null}function Us(e,t){var n=I;I|=1;try{return e(t)}finally{I=n,I===0&&(En=J()+500,Bo&&Rt())}}function Kt(e){wt!==null&&wt.tag===0&&!(I&6)&&vn();var t=I;I|=1;var n=De.transition,r=F;try{if(De.transition=null,F=1,e)return e()}finally{F=r,De.transition=n,I=t,!(I&6)&&Rt()}}function Bs(){je=cn.current,H(cn)}function Bt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,cd(n)),b!==null)for(n=b.return;n!==null;){var r=n;switch(ks(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wo();break;case 3:kn(),H(ke),H(he),Ts();break;case 5:Ms(r);break;case 4:kn();break;case 13:H(Q);break;case 19:H(Q);break;case 10:js(r.type._context);break;case 22:case 23:Bs()}n=n.return}if(le=e,b=e=Pt(e.current,null),ue=je=t,ne=0,vr=null,As=Yo=Xt=0,we=qn=null,Vt!==null){for(t=0;t<Vt.length;t++)if(n=Vt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}Vt=null}return e}function T1(e,t){do{var n=b;try{if(_s(),to.current=zo,Po){for(var r=Y.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Po=!1}if(Yt=0,oe=te=Y=null,Zn=!1,pr=0,Fs.current=null,n===null||n.return===null){ne=1,vr=t,b=null;break}e:{var l=e,i=n.return,s=n,a=t;if(t=ue,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var f=a,h=s,m=h.tag;if(!(h.mode&1)&&(m===0||m===11||m===15)){var v=h.alternate;v?(h.updateQueue=v.updateQueue,h.memoizedState=v.memoizedState,h.lanes=v.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=tu(i);if(w!==null){w.flags&=-257,nu(w,i,s,l,t),w.mode&1&&eu(l,f,t),t=w,a=f;var x=t.updateQueue;if(x===null){var g=new Set;g.add(a),t.updateQueue=g}else x.add(a);break e}else{if(!(t&1)){eu(l,f,t),Hs();break e}a=Error(S(426))}}else if(W&&s.mode&1){var z=tu(i);if(z!==null){!(z.flags&65536)&&(z.flags|=256),nu(z,i,s,l,t),Cs(Cn(a,s));break e}}l=a=Cn(a,s),ne!==4&&(ne=2),qn===null?qn=[l]:qn.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var d=m1(l,a,t);Ka(l,d);break e;case 1:s=a;var u=l.type,p=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(jt===null||!jt.has(p)))){l.flags|=65536,t&=-t,l.lanes|=t;var y=h1(l,s,t);Ka(l,y);break e}}l=l.return}while(l!==null)}O1(n)}catch(E){t=E,b===n&&n!==null&&(b=n=n.return);continue}break}while(!0)}function L1(){var e=Mo.current;return Mo.current=zo,e===null?zo:e}function Hs(){(ne===0||ne===3||ne===2)&&(ne=4),le===null||!(Xt&268435455)&&!(Yo&268435455)||yt(le,ue)}function Ro(e,t){var n=I;I|=2;var r=L1();(le!==e||ue!==t)&&(ot=null,Bt(e,t));do try{Id();break}catch(o){T1(e,o)}while(!0);if(_s(),I=n,Mo.current=r,b!==null)throw Error(S(261));return le=null,ue=0,ne}function Id(){for(;b!==null;)R1(b)}function $d(){for(;b!==null&&!sf();)R1(b)}function R1(e){var t=$1(e.alternate,e,je);e.memoizedProps=e.pendingProps,t===null?O1(e):b=t,Fs.current=null}function O1(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=zd(n,t),n!==null){n.flags&=32767,b=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ne=6,b=null;return}}else if(n=Pd(n,t,je),n!==null){b=n;return}if(t=t.sibling,t!==null){b=t;return}b=t=e}while(t!==null);ne===0&&(ne=5)}function Dt(e,t,n){var r=F,o=De.transition;try{De.transition=null,F=1,Dd(e,t,n,r)}finally{De.transition=o,F=r}return null}function Dd(e,t,n,r){do vn();while(wt!==null);if(I&6)throw Error(S(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(gf(e,l),e===le&&(b=le=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wr||(Wr=!0,D1(mo,function(){return vn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=De.transition,De.transition=null;var i=F;F=1;var s=I;I|=4,Fs.current=null,Td(e,n),P1(n,e),rd(_i),vo=!!Ei,_i=Ei=null,e.current=n,Ld(n),af(),I=s,F=i,De.transition=l}else e.current=n;if(Wr&&(Wr=!1,wt=e,Lo=o),l=e.pendingLanes,l===0&&(jt=null),ff(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(To)throw To=!1,e=Qi,Qi=null,e;return Lo&1&&e.tag!==0&&vn(),l=e.pendingLanes,l&1?e===Yi?bn++:(bn=0,Yi=e):bn=0,Rt(),null}function vn(){if(wt!==null){var e=mc(Lo),t=De.transition,n=F;try{if(De.transition=null,F=16>e?16:e,wt===null)var r=!1;else{if(e=wt,wt=null,Lo=0,I&6)throw Error(S(331));var o=I;for(I|=4,j=e.current;j!==null;){var l=j,i=l.child;if(j.flags&16){var s=l.deletions;if(s!==null){for(var a=0;a<s.length;a++){var f=s[a];for(j=f;j!==null;){var h=j;switch(h.tag){case 0:case 11:case 15:Jn(8,h,l)}var m=h.child;if(m!==null)m.return=h,j=m;else for(;j!==null;){h=j;var v=h.sibling,w=h.return;if(_1(h),h===f){j=null;break}if(v!==null){v.return=w,j=v;break}j=w}}}var x=l.alternate;if(x!==null){var g=x.child;if(g!==null){x.child=null;do{var z=g.sibling;g.sibling=null,g=z}while(g!==null)}}j=l}}if(l.subtreeFlags&2064&&i!==null)i.return=l,j=i;else e:for(;j!==null;){if(l=j,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Jn(9,l,l.return)}var d=l.sibling;if(d!==null){d.return=l.return,j=d;break e}j=l.return}}var u=e.current;for(j=u;j!==null;){i=j;var p=i.child;if(i.subtreeFlags&2064&&p!==null)p.return=i,j=p;else e:for(i=u;j!==null;){if(s=j,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Qo(9,s)}}catch(E){K(s,s.return,E)}if(s===i){j=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,j=y;break e}j=s.return}}if(I=o,Rt(),tt&&typeof tt.onPostCommitFiberRoot=="function")try{tt.onPostCommitFiberRoot(Do,e)}catch{}r=!0}return r}finally{F=n,De.transition=t}}return!1}function hu(e,t,n){t=Cn(n,t),t=m1(e,t,1),e=_t(e,t,1),t=ge(),e!==null&&(kr(e,1,t),Ee(e,t))}function K(e,t,n){if(e.tag===3)hu(e,e,n);else for(;t!==null;){if(t.tag===3){hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jt===null||!jt.has(r))){e=Cn(n,e),e=h1(t,e,1),t=_t(t,e,1),e=ge(),t!==null&&(kr(t,1,e),Ee(t,e));break}}t=t.return}}function Fd(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,le===e&&(ue&n)===n&&(ne===4||ne===3&&(ue&130023424)===ue&&500>J()-Vs?Bt(e,0):As|=n),Ee(e,t)}function I1(e,t){t===0&&(e.mode&1?(t=Or,Or<<=1,!(Or&130023424)&&(Or=4194304)):t=1);var n=ge();e=ft(e,t),e!==null&&(kr(e,t,n),Ee(e,n))}function Ad(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),I1(e,n)}function Vd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),I1(e,n)}var $1;$1=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ke.current)Se=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Se=!1,Nd(e,t,n);Se=!!(e.flags&131072)}else Se=!1,W&&t.flags&1048576&&Vc(t,Co,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ro(e,t),e=t.pendingProps;var o=xn(t,he.current);hn(t,n),o=Rs(null,t,r,e,o,n);var l=Os();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ce(r)?(l=!0,So(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Ps(t),o.updater=Wo,t.stateNode=o,o._reactInternals=t,Oi(t,r,e,n),t=Di(null,t,r,!0,l,n)):(t.tag=0,W&&l&&Ss(t),ve(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ro(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Bd(r),e=He(r,e),o){case 0:t=$i(null,t,r,e,n);break e;case 1:t=lu(null,t,r,e,n);break e;case 11:t=ru(null,t,r,e,n);break e;case 14:t=ou(null,t,r,He(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),$i(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),lu(e,t,r,o,n);case 3:e:{if(x1(t),e===null)throw Error(S(387));r=t.pendingProps,l=t.memoizedState,o=l.element,Yc(e,t),jo(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Cn(Error(S(423)),t),t=iu(e,t,r,n,o);break e}else if(r!==o){o=Cn(Error(S(424)),t),t=iu(e,t,r,n,o);break e}else for(Ne=Et(t.stateNode.containerInfo.firstChild),Pe=t,W=!0,Qe=null,n=Wc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(wn(),r===o){t=dt(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return Xc(t),e===null&&Ti(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,ji(r,o)?i=null:l!==null&&ji(r,l)&&(t.flags|=32),y1(e,t),ve(e,t,i,n),t.child;case 6:return e===null&&Ti(t),null;case 13:return w1(e,t,n);case 4:return zs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Sn(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ru(e,t,r,o,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,U(Eo,r._currentValue),r._currentValue=i,l!==null)if(Ke(l.value,i)){if(l.children===o.children&&!ke.current){t=dt(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var s=l.dependencies;if(s!==null){i=l.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(l.tag===1){a=at(-1,n&-n),a.tag=2;var f=l.updateQueue;if(f!==null){f=f.shared;var h=f.pending;h===null?a.next=a:(a.next=h.next,h.next=a),f.pending=a}}l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Li(l.return,n,t),s.lanes|=n;break}a=a.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(S(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Li(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}ve(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,hn(t,n),o=Fe(o),r=r(o),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),ou(e,t,r,o,n);case 15:return v1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),ro(e,t),t.tag=1,Ce(r)?(e=!0,So(t)):e=!1,hn(t,n),p1(t,r,o),Oi(t,r,o,n),Di(null,t,r,!0,e,n);case 19:return S1(e,t,n);case 22:return g1(e,t,n)}throw Error(S(156,t.tag))};function D1(e,t){return cc(e,t)}function Ud(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $e(e,t,n,r){return new Ud(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Bd(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===us)return 11;if(e===cs)return 14}return 2}function Pt(e,t){var n=e.alternate;return n===null?(n=$e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function io(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")Ws(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case bt:return Ht(n.children,o,l,t);case as:i=8,o|=8;break;case oi:return e=$e(12,n,t,o|2),e.elementType=oi,e.lanes=l,e;case li:return e=$e(13,n,t,o),e.elementType=li,e.lanes=l,e;case ii:return e=$e(19,n,t,o),e.elementType=ii,e.lanes=l,e;case Xu:return Xo(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Qu:i=10;break e;case Yu:i=9;break e;case us:i=11;break e;case cs:i=14;break e;case ht:i=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=$e(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function Ht(e,t,n,r){return e=$e(7,e,r,t),e.lanes=n,e}function Xo(e,t,n,r){return e=$e(22,e,r,t),e.elementType=Xu,e.lanes=n,e.stateNode={isHidden:!1},e}function Gl(e,t,n){return e=$e(6,e,null,t),e.lanes=n,e}function Zl(e,t,n){return t=$e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Hd(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ml(0),this.expirationTimes=Ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ml(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qs(e,t,n,r,o,l,i,s,a){return e=new Hd(e,t,n,s,a),t===1?(t=1,l===!0&&(t|=8)):t=0,l=$e(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ps(l),e}function Wd(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function F1(e){if(!e)return Mt;e=e._reactInternals;e:{if(Zt(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ce(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(Ce(n))return Fc(e,n,t)}return t}function A1(e,t,n,r,o,l,i,s,a){return e=Qs(n,r,!0,e,o,l,i,s,a),e.context=F1(null),n=e.current,r=ge(),o=Nt(n),l=at(r,o),l.callback=t??null,_t(n,l,o),e.current.lanes=o,kr(e,o,r),Ee(e,r),e}function Ko(e,t,n,r){var o=t.current,l=ge(),i=Nt(o);return n=F1(n),t.context===null?t.context=n:t.pendingContext=n,t=at(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=_t(o,t,i),e!==null&&(Xe(e,o,i,l),eo(e,o,i)),i}function Oo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ys(e,t){vu(e,t),(e=e.alternate)&&vu(e,t)}function Qd(){return null}var V1=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xs(e){this._internalRoot=e}Go.prototype.render=Xs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Ko(e,t,null,null)};Go.prototype.unmount=Xs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Kt(function(){Ko(null,e,null,null)}),t[ct]=null}};function Go(e){this._internalRoot=e}Go.prototype.unstable_scheduleHydration=function(e){if(e){var t=gc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gt.length&&t!==0&&t<gt[n].priority;n++);gt.splice(n,0,e),n===0&&xc(e)}};function Ks(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function gu(){}function Yd(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var f=Oo(i);l.call(f)}}var i=A1(t,r,e,0,null,!1,!1,"",gu);return e._reactRootContainer=i,e[ct]=i.current,ar(e.nodeType===8?e.parentNode:e),Kt(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var f=Oo(a);s.call(f)}}var a=Qs(e,0,!1,null,null,!1,!1,"",gu);return e._reactRootContainer=a,e[ct]=a.current,ar(e.nodeType===8?e.parentNode:e),Kt(function(){Ko(t,a,n,r)}),a}function Jo(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var s=o;o=function(){var a=Oo(i);s.call(a)}}Ko(t,i,e,o)}else i=Yd(n,t,e,o,r);return Oo(i)}hc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hn(t.pendingLanes);n!==0&&(ps(t,n|1),Ee(t,J()),!(I&6)&&(En=J()+500,Rt()))}break;case 13:Kt(function(){var r=ft(e,1);if(r!==null){var o=ge();Xe(r,e,1,o)}}),Ys(e,1)}};ms=function(e){if(e.tag===13){var t=ft(e,134217728);if(t!==null){var n=ge();Xe(t,e,134217728,n)}Ys(e,134217728)}};vc=function(e){if(e.tag===13){var t=Nt(e),n=ft(e,t);if(n!==null){var r=ge();Xe(n,e,t,r)}Ys(e,t)}};gc=function(){return F};yc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};vi=function(e,t,n){switch(t){case"input":if(ui(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Uo(r);if(!o)throw Error(S(90));Gu(r),ui(r,o)}}}break;case"textarea":Ju(e,n);break;case"select":t=n.value,t!=null&&fn(e,!!n.multiple,t,!1)}};oc=Us;lc=Kt;var Xd={usingClientEntryPoint:!1,Events:[Er,rn,Uo,nc,rc,Us]},An={findFiberByHostInstance:At,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Kd={bundleType:An.bundleType,version:An.version,rendererPackageName:An.rendererPackageName,rendererConfig:An.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ac(e),e===null?null:e.stateNode},findFiberByHostInstance:An.findFiberByHostInstance||Qd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qr.isDisabled&&Qr.supportsFiber)try{Do=Qr.inject(Kd),tt=Qr}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xd;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ks(t))throw Error(S(200));return Wd(e,t,null,n)};Te.createRoot=function(e,t){if(!Ks(e))throw Error(S(299));var n=!1,r="",o=V1;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qs(e,1,!1,null,null,n,!1,r,o),e[ct]=t.current,ar(e.nodeType===8?e.parentNode:e),new Xs(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ac(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Kt(e)};Te.hydrate=function(e,t,n){if(!Zo(t))throw Error(S(200));return Jo(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Ks(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=V1;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=A1(t,null,e,1,n??null,o,!1,l,i),e[ct]=t.current,ar(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Go(t)};Te.render=function(e,t,n){if(!Zo(t))throw Error(S(200));return Jo(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Zo(e))throw Error(S(40));return e._reactRootContainer?(Kt(function(){Jo(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Te.unstable_batchedUpdates=Us;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Zo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Jo(e,t,n,!1,r)};Te.version="18.3.1-next-f1338f8080-20240426";function U1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U1)}catch(e){console.error(e)}}U1(),Uu.exports=Te;var Gd=Uu.exports,yu=Gd;ni.createRoot=yu.createRoot,ni.hydrateRoot=yu.hydrateRoot;var B1={exports:{}},Zd="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Jd=Zd,qd=Jd;function H1(){}function W1(){}W1.resetWarningCache=H1;var bd=function(){function e(r,o,l,i,s,a){if(a!==qd){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:W1,resetWarningCache:H1};return n.PropTypes=n,n};B1.exports=bd();var ep=B1.exports;const et=Pu(ep);var tp=!1;function np(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function rp(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var op=function(){function e(n){var r=this;this._insertTag=function(o){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,l),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!tp:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(rp(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var l=np(o);try{l.insertRule(r,l.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var o;return(o=r.parentNode)==null?void 0:o.removeChild(r)}),this.tags=[],this.ctr=0},e}(),pe="-ms-",Io="-moz-",$="-webkit-",Q1="comm",Gs="rule",Zs="decl",lp="@import",Y1="@keyframes",ip="@layer",sp=Math.abs,qo=String.fromCharCode,ap=Object.assign;function up(e,t){return ae(e,0)^45?(((t<<2^ae(e,0))<<2^ae(e,1))<<2^ae(e,2))<<2^ae(e,3):0}function X1(e){return e.trim()}function cp(e,t){return(e=t.exec(e))?e[0]:e}function D(e,t,n){return e.replace(t,n)}function Gi(e,t){return e.indexOf(t)}function ae(e,t){return e.charCodeAt(t)|0}function gr(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function Js(e){return e.length}function Yr(e,t){return t.push(e),e}function fp(e,t){return e.map(t).join("")}var bo=1,_n=1,K1=0,_e=0,q=0,zn="";function el(e,t,n,r,o,l,i){return{value:e,root:t,parent:n,type:r,props:o,children:l,line:bo,column:_n,length:i,return:""}}function Vn(e,t){return ap(el("",null,null,"",null,null,0),e,{length:-e.length},t)}function dp(){return q}function pp(){return q=_e>0?ae(zn,--_e):0,_n--,q===10&&(_n=1,bo--),q}function ze(){return q=_e<K1?ae(zn,_e++):0,_n++,q===10&&(_n=1,bo++),q}function rt(){return ae(zn,_e)}function so(){return _e}function jr(e,t){return gr(zn,e,t)}function yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G1(e){return bo=_n=1,K1=Je(zn=e),_e=0,[]}function Z1(e){return zn="",e}function ao(e){return X1(jr(_e-1,Zi(e===91?e+2:e===40?e+1:e)))}function mp(e){for(;(q=rt())&&q<33;)ze();return yr(e)>2||yr(q)>3?"":" "}function hp(e,t){for(;--t&&ze()&&!(q<48||q>102||q>57&&q<65||q>70&&q<97););return jr(e,so()+(t<6&&rt()==32&&ze()==32))}function Zi(e){for(;ze();)switch(q){case e:return _e;case 34:case 39:e!==34&&e!==39&&Zi(q);break;case 40:e===41&&Zi(e);break;case 92:ze();break}return _e}function vp(e,t){for(;ze()&&e+q!==57;)if(e+q===84&&rt()===47)break;return"/*"+jr(t,_e-1)+"*"+qo(e===47?e:ze())}function gp(e){for(;!yr(rt());)ze();return jr(e,_e)}function yp(e){return Z1(uo("",null,null,null,[""],e=G1(e),0,[0],e))}function uo(e,t,n,r,o,l,i,s,a){for(var f=0,h=0,m=i,v=0,w=0,x=0,g=1,z=1,d=1,u=0,p="",y=o,E=l,_=r,C=p;z;)switch(x=u,u=ze()){case 40:if(x!=108&&ae(C,m-1)==58){Gi(C+=D(ao(u),"&","&\f"),"&\f")!=-1&&(d=-1);break}case 34:case 39:case 91:C+=ao(u);break;case 9:case 10:case 13:case 32:C+=mp(x);break;case 92:C+=hp(so()-1,7);continue;case 47:switch(rt()){case 42:case 47:Yr(xp(vp(ze(),so()),t,n),a);break;default:C+="/"}break;case 123*g:s[f++]=Je(C)*d;case 125*g:case 59:case 0:switch(u){case 0:case 125:z=0;case 59+h:d==-1&&(C=D(C,/\f/g,"")),w>0&&Je(C)-m&&Yr(w>32?wu(C+";",r,n,m-1):wu(D(C," ","")+";",r,n,m-2),a);break;case 59:C+=";";default:if(Yr(_=xu(C,t,n,f,h,o,s,p,y=[],E=[],m),l),u===123)if(h===0)uo(C,t,_,_,y,l,m,s,E);else switch(v===99&&ae(C,3)===110?100:v){case 100:case 108:case 109:case 115:uo(e,_,_,r&&Yr(xu(e,_,_,0,0,o,s,p,o,y=[],m),E),o,E,m,s,r?y:E);break;default:uo(C,_,_,_,[""],E,0,s,E)}}f=h=w=0,g=d=1,p=C="",m=i;break;case 58:m=1+Je(C),w=x;default:if(g<1){if(u==123)--g;else if(u==125&&g++==0&&pp()==125)continue}switch(C+=qo(u),u*g){case 38:d=h>0?1:(C+="\f",-1);break;case 44:s[f++]=(Je(C)-1)*d,d=1;break;case 64:rt()===45&&(C+=ao(ze())),v=rt(),h=m=Je(p=C+=gp(so())),u++;break;case 45:x===45&&Je(C)==2&&(g=0)}}return l}function xu(e,t,n,r,o,l,i,s,a,f,h){for(var m=o-1,v=o===0?l:[""],w=Js(v),x=0,g=0,z=0;x<r;++x)for(var d=0,u=gr(e,m+1,m=sp(g=i[x])),p=e;d<w;++d)(p=X1(g>0?v[d]+" "+u:D(u,/&\f/g,v[d])))&&(a[z++]=p);return el(e,t,n,o===0?Gs:s,a,f,h)}function xp(e,t,n){return el(e,t,n,Q1,qo(dp()),gr(e,2,-2),0)}function wu(e,t,n,r){return el(e,t,n,Zs,gr(e,0,r),gr(e,r+1,-1),r)}function gn(e,t){for(var n="",r=Js(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function wp(e,t,n,r){switch(e.type){case ip:if(e.children.length)break;case lp:case Zs:return e.return=e.return||e.value;case Q1:return"";case Y1:return e.return=e.value+"{"+gn(e.children,r)+"}";case Gs:e.value=e.props.join(",")}return Je(n=gn(e.children,r))?e.return=e.value+"{"+n+"}":""}function Sp(e){var t=Js(e);return function(n,r,o,l){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,l)||"";return i}}function kp(e){return function(t){t.root||(t=t.return)&&e(t)}}function Cp(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Ep=function(t,n,r){for(var o=0,l=0;o=l,l=rt(),o===38&&l===12&&(n[r]=1),!yr(l);)ze();return jr(t,_e)},_p=function(t,n){var r=-1,o=44;do switch(yr(o)){case 0:o===38&&rt()===12&&(n[r]=1),t[r]+=Ep(_e-1,n,r);break;case 2:t[r]+=ao(o);break;case 4:if(o===44){t[++r]=rt()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=qo(o)}while(o=ze());return t},jp=function(t,n){return Z1(_p(G1(t),n))},Su=new WeakMap,Np=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Su.get(r))&&!o){Su.set(t,!0);for(var l=[],i=jp(n,l),s=r.props,a=0,f=0;a<i.length;a++)for(var h=0;h<s.length;h++,f++)t.props[f]=l[a]?i[a].replace(/&\f/g,s[h]):s[h]+" "+i[a]}}},Pp=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function J1(e,t){switch(up(e,t)){case 5103:return $+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return $+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return $+e+Io+e+pe+e+e;case 6828:case 4268:return $+e+pe+e+e;case 6165:return $+e+pe+"flex-"+e+e;case 5187:return $+e+D(e,/(\w+).+(:[^]+)/,$+"box-$1$2"+pe+"flex-$1$2")+e;case 5443:return $+e+pe+"flex-item-"+D(e,/flex-|-self/,"")+e;case 4675:return $+e+pe+"flex-line-pack"+D(e,/align-content|flex-|-self/,"")+e;case 5548:return $+e+pe+D(e,"shrink","negative")+e;case 5292:return $+e+pe+D(e,"basis","preferred-size")+e;case 6060:return $+"box-"+D(e,"-grow","")+$+e+pe+D(e,"grow","positive")+e;case 4554:return $+D(e,/([^-])(transform)/g,"$1"+$+"$2")+e;case 6187:return D(D(D(e,/(zoom-|grab)/,$+"$1"),/(image-set)/,$+"$1"),e,"")+e;case 5495:case 3959:return D(e,/(image-set\([^]*)/,$+"$1$`$1");case 4968:return D(D(e,/(.+:)(flex-)?(.*)/,$+"box-pack:$3"+pe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+$+e+e;case 4095:case 3583:case 4068:case 2532:return D(e,/(.+)-inline(.+)/,$+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(ae(e,t+1)){case 109:if(ae(e,t+4)!==45)break;case 102:return D(e,/(.+:)(.+)-([^]+)/,"$1"+$+"$2-$3$1"+Io+(ae(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Gi(e,"stretch")?J1(D(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(ae(e,t+1)!==115)break;case 6444:switch(ae(e,Je(e)-3-(~Gi(e,"!important")&&10))){case 107:return D(e,":",":"+$)+e;case 101:return D(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+$+(ae(e,14)===45?"inline-":"")+"box$3$1"+$+"$2$3$1"+pe+"$2box$3")+e}break;case 5936:switch(ae(e,t+11)){case 114:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return $+e+pe+D(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return $+e+pe+e+e}return e}var zp=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case Zs:t.return=J1(t.value,t.length);break;case Y1:return gn([Vn(t,{value:D(t.value,"@","@"+$)})],o);case Gs:if(t.length)return fp(t.props,function(l){switch(cp(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return gn([Vn(t,{props:[D(l,/:(read-\w+)/,":"+Io+"$1")]})],o);case"::placeholder":return gn([Vn(t,{props:[D(l,/:(plac\w+)/,":"+$+"input-$1")]}),Vn(t,{props:[D(l,/:(plac\w+)/,":"+Io+"$1")]}),Vn(t,{props:[D(l,/:(plac\w+)/,pe+"input-$1")]})],o)}return""})}},Mp=[zp],Tp=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(g){var z=g.getAttribute("data-emotion");z.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var o=t.stylisPlugins||Mp,l={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var z=g.getAttribute("data-emotion").split(" "),d=1;d<z.length;d++)l[z[d]]=!0;s.push(g)});var a,f=[Np,Pp];{var h,m=[wp,kp(function(g){h.insert(g)})],v=Sp(f.concat(o,m)),w=function(z){return gn(yp(z),v)};a=function(z,d,u,p){h=u,w(z?z+"{"+d.styles+"}":d.styles),p&&(x.inserted[d.name]=!0)}}var x={key:n,sheet:new op({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:a};return x.sheet.hydrate(s),x},q1={exports:{}},A={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=typeof Symbol=="function"&&Symbol.for,qs=ie?Symbol.for("react.element"):60103,bs=ie?Symbol.for("react.portal"):60106,tl=ie?Symbol.for("react.fragment"):60107,nl=ie?Symbol.for("react.strict_mode"):60108,rl=ie?Symbol.for("react.profiler"):60114,ol=ie?Symbol.for("react.provider"):60109,ll=ie?Symbol.for("react.context"):60110,ea=ie?Symbol.for("react.async_mode"):60111,il=ie?Symbol.for("react.concurrent_mode"):60111,sl=ie?Symbol.for("react.forward_ref"):60112,al=ie?Symbol.for("react.suspense"):60113,Lp=ie?Symbol.for("react.suspense_list"):60120,ul=ie?Symbol.for("react.memo"):60115,cl=ie?Symbol.for("react.lazy"):60116,Rp=ie?Symbol.for("react.block"):60121,Op=ie?Symbol.for("react.fundamental"):60117,Ip=ie?Symbol.for("react.responder"):60118,$p=ie?Symbol.for("react.scope"):60119;function Re(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case qs:switch(e=e.type,e){case ea:case il:case tl:case rl:case nl:case al:return e;default:switch(e=e&&e.$$typeof,e){case ll:case sl:case cl:case ul:case ol:return e;default:return t}}case bs:return t}}}function b1(e){return Re(e)===il}A.AsyncMode=ea;A.ConcurrentMode=il;A.ContextConsumer=ll;A.ContextProvider=ol;A.Element=qs;A.ForwardRef=sl;A.Fragment=tl;A.Lazy=cl;A.Memo=ul;A.Portal=bs;A.Profiler=rl;A.StrictMode=nl;A.Suspense=al;A.isAsyncMode=function(e){return b1(e)||Re(e)===ea};A.isConcurrentMode=b1;A.isContextConsumer=function(e){return Re(e)===ll};A.isContextProvider=function(e){return Re(e)===ol};A.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===qs};A.isForwardRef=function(e){return Re(e)===sl};A.isFragment=function(e){return Re(e)===tl};A.isLazy=function(e){return Re(e)===cl};A.isMemo=function(e){return Re(e)===ul};A.isPortal=function(e){return Re(e)===bs};A.isProfiler=function(e){return Re(e)===rl};A.isStrictMode=function(e){return Re(e)===nl};A.isSuspense=function(e){return Re(e)===al};A.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===tl||e===il||e===rl||e===nl||e===al||e===Lp||typeof e=="object"&&e!==null&&(e.$$typeof===cl||e.$$typeof===ul||e.$$typeof===ol||e.$$typeof===ll||e.$$typeof===sl||e.$$typeof===Op||e.$$typeof===Ip||e.$$typeof===$p||e.$$typeof===Rp)};A.typeOf=Re;q1.exports=A;var Dp=q1.exports,e0=Dp,Fp={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ap={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},t0={};t0[e0.ForwardRef]=Fp;t0[e0.Memo]=Ap;var Vp=!0;function n0(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var ta=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||Vp===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},r0=function(t,n,r){ta(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+o:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function Up(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Bp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Hp=!1,Wp=/[A-Z]|^ms/g,Qp=/_EMO_([^_]+?)_([^]*?)_EMO_/g,o0=function(t){return t.charCodeAt(1)===45},ku=function(t){return t!=null&&typeof t!="boolean"},Jl=Cp(function(e){return o0(e)?e:e.replace(Wp,"-$&").toLowerCase()}),Cu=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(Qp,function(r,o,l){return qe={name:o,styles:l,next:qe},o})}return Bp[t]!==1&&!o0(t)&&typeof n=="number"&&n!==0?n+"px":n},Yp="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function xr(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var o=n;if(o.anim===1)return qe={name:o.name,styles:o.styles,next:qe},o.name;var l=n;if(l.styles!==void 0){var i=l.next;if(i!==void 0)for(;i!==void 0;)qe={name:i.name,styles:i.styles,next:qe},i=i.next;var s=l.styles+";";return s}return Xp(e,t,n)}case"function":{if(e!==void 0){var a=qe,f=n(e);return qe=a,xr(e,t,f)}break}}var h=n;if(t==null)return h;var m=t[h];return m!==void 0?m:h}function Xp(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=xr(e,t,n[o])+";";else for(var l in n){var i=n[l];if(typeof i!="object"){var s=i;t!=null&&t[s]!==void 0?r+=l+"{"+t[s]+"}":ku(s)&&(r+=Jl(l)+":"+Cu(l,s)+";")}else{if(l==="NO_COMPONENT_SELECTOR"&&Hp)throw new Error(Yp);if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var a=0;a<i.length;a++)ku(i[a])&&(r+=Jl(l)+":"+Cu(l,i[a])+";");else{var f=xr(e,t,i);switch(l){case"animation":case"animationName":{r+=Jl(l)+":"+f+";";break}default:r+=l+"{"+f+"}"}}}}return r}var Eu=/label:\s*([^\s;\n{]+)\s*(;|$)/g,qe;function na(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,o="";qe=void 0;var l=e[0];if(l==null||l.raw===void 0)r=!1,o+=xr(n,t,l);else{var i=l;o+=i[0]}for(var s=1;s<e.length;s++)if(o+=xr(n,t,e[s]),r){var a=l;o+=a[s]}Eu.lastIndex=0;for(var f="",h;(h=Eu.exec(o))!==null;)f+="-"+h[1];var m=Up(o)+f;return{name:m,styles:o,next:qe}}var Kp=function(t){return t()},Gp=da.useInsertionEffect?da.useInsertionEffect:!1,l0=Gp||Kp,Ji=!1,i0=L.createContext(typeof HTMLElement<"u"?Tp({key:"css"}):null);i0.Provider;var s0=function(t){return L.forwardRef(function(n,r){var o=L.useContext(i0);return t(n,o,r)})},a0=L.createContext({}),ra={}.hasOwnProperty,qi="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Zp=function(t,n){var r={};for(var o in n)ra.call(n,o)&&(r[o]=n[o]);return r[qi]=t,r},Jp=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return ta(n,r,o),l0(function(){return r0(n,r,o)}),null},qp=s0(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var o=e[qi],l=[r],i="";typeof e.className=="string"?i=n0(t.registered,l,e.className):e.className!=null&&(i=e.className+" ");var s=na(l,void 0,L.useContext(a0));i+=t.key+"-"+s.name;var a={};for(var f in e)ra.call(e,f)&&f!=="css"&&f!==qi&&!Ji&&(a[f]=e[f]);return a.className=i,n&&(a.ref=n),L.createElement(L.Fragment,null,L.createElement(Jp,{cache:t,serialized:s,isStringTag:typeof o=="string"}),L.createElement(o,a))}),bp=qp,e2=c.Fragment;function ee(e,t,n){return ra.call(t,"css")?c.jsx(bp,Zp(e,t),n):c.jsx(e,t,n)}function u0(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return na(t)}var k=function(){var t=u0.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},t2=function e(t){for(var n=t.length,r=0,o="";r<n;r++){var l=t[r];if(l!=null){var i=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))i=e(l);else{i="";for(var s in l)l[s]&&s&&(i&&(i+=" "),i+=s)}break}default:i=l}i&&(o&&(o+=" "),o+=i)}}return o};function n2(e,t,n){var r=[],o=n0(e,r,n);return r.length<2?n:o+t(r)}var r2=function(t){var n=t.cache,r=t.serializedArr;return l0(function(){for(var o=0;o<r.length;o++)r0(n,r[o],!1)}),null},ql=s0(function(e,t){var n=!1,r=[],o=function(){if(n&&Ji)throw new Error("css can only be used during render");for(var f=arguments.length,h=new Array(f),m=0;m<f;m++)h[m]=arguments[m];var v=na(h,t.registered);return r.push(v),ta(t,v,!1),t.key+"-"+v.name},l=function(){if(n&&Ji)throw new Error("cx can only be used during render");for(var f=arguments.length,h=new Array(f),m=0;m<f;m++)h[m]=arguments[m];return n2(t.registered,o,t2(h))},i={css:o,cx:l,theme:L.useContext(a0)},s=e.children(i);return n=!0,L.createElement(L.Fragment,null,L.createElement(r2,{cache:t,serializedArr:r}),s)}),o2=Object.defineProperty,l2=(e,t,n)=>t in e?o2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Xr=(e,t,n)=>l2(e,typeof t!="symbol"?t+"":t,n),bi=new Map,Kr=new WeakMap,_u=0,i2=void 0;function s2(e){return e?(Kr.has(e)||(_u+=1,Kr.set(e,_u.toString())),Kr.get(e)):"0"}function a2(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?s2(e.root):e[t]}`).toString()}function u2(e){const t=a2(e);let n=bi.get(t);if(!n){const r=new Map;let o;const l=new IntersectionObserver(i=>{i.forEach(s=>{var a;const f=s.isIntersecting&&o.some(h=>s.intersectionRatio>=h);e.trackVisibility&&typeof s.isVisible>"u"&&(s.isVisible=f),(a=r.get(s.target))==null||a.forEach(h=>{h(f,s)})})},e);o=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},bi.set(t,n)}return n}function c0(e,t,n={},r=i2){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:o,observer:l,elements:i}=u2(n),s=i.get(e)||[];return i.has(e)||i.set(e,s),s.push(t),l.observe(e),function(){s.splice(s.indexOf(t),1),s.length===0&&(i.delete(e),l.unobserve(e)),i.size===0&&(l.disconnect(),bi.delete(o))}}function c2(e){return typeof e.children!="function"}var ju=class extends L.Component{constructor(e){super(e),Xr(this,"node",null),Xr(this,"_unobserveCb",null),Xr(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),Xr(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),c2(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o,fallbackInView:l}=this.props;this._unobserveCb=c0(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:o},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:w,entry:x}=this.state;return e({inView:w,entry:x,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:o,rootMargin:l,onChange:i,skip:s,trackVisibility:a,delay:f,initialInView:h,fallbackInView:m,...v}=this.props;return L.createElement(t||"div",{ref:this.handleNode,...v},e)}};function f0({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:o,triggerOnce:l,skip:i,initialInView:s,fallbackInView:a,onChange:f}={}){var h;const[m,v]=L.useState(null),w=L.useRef(),[x,g]=L.useState({inView:!!s,entry:void 0});w.current=f,L.useEffect(()=>{if(i||!m)return;let p;return p=c0(m,(y,E)=>{g({inView:y,entry:E}),w.current&&w.current(y,E),E.isIntersecting&&l&&p&&(p(),p=void 0)},{root:o,rootMargin:r,threshold:e,trackVisibility:n,delay:t},a),()=>{p&&p()}},[Array.isArray(e)?e.toString():e,m,o,r,l,i,n,a,t]);const z=(h=x.entry)==null?void 0:h.target,d=L.useRef();!m&&z&&!l&&!i&&d.current!==z&&(d.current=z,g({inView:!!s,entry:void 0}));const u=[v,x.inView,x.entry];return u.ref=u[0],u.inView=u[1],u.entry=u[2],u}var d0={exports:{}},V={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),la=Symbol.for("react.portal"),fl=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),ml=Symbol.for("react.provider"),hl=Symbol.for("react.context"),f2=Symbol.for("react.server_context"),vl=Symbol.for("react.forward_ref"),gl=Symbol.for("react.suspense"),yl=Symbol.for("react.suspense_list"),xl=Symbol.for("react.memo"),wl=Symbol.for("react.lazy"),d2=Symbol.for("react.offscreen"),p0;p0=Symbol.for("react.module.reference");function Ve(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case oa:switch(e=e.type,e){case fl:case pl:case dl:case gl:case yl:return e;default:switch(e=e&&e.$$typeof,e){case f2:case hl:case vl:case wl:case xl:case ml:return e;default:return t}}case la:return t}}}V.ContextConsumer=hl;V.ContextProvider=ml;V.Element=oa;V.ForwardRef=vl;V.Fragment=fl;V.Lazy=wl;V.Memo=xl;V.Portal=la;V.Profiler=pl;V.StrictMode=dl;V.Suspense=gl;V.SuspenseList=yl;V.isAsyncMode=function(){return!1};V.isConcurrentMode=function(){return!1};V.isContextConsumer=function(e){return Ve(e)===hl};V.isContextProvider=function(e){return Ve(e)===ml};V.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===oa};V.isForwardRef=function(e){return Ve(e)===vl};V.isFragment=function(e){return Ve(e)===fl};V.isLazy=function(e){return Ve(e)===wl};V.isMemo=function(e){return Ve(e)===xl};V.isPortal=function(e){return Ve(e)===la};V.isProfiler=function(e){return Ve(e)===pl};V.isStrictMode=function(e){return Ve(e)===dl};V.isSuspense=function(e){return Ve(e)===gl};V.isSuspenseList=function(e){return Ve(e)===yl};V.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===fl||e===pl||e===dl||e===gl||e===yl||e===d2||typeof e=="object"&&e!==null&&(e.$$typeof===wl||e.$$typeof===xl||e.$$typeof===ml||e.$$typeof===hl||e.$$typeof===vl||e.$$typeof===p0||e.getModuleId!==void 0)};V.typeOf=Ve;d0.exports=V;var p2=d0.exports;k`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;k`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;k`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;k`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;k`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;k`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;k`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;k`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;k`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const m0=k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function m2({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=m0,iterationCount:o=1}){return u0`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${o};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function h2(e){return e==null}function v2(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function h0(e,t){return n=>n?e():t()}function wr(e){return h0(e,()=>null)}function es(e){return wr(()=>({opacity:0}))(e)}const ia=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:o=1e3,fraction:l=0,keyframes:i=m0,triggerOnce:s=!1,className:a,style:f,childClassName:h,childStyle:m,children:v,onVisibilityChange:w}=e,x=L.useMemo(()=>m2({keyframes:i,duration:o}),[o,i]);return h2(v)?null:v2(v)?ee(y2,{...e,animationStyles:x,children:String(v)}):p2.isFragment(v)?ee(v0,{...e,animationStyles:x}):ee(e2,{children:L.Children.map(v,(g,z)=>{if(!L.isValidElement(g))return null;const d=r+(t?z*o*n:0);switch(g.type){case"ol":case"ul":return ee(ql,{children:({cx:u})=>ee(g.type,{...g.props,className:u(a,g.props.className),style:Object.assign({},f,g.props.style),children:ee(ia,{...e,children:g.props.children})})});case"li":return ee(ju,{threshold:l,triggerOnce:s,onChange:w,children:({inView:u,ref:p})=>ee(ql,{children:({cx:y})=>ee(g.type,{...g.props,ref:p,className:y(h,g.props.className),css:wr(()=>x)(u),style:Object.assign({},m,g.props.style,es(!u),{animationDelay:d+"ms"})})})});default:return ee(ju,{threshold:l,triggerOnce:s,onChange:w,children:({inView:u,ref:p})=>ee("div",{ref:p,className:a,css:wr(()=>x)(u),style:Object.assign({},f,es(!u),{animationDelay:d+"ms"}),children:ee(ql,{children:({cx:y})=>ee(g.type,{...g.props,className:y(h,g.props.className),style:Object.assign({},m,g.props.style)})})})})}})})},g2={display:"inline-block",whiteSpace:"pre"},y2=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:o=0,duration:l=1e3,fraction:i=0,triggerOnce:s=!1,className:a,style:f,children:h,onVisibilityChange:m}=e,{ref:v,inView:w}=f0({triggerOnce:s,threshold:i,onChange:m});return h0(()=>ee("div",{ref:v,className:a,style:Object.assign({},f,g2),children:h.split("").map((x,g)=>ee("span",{css:wr(()=>t)(w),style:{animationDelay:o+g*l*r+"ms"},children:x},g))}),()=>ee(v0,{...e,children:h}))(n)},v0=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:o,style:l,children:i,onVisibilityChange:s}=e,{ref:a,inView:f}=f0({triggerOnce:r,threshold:n,onChange:s});return ee("div",{ref:a,className:o,css:wr(()=>t)(f),style:Object.assign({},l,es(!f)),children:i})};k`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;k`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;k`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;k`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;k`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;k`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;k`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;k`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;k`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;k`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;k`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const x2=k`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,w2=k`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,S2=k`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,k2=k`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,C2=k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,E2=k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,_2=k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,j2=k`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function N2(e,t){switch(t){case"down":return e?C2:x2;case"right":return e?_2:S2;case"up":return e?j2:k2;case"left":default:return e?E2:w2}}const Sl=e=>{const{direction:t,reverse:n=!1,...r}=e,o=L.useMemo(()=>N2(n,t),[t,n]);return ee(ia,{keyframes:o,...r})},P2=k`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,z2=k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,M2=k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,T2=k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,L2=k`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,R2=k`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,O2=k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,I2=k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,$2=k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,D2=k`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function F2(e,t){switch(t){case"down":return e?O2:z2;case"left":return e?I2:M2;case"right":return e?$2:T2;case"up":return e?D2:L2;default:return e?R2:P2}}const sa=e=>{const{direction:t,reverse:n=!1,...r}=e,o=L.useMemo(()=>F2(n,t),[t,n]);return ee(ia,{keyframes:o,...r})},A2="https://TheJhonXD.github.io/Portafolio/assets/CV-BYa0jDSd.pdf";function bl(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"2 2 20 20",children:c.jsx("path",{fill:"currentColor",d:"M3 3h18v18H3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155c-.552-.259-1.165-.438-1.349-.854c-.068-.248-.078-.382-.034-.529c.113-.484.687-.629 1.137-.495c.293.09.563.315.732.676c.775-.507.775-.507 1.316-.844c-.203-.314-.304-.451-.439-.586c-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754c-.855.968-.608 2.655.427 3.354c1.023.765 2.521.933 2.712 1.653c.18.878-.652 1.159-1.475 1.058c-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832c1.305 1.316 4.568 1.249 5.153-.754c.021-.067.18-.528.056-1.237zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354c0 .924.047 1.772-.104 2.033c-.247.517-.886.451-1.175.359c-.297-.146-.448-.349-.623-.641c-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137c.641.383 1.502.507 2.404.305c.588-.17 1.095-.519 1.358-1.059c.384-.697.302-1.553.299-2.509c.008-1.541 0-3.083 0-4.635z"})})}function ei(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"2 2 20 20",children:c.jsx("path",{fill:"currentColor",d:"M4.136 3.012h15.729l-1.431 16.15l-6.451 1.826l-6.414-1.826zm5.266 7.302l-.173-2.035l7.533.002l.173-1.963l-9.87-.002l.522 5.998h6.835l-.243 2.566l-2.179.602l-2.214-.605l-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08l.558-6.111H9.402z"})})}function ti(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"2 2 20 20",children:c.jsx("path",{fill:"currentColor",d:"M4.192 3.143h15.615l-1.42 16.034l-6.404 1.812l-6.369-1.813zM16.9 6.424l-9.8-.002l.158 1.949l7.529.002l-.189 2.02H9.66l.179 1.913h4.597l-.272 2.62l-2.164.598l-2.197-.603l-.141-1.569h-1.94l.216 2.867L12 17.484l3.995-1.137z"})})}function V2(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"2 2 20 20",children:c.jsx("path",{fill:"currentColor",d:"M18.344 8.71c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 1 0 2.558 0v-4.53c0-.706-.572-1.278-1.279-1.278m-12.688 0c-.707 0-1.279.572-1.279 1.278v4.53a1.278 1.278 0 1 0 2.558 0v-4.53A1.277 1.277 0 0 0 5.656 8.71m8.889-3.809l.768-1.388a.343.343 0 0 0-.133-.47a.344.344 0 0 0-.471.135l-.789 1.42c-.588-.235-1.236-.368-1.92-.368s-1.332.132-1.92.367l-.789-1.418a.344.344 0 0 0-.471-.135a.345.345 0 0 0-.133.47l.768 1.388C8.072 5.69 7.148 7.099 7.148 8.71c0 .011 0 .021.002.034c-.002.006-.002.013-.002.019v.001h9.703V8.71c.001-1.611-.923-3.019-2.306-3.809M9.76 6.869a.346.346 0 1 1 .005-.693a.346.346 0 0 1-.005.693m4.48 0a.347.347 0 0 1 0-.692a.346.346 0 0 1 0 .692M7.148 16.12c0 .646.525 1.171 1.174 1.171h.586v2.401a1.279 1.279 0 0 0 2.558 0v-2.401h1.066v2.401c0 .707.572 1.278 1.277 1.278c.709 0 1.281-.571 1.281-1.278v-2.401h.586c.648 0 1.174-.524 1.174-1.171V9.028H7.148z"})})}function U2(){return c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"2 2 20 20",children:[c.jsx("path",{fill:"currentColor",d:"M9.37 17.51c-3.09.86 1.87 2.64 5.8 1a7.18 7.18 0 0 1-1.1-.54a11.59 11.59 0 0 1-4.16.18c-1.31-.15-.54-.64-.54-.64m5.33-1.68a16.27 16.27 0 0 1-5.36.26c-1.31-.14-.45-.77-.45-.77c-3.4 1.12 1.89 2.4 6.64 1a2.25 2.25 0 0 1-.83-.49m1.82-9.73s-6.87 1.71-3.59 5.49a1.47 1.47 0 0 1-.25 2.12s2.46-1.27 1.33-2.86s-1.86-2.22 2.51-4.75"}),c.jsx("path",{fill:"currentColor",d:"M18.13 19.14s.56.46-.63.82c-2.27.69-9.43.9-11.42 0c-.72-.31.62-.74 1-.83a2.54 2.54 0 0 1 .69-.08c-.8-.56-5.15 1.1-2.21 1.58c8.05 1.37 14.64-.56 12.57-1.49m-2.76-4.88a7 7 0 0 1 .92-.49s-1.51.27-3 .4a28.11 28.11 0 0 1-4.82.05C6.09 13.91 9.74 13 9.74 13a6.81 6.81 0 0 0-3.16.75c-2.06 1.03 5.09 1.48 8.79.51m.91 2.44a.39.39 0 0 1-.08.09c5-1.32 3.18-4.65.78-3.81a.71.71 0 0 0-.33.25s.14-.05.43-.12c1.22-.25 2.92 1.63-.8 3.59M12 13c-.74-1.67-3.26-3.14 0-5.71C16.09 4.08 14 2 14 2c.84 3.31-3 4.31-4.34 6.37c-.93 1.41.47 2.92 2.34 4.63"}),c.jsx("path",{fill:"currentColor",d:"M16.41 21.32a29.75 29.75 0 0 1-9.14.14s.46.38 2.84.53c3.61.23 9.15-.12 9.29-1.83c0 0-.26.64-2.99 1.16"})]})}function B2(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 512 512",className:"peque",children:c.jsx("path",{fill:"currentColor",d:"M256 0C114.615 0 0 114.615 0 256s114.615 256 256 256s256-114.615 256-256S397.385 0 256 0m138.2 389.825c-5.613 2.509-14.055 3.692-19.931.754l-160.49-88.942l113.761.292l-70.955-158.787l-103.73 233.99c-5.48 12.993-17.64 18.347-31.73 13.618c-18.25-6.125-19.576-21.26-13.98-33.882L222.201 97.33l.068-.153c6.166-13.66 19.84-22.359 34.817-22.13a37.586 37.586 0 0 1 34.005 22.758L406.825 356.8c5.633 12.605-.02 27.39-12.626 33.024"})})}function Nu(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"2 2 20 20",children:c.jsx("path",{fill:"currentColor",d:"M3.79 10.17a.18.18 0 0 0-.11 0l-.2.27H7a.15.15 0 0 0 .1-.06l.17-.26v-.05zm-1.47.89a.14.14 0 0 0-.11 0l-.2.26v.05h4.6a.09.09 0 0 0 .09-.06l.08-.23v-.06zM4.6 12a.13.13 0 0 0-.1.06l-.13.24v.06h2.15a.08.08 0 0 0 .07-.07v-.23s0-.07-.06-.07zm15.99-3.07a3.62 3.62 0 0 0-2.78-.5a4.09 4.09 0 0 0-2.72 1.63a4 4 0 0 0-.67 1.26h-3.14a.25.25 0 0 0-.24.16c-.14.25-.37.76-.5 1.06s0 .29.18.29h1.88a2.8 2.8 0 0 1-.26.36a1.81 1.81 0 0 1-1.65.65a1.53 1.53 0 0 1-1.32-1.53a2.07 2.07 0 0 1 1-1.85a1.71 1.71 0 0 1 1.77-.15a1.36 1.36 0 0 1 .45.37c.13.15.14.14.29.1l1.63-.43c.12 0 .16-.08.1-.16a3 3 0 0 0-1.13-1.38a3.35 3.35 0 0 0-2.58-.47A4.31 4.31 0 0 0 8.16 10a3.81 3.81 0 0 0-.82 2.85A3 3 0 0 0 8.57 15a3.46 3.46 0 0 0 2.62.65A4.06 4.06 0 0 0 14 14a4.33 4.33 0 0 0 .41-.69a3 3 0 0 0 1 1.55a3.68 3.68 0 0 0 2.38.86c.25 0 .51 0 .78-.09a4.51 4.51 0 0 0 2.33-1.25A3.72 3.72 0 0 0 22 11.1a3 3 0 0 0-1.41-2.17m-1.78 4.73a1.81 1.81 0 0 1-1.59.06a1.61 1.61 0 0 1-.9-1.84A2.12 2.12 0 0 1 18 10.19a1.59 1.59 0 0 1 2 1.29a2.91 2.91 0 0 1 0 .32a2.11 2.11 0 0 1-1.19 1.86"})})}function H2(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"2 2 20 20",children:c.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 20H4V4h16M4 20L20 4M4 12l8-8m0 8l8 8"})})}function W2({reference:e}){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",ref:e,children:c.jsxs("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:2,children:[c.jsx("path",{d:"M5 5L12 5L19 5",children:c.jsx("animate",{fill:"freeze",attributeName:"d",dur:"0.4s",values:"M5 5L12 12L19 5;M5 5L12 5L19 5",begin:"idefinite"})}),c.jsx("path",{d:"M5 12H19",children:c.jsx("animate",{fill:"freeze",attributeName:"d",dur:"0.4s",values:"M12 12H12;M5 12H19",begin:"idefinite"})}),c.jsx("path",{d:"M5 19L12 19L19 19",children:c.jsx("animate",{fill:"freeze",attributeName:"d",dur:"0.4s",values:"M5 19L12 12L19 19;M5 19L12 19L19 19",begin:"idefinite"})})]})})}function Q2(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",className:"text-zinc-900 size-6",children:c.jsx("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5l5-5m-5-7v12"})})}function Y2(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.8em",height:"1.8em",viewBox:"0 0 16 16",children:c.jsx("path",{fill:"currentColor",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"})})}function X2(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1.8em",height:"1.8em",viewBox:"0 0 16 16",children:c.jsx("path",{fill:"currentColor",d:"M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"})})}function K2(){return c.jsx("div",{className:"w-1/2 min-w-min max-md:w-full",children:c.jsxs(Sl,{cascade:!0,triggerOnce:!0,damping:.1,children:[c.jsxs("h1",{className:"text-6xl font-semibold mb-4 text-white tracking-tight max-xl:tracking-normal max-xl:text-5xl max-lg:text-4xl",children:["Hola! soy"," ",c.jsx("span",{className:"bg-gradient-to-r from-indigo-500 from-25% via-purple-500 via-50% to-pink-500 to-90% text-transparent bg-clip-text",children:"Jhonatan"})]}),c.jsxs("h3",{className:"text-3xl text-slate-100 mb-4 max-xl:text-2xl max-lg:text-xl",children:["Estudiante de"," ",c.jsx("span",{className:"font-semibold bg-gradient-to-r from-pink-500 via-violet-500 to-fuchsia-500 text-transparent bg-clip-text",children:"Ing. en Sistemas"})]}),c.jsx("p",{className:"text-base text-slate-400 max-lg:text-base",children:"Soy una persona apasionada y dedicada con un fuerte interés en aprender nuevas tecnologías, frameworks y buenas prácticas. Disfruto de la constante evolución del campo de la informática y me dedico a mantenerme actualizado con las últimas tendencias."}),c.jsx("div",{className:"mt-6 inline-block",children:c.jsxs("a",{className:"p-3 rounded-lg outline-none border-none flex items-center gap-3 bg-white hover:drop-shadow-[0_0_0.12em_#fff] select-none",href:A2,target:"_blank",children:[c.jsx("span",{className:"text-black font-semibold text-lg",children:"Descargar CV"}),c.jsx(Q2,{})]})})]})})}const G2="https://TheJhonXD.github.io/Portafolio/assets/foto-removebg-preview-DoRip9c5.png";function Z2(){return c.jsx("div",{className:"w-1/3 min-w-fit flex justify-end max-md:w-full max-md:justify-center max-sm:w-full max-md:mb-12",children:c.jsx(sa,{triggerOnce:!0,children:c.jsxs("div",{className:"w-80 h-80 rounded-full min-w-max relative max-lg:w-72 max-lg:h-72 group aspect-auto",children:[c.jsx("div",{className:`w-full h-full rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-indigo-400/40 from-30%\r
        to-backgroundColor to-90% -z-10 group-hover:blur-md transition-all duration-3000 ease-in-out`}),c.jsx("div",{className:`w-full h-full rounded-full overflow-hidden align-top bg-gradient-to-b from-indigo-500/20 from-25%\r
        to-backgroundColor to-90% z-10 p-1`,children:c.jsx("img",{src:G2,className:"w-full h-full object-cover rounded-full"})})]})})})}function g0({reference:e}){return c.jsxs("section",{className:"flex flex-1 flex-wrap items-center wrap justify-between place-content-center text-balance max-md:flex-col-reverse max-md:justify-evenly max-w",ref:e,children:[c.jsx(K2,{}),c.jsx(Z2,{})]})}g0.propTypes={reference:et.object};function J2(){return c.jsx("footer",{className:"text-center text-zinc-300 text-sm bg-indigo-950/25 p-5 mt-10",children:c.jsxs("p",{children:["Hecho por"," ",c.jsx("a",{href:"https://github.com/TheJhonXD",target:"_blank",rel:"noopener noreferrer",className:"text-indigo-500 hover:underline",children:"@TheJhonX"})]})})}const q2="https://TheJhonXD.github.io/Portafolio/assets/logorayo-blfJVl9k.svg";function b2(){const e=L.useRef(null),[t,n]=L.useState([]);return L.useEffect(()=>{e.current&&n(Array.from(e.current.querySelectorAll("animate")))},[]),{menuRef:e,animates:t}}function y0({isVisible:e,references:t}){const n=e?"bg-transparent":"sticky-scroll",{menuRef:r,animates:o}=b2();return c.jsx("header",{className:`mb-5 py-4 z-50 sticky top-0 ${n} backdrop:blur-md select-none`,children:c.jsx(Sl,{triggerOnce:!0,damping:.1,direction:"down",duration:600,children:c.jsxs("div",{className:"flex items-center justify-between w-full max-w",children:[c.jsx("div",{className:"h-12 -z-20",children:c.jsx("img",{className:"w-full h-full",src:q2})}),c.jsxs("menu",{className:"relative max-md:flex max-md:justify-end",children:[c.jsx("div",{className:"md:hidden cursor-pointer",onClick:()=>{var l,i,s,a,f;o.forEach(h=>{h.beginElement()}),((i=(l=r.current)==null?void 0:l.parentElement)==null?void 0:i.nextSibling)instanceof HTMLElement&&((f=(a=(s=r.current)==null?void 0:s.parentElement)==null?void 0:a.nextSibling)==null||f.classList.toggle("max-md:hidden"))},children:c.jsx(W2,{reference:r})}),c.jsxs("ul",{className:"flex md:gap-7 justify-end items-center -z-10 -top-4 -right-6 min-w-52 rounded-md max-md:flex-col max-md:bg-black max-md:backdrop-blur-lg max-md:w-screen max-md:p-10 max-md:hidden max-md:absolute ",children:[c.jsx("li",{className:"max-md:border-b-[1px] max-md:border-slate-400/5 max-md:py-4",children:c.jsx("a",{href:"#",className:"hover:underline-offset-8 md:hover:underline md:hover:text-white",onClick:l=>{var i;l.preventDefault(),(i=t.aboutRef.current)==null||i.scrollIntoView({behavior:"smooth"})},children:"Sobre mí"})}),c.jsx("li",{className:"max-md:border-b-[1px] max-md:border-slate-400/5 max-md:py-4",children:c.jsx("a",{href:"#",className:"hover:underline-offset-8 md:hover:underline md:hover:text-white",onClick:l=>{var i;l.preventDefault(),(i=t.skillsRef.current)==null||i.scrollIntoView({behavior:"smooth"})},children:"Habilidades"})}),c.jsx("li",{className:"max-md:border-b-[1px] max-md:border-slate-400/5 max-md:py-4",children:c.jsx("a",{href:"#",className:"hover:underline-offset-8 md:hover:underline md:hover:text-white",onClick:l=>{var i;l.preventDefault(),(i=t.projectsRef.current)==null||i.scrollIntoView({behavior:"smooth"})},children:"Proyectos"})}),c.jsxs("div",{className:"flex items-center gap-5 ml-6",children:[c.jsx("li",{className:"max-md:border-b-[1px] max-md:border-slate-400/5 max-md:py-4",children:c.jsx("a",{href:"https://github.com/TheJhonXD",target:"_blank",className:"hover:underline-offset-8 md:hover:text-white",children:c.jsx(Y2,{})})}),c.jsx("li",{className:"max-md:border-b-[1px] max-md:border-slate-400/5 max-md:py-4",children:c.jsx("a",{href:"https://www.linkedin.com/in/jhonatan-tzunún-6736742a8",target:"_blank",className:"hover:underline-offset-8 md:hover:text-white",children:c.jsx(X2,{})})})]})]})]})]})})})}y0.propTypes={isVisible:et.bool,references:et.object};const e3="https://TheJhonXD.github.io/Portafolio/assets/estacion_meteorologica-CKG47VYo.png",t3="https://TheJhonXD.github.io/Portafolio/assets/greenhouse-BiJHctgb.jpeg",n3="https://TheJhonXD.github.io/Portafolio/assets/ide-Az1rrM8p.png",r3="https://TheJhonXD.github.io/Portafolio/assets/login-Doff6Mq3.png",o3="https://TheJhonXD.github.io/Portafolio/assets/pomodoro-BB0wlhuP.png",l3="https://TheJhonXD.github.io/Portafolio/assets/pseudocodigo-DvD4147I.png";function Ft({children:e,name:t,description:n,imageUrl:r,repo:o}){return c.jsx("li",{className:"w-full min-h-80 max-w-sm max-md:max-w-lg bg-[#18181b]/30 border-[1px] border-white/10 rounded-lg p-4 flex flex-col backdrop-blur cursor-pointer shadow-card hover:bg-[#18181b]/60 hover:border-white/30",children:c.jsxs("a",{href:o,target:"_blank",rel:"noopener noreferrer",className:"h-full flex flex-col outline-none",children:[c.jsx("div",{className:"mb-3 w-full h-full max-h-32 bg-black/40",children:c.jsx("img",{className:"w-full h-full rounded-md object-cover hover:scale-110 transition ease-in-out delay-100",src:r,alt:""})}),c.jsxs("div",{className:"flex flex-col justify-between flex-grow",children:[c.jsxs("div",{children:[c.jsx("h3",{className:"text-lg tracking-tighter mb-1",children:t}),c.jsx("p",{className:"text-sm text-gray-400 tracking-tighter",children:n})]}),e&&c.jsx("div",{className:"mt-4 flex flex-row items-center [&>svg]:w-7 [&>svg]:h-7 gap-2",children:e})]})]})})}Ft.propTypes={children:et.node,name:et.string.isRequired,description:et.string.isRequired,imageUrl:et.string.isRequired,repo:et.string.isRequired};function x0({reference:e}){return c.jsx("section",{className:"flex flex-col place-content-center py-28 max-md:mt-6 max-md:mb-20 violet-gradient-background",ref:e,children:c.jsxs("div",{className:" w-full max-w",children:[c.jsx(Sl,{triggerOnce:!0,damping:.1,duration:800,fraction:.4,children:c.jsxs("h2",{className:"text-5xl text-left font-semibold mb-12 max-xl:text-4xl max-lg:text-3xl",children:[c.jsxs("span",{className:"bg-gradient-to-t from-slate-400 to-white text-transparent bg-clip-text",children:["Mis"," "]}),c.jsx("span",{className:"bg-gradient-to-r from-indigo-500 from-25% via-purple-500 via-50% to-pink-500 to-90% text-transparent bg-clip-text",children:"Proyectos"})]})}),c.jsx(sa,{triggerOnce:!0,damping:.1,duration:800,fraction:.3,children:c.jsxs("ul",{className:"grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 mt-5",children:[c.jsxs(Ft,{name:"Estación metereológica",description:"Dashboard en tiempo real de una estación meteorológica",imageUrl:e3,repo:"https://github.com/MoralesTomas/ACE2_1S23_G0/tree/master/Practica_1",children:[c.jsx(ei,{}),c.jsx(ti,{}),c.jsx(bl,{})]}),c.jsxs(Ft,{name:"Pomodoro",description:"Aplicación web progresiva de un pomodoro físico",imageUrl:o3,repo:"https://github.com/MoralesTomas/ACE2_1S23_G0/tree/master/Proyecto_1/PWA",children:[c.jsx(ei,{}),c.jsx(ti,{}),c.jsx(bl,{})]}),c.jsxs(Ft,{name:"Invernadero",description:"App que controla el sistema de riego de un invernadero",imageUrl:t3,repo:"https://github.com/MoralesTomas/ACE2_1S23_G0/tree/appAndroid/Proyecto_2",children:[c.jsx(V2,{}),c.jsx(H2,{})]}),c.jsx(Ft,{name:"Traductor de pseudocódigo",description:"Permite traducir código escrito en pseudocódigo a código ejecutable en Python o Golang",imageUrl:l3,repo:"https://github.com/TheJhonXD/OLC1-201900831/tree/main/Proyecto%201",children:c.jsx(U2,{})}),c.jsxs(Ft,{name:'IDE "T-SWIFT"',description:'Desarrollo de lenguaje y entorno de desarrollo para el lenguage ficticio "T-Swift"',imageUrl:n3,repo:"https://github.com/TheJhonXD/OLC2_201900831/tree/main/Proyecto_1",children:[c.jsx(Nu,{}),c.jsx(B2,{})]}),c.jsxs(Ft,{name:"Sistema de archivos",description:"Administrador de archivos y particiones en binarios que simulan un disco duro",imageUrl:r3,repo:"https://github.com/TheJhonXD/-MIA-Proyecto2_201900831",children:[c.jsx(Nu,{}),c.jsx(ei,{}),c.jsx(ti,{}),c.jsx(bl,{})]})]})})]})})}x0.propTypes={reference:et.object};function i3(){return c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128",className:"logo",children:[c.jsx("path",{fill:"#f0db4f",d:"M1.408 1.408h125.184v125.185H1.408z"}),c.jsx("path",{fill:"#323330",d:"M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981c-3.832-1.761-8.104-3.022-9.377-5.926c-.452-1.69-.512-2.642-.226-3.665c.821-3.32 4.784-4.355 7.925-3.403c2.023.678 3.938 2.237 5.093 4.724c5.402-3.498 5.391-3.475 9.163-5.879c-1.381-2.141-2.118-3.129-3.022-4.045c-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235c-5.926 6.724-4.236 18.492 2.975 23.335c7.104 5.332 17.54 6.545 18.873 11.531c1.297 6.104-4.486 8.08-10.234 7.378c-4.236-.881-6.592-3.034-9.139-6.949c-4.688 2.713-4.688 2.713-9.508 5.485c1.143 2.499 2.344 3.63 4.26 5.795c9.068 9.198 31.76 8.746 35.83-5.176c.165-.478 1.261-3.666.38-8.581M69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149c-1.713 3.558-6.152 3.117-8.175 2.427c-2.059-1.012-3.106-2.451-4.319-4.485c-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901c4.462 2.678 10.459 3.499 16.731 2.059c4.082-1.189 7.604-3.652 9.448-7.401c2.666-4.915 2.094-10.864 2.07-17.444c.06-10.735.001-21.468.001-32.237"})]})}function s3(){return c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128",className:"logo",children:[c.jsx("path",{fill:"#e44d26",d:"M19.037 113.876L9.032 1.661h109.936l-10.016 112.198l-45.019 12.48z"}),c.jsx("path",{fill:"#f16529",d:"m64 116.8l36.378-10.086l8.559-95.878H64z"}),c.jsx("path",{fill:"#ebebeb",d:"M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692l3.382 37.927H64zm0 35.743l-.061.017l-15.327-4.14l-.979-10.975H33.816l1.928 21.609l28.193 7.826l.063-.017z"}),c.jsx("path",{fill:"#fff",d:"M63.952 52.455v13.763h16.947l-1.597 17.849l-15.35 4.143v14.319l28.215-7.82l.207-2.325l3.234-36.233l.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092l.628-6.978l.329-3.692z"})]})}function a3(){return c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128",className:"logo",children:[c.jsx("path",{fill:"#1572b6",d:"M18.814 114.123L8.76 1.352h110.48l-10.064 112.754l-45.243 12.543z"}),c.jsx("path",{fill:"#33a9dc",d:"m64.001 117.062l36.559-10.136l8.601-96.354h-45.16z"}),c.jsx("path",{fill:"#fff",d:"M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711l-3.4 38.114h-30.95z"}),c.jsx("path",{fill:"#ebebeb",d:"m64.083 87.349l-.061.018l-15.403-4.159l-.985-11.031H33.752l1.937 21.717l28.331 7.863l.063-.018z"}),c.jsx("path",{fill:"#fff",d:"m81.127 64.675l-1.666 18.522l-15.426 4.164v14.39l28.354-7.858l.208-2.337l2.406-26.881z"}),c.jsx("path",{fill:"#ebebeb",d:"M64.048 23.435v13.831H30.64l-.277-3.108l-.63-7.012l-.331-3.711zm-.047 27.996v13.831H48.792l-.277-3.108l-.631-7.012l-.33-3.711z"})]})}function u3(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",className:"iconify iconify--logos logo react",width:"35.93",height:"32",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 228",children:c.jsx("path",{fill:"#00D8FF",d:"M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"})})}function c3(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 128 128",className:"logo",children:c.jsx("path",{fill:"#38bdf8",d:"M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"})})}function f3(){return c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 256 255",className:"logo python",children:[c.jsxs("defs",{children:[c.jsxs("linearGradient",{id:"logosPython0",x1:"12.959%",x2:"79.639%",y1:"12.039%",y2:"78.201%",children:[c.jsx("stop",{offset:"0%",stopColor:"#387eb8"}),c.jsx("stop",{offset:"100%",stopColor:"#366994"})]}),c.jsxs("linearGradient",{id:"logosPython1",x1:"19.128%",x2:"90.742%",y1:"20.579%",y2:"88.429%",children:[c.jsx("stop",{offset:"0%",stopColor:"#ffe052"}),c.jsx("stop",{offset:"100%",stopColor:"#ffc331"})]})]}),c.jsx("path",{fill:"url(#logosPython0)",d:"M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072M92.802 19.66a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.13"}),c.jsx("path",{fill:"url(#logosPython1)",d:"M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897m34.114-19.586a11.12 11.12 0 0 1-11.13-11.13a11.12 11.12 0 0 1 11.13-11.131a11.12 11.12 0 0 1 11.13 11.13a11.12 11.12 0 0 1-11.13 11.13"})]})}function d3(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 128 128",className:"logo",children:c.jsx("path",{fill:"#00618a",d:"M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379c-1.293.547-3.355.559-3.566 2.18c.711.746.82 1.859 1.387 2.777c1.086 1.754 2.922 4.113 4.559 5.352c1.789 1.348 3.633 2.793 5.551 3.961c3.414 2.082 7.223 3.27 10.504 5.352c1.938 1.23 3.859 2.777 5.75 4.164c.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719c-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391c2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152c-4.441-3.781-9.285-7.555-14.273-10.703c-2.766-1.746-6.184-2.883-9.117-4.363c-.988-.496-2.719-.758-3.371-1.586c-1.539-1.961-2.379-4.449-3.566-6.738c-2.488-4.793-4.93-10.023-7.137-15.066c-1.504-3.437-2.484-6.828-4.359-9.91c-9-14.797-18.687-23.73-33.695-32.508c-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672C-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539c.688 1.492.805 2.984 1.391 4.559c1.438 3.883 2.695 8.109 4.559 11.695c.941 1.816 1.98 3.727 3.172 5.352c.727.996 1.98 1.438 2.18 2.973c-1.227 1.715-1.297 4.375-1.984 6.543c-3.098 9.77-1.926 21.91 2.578 29.137c1.383 2.223 4.641 6.98 9.117 5.156c3.918-1.598 3.043-6.539 4.164-10.902c.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699c2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781c-1.551-1.523-3.277-3.414-4.559-5.156c-3.613-4.902-6.805-10.27-9.711-15.855c-1.391-2.668-2.598-5.609-3.77-8.324c-.453-1.047-.445-2.633-1.387-3.172c-1.281 1.988-3.172 3.598-4.164 5.945c-1.582 3.754-1.789 8.336-2.375 13.082c-.348.125-.195.039-.398.199c-2.762-.668-3.73-3.508-4.758-5.949c-2.594-6.164-3.078-16.09-.793-23.191c.59-1.836 3.262-7.617 2.18-9.316c-.516-1.691-2.219-2.672-3.172-3.965c-1.18-1.598-2.355-3.703-3.172-5.551c-2.125-4.805-3.113-10.203-5.352-15.062c-1.07-2.324-2.875-4.676-4.359-6.738c-1.645-2.289-3.484-3.977-4.758-6.742c-.453-.984-1.066-2.559-.398-3.566c.215-.684.516-.969 1.191-1.191c1.148-.887 4.352.297 5.547.793c3.18 1.32 5.832 2.578 8.527 4.363c1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988c4.609 1.402 8.738 3.582 12.488 5.949c11.422 7.215 20.766 17.48 27.156 29.734c1.027 1.973 1.473 3.852 2.379 5.945c1.824 4.219 4.125 8.559 5.941 12.688c1.816 4.113 3.582 8.27 6.148 11.695c1.348 1.801 6.551 2.766 8.918 3.766c1.66.699 4.379 1.43 5.949 2.379c3 1.809 5.906 3.965 8.723 5.945c1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164l.199-.195c1.227-.867 1.789-2.25 1.781-4.363c-.492-.52-.562-1.164-.992-1.785c-.562-.824-1.66-1.289-2.375-1.98zm0 0"})})}function p3(){return c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 128 128",className:"logo",children:[c.jsx("path",{fill:"#00599c",d:"M118.766 95.82c.89-1.543 1.441-3.28 1.441-4.843V36.78c0-1.558-.55-3.297-1.441-4.84l-55.32 31.94Zm0 0"}),c.jsx("path",{fill:"#004482",d:"m68.36 126.586l46.933-27.094c1.352-.781 2.582-2.129 3.473-3.672l-55.32-31.94L8.12 95.82c.89 1.543 2.121 2.89 3.473 3.672l46.933 27.094c2.703 1.562 7.13 1.562 9.832 0Zm0 0"}),c.jsx("path",{fill:"#659ad2",d:"M118.766 31.941c-.891-1.546-2.121-2.894-3.473-3.671L68.359 1.172c-2.703-1.563-7.129-1.563-9.832 0L11.594 28.27C8.89 29.828 6.68 33.66 6.68 36.78v54.196c0 1.562.55 3.3 1.441 4.843L63.445 63.88Zm0 0"}),c.jsx("path",{fill:"#fff",d:"M63.445 26.035c-20.867 0-37.843 16.977-37.843 37.844s16.976 37.844 37.843 37.844c13.465 0 26.024-7.247 32.77-18.91L79.84 73.335c-3.38 5.84-9.66 9.465-16.395 9.465c-10.433 0-18.922-8.488-18.922-18.922s8.49-18.922 18.922-18.922c6.73 0 13.017 3.629 16.39 9.465l16.38-9.477c-6.75-11.664-19.305-18.91-32.77-18.91zM92.88 57.57v4.207h-4.207v4.203h4.207v4.207h4.203V65.98h4.203v-4.203h-4.203V57.57zm15.766 0v4.207h-4.204v4.203h4.204v4.207h4.207V65.98h4.203v-4.203h-4.203V57.57z"})]})}function m3(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 256 256",className:"logo",children:c.jsxs("g",{fill:"none",children:[c.jsx("rect",{width:256,height:256,fill:"#00b4e0",rx:60}),c.jsx("path",{fill:"#fff",d:"M40.5 113.234c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h35.7c.4 0 .5.3.3.6l-1.7 2.6c-.2.3-.7.6-1 .6zm-15.1 9.2c-.4 0-.5-.2-.3-.5l2.1-2.7c.2-.3.7-.5 1.1-.5h45.6c.4 0 .6.3.5.6l-.8 2.4c-.1.4-.5.6-.9.6zm24.2 9.2c-.4 0-.5-.3-.3-.6l1.4-2.5c.2-.3.6-.6 1-.6h20c.4 0 .6.3.6.7l-.2 2.4c0 .4-.4.7-.7.7zm103.8-20.2c-6.3 1.6-10.6 2.8-16.8 4.4c-1.5.4-1.6.5-2.9-1c-1.5-1.7-2.6-2.8-4.7-3.8c-6.3-3.1-12.4-2.2-18.1 1.5c-6.8 4.4-10.3 10.9-10.2 19c.1 8 5.6 14.6 13.5 15.7c6.8.9 12.5-1.5 17-6.6c.9-1.1 1.7-2.3 2.7-3.7h-19.3c-2.1 0-2.6-1.3-1.9-3c1.3-3.1 3.7-8.3 5.1-10.9c.3-.6 1-1.6 2.5-1.6h36.4c-.2 2.7-.2 5.4-.6 8.1c-1.1 7.2-3.8 13.8-8.2 19.6c-7.2 9.5-16.6 15.4-28.5 17c-9.8 1.3-18.9-.6-26.9-6.6c-7.4-5.6-11.6-13-12.7-22.2c-1.3-10.9 1.9-20.7 8.5-29.3c7.1-9.3 16.5-15.2 28-17.3c9.4-1.7 18.4-.6 26.5 4.9c5.3 3.5 9.1 8.3 11.6 14.1c.6.9.2 1.4-1 1.7"}),c.jsx("path",{fill:"#fff",d:"M186.5 166.734c-9.1-.2-17.4-2.8-24.4-8.8c-5.9-5.1-9.6-11.6-10.8-19.3c-1.8-11.3 1.3-21.3 8.1-30.2c7.3-9.6 16.1-14.6 28-16.7c10.2-1.8 19.8-.8 28.5 5.1c7.9 5.4 12.8 12.7 14.1 22.3c1.7 13.5-2.2 24.5-11.5 33.9c-6.6 6.7-14.7 10.9-24 12.8c-2.7.5-5.4.6-8 .9m23.8-40.4c-.1-1.3-.1-2.3-.3-3.3c-1.8-9.9-10.9-15.5-20.4-13.3c-9.3 2.1-15.3 8-17.5 17.4c-1.8 7.8 2 15.7 9.2 18.9c5.5 2.4 11 2.1 16.3-.6c7.9-4.1 12.2-10.5 12.7-19.1"})]})})}function h3(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 128 128",className:"logo",children:c.jsx("path",{fill:"#f34f29",d:"M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314c2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295c3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 0 1-13.683 0a9.68 9.68 0 0 1-2.105-10.521L68.574 47.933l-.002 34.341a9.7 9.7 0 0 1 2.559 1.828c3.778 3.777 3.778 9.898 0 13.683c-3.779 3.777-9.904 3.777-13.679 0c-3.778-3.784-3.778-9.905 0-13.683a9.7 9.7 0 0 1 3.167-2.11V47.333a9.6 9.6 0 0 1-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333L3.264 58.123a8.133 8.133 0 0 0 0 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 0 0-.001-11.501"})})}function v3(){return c.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 128 128",className:"logo",children:[c.jsx("path",{fill:"#0074bd",d:"M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092c0 0 2.871 1.795 6.873 3.351c-24.439 10.47-55.308-.607-36.115-5.969m-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6c0 0 1.993 2.025 5.132 3.131c-29.542 8.64-62.446.68-41.309-6.336"}),c.jsx("path",{fill:"#ea2d2e",d:"M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58c0 .001-42.731 10.67-22.324 34.187"}),c.jsx("path",{fill:"#0074bd",d:"M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171c-4.451-1.938 3.899-4.625 6.526-5.192c2.739-.593 4.303-.485 4.303-.485c-4.953-3.487-32.013 6.85-13.743 9.815c49.821 8.076 90.817-3.637 77.896-9.468M49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326c9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958c10.832-5.239 19.644-4.643 19.644-4.643m40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285c-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725c0-.002.359-.327.468-.617"}),c.jsx("path",{fill:"#ea2d2e",d:"M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559c-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587"}),c.jsx("path",{fill:"#0074bd",d:"M52.214 126.021c22.476 1.437 57-.8 57.817-11.436c0 0-1.571 4.032-18.577 7.231c-19.186 3.612-42.854 3.191-56.887.874c0 .001 2.875 2.381 17.647 3.331"})]})}function g3(){return c.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 256 289",className:"logo",children:c.jsx("path",{fill:"#539e43",d:"M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385m32.596-84.009c-46.377 0-55.917-21.2-55.917-39.221c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 2.916 1.06 2.916 2.65c2.12 14.045 8.215 20.936 36.306 20.936c22.261 0 31.802-5.035 31.802-16.96c0-6.891-2.65-11.926-37.367-15.372c-28.886-2.915-46.907-9.275-46.907-32.33c0-21.467 18.02-34.187 48.232-34.187c33.921 0 50.617 11.66 52.737 37.101q0 1.193-.795 2.385c-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.326 0-2.65-1.06-2.916-2.385c-3.18-14.575-11.395-19.345-33.126-19.345c-24.38 0-27.296 8.48-27.296 14.84c0 7.686 3.445 10.07 36.306 14.31c32.597 4.24 47.967 10.336 47.967 33.127c-.265 23.321-19.345 36.571-53.002 36.571"})})}function w0({reference:e}){return c.jsx("section",{className:"mx-auto xl:mb-14 -mt-20 py-28 rounded-lg gradient-background w-full",ref:e,children:c.jsxs("div",{className:"max-w",children:[c.jsx(Sl,{triggerOnce:!0,damping:.1,duration:800,fraction:.4,children:c.jsxs("h2",{className:"text-5xl text-left font-semibold mb-12 max-xl:text-4xl max-lg:text-3xl",children:[c.jsxs("span",{className:"bg-gradient-to-t from-slate-400 to-white text-transparent bg-clip-text",children:["Mis"," "]}),c.jsx("span",{className:"bg-gradient-to-r from-indigo-500 from-25% via-purple-500 via-50% to-pink-500 to-90% text-transparent bg-clip-text",children:"Habilidades"})]})}),c.jsx("div",{className:"relative",children:c.jsx(sa,{triggerOnce:!0,damping:.1,duration:800,fraction:.4,children:c.jsxs("ul",{className:"grid gap-8 grid-cols-[repeat(auto-fit,minmax(100px,1fr))] max-md:grid-cols-[repeat(auto-fit,minmax(70px,1fr))] max-lg:select-none",children:[c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#E44D26aa] flex flex-col items-center gap-2",children:[c.jsx(s3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"HTML"})]}),c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#1572B6aa] flex flex-col gap-2 items-center",children:[c.jsx(a3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"CSS"})]}),c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#F0DB4Faa] flex flex-col gap-2 items-center",children:[c.jsx(i3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"Javascript"})]}),c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#3C873Aaa] flex flex-col gap-2 items-center",children:[c.jsx(g3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"Node.js"})]}),c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#61dafbaa] flex flex-col gap-2 items-center",children:[c.jsx(u3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"React"})]}),c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#38BDF8aa] flex flex-col gap-2 items-center",children:[c.jsx(c3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"Tailwind"})]}),c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#3772A3aa] flex flex-col gap-2 items-center",children:[c.jsx(f3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"Python"})]}),c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#00618Aaa] flex flex-col gap-2 items-center",children:[c.jsx(d3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"MySQL"})]}),c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#00599Caa] flex flex-col gap-2 items-center",children:[c.jsx(p3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"C++"})]}),c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#00B4E0aa] flex flex-col gap-2 items-center",children:[c.jsx(m3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"Golang"})]}),c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#007396aa] flex flex-col gap-2 items-center",children:[c.jsx(v3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"Java"})]}),c.jsxs("li",{className:"hover:drop-shadow-[0_0_0.8em_#F34F29aa] flex flex-col gap-2 items-center",children:[c.jsx(h3,{}),c.jsx("span",{className:"font-semibold text-gray-300",children:"Git"})]})]})})})]})})}w0.propTypes={reference:et.object};function y3(){const e=L.useRef(null),[t,n]=L.useState(!1);return L.useEffect(()=>{const r=new IntersectionObserver(o=>{const l=o[0];n(l.isIntersecting)});return e.current&&r.observe(e.current),()=>r.disconnect()},[]),{divTopRef:e,isVisible:t}}function x3(){const e=L.useRef(null),t=L.useRef(null),n=L.useRef(null),{divTopRef:r,isVisible:o}=y3();return c.jsxs(c.Fragment,{children:[c.jsx("div",{ref:r}),c.jsx(y0,{isVisible:o,references:{aboutRef:e,skillsRef:t,projectsRef:n}}),c.jsxs("main",{className:"w-full",children:[c.jsx("section",{className:"flex flex-col place-content-center md:h-screen h-full relative -mt-14 max-md:mt-6 max-md:mb-20 prueba",children:c.jsx(g0,{reference:e})}),c.jsx(w0,{reference:t}),c.jsx(x0,{reference:n})]}),c.jsx(J2,{})]})}ni.createRoot(document.getElementById("root")).render(c.jsx(Au.StrictMode,{children:c.jsx(x3,{})}));
