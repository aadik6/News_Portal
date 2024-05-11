function xC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function B0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var H0={exports:{}},xc={},W0={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),NC=Symbol.for("react.portal"),bC=Symbol.for("react.fragment"),OC=Symbol.for("react.strict_mode"),DC=Symbol.for("react.profiler"),LC=Symbol.for("react.provider"),MC=Symbol.for("react.context"),VC=Symbol.for("react.forward_ref"),FC=Symbol.for("react.suspense"),$C=Symbol.for("react.memo"),jC=Symbol.for("react.lazy"),Iv=Symbol.iterator;function UC(t){return t===null||typeof t!="object"?null:(t=Iv&&t[Iv]||t["@@iterator"],typeof t=="function"?t:null)}var q0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G0=Object.assign,K0={};function zs(t,e,n){this.props=t,this.context=e,this.refs=K0,this.updater=n||q0}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Q0(){}Q0.prototype=zs.prototype;function Hp(t,e,n){this.props=t,this.context=e,this.refs=K0,this.updater=n||q0}var Wp=Hp.prototype=new Q0;Wp.constructor=Hp;G0(Wp,zs.prototype);Wp.isPureReactComponent=!0;var Tv=Array.isArray,Y0=Object.prototype.hasOwnProperty,qp={current:null},X0={key:!0,ref:!0,__self:!0,__source:!0};function J0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Y0.call(e,r)&&!X0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fa,type:t,key:s,ref:o,props:i,_owner:qp.current}}function zC(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gp(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function BC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Cv=/\/+/g;function jd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BC(""+t.key):e.toString(36)}function ou(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case NC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+jd(o,0):r,Tv(i)?(n="",t!=null&&(n=t.replace(Cv,"$&/")+"/"),ou(i,e,n,"",function(u){return u})):i!=null&&(Gp(i)&&(i=zC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Cv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Tv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+jd(s,a);o+=ou(s,e,n,l,i)}else if(l=UC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+jd(s,a++),o+=ou(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function vl(t,e,n){if(t==null)return t;var r=[],i=0;return ou(t,r,"","",function(s){return e.call(n,s,i++)}),r}function HC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var vt={current:null},au={transition:null},WC={ReactCurrentDispatcher:vt,ReactCurrentBatchConfig:au,ReactCurrentOwner:qp};X.Children={map:vl,forEach:function(t,e,n){vl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return vl(t,function(){e++}),e},toArray:function(t){return vl(t,function(e){return e})||[]},only:function(t){if(!Gp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=zs;X.Fragment=bC;X.Profiler=DC;X.PureComponent=Hp;X.StrictMode=OC;X.Suspense=FC;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WC;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=G0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Y0.call(e,l)&&!X0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fa,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:MC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:LC,_context:t},t.Consumer=t};X.createElement=J0;X.createFactory=function(t){var e=J0.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:VC,render:t}};X.isValidElement=Gp;X.lazy=function(t){return{$$typeof:jC,_payload:{_status:-1,_result:t},_init:HC}};X.memo=function(t,e){return{$$typeof:$C,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=au.transition;au.transition={};try{t()}finally{au.transition=e}};X.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};X.useCallback=function(t,e){return vt.current.useCallback(t,e)};X.useContext=function(t){return vt.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return vt.current.useDeferredValue(t)};X.useEffect=function(t,e){return vt.current.useEffect(t,e)};X.useId=function(){return vt.current.useId()};X.useImperativeHandle=function(t,e,n){return vt.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return vt.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return vt.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return vt.current.useMemo(t,e)};X.useReducer=function(t,e,n){return vt.current.useReducer(t,e,n)};X.useRef=function(t){return vt.current.useRef(t)};X.useState=function(t){return vt.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return vt.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return vt.current.useTransition()};X.version="18.2.0";W0.exports=X;var S=W0.exports;const ne=B0(S),qC=xC({__proto__:null,default:ne},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var GC=S,KC=Symbol.for("react.element"),QC=Symbol.for("react.fragment"),YC=Object.prototype.hasOwnProperty,XC=GC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,JC={key:!0,ref:!0,__self:!0,__source:!0};function Z0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)YC.call(e,r)&&!JC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:KC,type:t,key:s,ref:o,props:i,_owner:XC.current}}xc.Fragment=QC;xc.jsx=Z0;xc.jsxs=Z0;H0.exports=xc;var h=H0.exports,Gh={},e1={exports:{}},$t={},t1={exports:{}},n1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,z){var W=b.length;b.push(z);e:for(;0<W;){var re=W-1>>>1,ie=b[re];if(0<i(ie,z))b[re]=z,b[W]=ie,W=re;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var z=b[0],W=b.pop();if(W!==z){b[0]=W;e:for(var re=0,ie=b.length,We=ie>>>1;re<We;){var De=2*(re+1)-1,wt=b[De],dt=De+1,pn=b[dt];if(0>i(wt,W))dt<ie&&0>i(pn,wt)?(b[re]=pn,b[dt]=W,re=dt):(b[re]=wt,b[De]=W,re=De);else if(dt<ie&&0>i(pn,W))b[re]=pn,b[dt]=W,re=dt;else break e}}return z}function i(b,z){var W=b.sortIndex-z.sortIndex;return W!==0?W:b.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,m=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(b){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=b)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function E(b){if(_=!1,y(b),!m)if(n(l)!==null)m=!0,ar(I);else{var z=n(u);z!==null&&Pt(E,z.startTime-b)}}function I(b,z){m=!1,_&&(_=!1,g(T),T=-1),p=!0;var W=f;try{for(y(z),d=n(l);d!==null&&(!(d.expirationTime>z)||b&&!pe());){var re=d.callback;if(typeof re=="function"){d.callback=null,f=d.priorityLevel;var ie=re(d.expirationTime<=z);z=t.unstable_now(),typeof ie=="function"?d.callback=ie:d===n(l)&&r(l),y(z)}else r(l);d=n(l)}if(d!==null)var We=!0;else{var De=n(u);De!==null&&Pt(E,De.startTime-z),We=!1}return We}finally{d=null,f=W,p=!1}}var R=!1,C=null,T=-1,N=5,M=-1;function pe(){return!(t.unstable_now()-M<N)}function _t(){if(C!==null){var b=t.unstable_now();M=b;var z=!0;try{z=C(!0,b)}finally{z?zt():(R=!1,C=null)}}else R=!1}var zt;if(typeof v=="function")zt=function(){v(_t)};else if(typeof MessageChannel<"u"){var Zt=new MessageChannel,or=Zt.port2;Zt.port1.onmessage=_t,zt=function(){or.postMessage(null)}}else zt=function(){w(_t,0)};function ar(b){C=b,R||(R=!0,zt())}function Pt(b,z){T=w(function(){b(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,ar(I))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var z=3;break;default:z=f}var W=f;f=z;try{return b()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,z){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var W=f;f=b;try{return z()}finally{f=W}},t.unstable_scheduleCallback=function(b,z,W){var re=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?re+W:re):W=re,b){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=W+ie,b={id:c++,callback:z,priorityLevel:b,startTime:W,expirationTime:ie,sortIndex:-1},W>re?(b.sortIndex=W,e(u,b),n(l)===null&&b===n(u)&&(_?(g(T),T=-1):_=!0,Pt(E,W-re))):(b.sortIndex=ie,e(l,b),m||p||(m=!0,ar(I))),b},t.unstable_shouldYield=pe,t.unstable_wrapCallback=function(b){var z=f;return function(){var W=f;f=z;try{return b.apply(this,arguments)}finally{f=W}}}})(n1);t1.exports=n1;var ZC=t1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1=S,Mt=ZC;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i1=new Set,Go={};function Vi(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(Go[t]=e,t=0;t<e.length;t++)i1.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kh=Object.prototype.hasOwnProperty,eR=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rv={},Av={};function tR(t){return Kh.call(Av,t)?!0:Kh.call(Rv,t)?!1:eR.test(t)?Av[t]=!0:(Rv[t]=!0,!1)}function nR(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rR(t,e,n,r){if(e===null||typeof e>"u"||nR(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Kp=/[\-:]([a-z])/g;function Qp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Kp,Qp);Ze[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Kp,Qp);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Kp,Qp);Ze[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yp(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rR(e,n,i,r)&&(n=null),r||i===null?tR(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tr=r1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),Qi=Symbol.for("react.portal"),Yi=Symbol.for("react.fragment"),Xp=Symbol.for("react.strict_mode"),Qh=Symbol.for("react.profiler"),s1=Symbol.for("react.provider"),o1=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),Yh=Symbol.for("react.suspense"),Xh=Symbol.for("react.suspense_list"),Zp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),a1=Symbol.for("react.offscreen"),kv=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=kv&&t[kv]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Ud;function vo(t){if(Ud===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ud=e&&e[1]||""}return`
`+Ud+t}var zd=!1;function Bd(t,e){if(!t||zd)return"";zd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{zd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?vo(t):""}function iR(t){switch(t.tag){case 5:return vo(t.type);case 16:return vo("Lazy");case 13:return vo("Suspense");case 19:return vo("SuspenseList");case 0:case 2:case 15:return t=Bd(t.type,!1),t;case 11:return t=Bd(t.type.render,!1),t;case 1:return t=Bd(t.type,!0),t;default:return""}}function Jh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yi:return"Fragment";case Qi:return"Portal";case Qh:return"Profiler";case Xp:return"StrictMode";case Yh:return"Suspense";case Xh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case o1:return(t.displayName||"Context")+".Consumer";case s1:return(t._context.displayName||"Context")+".Provider";case Jp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zp:return e=t.displayName||null,e!==null?e:Jh(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return Jh(t(e))}catch{}}return null}function sR(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jh(e);case 8:return e===Xp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function jr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function l1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oR(t){var e=l1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _l(t){t._valueTracker||(t._valueTracker=oR(t))}function u1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=l1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zh(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function c1(t,e){e=e.checked,e!=null&&Yp(t,"checked",e,!1)}function ef(t,e){c1(t,e);var n=jr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?tf(t,e.type,n):e.hasOwnProperty("defaultValue")&&tf(t,e.type,jr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function xv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function tf(t,e,n){(e!=="number"||Pu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var yo=Array.isArray;function hs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function nf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(yo(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jr(n)}}function d1(t,e){var n=jr(e.value),r=jr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function h1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function rf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?h1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wl,f1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wl=wl||document.createElement("div"),wl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ko(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aR=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(t){aR.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ko[e]=ko[t]})});function p1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ko.hasOwnProperty(t)&&ko[t]?(""+e).trim():e+"px"}function g1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=p1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lR=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sf(t,e){if(e){if(lR[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function of(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var af=null;function eg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var lf=null,fs=null,ps=null;function Ov(t){if(t=Ua(t)){if(typeof lf!="function")throw Error(P(280));var e=t.stateNode;e&&(e=Lc(e),lf(t.stateNode,t.type,e))}}function m1(t){fs?ps?ps.push(t):ps=[t]:fs=t}function v1(){if(fs){var t=fs,e=ps;if(ps=fs=null,Ov(t),e)for(t=0;t<e.length;t++)Ov(e[t])}}function y1(t,e){return t(e)}function _1(){}var Hd=!1;function w1(t,e,n){if(Hd)return t(e,n);Hd=!0;try{return y1(t,e,n)}finally{Hd=!1,(fs!==null||ps!==null)&&(_1(),v1())}}function Qo(t,e){var n=t.stateNode;if(n===null)return null;var r=Lc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var uf=!1;if(Hn)try{var io={};Object.defineProperty(io,"passive",{get:function(){uf=!0}}),window.addEventListener("test",io,io),window.removeEventListener("test",io,io)}catch{uf=!1}function uR(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Po=!1,xu=null,Nu=!1,cf=null,cR={onError:function(t){Po=!0,xu=t}};function dR(t,e,n,r,i,s,o,a,l){Po=!1,xu=null,uR.apply(cR,arguments)}function hR(t,e,n,r,i,s,o,a,l){if(dR.apply(this,arguments),Po){if(Po){var u=xu;Po=!1,xu=null}else throw Error(P(198));Nu||(Nu=!0,cf=u)}}function Fi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dv(t){if(Fi(t)!==t)throw Error(P(188))}function fR(t){var e=t.alternate;if(!e){if(e=Fi(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dv(i),t;if(s===r)return Dv(i),e;s=s.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function S1(t){return t=fR(t),t!==null?I1(t):null}function I1(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=I1(t);if(e!==null)return e;t=t.sibling}return null}var T1=Mt.unstable_scheduleCallback,Lv=Mt.unstable_cancelCallback,pR=Mt.unstable_shouldYield,gR=Mt.unstable_requestPaint,Pe=Mt.unstable_now,mR=Mt.unstable_getCurrentPriorityLevel,tg=Mt.unstable_ImmediatePriority,C1=Mt.unstable_UserBlockingPriority,bu=Mt.unstable_NormalPriority,vR=Mt.unstable_LowPriority,R1=Mt.unstable_IdlePriority,Nc=null,In=null;function yR(t){if(In&&typeof In.onCommitFiberRoot=="function")try{In.onCommitFiberRoot(Nc,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:ER,_R=Math.log,wR=Math.LN2;function ER(t){return t>>>=0,t===0?32:31-(_R(t)/wR|0)|0}var El=64,Sl=4194304;function _o(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ou(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_o(a):(s&=o,s!==0&&(r=_o(s)))}else o=n&~i,o!==0?r=_o(o):s!==0&&(r=_o(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function SR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-on(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=SR(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function df(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function A1(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function Wd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function TR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ng(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var se=0;function k1(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var P1,rg,x1,N1,b1,hf=!1,Il=[],Ar=null,kr=null,Pr=null,Yo=new Map,Xo=new Map,fr=[],CR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mv(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Yo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(e.pointerId)}}function so(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ua(e),e!==null&&rg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RR(t,e,n,r,i){switch(e){case"focusin":return Ar=so(Ar,t,e,n,r,i),!0;case"dragenter":return kr=so(kr,t,e,n,r,i),!0;case"mouseover":return Pr=so(Pr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Yo.set(s,so(Yo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Xo.set(s,so(Xo.get(s)||null,t,e,n,r,i)),!0}return!1}function O1(t){var e=ai(t.target);if(e!==null){var n=Fi(e);if(n!==null){if(e=n.tag,e===13){if(e=E1(n),e!==null){t.blockedOn=e,b1(t.priority,function(){x1(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function lu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ff(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);af=r,n.target.dispatchEvent(r),af=null}else return e=Ua(n),e!==null&&rg(e),t.blockedOn=n,!1;e.shift()}return!0}function Vv(t,e,n){lu(t)&&n.delete(e)}function AR(){hf=!1,Ar!==null&&lu(Ar)&&(Ar=null),kr!==null&&lu(kr)&&(kr=null),Pr!==null&&lu(Pr)&&(Pr=null),Yo.forEach(Vv),Xo.forEach(Vv)}function oo(t,e){t.blockedOn===e&&(t.blockedOn=null,hf||(hf=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,AR)))}function Jo(t){function e(i){return oo(i,t)}if(0<Il.length){oo(Il[0],t);for(var n=1;n<Il.length;n++){var r=Il[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ar!==null&&oo(Ar,t),kr!==null&&oo(kr,t),Pr!==null&&oo(Pr,t),Yo.forEach(e),Xo.forEach(e),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)O1(n),n.blockedOn===null&&fr.shift()}var gs=tr.ReactCurrentBatchConfig,Du=!0;function kR(t,e,n,r){var i=se,s=gs.transition;gs.transition=null;try{se=1,ig(t,e,n,r)}finally{se=i,gs.transition=s}}function PR(t,e,n,r){var i=se,s=gs.transition;gs.transition=null;try{se=4,ig(t,e,n,r)}finally{se=i,gs.transition=s}}function ig(t,e,n,r){if(Du){var i=ff(t,e,n,r);if(i===null)th(t,e,r,Lu,n),Mv(t,r);else if(RR(i,t,e,n,r))r.stopPropagation();else if(Mv(t,r),e&4&&-1<CR.indexOf(t)){for(;i!==null;){var s=Ua(i);if(s!==null&&P1(s),s=ff(t,e,n,r),s===null&&th(t,e,r,Lu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else th(t,e,r,null,n)}}var Lu=null;function ff(t,e,n,r){if(Lu=null,t=eg(r),t=ai(t),t!==null)if(e=Fi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lu=t,null}function D1(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mR()){case tg:return 1;case C1:return 4;case bu:case vR:return 16;case R1:return 536870912;default:return 16}default:return 16}}var wr=null,sg=null,uu=null;function L1(){if(uu)return uu;var t,e=sg,n=e.length,r,i="value"in wr?wr.value:wr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uu=i.slice(t,1<r?1-r:void 0)}function cu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function Fv(){return!1}function jt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Tl:Fv,this.isPropagationStopped=Fv,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},og=jt(Bs),ja=Ee({},Bs,{view:0,detail:0}),xR=jt(ja),qd,Gd,ao,bc=Ee({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ag,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ao&&(ao&&t.type==="mousemove"?(qd=t.screenX-ao.screenX,Gd=t.screenY-ao.screenY):Gd=qd=0,ao=t),qd)},movementY:function(t){return"movementY"in t?t.movementY:Gd}}),$v=jt(bc),NR=Ee({},bc,{dataTransfer:0}),bR=jt(NR),OR=Ee({},ja,{relatedTarget:0}),Kd=jt(OR),DR=Ee({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),LR=jt(DR),MR=Ee({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VR=jt(MR),FR=Ee({},Bs,{data:0}),jv=jt(FR),$R={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UR[t])?!!e[t]:!1}function ag(){return zR}var BR=Ee({},ja,{key:function(t){if(t.key){var e=$R[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=cu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ag,charCode:function(t){return t.type==="keypress"?cu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HR=jt(BR),WR=Ee({},bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uv=jt(WR),qR=Ee({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ag}),GR=jt(qR),KR=Ee({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),QR=jt(KR),YR=Ee({},bc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XR=jt(YR),JR=[9,13,27,32],lg=Hn&&"CompositionEvent"in window,xo=null;Hn&&"documentMode"in document&&(xo=document.documentMode);var ZR=Hn&&"TextEvent"in window&&!xo,M1=Hn&&(!lg||xo&&8<xo&&11>=xo),zv=" ",Bv=!1;function V1(t,e){switch(t){case"keyup":return JR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function F1(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xi=!1;function eA(t,e){switch(t){case"compositionend":return F1(e);case"keypress":return e.which!==32?null:(Bv=!0,zv);case"textInput":return t=e.data,t===zv&&Bv?null:t;default:return null}}function tA(t,e){if(Xi)return t==="compositionend"||!lg&&V1(t,e)?(t=L1(),uu=sg=wr=null,Xi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return M1&&e.locale!=="ko"?null:e.data;default:return null}}var nA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nA[t.type]:e==="textarea"}function $1(t,e,n,r){m1(r),e=Mu(e,"onChange"),0<e.length&&(n=new og("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var No=null,Zo=null;function rA(t){Y1(t,0)}function Oc(t){var e=es(t);if(u1(e))return t}function iA(t,e){if(t==="change")return e}var j1=!1;if(Hn){var Qd;if(Hn){var Yd="oninput"in document;if(!Yd){var Wv=document.createElement("div");Wv.setAttribute("oninput","return;"),Yd=typeof Wv.oninput=="function"}Qd=Yd}else Qd=!1;j1=Qd&&(!document.documentMode||9<document.documentMode)}function qv(){No&&(No.detachEvent("onpropertychange",U1),Zo=No=null)}function U1(t){if(t.propertyName==="value"&&Oc(Zo)){var e=[];$1(e,Zo,t,eg(t)),w1(rA,e)}}function sA(t,e,n){t==="focusin"?(qv(),No=e,Zo=n,No.attachEvent("onpropertychange",U1)):t==="focusout"&&qv()}function oA(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Oc(Zo)}function aA(t,e){if(t==="click")return Oc(e)}function lA(t,e){if(t==="input"||t==="change")return Oc(e)}function uA(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var cn=typeof Object.is=="function"?Object.is:uA;function ea(t,e){if(cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Kh.call(e,i)||!cn(t[i],e[i]))return!1}return!0}function Gv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kv(t,e){var n=Gv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Gv(n)}}function z1(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?z1(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function B1(){for(var t=window,e=Pu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pu(t.document)}return e}function ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cA(t){var e=B1(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&z1(n.ownerDocument.documentElement,n)){if(r!==null&&ug(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kv(n,s);var o=Kv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dA=Hn&&"documentMode"in document&&11>=document.documentMode,Ji=null,pf=null,bo=null,gf=!1;function Qv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gf||Ji==null||Ji!==Pu(r)||(r=Ji,"selectionStart"in r&&ug(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&ea(bo,r)||(bo=r,r=Mu(pf,"onSelect"),0<r.length&&(e=new og("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ji)))}function Cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zi={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},Xd={},H1={};Hn&&(H1=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function Dc(t){if(Xd[t])return Xd[t];if(!Zi[t])return t;var e=Zi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in H1)return Xd[t]=e[n];return t}var W1=Dc("animationend"),q1=Dc("animationiteration"),G1=Dc("animationstart"),K1=Dc("transitionend"),Q1=new Map,Yv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yr(t,e){Q1.set(t,e),Vi(e,[t])}for(var Jd=0;Jd<Yv.length;Jd++){var Zd=Yv[Jd],hA=Zd.toLowerCase(),fA=Zd[0].toUpperCase()+Zd.slice(1);Yr(hA,"on"+fA)}Yr(W1,"onAnimationEnd");Yr(q1,"onAnimationIteration");Yr(G1,"onAnimationStart");Yr("dblclick","onDoubleClick");Yr("focusin","onFocus");Yr("focusout","onBlur");Yr(K1,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Vi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pA=new Set("cancel close invalid load scroll toggle".split(" ").concat(wo));function Xv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hR(r,e,void 0,t),t.currentTarget=null}function Y1(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Xv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Xv(i,a,u),s=l}}}if(Nu)throw t=cf,Nu=!1,cf=null,t}function ue(t,e){var n=e[wf];n===void 0&&(n=e[wf]=new Set);var r=t+"__bubble";n.has(r)||(X1(e,t,2,!1),n.add(r))}function eh(t,e,n){var r=0;e&&(r|=4),X1(n,t,r,e)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function ta(t){if(!t[Rl]){t[Rl]=!0,i1.forEach(function(n){n!=="selectionchange"&&(pA.has(n)||eh(n,!1,t),eh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Rl]||(e[Rl]=!0,eh("selectionchange",!1,e))}}function X1(t,e,n,r){switch(D1(e)){case 1:var i=kR;break;case 4:i=PR;break;default:i=ig}n=i.bind(null,e,n,t),i=void 0,!uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function th(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ai(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}w1(function(){var u=s,c=eg(n),d=[];e:{var f=Q1.get(t);if(f!==void 0){var p=og,m=t;switch(t){case"keypress":if(cu(n)===0)break e;case"keydown":case"keyup":p=HR;break;case"focusin":m="focus",p=Kd;break;case"focusout":m="blur",p=Kd;break;case"beforeblur":case"afterblur":p=Kd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=$v;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=bR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GR;break;case W1:case q1:case G1:p=LR;break;case K1:p=QR;break;case"scroll":p=xR;break;case"wheel":p=XR;break;case"copy":case"cut":case"paste":p=VR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Uv}var _=(e&4)!==0,w=!_&&t==="scroll",g=_?f!==null?f+"Capture":null:f;_=[];for(var v=u,y;v!==null;){y=v;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=Qo(v,g),E!=null&&_.push(na(v,E,y)))),w)break;v=v.return}0<_.length&&(f=new p(f,m,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==af&&(m=n.relatedTarget||n.fromElement)&&(ai(m)||m[Wn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?ai(m):null,m!==null&&(w=Fi(m),m!==w||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(_=$v,E="onMouseLeave",g="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Uv,E="onPointerLeave",g="onPointerEnter",v="pointer"),w=p==null?f:es(p),y=m==null?f:es(m),f=new _(E,v+"leave",p,n,c),f.target=w,f.relatedTarget=y,E=null,ai(c)===u&&(_=new _(g,v+"enter",m,n,c),_.target=y,_.relatedTarget=w,E=_),w=E,p&&m)t:{for(_=p,g=m,v=0,y=_;y;y=Hi(y))v++;for(y=0,E=g;E;E=Hi(E))y++;for(;0<v-y;)_=Hi(_),v--;for(;0<y-v;)g=Hi(g),y--;for(;v--;){if(_===g||g!==null&&_===g.alternate)break t;_=Hi(_),g=Hi(g)}_=null}else _=null;p!==null&&Jv(d,f,p,_,!1),m!==null&&w!==null&&Jv(d,w,m,_,!0)}}e:{if(f=u?es(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var I=iA;else if(Hv(f))if(j1)I=lA;else{I=oA;var R=sA}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(I=aA);if(I&&(I=I(t,u))){$1(d,I,n,c);break e}R&&R(t,f,u),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&tf(f,"number",f.value)}switch(R=u?es(u):window,t){case"focusin":(Hv(R)||R.contentEditable==="true")&&(Ji=R,pf=u,bo=null);break;case"focusout":bo=pf=Ji=null;break;case"mousedown":gf=!0;break;case"contextmenu":case"mouseup":case"dragend":gf=!1,Qv(d,n,c);break;case"selectionchange":if(dA)break;case"keydown":case"keyup":Qv(d,n,c)}var C;if(lg)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Xi?V1(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(M1&&n.locale!=="ko"&&(Xi||T!=="onCompositionStart"?T==="onCompositionEnd"&&Xi&&(C=L1()):(wr=c,sg="value"in wr?wr.value:wr.textContent,Xi=!0)),R=Mu(u,T),0<R.length&&(T=new jv(T,t,null,n,c),d.push({event:T,listeners:R}),C?T.data=C:(C=F1(n),C!==null&&(T.data=C)))),(C=ZR?eA(t,n):tA(t,n))&&(u=Mu(u,"onBeforeInput"),0<u.length&&(c=new jv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}Y1(d,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Mu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qo(t,n),s!=null&&r.unshift(na(t,s,i)),s=Qo(t,e),s!=null&&r.push(na(t,s,i))),t=t.return}return r}function Hi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Qo(n,s),l!=null&&o.unshift(na(n,l,a))):i||(l=Qo(n,s),l!=null&&o.push(na(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gA=/\r\n?/g,mA=/\u0000|\uFFFD/g;function Zv(t){return(typeof t=="string"?t:""+t).replace(gA,`
`).replace(mA,"")}function Al(t,e,n){if(e=Zv(e),Zv(t)!==e&&n)throw Error(P(425))}function Vu(){}var mf=null,vf=null;function yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _f=typeof setTimeout=="function"?setTimeout:void 0,vA=typeof clearTimeout=="function"?clearTimeout:void 0,ey=typeof Promise=="function"?Promise:void 0,yA=typeof queueMicrotask=="function"?queueMicrotask:typeof ey<"u"?function(t){return ey.resolve(null).then(t).catch(_A)}:_f;function _A(t){setTimeout(function(){throw t})}function nh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Jo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Jo(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ty(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),vn="__reactFiber$"+Hs,ra="__reactProps$"+Hs,Wn="__reactContainer$"+Hs,wf="__reactEvents$"+Hs,wA="__reactListeners$"+Hs,EA="__reactHandles$"+Hs;function ai(t){var e=t[vn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[vn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ty(t);t!==null;){if(n=t[vn])return n;t=ty(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[vn]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function Lc(t){return t[ra]||null}var Ef=[],ts=-1;function Xr(t){return{current:t}}function he(t){0>ts||(t.current=Ef[ts],Ef[ts]=null,ts--)}function ae(t,e){ts++,Ef[ts]=t.current,t.current=e}var Ur={},lt=Xr(Ur),Ct=Xr(!1),Ei=Ur;function Cs(t,e){var n=t.type.contextTypes;if(!n)return Ur;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Rt(t){return t=t.childContextTypes,t!=null}function Fu(){he(Ct),he(lt)}function ny(t,e,n){if(lt.current!==Ur)throw Error(P(168));ae(lt,e),ae(Ct,n)}function J1(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,sR(t)||"Unknown",i));return Ee({},n,r)}function $u(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ur,Ei=lt.current,ae(lt,t),ae(Ct,Ct.current),!0}function ry(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=J1(t,e,Ei),r.__reactInternalMemoizedMergedChildContext=t,he(Ct),he(lt),ae(lt,t)):he(Ct),ae(Ct,n)}var Vn=null,Mc=!1,rh=!1;function Z1(t){Vn===null?Vn=[t]:Vn.push(t)}function SA(t){Mc=!0,Z1(t)}function Jr(){if(!rh&&Vn!==null){rh=!0;var t=0,e=se;try{var n=Vn;for(se=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Vn=null,Mc=!1}catch(i){throw Vn!==null&&(Vn=Vn.slice(t+1)),T1(tg,Jr),i}finally{se=e,rh=!1}}return null}var ns=[],rs=0,ju=null,Uu=0,Bt=[],Ht=0,Si=null,Fn=1,$n="";function ii(t,e){ns[rs++]=Uu,ns[rs++]=ju,ju=t,Uu=e}function ew(t,e,n){Bt[Ht++]=Fn,Bt[Ht++]=$n,Bt[Ht++]=Si,Si=t;var r=Fn;t=$n;var i=32-on(r)-1;r&=~(1<<i),n+=1;var s=32-on(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Fn=1<<32-on(e)+i|n<<i|r,$n=s+t}else Fn=1<<s|n<<i|r,$n=t}function cg(t){t.return!==null&&(ii(t,1),ew(t,1,0))}function dg(t){for(;t===ju;)ju=ns[--rs],ns[rs]=null,Uu=ns[--rs],ns[rs]=null;for(;t===Si;)Si=Bt[--Ht],Bt[Ht]=null,$n=Bt[--Ht],Bt[Ht]=null,Fn=Bt[--Ht],Bt[Ht]=null}var Lt=null,Nt=null,ge=!1,rn=null;function tw(t,e){var n=qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function iy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Lt=t,Nt=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Lt=t,Nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Si!==null?{id:Fn,overflow:$n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Lt=t,Nt=null,!0):!1;default:return!1}}function Sf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function If(t){if(ge){var e=Nt;if(e){var n=e;if(!iy(t,e)){if(Sf(t))throw Error(P(418));e=xr(n.nextSibling);var r=Lt;e&&iy(t,e)?tw(r,n):(t.flags=t.flags&-4097|2,ge=!1,Lt=t)}}else{if(Sf(t))throw Error(P(418));t.flags=t.flags&-4097|2,ge=!1,Lt=t}}}function sy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Lt=t}function kl(t){if(t!==Lt)return!1;if(!ge)return sy(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yf(t.type,t.memoizedProps)),e&&(e=Nt)){if(Sf(t))throw nw(),Error(P(418));for(;e;)tw(t,e),e=xr(e.nextSibling)}if(sy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Nt=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Nt=null}}else Nt=Lt?xr(t.stateNode.nextSibling):null;return!0}function nw(){for(var t=Nt;t;)t=xr(t.nextSibling)}function Rs(){Nt=Lt=null,ge=!1}function hg(t){rn===null?rn=[t]:rn.push(t)}var IA=tr.ReactCurrentBatchConfig;function tn(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var zu=Xr(null),Bu=null,is=null,fg=null;function pg(){fg=is=Bu=null}function gg(t){var e=zu.current;he(zu),t._currentValue=e}function Tf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){Bu=t,fg=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function Yt(t){var e=t._currentValue;if(fg!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(Bu===null)throw Error(P(308));is=t,Bu.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var li=null;function mg(t){li===null?li=[t]:li.push(t)}function rw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mg(e)):(n.next=i.next,i.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function vg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Bn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qn(t,n)}return i=r.interleaved,i===null?(e.next=e,mg(r)):(e.next=i.next,i.next=e),r.interleaved=e,qn(t,n)}function du(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ng(t,n)}}function oy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hu(t,e,n,r){var i=t.updateQueue;hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,_=a;switch(f=e,p=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=_.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=Ee({},d,f);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ti|=o,t.lanes=o,t.memoizedState=d}}function ay(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var sw=new r1.Component().refs;function Cf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vc={isMounted:function(t){return(t=t._reactInternals)?Fi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Or(t),s=Bn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(an(e,t,i,r),du(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),i=Or(t),s=Bn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Nr(t,s,i),e!==null&&(an(e,t,i,r),du(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=Or(t),i=Bn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Nr(t,i,r),e!==null&&(an(e,t,r,n),du(e,t,r))}};function ly(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ea(n,r)||!ea(i,s):!0}function ow(t,e,n){var r=!1,i=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Yt(s):(i=Rt(e)?Ei:lt.current,r=e.contextTypes,s=(r=r!=null)?Cs(t,i):Ur),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function uy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Vc.enqueueReplaceState(e,e.state,null)}function Rf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=sw,vg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Yt(s):(s=Rt(e)?Ei:lt.current,i.context=Cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Vc.enqueueReplaceState(i,i.state,null),Hu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function lo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===sw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function Pl(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cy(t){var e=t._init;return e(t._payload)}function aw(t){function e(g,v){if(t){var y=g.deletions;y===null?(g.deletions=[v],g.flags|=16):y.push(v)}}function n(g,v){if(!t)return null;for(;v!==null;)e(g,v),v=v.sibling;return null}function r(g,v){for(g=new Map;v!==null;)v.key!==null?g.set(v.key,v):g.set(v.index,v),v=v.sibling;return g}function i(g,v){return g=Dr(g,v),g.index=0,g.sibling=null,g}function s(g,v,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<v?(g.flags|=2,v):y):(g.flags|=2,v)):(g.flags|=1048576,v)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,v,y,E){return v===null||v.tag!==6?(v=ch(y,g.mode,E),v.return=g,v):(v=i(v,y),v.return=g,v)}function l(g,v,y,E){var I=y.type;return I===Yi?c(g,v,y.props.children,E,y.key):v!==null&&(v.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===dr&&cy(I)===v.type)?(E=i(v,y.props),E.ref=lo(g,v,y),E.return=g,E):(E=vu(y.type,y.key,y.props,null,g.mode,E),E.ref=lo(g,v,y),E.return=g,E)}function u(g,v,y,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=dh(y,g.mode,E),v.return=g,v):(v=i(v,y.children||[]),v.return=g,v)}function c(g,v,y,E,I){return v===null||v.tag!==7?(v=mi(y,g.mode,E,I),v.return=g,v):(v=i(v,y),v.return=g,v)}function d(g,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=ch(""+v,g.mode,y),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yl:return y=vu(v.type,v.key,v.props,null,g.mode,y),y.ref=lo(g,null,v),y.return=g,y;case Qi:return v=dh(v,g.mode,y),v.return=g,v;case dr:var E=v._init;return d(g,E(v._payload),y)}if(yo(v)||ro(v))return v=mi(v,g.mode,y,null),v.return=g,v;Pl(g,v)}return null}function f(g,v,y,E){var I=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(g,v,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yl:return y.key===I?l(g,v,y,E):null;case Qi:return y.key===I?u(g,v,y,E):null;case dr:return I=y._init,f(g,v,I(y._payload),E)}if(yo(y)||ro(y))return I!==null?null:c(g,v,y,E,null);Pl(g,y)}return null}function p(g,v,y,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,a(v,g,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case yl:return g=g.get(E.key===null?y:E.key)||null,l(v,g,E,I);case Qi:return g=g.get(E.key===null?y:E.key)||null,u(v,g,E,I);case dr:var R=E._init;return p(g,v,y,R(E._payload),I)}if(yo(E)||ro(E))return g=g.get(y)||null,c(v,g,E,I,null);Pl(v,E)}return null}function m(g,v,y,E){for(var I=null,R=null,C=v,T=v=0,N=null;C!==null&&T<y.length;T++){C.index>T?(N=C,C=null):N=C.sibling;var M=f(g,C,y[T],E);if(M===null){C===null&&(C=N);break}t&&C&&M.alternate===null&&e(g,C),v=s(M,v,T),R===null?I=M:R.sibling=M,R=M,C=N}if(T===y.length)return n(g,C),ge&&ii(g,T),I;if(C===null){for(;T<y.length;T++)C=d(g,y[T],E),C!==null&&(v=s(C,v,T),R===null?I=C:R.sibling=C,R=C);return ge&&ii(g,T),I}for(C=r(g,C);T<y.length;T++)N=p(C,g,T,y[T],E),N!==null&&(t&&N.alternate!==null&&C.delete(N.key===null?T:N.key),v=s(N,v,T),R===null?I=N:R.sibling=N,R=N);return t&&C.forEach(function(pe){return e(g,pe)}),ge&&ii(g,T),I}function _(g,v,y,E){var I=ro(y);if(typeof I!="function")throw Error(P(150));if(y=I.call(y),y==null)throw Error(P(151));for(var R=I=null,C=v,T=v=0,N=null,M=y.next();C!==null&&!M.done;T++,M=y.next()){C.index>T?(N=C,C=null):N=C.sibling;var pe=f(g,C,M.value,E);if(pe===null){C===null&&(C=N);break}t&&C&&pe.alternate===null&&e(g,C),v=s(pe,v,T),R===null?I=pe:R.sibling=pe,R=pe,C=N}if(M.done)return n(g,C),ge&&ii(g,T),I;if(C===null){for(;!M.done;T++,M=y.next())M=d(g,M.value,E),M!==null&&(v=s(M,v,T),R===null?I=M:R.sibling=M,R=M);return ge&&ii(g,T),I}for(C=r(g,C);!M.done;T++,M=y.next())M=p(C,g,T,M.value,E),M!==null&&(t&&M.alternate!==null&&C.delete(M.key===null?T:M.key),v=s(M,v,T),R===null?I=M:R.sibling=M,R=M);return t&&C.forEach(function(_t){return e(g,_t)}),ge&&ii(g,T),I}function w(g,v,y,E){if(typeof y=="object"&&y!==null&&y.type===Yi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case yl:e:{for(var I=y.key,R=v;R!==null;){if(R.key===I){if(I=y.type,I===Yi){if(R.tag===7){n(g,R.sibling),v=i(R,y.props.children),v.return=g,g=v;break e}}else if(R.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===dr&&cy(I)===R.type){n(g,R.sibling),v=i(R,y.props),v.ref=lo(g,R,y),v.return=g,g=v;break e}n(g,R);break}else e(g,R);R=R.sibling}y.type===Yi?(v=mi(y.props.children,g.mode,E,y.key),v.return=g,g=v):(E=vu(y.type,y.key,y.props,null,g.mode,E),E.ref=lo(g,v,y),E.return=g,g=E)}return o(g);case Qi:e:{for(R=y.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(g,v.sibling),v=i(v,y.children||[]),v.return=g,g=v;break e}else{n(g,v);break}else e(g,v);v=v.sibling}v=dh(y,g.mode,E),v.return=g,g=v}return o(g);case dr:return R=y._init,w(g,v,R(y._payload),E)}if(yo(y))return m(g,v,y,E);if(ro(y))return _(g,v,y,E);Pl(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(g,v.sibling),v=i(v,y),v.return=g,g=v):(n(g,v),v=ch(y,g.mode,E),v.return=g,g=v),o(g)):n(g,v)}return w}var As=aw(!0),lw=aw(!1),za={},Tn=Xr(za),ia=Xr(za),sa=Xr(za);function ui(t){if(t===za)throw Error(P(174));return t}function yg(t,e){switch(ae(sa,e),ae(ia,t),ae(Tn,za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:rf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=rf(e,t)}he(Tn),ae(Tn,e)}function ks(){he(Tn),he(ia),he(sa)}function uw(t){ui(sa.current);var e=ui(Tn.current),n=rf(e,t.type);e!==n&&(ae(ia,t),ae(Tn,n))}function _g(t){ia.current===t&&(he(Tn),he(ia))}var ye=Xr(0);function Wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ih=[];function wg(){for(var t=0;t<ih.length;t++)ih[t]._workInProgressVersionPrimary=null;ih.length=0}var hu=tr.ReactCurrentDispatcher,sh=tr.ReactCurrentBatchConfig,Ii=0,_e=null,Le=null,Ue=null,qu=!1,Oo=!1,oa=0,TA=0;function et(){throw Error(P(321))}function Eg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!cn(t[n],e[n]))return!1;return!0}function Sg(t,e,n,r,i,s){if(Ii=s,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,hu.current=t===null||t.memoizedState===null?kA:PA,t=n(r,i),Oo){s=0;do{if(Oo=!1,oa=0,25<=s)throw Error(P(301));s+=1,Ue=Le=null,e.updateQueue=null,hu.current=xA,t=n(r,i)}while(Oo)}if(hu.current=Gu,e=Le!==null&&Le.next!==null,Ii=0,Ue=Le=_e=null,qu=!1,e)throw Error(P(300));return t}function Ig(){var t=oa!==0;return oa=0,t}function mn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?_e.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function Xt(){if(Le===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=Ue===null?_e.memoizedState:Ue.next;if(e!==null)Ue=e,Le=t;else{if(t===null)throw Error(P(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ue===null?_e.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function aa(t,e){return typeof e=="function"?e(t):e}function oh(t){var e=Xt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ii&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,_e.lanes|=c,Ti|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,cn(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,_e.lanes|=s,Ti|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ah(t){var e=Xt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);cn(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function cw(){}function dw(t,e){var n=_e,r=Xt(),i=e(),s=!cn(r.memoizedState,i);if(s&&(r.memoizedState=i,Tt=!0),r=r.queue,Tg(pw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,la(9,fw.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(P(349));Ii&30||hw(n,e,i)}return i}function hw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fw(t,e,n,r){e.value=n,e.getSnapshot=r,gw(e)&&mw(t)}function pw(t,e,n){return n(function(){gw(e)&&mw(t)})}function gw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!cn(t,n)}catch{return!0}}function mw(t){var e=qn(t,1);e!==null&&an(e,t,1,-1)}function dy(t){var e=mn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},e.queue=t,t=t.dispatch=AA.bind(null,_e,t),[e.memoizedState,t]}function la(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function vw(){return Xt().memoizedState}function fu(t,e,n,r){var i=mn();_e.flags|=t,i.memoizedState=la(1|e,n,void 0,r===void 0?null:r)}function Fc(t,e,n,r){var i=Xt();r=r===void 0?null:r;var s=void 0;if(Le!==null){var o=Le.memoizedState;if(s=o.destroy,r!==null&&Eg(r,o.deps)){i.memoizedState=la(e,n,s,r);return}}_e.flags|=t,i.memoizedState=la(1|e,n,s,r)}function hy(t,e){return fu(8390656,8,t,e)}function Tg(t,e){return Fc(2048,8,t,e)}function yw(t,e){return Fc(4,2,t,e)}function _w(t,e){return Fc(4,4,t,e)}function ww(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ew(t,e,n){return n=n!=null?n.concat([t]):null,Fc(4,4,ww.bind(null,e,t),n)}function Cg(){}function Sw(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Eg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Iw(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Eg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Tw(t,e,n){return Ii&21?(cn(n,e)||(n=A1(),_e.lanes|=n,Ti|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function CA(t,e){var n=se;se=n!==0&&4>n?n:4,t(!0);var r=sh.transition;sh.transition={};try{t(!1),e()}finally{se=n,sh.transition=r}}function Cw(){return Xt().memoizedState}function RA(t,e,n){var r=Or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Rw(t))Aw(e,n);else if(n=rw(t,e,n,r),n!==null){var i=mt();an(n,t,r,i),kw(n,e,r)}}function AA(t,e,n){var r=Or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Rw(t))Aw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,cn(a,o)){var l=e.interleaved;l===null?(i.next=i,mg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=rw(t,e,i,r),n!==null&&(i=mt(),an(n,t,r,i),kw(n,e,r))}}function Rw(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function Aw(t,e){Oo=qu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function kw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ng(t,n)}}var Gu={readContext:Yt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useInsertionEffect:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useSyncExternalStore:et,useId:et,unstable_isNewReconciler:!1},kA={readContext:Yt,useCallback:function(t,e){return mn().memoizedState=[t,e===void 0?null:e],t},useContext:Yt,useEffect:hy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fu(4194308,4,ww.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fu(4194308,4,t,e)},useInsertionEffect:function(t,e){return fu(4,2,t,e)},useMemo:function(t,e){var n=mn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RA.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=mn();return t={current:t},e.memoizedState=t},useState:dy,useDebugValue:Cg,useDeferredValue:function(t){return mn().memoizedState=t},useTransition:function(){var t=dy(!1),e=t[0];return t=CA.bind(null,t[1]),mn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=mn();if(ge){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),ze===null)throw Error(P(349));Ii&30||hw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hy(pw.bind(null,r,s,t),[t]),r.flags|=2048,la(9,fw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mn(),e=ze.identifierPrefix;if(ge){var n=$n,r=Fn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TA++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},PA={readContext:Yt,useCallback:Sw,useContext:Yt,useEffect:Tg,useImperativeHandle:Ew,useInsertionEffect:yw,useLayoutEffect:_w,useMemo:Iw,useReducer:oh,useRef:vw,useState:function(){return oh(aa)},useDebugValue:Cg,useDeferredValue:function(t){var e=Xt();return Tw(e,Le.memoizedState,t)},useTransition:function(){var t=oh(aa)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:dw,useId:Cw,unstable_isNewReconciler:!1},xA={readContext:Yt,useCallback:Sw,useContext:Yt,useEffect:Tg,useImperativeHandle:Ew,useInsertionEffect:yw,useLayoutEffect:_w,useMemo:Iw,useReducer:ah,useRef:vw,useState:function(){return ah(aa)},useDebugValue:Cg,useDeferredValue:function(t){var e=Xt();return Le===null?e.memoizedState=t:Tw(e,Le.memoizedState,t)},useTransition:function(){var t=ah(aa)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:cw,useSyncExternalStore:dw,useId:Cw,unstable_isNewReconciler:!1};function Ps(t,e){try{var n="",r=e;do n+=iR(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function lh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Af(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var NA=typeof WeakMap=="function"?WeakMap:Map;function Pw(t,e,n){n=Bn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Qu||(Qu=!0,Vf=r),Af(t,e)},n}function xw(t,e,n){n=Bn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Af(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Af(t,e),typeof r!="function"&&(br===null?br=new Set([this]):br.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new NA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=WA.bind(null,t,e,n),e.then(t,t))}function py(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Bn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var bA=tr.ReactCurrentOwner,Tt=!1;function ft(t,e,n,r){e.child=t===null?lw(e,null,n,r):As(e,t.child,n,r)}function my(t,e,n,r,i){n=n.render;var s=e.ref;return ms(e,i),r=Sg(t,e,n,r,s,i),n=Ig(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(ge&&n&&cg(e),e.flags|=1,ft(t,e,r,i),e.child)}function vy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Og(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Nw(t,e,s,r,i)):(t=vu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ea,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=Dr(s,r),t.ref=e.ref,t.return=e,e.child=t}function Nw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ea(s,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return kf(t,e,n,r,i)}function bw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(os,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(os,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(os,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(os,xt),xt|=r;return ft(t,e,i,n),e.child}function Ow(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kf(t,e,n,r,i){var s=Rt(n)?Ei:lt.current;return s=Cs(e,s),ms(e,i),n=Sg(t,e,n,r,s,i),r=Ig(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(ge&&r&&cg(e),e.flags|=1,ft(t,e,n,i),e.child)}function yy(t,e,n,r,i){if(Rt(n)){var s=!0;$u(e)}else s=!1;if(ms(e,i),e.stateNode===null)pu(t,e),ow(e,n,r),Rf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yt(u):(u=Rt(n)?Ei:lt.current,u=Cs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&uy(e,o,r,u),hr=!1;var f=e.memoizedState;o.state=f,Hu(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ct.current||hr?(typeof c=="function"&&(Cf(e,n,c,r),l=e.memoizedState),(a=hr||ly(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,iw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:tn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yt(l):(l=Rt(n)?Ei:lt.current,l=Cs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&uy(e,o,r,l),hr=!1,f=e.memoizedState,o.state=f,Hu(e,r,o,i);var m=e.memoizedState;a!==d||f!==m||Ct.current||hr?(typeof p=="function"&&(Cf(e,n,p,r),m=e.memoizedState),(u=hr||ly(e,n,u,r,f,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=m),o.props=r,o.state=m,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Pf(t,e,n,r,s,i)}function Pf(t,e,n,r,i,s){Ow(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ry(e,n,!1),Gn(t,e,s);r=e.stateNode,bA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):ft(t,e,a,s),e.memoizedState=r.state,i&&ry(e,n,!0),e.child}function Dw(t){var e=t.stateNode;e.pendingContext?ny(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ny(t,e.context,!1),yg(t,e.containerInfo)}function _y(t,e,n,r,i){return Rs(),hg(i),e.flags|=256,ft(t,e,n,r),e.child}var xf={dehydrated:null,treeContext:null,retryLane:0};function Nf(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lw(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(ye,i&1),t===null)return If(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Uc(o,r,0,null),t=mi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nf(n),e.memoizedState=xf,t):Rg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return OA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Dr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Dr(a,s):(s=mi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=xf,r}return s=t.child,t=s.sibling,r=Dr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rg(t,e){return e=Uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function xl(t,e,n,r){return r!==null&&hg(r),As(e,t.child,null,n),t=Rg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function OA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=lh(Error(P(422))),xl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Uc({mode:"visible",children:r.children},i,0,null),s=mi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=Nf(o),e.memoizedState=xf,s);if(!(e.mode&1))return xl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(P(419)),r=lh(s,r,void 0),xl(t,e,o,r)}if(a=(o&t.childLanes)!==0,Tt||a){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qn(t,i),an(r,t,i,-1))}return bg(),r=lh(Error(P(421))),xl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=qA.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Nt=xr(i.nextSibling),Lt=e,ge=!0,rn=null,t!==null&&(Bt[Ht++]=Fn,Bt[Ht++]=$n,Bt[Ht++]=Si,Fn=t.id,$n=t.overflow,Si=e),e=Rg(e,r.children),e.flags|=4096,e)}function wy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Tf(t.return,e,n)}function uh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Mw(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ft(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&wy(t,n,e);else if(t.tag===19)wy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),uh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}uh(e,!0,n,null,s);break;case"together":uh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ti|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Dr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function DA(t,e,n){switch(e.tag){case 3:Dw(e),Rs();break;case 5:uw(e);break;case 1:Rt(e.type)&&$u(e);break;case 4:yg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(zu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?Lw(t,e,n):(ae(ye,ye.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);ae(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Mw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,bw(t,e,n)}return Gn(t,e,n)}var Vw,bf,Fw,$w;Vw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bf=function(){};Fw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ui(Tn.current);var s=null;switch(n){case"input":i=Zh(t,i),r=Zh(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=nf(t,i),r=nf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Vu)}sf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Go.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Go.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$w=function(t,e,n,r){n!==r&&(e.flags|=4)};function uo(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function tt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function LA(t,e,n){var r=e.pendingProps;switch(dg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tt(e),null;case 1:return Rt(e.type)&&Fu(),tt(e),null;case 3:return r=e.stateNode,ks(),he(Ct),he(lt),wg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(kl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,rn!==null&&(jf(rn),rn=null))),bf(t,e),tt(e),null;case 5:_g(e);var i=ui(sa.current);if(n=e.type,t!==null&&e.stateNode!=null)Fw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return tt(e),null}if(t=ui(Tn.current),kl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[vn]=e,r[ra]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<wo.length;i++)ue(wo[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Pv(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":Nv(r,s),ue("invalid",r)}sf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Al(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Al(r.textContent,a,t),i=["children",""+a]):Go.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":_l(r),xv(r,s,!0);break;case"textarea":_l(r),bv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=h1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[vn]=e,t[ra]=r,Vw(t,e,!1,!1),e.stateNode=t;e:{switch(o=of(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<wo.length;i++)ue(wo[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Pv(t,r),i=Zh(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),ue("invalid",t);break;case"textarea":Nv(t,r),i=nf(t,r),ue("invalid",t);break;default:i=r}sf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?g1(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&f1(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ko(t,l):typeof l=="number"&&Ko(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Go.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ue("scroll",t):l!=null&&Yp(t,s,l,o))}switch(n){case"input":_l(t),xv(t,r,!1);break;case"textarea":_l(t),bv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hs(t,!!r.multiple,s,!1):r.defaultValue!=null&&hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Vu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tt(e),null;case 6:if(t&&e.stateNode!=null)$w(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=ui(sa.current),ui(Tn.current),kl(e)){if(r=e.stateNode,n=e.memoizedProps,r[vn]=e,(s=r.nodeValue!==n)&&(t=Lt,t!==null))switch(t.tag){case 3:Al(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Al(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[vn]=e,e.stateNode=r}return tt(e),null;case 13:if(he(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&Nt!==null&&e.mode&1&&!(e.flags&128))nw(),Rs(),e.flags|=98560,s=!1;else if(s=kl(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(P(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(P(317));s[vn]=e}else Rs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tt(e),s=!1}else rn!==null&&(jf(rn),rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Ve===0&&(Ve=3):bg())),e.updateQueue!==null&&(e.flags|=4),tt(e),null);case 4:return ks(),bf(t,e),t===null&&ta(e.stateNode.containerInfo),tt(e),null;case 10:return gg(e.type._context),tt(e),null;case 17:return Rt(e.type)&&Fu(),tt(e),null;case 19:if(he(ye),s=e.memoizedState,s===null)return tt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)uo(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wu(t),o!==null){for(e.flags|=128,uo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>xs&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Wu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),uo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return tt(e),null}else 2*Pe()-s.renderingStartTime>xs&&n!==1073741824&&(e.flags|=128,r=!0,uo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=ye.current,ae(ye,r?n&1|2:n&1),e):(tt(e),null);case 22:case 23:return Ng(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(tt(e),e.subtreeFlags&6&&(e.flags|=8192)):tt(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function MA(t,e){switch(dg(e),e.tag){case 1:return Rt(e.type)&&Fu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ks(),he(Ct),he(lt),wg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _g(e),null;case 13:if(he(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));Rs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(ye),null;case 4:return ks(),null;case 10:return gg(e.type._context),null;case 22:case 23:return Ng(),null;case 24:return null;default:return null}}var Nl=!1,it=!1,VA=typeof WeakSet=="function"?WeakSet:Set,D=null;function ss(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function Of(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var Ey=!1;function FA(t,e){if(mf=Du,t=B1(),ug(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(vf={focusedElem:t,selectionRange:n},Du=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var _=m.memoizedProps,w=m.memoizedState,g=e.stateNode,v=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:tn(e.type,_),w);g.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(E){Ie(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return m=Ey,Ey=!1,m}function Do(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Of(e,n,s)}i=i.next}while(i!==r)}}function $c(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function jw(t){var e=t.alternate;e!==null&&(t.alternate=null,jw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[vn],delete e[ra],delete e[wf],delete e[wA],delete e[EA])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Uw(t){return t.tag===5||t.tag===3||t.tag===4}function Sy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Uw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Lf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vu));else if(r!==4&&(t=t.child,t!==null))for(Lf(t,e,n),t=t.sibling;t!==null;)Lf(t,e,n),t=t.sibling}function Mf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Mf(t,e,n),t=t.sibling;t!==null;)Mf(t,e,n),t=t.sibling}var qe=null,nn=!1;function lr(t,e,n){for(n=n.child;n!==null;)zw(t,e,n),n=n.sibling}function zw(t,e,n){if(In&&typeof In.onCommitFiberUnmount=="function")try{In.onCommitFiberUnmount(Nc,n)}catch{}switch(n.tag){case 5:it||ss(n,e);case 6:var r=qe,i=nn;qe=null,lr(t,e,n),qe=r,nn=i,qe!==null&&(nn?(t=qe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qe.removeChild(n.stateNode));break;case 18:qe!==null&&(nn?(t=qe,n=n.stateNode,t.nodeType===8?nh(t.parentNode,n):t.nodeType===1&&nh(t,n),Jo(t)):nh(qe,n.stateNode));break;case 4:r=qe,i=nn,qe=n.stateNode.containerInfo,nn=!0,lr(t,e,n),qe=r,nn=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Of(n,e,o),i=i.next}while(i!==r)}lr(t,e,n);break;case 1:if(!it&&(ss(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ie(n,e,a)}lr(t,e,n);break;case 21:lr(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,lr(t,e,n),it=r):lr(t,e,n);break;default:lr(t,e,n)}}function Iy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VA),e.forEach(function(r){var i=GA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function en(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qe=a.stateNode,nn=!1;break e;case 3:qe=a.stateNode.containerInfo,nn=!0;break e;case 4:qe=a.stateNode.containerInfo,nn=!0;break e}a=a.return}if(qe===null)throw Error(P(160));zw(s,o,i),qe=null,nn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ie(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bw(e,t),e=e.sibling}function Bw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(en(e,t),gn(t),r&4){try{Do(3,t,t.return),$c(3,t)}catch(_){Ie(t,t.return,_)}try{Do(5,t,t.return)}catch(_){Ie(t,t.return,_)}}break;case 1:en(e,t),gn(t),r&512&&n!==null&&ss(n,n.return);break;case 5:if(en(e,t),gn(t),r&512&&n!==null&&ss(n,n.return),t.flags&32){var i=t.stateNode;try{Ko(i,"")}catch(_){Ie(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&c1(i,s),of(a,o);var u=of(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?g1(i,d):c==="dangerouslySetInnerHTML"?f1(i,d):c==="children"?Ko(i,d):Yp(i,c,d,u)}switch(a){case"input":ef(i,s);break;case"textarea":d1(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?hs(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?hs(i,!!s.multiple,s.defaultValue,!0):hs(i,!!s.multiple,s.multiple?[]:"",!1))}i[ra]=s}catch(_){Ie(t,t.return,_)}}break;case 6:if(en(e,t),gn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ie(t,t.return,_)}}break;case 3:if(en(e,t),gn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jo(e.containerInfo)}catch(_){Ie(t,t.return,_)}break;case 4:en(e,t),gn(t);break;case 13:en(e,t),gn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Pg=Pe())),r&4&&Iy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(it=(u=it)||c,en(e,t),it=u):en(e,t),gn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(D=t,c=t.child;c!==null;){for(d=D=c;D!==null;){switch(f=D,p=f.child,f.tag){case 0:case 11:case 14:case 15:Do(4,f,f.return);break;case 1:ss(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(_){Ie(r,n,_)}}break;case 5:ss(f,f.return);break;case 22:if(f.memoizedState!==null){Cy(d);continue}}p!==null?(p.return=f,D=p):Cy(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=p1("display",o))}catch(_){Ie(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ie(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:en(e,t),gn(t),r&4&&Iy(t);break;case 21:break;default:en(e,t),gn(t)}}function gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Uw(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ko(i,""),r.flags&=-33);var s=Sy(t);Mf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Sy(t);Lf(t,a,o);break;default:throw Error(P(161))}}catch(l){Ie(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function $A(t,e,n){D=t,Hw(t)}function Hw(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Nl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||it;a=Nl;var u=it;if(Nl=o,(it=l)&&!u)for(D=i;D!==null;)o=D,l=o.child,o.tag===22&&o.memoizedState!==null?Ry(i):l!==null?(l.return=o,D=l):Ry(i);for(;s!==null;)D=s,Hw(s),s=s.sibling;D=i,Nl=a,it=u}Ty(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,D=s):Ty(t)}}function Ty(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||$c(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ay(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ay(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Jo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}it||e.flags&512&&Df(e)}catch(f){Ie(e,e.return,f)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Cy(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Ry(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{$c(4,e)}catch(l){Ie(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ie(e,i,l)}}var s=e.return;try{Df(e)}catch(l){Ie(e,s,l)}break;case 5:var o=e.return;try{Df(e)}catch(l){Ie(e,o,l)}}}catch(l){Ie(e,e.return,l)}if(e===t){D=null;break}var a=e.sibling;if(a!==null){a.return=e.return,D=a;break}D=e.return}}var jA=Math.ceil,Ku=tr.ReactCurrentDispatcher,Ag=tr.ReactCurrentOwner,Gt=tr.ReactCurrentBatchConfig,ee=0,ze=null,be=null,Ye=0,xt=0,os=Xr(0),Ve=0,ua=null,Ti=0,jc=0,kg=0,Lo=null,St=null,Pg=0,xs=1/0,Mn=null,Qu=!1,Vf=null,br=null,bl=!1,Er=null,Yu=0,Mo=0,Ff=null,gu=-1,mu=0;function mt(){return ee&6?Pe():gu!==-1?gu:gu=Pe()}function Or(t){return t.mode&1?ee&2&&Ye!==0?Ye&-Ye:IA.transition!==null?(mu===0&&(mu=A1()),mu):(t=se,t!==0||(t=window.event,t=t===void 0?16:D1(t.type)),t):1}function an(t,e,n,r){if(50<Mo)throw Mo=0,Ff=null,Error(P(185));$a(t,n,r),(!(ee&2)||t!==ze)&&(t===ze&&(!(ee&2)&&(jc|=n),Ve===4&&pr(t,Ye)),At(t,r),n===1&&ee===0&&!(e.mode&1)&&(xs=Pe()+500,Mc&&Jr()))}function At(t,e){var n=t.callbackNode;IR(t,e);var r=Ou(t,t===ze?Ye:0);if(r===0)n!==null&&Lv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lv(n),e===1)t.tag===0?SA(Ay.bind(null,t)):Z1(Ay.bind(null,t)),yA(function(){!(ee&6)&&Jr()}),n=null;else{switch(k1(r)){case 1:n=tg;break;case 4:n=C1;break;case 16:n=bu;break;case 536870912:n=R1;break;default:n=bu}n=Jw(n,Ww.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ww(t,e){if(gu=-1,mu=0,ee&6)throw Error(P(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var r=Ou(t,t===ze?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Xu(t,r);else{e=r;var i=ee;ee|=2;var s=Gw();(ze!==t||Ye!==e)&&(Mn=null,xs=Pe()+500,gi(t,e));do try{BA();break}catch(a){qw(t,a)}while(!0);pg(),Ku.current=s,ee=i,be!==null?e=0:(ze=null,Ye=0,e=Ve)}if(e!==0){if(e===2&&(i=df(t),i!==0&&(r=i,e=$f(t,i))),e===1)throw n=ua,gi(t,0),pr(t,r),At(t,Pe()),n;if(e===6)pr(t,r);else{if(i=t.current.alternate,!(r&30)&&!UA(i)&&(e=Xu(t,r),e===2&&(s=df(t),s!==0&&(r=s,e=$f(t,s))),e===1))throw n=ua,gi(t,0),pr(t,r),At(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:si(t,St,Mn);break;case 3:if(pr(t,r),(r&130023424)===r&&(e=Pg+500-Pe(),10<e)){if(Ou(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=_f(si.bind(null,t,St,Mn),e);break}si(t,St,Mn);break;case 4:if(pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-on(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*jA(r/1960))-r,10<r){t.timeoutHandle=_f(si.bind(null,t,St,Mn),r);break}si(t,St,Mn);break;case 5:si(t,St,Mn);break;default:throw Error(P(329))}}}return At(t,Pe()),t.callbackNode===n?Ww.bind(null,t):null}function $f(t,e){var n=Lo;return t.current.memoizedState.isDehydrated&&(gi(t,e).flags|=256),t=Xu(t,e),t!==2&&(e=St,St=n,e!==null&&jf(e)),t}function jf(t){St===null?St=t:St.push.apply(St,t)}function UA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~kg,e&=~jc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Ay(t){if(ee&6)throw Error(P(327));vs();var e=Ou(t,0);if(!(e&1))return At(t,Pe()),null;var n=Xu(t,e);if(t.tag!==0&&n===2){var r=df(t);r!==0&&(e=r,n=$f(t,r))}if(n===1)throw n=ua,gi(t,0),pr(t,e),At(t,Pe()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,si(t,St,Mn),At(t,Pe()),null}function xg(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(xs=Pe()+500,Mc&&Jr())}}function Ci(t){Er!==null&&Er.tag===0&&!(ee&6)&&vs();var e=ee;ee|=1;var n=Gt.transition,r=se;try{if(Gt.transition=null,se=1,t)return t()}finally{se=r,Gt.transition=n,ee=e,!(ee&6)&&Jr()}}function Ng(){xt=os.current,he(os)}function gi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vA(n)),be!==null)for(n=be.return;n!==null;){var r=n;switch(dg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fu();break;case 3:ks(),he(Ct),he(lt),wg();break;case 5:_g(r);break;case 4:ks();break;case 13:he(ye);break;case 19:he(ye);break;case 10:gg(r.type._context);break;case 22:case 23:Ng()}n=n.return}if(ze=t,be=t=Dr(t.current,null),Ye=xt=e,Ve=0,ua=null,kg=jc=Ti=0,St=Lo=null,li!==null){for(e=0;e<li.length;e++)if(n=li[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}li=null}return t}function qw(t,e){do{var n=be;try{if(pg(),hu.current=Gu,qu){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qu=!1}if(Ii=0,Ue=Le=_e=null,Oo=!1,oa=0,Ag.current=null,n===null||n.return===null){Ve=1,ua=e,be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ye,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=py(o);if(p!==null){p.flags&=-257,gy(p,o,a,s,e),p.mode&1&&fy(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var _=new Set;_.add(l),e.updateQueue=_}else m.add(l);break e}else{if(!(e&1)){fy(s,u,e),bg();break e}l=Error(P(426))}}else if(ge&&a.mode&1){var w=py(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),gy(w,o,a,s,e),hg(Ps(l,a));break e}}s=l=Ps(l,a),Ve!==4&&(Ve=2),Lo===null?Lo=[s]:Lo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Pw(s,l,e);oy(s,g);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(br===null||!br.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=xw(s,a,e);oy(s,E);break e}}s=s.return}while(s!==null)}Qw(n)}catch(I){e=I,be===n&&n!==null&&(be=n=n.return);continue}break}while(!0)}function Gw(){var t=Ku.current;return Ku.current=Gu,t===null?Gu:t}function bg(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),ze===null||!(Ti&268435455)&&!(jc&268435455)||pr(ze,Ye)}function Xu(t,e){var n=ee;ee|=2;var r=Gw();(ze!==t||Ye!==e)&&(Mn=null,gi(t,e));do try{zA();break}catch(i){qw(t,i)}while(!0);if(pg(),ee=n,Ku.current=r,be!==null)throw Error(P(261));return ze=null,Ye=0,Ve}function zA(){for(;be!==null;)Kw(be)}function BA(){for(;be!==null&&!pR();)Kw(be)}function Kw(t){var e=Xw(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?Qw(t):be=e,Ag.current=null}function Qw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MA(n,e),n!==null){n.flags&=32767,be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,be=null;return}}else if(n=LA(n,e,xt),n!==null){be=n;return}if(e=e.sibling,e!==null){be=e;return}be=e=t}while(e!==null);Ve===0&&(Ve=5)}function si(t,e,n){var r=se,i=Gt.transition;try{Gt.transition=null,se=1,HA(t,e,n,r)}finally{Gt.transition=i,se=r}return null}function HA(t,e,n,r){do vs();while(Er!==null);if(ee&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TR(t,s),t===ze&&(be=ze=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bl||(bl=!0,Jw(bu,function(){return vs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Gt.transition,Gt.transition=null;var o=se;se=1;var a=ee;ee|=4,Ag.current=null,FA(t,n),Bw(n,t),cA(vf),Du=!!mf,vf=mf=null,t.current=n,$A(n),gR(),ee=a,se=o,Gt.transition=s}else t.current=n;if(bl&&(bl=!1,Er=t,Yu=i),s=t.pendingLanes,s===0&&(br=null),yR(n.stateNode),At(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qu)throw Qu=!1,t=Vf,Vf=null,t;return Yu&1&&t.tag!==0&&vs(),s=t.pendingLanes,s&1?t===Ff?Mo++:(Mo=0,Ff=t):Mo=0,Jr(),null}function vs(){if(Er!==null){var t=k1(Yu),e=Gt.transition,n=se;try{if(Gt.transition=null,se=16>t?16:t,Er===null)var r=!1;else{if(t=Er,Er=null,Yu=0,ee&6)throw Error(P(331));var i=ee;for(ee|=4,D=t.current;D!==null;){var s=D,o=s.child;if(D.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:Do(8,c,s)}var d=c.child;if(d!==null)d.return=c,D=d;else for(;D!==null;){c=D;var f=c.sibling,p=c.return;if(jw(c),c===u){D=null;break}if(f!==null){f.return=p,D=f;break}D=p}}}var m=s.alternate;if(m!==null){var _=m.child;if(_!==null){m.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}D=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,D=o;else e:for(;D!==null;){if(s=D,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Do(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,D=g;break e}D=s.return}}var v=t.current;for(D=v;D!==null;){o=D;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,D=y;else e:for(o=v;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:$c(9,a)}}catch(I){Ie(a,a.return,I)}if(a===o){D=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,D=E;break e}D=a.return}}if(ee=i,Jr(),In&&typeof In.onPostCommitFiberRoot=="function")try{In.onPostCommitFiberRoot(Nc,t)}catch{}r=!0}return r}finally{se=n,Gt.transition=e}}return!1}function ky(t,e,n){e=Ps(n,e),e=Pw(t,e,1),t=Nr(t,e,1),e=mt(),t!==null&&($a(t,1,e),At(t,e))}function Ie(t,e,n){if(t.tag===3)ky(t,t,n);else for(;e!==null;){if(e.tag===3){ky(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(br===null||!br.has(r))){t=Ps(n,t),t=xw(e,t,1),e=Nr(e,t,1),t=mt(),e!==null&&($a(e,1,t),At(e,t));break}}e=e.return}}function WA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Ye&n)===n&&(Ve===4||Ve===3&&(Ye&130023424)===Ye&&500>Pe()-Pg?gi(t,0):kg|=n),At(t,e)}function Yw(t,e){e===0&&(t.mode&1?(e=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):e=1);var n=mt();t=qn(t,e),t!==null&&($a(t,e,n),At(t,n))}function qA(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yw(t,n)}function GA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),Yw(t,n)}var Xw;Xw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,DA(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,ge&&e.flags&1048576&&ew(e,Uu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pu(t,e),t=e.pendingProps;var i=Cs(e,lt.current);ms(e,n),i=Sg(null,e,r,t,i,n);var s=Ig();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(s=!0,$u(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vg(e),i.updater=Vc,e.stateNode=i,i._reactInternals=e,Rf(e,r,t,n),e=Pf(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&cg(e),ft(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=QA(r),t=tn(r,t),i){case 0:e=kf(null,e,r,t,n);break e;case 1:e=yy(null,e,r,t,n);break e;case 11:e=my(null,e,r,t,n);break e;case 14:e=vy(null,e,r,tn(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),kf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),yy(t,e,r,i,n);case 3:e:{if(Dw(e),t===null)throw Error(P(387));r=e.pendingProps,s=e.memoizedState,i=s.element,iw(t,e),Hu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ps(Error(P(423)),e),e=_y(t,e,r,n,i);break e}else if(r!==i){i=Ps(Error(P(424)),e),e=_y(t,e,r,n,i);break e}else for(Nt=xr(e.stateNode.containerInfo.firstChild),Lt=e,ge=!0,rn=null,n=lw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Rs(),r===i){e=Gn(t,e,n);break e}ft(t,e,r,n)}e=e.child}return e;case 5:return uw(e),t===null&&If(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,yf(r,i)?o=null:s!==null&&yf(r,s)&&(e.flags|=32),Ow(t,e),ft(t,e,o,n),e.child;case 6:return t===null&&If(e),null;case 13:return Lw(t,e,n);case 4:return yg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=As(e,null,r,n):ft(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),my(t,e,r,i,n);case 7:return ft(t,e,e.pendingProps,n),e.child;case 8:return ft(t,e,e.pendingProps.children,n),e.child;case 12:return ft(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(zu,r._currentValue),r._currentValue=o,s!==null)if(cn(s.value,o)){if(s.children===i.children&&!Ct.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Bn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Tf(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(P(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Tf(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ft(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ms(e,n),i=Yt(i),r=r(i),e.flags|=1,ft(t,e,r,n),e.child;case 14:return r=e.type,i=tn(r,e.pendingProps),i=tn(r.type,i),vy(t,e,r,i,n);case 15:return Nw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:tn(r,i),pu(t,e),e.tag=1,Rt(r)?(t=!0,$u(e)):t=!1,ms(e,n),ow(e,r,i),Rf(e,r,i,n),Pf(null,e,r,!0,t,n);case 19:return Mw(t,e,n);case 22:return bw(t,e,n)}throw Error(P(156,e.tag))};function Jw(t,e){return T1(t,e)}function KA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qt(t,e,n,r){return new KA(t,e,n,r)}function Og(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QA(t){if(typeof t=="function")return Og(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Jp)return 11;if(t===Zp)return 14}return 2}function Dr(t,e){var n=t.alternate;return n===null?(n=qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function vu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Og(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Yi:return mi(n.children,i,s,e);case Xp:o=8,i|=8;break;case Qh:return t=qt(12,n,e,i|2),t.elementType=Qh,t.lanes=s,t;case Yh:return t=qt(13,n,e,i),t.elementType=Yh,t.lanes=s,t;case Xh:return t=qt(19,n,e,i),t.elementType=Xh,t.lanes=s,t;case a1:return Uc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case s1:o=10;break e;case o1:o=9;break e;case Jp:o=11;break e;case Zp:o=14;break e;case dr:o=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=qt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function mi(t,e,n,r){return t=qt(7,t,r,e),t.lanes=n,t}function Uc(t,e,n,r){return t=qt(22,t,r,e),t.elementType=a1,t.lanes=n,t.stateNode={isHidden:!1},t}function ch(t,e,n){return t=qt(6,t,null,e),t.lanes=n,t}function dh(t,e,n){return e=qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wd(0),this.expirationTimes=Wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Dg(t,e,n,r,i,s,o,a,l){return t=new YA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vg(s),t}function XA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Zw(t){if(!t)return Ur;t=t._reactInternals;e:{if(Fi(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(Rt(n))return J1(t,n,e)}return e}function eE(t,e,n,r,i,s,o,a,l){return t=Dg(n,r,!0,t,i,s,o,a,l),t.context=Zw(null),n=t.current,r=mt(),i=Or(n),s=Bn(r,i),s.callback=e??null,Nr(n,s,i),t.current.lanes=i,$a(t,i,r),At(t,r),t}function zc(t,e,n,r){var i=e.current,s=mt(),o=Or(i);return n=Zw(n),e.context===null?e.context=n:e.pendingContext=n,e=Bn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(i,e,o),t!==null&&(an(t,i,o,s),du(t,i,o)),o}function Ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Py(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lg(t,e){Py(t,e),(t=t.alternate)&&Py(t,e)}function JA(){return null}var tE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Mg(t){this._internalRoot=t}Bc.prototype.render=Mg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));zc(t,e,null,null)};Bc.prototype.unmount=Mg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ci(function(){zc(null,t,null,null)}),e[Wn]=null}};function Bc(t){this._internalRoot=t}Bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=N1();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&O1(t)}};function Vg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xy(){}function ZA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Ju(o);s.call(u)}}var o=eE(e,r,t,0,null,!1,!1,"",xy);return t._reactRootContainer=o,t[Wn]=o.current,ta(t.nodeType===8?t.parentNode:t),Ci(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Ju(l);a.call(u)}}var l=Dg(t,0,!1,null,null,!1,!1,"",xy);return t._reactRootContainer=l,t[Wn]=l.current,ta(t.nodeType===8?t.parentNode:t),Ci(function(){zc(e,l,n,r)}),l}function Wc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Ju(o);a.call(l)}}zc(e,o,t,i)}else o=ZA(n,e,t,i,r);return Ju(o)}P1=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_o(e.pendingLanes);n!==0&&(ng(e,n|1),At(e,Pe()),!(ee&6)&&(xs=Pe()+500,Jr()))}break;case 13:Ci(function(){var r=qn(t,1);if(r!==null){var i=mt();an(r,t,1,i)}}),Lg(t,1)}};rg=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=mt();an(e,t,134217728,n)}Lg(t,134217728)}};x1=function(t){if(t.tag===13){var e=Or(t),n=qn(t,e);if(n!==null){var r=mt();an(n,t,e,r)}Lg(t,e)}};N1=function(){return se};b1=function(t,e){var n=se;try{return se=t,e()}finally{se=n}};lf=function(t,e,n){switch(e){case"input":if(ef(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Lc(r);if(!i)throw Error(P(90));u1(r),ef(r,i)}}}break;case"textarea":d1(t,n);break;case"select":e=n.value,e!=null&&hs(t,!!n.multiple,e,!1)}};y1=xg;_1=Ci;var ek={usingClientEntryPoint:!1,Events:[Ua,es,Lc,m1,v1,xg]},co={findFiberByHostInstance:ai,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tk={bundleType:co.bundleType,version:co.version,rendererPackageName:co.rendererPackageName,rendererConfig:co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=S1(t),t===null?null:t.stateNode},findFiberByHostInstance:co.findFiberByHostInstance||JA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Nc=Ol.inject(tk),In=Ol}catch{}}$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ek;$t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vg(e))throw Error(P(200));return XA(t,e,null,n)};$t.createRoot=function(t,e){if(!Vg(t))throw Error(P(299));var n=!1,r="",i=tE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Dg(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,ta(t.nodeType===8?t.parentNode:t),new Mg(e)};$t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=S1(e),t=t===null?null:t.stateNode,t};$t.flushSync=function(t){return Ci(t)};$t.hydrate=function(t,e,n){if(!Hc(e))throw Error(P(200));return Wc(null,t,e,!0,n)};$t.hydrateRoot=function(t,e,n){if(!Vg(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=tE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=eE(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,ta(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Bc(e)};$t.render=function(t,e,n){if(!Hc(e))throw Error(P(200));return Wc(null,t,e,!1,n)};$t.unmountComponentAtNode=function(t){if(!Hc(t))throw Error(P(40));return t._reactRootContainer?(Ci(function(){Wc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};$t.unstable_batchedUpdates=xg;$t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Hc(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return Wc(t,e,n,!1,r)};$t.version="18.2.0-next-9e3b772b8-20220608";function nE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nE)}catch(t){console.error(t)}}nE(),e1.exports=$t;var nk=e1.exports,Ny=nk;Gh.createRoot=Ny.createRoot,Gh.hydrateRoot=Ny.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ca(){return ca=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ca.apply(this,arguments)}var Sr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Sr||(Sr={}));const by="popstate";function rk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Uf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Zu(i)}return sk(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Fg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ik(){return Math.random().toString(36).substr(2,8)}function Oy(t,e){return{usr:t.state,key:t.key,idx:e}}function Uf(t,e,n,r){return n===void 0&&(n=null),ca({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ws(e):e,{state:n,key:e&&e.key||r||ik()})}function Zu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ws(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function sk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Sr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ca({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=Sr.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:g})}function f(w,g){a=Sr.Push;let v=Uf(_.location,w,g);n&&n(v,w),u=c()+1;let y=Oy(v,u),E=_.createHref(v);try{o.pushState(y,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,g){a=Sr.Replace;let v=Uf(_.location,w,g);n&&n(v,w),u=c();let y=Oy(v,u),E=_.createHref(v);o.replaceState(y,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function m(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof w=="string"?w:Zu(w);return we(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(by,d),l=w,()=>{i.removeEventListener(by,d),l=null}},createHref(w){return e(i,w)},createURL:m,encodeLocation(w){let g=m(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(w){return o.go(w)}};return _}var Dy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dy||(Dy={}));function ok(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ws(e):e,i=da(r.pathname||"/",n);if(i==null)return null;let s=rE(t);ak(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=mk(s[a],yk(i));return o}function rE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(we(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Lr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),rE(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:pk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of iE(s.path))i(s,o,l)}),e}function iE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=iE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ak(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:gk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const lk=/^:\w+$/,uk=3,ck=2,dk=1,hk=10,fk=-2,Ly=t=>t==="*";function pk(t,e){let n=t.split("/"),r=n.length;return n.some(Ly)&&(r+=fk),e&&(r+=ck),n.filter(i=>!Ly(i)).reduce((i,s)=>i+(lk.test(s)?uk:s===""?dk:hk),r)}function gk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function mk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=zf({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Lr([i,c.pathname]),pathnameBase:Ik(Lr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Lr([i,c.pathnameBase]))}return s}function zf(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=vk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const m=a[d];return p&&!m?u[f]=void 0:u[f]=_k(m||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function vk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Fg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function yk(t){try{return decodeURI(t)}catch(e){return Fg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function _k(t,e){try{return decodeURIComponent(t)}catch(n){return Fg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function da(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function wk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ws(t):t;return{pathname:n?n.startsWith("/")?n:Ek(n,e):e,search:Tk(r),hash:Ck(i)}}function Ek(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $g(t,e){let n=Sk(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function jg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ws(t):(i=ca({},t),we(!i.pathname||!i.pathname.includes("?"),hh("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),hh("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),hh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=wk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Lr=t=>t.join("/").replace(/\/\/+/g,"/"),Ik=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Tk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ck=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Rk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const sE=["post","put","patch","delete"];new Set(sE);const Ak=["get",...sE];new Set(Ak);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ha(){return ha=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ha.apply(this,arguments)}const qc=S.createContext(null),oE=S.createContext(null),nr=S.createContext(null),Gc=S.createContext(null),rr=S.createContext({outlet:null,matches:[],isDataRoute:!1}),aE=S.createContext(null);function kk(t,e){let{relative:n}=e===void 0?{}:e;qs()||we(!1);let{basename:r,navigator:i}=S.useContext(nr),{hash:s,pathname:o,search:a}=Kc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Lr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function qs(){return S.useContext(Gc)!=null}function Gs(){return qs()||we(!1),S.useContext(Gc).location}function lE(t){S.useContext(nr).static||S.useLayoutEffect(t)}function Ba(){let{isDataRoute:t}=S.useContext(rr);return t?Bk():Pk()}function Pk(){qs()||we(!1);let t=S.useContext(qc),{basename:e,future:n,navigator:r}=S.useContext(nr),{matches:i}=S.useContext(rr),{pathname:s}=Gs(),o=JSON.stringify($g(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return lE(()=>{a.current=!0}),S.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=jg(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:Lr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}const xk=S.createContext(null);function Nk(t){let e=S.useContext(rr).outlet;return e&&S.createElement(xk.Provider,{value:t},e)}function Kc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(nr),{matches:i}=S.useContext(rr),{pathname:s}=Gs(),o=JSON.stringify($g(i,r.v7_relativeSplatPath));return S.useMemo(()=>jg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function bk(t,e){return Ok(t,e)}function Ok(t,e,n,r){qs()||we(!1);let{navigator:i}=S.useContext(nr),{matches:s}=S.useContext(rr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Gs(),c;if(e){var d;let w=typeof e=="string"?Ws(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||we(!1),c=w}else c=u;let f=c.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",m=ok(t,{pathname:p}),_=Fk(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:Lr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:Lr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&_?S.createElement(Gc.Provider,{value:{location:ha({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Sr.Pop}},_):_}function Dk(){let t=zk(),e=Rk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const Lk=S.createElement(Dk,null);class Mk extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(rr.Provider,{value:this.props.routeContext},S.createElement(aE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Vk(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(qc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(rr.Provider,{value:e},r)}function Fk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||we(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:p}=n,m=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||m){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let p,m=!1,_=null,w=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||Lk,l&&(u<0&&f===0?(Hk("route-fallback",!1),m=!0,w=null):u===f&&(m=!0,w=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,f+1)),v=()=>{let y;return p?y=_:m?y=w:d.route.Component?y=S.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,S.createElement(Vk,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?S.createElement(Mk,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var uE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(uE||{}),ec=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ec||{});function $k(t){let e=S.useContext(qc);return e||we(!1),e}function jk(t){let e=S.useContext(oE);return e||we(!1),e}function Uk(t){let e=S.useContext(rr);return e||we(!1),e}function cE(t){let e=Uk(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function zk(){var t;let e=S.useContext(aE),n=jk(ec.UseRouteError),r=cE(ec.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Bk(){let{router:t}=$k(uE.UseNavigateStable),e=cE(ec.UseNavigateStable),n=S.useRef(!1);return lE(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ha({fromRouteId:e},s)))},[t,e])}const My={};function Hk(t,e,n){!e&&!My[t]&&(My[t]=!0)}function Wk(t){let{to:e,replace:n,state:r,relative:i}=t;qs()||we(!1);let{future:s,static:o}=S.useContext(nr),{matches:a}=S.useContext(rr),{pathname:l}=Gs(),u=Ba(),c=jg(e,$g(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return S.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function qk(t){return Nk(t.context)}function ke(t){we(!1)}function Gk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Sr.Pop,navigator:s,static:o=!1,future:a}=t;qs()&&we(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:ha({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ws(r));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:m="default"}=r,_=S.useMemo(()=>{let w=da(c,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:p,key:m},navigationType:i}},[l,c,d,f,p,m,i]);return _==null?null:S.createElement(nr.Provider,{value:u},S.createElement(Gc.Provider,{children:n,value:_}))}function Kk(t){let{children:e,location:n}=t;return bk(Bf(e),n)}new Promise(()=>{});function Bf(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Bf(r.props.children,s));return}r.type!==ke&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tc(){return tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tc.apply(this,arguments)}function dE(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Qk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Yk(t,e){return t.button===0&&(!e||e==="_self")&&!Qk(t)}const Xk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Jk=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Zk=S.createContext({isTransitioning:!1}),eP="startTransition",Vy=qC[eP];function tP(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=rk({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=S.useCallback(d=>{u&&Vy?Vy(()=>l(d)):l(d)},[l,u]);return S.useLayoutEffect(()=>o.listen(c),[o,c]),S.createElement(Gk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const nP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qc=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=dE(e,Xk),{basename:p}=S.useContext(nr),m,_=!1;if(typeof u=="string"&&rP.test(u)&&(m=u,nP))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),I=da(E.pathname,p);E.origin===y.origin&&I!=null?u=I+E.search+E.hash:_=!0}catch{}let w=kk(u,{relative:i}),g=sP(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function v(y){r&&r(y),y.defaultPrevented||g(y)}return S.createElement("a",tc({},f,{href:m||w,onClick:_||s?r:v,ref:n,target:l}))}),Et=S.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=dE(e,Jk),f=Kc(l,{relative:d.relative}),p=Gs(),m=S.useContext(oE),{navigator:_}=S.useContext(nr),w=m!=null&&oP(f)&&u===!0,g=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,v=p.pathname,y=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase());const E=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let I=v===g||!o&&v.startsWith(g)&&v.charAt(E)==="/",R=y!=null&&(y===g||!o&&y.startsWith(g)&&y.charAt(g.length)==="/"),C={isActive:I,isPending:R,isTransitioning:w},T=I?r:void 0,N;typeof s=="function"?N=s(C):N=[s,I?"active":null,R?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let M=typeof a=="function"?a(C):a;return S.createElement(Qc,tc({},d,{"aria-current":T,className:N,ref:n,style:M,to:l,unstable_viewTransition:u}),typeof c=="function"?c(C):c)});var Hf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Hf||(Hf={}));var Fy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Fy||(Fy={}));function iP(t){let e=S.useContext(qc);return e||we(!1),e}function sP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ba(),u=Gs(),c=Kc(t,{relative:o});return S.useCallback(d=>{if(Yk(d,n)){d.preventDefault();let f=r!==void 0?r:Zu(u)===Zu(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function oP(t,e){e===void 0&&(e={});let n=S.useContext(Zk);n==null&&we(!1);let{basename:r}=iP(Hf.useViewTransitionState),i=Kc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=da(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=da(n.nextLocation.pathname,r)||n.nextLocation.pathname;return zf(i.pathname,o)!=null||zf(i.pathname,s)!=null}var $y={};/**
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
 */const hE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},aP=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},fE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new lP;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const m=u<<6&192|d;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uP=function(t){const e=hE(t);return fE.encodeByteArray(e,!0)},nc=function(t){return uP(t).replace(/\./g,"")},pE=function(t){try{return fE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const dP=()=>cP().__FIREBASE_DEFAULTS__,hP=()=>{if(typeof process>"u"||typeof $y>"u")return;const t=$y.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pE(t[1]);return e&&JSON.parse(e)},Ug=()=>{try{return dP()||hP()||fP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gE=t=>{var e,n;return(n=(e=Ug())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},mE=t=>{const e=gE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},vE=()=>{var t;return(t=Ug())===null||t===void 0?void 0:t.config},yE=t=>{var e;return(e=Ug())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class pP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[nc(JSON.stringify(n)),nc(JSON.stringify(o)),""].join(".")}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function mP(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vP(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yP(){const t=ut();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _P(){try{return typeof indexedDB=="object"}catch{return!1}}function wP(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const EP="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=EP,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ha.prototype.create)}}class Ha{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?SP(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new On(i,a,r)}}function SP(t,e){return t.replace(IP,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const IP=/\{\$([^}]+)}/g;function TP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(jy(s)&&jy(o)){if(!rc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function jy(t){return t!==null&&typeof t=="object"}/**
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
 */function Wa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function So(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function CP(t,e){const n=new RP(t,e);return n.subscribe.bind(n)}class RP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AP(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=fh),i.error===void 0&&(i.error=fh),i.complete===void 0&&(i.complete=fh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function fh(){}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class zr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class kP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pP;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xP(e))try{this.getOrInitializeService({instanceIdentifier:oi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=oi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=oi){return this.instances.has(e)}getOptions(e=oi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PP(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=oi){return this.component?this.component.multipleInstances?e:oi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PP(t){return t===oi?void 0:t}function xP(t){return t.instantiationMode==="EAGER"}/**
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
 */class NP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const bP={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},OP=J.INFO,DP={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},LP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=DP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zg{constructor(e){this.name=e,this._logLevel=OP,this._logHandler=LP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?bP[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const MP=(t,e)=>e.some(n=>t instanceof n);let Uy,zy;function VP(){return Uy||(Uy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FP(){return zy||(zy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wE=new WeakMap,Wf=new WeakMap,EE=new WeakMap,ph=new WeakMap,Bg=new WeakMap;function $P(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wE.set(n,t)}).catch(()=>{}),Bg.set(e,t),e}function jP(t){if(Wf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wf.set(t,e)}let qf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||EE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function UP(t){qf=t(qf)}function zP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gh(this),e,...n);return EE.set(r,e.sort?e.sort():[e]),Mr(r)}:FP().includes(t)?function(...e){return t.apply(gh(this),e),Mr(wE.get(this))}:function(...e){return Mr(t.apply(gh(this),e))}}function BP(t){return typeof t=="function"?zP(t):(t instanceof IDBTransaction&&jP(t),MP(t,VP())?new Proxy(t,qf):t)}function Mr(t){if(t instanceof IDBRequest)return $P(t);if(ph.has(t))return ph.get(t);const e=BP(t);return e!==t&&(ph.set(t,e),Bg.set(e,t)),e}const gh=t=>Bg.get(t);function HP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mr(o.result),l.oldVersion,l.newVersion,Mr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const WP=["get","getKey","getAll","getAllKeys","count"],qP=["put","add","delete","clear"],mh=new Map;function By(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(mh.get(e))return mh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=qP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||WP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return mh.set(e,s),s}UP(t=>({...t,get:(e,n,r)=>By(e,n)||t.get(e,n,r),has:(e,n)=>!!By(e,n)||t.has(e,n)}));/**
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
 */class GP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gf="@firebase/app",Hy="0.9.25";/**
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
 */const Ri=new zg("@firebase/app"),QP="@firebase/app-compat",YP="@firebase/analytics-compat",XP="@firebase/analytics",JP="@firebase/app-check-compat",ZP="@firebase/app-check",ex="@firebase/auth",tx="@firebase/auth-compat",nx="@firebase/database",rx="@firebase/database-compat",ix="@firebase/functions",sx="@firebase/functions-compat",ox="@firebase/installations",ax="@firebase/installations-compat",lx="@firebase/messaging",ux="@firebase/messaging-compat",cx="@firebase/performance",dx="@firebase/performance-compat",hx="@firebase/remote-config",fx="@firebase/remote-config-compat",px="@firebase/storage",gx="@firebase/storage-compat",mx="@firebase/firestore",vx="@firebase/firestore-compat",yx="firebase",_x="10.7.1";/**
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
 */const Kf="[DEFAULT]",wx={[Gf]:"fire-core",[QP]:"fire-core-compat",[XP]:"fire-analytics",[YP]:"fire-analytics-compat",[ZP]:"fire-app-check",[JP]:"fire-app-check-compat",[ex]:"fire-auth",[tx]:"fire-auth-compat",[nx]:"fire-rtdb",[rx]:"fire-rtdb-compat",[ix]:"fire-fn",[sx]:"fire-fn-compat",[ox]:"fire-iid",[ax]:"fire-iid-compat",[lx]:"fire-fcm",[ux]:"fire-fcm-compat",[cx]:"fire-perf",[dx]:"fire-perf-compat",[hx]:"fire-rc",[fx]:"fire-rc-compat",[px]:"fire-gcs",[gx]:"fire-gcs-compat",[mx]:"fire-fst",[vx]:"fire-fst-compat","fire-js":"fire-js",[yx]:"fire-js-all"};/**
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
 */const ic=new Map,Qf=new Map;function Ex(t,e){try{t.container.addComponent(e)}catch(n){Ri.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ai(t){const e=t.name;if(Qf.has(e))return Ri.debug(`There were multiple attempts to register component ${e}.`),!1;Qf.set(e,t);for(const n of ic.values())Ex(n,t);return!0}function Yc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Sx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vr=new Ha("app","Firebase",Sx);/**
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
 */class Ix{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vr.create("app-deleted",{appName:this._name})}}/**
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
 */const $i=_x;function SE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Vr.create("bad-app-name",{appName:String(i)});if(n||(n=vE()),!n)throw Vr.create("no-options");const s=ic.get(i);if(s){if(rc(n,s.options)&&rc(r,s.config))return s;throw Vr.create("duplicate-app",{appName:i})}const o=new NP(i);for(const l of Qf.values())o.addComponent(l);const a=new Ix(n,r,o);return ic.set(i,a),a}function Hg(t=Kf){const e=ic.get(t);if(!e&&t===Kf&&vE())return SE();if(!e)throw Vr.create("no-app",{appName:t});return e}function Cn(t,e,n){var r;let i=(r=wx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ri.warn(a.join(" "));return}Ai(new zr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Tx="firebase-heartbeat-database",Cx=1,fa="firebase-heartbeat-store";let vh=null;function IE(){return vh||(vh=HP(Tx,Cx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(fa)}}}).catch(t=>{throw Vr.create("idb-open",{originalErrorMessage:t.message})})),vh}async function Rx(t){try{return await(await IE()).transaction(fa).objectStore(fa).get(TE(t))}catch(e){if(e instanceof On)Ri.warn(e.message);else{const n=Vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ri.warn(n.message)}}}async function Wy(t,e){try{const r=(await IE()).transaction(fa,"readwrite");await r.objectStore(fa).put(e,TE(t)),await r.done}catch(n){if(n instanceof On)Ri.warn(n.message);else{const r=Vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ri.warn(r.message)}}}function TE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ax=1024,kx=30*24*60*60*1e3;class Px{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Nx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kx}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qy(),{heartbeatsToSend:r,unsentEntries:i}=xx(this._heartbeatsCache.heartbeats),s=nc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function qy(){return new Date().toISOString().substring(0,10)}function xx(t,e=Ax){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _P()?wP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Rx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gy(t){return nc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bx(t){Ai(new zr("platform-logger",e=>new GP(e),"PRIVATE")),Ai(new zr("heartbeat",e=>new Px(e),"PRIVATE")),Cn(Gf,Hy,t),Cn(Gf,Hy,"esm2017"),Cn("fire-js","")}bx("");var Ox="firebase",Dx="10.7.1";/**
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
 */Cn(Ox,Dx,"app");function Wg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function CE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lx=CE,RE=new Ha("auth","Firebase",CE());/**
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
 */const sc=new zg("@firebase/auth");function Mx(t,...e){sc.logLevel<=J.WARN&&sc.warn(`Auth (${$i}): ${t}`,...e)}function yu(t,...e){sc.logLevel<=J.ERROR&&sc.error(`Auth (${$i}): ${t}`,...e)}/**
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
 */function dn(t,...e){throw qg(t,...e)}function Rn(t,...e){return qg(t,...e)}function Vx(t,e,n){const r=Object.assign(Object.assign({},Lx()),{[e]:n});return new Ha("auth","Firebase",r).create(e,{appName:t.name})}function qg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return RE.create(t,...e)}function U(t,e,...n){if(!t)throw qg(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yu(e),new Error(e)}function Kn(t,e){t||jn(e)}/**
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
 */function Yf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Fx(){return Ky()==="http:"||Ky()==="https:"}function Ky(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $x(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fx()||mP()||"connection"in navigator)?navigator.onLine:!0}function jx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class qa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=gP()||vP()}get(){return $x()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gg(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class AE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zx=new qa(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Dn(t,e,n,r,i={}){return kE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Wa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),AE.fetch()(PE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function kE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ux),e);try{const i=new Hx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Dl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Dl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Dl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Vx(t,c,u);dn(t,c)}}catch(i){if(i instanceof On)throw i;dn(t,"network-request-failed",{message:String(i)})}}async function Ga(t,e,n,r,i={}){const s=await Dn(t,e,n,r,i);return"mfaPendingCredential"in s&&dn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function PE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Gg(t.config,i):`${t.config.apiScheme}://${i}`}function Bx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Rn(this.auth,"network-request-failed")),zx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Dl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Rn(t,e,r);return i.customData._tokenResponse=n,i}function Qy(t){return t!==void 0&&t.enterprise!==void 0}class Wx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Bx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qx(t,e){return Dn(t,"GET","/v2/recaptchaConfig",ir(t,e))}/**
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
 */async function Gx(t,e){return Dn(t,"POST","/v1/accounts:delete",e)}async function Kx(t,e){return Dn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Vo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qx(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=Kg(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Vo(yh(i.auth_time)),issuedAtTime:Vo(yh(i.iat)),expirationTime:Vo(yh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yh(t){return Number(t)*1e3}function Kg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yu("JWT malformed, contained fewer than 3 sections"),null;try{const i=pE(n);return i?JSON.parse(i):(yu("Failed to decode base64 JWT payload"),null)}catch(i){return yu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Yx(t){const e=Kg(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ns(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&Xx(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Xx({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Jx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class xE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vo(this.lastLoginAt),this.creationTime=Vo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function oc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ns(t,Kx(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?t2(s.providerUserInfo):[],a=e2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new xE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function Zx(t){const e=Oe(t);await oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function e2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function t2(t){return t.map(e=>{var{providerId:n}=e,r=Wg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function n2(t,e){const n=await kE(t,{},async()=>{const r=Wa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=PE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",AE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function r2(t,e){return Dn(t,"POST","/v2/accounts:revokeToken",ir(t,e))}/**
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
 */class pa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Yx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await n2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new pa;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pa,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
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
 */function ur(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Jx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new xE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qx(this,e)}reload(){return Zx(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ns(this,Gx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,v=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:I,providerData:R,stsTokenManager:C}=n;U(y&&C,e,"internal-error");const T=pa.fromJSON(this.name,C);U(typeof y=="string",e,"internal-error"),ur(d,e.name),ur(f,e.name),U(typeof E=="boolean",e,"internal-error"),U(typeof I=="boolean",e,"internal-error"),ur(p,e.name),ur(m,e.name),ur(_,e.name),ur(w,e.name),ur(g,e.name),ur(v,e.name);const N=new vi({uid:y,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:I,photoURL:m,phoneNumber:p,tenantId:_,stsTokenManager:T,createdAt:g,lastLoginAt:v});return R&&Array.isArray(R)&&(N.providerData=R.map(M=>Object.assign({},M))),w&&(N._redirectEventId=w),N}static async _fromIdTokenResponse(e,n,r=!1){const i=new pa;i.updateFromServerResponse(n);const s=new vi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await oc(s),s}}/**
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
 */const Yy=new Map;function Un(t){Kn(t instanceof Function,"Expected a class definition");let e=Yy.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Yy.set(t,e),e)}/**
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
 */class NE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}NE.type="NONE";const Xy=NE;/**
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
 */function _u(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_u(this.userKey,i.apiKey,s),this.fullPersistenceKey=_u("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ys(Un(Xy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Un(Xy);const o=_u(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=vi._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ys(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ys(s,e,r))}}/**
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
 */function Jy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ME(e))return"Blackberry";if(VE(e))return"Webos";if(Qg(e))return"Safari";if((e.includes("chrome/")||OE(e))&&!e.includes("edge/"))return"Chrome";if(LE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bE(t=ut()){return/firefox\//i.test(t)}function Qg(t=ut()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OE(t=ut()){return/crios\//i.test(t)}function DE(t=ut()){return/iemobile/i.test(t)}function LE(t=ut()){return/android/i.test(t)}function ME(t=ut()){return/blackberry/i.test(t)}function VE(t=ut()){return/webos/i.test(t)}function Xc(t=ut()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function i2(t=ut()){var e;return Xc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function s2(){return yP()&&document.documentMode===10}function FE(t=ut()){return Xc(t)||LE(t)||VE(t)||ME(t)||/windows phone/i.test(t)||DE(t)}function o2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function $E(t,e=[]){let n;switch(t){case"Browser":n=Jy(ut());break;case"Worker":n=`${Jy(ut())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$i}/${r}`}/**
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
 */class a2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function l2(t,e={}){return Dn(t,"GET","/v2/passwordPolicy",ir(t,e))}/**
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
 */const u2=6;class c2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:u2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class d2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zy(this),this.idTokenSubscription=new Zy(this),this.beforeStateQueue=new a2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=RE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Un(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await l2(this),n=new c2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ha("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await r2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Un(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[Un(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(U(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$E(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Mx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Zr(t){return Oe(t)}class Zy{constructor(e){this.auth=e,this.observer=null,this.addObserver=CP(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function h2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function jE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",h2().appendChild(r)})}function f2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const p2="https://www.google.com/recaptcha/enterprise.js?render=",g2="recaptcha-enterprise",m2="NO_RECAPTCHA";class v2{constructor(e){this.type=g2,this.auth=Zr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{qx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Wx(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Qy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(m2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Qy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}jE(p2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function e_(t,e,n,r=!1){const i=new v2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function ac(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await e_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await e_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function y2(t,e){const n=Yc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(rc(s,e??{}))return i;dn(i,"already-initialized")}return n.initialize({options:e})}function _2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Un);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function w2(t,e,n){const r=Zr(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=UE(e),{host:o,port:a}=E2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||S2()}function UE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function E2(t){const e=UE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:t_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:t_(o)}}}function t_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function S2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function I2(t,e){return Dn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function T2(t,e){return Ga(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}async function C2(t,e){return Dn(t,"POST","/v1/accounts:sendOobCode",ir(t,e))}async function R2(t,e){return C2(t,e)}/**
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
 */async function A2(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function k2(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
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
 */class ga extends Yg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ga(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ga(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ac(e,n,"signInWithPassword",T2);case"emailLink":return A2(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ac(e,r,"signUpPassword",I2);case"emailLink":return k2(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function _s(t,e){return Ga(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
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
 */const P2="http://localhost";class ki extends Yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ki(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ki(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:P2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wa(n)}return e}}/**
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
 */function x2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function N2(t){const e=Eo(So(t)).link,n=e?Eo(So(e)).deep_link_id:null,r=Eo(So(t)).deep_link_id;return(r?Eo(So(r)).link:null)||r||n||e||t}class Xg{constructor(e){var n,r,i,s,o,a;const l=Eo(So(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=x2((i=l.mode)!==null&&i!==void 0?i:null);U(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=N2(e);try{return new Xg(n)}catch{return null}}}/**
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
 */class Ks{constructor(){this.providerId=Ks.PROVIDER_ID}static credential(e,n){return ga._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xg.parseLink(n);return U(r,"argument-error"),ga._fromEmailAndCode(e,r.code,r.tenantId)}}Ks.PROVIDER_ID="password";Ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ka extends zE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gr extends Ka{constructor(){super("facebook.com")}static credential(e){return ki._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
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
 */class mr extends Ka{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ki._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
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
 */class vr extends Ka{constructor(){super("github.com")}static credential(e){return ki._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vr.credential(e.oauthAccessToken)}catch{return null}}}vr.GITHUB_SIGN_IN_METHOD="github.com";vr.PROVIDER_ID="github.com";/**
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
 */class yr extends Ka{constructor(){super("twitter.com")}static credential(e,n){return ki._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yr.credential(n,r)}catch{return null}}}yr.TWITTER_SIGN_IN_METHOD="twitter.com";yr.PROVIDER_ID="twitter.com";/**
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
 */async function b2(t,e){return Ga(t,"POST","/v1/accounts:signUp",ir(t,e))}/**
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
 */class Pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vi._fromIdTokenResponse(e,r,i),o=n_(r);return new Pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=n_(r);return new Pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function n_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class lc extends On{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,lc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new lc(e,n,r,i)}}function BE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?lc._fromErrorAndOperation(t,s,e,r):s})}async function O2(t,e,n=!1){const r=await Ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pi._forOperation(t,"link",r)}/**
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
 */async function D2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ns(t,BE(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=Kg(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),Pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),s}}/**
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
 */async function HE(t,e,n=!1){const r="signIn",i=await BE(t,r,e),s=await Pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function L2(t,e){return HE(Zr(t),e)}/**
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
 */function M2(t,e,n){var r;U(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),U(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(U(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(U(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function WE(t){const e=Zr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function V2(t,e,n){const r=Zr(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&M2(r,i,n),await ac(r,i,"getOobCode",R2)}async function F2(t,e,n){const r=Zr(t),o=await ac(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",b2).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&WE(t),l}),a=await Pi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function $2(t,e,n){return L2(Oe(t),Ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&WE(t),r})}/**
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
 */async function j2(t,e){return Dn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function U2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Oe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ns(r,j2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function z2(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function B2(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}const uc="__sak";/**
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
 */class qE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function H2(){const t=ut();return Qg(t)||Xc(t)}const W2=1e3,q2=10;class GE extends qE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H2()&&o2(),this.fallbackToPolling=FE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);s2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,q2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},W2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}GE.type="LOCAL";const G2=GE;/**
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
 */class KE extends qE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}KE.type="SESSION";const QE=KE;/**
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
 */function K2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Jc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await K2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jc.receivers=[];/**
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
 */function Jg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Q2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Jg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function An(){return window}function Y2(t){An().location.href=t}/**
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
 */function YE(){return typeof An().WorkerGlobalScope<"u"&&typeof An().importScripts=="function"}async function X2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Z2(){return YE()?self:null}/**
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
 */const XE="firebaseLocalStorageDb",eN=1,cc="firebaseLocalStorage",JE="fbase_key";class Qa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zc(t,e){return t.transaction([cc],e?"readwrite":"readonly").objectStore(cc)}function tN(){const t=indexedDB.deleteDatabase(XE);return new Qa(t).toPromise()}function Xf(){const t=indexedDB.open(XE,eN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(cc,{keyPath:JE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(cc)?e(r):(r.close(),await tN(),e(await Xf()))})})}async function r_(t,e,n){const r=Zc(t,!0).put({[JE]:e,value:n});return new Qa(r).toPromise()}async function nN(t,e){const n=Zc(t,!1).get(e),r=await new Qa(n).toPromise();return r===void 0?null:r.value}function i_(t,e){const n=Zc(t,!0).delete(e);return new Qa(n).toPromise()}const rN=800,iN=3;class ZE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return YE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jc._getInstance(Z2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X2(),!this.activeServiceWorker)return;this.sender=new Q2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xf();return await r_(e,uc,"1"),await i_(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>r_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>i_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Zc(i,!1).getAll();return new Qa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZE.type="LOCAL";const sN=ZE;new qa(3e4,6e4);/**
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
 */function oN(t,e){return e?Un(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zg extends Yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function aN(t){return HE(t.auth,new Zg(t),t.bypassAuthState)}function lN(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),D2(n,new Zg(t),t.bypassAuthState)}async function uN(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),O2(n,new Zg(t),t.bypassAuthState)}/**
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
 */class eS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return aN;case"linkViaPopup":case"linkViaRedirect":return uN;case"reauthViaPopup":case"reauthViaRedirect":return lN;default:dn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cN=new qa(2e3,1e4);class as extends eS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=Jg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cN.get())};e()}}as.currentPopupAction=null;/**
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
 */const dN="pendingRedirect",wu=new Map;class hN extends eS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wu.get(this.auth._key());if(!e){try{const r=await fN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wu.set(this.auth._key(),e)}return this.bypassAuthState||wu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fN(t,e){const n=mN(e),r=gN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pN(t,e){wu.set(t._key(),e)}function gN(t){return Un(t._redirectPersistence)}function mN(t){return _u(dN,t.config.apiKey,t.name)}async function vN(t,e,n=!1){const r=Zr(t),i=oN(r,e),o=await new hN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yN=10*60*1e3;class _N{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yN&&this.cachedEventUids.clear(),this.cachedEventUids.has(s_(e))}saveEventToCache(e){this.cachedEventUids.add(s_(e)),this.lastProcessedEventTime=Date.now()}}function s_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tS(t);default:return!1}}/**
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
 */async function EN(t,e={}){return Dn(t,"GET","/v1/projects",e)}/**
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
 */const SN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IN=/^https?/;async function TN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EN(t);for(const n of e)try{if(CN(n))return}catch{}dn(t,"unauthorized-domain")}function CN(t){const e=Yf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IN.test(n))return!1;if(SN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const RN=new qa(3e4,6e4);function o_(){const t=An().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AN(t){return new Promise((e,n)=>{var r,i,s;function o(){o_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{o_(),n(Rn(t,"network-request-failed"))},timeout:RN.get()})}if(!((i=(r=An().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=An().gapi)===null||s===void 0)&&s.load)o();else{const a=f2("iframefcb");return An()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},jE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Eu=null,e})}let Eu=null;function kN(t){return Eu=Eu||AN(t),Eu}/**
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
 */const PN=new qa(5e3,15e3),xN="__/auth/iframe",NN="emulator/auth/iframe",bN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ON=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DN(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Gg(e,NN):`https://${t.config.authDomain}/${xN}`,r={apiKey:e.apiKey,appName:t.name,v:$i},i=ON.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Wa(r).slice(1)}`}async function LN(t){const e=await kN(t),n=An().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:DN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=An().setTimeout(()=>{s(o)},PN.get());function l(){An().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const MN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VN=500,FN=600,$N="_blank",jN="http://localhost";class a_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UN(t,e,n,r=VN,i=FN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},MN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ut().toLowerCase();n&&(a=OE(u)?$N:n),bE(u)&&(e=e||jN,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,m])=>`${f}${p}=${m},`,"");if(i2(u)&&a!=="_self")return zN(e||"",a),new a_(null);const d=window.open(e||"",a,c);U(d,t,"popup-blocked");try{d.focus()}catch{}return new a_(d)}function zN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const BN="__/auth/handler",HN="emulator/auth/handler",WN=encodeURIComponent("fac");async function l_(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$i,eventId:i};if(e instanceof zE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TP(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ka){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${WN}=${encodeURIComponent(l)}`:"";return`${qN(t)}?${Wa(a).slice(1)}${u}`}function qN({config:t}){return t.emulator?Gg(t,HN):`https://${t.authDomain}/${BN}`}/**
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
 */const _h="webStorageSupport";class GN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=QE,this._completeRedirectFn=vN,this._overrideRedirectResult=pN}async _openPopup(e,n,r,i){var s;Kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await l_(e,n,r,Yf(),i);return UN(e,o,Jg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await l_(e,n,r,Yf(),i);return Y2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await LN(e),r=new _N(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_h,{type:_h},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_h];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return FE()||Qg()||Xc()}}const KN=GN;var u_="@firebase/auth",c_="1.5.1";/**
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
 */class QN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function YN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XN(t){Ai(new zr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;U(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$E(t)},u=new d2(r,i,s,l);return _2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ai(new zr("auth-internal",e=>{const n=Zr(e.getProvider("auth").getImmediate());return(r=>new QN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Cn(u_,c_,YN(t)),Cn(u_,c_,"esm2017")}/**
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
 */const JN=5*60,ZN=yE("authIdTokenMaxAge")||JN;let d_=null;const eb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZN)return;const i=n==null?void 0:n.token;d_!==i&&(d_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function em(t=Hg()){const e=Yc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=y2(t,{popupRedirectResolver:KN,persistence:[sN,G2,QE]}),r=yE("authTokenSyncURL");if(r){const s=eb(r);B2(n,s,()=>s(n.currentUser)),z2(n,o=>s(o))}const i=gE("auth");return i&&w2(n,`http://${i}`),n}XN("Browser");var tb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,tm=tm||{},q=tb||self;function ed(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ya(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nb(t){return Object.prototype.hasOwnProperty.call(t,wh)&&t[wh]||(t[wh]=++rb)}var wh="closure_uid_"+(1e9*Math.random()>>>0),rb=0;function ib(t,e,n){return t.call.apply(t.bind,arguments)}function sb(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ot(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ot=ib:ot=sb,ot.apply(null,arguments)}function Ll(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function He(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ei(){this.s=this.s,this.o=this.o}var ob=0;ei.prototype.s=!1;ei.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ob!=0)&&nb(this)};ei.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const nS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function nm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function h_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ed(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}at.prototype.h=function(){this.defaultPrevented=!0};var ab=function(){if(!q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};q.addEventListener("test",n,e),q.removeEventListener("test",n,e)}catch{}return t}();function ma(t){return/^[\s\xa0]*$/.test(t)}function td(){var t=q.navigator;return t&&(t=t.userAgent)?t:""}function yn(t){return td().indexOf(t)!=-1}function rm(t){return rm[" "](t),t}rm[" "]=function(){};function lb(t,e){var n=e4;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ub=yn("Opera"),bs=yn("Trident")||yn("MSIE"),rS=yn("Edge"),Jf=rS||bs,iS=yn("Gecko")&&!(td().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge"))&&!(yn("Trident")||yn("MSIE"))&&!yn("Edge"),cb=td().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge");function sS(){var t=q.document;return t?t.documentMode:void 0}var Zf;e:{var Eh="",Sh=function(){var t=td();if(iS)return/rv:([^\);]+)(\)|;)/.exec(t);if(rS)return/Edge\/([\d\.]+)/.exec(t);if(bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(cb)return/WebKit\/(\S+)/.exec(t);if(ub)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Sh&&(Eh=Sh?Sh[1]:""),bs){var Ih=sS();if(Ih!=null&&Ih>parseFloat(Eh)){Zf=String(Ih);break e}}Zf=Eh}var ep;if(q.document&&bs){var f_=sS();ep=f_||parseInt(Zf,10)||void 0}else ep=void 0;var db=ep;function va(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(iS){e:{try{rm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:hb[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&va.$.h.call(this)}}He(va,at);var hb={2:"touch",3:"pen",4:"mouse"};va.prototype.h=function(){va.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Xa="closure_listenable_"+(1e6*Math.random()|0),fb=0;function pb(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++fb,this.fa=this.ia=!1}function nd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function im(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function gb(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function oS(t){const e={};for(const n in t)e[n]=t[n];return e}const p_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function aS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<p_.length;s++)n=p_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function rd(t){this.src=t,this.g={},this.h=0}rd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=np(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new pb(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function tp(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=nS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(nd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function np(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var sm="closure_lm_"+(1e6*Math.random()|0),Th={};function lS(t,e,n,r,i){if(r&&r.once)return cS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lS(t,e[s],n,r,i);return null}return n=lm(n),t&&t[Xa]?t.O(e,n,Ya(r)?!!r.capture:!!r,i):uS(t,e,n,!1,r,i)}function uS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ya(i)?!!i.capture:!!i,a=am(t);if(a||(t[sm]=a=new rd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=mb(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ab||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(hS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function mb(){function t(n){return e.call(t.src,t.listener,n)}const e=vb;return t}function cS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)cS(t,e[s],n,r,i);return null}return n=lm(n),t&&t[Xa]?t.P(e,n,Ya(r)?!!r.capture:!!r,i):uS(t,e,n,!0,r,i)}function dS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)dS(t,e[s],n,r,i);else r=Ya(r)?!!r.capture:!!r,n=lm(n),t&&t[Xa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=np(s,n,r,i),-1<n&&(nd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=am(t))&&(e=t.g[e.toString()],t=-1,e&&(t=np(e,n,r,i)),(n=-1<t?e[t]:null)&&om(n))}function om(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Xa])tp(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(hS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=am(e))?(tp(n,t),n.h==0&&(n.src=null,e[sm]=null)):nd(t)}}}function hS(t){return t in Th?Th[t]:Th[t]="on"+t}function vb(t,e){if(t.fa)t=!0;else{e=new va(e,this);var n=t.listener,r=t.la||t.src;t.ia&&om(t),t=n.call(r,e)}return t}function am(t){return t=t[sm],t instanceof rd?t:null}var Ch="__closure_events_fn_"+(1e9*Math.random()>>>0);function lm(t){return typeof t=="function"?t:(t[Ch]||(t[Ch]=function(e){return t.handleEvent(e)}),t[Ch])}function Be(){ei.call(this),this.i=new rd(this),this.S=this,this.J=null}He(Be,ei);Be.prototype[Xa]=!0;Be.prototype.removeEventListener=function(t,e,n,r){dS(this,t,e,n,r)};function Xe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),aS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ml(o,r,!0,e)&&i}if(o=e.g=t,i=Ml(o,r,!0,e)&&i,i=Ml(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ml(o,r,!1,e)&&i}Be.prototype.N=function(){if(Be.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)nd(n[r]);delete t.g[e],t.h--}}this.J=null};Be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Be.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ml(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&tp(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var um=q.JSON.stringify;class yb{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function _b(){var t=cm;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class wb{constructor(){this.h=this.g=null}add(e,n){const r=fS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var fS=new yb(()=>new Eb,t=>t.reset());class Eb{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Sb(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Ib(t){q.setTimeout(()=>{throw t},0)}let ya,_a=!1,cm=new wb,pS=()=>{const t=q.Promise.resolve(void 0);ya=()=>{t.then(Tb)}};var Tb=()=>{for(var t;t=_b();){try{t.h.call(t.g)}catch(n){Ib(n)}var e=fS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}_a=!1};function id(t,e){Be.call(this),this.h=t||1,this.g=e||q,this.j=ot(this.qb,this),this.l=Date.now()}He(id,Be);x=id.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Xe(this,"tick"),this.ga&&(dm(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function dm(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){id.$.N.call(this),dm(this),delete this.g};function hm(t,e,n){if(typeof t=="function")n&&(t=ot(t,n));else if(t&&typeof t.handleEvent=="function")t=ot(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:q.setTimeout(t,e||0)}function gS(t){t.g=hm(()=>{t.g=null,t.i&&(t.i=!1,gS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class Cb extends ei{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:gS(this)}N(){super.N(),this.g&&(q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wa(t){ei.call(this),this.h=t,this.g={}}He(wa,ei);var g_=[];function mS(t,e,n,r){Array.isArray(n)||(n&&(g_[0]=n.toString()),n=g_);for(var i=0;i<n.length;i++){var s=lS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function vS(t){im(t.g,function(e,n){this.g.hasOwnProperty(n)&&om(e)},t),t.g={}}wa.prototype.N=function(){wa.$.N.call(this),vS(this)};wa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sd(){this.g=!0}sd.prototype.Ea=function(){this.g=!1};function Rb(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function Ab(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function ls(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Pb(t,n)+(r?" "+r:"")})}function kb(t,e){t.info(function(){return"TIMEOUT: "+e})}sd.prototype.info=function(){};function Pb(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return um(n)}catch{return e}}var ji={},m_=null;function od(){return m_=m_||new Be}ji.Ta="serverreachability";function yS(t){at.call(this,ji.Ta,t)}He(yS,at);function Ea(t){const e=od();Xe(e,new yS(e))}ji.STAT_EVENT="statevent";function _S(t,e){at.call(this,ji.STAT_EVENT,t),this.stat=e}He(_S,at);function gt(t){const e=od();Xe(e,new _S(e,t))}ji.Ua="timingevent";function wS(t,e){at.call(this,ji.Ua,t),this.size=e}He(wS,at);function Ja(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return q.setTimeout(function(){t()},e)}var ad={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ES={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fm(){}fm.prototype.h=null;function v_(t){return t.h||(t.h=t.i())}function SS(){}var Za={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pm(){at.call(this,"d")}He(pm,at);function gm(){at.call(this,"c")}He(gm,at);var rp;function ld(){}He(ld,fm);ld.prototype.g=function(){return new XMLHttpRequest};ld.prototype.i=function(){return{}};rp=new ld;function el(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new wa(this),this.P=xb,t=Jf?125:void 0,this.V=new id(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new IS}function IS(){this.i=null,this.g="",this.h=!1}var xb=45e3,TS={},ip={};x=el.prototype;x.setTimeout=function(t){this.P=t};function sp(t,e,n){t.L=1,t.A=cd(Qn(e)),t.u=n,t.S=!0,CS(t,null)}function CS(t,e){t.G=Date.now(),tl(t),t.B=Qn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),OS(n.i,"t",r),t.o=0,n=t.l.J,t.h=new IS,t.g=eI(t.l,n?e:null,!t.u),0<t.O&&(t.M=new Cb(ot(t.Pa,t,t.g),t.O)),mS(t.U,t.g,"readystatechange",t.nb),e=t.I?oS(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ea(),Rb(t.j,t.v,t.B,t.m,t.W,t.u)}x.nb=function(t){t=t.target;const e=this.M;e&&_n(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const c=_n(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Jf||this.g&&(this.h.h||this.g.ja()||E_(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?Ea(3):Ea(2)),ud(this);var n=this.g.da();this.ca=n;t:if(RS(this)){var r=E_(this.g);t="";var i=r.length,s=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ci(this),Fo(this);var o="";break t}this.h.i=new q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,Ab(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ma(a)){var u=a;break t}}u=null}if(n=u)ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,op(this,n);else{this.i=!1,this.s=3,gt(12),ci(this),Fo(this);break e}}this.S?(AS(this,c,o),Jf&&this.i&&c==3&&(mS(this.U,this.V,"tick",this.mb),this.V.start())):(ls(this.j,this.m,o,null),op(this,o)),c==4&&ci(this),this.i&&!this.J&&(c==4?YS(this.l,this):(this.i=!1,tl(this)))}else Xb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),ci(this),Fo(this)}}}catch{}finally{}};function RS(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function AS(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=Nb(t,n),i==ip){e==4&&(t.s=4,gt(14),r=!1),ls(t.j,t.m,null,"[Incomplete Response]");break}else if(i==TS){t.s=4,gt(15),ls(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ls(t.j,t.m,i,null),op(t,i);RS(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Em(e),e.M=!0,gt(11))):(ls(t.j,t.m,n,"[Invalid Chunked Response]"),ci(t),Fo(t))}x.mb=function(){if(this.g){var t=_n(this.g),e=this.g.ja();this.o<e.length&&(ud(this),AS(this,t,e),this.i&&t!=4&&tl(this))}};function Nb(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?ip:(n=Number(e.substring(n,r)),isNaN(n)?TS:(r+=1,r+n>e.length?ip:(e=e.slice(r,r+n),t.o=r+n,e)))}x.cancel=function(){this.J=!0,ci(this)};function tl(t){t.Y=Date.now()+t.P,kS(t,t.P)}function kS(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Ja(ot(t.lb,t),e)}function ud(t){t.C&&(q.clearTimeout(t.C),t.C=null)}x.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(kb(this.j,this.B),this.L!=2&&(Ea(),gt(17)),ci(this),this.s=2,Fo(this)):kS(this,this.Y-t)};function Fo(t){t.l.H==0||t.J||YS(t.l,t)}function ci(t){ud(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,dm(t.V),vS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function op(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ap(n.i,t))){if(!t.K&&ap(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)fc(n),pd(n);else break e;wm(n),gt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ja(ot(n.ib,n),6e3));if(1>=MS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else di(n,11)}else if((t.K||n.g==t)&&fc(n),!ma(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const m=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(mm(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,de(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ZS(r,r.J?r.pa:null,r.Y),o.K){VS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(ud(a),tl(a)),r.g=o}else KS(r);0<n.j.length&&gd(n)}else u[0]!="stop"&&u[0]!="close"||di(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?di(n,7):_m(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Ea(4)}catch{}}function bb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ed(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function Ob(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ed(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function PS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ed(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ob(t),r=bb(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var xS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Db(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function yi(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof yi){this.h=t.h,dc(this,t.j),this.s=t.s,this.g=t.g,hc(this,t.m),this.l=t.l;var e=t.i,n=new Sa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),y_(this,n),this.o=t.o}else t&&(e=String(t).match(xS))?(this.h=!1,dc(this,e[1]||"",!0),this.s=Io(e[2]||""),this.g=Io(e[3]||"",!0),hc(this,e[4]),this.l=Io(e[5]||"",!0),y_(this,e[6]||"",!0),this.o=Io(e[7]||"")):(this.h=!1,this.i=new Sa(null,this.h))}yi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(To(e,__,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(To(e,__,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(To(n,n.charAt(0)=="/"?Vb:Mb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",To(n,$b)),t.join("")};function Qn(t){return new yi(t)}function dc(t,e,n){t.j=n?Io(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function hc(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function y_(t,e,n){e instanceof Sa?(t.i=e,jb(t.i,t.h)):(n||(e=To(e,Fb)),t.i=new Sa(e,t.h))}function de(t,e,n){t.i.set(e,n)}function cd(t){return de(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Io(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function To(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,Lb),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Lb(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var __=/[#\/\?@]/g,Mb=/[#\?:]/g,Vb=/[#\?]/g,Fb=/[#\?@]/g,$b=/#/g;function Sa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ti(t){t.g||(t.g=new Map,t.h=0,t.i&&Db(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Sa.prototype;x.add=function(t,e){ti(this),this.i=null,t=Qs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function NS(t,e){ti(t),e=Qs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function bS(t,e){return ti(t),e=Qs(t,e),t.g.has(e)}x.forEach=function(t,e){ti(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.ta=function(){ti(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){ti(this);let e=[];if(typeof t=="string")bS(this,t)&&(e=e.concat(this.g.get(Qs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return ti(this),this.i=null,t=Qs(this,t),bS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function OS(t,e,n){NS(t,e),0<n.length&&(t.i=null,t.g.set(Qs(t,e),nm(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Qs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function jb(t,e){e&&!t.j&&(ti(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(NS(this,r),OS(this,i,n))},t)),t.j=e}var Ub=class{constructor(t,e){this.g=t,this.map=e}};function DS(t){this.l=t||zb,q.PerformanceNavigationTiming?(t=q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(q.g&&q.g.Ka&&q.g.Ka()&&q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zb=10;function LS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function MS(t){return t.h?1:t.g?t.g.size:0}function ap(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function mm(t,e){t.g?t.g.add(e):t.h=e}function VS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}DS.prototype.cancel=function(){if(this.i=FS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function FS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return nm(t.i)}var Bb=class{stringify(t){return q.JSON.stringify(t,void 0)}parse(t){return q.JSON.parse(t,void 0)}};function Hb(){this.g=new Bb}function Wb(t,e,n){const r=n||"";try{PS(t,function(i,s){let o=i;Ya(i)&&(o=um(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function qb(t,e){const n=new sd;if(q.Image){const r=new Image;r.onload=Ll(Vl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ll(Vl,n,r,"TestLoadImage: error",!1,e),r.onabort=Ll(Vl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ll(Vl,n,r,"TestLoadImage: timeout",!1,e),q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Vl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function dd(t){this.l=t.ec||null,this.j=t.ob||!1}He(dd,fm);dd.prototype.g=function(){return new hd(this.l,this.j)};dd.prototype.i=function(t){return function(){return t}}({});function hd(t,e){Be.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=vm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(hd,Be);var vm=0;x=hd.prototype;x.open=function(t,e){if(this.readyState!=vm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Ia(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,nl(this)),this.readyState=vm};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Ia(this)),this.g&&(this.readyState=3,Ia(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$S(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function $S(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?nl(this):Ia(this),this.readyState==3&&$S(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,nl(this))};x.Ya=function(t){this.g&&(this.response=t,nl(this))};x.ka=function(){this.g&&nl(this)};function nl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Ia(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Ia(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(hd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Gb=q.JSON.parse;function Ce(t){Be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jS,this.L=this.M=!1}He(Ce,Be);var jS="",Kb=/^https?$/i,Qb=["POST","PUT"];x=Ce.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():rp.g(),this.C=this.u?v_(this.u):v_(rp),this.g.onreadystatechange=ot(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){w_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=q.FormData&&t instanceof q.FormData,!(0<=nS(Qb,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{BS(this),0<this.B&&((this.L=Yb(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ot(this.ua,this)):this.A=hm(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){w_(this,s)}};function Yb(t){return bs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof tm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xe(this,"timeout"),this.abort(8))};function w_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,US(t),fd(t)}function US(t){t.F||(t.F=!0,Xe(t,"complete"),Xe(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xe(this,"complete"),Xe(this,"abort"),fd(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fd(this,!0)),Ce.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?zS(this):this.kb())};x.kb=function(){zS(this)};function zS(t){if(t.h&&typeof tm<"u"&&(!t.C[1]||_n(t)!=4||t.da()!=2)){if(t.v&&_n(t)==4)hm(t.La,0,t);else if(Xe(t,"readystatechange"),_n(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(xS)[1]||null;!i&&q.self&&q.self.location&&(i=q.self.location.protocol.slice(0,-1)),r=!Kb.test(i?i.toLowerCase():"")}n=r}if(n)Xe(t,"complete"),Xe(t,"success");else{t.m=6;try{var s=2<_n(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",US(t)}}finally{fd(t)}}}}function fd(t,e){if(t.g){BS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Xe(t,"ready");try{n.onreadystatechange=r}catch{}}}function BS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(q.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function _n(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Gb(e)}};function E_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case jS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Xb(t){const e={};t=(t.g&&2<=_n(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ma(t[r]))continue;var n=Sb(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}gb(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function HS(t){let e="";return im(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function ym(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=HS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):de(t,e,n))}function ho(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function WS(t){this.Ga=0,this.j=[],this.l=new sd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ho("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ho("baseRetryDelayMs",5e3,t),this.hb=ho("retryDelaySeedMs",1e4,t),this.eb=ho("forwardChannelMaxRetries",2,t),this.xa=ho("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new DS(t&&t.concurrentRequestLimit),this.Ja=new Hb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=WS.prototype;x.ra=8;x.H=1;function _m(t){if(qS(t),t.H==3){var e=t.W++,n=Qn(t.I);if(de(n,"SID",t.K),de(n,"RID",e),de(n,"TYPE","terminate"),rl(t,n),e=new el(t,t.l,e),e.L=2,e.A=cd(Qn(n)),n=!1,q.navigator&&q.navigator.sendBeacon)try{n=q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&q.Image&&(new Image().src=e.A,n=!0),n||(e.g=eI(e.l,null),e.g.ha(e.A)),e.G=Date.now(),tl(e)}JS(t)}function pd(t){t.g&&(Em(t),t.g.cancel(),t.g=null)}function qS(t){pd(t),t.u&&(q.clearTimeout(t.u),t.u=null),fc(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&q.clearTimeout(t.m),t.m=null)}function gd(t){if(!LS(t.i)&&!t.m){t.m=!0;var e=t.Na;ya||pS(),_a||(ya(),_a=!0),cm.add(e,t),t.C=0}}function Jb(t,e){return MS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Ja(ot(t.Na,t,e),XS(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new el(this,this.l,t);let s=this.s;if(this.U&&(s?(s=oS(s),aS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=GS(this,i,e),n=Qn(this.I),de(n,"RID",t),de(n,"CVER",22),this.F&&de(n,"X-HTTP-Session-Id",this.F),rl(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(HS(s)))+"&"+e:this.o&&ym(n,this.o,s)),mm(this.i,i),this.bb&&de(n,"TYPE","init"),this.P?(de(n,"$req",e),de(n,"SID","null"),i.aa=!0,sp(i,n,null)):sp(i,n,e),this.H=2}}else this.H==3&&(t?S_(this,t):this.j.length==0||LS(this.i)||S_(this))};function S_(t,e){var n;e?n=e.m:n=t.W++;const r=Qn(t.I);de(r,"SID",t.K),de(r,"RID",n),de(r,"AID",t.V),rl(t,r),t.o&&t.s&&ym(r,t.o,t.s),n=new el(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=GS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),mm(t.i,n),sp(n,r,e)}function rl(t,e){t.na&&im(t.na,function(n,r){de(e,r,n)}),t.h&&PS({},function(n,r){de(e,r,n)})}function GS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ot(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{Wb(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function KS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ya||pS(),_a||(ya(),_a=!0),cm.add(e,t),t.A=0}}function wm(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Ja(ot(t.Ma,t),XS(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,QS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Ja(ot(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),pd(this),QS(this))};function Em(t){t.B!=null&&(q.clearTimeout(t.B),t.B=null)}function QS(t){t.g=new el(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);de(e,"RID","rpc"),de(e,"SID",t.K),de(e,"AID",t.V),de(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&de(e,"TO",t.qa),de(e,"TYPE","xmlhttp"),rl(t,e),t.o&&t.s&&ym(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=cd(Qn(e)),n.u=null,n.S=!0,CS(n,t)}x.ib=function(){this.v!=null&&(this.v=null,pd(this),wm(this),gt(19))};function fc(t){t.v!=null&&(q.clearTimeout(t.v),t.v=null)}function YS(t,e){var n=null;if(t.g==e){fc(t),Em(t),t.g=null;var r=2}else if(ap(t.i,e))n=e.F,VS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=od(),Xe(r,new wS(r,n)),gd(t)}else KS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&Jb(t,e)||r==2&&wm(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:di(t,5);break;case 4:di(t,10);break;case 3:di(t,6);break;default:di(t,2)}}}function XS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function di(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ot(t.pb,t);n||(n=new yi("//www.google.com/images/cleardot.gif"),q.location&&q.location.protocol=="http"||dc(n,"https"),cd(n)),qb(n.toString(),r)}else gt(2);t.H=0,t.h&&t.h.za(e),JS(t),qS(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function JS(t){if(t.H=0,t.ma=[],t.h){const e=FS(t.i);(e.length!=0||t.j.length!=0)&&(h_(t.ma,e),h_(t.ma,t.j),t.i.i.length=0,nm(t.j),t.j.length=0),t.h.ya()}}function ZS(t,e,n){var r=n instanceof yi?Qn(n):new yi(n);if(r.g!="")e&&(r.g=e+"."+r.g),hc(r,r.m);else{var i=q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new yi(null);r&&dc(s,r),e&&(s.g=e),i&&hc(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&de(r,n,e),de(r,"VER",t.ra),rl(t,r),r}function eI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ce(new dd({ob:n})):new Ce(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function tI(){}x=tI.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function pc(){if(bs&&!(10<=Number(db)))throw Error("Environmental error: no available transport.")}pc.prototype.g=function(t,e){return new Vt(t,e)};function Vt(t,e){Be.call(this),this.g=new WS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ma(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ma(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ys(this)}He(Vt,Be);Vt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;gt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ZS(t,null,t.Y),gd(t)};Vt.prototype.close=function(){_m(this.g)};Vt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=um(t),t=n);e.j.push(new Ub(e.fb++,t)),e.H==3&&gd(e)};Vt.prototype.N=function(){this.g.h=null,delete this.j,_m(this.g),delete this.g,Vt.$.N.call(this)};function nI(t){pm.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(nI,pm);function rI(){gm.call(this),this.status=1}He(rI,gm);function Ys(t){this.g=t}He(Ys,tI);Ys.prototype.Ba=function(){Xe(this.g,"a")};Ys.prototype.Aa=function(t){Xe(this.g,new nI(t))};Ys.prototype.za=function(t){Xe(this.g,new rI)};Ys.prototype.ya=function(){Xe(this.g,"b")};function Zb(){this.blockSize=-1}function hn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}He(hn,Zb);hn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Rh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}hn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)Rh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){Rh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){Rh(this,r),i=0;break}}this.h=i,this.i+=e};hn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function oe(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var e4={};function Sm(t){return-128<=t&&128>t?lb(t,function(e){return new oe([e|0],0>e?-1:0)}):new oe([t|0],0>t?-1:0)}function wn(t){if(isNaN(t)||!isFinite(t))return ws;if(0>t)return Ke(wn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=lp;return new oe(e,0)}function iI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(iI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=wn(Math.pow(e,8)),r=ws,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=wn(Math.pow(e,s)),r=r.R(s).add(wn(o))):(r=r.R(n),r=r.add(wn(o)))}return r}var lp=4294967296,ws=Sm(0),up=Sm(1),I_=Sm(16777216);x=oe.prototype;x.ea=function(){if(Wt(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:lp+r)*e,e*=lp}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(zn(this))return"0";if(Wt(this))return"-"+Ke(this).toString(t);for(var e=wn(Math.pow(t,6)),n=this,r="";;){var i=mc(n,e).g;n=gc(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,zn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function zn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Wt(t){return t.h==-1}x.X=function(t){return t=gc(this,t),Wt(t)?-1:zn(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new oe(n,~t.h).add(up)}x.abs=function(){return Wt(this)?Ke(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new oe(n,n[n.length-1]&-2147483648?-1:0)};function gc(t,e){return t.add(Ke(e))}x.R=function(t){if(zn(this)||zn(t))return ws;if(Wt(this))return Wt(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(Wt(t))return Ke(this.R(Ke(t)));if(0>this.X(I_)&&0>t.X(I_))return wn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Fl(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Fl(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Fl(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Fl(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new oe(n,0)};function Fl(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function fo(t,e){this.g=t,this.h=e}function mc(t,e){if(zn(e))throw Error("division by zero");if(zn(t))return new fo(ws,ws);if(Wt(t))return e=mc(Ke(t),e),new fo(Ke(e.g),Ke(e.h));if(Wt(e))return e=mc(t,Ke(e)),new fo(Ke(e.g),e.h);if(30<t.g.length){if(Wt(t)||Wt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=up,r=e;0>=r.X(t);)n=T_(n),r=T_(r);var i=Wi(n,1),s=Wi(r,1);for(r=Wi(r,2),n=Wi(n,2);!zn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Wi(r,1),n=Wi(n,1)}return e=gc(t,i.R(e)),new fo(i,e)}for(i=ws;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=wn(n),o=s.R(e);Wt(o)||0<o.X(t);)n-=r,s=wn(n),o=s.R(e);zn(s)&&(s=up),i=i.add(s),t=gc(t,o)}return new fo(i,t)}x.gb=function(t){return mc(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new oe(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new oe(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new oe(n,this.h^t.h)};function T_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new oe(n,t.h)}function Wi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new oe(i,t.h)}pc.prototype.createWebChannel=pc.prototype.g;Vt.prototype.send=Vt.prototype.u;Vt.prototype.open=Vt.prototype.m;Vt.prototype.close=Vt.prototype.close;ad.NO_ERROR=0;ad.TIMEOUT=8;ad.HTTP_ERROR=6;ES.COMPLETE="complete";SS.EventType=Za;Za.OPEN="a";Za.CLOSE="b";Za.ERROR="c";Za.MESSAGE="d";Be.prototype.listen=Be.prototype.O;Ce.prototype.listenOnce=Ce.prototype.P;Ce.prototype.getLastError=Ce.prototype.Sa;Ce.prototype.getLastErrorCode=Ce.prototype.Ia;Ce.prototype.getStatus=Ce.prototype.da;Ce.prototype.getResponseJson=Ce.prototype.Wa;Ce.prototype.getResponseText=Ce.prototype.ja;Ce.prototype.send=Ce.prototype.ha;Ce.prototype.setWithCredentials=Ce.prototype.Oa;hn.prototype.digest=hn.prototype.l;hn.prototype.reset=hn.prototype.reset;hn.prototype.update=hn.prototype.j;oe.prototype.add=oe.prototype.add;oe.prototype.multiply=oe.prototype.R;oe.prototype.modulo=oe.prototype.gb;oe.prototype.compare=oe.prototype.X;oe.prototype.toNumber=oe.prototype.ea;oe.prototype.toString=oe.prototype.toString;oe.prototype.getBits=oe.prototype.D;oe.fromNumber=wn;oe.fromString=iI;var t4=function(){return new pc},n4=function(){return od()},Ah=ad,r4=ES,i4=ji,C_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$l=SS,s4=Ce,o4=hn,Es=oe;const R_="@firebase/firestore";/**
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */const xi=new zg("@firebase/firestore");function po(){return xi.logLevel}function L(t,...e){if(xi.logLevel<=J.DEBUG){const n=e.map(Im);xi.debug(`Firestore (${Xs}): ${t}`,...n)}}function Yn(t,...e){if(xi.logLevel<=J.ERROR){const n=e.map(Im);xi.error(`Firestore (${Xs}): ${t}`,...n)}}function Os(t,...e){if(xi.logLevel<=J.WARN){const n=e.map(Im);xi.warn(`Firestore (${Xs}): ${t}`,...n)}}function Im(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: `+t;throw Yn(e),new Error(e)}function le(t,e){t||H()}function K(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class sI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class a4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(rt.UNAUTHENTICATED))}shutdown(){}}class l4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class u4{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{L("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(L("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(L("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string"),new sI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new rt(e)}}class c4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class d4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new c4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class h4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class f4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&L("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,L("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{L("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):L("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string"),this.R=n.token,new h4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function p4(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class oI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=p4(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function Ds(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Fe(0,0))}static max(){return new G(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends Ta{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const g4=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Ta{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return g4.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(me.fromString(e))}static fromName(e){return new j(me.fromString(e).popFirst(5))}static empty(){return new j(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new me(e.slice()))}}function m4(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=G.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new Br(i,j.empty(),e)}function v4(t){return new Br(t.readTime,t.key,-1)}class Br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Br(G.min(),j.empty(),-1)}static max(){return new Br(G.max(),j.empty(),-1)}}function y4(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
 */const _4="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class w4{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function il(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==_4)throw t;L("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function sl(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Tm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Tm._e=-1;function md(t){return t==null}function vc(t){return t===0&&1/t==-1/0}function E4(t){return typeof t=="number"&&Number.isInteger(t)&&!vc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function A_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ui(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Ge.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jl(this.root,e,this.comparator,!1)}getReverseIterator(){return new jl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jl(this.root,e,this.comparator,!0)}}class jl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ge.RED,this.left=i??Ge.EMPTY,this.right=s??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ge.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ge(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Je{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new k_(this.data.getIterator())}getIteratorFrom(e){return new k_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class k_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new bt([])}unionWith(e){let n=new Je(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lI("Invalid base64 string: "+s):s}}(e);return new ct(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const S4=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hr(t){if(le(!!t),typeof t=="string"){let e=0;const n=S4.exec(t);if(le(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ni(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
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
 */function Cm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rm(t){const e=t.mapValue.fields.__previous_value__;return Cm(e)?Rm(e):e}function Ca(t){const e=Hr(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
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
 */class I4{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ra&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ul={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cm(t)?4:T4(t)?9007199254740991:10:H()}function xn(t,e){if(t===e)return!0;const n=bi(t);if(n!==bi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ca(t).isEqual(Ca(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Hr(i.timestampValue),a=Hr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ni(i.bytesValue).isEqual(Ni(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ne(i.geoPointValue.latitude)===Ne(s.geoPointValue.latitude)&&Ne(i.geoPointValue.longitude)===Ne(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ne(i.integerValue)===Ne(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ne(i.doubleValue),a=Ne(s.doubleValue);return o===a?vc(o)===vc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(A_(o)!==A_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!xn(o[l],a[l])))return!1;return!0}(t,e);default:return H()}}function Aa(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function Ls(t,e){if(t===e)return 0;const n=bi(t),r=bi(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ne(s.integerValue||s.doubleValue),l=Ne(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return P_(t.timestampValue,e.timestampValue);case 4:return P_(Ca(t),Ca(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Ni(s),l=Ni(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=te(a[u],l[u]);if(c!==0)return c}return te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=te(Ne(s.latitude),Ne(o.latitude));return a!==0?a:te(Ne(s.longitude),Ne(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Ls(a[u],l[u]);if(c)return c}return te(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ul.mapValue&&o===Ul.mapValue)return 0;if(s===Ul.mapValue)return 1;if(o===Ul.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const f=te(l[d],c[d]);if(f!==0)return f;const p=Ls(a[l[d]],u[c[d]]);if(p!==0)return p}return te(l.length,c.length)}(t.mapValue,e.mapValue);default:throw H()}}function P_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Hr(t),r=Hr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function Ms(t){return cp(t)}function cp(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ni(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return j.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=cp(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${cp(n.fields[o])}`;return i+"}"}(t.mapValue):H()}function dp(t){return!!t&&"integerValue"in t}function Am(t){return!!t&&"arrayValue"in t}function x_(t){return!!t&&"nullValue"in t}function N_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Su(t){return!!t&&"mapValue"in t}function $o(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ui(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$o(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$o(t.arrayValue.values[n]);return e}return Object.assign({},t)}function T4(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Su(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$o(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$o(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Su(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Su(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ui(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new It($o(this.value))}}function uI(t){const e=[];return Ui(t.fields,(n,r)=>{const i=new Qe([n]);if(Su(r)){const s=uI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new bt(e)}/**
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
 */class st{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new st(e,0,G.min(),G.min(),G.min(),It.empty(),0)}static newFoundDocument(e,n,r,i){return new st(e,1,n,G.min(),r,i,0)}static newNoDocument(e,n){return new st(e,2,n,G.min(),G.min(),It.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,G.min(),G.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class yc{constructor(e,n){this.position=e,this.inclusive=n}}function b_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Ls(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function O_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class _c{constructor(e,n="asc"){this.field=e,this.dir=n}}function C4(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cI{}class Me extends cI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new A4(e,n,r):n==="array-contains"?new x4(e,r):n==="in"?new N4(e,r):n==="not-in"?new b4(e,r):n==="array-contains-any"?new O4(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new k4(e,r):new P4(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ls(n,this.value)):n!==null&&bi(this.value)===bi(n)&&this.matchesComparison(Ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nn extends cI{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Nn(e,n)}matches(e){return dI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function dI(t){return t.op==="and"}function hI(t){return R4(t)&&dI(t)}function R4(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function hp(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Ms(t.value);if(hI(t))return t.filters.map(e=>hp(e)).join(",");{const e=t.filters.map(n=>hp(n)).join(",");return`${t.op}(${e})`}}function fI(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&xn(r.value,i.value)}(t,e):t instanceof Nn?function(r,i){return i instanceof Nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&fI(o,i.filters[a]),!0):!1}(t,e):void H()}function pI(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Ms(n.value)}`}(t):t instanceof Nn?function(n){return n.op.toString()+" {"+n.getFilters().map(pI).join(" ,")+"}"}(t):"Filter"}class A4 extends Me{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class k4 extends Me{constructor(e,n){super(e,"in",n),this.keys=gI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class P4 extends Me{constructor(e,n){super(e,"not-in",n),this.keys=gI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function gI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class x4 extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Am(n)&&Aa(n.arrayValue,this.value)}}class N4 extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Aa(this.value.arrayValue,n)}}class b4 extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Aa(this.value.arrayValue,n)}}class O4 extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Am(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Aa(this.value.arrayValue,r))}}/**
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
 */class D4{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function D_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new D4(t,e,n,r,i,s,o)}function km(t){const e=K(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),md(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ms(r)).join(",")),e.ce=n}return e.ce}function Pm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!C4(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!O_(t.startAt,e.startAt)&&O_(t.endAt,e.endAt)}function fp(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class vd{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function L4(t,e,n,r,i,s,o,a){return new vd(t,e,n,r,i,s,o,a)}function mI(t){return new vd(t)}function L_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function M4(t){return t.collectionGroup!==null}function jo(t){const e=K(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Je(Qe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new _c(s,r))}),n.has(Qe.keyField().canonicalString())||e.le.push(new _c(Qe.keyField(),r))}return e.le}function kn(t){const e=K(t);return e.he||(e.he=V4(e,jo(t))),e.he}function V4(t,e){if(t.limitType==="F")return D_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new _c(i.field,s)});const n=t.endAt?new yc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new yc(t.startAt.position,t.startAt.inclusive):null;return D_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function pp(t,e,n){return new vd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yd(t,e){return Pm(kn(t),kn(e))&&t.limitType===e.limitType}function vI(t){return`${km(kn(t))}|lt:${t.limitType}`}function qi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>pI(i)).join(", ")}]`),md(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ms(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ms(i)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function _d(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):j.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of jo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=b_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,jo(r),i)||r.endAt&&!function(o,a,l){const u=b_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,jo(r),i))}(t,e)}function F4(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function yI(t){return(e,n)=>{let r=!1;for(const i of jo(t)){const s=$4(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function $4(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Ls(l,u):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Js{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ui(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aI(this.inner)}size(){return this.innerSize}}/**
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
 */const j4=new Se(j.comparator);function Xn(){return j4}const _I=new Se(j.comparator);function Co(...t){let e=_I;for(const n of t)e=e.insert(n.key,n);return e}function wI(t){let e=_I;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function hi(){return Uo()}function EI(){return Uo()}function Uo(){return new Js(t=>t.toString(),(t,e)=>t.isEqual(e))}const U4=new Se(j.comparator),z4=new Je(j.comparator);function Y(...t){let e=z4;for(const n of t)e=e.add(n);return e}const B4=new Je(te);function H4(){return B4}/**
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
 */function SI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vc(e)?"-0":e}}function II(t){return{integerValue:""+t}}function W4(t,e){return E4(e)?II(e):SI(t,e)}/**
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
 */class wd{constructor(){this._=void 0}}function q4(t,e,n){return t instanceof ka?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Cm(s)&&(s=Rm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Pa?CI(t,e):t instanceof xa?RI(t,e):function(i,s){const o=TI(i,s),a=M_(o)+M_(i.Ie);return dp(o)&&dp(i.Ie)?II(a):SI(i.serializer,a)}(t,e)}function G4(t,e,n){return t instanceof Pa?CI(t,e):t instanceof xa?RI(t,e):n}function TI(t,e){return t instanceof wc?function(r){return dp(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ka extends wd{}class Pa extends wd{constructor(e){super(),this.elements=e}}function CI(t,e){const n=AI(e);for(const r of t.elements)n.some(i=>xn(i,r))||n.push(r);return{arrayValue:{values:n}}}class xa extends wd{constructor(e){super(),this.elements=e}}function RI(t,e){let n=AI(e);for(const r of t.elements)n=n.filter(i=>!xn(i,r));return{arrayValue:{values:n}}}class wc extends wd{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function M_(t){return Ne(t.integerValue||t.doubleValue)}function AI(t){return Am(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class K4{constructor(e,n){this.field=e,this.transform=n}}function Q4(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Pa&&i instanceof Pa||r instanceof xa&&i instanceof xa?Ds(r.elements,i.elements,xn):r instanceof wc&&i instanceof wc?xn(r.Ie,i.Ie):r instanceof ka&&i instanceof ka}(t.transform,e.transform)}class Y4{constructor(e,n){this.version=e,this.transformResults=n}}class ln{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ln}static exists(e){return new ln(void 0,e)}static updateTime(e){return new ln(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Iu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ed{}function kI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new xm(t.key,ln.none()):new ol(t.key,t.data,ln.none());{const n=t.data,r=It.empty();let i=new Je(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ni(t.key,r,new bt(i.toArray()),ln.none())}}function X4(t,e,n){t instanceof ol?function(i,s,o){const a=i.value.clone(),l=F_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ni?function(i,s,o){if(!Iu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=F_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(PI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function zo(t,e,n,r){return t instanceof ol?function(s,o,a,l){if(!Iu(s.precondition,o))return a;const u=s.value.clone(),c=$_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ni?function(s,o,a,l){if(!Iu(s.precondition,o))return a;const u=$_(s.fieldTransforms,l,o),c=o.data;return c.setAll(PI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return Iu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function J4(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=TI(r.transform,i||null);s!=null&&(n===null&&(n=It.empty()),n.set(r.field,s))}return n||null}function V_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ds(r,i,(s,o)=>Q4(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ol extends Ed{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ni extends Ed{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function PI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function F_(t,e,n){const r=new Map;le(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,G4(o,a,n[i]))}return r}function $_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,q4(s,o,e))}return r}class xm extends Ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Z4 extends Ed{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&X4(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=zo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=zo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=EI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=kI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Y())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,(n,r)=>V_(n,r))&&Ds(this.baseMutations,e.baseMutations,(n,r)=>V_(n,r))}}class Nm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length);let i=function(){return U4}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Nm(e,n,r,i)}}/**
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
 */class tO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var xe,Z;function rO(t){switch(t){default:return H();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function xI(t){if(t===void 0)return Yn("GRPC error has no .code"),A.UNKNOWN;switch(t){case xe.OK:return A.OK;case xe.CANCELLED:return A.CANCELLED;case xe.UNKNOWN:return A.UNKNOWN;case xe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case xe.INTERNAL:return A.INTERNAL;case xe.UNAVAILABLE:return A.UNAVAILABLE;case xe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case xe.NOT_FOUND:return A.NOT_FOUND;case xe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case xe.ABORTED:return A.ABORTED;case xe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case xe.DATA_LOSS:return A.DATA_LOSS;default:return H()}}(Z=xe||(xe={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function iO(){return new TextEncoder}/**
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
 */const sO=new Es([4294967295,4294967295],0);function j_(t){const e=iO().encode(t),n=new o4;return n.update(e),new Uint8Array(n.digest())}function U_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Es([n,r],0),new Es([i,s],0)]}class bm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ro(`Invalid padding: ${n}`);if(r<0)throw new Ro(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ro(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ro(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Es.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Es.fromNumber(r)));return i.compare(sO)===1&&(i=new Es([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=j_(e),[r,i]=U_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new bm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=j_(e),[r,i]=U_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ro extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Sd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,al.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sd(G.min(),i,new Se(te),Xn(),Y())}}class al{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new al(r,n,Y(),Y(),Y())}}/**
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
 */class Tu{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class NI{constructor(e,n){this.targetId=e,this.fe=n}}class bI{constructor(e,n,r=ct.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class z_{constructor(){this.ge=0,this.pe=H_(),this.ye=ct.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Y(),n=Y(),r=Y();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:H()}}),new al(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=H_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,le(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class oO{constructor(e){this.Le=e,this.ke=new Map,this.qe=Xn(),this.Qe=B_(),this.Ke=new Se(te)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(fp(s))if(r===0){const o=new j(s.path);this.We(n,o,st.newNoDocument(o,G.min()))}else le(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Ni(r).toUint8Array()}catch(l){if(l instanceof lI)return Os("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new bm(o,i,s)}catch(l){return Os(l instanceof Ro?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&fp(a.target)){const l=new j(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,st.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=Y();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Sd(e,n,this.Ke,this.qe,r);return this.qe=Xn(),this.Qe=B_(),this.Ke=new Se(te),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new z_,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Je(te),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||L("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new z_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function B_(){return new Se(j.comparator)}function H_(){return new Se(j.comparator)}const aO={asc:"ASCENDING",desc:"DESCENDING"},lO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uO={and:"AND",or:"OR"};class cO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function gp(t,e){return t.useProto3Json||md(e)?e:{value:e}}function Ec(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function OI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dO(t,e){return Ec(t,e.toTimestamp())}function Pn(t){return le(!!t),G.fromTimestamp(function(n){const r=Hr(n);return new Fe(r.seconds,r.nanos)}(t))}function Om(t,e){return function(r){return new me(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function DI(t){const e=me.fromString(t);return le(FI(e)),e}function mp(t,e){return Om(t.databaseId,e.path)}function kh(t,e){const n=DI(e);if(n.get(1)!==t.databaseId.projectId)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(LI(n))}function vp(t,e){return Om(t.databaseId,e)}function hO(t){const e=DI(t);return e.length===4?me.emptyPath():LI(e)}function yp(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function LI(t){return le(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function W_(t,e,n){return{name:mp(t,e),fields:n.value.mapValue.fields}}function fO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(le(c===void 0||typeof c=="string"),ct.fromBase64String(c||"")):(le(c===void 0||c instanceof Uint8Array),ct.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?A.UNKNOWN:xI(u.code);return new F(c,u.message||"")}(o);n=new bI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kh(t,r.document.name),s=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):G.min(),a=new It({mapValue:{fields:r.document.fields}}),l=st.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Tu(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kh(t,r.document),s=r.readTime?Pn(r.readTime):G.min(),o=st.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kh(t,r.document),s=r.removedTargetIds||[];n=new Tu([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new nO(i,s),a=r.targetId;n=new NI(a,o)}}return n}function pO(t,e){let n;if(e instanceof ol)n={update:W_(t,e.key,e.value)};else if(e instanceof xm)n={delete:mp(t,e.key)};else if(e instanceof ni)n={update:W_(t,e.key,e.data),updateMask:IO(e.fieldMask)};else{if(!(e instanceof Z4))return H();n={verify:mp(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ka)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Pa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof xa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof wc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:dO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(t,e.precondition)),n}function gO(t,e){return t&&t.length>0?(le(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Pn(i.updateTime):Pn(s);return o.isEqual(G.min())&&(o=Pn(s)),new Y4(o,i.transformResults||[])}(n,e))):[]}function mO(t,e){return{documents:[vp(t,e.path)]}}function vO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=vp(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=vp(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return VI(Nn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Gi(d.field),direction:wO(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=gp(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function yO(t){let e=hO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const f=MI(d);return f instanceof Nn&&hI(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(f=>function(m){return new _c(Ki(m.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,md(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,p=d.values||[];return new yc(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const f=!d.before,p=d.values||[];return new yc(p,f)}(n.endAt)),L4(e,i,o,s,a,"F",l,u)}function _O(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function MI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ki(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ki(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ki(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ki(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Ki(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nn.create(n.compositeFilter.filters.map(r=>MI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function wO(t){return aO[t]}function EO(t){return lO[t]}function SO(t){return uO[t]}function Gi(t){return{fieldPath:t.canonicalString()}}function Ki(t){return Qe.fromServerFormat(t.fieldPath)}function VI(t){return t instanceof Me?function(n){if(n.op==="=="){if(N_(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NAN"}};if(x_(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(N_(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NOT_NAN"}};if(x_(n.value))return{unaryFilter:{field:Gi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gi(n.field),op:EO(n.op),value:n.value}}}(t):t instanceof Nn?function(n){const r=n.getFilters().map(i=>VI(i));return r.length===1?r[0]:{compositeFilter:{op:SO(n.op),filters:r}}}(t):H()}function IO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function FI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ir{constructor(e,n,r,i,s=G.min(),o=G.min(),a=ct.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class TO{constructor(e){this.ut=e}}function CO(t){const e=yO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?pp(e,e.limit,"L"):e}/**
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
 */class RO{constructor(){this.on=new AO}addToCollectionParentIndex(e,n){return this.on.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Br.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Br.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class AO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(me.comparator)).toArray()}}/**
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
 */class Vs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Vs(0)}static Nn(){return new Vs(-1)}}/**
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
 */class kO{constructor(){this.changes=new Js(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class PO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class xO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&zo(r.mutation,i,bt.empty(),Fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Y()){const i=hi();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Co();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=hi();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Y()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xn();const o=Uo(),a=function(){return Uo()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof ni)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),zo(c.mutation,u,c.mutation.getFieldMask(),Fe.now())):o.set(u.key,bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new PO(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Uo();let i=new Se((o,a)=>o-a),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||bt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||Y()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=EI();c.forEach(f=>{if(!s.has(f)){const p=kI(n.get(f),r.get(f));p!==null&&d.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return k.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return j.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):M4(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):k.resolve(hi());let a=-1,l=s;return o.next(u=>k.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Y())).next(c=>({batchId:a,changes:wI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=Co();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Co();return this.indexManager.getCollectionParents(e,s).next(a=>k.forEach(a,l=>{const u=function(d,f){return new vd(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,st.newInvalidDocument(c)))});let a=Co();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&zo(c.mutation,u,bt.empty(),Fe.now()),_d(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class NO{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return k.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Pn(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:CO(i.bundledQuery),readTime:Pn(i.readTime)}}(n)),k.resolve()}}/**
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
 */class bO{constructor(){this.overlays=new Se(j.comparator),this.lr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=hi();return k.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=hi(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=hi(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=hi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return k.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tO(n,r));let s=this.lr.get(n);s===void 0&&(s=Y(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class Dm{constructor(){this.hr=new Je(je.Pr),this.Ir=new Je(je.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new je(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new je(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new j(new me([])),r=new je(n,e),i=new je(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new j(new me([])),r=new je(n,e),i=new je(n,e+1);let s=Y();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new je(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return j.comparator(e.key,n.key)||te(e.gr,n.gr)}static Tr(e,n){return te(e.gr,n.gr)||j.comparator(e.key,n.key)}}/**
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
 */class OO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Je(je.Pr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,n){return k.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return k.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),i=new je(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),k.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(te);return n.forEach(i=>{const s=new je(i,0),o=new je(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),k.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new je(new j(s),0);let a=new Je(te);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),k.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return k.forEach(n.mutations,i=>{const s=new je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new je(n,0),i=this.yr.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DO{constructor(e){this.Cr=e,this.docs=function(){return new Se(j.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():st.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,a=new j(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||y4(v4(c),r)<=0||(i.has(c.key)||_d(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return k.resolve(s)}getAllFromCollectionGroup(e,n,r,i){H()}vr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LO(this)}getSize(e){return k.resolve(this.size)}}class LO extends kO{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class MO{constructor(e){this.persistence=e,this.Fr=new Js(n=>km(n),Pm),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Dm,this.targetCount=0,this.Nr=Vs.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),k.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Vs(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.kn(n),k.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),k.waitFor(s).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),k.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Or.containsKey(n))}}/**
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
 */class VO{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Tm(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new MO(this),this.indexManager=new RO,this.remoteDocumentCache=function(i){return new DO(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new TO(n),this.Kr=new NO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new OO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){L("MemoryPersistence","Starting transaction:",e);const i=new FO(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return k.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class FO extends w4{constructor(e){super(),this.currentSequenceNumber=e}}class Lm{constructor(e){this.persistence=e,this.Gr=new Dm,this.zr=null}static jr(e){return new Lm(e)}get Hr(){if(this.zr)return this.zr;throw H()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),k.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Hr,r=>{const i=j.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,G.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return k.or([()=>k.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class Mm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=Y(),i=Y();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Mm(e,n.fromCache,r,i)}}/**
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
 */class $O{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jO{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $O;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(po()<=J.DEBUG&&L("QueryEngine","SDK will not create cache indexes for query:",qi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),k.resolve()):(po()<=J.DEBUG&&L("QueryEngine","Query:",qi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(po()<=J.DEBUG&&L("QueryEngine","The SDK decides to create cache indexes for query:",qi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):k.resolve())}zi(e,n){if(L_(n))return k.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=pp(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Y(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,pp(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return L_(n)||i.isEqual(G.min())?k.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?k.resolve(null):(po()<=J.DEBUG&&L("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qi(n)),this.Xi(e,o,n,m4(i,-1)).next(a=>a))})}Yi(e,n){let r=new Je(yI(e));return n.forEach((i,s)=>{_d(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return po()<=J.DEBUG&&L("QueryEngine","Using full collection scan to execute query:",qi(n)),this.Gi.getDocumentsMatchingQuery(e,n,Br.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class UO{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Se(te),this.ns=new Js(s=>km(s),Pm),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xO(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function zO(t,e,n,r){return new UO(t,e,n,r)}async function $I(t,e){const n=K(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Y();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function BO(t,e){const n=K(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,f=d.keys();let p=k.resolve();return f.forEach(m=>{p=p.next(()=>c.getEntry(l,m)).next(_=>{const w=u.docVersions.get(m);le(w!==null),_.version.compareTo(w)<0&&(d.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Y();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jI(t){const e=K(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function HO(t,e){const n=K(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,d)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(ct.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(d,p),function(_,w,g){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=Xn(),u=Y();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(WO(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(G.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(d=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return k.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function WO(t,e,n){let r=Y(),i=Y();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(G.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):L("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function qO(t,e){const n=K(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GO(t,e){const n=K(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,k.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Ir(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function _p(t,e,n){const r=K(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!sl(o))throw o;L("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function q_(t,e,n){const r=K(t);let i=G.min(),s=Y();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=K(l),f=d.ns.get(c);return f!==void 0?k.resolve(d.ts.get(f)):d.qr.getTargetData(u,c)}(r,o,kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:G.min(),n?s:Y())).next(a=>(KO(r,F4(e),a),{documents:a,ls:s})))}function KO(t,e,n){let r=t.rs.get(e)||G.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class G_{constructor(){this.activeTargetIds=H4()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QO{constructor(){this.eo=new G_,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new G_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YO{ro(e){}shutdown(){}}/**
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
 */class K_{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){L("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){L("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zl=null;function Ph(){return zl===null?zl=function(){return 268435456+Math.round(2147483648*Math.random())}():zl++,"0x"+zl.toString(16)}/**
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
 */const XO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class JO{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const nt="WebChannelConnection";class ZO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Ph(),l=this.So(n,r);L("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(L("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Os("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=XO[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Ph();return new Promise((o,a)=>{const l=new s4;l.setWithCredentials(!0),l.listenOnce(r4.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ah.NO_ERROR:const c=l.getResponseJson();L(nt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ah.TIMEOUT:L(nt,`RPC '${e}' ${s} timed out`),a(new F(A.DEADLINE_EXCEEDED,"Request time out"));break;case Ah.HTTP_ERROR:const d=l.getStatus();if(L(nt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const m=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(g)>=0?g:A.UNKNOWN}(p.status);a(new F(m,p.message))}else a(new F(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(A.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{L(nt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);L(nt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Ph(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=t4(),a=n4(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");L(nt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let f=!1,p=!1;const m=new JO({co:w=>{p?L(nt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(f||(L(nt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),L(nt,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},lo:()=>d.close()}),_=(w,g,v)=>{w.listen(g,y=>{try{v(y)}catch(E){setTimeout(()=>{throw E},0)}})};return _(d,$l.EventType.OPEN,()=>{p||L(nt,`RPC '${e}' stream ${i} transport opened.`)}),_(d,$l.EventType.CLOSE,()=>{p||(p=!0,L(nt,`RPC '${e}' stream ${i} transport closed`),m.Ro())}),_(d,$l.EventType.ERROR,w=>{p||(p=!0,Os(nt,`RPC '${e}' stream ${i} transport errored:`,w),m.Ro(new F(A.UNAVAILABLE,"The operation could not be completed")))}),_(d,$l.EventType.MESSAGE,w=>{var g;if(!p){const v=w.data[0];le(!!v);const y=v,E=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(E){L(nt,`RPC '${e}' stream ${i} received error:`,E);const I=E.status;let R=function(N){const M=xe[N];if(M!==void 0)return xI(M)}(I),C=E.message;R===void 0&&(R=A.INTERNAL,C="Unknown error status: "+I+" with message "+E.message),p=!0,m.Ro(new F(R,C)),d.close()}else L(nt,`RPC '${e}' stream ${i} received:`,v),m.Vo(v)}}),_(a,i4.STAT_EVENT,w=>{w.stat===C_.PROXY?L(nt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===C_.NOPROXY&&L(nt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function xh(){return typeof document<"u"?document:null}/**
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
 */function Id(t){return new cO(t,!0)}/**
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
 */class UI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&L("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class zI{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new UI(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new F(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return L("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(L("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eD extends zI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=fO(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?G.min():o.readTime?Pn(o.readTime):G.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=yp(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=fp(l)?{documents:mO(s,l)}:{query:vO(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=OI(s,o.resumeToken);const u=gp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(G.min())>0){a.readTime=Ec(s,o.snapshotVersion.toTimestamp());const u=gp(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=_O(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=yp(this.serializer),n.removeTarget=e,this.e_(n)}}class tD extends zI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=gO(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.I_(r,n)}return le(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=yp(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pO(this.serializer,r))};this.e_(n)}}/**
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
 */class nD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(A.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(A.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class rD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class iD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{zi(this)&&(L("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=K(l);u.C_.add(4),await ll(u),u.M_.set("Unknown"),u.C_.delete(4),await Td(u)}(this))})}),this.M_=new rD(r,i)}}async function Td(t){if(zi(t))for(const e of t.v_)await e(!0)}async function ll(t){for(const e of t.v_)await e(!1)}function BI(t,e){const n=K(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),$m(n)?Fm(n):Zs(n).Ho()&&Vm(n,e))}function HI(t,e){const n=K(t),r=Zs(n);n.D_.delete(e),r.Ho()&&WI(n,e),n.D_.size===0&&(r.Ho()?r.Zo():zi(n)&&n.M_.set("Unknown"))}function Vm(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(G.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zs(t).u_(e)}function WI(t,e){t.x_.Oe(e),Zs(t).c_(e)}function Fm(t){t.x_=new oO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Zs(t).start(),t.M_.g_()}function $m(t){return zi(t)&&!Zs(t).jo()&&t.D_.size>0}function zi(t){return K(t).C_.size===0}function qI(t){t.x_=void 0}async function sD(t){t.D_.forEach((e,n)=>{Vm(t,e)})}async function oD(t,e){qI(t),$m(t)?(t.M_.w_(e),Fm(t)):t.M_.set("Unknown")}async function aD(t,e,n){if(t.M_.set("Online"),e instanceof bI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){L("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Sc(t,r)}else if(e instanceof Tu?t.x_.$e(e):e instanceof NI?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(G.min()))try{const r=await jI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(ct.EMPTY_BYTE_STRING,c.snapshotVersion)),WI(s,l);const d=new Ir(c.target,l,u,c.sequenceNumber);Vm(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){L("RemoteStore","Failed to raise snapshot:",r),await Sc(t,r)}}async function Sc(t,e,n){if(!sl(e))throw e;t.C_.add(1),await ll(t),t.M_.set("Offline"),n||(n=()=>jI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{L("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await Td(t)})}function GI(t,e){return e().catch(n=>Sc(t,n,e))}async function Cd(t){const e=K(t),n=Wr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;lD(e);)try{const i=await qO(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,uD(e,i)}catch(i){await Sc(e,i)}KI(e)&&QI(e)}function lD(t){return zi(t)&&t.b_.length<10}function uD(t,e){t.b_.push(e);const n=Wr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function KI(t){return zi(t)&&!Wr(t).jo()&&t.b_.length>0}function QI(t){Wr(t).start()}async function cD(t){Wr(t).E_()}async function dD(t){const e=Wr(t);for(const n of t.b_)e.P_(n.mutations)}async function hD(t,e,n){const r=t.b_.shift(),i=Nm.from(r,e,n);await GI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Cd(t)}async function fD(t,e){e&&Wr(t).h_&&await async function(r,i){if(function(o){return rO(o)&&o!==A.ABORTED}(i.code)){const s=r.b_.shift();Wr(r).Yo(),await GI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cd(r)}}(t,e),KI(t)&&QI(t)}async function Q_(t,e){const n=K(t);n.asyncQueue.verifyOperationInProgress(),L("RemoteStore","RemoteStore received new credentials");const r=zi(n);n.C_.add(3),await ll(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await Td(n)}async function pD(t,e){const n=K(t);e?(n.C_.delete(2),await Td(n)):e||(n.C_.add(2),await ll(n),n.M_.set("Unknown"))}function Zs(t){return t.O_||(t.O_=function(n,r,i){const s=K(n);return s.A_(),new eD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:sD.bind(null,t),Io:oD.bind(null,t),a_:aD.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),$m(t)?Fm(t):t.M_.set("Unknown")):(await t.O_.stop(),qI(t))})),t.O_}function Wr(t){return t.N_||(t.N_=function(n,r,i){const s=K(n);return s.A_(),new tD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:cD.bind(null,t),Io:fD.bind(null,t),T_:dD.bind(null,t),I_:hD.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Cd(t)):(await t.N_.stop(),t.b_.length>0&&(L("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class jm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new jm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Um(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),sl(t))return new F(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ss{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Co(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Ss(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ss)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ss;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Y_{constructor(){this.B_=new Se(j.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):H():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Fs{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Fs(e,n,Ss.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class gD{constructor(){this.k_=void 0,this.listeners=[]}}class mD{constructor(){this.queries=new Js(e=>vI(e),yd),this.onlineState="Unknown",this.q_=new Set}}async function vD(t,e){const n=K(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gD),i)try{s.k_=await n.onListen(r)}catch(o){const a=Um(o,`Initialization of query '${qi(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&zm(n)}async function yD(t,e){const n=K(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _D(t,e){const n=K(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&zm(n)}function wD(t,e,n){const r=K(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function zm(t){t.q_.forEach(e=>{e.next()})}class ED{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Fs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Fs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class YI{constructor(e){this.key=e}}class XI{constructor(e){this.key=e}}class SD{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Y(),this.mutatedKeys=Y(),this._a=yI(e),this.aa=new Ss(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Y_,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),p=_d(this.query,d)?d:null,m=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;f&&p?f.data.isEqual(p.data)?m!==_&&(r.track({type:3,doc:p}),w=!0):this.ha(f,p)||(r.track({type:2,doc:p}),w=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),w=!0):f&&!p&&(r.track({type:1,doc:f}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,d)=>function(p,m){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return _(p)-_(m)}(c.type,d.type)||this._a(c.doc,d.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new Fs(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Y_,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Y(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new XI(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new YI(r))}),n}da(e){this.ia=e.ls,this.oa=Y();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Fs.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class ID{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class TD{constructor(e){this.key=e,this.Ra=!1}}class CD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Js(a=>vI(a),yd),this.fa=new Map,this.ga=new Set,this.pa=new Se(j.comparator),this.ya=new Map,this.wa=new Dm,this.Sa={},this.ba=new Map,this.Da=Vs.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function RD(t,e){const n=MD(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await GO(n.localStore,kn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await AD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&BI(n.remoteStore,o)}return i}async function AD(t,e,n,r,i){t.va=(d,f,p)=>async function(_,w,g,v){let y=w.view.ca(g);y.Zi&&(y=await q_(_.localStore,w.query,!1).then(({documents:C})=>w.view.ca(C,y)));const E=v&&v.targetChanges.get(w.targetId),I=v&&v.targetMismatches.get(w.targetId)!=null,R=w.view.applyChanges(y,_.isPrimaryClient,E,I);return J_(_,w.targetId,R.Ta),R.snapshot}(t,d,f,p);const s=await q_(t.localStore,e,!0),o=new SD(e,s.ls),a=o.ca(s.documents),l=al.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);J_(t,n,u.Ta);const c=new ID(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function kD(t,e){const n=K(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!yd(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await _p(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),HI(n.remoteStore,r.targetId),wp(n,r.targetId)}).catch(il)):(wp(n,r.targetId),await _p(n.localStore,r.targetId,!0))}async function PD(t,e,n){const r=VD(t);try{const i=await function(o,a){const l=K(o),u=Fe.now(),c=a.reduce((p,m)=>p.add(m.key),Y());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let m=Xn(),_=Y();return l.ss.getEntries(p,c).next(w=>{m=w,m.forEach((g,v)=>{v.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,m)).next(w=>{d=w;const g=[];for(const v of a){const y=J4(v,d.get(v.key).overlayedDocument);y!=null&&g.push(new ni(v.key,y,uI(y.value.mapValue),ln.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(w=>{f=w;const g=w.applyToLocalDocumentSet(d,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,g)})}).then(()=>({batchId:f.batchId,changes:wI(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new Se(te)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ul(r,i.changes),await Cd(r.remoteStore)}catch(i){const s=Um(i,"Failed to persist write");n.reject(s)}}async function JI(t,e){const n=K(t);try{const r=await HO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?le(o.Ra):i.removedDocuments.size>0&&(le(o.Ra),o.Ra=!1))}),await ul(n,r,e)}catch(r){await il(r)}}function X_(t,e,n){const r=K(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=K(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const f of d.listeners)f.Q_(a)&&(u=!0)}),u&&zm(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xD(t,e,n){const r=K(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new Se(j.comparator);o=o.insert(s,st.newNoDocument(s,G.min()));const a=Y().add(s),l=new Sd(G.min(),new Map,new Se(te),o,a);await JI(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),Bm(r)}else await _p(r.localStore,e,!1).then(()=>wp(r,e,n)).catch(il)}async function ND(t,e){const n=K(t),r=e.batch.batchId;try{const i=await BO(n.localStore,e);eT(n,r,null),ZI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ul(n,i)}catch(i){await il(i)}}async function bD(t,e,n){const r=K(t);try{const i=await function(o,a){const l=K(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(le(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);eT(r,e,n),ZI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ul(r,i)}catch(i){await il(i)}}function ZI(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function eT(t,e,n){const r=K(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function wp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||tT(t,r)})}function tT(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(HI(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Bm(t))}function J_(t,e,n){for(const r of n)r instanceof YI?(t.wa.addReference(r.key,e),OD(t,r)):r instanceof XI?(L("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||tT(t,r.key)):H()}function OD(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(L("SyncEngine","New document in limbo: "+n),t.ga.add(r),Bm(t))}function Bm(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new j(me.fromString(e)),r=t.Da.next();t.ya.set(r,new TD(n)),t.pa=t.pa.insert(n,r),BI(t.remoteStore,new Ir(kn(mI(n.path)),r,"TargetPurposeLimboResolution",Tm._e))}}async function ul(t,e,n){const r=K(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Mm.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=K(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>k.forEach(u,f=>k.forEach(f.ki,p=>c.persistence.referenceDelegate.addReference(d,f.targetId,p)).next(()=>k.forEach(f.qi,p=>c.persistence.referenceDelegate.removeReference(d,f.targetId,p)))))}catch(d){if(!sl(d))throw d;L("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const p=c.ts.get(f),m=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(m);c.ts=c.ts.insert(f,_)}}}(r.localStore,s))}async function DD(t,e){const n=K(t);if(!n.currentUser.isEqual(e)){L("SyncEngine","User change. New user:",e.toKey());const r=await $I(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new F(A.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ul(n,r._s)}}function LD(t,e){const n=K(t),r=n.ya.get(e);if(r&&r.Ra)return Y().add(r.key);{let i=Y();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function MD(t){const e=K(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=LD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xD.bind(null,e),e.Va.a_=_D.bind(null,e.eventManager),e.Va.Fa=wD.bind(null,e.eventManager),e}function VD(t){const e=K(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ND.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bD.bind(null,e),e}class Z_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Id(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return zO(this.persistence,new jO,e.initialUser,this.serializer)}createPersistence(e){return new VO(Lm.jr,this.serializer)}createSharedClientState(e){return new QO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class FD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>X_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DD.bind(null,this.syncEngine),await pD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new mD}()}createDatastore(e){const n=Id(e.databaseInfo.databaseId),r=function(s){return new ZO(s)}(e.databaseInfo);return function(s,o,a,l){return new nD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new iD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>X_(this.syncEngine,n,0),function(){return K_.D()?new K_:new YO}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new CD(i,s,o,a,l,u);return c&&(d.Ca=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=K(n);L("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ll(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class $D{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class jD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=oI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{L("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(L("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Um(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nh(t,e){t.asyncQueue.verifyOperationInProgress(),L("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await $I(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function e0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await zD(t);L("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Q_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Q_(e.remoteStore,s)),t._onlineComponents=e}function UD(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function zD(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){L("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!UD(n))throw n;Os("Error using user provided cache. Falling back to memory cache: "+n),await Nh(t,new Z_)}}else L("FirestoreClient","Using default OfflineComponentProvider"),await Nh(t,new Z_);return t._offlineComponents}async function nT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(L("FirestoreClient","Using user provided OnlineComponentProvider"),await e0(t,t._uninitializedComponentsProvider._online)):(L("FirestoreClient","Using default OnlineComponentProvider"),await e0(t,new FD))),t._onlineComponents}function BD(t){return nT(t).then(e=>e.syncEngine)}async function HD(t){const e=await nT(t),n=e.eventManager;return n.onListen=RD.bind(null,e.syncEngine),n.onUnlisten=kD.bind(null,e.syncEngine),n}function WD(t,e,n={}){const r=new Fr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new $D({next:f=>{o.enqueueAndForget(()=>yD(s,d)),f.fromCache&&l.source==="server"?u.reject(new F(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new ED(a,c,{includeMetadataChanges:!0,J_:!0});return vD(s,d)}(await HD(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function rT(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const t0=new Map;/**
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
 */function iT(t,e,n){if(!n)throw new F(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function qD(t,e,n,r){if(e===!0&&r===!0)throw new F(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function n0(t){if(!j.isDocumentKey(t))throw new F(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function r0(t){if(j.isDocumentKey(t))throw new F(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Hm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function Oi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hm(t);throw new F(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class i0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new i0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new i0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new a4;switch(r.type){case"firstParty":return new d4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=t0.get(n);r&&(L("ComponentProvider","Removing Datastore"),t0.delete(n),r.terminate())}(this),Promise.resolve()}}function GD(t,e,n,r={}){var i;const s=(t=Oi(t,Rd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=rt.MOCK_USER;else{a=_E(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new F(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new rt(u)}t._authCredentials=new l4(new sI(a,l))}}/**
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
 */class Ad{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ad(this.firestore,e,this._query)}}class Kt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kt(this.firestore,e,this._key)}}class $r extends Ad{constructor(e,n,r){super(e,n,mI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kt(this.firestore,null,new j(e))}withConverter(e){return new $r(this.firestore,e,this._path)}}function bn(t,e,...n){if(t=Oe(t),iT("collection","path",e),t instanceof Rd){const r=me.fromString(e,...n);return r0(r),new $r(t,null,r)}{if(!(t instanceof Kt||t instanceof $r))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return r0(r),new $r(t.firestore,null,r)}}function $s(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=oI.newId()),iT("doc","path",e),t instanceof Rd){const r=me.fromString(e,...n);return n0(r),new Kt(t,null,new j(r))}{if(!(t instanceof Kt||t instanceof $r))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return n0(r),new Kt(t.firestore,t instanceof $r?t.converter:null,new j(r))}}/**
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
 */class KD{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new UI(this,"async_queue_retry"),this.iu=()=>{const n=xh();n&&L("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=xh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=xh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Fr;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!sl(e))throw e;L("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Yn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=jm.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&H()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class cl extends Rd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new KD}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aT(this),this._firestoreClient.terminate()}}function sT(t,e){const n=typeof t=="object"?t:Hg(),r=typeof t=="string"?t:e||"(default)",i=Yc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=mE("firestore");s&&GD(i,...s)}return i}function oT(t){return t._firestoreClient||aT(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function aT(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new I4(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,rT(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new jD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class js{constructor(e){this._byteString=e}static fromBase64String(e){try{return new js(ct.fromBase64String(e))}catch(n){throw new F(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new js(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class kd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pd{constructor(e){this._methodName=e}}/**
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
 */class Wm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */const QD=/^__.*__$/;class YD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ni(e,this.data,this.fieldMask,n,this.fieldTransforms):new ol(e,this.data,n,this.fieldTransforms)}}class lT{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ni(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class qm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new qm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return Ic(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(uT(this.Iu)&&QD.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class XD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Id(e)}pu(e,n,r,i=!1){return new qm({Iu:e,methodName:n,gu:r,path:Qe.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cT(t){const e=t._freezeSettings(),n=Id(t._databaseId);return new XD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function JD(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Km("Data must be an object, but it was:",o,r);const a=dT(r,o);let l,u;if(s.merge)l=new bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=Ep(e,d,n);if(!o.contains(f))throw new F(A.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);fT(c,f)||c.push(f)}l=new bt(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new YD(new It(a),l,u)}class xd extends Pd{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xd}}class Gm extends Pd{_toFieldTransform(e){return new K4(e.path,new ka)}isEqual(e){return e instanceof Gm}}function ZD(t,e,n,r){const i=t.pu(1,e,n);Km("Data must be an object, but it was:",i,r);const s=[],o=It.empty();Ui(r,(l,u)=>{const c=Qm(e,l,n);u=Oe(u);const d=i.Ru(c);if(u instanceof xd)s.push(c);else{const f=Nd(u,d);f!=null&&(s.push(c),o.set(c,f))}});const a=new bt(s);return new lT(o,a,i.fieldTransforms)}function eL(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Ep(e,r,n)],l=[i];if(s.length%2!=0)throw new F(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Ep(e,s[f])),l.push(s[f+1]);const u=[],c=It.empty();for(let f=a.length-1;f>=0;--f)if(!fT(u,a[f])){const p=a[f];let m=l[f];m=Oe(m);const _=o.Ru(p);if(m instanceof xd)u.push(p);else{const w=Nd(m,_);w!=null&&(u.push(p),c.set(p,w))}}const d=new bt(u);return new lT(c,d,o.fieldTransforms)}function Nd(t,e){if(hT(t=Oe(t)))return Km("Unsupported field value:",e,t),dT(t,e);if(t instanceof Pd)return function(r,i){if(!uT(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Nd(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Oe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return W4(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Fe.fromDate(r);return{timestampValue:Ec(i.serializer,s)}}if(r instanceof Fe){const s=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ec(i.serializer,s)}}if(r instanceof Wm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof js)return{bytesValue:OI(i.serializer,r._byteString)};if(r instanceof Kt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Om(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Hm(r)}`)}(t,e)}function dT(t,e){const n={};return aI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ui(t,(r,i)=>{const s=Nd(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function hT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Wm||t instanceof js||t instanceof Kt||t instanceof Pd)}function Km(t,e,n){if(!hT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Hm(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Ep(t,e,n){if((e=Oe(e))instanceof kd)return e._internalPath;if(typeof e=="string")return Qm(t,e);throw Ic("Field path arguments must be of type string or ",t,!1,void 0,n)}const tL=new RegExp("[~\\*/\\[\\]]");function Qm(t,e,n){if(e.search(tL)>=0)throw Ic(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new kd(...e.split("."))._internalPath}catch{throw Ic(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ic(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(A.INVALID_ARGUMENT,a+t+l)}function fT(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class pT{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new nL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class nL extends pT{data(){return super.data()}}function gT(t,e){return typeof e=="string"?Qm(t,e):e instanceof kd?e._internalPath:e._delegate._internalPath}/**
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
 */function rL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iL{convertValue(e,n="none"){switch(bi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ni(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ui(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Wm(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Rm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ca(e));default:return null}}convertTimestamp(e){const n=Hr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);le(FI(r));const i=new Ra(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||Yn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function sL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Bl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class oL extends pT{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Cu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Cu extends oL{data(e={}){return super.data(e)}}class aL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Bl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Cu(this._firestore,this._userDataWriter,r.key,r,new Bl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Bl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Cu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Bl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:lL(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function lL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}class uL extends iL{constructor(e){super(),this.firestore=e}convertBytes(e){return new js(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kt(this.firestore,null,n)}}function dl(t){t=Oi(t,Ad);const e=Oi(t.firestore,cl),n=oT(e),r=new uL(e);return rL(t._query),WD(n,t._query).then(i=>new aL(e,r,t,i))}function cL(t,e,n,...r){t=Oi(t,Kt);const i=Oi(t.firestore,cl),s=cT(i);let o;return o=typeof(e=Oe(e))=="string"||e instanceof kd?eL(s,"updateDoc",t._key,e,n,r):ZD(s,"updateDoc",t._key,e),Ym(i,[o.toMutation(t._key,ln.exists(!0))])}function bd(t){return Ym(Oi(t.firestore,cl),[new xm(t._key,ln.none())])}function hl(t,e){const n=Oi(t.firestore,cl),r=$s(t),i=sL(t.converter,e);return Ym(n,[JD(cT(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,ln.exists(!1))]).then(()=>r)}function Ym(t,e){return function(r,i){const s=new Fr;return r.asyncQueue.enqueueAndForget(async()=>PD(await BD(r),i,s)),s.promise}(oT(t),e)}function dL(){return new Gm("serverTimestamp")}(function(e,n=!0){(function(i){Xs=i})($i),Ai(new zr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new cl(new u4(r.getProvider("auth-internal")),new f4(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new F(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ra(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Cn(R_,"4.4.0",e),Cn(R_,"4.4.0","esm2017")})();/**
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
 */const mT="firebasestorage.googleapis.com",vT="storageBucket",hL=2*60*1e3,fL=10*60*1e3;/**
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
 */class Ae extends On{constructor(e,n,r=0){super(bh(e),`Firebase Storage: ${n} (${bh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return bh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function bh(t){return"storage/"+t}function Xm(){const t="An unknown error occurred, please check the error payload for server response.";return new Ae(Re.UNKNOWN,t)}function pL(t){return new Ae(Re.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function gL(t){return new Ae(Re.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ae(Re.UNAUTHENTICATED,t)}function vL(){return new Ae(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yL(t){return new Ae(Re.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function _L(){return new Ae(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wL(){return new Ae(Re.CANCELED,"User canceled the upload/download.")}function EL(t){return new Ae(Re.INVALID_URL,"Invalid URL '"+t+"'.")}function SL(t){return new Ae(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function IL(){return new Ae(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+vT+"' property when initializing the app?")}function TL(){return new Ae(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CL(){return new Ae(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function RL(t){return new Ae(Re.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Sp(t){return new Ae(Re.INVALID_ARGUMENT,t)}function yT(){return new Ae(Re.APP_DELETED,"The Firebase app was deleted.")}function AL(t){return new Ae(Re.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Bo(t,e){return new Ae(Re.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function go(t){throw new Ae(Re.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ot.makeFromUrl(e,n)}catch{return new Ot(e,"")}if(r.path==="")return r;throw SL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},_=n===mT?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:m,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<y.length;E++){const I=y[E],R=I.regex.exec(e);if(R){const C=R[I.indices.bucket];let T=R[I.indices.path];T||(T=""),r=new Ot(C,T),I.postModify(r);break}}if(r==null)throw EL(e);return r}}class kL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function PL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function f(){s&&clearTimeout(s)}function p(w,...g){if(u){f();return}if(w){f(),c.call(null,w,...g);return}if(l()||o){f(),c.call(null,w,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let m=!1;function _(w){m||(m=!0,f(),!u&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function xL(t){t(!1)}/**
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
 */function NL(t){return t!==void 0}function bL(t){return typeof t=="object"&&!Array.isArray(t)}function Jm(t){return typeof t=="string"||t instanceof String}function s0(t){return Zm()&&t instanceof Blob}function Zm(){return typeof Blob<"u"}function o0(t,e,n,r){if(r<e)throw Sp(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Sp(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function ev(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function _T(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var _i;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_i||(_i={}));/**
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
 */function OL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class DL{constructor(e,n,r,i,s,o,a,l,u,c,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,m)=>{this.resolve_=p,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Hl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===_i.NO_ERROR,l=s.getStatus();if(!a||OL(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===_i.ABORT;r(!1,new Hl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Hl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());NL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Xm();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?yT():wL();o(l)}else{const l=_L();o(l)}};this.canceled_?n(!1,new Hl(!1,null,!0)):this.backoffId_=PL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&xL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Hl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function LL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ML(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function FL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $L(t,e,n,r,i,s,o=!0){const a=_T(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return VL(u,e),LL(u,n),ML(u,s),FL(u,r),new DL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function jL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function UL(...t){const e=jL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Zm())return new Blob(t);throw new Ae(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function zL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function BL(t){if(typeof atob>"u")throw RL("base-64");return atob(t)}/**
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
 */const En={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Oh{constructor(e,n){this.data=e,this.contentType=n||null}}function HL(t,e){switch(t){case En.RAW:return new Oh(wT(e));case En.BASE64:case En.BASE64URL:return new Oh(ET(t,e));case En.DATA_URL:return new Oh(qL(e),GL(e))}throw Xm()}function wT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function WL(t){let e;try{e=decodeURIComponent(t)}catch{throw Bo(En.DATA_URL,"Malformed data URL.")}return wT(e)}function ET(t,e){switch(t){case En.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Bo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case En.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Bo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=BL(e)}catch(i){throw i.message.includes("polyfill")?i:Bo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ST{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Bo(En.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=KL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function qL(t){const e=new ST(t);return e.base64?ET(En.BASE64,e.rest):WL(e.rest)}function GL(t){return new ST(t).contentType}function KL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class _r{constructor(e,n){let r=0,i="";s0(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(s0(this.data_)){const r=this.data_,i=zL(r,e,n);return i===null?null:new _r(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new _r(r,!0)}}static getBlob(...e){if(Zm()){const n=e.map(r=>r instanceof _r?r.data_:r);return new _r(UL.apply(null,n))}else{const n=e.map(o=>Jm(o)?HL(En.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new _r(i,!0)}}uploadData(){return this.data_}}/**
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
 */function IT(t){let e;try{e=JSON.parse(t)}catch{return null}return bL(e)?e:null}/**
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
 */function QL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function YL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function TT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function XL(t,e){return e}class ht{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||XL}}let Wl=null;function JL(t){return!Jm(t)||t.length<2?t:TT(t)}function CT(){if(Wl)return Wl;const t=[];t.push(new ht("bucket")),t.push(new ht("generation")),t.push(new ht("metageneration")),t.push(new ht("name","fullPath",!0));function e(s,o){return JL(o)}const n=new ht("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ht("size");return i.xform=r,t.push(i),t.push(new ht("timeCreated")),t.push(new ht("updated")),t.push(new ht("md5Hash",null,!0)),t.push(new ht("cacheControl",null,!0)),t.push(new ht("contentDisposition",null,!0)),t.push(new ht("contentEncoding",null,!0)),t.push(new ht("contentLanguage",null,!0)),t.push(new ht("contentType",null,!0)),t.push(new ht("metadata","customMetadata",!0)),Wl=t,Wl}function ZL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ot(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function eM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return ZL(r,t),r}function RT(t,e,n){const r=IT(e);return r===null?null:eM(t,r,n)}function tM(t,e,n,r){const i=IT(e);if(i===null||!Jm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,f="/b/"+o(c)+"/o/"+o(d),p=ev(f,n,r),m=_T({alt:"media",token:u});return p+m})[0]}function nM(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class AT{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function kT(t){if(!t)throw Xm()}function rM(t,e){function n(r,i){const s=RT(t,i,e);return kT(s!==null),s}return n}function iM(t,e){function n(r,i){const s=RT(t,i,e);return kT(s!==null),tM(s,i,t.host,t._protocol)}return n}function PT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=vL():i=mL():n.getStatus()===402?i=gL(t.bucket):n.getStatus()===403?i=yL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function sM(t){const e=PT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=pL(t.path)),s.serverResponse=i.serverResponse,s}return n}function oM(t,e,n){const r=e.fullServerUrl(),i=ev(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new AT(i,s,iM(t,n),o);return a.errorHandler=sM(e),a}function aM(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function lM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=aM(null,e)),r}function uM(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let E=0;E<2;E++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=lM(e,r,i),c=nM(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=_r.getBlob(d,r,f);if(p===null)throw TL();const m={name:u.fullPath},_=ev(s,t.host,t._protocol),w="POST",g=t.maxUploadRetryTime,v=new AT(_,w,rM(t,n),g);return v.urlParams=m,v.headers=o,v.body=p.uploadData(),v.errorHandler=PT(e),v}class cM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_i.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_i.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_i.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw go("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw go("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw go("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw go("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw go("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class dM extends cM{initXhr(){this.xhr_.responseType="text"}}function xT(){return new dM}/**
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
 */class Di{constructor(e,n){this._service=e,n instanceof Ot?this._location=n:this._location=Ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Di(e,n)}get root(){const e=new Ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return TT(this._location.path)}get storage(){return this._service}get parent(){const e=QL(this._location.path);if(e===null)return null;const n=new Ot(this._location.bucket,e);return new Di(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw AL(e)}}function hM(t,e,n){t._throwIfRoot("uploadBytes");const r=uM(t.storage,t._location,CT(),new _r(e,!0),n);return t.storage.makeRequestWithTokens(r,xT).then(i=>({metadata:i,ref:t}))}function fM(t){t._throwIfRoot("getDownloadURL");const e=oM(t.storage,t._location,CT());return t.storage.makeRequestWithTokens(e,xT).then(n=>{if(n===null)throw CL();return n})}function pM(t,e){const n=YL(t._location.path,e),r=new Ot(t._location.bucket,n);return new Di(t.storage,r)}/**
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
 */function gM(t){return/^[A-Za-z]+:\/\//.test(t)}function mM(t,e){return new Di(t,e)}function NT(t,e){if(t instanceof tv){const n=t;if(n._bucket==null)throw IL();const r=new Di(n,n._bucket);return e!=null?NT(r,e):r}else return e!==void 0?pM(t,e):t}function vM(t,e){if(e&&gM(e)){if(t instanceof tv)return mM(t,e);throw Sp("To use ref(service, url), the first argument must be a Storage instance.")}else return NT(t,e)}function a0(t,e){const n=e==null?void 0:e[vT];return n==null?null:Ot.makeFromBucketSpec(n,t)}function yM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_E(i,t.app.options.projectId))}class tv{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=mT,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hL,this._maxUploadRetryTime=fL,this._requests=new Set,i!=null?this._bucket=Ot.makeFromBucketSpec(i,this._host):this._bucket=a0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ot.makeFromBucketSpec(this._url,e):this._bucket=a0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){o0("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){o0("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Di(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new kL(yT());{const o=$L(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const l0="@firebase/storage",u0="0.12.0";/**
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
 */const bT="storage";function nv(t,e,n){return t=Oe(t),hM(t,e,n)}function rv(t){return t=Oe(t),fM(t)}function iv(t,e){return t=Oe(t),vM(t,e)}function sv(t=Hg(),e){t=Oe(t);const r=Yc(t,bT).getImmediate({identifier:e}),i=mE("storage");return i&&_M(r,...i),r}function _M(t,e,n,r={}){yM(t,e,n,r)}function wM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new tv(n,r,i,e,$i)}function EM(){Ai(new zr(bT,wM,"PUBLIC").setMultipleInstances(!0)),Cn(l0,u0,""),Cn(l0,u0,"esm2017")}EM();const SM={apiKey:"AIzaSyAyirhYM-x6ltCHOzWidGVAy93PizO4tqk",authDomain:"news-portal-98068.firebaseapp.com",projectId:"news-portal-98068",storageBucket:"news-portal-98068.appspot.com",messagingSenderId:"910487241766",appId:"1:910487241766:web:3b9ca8d554d9a6cf80d2e7"},Bi=SE(SM),Qt=sT(Bi),IM=sv(Bi),TM=em(Bi),OT=S.createContext(),ri=()=>S.useContext(OT);function CM({children:t}){const[e,n]=S.useState([]),[r,i]=S.useState(!0);S.useEffect(()=>{(async()=>{try{const a=bn(Qt,"News"),l=await dl(a),u=[];l.forEach(c=>{u.push({id:c.id,...c.data()})}),n(u)}catch(a){console.error("Error fetching news data:",a)}finally{i(!1)}})()},[]);const s=o=>{n(o)};return h.jsx(OT.Provider,{value:{newsData:e,loading:r,updatedNews:s},children:t})}function fn(){return h.jsx("div",{className:"loader"})}function RM(){const{newsData:t,loading:e}=ri();if(e)return h.jsx(fn,{});const n=t.filter(r=>r.isBreaking);return h.jsx("div",{className:"breaking-container",children:n.length>0&&h.jsxs("div",{className:"breaking-section",children:[h.jsx("div",{className:"breakingLabel",children:h.jsx("h4",{children:"Breaking News"})}),h.jsx("div",{className:"marquee-container",children:h.jsx("div",{className:"marquee-content",children:n.map(r=>h.jsx("div",{className:"newsHeadings",children:h.jsx("h4",{children:r.heading})},r.id))})})]})})}function AM(){const[t,e]=S.useState(!1),n=()=>{e(!t)};return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"parent-nav",children:h.jsxs("div",{className:"navbar",children:[h.jsx("div",{className:"log",children:"Logo"}),h.jsx("div",{className:"nav-items",children:h.jsxs("ul",{className:t?"nav-items-open":"nav-items-closed",children:[h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal",children:"Home"})}),h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal/technology",children:"Technology"})}),h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal/entertainment",children:"Entertainment"})}),h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal/politics",children:"Politics"})}),h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal/education",children:"Education"})}),h.jsx("li",{children:h.jsx(Et,{to:"/News_Portal/sport",children:"Sport"})})]})}),h.jsxs("div",{className:"hamburger",onClick:n,children:[h.jsx("div",{className:t?"line line1-open":"line"}),h.jsx("div",{className:t?"line line2-open":"line"}),h.jsx("div",{className:t?"line line3-open":"line"})]})]})}),h.jsx(RM,{})]})}const kM=({close:t})=>h.jsxs("div",{className:"career",children:[h.jsxs("div",{className:"careerContainer",children:[h.jsx("h1",{children:"Join Our team"}),h.jsx("p",{children:"opps currently there is no any vacancy"})]}),h.jsx("button",{onClick:t,className:"closeBtn",children:"Ok"})]});function DT(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var i=t.length;for(e=0;e<i;e++)t[e]&&(n=DT(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function Tr(){for(var t,e,n=0,r="",i=arguments.length;n<i;n++)(t=arguments[n])&&(e=DT(t))&&(r&&(r+=" "),r+=e);return r}const Na=t=>typeof t=="number"&&!isNaN(t),wi=t=>typeof t=="string",Dt=t=>typeof t=="function",Ru=t=>wi(t)||Dt(t)?t:null,Ip=t=>S.isValidElement(t)||wi(t)||Dt(t)||Na(t);function PM(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Od(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:d,isIn:f,playToast:p}=o;const m=r?`${e}--${l}`:e,_=r?`${n}--${l}`:n,w=S.useRef(0);return S.useLayoutEffect(()=>{const g=d.current,v=m.split(" "),y=E=>{E.target===d.current&&(p(),g.removeEventListener("animationend",y),g.removeEventListener("animationcancel",y),w.current===0&&E.type!=="animationcancel"&&g.classList.remove(...v))};g.classList.add(...v),g.addEventListener("animationend",y),g.addEventListener("animationcancel",y)},[]),S.useEffect(()=>{const g=d.current,v=()=>{g.removeEventListener("animationend",v),i?PM(g,c,s):c()};f||(u?v():(w.current=1,g.className+=` ${_}`,g.addEventListener("animationend",v)))},[f]),ne.createElement(ne.Fragment,null,a)}}function c0(t,e){return t!=null?{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}:{}}const pt=new Map;let ba=[];const Tp=new Set,xM=t=>Tp.forEach(e=>e(t)),LT=()=>pt.size>0;function MT(t,e){var n;if(e)return!((n=pt.get(e))==null||!n.isToastActive(t));let r=!1;return pt.forEach(i=>{i.isToastActive(t)&&(r=!0)}),r}function VT(t,e){Ip(t)&&(LT()||ba.push({content:t,options:e}),pt.forEach(n=>{n.buildToast(t,e)}))}function d0(t,e){pt.forEach(n=>{e!=null&&e!=null&&e.containerId?(e==null?void 0:e.containerId)===n.id&&n.toggle(t,e==null?void 0:e.id):n.toggle(t,e==null?void 0:e.id)})}function NM(t){const{subscribe:e,getSnapshot:n,setProps:r}=S.useRef(function(s){const o=s.containerId||1;return{subscribe(a){const l=function(c,d,f){let p=1,m=0,_=[],w=[],g=[],v=d;const y=new Map,E=new Set,I=()=>{g=Array.from(y.values()),E.forEach(T=>T())},R=T=>{w=T==null?[]:w.filter(N=>N!==T),I()},C=T=>{const{toastId:N,onOpen:M,updateId:pe,children:_t}=T.props,zt=pe==null;T.staleId&&y.delete(T.staleId),y.set(N,T),w=[...w,T.props.toastId].filter(Zt=>Zt!==T.staleId),I(),f(c0(T,zt?"added":"updated")),zt&&Dt(M)&&M(S.isValidElement(_t)&&_t.props)};return{id:c,props:v,observe:T=>(E.add(T),()=>E.delete(T)),toggle:(T,N)=>{y.forEach(M=>{N!=null&&N!==M.props.toastId||Dt(M.toggle)&&M.toggle(T)})},removeToast:R,toasts:y,clearQueue:()=>{m-=_.length,_=[]},buildToast:(T,N)=>{if((ie=>{let{containerId:We,toastId:De,updateId:wt}=ie;const dt=We?We!==c:c!==1,pn=y.has(De)&&wt==null;return dt||pn})(N))return;const{toastId:M,updateId:pe,data:_t,staleId:zt,delay:Zt}=N,or=()=>{R(M)},ar=pe==null;ar&&m++;const Pt={...v,style:v.toastStyle,key:p++,...Object.fromEntries(Object.entries(N).filter(ie=>{let[We,De]=ie;return De!=null})),toastId:M,updateId:pe,data:_t,closeToast:or,isIn:!1,className:Ru(N.className||v.toastClassName),bodyClassName:Ru(N.bodyClassName||v.bodyClassName),progressClassName:Ru(N.progressClassName||v.progressClassName),autoClose:!N.isLoading&&(b=N.autoClose,z=v.autoClose,b===!1||Na(b)&&b>0?b:z),deleteToast(){const ie=y.get(M),{onClose:We,children:De}=ie.props;Dt(We)&&We(S.isValidElement(De)&&De.props),f(c0(ie,"removed")),y.delete(M),m--,m<0&&(m=0),_.length>0?C(_.shift()):I()}};var b,z;Pt.closeButton=v.closeButton,N.closeButton===!1||Ip(N.closeButton)?Pt.closeButton=N.closeButton:N.closeButton===!0&&(Pt.closeButton=!Ip(v.closeButton)||v.closeButton);let W=T;S.isValidElement(T)&&!wi(T.type)?W=S.cloneElement(T,{closeToast:or,toastProps:Pt,data:_t}):Dt(T)&&(W=T({closeToast:or,toastProps:Pt,data:_t}));const re={content:W,props:Pt,staleId:zt};v.limit&&v.limit>0&&m>v.limit&&ar?_.push(re):Na(Zt)?setTimeout(()=>{C(re)},Zt):C(re)},setProps(T){v=T},setToggle:(T,N)=>{y.get(T).toggle=N},isToastActive:T=>w.some(N=>N===T),getSnapshot:()=>v.newestOnTop?g.reverse():g}}(o,s,xM);pt.set(o,l);const u=l.observe(a);return ba.forEach(c=>VT(c.content,c.options)),ba=[],()=>{u(),pt.delete(o)}},setProps(a){var l;(l=pt.get(o))==null||l.setProps(a)},getSnapshot(){var a;return(a=pt.get(o))==null?void 0:a.getSnapshot()}}}(t)).current;r(t);const i=S.useSyncExternalStore(e,n,n);return{getToastToRender:function(s){if(!i)return[];const o=new Map;return i.forEach(a=>{const{position:l}=a.props;o.has(l)||o.set(l,[]),o.get(l).push(a)}),Array.from(o,a=>s(a[0],a[1]))},isToastActive:MT,count:i==null?void 0:i.length}}function bM(t){const[e,n]=S.useState(!1),[r,i]=S.useState(!1),s=S.useRef(null),o=S.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:a,pauseOnHover:l,closeToast:u,onClick:c,closeOnClick:d}=t;var f,p;function m(){n(!0)}function _(){n(!1)}function w(y){const E=s.current;o.canDrag&&E&&(o.didMove=!0,e&&_(),o.delta=t.draggableDirection==="x"?y.clientX-o.start:y.clientY-o.start,o.start!==y.clientX&&(o.canCloseOnClick=!1),E.style.transform=`translate3d(${t.draggableDirection==="x"?`${o.delta}px, var(--y)`:`0, calc(${o.delta}px + var(--y))`},0)`,E.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function g(){document.removeEventListener("pointermove",w),document.removeEventListener("pointerup",g);const y=s.current;if(o.canDrag&&o.didMove&&y){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),t.closeToast(),void t.collapseAll();y.style.transition="transform 0.2s, opacity 0.2s",y.style.removeProperty("transform"),y.style.removeProperty("opacity")}}(p=pt.get((f={id:t.toastId,containerId:t.containerId,fn:n}).containerId||1))==null||p.setToggle(f.id,f.fn),S.useEffect(()=>{if(t.pauseOnFocusLoss)return document.hasFocus()||_(),window.addEventListener("focus",m),window.addEventListener("blur",_),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",_)}},[t.pauseOnFocusLoss]);const v={onPointerDown:function(y){if(t.draggable===!0||t.draggable===y.pointerType){o.didMove=!1,document.addEventListener("pointermove",w),document.addEventListener("pointerup",g);const E=s.current;o.canCloseOnClick=!0,o.canDrag=!0,E.style.transition="none",t.draggableDirection==="x"?(o.start=y.clientX,o.removalDistance=E.offsetWidth*(t.draggablePercent/100)):(o.start=y.clientY,o.removalDistance=E.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent)/100)}},onPointerUp:function(y){const{top:E,bottom:I,left:R,right:C}=s.current.getBoundingClientRect();y.nativeEvent.type!=="touchend"&&t.pauseOnHover&&y.clientX>=R&&y.clientX<=C&&y.clientY>=E&&y.clientY<=I?_():m()}};return a&&l&&(v.onMouseEnter=_,t.stacked||(v.onMouseLeave=m)),d&&(v.onClick=y=>{c&&c(y),o.canCloseOnClick&&u()}),{playToast:m,pauseToast:_,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:v}}function OM(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:d,theme:f}=t;const p=s||l&&u===0,m={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused"};l&&(m.transform=`scaleX(${u})`);const _=Tr("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${f}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),w=Dt(o)?o({rtl:c,type:i,defaultClassName:_}):Tr(_,o),g={[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{d&&r()}};return ne.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":p},ne.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${i}`}),ne.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:w,style:m,...g}))}let DM=1;const FT=()=>""+DM++;function LM(t){return t&&(wi(t.toastId)||Na(t.toastId))?t.toastId:FT()}function Ho(t,e){return VT(t,e),e.toastId}function Tc(t,e){return{...e,type:e&&e.type||t,toastId:LM(e)}}function ql(t){return(e,n)=>Ho(e,Tc(t,n))}function $(t,e){return Ho(t,Tc("default",e))}$.loading=(t,e)=>Ho(t,Tc("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),$.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=wi(i)?$.loading(i,n):$.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(c,d,f)=>{if(d==null)return void $.dismiss(r);const p={type:c,...a,...n,data:f},m=wi(d)?{render:d}:d;return r?$.update(r,{...p,...m}):$(m.render,{...p,...m}),f},u=Dt(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},$.success=ql("success"),$.info=ql("info"),$.error=ql("error"),$.warning=ql("warning"),$.warn=$.warning,$.dark=(t,e)=>Ho(t,Tc("default",{theme:"dark",...e})),$.dismiss=function(t){(function(e){var n;if(LT()){if(e==null||wi(n=e)||Na(n))pt.forEach(r=>{r.removeToast(e)});else if(e&&("containerId"in e||"id"in e)){const r=pt.get(e.containerId);r?r.removeToast(e.id):pt.forEach(i=>{i.removeToast(e.id)})}}else ba=ba.filter(r=>e!=null&&r.options.toastId!==e)})(t)},$.clearWaitingQueue=function(t){t===void 0&&(t={}),pt.forEach(e=>{!e.props.limit||t.containerId&&e.id!==t.containerId||e.clearQueue()})},$.isActive=MT,$.update=function(t,e){e===void 0&&(e={});const n=((r,i)=>{var s;let{containerId:o}=i;return(s=pt.get(o||1))==null?void 0:s.toasts.get(r)})(t,e);if(n){const{props:r,content:i}=n,s={delay:100,...r,...e,toastId:e.toastId||t,updateId:FT()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,Ho(o,s)}},$.done=t=>{$.update(t,{progress:1})},$.onChange=function(t){return Tp.add(t),()=>{Tp.delete(t)}},$.play=t=>d0(!0,t),$.pause=t=>d0(!1,t);const MM=typeof window<"u"?S.useLayoutEffect:S.useEffect,Gl=t=>{let{theme:e,type:n,isLoading:r,...i}=t;return ne.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...i})},Dh={info:function(t){return ne.createElement(Gl,{...t},ne.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return ne.createElement(Gl,{...t},ne.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return ne.createElement(Gl,{...t},ne.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return ne.createElement(Gl,{...t},ne.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return ne.createElement("div",{className:"Toastify__spinner"})}},VM=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i,playToast:s}=bM(t),{closeButton:o,children:a,autoClose:l,onClick:u,type:c,hideProgressBar:d,closeToast:f,transition:p,position:m,className:_,style:w,bodyClassName:g,bodyStyle:v,progressClassName:y,progressStyle:E,updateId:I,role:R,progress:C,rtl:T,toastId:N,deleteToast:M,isIn:pe,isLoading:_t,closeOnClick:zt,theme:Zt}=t,or=Tr("Toastify__toast",`Toastify__toast-theme--${Zt}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":T},{"Toastify__toast--close-on-click":zt}),ar=Dt(_)?_({rtl:T,position:m,type:c,defaultClassName:or}):Tr(or,_),Pt=function(re){let{theme:ie,type:We,isLoading:De,icon:wt}=re,dt=null;const pn={theme:ie,type:We};return wt===!1||(Dt(wt)?dt=wt({...pn,isLoading:De}):S.isValidElement(wt)?dt=S.cloneElement(wt,pn):De?dt=Dh.spinner():(PC=>PC in Dh)(We)&&(dt=Dh[We](pn))),dt}(t),b=!!C||!l,z={closeToast:f,type:c,theme:Zt};let W=null;return o===!1||(W=Dt(o)?o(z):S.isValidElement(o)?S.cloneElement(o,z):function(re){let{closeToast:ie,theme:We,ariaLabel:De="close"}=re;return ne.createElement("button",{className:`Toastify__close-button Toastify__close-button--${We}`,type:"button",onClick:wt=>{wt.stopPropagation(),ie(wt)},"aria-label":De},ne.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},ne.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}(z)),ne.createElement(p,{isIn:pe,done:M,position:m,preventExitTransition:n,nodeRef:r,playToast:s},ne.createElement("div",{id:N,onClick:u,"data-in":pe,className:ar,...i,style:w,ref:r},ne.createElement("div",{...pe&&{role:R},className:Dt(g)?g({type:c}):Tr("Toastify__toast-body",g),style:v},Pt!=null&&ne.createElement("div",{className:Tr("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!_t})},Pt),ne.createElement("div",null,a)),W,ne.createElement(OM,{...I&&!b?{key:`pb-${I}`}:{},rtl:T,theme:Zt,delay:l,isRunning:e,isIn:pe,closeToast:f,hide:d,type:c,style:E,className:y,controlledProgress:b,progress:C||0})))},Dd=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},FM=Od(Dd("bounce",!0));Od(Dd("slide",!0));Od(Dd("zoom"));Od(Dd("flip"));const $M={position:"top-right",transition:FM,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};function jM(t){let e={...$M,...t};const n=t.stacked,[r,i]=S.useState(!0),s=S.useRef(null),{getToastToRender:o,isToastActive:a,count:l}=NM(e),{className:u,style:c,rtl:d,containerId:f}=e;function p(_){const w=Tr("Toastify__toast-container",`Toastify__toast-container--${_}`,{"Toastify__toast-container--rtl":d});return Dt(u)?u({position:_,rtl:d,defaultClassName:w}):Tr(w,Ru(u))}function m(){n&&(i(!0),$.play())}return MM(()=>{if(n){var _;const w=s.current.querySelectorAll('[data-in="true"]'),g=12,v=(_=e.position)==null?void 0:_.includes("top");let y=0,E=0;Array.from(w).reverse().forEach((I,R)=>{const C=I;C.classList.add("Toastify__toast--stacked"),R>0&&(C.dataset.collapsed=`${r}`),C.dataset.pos||(C.dataset.pos=v?"top":"bot");const T=y*(r?.2:1)+(r?0:g*R);C.style.setProperty("--y",`${v?T:-1*T}px`),C.style.setProperty("--g",`${g}`),C.style.setProperty("--s",""+(1-(r?E:0))),y+=C.offsetHeight,E+=.025})}},[r,l,n]),ne.createElement("div",{ref:s,className:"Toastify",id:f,onMouseEnter:()=>{n&&(i(!1),$.pause())},onMouseLeave:m},o((_,w)=>{const g=w.length?{...c}:{...c,pointerEvents:"none"};return ne.createElement("div",{className:p(_),style:g,key:`container-${_}`},w.map(v=>{let{content:y,props:E}=v;return ne.createElement(VM,{...E,stacked:n,collapseAll:m,isIn:a(E.toastId,E.containerId),style:E.style,key:`toast-${E.key}`},y)}))}))}const $T=({close:t})=>{const[e,n]=S.useState(!1),[r,i]=S.useState({name:"",email:"",suggestion:""}),s=a=>{const{name:l,value:u}=a.target;i({...r,[l]:u})},o=async a=>{a.preventDefault();try{n(!0);const l=await hl(bn(Qt,"suggestionForm"),r);$.success("Suggestion sent"),i({name:"",email:"",suggestion:""}),t()}catch(l){$.error(`${l}`)}finally{n(!1)}};return h.jsxs("div",{className:"suggestion-container",children:[h.jsx("h2",{children:"Thank you for your suggestion!"}),h.jsx("p",{children:"We're always looking for ways to improve. Your feedback is valuable to us."}),h.jsx("p",{children:"Please feel free to share your thoughts and ideas."}),h.jsxs("form",{onSubmit:o,children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"name",children:"Name:"}),h.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:s,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"email",children:"Email:"}),h.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:s,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"suggestion",children:"Suggestion:"}),h.jsx("textarea",{id:"suggestion",name:"suggestion",value:r.suggestion,onChange:s,required:!0})]}),h.jsx("button",{type:"submit",disabled:e,children:"Submit"}),h.jsx("button",{onClick:t,className:"closeBtn",children:"Close"})]})]})},UM=({close:t})=>{const[e,n]=S.useState(!1),r={name:"",email:"",phone:"",message:""},[i,s]=S.useState(r),o=l=>{const{name:u,value:c}=l.target;s({...i,[u]:c})},a=async l=>{l.preventDefault();try{n(!0);const u=await hl(bn(Qt,"contactForm"),i);$.success("Contact details sent"),t(),s(r)}catch(u){$.error(`${u.message}`)}finally{n(!0)}};return h.jsxs("div",{className:"contact-container",children:[h.jsx("h2",{children:"Contact Us"}),h.jsxs("form",{onSubmit:a,children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"name",children:"Name:"}),h.jsx("input",{type:"text",id:"name",name:"name",value:i.name,onChange:o,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"email",children:"Email:"}),h.jsx("input",{type:"email",id:"email",name:"email",value:i.email,onChange:o,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"phone",children:"Phone"}),h.jsx("input",{type:"tel",id:"phone",name:"phone",value:i.phone,onChange:o})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"message",children:"Message:"}),h.jsx("textarea",{id:"message",name:"message",value:i.message,onChange:o,required:!0})]}),h.jsx("button",{type:"submit",disabled:e,children:"Submit"})]}),h.jsx("button",{onClick:t,className:"closeBtn",children:"Close"})]})};function zM(){const t=S.useRef(),e=S.useRef(),n=S.useRef(),r=()=>{t.current.showModal()},i=()=>{t.current.close()};return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"parentFooter",children:h.jsxs("div",{className:"footer",children:[h.jsxs("div",{className:"footerOne",children:[h.jsx("h3",{children:"NewsWave"}),h.jsx("span",{children:"Newswave: Surfing the currents of breaking news and trending stories, providing a dynamic and comprehensive wave of information daily."})]}),h.jsxs("div",{className:"footerTwo",children:[h.jsx("h3",{children:"Quick Links"}),h.jsxs("ul",{children:[h.jsx("li",{children:"Advertisement"}),h.jsx("li",{onClick:()=>{e.current.showModal()},children:"Suggestion"}),h.jsx("li",{children:h.jsx(Qc,{to:"/News_Portal/haveNews",children:"Have News"})}),h.jsx("li",{onClick:()=>{n.current.showModal()},children:"Contact"}),h.jsx("li",{onClick:r,children:"Career"})]})]}),h.jsxs("div",{className:"footerThree",children:[h.jsx("h3",{children:"Contact"}),h.jsx("span",{children:"NewsWave Media"}),h.jsx("span",{children:"Link-road Birgunj"}),h.jsx("span",{children:"Nepal"}),h.jsx("span",{children:"+9779806814329"})]})]})}),h.jsx("dialog",{ref:t,children:h.jsx(kM,{close:i})}),h.jsx("dialog",{ref:e,children:h.jsx($T,{close:()=>{e.current.close()}})}),h.jsx("dialog",{ref:n,children:h.jsx(UM,{close:()=>{n.current.close()}})})]})}function kt({children:t}){return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"nav",children:h.jsx(AM,{})}),h.jsx("div",{className:"content",children:t}),h.jsx(zM,{})]})}function eo({news:t,onClick:e}){return h.jsx("div",{className:"hero",style:{background:`url(${t.image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},onClick:e,children:h.jsxs("div",{className:"hero-content",children:[h.jsx("h4",{children:t.heading}),h.jsx("p",{children:t.content})]})})}function h0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?h0(Object(n),!0).forEach(function(r){$e(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Cc(t){"@babel/helpers - typeof";return Cc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Cc(t)}function BM(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function HM(t,e,n){return e&&f0(t.prototype,e),n&&f0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function $e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ov(t,e){return qM(t)||KM(t,e)||jT(t,e)||YM()}function fl(t){return WM(t)||GM(t)||jT(t)||QM()}function WM(t){if(Array.isArray(t))return Cp(t)}function qM(t){if(Array.isArray(t))return t}function GM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function KM(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function jT(t,e){if(t){if(typeof t=="string")return Cp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Cp(t,e)}}function Cp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function QM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var p0=function(){},av={},UT={},zT=null,BT={mark:p0,measure:p0};try{typeof window<"u"&&(av=window),typeof document<"u"&&(UT=document),typeof MutationObserver<"u"&&(zT=MutationObserver),typeof performance<"u"&&(BT=performance)}catch{}var XM=av.navigator||{},g0=XM.userAgent,m0=g0===void 0?"":g0,qr=av,fe=UT,v0=zT,Kl=BT;qr.document;var sr=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",HT=~m0.indexOf("MSIE")||~m0.indexOf("Trident/"),Ql,Yl,Xl,Jl,Zl,Jn="___FONT_AWESOME___",Rp=16,WT="fa",qT="svg-inline--fa",Li="data-fa-i2svg",Ap="data-fa-pseudo-element",JM="data-fa-pseudo-element-pending",lv="data-prefix",uv="data-icon",y0="fontawesome-i2svg",ZM="async",eV=["HTML","HEAD","STYLE","SCRIPT"],GT=function(){try{return!0}catch{return!1}}(),ce="classic",Te="sharp",cv=[ce,Te];function pl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ce]}})}var Oa=pl((Ql={},$e(Ql,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),$e(Ql,Te,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ql)),Da=pl((Yl={},$e(Yl,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),$e(Yl,Te,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Yl)),La=pl((Xl={},$e(Xl,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),$e(Xl,Te,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Xl)),tV=pl((Jl={},$e(Jl,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),$e(Jl,Te,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Jl)),nV=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,KT="fa-layers-text",rV=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,iV=pl((Zl={},$e(Zl,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),$e(Zl,Te,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Zl)),QT=[1,2,3,4,5,6,7,8,9,10],sV=QT.concat([11,12,13,14,15,16,17,18,19,20]),oV=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],fi={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ma=new Set;Object.keys(Da[ce]).map(Ma.add.bind(Ma));Object.keys(Da[Te]).map(Ma.add.bind(Ma));var aV=[].concat(cv,fl(Ma),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",fi.GROUP,fi.SWAP_OPACITY,fi.PRIMARY,fi.SECONDARY]).concat(QT.map(function(t){return"".concat(t,"x")})).concat(sV.map(function(t){return"w-".concat(t)})),Wo=qr.FontAwesomeConfig||{};function lV(t){var e=fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function uV(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(fe&&typeof fe.querySelector=="function"){var cV=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];cV.forEach(function(t){var e=ov(t,2),n=e[0],r=e[1],i=uV(lV(n));i!=null&&(Wo[r]=i)})}var YT={styleDefault:"solid",familyDefault:"classic",cssPrefix:WT,replacementClass:qT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Wo.familyPrefix&&(Wo.cssPrefix=Wo.familyPrefix);var Us=O(O({},YT),Wo);Us.autoReplaceSvg||(Us.observeMutations=!1);var V={};Object.keys(YT).forEach(function(t){Object.defineProperty(V,t,{enumerable:!0,set:function(n){Us[t]=n,qo.forEach(function(r){return r(V)})},get:function(){return Us[t]}})});Object.defineProperty(V,"familyPrefix",{enumerable:!0,set:function(e){Us.cssPrefix=e,qo.forEach(function(n){return n(V)})},get:function(){return Us.cssPrefix}});qr.FontAwesomeConfig=V;var qo=[];function dV(t){return qo.push(t),function(){qo.splice(qo.indexOf(t),1)}}var cr=Rp,Sn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function hV(t){if(!(!t||!sr)){var e=fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return fe.head.insertBefore(e,r),t}}var fV="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Va(){for(var t=12,e="";t-- >0;)e+=fV[Math.random()*62|0];return e}function to(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function dv(t){return t.classList?to(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function XT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function pV(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(XT(t[n]),'" ')},"").trim()}function Ld(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function hv(t){return t.size!==Sn.size||t.x!==Sn.x||t.y!==Sn.y||t.rotate!==Sn.rotate||t.flipX||t.flipY}function gV(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function mV(t){var e=t.transform,n=t.width,r=n===void 0?Rp:n,i=t.height,s=i===void 0?Rp:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&HT?l+="translate(".concat(e.x/cr-r/2,"em, ").concat(e.y/cr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/cr,"em), calc(-50% + ").concat(e.y/cr,"em)) "):l+="translate(".concat(e.x/cr,"em, ").concat(e.y/cr,"em) "),l+="scale(".concat(e.size/cr*(e.flipX?-1:1),", ").concat(e.size/cr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var vV=`:root, :host {
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
}`;function JT(){var t=WT,e=qT,n=V.cssPrefix,r=V.replacementClass,i=vV;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var _0=!1;function Lh(){V.autoAddCss&&!_0&&(hV(JT()),_0=!0)}var yV={mixout:function(){return{dom:{css:JT,insertCss:Lh}}},hooks:function(){return{beforeDOMElementCreation:function(){Lh()},beforeI2svg:function(){Lh()}}}},Zn=qr||{};Zn[Jn]||(Zn[Jn]={});Zn[Jn].styles||(Zn[Jn].styles={});Zn[Jn].hooks||(Zn[Jn].hooks={});Zn[Jn].shims||(Zn[Jn].shims=[]);var sn=Zn[Jn],ZT=[],_V=function t(){fe.removeEventListener("DOMContentLoaded",t),Rc=1,ZT.map(function(e){return e()})},Rc=!1;sr&&(Rc=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),Rc||fe.addEventListener("DOMContentLoaded",_V));function wV(t){sr&&(Rc?setTimeout(t,0):ZT.push(t))}function gl(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?XT(t):"<".concat(e," ").concat(pV(r),">").concat(s.map(gl).join(""),"</").concat(e,">")}function w0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var EV=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Mh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?EV(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function SV(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function kp(t){var e=SV(t);return e.length===1?e[0].toString(16):null}function IV(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function E0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Pp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=E0(e);typeof sn.hooks.addPack=="function"&&!i?sn.hooks.addPack(t,E0(e)):sn.styles[t]=O(O({},sn.styles[t]||{}),s),t==="fas"&&Pp("fa",e)}var eu,tu,nu,us=sn.styles,TV=sn.shims,CV=(eu={},$e(eu,ce,Object.values(La[ce])),$e(eu,Te,Object.values(La[Te])),eu),fv=null,eC={},tC={},nC={},rC={},iC={},RV=(tu={},$e(tu,ce,Object.keys(Oa[ce])),$e(tu,Te,Object.keys(Oa[Te])),tu);function AV(t){return~aV.indexOf(t)}function kV(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!AV(i)?i:null}var sC=function(){var e=function(s){return Mh(us,function(o,a,l){return o[l]=Mh(a,s,{}),o},{})};eC=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),tC=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),iC=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in us||V.autoFetchSvg,r=Mh(TV,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});nC=r.names,rC=r.unicodes,fv=Md(V.styleDefault,{family:V.familyDefault})};dV(function(t){fv=Md(t.styleDefault,{family:V.familyDefault})});sC();function pv(t,e){return(eC[t]||{})[e]}function PV(t,e){return(tC[t]||{})[e]}function pi(t,e){return(iC[t]||{})[e]}function oC(t){return nC[t]||{prefix:null,iconName:null}}function xV(t){var e=rC[t],n=pv("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Gr(){return fv}var gv=function(){return{prefix:null,iconName:null,rest:[]}};function Md(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ce:n,i=Oa[r][t],s=Da[r][t]||Da[r][i],o=t in sn.styles?t:null;return s||o||null}var S0=(nu={},$e(nu,ce,Object.keys(La[ce])),$e(nu,Te,Object.keys(La[Te])),nu);function Vd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},$e(e,ce,"".concat(V.cssPrefix,"-").concat(ce)),$e(e,Te,"".concat(V.cssPrefix,"-").concat(Te)),e),o=null,a=ce;(t.includes(s[ce])||t.some(function(u){return S0[ce].includes(u)}))&&(a=ce),(t.includes(s[Te])||t.some(function(u){return S0[Te].includes(u)}))&&(a=Te);var l=t.reduce(function(u,c){var d=kV(V.cssPrefix,c);if(us[c]?(c=CV[a].includes(c)?tV[a][c]:c,o=c,u.prefix=c):RV[a].indexOf(c)>-1?(o=c,u.prefix=Md(c,{family:a})):d?u.iconName=d:c!==V.replacementClass&&c!==s[ce]&&c!==s[Te]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?oC(u.iconName):{},p=pi(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||p||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!us.far&&us.fas&&!V.autoFetchSvg&&(u.prefix="fas")}return u},gv());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Te&&(us.fass||V.autoFetchSvg)&&(l.prefix="fass",l.iconName=pi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Gr()||"fas"),l}var NV=function(){function t(){BM(this,t),this.definitions={}}return HM(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=O(O({},n.definitions[a]||{}),o[a]),Pp(a,o[a]);var l=La[ce][a];l&&Pp(l,o[a]),sC()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),I0=[],cs={},Is={},bV=Object.keys(Is);function OV(t,e){var n=e.mixoutsTo;return I0=t,cs={},Object.keys(Is).forEach(function(r){bV.indexOf(r)===-1&&delete Is[r]}),I0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Cc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){cs[o]||(cs[o]=[]),cs[o].push(s[o])})}r.provides&&r.provides(Is)}),n}function xp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=cs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Mi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=cs[t]||[];i.forEach(function(s){s.apply(null,n)})}function er(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Is[t]?Is[t].apply(null,e):void 0}function Np(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Gr();if(e)return e=pi(n,e)||e,w0(aC.definitions,n,e)||w0(sn.styles,n,e)}var aC=new NV,DV=function(){V.autoReplaceSvg=!1,V.observeMutations=!1,Mi("noAuto")},LV={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return sr?(Mi("beforeI2svg",e),er("pseudoElements2svg",e),er("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,wV(function(){VV({autoReplaceSvgRoot:n}),Mi("watch",e)})}},MV={icon:function(e){if(e===null)return null;if(Cc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:pi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Md(e[0]);return{prefix:r,iconName:pi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(V.cssPrefix,"-"))>-1||e.match(nV))){var i=Vd(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Gr(),iconName:pi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Gr();return{prefix:s,iconName:pi(s,e)||e}}}},Ut={noAuto:DV,config:V,dom:LV,parse:MV,library:aC,findIconDefinition:Np,toHtml:gl},VV=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(sn.styles).length>0||V.autoFetchSvg)&&sr&&V.autoReplaceSvg&&Ut.dom.i2svg({node:r})};function Fd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return gl(r)})}}),Object.defineProperty(t,"node",{get:function(){if(sr){var r=fe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function FV(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(hv(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Ld(O(O({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function $V(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(V.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},i),{},{id:o}),children:r}]}]}function mv(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,p=f===void 0?!1:f,m=r.found?r:n,_=m.width,w=m.height,g=i==="fak",v=[V.replacementClass,s?"".concat(V.cssPrefix,"-").concat(s):""].filter(function(N){return d.classes.indexOf(N)===-1}).filter(function(N){return N!==""||!!N}).concat(d.classes).join(" "),y={children:[],attributes:O(O({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:v,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(w)})},E=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/w*16*.0625,"em")}:{};p&&(y.attributes[Li]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Va())},children:[l]}),delete y.attributes.title);var I=O(O({},y),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:O(O({},E),d.styles)}),R=r.found&&n.found?er("generateAbstractMask",I)||{children:[],attributes:{}}:er("generateAbstractIcon",I)||{children:[],attributes:{}},C=R.children,T=R.attributes;return I.children=C,I.attributes=T,a?$V(I):FV(I)}function T0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=O(O(O({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Li]="");var c=O({},o.styles);hv(i)&&(c.transform=mV({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Ld(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function jV(t){var e=t.content,n=t.title,r=t.extra,i=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Ld(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Vh=sn.styles;function bp(t){var e=t[0],n=t[1],r=t.slice(4),i=ov(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(V.cssPrefix,"-").concat(fi.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(fi.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(V.cssPrefix,"-").concat(fi.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var UV={found:!1,width:512,height:512};function zV(t,e){!GT&&!V.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Op(t,e){var n=e;return e==="fa"&&V.styleDefault!==null&&(e=Gr()),new Promise(function(r,i){if(er("missingIconAbstract"),n==="fa"){var s=oC(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Vh[e]&&Vh[e][t]){var o=Vh[e][t];return r(bp(o))}zV(t,e),r(O(O({},UV),{},{icon:V.showMissingIcons&&t?er("missingIconAbstract")||{}:{}}))})}var C0=function(){},Dp=V.measurePerformance&&Kl&&Kl.mark&&Kl.measure?Kl:{mark:C0,measure:C0},Ao='FA "6.5.1"',BV=function(e){return Dp.mark("".concat(Ao," ").concat(e," begins")),function(){return lC(e)}},lC=function(e){Dp.mark("".concat(Ao," ").concat(e," ends")),Dp.measure("".concat(Ao," ").concat(e),"".concat(Ao," ").concat(e," begins"),"".concat(Ao," ").concat(e," ends"))},vv={begin:BV,end:lC},Au=function(){};function R0(t){var e=t.getAttribute?t.getAttribute(Li):null;return typeof e=="string"}function HV(t){var e=t.getAttribute?t.getAttribute(lv):null,n=t.getAttribute?t.getAttribute(uv):null;return e&&n}function WV(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(V.replacementClass)}function qV(){if(V.autoReplaceSvg===!0)return ku.replace;var t=ku[V.autoReplaceSvg];return t||ku.replace}function GV(t){return fe.createElementNS("http://www.w3.org/2000/svg",t)}function KV(t){return fe.createElement(t)}function uC(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?GV:KV:n;if(typeof t=="string")return fe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(uC(o,{ceFn:r}))}),i}function QV(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ku={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(uC(i),n)}),n.getAttribute(Li)===null&&V.keepOriginalSource){var r=fe.createComment(QV(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~dv(n).indexOf(V.replacementClass))return ku.replace(e);var i=new RegExp("".concat(V.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===V.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return gl(a)}).join(`
`);n.setAttribute(Li,""),n.innerHTML=o}};function A0(t){t()}function cC(t,e){var n=typeof e=="function"?e:Au;if(t.length===0)n();else{var r=A0;V.mutateApproach===ZM&&(r=qr.requestAnimationFrame||A0),r(function(){var i=qV(),s=vv.begin("mutate");t.map(i),s(),n()})}}var yv=!1;function dC(){yv=!0}function Lp(){yv=!1}var Ac=null;function k0(t){if(v0&&V.observeMutations){var e=t.treeCallback,n=e===void 0?Au:e,r=t.nodeCallback,i=r===void 0?Au:r,s=t.pseudoElementsCallback,o=s===void 0?Au:s,a=t.observeMutationsRoot,l=a===void 0?fe:a;Ac=new v0(function(u){if(!yv){var c=Gr();to(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!R0(d.addedNodes[0])&&(V.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&V.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&R0(d.target)&&~oV.indexOf(d.attributeName))if(d.attributeName==="class"&&HV(d.target)){var f=Vd(dv(d.target)),p=f.prefix,m=f.iconName;d.target.setAttribute(lv,p||c),m&&d.target.setAttribute(uv,m)}else WV(d.target)&&i(d.target)})}}),sr&&Ac.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function YV(){Ac&&Ac.disconnect()}function XV(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function JV(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Vd(dv(t));return i.prefix||(i.prefix=Gr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=PV(i.prefix,t.innerText)||pv(i.prefix,kp(t.innerText))),!i.iconName&&V.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function ZV(t){var e=to(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return V.autoA11y&&(n?e["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(r||Va()):(e["aria-hidden"]="true",e.focusable="false")),e}function e6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Sn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function P0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=JV(t),r=n.iconName,i=n.prefix,s=n.rest,o=ZV(t),a=xp("parseNodeAttributes",{},t),l=e.styleParser?XV(t):[];return O({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Sn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var t6=sn.styles;function hC(t){var e=V.autoReplaceSvg==="nest"?P0(t,{styleParser:!1}):P0(t);return~e.extra.classes.indexOf(KT)?er("generateLayersText",t,e):er("generateSvgReplacementMutation",t,e)}var Kr=new Set;cv.map(function(t){Kr.add("fa-".concat(t))});Object.keys(Oa[ce]).map(Kr.add.bind(Kr));Object.keys(Oa[Te]).map(Kr.add.bind(Kr));Kr=fl(Kr);function x0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!sr)return Promise.resolve();var n=fe.documentElement.classList,r=function(d){return n.add("".concat(y0,"-").concat(d))},i=function(d){return n.remove("".concat(y0,"-").concat(d))},s=V.autoFetchSvg?Kr:cv.map(function(c){return"fa-".concat(c)}).concat(Object.keys(t6));s.includes("fa")||s.push("fa");var o=[".".concat(KT,":not([").concat(Li,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Li,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=to(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=vv.begin("onTree"),u=a.reduce(function(c,d){try{var f=hC(d);f&&c.push(f)}catch(p){GT||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){cC(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function n6(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hC(t).then(function(n){n&&cC([n],e)})}function r6(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Np(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Np(i||{})),t(r,O(O({},n),{},{mask:i}))}}var i6=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Sn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,p=n.titleId,m=p===void 0?null:p,_=n.classes,w=_===void 0?[]:_,g=n.attributes,v=g===void 0?{}:g,y=n.styles,E=y===void 0?{}:y;if(e){var I=e.prefix,R=e.iconName,C=e.icon;return Fd(O({type:"icon"},e),function(){return Mi("beforeDOMElementCreation",{iconDefinition:e,params:n}),V.autoA11y&&(f?v["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(m||Va()):(v["aria-hidden"]="true",v.focusable="false")),mv({icons:{main:bp(C),mask:l?bp(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:R,transform:O(O({},Sn),i),symbol:o,title:f,maskId:c,titleId:m,extra:{attributes:v,styles:E,classes:w}})})}},s6={mixout:function(){return{icon:r6(i6)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=x0,n.nodeCallback=n6,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,s=n.callback,o=s===void 0?function(){}:s;return x0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(p,m){Promise.all([Op(i,a),c.iconName?Op(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var w=ov(_,2),g=w[0],v=w[1];p([n,mv({icons:{main:g,mask:v},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(m)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Ld(a);l.length>0&&(i.style=l);var u;return hv(o)&&(u=er("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},o6={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Fd({type:"layer"},function(){Mi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(V.cssPrefix,"-layers")].concat(fl(s)).join(" ")},children:o}]})}}}},a6={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Fd({type:"counter",content:n},function(){return Mi("beforeDOMElementCreation",{content:n,params:r}),jV({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(V.cssPrefix,"-layers-counter")].concat(fl(a))}})})}}}},l6={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Sn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,p=f===void 0?{}:f;return Fd({type:"text",content:n},function(){return Mi("beforeDOMElementCreation",{content:n,params:r}),T0({content:n,transform:O(O({},Sn),s),title:a,extra:{attributes:d,styles:p,classes:["".concat(V.cssPrefix,"-layers-text")].concat(fl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(HT){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return V.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,T0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},u6=new RegExp('"',"ug"),N0=[1105920,1112319];function c6(t){var e=t.replace(u6,""),n=IV(e,0),r=n>=N0[0]&&n<=N0[1],i=e.length===2?e[0]===e[1]:!1;return{value:kp(i?e[0]:e),isSecondary:r||i}}function b0(t,e){var n="".concat(JM).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=to(t.children),o=s.filter(function(C){return C.getAttribute(Ap)===e})[0],a=qr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(rV),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Te:ce,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Da[f][l[2].toLowerCase()]:iV[f][u],m=c6(d),_=m.value,w=m.isSecondary,g=l[0].startsWith("FontAwesome"),v=pv(p,_),y=v;if(g){var E=xV(_);E.iconName&&E.prefix&&(v=E.iconName,p=E.prefix)}if(v&&!w&&(!o||o.getAttribute(lv)!==p||o.getAttribute(uv)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var I=e6(),R=I.extra;R.attributes[Ap]=e,Op(v,p).then(function(C){var T=mv(O(O({},I),{},{icons:{main:C,mask:gv()},prefix:p,iconName:y,extra:R,watchable:!0})),N=fe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(N,t.firstChild):t.appendChild(N),N.outerHTML=T.map(function(M){return gl(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function d6(t){return Promise.all([b0(t,"::before"),b0(t,"::after")])}function h6(t){return t.parentNode!==document.head&&!~eV.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ap)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function O0(t){if(sr)return new Promise(function(e,n){var r=to(t.querySelectorAll("*")).filter(h6).map(d6),i=vv.begin("searchPseudoElements");dC(),Promise.all(r).then(function(){i(),Lp(),e()}).catch(function(){i(),Lp(),n()})})}var f6={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=O0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;V.searchPseudoElements&&O0(i)}}},D0=!1,p6={mixout:function(){return{dom:{unwatch:function(){dC(),D0=!0}}}},hooks:function(){return{bootstrap:function(){k0(xp("mutationObserverCallbacks",{}))},noAuto:function(){YV()},watch:function(n){var r=n.observeMutationsRoot;D0?Lp():k0(xp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},L0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},g6={mixout:function(){return{parse:{transform:function(n){return L0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=L0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:d,path:f};return{tag:"g",attributes:O({},p.outer),children:[{tag:"g",attributes:O({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),p.path)}]}]}}}},Fh={x:0,y:0,width:"100%",height:"100%"};function M0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function m6(t){return t.tag==="g"?t.children:[t]}var v6={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Vd(i.split(" ").map(function(o){return o.trim()})):gv();return s.prefix||(s.prefix=Gr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,p=gV({transform:l,containerWidth:d,iconWidth:u}),m={tag:"rect",attributes:O(O({},Fh),{},{fill:"white"})},_=c.children?{children:c.children.map(M0)}:{},w={tag:"g",attributes:O({},p.inner),children:[M0(O({tag:c.tag,attributes:O(O({},c.attributes),p.path)},_))]},g={tag:"g",attributes:O({},p.outer),children:[w]},v="mask-".concat(a||Va()),y="clip-".concat(a||Va()),E={tag:"mask",attributes:O(O({},Fh),{},{id:v,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:m6(f)},E]};return r.push(I,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(v,")")},Fh)}),{children:r,attributes:i}}}},y6={provides:function(e){var n=!1;qr.matchMedia&&(n=qr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:O(O({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:O(O({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:O(O({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},_6={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},w6=[yV,s6,o6,a6,l6,f6,p6,g6,v6,y6,_6];OV(w6,{mixoutsTo:Ut});Ut.noAuto;Ut.config;Ut.library;Ut.dom;var Mp=Ut.parse;Ut.findIconDefinition;Ut.toHtml;var E6=Ut.icon;Ut.layer;Ut.text;Ut.counter;var fC={exports:{}},S6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",I6=S6,T6=I6;function pC(){}function gC(){}gC.resetWarningCache=pC;var C6=function(){function t(r,i,s,o,a,l){if(l!==T6){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:gC,resetWarningCache:pC};return n.PropTypes=n,n};fC.exports=C6();var R6=fC.exports;const Q=B0(R6);function V0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Cr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?V0(Object(n),!0).forEach(function(r){ds(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function kc(t){"@babel/helpers - typeof";return kc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kc(t)}function ds(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function A6(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function k6(t,e){if(t==null)return{};var n=A6(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Vp(t){return P6(t)||x6(t)||N6(t)||b6()}function P6(t){if(Array.isArray(t))return Fp(t)}function x6(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function N6(t,e){if(t){if(typeof t=="string")return Fp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fp(t,e)}}function Fp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O6(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,p=t.inverse,m=t.border,_=t.listItem,w=t.flip,g=t.size,v=t.rotation,y=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":m,"fa-li":_,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},ds(e,"fa-".concat(g),typeof g<"u"&&g!==null),ds(e,"fa-rotate-".concat(v),typeof v<"u"&&v!==null&&v!==0),ds(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),ds(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(I){return E[I]?I:null}).filter(function(I){return I})}function D6(t){return t=t-0,t===t}function mC(t){return D6(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var L6=["style"];function M6(t){return t.charAt(0).toUpperCase()+t.slice(1)}function V6(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=mC(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[M6(i)]=s:e[i]=s,e},{})}function vC(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return vC(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=V6(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[mC(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=k6(n,L6);return i.attrs.style=Cr(Cr({},i.attrs.style),o),t.apply(void 0,[e.tag,Cr(Cr({},i.attrs),a)].concat(Vp(r)))}var yC=!1;try{yC=!0}catch{}function F6(){if(!yC&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function F0(t){if(t&&kc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Mp.icon)return Mp.icon(t);if(t===null)return null;if(t&&kc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function $h(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ds({},t,e):{}}var ve=ne.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=F0(n),c=$h("classes",[].concat(Vp(O6(t)),Vp(s.split(" ")))),d=$h("transform",typeof t.transform=="string"?Mp.transform(t.transform):t.transform),f=$h("mask",F0(r)),p=E6(u,Cr(Cr(Cr(Cr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return F6("Could not find icon",u),null;var m=p.abstract,_={ref:e};return Object.keys(t).forEach(function(w){ve.defaultProps.hasOwnProperty(w)||(_[w]=t[w])}),$6(m[0],_)});ve.displayName="FontAwesomeIcon";ve.propTypes={beat:Q.bool,border:Q.bool,beatFade:Q.bool,bounce:Q.bool,className:Q.string,fade:Q.bool,flash:Q.bool,mask:Q.oneOfType([Q.object,Q.array,Q.string]),maskId:Q.string,fixedWidth:Q.bool,inverse:Q.bool,flip:Q.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Q.oneOfType([Q.object,Q.array,Q.string]),listItem:Q.bool,pull:Q.oneOf(["right","left"]),pulse:Q.bool,rotation:Q.oneOf([0,90,180,270]),shake:Q.bool,size:Q.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Q.bool,spinPulse:Q.bool,spinReverse:Q.bool,symbol:Q.oneOfType([Q.bool,Q.string]),title:Q.string,titleId:Q.string,transform:Q.oneOfType([Q.string,Q.object]),swapOpacity:Q.bool};ve.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var $6=vC.bind(null,ne.createElement),j6={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},U6={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},z6={prefix:"fab",iconName:"square-whatsapp",icon:[448,512,["whatsapp-square"],"f40c","M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"]},B6={prefix:"fas",iconName:"message",icon:[512,512,["comment-alt"],"f27a","M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"]},H6={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},W6={prefix:"fas",iconName:"envelopes-bulk",icon:[640,512,["mail-bulk"],"f674","M128 0C110.3 0 96 14.3 96 32V224h96V192c0-35.3 28.7-64 64-64H480V32c0-17.7-14.3-32-32-32H128zM256 160c-17.7 0-32 14.3-32 32v32h96c35.3 0 64 28.7 64 64V416H576c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H256zm240 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM64 256c-17.7 0-32 14.3-32 32v13L187.1 415.9c1.4 1 3.1 1.6 4.9 1.6s3.5-.6 4.9-1.6L352 301V288c0-17.7-14.3-32-32-32H64zm288 84.8L216 441.6c-6.9 5.1-15.3 7.9-24 7.9s-17-2.8-24-7.9L32 340.8V480c0 17.7 14.3 32 32 32H320c17.7 0 32-14.3 32-32V340.8z"]},q6={prefix:"fas",iconName:"address-book",icon:[512,512,[62138,"contact-book"],"f2b9","M96 0C60.7 0 32 28.7 32 64V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H96zM208 288h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zM512 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V80zM496 192c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm16 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16V336z"]},G6={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]},K6={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},Q6={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},Y6={prefix:"fas",iconName:"sitemap",icon:[576,512,[],"f0e8","M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"]},X6={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},J6={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]},Z6={prefix:"fas",iconName:"house-user",icon:[576,512,["home-user"],"e1b0","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"]},e3={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},t3={prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]},n3={prefix:"fas",iconName:"arrow-trend-up",icon:[576,512,[],"e098","M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"]},r3={prefix:"fas",iconName:"pen-nib",icon:[512,512,[10001],"f5ad","M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z"]},i3={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]};function no({article:t,onClose:e}){const n=()=>{window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,"_blank")},r=()=>{window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(t.heading)}`,"_blank")},i=()=>{window.open(`https://web.whatsapp.com://send?text=${t.heading}`,"_blank")};let s="";return t.time&&(s=new Date(t.time.seconds*1e3+t.time.nanoseconds/1e6).toLocaleString()),h.jsxs("div",{className:"article-overlay",children:[h.jsx("button",{className:"Back-btn",onClick:e,children:"Back"}),h.jsxs("div",{className:"article-modal",children:[h.jsx("div",{className:"newsHeading",children:h.jsx("h2",{children:t.heading})}),h.jsxs("div",{className:"newsRow",children:[h.jsxs("div",{className:"authorName",children:[h.jsx(ve,{icon:r3}),h.jsx("p",{children:t.authorName})]}),h.jsxs("div",{className:"postTime",children:[h.jsx(ve,{icon:e3}),h.jsx("p",{children:s})]})]}),h.jsx("div",{className:"image",children:h.jsx("img",{src:t.image,alt:"",srcset:"",width:""})}),h.jsx("p",{className:"description",children:t.description}),h.jsxs("div",{className:"share-buttons",children:[h.jsx("h2",{children:"Share to social media"}),h.jsxs("div",{className:"socialMediaIcons",children:[h.jsx(ve,{icon:U6,onClick:n}),h.jsx(ve,{icon:j6,onClick:r}),h.jsx(ve,{icon:z6,onClick:i})]})]})]}),h.jsx("meta",{property:"og:url",content:window.location.href}),h.jsx("meta",{property:"og:title",content:t.heading}),h.jsx("meta",{property:"og:description",content:t.description}),h.jsx("meta",{property:"og:image",content:t.image})]})}function s3(){const{newsData:t,loading:e}=ri(),[n,r]=S.useState(null);if(e)return h.jsx(kt,{children:h.jsx("div",{className:"HomePage-parent",children:h.jsx(fn,{})})});const i=s=>{r(t[s])};return h.jsx(kt,{children:h.jsx("div",{className:"HomePage-parent",children:n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:t.slice(0,4).map((s,o)=>h.jsx(eo,{news:s,onClick:()=>i(o)},o))})})})}function o3(){const{newsData:t,loading:e}=ri(),[n,r]=S.useState(null),i=t.filter(o=>o.category==="sport");if(e)return h.jsx(h.Fragment,{children:h.jsx(kt,{children:h.jsx(fn,{})})});const s=o=>{r(i[o])};return h.jsxs(kt,{children:[h.jsx("div",{className:"pageName",children:"Entertainment"}),n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:i.slice(0,4).map((o,a)=>h.jsx(eo,{news:o,onClick:()=>s(a)},a))})]})}function a3(){const{newsData:t,loading:e}=ri(),[n,r]=S.useState(null),i=t.filter(o=>o.category==="sport");if(e)return h.jsx(kt,{children:h.jsx(fn,{})});const s=o=>{r(i[o])};return h.jsxs(kt,{children:[h.jsx("div",{className:"pageName",children:"Sports"}),n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:i.map((o,a)=>h.jsx(eo,{news:o,onClick:()=>s(a)},a))})]})}const _C=S.createContext(),l3=({children:t})=>{const[e,n]=S.useState(null),r=async(s,o,a)=>{try{const l=await $2(TM,s,o);$.success("User logged in"),a("/News_Portal/dashboard"),u3(l)}catch(l){n(l.message),$.error(`${l.message}`)}},i=()=>{localStorage.clear()};return h.jsx(_C.Provider,{value:{login:r,logout:i,loginError:e},children:t})},u3=t=>{localStorage.setItem("user",JSON.stringify(t))},ml=()=>{const t=localStorage.getItem("user");if(t){const e=JSON.parse(t),{displayName:n,email:r,uid:i}=e.user;return{displayName:n,email:r,access:t,uid:i}}return{access:null}},c3=()=>S.useContext(_C);function d3(){const[t,e]=S.useState(!1);function n(){e(!t)}const r=Ba(),{email:i}=ml();function s(){localStorage.clear(),$.success("You are logged out"),r("/News_Portal")}return h.jsx(h.Fragment,{children:h.jsx("div",{className:"adminSidebar",children:h.jsxs("ul",{children:[h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/dashboard",children:[h.jsx(ve,{icon:Z6}),h.jsx("h4",{children:"Dashboard"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/adminNews",children:[h.jsx(ve,{icon:J6}),h.jsx("h4",{children:"News"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/addNews",children:[h.jsx(ve,{icon:X6}),h.jsx("h4",{children:"Add News"})]})}),i==="aadarshkumarman@gmail.com"&&h.jsxs("li",{onClick:n,children:[h.jsxs("div",{className:"administrator",children:[h.jsx(ve,{icon:Y6}),h.jsx("h4",{children:"Administrator"})]}),t&&h.jsxs("ul",{className:"nested",children:[h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/addUser",children:[h.jsx(ve,{icon:i3}),h.jsx("h4",{children:"Add User"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/adminHaveNews",children:[h.jsx(ve,{icon:W6}),h.jsx("h4",{children:"Post Request"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/adminContact",children:[h.jsx(ve,{icon:q6}),h.jsx("h4",{children:"Contact"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/adminSuggestion",children:[h.jsx(ve,{icon:B6}),h.jsx("h4",{children:"Sugestions"})]})}),h.jsx("li",{children:h.jsxs(Et,{to:"/News_Portal/traffic",children:[h.jsx(ve,{icon:n3}),h.jsx("h4",{children:"Traffic"})]})})]})]}),h.jsx("li",{onClick:s,children:h.jsxs("div",{className:"administrator",children:[h.jsx(ve,{icon:H6}),h.jsx("h4",{children:"Logout"})]})})]})})})}function Jt({children:t}){return h.jsx("div",{className:"adminLayout",children:h.jsxs("div",{className:"adminBody",children:[h.jsx("div",{className:"verticle",children:h.jsx(d3,{})}),h.jsx("div",{className:"Admin-childrenContet",children:h.jsx("div",{children:t})})]})})}function h3(){const t=sv(Bi),[e,n]=S.useState(!1),{displayName:r}=ml(),i=S.useRef(),s={heading:"",description:"",image:null,category:"",isBreaking:!1,authorName:r},[o,a]=S.useState(s),[l,u]=S.useState(null),c=p=>{const{name:m,value:_}=p.target;a(w=>({...w,[m]:_}))},d=p=>{const m=p.target.files[0];u(m)},f=async()=>{try{n(!0);const p=iv(t,`News/${l.name}`),m=await nv(p,l);console.log("Uploaded a file!");const _=await rv(m.ref);console.log("download url:",_);const w=dL(),g={...o,image:_,time:w},v=await hl(bn(Qt,"News"),g);$.success("News posted successfully! 🎉"),a(s),u(null),i.current.value=""}catch(p){$.error(`${p}😔`),console.error("Error adding document: ",p)}finally{n(!1)}};return h.jsx(Jt,{children:h.jsx(h.Fragment,{children:h.jsxs("div",{className:"addNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:o.heading,onChange:c,cols:"2",rows:"2",required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:o.description,onChange:c,cols:"15",rows:"15",required:!0})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:d,ref:i})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Category"}),h.jsxs("select",{name:"category",id:"category",value:o.category,onChange:c,required:!0,children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:o.isBreaking,onChange:c,children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Author Name"}),h.jsx("input",{type:"text",readOnly:!0,value:r})]})]}),h.jsx("button",{onClick:f,disabled:e,children:e?"Posting":"Post News"})]})})})}const f3=()=>{const{access:t}=ml();return t?h.jsx("div",{className:"adminDash",children:h.jsx(qk,{})}):h.jsx(Wk,{to:"/News_Portal/admin"})},p3=()=>{const t=em(Bi);Ba();const e={email:"",password:"",confirmPassword:"",displayName:""},[n,r]=S.useState(e),{email:i,password:s,confirmPassword:o,displayName:a}=n,l=async()=>{try{if(s!==o){$.error("Password not matched");return}const c=(await F2(t,i,s)).user;await U2(c,{displayName:a}),$.success("User Created successfully"),r(e)}catch(u){console.error("Error signing up:",u.message),$.error(`${u.message}`)}};return h.jsx(Jt,{children:h.jsx(h.Fragment,{children:h.jsx("div",{className:"parent-signup",children:h.jsxs("div",{className:"signup",children:[h.jsxs("div",{className:"userDetails",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Name"}),h.jsx("input",{type:"text",placeholder:"Enter Full Name",value:a,onChange:u=>r({...n,displayName:u.target.value})})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Email"}),h.jsx("input",{type:"email",placeholder:"Enter your Email",value:i,onChange:u=>r({...n,email:u.target.value}),required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Password"}),h.jsx("input",{type:"password",id:"password",placeholder:"Create password",value:s,onChange:u=>r({...n,password:u.target.value}),required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Confirm Password"}),h.jsx("input",{type:"password",placeholder:"Re-enter Password",value:o,onChange:u=>r({...n,confirmPassword:u.target.value}),required:!0})]})]}),h.jsx("button",{onClick:l,className:"signup-btn",children:"Create User"})]})})})})};function g3(){const t=Ba(),{login:e,loginError:n}=c3(),[r,i]=S.useState(""),[s,o]=S.useState(""),[a,l]=S.useState(!1),u=()=>{try{e(r,s,t)}catch{}};return h.jsx("div",{className:"login",children:h.jsxs("div",{className:"loginPage",children:[h.jsx("input",{type:"email",placeholder:"Enter Email",value:r,onChange:c=>i(c.target.value)}),h.jsx("input",{type:a?"text":"password",value:s,placeholder:"Password",onChange:c=>o(c.target.value)}),h.jsxs("div",{className:"kaka",children:[h.jsxs("label",{children:[h.jsx("input",{type:"checkbox",checked:a,onChange:()=>l(!a)}),h.jsx("span",{children:"show_password"})]}),h.jsx(Qc,{to:"/News_Portal/reset",children:"Forgot?"})]}),h.jsx("button",{onClick:u,children:"Login"})]})})}function m3(){const{displayName:t,email:e,uid:n}=ml();return h.jsx(Jt,{children:h.jsx(h.Fragment,{children:h.jsxs("div",{className:"parentDashboard",children:[h.jsx("h1",{children:t}),h.jsxs("p",{children:["Email: ",h.jsx("strong",{children:e})]}),h.jsxs("p",{children:["User Id: ",h.jsx("strong",{children:n})]})]})})})}const v3=sv(Bi);function y3(){const t={heading:"",description:"",image:null,category:"",isBreaking:!1,authorName:""},[e,n]=S.useState(t),[r,i]=S.useState(null),s=S.useRef(null),o=u=>{const{name:c,value:d}=u.target;n(f=>({...f,[c]:d}))},a=u=>{const c=u.target.files[0];i(c)},l=async()=>{try{const u=iv(v3,`Alert/${r.name}`),c=await nv(u,r);console.log("Uploaded a file!");const d=await rv(c.ref);console.log("download url:",d);const f={...e,image:d},p=await hl(bn(Qt,"Alert"),f);$.success("News Sent Successfully"),n(t),i(null),s.current.value=""}catch(u){console.error("Error adding document: ",u),$.error(`${u}`)}};return h.jsx(kt,{children:h.jsx(h.Fragment,{children:h.jsxs("div",{className:"haveNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Suitable Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:e.heading,onChange:o,cols:"4",rows:"4"})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:e.description,onChange:o,cols:"15",rows:"15"})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:a,ref:s})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Related Category"}),h.jsxs("select",{name:"category",id:"category",value:e.category,onChange:o,children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:e.isBreaking,onChange:o,children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Your Name"}),h.jsx("input",{type:"text",id:"authorName",name:"authorName",value:e.authorName,onChange:o})]})]}),h.jsx("button",{onClick:l,children:"Send News"})]})})})}function _3(){return h.jsx(kt,{children:h.jsx(h.Fragment,{children:h.jsx("h1",{children:"Page Not Found"})})})}function w3(){return h.jsx(Jt,{children:h.jsx("div",{children:h.jsx("h2",{children:"User Traffic under Construction"})})})}/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function Rr(t,e){return typeof t=="function"?t(e):t}function Ft(t,e){return n=>{e.setState(r=>({...r,[t]:Rr(n,r[t])}))}}function Pc(t){return t instanceof Function}function E3(t){return Array.isArray(t)&&t.every(e=>typeof e=="number")}function S3(t,e){const n=[],r=i=>{i.forEach(s=>{n.push(s);const o=e(s);o!=null&&o.length&&r(o)})};return r(t),n}function B(t,e,n){let r=[],i;return()=>{let s;n.key&&n.debug&&(s=Date.now());const o=t();if(!(o.length!==r.length||o.some((u,c)=>r[c]!==u)))return i;r=o;let l;if(n.key&&n.debug&&(l=Date.now()),i=e(...o),n==null||n.onChange==null||n.onChange(i),n.key&&n.debug&&n!=null&&n.debug()){const u=Math.round((Date.now()-s)*100)/100,c=Math.round((Date.now()-l)*100)/100,d=c/16,f=(p,m)=>{for(p=String(p);p.length<m;)p=" "+p;return p};console.info(`%c⏱ ${f(c,5)} /${f(u,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*d,120))}deg 100% 31%);`,n==null?void 0:n.key)}return i}}function I3(t,e,n,r){var i,s;const a={...t._getDefaultColumnDef(),...e},l=a.accessorKey;let u=(i=(s=a.id)!=null?s:l?l.replace(".","_"):void 0)!=null?i:typeof a.header=="string"?a.header:void 0,c;if(a.accessorFn?c=a.accessorFn:l&&(l.includes(".")?c=f=>{let p=f;for(const _ of l.split(".")){var m;p=(m=p)==null?void 0:m[_]}return p}:c=f=>f[a.accessorKey]),!u)throw new Error;let d={id:`${String(u)}`,accessorFn:c,parent:r,depth:n,columnDef:a,columns:[],getFlatColumns:B(()=>[!0],()=>{var f;return[d,...(f=d.columns)==null?void 0:f.flatMap(p=>p.getFlatColumns())]},{key:"column.getFlatColumns",debug:()=>{var f;return(f=t.options.debugAll)!=null?f:t.options.debugColumns}}),getLeafColumns:B(()=>[t._getOrderColumnsFn()],f=>{var p;if((p=d.columns)!=null&&p.length){let m=d.columns.flatMap(_=>_.getLeafColumns());return f(m)}return[d]},{key:"column.getLeafColumns",debug:()=>{var f;return(f=t.options.debugAll)!=null?f:t.options.debugColumns}})};for(const f of t._features)f.createColumn==null||f.createColumn(d,t);return d}function $0(t,e,n){var r;let s={id:(r=n.id)!=null?r:e.id,column:e,index:n.index,isPlaceholder:!!n.isPlaceholder,placeholderId:n.placeholderId,depth:n.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const o=[],a=l=>{l.subHeaders&&l.subHeaders.length&&l.subHeaders.map(a),o.push(l)};return a(s),o},getContext:()=>({table:t,header:s,column:e})};return t._features.forEach(o=>{o.createHeader==null||o.createHeader(s,t)}),s}const T3={createTable:t=>{t.getHeaderGroups=B(()=>[t.getAllColumns(),t.getVisibleLeafColumns(),t.getState().columnPinning.left,t.getState().columnPinning.right],(e,n,r,i)=>{var s,o;const a=(s=r==null?void 0:r.map(d=>n.find(f=>f.id===d)).filter(Boolean))!=null?s:[],l=(o=i==null?void 0:i.map(d=>n.find(f=>f.id===d)).filter(Boolean))!=null?o:[],u=n.filter(d=>!(r!=null&&r.includes(d.id))&&!(i!=null&&i.includes(d.id)));return ru(e,[...a,...u,...l],t)},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getCenterHeaderGroups=B(()=>[t.getAllColumns(),t.getVisibleLeafColumns(),t.getState().columnPinning.left,t.getState().columnPinning.right],(e,n,r,i)=>(n=n.filter(s=>!(r!=null&&r.includes(s.id))&&!(i!=null&&i.includes(s.id))),ru(e,n,t,"center")),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getLeftHeaderGroups=B(()=>[t.getAllColumns(),t.getVisibleLeafColumns(),t.getState().columnPinning.left],(e,n,r)=>{var i;const s=(i=r==null?void 0:r.map(o=>n.find(a=>a.id===o)).filter(Boolean))!=null?i:[];return ru(e,s,t,"left")},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getRightHeaderGroups=B(()=>[t.getAllColumns(),t.getVisibleLeafColumns(),t.getState().columnPinning.right],(e,n,r)=>{var i;const s=(i=r==null?void 0:r.map(o=>n.find(a=>a.id===o)).filter(Boolean))!=null?i:[];return ru(e,s,t,"right")},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getFooterGroups=B(()=>[t.getHeaderGroups()],e=>[...e].reverse(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getLeftFooterGroups=B(()=>[t.getLeftHeaderGroups()],e=>[...e].reverse(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getCenterFooterGroups=B(()=>[t.getCenterHeaderGroups()],e=>[...e].reverse(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getRightFooterGroups=B(()=>[t.getRightHeaderGroups()],e=>[...e].reverse(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getFlatHeaders=B(()=>[t.getHeaderGroups()],e=>e.map(n=>n.headers).flat(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getLeftFlatHeaders=B(()=>[t.getLeftHeaderGroups()],e=>e.map(n=>n.headers).flat(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getCenterFlatHeaders=B(()=>[t.getCenterHeaderGroups()],e=>e.map(n=>n.headers).flat(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getRightFlatHeaders=B(()=>[t.getRightHeaderGroups()],e=>e.map(n=>n.headers).flat(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getCenterLeafHeaders=B(()=>[t.getCenterFlatHeaders()],e=>e.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getLeftLeafHeaders=B(()=>[t.getLeftFlatHeaders()],e=>e.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getRightLeafHeaders=B(()=>[t.getRightFlatHeaders()],e=>e.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getLeafHeaders=B(()=>[t.getLeftHeaderGroups(),t.getCenterHeaderGroups(),t.getRightHeaderGroups()],(e,n,r)=>{var i,s,o,a,l,u;return[...(i=(s=e[0])==null?void 0:s.headers)!=null?i:[],...(o=(a=n[0])==null?void 0:a.headers)!=null?o:[],...(l=(u=r[0])==null?void 0:u.headers)!=null?l:[]].map(c=>c.getLeafHeaders()).flat()},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}})}};function ru(t,e,n,r){var i,s;let o=0;const a=function(f,p){p===void 0&&(p=1),o=Math.max(o,p),f.filter(m=>m.getIsVisible()).forEach(m=>{var _;(_=m.columns)!=null&&_.length&&a(m.columns,p+1)},0)};a(t);let l=[];const u=(f,p)=>{const m={depth:p,id:[r,`${p}`].filter(Boolean).join("_"),headers:[]},_=[];f.forEach(w=>{const g=[..._].reverse()[0],v=w.column.depth===m.depth;let y,E=!1;if(v&&w.column.parent?y=w.column.parent:(y=w.column,E=!0),g&&(g==null?void 0:g.column)===y)g.subHeaders.push(w);else{const I=$0(n,y,{id:[r,p,y.id,w==null?void 0:w.id].filter(Boolean).join("_"),isPlaceholder:E,placeholderId:E?`${_.filter(R=>R.column===y).length}`:void 0,depth:p,index:_.length});I.subHeaders.push(w),_.push(I)}m.headers.push(w),w.headerGroup=m}),l.push(m),p>0&&u(_,p-1)},c=e.map((f,p)=>$0(n,f,{depth:o,index:p}));u(c,o-1),l.reverse();const d=f=>f.filter(m=>m.column.getIsVisible()).map(m=>{let _=0,w=0,g=[0];m.subHeaders&&m.subHeaders.length?(g=[],d(m.subHeaders).forEach(y=>{let{colSpan:E,rowSpan:I}=y;_+=E,g.push(I)})):_=1;const v=Math.min(...g);return w=w+v,m.colSpan=_,m.rowSpan=w,{colSpan:_,rowSpan:w}});return d((i=(s=l[0])==null?void 0:s.headers)!=null?i:[]),l}const iu={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},jh=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),C3={getDefaultColumnDef:()=>iu,getInitialState:t=>({columnSizing:{},columnSizingInfo:jh(),...t}),getDefaultOptions:t=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:Ft("columnSizing",t),onColumnSizingInfoChange:Ft("columnSizingInfo",t)}),createColumn:(t,e)=>{t.getSize=()=>{var n,r,i;const s=e.getState().columnSizing[t.id];return Math.min(Math.max((n=t.columnDef.minSize)!=null?n:iu.minSize,(r=s??t.columnDef.size)!=null?r:iu.size),(i=t.columnDef.maxSize)!=null?i:iu.maxSize)},t.getStart=n=>{const r=n?n==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns(),i=r.findIndex(s=>s.id===t.id);if(i>0){const s=r[i-1];return s.getStart(n)+s.getSize()}return 0},t.resetSize=()=>{e.setColumnSizing(n=>{let{[t.id]:r,...i}=n;return i})},t.getCanResize=()=>{var n,r;return((n=t.columnDef.enableResizing)!=null?n:!0)&&((r=e.options.enableColumnResizing)!=null?r:!0)},t.getIsResizing=()=>e.getState().columnSizingInfo.isResizingColumn===t.id},createHeader:(t,e)=>{t.getSize=()=>{let n=0;const r=i=>{if(i.subHeaders.length)i.subHeaders.forEach(r);else{var s;n+=(s=i.column.getSize())!=null?s:0}};return r(t),n},t.getStart=()=>{if(t.index>0){const n=t.headerGroup.headers[t.index-1];return n.getStart()+n.getSize()}return 0},t.getResizeHandler=n=>{const r=e.getColumn(t.column.id),i=r==null?void 0:r.getCanResize();return s=>{if(!r||!i||(s.persist==null||s.persist(),Uh(s)&&s.touches&&s.touches.length>1))return;const o=t.getSize(),a=t?t.getLeafHeaders().map(g=>[g.column.id,g.column.getSize()]):[[r.id,r.getSize()]],l=Uh(s)?Math.round(s.touches[0].clientX):s.clientX,u={},c=(g,v)=>{typeof v=="number"&&(e.setColumnSizingInfo(y=>{var E,I;const R=e.options.columnResizeDirection==="rtl"?-1:1,C=(v-((E=y==null?void 0:y.startOffset)!=null?E:0))*R,T=Math.max(C/((I=y==null?void 0:y.startSize)!=null?I:0),-.999999);return y.columnSizingStart.forEach(N=>{let[M,pe]=N;u[M]=Math.round(Math.max(pe+pe*T,0)*100)/100}),{...y,deltaOffset:C,deltaPercentage:T}}),(e.options.columnResizeMode==="onChange"||g==="end")&&e.setColumnSizing(y=>({...y,...u})))},d=g=>c("move",g),f=g=>{c("end",g),e.setColumnSizingInfo(v=>({...v,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},p=n||typeof document<"u"?document:null,m={moveHandler:g=>d(g.clientX),upHandler:g=>{p==null||p.removeEventListener("mousemove",m.moveHandler),p==null||p.removeEventListener("mouseup",m.upHandler),f(g.clientX)}},_={moveHandler:g=>(g.cancelable&&(g.preventDefault(),g.stopPropagation()),d(g.touches[0].clientX),!1),upHandler:g=>{var v;p==null||p.removeEventListener("touchmove",_.moveHandler),p==null||p.removeEventListener("touchend",_.upHandler),g.cancelable&&(g.preventDefault(),g.stopPropagation()),f((v=g.touches[0])==null?void 0:v.clientX)}},w=R3()?{passive:!1}:!1;Uh(s)?(p==null||p.addEventListener("touchmove",_.moveHandler,w),p==null||p.addEventListener("touchend",_.upHandler,w)):(p==null||p.addEventListener("mousemove",m.moveHandler,w),p==null||p.addEventListener("mouseup",m.upHandler,w)),e.setColumnSizingInfo(g=>({...g,startOffset:l,startSize:o,deltaOffset:0,deltaPercentage:0,columnSizingStart:a,isResizingColumn:r.id}))}}},createTable:t=>{t.setColumnSizing=e=>t.options.onColumnSizingChange==null?void 0:t.options.onColumnSizingChange(e),t.setColumnSizingInfo=e=>t.options.onColumnSizingInfoChange==null?void 0:t.options.onColumnSizingInfoChange(e),t.resetColumnSizing=e=>{var n;t.setColumnSizing(e?{}:(n=t.initialState.columnSizing)!=null?n:{})},t.resetHeaderSizeInfo=e=>{var n;t.setColumnSizingInfo(e?jh():(n=t.initialState.columnSizingInfo)!=null?n:jh())},t.getTotalSize=()=>{var e,n;return(e=(n=t.getHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?e:0},t.getLeftTotalSize=()=>{var e,n;return(e=(n=t.getLeftHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?e:0},t.getCenterTotalSize=()=>{var e,n;return(e=(n=t.getCenterHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?e:0},t.getRightTotalSize=()=>{var e,n;return(e=(n=t.getRightHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?e:0}}};let su=null;function R3(){if(typeof su=="boolean")return su;let t=!1;try{const e={get passive(){return t=!0,!1}},n=()=>{};window.addEventListener("test",n,e),window.removeEventListener("test",n)}catch{t=!1}return su=t,su}function Uh(t){return t.type==="touchstart"}const A3={getInitialState:t=>({expanded:{},...t}),getDefaultOptions:t=>({onExpandedChange:Ft("expanded",t),paginateExpandedRows:!0}),createTable:t=>{let e=!1,n=!1;t._autoResetExpanded=()=>{var r,i;if(!e){t._queue(()=>{e=!0});return}if((r=(i=t.options.autoResetAll)!=null?i:t.options.autoResetExpanded)!=null?r:!t.options.manualExpanding){if(n)return;n=!0,t._queue(()=>{t.resetExpanded(),n=!1})}},t.setExpanded=r=>t.options.onExpandedChange==null?void 0:t.options.onExpandedChange(r),t.toggleAllRowsExpanded=r=>{r??!t.getIsAllRowsExpanded()?t.setExpanded(!0):t.setExpanded({})},t.resetExpanded=r=>{var i,s;t.setExpanded(r?{}:(i=(s=t.initialState)==null?void 0:s.expanded)!=null?i:{})},t.getCanSomeRowsExpand=()=>t.getPrePaginationRowModel().flatRows.some(r=>r.getCanExpand()),t.getToggleAllRowsExpandedHandler=()=>r=>{r.persist==null||r.persist(),t.toggleAllRowsExpanded()},t.getIsSomeRowsExpanded=()=>{const r=t.getState().expanded;return r===!0||Object.values(r).some(Boolean)},t.getIsAllRowsExpanded=()=>{const r=t.getState().expanded;return typeof r=="boolean"?r===!0:!(!Object.keys(r).length||t.getRowModel().flatRows.some(i=>!i.getIsExpanded()))},t.getExpandedDepth=()=>{let r=0;return(t.getState().expanded===!0?Object.keys(t.getRowModel().rowsById):Object.keys(t.getState().expanded)).forEach(s=>{const o=s.split(".");r=Math.max(r,o.length)}),r},t.getPreExpandedRowModel=()=>t.getSortedRowModel(),t.getExpandedRowModel=()=>(!t._getExpandedRowModel&&t.options.getExpandedRowModel&&(t._getExpandedRowModel=t.options.getExpandedRowModel(t)),t.options.manualExpanding||!t._getExpandedRowModel?t.getPreExpandedRowModel():t._getExpandedRowModel())},createRow:(t,e)=>{t.toggleExpanded=n=>{e.setExpanded(r=>{var i;const s=r===!0?!0:!!(r!=null&&r[t.id]);let o={};if(r===!0?Object.keys(e.getRowModel().rowsById).forEach(a=>{o[a]=!0}):o=r,n=(i=n)!=null?i:!s,!s&&n)return{...o,[t.id]:!0};if(s&&!n){const{[t.id]:a,...l}=o;return l}return r})},t.getIsExpanded=()=>{var n;const r=e.getState().expanded;return!!((n=e.options.getIsRowExpanded==null?void 0:e.options.getIsRowExpanded(t))!=null?n:r===!0||r!=null&&r[t.id])},t.getCanExpand=()=>{var n,r,i;return(n=e.options.getRowCanExpand==null?void 0:e.options.getRowCanExpand(t))!=null?n:((r=e.options.enableExpanding)!=null?r:!0)&&!!((i=t.subRows)!=null&&i.length)},t.getIsAllParentsExpanded=()=>{let n=!0,r=t;for(;n&&r.parentId;)r=e.getRow(r.parentId,!0),n=r.getIsExpanded();return n},t.getToggleExpandedHandler=()=>{const n=t.getCanExpand();return()=>{n&&t.toggleExpanded()}}}},wC=(t,e,n)=>{var r;const i=n.toLowerCase();return!!(!((r=t.getValue(e))==null||(r=r.toString())==null||(r=r.toLowerCase())==null)&&r.includes(i))};wC.autoRemove=t=>un(t);const EC=(t,e,n)=>{var r;return!!(!((r=t.getValue(e))==null||(r=r.toString())==null)&&r.includes(n))};EC.autoRemove=t=>un(t);const SC=(t,e,n)=>{var r;return((r=t.getValue(e))==null||(r=r.toString())==null?void 0:r.toLowerCase())===(n==null?void 0:n.toLowerCase())};SC.autoRemove=t=>un(t);const IC=(t,e,n)=>{var r;return(r=t.getValue(e))==null?void 0:r.includes(n)};IC.autoRemove=t=>un(t)||!(t!=null&&t.length);const TC=(t,e,n)=>!n.some(r=>{var i;return!((i=t.getValue(e))!=null&&i.includes(r))});TC.autoRemove=t=>un(t)||!(t!=null&&t.length);const CC=(t,e,n)=>n.some(r=>{var i;return(i=t.getValue(e))==null?void 0:i.includes(r)});CC.autoRemove=t=>un(t)||!(t!=null&&t.length);const RC=(t,e,n)=>t.getValue(e)===n;RC.autoRemove=t=>un(t);const AC=(t,e,n)=>t.getValue(e)==n;AC.autoRemove=t=>un(t);const _v=(t,e,n)=>{let[r,i]=n;const s=t.getValue(e);return s>=r&&s<=i};_v.resolveFilterValue=t=>{let[e,n]=t,r=typeof e!="number"?parseFloat(e):e,i=typeof n!="number"?parseFloat(n):n,s=e===null||Number.isNaN(r)?-1/0:r,o=n===null||Number.isNaN(i)?1/0:i;if(s>o){const a=s;s=o,o=a}return[s,o]};_v.autoRemove=t=>un(t)||un(t[0])&&un(t[1]);const Ln={includesString:wC,includesStringSensitive:EC,equalsString:SC,arrIncludes:IC,arrIncludesAll:TC,arrIncludesSome:CC,equals:RC,weakEquals:AC,inNumberRange:_v};function un(t){return t==null||t===""}const k3={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:t=>({columnFilters:[],globalFilter:void 0,...t}),getDefaultOptions:t=>({onColumnFiltersChange:Ft("columnFilters",t),onGlobalFilterChange:Ft("globalFilter",t),filterFromLeafRows:!1,maxLeafRowFilterDepth:100,globalFilterFn:"auto",getColumnCanGlobalFilter:e=>{var n;const r=(n=t.getCoreRowModel().flatRows[0])==null||(n=n._getAllCellsByColumnId()[e.id])==null?void 0:n.getValue();return typeof r=="string"||typeof r=="number"}}),createColumn:(t,e)=>{t.getAutoFilterFn=()=>{const n=e.getCoreRowModel().flatRows[0],r=n==null?void 0:n.getValue(t.id);return typeof r=="string"?Ln.includesString:typeof r=="number"?Ln.inNumberRange:typeof r=="boolean"||r!==null&&typeof r=="object"?Ln.equals:Array.isArray(r)?Ln.arrIncludes:Ln.weakEquals},t.getFilterFn=()=>{var n,r;return Pc(t.columnDef.filterFn)?t.columnDef.filterFn:t.columnDef.filterFn==="auto"?t.getAutoFilterFn():(n=(r=e.options.filterFns)==null?void 0:r[t.columnDef.filterFn])!=null?n:Ln[t.columnDef.filterFn]},t.getCanFilter=()=>{var n,r,i;return((n=t.columnDef.enableColumnFilter)!=null?n:!0)&&((r=e.options.enableColumnFilters)!=null?r:!0)&&((i=e.options.enableFilters)!=null?i:!0)&&!!t.accessorFn},t.getCanGlobalFilter=()=>{var n,r,i,s;return((n=t.columnDef.enableGlobalFilter)!=null?n:!0)&&((r=e.options.enableGlobalFilter)!=null?r:!0)&&((i=e.options.enableFilters)!=null?i:!0)&&((s=e.options.getColumnCanGlobalFilter==null?void 0:e.options.getColumnCanGlobalFilter(t))!=null?s:!0)&&!!t.accessorFn},t.getIsFiltered=()=>t.getFilterIndex()>-1,t.getFilterValue=()=>{var n;return(n=e.getState().columnFilters)==null||(n=n.find(r=>r.id===t.id))==null?void 0:n.value},t.getFilterIndex=()=>{var n,r;return(n=(r=e.getState().columnFilters)==null?void 0:r.findIndex(i=>i.id===t.id))!=null?n:-1},t.setFilterValue=n=>{e.setColumnFilters(r=>{const i=t.getFilterFn(),s=r==null?void 0:r.find(c=>c.id===t.id),o=Rr(n,s?s.value:void 0);if(j0(i,o,t)){var a;return(a=r==null?void 0:r.filter(c=>c.id!==t.id))!=null?a:[]}const l={id:t.id,value:o};if(s){var u;return(u=r==null?void 0:r.map(c=>c.id===t.id?l:c))!=null?u:[]}return r!=null&&r.length?[...r,l]:[l]})},t._getFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,t.id),t.getFacetedRowModel=()=>t._getFacetedRowModel?t._getFacetedRowModel():e.getPreFilteredRowModel(),t._getFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,t.id),t.getFacetedUniqueValues=()=>t._getFacetedUniqueValues?t._getFacetedUniqueValues():new Map,t._getFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,t.id),t.getFacetedMinMaxValues=()=>{if(t._getFacetedMinMaxValues)return t._getFacetedMinMaxValues()}},createRow:(t,e)=>{t.columnFilters={},t.columnFiltersMeta={}},createTable:t=>{t.getGlobalAutoFilterFn=()=>Ln.includesString,t.getGlobalFilterFn=()=>{var e,n;const{globalFilterFn:r}=t.options;return Pc(r)?r:r==="auto"?t.getGlobalAutoFilterFn():(e=(n=t.options.filterFns)==null?void 0:n[r])!=null?e:Ln[r]},t.setColumnFilters=e=>{const n=t.getAllLeafColumns(),r=i=>{var s;return(s=Rr(e,i))==null?void 0:s.filter(o=>{const a=n.find(l=>l.id===o.id);if(a){const l=a.getFilterFn();if(j0(l,o.value,a))return!1}return!0})};t.options.onColumnFiltersChange==null||t.options.onColumnFiltersChange(r)},t.setGlobalFilter=e=>{t.options.onGlobalFilterChange==null||t.options.onGlobalFilterChange(e)},t.resetGlobalFilter=e=>{t.setGlobalFilter(e?void 0:t.initialState.globalFilter)},t.resetColumnFilters=e=>{var n,r;t.setColumnFilters(e?[]:(n=(r=t.initialState)==null?void 0:r.columnFilters)!=null?n:[])},t.getPreFilteredRowModel=()=>t.getCoreRowModel(),t.getFilteredRowModel=()=>(!t._getFilteredRowModel&&t.options.getFilteredRowModel&&(t._getFilteredRowModel=t.options.getFilteredRowModel(t)),t.options.manualFiltering||!t._getFilteredRowModel?t.getPreFilteredRowModel():t._getFilteredRowModel()),t._getGlobalFacetedRowModel=t.options.getFacetedRowModel&&t.options.getFacetedRowModel(t,"__global__"),t.getGlobalFacetedRowModel=()=>t.options.manualFiltering||!t._getGlobalFacetedRowModel?t.getPreFilteredRowModel():t._getGlobalFacetedRowModel(),t._getGlobalFacetedUniqueValues=t.options.getFacetedUniqueValues&&t.options.getFacetedUniqueValues(t,"__global__"),t.getGlobalFacetedUniqueValues=()=>t._getGlobalFacetedUniqueValues?t._getGlobalFacetedUniqueValues():new Map,t._getGlobalFacetedMinMaxValues=t.options.getFacetedMinMaxValues&&t.options.getFacetedMinMaxValues(t,"__global__"),t.getGlobalFacetedMinMaxValues=()=>{if(t._getGlobalFacetedMinMaxValues)return t._getGlobalFacetedMinMaxValues()}}};function j0(t,e,n){return(t&&t.autoRemove?t.autoRemove(e,n):!1)||typeof e>"u"||typeof e=="string"&&!e}const P3=(t,e,n)=>n.reduce((r,i)=>{const s=i.getValue(t);return r+(typeof s=="number"?s:0)},0),x3=(t,e,n)=>{let r;return n.forEach(i=>{const s=i.getValue(t);s!=null&&(r>s||r===void 0&&s>=s)&&(r=s)}),r},N3=(t,e,n)=>{let r;return n.forEach(i=>{const s=i.getValue(t);s!=null&&(r<s||r===void 0&&s>=s)&&(r=s)}),r},b3=(t,e,n)=>{let r,i;return n.forEach(s=>{const o=s.getValue(t);o!=null&&(r===void 0?o>=o&&(r=i=o):(r>o&&(r=o),i<o&&(i=o)))}),[r,i]},O3=(t,e)=>{let n=0,r=0;if(e.forEach(i=>{let s=i.getValue(t);s!=null&&(s=+s)>=s&&(++n,r+=s)}),n)return r/n},D3=(t,e)=>{if(!e.length)return;const n=e.map(s=>s.getValue(t));if(!E3(n))return;if(n.length===1)return n[0];const r=Math.floor(n.length/2),i=n.sort((s,o)=>s-o);return n.length%2!==0?i[r]:(i[r-1]+i[r])/2},L3=(t,e)=>Array.from(new Set(e.map(n=>n.getValue(t))).values()),M3=(t,e)=>new Set(e.map(n=>n.getValue(t))).size,V3=(t,e)=>e.length,zh={sum:P3,min:x3,max:N3,extent:b3,mean:O3,median:D3,unique:L3,uniqueCount:M3,count:V3},F3={getDefaultColumnDef:()=>({aggregatedCell:t=>{var e,n;return(e=(n=t.getValue())==null||n.toString==null?void 0:n.toString())!=null?e:null},aggregationFn:"auto"}),getInitialState:t=>({grouping:[],...t}),getDefaultOptions:t=>({onGroupingChange:Ft("grouping",t),groupedColumnMode:"reorder"}),createColumn:(t,e)=>{t.toggleGrouping=()=>{e.setGrouping(n=>n!=null&&n.includes(t.id)?n.filter(r=>r!==t.id):[...n??[],t.id])},t.getCanGroup=()=>{var n,r,i,s;return(n=(r=(i=(s=t.columnDef.enableGrouping)!=null?s:!0)!=null?i:e.options.enableGrouping)!=null?r:!0)!=null?n:!!t.accessorFn},t.getIsGrouped=()=>{var n;return(n=e.getState().grouping)==null?void 0:n.includes(t.id)},t.getGroupedIndex=()=>{var n;return(n=e.getState().grouping)==null?void 0:n.indexOf(t.id)},t.getToggleGroupingHandler=()=>{const n=t.getCanGroup();return()=>{n&&t.toggleGrouping()}},t.getAutoAggregationFn=()=>{const n=e.getCoreRowModel().flatRows[0],r=n==null?void 0:n.getValue(t.id);if(typeof r=="number")return zh.sum;if(Object.prototype.toString.call(r)==="[object Date]")return zh.extent},t.getAggregationFn=()=>{var n,r;if(!t)throw new Error;return Pc(t.columnDef.aggregationFn)?t.columnDef.aggregationFn:t.columnDef.aggregationFn==="auto"?t.getAutoAggregationFn():(n=(r=e.options.aggregationFns)==null?void 0:r[t.columnDef.aggregationFn])!=null?n:zh[t.columnDef.aggregationFn]}},createTable:t=>{t.setGrouping=e=>t.options.onGroupingChange==null?void 0:t.options.onGroupingChange(e),t.resetGrouping=e=>{var n,r;t.setGrouping(e?[]:(n=(r=t.initialState)==null?void 0:r.grouping)!=null?n:[])},t.getPreGroupedRowModel=()=>t.getFilteredRowModel(),t.getGroupedRowModel=()=>(!t._getGroupedRowModel&&t.options.getGroupedRowModel&&(t._getGroupedRowModel=t.options.getGroupedRowModel(t)),t.options.manualGrouping||!t._getGroupedRowModel?t.getPreGroupedRowModel():t._getGroupedRowModel())},createRow:(t,e)=>{t.getIsGrouped=()=>!!t.groupingColumnId,t.getGroupingValue=n=>{if(t._groupingValuesCache.hasOwnProperty(n))return t._groupingValuesCache[n];const r=e.getColumn(n);return r!=null&&r.columnDef.getGroupingValue?(t._groupingValuesCache[n]=r.columnDef.getGroupingValue(t.original),t._groupingValuesCache[n]):t.getValue(n)},t._groupingValuesCache={}},createCell:(t,e,n,r)=>{t.getIsGrouped=()=>e.getIsGrouped()&&e.id===n.groupingColumnId,t.getIsPlaceholder=()=>!t.getIsGrouped()&&e.getIsGrouped(),t.getIsAggregated=()=>{var i;return!t.getIsGrouped()&&!t.getIsPlaceholder()&&!!((i=n.subRows)!=null&&i.length)}}};function $3(t,e,n){if(!(e!=null&&e.length)||!n)return t;const r=t.filter(s=>!e.includes(s.id));return n==="remove"?r:[...e.map(s=>t.find(o=>o.id===s)).filter(Boolean),...r]}const j3={getInitialState:t=>({columnOrder:[],...t}),getDefaultOptions:t=>({onColumnOrderChange:Ft("columnOrder",t)}),createTable:t=>{t.setColumnOrder=e=>t.options.onColumnOrderChange==null?void 0:t.options.onColumnOrderChange(e),t.resetColumnOrder=e=>{var n;t.setColumnOrder(e?[]:(n=t.initialState.columnOrder)!=null?n:[])},t._getOrderColumnsFn=B(()=>[t.getState().columnOrder,t.getState().grouping,t.options.groupedColumnMode],(e,n,r)=>i=>{let s=[];if(!(e!=null&&e.length))s=i;else{const o=[...e],a=[...i];for(;a.length&&o.length;){const l=o.shift(),u=a.findIndex(c=>c.id===l);u>-1&&s.push(a.splice(u,1)[0])}s=[...s,...a]}return $3(s,n,r)},{key:!1})}},$p=0,jp=10,Bh=()=>({pageIndex:$p,pageSize:jp}),U3={getInitialState:t=>({...t,pagination:{...Bh(),...t==null?void 0:t.pagination}}),getDefaultOptions:t=>({onPaginationChange:Ft("pagination",t)}),createTable:t=>{let e=!1,n=!1;t._autoResetPageIndex=()=>{var r,i;if(!e){t._queue(()=>{e=!0});return}if((r=(i=t.options.autoResetAll)!=null?i:t.options.autoResetPageIndex)!=null?r:!t.options.manualPagination){if(n)return;n=!0,t._queue(()=>{t.resetPageIndex(),n=!1})}},t.setPagination=r=>{const i=s=>Rr(r,s);return t.options.onPaginationChange==null?void 0:t.options.onPaginationChange(i)},t.resetPagination=r=>{var i;t.setPagination(r?Bh():(i=t.initialState.pagination)!=null?i:Bh())},t.setPageIndex=r=>{t.setPagination(i=>{let s=Rr(r,i.pageIndex);const o=typeof t.options.pageCount>"u"||t.options.pageCount===-1?Number.MAX_SAFE_INTEGER:t.options.pageCount-1;return s=Math.max(0,Math.min(s,o)),{...i,pageIndex:s}})},t.resetPageIndex=r=>{var i,s;t.setPageIndex(r?$p:(i=(s=t.initialState)==null||(s=s.pagination)==null?void 0:s.pageIndex)!=null?i:$p)},t.resetPageSize=r=>{var i,s;t.setPageSize(r?jp:(i=(s=t.initialState)==null||(s=s.pagination)==null?void 0:s.pageSize)!=null?i:jp)},t.setPageSize=r=>{t.setPagination(i=>{const s=Math.max(1,Rr(r,i.pageSize)),o=i.pageSize*i.pageIndex,a=Math.floor(o/s);return{...i,pageIndex:a,pageSize:s}})},t.setPageCount=r=>t.setPagination(i=>{var s;let o=Rr(r,(s=t.options.pageCount)!=null?s:-1);return typeof o=="number"&&(o=Math.max(-1,o)),{...i,pageCount:o}}),t.getPageOptions=B(()=>[t.getPageCount()],r=>{let i=[];return r&&r>0&&(i=[...new Array(r)].fill(null).map((s,o)=>o)),i},{key:!1,debug:()=>{var r;return(r=t.options.debugAll)!=null?r:t.options.debugTable}}),t.getCanPreviousPage=()=>t.getState().pagination.pageIndex>0,t.getCanNextPage=()=>{const{pageIndex:r}=t.getState().pagination,i=t.getPageCount();return i===-1?!0:i===0?!1:r<i-1},t.previousPage=()=>t.setPageIndex(r=>r-1),t.nextPage=()=>t.setPageIndex(r=>r+1),t.getPrePaginationRowModel=()=>t.getExpandedRowModel(),t.getPaginationRowModel=()=>(!t._getPaginationRowModel&&t.options.getPaginationRowModel&&(t._getPaginationRowModel=t.options.getPaginationRowModel(t)),t.options.manualPagination||!t._getPaginationRowModel?t.getPrePaginationRowModel():t._getPaginationRowModel()),t.getPageCount=()=>{var r;return(r=t.options.pageCount)!=null?r:Math.ceil(t.getPrePaginationRowModel().rows.length/t.getState().pagination.pageSize)}}},Hh=()=>({left:[],right:[]}),Wh=()=>({top:[],bottom:[]}),z3={getInitialState:t=>({columnPinning:Hh(),rowPinning:Wh(),...t}),getDefaultOptions:t=>({onColumnPinningChange:Ft("columnPinning",t),onRowPinningChange:Ft("rowPinning",t)}),createColumn:(t,e)=>{t.pin=n=>{const r=t.getLeafColumns().map(i=>i.id).filter(Boolean);e.setColumnPinning(i=>{var s,o;if(n==="right"){var a,l;return{left:((a=i==null?void 0:i.left)!=null?a:[]).filter(d=>!(r!=null&&r.includes(d))),right:[...((l=i==null?void 0:i.right)!=null?l:[]).filter(d=>!(r!=null&&r.includes(d))),...r]}}if(n==="left"){var u,c;return{left:[...((u=i==null?void 0:i.left)!=null?u:[]).filter(d=>!(r!=null&&r.includes(d))),...r],right:((c=i==null?void 0:i.right)!=null?c:[]).filter(d=>!(r!=null&&r.includes(d)))}}return{left:((s=i==null?void 0:i.left)!=null?s:[]).filter(d=>!(r!=null&&r.includes(d))),right:((o=i==null?void 0:i.right)!=null?o:[]).filter(d=>!(r!=null&&r.includes(d)))}})},t.getCanPin=()=>t.getLeafColumns().some(r=>{var i,s,o;return((i=r.columnDef.enablePinning)!=null?i:!0)&&((s=(o=e.options.enableColumnPinning)!=null?o:e.options.enablePinning)!=null?s:!0)}),t.getIsPinned=()=>{const n=t.getLeafColumns().map(a=>a.id),{left:r,right:i}=e.getState().columnPinning,s=n.some(a=>r==null?void 0:r.includes(a)),o=n.some(a=>i==null?void 0:i.includes(a));return s?"left":o?"right":!1},t.getPinnedIndex=()=>{var n,r;const i=t.getIsPinned();return i?(n=(r=e.getState().columnPinning)==null||(r=r[i])==null?void 0:r.indexOf(t.id))!=null?n:-1:0}},createRow:(t,e)=>{t.pin=(n,r,i)=>{const s=r?t.getLeafRows().map(l=>{let{id:u}=l;return u}):[],o=i?t.getParentRows().map(l=>{let{id:u}=l;return u}):[],a=new Set([...o,t.id,...s]);e.setRowPinning(l=>{var u,c;if(n==="bottom"){var d,f;return{top:((d=l==null?void 0:l.top)!=null?d:[]).filter(_=>!(a!=null&&a.has(_))),bottom:[...((f=l==null?void 0:l.bottom)!=null?f:[]).filter(_=>!(a!=null&&a.has(_))),...Array.from(a)]}}if(n==="top"){var p,m;return{top:[...((p=l==null?void 0:l.top)!=null?p:[]).filter(_=>!(a!=null&&a.has(_))),...Array.from(a)],bottom:((m=l==null?void 0:l.bottom)!=null?m:[]).filter(_=>!(a!=null&&a.has(_)))}}return{top:((u=l==null?void 0:l.top)!=null?u:[]).filter(_=>!(a!=null&&a.has(_))),bottom:((c=l==null?void 0:l.bottom)!=null?c:[]).filter(_=>!(a!=null&&a.has(_)))}})},t.getCanPin=()=>{var n;const{enableRowPinning:r,enablePinning:i}=e.options;return typeof r=="function"?r(t):(n=r??i)!=null?n:!0},t.getIsPinned=()=>{const n=[t.id],{top:r,bottom:i}=e.getState().rowPinning,s=n.some(a=>r==null?void 0:r.includes(a)),o=n.some(a=>i==null?void 0:i.includes(a));return s?"top":o?"bottom":!1},t.getPinnedIndex=()=>{var n,r;const i=t.getIsPinned();if(!i)return-1;const s=(n=e._getPinnedRows(i))==null?void 0:n.map(o=>{let{id:a}=o;return a});return(r=s==null?void 0:s.indexOf(t.id))!=null?r:-1},t.getCenterVisibleCells=B(()=>[t._getAllVisibleCells(),e.getState().columnPinning.left,e.getState().columnPinning.right],(n,r,i)=>{const s=[...r??[],...i??[]];return n.filter(o=>!s.includes(o.column.id))},{key:!1,debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugRows}}),t.getLeftVisibleCells=B(()=>[t._getAllVisibleCells(),e.getState().columnPinning.left,,],(n,r)=>(r??[]).map(s=>n.find(o=>o.column.id===s)).filter(Boolean).map(s=>({...s,position:"left"})),{key:!1,debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugRows}}),t.getRightVisibleCells=B(()=>[t._getAllVisibleCells(),e.getState().columnPinning.right],(n,r)=>(r??[]).map(s=>n.find(o=>o.column.id===s)).filter(Boolean).map(s=>({...s,position:"right"})),{key:!1,debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugRows}})},createTable:t=>{t.setColumnPinning=e=>t.options.onColumnPinningChange==null?void 0:t.options.onColumnPinningChange(e),t.resetColumnPinning=e=>{var n,r;return t.setColumnPinning(e?Hh():(n=(r=t.initialState)==null?void 0:r.columnPinning)!=null?n:Hh())},t.getIsSomeColumnsPinned=e=>{var n;const r=t.getState().columnPinning;if(!e){var i,s;return!!((i=r.left)!=null&&i.length||(s=r.right)!=null&&s.length)}return!!((n=r[e])!=null&&n.length)},t.getLeftLeafColumns=B(()=>[t.getAllLeafColumns(),t.getState().columnPinning.left],(e,n)=>(n??[]).map(r=>e.find(i=>i.id===r)).filter(Boolean),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugColumns}}),t.getRightLeafColumns=B(()=>[t.getAllLeafColumns(),t.getState().columnPinning.right],(e,n)=>(n??[]).map(r=>e.find(i=>i.id===r)).filter(Boolean),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugColumns}}),t.getCenterLeafColumns=B(()=>[t.getAllLeafColumns(),t.getState().columnPinning.left,t.getState().columnPinning.right],(e,n,r)=>{const i=[...n??[],...r??[]];return e.filter(s=>!i.includes(s.id))},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugColumns}}),t.setRowPinning=e=>t.options.onRowPinningChange==null?void 0:t.options.onRowPinningChange(e),t.resetRowPinning=e=>{var n,r;return t.setRowPinning(e?Wh():(n=(r=t.initialState)==null?void 0:r.rowPinning)!=null?n:Wh())},t.getIsSomeRowsPinned=e=>{var n;const r=t.getState().rowPinning;if(!e){var i,s;return!!((i=r.top)!=null&&i.length||(s=r.bottom)!=null&&s.length)}return!!((n=r[e])!=null&&n.length)},t._getPinnedRows=e=>B(()=>[t.getRowModel().rows,t.getState().rowPinning[e]],(n,r)=>{var i;return((i=t.options.keepPinnedRows)==null||i?(r??[]).map(o=>{const a=t.getRow(o,!0);return a.getIsAllParentsExpanded()?a:null}):(r??[]).map(o=>n.find(a=>a.id===o))).filter(Boolean).map(o=>({...o,position:e}))},{key:!1,debug:()=>{var n;return(n=t.options.debugAll)!=null?n:t.options.debugRows}})(),t.getTopRows=()=>t._getPinnedRows("top"),t.getBottomRows=()=>t._getPinnedRows("bottom"),t.getCenterRows=B(()=>[t.getRowModel().rows,t.getState().rowPinning.top,t.getState().rowPinning.bottom],(e,n,r)=>{const i=new Set([...n??[],...r??[]]);return e.filter(s=>!i.has(s.id))},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugRows}})}},B3={getInitialState:t=>({rowSelection:{},...t}),getDefaultOptions:t=>({onRowSelectionChange:Ft("rowSelection",t),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:t=>{t.setRowSelection=e=>t.options.onRowSelectionChange==null?void 0:t.options.onRowSelectionChange(e),t.resetRowSelection=e=>{var n;return t.setRowSelection(e?{}:(n=t.initialState.rowSelection)!=null?n:{})},t.toggleAllRowsSelected=e=>{t.setRowSelection(n=>{e=typeof e<"u"?e:!t.getIsAllRowsSelected();const r={...n},i=t.getPreGroupedRowModel().flatRows;return e?i.forEach(s=>{s.getCanSelect()&&(r[s.id]=!0)}):i.forEach(s=>{delete r[s.id]}),r})},t.toggleAllPageRowsSelected=e=>t.setRowSelection(n=>{const r=typeof e<"u"?e:!t.getIsAllPageRowsSelected(),i={...n};return t.getRowModel().rows.forEach(s=>{Up(i,s.id,r,!0,t)}),i}),t.getPreSelectedRowModel=()=>t.getCoreRowModel(),t.getSelectedRowModel=B(()=>[t.getState().rowSelection,t.getCoreRowModel()],(e,n)=>Object.keys(e).length?qh(t,n):{rows:[],flatRows:[],rowsById:{}},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable}}),t.getFilteredSelectedRowModel=B(()=>[t.getState().rowSelection,t.getFilteredRowModel()],(e,n)=>Object.keys(e).length?qh(t,n):{rows:[],flatRows:[],rowsById:{}},{key:"getFilteredSelectedRowModel",debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable}}),t.getGroupedSelectedRowModel=B(()=>[t.getState().rowSelection,t.getSortedRowModel()],(e,n)=>Object.keys(e).length?qh(t,n):{rows:[],flatRows:[],rowsById:{}},{key:"getGroupedSelectedRowModel",debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable}}),t.getIsAllRowsSelected=()=>{const e=t.getFilteredRowModel().flatRows,{rowSelection:n}=t.getState();let r=!!(e.length&&Object.keys(n).length);return r&&e.some(i=>i.getCanSelect()&&!n[i.id])&&(r=!1),r},t.getIsAllPageRowsSelected=()=>{const e=t.getPaginationRowModel().flatRows.filter(i=>i.getCanSelect()),{rowSelection:n}=t.getState();let r=!!e.length;return r&&e.some(i=>!n[i.id])&&(r=!1),r},t.getIsSomeRowsSelected=()=>{var e;const n=Object.keys((e=t.getState().rowSelection)!=null?e:{}).length;return n>0&&n<t.getFilteredRowModel().flatRows.length},t.getIsSomePageRowsSelected=()=>{const e=t.getPaginationRowModel().flatRows;return t.getIsAllPageRowsSelected()?!1:e.filter(n=>n.getCanSelect()).some(n=>n.getIsSelected()||n.getIsSomeSelected())},t.getToggleAllRowsSelectedHandler=()=>e=>{t.toggleAllRowsSelected(e.target.checked)},t.getToggleAllPageRowsSelectedHandler=()=>e=>{t.toggleAllPageRowsSelected(e.target.checked)}},createRow:(t,e)=>{t.toggleSelected=(n,r)=>{const i=t.getIsSelected();e.setRowSelection(s=>{var o;if(n=typeof n<"u"?n:!i,t.getCanSelect()&&i===n)return s;const a={...s};return Up(a,t.id,n,(o=r==null?void 0:r.selectChildren)!=null?o:!0,e),a})},t.getIsSelected=()=>{const{rowSelection:n}=e.getState();return wv(t,n)},t.getIsSomeSelected=()=>{const{rowSelection:n}=e.getState();return zp(t,n)==="some"},t.getIsAllSubRowsSelected=()=>{const{rowSelection:n}=e.getState();return zp(t,n)==="all"},t.getCanSelect=()=>{var n;return typeof e.options.enableRowSelection=="function"?e.options.enableRowSelection(t):(n=e.options.enableRowSelection)!=null?n:!0},t.getCanSelectSubRows=()=>{var n;return typeof e.options.enableSubRowSelection=="function"?e.options.enableSubRowSelection(t):(n=e.options.enableSubRowSelection)!=null?n:!0},t.getCanMultiSelect=()=>{var n;return typeof e.options.enableMultiRowSelection=="function"?e.options.enableMultiRowSelection(t):(n=e.options.enableMultiRowSelection)!=null?n:!0},t.getToggleSelectedHandler=()=>{const n=t.getCanSelect();return r=>{var i;n&&t.toggleSelected((i=r.target)==null?void 0:i.checked)}}}},Up=(t,e,n,r,i)=>{var s;const o=i.getRow(e,!0);n?(o.getCanMultiSelect()||Object.keys(t).forEach(a=>delete t[a]),o.getCanSelect()&&(t[e]=!0)):delete t[e],r&&(s=o.subRows)!=null&&s.length&&o.getCanSelectSubRows()&&o.subRows.forEach(a=>Up(t,a.id,n,r,i))};function qh(t,e){const n=t.getState().rowSelection,r=[],i={},s=function(o,a){return o.map(l=>{var u;const c=wv(l,n);if(c&&(r.push(l),i[l.id]=l),(u=l.subRows)!=null&&u.length&&(l={...l,subRows:s(l.subRows)}),c)return l}).filter(Boolean)};return{rows:s(e.rows),flatRows:r,rowsById:i}}function wv(t,e){var n;return(n=e[t.id])!=null?n:!1}function zp(t,e,n){var r;if(!((r=t.subRows)!=null&&r.length))return!1;let i=!0,s=!1;return t.subRows.forEach(o=>{if(!(s&&!i)&&(o.getCanSelect()&&(wv(o,e)?s=!0:i=!1),o.subRows&&o.subRows.length)){const a=zp(o,e);a==="all"?s=!0:(a==="some"&&(s=!0),i=!1)}}),i?"all":s?"some":!1}const Bp=/([0-9]+)/gm,H3=(t,e,n)=>kC(Qr(t.getValue(n)).toLowerCase(),Qr(e.getValue(n)).toLowerCase()),W3=(t,e,n)=>kC(Qr(t.getValue(n)),Qr(e.getValue(n))),q3=(t,e,n)=>Ev(Qr(t.getValue(n)).toLowerCase(),Qr(e.getValue(n)).toLowerCase()),G3=(t,e,n)=>Ev(Qr(t.getValue(n)),Qr(e.getValue(n))),K3=(t,e,n)=>{const r=t.getValue(n),i=e.getValue(n);return r>i?1:r<i?-1:0},Q3=(t,e,n)=>Ev(t.getValue(n),e.getValue(n));function Ev(t,e){return t===e?0:t>e?1:-1}function Qr(t){return typeof t=="number"?isNaN(t)||t===1/0||t===-1/0?"":String(t):typeof t=="string"?t:""}function kC(t,e){const n=t.split(Bp).filter(Boolean),r=e.split(Bp).filter(Boolean);for(;n.length&&r.length;){const i=n.shift(),s=r.shift(),o=parseInt(i,10),a=parseInt(s,10),l=[o,a].sort();if(isNaN(l[0])){if(i>s)return 1;if(s>i)return-1;continue}if(isNaN(l[1]))return isNaN(o)?-1:1;if(o>a)return 1;if(a>o)return-1}return n.length-r.length}const mo={alphanumeric:H3,alphanumericCaseSensitive:W3,text:q3,textCaseSensitive:G3,datetime:K3,basic:Q3},Y3={getInitialState:t=>({sorting:[],...t}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:t=>({onSortingChange:Ft("sorting",t),isMultiSortEvent:e=>e.shiftKey}),createColumn:(t,e)=>{t.getAutoSortingFn=()=>{const n=e.getFilteredRowModel().flatRows.slice(10);let r=!1;for(const i of n){const s=i==null?void 0:i.getValue(t.id);if(Object.prototype.toString.call(s)==="[object Date]")return mo.datetime;if(typeof s=="string"&&(r=!0,s.split(Bp).length>1))return mo.alphanumeric}return r?mo.text:mo.basic},t.getAutoSortDir=()=>{const n=e.getFilteredRowModel().flatRows[0];return typeof(n==null?void 0:n.getValue(t.id))=="string"?"asc":"desc"},t.getSortingFn=()=>{var n,r;if(!t)throw new Error;return Pc(t.columnDef.sortingFn)?t.columnDef.sortingFn:t.columnDef.sortingFn==="auto"?t.getAutoSortingFn():(n=(r=e.options.sortingFns)==null?void 0:r[t.columnDef.sortingFn])!=null?n:mo[t.columnDef.sortingFn]},t.toggleSorting=(n,r)=>{const i=t.getNextSortingOrder(),s=typeof n<"u"&&n!==null;e.setSorting(o=>{const a=o==null?void 0:o.find(p=>p.id===t.id),l=o==null?void 0:o.findIndex(p=>p.id===t.id);let u=[],c,d=s?n:i==="desc";if(o!=null&&o.length&&t.getCanMultiSort()&&r?a?c="toggle":c="add":o!=null&&o.length&&l!==o.length-1?c="replace":a?c="toggle":c="replace",c==="toggle"&&(s||i||(c="remove")),c==="add"){var f;u=[...o,{id:t.id,desc:d}],u.splice(0,u.length-((f=e.options.maxMultiSortColCount)!=null?f:Number.MAX_SAFE_INTEGER))}else c==="toggle"?u=o.map(p=>p.id===t.id?{...p,desc:d}:p):c==="remove"?u=o.filter(p=>p.id!==t.id):u=[{id:t.id,desc:d}];return u})},t.getFirstSortDir=()=>{var n,r;return((n=(r=t.columnDef.sortDescFirst)!=null?r:e.options.sortDescFirst)!=null?n:t.getAutoSortDir()==="desc")?"desc":"asc"},t.getNextSortingOrder=n=>{var r,i;const s=t.getFirstSortDir(),o=t.getIsSorted();return o?o!==s&&((r=e.options.enableSortingRemoval)==null||r)&&(!(n&&(i=e.options.enableMultiRemove)!=null)||i)?!1:o==="desc"?"asc":"desc":s},t.getCanSort=()=>{var n,r;return((n=t.columnDef.enableSorting)!=null?n:!0)&&((r=e.options.enableSorting)!=null?r:!0)&&!!t.accessorFn},t.getCanMultiSort=()=>{var n,r;return(n=(r=t.columnDef.enableMultiSort)!=null?r:e.options.enableMultiSort)!=null?n:!!t.accessorFn},t.getIsSorted=()=>{var n;const r=(n=e.getState().sorting)==null?void 0:n.find(i=>i.id===t.id);return r?r.desc?"desc":"asc":!1},t.getSortIndex=()=>{var n,r;return(n=(r=e.getState().sorting)==null?void 0:r.findIndex(i=>i.id===t.id))!=null?n:-1},t.clearSorting=()=>{e.setSorting(n=>n!=null&&n.length?n.filter(r=>r.id!==t.id):[])},t.getToggleSortingHandler=()=>{const n=t.getCanSort();return r=>{n&&(r.persist==null||r.persist(),t.toggleSorting==null||t.toggleSorting(void 0,t.getCanMultiSort()?e.options.isMultiSortEvent==null?void 0:e.options.isMultiSortEvent(r):!1))}}},createTable:t=>{t.setSorting=e=>t.options.onSortingChange==null?void 0:t.options.onSortingChange(e),t.resetSorting=e=>{var n,r;t.setSorting(e?[]:(n=(r=t.initialState)==null?void 0:r.sorting)!=null?n:[])},t.getPreSortedRowModel=()=>t.getGroupedRowModel(),t.getSortedRowModel=()=>(!t._getSortedRowModel&&t.options.getSortedRowModel&&(t._getSortedRowModel=t.options.getSortedRowModel(t)),t.options.manualSorting||!t._getSortedRowModel?t.getPreSortedRowModel():t._getSortedRowModel())}},X3={getInitialState:t=>({columnVisibility:{},...t}),getDefaultOptions:t=>({onColumnVisibilityChange:Ft("columnVisibility",t)}),createColumn:(t,e)=>{t.toggleVisibility=n=>{t.getCanHide()&&e.setColumnVisibility(r=>({...r,[t.id]:n??!t.getIsVisible()}))},t.getIsVisible=()=>{var n,r;return(n=(r=e.getState().columnVisibility)==null?void 0:r[t.id])!=null?n:!0},t.getCanHide=()=>{var n,r;return((n=t.columnDef.enableHiding)!=null?n:!0)&&((r=e.options.enableHiding)!=null?r:!0)},t.getToggleVisibilityHandler=()=>n=>{t.toggleVisibility==null||t.toggleVisibility(n.target.checked)}},createRow:(t,e)=>{t._getAllVisibleCells=B(()=>[t.getAllCells(),e.getState().columnVisibility],n=>n.filter(r=>r.column.getIsVisible()),{key:"row._getAllVisibleCells",debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugRows}}),t.getVisibleCells=B(()=>[t.getLeftVisibleCells(),t.getCenterVisibleCells(),t.getRightVisibleCells()],(n,r,i)=>[...n,...r,...i],{key:!1,debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugRows}})},createTable:t=>{const e=(n,r)=>B(()=>[r(),r().filter(i=>i.getIsVisible()).map(i=>i.id).join("_")],i=>i.filter(s=>s.getIsVisible==null?void 0:s.getIsVisible()),{key:n,debug:()=>{var i;return(i=t.options.debugAll)!=null?i:t.options.debugColumns}});t.getVisibleFlatColumns=e("getVisibleFlatColumns",()=>t.getAllFlatColumns()),t.getVisibleLeafColumns=e("getVisibleLeafColumns",()=>t.getAllLeafColumns()),t.getLeftVisibleLeafColumns=e("getLeftVisibleLeafColumns",()=>t.getLeftLeafColumns()),t.getRightVisibleLeafColumns=e("getRightVisibleLeafColumns",()=>t.getRightLeafColumns()),t.getCenterVisibleLeafColumns=e("getCenterVisibleLeafColumns",()=>t.getCenterLeafColumns()),t.setColumnVisibility=n=>t.options.onColumnVisibilityChange==null?void 0:t.options.onColumnVisibilityChange(n),t.resetColumnVisibility=n=>{var r;t.setColumnVisibility(n?{}:(r=t.initialState.columnVisibility)!=null?r:{})},t.toggleAllColumnsVisible=n=>{var r;n=(r=n)!=null?r:!t.getIsAllColumnsVisible(),t.setColumnVisibility(t.getAllLeafColumns().reduce((i,s)=>({...i,[s.id]:n||!(s.getCanHide!=null&&s.getCanHide())}),{}))},t.getIsAllColumnsVisible=()=>!t.getAllLeafColumns().some(n=>!(n.getIsVisible!=null&&n.getIsVisible())),t.getIsSomeColumnsVisible=()=>t.getAllLeafColumns().some(n=>n.getIsVisible==null?void 0:n.getIsVisible()),t.getToggleAllColumnsVisibilityHandler=()=>n=>{var r;t.toggleAllColumnsVisible((r=n.target)==null?void 0:r.checked)}}},U0=[T3,X3,j3,z3,k3,Y3,F3,A3,U3,B3,C3];function J3(t){var e;(t.debugAll||t.debugTable)&&console.info("Creating Table Instance...");let n={_features:U0};const r=n._features.reduce((c,d)=>Object.assign(c,d.getDefaultOptions==null?void 0:d.getDefaultOptions(n)),{}),i=c=>n.options.mergeOptions?n.options.mergeOptions(r,c):{...r,...c};let o={...{},...(e=t.initialState)!=null?e:{}};n._features.forEach(c=>{var d;o=(d=c.getInitialState==null?void 0:c.getInitialState(o))!=null?d:o});const a=[];let l=!1;const u={_features:U0,options:{...r,...t},initialState:o,_queue:c=>{a.push(c),l||(l=!0,Promise.resolve().then(()=>{for(;a.length;)a.shift()();l=!1}).catch(d=>setTimeout(()=>{throw d})))},reset:()=>{n.setState(n.initialState)},setOptions:c=>{const d=Rr(c,n.options);n.options=i(d)},getState:()=>n.options.state,setState:c=>{n.options.onStateChange==null||n.options.onStateChange(c)},_getRowId:(c,d,f)=>{var p;return(p=n.options.getRowId==null?void 0:n.options.getRowId(c,d,f))!=null?p:`${f?[f.id,d].join("."):d}`},getCoreRowModel:()=>(n._getCoreRowModel||(n._getCoreRowModel=n.options.getCoreRowModel(n)),n._getCoreRowModel()),getRowModel:()=>n.getPaginationRowModel(),getRow:(c,d)=>{let f=(d?n.getPrePaginationRowModel():n.getRowModel()).rowsById[c];if(!f&&(f=n.getCoreRowModel().rowsById[c],!f))throw new Error;return f},_getDefaultColumnDef:B(()=>[n.options.defaultColumn],c=>{var d;return c=(d=c)!=null?d:{},{header:f=>{const p=f.header.column.columnDef;return p.accessorKey?p.accessorKey:p.accessorFn?p.id:null},cell:f=>{var p,m;return(p=(m=f.renderValue())==null||m.toString==null?void 0:m.toString())!=null?p:null},...n._features.reduce((f,p)=>Object.assign(f,p.getDefaultColumnDef==null?void 0:p.getDefaultColumnDef()),{}),...c}},{debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns},key:!1}),_getColumnDefs:()=>n.options.columns,getAllColumns:B(()=>[n._getColumnDefs()],c=>{const d=function(f,p,m){return m===void 0&&(m=0),f.map(_=>{const w=I3(n,_,m,p),g=_;return w.columns=g.columns?d(g.columns,w,m+1):[],w})};return d(c)},{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),getAllFlatColumns:B(()=>[n.getAllColumns()],c=>c.flatMap(d=>d.getFlatColumns()),{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),_getAllFlatColumnsById:B(()=>[n.getAllFlatColumns()],c=>c.reduce((d,f)=>(d[f.id]=f,d),{}),{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),getAllLeafColumns:B(()=>[n.getAllColumns(),n._getOrderColumnsFn()],(c,d)=>{let f=c.flatMap(p=>p.getLeafColumns());return d(f)},{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),getColumn:c=>n._getAllFlatColumnsById()[c]};Object.assign(n,u);for(let c=0;c<n._features.length;c++){const d=n._features[c];d==null||d.createTable==null||d.createTable(n)}return n}function Z3(t,e,n,r){const i=()=>{var o;return(o=s.getValue())!=null?o:t.options.renderFallbackValue},s={id:`${e.id}_${n.id}`,row:e,column:n,getValue:()=>e.getValue(r),renderValue:i,getContext:B(()=>[t,n,e,s],(o,a,l,u)=>({table:o,column:a,row:l,cell:u,getValue:u.getValue,renderValue:u.renderValue}),{key:!1,debug:()=>t.options.debugAll})};return t._features.forEach(o=>{o.createCell==null||o.createCell(s,n,e,t)},{}),s}const Sv=(t,e,n,r,i,s,o)=>{let a={id:e,index:r,original:n,depth:i,parentId:o,_valuesCache:{},_uniqueValuesCache:{},getValue:l=>{if(a._valuesCache.hasOwnProperty(l))return a._valuesCache[l];const u=t.getColumn(l);if(u!=null&&u.accessorFn)return a._valuesCache[l]=u.accessorFn(a.original,r),a._valuesCache[l]},getUniqueValues:l=>{if(a._uniqueValuesCache.hasOwnProperty(l))return a._uniqueValuesCache[l];const u=t.getColumn(l);if(u!=null&&u.accessorFn)return u.columnDef.getUniqueValues?(a._uniqueValuesCache[l]=u.columnDef.getUniqueValues(a.original,r),a._uniqueValuesCache[l]):(a._uniqueValuesCache[l]=[a.getValue(l)],a._uniqueValuesCache[l])},renderValue:l=>{var u;return(u=a.getValue(l))!=null?u:t.options.renderFallbackValue},subRows:s??[],getLeafRows:()=>S3(a.subRows,l=>l.subRows),getParentRow:()=>a.parentId?t.getRow(a.parentId,!0):void 0,getParentRows:()=>{let l=[],u=a;for(;;){const c=u.getParentRow();if(!c)break;l.push(c),u=c}return l.reverse()},getAllCells:B(()=>[t.getAllLeafColumns()],l=>l.map(u=>Z3(t,a,u,u.id)),{key:!1,debug:()=>{var l;return(l=t.options.debugAll)!=null?l:t.options.debugRows}}),_getAllCellsByColumnId:B(()=>[a.getAllCells()],l=>l.reduce((u,c)=>(u[c.column.id]=c,u),{}),{key:"row.getAllCellsByColumnId",debug:()=>{var l;return(l=t.options.debugAll)!=null?l:t.options.debugRows}})};for(let l=0;l<t._features.length;l++){const u=t._features[l];u==null||u.createRow==null||u.createRow(a,t)}return a};function eF(){return t=>B(()=>[t.options.data],e=>{const n={rows:[],flatRows:[],rowsById:{}},r=function(i,s,o){s===void 0&&(s=0);const a=[];for(let u=0;u<i.length;u++){const c=Sv(t,t._getRowId(i[u],u,o),i[u],u,s,void 0,o==null?void 0:o.id);if(n.flatRows.push(c),n.rowsById[c.id]=c,a.push(c),t.options.getSubRows){var l;c.originalSubRows=t.options.getSubRows(i[u],u),(l=c.originalSubRows)!=null&&l.length&&(c.subRows=r(c.originalSubRows,s+1,c))}}return a};return n.rows=r(e),n},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable},onChange:()=>{t._autoResetPageIndex()}})}function tF(t,e,n){return n.options.filterFromLeafRows?nF(t,e,n):rF(t,e,n)}function nF(t,e,n){var r;const i=[],s={},o=(r=n.options.maxLeafRowFilterDepth)!=null?r:100,a=function(l,u){u===void 0&&(u=0);const c=[];for(let f=0;f<l.length;f++){var d;let p=l[f];const m=Sv(n,p.id,p.original,p.index,p.depth,void 0,p.parentId);if(m.columnFilters=p.columnFilters,(d=p.subRows)!=null&&d.length&&u<o){if(m.subRows=a(p.subRows,u+1),p=m,e(p)&&!m.subRows.length){c.push(p),s[p.id]=p,i.push(p);continue}if(e(p)||m.subRows.length){c.push(p),s[p.id]=p,i.push(p);continue}}else p=m,e(p)&&(c.push(p),s[p.id]=p,i.push(p))}return c};return{rows:a(t),flatRows:i,rowsById:s}}function rF(t,e,n){var r;const i=[],s={},o=(r=n.options.maxLeafRowFilterDepth)!=null?r:100,a=function(l,u){u===void 0&&(u=0);const c=[];for(let f=0;f<l.length;f++){let p=l[f];if(e(p)){var d;if((d=p.subRows)!=null&&d.length&&u<o){const _=Sv(n,p.id,p.original,p.index,p.depth,void 0,p.parentId);_.subRows=a(p.subRows,u+1),p=_}c.push(p),i.push(p),s[p.id]=p}}return c};return{rows:a(t),flatRows:i,rowsById:s}}function iF(){return t=>B(()=>[t.getPreFilteredRowModel(),t.getState().columnFilters,t.getState().globalFilter],(e,n,r)=>{if(!e.rows.length||!(n!=null&&n.length)&&!r){for(let f=0;f<e.flatRows.length;f++)e.flatRows[f].columnFilters={},e.flatRows[f].columnFiltersMeta={};return e}const i=[],s=[];(n??[]).forEach(f=>{var p;const m=t.getColumn(f.id);if(!m)return;const _=m.getFilterFn();_&&i.push({id:f.id,filterFn:_,resolvedValue:(p=_.resolveFilterValue==null?void 0:_.resolveFilterValue(f.value))!=null?p:f.value})});const o=n.map(f=>f.id),a=t.getGlobalFilterFn(),l=t.getAllLeafColumns().filter(f=>f.getCanGlobalFilter());r&&a&&l.length&&(o.push("__global__"),l.forEach(f=>{var p;s.push({id:f.id,filterFn:a,resolvedValue:(p=a.resolveFilterValue==null?void 0:a.resolveFilterValue(r))!=null?p:r})}));let u,c;for(let f=0;f<e.flatRows.length;f++){const p=e.flatRows[f];if(p.columnFilters={},i.length)for(let m=0;m<i.length;m++){u=i[m];const _=u.id;p.columnFilters[_]=u.filterFn(p,_,u.resolvedValue,w=>{p.columnFiltersMeta[_]=w})}if(s.length){for(let m=0;m<s.length;m++){c=s[m];const _=c.id;if(c.filterFn(p,_,c.resolvedValue,w=>{p.columnFiltersMeta[_]=w})){p.columnFilters.__global__=!0;break}}p.columnFilters.__global__!==!0&&(p.columnFilters.__global__=!1)}}const d=f=>{for(let p=0;p<o.length;p++)if(f.columnFilters[o[p]]===!1)return!1;return!0};return tF(e.rows,d,t)},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable},onChange:()=>{t._autoResetPageIndex()}})}function sF(){return t=>B(()=>[t.getState().sorting,t.getPreSortedRowModel()],(e,n)=>{if(!n.rows.length||!(e!=null&&e.length))return n;const r=t.getState().sorting,i=[],s=r.filter(l=>{var u;return(u=t.getColumn(l.id))==null?void 0:u.getCanSort()}),o={};s.forEach(l=>{const u=t.getColumn(l.id);u&&(o[l.id]={sortUndefined:u.columnDef.sortUndefined,invertSorting:u.columnDef.invertSorting,sortingFn:u.getSortingFn()})});const a=l=>{const u=l.map(c=>({...c}));return u.sort((c,d)=>{for(let p=0;p<s.length;p+=1){var f;const m=s[p],_=o[m.id],w=(f=m==null?void 0:m.desc)!=null?f:!1;let g=0;if(_.sortUndefined){const v=c.getValue(m.id),y=d.getValue(m.id),E=v===void 0,I=y===void 0;(E||I)&&(g=E&&I?0:E?_.sortUndefined:-_.sortUndefined)}if(g===0&&(g=_.sortingFn(c,d,m.id)),g!==0)return w&&(g*=-1),_.invertSorting&&(g*=-1),g}return c.index-d.index}),u.forEach(c=>{var d;i.push(c),(d=c.subRows)!=null&&d.length&&(c.subRows=a(c.subRows))}),u};return{rows:a(n.rows),flatRows:i,rowsById:n.rowsById}},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable},onChange:()=>{t._autoResetPageIndex()}})}function oF(t){const e=[],n=r=>{var i;e.push(r),(i=r.subRows)!=null&&i.length&&r.getIsExpanded()&&r.subRows.forEach(n)};return t.rows.forEach(n),{rows:e,flatRows:t.flatRows,rowsById:t.rowsById}}function aF(t){return e=>B(()=>[e.getState().pagination,e.getPrePaginationRowModel(),e.options.paginateExpandedRows?void 0:e.getState().expanded],(n,r)=>{if(!r.rows.length)return r;const{pageSize:i,pageIndex:s}=n;let{rows:o,flatRows:a,rowsById:l}=r;const u=i*s,c=u+i;o=o.slice(u,c);let d;e.options.paginateExpandedRows?d={rows:o,flatRows:a,rowsById:l}:d=oF({rows:o,flatRows:a,rowsById:l}),d.flatRows=[];const f=p=>{d.flatRows.push(p),p.subRows.length&&p.subRows.forEach(f)};return d.rows.forEach(f),d},{key:!1,debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugTable}})}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function z0(t,e){return t?lF(t)?S.createElement(t,e):t:null}function lF(t){return uF(t)||typeof t=="function"||cF(t)}function uF(t){return typeof t=="function"&&(()=>{const e=Object.getPrototypeOf(t);return e.prototype&&e.prototype.isReactComponent})()}function cF(t){return typeof t=="object"&&typeof t.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(t.$$typeof.description)}function dF(t){const e={state:{},onStateChange:()=>{},renderFallbackValue:null,...t},[n]=S.useState(()=>({current:J3(e)})),[r,i]=S.useState(()=>n.current.initialState);return n.current.setOptions(s=>({...s,...t,state:{...r,...t.state},onStateChange:o=>{i(o),t.onStateChange==null||t.onStateChange(o)}})),n.current}function $d({columns:t,data:e}){const[n,r]=S.useState([]),[i,s]=S.useState(""),o=dF({data:S.useMemo(()=>e,[e]),rows:e,columns:t,getCoreRowModel:eF(),getPaginationRowModel:aF(),getSortedRowModel:sF(),getFilteredRowModel:iF(),state:{sorting:n,globalFilter:i},onSortingChange:r,onGlobalFilterChange:s});return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"tablaa",children:[h.jsx("div",{className:"oktable",children:h.jsx("input",{className:"search-in",type:"text",value:i,onChange:a=>s(a.target.value),placeholder:"🔍  Search "})}),h.jsx("div",{className:"got t-bg",children:h.jsxs("table",{border:1,className:"data-table `${ok}`",children:[h.jsx("thead",{children:o.getHeaderGroups().map(a=>h.jsx("tr",{children:a.headers.map(l=>h.jsx("th",{className:l.column.className,onClick:l.column.getToggleSortingHandler(),children:l.isPlaceholder?null:h.jsxs("div",{children:[z0(l.column.columnDef.header,l.getContext()),{asc:"    ⬆️",desc:"    ⬇️",default:"    "}[l.column.getIsSorted()||"default"]]})},l.id))},a.id))}),h.jsx("tbody",{children:o.getRowModel().rows.map(a=>h.jsx("tr",{children:a.getVisibleCells().map(l=>h.jsx("td",{children:z0(l.column.columnDef.cell,l.getContext())},l.id))},a.id))})]})})]}),h.jsxs("div",{className:"pageController",children:[h.jsx("div",{className:"searching"}),h.jsxs("div",{className:"data-table-btn",children:[h.jsx("button",{disabled:!o.getCanPreviousPage(),onClick:()=>o.setPageIndex(0),children:h.jsx(ve,{icon:G6})}),h.jsx("button",{disabled:!o.getCanPreviousPage(),onClick:()=>o.previousPage(),children:h.jsx(ve,{icon:Q6})}),h.jsx("button",{disabled:!o.getCanNextPage(),onClick:()=>o.nextPage(),children:h.jsx(ve,{icon:K6})}),h.jsx("button",{disabled:!o.getCanNextPage(),onClick:()=>o.setPageIndex(o.getPageCount()-1),children:h.jsx(ve,{icon:t3})}),h.jsxs("span",{children:[h.jsx("div",{children:"Page"}),h.jsxs("strong",{children:[o.getState().pagination.pageIndex+1," of"," ",o.getPageCount()]})]})]})]})]})}function hF(){const t=sT(Bi),{newsData:e,loading:n,updatedNews:r}=ri(),[i,s]=S.useState([]),o=S.useRef(),{displayName:a,email:l}=ml(),[u,c]=S.useState({}),[d,f]=S.useState(null),[p,m]=S.useState(!0);S.useEffect(()=>{(async()=>{try{if(p){const I=bn(t,"News"),C=(await dl(I)).docs.map(N=>({id:N.id,...N.data()}));let T=C;a&&l!=="aadarshkumarman@gmail.com"&&(T=C.filter(N=>N.authorName===a)),s(T),r(T),m(!1)}}catch(I){console.error("Error fetching news data:",I),m(!1)}})()},[t,a,r,p]);const _=async()=>{try{let E=u.image||u.imageURL;if(u.image&&typeof u.image!="string"){const T=iv(IM,`images/${Date.now()}_${u.image.name}`);await nv(T,u.image),E=await rv(T)}const I={...u,image:E},R=$s(t,"News",u.id);await cL(R,I),o.current.close(),$.success("News Updated Successfully"),m(!0);const C=e.map(T=>T.id===u.id?{...T,...I}:T);r(C)}catch(E){$.error(`${E}`),console.error("Error saving news:",E)}finally{m(!0)}},w=async E=>{try{await bd($s(t,"News",E));const I=i.filter(R=>R.id!==E);s(I),r(I),$.success("News deleted",{closeOnClick:!0,pauseOnHover:!1})}catch(I){$.error(`${I}`),console.error("Error deleting news:",I)}},g=(E,I)=>{c({...u,[I]:E.target.value})},v=E=>{const I=E.target.files[0];c({...u,image:I}),f(URL.createObjectURL(I))},y=[{header:"SN",cell:({row:E})=>`${+E.id+1}`},{header:"News Id",accessorKey:"id"},{header:"Heading",accessorKey:"heading"},{header:"Author Name",accessorKey:"authorName"},{header:"Action",cell:({row:E})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>{o.current.showModal(),m(!0),c({id:E.original.id,heading:E.original.heading,description:E.original.description,category:E.original.category,image:E.original.image,authorName:E.original.authorName}),E.original.image&&f(E.original.image)},children:"Edit"}),h.jsx("button",{onClick:()=>w(E.original.id),children:"Delete"})]})}];return n?h.jsx(Jt,{children:h.jsx(fn,{})}):h.jsx(h.Fragment,{children:h.jsxs(Jt,{children:[h.jsx($d,{columns:y,data:i}),h.jsxs("dialog",{ref:o,children:[h.jsx("button",{onClick:()=>{o.current.close()},children:"x"}),h.jsxs("div",{className:"updateNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:u.heading,onChange:E=>g(E,"heading"),cols:"1",rows:"1",required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:u.description,onChange:E=>g(E,"description"),cols:"5",rows:"15",required:!0})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:v}),d&&h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Initial Image Preview:"}),h.jsx("img",{src:d,alt:"Initial Preview",style:{width:"100px",height:"100px"}})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Category"}),h.jsxs("select",{name:"category",id:"category",value:u.category,onChange:E=>g(E,"category"),required:!0,children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:u.isBreaking,onChange:E=>g(E,"isBreaking"),children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Author Name"}),h.jsx("input",{type:"text",readOnly:!0,value:a})]})]}),h.jsx("button",{onClick:_,children:"Save"})]})]})]})})}const fF=()=>{const t=S.useRef(),[e,n]=S.useState([]),[r,i]=S.useState(null),[s,o]=S.useState({}),[a,l]=S.useState(null);S.useEffect(()=>{(async()=>{const _=bn(Qt,"Alert"),w=await dl(_),g=[];w.forEach(v=>{g.push({id:v.id,...v.data()})}),n(g)})()},[]);const u=async()=>{try{const m={heading:s.heading,category:s.category,image:s.image,description:s.description,authorName:s.authorName,isBreaking:s.isBreaking==="true"};await hl(bn(Qt,"News"),m),t.current.close(),$.success("News Posted successfully")}catch(m){console.error("Error adding news: ",m),$.error(`${m}`)}},c=async m=>{try{await bd($s(Qt,"Alert",m)),n(e.filter(_=>_.id!==m)),$.success("News Deleted successfully")}catch(_){console.error("Error deleting news: ",_),$.error(`${_}`)}},d=(m,_)=>{o({...s,[_]:m.target.value})},f=m=>{o({...s,image:m.target.files[0]}),l(URL.createObjectURL(m.target.files[0]))},p=[{header:"S.N.",cell:({row:m})=>`${+m.id+1}`},{header:"Heading",accessorKey:"heading"},{header:"Action",cell:({row:m})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>{t.current.showModal(),i(m.original),o({heading:m.original.heading,category:m.original.category,image:m.original.image,description:m.original.description,authorName:m.original.authorName}),m.original.image&&l(m.original.image)},children:"Details"}),h.jsx("button",{onClick:()=>c(m.original.id),children:"Delete"})]})}];return e.length===0?h.jsx(Jt,{children:h.jsx(fn,{})}):h.jsxs(Jt,{children:[h.jsx($d,{columns:p,data:e}),h.jsx("div",{className:"haveNews",children:h.jsx("dialog",{ref:t,children:r&&h.jsx(h.Fragment,{children:h.jsxs("div",{className:"haveNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Suitable Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:s.heading,onChange:m=>d(m,"heading"),cols:"4",rows:"4"})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:s.description,onChange:m=>d(m,"description"),cols:"15",rows:"15"})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:f}),a&&h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Initial Image Preview:"}),h.jsx("img",{src:a,alt:"Initial Preview",style:{width:"100px",height:"100px"}})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Related Category"}),h.jsxs("select",{name:"category",id:"category",value:s.category,onChange:m=>d(m,"category"),children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:s.isBreaking,onChange:m=>d(m,"isBreaking"),children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Your Name"}),h.jsx("input",{type:"text",id:"authorName",name:"authorName",value:s.authorName,onChange:m=>d(m,"authorName")})]})]}),h.jsx("button",{onClick:u,children:"Post News"}),h.jsx("button",{onClick:()=>{t.current.close()},children:"close"})]})})})})]})};function pF(){const{newsData:t,loading:e}=ri(),[n,r]=S.useState(null),i=t.filter(o=>o.category==="technology");if(e)return h.jsx(kt,{children:h.jsx(fn,{})});const s=o=>{r(i[o])};return h.jsxs(kt,{children:[h.jsx("div",{className:"pageName ",children:"Technology"}),n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:i.slice(0,4).map((o,a)=>h.jsx(eo,{news:o,onClick:()=>s(a)},a))})]})}function gF(){const{newsData:t,loading:e}=ri(),[n,r]=S.useState(null),i=t.filter(o=>o.category==="education");if(e)return h.jsx(kt,{children:h.jsx(fn,{})});const s=o=>{r(i[o])};return h.jsxs(kt,{children:[h.jsx("div",{className:"pageName",children:"Education"}),n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:i.slice(0,4).map((o,a)=>h.jsx(eo,{news:o,onClick:()=>s(a)},a))})]})}function mF(){const{newsData:t,loading:e}=ri(),[n,r]=S.useState(null),i=t.filter(o=>o.category==="politics");if(e)return h.jsx(kt,{children:h.jsx(fn,{})});const s=o=>{r(i[o])};return h.jsxs(kt,{children:[h.jsx("div",{className:"pageName",children:"Politics"}),n?h.jsx(no,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:i.slice(0,4).map((o,a)=>h.jsx(eo,{news:o,onClick:()=>s(a)},a))})]})}function vF(){const[t,e]=S.useState([]),[n,r]=S.useState(null),[i,s]=S.useState(!0),o=S.useRef(null);S.useEffect(()=>{(async()=>{try{const d=bn(Qt,"contactForm"),f=await dl(d),p=[];f.forEach(m=>{p.push({id:m.id,...m.data()})}),e(p)}catch(d){console.error("Error fetching contact data: ",d)}finally{s(!1)}})()},[]);const a=c=>{r(c),o.current.showModal()},l=async c=>{try{await bd($s(Qt,"contactForm",c)),e(t.filter(d=>d.id!==c)),$.success("Contact Deleted")}catch(d){console.error("Error deleting news: ",d),$.error(`${d.message}`)}},u=[{header:"S.N.",cell:({row:c})=>`${+c.id+1}`},{header:"Name",accessorKey:"name"},{header:"Mobile",accessorKey:"phone"},{header:"Action",cell:({row:c})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>a(c.original),children:"Details"}),h.jsx("button",{onClick:()=>l(c.original.id),children:"Delete"})]})}];return i?h.jsx(Jt,{children:h.jsx(fn,{})}):h.jsxs(Jt,{children:[h.jsx($d,{columns:u,data:t}),h.jsx("dialog",{ref:o,children:n&&h.jsxs("div",{children:[h.jsxs("p",{children:["Name: ",n.name]}),h.jsxs("p",{children:["Mobile: ",n.phone]}),h.jsxs("p",{children:["Email: ",n.email]}),h.jsxs("p",{children:["Message: ",n.message]}),h.jsx("button",{onClick:()=>o.current.close(),children:"Close"})]})})]})}function yF(){const[t,e]=S.useState([]),[n,r]=S.useState(null),[i,s]=S.useState(!0),o=S.useRef(null);S.useEffect(()=>{(async()=>{try{const d=bn(Qt,"suggestionForm"),f=await dl(d),p=[];f.forEach(m=>{p.push({id:m.id,...m.data()})}),e(p)}catch{}finally{s(!1)}})()},[]);const a=c=>{r(c),o.current.showModal()},l=async c=>{try{await bd($s(Qt,"suggestionForm",c)),e(t.filter(d=>d.id!==c)),$.success("Suggestion Deleted")}catch(d){$.error(`${d}`)}},u=[{header:"S.N.",cell:({row:c})=>`${+c.id+1}`},{header:"Name",accessorKey:"name"},{header:"Action",cell:({row:c})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>a(c.original),children:"Details"}),h.jsx("button",{onClick:()=>l(c.original.id),children:"Delete"})]})}];return i?h.jsx(Jt,{children:h.jsx(fn,{})}):h.jsxs(Jt,{children:[h.jsx($d,{columns:u,data:t}),h.jsx("dialog",{ref:o,children:n&&h.jsxs("div",{children:[h.jsxs("p",{children:["Name: ",n.name]}),h.jsxs("p",{children:["Email: ",n.email]}),h.jsxs("p",{children:["Suggestion: ",n.suggestion]}),h.jsx("button",{onClick:()=>o.current.close(),children:"Close"})]})})]})}function _F(){const[t,e]=S.useState(""),[n,r]=S.useState(!1),i=()=>{const s=em();V2(s,t).then(()=>{r(!0),e(""),$.success("Reset link sent successfully")}).catch(o=>{const a=o;console.log(o),$.error(`${a}`),r(!1)})};return h.jsx("div",{className:"reset login",children:h.jsxs("div",{className:"resetPw loginPage",children:[h.jsx("h2",{children:"Reset Password"}),h.jsx("input",{type:"email",placeholder:"Enter your email",value:t,onChange:s=>e(s.target.value)}),h.jsx("button",{onClick:i,children:"Reset Password"}),n&&h.jsxs(h.Fragment,{children:[h.jsx("p",{children:"Password reset email sent successfully!"}),h.jsx(Qc,{to:"/News_Portal/admin",className:"resetToLogin",children:"Login"})]})]})})}function wF(){return h.jsx(tP,{children:h.jsx(CM,{children:h.jsx(l3,{children:h.jsxs(Kk,{children:[h.jsx(ke,{path:"/News_Portal/admin",element:h.jsx(g3,{})}),h.jsx(ke,{path:"/News_Portal/haveNews",element:h.jsx(y3,{})}),h.jsx(ke,{path:"/News_Portal",element:h.jsx(s3,{})}),h.jsx(ke,{path:"/News_Portal/technology",element:h.jsx(pF,{})}),h.jsx(ke,{path:"/News_Portal/entertainment",element:h.jsx(o3,{})}),h.jsx(ke,{path:"/News_Portal/sport",element:h.jsx(a3,{})}),h.jsx(ke,{path:"/News_Portal/education",element:h.jsx(gF,{})}),h.jsx(ke,{path:"/News_Portal/politics",element:h.jsx(mF,{})}),h.jsxs(ke,{path:"",element:h.jsx(f3,{}),children:[h.jsx(ke,{path:"/News_Portal/dashboard",element:h.jsx(m3,{})}),h.jsx(ke,{path:"/News_Portal/addNews",element:h.jsx(h3,{})}),h.jsx(ke,{path:"/News_Portal/addUser",element:h.jsx(p3,{})}),h.jsx(ke,{path:"/News_Portal/traffic",element:h.jsx(w3,{})}),h.jsx(ke,{path:"/News_Portal/adminNews",element:h.jsx(hF,{})}),h.jsx(ke,{path:"/News_Portal/adminHaveNews",element:h.jsx(fF,{})}),h.jsx(ke,{path:"/News_Portal/adminContact",element:h.jsx(vF,{})}),h.jsx(ke,{path:"/News_Portal/adminSuggestion",element:h.jsx(yF,{})})]}),h.jsx(ke,{path:"/*",element:h.jsx(_3,{})}),h.jsx(ke,{path:"/News_Portal/suggestion",element:h.jsx($T,{})}),h.jsx(ke,{path:"/News_Portal/reset",element:h.jsx(_F,{})})]})})})})}Gh.createRoot(document.getElementById("root")).render(h.jsxs(h.Fragment,{children:[h.jsx(wF,{}),h.jsx(jM,{})]}));
