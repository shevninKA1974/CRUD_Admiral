var Uh=Object.defineProperty;var Vh=(e,t,n)=>t in e?Uh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ml=(e,t,n)=>(Vh(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Gh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pd={exports:{}},Ui={},Cd={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Symbol.for("react.element"),Qh=Symbol.for("react.portal"),Yh=Symbol.for("react.fragment"),Kh=Symbol.for("react.strict_mode"),Xh=Symbol.for("react.profiler"),Zh=Symbol.for("react.provider"),qh=Symbol.for("react.context"),Jh=Symbol.for("react.forward_ref"),e0=Symbol.for("react.suspense"),t0=Symbol.for("react.memo"),n0=Symbol.for("react.lazy"),_u=Symbol.iterator;function r0(e){return e===null||typeof e!="object"?null:(e=_u&&e[_u]||e["@@iterator"],typeof e=="function"?e:null)}var Nd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Td=Object.assign,_d={};function gr(e,t,n){this.props=e,this.context=t,this.refs=_d,this.updater=n||Nd}gr.prototype.isReactComponent={};gr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};gr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Md(){}Md.prototype=gr.prototype;function gs(e,t,n){this.props=e,this.context=t,this.refs=_d,this.updater=n||Nd}var vs=gs.prototype=new Md;vs.constructor=gs;Td(vs,gr.prototype);vs.isPureReactComponent=!0;var Mu=Array.isArray,jd=Object.prototype.hasOwnProperty,ys={current:null},Od={key:!0,ref:!0,__self:!0,__source:!0};function Fd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)jd.call(t,r)&&!Od.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:$o,type:e,key:i,ref:l,props:o,_owner:ys.current}}function o0(e,t){return{$$typeof:$o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function xs(e){return typeof e=="object"&&e!==null&&e.$$typeof===$o}function i0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ju=/\/+/g;function gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?i0(""+e.key):t.toString(36)}function Ko(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case $o:case Qh:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+gl(l,0):r,Mu(o)?(n="",e!=null&&(n=e.replace(ju,"$&/")+"/"),Ko(o,t,n,"",function(u){return u})):o!=null&&(xs(o)&&(o=o0(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ju,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Mu(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+gl(i,a);l+=Ko(i,t,n,s,o)}else if(s=r0(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+gl(i,a++),l+=Ko(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function jo(e,t,n){if(e==null)return e;var r=[],o=0;return Ko(e,r,"","",function(i){return t.call(n,i,o++)}),r}function l0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},Xo={transition:null},a0={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:ys};Y.Children={map:jo,forEach:function(e,t,n){jo(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jo(e,function(){t++}),t},toArray:function(e){return jo(e,function(t){return t})||[]},only:function(e){if(!xs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=gr;Y.Fragment=Yh;Y.Profiler=Xh;Y.PureComponent=gs;Y.StrictMode=Kh;Y.Suspense=e0;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a0;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Td({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ys.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)jd.call(t,s)&&!Od.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:$o,type:e.type,key:o,ref:i,props:r,_owner:l}};Y.createContext=function(e){return e={$$typeof:qh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zh,_context:e},e.Consumer=e};Y.createElement=Fd;Y.createFactory=function(e){var t=Fd.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Jh,render:e}};Y.isValidElement=xs;Y.lazy=function(e){return{$$typeof:n0,_payload:{_status:-1,_result:e},_init:l0}};Y.memo=function(e,t){return{$$typeof:t0,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=Xo.transition;Xo.transition={};try{e()}finally{Xo.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return We.current.useCallback(e,t)};Y.useContext=function(e){return We.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return We.current.useDeferredValue(e)};Y.useEffect=function(e,t){return We.current.useEffect(e,t)};Y.useId=function(){return We.current.useId()};Y.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return We.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};Y.useRef=function(e){return We.current.useRef(e)};Y.useState=function(e){return We.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return We.current.useTransition()};Y.version="18.2.0";Cd.exports=Y;var x=Cd.exports;const ln=Gh(x);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0=x,u0=Symbol.for("react.element"),c0=Symbol.for("react.fragment"),d0=Object.prototype.hasOwnProperty,f0=s0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p0={key:!0,ref:!0,__self:!0,__source:!0};function Ld(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)d0.call(t,r)&&!p0.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:u0,type:e,key:i,ref:l,props:o,_owner:f0.current}}Ui.Fragment=c0;Ui.jsx=Ld;Ui.jsxs=Ld;Pd.exports=Ui;var y=Pd.exports,Yl={},zd={exports:{}},et={},Rd={exports:{}},Ad={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,F){var L=C.length;C.push(F);e:for(;0<L;){var I=L-1>>>1,U=C[I];if(0<o(U,F))C[I]=F,C[L]=U,L=I;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var F=C[0],L=C.pop();if(L!==F){C[0]=L;e:for(var I=0,U=C.length,me=U>>>1;I<me;){var te=2*(I+1)-1,re=C[te],ge=te+1,Ee=C[ge];if(0>o(re,L))ge<U&&0>o(Ee,re)?(C[I]=Ee,C[ge]=L,I=ge):(C[I]=re,C[te]=L,I=te);else if(ge<U&&0>o(Ee,L))C[I]=Ee,C[ge]=L,I=ge;else break e}}return F}function o(C,F){var L=C.sortIndex-F.sortIndex;return L!==0?L:C.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,p=null,h=3,v=!1,g=!1,$=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=C)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function w(C){if($=!1,m(C),!g)if(n(s)!==null)g=!0,D(S);else{var F=n(u);F!==null&&b(w,F.startTime-C)}}function S(C,F){g=!1,$&&($=!1,f(T),T=-1),v=!0;var L=h;try{for(m(F),p=n(s);p!==null&&(!(p.expirationTime>F)||C&&!K());){var I=p.callback;if(typeof I=="function"){p.callback=null,h=p.priorityLevel;var U=I(p.expirationTime<=F);F=e.unstable_now(),typeof U=="function"?p.callback=U:p===n(s)&&r(s),m(F)}else r(s);p=n(s)}if(p!==null)var me=!0;else{var te=n(u);te!==null&&b(w,te.startTime-F),me=!1}return me}finally{p=null,h=L,v=!1}}var E=!1,P=null,T=-1,W=5,A=-1;function K(){return!(e.unstable_now()-A<W)}function le(){if(P!==null){var C=e.unstable_now();A=C;var F=!0;try{F=P(!0,C)}finally{F?X():(E=!1,P=null)}}else E=!1}var X;if(typeof c=="function")X=function(){c(le)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Z=pe.port2;pe.port1.onmessage=le,X=function(){Z.postMessage(null)}}else X=function(){k(le,0)};function D(C){P=C,E||(E=!0,X())}function b(C,F){T=k(function(){C(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,D(S))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(C){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var L=h;h=F;try{return C()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,F){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var L=h;h=C;try{return F()}finally{h=L}},e.unstable_scheduleCallback=function(C,F,L){var I=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?I+L:I):L=I,C){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=L+U,C={id:d++,callback:F,priorityLevel:C,startTime:L,expirationTime:U,sortIndex:-1},L>I?(C.sortIndex=L,t(u,C),n(s)===null&&C===n(u)&&($?(f(T),T=-1):$=!0,b(w,L-I))):(C.sortIndex=U,t(s,C),g||v||(g=!0,D(S))),C},e.unstable_shouldYield=K,e.unstable_wrapCallback=function(C){var F=h;return function(){var L=h;h=F;try{return C.apply(this,arguments)}finally{h=L}}}})(Ad);Rd.exports=Ad;var h0=Rd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd=x,Je=h0;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Id=new Set,Zr={};function Fn(e,t){ir(e,t),ir(e+"Capture",t)}function ir(e,t){for(Zr[e]=t,e=0;e<t.length;e++)Id.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kl=Object.prototype.hasOwnProperty,m0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ou={},Fu={};function g0(e){return Kl.call(Fu,e)?!0:Kl.call(Ou,e)?!1:m0.test(e)?Fu[e]=!0:(Ou[e]=!0,!1)}function v0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function y0(e,t,n,r){if(t===null||typeof t>"u"||v0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function He(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new He(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new He(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new He(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new He(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new He(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new He(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new He(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new He(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new He(e,5,!1,e.toLowerCase(),null,!1,!1)});var ws=/[\-:]([a-z])/g;function Ss(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ws,Ss);Fe[t]=new He(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ws,Ss);Fe[t]=new He(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ws,Ss);Fe[t]=new He(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new He(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new He(e,1,!1,e.toLowerCase(),null,!0,!0)});function $s(e,t,n,r){var o=Fe.hasOwnProperty(t)?Fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(y0(t,n,o,r)&&(n=null),r||o===null?g0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var It=Dd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),In=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),ks=Symbol.for("react.strict_mode"),Xl=Symbol.for("react.profiler"),bd=Symbol.for("react.provider"),Bd=Symbol.for("react.context"),Es=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),Ps=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),Wd=Symbol.for("react.offscreen"),Lu=Symbol.iterator;function kr(e){return e===null||typeof e!="object"?null:(e=Lu&&e[Lu]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,vl;function Fr(e){if(vl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);vl=t&&t[1]||""}return`
`+vl+e}var yl=!1;function xl(e,t){if(!e||yl)return"";yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{yl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fr(e):""}function x0(e){switch(e.tag){case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return e=xl(e.type,!1),e;case 11:return e=xl(e.type.render,!1),e;case 1:return e=xl(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case In:return"Portal";case Xl:return"Profiler";case ks:return"StrictMode";case Zl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bd:return(e.displayName||"Context")+".Consumer";case bd:return(e._context.displayName||"Context")+".Provider";case Es:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ps:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function w0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===ks?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function S0(e){var t=Hd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fo(e){e._valueTracker||(e._valueTracker=S0(e))}function Ud(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Hd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function fi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,t){var n=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function zu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vd(e,t){t=t.checked,t!=null&&$s(e,"checked",t,!1)}function ta(e,t){Vd(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?na(e,t.type,n):t.hasOwnProperty("defaultValue")&&na(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ru(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function na(e,t,n){(t!=="number"||fi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function qn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Au(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(Lr(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function Gd(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Du(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lo,Yd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Br={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$0=["Webkit","ms","Moz","O"];Object.keys(Br).forEach(function(e){$0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Br[t]=Br[e]})});function Kd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Br.hasOwnProperty(e)&&Br[e]?(""+t).trim():t+"px"}function Xd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Kd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var k0=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(e,t){if(t){if(k0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function la(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var aa=null;function Cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,Jn=null,er=null;function Iu(e){if(e=Po(e)){if(typeof sa!="function")throw Error(M(280));var t=e.stateNode;t&&(t=Ki(t),sa(e.stateNode,e.type,t))}}function Zd(e){Jn?er?er.push(e):er=[e]:Jn=e}function qd(){if(Jn){var e=Jn,t=er;if(er=Jn=null,Iu(e),t)for(e=0;e<t.length;e++)Iu(t[e])}}function Jd(e,t){return e(t)}function ef(){}var wl=!1;function tf(e,t,n){if(wl)return e(t,n);wl=!0;try{return Jd(e,t,n)}finally{wl=!1,(Jn!==null||er!==null)&&(ef(),qd())}}function Jr(e,t){var n=e.stateNode;if(n===null)return null;var r=Ki(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var ua=!1;if(zt)try{var Er={};Object.defineProperty(Er,"passive",{get:function(){ua=!0}}),window.addEventListener("test",Er,Er),window.removeEventListener("test",Er,Er)}catch{ua=!1}function E0(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Wr=!1,pi=null,hi=!1,ca=null,P0={onError:function(e){Wr=!0,pi=e}};function C0(e,t,n,r,o,i,l,a,s){Wr=!1,pi=null,E0.apply(P0,arguments)}function N0(e,t,n,r,o,i,l,a,s){if(C0.apply(this,arguments),Wr){if(Wr){var u=pi;Wr=!1,pi=null}else throw Error(M(198));hi||(hi=!0,ca=u)}}function Ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bu(e){if(Ln(e)!==e)throw Error(M(188))}function T0(e){var t=e.alternate;if(!t){if(t=Ln(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return bu(o),e;if(i===r)return bu(o),t;i=i.sibling}throw Error(M(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function rf(e){return e=T0(e),e!==null?of(e):null}function of(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=of(e);if(t!==null)return t;e=e.sibling}return null}var lf=Je.unstable_scheduleCallback,Bu=Je.unstable_cancelCallback,_0=Je.unstable_shouldYield,M0=Je.unstable_requestPaint,Se=Je.unstable_now,j0=Je.unstable_getCurrentPriorityLevel,Ns=Je.unstable_ImmediatePriority,af=Je.unstable_UserBlockingPriority,mi=Je.unstable_NormalPriority,O0=Je.unstable_LowPriority,sf=Je.unstable_IdlePriority,Vi=null,Et=null;function F0(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Vi,e,void 0,(e.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:R0,L0=Math.log,z0=Math.LN2;function R0(e){return e>>>=0,e===0?32:31-(L0(e)/z0|0)|0}var zo=64,Ro=4194304;function zr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=zr(a):(i&=l,i!==0&&(r=zr(i)))}else l=n&~o,l!==0?r=zr(l):i!==0&&(r=zr(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ht(t),o=1<<n,r|=e[n],t&=~o;return r}function A0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function D0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-ht(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=A0(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function da(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function uf(){var e=zo;return zo<<=1,!(zo&4194240)&&(zo=64),e}function Sl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ko(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ht(t),e[t]=n}function I0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ht(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Ts(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ht(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var ne=0;function cf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var df,_s,ff,pf,hf,fa=!1,Ao=[],Zt=null,qt=null,Jt=null,eo=new Map,to=new Map,Gt=[],b0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wu(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Jt=null;break;case"pointerover":case"pointerout":eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":to.delete(t.pointerId)}}function Pr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Po(t),t!==null&&_s(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function B0(e,t,n,r,o){switch(t){case"focusin":return Zt=Pr(Zt,e,t,n,r,o),!0;case"dragenter":return qt=Pr(qt,e,t,n,r,o),!0;case"mouseover":return Jt=Pr(Jt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return eo.set(i,Pr(eo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,to.set(i,Pr(to.get(i)||null,e,t,n,r,o)),!0}return!1}function mf(e){var t=yn(e.target);if(t!==null){var n=Ln(t);if(n!==null){if(t=n.tag,t===13){if(t=nf(n),t!==null){e.blockedOn=t,hf(e.priority,function(){ff(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=pa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);aa=r,n.target.dispatchEvent(r),aa=null}else return t=Po(n),t!==null&&_s(t),e.blockedOn=n,!1;t.shift()}return!0}function Hu(e,t,n){Zo(e)&&n.delete(t)}function W0(){fa=!1,Zt!==null&&Zo(Zt)&&(Zt=null),qt!==null&&Zo(qt)&&(qt=null),Jt!==null&&Zo(Jt)&&(Jt=null),eo.forEach(Hu),to.forEach(Hu)}function Cr(e,t){e.blockedOn===t&&(e.blockedOn=null,fa||(fa=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,W0)))}function no(e){function t(o){return Cr(o,e)}if(0<Ao.length){Cr(Ao[0],e);for(var n=1;n<Ao.length;n++){var r=Ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Zt!==null&&Cr(Zt,e),qt!==null&&Cr(qt,e),Jt!==null&&Cr(Jt,e),eo.forEach(t),to.forEach(t),n=0;n<Gt.length;n++)r=Gt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gt.length&&(n=Gt[0],n.blockedOn===null);)mf(n),n.blockedOn===null&&Gt.shift()}var tr=It.ReactCurrentBatchConfig,vi=!0;function H0(e,t,n,r){var o=ne,i=tr.transition;tr.transition=null;try{ne=1,Ms(e,t,n,r)}finally{ne=o,tr.transition=i}}function U0(e,t,n,r){var o=ne,i=tr.transition;tr.transition=null;try{ne=4,Ms(e,t,n,r)}finally{ne=o,tr.transition=i}}function Ms(e,t,n,r){if(vi){var o=pa(e,t,n,r);if(o===null)jl(e,t,r,yi,n),Wu(e,r);else if(B0(o,e,t,n,r))r.stopPropagation();else if(Wu(e,r),t&4&&-1<b0.indexOf(e)){for(;o!==null;){var i=Po(o);if(i!==null&&df(i),i=pa(e,t,n,r),i===null&&jl(e,t,r,yi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else jl(e,t,r,null,n)}}var yi=null;function pa(e,t,n,r){if(yi=null,e=Cs(r),e=yn(e),e!==null)if(t=Ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return yi=e,null}function gf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j0()){case Ns:return 1;case af:return 4;case mi:case O0:return 16;case sf:return 536870912;default:return 16}default:return 16}}var Yt=null,js=null,qo=null;function vf(){if(qo)return qo;var e,t=js,n=t.length,r,o="value"in Yt?Yt.value:Yt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return qo=o.slice(e,1<r?1-r:void 0)}function Jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Do(){return!0}function Uu(){return!1}function tt(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Do:Uu,this.isPropagationStopped=Uu,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),t}var vr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Os=tt(vr),Eo=xe({},vr,{view:0,detail:0}),V0=tt(Eo),$l,kl,Nr,Gi=xe({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nr&&(Nr&&e.type==="mousemove"?($l=e.screenX-Nr.screenX,kl=e.screenY-Nr.screenY):kl=$l=0,Nr=e),$l)},movementY:function(e){return"movementY"in e?e.movementY:kl}}),Vu=tt(Gi),G0=xe({},Gi,{dataTransfer:0}),Q0=tt(G0),Y0=xe({},Eo,{relatedTarget:0}),El=tt(Y0),K0=xe({},vr,{animationName:0,elapsedTime:0,pseudoElement:0}),X0=tt(K0),Z0=xe({},vr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),q0=tt(Z0),J0=xe({},vr,{data:0}),Gu=tt(J0),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=nm[e])?!!t[e]:!1}function Fs(){return rm}var om=xe({},Eo,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fs,charCode:function(e){return e.type==="keypress"?Jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),im=tt(om),lm=xe({},Gi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qu=tt(lm),am=xe({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fs}),sm=tt(am),um=xe({},vr,{propertyName:0,elapsedTime:0,pseudoElement:0}),cm=tt(um),dm=xe({},Gi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fm=tt(dm),pm=[9,13,27,32],Ls=zt&&"CompositionEvent"in window,Hr=null;zt&&"documentMode"in document&&(Hr=document.documentMode);var hm=zt&&"TextEvent"in window&&!Hr,yf=zt&&(!Ls||Hr&&8<Hr&&11>=Hr),Yu=String.fromCharCode(32),Ku=!1;function xf(e,t){switch(e){case"keyup":return pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Bn=!1;function mm(e,t){switch(e){case"compositionend":return wf(t);case"keypress":return t.which!==32?null:(Ku=!0,Yu);case"textInput":return e=t.data,e===Yu&&Ku?null:e;default:return null}}function gm(e,t){if(Bn)return e==="compositionend"||!Ls&&xf(e,t)?(e=vf(),qo=js=Yt=null,Bn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yf&&t.locale!=="ko"?null:t.data;default:return null}}var vm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vm[e.type]:t==="textarea"}function Sf(e,t,n,r){Zd(r),t=xi(t,"onChange"),0<t.length&&(n=new Os("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ur=null,ro=null;function ym(e){Of(e,0)}function Qi(e){var t=Un(e);if(Ud(t))return e}function xm(e,t){if(e==="change")return t}var $f=!1;if(zt){var Pl;if(zt){var Cl="oninput"in document;if(!Cl){var Zu=document.createElement("div");Zu.setAttribute("oninput","return;"),Cl=typeof Zu.oninput=="function"}Pl=Cl}else Pl=!1;$f=Pl&&(!document.documentMode||9<document.documentMode)}function qu(){Ur&&(Ur.detachEvent("onpropertychange",kf),ro=Ur=null)}function kf(e){if(e.propertyName==="value"&&Qi(ro)){var t=[];Sf(t,ro,e,Cs(e)),tf(ym,t)}}function wm(e,t,n){e==="focusin"?(qu(),Ur=t,ro=n,Ur.attachEvent("onpropertychange",kf)):e==="focusout"&&qu()}function Sm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qi(ro)}function $m(e,t){if(e==="click")return Qi(t)}function km(e,t){if(e==="input"||e==="change")return Qi(t)}function Em(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var vt=typeof Object.is=="function"?Object.is:Em;function oo(e,t){if(vt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Kl.call(t,o)||!vt(e[o],t[o]))return!1}return!0}function Ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,t){var n=Ju(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ju(n)}}function Ef(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ef(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Pf(){for(var e=window,t=fi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=fi(e.document)}return t}function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pm(e){var t=Pf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ef(n.ownerDocument.documentElement,n)){if(r!==null&&zs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=ec(n,i);var l=ec(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cm=zt&&"documentMode"in document&&11>=document.documentMode,Wn=null,ha=null,Vr=null,ma=!1;function tc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ma||Wn==null||Wn!==fi(r)||(r=Wn,"selectionStart"in r&&zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vr&&oo(Vr,r)||(Vr=r,r=xi(ha,"onSelect"),0<r.length&&(t=new Os("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wn)))}function Io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hn={animationend:Io("Animation","AnimationEnd"),animationiteration:Io("Animation","AnimationIteration"),animationstart:Io("Animation","AnimationStart"),transitionend:Io("Transition","TransitionEnd")},Nl={},Cf={};zt&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete Hn.animationend.animation,delete Hn.animationiteration.animation,delete Hn.animationstart.animation),"TransitionEvent"in window||delete Hn.transitionend.transition);function Yi(e){if(Nl[e])return Nl[e];if(!Hn[e])return e;var t=Hn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cf)return Nl[e]=t[n];return e}var Nf=Yi("animationend"),Tf=Yi("animationiteration"),_f=Yi("animationstart"),Mf=Yi("transitionend"),jf=new Map,nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cn(e,t){jf.set(e,t),Fn(t,[e])}for(var Tl=0;Tl<nc.length;Tl++){var _l=nc[Tl],Nm=_l.toLowerCase(),Tm=_l[0].toUpperCase()+_l.slice(1);cn(Nm,"on"+Tm)}cn(Nf,"onAnimationEnd");cn(Tf,"onAnimationIteration");cn(_f,"onAnimationStart");cn("dblclick","onDoubleClick");cn("focusin","onFocus");cn("focusout","onBlur");cn(Mf,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_m=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rr));function rc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,N0(r,t,void 0,e),e.currentTarget=null}function Of(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;rc(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;rc(o,a,u),i=s}}}if(hi)throw e=ca,hi=!1,ca=null,e}function ue(e,t){var n=t[wa];n===void 0&&(n=t[wa]=new Set);var r=e+"__bubble";n.has(r)||(Ff(t,e,2,!1),n.add(r))}function Ml(e,t,n){var r=0;t&&(r|=4),Ff(n,e,r,t)}var bo="_reactListening"+Math.random().toString(36).slice(2);function io(e){if(!e[bo]){e[bo]=!0,Id.forEach(function(n){n!=="selectionchange"&&(_m.has(n)||Ml(n,!1,e),Ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bo]||(t[bo]=!0,Ml("selectionchange",!1,t))}}function Ff(e,t,n,r){switch(gf(t)){case 1:var o=H0;break;case 4:o=U0;break;default:o=Ms}n=o.bind(null,t,n,e),o=void 0,!ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function jl(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=yn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}tf(function(){var u=i,d=Cs(n),p=[];e:{var h=jf.get(e);if(h!==void 0){var v=Os,g=e;switch(e){case"keypress":if(Jo(n)===0)break e;case"keydown":case"keyup":v=im;break;case"focusin":g="focus",v=El;break;case"focusout":g="blur",v=El;break;case"beforeblur":case"afterblur":v=El;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Vu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Q0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sm;break;case Nf:case Tf:case _f:v=X0;break;case Mf:v=cm;break;case"scroll":v=V0;break;case"wheel":v=fm;break;case"copy":case"cut":case"paste":v=q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Qu}var $=(t&4)!==0,k=!$&&e==="scroll",f=$?h!==null?h+"Capture":null:h;$=[];for(var c=u,m;c!==null;){m=c;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,f!==null&&(w=Jr(c,f),w!=null&&$.push(lo(c,w,m)))),k)break;c=c.return}0<$.length&&(h=new v(h,g,null,n,d),p.push({event:h,listeners:$}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==aa&&(g=n.relatedTarget||n.fromElement)&&(yn(g)||g[Rt]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?yn(g):null,g!==null&&(k=Ln(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if($=Vu,w="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&($=Qu,w="onPointerLeave",f="onPointerEnter",c="pointer"),k=v==null?h:Un(v),m=g==null?h:Un(g),h=new $(w,c+"leave",v,n,d),h.target=k,h.relatedTarget=m,w=null,yn(d)===u&&($=new $(f,c+"enter",g,n,d),$.target=m,$.relatedTarget=k,w=$),k=w,v&&g)t:{for($=v,f=g,c=0,m=$;m;m=Rn(m))c++;for(m=0,w=f;w;w=Rn(w))m++;for(;0<c-m;)$=Rn($),c--;for(;0<m-c;)f=Rn(f),m--;for(;c--;){if($===f||f!==null&&$===f.alternate)break t;$=Rn($),f=Rn(f)}$=null}else $=null;v!==null&&oc(p,h,v,$,!1),g!==null&&k!==null&&oc(p,k,g,$,!0)}}e:{if(h=u?Un(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=xm;else if(Xu(h))if($f)S=km;else{S=Sm;var E=wm}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=$m);if(S&&(S=S(e,u))){Sf(p,S,n,d);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&na(h,"number",h.value)}switch(E=u?Un(u):window,e){case"focusin":(Xu(E)||E.contentEditable==="true")&&(Wn=E,ha=u,Vr=null);break;case"focusout":Vr=ha=Wn=null;break;case"mousedown":ma=!0;break;case"contextmenu":case"mouseup":case"dragend":ma=!1,tc(p,n,d);break;case"selectionchange":if(Cm)break;case"keydown":case"keyup":tc(p,n,d)}var P;if(Ls)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Bn?xf(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(yf&&n.locale!=="ko"&&(Bn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Bn&&(P=vf()):(Yt=d,js="value"in Yt?Yt.value:Yt.textContent,Bn=!0)),E=xi(u,T),0<E.length&&(T=new Gu(T,e,null,n,d),p.push({event:T,listeners:E}),P?T.data=P:(P=wf(n),P!==null&&(T.data=P)))),(P=hm?mm(e,n):gm(e,n))&&(u=xi(u,"onBeforeInput"),0<u.length&&(d=new Gu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=P))}Of(p,t)})}function lo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Jr(e,n),i!=null&&r.unshift(lo(e,i,o)),i=Jr(e,t),i!=null&&r.push(lo(e,i,o))),e=e.return}return r}function Rn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=Jr(n,i),s!=null&&l.unshift(lo(n,s,a))):o||(s=Jr(n,i),s!=null&&l.push(lo(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Mm=/\r\n?/g,jm=/\u0000|\uFFFD/g;function ic(e){return(typeof e=="string"?e:""+e).replace(Mm,`
`).replace(jm,"")}function Bo(e,t,n){if(t=ic(t),ic(e)!==t&&n)throw Error(M(425))}function wi(){}var ga=null,va=null;function ya(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xa=typeof setTimeout=="function"?setTimeout:void 0,Om=typeof clearTimeout=="function"?clearTimeout:void 0,lc=typeof Promise=="function"?Promise:void 0,Fm=typeof queueMicrotask=="function"?queueMicrotask:typeof lc<"u"?function(e){return lc.resolve(null).then(e).catch(Lm)}:xa;function Lm(e){setTimeout(function(){throw e})}function Ol(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),no(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);no(t)}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ac(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yr=Math.random().toString(36).slice(2),kt="__reactFiber$"+yr,ao="__reactProps$"+yr,Rt="__reactContainer$"+yr,wa="__reactEvents$"+yr,zm="__reactListeners$"+yr,Rm="__reactHandles$"+yr;function yn(e){var t=e[kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rt]||n[kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ac(e);e!==null;){if(n=e[kt])return n;e=ac(e)}return t}e=n,n=e.parentNode}return null}function Po(e){return e=e[kt]||e[Rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Un(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function Ki(e){return e[ao]||null}var Sa=[],Vn=-1;function dn(e){return{current:e}}function de(e){0>Vn||(e.current=Sa[Vn],Sa[Vn]=null,Vn--)}function ie(e,t){Vn++,Sa[Vn]=e.current,e.current=t}var sn={},De=dn(sn),Qe=dn(!1),Nn=sn;function lr(e,t){var n=e.type.contextTypes;if(!n)return sn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function Si(){de(Qe),de(De)}function sc(e,t,n){if(De.current!==sn)throw Error(M(168));ie(De,t),ie(Qe,n)}function Lf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(M(108,w0(e)||"Unknown",o));return xe({},n,r)}function $i(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sn,Nn=De.current,ie(De,e),ie(Qe,Qe.current),!0}function uc(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Lf(e,t,Nn),r.__reactInternalMemoizedMergedChildContext=e,de(Qe),de(De),ie(De,e)):de(Qe),ie(Qe,n)}var jt=null,Xi=!1,Fl=!1;function zf(e){jt===null?jt=[e]:jt.push(e)}function Am(e){Xi=!0,zf(e)}function fn(){if(!Fl&&jt!==null){Fl=!0;var e=0,t=ne;try{var n=jt;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}jt=null,Xi=!1}catch(o){throw jt!==null&&(jt=jt.slice(e+1)),lf(Ns,fn),o}finally{ne=t,Fl=!1}}return null}var Gn=[],Qn=0,ki=null,Ei=0,nt=[],rt=0,Tn=null,Ot=1,Ft="";function gn(e,t){Gn[Qn++]=Ei,Gn[Qn++]=ki,ki=e,Ei=t}function Rf(e,t,n){nt[rt++]=Ot,nt[rt++]=Ft,nt[rt++]=Tn,Tn=e;var r=Ot;e=Ft;var o=32-ht(r)-1;r&=~(1<<o),n+=1;var i=32-ht(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,Ot=1<<32-ht(t)+o|n<<o|r,Ft=i+e}else Ot=1<<i|n<<o|r,Ft=e}function Rs(e){e.return!==null&&(gn(e,1),Rf(e,1,0))}function As(e){for(;e===ki;)ki=Gn[--Qn],Gn[Qn]=null,Ei=Gn[--Qn],Gn[Qn]=null;for(;e===Tn;)Tn=nt[--rt],nt[rt]=null,Ft=nt[--rt],nt[rt]=null,Ot=nt[--rt],nt[rt]=null}var qe=null,Ze=null,he=!1,pt=null;function Af(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function cc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Ze=en(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Tn!==null?{id:Ot,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Ze=null,!0):!1;default:return!1}}function $a(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ka(e){if(he){var t=Ze;if(t){var n=t;if(!cc(e,t)){if($a(e))throw Error(M(418));t=en(n.nextSibling);var r=qe;t&&cc(e,t)?Af(r,n):(e.flags=e.flags&-4097|2,he=!1,qe=e)}}else{if($a(e))throw Error(M(418));e.flags=e.flags&-4097|2,he=!1,qe=e}}}function dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function Wo(e){if(e!==qe)return!1;if(!he)return dc(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ya(e.type,e.memoizedProps)),t&&(t=Ze)){if($a(e))throw Df(),Error(M(418));for(;t;)Af(e,t),t=en(t.nextSibling)}if(dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ze=en(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ze=null}}else Ze=qe?en(e.stateNode.nextSibling):null;return!0}function Df(){for(var e=Ze;e;)e=en(e.nextSibling)}function ar(){Ze=qe=null,he=!1}function Ds(e){pt===null?pt=[e]:pt.push(e)}var Dm=It.ReactCurrentBatchConfig;function dt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Pi=dn(null),Ci=null,Yn=null,Is=null;function bs(){Is=Yn=Ci=null}function Bs(e){var t=Pi.current;de(Pi),e._currentValue=t}function Ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function nr(e,t){Ci=e,Is=Yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(Is!==e)if(e={context:e,memoizedValue:t,next:null},Yn===null){if(Ci===null)throw Error(M(308));Yn=e,Ci.dependencies={lanes:0,firstContext:e}}else Yn=Yn.next=e;return t}var xn=null;function Ws(e){xn===null?xn=[e]:xn.push(e)}function If(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ws(t)):(n.next=o.next,o.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Vt=!1;function Hs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,At(e,n)}return o=r.interleaved,o===null?(t.next=t,Ws(r)):(t.next=o.next,o.next=t),r.interleaved=t,At(e,n)}function ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}function fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ni(e,t,n,r){var o=e.updateQueue;Vt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(i!==null){var p=o.baseState;l=0,d=u=s=null,a=i;do{var h=a.lane,v=a.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=e,$=a;switch(h=t,v=n,$.tag){case 1:if(g=$.payload,typeof g=="function"){p=g.call(v,p,h);break e}p=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=$.payload,h=typeof g=="function"?g.call(v,p,h):g,h==null)break e;p=xe({},p,h);break e;case 2:Vt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,s=p):d=d.next=v,l|=h;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;h=a,a=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(1);if(d===null&&(s=p),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Mn|=l,e.lanes=l,e.memoizedState=p}}function pc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(M(191,o));o.call(r)}}}var Bf=new Dd.Component().refs;function Pa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:xe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zi={isMounted:function(e){return(e=e._reactInternals)?Ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),o=rn(e),i=Lt(r,o);i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,o),t!==null&&(mt(t,e,o,r),ei(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),o=rn(e),i=Lt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=tn(e,i,o),t!==null&&(mt(t,e,o,r),ei(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=rn(e),o=Lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=tn(e,o,r),t!==null&&(mt(t,e,r,n),ei(t,e,r))}};function hc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!oo(n,r)||!oo(o,i):!0}function Wf(e,t,n){var r=!1,o=sn,i=t.contextType;return typeof i=="object"&&i!==null?i=lt(i):(o=Ye(t)?Nn:De.current,r=t.contextTypes,i=(r=r!=null)?lr(e,o):sn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function mc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zi.enqueueReplaceState(t,t.state,null)}function Ca(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Bf,Hs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=lt(i):(i=Ye(t)?Nn:De.current,o.context=lr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Pa(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Zi.enqueueReplaceState(o,o.state,null),Ni(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Tr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===Bf&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Ho(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gc(e){var t=e._init;return t(e._payload)}function Hf(e){function t(f,c){if(e){var m=f.deletions;m===null?(f.deletions=[c],f.flags|=16):m.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=on(f,c),f.index=0,f.sibling=null,f}function i(f,c,m){return f.index=m,e?(m=f.alternate,m!==null?(m=m.index,m<c?(f.flags|=2,c):m):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function a(f,c,m,w){return c===null||c.tag!==6?(c=bl(m,f.mode,w),c.return=f,c):(c=o(c,m),c.return=f,c)}function s(f,c,m,w){var S=m.type;return S===bn?d(f,c,m.props.children,w,m.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ut&&gc(S)===c.type)?(w=o(c,m.props),w.ref=Tr(f,c,m),w.return=f,w):(w=li(m.type,m.key,m.props,null,f.mode,w),w.ref=Tr(f,c,m),w.return=f,w)}function u(f,c,m,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=Bl(m,f.mode,w),c.return=f,c):(c=o(c,m.children||[]),c.return=f,c)}function d(f,c,m,w,S){return c===null||c.tag!==7?(c=En(m,f.mode,w,S),c.return=f,c):(c=o(c,m),c.return=f,c)}function p(f,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=bl(""+c,f.mode,m),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Oo:return m=li(c.type,c.key,c.props,null,f.mode,m),m.ref=Tr(f,null,c),m.return=f,m;case In:return c=Bl(c,f.mode,m),c.return=f,c;case Ut:var w=c._init;return p(f,w(c._payload),m)}if(Lr(c)||kr(c))return c=En(c,f.mode,m,null),c.return=f,c;Ho(f,c)}return null}function h(f,c,m,w){var S=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(f,c,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Oo:return m.key===S?s(f,c,m,w):null;case In:return m.key===S?u(f,c,m,w):null;case Ut:return S=m._init,h(f,c,S(m._payload),w)}if(Lr(m)||kr(m))return S!==null?null:d(f,c,m,w,null);Ho(f,m)}return null}function v(f,c,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(m)||null,a(c,f,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Oo:return f=f.get(w.key===null?m:w.key)||null,s(c,f,w,S);case In:return f=f.get(w.key===null?m:w.key)||null,u(c,f,w,S);case Ut:var E=w._init;return v(f,c,m,E(w._payload),S)}if(Lr(w)||kr(w))return f=f.get(m)||null,d(c,f,w,S,null);Ho(c,w)}return null}function g(f,c,m,w){for(var S=null,E=null,P=c,T=c=0,W=null;P!==null&&T<m.length;T++){P.index>T?(W=P,P=null):W=P.sibling;var A=h(f,P,m[T],w);if(A===null){P===null&&(P=W);break}e&&P&&A.alternate===null&&t(f,P),c=i(A,c,T),E===null?S=A:E.sibling=A,E=A,P=W}if(T===m.length)return n(f,P),he&&gn(f,T),S;if(P===null){for(;T<m.length;T++)P=p(f,m[T],w),P!==null&&(c=i(P,c,T),E===null?S=P:E.sibling=P,E=P);return he&&gn(f,T),S}for(P=r(f,P);T<m.length;T++)W=v(P,f,T,m[T],w),W!==null&&(e&&W.alternate!==null&&P.delete(W.key===null?T:W.key),c=i(W,c,T),E===null?S=W:E.sibling=W,E=W);return e&&P.forEach(function(K){return t(f,K)}),he&&gn(f,T),S}function $(f,c,m,w){var S=kr(m);if(typeof S!="function")throw Error(M(150));if(m=S.call(m),m==null)throw Error(M(151));for(var E=S=null,P=c,T=c=0,W=null,A=m.next();P!==null&&!A.done;T++,A=m.next()){P.index>T?(W=P,P=null):W=P.sibling;var K=h(f,P,A.value,w);if(K===null){P===null&&(P=W);break}e&&P&&K.alternate===null&&t(f,P),c=i(K,c,T),E===null?S=K:E.sibling=K,E=K,P=W}if(A.done)return n(f,P),he&&gn(f,T),S;if(P===null){for(;!A.done;T++,A=m.next())A=p(f,A.value,w),A!==null&&(c=i(A,c,T),E===null?S=A:E.sibling=A,E=A);return he&&gn(f,T),S}for(P=r(f,P);!A.done;T++,A=m.next())A=v(P,f,T,A.value,w),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?T:A.key),c=i(A,c,T),E===null?S=A:E.sibling=A,E=A);return e&&P.forEach(function(le){return t(f,le)}),he&&gn(f,T),S}function k(f,c,m,w){if(typeof m=="object"&&m!==null&&m.type===bn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Oo:e:{for(var S=m.key,E=c;E!==null;){if(E.key===S){if(S=m.type,S===bn){if(E.tag===7){n(f,E.sibling),c=o(E,m.props.children),c.return=f,f=c;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Ut&&gc(S)===E.type){n(f,E.sibling),c=o(E,m.props),c.ref=Tr(f,E,m),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}m.type===bn?(c=En(m.props.children,f.mode,w,m.key),c.return=f,f=c):(w=li(m.type,m.key,m.props,null,f.mode,w),w.ref=Tr(f,c,m),w.return=f,f=w)}return l(f);case In:e:{for(E=m.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(f,c.sibling),c=o(c,m.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Bl(m,f.mode,w),c.return=f,f=c}return l(f);case Ut:return E=m._init,k(f,c,E(m._payload),w)}if(Lr(m))return g(f,c,m,w);if(kr(m))return $(f,c,m,w);Ho(f,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,m),c.return=f,f=c):(n(f,c),c=bl(m,f.mode,w),c.return=f,f=c),l(f)):n(f,c)}return k}var sr=Hf(!0),Uf=Hf(!1),Co={},Pt=dn(Co),so=dn(Co),uo=dn(Co);function wn(e){if(e===Co)throw Error(M(174));return e}function Us(e,t){switch(ie(uo,t),ie(so,e),ie(Pt,Co),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oa(t,e)}de(Pt),ie(Pt,t)}function ur(){de(Pt),de(so),de(uo)}function Vf(e){wn(uo.current);var t=wn(Pt.current),n=oa(t,e.type);t!==n&&(ie(so,e),ie(Pt,n))}function Vs(e){so.current===e&&(de(Pt),de(so))}var ve=dn(0);function Ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ll=[];function Gs(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var ti=It.ReactCurrentDispatcher,zl=It.ReactCurrentBatchConfig,_n=0,ye=null,Pe=null,Te=null,_i=!1,Gr=!1,co=0,Im=0;function Le(){throw Error(M(321))}function Qs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!vt(e[n],t[n]))return!1;return!0}function Ys(e,t,n,r,o,i){if(_n=i,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?Hm:Um,e=n(r,o),Gr){i=0;do{if(Gr=!1,co=0,25<=i)throw Error(M(301));i+=1,Te=Pe=null,t.updateQueue=null,ti.current=Vm,e=n(r,o)}while(Gr)}if(ti.current=Mi,t=Pe!==null&&Pe.next!==null,_n=0,Te=Pe=ye=null,_i=!1,t)throw Error(M(300));return e}function Ks(){var e=co!==0;return co=0,e}function St(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Te===null?ye.memoizedState=Te=e:Te=Te.next=e,Te}function at(){if(Pe===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Pe.next;var t=Te===null?ye.memoizedState:Te.next;if(t!==null)Te=t,Pe=e;else{if(e===null)throw Error(M(310));Pe=e,e={memoizedState:Pe.memoizedState,baseState:Pe.baseState,baseQueue:Pe.baseQueue,queue:Pe.queue,next:null},Te===null?ye.memoizedState=Te=e:Te=Te.next=e}return Te}function fo(e,t){return typeof t=="function"?t(e):t}function Rl(e){var t=at(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=Pe,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var d=u.lane;if((_n&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=p,l=r):s=s.next=p,ye.lanes|=d,Mn|=d}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,vt(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ye.lanes|=i,Mn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Al(e){var t=at(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);vt(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Gf(){}function Qf(e,t){var n=ye,r=at(),o=t(),i=!vt(r.memoizedState,o);if(i&&(r.memoizedState=o,Ge=!0),r=r.queue,Xs(Xf.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Te!==null&&Te.memoizedState.tag&1){if(n.flags|=2048,po(9,Kf.bind(null,n,r,o,t),void 0,null),Me===null)throw Error(M(349));_n&30||Yf(n,t,o)}return o}function Yf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Kf(e,t,n,r){t.value=n,t.getSnapshot=r,Zf(t)&&qf(e)}function Xf(e,t,n){return n(function(){Zf(t)&&qf(e)})}function Zf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!vt(e,n)}catch{return!0}}function qf(e){var t=At(e,1);t!==null&&mt(t,e,1,-1)}function vc(e){var t=St();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:e},t.queue=e,e=e.dispatch=Wm.bind(null,ye,e),[t.memoizedState,e]}function po(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Jf(){return at().memoizedState}function ni(e,t,n,r){var o=St();ye.flags|=e,o.memoizedState=po(1|t,n,void 0,r===void 0?null:r)}function qi(e,t,n,r){var o=at();r=r===void 0?null:r;var i=void 0;if(Pe!==null){var l=Pe.memoizedState;if(i=l.destroy,r!==null&&Qs(r,l.deps)){o.memoizedState=po(t,n,i,r);return}}ye.flags|=e,o.memoizedState=po(1|t,n,i,r)}function yc(e,t){return ni(8390656,8,e,t)}function Xs(e,t){return qi(2048,8,e,t)}function ep(e,t){return qi(4,2,e,t)}function tp(e,t){return qi(4,4,e,t)}function np(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rp(e,t,n){return n=n!=null?n.concat([e]):null,qi(4,4,np.bind(null,t,e),n)}function Zs(){}function op(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ip(e,t){var n=at();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Qs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lp(e,t,n){return _n&21?(vt(n,t)||(n=uf(),ye.lanes|=n,Mn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function bm(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=zl.transition;zl.transition={};try{e(!1),t()}finally{ne=n,zl.transition=r}}function ap(){return at().memoizedState}function Bm(e,t,n){var r=rn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},sp(e))up(t,n);else if(n=If(e,t,n,r),n!==null){var o=Be();mt(n,e,r,o),cp(n,t,r)}}function Wm(e,t,n){var r=rn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(sp(e))up(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,vt(a,l)){var s=t.interleaved;s===null?(o.next=o,Ws(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=If(e,t,o,r),n!==null&&(o=Be(),mt(n,e,r,o),cp(n,t,r))}}function sp(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function up(e,t){Gr=_i=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ts(e,n)}}var Mi={readContext:lt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},Hm={readContext:lt,useCallback:function(e,t){return St().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:yc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ni(4194308,4,np.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return ni(4,2,e,t)},useMemo:function(e,t){var n=St();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=St();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Bm.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=St();return e={current:e},t.memoizedState=e},useState:vc,useDebugValue:Zs,useDeferredValue:function(e){return St().memoizedState=e},useTransition:function(){var e=vc(!1),t=e[0];return e=bm.bind(null,e[1]),St().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,o=St();if(he){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),Me===null)throw Error(M(349));_n&30||Yf(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,yc(Xf.bind(null,r,i,e),[e]),r.flags|=2048,po(9,Kf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=St(),t=Me.identifierPrefix;if(he){var n=Ft,r=Ot;n=(r&~(1<<32-ht(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=co++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Im++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Um={readContext:lt,useCallback:op,useContext:lt,useEffect:Xs,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:ip,useReducer:Rl,useRef:Jf,useState:function(){return Rl(fo)},useDebugValue:Zs,useDeferredValue:function(e){var t=at();return lp(t,Pe.memoizedState,e)},useTransition:function(){var e=Rl(fo)[0],t=at().memoizedState;return[e,t]},useMutableSource:Gf,useSyncExternalStore:Qf,useId:ap,unstable_isNewReconciler:!1},Vm={readContext:lt,useCallback:op,useContext:lt,useEffect:Xs,useImperativeHandle:rp,useInsertionEffect:ep,useLayoutEffect:tp,useMemo:ip,useReducer:Al,useRef:Jf,useState:function(){return Al(fo)},useDebugValue:Zs,useDeferredValue:function(e){var t=at();return Pe===null?t.memoizedState=e:lp(t,Pe.memoizedState,e)},useTransition:function(){var e=Al(fo)[0],t=at().memoizedState;return[e,t]},useMutableSource:Gf,useSyncExternalStore:Qf,useId:ap,unstable_isNewReconciler:!1};function cr(e,t){try{var n="",r=t;do n+=x0(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Dl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Na(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Gm=typeof WeakMap=="function"?WeakMap:Map;function dp(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Oi||(Oi=!0,Aa=r),Na(e,t)},n}function fp(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Na(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Na(e,t),typeof r!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function xc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Gm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=lg.bind(null,e,t,n),t.then(e,e))}function wc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Sc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,tn(n,t,1))),n.lanes|=1),e)}var Qm=It.ReactCurrentOwner,Ge=!1;function be(e,t,n,r){t.child=e===null?Uf(t,null,n,r):sr(t,e.child,n,r)}function $c(e,t,n,r,o){n=n.render;var i=t.ref;return nr(t,o),r=Ys(e,t,n,r,i,o),n=Ks(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(he&&n&&Rs(t),t.flags|=1,be(e,t,r,o),t.child)}function kc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!iu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,pp(e,t,i,r,o)):(e=li(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:oo,n(l,r)&&e.ref===t.ref)return Dt(e,t,o)}return t.flags|=1,e=on(i,r),e.ref=t.ref,e.return=t,t.child=e}function pp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(oo(i,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Dt(e,t,o)}return Ta(e,t,n,r,o)}function hp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Xn,Xe),Xe|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Xn,Xe),Xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(Xn,Xe),Xe|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(Xn,Xe),Xe|=r;return be(e,t,o,n),t.child}function mp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ta(e,t,n,r,o){var i=Ye(n)?Nn:De.current;return i=lr(t,i),nr(t,o),n=Ys(e,t,n,r,i,o),r=Ks(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dt(e,t,o)):(he&&r&&Rs(t),t.flags|=1,be(e,t,n,o),t.child)}function Ec(e,t,n,r,o){if(Ye(n)){var i=!0;$i(t)}else i=!1;if(nr(t,o),t.stateNode===null)ri(e,t),Wf(t,n,r),Ca(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=Ye(n)?Nn:De.current,u=lr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&mc(t,l,r,u),Vt=!1;var h=t.memoizedState;l.state=h,Ni(t,r,l,o),s=t.memoizedState,a!==r||h!==s||Qe.current||Vt?(typeof d=="function"&&(Pa(t,n,d,r),s=t.memoizedState),(a=Vt||hc(t,n,a,r,h,s,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,bf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:dt(t.type,a),l.props=u,p=t.pendingProps,h=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=lt(s):(s=Ye(n)?Nn:De.current,s=lr(t,s));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||h!==s)&&mc(t,l,r,s),Vt=!1,h=t.memoizedState,l.state=h,Ni(t,r,l,o);var g=t.memoizedState;a!==p||h!==g||Qe.current||Vt?(typeof v=="function"&&(Pa(t,n,v,r),g=t.memoizedState),(u=Vt||hc(t,n,u,r,h,g,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,g,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,g,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),l.props=r,l.state=g,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return _a(e,t,n,r,i,o)}function _a(e,t,n,r,o,i){mp(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&uc(t,n,!1),Dt(e,t,i);r=t.stateNode,Qm.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=sr(t,e.child,null,i),t.child=sr(t,null,a,i)):be(e,t,a,i),t.memoizedState=r.state,o&&uc(t,n,!0),t.child}function gp(e){var t=e.stateNode;t.pendingContext?sc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&sc(e,t.context,!1),Us(e,t.containerInfo)}function Pc(e,t,n,r,o){return ar(),Ds(o),t.flags|=256,be(e,t,n,r),t.child}var Ma={dehydrated:null,treeContext:null,retryLane:0};function ja(e){return{baseLanes:e,cachePool:null,transitions:null}}function vp(e,t,n){var r=t.pendingProps,o=ve.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(ve,o&1),e===null)return ka(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=tl(l,r,0,null),e=En(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ja(n),t.memoizedState=Ma,e):qs(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ym(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=on(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=on(a,i):(i=En(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?ja(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ma,r}return i=e.child,e=i.sibling,r=on(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function qs(e,t){return t=tl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Uo(e,t,n,r){return r!==null&&Ds(r),sr(t,e.child,null,n),e=qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ym(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Dl(Error(M(422))),Uo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=tl({mode:"visible",children:r.children},o,0,null),i=En(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&sr(t,e.child,null,l),t.child.memoizedState=ja(l),t.memoizedState=Ma,i);if(!(t.mode&1))return Uo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(M(419)),r=Dl(i,r,void 0),Uo(e,t,l,r)}if(a=(l&e.childLanes)!==0,Ge||a){if(r=Me,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,At(e,o),mt(r,e,o,-1))}return ou(),r=Dl(Error(M(421))),Uo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ag.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Ze=en(o.nextSibling),qe=t,he=!0,pt=null,e!==null&&(nt[rt++]=Ot,nt[rt++]=Ft,nt[rt++]=Tn,Ot=e.id,Ft=e.overflow,Tn=t),t=qs(t,r.children),t.flags|=4096,t)}function Cc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ea(e.return,t,n)}function Il(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function yp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(be(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cc(e,n,t);else if(e.tag===19)Cc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ve,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ti(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Il(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ti(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Il(t,!0,n,null,i);break;case"together":Il(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Mn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=on(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=on(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Km(e,t,n){switch(t.tag){case 3:gp(t),ar();break;case 5:Vf(t);break;case 1:Ye(t.type)&&$i(t);break;case 4:Us(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(Pi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?vp(e,t,n):(ie(ve,ve.current&1),e=Dt(e,t,n),e!==null?e.sibling:null);ie(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,hp(e,t,n)}return Dt(e,t,n)}var xp,Oa,wp,Sp;xp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oa=function(){};wp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,wn(Pt.current);var i=null;switch(n){case"input":o=ea(e,o),r=ea(e,r),i=[];break;case"select":o=xe({},o,{value:void 0}),r=xe({},r,{value:void 0}),i=[];break;case"textarea":o=ra(e,o),r=ra(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=wi)}ia(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Zr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Zr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ue("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Sp=function(e,t,n,r){n!==r&&(t.flags|=4)};function _r(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Xm(e,t,n){var r=t.pendingProps;switch(As(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return Ye(t.type)&&Si(),ze(t),null;case 3:return r=t.stateNode,ur(),de(Qe),de(De),Gs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(ba(pt),pt=null))),Oa(e,t),ze(t),null;case 5:Vs(t);var o=wn(uo.current);if(n=t.type,e!==null&&t.stateNode!=null)wp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return ze(t),null}if(e=wn(Pt.current),Wo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[kt]=t,r[ao]=i,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(o=0;o<Rr.length;o++)ue(Rr[o],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":zu(r,i),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ue("invalid",r);break;case"textarea":Au(r,i),ue("invalid",r)}ia(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Bo(r.textContent,a,e),o=["children",""+a]):Zr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ue("scroll",r)}switch(n){case"input":Fo(r),Ru(r,i,!0);break;case"textarea":Fo(r),Du(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=wi)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[kt]=t,e[ao]=r,xp(e,t,!1,!1),t.stateNode=e;e:{switch(l=la(n,r),n){case"dialog":ue("cancel",e),ue("close",e),o=r;break;case"iframe":case"object":case"embed":ue("load",e),o=r;break;case"video":case"audio":for(o=0;o<Rr.length;o++)ue(Rr[o],e);o=r;break;case"source":ue("error",e),o=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),o=r;break;case"details":ue("toggle",e),o=r;break;case"input":zu(e,r),o=ea(e,r),ue("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=xe({},r,{value:void 0}),ue("invalid",e);break;case"textarea":Au(e,r),o=ra(e,r),ue("invalid",e);break;default:o=r}ia(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?Xd(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Yd(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&qr(e,s):typeof s=="number"&&qr(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Zr.hasOwnProperty(i)?s!=null&&i==="onScroll"&&ue("scroll",e):s!=null&&$s(e,i,s,l))}switch(n){case"input":Fo(e),Ru(e,r,!1);break;case"textarea":Fo(e),Du(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?qn(e,!!r.multiple,i,!1):r.defaultValue!=null&&qn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=wi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ze(t),null;case 6:if(e&&t.stateNode!=null)Sp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=wn(uo.current),wn(Pt.current),Wo(t)){if(r=t.stateNode,n=t.memoizedProps,r[kt]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[kt]=t,t.stateNode=r}return ze(t),null;case 13:if(de(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&Ze!==null&&t.mode&1&&!(t.flags&128))Df(),ar(),t.flags|=98560,i=!1;else if(i=Wo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(M(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(M(317));i[kt]=t}else ar(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ze(t),i=!1}else pt!==null&&(ba(pt),pt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Ce===0&&(Ce=3):ou())),t.updateQueue!==null&&(t.flags|=4),ze(t),null);case 4:return ur(),Oa(e,t),e===null&&io(t.stateNode.containerInfo),ze(t),null;case 10:return Bs(t.type._context),ze(t),null;case 17:return Ye(t.type)&&Si(),ze(t),null;case 19:if(de(ve),i=t.memoizedState,i===null)return ze(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)_r(i,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Ti(e),l!==null){for(t.flags|=128,_r(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ve,ve.current&1|2),t.child}e=e.sibling}i.tail!==null&&Se()>dr&&(t.flags|=128,r=!0,_r(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ti(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),_r(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!he)return ze(t),null}else 2*Se()-i.renderingStartTime>dr&&n!==1073741824&&(t.flags|=128,r=!0,_r(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Se(),t.sibling=null,n=ve.current,ie(ve,r?n&1|2:n&1),t):(ze(t),null);case 22:case 23:return ru(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Xe&1073741824&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function Zm(e,t){switch(As(t),t.tag){case 1:return Ye(t.type)&&Si(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ur(),de(Qe),de(De),Gs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Vs(t),null;case 13:if(de(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));ar()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return de(ve),null;case 4:return ur(),null;case 10:return Bs(t.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var Vo=!1,Re=!1,qm=typeof WeakSet=="function"?WeakSet:Set,R=null;function Kn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function Fa(e,t,n){try{n()}catch(r){we(e,t,r)}}var Nc=!1;function Jm(e,t){if(ga=vi,e=Pf(),zs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,p=e,h=null;t:for(;;){for(var v;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(s=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===e)break t;if(h===n&&++u===o&&(a=l),h===i&&++d===r&&(s=l),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(va={focusedElem:e,selectionRange:n},vi=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var $=g.memoizedProps,k=g.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?$:dt(t.type,$),k);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(w){we(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return g=Nc,Nc=!1,g}function Qr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fa(t,n,i)}o=o.next}while(o!==r)}}function Ji(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function La(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $p(e){var t=e.alternate;t!==null&&(e.alternate=null,$p(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[kt],delete t[ao],delete t[wa],delete t[zm],delete t[Rm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kp(e){return e.tag===5||e.tag===3||e.tag===4}function Tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function za(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=wi));else if(r!==4&&(e=e.child,e!==null))for(za(e,t,n),e=e.sibling;e!==null;)za(e,t,n),e=e.sibling}function Ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ra(e,t,n),e=e.sibling;e!==null;)Ra(e,t,n),e=e.sibling}var je=null,ft=!1;function Wt(e,t,n){for(n=n.child;n!==null;)Ep(e,t,n),n=n.sibling}function Ep(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Vi,n)}catch{}switch(n.tag){case 5:Re||Kn(n,t);case 6:var r=je,o=ft;je=null,Wt(e,t,n),je=r,ft=o,je!==null&&(ft?(e=je,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(ft?(e=je,n=n.stateNode,e.nodeType===8?Ol(e.parentNode,n):e.nodeType===1&&Ol(e,n),no(e)):Ol(je,n.stateNode));break;case 4:r=je,o=ft,je=n.stateNode.containerInfo,ft=!0,Wt(e,t,n),je=r,ft=o;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Fa(n,t,l),o=o.next}while(o!==r)}Wt(e,t,n);break;case 1:if(!Re&&(Kn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,t,a)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,Wt(e,t,n),Re=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function _c(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qm),t.forEach(function(r){var o=sg.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:je=a.stateNode,ft=!1;break e;case 3:je=a.stateNode.containerInfo,ft=!0;break e;case 4:je=a.stateNode.containerInfo,ft=!0;break e}a=a.return}if(je===null)throw Error(M(160));Ep(i,l,o),je=null,ft=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){we(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pp(t,e),t=t.sibling}function Pp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),wt(e),r&4){try{Qr(3,e,e.return),Ji(3,e)}catch($){we(e,e.return,$)}try{Qr(5,e,e.return)}catch($){we(e,e.return,$)}}break;case 1:ct(t,e),wt(e),r&512&&n!==null&&Kn(n,n.return);break;case 5:if(ct(t,e),wt(e),r&512&&n!==null&&Kn(n,n.return),e.flags&32){var o=e.stateNode;try{qr(o,"")}catch($){we(e,e.return,$)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Vd(o,i),la(a,l);var u=la(a,i);for(l=0;l<s.length;l+=2){var d=s[l],p=s[l+1];d==="style"?Xd(o,p):d==="dangerouslySetInnerHTML"?Yd(o,p):d==="children"?qr(o,p):$s(o,d,p,u)}switch(a){case"input":ta(o,i);break;case"textarea":Gd(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?qn(o,!!i.multiple,v,!1):h!==!!i.multiple&&(i.defaultValue!=null?qn(o,!!i.multiple,i.defaultValue,!0):qn(o,!!i.multiple,i.multiple?[]:"",!1))}o[ao]=i}catch($){we(e,e.return,$)}}break;case 6:if(ct(t,e),wt(e),r&4){if(e.stateNode===null)throw Error(M(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch($){we(e,e.return,$)}}break;case 3:if(ct(t,e),wt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{no(t.containerInfo)}catch($){we(e,e.return,$)}break;case 4:ct(t,e),wt(e);break;case 13:ct(t,e),wt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(tu=Se())),r&4&&_c(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(u=Re)||d,ct(t,e),Re=u):ct(t,e),wt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(p=R=d;R!==null;){switch(h=R,v=h.child,h.tag){case 0:case 11:case 14:case 15:Qr(4,h,h.return);break;case 1:Kn(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch($){we(r,n,$)}}break;case 5:Kn(h,h.return);break;case 22:if(h.memoizedState!==null){jc(p);continue}}v!==null?(v.return=h,R=v):jc(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{o=p.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,s=p.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=Kd("display",l))}catch($){we(e,e.return,$)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch($){we(e,e.return,$)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ct(t,e),wt(e),r&4&&_c(e);break;case 21:break;default:ct(t,e),wt(e)}}function wt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kp(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qr(o,""),r.flags&=-33);var i=Tc(e);Ra(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Tc(e);za(e,a,l);break;default:throw Error(M(161))}}catch(s){we(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function eg(e,t,n){R=e,Cp(e)}function Cp(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var o=R,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||Vo;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Re;a=Vo;var u=Re;if(Vo=l,(Re=s)&&!u)for(R=o;R!==null;)l=R,s=l.child,l.tag===22&&l.memoizedState!==null?Oc(o):s!==null?(s.return=l,R=s):Oc(o);for(;i!==null;)R=i,Cp(i),i=i.sibling;R=o,Vo=a,Re=u}Mc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,R=i):Mc(e)}}function Mc(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||Ji(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:dt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&pc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&no(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Re||t.flags&512&&La(t)}catch(h){we(t,t.return,h)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function jc(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Oc(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ji(4,t)}catch(s){we(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){we(t,o,s)}}var i=t.return;try{La(t)}catch(s){we(t,i,s)}break;case 5:var l=t.return;try{La(t)}catch(s){we(t,l,s)}}}catch(s){we(t,t.return,s)}if(t===e){R=null;break}var a=t.sibling;if(a!==null){a.return=t.return,R=a;break}R=t.return}}var tg=Math.ceil,ji=It.ReactCurrentDispatcher,Js=It.ReactCurrentOwner,it=It.ReactCurrentBatchConfig,q=0,Me=null,ke=null,Oe=0,Xe=0,Xn=dn(0),Ce=0,ho=null,Mn=0,el=0,eu=0,Yr=null,Ve=null,tu=0,dr=1/0,_t=null,Oi=!1,Aa=null,nn=null,Go=!1,Kt=null,Fi=0,Kr=0,Da=null,oi=-1,ii=0;function Be(){return q&6?Se():oi!==-1?oi:oi=Se()}function rn(e){return e.mode&1?q&2&&Oe!==0?Oe&-Oe:Dm.transition!==null?(ii===0&&(ii=uf()),ii):(e=ne,e!==0||(e=window.event,e=e===void 0?16:gf(e.type)),e):1}function mt(e,t,n,r){if(50<Kr)throw Kr=0,Da=null,Error(M(185));ko(e,n,r),(!(q&2)||e!==Me)&&(e===Me&&(!(q&2)&&(el|=n),Ce===4&&Qt(e,Oe)),Ke(e,r),n===1&&q===0&&!(t.mode&1)&&(dr=Se()+500,Xi&&fn()))}function Ke(e,t){var n=e.callbackNode;D0(e,t);var r=gi(e,e===Me?Oe:0);if(r===0)n!==null&&Bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bu(n),t===1)e.tag===0?Am(Fc.bind(null,e)):zf(Fc.bind(null,e)),Fm(function(){!(q&6)&&fn()}),n=null;else{switch(cf(r)){case 1:n=Ns;break;case 4:n=af;break;case 16:n=mi;break;case 536870912:n=sf;break;default:n=mi}n=Lp(n,Np.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Np(e,t){if(oi=-1,ii=0,q&6)throw Error(M(327));var n=e.callbackNode;if(rr()&&e.callbackNode!==n)return null;var r=gi(e,e===Me?Oe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Li(e,r);else{t=r;var o=q;q|=2;var i=_p();(Me!==e||Oe!==t)&&(_t=null,dr=Se()+500,kn(e,t));do try{og();break}catch(a){Tp(e,a)}while(1);bs(),ji.current=i,q=o,ke!==null?t=0:(Me=null,Oe=0,t=Ce)}if(t!==0){if(t===2&&(o=da(e),o!==0&&(r=o,t=Ia(e,o))),t===1)throw n=ho,kn(e,0),Qt(e,r),Ke(e,Se()),n;if(t===6)Qt(e,r);else{if(o=e.current.alternate,!(r&30)&&!ng(o)&&(t=Li(e,r),t===2&&(i=da(e),i!==0&&(r=i,t=Ia(e,i))),t===1))throw n=ho,kn(e,0),Qt(e,r),Ke(e,Se()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:vn(e,Ve,_t);break;case 3:if(Qt(e,r),(r&130023424)===r&&(t=tu+500-Se(),10<t)){if(gi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=xa(vn.bind(null,e,Ve,_t),t);break}vn(e,Ve,_t);break;case 4:if(Qt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-ht(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tg(r/1960))-r,10<r){e.timeoutHandle=xa(vn.bind(null,e,Ve,_t),r);break}vn(e,Ve,_t);break;case 5:vn(e,Ve,_t);break;default:throw Error(M(329))}}}return Ke(e,Se()),e.callbackNode===n?Np.bind(null,e):null}function Ia(e,t){var n=Yr;return e.current.memoizedState.isDehydrated&&(kn(e,t).flags|=256),e=Li(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&ba(t)),e}function ba(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function ng(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!vt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qt(e,t){for(t&=~eu,t&=~el,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ht(t),r=1<<n;e[n]=-1,t&=~r}}function Fc(e){if(q&6)throw Error(M(327));rr();var t=gi(e,0);if(!(t&1))return Ke(e,Se()),null;var n=Li(e,t);if(e.tag!==0&&n===2){var r=da(e);r!==0&&(t=r,n=Ia(e,r))}if(n===1)throw n=ho,kn(e,0),Qt(e,t),Ke(e,Se()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,vn(e,Ve,_t),Ke(e,Se()),null}function nu(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(dr=Se()+500,Xi&&fn())}}function jn(e){Kt!==null&&Kt.tag===0&&!(q&6)&&rr();var t=q;q|=1;var n=it.transition,r=ne;try{if(it.transition=null,ne=1,e)return e()}finally{ne=r,it.transition=n,q=t,!(q&6)&&fn()}}function ru(){Xe=Xn.current,de(Xn)}function kn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Om(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(As(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Si();break;case 3:ur(),de(Qe),de(De),Gs();break;case 5:Vs(r);break;case 4:ur();break;case 13:de(ve);break;case 19:de(ve);break;case 10:Bs(r.type._context);break;case 22:case 23:ru()}n=n.return}if(Me=e,ke=e=on(e.current,null),Oe=Xe=t,Ce=0,ho=null,eu=el=Mn=0,Ve=Yr=null,xn!==null){for(t=0;t<xn.length;t++)if(n=xn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}xn=null}return e}function Tp(e,t){do{var n=ke;try{if(bs(),ti.current=Mi,_i){for(var r=ye.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}_i=!1}if(_n=0,Te=Pe=ye=null,Gr=!1,co=0,Js.current=null,n===null||n.return===null){Ce=1,ho=t,ke=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=Oe,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=wc(l);if(v!==null){v.flags&=-257,Sc(v,l,a,i,t),v.mode&1&&xc(i,u,t),t=v,s=u;var g=t.updateQueue;if(g===null){var $=new Set;$.add(s),t.updateQueue=$}else g.add(s);break e}else{if(!(t&1)){xc(i,u,t),ou();break e}s=Error(M(426))}}else if(he&&a.mode&1){var k=wc(l);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Sc(k,l,a,i,t),Ds(cr(s,a));break e}}i=s=cr(s,a),Ce!==4&&(Ce=2),Yr===null?Yr=[i]:Yr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=dp(i,s,t);fc(i,f);break e;case 1:a=s;var c=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(nn===null||!nn.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=fp(i,a,t);fc(i,w);break e}}i=i.return}while(i!==null)}jp(n)}catch(S){t=S,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function _p(){var e=ji.current;return ji.current=Mi,e===null?Mi:e}function ou(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Me===null||!(Mn&268435455)&&!(el&268435455)||Qt(Me,Oe)}function Li(e,t){var n=q;q|=2;var r=_p();(Me!==e||Oe!==t)&&(_t=null,kn(e,t));do try{rg();break}catch(o){Tp(e,o)}while(1);if(bs(),q=n,ji.current=r,ke!==null)throw Error(M(261));return Me=null,Oe=0,Ce}function rg(){for(;ke!==null;)Mp(ke)}function og(){for(;ke!==null&&!_0();)Mp(ke)}function Mp(e){var t=Fp(e.alternate,e,Xe);e.memoizedProps=e.pendingProps,t===null?jp(e):ke=t,Js.current=null}function jp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Zm(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,ke=null;return}}else if(n=Xm(n,t,Xe),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ce===0&&(Ce=5)}function vn(e,t,n){var r=ne,o=it.transition;try{it.transition=null,ne=1,ig(e,t,n,r)}finally{it.transition=o,ne=r}return null}function ig(e,t,n,r){do rr();while(Kt!==null);if(q&6)throw Error(M(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(I0(e,i),e===Me&&(ke=Me=null,Oe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Go||(Go=!0,Lp(mi,function(){return rr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=it.transition,it.transition=null;var l=ne;ne=1;var a=q;q|=4,Js.current=null,Jm(e,n),Pp(n,e),Pm(va),vi=!!ga,va=ga=null,e.current=n,eg(n),M0(),q=a,ne=l,it.transition=i}else e.current=n;if(Go&&(Go=!1,Kt=e,Fi=o),i=e.pendingLanes,i===0&&(nn=null),F0(n.stateNode),Ke(e,Se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Oi)throw Oi=!1,e=Aa,Aa=null,e;return Fi&1&&e.tag!==0&&rr(),i=e.pendingLanes,i&1?e===Da?Kr++:(Kr=0,Da=e):Kr=0,fn(),null}function rr(){if(Kt!==null){var e=cf(Fi),t=it.transition,n=ne;try{if(it.transition=null,ne=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,Fi=0,q&6)throw Error(M(331));var o=q;for(q|=4,R=e.current;R!==null;){var i=R,l=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Qr(8,d,i)}var p=d.child;if(p!==null)p.return=d,R=p;else for(;R!==null;){d=R;var h=d.sibling,v=d.return;if($p(d),d===u){R=null;break}if(h!==null){h.return=v,R=h;break}R=v}}}var g=i.alternate;if(g!==null){var $=g.child;if($!==null){g.child=null;do{var k=$.sibling;$.sibling=null,$=k}while($!==null)}}R=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,R=l;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Qr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,R=f;break e}R=i.return}}var c=e.current;for(R=c;R!==null;){l=R;var m=l.child;if(l.subtreeFlags&2064&&m!==null)m.return=l,R=m;else e:for(l=c;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ji(9,a)}}catch(S){we(a,a.return,S)}if(a===l){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(q=o,fn(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Vi,e)}catch{}r=!0}return r}finally{ne=n,it.transition=t}}return!1}function Lc(e,t,n){t=cr(n,t),t=dp(e,t,1),e=tn(e,t,1),t=Be(),e!==null&&(ko(e,1,t),Ke(e,t))}function we(e,t,n){if(e.tag===3)Lc(e,e,n);else for(;t!==null;){if(t.tag===3){Lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nn===null||!nn.has(r))){e=cr(n,e),e=fp(t,e,1),t=tn(t,e,1),e=Be(),t!==null&&(ko(t,1,e),Ke(t,e));break}}t=t.return}}function lg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,Me===e&&(Oe&n)===n&&(Ce===4||Ce===3&&(Oe&130023424)===Oe&&500>Se()-tu?kn(e,0):eu|=n),Ke(e,t)}function Op(e,t){t===0&&(e.mode&1?(t=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):t=1);var n=Be();e=At(e,t),e!==null&&(ko(e,t,n),Ke(e,n))}function ag(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Op(e,n)}function sg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Op(e,n)}var Fp;Fp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qe.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,Km(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,he&&t.flags&1048576&&Rf(t,Ei,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ri(e,t),e=t.pendingProps;var o=lr(t,De.current);nr(t,n),o=Ys(null,t,r,e,o,n);var i=Ks();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(i=!0,$i(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Hs(t),o.updater=Zi,t.stateNode=o,o._reactInternals=t,Ca(t,r,e,n),t=_a(null,t,r,!0,i,n)):(t.tag=0,he&&i&&Rs(t),be(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ri(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=cg(r),e=dt(r,e),o){case 0:t=Ta(null,t,r,e,n);break e;case 1:t=Ec(null,t,r,e,n);break e;case 11:t=$c(null,t,r,e,n);break e;case 14:t=kc(null,t,r,dt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Ta(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),Ec(e,t,r,o,n);case 3:e:{if(gp(t),e===null)throw Error(M(387));r=t.pendingProps,i=t.memoizedState,o=i.element,bf(e,t),Ni(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=cr(Error(M(423)),t),t=Pc(e,t,r,n,o);break e}else if(r!==o){o=cr(Error(M(424)),t),t=Pc(e,t,r,n,o);break e}else for(Ze=en(t.stateNode.containerInfo.firstChild),qe=t,he=!0,pt=null,n=Uf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ar(),r===o){t=Dt(e,t,n);break e}be(e,t,r,n)}t=t.child}return t;case 5:return Vf(t),e===null&&ka(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,ya(r,o)?l=null:i!==null&&ya(r,i)&&(t.flags|=32),mp(e,t),be(e,t,l,n),t.child;case 6:return e===null&&ka(t),null;case 13:return vp(e,t,n);case 4:return Us(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=sr(t,null,r,n):be(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),$c(e,t,r,o,n);case 7:return be(e,t,t.pendingProps,n),t.child;case 8:return be(e,t,t.pendingProps.children,n),t.child;case 12:return be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ie(Pi,r._currentValue),r._currentValue=l,i!==null)if(vt(i.value,l)){if(i.children===o.children&&!Qe.current){t=Dt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=Lt(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Ea(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(M(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ea(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}be(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,nr(t,n),o=lt(o),r=r(o),t.flags|=1,be(e,t,r,n),t.child;case 14:return r=t.type,o=dt(r,t.pendingProps),o=dt(r.type,o),kc(e,t,r,o,n);case 15:return pp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:dt(r,o),ri(e,t),t.tag=1,Ye(r)?(e=!0,$i(t)):e=!1,nr(t,n),Wf(t,r,o),Ca(t,r,o,n),_a(null,t,r,!0,e,n);case 19:return yp(e,t,n);case 22:return hp(e,t,n)}throw Error(M(156,t.tag))};function Lp(e,t){return lf(e,t)}function ug(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new ug(e,t,n,r)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function cg(e){if(typeof e=="function")return iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Es)return 11;if(e===Ps)return 14}return 2}function on(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function li(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")iu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case bn:return En(n.children,o,i,t);case ks:l=8,o|=8;break;case Xl:return e=ot(12,n,t,o|2),e.elementType=Xl,e.lanes=i,e;case Zl:return e=ot(13,n,t,o),e.elementType=Zl,e.lanes=i,e;case ql:return e=ot(19,n,t,o),e.elementType=ql,e.lanes=i,e;case Wd:return tl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case bd:l=10;break e;case Bd:l=9;break e;case Es:l=11;break e;case Ps:l=14;break e;case Ut:l=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=ot(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function En(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function tl(e,t,n,r){return e=ot(22,e,r,t),e.elementType=Wd,e.lanes=n,e.stateNode={isHidden:!1},e}function bl(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function Bl(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function dg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sl(0),this.expirationTimes=Sl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function lu(e,t,n,r,o,i,l,a,s){return e=new dg(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ot(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hs(i),e}function fg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:In,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function zp(e){if(!e)return sn;e=e._reactInternals;e:{if(Ln(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Ye(n))return Lf(e,n,t)}return t}function Rp(e,t,n,r,o,i,l,a,s){return e=lu(n,r,!0,e,o,i,l,a,s),e.context=zp(null),n=e.current,r=Be(),o=rn(n),i=Lt(r,o),i.callback=t??null,tn(n,i,o),e.current.lanes=o,ko(e,o,r),Ke(e,r),e}function nl(e,t,n,r){var o=t.current,i=Be(),l=rn(o);return n=zp(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=tn(o,t,l),e!==null&&(mt(e,o,l,i),ei(e,o,l)),l}function zi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function zc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function au(e,t){zc(e,t),(e=e.alternate)&&zc(e,t)}function pg(){return null}var Ap=typeof reportError=="function"?reportError:function(e){console.error(e)};function su(e){this._internalRoot=e}rl.prototype.render=su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));nl(e,t,null,null)};rl.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){nl(null,e,null,null)}),t[Rt]=null}};function rl(e){this._internalRoot=e}rl.prototype.unstable_scheduleHydration=function(e){if(e){var t=pf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gt.length&&t!==0&&t<Gt[n].priority;n++);Gt.splice(n,0,e),n===0&&mf(e)}};function uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Rc(){}function hg(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=zi(l);i.call(u)}}var l=Rp(t,r,e,0,null,!1,!1,"",Rc);return e._reactRootContainer=l,e[Rt]=l.current,io(e.nodeType===8?e.parentNode:e),jn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=zi(s);a.call(u)}}var s=lu(e,0,!1,null,null,!1,!1,"",Rc);return e._reactRootContainer=s,e[Rt]=s.current,io(e.nodeType===8?e.parentNode:e),jn(function(){nl(t,s,n,r)}),s}function il(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=zi(l);a.call(s)}}nl(t,l,e,o)}else l=hg(n,t,e,o,r);return zi(l)}df=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=zr(t.pendingLanes);n!==0&&(Ts(t,n|1),Ke(t,Se()),!(q&6)&&(dr=Se()+500,fn()))}break;case 13:jn(function(){var r=At(e,1);if(r!==null){var o=Be();mt(r,e,1,o)}}),au(e,1)}};_s=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Be();mt(t,e,134217728,n)}au(e,134217728)}};ff=function(e){if(e.tag===13){var t=rn(e),n=At(e,t);if(n!==null){var r=Be();mt(n,e,t,r)}au(e,t)}};pf=function(){return ne};hf=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};sa=function(e,t,n){switch(t){case"input":if(ta(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Ki(r);if(!o)throw Error(M(90));Ud(r),ta(r,o)}}}break;case"textarea":Gd(e,n);break;case"select":t=n.value,t!=null&&qn(e,!!n.multiple,t,!1)}};Jd=nu;ef=jn;var mg={usingClientEntryPoint:!1,Events:[Po,Un,Ki,Zd,qd,nu]},Mr={findFiberByHostInstance:yn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},gg={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:It.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rf(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||pg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qo.isDisabled&&Qo.supportsFiber)try{Vi=Qo.inject(gg),Et=Qo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mg;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uu(t))throw Error(M(200));return fg(e,t,null,n)};et.createRoot=function(e,t){if(!uu(e))throw Error(M(299));var n=!1,r="",o=Ap;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=lu(e,1,!1,null,null,n,!1,r,o),e[Rt]=t.current,io(e.nodeType===8?e.parentNode:e),new su(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=rf(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return jn(e)};et.hydrate=function(e,t,n){if(!ol(t))throw Error(M(200));return il(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!uu(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Ap;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Rp(t,null,e,1,n??null,o,!1,i,l),e[Rt]=t.current,io(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new rl(t)};et.render=function(e,t,n){if(!ol(t))throw Error(M(200));return il(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!ol(e))throw Error(M(40));return e._reactRootContainer?(jn(function(){il(null,null,e,!1,function(){e._reactRootContainer=null,e[Rt]=null})}),!0):!1};et.unstable_batchedUpdates=nu;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ol(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return il(e,t,n,!1,r)};et.version="18.2.0-next-9e3b772b8-20220608";function Dp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dp)}catch(e){console.error(e)}}Dp(),zd.exports=et;var ll=zd.exports,Ac=ll;Yl.createRoot=Ac.createRoot,Yl.hydrateRoot=Ac.hydrateRoot;var Ae=function(){return Ae=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ae.apply(this,arguments)};function mo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var ce="-ms-",Xr="-moz-",ee="-webkit-",Ip="comm",al="rule",cu="decl",vg="@import",bp="@keyframes",yg="@layer",xg=Math.abs,du=String.fromCharCode,Ba=Object.assign;function wg(e,t){return _e(e,0)^45?(((t<<2^_e(e,0))<<2^_e(e,1))<<2^_e(e,2))<<2^_e(e,3):0}function Bp(e){return e.trim()}function Mt(e,t){return(e=t.exec(e))?e[0]:e}function G(e,t,n){return e.replace(t,n)}function ai(e,t){return e.indexOf(t)}function _e(e,t){return e.charCodeAt(t)|0}function fr(e,t,n){return e.slice(t,n)}function $t(e){return e.length}function Wp(e){return e.length}function Ar(e,t){return t.push(e),e}function Sg(e,t){return e.map(t).join("")}function Dc(e,t){return e.filter(function(n){return!Mt(n,t)})}var sl=1,pr=1,Hp=0,st=0,$e=0,xr="";function ul(e,t,n,r,o,i,l,a){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:sl,column:pr,length:l,return:"",siblings:a}}function Ht(e,t){return Ba(ul("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function An(e){for(;e.root;)e=Ht(e.root,{children:[e]});Ar(e,e.siblings)}function $g(){return $e}function kg(){return $e=st>0?_e(xr,--st):0,pr--,$e===10&&(pr=1,sl--),$e}function gt(){return $e=st<Hp?_e(xr,st++):0,pr++,$e===10&&(pr=1,sl++),$e}function Pn(){return _e(xr,st)}function si(){return st}function cl(e,t){return fr(xr,e,t)}function Wa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Eg(e){return sl=pr=1,Hp=$t(xr=e),st=0,[]}function Pg(e){return xr="",e}function Wl(e){return Bp(cl(st-1,Ha(e===91?e+2:e===40?e+1:e)))}function Cg(e){for(;($e=Pn())&&$e<33;)gt();return Wa(e)>2||Wa($e)>3?"":" "}function Ng(e,t){for(;--t&&gt()&&!($e<48||$e>102||$e>57&&$e<65||$e>70&&$e<97););return cl(e,si()+(t<6&&Pn()==32&&gt()==32))}function Ha(e){for(;gt();)switch($e){case e:return st;case 34:case 39:e!==34&&e!==39&&Ha($e);break;case 40:e===41&&Ha(e);break;case 92:gt();break}return st}function Tg(e,t){for(;gt()&&e+$e!==47+10;)if(e+$e===42+42&&Pn()===47)break;return"/*"+cl(t,st-1)+"*"+du(e===47?e:gt())}function _g(e){for(;!Wa(Pn());)gt();return cl(e,st)}function Mg(e){return Pg(ui("",null,null,null,[""],e=Eg(e),0,[0],e))}function ui(e,t,n,r,o,i,l,a,s){for(var u=0,d=0,p=l,h=0,v=0,g=0,$=1,k=1,f=1,c=0,m="",w=o,S=i,E=r,P=m;k;)switch(g=c,c=gt()){case 40:if(g!=108&&_e(P,p-1)==58){ai(P+=G(Wl(c),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:P+=Wl(c);break;case 9:case 10:case 13:case 32:P+=Cg(g);break;case 92:P+=Ng(si()-1,7);continue;case 47:switch(Pn()){case 42:case 47:Ar(jg(Tg(gt(),si()),t,n,s),s);break;default:P+="/"}break;case 123*$:a[u++]=$t(P)*f;case 125*$:case 59:case 0:switch(c){case 0:case 125:k=0;case 59+d:f==-1&&(P=G(P,/\f/g,"")),v>0&&$t(P)-p&&Ar(v>32?bc(P+";",r,n,p-1,s):bc(G(P," ","")+";",r,n,p-2,s),s);break;case 59:P+=";";default:if(Ar(E=Ic(P,t,n,u,d,o,a,m,w=[],S=[],p,i),i),c===123)if(d===0)ui(P,t,E,E,w,i,p,a,S);else switch(h===99&&_e(P,3)===110?100:h){case 100:case 108:case 109:case 115:ui(e,E,E,r&&Ar(Ic(e,E,E,0,0,o,a,m,o,w=[],p,S),S),o,S,p,a,r?w:S);break;default:ui(P,E,E,E,[""],S,0,a,S)}}u=d=v=0,$=f=1,m=P="",p=l;break;case 58:p=1+$t(P),v=g;default:if($<1){if(c==123)--$;else if(c==125&&$++==0&&kg()==125)continue}switch(P+=du(c),c*$){case 38:f=d>0?1:(P+="\f",-1);break;case 44:a[u++]=($t(P)-1)*f,f=1;break;case 64:Pn()===45&&(P+=Wl(gt())),h=Pn(),d=p=$t(m=P+=_g(si())),c++;break;case 45:g===45&&$t(P)==2&&($=0)}}return i}function Ic(e,t,n,r,o,i,l,a,s,u,d,p){for(var h=o-1,v=o===0?i:[""],g=Wp(v),$=0,k=0,f=0;$<r;++$)for(var c=0,m=fr(e,h+1,h=xg(k=l[$])),w=e;c<g;++c)(w=Bp(k>0?v[c]+" "+m:G(m,/&\f/g,v[c])))&&(s[f++]=w);return ul(e,t,n,o===0?al:a,s,u,d,p)}function jg(e,t,n,r){return ul(e,t,n,Ip,du($g()),fr(e,2,-2),0,r)}function bc(e,t,n,r,o){return ul(e,t,n,cu,fr(e,0,r),fr(e,r+1,-1),r,o)}function Up(e,t,n){switch(wg(e,t)){case 5103:return ee+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+e+e;case 4789:return Xr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+e+Xr+e+ce+e+e;case 5936:switch(_e(e,t+11)){case 114:return ee+e+ce+G(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ee+e+ce+G(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ee+e+ce+G(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ee+e+ce+e+e;case 6165:return ee+e+ce+"flex-"+e+e;case 5187:return ee+e+G(e,/(\w+).+(:[^]+)/,ee+"box-$1$2"+ce+"flex-$1$2")+e;case 5443:return ee+e+ce+"flex-item-"+G(e,/flex-|-self/g,"")+(Mt(e,/flex-|baseline/)?"":ce+"grid-row-"+G(e,/flex-|-self/g,""))+e;case 4675:return ee+e+ce+"flex-line-pack"+G(e,/align-content|flex-|-self/g,"")+e;case 5548:return ee+e+ce+G(e,"shrink","negative")+e;case 5292:return ee+e+ce+G(e,"basis","preferred-size")+e;case 6060:return ee+"box-"+G(e,"-grow","")+ee+e+ce+G(e,"grow","positive")+e;case 4554:return ee+G(e,/([^-])(transform)/g,"$1"+ee+"$2")+e;case 6187:return G(G(G(e,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),e,"")+e;case 5495:case 3959:return G(e,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return G(G(e,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+ce+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+e+e;case 4200:if(!Mt(e,/flex-|baseline/))return ce+"grid-column-align"+fr(e,t)+e;break;case 2592:case 3360:return ce+G(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,Mt(r.props,/grid-\w+-end/)})?~ai(e+(n=n[t].value),"span")?e:ce+G(e,"-start","")+e+ce+"grid-row-span:"+(~ai(n,"span")?Mt(n,/\d+/):+Mt(n,/\d+/)-+Mt(e,/\d+/))+";":ce+G(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return Mt(r.props,/grid-\w+-start/)})?e:ce+G(G(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return G(e,/(.+)-inline(.+)/,ee+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if($t(e)-1-t>6)switch(_e(e,t+1)){case 109:if(_e(e,t+4)!==45)break;case 102:return G(e,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+Xr+(_e(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ai(e,"stretch")?Up(G(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return G(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,a,s,u){return ce+o+":"+i+u+(l?ce+o+"-span:"+(a?s:+s-+i)+u:"")+e});case 4949:if(_e(e,t+6)===121)return G(e,":",":"+ee)+e;break;case 6444:switch(_e(e,_e(e,14)===45?18:11)){case 120:return G(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ee+(_e(e,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+ce+"$2box$3")+e;case 100:return G(e,":",":"+ce)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return G(e,"scroll-","scroll-snap-")+e}return e}function Ri(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Og(e,t,n,r){switch(e.type){case yg:if(e.children.length)break;case vg:case cu:return e.return=e.return||e.value;case Ip:return"";case bp:return e.return=e.value+"{"+Ri(e.children,r)+"}";case al:if(!$t(e.value=e.props.join(",")))return""}return $t(n=Ri(e.children,r))?e.return=e.value+"{"+n+"}":""}function Fg(e){var t=Wp(e);return function(n,r,o,i){for(var l="",a=0;a<t;a++)l+=e[a](n,r,o,i)||"";return l}}function Lg(e){return function(t){t.root||(t=t.return)&&e(t)}}function zg(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case cu:e.return=Up(e.value,e.length,n);return;case bp:return Ri([Ht(e,{value:G(e.value,"@","@"+ee)})],r);case al:if(e.length)return Sg(n=e.props,function(o){switch(Mt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":An(Ht(e,{props:[G(o,/:(read-\w+)/,":"+Xr+"$1")]})),An(Ht(e,{props:[o]})),Ba(e,{props:Dc(n,r)});break;case"::placeholder":An(Ht(e,{props:[G(o,/:(plac\w+)/,":"+ee+"input-$1")]})),An(Ht(e,{props:[G(o,/:(plac\w+)/,":"+Xr+"$1")]})),An(Ht(e,{props:[G(o,/:(plac\w+)/,ce+"input-$1")]})),An(Ht(e,{props:[o]})),Ba(e,{props:Dc(n,r)});break}return""})}}var Rg={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",fu=typeof window<"u"&&"HTMLElement"in window,Ag=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),dl=Object.freeze([]),mr=Object.freeze({});function Dg(e,t,n){return n===void 0&&(n=mr),e.theme!==n.theme&&e.theme||t||n.theme}var Vp=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ig=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,bg=/(^-|-$)/g;function Bc(e){return e.replace(Ig,"-").replace(bg,"")}var Bg=/(a)(d)/gi,Wc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ua(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Wc(t%52)+n;return(Wc(t%52)+n).replace(Bg,"$1-$2")}var Hl,Zn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Gp=function(e){return Zn(5381,e)};function Qp(e){return Ua(Gp(e)>>>0)}function Wg(e){return e.displayName||e.name||"Component"}function Ul(e){return typeof e=="string"&&!0}var Yp=typeof Symbol=="function"&&Symbol.for,Kp=Yp?Symbol.for("react.memo"):60115,Hg=Yp?Symbol.for("react.forward_ref"):60112,Ug={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Gg=((Hl={})[Hg]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hl[Kp]=Xp,Hl);function Hc(e){return("type"in(t=e)&&t.type.$$typeof)===Kp?Xp:"$$typeof"in e?Gg[e.$$typeof]:Ug;var t}var Qg=Object.defineProperty,Yg=Object.getOwnPropertyNames,Uc=Object.getOwnPropertySymbols,Kg=Object.getOwnPropertyDescriptor,Xg=Object.getPrototypeOf,Vc=Object.prototype;function Zp(e,t,n){if(typeof t!="string"){if(Vc){var r=Xg(t);r&&r!==Vc&&Zp(e,r,n)}var o=Yg(t);Uc&&(o=o.concat(Uc(t)));for(var i=Hc(e),l=Hc(t),a=0;a<o.length;++a){var s=o[a];if(!(s in Vg||n&&n[s]||l&&s in l||i&&s in i)){var u=Kg(t,s);try{Qg(e,s,u)}catch{}}}}return e}function On(e){return typeof e=="function"}function pu(e){return typeof e=="object"&&"styledComponentId"in e}function Sn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Va(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function go(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ga(e,t,n){if(n===void 0&&(n=!1),!n&&!go(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Ga(e[r],t[r]);else if(go(t))for(var r in t)e[r]=Ga(e[r],t[r]);return e}function hu(e,t){Object.defineProperty(e,"toString",{value:t})}function un(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Zg=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw un(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(t+1),s=(l=0,n.length);l<s;l++)this.tag.insertRule(a,n[l])&&(this.groupSizes[t]++,a++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(`/*!sc*/
`);return n},e}(),ci=new Map,Ai=new Map,di=1,Yo=function(e){if(ci.has(e))return ci.get(e);for(;Ai.has(di);)di++;var t=di++;return ci.set(e,t),Ai.set(t,e),t},qg=function(e,t){di=t+1,ci.set(e,t),Ai.set(t,e)},Jg="style[".concat(hr,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),e1=new RegExp("^".concat(hr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),t1=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},n1=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),o=[],i=0,l=r.length;i<l;i++){var a=r[i].trim();if(a){var s=a.match(e1);if(s){var u=0|parseInt(s[1],10),d=s[2];u!==0&&(qg(d,u),t1(e,d,s[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(a)}}};function r1(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qp=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){var s=Array.from(a.querySelectorAll("style[".concat(hr,"]")));return s[s.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(hr,"active"),r.setAttribute("data-styled-version","6.1.1");var l=r1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},o1=function(){function e(t){this.element=qp(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw un(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),i1=function(){function e(t){this.element=qp(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),l1=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Gc=fu,a1={isServer:!fu,useCSSOMInjection:!Ag},Jp=function(){function e(t,n,r){t===void 0&&(t=mr),n===void 0&&(n={});var o=this;this.options=Ae(Ae({},a1),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&fu&&Gc&&(Gc=!1,function(i){for(var l=document.querySelectorAll(Jg),a=0,s=l.length;a<s;a++){var u=l[a];u&&u.getAttribute(hr)!=="active"&&(n1(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),hu(this,function(){return function(i){for(var l=i.getTag(),a=l.length,s="",u=function(p){var h=function(f){return Ai.get(f)}(p);if(h===void 0)return"continue";var v=i.names.get(h),g=l.getGroup(p);if(v===void 0||g.length===0)return"continue";var $="".concat(hr,".g").concat(p,'[id="').concat(h,'"]'),k="";v!==void 0&&v.forEach(function(f){f.length>0&&(k+="".concat(f,","))}),s+="".concat(g).concat($,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},d=0;d<a;d++)u(d);return s}(o)})}return e.registerId=function(t){return Yo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ae(Ae({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new l1(o):r?new o1(o):new i1(o)}(this.options),new Zg(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Yo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Yo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Yo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),s1=/&/g,u1=/^\s*\/\/.*$/gm;function eh(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=eh(n.children,t)),n})}function c1(e){var t,n,r,o=e===void 0?mr:e,i=o.options,l=i===void 0?mr:i,a=o.plugins,s=a===void 0?dl:a,u=function(h,v,g){return g===n||g.startsWith(n)&&g.endsWith(n)&&g.replaceAll(n,"").length>0?".".concat(t):h},d=s.slice();d.push(function(h){h.type===al&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(s1,n).replace(r,u))}),l.prefix&&d.push(zg),d.push(Og);var p=function(h,v,g,$){v===void 0&&(v=""),g===void 0&&(g=""),$===void 0&&($="&"),t=$,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var k=h.replace(u1,""),f=Mg(g||v?"".concat(g," ").concat(v," { ").concat(k," }"):k);l.namespace&&(f=eh(f,l.namespace));var c=[];return Ri(f,Fg(d.concat(Lg(function(m){return c.push(m)})))),c};return p.hash=s.length?s.reduce(function(h,v){return v.name||un(15),Zn(h,v.name)},5381).toString():"",p}var d1=new Jp,Qa=c1(),th=ln.createContext({shouldForwardProp:void 0,styleSheet:d1,stylis:Qa});th.Consumer;ln.createContext(void 0);function Qc(){return x.useContext(th)}var nh=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Qa);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,hu(this,function(){throw un(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Qa),this.name+t.hash},e}(),f1=function(e){return e>="A"&&e<="Z"};function Yc(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;f1(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rh=function(e){return e==null||e===!1||e===""},oh=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!rh(i)&&(Array.isArray(i)&&i.isCss||On(i)?r.push("".concat(Yc(o),":"),i,";"):go(i)?r.push.apply(r,mo(mo(["".concat(o," {")],oh(i),!1),["}"],!1)):r.push("".concat(Yc(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Rg||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Cn(e,t,n,r){if(rh(e))return[];if(pu(e))return[".".concat(e.styledComponentId)];if(On(e)){if(!On(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return Cn(o,t,n,r)}var i;return e instanceof nh?n?(e.inject(n,r),[e.getName(r)]):[e]:go(e)?oh(e):Array.isArray(e)?Array.prototype.concat.apply(dl,e.map(function(l){return Cn(l,t,n,r)})):[e.toString()]}function p1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(On(n)&&!pu(n))return!1}return!0}var h1=Gp("6.1.1"),m1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&p1(t),this.componentId=n,this.baseHash=Zn(h1,n),this.baseStyle=r,Jp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Sn(o,this.staticRulesId);else{var i=Va(Cn(this.rules,t,n,r)),l=Ua(Zn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var a=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,a)}o=Sn(o,l),this.staticRulesId=l}else{for(var s=Zn(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var h=Va(Cn(p,t,n,r));s=Zn(s,h+d),u+=h}}if(u){var v=Ua(s>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(u,".".concat(v),void 0,this.componentId)),o=Sn(o,v)}}return o},e}(),vo=ln.createContext(void 0);vo.Consumer;function ih(){var e=x.useContext(vo);if(!e)throw un(18);return e}function g1(e){var t=ln.useContext(vo),n=x.useMemo(function(){return function(r,o){if(!r)throw un(14);if(On(r)){var i=r(o);return i}if(Array.isArray(r)||typeof r!="object")throw un(8);return o?Ae(Ae({},o),r):r}(e.theme,t)},[e.theme,t]);return e.children?ln.createElement(vo.Provider,{value:n},e.children):null}var Vl={};function v1(e,t,n){var r=pu(e),o=e,i=!Ul(e),l=t.attrs,a=l===void 0?dl:l,s=t.componentId,u=s===void 0?function(w,S){var E=typeof w!="string"?"sc":Bc(w);Vl[E]=(Vl[E]||0)+1;var P="".concat(E,"-").concat(Qp("6.1.1"+E+Vl[E]));return S?"".concat(S,"-").concat(P):P}(t.displayName,t.parentComponentId):s,d=t.displayName,p=d===void 0?function(w){return Ul(w)?"styled.".concat(w):"Styled(".concat(Wg(w),")")}(e):d,h=t.displayName&&t.componentId?"".concat(Bc(t.displayName),"-").concat(t.componentId):t.componentId||u,v=r&&o.attrs?o.attrs.concat(a).filter(Boolean):a,g=t.shouldForwardProp;if(r&&o.shouldForwardProp){var $=o.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;g=function(w,S){return $(w,S)&&k(w,S)}}else g=$}var f=new m1(n,h,r?o.componentStyle:void 0);function c(w,S){return function(E,P,T){var W=E.attrs,A=E.componentStyle,K=E.defaultProps,le=E.foldedComponentIds,X=E.styledComponentId,pe=E.target,Z=ln.useContext(vo),D=Qc(),b=E.shouldForwardProp||D.shouldForwardProp,C=function(te,re,ge){for(var Ee,Nt=Ae(Ae({},re),{className:void 0,theme:ge}),wr=0;wr<te.length;wr+=1){var pn=On(Ee=te[wr])?Ee(Nt):Ee;for(var yt in pn)Nt[yt]=yt==="className"?Sn(Nt[yt],pn[yt]):yt==="style"?Ae(Ae({},Nt[yt]),pn[yt]):pn[yt]}return re.className&&(Nt.className=Sn(Nt.className,re.className)),Nt}(W,P,Dg(P,Z,K)||mr),F=C.as||pe,L={};for(var I in C)C[I]===void 0||I[0]==="$"||I==="as"||I==="theme"||(I==="forwardedAs"?L.as=C.forwardedAs:b&&!b(I,F)||(L[I]=C[I]));var U=function(te,re){var ge=Qc(),Ee=te.generateAndInjectStyles(re,ge.styleSheet,ge.stylis);return Ee}(A,C),me=Sn(le,X);return U&&(me+=" "+U),C.className&&(me+=" "+C.className),L[Ul(F)&&!Vp.has(F)?"class":"className"]=me,L.ref=T,x.createElement(F,L)}(m,w,S)}c.displayName=p;var m=ln.forwardRef(c);return m.attrs=v,m.componentStyle=f,m.displayName=p,m.shouldForwardProp=g,m.foldedComponentIds=r?Sn(o.foldedComponentIds,o.styledComponentId):"",m.styledComponentId=h,m.target=r?o.target:e,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(w){this._foldedDefaultProps=r?function(S){for(var E=[],P=1;P<arguments.length;P++)E[P-1]=arguments[P];for(var T=0,W=E;T<W.length;T++)Ga(S,W[T],!0);return S}({},o.defaultProps,w):w}}),hu(m,function(){return".".concat(m.styledComponentId)}),i&&Zp(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function Kc(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Xc=function(e){return Object.assign(e,{isCss:!0})};function _(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(On(e)||go(e)){var r=e;return Xc(Cn(Kc(dl,mo([r],t,!0))))}var o=e;return t.length===0&&o.length===1&&typeof o[0]=="string"?Cn(o):Xc(Cn(Kc(o,t)))}function Ya(e,t,n){if(n===void 0&&(n=mr),!t)throw un(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,_.apply(void 0,mo([o],i,!1)))};return r.attrs=function(o){return Ya(e,t,Ae(Ae({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return Ya(e,t,Ae(Ae({},n),o))},r}var lh=function(e){return Ya(v1,e)},j=lh;Vp.forEach(function(e){j[e]=lh(e)});function ah(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Va(_.apply(void 0,mo([e],t,!1))),o=Qp(r);return new nh(o,r)}const y1={"Neutral/Neutral 00":"#FFFFFF","Neutral/Neutral 05":"#F3F4F6","Neutral/Neutral 10":"#E5E7EB","Neutral/Neutral 20":"#D5D8DE","Neutral/Neutral 30":"#B0B5BD","Neutral/Neutral 40":"#9BA0AA","Neutral/Neutral 50":"#717681","Neutral/Neutral 60":"#646973","Neutral/Neutral 70":"#4F525A","Neutral/Neutral 80":"#35383F","Neutral/Neutral 90":"#23262D","Primary/Primary 10":"#EDF5FF","Primary/Primary 20":"#DDE9FF","Primary/Primary 30":"#A7C7FF","Primary/Primary 40":"#6FA3FF","Primary/Primary 50":"#3A85FF","Primary/Primary 60 Main":"#0062FF","Primary/Primary 70":"#0046E2","Primary/Primary 80":"#0132B0","Special/Static White":"#FFFFFF","Special/Elevated BG":"#FFFFFF","Special/Dark Static Neutral 00":"#121316","Special/Dark Static Neutral 05":"#1C1E22","Special/Dark Static Neutral 10":"#282A2F","Special/Dark Static Neutral 20":"#383C44","Special/Dark Static Neutral 30":"#4E535D","Special/Dark Static Neutral 50":"#7F8692","Special/Dark Static Neutral 70":"#A6ABB4","Special/Dark Static Neutral 80":"#C7CAD1","Special/Dark Static Neutral 90":"#E2E5E9","Special/Dark Static Primary 60":"#3984FF","Special/Dark Static Primary 70":"#5290FF","Special/Dark Static Primary 80":"#689FFF","Special/Dark Static Error 60":"#EA3C3C","Special/Dark Static Success 50":"#16913F","Opacity/Hover":"#0000000D","Opacity/Focus":"#00000017","Opacity/Press":"#0000001F","Opacity/Modal":"#00000066","Opacity/Dark Static Hover":"#FFFFFF0F","Opacity/Dark Static Focus":"#FFFFFF17","Opacity/Dark Static Press":"#FFFFFF1F","Error/Error 10":"#FFEFEF","Error/Error 20":"#FFDDDD","Error/Error 30":"#FFA7A7","Error/Error 40":"#FF7C7C","Error/Error 50":"#F64E4E","Error/Error 60 Main":"#D92020","Error/Error 70":"#BA1717","Error/Error 80":"#981111","Success/Success 10":"#EAFCF1","Success/Success 20":"#C3F4D3","Success/Success 30":"#80DCA0","Success/Success 40":"#32C665","Success/Success 50 Main":"#1BA049","Success/Success 60":"#128238","Success/Success 70":"#0B682A","Warning/Warning 10":"#FFF1E5","Warning/Warning 20":"#FFDECE","Warning/Warning 30":"#FFB799","Warning/Warning 40":"#FF8D64","Warning/Warning 50 Main":"#FF5C22","Warning/Warning 60":"#D63F09","Warning/Warning 70":"#A63208","Attention/Attention 10":"#FEF5D7","Attention/Attention 20":"#FEE7A0","Attention/Attention 30":"#FDDD77","Attention/Attention 40":"#FDD14C","Attention/Attention 50 Main":"#FFC400","Attention/Attention 60":"#F0B902","Attention/Attention 70":"#DFAB00","Purple/Purple 10":"#F6F2FF","Purple/Purple 20":"#EBE0FF","Purple/Purple 30":"#D4BBFF","Purple/Purple 40":"#BE95FF","Purple/Purple 50":"#A56EFF","Purple/Purple 60 Main":"#8A3FFC","Purple/Purple 70":"#6929C4","Purple/Purple 80":"#491D8B","Magenta/Magenta 10":"#FFF0F7","Magenta/Magenta 20":"#FFDBEB","Magenta/Magenta 30":"#FFAFD2","Magenta/Magenta 40":"#FF7EB6","Magenta/Magenta 50":"#EE5396","Magenta/Magenta 60 Main":"#D02670","Magenta/Magenta 70":"#9F1853","Magenta/Magenta 80":"#740937","Cyan/Cyan 10":"#E5F6FF","Cyan/Cyan 20":"#C4EAFF","Cyan/Cyan 30":"#82CFFF","Cyan/Cyan 40":"#33B1FF","Cyan/Cyan 50":"#1192E8","Cyan/Cyan 60 Main":"#0072C3","Cyan/Cyan 70":"#00539A","Cyan/Cyan 80":"#003A6D","Teal/Teal 10":"#D9FBFB","Teal/Teal 20":"#B0F0F0","Teal/Teal 30":"#3DDBD9","Teal/Teal 40":"#08BDBA","Teal/Teal 50":"#009D9A","Teal/Teal 60 Main":"#007D79","Teal/Teal 70":"#005D5D","Teal/Teal 80":"#004144"},x1={"Shadow 02":`
  box-shadow: 0px 0.9px 2px rgba(0, 0, 0, 0.28);
`,"Shadow 04":`
  box-shadow: 0px 0.2px 0.9px 0.3px rgba(0, 0, 0, 0.12), 0px 1.6px 3.6px rgba(0, 0, 0, 0.14);
`,"Shadow 08":`
  box-shadow: 0px -1.5px 6px rgba(0, 0, 0, 0.06), 0px 0.6px 1.8px rgba(0, 0, 0, 0.1), 0px 3.2px 9px rgba(0, 0, 0, 0.16);
`,"Shadow 12":`
  box-shadow: 0px 1.2px 12px rgba(0, 0, 0, 0.1), 0px 4px 18px rgba(0, 0, 0, 0.08), 0px 0.8px 1.8px rgba(0, 0, 0, 0.04);
`,"Shadow 16":`
  box-shadow: 0px 1.2px 18px rgba(0, 0, 0, 0.08), 0px 6.4px 28px rgba(0, 0, 0, 0.12);
`,"Shadow Stroke":`
  box-shadow: inset 0px -1px 0px #D6D8DD;
`},w1={spinner:100,tooltip:100,notification:99,hint:98,dropdown:97,modal:96,drawer:96},Zc={firstDayOfWeek:1,badge:{amountAriaLabel:"Amount"},calendar:{backwardText:"Back",forwardText:"Forward",nextMonthText:"Next month",previousMonthText:"Previous month",returnText:"Return",selectYearText:"Select year",selectMonthText:"Select month"},fileInput:{metricUnits:["Kb","Mb","Gb"]},groupActionsPane:{inputPlaceholder:"Search in table"},hint:{closeButtonAriaLabel:"Close the hint"},modal:{closeButtonAriaLabel:"Close the modal window"},paginationOne:{itemsPerPageText:"Entries on the page:",pageSelectLabel:(e,t)=>`Page ${e} of ${t}`,pageSizeSelectLabel:(e,t)=>`Entries ${e} out of ${t}`,itemRangeText:(e,t,n)=>`${e}–${t}  entries out of ${n}`,pageRangeText:e=>`from ${e} ${e===1?"page":"pages"}`,backwardText:"Previous page, select",forwardText:"Next page, select"},paginationTwo:{inputPlaceholder:"Page number",itemRangeText:(e,t,n)=>`${e}–${t} entries out of ${n}`},progressStepper:{renderNextStepName:e=>`Next - ${e}`,stepName:["step","steps"],progressText:(e,t,n)=>`${e} from ${t} ${n}`},select:{emptyMessage:"No matches"},suggestInput:{emptyMessage:"No matches"},table:{emptyMessage:"No matches"}},S1={ru:{firstDayOfWeek:1,badge:{amountAriaLabel:"Количество"},calendar:{backwardText:"Назад",forwardText:"Вперед",nextMonthText:"Следующий месяц",previousMonthText:"Предыдущий месяц",returnText:"Вернуться",selectYearText:"Выбор года",selectMonthText:"Выбор месяца"},fileInput:{metricUnits:["Кб","Мб","Гб"]},groupActionsPane:{inputPlaceholder:"Искать в таблице"},hint:{closeButtonAriaLabel:"Закрыть подсказку"},modal:{closeButtonAriaLabel:"Закрыть модальное окно"},paginationOne:{itemsPerPageText:"Записей на странице:",pageSelectLabel:(e,t)=>`Страница ${e} из ${t}`,pageSizeSelectLabel:(e,t)=>`Записей ${e} из ${t}`,itemRangeText:(e,t,n)=>`${e}–${t} записей из ${n}`,pageRangeText:e=>`из ${e} ${e===1?"страницы":"страниц"}`,backwardText:"Предыдущая страница, выбрать",forwardText:"Следующая страница, выбрать"},paginationTwo:{inputPlaceholder:"№ страницы",itemRangeText:(e,t,n)=>`${e}–${t} записей из ${n}`},progressStepper:{renderNextStepName:e=>`Далее - ${e}`,stepName:["шаг","шагов"],progressText:(e,t,n)=>`${e} из ${t} ${n}`},select:{emptyMessage:"Нет совпадений"},suggestInput:{emptyMessage:"Нет совпадений"},table:{emptyMessage:"Нет совпадений"}},en:Zc,"en-US":{...Zc,firstDayOfWeek:0}},mu={color:y1,shadow:x1,zIndex:w1,name:"light",shape:{borderRadiusKind:"Border radius 4"},currentLocale:"ru",locales:S1};function fl(e){switch(e.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function No(e){switch(e.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function $1(e){switch(e.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}function qc(e){return e!==null&&!Array.isArray(e)&&typeof e=="object"}const Di={3:"Cancel",6:"Help",8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",28:"Convert",29:"NonConvert",30:"Accept",31:"ModeChange",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",41:"Select",42:"Print",43:"Execute",44:"PrintScreen",45:"Insert",46:"Delete",48:["0",")"],49:["1","!"],50:["2","@"],51:["3","#"],52:["4","$"],53:["5","%"],54:["6","^"],55:["7","&"],56:["8","*"],57:["9","("],91:"OS",93:"ContextMenu",144:"NumLock",145:"ScrollLock",181:"VolumeMute",182:"VolumeDown",183:"VolumeUp",186:[";",":"],187:["=","+"],188:[",","<"],189:["-","_"],190:[".",">"],191:["/","?"],192:["`","~"],219:["[","{"],220:["\\","|"],221:["]","}"],222:["'",'"'],224:"Meta",225:"AltGraph",246:"Attn",247:"CrSel",248:"ExSel",249:"EraseEof",250:"Play",251:"ZoomOut"};for(let e=0;e<24;e+=1)Di[112+e]="F"+(e+1);for(let e=0;e<26;e+=1){let t=e+65;Di[t]=[String.fromCharCode(t+32),String.fromCharCode(t)]}const O={codes:Di,getCode(e){return qc(e)?e.keyCode||e.which||this[e.key]:this[e]},getKey(e){const t=qc(e);if(t&&e.key)return e.key;let n=Di[t?e.keyCode||e.which:e];return Array.isArray(n)&&(n=t?n[e.shiftKey?1:0]:n[0]),n},Cancel:3,Help:6,Backspace:8,Tab:9,Clear:12,Enter:13,Shift:16,Control:17,Alt:18,Pause:19,CapsLock:20,Escape:27,Convert:28,NonConvert:29,Accept:30,ModeChange:31," ":32,PageUp:33,PageDown:34,End:35,Home:36,ArrowLeft:37,ArrowUp:38,ArrowRight:39,ArrowDown:40,Select:41,Print:42,Execute:43,PrintScreen:44,Insert:45,Delete:46,0:48,")":48,1:49,"!":49,2:50,"@":50,3:51,"#":51,4:52,$:52,5:53,"%":53,6:54,"^":54,7:55,"&":55,8:56,"*":56,9:57,"(":57,a:65,A:65,b:66,B:66,c:67,C:67,d:68,D:68,e:69,E:69,f:70,F:70,g:71,G:71,h:72,H:72,i:73,I:73,j:74,J:74,k:75,K:75,l:76,L:76,m:77,M:77,n:78,N:78,o:79,O:79,p:80,P:80,q:81,Q:81,r:82,R:82,s:83,S:83,t:84,T:84,u:85,U:85,v:86,V:86,w:87,W:87,x:88,X:88,y:89,Y:89,z:90,Z:90,OS:91,ContextMenu:93,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,F13:124,F14:125,F15:126,F16:127,F17:128,F18:129,F19:130,F20:131,F21:132,F22:133,F23:134,F24:135,NumLock:144,ScrollLock:145,VolumeMute:181,VolumeDown:182,VolumeUp:183,";":186,":":186,"=":187,"+":187,",":188,"<":188,"-":189,_:189,".":190,">":190,"/":191,"?":191,"`":192,"~":192,"[":219,"{":219,"\\":220,"|":220,"]":221,"}":221,"'":222,'"':222,Meta:224,AltGraph:225,Attn:246,CrSel:247,ExSel:248,EraseEof:249,Play:250,ZoomOut:251};O.Spacebar=O[" "],O.Digit0=O[0],O.Digit1=O[1],O.Digit2=O[2],O.Digit3=O[3],O.Digit4=O[4],O.Digit5=O[5],O.Digit6=O[6],O.Digit7=O[7],O.Digit8=O[8],O.Digit9=O[9],O.Tilde=O["~"],O.GraveAccent=O["`"],O.ExclamationPoint=O["!"],O.AtSign=O["@"],O.PoundSign=O["#"],O.PercentSign=O["%"],O.Caret=O["^"],O.Ampersand=O["&"],O.PlusSign=O["+"],O.MinusSign=O["-"],O.EqualsSign=O["="],O.DivisionSign=O["/"],O.MultiplicationSign=O["*"],O.Comma=O[","],O.Decimal=O["."],O.Colon=O[":"],O.Semicolon=O[";"],O.Pipe=O["|"],O.BackSlash=O["\\"],O.QuestionMark=O["?"],O.SingleQuote=O["'"],O.DoubleQuote=O['"'],O.LeftCurlyBrace=O["{"],O.RightCurlyBrace=O["}"],O.LeftParenthesis=O["("],O.RightParenthesis=O[")"],O.LeftAngleBracket=O["<"],O.RightAngleBracket=O[">"],O.LeftSquareBracket=O["["],O.RightSquareBracket=O["]"];var Jc;function Ka(){return Ka=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ka.apply(this,arguments)}var k1=function(e){return x.createElement("svg",Ka({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),Jc||(Jc=x.createElement("path",{fill:"#717681",d:"M5.226 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.37 5.55-6.41a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.9c-.28.31-.76.31-1.04 0L5.396 9a.627.627 0 0 1-.17-.44"})))};const Q="'VTB Group UI', sans-serif",fe={"Main/XXL":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 42px;
    line-height: 52px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/XL":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 36px;
    line-height: 44px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/L":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/M":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 28px;
    line-height: 36px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/S":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 20px;
    line-height: 28px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/XS-bold":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 18px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Main/XS":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/L-bold":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/L":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/M":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/S":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/S-bold":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Additional/XS":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Button/M":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */

    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Button/S":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */

    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Caption/XS":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */

    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/HL1":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 72px;
    line-height: 80px;
    /* or 111% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/HL2":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 56px;
    line-height: 64px;
    /* or 114% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/HL3":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 48px;
    line-height: 56px;
    /* or 117% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H1":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 40px;
    line-height: 48px;
    /* or 120% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H2":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 34px;
    line-height: 40px;
    /* or 118% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H3":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 28px;
    line-height: 36px;
    /* or 129% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H4":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H5":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 20px;
    line-height: 28px;
    /* or 140% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Header/H6":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Subtitle/Subtitle 1":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    /* or 133% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Subtitle/Subtitle 2":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Subtitle/Subtitle 3":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 550;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Body/Body 1 Long":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Body/Body 1 Short":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    /* or 125% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Body/Body 2 Long":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    /* or 133% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Body/Body 2 Short":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    /* or 114% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Button/Button 1":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    /* or 150% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Button/Button 2":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    /* or 143% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Caption/Caption 1":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `,"Caption/Caption 2":_`
    font-family: ${Q};
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    /* or 120% */
    font-feature-settings:
      'tnum' on,
      'lnum' on;
    text-rendering: geometricPrecision;
  `};var ed;function Xa(){return Xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xa.apply(this,arguments)}var sh=function(e){return x.createElement("svg",Xa({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),ed||(ed=x.createElement("path",{fill:"#717681",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 0 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};const E1=24,P1=20,C1=16,N1=6,T1=4;function yo(e){switch(e){case"lSmall":case"lBig":default:return E1;case"mSmall":case"mBig":return P1;case"s":return C1}}function uh(e){switch(e){case"lBig":case"mBig":default:return N1;case"lSmall":case"mSmall":case"s":return T1}}function td(e){return yo(e)+2*uh(e)}const _1=_`
  & *[fill^='#'] {
    fill: ${e=>{switch(e.$iconColor){case"primary":return e.theme.color["Primary/Primary 60 Main"];case"secondary":return e.theme.color["Neutral/Neutral 50"];default:return e.$iconColor}}};
  }
`,M1=j.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  ${_1}

  & > svg {
    height: ${e=>yo(e.$dimension)}px;
    width: ${e=>yo(e.$dimension)}px;
  }
`,Dr=j.div`
  width: ${e=>td(e.$dimension)}px;
  height: ${e=>td(e.$dimension)}px;
  border-radius: 50%;
  background-color: transparent;
  pointer-events: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,j1=j.button`
  position: relative;
  padding: 0;
  margin: ${e=>uh(e.$dimension)}px;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  appearance: none;
  flex: 0 0 auto;
  height: ${e=>yo(e.$dimension)}px;
  width: ${e=>yo(e.$dimension)}px;
  border-radius: ${e=>fl(e.theme.shape)};
  overflow: visible;

  cursor: pointer;
  > * {
    pointer-events: none;
  }

  &:disabled {
    cursor: default;
    pointer-events: none;
    & *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: ${e=>e.theme.color["Primary/Primary 60 Main"]} solid 2px;
  }

  &:focus {
    > ${Dr} {
      background-color: ${e=>e.$highlightFocus?e.theme.color["Opacity/Focus"]:"transparent"};
    }
  }
  &:hover {
    > ${Dr} {
      background-color: ${({theme:e})=>e.color["Opacity/Hover"]};
    }
  }
  &:active {
    > ${Dr} {
      background-color: ${({theme:e})=>e.color["Opacity/Press"]};
    }
  }
  &:focus-visible {
    > ${Dr} {
      background-color: transparent;
    }
  }
`,ch=x.forwardRef(({type:e="button",dimension:t="lBig",disabled:n=!1,highlightFocus:r=!0,appearance:o,children:i,...l},a)=>{const s=typeof o=="object"?o.iconColor?o.iconColor:"secondary":o;return y.jsxs(j1,{ref:a,type:e,$dimension:t,disabled:n,$highlightFocus:r,...l,children:[y.jsx(Dr,{$dimension:t,"aria-hidden":!0}),y.jsx(M1,{$dimension:t,$iconColor:s,"aria-hidden":!0,children:i})]})}),O1=x.forwardRef(({className:e,...t},n)=>y.jsx(ch,{ref:n,className:`close-button ${e||""}`,...t,children:y.jsx(sh,{"aria-hidden":!0})}));function Ct(...e){return t=>{e.forEach(n=>{n&&(typeof n=="function"?n(t):n.current=t)})}}const Ii=()=>{let e=0;const t=document.createElement("div");return t.innerHTML=`Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diem 
    nonummy nibh euismod tincidunt ut lacreet dolore magna aliguam erat volutpat. 
    Ut wisis enim ad minim veniam, quis nostrud exerci tution ullamcorper suscipit 
    lobortis nisl ut aliquip ex ea commodo consequat.`,t.style.overflow="scroll",t.style.fontSize="14px",t.style.height="50px",t.style.maxHeight="50px",t.style.width="100px",t.style.position="absolute",t.style.top="-100000px",t.style.left="-100000px",document.body.appendChild(t),e=t.offsetWidth-t.clientWidth,document.body.removeChild(t),e||16},F1=["bottom","height","left","right","top","width"];function gu(e,t){const n={};return{observe(){n.rafId&&cancelAnimationFrame(n.rafId);const r=()=>{if(n.isObserving){const{bottom:o,height:i,left:l,right:a,top:s,width:u,x:d,y:p}=e.getBoundingClientRect(),h={bottom:o,height:i,left:l,right:a,top:s,width:u,x:d||l,y:p||s};((v={},g={})=>F1.some($=>v[$]!==g[$]))(h,n.rect)&&(n.rect=h,t(n.rect)),n.rafId=requestAnimationFrame(r)}};n.rafId=requestAnimationFrame(r),n.isObserving=!0},unobserve(){n.rafId&&cancelAnimationFrame(n.rafId),n.isObserving&&(n.isObserving=!1)}}}const L1=j.div`
  pointer-events: none;
  position: fixed;
  overflow: visible;
  z-index: ${({theme:e})=>e.zIndex.dropdown};
`,dh=({targetRef:e,targetElement:t,rootRef:n,fullContainerWidth:r,...o})=>{const i=x.useRef(null);return x.useEffect(()=>{const l=i.current,a=t??(e==null?void 0:e.current);if(l&&a){const s=gu(a,u=>{if(u){const{x:d,y:p,height:h,width:v}=u,{style:g}=l;g.top=`${p}px`,g.left=r?"0px":`${d}px`,g.height=`${h}px`,g.width=r?"100%":`${v}px`}});return s.observe(),()=>{s.unobserve()}}},[e,t,r]),ll.createPortal(y.jsx(L1,{ref:i,...o}),(n==null?void 0:n.current)||document.body)},z1=j.div`
  box-sizing: border-box;
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;
  align-self: center;
  width: max-content;
  min-width: max-content;
  pointer-events: initial;
`,R1=j.div`
  box-sizing: border-box;
  background-color: ${({theme:e})=>e.color["Neutral/Neutral 80"]};
  ${e=>e.$dimension==="m"?fe["Body/Body 2 Short"]:fe["Caption/Caption 1"]}
  color: ${({theme:e})=>e.color["Neutral/Neutral 00"]};
  border-radius: ${e=>fl(e.theme.shape)};
  ${e=>e.theme.shadow["Shadow 04"]}
  padding: ${e=>e.$dimension==="m"?"4px 8px":"2px 6px"};
  max-width: min(488px, calc(100vw - 16px));
  overflow-wrap: break-word;
`,A1=j.div`
  pointer-events: none;
  height: 100%;
  width: 100%;
  flex: 0 0 auto;
`,D1=j(dh)`
  display: flex;
  flex-wrap: nowrap;
  ${({$flexDirection:e})=>e?`flex-direction: ${e};`:""}
  z-index: ${({theme:e})=>e.zIndex.tooltip};
`,Ue=8;function I1(e,t,n,r){const o=e.getBoundingClientRect(),i=t.getBoundingClientRect(),l=Object.entries(function(u){return{bottom:{check:(d,p)=>{const h=window.innerHeight-d.bottom-u>Ue+p.height,v=d.left+d.width/2>p.width/2,g=window.innerWidth-d.right-u+d.width/2>p.width/2;return h&&v&&g}},top:{check:(d,p)=>{const h=d.top>Ue+p.height,v=d.left+d.width/2>p.width/2,g=window.innerWidth-d.right-u+d.width/2>p.width/2;return h&&v&&g}},left:{check:(d,p)=>{const h=d.left>Ue+p.width,v=d.top>(p.height-d.height)/2,g=window.innerHeight-d.bottom-u>(p.height-d.height)/2;return h&&g&&v}},right:{check:(d,p)=>{const h=window.innerWidth-d.right-u>Ue+p.width,v=d.top>(p.height-d.height)/2,g=window.innerHeight-d.bottom-u>(p.height-d.height)/2;return h&&g&&v}},bottomRight:{check:(d,p)=>{const h=window.innerHeight-d.bottom-u>Ue+p.height,v=window.innerWidth-d.left-u>p.width;return h&&v}},bottomLeft:{check:(d,p)=>{const h=window.innerHeight-d.bottom-u>Ue+p.height,v=d.right>p.width;return h&&v}},topRight:{check:(d,p)=>{const h=d.top>Ue+p.height,v=window.innerWidth-d.left-u>p.width;return h&&v}},topLeft:{check:(d,p)=>{const h=d.top>Ue+p.height,v=d.right>p.width;return h&&v}},leftBottom:{check:(d,p)=>{const h=d.left>Ue+p.width,v=window.innerHeight-d.top-u>p.height;return h&&v}},leftTop:{check:(d,p)=>{const h=d.left>Ue+p.width,v=d.bottom>p.height;return h&&v}},rightBottom:{check:(d,p)=>{const h=window.innerWidth-d.right-u>Ue+p.width,v=window.innerHeight-d.top-u>p.height;return h&&v}},rightTop:{check:(d,p)=>{const h=window.innerWidth-d.right-u>Ue+p.width,v=d.bottom>p.height;return h&&v}},bottomPageCenter:{check:(d,p)=>{const h=window.innerHeight-d.bottom-u>Ue+p.height,v=window.innerWidth-u>=p.width;return h&&v}},topPageCenter:{check:(d,p)=>{const h=d.top>Ue+p.height,v=window.innerWidth-u>=p.width;return h&&v}}}}(n)),a=r?l.filter(u=>u[0].includes(r)&&u[1].check(o,i)):l.filter(u=>u[1].check(o,i)),s=r||"bottom";return a.length?a[0][0]:s}const To=x.createContext({}),b1=({rootRef:e,...t})=>{const[n,r]=x.useState([]),[o,i]=x.useState(void 0),l=x.useCallback(p=>{i(p)},[]),a=x.useCallback(p=>{i(h=>h===p?void 0:h)},[]),s=x.useCallback(p=>{r(h=>{const v=h.indexOf(p);return v>-1?h.slice(0,v):h})},[]),u=x.useCallback(p=>{r(h=>[...h,p])},[]),d=x.useMemo(()=>({addDropdown:u,removeDropdown:s,dropdowns:n,rootRef:e,activateMenu:l,deactivateMenu:a,currentActiveMenu:o}),[u,s,n,e,l,a,o]);return y.jsx(To.Provider,{value:d,children:t.children})};function B1(e){const{dropdowns:t=[],addDropdown:n,removeDropdown:r,activateMenu:o,deactivateMenu:i,currentActiveMenu:l}=x.useContext(To),a=t.indexOf(e);return{addDropdown:n,removeDropdown:r,dropdowns:a>-1?t.slice(a+1,t.length):[],activateMenu:o,deactivateMenu:i,currentActiveMenu:l}}const W1=(e,t)=>!t.some(n=>n.current&&n.current.contains(e.target)),vu=x.forwardRef(({dimension:e="m",renderContent:t,targetRef:n,targetElement:r,tooltipPosition:o,...i},l)=>{const a=x.useRef(null),s=x.useRef(0),{rootRef:u}=x.useContext(To),d=x.useMemo(()=>!t()&&t()!==0,[t]),[p,h]=x.useState(""),[v,g]=x.useState(!1),[$,k]=x.useState({});return x.useEffect(()=>{(f=>{const c=r??(n==null?void 0:n.current);if(c&&a.current){const m=I1(c,a.current,f,o),w=a.current;switch(m){case"leftBottom":case"leftTop":case"left":h("row-reverse"),g(!1),w.style.margin="0 8px 0 0",w.style.alignSelf=m==="leftBottom"?"flex-start":m==="leftTop"?"flex-end":"center";break;case"rightBottom":case"rightTop":case"right":h("row"),g(!1),w.style.margin="0 0 0 8px",w.style.alignSelf=m==="rightBottom"?"flex-start":m==="rightTop"?"flex-end":"center";break;case"topPageCenter":case"topLeft":case"topRight":case"top":h("column-reverse"),g(m==="topPageCenter"),w.style.margin="0 0 8px 0",w.style.alignSelf=m==="topLeft"?"flex-end":m==="topRight"?"flex-start":"center";break;default:h("column"),g(m==="bottomPageCenter"),w.style.margin="8px 0 0 0",w.style.alignSelf=m==="bottomLeft"?"flex-end":m==="bottomRight"?"flex-start":"center"}}})(Ii())},[t(),n,r,o,$]),x.useLayoutEffect(()=>{if(a.current&&!d){const f=new ResizeObserver(c=>{c.forEach(m=>{s.current===0?s.current=m.contentRect.height:k({})})});return f.observe(a.current),()=>{f.disconnect()}}},[d]),x.useEffect(()=>{a.current&&!d&&(a.current.style.opacity="1")},[d]),d?null:y.jsxs(D1,{targetElement:r??(n==null?void 0:n.current),rootRef:u,$flexDirection:p,fullContainerWidth:v,children:[y.jsx(A1,{}),y.jsx(z1,{ref:Ct(l,a),children:y.jsx(R1,{role:"tooltip",$dimension:e,...i,children:t()})})]})});vu.displayName="Tooltip";const H1=_`
  color: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
  & *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
  }
  user-select: none;
`,U1=_`
  color: ${({theme:e,$appearance:t})=>t==="secondary"?e.color["Neutral/Neutral 90"]:e.color["Primary/Primary 60 Main"]};
  & *[fill^='#'] {
    fill: ${({theme:e,$appearance:t})=>t==="secondary"?e.color["Neutral/Neutral 90"]:e.color["Primary/Primary 60 Main"]};
  }
`,V1=_`
  border-radius: ${e=>No(e.theme.shape)};

  &:hover {
    color: ${({theme:e})=>e.color["Primary/Primary 70"]};
    & *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Primary/Primary 70"]};
    }
  }
  &:focus {
    color: ${({theme:e})=>e.color["Primary/Primary 70"]};
    & *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Primary/Primary 70"]};
    }
    outline-color: ${({theme:e})=>e.color["Primary/Primary 70"]};
  }
  &:active {
    color: ${({theme:e})=>e.color["Primary/Primary 80"]};
    & *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Primary/Primary 80"]};
    }
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: ${e=>e.theme.color["Primary/Primary 60 Main"]} solid 2px;
  }
`,G1=_`
  ${({$dimension:e})=>e==="s"?fe["Body/Body 2 Long"]:fe["Body/Body 1 Long"]}
`,Q1=_`
  cursor: ${e=>e.disabled?"default":"pointer"};
  display: flex;
  pointer-events: ${e=>e.disabled?"none":"auto"};
  align-items: center;
  width: fit-content;
  text-decoration: none;
  position: relative;
  ${V1};
  ${U1};
  ${G1};
  ${e=>e.disabled?H1:""}
`,Y1=j.a`
  ${Q1}
`,Za=x.forwardRef(({disabled:e=!1,appearance:t="primary",dimension:n="m",...r},o)=>y.jsx(Y1,{$dimension:n,ref:o,tabIndex:e?-1:r.tabIndex,disabled:e,$appearance:t,...r}));Za.displayName="Link";var nd;function qa(){return qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qa.apply(this,arguments)}var K1=function(e){return x.createElement("svg",qa({xmlns:"http://www.w3.org/2000/svg",width:64,height:64,fill:"none"},e),nd||(nd=x.createElement("path",{d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",clipRule:"evenodd"})))},rd;function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ja.apply(this,arguments)}var X1=function(e){return x.createElement("svg",Ja({xmlns:"http://www.w3.org/2000/svg",width:48,height:48,fill:"none"},e),rd||(rd=x.createElement("path",{d:"M43.955 37.334a24.001 24.001 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24c-1.38 0-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",clipRule:"evenodd"})))},od;function es(){return es=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},es.apply(this,arguments)}var Z1=function(e){return x.createElement("svg",es({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e),od||(od=x.createElement("path",{d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",clipRule:"evenodd"})))},id;function ts(){return ts=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ts.apply(this,arguments)}var q1=function(e){return x.createElement("svg",ts({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},e),id||(id=x.createElement("path",{d:"M18.378 15.54a10.035 10.035 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",clipRule:"evenodd"})))},ld;function ns(){return ns=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ns.apply(this,arguments)}var J1=function(e){return x.createElement("svg",ns({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),ld||(ld=x.createElement("path",{d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8c-.552 0-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6.002 6.002 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",clipRule:"evenodd"})))};const ev=_`
  width: ${({$dimension:e})=>{switch(e){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
  height: ${({$dimension:e})=>{switch(e){case"s":return"16px";case"ms":return"20px";case"m":return"24px";case"xl":return"64px";default:return"48px"}}};
`,tv=ah`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`,nv=j.div`
  position: relative;

  ${ev};

  & svg {
    ${e=>e.$svgMixin||""}
    animation: ${tv} 1s linear infinite;
    path {
      fill: ${({$inverse:e,theme:t})=>e?t.color["Special/Static White"]:t.color["Primary/Primary 60 Main"]};
    }
  }
`,yu=({dimension:e="m",inverse:t=!1,svgMixin:n,...r})=>{const o=(i=>{switch(i){case"s":return J1;case"ms":return q1;case"m":return Z1;case"xl":return K1;default:return X1}})(e);return y.jsx(nv,{$inverse:t,$dimension:e,$svgMixin:n,role:"alert","aria-live":"assertive",...r,children:y.jsx(o,{})})};yu.displayName="Spinner";const rv=_`
  background-color: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
  color: ${({theme:e})=>e.color["Special/Static White"]};
  border: 1px solid ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
  &&& *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Special/Static White"]};
  }

  &&&:hover {
    background-color: ${({theme:e})=>e.color["Primary/Primary 70"]};
    border-color: ${({theme:e})=>e.color["Primary/Primary 70"]};
  }

  &&&:active {
    background-color: ${({theme:e})=>e.color["Primary/Primary 80"]};
    border-color: ${({theme:e})=>e.color["Primary/Primary 80"]};
  }

  &&&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: ${({theme:e})=>e.color["Neutral/Neutral 10"]};
    color: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    border-color: ${({theme:e})=>e.color["Neutral/Neutral 10"]};
    &&& *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    }
  }
`,ov=_`
  background-color: transparent;
  color: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
  border: 1px solid ${({theme:e})=>e.color["Primary/Primary 60 Main"]};

  &&& *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
  }

  &&&:hover {
    background-color: ${({theme:e})=>e.color["Opacity/Hover"]};
    color: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
    border-color: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
    &&& *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
    }
  }

  &&&:active {
    background-color: ${({theme:e})=>e.color["Opacity/Press"]};
    color: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
    border-color: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
    & *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    border-color: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    &&& *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    }
  }
`,iv=_`
  background-color: transparent;
  color: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
  border: 1px solid transparent;

  &&& *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
  }

  &&&:hover {
    background-color: ${({theme:e})=>e.color["Opacity/Hover"]};
    color: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
    border-color: transparent;
    & *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
    }
  }

  &&&:active {
    background-color: ${({theme:e})=>e.color["Opacity/Press"]};
    color: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
    border-color: transparent;
    & *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: transparent;
    color: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    border-color: transparent;
    &&& *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    }
  }
`,lv=_`
  background-color: transparent;
  color: ${({theme:e})=>e.color["Special/Static White"]};
  border: 1px solid ${({theme:e})=>e.color["Special/Static White"]};
  &&& *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Special/Static White"]};
  }

  &&&:hover {
    background-color: ${({theme:e})=>e.color["Opacity/Dark Static Hover"]};
    color: ${({theme:e})=>e.color["Special/Static White"]};
    border-color: ${({theme:e})=>e.color["Special/Static White"]};
    &&& *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Special/Static White"]};
    }
  }

  &&&:active {
    background-color: ${({theme:e})=>e.color["Opacity/Dark Static Press"]};
    color: ${({theme:e})=>e.color["Special/Static White"]};
    border-color: ${({theme:e})=>e.color["Special/Static White"]};
    &&& *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Special/Static White"]};
    }
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    border-color: ${({theme:e})=>e.color["Special/Dark Static Neutral 30"]};
    color: ${({theme:e})=>e.color["Special/Dark Static Neutral 30"]};
    &&& *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Special/Dark Static Neutral 30"]};
    }
  }
`,av=_`
  background-color: ${({theme:e})=>e.color["Error/Error 60 Main"]};
  color: ${({theme:e})=>e.color["Special/Static White"]};
  border: 1px solid ${({theme:e})=>e.color["Error/Error 60 Main"]};
  &&& *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Special/Static White"]};
  }

  &&&:hover {
    background-color: ${({theme:e})=>e.color["Error/Error 70"]};
    border-color: ${({theme:e})=>e.color["Error/Error 70"]};
  }

  &&&:active {
    background-color: ${({theme:e})=>e.color["Error/Error 80"]};
    border-color: ${({theme:e})=>e.color["Error/Error 80"]};
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: ${({theme:e})=>e.color["Neutral/Neutral 10"]};
    color: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    border-color: ${({theme:e})=>e.color["Neutral/Neutral 10"]};
    &&& *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    }
  }
`,sv=_`
  background-color: ${({theme:e})=>e.color["Success/Success 50 Main"]};
  color: ${({theme:e})=>e.color["Special/Static White"]};
  border: 1px solid ${({theme:e})=>e.color["Success/Success 50 Main"]};

  &&& *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Special/Static White"]};
  }

  &&&:hover {
    background-color: ${({theme:e})=>e.color["Success/Success 60"]};
    border-color: ${({theme:e})=>e.color["Success/Success 60"]};
  }

  &&&:active {
    background-color: ${({theme:e})=>e.color["Success/Success 70"]};
    border-color: ${({theme:e})=>e.color["Success/Success 70"]};
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: ${({theme:e})=>e.color["Neutral/Neutral 10"]};
    color: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    border-color: ${({theme:e})=>e.color["Neutral/Neutral 10"]};
    &&& *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    }
  }
`,uv=_`
  &:focus-visible {
    outline-offset: 2px;
    outline: ${e=>e.theme.color["Primary/Primary 60 Main"]} solid 2px;
  }
`,cv=_`
  &[data-appearance~='primary'] {
    ${rv}
  }
  &[data-appearance~='secondary'] {
    ${ov}
  }
  &[data-appearance~='ghost'] {
    ${iv}
  }
  &[data-appearance~='white'] {
    ${lv}
  }
  &[data-appearance~='danger'] {
    ${av}
  }
  &[data-appearance~='success'] {
    ${sv}
  }

  ${uv}
`,xo=j.div``;function Xt(e){switch(e){case"s":return 13;case"m":return 17;case"l":return 21;default:return 29}}_`
  &[data-dimension='xl'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${Xt("xl")}px;`}
  }

  &[data-dimension='l'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${Xt("l")}px;`}
  }

  &[data-dimension='m'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${Xt("m")}px;`}
  }

  &[data-dimension='s'] {
    ${e=>!e.$displayAsSquare&&`padding-left: ${Xt("s")}px;`}
  }
`;_`
  &[data-dimension='xl'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${Xt("xl")}px;`}
  }

  &[data-dimension='l'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${Xt("l")}px;`}
  }

  &[data-dimension='m'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${Xt("m")}px;`}
  }

  &[data-dimension='s'] {
    ${e=>!e.$displayAsSquare&&`padding-right: ${Xt("s")}px;`}
  }
`;const ad=_`
  padding: 0;
  height: 56px;
  ${e=>e.$displayAsSquare?"width: 56px;":"padding: 0 29px;"}
  ${xo} {
    width: 24px;
    height: 24px;
  }

  ${fe["Button/Button 1"]}
`,dv=_`
  ${ad}

  &[data-dimension='xl'] {
    ${ad}
  }

  &[data-dimension='l'] {
    height: 48px;
    ${e=>e.$displayAsSquare?"width: 48px;":"padding: 0 21px;"}
  }

  &[data-dimension='m'] {
    height: 40px;
    ${e=>e.$displayAsSquare?"width: 40px;":"padding: 0 17px;"}
  }

  &[data-dimension='s'] {
    height: 32px;
    ${e=>e.$displayAsSquare?"width: 32px;":"padding: 0 13px;"}
    ${xo} {
      width: 20px;
      height: 20px;
    }
    ${fe["Button/Button 2"]}
  }
`,fv=e=>ah`
  0% {
    background-color: ${e.theme.color["Neutral/Neutral 10"]};
    border-color: ${e.theme.color["Neutral/Neutral 10"]};
  }
  50% {
    background-color: ${e.theme.color["Neutral/Neutral 20"]};
    border-color: ${e.theme.color["Neutral/Neutral 20"]};
  }
  100% {
    background-color: ${e.theme.color["Neutral/Neutral 10"]};
    border-color: ${e.theme.color["Neutral/Neutral 10"]};
  }
`,fh=_`
  animation: ${e=>fv(e)} 2s ease infinite;
`,ph=j.div`
  vertical-align: top;

  display: inline-flex;
  gap: 8px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  height: 24px;
  max-width: calc(100% - ${e=>e.$addPadding}px);

  > * {
    display: inline-block;
    flex: 0 1 auto;
    white-space: nowrap;
  }
  > ${xo} {
    flex: 0 0 auto;
  }

  & > svg {
    width: 24px;
    height: 24px;
  }

  [data-dimension='s'] & {
    height: 20px;

    & > svg {
      width: 20px;
      height: 20px;
    }
  }
`,pv=j(yu)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`,sd=j.div`
  display: inline-block;
  width: 2px;
`,bi=x.forwardRef(({appearance:e="primary",dimension:t="xl",type:n="button",loading:r=!1,skeleton:o=!1,iconStart:i,iconEnd:l,icon:a,iconPlace:s="left",children:u,buttonCssMixin:d,displayAsDisabled:p,displayAsSquare:h,...v},g)=>{const $=!!i||!!a&&s==="left",k=!!l||!!a&&s==="right",f=(h||$?0:2)+(h||k?0:2);return y.jsxs(hv,{ref:g,$appearance:e,$dimension:t,type:n,$loading:r,$skeleton:o,$buttonCssMixin:d,$displayAsSquare:h,$displayAsDisabled:p,...v,children:[r&&y.jsx(pv,{dimension:t==="s"?"ms":"m",inverse:e!=="secondary"&&e!=="ghost"}),!h&&!$&&y.jsx(sd,{}),y.jsxs(ph,{$addPadding:f,children:[$?y.jsx(xo,{children:i||a}):null,x.Children.toArray(u).map((c,m)=>typeof c=="string"?y.jsx("div",{children:c},c+m):c),k?y.jsx(xo,{children:l||a}):null]}),!h&&!k&&y.jsx(sd,{})]})}),hv=j.button.attrs(e=>({"data-dimension":e.$dimension,"data-appearance":[e.$appearance,e.$displayAsDisabled?"disabled":void 0].filter(t=>t!==void 0).join(" ")}))`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  white-space: nowrap;
  border: none;
  border-radius: ${e=>e.$skeleton?0:No(e.theme.shape)};
  appearance: none;
  vertical-align: middle;
  pointer-events: ${e=>e.$loading||e.disabled||e.$skeleton?"none":"all"};

  ${cv};
  ${dv};
  ${e=>e.$buttonCssMixin};
  ${({$skeleton:e})=>e&&fh};

  ${ph} {
    ${e=>e.$loading||e.$skeleton?"visibility: hidden;":""}
  }

  &:hover {
    cursor: pointer;
  }
`;bi.displayName="Button";var ud;function rs(){return rs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rs.apply(this,arguments)}var mv=function(e){return x.createElement("svg",rs({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},e),ud||(ud=x.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0l6-6"})))},cd;function os(){return os=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},os.apply(this,arguments)}var gv=function(e){return x.createElement("svg",os({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},e),cd||(cd=x.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))};const vv=_`
  width: ${({$dimension:e})=>{switch(e){case"m":default:return"20px";case"s":return"16px"}}};

  fieldset[data-dimension='s'] & {
    width: 16px;
  }
`,yv=_`
  height: ${({$dimension:e})=>{switch(e){case"m":default:return"20px";case"s":return"16px"}}};
  fieldset[data-dimension='s'] & {
    height: 16px;
  }
`,xv=j(mv)`
  pointer-events: none;
`,wv=j(gv)`
  pointer-events: none;
  & *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Special/Static White"]};
  }
`,Sv=j.div`
  position: relative;
  box-sizing: border-box;

  overflow: visible;
  ${vv};
  ${yv};
`,wo=j.div`
  pointer-events: none;
  display: inline-block;
  position: absolute;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: ${e=>fl(e.theme.shape)};
  outline: 0;
  transition: background 0.1s ease-in;

  /* disable inheritance from parent elements */
  line-height: initial;
  background-color: ${({theme:e})=>e.color["Neutral/Neutral 00"]};
  border: 1px solid
    ${({$error:e,theme:t})=>e?t.color["Error/Error 60 Main"]:t.color["Neutral/Neutral 50"]};
  & *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Special/Static White"]};
  }
`,$v=_`
  &:not(:checked) + ${wo} {
    background-color: ${({theme:e,$indeterminate:t})=>t&&e.color["Primary/Primary 60 Main"]};
    border: ${({$indeterminate:e})=>e&&"none"};
    > * {
      display: ${e=>e.$indeterminate?"block":"none"};
    }
  }
`,dd=_`
  &:not(:disabled) {
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      width: calc(100% + 16px);
      height: calc(100% + 16px);
      background-color: ${({theme:e})=>e.color["Opacity/Hover"]};
    }
  }
`,fd=_`
  pointer-events: none;
  & + ${wo} {
    border: 1px solid ${({theme:e})=>e.color["Neutral/Neutral 30"]};
    background-color: ${({theme:e})=>e.color["Neutral/Neutral 10"]};
  }
`,pd=_`
  background-color: ${({theme:e})=>e.color["Primary/Primary 30"]};
  border: none;
  & *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Neutral/Neutral 00"]};
  }
`,kv=_`
  background-color: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
  border: none;
`,Ev=j.input`
  appearance: none;
  ::-ms-check {
    display: none;
  }
  width: 100%;
  height: 100%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-sizing: border-box;
  cursor: pointer;
  border-radius: ${e=>fl(e.theme.shape)};
  margin: 0;
  padding: 0;

  ${e=>e.readOnly&&fd}

  &:checked + ${wo} {
    ${e=>e.readOnly?pd:kv}
  }

  &:disabled {
    ${fd};
  }

  ${e=>!e.readOnly&&e.$hovered&&dd}

  ${$v}

  &:hover:not(:disabled),
  &:focus:not(:disabled) + ${dd}

  &:checked:disabled + ${wo} {
    ${pd}
  }

  &:focus-visible {
    outline-offset: 2px;
    outline: ${e=>e.theme.color["Primary/Primary 60 Main"]} solid 2px;
  }
`,So=x.forwardRef(({className:e,dimension:t="m",disabled:n,readOnly:r,hovered:o,indeterminate:i,error:l,...a},s)=>y.jsxs(Sv,{$dimension:t,className:e,children:[y.jsx(Ev,{ref:s,disabled:n,readOnly:r,...a,type:"checkbox",$indeterminate:i,onKeyDown:u=>{var d;r&&O.getCode(u)===O[" "]&&u.preventDefault(),(d=a.onKeyDown)==null||d.call(a,u)},"data-hovered":o,$hovered:o}),y.jsx(wo,{$error:l,children:y.jsx(i?wv:xv,{"aria-hidden":"true",focusable:"false"})})]}));So.displayName="Checkbox";function hh(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}const Pv=_`
  height: ${({$dimension:e})=>{switch(e){case"xl":return"56px";case"s":return"32px";default:return"40px"}}};
`,mh=_`
  ${fh}
  & > * {
    visibility: hidden;
  }
`,Cv=j.div`
  position: relative;
  display: flex;
  align-items: stretch;
  border: none;
  border-radius: ${e=>e.$skeleton?0:No(e.theme.shape)};

  pointer-events: ${e=>e.$skeleton?"none":"all"};
  ${({$skeleton:e})=>e&&mh};
`,Nv=j(Cv)`
  ${Pv};
`,Tv=j.div`
  white-space: nowrap;
  ${fe["Body/Body 2 Long"]}
  color: ${e=>e.error?e.theme.color["Error/Error 60 Main"]:e.theme.color["Neutral/Neutral 50"]};
  transition:
    all 0.5s,
    color 0.5s;
  opacity: ${e=>e.transparent&&!e.error?0:1};
  max-width: ${e=>e.transparent&&!e.error?0:"none"};
  overflow: hidden;
`,_v=({maxLength:e,inputRef:t,...n})=>{const[r,o]=x.useState(0);return x.useEffect(()=>{function i(){const{value:a}=this;o(a.length)}const l=t.current;if(l)return l.addEventListener("input",i),i.call(l),()=>{l.removeEventListener("input",i)}},[t]),r>.8*e?y.jsxs(Tv,{...n,error:r>=e,transparent:r<.8*e,children:[r,"/",e]}):null},xu=j.label`
  display: block;
  text-align: left;
  ${fe["Body/Body 2 Short"]}
  color: ${e=>e.theme.color["Neutral/Neutral 50"]};

  [data-disabled] & {
    color: ${e=>e.theme.color["Neutral/Neutral 30"]};
  }

  [data-focus-within] & {
    color: ${e=>e.disabled?"":e.theme.color["Neutral/Neutral 50"]};
  }
  [data-required-within] &:after {
    content: ' *';
    color: ${e=>e.theme.color["Error/Error 60 Main"]};
  }
  margin-bottom: 8px;
`;xu.displayName="Label";const Mv=_`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > * {
    flex: 1 1 auto;
  }

  ${xu} {
    margin: 0 8px 0 0;
  }
`,jv=j.div`
  display: flex;
  overflow: hidden;
  ${e=>e.$displayInline?Mv:"flex-direction: column;"}
`,Ov=j.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 50%;
  margin-bottom: 8px;
  ${mh}
`,Fv=j.div`
  position: relative;
  text-align: left;
`,Lv=_`
  color: transparent;
`,zv=j(xu)`
  ${e=>e.$skeleton&&Lv};
`,Rv=_`
  visibility: hidden;
`,Av=j.div`
  display: flex;
  justify-content: space-between;
  ${e=>e.$skeleton&&Rv};
`,Dv=j.div`
  flex: 1 1 auto;

  padding-top: 8px;

  text-align: left;

  ${fe["Body/Body 2 Short"]}

  color: ${e=>e.theme.color["Neutral/Neutral 50"]};

  [data-disabled] & {
    color: ${e=>e.theme.color["Neutral/Neutral 30"]};
  }

  [data-status='error'] & {
    color: ${e=>e.theme.color["Error/Error 60 Main"]};
  }

  [data-status='success'] & {
    color: ${e=>e.theme.color["Success/Success 50 Main"]};
  }
`,Iv=j(_v)`
  flex: 0 0 auto;
  padding: 8px 0 0 8px;
`,gh=x.forwardRef(({children:e,maxLength:t,inputRef:n,displayCharacterCounter:r=!0,...o},i)=>{const l=x.useRef(null),[a,s]=x.useState(!1),{className:u,style:d,displayInline:p,status:h,extraText:v,label:g,required:$,disabled:k,id:f=hh(),skeleton:c=!1,...m}=o,w={className:u,style:d,...m},S={htmlFor:f,children:g,required:$,disabled:k};return x.useEffect(()=>{const E=()=>{s(!0)},P=()=>{s(!1)},T=l.current;return T&&(T.addEventListener("focusin",E),T.addEventListener("focusout",P)),()=>{T&&(T.removeEventListener("focusin",E),T.removeEventListener("focusout",P))}},[]),y.jsxs(jv,{...w,$displayInline:p,"data-status":h,"data-focus-within":a?"":void 0,"data-required-within":$?"":void 0,"data-disabled":k?"":void 0,"data-read-only":!!o.readOnly||void 0,ref:Ct(l,i),children:[S.children&&y.jsxs(Fv,{children:[c&&y.jsx(Ov,{}),y.jsx(zv,{$skeleton:c,...S})]}),y.jsxs("div",{children:[e,y.jsxs(Av,{$skeleton:c,children:[v&&y.jsx(Dv,{children:v}),r&&n&&t!==void 0&&y.jsxs(y.Fragment,{children:[y.jsx("div",{}),y.jsx(Iv,{maxLength:t,inputRef:n})]})]})]})]})});gh.displayName="Field";function is(e,t){return e.value!==t.value||e.selectionStart!==t.selectionStart||e.selectionEnd!==t.selectionEnd}function jr(e,t){var i;const{value:n=e.value,selectionStart:r,selectionEnd:o}=t;if(is(e,{value:n,selectionStart:r,selectionEnd:o})){const l=(i=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e),"value"))==null?void 0:i.set;let a;l==null||l.call(e,n),typeof r=="number"&&typeof o=="number"&&e.setSelectionRange(r,o),typeof Event=="function"?a=new Event("input",{bubbles:!0}):(a=document.createEvent("Event"),a.initEvent("input",!0,!0)),e.dispatchEvent(a)}}var hd;function ls(){return ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ls.apply(this,arguments)}var bv=function(e){return x.createElement("svg",ls({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),hd||(hd=x.createElement("path",{fill:"#717681",d:"M21.7 10.046c.3.198.381.601.182.9-.5.754-1.141 1.573-1.913 2.359l1.835 1.835a.65.65 0 1 1-.919.92l-1.867-1.868c-.935.8-2.015 1.516-3.226 2.023l1.034 2.49a.65.65 0 1 1-1.2.498l-1.064-2.56a9.581 9.581 0 0 1-2.562.349 9.819 9.819 0 0 1-2.566-.338l-1.06 2.55a.65.65 0 0 1-1.2-.5l1.027-2.47c-1.244-.517-2.316-1.25-3.221-2.04L3.115 16.06a.65.65 0 0 1-.92-.919l1.844-1.843a19.143 19.143 0 0 1-1.903-2.338.65.65 0 1 1 1.066-.744c1.463 2.097 4.34 5.477 8.798 5.477 4.034 0 7.15-2.979 8.8-5.465a.65.65 0 0 1 .9-.181Z"})))},md,gd;function as(){return as=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},as.apply(this,arguments)}var Bv=function(e){return x.createElement("svg",as({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),md||(md=x.createElement("path",{fill:"#717681",d:"M11.306 9.08c.376-.088.694.233.694.62v1a1.3 1.3 0 0 0 1.3 1.3h1c.387 0 .708.318.62.694a3.001 3.001 0 1 1-3.614-3.613Z"})),gd||(gd=x.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 5c-4.88 0-8.134 3.655-9.563 5.682a2.267 2.267 0 0 0 0 2.636C3.867 15.345 7.119 19 12 19c4.88 0 8.134-3.655 9.563-5.682a2.267 2.267 0 0 0 0-2.636C20.133 8.655 16.881 5 12 5M5.709 8.927a15.062 15.062 0 0 0-2.21 2.505.967.967 0 0 0 0 1.136c.522.74 1.263 1.654 2.21 2.505A6.972 6.972 0 0 1 5 12c0-1.102.255-2.145.709-3.073M12 17.7a5.7 5.7 0 1 1 0-11.4 5.7 5.7 0 0 1 0 11.4m6.291-8.773a15.06 15.06 0 0 1 2.21 2.505.967.967 0 0 1 0 1.136 15.06 15.06 0 0 1-2.21 2.505A6.97 6.97 0 0 0 19 12a6.972 6.972 0 0 0-.709-3.073Z",clipRule:"evenodd"})))};function Wv({icon:e,...t}){return y.jsx(e,{...t})}const vd=j(Wv)`
  & *[fill^='#'] {
    fill: ${e=>e.theme.color["Neutral/Neutral 50"]};
  }

  [disabled] &&& {
    pointer-events: none;
    & *[fill^='#'] {
      fill: ${e=>e.theme.color["Neutral/Neutral 30"]};
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:hover *[fill^='#'] {
    fill: ${e=>e.theme.color["Primary/Primary 70"]};
  }
`,$n=e=>!!e&&(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth),vh=e=>{switch(e.$dimension){case"xl":default:return 24;case"s":return 20}},wu=e=>{switch(e.$dimension){case"xl":default:return 16;case"s":return 12}},Hv=_`
  padding-right: ${e=>wu(e)+(vh(e)+8)*(e.$iconCount??0)}px;
`,Uv=_`
  background-color: ${e=>e.theme.color["Neutral/Neutral 10"]};
  border-color: transparent;
`,or=j.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border-radius: inherit;

  border: 1px solid ${e=>e.theme.color[function(t){if(!t)return"Neutral/Neutral 40";switch(t){case"error":return"Error/Error 60 Main";case"success":return"Success/Success 50 Main"}}(e.$status)]};
  ${e=>e.disabled&&"border-color: transparent;"};
`,Vv=_`
  &:focus-within:not(:disabled) > ${or} {
    ${e=>e.disabled||e.readOnly?"border-color: transparent":`border: 2px solid ${e.theme.color[function(t){if(!t)return"Primary/Primary 60 Main";switch(t){case"error":return"Error/Error 60 Main";case"success":return"Success/Success 50 Main"}}(e.$status)]}`}
  }

  &:hover:not(:focus-within) > ${or} {
    border-color: ${e=>e.disabled||e.readOnly?"transparent":e.theme.color[function(t){if(!t)return"Neutral/Neutral 60";switch(t){case"error":return"Error/Error 70";case"success":return"Success/Success 60"}}(e.$status)]};
  }
`,Gv=_`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`,Qv=j.input`
  outline: none;
  appearance: none;
  border-radius: inherit;

  box-sizing: border-box;
  flex: 1 1 auto;
  min-width: 10px;
  border: none;
  text-overflow: ellipsis;
  padding: 0 ${wu}px;

  ${e=>e.$dimension==="s"?fe["Body/Body 2 Long"]:fe["Body/Body 1 Long"]}

  color: ${e=>e.theme.color["Neutral/Neutral 90"]};

  &&&:disabled {
    color: ${e=>e.theme.color["Neutral/Neutral 30"]};
  }

  &::placeholder {
    color: ${e=>e.theme.color["Neutral/Neutral 50"]};
  }

  &:disabled::placeholder {
    color: ${e=>e.theme.color["Neutral/Neutral 30"]};
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  background-color: ${e=>e.theme.color["Neutral/Neutral 00"]};

  &&&:invalid + ${or} {
    border: 1px solid ${e=>e.theme.color["Error/Error 60 Main"]};
  }

  &&&:invalid:hover:not(:disabled) + ${or} {
    border: 1px solid ${e=>e.theme.color["Error/Error 70"]};
  }

  &&&:invalid:focus:not(:disabled) + ${or} {
    border: 2px solid ${e=>e.theme.color["Error/Error 60 Main"]};
  }

  [data-read-only] &&&,
  &&&:disabled {
    ${Uv}
  }

  ${Hv}
  ${Gv}
`,Yv=j.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;

  padding-right: ${wu}px;

  & > svg {
    border-radius: ${e=>No(e.theme.shape)};
    display: block;
    width: ${vh}px;

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: ${e=>e.theme.color["Primary/Primary 60 Main"]} solid 2px;
    }
  }

  & > *:not(:first-child) {
    margin-left: 8px;
  }
`,Kv=j(Nv)`
  ${Vv}
`;function Xv(e){return e||{}}const Zv=e=>e.preventDefault(),ss=x.forwardRef(({dimension:e,type:t,displayClearIcon:n,isLoading:r,status:o,handleInput:i=Xv,containerRef:l,icons:a,children:s,className:u,style:d,placeholder:p,skeleton:h=!1,showTooltip:v=!0,...g},$)=>{const k=x.useRef(null),f=l||x.useRef(null),c=x.Children.toArray(a),[m,w]=x.useState(!1),[S,E]=x.useState(!1),[P,T]=x.useState(g.defaultValue??void 0),W=g.value??P;x.useEffect(()=>{$n(k.current)?w(!0):w(!1)},[S,w]),x.useLayoutEffect(()=>{function X(){document.activeElement!==k.current&&E(!0)}function pe(){E(!1)}const Z=f.current;if(Z)return Z.addEventListener("mouseenter",X),Z.addEventListener("mouseleave",pe),Z.addEventListener("mousedown",pe),()=>{Z.removeEventListener("mouseenter",X),Z.removeEventListener("mouseleave",pe),Z.removeEventListener("mousedown",pe)}},[E]);const[A,K]=x.useState(!1);if(!g.readOnly&&t==="password"){const X=A?Bv:bv;c.push(y.jsx(vd,{icon:X,onClick:()=>{K(!A)},"aria-hidden":!0},"eye-icon"))}!g.readOnly&&n&&W&&c.unshift(y.jsx(vd,{icon:sh,onClick:()=>{k.current&&jr(k.current,{value:""})},"aria-hidden":!0},"clear-icon")),r&&c.unshift(y.jsx(yu,{dimension:e==="s"?"ms":"m"},"loading-icon"));const le=c.length;return x.useLayoutEffect(()=>{const X=i(null);function pe(){const{value:Z,selectionStart:D,selectionEnd:b}=this,C=i({value:Z,selectionStart:D,selectionEnd:b});p&&!is(X,C)?jr(this,{...C,value:""}):jr(this,C)}if(t!=="date"&&k.current){const Z=k.current;Z.addEventListener("input",pe);const{value:D,selectionStart:b,selectionEnd:C}=Z,F=i({value:D,selectionStart:b,selectionEnd:C});return p&&!is(X,F)?jr(Z,{...F,value:""}):jr(Z,F),()=>{Z.removeEventListener("input",pe)}}},[i,p]),y.jsxs(y.Fragment,{children:[y.jsxs(Kv,{className:u,style:d,$dimension:e,ref:f,disabled:g.disabled,readOnly:g.readOnly,$status:o,"data-disabled":!!g.disabled||void 0,"data-read-only":!!g.readOnly||void 0,"data-status":o,$skeleton:h,"data-disable-copying":!!g.disableCopying||void 0,...g.disableCopying&&{onMouseDown:Zv},children:[y.jsx(Qv,{ref:Ct($,k),...g,onChange:X=>{var pe;T(X.currentTarget.value),(pe=g.onChange)==null||pe.call(g,X)},placeholder:p,$dimension:e,$iconCount:le,type:t==="password"&&A?"text":t}),y.jsx(or,{$status:o,disabled:g.disabled||g.readOnly}),le>0&&y.jsx(Yv,{disabled:g.disabled,$dimension:e,children:c}),s]}),v&&S&&m&&y.jsx(vu,{renderContent:()=>{var X;return((X=k==null?void 0:k.current)==null?void 0:X.value)||""},targetElement:f.current})]})});ss.defaultProps={dimension:"m"},ss.displayName="TextInput";const qv=(e,t)=>{const n=x.useCallback(r=>{e.every(o=>o.current&&!o.current.contains(r.target))&&t(r)},[t,e]);x.useEffect(()=>(document.addEventListener("mousedown",n,!0),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n,!0),document.removeEventListener("touchstart",n)}),[n])};function Jv(e,t){const n=x.useRef(null),r=x.useRef(e);return x.useEffect(()=>{r.current=e},[e]),x.useEffect(()=>{if(typeof t=="number")return n.current=window.setInterval(()=>r.current(),t),()=>window.clearInterval(n.current||0)},[t]),n}const ey=j.div`
  pointer-events: initial;
  margin: 8px 0;
  flex: 0 0 auto;
  ${e=>e.$alignSelf?`align-self: ${e.$alignSelf};`:""};
  max-width: calc(100vw - 32px);
  opacity: 0;
  transition-delay: 200ms;
  transition-property: opacity;

  &:focus-visible {
    border: 2px solid blue;
  }

  ${e=>e.$dropContainerCssMixin}
`,ty=j.div`
  pointer-events: none;
  height: 100%;
  flex: 0 0 auto;
`,ny=j(dh)`
  display: flex;
  flex-direction: ${e=>e.$reverse?"column-reverse":"column"};
  flex-wrap: nowrap;
`,yh=x.forwardRef(({targetRef:e,targetElement:t,onClickOutside:n=()=>null,className:r="",alignSelf:o,dropContainerCssMixin:i,...l},a)=>{const s=x.useRef(null),[u,d]=x.useState(!1),p=t??(e==null?void 0:e.current),{addDropdown:h,removeDropdown:v,dropdowns:g}=B1(s),{rootRef:$}=x.useContext(To);qv([s],f=>{W1(f,g)&&n(f)}),x.useLayoutEffect(()=>{var f;s.current!==document.activeElement&&((f=s==null?void 0:s.current)==null||f.focus())},[]);const k=x.useCallback(()=>{const f=s.current;if(f&&p){const c=f.getBoundingClientRect(),m=p.getBoundingClientRect(),w=window.innerHeight,S=window.innerWidth;if(w-c.bottom<0&&m.top>w-m.bottom?u||d(!0):(m.bottom+(m.top-c.top)<w-8||m.top<w-m.bottom)&&u&&d(!1),o&&o!=="auto")return;const E=c.right-c.left,P=S-m.left>=E,T=m.right-16>=E,W=E>m.width;if(T||P)f.style.transform="translateX(0)",T&&P?f.style.alignSelf="flex-end":W&&!T&&P?f.style.alignSelf="flex-start":W&&!P&&T&&(f.style.alignSelf="flex-end");else{f.style.alignSelf="center";const A=(S-c.width)/2-(m.left-(E-m.width)/2);f.style.transform=`translateX(${A}px)`}}},[u,e,t]);return Jv(k,100),x.useEffect(()=>{s.current&&(s.current.style.opacity="1")},[]),x.useLayoutEffect(()=>(h==null||h(s),()=>{v==null||v(s)}),[]),y.jsx(y.Fragment,{children:y.jsxs(ny,{targetElement:p,$reverse:u,rootRef:$,children:[y.jsx(ty,{}),y.jsx(ey,{ref:Ct(a,s),...l,className:r+" dropdown-container",$alignSelf:o,$dropContainerCssMixin:i})]})})});yh.displayName="DropdownContainer";const xh=j(yh)`
  ${e=>e.theme.shadow["Shadow 08"]}
  border-radius: ${e=>No(e.theme.shape)};
  overflow: hidden;
  width: max-content;
`;xh.displayName="StyledDropdownContainer";const ry=(e,t)=>{let n,r=!1,o=!1;return[(...i)=>{if(o||r)return;const l=e(...i);return r=!0,n=window.setTimeout(()=>{r=!1},t),l},()=>{o=!0,clearTimeout(n)}]};function oy(e,t){wh(e,t,"data-container",!0)}function iy(e,t){wh(e,t,"data-field",!1)}function wh(e,t,n,r){Object.keys(e).forEach(o=>{typeof o=="string"&&o.startsWith(n)&&(t[o]=e[o],r&&delete e[o])})}const Ir=x.forwardRef((e,t)=>{const n=x.useRef(null),{className:r,maxLength:o,displayInline:i,status:l,required:a,extraText:s,label:u,id:d=hh(),disabled:p,displayCharacterCounter:h,skeleton:v,...g}=e,$={className:r,extraText:s,status:l,required:a,label:u,id:d,displayInline:i,disabled:p,maxLength:o,inputRef:n,displayCharacterCounter:h,skeleton:v,"data-field-id":d,"data-field-name":g.name};iy(g,$),oy(g,$);const k={ref:Ct(t,n),id:d,"aria-required":a,status:l,disabled:p,maxLength:o,skeleton:v,...g};return y.jsx(gh,{...$,children:y.jsx(ss,{...k})})});Ir.displayName="InputField";function ly(e=document){return[...e.querySelectorAll('a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter(t=>!t.hasAttribute("disabled"))}var yd;function us(){return us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},us.apply(this,arguments)}var ay=function(e){return x.createElement("svg",us({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),yd||(yd=x.createElement("path",{fill:"#717681",d:"M5 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4m14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-5 2a2 2 0 1 0-4 0 2 2 0 0 0 4 0"})))};const cs=e=>e&&e.ownerDocument||document,ds=e=>cs(e).defaultView||window,xd=e=>parseInt(ds(e).getComputedStyle(e).paddingRight,10)||0,sy=e=>{const t=e,n=[];if((l=>{const a=cs(l);return a.body===l?ds(l).innerWidth>a.documentElement.clientWidth:l.scrollHeight>l.clientHeight})(t)){n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${xd(t)+Ii()}px`;const l=cs(t).querySelectorAll('*[style="position:fixed"]');[].forEach.call(l,a=>{n.push({value:a.style.paddingRight,property:"padding-right",el:a}),a.style.paddingRight=`${xd(a)+Ii()}px`})}const r=t.parentElement,o=ds(t),i=(r==null?void 0:r.nodeName)==="HTML"&&o.getComputedStyle(r).overflowY==="scroll"?r:t;return n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden",()=>{n.forEach(({value:l,el:a,property:s})=>{l?a.style.setProperty(s,l):a.style.removeProperty(s)})}};function Gl(e,t){let n=-1;return e.some((r,o)=>!!t(r)&&(n=o,!0)),n}const Ql=new class{constructor(){ml(this,"containers");ml(this,"modals");this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(n!==-1)return n;n=this.modals.length,this.modals.push(e);const r=Gl(this.containers,o=>o.container===t);return r!==-1?(this.containers[r].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null}),n)}mount(e){const t=Gl(this.containers,r=>r.modals.indexOf(e)!==-1),n=this.containers[t];n.restore||(n.restore=sy(n.container))}remove(e){const t=this.modals.indexOf(e);if(t===-1)return t;const n=Gl(this.containers,o=>o.modals.indexOf(e)!==-1),r=this.containers[n];return r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(t,1),r.modals.length===0&&(r.restore&&r.restore(),this.containers.splice(n,1)),t}},uy=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({theme:e})=>e.color["Opacity/Modal"]};
  transition: opacity 0.3s ease 0s;
  z-index: ${({theme:e})=>e.zIndex.modal};
  ${e=>e.$overlayStyledCss}
  outline: none;
`,cy=_`
  width: ${({$dimension:e,$mobile:t})=>{if(t)return"calc(100% - 32px)";switch(e){case"s":return"384px";case"m":return"488px";case"xl":return"800px";default:return"592px"}}};
`,dy=j.h5`
  ${({$mobile:e})=>e?fe["Header/H6"]:fe["Header/H5"]};
  color: ${({theme:e})=>e.color["Neutral/Neutral 90"]};
  margin: 0;
  padding: ${({$mobile:e,$displayCloseIcon:t})=>e?t?"0 46px 8px 16px":"0 16px 8px":t?"0 56px 8px 24px":"0 24px 8px"};
`,fy=j.div`
  overflow-y: auto;
  outline: none;
  padding: ${({$scrollbar:e,$mobile:t})=>`8px ${(t?16:24)-e}px 8px ${t?16:24}px`};
`,py=j.div`
  display: flex;
  flex-direction: ${({$mobile:e})=>e?"column-reverse":"row-reverse"};
  padding: ${({$mobile:e})=>e?"16px 16px 0":"16px 24px 0"};

  & > button {
    margin: ${({$mobile:e})=>e?"0 0 16px 0":"0 16px 0 0"};
    ${({$mobile:e})=>e&&"width: 100%;"}
  }

  & > button:first-child {
    margin: 0;
  }
`;j.div`
  margin-left: ${({$mobile:e})=>e?16:24}px;
  margin-bottom: ${({$mobile:e})=>e?6:8}px;
  width: 40px;
  height: 40px;

  & *[fill^='#'] {
    fill: ${({theme:e,$status:t})=>e.color[function(n){switch(n){case"success":return"Success/Success 50 Main";case"warning":return"Warning/Warning 50 Main";case"danger":return"Error/Error 60 Main";default:return"Primary/Primary 60 Main"}}(t)]};
  }
`;const hy=j.div`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 0 24px;
  ${cy};
  max-height: ${({$mobile:e})=>e?"84vh":"90vh"};
  background-color: ${({theme:e})=>e.color["Special/Elevated BG"]};
  ${({theme:e})=>e.shadow["Shadow 16"]}
  border-radius: ${e=>$1(e.theme.shape)};
  ${({$mobile:e})=>e?fe["Body/Body 2 Long"]:fe["Body/Body 1 Long"]}
  color: ${({theme:e})=>e.color["Neutral/Neutral 90"]};
  outline: none;
`,my=j(O1)`
  position: absolute;
  top: 16px;
  right: ${({$mobile:e})=>e?12:20}px;
`,gy=_``,pl=x.createContext({mobile:!1,displayCloseIcon:!0}),Sh=x.forwardRef(({overlayStyledCss:e=gy,overlayClassName:t,overlayStyle:n,dimension:r="l",container:o,mobile:i=!1,onClose:l,closeOnEscapeKeyDown:a,closeOnOutsideClick:s,displayCloseIcon:u=!0,children:d,locale:p,...h},v)=>{const g=ih()||mu,$=(p==null?void 0:p.closeButtonAriaLabel)||g.locales[g.currentLocale].modal.closeButtonAriaLabel,k=x.useRef({}),f=x.useRef(null),c=x.useRef(null),m=x.useRef(null),w=()=>(k.current.modalEl=f.current,k.current.containerEl=o||document.body,k.current);return x.useLayoutEffect(()=>{var S;return m.current=document.activeElement,(S=f.current)==null||S.focus(),Ql.add(w(),o||document.body),f.current&&Ql.mount(w()),()=>{var E;(E=m.current)==null||E.focus(),Ql.remove(w())}},[]),ll.createPortal(y.jsx(uy,{ref:c,tabIndex:-1,onMouseDown:S=>{s&&S.target===c.current&&(l==null||l())},onKeyDown:S=>{if(S.key==="Escape"&&a)S.preventDefault(),S.stopPropagation(),l==null||l();else if(S.key==="Tab"){const E=ly(f.current);S.shiftKey?document.activeElement!==E[0]&&document.activeElement!==f.current||(E[E.length-1].focus(),S.preventDefault()):document.activeElement===E[E.length-1]&&(E[0].focus(),S.preventDefault())}},$overlayStyledCss:e,className:t,style:n,children:y.jsxs(hy,{ref:Ct(v,f),tabIndex:-1,role:"dialog","aria-modal":!0,$dimension:r,$mobile:i,...h,children:[y.jsx(pl.Provider,{value:{mobile:i,displayCloseIcon:u},children:d}),u&&y.jsx(my,{dimension:"lSmall","aria-label":$,$mobile:i,onClick:S=>{S.stopPropagation(),l==null||l()}})]})}),o||document.body)});Sh.displayName="Modal";const vy=({children:e,...t})=>{const{mobile:n,displayCloseIcon:r}=x.useContext(pl);return y.jsx(dy,{$mobile:n,$displayCloseIcon:r,as:n?"h6":"h5",...t,children:e})},yy=({children:e,...t})=>{const n=x.useRef(null),[r,o]=x.useState(!1),[i,l]=x.useState(0),a=x.useContext(pl).mobile;return x.useLayoutEffect(()=>{n.current&&$n(n.current)!==r&&(l(n.current.offsetWidth-n.current.clientWidth),o($n(n.current)))},[e,r,o]),x.useLayoutEffect(()=>{if(n.current){const s=new ResizeObserver(()=>{n.current&&$n(n.current)!==r&&(l(n.current.offsetWidth-n.current.clientWidth),o($n(n.current)))});return s.observe(n.current),()=>{s.disconnect()}}},[r,o]),y.jsx(fy,{tabIndex:-1,ref:n,$scrollbar:r?i:0,$mobile:a,...t,children:e})},xy=({children:e,...t})=>{const n=x.useContext(pl).mobile;return y.jsx(py,{$mobile:n,...t,children:e})};var wd;function fs(){return fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},fs.apply(this,arguments)}var wy=function(e){return x.createElement("svg",fs({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},e),wd||(wd=x.createElement("path",{fill:"#717681",d:"M6.03 12.44a.645.645 0 0 1-.21-.48c0-.16.05-.31.17-.44l5.49-6.04c.28-.31.76-.31 1.04 0l5.49 6.04c.24.27.22.68-.04.92a.65.65 0 0 1-.92-.04l-4.4-4.835V18.46a.65.65 0 1 1-1.3 0V7.565L6.95 12.4c-.24.26-.65.28-.92.04"})))};const $h=_`
  padding: ${({$dimension:e})=>{switch(e){case"s":return"6px 13px 5px 12px";case"l":return"12px 17px 11px 16px";case"xl":return"16px 17px 15px 16px";default:return"10px 13px 9px 12px"}}};
`,Sy=_`
  color: ${({theme:e})=>e.color["Neutral/Neutral 90"]};
  ${({$dimension:e})=>e==="l"||e==="xl"?fe["Body/Body 1 Short"]:fe["Body/Body 2 Short"]}
`,$y=_`
  color: ${({theme:e})=>e.color["Neutral/Neutral 90"]};
  ${({$dimension:e})=>e==="l"||e==="xl"?fe["Subtitle/Subtitle 2"]:fe["Subtitle/Subtitle 3"]}
`,ky=_`
  color: ${({theme:e})=>e.color["Neutral/Neutral 90"]};
  ${({$dimension:e})=>e==="l"||e==="xl"?fe["Subtitle/Subtitle 2"]:fe["Subtitle/Subtitle 3"]}
`,Ey=_`
  color: ${({theme:e})=>e.color["Neutral/Neutral 50"]};
  ${({$dimension:e})=>e==="l"||e==="xl"?fe["Body/Body 2 Long"]:fe["Caption/Caption 1"]}
`,kh=_`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Eh=_`
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({$lineClamp:e})=>e};
  overflow: hidden;
`,Py=_`
  color: ${({theme:e})=>e.color["Neutral/Neutral 30"]};
  pointer-events: none;
`,Cy=_`
  border-bottom: 1px solid ${({theme:e})=>e.color["Neutral/Neutral 20"]};
`,Ny=_`
  ${({theme:e,selected:t,$error:n,$success:r,disabled:o,$grey:i,$status:l,$rowStatusMap:a})=>o?e.color["Neutral/Neutral 00"]:t?e.color["Primary/Primary 20"]:l&&(a!=null&&a[l])?typeof a[l]=="string"?a[l]:a[l](e.color):n?e.color["Error/Error 20"]:r?e.color["Success/Success 20"]:i?e.color["Neutral/Neutral 05"]:e.color["Neutral/Neutral 00"]}
`,Ph=e=>{switch(e){case"s":return 32;case"l":return 48;case"xl":return 56;default:return 40}},Ch=_`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 5;
  width: ${({$dimension:e})=>Ph(e)}px;
  padding: ${({$dimension:e})=>{switch(e){case"s":return"0px";case"l":return"6px 0 5px";case"xl":return"10px 0 9px";default:return"4px 0 3px"}}};
`,Ty=_`
  ${Ch};
  left: ${({$dimension:e,$offset:t})=>t-Ph(e)}px;
`,Nh=j.div`
  position: absolute;
  right: -8px;
  z-index: 1;
  top: 0;
  width: ${"17px"};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: ${({disabled:e})=>e?"pointer":"col-resize"};

  padding: ${({$dimension:e})=>{switch(e){case"s":return"8px 0 7px 0";case"l":return"14px 0 13px 0";case"xl":return"18px 0 17px 0";default:return"12px 0 11px 0"}}};
`,_y=j.div`
  box-sizing: border-box;
  width: 1px;
  height: 100%;
  background: ${({theme:e})=>e.color["Neutral/Neutral 20"]};
`;function Sd({name:e,disabled:t,dimension:n,columnMinWidth:r,onChange:o}){const i=x.useRef(null),l=x.useRef(0),[a,s]=x.useState(!1),u=g=>{var c,m;g.preventDefault();const $=((m=(c=i.current)==null?void 0:c.parentElement)==null?void 0:m.getBoundingClientRect().width)||100,k=g.changedTouches?g.changedTouches[0].clientX:g.clientX;let f=$-(l.current-k);f=f>=r?f:r,$!==f&&o({name:e,width:f}),l.current=k},d=g=>{g.preventDefault(),g.stopPropagation(),s(!0),l.current=g.changedTouches?g.changedTouches[0].clientX:g.clientX},p=g=>{a&&(u(g),s(!1))},[h,v]=ry(g=>{a&&u(g)},100);return x.useEffect(()=>{if(!t)return document.addEventListener("mousemove",h),document.addEventListener("mouseup",p),document.addEventListener("touchmove",h),document.addEventListener("touchend",p),()=>{v(),document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",p),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",p)}}),x.useEffect(()=>{const g=i.current;if(!t&&g)return g.addEventListener("mousedown",d),g.addEventListener("touchstart",d),()=>{g.removeEventListener("mousedown",d),g.removeEventListener("touchstart",d)}},[t]),y.jsx(Nh,{ref:i,disabled:t,$dimension:n,children:y.jsx(_y,{})})}const Th=j.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: ${({theme:e})=>e.color["Neutral/Neutral 00"]};

  &[data-dragging='true'] ${Nh} {
    pointer-events: none;
  }
`,_h=j.div`
  display: flex;
  position: sticky;
  left: 0;
  z-index: 5;
`,ps=j(_h)`
  background: ${({theme:e,$greyHeader:t})=>t?e.color["Neutral/Neutral 05"]:e.color["Neutral/Neutral 00"]};
  transition: box-shadow 0.3s;
  ${Th}[data-shadow='true'] & {
    box-shadow: 4px 0 12px rgba(138, 150, 168, 0.16);
  }
`,My=j.div`
  display: flex;
`,jy=j.div`
  ${Ch};
  right: 0;
  bottom: 1px;
  background: ${({theme:e,$greyHeader:t})=>t?e.color["Neutral/Neutral 05"]:e.color["Neutral/Neutral 00"]};
`,Bi=j.div`
  will-change: margin-left;
  transform: translate3d(0, 0, 0);
  ${Ty};

  ${({$showRowsActions:e})=>!e&&_`
      visibility: hidden;
      &:hover {
        visibility: visible;
      }
    `}
`,Su=j.div`
  display: flex;
  flex: 1 1 auto;
  width: unset;
`,Oy=j.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;

  &[data-verticalscroll='true'] {
    &:after {
      position: absolute;
      content: '';
      box-sizing: border-box;
      top: 0;
      right: 0;
      height: 100%;
      background: ${({theme:e,$greyHeader:t})=>t?e.color["Neutral/Neutral 05"]:e.color["Neutral/Neutral 00"]};
      width: ${({$scrollbar:e})=>e}px;
      border-bottom: 1px solid ${({theme:e})=>e.color["Neutral/Neutral 20"]};
    }
    & > div.tr {
      overflow-y: scroll;
    }
    & > [data-overflowmenu='true'] {
      margin-right: ${({$scrollbar:e})=>e}px;
    }
  }

  ${({$greyHeader:e})=>e&&_`
      & > div.tr {
        background: ${({theme:t})=>t.color["Neutral/Neutral 05"]};
      }
    `}
`,Fy=j.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 0 auto;
  overflow-x: hidden;
  ${ky};

  & > * {
    border-bottom: 1px solid ${({theme:e})=>e.color["Neutral/Neutral 20"]};
  }
`,hs=j.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1 1 auto;
`;j.div`
  position: relative;
  display: flex;
  flex: 1 0 auto;
  width: 100%;
  height: 100%;
  cursor: pointer;
  &:hover {
    &:before {
      position: absolute;
      content: '';
      top: -6px;
      bottom: -6px;
      left: -6px;
      right: -6px;
      border-radius: 50%;
      background: ${({theme:e})=>e.color["Opacity/Hover"]};
    }
  }
  ${({disabled:e})=>e&&"pointer-events: none;"}
`;const Mh=j(k1)`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${e=>e.$isOpened?180:0}deg);
`,jh=j(ch)`
  margin: 0;
  flex-shrink: 0;
`,Ly=j.div`
  position: relative;
`,zy=j(wy)`
  display: flex;
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
  transform: rotate(0deg);
  margin: 2px 0;

  & *[fill^='#'] {
    fill: ${({theme:e,$sort:t})=>t==="initial"?"transparent":e.color["Primary/Primary 60 Main"]};
  }
  ${({$sort:e})=>e==="desc"?"transform: rotate(180deg);":""}
`,Oh=j.div`
  position: absolute;
  top: 1px;
  right: 0;
  font-family: 'VTB Group UI', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 8px;
  line-height: 9px;
  font-feature-settings:
    'tnum' on,
    'lnum' on;
  color: ${e=>e.theme.color["Primary/Primary 60 Main"]};
`,_o=j.div`
  display: flex;
  align-items: flex-start;
  flex: 0 0 auto;
  box-sizing: border-box;
  ${$h};
  overflow: hidden;
`,Ry=j.div`
  display: block;
  align-items: center;
  width: 100%;
  margin: 2px 0;
  ${({$cellAlign:e})=>e==="right"&&"text-align: right;"}
  overflow: hidden;
`,Ay=j.div`
  display: block;
  align-items: center;
  width: 100%;
  overflow: hidden;
`,Wi=j(_o)`
  width: ${({$dimension:e})=>e==="s"||e==="m"?44:56}px;
  padding: ${({$dimension:e})=>{switch(e){case"s":return"8px 14px 7px 14px";case"l":return"14px 18px 13px 18px";case"xl":return"18px 18px 17px 18px";default:return"12px 14px 11px 14px"}}};
`,Hi=j(_o)`
  width: ${({$dimension:e})=>e==="s"||e==="m"?44:56}px;
  padding: ${({$dimension:e})=>{switch(e){case"s":return"6px 12px 5px 12px";case"l":return"12px 16px 11px 16px";case"xl":return"16px 16px 15px 16px";default:return"10px 12px 9px 12px"}}};
`,Fh=j.div`
  position: relative;
  display: inline-flex;
  box-sizing: border-box;
  flex: 0 0 auto;
  ${$h}
  &:hover {
    cursor: pointer;
  }
  align-items: flex-start;
`,Dy=j.div`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  width: 100%;
  ${({$cellAlign:e})=>e==="right"&&_`
      flex-direction: row-reverse;
      & > ${Lh} {
        text-align: right;
        flex-direction: row-reverse;
      }
    `}
`,Iy=j.div`
  display: flex;
  align-self: stretch;
  width: ${e=>e.width?e.width:"12px"};
  flex-shrink: 0;
`,Lh=j.div`
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  &:hover {
    *[fill^='#'] {
      fill: ${({theme:e,$sort:t})=>t==="initial"?e.color["Neutral/Neutral 50"]:e.color["Primary/Primary 70"]};
    }

    ${Oh} {
      color: ${({theme:e,$sort:t})=>t==="initial"?e.color["Neutral/Neutral 50"]:e.color["Primary/Primary 70"]};
    }
  }
`,by=j.div`
  display: flex;
  flex-direction: column;

  // leave 20px/16px for SortIcon
  max-width: ${({$sortable:e,$dimension:t})=>e?`calc(100% - ${t==="s"||t==="m"?16:20}px)`:"100%"};
`,By=j.div`
  position: relative;
  width: 100%;
  ${({$lineClamp:e})=>e===1?kh:Eh}
`,Wy=j.div`
  position: relative;
  width: 100%;
  margin: 2px 0;
  ${Ey}
  ${({$lineClamp:e})=>e===1?kh:Eh}
`,Hy=_`
  width: ${e=>`${e.$rowWidth}px`};
`,Uy=_`
  cursor: pointer;
  & > .tr-simple > *,
  & ${Bi} {
    background: ${({theme:e})=>e.color["Primary/Primary 10"]};
  }
`,zh=j.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  background: ${({theme:e})=>e.color["Neutral/Neutral 00"]};
  ${e=>e.$isGroup?$y:Sy}
  ${({disabled:e})=>e&&Py}
  ${({$underline:e})=>e&&Cy}
  ${({$rowWidth:e})=>e&&Hy}
   &:hover:is(.hoverable) {
    ${({$hover:e})=>e&&Uy}
  }
`,Vy=j.div`
  display: inline-flex;
  min-width: max-content;

  & > *,
  & + ${Bi} {
    background: ${Ny};
  }

  ${({$showRowsActions:e})=>!e&&_`
      &:hover {
        & + ${Bi} {
          visibility: visible;
        }
      }
      & + div[data-opened='true'] {
        visibility: visible;
      }
    `}
`,Gy=j.div`
  display: inline-flex;
  overflow: hidden;
  transition: height 250ms cubic-bezier(0.4, 0, 0.2, 1);
`,Qy=j.div`
  display: flex;
  flex: 1 0 auto;
  height: fit-content;
  box-sizing: border-box;
  padding: 0 12px 11px 12px;
`,Yy=j(_o)`
  margin: 2px 0;
  color: ${({theme:e})=>e.color["Neutral/Neutral 50"]};
`,Ky=j.div`
  display: flex;
  flex: 0 0 auto;
  width: calc(100% - ${e=>{return t=e.$dimension,n=e.$selectionColumn,r=e.$expansionColumn,(n?t==="s"||t==="m"?44:56:0)+(r?t==="s"||t==="m"?44:56:0)+"px";var t,n,r}});
`,Xy=j.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  visibility: hidden;
  display: flex;
  overflow: hidden;

  &[data-verticalscroll='true'] {
    overflow-y: scroll;
  }
`,Zy=j(Fh)`
  position: fixed;
  z-index: 6;
  visibility: hidden;
  display: flex;
  max-width: 200px;
  ${({theme:e})=>e.shadow["Shadow 08"]}
  background: ${({theme:e})=>e.color["Neutral/Neutral 00"]};
  color: ${({theme:e})=>e.color["Neutral/Neutral 90"]};
  ${({$dimension:e})=>e==="s"||e==="m"?fe["Subtitle/Subtitle 3"]:fe["Subtitle/Subtitle 2"]}
  padding-left: ${({$dimension:e})=>e==="s"||e==="m"?36:40}px;

  &[data-cursor='normal'] {
    cursor: grabbing;
  }
  &[data-cursor='error'] {
    cursor: not-allowed;
  }
`,qy=j.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Jy=({row:e,dimension:t,displayRowSelectionColumn:n,checkboxDimension:r,renderCell:o,onRowExpansionChange:i,onRowSelectionChange:l,indeterminate:a,checked:s})=>{var u,d;return y.jsxs(y.Fragment,{children:[y.jsxs(_h,{children:[y.jsx(Hi,{$dimension:t,className:"td_expand","data-column":"expand","data-row":e.id,children:y.jsx(jh,{dimension:t==="s"||t==="m"?"mBig":"lBig",disabled:!(!e.disabled&&((u=e.groupRows)==null?void 0:u.length)!==0)||void 0,highlightFocus:!1,onClick:p=>{p.stopPropagation(),i==null||i(e.id)},children:y.jsx(Mh,{$isOpened:e.expanded,"aria-hidden":!0})})}),n&&y.jsx(Wi,{$dimension:t,className:"td_checkbox","data-column":"checkbox","data-row":e.id,children:y.jsx(So,{disabled:e.disabled||e.checkboxDisabled||((d=e.groupRows)==null?void 0:d.length)===0,dimension:r,checked:!!s,indeterminate:a,onChange:()=>{l==null||l(e.id)},onClick:p=>{p.stopPropagation()}})}),y.jsx(_o,{$dimension:t,className:"td","data-column":"group","data-row":e.id,children:e.renderGroupTitle?e.renderGroupTitle(e):o?o(e,"group"):y.jsx(Ay,{children:e.groupTitle||""})},`${e.id}`)]}),y.jsx(Su,{})]})},ex=({row:e,dimension:t,checkboxDimension:n,columns:r,stickyColumns:o,displayRowSelectionColumn:i,displayRowExpansionColumn:l,onRowExpansionChange:a,onRowSelectionChange:s,renderBodyCell:u})=>y.jsxs(y.Fragment,{children:[(i||l||o.length>0)&&y.jsxs(ps,{children:[l&&y.jsx(Hi,{$dimension:t,className:"td_expand","data-column":"expand","data-row":e.id,children:e.expandedRowRender&&y.jsx(jh,{style:{margin:0,flexShrink:0},dimension:t==="s"||t==="m"?"mBig":"lBig",disabled:!!e.disabled||void 0,highlightFocus:!1,onClick:d=>{d.stopPropagation(),a==null||a(e.id)},children:y.jsx(Mh,{$isOpened:e.expanded,"aria-hidden":!0})})}),i&&y.jsx(Wi,{$dimension:t,className:"td_checkbox","data-column":"checkbox","data-row":e.id,children:y.jsx(So,{disabled:e.disabled||e.checkboxDisabled,dimension:n,checked:!!e.selected,onChange:()=>s==null?void 0:s(e.id),onClick:d=>{d.stopPropagation()}})}),o.length>0&&o.map(d=>u(e,d))]}),r.map(d=>d.sticky?null:u(e,d)),y.jsx(Su,{})]}),tx=({tableWidth:e,row:t,dimension:n,verticalScroll:r,scrollbar:o,showRowsActions:i,...l})=>{var s;const a=x.useRef(null);return y.jsx(Bi,{ref:a,"data-overflowmenu":!0,"data-opened":i,$offset:e-(r?o:0),$dimension:n,$showRowsActions:i,...l,children:t.actionRender?t.actionRender(t):(s=t.overflowMenuRender)==null?void 0:s.call(t,t,u=>{i||(u?a.current&&(a.current.dataset.opened="true"):a.current&&(a.current.dataset.opened="false"))})})},nx=({children:e,in:t=!1,timeout:n=300,onEnter:r,onEntering:o,onEntered:i,onExit:l,onExiting:a,onExited:s,...u})=>{const[d,p]=x.useState(t?"entered":"exited"),h=x.useRef(t?"entered":"exited"),v=x.useRef(0);x.useEffect(()=>()=>{c()},[]),x.useEffect(()=>{let w=null;t?h.current!=="entering"&&h.current!=="entered"&&(w="entering"):h.current!=="entering"&&h.current!=="entered"||(w="exiting"),$(w)},[t]),x.useEffect(()=>{if(h.current!==d){h.current=d;const{enter:w,exit:S}=g();d=="entering"?(o==null||o(),m(w,()=>{p("entered")})):d=="exiting"?(a==null||a(),m(S,()=>{p("exited")})):d=="entered"?i==null||i():d=="exited"&&(s==null||s())}},[d]);const g=()=>{let w,S;return typeof n=="number"?w=S=n:(w=n.exit,S=n.enter),{exit:w,enter:S}},$=w=>{w!==null&&(c(),w==="entering"?k():f())},k=()=>{r==null||r(),p("entering")},f=()=>{l==null||l(),p("exiting")},c=()=>{clearTimeout(v.current)},m=(w,S)=>{v.current=setTimeout(S,w)};return y.jsx(y.Fragment,{children:typeof e=="function"?e(d,u):x.cloneElement(x.Children.only(e),u)})},rx=({row:e,rowRef:t})=>{var i;const n=x.useRef(null),r=x.useRef(null);x.useEffect(()=>{o(e.expanded?"auto":"0px")},[]);const o=l=>{var u;const a=(((u=r.current)==null?void 0:u.clientHeight)||0)+"px",s=l??a;n.current&&(n.current.style.height=s)};return y.jsx(nx,{in:!!e.expanded,timeout:250,onEnter:()=>{o("0px")},onEntered:()=>{o("auto")},onEntering:()=>{o()},onExit:()=>{o()},onExiting:()=>{o("0px")},children:y.jsx(Gy,{ref:n,className:"tr-expanded",onMouseEnter:()=>{var l;(l=t.current)==null||l.classList.remove("hoverable")},onMouseLeave:()=>{var l;(l=t.current)==null||l.classList.add("hoverable")},children:y.jsx(Qy,{ref:r,children:(i=e.expandedRowRender)==null?void 0:i.call(e,e)})})})},ox=({row:e,dimension:t,underline:n,onRowClick:r,onRowDoubleClick:o,children:i,tableWidth:l,isGroup:a,rowWidth:s,verticalScroll:u,scrollbar:d,grey:p,showRowsActions:h,rowStatusMap:v,...g})=>{const $=x.useRef(null);return y.jsxs(zh,{...g,ref:$,onClick:()=>{return k=e.id,void(r==null?void 0:r(k));var k},onDoubleClick:()=>{return k=e.id,void(o==null?void 0:o(k));var k},$underline:n,disabled:!!e.disabled,$dimension:t,className:`tr ${e.className||""} hoverable`,"data-row":e.id,$isGroup:a,$rowWidth:s,$hover:!!e.hover,children:[y.jsx(Vy,{className:"tr-simple",$showRowsActions:h,selected:!!e.selected,disabled:!!e.disabled,$status:e.status,$rowStatusMap:v,$error:!!e.error,$success:!!e.success,$grey:!!p,children:i}),(h||e.overflowMenuRender||e.actionRender)&&y.jsx(tx,{dimension:t,tableWidth:l,row:e,verticalScroll:u,scrollbar:d,onClick:k=>{k.stopPropagation()},showRowsActions:h}),e.expandedRowRender&&y.jsx(rx,{row:e,rowRef:$})]})},ix=_`
  & *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Primary/Primary 60 Main"]};
  }
`,lx=j.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  border: 0;
  outline: none;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  padding: 0;
  margin: 2px 0;
`,ax=j.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;

  & svg {
    flex-shrink: 0;
    width: ${({$iconSize:e})=>e};
    height: ${({$iconSize:e})=>e};
  }

  & *[fill^='#'] {
    fill: ${({theme:e})=>e.color["Neutral/Neutral 50"]};
  }

  &:hover {
    *[fill^='#'] {
      fill: ${({theme:e})=>e.color["Primary/Primary 70"]};
    }
  }

  ${({$isFilterActive:e})=>e&&ix}
`,sx=x.forwardRef(({dimension:e,renderFilterIcon:t,isFilterActive:n,...r},o)=>{const i=e==="s"||e==="m"?"16px":"20px",l=x.useRef(null);return x.useEffect(()=>{const a=l.current;function s(u){u.stopPropagation()}if(a)return a.addEventListener("mousemove",s),a.addEventListener("touchmove",s),()=>{a.removeEventListener("mousemove",s),a.removeEventListener("touchmove",s)}},[]),y.jsx(lx,{ref:Ct(o,l),type:"button",...r,children:y.jsx(ax,{$isFilterActive:n,$iconSize:i,children:t?t():y.jsx(ay,{"aria-hidden":!0})})})}),ux=j(xh)`
  background-color: ${e=>e.theme.color["Special/Elevated BG"]};
`,cx=x.forwardRef(({column:e,targetElement:t,...n},r)=>{const{renderFilter:o,renderFilterIcon:i,onFilterMenuClickOutside:l,onFilterMenuOpen:a,onFilterMenuClose:s,isFilterActive:u,filterMenuAlignSelf:d="flex-end",filterMenuCssMixin:p,filterMenuClassName:h,filterMenuStyle:v}=e,[g,$]=x.useState(!1),[k,f]=x.useState(!1),c=x.useRef(null),m=()=>{var w;$(!1),s==null||s(),(w=c.current)==null||w.focus()};return y.jsxs(y.Fragment,{children:[y.jsx(sx,{ref:Ct(r,c),onKeyDown:w=>{const S=O.getCode(w);S!==O.ArrowDown&&S!==O.Enter&&S!==O[" "]||($(!0),a==null||a(),w.preventDefault())},onClick:()=>{$(w=>(w?s==null||s():a==null||a(),!w))},"aria-expanded":g,"aria-haspopup":g,isFilterActive:u??k,renderFilterIcon:i,...n}),g&&y.jsx(ux,{role:"listbox",targetElement:t,alignSelf:d,onClickOutside:w=>{var S;w.target&&((S=c.current)!=null&&S.contains(w.target))||(l==null||l({closeMenu:m,setFilterActive:f},w))},onKeyDown:w=>{const S=O.getCode(w);S!==O.Escape&&S!==O.Tab||m()},dropContainerCssMixin:p,className:h,style:v,children:o==null?void 0:o({closeMenu:m,setFilterActive:f},e)})]})}),$d=({lineClamp:e,dimension:t,extraText:n,title:r})=>{const o=x.useRef(null),[i,l]=x.useState(!1),[a,s]=x.useState(!1),u=typeof r=="string"||typeof r=="number";return x.useLayoutEffect(()=>{const d=o.current;d&&$n(d)!==i&&l($n(d))},[a,l]),x.useLayoutEffect(()=>{function d(){s(!0)}function p(){s(!1)}const h=o.current;if(h)return h.addEventListener("mouseenter",d),h.addEventListener("mouseleave",p),()=>{h.removeEventListener("mouseenter",d),h.removeEventListener("mouseleave",p)}},[s]),y.jsxs(y.Fragment,{children:[n?y.jsx(Wy,{ref:o,$dimension:t,$lineClamp:e,children:r}):y.jsx(By,{ref:o,$lineClamp:e,children:r}),i&&a&&u&&y.jsx(vu,{targetElement:o.current,renderContent:()=>r})]})},dx=({sort:e,sortOrder:t,multipleSort:n,iconSize:r})=>{const o=x.useRef(null);return x.useEffect(()=>{const i=o.current;function l(a){a.stopPropagation()}if(i)return i.addEventListener("mousemove",l),i.addEventListener("touchmove",l),()=>{i.removeEventListener("mousemove",l),i.removeEventListener("touchmove",l)}},[]),y.jsxs(Ly,{ref:o,children:[y.jsx(zy,{$sort:e||"initial",width:r,height:r}),n&&e&&t&&y.jsx(Oh,{children:t})]})},fx=100,px=({column:e,columnsAmount:t,showDividerForLastColumn:n,disableColumnResize:r,headerLineClamp:o,headerExtraLineClamp:i,spacingBetweenItems:l,dimension:a,handleResizeChange:s,handleSort:u,multipleSort:d,columnMinWidth:p,index:h})=>{const{name:v,title:g,extraText:$,width:k=fx,cellAlign:f="left",sortable:c=!1,sort:m,sortOrder:w,disableResize:S=!1,draggable:E=!1,renderFilter:P}=e,T=a==="s"||a==="m"?16:20,W=a==="l"||a==="xl"?"16px":"12px",A=l||W,K=typeof k=="number"?k+"px":k,le=x.useRef(null);return y.jsxs(Fh,{$dimension:a,style:{width:K,minWidth:K},className:"th","data-draggable":E,"data-th-column":v,"data-th-title":g,ref:le,children:[y.jsxs(Dy,{$cellAlign:f,children:[y.jsxs(Lh,{$sort:m||"initial",onClick:c?()=>u(v,m||"initial"):void 0,children:[y.jsxs(by,{$dimension:a,$sortable:c,children:[y.jsx($d,{dimension:a,lineClamp:o,title:g}),$&&y.jsx($d,{extraText:!0,dimension:a,lineClamp:i,title:$})]}),c&&y.jsx(dx,{sort:m,sortOrder:w,multipleSort:d,iconSize:T})]}),y.jsx(Iy,{width:P?A:parseInt(A)-parseInt(W)+"px"}),P&&y.jsx(cx,{column:e,dimension:a,targetElement:le.current})]}),h<t-1&&y.jsx(Sd,{name:v,onChange:s,disabled:S||r,dimension:a,columnMinWidth:p}),h===t-1&&n&&y.jsx(Sd,{name:v,onChange:s,disabled:S||r,dimension:a,columnMinWidth:p})]})};function hx(e,t,n,r,o){let i,l,a,s,u,d,p,h,v,g=null,$=null;const k={...t,direction:t.direction??"horizontal",accepts:t.accepts??mx,invalid:t.invalid??gx,containers:[...e]},f={containers:k.containers,unobserve:function(){m(!0),A({})},dragging:!1};return m(),f;function c(D){return f.containers.indexOf(D)!==-1}function m(D){const b=D?"remove":"add";Or(document.documentElement,b,"mousedown",P),Or(document.documentElement,b,"mouseup",A)}function w(D){const b=D?"remove":"add";Or(document.documentElement,b,"mousemove",T)}function S(D){ms[D?"remove":"add"](document.documentElement,"click",E)}function E(D){h&&D.preventDefault()}function P(D){const b=function(C){if(f.dragging&&i||c(C))return;const F=C;for(;mn(C)&&c(mn(C))===!1;)if(k.invalid(C,F)||!(C=mn(C)))return;const L=mn(C);if(L&&!k.invalid(C,F))return{item:C,source:L}}(D.target);b&&(h=b,w(),D.type==="mousedown"&&D.preventDefault())}function T(D){if(!h||D.movementX==0&&D.movementY==0)return;const b=h;var C;if(w(!0),S(),function(){f.dragging&&K()}(),l=(C=b).source,a=C.item,$=C.item,d=p=C.item.nextElementSibling,f.dragging=!0,r==null||r(),a){const F=function(L){const I=L.getBoundingClientRect();return{left:I.left+window.scrollX,top:I.top+window.scrollY}}(a);s=Dn("pageX",D)-F.left,u=Dn("pageY",D)-F.top,a.dataset.dragover="true",function(){const L=k.mirrorRef.current;if(!(i&&!L)&&L&&k.direction==="horizontal"){const I=L.parentElement,U=a.dataset.thTitle??"";L.lastElementChild&&(L.lastElementChild.innerHTML=U),L.style.visibility="visible",i=k.mirrorRef.current,Or(document.documentElement,"add","mousemove",X),I&&(v=I.style.userSelect,I.style.userSelect="none")}}(),X(D)}}function W(){h=!1,w(!0),S(!0)}function A(D){if(W(),!f.dragging)return;const b=Dn("clientX",D)||0,C=Dn("clientY",D)||0,F=le(kd(i,b,C),b,C);F&&F!==l?K():function(){f.dragging&&K()}()}function K(){W(),function(){const D=k.mirrorRef.current;if(i&&D){const b=D.parentElement;b&&(b.style.userSelect=v),D.style.visibility="hidden",Or(document.documentElement,"remove","mousemove",X),i=null}}(),a&&delete a.dataset.dragover,f.dragging=!1,o==null||o(),l=a=d=p=g=$=null}function le(D,b,C){let F=D;for(;F&&!L();)F=mn(F);return F;function L(){if(c(F)===!1)return!1;const I=pe(F,D),U=Z(F,I,b,C);return!!function(te,re){let ge;return ge=re!==void 0?re:i?p:a==null?void 0:a.nextElementSibling,te===l&&ge===d}(F,U)||k.accepts(a,F,l,U)}}function X(D){if(!i)return;D.preventDefault();const b=Dn("clientX",D)||0,C=Dn("clientY",D)||0;let F,L;k.direction==="vertical"?(F=b-s,L=C-u):k.direction==="horizontal"&&(F=b-(k.dimension==="s"||k.dimension==="m"?18:20),L=C-i.getBoundingClientRect().height/2),i.style.left=F+"px",i.style.top=L+"px";const I=kd(i,b,C),U=le(I,b,C),me=U!==null&&U!==g;let te;(me||U===null)&&(g=U),i.dataset.cursor=U==null?"error":"normal";const re=pe(U,I);if($!=null&&$.isEqualNode(re)||re==null)$=re;else if($=re,te=Z(U,re,b,C),a&&(te===null&&me||te!==a&&te!==a.nextElementSibling)){if(p=te,a.nextElementSibling===null&&te===null)return;n==null||n(a,te)}}function pe(D,b){let C=b;for(;C!==D&&mn(C)!==D;)C=mn(C);return C===document.documentElement?null:C}function Z(D,b,C,F){const L=k.direction==="horizontal",I=a==null?void 0:a.getBoundingClientRect().right;return b!==D?function(){const me=b.getBoundingClientRect();return U(L&&typeof I=="number"?C>=me.left&&C<me.right&&I<=C:F>me.top+me.height/2)}():function(){const me=D.children.length;for(let te=0;te<me;te++){const re=D.children[te],ge=re.getBoundingClientRect();if(L&&typeof I=="number"&&C>=ge.left&&C<ge.right)return I<=C?re.nextElementSibling:re;if(!L&&ge.top+ge.height/2>F)return re}return null}();function U(me){return me?b.nextElementSibling:b}}}const ms={add:function(e,t,n,r){return e.addEventListener(t,n,r)},remove:function(e,t,n,r){return e.removeEventListener(t,n,r)}};function Or(e,t,n,r){ms[t](e,{mouseup:"touchend",mousedown:"touchstart",mousemove:"touchmove"}[n],r),ms[t](e,n,r)}function kd(e,t,n){const r=e.style.pointerEvents;e.style.pointerEvents="none";const o=document.elementFromPoint(t,n);return e.style.pointerEvents=r,o}function mx(){return!0}function gx(){return!1}function mn(e){return e.parentNode===document?null:e.parentNode}function Dn(e,t){return function(r){return r.targetTouches&&r.targetTouches.length?r.targetTouches[0]:r.changedTouches&&r.changedTouches.length?r.changedTouches[0]:r}(t)[e]}const vx=({onColumnDrag:e,dimension:t,isAnyColumnDraggable:n,isAnyStickyColumnDraggable:r,tableRef:o,scrollBodyRef:i,normalColumnsWrapperRef:l,stickyColumnsWrapperRef:a})=>{const{rootRef:s}=x.useContext(To),[u,d]=x.useState(!1),p=x.useRef(e),h=x.useRef(null);return x.useEffect(()=>{p.current=e},[e]),x.useEffect(()=>{o.current&&(o.current.dataset.dragging=String(u))},[u]),x.useEffect(()=>{if(h.current&&u&&(n||r)){const v=gu(h.current,g=>{var f,c,m;const $=((f=o.current)==null?void 0:f.getBoundingClientRect().right)||0,k=((c=a.current)==null?void 0:c.getBoundingClientRect().right)||((m=o.current)==null?void 0:m.getBoundingClientRect().left)||0;if(i.current){const w=i.current.scrollLeft,S=i.current.scrollWidth,E=i.current.offsetWidth;g.right>$&&S>E&&w+E<S&&i.current.scrollBy({left:Math.abs($-g.right)}),g.left<k&&w>0&&i.current.scrollBy({left:-Math.abs(k-g.left)})}});return v.observe(),()=>v.unobserve()}},[n,r,u]),x.useEffect(()=>{const v=a.current,g=l.current;if(g&&n){const $=hx([g],{mirrorRef:h,dimension:t,direction:"horizontal",invalid:k=>k.dataset.draggable=="false",accepts:(k,f,c,m)=>f===c&&(m==null?void 0:m.dataset.droppable)!="false"},function(k,f){var m,w,S,E,P,T;const c=(m=k==null?void 0:k.dataset)==null?void 0:m.thColumn;c&&(v!=null&&v.contains(k)&&f===null?(E=p.current)==null||E.call(p,c,((S=(w=g==null?void 0:g.firstElementChild)==null?void 0:w.dataset)==null?void 0:S.thColumn)??null):(T=p.current)==null||T.call(p,c,((P=f==null?void 0:f.dataset)==null?void 0:P.thColumn)??null))},function(){d(!0)},function(){d(!1)});return v&&r&&$.containers.push(v),()=>{$.unobserve()}}},[n,r,t]),n||r?ll.createPortal(y.jsx(Zy,{$dimension:t,ref:h,children:y.jsx(qy,{})}),(s==null?void 0:s.current)||document.body):null},Ed=j.div`
  display: flex;
  flex: 0 0 auto;
`,yx=x.forwardRef(({height:e,childHeight:t,renderAhead:n=20,rowList:r,renderRow:o,...i},l)=>{const[a,s]=x.useState(0),u=x.useRef(null);x.useEffect(()=>{function f(m){requestAnimationFrame(()=>{s(m.target.scrollTop)})}const c=u.current;return s((c==null?void 0:c.scrollTop)||0),c==null||c.addEventListener("scroll",f),()=>c==null?void 0:c.removeEventListener("scroll",f)},[]);let d=Math.floor(a/t)-n;d=Math.max(0,d);const p=x.useMemo(()=>r.map((f,c)=>o(f,c)).filter(Boolean),[r,o]),h=p.length;let v=Math.ceil(e/t)+2*n;v=Math.min(h-d,v);const g=d*t+"px",$=(h-d-v)*t+"px",k=x.useMemo(()=>[...p].slice(d,d+v),[p,d,v]);return y.jsxs(hs,{style:{height:e},ref:Ct(l,u),...i,children:[y.jsx(Ed,{style:{minHeight:g}}),k,y.jsx(Ed,{style:{minHeight:$}})]})}),xx={error:e=>e["Error/Error 20"],success:e=>e["Success/Success 20"]},Rh=x.forwardRef(({columnList:e,rowList:t,displayRowSelectionColumn:n=!1,displayRowExpansionColumn:r=!1,headerCheckboxChecked:o=!1,headerCheckboxIndeterminate:i=!1,headerCheckboxDisabled:l=!1,onHeaderSelectionChange:a,onRowSelectionChange:s,onRowExpansionChange:u,onRowClick:d,onRowDoubleClick:p,onSortChange:h,onColumnResize:v,renderCell:g,renderRowWrapper:$,dimension:k="m",greyHeader:f=!1,greyZebraRows:c=!1,spacingBetweenItems:m,headerLineClamp:w=1,headerExtraLineClamp:S=1,showDividerForLastColumn:E=!1,disableColumnResize:P=!1,showLastRowUnderline:T=!0,showRowsActions:W=!1,virtualScroll:A,locale:K,onColumnDrag:le,rowBackgroundColorByStatusMap:X,...pe},Z)=>{const D=ih()||mu,b=k==="s"||k==="m"?"s":"m",C=k==="s"||k==="m"?25:33,[F,L]=x.useState(!1),[I,U]=x.useState(0),[me,te]=x.useState(0),[re,ge]=x.useState(0),Ee=[...e].filter(N=>N.sticky),Nt=e.filter(N=>!N.sticky&&N.draggable).length>0,wr=e.filter(N=>N.sticky&&N.draggable).length>0,pn=x.useMemo(()=>t.some(N=>N.actionRender||N.overflowMenuRender)&&W,[t,W]),yt=x.useMemo(()=>({...xx,...X}),[X]),hn=x.useRef(null),Tt=x.useRef(null),Sr=x.useRef(null),ut=x.useRef(null),$u=x.useRef(null),ku=x.useRef(null),xt=t.reduce((N,z)=>(z.groupRows!==void 0&&(N[z.id]={rows:[...z.groupRows],expanded:!!z.expanded}),N),{}),Ie=Object.entries(xt).reduce((N,[z,B])=>(B.rows.forEach(H=>{const V=t.find(ae=>ae.id.toString()===H);V&&!xt[H]&&(N[H]={groupId:z,checked:!!V.selected})}),N),{}),bt=x.useMemo(()=>(()=>{const N=[];return t.forEach(z=>{const B=!!xt[z.id];Ie[z.id]||N.push(z),B&&xt[z.id].rows.forEach(H=>{const V=t.find(ae=>ae.id.toString()===H);V&&N.push(V)})}),N})(),[t]),Ah=c?bt.reduce((N,z,B)=>{if(Ie[z.id]){const H=xt[Ie[z.id].groupId].rows.indexOf(String(z.id));N[z.id]="ingroup "+(H%2==0?"odd":"even")}else xt[z.id]?N[z.id]="group":B===0||N[bt[B-1].id].includes("group")?N[z.id]="odd":N[z.id]=N[bt[B-1].id]==="odd"?"even":"odd";return N},{}):{};x.useLayoutEffect(()=>{var N;if(Sr.current){const z=(N=Sr.current)==null?void 0:N.querySelectorAll(".th"),B=new ResizeObserver(H=>{H.forEach(V=>{var J,oe;const ae=(J=ut.current)==null?void 0:J.querySelectorAll(`[data-column="${V.target.dataset.thColumn}"]`);ae==null||ae.forEach(Bt=>{Bt.style.width=V.borderBoxSize[0].inlineSize+"px"});const se=(oe=Tt.current)==null?void 0:oe.querySelectorAll(`[data-th-column="${V.target.dataset.thColumn}"]`);se==null||se.forEach(Bt=>{Bt.style.width=V.borderBoxSize[0].inlineSize+"px",Bt.style.minWidth=V.borderBoxSize[0].inlineSize+"px"})})});return z==null||z.forEach(H=>B.observe(H)),()=>{B.disconnect()}}},[Sr.current,Tt.current,ut.current,e,t]),x.useEffect(()=>{const N=Ii();ge(N)},[ge]),x.useLayoutEffect(()=>{const N=ut.current;function z(H){var V;if(ut.current){const ae=ut.current.querySelectorAll("[data-overflowmenu]"),se=F?re:0,J=((V=Tt.current)==null?void 0:V.scrollWidth)||I;ae.forEach(oe=>{oe.style.marginLeft=H<=J-I+se?`${H}px`:`${J-I+se}px`})}}function B(H){H.target===ut.current&&requestAnimationFrame(function(){var V;V=H.target.scrollLeft,Tt.current&&(Tt.current.scrollLeft=V),z(H.target.scrollLeft)}),(Ee.length>0||n||r)&&requestAnimationFrame(function(){(function(V){if(hn.current){const ae=hn.current.getAttribute("data-shadow");V===0?ae!=="false"&&hn.current.setAttribute("data-shadow","false"):ae!=="true"&&hn.current.setAttribute("data-shadow","true")}})(H.target.scrollLeft)})}if(N){N.addEventListener("scroll",B);const H=gu(N,V=>{N.scrollHeight>N.offsetHeight?L(!0):L(!1),U(V.width),te(V.height),z(N.scrollLeft)});return H.observe(),()=>{N.removeEventListener("scroll",B),H.unobserve()}}},[hn.current,Tt.current,ut.current,Ee,r,n,I,re,F,U,L,te]);function Eu(N){const z=xt[N],B=Ie[N],H=z&&(se=>{const J=se.rows.some(oe=>Ie[oe].checked)&&se.rows.some(oe=>!Ie[oe].checked);return{checked:se.rows.every(oe=>Ie[oe].checked),indeterminate:J}})(z),V=B&&(se=>{var $r;const J=($r=Ie[se])==null?void 0:$r.groupId,oe=J?xt[J]:void 0;if(!oe)return;const Bt=oe==null?void 0:oe.rows.some(zn=>zn===se.toString()?!Ie[zn].checked:Ie[zn].checked);return{groupId:J,value:Bt}})(N),ae=t.reduce((se,J)=>{if(z){const oe=z.rows.includes(J.id.toString());J.id===N||oe?se[J.id]=!(H!=null&&H.indeterminate||H!=null&&H.checked):se[J.id]=J.id===N?!J.selected:!!J.selected}else se[J.id]=J.id===N?!J.selected:!!J.selected,B&&J.id===(V==null?void 0:V.groupId)&&(se[J.id]=V==null?void 0:V.value);return se},{});s==null||s(ae,N)}function Pu(N){const z=t.reduce((B,H)=>{const V=H.id===N?!H.expanded:!!H.expanded;return B[H.id]=V,B},{});u==null||u(z)}const Cu=N=>N.selected,Nu=t.length>0&&t.every(Cu),hl=t.some(Cu);function Dh({name:N,width:z}){v==null||v({name:N,width:z+"px"})}const Ih=(N,z)=>{let B="initial";z==="asc"&&(B="desc"),z==="desc"&&(B="initial"),z==="initial"&&(B="asc"),h==null||h({name:N,sort:B})},bh=x.useMemo(()=>e.filter(N=>!!N.sort).length>1,[e]),Mo=(N,z)=>y.jsx(px,{column:N,index:z,columnsAmount:e.length,showDividerForLastColumn:E,disableColumnResize:P,headerLineClamp:w,headerExtraLineClamp:S,handleResizeChange:Dh,handleSort:Ih,dimension:k,spacingBetweenItems:m,multipleSort:bh,columnMinWidth:C},`head_${N.name}`),Bh=N=>(z,B)=>{var V,ae;const H=(ae=(V=Sr.current)==null?void 0:V.querySelector(`[data-th-column="${B.name}"]`))==null?void 0:ae.getBoundingClientRect().width;return y.jsx(_o,{$dimension:k,style:{width:H||"100px"},className:"td","data-column":B.name,"data-row":z.id,children:B.renderCell?B.renderCell(z[B.name],z,N):g?g(z,B.name):y.jsx(Ry,{$cellAlign:B.cellAlign,children:z[B.name]})},`${z.id}_${B.name}`)},Wh=N=>{var V,ae,se,J;const z=((V=N.groupRows)==null?void 0:V.some(oe=>Ie[oe].checked))&&((ae=N.groupRows)==null?void 0:ae.some(oe=>!Ie[oe].checked)),B=(se=N.groupRows)==null?void 0:se.length,H=B?(J=N.groupRows)==null?void 0:J.every(oe=>Ie[oe].checked):N.selected;return y.jsx(Jy,{row:N,dimension:k,checkboxDimension:b,displayRowExpansionColumn:r,displayRowSelectionColumn:n,onRowExpansionChange:Pu,onRowSelectionChange:Eu,renderCell:g,indeterminate:z,checked:H})},Hh=(N,z)=>y.jsx(ex,{row:N,dimension:k,checkboxDimension:b,columns:e,stickyColumns:Ee,displayRowExpansionColumn:r,displayRowSelectionColumn:n,renderBodyCell:Bh(z),onRowExpansionChange:Pu,onRowSelectionChange:Eu}),Tu=(N,z)=>{var se,J;const B=!!xt[N.id],H=!Ie[N.id]||xt[Ie[N.id].groupId].expanded,V=(({row:oe,isGroupRow:Bt,index:$r,tableRows:zn})=>Bt?!oe.expanded&&oe.groupRows&&$r>=zn.length-(oe.groupRows.length+1):$r===zn.length-1)({row:N,isGroupRow:B,tableRows:bt,index:z}),ae=(B||H)&&y.jsx(ox,{dimension:k,row:N,underline:V&&T||!V,tableWidth:I,isGroup:B,onRowClick:d,onRowDoubleClick:p,rowWidth:B?(se=Tt.current)==null?void 0:se.scrollWidth:void 0,verticalScroll:F,scrollbar:re,grey:(J=Ah[N.id])==null?void 0:J.includes("even"),showRowsActions:pn,rowStatusMap:yt,children:B?Wh(N):Hh(N,z)},`row_${N.id}`);return ae&&(($==null?void 0:$(N,z,ae))??ae)};return y.jsxs(Th,{ref:Ct(Z,hn),"data-shadow":!1,"data-dragging":!1,...pe,className:`table ${pe.className||""}`,children:[y.jsxs(Xy,{ref:Sr,"data-verticalscroll":F,children:[(n||r)&&y.jsxs(ps,{children:[r&&y.jsx(Hi,{$dimension:k}),n&&y.jsx(Wi,{$dimension:k,children:y.jsx(So,{dimension:b})})]}),y.jsxs(Ky,{$expansionColumn:r,$selectionColumn:n,$dimension:k,children:[Ee.length>0&&Ee.map((N,z)=>Mo(N,z)),e.map((N,z)=>N.sticky?null:Mo(N,z))]})]}),y.jsxs(Oy,{$scrollbar:re,$greyHeader:f,"data-verticalscroll":F,className:"thead",children:[y.jsxs(Fy,{$dimension:k,ref:Tt,className:"tr",children:[(n||r||Ee.length>0)&&y.jsxs(ps,{ref:$u,$greyHeader:f,children:[r&&y.jsx(Hi,{$dimension:k,"data-draggable":!1,"data-droppable":!1}),n&&y.jsx(Wi,{$dimension:k,className:"th_checkbox","data-th-column":"checkbox","data-draggable":!1,"data-droppable":!1,children:y.jsx(So,{dimension:b,checked:Nu||hl||o,indeterminate:hl&&!Nu||i,disabled:bt.length===0||l,onChange:function(N){const z=t.reduce((B,H)=>(B[H.id]=H.checkboxDisabled?!!H.selected:!hl,B),{});s==null||s(z),a==null||a(N.target.checked)}})}),Ee.length>0&&Ee.map((N,z)=>Mo(N,z))]}),y.jsx(My,{ref:ku,children:e.map((N,z)=>N.sticky?null:Mo(N,z))}),y.jsx(Su,{})]}),pn&&y.jsx(jy,{"data-overflowmenu":!0,$dimension:k,$greyHeader:f})]}),(()=>{var z;const N=(K==null?void 0:K.emptyMessage)||D.locales[D.currentLocale].table.emptyMessage;return bt.length===0?y.jsx(hs,{ref:ut,className:"tbody",children:y.jsx(zh,{$underline:T,$dimension:k,className:"tr",$rowWidth:(z=Tt.current)==null?void 0:z.scrollWidth,children:y.jsx(Yy,{$dimension:k,children:N})})}):A?y.jsx(yx,{height:me,rowList:bt,childHeight:A.fixedRowHeight,renderRow:Tu,ref:ut,className:"tbody"}):y.jsx(hs,{ref:ut,className:"tbody",children:bt.map((B,H)=>Tu(B,H))})})(),y.jsx(vx,{onColumnDrag:le,dimension:k,isAnyColumnDraggable:Nt,isAnyStickyColumnDraggable:wr,tableRef:hn,scrollBodyRef:ut,normalColumnsWrapperRef:ku,stickyColumnsWrapperRef:$u})]})});Rh.displayName="Table";const wx="/assets/VTBGroupUI-SemiBold-857165e0.ttf",Sx="/assets/VTBGroupUI-Medium-2005d97c.otf",$x="/assets/VTBGroupUI-Regular-6e523012.otf",kx=`
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${wx}') format('truetype');
        font-display: swap;
        font-weight: 550;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
    
    @font-face {
        font-family: 'VTB Group UI';
        src: url('${Sx}') format('opentype');
        font-display: swap;
        font-weight: 500;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }

    @font-face {
        font-family: 'VTB Group UI';
        src: url('${$x}') format('opentype');
        font-display: swap;
        font-weight: 400;
        font-style: normal;
        font-feature-settings: 'tnum' on, 'lnum' on, 'cv03' on, 'cv04' on;
    }
`;function Ex(e){return y.jsx("style",{type:"text/css",children:kx,...e})}const Px=e=>x.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",focusable:!1,...e},x.createElement("path",{fill:"#717681",d:"M14.48 9.12a.65.65 0 1 0-1.3 0v6.35a.65.65 0 0 0 1.3 0V9.12ZM10.18 8.47a.65.65 0 0 1 .65.65v6.35a.65.65 0 0 1-1.3 0V9.12a.65.65 0 0 1 .65-.65Z"}),x.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 2.02a.65.65 0 0 1 .65.65v1.98h7.03a.65.65 0 1 1 0 1.3h-.784l-.776 11.49a2.991 2.991 0 0 1-2.99 2.81H8.77c-1.58 0-2.89-1.23-2.99-2.81L5.023 5.95H4.33a.65.65 0 1 1 0-1.3h7.02V2.67a.65.65 0 0 1 .65-.65ZM6.378 5.95l.702 11.4c.06.9.8 1.6 1.7 1.6h6.36c.9 0 1.64-.7 1.7-1.59l.703-11.41H6.378Z",clipRule:"evenodd"})),br=j.div`
  height: 20px;
`,Cx=[{name:"tabNum",title:"Табельный номер",width:150},{name:"sName",title:"Фамилия",width:170},{name:"name",title:"Имя",width:170},{name:"fName",title:"Отчество",width:170},{name:"action",title:" "}];let Ne=[];const Nx=({pEdit:e,pTabNum:t,pSName:n,pName:r,pFName:o,onYesClick:i,onNoClick:l})=>{const[a,s]=x.useState(e),[u,d]=x.useState(t),[p,h]=x.useState(n),[v,g]=x.useState(r),[$,k]=x.useState(o);let f=a?"изменить":"добавить";return y.jsxs(y.Fragment,{children:[y.jsxs(yy,{children:["На этой форме предполагается ",f," человека",y.jsx(br,{}),y.jsx(Ir,{label:"Табельный номер",value:u,readOnly:a,onChange:c=>{d(c.target.value)}}),y.jsx(br,{}),y.jsx(Ir,{label:"фамилия",value:p,onChange:c=>{h(c.target.value)}}),y.jsx(br,{}),y.jsx(Ir,{label:"Имя",value:v,onChange:c=>{g(c.target.value)}}),y.jsx(br,{}),y.jsx(Ir,{label:"Отчество",value:$,onChange:c=>{k(c.target.value)}})]}),y.jsxs(xy,{children:[y.jsx(bi,{appearance:"primary",dimension:"m",onClick:()=>i({action:a,tabNumValue:u,sNameValue:p,nameValue:v,fNameValue:$}),children:"Сохранить"}),y.jsx(bi,{appearance:"secondary",dimension:"m",onClick:l,children:"Отмена"})]})]})},Tx=e=>{const[t,n]=x.useState(Cx),[r,o]=x.useState(!1),[i,l]=x.useState(!1),[a,s]=x.useState(""),[u,d]=x.useState(""),[p,h]=x.useState(""),[v,g]=x.useState(""),[$,k]=x.useState([]),f=({name:S,width:E})=>{const P=t.map(T=>T.name===S?{...T,width:E}:T);n(P)};function c(S,E){console.log("Удаляем tabNum="+S),fetch("./api/delete/"+S).then(P=>P.ok?P.text():Promise.reject(P)).then(P=>{let T=[],W=0;for(var A=0;A<Ne.length;A++)A!=E&&(T[W++]=Ne[A]);console.log("Удалён => "+E+" из "+Ne.length),k(T)}).catch(P=>{P.json().then(T=>alert(T.message))})}function m(S,E){const P=S.tabNum,T=S.sName,W=S.name,A=S.fName;S.tabNum=y.jsx(Za,{onClick:()=>{s(P),d(T),h(W),g(A),l(!0),o(!0)},children:S.tabNum}),S.action=y.jsx(Za,{children:y.jsx(Px,{width:20,onClick:()=>c(P,E)})})}function w(S,E,P,T,W){const A={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tabNum:E,name:T,fname:W,sname:P})};console.log("Работаем с tabNum="+E),fetch(S?"./api/editPerson/":"./api/addPerson/",A).then(K=>K.ok?K.text():Promise.reject(K)).then(K=>{let le=JSON.parse(K),X=[],pe=!1;console.log((S?"Изменён":"Добавлен")+" => "+le.tabNum);for(var Z=0;Z<Ne.length;Z++)Ne[Z].tabNum.props.children==le.tabNum&&(Ne[Z]=le,m(Ne[Z],Z),pe=!0,console.log("Сохранили состояние name")),X[Z]=Ne[Z];pe||(X[Ne.length]=le,m(X[Ne.length],Ne.length),Ne[Ne.length]=X[Ne.length]),k(X)}).catch(K=>{K.json().then(le=>{alert(le.message)})})}return x.useEffect(()=>{fetch("./api/dataPerson").then(S=>S.text()).then(S=>{Ne=JSON.parse(S);for(var E=0;E<Ne.length;E++)m(Ne[E],E);k(Ne),console.log("Отрисовали таблицу")})},[]),y.jsxs("div",{children:[y.jsx(bi,{onClick:()=>{l(!1),o(!0)},children:" Добавить запись"}),y.jsx(br,{}),y.jsx(Rh,{id:"persons",...e,greyHeader:!0,rowList:$,columnList:t,onColumnResize:f}),r&&y.jsxs(Sh,{...e,onClose:()=>{o(!1)},"aria-labelledby":"modal-title",children:[y.jsxs(vy,{id:"modal-title",children:[i?"Изменить":"Добавить"," человека"]}),y.jsx(Nx,{pEdit:i,pTabNum:a,pSName:u,pName:p,pFName:v,onYesClick:S=>{w(S.action,S.tabNumValue,S.sNameValue,S.nameValue,S.fNameValue),o(!1)},onNoClick:()=>o(!1)})]})]})},_x="/assets/react-35ef61ed.svg";function Mx(){return y.jsxs(y.Fragment,{children:[y.jsxs("div",{children:[y.jsx("a",{href:"https://vitejs.dev",target:"_blank",children:y.jsx("img",{src:"/vite.svg",className:"logo",alt:"Vite logo"})}),y.jsx("a",{href:"https://react.dev",target:"_blank",children:y.jsx("img",{src:_x,className:"logo react",alt:"React logo"})})]}),y.jsx("h1",{children:"Vite + React"}),y.jsx("p",{className:"read-the-docs",children:"Click on the Vite and React logos to learn more"}),y.jsxs("div",{className:"tables",children:[y.jsx("h3",{children:"Список сотрудников"}),y.jsx(Tx,{})]})]})}Yl.createRoot(document.getElementById("root")).render(y.jsx(ln.StrictMode,{children:y.jsx(g1,{theme:mu,children:y.jsxs(b1,{children:[y.jsx(Ex,{}),y.jsx(Mx,{})]})})}));
