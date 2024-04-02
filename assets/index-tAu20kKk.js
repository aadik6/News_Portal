function rC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var w0={exports:{}},ac={},E0={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _a=Symbol.for("react.element"),iC=Symbol.for("react.portal"),sC=Symbol.for("react.fragment"),oC=Symbol.for("react.strict_mode"),aC=Symbol.for("react.profiler"),lC=Symbol.for("react.provider"),uC=Symbol.for("react.context"),cC=Symbol.for("react.forward_ref"),dC=Symbol.for("react.suspense"),hC=Symbol.for("react.memo"),fC=Symbol.for("react.lazy"),ev=Symbol.iterator;function pC(t){return t===null||typeof t!="object"?null:(t=ev&&t[ev]||t["@@iterator"],typeof t=="function"?t:null)}var S0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},I0=Object.assign,T0={};function As(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||S0}As.prototype.isReactComponent={};As.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};As.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C0(){}C0.prototype=As.prototype;function wp(t,e,n){this.props=t,this.context=e,this.refs=T0,this.updater=n||S0}var Ep=wp.prototype=new C0;Ep.constructor=wp;I0(Ep,As.prototype);Ep.isPureReactComponent=!0;var tv=Array.isArray,R0=Object.prototype.hasOwnProperty,Sp={current:null},A0={key:!0,ref:!0,__self:!0,__source:!0};function k0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)R0.call(e,r)&&!A0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:_a,type:t,key:s,ref:o,props:i,_owner:Sp.current}}function gC(t,e){return{$$typeof:_a,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ip(t){return typeof t=="object"&&t!==null&&t.$$typeof===_a}function mC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var nv=/\/+/g;function yd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?mC(""+t.key):e.toString(36)}function jl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _a:case iC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yd(o,0):r,tv(i)?(n="",t!=null&&(n=t.replace(nv,"$&/")+"/"),jl(i,e,n,"",function(u){return u})):i!=null&&(Ip(i)&&(i=gC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(nv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",tv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+yd(s,a);o+=jl(s,e,n,l,i)}else if(l=pC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+yd(s,a++),o+=jl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ja(t,e,n){if(t==null)return t;var r=[],i=0;return jl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function vC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ct={current:null},$l={transition:null},yC={ReactCurrentDispatcher:ct,ReactCurrentBatchConfig:$l,ReactCurrentOwner:Sp};Y.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!Ip(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=As;Y.Fragment=sC;Y.Profiler=aC;Y.PureComponent=wp;Y.StrictMode=oC;Y.Suspense=dC;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yC;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=I0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Sp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)R0.call(e,l)&&!A0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:_a,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:uC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lC,_context:t},t.Consumer=t};Y.createElement=k0;Y.createFactory=function(t){var e=k0.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:cC,render:t}};Y.isValidElement=Ip;Y.lazy=function(t){return{$$typeof:fC,_payload:{_status:-1,_result:t},_init:vC}};Y.memo=function(t,e){return{$$typeof:hC,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=$l.transition;$l.transition={};try{t()}finally{$l.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return ct.current.useCallback(t,e)};Y.useContext=function(t){return ct.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return ct.current.useDeferredValue(t)};Y.useEffect=function(t,e){return ct.current.useEffect(t,e)};Y.useId=function(){return ct.current.useId()};Y.useImperativeHandle=function(t,e,n){return ct.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return ct.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return ct.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return ct.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return ct.current.useReducer(t,e,n)};Y.useRef=function(t){return ct.current.useRef(t)};Y.useState=function(t){return ct.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return ct.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return ct.current.useTransition()};Y.version="18.2.0";E0.exports=Y;var I=E0.exports;const Tp=_0(I),_C=rC({__proto__:null,default:Tp},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wC=I,EC=Symbol.for("react.element"),SC=Symbol.for("react.fragment"),IC=Object.prototype.hasOwnProperty,TC=wC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CC={key:!0,ref:!0,__self:!0,__source:!0};function x0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)IC.call(e,r)&&!CC.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:EC,type:t,key:s,ref:o,props:i,_owner:TC.current}}ac.Fragment=SC;ac.jsx=x0;ac.jsxs=x0;w0.exports=ac;var h=w0.exports,Th={},P0={exports:{}},xt={},N0={exports:{}},b0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,G){var q=O.length;O.push(G);e:for(;0<q;){var Se=q-1>>>1,De=O[Se];if(0<i(De,G))O[Se]=G,O[q]=De,q=Se;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var G=O[0],q=O.pop();if(q!==G){O[0]=q;e:for(var Se=0,De=O.length,Ya=De>>>1;Se<Ya;){var Ur=2*(Se+1)-1,vd=O[Ur],zr=Ur+1,Xa=O[zr];if(0>i(vd,q))zr<De&&0>i(Xa,vd)?(O[Se]=Xa,O[zr]=q,Se=zr):(O[Se]=vd,O[Ur]=q,Se=Ur);else if(zr<De&&0>i(Xa,q))O[Se]=Xa,O[zr]=q,Se=zr;else break e}}return G}function i(O,G){var q=O.sortIndex-G.sortIndex;return q!==0?q:O.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,v=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var G=n(u);G!==null;){if(G.callback===null)r(u);else if(G.startTime<=O)r(u),G.sortIndex=G.expirationTime,e(l,G);else break;G=n(u)}}function E(O){if(_=!1,y(O),!v)if(n(l)!==null)v=!0,gd(S);else{var G=n(u);G!==null&&md(E,G.startTime-O)}}function S(O,G){v=!1,_&&(_=!1,g(P),P=-1),p=!0;var q=f;try{for(y(G),d=n(l);d!==null&&(!(d.expirationTime>G)||O&&!ht());){var Se=d.callback;if(typeof Se=="function"){d.callback=null,f=d.priorityLevel;var De=Se(d.expirationTime<=G);G=t.unstable_now(),typeof De=="function"?d.callback=De:d===n(l)&&r(l),y(G)}else r(l);d=n(l)}if(d!==null)var Ya=!0;else{var Ur=n(u);Ur!==null&&md(E,Ur.startTime-G),Ya=!1}return Ya}finally{d=null,f=q,p=!1}}var A=!1,k=null,P=-1,H=5,F=-1;function ht(){return!(t.unstable_now()-F<H)}function $s(){if(k!==null){var O=t.unstable_now();F=O;var G=!0;try{G=k(!0,O)}finally{G?Us():(A=!1,k=null)}}else A=!1}var Us;if(typeof m=="function")Us=function(){m($s)};else if(typeof MessageChannel<"u"){var Zm=new MessageChannel,nC=Zm.port2;Zm.port1.onmessage=$s,Us=function(){nC.postMessage(null)}}else Us=function(){w($s,0)};function gd(O){k=O,A||(A=!0,Us())}function md(O,G){P=w(function(){O(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,gd(S))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var G=3;break;default:G=f}var q=f;f=G;try{return O()}finally{f=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,G){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=f;f=O;try{return G()}finally{f=q}},t.unstable_scheduleCallback=function(O,G,q){var Se=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?Se+q:Se):q=Se,O){case 1:var De=-1;break;case 2:De=250;break;case 5:De=1073741823;break;case 4:De=1e4;break;default:De=5e3}return De=q+De,O={id:c++,callback:G,priorityLevel:O,startTime:q,expirationTime:De,sortIndex:-1},q>Se?(O.sortIndex=q,e(u,O),n(l)===null&&O===n(u)&&(_?(g(P),P=-1):_=!0,md(E,q-Se))):(O.sortIndex=De,e(l,O),v||p||(v=!0,gd(S))),O},t.unstable_shouldYield=ht,t.unstable_wrapCallback=function(O){var G=f;return function(){var q=f;f=G;try{return O.apply(this,arguments)}finally{f=q}}}})(b0);N0.exports=b0;var RC=N0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=I,Rt=RC;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D0=new Set,No={};function Ei(t,e){us(t,e),us(t+"Capture",e)}function us(t,e){for(No[t]=e,t=0;t<e.length;t++)D0.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ch=Object.prototype.hasOwnProperty,AC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rv={},iv={};function kC(t){return Ch.call(iv,t)?!0:Ch.call(rv,t)?!1:AC.test(t)?iv[t]=!0:(rv[t]=!0,!1)}function xC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function PC(t,e,n,r){if(e===null||typeof e>"u"||xC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cp=/[\-:]([a-z])/g;function Rp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cp,Rp);qe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cp,Rp);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cp,Rp);qe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ap(t,e,n,r){var i=qe.hasOwnProperty(e)?qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(PC(e,n,i,r)&&(n=null),r||i===null?kC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $n=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Di=Symbol.for("react.portal"),Li=Symbol.for("react.fragment"),kp=Symbol.for("react.strict_mode"),Rh=Symbol.for("react.profiler"),L0=Symbol.for("react.provider"),M0=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),Ah=Symbol.for("react.suspense"),kh=Symbol.for("react.suspense_list"),Pp=Symbol.for("react.memo"),Qn=Symbol.for("react.lazy"),V0=Symbol.for("react.offscreen"),sv=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=sv&&t[sv]||t["@@iterator"],typeof t=="function"?t:null)}var ge=Object.assign,_d;function to(t){if(_d===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_d=e&&e[1]||""}return`
`+_d+t}var wd=!1;function Ed(t,e){if(!t||wd)return"";wd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function NC(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=Ed(t.type,!1),t;case 11:return t=Ed(t.type.render,!1),t;case 1:return t=Ed(t.type,!0),t;default:return""}}function xh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Li:return"Fragment";case Di:return"Portal";case Rh:return"Profiler";case kp:return"StrictMode";case Ah:return"Suspense";case kh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case M0:return(t.displayName||"Context")+".Consumer";case L0:return(t._context.displayName||"Context")+".Provider";case xp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pp:return e=t.displayName||null,e!==null?e:xh(t.type)||"Memo";case Qn:e=t._payload,t=t._init;try{return xh(t(e))}catch{}}return null}function bC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xh(e);case 8:return e===kp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function F0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function OC(t){var e=F0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function el(t){t._valueTracker||(t._valueTracker=OC(t))}function j0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=F0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function au(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ph(t,e){var n=e.checked;return ge({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ov(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $0(t,e){e=e.checked,e!=null&&Ap(t,"checked",e,!1)}function Nh(t,e){$0(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bh(t,e.type,n):e.hasOwnProperty("defaultValue")&&bh(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function av(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bh(t,e,n){(e!=="number"||au(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function Xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Oh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return ge({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function lv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(no(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function U0(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function uv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function z0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?z0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var tl,B0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(tl=tl||document.createElement("div"),tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},DC=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){DC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function H0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function W0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=H0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var LC=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lh(t,e){if(e){if(LC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function Mh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vh=null;function Np(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fh=null,Ji=null,Zi=null;function cv(t){if(t=Sa(t)){if(typeof Fh!="function")throw Error(R(280));var e=t.stateNode;e&&(e=hc(e),Fh(t.stateNode,t.type,e))}}function G0(t){Ji?Zi?Zi.push(t):Zi=[t]:Ji=t}function q0(){if(Ji){var t=Ji,e=Zi;if(Zi=Ji=null,cv(t),e)for(t=0;t<e.length;t++)cv(e[t])}}function K0(t,e){return t(e)}function Q0(){}var Sd=!1;function Y0(t,e,n){if(Sd)return t(e,n);Sd=!0;try{return K0(t,e,n)}finally{Sd=!1,(Ji!==null||Zi!==null)&&(Q0(),q0())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var r=hc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var jh=!1;if(kn)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){jh=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{jh=!1}function MC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var po=!1,lu=null,uu=!1,$h=null,VC={onError:function(t){po=!0,lu=t}};function FC(t,e,n,r,i,s,o,a,l){po=!1,lu=null,MC.apply(VC,arguments)}function jC(t,e,n,r,i,s,o,a,l){if(FC.apply(this,arguments),po){if(po){var u=lu;po=!1,lu=null}else throw Error(R(198));uu||(uu=!0,$h=u)}}function Si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function X0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function dv(t){if(Si(t)!==t)throw Error(R(188))}function $C(t){var e=t.alternate;if(!e){if(e=Si(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return dv(i),t;if(s===r)return dv(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function J0(t){return t=$C(t),t!==null?Z0(t):null}function Z0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Z0(t);if(e!==null)return e;t=t.sibling}return null}var ew=Rt.unstable_scheduleCallback,hv=Rt.unstable_cancelCallback,UC=Rt.unstable_shouldYield,zC=Rt.unstable_requestPaint,Ie=Rt.unstable_now,BC=Rt.unstable_getCurrentPriorityLevel,bp=Rt.unstable_ImmediatePriority,tw=Rt.unstable_UserBlockingPriority,cu=Rt.unstable_NormalPriority,HC=Rt.unstable_LowPriority,nw=Rt.unstable_IdlePriority,lc=null,ln=null;function WC(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:KC,GC=Math.log,qC=Math.LN2;function KC(t){return t>>>=0,t===0?32:31-(GC(t)/qC|0)|0}var nl=64,rl=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function du(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ro(a):(s&=o,s!==0&&(r=ro(s)))}else o=n&~i,o!==0?r=ro(o):s!==0&&(r=ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Gt(e),i=1<<n,r|=t[n],e&=~i;return r}function QC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Gt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=QC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Uh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function rw(){var t=nl;return nl<<=1,!(nl&4194240)&&(nl=64),t}function Id(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Gt(e),t[e]=n}function XC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Op(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Gt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function iw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sw,Dp,ow,aw,lw,zh=!1,il=[],cr=null,dr=null,hr=null,Do=new Map,Lo=new Map,Xn=[],JC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fv(t,e){switch(t){case"focusin":case"focusout":cr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function Hs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Sa(e),e!==null&&Dp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ZC(t,e,n,r,i){switch(e){case"focusin":return cr=Hs(cr,t,e,n,r,i),!0;case"dragenter":return dr=Hs(dr,t,e,n,r,i),!0;case"mouseover":return hr=Hs(hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Do.set(s,Hs(Do.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Lo.set(s,Hs(Lo.get(s)||null,t,e,n,r,i)),!0}return!1}function uw(t){var e=Gr(t.target);if(e!==null){var n=Si(e);if(n!==null){if(e=n.tag,e===13){if(e=X0(n),e!==null){t.blockedOn=e,lw(t.priority,function(){ow(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Vh=r,n.target.dispatchEvent(r),Vh=null}else return e=Sa(n),e!==null&&Dp(e),t.blockedOn=n,!1;e.shift()}return!0}function pv(t,e,n){Ul(t)&&n.delete(e)}function eR(){zh=!1,cr!==null&&Ul(cr)&&(cr=null),dr!==null&&Ul(dr)&&(dr=null),hr!==null&&Ul(hr)&&(hr=null),Do.forEach(pv),Lo.forEach(pv)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,zh||(zh=!0,Rt.unstable_scheduleCallback(Rt.unstable_NormalPriority,eR)))}function Mo(t){function e(i){return Ws(i,t)}if(0<il.length){Ws(il[0],t);for(var n=1;n<il.length;n++){var r=il[n];r.blockedOn===t&&(r.blockedOn=null)}}for(cr!==null&&Ws(cr,t),dr!==null&&Ws(dr,t),hr!==null&&Ws(hr,t),Do.forEach(e),Lo.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)uw(n),n.blockedOn===null&&Xn.shift()}var es=$n.ReactCurrentBatchConfig,hu=!0;function tR(t,e,n,r){var i=te,s=es.transition;es.transition=null;try{te=1,Lp(t,e,n,r)}finally{te=i,es.transition=s}}function nR(t,e,n,r){var i=te,s=es.transition;es.transition=null;try{te=4,Lp(t,e,n,r)}finally{te=i,es.transition=s}}function Lp(t,e,n,r){if(hu){var i=Bh(t,e,n,r);if(i===null)Od(t,e,r,fu,n),fv(t,r);else if(ZC(i,t,e,n,r))r.stopPropagation();else if(fv(t,r),e&4&&-1<JC.indexOf(t)){for(;i!==null;){var s=Sa(i);if(s!==null&&sw(s),s=Bh(t,e,n,r),s===null&&Od(t,e,r,fu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Od(t,e,r,null,n)}}var fu=null;function Bh(t,e,n,r){if(fu=null,t=Np(r),t=Gr(t),t!==null)if(e=Si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=X0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fu=t,null}function cw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BC()){case bp:return 1;case tw:return 4;case cu:case HC:return 16;case nw:return 536870912;default:return 16}default:return 16}}var ir=null,Mp=null,zl=null;function dw(){if(zl)return zl;var t,e=Mp,n=e.length,r,i="value"in ir?ir.value:ir.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return zl=i.slice(t,1<r?1-r:void 0)}function Bl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function sl(){return!0}function gv(){return!1}function Pt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sl:gv,this.isPropagationStopped=gv,this}return ge(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vp=Pt(ks),Ea=ge({},ks,{view:0,detail:0}),rR=Pt(Ea),Td,Cd,Gs,uc=ge({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(Td=t.screenX-Gs.screenX,Cd=t.screenY-Gs.screenY):Cd=Td=0,Gs=t),Td)},movementY:function(t){return"movementY"in t?t.movementY:Cd}}),mv=Pt(uc),iR=ge({},uc,{dataTransfer:0}),sR=Pt(iR),oR=ge({},Ea,{relatedTarget:0}),Rd=Pt(oR),aR=ge({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),lR=Pt(aR),uR=ge({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cR=Pt(uR),dR=ge({},ks,{data:0}),vv=Pt(dR),hR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=pR[t])?!!e[t]:!1}function Fp(){return gR}var mR=ge({},Ea,{key:function(t){if(t.key){var e=hR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fp,charCode:function(t){return t.type==="keypress"?Bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vR=Pt(mR),yR=ge({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yv=Pt(yR),_R=ge({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fp}),wR=Pt(_R),ER=ge({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),SR=Pt(ER),IR=ge({},uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TR=Pt(IR),CR=[9,13,27,32],jp=kn&&"CompositionEvent"in window,go=null;kn&&"documentMode"in document&&(go=document.documentMode);var RR=kn&&"TextEvent"in window&&!go,hw=kn&&(!jp||go&&8<go&&11>=go),_v=" ",wv=!1;function fw(t,e){switch(t){case"keyup":return CR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mi=!1;function AR(t,e){switch(t){case"compositionend":return pw(e);case"keypress":return e.which!==32?null:(wv=!0,_v);case"textInput":return t=e.data,t===_v&&wv?null:t;default:return null}}function kR(t,e){if(Mi)return t==="compositionend"||!jp&&fw(t,e)?(t=dw(),zl=Mp=ir=null,Mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return hw&&e.locale!=="ko"?null:e.data;default:return null}}var xR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ev(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!xR[t.type]:e==="textarea"}function gw(t,e,n,r){G0(r),e=pu(e,"onChange"),0<e.length&&(n=new Vp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mo=null,Vo=null;function PR(t){Rw(t,0)}function cc(t){var e=ji(t);if(j0(e))return t}function NR(t,e){if(t==="change")return e}var mw=!1;if(kn){var Ad;if(kn){var kd="oninput"in document;if(!kd){var Sv=document.createElement("div");Sv.setAttribute("oninput","return;"),kd=typeof Sv.oninput=="function"}Ad=kd}else Ad=!1;mw=Ad&&(!document.documentMode||9<document.documentMode)}function Iv(){mo&&(mo.detachEvent("onpropertychange",vw),Vo=mo=null)}function vw(t){if(t.propertyName==="value"&&cc(Vo)){var e=[];gw(e,Vo,t,Np(t)),Y0(PR,e)}}function bR(t,e,n){t==="focusin"?(Iv(),mo=e,Vo=n,mo.attachEvent("onpropertychange",vw)):t==="focusout"&&Iv()}function OR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(Vo)}function DR(t,e){if(t==="click")return cc(e)}function LR(t,e){if(t==="input"||t==="change")return cc(e)}function MR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yt=typeof Object.is=="function"?Object.is:MR;function Fo(t,e){if(Yt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ch.call(e,i)||!Yt(t[i],e[i]))return!1}return!0}function Tv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Cv(t,e){var n=Tv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Tv(n)}}function yw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?yw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _w(){for(var t=window,e=au();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=au(t.document)}return e}function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function VR(t){var e=_w(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&yw(n.ownerDocument.documentElement,n)){if(r!==null&&$p(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Cv(n,s);var o=Cv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FR=kn&&"documentMode"in document&&11>=document.documentMode,Vi=null,Hh=null,vo=null,Wh=!1;function Rv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wh||Vi==null||Vi!==au(r)||(r=Vi,"selectionStart"in r&&$p(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vo&&Fo(vo,r)||(vo=r,r=pu(Hh,"onSelect"),0<r.length&&(e=new Vp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Vi)))}function ol(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fi={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},xd={},ww={};kn&&(ww=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function dc(t){if(xd[t])return xd[t];if(!Fi[t])return t;var e=Fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ww)return xd[t]=e[n];return t}var Ew=dc("animationend"),Sw=dc("animationiteration"),Iw=dc("animationstart"),Tw=dc("transitionend"),Cw=new Map,Av="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){Cw.set(t,e),Ei(e,[t])}for(var Pd=0;Pd<Av.length;Pd++){var Nd=Av[Pd],jR=Nd.toLowerCase(),$R=Nd[0].toUpperCase()+Nd.slice(1);Or(jR,"on"+$R)}Or(Ew,"onAnimationEnd");Or(Sw,"onAnimationIteration");Or(Iw,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Tw,"onTransitionEnd");us("onMouseEnter",["mouseout","mouseover"]);us("onMouseLeave",["mouseout","mouseover"]);us("onPointerEnter",["pointerout","pointerover"]);us("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UR=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function kv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,jC(r,e,void 0,t),t.currentTarget=null}function Rw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;kv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;kv(i,a,u),s=l}}}if(uu)throw t=$h,uu=!1,$h=null,t}function se(t,e){var n=e[Yh];n===void 0&&(n=e[Yh]=new Set);var r=t+"__bubble";n.has(r)||(Aw(e,t,2,!1),n.add(r))}function bd(t,e,n){var r=0;e&&(r|=4),Aw(n,t,r,e)}var al="_reactListening"+Math.random().toString(36).slice(2);function jo(t){if(!t[al]){t[al]=!0,D0.forEach(function(n){n!=="selectionchange"&&(UR.has(n)||bd(n,!1,t),bd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[al]||(e[al]=!0,bd("selectionchange",!1,e))}}function Aw(t,e,n,r){switch(cw(e)){case 1:var i=tR;break;case 4:i=nR;break;default:i=Lp}n=i.bind(null,e,n,t),i=void 0,!jh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Od(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Y0(function(){var u=s,c=Np(n),d=[];e:{var f=Cw.get(t);if(f!==void 0){var p=Vp,v=t;switch(t){case"keypress":if(Bl(n)===0)break e;case"keydown":case"keyup":p=vR;break;case"focusin":v="focus",p=Rd;break;case"focusout":v="blur",p=Rd;break;case"beforeblur":case"afterblur":p=Rd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=mv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=sR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=wR;break;case Ew:case Sw:case Iw:p=lR;break;case Tw:p=SR;break;case"scroll":p=rR;break;case"wheel":p=TR;break;case"copy":case"cut":case"paste":p=cR;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=yv}var _=(e&4)!==0,w=!_&&t==="scroll",g=_?f!==null?f+"Capture":null:f;_=[];for(var m=u,y;m!==null;){y=m;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,g!==null&&(E=Oo(m,g),E!=null&&_.push($o(m,E,y)))),w)break;m=m.return}0<_.length&&(f=new p(f,v,null,n,c),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Vh&&(v=n.relatedTarget||n.fromElement)&&(Gr(v)||v[xn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Gr(v):null,v!==null&&(w=Si(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(_=mv,E="onMouseLeave",g="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(_=yv,E="onPointerLeave",g="onPointerEnter",m="pointer"),w=p==null?f:ji(p),y=v==null?f:ji(v),f=new _(E,m+"leave",p,n,c),f.target=w,f.relatedTarget=y,E=null,Gr(c)===u&&(_=new _(g,m+"enter",v,n,c),_.target=y,_.relatedTarget=w,E=_),w=E,p&&v)t:{for(_=p,g=v,m=0,y=_;y;y=xi(y))m++;for(y=0,E=g;E;E=xi(E))y++;for(;0<m-y;)_=xi(_),m--;for(;0<y-m;)g=xi(g),y--;for(;m--;){if(_===g||g!==null&&_===g.alternate)break t;_=xi(_),g=xi(g)}_=null}else _=null;p!==null&&xv(d,f,p,_,!1),v!==null&&w!==null&&xv(d,w,v,_,!0)}}e:{if(f=u?ji(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var S=NR;else if(Ev(f))if(mw)S=LR;else{S=OR;var A=bR}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=DR);if(S&&(S=S(t,u))){gw(d,S,n,c);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&bh(f,"number",f.value)}switch(A=u?ji(u):window,t){case"focusin":(Ev(A)||A.contentEditable==="true")&&(Vi=A,Hh=u,vo=null);break;case"focusout":vo=Hh=Vi=null;break;case"mousedown":Wh=!0;break;case"contextmenu":case"mouseup":case"dragend":Wh=!1,Rv(d,n,c);break;case"selectionchange":if(FR)break;case"keydown":case"keyup":Rv(d,n,c)}var k;if(jp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Mi?fw(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(hw&&n.locale!=="ko"&&(Mi||P!=="onCompositionStart"?P==="onCompositionEnd"&&Mi&&(k=dw()):(ir=c,Mp="value"in ir?ir.value:ir.textContent,Mi=!0)),A=pu(u,P),0<A.length&&(P=new vv(P,t,null,n,c),d.push({event:P,listeners:A}),k?P.data=k:(k=pw(n),k!==null&&(P.data=k)))),(k=RR?AR(t,n):kR(t,n))&&(u=pu(u,"onBeforeInput"),0<u.length&&(c=new vv("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=k))}Rw(d,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Oo(t,n),s!=null&&r.unshift($o(t,s,i)),s=Oo(t,e),s!=null&&r.push($o(t,s,i))),t=t.return}return r}function xi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Oo(n,s),l!=null&&o.unshift($o(n,l,a))):i||(l=Oo(n,s),l!=null&&o.push($o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var zR=/\r\n?/g,BR=/\u0000|\uFFFD/g;function Pv(t){return(typeof t=="string"?t:""+t).replace(zR,`
`).replace(BR,"")}function ll(t,e,n){if(e=Pv(e),Pv(t)!==e&&n)throw Error(R(425))}function gu(){}var Gh=null,qh=null;function Kh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qh=typeof setTimeout=="function"?setTimeout:void 0,HR=typeof clearTimeout=="function"?clearTimeout:void 0,Nv=typeof Promise=="function"?Promise:void 0,WR=typeof queueMicrotask=="function"?queueMicrotask:typeof Nv<"u"?function(t){return Nv.resolve(null).then(t).catch(GR)}:Qh;function GR(t){setTimeout(function(){throw t})}function Dd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),tn="__reactFiber$"+xs,Uo="__reactProps$"+xs,xn="__reactContainer$"+xs,Yh="__reactEvents$"+xs,qR="__reactListeners$"+xs,KR="__reactHandles$"+xs;function Gr(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bv(t);t!==null;){if(n=t[tn])return n;t=bv(t)}return e}t=n,n=t.parentNode}return null}function Sa(t){return t=t[tn]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ji(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function hc(t){return t[Uo]||null}var Xh=[],$i=-1;function Dr(t){return{current:t}}function le(t){0>$i||(t.current=Xh[$i],Xh[$i]=null,$i--)}function re(t,e){$i++,Xh[$i]=t.current,t.current=e}var Tr={},rt=Dr(Tr),vt=Dr(!1),si=Tr;function cs(t,e){var n=t.type.contextTypes;if(!n)return Tr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function mu(){le(vt),le(rt)}function Ov(t,e,n){if(rt.current!==Tr)throw Error(R(168));re(rt,e),re(vt,n)}function kw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,bC(t)||"Unknown",i));return ge({},n,r)}function vu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Tr,si=rt.current,re(rt,t),re(vt,vt.current),!0}function Dv(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=kw(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,le(vt),le(rt),re(rt,t)):le(vt),re(vt,n)}var En=null,fc=!1,Ld=!1;function xw(t){En===null?En=[t]:En.push(t)}function QR(t){fc=!0,xw(t)}function Lr(){if(!Ld&&En!==null){Ld=!0;var t=0,e=te;try{var n=En;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,fc=!1}catch(i){throw En!==null&&(En=En.slice(t+1)),ew(bp,Lr),i}finally{te=e,Ld=!1}}return null}var Ui=[],zi=0,yu=null,_u=0,bt=[],Ot=0,oi=null,Sn=1,In="";function Br(t,e){Ui[zi++]=_u,Ui[zi++]=yu,yu=t,_u=e}function Pw(t,e,n){bt[Ot++]=Sn,bt[Ot++]=In,bt[Ot++]=oi,oi=t;var r=Sn;t=In;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sn=1<<32-Gt(e)+i|n<<i|r,In=s+t}else Sn=1<<s|n<<i|r,In=t}function Up(t){t.return!==null&&(Br(t,1),Pw(t,1,0))}function zp(t){for(;t===yu;)yu=Ui[--zi],Ui[zi]=null,_u=Ui[--zi],Ui[zi]=null;for(;t===oi;)oi=bt[--Ot],bt[Ot]=null,In=bt[--Ot],bt[Ot]=null,Sn=bt[--Ot],bt[Ot]=null}var Ct=null,St=null,ce=!1,Ht=null;function Nw(t,e){var n=Lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Lv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,St=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,St=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:Sn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,St=null,!0):!1;default:return!1}}function Jh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zh(t){if(ce){var e=St;if(e){var n=e;if(!Lv(t,e)){if(Jh(t))throw Error(R(418));e=fr(n.nextSibling);var r=Ct;e&&Lv(t,e)?Nw(r,n):(t.flags=t.flags&-4097|2,ce=!1,Ct=t)}}else{if(Jh(t))throw Error(R(418));t.flags=t.flags&-4097|2,ce=!1,Ct=t}}}function Mv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function ul(t){if(t!==Ct)return!1;if(!ce)return Mv(t),ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kh(t.type,t.memoizedProps)),e&&(e=St)){if(Jh(t))throw bw(),Error(R(418));for(;e;)Nw(t,e),e=fr(e.nextSibling)}if(Mv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){St=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}St=null}}else St=Ct?fr(t.stateNode.nextSibling):null;return!0}function bw(){for(var t=St;t;)t=fr(t.nextSibling)}function ds(){St=Ct=null,ce=!1}function Bp(t){Ht===null?Ht=[t]:Ht.push(t)}var YR=$n.ReactCurrentBatchConfig;function zt(t,e){if(t&&t.defaultProps){e=ge({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wu=Dr(null),Eu=null,Bi=null,Hp=null;function Wp(){Hp=Bi=Eu=null}function Gp(t){var e=wu.current;le(wu),t._currentValue=e}function ef(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ts(t,e){Eu=t,Hp=Bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function jt(t){var e=t._currentValue;if(Hp!==t)if(t={context:t,memoizedValue:e,next:null},Bi===null){if(Eu===null)throw Error(R(308));Bi=t,Eu.dependencies={lanes:0,firstContext:t}}else Bi=Bi.next=t;return e}var qr=null;function qp(t){qr===null?qr=[t]:qr.push(t)}function Ow(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Pn(t,r)}function Pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yn=!1;function Kp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Pn(t,n)}return i=r.interleaved,i===null?(e.next=e,qp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Pn(t,n)}function Hl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Op(t,n)}}function Vv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Su(t,e,n,r){var i=t.updateQueue;Yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,p=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(p,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(p,d,f):v,f==null)break e;d=ge({},d,f);break e;case 2:Yn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);li|=o,t.lanes=o,t.memoizedState=d}}function Fv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Lw=new O0.Component().refs;function tf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ge({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pc={isMounted:function(t){return(t=t._reactInternals)?Si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ut(),i=mr(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(qt(e,t,i,r),Hl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ut(),i=mr(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(qt(e,t,i,r),Hl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ut(),r=mr(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=pr(t,i,r),e!==null&&(qt(e,t,r,n),Hl(e,t,r))}};function jv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Fo(n,r)||!Fo(i,s):!0}function Mw(t,e,n){var r=!1,i=Tr,s=e.contextType;return typeof s=="object"&&s!==null?s=jt(s):(i=yt(e)?si:rt.current,r=e.contextTypes,s=(r=r!=null)?cs(t,i):Tr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function $v(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function nf(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Lw,Kp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=jt(s):(s=yt(e)?si:rt.current,i.context=cs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&pc.enqueueReplaceState(i,i.state,null),Su(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Lw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function cl(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Uv(t){var e=t._init;return e(t._payload)}function Vw(t){function e(g,m){if(t){var y=g.deletions;y===null?(g.deletions=[m],g.flags|=16):y.push(m)}}function n(g,m){if(!t)return null;for(;m!==null;)e(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function i(g,m){return g=vr(g,m),g.index=0,g.sibling=null,g}function s(g,m,y){return g.index=y,t?(y=g.alternate,y!==null?(y=y.index,y<m?(g.flags|=2,m):y):(g.flags|=2,m)):(g.flags|=1048576,m)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,m,y,E){return m===null||m.tag!==6?(m=zd(y,g.mode,E),m.return=g,m):(m=i(m,y),m.return=g,m)}function l(g,m,y,E){var S=y.type;return S===Li?c(g,m,y.props.children,E,y.key):m!==null&&(m.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qn&&Uv(S)===m.type)?(E=i(m,y.props),E.ref=qs(g,m,y),E.return=g,E):(E=Yl(y.type,y.key,y.props,null,g.mode,E),E.ref=qs(g,m,y),E.return=g,E)}function u(g,m,y,E){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=Bd(y,g.mode,E),m.return=g,m):(m=i(m,y.children||[]),m.return=g,m)}function c(g,m,y,E,S){return m===null||m.tag!==7?(m=ti(y,g.mode,E,S),m.return=g,m):(m=i(m,y),m.return=g,m)}function d(g,m,y){if(typeof m=="string"&&m!==""||typeof m=="number")return m=zd(""+m,g.mode,y),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Za:return y=Yl(m.type,m.key,m.props,null,g.mode,y),y.ref=qs(g,null,m),y.return=g,y;case Di:return m=Bd(m,g.mode,y),m.return=g,m;case Qn:var E=m._init;return d(g,E(m._payload),y)}if(no(m)||zs(m))return m=ti(m,g.mode,y,null),m.return=g,m;cl(g,m)}return null}function f(g,m,y,E){var S=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:a(g,m,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:return y.key===S?l(g,m,y,E):null;case Di:return y.key===S?u(g,m,y,E):null;case Qn:return S=y._init,f(g,m,S(y._payload),E)}if(no(y)||zs(y))return S!==null?null:c(g,m,y,E,null);cl(g,y)}return null}function p(g,m,y,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(y)||null,a(m,g,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Za:return g=g.get(E.key===null?y:E.key)||null,l(m,g,E,S);case Di:return g=g.get(E.key===null?y:E.key)||null,u(m,g,E,S);case Qn:var A=E._init;return p(g,m,y,A(E._payload),S)}if(no(E)||zs(E))return g=g.get(y)||null,c(m,g,E,S,null);cl(m,E)}return null}function v(g,m,y,E){for(var S=null,A=null,k=m,P=m=0,H=null;k!==null&&P<y.length;P++){k.index>P?(H=k,k=null):H=k.sibling;var F=f(g,k,y[P],E);if(F===null){k===null&&(k=H);break}t&&k&&F.alternate===null&&e(g,k),m=s(F,m,P),A===null?S=F:A.sibling=F,A=F,k=H}if(P===y.length)return n(g,k),ce&&Br(g,P),S;if(k===null){for(;P<y.length;P++)k=d(g,y[P],E),k!==null&&(m=s(k,m,P),A===null?S=k:A.sibling=k,A=k);return ce&&Br(g,P),S}for(k=r(g,k);P<y.length;P++)H=p(k,g,P,y[P],E),H!==null&&(t&&H.alternate!==null&&k.delete(H.key===null?P:H.key),m=s(H,m,P),A===null?S=H:A.sibling=H,A=H);return t&&k.forEach(function(ht){return e(g,ht)}),ce&&Br(g,P),S}function _(g,m,y,E){var S=zs(y);if(typeof S!="function")throw Error(R(150));if(y=S.call(y),y==null)throw Error(R(151));for(var A=S=null,k=m,P=m=0,H=null,F=y.next();k!==null&&!F.done;P++,F=y.next()){k.index>P?(H=k,k=null):H=k.sibling;var ht=f(g,k,F.value,E);if(ht===null){k===null&&(k=H);break}t&&k&&ht.alternate===null&&e(g,k),m=s(ht,m,P),A===null?S=ht:A.sibling=ht,A=ht,k=H}if(F.done)return n(g,k),ce&&Br(g,P),S;if(k===null){for(;!F.done;P++,F=y.next())F=d(g,F.value,E),F!==null&&(m=s(F,m,P),A===null?S=F:A.sibling=F,A=F);return ce&&Br(g,P),S}for(k=r(g,k);!F.done;P++,F=y.next())F=p(k,g,P,F.value,E),F!==null&&(t&&F.alternate!==null&&k.delete(F.key===null?P:F.key),m=s(F,m,P),A===null?S=F:A.sibling=F,A=F);return t&&k.forEach(function($s){return e(g,$s)}),ce&&Br(g,P),S}function w(g,m,y,E){if(typeof y=="object"&&y!==null&&y.type===Li&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:e:{for(var S=y.key,A=m;A!==null;){if(A.key===S){if(S=y.type,S===Li){if(A.tag===7){n(g,A.sibling),m=i(A,y.props.children),m.return=g,g=m;break e}}else if(A.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Qn&&Uv(S)===A.type){n(g,A.sibling),m=i(A,y.props),m.ref=qs(g,A,y),m.return=g,g=m;break e}n(g,A);break}else e(g,A);A=A.sibling}y.type===Li?(m=ti(y.props.children,g.mode,E,y.key),m.return=g,g=m):(E=Yl(y.type,y.key,y.props,null,g.mode,E),E.ref=qs(g,m,y),E.return=g,g=E)}return o(g);case Di:e:{for(A=y.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){n(g,m.sibling),m=i(m,y.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else e(g,m);m=m.sibling}m=Bd(y,g.mode,E),m.return=g,g=m}return o(g);case Qn:return A=y._init,w(g,m,A(y._payload),E)}if(no(y))return v(g,m,y,E);if(zs(y))return _(g,m,y,E);cl(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,m!==null&&m.tag===6?(n(g,m.sibling),m=i(m,y),m.return=g,g=m):(n(g,m),m=zd(y,g.mode,E),m.return=g,g=m),o(g)):n(g,m)}return w}var hs=Vw(!0),Fw=Vw(!1),Ia={},un=Dr(Ia),zo=Dr(Ia),Bo=Dr(Ia);function Kr(t){if(t===Ia)throw Error(R(174));return t}function Qp(t,e){switch(re(Bo,e),re(zo,t),re(un,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dh(e,t)}le(un),re(un,e)}function fs(){le(un),le(zo),le(Bo)}function jw(t){Kr(Bo.current);var e=Kr(un.current),n=Dh(e,t.type);e!==n&&(re(zo,t),re(un,n))}function Yp(t){zo.current===t&&(le(un),le(zo))}var he=Dr(0);function Iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Md=[];function Xp(){for(var t=0;t<Md.length;t++)Md[t]._workInProgressVersionPrimary=null;Md.length=0}var Wl=$n.ReactCurrentDispatcher,Vd=$n.ReactCurrentBatchConfig,ai=0,fe=null,xe=null,Me=null,Tu=!1,yo=!1,Ho=0,XR=0;function Ke(){throw Error(R(321))}function Jp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yt(t[n],e[n]))return!1;return!0}function Zp(t,e,n,r,i,s){if(ai=s,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wl.current=t===null||t.memoizedState===null?tA:nA,t=n(r,i),yo){s=0;do{if(yo=!1,Ho=0,25<=s)throw Error(R(301));s+=1,Me=xe=null,e.updateQueue=null,Wl.current=rA,t=n(r,i)}while(yo)}if(Wl.current=Cu,e=xe!==null&&xe.next!==null,ai=0,Me=xe=fe=null,Tu=!1,e)throw Error(R(300));return t}function eg(){var t=Ho!==0;return Ho=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?fe.memoizedState=Me=t:Me=Me.next=t,Me}function $t(){if(xe===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=xe.next;var e=Me===null?fe.memoizedState:Me.next;if(e!==null)Me=e,xe=t;else{if(t===null)throw Error(R(310));xe=t,t={memoizedState:xe.memoizedState,baseState:xe.baseState,baseQueue:xe.baseQueue,queue:xe.queue,next:null},Me===null?fe.memoizedState=Me=t:Me=Me.next=t}return Me}function Wo(t,e){return typeof e=="function"?e(t):e}function Fd(t){var e=$t(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=xe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ai&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,fe.lanes|=c,li|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Yt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,fe.lanes|=s,li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jd(t){var e=$t(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Yt(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function $w(){}function Uw(t,e){var n=fe,r=$t(),i=e(),s=!Yt(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,tg(Hw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Me!==null&&Me.memoizedState.tag&1){if(n.flags|=2048,Go(9,Bw.bind(null,n,r,i,e),void 0,null),Ve===null)throw Error(R(349));ai&30||zw(n,e,i)}return i}function zw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bw(t,e,n,r){e.value=n,e.getSnapshot=r,Ww(e)&&Gw(t)}function Hw(t,e,n){return n(function(){Ww(e)&&Gw(t)})}function Ww(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yt(t,n)}catch{return!0}}function Gw(t){var e=Pn(t,1);e!==null&&qt(e,t,1,-1)}function zv(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},e.queue=t,t=t.dispatch=eA.bind(null,fe,t),[e.memoizedState,t]}function Go(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=fe.updateQueue,e===null?(e={lastEffect:null,stores:null},fe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qw(){return $t().memoizedState}function Gl(t,e,n,r){var i=en();fe.flags|=t,i.memoizedState=Go(1|e,n,void 0,r===void 0?null:r)}function gc(t,e,n,r){var i=$t();r=r===void 0?null:r;var s=void 0;if(xe!==null){var o=xe.memoizedState;if(s=o.destroy,r!==null&&Jp(r,o.deps)){i.memoizedState=Go(e,n,s,r);return}}fe.flags|=t,i.memoizedState=Go(1|e,n,s,r)}function Bv(t,e){return Gl(8390656,8,t,e)}function tg(t,e){return gc(2048,8,t,e)}function Kw(t,e){return gc(4,2,t,e)}function Qw(t,e){return gc(4,4,t,e)}function Yw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xw(t,e,n){return n=n!=null?n.concat([t]):null,gc(4,4,Yw.bind(null,e,t),n)}function ng(){}function Jw(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Zw(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function e1(t,e,n){return ai&21?(Yt(n,e)||(n=rw(),fe.lanes|=n,li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function JR(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=Vd.transition;Vd.transition={};try{t(!1),e()}finally{te=n,Vd.transition=r}}function t1(){return $t().memoizedState}function ZR(t,e,n){var r=mr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},n1(t))r1(e,n);else if(n=Ow(t,e,n,r),n!==null){var i=ut();qt(n,t,r,i),i1(n,e,r)}}function eA(t,e,n){var r=mr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(n1(t))r1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Yt(a,o)){var l=e.interleaved;l===null?(i.next=i,qp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Ow(t,e,i,r),n!==null&&(i=ut(),qt(n,t,r,i),i1(n,e,r))}}function n1(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function r1(t,e){yo=Tu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function i1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Op(t,n)}}var Cu={readContext:jt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},tA={readContext:jt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:jt,useEffect:Bv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gl(4194308,4,Yw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gl(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ZR.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:zv,useDebugValue:ng,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=zv(!1),e=t[0];return t=JR.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=fe,i=en();if(ce){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),Ve===null)throw Error(R(349));ai&30||zw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Bv(Hw.bind(null,r,s,t),[t]),r.flags|=2048,Go(9,Bw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=Ve.identifierPrefix;if(ce){var n=In,r=Sn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=XR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},nA={readContext:jt,useCallback:Jw,useContext:jt,useEffect:tg,useImperativeHandle:Xw,useInsertionEffect:Kw,useLayoutEffect:Qw,useMemo:Zw,useReducer:Fd,useRef:qw,useState:function(){return Fd(Wo)},useDebugValue:ng,useDeferredValue:function(t){var e=$t();return e1(e,xe.memoizedState,t)},useTransition:function(){var t=Fd(Wo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:$w,useSyncExternalStore:Uw,useId:t1,unstable_isNewReconciler:!1},rA={readContext:jt,useCallback:Jw,useContext:jt,useEffect:tg,useImperativeHandle:Xw,useInsertionEffect:Kw,useLayoutEffect:Qw,useMemo:Zw,useReducer:jd,useRef:qw,useState:function(){return jd(Wo)},useDebugValue:ng,useDeferredValue:function(t){var e=$t();return xe===null?e.memoizedState=t:e1(e,xe.memoizedState,t)},useTransition:function(){var t=jd(Wo)[0],e=$t().memoizedState;return[t,e]},useMutableSource:$w,useSyncExternalStore:Uw,useId:t1,unstable_isNewReconciler:!1};function ps(t,e){try{var n="",r=e;do n+=NC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function $d(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iA=typeof WeakMap=="function"?WeakMap:Map;function s1(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Au||(Au=!0,pf=r),rf(t,e)},n}function o1(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rf(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Hv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iA;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=yA.bind(null,t,e,n),e.then(t,t))}function Wv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t)}var sA=$n.ReactCurrentOwner,mt=!1;function at(t,e,n,r){e.child=t===null?Fw(e,null,n,r):hs(e,t.child,n,r)}function qv(t,e,n,r,i){n=n.render;var s=e.ref;return ts(e,i),r=Zp(t,e,n,r,s,i),n=eg(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(ce&&n&&Up(e),e.flags|=1,at(t,e,r,i),e.child)}function Kv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!cg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,a1(t,e,s,r,i)):(t=Yl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(o,r)&&t.ref===e.ref)return Nn(t,e,i)}return e.flags|=1,t=vr(s,r),t.ref=e.ref,t.return=e,e.child=t}function a1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Fo(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,Nn(t,e,i)}return sf(t,e,n,r,i)}function l1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(Wi,Et),Et|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(Wi,Et),Et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(Wi,Et),Et|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(Wi,Et),Et|=r;return at(t,e,i,n),e.child}function u1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sf(t,e,n,r,i){var s=yt(n)?si:rt.current;return s=cs(e,s),ts(e,i),n=Zp(t,e,n,r,s,i),r=eg(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(ce&&r&&Up(e),e.flags|=1,at(t,e,n,i),e.child)}function Qv(t,e,n,r,i){if(yt(n)){var s=!0;vu(e)}else s=!1;if(ts(e,i),e.stateNode===null)ql(t,e),Mw(e,n,r),nf(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=jt(u):(u=yt(n)?si:rt.current,u=cs(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&$v(e,o,r,u),Yn=!1;var f=e.memoizedState;o.state=f,Su(e,r,o,i),l=e.memoizedState,a!==r||f!==l||vt.current||Yn?(typeof c=="function"&&(tf(e,n,c,r),l=e.memoizedState),(a=Yn||jv(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Dw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zt(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=jt(l):(l=yt(n)?si:rt.current,l=cs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&$v(e,o,r,l),Yn=!1,f=e.memoizedState,o.state=f,Su(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||vt.current||Yn?(typeof p=="function"&&(tf(e,n,p,r),v=e.memoizedState),(u=Yn||jv(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return of(t,e,n,r,s,i)}function of(t,e,n,r,i,s){u1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Dv(e,n,!1),Nn(t,e,s);r=e.stateNode,sA.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=hs(e,t.child,null,s),e.child=hs(e,null,a,s)):at(t,e,a,s),e.memoizedState=r.state,i&&Dv(e,n,!0),e.child}function c1(t){var e=t.stateNode;e.pendingContext?Ov(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ov(t,e.context,!1),Qp(t,e.containerInfo)}function Yv(t,e,n,r,i){return ds(),Bp(i),e.flags|=256,at(t,e,n,r),e.child}var af={dehydrated:null,treeContext:null,retryLane:0};function lf(t){return{baseLanes:t,cachePool:null,transitions:null}}function d1(t,e,n){var r=e.pendingProps,i=he.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(he,i&1),t===null)return Zh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=yc(o,r,0,null),t=ti(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lf(n),e.memoizedState=af,t):rg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return oA(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=vr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=vr(a,s):(s=ti(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?lf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=af,r}return s=t.child,t=s.sibling,r=vr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rg(t,e){return e=yc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function dl(t,e,n,r){return r!==null&&Bp(r),hs(e,t.child,null,n),t=rg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oA(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=$d(Error(R(422))),dl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=yc({mode:"visible",children:r.children},i,0,null),s=ti(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&hs(e,t.child,null,o),e.child.memoizedState=lf(o),e.memoizedState=af,s);if(!(e.mode&1))return dl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=$d(s,r,void 0),dl(t,e,o,r)}if(a=(o&t.childLanes)!==0,mt||a){if(r=Ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Pn(t,i),qt(r,t,i,-1))}return ug(),r=$d(Error(R(421))),dl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_A.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,St=fr(i.nextSibling),Ct=e,ce=!0,Ht=null,t!==null&&(bt[Ot++]=Sn,bt[Ot++]=In,bt[Ot++]=oi,Sn=t.id,In=t.overflow,oi=e),e=rg(e,r.children),e.flags|=4096,e)}function Xv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ef(t.return,e,n)}function Ud(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function h1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=he.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xv(t,n,e);else if(t.tag===19)Xv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(he,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ud(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ud(e,!0,n,null,s);break;case"together":Ud(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ql(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function aA(t,e,n){switch(e.tag){case 3:c1(e),ds();break;case 5:jw(e);break;case 1:yt(e.type)&&vu(e);break;case 4:Qp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(wu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(he,he.current&1),e.flags|=128,null):n&e.child.childLanes?d1(t,e,n):(re(he,he.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);re(he,he.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return h1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(he,he.current),r)break;return null;case 22:case 23:return e.lanes=0,l1(t,e,n)}return Nn(t,e,n)}var f1,uf,p1,g1;f1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uf=function(){};p1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(un.current);var s=null;switch(n){case"input":i=Ph(t,i),r=Ph(t,r),s=[];break;case"select":i=ge({},i,{value:void 0}),r=ge({},r,{value:void 0}),s=[];break;case"textarea":i=Oh(t,i),r=Oh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=gu)}Lh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(No.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(No.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};g1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ks(t,e){if(!ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function lA(t,e,n){var r=e.pendingProps;switch(zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return yt(e.type)&&mu(),Qe(e),null;case 3:return r=e.stateNode,fs(),le(vt),le(rt),Xp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ht!==null&&(vf(Ht),Ht=null))),uf(t,e),Qe(e),null;case 5:Yp(e);var i=Kr(Bo.current);if(n=e.type,t!==null&&e.stateNode!=null)p1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return Qe(e),null}if(t=Kr(un.current),ul(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[Uo]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)se(io[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":ov(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":lv(r,s),se("invalid",r)}Lh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ll(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ll(r.textContent,a,t),i=["children",""+a]):No.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":el(r),av(r,s,!0);break;case"textarea":el(r),uv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=gu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=z0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[Uo]=r,f1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mh(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)se(io[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":ov(t,r),i=Ph(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ge({},r,{value:void 0}),se("invalid",t);break;case"textarea":lv(t,r),i=Oh(t,r),se("invalid",t);break;default:i=r}Lh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?W0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&B0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&bo(t,l):typeof l=="number"&&bo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(No.hasOwnProperty(s)?l!=null&&s==="onScroll"&&se("scroll",t):l!=null&&Ap(t,s,l,o))}switch(n){case"input":el(t),av(t,r,!1);break;case"textarea":el(t),uv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=gu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qe(e),null;case 6:if(t&&e.stateNode!=null)g1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Kr(Bo.current),Kr(un.current),ul(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:ll(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ll(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return Qe(e),null;case 13:if(le(he),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ce&&St!==null&&e.mode&1&&!(e.flags&128))bw(),ds(),e.flags|=98560,s=!1;else if(s=ul(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[tn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qe(e),s=!1}else Ht!==null&&(vf(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||he.current&1?Ne===0&&(Ne=3):ug())),e.updateQueue!==null&&(e.flags|=4),Qe(e),null);case 4:return fs(),uf(t,e),t===null&&jo(e.stateNode.containerInfo),Qe(e),null;case 10:return Gp(e.type._context),Qe(e),null;case 17:return yt(e.type)&&mu(),Qe(e),null;case 19:if(le(he),s=e.memoizedState,s===null)return Qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ks(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Iu(t),o!==null){for(e.flags|=128,Ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(he,he.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>gs&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=Iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ce)return Qe(e),null}else 2*Ie()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=he.current,re(he,r?n&1|2:n&1),e):(Qe(e),null);case 22:case 23:return lg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Et&1073741824&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function uA(t,e){switch(zp(e),e.tag){case 1:return yt(e.type)&&mu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return fs(),le(vt),le(rt),Xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yp(e),null;case 13:if(le(he),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return le(he),null;case 4:return fs(),null;case 10:return Gp(e.type._context),null;case 22:case 23:return lg(),null;case 24:return null;default:return null}}var hl=!1,Je=!1,cA=typeof WeakSet=="function"?WeakSet:Set,b=null;function Hi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(t,e,r)}else n.current=null}function cf(t,e,n){try{n()}catch(r){ve(t,e,r)}}var Jv=!1;function dA(t,e){if(Gh=hu,t=_w(),$p(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qh={focusedElem:t,selectionRange:n},hu=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,w=v.memoizedState,g=e.stateNode,m=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:zt(e.type,_),w);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(E){ve(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return v=Jv,Jv=!1,v}function _o(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&cf(e,n,s)}i=i.next}while(i!==r)}}function mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function df(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function m1(t){var e=t.alternate;e!==null&&(t.alternate=null,m1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[Uo],delete e[Yh],delete e[qR],delete e[KR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function v1(t){return t.tag===5||t.tag===3||t.tag===4}function Zv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||v1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gu));else if(r!==4&&(t=t.child,t!==null))for(hf(t,e,n),t=t.sibling;t!==null;)hf(t,e,n),t=t.sibling}function ff(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ff(t,e,n),t=t.sibling;t!==null;)ff(t,e,n),t=t.sibling}var $e=null,Bt=!1;function Gn(t,e,n){for(n=n.child;n!==null;)y1(t,e,n),n=n.sibling}function y1(t,e,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:Je||Hi(n,e);case 6:var r=$e,i=Bt;$e=null,Gn(t,e,n),$e=r,Bt=i,$e!==null&&(Bt?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Bt?(t=$e,n=n.stateNode,t.nodeType===8?Dd(t.parentNode,n):t.nodeType===1&&Dd(t,n),Mo(t)):Dd($e,n.stateNode));break;case 4:r=$e,i=Bt,$e=n.stateNode.containerInfo,Bt=!0,Gn(t,e,n),$e=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!Je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cf(n,e,o),i=i.next}while(i!==r)}Gn(t,e,n);break;case 1:if(!Je&&(Hi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,e,a)}Gn(t,e,n);break;case 21:Gn(t,e,n);break;case 22:n.mode&1?(Je=(r=Je)||n.memoizedState!==null,Gn(t,e,n),Je=r):Gn(t,e,n);break;default:Gn(t,e,n)}}function ey(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new cA),e.forEach(function(r){var i=wA.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$e=a.stateNode,Bt=!1;break e;case 3:$e=a.stateNode.containerInfo,Bt=!0;break e;case 4:$e=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if($e===null)throw Error(R(160));y1(s,o,i),$e=null,Bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ve(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_1(e,t),e=e.sibling}function _1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(e,t),Zt(t),r&4){try{_o(3,t,t.return),mc(3,t)}catch(_){ve(t,t.return,_)}try{_o(5,t,t.return)}catch(_){ve(t,t.return,_)}}break;case 1:Ut(e,t),Zt(t),r&512&&n!==null&&Hi(n,n.return);break;case 5:if(Ut(e,t),Zt(t),r&512&&n!==null&&Hi(n,n.return),t.flags&32){var i=t.stateNode;try{bo(i,"")}catch(_){ve(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&$0(i,s),Mh(a,o);var u=Mh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?W0(i,d):c==="dangerouslySetInnerHTML"?B0(i,d):c==="children"?bo(i,d):Ap(i,c,d,u)}switch(a){case"input":Nh(i,s);break;case"textarea":U0(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Xi(i,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Xi(i,!!s.multiple,s.defaultValue,!0):Xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Uo]=s}catch(_){ve(t,t.return,_)}}break;case 6:if(Ut(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ve(t,t.return,_)}}break;case 3:if(Ut(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(_){ve(t,t.return,_)}break;case 4:Ut(e,t),Zt(t);break;case 13:Ut(e,t),Zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(og=Ie())),r&4&&ey(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Je=(u=Je)||c,Ut(e,t),Je=u):Ut(e,t),Zt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(b=t,c=t.child;c!==null;){for(d=b=c;b!==null;){switch(f=b,p=f.child,f.tag){case 0:case 11:case 14:case 15:_o(4,f,f.return);break;case 1:Hi(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){ve(r,n,_)}}break;case 5:Hi(f,f.return);break;case 22:if(f.memoizedState!==null){ny(d);continue}}p!==null?(p.return=f,b=p):ny(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=H0("display",o))}catch(_){ve(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){ve(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ut(e,t),Zt(t),r&4&&ey(t);break;case 21:break;default:Ut(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(v1(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bo(i,""),r.flags&=-33);var s=Zv(t);ff(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Zv(t);hf(t,a,o);break;default:throw Error(R(161))}}catch(l){ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hA(t,e,n){b=t,w1(t)}function w1(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||hl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Je;a=hl;var u=Je;if(hl=o,(Je=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?ry(i):l!==null?(l.return=o,b=l):ry(i);for(;s!==null;)b=s,w1(s),s=s.sibling;b=i,hl=a,Je=u}ty(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,b=s):ty(t)}}function ty(t){for(;b!==null;){var e=b;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Je||mc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Je)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fv(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fv(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Mo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Je||e.flags&512&&df(e)}catch(f){ve(e,e.return,f)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function ny(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function ry(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mc(4,e)}catch(l){ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ve(e,i,l)}}var s=e.return;try{df(e)}catch(l){ve(e,s,l)}break;case 5:var o=e.return;try{df(e)}catch(l){ve(e,o,l)}}}catch(l){ve(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var fA=Math.ceil,Ru=$n.ReactCurrentDispatcher,ig=$n.ReactCurrentOwner,Mt=$n.ReactCurrentBatchConfig,Z=0,Ve=null,Ae=null,He=0,Et=0,Wi=Dr(0),Ne=0,qo=null,li=0,vc=0,sg=0,wo=null,pt=null,og=0,gs=1/0,wn=null,Au=!1,pf=null,gr=null,fl=!1,sr=null,ku=0,Eo=0,gf=null,Kl=-1,Ql=0;function ut(){return Z&6?Ie():Kl!==-1?Kl:Kl=Ie()}function mr(t){return t.mode&1?Z&2&&He!==0?He&-He:YR.transition!==null?(Ql===0&&(Ql=rw()),Ql):(t=te,t!==0||(t=window.event,t=t===void 0?16:cw(t.type)),t):1}function qt(t,e,n,r){if(50<Eo)throw Eo=0,gf=null,Error(R(185));wa(t,n,r),(!(Z&2)||t!==Ve)&&(t===Ve&&(!(Z&2)&&(vc|=n),Ne===4&&Jn(t,He)),_t(t,r),n===1&&Z===0&&!(e.mode&1)&&(gs=Ie()+500,fc&&Lr()))}function _t(t,e){var n=t.callbackNode;YC(t,e);var r=du(t,t===Ve?He:0);if(r===0)n!==null&&hv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&hv(n),e===1)t.tag===0?QR(iy.bind(null,t)):xw(iy.bind(null,t)),WR(function(){!(Z&6)&&Lr()}),n=null;else{switch(iw(r)){case 1:n=bp;break;case 4:n=tw;break;case 16:n=cu;break;case 536870912:n=nw;break;default:n=cu}n=k1(n,E1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function E1(t,e){if(Kl=-1,Ql=0,Z&6)throw Error(R(327));var n=t.callbackNode;if(ns()&&t.callbackNode!==n)return null;var r=du(t,t===Ve?He:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xu(t,r);else{e=r;var i=Z;Z|=2;var s=I1();(Ve!==t||He!==e)&&(wn=null,gs=Ie()+500,ei(t,e));do try{mA();break}catch(a){S1(t,a)}while(!0);Wp(),Ru.current=s,Z=i,Ae!==null?e=0:(Ve=null,He=0,e=Ne)}if(e!==0){if(e===2&&(i=Uh(t),i!==0&&(r=i,e=mf(t,i))),e===1)throw n=qo,ei(t,0),Jn(t,r),_t(t,Ie()),n;if(e===6)Jn(t,r);else{if(i=t.current.alternate,!(r&30)&&!pA(i)&&(e=xu(t,r),e===2&&(s=Uh(t),s!==0&&(r=s,e=mf(t,s))),e===1))throw n=qo,ei(t,0),Jn(t,r),_t(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Hr(t,pt,wn);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=og+500-Ie(),10<e)){if(du(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ut(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Qh(Hr.bind(null,t,pt,wn),e);break}Hr(t,pt,wn);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Gt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fA(r/1960))-r,10<r){t.timeoutHandle=Qh(Hr.bind(null,t,pt,wn),r);break}Hr(t,pt,wn);break;case 5:Hr(t,pt,wn);break;default:throw Error(R(329))}}}return _t(t,Ie()),t.callbackNode===n?E1.bind(null,t):null}function mf(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(ei(t,e).flags|=256),t=xu(t,e),t!==2&&(e=pt,pt=n,e!==null&&vf(e)),t}function vf(t){pt===null?pt=t:pt.push.apply(pt,t)}function pA(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Yt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~sg,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Gt(e),r=1<<n;t[n]=-1,e&=~r}}function iy(t){if(Z&6)throw Error(R(327));ns();var e=du(t,0);if(!(e&1))return _t(t,Ie()),null;var n=xu(t,e);if(t.tag!==0&&n===2){var r=Uh(t);r!==0&&(e=r,n=mf(t,r))}if(n===1)throw n=qo,ei(t,0),Jn(t,e),_t(t,Ie()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Hr(t,pt,wn),_t(t,Ie()),null}function ag(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(gs=Ie()+500,fc&&Lr())}}function ui(t){sr!==null&&sr.tag===0&&!(Z&6)&&ns();var e=Z;Z|=1;var n=Mt.transition,r=te;try{if(Mt.transition=null,te=1,t)return t()}finally{te=r,Mt.transition=n,Z=e,!(Z&6)&&Lr()}}function lg(){Et=Wi.current,le(Wi)}function ei(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,HR(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch(zp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&mu();break;case 3:fs(),le(vt),le(rt),Xp();break;case 5:Yp(r);break;case 4:fs();break;case 13:le(he);break;case 19:le(he);break;case 10:Gp(r.type._context);break;case 22:case 23:lg()}n=n.return}if(Ve=t,Ae=t=vr(t.current,null),He=Et=e,Ne=0,qo=null,sg=vc=li=0,pt=wo=null,qr!==null){for(e=0;e<qr.length;e++)if(n=qr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}qr=null}return t}function S1(t,e){do{var n=Ae;try{if(Wp(),Wl.current=Cu,Tu){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Tu=!1}if(ai=0,Me=xe=fe=null,yo=!1,Ho=0,ig.current=null,n===null||n.return===null){Ne=1,qo=e,Ae=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=He,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Wv(o);if(p!==null){p.flags&=-257,Gv(p,o,a,s,e),p.mode&1&&Hv(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if(!(e&1)){Hv(s,u,e),ug();break e}l=Error(R(426))}}else if(ce&&a.mode&1){var w=Wv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Gv(w,o,a,s,e),Bp(ps(l,a));break e}}s=l=ps(l,a),Ne!==4&&(Ne=2),wo===null?wo=[s]:wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=s1(s,l,e);Vv(s,g);break e;case 1:a=l;var m=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(gr===null||!gr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=o1(s,a,e);Vv(s,E);break e}}s=s.return}while(s!==null)}C1(n)}catch(S){e=S,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(!0)}function I1(){var t=Ru.current;return Ru.current=Cu,t===null?Cu:t}function ug(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Ve===null||!(li&268435455)&&!(vc&268435455)||Jn(Ve,He)}function xu(t,e){var n=Z;Z|=2;var r=I1();(Ve!==t||He!==e)&&(wn=null,ei(t,e));do try{gA();break}catch(i){S1(t,i)}while(!0);if(Wp(),Z=n,Ru.current=r,Ae!==null)throw Error(R(261));return Ve=null,He=0,Ne}function gA(){for(;Ae!==null;)T1(Ae)}function mA(){for(;Ae!==null&&!UC();)T1(Ae)}function T1(t){var e=A1(t.alternate,t,Et);t.memoizedProps=t.pendingProps,e===null?C1(t):Ae=e,ig.current=null}function C1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uA(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Ae=null;return}}else if(n=lA(n,e,Et),n!==null){Ae=n;return}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);Ne===0&&(Ne=5)}function Hr(t,e,n){var r=te,i=Mt.transition;try{Mt.transition=null,te=1,vA(t,e,n,r)}finally{Mt.transition=i,te=r}return null}function vA(t,e,n,r){do ns();while(sr!==null);if(Z&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(XC(t,s),t===Ve&&(Ae=Ve=null,He=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fl||(fl=!0,k1(cu,function(){return ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Mt.transition,Mt.transition=null;var o=te;te=1;var a=Z;Z|=4,ig.current=null,dA(t,n),_1(n,t),VR(qh),hu=!!Gh,qh=Gh=null,t.current=n,hA(n),zC(),Z=a,te=o,Mt.transition=s}else t.current=n;if(fl&&(fl=!1,sr=t,ku=i),s=t.pendingLanes,s===0&&(gr=null),WC(n.stateNode),_t(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Au)throw Au=!1,t=pf,pf=null,t;return ku&1&&t.tag!==0&&ns(),s=t.pendingLanes,s&1?t===gf?Eo++:(Eo=0,gf=t):Eo=0,Lr(),null}function ns(){if(sr!==null){var t=iw(ku),e=Mt.transition,n=te;try{if(Mt.transition=null,te=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,ku=0,Z&6)throw Error(R(331));var i=Z;for(Z|=4,b=t.current;b!==null;){var s=b,o=s.child;if(b.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:_o(8,c,s)}var d=c.child;if(d!==null)d.return=c,b=d;else for(;b!==null;){c=b;var f=c.sibling,p=c.return;if(m1(c),c===u){b=null;break}if(f!==null){f.return=p,b=f;break}b=p}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}b=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_o(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,b=g;break e}b=s.return}}var m=t.current;for(b=m;b!==null;){o=b;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,b=y;else e:for(o=m;b!==null;){if(a=b,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:mc(9,a)}}catch(S){ve(a,a.return,S)}if(a===o){b=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,b=E;break e}b=a.return}}if(Z=i,Lr(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(lc,t)}catch{}r=!0}return r}finally{te=n,Mt.transition=e}}return!1}function sy(t,e,n){e=ps(n,e),e=s1(t,e,1),t=pr(t,e,1),e=ut(),t!==null&&(wa(t,1,e),_t(t,e))}function ve(t,e,n){if(t.tag===3)sy(t,t,n);else for(;e!==null;){if(e.tag===3){sy(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=ps(n,t),t=o1(e,t,1),e=pr(e,t,1),t=ut(),e!==null&&(wa(e,1,t),_t(e,t));break}}e=e.return}}function yA(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ut(),t.pingedLanes|=t.suspendedLanes&n,Ve===t&&(He&n)===n&&(Ne===4||Ne===3&&(He&130023424)===He&&500>Ie()-og?ei(t,0):sg|=n),_t(t,e)}function R1(t,e){e===0&&(t.mode&1?(e=rl,rl<<=1,!(rl&130023424)&&(rl=4194304)):e=1);var n=ut();t=Pn(t,e),t!==null&&(wa(t,e,n),_t(t,n))}function _A(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),R1(t,n)}function wA(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),R1(t,n)}var A1;A1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||vt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,aA(t,e,n);mt=!!(t.flags&131072)}else mt=!1,ce&&e.flags&1048576&&Pw(e,_u,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ql(t,e),t=e.pendingProps;var i=cs(e,rt.current);ts(e,n),i=Zp(null,e,r,t,i,n);var s=eg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,vu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Kp(e),i.updater=pc,e.stateNode=i,i._reactInternals=e,nf(e,r,t,n),e=of(null,e,r,!0,s,n)):(e.tag=0,ce&&s&&Up(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ql(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=SA(r),t=zt(r,t),i){case 0:e=sf(null,e,r,t,n);break e;case 1:e=Qv(null,e,r,t,n);break e;case 11:e=qv(null,e,r,t,n);break e;case 14:e=Kv(null,e,r,zt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),sf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Qv(t,e,r,i,n);case 3:e:{if(c1(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Dw(t,e),Su(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ps(Error(R(423)),e),e=Yv(t,e,r,n,i);break e}else if(r!==i){i=ps(Error(R(424)),e),e=Yv(t,e,r,n,i);break e}else for(St=fr(e.stateNode.containerInfo.firstChild),Ct=e,ce=!0,Ht=null,n=Fw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),r===i){e=Nn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return jw(e),t===null&&Zh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Kh(r,i)?o=null:s!==null&&Kh(r,s)&&(e.flags|=32),u1(t,e),at(t,e,o,n),e.child;case 6:return t===null&&Zh(e),null;case 13:return d1(t,e,n);case 4:return Qp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=hs(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),qv(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(wu,r._currentValue),r._currentValue=o,s!==null)if(Yt(s.value,o)){if(s.children===i.children&&!vt.current){e=Nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=An(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ef(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ef(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ts(e,n),i=jt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),Kv(t,e,r,i,n);case 15:return a1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),ql(t,e),e.tag=1,yt(r)?(t=!0,vu(e)):t=!1,ts(e,n),Mw(e,r,i),nf(e,r,i,n),of(null,e,r,!0,t,n);case 19:return h1(t,e,n);case 22:return l1(t,e,n)}throw Error(R(156,e.tag))};function k1(t,e){return ew(t,e)}function EA(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lt(t,e,n,r){return new EA(t,e,n,r)}function cg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function SA(t){if(typeof t=="function")return cg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xp)return 11;if(t===Pp)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")cg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Li:return ti(n.children,i,s,e);case kp:o=8,i|=8;break;case Rh:return t=Lt(12,n,e,i|2),t.elementType=Rh,t.lanes=s,t;case Ah:return t=Lt(13,n,e,i),t.elementType=Ah,t.lanes=s,t;case kh:return t=Lt(19,n,e,i),t.elementType=kh,t.lanes=s,t;case V0:return yc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L0:o=10;break e;case M0:o=9;break e;case xp:o=11;break e;case Pp:o=14;break e;case Qn:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ti(t,e,n,r){return t=Lt(7,t,r,e),t.lanes=n,t}function yc(t,e,n,r){return t=Lt(22,t,r,e),t.elementType=V0,t.lanes=n,t.stateNode={isHidden:!1},t}function zd(t,e,n){return t=Lt(6,t,null,e),t.lanes=n,t}function Bd(t,e,n){return e=Lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function IA(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Id(0),this.expirationTimes=Id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Id(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dg(t,e,n,r,i,s,o,a,l){return t=new IA(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kp(s),t}function TA(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function x1(t){if(!t)return Tr;t=t._reactInternals;e:{if(Si(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(yt(n))return kw(t,n,e)}return e}function P1(t,e,n,r,i,s,o,a,l){return t=dg(n,r,!0,t,i,s,o,a,l),t.context=x1(null),n=t.current,r=ut(),i=mr(n),s=An(r,i),s.callback=e??null,pr(n,s,i),t.current.lanes=i,wa(t,i,r),_t(t,r),t}function _c(t,e,n,r){var i=e.current,s=ut(),o=mr(i);return n=x1(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pr(i,e,o),t!==null&&(qt(t,i,o,s),Hl(t,i,o)),o}function Pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function hg(t,e){oy(t,e),(t=t.alternate)&&oy(t,e)}function CA(){return null}var N1=typeof reportError=="function"?reportError:function(t){console.error(t)};function fg(t){this._internalRoot=t}wc.prototype.render=fg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));_c(t,e,null,null)};wc.prototype.unmount=fg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ui(function(){_c(null,t,null,null)}),e[xn]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var e=aw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&uw(t)}};function pg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ay(){}function RA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Pu(o);s.call(u)}}var o=P1(e,r,t,0,null,!1,!1,"",ay);return t._reactRootContainer=o,t[xn]=o.current,jo(t.nodeType===8?t.parentNode:t),ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Pu(l);a.call(u)}}var l=dg(t,0,!1,null,null,!1,!1,"",ay);return t._reactRootContainer=l,t[xn]=l.current,jo(t.nodeType===8?t.parentNode:t),ui(function(){_c(e,l,n,r)}),l}function Sc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Pu(o);a.call(l)}}_c(e,o,t,i)}else o=RA(n,e,t,i,r);return Pu(o)}sw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(Op(e,n|1),_t(e,Ie()),!(Z&6)&&(gs=Ie()+500,Lr()))}break;case 13:ui(function(){var r=Pn(t,1);if(r!==null){var i=ut();qt(r,t,1,i)}}),hg(t,1)}};Dp=function(t){if(t.tag===13){var e=Pn(t,134217728);if(e!==null){var n=ut();qt(e,t,134217728,n)}hg(t,134217728)}};ow=function(t){if(t.tag===13){var e=mr(t),n=Pn(t,e);if(n!==null){var r=ut();qt(n,t,e,r)}hg(t,e)}};aw=function(){return te};lw=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};Fh=function(t,e,n){switch(e){case"input":if(Nh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=hc(r);if(!i)throw Error(R(90));j0(r),Nh(r,i)}}}break;case"textarea":U0(t,n);break;case"select":e=n.value,e!=null&&Xi(t,!!n.multiple,e,!1)}};K0=ag;Q0=ui;var AA={usingClientEntryPoint:!1,Events:[Sa,ji,hc,G0,q0,ag]},Qs={findFiberByHostInstance:Gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kA={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J0(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||CA,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{lc=pl.inject(kA),ln=pl}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AA;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pg(e))throw Error(R(200));return TA(t,e,null,n)};xt.createRoot=function(t,e){if(!pg(t))throw Error(R(299));var n=!1,r="",i=N1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dg(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,jo(t.nodeType===8?t.parentNode:t),new fg(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=J0(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return ui(t)};xt.hydrate=function(t,e,n){if(!Ec(e))throw Error(R(200));return Sc(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!pg(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=N1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P1(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,jo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new wc(e)};xt.render=function(t,e,n){if(!Ec(e))throw Error(R(200));return Sc(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!Ec(t))throw Error(R(40));return t._reactRootContainer?(ui(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};xt.unstable_batchedUpdates=ag;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ec(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return Sc(t,e,n,!1,r)};xt.version="18.2.0-next-9e3b772b8-20220608";function b1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b1)}catch(t){console.error(t)}}b1(),P0.exports=xt;var xA=P0.exports,ly=xA;Th.createRoot=ly.createRoot,Th.hydrateRoot=ly.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ko(){return Ko=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ko.apply(this,arguments)}var or;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(or||(or={}));const uy="popstate";function PA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return yf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Nu(i)}return bA(e,n,null,t)}function pe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NA(){return Math.random().toString(36).substr(2,8)}function cy(t,e){return{usr:t.state,key:t.key,idx:e}}function yf(t,e,n,r){return n===void 0&&(n=null),Ko({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ps(e):e,{state:n,key:e&&e.key||r||NA()})}function Nu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function bA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=or.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ko({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=or.Pop;let w=c(),g=w==null?null:w-u;u=w,l&&l({action:a,location:_.location,delta:g})}function f(w,g){a=or.Push;let m=yf(_.location,w,g);n&&n(m,w),u=c()+1;let y=cy(m,u),E=_.createHref(m);try{o.pushState(y,"",E)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function p(w,g){a=or.Replace;let m=yf(_.location,w,g);n&&n(m,w),u=c();let y=cy(m,u),E=_.createHref(m);o.replaceState(y,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function v(w){let g=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:Nu(w);return pe(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(uy,d),l=w,()=>{i.removeEventListener(uy,d),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let g=v(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:p,go(w){return o.go(w)}};return _}var dy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(dy||(dy={}));function OA(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ps(e):e,i=Qo(r.pathname||"/",n);if(i==null)return null;let s=O1(t);DA(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=BA(s[a],WA(i));return o}function O1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(pe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=yr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(pe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),O1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:UA(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of D1(s.path))i(s,o,l)}),e}function D1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=D1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function DA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const LA=/^:\w+$/,MA=3,VA=2,FA=1,jA=10,$A=-2,hy=t=>t==="*";function UA(t,e){let n=t.split("/"),r=n.length;return n.some(hy)&&(r+=$A),e&&(r+=VA),n.filter(i=>!hy(i)).reduce((i,s)=>i+(LA.test(s)?MA:s===""?FA:jA),r)}function zA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function BA(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=_f({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:yr([i,c.pathname]),pathnameBase:YA(yr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=yr([i,c.pathnameBase]))}return s}function _f(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=HA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:p}=c;if(f==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const v=a[d];return p&&!v?u[f]=void 0:u[f]=GA(v||"",f),u},{}),pathname:s,pathnameBase:o,pattern:t}}function HA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),gg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WA(t){try{return decodeURI(t)}catch(e){return gg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function GA(t,e){try{return decodeURIComponent(t)}catch(n){return gg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Qo(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ps(t):t;return{pathname:n?n.startsWith("/")?n:KA(n,e):e,search:XA(r),hash:JA(i)}}function KA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function QA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function mg(t,e){let n=QA(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ps(t):(i=Ko({},t),pe(!i.pathname||!i.pathname.includes("?"),Hd("?","pathname","search",i)),pe(!i.pathname||!i.pathname.includes("#"),Hd("#","pathname","hash",i)),pe(!i.search||!i.search.includes("#"),Hd("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=qA(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const yr=t=>t.join("/").replace(/\/\/+/g,"/"),YA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),XA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,JA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function ZA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const L1=["post","put","patch","delete"];new Set(L1);const ek=["get",...L1];new Set(ek);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yo.apply(this,arguments)}const Ic=I.createContext(null),M1=I.createContext(null),Un=I.createContext(null),Tc=I.createContext(null),zn=I.createContext({outlet:null,matches:[],isDataRoute:!1}),V1=I.createContext(null);function tk(t,e){let{relative:n}=e===void 0?{}:e;Ns()||pe(!1);let{basename:r,navigator:i}=I.useContext(Un),{hash:s,pathname:o,search:a}=Cc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:yr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Ns(){return I.useContext(Tc)!=null}function bs(){return Ns()||pe(!1),I.useContext(Tc).location}function F1(t){I.useContext(Un).static||I.useLayoutEffect(t)}function Ta(){let{isDataRoute:t}=I.useContext(zn);return t?mk():nk()}function nk(){Ns()||pe(!1);let t=I.useContext(Ic),{basename:e,future:n,navigator:r}=I.useContext(Un),{matches:i}=I.useContext(zn),{pathname:s}=bs(),o=JSON.stringify(mg(i,n.v7_relativeSplatPath)),a=I.useRef(!1);return F1(()=>{a.current=!0}),I.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=vg(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:yr([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}const rk=I.createContext(null);function ik(t){let e=I.useContext(zn).outlet;return e&&I.createElement(rk.Provider,{value:t},e)}function Cc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=I.useContext(Un),{matches:i}=I.useContext(zn),{pathname:s}=bs(),o=JSON.stringify(mg(i,r.v7_relativeSplatPath));return I.useMemo(()=>vg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function sk(t,e){return ok(t,e)}function ok(t,e,n,r){Ns()||pe(!1);let{navigator:i}=I.useContext(Un),{matches:s}=I.useContext(zn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=bs(),c;if(e){var d;let w=typeof e=="string"?Ps(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||pe(!1),c=w}else c=u;let f=c.pathname||"/",p=l==="/"?f:f.slice(l.length)||"/",v=OA(t,{pathname:p}),_=dk(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:yr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:yr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&_?I.createElement(Tc.Provider,{value:{location:Yo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:or.Pop}},_):_}function ak(){let t=gk(),e=ZA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,null)}const lk=I.createElement(ak,null);class uk extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(zn.Provider,{value:this.props.routeContext},I.createElement(V1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ck(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Ic);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(zn.Provider,{value:e},r)}function dk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||pe(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:p}=n,v=d.route.loader&&f[d.route.id]===void 0&&(!p||p[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,f)=>{let p,v=!1,_=null,w=null;n&&(p=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||lk,l&&(u<0&&f===0?(vk("route-fallback",!1),v=!0,w=null):u===f&&(v=!0,w=d.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,f+1)),m=()=>{let y;return p?y=_:v?y=w:d.route.Component?y=I.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=c,I.createElement(ck,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?I.createElement(uk,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var j1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(j1||{}),bu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(bu||{});function hk(t){let e=I.useContext(Ic);return e||pe(!1),e}function fk(t){let e=I.useContext(M1);return e||pe(!1),e}function pk(t){let e=I.useContext(zn);return e||pe(!1),e}function $1(t){let e=pk(),n=e.matches[e.matches.length-1];return n.route.id||pe(!1),n.route.id}function gk(){var t;let e=I.useContext(V1),n=fk(bu.UseRouteError),r=$1(bu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function mk(){let{router:t}=hk(j1.UseNavigateStable),e=$1(bu.UseNavigateStable),n=I.useRef(!1);return F1(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Yo({fromRouteId:e},s)))},[t,e])}const fy={};function vk(t,e,n){!e&&!fy[t]&&(fy[t]=!0)}function yk(t){let{to:e,replace:n,state:r,relative:i}=t;Ns()||pe(!1);let{future:s,static:o}=I.useContext(Un),{matches:a}=I.useContext(zn),{pathname:l}=bs(),u=Ta(),c=vg(e,mg(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return I.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function _k(t){return ik(t.context)}function Te(t){pe(!1)}function wk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=or.Pop,navigator:s,static:o=!1,future:a}=t;Ns()&&pe(!1);let l=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:s,static:o,future:Yo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ps(r));let{pathname:c="/",search:d="",hash:f="",state:p=null,key:v="default"}=r,_=I.useMemo(()=>{let w=Qo(c,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:p,key:v},navigationType:i}},[l,c,d,f,p,v,i]);return _==null?null:I.createElement(Un.Provider,{value:u},I.createElement(Tc.Provider,{children:n,value:_}))}function Ek(t){let{children:e,location:n}=t;return sk(wf(e),n)}new Promise(()=>{});function wf(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,wf(r.props.children,s));return}r.type!==Te&&pe(!1),!r.props.index||!r.props.children||pe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=wf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ou(){return Ou=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ou.apply(this,arguments)}function U1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Sk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Ik(t,e){return t.button===0&&(!e||e==="_self")&&!Sk(t)}const Tk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ck=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Rk=I.createContext({isTransitioning:!1}),Ak="startTransition",py=_C[Ak];function kk(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=PA({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(d=>{u&&py?py(()=>l(d)):l(d)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(wk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const xk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z1=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,f=U1(e,Tk),{basename:p}=I.useContext(Un),v,_=!1;if(typeof u=="string"&&Pk.test(u)&&(v=u,xk))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),S=Qo(E.pathname,p);E.origin===y.origin&&S!=null?u=S+E.search+E.hash:_=!0}catch{}let w=tk(u,{relative:i}),g=bk(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function m(y){r&&r(y),y.defaultPrevented||g(y)}return I.createElement("a",Ou({},f,{href:v||w,onClick:_||s?r:m,ref:n,target:l}))}),ft=I.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=U1(e,Ck),f=Cc(l,{relative:d.relative}),p=bs(),v=I.useContext(M1),{navigator:_}=I.useContext(Un),w=v!=null&&Ok(f)&&u===!0,g=_.encodeLocation?_.encodeLocation(f).pathname:f.pathname,m=p.pathname,y=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(m=m.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase());const E=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let S=m===g||!o&&m.startsWith(g)&&m.charAt(E)==="/",A=y!=null&&(y===g||!o&&y.startsWith(g)&&y.charAt(g.length)==="/"),k={isActive:S,isPending:A,isTransitioning:w},P=S?r:void 0,H;typeof s=="function"?H=s(k):H=[s,S?"active":null,A?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let F=typeof a=="function"?a(k):a;return I.createElement(z1,Ou({},d,{"aria-current":P,className:H,ref:n,style:F,to:l,unstable_viewTransition:u}),typeof c=="function"?c(k):c)});var Ef;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Ef||(Ef={}));var gy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(gy||(gy={}));function Nk(t){let e=I.useContext(Ic);return e||pe(!1),e}function bk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ta(),u=bs(),c=Cc(t,{relative:o});return I.useCallback(d=>{if(Ik(d,n)){d.preventDefault();let f=r!==void 0?r:Nu(u)===Nu(c);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function Ok(t,e){e===void 0&&(e={});let n=I.useContext(Rk);n==null&&pe(!1);let{basename:r}=Nk(Ef.useViewTransitionState),i=Cc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Qo(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Qo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return _f(i.pathname,o)!=null||_f(i.pathname,s)!=null}var my={};/**
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
 */const B1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Dk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},H1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(f=64)),r.push(n[c],n[d],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(B1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Dk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new Lk;const f=s<<2|a>>4;if(r.push(f),u!==64){const p=a<<4&240|u>>2;if(r.push(p),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Lk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mk=function(t){const e=B1(t);return H1.encodeByteArray(e,!0)},Du=function(t){return Mk(t).replace(/\./g,"")},W1=function(t){try{return H1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Vk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fk=()=>Vk().__FIREBASE_DEFAULTS__,jk=()=>{if(typeof process>"u"||typeof my>"u")return;const t=my.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$k=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&W1(t[1]);return e&&JSON.parse(e)},yg=()=>{try{return Fk()||jk()||$k()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},G1=t=>{var e,n;return(n=(e=yg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},q1=t=>{const e=G1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},K1=()=>{var t;return(t=yg())===null||t===void 0?void 0:t.config},Q1=t=>{var e;return(e=yg())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Uk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Y1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Du(JSON.stringify(n)),Du(JSON.stringify(o)),""].join(".")}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function Bk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Hk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wk(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gk(){try{return typeof indexedDB=="object"}catch{return!1}}function qk(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Kk="FirebaseError";class yn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Kk,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ca.prototype.create)}}class Ca{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Qk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new yn(i,a,r)}}function Qk(t,e){return t.replace(Yk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Yk=/\{\$([^}]+)}/g;function Xk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vy(s)&&vy(o)){if(!Lu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vy(t){return t!==null&&typeof t=="object"}/**
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
 */function Ra(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function so(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function oo(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jk(t,e){const n=new Zk(t,e);return n.subscribe.bind(n)}class Zk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ex(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wd),i.error===void 0&&(i.error=Wd),i.complete===void 0&&(i.complete=Wd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ex(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wd(){}/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class tx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Uk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rx(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nx(t){return t===Wr?void 0:t}function rx(t){return t.instantiationMode==="EAGER"}/**
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
 */class ix{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const sx={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},ox=X.INFO,ax={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},lx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ax[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _g{constructor(e){this.name=e,this._logLevel=ox,this._logHandler=lx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const ux=(t,e)=>e.some(n=>t instanceof n);let yy,_y;function cx(){return yy||(yy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dx(){return _y||(_y=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const X1=new WeakMap,Sf=new WeakMap,J1=new WeakMap,Gd=new WeakMap,wg=new WeakMap;function hx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_r(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&X1.set(n,t)}).catch(()=>{}),wg.set(e,t),e}function fx(t){if(Sf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Sf.set(t,e)}let If={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||J1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function px(t){If=t(If)}function gx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qd(this),e,...n);return J1.set(r,e.sort?e.sort():[e]),_r(r)}:dx().includes(t)?function(...e){return t.apply(qd(this),e),_r(X1.get(this))}:function(...e){return _r(t.apply(qd(this),e))}}function mx(t){return typeof t=="function"?gx(t):(t instanceof IDBTransaction&&fx(t),ux(t,cx())?new Proxy(t,If):t)}function _r(t){if(t instanceof IDBRequest)return hx(t);if(Gd.has(t))return Gd.get(t);const e=mx(t);return e!==t&&(Gd.set(t,e),wg.set(e,t)),e}const qd=t=>wg.get(t);function vx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_r(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_r(o.result),l.oldVersion,l.newVersion,_r(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const yx=["get","getKey","getAll","getAllKeys","count"],_x=["put","add","delete","clear"],Kd=new Map;function wy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kd.get(e))return Kd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=_x.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yx.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Kd.set(e,s),s}px(t=>({...t,get:(e,n,r)=>wy(e,n)||t.get(e,n,r),has:(e,n)=>!!wy(e,n)||t.has(e,n)}));/**
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
 */class wx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ex(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ex(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tf="@firebase/app",Ey="0.9.25";/**
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
 */const ci=new _g("@firebase/app"),Sx="@firebase/app-compat",Ix="@firebase/analytics-compat",Tx="@firebase/analytics",Cx="@firebase/app-check-compat",Rx="@firebase/app-check",Ax="@firebase/auth",kx="@firebase/auth-compat",xx="@firebase/database",Px="@firebase/database-compat",Nx="@firebase/functions",bx="@firebase/functions-compat",Ox="@firebase/installations",Dx="@firebase/installations-compat",Lx="@firebase/messaging",Mx="@firebase/messaging-compat",Vx="@firebase/performance",Fx="@firebase/performance-compat",jx="@firebase/remote-config",$x="@firebase/remote-config-compat",Ux="@firebase/storage",zx="@firebase/storage-compat",Bx="@firebase/firestore",Hx="@firebase/firestore-compat",Wx="firebase",Gx="10.7.1";/**
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
 */const Cf="[DEFAULT]",qx={[Tf]:"fire-core",[Sx]:"fire-core-compat",[Tx]:"fire-analytics",[Ix]:"fire-analytics-compat",[Rx]:"fire-app-check",[Cx]:"fire-app-check-compat",[Ax]:"fire-auth",[kx]:"fire-auth-compat",[xx]:"fire-rtdb",[Px]:"fire-rtdb-compat",[Nx]:"fire-fn",[bx]:"fire-fn-compat",[Ox]:"fire-iid",[Dx]:"fire-iid-compat",[Lx]:"fire-fcm",[Mx]:"fire-fcm-compat",[Vx]:"fire-perf",[Fx]:"fire-perf-compat",[jx]:"fire-rc",[$x]:"fire-rc-compat",[Ux]:"fire-gcs",[zx]:"fire-gcs-compat",[Bx]:"fire-fst",[Hx]:"fire-fst-compat","fire-js":"fire-js",[Wx]:"fire-js-all"};/**
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
 */const Mu=new Map,Rf=new Map;function Kx(t,e){try{t.container.addComponent(e)}catch(n){ci.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function di(t){const e=t.name;if(Rf.has(e))return ci.debug(`There were multiple attempts to register component ${e}.`),!1;Rf.set(e,t);for(const n of Mu.values())Kx(n,t);return!0}function Rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},wr=new Ca("app","Firebase",Qx);/**
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
 */class Yx{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ii=Gx;function Z1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=K1()),!n)throw wr.create("no-options");const s=Mu.get(i);if(s){if(Lu(n,s.options)&&Lu(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new ix(i);for(const l of Rf.values())o.addComponent(l);const a=new Yx(n,r,o);return Mu.set(i,a),a}function Eg(t=Cf){const e=Mu.get(t);if(!e&&t===Cf&&K1())return Z1();if(!e)throw wr.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let i=(r=qx[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ci.warn(a.join(" "));return}di(new Cr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Xx="firebase-heartbeat-database",Jx=1,Xo="firebase-heartbeat-store";let Qd=null;function eE(){return Qd||(Qd=vx(Xx,Jx,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xo)}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Qd}async function Zx(t){try{return await(await eE()).transaction(Xo).objectStore(Xo).get(tE(t))}catch(e){if(e instanceof yn)ci.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ci.warn(n.message)}}}async function Sy(t,e){try{const r=(await eE()).transaction(Xo,"readwrite");await r.objectStore(Xo).put(e,tE(t)),await r.done}catch(n){if(n instanceof yn)ci.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ci.warn(r.message)}}}function tE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eP=1024,tP=30*24*60*60*1e3;class nP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Iy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=tP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Iy(),{heartbeatsToSend:r,unsentEntries:i}=rP(this._heartbeatsCache.heartbeats),s=Du(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Iy(){return new Date().toISOString().substring(0,10)}function rP(t,e=eP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ty(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ty(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Gk()?qk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Zx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ty(t){return Du(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sP(t){di(new Cr("platform-logger",e=>new wx(e),"PRIVATE")),di(new Cr("heartbeat",e=>new nP(e),"PRIVATE")),cn(Tf,Ey,t),cn(Tf,Ey,"esm2017"),cn("fire-js","")}sP("");var oP="firebase",aP="10.7.1";/**
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
 */cn(oP,aP,"app");function Sg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function nE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lP=nE,rE=new Ca("auth","Firebase",nE());/**
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
 */const Vu=new _g("@firebase/auth");function uP(t,...e){Vu.logLevel<=X.WARN&&Vu.warn(`Auth (${Ii}): ${t}`,...e)}function Xl(t,...e){Vu.logLevel<=X.ERROR&&Vu.error(`Auth (${Ii}): ${t}`,...e)}/**
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
 */function Xt(t,...e){throw Ig(t,...e)}function dn(t,...e){return Ig(t,...e)}function cP(t,e,n){const r=Object.assign(Object.assign({},lP()),{[e]:n});return new Ca("auth","Firebase",r).create(e,{appName:t.name})}function Ig(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return rE.create(t,...e)}function $(t,e,...n){if(!t)throw Ig(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xl(e),new Error(e)}function bn(t,e){t||Tn(e)}/**
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
 */function Af(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function dP(){return Cy()==="http:"||Cy()==="https:"}function Cy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function hP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dP()||Bk()||"connection"in navigator)?navigator.onLine:!0}function fP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=zk()||Hk()}get(){return hP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tg(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class iE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const gP=new Aa(3e4,6e4);function Mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Bn(t,e,n,r,i={}){return sE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ra(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),iE.fetch()(oE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function sE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},pP),e);try{const i=new vP(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw gl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw gl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw gl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw gl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw cP(t,c,u);Xt(t,c)}}catch(i){if(i instanceof yn)throw i;Xt(t,"network-request-failed",{message:String(i)})}}async function ka(t,e,n,r,i={}){const s=await Bn(t,e,n,r,i);return"mfaPendingCredential"in s&&Xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function oE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Tg(t.config,i):`${t.config.apiScheme}://${i}`}function mP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(dn(this.auth,"network-request-failed")),gP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function gl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=dn(t,e,r);return i.customData._tokenResponse=n,i}function Ry(t){return t!==void 0&&t.enterprise!==void 0}class yP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return mP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _P(t,e){return Bn(t,"GET","/v2/recaptchaConfig",Mr(t,e))}/**
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
 */async function wP(t,e){return Bn(t,"POST","/v1/accounts:delete",e)}async function EP(t,e){return Bn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function So(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function SP(t,e=!1){const n=ke(t),r=await n.getIdToken(e),i=Cg(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:So(Yd(i.auth_time)),issuedAtTime:So(Yd(i.iat)),expirationTime:So(Yd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yd(t){return Number(t)*1e3}function Cg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Xl("JWT malformed, contained fewer than 3 sections"),null;try{const i=W1(n);return i?JSON.parse(i):(Xl("Failed to decode base64 JWT payload"),null)}catch(i){return Xl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function IP(t){const e=Cg(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ms(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof yn&&TP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function TP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class CP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class aE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=So(this.lastLoginAt),this.creationTime=So(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ms(t,EP(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kP(s.providerUserInfo):[],a=AP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function RP(t){const e=ke(t);await Fu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kP(t){return t.map(e=>{var{providerId:n}=e,r=Sg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function xP(t,e){const n=await sE(t,{},async()=>{const r=Ra({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=oE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",iE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function PP(t,e){return Bn(t,"POST","/v2/accounts:revokeToken",Mr(t,e))}/**
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
 */class Jo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):IP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await xP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Jo;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jo,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function qn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ni{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Sg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new aE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ms(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return SP(this,e)}reload(){return RP(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ni(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ms(this,wP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:E,isAnonymous:S,providerData:A,stsTokenManager:k}=n;$(y&&k,e,"internal-error");const P=Jo.fromJSON(this.name,k);$(typeof y=="string",e,"internal-error"),qn(d,e.name),qn(f,e.name),$(typeof E=="boolean",e,"internal-error"),$(typeof S=="boolean",e,"internal-error"),qn(p,e.name),qn(v,e.name),qn(_,e.name),qn(w,e.name),qn(g,e.name),qn(m,e.name);const H=new ni({uid:y,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:S,photoURL:v,phoneNumber:p,tenantId:_,stsTokenManager:P,createdAt:g,lastLoginAt:m});return A&&Array.isArray(A)&&(H.providerData=A.map(F=>Object.assign({},F))),w&&(H._redirectEventId=w),H}static async _fromIdTokenResponse(e,n,r=!1){const i=new Jo;i.updateFromServerResponse(n);const s=new ni({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fu(s),s}}/**
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
 */const Ay=new Map;function Cn(t){bn(t instanceof Function,"Expected a class definition");let e=Ay.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ay.set(t,e),e)}/**
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
 */class lE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}lE.type="NONE";const ky=lE;/**
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
 */function Jl(t,e,n){return`firebase:${t}:${e}:${n}`}class rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Jl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Jl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ni._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rs(Cn(ky),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Cn(ky);const o=Jl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=ni._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new rs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new rs(s,e,r))}}/**
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
 */function xy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(uE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fE(e))return"Blackberry";if(pE(e))return"Webos";if(Rg(e))return"Safari";if((e.includes("chrome/")||cE(e))&&!e.includes("edge/"))return"Chrome";if(hE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function uE(t=it()){return/firefox\//i.test(t)}function Rg(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cE(t=it()){return/crios\//i.test(t)}function dE(t=it()){return/iemobile/i.test(t)}function hE(t=it()){return/android/i.test(t)}function fE(t=it()){return/blackberry/i.test(t)}function pE(t=it()){return/webos/i.test(t)}function Ac(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function NP(t=it()){var e;return Ac(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bP(){return Wk()&&document.documentMode===10}function gE(t=it()){return Ac(t)||hE(t)||pE(t)||fE(t)||/windows phone/i.test(t)||dE(t)}function OP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function mE(t,e=[]){let n;switch(t){case"Browser":n=xy(it());break;case"Worker":n=`${xy(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ii}/${r}`}/**
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
 */class DP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function LP(t,e={}){return Bn(t,"GET","/v2/passwordPolicy",Mr(t,e))}/**
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
 */const MP=6;class VP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:MP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class FP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Py(this),this.idTokenSubscription=new Py(this),this.beforeStateQueue=new DP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ke(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LP(this),n=new VP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ca("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await PP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ti(t){return ke(t)}class Py{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jk(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function jP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function vE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=dn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jP().appendChild(r)})}function $P(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const UP="https://www.google.com/recaptcha/enterprise.js?render=",zP="recaptcha-enterprise",BP="NO_RECAPTCHA";class HP{constructor(e){this.type=zP,this.auth=Ti(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{_P(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new yP(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Ry(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(BP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Ry(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}vE(UP+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ny(t,e,n,r=!1){const i=new HP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function kf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Ny(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ny(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function WP(t,e){const n=Rc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Lu(s,e??{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function GP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qP(t,e,n){const r=Ti(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=yE(e),{host:o,port:a}=KP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||QP()}function yE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function KP(t){const e=yE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:by(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:by(o)}}}function by(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function QP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ag{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function YP(t,e){return Bn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function XP(t,e){return ka(t,"POST","/v1/accounts:signInWithPassword",Mr(t,e))}/**
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
 */async function JP(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}async function ZP(t,e){return ka(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}/**
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
 */class Zo extends Ag{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Zo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kf(e,n,"signInWithPassword",XP);case"emailLink":return JP(e,{email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return kf(e,r,"signUpPassword",YP);case"emailLink":return ZP(e,{idToken:n,email:this._email,oobCode:this._password});default:Xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function is(t,e){return ka(t,"POST","/v1/accounts:signInWithIdp",Mr(t,e))}/**
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
 */const e2="http://localhost";class hi extends Ag{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Sg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:e2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ra(n)}return e}}/**
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
 */function t2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function n2(t){const e=so(oo(t)).link,n=e?so(oo(e)).deep_link_id:null,r=so(oo(t)).deep_link_id;return(r?so(oo(r)).link:null)||r||n||e||t}class kg{constructor(e){var n,r,i,s,o,a;const l=so(oo(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=t2((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=n2(e);try{return new kg(n)}catch{return null}}}/**
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
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return Zo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=kg.parseLink(n);return $(r,"argument-error"),Zo._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _E{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xa extends _E{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zn extends xa{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
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
 */class er extends xa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
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
 */class tr extends xa{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */class nr extends xa{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */async function r2(t,e){return ka(t,"POST","/v1/accounts:signUp",Mr(t,e))}/**
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
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ni._fromIdTokenResponse(e,r,i),o=Oy(r);return new fi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Oy(r);return new fi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Oy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ju extends yn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ju.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ju(e,n,r,i)}}function wE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ju._fromErrorAndOperation(t,s,e,r):s})}async function i2(t,e,n=!1){const r=await ms(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
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
 */async function s2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ms(t,wE(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=Cg(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),fi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Xt(r,"user-mismatch"),s}}/**
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
 */async function EE(t,e,n=!1){const r="signIn",i=await wE(t,r,e),s=await fi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function o2(t,e){return EE(Ti(t),e)}/**
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
 */async function SE(t){const e=Ti(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function a2(t,e,n){const r=Ti(t),o=await kf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",r2).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&SE(t),l}),a=await fi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function l2(t,e,n){return o2(ke(t),Os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&SE(t),r})}/**
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
 */async function u2(t,e){return Bn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function c2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ke(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ms(r,u2(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function d2(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function h2(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}const $u="__sak";/**
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
 */class IE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($u,"1"),this.storage.removeItem($u),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function f2(){const t=it();return Rg(t)||Ac(t)}const p2=1e3,g2=10;class TE extends IE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=f2()&&OP(),this.fallbackToPolling=gE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);bP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,g2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},p2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TE.type="LOCAL";const m2=TE;/**
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
 */class CE extends IE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}CE.type="SESSION";const RE=CE;/**
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
 */function v2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await v2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
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
 */function xg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class y2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=xg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function hn(){return window}function _2(t){hn().location.href=t}/**
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
 */function AE(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function w2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function E2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function S2(){return AE()?self:null}/**
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
 */const kE="firebaseLocalStorageDb",I2=1,Uu="firebaseLocalStorage",xE="fbase_key";class Pa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xc(t,e){return t.transaction([Uu],e?"readwrite":"readonly").objectStore(Uu)}function T2(){const t=indexedDB.deleteDatabase(kE);return new Pa(t).toPromise()}function xf(){const t=indexedDB.open(kE,I2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uu,{keyPath:xE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uu)?e(r):(r.close(),await T2(),e(await xf()))})})}async function Dy(t,e,n){const r=xc(t,!0).put({[xE]:e,value:n});return new Pa(r).toPromise()}async function C2(t,e){const n=xc(t,!1).get(e),r=await new Pa(n).toPromise();return r===void 0?null:r.value}function Ly(t,e){const n=xc(t,!0).delete(e);return new Pa(n).toPromise()}const R2=800,A2=3;class PE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>A2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return AE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(S2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await w2(),!this.activeServiceWorker)return;this.sender=new y2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||E2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xf();return await Dy(e,$u,"1"),await Ly(e,$u),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>C2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ly(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xc(i,!1).getAll();return new Pa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),R2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}PE.type="LOCAL";const k2=PE;new Aa(3e4,6e4);/**
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
 */function x2(t,e){return e?Cn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Pg extends Ag{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function P2(t){return EE(t.auth,new Pg(t),t.bypassAuthState)}function N2(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),s2(n,new Pg(t),t.bypassAuthState)}async function b2(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),i2(n,new Pg(t),t.bypassAuthState)}/**
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
 */class NE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return P2;case"linkViaPopup":case"linkViaRedirect":return b2;case"reauthViaPopup":case"reauthViaRedirect":return N2;default:Xt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const O2=new Aa(2e3,1e4);class Gi extends NE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gi.currentPopupAction&&Gi.currentPopupAction.cancel(),Gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=xg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(dn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(dn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(dn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,O2.get())};e()}}Gi.currentPopupAction=null;/**
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
 */const D2="pendingRedirect",Zl=new Map;class L2 extends NE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zl.get(this.auth._key());if(!e){try{const r=await M2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zl.set(this.auth._key(),e)}return this.bypassAuthState||Zl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function M2(t,e){const n=j2(e),r=F2(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function V2(t,e){Zl.set(t._key(),e)}function F2(t){return Cn(t._redirectPersistence)}function j2(t){return Jl(D2,t.config.apiKey,t.name)}async function $2(t,e,n=!1){const r=Ti(t),i=x2(r,e),o=await new L2(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const U2=10*60*1e3;class z2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(dn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=U2&&this.cachedEventUids.clear(),this.cachedEventUids.has(My(e))}saveEventToCache(e){this.cachedEventUids.add(My(e)),this.lastProcessedEventTime=Date.now()}}function My(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function B2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bE(t);default:return!1}}/**
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
 */async function H2(t,e={}){return Bn(t,"GET","/v1/projects",e)}/**
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
 */const W2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,G2=/^https?/;async function q2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await H2(t);for(const n of e)try{if(K2(n))return}catch{}Xt(t,"unauthorized-domain")}function K2(t){const e=Af(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!G2.test(n))return!1;if(W2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Q2=new Aa(3e4,6e4);function Vy(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Y2(t){return new Promise((e,n)=>{var r,i,s;function o(){Vy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vy(),n(dn(t,"network-request-failed"))},timeout:Q2.get()})}if(!((i=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=hn().gapi)===null||s===void 0)&&s.load)o();else{const a=$P("iframefcb");return hn()[a]=()=>{gapi.load?o():n(dn(t,"network-request-failed"))},vE(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw eu=null,e})}let eu=null;function X2(t){return eu=eu||Y2(t),eu}/**
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
 */const J2=new Aa(5e3,15e3),Z2="__/auth/iframe",eN="emulator/auth/iframe",tN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},nN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rN(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tg(e,eN):`https://${t.config.authDomain}/${Z2}`,r={apiKey:e.apiKey,appName:t.name,v:Ii},i=nN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ra(r).slice(1)}`}async function iN(t){const e=await X2(t),n=hn().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:rN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:tN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=dn(t,"network-request-failed"),a=hn().setTimeout(()=>{s(o)},J2.get());function l(){hn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const sN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oN=500,aN=600,lN="_blank",uN="http://localhost";class Fy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cN(t,e,n,r=oN,i=aN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sN),{width:r.toString(),height:i.toString(),top:s,left:o}),u=it().toLowerCase();n&&(a=cE(u)?lN:n),uE(u)&&(e=e||uN,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[p,v])=>`${f}${p}=${v},`,"");if(NP(u)&&a!=="_self")return dN(e||"",a),new Fy(null);const d=window.open(e||"",a,c);$(d,t,"popup-blocked");try{d.focus()}catch{}return new Fy(d)}function dN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const hN="__/auth/handler",fN="emulator/auth/handler",pN=encodeURIComponent("fac");async function jy(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ii,eventId:i};if(e instanceof _E){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Xk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof xa){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${pN}=${encodeURIComponent(l)}`:"";return`${gN(t)}?${Ra(a).slice(1)}${u}`}function gN({config:t}){return t.emulator?Tg(t,fN):`https://${t.authDomain}/${hN}`}/**
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
 */const Xd="webStorageSupport";class mN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=RE,this._completeRedirectFn=$2,this._overrideRedirectResult=V2}async _openPopup(e,n,r,i){var s;bn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await jy(e,n,r,Af(),i);return cN(e,o,xg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await jy(e,n,r,Af(),i);return _2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(bn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await iN(e),r=new z2(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xd,{type:Xd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Xd];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=q2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return gE()||Rg()||Ac()}}const vN=mN;var $y="@firebase/auth",Uy="1.5.1";/**
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
 */class yN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function _N(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function wN(t){di(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mE(t)},u=new FP(r,i,s,l);return GP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),di(new Cr("auth-internal",e=>{const n=Ti(e.getProvider("auth").getImmediate());return(r=>new yN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn($y,Uy,_N(t)),cn($y,Uy,"esm2017")}/**
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
 */const EN=5*60,SN=Q1("authIdTokenMaxAge")||EN;let zy=null;const IN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>SN)return;const i=n==null?void 0:n.token;zy!==i&&(zy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OE(t=Eg()){const e=Rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=WP(t,{popupRedirectResolver:vN,persistence:[k2,m2,RE]}),r=Q1("authTokenSyncURL");if(r){const s=IN(r);h2(n,s,()=>s(n.currentUser)),d2(n,o=>s(o))}const i=G1("auth");return i&&qP(n,`http://${i}`),n}wN("Browser");var TN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Ng=Ng||{},z=TN||self;function Pc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Na(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function CN(t){return Object.prototype.hasOwnProperty.call(t,Jd)&&t[Jd]||(t[Jd]=++RN)}var Jd="closure_uid_"+(1e9*Math.random()>>>0),RN=0;function AN(t,e,n){return t.call.apply(t.bind,arguments)}function kN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function tt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tt=AN:tt=kN,tt.apply(null,arguments)}function ml(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Vr(){this.s=this.s,this.o=this.o}var xN=0;Vr.prototype.s=!1;Vr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),xN!=0)&&CN(this)};Vr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const DE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function bg(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function By(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Pc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function nt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}nt.prototype.h=function(){this.defaultPrevented=!0};var PN=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};z.addEventListener("test",n,e),z.removeEventListener("test",n,e)}catch{}return t}();function ea(t){return/^[\s\xa0]*$/.test(t)}function Nc(){var t=z.navigator;return t&&(t=t.userAgent)?t:""}function nn(t){return Nc().indexOf(t)!=-1}function Og(t){return Og[" "](t),t}Og[" "]=function(){};function NN(t,e){var n=Ib;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var bN=nn("Opera"),vs=nn("Trident")||nn("MSIE"),LE=nn("Edge"),Pf=LE||vs,ME=nn("Gecko")&&!(Nc().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge"))&&!(nn("Trident")||nn("MSIE"))&&!nn("Edge"),ON=Nc().toLowerCase().indexOf("webkit")!=-1&&!nn("Edge");function VE(){var t=z.document;return t?t.documentMode:void 0}var Nf;e:{var Zd="",eh=function(){var t=Nc();if(ME)return/rv:([^\);]+)(\)|;)/.exec(t);if(LE)return/Edge\/([\d\.]+)/.exec(t);if(vs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ON)return/WebKit\/(\S+)/.exec(t);if(bN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(eh&&(Zd=eh?eh[1]:""),vs){var th=VE();if(th!=null&&th>parseFloat(Zd)){Nf=String(th);break e}}Nf=Zd}var bf;if(z.document&&vs){var Hy=VE();bf=Hy||parseInt(Nf,10)||void 0}else bf=void 0;var DN=bf;function ta(t,e){if(nt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ME){e:{try{Og(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:LN[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ta.$.h.call(this)}}je(ta,nt);var LN={2:"touch",3:"pen",4:"mouse"};ta.prototype.h=function(){ta.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ba="closure_listenable_"+(1e6*Math.random()|0),MN=0;function VN(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++MN,this.fa=this.ia=!1}function bc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Dg(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function FN(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function FE(t){const e={};for(const n in t)e[n]=t[n];return e}const Wy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Wy.length;s++)n=Wy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Oc(t){this.src=t,this.g={},this.h=0}Oc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Df(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new VN(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Of(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=DE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(bc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Df(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Lg="closure_lm_"+(1e6*Math.random()|0),nh={};function $E(t,e,n,r,i){if(r&&r.once)return zE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$E(t,e[s],n,r,i);return null}return n=Fg(n),t&&t[ba]?t.O(e,n,Na(r)?!!r.capture:!!r,i):UE(t,e,n,!1,r,i)}function UE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Na(i)?!!i.capture:!!i,a=Vg(t);if(a||(t[Lg]=a=new Oc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=jN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)PN||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(HE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function jN(){function t(n){return e.call(t.src,t.listener,n)}const e=$N;return t}function zE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)zE(t,e[s],n,r,i);return null}return n=Fg(n),t&&t[ba]?t.P(e,n,Na(r)?!!r.capture:!!r,i):UE(t,e,n,!0,r,i)}function BE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)BE(t,e[s],n,r,i);else r=Na(r)?!!r.capture:!!r,n=Fg(n),t&&t[ba]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Df(s,n,r,i),-1<n&&(bc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Vg(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Df(e,n,r,i)),(n=-1<t?e[t]:null)&&Mg(n))}function Mg(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ba])Of(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(HE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Vg(e))?(Of(n,t),n.h==0&&(n.src=null,e[Lg]=null)):bc(t)}}}function HE(t){return t in nh?nh[t]:nh[t]="on"+t}function $N(t,e){if(t.fa)t=!0;else{e=new ta(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Mg(t),t=n.call(r,e)}return t}function Vg(t){return t=t[Lg],t instanceof Oc?t:null}var rh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fg(t){return typeof t=="function"?t:(t[rh]||(t[rh]=function(e){return t.handleEvent(e)}),t[rh])}function Fe(){Vr.call(this),this.i=new Oc(this),this.S=this,this.J=null}je(Fe,Vr);Fe.prototype[ba]=!0;Fe.prototype.removeEventListener=function(t,e,n,r){BE(this,t,e,n,r)};function We(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new nt(e,t);else if(e instanceof nt)e.target=e.target||t;else{var i=e;e=new nt(r,t),jE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=vl(o,r,!0,e)&&i}if(o=e.g=t,i=vl(o,r,!0,e)&&i,i=vl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=vl(o,r,!1,e)&&i}Fe.prototype.N=function(){if(Fe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)bc(n[r]);delete t.g[e],t.h--}}this.J=null};Fe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Fe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function vl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Of(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var jg=z.JSON.stringify;class UN{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function zN(){var t=$g;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class BN{constructor(){this.h=this.g=null}add(e,n){const r=WE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var WE=new UN(()=>new HN,t=>t.reset());class HN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function WN(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function GN(t){z.setTimeout(()=>{throw t},0)}let na,ra=!1,$g=new BN,GE=()=>{const t=z.Promise.resolve(void 0);na=()=>{t.then(qN)}};var qN=()=>{for(var t;t=zN();){try{t.h.call(t.g)}catch(n){GN(n)}var e=WE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ra=!1};function Dc(t,e){Fe.call(this),this.h=t||1,this.g=e||z,this.j=tt(this.qb,this),this.l=Date.now()}je(Dc,Fe);x=Dc.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),We(this,"tick"),this.ga&&(Ug(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ug(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Dc.$.N.call(this),Ug(this),delete this.g};function zg(t,e,n){if(typeof t=="function")n&&(t=tt(t,n));else if(t&&typeof t.handleEvent=="function")t=tt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:z.setTimeout(t,e||0)}function qE(t){t.g=zg(()=>{t.g=null,t.i&&(t.i=!1,qE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KN extends Vr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qE(this)}N(){super.N(),this.g&&(z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ia(t){Vr.call(this),this.h=t,this.g={}}je(ia,Vr);var Gy=[];function KE(t,e,n,r){Array.isArray(n)||(n&&(Gy[0]=n.toString()),n=Gy);for(var i=0;i<n.length;i++){var s=$E(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function QE(t){Dg(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mg(e)},t),t.g={}}ia.prototype.N=function(){ia.$.N.call(this),QE(this)};ia.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lc(){this.g=!0}Lc.prototype.Ea=function(){this.g=!1};function QN(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function YN(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function qi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+JN(t,n)+(r?" "+r:"")})}function XN(t,e){t.info(function(){return"TIMEOUT: "+e})}Lc.prototype.info=function(){};function JN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return jg(n)}catch{return e}}var Ci={},qy=null;function Mc(){return qy=qy||new Fe}Ci.Ta="serverreachability";function YE(t){nt.call(this,Ci.Ta,t)}je(YE,nt);function sa(t){const e=Mc();We(e,new YE(e))}Ci.STAT_EVENT="statevent";function XE(t,e){nt.call(this,Ci.STAT_EVENT,t),this.stat=e}je(XE,nt);function lt(t){const e=Mc();We(e,new XE(e,t))}Ci.Ua="timingevent";function JE(t,e){nt.call(this,Ci.Ua,t),this.size=e}je(JE,nt);function Oa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return z.setTimeout(function(){t()},e)}var Vc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ZE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Bg(){}Bg.prototype.h=null;function Ky(t){return t.h||(t.h=t.i())}function eS(){}var Da={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Hg(){nt.call(this,"d")}je(Hg,nt);function Wg(){nt.call(this,"c")}je(Wg,nt);var Lf;function Fc(){}je(Fc,Bg);Fc.prototype.g=function(){return new XMLHttpRequest};Fc.prototype.i=function(){return{}};Lf=new Fc;function La(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ia(this),this.P=ZN,t=Pf?125:void 0,this.V=new Dc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new tS}function tS(){this.i=null,this.g="",this.h=!1}var ZN=45e3,nS={},Mf={};x=La.prototype;x.setTimeout=function(t){this.P=t};function Vf(t,e,n){t.L=1,t.A=$c(On(e)),t.u=n,t.S=!0,rS(t,null)}function rS(t,e){t.G=Date.now(),Ma(t),t.B=On(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),dS(n.i,"t",r),t.o=0,n=t.l.J,t.h=new tS,t.g=bS(t.l,n?e:null,!t.u),0<t.O&&(t.M=new KN(tt(t.Pa,t,t.g),t.O)),KE(t.U,t.g,"readystatechange",t.nb),e=t.I?FE(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),sa(),QN(t.j,t.v,t.B,t.m,t.W,t.u)}x.nb=function(t){t=t.target;const e=this.M;e&&rn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const c=rn(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Pf||this.g&&(this.h.h||this.g.ja()||Jy(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?sa(3):sa(2)),jc(this);var n=this.g.da();this.ca=n;t:if(iS(this)){var r=Jy(this.g);t="";var i=r.length,s=rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),Io(this);var o="";break t}this.h.i=new z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,YN(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ea(a)){var u=a;break t}}u=null}if(n=u)qi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ff(this,n);else{this.i=!1,this.s=3,lt(12),Qr(this),Io(this);break e}}this.S?(sS(this,c,o),Pf&&this.i&&c==3&&(KE(this.U,this.V,"tick",this.mb),this.V.start())):(qi(this.j,this.m,o,null),Ff(this,o)),c==4&&Qr(this),this.i&&!this.J&&(c==4?kS(this.l,this):(this.i=!1,Ma(this)))}else wb(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Qr(this),Io(this)}}}catch{}finally{}};function iS(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function sS(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=eb(t,n),i==Mf){e==4&&(t.s=4,lt(14),r=!1),qi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==nS){t.s=4,lt(15),qi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qi(t.j,t.m,i,null),Ff(t,i);iS(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xg(e),e.M=!0,lt(11))):(qi(t.j,t.m,n,"[Invalid Chunked Response]"),Qr(t),Io(t))}x.mb=function(){if(this.g){var t=rn(this.g),e=this.g.ja();this.o<e.length&&(jc(this),sS(this,t,e),this.i&&t!=4&&Ma(this))}};function eb(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Mf:(n=Number(e.substring(n,r)),isNaN(n)?nS:(r+=1,r+n>e.length?Mf:(e=e.slice(r,r+n),t.o=r+n,e)))}x.cancel=function(){this.J=!0,Qr(this)};function Ma(t){t.Y=Date.now()+t.P,oS(t,t.P)}function oS(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Oa(tt(t.lb,t),e)}function jc(t){t.C&&(z.clearTimeout(t.C),t.C=null)}x.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(XN(this.j,this.B),this.L!=2&&(sa(),lt(17)),Qr(this),this.s=2,Io(this)):oS(this,this.Y-t)};function Io(t){t.l.H==0||t.J||kS(t.l,t)}function Qr(t){jc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ug(t.V),QE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ff(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||jf(n.i,t))){if(!t.K&&jf(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Hu(n),Hc(n);else break e;Yg(n),lt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Oa(tt(n.ib,n),6e3));if(1>=pS(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Yr(n,11)}else if((t.K||n.g==t)&&Hu(n),!ea(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Gg(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,ae(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=NS(r,r.J?r.pa:null,r.Y),o.K){gS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(jc(a),Ma(a)),r.g=o}else RS(r);0<n.j.length&&Wc(n)}else u[0]!="stop"&&u[0]!="close"||Yr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Yr(n,7):Qg(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}sa(4)}catch{}}function tb(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Pc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function nb(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Pc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function aS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Pc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=nb(t),r=tb(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var lS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rb(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ri(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ri){this.h=t.h,zu(this,t.j),this.s=t.s,this.g=t.g,Bu(this,t.m),this.l=t.l;var e=t.i,n=new oa;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Qy(this,n),this.o=t.o}else t&&(e=String(t).match(lS))?(this.h=!1,zu(this,e[1]||"",!0),this.s=ao(e[2]||""),this.g=ao(e[3]||"",!0),Bu(this,e[4]),this.l=ao(e[5]||"",!0),Qy(this,e[6]||"",!0),this.o=ao(e[7]||"")):(this.h=!1,this.i=new oa(null,this.h))}ri.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lo(e,Yy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lo(e,Yy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(lo(n,n.charAt(0)=="/"?ob:sb,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lo(n,lb)),t.join("")};function On(t){return new ri(t)}function zu(t,e,n){t.j=n?ao(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Bu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qy(t,e,n){e instanceof oa?(t.i=e,ub(t.i,t.h)):(n||(e=lo(e,ab)),t.i=new oa(e,t.h))}function ae(t,e,n){t.i.set(e,n)}function $c(t){return ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ao(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,ib),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ib(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Yy=/[#\/\?@]/g,sb=/[#\?:]/g,ob=/[#\?]/g,ab=/[#\?@]/g,lb=/#/g;function oa(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fr(t){t.g||(t.g=new Map,t.h=0,t.i&&rb(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=oa.prototype;x.add=function(t,e){Fr(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function uS(t,e){Fr(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function cS(t,e){return Fr(t),e=Ds(t,e),t.g.has(e)}x.forEach=function(t,e){Fr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.ta=function(){Fr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};x.Z=function(t){Fr(this);let e=[];if(typeof t=="string")cS(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Fr(this),this.i=null,t=Ds(this,t),cS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function dS(t,e,n){uS(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),bg(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function ub(t,e){e&&!t.j&&(Fr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(uS(this,r),dS(this,i,n))},t)),t.j=e}var cb=class{constructor(t,e){this.g=t,this.map=e}};function hS(t){this.l=t||db,z.PerformanceNavigationTiming?(t=z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(z.g&&z.g.Ka&&z.g.Ka()&&z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var db=10;function fS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function pS(t){return t.h?1:t.g?t.g.size:0}function jf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Gg(t,e){t.g?t.g.add(e):t.h=e}function gS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}hS.prototype.cancel=function(){if(this.i=mS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function mS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return bg(t.i)}var hb=class{stringify(t){return z.JSON.stringify(t,void 0)}parse(t){return z.JSON.parse(t,void 0)}};function fb(){this.g=new hb}function pb(t,e,n){const r=n||"";try{aS(t,function(i,s){let o=i;Na(i)&&(o=jg(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function gb(t,e){const n=new Lc;if(z.Image){const r=new Image;r.onload=ml(yl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ml(yl,n,r,"TestLoadImage: error",!1,e),r.onabort=ml(yl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ml(yl,n,r,"TestLoadImage: timeout",!1,e),z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function yl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Uc(t){this.l=t.ec||null,this.j=t.ob||!1}je(Uc,Bg);Uc.prototype.g=function(){return new zc(this.l,this.j)};Uc.prototype.i=function(t){return function(){return t}}({});function zc(t,e){Fe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=qg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(zc,Fe);var qg=0;x=zc.prototype;x.open=function(t,e){if(this.readyState!=qg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,aa(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Va(this)),this.readyState=qg};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,aa(this)),this.g&&(this.readyState=3,aa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vS(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function vS(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Va(this):aa(this),this.readyState==3&&vS(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Va(this))};x.Ya=function(t){this.g&&(this.response=t,Va(this))};x.ka=function(){this.g&&Va(this)};function Va(t){t.readyState=4,t.l=null,t.j=null,t.A=null,aa(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function aa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(zc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var mb=z.JSON.parse;function _e(t){Fe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=yS,this.L=this.M=!1}je(_e,Fe);var yS="",vb=/^https?$/i,yb=["POST","PUT"];x=_e.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Lf.g(),this.C=this.u?Ky(this.u):Ky(Lf),this.g.onreadystatechange=tt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Xy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=z.FormData&&t instanceof z.FormData,!(0<=DE(yb,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{ES(this),0<this.B&&((this.L=_b(this.g))?(this.g.timeout=this.B,this.g.ontimeout=tt(this.ua,this)):this.A=zg(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Xy(this,s)}};function _b(t){return vs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Ng<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,We(this,"timeout"),this.abort(8))};function Xy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,_S(t),Bc(t)}function _S(t){t.F||(t.F=!0,We(t,"complete"),We(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,We(this,"complete"),We(this,"abort"),Bc(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bc(this,!0)),_e.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?wS(this):this.kb())};x.kb=function(){wS(this)};function wS(t){if(t.h&&typeof Ng<"u"&&(!t.C[1]||rn(t)!=4||t.da()!=2)){if(t.v&&rn(t)==4)zg(t.La,0,t);else if(We(t,"readystatechange"),rn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(lS)[1]||null;!i&&z.self&&z.self.location&&(i=z.self.location.protocol.slice(0,-1)),r=!vb.test(i?i.toLowerCase():"")}n=r}if(n)We(t,"complete"),We(t,"success");else{t.m=6;try{var s=2<rn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",_S(t)}}finally{Bc(t)}}}}function Bc(t,e){if(t.g){ES(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||We(t,"ready");try{n.onreadystatechange=r}catch{}}}function ES(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(z.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function rn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<rn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),mb(e)}};function Jy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case yS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function wb(t){const e={};t=(t.g&&2<=rn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(ea(t[r]))continue;var n=WN(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}FN(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function SS(t){let e="";return Dg(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Kg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=SS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ae(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function IS(t){this.Ga=0,this.j=[],this.l=new Lc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ys("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ys("baseRetryDelayMs",5e3,t),this.hb=Ys("retryDelaySeedMs",1e4,t),this.eb=Ys("forwardChannelMaxRetries",2,t),this.xa=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new hS(t&&t.concurrentRequestLimit),this.Ja=new fb,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=IS.prototype;x.ra=8;x.H=1;function Qg(t){if(TS(t),t.H==3){var e=t.W++,n=On(t.I);if(ae(n,"SID",t.K),ae(n,"RID",e),ae(n,"TYPE","terminate"),Fa(t,n),e=new La(t,t.l,e),e.L=2,e.A=$c(On(n)),n=!1,z.navigator&&z.navigator.sendBeacon)try{n=z.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&z.Image&&(new Image().src=e.A,n=!0),n||(e.g=bS(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ma(e)}PS(t)}function Hc(t){t.g&&(Xg(t),t.g.cancel(),t.g=null)}function TS(t){Hc(t),t.u&&(z.clearTimeout(t.u),t.u=null),Hu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&z.clearTimeout(t.m),t.m=null)}function Wc(t){if(!fS(t.i)&&!t.m){t.m=!0;var e=t.Na;na||GE(),ra||(na(),ra=!0),$g.add(e,t),t.C=0}}function Eb(t,e){return pS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Oa(tt(t.Na,t,e),xS(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new La(this,this.l,t);let s=this.s;if(this.U&&(s?(s=FE(s),jE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=CS(this,i,e),n=On(this.I),ae(n,"RID",t),ae(n,"CVER",22),this.F&&ae(n,"X-HTTP-Session-Id",this.F),Fa(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(SS(s)))+"&"+e:this.o&&Kg(n,this.o,s)),Gg(this.i,i),this.bb&&ae(n,"TYPE","init"),this.P?(ae(n,"$req",e),ae(n,"SID","null"),i.aa=!0,Vf(i,n,null)):Vf(i,n,e),this.H=2}}else this.H==3&&(t?Zy(this,t):this.j.length==0||fS(this.i)||Zy(this))};function Zy(t,e){var n;e?n=e.m:n=t.W++;const r=On(t.I);ae(r,"SID",t.K),ae(r,"RID",n),ae(r,"AID",t.V),Fa(t,r),t.o&&t.s&&Kg(r,t.o,t.s),n=new La(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=CS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Gg(t.i,n),Vf(n,r,e)}function Fa(t,e){t.na&&Dg(t.na,function(n,r){ae(e,r,n)}),t.h&&aS({},function(n,r){ae(e,r,n)})}function CS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?tt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{pb(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function RS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;na||GE(),ra||(na(),ra=!0),$g.add(e,t),t.A=0}}function Yg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Oa(tt(t.Ma,t),xS(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,AS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Oa(tt(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,lt(10),Hc(this),AS(this))};function Xg(t){t.B!=null&&(z.clearTimeout(t.B),t.B=null)}function AS(t){t.g=new La(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=On(t.wa);ae(e,"RID","rpc"),ae(e,"SID",t.K),ae(e,"AID",t.V),ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ae(e,"TO",t.qa),ae(e,"TYPE","xmlhttp"),Fa(t,e),t.o&&t.s&&Kg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=$c(On(e)),n.u=null,n.S=!0,rS(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Hc(this),Yg(this),lt(19))};function Hu(t){t.v!=null&&(z.clearTimeout(t.v),t.v=null)}function kS(t,e){var n=null;if(t.g==e){Hu(t),Xg(t),t.g=null;var r=2}else if(jf(t.i,e))n=e.F,gS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Mc(),We(r,new JE(r,n)),Wc(t)}else RS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&Eb(t,e)||r==2&&Yg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Yr(t,5);break;case 4:Yr(t,10);break;case 3:Yr(t,6);break;default:Yr(t,2)}}}function xS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Yr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=tt(t.pb,t);n||(n=new ri("//www.google.com/images/cleardot.gif"),z.location&&z.location.protocol=="http"||zu(n,"https"),$c(n)),gb(n.toString(),r)}else lt(2);t.H=0,t.h&&t.h.za(e),PS(t),TS(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),lt(2)):(this.l.info("Failed to ping google.com"),lt(1))};function PS(t){if(t.H=0,t.ma=[],t.h){const e=mS(t.i);(e.length!=0||t.j.length!=0)&&(By(t.ma,e),By(t.ma,t.j),t.i.i.length=0,bg(t.j),t.j.length=0),t.h.ya()}}function NS(t,e,n){var r=n instanceof ri?On(n):new ri(n);if(r.g!="")e&&(r.g=e+"."+r.g),Bu(r,r.m);else{var i=z.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ri(null);r&&zu(s,r),e&&(s.g=e),i&&Bu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ae(r,n,e),ae(r,"VER",t.ra),Fa(t,r),r}function bS(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new _e(new Uc({ob:n})):new _e(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function OS(){}x=OS.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Wu(){if(vs&&!(10<=Number(DN)))throw Error("Environmental error: no available transport.")}Wu.prototype.g=function(t,e){return new At(t,e)};function At(t,e){Fe.call(this),this.g=new IS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!ea(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!ea(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ls(this)}je(At,Fe);At.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=NS(t,null,t.Y),Wc(t)};At.prototype.close=function(){Qg(this.g)};At.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=jg(t),t=n);e.j.push(new cb(e.fb++,t)),e.H==3&&Wc(e)};At.prototype.N=function(){this.g.h=null,delete this.j,Qg(this.g),delete this.g,At.$.N.call(this)};function DS(t){Hg.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(DS,Hg);function LS(){Wg.call(this),this.status=1}je(LS,Wg);function Ls(t){this.g=t}je(Ls,OS);Ls.prototype.Ba=function(){We(this.g,"a")};Ls.prototype.Aa=function(t){We(this.g,new DS(t))};Ls.prototype.za=function(t){We(this.g,new LS)};Ls.prototype.ya=function(){We(this.g,"b")};function Sb(){this.blockSize=-1}function Jt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}je(Jt,Sb);Jt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ih(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Jt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ih(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ih(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ih(this,r),i=0;break}}this.h=i,this.i+=e};Jt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ne(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var Ib={};function Jg(t){return-128<=t&&128>t?NN(t,function(e){return new ne([e|0],0>e?-1:0)}):new ne([t|0],0>t?-1:0)}function sn(t){if(isNaN(t)||!isFinite(t))return ss;if(0>t)return ze(sn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=$f;return new ne(e,0)}function MS(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ze(MS(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=sn(Math.pow(e,8)),r=ss,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=sn(Math.pow(e,s)),r=r.R(s).add(sn(o))):(r=r.R(n),r=r.add(sn(o)))}return r}var $f=4294967296,ss=Jg(0),Uf=Jg(1),e_=Jg(16777216);x=ne.prototype;x.ea=function(){if(Dt(this))return-ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:$f+r)*e,e*=$f}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Rn(this))return"0";if(Dt(this))return"-"+ze(this).toString(t);for(var e=sn(Math.pow(t,6)),n=this,r="";;){var i=qu(n,e).g;n=Gu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Rn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Rn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Dt(t){return t.h==-1}x.X=function(t){return t=Gu(this,t),Dt(t)?-1:Rn(t)?0:1};function ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ne(n,~t.h).add(Uf)}x.abs=function(){return Dt(this)?ze(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ne(n,n[n.length-1]&-2147483648?-1:0)};function Gu(t,e){return t.add(ze(e))}x.R=function(t){if(Rn(this)||Rn(t))return ss;if(Dt(this))return Dt(t)?ze(this).R(ze(t)):ze(ze(this).R(t));if(Dt(t))return ze(this.R(ze(t)));if(0>this.X(e_)&&0>t.X(e_))return sn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,_l(n,2*r+2*i),n[2*r+2*i+1]+=s*l,_l(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,_l(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,_l(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ne(n,0)};function _l(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Xs(t,e){this.g=t,this.h=e}function qu(t,e){if(Rn(e))throw Error("division by zero");if(Rn(t))return new Xs(ss,ss);if(Dt(t))return e=qu(ze(t),e),new Xs(ze(e.g),ze(e.h));if(Dt(e))return e=qu(t,ze(e)),new Xs(ze(e.g),e.h);if(30<t.g.length){if(Dt(t)||Dt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Uf,r=e;0>=r.X(t);)n=t_(n),r=t_(r);var i=Pi(n,1),s=Pi(r,1);for(r=Pi(r,2),n=Pi(n,2);!Rn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Pi(r,1),n=Pi(n,1)}return e=Gu(t,i.R(e)),new Xs(i,e)}for(i=ss;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=sn(n),o=s.R(e);Dt(o)||0<o.X(t);)n-=r,s=sn(n),o=s.R(e);Rn(s)&&(s=Uf),i=i.add(s),t=Gu(t,o)}return new Xs(i,t)}x.gb=function(t){return qu(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ne(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ne(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ne(n,this.h^t.h)};function t_(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ne(n,t.h)}function Pi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ne(i,t.h)}Wu.prototype.createWebChannel=Wu.prototype.g;At.prototype.send=At.prototype.u;At.prototype.open=At.prototype.m;At.prototype.close=At.prototype.close;Vc.NO_ERROR=0;Vc.TIMEOUT=8;Vc.HTTP_ERROR=6;ZE.COMPLETE="complete";eS.EventType=Da;Da.OPEN="a";Da.CLOSE="b";Da.ERROR="c";Da.MESSAGE="d";Fe.prototype.listen=Fe.prototype.O;_e.prototype.listenOnce=_e.prototype.P;_e.prototype.getLastError=_e.prototype.Sa;_e.prototype.getLastErrorCode=_e.prototype.Ia;_e.prototype.getStatus=_e.prototype.da;_e.prototype.getResponseJson=_e.prototype.Wa;_e.prototype.getResponseText=_e.prototype.ja;_e.prototype.send=_e.prototype.ha;_e.prototype.setWithCredentials=_e.prototype.Oa;Jt.prototype.digest=Jt.prototype.l;Jt.prototype.reset=Jt.prototype.reset;Jt.prototype.update=Jt.prototype.j;ne.prototype.add=ne.prototype.add;ne.prototype.multiply=ne.prototype.R;ne.prototype.modulo=ne.prototype.gb;ne.prototype.compare=ne.prototype.X;ne.prototype.toNumber=ne.prototype.ea;ne.prototype.toString=ne.prototype.toString;ne.prototype.getBits=ne.prototype.D;ne.fromNumber=sn;ne.fromString=MS;var Tb=function(){return new Wu},Cb=function(){return Mc()},sh=Vc,Rb=ZE,Ab=Ci,n_={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wl=eS,kb=_e,xb=Jt,os=ne;const r_="@firebase/firestore";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let Ms="10.7.0";/**
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
 */const pi=new _g("@firebase/firestore");function Js(){return pi.logLevel}function D(t,...e){if(pi.logLevel<=X.DEBUG){const n=e.map(Zg);pi.debug(`Firestore (${Ms}): ${t}`,...n)}}function Dn(t,...e){if(pi.logLevel<=X.ERROR){const n=e.map(Zg);pi.error(`Firestore (${Ms}): ${t}`,...n)}}function ys(t,...e){if(pi.logLevel<=X.WARN){const n=e.map(Zg);pi.warn(`Firestore (${Ms}): ${t}`,...n)}}function Zg(t){if(typeof t=="string")return t;try{/**
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
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Ms}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function ie(t,e){t||U()}function W(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends yn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class VS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Pb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class Nb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bb{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{D("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(D("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(D("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new VS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new Xe(e)}}class Ob{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Db{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ob(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Lb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mb{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&D("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,D("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{D("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):D("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.R=n.token,new Lb(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function Vb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class FS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Vb(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function _s(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new be(0,0))}static max(){return new B(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class la{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return la.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof la?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class de extends la{construct(e,n,r){return new de(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new de(n)}static emptyPath(){return new de([])}}const Fb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends la{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return Fb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new M(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new M(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new M(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new M(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(de.fromString(e))}static fromName(e){return new V(de.fromString(e).popFirst(5))}static empty(){return new V(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return de.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new de(e.slice()))}}function jb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=B.fromTimestamp(r===1e9?new be(n+1,0):new be(n,r));return new Rr(i,V.empty(),e)}function $b(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(B.min(),V.empty(),-1)}static max(){return new Rr(B.max(),V.empty(),-1)}}function Ub(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const zb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ja(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==zb)throw t;D("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof C?n:C.resolve(n)}catch(n){return C.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):C.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):C.reject(n)}static resolve(e){return new C((n,r)=>{n(e)})}static reject(e){return new C((n,r)=>{r(e)})}static waitFor(e){return new C((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=C.resolve(!1);for(const r of e)n=n.next(i=>i?C.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new C((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new C((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $a(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class em{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}em._e=-1;function Gc(t){return t==null}function Ku(t){return t===0&&1/t==-1/0}function Hb(t){return typeof t=="number"&&Number.isInteger(t)&&!Ku(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function i_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ri(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class me{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ge{constructor(e){this.comparator=e,this.data=new me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new s_(this.data.getIterator())}getIteratorFrom(e){return new s_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ge(this.comparator);return n.data=e,n}}class s_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class It{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new It([])}unionWith(e){let n=new Ge(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new It(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _s(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class $S extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $S("Invalid base64 string: "+s):s}}(e);return new st(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const Wb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ar(t){if(ie(!!t),typeof t=="string"){let e=0;const n=Wb.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Re(t.seconds),nanos:Re(t.nanos)}}function Re(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gi(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */function tm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nm(t){const e=t.mapValue.fields.__previous_value__;return tm(e)?nm(e):e}function ua(t){const e=Ar(t.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
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
 */class Gb{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ca{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ca("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ca&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Sl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tm(t)?4:qb(t)?9007199254740991:10:U()}function gn(t,e){if(t===e)return!0;const n=mi(t);if(n!==mi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ua(t).isEqual(ua(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Ar(i.timestampValue),a=Ar(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return gi(i.bytesValue).isEqual(gi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Re(i.geoPointValue.latitude)===Re(s.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Re(i.integerValue)===Re(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Re(i.doubleValue),a=Re(s.doubleValue);return o===a?Ku(o)===Ku(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return _s(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(i_(o)!==i_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!gn(o[l],a[l])))return!1;return!0}(t,e);default:return U()}}function da(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function ws(t,e){if(t===e)return 0;const n=mi(t),r=mi(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Re(s.integerValue||s.doubleValue),l=Re(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return o_(t.timestampValue,e.timestampValue);case 4:return o_(ua(t),ua(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=gi(s),l=gi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=ee(a[u],l[u]);if(c!==0)return c}return ee(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ee(Re(s.latitude),Re(o.latitude));return a!==0?a:ee(Re(s.longitude),Re(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ws(a[u],l[u]);if(c)return c}return ee(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Sl.mapValue&&o===Sl.mapValue)return 0;if(s===Sl.mapValue)return 1;if(o===Sl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const f=ee(l[d],c[d]);if(f!==0)return f;const p=ws(a[l[d]],u[c[d]]);if(p!==0)return p}return ee(l.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function o_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=Ar(t),r=Ar(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Es(t){return zf(t)}function zf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return gi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=zf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zf(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function Bf(t){return!!t&&"integerValue"in t}function rm(t){return!!t&&"arrayValue"in t}function a_(t){return!!t&&"nullValue"in t}function l_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function tu(t){return!!t&&"mapValue"in t}function To(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ri(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=To(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=To(t.arrayValue.values[n]);return e}return Object.assign({},t)}function qb(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!tu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=To(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=To(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());tu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];tu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ri(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new gt(To(this.value))}}function US(t){const e=[];return Ri(t.fields,(n,r)=>{const i=new Be([n]);if(tu(r)){const s=US(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new It(e)}/**
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
 */class Ze{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ze(e,0,B.min(),B.min(),B.min(),gt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ze(e,1,n,B.min(),r,i,0)}static newNoDocument(e,n){return new Ze(e,2,n,B.min(),B.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new Ze(e,3,n,B.min(),B.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qu{constructor(e,n){this.position=e,this.inclusive=n}}function u_(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=ws(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function c_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Kb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class zS{}class Pe extends zS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Yb(e,n,r):n==="array-contains"?new Zb(e,r):n==="in"?new eO(e,r):n==="not-in"?new tO(e,r):n==="array-contains-any"?new nO(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Xb(e,r):new Jb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ws(n,this.value)):n!==null&&mi(this.value)===mi(n)&&this.matchesComparison(ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class mn extends zS{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new mn(e,n)}matches(e){return BS(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function BS(t){return t.op==="and"}function HS(t){return Qb(t)&&BS(t)}function Qb(t){for(const e of t.filters)if(e instanceof mn)return!1;return!0}function Hf(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Es(t.value);if(HS(t))return t.filters.map(e=>Hf(e)).join(",");{const e=t.filters.map(n=>Hf(n)).join(",");return`${t.op}(${e})`}}function WS(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&gn(r.value,i.value)}(t,e):t instanceof mn?function(r,i){return i instanceof mn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&WS(o,i.filters[a]),!0):!1}(t,e):void U()}function GS(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Es(n.value)}`}(t):t instanceof mn?function(n){return n.op.toString()+" {"+n.getFilters().map(GS).join(" ,")+"}"}(t):"Filter"}class Yb extends Pe{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class Xb extends Pe{constructor(e,n){super(e,"in",n),this.keys=qS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Jb extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=qS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class Zb extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rm(n)&&da(n.arrayValue,this.value)}}class eO extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&da(this.value.arrayValue,n)}}class tO extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(da(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!da(this.value.arrayValue,n)}}class nO extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>da(this.value.arrayValue,r))}}/**
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
 */class rO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function d_(t,e=null,n=[],r=[],i=null,s=null,o=null){return new rO(t,e,n,r,i,s,o)}function im(t){const e=W(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Es(r)).join(",")),e.ce=n}return e.ce}function sm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Kb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WS(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!c_(t.startAt,e.startAt)&&c_(t.endAt,e.endAt)}function Wf(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class qc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function iO(t,e,n,r,i,s,o,a){return new qc(t,e,n,r,i,s,o,a)}function KS(t){return new qc(t)}function h_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function sO(t){return t.collectionGroup!==null}function Co(t){const e=W(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ge(Be.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new Yu(s,r))}),n.has(Be.keyField().canonicalString())||e.le.push(new Yu(Be.keyField(),r))}return e.le}function fn(t){const e=W(t);return e.he||(e.he=oO(e,Co(t))),e.he}function oO(t,e){if(t.limitType==="F")return d_(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yu(i.field,s)});const n=t.endAt?new Qu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qu(t.startAt.position,t.startAt.inclusive):null;return d_(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gf(t,e,n){return new qc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Kc(t,e){return sm(fn(t),fn(e))&&t.limitType===e.limitType}function QS(t){return`${im(fn(t))}|lt:${t.limitType}`}function Ni(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>GS(i)).join(", ")}]`),Gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Es(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Es(i)).join(",")),`Target(${r})`}(fn(t))}; limitType=${t.limitType})`}function Qc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Co(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=u_(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Co(r),i)||r.endAt&&!function(o,a,l){const u=u_(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Co(r),i))}(t,e)}function aO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function YS(t){return(e,n)=>{let r=!1;for(const i of Co(t)){const s=lO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function lO(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?ws(l,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ri(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return jS(this.inner)}size(){return this.innerSize}}/**
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
 */const uO=new me(V.comparator);function Ln(){return uO}const XS=new me(V.comparator);function uo(...t){let e=XS;for(const n of t)e=e.insert(n.key,n);return e}function JS(t){let e=XS;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xr(){return Ro()}function ZS(){return Ro()}function Ro(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const cO=new me(V.comparator),dO=new Ge(V.comparator);function Q(...t){let e=dO;for(const n of t)e=e.add(n);return e}const hO=new Ge(ee);function fO(){return hO}/**
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
 */function eI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ku(e)?"-0":e}}function tI(t){return{integerValue:""+t}}function pO(t,e){return Hb(e)?tI(e):eI(t,e)}/**
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
 */class Yc{constructor(){this._=void 0}}function gO(t,e,n){return t instanceof Xu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&tm(s)&&(s=nm(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ha?rI(t,e):t instanceof fa?iI(t,e):function(i,s){const o=nI(i,s),a=f_(o)+f_(i.Ie);return Bf(o)&&Bf(i.Ie)?tI(a):eI(i.serializer,a)}(t,e)}function mO(t,e,n){return t instanceof ha?rI(t,e):t instanceof fa?iI(t,e):n}function nI(t,e){return t instanceof Ju?function(r){return Bf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Xu extends Yc{}class ha extends Yc{constructor(e){super(),this.elements=e}}function rI(t,e){const n=sI(e);for(const r of t.elements)n.some(i=>gn(i,r))||n.push(r);return{arrayValue:{values:n}}}class fa extends Yc{constructor(e){super(),this.elements=e}}function iI(t,e){let n=sI(e);for(const r of t.elements)n=n.filter(i=>!gn(i,r));return{arrayValue:{values:n}}}class Ju extends Yc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function f_(t){return Re(t.integerValue||t.doubleValue)}function sI(t){return rm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function vO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ha&&i instanceof ha||r instanceof fa&&i instanceof fa?_s(r.elements,i.elements,gn):r instanceof Ju&&i instanceof Ju?gn(r.Ie,i.Ie):r instanceof Xu&&i instanceof Xu}(t.transform,e.transform)}class yO{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function nu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xc{}function oI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new om(t.key,Kt.none()):new Ua(t.key,t.data,Kt.none());{const n=t.data,r=gt.empty();let i=new Ge(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new jr(t.key,r,new It(i.toArray()),Kt.none())}}function _O(t,e,n){t instanceof Ua?function(i,s,o){const a=i.value.clone(),l=g_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(i,s,o){if(!nu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=g_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(aI(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ao(t,e,n,r){return t instanceof Ua?function(s,o,a,l){if(!nu(s.precondition,o))return a;const u=s.value.clone(),c=m_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(s,o,a,l){if(!nu(s.precondition,o))return a;const u=m_(s.fieldTransforms,l,o),c=o.data;return c.setAll(aI(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return nu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function wO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=nI(r.transform,i||null);s!=null&&(n===null&&(n=gt.empty()),n.set(r.field,s))}return n||null}function p_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_s(r,i,(s,o)=>vO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ua extends Xc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jr extends Xc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function aI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function g_(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,mO(o,a,n[i]))}return r}function m_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,gO(s,o,e))}return r}class om extends Xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EO extends Xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class SO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&_O(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ao(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ZS();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=oI(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Q())}isEqual(e){return this.batchId===e.batchId&&_s(this.mutations,e.mutations,(n,r)=>p_(n,r))&&_s(this.baseMutations,e.baseMutations,(n,r)=>p_(n,r))}}class am{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=function(){return cO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new am(e,n,r,i)}}/**
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
 */class IO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ce,J;function CO(t){switch(t){default:return U();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function lI(t){if(t===void 0)return Dn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Ce.OK:return T.OK;case Ce.CANCELLED:return T.CANCELLED;case Ce.UNKNOWN:return T.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return T.INTERNAL;case Ce.UNAVAILABLE:return T.UNAVAILABLE;case Ce.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Ce.NOT_FOUND:return T.NOT_FOUND;case Ce.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Ce.ABORTED:return T.ABORTED;case Ce.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Ce.DATA_LOSS:return T.DATA_LOSS;default:return U()}}(J=Ce||(Ce={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function RO(){return new TextEncoder}/**
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
 */const AO=new os([4294967295,4294967295],0);function v_(t){const e=RO().encode(t),n=new xb;return n.update(e),new Uint8Array(n.digest())}function y_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new os([n,r],0),new os([i,s],0)]}class lm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new co(`Invalid padding: ${n}`);if(r<0)throw new co(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new co(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new co(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=os.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(os.fromNumber(r)));return i.compare(AO)===1&&(i=new os([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=v_(e),[r,i]=y_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new lm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=v_(e),[r,i]=y_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class co extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Jc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,za.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Jc(B.min(),i,new me(ee),Ln(),Q())}}class za{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new za(r,n,Q(),Q(),Q())}}/**
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
 */class ru{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class uI{constructor(e,n){this.targetId=e,this.fe=n}}class cI{constructor(e,n,r=st.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class __{constructor(){this.ge=0,this.pe=E_(),this.ye=st.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Q(),n=Q(),r=Q();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new za(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=E_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ie(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class kO{constructor(e){this.Le=e,this.ke=new Map,this.qe=Ln(),this.Qe=w_(),this.Ke=new me(ee)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Wf(s))if(r===0){const o=new V(s.path);this.We(n,o,Ze.newNoDocument(o,B.min()))}else ie(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=gi(r).toUint8Array()}catch(l){if(l instanceof $S)return ys("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new lm(o,i,s)}catch(l){return ys(l instanceof co?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Wf(a.target)){const l=new V(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Ze.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=Q();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new Jc(e,n,this.Ke,this.qe,r);return this.qe=Ln(),this.Qe=w_(),this.Ke=new me(ee),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new __,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ge(ee),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||D("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new __),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function w_(){return new me(V.comparator)}function E_(){return new me(V.comparator)}const xO={asc:"ASCENDING",desc:"DESCENDING"},PO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NO={and:"AND",or:"OR"};class bO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function qf(t,e){return t.useProto3Json||Gc(e)?e:{value:e}}function Zu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function OO(t,e){return Zu(t,e.toTimestamp())}function pn(t){return ie(!!t),B.fromTimestamp(function(n){const r=Ar(n);return new be(r.seconds,r.nanos)}(t))}function um(t,e){return function(r){return new de(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function hI(t){const e=de.fromString(t);return ie(mI(e)),e}function Kf(t,e){return um(t.databaseId,e.path)}function oh(t,e){const n=hI(e);if(n.get(1)!==t.databaseId.projectId)throw new M(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(fI(n))}function Qf(t,e){return um(t.databaseId,e)}function DO(t){const e=hI(t);return e.length===4?de.emptyPath():fI(e)}function Yf(t){return new de(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function fI(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function S_(t,e,n){return{name:Kf(t,e),fields:n.value.mapValue.fields}}function LO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ie(c===void 0||typeof c=="string"),st.fromBase64String(c||"")):(ie(c===void 0||c instanceof Uint8Array),st.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?T.UNKNOWN:lI(u.code);return new M(c,u.message||"")}(o);n=new cI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=oh(t,r.document.name),s=pn(r.document.updateTime),o=r.document.createTime?pn(r.document.createTime):B.min(),a=new gt({mapValue:{fields:r.document.fields}}),l=Ze.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ru(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=oh(t,r.document),s=r.readTime?pn(r.readTime):B.min(),o=Ze.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ru([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=oh(t,r.document),s=r.removedTargetIds||[];n=new ru([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new TO(i,s),a=r.targetId;n=new uI(a,o)}}return n}function MO(t,e){let n;if(e instanceof Ua)n={update:S_(t,e.key,e.value)};else if(e instanceof om)n={delete:Kf(t,e.key)};else if(e instanceof jr)n={update:S_(t,e.key,e.data),updateMask:WO(e.fieldMask)};else{if(!(e instanceof EO))return U();n={verify:Kf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Xu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ha)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fa)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Ju)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:OO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function VO(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?pn(i.updateTime):pn(s);return o.isEqual(B.min())&&(o=pn(s)),new yO(o,i.transformResults||[])}(n,e))):[]}function FO(t,e){return{documents:[Qf(t,e.path)]}}function jO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Qf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Qf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return gI(mn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:bi(d.field),direction:zO(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=qf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function $O(t){let e=DO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const f=pI(d);return f instanceof mn&&HS(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(f=>function(v){return new Yu(Oi(v.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,Gc(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,p=d.values||[];return new Qu(p,f)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const f=!d.before,p=d.values||[];return new Qu(p,f)}(n.endAt)),iO(e,i,o,s,a,"F",l,u)}function UO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Oi(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Oi(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Oi(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Oi(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return mn.create(n.compositeFilter.filters.map(r=>pI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function zO(t){return xO[t]}function BO(t){return PO[t]}function HO(t){return NO[t]}function bi(t){return{fieldPath:t.canonicalString()}}function Oi(t){return Be.fromServerFormat(t.fieldPath)}function gI(t){return t instanceof Pe?function(n){if(n.op==="=="){if(l_(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NAN"}};if(a_(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(l_(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NOT_NAN"}};if(a_(n.value))return{unaryFilter:{field:bi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bi(n.field),op:BO(n.op),value:n.value}}}(t):t instanceof mn?function(n){const r=n.getFilters().map(i=>gI(i));return r.length===1?r[0]:{compositeFilter:{op:HO(n.op),filters:r}}}(t):U()}function WO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ar{constructor(e,n,r,i,s=B.min(),o=B.min(),a=st.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class GO{constructor(e){this.ut=e}}function qO(t){const e=$O({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gf(e,e.limit,"L"):e}/**
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
 */class KO{constructor(){this.on=new QO}addToCollectionParentIndex(e,n){return this.on.add(n),C.resolve()}getCollectionParents(e,n){return C.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return C.resolve()}deleteFieldIndex(e,n){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,n){return C.resolve()}getDocumentsMatchingTarget(e,n){return C.resolve(null)}getIndexType(e,n){return C.resolve(0)}getFieldIndexes(e,n){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,n){return C.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return C.resolve(Rr.min())}updateCollectionGroup(e,n,r){return C.resolve()}updateIndexEntries(e,n){return C.resolve()}}class QO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ge(de.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ge(de.comparator)).toArray()}}/**
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
 */class Ss{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ss(0)}static Nn(){return new Ss(-1)}}/**
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
 */class YO{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?C.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class XO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ao(r.mutation,i,It.empty(),be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Q()){const i=Xr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=uo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Ln();const o=Ro(),a=function(){return Ro()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof jr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Ao(c.mutation,u,c.mutation.getFieldMask(),be.now())):o.set(u.key,It.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new XO(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ro();let i=new me((o,a)=>o-a),s=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||It.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||Q()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=ZS();c.forEach(f=>{if(!s.has(f)){const p=oI(n.get(f),r.get(f));p!==null&&d.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return C.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):sO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):C.resolve(Xr());let a=-1,l=s;return o.next(u=>C.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?C.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Q())).next(c=>({batchId:a,changes:JS(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=uo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=uo();return this.indexManager.getCollectionParents(e,s).next(a=>C.forEach(a,l=>{const u=function(d,f){return new qc(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Ze.newInvalidDocument(c)))});let a=uo();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Ao(c.mutation,u,It.empty(),be.now()),Qc(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class ZO{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return C.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:pn(i.createTime)}}(n)),C.resolve()}getNamedQuery(e,n){return C.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:qO(i.bundledQuery),readTime:pn(i.readTime)}}(n)),C.resolve()}}/**
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
 */class eD{constructor(){this.overlays=new me(V.comparator),this.lr=new Map}getOverlay(e,n){return C.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return C.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),C.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),C.resolve()}getOverlaysForCollection(e,n,r){const i=Xr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return C.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new me((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Xr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Xr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return C.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new IO(n,r));let s=this.lr.get(n);s===void 0&&(s=Q(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
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
 */class cm{constructor(){this.hr=new Ge(Le.Pr),this.Ir=new Ge(Le.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Le(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Le(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new V(new de([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new V(new de([])),r=new Le(n,e),i=new Le(n,e+1);let s=Q();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return V.comparator(e.key,n.key)||ee(e.gr,n.gr)}static Tr(e,n){return ee(e.gr,n.gr)||V.comparator(e.key,n.key)}}/**
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
 */class tD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ge(Le.Pr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Le(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return C.resolve(o)}lookupMutationBatch(e,n){return C.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ge(ee);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),C.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Le(new V(s),0);let a=new Ge(ee);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),C.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return C.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Le(n,0),i=this.yr.firstAfterOrEqual(r);return C.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nD{constructor(e){this.Cr=e,this.docs=function(){return new me(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return C.resolve(r?r.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(e,n){let r=Ln();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ze.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Ln();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ub($b(c),r)<=0||(i.has(c.key)||Qc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}vr(e,n){return C.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new rD(this)}getSize(e){return C.resolve(this.size)}}class rD extends YO{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),C.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class iD{constructor(e){this.persistence=e,this.Fr=new Vs(n=>im(n),sm),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Mr=0,this.Or=new cm,this.targetCount=0,this.Nr=Ss.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),C.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Ss(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,C.resolve()}updateTargetData(e,n){return this.kn(n),C.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return C.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),C.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),C.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return C.resolve(r)}containsKey(e,n){return C.resolve(this.Or.containsKey(n))}}/**
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
 */class sD{constructor(e,n){this.Br={},this.overlays={},this.Lr=new em(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new iD(this),this.indexManager=new KO,this.remoteDocumentCache=function(i){return new nD(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new GO(n),this.Kr=new ZO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new eD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new tD(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){D("MemoryPersistence","Starting transaction:",e);const i=new oD(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class oD extends Bb{constructor(e){super(),this.currentSequenceNumber=e}}class dm{constructor(e){this.persistence=e,this.Gr=new cm,this.zr=null}static jr(e){return new dm(e)}get Hr(){if(this.zr)return this.zr;throw U()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),C.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),C.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Hr,r=>{const i=V.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,B.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return C.or([()=>C.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class hm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=Q(),i=Q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new hm(e,n.fromCache,r,i)}}/**
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
 */class aD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class lD{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new aD;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Js()<=X.DEBUG&&D("QueryEngine","SDK will not create cache indexes for query:",Ni(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),C.resolve()):(Js()<=X.DEBUG&&D("QueryEngine","Query:",Ni(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Js()<=X.DEBUG&&D("QueryEngine","The SDK decides to create cache indexes for query:",Ni(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,fn(n))):C.resolve())}zi(e,n){if(h_(n))return C.resolve(null);let r=fn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Gf(n,null,"F"),r=fn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Q(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,Gf(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return h_(n)||i.isEqual(B.min())?C.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?C.resolve(null):(Js()<=X.DEBUG&&D("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ni(n)),this.Xi(e,o,n,jb(i,-1)).next(a=>a))})}Yi(e,n){let r=new Ge(YS(e));return n.forEach((i,s)=>{Qc(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Js()<=X.DEBUG&&D("QueryEngine","Using full collection scan to execute query:",Ni(n)),this.Gi.getDocumentsMatchingQuery(e,n,Rr.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class uD{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new me(ee),this.ns=new Vs(s=>im(s),sm),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JO(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function cD(t,e,n,r){return new uD(t,e,n,r)}async function vI(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function dD(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,f=d.keys();let p=C.resolve();return f.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(_=>{const w=u.docVersions.get(v);ie(w!==null),_.version.compareTo(w)<0&&(d.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function yI(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function hD(t,e){const n=W(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,d)));let p=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?p=p.withResumeToken(st.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(d,p),function(_,w,g){return _.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=Ln(),u=Q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(fD(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(B.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(d=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return C.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function fD(t,e,n){let r=Q(),i=Q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Ln();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):D("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function pD(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gD(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Xf(t,e,n){const r=W(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$a(o))throw o;D("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function I_(t,e,n){const r=W(t);let i=B.min(),s=Q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const d=W(l),f=d.ns.get(c);return f!==void 0?C.resolve(d.ts.get(f)):d.qr.getTargetData(u,c)}(r,o,fn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:B.min(),n?s:Q())).next(a=>(mD(r,aO(e),a),{documents:a,ls:s})))}function mD(t,e,n){let r=t.rs.get(e)||B.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class T_{constructor(){this.activeTargetIds=fO()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vD{constructor(){this.eo=new T_,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new T_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class yD{ro(e){}shutdown(){}}/**
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
 */class C_{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){D("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){D("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Il=null;function ah(){return Il===null?Il=function(){return 268435456+Math.round(2147483648*Math.random())}():Il++,"0x"+Il.toString(16)}/**
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
 */const _D={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class wD{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const Ye="WebChannelConnection";class ED extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=ah(),l=this.So(n,r);D("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(D("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ys("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ms}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=_D[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=ah();return new Promise((o,a)=>{const l=new kb;l.setWithCredentials(!0),l.listenOnce(Rb.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case sh.NO_ERROR:const c=l.getResponseJson();D(Ye,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case sh.TIMEOUT:D(Ye,`RPC '${e}' ${s} timed out`),a(new M(T.DEADLINE_EXCEEDED,"Request time out"));break;case sh.HTTP_ERROR:const d=l.getStatus();if(D(Ye,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const v=function(w){const g=w.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(g)>=0?g:T.UNKNOWN}(p.status);a(new M(v,p.message))}else a(new M(T.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new M(T.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{D(Ye,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);D(Ye,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=ah(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Tb(),a=Cb(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");D(Ye,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let f=!1,p=!1;const v=new wD({co:w=>{p?D(Ye,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(f||(D(Ye,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),D(Ye,`RPC '${e}' stream ${i} sending:`,w),d.send(w))},lo:()=>d.close()}),_=(w,g,m)=>{w.listen(g,y=>{try{m(y)}catch(E){setTimeout(()=>{throw E},0)}})};return _(d,wl.EventType.OPEN,()=>{p||D(Ye,`RPC '${e}' stream ${i} transport opened.`)}),_(d,wl.EventType.CLOSE,()=>{p||(p=!0,D(Ye,`RPC '${e}' stream ${i} transport closed`),v.Ro())}),_(d,wl.EventType.ERROR,w=>{p||(p=!0,ys(Ye,`RPC '${e}' stream ${i} transport errored:`,w),v.Ro(new M(T.UNAVAILABLE,"The operation could not be completed")))}),_(d,wl.EventType.MESSAGE,w=>{var g;if(!p){const m=w.data[0];ie(!!m);const y=m,E=y.error||((g=y[0])===null||g===void 0?void 0:g.error);if(E){D(Ye,`RPC '${e}' stream ${i} received error:`,E);const S=E.status;let A=function(H){const F=Ce[H];if(F!==void 0)return lI(F)}(S),k=E.message;A===void 0&&(A=T.INTERNAL,k="Unknown error status: "+S+" with message "+E.message),p=!0,v.Ro(new M(A,k)),d.close()}else D(Ye,`RPC '${e}' stream ${i} received:`,m),v.Vo(m)}}),_(a,Ab.STAT_EVENT,w=>{w.stat===n_.PROXY?D(Ye,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===n_.NOPROXY&&D(Ye,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ao()},0),v}}function lh(){return typeof document<"u"?document:null}/**
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
 */function Zc(t){return new bO(t,!0)}/**
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
 */class _I{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&D("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class wI{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new _I(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new M(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return D("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(D("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SD extends wI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=LO(this.serializer,e),r=function(s){if(!("targetChange"in s))return B.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?B.min():o.readTime?pn(o.readTime):B.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Yf(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Wf(l)?{documents:FO(s,l)}:{query:jO(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=dI(s,o.resumeToken);const u=qf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(B.min())>0){a.readTime=Zu(s,o.snapshotVersion.toTimestamp());const u=qf(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=UO(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Yf(this.serializer),n.removeTarget=e,this.e_(n)}}class ID extends wI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=VO(e.writeResults,e.commitTime),r=pn(e.commitTime);return this.listener.I_(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Yf(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>MO(this.serializer,r))};this.e_(n)}}/**
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
 */class TD extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new M(T.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(T.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(T.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class CD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Dn(n),this.f_=!1):D("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class RD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Ai(this)&&(D("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=W(l);u.C_.add(4),await Ba(u),u.M_.set("Unknown"),u.C_.delete(4),await ed(u)}(this))})}),this.M_=new CD(r,i)}}async function ed(t){if(Ai(t))for(const e of t.v_)await e(!0)}async function Ba(t){for(const e of t.v_)await e(!1)}function EI(t,e){const n=W(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),gm(n)?pm(n):Fs(n).Ho()&&fm(n,e))}function SI(t,e){const n=W(t),r=Fs(n);n.D_.delete(e),r.Ho()&&II(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Ai(n)&&n.M_.set("Unknown"))}function fm(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fs(t).u_(e)}function II(t,e){t.x_.Oe(e),Fs(t).c_(e)}function pm(t){t.x_=new kO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Fs(t).start(),t.M_.g_()}function gm(t){return Ai(t)&&!Fs(t).jo()&&t.D_.size>0}function Ai(t){return W(t).C_.size===0}function TI(t){t.x_=void 0}async function AD(t){t.D_.forEach((e,n)=>{fm(t,e)})}async function kD(t,e){TI(t),gm(t)?(t.M_.w_(e),pm(t)):t.M_.set("Unknown")}async function xD(t,e,n){if(t.M_.set("Online"),e instanceof cI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){D("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ec(t,r)}else if(e instanceof ru?t.x_.$e(e):e instanceof uI?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(B.min()))try{const r=await yI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(st.EMPTY_BYTE_STRING,c.snapshotVersion)),II(s,l);const d=new ar(c.target,l,u,c.sequenceNumber);fm(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){D("RemoteStore","Failed to raise snapshot:",r),await ec(t,r)}}async function ec(t,e,n){if(!$a(e))throw e;t.C_.add(1),await Ba(t),t.M_.set("Offline"),n||(n=()=>yI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{D("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await ed(t)})}function CI(t,e){return e().catch(n=>ec(t,n,e))}async function td(t){const e=W(t),n=kr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;PD(e);)try{const i=await pD(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,ND(e,i)}catch(i){await ec(e,i)}RI(e)&&AI(e)}function PD(t){return Ai(t)&&t.b_.length<10}function ND(t,e){t.b_.push(e);const n=kr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function RI(t){return Ai(t)&&!kr(t).jo()&&t.b_.length>0}function AI(t){kr(t).start()}async function bD(t){kr(t).E_()}async function OD(t){const e=kr(t);for(const n of t.b_)e.P_(n.mutations)}async function DD(t,e,n){const r=t.b_.shift(),i=am.from(r,e,n);await CI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await td(t)}async function LD(t,e){e&&kr(t).h_&&await async function(r,i){if(function(o){return CO(o)&&o!==T.ABORTED}(i.code)){const s=r.b_.shift();kr(r).Yo(),await CI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await td(r)}}(t,e),RI(t)&&AI(t)}async function R_(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),D("RemoteStore","RemoteStore received new credentials");const r=Ai(n);n.C_.add(3),await Ba(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await ed(n)}async function MD(t,e){const n=W(t);e?(n.C_.delete(2),await ed(n)):e||(n.C_.add(2),await Ba(n),n.M_.set("Unknown"))}function Fs(t){return t.O_||(t.O_=function(n,r,i){const s=W(n);return s.A_(),new SD(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:AD.bind(null,t),Io:kD.bind(null,t),a_:xD.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),gm(t)?pm(t):t.M_.set("Unknown")):(await t.O_.stop(),TI(t))})),t.O_}function kr(t){return t.N_||(t.N_=function(n,r,i){const s=W(n);return s.A_(),new ID(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:bD.bind(null,t),Io:LD.bind(null,t),T_:OD.bind(null,t),I_:DD.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await td(t)):(await t.N_.stop(),t.b_.length>0&&(D("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class mm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new mm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vm(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),$a(t))return new M(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class as{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=uo(),this.sortedSet=new me(this.comparator)}static emptySet(e){return new as(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new as;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class A_{constructor(){this.B_=new me(V.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):U():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Is{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Is(e,n,as.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class VD{constructor(){this.k_=void 0,this.listeners=[]}}class FD{constructor(){this.queries=new Vs(e=>QS(e),Kc),this.onlineState="Unknown",this.q_=new Set}}async function jD(t,e){const n=W(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new VD),i)try{s.k_=await n.onListen(r)}catch(o){const a=vm(o,`Initialization of query '${Ni(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&ym(n)}async function $D(t,e){const n=W(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function UD(t,e){const n=W(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&ym(n)}function zD(t,e,n){const r=W(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ym(t){t.q_.forEach(e=>{e.next()})}class BD{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class kI{constructor(e){this.key=e}}class xI{constructor(e){this.key=e}}class HD{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=Q(),this.mutatedKeys=Q(),this._a=YS(e),this.aa=new as(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new A_,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),p=Qc(this.query,d)?d:null,v=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let w=!1;f&&p?f.data.isEqual(p.data)?v!==_&&(r.track({type:3,doc:p}),w=!0):this.ha(f,p)||(r.track({type:2,doc:p}),w=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!f&&p?(r.track({type:0,doc:p}),w=!0):f&&!p&&(r.track({type:1,doc:f}),w=!0,(l||u)&&(a=!0)),w&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,d)=>function(p,v){const _=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return _(p)-_(v)}(c.type,d.type)||this._a(c.doc,d.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new Is(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new A_,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=Q(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new xI(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new kI(r))}),n}da(e){this.ia=e.ls,this.oa=Q();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Is.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class WD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GD{constructor(e){this.key=e,this.Ra=!1}}class qD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Vs(a=>QS(a),Kc),this.fa=new Map,this.ga=new Set,this.pa=new me(V.comparator),this.ya=new Map,this.wa=new cm,this.Sa={},this.ba=new Map,this.Da=Ss.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function KD(t,e){const n=i4(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await gD(n.localStore,fn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await QD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&EI(n.remoteStore,o)}return i}async function QD(t,e,n,r,i){t.va=(d,f,p)=>async function(_,w,g,m){let y=w.view.ca(g);y.Zi&&(y=await I_(_.localStore,w.query,!1).then(({documents:k})=>w.view.ca(k,y)));const E=m&&m.targetChanges.get(w.targetId),S=m&&m.targetMismatches.get(w.targetId)!=null,A=w.view.applyChanges(y,_.isPrimaryClient,E,S);return x_(_,w.targetId,A.Ta),A.snapshot}(t,d,f,p);const s=await I_(t.localStore,e,!0),o=new HD(e,s.ls),a=o.ca(s.documents),l=za.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);x_(t,n,u.Ta);const c=new WD(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function YD(t,e){const n=W(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!Kc(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),SI(n.remoteStore,r.targetId),Jf(n,r.targetId)}).catch(ja)):(Jf(n,r.targetId),await Xf(n.localStore,r.targetId,!0))}async function XD(t,e,n){const r=s4(t);try{const i=await function(o,a){const l=W(o),u=be.now(),c=a.reduce((p,v)=>p.add(v.key),Q());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=Ln(),_=Q();return l.ss.getEntries(p,c).next(w=>{v=w,v.forEach((g,m)=>{m.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(w=>{d=w;const g=[];for(const m of a){const y=wO(m,d.get(m.key).overlayedDocument);y!=null&&g.push(new jr(m.key,y,US(y.value.mapValue),Kt.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(w=>{f=w;const g=w.applyToLocalDocumentSet(d,_);return l.documentOverlayCache.saveOverlays(p,w.batchId,g)})}).then(()=>({batchId:f.batchId,changes:JS(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new me(ee)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Ha(r,i.changes),await td(r.remoteStore)}catch(i){const s=vm(i,"Failed to persist write");n.reject(s)}}async function PI(t,e){const n=W(t);try{const r=await hD(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?ie(o.Ra):i.removedDocuments.size>0&&(ie(o.Ra),o.Ra=!1))}),await Ha(n,r,e)}catch(r){await ja(r)}}function k_(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=W(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const f of d.listeners)f.Q_(a)&&(u=!0)}),u&&ym(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JD(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new me(V.comparator);o=o.insert(s,Ze.newNoDocument(s,B.min()));const a=Q().add(s),l=new Jc(B.min(),new Map,new me(ee),o,a);await PI(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),_m(r)}else await Xf(r.localStore,e,!1).then(()=>Jf(r,e,n)).catch(ja)}async function ZD(t,e){const n=W(t),r=e.batch.batchId;try{const i=await dD(n.localStore,e);bI(n,r,null),NI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ha(n,i)}catch(i){await ja(i)}}async function e4(t,e,n){const r=W(t);try{const i=await function(o,a){const l=W(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(ie(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);bI(r,e,n),NI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ha(r,i)}catch(i){await ja(i)}}function NI(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function bI(t,e,n){const r=W(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Jf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||OI(t,r)})}function OI(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(SI(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),_m(t))}function x_(t,e,n){for(const r of n)r instanceof kI?(t.wa.addReference(r.key,e),t4(t,r)):r instanceof xI?(D("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||OI(t,r.key)):U()}function t4(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(D("SyncEngine","New document in limbo: "+n),t.ga.add(r),_m(t))}function _m(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new V(de.fromString(e)),r=t.Da.next();t.ya.set(r,new GD(n)),t.pa=t.pa.insert(n,r),EI(t.remoteStore,new ar(fn(KS(n.path)),r,"TargetPurposeLimboResolution",em._e))}}async function Ha(t,e,n){const r=W(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=hm.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=W(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>C.forEach(u,f=>C.forEach(f.ki,p=>c.persistence.referenceDelegate.addReference(d,f.targetId,p)).next(()=>C.forEach(f.qi,p=>c.persistence.referenceDelegate.removeReference(d,f.targetId,p)))))}catch(d){if(!$a(d))throw d;D("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const p=c.ts.get(f),v=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(v);c.ts=c.ts.insert(f,_)}}}(r.localStore,s))}async function n4(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){D("SyncEngine","User change. New user:",e.toKey());const r=await vI(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new M(T.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ha(n,r._s)}}function r4(t,e){const n=W(t),r=n.ya.get(e);if(r&&r.Ra)return Q().add(r.key);{let i=Q();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function i4(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=PI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=r4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JD.bind(null,e),e.Va.a_=UD.bind(null,e.eventManager),e.Va.Fa=zD.bind(null,e.eventManager),e}function s4(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=e4.bind(null,e),e}class P_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Zc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return cD(this.persistence,new lD,e.initialUser,this.serializer)}createPersistence(e){return new sD(dm.jr,this.serializer)}createSharedClientState(e){return new vD}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class o4{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>k_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=n4.bind(null,this.syncEngine),await MD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new FD}()}createDatastore(e){const n=Zc(e.databaseInfo.databaseId),r=function(s){return new ED(s)}(e.databaseInfo);return function(s,o,a,l){return new TD(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new RD(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>k_(this.syncEngine,n,0),function(){return C_.D()?new C_:new yD}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new qD(i,s,o,a,l,u);return c&&(d.Ca=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=W(n);D("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Ba(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class a4{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class l4{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Xe.UNAUTHENTICATED,this.clientId=FS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{D("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(D("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uh(t,e){t.asyncQueue.verifyOperationInProgress(),D("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await vI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function N_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await c4(t);D("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>R_(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>R_(e.remoteStore,s)),t._onlineComponents=e}function u4(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function c4(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){D("FirestoreClient","Using user provided OfflineComponentProvider");try{await uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!u4(n))throw n;ys("Error using user provided cache. Falling back to memory cache: "+n),await uh(t,new P_)}}else D("FirestoreClient","Using default OfflineComponentProvider"),await uh(t,new P_);return t._offlineComponents}async function DI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(D("FirestoreClient","Using user provided OnlineComponentProvider"),await N_(t,t._uninitializedComponentsProvider._online)):(D("FirestoreClient","Using default OnlineComponentProvider"),await N_(t,new o4))),t._onlineComponents}function d4(t){return DI(t).then(e=>e.syncEngine)}async function h4(t){const e=await DI(t),n=e.eventManager;return n.onListen=KD.bind(null,e.syncEngine),n.onUnlisten=YD.bind(null,e.syncEngine),n}function f4(t,e,n={}){const r=new Er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new a4({next:f=>{o.enqueueAndForget(()=>$D(s,d)),f.fromCache&&l.source==="server"?u.reject(new M(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new BD(a,c,{includeMetadataChanges:!0,J_:!0});return jD(s,d)}(await h4(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function LI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const b_=new Map;/**
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
 */function MI(t,e,n){if(!n)throw new M(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function p4(t,e,n,r){if(e===!0&&r===!0)throw new M(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function O_(t){if(!V.isDocumentKey(t))throw new M(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function D_(t){if(V.isDocumentKey(t))throw new M(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function wm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function vi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wm(t);throw new M(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class L_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}p4("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=LI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new M(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new M(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new M(T.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Pb;switch(r.type){case"firstParty":return new Db(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=b_.get(n);r&&(D("ComponentProvider","Removing Datastore"),b_.delete(n),r.terminate())}(this),Promise.resolve()}}function g4(t,e,n,r={}){var i;const s=(t=vi(t,nd))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Xe.MOCK_USER;else{a=Y1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new M(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Xe(u)}t._authCredentials=new Nb(new VS(a,l))}}/**
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
 */class rd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rd(this.firestore,e,this._query)}}class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Sr extends rd{constructor(e,n,r){super(e,n,KS(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new V(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function Mn(t,e,...n){if(t=ke(t),MI("collection","path",e),t instanceof nd){const r=de.fromString(e,...n);return D_(r),new Sr(t,null,r)}{if(!(t instanceof Vt||t instanceof Sr))throw new M(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return D_(r),new Sr(t.firestore,null,r)}}function Ts(t,e,...n){if(t=ke(t),arguments.length===1&&(e=FS.newId()),MI("doc","path",e),t instanceof nd){const r=de.fromString(e,...n);return O_(r),new Vt(t,null,new V(r))}{if(!(t instanceof Vt||t instanceof Sr))throw new M(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(de.fromString(e,...n));return O_(r),new Vt(t.firestore,t instanceof Sr?t.converter:null,new V(r))}}/**
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
 */class m4{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new _I(this,"async_queue_retry"),this.iu=()=>{const n=lh();n&&D("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=lh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=lh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new Er;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!$a(e))throw e;D("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=mm.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&U()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Wa extends nd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new m4}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||jI(this),this._firestoreClient.terminate()}}function VI(t,e){const n=typeof t=="object"?t:Eg(),r=typeof t=="string"?t:e||"(default)",i=Rc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=q1("firestore");s&&g4(i,...s)}return i}function FI(t){return t._firestoreClient||jI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function jI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Gb(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,LI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new l4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cs(st.fromBase64String(e))}catch(n){throw new M(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Cs(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class id{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Em{constructor(e){this._methodName=e}}/**
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
 */class Sm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */const v4=/^__.*__$/;class y4{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ua(e,this.data,n,this.fieldTransforms)}}class $I{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function UI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Im{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Im(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return tc(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(UI(this.Iu)&&v4.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class _4{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Zc(e)}pu(e,n,r,i=!1){return new Im({Iu:e,methodName:n,gu:r,path:Be.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zI(t){const e=t._freezeSettings(),n=Zc(t._databaseId);return new _4(t._databaseId,!!e.ignoreUndefinedProperties,n)}function w4(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);Tm("Data must be an object, but it was:",o,r);const a=BI(r,o);let l,u;if(s.merge)l=new It(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=Zf(e,d,n);if(!o.contains(f))throw new M(T.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);WI(c,f)||c.push(f)}l=new It(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new y4(new gt(a),l,u)}class sd extends Em{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sd}}function E4(t,e,n,r){const i=t.pu(1,e,n);Tm("Data must be an object, but it was:",i,r);const s=[],o=gt.empty();Ri(r,(l,u)=>{const c=Cm(e,l,n);u=ke(u);const d=i.Ru(c);if(u instanceof sd)s.push(c);else{const f=od(u,d);f!=null&&(s.push(c),o.set(c,f))}});const a=new It(s);return new $I(o,a,i.fieldTransforms)}function S4(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Zf(e,r,n)],l=[i];if(s.length%2!=0)throw new M(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let f=0;f<s.length;f+=2)a.push(Zf(e,s[f])),l.push(s[f+1]);const u=[],c=gt.empty();for(let f=a.length-1;f>=0;--f)if(!WI(u,a[f])){const p=a[f];let v=l[f];v=ke(v);const _=o.Ru(p);if(v instanceof sd)u.push(p);else{const w=od(v,_);w!=null&&(u.push(p),c.set(p,w))}}const d=new It(u);return new $I(c,d,o.fieldTransforms)}function od(t,e){if(HI(t=ke(t)))return Tm("Unsupported field value:",e,t),BI(t,e);if(t instanceof Em)return function(r,i){if(!UI(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=od(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=be.fromDate(r);return{timestampValue:Zu(i.serializer,s)}}if(r instanceof be){const s=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zu(i.serializer,s)}}if(r instanceof Sm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Cs)return{bytesValue:dI(i.serializer,r._byteString)};if(r instanceof Vt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:um(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${wm(r)}`)}(t,e)}function BI(t,e){const n={};return jS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ri(t,(r,i)=>{const s=od(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function HI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof be||t instanceof Sm||t instanceof Cs||t instanceof Vt||t instanceof Em)}function Tm(t,e,n){if(!HI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=wm(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Zf(t,e,n){if((e=ke(e))instanceof id)return e._internalPath;if(typeof e=="string")return Cm(t,e);throw tc("Field path arguments must be of type string or ",t,!1,void 0,n)}const I4=new RegExp("[~\\*/\\[\\]]");function Cm(t,e,n){if(e.search(I4)>=0)throw tc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new id(...e.split("."))._internalPath}catch{throw tc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new M(T.INVALID_ARGUMENT,a+t+l)}function WI(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class GI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new T4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class T4 extends GI{data(){return super.data()}}function qI(t,e){return typeof e=="string"?Cm(t,e):e instanceof id?e._internalPath:e._delegate._internalPath}/**
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
 */function C4(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class R4{convertValue(e,n="none"){switch(mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ri(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Sm(Re(e.latitude),Re(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nm(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ua(e));default:return null}}convertTimestamp(e){const n=Ar(e);return new be(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=de.fromString(e);ie(mI(r));const i=new ca(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||Dn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function A4(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Tl{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class k4 extends GI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qI("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class iu extends k4{data(e={}){return super.data(e)}}class x4{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Tl(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new iu(this._firestore,this._userDataWriter,r.key,r,new Tl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new iu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Tl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new iu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Tl(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:P4(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function P4(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class N4 extends R4{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function ad(t){t=vi(t,rd);const e=vi(t.firestore,Wa),n=FI(e),r=new N4(e);return C4(t._query),f4(n,t._query).then(i=>new x4(e,r,t,i))}function b4(t,e,n,...r){t=vi(t,Vt);const i=vi(t.firestore,Wa),s=zI(i);let o;return o=typeof(e=ke(e))=="string"||e instanceof id?S4(s,"updateDoc",t._key,e,n,r):E4(s,"updateDoc",t._key,e),Rm(i,[o.toMutation(t._key,Kt.exists(!0))])}function ld(t){return Rm(vi(t.firestore,Wa),[new om(t._key,Kt.none())])}function Ga(t,e){const n=vi(t.firestore,Wa),r=Ts(t),i=A4(t.converter,e);return Rm(n,[w4(zI(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function Rm(t,e){return function(r,i){const s=new Er;return r.asyncQueue.enqueueAndForget(async()=>XD(await d4(r),i,s)),s.promise}(FI(t),e)}(function(e,n=!0){(function(i){Ms=i})(Ii),di(new Cr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Wa(new bb(r.getProvider("auth-internal")),new Mb(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new M(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ca(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),cn(r_,"4.4.0",e),cn(r_,"4.4.0","esm2017")})();/**
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
 */const KI="firebasestorage.googleapis.com",QI="storageBucket",O4=2*60*1e3,D4=10*60*1e3;/**
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
 */class Ee extends yn{constructor(e,n,r=0){super(ch(e),`Firebase Storage: ${n} (${ch(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ee.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ch(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var we;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(we||(we={}));function ch(t){return"storage/"+t}function Am(){const t="An unknown error occurred, please check the error payload for server response.";return new Ee(we.UNKNOWN,t)}function L4(t){return new Ee(we.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function M4(t){return new Ee(we.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function V4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ee(we.UNAUTHENTICATED,t)}function F4(){return new Ee(we.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function j4(t){return new Ee(we.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function $4(){return new Ee(we.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function U4(){return new Ee(we.CANCELED,"User canceled the upload/download.")}function z4(t){return new Ee(we.INVALID_URL,"Invalid URL '"+t+"'.")}function B4(t){return new Ee(we.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function H4(){return new Ee(we.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+QI+"' property when initializing the app?")}function W4(){return new Ee(we.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function G4(){return new Ee(we.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function q4(t){return new Ee(we.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ep(t){return new Ee(we.INVALID_ARGUMENT,t)}function YI(){return new Ee(we.APP_DELETED,"The Firebase app was deleted.")}function K4(t){return new Ee(we.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ko(t,e){return new Ee(we.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Zs(t){throw new Ee(we.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Tt.makeFromUrl(e,n)}catch{return new Tt(e,"")}if(r.path==="")return r;throw B4(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),v={bucket:1,path:3},_=n===KI?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${w}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:p,indices:v,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<y.length;E++){const S=y[E],A=S.regex.exec(e);if(A){const k=A[S.indices.bucket];let P=A[S.indices.path];P||(P=""),r=new Tt(k,P),S.postModify(r);break}}if(r==null)throw z4(e);return r}}class Q4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Y4(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,t(p,l())},w)}function f(){s&&clearTimeout(s)}function p(w,...g){if(u){f();return}if(w){f(),c.call(null,w,...g);return}if(l()||o){f(),c.call(null,w,...g);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let v=!1;function _(w){v||(v=!0,f(),!u&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function X4(t){t(!1)}/**
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
 */function J4(t){return t!==void 0}function Z4(t){return typeof t=="object"&&!Array.isArray(t)}function km(t){return typeof t=="string"||t instanceof String}function M_(t){return xm()&&t instanceof Blob}function xm(){return typeof Blob<"u"}function V_(t,e,n,r){if(r<e)throw ep(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw ep(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Pm(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function XI(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var ii;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ii||(ii={}));/**
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
 */function eL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class tL{constructor(e,n,r,i,s,o,a,l,u,c,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,v)=>{this.resolve_=p,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Cl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ii.NO_ERROR,l=s.getStatus();if(!a||eL(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ii.ABORT;r(!1,new Cl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Cl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());J4(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Am();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?YI():U4();o(l)}else{const l=$4();o(l)}};this.canceled_?n(!1,new Cl(!1,null,!0)):this.backoffId_=Y4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&X4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Cl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function nL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function rL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function iL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function oL(t,e,n,r,i,s,o=!0){const a=XI(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return iL(u,e),nL(u,n),rL(u,s),sL(u,r),new tL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function aL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function lL(...t){const e=aL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(xm())return new Blob(t);throw new Ee(we.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function uL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function cL(t){if(typeof atob>"u")throw q4("base-64");return atob(t)}/**
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
 */const on={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class dh{constructor(e,n){this.data=e,this.contentType=n||null}}function dL(t,e){switch(t){case on.RAW:return new dh(JI(e));case on.BASE64:case on.BASE64URL:return new dh(ZI(t,e));case on.DATA_URL:return new dh(fL(e),pL(e))}throw Am()}function JI(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function hL(t){let e;try{e=decodeURIComponent(t)}catch{throw ko(on.DATA_URL,"Malformed data URL.")}return JI(e)}function ZI(t,e){switch(t){case on.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case on.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=cL(e)}catch(i){throw i.message.includes("polyfill")?i:ko(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class eT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ko(on.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=gL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function fL(t){const e=new eT(t);return e.base64?ZI(on.BASE64,e.rest):hL(e.rest)}function pL(t){return new eT(t).contentType}function gL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class rr{constructor(e,n){let r=0,i="";M_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(M_(this.data_)){const r=this.data_,i=uL(r,e,n);return i===null?null:new rr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new rr(r,!0)}}static getBlob(...e){if(xm()){const n=e.map(r=>r instanceof rr?r.data_:r);return new rr(lL.apply(null,n))}else{const n=e.map(o=>km(o)?dL(on.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new rr(i,!0)}}uploadData(){return this.data_}}/**
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
 */function tT(t){let e;try{e=JSON.parse(t)}catch{return null}return Z4(e)?e:null}/**
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
 */function mL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function nT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function yL(t,e){return e}class ot{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||yL}}let Rl=null;function _L(t){return!km(t)||t.length<2?t:nT(t)}function rT(){if(Rl)return Rl;const t=[];t.push(new ot("bucket")),t.push(new ot("generation")),t.push(new ot("metageneration")),t.push(new ot("name","fullPath",!0));function e(s,o){return _L(o)}const n=new ot("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new ot("size");return i.xform=r,t.push(i),t.push(new ot("timeCreated")),t.push(new ot("updated")),t.push(new ot("md5Hash",null,!0)),t.push(new ot("cacheControl",null,!0)),t.push(new ot("contentDisposition",null,!0)),t.push(new ot("contentEncoding",null,!0)),t.push(new ot("contentLanguage",null,!0)),t.push(new ot("contentType",null,!0)),t.push(new ot("metadata","customMetadata",!0)),Rl=t,Rl}function wL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Tt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function EL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return wL(r,t),r}function iT(t,e,n){const r=tT(e);return r===null?null:EL(t,r,n)}function SL(t,e,n,r){const i=tT(e);if(i===null||!km(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,f="/b/"+o(c)+"/o/"+o(d),p=Pm(f,n,r),v=XI({alt:"media",token:u});return p+v})[0]}function IL(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class sT{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function oT(t){if(!t)throw Am()}function TL(t,e){function n(r,i){const s=iT(t,i,e);return oT(s!==null),s}return n}function CL(t,e){function n(r,i){const s=iT(t,i,e);return oT(s!==null),SL(s,i,t.host,t._protocol)}return n}function aT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=F4():i=V4():n.getStatus()===402?i=M4(t.bucket):n.getStatus()===403?i=j4(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function RL(t){const e=aT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=L4(t.path)),s.serverResponse=i.serverResponse,s}return n}function AL(t,e,n){const r=e.fullServerUrl(),i=Pm(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new sT(i,s,CL(t,n),o);return a.errorHandler=RL(e),a}function kL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=kL(null,e)),r}function PL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let E=0;E<2;E++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=xL(e,r,i),c=IL(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=rr.getBlob(d,r,f);if(p===null)throw W4();const v={name:u.fullPath},_=Pm(s,t.host,t._protocol),w="POST",g=t.maxUploadRetryTime,m=new sT(_,w,TL(t,n),g);return m.urlParams=v,m.headers=o,m.body=p.uploadData(),m.errorHandler=aT(e),m}class NL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ii.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ii.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ii.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Zs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class bL extends NL{initXhr(){this.xhr_.responseType="text"}}function lT(){return new bL}/**
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
 */class yi{constructor(e,n){this._service=e,n instanceof Tt?this._location=n:this._location=Tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new yi(e,n)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nT(this._location.path)}get storage(){return this._service}get parent(){const e=mL(this._location.path);if(e===null)return null;const n=new Tt(this._location.bucket,e);return new yi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw K4(e)}}function OL(t,e,n){t._throwIfRoot("uploadBytes");const r=PL(t.storage,t._location,rT(),new rr(e,!0),n);return t.storage.makeRequestWithTokens(r,lT).then(i=>({metadata:i,ref:t}))}function DL(t){t._throwIfRoot("getDownloadURL");const e=AL(t.storage,t._location,rT());return t.storage.makeRequestWithTokens(e,lT).then(n=>{if(n===null)throw G4();return n})}function LL(t,e){const n=vL(t._location.path,e),r=new Tt(t._location.bucket,n);return new yi(t.storage,r)}/**
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
 */function ML(t){return/^[A-Za-z]+:\/\//.test(t)}function VL(t,e){return new yi(t,e)}function uT(t,e){if(t instanceof Nm){const n=t;if(n._bucket==null)throw H4();const r=new yi(n,n._bucket);return e!=null?uT(r,e):r}else return e!==void 0?LL(t,e):t}function FL(t,e){if(e&&ML(e)){if(t instanceof Nm)return VL(t,e);throw ep("To use ref(service, url), the first argument must be a Storage instance.")}else return uT(t,e)}function F_(t,e){const n=e==null?void 0:e[QI];return n==null?null:Tt.makeFromBucketSpec(n,t)}function jL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Y1(i,t.app.options.projectId))}class Nm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=KI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=O4,this._maxUploadRetryTime=D4,this._requests=new Set,i!=null?this._bucket=Tt.makeFromBucketSpec(i,this._host):this._bucket=F_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=F_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){V_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Q4(YI());{const o=oL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const j_="@firebase/storage",$_="0.12.0";/**
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
 */const cT="storage";function bm(t,e,n){return t=ke(t),OL(t,e,n)}function Om(t){return t=ke(t),DL(t)}function Dm(t,e){return t=ke(t),FL(t,e)}function Lm(t=Eg(),e){t=ke(t);const r=Rc(t,cT).getImmediate({identifier:e}),i=q1("storage");return i&&$L(r,...i),r}function $L(t,e,n,r={}){jL(t,e,n,r)}function UL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Nm(n,r,i,e,Ii)}function zL(){di(new Cr(cT,UL,"PUBLIC").setMultipleInstances(!0)),cn(j_,$_,""),cn(j_,$_,"esm2017")}zL();const BL={apiKey:"AIzaSyAyirhYM-x6ltCHOzWidGVAy93PizO4tqk",authDomain:"news-portal-98068.firebaseapp.com",projectId:"news-portal-98068",storageBucket:"news-portal-98068.appspot.com",messagingSenderId:"910487241766",appId:"1:910487241766:web:3b9ca8d554d9a6cf80d2e7"},ki=Z1(BL),Ft=VI(ki),HL=Lm(ki),U_=OE(ki),dT=I.createContext(),$r=()=>I.useContext(dT);function WL({children:t}){const[e,n]=I.useState([]),[r,i]=I.useState(!0);I.useEffect(()=>{(async()=>{try{const a=Mn(Ft,"News"),l=await ad(a),u=[];l.forEach(c=>{u.push({id:c.id,...c.data()})}),n(u)}catch(a){console.error("Error fetching news data:",a)}finally{i(!1)}})()},[]);const s=o=>{n(o)};return h.jsx(dT.Provider,{value:{newsData:e,loading:r,updatedNews:s},children:t})}function Hn(){return h.jsx("div",{className:"loader"})}function GL(){const{newsData:t,loading:e}=$r();if(e)return h.jsx(Hn,{});const n=t.filter(r=>r.isBreaking);return h.jsx("div",{className:"breaking-container",children:n.length>0&&h.jsxs("div",{className:"breaking-section",children:[h.jsx("div",{className:"breakingLabel",children:h.jsx("h4",{children:"Breaking News"})}),h.jsx("div",{className:"marquee-container",children:h.jsx("div",{className:"marquee-content",children:n.map(r=>h.jsx("div",{className:"newsHeadings",children:h.jsx("h4",{children:r.heading})},r.id))})})]})})}function qL(){return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"parent-nav",children:h.jsxs("div",{className:"navbar",children:[h.jsx("div",{className:"log",children:"Logo"}),h.jsx("div",{className:"nav-items",children:h.jsxs("ul",{children:[h.jsxs("li",{children:[" ",h.jsx(ft,{to:"/",children:"Home"})]}),h.jsxs("li",{children:[" ",h.jsx(ft,{to:"/technology",children:"Technology"})]}),h.jsxs("li",{children:[" ",h.jsx(ft,{to:"/entertainment",children:"Entertainment"})]}),h.jsxs("li",{children:[" ",h.jsx(ft,{to:"/politics",children:"Politics"})]}),h.jsxs("li",{children:[" ",h.jsx(ft,{to:"/education",children:"Education"})]}),h.jsxs("li",{children:[" ",h.jsx(ft,{to:"/sport",children:"Sport"})]})]})})]})}),h.jsx(GL,{})]})}const KL=({close:t})=>h.jsxs("div",{className:"career",children:[h.jsx("button",{onClick:t,className:"closeBtn",children:"X"}),h.jsxs("div",{className:"careerContainer",children:[h.jsx("h1",{children:"Join Our team"}),h.jsx("p",{children:"opps currently there is no any vacancy"}),h.jsx("button",{onClick:t,children:"Ok"})]})]}),hT=({close:t})=>{const[e,n]=I.useState({name:"",email:"",suggestion:""}),r=s=>{const{name:o,value:a}=s.target;n({...e,[o]:a})},i=async s=>{s.preventDefault(),await Ga(Mn(Ft,"suggestionForm"),e),console.log(e),t()};return h.jsxs("div",{className:"suggestion-container",children:[h.jsx("h2",{children:"Thank you for your suggestion!"}),h.jsx("p",{children:"We're always looking for ways to improve. Your feedback is valuable to us."}),h.jsx("p",{children:"Please feel free to share your thoughts and ideas."}),h.jsxs("form",{onSubmit:i,children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"name",children:"Name:"}),h.jsx("input",{type:"text",id:"name",name:"name",value:e.name,onChange:r,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"email",children:"Email:"}),h.jsx("input",{type:"email",id:"email",name:"email",value:e.email,onChange:r,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"suggestion",children:"Suggestion:"}),h.jsx("textarea",{id:"suggestion",name:"suggestion",value:e.suggestion,onChange:r,required:!0})]}),h.jsx("button",{type:"submit",children:"Submit"}),h.jsx("button",{onClick:t,children:"Close"})]})]})},QL=({close:t})=>{const e={name:"",email:"",phone:"",message:""},[n,r]=I.useState(e),i=o=>{const{name:a,value:l}=o.target;r({...n,[a]:l})},s=async o=>{o.preventDefault();try{const a=await Ga(Mn(Ft,"contactForm"),n);console.log("coontact Id",a.id),r(e),t()}catch(a){console.log(a)}};return h.jsxs("div",{className:"contact-container",children:[h.jsx("h2",{children:"Contact Us"}),h.jsxs("form",{onSubmit:s,children:[h.jsxs("div",{children:[h.jsx("label",{htmlFor:"name",children:"Name:"}),h.jsx("input",{type:"text",id:"name",name:"name",value:n.name,onChange:i,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"email",children:"Email:"}),h.jsx("input",{type:"email",id:"email",name:"email",value:n.email,onChange:i,required:!0})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"phone",children:"Phone"}),h.jsx("input",{type:"tel",id:"phone",name:"phone",value:n.phone,onChange:i})]}),h.jsxs("div",{children:[h.jsx("label",{htmlFor:"message",children:"Message:"}),h.jsx("textarea",{id:"message",name:"message",value:n.message,onChange:i,required:!0})]}),h.jsx("button",{type:"submit",children:"Submit"})]}),h.jsx("button",{onClick:t,children:"Close"})]})};function YL(){const t=I.useRef(),e=I.useRef(),n=I.useRef(),r=()=>{t.current.showModal()},i=()=>{t.current.close()};return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"parentFooter",children:h.jsxs("div",{className:"footer",children:[h.jsxs("div",{className:"footerOne",children:[h.jsx("h3",{children:"NewsWave"}),h.jsx("span",{children:"Newswave: Surfing the currents of breaking news and trending stories, providing a dynamic and comprehensive wave of information daily."})]}),h.jsxs("div",{className:"footerTwo",children:[h.jsx("h3",{children:"Quick Links"}),h.jsxs("ul",{children:[h.jsx("li",{children:"Advertisement"}),h.jsx("li",{onClick:()=>{e.current.showModal()},children:"Suggestion"}),h.jsx("li",{children:h.jsx(z1,{to:"/haveNews",children:"Have News"})}),h.jsx("li",{onClick:()=>{n.current.showModal()},children:"Contact"}),h.jsx("li",{onClick:r,children:"Career"})]})]}),h.jsxs("div",{className:"footerThree",children:[h.jsx("h3",{children:"Contact"}),h.jsx("span",{children:"NewsWave Media"}),h.jsx("span",{children:"Link-road Birgunj"}),h.jsx("span",{children:"Nepal"}),h.jsx("span",{children:"+9779806814329"})]})]})}),h.jsx("dialog",{ref:t,children:h.jsx(KL,{close:i})}),h.jsx("dialog",{ref:e,children:h.jsx(hT,{close:()=>{e.current.close()}})}),h.jsx("dialog",{ref:n,children:h.jsx(QL,{close:()=>{n.current.close()}})})]})}function wt({children:t}){return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"nav",children:h.jsx(qL,{})}),h.jsx("div",{className:"content",children:t}),h.jsx(YL,{})]})}function z_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z_(Object(n),!0).forEach(function(r){Oe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function nc(t){"@babel/helpers - typeof";return nc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},nc(t)}function XL(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function B_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function JL(t,e,n){return e&&B_(t.prototype,e),n&&B_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Oe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Mm(t,e){return eM(t)||nM(t,e)||fT(t,e)||iM()}function qa(t){return ZL(t)||tM(t)||fT(t)||rM()}function ZL(t){if(Array.isArray(t))return tp(t)}function eM(t){if(Array.isArray(t))return t}function tM(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function nM(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function fT(t,e){if(t){if(typeof t=="string")return tp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tp(t,e)}}function tp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function rM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var H_=function(){},Vm={},pT={},gT=null,mT={mark:H_,measure:H_};try{typeof window<"u"&&(Vm=window),typeof document<"u"&&(pT=document),typeof MutationObserver<"u"&&(gT=MutationObserver),typeof performance<"u"&&(mT=performance)}catch{}var sM=Vm.navigator||{},W_=sM.userAgent,G_=W_===void 0?"":W_,xr=Vm,ue=pT,q_=gT,Al=mT;xr.document;var Wn=!!ue.documentElement&&!!ue.head&&typeof ue.addEventListener=="function"&&typeof ue.createElement=="function",vT=~G_.indexOf("MSIE")||~G_.indexOf("Trident/"),kl,xl,Pl,Nl,bl,Vn="___FONT_AWESOME___",np=16,yT="fa",_T="svg-inline--fa",_i="data-fa-i2svg",rp="data-fa-pseudo-element",oM="data-fa-pseudo-element-pending",Fm="data-prefix",jm="data-icon",K_="fontawesome-i2svg",aM="async",lM=["HTML","HEAD","STYLE","SCRIPT"],wT=function(){try{return!0}catch{return!1}}(),oe="classic",ye="sharp",$m=[oe,ye];function Ka(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[oe]}})}var pa=Ka((kl={},Oe(kl,oe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Oe(kl,ye,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),kl)),ga=Ka((xl={},Oe(xl,oe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Oe(xl,ye,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),xl)),ma=Ka((Pl={},Oe(Pl,oe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Oe(Pl,ye,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Pl)),uM=Ka((Nl={},Oe(Nl,oe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Oe(Nl,ye,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Nl)),cM=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,ET="fa-layers-text",dM=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,hM=Ka((bl={},Oe(bl,oe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Oe(bl,ye,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),bl)),ST=[1,2,3,4,5,6,7,8,9,10],fM=ST.concat([11,12,13,14,15,16,17,18,19,20]),pM=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},va=new Set;Object.keys(ga[oe]).map(va.add.bind(va));Object.keys(ga[ye]).map(va.add.bind(va));var gM=[].concat($m,qa(va),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Jr.GROUP,Jr.SWAP_OPACITY,Jr.PRIMARY,Jr.SECONDARY]).concat(ST.map(function(t){return"".concat(t,"x")})).concat(fM.map(function(t){return"w-".concat(t)})),xo=xr.FontAwesomeConfig||{};function mM(t){var e=ue.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function vM(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ue&&typeof ue.querySelector=="function"){var yM=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];yM.forEach(function(t){var e=Mm(t,2),n=e[0],r=e[1],i=vM(mM(n));i!=null&&(xo[r]=i)})}var IT={styleDefault:"solid",familyDefault:"classic",cssPrefix:yT,replacementClass:_T,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};xo.familyPrefix&&(xo.cssPrefix=xo.familyPrefix);var Rs=N(N({},IT),xo);Rs.autoReplaceSvg||(Rs.observeMutations=!1);var L={};Object.keys(IT).forEach(function(t){Object.defineProperty(L,t,{enumerable:!0,set:function(n){Rs[t]=n,Po.forEach(function(r){return r(L)})},get:function(){return Rs[t]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(e){Rs.cssPrefix=e,Po.forEach(function(n){return n(L)})},get:function(){return Rs.cssPrefix}});xr.FontAwesomeConfig=L;var Po=[];function _M(t){return Po.push(t),function(){Po.splice(Po.indexOf(t),1)}}var Kn=np,an={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function wM(t){if(!(!t||!Wn)){var e=ue.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ue.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ue.head.insertBefore(e,r),t}}var EM="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ya(){for(var t=12,e="";t-- >0;)e+=EM[Math.random()*62|0];return e}function js(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Um(t){return t.classList?js(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function TT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function SM(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(TT(t[n]),'" ')},"").trim()}function ud(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function zm(t){return t.size!==an.size||t.x!==an.x||t.y!==an.y||t.rotate!==an.rotate||t.flipX||t.flipY}function IM(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function TM(t){var e=t.transform,n=t.width,r=n===void 0?np:n,i=t.height,s=i===void 0?np:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&vT?l+="translate(".concat(e.x/Kn-r/2,"em, ").concat(e.y/Kn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Kn,"em), calc(-50% + ").concat(e.y/Kn,"em)) "):l+="translate(".concat(e.x/Kn,"em, ").concat(e.y/Kn,"em) "),l+="scale(".concat(e.size/Kn*(e.flipX?-1:1),", ").concat(e.size/Kn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var CM=`:root, :host {
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
}`;function CT(){var t=yT,e=_T,n=L.cssPrefix,r=L.replacementClass,i=CM;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Q_=!1;function hh(){L.autoAddCss&&!Q_&&(wM(CT()),Q_=!0)}var RM={mixout:function(){return{dom:{css:CT,insertCss:hh}}},hooks:function(){return{beforeDOMElementCreation:function(){hh()},beforeI2svg:function(){hh()}}}},Fn=xr||{};Fn[Vn]||(Fn[Vn]={});Fn[Vn].styles||(Fn[Vn].styles={});Fn[Vn].hooks||(Fn[Vn].hooks={});Fn[Vn].shims||(Fn[Vn].shims=[]);var Wt=Fn[Vn],RT=[],AM=function t(){ue.removeEventListener("DOMContentLoaded",t),rc=1,RT.map(function(e){return e()})},rc=!1;Wn&&(rc=(ue.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ue.readyState),rc||ue.addEventListener("DOMContentLoaded",AM));function kM(t){Wn&&(rc?setTimeout(t,0):RT.push(t))}function Qa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?TT(t):"<".concat(e," ").concat(SM(r),">").concat(s.map(Qa).join(""),"</").concat(e,">")}function Y_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var xM=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},fh=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?xM(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function PM(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function ip(t){var e=PM(t);return e.length===1?e[0].toString(16):null}function NM(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function X_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function sp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=X_(e);typeof Wt.hooks.addPack=="function"&&!i?Wt.hooks.addPack(t,X_(e)):Wt.styles[t]=N(N({},Wt.styles[t]||{}),s),t==="fas"&&sp("fa",e)}var Ol,Dl,Ll,Ki=Wt.styles,bM=Wt.shims,OM=(Ol={},Oe(Ol,oe,Object.values(ma[oe])),Oe(Ol,ye,Object.values(ma[ye])),Ol),Bm=null,AT={},kT={},xT={},PT={},NT={},DM=(Dl={},Oe(Dl,oe,Object.keys(pa[oe])),Oe(Dl,ye,Object.keys(pa[ye])),Dl);function LM(t){return~gM.indexOf(t)}function MM(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!LM(i)?i:null}var bT=function(){var e=function(s){return fh(Ki,function(o,a,l){return o[l]=fh(a,s,{}),o},{})};AT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),kT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),NT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ki||L.autoFetchSvg,r=fh(bM,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});xT=r.names,PT=r.unicodes,Bm=cd(L.styleDefault,{family:L.familyDefault})};_M(function(t){Bm=cd(t.styleDefault,{family:L.familyDefault})});bT();function Hm(t,e){return(AT[t]||{})[e]}function VM(t,e){return(kT[t]||{})[e]}function Zr(t,e){return(NT[t]||{})[e]}function OT(t){return xT[t]||{prefix:null,iconName:null}}function FM(t){var e=PT[t],n=Hm("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Pr(){return Bm}var Wm=function(){return{prefix:null,iconName:null,rest:[]}};function cd(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?oe:n,i=pa[r][t],s=ga[r][t]||ga[r][i],o=t in Wt.styles?t:null;return s||o||null}var J_=(Ll={},Oe(Ll,oe,Object.keys(ma[oe])),Oe(Ll,ye,Object.keys(ma[ye])),Ll);function dd(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Oe(e,oe,"".concat(L.cssPrefix,"-").concat(oe)),Oe(e,ye,"".concat(L.cssPrefix,"-").concat(ye)),e),o=null,a=oe;(t.includes(s[oe])||t.some(function(u){return J_[oe].includes(u)}))&&(a=oe),(t.includes(s[ye])||t.some(function(u){return J_[ye].includes(u)}))&&(a=ye);var l=t.reduce(function(u,c){var d=MM(L.cssPrefix,c);if(Ki[c]?(c=OM[a].includes(c)?uM[a][c]:c,o=c,u.prefix=c):DM[a].indexOf(c)>-1?(o=c,u.prefix=cd(c,{family:a})):d?u.iconName=d:c!==L.replacementClass&&c!==s[oe]&&c!==s[ye]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?OT(u.iconName):{},p=Zr(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||p||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Ki.far&&Ki.fas&&!L.autoFetchSvg&&(u.prefix="fas")}return u},Wm());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ye&&(Ki.fass||L.autoFetchSvg)&&(l.prefix="fass",l.iconName=Zr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Pr()||"fas"),l}var jM=function(){function t(){XL(this,t),this.definitions={}}return JL(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=N(N({},n.definitions[a]||{}),o[a]),sp(a,o[a]);var l=ma[oe][a];l&&sp(l,o[a]),bT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Z_=[],Qi={},ls={},$M=Object.keys(ls);function UM(t,e){var n=e.mixoutsTo;return Z_=t,Qi={},Object.keys(ls).forEach(function(r){$M.indexOf(r)===-1&&delete ls[r]}),Z_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),nc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Qi[o]||(Qi[o]=[]),Qi[o].push(s[o])})}r.provides&&r.provides(ls)}),n}function op(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Qi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function wi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Qi[t]||[];i.forEach(function(s){s.apply(null,n)})}function jn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ls[t]?ls[t].apply(null,e):void 0}function ap(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Pr();if(e)return e=Zr(n,e)||e,Y_(DT.definitions,n,e)||Y_(Wt.styles,n,e)}var DT=new jM,zM=function(){L.autoReplaceSvg=!1,L.observeMutations=!1,wi("noAuto")},BM={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Wn?(wi("beforeI2svg",e),jn("pseudoElements2svg",e),jn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,kM(function(){WM({autoReplaceSvgRoot:n}),wi("watch",e)})}},HM={icon:function(e){if(e===null)return null;if(nc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Zr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=cd(e[0]);return{prefix:r,iconName:Zr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(L.cssPrefix,"-"))>-1||e.match(cM))){var i=dd(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Pr(),iconName:Zr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Pr();return{prefix:s,iconName:Zr(s,e)||e}}}},Nt={noAuto:zM,config:L,dom:BM,parse:HM,library:DT,findIconDefinition:ap,toHtml:Qa},WM=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ue:n;(Object.keys(Wt.styles).length>0||L.autoFetchSvg)&&Wn&&L.autoReplaceSvg&&Nt.dom.i2svg({node:r})};function hd(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Qa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Wn){var r=ue.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function GM(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(zm(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=ud(N(N({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function qM(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(L.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},i),{},{id:o}),children:r}]}]}function Gm(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,p=f===void 0?!1:f,v=r.found?r:n,_=v.width,w=v.height,g=i==="fak",m=[L.replacementClass,s?"".concat(L.cssPrefix,"-").concat(s):""].filter(function(H){return d.classes.indexOf(H)===-1}).filter(function(H){return H!==""||!!H}).concat(d.classes).join(" "),y={children:[],attributes:N(N({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(w)})},E=g&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/w*16*.0625,"em")}:{};p&&(y.attributes[_i]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||ya())},children:[l]}),delete y.attributes.title);var S=N(N({},y),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:N(N({},E),d.styles)}),A=r.found&&n.found?jn("generateAbstractMask",S)||{children:[],attributes:{}}:jn("generateAbstractIcon",S)||{children:[],attributes:{}},k=A.children,P=A.attributes;return S.children=k,S.attributes=P,a?qM(S):GM(S)}function e0(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=N(N(N({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[_i]="");var c=N({},o.styles);zm(i)&&(c.transform=TM({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=ud(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function KM(t){var e=t.content,n=t.title,r=t.extra,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=ud(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ph=Wt.styles;function lp(t){var e=t[0],n=t[1],r=t.slice(4),i=Mm(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(Jr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Jr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(Jr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var QM={found:!1,width:512,height:512};function YM(t,e){!wT&&!L.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function up(t,e){var n=e;return e==="fa"&&L.styleDefault!==null&&(e=Pr()),new Promise(function(r,i){if(jn("missingIconAbstract"),n==="fa"){var s=OT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ph[e]&&ph[e][t]){var o=ph[e][t];return r(lp(o))}YM(t,e),r(N(N({},QM),{},{icon:L.showMissingIcons&&t?jn("missingIconAbstract")||{}:{}}))})}var t0=function(){},cp=L.measurePerformance&&Al&&Al.mark&&Al.measure?Al:{mark:t0,measure:t0},ho='FA "6.5.1"',XM=function(e){return cp.mark("".concat(ho," ").concat(e," begins")),function(){return LT(e)}},LT=function(e){cp.mark("".concat(ho," ").concat(e," ends")),cp.measure("".concat(ho," ").concat(e),"".concat(ho," ").concat(e," begins"),"".concat(ho," ").concat(e," ends"))},qm={begin:XM,end:LT},su=function(){};function n0(t){var e=t.getAttribute?t.getAttribute(_i):null;return typeof e=="string"}function JM(t){var e=t.getAttribute?t.getAttribute(Fm):null,n=t.getAttribute?t.getAttribute(jm):null;return e&&n}function ZM(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(L.replacementClass)}function eV(){if(L.autoReplaceSvg===!0)return ou.replace;var t=ou[L.autoReplaceSvg];return t||ou.replace}function tV(t){return ue.createElementNS("http://www.w3.org/2000/svg",t)}function nV(t){return ue.createElement(t)}function MT(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?tV:nV:n;if(typeof t=="string")return ue.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(MT(o,{ceFn:r}))}),i}function rV(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ou={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(MT(i),n)}),n.getAttribute(_i)===null&&L.keepOriginalSource){var r=ue.createComment(rV(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Um(n).indexOf(L.replacementClass))return ou.replace(e);var i=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===L.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Qa(a)}).join(`
`);n.setAttribute(_i,""),n.innerHTML=o}};function r0(t){t()}function VT(t,e){var n=typeof e=="function"?e:su;if(t.length===0)n();else{var r=r0;L.mutateApproach===aM&&(r=xr.requestAnimationFrame||r0),r(function(){var i=eV(),s=qm.begin("mutate");t.map(i),s(),n()})}}var Km=!1;function FT(){Km=!0}function dp(){Km=!1}var ic=null;function i0(t){if(q_&&L.observeMutations){var e=t.treeCallback,n=e===void 0?su:e,r=t.nodeCallback,i=r===void 0?su:r,s=t.pseudoElementsCallback,o=s===void 0?su:s,a=t.observeMutationsRoot,l=a===void 0?ue:a;ic=new q_(function(u){if(!Km){var c=Pr();js(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!n0(d.addedNodes[0])&&(L.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&L.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&n0(d.target)&&~pM.indexOf(d.attributeName))if(d.attributeName==="class"&&JM(d.target)){var f=dd(Um(d.target)),p=f.prefix,v=f.iconName;d.target.setAttribute(Fm,p||c),v&&d.target.setAttribute(jm,v)}else ZM(d.target)&&i(d.target)})}}),Wn&&ic.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function iV(){ic&&ic.disconnect()}function sV(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function oV(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=dd(Um(t));return i.prefix||(i.prefix=Pr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=VM(i.prefix,t.innerText)||Hm(i.prefix,ip(t.innerText))),!i.iconName&&L.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function aV(t){var e=js(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return L.autoA11y&&(n?e["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(r||ya()):(e["aria-hidden"]="true",e.focusable="false")),e}function lV(){return{iconName:null,title:null,titleId:null,prefix:null,transform:an,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function s0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=oV(t),r=n.iconName,i=n.prefix,s=n.rest,o=aV(t),a=op("parseNodeAttributes",{},t),l=e.styleParser?sV(t):[];return N({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:an,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var uV=Wt.styles;function jT(t){var e=L.autoReplaceSvg==="nest"?s0(t,{styleParser:!1}):s0(t);return~e.extra.classes.indexOf(ET)?jn("generateLayersText",t,e):jn("generateSvgReplacementMutation",t,e)}var Nr=new Set;$m.map(function(t){Nr.add("fa-".concat(t))});Object.keys(pa[oe]).map(Nr.add.bind(Nr));Object.keys(pa[ye]).map(Nr.add.bind(Nr));Nr=qa(Nr);function o0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Wn)return Promise.resolve();var n=ue.documentElement.classList,r=function(d){return n.add("".concat(K_,"-").concat(d))},i=function(d){return n.remove("".concat(K_,"-").concat(d))},s=L.autoFetchSvg?Nr:$m.map(function(c){return"fa-".concat(c)}).concat(Object.keys(uV));s.includes("fa")||s.push("fa");var o=[".".concat(ET,":not([").concat(_i,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(_i,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=js(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=qm.begin("onTree"),u=a.reduce(function(c,d){try{var f=jT(d);f&&c.push(f)}catch(p){wT||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){VT(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function cV(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jT(t).then(function(n){n&&VT([n],e)})}function dV(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ap(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ap(i||{})),t(r,N(N({},n),{},{mask:i}))}}var hV=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?an:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,p=n.titleId,v=p===void 0?null:p,_=n.classes,w=_===void 0?[]:_,g=n.attributes,m=g===void 0?{}:g,y=n.styles,E=y===void 0?{}:y;if(e){var S=e.prefix,A=e.iconName,k=e.icon;return hd(N({type:"icon"},e),function(){return wi("beforeDOMElementCreation",{iconDefinition:e,params:n}),L.autoA11y&&(f?m["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(v||ya()):(m["aria-hidden"]="true",m.focusable="false")),Gm({icons:{main:lp(k),mask:l?lp(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:A,transform:N(N({},an),i),symbol:o,title:f,maskId:c,titleId:v,extra:{attributes:m,styles:E,classes:w}})})}},fV={mixout:function(){return{icon:dV(hV)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=o0,n.nodeCallback=cV,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ue:r,s=n.callback,o=s===void 0?function(){}:s;return o0(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(p,v){Promise.all([up(i,a),c.iconName?up(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var w=Mm(_,2),g=w[0],m=w[1];p([n,Gm({icons:{main:g,mask:m},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=ud(a);l.length>0&&(i.style=l);var u;return zm(o)&&(u=jn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},pV={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return hd({type:"layer"},function(){wi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers")].concat(qa(s)).join(" ")},children:o}]})}}}},gV={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return hd({type:"counter",content:n},function(){return wi("beforeDOMElementCreation",{content:n,params:r}),KM({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(L.cssPrefix,"-layers-counter")].concat(qa(a))}})})}}}},mV={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?an:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,p=f===void 0?{}:f;return hd({type:"text",content:n},function(){return wi("beforeDOMElementCreation",{content:n,params:r}),e0({content:n,transform:N(N({},an),s),title:a,extra:{attributes:d,styles:p,classes:["".concat(L.cssPrefix,"-layers-text")].concat(qa(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(vT){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return L.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,e0({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},vV=new RegExp('"',"ug"),a0=[1105920,1112319];function yV(t){var e=t.replace(vV,""),n=NM(e,0),r=n>=a0[0]&&n<=a0[1],i=e.length===2?e[0]===e[1]:!1;return{value:ip(i?e[0]:e),isSecondary:r||i}}function l0(t,e){var n="".concat(oM).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=js(t.children),o=s.filter(function(k){return k.getAttribute(rp)===e})[0],a=xr.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(dM),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?ye:oe,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ga[f][l[2].toLowerCase()]:hM[f][u],v=yV(d),_=v.value,w=v.isSecondary,g=l[0].startsWith("FontAwesome"),m=Hm(p,_),y=m;if(g){var E=FM(_);E.iconName&&E.prefix&&(m=E.iconName,p=E.prefix)}if(m&&!w&&(!o||o.getAttribute(Fm)!==p||o.getAttribute(jm)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var S=lV(),A=S.extra;A.attributes[rp]=e,up(m,p).then(function(k){var P=Gm(N(N({},S),{},{icons:{main:k,mask:Wm()},prefix:p,iconName:y,extra:A,watchable:!0})),H=ue.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(H,t.firstChild):t.appendChild(H),H.outerHTML=P.map(function(F){return Qa(F)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function _V(t){return Promise.all([l0(t,"::before"),l0(t,"::after")])}function wV(t){return t.parentNode!==document.head&&!~lM.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(rp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function u0(t){if(Wn)return new Promise(function(e,n){var r=js(t.querySelectorAll("*")).filter(wV).map(_V),i=qm.begin("searchPseudoElements");FT(),Promise.all(r).then(function(){i(),dp(),e()}).catch(function(){i(),dp(),n()})})}var EV={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=u0,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ue:r;L.searchPseudoElements&&u0(i)}}},c0=!1,SV={mixout:function(){return{dom:{unwatch:function(){FT(),c0=!0}}}},hooks:function(){return{bootstrap:function(){i0(op("mutationObserverCallbacks",{}))},noAuto:function(){iV()},watch:function(n){var r=n.observeMutationsRoot;c0?dp():i0(op("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},d0=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},IV={mixout:function(){return{parse:{transform:function(n){return d0(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=d0(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:d,path:f};return{tag:"g",attributes:N({},p.outer),children:[{tag:"g",attributes:N({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),p.path)}]}]}}}},gh={x:0,y:0,width:"100%",height:"100%"};function h0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function TV(t){return t.tag==="g"?t.children:[t]}var CV={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?dd(i.split(" ").map(function(o){return o.trim()})):Wm();return s.prefix||(s.prefix=Pr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,p=IM({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:N(N({},gh),{},{fill:"white"})},_=c.children?{children:c.children.map(h0)}:{},w={tag:"g",attributes:N({},p.inner),children:[h0(N({tag:c.tag,attributes:N(N({},c.attributes),p.path)},_))]},g={tag:"g",attributes:N({},p.outer),children:[w]},m="mask-".concat(a||ya()),y="clip-".concat(a||ya()),E={tag:"mask",attributes:N(N({},gh),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,g]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:TV(f)},E]};return r.push(S,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(m,")")},gh)}),{children:r,attributes:i}}}},RV={provides:function(e){var n=!1;xr.matchMedia&&(n=xr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=N(N({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:N(N({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:N(N({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:N(N({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},AV={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},kV=[RM,fV,pV,gV,mV,EV,SV,IV,CV,RV,AV];UM(kV,{mixoutsTo:Nt});Nt.noAuto;Nt.config;Nt.library;Nt.dom;var hp=Nt.parse;Nt.findIconDefinition;Nt.toHtml;var xV=Nt.icon;Nt.layer;Nt.text;Nt.counter;var $T={exports:{}},PV="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",NV=PV,bV=NV;function UT(){}function zT(){}zT.resetWarningCache=UT;var OV=function(){function t(r,i,s,o,a,l){if(l!==bV){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:zT,resetWarningCache:UT};return n.PropTypes=n,n};$T.exports=OV();var DV=$T.exports;const K=_0(DV);function f0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function lr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?f0(Object(n),!0).forEach(function(r){Yi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function sc(t){"@babel/helpers - typeof";return sc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sc(t)}function Yi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function LV(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function MV(t,e){if(t==null)return{};var n=LV(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function fp(t){return VV(t)||FV(t)||jV(t)||$V()}function VV(t){if(Array.isArray(t))return pp(t)}function FV(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function jV(t,e){if(t){if(typeof t=="string")return pp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pp(t,e)}}function pp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function $V(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function UV(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,p=t.inverse,v=t.border,_=t.listItem,w=t.flip,g=t.size,m=t.rotation,y=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":p,"fa-border":v,"fa-li":_,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Yi(e,"fa-".concat(g),typeof g<"u"&&g!==null),Yi(e,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),Yi(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),Yi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function zV(t){return t=t-0,t===t}function BT(t){return zV(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var BV=["style"];function HV(t){return t.charAt(0).toUpperCase()+t.slice(1)}function WV(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=BT(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[HV(i)]=s:e[i]=s,e},{})}function HT(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return HT(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=WV(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[BT(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=MV(n,BV);return i.attrs.style=lr(lr({},i.attrs.style),o),t.apply(void 0,[e.tag,lr(lr({},i.attrs),a)].concat(fp(r)))}var WT=!1;try{WT=!0}catch{}function GV(){if(!WT&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function p0(t){if(t&&sc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(hp.icon)return hp.icon(t);if(t===null)return null;if(t&&sc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function mh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Yi({},t,e):{}}var et=Tp.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=p0(n),c=mh("classes",[].concat(fp(UV(t)),fp(s.split(" ")))),d=mh("transform",typeof t.transform=="string"?hp.transform(t.transform):t.transform),f=mh("mask",p0(r)),p=xV(u,lr(lr(lr(lr({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return GV("Could not find icon",u),null;var v=p.abstract,_={ref:e};return Object.keys(t).forEach(function(w){et.defaultProps.hasOwnProperty(w)||(_[w]=t[w])}),qV(v[0],_)});et.displayName="FontAwesomeIcon";et.propTypes={beat:K.bool,border:K.bool,beatFade:K.bool,bounce:K.bool,className:K.string,fade:K.bool,flash:K.bool,mask:K.oneOfType([K.object,K.array,K.string]),maskId:K.string,fixedWidth:K.bool,inverse:K.bool,flip:K.oneOf([!0,!1,"horizontal","vertical","both"]),icon:K.oneOfType([K.object,K.array,K.string]),listItem:K.bool,pull:K.oneOf(["right","left"]),pulse:K.bool,rotation:K.oneOf([0,90,180,270]),shake:K.bool,size:K.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:K.bool,spinPulse:K.bool,spinReverse:K.bool,symbol:K.oneOfType([K.bool,K.string]),title:K.string,titleId:K.string,transform:K.oneOfType([K.string,K.object]),swapOpacity:K.bool};et.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var qV=HT.bind(null,Tp.createElement),KV={prefix:"fab",iconName:"x-twitter",icon:[512,512,[],"e61b","M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"]},QV={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},YV={prefix:"fab",iconName:"square-whatsapp",icon:[448,512,["whatsapp-square"],"f40c","M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"]};function XV({article:t,onClose:e}){const n=()=>{window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,"_blank")},r=()=>{window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(t.heading)}`,"_blank")},i=()=>{window.open(`https://web.whatsapp.com://send?text=${t.heading}`,"_blank")};return h.jsxs("div",{className:"article-overlay",children:[h.jsxs("div",{className:"article-modal",children:[h.jsx("button",{className:"Back-btn",onClick:e,children:"Back"}),h.jsx("h2",{children:t.heading}),h.jsx("img",{src:t.image,alt:t.heading}),h.jsx("p",{className:"description",children:t.description}),h.jsxs("div",{className:"share-buttons",children:[h.jsx("h2",{children:"Share to social media"}),h.jsxs("div",{className:"socialMediaIcons",children:[h.jsx(et,{icon:QV,onClick:n}),h.jsx(et,{icon:KV,onClick:r}),h.jsx(et,{icon:YV,onClick:i})]})]})]}),h.jsx("meta",{property:"og:url",content:window.location.href}),h.jsx("meta",{property:"og:title",content:t.heading}),h.jsx("meta",{property:"og:description",content:t.description}),h.jsx("meta",{property:"og:image",content:t.image})]})}function JV(){const{newsData:t,loading:e}=$r(),[n,r]=I.useState(null);if(e)return h.jsx(wt,{children:h.jsx("div",{className:"HomePage-parent",children:h.jsx(Hn,{})})});const i=s=>{r(t[s])};return h.jsx(wt,{children:h.jsx("div",{className:"HomePage-parent",children:n?h.jsx(XV,{article:n,onClose:()=>r(null)}):h.jsx("div",{className:"parent-hero",children:t.slice(0,4).map((s,o)=>h.jsx("div",{className:"hero",style:{background:`url(${s.image})`},onClick:()=>i(o),children:h.jsxs("div",{className:"hero-content",children:[h.jsx("h4",{children:s.heading}),h.jsx("h4",{children:s.content})]})},o))})})})}function ZV(){const{newsData:t,loading:e}=$r(),n=t.filter(r=>r.category==="sport");return e?h.jsx(h.Fragment,{children:h.jsx(wt,{children:h.jsx(Hn,{})})}):h.jsxs(wt,{children:[h.jsx("div",{className:"pageName",children:"Entertainment"}),h.jsx("div",{children:n.map((r,i)=>h.jsxs("div",{children:[h.jsx("h3",{children:r.heading}),h.jsx("p",{children:r.description})]},i))})]})}function eF(){const{newsData:t,loading:e}=$r(),n=t.filter(r=>r.category==="sport");return e?h.jsx(wt,{children:h.jsx(Hn,{})}):h.jsxs(wt,{children:[h.jsx("div",{className:"pageName",children:"Sports"}),h.jsx("div",{children:n.map((r,i)=>h.jsxs("div",{children:[h.jsx("h3",{children:r.heading}),h.jsx("p",{children:r.description})]},i))})]})}const GT=I.createContext(),tF=({children:t})=>{const e=async(r,i,s)=>{try{const o=await l2(U_,r,i);console.log(o.user.uid,"nama"),alert("user logged in"),console.log(U_.currentUser.emailVerified,"op"),s("/dashboard"),nF(o)}catch(o){console.error(o.code,"errorCode"),console.error(o.message,"message")}},n=()=>{localStorage.clear()};return h.jsx(GT.Provider,{value:{login:e,logout:n},children:t})},nF=t=>{localStorage.setItem("user",JSON.stringify(t))},fd=()=>{const t=localStorage.getItem("user");if(t){const e=JSON.parse(t),{displayName:n,email:r,uid:i}=e.user;return{displayName:n,email:r,access:t,uid:i}}return{access:null}},rF=()=>I.useContext(GT);var iF={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},sF={prefix:"fas",iconName:"backward",icon:[512,512,[9194],"f04a","M459.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4L288 214.3V256v41.7L459.5 440.6zM256 352V256 128 96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160C4.2 237.5 0 246.5 0 256s4.2 18.5 11.5 24.6l192 160c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V352z"]},oF={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},aF={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},lF={prefix:"fas",iconName:"sitemap",icon:[576,512,[],"f0e8","M208 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-8v40H464c30.9 0 56 25.1 56 56v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-4.4-3.6-8-8-8H312v40h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H256c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V280H112c-4.4 0-8 3.6-8 8v32h8c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V368c0-26.5 21.5-48 48-48h8V288c0-30.9 25.1-56 56-56H264V192h-8c-26.5 0-48-21.5-48-48V80z"]},uF={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},cF={prefix:"fas",iconName:"newspaper",icon:[512,512,[128240],"f1ea","M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H296c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm208-8c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H384c-8.8 0-16 7.2-16 16zM160 304c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16z"]},dF={prefix:"fas",iconName:"house-user",icon:[576,512,["home-user"],"e1b0","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"]},hF={prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]};function fF(){const t=Ta(),[e,n]=I.useState(!1);function r(){n(!e)}function i(){localStorage.clear(),alert("You are Logged out"),t("/admin")}return h.jsx(h.Fragment,{children:h.jsx("div",{className:"adminSidebar",children:h.jsxs("ul",{children:[h.jsx("li",{children:h.jsxs(ft,{to:"/dashboard",children:[h.jsx(et,{icon:dF}),h.jsx("h4",{children:"Dashboard"})]})}),h.jsx("li",{children:h.jsxs(ft,{to:"/adminNews",children:[h.jsx(et,{icon:cF}),h.jsx("h4",{children:"News"})]})}),h.jsx("li",{children:h.jsxs(ft,{to:"/addNews",children:[h.jsx(et,{icon:uF}),h.jsx("h4",{children:"Add News"})]})}),h.jsxs("li",{onClick:r,children:[h.jsxs("div",{className:"administrator",children:[h.jsx(et,{icon:lF}),h.jsx("h4",{children:"Administrator"})]}),e&&h.jsxs("ul",{className:"nested",children:[h.jsx("li",{children:h.jsx(ft,{to:"/addUser",children:"Add User"})}),h.jsx("li",{children:h.jsx(ft,{to:"/adminHaveNews",children:"Have News"})}),h.jsx("li",{children:h.jsx(ft,{to:"/adminContact",children:"Contacts"})}),h.jsx("li",{children:h.jsx(ft,{to:"/adminSuggestion",children:"Suggestions"})}),h.jsx("li",{children:h.jsx(ft,{to:"/traffic",children:"Traffic"})})]})]}),h.jsx("li",{onClick:i,children:h.jsxs("div",{className:"administrator",children:[h.jsx(et,{icon:iF}),h.jsx("h4",{children:"Logout"})]})})]})})})}function vn({children:t}){return h.jsx("div",{className:"adminLayout",children:h.jsxs("div",{className:"adminBody",children:[h.jsx("div",{className:"verticle",children:h.jsx(fF,{})}),h.jsx("div",{className:"Admin-childrenContet",children:h.jsx("div",{children:t})})]})})}const pF=Lm(ki);function gF(){const{displayName:t}=fd();console.log(t,"name");const e={heading:"",description:"",image:null,category:"",isBreaking:!1,authorName:t},[n,r]=I.useState(e),[i,s]=I.useState(null),o=u=>{const{name:c,value:d}=u.target;r(f=>({...f,[c]:d}))},a=u=>{const c=u.target.files[0];s(c)},l=async()=>{try{const u=Dm(pF,`News/${i.name}`),c=await bm(u,i);console.log("Uploaded a file!");const d=await Om(c.ref);console.log("download url:",d);const f={...n,image:d},p=await Ga(Mn(Ft,"News"),f);r(e),alert("News posted")}catch(u){console.error("Error adding document: ",u)}};return h.jsx(vn,{children:h.jsx(h.Fragment,{children:h.jsxs("div",{className:"addNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:n.heading,onChange:o,cols:"2",rows:"2",required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:n.description,onChange:o,cols:"15",rows:"15",required:!0})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:a})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Category"}),h.jsxs("select",{name:"category",id:"category",value:n.category,onChange:o,required:!0,children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:n.isBreaking,onChange:o,children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Author Name"}),h.jsx("input",{type:"text",readOnly:!0,value:t})]})]}),h.jsx("button",{onClick:l,children:"Post News"})]})})})}const mF=()=>{const{access:t}=fd();return console.log(t,"access"),console.log(t,"aadi"),t?h.jsx("div",{className:"adminDash",children:h.jsx(_k,{})}):h.jsx(yk,{to:"/admin"})},vF=()=>{const t=OE(ki),e=Ta(),n={email:"",password:"",displayName:""},[r,i]=I.useState(n),{email:s,password:o,displayName:a}=r,l=async()=>{try{const c=(await a2(t,s,o)).user;await c2(c,{displayName:a}),alert("User Created "),e("/")}catch(u){console.error("Error signing up:",u.message)}};return h.jsx(vn,{children:h.jsx(h.Fragment,{children:h.jsx("div",{className:"parent-signup",children:h.jsxs("div",{className:"signup",children:[h.jsxs("div",{className:"userDetails",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Name"}),h.jsx("input",{type:"text",placeholder:"Enter Full Name",value:a,onChange:u=>i({...r,displayName:u.target.value})})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Email"}),h.jsx("input",{type:"email",placeholder:"Enter your Email",value:s,onChange:u=>i({...r,email:u.target.value}),required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Password"}),h.jsx("input",{type:"password",id:"password",placeholder:"Create password",value:o,onChange:u=>i({...r,password:u.target.value}),required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Confirm Password"}),h.jsx("input",{type:"password",placeholder:"Re enter Password",id:"confirmPassword"})]})]}),h.jsx("button",{onClick:l,className:"signup-btn",children:"Create User"})]})})})})};function yF(){const t=Ta(),{login:e}=rF(),[n,r]=I.useState(""),[i,s]=I.useState(""),o=()=>{try{e(n,i,t)}catch{}};return h.jsx(h.Fragment,{children:h.jsxs("div",{className:"loginPage",children:[h.jsx("input",{type:"email",placeholder:"Enter Email",value:n,onChange:a=>r(a.target.value)}),h.jsx("input",{type:"password",value:i,onChange:a=>s(a.target.value)}),h.jsx("button",{onClick:o,children:"Login"})]})})}function _F(){const{displayName:t,email:e,uid:n}=fd();return h.jsx(vn,{children:h.jsx(h.Fragment,{children:h.jsxs("div",{className:"parentDashboard",children:[h.jsx("h1",{children:t}),h.jsx("p",{children:e}),h.jsx("p",{children:n})]})})})}const wF=Lm(ki);function EF(){const t={heading:"",description:"",image:null,category:"",isBreaking:!1,authorName:""},[e,n]=I.useState(t),[r,i]=I.useState(null),s=l=>{const{name:u,value:c}=l.target;n(d=>({...d,[u]:c}))},o=l=>{const u=l.target.files[0];i(u)},a=async()=>{try{const l=Dm(wF,`Alert/${r.name}`),u=await bm(l,r);console.log("Uploaded a file!");const c=await Om(u.ref);console.log("download url:",c);const d={...e,image:c},f=await Ga(Mn(Ft,"Alert"),d);n(t),alert("News posted")}catch(l){console.error("Error adding document: ",l)}};return h.jsx(wt,{children:h.jsx(h.Fragment,{children:h.jsxs("div",{className:"haveNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Suitable Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:e.heading,onChange:s,cols:"4",rows:"4"})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:e.description,onChange:s,cols:"15",rows:"15"})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:o})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Related Category"}),h.jsxs("select",{name:"category",id:"category",value:e.category,onChange:s,children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:e.isBreaking,onChange:s,children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Your Name"}),h.jsx("input",{type:"text",id:"authorName",name:"authorName",value:e.authorName,onChange:s})]})]}),h.jsx("button",{onClick:a,children:"Send News"})]})})})}function SF(){return h.jsx(wt,{children:h.jsx(h.Fragment,{children:h.jsx("h1",{children:"Page Not Found"})})})}function IF(){return h.jsx(vn,{children:h.jsx("div",{children:h.jsx("h2",{children:"User Traffic under Construction"})})})}/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function ur(t,e){return typeof t=="function"?t(e):t}function kt(t,e){return n=>{e.setState(r=>({...r,[t]:ur(n,r[t])}))}}function oc(t){return t instanceof Function}function TF(t){return Array.isArray(t)&&t.every(e=>typeof e=="number")}function CF(t,e){const n=[],r=i=>{i.forEach(s=>{n.push(s);const o=e(s);o!=null&&o.length&&r(o)})};return r(t),n}function j(t,e,n){let r=[],i;return()=>{let s;n.key&&n.debug&&(s=Date.now());const o=t();if(!(o.length!==r.length||o.some((u,c)=>r[c]!==u)))return i;r=o;let l;if(n.key&&n.debug&&(l=Date.now()),i=e(...o),n==null||n.onChange==null||n.onChange(i),n.key&&n.debug&&n!=null&&n.debug()){const u=Math.round((Date.now()-s)*100)/100,c=Math.round((Date.now()-l)*100)/100,d=c/16,f=(p,v)=>{for(p=String(p);p.length<v;)p=" "+p;return p};console.info(`%c⏱ ${f(c,5)} /${f(u,5)} ms`,`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*d,120))}deg 100% 31%);`,n==null?void 0:n.key)}return i}}function RF(t,e,n,r){var i,s;const a={...t._getDefaultColumnDef(),...e},l=a.accessorKey;let u=(i=(s=a.id)!=null?s:l?l.replace(".","_"):void 0)!=null?i:typeof a.header=="string"?a.header:void 0,c;if(a.accessorFn?c=a.accessorFn:l&&(l.includes(".")?c=f=>{let p=f;for(const _ of l.split(".")){var v;p=(v=p)==null?void 0:v[_]}return p}:c=f=>f[a.accessorKey]),!u)throw new Error;let d={id:`${String(u)}`,accessorFn:c,parent:r,depth:n,columnDef:a,columns:[],getFlatColumns:j(()=>[!0],()=>{var f;return[d,...(f=d.columns)==null?void 0:f.flatMap(p=>p.getFlatColumns())]},{key:"column.getFlatColumns",debug:()=>{var f;return(f=t.options.debugAll)!=null?f:t.options.debugColumns}}),getLeafColumns:j(()=>[t._getOrderColumnsFn()],f=>{var p;if((p=d.columns)!=null&&p.length){let v=d.columns.flatMap(_=>_.getLeafColumns());return f(v)}return[d]},{key:"column.getLeafColumns",debug:()=>{var f;return(f=t.options.debugAll)!=null?f:t.options.debugColumns}})};for(const f of t._features)f.createColumn==null||f.createColumn(d,t);return d}function g0(t,e,n){var r;let s={id:(r=n.id)!=null?r:e.id,column:e,index:n.index,isPlaceholder:!!n.isPlaceholder,placeholderId:n.placeholderId,depth:n.depth,subHeaders:[],colSpan:0,rowSpan:0,headerGroup:null,getLeafHeaders:()=>{const o=[],a=l=>{l.subHeaders&&l.subHeaders.length&&l.subHeaders.map(a),o.push(l)};return a(s),o},getContext:()=>({table:t,header:s,column:e})};return t._features.forEach(o=>{o.createHeader==null||o.createHeader(s,t)}),s}const AF={createTable:t=>{t.getHeaderGroups=j(()=>[t.getAllColumns(),t.getVisibleLeafColumns(),t.getState().columnPinning.left,t.getState().columnPinning.right],(e,n,r,i)=>{var s,o;const a=(s=r==null?void 0:r.map(d=>n.find(f=>f.id===d)).filter(Boolean))!=null?s:[],l=(o=i==null?void 0:i.map(d=>n.find(f=>f.id===d)).filter(Boolean))!=null?o:[],u=n.filter(d=>!(r!=null&&r.includes(d.id))&&!(i!=null&&i.includes(d.id)));return Ml(e,[...a,...u,...l],t)},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getCenterHeaderGroups=j(()=>[t.getAllColumns(),t.getVisibleLeafColumns(),t.getState().columnPinning.left,t.getState().columnPinning.right],(e,n,r,i)=>(n=n.filter(s=>!(r!=null&&r.includes(s.id))&&!(i!=null&&i.includes(s.id))),Ml(e,n,t,"center")),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getLeftHeaderGroups=j(()=>[t.getAllColumns(),t.getVisibleLeafColumns(),t.getState().columnPinning.left],(e,n,r)=>{var i;const s=(i=r==null?void 0:r.map(o=>n.find(a=>a.id===o)).filter(Boolean))!=null?i:[];return Ml(e,s,t,"left")},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getRightHeaderGroups=j(()=>[t.getAllColumns(),t.getVisibleLeafColumns(),t.getState().columnPinning.right],(e,n,r)=>{var i;const s=(i=r==null?void 0:r.map(o=>n.find(a=>a.id===o)).filter(Boolean))!=null?i:[];return Ml(e,s,t,"right")},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getFooterGroups=j(()=>[t.getHeaderGroups()],e=>[...e].reverse(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getLeftFooterGroups=j(()=>[t.getLeftHeaderGroups()],e=>[...e].reverse(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getCenterFooterGroups=j(()=>[t.getCenterHeaderGroups()],e=>[...e].reverse(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getRightFooterGroups=j(()=>[t.getRightHeaderGroups()],e=>[...e].reverse(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getFlatHeaders=j(()=>[t.getHeaderGroups()],e=>e.map(n=>n.headers).flat(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getLeftFlatHeaders=j(()=>[t.getLeftHeaderGroups()],e=>e.map(n=>n.headers).flat(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getCenterFlatHeaders=j(()=>[t.getCenterHeaderGroups()],e=>e.map(n=>n.headers).flat(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getRightFlatHeaders=j(()=>[t.getRightHeaderGroups()],e=>e.map(n=>n.headers).flat(),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getCenterLeafHeaders=j(()=>[t.getCenterFlatHeaders()],e=>e.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getLeftLeafHeaders=j(()=>[t.getLeftFlatHeaders()],e=>e.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getRightLeafHeaders=j(()=>[t.getRightFlatHeaders()],e=>e.filter(n=>{var r;return!((r=n.subHeaders)!=null&&r.length)}),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}}),t.getLeafHeaders=j(()=>[t.getLeftHeaderGroups(),t.getCenterHeaderGroups(),t.getRightHeaderGroups()],(e,n,r)=>{var i,s,o,a,l,u;return[...(i=(s=e[0])==null?void 0:s.headers)!=null?i:[],...(o=(a=n[0])==null?void 0:a.headers)!=null?o:[],...(l=(u=r[0])==null?void 0:u.headers)!=null?l:[]].map(c=>c.getLeafHeaders()).flat()},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugHeaders}})}};function Ml(t,e,n,r){var i,s;let o=0;const a=function(f,p){p===void 0&&(p=1),o=Math.max(o,p),f.filter(v=>v.getIsVisible()).forEach(v=>{var _;(_=v.columns)!=null&&_.length&&a(v.columns,p+1)},0)};a(t);let l=[];const u=(f,p)=>{const v={depth:p,id:[r,`${p}`].filter(Boolean).join("_"),headers:[]},_=[];f.forEach(w=>{const g=[..._].reverse()[0],m=w.column.depth===v.depth;let y,E=!1;if(m&&w.column.parent?y=w.column.parent:(y=w.column,E=!0),g&&(g==null?void 0:g.column)===y)g.subHeaders.push(w);else{const S=g0(n,y,{id:[r,p,y.id,w==null?void 0:w.id].filter(Boolean).join("_"),isPlaceholder:E,placeholderId:E?`${_.filter(A=>A.column===y).length}`:void 0,depth:p,index:_.length});S.subHeaders.push(w),_.push(S)}v.headers.push(w),w.headerGroup=v}),l.push(v),p>0&&u(_,p-1)},c=e.map((f,p)=>g0(n,f,{depth:o,index:p}));u(c,o-1),l.reverse();const d=f=>f.filter(v=>v.column.getIsVisible()).map(v=>{let _=0,w=0,g=[0];v.subHeaders&&v.subHeaders.length?(g=[],d(v.subHeaders).forEach(y=>{let{colSpan:E,rowSpan:S}=y;_+=E,g.push(S)})):_=1;const m=Math.min(...g);return w=w+m,v.colSpan=_,v.rowSpan=w,{colSpan:_,rowSpan:w}});return d((i=(s=l[0])==null?void 0:s.headers)!=null?i:[]),l}const Vl={size:150,minSize:20,maxSize:Number.MAX_SAFE_INTEGER},vh=()=>({startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,isResizingColumn:!1,columnSizingStart:[]}),kF={getDefaultColumnDef:()=>Vl,getInitialState:t=>({columnSizing:{},columnSizingInfo:vh(),...t}),getDefaultOptions:t=>({columnResizeMode:"onEnd",columnResizeDirection:"ltr",onColumnSizingChange:kt("columnSizing",t),onColumnSizingInfoChange:kt("columnSizingInfo",t)}),createColumn:(t,e)=>{t.getSize=()=>{var n,r,i;const s=e.getState().columnSizing[t.id];return Math.min(Math.max((n=t.columnDef.minSize)!=null?n:Vl.minSize,(r=s??t.columnDef.size)!=null?r:Vl.size),(i=t.columnDef.maxSize)!=null?i:Vl.maxSize)},t.getStart=n=>{const r=n?n==="left"?e.getLeftVisibleLeafColumns():e.getRightVisibleLeafColumns():e.getVisibleLeafColumns(),i=r.findIndex(s=>s.id===t.id);if(i>0){const s=r[i-1];return s.getStart(n)+s.getSize()}return 0},t.resetSize=()=>{e.setColumnSizing(n=>{let{[t.id]:r,...i}=n;return i})},t.getCanResize=()=>{var n,r;return((n=t.columnDef.enableResizing)!=null?n:!0)&&((r=e.options.enableColumnResizing)!=null?r:!0)},t.getIsResizing=()=>e.getState().columnSizingInfo.isResizingColumn===t.id},createHeader:(t,e)=>{t.getSize=()=>{let n=0;const r=i=>{if(i.subHeaders.length)i.subHeaders.forEach(r);else{var s;n+=(s=i.column.getSize())!=null?s:0}};return r(t),n},t.getStart=()=>{if(t.index>0){const n=t.headerGroup.headers[t.index-1];return n.getStart()+n.getSize()}return 0},t.getResizeHandler=n=>{const r=e.getColumn(t.column.id),i=r==null?void 0:r.getCanResize();return s=>{if(!r||!i||(s.persist==null||s.persist(),yh(s)&&s.touches&&s.touches.length>1))return;const o=t.getSize(),a=t?t.getLeafHeaders().map(g=>[g.column.id,g.column.getSize()]):[[r.id,r.getSize()]],l=yh(s)?Math.round(s.touches[0].clientX):s.clientX,u={},c=(g,m)=>{typeof m=="number"&&(e.setColumnSizingInfo(y=>{var E,S;const A=e.options.columnResizeDirection==="rtl"?-1:1,k=(m-((E=y==null?void 0:y.startOffset)!=null?E:0))*A,P=Math.max(k/((S=y==null?void 0:y.startSize)!=null?S:0),-.999999);return y.columnSizingStart.forEach(H=>{let[F,ht]=H;u[F]=Math.round(Math.max(ht+ht*P,0)*100)/100}),{...y,deltaOffset:k,deltaPercentage:P}}),(e.options.columnResizeMode==="onChange"||g==="end")&&e.setColumnSizing(y=>({...y,...u})))},d=g=>c("move",g),f=g=>{c("end",g),e.setColumnSizingInfo(m=>({...m,isResizingColumn:!1,startOffset:null,startSize:null,deltaOffset:null,deltaPercentage:null,columnSizingStart:[]}))},p=n||typeof document<"u"?document:null,v={moveHandler:g=>d(g.clientX),upHandler:g=>{p==null||p.removeEventListener("mousemove",v.moveHandler),p==null||p.removeEventListener("mouseup",v.upHandler),f(g.clientX)}},_={moveHandler:g=>(g.cancelable&&(g.preventDefault(),g.stopPropagation()),d(g.touches[0].clientX),!1),upHandler:g=>{var m;p==null||p.removeEventListener("touchmove",_.moveHandler),p==null||p.removeEventListener("touchend",_.upHandler),g.cancelable&&(g.preventDefault(),g.stopPropagation()),f((m=g.touches[0])==null?void 0:m.clientX)}},w=xF()?{passive:!1}:!1;yh(s)?(p==null||p.addEventListener("touchmove",_.moveHandler,w),p==null||p.addEventListener("touchend",_.upHandler,w)):(p==null||p.addEventListener("mousemove",v.moveHandler,w),p==null||p.addEventListener("mouseup",v.upHandler,w)),e.setColumnSizingInfo(g=>({...g,startOffset:l,startSize:o,deltaOffset:0,deltaPercentage:0,columnSizingStart:a,isResizingColumn:r.id}))}}},createTable:t=>{t.setColumnSizing=e=>t.options.onColumnSizingChange==null?void 0:t.options.onColumnSizingChange(e),t.setColumnSizingInfo=e=>t.options.onColumnSizingInfoChange==null?void 0:t.options.onColumnSizingInfoChange(e),t.resetColumnSizing=e=>{var n;t.setColumnSizing(e?{}:(n=t.initialState.columnSizing)!=null?n:{})},t.resetHeaderSizeInfo=e=>{var n;t.setColumnSizingInfo(e?vh():(n=t.initialState.columnSizingInfo)!=null?n:vh())},t.getTotalSize=()=>{var e,n;return(e=(n=t.getHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?e:0},t.getLeftTotalSize=()=>{var e,n;return(e=(n=t.getLeftHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?e:0},t.getCenterTotalSize=()=>{var e,n;return(e=(n=t.getCenterHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?e:0},t.getRightTotalSize=()=>{var e,n;return(e=(n=t.getRightHeaderGroups()[0])==null?void 0:n.headers.reduce((r,i)=>r+i.getSize(),0))!=null?e:0}}};let Fl=null;function xF(){if(typeof Fl=="boolean")return Fl;let t=!1;try{const e={get passive(){return t=!0,!1}},n=()=>{};window.addEventListener("test",n,e),window.removeEventListener("test",n)}catch{t=!1}return Fl=t,Fl}function yh(t){return t.type==="touchstart"}const PF={getInitialState:t=>({expanded:{},...t}),getDefaultOptions:t=>({onExpandedChange:kt("expanded",t),paginateExpandedRows:!0}),createTable:t=>{let e=!1,n=!1;t._autoResetExpanded=()=>{var r,i;if(!e){t._queue(()=>{e=!0});return}if((r=(i=t.options.autoResetAll)!=null?i:t.options.autoResetExpanded)!=null?r:!t.options.manualExpanding){if(n)return;n=!0,t._queue(()=>{t.resetExpanded(),n=!1})}},t.setExpanded=r=>t.options.onExpandedChange==null?void 0:t.options.onExpandedChange(r),t.toggleAllRowsExpanded=r=>{r??!t.getIsAllRowsExpanded()?t.setExpanded(!0):t.setExpanded({})},t.resetExpanded=r=>{var i,s;t.setExpanded(r?{}:(i=(s=t.initialState)==null?void 0:s.expanded)!=null?i:{})},t.getCanSomeRowsExpand=()=>t.getPrePaginationRowModel().flatRows.some(r=>r.getCanExpand()),t.getToggleAllRowsExpandedHandler=()=>r=>{r.persist==null||r.persist(),t.toggleAllRowsExpanded()},t.getIsSomeRowsExpanded=()=>{const r=t.getState().expanded;return r===!0||Object.values(r).some(Boolean)},t.getIsAllRowsExpanded=()=>{const r=t.getState().expanded;return typeof r=="boolean"?r===!0:!(!Object.keys(r).length||t.getRowModel().flatRows.some(i=>!i.getIsExpanded()))},t.getExpandedDepth=()=>{let r=0;return(t.getState().expanded===!0?Object.keys(t.getRowModel().rowsById):Object.keys(t.getState().expanded)).forEach(s=>{const o=s.split(".");r=Math.max(r,o.length)}),r},t.getPreExpandedRowModel=()=>t.getSortedRowModel(),t.getExpandedRowModel=()=>(!t._getExpandedRowModel&&t.options.getExpandedRowModel&&(t._getExpandedRowModel=t.options.getExpandedRowModel(t)),t.options.manualExpanding||!t._getExpandedRowModel?t.getPreExpandedRowModel():t._getExpandedRowModel())},createRow:(t,e)=>{t.toggleExpanded=n=>{e.setExpanded(r=>{var i;const s=r===!0?!0:!!(r!=null&&r[t.id]);let o={};if(r===!0?Object.keys(e.getRowModel().rowsById).forEach(a=>{o[a]=!0}):o=r,n=(i=n)!=null?i:!s,!s&&n)return{...o,[t.id]:!0};if(s&&!n){const{[t.id]:a,...l}=o;return l}return r})},t.getIsExpanded=()=>{var n;const r=e.getState().expanded;return!!((n=e.options.getIsRowExpanded==null?void 0:e.options.getIsRowExpanded(t))!=null?n:r===!0||r!=null&&r[t.id])},t.getCanExpand=()=>{var n,r,i;return(n=e.options.getRowCanExpand==null?void 0:e.options.getRowCanExpand(t))!=null?n:((r=e.options.enableExpanding)!=null?r:!0)&&!!((i=t.subRows)!=null&&i.length)},t.getIsAllParentsExpanded=()=>{let n=!0,r=t;for(;n&&r.parentId;)r=e.getRow(r.parentId,!0),n=r.getIsExpanded();return n},t.getToggleExpandedHandler=()=>{const n=t.getCanExpand();return()=>{n&&t.toggleExpanded()}}}},qT=(t,e,n)=>{var r;const i=n.toLowerCase();return!!(!((r=t.getValue(e))==null||(r=r.toString())==null||(r=r.toLowerCase())==null)&&r.includes(i))};qT.autoRemove=t=>Qt(t);const KT=(t,e,n)=>{var r;return!!(!((r=t.getValue(e))==null||(r=r.toString())==null)&&r.includes(n))};KT.autoRemove=t=>Qt(t);const QT=(t,e,n)=>{var r;return((r=t.getValue(e))==null||(r=r.toString())==null?void 0:r.toLowerCase())===(n==null?void 0:n.toLowerCase())};QT.autoRemove=t=>Qt(t);const YT=(t,e,n)=>{var r;return(r=t.getValue(e))==null?void 0:r.includes(n)};YT.autoRemove=t=>Qt(t)||!(t!=null&&t.length);const XT=(t,e,n)=>!n.some(r=>{var i;return!((i=t.getValue(e))!=null&&i.includes(r))});XT.autoRemove=t=>Qt(t)||!(t!=null&&t.length);const JT=(t,e,n)=>n.some(r=>{var i;return(i=t.getValue(e))==null?void 0:i.includes(r)});JT.autoRemove=t=>Qt(t)||!(t!=null&&t.length);const ZT=(t,e,n)=>t.getValue(e)===n;ZT.autoRemove=t=>Qt(t);const eC=(t,e,n)=>t.getValue(e)==n;eC.autoRemove=t=>Qt(t);const Qm=(t,e,n)=>{let[r,i]=n;const s=t.getValue(e);return s>=r&&s<=i};Qm.resolveFilterValue=t=>{let[e,n]=t,r=typeof e!="number"?parseFloat(e):e,i=typeof n!="number"?parseFloat(n):n,s=e===null||Number.isNaN(r)?-1/0:r,o=n===null||Number.isNaN(i)?1/0:i;if(s>o){const a=s;s=o,o=a}return[s,o]};Qm.autoRemove=t=>Qt(t)||Qt(t[0])&&Qt(t[1]);const _n={includesString:qT,includesStringSensitive:KT,equalsString:QT,arrIncludes:YT,arrIncludesAll:XT,arrIncludesSome:JT,equals:ZT,weakEquals:eC,inNumberRange:Qm};function Qt(t){return t==null||t===""}const NF={getDefaultColumnDef:()=>({filterFn:"auto"}),getInitialState:t=>({columnFilters:[],globalFilter:void 0,...t}),getDefaultOptions:t=>({onColumnFiltersChange:kt("columnFilters",t),onGlobalFilterChange:kt("globalFilter",t),filterFromLeafRows:!1,maxLeafRowFilterDepth:100,globalFilterFn:"auto",getColumnCanGlobalFilter:e=>{var n;const r=(n=t.getCoreRowModel().flatRows[0])==null||(n=n._getAllCellsByColumnId()[e.id])==null?void 0:n.getValue();return typeof r=="string"||typeof r=="number"}}),createColumn:(t,e)=>{t.getAutoFilterFn=()=>{const n=e.getCoreRowModel().flatRows[0],r=n==null?void 0:n.getValue(t.id);return typeof r=="string"?_n.includesString:typeof r=="number"?_n.inNumberRange:typeof r=="boolean"||r!==null&&typeof r=="object"?_n.equals:Array.isArray(r)?_n.arrIncludes:_n.weakEquals},t.getFilterFn=()=>{var n,r;return oc(t.columnDef.filterFn)?t.columnDef.filterFn:t.columnDef.filterFn==="auto"?t.getAutoFilterFn():(n=(r=e.options.filterFns)==null?void 0:r[t.columnDef.filterFn])!=null?n:_n[t.columnDef.filterFn]},t.getCanFilter=()=>{var n,r,i;return((n=t.columnDef.enableColumnFilter)!=null?n:!0)&&((r=e.options.enableColumnFilters)!=null?r:!0)&&((i=e.options.enableFilters)!=null?i:!0)&&!!t.accessorFn},t.getCanGlobalFilter=()=>{var n,r,i,s;return((n=t.columnDef.enableGlobalFilter)!=null?n:!0)&&((r=e.options.enableGlobalFilter)!=null?r:!0)&&((i=e.options.enableFilters)!=null?i:!0)&&((s=e.options.getColumnCanGlobalFilter==null?void 0:e.options.getColumnCanGlobalFilter(t))!=null?s:!0)&&!!t.accessorFn},t.getIsFiltered=()=>t.getFilterIndex()>-1,t.getFilterValue=()=>{var n;return(n=e.getState().columnFilters)==null||(n=n.find(r=>r.id===t.id))==null?void 0:n.value},t.getFilterIndex=()=>{var n,r;return(n=(r=e.getState().columnFilters)==null?void 0:r.findIndex(i=>i.id===t.id))!=null?n:-1},t.setFilterValue=n=>{e.setColumnFilters(r=>{const i=t.getFilterFn(),s=r==null?void 0:r.find(c=>c.id===t.id),o=ur(n,s?s.value:void 0);if(m0(i,o,t)){var a;return(a=r==null?void 0:r.filter(c=>c.id!==t.id))!=null?a:[]}const l={id:t.id,value:o};if(s){var u;return(u=r==null?void 0:r.map(c=>c.id===t.id?l:c))!=null?u:[]}return r!=null&&r.length?[...r,l]:[l]})},t._getFacetedRowModel=e.options.getFacetedRowModel&&e.options.getFacetedRowModel(e,t.id),t.getFacetedRowModel=()=>t._getFacetedRowModel?t._getFacetedRowModel():e.getPreFilteredRowModel(),t._getFacetedUniqueValues=e.options.getFacetedUniqueValues&&e.options.getFacetedUniqueValues(e,t.id),t.getFacetedUniqueValues=()=>t._getFacetedUniqueValues?t._getFacetedUniqueValues():new Map,t._getFacetedMinMaxValues=e.options.getFacetedMinMaxValues&&e.options.getFacetedMinMaxValues(e,t.id),t.getFacetedMinMaxValues=()=>{if(t._getFacetedMinMaxValues)return t._getFacetedMinMaxValues()}},createRow:(t,e)=>{t.columnFilters={},t.columnFiltersMeta={}},createTable:t=>{t.getGlobalAutoFilterFn=()=>_n.includesString,t.getGlobalFilterFn=()=>{var e,n;const{globalFilterFn:r}=t.options;return oc(r)?r:r==="auto"?t.getGlobalAutoFilterFn():(e=(n=t.options.filterFns)==null?void 0:n[r])!=null?e:_n[r]},t.setColumnFilters=e=>{const n=t.getAllLeafColumns(),r=i=>{var s;return(s=ur(e,i))==null?void 0:s.filter(o=>{const a=n.find(l=>l.id===o.id);if(a){const l=a.getFilterFn();if(m0(l,o.value,a))return!1}return!0})};t.options.onColumnFiltersChange==null||t.options.onColumnFiltersChange(r)},t.setGlobalFilter=e=>{t.options.onGlobalFilterChange==null||t.options.onGlobalFilterChange(e)},t.resetGlobalFilter=e=>{t.setGlobalFilter(e?void 0:t.initialState.globalFilter)},t.resetColumnFilters=e=>{var n,r;t.setColumnFilters(e?[]:(n=(r=t.initialState)==null?void 0:r.columnFilters)!=null?n:[])},t.getPreFilteredRowModel=()=>t.getCoreRowModel(),t.getFilteredRowModel=()=>(!t._getFilteredRowModel&&t.options.getFilteredRowModel&&(t._getFilteredRowModel=t.options.getFilteredRowModel(t)),t.options.manualFiltering||!t._getFilteredRowModel?t.getPreFilteredRowModel():t._getFilteredRowModel()),t._getGlobalFacetedRowModel=t.options.getFacetedRowModel&&t.options.getFacetedRowModel(t,"__global__"),t.getGlobalFacetedRowModel=()=>t.options.manualFiltering||!t._getGlobalFacetedRowModel?t.getPreFilteredRowModel():t._getGlobalFacetedRowModel(),t._getGlobalFacetedUniqueValues=t.options.getFacetedUniqueValues&&t.options.getFacetedUniqueValues(t,"__global__"),t.getGlobalFacetedUniqueValues=()=>t._getGlobalFacetedUniqueValues?t._getGlobalFacetedUniqueValues():new Map,t._getGlobalFacetedMinMaxValues=t.options.getFacetedMinMaxValues&&t.options.getFacetedMinMaxValues(t,"__global__"),t.getGlobalFacetedMinMaxValues=()=>{if(t._getGlobalFacetedMinMaxValues)return t._getGlobalFacetedMinMaxValues()}}};function m0(t,e,n){return(t&&t.autoRemove?t.autoRemove(e,n):!1)||typeof e>"u"||typeof e=="string"&&!e}const bF=(t,e,n)=>n.reduce((r,i)=>{const s=i.getValue(t);return r+(typeof s=="number"?s:0)},0),OF=(t,e,n)=>{let r;return n.forEach(i=>{const s=i.getValue(t);s!=null&&(r>s||r===void 0&&s>=s)&&(r=s)}),r},DF=(t,e,n)=>{let r;return n.forEach(i=>{const s=i.getValue(t);s!=null&&(r<s||r===void 0&&s>=s)&&(r=s)}),r},LF=(t,e,n)=>{let r,i;return n.forEach(s=>{const o=s.getValue(t);o!=null&&(r===void 0?o>=o&&(r=i=o):(r>o&&(r=o),i<o&&(i=o)))}),[r,i]},MF=(t,e)=>{let n=0,r=0;if(e.forEach(i=>{let s=i.getValue(t);s!=null&&(s=+s)>=s&&(++n,r+=s)}),n)return r/n},VF=(t,e)=>{if(!e.length)return;const n=e.map(s=>s.getValue(t));if(!TF(n))return;if(n.length===1)return n[0];const r=Math.floor(n.length/2),i=n.sort((s,o)=>s-o);return n.length%2!==0?i[r]:(i[r-1]+i[r])/2},FF=(t,e)=>Array.from(new Set(e.map(n=>n.getValue(t))).values()),jF=(t,e)=>new Set(e.map(n=>n.getValue(t))).size,$F=(t,e)=>e.length,_h={sum:bF,min:OF,max:DF,extent:LF,mean:MF,median:VF,unique:FF,uniqueCount:jF,count:$F},UF={getDefaultColumnDef:()=>({aggregatedCell:t=>{var e,n;return(e=(n=t.getValue())==null||n.toString==null?void 0:n.toString())!=null?e:null},aggregationFn:"auto"}),getInitialState:t=>({grouping:[],...t}),getDefaultOptions:t=>({onGroupingChange:kt("grouping",t),groupedColumnMode:"reorder"}),createColumn:(t,e)=>{t.toggleGrouping=()=>{e.setGrouping(n=>n!=null&&n.includes(t.id)?n.filter(r=>r!==t.id):[...n??[],t.id])},t.getCanGroup=()=>{var n,r,i,s;return(n=(r=(i=(s=t.columnDef.enableGrouping)!=null?s:!0)!=null?i:e.options.enableGrouping)!=null?r:!0)!=null?n:!!t.accessorFn},t.getIsGrouped=()=>{var n;return(n=e.getState().grouping)==null?void 0:n.includes(t.id)},t.getGroupedIndex=()=>{var n;return(n=e.getState().grouping)==null?void 0:n.indexOf(t.id)},t.getToggleGroupingHandler=()=>{const n=t.getCanGroup();return()=>{n&&t.toggleGrouping()}},t.getAutoAggregationFn=()=>{const n=e.getCoreRowModel().flatRows[0],r=n==null?void 0:n.getValue(t.id);if(typeof r=="number")return _h.sum;if(Object.prototype.toString.call(r)==="[object Date]")return _h.extent},t.getAggregationFn=()=>{var n,r;if(!t)throw new Error;return oc(t.columnDef.aggregationFn)?t.columnDef.aggregationFn:t.columnDef.aggregationFn==="auto"?t.getAutoAggregationFn():(n=(r=e.options.aggregationFns)==null?void 0:r[t.columnDef.aggregationFn])!=null?n:_h[t.columnDef.aggregationFn]}},createTable:t=>{t.setGrouping=e=>t.options.onGroupingChange==null?void 0:t.options.onGroupingChange(e),t.resetGrouping=e=>{var n,r;t.setGrouping(e?[]:(n=(r=t.initialState)==null?void 0:r.grouping)!=null?n:[])},t.getPreGroupedRowModel=()=>t.getFilteredRowModel(),t.getGroupedRowModel=()=>(!t._getGroupedRowModel&&t.options.getGroupedRowModel&&(t._getGroupedRowModel=t.options.getGroupedRowModel(t)),t.options.manualGrouping||!t._getGroupedRowModel?t.getPreGroupedRowModel():t._getGroupedRowModel())},createRow:(t,e)=>{t.getIsGrouped=()=>!!t.groupingColumnId,t.getGroupingValue=n=>{if(t._groupingValuesCache.hasOwnProperty(n))return t._groupingValuesCache[n];const r=e.getColumn(n);return r!=null&&r.columnDef.getGroupingValue?(t._groupingValuesCache[n]=r.columnDef.getGroupingValue(t.original),t._groupingValuesCache[n]):t.getValue(n)},t._groupingValuesCache={}},createCell:(t,e,n,r)=>{t.getIsGrouped=()=>e.getIsGrouped()&&e.id===n.groupingColumnId,t.getIsPlaceholder=()=>!t.getIsGrouped()&&e.getIsGrouped(),t.getIsAggregated=()=>{var i;return!t.getIsGrouped()&&!t.getIsPlaceholder()&&!!((i=n.subRows)!=null&&i.length)}}};function zF(t,e,n){if(!(e!=null&&e.length)||!n)return t;const r=t.filter(s=>!e.includes(s.id));return n==="remove"?r:[...e.map(s=>t.find(o=>o.id===s)).filter(Boolean),...r]}const BF={getInitialState:t=>({columnOrder:[],...t}),getDefaultOptions:t=>({onColumnOrderChange:kt("columnOrder",t)}),createTable:t=>{t.setColumnOrder=e=>t.options.onColumnOrderChange==null?void 0:t.options.onColumnOrderChange(e),t.resetColumnOrder=e=>{var n;t.setColumnOrder(e?[]:(n=t.initialState.columnOrder)!=null?n:[])},t._getOrderColumnsFn=j(()=>[t.getState().columnOrder,t.getState().grouping,t.options.groupedColumnMode],(e,n,r)=>i=>{let s=[];if(!(e!=null&&e.length))s=i;else{const o=[...e],a=[...i];for(;a.length&&o.length;){const l=o.shift(),u=a.findIndex(c=>c.id===l);u>-1&&s.push(a.splice(u,1)[0])}s=[...s,...a]}return zF(s,n,r)},{key:!1})}},gp=0,mp=10,wh=()=>({pageIndex:gp,pageSize:mp}),HF={getInitialState:t=>({...t,pagination:{...wh(),...t==null?void 0:t.pagination}}),getDefaultOptions:t=>({onPaginationChange:kt("pagination",t)}),createTable:t=>{let e=!1,n=!1;t._autoResetPageIndex=()=>{var r,i;if(!e){t._queue(()=>{e=!0});return}if((r=(i=t.options.autoResetAll)!=null?i:t.options.autoResetPageIndex)!=null?r:!t.options.manualPagination){if(n)return;n=!0,t._queue(()=>{t.resetPageIndex(),n=!1})}},t.setPagination=r=>{const i=s=>ur(r,s);return t.options.onPaginationChange==null?void 0:t.options.onPaginationChange(i)},t.resetPagination=r=>{var i;t.setPagination(r?wh():(i=t.initialState.pagination)!=null?i:wh())},t.setPageIndex=r=>{t.setPagination(i=>{let s=ur(r,i.pageIndex);const o=typeof t.options.pageCount>"u"||t.options.pageCount===-1?Number.MAX_SAFE_INTEGER:t.options.pageCount-1;return s=Math.max(0,Math.min(s,o)),{...i,pageIndex:s}})},t.resetPageIndex=r=>{var i,s;t.setPageIndex(r?gp:(i=(s=t.initialState)==null||(s=s.pagination)==null?void 0:s.pageIndex)!=null?i:gp)},t.resetPageSize=r=>{var i,s;t.setPageSize(r?mp:(i=(s=t.initialState)==null||(s=s.pagination)==null?void 0:s.pageSize)!=null?i:mp)},t.setPageSize=r=>{t.setPagination(i=>{const s=Math.max(1,ur(r,i.pageSize)),o=i.pageSize*i.pageIndex,a=Math.floor(o/s);return{...i,pageIndex:a,pageSize:s}})},t.setPageCount=r=>t.setPagination(i=>{var s;let o=ur(r,(s=t.options.pageCount)!=null?s:-1);return typeof o=="number"&&(o=Math.max(-1,o)),{...i,pageCount:o}}),t.getPageOptions=j(()=>[t.getPageCount()],r=>{let i=[];return r&&r>0&&(i=[...new Array(r)].fill(null).map((s,o)=>o)),i},{key:!1,debug:()=>{var r;return(r=t.options.debugAll)!=null?r:t.options.debugTable}}),t.getCanPreviousPage=()=>t.getState().pagination.pageIndex>0,t.getCanNextPage=()=>{const{pageIndex:r}=t.getState().pagination,i=t.getPageCount();return i===-1?!0:i===0?!1:r<i-1},t.previousPage=()=>t.setPageIndex(r=>r-1),t.nextPage=()=>t.setPageIndex(r=>r+1),t.getPrePaginationRowModel=()=>t.getExpandedRowModel(),t.getPaginationRowModel=()=>(!t._getPaginationRowModel&&t.options.getPaginationRowModel&&(t._getPaginationRowModel=t.options.getPaginationRowModel(t)),t.options.manualPagination||!t._getPaginationRowModel?t.getPrePaginationRowModel():t._getPaginationRowModel()),t.getPageCount=()=>{var r;return(r=t.options.pageCount)!=null?r:Math.ceil(t.getPrePaginationRowModel().rows.length/t.getState().pagination.pageSize)}}},Eh=()=>({left:[],right:[]}),Sh=()=>({top:[],bottom:[]}),WF={getInitialState:t=>({columnPinning:Eh(),rowPinning:Sh(),...t}),getDefaultOptions:t=>({onColumnPinningChange:kt("columnPinning",t),onRowPinningChange:kt("rowPinning",t)}),createColumn:(t,e)=>{t.pin=n=>{const r=t.getLeafColumns().map(i=>i.id).filter(Boolean);e.setColumnPinning(i=>{var s,o;if(n==="right"){var a,l;return{left:((a=i==null?void 0:i.left)!=null?a:[]).filter(d=>!(r!=null&&r.includes(d))),right:[...((l=i==null?void 0:i.right)!=null?l:[]).filter(d=>!(r!=null&&r.includes(d))),...r]}}if(n==="left"){var u,c;return{left:[...((u=i==null?void 0:i.left)!=null?u:[]).filter(d=>!(r!=null&&r.includes(d))),...r],right:((c=i==null?void 0:i.right)!=null?c:[]).filter(d=>!(r!=null&&r.includes(d)))}}return{left:((s=i==null?void 0:i.left)!=null?s:[]).filter(d=>!(r!=null&&r.includes(d))),right:((o=i==null?void 0:i.right)!=null?o:[]).filter(d=>!(r!=null&&r.includes(d)))}})},t.getCanPin=()=>t.getLeafColumns().some(r=>{var i,s,o;return((i=r.columnDef.enablePinning)!=null?i:!0)&&((s=(o=e.options.enableColumnPinning)!=null?o:e.options.enablePinning)!=null?s:!0)}),t.getIsPinned=()=>{const n=t.getLeafColumns().map(a=>a.id),{left:r,right:i}=e.getState().columnPinning,s=n.some(a=>r==null?void 0:r.includes(a)),o=n.some(a=>i==null?void 0:i.includes(a));return s?"left":o?"right":!1},t.getPinnedIndex=()=>{var n,r;const i=t.getIsPinned();return i?(n=(r=e.getState().columnPinning)==null||(r=r[i])==null?void 0:r.indexOf(t.id))!=null?n:-1:0}},createRow:(t,e)=>{t.pin=(n,r,i)=>{const s=r?t.getLeafRows().map(l=>{let{id:u}=l;return u}):[],o=i?t.getParentRows().map(l=>{let{id:u}=l;return u}):[],a=new Set([...o,t.id,...s]);e.setRowPinning(l=>{var u,c;if(n==="bottom"){var d,f;return{top:((d=l==null?void 0:l.top)!=null?d:[]).filter(_=>!(a!=null&&a.has(_))),bottom:[...((f=l==null?void 0:l.bottom)!=null?f:[]).filter(_=>!(a!=null&&a.has(_))),...Array.from(a)]}}if(n==="top"){var p,v;return{top:[...((p=l==null?void 0:l.top)!=null?p:[]).filter(_=>!(a!=null&&a.has(_))),...Array.from(a)],bottom:((v=l==null?void 0:l.bottom)!=null?v:[]).filter(_=>!(a!=null&&a.has(_)))}}return{top:((u=l==null?void 0:l.top)!=null?u:[]).filter(_=>!(a!=null&&a.has(_))),bottom:((c=l==null?void 0:l.bottom)!=null?c:[]).filter(_=>!(a!=null&&a.has(_)))}})},t.getCanPin=()=>{var n;const{enableRowPinning:r,enablePinning:i}=e.options;return typeof r=="function"?r(t):(n=r??i)!=null?n:!0},t.getIsPinned=()=>{const n=[t.id],{top:r,bottom:i}=e.getState().rowPinning,s=n.some(a=>r==null?void 0:r.includes(a)),o=n.some(a=>i==null?void 0:i.includes(a));return s?"top":o?"bottom":!1},t.getPinnedIndex=()=>{var n,r;const i=t.getIsPinned();if(!i)return-1;const s=(n=e._getPinnedRows(i))==null?void 0:n.map(o=>{let{id:a}=o;return a});return(r=s==null?void 0:s.indexOf(t.id))!=null?r:-1},t.getCenterVisibleCells=j(()=>[t._getAllVisibleCells(),e.getState().columnPinning.left,e.getState().columnPinning.right],(n,r,i)=>{const s=[...r??[],...i??[]];return n.filter(o=>!s.includes(o.column.id))},{key:!1,debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugRows}}),t.getLeftVisibleCells=j(()=>[t._getAllVisibleCells(),e.getState().columnPinning.left,,],(n,r)=>(r??[]).map(s=>n.find(o=>o.column.id===s)).filter(Boolean).map(s=>({...s,position:"left"})),{key:!1,debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugRows}}),t.getRightVisibleCells=j(()=>[t._getAllVisibleCells(),e.getState().columnPinning.right],(n,r)=>(r??[]).map(s=>n.find(o=>o.column.id===s)).filter(Boolean).map(s=>({...s,position:"right"})),{key:!1,debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugRows}})},createTable:t=>{t.setColumnPinning=e=>t.options.onColumnPinningChange==null?void 0:t.options.onColumnPinningChange(e),t.resetColumnPinning=e=>{var n,r;return t.setColumnPinning(e?Eh():(n=(r=t.initialState)==null?void 0:r.columnPinning)!=null?n:Eh())},t.getIsSomeColumnsPinned=e=>{var n;const r=t.getState().columnPinning;if(!e){var i,s;return!!((i=r.left)!=null&&i.length||(s=r.right)!=null&&s.length)}return!!((n=r[e])!=null&&n.length)},t.getLeftLeafColumns=j(()=>[t.getAllLeafColumns(),t.getState().columnPinning.left],(e,n)=>(n??[]).map(r=>e.find(i=>i.id===r)).filter(Boolean),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugColumns}}),t.getRightLeafColumns=j(()=>[t.getAllLeafColumns(),t.getState().columnPinning.right],(e,n)=>(n??[]).map(r=>e.find(i=>i.id===r)).filter(Boolean),{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugColumns}}),t.getCenterLeafColumns=j(()=>[t.getAllLeafColumns(),t.getState().columnPinning.left,t.getState().columnPinning.right],(e,n,r)=>{const i=[...n??[],...r??[]];return e.filter(s=>!i.includes(s.id))},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugColumns}}),t.setRowPinning=e=>t.options.onRowPinningChange==null?void 0:t.options.onRowPinningChange(e),t.resetRowPinning=e=>{var n,r;return t.setRowPinning(e?Sh():(n=(r=t.initialState)==null?void 0:r.rowPinning)!=null?n:Sh())},t.getIsSomeRowsPinned=e=>{var n;const r=t.getState().rowPinning;if(!e){var i,s;return!!((i=r.top)!=null&&i.length||(s=r.bottom)!=null&&s.length)}return!!((n=r[e])!=null&&n.length)},t._getPinnedRows=e=>j(()=>[t.getRowModel().rows,t.getState().rowPinning[e]],(n,r)=>{var i;return((i=t.options.keepPinnedRows)==null||i?(r??[]).map(o=>{const a=t.getRow(o,!0);return a.getIsAllParentsExpanded()?a:null}):(r??[]).map(o=>n.find(a=>a.id===o))).filter(Boolean).map(o=>({...o,position:e}))},{key:!1,debug:()=>{var n;return(n=t.options.debugAll)!=null?n:t.options.debugRows}})(),t.getTopRows=()=>t._getPinnedRows("top"),t.getBottomRows=()=>t._getPinnedRows("bottom"),t.getCenterRows=j(()=>[t.getRowModel().rows,t.getState().rowPinning.top,t.getState().rowPinning.bottom],(e,n,r)=>{const i=new Set([...n??[],...r??[]]);return e.filter(s=>!i.has(s.id))},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugRows}})}},GF={getInitialState:t=>({rowSelection:{},...t}),getDefaultOptions:t=>({onRowSelectionChange:kt("rowSelection",t),enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!0}),createTable:t=>{t.setRowSelection=e=>t.options.onRowSelectionChange==null?void 0:t.options.onRowSelectionChange(e),t.resetRowSelection=e=>{var n;return t.setRowSelection(e?{}:(n=t.initialState.rowSelection)!=null?n:{})},t.toggleAllRowsSelected=e=>{t.setRowSelection(n=>{e=typeof e<"u"?e:!t.getIsAllRowsSelected();const r={...n},i=t.getPreGroupedRowModel().flatRows;return e?i.forEach(s=>{s.getCanSelect()&&(r[s.id]=!0)}):i.forEach(s=>{delete r[s.id]}),r})},t.toggleAllPageRowsSelected=e=>t.setRowSelection(n=>{const r=typeof e<"u"?e:!t.getIsAllPageRowsSelected(),i={...n};return t.getRowModel().rows.forEach(s=>{vp(i,s.id,r,!0,t)}),i}),t.getPreSelectedRowModel=()=>t.getCoreRowModel(),t.getSelectedRowModel=j(()=>[t.getState().rowSelection,t.getCoreRowModel()],(e,n)=>Object.keys(e).length?Ih(t,n):{rows:[],flatRows:[],rowsById:{}},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable}}),t.getFilteredSelectedRowModel=j(()=>[t.getState().rowSelection,t.getFilteredRowModel()],(e,n)=>Object.keys(e).length?Ih(t,n):{rows:[],flatRows:[],rowsById:{}},{key:"getFilteredSelectedRowModel",debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable}}),t.getGroupedSelectedRowModel=j(()=>[t.getState().rowSelection,t.getSortedRowModel()],(e,n)=>Object.keys(e).length?Ih(t,n):{rows:[],flatRows:[],rowsById:{}},{key:"getGroupedSelectedRowModel",debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable}}),t.getIsAllRowsSelected=()=>{const e=t.getFilteredRowModel().flatRows,{rowSelection:n}=t.getState();let r=!!(e.length&&Object.keys(n).length);return r&&e.some(i=>i.getCanSelect()&&!n[i.id])&&(r=!1),r},t.getIsAllPageRowsSelected=()=>{const e=t.getPaginationRowModel().flatRows.filter(i=>i.getCanSelect()),{rowSelection:n}=t.getState();let r=!!e.length;return r&&e.some(i=>!n[i.id])&&(r=!1),r},t.getIsSomeRowsSelected=()=>{var e;const n=Object.keys((e=t.getState().rowSelection)!=null?e:{}).length;return n>0&&n<t.getFilteredRowModel().flatRows.length},t.getIsSomePageRowsSelected=()=>{const e=t.getPaginationRowModel().flatRows;return t.getIsAllPageRowsSelected()?!1:e.filter(n=>n.getCanSelect()).some(n=>n.getIsSelected()||n.getIsSomeSelected())},t.getToggleAllRowsSelectedHandler=()=>e=>{t.toggleAllRowsSelected(e.target.checked)},t.getToggleAllPageRowsSelectedHandler=()=>e=>{t.toggleAllPageRowsSelected(e.target.checked)}},createRow:(t,e)=>{t.toggleSelected=(n,r)=>{const i=t.getIsSelected();e.setRowSelection(s=>{var o;if(n=typeof n<"u"?n:!i,t.getCanSelect()&&i===n)return s;const a={...s};return vp(a,t.id,n,(o=r==null?void 0:r.selectChildren)!=null?o:!0,e),a})},t.getIsSelected=()=>{const{rowSelection:n}=e.getState();return Ym(t,n)},t.getIsSomeSelected=()=>{const{rowSelection:n}=e.getState();return yp(t,n)==="some"},t.getIsAllSubRowsSelected=()=>{const{rowSelection:n}=e.getState();return yp(t,n)==="all"},t.getCanSelect=()=>{var n;return typeof e.options.enableRowSelection=="function"?e.options.enableRowSelection(t):(n=e.options.enableRowSelection)!=null?n:!0},t.getCanSelectSubRows=()=>{var n;return typeof e.options.enableSubRowSelection=="function"?e.options.enableSubRowSelection(t):(n=e.options.enableSubRowSelection)!=null?n:!0},t.getCanMultiSelect=()=>{var n;return typeof e.options.enableMultiRowSelection=="function"?e.options.enableMultiRowSelection(t):(n=e.options.enableMultiRowSelection)!=null?n:!0},t.getToggleSelectedHandler=()=>{const n=t.getCanSelect();return r=>{var i;n&&t.toggleSelected((i=r.target)==null?void 0:i.checked)}}}},vp=(t,e,n,r,i)=>{var s;const o=i.getRow(e,!0);n?(o.getCanMultiSelect()||Object.keys(t).forEach(a=>delete t[a]),o.getCanSelect()&&(t[e]=!0)):delete t[e],r&&(s=o.subRows)!=null&&s.length&&o.getCanSelectSubRows()&&o.subRows.forEach(a=>vp(t,a.id,n,r,i))};function Ih(t,e){const n=t.getState().rowSelection,r=[],i={},s=function(o,a){return o.map(l=>{var u;const c=Ym(l,n);if(c&&(r.push(l),i[l.id]=l),(u=l.subRows)!=null&&u.length&&(l={...l,subRows:s(l.subRows)}),c)return l}).filter(Boolean)};return{rows:s(e.rows),flatRows:r,rowsById:i}}function Ym(t,e){var n;return(n=e[t.id])!=null?n:!1}function yp(t,e,n){var r;if(!((r=t.subRows)!=null&&r.length))return!1;let i=!0,s=!1;return t.subRows.forEach(o=>{if(!(s&&!i)&&(o.getCanSelect()&&(Ym(o,e)?s=!0:i=!1),o.subRows&&o.subRows.length)){const a=yp(o,e);a==="all"?s=!0:(a==="some"&&(s=!0),i=!1)}}),i?"all":s?"some":!1}const _p=/([0-9]+)/gm,qF=(t,e,n)=>tC(br(t.getValue(n)).toLowerCase(),br(e.getValue(n)).toLowerCase()),KF=(t,e,n)=>tC(br(t.getValue(n)),br(e.getValue(n))),QF=(t,e,n)=>Xm(br(t.getValue(n)).toLowerCase(),br(e.getValue(n)).toLowerCase()),YF=(t,e,n)=>Xm(br(t.getValue(n)),br(e.getValue(n))),XF=(t,e,n)=>{const r=t.getValue(n),i=e.getValue(n);return r>i?1:r<i?-1:0},JF=(t,e,n)=>Xm(t.getValue(n),e.getValue(n));function Xm(t,e){return t===e?0:t>e?1:-1}function br(t){return typeof t=="number"?isNaN(t)||t===1/0||t===-1/0?"":String(t):typeof t=="string"?t:""}function tC(t,e){const n=t.split(_p).filter(Boolean),r=e.split(_p).filter(Boolean);for(;n.length&&r.length;){const i=n.shift(),s=r.shift(),o=parseInt(i,10),a=parseInt(s,10),l=[o,a].sort();if(isNaN(l[0])){if(i>s)return 1;if(s>i)return-1;continue}if(isNaN(l[1]))return isNaN(o)?-1:1;if(o>a)return 1;if(a>o)return-1}return n.length-r.length}const eo={alphanumeric:qF,alphanumericCaseSensitive:KF,text:QF,textCaseSensitive:YF,datetime:XF,basic:JF},ZF={getInitialState:t=>({sorting:[],...t}),getDefaultColumnDef:()=>({sortingFn:"auto",sortUndefined:1}),getDefaultOptions:t=>({onSortingChange:kt("sorting",t),isMultiSortEvent:e=>e.shiftKey}),createColumn:(t,e)=>{t.getAutoSortingFn=()=>{const n=e.getFilteredRowModel().flatRows.slice(10);let r=!1;for(const i of n){const s=i==null?void 0:i.getValue(t.id);if(Object.prototype.toString.call(s)==="[object Date]")return eo.datetime;if(typeof s=="string"&&(r=!0,s.split(_p).length>1))return eo.alphanumeric}return r?eo.text:eo.basic},t.getAutoSortDir=()=>{const n=e.getFilteredRowModel().flatRows[0];return typeof(n==null?void 0:n.getValue(t.id))=="string"?"asc":"desc"},t.getSortingFn=()=>{var n,r;if(!t)throw new Error;return oc(t.columnDef.sortingFn)?t.columnDef.sortingFn:t.columnDef.sortingFn==="auto"?t.getAutoSortingFn():(n=(r=e.options.sortingFns)==null?void 0:r[t.columnDef.sortingFn])!=null?n:eo[t.columnDef.sortingFn]},t.toggleSorting=(n,r)=>{const i=t.getNextSortingOrder(),s=typeof n<"u"&&n!==null;e.setSorting(o=>{const a=o==null?void 0:o.find(p=>p.id===t.id),l=o==null?void 0:o.findIndex(p=>p.id===t.id);let u=[],c,d=s?n:i==="desc";if(o!=null&&o.length&&t.getCanMultiSort()&&r?a?c="toggle":c="add":o!=null&&o.length&&l!==o.length-1?c="replace":a?c="toggle":c="replace",c==="toggle"&&(s||i||(c="remove")),c==="add"){var f;u=[...o,{id:t.id,desc:d}],u.splice(0,u.length-((f=e.options.maxMultiSortColCount)!=null?f:Number.MAX_SAFE_INTEGER))}else c==="toggle"?u=o.map(p=>p.id===t.id?{...p,desc:d}:p):c==="remove"?u=o.filter(p=>p.id!==t.id):u=[{id:t.id,desc:d}];return u})},t.getFirstSortDir=()=>{var n,r;return((n=(r=t.columnDef.sortDescFirst)!=null?r:e.options.sortDescFirst)!=null?n:t.getAutoSortDir()==="desc")?"desc":"asc"},t.getNextSortingOrder=n=>{var r,i;const s=t.getFirstSortDir(),o=t.getIsSorted();return o?o!==s&&((r=e.options.enableSortingRemoval)==null||r)&&(!(n&&(i=e.options.enableMultiRemove)!=null)||i)?!1:o==="desc"?"asc":"desc":s},t.getCanSort=()=>{var n,r;return((n=t.columnDef.enableSorting)!=null?n:!0)&&((r=e.options.enableSorting)!=null?r:!0)&&!!t.accessorFn},t.getCanMultiSort=()=>{var n,r;return(n=(r=t.columnDef.enableMultiSort)!=null?r:e.options.enableMultiSort)!=null?n:!!t.accessorFn},t.getIsSorted=()=>{var n;const r=(n=e.getState().sorting)==null?void 0:n.find(i=>i.id===t.id);return r?r.desc?"desc":"asc":!1},t.getSortIndex=()=>{var n,r;return(n=(r=e.getState().sorting)==null?void 0:r.findIndex(i=>i.id===t.id))!=null?n:-1},t.clearSorting=()=>{e.setSorting(n=>n!=null&&n.length?n.filter(r=>r.id!==t.id):[])},t.getToggleSortingHandler=()=>{const n=t.getCanSort();return r=>{n&&(r.persist==null||r.persist(),t.toggleSorting==null||t.toggleSorting(void 0,t.getCanMultiSort()?e.options.isMultiSortEvent==null?void 0:e.options.isMultiSortEvent(r):!1))}}},createTable:t=>{t.setSorting=e=>t.options.onSortingChange==null?void 0:t.options.onSortingChange(e),t.resetSorting=e=>{var n,r;t.setSorting(e?[]:(n=(r=t.initialState)==null?void 0:r.sorting)!=null?n:[])},t.getPreSortedRowModel=()=>t.getGroupedRowModel(),t.getSortedRowModel=()=>(!t._getSortedRowModel&&t.options.getSortedRowModel&&(t._getSortedRowModel=t.options.getSortedRowModel(t)),t.options.manualSorting||!t._getSortedRowModel?t.getPreSortedRowModel():t._getSortedRowModel())}},ej={getInitialState:t=>({columnVisibility:{},...t}),getDefaultOptions:t=>({onColumnVisibilityChange:kt("columnVisibility",t)}),createColumn:(t,e)=>{t.toggleVisibility=n=>{t.getCanHide()&&e.setColumnVisibility(r=>({...r,[t.id]:n??!t.getIsVisible()}))},t.getIsVisible=()=>{var n,r;return(n=(r=e.getState().columnVisibility)==null?void 0:r[t.id])!=null?n:!0},t.getCanHide=()=>{var n,r;return((n=t.columnDef.enableHiding)!=null?n:!0)&&((r=e.options.enableHiding)!=null?r:!0)},t.getToggleVisibilityHandler=()=>n=>{t.toggleVisibility==null||t.toggleVisibility(n.target.checked)}},createRow:(t,e)=>{t._getAllVisibleCells=j(()=>[t.getAllCells(),e.getState().columnVisibility],n=>n.filter(r=>r.column.getIsVisible()),{key:"row._getAllVisibleCells",debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugRows}}),t.getVisibleCells=j(()=>[t.getLeftVisibleCells(),t.getCenterVisibleCells(),t.getRightVisibleCells()],(n,r,i)=>[...n,...r,...i],{key:!1,debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugRows}})},createTable:t=>{const e=(n,r)=>j(()=>[r(),r().filter(i=>i.getIsVisible()).map(i=>i.id).join("_")],i=>i.filter(s=>s.getIsVisible==null?void 0:s.getIsVisible()),{key:n,debug:()=>{var i;return(i=t.options.debugAll)!=null?i:t.options.debugColumns}});t.getVisibleFlatColumns=e("getVisibleFlatColumns",()=>t.getAllFlatColumns()),t.getVisibleLeafColumns=e("getVisibleLeafColumns",()=>t.getAllLeafColumns()),t.getLeftVisibleLeafColumns=e("getLeftVisibleLeafColumns",()=>t.getLeftLeafColumns()),t.getRightVisibleLeafColumns=e("getRightVisibleLeafColumns",()=>t.getRightLeafColumns()),t.getCenterVisibleLeafColumns=e("getCenterVisibleLeafColumns",()=>t.getCenterLeafColumns()),t.setColumnVisibility=n=>t.options.onColumnVisibilityChange==null?void 0:t.options.onColumnVisibilityChange(n),t.resetColumnVisibility=n=>{var r;t.setColumnVisibility(n?{}:(r=t.initialState.columnVisibility)!=null?r:{})},t.toggleAllColumnsVisible=n=>{var r;n=(r=n)!=null?r:!t.getIsAllColumnsVisible(),t.setColumnVisibility(t.getAllLeafColumns().reduce((i,s)=>({...i,[s.id]:n||!(s.getCanHide!=null&&s.getCanHide())}),{}))},t.getIsAllColumnsVisible=()=>!t.getAllLeafColumns().some(n=>!(n.getIsVisible!=null&&n.getIsVisible())),t.getIsSomeColumnsVisible=()=>t.getAllLeafColumns().some(n=>n.getIsVisible==null?void 0:n.getIsVisible()),t.getToggleAllColumnsVisibilityHandler=()=>n=>{var r;t.toggleAllColumnsVisible((r=n.target)==null?void 0:r.checked)}}},v0=[AF,ej,BF,WF,NF,ZF,UF,PF,HF,GF,kF];function tj(t){var e;(t.debugAll||t.debugTable)&&console.info("Creating Table Instance...");let n={_features:v0};const r=n._features.reduce((c,d)=>Object.assign(c,d.getDefaultOptions==null?void 0:d.getDefaultOptions(n)),{}),i=c=>n.options.mergeOptions?n.options.mergeOptions(r,c):{...r,...c};let o={...{},...(e=t.initialState)!=null?e:{}};n._features.forEach(c=>{var d;o=(d=c.getInitialState==null?void 0:c.getInitialState(o))!=null?d:o});const a=[];let l=!1;const u={_features:v0,options:{...r,...t},initialState:o,_queue:c=>{a.push(c),l||(l=!0,Promise.resolve().then(()=>{for(;a.length;)a.shift()();l=!1}).catch(d=>setTimeout(()=>{throw d})))},reset:()=>{n.setState(n.initialState)},setOptions:c=>{const d=ur(c,n.options);n.options=i(d)},getState:()=>n.options.state,setState:c=>{n.options.onStateChange==null||n.options.onStateChange(c)},_getRowId:(c,d,f)=>{var p;return(p=n.options.getRowId==null?void 0:n.options.getRowId(c,d,f))!=null?p:`${f?[f.id,d].join("."):d}`},getCoreRowModel:()=>(n._getCoreRowModel||(n._getCoreRowModel=n.options.getCoreRowModel(n)),n._getCoreRowModel()),getRowModel:()=>n.getPaginationRowModel(),getRow:(c,d)=>{let f=(d?n.getPrePaginationRowModel():n.getRowModel()).rowsById[c];if(!f&&(f=n.getCoreRowModel().rowsById[c],!f))throw new Error;return f},_getDefaultColumnDef:j(()=>[n.options.defaultColumn],c=>{var d;return c=(d=c)!=null?d:{},{header:f=>{const p=f.header.column.columnDef;return p.accessorKey?p.accessorKey:p.accessorFn?p.id:null},cell:f=>{var p,v;return(p=(v=f.renderValue())==null||v.toString==null?void 0:v.toString())!=null?p:null},...n._features.reduce((f,p)=>Object.assign(f,p.getDefaultColumnDef==null?void 0:p.getDefaultColumnDef()),{}),...c}},{debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns},key:!1}),_getColumnDefs:()=>n.options.columns,getAllColumns:j(()=>[n._getColumnDefs()],c=>{const d=function(f,p,v){return v===void 0&&(v=0),f.map(_=>{const w=RF(n,_,v,p),g=_;return w.columns=g.columns?d(g.columns,w,v+1):[],w})};return d(c)},{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),getAllFlatColumns:j(()=>[n.getAllColumns()],c=>c.flatMap(d=>d.getFlatColumns()),{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),_getAllFlatColumnsById:j(()=>[n.getAllFlatColumns()],c=>c.reduce((d,f)=>(d[f.id]=f,d),{}),{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),getAllLeafColumns:j(()=>[n.getAllColumns(),n._getOrderColumnsFn()],(c,d)=>{let f=c.flatMap(p=>p.getLeafColumns());return d(f)},{key:!1,debug:()=>{var c;return(c=n.options.debugAll)!=null?c:n.options.debugColumns}}),getColumn:c=>n._getAllFlatColumnsById()[c]};Object.assign(n,u);for(let c=0;c<n._features.length;c++){const d=n._features[c];d==null||d.createTable==null||d.createTable(n)}return n}function nj(t,e,n,r){const i=()=>{var o;return(o=s.getValue())!=null?o:t.options.renderFallbackValue},s={id:`${e.id}_${n.id}`,row:e,column:n,getValue:()=>e.getValue(r),renderValue:i,getContext:j(()=>[t,n,e,s],(o,a,l,u)=>({table:o,column:a,row:l,cell:u,getValue:u.getValue,renderValue:u.renderValue}),{key:!1,debug:()=>t.options.debugAll})};return t._features.forEach(o=>{o.createCell==null||o.createCell(s,n,e,t)},{}),s}const Jm=(t,e,n,r,i,s,o)=>{let a={id:e,index:r,original:n,depth:i,parentId:o,_valuesCache:{},_uniqueValuesCache:{},getValue:l=>{if(a._valuesCache.hasOwnProperty(l))return a._valuesCache[l];const u=t.getColumn(l);if(u!=null&&u.accessorFn)return a._valuesCache[l]=u.accessorFn(a.original,r),a._valuesCache[l]},getUniqueValues:l=>{if(a._uniqueValuesCache.hasOwnProperty(l))return a._uniqueValuesCache[l];const u=t.getColumn(l);if(u!=null&&u.accessorFn)return u.columnDef.getUniqueValues?(a._uniqueValuesCache[l]=u.columnDef.getUniqueValues(a.original,r),a._uniqueValuesCache[l]):(a._uniqueValuesCache[l]=[a.getValue(l)],a._uniqueValuesCache[l])},renderValue:l=>{var u;return(u=a.getValue(l))!=null?u:t.options.renderFallbackValue},subRows:s??[],getLeafRows:()=>CF(a.subRows,l=>l.subRows),getParentRow:()=>a.parentId?t.getRow(a.parentId,!0):void 0,getParentRows:()=>{let l=[],u=a;for(;;){const c=u.getParentRow();if(!c)break;l.push(c),u=c}return l.reverse()},getAllCells:j(()=>[t.getAllLeafColumns()],l=>l.map(u=>nj(t,a,u,u.id)),{key:!1,debug:()=>{var l;return(l=t.options.debugAll)!=null?l:t.options.debugRows}}),_getAllCellsByColumnId:j(()=>[a.getAllCells()],l=>l.reduce((u,c)=>(u[c.column.id]=c,u),{}),{key:"row.getAllCellsByColumnId",debug:()=>{var l;return(l=t.options.debugAll)!=null?l:t.options.debugRows}})};for(let l=0;l<t._features.length;l++){const u=t._features[l];u==null||u.createRow==null||u.createRow(a,t)}return a};function rj(){return t=>j(()=>[t.options.data],e=>{const n={rows:[],flatRows:[],rowsById:{}},r=function(i,s,o){s===void 0&&(s=0);const a=[];for(let u=0;u<i.length;u++){const c=Jm(t,t._getRowId(i[u],u,o),i[u],u,s,void 0,o==null?void 0:o.id);if(n.flatRows.push(c),n.rowsById[c.id]=c,a.push(c),t.options.getSubRows){var l;c.originalSubRows=t.options.getSubRows(i[u],u),(l=c.originalSubRows)!=null&&l.length&&(c.subRows=r(c.originalSubRows,s+1,c))}}return a};return n.rows=r(e),n},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable},onChange:()=>{t._autoResetPageIndex()}})}function ij(t,e,n){return n.options.filterFromLeafRows?sj(t,e,n):oj(t,e,n)}function sj(t,e,n){var r;const i=[],s={},o=(r=n.options.maxLeafRowFilterDepth)!=null?r:100,a=function(l,u){u===void 0&&(u=0);const c=[];for(let f=0;f<l.length;f++){var d;let p=l[f];const v=Jm(n,p.id,p.original,p.index,p.depth,void 0,p.parentId);if(v.columnFilters=p.columnFilters,(d=p.subRows)!=null&&d.length&&u<o){if(v.subRows=a(p.subRows,u+1),p=v,e(p)&&!v.subRows.length){c.push(p),s[p.id]=p,i.push(p);continue}if(e(p)||v.subRows.length){c.push(p),s[p.id]=p,i.push(p);continue}}else p=v,e(p)&&(c.push(p),s[p.id]=p,i.push(p))}return c};return{rows:a(t),flatRows:i,rowsById:s}}function oj(t,e,n){var r;const i=[],s={},o=(r=n.options.maxLeafRowFilterDepth)!=null?r:100,a=function(l,u){u===void 0&&(u=0);const c=[];for(let f=0;f<l.length;f++){let p=l[f];if(e(p)){var d;if((d=p.subRows)!=null&&d.length&&u<o){const _=Jm(n,p.id,p.original,p.index,p.depth,void 0,p.parentId);_.subRows=a(p.subRows,u+1),p=_}c.push(p),i.push(p),s[p.id]=p}}return c};return{rows:a(t),flatRows:i,rowsById:s}}function aj(){return t=>j(()=>[t.getPreFilteredRowModel(),t.getState().columnFilters,t.getState().globalFilter],(e,n,r)=>{if(!e.rows.length||!(n!=null&&n.length)&&!r){for(let f=0;f<e.flatRows.length;f++)e.flatRows[f].columnFilters={},e.flatRows[f].columnFiltersMeta={};return e}const i=[],s=[];(n??[]).forEach(f=>{var p;const v=t.getColumn(f.id);if(!v)return;const _=v.getFilterFn();_&&i.push({id:f.id,filterFn:_,resolvedValue:(p=_.resolveFilterValue==null?void 0:_.resolveFilterValue(f.value))!=null?p:f.value})});const o=n.map(f=>f.id),a=t.getGlobalFilterFn(),l=t.getAllLeafColumns().filter(f=>f.getCanGlobalFilter());r&&a&&l.length&&(o.push("__global__"),l.forEach(f=>{var p;s.push({id:f.id,filterFn:a,resolvedValue:(p=a.resolveFilterValue==null?void 0:a.resolveFilterValue(r))!=null?p:r})}));let u,c;for(let f=0;f<e.flatRows.length;f++){const p=e.flatRows[f];if(p.columnFilters={},i.length)for(let v=0;v<i.length;v++){u=i[v];const _=u.id;p.columnFilters[_]=u.filterFn(p,_,u.resolvedValue,w=>{p.columnFiltersMeta[_]=w})}if(s.length){for(let v=0;v<s.length;v++){c=s[v];const _=c.id;if(c.filterFn(p,_,c.resolvedValue,w=>{p.columnFiltersMeta[_]=w})){p.columnFilters.__global__=!0;break}}p.columnFilters.__global__!==!0&&(p.columnFilters.__global__=!1)}}const d=f=>{for(let p=0;p<o.length;p++)if(f.columnFilters[o[p]]===!1)return!1;return!0};return ij(e.rows,d,t)},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable},onChange:()=>{t._autoResetPageIndex()}})}function lj(){return t=>j(()=>[t.getState().sorting,t.getPreSortedRowModel()],(e,n)=>{if(!n.rows.length||!(e!=null&&e.length))return n;const r=t.getState().sorting,i=[],s=r.filter(l=>{var u;return(u=t.getColumn(l.id))==null?void 0:u.getCanSort()}),o={};s.forEach(l=>{const u=t.getColumn(l.id);u&&(o[l.id]={sortUndefined:u.columnDef.sortUndefined,invertSorting:u.columnDef.invertSorting,sortingFn:u.getSortingFn()})});const a=l=>{const u=l.map(c=>({...c}));return u.sort((c,d)=>{for(let p=0;p<s.length;p+=1){var f;const v=s[p],_=o[v.id],w=(f=v==null?void 0:v.desc)!=null?f:!1;let g=0;if(_.sortUndefined){const m=c.getValue(v.id),y=d.getValue(v.id),E=m===void 0,S=y===void 0;(E||S)&&(g=E&&S?0:E?_.sortUndefined:-_.sortUndefined)}if(g===0&&(g=_.sortingFn(c,d,v.id)),g!==0)return w&&(g*=-1),_.invertSorting&&(g*=-1),g}return c.index-d.index}),u.forEach(c=>{var d;i.push(c),(d=c.subRows)!=null&&d.length&&(c.subRows=a(c.subRows))}),u};return{rows:a(n.rows),flatRows:i,rowsById:n.rowsById}},{key:!1,debug:()=>{var e;return(e=t.options.debugAll)!=null?e:t.options.debugTable},onChange:()=>{t._autoResetPageIndex()}})}function uj(t){const e=[],n=r=>{var i;e.push(r),(i=r.subRows)!=null&&i.length&&r.getIsExpanded()&&r.subRows.forEach(n)};return t.rows.forEach(n),{rows:e,flatRows:t.flatRows,rowsById:t.rowsById}}function cj(t){return e=>j(()=>[e.getState().pagination,e.getPrePaginationRowModel(),e.options.paginateExpandedRows?void 0:e.getState().expanded],(n,r)=>{if(!r.rows.length)return r;const{pageSize:i,pageIndex:s}=n;let{rows:o,flatRows:a,rowsById:l}=r;const u=i*s,c=u+i;o=o.slice(u,c);let d;e.options.paginateExpandedRows?d={rows:o,flatRows:a,rowsById:l}:d=uj({rows:o,flatRows:a,rowsById:l}),d.flatRows=[];const f=p=>{d.flatRows.push(p),p.subRows.length&&p.subRows.forEach(f)};return d.rows.forEach(f),d},{key:!1,debug:()=>{var n;return(n=e.options.debugAll)!=null?n:e.options.debugTable}})}/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */function y0(t,e){return t?dj(t)?I.createElement(t,e):t:null}function dj(t){return hj(t)||typeof t=="function"||fj(t)}function hj(t){return typeof t=="function"&&(()=>{const e=Object.getPrototypeOf(t);return e.prototype&&e.prototype.isReactComponent})()}function fj(t){return typeof t=="object"&&typeof t.$$typeof=="symbol"&&["react.memo","react.forward_ref"].includes(t.$$typeof.description)}function pj(t){const e={state:{},onStateChange:()=>{},renderFallbackValue:null,...t},[n]=I.useState(()=>({current:tj(e)})),[r,i]=I.useState(()=>n.current.initialState);return n.current.setOptions(s=>({...s,...t,state:{...r,...t.state},onStateChange:o=>{i(o),t.onStateChange==null||t.onStateChange(o)}})),n.current}function pd({columns:t,data:e}){const[n,r]=I.useState([]),[i,s]=I.useState(""),o=pj({data:I.useMemo(()=>e,[e]),rows:e,columns:t,getCoreRowModel:rj(),getPaginationRowModel:cj(),getSortedRowModel:lj(),getFilteredRowModel:aj(),state:{sorting:n,globalFilter:i},onSortingChange:r,onGlobalFilterChange:s});return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"tablaa",children:[h.jsx("div",{className:"oktable",children:h.jsx("input",{className:"search-in",type:"text",value:i,onChange:a=>s(a.target.value),placeholder:"🔍  Search "})}),h.jsx("div",{className:"got t-bg",children:h.jsxs("table",{border:1,className:"data-table `${ok}`",children:[h.jsx("thead",{children:o.getHeaderGroups().map(a=>h.jsx("tr",{children:a.headers.map(l=>h.jsx("th",{className:l.column.className,onClick:l.column.getToggleSortingHandler(),children:l.isPlaceholder?null:h.jsxs("div",{children:[y0(l.column.columnDef.header,l.getContext()),{asc:"    ⬆️",desc:"    ⬇️",default:"    "}[l.column.getIsSorted()||"default"]]})},l.id))},a.id))}),h.jsx("tbody",{children:o.getRowModel().rows.map(a=>h.jsx("tr",{children:a.getVisibleCells().map(l=>h.jsx("td",{children:y0(l.column.columnDef.cell,l.getContext())},l.id))},a.id))})]})})]}),h.jsxs("div",{className:"pageController",children:[h.jsx("div",{className:"searching"}),h.jsxs("div",{className:"data-table-btn",children:[h.jsx("button",{disabled:!o.getCanPreviousPage(),onClick:()=>o.setPageIndex(0),children:h.jsx(et,{icon:sF})}),h.jsx("button",{disabled:!o.getCanPreviousPage(),onClick:()=>o.previousPage(),children:h.jsx(et,{icon:aF})}),h.jsx("button",{disabled:!o.getCanNextPage(),onClick:()=>o.nextPage(),children:h.jsx(et,{icon:oF})}),h.jsx("button",{disabled:!o.getCanNextPage(),onClick:()=>o.setPageIndex(o.getPageCount()-1),children:h.jsx(et,{icon:hF})}),h.jsxs("span",{children:[h.jsx("div",{children:"Page"}),h.jsxs("strong",{children:[o.getState().pagination.pageIndex+1," of"," ",o.getPageCount()]})]})]})]})]})}function gj(){const t=VI(ki),{newsData:e,loading:n,updatedNews:r}=$r(),[i,s]=I.useState([]),o=I.useRef(),{displayName:a}=fd(),[l,u]=I.useState({}),[c,d]=I.useState(null);I.useEffect(()=>{!n&&e.length>0&&s(e)},[e,n]);const f=async()=>{try{let g=l.image||l.imageURL;if(l.image&&typeof l.image!="string"){const S=Dm(HL,`images/${Date.now()}_${l.image.name}`);await bm(S,l.image),g=await Om(S)}const m={...l,image:g},y=Ts(t,"News",l.id);await b4(y,m),o.current.close(),alert("News updated");const E=e.map(S=>S.id===l.id?{...S,...m}:S);r(E)}catch(g){console.error("Error saving news:",g)}},p=async g=>{try{await ld(Ts(t,"News",g)),alert("News Deleted");const m=e.filter(y=>y.id!==g);r(m)}catch(m){console.error("Error deleting news:",m)}},v=(g,m)=>{u({...l,[m]:g.target.value})},_=g=>{const m=g.target.files[0];u({...l,image:m}),d(URL.createObjectURL(m))};if(n)return h.jsx(vn,{children:h.jsx(Hn,{})});const w=[{header:"SN",cell:({row:g})=>`${+g.id+1}`},{header:"News Id",accessorKey:"id"},{header:"Heading",accessorKey:"heading"},{header:"Author Name",accessorKey:"authorName"},{header:"Action",cell:({row:g})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>{o.current.showModal(),u({id:g.original.id,heading:g.original.heading,description:g.original.description,category:g.original.category,image:g.original.image,authorName:g.original.authorName}),g.original.image&&d(g.original.image)},children:"Edit"}),h.jsx("button",{onClick:()=>p(g.original.id),children:"Delete"})]})}];return h.jsx(h.Fragment,{children:h.jsxs(vn,{children:[h.jsx(pd,{columns:w,data:i}),h.jsxs("dialog",{ref:o,children:[h.jsx("button",{onClick:()=>{o.current.close()},children:"x"}),h.jsxs("div",{className:"updateNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:l.heading,onChange:g=>v(g,"heading"),cols:"1",rows:"1",required:!0})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:l.description,onChange:g=>v(g,"description"),cols:"5",rows:"15",required:!0})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:_}),c&&h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Initial Image Preview:"}),h.jsx("img",{src:c,alt:"Initial Preview",style:{width:"100px",height:"100px"}})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Category"}),h.jsxs("select",{name:"category",id:"category",value:l.category,onChange:g=>v(g,"category"),required:!0,children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:l.isBreaking,onChange:g=>v(g,"isBreaking"),children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Author Name"}),h.jsx("input",{type:"text",readOnly:!0,value:a})]})]}),h.jsx("button",{onClick:f,children:"Save"})]})]})]})})}const mj=()=>{const t=I.useRef(),[e,n]=I.useState([]),[r,i]=I.useState(null),[s,o]=I.useState({}),[a,l]=I.useState(null);I.useEffect(()=>{(async()=>{const _=Mn(Ft,"Alert"),w=await ad(_),g=[];w.forEach(m=>{g.push({id:m.id,...m.data()})}),n(g)})()},[]);const u=async()=>{try{const v={heading:s.heading,category:s.category,image:s.image,description:s.description,authorName:s.authorName,isBreaking:s.isBreaking==="true"};await Ga(Mn(Ft,"News"),v),t.current.close()}catch(v){console.error("Error adding news: ",v)}},c=async v=>{try{await ld(Ts(Ft,"Alert",v)),n(e.filter(_=>_.id!==v))}catch(_){console.error("Error deleting news: ",_)}},d=(v,_)=>{o({...s,[_]:v.target.value})},f=v=>{o({...s,image:v.target.files[0]}),l(URL.createObjectURL(v.target.files[0]))},p=[{header:"S.N.",cell:({row:v})=>`${+v.id+1}`},{header:"Heading",accessorKey:"heading"},{header:"Action",cell:({row:v})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>{t.current.showModal(),i(v.original),o({heading:v.original.heading,category:v.original.category,image:v.original.image,description:v.original.description,authorName:v.original.authorName}),v.original.image&&l(v.original.image)},children:"Details"}),h.jsx("button",{onClick:()=>c(v.original.id),children:"Delete"})]})}];return e.length===0?h.jsx(vn,{children:h.jsx(Hn,{})}):h.jsxs(vn,{children:[h.jsx(pd,{columns:p,data:e}),h.jsx("div",{className:"haveNews",children:h.jsx("dialog",{ref:t,children:r&&h.jsx(h.Fragment,{children:h.jsxs("div",{className:"haveNews",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"heading",children:"Suitable Heading"}),h.jsx("textarea",{name:"heading",id:"heading",value:s.heading,onChange:v=>d(v,"heading"),cols:"4",rows:"4"})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"description",children:"Description"}),h.jsx("textarea",{name:"description",id:"description",value:s.description,onChange:v=>d(v,"description"),cols:"15",rows:"15"})]}),h.jsxs("div",{className:"threeInput-group",children:[h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"image",children:"Image"}),h.jsx("input",{type:"file",onChange:f}),a&&h.jsxs("div",{className:"input-group",children:[h.jsx("label",{children:"Initial Image Preview:"}),h.jsx("img",{src:a,alt:"Initial Preview",style:{width:"100px",height:"100px"}})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"category",children:"Related Category"}),h.jsxs("select",{name:"category",id:"category",value:s.category,onChange:v=>d(v,"category"),children:[h.jsx("option",{value:"technology",children:"Technology"}),h.jsx("option",{value:"sport",children:"Sport"}),h.jsx("option",{value:"politics",children:"Politics"}),h.jsx("option",{value:"education",children:"Education"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"isBreaking",children:"Is Breaking"}),h.jsxs("select",{name:"isBreaking",id:"isBreaking",value:s.isBreaking,onChange:v=>d(v,"isBreaking"),children:[h.jsx("option",{value:"true",children:"Yes"}),h.jsx("option",{value:"false",children:"No"})]})]}),h.jsxs("div",{className:"input-group",children:[h.jsx("label",{htmlFor:"author",children:"Your Name"}),h.jsx("input",{type:"text",id:"authorName",name:"authorName",value:s.authorName,onChange:v=>d(v,"authorName")})]})]}),h.jsx("button",{onClick:u,children:"Post News"}),h.jsx("button",{onClick:()=>{t.current.close()},children:"close"})]})})})})]})};function vj(){const{newsData:t,error:e}=$r(),n=t.filter(r=>r.category==="technology");return e?h.jsx(wt,{children:h.jsx(Hn,{})}):h.jsxs(wt,{children:[h.jsx("div",{className:"pageName",children:"Technology"}),h.jsx("div",{children:n.map((r,i)=>h.jsxs("div",{children:[h.jsx("h3",{children:r.heading}),h.jsx("p",{children:r.description})]},i))})]})}function yj(){const{newsData:t,loading:e}=$r(),n=t.filter(r=>r.category==="education");return e?h.jsx(wt,{children:h.jsx(Hn,{})}):h.jsxs(wt,{children:[h.jsx("div",{className:"pageName",children:"Education"}),h.jsx("div",{children:n.map((r,i)=>h.jsxs("div",{children:[h.jsx("p",{children:i+1}),h.jsx("h3",{children:r.heading}),h.jsx("p",{children:r.description})]},i))})]})}function _j(){const{newsData:t,loading:e}=$r(),n=t.filter(r=>r.category==="politics");return e?h.jsx(h.Fragment,{children:h.jsx(wt,{children:h.jsx(Hn,{})})}):h.jsxs(wt,{children:[h.jsx("div",{className:"pageName",children:"Politics"}),h.jsx("div",{children:n.map((r,i)=>h.jsxs("div",{children:[h.jsx("h3",{children:r.heading}),h.jsx("p",{children:r.description})]},i))})]})}function wj(){const[t,e]=I.useState([]),[n,r]=I.useState(null),i=I.useRef(null);I.useEffect(()=>{(async()=>{const u=Mn(Ft,"contactForm"),c=await ad(u),d=[];c.forEach(f=>{d.push({id:f.id,...f.data()})}),e(d)})()},[]);const s=l=>{r(l),i.current.showModal()},o=async l=>{try{await ld(Ts(Ft,"contactForm",l)),e(t.filter(u=>u.id!==l))}catch(u){console.error("Error deleting news: ",u)}},a=[{header:"S.N.",cell:({row:l})=>`${+l.id+1}`},{header:"Name",accessorKey:"name"},{header:"Mobile",accessorKey:"phone"},{header:"Action",cell:({row:l})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>s(l.original),children:"Details"}),h.jsx("button",{onClick:()=>o(l.original.id),children:"Delete"})]})}];return h.jsxs(vn,{children:[h.jsx(pd,{columns:a,data:t}),h.jsx("dialog",{ref:i,children:n&&h.jsxs("div",{children:[h.jsxs("p",{children:["Name: ",n.name]}),h.jsxs("p",{children:["Mobile: ",n.phone]}),h.jsxs("p",{children:["Email: ",n.email]}),h.jsxs("p",{children:["Message: ",n.message]}),h.jsx("button",{onClick:()=>i.current.close(),children:"Close"})]})})]})}function Ej(){const[t,e]=I.useState([]),[n,r]=I.useState(null),i=I.useRef(null);I.useEffect(()=>{(async()=>{const u=Mn(Ft,"suggestionForm"),c=await ad(u),d=[];c.forEach(f=>{d.push({id:f.id,...f.data()})}),e(d)})()},[]);const s=l=>{r(l),i.current.showModal()},o=async l=>{try{await ld(Ts(Ft,"suggestionForm",l)),e(t.filter(u=>u.id!==l))}catch(u){console.error("Error deleting news: ",u)}},a=[{header:"S.N.",cell:({row:l})=>`${+l.id+1}`},{header:"Name",accessorKey:"name"},{header:"Action",cell:({row:l})=>h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:()=>s(l.original),children:"Details"}),h.jsx("button",{onClick:()=>o(l.original.id),children:"Delete"})]})}];return h.jsxs(vn,{children:[h.jsx(pd,{columns:a,data:t}),h.jsx("dialog",{ref:i,children:n&&h.jsxs("div",{children:[h.jsxs("p",{children:["Name: ",n.name]}),h.jsxs("p",{children:["Email: ",n.email]}),h.jsxs("p",{children:["Suggestion: ",n.suggestion]}),h.jsx("button",{onClick:()=>i.current.close(),children:"Close"})]})})]})}function Sj(){return h.jsx(kk,{children:h.jsx(WL,{children:h.jsx(tF,{children:h.jsxs(Ek,{children:[h.jsx(Te,{path:"/admin",element:h.jsx(yF,{})}),h.jsx(Te,{path:"/haveNews",element:h.jsx(EF,{})}),h.jsx(Te,{path:"/",element:h.jsx(JV,{})}),h.jsx(Te,{path:"/technology",element:h.jsx(vj,{})}),h.jsx(Te,{path:"/entertainment",element:h.jsx(ZV,{})}),h.jsx(Te,{path:"/sport",element:h.jsx(eF,{})}),h.jsx(Te,{path:"/education",element:h.jsx(yj,{})}),h.jsx(Te,{path:"/politics",element:h.jsx(_j,{})}),h.jsxs(Te,{path:"",element:h.jsx(mF,{}),children:[h.jsx(Te,{path:"/dashboard",element:h.jsx(_F,{})}),h.jsx(Te,{path:"/addNews",element:h.jsx(gF,{})}),h.jsx(Te,{path:"/addUser",element:h.jsx(vF,{})}),h.jsx(Te,{path:"/traffic",element:h.jsx(IF,{})}),h.jsx(Te,{path:"/adminNews",element:h.jsx(gj,{})}),h.jsx(Te,{path:"/adminHaveNews",element:h.jsx(mj,{})}),h.jsx(Te,{path:"/adminContact",element:h.jsx(wj,{})}),h.jsx(Te,{path:"/adminSuggestion",element:h.jsx(Ej,{})})]}),h.jsx(Te,{path:"/*",element:h.jsx(SF,{})}),h.jsx(Te,{path:"/suggestion",element:h.jsx(hT,{})})]})})})})}Th.createRoot(document.getElementById("root")).render(h.jsx(Sj,{}));
