function xC(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function z0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var B0={exports:{}},xc={},H0={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),NC=Symbol.for("react.portal"),bC=Symbol.for("react.fragment"),OC=Symbol.for("react.strict_mode"),DC=Symbol.for("react.profiler"),LC=Symbol.for("react.provider"),MC=Symbol.for("react.context"),VC=Symbol.for("react.forward_ref"),FC=Symbol.for("react.suspense"),$C=Symbol.for("react.memo"),jC=Symbol.for("react.lazy"),Sv=Symbol.iterator;function UC(e){return e===null||typeof e!="object"?null:(e=Sv&&e[Sv]||e["@@iterator"],typeof e=="function"?e:null)}var W0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q0=Object.assign,G0={};function zs(e,t,n){this.props=e,this.context=t,this.refs=G0,this.updater=n||W0}zs.prototype.isReactComponent={};zs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function K0(){}K0.prototype=zs.prototype;function Bp(e,t,n){this.props=e,this.context=t,this.refs=G0,this.updater=n||W0}var Hp=Bp.prototype=new K0;Hp.constructor=Bp;q0(Hp,zs.prototype);Hp.isPureReactComponent=!0;var Iv=Array.isArray,Q0=Object.prototype.hasOwnProperty,Wp={current:null},Y0={key:!0,ref:!0,__self:!0,__source:!0};function X0(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Q0.call(t,r)&&!Y0.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Va,type:e,key:s,ref:o,props:i,_owner:Wp.current}}function zC(e,t){return{$$typeof:Va,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function qp(e){return typeof e=="object"&&e!==null&&e.$$typeof===Va}function BC(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Tv=/\/+/g;function $d(e,t){return typeof e=="object"&&e!==null&&e.key!=null?BC(""+e.key):t.toString(36)}function su(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Va:case NC:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+$d(o,0):r,Iv(i)?(n="",e!=null&&(n=e.replace(Tv,"$&/")+"/"),su(i,t,n,"",function(u){return u})):i!=null&&(qp(i)&&(i=zC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Tv,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Iv(e))for(var a=0;a<e.length;a++){s=e[a];var l=r+$d(s,a);o+=su(s,t,n,l,i)}else if(l=UC(e),typeof l=="function")for(e=l.call(e),a=0;!(s=e.next()).done;)s=s.value,l=r+$d(s,a++),o+=su(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ml(e,t,n){if(e==null)return e;var r=[],i=0;return su(e,r,"","",function(s){return t.call(n,s,i++)}),r}function HC(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var vt={current:null},ou={transition:null},WC={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:ou,ReactCurrentOwner:Wp};X.Children={map:ml,forEach:function(e,t,n){ml(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ml(e,function(){t++}),t},toArray:function(e){return ml(e,function(t){return t})||[]},only:function(e){if(!qp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=zs;X.Fragment=bC;X.Profiler=DC;X.PureComponent=Bp;X.StrictMode=OC;X.Suspense=FC;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WC;X.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=q0({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Wp.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Q0.call(t,l)&&!Y0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Va,type:e.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(e){return e={$$typeof:MC,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:LC,_context:e},e.Consumer=e};X.createElement=X0;X.createFactory=function(e){var t=X0.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:VC,render:e}};X.isValidElement=qp;X.lazy=function(e){return{$$typeof:jC,_payload:{_status:-1,_result:e},_init:HC}};X.memo=function(e,t){return{$$typeof:$C,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=ou.transition;ou.transition={};try{e()}finally{ou.transition=t}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(e,t){return vt.current.useCallback(e,t)};X.useContext=function(e){return vt.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return vt.current.useDeferredValue(e)};X.useEffect=function(e,t){return vt.current.useEffect(e,t)};X.useId=function(){return vt.current.useId()};X.useImperativeHandle=function(e,t,n){return vt.current.useImperativeHandle(e,t,n)};X.useInsertionEffect=function(e,t){return vt.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return vt.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return vt.current.useMemo(e,t)};X.useReducer=function(e,t,n){return vt.current.useReducer(e,t,n)};X.useRef=function(e){return vt.current.useRef(e)};X.useState=function(e){return vt.current.useState(e)};X.useSyncExternalStore=function(e,t,n){return vt.current.useSyncExternalStore(e,t,n)};X.useTransition=function(){return vt.current.useTransition()};X.version="18.2.0";H0.exports=X;var S=H0.exports;const ne=z0(S),qC=xC({__proto__:null,default:ne},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GC=S,KC=Symbol.for("react.element"),QC=Symbol.for("react.fragment"),YC=Object.prototype.hasOwnProperty,XC=GC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JC={key:!0,ref:!0,__self:!0,__source:!0};function J0(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)YC.call(t,r)&&!JC.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:KC,type:e,key:s,ref:o,props:i,_owner:XC.current}}xc.Fragment=QC;xc.jsx=J0;xc.jsxs=J0;B0.exports=xc;var h=B0.exports,qh={},Z0={exports:{}},$t={},e1={exports:{}},t1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,z){var W=b.length;b.push(z);e:for(;0<W;){var re=W-1>>>1,ie=b[re];if(0<i(ie,z))b[re]=z,b[W]=ie,W=re;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var z=b[0],W=b.pop();if(W!==z){b[0]=W;e:for(var re=0,ie=b.length,We=ie>>>1;re<We;){var De=2*(re+1)-1,wt=b[De],dt=De+1,pn=b[dt];if(0>i(wt,W))dt<ie&&0>i(pn,wt)?(b[re]=pn,b[dt]=W,re=dt):(b[re]=wt,b[De]=W,re=De);else if(dt<ie&&0>i(pn,W))b[re]=pn,b[dt]=W,re=dt;else break e}}return z}function i(b,z){var W=b.sortIndex-z.sortIndex;return W!==0?W:b.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();e.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,m=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(b){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=b)r(u),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(u)}}function E(b){if(_=!1,y(b),!m)if(n(l)!==null)m=!0,ar(I);else{var z=n(u);z!==null&&Pt(E,z.startTime-b)}}function I(b,z){m=!1,_&&(_=!1,g(T),T=-1),p=!0;var W=f;try{for(y(z),d=n(l);d!==null&&(!(d.expirationTime>z)||b&&!pe());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var ie=re(d.expirationTime<=z);z=e.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&r(l),y(z)}else r(l);d=n(l)}if(d!==null)var We=!0;else{var De=n(u);De!==null&&Pt(E,De.startTime-z),We=!1}return We}finally{d=null,f=W,p=!1}}var R=!1,C=null,T=-1,N=5,M=-1;function pe(){return!(e.unstable_now()-M<N)}function _t(){if(C!==null){var b=e.unstable_now();M=b;var z=!0;try{z=C(!0,b)}finally{z?zt():(R=!1,C=null)}}else R=!1}var zt;if(typeof v=="function")zt=function(){v(_t)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,or=Zt.port2;Zt.port1.onmessage=_t,zt=function(){or.postMessage(null)}}else zt=function(){w(_t,0)};function ar(b){C=b,R||(R=!0,zt())}function Pt(b,z){T=w(function(){b(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ar(I))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(b){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var W=f;f=z;try{return b()}finally{f=W}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,z){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var W=f;f=b;try{return z()}finally{f=W}},e.unstable_scheduleCallback=function(b,z,W){var re=e.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?re+W:re):W=re,b){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=W+ie,b={id:c++,callback:z,priorityLevel:b,startTime:W,expirationTime:ie,sortIndex:-1},W>re?(b.sortIndex=W,t(u,b),n(l)===null&&b===n(u)&&(_?(g(T),T=-1):_=!0,Pt(E,W-re))):(b.sortIndex=ie,t(l,b),m||p||(m=!0,ar(I))),b},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(b){var z=f;return function(){var W=f;f=z;try{return b.apply(this,arguments)}finally{f=W}}}})(t1);e1.exports=t1;var ZC=e1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n1=S,Mt=ZC;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r1=new Set,Go={};function Vi(e,t){Ts(e,t),Ts(e+"Capture",t)}function Ts(e,t){for(Go[e]=t,e=0;e<t.length;e++)r1.add(t[e])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gh=Object.prototype.hasOwnProperty,eR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cv={},Rv={};function tR(e){return Gh.call(Rv,e)?!0:Gh.call(Cv,e)?!1:eR.test(e)?Rv[e]=!0:(Cv[e]=!0,!1)}function nR(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rR(e,t,n,r){if(t===null||typeof t>"u"||nR(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function yt(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ze[e]=new yt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ze[t]=new yt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ze[e]=new yt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ze[e]=new yt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ze[e]=new yt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ze[e]=new yt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ze[e]=new yt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ze[e]=new yt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ze[e]=new yt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gp=/[\-:]([a-z])/g;function Kp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gp,Kp);Ze[t]=new yt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gp,Kp);Ze[t]=new yt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gp,Kp);Ze[t]=new yt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ze[e]=new yt(e,1,!1,e.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ze[e]=new yt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qp(e,t,n,r){var i=Ze.hasOwnProperty(t)?Ze[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rR(t,n,i,r)&&(n=null),r||i===null?tR(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var tr=n1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vl=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Yi=Symbol.for("react.fragment"),Yp=Symbol.for("react.strict_mode"),Kh=Symbol.for("react.profiler"),i1=Symbol.for("react.provider"),s1=Symbol.for("react.context"),Xp=Symbol.for("react.forward_ref"),Qh=Symbol.for("react.suspense"),Yh=Symbol.for("react.suspense_list"),Jp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),o1=Symbol.for("react.offscreen"),Av=Symbol.iterator;function ro(e){return e===null||typeof e!="object"?null:(e=Av&&e[Av]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,jd;function vo(e){if(jd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);jd=t&&t[1]||""}return`
`+jd+e}var Ud=!1;function zd(e,t){if(!e||Ud)return"";Ud=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ud=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vo(e):""}function iR(e){switch(e.tag){case 5:return vo(e.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return e=zd(e.type,!1),e;case 11:return e=zd(e.type.render,!1),e;case 1:return e=zd(e.type,!0),e;default:return""}}function Xh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yi:return"Fragment";case Qi:return"Portal";case Kh:return"Profiler";case Yp:return"StrictMode";case Qh:return"Suspense";case Yh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case s1:return(e.displayName||"Context")+".Consumer";case i1:return(e._context.displayName||"Context")+".Provider";case Xp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Jp:return t=e.displayName||null,t!==null?t:Xh(e.type)||"Memo";case dr:t=e._payload,e=e._init;try{return Xh(e(t))}catch{}}return null}function sR(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Xh(t);case 8:return t===Yp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function a1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function oR(e){var t=a1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function yl(e){e._valueTracker||(e._valueTracker=oR(e))}function l1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=a1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ku(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jh(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function kv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function u1(e,t){t=t.checked,t!=null&&Qp(e,"checked",t,!1)}function Zh(e,t){u1(e,t);var n=jr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ef(e,t.type,n):t.hasOwnProperty("defaultValue")&&ef(e,t.type,jr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Pv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ef(e,t,n){(t!=="number"||ku(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var yo=Array.isArray;function hs(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jr(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function tf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(yo(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jr(n)}}function c1(e,t){var n=jr(t.value),r=jr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function d1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?d1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var _l,h1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=_l.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ko(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aR=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(e){aR.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ko[t]=ko[e]})});function f1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ko.hasOwnProperty(e)&&ko[e]?(""+t).trim():t+"px"}function p1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=f1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var lR=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rf(e,t){if(t){if(lR[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function sf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var of=null;function Zp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var af=null,fs=null,ps=null;function bv(e){if(e=ja(e)){if(typeof af!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Lc(t),af(e.stateNode,e.type,t))}}function g1(e){fs?ps?ps.push(e):ps=[e]:fs=e}function m1(){if(fs){var e=fs,t=ps;if(ps=fs=null,bv(e),t)for(e=0;e<t.length;e++)bv(t[e])}}function v1(e,t){return e(t)}function y1(){}var Bd=!1;function _1(e,t,n){if(Bd)return e(t,n);Bd=!0;try{return v1(e,t,n)}finally{Bd=!1,(fs!==null||ps!==null)&&(y1(),m1())}}function Qo(e,t){var n=e.stateNode;if(n===null)return null;var r=Lc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var lf=!1;if(Hn)try{var io={};Object.defineProperty(io,"passive",{get:function(){lf=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{lf=!1}function uR(e,t,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Po=!1,Pu=null,xu=!1,uf=null,cR={onError:function(e){Po=!0,Pu=e}};function dR(e,t,n,r,i,s,o,a,l){Po=!1,Pu=null,uR.apply(cR,arguments)}function hR(e,t,n,r,i,s,o,a,l){if(dR.apply(this,arguments),Po){if(Po){var u=Pu;Po=!1,Pu=null}else throw Error(P(198));xu||(xu=!0,uf=u)}}function Fi(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function w1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ov(e){if(Fi(e)!==e)throw Error(P(188))}function fR(e){var t=e.alternate;if(!t){if(t=Fi(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ov(i),e;if(s===r)return Ov(i),t;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function E1(e){return e=fR(e),e!==null?S1(e):null}function S1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=S1(e);if(t!==null)return t;e=e.sibling}return null}var I1=Mt.unstable_scheduleCallback,Dv=Mt.unstable_cancelCallback,pR=Mt.unstable_shouldYield,gR=Mt.unstable_requestPaint,Pe=Mt.unstable_now,mR=Mt.unstable_getCurrentPriorityLevel,eg=Mt.unstable_ImmediatePriority,T1=Mt.unstable_UserBlockingPriority,Nu=Mt.unstable_NormalPriority,vR=Mt.unstable_LowPriority,C1=Mt.unstable_IdlePriority,Nc=null,In=null;function yR(e){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Nc,e,void 0,(e.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:ER,_R=Math.log,wR=Math.LN2;function ER(e){return e>>>=0,e===0?32:31-(_R(e)/wR|0)|0}var wl=64,El=4194304;function _o(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_o(a):(s&=o,s!==0&&(r=_o(s)))}else o=n&~i,o!==0?r=_o(o):s!==0&&(r=_o(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-on(t),i=1<<n,r|=e[n],t&=~i;return r}function SR(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IR(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-on(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=SR(a,t)):l<=t&&(e.expiredLanes|=a),s&=~a}}function cf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function R1(){var e=wl;return wl<<=1,!(wl&4194240)&&(wl=64),e}function Hd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fa(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-on(t),e[t]=n}function TR(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-on(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function tg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-on(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var se=0;function A1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var k1,ng,P1,x1,N1,df=!1,Sl=[],Ar=null,kr=null,Pr=null,Yo=new Map,Xo=new Map,fr=[],CR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lv(e,t){switch(e){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Yo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(t.pointerId)}}function so(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ja(t),t!==null&&ng(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function RR(e,t,n,r,i){switch(t){case"focusin":return Ar=so(Ar,e,t,n,r,i),!0;case"dragenter":return kr=so(kr,e,t,n,r,i),!0;case"mouseover":return Pr=so(Pr,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Yo.set(s,so(Yo.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xo.set(s,so(Xo.get(s)||null,e,t,n,r,i)),!0}return!1}function b1(e){var t=ai(e.target);if(t!==null){var n=Fi(t);if(n!==null){if(t=n.tag,t===13){if(t=w1(n),t!==null){e.blockedOn=t,N1(e.priority,function(){P1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function au(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=hf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);of=r,n.target.dispatchEvent(r),of=null}else return t=ja(n),t!==null&&ng(t),e.blockedOn=n,!1;t.shift()}return!0}function Mv(e,t,n){au(e)&&n.delete(t)}function AR(){df=!1,Ar!==null&&au(Ar)&&(Ar=null),kr!==null&&au(kr)&&(kr=null),Pr!==null&&au(Pr)&&(Pr=null),Yo.forEach(Mv),Xo.forEach(Mv)}function oo(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,AR)))}function Jo(e){function t(i){return oo(i,e)}if(0<Sl.length){oo(Sl[0],e);for(var n=1;n<Sl.length;n++){var r=Sl[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ar!==null&&oo(Ar,e),kr!==null&&oo(kr,e),Pr!==null&&oo(Pr,e),Yo.forEach(t),Xo.forEach(t),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)b1(n),n.blockedOn===null&&fr.shift()}var gs=tr.ReactCurrentBatchConfig,Ou=!0;function kR(e,t,n,r){var i=se,s=gs.transition;gs.transition=null;try{se=1,rg(e,t,n,r)}finally{se=i,gs.transition=s}}function PR(e,t,n,r){var i=se,s=gs.transition;gs.transition=null;try{se=4,rg(e,t,n,r)}finally{se=i,gs.transition=s}}function rg(e,t,n,r){if(Ou){var i=hf(e,t,n,r);if(i===null)eh(e,t,r,Du,n),Lv(e,r);else if(RR(i,e,t,n,r))r.stopPropagation();else if(Lv(e,r),t&4&&-1<CR.indexOf(e)){for(;i!==null;){var s=ja(i);if(s!==null&&k1(s),s=hf(e,t,n,r),s===null&&eh(e,t,r,Du,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else eh(e,t,r,null,n)}}var Du=null;function hf(e,t,n,r){if(Du=null,e=Zp(r),e=ai(e),e!==null)if(t=Fi(e),t===null)e=null;else if(n=t.tag,n===13){if(e=w1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Du=e,null}function O1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mR()){case eg:return 1;case T1:return 4;case Nu:case vR:return 16;case C1:return 536870912;default:return 16}default:return 16}}var wr=null,ig=null,lu=null;function D1(){if(lu)return lu;var e,t=ig,n=t.length,r,i="value"in wr?wr.value:wr.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return lu=i.slice(e,1<r?1-r:void 0)}function uu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Il(){return!0}function Vv(){return!1}function jt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Il:Vv,this.isPropagationStopped=Vv,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Il)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Il)},persist:function(){},isPersistent:Il}),t}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sg=jt(Bs),$a=we({},Bs,{view:0,detail:0}),xR=jt($a),Wd,qd,ao,bc=we({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:og,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(Wd=e.screenX-ao.screenX,qd=e.screenY-ao.screenY):qd=Wd=0,ao=e),Wd)},movementY:function(e){return"movementY"in e?e.movementY:qd}}),Fv=jt(bc),NR=we({},bc,{dataTransfer:0}),bR=jt(NR),OR=we({},$a,{relatedTarget:0}),Gd=jt(OR),DR=we({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),LR=jt(DR),MR=we({},Bs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),VR=jt(MR),FR=we({},Bs,{data:0}),$v=jt(FR),$R={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zR(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=UR[e])?!!t[e]:!1}function og(){return zR}var BR=we({},$a,{key:function(e){if(e.key){var t=$R[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=uu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?jR[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:og,charCode:function(e){return e.type==="keypress"?uu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?uu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),HR=jt(BR),WR=we({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jv=jt(WR),qR=we({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:og}),GR=jt(qR),KR=we({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),QR=jt(KR),YR=we({},bc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),XR=jt(YR),JR=[9,13,27,32],ag=Hn&&"CompositionEvent"in window,xo=null;Hn&&"documentMode"in document&&(xo=document.documentMode);var ZR=Hn&&"TextEvent"in window&&!xo,L1=Hn&&(!ag||xo&&8<xo&&11>=xo),Uv=" ",zv=!1;function M1(e,t){switch(e){case"keyup":return JR.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function V1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xi=!1;function eA(e,t){switch(e){case"compositionend":return V1(t);case"keypress":return t.which!==32?null:(zv=!0,Uv);case"textInput":return e=t.data,e===Uv&&zv?null:e;default:return null}}function tA(e,t){if(Xi)return e==="compositionend"||!ag&&M1(e,t)?(e=D1(),lu=ig=wr=null,Xi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return L1&&t.locale!=="ko"?null:t.data;default:return null}}var nA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!nA[e.type]:t==="textarea"}function F1(e,t,n,r){g1(r),t=Lu(t,"onChange"),0<t.length&&(n=new sg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var No=null,Zo=null;function rA(e){Q1(e,0)}function Oc(e){var t=es(e);if(l1(t))return e}function iA(e,t){if(e==="change")return t}var $1=!1;if(Hn){var Kd;if(Hn){var Qd="oninput"in document;if(!Qd){var Hv=document.createElement("div");Hv.setAttribute("oninput","return;"),Qd=typeof Hv.oninput=="function"}Kd=Qd}else Kd=!1;$1=Kd&&(!document.documentMode||9<document.documentMode)}function Wv(){No&&(No.detachEvent("onpropertychange",j1),Zo=No=null)}function j1(e){if(e.propertyName==="value"&&Oc(Zo)){var t=[];F1(t,Zo,e,Zp(e)),_1(rA,t)}}function sA(e,t,n){e==="focusin"?(Wv(),No=t,Zo=n,No.attachEvent("onpropertychange",j1)):e==="focusout"&&Wv()}function oA(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oc(Zo)}function aA(e,t){if(e==="click")return Oc(t)}function lA(e,t){if(e==="input"||e==="change")return Oc(t)}function uA(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var cn=typeof Object.is=="function"?Object.is:uA;function ea(e,t){if(cn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Gh.call(t,i)||!cn(e[i],t[i]))return!1}return!0}function qv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Gv(e,t){var n=qv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qv(n)}}function U1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?U1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function z1(){for(var e=window,t=ku();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ku(e.document)}return t}function lg(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function cA(e){var t=z1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&U1(n.ownerDocument.documentElement,n)){if(r!==null&&lg(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Gv(n,s);var o=Gv(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var dA=Hn&&"documentMode"in document&&11>=document.documentMode,Ji=null,ff=null,bo=null,pf=!1;function Kv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pf||Ji==null||Ji!==ku(r)||(r=Ji,"selectionStart"in r&&lg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&ea(bo,r)||(bo=r,r=Lu(ff,"onSelect"),0<r.length&&(t=new sg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ji)))}function Tl(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zi={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionend:Tl("Transition","TransitionEnd")},Yd={},B1={};Hn&&(B1=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function Dc(e){if(Yd[e])return Yd[e];if(!Zi[e])return e;var t=Zi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in B1)return Yd[e]=t[n];return e}var H1=Dc("animationend"),W1=Dc("animationiteration"),q1=Dc("animationstart"),G1=Dc("transitionend"),K1=new Map,Qv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(e,t){K1.set(e,t),Vi(t,[e])}for(var Xd=0;Xd<Qv.length;Xd++){var Jd=Qv[Xd],hA=Jd.toLowerCase(),fA=Jd[0].toUpperCase()+Jd.slice(1);Yr(hA,"on"+fA)}Yr(H1,"onAnimationEnd");Yr(W1,"onAnimationIteration");Yr(q1,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(G1,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pA=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Yv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hR(r,t,void 0,e),e.currentTarget=null}function Q1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yv(i,a,u),s=l}}}if(xu)throw e=uf,xu=!1,uf=null,e}function ue(e,t){var n=t[_f];n===void 0&&(n=t[_f]=new Set);var r=e+"__bubble";n.has(r)||(Y1(t,e,2,!1),n.add(r))}function Zd(e,t,n){var r=0;t&&(r|=4),Y1(n,e,r,t)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function ta(e){if(!e[Cl]){e[Cl]=!0,r1.forEach(function(n){n!=="selectionchange"&&(pA.has(n)||Zd(n,!1,e),Zd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Cl]||(t[Cl]=!0,Zd("selectionchange",!1,t))}}function Y1(e,t,n,r){switch(O1(t)){case 1:var i=kR;break;case 4:i=PR;break;default:i=rg}n=i.bind(null,t,n,e),i=void 0,!lf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function eh(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ai(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}_1(function(){var u=s,c=Zp(n),d=[];e:{var f=K1.get(e);if(f!==void 0){var p=sg,m=e;switch(e){case"keypress":if(uu(n)===0)break e;case"keydown":case"keyup":p=HR;break;case"focusin":m="focus",p=Gd;break;case"focusout":m="blur",p=Gd;break;case"beforeblur":case"afterblur":p=Gd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Fv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GR;break;case H1:case W1:case q1:p=LR;break;case G1:p=QR;break;case"scroll":p=xR;break;case"wheel":p=XR;break;case"copy":case"cut":case"paste":p=VR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=jv}var _=(t&4)!==0,w=!_&&e==="scroll",g=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,y;v!==null;){y=v;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=Qo(v,g),E!=null&&_.push(na(v,E,y)))),w)break;v=v.return}0<_.length&&(f=new p(f,m,null,n,c),d.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==of&&(m=n.relatedTarget||n.fromElement)&&(ai(m)||m[Wn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?ai(m):null,m!==null&&(w=Fi(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(_=Fv,E="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(_=jv,E="onPointerLeave",g="onPointerEnter",v="pointer"),w=p==null?f:es(p),y=m==null?f:es(m),f=new _(E,v+"leave",p,n,c),f.target=w,f.relatedTarget=y,E=null,ai(c)===u&&(_=new _(g,v+"enter",m,n,c),_.target=y,_.relatedTarget=w,E=_),w=E,p&&m)t:{for(_=p,g=m,v=0,y=_;y;y=Hi(y))v++;for(y=0,E=g;E;E=Hi(E))y++;for(;0<v-y;)_=Hi(_),v--;for(;0<y-v;)g=Hi(g),y--;for(;v--;){if(_===g||g!==null&&_===g.alternate)break t;_=Hi(_),g=Hi(g)}_=null}else _=null;p!==null&&Xv(d,f,p,_,!1),m!==null&&w!==null&&Xv(d,w,m,_,!0)}}e:{if(f=u?es(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var I=iA;else if(Bv(f))if($1)I=lA;else{I=oA;var R=sA}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=aA);if(I&&(I=I(e,u))){F1(d,I,n,c);break e}R&&R(e,f,u),e==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&ef(f,"number",f.value)}switch(R=u?es(u):window,e){case"focusin":(Bv(R)||R.contentEditable==="true")&&(Ji=R,ff=u,bo=null);break;case"focusout":bo=ff=Ji=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Kv(d,n,c);break;case"selectionchange":if(dA)break;case"keydown":case"keyup":Kv(d,n,c)}var C;if(ag)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Xi?M1(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(L1&&n.locale!=="ko"&&(Xi||T!=="onCompositionStart"?T==="onCompositionEnd"&&Xi&&(C=D1()):(wr=c,ig="value"in wr?wr.value:wr.textContent,Xi=!0)),R=Lu(u,T),0<R.length&&(T=new $v(T,e,null,n,c),d.push({event:T,listeners:R}),C?T.data=C:(C=V1(n),C!==null&&(T.data=C)))),(C=ZR?eA(e,n):tA(e,n))&&(u=Lu(u,"onBeforeInput"),0<u.length&&(c=new $v("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}Q1(d,t)})}function na(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Lu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qo(e,n),s!=null&&r.unshift(na(e,s,i)),s=Qo(e,t),s!=null&&r.push(na(e,s,i))),e=e.return}return r}function Hi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xv(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Qo(n,s),l!=null&&o.unshift(na(n,l,a))):i||(l=Qo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var gA=/\r\n?/g,mA=/\u0000|\uFFFD/g;function Jv(e){return(typeof e=="string"?e:""+e).replace(gA,`
`).replace(mA,"")}function Rl(e,t,n){if(t=Jv(t),Jv(e)!==t&&n)throw Error(P(425))}function Mu(){}var gf=null,mf=null;function vf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var yf=typeof setTimeout=="function"?setTimeout:void 0,vA=typeof clearTimeout=="function"?clearTimeout:void 0,Zv=typeof Promise=="function"?Promise:void 0,yA=typeof queueMicrotask=="function"?queueMicrotask:typeof Zv<"u"?function(e){return Zv.resolve(null).then(e).catch(_A)}:yf;function _A(e){setTimeout(function(){throw e})}function th(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Jo(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jo(t)}function xr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ey(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),vn="__reactFiber$"+Hs,ra="__reactProps$"+Hs,Wn="__reactContainer$"+Hs,_f="__reactEvents$"+Hs,wA="__reactListeners$"+Hs,EA="__reactHandles$"+Hs;function ai(e){var t=e[vn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Wn]||n[vn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ey(e);e!==null;){if(n=e[vn])return n;e=ey(e)}return t}e=n,n=e.parentNode}return null}function ja(e){return e=e[vn]||e[Wn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function es(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Lc(e){return e[ra]||null}var wf=[],ts=-1;function Xr(e){return{current:e}}function he(e){0>ts||(e.current=wf[ts],wf[ts]=null,ts--)}function ae(e,t){ts++,wf[ts]=e.current,e.current=t}var Ur={},lt=Xr(Ur),Ct=Xr(!1),Ei=Ur;function Cs(e,t){var n=e.type.contextTypes;if(!n)return Ur;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(e){return e=e.childContextTypes,e!=null}function Vu(){he(Ct),he(lt)}function ty(e,t,n){if(lt.current!==Ur)throw Error(P(168));ae(lt,t),ae(Ct,n)}function X1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,sR(e)||"Unknown",i));return we({},n,r)}function Fu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ur,Ei=lt.current,ae(lt,e),ae(Ct,Ct.current),!0}function ny(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=X1(e,t,Ei),r.__reactInternalMemoizedMergedChildContext=e,he(Ct),he(lt),ae(lt,e)):he(Ct),ae(Ct,n)}var Vn=null,Mc=!1,nh=!1;function J1(e){Vn===null?Vn=[e]:Vn.push(e)}function SA(e){Mc=!0,J1(e)}function Jr(){if(!nh&&Vn!==null){nh=!0;var e=0,t=se;try{var n=Vn;for(se=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Vn=null,Mc=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(e+1)),I1(eg,Jr),i}finally{se=t,nh=!1}}return null}var ns=[],rs=0,$u=null,ju=0,Bt=[],Ht=0,Si=null,Fn=1,$n="";function ii(e,t){ns[rs++]=ju,ns[rs++]=$u,$u=e,ju=t}function Z1(e,t,n){Bt[Ht++]=Fn,Bt[Ht++]=$n,Bt[Ht++]=Si,Si=e;var r=Fn;e=$n;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fn=1<<32-on(t)+i|n<<i|r,$n=s+e}else Fn=1<<s|n<<i|r,$n=e}function ug(e){e.return!==null&&(ii(e,1),Z1(e,1,0))}function cg(e){for(;e===$u;)$u=ns[--rs],ns[rs]=null,ju=ns[--rs],ns[rs]=null;for(;e===Si;)Si=Bt[--Ht],Bt[Ht]=null,$n=Bt[--Ht],Bt[Ht]=null,Fn=Bt[--Ht],Bt[Ht]=null}var Lt=null,Nt=null,ge=!1,rn=null;function ew(e,t){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ry(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Lt=e,Nt=xr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Lt=e,Nt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Si!==null?{id:Fn,overflow:$n}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Lt=e,Nt=null,!0):!1;default:return!1}}function Ef(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Sf(e){if(ge){var t=Nt;if(t){var n=t;if(!ry(e,t)){if(Ef(e))throw Error(P(418));t=xr(n.nextSibling);var r=Lt;t&&ry(e,t)?ew(r,n):(e.flags=e.flags&-4097|2,ge=!1,Lt=e)}}else{if(Ef(e))throw Error(P(418));e.flags=e.flags&-4097|2,ge=!1,Lt=e}}}function iy(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Lt=e}function Al(e){if(e!==Lt)return!1;if(!ge)return iy(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vf(e.type,e.memoizedProps)),t&&(t=Nt)){if(Ef(e))throw tw(),Error(P(418));for(;t;)ew(e,t),t=xr(t.nextSibling)}if(iy(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Nt=xr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Nt=null}}else Nt=Lt?xr(e.stateNode.nextSibling):null;return!0}function tw(){for(var e=Nt;e;)e=xr(e.nextSibling)}function Rs(){Nt=Lt=null,ge=!1}function dg(e){rn===null?rn=[e]:rn.push(e)}var IA=tr.ReactCurrentBatchConfig;function tn(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Uu=Xr(null),zu=null,is=null,hg=null;function fg(){hg=is=zu=null}function pg(e){var t=Uu.current;he(Uu),e._currentValue=t}function If(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ms(e,t){zu=e,hg=is=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Tt=!0),e.firstContext=null)}function Yt(e){var t=e._currentValue;if(hg!==e)if(e={context:e,memoizedValue:t,next:null},is===null){if(zu===null)throw Error(P(308));is=e,zu.dependencies={lanes:0,firstContext:e}}else is=is.next=e;return t}var li=null;function gg(e){li===null?li=[e]:li.push(e)}function nw(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gg(t)):(n.next=i.next,i.next=n),t.interleaved=n,qn(e,r)}function qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hr=!1;function mg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rw(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,qn(e,n)}return i=r.interleaved,i===null?(t.next=t,gg(r)):(t.next=i.next,i.next=t),r.interleaved=t,qn(e,n)}function cu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tg(e,n)}}function sy(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bu(e,t,n,r){var i=e.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=e.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=e,_=a;switch(f=t,p=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=we({},d,f);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Ti|=o,e.lanes=o,e.memoizedState=d}}function oy(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var iw=new n1.Component().refs;function Tf(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vc={isMounted:function(e){return(e=e._reactInternals)?Fi(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mt(),i=Or(e),s=Bn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Nr(e,s,i),t!==null&&(an(t,e,i,r),cu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mt(),i=Or(e),s=Bn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Nr(e,s,i),t!==null&&(an(t,e,i,r),cu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),r=Or(e),i=Bn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nr(e,i,r),t!==null&&(an(t,e,r,n),cu(t,e,r))}};function ay(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!ea(n,r)||!ea(i,s):!0}function sw(e,t,n){var r=!1,i=Ur,s=t.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Rt(t)?Ei:lt.current,r=t.contextTypes,s=(r=r!=null)?Cs(e,i):Ur),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ly(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vc.enqueueReplaceState(t,t.state,null)}function Cf(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=iw,mg(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Rt(t)?Ei:lt.current,i.context=Cs(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Tf(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vc.enqueueReplaceState(i,i.state,null),Bu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function lo(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var a=i.refs;a===iw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function kl(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uy(e){var t=e._init;return t(e._payload)}function ow(e){function t(g,v){if(e){var y=g.deletions;y===null?(g.deletions=[v],g.flags|=16):y.push(v)}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function i(g,v){return g=Dr(g,v),g.index=0,g.sibling=null,g}function s(g,v,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<v?(g.flags|=2,v):y):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return e&&g.alternate===null&&(g.flags|=2),g}function a(g,v,y,E){return v===null||v.tag!==6?(v=uh(y,g.mode,E),v.return=g,v):(v=i(v,y),v.return=g,v)}function l(g,v,y,E){var I=y.type;return I===Yi?c(g,v,y.props.children,E,y.key):v!==null&&(v.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===dr&&uy(I)===v.type)?(E=i(v,y.props),E.ref=lo(g,v,y),E.return=g,E):(E=mu(y.type,y.key,y.props,null,g.mode,E),E.ref=lo(g,v,y),E.return=g,E)}function u(g,v,y,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=ch(y,g.mode,E),v.return=g,v):(v=i(v,y.children||[]),v.return=g,v)}function c(g,v,y,E,I){return v===null||v.tag!==7?(v=mi(y,g.mode,E,I),v.return=g,v):(v=i(v,y),v.return=g,v)}function d(g,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=uh(""+v,g.mode,y),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case vl:return y=mu(v.type,v.key,v.props,null,g.mode,y),y.ref=lo(g,null,v),y.return=g,y;case Qi:return v=ch(v,g.mode,y),v.return=g,v;case dr:var E=v._init;return d(g,E(v._payload),y)}if(yo(v)||ro(v))return v=mi(v,g.mode,y,null),v.return=g,v;kl(g,v)}return null}function f(g,v,y,E){var I=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(g,v,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case vl:return y.key===I?l(g,v,y,E):null;case Qi:return y.key===I?u(g,v,y,E):null;case dr:return I=y._init,f(g,v,I(y._payload),E)}if(yo(y)||ro(y))return I!==null?null:c(g,v,y,E,null);kl(g,y)}return null}function p(g,v,y,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,a(v,g,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case vl:return g=g.get(E.key===null?y:E.key)||null,l(v,g,E,I);case Qi:return g=g.get(E.key===null?y:E.key)||null,u(v,g,E,I);case dr:var R=E._init;return p(g,v,y,R(E._payload),I)}if(yo(E)||ro(E))return g=g.get(y)||null,c(v,g,E,I,null);kl(v,E)}return null}function m(g,v,y,E){for(var I=null,R=null,C=v,T=v=0,N=null;C!==null&&T<y.length;T++){C.index>T?(N=C,C=null):N=C.sibling;var M=f(g,C,y[T],E);if(M===null){C===null&&(C=N);break}e&&C&&M.alternate===null&&t(g,C),v=s(M,v,T),R===null?I=M:R.sibling=M,R=M,C=N}if(T===y.length)return n(g,C),ge&&ii(g,T),I;if(C===null){for(;T<y.length;T++)C=d(g,y[T],E),C!==null&&(v=s(C,v,T),R===null?I=C:R.sibling=C,R=C);return ge&&ii(g,T),I}for(C=r(g,C);T<y.length;T++)N=p(C,g,T,y[T],E),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?T:N.key),v=s(N,v,T),R===null?I=N:R.sibling=N,R=N);return e&&C.forEach(function(pe){return t(g,pe)}),ge&&ii(g,T),I}function _(g,v,y,E){var I=ro(y);if(typeof I!="function")throw Error(P(150));if(y=I.call(y),y==null)throw Error(P(151));for(var R=I=null,C=v,T=v=0,N=null,M=y.next();C!==null&&!M.done;T++,M=y.next()){C.index>T?(N=C,C=null):N=C.sibling;var pe=f(g,C,M.value,E);if(pe===null){C===null&&(C=N);break}e&&C&&pe.alternate===null&&t(g,C),v=s(pe,v,T),R===null?I=pe:R.sibling=pe,R=pe,C=N}if(M.done)return n(g,C),ge&&ii(g,T),I;if(C===null){for(;!M.done;T++,M=y.next())M=d(g,M.value,E),M!==null&&(v=s(M,v,T),R===null?I=M:R.sibling=M,R=M);return ge&&ii(g,T),I}for(C=r(g,C);!M.done;T++,M=y.next())M=p(C,g,T,M.value,E),M!==null&&(e&&M.alternate!==null&&C.delete(M.key===null?T:M.key),v=s(M,v,T),R===null?I=M:R.sibling=M,R=M);return e&&C.forEach(function(_t){return t(g,_t)}),ge&&ii(g,T),I}function w(g,v,y,E){if(typeof y=="object"&&y!==null&&y.type===Yi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case vl:e:{for(var I=y.key,R=v;R!==null;){if(R.key===I){if(I=y.type,I===Yi){if(R.tag===7){n(g,R.sibling),v=i(R,y.props.children),v.return=g,g=v;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===dr&&uy(I)===R.type){n(g,R.sibling),v=i(R,y.props),v.ref=lo(g,R,y),v.return=g,g=v;break e}n(g,R);break}else t(g,R);R=R.sibling}y.type===Yi?(v=mi(y.props.children,g.mode,E,y.key),v.return=g,g=v):(E=mu(y.type,y.key,y.props,null,g.mode,E),E.ref=lo(g,v,y),E.return=g,g=E)}return o(g);case Qi:e:{for(R=y.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(g,v.sibling),v=i(v,y.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else t(g,v);v=v.sibling}v=ch(y,g.mode,E),v.return=g,g=v}return o(g);case dr:return R=y._init,w(g,v,R(y._payload),E)}if(yo(y))return m(g,v,y,E);if(ro(y))return _(g,v,y,E);kl(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(g,v.sibling),v=i(v,y),v.return=g,g=v):(n(g,v),v=uh(y,g.mode,E),v.return=g,g=v),o(g)):n(g,v)}return w}var As=ow(!0),aw=ow(!1),Ua={},Tn=Xr(Ua),ia=Xr(Ua),sa=Xr(Ua);function ui(e){if(e===Ua)throw Error(P(174));return e}function vg(e,t){switch(ae(sa,t),ae(ia,e),ae(Tn,Ua),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nf(t,e)}he(Tn),ae(Tn,t)}function ks(){he(Tn),he(ia),he(sa)}function lw(e){ui(sa.current);var t=ui(Tn.current),n=nf(t,e.type);t!==n&&(ae(ia,e),ae(Tn,n))}function yg(e){ia.current===e&&(he(Tn),he(ia))}var ve=Xr(0);function Hu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rh=[];function _g(){for(var e=0;e<rh.length;e++)rh[e]._workInProgressVersionPrimary=null;rh.length=0}var du=tr.ReactCurrentDispatcher,ih=tr.ReactCurrentBatchConfig,Ii=0,ye=null,Le=null,Ue=null,Wu=!1,Oo=!1,oa=0,TA=0;function et(){throw Error(P(321))}function wg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!cn(e[n],t[n]))return!1;return!0}function Eg(e,t,n,r,i,s){if(Ii=s,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,du.current=e===null||e.memoizedState===null?kA:PA,e=n(r,i),Oo){s=0;do{if(Oo=!1,oa=0,25<=s)throw Error(P(301));s+=1,Ue=Le=null,t.updateQueue=null,du.current=xA,e=n(r,i)}while(Oo)}if(du.current=qu,t=Le!==null&&Le.next!==null,Ii=0,Ue=Le=ye=null,Wu=!1,t)throw Error(P(300));return e}function Sg(){var e=oa!==0;return oa=0,e}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?ye.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Xt(){if(Le===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Ue===null?ye.memoizedState:Ue.next;if(t!==null)Ue=t,Le=e;else{if(e===null)throw Error(P(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ue===null?ye.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function aa(e,t){return typeof t=="function"?t(e):t}function sh(e){var t=Xt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ii&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ye.lanes|=c,Ti|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,cn(r,t.memoizedState)||(Tt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,ye.lanes|=s,Ti|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function oh(e){var t=Xt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);cn(s,t.memoizedState)||(Tt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function uw(){}function cw(e,t){var n=ye,r=Xt(),i=t(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Ig(fw.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,la(9,hw.bind(null,n,r,i,t),void 0,null),ze===null)throw Error(P(349));Ii&30||dw(n,t,i)}return i}function dw(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hw(e,t,n,r){t.value=n,t.getSnapshot=r,pw(t)&&gw(e)}function fw(e,t,n){return n(function(){pw(t)&&gw(e)})}function pw(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!cn(e,n)}catch{return!0}}function gw(e){var t=qn(e,1);t!==null&&an(t,e,1,-1)}function cy(e){var t=mn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:e},t.queue=e,e=e.dispatch=AA.bind(null,ye,e),[t.memoizedState,e]}function la(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function mw(){return Xt().memoizedState}function hu(e,t,n,r){var i=mn();ye.flags|=e,i.memoizedState=la(1|t,n,void 0,r===void 0?null:r)}function Fc(e,t,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&wg(r,o.deps)){i.memoizedState=la(t,n,s,r);return}}ye.flags|=e,i.memoizedState=la(1|t,n,s,r)}function dy(e,t){return hu(8390656,8,e,t)}function Ig(e,t){return Fc(2048,8,e,t)}function vw(e,t){return Fc(4,2,e,t)}function yw(e,t){return Fc(4,4,e,t)}function _w(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ww(e,t,n){return n=n!=null?n.concat([e]):null,Fc(4,4,_w.bind(null,t,e),n)}function Tg(){}function Ew(e,t){var n=Xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Sw(e,t){var n=Xt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Iw(e,t,n){return Ii&21?(cn(n,t)||(n=R1(),ye.lanes|=n,Ti|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Tt=!0),e.memoizedState=n)}function CA(e,t){var n=se;se=n!==0&&4>n?n:4,e(!0);var r=ih.transition;ih.transition={};try{e(!1),t()}finally{se=n,ih.transition=r}}function Tw(){return Xt().memoizedState}function RA(e,t,n){var r=Or(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cw(e))Rw(t,n);else if(n=nw(e,t,n,r),n!==null){var i=mt();an(n,e,r,i),Aw(n,t,r)}}function AA(e,t,n){var r=Or(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cw(e))Rw(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var l=t.interleaved;l===null?(i.next=i,gg(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=nw(e,t,i,r),n!==null&&(i=mt(),an(n,e,r,i),Aw(n,t,r))}}function Cw(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Rw(e,t){Oo=Wu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Aw(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tg(e,n)}}var qu={readContext:Yt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},kA={readContext:Yt,useCallback:function(e,t){return mn().memoizedState=[e,t===void 0?null:t],e},useContext:Yt,useEffect:dy,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,hu(4194308,4,_w.bind(null,t,e),n)},useLayoutEffect:function(e,t){return hu(4194308,4,e,t)},useInsertionEffect:function(e,t){return hu(4,2,e,t)},useMemo:function(e,t){var n=mn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=RA.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=mn();return e={current:e},t.memoizedState=e},useState:cy,useDebugValue:Tg,useDeferredValue:function(e){return mn().memoizedState=e},useTransition:function(){var e=cy(!1),t=e[0];return e=CA.bind(null,e[1]),mn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=mn();if(ge){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),ze===null)throw Error(P(349));Ii&30||dw(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,dy(fw.bind(null,r,s,e),[e]),r.flags|=2048,la(9,hw.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=mn(),t=ze.identifierPrefix;if(ge){var n=$n,r=Fn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=oa++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=TA++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},PA={readContext:Yt,useCallback:Ew,useContext:Yt,useEffect:Ig,useImperativeHandle:ww,useInsertionEffect:vw,useLayoutEffect:yw,useMemo:Sw,useReducer:sh,useRef:mw,useState:function(){return sh(aa)},useDebugValue:Tg,useDeferredValue:function(e){var t=Xt();return Iw(t,Le.memoizedState,e)},useTransition:function(){var e=sh(aa)[0],t=Xt().memoizedState;return[e,t]},useMutableSource:uw,useSyncExternalStore:cw,useId:Tw,unstable_isNewReconciler:!1},xA={readContext:Yt,useCallback:Ew,useContext:Yt,useEffect:Ig,useImperativeHandle:ww,useInsertionEffect:vw,useLayoutEffect:yw,useMemo:Sw,useReducer:oh,useRef:mw,useState:function(){return oh(aa)},useDebugValue:Tg,useDeferredValue:function(e){var t=Xt();return Le===null?t.memoizedState=e:Iw(t,Le.memoizedState,e)},useTransition:function(){var e=oh(aa)[0],t=Xt().memoizedState;return[e,t]},useMutableSource:uw,useSyncExternalStore:cw,useId:Tw,unstable_isNewReconciler:!1};function Ps(e,t){try{var n="",r=t;do n+=iR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ah(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Rf(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var NA=typeof WeakMap=="function"?WeakMap:Map;function kw(e,t,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ku||(Ku=!0,Mf=r),Rf(e,t)},n}function Pw(e,t,n){n=Bn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Rf(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rf(e,t),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function hy(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new NA;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=WA.bind(null,e,t,n),t.then(e,e))}function fy(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function py(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bn(-1,1),t.tag=2,Nr(n,t,1))),n.lanes|=1),e)}var bA=tr.ReactCurrentOwner,Tt=!1;function ft(e,t,n,r){t.child=e===null?aw(t,null,n,r):As(t,e.child,n,r)}function gy(e,t,n,r,i){n=n.render;var s=t.ref;return ms(t,i),r=Eg(e,t,n,r,s,i),n=Sg(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gn(e,t,i)):(ge&&n&&ug(t),t.flags|=1,ft(e,t,r,i),t.child)}function my(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!bg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,xw(e,t,s,r,i)):(e=mu(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,r)&&e.ref===t.ref)return Gn(e,t,i)}return t.flags|=1,e=Dr(s,r),e.ref=t.ref,e.return=t,t.child=e}function xw(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ea(s,r)&&e.ref===t.ref)if(Tt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Tt=!0);else return t.lanes=e.lanes,Gn(e,t,i)}return Af(e,t,n,r,i)}function Nw(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(os,xt),xt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(os,xt),xt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(os,xt),xt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,ae(os,xt),xt|=r;return ft(e,t,i,n),t.child}function bw(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Af(e,t,n,r,i){var s=Rt(n)?Ei:lt.current;return s=Cs(t,s),ms(t,i),n=Eg(e,t,n,r,s,i),r=Sg(),e!==null&&!Tt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Gn(e,t,i)):(ge&&r&&ug(t),t.flags|=1,ft(e,t,n,i),t.child)}function vy(e,t,n,r,i){if(Rt(n)){var s=!0;Fu(t)}else s=!1;if(ms(t,i),t.stateNode===null)fu(e,t),sw(t,n,r),Cf(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,a=t.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Rt(n)?Ei:lt.current,u=Cs(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ly(t,o,r,u),hr=!1;var f=t.memoizedState;o.state=f,Bu(t,r,o,i),l=t.memoizedState,a!==r||f!==l||Ct.current||hr?(typeof c=="function"&&(Tf(t,n,c,r),l=t.memoizedState),(a=hr||ay(t,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,rw(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:tn(t.type,a),o.props=u,d=t.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yt(l):(l=Rt(n)?Ei:lt.current,l=Cs(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&ly(t,o,r,l),hr=!1,f=t.memoizedState,o.state=f,Bu(t,r,o,i);var m=t.memoizedState;a!==d||f!==m||Ct.current||hr?(typeof p=="function"&&(Tf(t,n,p,r),m=t.memoizedState),(u=hr||ay(t,n,u,r,f,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return kf(e,t,n,r,s,i)}function kf(e,t,n,r,i,s){bw(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ny(t,n,!1),Gn(e,t,s);r=t.stateNode,bA.current=t;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=As(t,e.child,null,s),t.child=As(t,null,a,s)):ft(e,t,a,s),t.memoizedState=r.state,i&&ny(t,n,!0),t.child}function Ow(e){var t=e.stateNode;t.pendingContext?ty(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ty(e,t.context,!1),vg(e,t.containerInfo)}function yy(e,t,n,r,i){return Rs(),dg(i),t.flags|=256,ft(e,t,n,r),t.child}var Pf={dehydrated:null,treeContext:null,retryLane:0};function xf(e){return{baseLanes:e,cachePool:null,transitions:null}}function Dw(e,t,n){var r=t.pendingProps,i=ve.current,s=!1,o=(t.flags&128)!==0,a;if((a=o)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(ve,i&1),e===null)return Sf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,r,0,null),e=mi(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=xf(n),t.memoizedState=Pf,e):Cg(t,o));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return OA(e,t,o,r,a,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Dr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=mi(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Pf,r}return s=e.child,e=s.sibling,r=Dr(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cg(e,t){return t=Uc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pl(e,t,n,r){return r!==null&&dg(r),As(t,e.child,null,n),e=Cg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function OA(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=ah(Error(P(422))),Pl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Uc({mode:"visible",children:r.children},i,0,null),s=mi(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&As(t,e.child,null,o),t.child.memoizedState=xf(o),t.memoizedState=Pf,s);if(!(t.mode&1))return Pl(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=ah(s,r,void 0),Pl(e,t,o,r)}if(a=(o&e.childLanes)!==0,Tt||a){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qn(e,i),an(r,e,i,-1))}return Ng(),r=ah(Error(P(421))),Pl(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=qA.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,Nt=xr(i.nextSibling),Lt=t,ge=!0,rn=null,e!==null&&(Bt[Ht++]=Fn,Bt[Ht++]=$n,Bt[Ht++]=Si,Fn=e.id,$n=e.overflow,Si=t),t=Cg(t,r.children),t.flags|=4096,t)}function _y(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),If(e.return,t,n)}function lh(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Lw(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ft(e,t,r.children,n),r=ve.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_y(e,n,t);else if(e.tag===19)_y(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(ve,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Hu(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),lh(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Hu(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}lh(t,!0,n,null,s);break;case"together":lh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Gn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ti|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Dr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function DA(e,t,n){switch(t.tag){case 3:Ow(t),Rs();break;case 5:lw(t);break;case 1:Rt(t.type)&&Fu(t);break;case 4:vg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ae(Uu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(ve,ve.current&1),t.flags|=128,null):n&t.child.childLanes?Dw(e,t,n):(ae(ve,ve.current&1),e=Gn(e,t,n),e!==null?e.sibling:null);ae(ve,ve.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Lw(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ve,ve.current),r)break;return null;case 22:case 23:return t.lanes=0,Nw(e,t,n)}return Gn(e,t,n)}var Mw,Nf,Vw,Fw;Mw=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Nf=function(){};Vw=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,ui(Tn.current);var s=null;switch(n){case"input":i=Jh(e,i),r=Jh(e,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=tf(e,i),r=tf(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mu)}rf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Go.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Go.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",e),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Fw=function(e,t,n,r){n!==r&&(t.flags|=4)};function uo(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function LA(e,t,n){var r=t.pendingProps;switch(cg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(t),null;case 1:return Rt(t.type)&&Vu(),tt(t),null;case 3:return r=t.stateNode,ks(),he(Ct),he(lt),_g(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Al(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rn!==null&&($f(rn),rn=null))),Nf(e,t),tt(t),null;case 5:yg(t);var i=ui(sa.current);if(n=t.type,e!==null&&t.stateNode!=null)Vw(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return tt(t),null}if(e=ui(Tn.current),Al(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[vn]=t,r[ra]=s,e=(t.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<wo.length;i++)ue(wo[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":kv(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":xv(r,s),ue("invalid",r)}rf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Rl(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Rl(r.textContent,a,e),i=["children",""+a]):Go.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":yl(r),Pv(r,s,!0);break;case"textarea":yl(r),Nv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Mu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=d1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[vn]=t,e[ra]=r,Mw(e,t,!1,!1),t.stateNode=e;e:{switch(o=sf(n,r),n){case"dialog":ue("cancel",e),ue("close",e),i=r;break;case"iframe":case"object":case"embed":ue("load",e),i=r;break;case"video":case"audio":for(i=0;i<wo.length;i++)ue(wo[i],e);i=r;break;case"source":ue("error",e),i=r;break;case"img":case"image":case"link":ue("error",e),ue("load",e),i=r;break;case"details":ue("toggle",e),i=r;break;case"input":kv(e,r),i=Jh(e,r),ue("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),ue("invalid",e);break;case"textarea":xv(e,r),i=tf(e,r),ue("invalid",e);break;default:i=r}rf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?p1(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&h1(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ko(e,l):typeof l=="number"&&Ko(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ue("scroll",e):l!=null&&Qp(e,s,l,o))}switch(n){case"input":yl(e),Pv(e,r,!1);break;case"textarea":yl(e),Nv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jr(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?hs(e,!!r.multiple,s,!1):r.defaultValue!=null&&hs(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Mu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return tt(t),null;case 6:if(e&&t.stateNode!=null)Fw(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=ui(sa.current),ui(Tn.current),Al(t)){if(r=t.stateNode,n=t.memoizedProps,r[vn]=t,(s=r.nodeValue!==n)&&(e=Lt,e!==null))switch(e.tag){case 3:Rl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Rl(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=t,t.stateNode=r}return tt(t),null;case 13:if(he(ve),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&Nt!==null&&t.mode&1&&!(t.flags&128))tw(),Rs(),t.flags|=98560,s=!1;else if(s=Al(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(P(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[vn]=t}else Rs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;tt(t),s=!1}else rn!==null&&($f(rn),rn=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ve.current&1?Ve===0&&(Ve=3):Ng())),t.updateQueue!==null&&(t.flags|=4),tt(t),null);case 4:return ks(),Nf(e,t),e===null&&ta(t.stateNode.containerInfo),tt(t),null;case 10:return pg(t.type._context),tt(t),null;case 17:return Rt(t.type)&&Vu(),tt(t),null;case 19:if(he(ve),s=t.memoizedState,s===null)return tt(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)uo(s,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Hu(e),o!==null){for(t.flags|=128,uo(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(ve,ve.current&1|2),t.child}e=e.sibling}s.tail!==null&&Pe()>xs&&(t.flags|=128,r=!0,uo(s,!1),t.lanes=4194304)}else{if(!r)if(e=Hu(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return tt(t),null}else 2*Pe()-s.renderingStartTime>xs&&n!==1073741824&&(t.flags|=128,r=!0,uo(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Pe(),t.sibling=null,n=ve.current,ae(ve,r?n&1|2:n&1),t):(tt(t),null);case 22:case 23:return xg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xt&1073741824&&(tt(t),t.subtreeFlags&6&&(t.flags|=8192)):tt(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function MA(e,t){switch(cg(t),t.tag){case 1:return Rt(t.type)&&Vu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ks(),he(Ct),he(lt),_g(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yg(t),null;case 13:if(he(ve),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Rs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(ve),null;case 4:return ks(),null;case 10:return pg(t.type._context),null;case 22:case 23:return xg(),null;case 24:return null;default:return null}}var xl=!1,it=!1,VA=typeof WeakSet=="function"?WeakSet:Set,D=null;function ss(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(e,t,r)}else n.current=null}function bf(e,t,n){try{n()}catch(r){Se(e,t,r)}}var wy=!1;function FA(e,t){if(gf=Ou,e=z1(),lg(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mf={focusedElem:e,selectionRange:n},Ou=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,w=m.memoizedState,g=t.stateNode,v=g.getSnapshotBeforeUpdate(t.elementType===t.type?_:tn(t.type,_),w);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){Se(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return m=wy,wy=!1,m}function Do(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&bf(t,n,s)}i=i.next}while(i!==r)}}function $c(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Of(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $w(e){var t=e.alternate;t!==null&&(e.alternate=null,$w(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vn],delete t[ra],delete t[_f],delete t[wA],delete t[EA])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jw(e){return e.tag===5||e.tag===3||e.tag===4}function Ey(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mu));else if(r!==4&&(e=e.child,e!==null))for(Df(e,t,n),e=e.sibling;e!==null;)Df(e,t,n),e=e.sibling}function Lf(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Lf(e,t,n),e=e.sibling;e!==null;)Lf(e,t,n),e=e.sibling}var qe=null,nn=!1;function lr(e,t,n){for(n=n.child;n!==null;)Uw(e,t,n),n=n.sibling}function Uw(e,t,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Nc,n)}catch{}switch(n.tag){case 5:it||ss(n,t);case 6:var r=qe,i=nn;qe=null,lr(e,t,n),qe=r,nn=i,qe!==null&&(nn?(e=qe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(nn?(e=qe,n=n.stateNode,e.nodeType===8?th(e.parentNode,n):e.nodeType===1&&th(e,n),Jo(e)):th(qe,n.stateNode));break;case 4:r=qe,i=nn,qe=n.stateNode.containerInfo,nn=!0,lr(e,t,n),qe=r,nn=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bf(n,t,o),i=i.next}while(i!==r)}lr(e,t,n);break;case 1:if(!it&&(ss(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Se(n,t,a)}lr(e,t,n);break;case 21:lr(e,t,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,lr(e,t,n),it=r):lr(e,t,n);break;default:lr(e,t,n)}}function Sy(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new VA),t.forEach(function(r){var i=GA.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,a=o;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,nn=!1;break e;case 3:qe=a.stateNode.containerInfo,nn=!0;break e;case 4:qe=a.stateNode.containerInfo,nn=!0;break e}a=a.return}if(qe===null)throw Error(P(160));Uw(s,o,i),qe=null,nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Se(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)zw(t,e),t=t.sibling}function zw(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(en(t,e),gn(e),r&4){try{Do(3,e,e.return),$c(3,e)}catch(_){Se(e,e.return,_)}try{Do(5,e,e.return)}catch(_){Se(e,e.return,_)}}break;case 1:en(t,e),gn(e),r&512&&n!==null&&ss(n,n.return);break;case 5:if(en(t,e),gn(e),r&512&&n!==null&&ss(n,n.return),e.flags&32){var i=e.stateNode;try{Ko(i,"")}catch(_){Se(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&u1(i,s),sf(a,o);var u=sf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?p1(i,d):c==="dangerouslySetInnerHTML"?h1(i,d):c==="children"?Ko(i,d):Qp(i,c,d,u)}switch(a){case"input":Zh(i,s);break;case"textarea":c1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?hs(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?hs(i,!!s.multiple,s.defaultValue,!0):hs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ra]=s}catch(_){Se(e,e.return,_)}}break;case 6:if(en(t,e),gn(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){Se(e,e.return,_)}}break;case 3:if(en(t,e),gn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(t.containerInfo)}catch(_){Se(e,e.return,_)}break;case 4:en(t,e),gn(e);break;case 13:en(t,e),gn(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(kg=Pe())),r&4&&Sy(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(it=(u=it)||c,en(t,e),it=u):en(t,e),gn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(D=e,c=e.child;c!==null;){for(d=D=c;D!==null;){switch(f=D,p=f.child,f.tag){case 0:case 11:case 14:case 15:Do(4,f,f.return);break;case 1:ss(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(_){Se(r,n,_)}}break;case 5:ss(f,f.return);break;case 22:if(f.memoizedState!==null){Ty(d);continue}}p!==null?(p.return=f,D=p):Ty(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=f1("display",o))}catch(_){Se(e,e.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Se(e,e.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:en(t,e),gn(e),r&4&&Sy(e);break;case 21:break;default:en(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(jw(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ko(i,""),r.flags&=-33);var s=Ey(e);Lf(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ey(e);Df(e,a,o);break;default:throw Error(P(161))}}catch(l){Se(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $A(e,t,n){D=e,Bw(e)}function Bw(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||xl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||it;a=xl;var u=it;if(xl=o,(it=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Cy(i):l!==null?(l.return=o,D=l):Cy(i);for(;s!==null;)D=s,Bw(s),s=s.sibling;D=i,xl=a,it=u}Iy(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):Iy(e)}}function Iy(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:it||$c(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&oy(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}oy(t,o,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Jo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}it||t.flags&512&&Of(t)}catch(f){Se(t,t.return,f)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Ty(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Cy(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$c(4,t)}catch(l){Se(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Se(t,i,l)}}var s=t.return;try{Of(t)}catch(l){Se(t,s,l)}break;case 5:var o=t.return;try{Of(t)}catch(l){Se(t,o,l)}}}catch(l){Se(t,t.return,l)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var jA=Math.ceil,Gu=tr.ReactCurrentDispatcher,Rg=tr.ReactCurrentOwner,Gt=tr.ReactCurrentBatchConfig,ee=0,ze=null,be=null,Ye=0,xt=0,os=Xr(0),Ve=0,ua=null,Ti=0,jc=0,Ag=0,Lo=null,St=null,kg=0,xs=1/0,Mn=null,Ku=!1,Mf=null,br=null,Nl=!1,Er=null,Qu=0,Mo=0,Vf=null,pu=-1,gu=0;function mt(){return ee&6?Pe():pu!==-1?pu:pu=Pe()}function Or(e){return e.mode&1?ee&2&&Ye!==0?Ye&-Ye:IA.transition!==null?(gu===0&&(gu=R1()),gu):(e=se,e!==0||(e=window.event,e=e===void 0?16:O1(e.type)),e):1}function an(e,t,n,r){if(50<Mo)throw Mo=0,Vf=null,Error(P(185));Fa(e,n,r),(!(ee&2)||e!==ze)&&(e===ze&&(!(ee&2)&&(jc|=n),Ve===4&&pr(e,Ye)),At(e,r),n===1&&ee===0&&!(t.mode&1)&&(xs=Pe()+500,Mc&&Jr()))}function At(e,t){var n=e.callbackNode;IR(e,t);var r=bu(e,e===ze?Ye:0);if(r===0)n!==null&&Dv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Dv(n),t===1)e.tag===0?SA(Ry.bind(null,e)):J1(Ry.bind(null,e)),yA(function(){!(ee&6)&&Jr()}),n=null;else{switch(A1(r)){case 1:n=eg;break;case 4:n=T1;break;case 16:n=Nu;break;case 536870912:n=C1;break;default:n=Nu}n=Xw(n,Hw.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hw(e,t){if(pu=-1,gu=0,ee&6)throw Error(P(327));var n=e.callbackNode;if(vs()&&e.callbackNode!==n)return null;var r=bu(e,e===ze?Ye:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yu(e,r);else{t=r;var i=ee;ee|=2;var s=qw();(ze!==e||Ye!==t)&&(Mn=null,xs=Pe()+500,gi(e,t));do try{BA();break}catch(a){Ww(e,a)}while(!0);fg(),Gu.current=s,ee=i,be!==null?t=0:(ze=null,Ye=0,t=Ve)}if(t!==0){if(t===2&&(i=cf(e),i!==0&&(r=i,t=Ff(e,i))),t===1)throw n=ua,gi(e,0),pr(e,r),At(e,Pe()),n;if(t===6)pr(e,r);else{if(i=e.current.alternate,!(r&30)&&!UA(i)&&(t=Yu(e,r),t===2&&(s=cf(e),s!==0&&(r=s,t=Ff(e,s))),t===1))throw n=ua,gi(e,0),pr(e,r),At(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:si(e,St,Mn);break;case 3:if(pr(e,r),(r&130023424)===r&&(t=kg+500-Pe(),10<t)){if(bu(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){mt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=yf(si.bind(null,e,St,Mn),t);break}si(e,St,Mn);break;case 4:if(pr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jA(r/1960))-r,10<r){e.timeoutHandle=yf(si.bind(null,e,St,Mn),r);break}si(e,St,Mn);break;case 5:si(e,St,Mn);break;default:throw Error(P(329))}}}return At(e,Pe()),e.callbackNode===n?Hw.bind(null,e):null}function Ff(e,t){var n=Lo;return e.current.memoizedState.isDehydrated&&(gi(e,t).flags|=256),e=Yu(e,t),e!==2&&(t=St,St=n,t!==null&&$f(t)),e}function $f(e){St===null?St=e:St.push.apply(St,e)}function UA(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pr(e,t){for(t&=~Ag,t&=~jc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-on(t),r=1<<n;e[n]=-1,t&=~r}}function Ry(e){if(ee&6)throw Error(P(327));vs();var t=bu(e,0);if(!(t&1))return At(e,Pe()),null;var n=Yu(e,t);if(e.tag!==0&&n===2){var r=cf(e);r!==0&&(t=r,n=Ff(e,r))}if(n===1)throw n=ua,gi(e,0),pr(e,t),At(e,Pe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,si(e,St,Mn),At(e,Pe()),null}function Pg(e,t){var n=ee;ee|=1;try{return e(t)}finally{ee=n,ee===0&&(xs=Pe()+500,Mc&&Jr())}}function Ci(e){Er!==null&&Er.tag===0&&!(ee&6)&&vs();var t=ee;ee|=1;var n=Gt.transition,r=se;try{if(Gt.transition=null,se=1,e)return e()}finally{se=r,Gt.transition=n,ee=t,!(ee&6)&&Jr()}}function xg(){xt=os.current,he(os)}function gi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,vA(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(cg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vu();break;case 3:ks(),he(Ct),he(lt),_g();break;case 5:yg(r);break;case 4:ks();break;case 13:he(ve);break;case 19:he(ve);break;case 10:pg(r.type._context);break;case 22:case 23:xg()}n=n.return}if(ze=e,be=e=Dr(e.current,null),Ye=xt=t,Ve=0,ua=null,Ag=jc=Ti=0,St=Lo=null,li!==null){for(t=0;t<li.length;t++)if(n=li[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}li=null}return e}function Ww(e,t){do{var n=be;try{if(fg(),du.current=qu,Wu){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wu=!1}if(Ii=0,Ue=Le=ye=null,Oo=!1,oa=0,Rg.current=null,n===null||n.return===null){Ve=1,ua=t,be=null;break}e:{var s=e,o=n.return,a=n,l=t;if(t=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=fy(o);if(p!==null){p.flags&=-257,py(p,o,a,s,t),p.mode&1&&hy(s,u,t),t=p,l=u;var m=t.updateQueue;if(m===null){var _=new Set;_.add(l),t.updateQueue=_}else m.add(l);break e}else{if(!(t&1)){hy(s,u,t),Ng();break e}l=Error(P(426))}}else if(ge&&a.mode&1){var w=fy(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),py(w,o,a,s,t),dg(Ps(l,a));break e}}s=l=Ps(l,a),Ve!==4&&(Ve=2),Lo===null?Lo=[s]:Lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var g=kw(s,l,t);sy(s,g);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(br===null||!br.has(y)))){s.flags|=65536,t&=-t,s.lanes|=t;var E=Pw(s,a,t);sy(s,E);break e}}s=s.return}while(s!==null)}Kw(n)}catch(I){t=I,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function qw(){var e=Gu.current;return Gu.current=qu,e===null?qu:e}function Ng(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),ze===null||!(Ti&268435455)&&!(jc&268435455)||pr(ze,Ye)}function Yu(e,t){var n=ee;ee|=2;var r=qw();(ze!==e||Ye!==t)&&(Mn=null,gi(e,t));do try{zA();break}catch(i){Ww(e,i)}while(!0);if(fg(),ee=n,Gu.current=r,be!==null)throw Error(P(261));return ze=null,Ye=0,Ve}function zA(){for(;be!==null;)Gw(be)}function BA(){for(;be!==null&&!pR();)Gw(be)}function Gw(e){var t=Yw(e.alternate,e,xt);e.memoizedProps=e.pendingProps,t===null?Kw(e):be=t,Rg.current=null}function Kw(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=MA(n,t),n!==null){n.flags&=32767,be=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,be=null;return}}else if(n=LA(n,t,xt),n!==null){be=n;return}if(t=t.sibling,t!==null){be=t;return}be=t=e}while(t!==null);Ve===0&&(Ve=5)}function si(e,t,n){var r=se,i=Gt.transition;try{Gt.transition=null,se=1,HA(e,t,n,r)}finally{Gt.transition=i,se=r}return null}function HA(e,t,n,r){do vs();while(Er!==null);if(ee&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(TR(e,s),e===ze&&(be=ze=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,Xw(Nu,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gt.transition,Gt.transition=null;var o=se;se=1;var a=ee;ee|=4,Rg.current=null,FA(e,n),zw(n,e),cA(mf),Ou=!!gf,mf=gf=null,e.current=n,$A(n),gR(),ee=a,se=o,Gt.transition=s}else e.current=n;if(Nl&&(Nl=!1,Er=e,Qu=i),s=e.pendingLanes,s===0&&(br=null),yR(n.stateNode),At(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ku)throw Ku=!1,e=Mf,Mf=null,e;return Qu&1&&e.tag!==0&&vs(),s=e.pendingLanes,s&1?e===Vf?Mo++:(Mo=0,Vf=e):Mo=0,Jr(),null}function vs(){if(Er!==null){var e=A1(Qu),t=Gt.transition,n=se;try{if(Gt.transition=null,se=16>e?16:e,Er===null)var r=!1;else{if(e=Er,Er=null,Qu=0,ee&6)throw Error(P(331));var i=ee;for(ee|=4,D=e.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Do(8,c,s)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var f=c.sibling,p=c.return;if($w(c),c===u){D=null;break}if(f!==null){f.return=p,D=f;break}D=p}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Do(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,D=g;break e}D=s.return}}var v=e.current;for(D=v;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=v;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$c(9,a)}}catch(I){Se(a,a.return,I)}if(a===o){D=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,D=E;break e}D=a.return}}if(ee=i,Jr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Nc,e)}catch{}r=!0}return r}finally{se=n,Gt.transition=t}}return!1}function Ay(e,t,n){t=Ps(n,t),t=kw(e,t,1),e=Nr(e,t,1),t=mt(),e!==null&&(Fa(e,1,t),At(e,t))}function Se(e,t,n){if(e.tag===3)Ay(e,e,n);else for(;t!==null;){if(t.tag===3){Ay(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){e=Ps(n,e),e=Pw(t,e,1),t=Nr(t,e,1),e=mt(),t!==null&&(Fa(t,1,e),At(t,e));break}}t=t.return}}function WA(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&n,ze===e&&(Ye&n)===n&&(Ve===4||Ve===3&&(Ye&130023424)===Ye&&500>Pe()-kg?gi(e,0):Ag|=n),At(e,t)}function Qw(e,t){t===0&&(e.mode&1?(t=El,El<<=1,!(El&130023424)&&(El=4194304)):t=1);var n=mt();e=qn(e,t),e!==null&&(Fa(e,t,n),At(e,n))}function qA(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Qw(e,n)}function GA(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Qw(e,n)}var Yw;Yw=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ct.current)Tt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Tt=!1,DA(e,t,n);Tt=!!(e.flags&131072)}else Tt=!1,ge&&t.flags&1048576&&Z1(t,ju,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fu(e,t),e=t.pendingProps;var i=Cs(t,lt.current);ms(t,n),i=Eg(null,t,r,e,i,n);var s=Sg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Rt(r)?(s=!0,Fu(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,mg(t),i.updater=Vc,t.stateNode=i,i._reactInternals=t,Cf(t,r,e,n),t=kf(null,t,r,!0,s,n)):(t.tag=0,ge&&s&&ug(t),ft(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=QA(r),e=tn(r,e),i){case 0:t=Af(null,t,r,e,n);break e;case 1:t=vy(null,t,r,e,n);break e;case 11:t=gy(null,t,r,e,n);break e;case 14:t=my(null,t,r,tn(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),Af(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),vy(e,t,r,i,n);case 3:e:{if(Ow(t),e===null)throw Error(P(387));r=t.pendingProps,s=t.memoizedState,i=s.element,rw(e,t),Bu(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=Ps(Error(P(423)),t),t=yy(e,t,r,n,i);break e}else if(r!==i){i=Ps(Error(P(424)),t),t=yy(e,t,r,n,i);break e}else for(Nt=xr(t.stateNode.containerInfo.firstChild),Lt=t,ge=!0,rn=null,n=aw(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),r===i){t=Gn(e,t,n);break e}ft(e,t,r,n)}t=t.child}return t;case 5:return lw(t),e===null&&Sf(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,vf(r,i)?o=null:s!==null&&vf(r,s)&&(t.flags|=32),bw(e,t),ft(e,t,o,n),t.child;case 6:return e===null&&Sf(t),null;case 13:return Dw(e,t,n);case 4:return vg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=As(t,null,r,n):ft(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),gy(e,t,r,i,n);case 7:return ft(e,t,t.pendingProps,n),t.child;case 8:return ft(e,t,t.pendingProps.children,n),t.child;case 12:return ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,ae(Uu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!Ct.current){t=Gn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),If(s.return,n,t),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),If(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,ms(t,n),i=Yt(i),r=r(i),t.flags|=1,ft(e,t,r,n),t.child;case 14:return r=t.type,i=tn(r,t.pendingProps),i=tn(r.type,i),my(e,t,r,i,n);case 15:return xw(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tn(r,i),fu(e,t),t.tag=1,Rt(r)?(e=!0,Fu(t)):e=!1,ms(t,n),sw(t,r,i),Cf(t,r,i,n),kf(null,t,r,!0,e,n);case 19:return Lw(e,t,n);case 22:return Nw(e,t,n)}throw Error(P(156,t.tag))};function Xw(e,t){return I1(e,t)}function KA(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(e,t,n,r){return new KA(e,t,n,r)}function bg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function QA(e){if(typeof e=="function")return bg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xp)return 11;if(e===Jp)return 14}return 2}function Dr(e,t){var n=e.alternate;return n===null?(n=qt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function mu(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")bg(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Yi:return mi(n.children,i,s,t);case Yp:o=8,i|=8;break;case Kh:return e=qt(12,n,t,i|2),e.elementType=Kh,e.lanes=s,e;case Qh:return e=qt(13,n,t,i),e.elementType=Qh,e.lanes=s,e;case Yh:return e=qt(19,n,t,i),e.elementType=Yh,e.lanes=s,e;case o1:return Uc(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case i1:o=10;break e;case s1:o=9;break e;case Xp:o=11;break e;case Jp:o=14;break e;case dr:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=qt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function mi(e,t,n,r){return e=qt(7,e,r,t),e.lanes=n,e}function Uc(e,t,n,r){return e=qt(22,e,r,t),e.elementType=o1,e.lanes=n,e.stateNode={isHidden:!1},e}function uh(e,t,n){return e=qt(6,e,null,t),e.lanes=n,e}function ch(e,t,n){return t=qt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function YA(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hd(0),this.expirationTimes=Hd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Og(e,t,n,r,i,s,o,a,l){return e=new YA(e,t,n,a,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=qt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mg(s),e}function XA(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Jw(e){if(!e)return Ur;e=e._reactInternals;e:{if(Fi(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Rt(n))return X1(e,n,t)}return t}function Zw(e,t,n,r,i,s,o,a,l){return e=Og(n,r,!0,e,i,s,o,a,l),e.context=Jw(null),n=e.current,r=mt(),i=Or(n),s=Bn(r,i),s.callback=t??null,Nr(n,s,i),e.current.lanes=i,Fa(e,i,r),At(e,r),e}function zc(e,t,n,r){var i=t.current,s=mt(),o=Or(i);return n=Jw(n),t.context===null?t.context=n:t.pendingContext=n,t=Bn(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nr(i,t,o),e!==null&&(an(e,i,o,s),cu(e,i,o)),o}function Xu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ky(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Dg(e,t){ky(e,t),(e=e.alternate)&&ky(e,t)}function JA(){return null}var eE=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lg(e){this._internalRoot=e}Bc.prototype.render=Lg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));zc(e,t,null,null)};Bc.prototype.unmount=Lg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ci(function(){zc(null,e,null,null)}),t[Wn]=null}};function Bc(e){this._internalRoot=e}Bc.prototype.unstable_scheduleHydration=function(e){if(e){var t=x1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<fr.length&&t!==0&&t<fr[n].priority;n++);fr.splice(n,0,e),n===0&&b1(e)}};function Mg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Py(){}function ZA(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Xu(o);s.call(u)}}var o=Zw(t,r,e,0,null,!1,!1,"",Py);return e._reactRootContainer=o,e[Wn]=o.current,ta(e.nodeType===8?e.parentNode:e),Ci(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Xu(l);a.call(u)}}var l=Og(e,0,!1,null,null,!1,!1,"",Py);return e._reactRootContainer=l,e[Wn]=l.current,ta(e.nodeType===8?e.parentNode:e),Ci(function(){zc(t,l,n,r)}),l}function Wc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Xu(o);a.call(l)}}zc(t,o,e,i)}else o=ZA(n,t,e,i,r);return Xu(o)}k1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=_o(t.pendingLanes);n!==0&&(tg(t,n|1),At(t,Pe()),!(ee&6)&&(xs=Pe()+500,Jr()))}break;case 13:Ci(function(){var r=qn(e,1);if(r!==null){var i=mt();an(r,e,1,i)}}),Dg(e,1)}};ng=function(e){if(e.tag===13){var t=qn(e,134217728);if(t!==null){var n=mt();an(t,e,134217728,n)}Dg(e,134217728)}};P1=function(e){if(e.tag===13){var t=Or(e),n=qn(e,t);if(n!==null){var r=mt();an(n,e,t,r)}Dg(e,t)}};x1=function(){return se};N1=function(e,t){var n=se;try{return se=e,t()}finally{se=n}};af=function(e,t,n){switch(t){case"input":if(Zh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Lc(r);if(!i)throw Error(P(90));l1(r),Zh(r,i)}}}break;case"textarea":c1(e,n);break;case"select":t=n.value,t!=null&&hs(e,!!n.multiple,t,!1)}};v1=Pg;y1=Ci;var ek={usingClientEntryPoint:!1,Events:[ja,es,Lc,g1,m1,Pg]},co={findFiberByHostInstance:ai,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tk={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=E1(e),e===null?null:e.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||JA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{Nc=bl.inject(tk),In=bl}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ek;$t.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mg(t))throw Error(P(200));return XA(e,t,null,n)};$t.createRoot=function(e,t){if(!Mg(e))throw Error(P(299));var n=!1,r="",i=eE;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Og(e,1,!1,null,null,n,!1,r,i),e[Wn]=t.current,ta(e.nodeType===8?e.parentNode:e),new Lg(t)};$t.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=E1(t),e=e===null?null:e.stateNode,e};$t.flushSync=function(e){return Ci(e)};$t.hydrate=function(e,t,n){if(!Hc(t))throw Error(P(200));return Wc(null,e,t,!0,n)};$t.hydrateRoot=function(e,t,n){if(!Mg(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=eE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Zw(t,null,e,1,n??null,i,!1,s,o),e[Wn]=t.current,ta(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Bc(t)};$t.render=function(e,t,n){if(!Hc(t))throw Error(P(200));return Wc(null,e,t,!1,n)};$t.unmountComponentAtNode=function(e){if(!Hc(e))throw Error(P(40));return e._reactRootContainer?(Ci(function(){Wc(null,null,e,!1,function(){e._reactRootContainer=null,e[Wn]=null})}),!0):!1};$t.unstable_batchedUpdates=Pg;$t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hc(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Wc(e,t,n,!1,r)};$t.version="18.2.0-next-9e3b772b8-20220608";function tE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tE)}catch(e){console.error(e)}}tE(),Z0.exports=$t;var nk=Z0.exports,xy=nk;qh.createRoot=xy.createRoot,qh.hydrateRoot=xy.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ca.apply(this,arguments)}var Sr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Sr||(Sr={}));const Ny="popstate";function rk(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:o,hash:a}=r.location;return jf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ju(i)}return sk(t,n,null,e)}function _e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ik(){return Math.random().toString(36).substr(2,8)}function by(e,t){return{usr:e.state,key:e.key,idx:t}}function jf(e,t,n,r){return n===void 0&&(n=null),ca({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ws(t):t,{state:n,key:t&&t.key||r||ik()})}function Ju(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ws(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function sk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Sr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ca({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Sr.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:g})}function f(w,g){a=Sr.Push;let v=jf(_.location,w,g);n&&n(v,w),u=c()+1;let y=by(v,u),E=_.createHref(v);try{o.pushState(y,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,g){a=Sr.Replace;let v=jf(_.location,w,g);n&&n(v,w),u=c();let y=by(v,u),E=_.createHref(v);o.replaceState(y,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function m(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof w=="string"?w:Ju(w);return _e(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let _={get action(){return a},get location(){return e(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ny,d),l=w,()=>{i.removeEventListener(Ny,d),l=null}},createHref(w){return t(i,w)},createURL:m,encodeLocation(w){let g=m(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(w){return o.go(w)}};return _}var Oy;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Oy||(Oy={}));function ok(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Ws(t):t,i=da(r.pathname||"/",n);if(i==null)return null;let s=nE(e);ak(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=mk(s[a],yk(i));return o}function nE(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Lr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),nE(s.children,t,c,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:pk(u,s.index),routesMeta:c})};return e.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of rE(s.path))i(s,o,l)}),t}function rE(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=rE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>e.startsWith("/")&&l===""?"/":l)}function ak(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lk=/^:\w+$/,uk=3,ck=2,dk=1,hk=10,fk=-2,Dy=e=>e==="*";function pk(e,t){let n=e.split("/"),r=n.length;return n.some(Dy)&&(r+=fk),t&&(r+=ck),n.filter(i=>!Dy(i)).reduce((i,s)=>i+(lk.test(s)?uk:s===""?dk:hk),r)}function gk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function mk(e,t){let{routesMeta:n}=e,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",c=Uf({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Lr([i,c.pathname]),pathnameBase:Ik(Lr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Lr([i,c.pathnameBase]))}return s}function Uf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=vk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const m=a[d];return p&&!m?u[f]=void 0:u[f]=_k(m||"",f),u},{}),pathname:s,pathnameBase:o,pattern:e}}function vk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Vg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function yk(e){try{return decodeURI(e)}catch(t){return Vg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _k(e,t){try{return decodeURIComponent(e)}catch(n){return Vg(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function da(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function wk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ws(e):e;return{pathname:n?n.startsWith("/")?n:Ek(n,t):t,search:Tk(r),hash:Ck(i)}}function Ek(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dh(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sk(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Fg(e,t){let n=Sk(e);return t?n.map((r,i)=>i===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $g(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ws(e):(i=ca({},e),_e(!i.pathname||!i.pathname.includes("?"),dh("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),dh("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),dh("#","search","hash",i)));let s=e===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=t.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?t[d]:"/"}let l=wk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Lr=e=>e.join("/").replace(/\/\/+/g,"/"),Ik=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Tk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ck=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Rk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const iE=["post","put","patch","delete"];new Set(iE);const Ak=["get",...iE];new Set(Ak);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ha.apply(this,arguments)}const qc=S.createContext(null),sE=S.createContext(null),nr=S.createContext(null),Gc=S.createContext(null),rr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),oE=S.createContext(null);function kk(e,t){let{relative:n}=t===void 0?{}:t;qs()||_e(!1);let{basename:r,navigator:i}=S.useContext(nr),{hash:s,pathname:o,search:a}=Kc(e,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Lr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function qs(){return S.useContext(Gc)!=null}function Gs(){return qs()||_e(!1),S.useContext(Gc).location}function aE(e){S.useContext(nr).static||S.useLayoutEffect(e)}function za(){let{isDataRoute:e}=S.useContext(rr);return e?Bk():Pk()}function Pk(){qs()||_e(!1);let e=S.useContext(qc),{basename:t,future:n,navigator:r}=S.useContext(nr),{matches:i}=S.useContext(rr),{pathname:s}=Gs(),o=JSON.stringify(Fg(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return aE(()=>{a.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=$g(u,JSON.parse(o),s,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Lr([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,o,s,e])}const xk=S.createContext(null);function Nk(e){let t=S.useContext(rr).outlet;return t&&S.createElement(xk.Provider,{value:e},t)}function Kc(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=S.useContext(nr),{matches:i}=S.useContext(rr),{pathname:s}=Gs(),o=JSON.stringify(Fg(i,r.v7_relativeSplatPath));return S.useMemo(()=>$g(e,JSON.parse(o),s,n==="path"),[e,o,s,n])}function bk(e,t){return Ok(e,t)}function Ok(e,t,n,r){qs()||_e(!1);let{navigator:i}=S.useContext(nr),{matches:s}=S.useContext(rr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Gs(),c;if(t){var d;let w=typeof t=="string"?Ws(t):t;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||_e(!1),c=w}else c=u;let f=c.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",m=ok(e,{pathname:p}),_=Fk(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Lr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Lr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return t&&_?S.createElement(Gc.Provider,{value:{location:ha({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Sr.Pop}},_):_}function Dk(){let e=zk(),t=Rk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},t),n?S.createElement("pre",{style:i},n):null,null)}const Lk=S.createElement(Dk,null);class Mk extends S.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?S.createElement(rr.Provider,{value:this.props.routeContext},S.createElement(oE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vk(e){let{routeContext:t,match:n,children:r}=e,i=S.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(rr.Provider,{value:t},r)}function Fk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if((s=n)!=null&&s.errors)e=n.matches;else return null}let o=e,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||_e(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:p}=n,m=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||m){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let p,m=!1,_=null,w=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||Lk,l&&(u<0&&f===0?(Hk("route-fallback",!1),m=!0,w=null):u===f&&(m=!0,w=d.route.hydrateFallbackElement||null)));let g=t.concat(o.slice(0,f+1)),v=()=>{let y;return p?y=_:m?y=w:d.route.Component?y=S.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,S.createElement(Vk,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?S.createElement(Mk,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var lE=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(lE||{}),Zu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zu||{});function $k(e){let t=S.useContext(qc);return t||_e(!1),t}function jk(e){let t=S.useContext(sE);return t||_e(!1),t}function Uk(e){let t=S.useContext(rr);return t||_e(!1),t}function uE(e){let t=Uk(),n=t.matches[t.matches.length-1];return n.route.id||_e(!1),n.route.id}function zk(){var e;let t=S.useContext(oE),n=jk(Zu.UseRouteError),r=uE(Zu.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Bk(){let{router:e}=$k(lE.UseNavigateStable),t=uE(Zu.UseNavigateStable),n=S.useRef(!1);return aE(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ha({fromRouteId:t},s)))},[e,t])}const Ly={};function Hk(e,t,n){!t&&!Ly[e]&&(Ly[e]=!0)}function Wk(e){let{to:t,replace:n,state:r,relative:i}=e;qs()||_e(!1);let{future:s,static:o}=S.useContext(nr),{matches:a}=S.useContext(rr),{pathname:l}=Gs(),u=za(),c=$g(t,Fg(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return S.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function qk(e){return Nk(e.context)}function Ae(e){_e(!1)}function Gk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Sr.Pop,navigator:s,static:o=!1,future:a}=e;qs()&&_e(!1);let l=t.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:ha({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ws(r));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:m="default"}=r,_=S.useMemo(()=>{let w=da(c,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:p,key:m},navigationType:i}},[l,c,d,f,p,m,i]);return _==null?null:S.createElement(nr.Provider,{value:u},S.createElement(Gc.Provider,{children:n,value:_}))}function Kk(e){let{children:t,location:n}=e;return bk(zf(t),n)}new Promise(()=>{});function zf(e,t){t===void 0&&(t=[]);let n=[];return S.Children.forEach(e,(r,i)=>{if(!S.isValidElement(r))return;let s=[...t,i];if(r.type===S.Fragment){n.push.apply(n,zf(r.props.children,s));return}r.type!==Ae&&_e(!1),!r.props.index||!r.props.children||_e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=zf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ec(){return ec=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ec.apply(this,arguments)}function cE(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Qk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Yk(e,t){return e.button===0&&(!t||t==="_self")&&!Qk(e)}const Xk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Jk=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Zk=S.createContext({isTransitioning:!1}),eP="startTransition",My=qC[eP];function tP(e){let{basename:t,children:n,future:r,window:i}=e,s=S.useRef();s.current==null&&(s.current=rk({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(d=>{u&&My?My(()=>l(d)):l(d)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.createElement(Gk,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const nP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qc=S.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,f=cE(t,Xk),{basename:p}=S.useContext(nr),m,_=!1;if(typeof u=="string"&&rP.test(u)&&(m=u,nP))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),I=da(E.pathname,p);E.origin===y.origin&&I!=null?u=I+E.search+E.hash:_=!0}catch{}let w=kk(u,{relative:i}),g=sP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function v(y){r&&r(y),y.defaultPrevented||g(y)}return S.createElement("a",ec({},f,{href:m||w,onClick:_||s?r:v,ref:n,target:l}))}),Et=S.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=t,d=cE(t,Jk),f=Kc(l,{relative:d.relative}),p=Gs(),m=S.useContext(sE),{navigator:_}=S.useContext(nr),w=m!=null&&oP(f)&&u===!0,g=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,v=p.pathname,y=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase());const E=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let I=v===g||!o&&v.startsWith(g)&&v.charAt(E)==="/",R=y!=null&&(y===g||!o&&y.startsWith(g)&&y.charAt(g.length)==="/"),C={isActive:I,isPending:R,isTransitioning:w},T=I?r:void 0,N;typeof s=="function"?N=s(C):N=[s,I?"active":null,R?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let M=typeof a=="function"?a(C):a;return S.createElement(Qc,ec({},d,{"aria-current":T,className:N,ref:n,style:M,to:l,unstable_viewTransition:u}),typeof c=="function"?c(C):c)});var Bf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Bf||(Bf={}));var Vy;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Vy||(Vy={}));function iP(e){let t=S.useContext(qc);return t||_e(!1),t}function sP(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=t===void 0?{}:t,l=za(),u=Gs(),c=Kc(e,{relative:o});return S.useCallback(d=>{if(Yk(d,n)){d.preventDefault();let f=r!==void 0?r:Ju(u)===Ju(c);l(e,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,e,s,o,a])}function oP(e,t){t===void 0&&(t={});let n=S.useContext(Zk);n==null&&_e(!1);let{basename:r}=iP(Bf.useViewTransitionState),i=Kc(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=da(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=da(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Uf(i.pathname,o)!=null||Uf(i.pathname,s)!=null}var Fy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},aP=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},hE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[d],n[f],n[p])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(dE(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):aP(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const d=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new lP;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const m=u<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class lP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uP=function(e){const t=dE(e);return hE.encodeByteArray(t,!0)},tc=function(e){return uP(e).replace(/\./g,"")},fE=function(e){try{return hE.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=()=>cP().__FIREBASE_DEFAULTS__,hP=()=>{if(typeof process>"u"||typeof Fy>"u")return;const e=Fy.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},fP=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&fE(e[1]);return t&&JSON.parse(t)},jg=()=>{try{return dP()||hP()||fP()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},pE=e=>{var t,n;return(n=(t=jg())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},gE=e=>{const t=pE(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},mE=()=>{var e;return(e=jg())===null||e===void 0?void 0:e.config},vE=e=>{var t;return(t=jg())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yE(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[tc(JSON.stringify(n)),tc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function mP(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function vP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yP(){const e=ut();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function _P(){try{return typeof indexedDB=="object"}catch{return!1}}function wP(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EP="FirebaseError";class On extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=EP,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ba.prototype.create)}}class Ba{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?SP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new On(i,a,r)}}function SP(e,t){return e.replace(IP,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const IP=/\{\$([^}]+)}/g;function TP(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function nc(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if($y(s)&&$y(o)){if(!nc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function $y(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Eo(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function So(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function CP(e,t){const n=new RP(e,t);return n.subscribe.bind(n)}class RP{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AP(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=hh),i.error===void 0&&(i.error=hh),i.complete===void 0&&(i.complete=hh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AP(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function hh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e){return e&&e._delegate?e._delegate:e}class zr{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new pP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(xP(t))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=oi){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=oi){return this.instances.has(t)}getOptions(t=oi){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PP(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=oi){return this.component?this.component.multipleInstances?t:oi:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PP(e){return e===oi?void 0:e}function xP(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new kP(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(J||(J={}));const bP={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},OP=J.INFO,DP={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},LP=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=DP[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ug{constructor(t){this.name=t,this._logLevel=OP,this._logHandler=LP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in J))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?bP[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...t),this._logHandler(this,J.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...t),this._logHandler(this,J.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,J.INFO,...t),this._logHandler(this,J.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,J.WARN,...t),this._logHandler(this,J.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...t),this._logHandler(this,J.ERROR,...t)}}const MP=(e,t)=>t.some(n=>e instanceof n);let jy,Uy;function VP(){return jy||(jy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FP(){return Uy||(Uy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _E=new WeakMap,Hf=new WeakMap,wE=new WeakMap,fh=new WeakMap,zg=new WeakMap;function $P(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Mr(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&_E.set(n,e)}).catch(()=>{}),zg.set(t,e),t}function jP(e){if(Hf.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Hf.set(e,t)}let Wf={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Hf.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wE.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function UP(e){Wf=e(Wf)}function zP(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ph(this),t,...n);return wE.set(r,t.sort?t.sort():[t]),Mr(r)}:FP().includes(e)?function(...t){return e.apply(ph(this),t),Mr(_E.get(this))}:function(...t){return Mr(e.apply(ph(this),t))}}function BP(e){return typeof e=="function"?zP(e):(e instanceof IDBTransaction&&jP(e),MP(e,VP())?new Proxy(e,Wf):e)}function Mr(e){if(e instanceof IDBRequest)return $P(e);if(fh.has(e))return fh.get(e);const t=BP(e);return t!==e&&(fh.set(e,t),zg.set(t,e)),t}const ph=e=>zg.get(e);function HP(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=Mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mr(o.result),l.oldVersion,l.newVersion,Mr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const WP=["get","getKey","getAll","getAllKeys","count"],qP=["put","add","delete","clear"],gh=new Map;function zy(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(gh.get(t))return gh.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=qP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return gh.set(t,s),s}UP(e=>({...e,get:(t,n,r)=>zy(t,n)||e.get(t,n,r),has:(t,n)=>!!zy(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KP(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const qf="@firebase/app",By="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ri=new Ug("@firebase/app"),QP="@firebase/app-compat",YP="@firebase/analytics-compat",XP="@firebase/analytics",JP="@firebase/app-check-compat",ZP="@firebase/app-check",ex="@firebase/auth",tx="@firebase/auth-compat",nx="@firebase/database",rx="@firebase/database-compat",ix="@firebase/functions",sx="@firebase/functions-compat",ox="@firebase/installations",ax="@firebase/installations-compat",lx="@firebase/messaging",ux="@firebase/messaging-compat",cx="@firebase/performance",dx="@firebase/performance-compat",hx="@firebase/remote-config",fx="@firebase/remote-config-compat",px="@firebase/storage",gx="@firebase/storage-compat",mx="@firebase/firestore",vx="@firebase/firestore-compat",yx="firebase",_x="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gf="[DEFAULT]",wx={[qf]:"fire-core",[QP]:"fire-core-compat",[XP]:"fire-analytics",[YP]:"fire-analytics-compat",[ZP]:"fire-app-check",[JP]:"fire-app-check-compat",[ex]:"fire-auth",[tx]:"fire-auth-compat",[nx]:"fire-rtdb",[rx]:"fire-rtdb-compat",[ix]:"fire-fn",[sx]:"fire-fn-compat",[ox]:"fire-iid",[ax]:"fire-iid-compat",[lx]:"fire-fcm",[ux]:"fire-fcm-compat",[cx]:"fire-perf",[dx]:"fire-perf-compat",[hx]:"fire-rc",[fx]:"fire-rc-compat",[px]:"fire-gcs",[gx]:"fire-gcs-compat",[mx]:"fire-fst",[vx]:"fire-fst-compat","fire-js":"fire-js",[yx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new Map,Kf=new Map;function Ex(e,t){try{e.container.addComponent(t)}catch(n){Ri.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ai(e){const t=e.name;if(Kf.has(t))return Ri.debug(`There were multiple attempts to register component ${t}.`),!1;Kf.set(t,e);for(const n of rc.values())Ex(n,e);return!0}function Yc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vr=new Ba("app","Firebase",Sx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $i=_x;function EE(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Gf,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Vr.create("bad-app-name",{appName:String(i)});if(n||(n=mE()),!n)throw Vr.create("no-options");const s=rc.get(i);if(s){if(nc(n,s.options)&&nc(r,s.config))return s;throw Vr.create("duplicate-app",{appName:i})}const o=new NP(i);for(const l of Kf.values())o.addComponent(l);const a=new Ix(n,r,o);return rc.set(i,a),a}function Bg(e=Gf){const t=rc.get(e);if(!t&&e===Gf&&mE())return EE();if(!t)throw Vr.create("no-app",{appName:e});return t}function Cn(e,t,n){var r;let i=(r=wx[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${t}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ri.warn(a.join(" "));return}Ai(new zr(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx="firebase-heartbeat-database",Cx=1,fa="firebase-heartbeat-store";let mh=null;function SE(){return mh||(mh=HP(Tx,Cx,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(fa)}}}).catch(e=>{throw Vr.create("idb-open",{originalErrorMessage:e.message})})),mh}async function Rx(e){try{return await(await SE()).transaction(fa).objectStore(fa).get(IE(e))}catch(t){if(t instanceof On)Ri.warn(t.message);else{const n=Vr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ri.warn(n.message)}}}async function Hy(e,t){try{const r=(await SE()).transaction(fa,"readwrite");await r.objectStore(fa).put(t,IE(e)),await r.done}catch(n){if(n instanceof On)Ri.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ri.warn(r.message)}}}function IE(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ax=1024,kx=30*24*60*60*1e3;class Px{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Wy();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wy(),{heartbeatsToSend:r,unsentEntries:i}=xx(this._heartbeatsCache.heartbeats),s=tc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Wy(){return new Date().toISOString().substring(0,10)}function xx(e,t=Ax){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),qy(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qy(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nx{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _P()?wP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Hy(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function qy(e){return tc(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bx(e){Ai(new zr("platform-logger",t=>new GP(t),"PRIVATE")),Ai(new zr("heartbeat",t=>new Px(t),"PRIVATE")),Cn(qf,By,e),Cn(qf,By,"esm2017"),Cn("fire-js","")}bx("");var Ox="firebase",Dx="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cn(Ox,Dx,"app");function Hg(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function TE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lx=TE,CE=new Ba("auth","Firebase",TE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new Ug("@firebase/auth");function Mx(e,...t){ic.logLevel<=J.WARN&&ic.warn(`Auth (${$i}): ${e}`,...t)}function vu(e,...t){ic.logLevel<=J.ERROR&&ic.error(`Auth (${$i}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e,...t){throw Wg(e,...t)}function Rn(e,...t){return Wg(e,...t)}function Vx(e,t,n){const r=Object.assign(Object.assign({},Lx()),{[t]:n});return new Ba("auth","Firebase",r).create(t,{appName:e.name})}function Wg(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return CE.create(e,...t)}function U(e,t,...n){if(!e)throw Wg(t,...n)}function jn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw vu(t),new Error(t)}function Kn(e,t){e||jn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Fx(){return Gy()==="http:"||Gy()==="https:"}function Gy(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $x(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fx()||mP()||"connection"in navigator)?navigator.onLine:!0}function jx(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(t,n){this.shortDelay=t,this.longDelay=n,Kn(n>t,"Short delay should be less than long delay!"),this.isMobile=gP()||vP()}get(){return $x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(e,t){Kn(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RE{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx=new Wa(3e4,6e4);function ir(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Dn(e,t,n,r,i={}){return AE(e,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ha(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),RE.fetch()(kE(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))})}async function AE(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ux),t);try{const i=new Hx(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ol(e,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ol(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ol(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ol(e,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vx(e,c,u);dn(e,c)}}catch(i){if(i instanceof On)throw i;dn(e,"network-request-failed",{message:String(i)})}}async function qa(e,t,n,r,i={}){const s=await Dn(e,t,n,r,i);return"mfaPendingCredential"in s&&dn(e,"multi-factor-auth-required",{_serverResponse:s}),s}function kE(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?qg(e.config,i):`${e.config.apiScheme}://${i}`}function Bx(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hx{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),zx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ol(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(e,t,r);return i.customData._tokenResponse=n,i}function Ky(e){return e!==void 0&&e.enterprise!==void 0}class Wx{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Bx(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function qx(e,t){return Dn(e,"GET","/v2/recaptchaConfig",ir(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(e,t){return Dn(e,"POST","/v1/accounts:delete",t)}async function Kx(e,t){return Dn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Qx(e,t=!1){const n=Oe(e),r=await n.getIdToken(t),i=Gg(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vo(vh(i.auth_time)),issuedAtTime:Vo(vh(i.iat)),expirationTime:Vo(vh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vh(e){return Number(e)*1e3}function Gg(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return vu("JWT malformed, contained fewer than 3 sections"),null;try{const i=fE(n);return i?JSON.parse(i):(vu("Failed to decode base64 JWT payload"),null)}catch(i){return vu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yx(e){const t=Gg(e);return U(t,"internal-error"),U(typeof t.exp<"u","internal-error"),U(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof On&&Xx(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function Xx({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sc(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ns(e,Kx(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?t2(s.providerUserInfo):[],a=e2(e.providerData,o),l=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new PE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(e,d)}async function Zx(e){const t=Oe(e);await sc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function e2(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function t2(e){return e.map(t=>{var{providerId:n}=t,r=Hg(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(e,t){const n=await AE(e,{},async()=>{const r=Ha({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=kE(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",RE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function r2(e,t){return Dn(e,"POST","/v2/accounts:revokeToken",ir(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){U(t.idToken,"internal-error"),U(typeof t.idToken<"u","internal-error"),U(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Yx(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return U(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await n2(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new pa;return r&&(U(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new pa,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(e,t){U(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class vi{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Hg(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new PE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,t));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Qx(this,t)}reload(){return Zx(this)}_assign(t){this!==t&&(U(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new vi(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await sc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ns(this,Gx(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,v=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:I,providerData:R,stsTokenManager:C}=n;U(y&&C,t,"internal-error");const T=pa.fromJSON(this.name,C);U(typeof y=="string",t,"internal-error"),ur(d,t.name),ur(f,t.name),U(typeof E=="boolean",t,"internal-error"),U(typeof I=="boolean",t,"internal-error"),ur(p,t.name),ur(m,t.name),ur(_,t.name),ur(w,t.name),ur(g,t.name),ur(v,t.name);const N=new vi({uid:y,auth:t,email:f,emailVerified:E,displayName:d,isAnonymous:I,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:T,createdAt:g,lastLoginAt:v});return R&&Array.isArray(R)&&(N.providerData=R.map(M=>Object.assign({},M))),w&&(N._redirectEventId=w),N}static async _fromIdTokenResponse(t,n,r=!1){const i=new pa;i.updateFromServerResponse(n);const s=new vi({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await sc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=new Map;function Un(e){Kn(e instanceof Function,"Expected a class definition");let t=Qy.get(e);return t?(Kn(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Qy.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}xE.type="NONE";const Yy=xE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(e,t,n){return`firebase:${e}:${t}:${n}`}class ys{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=yu(this.userKey,i.apiKey,s),this.fullPersistenceKey=yu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?vi._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new ys(Un(Yy),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Un(Yy);const o=yu(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=vi._fromJSON(t,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ys(s,t,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ys(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(OE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(NE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(LE(t))return"Blackberry";if(ME(t))return"Webos";if(Kg(t))return"Safari";if((t.includes("chrome/")||bE(t))&&!t.includes("edge/"))return"Chrome";if(DE(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function NE(e=ut()){return/firefox\//i.test(e)}function Kg(e=ut()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function bE(e=ut()){return/crios\//i.test(e)}function OE(e=ut()){return/iemobile/i.test(e)}function DE(e=ut()){return/android/i.test(e)}function LE(e=ut()){return/blackberry/i.test(e)}function ME(e=ut()){return/webos/i.test(e)}function Xc(e=ut()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function i2(e=ut()){var t;return Xc(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function s2(){return yP()&&document.documentMode===10}function VE(e=ut()){return Xc(e)||DE(e)||ME(e)||LE(e)||/windows phone/i.test(e)||OE(e)}function o2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(e,t=[]){let n;switch(e){case"Browser":n=Xy(ut());break;case"Worker":n=`${Xy(ut())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${$i}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((o,a)=>{try{const l=t(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l2(e,t={}){return Dn(e,"GET","/v2/passwordPolicy",ir(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u2=6;class c2{constructor(t){var n,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:u2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,l),this.validatePasswordCharacterOptions(t,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),i&&(n.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jy(this),this.idTokenSubscription=new Jy(this),this.beforeStateQueue=new a2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ys.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(t);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await sc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=jx()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?Oe(t):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&U(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await l2(this),n=new c2(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Ba("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await r2(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Un(t)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=t.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=t.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=FE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Mx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zr(e){return Oe(e)}class Jy{constructor(t){this.auth=t,this.observer=null,this.addObserver=CP(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function $E(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",h2().appendChild(r)})}function f2(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const p2="https://www.google.com/recaptcha/enterprise.js?render=",g2="recaptcha-enterprise",m2="NO_RECAPTCHA";class v2{constructor(t){this.type=g2,this.auth=Zr(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{qx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Wx(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ky(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:t}).then(u=>{o(u)}).catch(()=>{o(m2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ky(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}$E(p2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Zy(e,t,n,r=!1){const i=new v2(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},t);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function oc(e,t,n,r){var i;if(!((i=e._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Zy(e,t,n,n==="getOobCode");return r(e,s)}else return r(e,t).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Zy(e,t,n,n==="getOobCode");return r(e,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y2(e,t){const n=Yc(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(nc(s,t??{}))return i;dn(i,"already-initialized")}return n.initialize({options:t})}function _2(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function w2(e,t,n){const r=Zr(e);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=jE(t),{host:o,port:a}=E2(t),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||S2()}function jE(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function E2(e){const t=jE(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:e_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:e_(o)}}}function e_(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function S2(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(t){return jn("not implemented")}_linkToIdToken(t,n){return jn("not implemented")}_getReauthenticationResolver(t){return jn("not implemented")}}async function I2(e,t){return Dn(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T2(e,t){return qa(e,"POST","/v1/accounts:signInWithPassword",ir(e,t))}async function C2(e,t){return Dn(e,"POST","/v1/accounts:sendOobCode",ir(e,t))}async function R2(e,t){return C2(e,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function A2(e,t){return qa(e,"POST","/v1/accounts:signInWithEmailLink",ir(e,t))}async function k2(e,t){return qa(e,"POST","/v1/accounts:signInWithEmailLink",ir(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga extends Qg{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ga(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ga(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oc(t,n,"signInWithPassword",T2);case"emailLink":return A2(t,{email:this._email,oobCode:this._password});default:dn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oc(t,r,"signUpPassword",I2);case"emailLink":return k2(t,{idToken:n,email:this._email,oobCode:this._password});default:dn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(e,t){return qa(e,"POST","/v1/accounts:signInWithIdp",ir(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P2="http://localhost";class ki extends Qg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new ki(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Hg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ki(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return _s(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,_s(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,_s(t,n)}buildRequest(){const t={requestUri:P2,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ha(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x2(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function N2(e){const t=Eo(So(e)).link,n=t?Eo(So(t)).deep_link_id:null,r=Eo(So(e)).deep_link_id;return(r?Eo(So(r)).link:null)||r||n||t||e}class Yg{constructor(t){var n,r,i,s,o,a;const l=Eo(So(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=x2((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=N2(t);try{return new Yg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(){this.providerId=Ks.PROVIDER_ID}static credential(t,n){return ga._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Yg.parseLink(n);return U(r,"argument-error"),ga._fromEmailAndCode(t,r.code,r.tenantId)}}Ks.PROVIDER_ID="password";Ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends UE{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends Ga{constructor(){super("facebook.com")}static credential(t){return ki._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return gr.credentialFromTaggedObject(t)}static credentialFromError(t){return gr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return gr.credential(t.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends Ga{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return ki._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return mr.credentialFromTaggedObject(t)}static credentialFromError(t){return mr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Ga{constructor(){super("github.com")}static credential(t){return ki._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return vr.credentialFromTaggedObject(t)}static credentialFromError(t){return vr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return vr.credential(t.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends Ga{constructor(){super("twitter.com")}static credential(t,n){return ki._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return yr.credentialFromTaggedObject(t)}static credentialFromError(t){return yr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b2(e,t){return qa(e,"POST","/v1/accounts:signUp",ir(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await vi._fromIdTokenResponse(t,r,i),o=t_(r);return new Pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=t_(r);return new Pi({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function t_(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends On{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ac.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new ac(t,n,r,i)}}function zE(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ac._fromErrorAndOperation(e,s,t,r):s})}async function O2(e,t,n=!1){const r=await Ns(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Pi._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D2(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ns(e,zE(r,i,t,e),n);U(s.idToken,r,"internal-error");const o=Gg(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(e.uid===a,r,"user-mismatch"),Pi._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(e,t,n=!1){const r="signIn",i=await zE(e,r,t),s=await Pi._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function L2(e,t){return BE(Zr(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M2(e,t,n){var r;U(((r=n.url)===null||r===void 0?void 0:r.length)>0,e,"invalid-continue-uri"),U(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(U(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(U(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(e){const t=Zr(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function V2(e,t,n){const r=Zr(e),i={requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"};n&&M2(r,i,n),await oc(r,i,"getOobCode",R2)}async function F2(e,t,n){const r=Zr(e),o=await oc(r,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",b2).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&HE(e),l}),a=await Pi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function $2(e,t,n){return L2(Oe(e),Ks.credential(t,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&HE(e),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(e,t){return Dn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(e,{displayName:t,photoURL:n}){if(t===void 0&&n===void 0)return;const r=Oe(e),s={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},o=await Ns(r,j2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function z2(e,t,n,r){return Oe(e).onIdTokenChanged(t,n,r)}function B2(e,t,n){return Oe(e).beforeAuthStateChanged(t,n)}const lc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(lc,"1"),this.storage.removeItem(lc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(){const e=ut();return Kg(e)||Xc(e)}const W2=1e3,q2=10;class qE extends WE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H2()&&o2(),this.fallbackToPolling=VE(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);s2()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,q2):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},W2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}qE.type="LOCAL";const G2=qE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE extends WE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}GE.type="SESSION";const KE=GE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Jc(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await K2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Xg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(){return window}function Y2(e){An().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function X2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J2(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function Z2(){return QE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE="firebaseLocalStorageDb",eN=1,uc="firebaseLocalStorage",XE="fbase_key";class Ka{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zc(e,t){return e.transaction([uc],t?"readwrite":"readonly").objectStore(uc)}function tN(){const e=indexedDB.deleteDatabase(YE);return new Ka(e).toPromise()}function Yf(){const e=indexedDB.open(YE,eN);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(uc,{keyPath:XE})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(uc)?t(r):(r.close(),await tN(),t(await Yf()))})})}async function n_(e,t,n){const r=Zc(e,!0).put({[XE]:t,value:n});return new Ka(r).toPromise()}async function nN(e,t){const n=Zc(e,!1).get(t),r=await new Ka(n).toPromise();return r===void 0?null:r.value}function r_(e,t){const n=Zc(e,!0).delete(t);return new Ka(n).toPromise()}const rN=800,iN=3;class JE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yf(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>iN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jc._getInstance(Z2()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await X2(),!this.activeServiceWorker)return;this.sender=new Q2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||J2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Yf();return await n_(t,lc,"1"),await r_(t,lc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>n_(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>nN(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>r_(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Zc(i,!1).getAll();return new Ka(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JE.type="LOCAL";const sN=JE;new Wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oN(e,t){return t?Un(t):(U(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg extends Qg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return _s(t,this._buildIdpRequest())}_linkToIdToken(t,n){return _s(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return _s(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function aN(e){return BE(e.auth,new Jg(e),e.bypassAuthState)}function lN(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),D2(n,new Jg(e),e.bypassAuthState)}async function uN(e){const{auth:t,user:n}=e;return U(n,t,"internal-error"),O2(n,new Jg(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return aN;case"linkViaPopup":case"linkViaRedirect":return uN;case"reauthViaPopup":case"reauthViaRedirect":return lN;default:dn(this.auth,"internal-error")}}resolve(t){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cN=new Wa(2e3,1e4);class as extends ZE{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return U(t,this.auth,"internal-error"),t}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const t=Xg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cN.get())};t()}}as.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dN="pendingRedirect",_u=new Map;class hN extends ZE{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=_u.get(this.auth._key());if(!t){try{const r=await fN(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}_u.set(this.auth._key(),t)}return this.bypassAuthState||_u.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fN(e,t){const n=mN(t),r=gN(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pN(e,t){_u.set(e._key(),t)}function gN(e){return Un(e._redirectPersistence)}function mN(e){return yu(dN,e.config.apiKey,e.name)}async function vN(e,t,n=!1){const r=Zr(e),i=oN(r,t),o=await new hN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=10*60*1e3;class _N{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!wN(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!eS(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=yN&&this.cachedEventUids.clear(),this.cachedEventUids.has(i_(t))}saveEventToCache(t){this.cachedEventUids.add(i_(t)),this.lastProcessedEventTime=Date.now()}}function i_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function eS({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function wN(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eS(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EN(e,t={}){return Dn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IN=/^https?/;async function TN(e){if(e.config.emulator)return;const{authorizedDomains:t}=await EN(e);for(const n of t)try{if(CN(n))return}catch{}dn(e,"unauthorized-domain")}function CN(e){const t=Qf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IN.test(n))return!1;if(SN.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=new Wa(3e4,6e4);function s_(){const e=An().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function AN(e){return new Promise((t,n)=>{var r,i,s;function o(){s_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{s_(),n(Rn(e,"network-request-failed"))},timeout:RN.get()})}if(!((i=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=An().gapi)===null||s===void 0)&&s.load)o();else{const a=f2("iframefcb");return An()[a]=()=>{gapi.load?o():n(Rn(e,"network-request-failed"))},$E(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw wu=null,t})}let wu=null;function kN(e){return wu=wu||AN(e),wu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=new Wa(5e3,15e3),xN="__/auth/iframe",NN="emulator/auth/iframe",bN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ON=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DN(e){const t=e.config;U(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?qg(t,NN):`https://${e.config.authDomain}/${xN}`,r={apiKey:t.apiKey,appName:e.name,v:$i},i=ON.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ha(r).slice(1)}`}async function LN(e){const t=await kN(e),n=An().gapi;return U(n,e,"internal-error"),t.open({where:document.body,url:DN(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(e,"network-request-failed"),a=An().setTimeout(()=>{s(o)},PN.get());function l(){An().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VN=500,FN=600,$N="_blank",jN="http://localhost";class o_{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UN(e,t,n,r=VN,i=FN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();n&&(a=bE(u)?$N:n),NE(u)&&(t=t||jN,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(i2(u)&&a!=="_self")return zN(t||"",a),new o_(null);const d=window.open(t||"",a,c);U(d,e,"popup-blocked");try{d.focus()}catch{}return new o_(d)}function zN(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="__/auth/handler",HN="emulator/auth/handler",WN=encodeURIComponent("fac");async function a_(e,t,n,r,i,s){U(e.config.authDomain,e,"auth-domain-config-required"),U(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:$i,eventId:i};if(t instanceof UE){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",TP(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(t instanceof Ga){const c=t.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await e._getAppCheckToken(),u=l?`#${WN}=${encodeURIComponent(l)}`:"";return`${qN(e)}?${Ha(a).slice(1)}${u}`}function qN({config:e}){return e.emulator?qg(e,HN):`https://${e.authDomain}/${BN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh="webStorageSupport";class GN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=KE,this._completeRedirectFn=vN,this._overrideRedirectResult=pN}async _openPopup(t,n,r,i){var s;Kn((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await a_(t,n,r,Qf(),i);return UN(t,o,Xg())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await a_(t,n,r,Qf(),i);return Y2(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await LN(t),r=new _N(t);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(yh,{type:yh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yh];o!==void 0&&n(!!o),dn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TN(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return VE()||Kg()||Xc()}}const KN=GN;var l_="@firebase/auth",u_="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XN(e){Ai(new zr("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:FE(e)},u=new d2(r,i,s,l);return _2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ai(new zr("auth-internal",t=>{const n=Zr(t.getProvider("auth").getImmediate());return(r=>new QN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(l_,u_,YN(e)),Cn(l_,u_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JN=5*60,ZN=vE("authIdTokenMaxAge")||JN;let c_=null;const eb=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZN)return;const i=n==null?void 0:n.token;c_!==i&&(c_=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Zg(e=Bg()){const t=Yc(e,"auth");if(t.isInitialized())return t.getImmediate();const n=y2(e,{popupRedirectResolver:KN,persistence:[sN,G2,KE]}),r=vE("authTokenSyncURL");if(r){const s=eb(r);B2(n,s,()=>s(n.currentUser)),z2(n,o=>s(o))}const i=pE("auth");return i&&w2(n,`http://${i}`),n}XN("Browser");var tb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,em=em||{},q=tb||self;function ed(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Qa(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function nb(e){return Object.prototype.hasOwnProperty.call(e,_h)&&e[_h]||(e[_h]=++rb)}var _h="closure_uid_"+(1e9*Math.random()>>>0),rb=0;function ib(e,t,n){return e.call.apply(e.bind,arguments)}function sb(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function ot(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=ib:ot=sb,ot.apply(null,arguments)}function Dl(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function He(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function ei(){this.s=this.s,this.o=this.o}var ob=0;ei.prototype.s=!1;ei.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ob!=0)&&nb(this)};ei.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const tS=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function tm(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function d_(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ed(r)){const i=e.length||0,s=r.length||0;e.length=i+s;for(let o=0;o<s;o++)e[i+o]=r[o]}else e.push(r)}}function at(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var ab=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};q.addEventListener("test",n,t),q.removeEventListener("test",n,t)}catch{}return e}();function ma(e){return/^[\s\xa0]*$/.test(e)}function td(){var e=q.navigator;return e&&(e=e.userAgent)?e:""}function yn(e){return td().indexOf(e)!=-1}function nm(e){return nm[" "](e),e}nm[" "]=function(){};function lb(e,t){var n=e4;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var ub=yn("Opera"),bs=yn("Trident")||yn("MSIE"),nS=yn("Edge"),Xf=nS||bs,rS=yn("Gecko")&&!(td().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge"))&&!(yn("Trident")||yn("MSIE"))&&!yn("Edge"),cb=td().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge");function iS(){var e=q.document;return e?e.documentMode:void 0}var Jf;e:{var wh="",Eh=function(){var e=td();if(rS)return/rv:([^\);]+)(\)|;)/.exec(e);if(nS)return/Edge\/([\d\.]+)/.exec(e);if(bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(cb)return/WebKit\/(\S+)/.exec(e);if(ub)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Eh&&(wh=Eh?Eh[1]:""),bs){var Sh=iS();if(Sh!=null&&Sh>parseFloat(wh)){Jf=String(Sh);break e}}Jf=wh}var Zf;if(q.document&&bs){var h_=iS();Zf=h_||parseInt(Jf,10)||void 0}else Zf=void 0;var db=Zf;function va(e,t){if(at.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(rS){e:{try{nm(t.nodeName);var i=!0;break e}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:hb[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&va.$.h.call(this)}}He(va,at);var hb={2:"touch",3:"pen",4:"mouse"};va.prototype.h=function(){va.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ya="closure_listenable_"+(1e6*Math.random()|0),fb=0;function pb(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=i,this.key=++fb,this.fa=this.ia=!1}function nd(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function rm(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function gb(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function sS(e){const t={};for(const n in e)t[n]=e[n];return t}const f_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oS(e,t){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)e[n]=r[n];for(let s=0;s<f_.length;s++)n=f_[s],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function rd(e){this.src=e,this.g={},this.h=0}rd.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=tp(e,t,r,i);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new pb(t,this.src,s,!!r,i),t.ia=n,e.push(t)),t};function ep(e,t){var n=t.type;if(n in e.g){var r=e.g[n],i=tS(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(nd(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function tp(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.fa&&s.listener==t&&s.capture==!!n&&s.la==r)return i}return-1}var im="closure_lm_"+(1e6*Math.random()|0),Ih={};function aS(e,t,n,r,i){if(r&&r.once)return uS(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)aS(e,t[s],n,r,i);return null}return n=am(n),e&&e[Ya]?e.O(t,n,Qa(r)?!!r.capture:!!r,i):lS(e,t,n,!1,r,i)}function lS(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=Qa(i)?!!i.capture:!!i,a=om(e);if(a||(e[im]=a=new rd(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=mb(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)ab||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(dS(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mb(){function e(n){return t.call(e.src,e.listener,n)}const t=vb;return e}function uS(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)uS(e,t[s],n,r,i);return null}return n=am(n),e&&e[Ya]?e.P(t,n,Qa(r)?!!r.capture:!!r,i):lS(e,t,n,!0,r,i)}function cS(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)cS(e,t[s],n,r,i);else r=Qa(r)?!!r.capture:!!r,n=am(n),e&&e[Ya]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=tp(s,n,r,i),-1<n&&(nd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete e.g[t],e.h--)))):e&&(e=om(e))&&(t=e.g[t.toString()],e=-1,t&&(e=tp(t,n,r,i)),(n=-1<e?t[e]:null)&&sm(n))}function sm(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[Ya])ep(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(dS(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=om(t))?(ep(n,e),n.h==0&&(n.src=null,t[im]=null)):nd(e)}}}function dS(e){return e in Ih?Ih[e]:Ih[e]="on"+e}function vb(e,t){if(e.fa)e=!0;else{t=new va(t,this);var n=e.listener,r=e.la||e.src;e.ia&&sm(e),e=n.call(r,t)}return e}function om(e){return e=e[im],e instanceof rd?e:null}var Th="__closure_events_fn_"+(1e9*Math.random()>>>0);function am(e){return typeof e=="function"?e:(e[Th]||(e[Th]=function(t){return e.handleEvent(t)}),e[Th])}function Be(){ei.call(this),this.i=new rd(this),this.S=this,this.J=null}He(Be,ei);Be.prototype[Ya]=!0;Be.prototype.removeEventListener=function(e,t,n,r){cS(this,e,t,n,r)};function Xe(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new at(t,e);else if(t instanceof at)t.target=t.target||e;else{var i=t;t=new at(r,e),oS(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ll(o,r,!0,t)&&i}if(o=t.g=e,i=Ll(o,r,!0,t)&&i,i=Ll(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ll(o,r,!1,t)&&i}Be.prototype.N=function(){if(Be.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)nd(n[r]);delete e.g[t],e.h--}}this.J=null};Be.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Be.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function Ll(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&ep(e.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var lm=q.JSON.stringify;class yb{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function _b(){var e=um;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class wb{constructor(){this.h=this.g=null}add(t,n){const r=hS.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var hS=new yb(()=>new Eb,e=>e.reset());class Eb{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Sb(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ib(e){q.setTimeout(()=>{throw e},0)}let ya,_a=!1,um=new wb,fS=()=>{const e=q.Promise.resolve(void 0);ya=()=>{e.then(Tb)}};var Tb=()=>{for(var e;e=_b();){try{e.h.call(e.g)}catch(n){Ib(n)}var t=hS;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}_a=!1};function id(e,t){Be.call(this),this.h=e||1,this.g=t||q,this.j=ot(this.qb,this),this.l=Date.now()}He(id,Be);x=id.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Xe(this,"tick"),this.ga&&(cm(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function cm(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}x.N=function(){id.$.N.call(this),cm(this),delete this.g};function dm(e,t,n){if(typeof e=="function")n&&(e=ot(e,n));else if(e&&typeof e.handleEvent=="function")e=ot(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:q.setTimeout(e,t||0)}function pS(e){e.g=dm(()=>{e.g=null,e.i&&(e.i=!1,pS(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Cb extends ei{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:pS(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wa(e){ei.call(this),this.h=e,this.g={}}He(wa,ei);var p_=[];function gS(e,t,n,r){Array.isArray(n)||(n&&(p_[0]=n.toString()),n=p_);for(var i=0;i<n.length;i++){var s=aS(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function mS(e){rm(e.g,function(t,n){this.g.hasOwnProperty(n)&&sm(t)},e),e.g={}}wa.prototype.N=function(){wa.$.N.call(this),mS(this)};wa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sd(){this.g=!0}sd.prototype.Ea=function(){this.g=!1};function Rb(e,t,n,r,i,s){e.info(function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Ab(e,t,n,r,i,s,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+n+`
`+s+" "+o})}function ls(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Pb(e,n)+(r?" "+r:"")})}function kb(e,t){e.info(function(){return"TIMEOUT: "+t})}sd.prototype.info=function(){};function Pb(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return lm(n)}catch{return t}}var ji={},g_=null;function od(){return g_=g_||new Be}ji.Ta="serverreachability";function vS(e){at.call(this,ji.Ta,e)}He(vS,at);function Ea(e){const t=od();Xe(t,new vS(t))}ji.STAT_EVENT="statevent";function yS(e,t){at.call(this,ji.STAT_EVENT,e),this.stat=t}He(yS,at);function gt(e){const t=od();Xe(t,new yS(t,e))}ji.Ua="timingevent";function _S(e,t){at.call(this,ji.Ua,e),this.size=t}He(_S,at);function Xa(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){e()},t)}var ad={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},wS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function hm(){}hm.prototype.h=null;function m_(e){return e.h||(e.h=e.i())}function ES(){}var Ja={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function fm(){at.call(this,"d")}He(fm,at);function pm(){at.call(this,"c")}He(pm,at);var np;function ld(){}He(ld,hm);ld.prototype.g=function(){return new XMLHttpRequest};ld.prototype.i=function(){return{}};np=new ld;function Za(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new wa(this),this.P=xb,e=Xf?125:void 0,this.V=new id(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new SS}function SS(){this.i=null,this.g="",this.h=!1}var xb=45e3,IS={},rp={};x=Za.prototype;x.setTimeout=function(e){this.P=e};function ip(e,t,n){e.L=1,e.A=cd(Qn(t)),e.u=n,e.S=!0,TS(e,null)}function TS(e,t){e.G=Date.now(),el(e),e.B=Qn(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),bS(n.i,"t",r),e.o=0,n=e.l.J,e.h=new SS,e.g=ZS(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Cb(ot(e.Pa,e,e.g),e.O)),gS(e.U,e.g,"readystatechange",e.nb),t=e.I?sS(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),Ea(),Rb(e.j,e.v,e.B,e.m,e.W,e.u)}x.nb=function(e){e=e.target;const t=this.M;t&&_n(e)==3?t.l():this.Pa(e)};x.Pa=function(e){try{if(e==this.g)e:{const c=_n(this.g);var t=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Xf||this.g&&(this.h.h||this.g.ja()||w_(this.g)))){this.J||c!=4||t==7||(t==8||0>=d?Ea(3):Ea(2)),ud(this);var n=this.g.da();this.ca=n;t:if(CS(this)){var r=w_(this.g);e="";var i=r.length,s=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ci(this),Fo(this);var o="";break t}this.h.i=new q.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ab(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ma(a)){var u=a;break t}}u=null}if(n=u)ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sp(this,n);else{this.i=!1,this.s=3,gt(12),ci(this),Fo(this);break e}}this.S?(RS(this,c,o),Xf&&this.i&&c==3&&(gS(this.U,this.V,"tick",this.mb),this.V.start())):(ls(this.j,this.m,o,null),sp(this,o)),c==4&&ci(this),this.i&&!this.J&&(c==4?QS(this.l,this):(this.i=!1,el(this)))}else Xb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),ci(this),Fo(this)}}}catch{}finally{}};function CS(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function RS(e,t,n){let r=!0,i;for(;!e.J&&e.o<n.length;)if(i=Nb(e,n),i==rp){t==4&&(e.s=4,gt(14),r=!1),ls(e.j,e.m,null,"[Incomplete Response]");break}else if(i==IS){e.s=4,gt(15),ls(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else ls(e.j,e.m,i,null),sp(e,i);CS(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,gt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),wm(t),t.M=!0,gt(11))):(ls(e.j,e.m,n,"[Invalid Chunked Response]"),ci(e),Fo(e))}x.mb=function(){if(this.g){var e=_n(this.g),t=this.g.ja();this.o<t.length&&(ud(this),RS(this,e,t),this.i&&e!=4&&el(this))}};function Nb(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?rp:(n=Number(t.substring(n,r)),isNaN(n)?IS:(r+=1,r+n>t.length?rp:(t=t.slice(r,r+n),e.o=r+n,t)))}x.cancel=function(){this.J=!0,ci(this)};function el(e){e.Y=Date.now()+e.P,AS(e,e.P)}function AS(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Xa(ot(e.lb,e),t)}function ud(e){e.C&&(q.clearTimeout(e.C),e.C=null)}x.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(kb(this.j,this.B),this.L!=2&&(Ea(),gt(17)),ci(this),this.s=2,Fo(this)):AS(this,this.Y-e)};function Fo(e){e.l.H==0||e.J||QS(e.l,e)}function ci(e){ud(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,cm(e.V),mS(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function sp(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||op(n.i,e))){if(!e.K&&op(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)hc(n),pd(n);else break e;_m(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xa(ot(n.ib,n),6e3));if(1>=LS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else di(n,11)}else if((e.K||n.g==e)&&hc(n),!ma(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=e.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(gm(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,de(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=JS(r,r.J?r.pa:null,r.Y),o.K){MS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(ud(a),el(a)),r.g=o}else GS(r);0<n.j.length&&gd(n)}else u[0]!="stop"&&u[0]!="close"||di(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?di(n,7):ym(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ea(4)}catch{}}function bb(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(ed(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function Ob(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(ed(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function kS(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(ed(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Ob(e),r=bb(e),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}var PS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Db(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function yi(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof yi){this.h=e.h,cc(this,e.j),this.s=e.s,this.g=e.g,dc(this,e.m),this.l=e.l;var t=e.i,n=new Sa;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),v_(this,n),this.o=e.o}else e&&(t=String(e).match(PS))?(this.h=!1,cc(this,t[1]||"",!0),this.s=Io(t[2]||""),this.g=Io(t[3]||"",!0),dc(this,t[4]),this.l=Io(t[5]||"",!0),v_(this,t[6]||"",!0),this.o=Io(t[7]||"")):(this.h=!1,this.i=new Sa(null,this.h))}yi.prototype.toString=function(){var e=[],t=this.j;t&&e.push(To(t,y_,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(To(t,y_,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(To(n,n.charAt(0)=="/"?Vb:Mb,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",To(n,$b)),e.join("")};function Qn(e){return new yi(e)}function cc(e,t,n){e.j=n?Io(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function dc(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function v_(e,t,n){t instanceof Sa?(e.i=t,jb(e.i,e.h)):(n||(t=To(t,Fb)),e.i=new Sa(t,e.h))}function de(e,t,n){e.i.set(t,n)}function cd(e){return de(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Io(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function To(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Lb),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Lb(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var y_=/[#\/\?@]/g,Mb=/[#\?:]/g,Vb=/[#\?]/g,Fb=/[#\?@]/g,$b=/#/g;function Sa(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ti(e){e.g||(e.g=new Map,e.h=0,e.i&&Db(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}x=Sa.prototype;x.add=function(e,t){ti(this),this.i=null,e=Qs(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function xS(e,t){ti(e),t=Qs(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function NS(e,t){return ti(e),t=Qs(e,t),e.g.has(t)}x.forEach=function(e,t){ti(this),this.g.forEach(function(n,r){n.forEach(function(i){e.call(t,i,r,this)},this)},this)};x.ta=function(){ti(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let s=0;s<i.length;s++)n.push(t[r])}return n};x.Z=function(e){ti(this);let t=[];if(typeof e=="string")NS(this,e)&&(t=t.concat(this.g.get(Qs(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};x.set=function(e,t){return ti(this),this.i=null,e=Qs(this,e),NS(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};x.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function bS(e,t,n){xS(e,t),0<n.length&&(e.i=null,e.g.set(Qs(e,t),tm(n)),e.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),e.push(i)}}return this.i=e.join("&")};function Qs(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function jb(e,t){t&&!e.j&&(ti(e),e.i=null,e.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(xS(this,r),bS(this,i,n))},e)),e.j=t}var Ub=class{constructor(e,t){this.g=e,this.map=t}};function OS(e){this.l=e||zb,q.PerformanceNavigationTiming?(e=q.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zb=10;function DS(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function LS(e){return e.h?1:e.g?e.g.size:0}function op(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function gm(e,t){e.g?e.g.add(t):e.h=t}function MS(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}OS.prototype.cancel=function(){if(this.i=VS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function VS(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return tm(e.i)}var Bb=class{stringify(e){return q.JSON.stringify(e,void 0)}parse(e){return q.JSON.parse(e,void 0)}};function Hb(){this.g=new Bb}function Wb(e,t,n){const r=n||"";try{kS(e,function(i,s){let o=i;Qa(i)&&(o=lm(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function qb(e,t){const n=new sd;if(q.Image){const r=new Image;r.onload=Dl(Ml,n,r,"TestLoadImage: loaded",!0,t),r.onerror=Dl(Ml,n,r,"TestLoadImage: error",!1,t),r.onabort=Dl(Ml,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=Dl(Ml,n,r,"TestLoadImage: timeout",!1,t),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function Ml(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function dd(e){this.l=e.ec||null,this.j=e.ob||!1}He(dd,hm);dd.prototype.g=function(){return new hd(this.l,this.j)};dd.prototype.i=function(e){return function(){return e}}({});function hd(e,t){Be.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=mm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(hd,Be);var mm=0;x=hd.prototype;x.open=function(e,t){if(this.readyState!=mm)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ia(this)};x.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||q).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tl(this)),this.readyState=mm};x.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ia(this)),this.g&&(this.readyState=3,Ia(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;FS(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function FS(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}x.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?tl(this):Ia(this),this.readyState==3&&FS(this)}};x.Za=function(e){this.g&&(this.response=this.responseText=e,tl(this))};x.Ya=function(e){this.g&&(this.response=e,tl(this))};x.ka=function(){this.g&&tl(this)};function tl(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ia(e)}x.setRequestHeader=function(e,t){this.v.append(e,t)};x.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function Ia(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(hd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Gb=q.JSON.parse;function Te(e){Be.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=$S,this.L=this.M=!1}He(Te,Be);var $S="",Kb=/^https?$/i,Qb=["POST","PUT"];x=Te.prototype;x.Oa=function(e){this.M=e};x.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():np.g(),this.C=this.u?m_(this.u):m_(np),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(s){__(this,s);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=q.FormData&&e instanceof q.FormData,!(0<=tS(Qb,t))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{zS(this),0<this.B&&((this.L=Yb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=dm(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){__(this,s)}};function Yb(e){return bs&&typeof e.timeout=="number"&&e.ontimeout!==void 0}x.ua=function(){typeof em<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function __(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,jS(e),fd(e)}function jS(e){e.F||(e.F=!0,Xe(e,"complete"),Xe(e,"error"))}x.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Xe(this,"complete"),Xe(this,"abort"),fd(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fd(this,!0)),Te.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?US(this):this.kb())};x.kb=function(){US(this)};function US(e){if(e.h&&typeof em<"u"&&(!e.C[1]||_n(e)!=4||e.da()!=2)){if(e.v&&_n(e)==4)dm(e.La,0,e);else if(Xe(e,"readystatechange"),_n(e)==4){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var i=String(e.I).match(PS)[1]||null;!i&&q.self&&q.self.location&&(i=q.self.location.protocol.slice(0,-1)),r=!Kb.test(i?i.toLowerCase():"")}n=r}if(n)Xe(e,"complete"),Xe(e,"success");else{e.m=6;try{var s=2<_n(e)?e.g.statusText:""}catch{s=""}e.j=s+" ["+e.da()+"]",jS(e)}}finally{fd(e)}}}}function fd(e,t){if(e.g){zS(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Xe(e,"ready");try{n.onreadystatechange=r}catch{}}}function zS(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(q.clearTimeout(e.A),e.A=null)}x.isActive=function(){return!!this.g};function _n(e){return e.g?e.g.readyState:0}x.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Gb(t)}};function w_(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case $S:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Xb(e){const t={};e=(e.g&&2<=_n(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(ma(e[r]))continue;var n=Sb(e[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}gb(t,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function BS(e){let t="";return rm(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function vm(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=BS(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):de(e,t,n))}function ho(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function HS(e){this.Ga=0,this.j=[],this.l=new sd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ho("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ho("baseRetryDelayMs",5e3,e),this.hb=ho("retryDelaySeedMs",1e4,e),this.eb=ho("forwardChannelMaxRetries",2,e),this.xa=ho("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new OS(e&&e.concurrentRequestLimit),this.Ja=new Hb,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=HS.prototype;x.ra=8;x.H=1;function ym(e){if(WS(e),e.H==3){var t=e.W++,n=Qn(e.I);if(de(n,"SID",e.K),de(n,"RID",t),de(n,"TYPE","terminate"),nl(e,n),t=new Za(e,e.l,t),t.L=2,t.A=cd(Qn(n)),n=!1,q.navigator&&q.navigator.sendBeacon)try{n=q.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&q.Image&&(new Image().src=t.A,n=!0),n||(t.g=ZS(t.l,null),t.g.ha(t.A)),t.G=Date.now(),el(t)}XS(e)}function pd(e){e.g&&(wm(e),e.g.cancel(),e.g=null)}function WS(e){pd(e),e.u&&(q.clearTimeout(e.u),e.u=null),hc(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&q.clearTimeout(e.m),e.m=null)}function gd(e){if(!DS(e.i)&&!e.m){e.m=!0;var t=e.Na;ya||fS(),_a||(ya(),_a=!0),um.add(t,e),e.C=0}}function Jb(e,t){return LS(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Xa(ot(e.Na,e,t),YS(e,e.C)),e.C++,!0)}x.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Za(this,this.l,e);let s=this.s;if(this.U&&(s?(s=sS(s),oS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break e}if(t===4096||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=qS(this,i,t),n=Qn(this.I),de(n,"RID",e),de(n,"CVER",22),this.F&&de(n,"X-HTTP-Session-Id",this.F),nl(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(BS(s)))+"&"+t:this.o&&vm(n,this.o,s)),gm(this.i,i),this.bb&&de(n,"TYPE","init"),this.P?(de(n,"$req",t),de(n,"SID","null"),i.aa=!0,ip(i,n,null)):ip(i,n,t),this.H=2}}else this.H==3&&(e?E_(this,e):this.j.length==0||DS(this.i)||E_(this))};function E_(e,t){var n;t?n=t.m:n=e.W++;const r=Qn(e.I);de(r,"SID",e.K),de(r,"RID",n),de(r,"AID",e.V),nl(e,r),e.o&&e.s&&vm(r,e.o,e.s),n=new Za(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=qS(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),gm(e.i,n),ip(n,r,t)}function nl(e,t){e.na&&rm(e.na,function(n,r){de(t,r,n)}),e.h&&kS({},function(n,r){de(t,r,n)})}function qS(e,t,n){n=Math.min(e.j.length,n);var r=e.h?ot(e.h.Va,e.h,e):null;e:{var i=e.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{Wb(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,r}function GS(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;ya||fS(),_a||(ya(),_a=!0),um.add(t,e),e.A=0}}function _m(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Xa(ot(e.Ma,e),YS(e,e.A)),e.A++,!0)}x.Ma=function(){if(this.u=null,KS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Xa(ot(this.jb,this),e)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),pd(this),KS(this))};function wm(e){e.B!=null&&(q.clearTimeout(e.B),e.B=null)}function KS(e){e.g=new Za(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Qn(e.wa);de(t,"RID","rpc"),de(t,"SID",e.K),de(t,"AID",e.V),de(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&de(t,"TO",e.qa),de(t,"TYPE","xmlhttp"),nl(e,t),e.o&&e.s&&vm(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=cd(Qn(t)),n.u=null,n.S=!0,TS(n,e)}x.ib=function(){this.v!=null&&(this.v=null,pd(this),_m(this),gt(19))};function hc(e){e.v!=null&&(q.clearTimeout(e.v),e.v=null)}function QS(e,t){var n=null;if(e.g==t){hc(e),wm(e),e.g=null;var r=2}else if(op(e.i,t))n=t.F,MS(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var i=e.C;r=od(),Xe(r,new _S(r,n)),gd(e)}else GS(e);else if(i=t.s,i==3||i==0&&0<t.ca||!(r==1&&Jb(e,t)||r==2&&_m(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:di(e,5);break;case 4:di(e,10);break;case 3:di(e,6);break;default:di(e,2)}}}function YS(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function di(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=ot(e.pb,e);n||(n=new yi("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||cc(n,"https"),cd(n)),qb(n.toString(),r)}else gt(2);e.H=0,e.h&&e.h.za(t),XS(e),WS(e)}x.pb=function(e){e?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function XS(e){if(e.H=0,e.ma=[],e.h){const t=VS(e.i);(t.length!=0||e.j.length!=0)&&(d_(e.ma,t),d_(e.ma,e.j),e.i.i.length=0,tm(e.j),e.j.length=0),e.h.ya()}}function JS(e,t,n){var r=n instanceof yi?Qn(n):new yi(n);if(r.g!="")t&&(r.g=t+"."+r.g),dc(r,r.m);else{var i=q.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new yi(null);r&&cc(s,r),t&&(s.g=t),i&&dc(s,i),n&&(s.l=n),r=s}return n=e.F,t=e.Da,n&&t&&de(r,n,t),de(r,"VER",e.ra),nl(e,r),r}function ZS(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new Te(new dd({ob:n})):new Te(e.va),t.Oa(e.J),t}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function eI(){}x=eI.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function fc(){if(bs&&!(10<=Number(db)))throw Error("Environmental error: no available transport.")}fc.prototype.g=function(e,t){return new Vt(e,t)};function Vt(e,t){Be.call(this),this.g=new HS(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ma(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ma(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ys(this)}He(Vt,Be);Vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;gt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=JS(e,null,e.Y),gd(e)};Vt.prototype.close=function(){ym(this.g)};Vt.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=lm(e),e=n);t.j.push(new Ub(t.fb++,e)),t.H==3&&gd(t)};Vt.prototype.N=function(){this.g.h=null,delete this.j,ym(this.g),delete this.g,Vt.$.N.call(this)};function tI(e){fm.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}He(tI,fm);function nI(){pm.call(this),this.status=1}He(nI,pm);function Ys(e){this.g=e}He(Ys,eI);Ys.prototype.Ba=function(){Xe(this.g,"a")};Ys.prototype.Aa=function(e){Xe(this.g,new tI(e))};Ys.prototype.za=function(e){Xe(this.g,new nI)};Ys.prototype.ya=function(){Xe(this.g,"b")};function Zb(){this.blockSize=-1}function hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}He(hn,Zb);hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Ch(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],o=t+(s^n&(i^s))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(s^n&(i^s))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=s+(i^t&(n^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(n^s&(t^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(t^i&(s^t))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(n^i))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(n^i))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(t^n))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^n&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^t&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=t+(n^i^s)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(n^i^s)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=s+(t^n^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^t)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=t+(i^(n|~s))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=t+(i^(n|~s))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=s+(n^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}hn.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=n;)Ch(this,e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[i++]=e.charCodeAt(s++),i==this.blockSize){Ch(this,r),i=0;break}}else for(;s<t;)if(r[i++]=e[s++],i==this.blockSize){Ch(this,r),i=0;break}}this.h=i,this.i+=t};hn.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function oe(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=e[i]|0;r&&s==t||(n[i]=s,r=!1)}this.g=n}var e4={};function Em(e){return-128<=e&&128>e?lb(e,function(t){return new oe([t|0],0>t?-1:0)}):new oe([e|0],0>e?-1:0)}function wn(e){if(isNaN(e)||!isFinite(e))return ws;if(0>e)return Ke(wn(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=ap;return new oe(t,0)}function rI(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Ke(rI(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=wn(Math.pow(t,8)),r=ws,i=0;i<e.length;i+=8){var s=Math.min(8,e.length-i),o=parseInt(e.substring(i,i+s),t);8>s?(s=wn(Math.pow(t,s)),r=r.R(s).add(wn(o))):(r=r.R(n),r=r.add(wn(o)))}return r}var ap=4294967296,ws=Em(0),lp=Em(1),S_=Em(16777216);x=oe.prototype;x.ea=function(){if(Wt(this))return-Ke(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:ap+r)*t,t*=ap}return e};x.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(zn(this))return"0";if(Wt(this))return"-"+Ke(this).toString(e);for(var t=wn(Math.pow(e,6)),n=this,r="";;){var i=gc(n,t).g;n=pc(n,i.R(t));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=i,zn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function zn(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function Wt(e){return e.h==-1}x.X=function(e){return e=pc(this,e),Wt(e)?-1:zn(e)?0:1};function Ke(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new oe(n,~e.h).add(lp)}x.abs=function(){return Wt(this)?Ke(this):this};x.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(e.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new oe(n,n[n.length-1]&-2147483648?-1:0)};function pc(e,t){return e.add(Ke(t))}x.R=function(e){if(zn(this)||zn(e))return ws;if(Wt(this))return Wt(e)?Ke(this).R(Ke(e)):Ke(Ke(this).R(e));if(Wt(e))return Ke(this.R(Ke(e)));if(0>this.X(S_)&&0>e.X(S_))return wn(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<e.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(i)>>>16,l=e.D(i)&65535;n[2*r+2*i]+=o*l,Vl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Vl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Vl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Vl(n,2*r+2*i+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new oe(n,0)};function Vl(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function fo(e,t){this.g=e,this.h=t}function gc(e,t){if(zn(t))throw Error("division by zero");if(zn(e))return new fo(ws,ws);if(Wt(e))return t=gc(Ke(e),t),new fo(Ke(t.g),Ke(t.h));if(Wt(t))return t=gc(e,Ke(t)),new fo(Ke(t.g),t.h);if(30<e.g.length){if(Wt(e)||Wt(t))throw Error("slowDivide_ only works with positive integers.");for(var n=lp,r=t;0>=r.X(e);)n=I_(n),r=I_(r);var i=Wi(n,1),s=Wi(r,1);for(r=Wi(r,2),n=Wi(n,2);!zn(r);){var o=s.add(r);0>=o.X(e)&&(i=i.add(n),s=o),r=Wi(r,1),n=Wi(n,1)}return t=pc(e,i.R(t)),new fo(i,t)}for(i=ws;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=wn(n),o=s.R(t);Wt(o)||0<o.X(e);)n-=r,s=wn(n),o=s.R(t);zn(s)&&(s=lp),i=i.add(s),e=pc(e,o)}return new fo(i,e)}x.gb=function(e){return gc(this,e).h};x.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new oe(n,this.h&e.h)};x.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new oe(n,this.h|e.h)};x.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new oe(n,this.h^e.h)};function I_(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new oe(n,e.h)}function Wi(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,i=[],s=0;s<r;s++)i[s]=0<t?e.D(s+n)>>>t|e.D(s+n+1)<<32-t:e.D(s+n);return new oe(i,e.h)}fc.prototype.createWebChannel=fc.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;ad.NO_ERROR=0;ad.TIMEOUT=8;ad.HTTP_ERROR=6;wS.COMPLETE="complete";ES.EventType=Ja;Ja.OPEN="a";Ja.CLOSE="b";Ja.ERROR="c";Ja.MESSAGE="d";Be.prototype.listen=Be.prototype.O;Te.prototype.listenOnce=Te.prototype.P;Te.prototype.getLastError=Te.prototype.Sa;Te.prototype.getLastErrorCode=Te.prototype.Ia;Te.prototype.getStatus=Te.prototype.da;Te.prototype.getResponseJson=Te.prototype.Wa;Te.prototype.getResponseText=Te.prototype.ja;Te.prototype.send=Te.prototype.ha;Te.prototype.setWithCredentials=Te.prototype.Oa;hn.prototype.digest=hn.prototype.l;hn.prototype.reset=hn.prototype.reset;hn.prototype.update=hn.prototype.j;oe.prototype.add=oe.prototype.add;oe.prototype.multiply=oe.prototype.R;oe.prototype.modulo=oe.prototype.gb;oe.prototype.compare=oe.prototype.X;oe.prototype.toNumber=oe.prototype.ea;oe.prototype.toString=oe.prototype.toString;oe.prototype.getBits=oe.prototype.D;oe.fromNumber=wn;oe.fromString=rI;var t4=function(){return new fc},n4=function(){return od()},Rh=ad,r4=wS,i4=ji,T_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Fl=ES,s4=Te,o4=hn,Es=oe;const C_="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Ug("@firebase/firestore");function po(){return xi.logLevel}function L(e,...t){if(xi.logLevel<=J.DEBUG){const n=t.map(Sm);xi.debug(`Firestore (${Xs}): ${e}`,...n)}}function Yn(e,...t){if(xi.logLevel<=J.ERROR){const n=t.map(Sm);xi.error(`Firestore (${Xs}): ${e}`,...n)}}function Os(e,...t){if(xi.logLevel<=J.WARN){const n=t.map(Sm);xi.warn(`Firestore (${Xs}): ${e}`,...n)}}function Sm(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e="Unexpected state"){const t=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: `+e;throw Yn(t),new Error(t)}function le(e,t){e||H()}function K(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends On{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class a4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class l4{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class u4{constructor(t){this.t=t,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fr,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fr)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new iI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return le(t===null||typeof t=="string"),new rt(t)}}class c4{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class d4{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new c4(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h4{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class f4{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new h4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p4(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=p4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=t.charAt(i[s]%t.length))}return r}}function te(e,t){return e<t?-1:e>t?1:0}function Ds(e,t,n){return e.length===t.length&&e.every((r,i)=>n(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Fe.fromMillis(Date.now())}static fromDate(t){return Fe.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?te(this.nanoseconds,t.nanoseconds):te(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.timestamp=t}static fromTimestamp(t){return new G(t)}static min(){return new G(new Fe(0,0))}static max(){return new G(new Fe(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,n,r){n===void 0?n=0:n>t.length&&H(),r===void 0?r=t.length-n:r>t.length-n&&H(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ta.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ta?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let i=0;i<r;i++){const s=t.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class me extends Ta{construct(t,n,r){return new me(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new F(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const g4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Ta{construct(t,n,r){return new Qe(t,n,r)}static isValidIdentifier(t){return g4.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(t){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(A.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new F(A.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(A.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.path=t}static fromPath(t){return new j(me.fromString(t))}static fromName(t){return new j(me.fromString(t).popFirst(5))}static empty(){return new j(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&me.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return me.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new me(t.slice()))}}function m4(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Br(i,j.empty(),t)}function v4(e){return new Br(e.readTime,e.key,-1)}class Br{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Br(G.min(),j.empty(),-1)}static max(){return new Br(G.max(),j.empty(),-1)}}function y4(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=j.comparator(e.documentKey,t.documentKey),n!==0?n:te(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rl(e){if(e.code!==A.FAILED_PRECONDITION||e.message!==_4)throw e;L("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):k.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):k.reject(n)}static resolve(t){return new k((n,r)=>{n(t)})}static reject(t){return new k((n,r)=>{r(t)})}static waitFor(t){return new k((n,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(t){let n=k.resolve(!1);for(const r of t)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(t,n){const r=[];return t.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(t,n){return new k((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(t[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,n){return new k((r,i)=>{const s=()=>{t()===!0?n().next(()=>{s()},i):r()};s()})}}function il(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Im._e=-1;function md(e){return e==null}function mc(e){return e===0&&1/e==-1/0}function E4(e){return typeof e=="number"&&Number.isInteger(e)&&!mc(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ui(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function oI(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,n){this.comparator=t,this.root=n||Ge.EMPTY}insert(t,n){return new Ee(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(t){return new Ee(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $l(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $l(this.root,t,this.comparator,!1)}getReverseIterator(){return new $l(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $l(this.root,t,this.comparator,!0)}}class $l{constructor(t,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=n?r(t.key,n):1,n&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ge{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,i,s){return new Ge(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const t=this.left.check();if(t!==this.right.check())throw H();return t+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(t,n,r,i,s){return this}insert(t,n,r){return new Ge(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.comparator=t,this.data=new Ee(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new A_(this.data.getIterator())}getIteratorFrom(t){return new A_(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Je)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Je(this.comparator);return n.data=t,n}}class A_{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.fields=t,t.sort(Qe.comparator)}static empty(){return new bt([])}unionWith(t){let n=new Je(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new bt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ds(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new aI("Invalid base64 string: "+s):s}}(t);return new ct(n)}static fromUint8Array(t){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new ct(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return te(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const S4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(e){if(le(!!e),typeof e=="string"){let t=0;const n=S4.exec(e);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ne(e.seconds),nanos:Ne(e.nanos)}}function Ne(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Ni(e){return typeof e=="string"?ct.fromBase64String(e):ct.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cm(e){const t=e.mapValue.fields.__previous_value__;return Tm(t)?Cm(t):t}function Ca(e){const t=Hr(e.mapValue.fields.__local_write_time__.timestampValue);return new Fe(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(t,n,r,i,s,o,a,l,u){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ra{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ra&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Tm(e)?4:T4(e)?9007199254740991:10:H()}function xn(e,t){if(e===t)return!0;const n=bi(e);if(n!==bi(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Ca(e).isEqual(Ca(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hr(i.timestampValue),a=Hr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(i,s){return Ni(i.bytesValue).isEqual(Ni(s.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(e,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),a=Ne(s.doubleValue);return o===a?mc(o)===mc(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return Ds(e.arrayValue.values||[],t.arrayValue.values||[],xn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(R_(o)!==R_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!xn(o[l],a[l])))return!1;return!0}(e,t);default:return H()}}function Aa(e,t){return(e.values||[]).find(n=>xn(n,t))!==void 0}function Ls(e,t){if(e===t)return 0;const n=bi(e),r=bi(t);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(e.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Ne(s.integerValue||s.doubleValue),l=Ne(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return k_(e.timestampValue,t.timestampValue);case 4:return k_(Ca(e),Ca(t));case 5:return te(e.stringValue,t.stringValue);case 6:return function(s,o){const a=Ni(s),l=Ni(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=te(a[u],l[u]);if(c!==0)return c}return te(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(s,o){const a=te(Ne(s.latitude),Ne(o.latitude));return a!==0?a:te(Ne(s.longitude),Ne(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ls(a[u],l[u]);if(c)return c}return te(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===jl.mapValue&&o===jl.mapValue)return 0;if(s===jl.mapValue)return 1;if(o===jl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const f=te(l[d],c[d]);if(f!==0)return f;const p=Ls(a[l[d]],u[c[d]]);if(p!==0)return p}return te(l.length,c.length)}(e.mapValue,t.mapValue);default:throw H()}}function k_(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return te(e,t);const n=Hr(e),r=Hr(t),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function Ms(e){return up(e)}function up(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Ni(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return j.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=up(s);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${up(n.fields[o])}`;return i+"}"}(e.mapValue):H()}function cp(e){return!!e&&"integerValue"in e}function Rm(e){return!!e&&"arrayValue"in e}function P_(e){return!!e&&"nullValue"in e}function x_(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Eu(e){return!!e&&"mapValue"in e}function $o(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ui(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=$o(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=$o(e.arrayValue.values[n]);return t}return Object.assign({},e)}function T4(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Eu(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=$o(n)}setAll(t){let n=Qe.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$o(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(t){const n=this.field(t.popLast());Eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return xn(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=n.mapValue.fields[t.get(r)];Eu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,r){Ui(n,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new It($o(this.value))}}function lI(e){const t=[];return Ui(e.fields,(n,r)=>{const i=new Qe([n]);if(Eu(r)){const s=lI(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new bt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(t,n,r,i,s,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new st(t,0,G.min(),G.min(),G.min(),It.empty(),0)}static newFoundDocument(t,n,r,i){return new st(t,1,n,G.min(),r,i,0)}static newNoDocument(t,n){return new st(t,2,n,G.min(),G.min(),It.empty(),0)}static newUnknownDocument(t,n){return new st(t,3,n,G.min(),G.min(),It.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof st&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,n){this.position=t,this.inclusive=n}}function N_(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function b_(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!xn(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,n="asc"){this.field=t,this.dir=n}}function C4(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{}class Me extends uI{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new A4(t,n,r):n==="array-contains"?new x4(t,r):n==="in"?new N4(t,r):n==="not-in"?new b4(t,r):n==="array-contains-any"?new O4(t,r):new Me(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new k4(t,r):new P4(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ls(n,this.value)):n!==null&&bi(this.value)===bi(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends uI{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new Nn(t,n)}matches(t){return cI(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function cI(e){return e.op==="and"}function dI(e){return R4(e)&&cI(e)}function R4(e){for(const t of e.filters)if(t instanceof Nn)return!1;return!0}function dp(e){if(e instanceof Me)return e.field.canonicalString()+e.op.toString()+Ms(e.value);if(dI(e))return e.filters.map(t=>dp(t)).join(",");{const t=e.filters.map(n=>dp(n)).join(",");return`${e.op}(${t})`}}function hI(e,t){return e instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&xn(r.value,i.value)}(e,t):e instanceof Nn?function(r,i){return i instanceof Nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&hI(o,i.filters[a]),!0):!1}(e,t):void H()}function fI(e){return e instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(e):e instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(fI).join(" ,")+"}"}(e):"Filter"}class A4 extends Me{constructor(t,n,r){super(t,n,r),this.key=j.fromName(r.referenceValue)}matches(t){const n=j.comparator(t.key,this.key);return this.matchesComparison(n)}}class k4 extends Me{constructor(t,n){super(t,"in",n),this.keys=pI("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class P4 extends Me{constructor(t,n){super(t,"not-in",n),this.keys=pI("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function pI(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class x4 extends Me{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Rm(n)&&Aa(n.arrayValue,this.value)}}class N4 extends Me{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Aa(this.value.arrayValue,n)}}class b4 extends Me{constructor(t,n){super(t,"not-in",n)}matches(t){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Aa(this.value.arrayValue,n)}}class O4 extends Me{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Rm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Aa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(t,n=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function O_(e,t=null,n=[],r=[],i=null,s=null,o=null){return new D4(e,t,n,r,i,s,o)}function Am(e){const t=K(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>dp(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),md(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Ms(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Ms(r)).join(",")),t.ce=n}return t.ce}function km(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!C4(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!hI(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!b_(e.startAt,t.startAt)&&b_(e.endAt,t.endAt)}function hp(e){return j.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(t,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function L4(e,t,n,r,i,s,o,a){return new vd(e,t,n,r,i,s,o,a)}function gI(e){return new vd(e)}function D_(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function M4(e){return e.collectionGroup!==null}function jo(e){const t=K(e);if(t.le===null){t.le=[];const n=new Set;for(const s of t.explicitOrderBy)t.le.push(s),n.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Je(Qe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(t).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||t.le.push(new yc(s,r))}),n.has(Qe.keyField().canonicalString())||t.le.push(new yc(Qe.keyField(),r))}return t.le}function kn(e){const t=K(e);return t.he||(t.he=V4(t,jo(e))),t.he}function V4(e,t){if(e.limitType==="F")return O_(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new yc(i.field,s)});const n=e.endAt?new vc(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new vc(e.startAt.position,e.startAt.inclusive):null;return O_(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function fp(e,t,n){return new vd(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function yd(e,t){return km(kn(e),kn(t))&&e.limitType===t.limitType}function mI(e){return`${Am(kn(e))}|lt:${e.limitType}`}function qi(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>fI(i)).join(", ")}]`),md(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ms(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ms(i)).join(",")),`Target(${r})`}(kn(e))}; limitType=${e.limitType})`}function _d(e,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(e,t)&&function(r,i){for(const s of jo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(e,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(e,t)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=N_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,jo(r),i)||r.endAt&&!function(o,a,l){const u=N_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,jo(r),i))}(e,t)}function F4(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function vI(e){return(t,n)=>{let r=!1;for(const i of jo(e)){const s=$4(i,t,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $4(e,t,n){const r=e.field.isKeyField()?j.comparator(t.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ls(l,u):H()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Ui(this.inner,(n,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return oI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j4=new Ee(j.comparator);function Xn(){return j4}const yI=new Ee(j.comparator);function Co(...e){let t=yI;for(const n of e)t=t.insert(n.key,n);return t}function _I(e){let t=yI;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function hi(){return Uo()}function wI(){return Uo()}function Uo(){return new Js(e=>e.toString(),(e,t)=>e.isEqual(t))}const U4=new Ee(j.comparator),z4=new Je(j.comparator);function Y(...e){let t=z4;for(const n of e)t=t.add(n);return t}const B4=new Je(te);function H4(){return B4}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(t)?"-0":t}}function SI(e){return{integerValue:""+e}}function W4(e,t){return E4(t)?SI(t):EI(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(){this._=void 0}}function q4(e,t,n){return e instanceof _c?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Tm(s)&&(s=Cm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,t):e instanceof ka?TI(e,t):e instanceof Pa?CI(e,t):function(i,s){const o=II(i,s),a=L_(o)+L_(i.Ie);return cp(o)&&cp(i.Ie)?SI(a):EI(i.serializer,a)}(e,t)}function G4(e,t,n){return e instanceof ka?TI(e,t):e instanceof Pa?CI(e,t):n}function II(e,t){return e instanceof wc?function(r){return cp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class _c extends wd{}class ka extends wd{constructor(t){super(),this.elements=t}}function TI(e,t){const n=RI(t);for(const r of e.elements)n.some(i=>xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Pa extends wd{constructor(t){super(),this.elements=t}}function CI(e,t){let n=RI(t);for(const r of e.elements)n=n.filter(i=>!xn(i,r));return{arrayValue:{values:n}}}class wc extends wd{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function L_(e){return Ne(e.integerValue||e.doubleValue)}function RI(e){return Rm(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function K4(e,t){return e.field.isEqual(t.field)&&function(r,i){return r instanceof ka&&i instanceof ka||r instanceof Pa&&i instanceof Pa?Ds(r.elements,i.elements,xn):r instanceof wc&&i instanceof wc?xn(r.Ie,i.Ie):r instanceof _c&&i instanceof _c}(e.transform,t.transform)}class Q4{constructor(t,n){this.version=t,this.transformResults=n}}class ln{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ln}static exists(t){return new ln(void 0,t)}static updateTime(t){return new ln(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Su(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Ed{}function AI(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Pm(e.key,ln.none()):new sl(e.key,e.data,ln.none());{const n=e.data,r=It.empty();let i=new Je(Qe.comparator);for(let s of t.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ni(e.key,r,new bt(i.toArray()),ln.none())}}function Y4(e,t,n){e instanceof sl?function(i,s,o){const a=i.value.clone(),l=V_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof ni?function(i,s,o){if(!Su(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=V_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(kI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function zo(e,t,n,r){return e instanceof sl?function(s,o,a,l){if(!Su(s.precondition,o))return a;const u=s.value.clone(),c=F_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(e,t,n,r):e instanceof ni?function(s,o,a,l){if(!Su(s.precondition,o))return a;const u=F_(s.fieldTransforms,l,o),c=o.data;return c.setAll(kI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(e,t,n,r):function(s,o,a){return Su(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function X4(e,t){let n=null;for(const r of e.fieldTransforms){const i=t.data.field(r.field),s=II(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function M_(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ds(r,i,(s,o)=>K4(s,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class sl extends Ed{constructor(t,n,r,i=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ni extends Ed{constructor(t,n,r,i,s=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kI(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function V_(e,t,n){const r=new Map;le(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,G4(o,a,n[i]))}return r}function F_(e,t,n){const r=new Map;for(const i of e){const s=i.transform,o=n.data.field(i.field);r.set(i.field,q4(s,o,t))}return r}class Pm extends Ed{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class J4 extends Ed{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(t,n,r,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&Y4(s,t,r[i])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=zo(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=zo(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=wI();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=AI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Y())}isEqual(t){return this.batchId===t.batchId&&Ds(this.mutations,t.mutations,(n,r)=>M_(n,r))&&Ds(this.baseMutations,t.baseMutations,(n,r)=>M_(n,r))}}class xm{constructor(t,n,r,i){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(t,n,r){le(t.mutations.length===r.length);let i=function(){return U4}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xm(t,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,Z;function nO(e){switch(e){default:return H();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function PI(e){if(e===void 0)return Yn("GRPC error has no .code"),A.UNKNOWN;switch(e){case xe.OK:return A.OK;case xe.CANCELLED:return A.CANCELLED;case xe.UNKNOWN:return A.UNKNOWN;case xe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case xe.INTERNAL:return A.INTERNAL;case xe.UNAVAILABLE:return A.UNAVAILABLE;case xe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case xe.NOT_FOUND:return A.NOT_FOUND;case xe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case xe.ABORTED:return A.ABORTED;case xe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case xe.DATA_LOSS:return A.DATA_LOSS;default:return H()}}(Z=xe||(xe={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=new Es([4294967295,4294967295],0);function $_(e){const t=rO().encode(e),n=new o4;return n.update(t),new Uint8Array(n.digest())}function j_(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Es([n,r],0),new Es([i,s],0)]}class Nm{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ro(`Invalid padding: ${n}`);if(r<0)throw new Ro(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Ro(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Ro(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=Es.fromNumber(this.Te)}de(t,n,r){let i=t.add(n.multiply(Es.fromNumber(r)));return i.compare(iO)===1&&(i=new Es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=$_(t),[r,i]=j_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Nm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=$_(t),[r,i]=j_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,n,r,i,s){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const i=new Map;return i.set(t,ol.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Sd(G.min(),i,new Ee(te),Xn(),Y())}}class ol{constructor(t,n,r,i,s){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new ol(r,n,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t,n,r,i){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=i}}class xI{constructor(t,n){this.targetId=t,this.fe=n}}class NI{constructor(t,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=i}}class U_{constructor(){this.ge=0,this.pe=B_(),this.ye=ct.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=Y(),n=Y(),r=Y();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new ol(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=B_()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,le(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class sO{constructor(t){this.Le=t,this.ke=new Map,this.qe=Xn(),this.Qe=z_(),this.Ke=new Ee(te)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:H()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(t){const n=t.targetId,r=t.fe.count,i=this.Ye(n);if(i){const s=i.target;if(hp(s))if(r===0){const o=new j(s.path);this.We(n,o,st.newNoDocument(o,G.min()))}else le(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ni(r).toUint8Array()}catch(l){if(l instanceof aI)return Os("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Nm(o,i,s)}catch(l){return Os(l instanceof Ro?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(n,s,null),i++)}),i}it(t){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&hp(a.target)){const l=new j(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,st.newNoDocument(l,t))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=Y();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new Sd(t,n,this.Ke,this.qe,r);return this.qe=Xn(),this.Qe=z_(),this.Ke=new Ee(te),i}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new U_,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Je(te),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||L("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Le._t(t)}He(t){this.ke.set(t,new U_),this.Le.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Le.getRemoteKeysForTarget(t).has(n)}}function z_(){return new Ee(j.comparator)}function B_(){return new Ee(j.comparator)}const oO={asc:"ASCENDING",desc:"DESCENDING"},aO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lO={and:"AND",or:"OR"};class uO{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function pp(e,t){return e.useProto3Json||md(t)?t:{value:t}}function Ec(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function bI(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function cO(e,t){return Ec(e,t.toTimestamp())}function Pn(e){return le(!!e),G.fromTimestamp(function(n){const r=Hr(n);return new Fe(r.seconds,r.nanos)}(e))}function bm(e,t){return function(r){return new me(["projects",r.projectId,"databases",r.database])}(e).child("documents").child(t).canonicalString()}function OI(e){const t=me.fromString(e);return le(VI(t)),t}function gp(e,t){return bm(e.databaseId,t.path)}function Ah(e,t){const n=OI(t);if(n.get(1)!==e.databaseId.projectId)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new j(DI(n))}function mp(e,t){return bm(e.databaseId,t)}function dO(e){const t=OI(e);return t.length===4?me.emptyPath():DI(t)}function vp(e){return new me(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function DI(e){return le(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function H_(e,t,n){return{name:gp(e,t),fields:n.value.mapValue.fields}}function hO(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:H()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(le(c===void 0||typeof c=="string"),ct.fromBase64String(c||"")):(le(c===void 0||c instanceof Uint8Array),ct.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:PI(u.code);return new F(c,u.message||"")}(o);n=new NI(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ah(e,r.document.name),s=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):G.min(),a=new It({mapValue:{fields:r.document.fields}}),l=st.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Iu(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Ah(e,r.document),s=r.readTime?Pn(r.readTime):G.min(),o=st.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Iu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Ah(e,r.document),s=r.removedTargetIds||[];n=new Iu([],s,i,null)}else{if(!("filter"in t))return H();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new tO(i,s),a=r.targetId;n=new xI(a,o)}}return n}function fO(e,t){let n;if(t instanceof sl)n={update:H_(e,t.key,t.value)};else if(t instanceof Pm)n={delete:gp(e,t.key)};else if(t instanceof ni)n={update:H_(e,t.key,t.data),updateMask:SO(t.fieldMask)};else{if(!(t instanceof J4))return H();n={verify:gp(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof _c)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ka)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Pa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw H()}(0,r))),t.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:cO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(e,t.precondition)),n}function pO(e,t){return e&&e.length>0?(le(t!==void 0),e.map(n=>function(i,s){let o=i.updateTime?Pn(i.updateTime):Pn(s);return o.isEqual(G.min())&&(o=Pn(s)),new Q4(o,i.transformResults||[])}(n,t))):[]}function gO(e,t){return{documents:[mp(e,t.path)]}}function mO(e,t){const n={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(n.parent=mp(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=mp(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return MI(Nn.create(l,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Gi(d.field),direction:_O(d.dir)}}(u))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=pp(e,t.limit);return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function vO(e){let t=dO(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];n.where&&(s=function(d){const f=LI(d);return f instanceof Nn&&dI(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(f=>function(m){return new yc(Ki(m.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,md(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,p=d.values||[];return new vc(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const f=!d.before,p=d.values||[];return new vc(p,f)}(n.endAt)),L4(t,i,o,s,a,"F",l,u)}function yO(e,t){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function LI(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ki(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ki(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ki(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ki(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(e):e.fieldFilter!==void 0?function(n){return Me.create(Ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>LI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(e):H()}function _O(e){return oO[e]}function wO(e){return aO[e]}function EO(e){return lO[e]}function Gi(e){return{fieldPath:e.canonicalString()}}function Ki(e){return Qe.fromServerFormat(e.fieldPath)}function MI(e){return e instanceof Me?function(n){if(n.op==="=="){if(x_(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NAN"}};if(P_(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(x_(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NOT_NAN"}};if(P_(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gi(n.field),op:wO(n.op),value:n.value}}}(e):e instanceof Nn?function(n){const r=n.getFilters().map(i=>MI(i));return r.length===1?r[0]:{compositeFilter:{op:EO(n.op),filters:r}}}(e):H()}function SO(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function VI(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,n,r,i,s=G.min(),o=G.min(),a=ct.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new Ir(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(t){this.ut=t}}function TO(e){const t=vO({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?fp(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CO{constructor(){this.on=new RO}addToCollectionParentIndex(t,n){return this.on.add(n),k.resolve()}getCollectionParents(t,n){return k.resolve(this.on.getEntries(n))}addFieldIndex(t,n){return k.resolve()}deleteFieldIndex(t,n){return k.resolve()}deleteAllFieldIndexes(t){return k.resolve()}createTargetIndexes(t,n){return k.resolve()}getDocumentsMatchingTarget(t,n){return k.resolve(null)}getIndexType(t,n){return k.resolve(0)}getFieldIndexes(t,n){return k.resolve([])}getNextCollectionGroupToUpdate(t){return k.resolve(null)}getMinOffset(t,n){return k.resolve(Br.min())}getMinOffsetFromCollectionGroup(t,n){return k.resolve(Br.min())}updateCollectionGroup(t,n,r){return k.resolve()}updateIndexEntries(t,n){return k.resolve()}}class RO{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n]||new Je(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(t){const n=t.lastSegment(),r=t.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Je(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Vs(0)}static Nn(){return new Vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(){this.changes=new Js(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,st.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(t,n,r,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(r!==null&&zo(r.mutation,i,bt.empty(),Fe.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Y()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Y()){const i=hi();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,r).next(s=>{let o=Co();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=hi();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Y()))}populateOverlays(t,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,i){let s=Xn();const o=Uo(),a=function(){return Uo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ni)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),zo(c.mutation,u,c.mutation.getFieldMask(),Fe.now())):o.set(u.key,bt.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new kO(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,n){const r=Uo();let i=new Ee((o,a)=>o-a),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=wI();c.forEach(f=>{if(!s.has(f)){const p=AI(n.get(f),r.get(f));p!==null&&d.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,u,d))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,i){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):M4(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,i):this.getDocumentsMatchingCollectionQuery(t,n,r,i)}getNextDocuments(t,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,i-s.size):k.resolve(hi());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(t,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(t,u,s)).next(()=>this.computeViews(t,l,u,Y())).next(c=>({batchId:a,changes:_I(c)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new j(n)).next(r=>{let i=Co();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,r,i){const s=n.collectionGroup;let o=Co();return this.indexManager.getCollectionParents(t,s).next(a=>k.forEach(a,l=>{const u=function(d,f){return new vd(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,u,r,i).next(c=>{c.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,st.newInvalidDocument(c)))});let a=Co();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&zo(c.mutation,u,bt.empty(),Fe.now()),_d(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,n){return k.resolve(this.ur.get(n))}saveBundleMetadata(t,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),k.resolve()}getNamedQuery(t,n){return k.resolve(this.cr.get(n))}saveNamedQuery(t,n){return this.cr.set(n.name,function(i){return{name:i.name,query:TO(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(){this.overlays=new Ee(j.comparator),this.lr=new Map}getOverlay(t,n){return k.resolve(this.overlays.get(n))}getOverlays(t,n){const r=hi();return k.forEach(n,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((i,s)=>{this.lt(t,n,s)}),k.resolve()}removeOverlaysForBatchId(t,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),k.resolve()}getOverlaysForCollection(t,n,r){const i=hi(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(t,n,r,i){let s=new Ee((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=hi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=hi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}lt(t,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new eO(n,r));let s=this.lr.get(n);s===void 0&&(s=Y(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(){this.hr=new Je(je.Pr),this.Ir=new Je(je.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,n){const r=new je(t,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.dr(new je(t,n))}Ar(t,n){t.forEach(r=>this.removeReference(r,n))}Rr(t){const n=new j(new me([])),r=new je(n,t),i=new je(n,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const n=new j(new me([])),r=new je(n,t),i=new je(n,t+1);let s=Y();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const n=new je(t,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class je{constructor(t,n){this.key=t,this.gr=n}static Pr(t,n){return j.comparator(t.key,n.key)||te(t.gr,n.gr)}static Tr(t,n){return te(t.gr,n.gr)||j.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Je(je.Pr)}checkEmpty(t){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Z4(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new je(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(t,n){return k.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Je(te);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),k.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new je(new j(s),0);let a=new Je(te);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),k.resolve(this.br(a))}br(t){const n=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){le(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return k.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,n){const r=new je(n,0),i=this.yr.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,k.resolve()}Dr(t,n){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const n=this.Sr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(t){this.Cr=t,this.docs=function(){return new Ee(j.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(t,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(t,n,r,i){let s=Xn();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||y4(v4(c),r)<=0||(i.has(c.key)||_d(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(t,n,r,i){H()}vr(t,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new DO(this)}getSize(t){return k.resolve(this.size)}}class DO extends AO{constructor(t){super(),this._r=t}applyChanges(t){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),k.waitFor(n)}getFromCache(t,n){return this._r.getEntry(t,n)}getAllFromCache(t,n){return this._r.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(t){this.persistence=t,this.Fr=new Js(n=>Am(n),km),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Om,this.targetCount=0,this.Nr=Vs.On()}forEachTarget(t,n){return this.Fr.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(t){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return k.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),k.resolve()}kn(t){this.Fr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Nr=new Vs(n),this.highestTargetId=n),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,n){return this.kn(n),this.targetCount+=1,k.resolve()}updateTargetData(t,n){return this.kn(n),k.resolve()}removeTargetData(t,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(t,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(t){return k.resolve(this.targetCount)}getTargetData(t,n){const r=this.Fr.get(n)||null;return k.resolve(r)}addMatchingKeys(t,n,r){return this.Or.Er(n,r),k.resolve()}removeMatchingKeys(t,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(t,n){return this.Or.Rr(n),k.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Or.mr(n);return k.resolve(r)}containsKey(t,n){return k.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MO{constructor(t,n){this.Br={},this.overlays={},this.Lr=new Im(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new LO(this),this.indexManager=new CO,this.remoteDocumentCache=function(i){return new OO(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new IO(n),this.Kr=new xO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new NO,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new bO(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,n,r){L("MemoryPersistence","Starting transaction:",t);const i=new VO(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,n){return k.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class VO extends w4{constructor(t){super(),this.currentSequenceNumber=t}}class Dm{constructor(t){this.persistence=t,this.Gr=new Om,this.zr=null}static jr(t){return new Dm(t)}get Hr(){if(this.zr)return this.zr;throw H()}addReference(t,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),k.resolve()}removeReference(t,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(t,n){return this.Hr.add(n.toString()),k.resolve()}removeTarget(t,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,n))}$r(){this.zr=new Set}Ur(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Hr,r=>{const i=j.fromPath(r);return this.Jr(t,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.zr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Jr(t,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(t){return 0}Jr(t,n){return k.or([()=>k.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Wr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(t,n,r,i){this.targetId=t,this.fromCache=n,this.ki=r,this.qi=i}static Qi(t,n){let r=Y(),i=Y();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Lm(t,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,n){this.Gi=t,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(t,n,r,i){const s={result:null};return this.zi(t,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new FO;return this.Hi(t,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,n,o,a.size)})}).next(()=>s.result)}Ji(t,n,r,i){return r.documentReadCount<this.Ui?(po()<=J.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),k.resolve()):(po()<=J.DEBUG&&L("QueryEngine","Query:",qi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(po()<=J.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,kn(n))):k.resolve())}zi(t,n){if(D_(n))return k.resolve(null);let r=kn(n);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fp(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=Y(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(t,fp(n,null,"F")):this.Xi(t,u,n,l)}))})))}ji(t,n,r,i){return D_(n)||i.isEqual(G.min())?k.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?k.resolve(null):(po()<=J.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qi(n)),this.Xi(t,o,n,m4(i,-1)).next(a=>a))})}Yi(t,n){let r=new Je(vI(t));return n.forEach((i,s)=>{_d(t,s)&&(r=r.add(s))}),r}Zi(t,n,r,i){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const s=t.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,n,r){return po()<=J.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",qi(n)),this.Gi.getDocumentsMatchingQuery(t,n,Br.min(),r)}Xi(t,n,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(t,n,r,i){this.persistence=t,this.es=n,this.serializer=i,this.ts=new Ee(te),this.ns=new Js(s=>Am(s),km),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new PO(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ts))}}function UO(e,t,n,r){return new jO(e,t,n,r)}async function FI(e,t){const n=K(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(t),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Y();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function zO(e,t){const n=K(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,f=d.keys();let p=k.resolve();return f.forEach(m=>{p=p.next(()=>c.getEntry(l,m)).next(_=>{const w=u.docVersions.get(m);le(w!==null),_.version.compareTo(w)<0&&(d.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,t,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Y();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,i))})}function $I(e){const t=K(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.qr.getLastRemoteSnapshotVersion(n))}function BO(e,t){const n=K(e),r=t.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];t.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,d)));let p=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(d)!==null?p=p.withResumeToken(ct.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(d,p),function(_,w,g){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=Xn(),u=Y();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(HO(s,o,t.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(G.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(d=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function HO(e,t,n){let r=Y(),i=Y();return n.forEach(s=>r=r.add(s)),t.getEntries(e,r).next(s=>{let o=Xn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(G.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function WO(e,t){const n=K(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function qO(e,t){const n=K(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,t).next(s=>s?(i=s,k.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Ir(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(t,r.targetId)),r})}async function yp(e,t,n){const r=K(e),i=r.ts.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!il(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function W_(e,t,n){const r=K(e);let i=G.min(),s=Y();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=K(l),f=d.ns.get(c);return f!==void 0?k.resolve(d.ts.get(f)):d.qr.getTargetData(u,c)}(r,o,kn(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,n?i:G.min(),n?s:Y())).next(a=>(GO(r,F4(t),a),{documents:a,ls:s})))}function GO(e,t,n){let r=e.rs.get(t)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),e.rs.set(t,r)}class q_{constructor(){this.activeTargetIds=H4()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class KO{constructor(){this.eo=new q_,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,n,r){this.no[t]=n}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new q_,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ul=null;function kh(){return Ul===null?Ul=function(){return 268435456+Math.round(2147483648*Math.random())}():Ul++,"0x"+Ul.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt="WebChannelConnection";class JO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=kh(),l=this.So(n,r);L("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(L("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Os("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=YO[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,n,r,i){const s=kh();return new Promise((o,a)=>{const l=new s4;l.setWithCredentials(!0),l.listenOnce(r4.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Rh.NO_ERROR:const c=l.getResponseJson();L(nt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Rh.TIMEOUT:L(nt,`RPC '${t}' ${s} timed out`),a(new F(A.DEADLINE_EXCEEDED,"Request time out"));break;case Rh.HTTP_ERROR:const d=l.getStatus();if(L(nt,`RPC '${t}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(p.status);a(new F(m,p.message))}else a(new F(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(A.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{L(nt,`RPC '${t}' ${s} completed.`)}});const u=JSON.stringify(i);L(nt,`RPC '${t}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(t,n,r){const i=kh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=t4(),a=n4(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");L(nt,`Creating RPC '${t}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let f=!1,p=!1;const m=new XO({co:w=>{p?L(nt,`Not sending because RPC '${t}' stream ${i} is closed:`,w):(f||(L(nt,`Opening RPC '${t}' stream ${i} transport.`),d.open(),f=!0),L(nt,`RPC '${t}' stream ${i} sending:`,w),d.send(w))},lo:()=>d.close()}),_=(w,g,v)=>{w.listen(g,y=>{try{v(y)}catch(E){setTimeout(()=>{throw E},0)}})};return _(d,Fl.EventType.OPEN,()=>{p||L(nt,`RPC '${t}' stream ${i} transport opened.`)}),_(d,Fl.EventType.CLOSE,()=>{p||(p=!0,L(nt,`RPC '${t}' stream ${i} transport closed`),m.Ro())}),_(d,Fl.EventType.ERROR,w=>{p||(p=!0,Os(nt,`RPC '${t}' stream ${i} transport errored:`,w),m.Ro(new F(A.UNAVAILABLE,"The operation could not be completed")))}),_(d,Fl.EventType.MESSAGE,w=>{var g;if(!p){const v=w.data[0];le(!!v);const y=v,E=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(E){L(nt,`RPC '${t}' stream ${i} received error:`,E);const I=E.status;let R=function(N){const M=xe[N];if(M!==void 0)return PI(M)}(I),C=E.message;R===void 0&&(R=A.INTERNAL,C="Unknown error status: "+I+" with message "+E.message),p=!0,m.Ro(new F(R,C)),d.close()}else L(nt,`RPC '${t}' stream ${i} received:`,v),m.Vo(v)}}),_(a,i4.STAT_EVENT,w=>{w.stat===T_.PROXY?L(nt,`RPC '${t}' stream ${i} detected buffering proxy`):w.stat===T_.NOPROXY&&L(nt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function Ph(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(e){return new uO(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(t,n,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(t,n,r,i,s,o,a,l){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new jI(t,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(n)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{t(()=>{const i=new F(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,n){const r=this.i_(this.Uo);this.stream=this.__(t,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return L("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return n=>{this.si.enqueueAndForget(()=>this.Uo===t?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ZO extends UI{constructor(t,n,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(t,n){return this.connection.vo("Listen",t,n)}onMessage(t){this.zo.reset();const n=hO(this.serializer,t),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Pn(o.readTime):G.min()}(t);return this.listener.a_(n,r)}u_(t){const n={};n.database=vp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=hp(l)?{documents:gO(s,l)}:{query:mO(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bI(s,o.resumeToken);const u=pp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=Ec(s,o.snapshotVersion.toTimestamp());const u=pp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,t);const r=yO(this.serializer,t);r&&(n.labels=r),this.e_(n)}c_(t){const n={};n.database=vp(this.serializer),n.removeTarget=t,this.e_(n)}}class eD extends UI{constructor(t,n,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,n){return this.connection.vo("Write",t,n)}onMessage(t){if(le(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const n=pO(t.writeResults,t.commitTime),r=Pn(t.commitTime);return this.listener.I_(r,n)}return le(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=vp(this.serializer),this.e_(t)}P_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>fO(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tD extends class{}{constructor(t,n,r,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(A.UNKNOWN,i.toString())})}Co(t,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(A.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class nD{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Yn(n),this.f_=!1):L("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(t,n,r,i,s){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{zi(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=K(l);u.C_.add(4),await al(u),u.M_.set("Unknown"),u.C_.delete(4),await Td(u)}(this))})}),this.M_=new nD(r,i)}}async function Td(e){if(zi(e))for(const t of e.v_)await t(!0)}async function al(e){for(const t of e.v_)await t(!1)}function zI(e,t){const n=K(e);n.D_.has(t.targetId)||(n.D_.set(t.targetId,t),Fm(n)?Vm(n):Zs(n).Ho()&&Mm(n,t))}function BI(e,t){const n=K(e),r=Zs(n);n.D_.delete(t),r.Ho()&&HI(n,t),n.D_.size===0&&(r.Ho()?r.Zo():zi(n)&&n.M_.set("Unknown"))}function Mm(e,t){if(e.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(G.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Zs(e).u_(t)}function HI(e,t){e.x_.Oe(t),Zs(e).c_(t)}function Vm(e){e.x_=new sO({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.D_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Zs(e).start(),e.M_.g_()}function Fm(e){return zi(e)&&!Zs(e).jo()&&e.D_.size>0}function zi(e){return K(e).C_.size===0}function WI(e){e.x_=void 0}async function iD(e){e.D_.forEach((t,n)=>{Mm(e,t)})}async function sD(e,t){WI(e),Fm(e)?(e.M_.w_(t),Vm(e)):e.M_.set("Unknown")}async function oD(e,t,n){if(e.M_.set("Online"),t instanceof NI&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(e,t)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Sc(e,r)}else if(t instanceof Iu?e.x_.$e(t):t instanceof xI?e.x_.Je(t):e.x_.Ge(t),!n.isEqual(G.min()))try{const r=await $I(e.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(ct.EMPTY_BYTE_STRING,c.snapshotVersion)),HI(s,l);const d=new Ir(c.target,l,u,c.sequenceNumber);Mm(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Sc(e,r)}}async function Sc(e,t,n){if(!il(t))throw t;e.C_.add(1),await al(e),e.M_.set("Offline"),n||(n=()=>$I(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),e.C_.delete(1),await Td(e)})}function qI(e,t){return t().catch(n=>Sc(e,n,t))}async function Cd(e){const t=K(e),n=Wr(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;aD(t);)try{const i=await WO(t.localStore,r);if(i===null){t.b_.length===0&&n.Zo();break}r=i.batchId,lD(t,i)}catch(i){await Sc(t,i)}GI(t)&&KI(t)}function aD(e){return zi(e)&&e.b_.length<10}function lD(e,t){e.b_.push(t);const n=Wr(e);n.Ho()&&n.h_&&n.P_(t.mutations)}function GI(e){return zi(e)&&!Wr(e).jo()&&e.b_.length>0}function KI(e){Wr(e).start()}async function uD(e){Wr(e).E_()}async function cD(e){const t=Wr(e);for(const n of e.b_)t.P_(n.mutations)}async function dD(e,t,n){const r=e.b_.shift(),i=xm.from(r,t,n);await qI(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Cd(e)}async function hD(e,t){t&&Wr(e).h_&&await async function(r,i){if(function(o){return nO(o)&&o!==A.ABORTED}(i.code)){const s=r.b_.shift();Wr(r).Yo(),await qI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cd(r)}}(e,t),GI(e)&&KI(e)}async function K_(e,t){const n=K(e);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=zi(n);n.C_.add(3),await al(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.C_.delete(3),await Td(n)}async function fD(e,t){const n=K(e);t?(n.C_.delete(2),await Td(n)):t||(n.C_.add(2),await al(n),n.M_.set("Unknown"))}function Zs(e){return e.O_||(e.O_=function(n,r,i){const s=K(n);return s.A_(),new ZO(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:iD.bind(null,e),Io:sD.bind(null,e),a_:oD.bind(null,e)}),e.v_.push(async t=>{t?(e.O_.Yo(),Fm(e)?Vm(e):e.M_.set("Unknown")):(await e.O_.stop(),WI(e))})),e.O_}function Wr(e){return e.N_||(e.N_=function(n,r,i){const s=K(n);return s.A_(),new eD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(e.datastore,e.asyncQueue,{ho:uD.bind(null,e),Io:hD.bind(null,e),T_:cD.bind(null,e),I_:dD.bind(null,e)}),e.v_.push(async t=>{t?(e.N_.Yo(),await Cd(e)):(await e.N_.stop(),e.b_.length>0&&(L("RemoteStore",`Stopping write stream with ${e.b_.length} pending writes`),e.b_=[]))})),e.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(t,n,r,i,s){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,i,s){const o=Date.now()+r,a=new $m(t,n,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(A.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jm(e,t){if(Yn("AsyncQueue",`${t}: ${e}`),il(e))return new F(A.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t){this.comparator=t?(n,r)=>t(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Co(),this.sortedSet=new Ee(this.comparator)}static emptySet(t){return new Ss(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ss)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.B_=new Ee(j.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):H():this.B_=this.B_.insert(n,t)}L_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Fs{constructor(t,n,r,i,s,o,a,l,u){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(t,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fs(t,n,Ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&yd(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this.k_=void 0,this.listeners=[]}}class gD{constructor(){this.queries=new Js(t=>mI(t),yd),this.onlineState="Unknown",this.q_=new Set}}async function mD(e,t){const n=K(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new pD),i)try{s.k_=await n.onListen(r)}catch(o){const a=jm(o,`Initialization of query '${qi(t.query)}' failed`);return void t.onError(a)}n.queries.set(r,s),s.listeners.push(t),t.Q_(n.onlineState),s.k_&&t.K_(s.k_)&&Um(n)}async function vD(e,t){const n=K(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function yD(e,t){const n=K(e);let r=!1;for(const i of t){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Um(n)}function _D(e,t,n){const r=K(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Um(e){e.q_.forEach(t=>{t.next()})}class wD{constructor(t,n,r){this.query=t,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Fs(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.W_?this.z_(t)&&(this.U_.next(t),n=!0):this.j_(t,this.onlineState)&&(this.H_(t),n=!0),this.G_=t,n}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),n=!0),n}j_(t,n){if(!t.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(t){t=Fs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(t){this.key=t}}class YI{constructor(t){this.key=t}}class ED{constructor(t,n){this.query=t,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Y(),this.mutatedKeys=Y(),this._a=vI(t),this.aa=new Ss(this._a)}get ua(){return this.ia}ca(t,n){const r=n?n.la:new Q_,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,d)=>{const f=i.get(c),p=_d(this.query,d)?d:null,m=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;f&&p?f.data.isEqual(p.data)?m!==_&&(r.track({type:3,doc:p}),w=!0):this.ha(f,p)||(r.track({type:2,doc:p}),w=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),w=!0):f&&!p&&(r.track({type:1,doc:f}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,i){const s=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const o=t.la.L_();o.sort((c,d)=>function(p,m){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return _(p)-_(m)}(c.type,d.type)||this._a(c.doc,d.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new Fs(this.query,t.aa,s,o,t.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Q_,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=Y(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return t.forEach(r=>{this.oa.has(r)||n.push(new YI(r))}),this.oa.forEach(r=>{t.has(r)||n.push(new QI(r))}),n}da(t){this.ia=t.ls,this.oa=Y();const n=this.ca(t.documents);return this.applyChanges(n,!0)}Aa(){return Fs.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class SD{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class ID{constructor(t){this.key=t,this.Ra=!1}}class TD{constructor(t,n,r,i,s,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Js(a=>mI(a),yd),this.fa=new Map,this.ga=new Set,this.pa=new Ee(j.comparator),this.ya=new Map,this.wa=new Om,this.Sa={},this.ba=new Map,this.Da=Vs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function CD(e,t){const n=LD(e);let r,i;const s=n.ma.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await qO(n.localStore,kn(t)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await RD(n,t,r,a==="current",o.resumeToken),n.isPrimaryClient&&zI(n.remoteStore,o)}return i}async function RD(e,t,n,r,i){e.va=(d,f,p)=>async function(_,w,g,v){let y=w.view.ca(g);y.Zi&&(y=await W_(_.localStore,w.query,!1).then(({documents:C})=>w.view.ca(C,y)));const E=v&&v.targetChanges.get(w.targetId),I=v&&v.targetMismatches.get(w.targetId)!=null,R=w.view.applyChanges(y,_.isPrimaryClient,E,I);return X_(_,w.targetId,R.Ta),R.snapshot}(e,d,f,p);const s=await W_(e.localStore,t,!0),o=new ED(t,s.ls),a=o.ca(s.documents),l=ol.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",i),u=o.applyChanges(a,e.isPrimaryClient,l);X_(e,n,u.Ta);const c=new SD(t,n,o);return e.ma.set(t,c),e.fa.has(n)?e.fa.get(n).push(t):e.fa.set(n,[t]),u.snapshot}async function AD(e,t){const n=K(e),r=n.ma.get(t),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!yd(s,t))),void n.ma.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await yp(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),BI(n.remoteStore,r.targetId),_p(n,r.targetId)}).catch(rl)):(_p(n,r.targetId),await yp(n.localStore,r.targetId,!0))}async function kD(e,t,n){const r=MD(e);try{const i=await function(o,a){const l=K(o),u=Fe.now(),c=a.reduce((p,m)=>p.add(m.key),Y());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=Xn(),_=Y();return l.ss.getEntries(p,c).next(w=>{m=w,m.forEach((g,v)=>{v.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,m)).next(w=>{d=w;const g=[];for(const v of a){const y=X4(v,d.get(v.key).overlayedDocument);y!=null&&g.push(new ni(v.key,y,lI(y.value.mapValue),ln.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(w=>{f=w;const g=w.applyToLocalDocumentSet(d,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,g)})}).then(()=>({batchId:f.batchId,changes:_I(d)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new Ee(te)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ll(r,i.changes),await Cd(r.remoteStore)}catch(i){const s=jm(i,"Failed to persist write");n.reject(s)}}async function XI(e,t){const n=K(e);try{const r=await BO(n.localStore,t);t.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?le(o.Ra):i.removedDocuments.size>0&&(le(o.Ra),o.Ra=!1))}),await ll(n,r,t)}catch(r){await rl(r)}}function Y_(e,t,n){const r=K(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const f of d.listeners)f.Q_(a)&&(u=!0)}),u&&Um(l)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function PD(e,t,n){const r=K(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new Ee(j.comparator);o=o.insert(s,st.newNoDocument(s,G.min()));const a=Y().add(s),l=new Sd(G.min(),new Map,new Ee(te),o,a);await XI(r,l),r.pa=r.pa.remove(s),r.ya.delete(t),zm(r)}else await yp(r.localStore,t,!1).then(()=>_p(r,t,n)).catch(rl)}async function xD(e,t){const n=K(e),r=t.batch.batchId;try{const i=await zO(n.localStore,t);ZI(n,r,null),JI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ll(n,i)}catch(i){await rl(i)}}async function ND(e,t,n){const r=K(e);try{const i=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(le(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,t);ZI(r,t,n),JI(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await ll(r,i)}catch(i){await rl(i)}}function JI(e,t){(e.ba.get(t)||[]).forEach(n=>{n.resolve()}),e.ba.delete(t)}function ZI(e,t,n){const r=K(e);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(n?s.reject(n):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function _p(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.fa.get(t))e.ma.delete(r),n&&e.Va.Fa(r,n);e.fa.delete(t),e.isPrimaryClient&&e.wa.Rr(t).forEach(r=>{e.wa.containsKey(r)||eT(e,r)})}function eT(e,t){e.ga.delete(t.path.canonicalString());const n=e.pa.get(t);n!==null&&(BI(e.remoteStore,n),e.pa=e.pa.remove(t),e.ya.delete(n),zm(e))}function X_(e,t,n){for(const r of n)r instanceof QI?(e.wa.addReference(r.key,t),bD(e,r)):r instanceof YI?(L("SyncEngine","Document no longer in limbo: "+r.key),e.wa.removeReference(r.key,t),e.wa.containsKey(r.key)||eT(e,r.key)):H()}function bD(e,t){const n=t.key,r=n.path.canonicalString();e.pa.get(n)||e.ga.has(r)||(L("SyncEngine","New document in limbo: "+n),e.ga.add(r),zm(e))}function zm(e){for(;e.ga.size>0&&e.pa.size<e.maxConcurrentLimboResolutions;){const t=e.ga.values().next().value;e.ga.delete(t);const n=new j(me.fromString(t)),r=e.Da.next();e.ya.set(r,new ID(n)),e.pa=e.pa.insert(n,r),zI(e.remoteStore,new Ir(kn(gI(n.path)),r,"TargetPurposeLimboResolution",Im._e))}}async function ll(e,t,n){const r=K(e),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,t,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Lm.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=K(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>k.forEach(u,f=>k.forEach(f.ki,p=>c.persistence.referenceDelegate.addReference(d,f.targetId,p)).next(()=>k.forEach(f.qi,p=>c.persistence.referenceDelegate.removeReference(d,f.targetId,p)))))}catch(d){if(!il(d))throw d;L("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const p=c.ts.get(f),m=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(m);c.ts=c.ts.insert(f,_)}}}(r.localStore,s))}async function OD(e,t){const n=K(e);if(!n.currentUser.isEqual(t)){L("SyncEngine","User change. New user:",t.toKey());const r=await FI(n.localStore,t);n.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new F(A.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ll(n,r._s)}}function DD(e,t){const n=K(e),r=n.ya.get(t);if(r&&r.Ra)return Y().add(r.key);{let i=Y();const s=n.fa.get(t);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function LD(e){const t=K(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=XI.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=DD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=PD.bind(null,t),t.Va.a_=yD.bind(null,t.eventManager),t.Va.Fa=_D.bind(null,t.eventManager),t}function MD(e){const t=K(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=xD.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ND.bind(null,t),t}class J_{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Id(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return UO(this.persistence,new $O,t.initialUser,this.serializer)}createPersistence(t){return new MO(Dm.jr,this.serializer)}createSharedClientState(t){return new KO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class VD{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Y_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=OD.bind(null,this.syncEngine),await fD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new gD}()}createDatastore(t){const n=Id(t.databaseInfo.databaseId),r=function(s){return new JO(s)}(t.databaseInfo);return function(s,o,a,l){return new tD(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,i,s,o,a){return new rD(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Y_(this.syncEngine,n,0),function(){return G_.D()?new G_:new QO}())}createSyncEngine(t,n){return function(i,s,o,a,l,u,c){const d=new TD(i,s,o,a,l,u);return c&&(d.Ca=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=K(n);L("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await al(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Yn("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(t,n,r,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=sI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=jm(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function xh(e,t){e.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async i=>{r.isEqual(i)||(await FI(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Z_(e,t){e.asyncQueue.verifyOperationInProgress();const n=await UD(e);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(i=>K_(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,s)=>K_(t.remoteStore,s)),e._onlineComponents=t}function jD(e){return e.name==="FirebaseError"?e.code===A.FAILED_PRECONDITION||e.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function UD(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await xh(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!jD(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await xh(e,new J_)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await xh(e,new J_);return e._offlineComponents}async function tT(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await Z_(e,e._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await Z_(e,new VD))),e._onlineComponents}function zD(e){return tT(e).then(t=>t.syncEngine)}async function BD(e){const t=await tT(e),n=t.eventManager;return n.onListen=CD.bind(null,t.syncEngine),n.onUnlisten=AD.bind(null,t.syncEngine),n}function HD(e,t,n={}){const r=new Fr;return e.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new FD({next:f=>{o.enqueueAndForget(()=>vD(s,d)),f.fromCache&&l.source==="server"?u.reject(new F(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new wD(a,c,{includeMetadataChanges:!0,J_:!0});return mD(s,d)}(await BD(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(e,t,n){if(!n)throw new F(A.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function WD(e,t,n,r){if(t===!0&&r===!0)throw new F(A.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function t0(e){if(!j.isDocumentKey(e))throw new F(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function n0(e){if(j.isDocumentKey(e))throw new F(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Bm(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":H()}function Oi(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new F(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bm(e);throw new F(A.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new F(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new F(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}WD("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nT((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Rd{constructor(t,n,r,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new r0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new F(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new r0(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new a4;switch(r.type){case"firstParty":return new d4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=e0.get(n);r&&(L("ComponentProvider","Removing Datastore"),e0.delete(n),r.terminate())}(this),Promise.resolve()}}function qD(e,t,n,r={}){var i;const s=(e=Oi(e,Rd))._getSettings(),o=`${t}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=rt.MOCK_USER;else{a=yE(r.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new F(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new rt(u)}e._authCredentials=new l4(new iI(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ad(this.firestore,t,this._query)}}class Kt{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $r(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Kt(this.firestore,t,this._key)}}class $r extends Ad{constructor(t,n,r){super(t,n,gI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Kt(this.firestore,null,new j(t))}withConverter(t){return new $r(this.firestore,t,this._path)}}function bn(e,t,...n){if(e=Oe(e),rT("collection","path",t),e instanceof Rd){const r=me.fromString(t,...n);return n0(r),new $r(e,null,r)}{if(!(e instanceof Kt||e instanceof $r))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(me.fromString(t,...n));return n0(r),new $r(e.firestore,null,r)}}function $s(e,t,...n){if(e=Oe(e),arguments.length===1&&(t=sI.newId()),rT("doc","path",t),e instanceof Rd){const r=me.fromString(t,...n);return t0(r),new Kt(e,null,new j(r))}{if(!(e instanceof Kt||e instanceof $r))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(me.fromString(t,...n));return t0(r),new Kt(e.firestore,e instanceof $r?e.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new jI(this,"async_queue_retry"),this.iu=()=>{const n=Ph();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const t=Ph();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const n=Ph();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const n=new Fr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!il(t))throw t;L("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const n=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Yn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(t,n,r){this.su(),this.ru.indexOf(t)>-1&&(n=0);const i=$m.createAndSchedule(this,t,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&H()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const n of this.Xa)if(n.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const n=this.Xa.indexOf(t);this.Xa.splice(n,1)}}class ul extends Rd{constructor(t,n,r,i){super(t,n,r,i),this.type="firestore",this._queue=function(){return new GD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||oT(this),this._firestoreClient.terminate()}}function iT(e,t){const n=typeof e=="object"?e:Bg(),r=typeof e=="string"?e:t||"(default)",i=Yc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gE("firestore");s&&qD(i,...s)}return i}function sT(e){return e._firestoreClient||oT(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function oT(e){var t,n,r;const i=e._freezeSettings(),s=function(a,l,u,c){return new I4(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,nT(c.experimentalLongPollingOptions),c.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new $D(e._authCredentials,e._appCheckCredentials,e._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(t){this._byteString=t}static fromBase64String(t){try{return new js(ct.fromBase64String(t))}catch(n){throw new F(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new js(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new F(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new F(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new F(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return te(this._lat,t._lat)||te(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=/^__.*__$/;class QD{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new ni(t,this.data,this.fieldMask,n,this.fieldTransforms):new sl(t,this.data,n,this.fieldTransforms)}}class aT{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return new ni(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function lT(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class qm{constructor(t,n,r,i,s,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new qm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return Ic(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(lT(this.Iu)&&KD.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class YD{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Id(t)}pu(t,n,r,i=!1){return new qm({Iu:t,methodName:n,gu:r,path:Qe.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uT(e){const t=e._freezeSettings(),n=Id(e._databaseId);return new YD(e._databaseId,!!t.ignoreUndefinedProperties,n)}function XD(e,t,n,r,i,s={}){const o=e.pu(s.merge||s.mergeFields?2:0,t,n,i);Gm("Data must be an object, but it was:",o,r);const a=cT(r,o);let l,u;if(s.merge)l=new bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=wp(t,d,n);if(!o.contains(f))throw new F(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);hT(c,f)||c.push(f)}l=new bt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new QD(new It(a),l,u)}class Pd extends Hm{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Pd}}function JD(e,t,n,r){const i=e.pu(1,t,n);Gm("Data must be an object, but it was:",i,r);const s=[],o=It.empty();Ui(r,(l,u)=>{const c=Km(t,l,n);u=Oe(u);const d=i.Ru(c);if(u instanceof Pd)s.push(c);else{const f=xd(u,d);f!=null&&(s.push(c),o.set(c,f))}});const a=new bt(s);return new aT(o,a,i.fieldTransforms)}function ZD(e,t,n,r,i,s){const o=e.pu(1,t,n),a=[wp(t,r,n)],l=[i];if(s.length%2!=0)throw new F(A.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(wp(t,s[f])),l.push(s[f+1]);const u=[],c=It.empty();for(let f=a.length-1;f>=0;--f)if(!hT(u,a[f])){const p=a[f];let m=l[f];m=Oe(m);const _=o.Ru(p);if(m instanceof Pd)u.push(p);else{const w=xd(m,_);w!=null&&(u.push(p),c.set(p,w))}}const d=new bt(u);return new aT(c,d,o.fieldTransforms)}function xd(e,t){if(dT(e=Oe(e)))return Gm("Unsupported field value:",t,e),cT(e,t);if(e instanceof Hm)return function(r,i){if(!lT(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=xd(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(e,t)}return function(r,i){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return W4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:Ec(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ec(i.serializer,s)}}if(r instanceof Wm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof js)return{bytesValue:bI(i.serializer,r._byteString)};if(r instanceof Kt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:bm(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Bm(r)}`)}(e,t)}function cT(e,t){const n={};return oI(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ui(e,(r,i)=>{const s=xd(i,t.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dT(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Fe||e instanceof Wm||e instanceof js||e instanceof Kt||e instanceof Hm)}function Gm(e,t,n){if(!dT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Bm(n);throw r==="an object"?t.mu(e+" a custom object"):t.mu(e+" "+r)}}function wp(e,t,n){if((t=Oe(t))instanceof kd)return t._internalPath;if(typeof t=="string")return Km(e,t);throw Ic("Field path arguments must be of type string or ",e,!1,void 0,n)}const eL=new RegExp("[~\\*/\\[\\]]");function Km(e,t,n){if(t.search(eL)>=0)throw Ic(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new kd(...t.split("."))._internalPath}catch{throw Ic(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ic(e,t,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(A.INVALID_ARGUMENT,a+e+l)}function hT(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(t,n,r,i,s){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new tL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(pT("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tL extends fT{data(){return super.data()}}function pT(e,t){return typeof t=="string"?Km(e,t):t instanceof kd?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new F(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rL{convertValue(t,n="none"){switch(bi(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Ne(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Ni(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw H()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Ui(t,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(t){return new Wm(Ne(t.latitude),Ne(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Cm(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ca(t));default:return null}}convertTimestamp(t){const n=Hr(t);return new Fe(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=me.fromString(t);le(VI(r));const i=new Ra(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||Yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class sL extends fT{constructor(t,n,r,i,s,o){super(t,n,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Tu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(pT("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Tu extends sL{data(t={}){return super.data(t)}}class oL{constructor(t,n,r,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new zl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Tu(this._firestore,this._userDataWriter,r.key,r,new zl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Tu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new zl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Tu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new zl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:aL(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function aL(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class lL extends rL{constructor(t){super(),this.firestore=t}convertBytes(t){return new js(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function cl(e){e=Oi(e,Ad);const t=Oi(e.firestore,ul),n=sT(t),r=new lL(t);return nL(e._query),HD(n,e._query).then(i=>new oL(t,r,e,i))}function uL(e,t,n,...r){e=Oi(e,Kt);const i=Oi(e.firestore,ul),s=uT(i);let o;return o=typeof(t=Oe(t))=="string"||t instanceof kd?ZD(s,"updateDoc",e._key,t,n,r):JD(s,"updateDoc",e._key,t),Qm(i,[o.toMutation(e._key,ln.exists(!0))])}function Nd(e){return Qm(Oi(e.firestore,ul),[new Pm(e._key,ln.none())])}function dl(e,t){const n=Oi(e.firestore,ul),r=$s(e),i=iL(e.converter,t);return Qm(n,[XD(uT(e.firestore),"addDoc",r._key,i,e.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function Qm(e,t){return function(r,i){const s=new Fr;return r.asyncQueue.enqueueAndForget(async()=>kD(await zD(r),i,s)),s.promise}(sT(e),t)}(function(t,n=!0){(function(i){Xs=i})($i),Ai(new zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new ul(new u4(r.getProvider("auth-internal")),new f4(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new F(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Cn(C_,"4.4.0",t),Cn(C_,"4.4.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT="firebasestorage.googleapis.com",mT="storageBucket",cL=2*60*1e3,dL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends On{constructor(t,n,r=0){super(Nh(t),`Firebase Storage: ${n} (${Nh(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Re.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Nh(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ce;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ce||(Ce={}));function Nh(e){return"storage/"+e}function Ym(){const e="An unknown error occurred, please check the error payload for server response.";return new Re(Ce.UNKNOWN,e)}function hL(e){return new Re(Ce.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function fL(e){return new Re(Ce.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pL(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Re(Ce.UNAUTHENTICATED,e)}function gL(){return new Re(Ce.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function mL(e){return new Re(Ce.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function vL(){return new Re(Ce.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function yL(){return new Re(Ce.CANCELED,"User canceled the upload/download.")}function _L(e){return new Re(Ce.INVALID_URL,"Invalid URL '"+e+"'.")}function wL(e){return new Re(Ce.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function EL(){return new Re(Ce.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+mT+"' property when initializing the app?")}function SL(){return new Re(Ce.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function IL(){return new Re(Ce.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TL(e){return new Re(Ce.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ep(e){return new Re(Ce.INVALID_ARGUMENT,e)}function vT(){return new Re(Ce.APP_DELETED,"The Firebase app was deleted.")}function CL(e){return new Re(Ce.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bo(e,t){return new Re(Ce.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function go(e){throw new Re(Ce.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=Ot.makeFromUrl(t,n)}catch{return new Ot(t,"")}if(r.path==="")return r;throw wL(t)}static makeFromUrl(t,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},_=n===gT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<y.length;E++){const I=y[E],R=I.regex.exec(t);if(R){const C=R[I.indices.bucket];let T=R[I.indices.path];T||(T=""),r=new Ot(C,T),I.postModify(r);break}}if(r==null)throw _L(t);return r}}class RL{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AL(e,t,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,t.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,e(p,l())},w)}function f(){s&&clearTimeout(s)}function p(w,...g){if(u){f();return}if(w){f(),c.call(null,w,...g);return}if(l()||o){f(),c.call(null,w,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let m=!1;function _(w){m||(m=!0,f(),!u&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function kL(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(e){return e!==void 0}function xL(e){return typeof e=="object"&&!Array.isArray(e)}function Xm(e){return typeof e=="string"||e instanceof String}function i0(e){return Jm()&&e instanceof Blob}function Jm(){return typeof Blob<"u"}function s0(e,t,n,r){if(r<t)throw Ep(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw Ep(`Invalid value for '${e}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(e,t,n){let r=t;return n==null&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function yT(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _i;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(_i||(_i={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NL(e,t){const n=e>=500&&e<600,i=[408,429].indexOf(e)!==-1,s=t.indexOf(e)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(t,n,r,i,s,o,a,l,u,c,d,f=!0){this.url_=t,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const t=(r,i)=>{if(i){r(!1,new Bl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===_i.NO_ERROR,l=s.getStatus();if(!a||NL(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===_i.ABORT;r(!1,new Bl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Bl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());PL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Ym();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?vT():yL();o(l)}else{const l=vL();o(l)}};this.canceled_?n(!1,new Bl(!1,null,!0)):this.backoffId_=AL(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&kL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Bl{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function OL(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function DL(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function LL(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ML(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function VL(e,t,n,r,i,s,o=!0){const a=yT(e.urlParams),l=e.url+a,u=Object.assign({},e.headers);return LL(u,t),OL(u,n),DL(u,s),ML(u,r),new bL(l,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $L(...e){const t=FL();if(t!==void 0){const n=new t;for(let r=0;r<e.length;r++)n.append(e[r]);return n.getBlob()}else{if(Jm())return new Blob(e);throw new Re(Ce.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jL(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UL(e){if(typeof atob>"u")throw TL("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bh{constructor(t,n){this.data=t,this.contentType=n||null}}function zL(e,t){switch(e){case En.RAW:return new bh(_T(t));case En.BASE64:case En.BASE64URL:return new bh(wT(e,t));case En.DATA_URL:return new bh(HL(t),WL(t))}throw Ym()}function _T(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<e.length-1&&(e.charCodeAt(n+1)&64512)===56320))t.push(239,191,189);else{const s=r,o=e.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function BL(e){let t;try{t=decodeURIComponent(e)}catch{throw Bo(En.DATA_URL,"Malformed data URL.")}return _T(t)}function wT(e,t){switch(e){case En.BASE64:{const i=t.indexOf("-")!==-1,s=t.indexOf("_")!==-1;if(i||s)throw Bo(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case En.BASE64URL:{const i=t.indexOf("+")!==-1,s=t.indexOf("/")!==-1;if(i||s)throw Bo(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=UL(t)}catch(i){throw i.message.includes("polyfill")?i:Bo(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ET{constructor(t){this.base64=!1,this.contentType=null;const n=t.match(/^data:([^,]+)?,/);if(n===null)throw Bo(En.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function HL(e){const t=new ET(e);return t.base64?wT(En.BASE64,t.rest):BL(t.rest)}function WL(e){return new ET(e).contentType}function qL(e,t){return e.length>=t.length?e.substring(e.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(t,n){let r=0,i="";i0(t)?(this.data_=t,r=t.size,i=t.type):t instanceof ArrayBuffer?(n?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(n?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(t,n){if(i0(this.data_)){const r=this.data_,i=jL(r,t,n);return i===null?null:new _r(i)}else{const r=new Uint8Array(this.data_.buffer,t,n-t);return new _r(r,!0)}}static getBlob(...t){if(Jm()){const n=t.map(r=>r instanceof _r?r.data_:r);return new _r($L.apply(null,n))}else{const n=t.map(o=>Xm(o)?zL(En.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new _r(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ST(e){let t;try{t=JSON.parse(e)}catch{return null}return xL(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GL(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function KL(e,t){const n=t.split("/").filter(r=>r.length>0).join("/");return e.length===0?n:e+"/"+n}function IT(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QL(e,t){return t}class ht{constructor(t,n,r,i){this.server=t,this.local=n||t,this.writable=!!r,this.xform=i||QL}}let Hl=null;function YL(e){return!Xm(e)||e.length<2?e:IT(e)}function TT(){if(Hl)return Hl;const e=[];e.push(new ht("bucket")),e.push(new ht("generation")),e.push(new ht("metageneration")),e.push(new ht("name","fullPath",!0));function t(s,o){return YL(o)}const n=new ht("name");n.xform=t,e.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ht("size");return i.xform=r,e.push(i),e.push(new ht("timeCreated")),e.push(new ht("updated")),e.push(new ht("md5Hash",null,!0)),e.push(new ht("cacheControl",null,!0)),e.push(new ht("contentDisposition",null,!0)),e.push(new ht("contentEncoding",null,!0)),e.push(new ht("contentLanguage",null,!0)),e.push(new ht("contentType",null,!0)),e.push(new ht("metadata","customMetadata",!0)),Hl=e,Hl}function XL(e,t){function n(){const r=e.bucket,i=e.fullPath,s=new Ot(r,i);return t._makeStorageReference(s)}Object.defineProperty(e,"ref",{get:n})}function JL(e,t,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,t[o.server])}return XL(r,e),r}function CT(e,t,n){const r=ST(t);return r===null?null:JL(e,r,n)}function ZL(e,t,n,r){const i=ST(t);if(i===null||!Xm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=e.bucket,d=e.fullPath,f="/b/"+o(c)+"/o/"+o(d),p=Zm(f,n,r),m=yT({alt:"media",token:u});return p+m})[0]}function eM(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const s=t[i];s.writable&&(n[s.server]=e[s.local])}return JSON.stringify(n)}class RT{constructor(t,n,r,i){this.url=t,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(e){if(!e)throw Ym()}function tM(e,t){function n(r,i){const s=CT(e,i,t);return AT(s!==null),s}return n}function nM(e,t){function n(r,i){const s=CT(e,i,t);return AT(s!==null),ZL(s,i,e.host,e._protocol)}return n}function kT(e){function t(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=gL():i=pL():n.getStatus()===402?i=fL(e.bucket):n.getStatus()===403?i=mL(e.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return t}function rM(e){const t=kT(e);function n(r,i){let s=t(r,i);return r.getStatus()===404&&(s=hL(e.path)),s.serverResponse=i.serverResponse,s}return n}function iM(e,t,n){const r=t.fullServerUrl(),i=Zm(r,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new RT(i,s,nM(e,n),o);return a.errorHandler=rM(t),a}function sM(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}function oM(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=sM(null,t)),r}function aM(e,t,n,r,i){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let E=0;E<2;E++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=oM(t,r,i),c=eM(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=_r.getBlob(d,r,f);if(p===null)throw SL();const m={name:u.fullPath},_=Zm(s,e.host,e._protocol),w="POST",g=e.maxUploadRetryTime,v=new RT(_,w,tM(e,n),g);return v.urlParams=m,v.headers=o,v.body=p.uploadData(),v.errorHandler=kT(t),v}class lM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_i.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_i.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_i.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,n,r,i){if(this.sent_)throw go("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,t,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw go("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw go("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw go("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw go("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class uM extends lM{initXhr(){this.xhr_.responseType="text"}}function PT(){return new uM}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,n){this._service=t,n instanceof Ot?this._location=n:this._location=Ot.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new Di(t,n)}get root(){const t=new Ot(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IT(this._location.path)}get storage(){return this._service}get parent(){const t=GL(this._location.path);if(t===null)return null;const n=new Ot(this._location.bucket,t);return new Di(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw CL(t)}}function cM(e,t,n){e._throwIfRoot("uploadBytes");const r=aM(e.storage,e._location,TT(),new _r(t,!0),n);return e.storage.makeRequestWithTokens(r,PT).then(i=>({metadata:i,ref:e}))}function dM(e){e._throwIfRoot("getDownloadURL");const t=iM(e.storage,e._location,TT());return e.storage.makeRequestWithTokens(t,PT).then(n=>{if(n===null)throw IL();return n})}function hM(e,t){const n=KL(e._location.path,t),r=new Ot(e._location.bucket,n);return new Di(e.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(e){return/^[A-Za-z]+:\/\//.test(e)}function pM(e,t){return new Di(e,t)}function xT(e,t){if(e instanceof ev){const n=e;if(n._bucket==null)throw EL();const r=new Di(n,n._bucket);return t!=null?xT(r,t):r}else return t!==void 0?hM(e,t):e}function gM(e,t){if(t&&fM(t)){if(e instanceof ev)return pM(e,t);throw Ep("To use ref(service, url), the first argument must be a Storage instance.")}else return xT(e,t)}function o0(e,t){const n=t==null?void 0:t[mT];return n==null?null:Ot.makeFromBucketSpec(n,e)}function mM(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken=typeof i=="string"?i:yE(i,e.app.options.projectId))}class ev{constructor(t,n,r,i,s){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=gT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=cL,this._maxUploadRetryTime=dL,this._requests=new Set,i!=null?this._bucket=Ot.makeFromBucketSpec(i,this._host):this._bucket=o0(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Ot.makeFromBucketSpec(this._url,t):this._bucket=o0(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){s0("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){s0("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Di(this,t)}_makeRequest(t,n,r,i,s=!0){if(this._deleted)return new RL(vT());{const o=VL(t,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(t,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,i).getPromise()}}const a0="@firebase/storage",l0="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT="storage";function tv(e,t,n){return e=Oe(e),cM(e,t,n)}function nv(e){return e=Oe(e),dM(e)}function rv(e,t){return e=Oe(e),gM(e,t)}function iv(e=Bg(),t){e=Oe(e);const r=Yc(e,NT).getImmediate({identifier:t}),i=gE("storage");return i&&vM(r,...i),r}function vM(e,t,n,r={}){mM(e,t,n,r)}function yM(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new ev(n,r,i,t,$i)}function _M(){Ai(new zr(NT,yM,"PUBLIC").setMultipleInstances(!0)),Cn(a0,l0,""),Cn(a0,l0,"esm2017")}_M();const wM={apiKey:"AIzaSyAyirhYM-x6ltCHOzWidGVAy93PizO4tqk",authDomain:"news-portal-98068.firebaseapp.com",projectId:"news-portal-98068",storageBucket:"news-portal-98068.appspot.com",messagingSenderId:"910487241766",appId:"1:910487241766:web:3b9ca8d554d9a6cf80d2e7"},Bi=EE(wM),Qt=iT(Bi),EM=iv(Bi),SM=Zg(Bi),bT=S.createContext(),ri=()=>S.useContext(bT);function IM({children:e}){const[t,n]=S.useState([]),[r,i]=S.useState(!0);S.useEffect(()=>{(async()=>{try{const a=bn(Qt,"News"),l=await cl(a),u=[];l.forEach(c=>{u.push({id:c.id,...c.data()})}),n(u)}catch(a){console.error("Error fetching news data:",a)}finally{i(!1)}})()},[]);const s=o=>{n(o)};return h.jsx(bT.Provider,{value:{newsData:t,loading:r,updatedNews:s},children:e})}function fn(){return h.jsx("div",{className:"loader"})}function TM(){const{newsData:e,loading:t}=ri();if(t)return h.jsx(fn,{});const n=e.filter(r=>r.isBreaking);return h.jsx("div",{className:"breaking-container",children:n.length>0&&h.jsxs("div",{className:"breaking-section",children:[h.jsx("div",{className:"breakingLabel",children:h.jsx("h4",{children:"Breaking News"})}),h.jsx("div",{className:"marquee-container",children:h.jsx("div",{className:"marquee-content",children:n.map(r=>h.jsx("div",{className:"newsHeadings",children:h.jsx("h4",{children:r.heading})},r.id))})})]})})}function CM(){const[e,t]=S.useState(!1),n=()=>{t(!e)};return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"parent-nav",children:h.jsxs("div",{className:"navbar",children:[h.jsx("div",{className:"log",children:"Logo"}),h.jsx("div",{className:"nav-items",children:h.jsxs("ul",{className:e?"nav-items-open":"nav-items-closed",children:[h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal",children:"Home"})}),h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal/technology",children:"Technology"})}),h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal/entertainment",children:"Entertainment"})}),h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal/politics",children:"Politics"})}),h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal/education",children:"Education"})}),h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal/sport",children:"Sport"})})]})}),h.jsxs("div",{className:"hamburger",onClick:n,children:[h.jsx("div",{className:e?"line line1-open":"line"}),h.jsx("div",{className:e?"line line2-open":"line"}),h.jsx("div",{className:e?"line line3-open":"line"})]})]})}),h.jsx(TM,{})]})}const RM=({close:e})=>h.jsxs("div",{className:"career",children:[h.jsxs("div",{className:"careerContainer",children:[h.jsx("h1",{children:"Join Our team"}),h.jsx("p",{children:"opps currently there is no any vacancy"})]}),h.jsx("button",{onClick:e,className:"closeBtn",children:"Ok"})]});function OT(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=OT(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Tr(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=OT(e))&&(r&&(r+=" "),r+=t);return r}const xa=e=>typeof e=="number"&&!isNaN(e),wi=e=>typeof e=="string",Dt=e=>typeof e=="function",Cu=e=>wi(e)||Dt(e)?e:null,Sp=e=>S.isValidElement(e)||wi(e)||Dt(e)||xa(e);function AM(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function bd(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=e;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:f,playToast:p}=o;const m=r?`${t}--${l}`:t,_=r?`${n}--${l}`:n,w=S.useRef(0);return S.useLayoutEffect(()=>{const g=d.current,v=m.split(" "),y=E=>{E.target===d.current&&(p(),g.removeEventListener("animationend",y),g.removeEventListener("animationcancel",y),w.current===0&&E.type!=="animationcancel"&&g.classList.remove(...v))};g.classList.add(...v),g.addEventListener("animationend",y),g.addEventListener("animationcancel",y)},[]),S.useEffect(()=>{const g=d.current,v=()=>{g.removeEventListener("animationend",v),i?AM(g,c,s):c()};f||(u?v():(w.current=1,g.className+=` ${_}`,g.addEventListener("animationend",v)))},[f]),ne.createElement(ne.Fragment,null,a)}}function u0(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const pt=new Map;let Na=[];const Ip=new Set,kM=e=>Ip.forEach(t=>t(e)),DT=()=>pt.size>0;function LT(e,t){var n;if(t)return!((n=pt.get(t))==null||!n.isToastActive(e));let r=!1;return pt.forEach(i=>{i.isToastActive(e)&&(r=!0)}),r}function MT(e,t){Sp(e)&&(DT()||Na.push({content:e,options:t}),pt.forEach(n=>{n.buildToast(e,t)}))}function c0(e,t){pt.forEach(n=>{t!=null&&t!=null&&t.containerId?(t==null?void 0:t.containerId)===n.id&&n.toggle(e,t==null?void 0:t.id):n.toggle(e,t==null?void 0:t.id)})}function PM(e){const{subscribe:t,getSnapshot:n,setProps:r}=S.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const l=function(c,d,f){let p=1,m=0,_=[],w=[],g=[],v=d;const y=new Map,E=new Set,I=()=>{g=Array.from(y.values()),E.forEach(T=>T())},R=T=>{w=T==null?[]:w.filter(N=>N!==T),I()},C=T=>{const{toastId:N,onOpen:M,updateId:pe,children:_t}=T.props,zt=pe==null;T.staleId&&y.delete(T.staleId),y.set(N,T),w=[...w,T.props.toastId].filter(Zt=>Zt!==T.staleId),I(),f(u0(T,zt?"added":"updated")),zt&&Dt(M)&&M(S.isValidElement(_t)&&_t.props)};return{id:c,props:v,observe:T=>(E.add(T),()=>E.delete(T)),toggle:(T,N)=>{y.forEach(M=>{N!=null&&N!==M.props.toastId||Dt(M.toggle)&&M.toggle(T)})},removeToast:R,toasts:y,clearQueue:()=>{m-=_.length,_=[]},buildToast:(T,N)=>{if((ie=>{let{containerId:We,toastId:De,updateId:wt}=ie;const dt=We?We!==c:c!==1,pn=y.has(De)&&wt==null;return dt||pn})(N))return;const{toastId:M,updateId:pe,data:_t,staleId:zt,delay:Zt}=N,or=()=>{R(M)},ar=pe==null;ar&&m++;const Pt={...v,style:v.toastStyle,key:p++,...Object.fromEntries(Object.entries(N).filter(ie=>{let[We,De]=ie;return De!=null})),toastId:M,updateId:pe,data:_t,closeToast:or,isIn:!1,className:Cu(N.className||v.toastClassName),bodyClassName:Cu(N.bodyClassName||v.bodyClassName),progressClassName:Cu(N.progressClassName||v.progressClassName),autoClose:!N.isLoading&&(b=N.autoClose,z=v.autoClose,b===!1||xa(b)&&b>0?b:z),deleteToast(){const ie=y.get(M),{onClose:We,children:De}=ie.props;Dt(We)&&We(S.isValidElement(De)&&De.props),f(u0(ie,"removed")),y.delete(M),m--,m<0&&(m=0),_.length>0?C(_.shift()):I()}};var b,z;Pt.closeButton=v.closeButton,N.closeButton===!1||Sp(N.closeButton)?Pt.closeButton=N.closeButton:N.closeButton===!0&&(Pt.closeButton=!Sp(v.closeButton)||v.closeButton);let W=T;S.isValidElement(T)&&!wi(T.type)?W=S.cloneElement(T,{closeToast:or,toastProps:Pt,data:_t}):Dt(T)&&(W=T({closeToast:or,toastProps:Pt,data:_t}));const re={content:W,props:Pt,staleId:zt};v.limit&&v.limit>0&&m>v.limit&&ar?_.push(re):xa(Zt)?setTimeout(()=>{C(re)},Zt):C(re)},setProps(T){v=T},setToggle:(T,N)=>{y.get(T).toggle=N},isToastActive:T=>w.some(N=>N===T),getSnapshot:()=>v.newestOnTop?g.reverse():g}}(o,s,kM);pt.set(o,l);const u=l.observe(a);return Na.forEach(c=>MT(c.content,c.options)),Na=[],()=>{u(),pt.delete(o)}},setProps(a){var l;(l=pt.get(o))==null||l.setProps(a)},getSnapshot(){var a;return(a=pt.get(o))==null?void 0:a.getSnapshot()}}}(e)).current;r(e);const i=S.useSyncExternalStore(t,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(a=>{const{position:l}=a.props;o.has(l)||o.set(l,[]),o.get(l).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:LT,count:i==null?void 0:i.length}}function xM(e){const[t,n]=S.useState(!1),[r,i]=S.useState(!1),s=S.useRef(null),o=S.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:u,onClick:c,closeOnClick:d}=e;var f,p;function m(){n(!0)}function _(){n(!1)}function w(y){const E=s.current;o.canDrag&&E&&(o.didMove=!0,t&&_(),o.delta=e.draggableDirection==="x"?y.clientX-o.start:y.clientY-o.start,o.start!==y.clientX&&(o.canCloseOnClick=!1),E.style.transform=`translate3d(${e.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,E.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function g(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",g);const y=s.current;if(o.canDrag&&o.didMove&&y){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),e.closeToast(),void e.collapseAll();y.style.transition="transform 0.2s, opacity 0.2s",y.style.removeProperty("transform"),y.style.removeProperty("opacity")}}(p=pt.get((f={id:e.toastId,containerId:e.containerId,fn:n}).containerId||1))==null||p.setToggle(f.id,f.fn),S.useEffect(()=>{if(e.pauseOnFocusLoss)return document.hasFocus()||_(),window.addEventListener("focus",m),window.addEventListener("blur",_),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",_)}},[e.pauseOnFocusLoss]);const v={onPointerDown:function(y){if(e.draggable===!0||e.draggable===y.pointerType){o.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",g);const E=s.current;o.canCloseOnClick=!0,o.canDrag=!0,E.style.transition="none",e.draggableDirection==="x"?(o.start=y.clientX,o.removalDistance=E.offsetWidth*(e.draggablePercent/100)):(o.start=y.clientY,o.removalDistance=E.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent)/100)}},onPointerUp:function(y){const{top:E,bottom:I,left:R,right:C}=s.current.getBoundingClientRect();y.nativeEvent.type!=="touchend"&&e.pauseOnHover&&y.clientX>=R&&y.clientX<=C&&y.clientY>=E&&y.clientY<=I?_():m()}};return a&&l&&(v.onMouseEnter=_,e.stacked||(v.onMouseLeave=m)),d&&(v.onClick=y=>{c&&c(y),o.canCloseOnClick&&u()}),{playToast:m,pauseToast:_,isRunning:t,preventExitTransition:r,toastRef:s,eventHandlers:v}}function NM(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:f}=e;const p=s||l&&u===0,m={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused"};l&&(m.transform=`scaleX(${u})`);const _=Tr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),w=Dt(o)?o({rtl:c,type:i,defaultClassName:_}):Tr(_,o),g={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}};return ne.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":p},ne.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${i}`}),ne.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:w,style:m,...g}))}let bM=1;const VT=()=>""+bM++;function OM(e){return e&&(wi(e.toastId)||xa(e.toastId))?e.toastId:VT()}function Ho(e,t){return MT(e,t),t.toastId}function Tc(e,t){return{...t,type:t&&t.type||e,toastId:OM(t)}}function Wl(e){return(t,n)=>Ho(t,Tc(e,n))}function $(e,t){return Ho(e,Tc("default",t))}$.loading=(e,t)=>Ho(e,Tc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),$.promise=function(e,t,n){let r,{pending:i,error:s,success:o}=t;i&&(r=wi(i)?$.loading(i,n):$.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,f)=>{if(d==null)return void $.dismiss(r);const p={type:c,...a,...n,data:f},m=wi(d)?{render:d}:d;return r?$.update(r,{...p,...m}):$(m.render,{...p,...m}),f},u=Dt(e)?e():e;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},$.success=Wl("success"),$.info=Wl("info"),$.error=Wl("error"),$.warning=Wl("warning"),$.warn=$.warning,$.dark=(e,t)=>Ho(e,Tc("default",{theme:"dark",...t})),$.dismiss=function(e){(function(t){var n;if(DT()){if(t==null||wi(n=t)||xa(n))pt.forEach(r=>{r.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){const r=pt.get(t.containerId);r?r.removeToast(t.id):pt.forEach(i=>{i.removeToast(t.id)})}}else Na=Na.filter(r=>t!=null&&r.options.toastId!==t)})(e)},$.clearWaitingQueue=function(e){e===void 0&&(e={}),pt.forEach(t=>{!t.props.limit||e.containerId&&t.id!==e.containerId||t.clearQueue()})},$.isActive=LT,$.update=function(e,t){t===void 0&&(t={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=pt.get(o||1))==null?void 0:s.toasts.get(r)})(e,t);if(n){const{props:r,content:i}=n,s={delay:100,...r,...t,toastId:t.toastId||e,updateId:VT()};s.toastId!==e&&(s.staleId=e);const o=s.render||i;delete s.render,Ho(o,s)}},$.done=e=>{$.update(e,{progress:1})},$.onChange=function(e){return Ip.add(e),()=>{Ip.delete(e)}},$.play=e=>c0(!0,e),$.pause=e=>c0(!1,e);const DM=typeof window<"u"?S.useLayoutEffect:S.useEffect,ql=e=>{let{theme:t,type:n,isLoading:r,...i}=e;return ne.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Oh={info:function(e){return ne.createElement(ql,{...e},ne.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return ne.createElement(ql,{...e},ne.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return ne.createElement(ql,{...e},ne.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return ne.createElement(ql,{...e},ne.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ne.createElement("div",{className:"Toastify__spinner"})}},LM=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=xM(e),{closeButton:o,children:a,autoClose:l,onClick:u,type:c,hideProgressBar:d,closeToast:f,transition:p,position:m,className:_,style:w,bodyClassName:g,bodyStyle:v,progressClassName:y,progressStyle:E,updateId:I,role:R,progress:C,rtl:T,toastId:N,deleteToast:M,isIn:pe,isLoading:_t,closeOnClick:zt,theme:Zt}=e,or=Tr("Toastify__toast",`Toastify__toast-theme--${Zt}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":zt}),ar=Dt(_)?_({rtl:T,position:m,type:c,defaultClassName:or}):Tr(or,_),Pt=function(re){let{theme:ie,type:We,isLoading:De,icon:wt}=re,dt=null;const pn={theme:ie,type:We};return wt===!1||(Dt(wt)?dt=wt({...pn,isLoading:De}):S.isValidElement(wt)?dt=S.cloneElement(wt,pn):De?dt=Oh.spinner():(PC=>PC in Oh)(We)&&(dt=Oh[We](pn))),dt}(e),b=!!C||!l,z={closeToast:f,type:c,theme:Zt};let W=null;return o===!1||(W=Dt(o)?o(z):S.isValidElement(o)?S.cloneElement(o,z):function(re){let{closeToast:ie,theme:We,ariaLabel:De="close"}=re;return ne.createElement("button",{className:`Toastify__close-button Toastify__close-button--${We}`,type:"button",onClick:wt=>{wt.stopPropagation(),ie(wt)},"aria-label":De},ne.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ne.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(z)),ne.createElement(p,{isIn:pe,done:M,position:m,preventExitTransition:n,nodeRef:r,playToast:s},ne.createElement("div",{id:N,onClick:u,"data-in":pe,className:ar,...i,style:w,ref:r},ne.createElement("div",{...pe&&{role:R},className:Dt(g)?g({type:c}):Tr("Toastify__toast-body",g),style:v},Pt!=null&&ne.createElement("div",{className:Tr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!_t})},Pt),ne.createElement("div",null,a)),W,ne.createElement(NM,{...I&&!b?{key:`pb-${I}`}:{},rtl:T,theme:Zt,delay:l,isRunning:t,isIn:pe,closeToast:f,hide:d,type:c,style:E,className:y,controlledProgress:b,progress:C||0})))},Od=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},MM=bd(Od("bounce",!0));bd(Od("slide",!0));bd(Od("zoom"));bd(Od("flip"));const VM={position:"top-right",transition:MM,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function FT(e){let t={...VM,...e};const n=e.stacked,[r,i]=S.useState(!0),s=S.useRef(null),{getToastToRender:o,isToastActive:a,count:l}=PM(t),{className:u,style:c,rtl:d,containerId:f}=t;function p(_){const w=Tr("Toastify__toast-container",`Toastify__toast-container--${_}`,{"Toastify__toast-container--rtl":d});return Dt(u)?u({position:_,rtl:d,defaultClassName:w}):Tr(w,Cu(u))}function m(){n&&(i(!0),$.play())}return DM(()=>{if(n){var _;const w=s.current.querySelectorAll('[data-in="true"]'),g=12,v=(_=t.position)==null?void 0:_.includes("top");let y=0,E=0;Array.from(w).reverse().forEach((I,R)=>{const C=I;C.classList.add("Toastify__toast--stacked"),R>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=v?"top":"bot");const T=y*(r?.2:1)+(r?0:g*R);C.style.setProperty("--y",`${v?T:-1*T}px`),C.style.setProperty("--g",`${g}`),C.style.setProperty("--s",""+(1-(r?E:0))),y+=C.offsetHeight,E+=.025})}},[r,l,n]),ne.createElement("div",{ref:s,className:"Toastify",id:f,onMouseEnter:()=>{n&&(i(!1),$.pause())},onMouseLeave:m},o((_,w)=>{const g=w.length?{...c}:{...c,pointerEvents:"none"};return ne.createElement("div",{className:p(_),style:g,key:`container-${_}`},w.map(v=>{let{content:y,props:E}=v;return ne.createElement(LM,{...E,stacked:n,collapseAll:m,isIn:a(E.toastId,E.containerId),style:E.style,key:`toast-${E.key}`},y)}))}))}const $T=({close:e})=>{const[t,n]=S.useState(!1),[r,i]=S.useState({name:"",email:"",suggestion:""}),s=a=>{const{name:l,value:u}=a.target;i({...r,[l]:u})},o=async a=>{a.preventDefault();try{n(!0);const l=await dl(bn(Qt,"suggestionForm"),r);$.success("Suggestion sent"),i({name:"",email:"",suggestion:""}),e()}catch(l){$.error(`${l}`)}finally{n(!1)}};return h.jsxs("div",{className:"suggestion-container",children:[h.jsx("h2",{children:"Thank you for your suggestion!"}),h.jsx("p",{children:"We're always looking for ways to improve. Your feedback is valuable to us."}),h.jsx("p",{children:"Please feel free to share your thoughts and ideas."}),h.jsxs("form",{onSubmit:o,children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"name",children:"Name:"}),h.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:s,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"email",children:"Email:"}),h.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:s,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"suggestion",children:"Suggestion:"}),h.jsx("textarea",{id:"suggestion",name:"suggestion",value:r.suggestion,onChange:s,required:!0})]}),h.jsx("button",{type:"submit",disabled:t,children:"Submit"}),h.jsx("button",{onClick:e,className:"closeBtn",children:"Close"})]})]})},FM=({close:e})=>{const[t,n]=S.useState(!1),r={name:"",email:"",phone:"",message:""},[i,s]=S.useState(r),o=l=>{const{name:u,value:c}=l.target;s({...i,[u]:c})},a=async l=>{l.preventDefault();try{n(!0);const u=await dl(bn(Qt,"contactForm"),i);$.success("Contact details sent"),e(),s(r)}catch(u){$.error(`${u.message}`)}finally{n(!0)}};return h.jsxs("div",{className:"contact-container",children:[h.jsx("h2",{children:"Contact Us"}),h.jsxs("form",{onSubmit:a,children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"name",children:"Name:"}),h.jsx("input",{type:"text",id:"name",name:"name",value:i.name,onChange:o,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"email",children:"Email:"}),h.jsx("input",{type:"email",id:"email",name:"email",value:i.email,onChange:o,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"phone",children:"Phone"}),h.jsx("input",{type:"tel",id:"phone",name:"phone",value:i.phone,onChange:o})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"message",children:"Message:"}),h.jsx("textarea",{id:"message",name:"message",value:i.message,onChange:o,required:!0})]}),h.jsx("button",{type:"submit",disabled:t,children:"Submit"})]}),h.jsx("button",{onClick:e,className:"closeBtn",children:"Close"})]})};function $M(){const e=S.useRef(),t=S.useRef(),n=S.useRef(),r=()=>{e.current.showModal()},i=()=>{e.current.close()};return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"parentFooter",children:h.jsxs("div",{className:"footer",children:[h.jsxs("div",{className:"footerOne",children:[h.jsx("h3",{children:"NewsWave"}),h.jsx("span",{children:"Newswave: Surfing the currents of breaking news and trending stories, providing a dynamic and comprehensive wave of information daily."})]}),h.jsxs("div",{className:"footerTwo",children:[h.jsx("h3",{children:"Quick Links"}),h.jsxs("ul",{children:[h.jsx("li",{children:"Advertisement"}),h.jsx("li",{onClick:()=>{t.current.showModal()},children:"Suggestion"}),h.jsx("li",{children:h.jsx(Qc,{to:"/News_Portal/haveNews",children:"Have News"})}),h.jsx("li",{onClick:()=>{n.current.showModal()},children:"Contact"}),h.jsx("li",{onClick:r,children:"Career"})]})]}),h.jsxs("div",{className:"footerThree",children:[h.jsx("h3",{children:"Contact"}),h.jsx("span",{children:"NewsWave Media"}),h.jsx("span",{children:"Link-road Birgunj"}),h.jsx("span",{children:"Nepal"}),h.jsx("span",{children:"+9779806814329"})]})]})}),h.jsx("dialog",{ref:e,children:h.jsx(RM,{close:i})}),h.jsx("dialog",{ref:t,children:h.jsx($T,{close:()=>{t.current.close()}})}),h.jsx("dialog",{ref:n,children:h.jsx(FM,{close:()=>{n.current.close()}})})]})}function kt({children:e}){return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"nav",children:h.jsx(CM,{})}),h.jsx("div",{className:"content",children:e}),h.jsx($M,{})]})}function eo({news:e,onClick:t}){return h.jsx("div",{className:"hero",style:{background:`url(${e.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},onClick:t,children:h.jsxs("div",{className:"hero-content",children:[h.jsx("h4",{children:e.heading}),h.jsx("p",{children:e.content})]})})}function d0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?d0(Object(n),!0).forEach(function(r){$e(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Cc(e){"@babel/helpers - typeof";return Cc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cc(e)}function jM(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h0(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function UM(e,t,n){return t&&h0(e.prototype,t),n&&h0(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sv(e,t){return BM(e)||WM(e,t)||jT(e,t)||GM()}function hl(e){return zM(e)||HM(e)||jT(e)||qM()}function zM(e){if(Array.isArray(e))return Tp(e)}function BM(e){if(Array.isArray(e))return e}function HM(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function WM(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(e);!(i=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function jT(e,t){if(e){if(typeof e=="string")return Tp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tp(e,t)}}function Tp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var f0=function(){},ov={},UT={},zT=null,BT={mark:f0,measure:f0};try{typeof window<"u"&&(ov=window),typeof document<"u"&&(UT=document),typeof MutationObserver<"u"&&(zT=MutationObserver),typeof performance<"u"&&(BT=performance)}catch{}var KM=ov.navigator||{},p0=KM.userAgent,g0=p0===void 0?"":p0,qr=ov,fe=UT,m0=zT,Gl=BT;qr.document;var sr=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",HT=~g0.indexOf("MSIE")||~g0.indexOf("Trident/"),Kl,Ql,Yl,Xl,Jl,Jn="___FONT_AWESOME___",Cp=16,WT="fa",qT="svg-inline--fa",Li="data-fa-i2svg",Rp="data-fa-pseudo-element",QM="data-fa-pseudo-element-pending",av="data-prefix",lv="data-icon",v0="fontawesome-i2svg",YM="async",XM=["HTML","HEAD","STYLE","SCRIPT"],GT=function(){try{return!0}catch{return!1}}(),ce="classic",Ie="sharp",uv=[ce,Ie];function fl(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ce]}})}var ba=fl((Kl={},$e(Kl,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),$e(Kl,Ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Kl)),Oa=fl((Ql={},$e(Ql,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),$e(Ql,Ie,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Ql)),Da=fl((Yl={},$e(Yl,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),$e(Yl,Ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Yl)),JM=fl((Xl={},$e(Xl,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),$e(Xl,Ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Xl)),ZM=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,KT="fa-layers-text",eV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,tV=fl((Jl={},$e(Jl,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),$e(Jl,Ie,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Jl)),QT=[1,2,3,4,5,6,7,8,9,10],nV=QT.concat([11,12,13,14,15,16,17,18,19,20]),rV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},La=new Set;Object.keys(Oa[ce]).map(La.add.bind(La));Object.keys(Oa[Ie]).map(La.add.bind(La));var iV=[].concat(uv,hl(La),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fi.GROUP,fi.SWAP_OPACITY,fi.PRIMARY,fi.SECONDARY]).concat(QT.map(function(e){return"".concat(e,"x")})).concat(nV.map(function(e){return"w-".concat(e)})),Wo=qr.FontAwesomeConfig||{};function sV(e){var t=fe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function oV(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(fe&&typeof fe.querySelector=="function"){var aV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];aV.forEach(function(e){var t=sv(e,2),n=t[0],r=t[1],i=oV(sV(n));i!=null&&(Wo[r]=i)})}var YT={styleDefault:"solid",familyDefault:"classic",cssPrefix:WT,replacementClass:qT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wo.familyPrefix&&(Wo.cssPrefix=Wo.familyPrefix);var Us=O(O({},YT),Wo);Us.autoReplaceSvg||(Us.observeMutations=!1);var V={};Object.keys(YT).forEach(function(e){Object.defineProperty(V,e,{enumerable:!0,set:function(n){Us[e]=n,qo.forEach(function(r){return r(V)})},get:function(){return Us[e]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(t){Us.cssPrefix=t,qo.forEach(function(n){return n(V)})},get:function(){return Us.cssPrefix}});qr.FontAwesomeConfig=V;var qo=[];function lV(e){return qo.push(e),function(){qo.splice(qo.indexOf(e),1)}}var cr=Cp,Sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function uV(e){if(!(!e||!sr)){var t=fe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return fe.head.insertBefore(t,r),e}}var cV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ma(){for(var e=12,t="";e-- >0;)t+=cV[Math.random()*62|0];return t}function to(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function cv(e){return e.classList?to(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function XT(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function dV(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(XT(e[n]),'" ')},"").trim()}function Dd(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function dv(e){return e.size!==Sn.size||e.x!==Sn.x||e.y!==Sn.y||e.rotate!==Sn.rotate||e.flipX||e.flipY}function hV(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),a="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function fV(e){var t=e.transform,n=e.width,r=n===void 0?Cp:n,i=e.height,s=i===void 0?Cp:i,o=e.startCentered,a=o===void 0?!1:o,l="";return a&&HT?l+="translate(".concat(t.x/cr-r/2,"em, ").concat(t.y/cr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(t.x/cr,"em), calc(-50% + ").concat(t.y/cr,"em)) "):l+="translate(".concat(t.x/cr,"em, ").concat(t.y/cr,"em) "),l+="scale(".concat(t.size/cr*(t.flipX?-1:1),", ").concat(t.size/cr*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var pV=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function JT(){var e=WT,t=qT,n=V.cssPrefix,r=V.replacementClass,i=pV;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),a=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var y0=!1;function Dh(){V.autoAddCss&&!y0&&(uV(JT()),y0=!0)}var gV={mixout:function(){return{dom:{css:JT,insertCss:Dh}}},hooks:function(){return{beforeDOMElementCreation:function(){Dh()},beforeI2svg:function(){Dh()}}}},Zn=qr||{};Zn[Jn]||(Zn[Jn]={});Zn[Jn].styles||(Zn[Jn].styles={});Zn[Jn].hooks||(Zn[Jn].hooks={});Zn[Jn].shims||(Zn[Jn].shims=[]);var sn=Zn[Jn],ZT=[],mV=function e(){fe.removeEventListener("DOMContentLoaded",e),Rc=1,ZT.map(function(t){return t()})},Rc=!1;sr&&(Rc=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),Rc||fe.addEventListener("DOMContentLoaded",mV));function vV(e){sr&&(Rc?setTimeout(e,0):ZT.push(e))}function pl(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?XT(e):"<".concat(t," ").concat(dV(r),">").concat(s.map(pl).join(""),"</").concat(t,">")}function _0(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var yV=function(t,n){return function(r,i,s,o){return t.call(n,r,i,s,o)}},Lh=function(t,n,r,i){var s=Object.keys(t),o=s.length,a=i!==void 0?yV(n,i):n,l,u,c;for(r===void 0?(l=1,c=t[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,t[u],u,t);return c};function _V(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ap(e){var t=_V(e);return t.length===1?t[0].toString(16):null}function wV(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function w0(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function kp(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=w0(t);typeof sn.hooks.addPack=="function"&&!i?sn.hooks.addPack(e,w0(t)):sn.styles[e]=O(O({},sn.styles[e]||{}),s),e==="fas"&&kp("fa",t)}var Zl,eu,tu,us=sn.styles,EV=sn.shims,SV=(Zl={},$e(Zl,ce,Object.values(Da[ce])),$e(Zl,Ie,Object.values(Da[Ie])),Zl),hv=null,eC={},tC={},nC={},rC={},iC={},IV=(eu={},$e(eu,ce,Object.keys(ba[ce])),$e(eu,Ie,Object.keys(ba[Ie])),eu);function TV(e){return~iV.indexOf(e)}function CV(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!TV(i)?i:null}var sC=function(){var t=function(s){return Lh(us,function(o,a,l){return o[l]=Lh(a,s,{}),o},{})};eC=t(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),tC=t(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),iC=t(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in us||V.autoFetchSvg,r=Lh(EV,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});nC=r.names,rC=r.unicodes,hv=Ld(V.styleDefault,{family:V.familyDefault})};lV(function(e){hv=Ld(e.styleDefault,{family:V.familyDefault})});sC();function fv(e,t){return(eC[e]||{})[t]}function RV(e,t){return(tC[e]||{})[t]}function pi(e,t){return(iC[e]||{})[t]}function oC(e){return nC[e]||{prefix:null,iconName:null}}function AV(e){var t=rC[e],n=fv("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gr(){return hv}var pv=function(){return{prefix:null,iconName:null,rest:[]}};function Ld(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ce:n,i=ba[r][e],s=Oa[r][e]||Oa[r][i],o=e in sn.styles?e:null;return s||o||null}var E0=(tu={},$e(tu,ce,Object.keys(Da[ce])),$e(tu,Ie,Object.keys(Da[Ie])),tu);function Md(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},$e(t,ce,"".concat(V.cssPrefix,"-").concat(ce)),$e(t,Ie,"".concat(V.cssPrefix,"-").concat(Ie)),t),o=null,a=ce;(e.includes(s[ce])||e.some(function(u){return E0[ce].includes(u)}))&&(a=ce),(e.includes(s[Ie])||e.some(function(u){return E0[Ie].includes(u)}))&&(a=Ie);var l=e.reduce(function(u,c){var d=CV(V.cssPrefix,c);if(us[c]?(c=SV[a].includes(c)?JM[a][c]:c,o=c,u.prefix=c):IV[a].indexOf(c)>-1?(o=c,u.prefix=Ld(c,{family:a})):d?u.iconName=d:c!==V.replacementClass&&c!==s[ce]&&c!==s[Ie]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?oC(u.iconName):{},p=pi(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||p||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!us.far&&us.fas&&!V.autoFetchSvg&&(u.prefix="fas")}return u},pv());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ie&&(us.fass||V.autoFetchSvg)&&(l.prefix="fass",l.iconName=pi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Gr()||"fas"),l}var kV=function(){function e(){jM(this,e),this.definitions={}}return UM(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=O(O({},n.definitions[a]||{}),o[a]),kp(a,o[a]);var l=Da[ce][a];l&&kp(l,o[a]),sC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),e}(),S0=[],cs={},Is={},PV=Object.keys(Is);function xV(e,t){var n=t.mixoutsTo;return S0=e,cs={},Object.keys(Is).forEach(function(r){PV.indexOf(r)===-1&&delete Is[r]}),S0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Cc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){cs[o]||(cs[o]=[]),cs[o].push(s[o])})}r.provides&&r.provides(Is)}),n}function Pp(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=cs[e]||[];return s.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function Mi(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=cs[e]||[];i.forEach(function(s){s.apply(null,n)})}function er(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Is[e]?Is[e].apply(null,t):void 0}function xp(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Gr();if(t)return t=pi(n,t)||t,_0(aC.definitions,n,t)||_0(sn.styles,n,t)}var aC=new kV,NV=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Mi("noAuto")},bV={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return sr?(Mi("beforeI2svg",t),er("pseudoElements2svg",t),er("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,vV(function(){DV({autoReplaceSvgRoot:n}),Mi("watch",t)})}},OV={icon:function(t){if(t===null)return null;if(Cc(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:pi(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Ld(t[0]);return{prefix:r,iconName:pi(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(V.cssPrefix,"-"))>-1||t.match(ZM))){var i=Md(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Gr(),iconName:pi(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Gr();return{prefix:s,iconName:pi(s,t)||t}}}},Ut={noAuto:NV,config:V,dom:bV,parse:OV,library:aC,findIconDefinition:xp,toHtml:pl},DV=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(sn.styles).length>0||V.autoFetchSvg)&&sr&&V.autoReplaceSvg&&Ut.dom.i2svg({node:r})};function Vd(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return pl(r)})}}),Object.defineProperty(e,"node",{get:function(){if(sr){var r=fe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function LV(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,o=e.transform;if(dv(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Dd(O(O({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function MV(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,o=s===!0?"".concat(t,"-").concat(V.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function gv(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,o=e.transform,a=e.symbol,l=e.title,u=e.maskId,c=e.titleId,d=e.extra,f=e.watchable,p=f===void 0?!1:f,m=r.found?r:n,_=m.width,w=m.height,g=i==="fak",v=[V.replacementClass,s?"".concat(V.cssPrefix,"-").concat(s):""].filter(function(N){return d.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(d.classes).join(" "),y={children:[],attributes:O(O({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:v,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(w)})},E=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/w*16*.0625,"em")}:{};p&&(y.attributes[Li]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Ma())},children:[l]}),delete y.attributes.title);var I=O(O({},y),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:O(O({},E),d.styles)}),R=r.found&&n.found?er("generateAbstractMask",I)||{children:[],attributes:{}}:er("generateAbstractIcon",I)||{children:[],attributes:{}},C=R.children,T=R.attributes;return I.children=C,I.attributes=T,a?MV(I):LV(I)}function I0(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,o=e.extra,a=e.watchable,l=a===void 0?!1:a,u=O(O(O({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Li]="");var c=O({},o.styles);dv(i)&&(c.transform=fV({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Dd(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[t]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function VV(e){var t=e.content,n=e.title,r=e.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Dd(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Mh=sn.styles;function Np(e){var t=e[0],n=e[1],r=e.slice(4),i=sv(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(fi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(fi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(fi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:o}}var FV={found:!1,width:512,height:512};function $V(e,t){!GT&&!V.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function bp(e,t){var n=t;return t==="fa"&&V.styleDefault!==null&&(t=Gr()),new Promise(function(r,i){if(er("missingIconAbstract"),n==="fa"){var s=oC(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Mh[t]&&Mh[t][e]){var o=Mh[t][e];return r(Np(o))}$V(e,t),r(O(O({},FV),{},{icon:V.showMissingIcons&&e?er("missingIconAbstract")||{}:{}}))})}var T0=function(){},Op=V.measurePerformance&&Gl&&Gl.mark&&Gl.measure?Gl:{mark:T0,measure:T0},Ao='FA "6.5.1"',jV=function(t){return Op.mark("".concat(Ao," ").concat(t," begins")),function(){return lC(t)}},lC=function(t){Op.mark("".concat(Ao," ").concat(t," ends")),Op.measure("".concat(Ao," ").concat(t),"".concat(Ao," ").concat(t," begins"),"".concat(Ao," ").concat(t," ends"))},mv={begin:jV,end:lC},Ru=function(){};function C0(e){var t=e.getAttribute?e.getAttribute(Li):null;return typeof t=="string"}function UV(e){var t=e.getAttribute?e.getAttribute(av):null,n=e.getAttribute?e.getAttribute(lv):null;return t&&n}function zV(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(V.replacementClass)}function BV(){if(V.autoReplaceSvg===!0)return Au.replace;var e=Au[V.autoReplaceSvg];return e||Au.replace}function HV(e){return fe.createElementNS("http://www.w3.org/2000/svg",e)}function WV(e){return fe.createElement(e)}function uC(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?HV:WV:n;if(typeof e=="string")return fe.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var s=e.children||[];return s.forEach(function(o){i.appendChild(uC(o,{ceFn:r}))}),i}function qV(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Au={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(uC(i),n)}),n.getAttribute(Li)===null&&V.keepOriginalSource){var r=fe.createComment(qV(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~cv(n).indexOf(V.replacementClass))return Au.replace(t);var i=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===V.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return pl(a)}).join(`
`);n.setAttribute(Li,""),n.innerHTML=o}};function R0(e){e()}function cC(e,t){var n=typeof t=="function"?t:Ru;if(e.length===0)n();else{var r=R0;V.mutateApproach===YM&&(r=qr.requestAnimationFrame||R0),r(function(){var i=BV(),s=mv.begin("mutate");e.map(i),s(),n()})}}var vv=!1;function dC(){vv=!0}function Dp(){vv=!1}var Ac=null;function A0(e){if(m0&&V.observeMutations){var t=e.treeCallback,n=t===void 0?Ru:t,r=e.nodeCallback,i=r===void 0?Ru:r,s=e.pseudoElementsCallback,o=s===void 0?Ru:s,a=e.observeMutationsRoot,l=a===void 0?fe:a;Ac=new m0(function(u){if(!vv){var c=Gr();to(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!C0(d.addedNodes[0])&&(V.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&V.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&C0(d.target)&&~rV.indexOf(d.attributeName))if(d.attributeName==="class"&&UV(d.target)){var f=Md(cv(d.target)),p=f.prefix,m=f.iconName;d.target.setAttribute(av,p||c),m&&d.target.setAttribute(lv,m)}else zV(d.target)&&i(d.target)})}}),sr&&Ac.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function GV(){Ac&&Ac.disconnect()}function KV(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function QV(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Md(cv(e));return i.prefix||(i.prefix=Gr()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=RV(i.prefix,e.innerText)||fv(i.prefix,Ap(e.innerText))),!i.iconName&&V.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function YV(e){var t=to(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return V.autoA11y&&(n?t["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||Ma()):(t["aria-hidden"]="true",t.focusable="false")),t}function XV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=QV(e),r=n.iconName,i=n.prefix,s=n.rest,o=YV(e),a=Pp("parseNodeAttributes",{},e),l=t.styleParser?KV(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:Sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var JV=sn.styles;function hC(e){var t=V.autoReplaceSvg==="nest"?k0(e,{styleParser:!1}):k0(e);return~t.extra.classes.indexOf(KT)?er("generateLayersText",e,t):er("generateSvgReplacementMutation",e,t)}var Kr=new Set;uv.map(function(e){Kr.add("fa-".concat(e))});Object.keys(ba[ce]).map(Kr.add.bind(Kr));Object.keys(ba[Ie]).map(Kr.add.bind(Kr));Kr=hl(Kr);function P0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!sr)return Promise.resolve();var n=fe.documentElement.classList,r=function(d){return n.add("".concat(v0,"-").concat(d))},i=function(d){return n.remove("".concat(v0,"-").concat(d))},s=V.autoFetchSvg?Kr:uv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(JV));s.includes("fa")||s.push("fa");var o=[".".concat(KT,":not([").concat(Li,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Li,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=to(e.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=mv.begin("onTree"),u=a.reduce(function(c,d){try{var f=hC(d);f&&c.push(f)}catch(p){GT||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){cC(f,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(f){l(),d(f)})})}function ZV(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hC(e).then(function(n){n&&cC([n],t)})}function e6(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:xp(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:xp(i||{})),e(r,O(O({},n),{},{mask:i}))}}var t6=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Sn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,p=n.titleId,m=p===void 0?null:p,_=n.classes,w=_===void 0?[]:_,g=n.attributes,v=g===void 0?{}:g,y=n.styles,E=y===void 0?{}:y;if(t){var I=t.prefix,R=t.iconName,C=t.icon;return Vd(O({type:"icon"},t),function(){return Mi("beforeDOMElementCreation",{iconDefinition:t,params:n}),V.autoA11y&&(f?v["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(m||Ma()):(v["aria-hidden"]="true",v.focusable="false")),gv({icons:{main:Np(C),mask:l?Np(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:R,transform:O(O({},Sn),i),symbol:o,title:f,maskId:c,titleId:m,extra:{attributes:v,styles:E,classes:w}})})}},n6={mixout:function(){return{icon:e6(t6)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=P0,n.nodeCallback=ZV,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,s=n.callback,o=s===void 0?function(){}:s;return P0(i,o)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(p,m){Promise.all([bp(i,a),c.iconName?bp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var w=sv(_,2),g=w[0],v=w[1];p([n,gv({icons:{main:g,mask:v},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(m)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Dd(a);l.length>0&&(i.style=l);var u;return dv(o)&&(u=er("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},r6={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Vd({type:"layer"},function(){Mi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(hl(s)).join(" ")},children:o}]})}}}},i6={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Vd({type:"counter",content:n},function(){return Mi("beforeDOMElementCreation",{content:n,params:r}),VV({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(hl(a))}})})}}}},s6={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Sn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,p=f===void 0?{}:f;return Vd({type:"text",content:n},function(){return Mi("beforeDOMElementCreation",{content:n,params:r}),I0({content:n,transform:O(O({},Sn),s),title:a,extra:{attributes:d,styles:p,classes:["".concat(V.cssPrefix,"-layers-text")].concat(hl(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(HT){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return V.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,I0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},o6=new RegExp('"',"ug"),x0=[1105920,1112319];function a6(e){var t=e.replace(o6,""),n=wV(t,0),r=n>=x0[0]&&n<=x0[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ap(i?t[0]:t),isSecondary:r||i}}function N0(e,t){var n="".concat(QM).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=to(e.children),o=s.filter(function(C){return C.getAttribute(Rp)===t})[0],a=qr.getComputedStyle(e,t),l=a.getPropertyValue("font-family").match(eV),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Ie:ce,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Oa[f][l[2].toLowerCase()]:tV[f][u],m=a6(d),_=m.value,w=m.isSecondary,g=l[0].startsWith("FontAwesome"),v=fv(p,_),y=v;if(g){var E=AV(_);E.iconName&&E.prefix&&(v=E.iconName,p=E.prefix)}if(v&&!w&&(!o||o.getAttribute(av)!==p||o.getAttribute(lv)!==y)){e.setAttribute(n,y),o&&e.removeChild(o);var I=XV(),R=I.extra;R.attributes[Rp]=t,bp(v,p).then(function(C){var T=gv(O(O({},I),{},{icons:{main:C,mask:pv()},prefix:p,iconName:y,extra:R,watchable:!0})),N=fe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(N,e.firstChild):e.appendChild(N),N.outerHTML=T.map(function(M){return pl(M)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function l6(e){return Promise.all([N0(e,"::before"),N0(e,"::after")])}function u6(e){return e.parentNode!==document.head&&!~XM.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rp)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function b0(e){if(sr)return new Promise(function(t,n){var r=to(e.querySelectorAll("*")).filter(u6).map(l6),i=mv.begin("searchPseudoElements");dC(),Promise.all(r).then(function(){i(),Dp(),t()}).catch(function(){i(),Dp(),n()})})}var c6={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=b0,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;V.searchPseudoElements&&b0(i)}}},O0=!1,d6={mixout:function(){return{dom:{unwatch:function(){dC(),O0=!0}}}},hooks:function(){return{bootstrap:function(){A0(Pp("mutationObserverCallbacks",{}))},noAuto:function(){GV()},watch:function(n){var r=n.observeMutationsRoot;O0?Dp():A0(Pp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},D0=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},h6={mixout:function(){return{parse:{transform:function(n){return D0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=D0(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:d,path:f};return{tag:"g",attributes:O({},p.outer),children:[{tag:"g",attributes:O({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),p.path)}]}]}}}},Vh={x:0,y:0,width:"100%",height:"100%"};function L0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function f6(e){return e.tag==="g"?e.children:[e]}var p6={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Md(i.split(" ").map(function(o){return o.trim()})):pv();return s.prefix||(s.prefix=Gr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,p=hV({transform:l,containerWidth:d,iconWidth:u}),m={tag:"rect",attributes:O(O({},Vh),{},{fill:"white"})},_=c.children?{children:c.children.map(L0)}:{},w={tag:"g",attributes:O({},p.inner),children:[L0(O({tag:c.tag,attributes:O(O({},c.attributes),p.path)},_))]},g={tag:"g",attributes:O({},p.outer),children:[w]},v="mask-".concat(a||Ma()),y="clip-".concat(a||Ma()),E={tag:"mask",attributes:O(O({},Vh),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:f6(f)},E]};return r.push(I,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")")},Vh)}),{children:r,attributes:i}}}},g6={provides:function(t){var n=!1;qr.matchMedia&&(n=qr.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},m6={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},v6=[gV,n6,r6,i6,s6,c6,d6,h6,p6,g6,m6];xV(v6,{mixoutsTo:Ut});Ut.noAuto;Ut.config;Ut.library;Ut.dom;var Lp=Ut.parse;Ut.findIconDefinition;Ut.toHtml;var y6=Ut.icon;Ut.layer;Ut.text;Ut.counter;var fC={exports:{}},_6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",w6=_6,E6=w6;function pC(){}function gC(){}gC.resetWarningCache=pC;var S6=function(){function e(r,i,s,o,a,l){if(l!==E6){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:gC,resetWarningCache:pC};return n.PropTypes=n,n};fC.exports=S6();var I6=fC.exports;const Q=z0(I6);function M0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Cr(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?M0(Object(n),!0).forEach(function(r){ds(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function kc(e){"@babel/helpers - typeof";return kc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},kc(e)}function ds(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function T6(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function C6(e,t){if(e==null)return{};var n=T6(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Mp(e){return R6(e)||A6(e)||k6(e)||P6()}function R6(e){if(Array.isArray(e))return Vp(e)}function A6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function k6(e,t){if(e){if(typeof e=="string")return Vp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vp(e,t)}}function Vp(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function x6(e){var t,n=e.beat,r=e.fade,i=e.beatFade,s=e.bounce,o=e.shake,a=e.flash,l=e.spin,u=e.spinPulse,c=e.spinReverse,d=e.pulse,f=e.fixedWidth,p=e.inverse,m=e.border,_=e.listItem,w=e.flip,g=e.size,v=e.rotation,y=e.pull,E=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":m,"fa-li":_,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},ds(t,"fa-".concat(g),typeof g<"u"&&g!==null),ds(t,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),ds(t,"fa-pull-".concat(y),typeof y<"u"&&y!==null),ds(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(E).map(function(I){return E[I]?I:null}).filter(function(I){return I})}function N6(e){return e=e-0,e===e}function mC(e){return N6(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var b6=["style"];function O6(e){return e.charAt(0).toUpperCase()+e.slice(1)}function D6(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=mC(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?t[O6(i)]=s:t[i]=s,t},{})}function vC(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return vC(e,l)}),i=Object.keys(t.attributes||{}).reduce(function(l,u){var c=t.attributes[u];switch(u){case"class":l.attrs.className=c,delete t.attributes.class;break;case"style":l.attrs.style=D6(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[mC(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=C6(n,b6);return i.attrs.style=Cr(Cr({},i.attrs.style),o),e.apply(void 0,[t.tag,Cr(Cr({},i.attrs),a)].concat(Mp(r)))}var yC=!1;try{yC=!0}catch{}function L6(){if(!yC&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function V0(e){if(e&&kc(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Lp.icon)return Lp.icon(e);if(e===null)return null;if(e&&kc(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Fh(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ds({},e,t):{}}var ke=ne.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,s=e.className,o=e.title,a=e.titleId,l=e.maskId,u=V0(n),c=Fh("classes",[].concat(Mp(x6(e)),Mp(s.split(" ")))),d=Fh("transform",typeof e.transform=="string"?Lp.transform(e.transform):e.transform),f=Fh("mask",V0(r)),p=y6(u,Cr(Cr(Cr(Cr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return L6("Could not find icon",u),null;var m=p.abstract,_={ref:t};return Object.keys(e).forEach(function(w){ke.defaultProps.hasOwnProperty(w)||(_[w]=e[w])}),M6(m[0],_)});ke.displayName="FontAwesomeIcon";ke.propTypes={beat:Q.bool,border:Q.bool,beatFade:Q.bool,bounce:Q.bool,className:Q.string,fade:Q.bool,flash:Q.bool,mask:Q.oneOfType([Q.object,Q.array,Q.string]),maskId:Q.string,fixedWidth:Q.bool,inverse:Q.bool,flip:Q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Q.oneOfType([Q.object,Q.array,Q.string]),listItem:Q.bool,pull:Q.oneOf(["right","left"]),pulse:Q.bool,rotation:Q.oneOf([0,90,180,270]),shake:Q.bool,size:Q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Q.bool,spinPulse:Q.bool,spinReverse:Q.bool,symbol:Q.oneOfType([Q.bool,Q.string]),title:Q.string,titleId:Q.string,transform:Q.oneOfType([Q.string,Q.object]),swapOpacity:Q.bool};ke.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var M6=vC.bind(null,ne.createElement),V6={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},F6={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},$6={prefix:"fab",iconName:"square-whatsapp",icon:[448,512,["whatsapp-square"],"f40c","M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"]};function no({article:e,onClose:t}){const n=()=>{window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,"_blank")},r=()=>{window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(e.heading)}`,"_blank")},i=()=>{window.open(`https://web.whatsapp.com://send?text=${e.heading}`,"_blank")};return h.jsxs("div",{className:"article-overlay",children:[h.jsxs("div",{className:"article-modal",children:[h.jsx("button",{className:"Back-btn",onClick:t,children:"Back"}),h.jsx("h2",{children:e.heading}),h.jsx("img",{src:e.image,alt:e.heading}),h.jsx("p",{className:"description",children:e.description}),h.jsxs("div",{className:"share-buttons",children:[h.jsx("h2",{children:"Share to social media"}),h.jsxs("div",{className:"socialMediaIcons",children:[h.jsx(ke,{icon:F6,onClick:n}),h.jsx(ke,{icon:V6,onClick:r}),h.jsx(ke,{icon:$6,onClick:i})]})]})]}),h.jsx("meta",{property:"og:url",content:window.location.href}),h.jsx("meta",{property:"og:title",content:e.heading}),h.jsx("meta",{property:"og:description",content:e.description}),h.jsx("meta",{property:"og:image",content:e.image})]})}function j6(){const{newsData:e,loading:t}=ri(),[n,r]=S.useState(null);if(t)return h.jsx(kt,{children:h.jsx("div",{className:"HomePage-parent",children:h.jsx(fn,{})})});const i=s=>{r(e[s])};return h.jsx(kt,{children:h.jsx("div",{className:"HomePage-parent",children:n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:e.slice(0,4).map((s,o)=>h.jsx(eo,{news:s,onClick:()=>i(o)},o))})})})}function U6(){const{newsData:e,loading:t}=ri(),[n,r]=S.useState(null),i=e.filter(o=>o.category==="sport");if(t)return h.jsx(h.Fragment,{children:h.jsx(kt,{children:h.jsx(fn,{})})});const s=o=>{r(i[o])};return h.jsxs(kt,{children:[h.jsx("div",{className:"pageName",children:"Entertainment"}),n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:i.slice(0,4).map((o,a)=>h.jsx(eo,{news:o,onClick:()=>s(a)},a))})]})}function z6(){const{newsData:e,loading:t}=ri(),[n,r]=S.useState(null),i=e.filter(o=>o.category==="sport");if(t)return h.jsx(kt,{children:h.jsx(fn,{})});const s=o=>{r(i[o])};return h.jsxs(kt,{children:[h.jsx("div",{className:"pageName",children:"Sports"}),n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:i.map((o,a)=>h.jsx(eo,{news:o,onClick:()=>s(a)},a))})]})}const _C=S.createContext(),B6=({children:e})=>{const[t,n]=S.useState(null),r=async(s,o,a)=>{try{const l=await $2(SM,s,o);$.success("User logged in"),a("/News_Portal/dashboard"),H6(l)}catch(l){n(l.message),$.error(`${l.message}`)}},i=()=>{localStorage.clear()};return h.jsx(_C.Provider,{value:{login:r,logout:i,loginError:t},children:e})},H6=e=>{localStorage.setItem("user",JSON.stringify(e))},gl=()=>{const e=localStorage.getItem("user");if(e){const t=JSON.parse(e),{displayName:n,email:r,uid:i}=t.user;return{displayName:n,email:r,access:e,uid:i}}return{access:null}},W6=()=>S.useContext(_C);var q6={prefix:"fas",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"]},G6={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},K6={prefix:"fas",iconName:"envelopes-bulk",icon:[640,512,["mail-bulk"],"f674","M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"]},Q6={prefix:"fas",iconName:"address-book",icon:[512,512,[62138,"contact-book"],"f2b9","M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"]},Y6={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]},X6={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},J6={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},Z6={prefix:"fas",iconName:"sitemap",icon:[576,512,[],"f0e8","M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"]},e3={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},t3={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]},n3={prefix:"fas",iconName:"house-user",icon:[576,512,["home-user"],"e1b0","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"]},r3={prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]},i3={prefix:"fas",iconName:"arrow-trend-up",icon:[576,512,[],"e098","M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"]},s3={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};function o3(){const[e,t]=S.useState(!1);function n(){t(!e)}const r=za(),{email:i}=gl();function s(){localStorage.clear(),$.success("You are logged out"),r("/News_Portal")}return h.jsx(h.Fragment,{children:h.jsx("div",{className:"adminSidebar",children:h.jsxs("ul",{children:[h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/dashboard",children:[h.jsx(ke,{icon:n3}),h.jsx("h4",{children:"Dashboard"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/adminNews",children:[h.jsx(ke,{icon:t3}),h.jsx("h4",{children:"News"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/addNews",children:[h.jsx(ke,{icon:e3}),h.jsx("h4",{children:"Add News"})]})}),i==="aadarshkumarman@gmail.com"&&h.jsxs("li",{onClick:n,children:[h.jsxs("div",{className:"administrator",children:[h.jsx(ke,{icon:Z6}),h.jsx("h4",{children:"Administrator"})]}),e&&h.jsxs("ul",{className:"nested",children:[h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/addUser",children:[h.jsx(ke,{icon:s3}),h.jsx("h4",{children:"Add User"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/adminHaveNews",children:[h.jsx(ke,{icon:K6}),h.jsx("h4",{children:"Post Request"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/adminContact",children:[h.jsx(ke,{icon:Q6}),h.jsx("h4",{children:"Contact"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/adminSuggestion",children:[h.jsx(ke,{icon:q6}),h.jsx("h4",{children:"Sugestions"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/traffic",children:[h.jsx(ke,{icon:i3}),h.jsx("h4",{children:"Traffic"})]})})]})]}),h.jsx("li",{onClick:s,children:h.jsxs("div",{className:"administrator",children:[h.jsx(ke,{icon:G6}),h.jsx("h4",{children:"Logout"})]})})]})})})}function Jt({children:e}){return h.jsx("div",{className:"adminLayout",children:h.jsxs("div",{className:"adminBody",children:[h.jsx("div",{className:"verticle",children:h.jsx(o3,{})}),h.jsx("div",{className:"Admin-childrenContet",children:h.jsx("div",{children:e})})]})})}function a3(){const e=iv(Bi),[t,n]=S.useState(!1),{displayName:r}=gl(),i=S.useRef(),s={heading:"",description:"",image:null,category:"",isBreaking:!1,authorName:r},[o,a]=S.useState(s),[l,u]=S.useState(null),c=p=>{const{name:m,value:_}=p.target;a(w=>({...w,[m]:_}))},d=p=>{const m=p.target.files[0];u(m)},f=async()=>{try{n(!0);const p=rv(e,`News/${l.name}`),m=await tv(p,l);console.log("Uploaded a file!");const _=await nv(m.ref);console.log("download url:",_);const w={...o,image:_},g=await dl(bn(Qt,"News"),w);$.success("News posted successfully! 🎉"),a(s),u(null),i.current.value=""}catch(p){$.error(`${p}😔`),console.error("Error adding document: ",p)}finally{n(!1)}};return h.jsx(Jt,{children:h.jsx(h.Fragment,{children:h.jsxs("div",{className:"addNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:o.heading,onChange:c,cols:"2",rows:"2",required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:o.description,onChange:c,cols:"15",rows:"15",required:!0})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:d,ref:i})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Category"}),h.jsxs("select",{name:"category",id:"category",value:o.category,onChange:c,required:!0,children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:o.isBreaking,onChange:c,children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Author Name"}),h.jsx("input",{type:"text",readOnly:!0,value:r})]})]}),h.jsx("button",{onClick:f,disabled:t,children:t?"Posting":"Post News"})]})})})}const l3=()=>{const{access:e}=gl();return e?h.jsx("div",{className:"adminDash",children:h.jsx(qk,{})}):h.jsx(Wk,{to:"/News_Portal/admin"})},u3=()=>{const e=Zg(Bi);za();const t={email:"",password:"",confirmPassword:"",displayName:""},[n,r]=S.useState(t),{email:i,password:s,confirmPassword:o,displayName:a}=n,l=async()=>{try{if(s!==o){$.error("Password not matched");return}const c=(await F2(e,i,s)).user;await U2(c,{displayName:a}),$.success("User Created successfully"),r(t)}catch(u){console.error("Error signing up:",u.message),$.error(`${u.message}`)}};return h.jsx(Jt,{children:h.jsx(h.Fragment,{children:h.jsx("div",{className:"parent-signup",children:h.jsxs("div",{className:"signup",children:[h.jsxs("div",{className:"userDetails",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Name"}),h.jsx("input",{type:"text",placeholder:"Enter Full Name",value:a,onChange:u=>r({...n,displayName:u.target.value})})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Email"}),h.jsx("input",{type:"email",placeholder:"Enter your Email",value:i,onChange:u=>r({...n,email:u.target.value}),required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Password"}),h.jsx("input",{type:"password",id:"password",placeholder:"Create password",value:s,onChange:u=>r({...n,password:u.target.value}),required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Confirm Password"}),h.jsx("input",{type:"password",placeholder:"Re-enter Password",value:o,onChange:u=>r({...n,confirmPassword:u.target.value}),required:!0})]})]}),h.jsx("button",{onClick:l,className:"signup-btn",children:"Create User"})]})})})})};function c3(){const e=za(),{login:t,loginError:n}=W6(),[r,i]=S.useState(""),[s,o]=S.useState(""),[a,l]=S.useState(!1),u=()=>{try{t(r,s,e)}catch{}};return h.jsxs("div",{className:"login",children:[h.jsxs("div",{className:"loginPage",children:[h.jsx("input",{type:"email",placeholder:"Enter Email",value:r,onChange:c=>i(c.target.value)}),h.jsx("input",{type:a?"text":"password",value:s,placeholder:"Password",onChange:c=>o(c.target.value)}),h.jsxs("div",{className:"kaka",children:[h.jsxs("label",{children:[h.jsx("input",{type:"checkbox",checked:a,onChange:()=>l(!a)}),h.jsx("span",{children:"show_password"})]}),h.jsx(Qc,{to:"/News_Portal/reset",children:"Forgot?"})]}),h.jsx("button",{onClick:u,children:"Login"})]}),h.jsx(FT,{})]})}function d3(){const{displayName:e,email:t,uid:n}=gl();return h.jsx(Jt,{children:h.jsx(h.Fragment,{children:h.jsxs("div",{className:"parentDashboard",children:[h.jsx("h1",{children:e}),h.jsx("p",{children:t}),h.jsx("p",{children:n})]})})})}const h3=iv(Bi);function f3(){const e={heading:"",description:"",image:null,category:"",isBreaking:!1,authorName:""},[t,n]=S.useState(e),[r,i]=S.useState(null),s=S.useRef(null),o=u=>{const{name:c,value:d}=u.target;n(f=>({...f,[c]:d}))},a=u=>{const c=u.target.files[0];i(c)},l=async()=>{try{const u=rv(h3,`Alert/${r.name}`),c=await tv(u,r);console.log("Uploaded a file!");const d=await nv(c.ref);console.log("download url:",d);const f={...t,image:d},p=await dl(bn(Qt,"Alert"),f);$.success("News Sent Successfully"),n(e),i(null),s.current.value=""}catch(u){console.error("Error adding document: ",u),$.error(`${u}`)}};return h.jsx(kt,{children:h.jsx(h.Fragment,{children:h.jsxs("div",{className:"haveNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Suitable Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:t.heading,onChange:o,cols:"4",rows:"4"})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:t.description,onChange:o,cols:"15",rows:"15"})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:a,ref:s})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Related Category"}),h.jsxs("select",{name:"category",id:"category",value:t.category,onChange:o,children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:t.isBreaking,onChange:o,children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Your Name"}),h.jsx("input",{type:"text",id:"authorName",name:"authorName",value:t.authorName,onChange:o})]})]}),h.jsx("button",{onClick:l,children:"Send News"})]})})})}function p3(){return h.jsx(kt,{children:h.jsx(h.Fragment,{children:h.jsx("h1",{children:"Page Not Found"})})})}function g3(){return h.jsx(Jt,{children:h.jsx("div",{children:h.jsx("h2",{children:"User Traffic under Construction"})})})}/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function Rr(e,t){return typeof e=="function"?e(t):e}function Ft(e,t){return n=>{t.setState(r=>({...r,[e]:Rr(n,r[e])}))}}function Pc(e){return e instanceof Function}function m3(e){return Array.isArray(e)&&e.every(t=>typeof t=="number")}function v3(e,t){const n=[],r=i=>{i.forEach(s=>{n.push(s);const o=t(s);o!=null&&o.length&&r(o)})};return r(e),n}function B(e,t,n){let r=[],i;return()=>{let s;n.key&&n.debug&&(s=Date.now());const o=e();if(!(o.length!==r.length||o.some((u,c)=>r[c]!==u)))return i;r=o;let l;if(n.key&&n.debug&&(l=Date.now()),i=t(...o),n==null||n.onChange==null||n.onChange(i),n.key&&n.debug&&n!=null&&n.debug()){const u=Math.round((Date.now()-s)*100)/100,c=Math.round((Date.now()-l)*100)/100,d=c/16,f=(p,m)=>{for(p=String(p);p.length<m;)p=" "+p;return p};console.info(`%c⏱ ${f(c,5)} /${f(u,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*d,120))}deg 100% 31%);`,n==null?void 0:n.key)}return i}}function y3(e,t,n,r){var i,s;const a={...e._getDefaultColumnDef(),...t},l=a.accessorKey;let u=(i=(s=a.id)!=null?s:l?l.replace(".","_"):void 0)!=null?i:typeof a.header=="string"?a.header:void 0,c;if(a.accessorFn?c=a.accessorFn:l&&(l.includes(".")?c=f=>{let p=f;for(const _ of l.split(".")){var m;p=(m=p)==null?void 0:m[_]}return p}:c=f=>f[a.accessorKey]),!u)throw new Error;let d={id:`${String(u)}`,accessorFn:c,parent:r,depth:n,columnDef:a,columns:[],getFlatColumns:B(()=>[!0],()=>{var f;return[d,...(f=d.columns)==null?void 0:f.flatMap(p=>p.getFlatColumns())]},{key:"column.getFlatColumns",debug:()=>{var f;return(f=e.options.debugAll)!=null?f:e.options.debugColumns}}),getLeafColumns:B(()=>[e._getOrderColumnsFn()],f=>{var p;if((p=d.columns)!=null&&p.length){let m=d.columns.flatMap(_=>_.getLeafColumns());return f(m)}return[d]},{key:"column.getLeafColumns",debug:()=>{var f;return(f=e.options.debugAll)!=null?f:e.options.debugColumns}})};for(const f of e._features)f.createColumn==null||f.createColumn(d,e);return d}function F0(e,t,n){var r;let s={id:(r=n.id)!=null?r:t.id,column:t,index:n.index,isPlaceholder:!!n.isPlaceholder,placeholderId:n.placeholderId,depth:n.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const o=[],a=l=>{l.subHeaders&&l.subHeaders.length&&l.subHeaders.map(a),o.push(l)};return a(s),o},getContext:()=>({table:e,header:s,column:t})};return e._features.forEach(o=>{o.createHeader==null||o.createHeader(s,e)}),s}const _3={createTable:e=>{e.getHeaderGroups=B(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(t,n,r,i)=>{var s,o;const a=(s=r==null?void 0:r.map(d=>n.find(f=>f.id===d)).filter(Boolean))!=null?s:[],l=(o=i==null?void 0:i.map(d=>n.find(f=>f.id===d)).filter(Boolean))!=null?o:[],u=n.filter(d=>!(r!=null&&r.includes(d.id))&&!(i!=null&&i.includes(d.id)));return nu(t,[...a,...u,...l],e)},{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getCenterHeaderGroups=B(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(t,n,r,i)=>(n=n.filter(s=>!(r!=null&&r.includes(s.id))&&!(i!=null&&i.includes(s.id))),nu(t,n,e,"center")),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getLeftHeaderGroups=B(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.left],(t,n,r)=>{var i;const s=(i=r==null?void 0:r.map(o=>n.find(a=>a.id===o)).filter(Boolean))!=null?i:[];return nu(t,s,e,"left")},{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getRightHeaderGroups=B(()=>[e.getAllColumns(),e.getVisibleLeafColumns(),e.getState().columnPinning.right],(t,n,r)=>{var i;const s=(i=r==null?void 0:r.map(o=>n.find(a=>a.id===o)).filter(Boolean))!=null?i:[];return nu(t,s,e,"right")},{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getFooterGroups=B(()=>[e.getHeaderGroups()],t=>[...t].reverse(),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getLeftFooterGroups=B(()=>[e.getLeftHeaderGroups()],t=>[...t].reverse(),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getCenterFooterGroups=B(()=>[e.getCenterHeaderGroups()],t=>[...t].reverse(),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getRightFooterGroups=B(()=>[e.getRightHeaderGroups()],t=>[...t].reverse(),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getFlatHeaders=B(()=>[e.getHeaderGroups()],t=>t.map(n=>n.headers).flat(),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getLeftFlatHeaders=B(()=>[e.getLeftHeaderGroups()],t=>t.map(n=>n.headers).flat(),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getCenterFlatHeaders=B(()=>[e.getCenterHeaderGroups()],t=>t.map(n=>n.headers).flat(),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getRightFlatHeaders=B(()=>[e.getRightHeaderGroups()],t=>t.map(n=>n.headers).flat(),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getCenterLeafHeaders=B(()=>[e.getCenterFlatHeaders()],t=>t.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getLeftLeafHeaders=B(()=>[e.getLeftFlatHeaders()],t=>t.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getRightLeafHeaders=B(()=>[e.getRightFlatHeaders()],t=>t.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}}),e.getLeafHeaders=B(()=>[e.getLeftHeaderGroups(),e.getCenterHeaderGroups(),e.getRightHeaderGroups()],(t,n,r)=>{var i,s,o,a,l,u;return[...(i=(s=t[0])==null?void 0:s.headers)!=null?i:[],...(o=(a=n[0])==null?void 0:a.headers)!=null?o:[],...(l=(u=r[0])==null?void 0:u.headers)!=null?l:[]].map(c=>c.getLeafHeaders()).flat()},{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugHeaders}})}};function nu(e,t,n,r){var i,s;let o=0;const a=function(f,p){p===void 0&&(p=1),o=Math.max(o,p),f.filter(m=>m.getIsVisible()).forEach(m=>{var _;(_=m.columns)!=null&&_.length&&a(m.columns,p+1)},0)};a(e);let l=[];const u=(f,p)=>{const m={depth:p,id:[r,`${p}`].filter(Boolean).join("_"),headers:[]},_=[];f.forEach(w=>{const g=[..._].reverse()[0],v=w.column.depth===m.depth;let y,E=!1;if(v&&w.column.parent?y=w.column.parent:(y=w.column,E=!0),g&&(g==null?void 0:g.column)===y)g.subHeaders.push(w);else{const I=F0(n,y,{id:[r,p,y.id,w==null?void 0:w.id].filter(Boolean).join("_"),isPlaceholder:E,placeholderId:E?`${_.filter(R=>R.column===y).length}`:void 0,depth:p,index:_.length});I.subHeaders.push(w),_.push(I)}m.headers.push(w),w.headerGroup=m}),l.push(m),p>0&&u(_,p-1)},c=t.map((f,p)=>F0(n,f,{depth:o,index:p}));u(c,o-1),l.reverse();const d=f=>f.filter(m=>m.column.getIsVisible()).map(m=>{let _=0,w=0,g=[0];m.subHeaders&&m.subHeaders.length?(g=[],d(m.subHeaders).forEach(y=>{let{colSpan:E,rowSpan:I}=y;_+=E,g.push(I)})):_=1;const v=Math.min(...g);return w=w+v,m.colSpan=_,m.rowSpan=w,{colSpan:_,rowSpan:w}});return d((i=(s=l[0])==null?void 0:s.headers)!=null?i:[]),l}const ru={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},$h=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),w3={getDefaultColumnDef:()=>ru,getInitialState:e=>({columnSizing:{},columnSizingInfo:$h(),...e}),getDefaultOptions:e=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:Ft("columnSizing",e),onColumnSizingInfoChange:Ft("columnSizingInfo",e)}),createColumn:(e,t)=>{e.getSize=()=>{var n,r,i;const s=t.getState().columnSizing[e.id];return Math.min(Math.max((n=e.columnDef.minSize)!=null?n:ru.minSize,(r=s??e.columnDef.size)!=null?r:ru.size),(i=e.columnDef.maxSize)!=null?i:ru.maxSize)},e.getStart=n=>{const r=n?n==="left"?t.getLeftVisibleLeafColumns():t.getRightVisibleLeafColumns():t.getVisibleLeafColumns(),i=r.findIndex(s=>s.id===e.id);if(i>0){const s=r[i-1];return s.getStart(n)+s.getSize()}return 0},e.resetSize=()=>{t.setColumnSizing(n=>{let{[e.id]:r,...i}=n;return i})},e.getCanResize=()=>{var n,r;return((n=e.columnDef.enableResizing)!=null?n:!0)&&((r=t.options.enableColumnResizing)!=null?r:!0)},e.getIsResizing=()=>t.getState().columnSizingInfo.isResizingColumn===e.id},createHeader:(e,t)=>{e.getSize=()=>{let n=0;const r=i=>{if(i.subHeaders.length)i.subHeaders.forEach(r);else{var s;n+=(s=i.column.getSize())!=null?s:0}};return r(e),n},e.getStart=()=>{if(e.index>0){const n=e.headerGroup.headers[e.index-1];return n.getStart()+n.getSize()}return 0},e.getResizeHandler=n=>{const r=t.getColumn(e.column.id),i=r==null?void 0:r.getCanResize();return s=>{if(!r||!i||(s.persist==null||s.persist(),jh(s)&&s.touches&&s.touches.length>1))return;const o=e.getSize(),a=e?e.getLeafHeaders().map(g=>[g.column.id,g.column.getSize()]):[[r.id,r.getSize()]],l=jh(s)?Math.round(s.touches[0].clientX):s.clientX,u={},c=(g,v)=>{typeof v=="number"&&(t.setColumnSizingInfo(y=>{var E,I;const R=t.options.columnResizeDirection==="rtl"?-1:1,C=(v-((E=y==null?void 0:y.startOffset)!=null?E:0))*R,T=Math.max(C/((I=y==null?void 0:y.startSize)!=null?I:0),-.999999);return y.columnSizingStart.forEach(N=>{let[M,pe]=N;u[M]=Math.round(Math.max(pe+pe*T,0)*100)/100}),{...y,deltaOffset:C,deltaPercentage:T}}),(t.options.columnResizeMode==="onChange"||g==="end")&&t.setColumnSizing(y=>({...y,...u})))},d=g=>c("move",g),f=g=>{c("end",g),t.setColumnSizingInfo(v=>({...v,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},p=n||typeof document<"u"?document:null,m={moveHandler:g=>d(g.clientX),upHandler:g=>{p==null||p.removeEventListener("mousemove",m.moveHandler),p==null||p.removeEventListener("mouseup",m.upHandler),f(g.clientX)}},_={moveHandler:g=>(g.cancelable&&(g.preventDefault(),g.stopPropagation()),d(g.touches[0].clientX),!1),upHandler:g=>{var v;p==null||p.removeEventListener("touchmove",_.moveHandler),p==null||p.removeEventListener("touchend",_.upHandler),g.cancelable&&(g.preventDefault(),g.stopPropagation()),f((v=g.touches[0])==null?void 0:v.clientX)}},w=E3()?{passive:!1}:!1;jh(s)?(p==null||p.addEventListener("touchmove",_.moveHandler,w),p==null||p.addEventListener("touchend",_.upHandler,w)):(p==null||p.addEventListener("mousemove",m.moveHandler,w),p==null||p.addEventListener("mouseup",m.upHandler,w)),t.setColumnSizingInfo(g=>({...g,startOffset:l,startSize:o,deltaOffset:0,deltaPercentage:0,columnSizingStart:a,isResizingColumn:r.id}))}}},createTable:e=>{e.setColumnSizing=t=>e.options.onColumnSizingChange==null?void 0:e.options.onColumnSizingChange(t),e.setColumnSizingInfo=t=>e.options.onColumnSizingInfoChange==null?void 0:e.options.onColumnSizingInfoChange(t),e.resetColumnSizing=t=>{var n;e.setColumnSizing(t?{}:(n=e.initialState.columnSizing)!=null?n:{})},e.resetHeaderSizeInfo=t=>{var n;e.setColumnSizingInfo(t?$h():(n=e.initialState.columnSizingInfo)!=null?n:$h())},e.getTotalSize=()=>{var t,n;return(t=(n=e.getHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?t:0},e.getLeftTotalSize=()=>{var t,n;return(t=(n=e.getLeftHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?t:0},e.getCenterTotalSize=()=>{var t,n;return(t=(n=e.getCenterHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?t:0},e.getRightTotalSize=()=>{var t,n;return(t=(n=e.getRightHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?t:0}}};let iu=null;function E3(){if(typeof iu=="boolean")return iu;let e=!1;try{const t={get passive(){return e=!0,!1}},n=()=>{};window.addEventListener("test",n,t),window.removeEventListener("test",n)}catch{e=!1}return iu=e,iu}function jh(e){return e.type==="touchstart"}const S3={getInitialState:e=>({expanded:{},...e}),getDefaultOptions:e=>({onExpandedChange:Ft("expanded",e),paginateExpandedRows:!0}),createTable:e=>{let t=!1,n=!1;e._autoResetExpanded=()=>{var r,i;if(!t){e._queue(()=>{t=!0});return}if((r=(i=e.options.autoResetAll)!=null?i:e.options.autoResetExpanded)!=null?r:!e.options.manualExpanding){if(n)return;n=!0,e._queue(()=>{e.resetExpanded(),n=!1})}},e.setExpanded=r=>e.options.onExpandedChange==null?void 0:e.options.onExpandedChange(r),e.toggleAllRowsExpanded=r=>{r??!e.getIsAllRowsExpanded()?e.setExpanded(!0):e.setExpanded({})},e.resetExpanded=r=>{var i,s;e.setExpanded(r?{}:(i=(s=e.initialState)==null?void 0:s.expanded)!=null?i:{})},e.getCanSomeRowsExpand=()=>e.getPrePaginationRowModel().flatRows.some(r=>r.getCanExpand()),e.getToggleAllRowsExpandedHandler=()=>r=>{r.persist==null||r.persist(),e.toggleAllRowsExpanded()},e.getIsSomeRowsExpanded=()=>{const r=e.getState().expanded;return r===!0||Object.values(r).some(Boolean)},e.getIsAllRowsExpanded=()=>{const r=e.getState().expanded;return typeof r=="boolean"?r===!0:!(!Object.keys(r).length||e.getRowModel().flatRows.some(i=>!i.getIsExpanded()))},e.getExpandedDepth=()=>{let r=0;return(e.getState().expanded===!0?Object.keys(e.getRowModel().rowsById):Object.keys(e.getState().expanded)).forEach(s=>{const o=s.split(".");r=Math.max(r,o.length)}),r},e.getPreExpandedRowModel=()=>e.getSortedRowModel(),e.getExpandedRowModel=()=>(!e._getExpandedRowModel&&e.options.getExpandedRowModel&&(e._getExpandedRowModel=e.options.getExpandedRowModel(e)),e.options.manualExpanding||!e._getExpandedRowModel?e.getPreExpandedRowModel():e._getExpandedRowModel())},createRow:(e,t)=>{e.toggleExpanded=n=>{t.setExpanded(r=>{var i;const s=r===!0?!0:!!(r!=null&&r[e.id]);let o={};if(r===!0?Object.keys(t.getRowModel().rowsById).forEach(a=>{o[a]=!0}):o=r,n=(i=n)!=null?i:!s,!s&&n)return{...o,[e.id]:!0};if(s&&!n){const{[e.id]:a,...l}=o;return l}return r})},e.getIsExpanded=()=>{var n;const r=t.getState().expanded;return!!((n=t.options.getIsRowExpanded==null?void 0:t.options.getIsRowExpanded(e))!=null?n:r===!0||r!=null&&r[e.id])},e.getCanExpand=()=>{var n,r,i;return(n=t.options.getRowCanExpand==null?void 0:t.options.getRowCanExpand(e))!=null?n:((r=t.options.enableExpanding)!=null?r:!0)&&!!((i=e.subRows)!=null&&i.length)},e.getIsAllParentsExpanded=()=>{let n=!0,r=e;for(;n&&r.parentId;)r=t.getRow(r.parentId,!0),n=r.getIsExpanded();return n},e.getToggleExpandedHandler=()=>{const n=e.getCanExpand();return()=>{n&&e.toggleExpanded()}}}},wC=(e,t,n)=>{var r;const i=n.toLowerCase();return!!(!((r=e.getValue(t))==null||(r=r.toString())==null||(r=r.toLowerCase())==null)&&r.includes(i))};wC.autoRemove=e=>un(e);const EC=(e,t,n)=>{var r;return!!(!((r=e.getValue(t))==null||(r=r.toString())==null)&&r.includes(n))};EC.autoRemove=e=>un(e);const SC=(e,t,n)=>{var r;return((r=e.getValue(t))==null||(r=r.toString())==null?void 0:r.toLowerCase())===(n==null?void 0:n.toLowerCase())};SC.autoRemove=e=>un(e);const IC=(e,t,n)=>{var r;return(r=e.getValue(t))==null?void 0:r.includes(n)};IC.autoRemove=e=>un(e)||!(e!=null&&e.length);const TC=(e,t,n)=>!n.some(r=>{var i;return!((i=e.getValue(t))!=null&&i.includes(r))});TC.autoRemove=e=>un(e)||!(e!=null&&e.length);const CC=(e,t,n)=>n.some(r=>{var i;return(i=e.getValue(t))==null?void 0:i.includes(r)});CC.autoRemove=e=>un(e)||!(e!=null&&e.length);const RC=(e,t,n)=>e.getValue(t)===n;RC.autoRemove=e=>un(e);const AC=(e,t,n)=>e.getValue(t)==n;AC.autoRemove=e=>un(e);const yv=(e,t,n)=>{let[r,i]=n;const s=e.getValue(t);return s>=r&&s<=i};yv.resolveFilterValue=e=>{let[t,n]=e,r=typeof t!="number"?parseFloat(t):t,i=typeof n!="number"?parseFloat(n):n,s=t===null||Number.isNaN(r)?-1/0:r,o=n===null||Number.isNaN(i)?1/0:i;if(s>o){const a=s;s=o,o=a}return[s,o]};yv.autoRemove=e=>un(e)||un(e[0])&&un(e[1]);const Ln={includesString:wC,includesStringSensitive:EC,equalsString:SC,arrIncludes:IC,arrIncludesAll:TC,arrIncludesSome:CC,equals:RC,weakEquals:AC,inNumberRange:yv};function un(e){return e==null||e===""}const I3={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:e=>({columnFilters:[],globalFilter:void 0,...e}),getDefaultOptions:e=>({onColumnFiltersChange:Ft("columnFilters",e),onGlobalFilterChange:Ft("globalFilter",e),filterFromLeafRows:!1,maxLeafRowFilterDepth:100,globalFilterFn:"auto",getColumnCanGlobalFilter:t=>{var n;const r=(n=e.getCoreRowModel().flatRows[0])==null||(n=n._getAllCellsByColumnId()[t.id])==null?void 0:n.getValue();return typeof r=="string"||typeof r=="number"}}),createColumn:(e,t)=>{e.getAutoFilterFn=()=>{const n=t.getCoreRowModel().flatRows[0],r=n==null?void 0:n.getValue(e.id);return typeof r=="string"?Ln.includesString:typeof r=="number"?Ln.inNumberRange:typeof r=="boolean"||r!==null&&typeof r=="object"?Ln.equals:Array.isArray(r)?Ln.arrIncludes:Ln.weakEquals},e.getFilterFn=()=>{var n,r;return Pc(e.columnDef.filterFn)?e.columnDef.filterFn:e.columnDef.filterFn==="auto"?e.getAutoFilterFn():(n=(r=t.options.filterFns)==null?void 0:r[e.columnDef.filterFn])!=null?n:Ln[e.columnDef.filterFn]},e.getCanFilter=()=>{var n,r,i;return((n=e.columnDef.enableColumnFilter)!=null?n:!0)&&((r=t.options.enableColumnFilters)!=null?r:!0)&&((i=t.options.enableFilters)!=null?i:!0)&&!!e.accessorFn},e.getCanGlobalFilter=()=>{var n,r,i,s;return((n=e.columnDef.enableGlobalFilter)!=null?n:!0)&&((r=t.options.enableGlobalFilter)!=null?r:!0)&&((i=t.options.enableFilters)!=null?i:!0)&&((s=t.options.getColumnCanGlobalFilter==null?void 0:t.options.getColumnCanGlobalFilter(e))!=null?s:!0)&&!!e.accessorFn},e.getIsFiltered=()=>e.getFilterIndex()>-1,e.getFilterValue=()=>{var n;return(n=t.getState().columnFilters)==null||(n=n.find(r=>r.id===e.id))==null?void 0:n.value},e.getFilterIndex=()=>{var n,r;return(n=(r=t.getState().columnFilters)==null?void 0:r.findIndex(i=>i.id===e.id))!=null?n:-1},e.setFilterValue=n=>{t.setColumnFilters(r=>{const i=e.getFilterFn(),s=r==null?void 0:r.find(c=>c.id===e.id),o=Rr(n,s?s.value:void 0);if($0(i,o,e)){var a;return(a=r==null?void 0:r.filter(c=>c.id!==e.id))!=null?a:[]}const l={id:e.id,value:o};if(s){var u;return(u=r==null?void 0:r.map(c=>c.id===e.id?l:c))!=null?u:[]}return r!=null&&r.length?[...r,l]:[l]})},e._getFacetedRowModel=t.options.getFacetedRowModel&&t.options.getFacetedRowModel(t,e.id),e.getFacetedRowModel=()=>e._getFacetedRowModel?e._getFacetedRowModel():t.getPreFilteredRowModel(),e._getFacetedUniqueValues=t.options.getFacetedUniqueValues&&t.options.getFacetedUniqueValues(t,e.id),e.getFacetedUniqueValues=()=>e._getFacetedUniqueValues?e._getFacetedUniqueValues():new Map,e._getFacetedMinMaxValues=t.options.getFacetedMinMaxValues&&t.options.getFacetedMinMaxValues(t,e.id),e.getFacetedMinMaxValues=()=>{if(e._getFacetedMinMaxValues)return e._getFacetedMinMaxValues()}},createRow:(e,t)=>{e.columnFilters={},e.columnFiltersMeta={}},createTable:e=>{e.getGlobalAutoFilterFn=()=>Ln.includesString,e.getGlobalFilterFn=()=>{var t,n;const{globalFilterFn:r}=e.options;return Pc(r)?r:r==="auto"?e.getGlobalAutoFilterFn():(t=(n=e.options.filterFns)==null?void 0:n[r])!=null?t:Ln[r]},e.setColumnFilters=t=>{const n=e.getAllLeafColumns(),r=i=>{var s;return(s=Rr(t,i))==null?void 0:s.filter(o=>{const a=n.find(l=>l.id===o.id);if(a){const l=a.getFilterFn();if($0(l,o.value,a))return!1}return!0})};e.options.onColumnFiltersChange==null||e.options.onColumnFiltersChange(r)},e.setGlobalFilter=t=>{e.options.onGlobalFilterChange==null||e.options.onGlobalFilterChange(t)},e.resetGlobalFilter=t=>{e.setGlobalFilter(t?void 0:e.initialState.globalFilter)},e.resetColumnFilters=t=>{var n,r;e.setColumnFilters(t?[]:(n=(r=e.initialState)==null?void 0:r.columnFilters)!=null?n:[])},e.getPreFilteredRowModel=()=>e.getCoreRowModel(),e.getFilteredRowModel=()=>(!e._getFilteredRowModel&&e.options.getFilteredRowModel&&(e._getFilteredRowModel=e.options.getFilteredRowModel(e)),e.options.manualFiltering||!e._getFilteredRowModel?e.getPreFilteredRowModel():e._getFilteredRowModel()),e._getGlobalFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,"__global__"),e.getGlobalFacetedRowModel=()=>e.options.manualFiltering||!e._getGlobalFacetedRowModel?e.getPreFilteredRowModel():e._getGlobalFacetedRowModel(),e._getGlobalFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,"__global__"),e.getGlobalFacetedUniqueValues=()=>e._getGlobalFacetedUniqueValues?e._getGlobalFacetedUniqueValues():new Map,e._getGlobalFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,"__global__"),e.getGlobalFacetedMinMaxValues=()=>{if(e._getGlobalFacetedMinMaxValues)return e._getGlobalFacetedMinMaxValues()}}};function $0(e,t,n){return(e&&e.autoRemove?e.autoRemove(t,n):!1)||typeof t>"u"||typeof t=="string"&&!t}const T3=(e,t,n)=>n.reduce((r,i)=>{const s=i.getValue(e);return r+(typeof s=="number"?s:0)},0),C3=(e,t,n)=>{let r;return n.forEach(i=>{const s=i.getValue(e);s!=null&&(r>s||r===void 0&&s>=s)&&(r=s)}),r},R3=(e,t,n)=>{let r;return n.forEach(i=>{const s=i.getValue(e);s!=null&&(r<s||r===void 0&&s>=s)&&(r=s)}),r},A3=(e,t,n)=>{let r,i;return n.forEach(s=>{const o=s.getValue(e);o!=null&&(r===void 0?o>=o&&(r=i=o):(r>o&&(r=o),i<o&&(i=o)))}),[r,i]},k3=(e,t)=>{let n=0,r=0;if(t.forEach(i=>{let s=i.getValue(e);s!=null&&(s=+s)>=s&&(++n,r+=s)}),n)return r/n},P3=(e,t)=>{if(!t.length)return;const n=t.map(s=>s.getValue(e));if(!m3(n))return;if(n.length===1)return n[0];const r=Math.floor(n.length/2),i=n.sort((s,o)=>s-o);return n.length%2!==0?i[r]:(i[r-1]+i[r])/2},x3=(e,t)=>Array.from(new Set(t.map(n=>n.getValue(e))).values()),N3=(e,t)=>new Set(t.map(n=>n.getValue(e))).size,b3=(e,t)=>t.length,Uh={sum:T3,min:C3,max:R3,extent:A3,mean:k3,median:P3,unique:x3,uniqueCount:N3,count:b3},O3={getDefaultColumnDef:()=>({aggregatedCell:e=>{var t,n;return(t=(n=e.getValue())==null||n.toString==null?void 0:n.toString())!=null?t:null},aggregationFn:"auto"}),getInitialState:e=>({grouping:[],...e}),getDefaultOptions:e=>({onGroupingChange:Ft("grouping",e),groupedColumnMode:"reorder"}),createColumn:(e,t)=>{e.toggleGrouping=()=>{t.setGrouping(n=>n!=null&&n.includes(e.id)?n.filter(r=>r!==e.id):[...n??[],e.id])},e.getCanGroup=()=>{var n,r,i,s;return(n=(r=(i=(s=e.columnDef.enableGrouping)!=null?s:!0)!=null?i:t.options.enableGrouping)!=null?r:!0)!=null?n:!!e.accessorFn},e.getIsGrouped=()=>{var n;return(n=t.getState().grouping)==null?void 0:n.includes(e.id)},e.getGroupedIndex=()=>{var n;return(n=t.getState().grouping)==null?void 0:n.indexOf(e.id)},e.getToggleGroupingHandler=()=>{const n=e.getCanGroup();return()=>{n&&e.toggleGrouping()}},e.getAutoAggregationFn=()=>{const n=t.getCoreRowModel().flatRows[0],r=n==null?void 0:n.getValue(e.id);if(typeof r=="number")return Uh.sum;if(Object.prototype.toString.call(r)==="[object Date]")return Uh.extent},e.getAggregationFn=()=>{var n,r;if(!e)throw new Error;return Pc(e.columnDef.aggregationFn)?e.columnDef.aggregationFn:e.columnDef.aggregationFn==="auto"?e.getAutoAggregationFn():(n=(r=t.options.aggregationFns)==null?void 0:r[e.columnDef.aggregationFn])!=null?n:Uh[e.columnDef.aggregationFn]}},createTable:e=>{e.setGrouping=t=>e.options.onGroupingChange==null?void 0:e.options.onGroupingChange(t),e.resetGrouping=t=>{var n,r;e.setGrouping(t?[]:(n=(r=e.initialState)==null?void 0:r.grouping)!=null?n:[])},e.getPreGroupedRowModel=()=>e.getFilteredRowModel(),e.getGroupedRowModel=()=>(!e._getGroupedRowModel&&e.options.getGroupedRowModel&&(e._getGroupedRowModel=e.options.getGroupedRowModel(e)),e.options.manualGrouping||!e._getGroupedRowModel?e.getPreGroupedRowModel():e._getGroupedRowModel())},createRow:(e,t)=>{e.getIsGrouped=()=>!!e.groupingColumnId,e.getGroupingValue=n=>{if(e._groupingValuesCache.hasOwnProperty(n))return e._groupingValuesCache[n];const r=t.getColumn(n);return r!=null&&r.columnDef.getGroupingValue?(e._groupingValuesCache[n]=r.columnDef.getGroupingValue(e.original),e._groupingValuesCache[n]):e.getValue(n)},e._groupingValuesCache={}},createCell:(e,t,n,r)=>{e.getIsGrouped=()=>t.getIsGrouped()&&t.id===n.groupingColumnId,e.getIsPlaceholder=()=>!e.getIsGrouped()&&t.getIsGrouped(),e.getIsAggregated=()=>{var i;return!e.getIsGrouped()&&!e.getIsPlaceholder()&&!!((i=n.subRows)!=null&&i.length)}}};function D3(e,t,n){if(!(t!=null&&t.length)||!n)return e;const r=e.filter(s=>!t.includes(s.id));return n==="remove"?r:[...t.map(s=>e.find(o=>o.id===s)).filter(Boolean),...r]}const L3={getInitialState:e=>({columnOrder:[],...e}),getDefaultOptions:e=>({onColumnOrderChange:Ft("columnOrder",e)}),createTable:e=>{e.setColumnOrder=t=>e.options.onColumnOrderChange==null?void 0:e.options.onColumnOrderChange(t),e.resetColumnOrder=t=>{var n;e.setColumnOrder(t?[]:(n=e.initialState.columnOrder)!=null?n:[])},e._getOrderColumnsFn=B(()=>[e.getState().columnOrder,e.getState().grouping,e.options.groupedColumnMode],(t,n,r)=>i=>{let s=[];if(!(t!=null&&t.length))s=i;else{const o=[...t],a=[...i];for(;a.length&&o.length;){const l=o.shift(),u=a.findIndex(c=>c.id===l);u>-1&&s.push(a.splice(u,1)[0])}s=[...s,...a]}return D3(s,n,r)},{key:!1})}},Fp=0,$p=10,zh=()=>({pageIndex:Fp,pageSize:$p}),M3={getInitialState:e=>({...e,pagination:{...zh(),...e==null?void 0:e.pagination}}),getDefaultOptions:e=>({onPaginationChange:Ft("pagination",e)}),createTable:e=>{let t=!1,n=!1;e._autoResetPageIndex=()=>{var r,i;if(!t){e._queue(()=>{t=!0});return}if((r=(i=e.options.autoResetAll)!=null?i:e.options.autoResetPageIndex)!=null?r:!e.options.manualPagination){if(n)return;n=!0,e._queue(()=>{e.resetPageIndex(),n=!1})}},e.setPagination=r=>{const i=s=>Rr(r,s);return e.options.onPaginationChange==null?void 0:e.options.onPaginationChange(i)},e.resetPagination=r=>{var i;e.setPagination(r?zh():(i=e.initialState.pagination)!=null?i:zh())},e.setPageIndex=r=>{e.setPagination(i=>{let s=Rr(r,i.pageIndex);const o=typeof e.options.pageCount>"u"||e.options.pageCount===-1?Number.MAX_SAFE_INTEGER:e.options.pageCount-1;return s=Math.max(0,Math.min(s,o)),{...i,pageIndex:s}})},e.resetPageIndex=r=>{var i,s;e.setPageIndex(r?Fp:(i=(s=e.initialState)==null||(s=s.pagination)==null?void 0:s.pageIndex)!=null?i:Fp)},e.resetPageSize=r=>{var i,s;e.setPageSize(r?$p:(i=(s=e.initialState)==null||(s=s.pagination)==null?void 0:s.pageSize)!=null?i:$p)},e.setPageSize=r=>{e.setPagination(i=>{const s=Math.max(1,Rr(r,i.pageSize)),o=i.pageSize*i.pageIndex,a=Math.floor(o/s);return{...i,pageIndex:a,pageSize:s}})},e.setPageCount=r=>e.setPagination(i=>{var s;let o=Rr(r,(s=e.options.pageCount)!=null?s:-1);return typeof o=="number"&&(o=Math.max(-1,o)),{...i,pageCount:o}}),e.getPageOptions=B(()=>[e.getPageCount()],r=>{let i=[];return r&&r>0&&(i=[...new Array(r)].fill(null).map((s,o)=>o)),i},{key:!1,debug:()=>{var r;return(r=e.options.debugAll)!=null?r:e.options.debugTable}}),e.getCanPreviousPage=()=>e.getState().pagination.pageIndex>0,e.getCanNextPage=()=>{const{pageIndex:r}=e.getState().pagination,i=e.getPageCount();return i===-1?!0:i===0?!1:r<i-1},e.previousPage=()=>e.setPageIndex(r=>r-1),e.nextPage=()=>e.setPageIndex(r=>r+1),e.getPrePaginationRowModel=()=>e.getExpandedRowModel(),e.getPaginationRowModel=()=>(!e._getPaginationRowModel&&e.options.getPaginationRowModel&&(e._getPaginationRowModel=e.options.getPaginationRowModel(e)),e.options.manualPagination||!e._getPaginationRowModel?e.getPrePaginationRowModel():e._getPaginationRowModel()),e.getPageCount=()=>{var r;return(r=e.options.pageCount)!=null?r:Math.ceil(e.getPrePaginationRowModel().rows.length/e.getState().pagination.pageSize)}}},Bh=()=>({left:[],right:[]}),Hh=()=>({top:[],bottom:[]}),V3={getInitialState:e=>({columnPinning:Bh(),rowPinning:Hh(),...e}),getDefaultOptions:e=>({onColumnPinningChange:Ft("columnPinning",e),onRowPinningChange:Ft("rowPinning",e)}),createColumn:(e,t)=>{e.pin=n=>{const r=e.getLeafColumns().map(i=>i.id).filter(Boolean);t.setColumnPinning(i=>{var s,o;if(n==="right"){var a,l;return{left:((a=i==null?void 0:i.left)!=null?a:[]).filter(d=>!(r!=null&&r.includes(d))),right:[...((l=i==null?void 0:i.right)!=null?l:[]).filter(d=>!(r!=null&&r.includes(d))),...r]}}if(n==="left"){var u,c;return{left:[...((u=i==null?void 0:i.left)!=null?u:[]).filter(d=>!(r!=null&&r.includes(d))),...r],right:((c=i==null?void 0:i.right)!=null?c:[]).filter(d=>!(r!=null&&r.includes(d)))}}return{left:((s=i==null?void 0:i.left)!=null?s:[]).filter(d=>!(r!=null&&r.includes(d))),right:((o=i==null?void 0:i.right)!=null?o:[]).filter(d=>!(r!=null&&r.includes(d)))}})},e.getCanPin=()=>e.getLeafColumns().some(r=>{var i,s,o;return((i=r.columnDef.enablePinning)!=null?i:!0)&&((s=(o=t.options.enableColumnPinning)!=null?o:t.options.enablePinning)!=null?s:!0)}),e.getIsPinned=()=>{const n=e.getLeafColumns().map(a=>a.id),{left:r,right:i}=t.getState().columnPinning,s=n.some(a=>r==null?void 0:r.includes(a)),o=n.some(a=>i==null?void 0:i.includes(a));return s?"left":o?"right":!1},e.getPinnedIndex=()=>{var n,r;const i=e.getIsPinned();return i?(n=(r=t.getState().columnPinning)==null||(r=r[i])==null?void 0:r.indexOf(e.id))!=null?n:-1:0}},createRow:(e,t)=>{e.pin=(n,r,i)=>{const s=r?e.getLeafRows().map(l=>{let{id:u}=l;return u}):[],o=i?e.getParentRows().map(l=>{let{id:u}=l;return u}):[],a=new Set([...o,e.id,...s]);t.setRowPinning(l=>{var u,c;if(n==="bottom"){var d,f;return{top:((d=l==null?void 0:l.top)!=null?d:[]).filter(_=>!(a!=null&&a.has(_))),bottom:[...((f=l==null?void 0:l.bottom)!=null?f:[]).filter(_=>!(a!=null&&a.has(_))),...Array.from(a)]}}if(n==="top"){var p,m;return{top:[...((p=l==null?void 0:l.top)!=null?p:[]).filter(_=>!(a!=null&&a.has(_))),...Array.from(a)],bottom:((m=l==null?void 0:l.bottom)!=null?m:[]).filter(_=>!(a!=null&&a.has(_)))}}return{top:((u=l==null?void 0:l.top)!=null?u:[]).filter(_=>!(a!=null&&a.has(_))),bottom:((c=l==null?void 0:l.bottom)!=null?c:[]).filter(_=>!(a!=null&&a.has(_)))}})},e.getCanPin=()=>{var n;const{enableRowPinning:r,enablePinning:i}=t.options;return typeof r=="function"?r(e):(n=r??i)!=null?n:!0},e.getIsPinned=()=>{const n=[e.id],{top:r,bottom:i}=t.getState().rowPinning,s=n.some(a=>r==null?void 0:r.includes(a)),o=n.some(a=>i==null?void 0:i.includes(a));return s?"top":o?"bottom":!1},e.getPinnedIndex=()=>{var n,r;const i=e.getIsPinned();if(!i)return-1;const s=(n=t._getPinnedRows(i))==null?void 0:n.map(o=>{let{id:a}=o;return a});return(r=s==null?void 0:s.indexOf(e.id))!=null?r:-1},e.getCenterVisibleCells=B(()=>[e._getAllVisibleCells(),t.getState().columnPinning.left,t.getState().columnPinning.right],(n,r,i)=>{const s=[...r??[],...i??[]];return n.filter(o=>!s.includes(o.column.id))},{key:!1,debug:()=>{var n;return(n=t.options.debugAll)!=null?n:t.options.debugRows}}),e.getLeftVisibleCells=B(()=>[e._getAllVisibleCells(),t.getState().columnPinning.left,,],(n,r)=>(r??[]).map(s=>n.find(o=>o.column.id===s)).filter(Boolean).map(s=>({...s,position:"left"})),{key:!1,debug:()=>{var n;return(n=t.options.debugAll)!=null?n:t.options.debugRows}}),e.getRightVisibleCells=B(()=>[e._getAllVisibleCells(),t.getState().columnPinning.right],(n,r)=>(r??[]).map(s=>n.find(o=>o.column.id===s)).filter(Boolean).map(s=>({...s,position:"right"})),{key:!1,debug:()=>{var n;return(n=t.options.debugAll)!=null?n:t.options.debugRows}})},createTable:e=>{e.setColumnPinning=t=>e.options.onColumnPinningChange==null?void 0:e.options.onColumnPinningChange(t),e.resetColumnPinning=t=>{var n,r;return e.setColumnPinning(t?Bh():(n=(r=e.initialState)==null?void 0:r.columnPinning)!=null?n:Bh())},e.getIsSomeColumnsPinned=t=>{var n;const r=e.getState().columnPinning;if(!t){var i,s;return!!((i=r.left)!=null&&i.length||(s=r.right)!=null&&s.length)}return!!((n=r[t])!=null&&n.length)},e.getLeftLeafColumns=B(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left],(t,n)=>(n??[]).map(r=>t.find(i=>i.id===r)).filter(Boolean),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugColumns}}),e.getRightLeafColumns=B(()=>[e.getAllLeafColumns(),e.getState().columnPinning.right],(t,n)=>(n??[]).map(r=>t.find(i=>i.id===r)).filter(Boolean),{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugColumns}}),e.getCenterLeafColumns=B(()=>[e.getAllLeafColumns(),e.getState().columnPinning.left,e.getState().columnPinning.right],(t,n,r)=>{const i=[...n??[],...r??[]];return t.filter(s=>!i.includes(s.id))},{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugColumns}}),e.setRowPinning=t=>e.options.onRowPinningChange==null?void 0:e.options.onRowPinningChange(t),e.resetRowPinning=t=>{var n,r;return e.setRowPinning(t?Hh():(n=(r=e.initialState)==null?void 0:r.rowPinning)!=null?n:Hh())},e.getIsSomeRowsPinned=t=>{var n;const r=e.getState().rowPinning;if(!t){var i,s;return!!((i=r.top)!=null&&i.length||(s=r.bottom)!=null&&s.length)}return!!((n=r[t])!=null&&n.length)},e._getPinnedRows=t=>B(()=>[e.getRowModel().rows,e.getState().rowPinning[t]],(n,r)=>{var i;return((i=e.options.keepPinnedRows)==null||i?(r??[]).map(o=>{const a=e.getRow(o,!0);return a.getIsAllParentsExpanded()?a:null}):(r??[]).map(o=>n.find(a=>a.id===o))).filter(Boolean).map(o=>({...o,position:t}))},{key:!1,debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugRows}})(),e.getTopRows=()=>e._getPinnedRows("top"),e.getBottomRows=()=>e._getPinnedRows("bottom"),e.getCenterRows=B(()=>[e.getRowModel().rows,e.getState().rowPinning.top,e.getState().rowPinning.bottom],(t,n,r)=>{const i=new Set([...n??[],...r??[]]);return t.filter(s=>!i.has(s.id))},{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugRows}})}},F3={getInitialState:e=>({rowSelection:{},...e}),getDefaultOptions:e=>({onRowSelectionChange:Ft("rowSelection",e),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:e=>{e.setRowSelection=t=>e.options.onRowSelectionChange==null?void 0:e.options.onRowSelectionChange(t),e.resetRowSelection=t=>{var n;return e.setRowSelection(t?{}:(n=e.initialState.rowSelection)!=null?n:{})},e.toggleAllRowsSelected=t=>{e.setRowSelection(n=>{t=typeof t<"u"?t:!e.getIsAllRowsSelected();const r={...n},i=e.getPreGroupedRowModel().flatRows;return t?i.forEach(s=>{s.getCanSelect()&&(r[s.id]=!0)}):i.forEach(s=>{delete r[s.id]}),r})},e.toggleAllPageRowsSelected=t=>e.setRowSelection(n=>{const r=typeof t<"u"?t:!e.getIsAllPageRowsSelected(),i={...n};return e.getRowModel().rows.forEach(s=>{jp(i,s.id,r,!0,e)}),i}),e.getPreSelectedRowModel=()=>e.getCoreRowModel(),e.getSelectedRowModel=B(()=>[e.getState().rowSelection,e.getCoreRowModel()],(t,n)=>Object.keys(t).length?Wh(e,n):{rows:[],flatRows:[],rowsById:{}},{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugTable}}),e.getFilteredSelectedRowModel=B(()=>[e.getState().rowSelection,e.getFilteredRowModel()],(t,n)=>Object.keys(t).length?Wh(e,n):{rows:[],flatRows:[],rowsById:{}},{key:"getFilteredSelectedRowModel",debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugTable}}),e.getGroupedSelectedRowModel=B(()=>[e.getState().rowSelection,e.getSortedRowModel()],(t,n)=>Object.keys(t).length?Wh(e,n):{rows:[],flatRows:[],rowsById:{}},{key:"getGroupedSelectedRowModel",debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugTable}}),e.getIsAllRowsSelected=()=>{const t=e.getFilteredRowModel().flatRows,{rowSelection:n}=e.getState();let r=!!(t.length&&Object.keys(n).length);return r&&t.some(i=>i.getCanSelect()&&!n[i.id])&&(r=!1),r},e.getIsAllPageRowsSelected=()=>{const t=e.getPaginationRowModel().flatRows.filter(i=>i.getCanSelect()),{rowSelection:n}=e.getState();let r=!!t.length;return r&&t.some(i=>!n[i.id])&&(r=!1),r},e.getIsSomeRowsSelected=()=>{var t;const n=Object.keys((t=e.getState().rowSelection)!=null?t:{}).length;return n>0&&n<e.getFilteredRowModel().flatRows.length},e.getIsSomePageRowsSelected=()=>{const t=e.getPaginationRowModel().flatRows;return e.getIsAllPageRowsSelected()?!1:t.filter(n=>n.getCanSelect()).some(n=>n.getIsSelected()||n.getIsSomeSelected())},e.getToggleAllRowsSelectedHandler=()=>t=>{e.toggleAllRowsSelected(t.target.checked)},e.getToggleAllPageRowsSelectedHandler=()=>t=>{e.toggleAllPageRowsSelected(t.target.checked)}},createRow:(e,t)=>{e.toggleSelected=(n,r)=>{const i=e.getIsSelected();t.setRowSelection(s=>{var o;if(n=typeof n<"u"?n:!i,e.getCanSelect()&&i===n)return s;const a={...s};return jp(a,e.id,n,(o=r==null?void 0:r.selectChildren)!=null?o:!0,t),a})},e.getIsSelected=()=>{const{rowSelection:n}=t.getState();return _v(e,n)},e.getIsSomeSelected=()=>{const{rowSelection:n}=t.getState();return Up(e,n)==="some"},e.getIsAllSubRowsSelected=()=>{const{rowSelection:n}=t.getState();return Up(e,n)==="all"},e.getCanSelect=()=>{var n;return typeof t.options.enableRowSelection=="function"?t.options.enableRowSelection(e):(n=t.options.enableRowSelection)!=null?n:!0},e.getCanSelectSubRows=()=>{var n;return typeof t.options.enableSubRowSelection=="function"?t.options.enableSubRowSelection(e):(n=t.options.enableSubRowSelection)!=null?n:!0},e.getCanMultiSelect=()=>{var n;return typeof t.options.enableMultiRowSelection=="function"?t.options.enableMultiRowSelection(e):(n=t.options.enableMultiRowSelection)!=null?n:!0},e.getToggleSelectedHandler=()=>{const n=e.getCanSelect();return r=>{var i;n&&e.toggleSelected((i=r.target)==null?void 0:i.checked)}}}},jp=(e,t,n,r,i)=>{var s;const o=i.getRow(t,!0);n?(o.getCanMultiSelect()||Object.keys(e).forEach(a=>delete e[a]),o.getCanSelect()&&(e[t]=!0)):delete e[t],r&&(s=o.subRows)!=null&&s.length&&o.getCanSelectSubRows()&&o.subRows.forEach(a=>jp(e,a.id,n,r,i))};function Wh(e,t){const n=e.getState().rowSelection,r=[],i={},s=function(o,a){return o.map(l=>{var u;const c=_v(l,n);if(c&&(r.push(l),i[l.id]=l),(u=l.subRows)!=null&&u.length&&(l={...l,subRows:s(l.subRows)}),c)return l}).filter(Boolean)};return{rows:s(t.rows),flatRows:r,rowsById:i}}function _v(e,t){var n;return(n=t[e.id])!=null?n:!1}function Up(e,t,n){var r;if(!((r=e.subRows)!=null&&r.length))return!1;let i=!0,s=!1;return e.subRows.forEach(o=>{if(!(s&&!i)&&(o.getCanSelect()&&(_v(o,t)?s=!0:i=!1),o.subRows&&o.subRows.length)){const a=Up(o,t);a==="all"?s=!0:(a==="some"&&(s=!0),i=!1)}}),i?"all":s?"some":!1}const zp=/([0-9]+)/gm,$3=(e,t,n)=>kC(Qr(e.getValue(n)).toLowerCase(),Qr(t.getValue(n)).toLowerCase()),j3=(e,t,n)=>kC(Qr(e.getValue(n)),Qr(t.getValue(n))),U3=(e,t,n)=>wv(Qr(e.getValue(n)).toLowerCase(),Qr(t.getValue(n)).toLowerCase()),z3=(e,t,n)=>wv(Qr(e.getValue(n)),Qr(t.getValue(n))),B3=(e,t,n)=>{const r=e.getValue(n),i=t.getValue(n);return r>i?1:r<i?-1:0},H3=(e,t,n)=>wv(e.getValue(n),t.getValue(n));function wv(e,t){return e===t?0:e>t?1:-1}function Qr(e){return typeof e=="number"?isNaN(e)||e===1/0||e===-1/0?"":String(e):typeof e=="string"?e:""}function kC(e,t){const n=e.split(zp).filter(Boolean),r=t.split(zp).filter(Boolean);for(;n.length&&r.length;){const i=n.shift(),s=r.shift(),o=parseInt(i,10),a=parseInt(s,10),l=[o,a].sort();if(isNaN(l[0])){if(i>s)return 1;if(s>i)return-1;continue}if(isNaN(l[1]))return isNaN(o)?-1:1;if(o>a)return 1;if(a>o)return-1}return n.length-r.length}const mo={alphanumeric:$3,alphanumericCaseSensitive:j3,text:U3,textCaseSensitive:z3,datetime:B3,basic:H3},W3={getInitialState:e=>({sorting:[],...e}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:e=>({onSortingChange:Ft("sorting",e),isMultiSortEvent:t=>t.shiftKey}),createColumn:(e,t)=>{e.getAutoSortingFn=()=>{const n=t.getFilteredRowModel().flatRows.slice(10);let r=!1;for(const i of n){const s=i==null?void 0:i.getValue(e.id);if(Object.prototype.toString.call(s)==="[object Date]")return mo.datetime;if(typeof s=="string"&&(r=!0,s.split(zp).length>1))return mo.alphanumeric}return r?mo.text:mo.basic},e.getAutoSortDir=()=>{const n=t.getFilteredRowModel().flatRows[0];return typeof(n==null?void 0:n.getValue(e.id))=="string"?"asc":"desc"},e.getSortingFn=()=>{var n,r;if(!e)throw new Error;return Pc(e.columnDef.sortingFn)?e.columnDef.sortingFn:e.columnDef.sortingFn==="auto"?e.getAutoSortingFn():(n=(r=t.options.sortingFns)==null?void 0:r[e.columnDef.sortingFn])!=null?n:mo[e.columnDef.sortingFn]},e.toggleSorting=(n,r)=>{const i=e.getNextSortingOrder(),s=typeof n<"u"&&n!==null;t.setSorting(o=>{const a=o==null?void 0:o.find(p=>p.id===e.id),l=o==null?void 0:o.findIndex(p=>p.id===e.id);let u=[],c,d=s?n:i==="desc";if(o!=null&&o.length&&e.getCanMultiSort()&&r?a?c="toggle":c="add":o!=null&&o.length&&l!==o.length-1?c="replace":a?c="toggle":c="replace",c==="toggle"&&(s||i||(c="remove")),c==="add"){var f;u=[...o,{id:e.id,desc:d}],u.splice(0,u.length-((f=t.options.maxMultiSortColCount)!=null?f:Number.MAX_SAFE_INTEGER))}else c==="toggle"?u=o.map(p=>p.id===e.id?{...p,desc:d}:p):c==="remove"?u=o.filter(p=>p.id!==e.id):u=[{id:e.id,desc:d}];return u})},e.getFirstSortDir=()=>{var n,r;return((n=(r=e.columnDef.sortDescFirst)!=null?r:t.options.sortDescFirst)!=null?n:e.getAutoSortDir()==="desc")?"desc":"asc"},e.getNextSortingOrder=n=>{var r,i;const s=e.getFirstSortDir(),o=e.getIsSorted();return o?o!==s&&((r=t.options.enableSortingRemoval)==null||r)&&(!(n&&(i=t.options.enableMultiRemove)!=null)||i)?!1:o==="desc"?"asc":"desc":s},e.getCanSort=()=>{var n,r;return((n=e.columnDef.enableSorting)!=null?n:!0)&&((r=t.options.enableSorting)!=null?r:!0)&&!!e.accessorFn},e.getCanMultiSort=()=>{var n,r;return(n=(r=e.columnDef.enableMultiSort)!=null?r:t.options.enableMultiSort)!=null?n:!!e.accessorFn},e.getIsSorted=()=>{var n;const r=(n=t.getState().sorting)==null?void 0:n.find(i=>i.id===e.id);return r?r.desc?"desc":"asc":!1},e.getSortIndex=()=>{var n,r;return(n=(r=t.getState().sorting)==null?void 0:r.findIndex(i=>i.id===e.id))!=null?n:-1},e.clearSorting=()=>{t.setSorting(n=>n!=null&&n.length?n.filter(r=>r.id!==e.id):[])},e.getToggleSortingHandler=()=>{const n=e.getCanSort();return r=>{n&&(r.persist==null||r.persist(),e.toggleSorting==null||e.toggleSorting(void 0,e.getCanMultiSort()?t.options.isMultiSortEvent==null?void 0:t.options.isMultiSortEvent(r):!1))}}},createTable:e=>{e.setSorting=t=>e.options.onSortingChange==null?void 0:e.options.onSortingChange(t),e.resetSorting=t=>{var n,r;e.setSorting(t?[]:(n=(r=e.initialState)==null?void 0:r.sorting)!=null?n:[])},e.getPreSortedRowModel=()=>e.getGroupedRowModel(),e.getSortedRowModel=()=>(!e._getSortedRowModel&&e.options.getSortedRowModel&&(e._getSortedRowModel=e.options.getSortedRowModel(e)),e.options.manualSorting||!e._getSortedRowModel?e.getPreSortedRowModel():e._getSortedRowModel())}},q3={getInitialState:e=>({columnVisibility:{},...e}),getDefaultOptions:e=>({onColumnVisibilityChange:Ft("columnVisibility",e)}),createColumn:(e,t)=>{e.toggleVisibility=n=>{e.getCanHide()&&t.setColumnVisibility(r=>({...r,[e.id]:n??!e.getIsVisible()}))},e.getIsVisible=()=>{var n,r;return(n=(r=t.getState().columnVisibility)==null?void 0:r[e.id])!=null?n:!0},e.getCanHide=()=>{var n,r;return((n=e.columnDef.enableHiding)!=null?n:!0)&&((r=t.options.enableHiding)!=null?r:!0)},e.getToggleVisibilityHandler=()=>n=>{e.toggleVisibility==null||e.toggleVisibility(n.target.checked)}},createRow:(e,t)=>{e._getAllVisibleCells=B(()=>[e.getAllCells(),t.getState().columnVisibility],n=>n.filter(r=>r.column.getIsVisible()),{key:"row._getAllVisibleCells",debug:()=>{var n;return(n=t.options.debugAll)!=null?n:t.options.debugRows}}),e.getVisibleCells=B(()=>[e.getLeftVisibleCells(),e.getCenterVisibleCells(),e.getRightVisibleCells()],(n,r,i)=>[...n,...r,...i],{key:!1,debug:()=>{var n;return(n=t.options.debugAll)!=null?n:t.options.debugRows}})},createTable:e=>{const t=(n,r)=>B(()=>[r(),r().filter(i=>i.getIsVisible()).map(i=>i.id).join("_")],i=>i.filter(s=>s.getIsVisible==null?void 0:s.getIsVisible()),{key:n,debug:()=>{var i;return(i=e.options.debugAll)!=null?i:e.options.debugColumns}});e.getVisibleFlatColumns=t("getVisibleFlatColumns",()=>e.getAllFlatColumns()),e.getVisibleLeafColumns=t("getVisibleLeafColumns",()=>e.getAllLeafColumns()),e.getLeftVisibleLeafColumns=t("getLeftVisibleLeafColumns",()=>e.getLeftLeafColumns()),e.getRightVisibleLeafColumns=t("getRightVisibleLeafColumns",()=>e.getRightLeafColumns()),e.getCenterVisibleLeafColumns=t("getCenterVisibleLeafColumns",()=>e.getCenterLeafColumns()),e.setColumnVisibility=n=>e.options.onColumnVisibilityChange==null?void 0:e.options.onColumnVisibilityChange(n),e.resetColumnVisibility=n=>{var r;e.setColumnVisibility(n?{}:(r=e.initialState.columnVisibility)!=null?r:{})},e.toggleAllColumnsVisible=n=>{var r;n=(r=n)!=null?r:!e.getIsAllColumnsVisible(),e.setColumnVisibility(e.getAllLeafColumns().reduce((i,s)=>({...i,[s.id]:n||!(s.getCanHide!=null&&s.getCanHide())}),{}))},e.getIsAllColumnsVisible=()=>!e.getAllLeafColumns().some(n=>!(n.getIsVisible!=null&&n.getIsVisible())),e.getIsSomeColumnsVisible=()=>e.getAllLeafColumns().some(n=>n.getIsVisible==null?void 0:n.getIsVisible()),e.getToggleAllColumnsVisibilityHandler=()=>n=>{var r;e.toggleAllColumnsVisible((r=n.target)==null?void 0:r.checked)}}},j0=[_3,q3,L3,V3,I3,W3,O3,S3,M3,F3,w3];function G3(e){var t;(e.debugAll||e.debugTable)&&console.info("Creating Table Instance...");let n={_features:j0};const r=n._features.reduce((c,d)=>Object.assign(c,d.getDefaultOptions==null?void 0:d.getDefaultOptions(n)),{}),i=c=>n.options.mergeOptions?n.options.mergeOptions(r,c):{...r,...c};let o={...{},...(t=e.initialState)!=null?t:{}};n._features.forEach(c=>{var d;o=(d=c.getInitialState==null?void 0:c.getInitialState(o))!=null?d:o});const a=[];let l=!1;const u={_features:j0,options:{...r,...e},initialState:o,_queue:c=>{a.push(c),l||(l=!0,Promise.resolve().then(()=>{for(;a.length;)a.shift()();l=!1}).catch(d=>setTimeout(()=>{throw d})))},reset:()=>{n.setState(n.initialState)},setOptions:c=>{const d=Rr(c,n.options);n.options=i(d)},getState:()=>n.options.state,setState:c=>{n.options.onStateChange==null||n.options.onStateChange(c)},_getRowId:(c,d,f)=>{var p;return(p=n.options.getRowId==null?void 0:n.options.getRowId(c,d,f))!=null?p:`${f?[f.id,d].join("."):d}`},getCoreRowModel:()=>(n._getCoreRowModel||(n._getCoreRowModel=n.options.getCoreRowModel(n)),n._getCoreRowModel()),getRowModel:()=>n.getPaginationRowModel(),getRow:(c,d)=>{let f=(d?n.getPrePaginationRowModel():n.getRowModel()).rowsById[c];if(!f&&(f=n.getCoreRowModel().rowsById[c],!f))throw new Error;return f},_getDefaultColumnDef:B(()=>[n.options.defaultColumn],c=>{var d;return c=(d=c)!=null?d:{},{header:f=>{const p=f.header.column.columnDef;return p.accessorKey?p.accessorKey:p.accessorFn?p.id:null},cell:f=>{var p,m;return(p=(m=f.renderValue())==null||m.toString==null?void 0:m.toString())!=null?p:null},...n._features.reduce((f,p)=>Object.assign(f,p.getDefaultColumnDef==null?void 0:p.getDefaultColumnDef()),{}),...c}},{debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns},key:!1}),_getColumnDefs:()=>n.options.columns,getAllColumns:B(()=>[n._getColumnDefs()],c=>{const d=function(f,p,m){return m===void 0&&(m=0),f.map(_=>{const w=y3(n,_,m,p),g=_;return w.columns=g.columns?d(g.columns,w,m+1):[],w})};return d(c)},{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),getAllFlatColumns:B(()=>[n.getAllColumns()],c=>c.flatMap(d=>d.getFlatColumns()),{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),_getAllFlatColumnsById:B(()=>[n.getAllFlatColumns()],c=>c.reduce((d,f)=>(d[f.id]=f,d),{}),{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),getAllLeafColumns:B(()=>[n.getAllColumns(),n._getOrderColumnsFn()],(c,d)=>{let f=c.flatMap(p=>p.getLeafColumns());return d(f)},{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),getColumn:c=>n._getAllFlatColumnsById()[c]};Object.assign(n,u);for(let c=0;c<n._features.length;c++){const d=n._features[c];d==null||d.createTable==null||d.createTable(n)}return n}function K3(e,t,n,r){const i=()=>{var o;return(o=s.getValue())!=null?o:e.options.renderFallbackValue},s={id:`${t.id}_${n.id}`,row:t,column:n,getValue:()=>t.getValue(r),renderValue:i,getContext:B(()=>[e,n,t,s],(o,a,l,u)=>({table:o,column:a,row:l,cell:u,getValue:u.getValue,renderValue:u.renderValue}),{key:!1,debug:()=>e.options.debugAll})};return e._features.forEach(o=>{o.createCell==null||o.createCell(s,n,t,e)},{}),s}const Ev=(e,t,n,r,i,s,o)=>{let a={id:t,index:r,original:n,depth:i,parentId:o,_valuesCache:{},_uniqueValuesCache:{},getValue:l=>{if(a._valuesCache.hasOwnProperty(l))return a._valuesCache[l];const u=e.getColumn(l);if(u!=null&&u.accessorFn)return a._valuesCache[l]=u.accessorFn(a.original,r),a._valuesCache[l]},getUniqueValues:l=>{if(a._uniqueValuesCache.hasOwnProperty(l))return a._uniqueValuesCache[l];const u=e.getColumn(l);if(u!=null&&u.accessorFn)return u.columnDef.getUniqueValues?(a._uniqueValuesCache[l]=u.columnDef.getUniqueValues(a.original,r),a._uniqueValuesCache[l]):(a._uniqueValuesCache[l]=[a.getValue(l)],a._uniqueValuesCache[l])},renderValue:l=>{var u;return(u=a.getValue(l))!=null?u:e.options.renderFallbackValue},subRows:s??[],getLeafRows:()=>v3(a.subRows,l=>l.subRows),getParentRow:()=>a.parentId?e.getRow(a.parentId,!0):void 0,getParentRows:()=>{let l=[],u=a;for(;;){const c=u.getParentRow();if(!c)break;l.push(c),u=c}return l.reverse()},getAllCells:B(()=>[e.getAllLeafColumns()],l=>l.map(u=>K3(e,a,u,u.id)),{key:!1,debug:()=>{var l;return(l=e.options.debugAll)!=null?l:e.options.debugRows}}),_getAllCellsByColumnId:B(()=>[a.getAllCells()],l=>l.reduce((u,c)=>(u[c.column.id]=c,u),{}),{key:"row.getAllCellsByColumnId",debug:()=>{var l;return(l=e.options.debugAll)!=null?l:e.options.debugRows}})};for(let l=0;l<e._features.length;l++){const u=e._features[l];u==null||u.createRow==null||u.createRow(a,e)}return a};function Q3(){return e=>B(()=>[e.options.data],t=>{const n={rows:[],flatRows:[],rowsById:{}},r=function(i,s,o){s===void 0&&(s=0);const a=[];for(let u=0;u<i.length;u++){const c=Ev(e,e._getRowId(i[u],u,o),i[u],u,s,void 0,o==null?void 0:o.id);if(n.flatRows.push(c),n.rowsById[c.id]=c,a.push(c),e.options.getSubRows){var l;c.originalSubRows=e.options.getSubRows(i[u],u),(l=c.originalSubRows)!=null&&l.length&&(c.subRows=r(c.originalSubRows,s+1,c))}}return a};return n.rows=r(t),n},{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugTable},onChange:()=>{e._autoResetPageIndex()}})}function Y3(e,t,n){return n.options.filterFromLeafRows?X3(e,t,n):J3(e,t,n)}function X3(e,t,n){var r;const i=[],s={},o=(r=n.options.maxLeafRowFilterDepth)!=null?r:100,a=function(l,u){u===void 0&&(u=0);const c=[];for(let f=0;f<l.length;f++){var d;let p=l[f];const m=Ev(n,p.id,p.original,p.index,p.depth,void 0,p.parentId);if(m.columnFilters=p.columnFilters,(d=p.subRows)!=null&&d.length&&u<o){if(m.subRows=a(p.subRows,u+1),p=m,t(p)&&!m.subRows.length){c.push(p),s[p.id]=p,i.push(p);continue}if(t(p)||m.subRows.length){c.push(p),s[p.id]=p,i.push(p);continue}}else p=m,t(p)&&(c.push(p),s[p.id]=p,i.push(p))}return c};return{rows:a(e),flatRows:i,rowsById:s}}function J3(e,t,n){var r;const i=[],s={},o=(r=n.options.maxLeafRowFilterDepth)!=null?r:100,a=function(l,u){u===void 0&&(u=0);const c=[];for(let f=0;f<l.length;f++){let p=l[f];if(t(p)){var d;if((d=p.subRows)!=null&&d.length&&u<o){const _=Ev(n,p.id,p.original,p.index,p.depth,void 0,p.parentId);_.subRows=a(p.subRows,u+1),p=_}c.push(p),i.push(p),s[p.id]=p}}return c};return{rows:a(e),flatRows:i,rowsById:s}}function Z3(){return e=>B(()=>[e.getPreFilteredRowModel(),e.getState().columnFilters,e.getState().globalFilter],(t,n,r)=>{if(!t.rows.length||!(n!=null&&n.length)&&!r){for(let f=0;f<t.flatRows.length;f++)t.flatRows[f].columnFilters={},t.flatRows[f].columnFiltersMeta={};return t}const i=[],s=[];(n??[]).forEach(f=>{var p;const m=e.getColumn(f.id);if(!m)return;const _=m.getFilterFn();_&&i.push({id:f.id,filterFn:_,resolvedValue:(p=_.resolveFilterValue==null?void 0:_.resolveFilterValue(f.value))!=null?p:f.value})});const o=n.map(f=>f.id),a=e.getGlobalFilterFn(),l=e.getAllLeafColumns().filter(f=>f.getCanGlobalFilter());r&&a&&l.length&&(o.push("__global__"),l.forEach(f=>{var p;s.push({id:f.id,filterFn:a,resolvedValue:(p=a.resolveFilterValue==null?void 0:a.resolveFilterValue(r))!=null?p:r})}));let u,c;for(let f=0;f<t.flatRows.length;f++){const p=t.flatRows[f];if(p.columnFilters={},i.length)for(let m=0;m<i.length;m++){u=i[m];const _=u.id;p.columnFilters[_]=u.filterFn(p,_,u.resolvedValue,w=>{p.columnFiltersMeta[_]=w})}if(s.length){for(let m=0;m<s.length;m++){c=s[m];const _=c.id;if(c.filterFn(p,_,c.resolvedValue,w=>{p.columnFiltersMeta[_]=w})){p.columnFilters.__global__=!0;break}}p.columnFilters.__global__!==!0&&(p.columnFilters.__global__=!1)}}const d=f=>{for(let p=0;p<o.length;p++)if(f.columnFilters[o[p]]===!1)return!1;return!0};return Y3(t.rows,d,e)},{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugTable},onChange:()=>{e._autoResetPageIndex()}})}function eF(){return e=>B(()=>[e.getState().sorting,e.getPreSortedRowModel()],(t,n)=>{if(!n.rows.length||!(t!=null&&t.length))return n;const r=e.getState().sorting,i=[],s=r.filter(l=>{var u;return(u=e.getColumn(l.id))==null?void 0:u.getCanSort()}),o={};s.forEach(l=>{const u=e.getColumn(l.id);u&&(o[l.id]={sortUndefined:u.columnDef.sortUndefined,invertSorting:u.columnDef.invertSorting,sortingFn:u.getSortingFn()})});const a=l=>{const u=l.map(c=>({...c}));return u.sort((c,d)=>{for(let p=0;p<s.length;p+=1){var f;const m=s[p],_=o[m.id],w=(f=m==null?void 0:m.desc)!=null?f:!1;let g=0;if(_.sortUndefined){const v=c.getValue(m.id),y=d.getValue(m.id),E=v===void 0,I=y===void 0;(E||I)&&(g=E&&I?0:E?_.sortUndefined:-_.sortUndefined)}if(g===0&&(g=_.sortingFn(c,d,m.id)),g!==0)return w&&(g*=-1),_.invertSorting&&(g*=-1),g}return c.index-d.index}),u.forEach(c=>{var d;i.push(c),(d=c.subRows)!=null&&d.length&&(c.subRows=a(c.subRows))}),u};return{rows:a(n.rows),flatRows:i,rowsById:n.rowsById}},{key:!1,debug:()=>{var t;return(t=e.options.debugAll)!=null?t:e.options.debugTable},onChange:()=>{e._autoResetPageIndex()}})}function tF(e){const t=[],n=r=>{var i;t.push(r),(i=r.subRows)!=null&&i.length&&r.getIsExpanded()&&r.subRows.forEach(n)};return e.rows.forEach(n),{rows:t,flatRows:e.flatRows,rowsById:e.rowsById}}function nF(e){return t=>B(()=>[t.getState().pagination,t.getPrePaginationRowModel(),t.options.paginateExpandedRows?void 0:t.getState().expanded],(n,r)=>{if(!r.rows.length)return r;const{pageSize:i,pageIndex:s}=n;let{rows:o,flatRows:a,rowsById:l}=r;const u=i*s,c=u+i;o=o.slice(u,c);let d;t.options.paginateExpandedRows?d={rows:o,flatRows:a,rowsById:l}:d=tF({rows:o,flatRows:a,rowsById:l}),d.flatRows=[];const f=p=>{d.flatRows.push(p),p.subRows.length&&p.subRows.forEach(f)};return d.rows.forEach(f),d},{key:!1,debug:()=>{var n;return(n=t.options.debugAll)!=null?n:t.options.debugTable}})}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function U0(e,t){return e?rF(e)?S.createElement(e,t):e:null}function rF(e){return iF(e)||typeof e=="function"||sF(e)}function iF(e){return typeof e=="function"&&(()=>{const t=Object.getPrototypeOf(e);return t.prototype&&t.prototype.isReactComponent})()}function sF(e){return typeof e=="object"&&typeof e.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(e.$$typeof.description)}function oF(e){const t={state:{},onStateChange:()=>{},renderFallbackValue:null,...e},[n]=S.useState(()=>({current:G3(t)})),[r,i]=S.useState(()=>n.current.initialState);return n.current.setOptions(s=>({...s,...e,state:{...r,...e.state},onStateChange:o=>{i(o),e.onStateChange==null||e.onStateChange(o)}})),n.current}function Fd({columns:e,data:t}){const[n,r]=S.useState([]),[i,s]=S.useState(""),o=oF({data:S.useMemo(()=>t,[t]),rows:t,columns:e,getCoreRowModel:Q3(),getPaginationRowModel:nF(),getSortedRowModel:eF(),getFilteredRowModel:Z3(),state:{sorting:n,globalFilter:i},onSortingChange:r,onGlobalFilterChange:s});return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"tablaa",children:[h.jsx("div",{className:"oktable",children:h.jsx("input",{className:"search-in",type:"text",value:i,onChange:a=>s(a.target.value),placeholder:"🔍  Search "})}),h.jsx("div",{className:"got t-bg",children:h.jsxs("table",{border:1,className:"data-table `${ok}`",children:[h.jsx("thead",{children:o.getHeaderGroups().map(a=>h.jsx("tr",{children:a.headers.map(l=>h.jsx("th",{className:l.column.className,onClick:l.column.getToggleSortingHandler(),children:l.isPlaceholder?null:h.jsxs("div",{children:[U0(l.column.columnDef.header,l.getContext()),{asc:"    ⬆️",desc:"    ⬇️",default:"    "}[l.column.getIsSorted()||"default"]]})},l.id))},a.id))}),h.jsx("tbody",{children:o.getRowModel().rows.map(a=>h.jsx("tr",{children:a.getVisibleCells().map(l=>h.jsx("td",{children:U0(l.column.columnDef.cell,l.getContext())},l.id))},a.id))})]})})]}),h.jsxs("div",{className:"pageController",children:[h.jsx("div",{className:"searching"}),h.jsxs("div",{className:"data-table-btn",children:[h.jsx("button",{disabled:!o.getCanPreviousPage(),onClick:()=>o.setPageIndex(0),children:h.jsx(ke,{icon:Y6})}),h.jsx("button",{disabled:!o.getCanPreviousPage(),onClick:()=>o.previousPage(),children:h.jsx(ke,{icon:J6})}),h.jsx("button",{disabled:!o.getCanNextPage(),onClick:()=>o.nextPage(),children:h.jsx(ke,{icon:X6})}),h.jsx("button",{disabled:!o.getCanNextPage(),onClick:()=>o.setPageIndex(o.getPageCount()-1),children:h.jsx(ke,{icon:r3})}),h.jsxs("span",{children:[h.jsx("div",{children:"Page"}),h.jsxs("strong",{children:[o.getState().pagination.pageIndex+1," of"," ",o.getPageCount()]})]})]})]})]})}function aF(){const e=iT(Bi),{newsData:t,loading:n,updatedNews:r}=ri(),[i,s]=S.useState([]),o=S.useRef(),{displayName:a,email:l}=gl(),[u,c]=S.useState({}),[d,f]=S.useState(null),[p,m]=S.useState(!0);S.useEffect(()=>{(async()=>{try{if(p){const I=bn(e,"News"),C=(await cl(I)).docs.map(N=>({id:N.id,...N.data()}));let T=C;a&&l!=="aadarshkumarman@gmail.com"&&(T=C.filter(N=>N.authorName===a)),s(T),r(T),m(!1)}}catch(I){console.error("Error fetching news data:",I),m(!1)}})()},[e,a,r,p]);const _=async()=>{try{let E=u.image||u.imageURL;if(u.image&&typeof u.image!="string"){const T=rv(EM,`images/${Date.now()}_${u.image.name}`);await tv(T,u.image),E=await nv(T)}const I={...u,image:E},R=$s(e,"News",u.id);await uL(R,I),o.current.close(),$.success("News Updated Successfully"),m(!0);const C=t.map(T=>T.id===u.id?{...T,...I}:T);r(C)}catch(E){$.error(`${E}`),console.error("Error saving news:",E)}finally{m(!0)}},w=async E=>{try{await Nd($s(e,"News",E));const I=i.filter(R=>R.id!==E);s(I),r(I),$.success("News deleted",{closeOnClick:!0,pauseOnHover:!1})}catch(I){$.error(`${I}`),console.error("Error deleting news:",I)}},g=(E,I)=>{c({...u,[I]:E.target.value})},v=E=>{const I=E.target.files[0];c({...u,image:I}),f(URL.createObjectURL(I))},y=[{header:"SN",cell:({row:E})=>`${+E.id+1}`},{header:"News Id",accessorKey:"id"},{header:"Heading",accessorKey:"heading"},{header:"Author Name",accessorKey:"authorName"},{header:"Action",cell:({row:E})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>{o.current.showModal(),m(!0),c({id:E.original.id,heading:E.original.heading,description:E.original.description,category:E.original.category,image:E.original.image,authorName:E.original.authorName}),E.original.image&&f(E.original.image)},children:"Edit"}),h.jsx("button",{onClick:()=>w(E.original.id),children:"Delete"})]})}];return n?h.jsx(Jt,{children:h.jsx(fn,{})}):h.jsx(h.Fragment,{children:h.jsxs(Jt,{children:[h.jsx(Fd,{columns:y,data:i}),h.jsxs("dialog",{ref:o,children:[h.jsx("button",{onClick:()=>{o.current.close()},children:"x"}),h.jsxs("div",{className:"updateNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:u.heading,onChange:E=>g(E,"heading"),cols:"1",rows:"1",required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:u.description,onChange:E=>g(E,"description"),cols:"5",rows:"15",required:!0})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:v}),d&&h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Initial Image Preview:"}),h.jsx("img",{src:d,alt:"Initial Preview",style:{width:"100px",height:"100px"}})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Category"}),h.jsxs("select",{name:"category",id:"category",value:u.category,onChange:E=>g(E,"category"),required:!0,children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:u.isBreaking,onChange:E=>g(E,"isBreaking"),children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Author Name"}),h.jsx("input",{type:"text",readOnly:!0,value:a})]})]}),h.jsx("button",{onClick:_,children:"Save"})]})]})]})})}const lF=()=>{const e=S.useRef(),[t,n]=S.useState([]),[r,i]=S.useState(null),[s,o]=S.useState({}),[a,l]=S.useState(null);S.useEffect(()=>{(async()=>{const _=bn(Qt,"Alert"),w=await cl(_),g=[];w.forEach(v=>{g.push({id:v.id,...v.data()})}),n(g)})()},[]);const u=async()=>{try{const m={heading:s.heading,category:s.category,image:s.image,description:s.description,authorName:s.authorName,isBreaking:s.isBreaking==="true"};await dl(bn(Qt,"News"),m),e.current.close(),$.success("News Posted successfully")}catch(m){console.error("Error adding news: ",m),$.error(`${m}`)}},c=async m=>{try{await Nd($s(Qt,"Alert",m)),n(t.filter(_=>_.id!==m)),$.success("News Deleted successfully")}catch(_){console.error("Error deleting news: ",_),$.error(`${_}`)}},d=(m,_)=>{o({...s,[_]:m.target.value})},f=m=>{o({...s,image:m.target.files[0]}),l(URL.createObjectURL(m.target.files[0]))},p=[{header:"S.N.",cell:({row:m})=>`${+m.id+1}`},{header:"Heading",accessorKey:"heading"},{header:"Action",cell:({row:m})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>{e.current.showModal(),i(m.original),o({heading:m.original.heading,category:m.original.category,image:m.original.image,description:m.original.description,authorName:m.original.authorName}),m.original.image&&l(m.original.image)},children:"Details"}),h.jsx("button",{onClick:()=>c(m.original.id),children:"Delete"})]})}];return t.length===0?h.jsx(Jt,{children:h.jsx(fn,{})}):h.jsxs(Jt,{children:[h.jsx(Fd,{columns:p,data:t}),h.jsx("div",{className:"haveNews",children:h.jsx("dialog",{ref:e,children:r&&h.jsx(h.Fragment,{children:h.jsxs("div",{className:"haveNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Suitable Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:s.heading,onChange:m=>d(m,"heading"),cols:"4",rows:"4"})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:s.description,onChange:m=>d(m,"description"),cols:"15",rows:"15"})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:f}),a&&h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Initial Image Preview:"}),h.jsx("img",{src:a,alt:"Initial Preview",style:{width:"100px",height:"100px"}})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Related Category"}),h.jsxs("select",{name:"category",id:"category",value:s.category,onChange:m=>d(m,"category"),children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:s.isBreaking,onChange:m=>d(m,"isBreaking"),children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Your Name"}),h.jsx("input",{type:"text",id:"authorName",name:"authorName",value:s.authorName,onChange:m=>d(m,"authorName")})]})]}),h.jsx("button",{onClick:u,children:"Post News"}),h.jsx("button",{onClick:()=>{e.current.close()},children:"close"})]})})})})]})};function uF(){const{newsData:e,loading:t}=ri(),[n,r]=S.useState(null),i=e.filter(o=>o.category==="technology");if(t)return h.jsx(kt,{children:h.jsx(fn,{})});const s=o=>{r(i[o])};return h.jsxs(kt,{children:[h.jsx("div",{className:"pageName ",children:"Technology"}),n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:i.slice(0,4).map((o,a)=>h.jsx(eo,{news:o,onClick:()=>s(a)},a))})]})}function cF(){const{newsData:e,loading:t}=ri(),[n,r]=S.useState(null),i=e.filter(o=>o.category==="education");if(t)return h.jsx(kt,{children:h.jsx(fn,{})});const s=o=>{r(i[o])};return h.jsxs(kt,{children:[h.jsx("div",{className:"pageName",children:"Education"}),n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:i.slice(0,4).map((o,a)=>h.jsx(eo,{news:o,onClick:()=>s(a)},a))})]})}function dF(){const{newsData:e,loading:t}=ri(),[n,r]=S.useState(null),i=e.filter(o=>o.category==="politics");if(t)return h.jsx(kt,{children:h.jsx(fn,{})});const s=o=>{r(i[o])};return h.jsxs(kt,{children:[h.jsx("div",{className:"pageName",children:"Politics"}),n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:i.slice(0,4).map((o,a)=>h.jsx(eo,{news:o,onClick:()=>s(a)},a))})]})}function hF(){const[e,t]=S.useState([]),[n,r]=S.useState(null),[i,s]=S.useState(!0),o=S.useRef(null);S.useEffect(()=>{(async()=>{try{const d=bn(Qt,"contactForm"),f=await cl(d),p=[];f.forEach(m=>{p.push({id:m.id,...m.data()})}),t(p)}catch(d){console.error("Error fetching contact data: ",d)}finally{s(!1)}})()},[]);const a=c=>{r(c),o.current.showModal()},l=async c=>{try{await Nd($s(Qt,"contactForm",c)),t(e.filter(d=>d.id!==c)),$.success("Contact Deleted")}catch(d){console.error("Error deleting news: ",d),$.error(`${d.message}`)}},u=[{header:"S.N.",cell:({row:c})=>`${+c.id+1}`},{header:"Name",accessorKey:"name"},{header:"Mobile",accessorKey:"phone"},{header:"Action",cell:({row:c})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>a(c.original),children:"Details"}),h.jsx("button",{onClick:()=>l(c.original.id),children:"Delete"})]})}];return i?h.jsx(Jt,{children:h.jsx(fn,{})}):h.jsxs(Jt,{children:[h.jsx(Fd,{columns:u,data:e}),h.jsx("dialog",{ref:o,children:n&&h.jsxs("div",{children:[h.jsxs("p",{children:["Name: ",n.name]}),h.jsxs("p",{children:["Mobile: ",n.phone]}),h.jsxs("p",{children:["Email: ",n.email]}),h.jsxs("p",{children:["Message: ",n.message]}),h.jsx("button",{onClick:()=>o.current.close(),children:"Close"})]})})]})}function fF(){const[e,t]=S.useState([]),[n,r]=S.useState(null),[i,s]=S.useState(!0),o=S.useRef(null);S.useEffect(()=>{(async()=>{try{const d=bn(Qt,"suggestionForm"),f=await cl(d),p=[];f.forEach(m=>{p.push({id:m.id,...m.data()})}),t(p)}catch{}finally{s(!1)}})()},[]);const a=c=>{r(c),o.current.showModal()},l=async c=>{try{await Nd($s(Qt,"suggestionForm",c)),t(e.filter(d=>d.id!==c)),$.success("Suggestion Deleted")}catch(d){$.error(`${d}`)}},u=[{header:"S.N.",cell:({row:c})=>`${+c.id+1}`},{header:"Name",accessorKey:"name"},{header:"Action",cell:({row:c})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>a(c.original),children:"Details"}),h.jsx("button",{onClick:()=>l(c.original.id),children:"Delete"})]})}];return i?h.jsx(Jt,{children:h.jsx(fn,{})}):h.jsxs(Jt,{children:[h.jsx(Fd,{columns:u,data:e}),h.jsx("dialog",{ref:o,children:n&&h.jsxs("div",{children:[h.jsxs("p",{children:["Name: ",n.name]}),h.jsxs("p",{children:["Email: ",n.email]}),h.jsxs("p",{children:["Suggestion: ",n.suggestion]}),h.jsx("button",{onClick:()=>o.current.close(),children:"Close"})]})})]})}function pF(){const[e,t]=S.useState(""),[n,r]=S.useState(!1),i=()=>{const s=Zg();V2(s,e).then(()=>{r(!0),t(""),$.success("Reset link sent successfully")}).catch(o=>{const a=o;console.log(o),$.error(`${a}`),r(!1)})};return h.jsx("div",{className:"reset login",children:h.jsxs("div",{className:"resetPw loginPage",children:[h.jsx("h2",{children:"Reset Password"}),h.jsx("input",{type:"email",placeholder:"Enter your email",value:e,onChange:s=>t(s.target.value)}),h.jsx("button",{onClick:i,children:"Reset Password"}),n&&h.jsxs(h.Fragment,{children:[h.jsx("p",{children:"Password reset email sent successfully!"}),h.jsx(Qc,{to:"/News_Portal/admin",className:"resetToLogin",children:"Login"})]})]})})}function gF(){return h.jsx(tP,{children:h.jsx(IM,{children:h.jsx(B6,{children:h.jsxs(Kk,{children:[h.jsx(Ae,{path:"/News_Portal/admin",element:h.jsx(c3,{})}),h.jsx(Ae,{path:"/News_Portal/haveNews",element:h.jsx(f3,{})}),h.jsx(Ae,{path:"/News_Portal",element:h.jsx(j6,{})}),h.jsx(Ae,{path:"/News_Portal/technology",element:h.jsx(uF,{})}),h.jsx(Ae,{path:"/News_Portal/entertainment",element:h.jsx(U6,{})}),h.jsx(Ae,{path:"/News_Portal/sport",element:h.jsx(z6,{})}),h.jsx(Ae,{path:"/News_Portal/education",element:h.jsx(cF,{})}),h.jsx(Ae,{path:"/News_Portal/politics",element:h.jsx(dF,{})}),h.jsxs(Ae,{path:"",element:h.jsx(l3,{}),children:[h.jsx(Ae,{path:"/News_Portal/dashboard",element:h.jsx(d3,{})}),h.jsx(Ae,{path:"/News_Portal/addNews",element:h.jsx(a3,{})}),h.jsx(Ae,{path:"/News_Portal/addUser",element:h.jsx(u3,{})}),h.jsx(Ae,{path:"/News_Portal/traffic",element:h.jsx(g3,{})}),h.jsx(Ae,{path:"/News_Portal/adminNews",element:h.jsx(aF,{})}),h.jsx(Ae,{path:"/News_Portal/adminHaveNews",element:h.jsx(lF,{})}),h.jsx(Ae,{path:"/News_Portal/adminContact",element:h.jsx(hF,{})}),h.jsx(Ae,{path:"/News_Portal/adminSuggestion",element:h.jsx(fF,{})})]}),h.jsx(Ae,{path:"/*",element:h.jsx(p3,{})}),h.jsx(Ae,{path:"/News_Portal/suggestion",element:h.jsx($T,{})}),h.jsx(Ae,{path:"/News_Portal/reset",element:h.jsx(pF,{})})]})})})})}qh.createRoot(document.getElementById("root")).render(h.jsxs(h.Fragment,{children:[h.jsx(gF,{}),h.jsx(FT,{})]}));
