const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoginView-BlKwD8jE.js","assets/LoginView-DzYUnYrd.css","assets/HomeView-Czmv2tRL.js","assets/HomeView-CgJ6pfaA.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function If(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Be={},Pi=[],Bn=()=>{},Hv=()=>!1,uu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),hu=n=>n.startsWith("onUpdate:"),Tt=Object.assign,Ef=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},CS=Object.prototype.hasOwnProperty,xe=(n,e)=>CS.call(n,e),fe=Array.isArray,Ni=n=>Ja(n)==="[object Map]",Qv=n=>Ja(n)==="[object Set]",pm=n=>Ja(n)==="[object Date]",_e=n=>typeof n=="function",it=n=>typeof n=="string",_n=n=>typeof n=="symbol",Le=n=>n!==null&&typeof n=="object",Yv=n=>(Le(n)||_e(n))&&_e(n.then)&&_e(n.catch),Xv=Object.prototype.toString,Ja=n=>Xv.call(n),PS=n=>Ja(n).slice(8,-1),Jv=n=>Ja(n)==="[object Object]",du=n=>it(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,ra=If(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},NS=/-\w/g,Wt=fu(n=>n.replace(NS,e=>e.slice(1).toUpperCase())),DS=/\B([A-Z])/g,os=fu(n=>n.replace(DS,"-$1").toLowerCase()),pu=fu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ih=fu(n=>n?`on${pu(n)}`:""),Mn=(n,e)=>!Object.is(n,e),Yl=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Zv=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Tf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let gm;const gu=()=>gm||(gm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wf(n){if(fe(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=it(r)?VS(r):wf(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(it(n)||Le(n))return n}const xS=/;(?![^(]*\))/g,kS=/:([^]+)/,OS=/\/\*[^]*?\*\//g;function VS(n){const e={};return n.replace(OS,"").split(xS).forEach(t=>{if(t){const r=t.split(kS);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Af(n){let e="";if(it(n))e=n;else if(fe(n))for(let t=0;t<n.length;t++){const r=Af(n[t]);r&&(e+=r+" ")}else if(Le(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const MS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",LS=If(MS);function eI(n){return!!n||n===""}function FS(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=bf(n[r],e[r]);return t}function bf(n,e){if(n===e)return!0;let t=pm(n),r=pm(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=_n(n),r=_n(e),t||r)return n===e;if(t=fe(n),r=fe(e),t||r)return t&&r?FS(n,e):!1;if(t=Le(n),r=Le(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!bf(n[o],e[o]))return!1}}return String(n)===String(e)}const tI=n=>!!(n&&n.__v_isRef===!0),US=n=>it(n)?n:n==null?"":fe(n)||Le(n)&&(n.toString===Xv||!_e(n.toString))?tI(n)?US(n.value):JSON.stringify(n,nI,2):String(n),nI=(n,e)=>tI(e)?nI(n,e.value):Ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Eh(r,i)+" =>"]=s,t),{})}:Qv(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Eh(t))}:_n(e)?Eh(e):Le(e)&&!fe(e)&&!Jv(e)?String(e):e,Eh=(n,e="")=>{var t;return _n(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class rI{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Rt;try{return Rt=this,e()}finally{Rt=t}}}on(){++this._on===1&&(this.prevScope=Rt,Rt=this)}off(){this._on>0&&--this._on===0&&(Rt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function sI(n){return new rI(n)}function iI(){return Rt}function BS(n,e=!1){Rt&&Rt.cleanups.push(n)}let qe;const Th=new WeakSet;class oI{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rt&&Rt.active&&Rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Th.has(this)&&(Th.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lI(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mm(this),cI(this);const e=qe,t=bn;qe=this,bn=!0;try{return this.fn()}finally{uI(this),qe=e,bn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cf(e);this.deps=this.depsTail=void 0,mm(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Th.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){id(this)&&this.run()}get dirty(){return id(this)}}let aI=0,sa,ia;function lI(n,e=!1){if(n.flags|=8,e){n.next=ia,ia=n;return}n.next=sa,sa=n}function Sf(){aI++}function Rf(){if(--aI>0)return;if(ia){let e=ia;for(ia=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;sa;){let e=sa;for(sa=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function cI(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function uI(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Cf(r),jS(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function id(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(hI(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function hI(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ca)||(n.globalVersion=Ca,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!id(n))))return;n.flags|=2;const e=n.dep,t=qe,r=bn;qe=n,bn=!0;try{cI(n);const s=n.fn(n._value);(e.version===0||Mn(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{qe=t,bn=r,uI(n),n.flags&=-3}}function Cf(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Cf(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function jS(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let bn=!0;const dI=[];function hr(){dI.push(bn),bn=!1}function dr(){const n=dI.pop();bn=n===void 0?!0:n}function mm(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=qe;qe=void 0;try{e()}finally{qe=t}}}let Ca=0;class qS{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!qe||!bn||qe===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==qe)t=this.activeLink=new qS(qe,this),qe.deps?(t.prevDep=qe.depsTail,qe.depsTail.nextDep=t,qe.depsTail=t):qe.deps=qe.depsTail=t,fI(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=qe.depsTail,t.nextDep=void 0,qe.depsTail.nextDep=t,qe.depsTail=t,qe.deps===t&&(qe.deps=r)}return t}trigger(e){this.version++,Ca++,this.notify(e)}notify(e){Sf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Rf()}}}function fI(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)fI(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const yc=new WeakMap,Os=Symbol(""),od=Symbol(""),Pa=Symbol("");function Nt(n,e,t){if(bn&&qe){let r=yc.get(n);r||yc.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Pf),s.map=r,s.key=t),s.track()}}function nr(n,e,t,r,s,i){const o=yc.get(n);if(!o){Ca++;return}const a=l=>{l&&l.trigger()};if(Sf(),e==="clear")o.forEach(a);else{const l=fe(n),u=l&&du(t);if(l&&t==="length"){const h=Number(r);o.forEach((d,g)=>{(g==="length"||g===Pa||!_n(g)&&g>=h)&&a(d)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Pa)),e){case"add":l?u&&a(o.get("length")):(a(o.get(Os)),Ni(n)&&a(o.get(od)));break;case"delete":l||(a(o.get(Os)),Ni(n)&&a(o.get(od)));break;case"set":Ni(n)&&a(o.get(Os));break}}Rf()}function WS(n,e){const t=yc.get(n);return t&&t.get(e)}function ui(n){const e=Ce(n);return e===n?e:(Nt(e,"iterate",Pa),sn(n)?e:e.map(Cn))}function mu(n){return Nt(n=Ce(n),"iterate",Pa),n}function kn(n,e){return fr(n)?Ui(cr(n)?Cn(e):e):Cn(e)}const GS={__proto__:null,[Symbol.iterator](){return wh(this,Symbol.iterator,n=>kn(this,n))},concat(...n){return ui(this).concat(...n.map(e=>fe(e)?ui(e):e))},entries(){return wh(this,"entries",n=>(n[1]=kn(this,n[1]),n))},every(n,e){return Yn(this,"every",n,e,void 0,arguments)},filter(n,e){return Yn(this,"filter",n,e,t=>t.map(r=>kn(this,r)),arguments)},find(n,e){return Yn(this,"find",n,e,t=>kn(this,t),arguments)},findIndex(n,e){return Yn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Yn(this,"findLast",n,e,t=>kn(this,t),arguments)},findLastIndex(n,e){return Yn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Yn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ah(this,"includes",n)},indexOf(...n){return Ah(this,"indexOf",n)},join(n){return ui(this).join(n)},lastIndexOf(...n){return Ah(this,"lastIndexOf",n)},map(n,e){return Yn(this,"map",n,e,void 0,arguments)},pop(){return Fo(this,"pop")},push(...n){return Fo(this,"push",n)},reduce(n,...e){return _m(this,"reduce",n,e)},reduceRight(n,...e){return _m(this,"reduceRight",n,e)},shift(){return Fo(this,"shift")},some(n,e){return Yn(this,"some",n,e,void 0,arguments)},splice(...n){return Fo(this,"splice",n)},toReversed(){return ui(this).toReversed()},toSorted(n){return ui(this).toSorted(n)},toSpliced(...n){return ui(this).toSpliced(...n)},unshift(...n){return Fo(this,"unshift",n)},values(){return wh(this,"values",n=>kn(this,n))}};function wh(n,e,t){const r=mu(n),s=r[e]();return r!==n&&!sn(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const KS=Array.prototype;function Yn(n,e,t,r,s,i){const o=mu(n),a=o!==n&&!sn(n),l=o[e];if(l!==KS[e]){const d=l.apply(n,i);return a?Cn(d):d}let u=t;o!==n&&(a?u=function(d,g){return t.call(this,kn(n,d),g,n)}:t.length>2&&(u=function(d,g){return t.call(this,d,g,n)}));const h=l.call(o,u,r);return a&&s?s(h):h}function _m(n,e,t,r){const s=mu(n),i=s!==n&&!sn(n);let o=t,a=!1;s!==n&&(i?(a=r.length===0,o=function(u,h,d){return a&&(a=!1,u=kn(n,u)),t.call(this,u,kn(n,h),d,n)}):t.length>3&&(o=function(u,h,d){return t.call(this,u,h,d,n)}));const l=s[e](o,...r);return a?kn(n,l):l}function Ah(n,e,t){const r=Ce(n);Nt(r,"iterate",Pa);const s=r[e](...t);return(s===-1||s===!1)&&_u(t[0])?(t[0]=Ce(t[0]),r[e](...t)):s}function Fo(n,e,t=[]){hr(),Sf();const r=Ce(n)[e].apply(n,t);return Rf(),dr(),r}const $S=If("__proto__,__v_isRef,__isVue"),pI=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(_n));function zS(n){_n(n)||(n=String(n));const e=Ce(this);return Nt(e,"has",n),e.hasOwnProperty(n)}class gI{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?rR:vI:i?yI:_I).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let l;if(o&&(l=GS[t]))return l;if(t==="hasOwnProperty")return zS}const a=Reflect.get(e,t,nt(e)?e:r);if((_n(t)?pI.has(t):$S(t))||(s||Nt(e,"get",t),i))return a;if(nt(a)){const l=o&&du(t)?a:a.value;return s&&Le(l)?ld(l):l}return Le(a)?s?ld(a):Za(a):a}}class mI extends gI{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const o=fe(e)&&du(t);if(!this._isShallow){const u=fr(i);if(!sn(r)&&!fr(r)&&(i=Ce(i),r=Ce(r)),!o&&nt(i)&&!nt(r))return u||(i.value=r),!0}const a=o?Number(t)<e.length:xe(e,t),l=Reflect.set(e,t,r,nt(e)?e:s);return e===Ce(s)&&(a?Mn(r,i)&&nr(e,"set",t,r):nr(e,"add",t,r)),l}deleteProperty(e,t){const r=xe(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&nr(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!_n(t)||!pI.has(t))&&Nt(e,"has",t),r}ownKeys(e){return Nt(e,"iterate",fe(e)?"length":Os),Reflect.ownKeys(e)}}class HS extends gI{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const QS=new mI,YS=new HS,XS=new mI(!0);const ad=n=>n,Ml=n=>Reflect.getPrototypeOf(n);function JS(n,e,t){return function(...r){const s=this.__v_raw,i=Ce(s),o=Ni(i),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,u=s[n](...r),h=t?ad:e?Ui:Cn;return!e&&Nt(i,"iterate",l?od:Os),Tt(Object.create(u),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:a?[h(d[0]),h(d[1])]:h(d),done:g}}})}}function Ll(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ZS(n,e){const t={get(s){const i=this.__v_raw,o=Ce(i),a=Ce(s);n||(Mn(s,a)&&Nt(o,"get",s),Nt(o,"get",a));const{has:l}=Ml(o),u=e?ad:n?Ui:Cn;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!n&&Nt(Ce(s),"iterate",Os),s.size},has(s){const i=this.__v_raw,o=Ce(i),a=Ce(s);return n||(Mn(s,a)&&Nt(o,"has",s),Nt(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=Ce(a),u=e?ad:n?Ui:Cn;return!n&&Nt(l,"iterate",Os),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return Tt(t,n?{add:Ll("add"),set:Ll("set"),delete:Ll("delete"),clear:Ll("clear")}:{add(s){const i=Ce(this),o=Ml(i),a=Ce(s),l=!e&&!sn(s)&&!fr(s)?a:s;return o.has.call(i,l)||Mn(s,l)&&o.has.call(i,s)||Mn(a,l)&&o.has.call(i,a)||(i.add(l),nr(i,"add",l,l)),this},set(s,i){!e&&!sn(i)&&!fr(i)&&(i=Ce(i));const o=Ce(this),{has:a,get:l}=Ml(o);let u=a.call(o,s);u||(s=Ce(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?Mn(i,h)&&nr(o,"set",s,i):nr(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:a}=Ml(i);let l=o.call(i,s);l||(s=Ce(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&nr(i,"delete",s,void 0),u},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&nr(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=JS(s,n,e)}),t}function Nf(n,e){const t=ZS(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(xe(t,s)&&s in r?t:r,s,i)}const eR={get:Nf(!1,!1)},tR={get:Nf(!1,!0)},nR={get:Nf(!0,!1)};const _I=new WeakMap,yI=new WeakMap,vI=new WeakMap,rR=new WeakMap;function sR(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iR(n){return n.__v_skip||!Object.isExtensible(n)?0:sR(PS(n))}function Za(n){return fr(n)?n:Df(n,!1,QS,eR,_I)}function II(n){return Df(n,!1,XS,tR,yI)}function ld(n){return Df(n,!0,YS,nR,vI)}function Df(n,e,t,r,s){if(!Le(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=iR(n);if(i===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,i===2?r:t);return s.set(n,a),a}function cr(n){return fr(n)?cr(n.__v_raw):!!(n&&n.__v_isReactive)}function fr(n){return!!(n&&n.__v_isReadonly)}function sn(n){return!!(n&&n.__v_isShallow)}function _u(n){return n?!!n.__v_raw:!1}function Ce(n){const e=n&&n.__v_raw;return e?Ce(e):n}function xf(n){return!xe(n,"__v_skip")&&Object.isExtensible(n)&&Zv(n,"__v_skip",!0),n}const Cn=n=>Le(n)?Za(n):n,Ui=n=>Le(n)?ld(n):n;function nt(n){return n?n.__v_isRef===!0:!1}function vc(n){return EI(n,!1)}function oR(n){return EI(n,!0)}function EI(n,e){return nt(n)?n:new aR(n,e)}class aR{constructor(e,t){this.dep=new Pf,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ce(e),this._value=t?e:Cn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||sn(e)||fr(e);e=r?e:Ce(e),Mn(e,t)&&(this._rawValue=e,this._value=r?e:Cn(e),this.dep.trigger())}}function Vs(n){return nt(n)?n.value:n}const lR={get:(n,e,t)=>e==="__v_raw"?n:Vs(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return nt(s)&&!nt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function TI(n){return cr(n)?n:new Proxy(n,lR)}function cR(n){const e=fe(n)?new Array(n.length):{};for(const t in n)e[t]=hR(n,t);return e}class uR{constructor(e,t,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=_n(t)?t:String(t),this._raw=Ce(e);let s=!0,i=e;if(!fe(e)||_n(this._key)||!du(this._key))do s=!_u(i)||sn(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Vs(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&nt(this._raw[this._key])){const t=this._object[this._key];if(nt(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return WS(this._raw,this._key)}}function hR(n,e,t){return new uR(n,e,t)}class dR{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Pf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ca-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&qe!==this)return lI(this,!0),!0}get value(){const e=this.dep.track();return hI(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fR(n,e,t=!1){let r,s;return _e(n)?r=n:(r=n.get,s=n.set),new dR(r,s,t)}const Fl={},Ic=new WeakMap;let Is;function pR(n,e=!1,t=Is){if(t){let r=Ic.get(t);r||Ic.set(t,r=[]),r.push(n)}}function gR(n,e,t=Be){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=t,u=W=>s?W:sn(W)||s===!1||s===0?rr(W,1):rr(W);let h,d,g,m,w=!1,R=!1;if(nt(n)?(d=()=>n.value,w=sn(n)):cr(n)?(d=()=>u(n),w=!0):fe(n)?(R=!0,w=n.some(W=>cr(W)||sn(W)),d=()=>n.map(W=>{if(nt(W))return W.value;if(cr(W))return u(W);if(_e(W))return l?l(W,2):W()})):_e(n)?e?d=l?()=>l(n,2):n:d=()=>{if(g){hr();try{g()}finally{dr()}}const W=Is;Is=h;try{return l?l(n,3,[m]):n(m)}finally{Is=W}}:d=Bn,e&&s){const W=d,te=s===!0?1/0:s;d=()=>rr(W(),te)}const P=iI(),j=()=>{h.stop(),P&&P.active&&Ef(P.effects,h)};if(i&&e){const W=e;e=(...te)=>{W(...te),j()}}let k=R?new Array(n.length).fill(Fl):Fl;const M=W=>{if(!(!(h.flags&1)||!h.dirty&&!W))if(e){const te=h.run();if(s||w||(R?te.some((H,T)=>Mn(H,k[T])):Mn(te,k))){g&&g();const H=Is;Is=h;try{const T=[te,k===Fl?void 0:R&&k[0]===Fl?[]:k,m];k=te,l?l(e,3,T):e(...T)}finally{Is=H}}}else h.run()};return a&&a(M),h=new oI(d),h.scheduler=o?()=>o(M,!1):M,m=W=>pR(W,!1,h),g=h.onStop=()=>{const W=Ic.get(h);if(W){if(l)l(W,4);else for(const te of W)te();Ic.delete(h)}},e?r?M(!0):k=h.run():o?o(M.bind(null,!0),!0):h.run(),j.pause=h.pause.bind(h),j.resume=h.resume.bind(h),j.stop=j,j}function rr(n,e=1/0,t){if(e<=0||!Le(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,nt(n))rr(n.value,e,t);else if(fe(n))for(let r=0;r<n.length;r++)rr(n[r],e,t);else if(Qv(n)||Ni(n))n.forEach(r=>{rr(r,e,t)});else if(Jv(n)){for(const r in n)rr(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&rr(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function el(n,e,t,r){try{return r?n(...r):n()}catch(s){yu(s,e,t)}}function Kn(n,e,t,r){if(_e(n)){const s=el(n,e,t,r);return s&&Yv(s)&&s.catch(i=>{yu(i,e,t)}),s}if(fe(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Kn(n[i],e,t,r));return s}}function yu(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Be;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](n,l,u)===!1)return}a=a.parent}if(i){hr(),el(i,null,10,[n,l,u]),dr();return}}mR(n,t,s,r,o)}function mR(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const jt=[];let Dn=-1;const Di=[];let Vr=null,vi=0;const wI=Promise.resolve();let Ec=null;function kf(n){const e=Ec||wI;return n?e.then(this?n.bind(this):n):e}function _R(n){let e=Dn+1,t=jt.length;for(;e<t;){const r=e+t>>>1,s=jt[r],i=Na(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Of(n){if(!(n.flags&1)){const e=Na(n),t=jt[jt.length-1];!t||!(n.flags&2)&&e>=Na(t)?jt.push(n):jt.splice(_R(e),0,n),n.flags|=1,AI()}}function AI(){Ec||(Ec=wI.then(SI))}function yR(n){fe(n)?Di.push(...n):Vr&&n.id===-1?Vr.splice(vi+1,0,n):n.flags&1||(Di.push(n),n.flags|=1),AI()}function ym(n,e,t=Dn+1){for(;t<jt.length;t++){const r=jt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;jt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function bI(n){if(Di.length){const e=[...new Set(Di)].sort((t,r)=>Na(t)-Na(r));if(Di.length=0,Vr){Vr.push(...e);return}for(Vr=e,vi=0;vi<Vr.length;vi++){const t=Vr[vi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Vr=null,vi=0}}const Na=n=>n.id==null?n.flags&2?-1:1/0:n.id;function SI(n){try{for(Dn=0;Dn<jt.length;Dn++){const e=jt[Dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),el(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Dn<jt.length;Dn++){const e=jt[Dn];e&&(e.flags&=-2)}Dn=-1,jt.length=0,bI(),Ec=null,(jt.length||Di.length)&&SI()}}let tn=null,RI=null;function Tc(n){const e=tn;return tn=n,RI=n&&n.type.__scopeId||null,e}function vR(n,e=tn,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&bc(-1);const i=Tc(e);let o;try{o=n(...s)}finally{Tc(i),r._d&&bc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function MF(n,e){if(tn===null)return n;const t=Tu(tn),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Be]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&rr(o),r.push({dir:i,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function ms(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(hr(),Kn(l,t,8,[n.el,a,n,e]),dr())}}function Xl(n,e){if(kt){let t=kt.provides;const r=kt.parent&&kt.parent.provides;r===t&&(t=kt.provides=Object.create(r)),t[n]=e}}function mn(n,e,t=!1){const r=rE();if(r||Ms){let s=Ms?Ms._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&_e(e)?e.call(r&&r.proxy):e}}function IR(){return!!(rE()||Ms)}const ER=Symbol.for("v-scx"),TR=()=>mn(ER);function oa(n,e,t){return CI(n,e,t)}function CI(n,e,t=Be){const{immediate:r,deep:s,flush:i,once:o}=t,a=Tt({},t),l=e&&r||!e&&i!=="post";let u;if(xa){if(i==="sync"){const m=TR();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Bn,m.resume=Bn,m.pause=Bn,m}}const h=kt;a.call=(m,w,R)=>Kn(m,h,w,R);let d=!1;i==="post"?a.scheduler=m=>{Ut(m,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,w)=>{w?m():Of(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const g=gR(n,e,a);return xa&&(u?u.push(g):l&&g()),g}function wR(n,e,t){const r=this.proxy,s=it(n)?n.includes(".")?PI(r,n):()=>r[n]:n.bind(r,r);let i;_e(e)?i=e:(i=e.handler,t=e);const o=tl(this),a=CI(s,i.bind(r),t);return o(),a}function PI(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const _s=new WeakMap,NI=Symbol("_vte"),AR=n=>n.__isTeleport,bs=n=>n&&(n.disabled||n.disabled===""),bR=n=>n&&(n.defer||n.defer===""),vm=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Im=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,cd=(n,e)=>{const t=n&&n.to;return it(t)?e?e(t):null:t},SR={name:"Teleport",__isTeleport:!0,process(n,e,t,r,s,i,o,a,l,u){const{mc:h,pc:d,pbc:g,o:{insert:m,querySelector:w,createText:R,createComment:P}}=u,j=bs(e.props);let{dynamicChildren:k}=e;const M=(H,T,y)=>{H.shapeFlag&16&&h(H.children,T,y,s,i,o,a,l)},W=(H=e)=>{const T=bs(H.props),y=H.target=cd(H.props,w),v=ud(y,H,R,m);y&&(o!=="svg"&&vm(y)?o="svg":o!=="mathml"&&Im(y)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(y),T||(M(H,y,v),Yo(H,!1)))},te=H=>{const T=()=>{_s.get(H)===T&&(_s.delete(H),bs(H.props)&&(M(H,t,H.anchor),Yo(H,!0)),W(H))};_s.set(H,T),Ut(T,i)};if(n==null){const H=e.el=R(""),T=e.anchor=R("");if(m(H,t,r),m(T,t,r),bR(e.props)||i&&i.pendingBranch){te(e);return}j&&(M(e,t,T),Yo(e,!0)),W()}else{e.el=n.el;const H=e.anchor=n.anchor,T=_s.get(n);if(T){T.flags|=8,_s.delete(n),te(e);return}e.targetStart=n.targetStart;const y=e.target=n.target,v=e.targetAnchor=n.targetAnchor,b=bs(n.props),S=b?t:y,C=b?H:v;if(o==="svg"||vm(y)?o="svg":(o==="mathml"||Im(y))&&(o="mathml"),k?(g(n.dynamicChildren,k,S,s,i,o,a),Ff(n,e,!0)):l||d(n,e,S,C,s,i,o,a,!1),j)b?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Ul(e,t,H,u,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const E=e.target=cd(e.props,w);E&&Ul(e,E,null,u,0)}else b&&Ul(e,y,v,u,1);Yo(e,j)}},remove(n,e,t,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:l,targetStart:u,targetAnchor:h,target:d,props:g}=n;let m=i||!bs(g);const w=_s.get(n);if(w&&(w.flags|=8,_s.delete(n),m=!1),d&&(s(u),s(h)),i&&s(l),o&16)for(let R=0;R<a.length;R++){const P=a[R];r(P,e,t,m,!!P.dynamicChildren)}},move:Ul,hydrate:RR};function Ul(n,e,t,{o:{insert:r},m:s},i=2){i===0&&r(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:u,props:h}=n,d=i===2;if(d&&r(o,e,t),(!d||bs(h))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,t,2);d&&r(a,e,t)}function RR(n,e,t,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:u,createText:h}},d){function g(P,j){let k=j;for(;k;){if(k&&k.nodeType===8){if(k.data==="teleport start anchor")e.targetStart=k;else if(k.data==="teleport anchor"){e.targetAnchor=k,P._lpa=e.targetAnchor&&o(e.targetAnchor);break}}k=o(k)}}function m(P,j){j.anchor=d(o(P),j,a(P),t,r,s,i)}const w=e.target=cd(e.props,l),R=bs(e.props);if(w){const P=w._lpa||w.firstChild;e.shapeFlag&16&&(R?(m(n,e),g(w,P),e.targetAnchor||ud(w,e,h,u,a(n)===w?n:null)):(e.anchor=o(n),g(w,P),e.targetAnchor||ud(w,e,h,u),d(P&&o(P),e,w,t,r,s,i))),Yo(e,R)}else R&&e.shapeFlag&16&&(m(n,e),e.targetStart=n,e.targetAnchor=o(n));return e.anchor&&o(e.anchor)}const LF=SR;function Yo(n,e){const t=n.ctx;if(t&&t.ut){let r,s;for(e?(r=n.el,s=n.anchor):(r=n.targetStart,s=n.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",t.uid),r=r.nextSibling;t.ut()}}function ud(n,e,t,r,s=null){const i=e.targetStart=t(""),o=e.targetAnchor=t("");return i[NI]=o,n&&(r(i,n,s),r(o,n,s)),o}const CR=Symbol("_leaveCb");function Vf(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Vf(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function DI(n,e){return _e(n)?Tt({name:n.name},e,{setup:n}):n}function xI(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Em(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const wc=new WeakMap;function aa(n,e,t,r,s=!1){if(fe(n)){n.forEach((R,P)=>aa(R,e&&(fe(e)?e[P]:e),t,r,s));return}if(la(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&aa(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Tu(r.component):r.el,o=s?null:i,{i:a,r:l}=n,u=e&&e.r,h=a.refs===Be?a.refs={}:a.refs,d=a.setupState,g=Ce(d),m=d===Be?Hv:R=>Em(h,R)?!1:xe(g,R),w=(R,P)=>!(P&&Em(h,P));if(u!=null&&u!==l){if(Tm(e),it(u))h[u]=null,m(u)&&(d[u]=null);else if(nt(u)){const R=e;w(u,R.k)&&(u.value=null),R.k&&(h[R.k]=null)}}if(_e(l))el(l,a,12,[o,h]);else{const R=it(l),P=nt(l);if(R||P){const j=()=>{if(n.f){const k=R?m(l)?d[l]:h[l]:w()||!n.k?l.value:h[n.k];if(s)fe(k)&&Ef(k,i);else if(fe(k))k.includes(i)||k.push(i);else if(R)h[l]=[i],m(l)&&(d[l]=h[l]);else{const M=[i];w(l,n.k)&&(l.value=M),n.k&&(h[n.k]=M)}}else R?(h[l]=o,m(l)&&(d[l]=o)):P&&(w(l,n.k)&&(l.value=o),n.k&&(h[n.k]=o))};if(o){const k=()=>{j(),wc.delete(n)};k.id=-1,wc.set(n,k),Ut(k,t)}else Tm(n),j()}}}function Tm(n){const e=wc.get(n);e&&(e.flags|=8,wc.delete(n))}gu().requestIdleCallback;gu().cancelIdleCallback;const la=n=>!!n.type.__asyncLoader,kI=n=>n.type.__isKeepAlive;function PR(n,e){OI(n,"a",e)}function NR(n,e){OI(n,"da",e)}function OI(n,e,t=kt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(vu(e,r,t),t){let s=t.parent;for(;s&&s.parent;)kI(s.parent.vnode)&&DR(r,e,t,s),s=s.parent}}function DR(n,e,t,r){const s=vu(e,n,r,!0);VI(()=>{Ef(r[e],s)},t)}function vu(n,e,t=kt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{hr();const a=tl(t),l=Kn(e,t,n,o);return a(),dr(),l});return r?s.unshift(i):s.push(i),i}}const vr=n=>(e,t=kt)=>{(!xa||n==="sp")&&vu(n,(...r)=>e(...r),t)},xR=vr("bm"),kR=vr("m"),OR=vr("bu"),VR=vr("u"),MR=vr("bum"),VI=vr("um"),LR=vr("sp"),FR=vr("rtg"),UR=vr("rtc");function BR(n,e=kt){vu("ec",n,e)}const jR="components";function qR(n,e){return GR(jR,n,!0,e)||n}const WR=Symbol.for("v-ndc");function GR(n,e,t=!0,r=!1){const s=tn||kt;if(s){const i=s.type;{const a=PC(i,!1);if(a&&(a===e||a===Wt(e)||a===pu(Wt(e))))return i}const o=wm(s[n]||i[n],e)||wm(s.appContext[n],e);return!o&&r?i:o}}function wm(n,e){return n&&(n[e]||n[Wt(e)]||n[pu(Wt(e))])}function FF(n,e,t,r){let s;const i=t,o=fe(n);if(o||it(n)){const a=o&&cr(n);let l=!1,u=!1;a&&(l=!sn(n),u=fr(n),n=mu(n)),s=new Array(n.length);for(let h=0,d=n.length;h<d;h++)s[h]=e(l?u?Ui(Cn(n[h])):Cn(n[h]):n[h],h,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,i)}else if(Le(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(n[h],h,l,i)}}else s=[];return s}const hd=n=>n?sE(n)?Tu(n):hd(n.parent):null,ca=Tt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>hd(n.parent),$root:n=>hd(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>LI(n),$forceUpdate:n=>n.f||(n.f=()=>{Of(n.update)}),$nextTick:n=>n.n||(n.n=kf.bind(n.proxy)),$watch:n=>wR.bind(n)}),bh=(n,e)=>n!==Be&&!n.__isScriptSetup&&xe(n,e),KR={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(bh(r,e))return o[e]=1,r[e];if(s!==Be&&xe(s,e))return o[e]=2,s[e];if(xe(i,e))return o[e]=3,i[e];if(t!==Be&&xe(t,e))return o[e]=4,t[e];dd&&(o[e]=0)}}const u=ca[e];let h,d;if(u)return e==="$attrs"&&Nt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Be&&xe(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,xe(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return bh(s,e)?(s[e]=t,!0):r!==Be&&xe(r,e)?(r[e]=t,!0):xe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:o}},a){let l;return!!(t[a]||n!==Be&&a[0]!=="$"&&xe(n,a)||bh(e,a)||xe(i,a)||xe(r,a)||xe(ca,a)||xe(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:xe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Am(n){return fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let dd=!0;function $R(n){const e=LI(n),t=n.proxy,r=n.ctx;dd=!1,e.beforeCreate&&bm(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:g,beforeUpdate:m,updated:w,activated:R,deactivated:P,beforeDestroy:j,beforeUnmount:k,destroyed:M,unmounted:W,render:te,renderTracked:H,renderTriggered:T,errorCaptured:y,serverPrefetch:v,expose:b,inheritAttrs:S,components:C,directives:E,filters:yt}=e;if(u&&zR(u,r,null),o)for(const pe in o){const Ee=o[pe];_e(Ee)&&(r[pe]=Ee.bind(t))}if(s){const pe=s.call(t,t);Le(pe)&&(n.data=Za(pe))}if(dd=!0,i)for(const pe in i){const Ee=i[pe],Xt=_e(Ee)?Ee.bind(t,t):_e(Ee.get)?Ee.get.bind(t,t):Bn,vn=!_e(Ee)&&_e(Ee.set)?Ee.set.bind(t):Bn,cn=dn({get:Xt,set:vn});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>cn.value,set:He=>cn.value=He})}if(a)for(const pe in a)MI(a[pe],r,t,pe);if(l){const pe=_e(l)?l.call(t):l;Reflect.ownKeys(pe).forEach(Ee=>{Xl(Ee,pe[Ee])})}h&&bm(h,n,"c");function je(pe,Ee){fe(Ee)?Ee.forEach(Xt=>pe(Xt.bind(t))):Ee&&pe(Ee.bind(t))}if(je(xR,d),je(kR,g),je(OR,m),je(VR,w),je(PR,R),je(NR,P),je(BR,y),je(UR,H),je(FR,T),je(MR,k),je(VI,W),je(LR,v),fe(b))if(b.length){const pe=n.exposed||(n.exposed={});b.forEach(Ee=>{Object.defineProperty(pe,Ee,{get:()=>t[Ee],set:Xt=>t[Ee]=Xt,enumerable:!0})})}else n.exposed||(n.exposed={});te&&n.render===Bn&&(n.render=te),S!=null&&(n.inheritAttrs=S),C&&(n.components=C),E&&(n.directives=E),v&&xI(n)}function zR(n,e,t=Bn){fe(n)&&(n=fd(n));for(const r in n){const s=n[r];let i;Le(s)?"default"in s?i=mn(s.from||r,s.default,!0):i=mn(s.from||r):i=mn(s),nt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function bm(n,e,t){Kn(fe(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function MI(n,e,t,r){let s=r.includes(".")?PI(t,r):()=>t[r];if(it(n)){const i=e[n];_e(i)&&oa(s,i)}else if(_e(n))oa(s,n.bind(t));else if(Le(n))if(fe(n))n.forEach(i=>MI(i,e,t,r));else{const i=_e(n.handler)?n.handler.bind(t):e[n.handler];_e(i)&&oa(s,i,n)}}function LI(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(u=>Ac(l,u,o,!0)),Ac(l,e,o)),Le(e)&&i.set(e,l),l}function Ac(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Ac(n,i,t,!0),s&&s.forEach(o=>Ac(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=HR[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const HR={data:Sm,props:Rm,emits:Rm,methods:Xo,computed:Xo,beforeCreate:Ft,created:Ft,beforeMount:Ft,mounted:Ft,beforeUpdate:Ft,updated:Ft,beforeDestroy:Ft,beforeUnmount:Ft,destroyed:Ft,unmounted:Ft,activated:Ft,deactivated:Ft,errorCaptured:Ft,serverPrefetch:Ft,components:Xo,directives:Xo,watch:YR,provide:Sm,inject:QR};function Sm(n,e){return e?n?function(){return Tt(_e(n)?n.call(this,this):n,_e(e)?e.call(this,this):e)}:e:n}function QR(n,e){return Xo(fd(n),fd(e))}function fd(n){if(fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ft(n,e){return n?[...new Set([].concat(n,e))]:e}function Xo(n,e){return n?Tt(Object.create(null),n,e):e}function Rm(n,e){return n?fe(n)&&fe(e)?[...new Set([...n,...e])]:Tt(Object.create(null),Am(n),Am(e??{})):e}function YR(n,e){if(!n)return e;if(!e)return n;const t=Tt(Object.create(null),n);for(const r in e)t[r]=Ft(n[r],e[r]);return t}function FI(){return{app:null,config:{isNativeTag:Hv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let XR=0;function JR(n,e){return function(r,s=null){_e(r)||(r=Tt({},r)),s!=null&&!Le(s)&&(s=null);const i=FI(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:XR++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:DC,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&_e(h.install)?(o.add(h),h.install(u,...d)):_e(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,g){if(!l){const m=u._ceVNode||zt(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),n(m,h,g),l=!0,u._container=h,h.__vue_app__=u,Tu(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Kn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=Ms;Ms=u;try{return h()}finally{Ms=d}}};return u}}let Ms=null;const ZR=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Wt(e)}Modifiers`]||n[`${os(e)}Modifiers`];function eC(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Be;let s=t;const i=e.startsWith("update:"),o=i&&ZR(r,e.slice(7));o&&(o.trim&&(s=t.map(h=>it(h)?h.trim():h)),o.number&&(s=t.map(Tf)));let a,l=r[a=Ih(e)]||r[a=Ih(Wt(e))];!l&&i&&(l=r[a=Ih(os(e))]),l&&Kn(l,n,6,s);const u=r[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Kn(u,n,6,s)}}const tC=new WeakMap;function UI(n,e,t=!1){const r=t?tC:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},a=!1;if(!_e(n)){const l=u=>{const h=UI(u,e,!0);h&&(a=!0,Tt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!a?(Le(n)&&r.set(n,null),null):(fe(i)?i.forEach(l=>o[l]=null):Tt(o,i),Le(n)&&r.set(n,o),o)}function Iu(n,e){return!n||!uu(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(n,e[0].toLowerCase()+e.slice(1))||xe(n,os(e))||xe(n,e))}function Cm(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:g,setupState:m,ctx:w,inheritAttrs:R}=n,P=Tc(n);let j,k;try{if(t.shapeFlag&4){const W=s||r,te=W;j=On(u.call(te,W,h,d,m,g,w)),k=a}else{const W=e;j=On(W.length>1?W(d,{attrs:a,slots:o,emit:l}):W(d,null)),k=e.props?a:nC(a)}}catch(W){ua.length=0,yu(W,n,1),j=zt(Xr)}let M=j;if(k&&R!==!1){const W=Object.keys(k),{shapeFlag:te}=M;W.length&&te&7&&(i&&W.some(hu)&&(k=rC(k,i)),M=Bi(M,k,!1,!0))}return t.dirs&&(M=Bi(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&Vf(M,t.transition),j=M,Tc(P),j}const nC=n=>{let e;for(const t in n)(t==="class"||t==="style"||uu(t))&&((e||(e={}))[t]=n[t]);return e},rC=(n,e)=>{const t={};for(const r in n)(!hu(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function sC(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Pm(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const g=h[d];if(BI(o,r,g)&&!Iu(u,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Pm(r,o,u):!0:!!o;return!1}function Pm(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(BI(e,n,i)&&!Iu(t,i))return!0}return!1}function BI(n,e,t){const r=n[t],s=e[t];return t==="style"&&Le(r)&&Le(s)?!bf(r,s):r!==s}function iC({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const jI={},qI=()=>Object.create(jI),WI=n=>Object.getPrototypeOf(n)===jI;function oC(n,e,t,r=!1){const s={},i=qI();n.propsDefaults=Object.create(null),GI(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:II(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function aC(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,a=Ce(s),[l]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=n.vnode.dynamicProps;for(let d=0;d<h.length;d++){let g=h[d];if(Iu(n.emitsOptions,g))continue;const m=e[g];if(l)if(xe(i,g))m!==i[g]&&(i[g]=m,u=!0);else{const w=Wt(g);s[w]=pd(l,a,w,m,n,!1)}else m!==i[g]&&(i[g]=m,u=!0)}}}else{GI(n,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!xe(e,d)&&((h=os(d))===d||!xe(e,h)))&&(l?t&&(t[d]!==void 0||t[h]!==void 0)&&(s[d]=pd(l,a,d,void 0,n,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!xe(e,d))&&(delete i[d],u=!0)}u&&nr(n.attrs,"set","")}function GI(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(ra(l))continue;const u=e[l];let h;s&&xe(s,h=Wt(l))?!i||!i.includes(h)?t[h]=u:(a||(a={}))[h]=u:Iu(n.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ce(t),u=a||Be;for(let h=0;h<i.length;h++){const d=i[h];t[d]=pd(s,l,d,u[d],n,!xe(u,d))}}return o}function pd(n,e,t,r,s,i){const o=n[t];if(o!=null){const a=xe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&_e(l)){const{propsDefaults:u}=s;if(t in u)r=u[t];else{const h=tl(s);r=u[t]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(t,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===os(t))&&(r=!0))}return r}const lC=new WeakMap;function KI(n,e,t=!1){const r=t?lC:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},a=[];let l=!1;if(!_e(n)){const h=d=>{l=!0;const[g,m]=KI(d,e,!0);Tt(o,g),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(h),n.extends&&h(n.extends),n.mixins&&n.mixins.forEach(h)}if(!i&&!l)return Le(n)&&r.set(n,Pi),Pi;if(fe(i))for(let h=0;h<i.length;h++){const d=Wt(i[h]);Nm(d)&&(o[d]=Be)}else if(i)for(const h in i){const d=Wt(h);if(Nm(d)){const g=i[h],m=o[d]=fe(g)||_e(g)?{type:g}:Tt({},g),w=m.type;let R=!1,P=!0;if(fe(w))for(let j=0;j<w.length;++j){const k=w[j],M=_e(k)&&k.name;if(M==="Boolean"){R=!0;break}else M==="String"&&(P=!1)}else R=_e(w)&&w.name==="Boolean";m[0]=R,m[1]=P,(R||xe(m,"default"))&&a.push(d)}}const u=[o,a];return Le(n)&&r.set(n,u),u}function Nm(n){return n[0]!=="$"&&!ra(n)}const Mf=n=>n==="_"||n==="_ctx"||n==="$stable",Lf=n=>fe(n)?n.map(On):[On(n)],cC=(n,e,t)=>{if(e._n)return e;const r=vR((...s)=>Lf(e(...s)),t);return r._c=!1,r},$I=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Mf(s))continue;const i=n[s];if(_e(i))e[s]=cC(s,i,r);else if(i!=null){const o=Lf(i);e[s]=()=>o}}},zI=(n,e)=>{const t=Lf(e);n.slots.default=()=>t},HI=(n,e,t)=>{for(const r in e)(t||!Mf(r))&&(n[r]=e[r])},uC=(n,e,t)=>{const r=n.slots=qI();if(n.vnode.shapeFlag&32){const s=e._;s?(HI(r,e,t),t&&Zv(r,"_",s,!0)):$I(e,r)}else e&&zI(n,e)},hC=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Be;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:HI(s,e,t):(i=!e.$stable,$I(e,s)),o=e}else e&&(zI(n,e),o={default:1});if(i)for(const a in s)!Mf(a)&&o[a]==null&&delete s[a]},Ut=mC;function dC(n){return fC(n)}function fC(n,e){const t=gu();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:g,setScopeId:m=Bn,insertStaticContent:w}=n,R=(I,A,N,L=null,B=null,U=null,X=void 0,Q=null,K=!!A.dynamicChildren)=>{if(I===A)return;I&&!Uo(I,A)&&(L=F(I),He(I,B,U,!0),I=null),A.patchFlag===-2&&(K=!1,A.dynamicChildren=null);const{type:G,ref:ce,shapeFlag:ee}=A;switch(G){case Eu:P(I,A,N,L);break;case Xr:j(I,A,N,L);break;case Jl:I==null&&k(A,N,L,X);break;case er:C(I,A,N,L,B,U,X,Q,K);break;default:ee&1?te(I,A,N,L,B,U,X,Q,K):ee&6?E(I,A,N,L,B,U,X,Q,K):(ee&64||ee&128)&&G.process(I,A,N,L,B,U,X,Q,K,oe)}ce!=null&&B?aa(ce,I&&I.ref,U,A||I,!A):ce==null&&I&&I.ref!=null&&aa(I.ref,null,U,I,!0)},P=(I,A,N,L)=>{if(I==null)r(A.el=a(A.children),N,L);else{const B=A.el=I.el;A.children!==I.children&&u(B,A.children)}},j=(I,A,N,L)=>{I==null?r(A.el=l(A.children||""),N,L):A.el=I.el},k=(I,A,N,L)=>{[I.el,I.anchor]=w(I.children,A,N,L,I.el,I.anchor)},M=({el:I,anchor:A},N,L)=>{let B;for(;I&&I!==A;)B=g(I),r(I,N,L),I=B;r(A,N,L)},W=({el:I,anchor:A})=>{let N;for(;I&&I!==A;)N=g(I),s(I),I=N;s(A)},te=(I,A,N,L,B,U,X,Q,K)=>{if(A.type==="svg"?X="svg":A.type==="math"&&(X="mathml"),I==null)H(A,N,L,B,U,X,Q,K);else{const G=I.el&&I.el._isVueCE?I.el:null;try{G&&G._beginPatch(),v(I,A,B,U,X,Q,K)}finally{G&&G._endPatch()}}},H=(I,A,N,L,B,U,X,Q)=>{let K,G;const{props:ce,shapeFlag:ee,transition:ae,dirs:ue}=I;if(K=I.el=o(I.type,U,ce&&ce.is,ce),ee&8?h(K,I.children):ee&16&&y(I.children,K,null,L,B,Sh(I,U),X,Q),ue&&ms(I,null,L,"created"),T(K,I,I.scopeId,X,L),ce){for(const me in ce)me!=="value"&&!ra(me)&&i(K,me,null,ce[me],U,L);"value"in ce&&i(K,"value",null,ce.value,U),(G=ce.onVnodeBeforeMount)&&Nn(G,L,I)}ue&&ms(I,null,L,"beforeMount");const he=pC(B,ae);he&&ae.beforeEnter(K),r(K,A,N),((G=ce&&ce.onVnodeMounted)||he||ue)&&Ut(()=>{try{G&&Nn(G,L,I),he&&ae.enter(K),ue&&ms(I,null,L,"mounted")}finally{}},B)},T=(I,A,N,L,B)=>{if(N&&m(I,N),L)for(let U=0;U<L.length;U++)m(I,L[U]);if(B){let U=B.subTree;if(A===U||XI(U.type)&&(U.ssContent===A||U.ssFallback===A)){const X=B.vnode;T(I,X,X.scopeId,X.slotScopeIds,B.parent)}}},y=(I,A,N,L,B,U,X,Q,K=0)=>{for(let G=K;G<I.length;G++){const ce=I[G]=Q?tr(I[G]):On(I[G]);R(null,ce,A,N,L,B,U,X,Q)}},v=(I,A,N,L,B,U,X)=>{const Q=A.el=I.el;let{patchFlag:K,dynamicChildren:G,dirs:ce}=A;K|=I.patchFlag&16;const ee=I.props||Be,ae=A.props||Be;let ue;if(N&&ys(N,!1),(ue=ae.onVnodeBeforeUpdate)&&Nn(ue,N,A,I),ce&&ms(A,I,N,"beforeUpdate"),N&&ys(N,!0),(ee.innerHTML&&ae.innerHTML==null||ee.textContent&&ae.textContent==null)&&h(Q,""),G?b(I.dynamicChildren,G,Q,N,L,Sh(A,B),U):X||Ee(I,A,Q,null,N,L,Sh(A,B),U,!1),K>0){if(K&16)S(Q,ee,ae,N,B);else if(K&2&&ee.class!==ae.class&&i(Q,"class",null,ae.class,B),K&4&&i(Q,"style",ee.style,ae.style,B),K&8){const he=A.dynamicProps;for(let me=0;me<he.length;me++){const Pe=he[me],Ye=ee[Pe],at=ae[Pe];(at!==Ye||Pe==="value")&&i(Q,Pe,Ye,at,B,N)}}K&1&&I.children!==A.children&&h(Q,A.children)}else!X&&G==null&&S(Q,ee,ae,N,B);((ue=ae.onVnodeUpdated)||ce)&&Ut(()=>{ue&&Nn(ue,N,A,I),ce&&ms(A,I,N,"updated")},L)},b=(I,A,N,L,B,U,X)=>{for(let Q=0;Q<A.length;Q++){const K=I[Q],G=A[Q],ce=K.el&&(K.type===er||!Uo(K,G)||K.shapeFlag&198)?d(K.el):N;R(K,G,ce,null,L,B,U,X,!0)}},S=(I,A,N,L,B)=>{if(A!==N){if(A!==Be)for(const U in A)!ra(U)&&!(U in N)&&i(I,U,A[U],null,B,L);for(const U in N){if(ra(U))continue;const X=N[U],Q=A[U];X!==Q&&U!=="value"&&i(I,U,Q,X,B,L)}"value"in N&&i(I,"value",A.value,N.value,B)}},C=(I,A,N,L,B,U,X,Q,K)=>{const G=A.el=I?I.el:a(""),ce=A.anchor=I?I.anchor:a("");let{patchFlag:ee,dynamicChildren:ae,slotScopeIds:ue}=A;ue&&(Q=Q?Q.concat(ue):ue),I==null?(r(G,N,L),r(ce,N,L),y(A.children||[],N,ce,B,U,X,Q,K)):ee>0&&ee&64&&ae&&I.dynamicChildren&&I.dynamicChildren.length===ae.length?(b(I.dynamicChildren,ae,N,B,U,X,Q),(A.key!=null||B&&A===B.subTree)&&Ff(I,A,!0)):Ee(I,A,N,ce,B,U,X,Q,K)},E=(I,A,N,L,B,U,X,Q,K)=>{A.slotScopeIds=Q,I==null?A.shapeFlag&512?B.ctx.activate(A,N,L,X,K):yt(A,N,L,B,U,X,K):Kt(I,A,K)},yt=(I,A,N,L,B,U,X)=>{const Q=I.component=AC(I,L,B);if(kI(I)&&(Q.ctx.renderer=oe),bC(Q,!1,X),Q.asyncDep){if(B&&B.registerDep(Q,je,X),!I.el){const K=Q.subTree=zt(Xr);j(null,K,A,N),I.placeholder=K.el}}else je(Q,I,A,N,B,U,X)},Kt=(I,A,N)=>{const L=A.component=I.component;if(sC(I,A,N))if(L.asyncDep&&!L.asyncResolved){pe(L,A,N);return}else L.next=A,L.update();else A.el=I.el,L.vnode=A},je=(I,A,N,L,B,U,X)=>{const Q=()=>{if(I.isMounted){let{next:ee,bu:ae,u:ue,parent:he,vnode:me}=I;{const wt=QI(I);if(wt){ee&&(ee.el=me.el,pe(I,ee,X)),wt.asyncDep.then(()=>{Ut(()=>{I.isUnmounted||G()},B)});return}}let Pe=ee,Ye;ys(I,!1),ee?(ee.el=me.el,pe(I,ee,X)):ee=me,ae&&Yl(ae),(Ye=ee.props&&ee.props.onVnodeBeforeUpdate)&&Nn(Ye,he,ee,me),ys(I,!0);const at=Cm(I),un=I.subTree;I.subTree=at,R(un,at,d(un.el),F(un),I,B,U),ee.el=at.el,Pe===null&&iC(I,at.el),ue&&Ut(ue,B),(Ye=ee.props&&ee.props.onVnodeUpdated)&&Ut(()=>Nn(Ye,he,ee,me),B)}else{let ee;const{el:ae,props:ue}=A,{bm:he,m:me,parent:Pe,root:Ye,type:at}=I,un=la(A);ys(I,!1),he&&Yl(he),!un&&(ee=ue&&ue.onVnodeBeforeMount)&&Nn(ee,Pe,A),ys(I,!0);{Ye.ce&&Ye.ce._hasShadowRoot()&&Ye.ce._injectChildStyle(at,I.parent?I.parent.type:void 0);const wt=I.subTree=Cm(I);R(null,wt,N,L,I,B,U),A.el=wt.el}if(me&&Ut(me,B),!un&&(ee=ue&&ue.onVnodeMounted)){const wt=A;Ut(()=>Nn(ee,Pe,wt),B)}(A.shapeFlag&256||Pe&&la(Pe.vnode)&&Pe.vnode.shapeFlag&256)&&I.a&&Ut(I.a,B),I.isMounted=!0,A=N=L=null}};I.scope.on();const K=I.effect=new oI(Q);I.scope.off();const G=I.update=K.run.bind(K),ce=I.job=K.runIfDirty.bind(K);ce.i=I,ce.id=I.uid,K.scheduler=()=>Of(ce),ys(I,!0),G()},pe=(I,A,N)=>{A.component=I;const L=I.vnode.props;I.vnode=A,I.next=null,aC(I,A.props,L,N),hC(I,A.children,N),hr(),ym(I),dr()},Ee=(I,A,N,L,B,U,X,Q,K=!1)=>{const G=I&&I.children,ce=I?I.shapeFlag:0,ee=A.children,{patchFlag:ae,shapeFlag:ue}=A;if(ae>0){if(ae&128){vn(G,ee,N,L,B,U,X,Q,K);return}else if(ae&256){Xt(G,ee,N,L,B,U,X,Q,K);return}}ue&8?(ce&16&&$t(G,B,U),ee!==G&&h(N,ee)):ce&16?ue&16?vn(G,ee,N,L,B,U,X,Q,K):$t(G,B,U,!0):(ce&8&&h(N,""),ue&16&&y(ee,N,L,B,U,X,Q,K))},Xt=(I,A,N,L,B,U,X,Q,K)=>{I=I||Pi,A=A||Pi;const G=I.length,ce=A.length,ee=Math.min(G,ce);let ae;for(ae=0;ae<ee;ae++){const ue=A[ae]=K?tr(A[ae]):On(A[ae]);R(I[ae],ue,N,null,B,U,X,Q,K)}G>ce?$t(I,B,U,!0,!1,ee):y(A,N,L,B,U,X,Q,K,ee)},vn=(I,A,N,L,B,U,X,Q,K)=>{let G=0;const ce=A.length;let ee=I.length-1,ae=ce-1;for(;G<=ee&&G<=ae;){const ue=I[G],he=A[G]=K?tr(A[G]):On(A[G]);if(Uo(ue,he))R(ue,he,N,null,B,U,X,Q,K);else break;G++}for(;G<=ee&&G<=ae;){const ue=I[ee],he=A[ae]=K?tr(A[ae]):On(A[ae]);if(Uo(ue,he))R(ue,he,N,null,B,U,X,Q,K);else break;ee--,ae--}if(G>ee){if(G<=ae){const ue=ae+1,he=ue<ce?A[ue].el:L;for(;G<=ae;)R(null,A[G]=K?tr(A[G]):On(A[G]),N,he,B,U,X,Q,K),G++}}else if(G>ae)for(;G<=ee;)He(I[G],B,U,!0),G++;else{const ue=G,he=G,me=new Map;for(G=he;G<=ae;G++){const vt=A[G]=K?tr(A[G]):On(A[G]);vt.key!=null&&me.set(vt.key,G)}let Pe,Ye=0;const at=ae-he+1;let un=!1,wt=0;const br=new Array(at);for(G=0;G<at;G++)br[G]=0;for(G=ue;G<=ee;G++){const vt=I[G];if(Ye>=at){He(vt,B,U,!0);continue}let hn;if(vt.key!=null)hn=me.get(vt.key);else for(Pe=he;Pe<=ae;Pe++)if(br[Pe-he]===0&&Uo(vt,A[Pe])){hn=Pe;break}hn===void 0?He(vt,B,U,!0):(br[hn-he]=G+1,hn>=wt?wt=hn:un=!0,R(vt,A[hn],N,null,B,U,X,Q,K),Ye++)}const bo=un?gC(br):Pi;for(Pe=bo.length-1,G=at-1;G>=0;G--){const vt=he+G,hn=A[vt],Il=A[vt+1],ii=vt+1<ce?Il.el||YI(Il):L;br[G]===0?R(null,hn,N,ii,B,U,X,Q,K):un&&(Pe<0||G!==bo[Pe]?cn(hn,N,ii,2):Pe--)}}},cn=(I,A,N,L,B=null)=>{const{el:U,type:X,transition:Q,children:K,shapeFlag:G}=I;if(G&6){cn(I.component.subTree,A,N,L);return}if(G&128){I.suspense.move(A,N,L);return}if(G&64){X.move(I,A,N,oe);return}if(X===er){r(U,A,N);for(let ee=0;ee<K.length;ee++)cn(K[ee],A,N,L);r(I.anchor,A,N);return}if(X===Jl){M(I,A,N);return}if(L!==2&&G&1&&Q)if(L===0)Q.beforeEnter(U),r(U,A,N),Ut(()=>Q.enter(U),B);else{const{leave:ee,delayLeave:ae,afterLeave:ue}=Q,he=()=>{I.ctx.isUnmounted?s(U):r(U,A,N)},me=()=>{U._isLeaving&&U[CR](!0),ee(U,()=>{he(),ue&&ue()})};ae?ae(U,he,me):me()}else r(U,A,N)},He=(I,A,N,L=!1,B=!1)=>{const{type:U,props:X,ref:Q,children:K,dynamicChildren:G,shapeFlag:ce,patchFlag:ee,dirs:ae,cacheIndex:ue,memo:he}=I;if(ee===-2&&(B=!1),Q!=null&&(hr(),aa(Q,null,N,I,!0),dr()),ue!=null&&(A.renderCache[ue]=void 0),ce&256){A.ctx.deactivate(I);return}const me=ce&1&&ae,Pe=!la(I);let Ye;if(Pe&&(Ye=X&&X.onVnodeBeforeUnmount)&&Nn(Ye,A,I),ce&6)Jt(I.component,N,L);else{if(ce&128){I.suspense.unmount(N,L);return}me&&ms(I,null,A,"beforeUnmount"),ce&64?I.type.remove(I,A,N,oe,L):G&&!G.hasOnce&&(U!==er||ee>0&&ee&64)?$t(G,A,N,!1,!0):(U===er&&ee&384||!B&&ce&16)&&$t(K,A,N),L&&Qe(I)}const at=he!=null&&ue==null;(Pe&&(Ye=X&&X.onVnodeUnmounted)||me||at)&&Ut(()=>{Ye&&Nn(Ye,A,I),me&&ms(I,null,A,"unmounted"),at&&(I.el=null)},N)},Qe=I=>{const{type:A,el:N,anchor:L,transition:B}=I;if(A===er){Ar(N,L);return}if(A===Jl){W(I);return}const U=()=>{s(N),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(I.shapeFlag&1&&B&&!B.persisted){const{leave:X,delayLeave:Q}=B,K=()=>X(N,U);Q?Q(I.el,U,K):K()}else U()},Ar=(I,A)=>{let N;for(;I!==A;)N=g(I),s(I),I=N;s(A)},Jt=(I,A,N)=>{const{bum:L,scope:B,job:U,subTree:X,um:Q,m:K,a:G}=I;Dm(K),Dm(G),L&&Yl(L),B.stop(),U&&(U.flags|=8,He(X,I,A,N)),Q&&Ut(Q,A),Ut(()=>{I.isUnmounted=!0},A)},$t=(I,A,N,L=!1,B=!1,U=0)=>{for(let X=U;X<I.length;X++)He(I[X],A,N,L,B)},F=I=>{if(I.shapeFlag&6)return F(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const A=g(I.anchor||I.el),N=A&&A[NI];return N?g(N):A};let ne=!1;const Z=(I,A,N)=>{let L;I==null?A._vnode&&(He(A._vnode,null,null,!0),L=A._vnode.component):R(A._vnode||null,I,A,null,null,null,N),A._vnode=I,ne||(ne=!0,ym(L),bI(),ne=!1)},oe={p:R,um:He,m:cn,r:Qe,mt:yt,mc:y,pc:Ee,pbc:b,n:F,o:n};return{render:Z,hydrate:void 0,createApp:JR(Z)}}function Sh({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ys({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function pC(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Ff(n,e,t=!1){const r=n.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=tr(s[i]),a.el=o.el),!t&&a.patchFlag!==-2&&Ff(o,a)),a.type===Eu&&(a.patchFlag===-1&&(a=s[i]=tr(a)),a.el=o.el),a.type===Xr&&!a.el&&(a.el=o.el)}}function gC(n){const e=n.slice(),t=[0];let r,s,i,o,a;const l=n.length;for(r=0;r<l;r++){const u=n[r];if(u!==0){if(s=t[t.length-1],n[s]<u){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}function QI(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:QI(e)}function Dm(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function YI(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?YI(e.subTree):null}const XI=n=>n.__isSuspense;function mC(n,e){e&&e.pendingBranch?fe(n)?e.effects.push(...n):e.effects.push(n):yR(n)}const er=Symbol.for("v-fgt"),Eu=Symbol.for("v-txt"),Xr=Symbol.for("v-cmt"),Jl=Symbol.for("v-stc"),ua=[];let nn=null;function JI(n=!1){ua.push(nn=n?null:[])}function _C(){ua.pop(),nn=ua[ua.length-1]||null}let Da=1;function bc(n,e=!1){Da+=n,n<0&&nn&&e&&(nn.hasOnce=!0)}function ZI(n){return n.dynamicChildren=Da>0?nn||Pi:null,_C(),Da>0&&nn&&nn.push(n),n}function UF(n,e,t,r,s,i){return ZI(nE(n,e,t,r,s,i,!0))}function eE(n,e,t,r,s){return ZI(zt(n,e,t,r,s,!0))}function Sc(n){return n?n.__v_isVNode===!0:!1}function Uo(n,e){return n.type===e.type&&n.key===e.key}const tE=({key:n})=>n??null,Zl=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?it(n)||nt(n)||_e(n)?{i:tn,r:n,k:e,f:!!t}:n:null);function nE(n,e=null,t=null,r=0,s=null,i=n===er?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&tE(e),ref:e&&Zl(e),scopeId:RI,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:tn};return a?(Uf(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=it(t)?8:16),Da>0&&!o&&nn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&nn.push(l),l}const zt=yC;function yC(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===WR)&&(n=Xr),Sc(n)){const a=Bi(n,e,!0);return t&&Uf(a,t),Da>0&&!i&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag=-2,a}if(NC(n)&&(n=n.__vccOpts),e){e=vC(e);let{class:a,style:l}=e;a&&!it(a)&&(e.class=Af(a)),Le(l)&&(_u(l)&&!fe(l)&&(l=Tt({},l)),e.style=wf(l))}const o=it(n)?1:XI(n)?128:AR(n)?64:Le(n)?4:_e(n)?2:0;return nE(n,e,t,r,s,o,i,!0)}function vC(n){return n?_u(n)||WI(n)?Tt({},n):n:null}function Bi(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=n,u=e?EC(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&tE(u),ref:e&&e.ref?t&&i?fe(i)?i.concat(Zl(e)):[i,Zl(e)]:Zl(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==er?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Bi(n.ssContent),ssFallback:n.ssFallback&&Bi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&Vf(h,l.clone(h)),h}function IC(n=" ",e=0){return zt(Eu,null,n,e)}function BF(n,e){const t=zt(Jl,null,n);return t.staticCount=e,t}function jF(n="",e=!1){return e?(JI(),eE(Xr,null,n)):zt(Xr,null,n)}function On(n){return n==null||typeof n=="boolean"?zt(Xr):fe(n)?zt(er,null,n.slice()):Sc(n)?tr(n):zt(Eu,null,String(n))}function tr(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Bi(n)}function Uf(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(fe(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Uf(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!WI(e)?e._ctx=tn:s===3&&tn&&(tn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:tn},t=32):(e=String(e),r&64?(t=16,e=[IC(e)]):t=8);n.children=e,n.shapeFlag|=t}function EC(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Af([e.class,r.class]));else if(s==="style")e.style=wf([e.style,r.style]);else if(uu(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!hu(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function Nn(n,e,t,r=null){Kn(n,e,7,[t,r])}const TC=FI();let wC=0;function AC(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||TC,i={uid:wC++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rI(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:KI(r,s),emitsOptions:UI(r,s),emit:null,emitted:null,propsDefaults:Be,inheritAttrs:r.inheritAttrs,ctx:Be,data:Be,props:Be,attrs:Be,slots:Be,refs:Be,setupState:Be,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=eC.bind(null,i),n.ce&&n.ce(i),i}let kt=null;const rE=()=>kt||tn;let Rc,gd;{const n=gu(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Rc=e("__VUE_INSTANCE_SETTERS__",t=>kt=t),gd=e("__VUE_SSR_SETTERS__",t=>xa=t)}const tl=n=>{const e=kt;return Rc(n),n.scope.on(),()=>{n.scope.off(),Rc(e)}},xm=()=>{kt&&kt.scope.off(),Rc(null)};function sE(n){return n.vnode.shapeFlag&4}let xa=!1;function bC(n,e=!1,t=!1){e&&gd(e);const{props:r,children:s}=n.vnode,i=sE(n);oC(n,r,i,e),uC(n,s,t||e);const o=i?SC(n,e):void 0;return e&&gd(!1),o}function SC(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,KR);const{setup:r}=t;if(r){hr();const s=n.setupContext=r.length>1?CC(n):null,i=tl(n),o=el(r,n,0,[n.props,s]),a=Yv(o);if(dr(),i(),(a||n.sp)&&!la(n)&&xI(n),a){if(o.then(xm,xm),e)return o.then(l=>{km(n,l)}).catch(l=>{yu(l,n,0)});n.asyncDep=o}else km(n,o)}else iE(n)}function km(n,e,t){_e(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Le(e)&&(n.setupState=TI(e)),iE(n)}function iE(n,e,t){const r=n.type;n.render||(n.render=r.render||Bn);{const s=tl(n);hr();try{$R(n)}finally{dr(),s()}}}const RC={get(n,e){return Nt(n,"get",""),n[e]}};function CC(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,RC),slots:n.slots,emit:n.emit,expose:e}}function Tu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(TI(xf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ca)return ca[t](n)},has(e,t){return t in e||t in ca}})):n.proxy}function PC(n,e=!0){return _e(n)?n.displayName||n.name:n.name||e&&n.__name}function NC(n){return _e(n)&&"__vccOpts"in n}const dn=(n,e)=>fR(n,e,xa);function oE(n,e,t){try{bc(-1);const r=arguments.length;return r===2?Le(e)&&!fe(e)?Sc(e)?zt(n,null,[e]):zt(n,e):zt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Sc(t)&&(t=[t]),zt(n,e,t))}finally{bc(1)}}const DC="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let md;const Om=typeof window<"u"&&window.trustedTypes;if(Om)try{md=Om.createPolicy("vue",{createHTML:n=>n})}catch{}const aE=md?n=>md.createHTML(n):n=>n,xC="http://www.w3.org/2000/svg",kC="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,Vm=Zn&&Zn.createElement("template"),OC={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Zn.createElementNS(xC,n):e==="mathml"?Zn.createElementNS(kC,n):t?Zn.createElement(n,{is:t}):Zn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Zn.createTextNode(n),createComment:n=>Zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Vm.innerHTML=aE(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=Vm.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},VC=Symbol("_vtc");function MC(n,e,t){const r=n[VC];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Mm=Symbol("_vod"),LC=Symbol("_vsh"),FC=Symbol(""),UC=/(?:^|;)\s*display\s*:/;function BC(n,e,t){const r=n.style,s=it(t);let i=!1;if(t&&!s){if(e)if(it(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&ec(r,a,"")}else for(const o in e)t[o]==null&&ec(r,o,"");for(const o in t)o==="display"&&(i=!0),ec(r,o,t[o])}else if(s){if(e!==t){const o=r[FC];o&&(t+=";"+o),r.cssText=t,i=UC.test(t)}}else e&&n.removeAttribute("style");Mm in n&&(n[Mm]=i?r.display:"",n[LC]&&(r.display="none"))}const Lm=/\s*!important$/;function ec(n,e,t){if(fe(t))t.forEach(r=>ec(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=jC(n,e);Lm.test(t)?n.setProperty(os(r),t.replace(Lm,""),"important"):n[r]=t}}const Fm=["Webkit","Moz","ms"],Rh={};function jC(n,e){const t=Rh[e];if(t)return t;let r=Wt(e);if(r!=="filter"&&r in n)return Rh[e]=r;r=pu(r);for(let s=0;s<Fm.length;s++){const i=Fm[s]+r;if(i in n)return Rh[e]=i}return e}const Um="http://www.w3.org/1999/xlink";function Bm(n,e,t,r,s,i=LS(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Um,e.slice(6,e.length)):n.setAttributeNS(Um,e,t):t==null||i&&!eI(t)?n.removeAttribute(e):n.setAttribute(e,i?"":_n(t)?String(t):t)}function jm(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?aE(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=eI(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Ii(n,e,t,r){n.addEventListener(e,t,r)}function qC(n,e,t,r){n.removeEventListener(e,t,r)}const qm=Symbol("_vei");function WC(n,e,t,r,s=null){const i=n[qm]||(n[qm]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=GC(e);if(r){const u=i[e]=zC(r,s);Ii(n,a,u,l)}else o&&(qC(n,a,o,l),i[e]=void 0)}}const Wm=/(?:Once|Passive|Capture)$/;function GC(n){let e;if(Wm.test(n)){e={};let r;for(;r=n.match(Wm);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):os(n.slice(2)),e]}let Ch=0;const KC=Promise.resolve(),$C=()=>Ch||(KC.then(()=>Ch=0),Ch=Date.now());function zC(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Kn(HC(r,t.value),e,5,[r])};return t.value=n,t.attached=$C(),t}function HC(n,e){if(fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Gm=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,QC=(n,e,t,r,s,i)=>{const o=s==="svg";e==="class"?MC(n,r,o):e==="style"?BC(n,t,r):uu(e)?hu(e)||WC(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):YC(n,e,r,o))?(jm(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bm(n,e,r,o,i,e!=="value")):n._isVueCE&&(XC(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!it(r)))?jm(n,Wt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),Bm(n,e,r,o))};function YC(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gm(e)&&_e(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gm(e)&&it(t)?!1:e in n}function XC(n,e){const t=n._def.props;if(!t)return!1;const r=Wt(e);return Array.isArray(t)?t.some(s=>Wt(s)===r):Object.keys(t).some(s=>Wt(s)===r)}const Km=n=>{const e=n.props["onUpdate:modelValue"]||!1;return fe(e)?t=>Yl(e,t):e};function JC(n){n.target.composing=!0}function $m(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ph=Symbol("_assign");function zm(n,e,t){return e&&(n=n.trim()),t&&(n=Tf(n)),n}const qF={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Ph]=Km(s);const i=r||s.props&&s.props.type==="number";Ii(n,e?"change":"input",o=>{o.target.composing||n[Ph](zm(n.value,t,i))}),(t||i)&&Ii(n,"change",()=>{n.value=zm(n.value,t,i)}),e||(Ii(n,"compositionstart",JC),Ii(n,"compositionend",$m),Ii(n,"change",$m))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},o){if(n[Ph]=Km(o),n.composing)return;const a=(i||n.type==="number")&&!/^0\d/.test(n.value)?Tf(n.value):n.value,l=e??"";if(a===l)return;const u=n.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l)}},ZC=["ctrl","shift","alt","meta"],e0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>ZC.some(t=>n[`${t}Key`]&&!e.includes(t))},WF=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=e0[e[o]];if(a&&a(s,e))return}return n(s,...i)})},t0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},GF=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=s=>{if(!("key"in s))return;const i=os(s.key);if(e.some(o=>o===i||t0[o]===i))return n(s)})},n0=Tt({patchProp:QC},OC);let Hm;function r0(){return Hm||(Hm=dC(n0))}const s0=(...n)=>{const e=r0().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=o0(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,i0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function i0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function o0(n){return it(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let lE;const wu=n=>lE=n,cE=Symbol();function _d(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var ha;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(ha||(ha={}));function a0(){const n=sI(!0),e=n.run(()=>vc({}));let t=[],r=[];const s=xf({install(i){wu(s),s._a=i,i.provide(cE,s),i.config.globalProperties.$pinia=s,r.forEach(o=>t.push(o)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const uE=()=>{};function Qm(n,e,t,r=uE){n.add(e);const s=()=>{n.delete(e)&&r()};return!t&&iI()&&BS(s),s}function hi(n,...e){n.forEach(t=>{t(...e)})}const l0=n=>n(),Ym=Symbol(),Nh=Symbol();function yd(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];_d(s)&&_d(r)&&n.hasOwnProperty(t)&&!nt(r)&&!cr(r)?n[t]=yd(s,r):n[t]=r}return n}const c0=Symbol();function u0(n){return!_d(n)||!Object.prototype.hasOwnProperty.call(n,c0)}const{assign:Or}=Object;function h0(n){return!!(nt(n)&&n.effect)}function d0(n,e,t,r){const{state:s,actions:i,getters:o}=e,a=t.state.value[n];let l;function u(){a||(t.state.value[n]=s?s():{});const h=cR(t.state.value[n]);return Or(h,i,Object.keys(o||{}).reduce((d,g)=>(d[g]=xf(dn(()=>{wu(t);const m=t._s.get(n);return o[g].call(m,m)})),d),{}))}return l=hE(n,u,e,t,r,!0),l}function hE(n,e,t={},r,s,i){let o;const a=Or({actions:{}},t),l={deep:!0};let u,h,d=new Set,g=new Set,m;const w=r.state.value[n];!i&&!w&&(r.state.value[n]={});let R;function P(y){let v;u=h=!1,typeof y=="function"?(y(r.state.value[n]),v={type:ha.patchFunction,storeId:n,events:m}):(yd(r.state.value[n],y),v={type:ha.patchObject,payload:y,storeId:n,events:m});const b=R=Symbol();kf().then(()=>{R===b&&(u=!0)}),h=!0,hi(d,v,r.state.value[n])}const j=i?function(){const{state:v}=t,b=v?v():{};this.$patch(S=>{Or(S,b)})}:uE;function k(){o.stop(),d.clear(),g.clear(),r._s.delete(n)}const M=(y,v="")=>{if(Ym in y)return y[Nh]=v,y;const b=function(){wu(r);const S=Array.from(arguments),C=new Set,E=new Set;function yt(pe){C.add(pe)}function Kt(pe){E.add(pe)}hi(g,{args:S,name:b[Nh],store:te,after:yt,onError:Kt});let je;try{je=y.apply(this&&this.$id===n?this:te,S)}catch(pe){throw hi(E,pe),pe}return je instanceof Promise?je.then(pe=>(hi(C,pe),pe)).catch(pe=>(hi(E,pe),Promise.reject(pe))):(hi(C,je),je)};return b[Ym]=!0,b[Nh]=v,b},W={_p:r,$id:n,$onAction:Qm.bind(null,g),$patch:P,$reset:j,$subscribe(y,v={}){const b=Qm(d,y,v.detached,()=>S()),S=o.run(()=>oa(()=>r.state.value[n],C=>{(v.flush==="sync"?h:u)&&y({storeId:n,type:ha.direct,events:m},C)},Or({},l,v)));return b},$dispose:k},te=Za(W);r._s.set(n,te);const T=(r._a&&r._a.runWithContext||l0)(()=>r._e.run(()=>(o=sI()).run(()=>e({action:M}))));for(const y in T){const v=T[y];if(nt(v)&&!h0(v)||cr(v))i||(w&&u0(v)&&(nt(v)?v.value=w[y]:yd(v,w[y])),r.state.value[n][y]=v);else if(typeof v=="function"){const b=M(v,y);T[y]=b,a.actions[y]=v}}return Or(te,T),Or(Ce(te),T),Object.defineProperty(te,"$state",{get:()=>r.state.value[n],set:y=>{P(v=>{Or(v,y)})}}),r._p.forEach(y=>{Or(te,o.run(()=>y({store:te,app:r._a,pinia:r,options:a})))}),w&&i&&t.hydrate&&t.hydrate(te.$state,w),u=!0,h=!0,te}/*! #__NO_SIDE_EFFECTS__ */function f0(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(o,a){const l=IR();return o=o||(l?mn(cE,null):null),o&&wu(o),o=lE,o._s.has(n)||(s?hE(n,e,r,o):d0(n,r,o)),o._s.get(n)}return i.$id=n,i}const p0=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},g0={};function m0(n,e){const t=qR("RouterView");return JI(),eE(t)}const _0=p0(g0,[["render",m0]]),y0="modulepreload",v0=function(n){return"/"+n},Xm={},Dh=function(e,t,r){let s=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(t.map(l=>{if(l=v0(l),l in Xm)return;Xm[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":y0,u||(d.as="script"),d.crossOrigin="",d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((g,m)=>{d.addEventListener("load",g),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ei=typeof document<"u";function dE(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function I0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&dE(n.default)}const De=Object.assign;function xh(n,e){const t={};for(const r in e){const s=e[r];t[r]=Pn(s)?s.map(n):n(s)}return t}const da=()=>{},Pn=Array.isArray;function Jm(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}const fE=/#/g,E0=/&/g,T0=/\//g,w0=/=/g,A0=/\?/g,pE=/\+/g,b0=/%5B/g,S0=/%5D/g,gE=/%5E/g,R0=/%60/g,mE=/%7B/g,C0=/%7C/g,_E=/%7D/g,P0=/%20/g;function Bf(n){return n==null?"":encodeURI(""+n).replace(C0,"|").replace(b0,"[").replace(S0,"]")}function N0(n){return Bf(n).replace(mE,"{").replace(_E,"}").replace(gE,"^")}function vd(n){return Bf(n).replace(pE,"%2B").replace(P0,"+").replace(fE,"%23").replace(E0,"%26").replace(R0,"`").replace(mE,"{").replace(_E,"}").replace(gE,"^")}function D0(n){return vd(n).replace(w0,"%3D")}function x0(n){return Bf(n).replace(fE,"%23").replace(A0,"%3F")}function k0(n){return x0(n).replace(T0,"%2F")}function ka(n){if(n==null)return null;try{return decodeURIComponent(""+n)}catch{}return""+n}const O0=/\/$/,V0=n=>n.replace(O0,"");function kh(n,e,t="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,a>0?a:e.length),s=n(i.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=U0(r??e,t),{fullPath:r+i+o,path:r,query:s,hash:ka(o)}}function M0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Zm(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function L0(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&ji(e.matched[r],t.matched[s])&&yE(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ji(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function yE(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(var t in n)if(!F0(n[t],e[t]))return!1;return!0}function F0(n,e){return Pn(n)?e_(n,e):Pn(e)?e_(e,n):(n==null?void 0:n.valueOf())===(e==null?void 0:e.valueOf())}function e_(n,e){return Pn(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function U0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=t.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Pr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Id=function(n){return n.pop="pop",n.push="push",n}({}),Oh=function(n){return n.back="back",n.forward="forward",n.unknown="",n}({});function B0(n){if(!n)if(Ei){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),V0(n)}const j0=/^[^#]+#/;function q0(n,e){return n.replace(j0,"#")+e}function W0(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Au=()=>({left:window.scrollX,top:window.scrollY});function G0(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=W0(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function t_(n,e){return(history.state?history.state.position-e:-1)+n}const Ed=new Map;function K0(n,e){Ed.set(n,e)}function $0(n){const e=Ed.get(n);return Ed.delete(n),e}function z0(n){return typeof n=="string"||n&&typeof n=="object"}function vE(n){return typeof n=="string"||typeof n=="symbol"}let et=function(n){return n[n.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",n[n.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",n[n.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",n[n.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",n[n.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",n}({});const IE=Symbol("");et.MATCHER_NOT_FOUND+"",et.NAVIGATION_GUARD_REDIRECT+"",et.NAVIGATION_ABORTED+"",et.NAVIGATION_CANCELLED+"",et.NAVIGATION_DUPLICATED+"";function qi(n,e){return De(new Error,{type:n,[IE]:!0},e)}function Xn(n,e){return n instanceof Error&&IE in n&&(e==null||!!(n.type&e))}const H0=["params","query","hash"];function Q0(n){if(typeof n=="string")return n;if(n.path!=null)return n.path;const e={};for(const t of H0)t in n&&(e[t]=n[t]);return JSON.stringify(e,null,2)}function Y0(n){const e={};if(n===""||n==="?")return e;const t=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<t.length;++r){const s=t[r].replace(pE," "),i=s.indexOf("="),o=ka(i<0?s:s.slice(0,i)),a=i<0?null:ka(s.slice(i+1));if(o in e){let l=e[o];Pn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function n_(n){let e="";for(let t in n){const r=n[t];if(t=D0(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(Pn(r)?r.map(s=>s&&vd(s)):[r&&vd(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function X0(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=Pn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const J0=Symbol(""),r_=Symbol(""),bu=Symbol(""),jf=Symbol(""),Td=Symbol("");function Bo(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Mr(n,e,t,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=g=>{g===!1?l(qi(et.NAVIGATION_ABORTED,{from:t,to:e})):g instanceof Error?l(g):z0(g)?l(qi(et.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),a())},h=i(()=>n.call(r&&r.instances[s],e,t,u));let d=Promise.resolve(h);n.length<3&&(d=d.then(u)),d.catch(g=>l(g))})}function Vh(n,e,t,r,s=i=>i()){const i=[];for(const o of n)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(dE(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Mr(u,t,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=I0(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Mr(g,t,r,o,a,s)()}))}}return i}function Z0(n,e){const t=[],r=[],s=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>ji(u,a))?r.push(a):t.push(a));const l=n.matched[o];l&&(e.matched.find(u=>ji(u,l))||s.push(l))}return[t,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let eP=()=>location.protocol+"//"+location.host;function EE(n,e){const{pathname:t,search:r,hash:s}=e,i=n.indexOf("#");if(i>-1){let o=s.includes(n.slice(i))?n.slice(i).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),Zm(a,"")}return Zm(t,n)+r+s}function tP(n,e,t,r){let s=[],i=[],o=null;const a=({state:g})=>{const m=EE(n,location),w=t.value,R=e.value;let P=0;if(g){if(t.value=m,e.value=g,o&&o===w){o=null;return}P=R?g.position-R.position:0}else r(m);s.forEach(j=>{j(t.value,w,{delta:P,type:Id.pop,direction:P?P>0?Oh.forward:Oh.back:Oh.unknown})})};function l(){o=t.value}function u(g){s.push(g);const m=()=>{const w=s.indexOf(g);w>-1&&s.splice(w,1)};return i.push(m),m}function h(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(De({},g.state,{scroll:Au()}),"")}}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:l,listen:u,destroy:d}}function s_(n,e,t,r=!1,s=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:s?Au():null}}function nP(n){const{history:e,location:t}=window,r={value:EE(n,t)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=n.indexOf("#"),g=d>-1?(t.host&&document.querySelector("base")?n:n.slice(d))+l:eP()+n+l;try{e[h?"replaceState":"pushState"](u,"",g),s.value=u}catch(m){console.error(m),t[h?"replace":"assign"](g)}}function o(l,u){i(l,De({},e.state,s_(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function a(l,u){const h=De({},s.value,e.state,{forward:l,scroll:Au()});i(h.current,h,!0),i(l,De({},s_(r.value,l,null),{position:h.position+1},u),!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function rP(n){n=B0(n);const e=nP(n),t=tP(n,e.state,e.location,e.replace);function r(i,o=!0){o||t.pauseListeners(),history.go(i)}const s=De({location:"",base:n,go:r,createHref:q0.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Ns=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.Group=2]="Group",n}({});var ht=function(n){return n[n.Static=0]="Static",n[n.Param=1]="Param",n[n.ParamRegExp=2]="ParamRegExp",n[n.ParamRegExpEnd=3]="ParamRegExpEnd",n[n.EscapeNext=4]="EscapeNext",n}(ht||{});const sP={type:Ns.Static,value:""},iP=/[a-zA-Z0-9_]/;function oP(n){if(!n)return[[]];if(n==="/")return[[sP]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${u}": ${m}`)}let t=ht.Static,r=t;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(t===ht.Static?i.push({type:Ns.Static,value:u}):t===ht.Param||t===ht.ParamRegExp||t===ht.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Ns.Param,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;a<n.length;){if(l=n[a++],l==="\\"&&t!==ht.ParamRegExp){r=t,t=ht.EscapeNext;continue}switch(t){case ht.Static:l==="/"?(u&&d(),o()):l===":"?(d(),t=ht.Param):g();break;case ht.EscapeNext:g(),t=r;break;case ht.Param:l==="("?t=ht.ParamRegExp:iP.test(l)?g():(d(),t=ht.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case ht.ParamRegExp:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:t=ht.ParamRegExpEnd:h+=l;break;case ht.ParamRegExpEnd:d(),t=ht.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return t===ht.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const i_="[^/]+?",aP={sensitive:!1,strict:!1,start:!0,end:!0};var Bt=function(n){return n[n._multiplier=10]="_multiplier",n[n.Root=90]="Root",n[n.Segment=40]="Segment",n[n.SubSegment=30]="SubSegment",n[n.Static=40]="Static",n[n.Dynamic=20]="Dynamic",n[n.BonusCustomRegExp=10]="BonusCustomRegExp",n[n.BonusWildcard=-50]="BonusWildcard",n[n.BonusRepeatable=-20]="BonusRepeatable",n[n.BonusOptional=-8]="BonusOptional",n[n.BonusStrict=.7000000000000001]="BonusStrict",n[n.BonusCaseSensitive=.25]="BonusCaseSensitive",n}(Bt||{});const lP=/[.+*?^${}()[\]/\\]/g;function cP(n,e){const t=De({},aP,e),r=[];let s=t.start?"^":"";const i=[];for(const u of n){const h=u.length?[]:[Bt.Root];t.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const g=u[d];let m=Bt.Segment+(t.sensitive?Bt.BonusCaseSensitive:0);if(g.type===Ns.Static)d||(s+="/"),s+=g.value.replace(lP,"\\$&"),m+=Bt.Static;else if(g.type===Ns.Param){const{value:w,repeatable:R,optional:P,regexp:j}=g;i.push({name:w,repeatable:R,optional:P});const k=j||i_;if(k!==i_){m+=Bt.BonusCustomRegExp;try{`${k}`}catch(W){throw new Error(`Invalid custom RegExp for param "${w}" (${k}): `+W.message)}}let M=R?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;d||(M=P&&u.length<2?`(?:/${M})`:"/"+M),P&&(M+="?"),s+=M,m+=Bt.Dynamic,P&&(m+=Bt.BonusOptional),R&&(m+=Bt.BonusRepeatable),k===".*"&&(m+=Bt.BonusWildcard)}h.push(m)}r.push(h)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=Bt.BonusStrict}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let g=1;g<h.length;g++){const m=h[g]||"",w=i[g-1];d[w.name]=m&&w.repeatable?m.split("/"):m}return d}function l(u){let h="",d=!1;for(const g of n){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const m of g)if(m.type===Ns.Static)h+=m.value;else if(m.type===Ns.Param){const{value:w,repeatable:R,optional:P}=m,j=w in u?u[w]:"";if(Pn(j)&&!R)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const k=Pn(j)?j.join("/"):j;if(!k)if(P)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);h+=k}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function uP(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===Bt.Static+Bt.Segment?-1:1:n.length>e.length?e.length===1&&e[0]===Bt.Static+Bt.Segment?1:-1:0}function TE(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const i=uP(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(o_(r))return 1;if(o_(s))return-1}return s.length-r.length}function o_(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const hP={strict:!1,end:!0,sensitive:!1};function dP(n,e,t){const r=cP(oP(n.path),t),s=De(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function fP(n,e){const t=[],r=new Map;e=Jm(hP,e);function s(d){return r.get(d)}function i(d,g,m){const w=!m,R=l_(d);R.aliasOf=m&&m.record;const P=Jm(e,d),j=[R];if("alias"in d){const W=typeof d.alias=="string"?[d.alias]:d.alias;for(const te of W)j.push(l_(De({},R,{components:m?m.record.components:R.components,path:te,aliasOf:m?m.record:R})))}let k,M;for(const W of j){const{path:te}=W;if(g&&te[0]!=="/"){const H=g.record.path,T=H[H.length-1]==="/"?"":"/";W.path=g.record.path+(te&&T+te)}if(k=dP(W,g,P),m?m.alias.push(k):(M=M||k,M!==k&&M.alias.push(k),w&&d.name&&!c_(k)&&o(d.name)),wE(k)&&l(k),R.children){const H=R.children;for(let T=0;T<H.length;T++)i(H[T],k,m&&m.children[T])}m=m||k}return M?()=>{o(M)}:da}function o(d){if(vE(d)){const g=r.get(d);g&&(r.delete(d),t.splice(t.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=t.indexOf(d);g>-1&&(t.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return t}function l(d){const g=mP(d,t);t.splice(g,0,d),d.record.name&&!c_(d)&&r.set(d.record.name,d)}function u(d,g){let m,w={},R,P;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw qi(et.MATCHER_NOT_FOUND,{location:d});P=m.record.name,w=De(a_(g.params,m.keys.filter(M=>!M.optional).concat(m.parent?m.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),d.params&&a_(d.params,m.keys.map(M=>M.name))),R=m.stringify(w)}else if(d.path!=null)R=d.path,m=t.find(M=>M.re.test(R)),m&&(w=m.parse(R),P=m.record.name);else{if(m=g.name?r.get(g.name):t.find(M=>M.re.test(g.path)),!m)throw qi(et.MATCHER_NOT_FOUND,{location:d,currentLocation:g});P=m.record.name,w=De({},g.params,d.params),R=m.stringify(w)}const j=[];let k=m;for(;k;)j.unshift(k.record),k=k.parent;return{name:P,path:R,params:w,matched:j,meta:gP(j)}}n.forEach(d=>i(d));function h(){t.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function a_(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function l_(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:pP(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function pP(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function c_(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function gP(n){return n.reduce((e,t)=>De(e,t.meta),{})}function mP(n,e){let t=0,r=e.length;for(;t!==r;){const i=t+r>>1;TE(n,e[i])<0?r=i:t=i+1}const s=_P(n);return s&&(r=e.lastIndexOf(s,r-1)),r}function _P(n){let e=n;for(;e=e.parent;)if(wE(e)&&TE(n,e)===0)return e}function wE({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function u_(n){const e=mn(bu),t=mn(jf),r=dn(()=>{const l=Vs(n.to);return e.resolve(l)}),s=dn(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=t.matched;if(!h||!d.length)return-1;const g=d.findIndex(ji.bind(null,h));if(g>-1)return g;const m=h_(l[u-2]);return u>1&&h_(h)===m&&d[d.length-1].path!==m?d.findIndex(ji.bind(null,l[u-2])):g}),i=dn(()=>s.value>-1&&TP(t.params,r.value.params)),o=dn(()=>s.value>-1&&s.value===t.matched.length-1&&yE(t.params,r.value.params));function a(l={}){if(EP(l)){const u=e[Vs(n.replace)?"replace":"push"](Vs(n.to)).catch(da);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:dn(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function yP(n){return n.length===1?n[0]:n}const vP=DI({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:u_,setup(n,{slots:e}){const t=Za(u_(n)),{options:r}=mn(bu),s=dn(()=>({[d_(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[d_(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&yP(e.default(t));return n.custom?i:oE("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),IP=vP;function EP(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function TP(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!Pn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function h_(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const d_=(n,e,t)=>n??e??t,wP=DI({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=mn(Td),s=dn(()=>n.route||r.value),i=mn(r_,0),o=dn(()=>{let u=Vs(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=dn(()=>s.value.matched[o.value]);Xl(r_,dn(()=>o.value+1)),Xl(J0,a),Xl(Td,s);const l=vc();return oa(()=>[l.value,a.value,n.name],([u,h,d],[g,m,w])=>{h&&(h.instances[d]=u,m&&m!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!ji(h,m)||!g)&&(h.enterCallbacks[d]||[]).forEach(R=>R(u))},{flush:"post"}),()=>{const u=s.value,h=n.name,d=a.value,g=d&&d.components[h];if(!g)return f_(t.default,{Component:g,route:u});const m=d.props[h],w=m?m===!0?u.params:typeof m=="function"?m(u):m:null,P=oE(g,De({},w,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return f_(t.default,{Component:P,route:u})||P}}});function f_(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const AP=wP;function bP(n){const e=fP(n.routes,n),t=n.parseQuery||Y0,r=n.stringifyQuery||n_,s=n.history,i=Bo(),o=Bo(),a=Bo(),l=oR(Pr);let u=Pr;Ei&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=xh.bind(null,F=>""+F),d=xh.bind(null,k0),g=xh.bind(null,ka);function m(F,ne){let Z,oe;return vE(F)?(Z=e.getRecordMatcher(F),oe=ne):oe=F,e.addRoute(oe,Z)}function w(F){const ne=e.getRecordMatcher(F);ne&&e.removeRoute(ne)}function R(){return e.getRoutes().map(F=>F.record)}function P(F){return!!e.getRecordMatcher(F)}function j(F,ne){if(ne=De({},ne||l.value),typeof F=="string"){const N=kh(t,F,ne.path),L=e.resolve({path:N.path},ne),B=s.createHref(N.fullPath);return De(N,L,{params:g(L.params),hash:ka(N.hash),redirectedFrom:void 0,href:B})}let Z;if(F.path!=null)Z=De({},F,{path:kh(t,F.path,ne.path).path});else{const N=De({},F.params);for(const L in N)N[L]==null&&delete N[L];Z=De({},F,{params:d(N)}),ne.params=d(ne.params)}const oe=e.resolve(Z,ne),ye=F.hash||"";oe.params=h(g(oe.params));const I=M0(r,De({},F,{hash:N0(ye),path:oe.path})),A=s.createHref(I);return De({fullPath:I,hash:ye,query:r===n_?X0(F.query):F.query||{}},oe,{redirectedFrom:void 0,href:A})}function k(F){return typeof F=="string"?kh(t,F,l.value.path):De({},F)}function M(F,ne){if(u!==F)return qi(et.NAVIGATION_CANCELLED,{from:ne,to:F})}function W(F){return T(F)}function te(F){return W(De(k(F),{replace:!0}))}function H(F,ne){const Z=F.matched[F.matched.length-1];if(Z&&Z.redirect){const{redirect:oe}=Z;let ye=typeof oe=="function"?oe(F,ne):oe;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=k(ye):{path:ye},ye.params={}),De({query:F.query,hash:F.hash,params:ye.path!=null?{}:F.params},ye)}}function T(F,ne){const Z=u=j(F),oe=l.value,ye=F.state,I=F.force,A=F.replace===!0,N=H(Z,oe);if(N)return T(De(k(N),{state:typeof N=="object"?De({},ye,N.state):ye,force:I,replace:A}),ne||Z);const L=Z;L.redirectedFrom=ne;let B;return!I&&L0(r,oe,Z)&&(B=qi(et.NAVIGATION_DUPLICATED,{to:L,from:oe}),cn(oe,oe,!0,!1)),(B?Promise.resolve(B):b(L,oe)).catch(U=>Xn(U)?Xn(U,et.NAVIGATION_GUARD_REDIRECT)?U:vn(U):Ee(U,L,oe)).then(U=>{if(U){if(Xn(U,et.NAVIGATION_GUARD_REDIRECT))return T(De({replace:A},k(U.to),{state:typeof U.to=="object"?De({},ye,U.to.state):ye,force:I}),ne||L)}else U=C(L,oe,!0,A,ye);return S(L,oe,U),U})}function y(F,ne){const Z=M(F,ne);return Z?Promise.reject(Z):Promise.resolve()}function v(F){const ne=Ar.values().next().value;return ne&&typeof ne.runWithContext=="function"?ne.runWithContext(F):F()}function b(F,ne){let Z;const[oe,ye,I]=Z0(F,ne);Z=Vh(oe.reverse(),"beforeRouteLeave",F,ne);for(const N of oe)N.leaveGuards.forEach(L=>{Z.push(Mr(L,F,ne))});const A=y.bind(null,F,ne);return Z.push(A),$t(Z).then(()=>{Z=[];for(const N of i.list())Z.push(Mr(N,F,ne));return Z.push(A),$t(Z)}).then(()=>{Z=Vh(ye,"beforeRouteUpdate",F,ne);for(const N of ye)N.updateGuards.forEach(L=>{Z.push(Mr(L,F,ne))});return Z.push(A),$t(Z)}).then(()=>{Z=[];for(const N of I)if(N.beforeEnter)if(Pn(N.beforeEnter))for(const L of N.beforeEnter)Z.push(Mr(L,F,ne));else Z.push(Mr(N.beforeEnter,F,ne));return Z.push(A),$t(Z)}).then(()=>(F.matched.forEach(N=>N.enterCallbacks={}),Z=Vh(I,"beforeRouteEnter",F,ne,v),Z.push(A),$t(Z))).then(()=>{Z=[];for(const N of o.list())Z.push(Mr(N,F,ne));return Z.push(A),$t(Z)}).catch(N=>Xn(N,et.NAVIGATION_CANCELLED)?N:Promise.reject(N))}function S(F,ne,Z){a.list().forEach(oe=>v(()=>oe(F,ne,Z)))}function C(F,ne,Z,oe,ye){const I=M(F,ne);if(I)return I;const A=ne===Pr,N=Ei?history.state:{};Z&&(oe||A?s.replace(F.fullPath,De({scroll:A&&N&&N.scroll},ye)):s.push(F.fullPath,ye)),l.value=F,cn(F,ne,Z,A),vn()}let E;function yt(){E||(E=s.listen((F,ne,Z)=>{if(!Jt.listening)return;const oe=j(F),ye=H(oe,Jt.currentRoute.value);if(ye){T(De(ye,{replace:!0,force:!0}),oe).catch(da);return}u=oe;const I=l.value;Ei&&K0(t_(I.fullPath,Z.delta),Au()),b(oe,I).catch(A=>Xn(A,et.NAVIGATION_ABORTED|et.NAVIGATION_CANCELLED)?A:Xn(A,et.NAVIGATION_GUARD_REDIRECT)?(T(De(k(A.to),{force:!0}),oe).then(N=>{Xn(N,et.NAVIGATION_ABORTED|et.NAVIGATION_DUPLICATED)&&!Z.delta&&Z.type===Id.pop&&s.go(-1,!1)}).catch(da),Promise.reject()):(Z.delta&&s.go(-Z.delta,!1),Ee(A,oe,I))).then(A=>{A=A||C(oe,I,!1),A&&(Z.delta&&!Xn(A,et.NAVIGATION_CANCELLED)?s.go(-Z.delta,!1):Z.type===Id.pop&&Xn(A,et.NAVIGATION_ABORTED|et.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),S(oe,I,A)}).catch(da)}))}let Kt=Bo(),je=Bo(),pe;function Ee(F,ne,Z){vn(F);const oe=je.list();return oe.length?oe.forEach(ye=>ye(F,ne,Z)):console.error(F),Promise.reject(F)}function Xt(){return pe&&l.value!==Pr?Promise.resolve():new Promise((F,ne)=>{Kt.add([F,ne])})}function vn(F){return pe||(pe=!F,yt(),Kt.list().forEach(([ne,Z])=>F?Z(F):ne()),Kt.reset()),F}function cn(F,ne,Z,oe){const{scrollBehavior:ye}=n;if(!Ei||!ye)return Promise.resolve();const I=!Z&&$0(t_(F.fullPath,0))||(oe||!Z)&&history.state&&history.state.scroll||null;return kf().then(()=>ye(F,ne,I)).then(A=>A&&G0(A)).catch(A=>Ee(A,F,ne))}const He=F=>s.go(F);let Qe;const Ar=new Set,Jt={currentRoute:l,listening:!0,addRoute:m,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:P,getRoutes:R,resolve:j,options:n,push:W,replace:te,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:je.add,isReady:Xt,install(F){F.component("RouterLink",IP),F.component("RouterView",AP),F.config.globalProperties.$router=Jt,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Vs(l)}),Ei&&!Qe&&l.value===Pr&&(Qe=!0,W(s.location).catch(oe=>{}));const ne={};for(const oe in Pr)Object.defineProperty(ne,oe,{get:()=>l.value[oe],enumerable:!0});F.provide(bu,Jt),F.provide(jf,II(ne)),F.provide(Td,l);const Z=F.unmount;Ar.add(F),F.unmount=function(){Ar.delete(F),Ar.size<1&&(u=Pr,E&&E(),E=null,l.value=Pr,Qe=!1,pe=!1),Z()}}};function $t(F){return F.reduce((ne,Z)=>ne.then(()=>v(Z)),Promise.resolve())}return Jt}function KF(){return mn(bu)}function $F(n){return mn(jf)}const SP=()=>{};var p_={};/**
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
 */const AE={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const J=function(n,e){if(!n)throw fo(e)},fo=function(n){return new Error("Firebase Database ("+AE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const bE=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},RP=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,u=l?n[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(g=64)),r.push(t[h],t[d],t[g],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bE(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):RP(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new CP;const g=i<<2|a>>4;if(r.push(g),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class CP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const SE=function(n){const e=bE(n);return qf.encodeByteArray(e,!0)},Cc=function(n){return SE(n).replace(/\./g,"")},Pc=function(n){try{return qf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function PP(n){return RE(void 0,n)}function RE(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!NP(t)||(n[t]=RE(n[t],e[t]));return n}function NP(n){return n!=="__proto__"}/**
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
 */function CE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const DP=()=>CE().__FIREBASE_DEFAULTS__,xP=()=>{if(typeof process>"u"||typeof p_>"u")return;const n=p_.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kP=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Pc(n[1]);return e&&JSON.parse(e)},Su=()=>{try{return SP()||DP()||xP()||kP()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},PE=n=>{var e,t;return(t=(e=Su())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},OP=n=>{const e=PE(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},NE=()=>{var n;return(n=Su())===null||n===void 0?void 0:n.config},DE=n=>{var e;return(e=Su())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Wf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Gf(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function VP(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Cc(JSON.stringify(t)),Cc(JSON.stringify(o)),""].join(".")}const fa={};function MP(){const n={prod:[],emulator:[]};for(const e of Object.keys(fa))fa[e]?n.emulator.push(e):n.prod.push(e);return n}function LP(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let g_=!1;function xE(n,e){if(typeof window>"u"||typeof document>"u"||!as(window.location.host)||fa[n]===e||fa[n]||g_)return;fa[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=MP().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function a(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,m){g.setAttribute("width","24"),g.setAttribute("id",m),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{g_=!0,o()},g}function h(g,m){g.setAttribute("id",m),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function d(){const g=LP(r),m=t("text"),w=document.getElementById(m)||document.createElement("span"),R=t("learnmore"),P=document.getElementById(R)||document.createElement("a"),j=t("preprendIcon"),k=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const M=g.element;a(M),h(P,R);const W=u();l(k,j),M.append(k,w,P,W),document.body.appendChild(M)}i?(w.innerText="Preview backend disconnected.",k.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(k.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,w.innerText="Preview backend running in this workspace."),w.setAttribute("id",m)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function kE(){var n;const e=(n=Su())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function UP(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function OE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BP(){const n=dt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function jP(){return AE.NODE_ADMIN===!0}function VE(){return!kE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ME(){return!kE()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function LE(){try{return typeof indexedDB=="object"}catch{return!1}}function qP(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const WP="FirebaseError";class Ir extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=WP,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nl.prototype.create)}}class nl{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?GP(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ir(s,a,r)}}function GP(n,e){return n.replace(KP,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const KP=/\{\$([^}]+)}/g;/**
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
 */function Oa(n){return JSON.parse(n)}function Et(n){return JSON.stringify(n)}/**
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
 */const FE=function(n){let e={},t={},r={},s="";try{const i=n.split(".");e=Oa(Pc(i[0])||""),t=Oa(Pc(i[1])||""),s=i[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:s}},$P=function(n){const e=FE(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},zP=function(n){const e=FE(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Er(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Wi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function wd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Nc(n,e,t){const r={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=e.call(t,n[s],s,n));return r}function Jr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(m_(i)&&m_(o)){if(!Jr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function m_(n){return n!==null&&typeof n=="object"}/**
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
 */function po(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class HP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)r[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const g=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(g<<1|g>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let d=0;d<80;d++){d<40?d<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):d<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const g=(s<<5|s>>>27)+u+l+h+r[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=g}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<t;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function QP(n,e){const t=new YP(n,e);return t.subscribe.bind(t)}class YP{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");XP(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Mh),s.error===void 0&&(s.error=Mh),s.complete===void 0&&(s.complete=Mh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XP(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mh(){}function JP(n,e){return`${n} failed: ${e} argument `}/**
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
 */const ZP=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,J(r<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ru=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ut(n){return n&&n._delegate?n._delegate:n}class Zr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Es="[DEFAULT]";/**
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
 */class eN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Wf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nN(e))try{this.getOrInitializeService({instanceIdentifier:Es})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Es){return this.instances.has(e)}getOptions(e=Es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tN(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Es){return this.component?this.component.multipleInstances?e:Es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tN(n){return n===Es?void 0:n}function nN(n){return n.instantiationMode==="EAGER"}/**
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
 */class rN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new eN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ie;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ie||(Ie={}));const sN={debug:Ie.DEBUG,verbose:Ie.VERBOSE,info:Ie.INFO,warn:Ie.WARN,error:Ie.ERROR,silent:Ie.SILENT},iN=Ie.INFO,oN={[Ie.DEBUG]:"log",[Ie.VERBOSE]:"log",[Ie.INFO]:"info",[Ie.WARN]:"warn",[Ie.ERROR]:"error"},aN=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=oN[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=iN,this._logHandler=aN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ie.DEBUG,...e),this._logHandler(this,Ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ie.VERBOSE,...e),this._logHandler(this,Ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ie.INFO,...e),this._logHandler(this,Ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ie.WARN,...e),this._logHandler(this,Ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ie.ERROR,...e),this._logHandler(this,Ie.ERROR,...e)}}const lN=(n,e)=>e.some(t=>n instanceof t);let __,y_;function cN(){return __||(__=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uN(){return y_||(y_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const UE=new WeakMap,Ad=new WeakMap,BE=new WeakMap,Lh=new WeakMap,$f=new WeakMap;function hN(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(qr(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&UE.set(t,n)}).catch(()=>{}),$f.set(e,n),e}function dN(n){if(Ad.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Ad.set(n,e)}let bd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ad.get(n);if(e==="objectStoreNames")return n.objectStoreNames||BE.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fN(n){bd=n(bd)}function pN(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Fh(this),e,...t);return BE.set(r,e.sort?e.sort():[e]),qr(r)}:uN().includes(n)?function(...e){return n.apply(Fh(this),e),qr(UE.get(this))}:function(...e){return qr(n.apply(Fh(this),e))}}function gN(n){return typeof n=="function"?pN(n):(n instanceof IDBTransaction&&dN(n),lN(n,cN())?new Proxy(n,bd):n)}function qr(n){if(n instanceof IDBRequest)return hN(n);if(Lh.has(n))return Lh.get(n);const e=gN(n);return e!==n&&(Lh.set(n,e),$f.set(e,n)),e}const Fh=n=>$f.get(n);function mN(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=qr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(qr(o.result),l.oldVersion,l.newVersion,qr(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const _N=["get","getKey","getAll","getAllKeys","count"],yN=["put","add","delete","clear"],Uh=new Map;function v_(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Uh.get(e))return Uh.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=yN.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_N.includes(t)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&l.done]))[0]};return Uh.set(e,i),i}fN(n=>({...n,get:(e,t,r)=>v_(e,t)||n.get(e,t,r),has:(e,t)=>!!v_(e,t)||n.has(e,t)}));/**
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
 */class vN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(IN(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function IN(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sd="@firebase/app",I_="0.13.2";/**
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
 */const pr=new Cu("@firebase/app"),EN="@firebase/app-compat",TN="@firebase/analytics-compat",wN="@firebase/analytics",AN="@firebase/app-check-compat",bN="@firebase/app-check",SN="@firebase/auth",RN="@firebase/auth-compat",CN="@firebase/database",PN="@firebase/data-connect",NN="@firebase/database-compat",DN="@firebase/functions",xN="@firebase/functions-compat",kN="@firebase/installations",ON="@firebase/installations-compat",VN="@firebase/messaging",MN="@firebase/messaging-compat",LN="@firebase/performance",FN="@firebase/performance-compat",UN="@firebase/remote-config",BN="@firebase/remote-config-compat",jN="@firebase/storage",qN="@firebase/storage-compat",WN="@firebase/firestore",GN="@firebase/ai",KN="@firebase/firestore-compat",$N="firebase",zN="11.10.0";/**
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
 */const Rd="[DEFAULT]",HN={[Sd]:"fire-core",[EN]:"fire-core-compat",[wN]:"fire-analytics",[TN]:"fire-analytics-compat",[bN]:"fire-app-check",[AN]:"fire-app-check-compat",[SN]:"fire-auth",[RN]:"fire-auth-compat",[CN]:"fire-rtdb",[PN]:"fire-data-connect",[NN]:"fire-rtdb-compat",[DN]:"fire-fn",[xN]:"fire-fn-compat",[kN]:"fire-iid",[ON]:"fire-iid-compat",[VN]:"fire-fcm",[MN]:"fire-fcm-compat",[LN]:"fire-perf",[FN]:"fire-perf-compat",[UN]:"fire-rc",[BN]:"fire-rc-compat",[jN]:"fire-gcs",[qN]:"fire-gcs-compat",[WN]:"fire-fst",[KN]:"fire-fst-compat",[GN]:"fire-vertex","fire-js":"fire-js",[$N]:"fire-js-all"};/**
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
 */const Dc=new Map,QN=new Map,Cd=new Map;function E_(n,e){try{n.container.addComponent(e)}catch(t){pr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qs(n){const e=n.name;if(Cd.has(e))return pr.debug(`There were multiple attempts to register component ${e}.`),!1;Cd.set(e,n);for(const t of Dc.values())E_(t,n);for(const t of QN.values())E_(t,n);return!0}function Pu(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function fn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const YN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wr=new nl("app","Firebase",YN);/**
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
 */class XN{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Zr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wr.create("app-deleted",{appName:this._name})}}/**
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
 */const ei=zN;function jE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rd,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Wr.create("bad-app-name",{appName:String(s)});if(t||(t=NE()),!t)throw Wr.create("no-options");const i=Dc.get(s);if(i){if(Jr(t,i.options)&&Jr(r,i.config))return i;throw Wr.create("duplicate-app",{appName:s})}const o=new rN(s);for(const l of Cd.values())o.addComponent(l);const a=new XN(t,r,o);return Dc.set(s,a),a}function qE(n=Rd){const e=Dc.get(n);if(!e&&n===Rd&&NE())return jE();if(!e)throw Wr.create("no-app",{appName:n});return e}function jn(n,e,t){var r;let s=(r=HN[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pr.warn(a.join(" "));return}qs(new Zr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const JN="firebase-heartbeat-database",ZN=1,Va="firebase-heartbeat-store";let Bh=null;function WE(){return Bh||(Bh=mN(JN,ZN,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Va)}catch(t){console.warn(t)}}}}).catch(n=>{throw Wr.create("idb-open",{originalErrorMessage:n.message})})),Bh}async function eD(n){try{const t=(await WE()).transaction(Va),r=await t.objectStore(Va).get(GE(n));return await t.done,r}catch(e){if(e instanceof Ir)pr.warn(e.message);else{const t=Wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pr.warn(t.message)}}}async function T_(n,e){try{const r=(await WE()).transaction(Va,"readwrite");await r.objectStore(Va).put(e,GE(n)),await r.done}catch(t){if(t instanceof Ir)pr.warn(t.message);else{const r=Wr.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});pr.warn(r.message)}}}function GE(n){return`${n.name}!${n.options.appId}`}/**
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
 */const tD=1024,nD=30;class rD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new iD(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=w_();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>nD){const o=oD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){pr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=w_(),{heartbeatsToSend:r,unsentEntries:s}=sD(this._heartbeatsCache.heartbeats),i=Cc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return pr.warn(t),""}}}function w_(){return new Date().toISOString().substring(0,10)}function sD(n,e=tD){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),A_(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),A_(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class iD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LE()?qP().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await eD(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return T_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return T_(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function A_(n){return Cc(JSON.stringify({version:2,heartbeats:n})).length}function oD(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function aD(n){qs(new Zr("platform-logger",e=>new vN(e),"PRIVATE")),qs(new Zr("heartbeat",e=>new rD(e),"PRIVATE")),jn(Sd,I_,n),jn(Sd,I_,"esm2017"),jn("fire-js","")}aD("");var lD="firebase",cD="11.10.0";/**
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
 */jn(lD,cD,"app");function zf(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function KE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uD=KE,$E=new nl("auth","Firebase",KE());/**
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
 */const xc=new Cu("@firebase/auth");function hD(n,...e){xc.logLevel<=Ie.WARN&&xc.warn(`Auth (${ei}): ${n}`,...e)}function tc(n,...e){xc.logLevel<=Ie.ERROR&&xc.error(`Auth (${ei}): ${n}`,...e)}/**
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
 */function $n(n,...e){throw Qf(n,...e)}function Sn(n,...e){return Qf(n,...e)}function Hf(n,e,t){const r=Object.assign(Object.assign({},uD()),{[e]:t});return new nl("auth","Firebase",r).create(e,{appName:n.name})}function Ls(n){return Hf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dD(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&$n(n,"argument-error"),Hf(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Qf(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return $E.create(n,...e)}function ge(n,e,...t){if(!n)throw Qf(e,...t)}function ir(n){const e="INTERNAL ASSERTION FAILED: "+n;throw tc(e),new Error(e)}function gr(n,e){n||ir(e)}/**
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
 */function Pd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function fD(){return b_()==="http:"||b_()==="https:"}function b_(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function pD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fD()||UP()||"connection"in navigator)?navigator.onLine:!0}function gD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class rl{constructor(e,t){this.shortDelay=e,this.longDelay=t,gr(t>e,"Short delay should be less than long delay!"),this.isMobile=Kf()||OE()}get(){return pD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Yf(n,e){gr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class zE{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _D=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yD=new rl(3e4,6e4);function Xf(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function go(n,e,t,r,s={}){return HE(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=po(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const u=Object.assign({method:e,headers:l},i);return FP()||(u.referrerPolicy="no-referrer"),n.emulatorConfig&&as(n.emulatorConfig.host)&&(u.credentials="include"),zE.fetch()(await QE(n,n.config.apiHost,t,a),u)})}async function HE(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},mD),e);try{const s=new ID(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Bl(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bl(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Bl(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Bl(n,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Hf(n,h,u);$n(n,h)}}catch(s){if(s instanceof Ir)throw s;$n(n,"network-request-failed",{message:String(s)})}}async function vD(n,e,t,r,s={}){const i=await go(n,e,t,r,s);return"mfaPendingCredential"in i&&$n(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function QE(n,e,t,r){const s=`${e}${t}?${r}`,i=n,o=i.config.emulator?Yf(n.config,s):`${n.config.apiScheme}://${s}`;return _D.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class ID{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),yD.get())})}}function Bl(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Sn(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function ED(n,e){return go(n,"POST","/v1/accounts:delete",e)}async function kc(n,e){return go(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function pa(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TD(n,e=!1){const t=ut(n),r=await t.getIdToken(e),s=Jf(r);ge(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pa(jh(s.auth_time)),issuedAtTime:pa(jh(s.iat)),expirationTime:pa(jh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function jh(n){return Number(n)*1e3}function Jf(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return tc("JWT malformed, contained fewer than 3 sections"),null;try{const s=Pc(t);return s?JSON.parse(s):(tc("Failed to decode base64 JWT payload"),null)}catch(s){return tc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function S_(n){const e=Jf(n);return ge(e,"internal-error"),ge(typeof e.exp<"u","internal-error"),ge(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ma(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ir&&wD(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wD({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class AD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pa(this.lastLoginAt),this.creationTime=pa(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Oc(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Ma(n,kc(t,{idToken:r}));ge(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?YE(i.providerUserInfo):[],a=SD(n.providerData,o),l=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Nd(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(n,d)}async function bD(n){const e=ut(n);await Oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SD(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function YE(n){return n.map(e=>{var{providerId:t}=e,r=zf(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function RD(n,e){const t=await HE(n,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=await QE(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return n.emulatorConfig&&as(n.emulatorConfig.host)&&(l.credentials="include"),zE.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function CD(n,e){return go(n,"POST","/v2/accounts:revokeToken",Xf(n,e))}/**
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
 */class xi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ge(e.idToken,"internal-error"),ge(typeof e.idToken<"u","internal-error"),ge(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):S_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ge(e.length!==0,"internal-error");const t=S_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ge(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await RD(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new xi;return r&&(ge(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ge(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ge(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xi,this.toJSON())}_performRefresh(){return ir("not implemented")}}/**
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
 */function Nr(n,e){ge(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class wn{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=zf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ma(this,this.stsTokenManager.getToken(this.auth,e));return ge(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return TD(this,e)}reload(){return bD(this)}_assign(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Oc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(fn(this.auth.app))return Promise.reject(Ls(this.auth));const e=await this.getIdToken();return await Ma(this,ED(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,l,u,h;const d=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,m=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,R=(a=t.tenantId)!==null&&a!==void 0?a:void 0,P=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,j=(u=t.createdAt)!==null&&u!==void 0?u:void 0,k=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:M,emailVerified:W,isAnonymous:te,providerData:H,stsTokenManager:T}=t;ge(M&&T,e,"internal-error");const y=xi.fromJSON(this.name,T);ge(typeof M=="string",e,"internal-error"),Nr(d,e.name),Nr(g,e.name),ge(typeof W=="boolean",e,"internal-error"),ge(typeof te=="boolean",e,"internal-error"),Nr(m,e.name),Nr(w,e.name),Nr(R,e.name),Nr(P,e.name),Nr(j,e.name),Nr(k,e.name);const v=new wn({uid:M,auth:e,email:g,emailVerified:W,displayName:d,isAnonymous:te,photoURL:w,phoneNumber:m,tenantId:R,stsTokenManager:y,createdAt:j,lastLoginAt:k});return H&&Array.isArray(H)&&(v.providerData=H.map(b=>Object.assign({},b))),P&&(v._redirectEventId=P),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new xi;s.updateFromServerResponse(t);const i=new wn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Oc(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ge(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?YE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new xi;a.updateFromIdToken(r);const l=new wn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Nd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const R_=new Map;function or(n){gr(n instanceof Function,"Expected a class definition");let e=R_.get(n);return e?(gr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,R_.set(n,e),e)}/**
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
 */class XE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}XE.type="NONE";const C_=XE;/**
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
 */function nc(n,e,t){return`firebase:${n}:${e}:${t}`}class ki{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=nc(this.userKey,s.apiKey,i),this.fullPersistenceKey=nc("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await kc(this.auth,{idToken:e}).catch(()=>{});return t?wn._fromGetAccountInfoResponse(this.auth,t,e):null}return wn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ki(or(C_),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||or(C_);const o=nc(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const h=await u._get(o);if(h){let d;if(typeof h=="string"){const g=await kc(e,{idToken:h}).catch(()=>{});if(!g)break;d=await wn._fromGetAccountInfoResponse(e,g,h)}else d=wn._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ki(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ki(i,e,r))}}/**
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
 */function P_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(JE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(rT(e))return"Blackberry";if(sT(e))return"Webos";if(ZE(e))return"Safari";if((e.includes("chrome/")||eT(e))&&!e.includes("edge/"))return"Chrome";if(nT(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function JE(n=dt()){return/firefox\//i.test(n)}function ZE(n=dt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function eT(n=dt()){return/crios\//i.test(n)}function tT(n=dt()){return/iemobile/i.test(n)}function nT(n=dt()){return/android/i.test(n)}function rT(n=dt()){return/blackberry/i.test(n)}function sT(n=dt()){return/webos/i.test(n)}function Zf(n=dt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function PD(n=dt()){var e;return Zf(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ND(){return BP()&&document.documentMode===10}function iT(n=dt()){return Zf(n)||nT(n)||sT(n)||rT(n)||/windows phone/i.test(n)||tT(n)}/**
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
 */function oT(n,e=[]){let t;switch(n){case"Browser":t=P_(dt());break;case"Worker":t=`${P_(dt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ei}/${r}`}/**
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
 */class DD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function xD(n,e={}){return go(n,"GET","/v2/passwordPolicy",Xf(n,e))}/**
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
 */const kD=6;class OD{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:kD,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class VD{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new N_(this),this.idTokenSubscription=new N_(this),this.beforeStateQueue=new DD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$E,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=or(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ki.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await kc(this,{idToken:e}),r=await wn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(fn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ge(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(fn(this.app))return Promise.reject(Ls(this));const t=e?ut(e):null;return t&&ge(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ge(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return fn(this.app)?Promise.reject(Ls(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return fn(this.app)?Promise.reject(Ls(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(or(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xD(this),t=new OD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new nl("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await CD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&or(e)||this._popupRedirectResolver;ge(t,this,"argument-error"),this.redirectPersistenceManager=await ki.create(this,[or(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ge(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=oT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(fn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hD(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Nu(n){return ut(n)}class N_{constructor(e){this.auth=e,this.observer=null,this.addObserver=QP(t=>this.observer=t)}get next(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ep={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MD(n){ep=n}function LD(n){return ep.loadJS(n)}function FD(){return ep.gapiScript}function UD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function BD(n,e){const t=Pu(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Jr(i,e??{}))return s;$n(s,"already-initialized")}return t.initialize({options:e})}function jD(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(or);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qD(n,e,t){const r=Nu(n);ge(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=aT(e),{host:o,port:a}=WD(e),l=a===null?"":`:${a}`,u={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ge(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ge(Jr(u,r.config.emulator)&&Jr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,as(o)?(Gf(`${i}//${o}${l}`),xE("Auth",!0)):GD()}function aT(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function WD(n){const e=aT(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:D_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:D_(o)}}}function D_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function GD(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class lT{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ir("not implemented")}_getIdTokenResponse(e){return ir("not implemented")}_linkToIdToken(e,t){return ir("not implemented")}_getReauthenticationResolver(e){return ir("not implemented")}}/**
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
 */async function Oi(n,e){return vD(n,"POST","/v1/accounts:signInWithIdp",Xf(n,e))}/**
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
 */const KD="http://localhost";class Ws extends lT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):$n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=zf(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ws(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Oi(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Oi(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oi(e,t)}buildRequest(){const e={requestUri:KD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=po(t)}return e}}/**
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
 */class tp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class sl extends tp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Lr extends sl{constructor(){super("facebook.com")}static credential(e){return Ws._fromParams({providerId:Lr.PROVIDER_ID,signInMethod:Lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lr.credentialFromTaggedObject(e)}static credentialFromError(e){return Lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lr.credential(e.oauthAccessToken)}catch{return null}}}Lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Lr.PROVIDER_ID="facebook.com";/**
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
 */class sr extends sl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ws._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return sr.credential(t,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
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
 */class Fr extends sl{constructor(){super("github.com")}static credential(e){return Ws._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fr.credential(e.oauthAccessToken)}catch{return null}}}Fr.GITHUB_SIGN_IN_METHOD="github.com";Fr.PROVIDER_ID="github.com";/**
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
 */class Ur extends sl{constructor(){super("twitter.com")}static credential(e,t){return Ws._fromParams({providerId:Ur.PROVIDER_ID,signInMethod:Ur.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ur.credentialFromTaggedObject(e)}static credentialFromError(e){return Ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ur.credential(t,r)}catch{return null}}}Ur.TWITTER_SIGN_IN_METHOD="twitter.com";Ur.PROVIDER_ID="twitter.com";/**
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
 */class Gi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await wn._fromIdTokenResponse(e,r,s),o=x_(r);return new Gi({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=x_(r);return new Gi({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function x_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Vc extends Ir{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Vc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Vc(e,t,r,s)}}function cT(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Vc._fromErrorAndOperation(n,i,e,r):i})}async function $D(n,e,t=!1){const r=await Ma(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gi._forOperation(n,"link",r)}/**
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
 */async function zD(n,e,t=!1){const{auth:r}=n;if(fn(r.app))return Promise.reject(Ls(r));const s="reauthenticate";try{const i=await Ma(n,cT(r,s,e,n),t);ge(i.idToken,r,"internal-error");const o=Jf(i.idToken);ge(o,r,"internal-error");const{sub:a}=o;return ge(n.uid===a,r,"user-mismatch"),Gi._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&$n(r,"user-mismatch"),i}}/**
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
 */async function HD(n,e,t=!1){if(fn(n.app))return Promise.reject(Ls(n));const r="signIn",s=await cT(n,r,e),i=await Gi._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function QD(n,e,t,r){return ut(n).onIdTokenChanged(e,t,r)}function YD(n,e,t){return ut(n).beforeAuthStateChanged(e,t)}function XD(n,e,t,r){return ut(n).onAuthStateChanged(e,t,r)}function JD(n){return ut(n).signOut()}const Mc="__sak";/**
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
 */class uT{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mc,"1"),this.storage.removeItem(Mc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZD=1e3,ex=10;class hT extends uT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=iT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ND()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ex):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ZD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}hT.type="LOCAL";const tx=hT;/**
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
 */class dT extends uT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}dT.type="SESSION";const fT=dT;/**
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
 */function nx(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Du{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Du(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),l=await nx(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Du.receivers=[];/**
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
 */function np(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class rx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=np("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qn(){return window}function sx(n){qn().location.href=n}/**
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
 */function pT(){return typeof qn().WorkerGlobalScope<"u"&&typeof qn().importScripts=="function"}async function ix(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ox(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ax(){return pT()?self:null}/**
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
 */const gT="firebaseLocalStorageDb",lx=1,Lc="firebaseLocalStorage",mT="fbase_key";class il{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xu(n,e){return n.transaction([Lc],e?"readwrite":"readonly").objectStore(Lc)}function cx(){const n=indexedDB.deleteDatabase(gT);return new il(n).toPromise()}function Dd(){const n=indexedDB.open(gT,lx);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Lc,{keyPath:mT})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Lc)?e(r):(r.close(),await cx(),e(await Dd()))})})}async function k_(n,e,t){const r=xu(n,!0).put({[mT]:e,value:t});return new il(r).toPromise()}async function ux(n,e){const t=xu(n,!1).get(e),r=await new il(t).toPromise();return r===void 0?null:r.value}function O_(n,e){const t=xu(n,!0).delete(e);return new il(t).toPromise()}const hx=800,dx=3;class _T{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>dx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Du._getInstance(ax()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ix(),!this.activeServiceWorker)return;this.sender=new rx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ox()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dd();return await k_(e,Mc,"1"),await O_(e,Mc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>k_(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ux(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>O_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=xu(s,!1).getAll();return new il(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_T.type="LOCAL";const fx=_T;new rl(3e4,6e4);/**
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
 */function yT(n,e){return e?or(e):(ge(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class rp extends lT{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function px(n){return HD(n.auth,new rp(n),n.bypassAuthState)}function gx(n){const{auth:e,user:t}=n;return ge(t,e,"internal-error"),zD(t,new rp(n),n.bypassAuthState)}async function mx(n){const{auth:e,user:t}=n;return ge(t,e,"internal-error"),$D(t,new rp(n),n.bypassAuthState)}/**
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
 */class vT{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return px;case"linkViaPopup":case"linkViaRedirect":return mx;case"reauthViaPopup":case"reauthViaRedirect":return gx;default:$n(this.auth,"internal-error")}}resolve(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _x=new rl(2e3,1e4);async function yx(n,e,t){if(fn(n.app))return Promise.reject(Sn(n,"operation-not-supported-in-this-environment"));const r=Nu(n);dD(n,e,tp);const s=yT(r,t);return new Ds(r,"signInViaPopup",e,s).executeNotNull()}class Ds extends vT{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ge(e,this.auth,"internal-error"),e}async onExecution(){gr(this.filter.length===1,"Popup operations only handle one event");const e=np();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_x.get())};e()}}Ds.currentPopupAction=null;/**
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
 */const vx="pendingRedirect",rc=new Map;class Ix extends vT{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=rc.get(this.auth._key());if(!e){try{const r=await Ex(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}rc.set(this.auth._key(),e)}return this.bypassAuthState||rc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ex(n,e){const t=Ax(e),r=wx(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Tx(n,e){rc.set(n._key(),e)}function wx(n){return or(n._redirectPersistence)}function Ax(n){return nc(vx,n.config.apiKey,n.name)}async function bx(n,e,t=!1){if(fn(n.app))return Promise.reject(Ls(n));const r=Nu(n),s=yT(r,e),o=await new Ix(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Sx=10*60*1e3;class Rx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!IT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Sn(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sx&&this.cachedEventUids.clear(),this.cachedEventUids.has(V_(e))}saveEventToCache(e){this.cachedEventUids.add(V_(e)),this.lastProcessedEventTime=Date.now()}}function V_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function IT({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Cx(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return IT(n);default:return!1}}/**
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
 */async function Px(n,e={}){return go(n,"GET","/v1/projects",e)}/**
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
 */const Nx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Dx=/^https?/;async function xx(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Px(n);for(const t of e)try{if(kx(t))return}catch{}$n(n,"unauthorized-domain")}function kx(n){const e=Pd(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Dx.test(t))return!1;if(Nx.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ox=new rl(3e4,6e4);function M_(){const n=qn().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Vx(n){return new Promise((e,t)=>{var r,s,i;function o(){M_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{M_(),t(Sn(n,"network-request-failed"))},timeout:Ox.get()})}if(!((s=(r=qn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=qn().gapi)===null||i===void 0)&&i.load)o();else{const a=UD("iframefcb");return qn()[a]=()=>{gapi.load?o():t(Sn(n,"network-request-failed"))},LD(`${FD()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw sc=null,e})}let sc=null;function Mx(n){return sc=sc||Vx(n),sc}/**
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
 */const Lx=new rl(5e3,15e3),Fx="__/auth/iframe",Ux="emulator/auth/iframe",Bx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qx(n){const e=n.config;ge(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Yf(e,Ux):`https://${n.config.authDomain}/${Fx}`,r={apiKey:e.apiKey,appName:n.name,v:ei},s=jx.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${po(r).slice(1)}`}async function Wx(n){const e=await Mx(n),t=qn().gapi;return ge(t,n,"internal-error"),e.open({where:document.body,url:qx(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bx,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(n,"network-request-failed"),a=qn().setTimeout(()=>{i(o)},Lx.get());function l(){qn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Gx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kx=500,$x=600,zx="_blank",Hx="http://localhost";class L_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qx(n,e,t,r=Kx,s=$x){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Gx),{width:r.toString(),height:s.toString(),top:i,left:o}),u=dt().toLowerCase();t&&(a=eT(u)?zx:t),JE(u)&&(e=e||Hx,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[m,w])=>`${g}${m}=${w},`,"");if(PD(u)&&a!=="_self")return Yx(e||"",a),new L_(null);const d=window.open(e||"",a,h);ge(d,n,"popup-blocked");try{d.focus()}catch{}return new L_(d)}function Yx(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Xx="__/auth/handler",Jx="emulator/auth/handler",Zx=encodeURIComponent("fac");async function F_(n,e,t,r,s,i){ge(n.config.authDomain,n,"auth-domain-config-required"),ge(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ei,eventId:s};if(e instanceof tp){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",wd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof sl){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),u=l?`#${Zx}=${encodeURIComponent(l)}`:"";return`${ek(n)}?${po(a).slice(1)}${u}`}function ek({config:n}){return n.emulator?Yf(n,Jx):`https://${n.authDomain}/${Xx}`}/**
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
 */const qh="webStorageSupport";class tk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=fT,this._completeRedirectFn=bx,this._overrideRedirectResult=Tx}async _openPopup(e,t,r,s){var i;gr((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await F_(e,t,r,Pd(),s);return Qx(e,o,np())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await F_(e,t,r,Pd(),s);return sx(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(gr(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Wx(e),r=new Rx(e);return t.register("authEvent",s=>(ge(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qh,{type:qh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[qh];o!==void 0&&t(!!o),$n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return iT()||ZE()||Zf()}}const nk=tk;var U_="@firebase/auth",B_="1.10.8";/**
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
 */class rk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sk(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ik(n){qs(new Zr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ge(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:oT(n)},u=new VD(r,s,i,l);return jD(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qs(new Zr("auth-internal",e=>{const t=Nu(e.getProvider("auth").getImmediate());return(r=>new rk(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(U_,B_,sk(n)),jn(U_,B_,"esm2017")}/**
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
 */const ok=5*60,ak=DE("authIdTokenMaxAge")||ok;let j_=null;const lk=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>ak)return;const s=t==null?void 0:t.token;j_!==s&&(j_=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ck(n=qE()){const e=Pu(n,"auth");if(e.isInitialized())return e.getImmediate();const t=BD(n,{popupRedirectResolver:nk,persistence:[fx,tx,fT]}),r=DE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=lk(i.toString());YD(t,o,()=>o(t.currentUser)),QD(t,a=>o(a))}}const s=PE("auth");return s&&qD(t,`http://${s}`),t}function uk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}MD({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Sn("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",uk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ik("Browser");var q_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gr,ET;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function v(){}v.prototype=y.prototype,T.D=y.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(b,S,C){for(var E=Array(arguments.length-2),yt=2;yt<arguments.length;yt++)E[yt-2]=arguments[yt];return y.prototype[S].apply(b,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,y,v){v||(v=0);var b=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)b[S]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(S=0;16>S;++S)b[S]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=T.g[0],v=T.g[1],S=T.g[2];var C=T.g[3],E=y+(C^v&(S^C))+b[0]+3614090360&4294967295;y=v+(E<<7&4294967295|E>>>25),E=C+(S^y&(v^S))+b[1]+3905402710&4294967295,C=y+(E<<12&4294967295|E>>>20),E=S+(v^C&(y^v))+b[2]+606105819&4294967295,S=C+(E<<17&4294967295|E>>>15),E=v+(y^S&(C^y))+b[3]+3250441966&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(C^v&(S^C))+b[4]+4118548399&4294967295,y=v+(E<<7&4294967295|E>>>25),E=C+(S^y&(v^S))+b[5]+1200080426&4294967295,C=y+(E<<12&4294967295|E>>>20),E=S+(v^C&(y^v))+b[6]+2821735955&4294967295,S=C+(E<<17&4294967295|E>>>15),E=v+(y^S&(C^y))+b[7]+4249261313&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(C^v&(S^C))+b[8]+1770035416&4294967295,y=v+(E<<7&4294967295|E>>>25),E=C+(S^y&(v^S))+b[9]+2336552879&4294967295,C=y+(E<<12&4294967295|E>>>20),E=S+(v^C&(y^v))+b[10]+4294925233&4294967295,S=C+(E<<17&4294967295|E>>>15),E=v+(y^S&(C^y))+b[11]+2304563134&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(C^v&(S^C))+b[12]+1804603682&4294967295,y=v+(E<<7&4294967295|E>>>25),E=C+(S^y&(v^S))+b[13]+4254626195&4294967295,C=y+(E<<12&4294967295|E>>>20),E=S+(v^C&(y^v))+b[14]+2792965006&4294967295,S=C+(E<<17&4294967295|E>>>15),E=v+(y^S&(C^y))+b[15]+1236535329&4294967295,v=S+(E<<22&4294967295|E>>>10),E=y+(S^C&(v^S))+b[1]+4129170786&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^S&(y^v))+b[6]+3225465664&4294967295,C=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(C^y))+b[11]+643717713&4294967295,S=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(S^C))+b[0]+3921069994&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^C&(v^S))+b[5]+3593408605&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^S&(y^v))+b[10]+38016083&4294967295,C=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(C^y))+b[15]+3634488961&4294967295,S=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(S^C))+b[4]+3889429448&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^C&(v^S))+b[9]+568446438&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^S&(y^v))+b[14]+3275163606&4294967295,C=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(C^y))+b[3]+4107603335&4294967295,S=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(S^C))+b[8]+1163531501&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(S^C&(v^S))+b[13]+2850285829&4294967295,y=v+(E<<5&4294967295|E>>>27),E=C+(v^S&(y^v))+b[2]+4243563512&4294967295,C=y+(E<<9&4294967295|E>>>23),E=S+(y^v&(C^y))+b[7]+1735328473&4294967295,S=C+(E<<14&4294967295|E>>>18),E=v+(C^y&(S^C))+b[12]+2368359562&4294967295,v=S+(E<<20&4294967295|E>>>12),E=y+(v^S^C)+b[5]+4294588738&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^S)+b[8]+2272392833&4294967295,C=y+(E<<11&4294967295|E>>>21),E=S+(C^y^v)+b[11]+1839030562&4294967295,S=C+(E<<16&4294967295|E>>>16),E=v+(S^C^y)+b[14]+4259657740&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^C)+b[1]+2763975236&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^S)+b[4]+1272893353&4294967295,C=y+(E<<11&4294967295|E>>>21),E=S+(C^y^v)+b[7]+4139469664&4294967295,S=C+(E<<16&4294967295|E>>>16),E=v+(S^C^y)+b[10]+3200236656&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^C)+b[13]+681279174&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^S)+b[0]+3936430074&4294967295,C=y+(E<<11&4294967295|E>>>21),E=S+(C^y^v)+b[3]+3572445317&4294967295,S=C+(E<<16&4294967295|E>>>16),E=v+(S^C^y)+b[6]+76029189&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(v^S^C)+b[9]+3654602809&4294967295,y=v+(E<<4&4294967295|E>>>28),E=C+(y^v^S)+b[12]+3873151461&4294967295,C=y+(E<<11&4294967295|E>>>21),E=S+(C^y^v)+b[15]+530742520&4294967295,S=C+(E<<16&4294967295|E>>>16),E=v+(S^C^y)+b[2]+3299628645&4294967295,v=S+(E<<23&4294967295|E>>>9),E=y+(S^(v|~C))+b[0]+4096336452&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~S))+b[7]+1126891415&4294967295,C=y+(E<<10&4294967295|E>>>22),E=S+(y^(C|~v))+b[14]+2878612391&4294967295,S=C+(E<<15&4294967295|E>>>17),E=v+(C^(S|~y))+b[5]+4237533241&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~C))+b[12]+1700485571&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~S))+b[3]+2399980690&4294967295,C=y+(E<<10&4294967295|E>>>22),E=S+(y^(C|~v))+b[10]+4293915773&4294967295,S=C+(E<<15&4294967295|E>>>17),E=v+(C^(S|~y))+b[1]+2240044497&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~C))+b[8]+1873313359&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~S))+b[15]+4264355552&4294967295,C=y+(E<<10&4294967295|E>>>22),E=S+(y^(C|~v))+b[6]+2734768916&4294967295,S=C+(E<<15&4294967295|E>>>17),E=v+(C^(S|~y))+b[13]+1309151649&4294967295,v=S+(E<<21&4294967295|E>>>11),E=y+(S^(v|~C))+b[4]+4149444226&4294967295,y=v+(E<<6&4294967295|E>>>26),E=C+(v^(y|~S))+b[11]+3174756917&4294967295,C=y+(E<<10&4294967295|E>>>22),E=S+(y^(C|~v))+b[2]+718787259&4294967295,S=C+(E<<15&4294967295|E>>>17),E=v+(C^(S|~y))+b[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,T.g[2]=T.g[2]+S&4294967295,T.g[3]=T.g[3]+C&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var v=y-this.blockSize,b=this.B,S=this.h,C=0;C<y;){if(S==0)for(;C<=v;)s(this,T,C),C+=this.blockSize;if(typeof T=="string"){for(;C<y;)if(b[S++]=T.charCodeAt(C++),S==this.blockSize){s(this,b),S=0;break}}else for(;C<y;)if(b[S++]=T[C++],S==this.blockSize){s(this,b),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var v=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=v&255,v/=256;for(this.u(T),T=Array(16),y=v=0;4>y;++y)for(var b=0;32>b;b+=8)T[v++]=this.g[y]>>>b&255;return T};function i(T,y){var v=a;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=y(T)}function o(T,y){this.h=y;for(var v=[],b=!0,S=T.length-1;0<=S;S--){var C=T[S]|0;b&&C==y||(v[S]=C,b=!1)}this.g=v}var a={};function l(T){return-128<=T&&128>T?i(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return d;if(0>T)return P(u(-T));for(var y=[],v=1,b=0;T>=v;b++)y[b]=T/v|0,v*=4294967296;return new o(y,0)}function h(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return P(h(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),b=d,S=0;S<T.length;S+=8){var C=Math.min(8,T.length-S),E=parseInt(T.substring(S,S+C),y);8>C?(C=u(Math.pow(y,C)),b=b.j(C).add(u(E))):(b=b.j(v),b=b.add(u(E)))}return b}var d=l(0),g=l(1),m=l(16777216);n=o.prototype,n.m=function(){if(R(this))return-P(this).m();for(var T=0,y=1,v=0;v<this.g.length;v++){var b=this.i(v);T+=(0<=b?b:4294967296+b)*y,y*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(w(this))return"0";if(R(this))return"-"+P(this).toString(T);for(var y=u(Math.pow(T,6)),v=this,b="";;){var S=W(v,y).g;v=j(v,S.j(y));var C=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=S,w(v))return C+b;for(;6>C.length;)C="0"+C;b=C+b}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function w(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function R(T){return T.h==-1}n.l=function(T){return T=j(this,T),R(T)?-1:w(T)?0:1};function P(T){for(var y=T.g.length,v=[],b=0;b<y;b++)v[b]=~T.g[b];return new o(v,~T.h).add(g)}n.abs=function(){return R(this)?P(this):this},n.add=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],b=0,S=0;S<=y;S++){var C=b+(this.i(S)&65535)+(T.i(S)&65535),E=(C>>>16)+(this.i(S)>>>16)+(T.i(S)>>>16);b=E>>>16,C&=65535,E&=65535,v[S]=E<<16|C}return new o(v,v[v.length-1]&-2147483648?-1:0)};function j(T,y){return T.add(P(y))}n.j=function(T){if(w(this)||w(T))return d;if(R(this))return R(T)?P(this).j(P(T)):P(P(this).j(T));if(R(T))return P(this.j(P(T)));if(0>this.l(m)&&0>T.l(m))return u(this.m()*T.m());for(var y=this.g.length+T.g.length,v=[],b=0;b<2*y;b++)v[b]=0;for(b=0;b<this.g.length;b++)for(var S=0;S<T.g.length;S++){var C=this.i(b)>>>16,E=this.i(b)&65535,yt=T.i(S)>>>16,Kt=T.i(S)&65535;v[2*b+2*S]+=E*Kt,k(v,2*b+2*S),v[2*b+2*S+1]+=C*Kt,k(v,2*b+2*S+1),v[2*b+2*S+1]+=E*yt,k(v,2*b+2*S+1),v[2*b+2*S+2]+=C*yt,k(v,2*b+2*S+2)}for(b=0;b<y;b++)v[b]=v[2*b+1]<<16|v[2*b];for(b=y;b<2*y;b++)v[b]=0;return new o(v,0)};function k(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function M(T,y){this.g=T,this.h=y}function W(T,y){if(w(y))throw Error("division by zero");if(w(T))return new M(d,d);if(R(T))return y=W(P(T),y),new M(P(y.g),P(y.h));if(R(y))return y=W(T,P(y)),new M(P(y.g),y.h);if(30<T.g.length){if(R(T)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,b=y;0>=b.l(T);)v=te(v),b=te(b);var S=H(v,1),C=H(b,1);for(b=H(b,2),v=H(v,2);!w(b);){var E=C.add(b);0>=E.l(T)&&(S=S.add(v),C=E),b=H(b,1),v=H(v,1)}return y=j(T,S.j(y)),new M(S,y)}for(S=d;0<=T.l(y);){for(v=Math.max(1,Math.floor(T.m()/y.m())),b=Math.ceil(Math.log(v)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),C=u(v),E=C.j(y);R(E)||0<E.l(T);)v-=b,C=u(v),E=C.j(y);w(C)&&(C=g),S=S.add(C),T=j(T,E)}return new M(S,T)}n.A=function(T){return W(this,T).h},n.and=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)&T.i(b);return new o(v,this.h&T.h)},n.or=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)|T.i(b);return new o(v,this.h|T.h)},n.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),v=[],b=0;b<y;b++)v[b]=this.i(b)^T.i(b);return new o(v,this.h^T.h)};function te(T){for(var y=T.g.length+1,v=[],b=0;b<y;b++)v[b]=T.i(b)<<1|T.i(b-1)>>>31;return new o(v,T.h)}function H(T,y){var v=y>>5;y%=32;for(var b=T.g.length-v,S=[],C=0;C<b;C++)S[C]=0<y?T.i(C+v)>>>y|T.i(C+v+1)<<32-y:T.i(C+v);return new o(S,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ET=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Gr=o}).apply(typeof q_<"u"?q_:typeof self<"u"?self:typeof window<"u"?window:{});var jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var TT,Jo,wT,ic,xd,AT,bT,ST;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,p){return c==Array.prototype||c==Object.prototype||(c[f]=p.value),c};function t(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof jl=="object"&&jl];for(var f=0;f<c.length;++f){var p=c[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=t(this);function s(c,f){if(f)e:{var p=r;c=c.split(".");for(var _=0;_<c.length-1;_++){var x=c[_];if(!(x in p))break e;p=p[x]}c=c[c.length-1],_=p[c],f=f(_),f!=_&&f!=null&&e(p,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var p=0,_=!1,x={next:function(){if(!_&&p<c.length){var O=p++;return{value:f(O,c[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,p){return c.call.apply(c.bind,arguments)}function d(c,f,p){if(!c)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,_),c.apply(f,x)}}return function(){return c.apply(f,arguments)}}function g(c,f,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,g.apply(null,arguments)}function m(c,f){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),c.apply(this,_)}}function w(c,f){function p(){}p.prototype=f.prototype,c.aa=f.prototype,c.prototype=new p,c.prototype.constructor=c,c.Qb=function(_,x,O){for(var z=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)z[Ue-2]=arguments[Ue];return f.prototype[x].apply(_,z)}}function R(c){const f=c.length;if(0<f){const p=Array(f);for(let _=0;_<f;_++)p[_]=c[_];return p}return[]}function P(c,f){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const x=c.length||0,O=_.length||0;c.length=x+O;for(let z=0;z<O;z++)c[x+z]=_[z]}else c.push(_)}}class j{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function k(c){return/^[\s\xa0]*$/.test(c)}function M(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function W(c){return W[" "](c),c}W[" "]=function(){};var te=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function H(c,f,p){for(const _ in c)f.call(p,c[_],_,c)}function T(c,f){for(const p in c)f.call(void 0,c[p],p,c)}function y(c){const f={};for(const p in c)f[p]=c[p];return f}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(c,f){let p,_;for(let x=1;x<arguments.length;x++){_=arguments[x];for(p in _)c[p]=_[p];for(let O=0;O<v.length;O++)p=v[O],Object.prototype.hasOwnProperty.call(_,p)&&(c[p]=_[p])}}function S(c){var f=1;c=c.split(":");const p=[];for(;0<f&&c.length;)p.push(c.shift()),f--;return c.length&&p.push(c.join(":")),p}function C(c){a.setTimeout(()=>{throw c},0)}function E(){var c=Xt;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class yt{constructor(){this.h=this.g=null}add(f,p){const _=Kt.get();_.set(f,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Kt=new j(()=>new je,c=>c.reset());class je{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,Ee=!1,Xt=new yt,vn=()=>{const c=a.Promise.resolve(void 0);pe=()=>{c.then(cn)}};var cn=()=>{for(var c;c=E();){try{c.h.call(c.g)}catch(p){C(p)}var f=Kt;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}Ee=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Qe(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}Qe.prototype.h=function(){this.defaultPrevented=!0};var Ar=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};a.addEventListener("test",p,f),a.removeEventListener("test",p,f)}catch{}return c}();function Jt(c,f){if(Qe.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var p=this.type=c.type,_=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(te){e:{try{W(f.nodeName);var x=!0;break e}catch{}x=!1}x||(f=null)}}else p=="mouseover"?f=c.fromElement:p=="mouseout"&&(f=c.toElement);this.relatedTarget=f,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:$t[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Jt.aa.h.call(this)}}w(Jt,Qe);var $t={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),ne=0;function Z(c,f,p,_,x){this.listener=c,this.proxy=null,this.src=f,this.type=p,this.capture=!!_,this.ha=x,this.key=++ne,this.da=this.fa=!1}function oe(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function ye(c){this.src=c,this.g={},this.h=0}ye.prototype.add=function(c,f,p,_,x){var O=c.toString();c=this.g[O],c||(c=this.g[O]=[],this.h++);var z=A(c,f,_,x);return-1<z?(f=c[z],p||(f.fa=!1)):(f=new Z(f,this.src,O,!!_,x),f.fa=p,c.push(f)),f};function I(c,f){var p=f.type;if(p in c.g){var _=c.g[p],x=Array.prototype.indexOf.call(_,f,void 0),O;(O=0<=x)&&Array.prototype.splice.call(_,x,1),O&&(oe(f),c.g[p].length==0&&(delete c.g[p],c.h--))}}function A(c,f,p,_){for(var x=0;x<c.length;++x){var O=c[x];if(!O.da&&O.listener==f&&O.capture==!!p&&O.ha==_)return x}return-1}var N="closure_lm_"+(1e6*Math.random()|0),L={};function B(c,f,p,_,x){if(Array.isArray(f)){for(var O=0;O<f.length;O++)B(c,f[O],p,_,x);return null}return p=ue(p),c&&c[F]?c.K(f,p,u(_)?!!_.capture:!1,x):U(c,f,p,!1,_,x)}function U(c,f,p,_,x,O){if(!f)throw Error("Invalid event type");var z=u(x)?!!x.capture:!!x,Ue=ee(c);if(Ue||(c[N]=Ue=new ye(c)),p=Ue.add(f,p,_,z,O),p.proxy)return p;if(_=X(),p.proxy=_,_.src=c,_.listener=p,c.addEventListener)Ar||(x=z),x===void 0&&(x=!1),c.addEventListener(f.toString(),_,x);else if(c.attachEvent)c.attachEvent(G(f.toString()),_);else if(c.addListener&&c.removeListener)c.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function X(){function c(p){return f.call(c.src,c.listener,p)}const f=ce;return c}function Q(c,f,p,_,x){if(Array.isArray(f))for(var O=0;O<f.length;O++)Q(c,f[O],p,_,x);else _=u(_)?!!_.capture:!!_,p=ue(p),c&&c[F]?(c=c.i,f=String(f).toString(),f in c.g&&(O=c.g[f],p=A(O,p,_,x),-1<p&&(oe(O[p]),Array.prototype.splice.call(O,p,1),O.length==0&&(delete c.g[f],c.h--)))):c&&(c=ee(c))&&(f=c.g[f.toString()],c=-1,f&&(c=A(f,p,_,x)),(p=-1<c?f[c]:null)&&K(p))}function K(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[F])I(f.i,c);else{var p=c.type,_=c.proxy;f.removeEventListener?f.removeEventListener(p,_,c.capture):f.detachEvent?f.detachEvent(G(p),_):f.addListener&&f.removeListener&&f.removeListener(_),(p=ee(f))?(I(p,c),p.h==0&&(p.src=null,f[N]=null)):oe(c)}}}function G(c){return c in L?L[c]:L[c]="on"+c}function ce(c,f){if(c.da)c=!0;else{f=new Jt(f,this);var p=c.listener,_=c.ha||c.src;c.fa&&K(c),c=p.call(_,f)}return c}function ee(c){return c=c[N],c instanceof ye?c:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(c){return typeof c=="function"?c:(c[ae]||(c[ae]=function(f){return c.handleEvent(f)}),c[ae])}function he(){He.call(this),this.i=new ye(this),this.M=this,this.F=null}w(he,He),he.prototype[F]=!0,he.prototype.removeEventListener=function(c,f,p,_){Q(this,c,f,p,_)};function me(c,f){var p,_=c.F;if(_)for(p=[];_;_=_.F)p.push(_);if(c=c.M,_=f.type||f,typeof f=="string")f=new Qe(f,c);else if(f instanceof Qe)f.target=f.target||c;else{var x=f;f=new Qe(_,c),b(f,x)}if(x=!0,p)for(var O=p.length-1;0<=O;O--){var z=f.g=p[O];x=Pe(z,_,!0,f)&&x}if(z=f.g=c,x=Pe(z,_,!0,f)&&x,x=Pe(z,_,!1,f)&&x,p)for(O=0;O<p.length;O++)z=f.g=p[O],x=Pe(z,_,!1,f)&&x}he.prototype.N=function(){if(he.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var p=c.g[f],_=0;_<p.length;_++)oe(p[_]);delete c.g[f],c.h--}}this.F=null},he.prototype.K=function(c,f,p,_){return this.i.add(String(c),f,!1,p,_)},he.prototype.L=function(c,f,p,_){return this.i.add(String(c),f,!0,p,_)};function Pe(c,f,p,_){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var x=!0,O=0;O<f.length;++O){var z=f[O];if(z&&!z.da&&z.capture==p){var Ue=z.listener,It=z.ha||z.src;z.fa&&I(c.i,z),x=Ue.call(It,_)!==!1&&x}}return x&&!_.defaultPrevented}function Ye(c,f,p){if(typeof c=="function")p&&(c=g(c,p));else if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function at(c){c.g=Ye(()=>{c.g=null,c.i&&(c.i=!1,at(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class un extends He{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:at(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wt(c){He.call(this),this.h=c,this.g={}}w(wt,He);var br=[];function bo(c){H(c.g,function(f,p){this.g.hasOwnProperty(p)&&K(f)},c),c.g={}}wt.prototype.N=function(){wt.aa.N.call(this),bo(this)},wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var vt=a.JSON.stringify,hn=a.JSON.parse,Il=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function ii(){}ii.prototype.h=null;function wg(c){return c.h||(c.h=c.i())}function Ag(){}var So={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oh(){Qe.call(this,"d")}w(oh,Qe);function ah(){Qe.call(this,"c")}w(ah,Qe);var ds={},bg=null;function El(){return bg=bg||new he}ds.La="serverreachability";function Sg(c){Qe.call(this,ds.La,c)}w(Sg,Qe);function Ro(c){const f=El();me(f,new Sg(f))}ds.STAT_EVENT="statevent";function Rg(c,f){Qe.call(this,ds.STAT_EVENT,c),this.stat=f}w(Rg,Qe);function Lt(c){const f=El();me(f,new Rg(f,c))}ds.Ma="timingevent";function Cg(c,f){Qe.call(this,ds.Ma,c),this.size=f}w(Cg,Qe);function Co(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function Po(){this.g=!0}Po.prototype.xa=function(){this.g=!1};function iS(c,f,p,_,x,O){c.info(function(){if(c.g)if(O)for(var z="",Ue=O.split("&"),It=0;It<Ue.length;It++){var Re=Ue[It].split("=");if(1<Re.length){var At=Re[0];Re=Re[1];var bt=At.split("_");z=2<=bt.length&&bt[1]=="type"?z+(At+"="+Re+"&"):z+(At+"=redacted&")}}else z=null;else z=O;return"XMLHTTP REQ ("+_+") [attempt "+x+"]: "+f+`
`+p+`
`+z})}function oS(c,f,p,_,x,O,z){c.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+x+"]: "+f+`
`+p+`
`+O+" "+z})}function oi(c,f,p,_){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+lS(c,p)+(_?" "+_:"")})}function aS(c,f){c.info(function(){return"TIMEOUT: "+f})}Po.prototype.info=function(){};function lS(c,f){if(!c.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(c=0;c<p.length;c++)if(Array.isArray(p[c])){var _=p[c];if(!(2>_.length)){var x=_[1];if(Array.isArray(x)&&!(1>x.length)){var O=x[0];if(O!="noop"&&O!="stop"&&O!="close")for(var z=1;z<x.length;z++)x[z]=""}}}}return vt(p)}catch{return f}}var Tl={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},lh;function wl(){}w(wl,ii),wl.prototype.g=function(){return new XMLHttpRequest},wl.prototype.i=function(){return{}},lh=new wl;function Sr(c,f,p,_){this.j=c,this.i=f,this.l=p,this.R=_||1,this.U=new wt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ng}function Ng(){this.i=null,this.g="",this.h=!1}var Dg={},ch={};function uh(c,f,p){c.L=1,c.v=Rl(Hn(f)),c.m=p,c.P=!0,xg(c,null)}function xg(c,f){c.F=Date.now(),Al(c),c.A=Hn(c.v);var p=c.A,_=c.R;Array.isArray(_)||(_=[String(_)]),$g(p.i,"t",_),c.C=0,p=c.j.J,c.h=new Ng,c.g=um(c.j,p?f:null,!c.m),0<c.O&&(c.M=new un(g(c.Y,c,c.g),c.O)),f=c.U,p=c.g,_=c.ca;var x="readystatechange";Array.isArray(x)||(x&&(br[0]=x.toString()),x=br);for(var O=0;O<x.length;O++){var z=B(p,x[O],_||f.handleEvent,!1,f.h||f);if(!z)break;f.g[z.key]=z}f=c.H?y(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),Ro(),iS(c.i,c.u,c.A,c.l,c.R,c.m)}Sr.prototype.ca=function(c){c=c.target;const f=this.M;f&&Qn(c)==3?f.j():this.Y(c)},Sr.prototype.Y=function(c){try{if(c==this.g)e:{const bt=Qn(this.g);var f=this.g.Ba();const ci=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Zg(this.g)))){this.J||bt!=4||f==7||(f==8||0>=ci?Ro(3):Ro(2)),hh(this);var p=this.g.Z();this.X=p;t:if(kg(this)){var _=Zg(this.g);c="";var x=_.length,O=Qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fs(this),No(this);var z="";break t}this.h.i=new a.TextDecoder}for(f=0;f<x;f++)this.h.h=!0,c+=this.h.i.decode(_[f],{stream:!(O&&f==x-1)});_.length=0,this.h.g+=c,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,oS(this.i,this.u,this.A,this.l,this.R,bt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,It=this.g;if((Ue=It.g?It.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(Ue)){var Re=Ue;break t}}Re=null}if(p=Re)oi(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,dh(this,p);else{this.o=!1,this.s=3,Lt(12),fs(this),No(this);break e}}if(this.P){p=!0;let In;for(;!this.J&&this.C<z.length;)if(In=cS(this,z),In==ch){bt==4&&(this.s=4,Lt(14),p=!1),oi(this.i,this.l,null,"[Incomplete Response]");break}else if(In==Dg){this.s=4,Lt(15),oi(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else oi(this.i,this.l,In,null),dh(this,In);if(kg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||z.length!=0||this.h.h||(this.s=1,Lt(16),p=!1),this.o=this.o&&p,!p)oi(this.i,this.l,z,"[Invalid Chunked Response]"),fs(this),No(this);else if(0<z.length&&!this.W){this.W=!0;var At=this.j;At.g==this&&At.ba&&!At.M&&(At.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),yh(At),At.M=!0,Lt(11))}}else oi(this.i,this.l,z,null),dh(this,z);bt==4&&fs(this),this.o&&!this.J&&(bt==4?om(this.j,this):(this.o=!1,Al(this)))}else SS(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),fs(this),No(this)}}}catch{}finally{}};function kg(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function cS(c,f){var p=c.C,_=f.indexOf(`
`,p);return _==-1?ch:(p=Number(f.substring(p,_)),isNaN(p)?Dg:(_+=1,_+p>f.length?ch:(f=f.slice(_,_+p),c.C=_+p,f)))}Sr.prototype.cancel=function(){this.J=!0,fs(this)};function Al(c){c.S=Date.now()+c.I,Og(c,c.I)}function Og(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Co(g(c.ba,c),f)}function hh(c){c.B&&(a.clearTimeout(c.B),c.B=null)}Sr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(aS(this.i,this.A),this.L!=2&&(Ro(),Lt(17)),fs(this),this.s=2,No(this)):Og(this,this.S-c)};function No(c){c.j.G==0||c.J||om(c.j,c)}function fs(c){hh(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,bo(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function dh(c,f){try{var p=c.j;if(p.G!=0&&(p.g==c||fh(p.h,c))){if(!c.K&&fh(p.h,c)&&p.G==3){try{var _=p.Da.g.parse(f)}catch{_=null}if(Array.isArray(_)&&_.length==3){var x=_;if(x[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<c.F)kl(p),Dl(p);else break e;_h(p),Lt(18)}}else p.za=x[1],0<p.za-p.T&&37500>x[2]&&p.F&&p.v==0&&!p.C&&(p.C=Co(g(p.Za,p),6e3));if(1>=Lg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else gs(p,11)}else if((c.K||p.g==c)&&kl(p),!k(f))for(x=p.Da.g.parse(f),f=0;f<x.length;f++){let Re=x[f];if(p.T=Re[0],Re=Re[1],p.G==2)if(Re[0]=="c"){p.K=Re[1],p.ia=Re[2];const At=Re[3];At!=null&&(p.la=At,p.j.info("VER="+p.la));const bt=Re[4];bt!=null&&(p.Aa=bt,p.j.info("SVER="+p.Aa));const ci=Re[5];ci!=null&&typeof ci=="number"&&0<ci&&(_=1.5*ci,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const In=c.g;if(In){const Vl=In.g?In.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vl){var O=_.h;O.g||Vl.indexOf("spdy")==-1&&Vl.indexOf("quic")==-1&&Vl.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(ph(O,O.h),O.h=null))}if(_.D){const vh=In.g?In.g.getResponseHeader("X-HTTP-Session-Id"):null;vh&&(_.ya=vh,We(_.I,_.D,vh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-c.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var z=c;if(_.qa=cm(_,_.J?_.ia:null,_.W),z.K){Fg(_.h,z);var Ue=z,It=_.L;It&&(Ue.I=It),Ue.B&&(hh(Ue),Al(Ue)),_.g=z}else sm(_);0<p.i.length&&xl(p)}else Re[0]!="stop"&&Re[0]!="close"||gs(p,7);else p.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?gs(p,7):mh(p):Re[0]!="noop"&&p.l&&p.l.ta(Re),p.v=0)}}Ro(4)}catch{}}var uS=class{constructor(c,f){this.g=c,this.map=f}};function Vg(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Mg(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Lg(c){return c.h?1:c.g?c.g.size:0}function fh(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function ph(c,f){c.g?c.g.add(f):c.h=f}function Fg(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Vg.prototype.cancel=function(){if(this.i=Ug(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ug(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const p of c.g.values())f=f.concat(p.D);return f}return R(c.i)}function hS(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],p=c.length,_=0;_<p;_++)f.push(c[_]);return f}f=[],p=0;for(_ in c)f[p++]=c[_];return f}function dS(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var p=0;p<c;p++)f.push(p);return f}f=[],p=0;for(const _ in c)f[p++]=_;return f}}}function Bg(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var p=dS(c),_=hS(c),x=_.length,O=0;O<x;O++)f.call(void 0,_[O],p&&p[O],c)}var jg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fS(c,f){if(c){c=c.split("&");for(var p=0;p<c.length;p++){var _=c[p].indexOf("="),x=null;if(0<=_){var O=c[p].substring(0,_);x=c[p].substring(_+1)}else O=c[p];f(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function ps(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ps){this.h=c.h,bl(this,c.j),this.o=c.o,this.g=c.g,Sl(this,c.s),this.l=c.l;var f=c.i,p=new ko;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),qg(this,p),this.m=c.m}else c&&(f=String(c).match(jg))?(this.h=!1,bl(this,f[1]||"",!0),this.o=Do(f[2]||""),this.g=Do(f[3]||"",!0),Sl(this,f[4]),this.l=Do(f[5]||"",!0),qg(this,f[6]||"",!0),this.m=Do(f[7]||"")):(this.h=!1,this.i=new ko(null,this.h))}ps.prototype.toString=function(){var c=[],f=this.j;f&&c.push(xo(f,Wg,!0),":");var p=this.g;return(p||f=="file")&&(c.push("//"),(f=this.o)&&c.push(xo(f,Wg,!0),"@"),c.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&c.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(xo(p,p.charAt(0)=="/"?mS:gS,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",xo(p,yS)),c.join("")};function Hn(c){return new ps(c)}function bl(c,f,p){c.j=p?Do(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function Sl(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function qg(c,f,p){f instanceof ko?(c.i=f,vS(c.i,c.h)):(p||(f=xo(f,_S)),c.i=new ko(f,c.h))}function We(c,f,p){c.i.set(f,p)}function Rl(c){return We(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function Do(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function xo(c,f,p){return typeof c=="string"?(c=encodeURI(c).replace(f,pS),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function pS(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Wg=/[#\/\?@]/g,gS=/[#\?:]/g,mS=/[#\?]/g,_S=/[#\?@]/g,yS=/#/g;function ko(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function Rr(c){c.g||(c.g=new Map,c.h=0,c.i&&fS(c.i,function(f,p){c.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}n=ko.prototype,n.add=function(c,f){Rr(this),this.i=null,c=ai(this,c);var p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(f),this.h+=1,this};function Gg(c,f){Rr(c),f=ai(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function Kg(c,f){return Rr(c),f=ai(c,f),c.g.has(f)}n.forEach=function(c,f){Rr(this),this.g.forEach(function(p,_){p.forEach(function(x){c.call(f,x,_,this)},this)},this)},n.na=function(){Rr(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let _=0;_<f.length;_++){const x=c[_];for(let O=0;O<x.length;O++)p.push(f[_])}return p},n.V=function(c){Rr(this);let f=[];if(typeof c=="string")Kg(this,c)&&(f=f.concat(this.g.get(ai(this,c))));else{c=Array.from(this.g.values());for(let p=0;p<c.length;p++)f=f.concat(c[p])}return f},n.set=function(c,f){return Rr(this),this.i=null,c=ai(this,c),Kg(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},n.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function $g(c,f,p){Gg(c,f),0<p.length&&(c.i=null,c.g.set(ai(c,f),R(p)),c.h+=p.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var _=f[p];const O=encodeURIComponent(String(_)),z=this.V(_);for(_=0;_<z.length;_++){var x=O;z[_]!==""&&(x+="="+encodeURIComponent(String(z[_]))),c.push(x)}}return this.i=c.join("&")};function ai(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function vS(c,f){f&&!c.j&&(Rr(c),c.i=null,c.g.forEach(function(p,_){var x=_.toLowerCase();_!=x&&(Gg(this,_),$g(this,x,p))},c)),c.j=f}function IS(c,f){const p=new Po;if(a.Image){const _=new Image;_.onload=m(Cr,p,"TestLoadImage: loaded",!0,f,_),_.onerror=m(Cr,p,"TestLoadImage: error",!1,f,_),_.onabort=m(Cr,p,"TestLoadImage: abort",!1,f,_),_.ontimeout=m(Cr,p,"TestLoadImage: timeout",!1,f,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=c}else f(!1)}function ES(c,f){const p=new Po,_=new AbortController,x=setTimeout(()=>{_.abort(),Cr(p,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:_.signal}).then(O=>{clearTimeout(x),O.ok?Cr(p,"TestPingServer: ok",!0,f):Cr(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(x),Cr(p,"TestPingServer: error",!1,f)})}function Cr(c,f,p,_,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),_(p)}catch{}}function TS(){this.g=new Il}function wS(c,f,p){const _=p||"";try{Bg(c,function(x,O){let z=x;u(x)&&(z=vt(x)),f.push(_+O+"="+encodeURIComponent(z))})}catch(x){throw f.push(_+"type="+encodeURIComponent("_badmap")),x}}function Cl(c){this.l=c.Ub||null,this.j=c.eb||!1}w(Cl,ii),Cl.prototype.g=function(){return new Pl(this.l,this.j)},Cl.prototype.i=function(c){return function(){return c}}({});function Pl(c,f){he.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(Pl,he),n=Pl.prototype,n.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Vo(this)},n.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oo(this)),this.readyState=0},n.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Vo(this)),this.g&&(this.readyState=3,Vo(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zg(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function zg(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}n.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Oo(this):Vo(this),this.readyState==3&&zg(this)}},n.Ra=function(c){this.g&&(this.response=this.responseText=c,Oo(this))},n.Qa=function(c){this.g&&(this.response=c,Oo(this))},n.ga=function(){this.g&&Oo(this)};function Oo(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Vo(c)}n.setRequestHeader=function(c,f){this.u.append(c,f)},n.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=f.next();return c.join(`\r
`)};function Vo(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Pl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Hg(c){let f="";return H(c,function(p,_){f+=_,f+=":",f+=p,f+=`\r
`}),f}function gh(c,f,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=Hg(p),typeof c=="string"?p!=null&&encodeURIComponent(String(p)):We(c,f,p))}function Ze(c){he.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(Ze,he);var AS=/^https?$/i,bS=["POST","PUT"];n=Ze.prototype,n.Ha=function(c){this.J=c},n.ea=function(c,f,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():lh.g(),this.v=this.o?wg(this.o):wg(lh),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(O){Qg(this,O);return}if(c=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var x in _)p.set(x,_[x]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())p.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(O=>O.toLowerCase()=="content-type"),x=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(bS,f,void 0))||_||x||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,z]of p)this.g.setRequestHeader(O,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Jg(this),this.u=!0,this.g.send(c),this.u=!1}catch(O){Qg(this,O)}};function Qg(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Yg(c),Nl(c)}function Yg(c){c.A||(c.A=!0,me(c,"complete"),me(c,"error"))}n.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,me(this,"complete"),me(this,"abort"),Nl(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Nl(this,!0)),Ze.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xg(this):this.bb())},n.bb=function(){Xg(this)};function Xg(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Qn(c)!=4||c.Z()!=2)){if(c.u&&Qn(c)==4)Ye(c.Ea,0,c);else if(me(c,"readystatechange"),Qn(c)==4){c.h=!1;try{const z=c.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var _;if(_=z===0){var x=String(c.D).match(jg)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),_=!AS.test(x?x.toLowerCase():"")}p=_}if(p)me(c,"complete"),me(c,"success");else{c.m=6;try{var O=2<Qn(c)?c.g.statusText:""}catch{O=""}c.l=O+" ["+c.Z()+"]",Yg(c)}}finally{Nl(c)}}}}function Nl(c,f){if(c.g){Jg(c);const p=c.g,_=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||me(c,"ready");try{p.onreadystatechange=_}catch{}}}function Jg(c){c.I&&(a.clearTimeout(c.I),c.I=null)}n.isActive=function(){return!!this.g};function Qn(c){return c.g?c.g.readyState:0}n.Z=function(){try{return 2<Qn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),hn(f)}};function Zg(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function SS(c){const f={};c=(c.g&&2<=Qn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<c.length;_++){if(k(c[_]))continue;var p=S(c[_]);const x=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const O=f[x]||[];f[x]=O,O.push(p)}T(f,function(_){return _.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mo(c,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||f}function em(c){this.Aa=0,this.i=[],this.j=new Po,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Mo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Mo("baseRetryDelayMs",5e3,c),this.cb=Mo("retryDelaySeedMs",1e4,c),this.Wa=Mo("forwardChannelMaxRetries",2,c),this.wa=Mo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Vg(c&&c.concurrentRequestLimit),this.Da=new TS,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=em.prototype,n.la=8,n.G=1,n.connect=function(c,f,p,_){Lt(0),this.W=c,this.H=f||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=cm(this,null,this.W),xl(this)};function mh(c){if(tm(c),c.G==3){var f=c.U++,p=Hn(c.I);if(We(p,"SID",c.K),We(p,"RID",f),We(p,"TYPE","terminate"),Lo(c,p),f=new Sr(c,c.j,f),f.L=2,f.v=Rl(Hn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=f.v,p=!0),p||(f.g=um(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Al(f)}lm(c)}function Dl(c){c.g&&(yh(c),c.g.cancel(),c.g=null)}function tm(c){Dl(c),c.u&&(a.clearTimeout(c.u),c.u=null),kl(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function xl(c){if(!Mg(c.h)&&!c.s){c.s=!0;var f=c.Ga;pe||vn(),Ee||(pe(),Ee=!0),Xt.add(f,c),c.B=0}}function RS(c,f){return Lg(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Co(g(c.Ga,c,f),am(c,c.B)),c.B++,!0)}n.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const x=new Sr(this,this.j,c);let O=this.o;if(this.S&&(O?(O=y(O),b(O,this.S)):O=this.S),this.m!==null||this.O||(x.H=O,O=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(f+=_,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=rm(this,x,f),p=Hn(this.I),We(p,"RID",c),We(p,"CVER",22),this.D&&We(p,"X-HTTP-Session-Id",this.D),Lo(this,p),O&&(this.O?f="headers="+encodeURIComponent(String(Hg(O)))+"&"+f:this.m&&gh(p,this.m,O)),ph(this.h,x),this.Ua&&We(p,"TYPE","init"),this.P?(We(p,"$req",f),We(p,"SID","null"),x.T=!0,uh(x,p,null)):uh(x,p,f),this.G=2}}else this.G==3&&(c?nm(this,c):this.i.length==0||Mg(this.h)||nm(this))};function nm(c,f){var p;f?p=f.l:p=c.U++;const _=Hn(c.I);We(_,"SID",c.K),We(_,"RID",p),We(_,"AID",c.T),Lo(c,_),c.m&&c.o&&gh(_,c.m,c.o),p=new Sr(c,c.j,p,c.B+1),c.m===null&&(p.H=c.o),f&&(c.i=f.D.concat(c.i)),f=rm(c,p,1e3),p.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),ph(c.h,p),uh(p,_,f)}function Lo(c,f){c.H&&H(c.H,function(p,_){We(f,_,p)}),c.l&&Bg({},function(p,_){We(f,_,p)})}function rm(c,f,p){p=Math.min(c.i.length,p);var _=c.l?g(c.l.Na,c.l,c):null;e:{var x=c.i;let O=-1;for(;;){const z=["count="+p];O==-1?0<p?(O=x[0].g,z.push("ofs="+O)):O=0:z.push("ofs="+O);let Ue=!0;for(let It=0;It<p;It++){let Re=x[It].g;const At=x[It].map;if(Re-=O,0>Re)O=Math.max(0,x[It].g-100),Ue=!1;else try{wS(At,z,"req"+Re+"_")}catch{_&&_(At)}}if(Ue){_=z.join("&");break e}}}return c=c.i.splice(0,p),f.D=c,_}function sm(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;pe||vn(),Ee||(pe(),Ee=!0),Xt.add(f,c),c.v=0}}function _h(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Co(g(c.Fa,c),am(c,c.v)),c.v++,!0)}n.Fa=function(){if(this.u=null,im(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Co(g(this.ab,this),c)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Dl(this),im(this))};function yh(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function im(c){c.g=new Sr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=Hn(c.qa);We(f,"RID","rpc"),We(f,"SID",c.K),We(f,"AID",c.T),We(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&We(f,"TO",c.ja),We(f,"TYPE","xmlhttp"),Lo(c,f),c.m&&c.o&&gh(f,c.m,c.o),c.L&&(c.g.I=c.L);var p=c.g;c=c.ia,p.L=1,p.v=Rl(Hn(f)),p.m=null,p.P=!0,xg(p,c)}n.Za=function(){this.C!=null&&(this.C=null,Dl(this),_h(this),Lt(19))};function kl(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function om(c,f){var p=null;if(c.g==f){kl(c),yh(c),c.g=null;var _=2}else if(fh(c.h,f))p=f.D,Fg(c.h,f),_=1;else return;if(c.G!=0){if(f.o)if(_==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var x=c.B;_=El(),me(_,new Cg(_,p)),xl(c)}else sm(c);else if(x=f.s,x==3||x==0&&0<f.X||!(_==1&&RS(c,f)||_==2&&_h(c)))switch(p&&0<p.length&&(f=c.h,f.i=f.i.concat(p)),x){case 1:gs(c,5);break;case 4:gs(c,10);break;case 3:gs(c,6);break;default:gs(c,2)}}}function am(c,f){let p=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(p*=2),p*f}function gs(c,f){if(c.j.info("Error code "+f),f==2){var p=g(c.fb,c),_=c.Xa;const x=!_;_=new ps(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bl(_,"https"),Rl(_),x?IS(_.toString(),p):ES(_.toString(),p)}else Lt(2);c.G=0,c.l&&c.l.sa(f),lm(c),tm(c)}n.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function lm(c){if(c.G=0,c.ka=[],c.l){const f=Ug(c.h);(f.length!=0||c.i.length!=0)&&(P(c.ka,f),P(c.ka,c.i),c.h.i.length=0,R(c.i),c.i.length=0),c.l.ra()}}function cm(c,f,p){var _=p instanceof ps?Hn(p):new ps(p);if(_.g!="")f&&(_.g=f+"."+_.g),Sl(_,_.s);else{var x=a.location;_=x.protocol,f=f?f+"."+x.hostname:x.hostname,x=+x.port;var O=new ps(null);_&&bl(O,_),f&&(O.g=f),x&&Sl(O,x),p&&(O.l=p),_=O}return p=c.D,f=c.ya,p&&f&&We(_,p,f),We(_,"VER",c.la),Lo(c,_),_}function um(c,f,p){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new Ze(new Cl({eb:p})):new Ze(c.pa),f.Ha(c.J),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function hm(){}n=hm.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ol(){}Ol.prototype.g=function(c,f){return new Zt(c,f)};function Zt(c,f){he.call(this),this.g=new em(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!k(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!k(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new li(this)}w(Zt,he),Zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Zt.prototype.close=function(){mh(this.g)},Zt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.u&&(p={},p.__data__=vt(c),c=p);f.i.push(new uS(f.Ya++,c)),f.G==3&&xl(f)},Zt.prototype.N=function(){this.g.l=null,delete this.j,mh(this.g),delete this.g,Zt.aa.N.call(this)};function dm(c){oh.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const p in f){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}w(dm,oh);function fm(){ah.call(this),this.status=1}w(fm,ah);function li(c){this.g=c}w(li,hm),li.prototype.ua=function(){me(this.g,"a")},li.prototype.ta=function(c){me(this.g,new dm(c))},li.prototype.sa=function(c){me(this.g,new fm)},li.prototype.ra=function(){me(this.g,"b")},Ol.prototype.createWebChannel=Ol.prototype.g,Zt.prototype.send=Zt.prototype.o,Zt.prototype.open=Zt.prototype.m,Zt.prototype.close=Zt.prototype.close,ST=function(){return new Ol},bT=function(){return El()},AT=ds,xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Tl.NO_ERROR=0,Tl.TIMEOUT=8,Tl.HTTP_ERROR=6,ic=Tl,Pg.COMPLETE="complete",wT=Pg,Ag.EventType=So,So.OPEN="a",So.CLOSE="b",So.ERROR="c",So.MESSAGE="d",he.prototype.listen=he.prototype.K,Jo=Ag,Ze.prototype.listenOnce=Ze.prototype.L,Ze.prototype.getLastError=Ze.prototype.Ka,Ze.prototype.getLastErrorCode=Ze.prototype.Ba,Ze.prototype.getStatus=Ze.prototype.Z,Ze.prototype.getResponseJson=Ze.prototype.Oa,Ze.prototype.getResponseText=Ze.prototype.oa,Ze.prototype.send=Ze.prototype.ea,Ze.prototype.setWithCredentials=Ze.prototype.Ha,TT=Ze}).apply(typeof jl<"u"?jl:typeof self<"u"?self:typeof window<"u"?window:{});const W_="@firebase/firestore",G_="4.8.0";/**
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
 */class Ct{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ct.UNAUTHENTICATED=new Ct(null),Ct.GOOGLE_CREDENTIALS=new Ct("google-credentials-uid"),Ct.FIRST_PARTY=new Ct("first-party-uid"),Ct.MOCK_USER=new Ct("mock-user");/**
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
 */let mo="11.10.0";/**
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
 */const Gs=new Cu("@firebase/firestore");function Ti(){return Gs.logLevel}function q(n,...e){if(Gs.logLevel<=Ie.DEBUG){const t=e.map(sp);Gs.debug(`Firestore (${mo}): ${n}`,...t)}}function rt(n,...e){if(Gs.logLevel<=Ie.ERROR){const t=e.map(sp);Gs.error(`Firestore (${mo}): ${n}`,...t)}}function es(n,...e){if(Gs.logLevel<=Ie.WARN){const t=e.map(sp);Gs.warn(`Firestore (${mo}): ${n}`,...t)}}function sp(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function re(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,RT(n,r,t)}function RT(n,e,t){let r=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw rt(r),new Error(r)}function ie(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||RT(e,s,r)}function se(n,e){return n}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Ir{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class hk{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ct.UNAUTHENTICATED))}shutdown(){}}class fk{constructor(e){this.t=e,this.currentUser=Ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kr)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string",31837,{l:r}),new hk(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string",2055,{h:e}),new Ct(e)}}class pk{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ct.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gk{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new pk(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class K_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mk{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){ie(this.o===void 0,3512);const r=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new K_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new K_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _k(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function CT(){return new TextEncoder}/**
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
 */class ip{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_k(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function de(n,e){return n<e?-1:n>e?1:0}function kd(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return de(r,s);{const i=CT(),o=yk(i.encode($_(n,t)),i.encode($_(e,t)));return o!==0?o:de(r,s)}}t+=r>65535?2:1}return de(n.length,e.length)}function $_(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function yk(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return de(n[t],e[t]);return de(n.length,e.length)}function Ki(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function PT(n){return n+"\0"}/**
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
 */const z_="__name__";class xn{constructor(e,t,r){t===void 0?t=0:t>e.length&&re(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&re(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return xn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=xn.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return de(e.length,t.length)}static compareSegments(e,t){const r=xn.isNumericId(e),s=xn.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?xn.extractNumericId(e).compare(xn.extractNumericId(t)):kd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gr.fromString(e.substring(4,e.length-2))}}class Ne extends xn{construct(e,t,r){return new Ne(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Ne(t)}static emptyPath(){return new Ne([])}}const vk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends xn{construct(e,t,r){return new Xe(e,t,r)}static isValidIdentifier(e){return vk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===z_}static keyField(){return new Xe([z_])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(t)}static emptyPath(){return new Xe([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ne.fromString(e))}static fromName(e){return new Y(Ne.fromString(e).popFirst(5))}static empty(){return new Y(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ne.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ne(e.slice()))}}/**
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
 */function NT(n,e,t){if(!t)throw new $(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ik(n,e,t,r){if(e===!0&&r===!0)throw new $(V.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function H_(n){if(!Y.isDocumentKey(n))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Q_(n){if(Y.isDocumentKey(n))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function DT(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function ku(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":re(12329,{type:typeof n})}function $r(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ku(n);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(n,e){const t={typeString:n};return e&&(t.value=e),t}function ol(n,e){if(!DT(n))throw new $(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(s&&typeof o!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new $(V.INVALID_ARGUMENT,t);return!0}/**
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
 */const Y_=-62135596800,X_=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*X_);return new Oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Y_)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/X_}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ol(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Y_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:ct("string",Oe._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};/**
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
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new Oe(0,0))}static max(){return new le(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const $i=-1;class Fc{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Od(n){return n.fields.find(e=>e.kind===2)}function Ts(n){return n.fields.filter(e=>e.kind!==2)}Fc.UNKNOWN_ID=-1;class oc{constructor(e,t){this.fieldPath=e,this.kind=t}}class La{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new La(0,ln.min())}}function xT(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new Oe(t+1,0):new Oe(t,r));return new ln(s,Y.empty(),e)}function kT(n){return new ln(n.readTime,n.key,$i)}class ln{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new ln(le.min(),Y.empty(),$i)}static max(){return new ln(le.max(),Y.empty(),$i)}}function op(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:de(n.largestBatchId,e.largestBatchId))}/**
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
 */const OT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ls(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==OT)throw n;q("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&re(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(s=>s?D.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new D((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;t(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,t){return new D((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
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
 */const en="SimpleDb";class Ou{static open(e,t,r,s){try{return new Ou(t,e.transaction(s,r))}catch(i){throw new ga(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Kr,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new ga(e,t.error)):this.S.resolve()},this.transaction.onerror=r=>{const s=ap(r.target.error);this.S.reject(new ga(e,s))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(q(en,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Tk(t)}}class zr{static delete(e){return q(en,"Removing database:",e),Ss(CE().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!LE())return!1;if(zr.F())return!0;const e=dt(),t=zr.M(e),r=0<t&&t<10,s=MT(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}constructor(e,t,r){this.name=e,this.version=t,this.B=r,this.L=null,zr.M(dt())===12.2&&rt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(q(en,"Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new ga(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new $(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new $(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ga(e,o))},s.onupgradeneeded=i=>{q(en,'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;if(this.L!==null&&this.L!==i.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${i.oldVersion}, event.newVersion=${i.newVersion}, db.version=${o.version}`);this.B.q(o,s.transaction,i.oldVersion,this.version).next(()=>{q(en,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const r=t.target;this.L=r.version},{passive:!0})),this.db.addEventListener("versionchange",t=>{var r;t.newVersion===null&&(es('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),(r=this.databaseDeletedListener)===null||r===void 0||r.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.k(e);const a=Ou.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next(u=>(a.v(),u)).catch(u=>(a.abort(u),D.reject(u))).toPromise();return l.catch(()=>{}),await a.D,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(q(en,"Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function MT(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Ek{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return Ss(this.$.delete())}}class ga extends ${constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function cs(n){return n.name==="IndexedDbTransactionError"}class Tk{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(q(en,"PUT",this.store.name,e,t),r=this.store.put(t,e)):(q(en,"PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Ss(r)}add(e){return q(en,"ADD",this.store.name,e,e),Ss(this.store.add(e))}get(e){return Ss(this.store.get(e)).next(t=>(t===void 0&&(t=null),q(en,"GET",this.store.name,e,t),t))}delete(e){return q(en,"DELETE",this.store.name,e),Ss(this.store.delete(e))}count(){return q(en,"COUNT",this.store.name),Ss(this.store.count())}j(e,t){const r=this.options(e,t),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new D((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.J(i,(a,l)=>{o.push(l)}).next(()=>o)}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new D((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}Y(e,t){q(en,"DELETE ALL",this.store.name);const r=this.options(e,t);r.Z=!1;const s=this.cursor(r);return this.J(s,(i,o,a)=>a.delete())}X(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.J(s,t)}ee(e){const t=this.cursor({});return new D((r,s)=>{t.onerror=i=>{const o=ap(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}J(e,t){const r=[];return new D((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new Ek(a),u=t(a.primaryKey,a.value,l);if(u instanceof D){const h=u.catch(d=>(l.done(),D.reject(d)));r.push(h)}l.isDone?s():l.W===null?a.continue():a.continue(l.W)}}).next(()=>D.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Z?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Ss(n){return new D((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=ap(r.target.error);t(s)}})}let J_=!1;function ap(n){const e=zr.M(dt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new $("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return J_||(J_=!0,setTimeout(()=>{throw r},0)),r}}return n}const ma="IndexBackfiller";class wk{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ne(e){q(ma,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.te.re();q(ma,`Documents written: ${t}`)}catch(t){cs(t)?q(ma,"Ignoring IndexedDB error during index backfill: ",t):await ls(t)}await this.ne(6e4)})}}class Ak{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){const r=new Set;let s=t,i=!0;return D.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return q(ma,`Processing collection: ${o}`),this.se(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}se(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.oe(s,i)).next(a=>(q(ma,`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}oe(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=kT(i);op(o,r)>0&&(r=o)}),new ln(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Ht{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Ht.ue=-1;/**
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
 */const Fs=-1;function Vu(n){return n==null}function Fa(n){return n===0&&1/n==-1/0}function LT(n){return typeof n=="number"&&Number.isInteger(n)&&!Fa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Uc="";function Mt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Z_(e)),e=bk(n.get(t),e);return Z_(e)}function bk(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Uc:t+="";break;default:t+=i}}return t}function Z_(n){return n+Uc+""}function Ln(n){const e=n.length;if(ie(e>=2,64408,{path:n}),e===2)return ie(n.charAt(0)===Uc&&n.charAt(1)==="",56145,{path:n}),Ne.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf(Uc,i);switch((o<0||o>t)&&re(50515,{path:n}),n.charAt(o+1)){case"":const a=n.substring(i,o);let l;s.length===0?l=a:(s+=a,l=s,s=""),r.push(l);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:re(61167,{path:n})}i=o+2}return new Ne(r)}/**
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
 */const ws="remoteDocuments",al="owner",di="owner",Ua="mutationQueues",Sk="userId",En="mutations",ey="batchId",xs="userMutationsIndex",ty=["userId","batchId"];/**
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
 */function ac(n,e){return[n,Mt(e)]}function FT(n,e,t){return[n,Mt(e),t]}const Rk={},zi="documentMutations",Bc="remoteDocumentsV14",Ck=["prefixPath","collectionGroup","readTime","documentId"],lc="documentKeyIndex",Pk=["prefixPath","collectionGroup","documentId"],UT="collectionGroupIndex",Nk=["collectionGroup","readTime","prefixPath","documentId"],Ba="remoteDocumentGlobal",Vd="remoteDocumentGlobalKey",Hi="targets",BT="queryTargetsIndex",Dk=["canonicalId","targetId"],Qi="targetDocuments",xk=["targetId","path"],lp="documentTargetsIndex",kk=["path","targetId"],jc="targetGlobalKey",Us="targetGlobal",ja="collectionParents",Ok=["collectionId","parent"],Yi="clientMetadata",Vk="clientId",Mu="bundles",Mk="bundleId",Lu="namedQueries",Lk="name",cp="indexConfiguration",Fk="indexId",Md="collectionGroupIndex",Uk="collectionGroup",_a="indexState",Bk=["indexId","uid"],jT="sequenceNumberIndex",jk=["uid","sequenceNumber"],ya="indexEntries",qk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],qT="documentKeyIndex",Wk=["indexId","uid","orderedDocumentKey"],Fu="documentOverlays",Gk=["userId","collectionPath","documentId"],Ld="collectionPathOverlayIndex",Kk=["userId","collectionPath","largestBatchId"],WT="collectionGroupOverlayIndex",$k=["userId","collectionGroup","largestBatchId"],up="globals",zk="name",GT=[Ua,En,zi,ws,Hi,al,Us,Qi,Yi,Ba,ja,Mu,Lu],Hk=[...GT,Fu],KT=[Ua,En,zi,Bc,Hi,al,Us,Qi,Yi,Ba,ja,Mu,Lu,Fu],$T=KT,hp=[...$T,cp,_a,ya],Qk=hp,zT=[...hp,up],Yk=zT;/**
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
 */class Fd extends VT{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function ft(n,e){const t=se(n);return zr.N(t.ce,e)}/**
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
 */function ny(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function us(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function HT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let Je=class Ud{constructor(e,t){this.comparator=e,this.root=t||Hr.EMPTY}insert(e,t){return new Ud(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Hr.BLACK,null,null))}remove(e){return new Ud(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Hr.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ql(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ql(this.root,e,this.comparator,!1)}getReverseIterator(){return new ql(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ql(this.root,e,this.comparator,!0)}},ql=class{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Hr=class Jn{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Jn.RED,this.left=s??Jn.EMPTY,this.right=i??Jn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Jn(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Jn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Jn.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw re(43730,{key:this.key,value:this.value});if(this.right.isRed())throw re(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw re(27949);return e+(this.isRed()?0:1)}};Hr.EMPTY=null,Hr.RED=!0,Hr.BLACK=!1;Hr.EMPTY=new class{constructor(){this.size=0}get key(){throw re(57766)}get value(){throw re(16141)}get color(){throw re(16727)}get left(){throw re(29726)}get right(){throw re(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Hr(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(e){this.comparator=e,this.data=new Je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ry(this.data.getIterator())}getIteratorFrom(e){return new ry(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Me(this.comparator);return t.data=e,t}}class ry{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function fi(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Qt{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new Qt([])}unionWith(e){let t=new Me(Xe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Qt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ki(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class QT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new QT("Invalid base64 string: "+i):i}}(e);return new ot(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ot(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const Xk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function mr(n){if(ie(!!n,39018),typeof n=="string"){let e=0;const t=Xk.exec(n);if(ie(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(n.seconds),nanos:ze(n.nanos)}}function ze(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _r(n){return typeof n=="string"?ot.fromBase64String(n):ot.fromUint8Array(n)}/**
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
 */const YT="server_timestamp",XT="__type__",JT="__previous_value__",ZT="__local_write_time__";function dp(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[XT])===null||t===void 0?void 0:t.stringValue)===YT}function Uu(n){const e=n.mapValue.fields[JT];return dp(e)?Uu(e):e}function qa(n){const e=mr(n.mapValue.fields[ZT].timestampValue);return new Oe(e.seconds,e.nanos)}/**
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
 */class Jk{constructor(e,t,r,s,i,o,a,l,u,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h}}const qc="(default)";class Ks{constructor(e,t){this.projectId=e,this.database=t||qc}static empty(){return new Ks("","")}get isDefaultDatabase(){return this.database===qc}isEqual(e){return e instanceof Ks&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const fp="__type__",ew="__max__",jr={mapValue:{fields:{__type__:{stringValue:ew}}}},pp="__vector__",Xi="value",cc={nullValue:"NULL_VALUE"};function ts(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?dp(n)?4:tw(n)?9007199254740991:Bu(n)?10:11:re(28295,{value:n})}function zn(n,e){if(n===e)return!0;const t=ts(n);if(t!==ts(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return qa(n).isEqual(qa(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=mr(s.timestampValue),a=mr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return _r(s.bytesValue).isEqual(_r(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),a=ze(i.doubleValue);return o===a?Fa(o)===Fa(a):isNaN(o)&&isNaN(a)}return!1}(n,e);case 9:return Ki(n.arrayValue.values||[],e.arrayValue.values||[],zn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(ny(o)!==ny(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!zn(o[l],a[l])))return!1;return!0}(n,e);default:return re(52216,{left:n})}}function Wa(n,e){return(n.values||[]).find(t=>zn(t,e))!==void 0}function ns(n,e){if(n===e)return 0;const t=ts(n),r=ts(e);if(t!==r)return de(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return de(n.booleanValue,e.booleanValue);case 2:return function(i,o){const a=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(n,e);case 3:return sy(n.timestampValue,e.timestampValue);case 4:return sy(qa(n),qa(e));case 5:return kd(n.stringValue,e.stringValue);case 6:return function(i,o){const a=_r(i),l=_r(o);return a.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=de(a[u],l[u]);if(h!==0)return h}return de(a.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const a=de(ze(i.latitude),ze(o.latitude));return a!==0?a:de(ze(i.longitude),ze(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return iy(n.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},g=o.fields||{},m=(a=d[Xi])===null||a===void 0?void 0:a.arrayValue,w=(l=g[Xi])===null||l===void 0?void 0:l.arrayValue,R=de(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return R!==0?R:iy(m,w)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===jr.mapValue&&o===jr.mapValue)return 0;if(i===jr.mapValue)return 1;if(o===jr.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const g=kd(l[d],h[d]);if(g!==0)return g;const m=ns(a[l[d]],u[h[d]]);if(m!==0)return m}return de(l.length,h.length)}(n.mapValue,e.mapValue);default:throw re(23264,{le:t})}}function sy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return de(n,e);const t=mr(n),r=mr(e),s=de(t.seconds,r.seconds);return s!==0?s:de(t.nanos,r.nanos)}function iy(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=ns(t[s],r[s]);if(i)return i}return de(t.length,r.length)}function Ji(n){return Bd(n)}function Bd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=mr(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return _r(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Bd(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Bd(t.fields[o])}`;return s+"}"}(n.mapValue):re(61005,{value:n})}function uc(n){switch(ts(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Uu(n);return e?16+uc(e):16;case 5:return 2*n.stringValue.length;case 6:return _r(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+uc(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return us(r.fields,(i,o)=>{s+=i.length+uc(o)}),s}(n.mapValue);default:throw re(13486,{value:n})}}function Ga(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function jd(n){return!!n&&"integerValue"in n}function Ka(n){return!!n&&"arrayValue"in n}function oy(n){return!!n&&"nullValue"in n}function ay(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function hc(n){return!!n&&"mapValue"in n}function Bu(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[fp])===null||t===void 0?void 0:t.stringValue)===pp}function va(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return us(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=va(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=va(n.arrayValue.values[t]);return e}return Object.assign({},n)}function tw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ew}const nw={mapValue:{fields:{[fp]:{stringValue:pp},[Xi]:{arrayValue:{}}}}};function Zk(n){return"nullValue"in n?cc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ga(Ks.empty(),Y.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?Bu(n)?nw:{mapValue:{}}:re(35942,{value:n})}function eO(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ga(Ks.empty(),Y.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?nw:"mapValue"in n?Bu(n)?{mapValue:{}}:jr:re(61959,{value:n})}function ly(n,e){const t=ns(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function cy(n,e){const t=ns(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!hc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=va(t)}setAll(e){let t=Xe.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=va(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());hc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];hc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){us(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ot(va(this.value))}}function rw(n){const e=[];return us(n.fields,(t,r)=>{const s=new Xe([t]);if(hc(r)){const i=rw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Qt(e)}/**
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
 */class tt{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,le.min(),le.min(),le.min(),Ot.empty(),0)}static newFoundDocument(e,t,r,s){return new tt(e,1,t,le.min(),r,s,0)}static newNoDocument(e,t){return new tt(e,2,t,le.min(),le.min(),Ot.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,le.min(),le.min(),Ot.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Zi{constructor(e,t){this.position=e,this.inclusive=t}}function uy(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),t.key):r=ns(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hy(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!zn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class $a{constructor(e,t="asc"){this.field=e,this.dir=t}}function tO(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class sw{}class Te extends sw{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new nO(e,t,r):t==="array-contains"?new iO(e,r):t==="in"?new uw(e,r):t==="not-in"?new oO(e,r):t==="array-contains-any"?new aO(e,r):new Te(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new rO(e,r):new sO(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ns(t,this.value)):t!==null&&ts(this.value)===ts(t)&&this.matchesComparison(ns(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ve extends sw{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Ve(e,t)}matches(e){return eo(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function eo(n){return n.op==="and"}function qd(n){return n.op==="or"}function gp(n){return iw(n)&&eo(n)}function iw(n){for(const e of n.filters)if(e instanceof Ve)return!1;return!0}function Wd(n){if(n instanceof Te)return n.field.canonicalString()+n.op.toString()+Ji(n.value);if(gp(n))return n.filters.map(e=>Wd(e)).join(",");{const e=n.filters.map(t=>Wd(t)).join(",");return`${n.op}(${e})`}}function ow(n,e){return n instanceof Te?function(r,s){return s instanceof Te&&r.op===s.op&&r.field.isEqual(s.field)&&zn(r.value,s.value)}(n,e):n instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&ow(o,s.filters[a]),!0):!1}(n,e):void re(19439)}function aw(n,e){const t=n.filters.concat(e);return Ve.create(t,n.op)}function lw(n){return n instanceof Te?function(t){return`${t.field.canonicalString()} ${t.op} ${Ji(t.value)}`}(n):n instanceof Ve?function(t){return t.op.toString()+" {"+t.getFilters().map(lw).join(" ,")+"}"}(n):"Filter"}class nO extends Te{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class rO extends Te{constructor(e,t){super(e,"in",t),this.keys=cw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class sO extends Te{constructor(e,t){super(e,"not-in",t),this.keys=cw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function cw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class iO extends Te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ka(t)&&Wa(t.arrayValue,this.value)}}class uw extends Te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wa(this.value.arrayValue,t)}}class oO extends Te{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wa(this.value.arrayValue,t)}}class aO extends Te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ka(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Wa(this.value.arrayValue,r))}}/**
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
 */class lO{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.Pe=null}}function Gd(n,e=null,t=[],r=[],s=null,i=null,o=null){return new lO(n,e,t,r,s,i,o)}function $s(n){const e=se(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Wd(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Vu(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ji(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ji(r)).join(",")),e.Pe=t}return e.Pe}function ll(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!tO(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ow(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!hy(n.startAt,e.startAt)&&hy(n.endAt,e.endAt)}function Wc(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Gc(n,e){return n.filters.filter(t=>t instanceof Te&&t.field.isEqual(e))}function dy(n,e,t){let r=cc,s=!0;for(const i of Gc(n,e)){let o=cc,a=!0;switch(i.op){case"<":case"<=":o=Zk(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=cc}ly({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];ly({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function fy(n,e,t){let r=jr,s=!0;for(const i of Gc(n,e)){let o=jr,a=!0;switch(i.op){case">=":case">":o=eO(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=jr}cy({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];cy({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class _o{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function hw(n,e,t,r,s,i,o,a){return new _o(n,e,t,r,s,i,o,a)}function ju(n){return new _o(n)}function py(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function dw(n){return n.collectionGroup!==null}function Ia(n){const e=se(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Me(Xe.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new $a(i,r))}),t.has(Xe.keyField().canonicalString())||e.Te.push(new $a(Xe.keyField(),r))}return e.Te}function on(n){const e=se(n);return e.Ie||(e.Ie=cO(e,Ia(n))),e.Ie}function cO(n,e){if(n.limitType==="F")return Gd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $a(s.field,i)});const t=n.endAt?new Zi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Zi(n.startAt.position,n.startAt.inclusive):null;return Gd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Kd(n,e){const t=n.filters.concat([e]);return new _o(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function $d(n,e,t){return new _o(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qu(n,e){return ll(on(n),on(e))&&n.limitType===e.limitType}function fw(n){return`${$s(on(n))}|lt:${n.limitType}`}function wi(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>lw(s)).join(", ")}]`),Vu(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ji(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ji(s)).join(",")),`Target(${r})`}(on(n))}; limitType=${n.limitType})`}function cl(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ia(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=uy(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ia(r),s)||r.endAt&&!function(o,a,l){const u=uy(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ia(r),s))}(n,e)}function pw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gw(n){return(e,t)=>{let r=!1;for(const s of Ia(n)){const i=uO(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function uO(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?ns(l,u):re(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return re(19790,{direction:n.dir})}}/**
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
 */class Tr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return HT(this.inner)}size(){return this.innerSize}}/**
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
 */const hO=new Je(Y.comparator);function rn(){return hO}const mw=new Je(Y.comparator);function Zo(...n){let e=mw;for(const t of n)e=e.insert(t.key,t);return e}function _w(n){let e=mw;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Fn(){return Ea()}function yw(){return Ea()}function Ea(){return new Tr(n=>n.toString(),(n,e)=>n.isEqual(e))}const dO=new Je(Y.comparator),fO=new Me(Y.comparator);function ve(...n){let e=fO;for(const t of n)e=e.add(t);return e}const pO=new Me(de);function mp(){return pO}/**
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
 */function _p(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fa(e)?"-0":e}}function vw(n){return{integerValue:""+n}}function gO(n,e){return LT(e)?vw(e):_p(n,e)}/**
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
 */class Wu{constructor(){this._=void 0}}function mO(n,e,t){return n instanceof to?function(s,i){const o={fields:{[XT]:{stringValue:YT},[ZT]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&dp(i)&&(i=Uu(i)),i&&(o.fields[JT]=i),{mapValue:o}}(t,e):n instanceof no?Ew(n,e):n instanceof ro?Tw(n,e):function(s,i){const o=Iw(s,i),a=gy(o)+gy(s.Ee);return jd(o)&&jd(s.Ee)?vw(a):_p(s.serializer,a)}(n,e)}function _O(n,e,t){return n instanceof no?Ew(n,e):n instanceof ro?Tw(n,e):t}function Iw(n,e){return n instanceof za?function(r){return jd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class to extends Wu{}class no extends Wu{constructor(e){super(),this.elements=e}}function Ew(n,e){const t=ww(e);for(const r of n.elements)t.some(s=>zn(s,r))||t.push(r);return{arrayValue:{values:t}}}class ro extends Wu{constructor(e){super(),this.elements=e}}function Tw(n,e){let t=ww(e);for(const r of n.elements)t=t.filter(s=>!zn(s,r));return{arrayValue:{values:t}}}class za extends Wu{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function gy(n){return ze(n.integerValue||n.doubleValue)}function ww(n){return Ka(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Aw{constructor(e,t){this.field=e,this.transform=t}}function yO(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof no&&s instanceof no||r instanceof ro&&s instanceof ro?Ki(r.elements,s.elements,zn):r instanceof za&&s instanceof za?zn(r.Ee,s.Ee):r instanceof to&&s instanceof to}(n.transform,e.transform)}class vO{constructor(e,t){this.version=e,this.transformResults=t}}class qt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qt}static exists(e){return new qt(void 0,e)}static updateTime(e){return new qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gu{}function bw(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Ku(n.key,qt.none()):new yo(n.key,n.data,qt.none());{const t=n.data,r=Ot.empty();let s=new Me(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new wr(n.key,r,new Qt(s.toArray()),qt.none())}}function IO(n,e,t){n instanceof yo?function(s,i,o){const a=s.value.clone(),l=_y(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,e,t):n instanceof wr?function(s,i,o){if(!dc(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=_y(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Sw(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ta(n,e,t,r){return n instanceof yo?function(i,o,a,l){if(!dc(i.precondition,o))return a;const u=i.value.clone(),h=yy(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(n,e,t,r):n instanceof wr?function(i,o,a,l){if(!dc(i.precondition,o))return a;const u=yy(i.fieldTransforms,l,o),h=o.data;return h.setAll(Sw(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(n,e,t,r):function(i,o,a){return dc(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,e,t)}function EO(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Iw(r.transform,s||null);i!=null&&(t===null&&(t=Ot.empty()),t.set(r.field,i))}return t||null}function my(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ki(r,s,(i,o)=>yO(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yo extends Gu{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wr extends Gu{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sw(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function _y(n,e,t){const r=new Map;ie(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,_O(o,a,t[s]))}return r}function yy(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,mO(i,o,e))}return r}class Ku extends Gu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rw extends Gu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yp{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&IO(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ta(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ta(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=yw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const l=bw(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ve())}isEqual(e){return this.batchId===e.batchId&&Ki(this.mutations,e.mutations,(t,r)=>my(t,r))&&Ki(this.baseMutations,e.baseMutations,(t,r)=>my(t,r))}}class vp{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return dO}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new vp(e,t,r,s)}}/**
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
 */class Ip{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class TO{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var lt,Ae;function wO(n){switch(n){case V.OK:return re(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return re(15467,{code:n})}}function Cw(n){if(n===void 0)return rt("GRPC error has no .code"),V.UNKNOWN;switch(n){case lt.OK:return V.OK;case lt.CANCELLED:return V.CANCELLED;case lt.UNKNOWN:return V.UNKNOWN;case lt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case lt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case lt.INTERNAL:return V.INTERNAL;case lt.UNAVAILABLE:return V.UNAVAILABLE;case lt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case lt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case lt.NOT_FOUND:return V.NOT_FOUND;case lt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case lt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case lt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case lt.ABORTED:return V.ABORTED;case lt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case lt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case lt.DATA_LOSS:return V.DATA_LOSS;default:return re(39323,{code:n})}}(Ae=lt||(lt={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const AO=new Gr([4294967295,4294967295],0);function vy(n){const e=CT().encode(n),t=new ET;return t.update(e),new Uint8Array(t.digest())}function Iy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gr([t,r],0),new Gr([s,i],0)]}class Ep{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ea(`Invalid padding: ${t}`);if(r<0)throw new ea(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ea(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ea(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Gr.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Gr.fromNumber(r)));return s.compare(AO)===1&&(s=new Gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=vy(e),[r,s]=Iy(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ep(i,s,t);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.fe===0)return;const t=vy(e),[r,s]=Iy(t);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ea extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ul{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,hl.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ul(le.min(),s,new Je(de),rn(),ve())}}class hl{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new hl(r,t,ve(),ve(),ve())}}/**
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
 */class fc{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Pw{constructor(e,t){this.targetId=e,this.De=t}}class Nw{constructor(e,t,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ey{constructor(){this.ve=0,this.Ce=Ty(),this.Fe=ot.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ve(),t=ve(),r=ve();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:re(38017,{changeType:i})}}),new hl(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Ty()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class bO{constructor(e){this.We=e,this.Ge=new Map,this.ze=rn(),this.je=Wl(),this.Je=Wl(),this.He=new Je(de)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:re(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Wc(i))if(r===0){const o=new Y(i.path);this.Xe(t,o,tt.newNoDocument(o,le.min()))}else ie(r===1,20013,{expectedCount:r});else{const o=this.ot(t);if(o!==r){const a=this._t(e),l=a?this.ut(a,e,o):1;if(l!==0){this.rt(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,u)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,a;try{o=_r(r).toUint8Array()}catch(l){if(l instanceof QT)return es("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ep(o,s,i)}catch(l){return es(l instanceof ea?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.fe===0?null:a}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.We.lt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Xe(t,i,null),s++)}),s}Pt(e){const t=new Map;this.Ge.forEach((i,o)=>{const a=this.st(o);if(a){if(i.current&&Wc(a.target)){const l=new Y(a.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,tt.newNoDocument(l,e))}i.Ne&&(t.set(o,i.Le()),i.ke())}});let r=ve();this.Je.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ze.forEach((i,o)=>o.setReadTime(e));const s=new ul(e,t,this.He,this.ze,r);return this.ze=rn(),this.je=Wl(),this.Je=Wl(),this.He=new Je(de),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ey,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Me(de),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Me(de),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||q("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ey),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Wl(){return new Je(Y.comparator)}function Ty(){return new Je(Y.comparator)}const SO={asc:"ASCENDING",desc:"DESCENDING"},RO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CO={and:"AND",or:"OR"};class PO{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function zd(n,e){return n.useProto3Json||Vu(e)?e:{value:e}}function so(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dw(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function NO(n,e){return so(n,e.toTimestamp())}function Gt(n){return ie(!!n,49232),le.fromTimestamp(function(t){const r=mr(t);return new Oe(r.seconds,r.nanos)}(n))}function Tp(n,e){return Hd(n,e).canonicalString()}function Hd(n,e){const t=function(s){return new Ne(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xw(n){const e=Ne.fromString(n);return ie(jw(e),10190,{key:e.toString()}),e}function Kc(n,e){return Tp(n.databaseId,e.path)}function Bs(n,e){const t=xw(e);if(t.get(1)!==n.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Vw(t))}function kw(n,e){return Tp(n.databaseId,e)}function Ow(n){const e=xw(n);return e.length===4?Ne.emptyPath():Vw(e)}function Qd(n){return new Ne(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vw(n){return ie(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function wy(n,e,t){return{name:Kc(n,e),fields:t.value.mapValue.fields}}function DO(n,e,t){const r=Bs(n,e.name),s=Gt(e.updateTime),i=e.createTime?Gt(e.createTime):le.min(),o=new Ot({mapValue:{fields:e.fields}}),a=tt.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function xO(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:re(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(ie(h===void 0||typeof h=="string",58123),ot.fromBase64String(h||"")):(ie(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),ot.fromUint8Array(h||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?V.UNKNOWN:Cw(u.code);return new $(h,u.message||"")}(o);t=new Nw(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bs(n,r.document.name),i=Gt(r.document.updateTime),o=r.document.createTime?Gt(r.document.createTime):le.min(),a=new Ot({mapValue:{fields:r.document.fields}}),l=tt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];t=new fc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bs(n,r.document),i=r.readTime?Gt(r.readTime):le.min(),o=tt.newNoDocument(s,i),a=r.removedTargetIds||[];t=new fc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bs(n,r.document),i=r.removedTargetIds||[];t=new fc([],i,s,null)}else{if(!("filter"in e))return re(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new TO(s,i),a=r.targetId;t=new Pw(a,o)}}return t}function $c(n,e){let t;if(e instanceof yo)t={update:wy(n,e.key,e.value)};else if(e instanceof Ku)t={delete:Kc(n,e.key)};else if(e instanceof wr)t={update:wy(n,e.key,e.data),updateMask:FO(e.fieldMask)};else{if(!(e instanceof Rw))return re(16599,{Rt:e.type});t={verify:Kc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof to)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof no)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ro)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof za)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw re(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:NO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re(27497)}(n,e.precondition)),t}function Yd(n,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?qt.updateTime(Gt(i.updateTime)):i.exists!==void 0?qt.exists(i.exists):qt.none()}(e.currentDocument):qt.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let l=null;if("setToServerValue"in a)ie(a.setToServerValue==="REQUEST_TIME",16630,{proto:a}),l=new to;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new no(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new ro(h)}else"increment"in a?l=new za(o,a.increment):re(16584,{proto:a});const u=Xe.fromServerFormat(a.fieldPath);return new Aw(u,l)}(n,s)):[];if(e.update){e.update.name;const s=Bs(n,e.update.name),i=new Ot({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Qt(u.map(h=>Xe.fromServerFormat(h)))}(e.updateMask);return new wr(s,i,o,t,r)}return new yo(s,i,t,r)}if(e.delete){const s=Bs(n,e.delete);return new Ku(s,t)}if(e.verify){const s=Bs(n,e.verify);return new Rw(s,t)}return re(1463,{proto:e})}function kO(n,e){return n&&n.length>0?(ie(e!==void 0,14353),n.map(t=>function(s,i){let o=s.updateTime?Gt(s.updateTime):Gt(i);return o.isEqual(le.min())&&(o=Gt(i)),new vO(o,s.transformResults||[])}(t,e))):[]}function Mw(n,e){return{documents:[kw(n,e.path)]}}function Lw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=kw(n,s);const i=function(u){if(u.length!==0)return Bw(Ve.create(u,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Ai(g.field),direction:VO(g.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=zd(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{Vt:t,parent:s}}function Fw(n){let e=Ow(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){ie(r===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(d){const g=Uw(d);return g instanceof Ve&&gp(g)?g.getFilters():[g]}(t.where));let o=[];t.orderBy&&(o=function(d){return d.map(g=>function(w){return new $a(bi(w.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(g))}(t.orderBy));let a=null;t.limit&&(a=function(d){let g;return g=typeof d=="object"?d.value:d,Vu(g)?null:g}(t.limit));let l=null;t.startAt&&(l=function(d){const g=!!d.before,m=d.values||[];return new Zi(m,g)}(t.startAt));let u=null;return t.endAt&&(u=function(d){const g=!d.before,m=d.values||[];return new Zi(m,g)}(t.endAt)),hw(e,s,o,i,a,"F",l,u)}function OO(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Uw(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=bi(t.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=bi(t.unaryFilter.field);return Te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bi(t.unaryFilter.field);return Te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bi(t.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return re(61313);default:return re(60726)}}(n):n.fieldFilter!==void 0?function(t){return Te.create(bi(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return re(58110);default:return re(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ve.create(t.compositeFilter.filters.map(r=>Uw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re(1026)}}(t.compositeFilter.op))}(n):re(30097,{filter:n})}function VO(n){return SO[n]}function MO(n){return RO[n]}function LO(n){return CO[n]}function Ai(n){return{fieldPath:n.canonicalString()}}function bi(n){return Xe.fromServerFormat(n.fieldPath)}function Bw(n){return n instanceof Te?function(t){if(t.op==="=="){if(ay(t.value))return{unaryFilter:{field:Ai(t.field),op:"IS_NAN"}};if(oy(t.value))return{unaryFilter:{field:Ai(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ay(t.value))return{unaryFilter:{field:Ai(t.field),op:"IS_NOT_NAN"}};if(oy(t.value))return{unaryFilter:{field:Ai(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(t.field),op:MO(t.op),value:t.value}}}(n):n instanceof Ve?function(t){const r=t.getFilters().map(s=>Bw(s));return r.length===1?r[0]:{compositeFilter:{op:LO(t.op),filters:r}}}(n):re(54877,{filter:n})}function FO(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function jw(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ar{constructor(e,t,r,s,i=le.min(),o=le.min(),a=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qw{constructor(e){this.gt=e}}function UO(n,e){let t;if(e.document)t=DO(n.gt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=Y.fromSegments(e.noDocument.path),s=Hs(e.noDocument.readTime);t=tt.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return re(56709);{const r=Y.fromSegments(e.unknownDocument.path),s=Hs(e.unknownDocument.version);t=tt.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(s){const i=new Oe(s[0],s[1]);return le.fromTimestamp(i)}(e.readTime)),t}function Ay(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:zc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Kc(i,o.key),fields:o.data.value.mapValue.fields,updateTime:so(i,o.version.toTimestamp()),createTime:so(i,o.createTime.toTimestamp())}}(n.gt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:zs(e.version)};else{if(!e.isUnknownDocument())return re(57904,{document:e});r.unknownDocument={path:t.path.toArray(),version:zs(e.version)}}return r}function zc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function zs(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Hs(n){const e=new Oe(n.seconds,n.nanoseconds);return le.fromTimestamp(e)}function Rs(n,e){const t=(e.baseMutations||[]).map(i=>Yd(n.gt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Yd(n.gt,i)),s=Oe.fromMillis(e.localWriteTimeMs);return new yp(e.batchId,s,t,r)}function ta(n){const e=Hs(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Hs(n.lastLimboFreeSnapshotVersion):le.min();let r;return r=function(i){return i.documents!==void 0}(n.query)?function(i){const o=i.documents.length;return ie(o===1,1966,{count:o}),on(ju(Ow(i.documents[0])))}(n.query):function(i){return on(Fw(i))}(n.query),new ar(r,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,ot.fromBase64String(n.resumeToken))}function Ww(n,e){const t=zs(e.snapshotVersion),r=zs(e.lastLimboFreeSnapshotVersion);let s;s=Wc(e.target)?Mw(n.gt,e.target):Lw(n.gt,e.target).Vt;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:$s(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Gw(n){const e=Fw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$d(e,e.limit,"L"):e}function Wh(n,e){return new Ip(e.largestBatchId,Yd(n.gt,e.overlayMutation))}function by(n,e){const t=e.path.lastSegment();return[n,Mt(e.path.popLast()),t]}function Sy(n,e,t,r){return{indexId:n,uid:e,sequenceNumber:t,readTime:zs(r.readTime),documentKey:Mt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class BO{getBundleMetadata(e,t){return Ry(e).get(t).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:Hs(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,t){return Ry(e).put(function(s){return{bundleId:s.id,createTime:zs(Gt(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Cy(e).get(t).next(r=>{if(r)return function(i){return{name:i.name,query:Gw(i.bundledQuery),readTime:Hs(i.readTime)}}(r)})}saveNamedQuery(e,t){return Cy(e).put(function(s){return{name:s.name,readTime:zs(Gt(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Ry(n){return ft(n,Mu)}function Cy(n){return ft(n,Lu)}/**
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
 */class $u{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const r=t.uid||"";return new $u(e,r)}getOverlay(e,t){return jo(e).get(by(this.userId,t)).next(r=>r?Wh(this.serializer,r):null)}getOverlays(e,t){const r=Fn();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new Ip(t,o);s.push(this.wt(e,a))}),D.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Mt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(jo(e).Y(Ld,a))}),D.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Fn(),i=Mt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return jo(e).j(Ld,o).next(a=>{for(const l of a){const u=Wh(this.serializer,l);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=Fn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return jo(e).X({index:WT,range:a},(l,u,h)=>{const d=Wh(this.serializer,u);i.size()<s||d.largestBatchId===o?(i.set(d.getKey(),d),o=d.largestBatchId):h.done()}).next(()=>i)}wt(e,t){return jo(e).put(function(s,i,o){const[a,l,u]=by(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:$c(s.gt,o.mutation)}}(this.serializer,this.userId,t))}}function jo(n){return ft(n,Fu)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{St(e){return ft(e,up)}getSessionToken(e){return this.St(e).get("sessionToken").next(t=>{const r=t==null?void 0:t.value;return r?ot.fromUint8Array(r):ot.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class Cs{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(ze(e.integerValue));else if("doubleValue"in e){const r=ze(e.doubleValue);isNaN(r)?this.Ct(t,13):(this.Ct(t,15),Fa(r)?t.Ft(0):t.Ft(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ct(t,20),typeof r=="string"&&(r=mr(r)),t.Mt(`${r.seconds||""}`),t.Ft(r.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(_r(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.Ct(t,45),t.Ft(r.latitude||0),t.Ft(r.longitude||0)}else"mapValue"in e?tw(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Bu(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):re(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const r=e.fields||{};this.Ct(t,55);for(const s of Object.keys(r))this.xt(s,t),this.Dt(r[s],t)}Lt(e,t){var r,s;const i=e.fields||{};this.Ct(t,53);const o=Xi,a=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.Ct(t,15),t.Ft(ze(a)),this.xt(o,t),this.Dt(i[o],t)}qt(e,t){const r=e.values||[];this.Ct(t,50);for(const s of r)this.Dt(s,t)}Bt(e,t){this.Ct(t,37),Y.fromName(e).path.forEach(r=>{this.Ct(t,60),this.$t(r,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}Cs.Ut=new Cs;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=255;function qO(n){if(n===0)return 8;let e=0;return n>>4||(e+=4,n<<=4),n>>6||(e+=2,n<<=2),n>>7||(e+=1),e}function Py(n){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=qO(255&r[i]);if(s+=o,o!==8)break}return s}(n);return Math.ceil(e/8)}class WO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Wt(r.value),r=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.jt(r.value),r=t.next();this.Jt()}Ht(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Wt(r);else if(r<2048)this.Wt(960|r>>>6),this.Wt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Wt(480|r>>>12),this.Wt(128|63&r>>>6),this.Wt(128|63&r);else{const s=t.codePointAt(0);this.Wt(240|s>>>18),this.Wt(128|63&s>>>12),this.Wt(128|63&s>>>6),this.Wt(128|63&s)}}this.Gt()}Yt(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.jt(r);else if(r<2048)this.jt(960|r>>>6),this.jt(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.jt(480|r>>>12),this.jt(128|63&r>>>6),this.jt(128|63&r);else{const s=t.codePointAt(0);this.jt(240|s>>>18),this.jt(128|63&s>>>12),this.jt(128|63&s>>>6),this.jt(128|63&s)}}this.Jt()}Zt(e){const t=this.Xt(e),r=Py(t);this.en(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}tn(e){const t=this.Xt(e),r=Py(t);this.en(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}nn(){this.rn(pi),this.rn(255)}sn(){this._n(pi),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=!!(128&t[0]);t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Wt(e){const t=255&e;t===0?(this.rn(0),this.rn(255)):t===pi?(this.rn(pi),this.rn(0)):this.rn(t)}jt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===pi?(this._n(pi),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class GO{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class KO{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class qo{constructor(){this.un=new WO,this.cn=new GO(this.un),this.ln=new KO(this.un)}seed(e){this.un.seed(e)}hn(e){return e===0?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}/**
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
 */class Ps{constructor(e,t,r,s){this.Pn=e,this.Tn=t,this.In=r,this.dn=s}En(){const e=this.dn.length,t=e===0||this.dn[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.dn,0),t!==e?r.set([0],this.dn.length):++r[r.length-1],new Ps(this.Pn,this.Tn,this.In,r)}An(e,t,r){return{indexId:this.Pn,uid:e,arrayValue:pc(this.In),directionalValue:pc(this.dn),orderedDocumentKey:pc(t),documentKey:r.path.toArray()}}Rn(e,t,r){const s=this.An(e,t,r);return[s.indexId,s.uid,s.arrayValue,s.directionalValue,s.orderedDocumentKey,s.documentKey]}}function Dr(n,e){let t=n.Pn-e.Pn;return t!==0?t:(t=Ny(n.In,e.In),t!==0?t:(t=Ny(n.dn,e.dn),t!==0?t:Y.comparator(n.Tn,e.Tn)))}function Ny(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}function pc(n){return ME()?function(t){let r="";for(let s=0;s<t.length;s++)r+=String.fromCharCode(t[s]);return r}(n):n}function Dy(n){return typeof n!="string"?n:function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(n)}class xy{constructor(e){this.Vn=new Me((t,r)=>Xe.comparator(t.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const r=t;r.isInequality()?this.Vn=this.Vn.add(r):this.fn.push(r)}}get gn(){return this.Vn.size>1}pn(e){if(ie(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=Od(e);if(t!==void 0&&!this.yn(t))return!1;const r=Ts(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.yn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Vn.size>0){const a=this.Vn.getIterator().getNext();if(!s.has(a.field.canonicalString())){const l=r[i];if(!this.wn(a,l)||!this.Sn(this.mn[o++],l))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.mn.length||!this.Sn(this.mn[o++],a))return!1}return!0}bn(){if(this.gn)return null;let e=new Me(Xe.comparator);const t=[];for(const r of this.fn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")t.push(new oc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),t.push(new oc(r.field,0))}for(const r of this.mn)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),t.push(new oc(r.field,r.dir==="asc"?0:1)));return new Fc(Fc.UNKNOWN_ID,this.collectionId,t,La.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Kw(n){var e,t;if(ie(n instanceof Te||n instanceof Ve,20012),n instanceof Te){if(n instanceof uw){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>Te.create(n.field,"==",i)))||[];return Ve.create(s,"or")}return n}const r=n.filters.map(s=>Kw(s));return Ve.create(r,n.op)}function $O(n){if(n.getFilters().length===0)return[];const e=Zd(Kw(n));return ie($w(e),7391),Xd(e)||Jd(e)?[e]:e.getFilters()}function Xd(n){return n instanceof Te}function Jd(n){return n instanceof Ve&&gp(n)}function $w(n){return Xd(n)||Jd(n)||function(t){if(t instanceof Ve&&qd(t)){for(const r of t.getFilters())if(!Xd(r)&&!Jd(r))return!1;return!0}return!1}(n)}function Zd(n){if(ie(n instanceof Te||n instanceof Ve,34018),n instanceof Te)return n;if(n.filters.length===1)return Zd(n.filters[0]);const e=n.filters.map(r=>Zd(r));let t=Ve.create(e,n.op);return t=Hc(t),$w(t)?t:(ie(t instanceof Ve,64498),ie(eo(t),40251),ie(t.filters.length>1,57927),t.filters.reduce((r,s)=>wp(r,s)))}function wp(n,e){let t;return ie(n instanceof Te||n instanceof Ve,38388),ie(e instanceof Te||e instanceof Ve,25473),t=n instanceof Te?e instanceof Te?function(s,i){return Ve.create([s,i],"and")}(n,e):ky(n,e):e instanceof Te?ky(e,n):function(s,i){if(ie(s.filters.length>0&&i.filters.length>0,48005),eo(s)&&eo(i))return aw(s,i.getFilters());const o=qd(s)?s:i,a=qd(s)?i:s,l=o.filters.map(u=>wp(u,a));return Ve.create(l,"or")}(n,e),Hc(t)}function ky(n,e){if(eo(e))return aw(e,n.getFilters());{const t=e.filters.map(r=>wp(n,r));return Ve.create(t,"or")}}function Hc(n){if(ie(n instanceof Te||n instanceof Ve,11850),n instanceof Te)return n;const e=n.getFilters();if(e.length===1)return Hc(e[0]);if(iw(n))return n;const t=e.map(s=>Hc(s)),r=[];return t.forEach(s=>{s instanceof Te?r.push(s):s instanceof Ve&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:Ve.create(r,n.op)}/**
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
 */class zO{constructor(){this.Dn=new Ap}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(ln.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(ln.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Ap{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Me(Ne.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Me(Ne.comparator)).toArray()}}/**
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
 */const Oy="IndexedDbIndexManager",Gl=new Uint8Array(0);class HO{constructor(e,t){this.databaseId=t,this.vn=new Ap,this.Cn=new Tr(r=>$s(r),(r,s)=>ll(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const i={collectionId:r,parent:Mt(s)};return Vy(e).put(i)}return D.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[PT(t),""],!1,!0);return Vy(e).j(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(Ln(o.parent))}return r})}addFieldIndex(e,t){const r=Wo(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=mi(e);return i.next(a=>{o.put(Sy(a,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Wo(e),s=mi(e),i=gi(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Wo(e),r=gi(e),s=mi(e);return t.Y().next(()=>r.Y()).next(()=>s.Y())}createTargetIndexes(e,t){return D.forEach(this.Fn(t),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new xy(r).bn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const r=gi(e);let s=!0;const i=new Map;return D.forEach(this.Fn(t),o=>this.Mn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=ve();const a=[];return D.forEach(i,(l,u)=>{q(Oy,`Using index ${function(M){return`id=${M.indexId}|cg=${M.collectionGroup}|f=${M.fields.map(W=>`${W.fieldPath}:${W.kind}`).join(",")}`}(l)} to execute ${$s(t)}`);const h=function(M,W){const te=Od(W);if(te===void 0)return null;for(const H of Gc(M,te.fieldPath))switch(H.op){case"array-contains-any":return H.value.arrayValue.values||[];case"array-contains":return[H.value]}return null}(u,l),d=function(M,W){const te=new Map;for(const H of Ts(W))for(const T of Gc(M,H.fieldPath))switch(T.op){case"==":case"in":te.set(H.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return te.set(H.fieldPath.canonicalString(),T.value),Array.from(te.values())}return null}(u,l),g=function(M,W){const te=[];let H=!0;for(const T of Ts(W)){const y=T.kind===0?dy(M,T.fieldPath,M.startAt):fy(M,T.fieldPath,M.startAt);te.push(y.value),H&&(H=y.inclusive)}return new Zi(te,H)}(u,l),m=function(M,W){const te=[];let H=!0;for(const T of Ts(W)){const y=T.kind===0?fy(M,T.fieldPath,M.endAt):dy(M,T.fieldPath,M.endAt);te.push(y.value),H&&(H=y.inclusive)}return new Zi(te,H)}(u,l),w=this.xn(l,u,g),R=this.xn(l,u,m),P=this.On(l,u,d),j=this.Nn(l.indexId,h,w,g.inclusive,R,m.inclusive,P);return D.forEach(j,k=>r.H(k,t.limit).next(M=>{M.forEach(W=>{const te=Y.fromSegments(W.documentKey);o.has(te)||(o=o.add(te),a.push(te))})}))}).next(()=>a)}return D.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(e.filters.length===0?t=[e]:t=$O(Ve.create(e.filters,"and")).map(r=>Gd(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,r,s,i,o,a){const l=(t!=null?t.length:1)*Math.max(r.length,i.length),u=l/(t!=null?t.length:1),h=[];for(let d=0;d<l;++d){const g=t?this.Bn(t[d/u]):Gl,m=this.Ln(e,g,r[d%u],s),w=this.kn(e,g,i[d%u],o),R=a.map(P=>this.Ln(e,g,P,!0));h.push(...this.createRange(m,w,R))}return h}Ln(e,t,r,s){const i=new Ps(e,Y.empty(),t,r);return s?i:i.En()}kn(e,t,r,s){const i=new Ps(e,Y.empty(),t,r);return s?i.En():i}Mn(e,t){const r=new xy(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.pn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.Fn(t);return D.forEach(s,i=>this.Mn(e,i).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new Me(Xe.comparator),h=!1;for(const d of l.filters)for(const g of d.getFlattenedFilters())g.field.isKeyField()||(g.op==="array-contains"||g.op==="array-contains-any"?h=!0:u=u.add(g.field));for(const d of l.orderBy)d.field.isKeyField()||(u=u.add(d.field));return u.size+(h?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&r===2?1:r)}qn(e,t){const r=new qo;for(const s of Ts(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.hn(s.kind);Cs.Ut.bt(i,o)}return r.an()}Bn(e){const t=new qo;return Cs.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const r=new qo;return Cs.Ut.bt(Ga(this.databaseId,t),r.hn(function(i){const o=Ts(i);return o.length===0?0:o[o.length-1].kind}(e))),r.an()}On(e,t,r){if(r===null)return[];let s=[];s.push(new qo);let i=0;for(const o of Ts(e)){const a=r[i++];for(const l of s)if(this.$n(t,o.fieldPath)&&Ka(a))s=this.Un(s,o,a);else{const u=l.hn(o.kind);Cs.Ut.bt(a,u)}}return this.Kn(s)}xn(e,t,r){return this.On(e,t,r.position)}Kn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].an();return t}Un(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const l=new qo;l.seed(a.an()),Cs.Ut.bt(o,l.hn(t.kind)),i.push(l)}return i}$n(e,t){return!!e.filters.find(r=>r instanceof Te&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Wo(e),s=mi(e);return(t?r.j(Md,IDBKeyRange.bound(t,t)):r.j()).next(i=>{const o=[];return D.forEach(i,a=>s.get([a.indexId,this.uid]).next(l=>{o.push(function(h,d){const g=d?new La(d.sequenceNumber,new ln(Hs(d.readTime),new Y(Ln(d.documentKey)),d.largestBatchId)):La.empty(),m=h.fields.map(([w,R])=>new oc(Xe.fromServerFormat(w),R));return new Fc(h.indexId,h.collectionGroup,m,g)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:de(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Wo(e),i=mi(e);return this.Wn(e).next(o=>s.j(Md,IDBKeyRange.bound(t,t)).next(a=>D.forEach(a,l=>i.put(Sy(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,t){const r=new Map;return D.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),D.forEach(a,l=>this.Gn(e,s,l).next(u=>{const h=this.zn(i,l);return u.isEqual(h)?D.resolve():this.jn(e,i,l,u,h)}))))})}Jn(e,t,r,s){return gi(e).put(s.An(this.uid,this.Qn(r,t.key),t.key))}Hn(e,t,r,s){return gi(e).delete(s.Rn(this.uid,this.Qn(r,t.key),t.key))}Gn(e,t,r){const s=gi(e);let i=new Me(Dr);return s.X({index:qT,range:IDBKeyRange.only([r.indexId,this.uid,pc(this.Qn(r,t))])},(o,a)=>{i=i.add(new Ps(r.indexId,t,Dy(a.arrayValue),Dy(a.directionalValue)))}).next(()=>i)}zn(e,t){let r=new Me(Dr);const s=this.qn(t,e);if(s==null)return r;const i=Od(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ka(o))for(const a of o.arrayValue.values||[])r=r.add(new Ps(t.indexId,e.key,this.Bn(a),s))}else r=r.add(new Ps(t.indexId,e.key,Gl,s));return r}jn(e,t,r,s,i){q(Oy,"Updating index entries for document '%s'",t.key);const o=[];return function(l,u,h,d,g){const m=l.getIterator(),w=u.getIterator();let R=fi(m),P=fi(w);for(;R||P;){let j=!1,k=!1;if(R&&P){const M=h(R,P);M<0?k=!0:M>0&&(j=!0)}else R!=null?k=!0:j=!0;j?(d(P),P=fi(w)):k?(g(R),R=fi(m)):(R=fi(m),P=fi(w))}}(s,i,Dr,a=>{o.push(this.Jn(e,t,r,a))},a=>{o.push(this.Hn(e,t,r,a))}),D.waitFor(o)}Wn(e){let t=1;return mi(e).X({index:jT,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>Dr(o,a)).filter((o,a,l)=>!a||Dr(o,l[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=Dr(o,e),l=Dr(o,t);if(a===0)s[0]=e.En();else if(a>0&&l<0)s.push(o),s.push(o.En());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Yn(s[o],s[o+1]))return[];const a=s[o].Rn(this.uid,Gl,Y.empty()),l=s[o+1].Rn(this.uid,Gl,Y.empty());i.push(IDBKeyRange.bound(a,l))}return i}Yn(e,t){return Dr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(My)}getMinOffset(e,t){return D.mapArray(this.Fn(t),r=>this.Mn(e,r).next(s=>s||re(44426))).next(My)}}function Vy(n){return ft(n,ja)}function gi(n){return ft(n,ya)}function Wo(n){return ft(n,cp)}function mi(n){return ft(n,_a)}function My(n){ie(n.length!==0,28825);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;op(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new ln(e.readTime,e.documentKey,t)}/**
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
 */const Ly={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zw=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function Hw(n,e,t){const r=n.store(En),s=n.store(zi),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const l=r.X({range:o},(h,d,g)=>(a++,g.delete()));i.push(l.next(()=>{ie(a===1,47070,{batchId:t.batchId})}));const u=[];for(const h of t.mutations){const d=FT(e,h.key.path,t.batchId);i.push(s.delete(d)),u.push(h.key)}return D.waitFor(i).next(()=>u)}function Qc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw re(14731);e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(zw,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);class zu{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.Zn={}}static yt(e,t,r,s){ie(e.uid!=="",64387);const i=e.isAuthenticated()?e.uid:"";return new zu(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return xr(e).X({index:xs,range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Si(e),o=xr(e);return o.add({}).next(a=>{ie(typeof a=="number",49019);const l=new yp(a,t,r,s),u=function(m,w,R){const P=R.baseMutations.map(k=>$c(m.gt,k)),j=R.mutations.map(k=>$c(m.gt,k));return{userId:w,batchId:R.batchId,localWriteTimeMs:R.localWriteTime.toMillis(),baseMutations:P,mutations:j}}(this.serializer,this.userId,l),h=[];let d=new Me((g,m)=>de(g.canonicalString(),m.canonicalString()));for(const g of s){const m=FT(this.userId,g.key.path,a);d=d.add(g.key.path.popLast()),h.push(o.put(u)),h.push(i.put(m,Rk))}return d.forEach(g=>{h.push(this.indexManager.addToCollectionParentIndex(e,g))}),e.addOnCommittedListener(()=>{this.Zn[a]=l.keys()}),D.waitFor(h).next(()=>l)})}lookupMutationBatch(e,t){return xr(e).get(t).next(r=>r?(ie(r.userId===this.userId,48,"Unexpected user for mutation batch",{userId:r.userId,batchId:t}),Rs(this.serializer,r)):null)}Xn(e,t){return this.Zn[t]?D.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.Zn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return xr(e).X({index:xs,range:s},(o,a,l)=>{a.userId===this.userId&&(ie(a.batchId>=r,47524,{er:r}),i=Rs(this.serializer,a)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=Fs;return xr(e).X({index:xs,range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Fs],[this.userId,Number.POSITIVE_INFINITY]);return xr(e).j(xs,t).next(r=>r.map(s=>Rs(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=ac(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Si(e).X({range:s},(o,a,l)=>{const[u,h,d]=o,g=Ln(h);if(u===this.userId&&t.path.isEqual(g))return xr(e).get(d).next(m=>{if(!m)throw re(61480,{tr:o,batchId:d});ie(m.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:m.userId,batchId:d}),i.push(Rs(this.serializer,m))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Me(de);const s=[];return t.forEach(i=>{const o=ac(this.userId,i.path),a=IDBKeyRange.lowerBound(o),l=Si(e).X({range:a},(u,h,d)=>{const[g,m,w]=u,R=Ln(m);g===this.userId&&i.path.isEqual(R)?r=r.add(w):d.done()});s.push(l)}),D.waitFor(s).next(()=>this.nr(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=ac(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new Me(de);return Si(e).X({range:o},(l,u,h)=>{const[d,g,m]=l,w=Ln(g);d===this.userId&&r.isPrefixOf(w)?w.length===s&&(a=a.add(m)):h.done()}).next(()=>this.nr(e,a))}nr(e,t){const r=[],s=[];return t.forEach(i=>{s.push(xr(e).get(i).next(o=>{if(o===null)throw re(35274,{batchId:i});ie(o.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:o.userId,batchId:i}),r.push(Rs(this.serializer,o))}))}),D.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return Hw(e.ce,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),D.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Si(e).X({range:r},(i,o,a)=>{if(i[0]===this.userId){const l=Ln(i[1]);s.push(l)}else a.done()}).next(()=>{ie(s.length===0,56720,{ir:s.map(i=>i.canonicalString())})})})}containsKey(e,t){return Qw(e,this.userId,t)}sr(e){return Yw(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Fs,lastStreamToken:""})}}function Qw(n,e,t){const r=ac(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Si(n).X({range:i,Z:!0},(a,l,u)=>{const[h,d,g]=a;h===e&&d===s&&(o=!0),u.done()}).next(()=>o)}function xr(n){return ft(n,En)}function Si(n){return ft(n,zi)}function Yw(n){return ft(n,Ua)}/**
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
 */class Qs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Qs(0)}static ur(){return new Qs(-1)}}/**
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
 */class QO{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{const r=new Qs(t.highestTargetId);return t.highestTargetId=r.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(t=>le.fromTimestamp(new Oe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.cr(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.lr(e,s)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(r=>(r.targetCount+=1,this.Pr(t,r),this.lr(e,r))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>_i(e).delete(t.targetId)).next(()=>this.cr(e)).next(r=>(ie(r.targetCount>0,8065),r.targetCount-=1,this.lr(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return _i(e).X((o,a)=>{const l=ta(a);l.sequenceNumber<=t&&r.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>D.waitFor(i)).next(()=>s)}forEachTarget(e,t){return _i(e).X((r,s)=>{const i=ta(s);t(i)})}cr(e){return Fy(e).get(jc).next(t=>(ie(t!==null,2888),t))}lr(e,t){return Fy(e).put(jc,t)}hr(e,t){return _i(e).put(Ww(this.serializer,t))}Pr(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.cr(e).next(t=>t.targetCount)}getTargetData(e,t){const r=$s(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return _i(e).X({range:s,index:BT},(o,a,l)=>{const u=ta(a);ll(t,u.target)&&(i=u,l.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Br(e);return t.forEach(o=>{const a=Mt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(s)}removeMatchingKeys(e,t,r){const s=Br(e);return D.forEach(t,i=>{const o=Mt(i.path);return D.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Br(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Br(e);let i=ve();return s.X({range:r,Z:!0},(o,a,l)=>{const u=Ln(o[1]),h=new Y(u);i=i.add(h)}).next(()=>i)}containsKey(e,t){const r=Mt(t.path),s=IDBKeyRange.bound([r],[PT(r)],!1,!0);let i=0;return Br(e).X({index:lp,Z:!0,range:s},([o,a],l,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Et(e,t){return _i(e).get(t).next(r=>r?ta(r):null)}}function _i(n){return ft(n,Hi)}function Fy(n){return ft(n,Us)}function Br(n){return ft(n,Qi)}/**
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
 */const Uy="LruGarbageCollector",Xw=1048576;function By([n,e],[t,r]){const s=de(n,t);return s===0?de(e,r):s}class YO{constructor(e){this.Tr=e,this.buffer=new Me(By),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();By(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Jw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){q(Uy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cs(t)?q(Uy,"Ignoring IndexedDB error during garbage collection: ",t):await ls(t)}await this.Rr(3e5)})}}class XO{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Ht.ue);const r=new YO(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(Ly)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ly):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,t))).next(d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(u=Date.now(),Ti()<=Ie.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d})))}}function Zw(n,e){return new XO(n,e)}/**
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
 */class JO{constructor(e,t){this.db=e,this.garbageCollector=Zw(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(r,s)=>t(s))}addReference(e,t,r){return Kl(e,r)}removeReference(e,t,r){return Kl(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return Kl(e,t)}Sr(e,t){return function(s,i){let o=!1;return Yw(s).ee(a=>Qw(s,a,i).next(l=>(l&&(o=!0),D.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.wr(e,(o,a)=>{if(a<=t){const l=this.Sr(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,le.min()),Br(e).delete(function(d){return[0,Mt(d.path)]}(o))))});s.push(l)}}).next(()=>D.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return Kl(e,t)}wr(e,t){const r=Br(e);let s,i=Ht.ue;return r.X({index:lp},([o,a],{path:l,sequenceNumber:u})=>{o===0?(i!==Ht.ue&&t(new Y(Ln(s)),i),i=u,s=l):i=Ht.ue}).next(()=>{i!==Ht.ue&&t(new Y(Ln(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Kl(n,e){return Br(n).put(function(r,s){return{targetId:0,path:Mt(r.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class eA{constructor(){this.changes=new Tr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ZO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return vs(e).put(r)}removeEntry(e,t,r){return vs(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],zc(o),a[a.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.br(e,r)))}getEntry(e,t){let r=tt.newInvalidDocument(t);return vs(e).X({index:lc,range:IDBKeyRange.only(Go(t))},(s,i)=>{r=this.Dr(t,i)}).next(()=>r)}vr(e,t){let r={size:0,document:tt.newInvalidDocument(t)};return vs(e).X({index:lc,range:IDBKeyRange.only(Go(t))},(s,i)=>{r={document:this.Dr(t,i),size:Qc(i)}}).next(()=>r)}getEntries(e,t){let r=rn();return this.Cr(e,t,(s,i)=>{const o=this.Dr(s,i);r=r.insert(s,o)}).next(()=>r)}Fr(e,t){let r=rn(),s=new Je(Y.comparator);return this.Cr(e,t,(i,o)=>{const a=this.Dr(i,o);r=r.insert(i,a),s=s.insert(i,Qc(o))}).next(()=>({documents:r,Mr:s}))}Cr(e,t,r){if(t.isEmpty())return D.resolve();let s=new Me(Wy);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Go(s.first()),Go(s.last())),o=s.getIterator();let a=o.getNext();return vs(e).X({index:lc,range:i},(l,u,h)=>{const d=Y.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Wy(a,d)<0;)r(a,null),a=o.getNext();a&&a.isEqual(d)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?h.G(Go(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s,i){const o=t.path,a=[o.popLast().toArray(),o.lastSegment(),zc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return vs(e).j(IDBKeyRange.bound(a,l,!0)).next(u=>{i==null||i.incrementDocumentReadCount(u.length);let h=rn();for(const d of u){const g=this.Dr(Y.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);g.isFoundDocument()&&(cl(t,g)||s.has(g.key))&&(h=h.insert(g.key,g))}return h})}getAllFromCollectionGroup(e,t,r,s){let i=rn();const o=qy(t,r),a=qy(t,ln.max());return vs(e).X({index:UT,range:IDBKeyRange.bound(o,a,!0)},(l,u,h)=>{const d=this.Dr(Y.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(d.key,d),i.size===s&&h.done()}).next(()=>i)}newChangeBuffer(e){return new e1(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return jy(e).get(Vd).next(t=>(ie(!!t,20021),t))}br(e,t){return jy(e).put(Vd,t)}Dr(e,t){if(t){const r=UO(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(le.min())))return r}return tt.newInvalidDocument(e)}}function tA(n){return new ZO(n)}class e1 extends eA{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new Tr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new Me((i,o)=>de(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Nr.get(i);if(t.push(this.Or.removeEntry(e,i,a.readTime)),o.isValidDocument()){const l=Ay(this.Or.serializer,o);s=s.add(i.path.popLast());const u=Qc(l);r+=u-a.size,t.push(this.Or.addEntry(e,i,l))}else if(r-=a.size,this.trackRemovals){const l=Ay(this.Or.serializer,o.convertToNoDocument(le.min()));t.push(this.Or.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Or.updateMetadata(e,r)),D.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(r=>(this.Nr.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:r,Mr:s})=>(s.forEach((i,o)=>{this.Nr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function jy(n){return ft(n,Ba)}function vs(n){return ft(n,Bc)}function Go(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function qy(n,e){const t=e.documentKey.path.toArray();return[n,zc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Wy(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=de(t[i],r[i]),s)return s;return s=de(t.length,r.length),s||(s=de(t[t.length-2],r[r.length-2]),s||de(t[t.length-1],r[r.length-1]))}/**
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
 */class t1{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class nA{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Ta(r.mutation,s,Qt.empty(),Oe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ve()){const s=Fn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=Zo();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Fn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ve()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=rn();const o=Ea(),a=function(){return Ea()}();return t.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof wr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ta(h.mutation,u,h.mutation.getFieldMask(),Oe.now())):o.set(u.key,Qt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),t.forEach((u,h)=>{var d;return a.set(u,new t1(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Ea();let s=new Je((o,a)=>o-a),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=t.get(l);if(u===null)return;let h=r.get(l)||Qt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||ve()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=yw();h.forEach(g=>{if(!i.has(g)){const m=bw(t.get(g),r.get(g));m!==null&&d.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return Y.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):dw(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(Fn());let a=$i,l=i;return o.next(u=>D.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?D.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(h=>({batchId:a,changes:_w(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let s=Zo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=Zo();return this.indexManager.getCollectionParents(e,i).next(a=>D.forEach(a,l=>{const u=function(d,g){return new _o(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,tt.newInvalidDocument(h)))});let a=Zo();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Ta(h.mutation,u,Qt.empty(),Oe.now()),cl(t,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class n1{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(s){return{name:s.name,query:Gw(s.bundledQuery),readTime:Gt(s.readTime)}}(t)),D.resolve()}}/**
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
 */class r1{constructor(){this.overlays=new Je(Y.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Fn();return D.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.wt(e,t,i)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=Fn(),i=t.length+1,o=new Y(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Je((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=Fn(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Fn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return D.resolve(a)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Ip(t,r));let i=this.kr.get(t);i===void 0&&(i=ve(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
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
 */class bp{constructor(){this.qr=new Me(gt.Qr),this.$r=new Me(gt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new gt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new gt(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new Y(new Ne([])),r=new gt(t,e),s=new gt(t,e+1),i=[];return this.$r.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Y(new Ne([])),r=new gt(t,e),s=new gt(t,e+1);let i=ve();return this.$r.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new gt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class gt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Y.comparator(e.key,t.key)||de(e.Hr,t.Hr)}static Ur(e,t){return de(e.Hr,t.Hr)||Y.comparator(e.key,t.key)}}/**
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
 */class i1{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Me(gt.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yp(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this.Yr=this.Yr.add(new gt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Fs:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new gt(t,0),s=new gt(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],o=>{const a=this.Zr(o.Hr);i.push(a)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Me(de);return t.forEach(s=>{const i=new gt(s,0),o=new gt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],a=>{r=r.add(a.Hr)})}),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const o=new gt(new Y(i),0);let a=new Me(de);return this.Yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.Hr)),!0)},o),D.resolve(this.ei(a))}ei(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){ie(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(t.mutations,s=>{const i=new gt(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new gt(t,0),s=this.Yr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class o1{constructor(e){this.ni=e,this.docs=function(){return new Je(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let r=rn();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=rn();const o=t.path,a=new Y(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||op(kT(h),r)<=0||(s.has(h.key)||cl(t,h))&&(i=i.insert(h.key,h.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){re(9500)}ri(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new a1(this)}getSize(e){return D.resolve(this.size)}}class a1 extends eA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class l1{constructor(e){this.persistence=e,this.ii=new Tr(t=>$s(t),ll),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.si=0,this.oi=new bp,this.targetCount=0,this._i=Qs.ar()}forEachTarget(e,t){return this.ii.forEach((r,s)=>t(s)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Qs(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),D.waitFor(i).next(()=>s)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}/**
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
 */class Sp{constructor(e,t){this.ai={},this.overlays={},this.ui=new Ht(0),this.ci=!1,this.ci=!0,this.li=new s1,this.referenceDelegate=e(this),this.hi=new l1(this),this.indexManager=new zO,this.remoteDocumentCache=function(s){return new o1(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new qw(t),this.Ti=new n1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new r1,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new i1(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){q("MemoryPersistence","Starting transaction:",e);const s=new c1(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return D.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class c1 extends VT{constructor(e){super(),this.currentSequenceNumber=e}}class Hu{constructor(e){this.persistence=e,this.Ai=new bp,this.Ri=null}static Vi(e){return new Hu(e)}get mi(){if(this.Ri)return this.Ri;throw re(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,r=>{const s=Y.fromPath(r);return this.fi(e,s).next(i=>{i||t.removeEntry(s,le.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Yc{constructor(e,t){this.persistence=e,this.gi=new Tr(r=>Mt(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Zw(this,t)}static Vi(e,t){return new Yc(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return D.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?D.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,o=>this.Sr(e,o,t).next(a=>{a||(r++,i.removeEntry(o,le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uc(e.data.value)),t}Sr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class u1{constructor(e){this.serializer=e}q(e,t,r,s){const i=new Ou("createOrUpgrade",t);r<1&&s>=1&&(function(l){l.createObjectStore(al)}(e),function(l){l.createObjectStore(Ua,{keyPath:Sk}),l.createObjectStore(En,{keyPath:ey,autoIncrement:!0}).createIndex(xs,ty,{unique:!0}),l.createObjectStore(zi)}(e),Gy(e),function(l){l.createObjectStore(ws)}(e));let o=D.resolve();return r<3&&s>=3&&(r!==0&&(function(l){l.deleteObjectStore(Qi),l.deleteObjectStore(Hi),l.deleteObjectStore(Us)}(e),Gy(e)),o=o.next(()=>function(l){const u=l.store(Us),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:le.min().toTimestamp(),targetCount:0};return u.put(jc,h)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store(En).j().next(d=>{l.deleteObjectStore(En),l.createObjectStore(En,{keyPath:ey,autoIncrement:!0}).createIndex(xs,ty,{unique:!0});const g=u.store(En),m=d.map(w=>g.put(w));return D.waitFor(m)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore(Yi,{keyPath:Vk})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.pi(i))),r<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore(Ba)}(e),this.yi(i)))),r<7&&s>=7&&(o=o.next(()=>this.wi(i))),r<8&&s>=8&&(o=o.next(()=>this.Si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.bi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore(Mu,{keyPath:Mk})})(e),function(l){l.createObjectStore(Lu,{keyPath:Lk})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore(Fu,{keyPath:Gk});u.createIndex(Ld,Kk,{unique:!1}),u.createIndex(WT,$k,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore(Bc,{keyPath:Ck});u.createIndex(lc,Pk),u.createIndex(UT,Nk)}(e)).next(()=>this.Di(e,i)).next(()=>e.deleteObjectStore(ws))),r<14&&s>=14&&(o=o.next(()=>this.Ci(e,i))),r<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore(cp,{keyPath:Fk,autoIncrement:!0}).createIndex(Md,Uk,{unique:!1}),l.createObjectStore(_a,{keyPath:Bk}).createIndex(jT,jk,{unique:!1}),l.createObjectStore(ya,{keyPath:qk}).createIndex(qT,Wk,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{t.objectStore(_a).clear()}).next(()=>{t.objectStore(ya).clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore(up,{keyPath:zk})})(e)})),r<18&&s>=18&&ME()&&(o=o.next(()=>{t.objectStore(_a).clear()}).next(()=>{t.objectStore(ya).clear()})),o}yi(e){let t=0;return e.store(ws).X((r,s)=>{t+=Qc(s)}).next(()=>{const r={byteSize:t};return e.store(Ba).put(Vd,r)})}pi(e){const t=e.store(Ua),r=e.store(En);return t.j().next(s=>D.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,Fs],[i.userId,i.lastAcknowledgedBatchId]);return r.j(xs,o).next(a=>D.forEach(a,l=>{ie(l.userId===i.userId,18650,"Cannot process batch from unexpected user",{batchId:l.batchId});const u=Rs(this.serializer,l);return Hw(e,i.userId,u).next(()=>{})}))}))}wi(e){const t=e.store(Qi),r=e.store(ws);return e.store(Us).get(jc).next(s=>{const i=[];return r.X((o,a)=>{const l=new Ne(o),u=function(d){return[0,Mt(d)]}(l);i.push(t.get(u).next(h=>h?D.resolve():(d=>t.put({targetId:0,path:Mt(d),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>D.waitFor(i))})}Si(e,t){e.createObjectStore(ja,{keyPath:Ok});const r=t.store(ja),s=new Ap,i=o=>{if(s.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Mt(l)})}};return t.store(ws).X({Z:!0},(o,a)=>{const l=new Ne(o);return i(l.popLast())}).next(()=>t.store(zi).X({Z:!0},([o,a,l],u)=>{const h=Ln(a);return i(h.popLast())}))}bi(e){const t=e.store(Hi);return t.X((r,s)=>{const i=ta(s),o=Ww(this.serializer,i);return t.put(o)})}Di(e,t){const r=t.store(ws),s=[];return r.X((i,o)=>{const a=t.store(Bc),l=function(d){return d.document?new Y(Ne.fromString(d.document.name).popFirst(5)):d.noDocument?Y.fromSegments(d.noDocument.path):d.unknownDocument?Y.fromSegments(d.unknownDocument.path):re(36783)}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(u))}).next(()=>D.waitFor(s))}Ci(e,t){const r=t.store(En),s=tA(this.serializer),i=new Sp(Hu.Vi,this.serializer.gt);return r.j().next(o=>{const a=new Map;return o.forEach(l=>{var u;let h=(u=a.get(l.userId))!==null&&u!==void 0?u:ve();Rs(this.serializer,l).keys().forEach(d=>h=h.add(d)),a.set(l.userId,h)}),D.forEach(a,(l,u)=>{const h=new Ct(u),d=$u.yt(this.serializer,h),g=i.getIndexManager(h),m=zu.yt(h,this.serializer,g,i.referenceDelegate);return new nA(s,m,d,g).recalculateAndSaveOverlaysForDocumentKeys(new Fd(t,Ht.ue),l).next()})})}}function Gy(n){n.createObjectStore(Qi,{keyPath:xk}).createIndex(lp,kk,{unique:!0}),n.createObjectStore(Hi,{keyPath:"targetId"}).createIndex(BT,Dk,{unique:!0}),n.createObjectStore(Us)}const kr="IndexedDbPersistence",Gh=18e5,Kh=5e3,$h="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",h1="main";class Rp{constructor(e,t,r,s,i,o,a,l,u,h,d=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Fi=i,this.window=o,this.document=a,this.Mi=u,this.xi=h,this.Oi=d,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=g=>Promise.resolve(),!Rp.C())throw new $(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new JO(this,s),this.Qi=t+h1,this.serializer=new qw(l),this.$i=new zr(this.Qi,this.Oi,new u1(this.serializer)),this.li=new jO,this.hi=new QO(this.referenceDelegate,this.serializer),this.remoteDocumentCache=tA(this.serializer),this.Ti=new BO,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,h===!1&&rt(kr,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new $(V.FAILED_PRECONDITION,$h);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new Ht(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>$l(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(t=>{t||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(cs(e))return q(kr,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return q(kr,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return Ko(e).get(di).next(t=>D.resolve(this.Xi(t)))}es(e){return $l(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Gh)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ft(t,Yi);return r.j().next(s=>{const i=this.rs(s,Gh),o=s.filter(a=>i.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?D.resolve(!0):Ko(e).get(di).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Kh)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new $(V.FAILED_PRECONDITION,$h);return!1}}return!(!this.networkEnabled||!this.inForeground)||$l(e).j().next(r=>this.rs(r,Kh).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&q(kr,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[al,Yi],e=>{const t=new Fd(e,Ht.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(r=>this.ns(r.updateTimeMs,t)&&!this._s(r.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>$l(e).j().next(t=>this.rs(t,Gh).map(r=>r.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return zu.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new HO(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return $u.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,r){q(kr,"Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===18?Yk:l===17?zT:l===16?Qk:l===15?hp:l===14?$T:l===13?KT:l===12?Hk:l===11?GT:void re(60245)}(this.Oi);let o;return this.$i.runTransaction(e,s,i,a=>(o=new Fd(a,this.ui?this.ui.next():Ht.ue),t==="readwrite-primary"?this.Ji(o).next(l=>!!l||this.Hi(o)).next(l=>{if(!l)throw rt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new $(V.FAILED_PRECONDITION,OT);return r(o)}).next(l=>this.Zi(o).next(()=>l)):this.Ts(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ts(e){return Ko(e).get(di).next(t=>{if(t!==null&&this.ns(t.leaseTimestampMs,Kh)&&!this._s(t.ownerId)&&!this.Xi(t)&&!(this.xi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new $(V.FAILED_PRECONDITION,$h)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ko(e).put(di,t)}static C(){return zr.C()}Yi(e){const t=Ko(e);return t.get(di).next(r=>this.Xi(r)?(q(kr,"Releasing primary lease."),t.delete(di)):D.resolve())}ns(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(rt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Wi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground=this.document.visibilityState==="visible")}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ni=()=>{this.us();const t=/(?:Version|Mobile)\/1[456]/;VE()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const r=((t=this.Ui)===null||t===void 0?void 0:t.getItem(this.ss(e)))!==null;return q(kr,`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return rt(kr,"Failed to get zombied client id.",r),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){rt("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch{}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ko(n){return ft(n,al)}function $l(n){return ft(n,Yi)}function rA(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Cp{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=ve(),s=ve();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cp(e,t.fromCache,r,s)}}/**
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
 */class d1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return VE()?8:MT(dt())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ys(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new d1;return this.ws(e,t,o).next(a=>{if(i.result=a,this.Rs)return this.Ss(e,t,o,a.size)})}).next(()=>i.result)}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Ti()<=Ie.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",wi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(Ti()<=Ie.DEBUG&&q("QueryEngine","Query:",wi(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ti()<=Ie.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",wi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(t))):D.resolve())}ps(e,t){if(py(t))return D.resolve(null);let r=on(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=$d(t,null,"F"),r=on(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.gs.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.bs(t,a);return this.Ds(t,u,o,l.readTime)?this.ps(e,$d(t,null,"F")):this.vs(e,u,t,l)}))})))}ys(e,t,r,s){return py(t)||s.isEqual(le.min())?D.resolve(null):this.gs.getDocuments(e,r).next(i=>{const o=this.bs(t,i);return this.Ds(t,o,r,s)?D.resolve(null):(Ti()<=Ie.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),wi(t)),this.vs(e,o,t,xT(s,$i)).next(a=>a))})}bs(e,t){let r=new Me(gw(e));return t.forEach((s,i)=>{cl(e,i)&&(r=r.add(i))}),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Ti()<=Ie.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",wi(t)),this.gs.getDocumentsMatchingQuery(e,t,ln.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Pp="LocalStore",f1=3e8;class p1{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Je(de),this.Ms=new Tr(i=>$s(i),ll),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function iA(n,e,t,r){return new p1(n,e,t,r)}async function oA(n,e){const t=se(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ve();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(r,l).next(u=>({Bs:u,removedBatchIds:o,addedBatchIds:a}))})})}function g1(n,e){const t=se(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,g=d.keys();let m=D.resolve();return g.forEach(w=>{m=m.next(()=>h.getEntry(l,w)).next(R=>{const P=u.docVersions.get(w);ie(P!==null,48541),R.version.compareTo(P)<0&&(d.applyToRemoteDocument(R,u),R.isValidDocument()&&(R.setReadTime(u.commitVersion),h.addEntry(R)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ve();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function aA(n){const e=se(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function m1(n,e){const t=se(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const a=[];e.targetChanges.forEach((h,d)=>{const g=s.get(d);if(!g)return;a.push(t.hi.removeMatchingKeys(i,h.removedDocuments,d).next(()=>t.hi.addMatchingKeys(i,h.addedDocuments,d)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(ot.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),s=s.insert(d,m),function(R,P,j){return R.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=f1?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,m,h)&&a.push(t.hi.updateTargetData(i,m))});let l=rn(),u=ve();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(_1(i,o,e.documentUpdates).next(h=>{l=h.Ls,u=h.ks})),!r.isEqual(le.min())){const h=t.hi.getLastRemoteSnapshotVersion(i).next(d=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return D.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(t.Fs=s,i))}function _1(n,e,t){let r=ve(),s=ve();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=rn();return t.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):q(Pp,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ls:o,ks:s}})}function y1(n,e){const t=se(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Fs),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Xc(n,e){const t=se(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.hi.getTargetData(r,e).next(i=>i?(s=i,D.resolve(s)):t.hi.allocateTargetId(r).next(o=>(s=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function io(n,e,t){const r=se(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!cs(o))throw o;q(Pp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ef(n,e,t){const r=se(n);let s=le.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=se(l),g=d.Ms.get(h);return g!==void 0?D.resolve(d.Fs.get(g)):d.hi.getTargetData(u,h)}(r,o,on(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,t?s:le.min(),t?i:ve())).next(a=>(uA(r,pw(e),a),{documents:a,qs:i})))}function lA(n,e){const t=se(n),r=se(t.hi),s=t.Fs.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.Et(i,e).next(o=>o?o.target:null))}function cA(n,e){const t=se(n),r=t.xs.get(e)||le.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Os.getAllFromCollectionGroup(s,e,xT(r,$i),Number.MAX_SAFE_INTEGER)).then(s=>(uA(t,e,s),s))}function uA(n,e,t){let r=n.xs.get(e)||le.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.xs.set(e,r)}/**
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
 */const hA="firestore_clients";function Ky(n,e){return`${hA}_${n}_${e}`}const dA="firestore_mutations";function $y(n,e,t){let r=`${dA}_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}const fA="firestore_targets";function zh(n,e){return`${fA}_${n}_${e}`}/**
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
 */const Vn="SharedClientState";class Jc{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Ks(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new $(s.error.code,s.error.message))),o?new Jc(e,t,s.state,i):(rt(Vn,`Failed to parse mutation state for ID '${t}': ${r}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class wa{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ks(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new $(r.error.code,r.error.message))),i?new wa(e,r.state,s):(rt(Vn,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Zc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=mp();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=LT(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Zc(e,i):(rt(Vn,`Failed to parse client data for instance '${e}': ${t}`),null)}}class Np{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Np(t.clientId,t.onlineState):(rt(Vn,`Failed to parse online state: ${e}`),null)}}class tf{constructor(){this.activeTargetIds=mp()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Hh{constructor(e,t,r,s,i){this.window=e,this.Fi=t,this.persistenceKey=r,this.js=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new Je(de),this.started=!1,this.Zs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Xs=Ky(this.persistenceKey,this.js),this.eo=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ys=this.Ys.insert(this.js,new tf),this.no=new RegExp(`^${hA}_${o}_([^_]*)$`),this.ro=new RegExp(`^${dA}_${o}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${fA}_${o}_(\\d+)$`),this.so=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.oo=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ps();for(const r of e){if(r===this.js)continue;const s=this.getItem(Ky(this.persistenceKey,r));if(s){const i=Zc.Ks(r,s);i&&(this.Ys=this.Ys.insert(i.clientId,i))}}this._o();const t=this.storage.getItem(this.so);if(t){const r=this.ao(t);r&&this.uo(r)}for(const r of this.Zs)this.Hs(r);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,r){this.lo(e,t,r),this.ho(e)}addLocalQueryTarget(e,t=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(zh(this.persistenceKey,e));if(s){const i=wa.Ks(e,s);i&&(r=i.state)}}return t&&this.Po.Gs(e),this._o(),r}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(zh(this.persistenceKey,e))}updateQueryState(e,t,r){this.To(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.ho(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return q(Vn,"READ",e,t),t}setItem(e,t){q(Vn,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){q(Vn,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(q(Vn,"EVENT",t.key,t.newValue),t.key===this.Xs)return void rt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.no.test(t.key)){if(t.newValue==null){const r=this.Ao(t.key);return this.Ro(r,null)}{const r=this.Vo(t.key,t.newValue);if(r)return this.Ro(r.clientId,r)}}else if(this.ro.test(t.key)){if(t.newValue!==null){const r=this.mo(t.key,t.newValue);if(r)return this.fo(r)}}else if(this.io.test(t.key)){if(t.newValue!==null){const r=this.po(t.key,t.newValue);if(r)return this.yo(r)}}else if(t.key===this.so){if(t.newValue!==null){const r=this.ao(t.newValue);if(r)return this.uo(r)}}else if(t.key===this.eo){const r=function(i){let o=Ht.ue;if(i!=null)try{const a=JSON.parse(i);ie(typeof a=="number",30636,{wo:i}),o=a}catch(a){rt(Vn,"Failed to read sequence number from WebStorage",a)}return o}(t.newValue);r!==Ht.ue&&this.sequenceNumberHandler(r)}else if(t.key===this.oo){const r=this.So(t.newValue);await Promise.all(r.map(s=>this.syncEngine.bo(s)))}}}else this.Zs.push(t)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,r){const s=new Jc(this.currentUser,e,t,r),i=$y(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Ws())}ho(e){const t=$y(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){const t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,r){const s=zh(this.persistenceKey,e),i=new wa(e,t,r);this.setItem(s,i.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){const t=this.no.exec(e);return t?t[1]:null}Vo(e,t){const r=this.Ao(e);return Zc.Ks(r,t)}mo(e,t){const r=this.ro.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Jc.Ks(new Ct(i),s,t)}po(e,t){const r=this.io.exec(e),s=Number(r[1]);return wa.Ks(s,t)}ao(e){return Np.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);q(Vn,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){const r=t?this.Ys.insert(e,t):this.Ys.remove(e),s=this.co(this.Ys),i=this.co(r),o=[],a=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||a.push(l)}),this.syncEngine.Co(o,a).then(()=>{this.Ys=r})}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=mp();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class pA{constructor(){this.Fo=new tf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new tf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class v1{xo(e){}shutdown(){}}/**
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
 */const zy="ConnectivityMonitor";class Hy{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){q(zy,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){q(zy,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zl=null;function nf(){return zl===null?zl=function(){return 268435456+Math.round(2147483648*Math.random())}():zl++,"0x"+zl.toString(16)}/**
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
 */const Qh="RestConnection",I1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class E1{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===qc?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const o=nf(),a=this.Go(e,t.toUriEncodedString());q(Qh,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:u}=new URL(a),h=as(u);return this.jo(e,a,l,r,h).then(d=>(q(Qh,`Received RPC '${e}' ${o}: `,d),d),d=>{throw es(Qh,`RPC '${e}' ${o} failed with error: `,d,"url: ",a,"request:",r),d})}Jo(e,t,r,s,i,o){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,t){const r=I1[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class T1{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const St="WebChannelConnection";class w1 extends E1{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const o=nf();return new Promise((a,l)=>{const u=new TT;u.setWithCredentials(!0),u.listenOnce(wT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ic.NO_ERROR:const d=u.getResponseJson();q(St,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),a(d);break;case ic.TIMEOUT:q(St,`RPC '${e}' ${o} timed out`),l(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const g=u.getStatus();if(q(St,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const w=m==null?void 0:m.error;if(w&&w.status&&w.message){const R=function(j){const k=j.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(k)>=0?k:V.UNKNOWN}(w.status);l(new $(R,w.message))}else l(new $(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new $(V.UNAVAILABLE,"Connection failed."));break;default:re(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{q(St,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);q(St,`RPC '${e}' ${o} sending request:`,s),u.send(t,"POST",h,r,15)})}P_(e,t,r){const s=nf(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ST(),a=bT(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const h=i.join("");q(St,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);this.T_(d);let g=!1,m=!1;const w=new T1({Ho:P=>{m?q(St,`Not sending because RPC '${e}' stream ${s} is closed:`,P):(g||(q(St,`Opening RPC '${e}' stream ${s} transport.`),d.open(),g=!0),q(St,`RPC '${e}' stream ${s} sending:`,P),d.send(P))},Yo:()=>d.close()}),R=(P,j,k)=>{P.listen(j,M=>{try{k(M)}catch(W){setTimeout(()=>{throw W},0)}})};return R(d,Jo.EventType.OPEN,()=>{m||(q(St,`RPC '${e}' stream ${s} transport opened.`),w.s_())}),R(d,Jo.EventType.CLOSE,()=>{m||(m=!0,q(St,`RPC '${e}' stream ${s} transport closed`),w.__(),this.I_(d))}),R(d,Jo.EventType.ERROR,P=>{m||(m=!0,es(St,`RPC '${e}' stream ${s} transport errored. Name:`,P.name,"Message:",P.message),w.__(new $(V.UNAVAILABLE,"The operation could not be completed")))}),R(d,Jo.EventType.MESSAGE,P=>{var j;if(!m){const k=P.data[0];ie(!!k,16349);const M=k,W=(M==null?void 0:M.error)||((j=M[0])===null||j===void 0?void 0:j.error);if(W){q(St,`RPC '${e}' stream ${s} received error:`,W);const te=W.status;let H=function(v){const b=lt[v];if(b!==void 0)return Cw(b)}(te),T=W.message;H===void 0&&(H=V.INTERNAL,T="Unknown error status: "+te+" with message "+W.message),m=!0,w.__(new $(H,T)),d.close()}else q(St,`RPC '${e}' stream ${s} received:`,k),w.a_(k)}}),R(a,AT.STAT_EVENT,P=>{P.stat===xd.PROXY?q(St,`RPC '${e}' stream ${s} detected buffering proxy`):P.stat===xd.NOPROXY&&q(St,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.o_()},0),w}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}/**
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
 */function gA(){return typeof window<"u"?window:null}function gc(){return typeof document<"u"?document:null}/**
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
 */function Qu(n){return new PO(n,!0)}/**
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
 */class mA{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Qy="PersistentStream";class _A{constructor(e,t,r,s,i,o,a,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new mA(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(rt(t.toString()),rt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.W_(r,s)},r=>{e(()=>{const s=new $(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return q(Qy,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(q(Qy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class A1 extends _A{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=xO(this.serializer,e),r=function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?Gt(o.readTime):le.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Qd(this.serializer),t.addTarget=function(i,o){let a;const l=o.target;if(a=Wc(l)?{documents:Mw(i,l)}:{query:Lw(i,l).Vt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Dw(i,o.resumeToken);const u=zd(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(le.min())>0){a.readTime=so(i,o.snapshotVersion.toTimestamp());const u=zd(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=OO(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Qd(this.serializer),t.removeTarget=e,this.k_(t)}}class b1 extends _A{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=kO(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Qd(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>$c(this.serializer,r))};this.k_(t)}}/**
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
 */class S1{}class R1 extends S1{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,Hd(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(V.UNKNOWN,i.toString())})}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Jo(e,Hd(t,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class C1{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(rt(t),this._a=!1):q("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Ys="RemoteStore";class P1{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(o=>{r.enqueueAndForget(async()=>{ti(this)&&(q(Ys,"Restarting streams for network reachability change."),await async function(l){const u=se(l);u.Ia.add(4),await dl(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Yu(u)}(this))})}),this.Aa=new C1(r,s)}}async function Yu(n){if(ti(n))for(const e of n.da)await e(!0)}async function dl(n){for(const e of n.da)await e(!1)}function Xu(n,e){const t=se(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),kp(t)?xp(t):Io(t).x_()&&Dp(t,e))}function oo(n,e){const t=se(n),r=Io(t);t.Ta.delete(e),r.x_()&&yA(t,e),t.Ta.size===0&&(r.x_()?r.B_():ti(t)&&t.Aa.set("Unknown"))}function Dp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Io(n).H_(e)}function yA(n,e){n.Ra.$e(e),Io(n).Y_(e)}function xp(n){n.Ra=new bO({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Io(n).start(),n.Aa.aa()}function kp(n){return ti(n)&&!Io(n).M_()&&n.Ta.size>0}function ti(n){return se(n).Ia.size===0}function vA(n){n.Ra=void 0}async function N1(n){n.Aa.set("Online")}async function D1(n){n.Ta.forEach((e,t)=>{Dp(n,e)})}async function x1(n,e){vA(n),kp(n)?(n.Aa.la(e),xp(n)):n.Aa.set("Unknown")}async function k1(n,e,t){if(n.Aa.set("Online"),e instanceof Nw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.Ta.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.Ta.delete(a),s.Ra.removeTarget(a))}(n,e)}catch(r){q(Ys,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await eu(n,r)}else if(e instanceof fc?n.Ra.Ye(e):e instanceof Pw?n.Ra.it(e):n.Ra.et(e),!t.isEqual(le.min()))try{const r=await aA(n.localStore);t.compareTo(r)>=0&&await function(i,o){const a=i.Ra.Pt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.Ta.get(u);h&&i.Ta.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.Ta.get(l);if(!h)return;i.Ta.set(l,h.withResumeToken(ot.EMPTY_BYTE_STRING,h.snapshotVersion)),yA(i,l);const d=new ar(h.target,l,u,h.sequenceNumber);Dp(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(r){q(Ys,"Failed to raise snapshot:",r),await eu(n,r)}}async function eu(n,e,t){if(!cs(e))throw e;n.Ia.add(1),await dl(n),n.Aa.set("Offline"),t||(t=()=>aA(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{q(Ys,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Yu(n)})}function IA(n,e){return e().catch(t=>eu(n,t,e))}async function vo(n){const e=se(n),t=rs(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Fs;for(;O1(e);)try{const s=await y1(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,V1(e,s)}catch(s){await eu(e,s)}EA(e)&&TA(e)}function O1(n){return ti(n)&&n.Pa.length<10}function V1(n,e){n.Pa.push(e);const t=rs(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function EA(n){return ti(n)&&!rs(n).M_()&&n.Pa.length>0}function TA(n){rs(n).start()}async function M1(n){rs(n).na()}async function L1(n){const e=rs(n);for(const t of n.Pa)e.X_(t.mutations)}async function F1(n,e,t){const r=n.Pa.shift(),s=vp.from(r,e,t);await IA(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await vo(n)}async function U1(n,e){e&&rs(n).Z_&&await async function(r,s){if(function(o){return wO(o)&&o!==V.ABORTED}(s.code)){const i=r.Pa.shift();rs(r).N_(),await IA(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await vo(r)}}(n,e),EA(n)&&TA(n)}async function Yy(n,e){const t=se(n);t.asyncQueue.verifyOperationInProgress(),q(Ys,"RemoteStore received new credentials");const r=ti(t);t.Ia.add(3),await dl(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Yu(t)}async function rf(n,e){const t=se(n);e?(t.Ia.delete(2),await Yu(t)):e||(t.Ia.add(2),await dl(t),t.Aa.set("Unknown"))}function Io(n){return n.Va||(n.Va=function(t,r,s){const i=se(t);return i.ia(),new A1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:N1.bind(null,n),e_:D1.bind(null,n),n_:x1.bind(null,n),J_:k1.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),kp(n)?xp(n):n.Aa.set("Unknown")):(await n.Va.stop(),vA(n))})),n.Va}function rs(n){return n.ma||(n.ma=function(t,r,s){const i=se(t);return i.ia(),new b1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:M1.bind(null,n),n_:U1.bind(null,n),ea:L1.bind(null,n),ta:F1.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await vo(n)):(await n.ma.stop(),n.Pa.length>0&&(q(Ys,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class Op{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Op(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Vp(n,e){if(rt("AsyncQueue",`${e}: ${n}`),cs(n))return new $(V.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Vi{static emptySet(e){return new Vi(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=Zo(),this.sortedSet=new Je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Vi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Vi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Xy{constructor(){this.fa=new Je(Y.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):re(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class ao{constructor(e,t,r,s,i,o,a,l,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new ao(e,t,Vi.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class B1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class j1{constructor(){this.queries=Jy(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=se(t),i=s.queries;s.queries=Jy(),i.forEach((o,a)=>{for(const l of a.wa)l.onError(r)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function Jy(){return new Tr(n=>fw(n),qu)}async function q1(n,e){const t=se(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new B1,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const a=Vp(o,`Initialization of query '${wi(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Mp(t)}async function W1(n,e){const t=se(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function G1(n,e){const t=se(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.wa)a.Ca(s)&&(r=!0);o.ya=s}}r&&Mp(t)}function K1(n,e,t){const r=se(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Mp(n){n.Da.forEach(e=>{e.next()})}var sf,Zy;(Zy=sf||(sf={})).Fa="default",Zy.Cache="cache";class $1{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ao(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ao.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==sf.Cache}}/**
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
 */class wA{constructor(e){this.key=e}}class AA{constructor(e){this.key=e}}class z1{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ve(),this.mutatedKeys=ve(),this.Xa=gw(e),this.eu=new Vi(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Xy,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const g=s.get(h),m=cl(this.query,d)?d:null,w=!!g&&this.mutatedKeys.has(g.key),R=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let P=!1;g&&m?g.data.isEqual(m.data)?w!==R&&(r.track({type:3,doc:m}),P=!0):this.iu(g,m)||(r.track({type:2,doc:m}),P=!0,(l&&this.Xa(m,l)>0||u&&this.Xa(m,u)<0)&&(a=!0)):!g&&m?(r.track({type:0,doc:m}),P=!0):g&&!m&&(r.track({type:1,doc:g}),P=!0,(l||u)&&(a=!0)),P&&(m?(o=o.add(m),i=R?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{eu:o,ru:r,Ds:a,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort((h,d)=>function(m,w){const R=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re(20277,{At:P})}};return R(m)-R(w)}(h.type,d.type)||this.Xa(h.doc,d.doc)),this.su(r),s=s!=null&&s;const a=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new ao(this.query,e.eu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:a}:{_u:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Xy,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ve(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new AA(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new wA(r))}),t}uu(e){this.Ha=e.qs,this.Za=ve();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ao.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Eo="SyncEngine";class H1{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Q1{constructor(e){this.key=e,this.lu=!1}}class Y1{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new Tr(a=>fw(a),qu),this.Tu=new Map,this.Iu=new Set,this.du=new Je(Y.comparator),this.Eu=new Map,this.Au=new bp,this.Ru={},this.Vu=new Map,this.mu=Qs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function X1(n,e,t=!0){const r=Ju(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await bA(r,e,t,!0),s}async function J1(n,e){const t=Ju(n);await bA(t,e,!0,!1)}async function bA(n,e,t,r){const s=await Xc(n.localStore,on(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let a;return r&&(a=await Lp(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&Xu(n.remoteStore,s),a}async function Lp(n,e,t,r,s){n.gu=(d,g,m)=>async function(R,P,j,k){let M=P.view.nu(j);M.Ds&&(M=await ef(R.localStore,P.query,!1).then(({documents:T})=>P.view.nu(T,M)));const W=k&&k.targetChanges.get(P.targetId),te=k&&k.targetMismatches.get(P.targetId)!=null,H=P.view.applyChanges(M,R.isPrimaryClient,W,te);return of(R,P.targetId,H._u),H.snapshot}(n,d,g,m);const i=await ef(n.localStore,e,!0),o=new z1(e,i.qs),a=o.nu(i.documents),l=hl.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,l);of(n,t,u._u);const h=new H1(e,t,o);return n.Pu.set(e,h),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),u.snapshot}async function Z1(n,e,t){const r=se(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(o=>!qu(o,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await io(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&oo(r.remoteStore,s.targetId),lo(r,s.targetId)}).catch(ls)):(lo(r,s.targetId),await io(r.localStore,s.targetId,!0))}async function eV(n,e){const t=se(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),oo(t.remoteStore,r.targetId))}async function tV(n,e,t){const r=jp(n);try{const s=await function(o,a){const l=se(o),u=Oe.now(),h=a.reduce((m,w)=>m.add(w.key),ve());let d,g;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let w=rn(),R=ve();return l.Os.getEntries(m,h).next(P=>{w=P,w.forEach((j,k)=>{k.isValidDocument()||(R=R.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,w)).next(P=>{d=P;const j=[];for(const k of a){const M=EO(k,d.get(k.key).overlayedDocument);M!=null&&j.push(new wr(k.key,M,rw(M.value.mapValue),qt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,j,a)}).next(P=>{g=P;const j=P.applyToLocalDocumentSet(d,R);return l.documentOverlayCache.saveOverlays(m,P.batchId,j)})}).then(()=>({batchId:g.batchId,changes:_w(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new Je(de)),u=u.insert(a,l),o.Ru[o.currentUser.toKey()]=u}(r,s.batchId,t),await hs(r,s.changes),await vo(r.remoteStore)}catch(s){const i=Vp(s,"Failed to persist write");t.reject(i)}}async function SA(n,e){const t=se(n);try{const r=await m1(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Eu.get(i);o&&(ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?ie(o.lu,14607):s.removedDocuments.size>0&&(ie(o.lu,42227),o.lu=!1))}),await hs(t,r,e)}catch(r){await ls(r)}}function ev(n,e,t){const r=se(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach((i,o)=>{const a=o.view.va(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=se(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const g of d.wa)g.va(a)&&(u=!0)}),u&&Mp(l)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function nV(n,e,t){const r=se(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Je(Y.comparator);o=o.insert(i,tt.newNoDocument(i,le.min()));const a=ve().add(i),l=new ul(le.min(),new Map,new Je(de),o,a);await SA(r,l),r.du=r.du.remove(i),r.Eu.delete(e),Bp(r)}else await io(r.localStore,e,!1).then(()=>lo(r,e,t)).catch(ls)}async function rV(n,e){const t=se(n),r=e.batch.batchId;try{const s=await g1(t.localStore,e);Up(t,r,null),Fp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await hs(t,s)}catch(s){await ls(s)}}async function sV(n,e,t){const r=se(n);try{const s=await function(o,a){const l=se(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(ie(d!==null,37113),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);Up(r,e,t),Fp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await hs(r,s)}catch(s){await ls(s)}}function Fp(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function Up(n,e,t){const r=se(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function lo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||RA(n,r)})}function RA(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(oo(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Bp(n))}function of(n,e,t){for(const r of t)r instanceof wA?(n.Au.addReference(r.key,e),iV(n,r)):r instanceof AA?(q(Eo,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||RA(n,r.key)):re(19791,{yu:r})}function iV(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(q(Eo,"New document in limbo: "+t),n.Iu.add(r),Bp(n))}function Bp(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Y(Ne.fromString(e)),r=n.mu.next();n.Eu.set(r,new Q1(t)),n.du=n.du.insert(t,r),Xu(n.remoteStore,new ar(on(ju(t.path)),r,"TargetPurposeLimboResolution",Ht.ue))}}async function hs(n,e,t){const r=se(n),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((a,l)=>{o.push(r.gu(l,e,t).then(u=>{var h;if((u||t)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=Cp.Es(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.hu.J_(s),await async function(l,u){const h=se(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>D.forEach(u,g=>D.forEach(g.Is,m=>h.persistence.referenceDelegate.addReference(d,g.targetId,m)).next(()=>D.forEach(g.ds,m=>h.persistence.referenceDelegate.removeReference(d,g.targetId,m)))))}catch(d){if(!cs(d))throw d;q(Pp,"Failed to update sequence numbers: "+d)}for(const d of u){const g=d.targetId;if(!d.fromCache){const m=h.Fs.get(g),w=m.snapshotVersion,R=m.withLastLimboFreeSnapshotVersion(w);h.Fs=h.Fs.insert(g,R)}}}(r.localStore,i))}async function oV(n,e){const t=se(n);if(!t.currentUser.isEqual(e)){q(Eo,"User change. New user:",e.toKey());const r=await oA(t.localStore,e);t.currentUser=e,function(i,o){i.Vu.forEach(a=>{a.forEach(l=>{l.reject(new $(V.CANCELLED,o))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await hs(t,r.Bs)}}function aV(n,e){const t=se(n),r=t.Eu.get(e);if(r&&r.lu)return ve().add(r.key);{let s=ve();const i=t.Tu.get(e);if(!i)return s;for(const o of i){const a=t.Pu.get(o);s=s.unionWith(a.view.tu)}return s}}async function lV(n,e){const t=se(n),r=await ef(t.localStore,e.query,!0),s=e.view.uu(r);return t.isPrimaryClient&&of(t,e.targetId,s._u),s}async function cV(n,e){const t=se(n);return cA(t.localStore,e).then(r=>hs(t,r))}async function uV(n,e,t,r){const s=se(n),i=await function(a,l){const u=se(a),h=se(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",d=>h.Xn(d,l).next(g=>g?u.localDocuments.getDocuments(d,g):D.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await vo(s.remoteStore):t==="acknowledged"||t==="rejected"?(Up(s,e,r||null),Fp(s,e),function(a,l){se(se(a).mutationQueue).rr(l)}(s.localStore,e)):re(6720,"Unknown batchState",{wu:t}),await hs(s,i)):q(Eo,"Cannot apply mutation batch with id: "+e)}async function hV(n,e){const t=se(n);if(Ju(t),jp(t),e===!0&&t.fu!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await tv(t,r.toArray());t.fu=!0,await rf(t.remoteStore,!0);for(const i of s)Xu(t.remoteStore,i)}else if(e===!1&&t.fu!==!1){const r=[];let s=Promise.resolve();t.Tu.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(lo(t,o),io(t.localStore,o,!0))),oo(t.remoteStore,o)}),await s,await tv(t,r),function(o){const a=se(o);a.Eu.forEach((l,u)=>{oo(a.remoteStore,u)}),a.Au.jr(),a.Eu=new Map,a.du=new Je(Y.comparator)}(t),t.fu=!1,await rf(t.remoteStore,!1)}}async function tv(n,e,t){const r=se(n),s=[],i=[];for(const o of e){let a;const l=r.Tu.get(o);if(l&&l.length!==0){a=await Xc(r.localStore,on(l[0]));for(const u of l){const h=r.Pu.get(u),d=await lV(r,h);d.snapshot&&i.push(d.snapshot)}}else{const u=await lA(r.localStore,o);a=await Xc(r.localStore,u),await Lp(r,CA(u),o,!1,a.resumeToken)}s.push(a)}return r.hu.J_(i),s}function CA(n){return hw(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function dV(n){return function(t){return se(se(t).persistence).Ps()}(se(n).localStore)}async function fV(n,e,t,r){const s=se(n);if(s.fu)return void q(Eo,"Ignoring unexpected query state notification.");const i=s.Tu.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await cA(s.localStore,pw(i[0])),a=ul.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ot.EMPTY_BYTE_STRING);await hs(s,o,a);break}case"rejected":await io(s.localStore,e,!0),lo(s,e,r);break;default:re(64155,t)}}async function pV(n,e,t){const r=Ju(n);if(r.fu){for(const s of e){if(r.Tu.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){q(Eo,"Adding an already active target "+s);continue}const i=await lA(r.localStore,s),o=await Xc(r.localStore,i);await Lp(r,CA(i),o.targetId,!1,o.resumeToken),Xu(r.remoteStore,o)}for(const s of t)r.Tu.has(s)&&await io(r.localStore,s,!1).then(()=>{oo(r.remoteStore,s),lo(r,s)}).catch(ls)}}function Ju(n){const e=se(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=SA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aV.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nV.bind(null,e),e.hu.J_=G1.bind(null,e.eventManager),e.hu.pu=K1.bind(null,e.eventManager),e}function jp(n){const e=se(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sV.bind(null,e),e}class Ha{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qu(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return iA(this.persistence,new sA,e.initialUser,this.serializer)}Du(e){return new Sp(Hu.Vi,this.serializer)}bu(e){return new pA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ha.provider={build:()=>new Ha};class gV extends Ha{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){ie(this.persistence.referenceDelegate instanceof Yc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Jw(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new Sp(r=>Yc.Vi(r,t),this.serializer)}}class PA extends Ha{constructor(e,t,r){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await jp(this.Mu.syncEngine),await vo(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return iA(this.persistence,new sA,e.initialUser,this.serializer)}Cu(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new Jw(r,e.asyncQueue,t)}Fu(e,t){const r=new Ak(t,this.persistence);return new wk(e.asyncQueue,r)}Du(e){const t=rA(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new Rp(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,gA(),gc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new pA}}class mV extends PA{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Mu.syncEngine;this.sharedClientState instanceof Hh&&(this.sharedClientState.syncEngine={Do:uV.bind(null,t),vo:fV.bind(null,t),Co:pV.bind(null,t),Ps:dV.bind(null,t),bo:cV.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji(async r=>{await hV(this.Mu.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}bu(e){const t=gA();if(!Hh.C(t))throw new $(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=rA(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Hh(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Qa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ev(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=oV.bind(null,this.syncEngine),await rf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new j1}()}createDatastore(e){const t=Qu(e.databaseInfo.databaseId),r=function(i){return new w1(i)}(e.databaseInfo);return function(i,o,a,l){return new R1(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,a){return new P1(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,t=>ev(this.syncEngine,t,0),function(){return Hy.C()?new Hy:new v1}())}createSyncEngine(e,t){return function(s,i,o,a,l,u,h){const d=new Y1(s,i,o,a,l,u);return h&&(d.fu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=se(s);q(Ys,"RemoteStore shutting down."),i.Ia.add(5),await dl(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Qa.provider={build:()=>new Qa};/**
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
 */class _V{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):rt("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const ss="FirestoreClient";class yV{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ct.UNAUTHENTICATED,this.clientId=ip.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{q(ss,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(q(ss,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Vp(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yh(n,e){n.asyncQueue.verifyOperationInProgress(),q(ss,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await oA(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{es("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{q("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{es("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=e}async function nv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await vV(n);q(ss,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Yy(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Yy(e.remoteStore,s)),n._onlineComponents=e}async function vV(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){q(ss,"Using user provided OfflineComponentProvider");try{await Yh(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;es("Error using user provided cache. Falling back to memory cache: "+t),await Yh(n,new Ha)}}else q(ss,"Using default OfflineComponentProvider"),await Yh(n,new gV(void 0));return n._offlineComponents}async function NA(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(q(ss,"Using user provided OnlineComponentProvider"),await nv(n,n._uninitializedComponentsProvider._online)):(q(ss,"Using default OnlineComponentProvider"),await nv(n,new Qa))),n._onlineComponents}function IV(n){return NA(n).then(e=>e.syncEngine)}async function rv(n){const e=await NA(n),t=e.eventManager;return t.onListen=X1.bind(null,e.syncEngine),t.onUnlisten=Z1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=J1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=eV.bind(null,e.syncEngine),t}/**
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
 */function DA(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const sv=new Map;/**
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
 */const EV="firestore.googleapis.com",iv=!0;class ov{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=EV,this.ssl=iv}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:iv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Xw)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ik("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=DA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qp{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ov({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ov(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dk;switch(r.type){case"firstParty":return new gk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=sv.get(t);r&&(q("ComponentProvider","Removing Datastore"),sv.delete(t),r.terminate())}(this),Promise.resolve()}}/**
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
 */class ni{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ni(this.firestore,e,this._query)}}class st{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new st(this.firestore,e,this._key)}toJSON(){return{type:st._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ol(t,st._jsonSchema))return new st(e,r||null,new Y(Ne.fromString(t.referencePath)))}}st._jsonSchemaVersion="firestore/documentReference/1.0",st._jsonSchema={type:ct("string",st._jsonSchemaVersion),referencePath:ct("string")};class Qr extends ni{constructor(e,t,r){super(e,t,ju(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new st(this.firestore,null,new Y(e))}withConverter(e){return new Qr(this.firestore,e,this._path)}}function TV(n,e,...t){if(n=ut(n),NT("collection","path",e),n instanceof qp){const r=Ne.fromString(e,...t);return Q_(r),new Qr(n,null,r)}{if(!(n instanceof st||n instanceof Qr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return Q_(r),new Qr(n.firestore,null,r)}}function wV(n,e,...t){if(n=ut(n),arguments.length===1&&(e=ip.newId()),NT("doc","path",e),n instanceof qp){const r=Ne.fromString(e,...t);return H_(r),new st(n,null,new Y(r))}{if(!(n instanceof st||n instanceof Qr))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Ne.fromString(e,...t));return H_(r),new st(n.firestore,n instanceof Qr?n.converter:null,new Y(r))}}/**
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
 */const av="AsyncQueue";class lv{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new mA(this,"async_queue_retry"),this.oc=()=>{const r=gc();r&&q(av,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=gc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=gc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Kr;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!cs(e))throw e;q(av,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,rt("INTERNAL UNHANDLED ERROR: ",cv(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Op.createAndSchedule(this,e,t,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&re(47125,{hc:cv(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function cv(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function uv(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(n,["next","error","complete"])}class co extends qp{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new lv,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new lv(e),this._firestoreClient=void 0,await e}}}function AV(n,e,t){t||(t=qc);const r=Pu(n,"firestore");if(r.isInitialized(t)){const s=r.getImmediate({identifier:t}),i=r.getOptions(t);if(Jr(i,e))return s;throw new $(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new $(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Xw)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&as(e.host)&&Gf(e.host),r.initialize({options:e,instanceIdentifier:t})}function xA(n){if(n._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||bV(n),n._firestoreClient}function bV(n){var e,t,r;const s=n._freezeSettings(),i=function(a,l,u,h){return new Jk(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,DA(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new yV(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(n._componentsProvider))}/**
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
 */class pn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pn(ot.fromBase64String(e))}catch(t){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new pn(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ol(e,pn._jsonSchema))return pn.fromBase64String(e.bytes)}}pn._jsonSchemaVersion="firestore/bytes/1.0",pn._jsonSchema={type:ct("string",pn._jsonSchemaVersion),bytes:ct("string")};/**
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
 */class Zu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class eh{constructor(e){this._methodName=e}}/**
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
 */class Wn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Wn._jsonSchemaVersion}}static fromJSON(e){if(ol(e,Wn._jsonSchema))return new Wn(e.latitude,e.longitude)}}Wn._jsonSchemaVersion="firestore/geoPoint/1.0",Wn._jsonSchema={type:ct("string",Wn._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Gn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ol(e,Gn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new Gn(e.vectorValues);throw new $(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gn._jsonSchemaVersion="firestore/vectorValue/1.0",Gn._jsonSchema={type:ct("string",Gn._jsonSchemaVersion),vectorValues:ct("object")};/**
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
 */const SV=/^__.*__$/;class RV{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,t,this.fieldTransforms):new yo(e,this.data,t,this.fieldTransforms)}}class kA{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new wr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function OA(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re(40011,{Ec:n})}}class Wp{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Wp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return tu(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(OA(this.Ec)&&SV.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class CV{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Qu(e)}Dc(e,t,r,s=!1){return new Wp({Ec:e,methodName:t,bc:r,path:Xe.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gp(n){const e=n._freezeSettings(),t=Qu(n._databaseId);return new CV(n._databaseId,!!e.ignoreUndefinedProperties,t)}function PV(n,e,t,r,s,i={}){const o=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);$p("Data must be an object, but it was:",o,r);const a=VA(r,o);let l,u;if(i.merge)l=new Qt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const g=af(e,d,t);if(!o.contains(g))throw new $(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);LA(h,g)||h.push(g)}l=new Qt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new RV(new Ot(a),l,u)}class fl extends eh{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fl}}class Kp extends eh{_toFieldTransform(e){return new Aw(e.path,new to)}isEqual(e){return e instanceof Kp}}function NV(n,e,t,r){const s=n.Dc(1,e,t);$p("Data must be an object, but it was:",s,r);const i=[],o=Ot.empty();us(r,(l,u)=>{const h=zp(e,l,t);u=ut(u);const d=s.gc(h);if(u instanceof fl)i.push(h);else{const g=pl(u,d);g!=null&&(i.push(h),o.set(h,g))}});const a=new Qt(i);return new kA(o,a,s.fieldTransforms)}function DV(n,e,t,r,s,i){const o=n.Dc(1,e,t),a=[af(e,r,t)],l=[s];if(i.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)a.push(af(e,i[g])),l.push(i[g+1]);const u=[],h=Ot.empty();for(let g=a.length-1;g>=0;--g)if(!LA(u,a[g])){const m=a[g];let w=l[g];w=ut(w);const R=o.gc(m);if(w instanceof fl)u.push(m);else{const P=pl(w,R);P!=null&&(u.push(m),h.set(m,P))}}const d=new Qt(u);return new kA(h,d,o.fieldTransforms)}function xV(n,e,t,r=!1){return pl(t,n.Dc(r?4:3,e))}function pl(n,e){if(MA(n=ut(n)))return $p("Unsupported field value:",e,n),VA(n,e);if(n instanceof eh)return function(r,s){if(!OA(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=pl(a,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=ut(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return gO(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Oe.fromDate(r);return{timestampValue:so(s.serializer,i)}}if(r instanceof Oe){const i=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:so(s.serializer,i)}}if(r instanceof Wn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pn)return{bytesValue:Dw(s.serializer,r._byteString)};if(r instanceof st){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Tp(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Gn)return function(o,a){return{mapValue:{fields:{[fp]:{stringValue:pp},[Xi]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.wc("VectorValues must only contain numeric values.");return _p(a.serializer,u)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${ku(r)}`)}(n,e)}function VA(n,e){const t={};return HT(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(n,(r,s)=>{const i=pl(s,e.Vc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function MA(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Oe||n instanceof Wn||n instanceof pn||n instanceof st||n instanceof eh||n instanceof Gn)}function $p(n,e,t){if(!MA(t)||!DT(t)){const r=ku(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function af(n,e,t){if((e=ut(e))instanceof Zu)return e._internalPath;if(typeof e=="string")return zp(n,e);throw tu("Field path arguments must be of type string or ",n,!1,void 0,t)}const kV=new RegExp("[~\\*/\\[\\]]");function zp(n,e,t){if(e.search(kV)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zu(...e.split("."))._internalPath}catch{throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function tu(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new $(V.INVALID_ARGUMENT,a+n+l)}function LA(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class FA{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new st(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Hp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class OV extends FA{data(){return super.data()}}function Hp(n,e){return typeof e=="string"?zp(n,e):e instanceof Zu?e._internalPath:e._delegate._internalPath}/**
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
 */function VV(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qp{}class UA extends Qp{}function QF(n,e,...t){let r=[];e instanceof Qp&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof Xp).length,a=i.filter(l=>l instanceof Yp).length;if(o>1||o>0&&a>0)throw new $(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Yp extends UA{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Yp(e,t,r)}_apply(e){const t=this._parse(e);return BA(e._query,t),new ni(e.firestore,e.converter,Kd(e._query,t))}_parse(e){const t=Gp(e.firestore);return function(i,o,a,l,u,h,d){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){dv(d,h);const w=[];for(const R of d)w.push(hv(l,i,R));g={arrayValue:{values:w}}}else g=hv(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||dv(d,h),g=xV(a,o,d,h==="in"||h==="not-in");return Te.create(u,h,g)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Xp extends Qp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Xp(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:Ve.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)BA(o,l),o=Kd(o,l)}(e._query,t),new ni(e.firestore,e.converter,Kd(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Jp extends UA{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Jp(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new $(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $a(i,o)}(e._query,this._field,this._direction);return new ni(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new _o(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function YF(n,e="asc"){const t=e,r=Hp("orderBy",n);return Jp._create(r,t)}function hv(n,e,t){if(typeof(t=ut(t))=="string"){if(t==="")throw new $(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dw(e)&&t.indexOf("/")!==-1)throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Ne.fromString(t));if(!Y.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Ga(n,new Y(r))}if(t instanceof st)return Ga(n,t._key);throw new $(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ku(t)}.`)}function dv(n,e){if(!Array.isArray(n)||n.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BA(n,e){const t=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class MV{convertValue(e,t="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw re(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return us(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Xi].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ze(o.doubleValue));return new Gn(i)}convertGeoPoint(e){return new Wn(ze(e.latitude),ze(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Uu(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(qa(e));default:return null}}convertTimestamp(e){const t=mr(e);return new Oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Ne.fromString(e);ie(jw(r),9688,{name:e});const s=new Ks(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(t)||rt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function LV(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class na{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class js extends FA{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Hp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=js._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}js._jsonSchemaVersion="firestore/documentSnapshot/1.0",js._jsonSchema={type:ct("string",js._jsonSchemaVersion),bundleSource:ct("string","DocumentSnapshot"),bundleName:ct("string"),bundle:ct("string")};class mc extends js{data(e={}){return super.data(e)}}class Mi{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new na(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new mc(this._firestore,this._userDataWriter,r.key,r,new na(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new mc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new na(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new mc(s._firestore,s._userDataWriter,a.doc.key,a.doc,new na(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:FV(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Mi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ip.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function FV(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re(61501,{type:n})}}Mi._jsonSchemaVersion="firestore/querySnapshot/1.0",Mi._jsonSchema={type:ct("string",Mi._jsonSchemaVersion),bundleSource:ct("string","QuerySnapshot"),bundleName:ct("string"),bundle:ct("string")};class jA extends MV{constructor(e){super(),this.firestore=e}convertBytes(e){return new pn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new st(this.firestore,null,t)}}function XF(n,e,t){n=$r(n,st);const r=$r(n.firestore,co),s=LV(n.converter,e);return Zp(r,[PV(Gp(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,qt.none())])}function JF(n,e,t,...r){n=$r(n,st);const s=$r(n.firestore,co),i=Gp(s);let o;return o=typeof(e=ut(e))=="string"||e instanceof Zu?DV(i,"updateDoc",n._key,e,t,r):NV(i,"updateDoc",n._key,e),Zp(s,[o.toMutation(n._key,qt.exists(!0))])}function ZF(n){return Zp($r(n.firestore,co),[new Ku(n._key,qt.none())])}function e2(n,...e){var t,r,s;n=ut(n);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||uv(e[o])||(i=e[o++]);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(uv(e[o])){const d=e[o];e[o]=(t=d.next)===null||t===void 0?void 0:t.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(s=d.complete)===null||s===void 0?void 0:s.bind(d)}let l,u,h;if(n instanceof st)u=$r(n.firestore,co),h=ju(n._key.path),l={next:d=>{e[o]&&e[o](UV(u,n,d))},error:e[o+1],complete:e[o+2]};else{const d=$r(n,ni);u=$r(d.firestore,co),h=d._query;const g=new jA(u);l={next:m=>{e[o]&&e[o](new Mi(u,g,d,m))},error:e[o+1],complete:e[o+2]},VV(n._query)}return function(g,m,w,R){const P=new _V(R),j=new $1(m,P,w);return g.asyncQueue.enqueueAndForget(async()=>q1(await rv(g),j)),()=>{P.Ou(),g.asyncQueue.enqueueAndForget(async()=>W1(await rv(g),j))}}(xA(u),h,a,l)}function Zp(n,e){return function(r,s){const i=new Kr;return r.asyncQueue.enqueueAndForget(async()=>tV(await IV(r),s,i)),i.promise}(xA(n),e)}function UV(n,e,t){const r=t.docs.get(e._key),s=new jA(n);return new js(n,s,e._key,r,new na(t.hasPendingWrites,t.fromCache),e.converter)}class BV{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=GV(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function jV(n){return new BV(n)}class qV{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Qa.provider,this._offlineComponentProvider={build:t=>new PA(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class WV{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Qa.provider,this._offlineComponentProvider={build:t=>new mV(t,e==null?void 0:e.cacheSizeBytes)}}}function GV(n){return new qV(void 0)}function KV(){return new WV}/**
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
 */function t2(){return new fl("deleteField")}function n2(){return new Kp("serverTimestamp")}(function(e,t=!0){(function(s){mo=s})(ei),qs(new Zr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new co(new fk(r.getProvider("auth-internal")),new mk(o,r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ks(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),jn(W_,G_,e),jn(W_,G_,"esm2017")})();var fv={};const pv="@firebase/database",gv="1.0.20";/**
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
 */let qA="";function $V(n){qA=n}/**
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
 */class zV{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Et(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Oa(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class HV{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Er(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const WA=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new zV(e)}}catch{}return new HV},ks=WA("localStorage"),QV=WA("sessionStorage");/**
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
 */const Li=new Cu("@firebase/database"),YV=function(){let n=1;return function(){return n++}}(),GA=function(n){const e=ZP(n),t=new HP;t.update(e);const r=t.digest();return qf.encodeByteArray(r)},gl=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=gl.apply(null,r):typeof r=="object"?e+=Et(r):e+=r,e+=" "}return e};let Aa=null,mv=!0;const XV=function(n,e){J(!0,"Can't turn on custom loggers persistently."),Li.logLevel=Ie.VERBOSE,Aa=Li.log.bind(Li)},Dt=function(...n){if(mv===!0&&(mv=!1,Aa===null&&QV.get("logging_enabled")===!0&&XV()),Aa){const e=gl.apply(null,n);Aa(e)}},ml=function(n){return function(...e){Dt(n,...e)}},lf=function(...n){const e="FIREBASE INTERNAL ERROR: "+gl(...n);Li.error(e)},yr=function(...n){const e=`FIREBASE FATAL ERROR: ${gl(...n)}`;throw Li.error(e),new Error(e)},an=function(...n){const e="FIREBASE WARNING: "+gl(...n);Li.warn(e)},JV=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&an("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},KA=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ZV=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},uo="[MIN_NAME]",Xs="[MAX_NAME]",To=function(n,e){if(n===e)return 0;if(n===uo||e===Xs)return-1;if(e===uo||n===Xs)return 1;{const t=_v(n),r=_v(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},eM=function(n,e){return n===e?0:n<e?-1:1},$o=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Et(e))},eg=function(n){if(typeof n!="object"||n===null)return Et(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Et(e[r]),t+=":",t+=eg(n[e[r]]);return t+="}",t},$A=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let s=0;s<t;s+=e)s+e>t?r.push(n.substring(s,t)):r.push(n.substring(s,s+e));return r};function yn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const zA=function(n){J(!KA(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let s,i,o,a,l;n===0?(i=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),r),i=a+r,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(n/Math.pow(2,1-r-t))));const u=[];for(l=t;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(s?1:0),u.reverse();const h=u.join("");let d="";for(l=0;l<64;l+=8){let g=parseInt(h.substr(l,8),2).toString(16);g.length===1&&(g="0"+g),d=d+g}return d.toLowerCase()},tM=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},nM=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},rM=new RegExp("^-?(0*)\\d{1,10}$"),sM=-2147483648,iM=2147483647,_v=function(n){if(rM.test(n)){const e=Number(n);if(e>=sM&&e<=iM)return e}return null},_l=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw an("Exception was thrown by user callback.",t),e},Math.floor(0))}},oM=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ba=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class aM{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,fn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){an(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class lM{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Dt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',an(e)}}class _c{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_c.OWNER="owner";/**
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
 */const tg="5",HA="v",QA="s",YA="r",XA="f",JA=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ZA="ls",eb="p",cf="ac",tb="websocket",nb="long_polling";/**
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
 */class rb{constructor(e,t,r,s,i=!1,o="",a=!1,l=!1,u=null){this.secure=t,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ks.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ks.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function cM(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function sb(n,e,t){J(typeof e=="string","typeof type must == string"),J(typeof t=="object","typeof params must == object");let r;if(e===tb)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===nb)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);cM(n)&&(t.ns=n.namespace);const s=[];return yn(t,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class uM{constructor(){this.counters_={}}incrementCounter(e,t=1){Er(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return PP(this.counters_)}}/**
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
 */const Xh={},Jh={};function ng(n){const e=n.toString();return Xh[e]||(Xh[e]=new uM),Xh[e]}function hM(n,e){const t=n.toString();return Jh[t]||(Jh[t]=e()),Jh[t]}/**
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
 */class dM{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&_l(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const yv="start",fM="close",pM="pLPCommand",gM="pRTLPCB",ib="id",ob="pw",ab="ser",mM="cb",_M="seg",yM="ts",vM="d",IM="dframe",lb=1870,cb=30,EM=lb-cb,TM=25e3,wM=3e4;class Ri{constructor(e,t,r,s,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ml(e),this.stats_=ng(t),this.urlFn=l=>(this.appCheckToken&&(l[cf]=this.appCheckToken),sb(t,nb,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new dM(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(wM)),ZV(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rg((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===yv)this.id=a,this.password=l;else if(o===fM)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[yv]="t",r[ab]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[mM]=this.scriptTagHolder.uniqueCallbackIdentifier),r[HA]=tg,this.transportSessionId&&(r[QA]=this.transportSessionId),this.lastSessionId&&(r[ZA]=this.lastSessionId),this.applicationId&&(r[eb]=this.applicationId),this.appCheckToken&&(r[cf]=this.appCheckToken),typeof location<"u"&&location.hostname&&JA.test(location.hostname)&&(r[YA]=XA);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ri.forceAllow_=!0}static forceDisallow(){Ri.forceDisallow_=!0}static isAvailable(){return Ri.forceAllow_?!0:!Ri.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!tM()&&!nM()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=SE(t),s=$A(r,EM);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[IM]="t",r[ib]=e,r[ob]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Et(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class rg{constructor(e,t,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=YV(),window[pM+this.uniqueCallbackIdentifier]=e,window[gM+this.uniqueCallbackIdentifier]=t,this.myIFrame=rg.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Dt("frame writing exception"),a.stack&&Dt(a.stack),Dt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Dt("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ib]=this.myID,e[ob]=this.myPW,e[ab]=this.currentSerial;let t=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cb+r.length<=lb;){const o=this.pendingSegs.shift();r=r+"&"+_M+s+"="+o.seg+"&"+yM+s+"="+o.ts+"&"+vM+s+"="+o.d,s++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(r,Math.floor(TM)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{Dt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const AM=16384,bM=45e3;let nu=null;typeof MozWebSocket<"u"?nu=MozWebSocket:typeof WebSocket<"u"&&(nu=WebSocket);class Tn{constructor(e,t,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ml(this.connId),this.stats_=ng(t),this.connURL=Tn.connectionURL_(t,o,a,s,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,s,i){const o={};return o[HA]=tg,typeof location<"u"&&location.hostname&&JA.test(location.hostname)&&(o[YA]=XA),t&&(o[QA]=t),r&&(o[ZA]=r),s&&(o[cf]=s),i&&(o[eb]=i),sb(e,tb,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ks.set("previous_websocket_failure",!0);try{let r;jP(),this.mySock=new nu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Tn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&nu!==null&&!Tn.forceDisallow_}static previouslyFailed(){return ks.isInMemoryStorage||ks.get("previous_websocket_failure")===!0}markConnectionHealthy(){ks.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Oa(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(J(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Et(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=$A(t,AM);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bM))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tn.responsesRequiredToBeHealthy=2;Tn.healthyTimeout=3e4;/**
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
 */class Ya{static get ALL_TRANSPORTS(){return[Ri,Tn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Tn&&Tn.isAvailable();let r=t&&!Tn.previouslyFailed();if(e.webSocketOnly&&(t||an("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Tn];else{const s=this.transports_=[];for(const i of Ya.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ya.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ya.globalTransportInitialized_=!1;/**
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
 */const SM=6e4,RM=5e3,CM=10*1024,PM=100*1024,Zh="t",vv="d",NM="s",Iv="r",DM="e",Ev="o",Tv="a",wv="n",Av="p",xM="h";class kM{constructor(e,t,r,s,i,o,a,l,u,h){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ml("c:"+this.id+":"),this.transportManager_=new Ya(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ba(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>PM?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CM?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zh in e){const t=e[Zh];t===Tv?this.upgradeIfSecondaryHealthy_():t===Iv?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ev&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=$o("t",e),r=$o("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Av,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Tv,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:wv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=$o("t",e),r=$o("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=$o(Zh,e);if(vv in e){const r=e[vv];if(t===xM){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===wv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===NM?this.onConnectionShutdown_(r):t===Iv?this.onReset_(r):t===DM?lf("Server Error: "+r):t===Ev?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lf("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),tg!==r&&an("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),ba(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SM))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ba(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(RM))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Av,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ks.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ub{put(e,t,r,s){}merge(e,t,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class hb{constructor(e){this.allowedEvents_=e,this.listeners_={},J(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const s=this.getInitialEvent(e);s&&t.apply(r,s)}off(e,t,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===t&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){J(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class ru extends hb{static getInstance(){return new ru}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return J(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const bv=32,Sv=768;class $e{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Fe(){return new $e("")}function be(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function is(n){return n.pieces_.length-n.pieceNum_}function Ke(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new $e(n.pieces_,e)}function db(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function OM(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function fb(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function pb(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new $e(e,0)}function _t(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof $e)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&t.push(r[s])}return new $e(t,0)}function we(n){return n.pieceNum_>=n.pieces_.length}function gn(n,e){const t=be(n),r=be(e);if(t===null)return e;if(t===r)return gn(Ke(n),Ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function gb(n,e){if(is(n)!==is(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function An(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(is(n)>is(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class VM{constructor(e,t){this.errorPrefix_=t,this.parts_=fb(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Ru(this.parts_[r]);mb(this)}}function MM(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ru(e),mb(n)}function LM(n){const e=n.parts_.pop();n.byteLength_-=Ru(e),n.parts_.length>0&&(n.byteLength_-=1)}function mb(n){if(n.byteLength_>Sv)throw new Error(n.errorPrefix_+"has a key path longer than "+Sv+" bytes ("+n.byteLength_+").");if(n.parts_.length>bv)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+bv+") or object contains a cycle "+As(n))}function As(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class sg extends hb{static getInstance(){return new sg}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return J(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const zo=1e3,FM=60*5*1e3,Rv=30*1e3,UM=1.3,BM=3e4,jM="server_kill",Cv=3;class ur extends ub{constructor(e,t,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ur.nextPersistentConnectionId_++,this.log_=ml("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zo,this.maxReconnectDelay_=FM,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sg.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ru.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const s=++this.requestNumber_,i={r:s,a:e,b:t};this.log_(Et(i)),J(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const t=new Wf,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),J(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;ur.warnOnListenWarnings_(l,t),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Er(e,"w")){const r=Wi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();an(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Rv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=$P(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),J(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,t)}sendUnlisten_(e,t,r,s){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,s){const i={p:t,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,r,s){this.putInternal("p",e,t,r,s)}merge(e,t,r,s){this.putInternal("m",e,t,r,s)}putInternal(e,t,r,s,i){this.initConnection_();const o={p:t,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Et(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):lf("Unrecognized action received from server: "+Et(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){J(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>BM&&(this.reconnectDelay_=zo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*UM)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ur.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){J(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,g]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Dt("getToken() completed but was canceled"):(Dt("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=g&&g.token,a=new kM(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,m=>{an(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(jM)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&an(d),l())}}}interrupt(e){Dt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Dt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],wd(this.interruptReasons_)&&(this.reconnectDelay_=zo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(i=>eg(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const r=new $e(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(t),i.delete(t),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,t){Dt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cv&&(this.reconnectDelay_=Rv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Dt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cv&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+qA.replace(/\./g,"-")]=1,Kf()?e["framework.cordova"]=1:OE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ru.getInstance().currentlyOnline();return wd(this.interruptReasons_)&&e}}ur.nextPersistentConnectionId_=0;ur.nextConnectionId_=0;/**
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
 */class Se{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Se(e,t)}}/**
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
 */class th{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Se(uo,e),s=new Se(uo,t);return this.compare(r,s)!==0}minPost(){return Se.MIN}}/**
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
 */let Hl;class _b extends th{static get __EMPTY_NODE(){return Hl}static set __EMPTY_NODE(e){Hl=e}compare(e,t){return To(e.name,t.name)}isDefinedOn(e){throw fo("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Se.MIN}maxPost(){return new Se(Xs,Hl)}makePost(e,t){return J(typeof e=="string","KeyIndex indexValue must always be a string."),new Se(e,Hl)}toString(){return".key"}}const Fi=new _b;/**
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
 */class Ql{constructor(e,t,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?r(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class mt{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??mt.RED,this.left=s??Yt.EMPTY_NODE,this.right=i??Yt.EMPTY_NODE}copy(e,t,r,s,i){return new mt(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Yt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,s;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Yt.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}mt.RED=!0;mt.BLACK=!1;class qM{copy(e,t,r,s,i){return this}insert(e,t,r){return new mt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Yt{constructor(e,t=Yt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Yt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,mt.BLACK,null,null))}remove(e){return new Yt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,mt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,s=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ql(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ql(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ql(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ql(this.root_,null,this.comparator_,!0,e)}}Yt.EMPTY_NODE=new qM;/**
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
 */function WM(n,e){return To(n.name,e.name)}function ig(n,e){return To(n,e)}/**
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
 */let uf;function GM(n){uf=n}const yb=function(n){return typeof n=="number"?"number:"+zA(n):"string:"+n},vb=function(n){if(n.isLeafNode()){const e=n.val();J(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Er(e,".sv"),"Priority must be a string or number.")}else J(n===uf||n.isEmpty(),"priority of unexpected type.");J(n===uf||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Pv;class pt{static set __childrenNodeConstructor(e){Pv=e}static get __childrenNodeConstructor(){return Pv}constructor(e,t=pt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,J(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),vb(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:be(e)===".priority"?this.priorityNode_:pt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:pt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=be(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(J(r!==".priority"||is(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ke(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+yb(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=zA(this.value_):e+=this.value_,this.lazyHash_=GA(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pt.__childrenNodeConstructor?-1:(J(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,s=pt.VALUE_TYPE_ORDER.indexOf(t),i=pt.VALUE_TYPE_ORDER.indexOf(r);return J(s>=0,"Unknown leaf type: "+t),J(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}pt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ib,Eb;function KM(n){Ib=n}function $M(n){Eb=n}class zM extends th{compare(e,t){const r=e.node.getPriority(),s=t.node.getPriority(),i=r.compareTo(s);return i===0?To(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Se.MIN}maxPost(){return new Se(Xs,new pt("[PRIORITY-POST]",Eb))}makePost(e,t){const r=Ib(e);return new Se(t,new pt("[PRIORITY-POST]",r))}toString(){return".priority"}}const Vt=new zM;/**
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
 */const HM=Math.log(2);class QM{constructor(e){const t=i=>parseInt(Math.log(i)/HM,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const su=function(n,e,t,r){n.sort(e);const s=function(l,u){const h=u-l;let d,g;if(h===0)return null;if(h===1)return d=n[l],g=t?t(d):d,new mt(g,d.node,mt.BLACK,null,null);{const m=parseInt(h/2,10)+l,w=s(l,m),R=s(m+1,u);return d=n[m],g=t?t(d):d,new mt(g,d.node,mt.BLACK,w,R)}},i=function(l){let u=null,h=null,d=n.length;const g=function(w,R){const P=d-w,j=d;d-=w;const k=s(P+1,j),M=n[P],W=t?t(M):M;m(new mt(W,M.node,R,null,k))},m=function(w){u?(u.left=w,u=w):(h=w,u=w)};for(let w=0;w<l.count;++w){const R=l.nextBitIsOne(),P=Math.pow(2,l.count-(w+1));R?g(P,mt.BLACK):(g(P,mt.BLACK),g(P,mt.RED))}return h},o=new QM(n.length),a=i(o);return new Yt(r||e,a)};/**
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
 */let ed;const yi={};class lr{static get Default(){return J(yi&&Vt,"ChildrenNode.ts has not been loaded"),ed=ed||new lr({".priority":yi},{".priority":Vt}),ed}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Wi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Yt?t:null}hasIndex(e){return Er(this.indexSet_,e.toString())}addIndex(e,t){J(e!==Fi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=t.getIterator(Se.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=su(r,e.getCompare()):a=yi;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new lr(h,u)}addToIndexes(e,t){const r=Nc(this.indexes_,(s,i)=>{const o=Wi(this.indexSet_,i);if(J(o,"Missing index implementation for "+i),s===yi)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(Se.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),su(a,o.getCompare())}else return yi;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new Se(e.name,a))),l.insert(e,e.node)}});return new lr(r,this.indexSet_)}removeFromIndexes(e,t){const r=Nc(this.indexes_,s=>{if(s===yi)return s;{const i=t.get(e.name);return i?s.remove(new Se(e.name,i)):s}});return new lr(r,this.indexSet_)}}/**
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
 */let Ho;class ke{static get EMPTY_NODE(){return Ho||(Ho=new ke(new Yt(ig),null,lr.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&vb(this.priorityNode_),this.children_.isEmpty()&&J(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ho}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ho:t}}getChild(e){const t=be(e);return t===null?this:this.getImmediateChild(t).getChild(Ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(J(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Se(e,t);let s,i;t.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ho:this.priorityNode_;return new ke(s,o,i)}}updateChild(e,t){const r=be(e);if(r===null)return t;{J(be(e)!==".priority"||is(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Ke(e),t);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,s=0,i=!0;if(this.forEachChild(Vt,(o,a)=>{t[o]=a.val(e),r++,i&&ke.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+yb(this.getPriority().val())+":"),this.forEachChild(Vt,(t,r)=>{const s=r.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":GA(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new Se(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Se(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Se(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,Se.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,Se.Wrap);let i=s.peek();for(;i!=null&&t.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yl?-1:0}withIndex(e){if(e===Fi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Fi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(Vt),s=t.getIterator(Vt);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fi?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class YM extends ke{constructor(){super(new Yt(ig),ke.EMPTY_NODE,lr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const yl=new YM;Object.defineProperties(Se,{MIN:{value:new Se(uo,ke.EMPTY_NODE)},MAX:{value:new Se(Xs,yl)}});_b.__EMPTY_NODE=ke.EMPTY_NODE;pt.__childrenNodeConstructor=ke;GM(yl);$M(yl);/**
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
 */const XM=!0;function xt(n,e=null){if(n===null)return ke.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),J(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new pt(t,xt(e))}if(!(n instanceof Array)&&XM){const t=[];let r=!1;if(yn(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=xt(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),t.push(new Se(o,l)))}}),t.length===0)return ke.EMPTY_NODE;const i=su(t,WM,o=>o.name,ig);if(r){const o=su(t,Vt.getCompare());return new ke(i,xt(e),new lr({".priority":o},{".priority":Vt}))}else return new ke(i,xt(e),lr.Default)}else{let t=ke.EMPTY_NODE;return yn(n,(r,s)=>{if(Er(n,r)&&r.substring(0,1)!=="."){const i=xt(s);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(r,i))}}),t.updatePriority(xt(e))}}KM(xt);/**
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
 */class JM extends th{constructor(e){super(),this.indexPath_=e,J(!we(e)&&be(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),s=this.extractChild(t.node),i=r.compareTo(s);return i===0?To(e.name,t.name):i}makePost(e,t){const r=xt(e),s=ke.EMPTY_NODE.updateChild(this.indexPath_,r);return new Se(t,s)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,yl);return new Se(Xs,e)}toString(){return fb(this.indexPath_,0).join("/")}}/**
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
 */class ZM extends th{compare(e,t){const r=e.node.compareTo(t.node);return r===0?To(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Se.MIN}maxPost(){return Se.MAX}makePost(e,t){const r=xt(e);return new Se(t,r)}toString(){return".value"}}const eL=new ZM;/**
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
 */function tL(n){return{type:"value",snapshotNode:n}}function nL(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function rL(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Nv(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function sL(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class og{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return J(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return J(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:uo}hasEnd(){return this.endSet_}getIndexEndValue(){return J(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return J(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return J(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Vt}copy(){const e=new og;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Dv(n){const e={};if(n.isDefault())return e;let t;if(n.index_===Vt?t="$priority":n.index_===eL?t="$value":n.index_===Fi?t="$key":(J(n.index_ instanceof JM,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Et(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Et(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Et(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Et(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Et(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function xv(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==Vt&&(e.i=n.index_.toString()),e}/**
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
 */class iu extends ub{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(J(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=ml("p:rest:"),this.listens_={}}listen(e,t,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=iu.getListenId_(e,r),a={};this.listens_[o]=a;const l=Dv(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let d=h;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(i,d,!1,r),Wi(this.listens_,o)===a){let g;u?u===401?g="permission_denied":g="rest_error:"+u:g="ok",s(g,null)}})}unlisten(e,t){const r=iu.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Dv(e._queryParams),r=e._path.toString(),s=new Wf;return this.restRequest_(r+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(t.auth=s.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+po(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Oa(a.responseText)}catch{an("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&an("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class iL{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ou(){return{value:null,children:new Map}}function Tb(n,e,t){if(we(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=be(e);n.children.has(r)||n.children.set(r,ou());const s=n.children.get(r);e=Ke(e),Tb(s,e,t)}}function hf(n,e,t){n.value!==null?t(e,n.value):oL(n,(r,s)=>{const i=new $e(e.toString()+"/"+r);hf(s,i,t)})}function oL(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class aL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&yn(this.last_,(r,s)=>{t[r]=t[r]-s}),this.last_=e,t}}/**
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
 */const kv=10*1e3,lL=30*1e3,cL=5*60*1e3;class uL{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new aL(e);const r=kv+(lL-kv)*Math.random();ba(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;yn(e,(s,i)=>{i>0&&Er(this.statsToReport_,s)&&(t[s]=i,r=!0)}),r&&this.server_.reportStats(t),ba(this.reportStats_.bind(this),Math.floor(Math.random()*2*cL))}}/**
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
 */var Un;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Un||(Un={}));function wb(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ab(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bb(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class au{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=Un.ACK_USER_WRITE,this.source=wb()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return J(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new $e(e));return new au(Fe(),t,this.revert)}}else return J(be(this.path)===e,"operationForChild called for unrelated child."),new au(Ke(this.path),this.affectedTree,this.revert)}}/**
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
 */class Js{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=Un.OVERWRITE}operationForChild(e){return we(this.path)?new Js(this.source,Fe(),this.snap.getImmediateChild(e)):new Js(this.source,Ke(this.path),this.snap)}}/**
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
 */class Xa{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=Un.MERGE}operationForChild(e){if(we(this.path)){const t=this.children.subtree(new $e(e));return t.isEmpty()?null:t.value?new Js(this.source,Fe(),t.value):new Xa(this.source,Fe(),t)}else return J(be(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xa(this.source,Ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ag{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const t=be(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function hL(n,e,t,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(sL(o.childName,o.snapshotNode))}),Qo(n,s,"child_removed",e,r,t),Qo(n,s,"child_added",e,r,t),Qo(n,s,"child_moved",i,r,t),Qo(n,s,"child_changed",e,r,t),Qo(n,s,"value",e,r,t),s}function Qo(n,e,t,r,s,i){const o=r.filter(a=>a.type===t);o.sort((a,l)=>fL(n,a,l)),o.forEach(a=>{const l=dL(n,a,i);s.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,n.query_))})})}function dL(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function fL(n,e,t){if(e.childName==null||t.childName==null)throw fo("Should only compare child_ events.");const r=new Se(e.childName,e.snapshotNode),s=new Se(t.childName,t.snapshotNode);return n.index_.compare(r,s)}/**
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
 */function Sb(n,e){return{eventCache:n,serverCache:e}}function Sa(n,e,t,r){return Sb(new ag(e,t,r),n.serverCache)}function Rb(n,e,t,r){return Sb(n.eventCache,new ag(e,t,r))}function df(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Zs(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let td;const pL=()=>(td||(td=new Yt(eM)),td);class Ge{static fromObject(e){let t=new Ge(null);return yn(e,(r,s)=>{t=t.set(new $e(r),s)}),t}constructor(e,t=pL()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Fe(),value:this.value};if(we(e))return null;{const r=be(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Ke(e),t);return i!=null?{path:_t(new $e(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const t=be(e),r=this.children.get(t);return r!==null?r.subtree(Ke(e)):new Ge(null)}}set(e,t){if(we(e))return new Ge(t,this.children);{const r=be(e),i=(this.children.get(r)||new Ge(null)).set(Ke(e),t),o=this.children.insert(r,i);return new Ge(this.value,o)}}remove(e){if(we(e))return this.children.isEmpty()?new Ge(null):new Ge(null,this.children);{const t=be(e),r=this.children.get(t);if(r){const s=r.remove(Ke(e));let i;return s.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,s),this.value===null&&i.isEmpty()?new Ge(null):new Ge(this.value,i)}else return this}}get(e){if(we(e))return this.value;{const t=be(e),r=this.children.get(t);return r?r.get(Ke(e)):null}}setTree(e,t){if(we(e))return t;{const r=be(e),i=(this.children.get(r)||new Ge(null)).setTree(Ke(e),t);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new Ge(this.value,o)}}fold(e){return this.fold_(Fe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(_t(e,s),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Fe(),t)}findOnPath_(e,t,r){const s=this.value?r(t,this.value):!1;if(s)return s;if(we(e))return null;{const i=be(e),o=this.children.get(i);return o?o.findOnPath_(Ke(e),_t(t,i),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Fe(),t)}foreachOnPath_(e,t,r){if(we(e))return this;{this.value&&r(t,this.value);const s=be(e),i=this.children.get(s);return i?i.foreachOnPath_(Ke(e),_t(t,s),r):new Ge(null)}}foreach(e){this.foreach_(Fe(),e)}foreach_(e,t){this.children.inorderTraversal((r,s)=>{s.foreach_(_t(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class Rn{constructor(e){this.writeTree_=e}static empty(){return new Rn(new Ge(null))}}function Ra(n,e,t){if(we(e))return new Rn(new Ge(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=gn(s,e);return i=i.updateChild(o,t),new Rn(n.writeTree_.set(s,i))}else{const s=new Ge(t),i=n.writeTree_.setTree(e,s);return new Rn(i)}}}function Ov(n,e,t){let r=n;return yn(t,(s,i)=>{r=Ra(r,_t(e,s),i)}),r}function Vv(n,e){if(we(e))return Rn.empty();{const t=n.writeTree_.setTree(e,new Ge(null));return new Rn(t)}}function ff(n,e){return ri(n,e)!=null}function ri(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(gn(t.path,e)):null}function Mv(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Vt,(r,s)=>{e.push(new Se(r,s))}):n.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new Se(r,s.value))}),e}function Yr(n,e){if(we(e))return n;{const t=ri(n,e);return t!=null?new Rn(new Ge(t)):new Rn(n.writeTree_.subtree(e))}}function pf(n){return n.writeTree_.isEmpty()}function ho(n,e){return Cb(Fe(),n.writeTree_,e)}function Cb(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(J(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):t=Cb(_t(n,s),i,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(_t(n,".priority"),r)),t}}/**
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
 */function Pb(n,e){return Ob(e,n)}function gL(n,e,t,r,s){J(r>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:s}),s&&(n.visibleWrites=Ra(n.visibleWrites,e,t)),n.lastWriteId=r}function mL(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function _L(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);J(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let s=r.visible,i=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&yL(a,r.path)?s=!1:An(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return vL(n),!0;if(r.snap)n.visibleWrites=Vv(n.visibleWrites,r.path);else{const a=r.children;yn(a,l=>{n.visibleWrites=Vv(n.visibleWrites,_t(r.path,l))})}return!0}else return!1}function yL(n,e){if(n.snap)return An(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&An(_t(n.path,t),e))return!0;return!1}function vL(n){n.visibleWrites=Nb(n.allWrites,IL,Fe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function IL(n){return n.visible}function Nb(n,e,t){let r=Rn.empty();for(let s=0;s<n.length;++s){const i=n[s];if(e(i)){const o=i.path;let a;if(i.snap)An(t,o)?(a=gn(t,o),r=Ra(r,a,i.snap)):An(o,t)&&(a=gn(o,t),r=Ra(r,Fe(),i.snap.getChild(a)));else if(i.children){if(An(t,o))a=gn(t,o),r=Ov(r,a,i.children);else if(An(o,t))if(a=gn(o,t),we(a))r=Ov(r,Fe(),i.children);else{const l=Wi(i.children,be(a));if(l){const u=l.getChild(Ke(a));r=Ra(r,Fe(),u)}}}else throw fo("WriteRecord should have .snap or .children")}}return r}function Db(n,e,t,r,s){if(!r&&!s){const i=ri(n.visibleWrites,e);if(i!=null)return i;{const o=Yr(n.visibleWrites,e);if(pf(o))return t;if(t==null&&!ff(o,Fe()))return null;{const a=t||ke.EMPTY_NODE;return ho(o,a)}}}else{const i=Yr(n.visibleWrites,e);if(!s&&pf(i))return t;if(!s&&t==null&&!ff(i,Fe()))return null;{const o=function(u){return(u.visible||s)&&(!r||!~r.indexOf(u.writeId))&&(An(u.path,e)||An(e,u.path))},a=Nb(n.allWrites,o,e),l=t||ke.EMPTY_NODE;return ho(a,l)}}}function EL(n,e,t){let r=ke.EMPTY_NODE;const s=ri(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Vt,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(t){const i=Yr(n.visibleWrites,e);return t.forEachChild(Vt,(o,a)=>{const l=ho(Yr(i,new $e(o)),a);r=r.updateImmediateChild(o,l)}),Mv(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Yr(n.visibleWrites,e);return Mv(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function TL(n,e,t,r,s){J(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=_t(e,t);if(ff(n.visibleWrites,i))return null;{const o=Yr(n.visibleWrites,i);return pf(o)?s.getChild(t):ho(o,s.getChild(t))}}function wL(n,e,t,r){const s=_t(e,t),i=ri(n.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(t)){const o=Yr(n.visibleWrites,s);return ho(o,r.getNode().getImmediateChild(t))}else return null}function AL(n,e){return ri(n.visibleWrites,e)}function bL(n,e,t,r,s,i,o){let a;const l=Yr(n.visibleWrites,e),u=ri(l,Fe());if(u!=null)a=u;else if(t!=null)a=ho(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),g=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=g.getNext();for(;m&&h.length<s;)d(m,r)!==0&&h.push(m),m=g.getNext();return h}else return[]}function SL(){return{visibleWrites:Rn.empty(),allWrites:[],lastWriteId:-1}}function gf(n,e,t,r){return Db(n.writeTree,n.treePath,e,t,r)}function xb(n,e){return EL(n.writeTree,n.treePath,e)}function Lv(n,e,t,r){return TL(n.writeTree,n.treePath,e,t,r)}function lu(n,e){return AL(n.writeTree,_t(n.treePath,e))}function RL(n,e,t,r,s,i){return bL(n.writeTree,n.treePath,e,t,r,s,i)}function lg(n,e,t){return wL(n.writeTree,n.treePath,e,t)}function kb(n,e){return Ob(_t(n.treePath,e),n.writeTree)}function Ob(n,e){return{treePath:n,writeTree:e}}/**
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
 */class CL{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;J(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),J(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(r,Nv(r,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(r,rL(r,s.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(r,nL(r,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(r,Nv(r,e.snapshotNode,s.oldSnap));else throw fo("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class PL{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const Vb=new PL;class cg{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new ag(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return lg(this.writes_,e,r)}}getChildAfterChild(e,t,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Zs(this.viewCache_),i=RL(this.writes_,s,t,1,r,e);return i.length===0?null:i[0]}}function NL(n,e){J(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),J(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function DL(n,e,t,r,s){const i=new CL;let o,a;if(t.type===Un.OVERWRITE){const u=t;u.source.fromUser?o=mf(n,e,u.path,u.snap,r,s,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!we(u.path),o=cu(n,e,u.path,u.snap,r,s,a,i))}else if(t.type===Un.MERGE){const u=t;u.source.fromUser?o=kL(n,e,u.path,u.children,r,s,i):(J(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=_f(n,e,u.path,u.children,r,s,a,i))}else if(t.type===Un.ACK_USER_WRITE){const u=t;u.revert?o=ML(n,e,u.path,r,s,i):o=OL(n,e,u.path,u.affectedTree,r,s,i)}else if(t.type===Un.LISTEN_COMPLETE)o=VL(n,e,t.path,r,i);else throw fo("Unknown operation type: "+t.type);const l=i.getChanges();return xL(e,o,l),{viewCache:o,changes:l}}function xL(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=df(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&t.push(tL(df(e)))}}function Mb(n,e,t,r,s,i){const o=e.eventCache;if(lu(r,t)!=null)return e;{let a,l;if(we(t))if(J(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Zs(e),h=u instanceof ke?u:ke.EMPTY_NODE,d=xb(r,h);a=n.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const u=gf(r,Zs(e));a=n.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=be(t);if(u===".priority"){J(is(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=Lv(r,t,h,l);d!=null?a=n.filter.updatePriority(h,d):a=o.getNode()}else{const h=Ke(t);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const g=Lv(r,t,o.getNode(),l);g!=null?d=o.getNode().getImmediateChild(u).updateChild(h,g):d=o.getNode().getImmediateChild(u)}else d=lg(r,u,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),u,d,h,s,i):a=o.getNode()}}return Sa(e,a,o.isFullyInitialized()||we(t),n.filter.filtersNodes())}}function cu(n,e,t,r,s,i,o,a){const l=e.serverCache;let u;const h=o?n.filter:n.filter.getIndexedFilter();if(we(t))u=h.updateFullNode(l.getNode(),r,null);else if(h.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(t,r);u=h.updateFullNode(l.getNode(),m,null)}else{const m=be(t);if(!l.isCompleteForPath(t)&&is(t)>1)return e;const w=Ke(t),P=l.getNode().getImmediateChild(m).updateChild(w,r);m===".priority"?u=h.updatePriority(l.getNode(),P):u=h.updateChild(l.getNode(),m,P,w,Vb,null)}const d=Rb(e,u,l.isFullyInitialized()||we(t),h.filtersNodes()),g=new cg(s,d,i);return Mb(n,d,t,s,g,a)}function mf(n,e,t,r,s,i,o){const a=e.eventCache;let l,u;const h=new cg(s,e,i);if(we(t))u=n.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Sa(e,u,!0,n.filter.filtersNodes());else{const d=be(t);if(d===".priority")u=n.filter.updatePriority(e.eventCache.getNode(),r),l=Sa(e,u,a.isFullyInitialized(),a.isFiltered());else{const g=Ke(t),m=a.getNode().getImmediateChild(d);let w;if(we(g))w=r;else{const R=h.getCompleteChild(d);R!=null?db(g)===".priority"&&R.getChild(pb(g)).isEmpty()?w=R:w=R.updateChild(g,r):w=ke.EMPTY_NODE}if(m.equals(w))l=e;else{const R=n.filter.updateChild(a.getNode(),d,w,g,h,o);l=Sa(e,R,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Fv(n,e){return n.eventCache.isCompleteForChild(e)}function kL(n,e,t,r,s,i,o){let a=e;return r.foreach((l,u)=>{const h=_t(t,l);Fv(e,be(h))&&(a=mf(n,a,h,u,s,i,o))}),r.foreach((l,u)=>{const h=_t(t,l);Fv(e,be(h))||(a=mf(n,a,h,u,s,i,o))}),a}function Uv(n,e,t){return t.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function _f(n,e,t,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;we(t)?u=r:u=new Ge(null).setTree(t,r);const h=e.serverCache.getNode();return u.children.inorderTraversal((d,g)=>{if(h.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),w=Uv(n,m,g);l=cu(n,l,new $e(d),w,s,i,o,a)}}),u.children.inorderTraversal((d,g)=>{const m=!e.serverCache.isCompleteForChild(d)&&g.value===null;if(!h.hasChild(d)&&!m){const w=e.serverCache.getNode().getImmediateChild(d),R=Uv(n,w,g);l=cu(n,l,new $e(d),R,s,i,o,a)}}),l}function OL(n,e,t,r,s,i,o){if(lu(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(we(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return cu(n,e,t,l.getNode().getChild(t),s,i,a,o);if(we(t)){let u=new Ge(null);return l.getNode().forEachChild(Fi,(h,d)=>{u=u.set(new $e(h),d)}),_f(n,e,t,u,s,i,a,o)}else return e}else{let u=new Ge(null);return r.foreach((h,d)=>{const g=_t(t,h);l.isCompleteForPath(g)&&(u=u.set(h,l.getNode().getChild(g)))}),_f(n,e,t,u,s,i,a,o)}}function VL(n,e,t,r,s){const i=e.serverCache,o=Rb(e,i.getNode(),i.isFullyInitialized()||we(t),i.isFiltered());return Mb(n,o,t,r,Vb,s)}function ML(n,e,t,r,s,i){let o;if(lu(r,t)!=null)return e;{const a=new cg(r,e,s),l=e.eventCache.getNode();let u;if(we(t)||be(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=gf(r,Zs(e));else{const d=e.serverCache.getNode();J(d instanceof ke,"serverChildren would be complete if leaf node"),h=xb(r,d)}h=h,u=n.filter.updateFullNode(l,h,i)}else{const h=be(t);let d=lg(r,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?u=n.filter.updateChild(l,h,d,Ke(t),a,i):e.eventCache.getNode().hasChild(h)?u=n.filter.updateChild(l,h,ke.EMPTY_NODE,Ke(t),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gf(r,Zs(e)),o.isLeafNode()&&(u=n.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||lu(r,Fe())!=null,Sa(e,u,o,n.filter.filtersNodes())}}function LL(n,e){const t=Zs(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!we(e)&&!t.getImmediateChild(be(e)).isEmpty())?t.getChild(e):null}function Bv(n,e,t,r){e.type===Un.MERGE&&e.source.queryId!==null&&(J(Zs(n.viewCache_),"We should always have a full cache before handling merges"),J(df(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,i=DL(n.processor_,s,e,t,r);return NL(n.processor_,i.viewCache),J(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=i.viewCache,FL(n,i.changes,i.viewCache.eventCache.getNode())}function FL(n,e,t,r){const s=n.eventRegistrations_;return hL(n.eventGenerator_,e,t,s)}/**
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
 */let jv;function UL(n){J(!jv,"__referenceConstructor has already been defined"),jv=n}function ug(n,e,t,r){const s=e.source.queryId;if(s!==null){const i=n.views.get(s);return J(i!=null,"SyncTree gave us an op for an invalid query."),Bv(i,e,t,r)}else{let i=[];for(const o of n.views.values())i=i.concat(Bv(o,e,t,r));return i}}function hg(n,e){let t=null;for(const r of n.views.values())t=t||LL(r,e);return t}/**
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
 */let qv;function BL(n){J(!qv,"__referenceConstructor has already been defined"),qv=n}class Wv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ge(null),this.pendingWriteTree_=SL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function jL(n,e,t,r,s){return gL(n.pendingWriteTree_,e,t,r,s),s?rh(n,new Js(wb(),e,t)):[]}function Ci(n,e,t=!1){const r=mL(n.pendingWriteTree_,e);if(_L(n.pendingWriteTree_,e)){let i=new Ge(null);return r.snap!=null?i=i.set(Fe(),!0):yn(r.children,o=>{i=i.set(new $e(o),!0)}),rh(n,new au(r.path,i,t))}else return[]}function nh(n,e,t){return rh(n,new Js(Ab(),e,t))}function qL(n,e,t){const r=Ge.fromObject(t);return rh(n,new Xa(Ab(),e,r))}function WL(n,e,t,r){const s=Bb(n,r);if(s!=null){const i=jb(s),o=i.path,a=i.queryId,l=gn(o,e),u=new Js(bb(a),l,t);return qb(n,o,u)}else return[]}function GL(n,e,t,r){const s=Bb(n,r);if(s){const i=jb(s),o=i.path,a=i.queryId,l=gn(o,e),u=Ge.fromObject(t),h=new Xa(bb(a),l,u);return qb(n,o,h)}else return[]}function Lb(n,e,t){const s=n.pendingWriteTree_,i=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=gn(o,e),u=hg(a,l);if(u)return u});return Db(s,e,i,t,!0)}function rh(n,e){return Fb(e,n.syncPointTree_,null,Pb(n.pendingWriteTree_,Fe()))}function Fb(n,e,t,r){if(we(n.path))return Ub(n,e,t,r);{const s=e.get(Fe());t==null&&s!=null&&(t=hg(s,Fe()));let i=[];const o=be(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const u=t?t.getImmediateChild(o):null,h=kb(r,o);i=i.concat(Fb(a,l,u,h))}return s&&(i=i.concat(ug(s,n,r,t))),i}}function Ub(n,e,t,r){const s=e.get(Fe());t==null&&s!=null&&(t=hg(s,Fe()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,u=kb(r,o),h=n.operationForChild(o);h&&(i=i.concat(Ub(h,a,l,u)))}),s&&(i=i.concat(ug(s,n,r,t))),i}function Bb(n,e){return n.tagToQueryMap.get(e)}function jb(n){const e=n.indexOf("$");return J(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new $e(n.substr(0,e))}}function qb(n,e,t){const r=n.syncPointTree_.get(e);J(r,"Missing sync point for query tag that we're tracking");const s=Pb(n.pendingWriteTree_,e);return ug(r,t,s,null)}/**
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
 */class dg{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new dg(t)}node(){return this.node_}}class fg{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=_t(this.path_,e);return new fg(this.syncTree_,t)}node(){return Lb(this.syncTree_,this.path_)}}const KL=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Gv=function(n,e,t){if(!n||typeof n!="object")return n;if(J(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return $L(n[".sv"],e,t);if(typeof n[".sv"]=="object")return zL(n[".sv"],e);J(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},$L=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:J(!1,"Unexpected server value: "+n)}},zL=function(n,e,t){n.hasOwnProperty("increment")||J(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&J(!1,"Unexpected increment value: "+r);const s=e.node();if(J(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},HL=function(n,e,t,r){return pg(e,new fg(t,n),r)},QL=function(n,e,t){return pg(n,new dg(e),t)};function pg(n,e,t){const r=n.getPriority().val(),s=Gv(r,e.getImmediateChild(".priority"),t);let i;if(n.isLeafNode()){const o=n,a=Gv(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new pt(a,xt(s)):n}else{const o=n;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new pt(s))),o.forEachChild(Vt,(a,l)=>{const u=pg(l,e.getImmediateChild(a),t);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class gg{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function mg(n,e){let t=e instanceof $e?e:new $e(e),r=n,s=be(t);for(;s!==null;){const i=Wi(r.node.children,s)||{children:{},childCount:0};r=new gg(s,r,i),t=Ke(t),s=be(t)}return r}function wo(n){return n.node.value}function Wb(n,e){n.node.value=e,yf(n)}function Gb(n){return n.node.childCount>0}function YL(n){return wo(n)===void 0&&!Gb(n)}function sh(n,e){yn(n.node.children,(t,r)=>{e(new gg(t,n,r))})}function Kb(n,e,t,r){t&&e(n),sh(n,s=>{Kb(s,e,!0)})}function XL(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function vl(n){return new $e(n.parent===null?n.name:vl(n.parent)+"/"+n.name)}function yf(n){n.parent!==null&&JL(n.parent,n.name,n)}function JL(n,e,t){const r=YL(t),s=Er(n.node.children,e);r&&s?(delete n.node.children[e],n.node.childCount--,yf(n)):!r&&!s&&(n.node.children[e]=t.node,n.node.childCount++,yf(n))}/**
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
 */const ZL=/[\[\].#$\/\u0000-\u001F\u007F]/,eF=/[\[\].#$\u0000-\u001F\u007F]/,nd=10*1024*1024,$b=function(n){return typeof n=="string"&&n.length!==0&&!ZL.test(n)},tF=function(n){return typeof n=="string"&&n.length!==0&&!eF.test(n)},nF=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tF(n)},zb=function(n,e,t){const r=t instanceof $e?new VM(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+As(r));if(typeof e=="function")throw new Error(n+"contains a function "+As(r)+" with contents = "+e.toString());if(KA(e))throw new Error(n+"contains "+e.toString()+" "+As(r));if(typeof e=="string"&&e.length>nd/3&&Ru(e)>nd)throw new Error(n+"contains a string greater than "+nd+" utf8 bytes "+As(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(yn(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!$b(o)))throw new Error(n+" contains an invalid key ("+o+") "+As(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);MM(r,o),zb(n,a,r),LM(r)}),s&&i)throw new Error(n+' contains ".value" child '+As(r)+" in addition to actual children.")}},rF=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!$b(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!nF(t))throw new Error(JP(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class sF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function iF(n,e){let t=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();t!==null&&!gb(i,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(s)}t&&n.eventLists_.push(t)}function si(n,e,t){iF(n,t),oF(n,r=>An(r,e)||An(e,r))}function oF(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const s=n.eventLists_[r];if(s){const i=s.path;e(i)?(aF(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function aF(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();Aa&&Dt("event: "+t.toString()),_l(r)}}}/**
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
 */const lF="repo_interrupt",cF=25;class uF{constructor(e,t,r,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ou(),this.transactionQueueTree_=new gg,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hF(n,e,t){if(n.stats_=ng(n.repoInfo_),n.forceRestClient_||oM())n.server_=new iu(n.repoInfo_,(r,s,i,o)=>{Kv(n,r,s,i,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>$v(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Et(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new ur(n.repoInfo_,e,(r,s,i,o)=>{Kv(n,r,s,i,o)},r=>{$v(n,r)},r=>{fF(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=hM(n.repoInfo_,()=>new uL(n.stats_,n.server_)),n.infoData_=new iL,n.infoSyncTree_=new Wv({startListening:(r,s,i,o)=>{let a=[];const l=n.infoData_.getNode(r._path);return l.isEmpty()||(a=nh(n.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_g(n,"connected",!1),n.serverSyncTree_=new Wv({startListening:(r,s,i,o)=>(n.server_.listen(r,i,s,(a,l)=>{const u=o(a,l);si(n.eventQueue_,r._path,u)}),[]),stopListening:(r,s)=>{n.server_.unlisten(r,s)}})}function dF(n){const t=n.infoData_.getNode(new $e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Hb(n){return KL({timestamp:dF(n)})}function Kv(n,e,t,r,s){n.dataUpdateCount++;const i=new $e(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(r){const l=Nc(t,u=>xt(u));o=GL(n.serverSyncTree_,i,l,s)}else{const l=xt(t);o=WL(n.serverSyncTree_,i,l,s)}else if(r){const l=Nc(t,u=>xt(u));o=qL(n.serverSyncTree_,i,l)}else{const l=xt(t);o=nh(n.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=vg(n,i)),si(n.eventQueue_,a,o)}function $v(n,e){_g(n,"connected",e),e===!1&&gF(n)}function fF(n,e){yn(e,(t,r)=>{_g(n,t,r)})}function _g(n,e,t){const r=new $e("/.info/"+e),s=xt(t);n.infoData_.updateSnapshot(r,s);const i=nh(n.infoSyncTree_,r,s);si(n.eventQueue_,r,i)}function pF(n){return n.nextWriteId_++}function gF(n){Qb(n,"onDisconnectEvents");const e=Hb(n),t=ou();hf(n.onDisconnect_,Fe(),(s,i)=>{const o=HL(s,i,n.serverSyncTree_,e);Tb(t,s,o)});let r=[];hf(t,Fe(),(s,i)=>{r=r.concat(nh(n.serverSyncTree_,s,i));const o=vF(n,s);vg(n,o)}),n.onDisconnect_=ou(),si(n.eventQueue_,Fe(),r)}function mF(n){n.persistentConnection_&&n.persistentConnection_.interrupt(lF)}function Qb(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Dt(t,...e)}function Yb(n,e,t){return Lb(n.serverSyncTree_,e,t)||ke.EMPTY_NODE}function yg(n,e=n.transactionQueueTree_){if(e||ih(n,e),wo(e)){const t=Jb(n,e);J(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&_F(n,vl(e),t)}else Gb(e)&&sh(e,t=>{yg(n,t)})}function _F(n,e,t){const r=t.map(u=>u.currentWriteId),s=Yb(n,e,r);let i=s;const o=s.hash();for(let u=0;u<t.length;u++){const h=t[u];J(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=gn(e,h.path);i=i.updateChild(d,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;n.server_.put(l.toString(),a,u=>{Qb(n,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const d=[];for(let g=0;g<t.length;g++)t[g].status=2,h=h.concat(Ci(n.serverSyncTree_,t[g].currentWriteId)),t[g].onComplete&&d.push(()=>t[g].onComplete(null,!0,t[g].currentOutputSnapshotResolved)),t[g].unwatcher();ih(n,mg(n.transactionQueueTree_,e)),yg(n,n.transactionQueueTree_),si(n.eventQueue_,e,h);for(let g=0;g<d.length;g++)_l(d[g])}else{if(u==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{an("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=u}vg(n,e)}},o)}function vg(n,e){const t=Xb(n,e),r=vl(t),s=Jb(n,t);return yF(n,s,r),r}function yF(n,e,t){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=gn(t,l.path);let h=!1,d;if(J(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,s=s.concat(Ci(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cF)h=!0,d="maxretry",s=s.concat(Ci(n.serverSyncTree_,l.currentWriteId,!0));else{const g=Yb(n,l.path,o);l.currentInputSnapshot=g;const m=e[a].update(g.val());if(m!==void 0){zb("transaction failed: Data returned ",m,l.path);let w=xt(m);typeof m=="object"&&m!=null&&Er(m,".priority")||(w=w.updatePriority(g.getPriority()));const P=l.currentWriteId,j=Hb(n),k=QL(w,g,j);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=k,l.currentWriteId=pF(n),o.splice(o.indexOf(P),1),s=s.concat(jL(n.serverSyncTree_,l.path,k,l.currentWriteId,l.applyLocally)),s=s.concat(Ci(n.serverSyncTree_,P,!0))}else h=!0,d="nodata",s=s.concat(Ci(n.serverSyncTree_,l.currentWriteId,!0))}si(n.eventQueue_,t,s),s=[],h&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}ih(n,n.transactionQueueTree_);for(let a=0;a<r.length;a++)_l(r[a]);yg(n,n.transactionQueueTree_)}function Xb(n,e){let t,r=n.transactionQueueTree_;for(t=be(e);t!==null&&wo(r)===void 0;)r=mg(r,t),e=Ke(e),t=be(e);return r}function Jb(n,e){const t=[];return Zb(n,e,t),t.sort((r,s)=>r.order-s.order),t}function Zb(n,e,t){const r=wo(e);if(r)for(let s=0;s<r.length;s++)t.push(r[s]);sh(e,s=>{Zb(n,s,t)})}function ih(n,e){const t=wo(e);if(t){let r=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[r]=t[s],r++);t.length=r,Wb(e,t.length>0?t:void 0)}sh(e,r=>{ih(n,r)})}function vF(n,e){const t=vl(Xb(n,e)),r=mg(n.transactionQueueTree_,e);return XL(r,s=>{rd(n,s)}),rd(n,r),Kb(r,s=>{rd(n,s)}),t}function rd(n,e){const t=wo(e);if(t){const r=[];let s=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(J(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(J(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Ci(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&r.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Wb(e,void 0):t.length=i+1,si(n.eventQueue_,vl(e),s);for(let o=0;o<r.length;o++)_l(r[o])}}/**
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
 */function IF(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let s=t[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function EF(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):an(`Invalid query segment '${t}' in query '${n}'`)}return e}const zv=function(n,e){const t=TF(n),r=t.namespace;t.domain==="firebase.com"&&yr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&yr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||JV();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new rb(t.host,t.secure,r,s,e,"",r!==t.subdomain),path:new $e(t.pathString)}},TF=function(n){let e="",t="",r="",s="",i="",o=!0,a="https",l=443;if(typeof n=="string"){let u=n.indexOf("//");u>=0&&(a=n.substring(0,u-1),n=n.substring(u+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(s=IF(n.substring(h,d)));const g=EF(n.substring(Math.min(n.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")t="localhost";else if(m.split(".").length<=2)t=m;else{const w=e.indexOf(".");r=e.substring(0,w).toLowerCase(),t=e.substring(w+1),i=r}"ns"in g&&(i=g.ns)}return{host:e,port:l,domain:t,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */class Ig{constructor(e,t,r,s){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=s}get key(){return we(this._path)?null:db(this._path)}get ref(){return new Ao(this._repo,this._path)}get _queryIdentifier(){const e=xv(this._queryParams),t=eg(e);return t==="{}"?"default":t}get _queryObject(){return xv(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof Ig))return!1;const t=this._repo===e._repo,r=gb(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+OM(this._path)}}class Ao extends Ig{constructor(e,t){super(e,t,new og,!1)}get parent(){const e=pb(this._path);return e===null?null:new Ao(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}UL(Ao);BL(Ao);/**
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
 */const wF="FIREBASE_DATABASE_EMULATOR_HOST",vf={};let AF=!1;function bF(n,e,t,r){const s=e.lastIndexOf(":"),i=e.substring(0,s),o=as(i);n.repoInfo_=new rb(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function SF(n,e,t,r,s){let i=r||n.options.databaseURL;i===void 0&&(n.options.projectId||yr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Dt("Using default host for project ",n.options.projectId),i=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=zv(i,s),a=o.repoInfo,l;typeof process<"u"&&fv&&(l=fv[wF]),l?(i=`http://${l}?ns=${a.namespace}`,o=zv(i,s),a=o.repoInfo):o.repoInfo.secure;const u=new lM(n.name,n.options,e);rF("Invalid Firebase Database URL",o),we(o.path)||yr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=CF(a,n,u,new aM(n,t));return new PF(h,n)}function RF(n,e){const t=vf[e];(!t||t[n.key]!==n)&&yr(`Database ${e}(${n.repoInfo_}) has already been deleted.`),mF(n),delete t[n.key]}function CF(n,e,t,r){let s=vf[e.name];s||(s={},vf[e.name]=s);let i=s[n.toURLString()];return i&&yr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new uF(n,AF,t,r),s[n.toURLString()]=i,i}class PF{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ao(this._repo,Fe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RF(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yr("Cannot call "+e+" on a deleted database.")}}function NF(n=qE(),e){const t=Pu(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=OP("database");r&&DF(t,...r)}return t}function DF(n,e,t,r={}){n=ut(n),n._checkNotDeleted("useEmulator");const s=`${e}:${t}`,i=n._repoInternal;if(n._instanceStarted){if(s===n._repoInternal.repoInfo_.host&&Jr(r,i.repoInfo_.emulatorOptions))return;yr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&yr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new _c(_c.OWNER);else if(r.mockUserToken){const a=typeof r.mockUserToken=="string"?r.mockUserToken:VP(r.mockUserToken,n.app.options.projectId);o=new _c(a)}as(e)&&(Gf(e),xE("Database",!0)),bF(i,s,r,o)}/**
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
 */function xF(n){$V(ei),qs(new Zr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return SF(r,s,i,t)},"PUBLIC").setMultipleInstances(!0)),jn(pv,gv,n),jn(pv,gv,"esm2017")}ur.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ur.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};xF();const eS={apiKey:"AIzaSyBY0MWs5sjqaXBrJzYIQl7Bs_u161G_XHM",authDomain:"remodel-d9545.firebaseapp.com",projectId:"remodel-d9545",storageBucket:"remodel-d9545.firebasestorage.app",messagingSenderId:"731380854038",appId:"1:731380854038:web:7214863d550f80673f7437",databaseURL:"https://remodel-d9545-default-rtdb.asia-southeast1.firebasedatabase.app"},Eg=jE(eS),sd=ck(Eg),tS=AV(Eg,{localCache:jV({tabManager:KV()})});NF(Eg,eS.databaseURL);const nS="diagrams",r2=n=>TV(tS,"users",n,nS),s2=(n,e)=>wV(tS,"users",n,nS,e),rS=f0("auth",()=>{const n=vc(null),e=vc(!0);let t=null;function r(){t||(t=XD(sd,o=>{if(n.value=o,e.value=!1,o)try{localStorage.setItem("er_session",JSON.stringify({uid:o.uid,displayName:o.displayName,email:o.email,photoURL:o.photoURL}))}catch{}else localStorage.removeItem("er_session")}))}async function s(){return(await yx(sd,new sr)).user}async function i(){await JD(sd),n.value=null}return{user:n,loading:e,init:r,loginWithGoogle:s,logout:i}}),kF=[{path:"/",redirect:"/home"},{path:"/login",component:()=>Dh(()=>import("./LoginView-BlKwD8jE.js"),__vite__mapDeps([0,1])),meta:{public:!0}},{path:"/home",component:()=>Dh(()=>import("./HomeView-Czmv2tRL.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!0}},{path:"/editor",component:()=>Dh(()=>import("./EditorView-Cplh6_B2.js"),[]),meta:{requiresAuth:!0}}],sS=bP({history:rP(),routes:kF});sS.beforeEach(n=>{const e=rS();if(n.meta.requiresAuth&&!e.user&&!e.loading)return"/login";if(n.path==="/login"&&e.user)return"/home"});const Tg=s0(_0),OF=a0();Tg.use(OF);Tg.use(sS);const VF=rS();VF.init();Tg.mount("#app");export{oa as A,MF as B,qF as C,Vs as D,Af as E,er as F,FF as G,eE as H,WF as I,wf as J,IC as K,LF as L,GF as M,$F as N,Oe as T,p0 as _,nE as a,BF as b,UF as c,jF as d,KF as e,f0 as f,YF as g,r2 as h,e2 as i,dn as j,TV as k,wV as l,JF as m,s2 as n,JI as o,ZF as p,QF as q,vc as r,XF as s,US as t,rS as u,tS as v,n2 as w,t2 as x,kR as y,VI as z};
