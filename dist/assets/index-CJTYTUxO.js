(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function Pu(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ot={},gr=[],yi=()=>{},kd=()=>!1,Ja=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Du=n=>n.startsWith("onUpdate:"),sn=Object.assign,Iu=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},$m=Object.prototype.hasOwnProperty,wt=(n,e)=>$m.call(n,e),Qe=Array.isArray,_r=n=>To(n)==="[object Map]",Vd=n=>To(n)==="[object Set]",Ef=n=>To(n)==="[object Date]",ct=n=>typeof n=="function",qt=n=>typeof n=="string",bi=n=>typeof n=="symbol",At=n=>n!==null&&typeof n=="object",Hd=n=>(At(n)||ct(n))&&ct(n.then)&&ct(n.catch),Gd=Object.prototype.toString,To=n=>Gd.call(n),Zm=n=>To(n).slice(8,-1),Wd=n=>To(n)==="[object Object]",Lu=n=>qt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,eo=Pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qa=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Km=/-\w/g,ps=Qa(n=>n.replace(Km,e=>e.slice(1).toUpperCase())),Jm=/\B([A-Z])/g,Ws=Qa(n=>n.replace(Jm,"-$1").toLowerCase()),Xd=Qa(n=>n.charAt(0).toUpperCase()+n.slice(1)),yl=Qa(n=>n?`on${Xd(n)}`:""),ds=(n,e)=>!Object.is(n,e),Ml=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Yd=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Qm=n=>{const e=parseFloat(n);return isNaN(e)?n:e},eg=n=>{const e=qt(n)?Number(n):NaN;return isNaN(e)?n:e};let Tf;const el=()=>Tf||(Tf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tl(n){if(Qe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=qt(i)?sg(i):tl(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(qt(n)||At(n))return n}const tg=/;(?![^(]*\))/g,ng=/:([^]+)/,ig=/\/\*[^]*?\*\//g;function sg(n){const e={};return n.replace(ig,"").split(tg).forEach(t=>{if(t){const i=t.split(ng);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function vn(n){let e="";if(qt(n))e=n;else if(Qe(n))for(let t=0;t<n.length;t++){const i=vn(n[t]);i&&(e+=i+" ")}else if(At(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const rg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",og=Pu(rg);function qd(n){return!!n||n===""}function ag(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Nu(n[i],e[i]);return t}function Nu(n,e){if(n===e)return!0;let t=Ef(n),i=Ef(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=bi(n),i=bi(e),t||i)return n===e;if(t=Qe(n),i=Qe(e),t||i)return t&&i?ag(n,e):!1;if(t=At(n),i=At(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Nu(n[o],e[o]))return!1}}return String(n)===String(e)}const jd=n=>!!(n&&n.__v_isRef===!0),yn=n=>qt(n)?n:n==null?"":Qe(n)||At(n)&&(n.toString===Gd||!ct(n.toString))?jd(n)?yn(n.value):JSON.stringify(n,$d,2):String(n),$d=(n,e)=>jd(e)?$d(n,e.value):_r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Sl(i,r)+" =>"]=s,t),{})}:Vd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Sl(t))}:bi(e)?Sl(e):At(e)&&!Qe(e)&&!Wd(e)?String(e):e,Sl=(n,e="")=>{var t;return bi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Rn;class lg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=Rn,!e&&Rn&&(this.index=(Rn.scopes||(Rn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Rn;try{return Rn=this,e()}finally{Rn=t}}}on(){++this._on===1&&(this.prevScope=Rn,Rn=this)}off(){this._on>0&&--this._on===0&&(Rn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cg(){return Rn}let Ft;const bl=new WeakSet;class Zd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rn&&Rn.active&&Rn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bl.has(this)&&(bl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,wf(this),Qd(this);const e=Ft,t=ti;Ft=this,ti=!0;try{return this.fn()}finally{ep(this),Ft=e,ti=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ou(e);this.deps=this.depsTail=void 0,wf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){xc(this)&&this.run()}get dirty(){return xc(this)}}let Kd=0,to,no;function Jd(n,e=!1){if(n.flags|=8,e){n.next=no,no=n;return}n.next=to,to=n}function Uu(){Kd++}function Fu(){if(--Kd>0)return;if(no){let e=no;for(no=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;to;){let e=to;for(to=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Qd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ep(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Ou(i),ug(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function xc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(tp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function tp(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===co)||(n.globalVersion=co,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!xc(n))))return;n.flags|=2;const e=n.dep,t=Ft,i=ti;Ft=n,ti=!0;try{Qd(n);const s=n.fn(n._value);(e.version===0||ds(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ft=t,ti=i,ep(n),n.flags&=-3}}function Ou(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Ou(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ug(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let ti=!0;const np=[];function Hi(){np.push(ti),ti=!1}function Gi(){const n=np.pop();ti=n===void 0?!0:n}function wf(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ft;Ft=void 0;try{e()}finally{Ft=t}}}let co=0;class fg{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!ti||Ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ft)t=this.activeLink=new fg(Ft,this),Ft.deps?(t.prevDep=Ft.depsTail,Ft.depsTail.nextDep=t,Ft.depsTail=t):Ft.deps=Ft.depsTail=t,ip(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Ft.depsTail,t.nextDep=void 0,Ft.depsTail.nextDep=t,Ft.depsTail=t,Ft.deps===t&&(Ft.deps=i)}return t}trigger(e){this.version++,co++,this.notify(e)}notify(e){Uu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Fu()}}}function ip(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ip(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const vc=new WeakMap,Bs=Symbol(""),yc=Symbol(""),uo=Symbol("");function fn(n,e,t){if(ti&&Ft){let i=vc.get(n);i||vc.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new Bu),s.map=i,s.key=t),s.track()}}function Oi(n,e,t,i,s,r){const o=vc.get(n);if(!o){co++;return}const a=l=>{l&&l.trigger()};if(Uu(),e==="clear")o.forEach(a);else{const l=Qe(n),c=l&&Lu(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===uo||!bi(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(uo)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Bs)),_r(n)&&a(o.get(yc)));break;case"delete":l||(a(o.get(Bs)),_r(n)&&a(o.get(yc)));break;case"set":_r(n)&&a(o.get(Bs));break}}Fu()}function $s(n){const e=Et(n);return e===n?e:(fn(e,"iterate",uo),Xn(n)?e:e.map(ii))}function nl(n){return fn(n=Et(n),"iterate",uo),n}function os(n,e){return Wi(n)?Sr(zs(n)?ii(e):e):ii(e)}const hg={__proto__:null,[Symbol.iterator](){return El(this,Symbol.iterator,n=>os(this,n))},concat(...n){return $s(this).concat(...n.map(e=>Qe(e)?$s(e):e))},entries(){return El(this,"entries",n=>(n[1]=os(this,n[1]),n))},every(n,e){return wi(this,"every",n,e,void 0,arguments)},filter(n,e){return wi(this,"filter",n,e,t=>t.map(i=>os(this,i)),arguments)},find(n,e){return wi(this,"find",n,e,t=>os(this,t),arguments)},findIndex(n,e){return wi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return wi(this,"findLast",n,e,t=>os(this,t),arguments)},findLastIndex(n,e){return wi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return wi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Tl(this,"includes",n)},indexOf(...n){return Tl(this,"indexOf",n)},join(n){return $s(this).join(n)},lastIndexOf(...n){return Tl(this,"lastIndexOf",n)},map(n,e){return wi(this,"map",n,e,void 0,arguments)},pop(){return Br(this,"pop")},push(...n){return Br(this,"push",n)},reduce(n,...e){return Af(this,"reduce",n,e)},reduceRight(n,...e){return Af(this,"reduceRight",n,e)},shift(){return Br(this,"shift")},some(n,e){return wi(this,"some",n,e,void 0,arguments)},splice(...n){return Br(this,"splice",n)},toReversed(){return $s(this).toReversed()},toSorted(n){return $s(this).toSorted(n)},toSpliced(...n){return $s(this).toSpliced(...n)},unshift(...n){return Br(this,"unshift",n)},values(){return El(this,"values",n=>os(this,n))}};function El(n,e,t){const i=nl(n),s=i[e]();return i!==n&&!Xn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=t(r.value)),r}),s}const dg=Array.prototype;function wi(n,e,t,i,s,r){const o=nl(n),a=o!==n&&!Xn(n),l=o[e];if(l!==dg[e]){const f=l.apply(n,r);return a?ii(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,os(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Af(n,e,t,i){const s=nl(n);let r=t;return s!==n&&(Xn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,os(n,a),l,n)}),s[e](r,...i)}function Tl(n,e,t){const i=Et(n);fn(i,"iterate",uo);const s=i[e](...t);return(s===-1||s===!1)&&Hu(t[0])?(t[0]=Et(t[0]),i[e](...t)):s}function Br(n,e,t=[]){Hi(),Uu();const i=Et(n)[e].apply(n,t);return Fu(),Gi(),i}const pg=Pu("__proto__,__v_isRef,__isVue"),sp=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bi));function mg(n){bi(n)||(n=String(n));const e=Et(this);return fn(e,"has",n),e.hasOwnProperty(n)}class rp{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?Tg:cp:r?lp:ap).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Qe(e);if(!s){let l;if(o&&(l=hg[t]))return l;if(t==="hasOwnProperty")return mg}const a=Reflect.get(e,t,dn(e)?e:i);if((bi(t)?sp.has(t):pg(t))||(s||fn(e,"get",t),r))return a;if(dn(a)){const l=o&&Lu(t)?a:a.value;return s&&At(l)?Sc(l):l}return At(a)?s?Sc(a):ku(a):a}}class op extends rp{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=Qe(e)&&Lu(t);if(!this._isShallow){const c=Wi(r);if(!Xn(i)&&!Wi(i)&&(r=Et(r),i=Et(i)),!o&&dn(r)&&!dn(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:wt(e,t),l=Reflect.set(e,t,i,dn(e)?e:s);return e===Et(s)&&(a?ds(i,r)&&Oi(e,"set",t,i):Oi(e,"add",t,i)),l}deleteProperty(e,t){const i=wt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Oi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!bi(t)||!sp.has(t))&&fn(e,"has",t),i}ownKeys(e){return fn(e,"iterate",Qe(e)?"length":Bs),Reflect.ownKeys(e)}}class gg extends rp{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _g=new op,xg=new gg,vg=new op(!0);const Mc=n=>n,Bo=n=>Reflect.getPrototypeOf(n);function yg(n,e,t){return function(...i){const s=this.__v_raw,r=Et(s),o=_r(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Mc:e?Sr:ii;return!e&&fn(r,"iterate",l?yc:Bs),sn(Object.create(c),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}}})}}function zo(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Mg(n,e){const t={get(s){const r=this.__v_raw,o=Et(r),a=Et(s);n||(ds(s,a)&&fn(o,"get",s),fn(o,"get",a));const{has:l}=Bo(o),c=e?Mc:n?Sr:ii;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&fn(Et(s),"iterate",Bs),s.size},has(s){const r=this.__v_raw,o=Et(r),a=Et(s);return n||(ds(s,a)&&fn(o,"has",s),fn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Et(a),c=e?Mc:n?Sr:ii;return!n&&fn(l,"iterate",Bs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return sn(t,n?{add:zo("add"),set:zo("set"),delete:zo("delete"),clear:zo("clear")}:{add(s){!e&&!Xn(s)&&!Wi(s)&&(s=Et(s));const r=Et(this);return Bo(r).has.call(r,s)||(r.add(s),Oi(r,"add",s,s)),this},set(s,r){!e&&!Xn(r)&&!Wi(r)&&(r=Et(r));const o=Et(this),{has:a,get:l}=Bo(o);let c=a.call(o,s);c||(s=Et(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ds(r,u)&&Oi(o,"set",s,r):Oi(o,"add",s,r),this},delete(s){const r=Et(this),{has:o,get:a}=Bo(r);let l=o.call(r,s);l||(s=Et(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Oi(r,"delete",s,void 0),c},clear(){const s=Et(this),r=s.size!==0,o=s.clear();return r&&Oi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=yg(s,n,e)}),t}function zu(n,e){const t=Mg(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(wt(t,s)&&s in i?t:i,s,r)}const Sg={get:zu(!1,!1)},bg={get:zu(!1,!0)},Eg={get:zu(!0,!1)};const ap=new WeakMap,lp=new WeakMap,cp=new WeakMap,Tg=new WeakMap;function wg(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ag(n){return n.__v_skip||!Object.isExtensible(n)?0:wg(Zm(n))}function ku(n){return Wi(n)?n:Vu(n,!1,_g,Sg,ap)}function Cg(n){return Vu(n,!1,vg,bg,lp)}function Sc(n){return Vu(n,!0,xg,Eg,cp)}function Vu(n,e,t,i,s){if(!At(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=Ag(n);if(r===0)return n;const o=s.get(n);if(o)return o;const a=new Proxy(n,r===2?i:t);return s.set(n,a),a}function zs(n){return Wi(n)?zs(n.__v_raw):!!(n&&n.__v_isReactive)}function Wi(n){return!!(n&&n.__v_isReadonly)}function Xn(n){return!!(n&&n.__v_isShallow)}function Hu(n){return n?!!n.__v_raw:!1}function Et(n){const e=n&&n.__v_raw;return e?Et(e):n}function Rg(n){return!wt(n,"__v_skip")&&Object.isExtensible(n)&&Yd(n,"__v_skip",!0),n}const ii=n=>At(n)?ku(n):n,Sr=n=>At(n)?Sc(n):n;function dn(n){return n?n.__v_isRef===!0:!1}function bt(n){return Pg(n,!1)}function Pg(n,e){return dn(n)?n:new Dg(n,e)}class Dg{constructor(e,t){this.dep=new Bu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Et(e),this._value=t?e:ii(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Xn(e)||Wi(e);e=i?e:Et(e),ds(e,t)&&(this._rawValue=e,this._value=i?e:ii(e),this.dep.trigger())}}function Ma(n){return dn(n)?n.value:n}const Ig={get:(n,e,t)=>e==="__v_raw"?n:Ma(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return dn(s)&&!dn(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function up(n){return zs(n)?n:new Proxy(n,Ig)}class Lg{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Bu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=co-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return Jd(this,!0),!0}get value(){const e=this.dep.track();return tp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ng(n,e,t=!1){let i,s;return ct(n)?i=n:(i=n.get,s=n.set),new Lg(i,s,t)}const ko={},Ia=new WeakMap;let Ds;function Ug(n,e=!1,t=Ds){if(t){let i=Ia.get(t);i||Ia.set(t,i=[]),i.push(n)}}function Fg(n,e,t=Ot){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=S=>s?S:Xn(S)||s===!1||s===0?ls(S,1):ls(S);let u,f,h,d,p=!1,v=!1;if(dn(n)?(f=()=>n.value,p=Xn(n)):zs(n)?(f=()=>c(n),p=!0):Qe(n)?(v=!0,p=n.some(S=>zs(S)||Xn(S)),f=()=>n.map(S=>{if(dn(S))return S.value;if(zs(S))return c(S);if(ct(S))return l?l(S,2):S()})):ct(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Hi();try{h()}finally{Gi()}}const S=Ds;Ds=u;try{return l?l(n,3,[d]):n(d)}finally{Ds=S}}:f=yi,e&&s){const S=f,w=s===!0?1/0:s;f=()=>ls(S(),w)}const g=cg(),m=()=>{u.stop(),g&&g.active&&Iu(g.effects,u)};if(r&&e){const S=e;e=(...w)=>{S(...w),m()}}let x=v?new Array(n.length).fill(ko):ko;const M=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const w=u.run();if(s||p||(v?w.some((P,L)=>ds(P,x[L])):ds(w,x))){h&&h();const P=Ds;Ds=u;try{const L=[w,x===ko?void 0:v&&x[0]===ko?[]:x,d];x=w,l?l(e,3,L):e(...L)}finally{Ds=P}}}else u.run()};return a&&a(M),u=new Zd(f),u.scheduler=o?()=>o(M,!1):M,d=S=>Ug(S,!1,u),h=u.onStop=()=>{const S=Ia.get(u);if(S){if(l)l(S,4);else for(const w of S)w();Ia.delete(u)}},e?i?M(!0):x=u.run():o?o(M.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function ls(n,e=1/0,t){if(e<=0||!At(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,dn(n))ls(n.value,e,t);else if(Qe(n))for(let i=0;i<n.length;i++)ls(n[i],e,t);else if(Vd(n)||_r(n))n.forEach(i=>{ls(i,e,t)});else if(Wd(n)){for(const i in n)ls(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ls(n[i],e,t)}return n}function wo(n,e,t,i){try{return i?n(...i):n()}catch(s){il(s,e,t)}}function si(n,e,t,i){if(ct(n)){const s=wo(n,e,t,i);return s&&Hd(s)&&s.catch(r=>{il(r,e,t)}),s}if(Qe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(si(n[r],e,t,i));return s}}function il(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ot;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Hi(),wo(r,null,10,[n,l,c]),Gi();return}}Og(n,t,s,i,o)}function Og(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Sn=[];let pi=-1;const xr=[];let as=null,pr=0;const fp=Promise.resolve();let La=null;function hp(n){const e=La||fp;return n?e.then(this?n.bind(this):n):e}function Bg(n){let e=pi+1,t=Sn.length;for(;e<t;){const i=e+t>>>1,s=Sn[i],r=fo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function Gu(n){if(!(n.flags&1)){const e=fo(n),t=Sn[Sn.length-1];!t||!(n.flags&2)&&e>=fo(t)?Sn.push(n):Sn.splice(Bg(e),0,n),n.flags|=1,dp()}}function dp(){La||(La=fp.then(mp))}function zg(n){Qe(n)?xr.push(...n):as&&n.id===-1?as.splice(pr+1,0,n):n.flags&1||(xr.push(n),n.flags|=1),dp()}function Cf(n,e,t=pi+1){for(;t<Sn.length;t++){const i=Sn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Sn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function pp(n){if(xr.length){const e=[...new Set(xr)].sort((t,i)=>fo(t)-fo(i));if(xr.length=0,as){as.push(...e);return}for(as=e,pr=0;pr<as.length;pr++){const t=as[pr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}as=null,pr=0}}const fo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function mp(n){try{for(pi=0;pi<Sn.length;pi++){const e=Sn[pi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),wo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pi<Sn.length;pi++){const e=Sn[pi];e&&(e.flags&=-2)}pi=-1,Sn.length=0,pp(),La=null,(Sn.length||xr.length)&&mp()}}let xi=null,gp=null;function Na(n){const e=xi;return xi=n,gp=n&&n.type.__scopeId||null,e}function _p(n,e=xi,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Oa(-1);const r=Na(e);let o;try{o=n(...s)}finally{Na(r),i._d&&Oa(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ys(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Hi(),si(l,t,8,[n.el,a,n,e]),Gi())}}function kg(n,e){if(En){let t=En.provides;const i=En.parent&&En.parent.provides;i===t&&(t=En.provides=Object.create(i)),t[n]=e}}function Sa(n,e,t=!1){const i=$p();if(i||vr){let s=vr?vr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ct(e)?e.call(i&&i.proxy):e}}const Vg=Symbol.for("v-scx"),Hg=()=>Sa(Vg);function xn(n,e,t){return xp(n,e,t)}function xp(n,e,t=Ot){const{immediate:i,deep:s,flush:r,once:o}=t,a=sn({},t),l=e&&i||!e&&r!=="post";let c;if(mo){if(r==="sync"){const d=Hg();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=yi,d.resume=yi,d.pause=yi,d}}const u=En;a.call=(d,p,v)=>si(d,u,p,v);let f=!1;r==="post"?a.scheduler=d=>{Cn(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,p)=>{p?d():Gu(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Fg(n,e,a);return mo&&(c?c.push(h):l&&h()),h}function Gg(n,e,t){const i=this.proxy,s=qt(n)?n.includes(".")?vp(i,n):()=>i[n]:n.bind(i,i);let r;ct(e)?r=e:(r=e.handler,t=e);const o=Ao(this),a=xp(s,r.bind(i),t);return o(),a}function vp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Wg=Symbol("_vte"),yp=n=>n.__isTeleport,mi=Symbol("_leaveCb"),zr=Symbol("_enterCb");function Xg(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ol(()=>{n.isMounted=!0}),Cp(()=>{n.isUnmounting=!0}),n}const kn=[Function,Array],Mp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kn,onEnter:kn,onAfterEnter:kn,onEnterCancelled:kn,onBeforeLeave:kn,onLeave:kn,onAfterLeave:kn,onLeaveCancelled:kn,onBeforeAppear:kn,onAppear:kn,onAfterAppear:kn,onAppearCancelled:kn},Sp=n=>{const e=n.subTree;return e.component?Sp(e.component):e},Yg={name:"BaseTransition",props:Mp,setup(n,{slots:e}){const t=$p(),i=Xg();return()=>{const s=e.default&&Tp(e.default(),!0);if(!s||!s.length)return;const r=bp(s),o=Et(n),{mode:a}=o;if(i.isLeaving)return wl(r);const l=Rf(r);if(!l)return wl(r);let c=bc(l,o,i,t,f=>c=f);l.type!==bn&&ho(l,c);let u=t.subTree&&Rf(t.subTree);if(u&&u.type!==bn&&!Is(u,l)&&Sp(t).type!==bn){let f=bc(u,o,i,t);if(ho(u,f),a==="out-in"&&l.type!==bn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},wl(r);a==="in-out"&&l.type!==bn?f.delayLeave=(h,d,p)=>{const v=Ep(i,u);v[String(u.key)]=u,h[mi]=()=>{d(),h[mi]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{p(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function bp(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==bn){e=t;break}}return e}const qg=Yg;function Ep(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function bc(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:v,onBeforeAppear:g,onAppear:m,onAfterAppear:x,onAppearCancelled:M}=e,S=String(n.key),w=Ep(t,n),P=(b,W)=>{b&&si(b,i,9,W)},L=(b,W)=>{const D=W[1];P(b,W),Qe(b)?b.every(F=>F.length<=1)&&D():b.length<=1&&D()},y={mode:o,persisted:a,beforeEnter(b){let W=l;if(!t.isMounted)if(r)W=g||l;else return;b[mi]&&b[mi](!0);const D=w[S];D&&Is(n,D)&&D.el[mi]&&D.el[mi](),P(W,[b])},enter(b){if(w[S]===n)return;let W=c,D=u,F=f;if(!t.isMounted)if(r)W=m||c,D=x||u,F=M||f;else return;let z=!1;b[zr]=j=>{z||(z=!0,j?P(F,[b]):P(D,[b]),y.delayedLeave&&y.delayedLeave(),b[zr]=void 0)};const V=b[zr].bind(null,!1);W?L(W,[b,V]):V()},leave(b,W){const D=String(n.key);if(b[zr]&&b[zr](!0),t.isUnmounting)return W();P(h,[b]);let F=!1;b[mi]=V=>{F||(F=!0,W(),V?P(v,[b]):P(p,[b]),b[mi]=void 0,w[D]===n&&delete w[D])};const z=b[mi].bind(null,!1);w[D]=n,d?L(d,[b,z]):z()},clone(b){const W=bc(b,e,t,i,s);return s&&s(W),W}};return y}function wl(n){if(sl(n))return n=ms(n),n.children=null,n}function Rf(n){if(!sl(n))return yp(n.type)&&n.children?bp(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ct(t.default))return t.default()}}function ho(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ho(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Tp(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Nn?(o.patchFlag&128&&s++,i=i.concat(Tp(o.children,e,a))):(e||o.type!==bn)&&i.push(a!=null?ms(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}function wp(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Pf(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Ua=new WeakMap;function io(n,e,t,i,s=!1){if(Qe(n)){n.forEach((v,g)=>io(v,e&&(Qe(e)?e[g]:e),t,i,s));return}if(so(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&io(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?qu(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ot?a.refs={}:a.refs,f=a.setupState,h=Et(f),d=f===Ot?kd:v=>Pf(u,v)?!1:wt(h,v),p=(v,g)=>!(g&&Pf(u,g));if(c!=null&&c!==l){if(Df(e),qt(c))u[c]=null,d(c)&&(f[c]=null);else if(dn(c)){const v=e;p(c,v.k)&&(c.value=null),v.k&&(u[v.k]=null)}}if(ct(l))wo(l,a,12,[o,u]);else{const v=qt(l),g=dn(l);if(v||g){const m=()=>{if(n.f){const x=v?d(l)?f[l]:u[l]:p()||!n.k?l.value:u[n.k];if(s)Qe(x)&&Iu(x,r);else if(Qe(x))x.includes(r)||x.push(r);else if(v)u[l]=[r],d(l)&&(f[l]=u[l]);else{const M=[r];p(l,n.k)&&(l.value=M),n.k&&(u[n.k]=M)}}else v?(u[l]=o,d(l)&&(f[l]=o)):g&&(p(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const x=()=>{m(),Ua.delete(n)};x.id=-1,Ua.set(n,x),Cn(x,t)}else Df(n),m()}}}function Df(n){const e=Ua.get(n);e&&(e.flags|=8,Ua.delete(n))}el().requestIdleCallback;el().cancelIdleCallback;const so=n=>!!n.type.__asyncLoader,sl=n=>n.type.__isKeepAlive;function jg(n,e){Ap(n,"a",e)}function $g(n,e){Ap(n,"da",e)}function Ap(n,e,t=En){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(rl(e,i,t),t){let s=t.parent;for(;s&&s.parent;)sl(s.parent.vnode)&&Zg(i,e,t,s),s=s.parent}}function Zg(n,e,t,i){const s=rl(e,n,i,!0);al(()=>{Iu(i[e],s)},t)}function rl(n,e,t=En,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Hi();const a=Ao(t),l=si(e,t,n,o);return a(),Gi(),l});return i?s.unshift(r):s.push(r),r}}const qi=n=>(e,t=En)=>{(!mo||n==="sp")&&rl(n,(...i)=>e(...i),t)},Kg=qi("bm"),ol=qi("m"),Jg=qi("bu"),Qg=qi("u"),Cp=qi("bum"),al=qi("um"),e_=qi("sp"),t_=qi("rtg"),n_=qi("rtc");function i_(n,e=En){rl("ec",n,e)}const s_=Symbol.for("v-ndc");function Ec(n,e,t,i){let s;const r=t,o=Qe(n);if(o||qt(n)){const a=o&&zs(n);let l=!1,c=!1;a&&(l=!Xn(n),c=Wi(n),n=nl(n)),s=new Array(n.length);for(let u=0,f=n.length;u<f;u++)s[u]=e(l?c?Sr(ii(n[u])):ii(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(At(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Tc=n=>n?Zp(n)?qu(n):Tc(n.parent):null,ro=sn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Tc(n.parent),$root:n=>Tc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Pp(n),$forceUpdate:n=>n.f||(n.f=()=>{Gu(n.update)}),$nextTick:n=>n.n||(n.n=hp.bind(n.proxy)),$watch:n=>Gg.bind(n)}),Al=(n,e)=>n!==Ot&&!n.__isScriptSetup&&wt(n,e),r_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Al(i,e))return o[e]=1,i[e];if(s!==Ot&&wt(s,e))return o[e]=2,s[e];if(wt(r,e))return o[e]=3,r[e];if(t!==Ot&&wt(t,e))return o[e]=4,t[e];wc&&(o[e]=0)}}const c=ro[e];let u,f;if(c)return e==="$attrs"&&fn(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==Ot&&wt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,wt(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Al(s,e)?(s[e]=t,!0):i!==Ot&&wt(i,e)?(i[e]=t,!0):wt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==Ot&&a[0]!=="$"&&wt(n,a)||Al(e,a)||wt(r,a)||wt(i,a)||wt(ro,a)||wt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:wt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function If(n){return Qe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let wc=!0;function o_(n){const e=Pp(n),t=n.proxy,i=n.ctx;wc=!1,e.beforeCreate&&Lf(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:p,activated:v,deactivated:g,beforeDestroy:m,beforeUnmount:x,destroyed:M,unmounted:S,render:w,renderTracked:P,renderTriggered:L,errorCaptured:y,serverPrefetch:b,expose:W,inheritAttrs:D,components:F,directives:z,filters:V}=e;if(c&&a_(c,i,null),o)for(const k in o){const ne=o[k];ct(ne)&&(i[k]=ne.bind(t))}if(s){const k=s.call(t,t);At(k)&&(n.data=ku(k))}if(wc=!0,r)for(const k in r){const ne=r[k],oe=ct(ne)?ne.bind(t,t):ct(ne.get)?ne.get.bind(t,t):yi,we=!ct(ne)&&ct(ne.set)?ne.set.bind(t):yi,Ae=cs({get:oe,set:we});Object.defineProperty(i,k,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:de=>Ae.value=de})}if(a)for(const k in a)Rp(a[k],i,t,k);if(l){const k=ct(l)?l.call(t):l;Reflect.ownKeys(k).forEach(ne=>{kg(ne,k[ne])})}u&&Lf(u,n,"c");function H(k,ne){Qe(ne)?ne.forEach(oe=>k(oe.bind(t))):ne&&k(ne.bind(t))}if(H(Kg,f),H(ol,h),H(Jg,d),H(Qg,p),H(jg,v),H($g,g),H(i_,y),H(n_,P),H(t_,L),H(Cp,x),H(al,S),H(e_,b),Qe(W))if(W.length){const k=n.exposed||(n.exposed={});W.forEach(ne=>{Object.defineProperty(k,ne,{get:()=>t[ne],set:oe=>t[ne]=oe,enumerable:!0})})}else n.exposed||(n.exposed={});w&&n.render===yi&&(n.render=w),D!=null&&(n.inheritAttrs=D),F&&(n.components=F),z&&(n.directives=z),b&&wp(n)}function a_(n,e,t=yi){Qe(n)&&(n=Ac(n));for(const i in n){const s=n[i];let r;At(s)?"default"in s?r=Sa(s.from||i,s.default,!0):r=Sa(s.from||i):r=Sa(s),dn(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Lf(n,e,t){si(Qe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Rp(n,e,t,i){let s=i.includes(".")?vp(t,i):()=>t[i];if(qt(n)){const r=e[n];ct(r)&&xn(s,r)}else if(ct(n))xn(s,n.bind(t));else if(At(n))if(Qe(n))n.forEach(r=>Rp(r,e,t,i));else{const r=ct(n.handler)?n.handler.bind(t):e[n.handler];ct(r)&&xn(s,r,n)}}function Pp(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Fa(l,c,o,!0)),Fa(l,e,o)),At(e)&&r.set(e,l),l}function Fa(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Fa(n,r,t,!0),s&&s.forEach(o=>Fa(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=l_[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const l_={data:Nf,props:Uf,emits:Uf,methods:Zr,computed:Zr,beforeCreate:gn,created:gn,beforeMount:gn,mounted:gn,beforeUpdate:gn,updated:gn,beforeDestroy:gn,beforeUnmount:gn,destroyed:gn,unmounted:gn,activated:gn,deactivated:gn,errorCaptured:gn,serverPrefetch:gn,components:Zr,directives:Zr,watch:u_,provide:Nf,inject:c_};function Nf(n,e){return e?n?function(){return sn(ct(n)?n.call(this,this):n,ct(e)?e.call(this,this):e)}:e:n}function c_(n,e){return Zr(Ac(n),Ac(e))}function Ac(n){if(Qe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function gn(n,e){return n?[...new Set([].concat(n,e))]:e}function Zr(n,e){return n?sn(Object.create(null),n,e):e}function Uf(n,e){return n?Qe(n)&&Qe(e)?[...new Set([...n,...e])]:sn(Object.create(null),If(n),If(e??{})):e}function u_(n,e){if(!n)return e;if(!e)return n;const t=sn(Object.create(null),n);for(const i in e)t[i]=gn(n[i],e[i]);return t}function Dp(){return{app:null,config:{isNativeTag:kd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let f_=0;function h_(n,e){return function(i,s=null){ct(i)||(i=sn({},i)),s!=null&&!At(s)&&(s=null);const r=Dp(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:f_++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:X_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&ct(u.install)?(o.add(u),u.install(c,...f)):ct(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Tn(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,qu(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(si(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=vr;vr=c;try{return u()}finally{vr=f}}};return c}}let vr=null;const d_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ps(e)}Modifiers`]||n[`${Ws(e)}Modifiers`];function p_(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ot;let s=t;const r=e.startsWith("update:"),o=r&&d_(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>qt(u)?u.trim():u)),o.number&&(s=t.map(Qm)));let a,l=i[a=yl(e)]||i[a=yl(ps(e))];!l&&r&&(l=i[a=yl(Ws(e))]),l&&si(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,si(c,n,6,s)}}const m_=new WeakMap;function Ip(n,e,t=!1){const i=t?m_:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ct(n)){const l=c=>{const u=Ip(c,e,!0);u&&(a=!0,sn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(At(n)&&i.set(n,null),null):(Qe(r)?r.forEach(l=>o[l]=null):sn(o,r),At(n)&&i.set(n,o),o)}function ll(n,e){return!n||!Ja(e)?!1:(e=e.slice(2).replace(/Once$/,""),wt(n,e[0].toLowerCase()+e.slice(1))||wt(n,Ws(e))||wt(n,e))}function Ff(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:p,inheritAttrs:v}=n,g=Na(n);let m,x;try{if(t.shapeFlag&4){const S=s||i,w=S;m=gi(c.call(w,S,u,f,d,h,p)),x=a}else{const S=e;m=gi(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),x=e.props?a:g_(a)}}catch(S){oo.length=0,il(S,n,1),m=Tn(bn)}let M=m;if(x&&v!==!1){const S=Object.keys(x),{shapeFlag:w}=M;S.length&&w&7&&(r&&S.some(Du)&&(x=__(x,r)),M=ms(M,x,!1,!0))}return t.dirs&&(M=ms(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(t.dirs):t.dirs),t.transition&&ho(M,t.transition),m=M,Na(g),m}const g_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ja(t))&&((e||(e={}))[t]=n[t]);return e},__=(n,e)=>{const t={};for(const i in n)(!Du(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function x_(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?Of(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(Lp(o,i,h)&&!ll(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Of(i,o,c):!0:!!o;return!1}function Of(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Lp(e,n,r)&&!ll(t,r))return!0}return!1}function Lp(n,e,t){const i=n[t],s=e[t];return t==="style"&&At(i)&&At(s)?!Nu(i,s):i!==s}function v_({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Np={},Up=()=>Object.create(Np),Fp=n=>Object.getPrototypeOf(n)===Np;function y_(n,e,t,i=!1){const s={},r=Up();n.propsDefaults=Object.create(null),Op(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:Cg(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function M_(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Et(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ll(n.emitsOptions,h))continue;const d=e[h];if(l)if(wt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const p=ps(h);s[p]=Cc(l,a,p,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Op(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!wt(e,f)&&((u=Ws(f))===f||!wt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Cc(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!wt(e,f))&&(delete r[f],c=!0)}c&&Oi(n.attrs,"set","")}function Op(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(eo(l))continue;const c=e[l];let u;s&&wt(s,u=ps(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ll(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Et(t),c=a||Ot;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Cc(s,l,f,c[f],n,!wt(c,f))}}return o}function Cc(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=wt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ct(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ao(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Ws(t))&&(i=!0))}return i}const S_=new WeakMap;function Bp(n,e,t=!1){const i=t?S_:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ct(n)){const u=f=>{l=!0;const[h,d]=Bp(f,e,!0);sn(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return At(n)&&i.set(n,gr),gr;if(Qe(r))for(let u=0;u<r.length;u++){const f=ps(r[u]);Bf(f)&&(o[f]=Ot)}else if(r)for(const u in r){const f=ps(u);if(Bf(f)){const h=r[u],d=o[f]=Qe(h)||ct(h)?{type:h}:sn({},h),p=d.type;let v=!1,g=!0;if(Qe(p))for(let m=0;m<p.length;++m){const x=p[m],M=ct(x)&&x.name;if(M==="Boolean"){v=!0;break}else M==="String"&&(g=!1)}else v=ct(p)&&p.name==="Boolean";d[0]=v,d[1]=g,(v||wt(d,"default"))&&a.push(f)}}const c=[o,a];return At(n)&&i.set(n,c),c}function Bf(n){return n[0]!=="$"&&!eo(n)}const Wu=n=>n==="_"||n==="_ctx"||n==="$stable",Xu=n=>Qe(n)?n.map(gi):[gi(n)],b_=(n,e,t)=>{if(e._n)return e;const i=_p((...s)=>Xu(e(...s)),t);return i._c=!1,i},zp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(Wu(s))continue;const r=n[s];if(ct(r))e[s]=b_(s,r,i);else if(r!=null){const o=Xu(r);e[s]=()=>o}}},kp=(n,e)=>{const t=Xu(e);n.slots.default=()=>t},Vp=(n,e,t)=>{for(const i in e)(t||!Wu(i))&&(n[i]=e[i])},E_=(n,e,t)=>{const i=n.slots=Up();if(n.vnode.shapeFlag&32){const s=e._;s?(Vp(i,e,t),t&&Yd(i,"_",s,!0)):zp(e,i)}else e&&kp(n,e)},T_=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ot;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Vp(s,e,t):(r=!e.$stable,zp(e,s)),o=e}else e&&(kp(n,e),o={default:1});if(r)for(const a in s)!Wu(a)&&o[a]==null&&delete s[a]},Cn=P_;function w_(n){return A_(n)}function A_(n,e){const t=el();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=yi,insertStaticContent:p}=n,v=(C,I,X,se=null,Y=null,ae=null,A=void 0,pe=null,ce=!!I.dynamicChildren)=>{if(C===I)return;C&&!Is(C,I)&&(se=ye(C),de(C,Y,ae,!0),C=null),I.patchFlag===-2&&(ce=!1,I.dynamicChildren=null);const{type:re,ref:he,shapeFlag:E}=I;switch(re){case cl:g(C,I,X,se);break;case bn:m(C,I,X,se);break;case Rl:C==null&&x(I,X,se,A);break;case Nn:F(C,I,X,se,Y,ae,A,pe,ce);break;default:E&1?w(C,I,X,se,Y,ae,A,pe,ce):E&6?z(C,I,X,se,Y,ae,A,pe,ce):(E&64||E&128)&&re.process(C,I,X,se,Y,ae,A,pe,ce,ie)}he!=null&&Y?io(he,C&&C.ref,ae,I||C,!I):he==null&&C&&C.ref!=null&&io(C.ref,null,ae,C,!0)},g=(C,I,X,se)=>{if(C==null)i(I.el=a(I.children),X,se);else{const Y=I.el=C.el;I.children!==C.children&&c(Y,I.children)}},m=(C,I,X,se)=>{C==null?i(I.el=l(I.children||""),X,se):I.el=C.el},x=(C,I,X,se)=>{[C.el,C.anchor]=p(C.children,I,X,se,C.el,C.anchor)},M=({el:C,anchor:I},X,se)=>{let Y;for(;C&&C!==I;)Y=h(C),i(C,X,se),C=Y;i(I,X,se)},S=({el:C,anchor:I})=>{let X;for(;C&&C!==I;)X=h(C),s(C),C=X;s(I)},w=(C,I,X,se,Y,ae,A,pe,ce)=>{if(I.type==="svg"?A="svg":I.type==="math"&&(A="mathml"),C==null)P(I,X,se,Y,ae,A,pe,ce);else{const re=C.el&&C.el._isVueCE?C.el:null;try{re&&re._beginPatch(),b(C,I,Y,ae,A,pe,ce)}finally{re&&re._endPatch()}}},P=(C,I,X,se,Y,ae,A,pe)=>{let ce,re;const{props:he,shapeFlag:E,transition:_,dirs:N}=C;if(ce=C.el=o(C.type,ae,he&&he.is,he),E&8?u(ce,C.children):E&16&&y(C.children,ce,null,se,Y,Cl(C,ae),A,pe),N&&ys(C,null,se,"created"),L(ce,C,C.scopeId,A,se),he){for(const $ in he)$!=="value"&&!eo($)&&r(ce,$,null,he[$],ae,se);"value"in he&&r(ce,"value",null,he.value,ae),(re=he.onVnodeBeforeMount)&&fi(re,se,C)}N&&ys(C,null,se,"beforeMount");const q=C_(Y,_);q&&_.beforeEnter(ce),i(ce,I,X),((re=he&&he.onVnodeMounted)||q||N)&&Cn(()=>{re&&fi(re,se,C),q&&_.enter(ce),N&&ys(C,null,se,"mounted")},Y)},L=(C,I,X,se,Y)=>{if(X&&d(C,X),se)for(let ae=0;ae<se.length;ae++)d(C,se[ae]);if(Y){let ae=Y.subTree;if(I===ae||Xp(ae.type)&&(ae.ssContent===I||ae.ssFallback===I)){const A=Y.vnode;L(C,A,A.scopeId,A.slotScopeIds,Y.parent)}}},y=(C,I,X,se,Y,ae,A,pe,ce=0)=>{for(let re=ce;re<C.length;re++){const he=C[re]=pe?Ui(C[re]):gi(C[re]);v(null,he,I,X,se,Y,ae,A,pe)}},b=(C,I,X,se,Y,ae,A)=>{const pe=I.el=C.el;let{patchFlag:ce,dynamicChildren:re,dirs:he}=I;ce|=C.patchFlag&16;const E=C.props||Ot,_=I.props||Ot;let N;if(X&&Ms(X,!1),(N=_.onVnodeBeforeUpdate)&&fi(N,X,I,C),he&&ys(I,C,X,"beforeUpdate"),X&&Ms(X,!0),(E.innerHTML&&_.innerHTML==null||E.textContent&&_.textContent==null)&&u(pe,""),re?W(C.dynamicChildren,re,pe,X,se,Cl(I,Y),ae):A||ne(C,I,pe,null,X,se,Cl(I,Y),ae,!1),ce>0){if(ce&16)D(pe,E,_,X,Y);else if(ce&2&&E.class!==_.class&&r(pe,"class",null,_.class,Y),ce&4&&r(pe,"style",E.style,_.style,Y),ce&8){const q=I.dynamicProps;for(let $=0;$<q.length;$++){const Z=q[$],Ee=E[Z],_e=_[Z];(_e!==Ee||Z==="value")&&r(pe,Z,Ee,_e,Y,X)}}ce&1&&C.children!==I.children&&u(pe,I.children)}else!A&&re==null&&D(pe,E,_,X,Y);((N=_.onVnodeUpdated)||he)&&Cn(()=>{N&&fi(N,X,I,C),he&&ys(I,C,X,"updated")},se)},W=(C,I,X,se,Y,ae,A)=>{for(let pe=0;pe<I.length;pe++){const ce=C[pe],re=I[pe],he=ce.el&&(ce.type===Nn||!Is(ce,re)||ce.shapeFlag&198)?f(ce.el):X;v(ce,re,he,null,se,Y,ae,A,!0)}},D=(C,I,X,se,Y)=>{if(I!==X){if(I!==Ot)for(const ae in I)!eo(ae)&&!(ae in X)&&r(C,ae,I[ae],null,Y,se);for(const ae in X){if(eo(ae))continue;const A=X[ae],pe=I[ae];A!==pe&&ae!=="value"&&r(C,ae,pe,A,Y,se)}"value"in X&&r(C,"value",I.value,X.value,Y)}},F=(C,I,X,se,Y,ae,A,pe,ce)=>{const re=I.el=C?C.el:a(""),he=I.anchor=C?C.anchor:a("");let{patchFlag:E,dynamicChildren:_,slotScopeIds:N}=I;N&&(pe=pe?pe.concat(N):N),C==null?(i(re,X,se),i(he,X,se),y(I.children||[],X,he,Y,ae,A,pe,ce)):E>0&&E&64&&_&&C.dynamicChildren&&C.dynamicChildren.length===_.length?(W(C.dynamicChildren,_,X,Y,ae,A,pe),(I.key!=null||Y&&I===Y.subTree)&&Hp(C,I,!0)):ne(C,I,X,he,Y,ae,A,pe,ce)},z=(C,I,X,se,Y,ae,A,pe,ce)=>{I.slotScopeIds=pe,C==null?I.shapeFlag&512?Y.ctx.activate(I,X,se,A,ce):V(I,X,se,Y,ae,A,ce):j(C,I,ce)},V=(C,I,X,se,Y,ae,A)=>{const pe=C.component=B_(C,se,Y);if(sl(C)&&(pe.ctx.renderer=ie),z_(pe,!1,A),pe.asyncDep){if(Y&&Y.registerDep(pe,H,A),!C.el){const ce=pe.subTree=Tn(bn);m(null,ce,I,X),C.placeholder=ce.el}}else H(pe,C,I,X,Y,ae,A)},j=(C,I,X)=>{const se=I.component=C.component;if(x_(C,I,X))if(se.asyncDep&&!se.asyncResolved){k(se,I,X);return}else se.next=I,se.update();else I.el=C.el,se.vnode=I},H=(C,I,X,se,Y,ae,A)=>{const pe=()=>{if(C.isMounted){let{next:E,bu:_,u:N,parent:q,vnode:$}=C;{const We=Gp(C);if(We){E&&(E.el=$.el,k(C,E,A)),We.asyncDep.then(()=>{Cn(()=>{C.isUnmounted||re()},Y)});return}}let Z=E,Ee;Ms(C,!1),E?(E.el=$.el,k(C,E,A)):E=$,_&&Ml(_),(Ee=E.props&&E.props.onVnodeBeforeUpdate)&&fi(Ee,q,E,$),Ms(C,!0);const _e=Ff(C),ze=C.subTree;C.subTree=_e,v(ze,_e,f(ze.el),ye(ze),C,Y,ae),E.el=_e.el,Z===null&&v_(C,_e.el),N&&Cn(N,Y),(Ee=E.props&&E.props.onVnodeUpdated)&&Cn(()=>fi(Ee,q,E,$),Y)}else{let E;const{el:_,props:N}=I,{bm:q,m:$,parent:Z,root:Ee,type:_e}=C,ze=so(I);Ms(C,!1),q&&Ml(q),!ze&&(E=N&&N.onVnodeBeforeMount)&&fi(E,Z,I),Ms(C,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(_e);const We=C.subTree=Ff(C);v(null,We,X,se,C,Y,ae),I.el=We.el}if($&&Cn($,Y),!ze&&(E=N&&N.onVnodeMounted)){const We=I;Cn(()=>fi(E,Z,We),Y)}(I.shapeFlag&256||Z&&so(Z.vnode)&&Z.vnode.shapeFlag&256)&&C.a&&Cn(C.a,Y),C.isMounted=!0,I=X=se=null}};C.scope.on();const ce=C.effect=new Zd(pe);C.scope.off();const re=C.update=ce.run.bind(ce),he=C.job=ce.runIfDirty.bind(ce);he.i=C,he.id=C.uid,ce.scheduler=()=>Gu(he),Ms(C,!0),re()},k=(C,I,X)=>{I.component=C;const se=C.vnode.props;C.vnode=I,C.next=null,M_(C,I.props,se,X),T_(C,I.children,X),Hi(),Cf(C),Gi()},ne=(C,I,X,se,Y,ae,A,pe,ce=!1)=>{const re=C&&C.children,he=C?C.shapeFlag:0,E=I.children,{patchFlag:_,shapeFlag:N}=I;if(_>0){if(_&128){we(re,E,X,se,Y,ae,A,pe,ce);return}else if(_&256){oe(re,E,X,se,Y,ae,A,pe,ce);return}}N&8?(he&16&&le(re,Y,ae),E!==re&&u(X,E)):he&16?N&16?we(re,E,X,se,Y,ae,A,pe,ce):le(re,Y,ae,!0):(he&8&&u(X,""),N&16&&y(E,X,se,Y,ae,A,pe,ce))},oe=(C,I,X,se,Y,ae,A,pe,ce)=>{C=C||gr,I=I||gr;const re=C.length,he=I.length,E=Math.min(re,he);let _;for(_=0;_<E;_++){const N=I[_]=ce?Ui(I[_]):gi(I[_]);v(C[_],N,X,null,Y,ae,A,pe,ce)}re>he?le(C,Y,ae,!0,!1,E):y(I,X,se,Y,ae,A,pe,ce,E)},we=(C,I,X,se,Y,ae,A,pe,ce)=>{let re=0;const he=I.length;let E=C.length-1,_=he-1;for(;re<=E&&re<=_;){const N=C[re],q=I[re]=ce?Ui(I[re]):gi(I[re]);if(Is(N,q))v(N,q,X,null,Y,ae,A,pe,ce);else break;re++}for(;re<=E&&re<=_;){const N=C[E],q=I[_]=ce?Ui(I[_]):gi(I[_]);if(Is(N,q))v(N,q,X,null,Y,ae,A,pe,ce);else break;E--,_--}if(re>E){if(re<=_){const N=_+1,q=N<he?I[N].el:se;for(;re<=_;)v(null,I[re]=ce?Ui(I[re]):gi(I[re]),X,q,Y,ae,A,pe,ce),re++}}else if(re>_)for(;re<=E;)de(C[re],Y,ae,!0),re++;else{const N=re,q=re,$=new Map;for(re=q;re<=_;re++){const Pe=I[re]=ce?Ui(I[re]):gi(I[re]);Pe.key!=null&&$.set(Pe.key,re)}let Z,Ee=0;const _e=_-q+1;let ze=!1,We=0;const ge=new Array(_e);for(re=0;re<_e;re++)ge[re]=0;for(re=N;re<=E;re++){const Pe=C[re];if(Ee>=_e){de(Pe,Y,ae,!0);continue}let Fe;if(Pe.key!=null)Fe=$.get(Pe.key);else for(Z=q;Z<=_;Z++)if(ge[Z-q]===0&&Is(Pe,I[Z])){Fe=Z;break}Fe===void 0?de(Pe,Y,ae,!0):(ge[Fe-q]=re+1,Fe>=We?We=Fe:ze=!0,v(Pe,I[Fe],X,null,Y,ae,A,pe,ce),Ee++)}const Se=ze?R_(ge):gr;for(Z=Se.length-1,re=_e-1;re>=0;re--){const Pe=q+re,Fe=I[Pe],ve=I[Pe+1],Ye=Pe+1<he?ve.el||Wp(ve):se;ge[re]===0?v(null,Fe,X,Ye,Y,ae,A,pe,ce):ze&&(Z<0||re!==Se[Z]?Ae(Fe,X,Ye,2):Z--)}}},Ae=(C,I,X,se,Y=null)=>{const{el:ae,type:A,transition:pe,children:ce,shapeFlag:re}=C;if(re&6){Ae(C.component.subTree,I,X,se);return}if(re&128){C.suspense.move(I,X,se);return}if(re&64){A.move(C,I,X,ie);return}if(A===Nn){i(ae,I,X);for(let E=0;E<ce.length;E++)Ae(ce[E],I,X,se);i(C.anchor,I,X);return}if(A===Rl){M(C,I,X);return}if(se!==2&&re&1&&pe)if(se===0)pe.beforeEnter(ae),i(ae,I,X),Cn(()=>pe.enter(ae),Y);else{const{leave:E,delayLeave:_,afterLeave:N}=pe,q=()=>{C.ctx.isUnmounted?s(ae):i(ae,I,X)},$=()=>{ae._isLeaving&&ae[mi](!0),E(ae,()=>{q(),N&&N()})};_?_(ae,q,$):$()}else i(ae,I,X)},de=(C,I,X,se=!1,Y=!1)=>{const{type:ae,props:A,ref:pe,children:ce,dynamicChildren:re,shapeFlag:he,patchFlag:E,dirs:_,cacheIndex:N}=C;if(E===-2&&(Y=!1),pe!=null&&(Hi(),io(pe,null,X,C,!0),Gi()),N!=null&&(I.renderCache[N]=void 0),he&256){I.ctx.deactivate(C);return}const q=he&1&&_,$=!so(C);let Z;if($&&(Z=A&&A.onVnodeBeforeUnmount)&&fi(Z,I,C),he&6)ft(C.component,X,se);else{if(he&128){C.suspense.unmount(X,se);return}q&&ys(C,null,I,"beforeUnmount"),he&64?C.type.remove(C,I,X,ie,se):re&&!re.hasOnce&&(ae!==Nn||E>0&&E&64)?le(re,I,X,!1,!0):(ae===Nn&&E&384||!Y&&he&16)&&le(ce,I,X),se&&Ke(C)}($&&(Z=A&&A.onVnodeUnmounted)||q)&&Cn(()=>{Z&&fi(Z,I,C),q&&ys(C,null,I,"unmounted")},X)},Ke=C=>{const{type:I,el:X,anchor:se,transition:Y}=C;if(I===Nn){vt(X,se);return}if(I===Rl){S(C);return}const ae=()=>{s(X),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(C.shapeFlag&1&&Y&&!Y.persisted){const{leave:A,delayLeave:pe}=Y,ce=()=>A(X,ae);pe?pe(C.el,ae,ce):ce()}else ae()},vt=(C,I)=>{let X;for(;C!==I;)X=h(C),s(C),C=X;s(I)},ft=(C,I,X)=>{const{bum:se,scope:Y,job:ae,subTree:A,um:pe,m:ce,a:re}=C;zf(ce),zf(re),se&&Ml(se),Y.stop(),ae&&(ae.flags|=8,de(A,C,I,X)),pe&&Cn(pe,I),Cn(()=>{C.isUnmounted=!0},I)},le=(C,I,X,se=!1,Y=!1,ae=0)=>{for(let A=ae;A<C.length;A++)de(C[A],I,X,se,Y)},ye=C=>{if(C.shapeFlag&6)return ye(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const I=h(C.anchor||C.el),X=I&&I[Wg];return X?h(X):I};let Me=!1;const Ze=(C,I,X)=>{let se;C==null?I._vnode&&(de(I._vnode,null,null,!0),se=I._vnode.component):v(I._vnode||null,C,I,null,null,null,X),I._vnode=C,Me||(Me=!0,Cf(se),pp(),Me=!1)},ie={p:v,um:de,m:Ae,r:Ke,mt:V,mc:y,pc:ne,pbc:W,n:ye,o:n};return{render:Ze,hydrate:void 0,createApp:h_(Ze)}}function Cl({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ms({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function C_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Hp(n,e,t=!1){const i=n.children,s=e.children;if(Qe(i)&&Qe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ui(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&Hp(o,a)),a.type===cl&&(a.patchFlag===-1&&(a=s[r]=Ui(a)),a.el=o.el),a.type===bn&&!a.el&&(a.el=o.el)}}function R_(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Gp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Gp(e)}function zf(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Wp(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Wp(e.subTree):null}const Xp=n=>n.__isSuspense;function P_(n,e){e&&e.pendingBranch?Qe(n)?e.effects.push(...n):e.effects.push(n):zg(n)}const Nn=Symbol.for("v-fgt"),cl=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),Rl=Symbol.for("v-stc"),oo=[];let Fn=null;function _t(n=!1){oo.push(Fn=n?null:[])}function D_(){oo.pop(),Fn=oo[oo.length-1]||null}let po=1;function Oa(n,e=!1){po+=n,n<0&&Fn&&e&&(Fn.hasOnce=!0)}function Yp(n){return n.dynamicChildren=po>0?Fn||gr:null,D_(),po>0&&Fn&&Fn.push(n),n}function xt(n,e,t,i,s,r){return Yp(Oe(n,e,t,i,s,r,!0))}function I_(n,e,t,i,s){return Yp(Tn(n,e,t,i,s,!0))}function Ba(n){return n?n.__v_isVNode===!0:!1}function Is(n,e){return n.type===e.type&&n.key===e.key}const qp=({key:n})=>n??null,ba=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?qt(n)||dn(n)||ct(n)?{i:xi,r:n,k:e,f:!!t}:n:null);function Oe(n,e=null,t=null,i=0,s=null,r=n===Nn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&qp(e),ref:e&&ba(e),scopeId:gp,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xi};return a?(Yu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=qt(t)?8:16),po>0&&!o&&Fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Fn.push(l),l}const Tn=L_;function L_(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===s_)&&(n=bn),Ba(n)){const a=ms(n,e,!0);return t&&Yu(a,t),po>0&&!r&&Fn&&(a.shapeFlag&6?Fn[Fn.indexOf(n)]=a:Fn.push(a)),a.patchFlag=-2,a}if(G_(n)&&(n=n.__vccOpts),e){e=N_(e);let{class:a,style:l}=e;a&&!qt(a)&&(e.class=vn(a)),At(l)&&(Hu(l)&&!Qe(l)&&(l=sn({},l)),e.style=tl(l))}const o=qt(n)?1:Xp(n)?128:yp(n)?64:At(n)?4:ct(n)?2:0;return Oe(n,e,t,i,s,o,r,!0)}function N_(n){return n?Hu(n)||Fp(n)?sn({},n):n:null}function ms(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?U_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&qp(c),ref:e&&e.ref?t&&r?Qe(r)?r.concat(ba(e)):[r,ba(e)]:ba(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Nn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ms(n.ssContent),ssFallback:n.ssFallback&&ms(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&ho(u,l.clone(u)),u}function jp(n=" ",e=0){return Tn(cl,null,n,e)}function Kn(n="",e=!1){return e?(_t(),I_(bn,null,n)):Tn(bn,null,n)}function gi(n){return n==null||typeof n=="boolean"?Tn(bn):Qe(n)?Tn(Nn,null,n.slice()):Ba(n)?Ui(n):Tn(cl,null,String(n))}function Ui(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ms(n)}function Yu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Qe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Yu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Fp(e)?e._ctx=xi:s===3&&xi&&(xi.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ct(e)?(e={default:e,_ctx:xi},t=32):(e=String(e),i&64?(t=16,e=[jp(e)]):t=8);n.children=e,n.shapeFlag|=t}function U_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=vn([e.class,i.class]));else if(s==="style")e.style=tl([e.style,i.style]);else if(Ja(s)){const r=e[s],o=i[s];o&&r!==o&&!(Qe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function fi(n,e,t,i=null){si(n,e,7,[t,i])}const F_=Dp();let O_=0;function B_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||F_,r={uid:O_++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new lg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bp(i,s),emitsOptions:Ip(i,s),emit:null,emitted:null,propsDefaults:Ot,inheritAttrs:i.inheritAttrs,ctx:Ot,data:Ot,props:Ot,attrs:Ot,slots:Ot,refs:Ot,setupState:Ot,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=p_.bind(null,r),n.ce&&n.ce(r),r}let En=null;const $p=()=>En||xi;let za,Rc;{const n=el(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};za=e("__VUE_INSTANCE_SETTERS__",t=>En=t),Rc=e("__VUE_SSR_SETTERS__",t=>mo=t)}const Ao=n=>{const e=En;return za(n),n.scope.on(),()=>{n.scope.off(),za(e)}},kf=()=>{En&&En.scope.off(),za(null)};function Zp(n){return n.vnode.shapeFlag&4}let mo=!1;function z_(n,e=!1,t=!1){e&&Rc(e);const{props:i,children:s}=n.vnode,r=Zp(n);y_(n,i,r,e),E_(n,s,t||e);const o=r?k_(n,e):void 0;return e&&Rc(!1),o}function k_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,r_);const{setup:i}=t;if(i){Hi();const s=n.setupContext=i.length>1?H_(n):null,r=Ao(n),o=wo(i,n,0,[n.props,s]),a=Hd(o);if(Gi(),r(),(a||n.sp)&&!so(n)&&wp(n),a){if(o.then(kf,kf),e)return o.then(l=>{Vf(n,l)}).catch(l=>{il(l,n,0)});n.asyncDep=o}else Vf(n,o)}else Kp(n)}function Vf(n,e,t){ct(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:At(e)&&(n.setupState=up(e)),Kp(n)}function Kp(n,e,t){const i=n.type;n.render||(n.render=i.render||yi);{const s=Ao(n);Hi();try{o_(n)}finally{Gi(),s()}}}const V_={get(n,e){return fn(n,"get",""),n[e]}};function H_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,V_),slots:n.slots,emit:n.emit,expose:e}}function qu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(up(Rg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in ro)return ro[t](n)},has(e,t){return t in e||t in ro}})):n.proxy}function G_(n){return ct(n)&&"__vccOpts"in n}const cs=(n,e)=>Ng(n,e,mo);function W_(n,e,t){try{Oa(-1);const i=arguments.length;return i===2?At(e)&&!Qe(e)?Ba(e)?Tn(n,null,[e]):Tn(n,e):Tn(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ba(t)&&(t=[t]),Tn(n,e,t))}finally{Oa(1)}}const X_="3.5.29";let Pc;const Hf=typeof window<"u"&&window.trustedTypes;if(Hf)try{Pc=Hf.createPolicy("vue",{createHTML:n=>n})}catch{}const Jp=Pc?n=>Pc.createHTML(n):n=>n,Y_="http://www.w3.org/2000/svg",q_="http://www.w3.org/1998/Math/MathML",Ni=typeof document<"u"?document:null,Gf=Ni&&Ni.createElement("template"),j_={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ni.createElementNS(Y_,n):e==="mathml"?Ni.createElementNS(q_,n):t?Ni.createElement(n,{is:t}):Ni.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ni.createTextNode(n),createComment:n=>Ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Gf.innerHTML=Jp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Gf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Qi="transition",kr="animation",go=Symbol("_vtc"),Qp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},$_=sn({},Mp,Qp),Z_=n=>(n.displayName="Transition",n.props=$_,n),K_=Z_((n,{slots:e})=>W_(qg,J_(n),e)),Ss=(n,e=[])=>{Qe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Wf=n=>n?Qe(n)?n.some(e=>e.length>1):n.length>1:!1;function J_(n){const e={};for(const F in n)F in Qp||(e[F]=n[F]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,p=Q_(s),v=p&&p[0],g=p&&p[1],{onBeforeEnter:m,onEnter:x,onEnterCancelled:M,onLeave:S,onLeaveCancelled:w,onBeforeAppear:P=m,onAppear:L=x,onAppearCancelled:y=M}=e,b=(F,z,V,j)=>{F._enterCancelled=j,bs(F,z?u:a),bs(F,z?c:o),V&&V()},W=(F,z)=>{F._isLeaving=!1,bs(F,f),bs(F,d),bs(F,h),z&&z()},D=F=>(z,V)=>{const j=F?L:x,H=()=>b(z,F,V);Ss(j,[z,H]),Xf(()=>{bs(z,F?l:r),Ai(z,F?u:a),Wf(j)||Yf(z,i,v,H)})};return sn(e,{onBeforeEnter(F){Ss(m,[F]),Ai(F,r),Ai(F,o)},onBeforeAppear(F){Ss(P,[F]),Ai(F,l),Ai(F,c)},onEnter:D(!1),onAppear:D(!0),onLeave(F,z){F._isLeaving=!0;const V=()=>W(F,z);Ai(F,f),F._enterCancelled?(Ai(F,h),$f(F)):($f(F),Ai(F,h)),Xf(()=>{F._isLeaving&&(bs(F,f),Ai(F,d),Wf(S)||Yf(F,i,g,V))}),Ss(S,[F,V])},onEnterCancelled(F){b(F,!1,void 0,!0),Ss(M,[F])},onAppearCancelled(F){b(F,!0,void 0,!0),Ss(y,[F])},onLeaveCancelled(F){W(F),Ss(w,[F])}})}function Q_(n){if(n==null)return null;if(At(n))return[Pl(n.enter),Pl(n.leave)];{const e=Pl(n);return[e,e]}}function Pl(n){return eg(n)}function Ai(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[go]||(n[go]=new Set)).add(e)}function bs(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[go];t&&(t.delete(e),t.size||(n[go]=void 0))}function Xf(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let e0=0;function Yf(n,e,t,i){const s=n._endId=++e0,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=t0(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function t0(n,e){const t=window.getComputedStyle(n),i=p=>(t[p]||"").split(", "),s=i(`${Qi}Delay`),r=i(`${Qi}Duration`),o=qf(s,r),a=i(`${kr}Delay`),l=i(`${kr}Duration`),c=qf(a,l);let u=null,f=0,h=0;e===Qi?o>0&&(u=Qi,f=o,h=r.length):e===kr?c>0&&(u=kr,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Qi:kr:null,h=u?u===Qi?r.length:l.length:0);const d=u===Qi&&/\b(?:transform|all)(?:,|$)/.test(i(`${Qi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function qf(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>jf(t)+jf(n[i])))}function jf(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function $f(n){return(n?n.ownerDocument:document).body.offsetHeight}function n0(n,e,t){const i=n[go];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Zf=Symbol("_vod"),i0=Symbol("_vsh"),s0=Symbol(""),r0=/(?:^|;)\s*display\s*:/;function o0(n,e,t){const i=n.style,s=qt(t);let r=!1;if(t&&!s){if(e)if(qt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Ea(i,a,"")}else for(const o in e)t[o]==null&&Ea(i,o,"");for(const o in t)o==="display"&&(r=!0),Ea(i,o,t[o])}else if(s){if(e!==t){const o=i[s0];o&&(t+=";"+o),i.cssText=t,r=r0.test(t)}}else e&&n.removeAttribute("style");Zf in n&&(n[Zf]=r?i.display:"",n[i0]&&(i.display="none"))}const Kf=/\s*!important$/;function Ea(n,e,t){if(Qe(t))t.forEach(i=>Ea(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=a0(n,e);Kf.test(t)?n.setProperty(Ws(i),t.replace(Kf,""),"important"):n[i]=t}}const Jf=["Webkit","Moz","ms"],Dl={};function a0(n,e){const t=Dl[e];if(t)return t;let i=ps(e);if(i!=="filter"&&i in n)return Dl[e]=i;i=Xd(i);for(let s=0;s<Jf.length;s++){const r=Jf[s]+i;if(r in n)return Dl[e]=r}return e}const Qf="http://www.w3.org/1999/xlink";function eh(n,e,t,i,s,r=og(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Qf,e.slice(6,e.length)):n.setAttributeNS(Qf,e,t):t==null||r&&!qd(t)?n.removeAttribute(e):n.setAttribute(e,r?"":bi(t)?String(t):t)}function th(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Jp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=qd(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function l0(n,e,t,i){n.addEventListener(e,t,i)}function c0(n,e,t,i){n.removeEventListener(e,t,i)}const nh=Symbol("_vei");function u0(n,e,t,i,s=null){const r=n[nh]||(n[nh]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=f0(e);if(i){const c=r[e]=p0(i,s);l0(n,a,c,l)}else o&&(c0(n,a,o,l),r[e]=void 0)}}const ih=/(?:Once|Passive|Capture)$/;function f0(n){let e;if(ih.test(n)){e={};let i;for(;i=n.match(ih);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ws(n.slice(2)),e]}let Il=0;const h0=Promise.resolve(),d0=()=>Il||(h0.then(()=>Il=0),Il=Date.now());function p0(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;si(m0(i,t.value),e,5,[i])};return t.value=n,t.attached=d0(),t}function m0(n,e){if(Qe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const sh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,g0=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?n0(n,i,o):e==="style"?o0(n,t,i):Ja(e)?Du(e)||u0(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_0(n,e,i,o))?(th(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&eh(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!qt(i))?th(n,ps(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),eh(n,e,i,o))};function _0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&sh(e)&&ct(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sh(e)&&qt(t)?!1:e in n}const x0=["ctrl","shift","alt","meta"],v0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>x0.some(t=>n[`${t}Key`]&&!e.includes(t))},Ll=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=v0[e[o]];if(a&&a(s,e))return}return n(s,...r)}))},y0=sn({patchProp:g0},j_);let rh;function M0(){return rh||(rh=w_(y0))}const S0=((...n)=>{const e=M0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=E0(i);if(!s)return;const r=e._component;!ct(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,b0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function b0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function E0(n){return qt(n)?document.querySelector(n):n}const T0="modulepreload",w0=function(n){return"/"+n},oh={},A0=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");s=l(t.map(c=>{if(c=w0(c),c in oh)return;oh[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":T0,u||(h.as="script"),h.crossOrigin="",h.href=c,a&&h.setAttribute("nonce",a),document.head.appendChild(h),u)return new Promise((d,p)=>{h.addEventListener("load",d),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};const ju="183",ks={ROTATE:0,DOLLY:1,PAN:2},mr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},C0=0,ah=1,R0=2,Ta=1,P0=2,Kr=3,gs=0,Dn=1,Hn=2,ki=0,yr=1,lh=2,ch=3,uh=4,D0=5,Ls=100,I0=101,L0=102,N0=103,U0=104,F0=200,O0=201,B0=202,z0=203,Dc=204,Ic=205,k0=206,V0=207,H0=208,G0=209,W0=210,X0=211,Y0=212,q0=213,j0=214,Lc=0,Nc=1,Uc=2,br=3,Fc=4,Oc=5,Bc=6,zc=7,em=0,$0=1,Z0=2,Mi=0,tm=1,nm=2,im=3,sm=4,rm=5,om=6,am=7,fh="attached",K0="detached",lm=300,Vs=301,Er=302,Nl=303,Ul=304,ul=306,kc=1e3,Bi=1001,Vc=1002,rn=1003,J0=1004,Vo=1005,hn=1006,Fl=1007,Fs=1008,Un=1009,cm=1010,um=1011,_o=1012,$u=1013,Ei=1014,Gn=1015,Xi=1016,Zu=1017,Ku=1018,xo=1020,fm=35902,hm=35899,dm=1021,pm=1022,Wn=1023,Yi=1026,Os=1027,Ju=1028,Qu=1029,Tr=1030,ef=1031,tf=1033,wa=33776,Aa=33777,Ca=33778,Ra=33779,Hc=35840,Gc=35841,Wc=35842,Xc=35843,Yc=36196,qc=37492,jc=37496,$c=37488,Zc=37489,Kc=37490,Jc=37491,Qc=37808,eu=37809,tu=37810,nu=37811,iu=37812,su=37813,ru=37814,ou=37815,au=37816,lu=37817,cu=37818,uu=37819,fu=37820,hu=37821,du=36492,pu=36494,mu=36495,gu=36283,_u=36284,xu=36285,vu=36286,ka=2300,yu=2301,Ol=2302,hh=2303,dh=2400,ph=2401,mh=2402,Q0=2500,rA=0,oA=1,aA=2,ex=3200,mm=0,tx=1,us="",Mn="srgb",wr="srgb-linear",Va="linear",Pt="srgb",Zs=7680,gh=519,nx=512,ix=513,sx=514,nf=515,rx=516,ox=517,sf=518,ax=519,Mu=35044,_h="300 es",vi=2e3,vo=2001;function lx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function cx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function yo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ux(){const n=yo("canvas");return n.style.display="block",n}const xh={};function Ha(...n){const e="THREE."+n.shift();console.log(e,...n)}function gm(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $e(...n){n=gm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Je(...n){n=gm(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ga(...n){const e=n.join(" ");e in xh||(xh[e]=!0,$e(...n))}function fx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const hx={[Lc]:Nc,[Uc]:Bc,[Fc]:zc,[br]:Oc,[Nc]:Lc,[Bc]:Uc,[zc]:Fc,[Oc]:br};class Xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vh=1234567;const ao=Math.PI/180,Ar=180/Math.PI;function ni(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function ht(n,e,t){return Math.max(e,Math.min(t,n))}function rf(n,e){return(n%e+e)%e}function dx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function px(n,e,t){return n!==e?(t-n)/(e-n):0}function lo(n,e,t){return(1-t)*n+t*e}function mx(n,e,t,i){return lo(n,e,1-Math.exp(-t*i))}function gx(n,e=1){return e-Math.abs(rf(n,e*2)-e)}function _x(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function xx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function vx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function yx(n,e){return n+Math.random()*(e-n)}function Mx(n){return n*(.5-Math.random())}function Sx(n){n!==void 0&&(vh=n);let e=vh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bx(n){return n*ao}function Ex(n){return n*Ar}function Tx(n){return(n&n-1)===0&&n!==0}function wx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ax(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cx(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),p=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*p,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*p,a*c);break;case"ZYZ":n.set(l*p,l*d,a*u,a*c);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Rx={DEG2RAD:ao,RAD2DEG:Ar,generateUUID:ni,clamp:ht,euclideanModulo:rf,mapLinear:dx,inverseLerp:px,lerp:lo,damp:mx,pingpong:gx,smoothstep:_x,smootherstep:xx,randInt:vx,randFloat:yx,randFloatSpread:Mx,seededRandom:Sx,degToRad:bx,radToDeg:Ex,isPowerOfTwo:Tx,ceilPowerOfTwo:wx,floorPowerOfTwo:Ax,setQuaternionFromProperEuler:Cx,normalize:Dt,denormalize:Qn};class tt{constructor(e=0,t=0){tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[o+0],d=r[o+1],p=r[o+2],v=r[o+3];if(f!==v||l!==h||c!==d||u!==p){let g=l*h+c*d+u*p+f*v;g<0&&(h=-h,d=-d,p=-p,v=-v,g=-g);let m=1-a;if(g<.9995){const x=Math.acos(g),M=Math.sin(x);m=Math.sin(m*x)/M,a=Math.sin(a*x)/M,l=l*m+h*a,c=c*m+d*a,u=u*m+p*a,f=f*m+v*a}else{l=l*m+h*a,c=c*m+d*a,u=u*m+p*a,f=f*m+v*a;const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-a*d,e[t+2]=c*p+u*d+a*h-l*f,e[t+3]=u*p-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bl.copy(this).projectOnVector(e),this.sub(Bl)}reflect(e){return this.sub(Bl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bl=new O,yh=new Jt;class lt{constructor(e,t,i,s,r,o,a,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],p=i[8],v=s[0],g=s[3],m=s[6],x=s[1],M=s[4],S=s[7],w=s[2],P=s[5],L=s[8];return r[0]=o*v+a*x+l*w,r[3]=o*g+a*M+l*P,r[6]=o*m+a*S+l*L,r[1]=c*v+u*x+f*w,r[4]=c*g+u*M+f*P,r[7]=c*m+u*S+f*L,r[2]=h*v+d*x+p*w,r[5]=h*g+d*M+p*P,r[8]=h*m+d*S+p*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,p=t*f+i*h+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zl.makeScale(e,t)),this}rotate(e){return this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zl=new lt,Mh=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sh=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Px(){const n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Pt&&(s.r=Vi(s.r),s.g=Vi(s.g),s.b=Vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Pt&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===us?Va:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:e,whitePoint:i,transfer:Va,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:Pt,toXYZ:Mh,fromXYZ:Sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),n}const Mt=Px();function Vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ks;class Dx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ks===void 0&&(Ks=yo("canvas")),Ks.width=e.width,Ks.height=e.height;const s=Ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vi(t[i]/255)*255):t[i]=Vi(t[i]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ix=0;class of{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ix++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kl(s[o].image)):r.push(kl(s[o]))}else r=kl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Dx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let Lx=0;const Vl=new O;class pn extends Xs{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,i=Bi,s=Bi,r=hn,o=Fs,a=Wn,l=Un,c=pn.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=ni(),this.name="",this.source=new of(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kc:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case Vc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kc:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case Vc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=lm;pn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,i=0,s=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,S=(d+1)/2,w=(m+1)/2,P=(u+h)/4,L=(f+v)/4,y=(p+g)/4;return M>S&&M>w?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=P/i,r=L/i):S>w?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=P/s,r=y/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=L/r,s=y/r),this.set(i,s,r,t),this}let x=Math.sqrt((g-p)*(g-p)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(f-v)/x,this.z=(h-u)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ht(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nx extends Xs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},r=new pn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new of(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends Nx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _m extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ux extends pn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=rn,this.minFilter=rn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mt{constructor(e,t,i,s,r,o,a,l,c,u,f,h,d,p,v,g){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,d,p,v,g)}set(e,t,i,s,r,o,a,l,c,u,f,h,d,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Js.setFromMatrixColumn(e,0).length(),r=1/Js.setFromMatrixColumn(e,1).length(),o=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,p=a*u,v=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-v*c,t[9]=-a*l,t[2]=v-h*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h+v*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=v+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,p=c*u,v=c*f;t[0]=h-v*a,t[4]=-o*f,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=v-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,p=a*u,v=a*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,p=a*l,v=a*c;t[0]=l*u,t[4]=v-h*f,t[8]=p*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-v*f}else if(e.order==="XZY"){const h=o*l,d=o*c,p=a*l,v=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=o*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=a*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fx,e,Ox)}lookAt(e,t,i){const s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),es.crossVectors(i,In),es.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),es.crossVectors(i,In)),es.normalize(),Ho.crossVectors(In,es),s[0]=es.x,s[4]=Ho.x,s[8]=In.x,s[1]=es.y,s[5]=Ho.y,s[9]=In.y,s[2]=es.z,s[6]=Ho.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],p=i[2],v=i[6],g=i[10],m=i[14],x=i[3],M=i[7],S=i[11],w=i[15],P=s[0],L=s[4],y=s[8],b=s[12],W=s[1],D=s[5],F=s[9],z=s[13],V=s[2],j=s[6],H=s[10],k=s[14],ne=s[3],oe=s[7],we=s[11],Ae=s[15];return r[0]=o*P+a*W+l*V+c*ne,r[4]=o*L+a*D+l*j+c*oe,r[8]=o*y+a*F+l*H+c*we,r[12]=o*b+a*z+l*k+c*Ae,r[1]=u*P+f*W+h*V+d*ne,r[5]=u*L+f*D+h*j+d*oe,r[9]=u*y+f*F+h*H+d*we,r[13]=u*b+f*z+h*k+d*Ae,r[2]=p*P+v*W+g*V+m*ne,r[6]=p*L+v*D+g*j+m*oe,r[10]=p*y+v*F+g*H+m*we,r[14]=p*b+v*z+g*k+m*Ae,r[3]=x*P+M*W+S*V+w*ne,r[7]=x*L+M*D+S*j+w*oe,r[11]=x*y+M*F+S*H+w*we,r[15]=x*b+M*z+S*k+w*Ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],v=e[7],g=e[11],m=e[15],x=l*d-c*h,M=a*d-c*f,S=a*h-l*f,w=o*d-c*u,P=o*h-l*u,L=o*f-a*u;return t*(v*x-g*M+m*S)-i*(p*x-g*w+m*P)+s*(p*M-v*w+m*L)-r*(p*S-v*P+g*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],v=e[13],g=e[14],m=e[15],x=t*a-i*o,M=t*l-s*o,S=t*c-r*o,w=i*l-s*a,P=i*c-r*a,L=s*c-r*l,y=u*v-f*p,b=u*g-h*p,W=u*m-d*p,D=f*g-h*v,F=f*m-d*v,z=h*m-d*g,V=x*z-M*F+S*D+w*W-P*b+L*y;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/V;return e[0]=(a*z-l*F+c*D)*j,e[1]=(s*F-i*z-r*D)*j,e[2]=(v*L-g*P+m*w)*j,e[3]=(h*P-f*L-d*w)*j,e[4]=(l*W-o*z-c*b)*j,e[5]=(t*z-s*W+r*b)*j,e[6]=(g*S-p*L-m*M)*j,e[7]=(u*L-h*S+d*M)*j,e[8]=(o*F-a*W+c*y)*j,e[9]=(i*W-t*F-r*y)*j,e[10]=(p*P-v*S+m*x)*j,e[11]=(f*S-u*P-d*x)*j,e[12]=(a*b-o*D-l*y)*j,e[13]=(t*D-i*b+s*y)*j,e[14]=(v*M-p*w-g*x)*j,e[15]=(u*w-f*M+h*x)*j,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,p=r*f,v=o*u,g=o*f,m=a*f,x=l*c,M=l*u,S=l*f,w=i.x,P=i.y,L=i.z;return s[0]=(1-(v+m))*w,s[1]=(d+S)*w,s[2]=(p-M)*w,s[3]=0,s[4]=(d-S)*P,s[5]=(1-(h+m))*P,s[6]=(g+x)*P,s[7]=0,s[8]=(p+M)*L,s[9]=(g-x)*L,s[10]=(1-(h+v))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let o=Js.set(s[0],s[1],s[2]).length();const a=Js.set(s[4],s[5],s[6]).length(),l=Js.set(s[8],s[9],s[10]).length();r<0&&(o=-o),jn.copy(this);const c=1/o,u=1/a,f=1/l;return jn.elements[0]*=c,jn.elements[1]*=c,jn.elements[2]*=c,jn.elements[4]*=u,jn.elements[5]*=u,jn.elements[6]*=u,jn.elements[8]*=f,jn.elements[9]*=f,jn.elements[10]*=f,t.setFromRotationMatrix(jn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,s,r,o,a=vi,l=!1){const c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let p,v;if(l)p=r/(o-r),v=o*r/(o-r);else if(a===vi)p=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===vo)p=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=vi,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s);let p,v;if(l)p=1/(o-r),v=o/(o-r);else if(a===vi)p=-2/(o-r),v=-(o+r)/(o-r);else if(a===vo)p=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Js=new O,jn=new mt,Fx=new O(0,0,0),Ox=new O(1,1,1),es=new O,Ho=new O,In=new O,bh=new mt,Eh=new Jt;class ri{constructor(e=0,t=0,i=0,s=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return bh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eh.setFromEuler(this),this.setFromQuaternion(Eh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class af{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bx=0;const Th=new O,Qs=new Jt,Ci=new mt,Go=new O,Vr=new O,zx=new O,kx=new Jt,wh=new O(1,0,0),Ah=new O(0,1,0),Ch=new O(0,0,1),Rh={type:"added"},Vx={type:"removed"},er={type:"childadded",child:null},Hl={type:"childremoved",child:null};class Yt extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new O,t=new ri,i=new Jt,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new lt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(wh,e)}rotateY(e){return this.rotateOnAxis(Ah,e)}rotateZ(e){return this.rotateOnAxis(Ch,e)}translateOnAxis(e,t){return Th.copy(e).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wh,e)}translateY(e){return this.translateOnAxis(Ah,e)}translateZ(e){return this.translateOnAxis(Ch,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Go.copy(e):Go.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Vr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Vr,Go,this.up):Ci.lookAt(Go,Vr,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),Qs.setFromRotationMatrix(Ci),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rh),er.child=e,this.dispatchEvent(er),er.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vx),Hl.child=e,this.dispatchEvent(Hl),Hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rh),er.child=e,this.dispatchEvent(er),er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,e,zx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Vr,kx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Yt.DEFAULT_UP=new O(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jn extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hx={type:"move"};class Gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function Wl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Mt.workingColorSpace){if(e=rf(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Wl(o,r,e+1/3),this.g=Wl(o,r,e),this.b=Wl(o,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Mn){function i(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mn){const i=xm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return Mt.workingToColorSpace(un.copy(this),e),Math.round(ht(un.r*255,0,255))*65536+Math.round(ht(un.g*255,0,255))*256+Math.round(ht(un.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(un.copy(this),t);const i=un.r,s=un.g,r=un.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Mn){Mt.workingToColorSpace(un.copy(this),e);const t=un.r,i=un.g,s=un.b;return e!==Mn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(Wo);const i=lo(ts.h,Wo.h,t),s=lo(ts.s,Wo.s,t),r=lo(ts.l,Wo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new rt;rt.NAMES=xm;class Gx extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $n=new O,Ri=new O,Xl=new O,Pi=new O,tr=new O,nr=new O,Ph=new O,Yl=new O,ql=new O,jl=new O,$l=new kt,Zl=new kt,Kl=new kt;class ei{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),$n.subVectors(e,t),s.cross($n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){$n.subVectors(s,t),Ri.subVectors(i,t),Xl.subVectors(e,t);const o=$n.dot($n),a=$n.dot(Ri),l=$n.dot(Xl),c=Ri.dot(Ri),u=Ri.dot(Xl),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,p=(o*u-a*l)*h;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(o,Pi.y),l.addScaledVector(a,Pi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return $l.setScalar(0),Zl.setScalar(0),Kl.setScalar(0),$l.fromBufferAttribute(e,t),Zl.fromBufferAttribute(e,i),Kl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector($l,r.x),o.addScaledVector(Zl,r.y),o.addScaledVector(Kl,r.z),o}static isFrontFacing(e,t,i,s){return $n.subVectors(i,t),Ri.subVectors(e,t),$n.cross(Ri).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),$n.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ei.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;tr.subVectors(s,i),nr.subVectors(r,i),Yl.subVectors(e,i);const l=tr.dot(Yl),c=nr.dot(Yl);if(l<=0&&c<=0)return t.copy(i);ql.subVectors(e,s);const u=tr.dot(ql),f=nr.dot(ql);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(tr,o);jl.subVectors(e,r);const d=tr.dot(jl),p=nr.dot(jl);if(p>=0&&d<=p)return t.copy(r);const v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(i).addScaledVector(nr,a);const g=u*p-d*f;if(g<=0&&f-u>=0&&d-p>=0)return Ph.subVectors(r,s),a=(f-u)/(f-u+(d-p)),t.copy(s).addScaledVector(Ph,a);const m=1/(g+v+h);return o=v*m,a=h*m,t.copy(i).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ji{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Xo.copy(i.boundingBox)),Xo.applyMatrix4(e.matrixWorld),this.union(Xo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),Yo.subVectors(this.max,Hr),ir.subVectors(e.a,Hr),sr.subVectors(e.b,Hr),rr.subVectors(e.c,Hr),ns.subVectors(sr,ir),is.subVectors(rr,sr),Es.subVectors(ir,rr);let t=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Es.z,Es.y,ns.z,0,-ns.x,is.z,0,-is.x,Es.z,0,-Es.x,-ns.y,ns.x,0,-is.y,is.x,0,-Es.y,Es.x,0];return!Jl(t,ir,sr,rr,Yo)||(t=[1,0,0,0,1,0,0,0,1],!Jl(t,ir,sr,rr,Yo))?!1:(qo.crossVectors(ns,is),t=[qo.x,qo.y,qo.z],Jl(t,ir,sr,rr,Yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Di=[new O,new O,new O,new O,new O,new O,new O,new O],Zn=new O,Xo=new ji,ir=new O,sr=new O,rr=new O,ns=new O,is=new O,Es=new O,Hr=new O,Yo=new O,qo=new O,Ts=new O;function Jl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ts.fromArray(n,r);const a=s.x*Math.abs(Ts.x)+s.y*Math.abs(Ts.y)+s.z*Math.abs(Ts.z),l=e.dot(Ts),c=t.dot(Ts),u=i.dot(Ts);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $t=new O,jo=new tt;let Wx=0;class On{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mu,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)jo.fromBufferAttribute(this,t),jo.applyMatrix3(e),this.setXY(t,jo.x,jo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mu&&(e.usage=this.usage),e}}class vm extends On{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Xx extends On{constructor(e,t,i){super(new Int32Array(e),t,i)}}class ym extends On{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Tt extends On{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Yx=new ji,Gr=new O,Ql=new O;class $i{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Yx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gr.subVectors(e,this.center);const t=Gr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Gr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gr.copy(e.center).add(Ql)),this.expandByPoint(Gr.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let qx=0;const Vn=new mt,ec=new Yt,or=new O,Ln=new ji,Wr=new ji,tn=new O;class Xt extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qx++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lx(e)?ym:vm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Tt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Wr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Ln.min,Wr.min),Ln.expandByPoint(tn),tn.addVectors(Ln.max,Wr.max),Ln.expandByPoint(tn)):(Ln.expandByPoint(Wr.min),Ln.expandByPoint(Wr.max))}Ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)tn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(tn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)tn.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),tn.add(or)),s=Math.max(s,i.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new O,l[y]=new O;const c=new O,u=new O,f=new O,h=new tt,d=new tt,p=new tt,v=new O,g=new O;function m(y,b,W){c.fromBufferAttribute(i,y),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,W),h.fromBufferAttribute(r,y),d.fromBufferAttribute(r,b),p.fromBufferAttribute(r,W),u.sub(c),f.sub(c),d.sub(h),p.sub(h);const D=1/(d.x*p.y-p.x*d.y);isFinite(D)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(D),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(D),a[y].add(v),a[b].add(v),a[W].add(v),l[y].add(g),l[b].add(g),l[W].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let y=0,b=x.length;y<b;++y){const W=x[y],D=W.start,F=W.count;for(let z=D,V=D+F;z<V;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new O,S=new O,w=new O,P=new O;function L(y){w.fromBufferAttribute(s,y),P.copy(w);const b=a[y];M.copy(b),M.sub(w.multiplyScalar(w.dot(b))).normalize(),S.crossVectors(P,b);const D=S.dot(l[y])<0?-1:1;o.setXYZW(y,M.x,M.y,M.z,D)}for(let y=0,b=x.length;y<b;++y){const W=x[y],D=W.start,F=W.count;for(let z=D,V=D+F;z<V;z+=3)L(e.getX(z+0)),L(e.getX(z+1)),L(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,f=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const p=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let v=0,g=l.length;v<g;v++){a.isInterleavedBufferAttribute?d=l[v]*a.data.stride+a.offset:d=l[v]*u;for(let m=0;m<u;m++)h[p++]=c[d++]}return new On(h,u,f)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lA{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const mn=new O;class Mm{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),s=Dt(s,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new On(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Mm(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let jx=0;class Ys extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jx++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=yr,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Ic,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(i.blending=this.blending),this.side!==gs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dc&&(i.blendSrc=this.blendSrc),this.blendDst!==Ic&&(i.blendDst=this.blendDst),this.blendEquation!==Ls&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ii=new O,tc=new O,$o=new O,ss=new O,nc=new O,Zo=new O,ic=new O;class Pr{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tc.copy(e).add(t).multiplyScalar(.5),$o.copy(t).sub(e).normalize(),ss.copy(this.origin).sub(tc);const r=e.distanceTo(t)*.5,o=-this.direction.dot($o),a=ss.dot(this.direction),l=-ss.dot($o),c=ss.lengthSq(),u=Math.abs(1-o*o);let f,h,d,p;if(u>0)if(f=o*l-a,h=o*a-l,p=r*u,f>=0)if(h>=-p)if(h<=p){const v=1/u;f*=v,h*=v,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(tc).addScaledVector($o,h),d}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const i=Ii.dot(this.direction),s=Ii.dot(Ii)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,i,s,r){nc.subVectors(t,e),Zo.subVectors(i,e),ic.crossVectors(nc,Zo);let o=this.direction.dot(ic),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ss.subVectors(this.origin,e);const l=a*this.direction.dot(Zo.crossVectors(ss,Zo));if(l<0)return null;const c=a*this.direction.dot(nc.cross(ss));if(c<0||l+c>o)return null;const u=-a*ss.dot(ic);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ns extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=em,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dh=new mt,ws=new Pr,Ko=new $i,Ih=new O,Jo=new O,Qo=new O,ea=new O,sc=new O,ta=new O,Lh=new O,na=new O;class nn extends Yt{constructor(e=new Xt,t=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(sc.fromBufferAttribute(f,e),o?ta.addScaledVector(sc,u):ta.addScaledVector(sc.sub(t),u))}t.add(ta)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(Ko.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Ko,Ih)===null||ws.origin.distanceToSquared(Ih)>(e.far-e.near)**2))&&(Dh.copy(r).invert(),ws.copy(e.ray).applyMatrix4(Dh),!(i.boundingBox!==null&&ws.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let S=x,w=M;S<w;S+=3){const P=a.getX(S),L=a.getX(S+1),y=a.getX(S+2);s=ia(this,m,e,i,c,u,f,P,L,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){const x=a.getX(g),M=a.getX(g+1),S=a.getX(g+2);s=ia(this,o,e,i,c,u,f,x,M,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=h.length;p<v;p++){const g=h[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),M=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let S=x,w=M;S<w;S+=3){const P=S,L=S+1,y=S+2;s=ia(this,m,e,i,c,u,f,P,L,y),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let g=p,m=v;g<m;g+=3){const x=g,M=g+1,S=g+2;s=ia(this,o,e,i,c,u,f,x,M,S),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function $x(n,e,t,i,s,r,o,a){let l;if(e.side===Dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===gs,a),l===null)return null;na.copy(a),na.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(na);return c<t.near||c>t.far?null:{distance:c,point:na.clone(),object:n}}function ia(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Jo),n.getVertexPosition(l,Qo),n.getVertexPosition(c,ea);const u=$x(n,e,t,i,Jo,Qo,ea,Lh);if(u){const f=new O;ei.getBarycoord(Lh,Jo,Qo,ea,f),s&&(u.uv=ei.getInterpolatedAttribute(s,a,l,c,f,new tt)),r&&(u.uv1=ei.getInterpolatedAttribute(r,a,l,c,f,new tt)),o&&(u.normal=ei.getInterpolatedAttribute(o,a,l,c,f,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};ei.getNormal(Jo,Qo,ea,h.normal),u.face=h,u.barycoord=f}return u}const Nh=new O,Uh=new kt,Fh=new kt,Zx=new O,Oh=new mt,sa=new O,rc=new $i,Bh=new mt,oc=new Pr;class cA extends nn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fh,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ji),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sa),this.boundingBox.expandByPoint(sa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $i),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sa),this.boundingSphere.expandByPoint(sa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rc.copy(this.boundingSphere),rc.applyMatrix4(s),e.ray.intersectsSphere(rc)!==!1&&(Bh.copy(s).invert(),oc.copy(e.ray).applyMatrix4(Bh),!(this.boundingBox!==null&&oc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new kt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===K0?this.bindMatrixInverse.copy(this.bindMatrix).invert():$e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Uh.fromBufferAttribute(s.attributes.skinIndex,e),Fh.fromBufferAttribute(s.attributes.skinWeight,e),Nh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Fh.getComponent(r);if(o!==0){const a=Uh.getComponent(r);Oh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Zx.copy(Nh).applyMatrix4(Oh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Kx extends Yt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lf extends pn{constructor(e=null,t=1,i=1,s,r,o,a,l,c=rn,u=rn,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zh=new mt,Jx=new mt;class Sm{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){$e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new mt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Jx;zh.multiplyMatrices(a,t[r]),zh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Sm(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new lf(t,e,e,Wn,Gn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&($e("Skeleton: No bone found with UUID:",r),o=new Kx),this.bones.push(o),this.boneInverses.push(new mt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class kh extends On{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ar=new mt,Vh=new mt,ra=[],Hh=new ji,Qx=new mt,Xr=new nn,Yr=new $i;class uA extends nn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new kh(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Qx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ji),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),Hh.copy(e.boundingBox).applyMatrix4(ar),this.boundingBox.union(Hh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ar),Yr.copy(e.boundingSphere).applyMatrix4(ar),this.boundingSphere.union(Yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(i),e.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ar),Vh.multiplyMatrices(i,ar),Xr.matrixWorld=Vh,Xr.raycast(e,ra);for(let o=0,a=ra.length;o<a;o++){const l=ra[o];l.instanceId=r,l.object=this,t.push(l)}ra.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new kh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new lf(new Float32Array(s*this.count),s,this.count,Ju,Gn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ac=new O,ev=new O,tv=new lt;class Fi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=ac.subVectors(i,t).cross(ev.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ac),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||tv.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new $i,nv=new tt(.5,.5),oa=new O;class cf{constructor(e=new Fi,t=new Fi,i=new Fi,s=new Fi,r=new Fi,o=new Fi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=vi,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],x=r[12],M=r[13],S=r[14],w=r[15];if(s[0].setComponents(c-o,d-u,m-p,w-x).normalize(),s[1].setComponents(c+o,d+u,m+p,w+x).normalize(),s[2].setComponents(c+a,d+f,m+v,w+M).normalize(),s[3].setComponents(c-a,d-f,m-v,w-M).normalize(),i)s[4].setComponents(l,h,g,S).normalize(),s[5].setComponents(c-l,d-h,m-g,w-S).normalize();else if(s[4].setComponents(c-l,d-h,m-g,w-S).normalize(),t===vi)s[5].setComponents(c+l,d+h,m+g,w+S).normalize();else if(t===vo)s[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){As.center.set(0,0,0);const t=nv.distanceTo(e.center);return As.radius=.7071067811865476+t,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(oa.x=s.normal.x>0?e.max.x:e.min.x,oa.y=s.normal.y>0?e.max.y:e.min.y,oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Su extends Ys{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wa=new O,Xa=new O,Gh=new mt,qr=new Pr,aa=new $i,lc=new O,Wh=new O;class uf extends Yt{constructor(e=new Xt,t=new Su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Wa.fromBufferAttribute(t,s-1),Xa.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Wa.distanceTo(Xa);e.setAttribute("lineDistance",new Tt(i,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),aa.radius+=r,e.ray.intersectsSphere(aa)===!1)return;Gh.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Gh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=d,g=p-1;v<g;v+=c){const m=u.getX(v),x=u.getX(v+1),M=la(this,e,qr,l,m,x,v);M&&t.push(M)}if(this.isLineLoop){const v=u.getX(p-1),g=u.getX(d),m=la(this,e,qr,l,v,g,p-1);m&&t.push(m)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=d,g=p-1;v<g;v+=c){const m=la(this,e,qr,l,v,v+1,v);m&&t.push(m)}if(this.isLineLoop){const v=la(this,e,qr,l,p-1,d,p-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function la(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Wa.fromBufferAttribute(a,s),Xa.fromBufferAttribute(a,r),t.distanceSqToSegment(Wa,Xa,lc,Wh)>i)return;lc.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(lc);if(!(c<e.near||c>e.far))return{distance:c,point:Wh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Xh=new O,Yh=new O;class fA extends uf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Xh.fromBufferAttribute(t,s),Yh.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xh.distanceTo(Yh);e.setAttribute("lineDistance",new Tt(i,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class iv extends uf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ya extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const qh=new mt,bu=new Pr,ca=new $i,ua=new O;class Eu extends Yt{constructor(e=new Xt,t=new Ya){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ca.copy(i.boundingSphere),ca.applyMatrix4(s),ca.radius+=r,e.ray.intersectsSphere(ca)===!1)return;qh.copy(s).invert(),bu.copy(e.ray).applyMatrix4(qh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,v=d;p<v;p++){const g=c.getX(p);ua.fromBufferAttribute(f,g),jh(ua,g,l,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let p=h,v=d;p<v;p++)ua.fromBufferAttribute(f,p),jh(ua,p,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jh(n,e,t,i,s,r,o){const a=bu.distanceSqToPoint(n);if(a<t){const l=new O;bu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class bm extends pn{constructor(e=[],t=Vs,i,s,r,o,a,l,c,u){super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mo extends pn{constructor(e,t,i=Ei,s,r,o,a=rn,l=rn,c,u=Yi,f=1){if(u!==Yi&&u!==Os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new of(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sv extends Mo{constructor(e,t=Ei,i=Vs,s,r,o=rn,a=rn,l,c=Yi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Em extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hs extends Xt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,i,t,e,o,r,0),p("z","y","x",1,-1,i,t,-e,o,r,1),p("x","z","y",1,1,e,i,t,s,o,2),p("x","z","y",1,-1,e,i,-t,s,o,3),p("x","y","z",1,-1,e,t,i,s,r,4),p("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(u,3)),this.setAttribute("uv",new Tt(f,2));function p(v,g,m,x,M,S,w,P,L,y,b){const W=S/L,D=w/y,F=S/2,z=w/2,V=P/2,j=L+1,H=y+1;let k=0,ne=0;const oe=new O;for(let we=0;we<H;we++){const Ae=we*D-z;for(let de=0;de<j;de++){const Ke=de*W-F;oe[v]=Ke*x,oe[g]=Ae*M,oe[m]=V,c.push(oe.x,oe.y,oe.z),oe[v]=0,oe[g]=0,oe[m]=P>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(de/L),f.push(1-we/y),k+=1}}for(let we=0;we<y;we++)for(let Ae=0;Ae<L;Ae++){const de=h+Ae+j*we,Ke=h+Ae+j*(we+1),vt=h+(Ae+1)+j*(we+1),ft=h+(Ae+1)+j*we;l.push(de,Ke,ft),l.push(Ke,vt,ft),ne+=6}a.addGroup(d,ne,b),d+=ne,h+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ff extends Xt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new O,u=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=t;f++,h+=3){const d=i+f/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(a,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class hf extends Xt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],f=[],h=[],d=[];let p=0;const v=[],g=i/2;let m=0;x(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Tt(f,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(d,2));function x(){const S=new O,w=new O;let P=0;const L=(t-e)/i;for(let y=0;y<=r;y++){const b=[],W=y/r,D=W*(t-e)+e;for(let F=0;F<=s;F++){const z=F/s,V=z*l+a,j=Math.sin(V),H=Math.cos(V);w.x=D*j,w.y=-W*i+g,w.z=D*H,f.push(w.x,w.y,w.z),S.set(j,L,H).normalize(),h.push(S.x,S.y,S.z),d.push(z,1-W),b.push(p++)}v.push(b)}for(let y=0;y<s;y++)for(let b=0;b<r;b++){const W=v[b][y],D=v[b+1][y],F=v[b+1][y+1],z=v[b][y+1];(e>0||b!==0)&&(u.push(W,D,z),P+=3),(t>0||b!==r-1)&&(u.push(D,F,z),P+=3)}c.addGroup(m,P,0),m+=P}function M(S){const w=p,P=new tt,L=new O;let y=0;const b=S===!0?e:t,W=S===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,g*W,0),h.push(0,W,0),d.push(.5,.5),p++;const D=p;for(let F=0;F<=s;F++){const V=F/s*l+a,j=Math.cos(V),H=Math.sin(V);L.x=b*H,L.y=g*W,L.z=b*j,f.push(L.x,L.y,L.z),h.push(0,W,0),P.x=j*.5+.5,P.y=H*.5*W+.5,d.push(P.x,P.y),p++}for(let F=0;F<s;F++){const z=w+F,V=D+F;S===!0?u.push(V,V+1,z):u.push(V+1,V,z),y+=3}c.addGroup(m,y,S===!0?1:2),m+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hf(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}function rv(n,e,t=2){const i=e&&e.length,s=i?e[0]*t:n.length;let r=Tm(n,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(i&&(r=uv(n,e,r,t)),n.length>80*t){a=n[0],l=n[1];let u=a,f=l;for(let h=t;h<s;h+=t){const d=n[h],p=n[h+1];d<a&&(a=d),p<l&&(l=p),d>u&&(u=d),p>f&&(f=p)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return So(r,o,t,a,l,c,0),o}function Tm(n,e,t,i,s){let r;if(s===Mv(n,e,t,i)>0)for(let o=e;o<t;o+=i)r=$h(o/i|0,n[o],n[o+1],r);else for(let o=t-i;o>=e;o-=i)r=$h(o/i|0,n[o],n[o+1],r);return r&&Cr(r,r.next)&&(Eo(r),r=r.next),r}function Gs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Cr(t,t.next)||Wt(t.prev,t,t.next)===0)){if(Eo(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function So(n,e,t,i,s,r,o){if(!n)return;!o&&r&&mv(n,i,s,r);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(r?av(n,i,s,r):ov(n)){e.push(l.i,n.i,c.i),Eo(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=lv(Gs(n),e),So(n,e,t,i,s,r,2)):o===2&&cv(n,e,t,i,s,r):So(Gs(n),e,t,i,s,r,1);break}}}function ov(n){const e=n.prev,t=n,i=n.next;if(Wt(e,t,i)>=0)return!1;const s=e.x,r=t.x,o=i.x,a=e.y,l=t.y,c=i.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c);let p=i.next;for(;p!==e;){if(p.x>=u&&p.x<=h&&p.y>=f&&p.y<=d&&Jr(s,a,r,l,o,c,p.x,p.y)&&Wt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function av(n,e,t,i){const s=n.prev,r=n,o=n.next;if(Wt(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,l,c),p=Math.min(u,f,h),v=Math.max(a,l,c),g=Math.max(u,f,h),m=Tu(d,p,e,t,i),x=Tu(v,g,e,t,i);let M=n.prevZ,S=n.nextZ;for(;M&&M.z>=m&&S&&S.z<=x;){if(M.x>=d&&M.x<=v&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Jr(a,u,l,f,c,h,M.x,M.y)&&Wt(M.prev,M,M.next)>=0||(M=M.prevZ,S.x>=d&&S.x<=v&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&Jr(a,u,l,f,c,h,S.x,S.y)&&Wt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=v&&M.y>=p&&M.y<=g&&M!==s&&M!==o&&Jr(a,u,l,f,c,h,M.x,M.y)&&Wt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;S&&S.z<=x;){if(S.x>=d&&S.x<=v&&S.y>=p&&S.y<=g&&S!==s&&S!==o&&Jr(a,u,l,f,c,h,S.x,S.y)&&Wt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function lv(n,e){let t=n;do{const i=t.prev,s=t.next.next;!Cr(i,s)&&Am(i,t,t.next,s)&&bo(i,s)&&bo(s,i)&&(e.push(i.i,t.i,s.i),Eo(t),Eo(t.next),t=n=s),t=t.next}while(t!==n);return Gs(t)}function cv(n,e,t,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xv(o,a)){let l=Cm(o,a);o=Gs(o,o.next),l=Gs(l,l.next),So(o,e,t,i,s,r,0),So(l,e,t,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function uv(n,e,t,i){const s=[];for(let r=0,o=e.length;r<o;r++){const a=e[r]*i,l=r<o-1?e[r+1]*i:n.length,c=Tm(n,a,l,i,!1);c===c.next&&(c.steiner=!0),s.push(_v(c))}s.sort(fv);for(let r=0;r<s.length;r++)t=hv(s[r],t);return t}function fv(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function hv(n,e){const t=dv(n,e);if(!t)return e;const i=Cm(t,n);return Gs(i,i.next),Gs(t,t.next)}function dv(n,e){let t=e;const i=n.x,s=n.y;let r=-1/0,o;if(Cr(n,t))return t;do{if(Cr(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let u=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&wm(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){const f=Math.abs(s-t.y)/(i-t.x);bo(t,n)&&(f<u||f===u&&(t.x>o.x||t.x===o.x&&pv(o,t)))&&(o=t,u=f)}t=t.next}while(t!==a);return o}function pv(n,e){return Wt(n.prev,n,e.prev)<0&&Wt(e.next,n,n.next)<0}function mv(n,e,t,i){let s=n;do s.z===0&&(s.z=Tu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,gv(s)}function gv(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,t*=2}while(e>1);return n}function Tu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function _v(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function wm(n,e,t,i,s,r,o,a){return(s-o)*(e-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(i-a)}function Jr(n,e,t,i,s,r,o,a){return!(n===o&&e===a)&&wm(n,e,t,i,s,r,o,a)}function xv(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!vv(n,e)&&(bo(n,e)&&bo(e,n)&&yv(n,e)&&(Wt(n.prev,n,e.prev)||Wt(n,e.prev,e))||Cr(n,e)&&Wt(n.prev,n,n.next)>0&&Wt(e.prev,e,e.next)>0)}function Wt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Cr(n,e){return n.x===e.x&&n.y===e.y}function Am(n,e,t,i){const s=ha(Wt(n,e,t)),r=ha(Wt(n,e,i)),o=ha(Wt(t,i,n)),a=ha(Wt(t,i,e));return!!(s!==r&&o!==a||s===0&&fa(n,t,e)||r===0&&fa(n,i,e)||o===0&&fa(t,n,i)||a===0&&fa(t,e,i))}function fa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function ha(n){return n>0?1:n<0?-1:0}function vv(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Am(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function bo(n,e){return Wt(n.prev,n,n.next)<0?Wt(n,e,n.next)>=0&&Wt(n,n.prev,e)>=0:Wt(n,e,n.prev)<0||Wt(n,n.next,e)<0}function yv(n,e){let t=n,i=!1;const s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Cm(n,e){const t=wu(n.i,n.x,n.y),i=wu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function $h(n,e,t,i){const s=wu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Eo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function wu(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mv(n,e,t,i){let s=0;for(let r=e,o=t-i;r<t;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}class Sv{static triangulate(e,t,i=2){return rv(e,t,i)}}class df{static area(e){const t=e.length;let i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return df.area(e)<0}static triangulateShape(e,t){const i=[],s=[],r=[];Zh(e),Kh(i,e);let o=e.length;t.forEach(Zh);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,Kh(i,t[l]);const a=Sv.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Zh(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Kh(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class fl extends Xt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const x=m*h-o;for(let M=0;M<c;M++){const S=M*f-r;p.push(S,-x,0),v.push(0,0,1),g.push(M/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const M=x+c*m,S=x+c*(m+1),w=x+1+c*(m+1),P=x+1+c*m;d.push(M,S,P),d.push(S,w,P)}this.setIndex(d),this.setAttribute("position",new Tt(p,3)),this.setAttribute("normal",new Tt(v,3)),this.setAttribute("uv",new Tt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Rr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function _n(n){const e={};for(let t=0;t<n.length;t++){const i=Rr(n[t]);for(const s in i)e[s]=i[s]}return e}function bv(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rm(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Ev={clone:Rr,merge:_n};var Tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tv,this.fragmentShader=wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rr(e.uniforms),this.uniformsGroups=bv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Av extends oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Cv extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mm,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hA extends Cv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Rv extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ex,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Pv extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function da(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Dv(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Jh(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Pm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Co{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Iv extends Co{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dh,endingEnd:dh}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ph:r=e,a=2*t-i;break;case mh:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case ph:o=e,l=2*i-t;break;case mh:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(i-t)/(s-t),v=p*p,g=v*p,m=-h*g+2*h*v-h*p,x=(1+h)*g+(-1.5-2*h)*v+(-.5+h)*p+1,M=(-1-d)*g+(1.5+d)*v+.5*p,S=d*g-d*v;for(let w=0;w!==a;++w)r[w]=m*o[u+w]+x*o[c+w]+M*o[l+w]+S*o[f+w];return r}}class Lv extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class Nv extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Uv extends Co{interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.settings||this.DefaultSettings_,f=u.inTangents,h=u.outTangents;if(!f||!h){const v=(i-t)/(s-t),g=1-v;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*v;return r}const d=a*2,p=e-1;for(let v=0;v!==a;++v){const g=o[c+v],m=o[l+v],x=p*d+v*2,M=h[x],S=h[x+1],w=e*d+v*2,P=f[w],L=f[w+1];let y=(i-t)/(s-t),b,W,D,F,z;for(let V=0;V<8;V++){b=y*y,W=b*y,D=1-y,F=D*D,z=F*D;const H=z*t+3*F*y*M+3*D*b*P+W*s-i;if(Math.abs(H)<1e-10)break;const k=3*F*(M-t)+6*D*y*(P-M)+3*b*(s-P);if(Math.abs(k)<1e-10)break;y=y-H/k,y=Math.max(0,Math.min(1,y))}r[v]=z*g+3*F*y*S+3*D*b*L+W*m}return r}}class ai{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=da(t,this.TimeBufferType),this.values=da(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:da(e.times,Array),values:da(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Nv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Lv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Iv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Uv(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case ka:t=this.InterpolantFactoryMethodDiscrete;break;case yu:t=this.InterpolantFactoryMethodLinear;break;case Ol:t=this.InterpolantFactoryMethodSmooth;break;case hh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $e("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ka;case this.InterpolantFactoryMethodLinear:return yu;case this.InterpolantFactoryMethodSmooth:return Ol;case this.InterpolantFactoryMethodBezier:return hh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Je("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&cx(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ol,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*i,h=f-i,d=f+i;for(let p=0;p!==i;++p){const v=t[f+p];if(v!==t[h+p]||v!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=yu;class Dr extends ai{constructor(e,t,i){super(e,t,i)}}Dr.prototype.ValueTypeName="bool";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=ka;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Dm extends ai{constructor(e,t,i,s){super(e,t,i,s)}}Dm.prototype.ValueTypeName="color";class qa extends ai{constructor(e,t,i,s){super(e,t,i,s)}}qa.prototype.ValueTypeName="number";class Fv extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Jt.slerpFlat(r,0,o,c-a,o,c,l);return r}}class hl extends ai{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Fv(this.times,this.values,this.getValueSize(),e)}}hl.prototype.ValueTypeName="quaternion";hl.prototype.InterpolantFactoryMethodSmooth=void 0;class Ir extends ai{constructor(e,t,i){super(e,t,i)}}Ir.prototype.ValueTypeName="string";Ir.prototype.ValueBufferType=Array;Ir.prototype.DefaultInterpolation=ka;Ir.prototype.InterpolantFactoryMethodLinear=void 0;Ir.prototype.InterpolantFactoryMethodSmooth=void 0;class ja extends ai{constructor(e,t,i,s){super(e,t,i,s)}}ja.prototype.ValueTypeName="vector";class dA{constructor(e="",t=-1,i=[],s=Q0){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ni(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(Bv(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=i.length;r!==o;++r)t.push(ai.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Dv(l);l=Jh(l,1,u),c=Jh(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new qa(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if($e("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Je("AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,p,v){if(d.length!==0){const g=[],m=[];Pm(d,g,m,p),g.length!==0&&v.push(new f(h,g,m))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let p;for(p=0;p<h.length;p++)if(h[p].morphTargets)for(let v=0;v<h[p].morphTargets.length;v++)d[h[p].morphTargets[v]]=-1;for(const v in d){const g=[],m=[];for(let x=0;x!==h[p].morphTargets.length;++x){const M=h[p];g.push(M.time),m.push(M.morphTarget===v?1:0)}s.push(new qa(".morphTargetInfluence["+v+"]",g,m))}l=d.length*o}else{const d=".bones["+t[f].name+"]";i(ja,d+".position",h,"pos",s),i(hl,d+".quaternion",h,"rot",s),i(ja,d+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Ov(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return qa;case"vector":case"vector2":case"vector3":case"vector4":return ja;case"color":return Dm;case"quaternion":return hl;case"bool":case"boolean":return Dr;case"string":return Ir}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Bv(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ov(n.type);if(n.times===void 0){const t=[],i=[];Pm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const zi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Qh(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Qh(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Qh(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class zv{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const kv=new zv;class Lr{constructor(e){this.manager=e!==void 0?e:kv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Lr.DEFAULT_MATERIAL_NAME="__DEFAULT";const Li={};class Vv extends Error{constructor(e,t){super(e),this.response=t}}class Hv extends Lr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=zi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:i,onError:s});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&$e("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Li[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0;let v=0;const g=new ReadableStream({start(m){x();function x(){f.read().then(({done:M,value:S})=>{if(M)m.close();else{v+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let P=0,L=u.length;P<L;P++){const y=u[P];y.onProgress&&y.onProgress(w)}m.enqueue(S),x()}},M=>{m.error(M)})}}});return new Response(g)}else throw new Vv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{zi.add(`file:${e}`,c);const u=Li[e];delete Li[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Li[e];if(u===void 0)throw this.manager.itemError(e),c;delete Li[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const lr=new WeakMap;class Gv extends Lr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=zi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let f=lr.get(o);f===void 0&&(f=[],lr.set(o,f)),f.push({onLoad:t,onError:s})}return o}const a=yo("img");function l(){u(),t&&t(this);const f=lr.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}lr.delete(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),zi.remove(`image:${e}`);const h=lr.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onError&&p.onError(f)}lr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),zi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}}class pA extends Lr{constructor(e){super(e)}load(e,t,i,s){const r=new pn,o=new Gv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class dl extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const cc=new mt,ed=new O,td=new O;class pf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cf,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ed.setFromMatrixPosition(e.matrixWorld),t.position.copy(ed),td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(td),t.updateMatrixWorld(),cc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cc,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===vo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pa=new O,ma=new Jt,hi=new O;class Im extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pa,ma,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(pa,ma,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pa,ma,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new O,nd=new tt,id=new tt;class Pn extends Im{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ar*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,nd,id),t.subVectors(id,nd)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wv extends pf{constructor(){super(new Pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=Ar*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mA extends dl{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Xv extends pf{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}}class Yv extends dl{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Xv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class mf extends Im{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qv extends pf{constructor(){super(new mf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jv extends dl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new qv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class $v extends dl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class gA{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const uc=new WeakMap;class _A extends Lr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&$e("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&$e("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=zi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(uc.has(o)===!0)s&&s(uc.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return zi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),uc.set(l,c),zi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});zi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const cr=-90,ur=1;class Zv extends Yt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pn(cr,ur,e,t);s.layers=this.layers,this.add(s);const r=new Pn(cr,ur,e,t);r.layers=this.layers,this.add(r);const o=new Pn(cr,ur,e,t);o.layers=this.layers,this.add(o);const a=new Pn(cr,ur,e,t);a.layers=this.layers,this.add(a);const l=new Pn(cr,ur,e,t);l.layers=this.layers,this.add(l);const c=new Pn(cr,ur,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Kv extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const gf="\\[\\]\\.:\\/",Jv=new RegExp("["+gf+"]","g"),_f="[^"+gf+"]",Qv="[^"+gf.replace("\\.","")+"]",ey=/((?:WC+[\/:])*)/.source.replace("WC",_f),ty=/(WCOD+)?/.source.replace("WCOD",Qv),ny=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_f),iy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_f),sy=new RegExp("^"+ey+ty+ny+iy+"$"),ry=["material","materials","bones","map"];class oy{constructor(e,t,i){const s=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class It{constructor(e,t,i){this.path=t,this.parsedPath=i||It.parseTrackName(t),this.node=It.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new It.Composite(e,t,i):new It(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Jv,"")}static parseTrackName(e){const t=sy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);ry.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=It.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}It.Composite=oy;It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const sd=new mt;class ay{constructor(e,t,i=0,s=1/0){this.ray=new Pr(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new af,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sd),this}intersectObject(e,t=!0,i=[]){return Au(e,this,i,t),i.sort(rd),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Au(e[s],this,i,t);return i.sort(rd),i}}function rd(n,e){return n.distance-e.distance}function Au(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Au(r[o],e,t,!0)}}class od{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Lm extends Xs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){$e("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function ad(n,e,t,i){const s=ly(i);switch(t){case dm:return n*e;case Ju:return n*e/s.components*s.byteLength;case Qu:return n*e/s.components*s.byteLength;case Tr:return n*e*2/s.components*s.byteLength;case ef:return n*e*2/s.components*s.byteLength;case pm:return n*e*3/s.components*s.byteLength;case Wn:return n*e*4/s.components*s.byteLength;case tf:return n*e*4/s.components*s.byteLength;case wa:case Aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Ra:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gc:case Xc:return Math.max(n,16)*Math.max(e,8)/4;case Hc:case Wc:return Math.max(n,8)*Math.max(e,8)/2;case Yc:case qc:case $c:case Zc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case jc:case Kc:case Jc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case tu:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case nu:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case iu:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case su:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ru:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ou:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case au:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case lu:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case cu:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uu:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case hu:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case du:case pu:case mu:return Math.ceil(n/4)*Math.ceil(e/4)*16;case gu:case _u:return Math.ceil(n/4)*Math.ceil(e/4)*8;case xu:case vu:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ly(n){switch(n){case Un:case cm:return{byteLength:1,components:1};case _o:case um:case Xi:return{byteLength:2,components:1};case Zu:case Ku:return{byteLength:2,components:4};case Ei:case $u:case Gn:return{byteLength:4,components:1};case fm:case hm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ju}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ju);function Nm(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function cy(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],v=f[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,hy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,my=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_y=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,vy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,My=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,by=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ey=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ty=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ay=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ry=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Py=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ly=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ny=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Oy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,By=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ky=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,BM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,YM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$M=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_S=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ES=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,CS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,PS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,BS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,VS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:uy,alphahash_pars_fragment:fy,alphamap_fragment:hy,alphamap_pars_fragment:dy,alphatest_fragment:py,alphatest_pars_fragment:my,aomap_fragment:gy,aomap_pars_fragment:_y,batching_pars_vertex:xy,batching_vertex:vy,begin_vertex:yy,beginnormal_vertex:My,bsdfs:Sy,iridescence_fragment:by,bumpmap_pars_fragment:Ey,clipping_planes_fragment:Ty,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Ay,clipping_planes_vertex:Cy,color_fragment:Ry,color_pars_fragment:Py,color_pars_vertex:Dy,color_vertex:Iy,common:Ly,cube_uv_reflection_fragment:Ny,defaultnormal_vertex:Uy,displacementmap_pars_vertex:Fy,displacementmap_vertex:Oy,emissivemap_fragment:By,emissivemap_pars_fragment:zy,colorspace_fragment:ky,colorspace_pars_fragment:Vy,envmap_fragment:Hy,envmap_common_pars_fragment:Gy,envmap_pars_fragment:Wy,envmap_pars_vertex:Xy,envmap_physical_pars_fragment:nM,envmap_vertex:Yy,fog_vertex:qy,fog_pars_vertex:jy,fog_fragment:$y,fog_pars_fragment:Zy,gradientmap_pars_fragment:Ky,lightmap_pars_fragment:Jy,lights_lambert_fragment:Qy,lights_lambert_pars_fragment:eM,lights_pars_begin:tM,lights_toon_fragment:iM,lights_toon_pars_fragment:sM,lights_phong_fragment:rM,lights_phong_pars_fragment:oM,lights_physical_fragment:aM,lights_physical_pars_fragment:lM,lights_fragment_begin:cM,lights_fragment_maps:uM,lights_fragment_end:fM,logdepthbuf_fragment:hM,logdepthbuf_pars_fragment:dM,logdepthbuf_pars_vertex:pM,logdepthbuf_vertex:mM,map_fragment:gM,map_pars_fragment:_M,map_particle_fragment:xM,map_particle_pars_fragment:vM,metalnessmap_fragment:yM,metalnessmap_pars_fragment:MM,morphinstance_vertex:SM,morphcolor_vertex:bM,morphnormal_vertex:EM,morphtarget_pars_vertex:TM,morphtarget_vertex:wM,normal_fragment_begin:AM,normal_fragment_maps:CM,normal_pars_fragment:RM,normal_pars_vertex:PM,normal_vertex:DM,normalmap_pars_fragment:IM,clearcoat_normal_fragment_begin:LM,clearcoat_normal_fragment_maps:NM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:FM,opaque_fragment:OM,packing:BM,premultiplied_alpha_fragment:zM,project_vertex:kM,dithering_fragment:VM,dithering_pars_fragment:HM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:WM,shadowmap_pars_fragment:XM,shadowmap_pars_vertex:YM,shadowmap_vertex:qM,shadowmask_pars_fragment:jM,skinbase_vertex:$M,skinning_pars_vertex:ZM,skinning_vertex:KM,skinnormal_vertex:JM,specularmap_fragment:QM,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:sS,uv_pars_fragment:rS,uv_pars_vertex:oS,uv_vertex:aS,worldpos_vertex:lS,background_vert:cS,background_frag:uS,backgroundCube_vert:fS,backgroundCube_frag:hS,cube_vert:dS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distance_vert:_S,distance_frag:xS,equirect_vert:vS,equirect_frag:yS,linedashed_vert:MS,linedashed_frag:SS,meshbasic_vert:bS,meshbasic_frag:ES,meshlambert_vert:TS,meshlambert_frag:wS,meshmatcap_vert:AS,meshmatcap_frag:CS,meshnormal_vert:RS,meshnormal_frag:PS,meshphong_vert:DS,meshphong_frag:IS,meshphysical_vert:LS,meshphysical_frag:NS,meshtoon_vert:US,meshtoon_frag:FS,points_vert:OS,points_frag:BS,shadow_vert:zS,shadow_frag:kS,sprite_vert:VS,sprite_frag:HS},Ue={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},_i={basic:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:_n([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:_n([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:_n([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new rt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:_n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:_n([Ue.points,Ue.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:_n([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:_n([Ue.common,Ue.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:_n([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:_n([Ue.sprite,Ue.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:_n([Ue.common,Ue.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:_n([Ue.lights,Ue.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};_i.physical={uniforms:_n([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const ga={r:0,b:0,g:0},Cs=new ri,GS=new mt;function WS(n,e,t,i,s,r){const o=new rt(0);let a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const S=x.backgroundBlurriness>0;M=e.get(M,S)}return M}function p(x){let M=!1;const S=d(x);S===null?g(o,a):S&&S.isColor&&(g(S,1),M=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||M)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(x,M){const S=d(M);S&&(S.isCubeTexture||S.mapping===ul)?(c===void 0&&(c=new nn(new Hs(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Rr(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Cs.copy(M.backgroundRotation),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(Cs)),c.material.toneMapped=Mt.getTransfer(S.colorSpace)!==Pt,(u!==S||f!==S.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new nn(new fl(2,2),new oi({name:"BackgroundMaterial",uniforms:Rr(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(S.colorSpace)!==Pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,h=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,M){x.getRGB(ga,Rm(n)),t.buffers.color.setClear(ga.r,ga.g,ga.b,M,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:p,addToRenderList:v,dispose:m}}function XS(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(D,F,z,V,j){let H=!1;const k=f(D,V,z,F);r!==k&&(r=k,c(r.object)),H=d(D,V,z,j),H&&p(D,V,z,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,S(D,F,z,V),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function u(D){return n.deleteVertexArray(D)}function f(D,F,z,V){const j=V.wireframe===!0;let H=i[F.id];H===void 0&&(H={},i[F.id]=H);const k=D.isInstancedMesh===!0?D.id:0;let ne=H[k];ne===void 0&&(ne={},H[k]=ne);let oe=ne[z.id];oe===void 0&&(oe={},ne[z.id]=oe);let we=oe[j];return we===void 0&&(we=h(l()),oe[j]=we),we}function h(D){const F=[],z=[],V=[];for(let j=0;j<t;j++)F[j]=0,z[j]=0,V[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:z,attributeDivisors:V,object:D,attributes:{},index:null}}function d(D,F,z,V){const j=r.attributes,H=F.attributes;let k=0;const ne=z.getAttributes();for(const oe in ne)if(ne[oe].location>=0){const Ae=j[oe];let de=H[oe];if(de===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(de=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(de=D.instanceColor)),Ae===void 0||Ae.attribute!==de||de&&Ae.data!==de.data)return!0;k++}return r.attributesNum!==k||r.index!==V}function p(D,F,z,V){const j={},H=F.attributes;let k=0;const ne=z.getAttributes();for(const oe in ne)if(ne[oe].location>=0){let Ae=H[oe];Ae===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(Ae=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(Ae=D.instanceColor));const de={};de.attribute=Ae,Ae&&Ae.data&&(de.data=Ae.data),j[oe]=de,k++}r.attributes=j,r.attributesNum=k,r.index=V}function v(){const D=r.newAttributes;for(let F=0,z=D.length;F<z;F++)D[F]=0}function g(D){m(D,0)}function m(D,F){const z=r.newAttributes,V=r.enabledAttributes,j=r.attributeDivisors;z[D]=1,V[D]===0&&(n.enableVertexAttribArray(D),V[D]=1),j[D]!==F&&(n.vertexAttribDivisor(D,F),j[D]=F)}function x(){const D=r.newAttributes,F=r.enabledAttributes;for(let z=0,V=F.length;z<V;z++)F[z]!==D[z]&&(n.disableVertexAttribArray(z),F[z]=0)}function M(D,F,z,V,j,H,k){k===!0?n.vertexAttribIPointer(D,F,z,j,H):n.vertexAttribPointer(D,F,z,V,j,H)}function S(D,F,z,V){v();const j=V.attributes,H=z.getAttributes(),k=F.defaultAttributeValues;for(const ne in H){const oe=H[ne];if(oe.location>=0){let we=j[ne];if(we===void 0&&(ne==="instanceMatrix"&&D.instanceMatrix&&(we=D.instanceMatrix),ne==="instanceColor"&&D.instanceColor&&(we=D.instanceColor)),we!==void 0){const Ae=we.normalized,de=we.itemSize,Ke=e.get(we);if(Ke===void 0)continue;const vt=Ke.buffer,ft=Ke.type,le=Ke.bytesPerElement,ye=ft===n.INT||ft===n.UNSIGNED_INT||we.gpuType===$u;if(we.isInterleavedBufferAttribute){const Me=we.data,Ze=Me.stride,ie=we.offset;if(Me.isInstancedInterleavedBuffer){for(let me=0;me<oe.locationSize;me++)m(oe.location+me,Me.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let me=0;me<oe.locationSize;me++)g(oe.location+me);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let me=0;me<oe.locationSize;me++)M(oe.location+me,de/oe.locationSize,ft,Ae,Ze*le,(ie+de/oe.locationSize*me)*le,ye)}else{if(we.isInstancedBufferAttribute){for(let Me=0;Me<oe.locationSize;Me++)m(oe.location+Me,we.meshPerAttribute);D.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Me=0;Me<oe.locationSize;Me++)g(oe.location+Me);n.bindBuffer(n.ARRAY_BUFFER,vt);for(let Me=0;Me<oe.locationSize;Me++)M(oe.location+Me,de/oe.locationSize,ft,Ae,de*le,de/oe.locationSize*Me*le,ye)}}else if(k!==void 0){const Ae=k[ne];if(Ae!==void 0)switch(Ae.length){case 2:n.vertexAttrib2fv(oe.location,Ae);break;case 3:n.vertexAttrib3fv(oe.location,Ae);break;case 4:n.vertexAttrib4fv(oe.location,Ae);break;default:n.vertexAttrib1fv(oe.location,Ae)}}}}x()}function w(){b();for(const D in i){const F=i[D];for(const z in F){const V=F[z];for(const j in V){const H=V[j];for(const k in H)u(H[k].object),delete H[k];delete V[j]}}delete i[D]}}function P(D){if(i[D.id]===void 0)return;const F=i[D.id];for(const z in F){const V=F[z];for(const j in V){const H=V[j];for(const k in H)u(H[k].object),delete H[k];delete V[j]}}delete i[D.id]}function L(D){for(const F in i){const z=i[F];for(const V in z){const j=z[V];if(j[D.id]===void 0)continue;const H=j[D.id];for(const k in H)u(H[k].object),delete H[k];delete j[D.id]}}}function y(D){for(const F in i){const z=i[F],V=D.isInstancedMesh===!0?D.id:0,j=z[V];if(j!==void 0){for(const H in j){const k=j[H];for(const ne in k)u(k[ne].object),delete k[ne];delete j[H]}delete z[V],Object.keys(z).length===0&&delete i[F]}}}function b(){W(),o=!0,r!==s&&(r=s,c(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:W,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfObject:y,releaseStatesOfProgram:L,initAttributes:v,enableAttribute:g,disableUnusedAttributes:x}}function YS(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let p=0;p<f;p++)d+=u[p];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)o(c[p],u[p],h[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let p=0;for(let v=0;v<f;v++)p+=u[v]*h[v];t.update(p,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qS(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Wn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const y=L===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Un&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Gn&&!y)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),M=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:S,maxSamples:w,samples:P}}function jS(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Fi,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,m=n.get(f);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{const x=r?0:i,M=x*4;let S=m.clippingState||null;l.value=S,S=u(p,h,M,d);for(let w=0;w!==M;++w)S[w]=t[w];m.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,p){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=d+v*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let M=0,S=d;M!==v;++M,S+=4)o.copy(f[M]).applyMatrix4(x,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}const hs=4,ld=[.125,.215,.35,.446,.526,.582],Us=20,$S=256,jr=new mf,cd=new rt;let fc=null,hc=0,dc=0,pc=!1;const ZS=new O;class ud{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=ZS}=r;fc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fc,hc,dc),this._renderer.xr.enabled=pc,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fc=this._renderer.getRenderTarget(),hc=this._renderer.getActiveCubeFace(),dc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Xi,format:Wn,colorSpace:wr,depthBuffer:!1},s=fd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fd(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KS(r)),this._blurMaterial=QS(r,e,t),this._ggxMaterial=JS(r,e,t)}return s}_compileMaterial(e){const t=new nn(new Xt,e);this._renderer.compile(t,jr)}_sceneToCubeUV(e,t,i,s,r){const l=new Pn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(cd),f.toneMapping=Mi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new nn(new Hs,new Ns({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let m=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,m=!0):(g.color.copy(cd),m=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[M],r.y,r.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[M]));const w=this._cubeSize;fr(s,S*w,M>2?w:0,w,w),f.setRenderTarget(s),m&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Vs||e.mapping===Er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;fr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,jr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:p}=this,v=this._sizeLods[i],g=3*v*(i>p-hs?i-p+hs:0),m=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,fr(r,g,m,3*v,2*v),s.setRenderTarget(r),s.render(a,jr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-i,fr(e,g,m,3*v,2*v),s.setRenderTarget(e),s.render(a,jr)}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const h=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Us-1),v=r/p,g=isFinite(r)?1+Math.floor(u*v):Us;g>Us&&$e(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Us}`);const m=[];let x=0;for(let L=0;L<Us;++L){const y=L/v,b=Math.exp(-y*y/2);m.push(b),L===0?x+=b:L<g&&(x+=2*b)}for(let L=0;L<m.length;L++)m[L]=m[L]/x;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:M}=this;h.dTheta.value=p,h.mipInt.value=M-i;const S=this._sizeLods[s],w=3*S*(s>M-hs?s-M+hs:0),P=4*(this._cubeSize-S);fr(t,w,P,3*S,2*S),l.setRenderTarget(t),l.render(f,jr)}}function KS(n){const e=[],t=[],i=[];let s=n;const r=n-hs+1+ld.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-hs?l=ld[o-n+hs-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,v=3,g=2,m=1,x=new Float32Array(v*p*d),M=new Float32Array(g*p*d),S=new Float32Array(m*p*d);for(let P=0;P<d;P++){const L=P%3*2/3-1,y=P>2?0:-1,b=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];x.set(b,v*p*P),M.set(h,g*p*P);const W=[P,P,P,P,P,P];S.set(W,m*p*P)}const w=new Xt;w.setAttribute("position",new On(x,v)),w.setAttribute("uv",new On(M,g)),w.setAttribute("faceIndex",new On(S,m)),i.push(new nn(w,null)),s>hs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function fd(n,e,t){const i=new Si(n,e,t);return i.texture.mapping=ul,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function JS(n,e,t){return new oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$S,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function QS(n,e,t){const i=new Float32Array(Us),s=new O(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function hd(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function dd(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Um extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new bm(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Hs(5,5,5),r=new oi({name:"CubemapFromEquirect",uniforms:Rr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Dn,blending:ki});r.uniforms.tEquirect.value=t;const o=new nn(s,r),a=t.minFilter;return t.minFilter===Fs&&(t.minFilter=hn),new Zv(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}function eb(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Nl||d===Ul)if(e.has(h)){const p=e.get(h).texture;return a(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const v=new Um(p.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),a(v.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const d=h.mapping,p=d===Nl||d===Ul,v=d===Vs||d===Er;if(p||v){let g=t.get(h);const m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return i===null&&(i=new ud(n)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const x=h.image;return p&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new ud(n)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,d){return d===Nl?h.mapping=Vs:d===Ul&&(h.mapping=Er),h}function l(h){let d=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function tb(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ga("WebGLRenderer: "+i+" extension not supported."),s}}}function nb(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,p=f.attributes.position;let v=0;if(p===void 0)return;if(d!==null){const x=d.array;v=d.version;for(let M=0,S=x.length;M<S;M+=3){const w=x[M+0],P=x[M+1],L=x[M+2];h.push(w,P,P,L,L,w)}}else{const x=p.array;v=p.version;for(let M=0,S=x.length/3-1;M<S;M+=3){const w=M+0,P=M+1,L=M+2;h.push(w,P,P,L,L,w)}}const g=new(p.count>=65535?ym:vm)(h,1);g.version=v;const m=r.get(f);m&&e.remove(m),r.set(f,g)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ib(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function c(h,d,p){p!==0&&(n.drawElementsInstanced(i,d,r,h*o,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];t.update(g,i,1)}function f(h,d,p,v){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)c(h[m]/o,d[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,v,0,p);let m=0;for(let x=0;x<p;x++)m+=d[x]*v[x];t.update(m,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function sb(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function rb(n,e,t){const i=new WeakMap,s=new kt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let b=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;d===!0&&(M=1),p===!0&&(M=2),v===!0&&(M=3);let S=a.attributes.position.count*M,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*w*4*f),L=new _m(P,S,w,f);L.type=Gn,L.needsUpdate=!0;const y=M*4;for(let W=0;W<f;W++){const D=g[W],F=m[W],z=x[W],V=S*w*4*W;for(let j=0;j<D.count;j++){const H=j*y;d===!0&&(s.fromBufferAttribute(D,j),P[V+H+0]=s.x,P[V+H+1]=s.y,P[V+H+2]=s.z,P[V+H+3]=0),p===!0&&(s.fromBufferAttribute(F,j),P[V+H+4]=s.x,P[V+H+5]=s.y,P[V+H+6]=s.z,P[V+H+7]=0),v===!0&&(s.fromBufferAttribute(z,j),P[V+H+8]=s.x,P[V+H+9]=s.y,P[V+H+10]=s.z,P[V+H+11]=z.itemSize===4?s.w:1)}}h={count:f,texture:L,size:new tt(S,w)},i.set(a,h),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",p),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function ob(n,e,t,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}const ab={[tm]:"LINEAR_TONE_MAPPING",[nm]:"REINHARD_TONE_MAPPING",[im]:"CINEON_TONE_MAPPING",[sm]:"ACES_FILMIC_TONE_MAPPING",[om]:"AGX_TONE_MAPPING",[am]:"NEUTRAL_TONE_MAPPING",[rm]:"CUSTOM_TONE_MAPPING"};function lb(n,e,t,i,s){const r=new Si(e,t,{type:n,depthBuffer:i,stencilBuffer:s}),o=new Si(e,t,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),a=new Xt;a.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Tt([0,2,0,0,2,0],2));const l=new Av({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new nn(a,l),u=new mf(-1,1,1,-1,0,1);let f=null,h=null,d=!1,p,v=null,g=[],m=!1;this.setSize=function(x,M){r.setSize(x,M),o.setSize(x,M);for(let S=0;S<g.length;S++){const w=g[S];w.setSize&&w.setSize(x,M)}},this.setEffects=function(x){g=x,m=g.length>0&&g[0].isRenderPass===!0;const M=r.width,S=r.height;for(let w=0;w<g.length;w++){const P=g[w];P.setSize&&P.setSize(M,S)}},this.begin=function(x,M){if(d||x.toneMapping===Mi&&g.length===0)return!1;if(v=M,M!==null){const S=M.width,w=M.height;(r.width!==S||r.height!==w)&&this.setSize(S,w)}return m===!1&&x.setRenderTarget(r),p=x.toneMapping,x.toneMapping=Mi,!0},this.hasRenderPass=function(){return m},this.end=function(x,M){x.toneMapping=p,d=!0;let S=r,w=o;for(let P=0;P<g.length;P++){const L=g[P];if(L.enabled!==!1&&(L.render(x,w,S,M),L.needsSwap!==!1)){const y=S;S=w,w=y}}if(f!==x.outputColorSpace||h!==x.toneMapping){f=x.outputColorSpace,h=x.toneMapping,l.defines={},Mt.getTransfer(f)===Pt&&(l.defines.SRGB_TRANSFER="");const P=ab[h];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,x.setRenderTarget(v),x.render(c,u),v=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Fm=new pn,Cu=new Mo(1,1),Om=new _m,Bm=new Ux,zm=new bm,pd=[],md=[],gd=new Float32Array(16),_d=new Float32Array(9),xd=new Float32Array(4);function Nr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Qt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function en(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ml(n,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function cb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ub(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2fv(this.addr,e),en(t,e)}}function fb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;n.uniform3fv(this.addr,e),en(t,e)}}function hb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4fv(this.addr,e),en(t,e)}}function db(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;xd.set(i),n.uniformMatrix2fv(this.addr,!1,xd),en(t,i)}}function pb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;_d.set(i),n.uniformMatrix3fv(this.addr,!1,_d),en(t,i)}}function mb(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Qt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,i))return;gd.set(i),n.uniformMatrix4fv(this.addr,!1,gd),en(t,i)}}function gb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2iv(this.addr,e),en(t,e)}}function xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3iv(this.addr,e),en(t,e)}}function vb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4iv(this.addr,e),en(t,e)}}function yb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Mb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;n.uniform2uiv(this.addr,e),en(t,e)}}function Sb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;n.uniform3uiv(this.addr,e),en(t,e)}}function bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;n.uniform4uiv(this.addr,e),en(t,e)}}function Eb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Cu.compareFunction=t.isReversedDepthBuffer()?sf:nf,r=Cu):r=Fm,t.setTexture2D(e||r,s)}function Tb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Bm,s)}function wb(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||zm,s)}function Ab(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Om,s)}function Cb(n){switch(n){case 5126:return cb;case 35664:return ub;case 35665:return fb;case 35666:return hb;case 35674:return db;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return xb;case 35669:case 35673:return vb;case 5125:return yb;case 36294:return Mb;case 36295:return Sb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Ab}}function Rb(n,e){n.uniform1fv(this.addr,e)}function Pb(n,e){const t=Nr(e,this.size,2);n.uniform2fv(this.addr,t)}function Db(n,e){const t=Nr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ib(n,e){const t=Nr(e,this.size,4);n.uniform4fv(this.addr,t)}function Lb(n,e){const t=Nr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Nb(n,e){const t=Nr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ub(n,e){const t=Nr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Fb(n,e){n.uniform1iv(this.addr,e)}function Ob(n,e){n.uniform2iv(this.addr,e)}function Bb(n,e){n.uniform3iv(this.addr,e)}function zb(n,e){n.uniform4iv(this.addr,e)}function kb(n,e){n.uniform1uiv(this.addr,e)}function Vb(n,e){n.uniform2uiv(this.addr,e)}function Hb(n,e){n.uniform3uiv(this.addr,e)}function Gb(n,e){n.uniform4uiv(this.addr,e)}function Wb(n,e,t){const i=this.cache,s=e.length,r=ml(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Cu:o=Fm;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Xb(n,e,t){const i=this.cache,s=e.length,r=ml(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Bm,r[o])}function Yb(n,e,t){const i=this.cache,s=e.length,r=ml(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||zm,r[o])}function qb(n,e,t){const i=this.cache,s=e.length,r=ml(t,s);Qt(i,r)||(n.uniform1iv(this.addr,r),en(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Om,r[o])}function jb(n){switch(n){case 5126:return Rb;case 35664:return Pb;case 35665:return Db;case 35666:return Ib;case 35674:return Lb;case 35675:return Nb;case 35676:return Ub;case 5124:case 35670:return Fb;case 35667:case 35671:return Ob;case 35668:case 35672:return Bb;case 35669:case 35673:return zb;case 5125:return kb;case 36294:return Vb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return Xb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return qb}}class $b{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Cb(t.type)}}class Zb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=jb(t.type)}}class Kb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const mc=/(\w+)(\])?(\[|\.)?/g;function vd(n,e){n.seq.push(e),n.map[e.id]=e}function Jb(n,e,t){const i=n.name,s=i.length;for(mc.lastIndex=0;;){const r=mc.exec(i),o=mc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){vd(t,c===void 0?new $b(a,n,e):new Zb(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new Kb(a),vd(t,f)),t=f}}}class Pa{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Jb(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function yd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Qb=37297;let eE=0;function tE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Md=new lt;function nE(n){Mt._getMatrix(Md,Mt.workingColorSpace,n);const e=`mat3( ${Md.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(n)){case Va:return[e,"LinearTransferOETF"];case Pt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Sd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+tE(n.getShaderSource(e),a)}else return r}function iE(n,e){const t=nE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sE={[tm]:"Linear",[nm]:"Reinhard",[im]:"Cineon",[sm]:"ACESFilmic",[om]:"AgX",[am]:"Neutral",[rm]:"Custom"};function rE(n,e){const t=sE[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _a=new O;function oE(){Mt.getLuminanceCoefficients(_a);const n=_a.x.toFixed(4),e=_a.y.toFixed(4),t=_a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function lE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qr(n){return n!==""}function bd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ed(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(n){return n.replace(uE,hE)}const fE=new Map;function hE(n,e){let t=ut[e];if(t===void 0){const i=fE.get(e);if(i!==void 0)t=ut[i],$e('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ru(t)}const dE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(n){return n.replace(dE,pE)}function pE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const mE={[Ta]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function gE(n){return mE[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _E={[Vs]:"ENVMAP_TYPE_CUBE",[Er]:"ENVMAP_TYPE_CUBE",[ul]:"ENVMAP_TYPE_CUBE_UV"};function xE(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":_E[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const vE={[Er]:"ENVMAP_MODE_REFRACTION"};function yE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vE[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ME={[em]:"ENVMAP_BLENDING_MULTIPLY",[$0]:"ENVMAP_BLENDING_MIX",[Z0]:"ENVMAP_BLENDING_ADD"};function SE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ME[n.combine]||"ENVMAP_BLENDING_NONE"}function bE(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function EE(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gE(t),c=xE(t),u=yE(t),f=SE(t),h=bE(t),d=aE(t),p=lE(r),v=s.createProgram();let g,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qr).join(`
`),m.length>0&&(m+=`
`)):(g=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),m=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mi?"#define TONE_MAPPING":"",t.toneMapping!==Mi?ut.tonemapping_pars_fragment:"",t.toneMapping!==Mi?rE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,iE("linearToOutputTexel",t.outputColorSpace),oE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Ru(o),o=bd(o,t),o=Ed(o,t),a=Ru(a),a=bd(a,t),a=Ed(a,t),o=Td(o),a=Td(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=x+g+o,S=x+m+a,w=yd(s,s.VERTEX_SHADER,M),P=yd(s,s.FRAGMENT_SHADER,S);s.attachShader(v,w),s.attachShader(v,P),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function L(D){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(w)||"",V=s.getShaderInfoLog(P)||"",j=F.trim(),H=z.trim(),k=V.trim();let ne=!0,oe=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,w,P);else{const we=Sd(s,w,"vertex"),Ae=Sd(s,P,"fragment");Je("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+j+`
`+we+`
`+Ae)}else j!==""?$e("WebGLProgram: Program Info Log:",j):(H===""||k==="")&&(oe=!1);oe&&(D.diagnostics={runnable:ne,programLog:j,vertexShader:{log:H,prefix:g},fragmentShader:{log:k,prefix:m}})}s.deleteShader(w),s.deleteShader(P),y=new Pa(s,v),b=cE(s,v)}let y;this.getUniforms=function(){return y===void 0&&L(this),y};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=s.getProgramParameter(v,Qb)),W},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eE++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=P,this}let TE=0;class wE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AE(e),t.set(e,i)),i}}class AE{constructor(e){this.id=TE++,this.code=e,this.usedTimes=0}}function CE(n,e,t,i,s,r){const o=new af,a=new wE,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let h=i.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,b,W,D,F){const z=D.fog,V=F.geometry,j=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,k=e.get(y.envMap||j,H),ne=k&&k.mapping===ul?k.image.height:null,oe=d[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&$e("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const we=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ae=we!==void 0?we.length:0;let de=0;V.morphAttributes.position!==void 0&&(de=1),V.morphAttributes.normal!==void 0&&(de=2),V.morphAttributes.color!==void 0&&(de=3);let Ke,vt,ft,le;if(oe){const gt=_i[oe];Ke=gt.vertexShader,vt=gt.fragmentShader}else Ke=y.vertexShader,vt=y.fragmentShader,a.update(y),ft=a.getVertexShaderID(y),le=a.getFragmentShaderID(y);const ye=n.getRenderTarget(),Me=n.state.buffers.depth.getReversed(),Ze=F.isInstancedMesh===!0,ie=F.isBatchedMesh===!0,me=!!y.map,C=!!y.matcap,I=!!k,X=!!y.aoMap,se=!!y.lightMap,Y=!!y.bumpMap,ae=!!y.normalMap,A=!!y.displacementMap,pe=!!y.emissiveMap,ce=!!y.metalnessMap,re=!!y.roughnessMap,he=y.anisotropy>0,E=y.clearcoat>0,_=y.dispersion>0,N=y.iridescence>0,q=y.sheen>0,$=y.transmission>0,Z=he&&!!y.anisotropyMap,Ee=E&&!!y.clearcoatMap,_e=E&&!!y.clearcoatNormalMap,ze=E&&!!y.clearcoatRoughnessMap,We=N&&!!y.iridescenceMap,ge=N&&!!y.iridescenceThicknessMap,Se=q&&!!y.sheenColorMap,Pe=q&&!!y.sheenRoughnessMap,Fe=!!y.specularMap,ve=!!y.specularColorMap,Ye=!!y.specularIntensityMap,B=$&&!!y.transmissionMap,Te=$&&!!y.thicknessMap,be=!!y.gradientMap,De=!!y.alphaMap,xe=y.alphaTest>0,ee=!!y.alphaHash,He=!!y.extensions;let et=Mi;y.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(et=n.toneMapping);const Ct={shaderID:oe,shaderType:y.type,shaderName:y.name,vertexShader:Ke,fragmentShader:vt,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:le,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:ie,batchingColor:ie&&F._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&F.instanceColor!==null,instancingMorph:Ze&&F.morphTexture!==null,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:wr,alphaToCoverage:!!y.alphaToCoverage,map:me,matcap:C,envMap:I,envMapMode:I&&k.mapping,envMapCubeUVHeight:ne,aoMap:X,lightMap:se,bumpMap:Y,normalMap:ae,displacementMap:A,emissiveMap:pe,normalMapObjectSpace:ae&&y.normalMapType===tx,normalMapTangentSpace:ae&&y.normalMapType===mm,metalnessMap:ce,roughnessMap:re,anisotropy:he,anisotropyMap:Z,clearcoat:E,clearcoatMap:Ee,clearcoatNormalMap:_e,clearcoatRoughnessMap:ze,dispersion:_,iridescence:N,iridescenceMap:We,iridescenceThicknessMap:ge,sheen:q,sheenColorMap:Se,sheenRoughnessMap:Pe,specularMap:Fe,specularColorMap:ve,specularIntensityMap:Ye,transmission:$,transmissionMap:B,thicknessMap:Te,gradientMap:be,opaque:y.transparent===!1&&y.blending===yr&&y.alphaToCoverage===!1,alphaMap:De,alphaTest:xe,alphaHash:ee,combine:y.combine,mapUv:me&&p(y.map.channel),aoMapUv:X&&p(y.aoMap.channel),lightMapUv:se&&p(y.lightMap.channel),bumpMapUv:Y&&p(y.bumpMap.channel),normalMapUv:ae&&p(y.normalMap.channel),displacementMapUv:A&&p(y.displacementMap.channel),emissiveMapUv:pe&&p(y.emissiveMap.channel),metalnessMapUv:ce&&p(y.metalnessMap.channel),roughnessMapUv:re&&p(y.roughnessMap.channel),anisotropyMapUv:Z&&p(y.anisotropyMap.channel),clearcoatMapUv:Ee&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:_e&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&p(y.sheenRoughnessMap.channel),specularMapUv:Fe&&p(y.specularMap.channel),specularColorMapUv:ve&&p(y.specularColorMap.channel),specularIntensityMapUv:Ye&&p(y.specularIntensityMap.channel),transmissionMapUv:B&&p(y.transmissionMap.channel),thicknessMapUv:Te&&p(y.thicknessMap.channel),alphaMapUv:De&&p(y.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ae||he),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!V.attributes.uv&&(me||De),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||V.attributes.normal===void 0&&ae===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Me,skinning:F.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:de,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:me&&y.map.isVideoTexture===!0&&Mt.getTransfer(y.map.colorSpace)===Pt,decodeVideoTextureEmissive:pe&&y.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(y.emissiveMap.colorSpace)===Pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Hn,flipSided:y.side===Dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:He&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&y.extensions.multiDraw===!0||ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)b.push(W),b.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(m(b,y),x(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function m(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function x(y,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){const b=d[y.type];let W;if(b){const D=_i[b];W=Ev.clone(D.uniforms)}else W=y.uniforms;return W}function S(y,b){let W=u.get(b);return W!==void 0?++W.usedTimes:(W=new EE(n,b,y,s),c.push(W),u.set(b,W)),W}function w(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function P(y){a.remove(y)}function L(){a.dispose()}return{getParameters:v,getProgramCacheKey:g,getUniforms:M,acquireProgram:S,releaseProgram:w,releaseShaderCache:P,programs:c,dispose:L}}function RE(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function PE(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Ad(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Cd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,v,g,m){let x=n[e];return x===void 0?(x={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:v,renderOrder:h.renderOrder,z:g,group:m},n[e]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=p,x.materialVariant=o(h),x.groupOrder=v,x.renderOrder=h.renderOrder,x.z=g,x.group=m),e++,x}function l(h,d,p,v,g,m){const x=a(h,d,p,v,g,m);p.transmission>0?i.push(x):p.transparent===!0?s.push(x):t.push(x)}function c(h,d,p,v,g,m){const x=a(h,d,p,v,g,m);p.transmission>0?i.unshift(x):p.transparent===!0?s.unshift(x):t.unshift(x)}function u(h,d){t.length>1&&t.sort(h||PE),i.length>1&&i.sort(d||Ad),s.length>1&&s.sort(d||Ad)}function f(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function DE(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Cd,n.set(i,[o])):s>=r.length?(o=new Cd,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new rt};break;case"SpotLight":t={position:new O,direction:new O,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function LE(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let NE=0;function UE(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function FE(n){const e=new IE,t=LE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new mt,o=new mt;function a(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,p=0,v=0,g=0,m=0,x=0,M=0,S=0,w=0,P=0,L=0;c.sort(UE);for(let b=0,W=c.length;b<W;b++){const D=c[b],F=D.color,z=D.intensity,V=D.distance;let j=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Tr?j=D.shadow.map.texture:j=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=F.r*z,f+=F.g*z,h+=F.b*z;else if(D.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(D.sh.coefficients[H],z);L++}else if(D.isDirectionalLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,ne=t.get(D);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,i.directionalShadow[d]=ne,i.directionalShadowMap[d]=j,i.directionalShadowMatrix[d]=D.shadow.matrix,x++}i.directional[d]=H,d++}else if(D.isSpotLight){const H=e.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(F).multiplyScalar(z),H.distance=V,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,i.spot[v]=H;const k=D.shadow;if(D.map&&(i.spotLightMap[w]=D.map,w++,k.updateMatrices(D),D.castShadow&&P++),i.spotLightMatrix[v]=k.matrix,D.castShadow){const ne=t.get(D);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,i.spotShadow[v]=ne,i.spotShadowMap[v]=j,S++}v++}else if(D.isRectAreaLight){const H=e.get(D);H.color.copy(F).multiplyScalar(z),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=H,g++}else if(D.isPointLight){const H=e.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity),H.distance=D.distance,H.decay=D.decay,D.castShadow){const k=D.shadow,ne=t.get(D);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,ne.shadowCameraNear=k.camera.near,ne.shadowCameraFar=k.camera.far,i.pointShadow[p]=ne,i.pointShadowMap[p]=j,i.pointShadowMatrix[p]=D.shadow.matrix,M++}i.point[p]=H,p++}else if(D.isHemisphereLight){const H=e.get(D);H.skyColor.copy(D.color).multiplyScalar(z),H.groundColor.copy(D.groundColor).multiplyScalar(z),i.hemi[m]=H,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ue.LTC_FLOAT_1,i.rectAreaLTC2=Ue.LTC_FLOAT_2):(i.rectAreaLTC1=Ue.LTC_HALF_1,i.rectAreaLTC2=Ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const y=i.hash;(y.directionalLength!==d||y.pointLength!==p||y.spotLength!==v||y.rectAreaLength!==g||y.hemiLength!==m||y.numDirectionalShadows!==x||y.numPointShadows!==M||y.numSpotShadows!==S||y.numSpotMaps!==w||y.numLightProbes!==L)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,y.directionalLength=d,y.pointLength=p,y.spotLength=v,y.rectAreaLength=g,y.hemiLength=m,y.numDirectionalShadows=x,y.numPointShadows=M,y.numSpotShadows=S,y.numSpotMaps=w,y.numLightProbes=L,i.version=NE++)}function l(c,u){let f=0,h=0,d=0,p=0,v=0;const g=u.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const M=c[m];if(M.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),f++}else if(M.isSpotLight){const S=i.spot[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(g),d++}else if(M.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(g),v++}}}return{setup:a,setupView:l,state:i}}function Rd(n){const e=new FE(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function OE(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Rd(n),e.set(s,[a])):r>=o.length?(a=new Rd(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,kE=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],VE=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Pd=new mt,$r=new O,gc=new O;function HE(n,e,t){let i=new cf;const s=new tt,r=new tt,o=new kt,a=new Rv,l=new Pv,c={},u=t.maxTextureSize,f={[gs]:Dn,[Dn]:gs,[Hn]:Hn},h=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:BE,fragmentShader:zE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new Xt;p.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new nn(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ta;let m=this.type;this.render=function(P,L,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;this.type===P0&&($e("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ta);const b=n.getRenderTarget(),W=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),F=n.state;F.setBlending(ki),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const z=m!==this.type;z&&L.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(j=>j.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,j=P.length;V<j;V++){const H=P[V],k=H.shadow;if(k===void 0){$e("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const ne=k.getFrameExtents();s.multiply(ne),r.copy(k.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ne.x),s.x=r.x*ne.x,k.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ne.y),s.y=r.y*ne.y,k.mapSize.y=r.y));const oe=n.state.buffers.depth.getReversed();if(k.camera._reversedDepth=oe,k.map===null||z===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Kr){if(H.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Si(s.x,s.y,{format:Tr,type:Xi,minFilter:hn,magFilter:hn,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new Mo(s.x,s.y,Gn),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=Yi,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=rn,k.map.depthTexture.magFilter=rn}else H.isPointLight?(k.map=new Um(s.x),k.map.depthTexture=new sv(s.x,Ei)):(k.map=new Si(s.x,s.y),k.map.depthTexture=new Mo(s.x,s.y,Ei)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=Yi,this.type===Ta?(k.map.depthTexture.compareFunction=oe?sf:nf,k.map.depthTexture.minFilter=hn,k.map.depthTexture.magFilter=hn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=rn,k.map.depthTexture.magFilter=rn);k.camera.updateProjectionMatrix()}const we=k.map.isWebGLCubeRenderTarget?6:1;for(let Ae=0;Ae<we;Ae++){if(k.map.isWebGLCubeRenderTarget)n.setRenderTarget(k.map,Ae),n.clear();else{Ae===0&&(n.setRenderTarget(k.map),n.clear());const de=k.getViewport(Ae);o.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),F.viewport(o)}if(H.isPointLight){const de=k.camera,Ke=k.matrix,vt=H.distance||de.far;vt!==de.far&&(de.far=vt,de.updateProjectionMatrix()),$r.setFromMatrixPosition(H.matrixWorld),de.position.copy($r),gc.copy(de.position),gc.add(kE[Ae]),de.up.copy(VE[Ae]),de.lookAt(gc),de.updateMatrixWorld(),Ke.makeTranslation(-$r.x,-$r.y,-$r.z),Pd.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Pd,de.coordinateSystem,de.reversedDepth)}else k.updateMatrices(H);i=k.getFrustum(),S(L,y,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===Kr&&x(k,y),k.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(b,W,D)};function x(P,L){const y=e.update(v);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Si(s.x,s.y,{format:Tr,type:Xi})),h.uniforms.shadow_pass.value=P.map.depthTexture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(L,null,y,h,v,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(L,null,y,d,v,null)}function M(P,L,y,b){let W=null;const D=y.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)W=D;else if(W=y.isPointLight===!0?l:a,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const F=W.uuid,z=L.uuid;let V=c[F];V===void 0&&(V={},c[F]=V);let j=V[z];j===void 0&&(j=W.clone(),V[z]=j,L.addEventListener("dispose",w)),W=j}if(W.visible=L.visible,W.wireframe=L.wireframe,b===Kr?W.side=L.shadowSide!==null?L.shadowSide:L.side:W.side=L.shadowSide!==null?L.shadowSide:f[L.side],W.alphaMap=L.alphaMap,W.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,W.map=L.map,W.clipShadows=L.clipShadows,W.clippingPlanes=L.clippingPlanes,W.clipIntersection=L.clipIntersection,W.displacementMap=L.displacementMap,W.displacementScale=L.displacementScale,W.displacementBias=L.displacementBias,W.wireframeLinewidth=L.wireframeLinewidth,W.linewidth=L.linewidth,y.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const F=n.properties.get(W);F.light=y}return W}function S(P,L,y,b,W){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&W===Kr)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,P.matrixWorld);const z=e.update(P),V=P.material;if(Array.isArray(V)){const j=z.groups;for(let H=0,k=j.length;H<k;H++){const ne=j[H],oe=V[ne.materialIndex];if(oe&&oe.visible){const we=M(P,oe,b,W);P.onBeforeShadow(n,P,L,y,z,we,ne),n.renderBufferDirect(y,null,z,we,P,ne),P.onAfterShadow(n,P,L,y,z,we,ne)}}}else if(V.visible){const j=M(P,V,b,W);P.onBeforeShadow(n,P,L,y,z,j,null),n.renderBufferDirect(y,null,z,j,P,null),P.onAfterShadow(n,P,L,y,z,j,null)}}const F=P.children;for(let z=0,V=F.length;z<V;z++)S(F[z],L,y,b,W)}function w(P){P.target.removeEventListener("dispose",w);for(const y in c){const b=c[y],W=P.target.uuid;W in b&&(b[W].dispose(),delete b[W])}}}function GE(n,e){function t(){let B=!1;const Te=new kt;let be=null;const De=new kt(0,0,0,0);return{setMask:function(xe){be!==xe&&!B&&(n.colorMask(xe,xe,xe,xe),be=xe)},setLocked:function(xe){B=xe},setClear:function(xe,ee,He,et,Ct){Ct===!0&&(xe*=et,ee*=et,He*=et),Te.set(xe,ee,He,et),De.equals(Te)===!1&&(n.clearColor(xe,ee,He,et),De.copy(Te))},reset:function(){B=!1,be=null,De.set(-1,0,0,0)}}}function i(){let B=!1,Te=!1,be=null,De=null,xe=null;return{setReversed:function(ee){if(Te!==ee){const He=e.get("EXT_clip_control");ee?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),Te=ee;const et=xe;xe=null,this.setClear(et)}},getReversed:function(){return Te},setTest:function(ee){ee?ye(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(ee){be!==ee&&!B&&(n.depthMask(ee),be=ee)},setFunc:function(ee){if(Te&&(ee=hx[ee]),De!==ee){switch(ee){case Lc:n.depthFunc(n.NEVER);break;case Nc:n.depthFunc(n.ALWAYS);break;case Uc:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case Fc:n.depthFunc(n.EQUAL);break;case Oc:n.depthFunc(n.GEQUAL);break;case Bc:n.depthFunc(n.GREATER);break;case zc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}De=ee}},setLocked:function(ee){B=ee},setClear:function(ee){xe!==ee&&(xe=ee,Te&&(ee=1-ee),n.clearDepth(ee))},reset:function(){B=!1,be=null,De=null,xe=null,Te=!1}}}function s(){let B=!1,Te=null,be=null,De=null,xe=null,ee=null,He=null,et=null,Ct=null;return{setTest:function(gt){B||(gt?ye(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(gt){Te!==gt&&!B&&(n.stencilMask(gt),Te=gt)},setFunc:function(gt,wn,Yn){(be!==gt||De!==wn||xe!==Yn)&&(n.stencilFunc(gt,wn,Yn),be=gt,De=wn,xe=Yn)},setOp:function(gt,wn,Yn){(ee!==gt||He!==wn||et!==Yn)&&(n.stencilOp(gt,wn,Yn),ee=gt,He=wn,et=Yn)},setLocked:function(gt){B=gt},setClear:function(gt){Ct!==gt&&(n.clearStencil(gt),Ct=gt)},reset:function(){B=!1,Te=null,be=null,De=null,xe=null,ee=null,He=null,et=null,Ct=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,v=!1,g=null,m=null,x=null,M=null,S=null,w=null,P=null,L=new rt(0,0,0),y=0,b=!1,W=null,D=null,F=null,z=null,V=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,k=0;const ne=n.getParameter(n.VERSION);ne.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(ne)[1]),H=k>=1):ne.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),H=k>=2);let oe=null,we={};const Ae=n.getParameter(n.SCISSOR_BOX),de=n.getParameter(n.VIEWPORT),Ke=new kt().fromArray(Ae),vt=new kt().fromArray(de);function ft(B,Te,be,De){const xe=new Uint8Array(4),ee=n.createTexture();n.bindTexture(B,ee),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let He=0;He<be;He++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Te,0,n.RGBA,1,1,De,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(Te+He,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return ee}const le={};le[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ye(n.DEPTH_TEST),o.setFunc(br),Y(!1),ae(ah),ye(n.CULL_FACE),X(ki);function ye(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Me(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Ze(B,Te){return f[B]!==Te?(n.bindFramebuffer(B,Te),f[B]=Te,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=Te),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=Te),!0):!1}function ie(B,Te){let be=d,De=!1;if(B){be=h.get(Te),be===void 0&&(be=[],h.set(Te,be));const xe=B.textures;if(be.length!==xe.length||be[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,He=xe.length;ee<He;ee++)be[ee]=n.COLOR_ATTACHMENT0+ee;be.length=xe.length,De=!0}}else be[0]!==n.BACK&&(be[0]=n.BACK,De=!0);De&&n.drawBuffers(be)}function me(B){return p!==B?(n.useProgram(B),p=B,!0):!1}const C={[Ls]:n.FUNC_ADD,[I0]:n.FUNC_SUBTRACT,[L0]:n.FUNC_REVERSE_SUBTRACT};C[N0]=n.MIN,C[U0]=n.MAX;const I={[F0]:n.ZERO,[O0]:n.ONE,[B0]:n.SRC_COLOR,[Dc]:n.SRC_ALPHA,[W0]:n.SRC_ALPHA_SATURATE,[H0]:n.DST_COLOR,[k0]:n.DST_ALPHA,[z0]:n.ONE_MINUS_SRC_COLOR,[Ic]:n.ONE_MINUS_SRC_ALPHA,[G0]:n.ONE_MINUS_DST_COLOR,[V0]:n.ONE_MINUS_DST_ALPHA,[X0]:n.CONSTANT_COLOR,[Y0]:n.ONE_MINUS_CONSTANT_COLOR,[q0]:n.CONSTANT_ALPHA,[j0]:n.ONE_MINUS_CONSTANT_ALPHA};function X(B,Te,be,De,xe,ee,He,et,Ct,gt){if(B===ki){v===!0&&(Me(n.BLEND),v=!1);return}if(v===!1&&(ye(n.BLEND),v=!0),B!==D0){if(B!==g||gt!==b){if((m!==Ls||S!==Ls)&&(n.blendEquation(n.FUNC_ADD),m=Ls,S=Ls),gt)switch(B){case yr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lh:n.blendFunc(n.ONE,n.ONE);break;case ch:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case uh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Je("WebGLState: Invalid blending: ",B);break}else switch(B){case yr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case lh:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ch:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uh:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",B);break}x=null,M=null,w=null,P=null,L.set(0,0,0),y=0,g=B,b=gt}return}xe=xe||Te,ee=ee||be,He=He||De,(Te!==m||xe!==S)&&(n.blendEquationSeparate(C[Te],C[xe]),m=Te,S=xe),(be!==x||De!==M||ee!==w||He!==P)&&(n.blendFuncSeparate(I[be],I[De],I[ee],I[He]),x=be,M=De,w=ee,P=He),(et.equals(L)===!1||Ct!==y)&&(n.blendColor(et.r,et.g,et.b,Ct),L.copy(et),y=Ct),g=B,b=!1}function se(B,Te){B.side===Hn?Me(n.CULL_FACE):ye(n.CULL_FACE);let be=B.side===Dn;Te&&(be=!be),Y(be),B.blending===yr&&B.transparent===!1?X(ki):X(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const De=B.stencilWrite;a.setTest(De),De&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),pe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Y(B){W!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),W=B)}function ae(B){B!==C0?(ye(n.CULL_FACE),B!==D&&(B===ah?n.cullFace(n.BACK):B===R0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),D=B}function A(B){B!==F&&(H&&n.lineWidth(B),F=B)}function pe(B,Te,be){B?(ye(n.POLYGON_OFFSET_FILL),(z!==Te||V!==be)&&(z=Te,V=be,o.getReversed()&&(Te=-Te),n.polygonOffset(Te,be))):Me(n.POLYGON_OFFSET_FILL)}function ce(B){B?ye(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function re(B){B===void 0&&(B=n.TEXTURE0+j-1),oe!==B&&(n.activeTexture(B),oe=B)}function he(B,Te,be){be===void 0&&(oe===null?be=n.TEXTURE0+j-1:be=oe);let De=we[be];De===void 0&&(De={type:void 0,texture:void 0},we[be]=De),(De.type!==B||De.texture!==Te)&&(oe!==be&&(n.activeTexture(be),oe=be),n.bindTexture(B,Te||le[B]),De.type=B,De.texture=Te)}function E(){const B=we[oe];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function q(){try{n.texSubImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function $(){try{n.texSubImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function Ee(){try{n.compressedTexSubImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function _e(){try{n.texStorage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function ze(){try{n.texStorage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function We(){try{n.texImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function ge(){try{n.texImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function Se(B){Ke.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ke.copy(B))}function Pe(B){vt.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),vt.copy(B))}function Fe(B,Te){let be=c.get(Te);be===void 0&&(be=new WeakMap,c.set(Te,be));let De=be.get(B);De===void 0&&(De=n.getUniformBlockIndex(Te,B.name),be.set(B,De))}function ve(B,Te){const De=c.get(Te).get(B);l.get(Te)!==De&&(n.uniformBlockBinding(Te,De,B.__bindingPointIndex),l.set(Te,De))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,we={},f={},h=new WeakMap,d=[],p=null,v=!1,g=null,m=null,x=null,M=null,S=null,w=null,P=null,L=new rt(0,0,0),y=0,b=!1,W=null,D=null,F=null,z=null,V=null,Ke.set(0,0,n.canvas.width,n.canvas.height),vt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ye,disable:Me,bindFramebuffer:Ze,drawBuffers:ie,useProgram:me,setBlending:X,setMaterial:se,setFlipSided:Y,setCullFace:ae,setLineWidth:A,setPolygonOffset:pe,setScissorTest:ce,activeTexture:re,bindTexture:he,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:We,texImage3D:ge,updateUBOMapping:Fe,uniformBlockBinding:ve,texStorage2D:_e,texStorage3D:ze,texSubImage2D:q,texSubImage3D:$,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ee,scissor:Se,viewport:Pe,reset:Ye}}function WE(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,_){return d?new OffscreenCanvas(E,_):yo("canvas")}function v(E,_,N){let q=1;const $=he(E);if(($.width>N||$.height>N)&&(q=N/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor(q*$.width),Ee=Math.floor(q*$.height);f===void 0&&(f=p(Z,Ee));const _e=_?p(Z,Ee):f;return _e.width=Z,_e.height=Ee,_e.getContext("2d").drawImage(E,0,0,Z,Ee),$e("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+Ee+")."),_e}else return"data"in E&&$e("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),E;return E}function g(E){return E.generateMipmaps}function m(E){n.generateMipmap(E)}function x(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(E,_,N,q,$=!1){if(E!==null){if(n[E]!==void 0)return n[E];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=_;if(_===n.RED&&(N===n.FLOAT&&(Z=n.R32F),N===n.HALF_FLOAT&&(Z=n.R16F),N===n.UNSIGNED_BYTE&&(Z=n.R8)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.R8UI),N===n.UNSIGNED_SHORT&&(Z=n.R16UI),N===n.UNSIGNED_INT&&(Z=n.R32UI),N===n.BYTE&&(Z=n.R8I),N===n.SHORT&&(Z=n.R16I),N===n.INT&&(Z=n.R32I)),_===n.RG&&(N===n.FLOAT&&(Z=n.RG32F),N===n.HALF_FLOAT&&(Z=n.RG16F),N===n.UNSIGNED_BYTE&&(Z=n.RG8)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RG8UI),N===n.UNSIGNED_SHORT&&(Z=n.RG16UI),N===n.UNSIGNED_INT&&(Z=n.RG32UI),N===n.BYTE&&(Z=n.RG8I),N===n.SHORT&&(Z=n.RG16I),N===n.INT&&(Z=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),N===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),N===n.UNSIGNED_INT&&(Z=n.RGB32UI),N===n.BYTE&&(Z=n.RGB8I),N===n.SHORT&&(Z=n.RGB16I),N===n.INT&&(Z=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),N===n.UNSIGNED_INT&&(Z=n.RGBA32UI),N===n.BYTE&&(Z=n.RGBA8I),N===n.SHORT&&(Z=n.RGBA16I),N===n.INT&&(Z=n.RGBA32I)),_===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),_===n.RGBA){const Ee=$?Va:Mt.getTransfer(q);N===n.FLOAT&&(Z=n.RGBA32F),N===n.HALF_FLOAT&&(Z=n.RGBA16F),N===n.UNSIGNED_BYTE&&(Z=Ee===Pt?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(E,_){let N;return E?_===null||_===Ei||_===xo?N=n.DEPTH24_STENCIL8:_===Gn?N=n.DEPTH32F_STENCIL8:_===_o&&(N=n.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ei||_===xo?N=n.DEPTH_COMPONENT24:_===Gn?N=n.DEPTH_COMPONENT32F:_===_o&&(N=n.DEPTH_COMPONENT16),N}function w(E,_){return g(E)===!0||E.isFramebufferTexture&&E.minFilter!==rn&&E.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function P(E){const _=E.target;_.removeEventListener("dispose",P),y(_),_.isVideoTexture&&u.delete(_)}function L(E){const _=E.target;_.removeEventListener("dispose",L),W(_)}function y(E){const _=i.get(E);if(_.__webglInit===void 0)return;const N=E.source,q=h.get(N);if(q){const $=q[_.__cacheKey];$.usedTimes--,$.usedTimes===0&&b(E),Object.keys(q).length===0&&h.delete(N)}i.remove(E)}function b(E){const _=i.get(E);n.deleteTexture(_.__webglTexture);const N=E.source,q=h.get(N);delete q[_.__cacheKey],o.memory.textures--}function W(E){const _=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(_.__webglFramebuffer[q]))for(let $=0;$<_.__webglFramebuffer[q].length;$++)n.deleteFramebuffer(_.__webglFramebuffer[q][$]);else n.deleteFramebuffer(_.__webglFramebuffer[q]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[q])}else{if(Array.isArray(_.__webglFramebuffer))for(let q=0;q<_.__webglFramebuffer.length;q++)n.deleteFramebuffer(_.__webglFramebuffer[q]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let q=0;q<_.__webglColorRenderbuffer.length;q++)_.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[q]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=E.textures;for(let q=0,$=N.length;q<$;q++){const Z=i.get(N[q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(N[q])}i.remove(E)}let D=0;function F(){D=0}function z(){const E=D;return E>=s.maxTextures&&$e("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),D+=1,E}function V(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function j(E,_){const N=i.get(E);if(E.isVideoTexture&&ce(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const q=E.image;if(q===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{le(N,E,_);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function H(E,_){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){le(N,E,_);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function k(E,_){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){le(N,E,_);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function ne(E,_){const N=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&N.__version!==E.version){ye(N,E,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}const oe={[kc]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[Vc]:n.MIRRORED_REPEAT},we={[rn]:n.NEAREST,[J0]:n.NEAREST_MIPMAP_NEAREST,[Vo]:n.NEAREST_MIPMAP_LINEAR,[hn]:n.LINEAR,[Fl]:n.LINEAR_MIPMAP_NEAREST,[Fs]:n.LINEAR_MIPMAP_LINEAR},Ae={[nx]:n.NEVER,[ax]:n.ALWAYS,[ix]:n.LESS,[nf]:n.LEQUAL,[sx]:n.EQUAL,[sf]:n.GEQUAL,[rx]:n.GREATER,[ox]:n.NOTEQUAL};function de(E,_){if(_.type===Gn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===Fl||_.magFilter===Vo||_.magFilter===Fs||_.minFilter===hn||_.minFilter===Fl||_.minFilter===Vo||_.minFilter===Fs)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,oe[_.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,oe[_.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,oe[_.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,we[_.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,we[_.minFilter]),_.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,Ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===rn||_.minFilter!==Vo&&_.minFilter!==Fs||_.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ke(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",P));const q=_.source;let $=h.get(q);$===void 0&&($={},h.set(q,$));const Z=V(_);if(Z!==E.__cacheKey){$[Z]===void 0&&($[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,N=!0),$[Z].usedTimes++;const Ee=$[E.__cacheKey];Ee!==void 0&&($[E.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(_)),E.__cacheKey=Z,E.__webglTexture=$[Z].texture}return N}function vt(E,_,N){return Math.floor(Math.floor(E/N)/_)}function ft(E,_,N,q){const Z=E.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,N,q,_.data);else{Z.sort((ge,Se)=>ge.start-Se.start);let Ee=0;for(let ge=1;ge<Z.length;ge++){const Se=Z[Ee],Pe=Z[ge],Fe=Se.start+Se.count,ve=vt(Pe.start,_.width,4),Ye=vt(Se.start,_.width,4);Pe.start<=Fe+1&&ve===Ye&&vt(Pe.start+Pe.count-1,_.width,4)===ve?Se.count=Math.max(Se.count,Pe.start+Pe.count-Se.start):(++Ee,Z[Ee]=Pe)}Z.length=Ee+1;const _e=n.getParameter(n.UNPACK_ROW_LENGTH),ze=n.getParameter(n.UNPACK_SKIP_PIXELS),We=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let ge=0,Se=Z.length;ge<Se;ge++){const Pe=Z[ge],Fe=Math.floor(Pe.start/4),ve=Math.ceil(Pe.count/4),Ye=Fe%_.width,B=Math.floor(Fe/_.width),Te=ve,be=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ye),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Ye,B,Te,be,N,q,_.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,_e),n.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,We)}}function le(E,_,N){let q=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(q=n.TEXTURE_3D);const $=Ke(E,_),Z=_.source;t.bindTexture(q,E.__webglTexture,n.TEXTURE0+N);const Ee=i.get(Z);if(Z.version!==Ee.__version||$===!0){t.activeTexture(n.TEXTURE0+N);const _e=Mt.getPrimaries(Mt.workingColorSpace),ze=_.colorSpace===us?null:Mt.getPrimaries(_.colorSpace),We=_.colorSpace===us||_e===ze?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ge=v(_.image,!1,s.maxTextureSize);ge=re(_,ge);const Se=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type);let Fe=M(_.internalFormat,Se,Pe,_.colorSpace,_.isVideoTexture);de(q,_);let ve;const Ye=_.mipmaps,B=_.isVideoTexture!==!0,Te=Ee.__version===void 0||$===!0,be=Z.dataReady,De=w(_,ge);if(_.isDepthTexture)Fe=S(_.format===Os,_.type),Te&&(B?t.texStorage2D(n.TEXTURE_2D,1,Fe,ge.width,ge.height):t.texImage2D(n.TEXTURE_2D,0,Fe,ge.width,ge.height,0,Se,Pe,null));else if(_.isDataTexture)if(Ye.length>0){B&&Te&&t.texStorage2D(n.TEXTURE_2D,De,Fe,Ye[0].width,Ye[0].height);for(let xe=0,ee=Ye.length;xe<ee;xe++)ve=Ye[xe],B?be&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ve.width,ve.height,Se,Pe,ve.data):t.texImage2D(n.TEXTURE_2D,xe,Fe,ve.width,ve.height,0,Se,Pe,ve.data);_.generateMipmaps=!1}else B?(Te&&t.texStorage2D(n.TEXTURE_2D,De,Fe,ge.width,ge.height),be&&ft(_,ge,Se,Pe)):t.texImage2D(n.TEXTURE_2D,0,Fe,ge.width,ge.height,0,Se,Pe,ge.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){B&&Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Fe,Ye[0].width,Ye[0].height,ge.depth);for(let xe=0,ee=Ye.length;xe<ee;xe++)if(ve=Ye[xe],_.format!==Wn)if(Se!==null)if(B){if(be)if(_.layerUpdates.size>0){const He=ad(ve.width,ve.height,_.format,_.type);for(const et of _.layerUpdates){const Ct=ve.data.subarray(et*He/ve.data.BYTES_PER_ELEMENT,(et+1)*He/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,et,ve.width,ve.height,1,Se,Ct)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,ve.width,ve.height,ge.depth,Se,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,xe,Fe,ve.width,ve.height,ge.depth,0,ve.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,xe,0,0,0,ve.width,ve.height,ge.depth,Se,Pe,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,xe,Fe,ve.width,ve.height,ge.depth,0,Se,Pe,ve.data)}else{B&&Te&&t.texStorage2D(n.TEXTURE_2D,De,Fe,Ye[0].width,Ye[0].height);for(let xe=0,ee=Ye.length;xe<ee;xe++)ve=Ye[xe],_.format!==Wn?Se!==null?B?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,xe,0,0,ve.width,ve.height,Se,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,xe,Fe,ve.width,ve.height,0,ve.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?be&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,ve.width,ve.height,Se,Pe,ve.data):t.texImage2D(n.TEXTURE_2D,xe,Fe,ve.width,ve.height,0,Se,Pe,ve.data)}else if(_.isDataArrayTexture)if(B){if(Te&&t.texStorage3D(n.TEXTURE_2D_ARRAY,De,Fe,ge.width,ge.height,ge.depth),be)if(_.layerUpdates.size>0){const xe=ad(ge.width,ge.height,_.format,_.type);for(const ee of _.layerUpdates){const He=ge.data.subarray(ee*xe/ge.data.BYTES_PER_ELEMENT,(ee+1)*xe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,ge.width,ge.height,1,Se,Pe,He)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Se,Pe,ge.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Fe,ge.width,ge.height,ge.depth,0,Se,Pe,ge.data);else if(_.isData3DTexture)B?(Te&&t.texStorage3D(n.TEXTURE_3D,De,Fe,ge.width,ge.height,ge.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Se,Pe,ge.data)):t.texImage3D(n.TEXTURE_3D,0,Fe,ge.width,ge.height,ge.depth,0,Se,Pe,ge.data);else if(_.isFramebufferTexture){if(Te)if(B)t.texStorage2D(n.TEXTURE_2D,De,Fe,ge.width,ge.height);else{let xe=ge.width,ee=ge.height;for(let He=0;He<De;He++)t.texImage2D(n.TEXTURE_2D,He,Fe,xe,ee,0,Se,Pe,null),xe>>=1,ee>>=1}}else if(Ye.length>0){if(B&&Te){const xe=he(Ye[0]);t.texStorage2D(n.TEXTURE_2D,De,Fe,xe.width,xe.height)}for(let xe=0,ee=Ye.length;xe<ee;xe++)ve=Ye[xe],B?be&&t.texSubImage2D(n.TEXTURE_2D,xe,0,0,Se,Pe,ve):t.texImage2D(n.TEXTURE_2D,xe,Fe,Se,Pe,ve);_.generateMipmaps=!1}else if(B){if(Te){const xe=he(ge);t.texStorage2D(n.TEXTURE_2D,De,Fe,xe.width,xe.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Se,Pe,ge)}else t.texImage2D(n.TEXTURE_2D,0,Fe,Se,Pe,ge);g(_)&&m(q),Ee.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ye(E,_,N){if(_.image.length!==6)return;const q=Ke(E,_),$=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+N);const Z=i.get($);if($.version!==Z.__version||q===!0){t.activeTexture(n.TEXTURE0+N);const Ee=Mt.getPrimaries(Mt.workingColorSpace),_e=_.colorSpace===us?null:Mt.getPrimaries(_.colorSpace),ze=_.colorSpace===us||Ee===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const We=_.isCompressedTexture||_.image[0].isCompressedTexture,ge=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let ee=0;ee<6;ee++)!We&&!ge?Se[ee]=v(_.image[ee],!0,s.maxCubemapSize):Se[ee]=ge?_.image[ee].image:_.image[ee],Se[ee]=re(_,Se[ee]);const Pe=Se[0],Fe=r.convert(_.format,_.colorSpace),ve=r.convert(_.type),Ye=M(_.internalFormat,Fe,ve,_.colorSpace),B=_.isVideoTexture!==!0,Te=Z.__version===void 0||q===!0,be=$.dataReady;let De=w(_,Pe);de(n.TEXTURE_CUBE_MAP,_);let xe;if(We){B&&Te&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ye,Pe.width,Pe.height);for(let ee=0;ee<6;ee++){xe=Se[ee].mipmaps;for(let He=0;He<xe.length;He++){const et=xe[He];_.format!==Wn?Fe!==null?B?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He,0,0,et.width,et.height,Fe,et.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He,Ye,et.width,et.height,0,et.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He,0,0,et.width,et.height,Fe,ve,et.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He,Ye,et.width,et.height,0,Fe,ve,et.data)}}}else{if(xe=_.mipmaps,B&&Te){xe.length>0&&De++;const ee=he(Se[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ge){B?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Se[ee].width,Se[ee].height,Fe,ve,Se[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Se[ee].width,Se[ee].height,0,Fe,ve,Se[ee].data);for(let He=0;He<xe.length;He++){const Ct=xe[He].image[ee].image;B?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He+1,0,0,Ct.width,Ct.height,Fe,ve,Ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He+1,Ye,Ct.width,Ct.height,0,Fe,ve,Ct.data)}}else{B?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,ve,Se[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,Fe,ve,Se[ee]);for(let He=0;He<xe.length;He++){const et=xe[He];B?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He+1,0,0,Fe,ve,et.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He+1,Ye,Fe,ve,et.image[ee])}}}g(_)&&m(n.TEXTURE_CUBE_MAP),Z.__version=$.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Me(E,_,N,q,$,Z){const Ee=r.convert(N.format,N.colorSpace),_e=r.convert(N.type),ze=M(N.internalFormat,Ee,_e,N.colorSpace),We=i.get(_),ge=i.get(N);if(ge.__renderTarget=_,!We.__hasExternalTextures){const Se=Math.max(1,_.width>>Z),Pe=Math.max(1,_.height>>Z);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?t.texImage3D($,Z,ze,Se,Pe,_.depth,0,Ee,_e,null):t.texImage2D($,Z,ze,Se,Pe,0,Ee,_e,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),pe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,$,ge.__webglTexture,0,A(_)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,$,ge.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ze(E,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,E),_.depthBuffer){const q=_.depthTexture,$=q&&q.isDepthTexture?q.type:null,Z=S(_.stencilBuffer,$),Ee=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(_),Z,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(_),Z,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Z,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ee,n.RENDERBUFFER,E)}else{const q=_.textures;for(let $=0;$<q.length;$++){const Z=q[$],Ee=r.convert(Z.format,Z.colorSpace),_e=r.convert(Z.type),ze=M(Z.internalFormat,Ee,_e,Z.colorSpace);pe(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,A(_),ze,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,A(_),ze,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ze,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ie(E,_,N){const q=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(_.depthTexture);if($.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q){if($.__webglInit===void 0&&($.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),$.__webglTexture===void 0){$.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),de(n.TEXTURE_CUBE_MAP,_.depthTexture);const We=r.convert(_.depthTexture.format),ge=r.convert(_.depthTexture.type);let Se;_.depthTexture.format===Yi?Se=n.DEPTH_COMPONENT24:_.depthTexture.format===Os&&(Se=n.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Se,_.width,_.height,0,We,ge,null)}}else j(_.depthTexture,0);const Z=$.__webglTexture,Ee=A(_),_e=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+N:n.TEXTURE_2D,ze=_.depthTexture.format===Os?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Yi)pe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,_e,Z,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,ze,_e,Z,0);else if(_.depthTexture.format===Os)pe(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ze,_e,Z,0,Ee):n.framebufferTexture2D(n.FRAMEBUFFER,ze,_e,Z,0);else throw new Error("Unknown depthTexture format")}function me(E){const _=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),q){const $=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),_.__depthDisposeCallback=$}_.__boundDepthTexture=q}if(E.depthTexture&&!_.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)ie(_.__webglFramebuffer[q],E,q);else{const q=E.texture.mipmaps;q&&q.length>0?ie(_.__webglFramebuffer[0],E,0):ie(_.__webglFramebuffer,E,0)}else if(N){_.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[q]),_.__webglDepthbuffer[q]===void 0)_.__webglDepthbuffer[q]=n.createRenderbuffer(),Ze(_.__webglDepthbuffer[q],E,!1);else{const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Z)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Ze(_.__webglDepthbuffer,E,!1);else{const $=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function C(E,_,N){const q=i.get(E);_!==void 0&&Me(q.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&me(E)}function I(E){const _=E.texture,N=i.get(E),q=i.get(_);E.addEventListener("dispose",L);const $=E.textures,Z=E.isWebGLCubeRenderTarget===!0,Ee=$.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=_.version,o.memory.textures++),Z){N.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[_e]=[];for(let ze=0;ze<_.mipmaps.length;ze++)N.__webglFramebuffer[_e][ze]=n.createFramebuffer()}else N.__webglFramebuffer[_e]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let _e=0;_e<_.mipmaps.length;_e++)N.__webglFramebuffer[_e]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Ee)for(let _e=0,ze=$.length;_e<ze;_e++){const We=i.get($[_e]);We.__webglTexture===void 0&&(We.__webglTexture=n.createTexture(),o.memory.textures++)}if(E.samples>0&&pe(E)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let _e=0;_e<$.length;_e++){const ze=$[_e];N.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[_e]);const We=r.convert(ze.format,ze.colorSpace),ge=r.convert(ze.type),Se=M(ze.internalFormat,We,ge,ze.colorSpace,E.isXRRenderTarget===!0),Pe=A(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,Se,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,N.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),Ze(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),de(n.TEXTURE_CUBE_MAP,_);for(let _e=0;_e<6;_e++)if(_.mipmaps&&_.mipmaps.length>0)for(let ze=0;ze<_.mipmaps.length;ze++)Me(N.__webglFramebuffer[_e][ze],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze);else Me(N.__webglFramebuffer[_e],E,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(_)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let _e=0,ze=$.length;_e<ze;_e++){const We=$[_e],ge=i.get(We);let Se=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Se=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,ge.__webglTexture),de(Se,We),Me(N.__webglFramebuffer,E,We,n.COLOR_ATTACHMENT0+_e,Se,0),g(We)&&m(Se)}t.unbindTexture()}else{let _e=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(_e=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(_e,q.__webglTexture),de(_e,_),_.mipmaps&&_.mipmaps.length>0)for(let ze=0;ze<_.mipmaps.length;ze++)Me(N.__webglFramebuffer[ze],E,_,n.COLOR_ATTACHMENT0,_e,ze);else Me(N.__webglFramebuffer,E,_,n.COLOR_ATTACHMENT0,_e,0);g(_)&&m(_e),t.unbindTexture()}E.depthBuffer&&me(E)}function X(E){const _=E.textures;for(let N=0,q=_.length;N<q;N++){const $=_[N];if(g($)){const Z=x(E),Ee=i.get($).__webglTexture;t.bindTexture(Z,Ee),m(Z),t.unbindTexture()}}}const se=[],Y=[];function ae(E){if(E.samples>0){if(pe(E)===!1){const _=E.textures,N=E.width,q=E.height;let $=n.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(E),_e=_.length>1;if(_e)for(let We=0;We<_.length;We++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);const ze=E.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let We=0;We<_.length;We++){if(E.resolveDepthBuffer&&(E.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),_e){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[We]);const ge=i.get(_[We]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,N,q,0,0,N,q,$,n.NEAREST),l===!0&&(se.length=0,Y.length=0,se.push(n.COLOR_ATTACHMENT0+We),E.depthBuffer&&E.resolveDepthBuffer===!1&&(se.push(Z),Y.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let We=0;We<_.length;We++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[We]);const ge=i.get(_[We]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+We,n.TEXTURE_2D,ge,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function A(E){return Math.min(s.maxSamples,E.samples)}function pe(E){const _=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ce(E){const _=o.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function re(E,_){const N=E.colorSpace,q=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==wr&&N!==us&&(Mt.getTransfer(N)===Pt?(q!==Wn||$!==Un)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",N)),_}function he(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=ne,this.rebindTextures=C,this.setupRenderTarget=I,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function XE(n,e){function t(i,s=us){let r;const o=Mt.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===Zu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ku)return n.UNSIGNED_SHORT_5_5_5_1;if(i===fm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===hm)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===cm)return n.BYTE;if(i===um)return n.SHORT;if(i===_o)return n.UNSIGNED_SHORT;if(i===$u)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===Gn)return n.FLOAT;if(i===Xi)return n.HALF_FLOAT;if(i===dm)return n.ALPHA;if(i===pm)return n.RGB;if(i===Wn)return n.RGBA;if(i===Yi)return n.DEPTH_COMPONENT;if(i===Os)return n.DEPTH_STENCIL;if(i===Ju)return n.RED;if(i===Qu)return n.RED_INTEGER;if(i===Tr)return n.RG;if(i===ef)return n.RG_INTEGER;if(i===tf)return n.RGBA_INTEGER;if(i===wa||i===Aa||i===Ca||i===Ra)if(o===Pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hc||i===Gc||i===Wc||i===Xc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yc||i===qc||i===jc||i===$c||i===Zc||i===Kc||i===Jc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yc||i===qc)return o===Pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===jc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===$c)return r.COMPRESSED_R11_EAC;if(i===Zc)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Kc)return r.COMPRESSED_RG11_EAC;if(i===Jc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qc||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===ou||i===au||i===lu||i===cu||i===uu||i===fu||i===hu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qc)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eu)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tu)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nu)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===iu)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===su)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ru)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ou)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===au)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lu)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cu)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uu)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fu)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hu)return o===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===du||i===pu||i===mu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===du)return o===Pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gu||i===_u||i===xu||i===vu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===gu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===_u)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const YE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Em(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new oi({vertexShader:YE,fragmentShader:qE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new fl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $E extends Xs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const v=typeof XRWebGLBinding<"u",g=new jE,m={},x=t.getContextAttributes();let M=null,S=null;const w=[],P=[],L=new tt;let y=null;const b=new Pn;b.viewport=new kt;const W=new Pn;W.viewport=new kt;const D=[b,W],F=new Kv;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ye=w[le];return ye===void 0&&(ye=new Gl,w[le]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(le){let ye=w[le];return ye===void 0&&(ye=new Gl,w[le]=ye),ye.getGripSpace()},this.getHand=function(le){let ye=w[le];return ye===void 0&&(ye=new Gl,w[le]=ye),ye.getHandSpace()};function j(le){const ye=P.indexOf(le.inputSource);if(ye===-1)return;const Me=w[ye];Me!==void 0&&(Me.update(le.inputSource,le.frame,c||o),Me.dispatchEvent({type:le.type,data:le.inputSource}))}function H(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",k);for(let le=0;le<w.length;le++){const ye=P[le];ye!==null&&(P[le]=null,w[le].disconnect(ye))}z=null,V=null,g.reset();for(const le in m)delete m[le];e.setRenderTarget(M),d=null,h=null,f=null,s=null,S=null,ft.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){r=le,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){a=le,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(le){c=le},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",H),s.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(L),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ze=null,ie=null;x.depth&&(ie=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=x.stencil?Os:Yi,Ze=x.stencil?xo:Ei);const me={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(me),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Si(h.textureWidth,h.textureHeight,{format:Wn,type:Un,depthTexture:new Mo(h.textureWidth,h.textureHeight,Ze,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Si(d.framebufferWidth,d.framebufferHeight,{format:Wn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(le){for(let ye=0;ye<le.removed.length;ye++){const Me=le.removed[ye],Ze=P.indexOf(Me);Ze>=0&&(P[Ze]=null,w[Ze].disconnect(Me))}for(let ye=0;ye<le.added.length;ye++){const Me=le.added[ye];let Ze=P.indexOf(Me);if(Ze===-1){for(let me=0;me<w.length;me++)if(me>=P.length){P.push(Me),Ze=me;break}else if(P[me]===null){P[me]=Me,Ze=me;break}if(Ze===-1)break}const ie=w[Ze];ie&&ie.connect(Me)}}const ne=new O,oe=new O;function we(le,ye,Me){ne.setFromMatrixPosition(ye.matrixWorld),oe.setFromMatrixPosition(Me.matrixWorld);const Ze=ne.distanceTo(oe),ie=ye.projectionMatrix.elements,me=Me.projectionMatrix.elements,C=ie[14]/(ie[10]-1),I=ie[14]/(ie[10]+1),X=(ie[9]+1)/ie[5],se=(ie[9]-1)/ie[5],Y=(ie[8]-1)/ie[0],ae=(me[8]+1)/me[0],A=C*Y,pe=C*ae,ce=Ze/(-Y+ae),re=ce*-Y;if(ye.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(re),le.translateZ(ce),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),ie[10]===-1)le.projectionMatrix.copy(ye.projectionMatrix),le.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const he=C+ce,E=I+ce,_=A-re,N=pe+(Ze-re),q=X*I/E*he,$=se*I/E*he;le.projectionMatrix.makePerspective(_,N,q,$,he,E),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function Ae(le,ye){ye===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ye.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let ye=le.near,Me=le.far;g.texture!==null&&(g.depthNear>0&&(ye=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),F.near=W.near=b.near=ye,F.far=W.far=b.far=Me,(z!==F.near||V!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),z=F.near,V=F.far),F.layers.mask=le.layers.mask|6,b.layers.mask=F.layers.mask&-5,W.layers.mask=F.layers.mask&-3;const Ze=le.parent,ie=F.cameras;Ae(F,Ze);for(let me=0;me<ie.length;me++)Ae(ie[me],Ze);ie.length===2?we(F,b,W):F.projectionMatrix.copy(b.projectionMatrix),de(le,F,Ze)};function de(le,ye,Me){Me===null?le.matrix.copy(ye.matrixWorld):(le.matrix.copy(Me.matrixWorld),le.matrix.invert(),le.matrix.multiply(ye.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ye.projectionMatrix),le.projectionMatrixInverse.copy(ye.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=Ar*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(le){l=le,h!==null&&(h.fixedFoveation=le),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=le)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(F)},this.getCameraTexture=function(le){return m[le]};let Ke=null;function vt(le,ye){if(u=ye.getViewerPose(c||o),p=ye,u!==null){const Me=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Ze=!1;Me.length!==F.cameras.length&&(F.cameras.length=0,Ze=!0);for(let I=0;I<Me.length;I++){const X=Me[I];let se=null;if(d!==null)se=d.getViewport(X);else{const ae=f.getViewSubImage(h,X);se=ae.viewport,I===0&&(e.setRenderTargetTextures(S,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(S))}let Y=D[I];Y===void 0&&(Y=new Pn,Y.layers.enable(I),Y.viewport=new kt,D[I]=Y),Y.matrix.fromArray(X.transform.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.projectionMatrix.fromArray(X.projectionMatrix),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert(),Y.viewport.set(se.x,se.y,se.width,se.height),I===0&&(F.matrix.copy(Y.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ze===!0&&F.cameras.push(Y)}const ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const I=f.getDepthInformation(Me[0]);I&&I.isValid&&I.texture&&g.init(I,s.renderState)}if(ie&&ie.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let I=0;I<Me.length;I++){const X=Me[I].camera;if(X){let se=m[X];se||(se=new Em,m[X]=se);const Y=f.getCameraImage(X);se.sourceTexture=Y}}}}for(let Me=0;Me<w.length;Me++){const Ze=P[Me],ie=w[Me];Ze!==null&&ie!==void 0&&ie.update(Ze,ye,c||o)}Ke&&Ke(le,ye),ye.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ye}),p=null}const ft=new Nm;ft.setAnimationLoop(vt),this.setAnimationLoop=function(le){Ke=le},this.dispose=function(){}}}const Rs=new ri,ZE=new mt;function KE(n,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Rm(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,x,M,S){m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),f(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),v(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,M):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=e.get(m),M=x.envMap,S=x.envMapRotation;M&&(g.envMap.value=M,Rs.copy(S),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),g.envMapRotation.value.setFromMatrix4(ZE.makeRotationFromEuler(Rs)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,M){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=M*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const x=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function JE(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const S=M.program;i.uniformBlockBinding(x,S)}function c(x,M){let S=s[x.id];S===void 0&&(p(x),S=u(x),s[x.id]=S,x.addEventListener("dispose",g));const w=M.program;i.updateUBOMapping(x,w);const P=e.render.frame;r[x.id]!==P&&(h(x),r[x.id]=P)}function u(x){const M=f();x.__bindingPointIndex=M;const S=n.createBuffer(),w=x.__size,P=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,S),S}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=s[x.id],S=x.uniforms,w=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let P=0,L=S.length;P<L;P++){const y=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,W=y.length;b<W;b++){const D=y[b];if(d(D,P,b,w)===!0){const F=D.__offset,z=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let j=0;j<z.length;j++){const H=z[j],k=v(H);typeof H=="number"||typeof H=="boolean"?(D.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,F+V,D.__data)):H.isMatrix3?(D.__data[0]=H.elements[0],D.__data[1]=H.elements[1],D.__data[2]=H.elements[2],D.__data[3]=0,D.__data[4]=H.elements[3],D.__data[5]=H.elements[4],D.__data[6]=H.elements[5],D.__data[7]=0,D.__data[8]=H.elements[6],D.__data[9]=H.elements[7],D.__data[10]=H.elements[8],D.__data[11]=0):(H.toArray(D.__data,V),V+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(x,M,S,w){const P=x.value,L=M+"_"+S;if(w[L]===void 0)return typeof P=="number"||typeof P=="boolean"?w[L]=P:w[L]=P.clone(),!0;{const y=w[L];if(typeof P=="number"||typeof P=="boolean"){if(y!==P)return w[L]=P,!0}else if(y.equals(P)===!1)return y.copy(P),!0}return!1}function p(x){const M=x.uniforms;let S=0;const w=16;for(let L=0,y=M.length;L<y;L++){const b=Array.isArray(M[L])?M[L]:[M[L]];for(let W=0,D=b.length;W<D;W++){const F=b[W],z=Array.isArray(F.value)?F.value:[F.value];for(let V=0,j=z.length;V<j;V++){const H=z[V],k=v(H),ne=S%w,oe=ne%k.boundary,we=ne+oe;S+=oe,we!==0&&w-we<k.storage&&(S+=w-we),F.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=k.storage}}}const P=S%w;return P>0&&(S+=w-P),x.__size=S,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$e("WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){const M=x.target;M.removeEventListener("dispose",g);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(const x in s)n.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}const QE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function eT(){return di===null&&(di=new lf(QE,16,16,Tr,Xi),di.name="DFG_LUT",di.minFilter=hn,di.magFilter=hn,di.wrapS=Bi,di.wrapT=Bi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class tT{constructor(e={}){const{canvas:t=ux(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Un}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const v=d,g=new Set([tf,ef,Qu]),m=new Set([Un,Ei,_o,xo,Zu,Ku]),x=new Uint32Array(4),M=new Int32Array(4);let S=null,w=null;const P=[],L=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let W=!1;this._outputColorSpace=Mn;let D=0,F=0,z=null,V=-1,j=null;const H=new kt,k=new kt;let ne=null;const oe=new rt(0);let we=0,Ae=t.width,de=t.height,Ke=1,vt=null,ft=null;const le=new kt(0,0,Ae,de),ye=new kt(0,0,Ae,de);let Me=!1;const Ze=new cf;let ie=!1,me=!1;const C=new mt,I=new O,X=new kt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Y=!1;function ae(){return z===null?Ke:1}let A=i;function pe(T,G){return t.getContext(T,G)}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ju}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Ct,!1),A===null){const G="webgl2";if(A=pe(G,T),A===null)throw pe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Je("WebGLRenderer: "+T.message),T}let ce,re,he,E,_,N,q,$,Z,Ee,_e,ze,We,ge,Se,Pe,Fe,ve,Ye,B,Te,be,De;function xe(){ce=new tb(A),ce.init(),Te=new XE(A,ce),re=new qS(A,ce,e,Te),he=new GE(A,ce),re.reversedDepthBuffer&&h&&he.buffers.depth.setReversed(!0),E=new sb(A),_=new RE,N=new WE(A,ce,he,_,re,Te,E),q=new eb(b),$=new cy(A),be=new XS(A,$),Z=new nb(A,$,E,be),Ee=new ob(A,Z,$,be,E),ve=new rb(A,re,N),Se=new jS(_),_e=new CE(b,q,ce,re,be,Se),ze=new KE(b,_),We=new DE,ge=new OE(ce),Fe=new WS(b,q,he,Ee,p,l),Pe=new HE(b,Ee,re),De=new JE(A,E,re,he),Ye=new YS(A,ce,E),B=new ib(A,ce,E),E.programs=_e.programs,b.capabilities=re,b.extensions=ce,b.properties=_,b.renderLists=We,b.shadowMap=Pe,b.state=he,b.info=E}xe(),v!==Un&&(y=new lb(v,t.width,t.height,s,r));const ee=new $E(b,A);this.xr=ee,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const T=ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ke},this.setPixelRatio=function(T){T!==void 0&&(Ke=T,this.setSize(Ae,de,!1))},this.getSize=function(T){return T.set(Ae,de)},this.setSize=function(T,G,te=!0){if(ee.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=T,de=G,t.width=Math.floor(T*Ke),t.height=Math.floor(G*Ke),te===!0&&(t.style.width=T+"px",t.style.height=G+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(Ae*Ke,de*Ke).floor()},this.setDrawingBufferSize=function(T,G,te){Ae=T,de=G,Ke=te,t.width=Math.floor(T*te),t.height=Math.floor(G*te),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(v===Un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(le)},this.setViewport=function(T,G,te,J){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,G,te,J),he.viewport(H.copy(le).multiplyScalar(Ke).round())},this.getScissor=function(T){return T.copy(ye)},this.setScissor=function(T,G,te,J){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,G,te,J),he.scissor(k.copy(ye).multiplyScalar(Ke).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){he.setScissorTest(Me=T)},this.setOpaqueSort=function(T){vt=T},this.setTransparentSort=function(T){ft=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,te=!0){let J=0;if(T){let K=!1;if(z!==null){const Ie=z.texture.format;K=g.has(Ie)}if(K){const Ie=z.texture.type,Be=m.has(Ie),Le=Fe.getClearColor(),Ve=Fe.getClearAlpha(),qe=Le.r,nt=Le.g,ot=Le.b;Be?(x[0]=qe,x[1]=nt,x[2]=ot,x[3]=Ve,A.clearBufferuiv(A.COLOR,0,x)):(M[0]=qe,M[1]=nt,M[2]=ot,M[3]=Ve,A.clearBufferiv(A.COLOR,0,M))}else J|=A.COLOR_BUFFER_BIT}G&&(J|=A.DEPTH_BUFFER_BIT),te&&(J|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&A.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Ct,!1),Fe.dispose(),We.dispose(),ge.dispose(),_.dispose(),q.dispose(),Ee.dispose(),be.dispose(),De.dispose(),_e.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",Po),ee.removeEventListener("sessionend",Do),li.stop()};function He(T){T.preventDefault(),Ha("WebGLRenderer: Context Lost."),W=!0}function et(){Ha("WebGLRenderer: Context Restored."),W=!1;const T=E.autoReset,G=Pe.enabled,te=Pe.autoUpdate,J=Pe.needsUpdate,K=Pe.type;xe(),E.autoReset=T,Pe.enabled=G,Pe.autoUpdate=te,Pe.needsUpdate=J,Pe.type=K}function Ct(T){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gt(T){const G=T.target;G.removeEventListener("dispose",gt),wn(G)}function wn(T){Yn(T),_.remove(T)}function Yn(T){const G=_.get(T).programs;G!==void 0&&(G.forEach(function(te){_e.releaseProgram(te)}),T.isShaderMaterial&&_e.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,te,J,K,Ie){G===null&&(G=se);const Be=K.isMesh&&K.matrixWorld.determinant()<0,Le=No(T,G,te,J,K);he.setMaterial(J,Be);let Ve=te.index,qe=1;if(J.wireframe===!0){if(Ve=Z.getWireframeAttribute(te),Ve===void 0)return;qe=2}const nt=te.drawRange,ot=te.attributes.position;let je=nt.start*qe,yt=(nt.start+nt.count)*qe;Ie!==null&&(je=Math.max(je,Ie.start*qe),yt=Math.min(yt,(Ie.start+Ie.count)*qe)),Ve!==null?(je=Math.max(je,0),yt=Math.min(yt,Ve.count)):ot!=null&&(je=Math.max(je,0),yt=Math.min(yt,ot.count));const Bt=yt-je;if(Bt<0||Bt===1/0)return;be.setup(K,J,Le,te,Ve);let Vt,St=Ye;if(Ve!==null&&(Vt=$.get(Ve),St=B,St.setIndex(Vt)),K.isMesh)J.wireframe===!0?(he.setLineWidth(J.wireframeLinewidth*ae()),St.setMode(A.LINES)):St.setMode(A.TRIANGLES);else if(K.isLine){let Zt=J.linewidth;Zt===void 0&&(Zt=1),he.setLineWidth(Zt*ae()),K.isLineSegments?St.setMode(A.LINES):K.isLineLoop?St.setMode(A.LINE_LOOP):St.setMode(A.LINE_STRIP)}else K.isPoints?St.setMode(A.POINTS):K.isSprite&&St.setMode(A.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Ga("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))St.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Zt=K._multiDrawStarts,Xe=K._multiDrawCounts,on=K._multiDrawCount,dt=Ve?$.get(Ve).bytesPerElement:1,an=_.get(J).currentProgram.getUniforms();for(let Bn=0;Bn<on;Bn++)an.setValue(A,"_gl_DrawID",Bn),St.render(Zt[Bn]/dt,Xe[Bn])}else if(K.isInstancedMesh)St.renderInstances(je,Bt,K.count);else if(te.isInstancedBufferGeometry){const Zt=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Xe=Math.min(te.instanceCount,Zt);St.renderInstances(je,Bt,Xe)}else St.render(je,Bt)};function Ro(T,G,te){T.transparent===!0&&T.side===Hn&&T.forceSinglePass===!1?(T.side=Dn,T.needsUpdate=!0,Zi(T,G,te),T.side=gs,T.needsUpdate=!0,Zi(T,G,te),T.side=Hn):Zi(T,G,te)}this.compile=function(T,G,te=null){te===null&&(te=T),w=ge.get(te),w.init(G),L.push(w),te.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),T!==te&&T.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights();const J=new Set;return T.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ie=K.material;if(Ie)if(Array.isArray(Ie))for(let Be=0;Be<Ie.length;Be++){const Le=Ie[Be];Ro(Le,te,K),J.add(Le)}else Ro(Ie,te,K),J.add(Ie)}),w=L.pop(),J},this.compileAsync=function(T,G,te=null){const J=this.compile(T,G,te);return new Promise(K=>{function Ie(){if(J.forEach(function(Be){_.get(Be).currentProgram.isReady()&&J.delete(Be)}),J.size===0){K(T);return}setTimeout(Ie,10)}ce.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Ur=null;function gl(T){Ur&&Ur(T)}function Po(){li.stop()}function Do(){li.start()}const li=new Nm;li.setAnimationLoop(gl),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(T){Ur=T,ee.setAnimationLoop(T),T===null?li.stop():li.start()},ee.addEventListener("sessionstart",Po),ee.addEventListener("sessionend",Do),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;const te=ee.enabled===!0&&ee.isPresenting===!0,J=y!==null&&(z===null||te)&&y.begin(b,z);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(G),G=ee.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,G,z),w=ge.get(T,L.length),w.init(G),L.push(w),C.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ze.setFromProjectionMatrix(C,vi,G.reversedDepth),me=this.localClippingEnabled,ie=Se.init(this.clippingPlanes,me),S=We.get(T,P.length),S.init(),P.push(S),ee.enabled===!0&&ee.isPresenting===!0){const Be=b.xr.getDepthSensingMesh();Be!==null&&Fr(Be,G,-1/0,b.sortObjects)}Fr(T,G,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(vt,ft),Y=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Y&&Fe.addToRenderList(S,T),this.info.render.frame++,ie===!0&&Se.beginShadows();const K=w.state.shadowsArray;if(Pe.render(K,T,G),ie===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&y.hasRenderPass())===!1){const Be=S.opaque,Le=S.transmissive;if(w.setupLights(),G.isArrayCamera){const Ve=G.cameras;if(Le.length>0)for(let qe=0,nt=Ve.length;qe<nt;qe++){const ot=Ve[qe];_s(Be,Le,T,ot)}Y&&Fe.render(T);for(let qe=0,nt=Ve.length;qe<nt;qe++){const ot=Ve[qe];Io(S,T,ot,ot.viewport)}}else Le.length>0&&_s(Be,Le,T,G),Y&&Fe.render(T),Io(S,T,G)}z!==null&&F===0&&(N.updateMultisampleRenderTarget(z),N.updateRenderTargetMipmap(z)),J&&y.end(b),T.isScene===!0&&T.onAfterRender(b,T,G),be.resetDefaultState(),V=-1,j=null,L.pop(),L.length>0?(w=L[L.length-1],ie===!0&&Se.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Fr(T,G,te,J){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)te=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ze.intersectsSprite(T)){J&&X.setFromMatrixPosition(T.matrixWorld).applyMatrix4(C);const Be=Ee.update(T),Le=T.material;Le.visible&&S.push(T,Be,Le,te,X.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ze.intersectsObject(T))){const Be=Ee.update(T),Le=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),X.copy(T.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),X.copy(Be.boundingSphere.center)),X.applyMatrix4(T.matrixWorld).applyMatrix4(C)),Array.isArray(Le)){const Ve=Be.groups;for(let qe=0,nt=Ve.length;qe<nt;qe++){const ot=Ve[qe],je=Le[ot.materialIndex];je&&je.visible&&S.push(T,Be,je,te,X.z,ot)}}else Le.visible&&S.push(T,Be,Le,te,X.z,null)}}const Ie=T.children;for(let Be=0,Le=Ie.length;Be<Le;Be++)Fr(Ie[Be],G,te,J)}function Io(T,G,te,J){const{opaque:K,transmissive:Ie,transparent:Be}=T;w.setupLightsView(te),ie===!0&&Se.setGlobalState(b.clippingPlanes,te),J&&he.viewport(H.copy(J)),K.length>0&&xs(K,G,te),Ie.length>0&&xs(Ie,G,te),Be.length>0&&xs(Be,G,te),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function _s(T,G,te,J){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[J.id]===void 0){const je=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[J.id]=new Si(1,1,{generateMipmaps:!0,type:je?Xi:Un,minFilter:Fs,samples:Math.max(4,re.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Ie=w.state.transmissionRenderTarget[J.id],Be=J.viewport||H;Ie.setSize(Be.z*b.transmissionResolutionScale,Be.w*b.transmissionResolutionScale);const Le=b.getRenderTarget(),Ve=b.getActiveCubeFace(),qe=b.getActiveMipmapLevel();b.setRenderTarget(Ie),b.getClearColor(oe),we=b.getClearAlpha(),we<1&&b.setClearColor(16777215,.5),b.clear(),Y&&Fe.render(te);const nt=b.toneMapping;b.toneMapping=Mi;const ot=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),ie===!0&&Se.setGlobalState(b.clippingPlanes,J),xs(T,te,J),N.updateMultisampleRenderTarget(Ie),N.updateRenderTargetMipmap(Ie),ce.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let yt=0,Bt=G.length;yt<Bt;yt++){const Vt=G[yt],{object:St,geometry:Zt,material:Xe,group:on}=Vt;if(Xe.side===Hn&&St.layers.test(J.layers)){const dt=Xe.side;Xe.side=Dn,Xe.needsUpdate=!0,Lo(St,te,J,Zt,Xe,on),Xe.side=dt,Xe.needsUpdate=!0,je=!0}}je===!0&&(N.updateMultisampleRenderTarget(Ie),N.updateRenderTargetMipmap(Ie))}b.setRenderTarget(Le,Ve,qe),b.setClearColor(oe,we),ot!==void 0&&(J.viewport=ot),b.toneMapping=nt}function xs(T,G,te){const J=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Ie=T.length;K<Ie;K++){const Be=T[K],{object:Le,geometry:Ve,group:qe}=Be;let nt=Be.material;nt.allowOverride===!0&&J!==null&&(nt=J),Le.layers.test(te.layers)&&Lo(Le,G,te,Ve,nt,qe)}}function Lo(T,G,te,J,K,Ie){T.onBeforeRender(b,G,te,J,K,Ie),T.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(b,G,te,J,T,Ie),K.transparent===!0&&K.side===Hn&&K.forceSinglePass===!1?(K.side=Dn,K.needsUpdate=!0,b.renderBufferDirect(te,G,J,K,T,Ie),K.side=gs,K.needsUpdate=!0,b.renderBufferDirect(te,G,J,K,T,Ie),K.side=Hn):b.renderBufferDirect(te,G,J,K,T,Ie),T.onAfterRender(b,G,te,J,K,Ie)}function Zi(T,G,te){G.isScene!==!0&&(G=se);const J=_.get(T),K=w.state.lights,Ie=w.state.shadowsArray,Be=K.state.version,Le=_e.getParameters(T,K.state,Ie,G,te),Ve=_e.getProgramCacheKey(Le);let qe=J.programs;J.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,J.fog=G.fog;const nt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;J.envMap=q.get(T.envMap||J.environment,nt),J.envMapRotation=J.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,qe===void 0&&(T.addEventListener("dispose",gt),qe=new Map,J.programs=qe);let ot=qe.get(Ve);if(ot!==void 0){if(J.currentProgram===ot&&J.lightsStateVersion===Be)return vs(T,Le),ot}else Le.uniforms=_e.getUniforms(T),T.onBeforeCompile(Le,b),ot=_e.acquireProgram(Le,Ve),qe.set(Ve,ot),J.uniforms=Le.uniforms;const je=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=Se.uniform),vs(T,Le),J.needsLights=Uo(T),J.lightsStateVersion=Be,J.needsLights&&(je.ambientLightColor.value=K.state.ambient,je.lightProbe.value=K.state.probe,je.directionalLights.value=K.state.directional,je.directionalLightShadows.value=K.state.directionalShadow,je.spotLights.value=K.state.spot,je.spotLightShadows.value=K.state.spotShadow,je.rectAreaLights.value=K.state.rectArea,je.ltc_1.value=K.state.rectAreaLTC1,je.ltc_2.value=K.state.rectAreaLTC2,je.pointLights.value=K.state.point,je.pointLightShadows.value=K.state.pointShadow,je.hemisphereLights.value=K.state.hemi,je.directionalShadowMatrix.value=K.state.directionalShadowMatrix,je.spotLightMatrix.value=K.state.spotLightMatrix,je.spotLightMap.value=K.state.spotLightMap,je.pointShadowMatrix.value=K.state.pointShadowMatrix),J.currentProgram=ot,J.uniformsList=null,ot}function qs(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=Pa.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function vs(T,G){const te=_.get(T);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function No(T,G,te,J,K){G.isScene!==!0&&(G=se),N.resetTextureUnits();const Ie=G.fog,Be=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?G.environment:null,Le=z===null?b.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:wr,Ve=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,qe=q.get(J.envMap||Be,Ve),nt=J.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ot=!!te.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),je=!!te.morphAttributes.position,yt=!!te.morphAttributes.normal,Bt=!!te.morphAttributes.color;let Vt=Mi;J.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Vt=b.toneMapping);const St=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Zt=St!==void 0?St.length:0,Xe=_.get(J),on=w.state.lights;if(ie===!0&&(me===!0||T!==j)){const Gt=T===j&&J.id===V;Se.setState(J,T,Gt)}let dt=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==on.state.version||Xe.outputColorSpace!==Le||K.isBatchedMesh&&Xe.batching===!1||!K.isBatchedMesh&&Xe.batching===!0||K.isBatchedMesh&&Xe.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Xe.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Xe.instancing===!1||!K.isInstancedMesh&&Xe.instancing===!0||K.isSkinnedMesh&&Xe.skinning===!1||!K.isSkinnedMesh&&Xe.skinning===!0||K.isInstancedMesh&&Xe.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Xe.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Xe.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Xe.instancingMorph===!1&&K.morphTexture!==null||Xe.envMap!==qe||J.fog===!0&&Xe.fog!==Ie||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Se.numPlanes||Xe.numIntersection!==Se.numIntersection)||Xe.vertexAlphas!==nt||Xe.vertexTangents!==ot||Xe.morphTargets!==je||Xe.morphNormals!==yt||Xe.morphColors!==Bt||Xe.toneMapping!==Vt||Xe.morphTargetsCount!==Zt)&&(dt=!0):(dt=!0,Xe.__version=J.version);let an=Xe.currentProgram;dt===!0&&(an=Zi(J,G,K));let Bn=!1,Ti=!1,Ki=!1;const Rt=an.getUniforms(),jt=Xe.uniforms;if(he.useProgram(an.program)&&(Bn=!0,Ti=!0,Ki=!0),J.id!==V&&(V=J.id,Ti=!0),Bn||j!==T){he.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Rt.setValue(A,"projectionMatrix",T.projectionMatrix),Rt.setValue(A,"viewMatrix",T.matrixWorldInverse);const ci=Rt.map.cameraPosition;ci!==void 0&&ci.setValue(A,I.setFromMatrixPosition(T.matrixWorld)),re.logarithmicDepthBuffer&&Rt.setValue(A,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Rt.setValue(A,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,Ti=!0,Ki=!0)}if(Xe.needsLights&&(on.state.directionalShadowMap.length>0&&Rt.setValue(A,"directionalShadowMap",on.state.directionalShadowMap,N),on.state.spotShadowMap.length>0&&Rt.setValue(A,"spotShadowMap",on.state.spotShadowMap,N),on.state.pointShadowMap.length>0&&Rt.setValue(A,"pointShadowMap",on.state.pointShadowMap,N)),K.isSkinnedMesh){Rt.setOptional(A,K,"bindMatrix"),Rt.setOptional(A,K,"bindMatrixInverse");const Gt=K.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Rt.setValue(A,"boneTexture",Gt.boneTexture,N))}K.isBatchedMesh&&(Rt.setOptional(A,K,"batchingTexture"),Rt.setValue(A,"batchingTexture",K._matricesTexture,N),Rt.setOptional(A,K,"batchingIdTexture"),Rt.setValue(A,"batchingIdTexture",K._indirectTexture,N),Rt.setOptional(A,K,"batchingColorTexture"),K._colorsTexture!==null&&Rt.setValue(A,"batchingColorTexture",K._colorsTexture,N));const qn=te.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&ve.update(K,te,an),(Ti||Xe.receiveShadow!==K.receiveShadow)&&(Xe.receiveShadow=K.receiveShadow,Rt.setValue(A,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&G.environment!==null&&(jt.envMapIntensity.value=G.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=eT()),Ti&&(Rt.setValue(A,"toneMappingExposure",b.toneMappingExposure),Xe.needsLights&&_l(jt,Ki),Ie&&J.fog===!0&&ze.refreshFogUniforms(jt,Ie),ze.refreshMaterialUniforms(jt,J,Ke,de,w.state.transmissionRenderTarget[T.id]),Pa.upload(A,qs(Xe),jt,N)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Pa.upload(A,qs(Xe),jt,N),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Rt.setValue(A,"center",K.center),Rt.setValue(A,"modelViewMatrix",K.modelViewMatrix),Rt.setValue(A,"normalMatrix",K.normalMatrix),Rt.setValue(A,"modelMatrix",K.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Gt=J.uniformsGroups;for(let ci=0,Ji=Gt.length;ci<Ji;ci++){const Or=Gt[ci];De.update(Or,an),De.bind(Or,an)}}return an}function _l(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Uo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(T,G,te){const J=_.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),_.get(T.texture).__webglTexture=G,_.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:te,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const te=_.get(T);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0};const Fo=A.createFramebuffer();this.setRenderTarget=function(T,G=0,te=0){z=T,D=G,F=te;let J=null,K=!1,Ie=!1;if(T){const Le=_.get(T);if(Le.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(A.FRAMEBUFFER,Le.__webglFramebuffer),H.copy(T.viewport),k.copy(T.scissor),ne=T.scissorTest,he.viewport(H),he.scissor(k),he.setScissorTest(ne),V=-1;return}else if(Le.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(Le.__hasExternalTextures)N.rebindTextures(T,_.get(T.texture).__webglTexture,_.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const nt=T.depthTexture;if(Le.__boundDepthTexture!==nt){if(nt!==null&&_.has(nt)&&(T.width!==nt.image.width||T.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const Ve=T.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ie=!0);const qe=_.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(qe[G])?J=qe[G][te]:J=qe[G],K=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?J=_.get(T).__webglMultisampledFramebuffer:Array.isArray(qe)?J=qe[te]:J=qe,H.copy(T.viewport),k.copy(T.scissor),ne=T.scissorTest}else H.copy(le).multiplyScalar(Ke).floor(),k.copy(ye).multiplyScalar(Ke).floor(),ne=Me;if(te!==0&&(J=Fo),he.bindFramebuffer(A.FRAMEBUFFER,J)&&he.drawBuffers(T,J),he.viewport(H),he.scissor(k),he.setScissorTest(ne),K){const Le=_.get(T.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+G,Le.__webglTexture,te)}else if(Ie){const Le=G;for(let Ve=0;Ve<T.textures.length;Ve++){const qe=_.get(T.textures[Ve]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,te,Le)}}else if(T!==null&&te!==0){const Le=_.get(T.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Le.__webglTexture,te)}V=-1},this.readRenderTargetPixels=function(T,G,te,J,K,Ie,Be,Le=0){if(!(T&&T.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve){he.bindFramebuffer(A.FRAMEBUFFER,Ve);try{const qe=T.textures[Le],nt=qe.format,ot=qe.type;if(T.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Le),!re.textureFormatReadable(nt)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(ot)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-J&&te>=0&&te<=T.height-K&&A.readPixels(G,te,J,K,Te.convert(nt),Te.convert(ot),Ie)}finally{const qe=z!==null?_.get(z).__webglFramebuffer:null;he.bindFramebuffer(A.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(T,G,te,J,K,Ie,Be,Le=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Be!==void 0&&(Ve=Ve[Be]),Ve)if(G>=0&&G<=T.width-J&&te>=0&&te<=T.height-K){he.bindFramebuffer(A.FRAMEBUFFER,Ve);const qe=T.textures[Le],nt=qe.format,ot=qe.type;if(T.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Le),!re.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,je),A.bufferData(A.PIXEL_PACK_BUFFER,Ie.byteLength,A.STREAM_READ),A.readPixels(G,te,J,K,Te.convert(nt),Te.convert(ot),0);const yt=z!==null?_.get(z).__webglFramebuffer:null;he.bindFramebuffer(A.FRAMEBUFFER,yt);const Bt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await fx(A,Bt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,je),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Ie),A.deleteBuffer(je),A.deleteSync(Bt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,te=0){const J=Math.pow(2,-te),K=Math.floor(T.image.width*J),Ie=Math.floor(T.image.height*J),Be=G!==null?G.x:0,Le=G!==null?G.y:0;N.setTexture2D(T,0),A.copyTexSubImage2D(A.TEXTURE_2D,te,0,0,Be,Le,K,Ie),he.unbindTexture()};const Oo=A.createFramebuffer(),xl=A.createFramebuffer();this.copyTextureToTexture=function(T,G,te=null,J=null,K=0,Ie=0){let Be,Le,Ve,qe,nt,ot,je,yt,Bt;const Vt=T.isCompressedTexture?T.mipmaps[Ie]:T.image;if(te!==null)Be=te.max.x-te.min.x,Le=te.max.y-te.min.y,Ve=te.isBox3?te.max.z-te.min.z:1,qe=te.min.x,nt=te.min.y,ot=te.isBox3?te.min.z:0;else{const jt=Math.pow(2,-K);Be=Math.floor(Vt.width*jt),Le=Math.floor(Vt.height*jt),T.isDataArrayTexture?Ve=Vt.depth:T.isData3DTexture?Ve=Math.floor(Vt.depth*jt):Ve=1,qe=0,nt=0,ot=0}J!==null?(je=J.x,yt=J.y,Bt=J.z):(je=0,yt=0,Bt=0);const St=Te.convert(G.format),Zt=Te.convert(G.type);let Xe;G.isData3DTexture?(N.setTexture3D(G,0),Xe=A.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(N.setTexture2DArray(G,0),Xe=A.TEXTURE_2D_ARRAY):(N.setTexture2D(G,0),Xe=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,G.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,G.unpackAlignment);const on=A.getParameter(A.UNPACK_ROW_LENGTH),dt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),an=A.getParameter(A.UNPACK_SKIP_PIXELS),Bn=A.getParameter(A.UNPACK_SKIP_ROWS),Ti=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Vt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Vt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,qe),A.pixelStorei(A.UNPACK_SKIP_ROWS,nt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,ot);const Ki=T.isDataArrayTexture||T.isData3DTexture,Rt=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const jt=_.get(T),qn=_.get(G),Gt=_.get(jt.__renderTarget),ci=_.get(qn.__renderTarget);he.bindFramebuffer(A.READ_FRAMEBUFFER,Gt.__webglFramebuffer),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let Ji=0;Ji<Ve;Ji++)Ki&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_.get(T).__webglTexture,K,ot+Ji),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,_.get(G).__webglTexture,Ie,Bt+Ji)),A.blitFramebuffer(qe,nt,Be,Le,je,yt,Be,Le,A.DEPTH_BUFFER_BIT,A.NEAREST);he.bindFramebuffer(A.READ_FRAMEBUFFER,null),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(K!==0||T.isRenderTargetTexture||_.has(T)){const jt=_.get(T),qn=_.get(G);he.bindFramebuffer(A.READ_FRAMEBUFFER,Oo),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,xl);for(let Gt=0;Gt<Ve;Gt++)Ki?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,jt.__webglTexture,K,ot+Gt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,jt.__webglTexture,K),Rt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,qn.__webglTexture,Ie,Bt+Gt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,qn.__webglTexture,Ie),K!==0?A.blitFramebuffer(qe,nt,Be,Le,je,yt,Be,Le,A.COLOR_BUFFER_BIT,A.NEAREST):Rt?A.copyTexSubImage3D(Xe,Ie,je,yt,Bt+Gt,qe,nt,Be,Le):A.copyTexSubImage2D(Xe,Ie,je,yt,qe,nt,Be,Le);he.bindFramebuffer(A.READ_FRAMEBUFFER,null),he.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Rt?T.isDataTexture||T.isData3DTexture?A.texSubImage3D(Xe,Ie,je,yt,Bt,Be,Le,Ve,St,Zt,Vt.data):G.isCompressedArrayTexture?A.compressedTexSubImage3D(Xe,Ie,je,yt,Bt,Be,Le,Ve,St,Vt.data):A.texSubImage3D(Xe,Ie,je,yt,Bt,Be,Le,Ve,St,Zt,Vt):T.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Ie,je,yt,Be,Le,St,Zt,Vt.data):T.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Ie,je,yt,Vt.width,Vt.height,St,Vt.data):A.texSubImage2D(A.TEXTURE_2D,Ie,je,yt,Be,Le,St,Zt,Vt);A.pixelStorei(A.UNPACK_ROW_LENGTH,on),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,dt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,an),A.pixelStorei(A.UNPACK_SKIP_ROWS,Bn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ti),Ie===0&&G.generateMipmaps&&A.generateMipmap(Xe),he.unbindTexture()},this.initRenderTarget=function(T){_.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),he.unbindTexture()},this.resetState=function(){D=0,F=0,z=null,he.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const hr=new ri(0,0,0,"YXZ"),dr=new O,nT={type:"change"},iT={type:"lock"},sT={type:"unlock"},Dd=.002,Id=Math.PI/2;class rT extends Lm{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=oT.bind(this),this._onPointerlockChange=aT.bind(this),this._onPointerlockError=lT.bind(this),this.domElement!==null&&this.connect(this.domElement)}connect(e){super.connect(e),this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;dr.setFromMatrixColumn(t.matrix,0),dr.crossVectors(t.up,dr),t.position.addScaledVector(dr,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;dr.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(dr,e)}lock(e=!1){this.domElement.requestPointerLock({unadjustedMovement:e})}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function oT(n){if(this.enabled===!1||this.isLocked===!1)return;const e=this.object;hr.setFromQuaternion(e.quaternion),hr.y-=n.movementX*Dd*this.pointerSpeed,hr.x-=n.movementY*Dd*this.pointerSpeed,hr.x=Math.max(Id-this.maxPolarAngle,Math.min(Id-this.minPolarAngle,hr.x)),e.quaternion.setFromEuler(hr),this.dispatchEvent(nT)}function aT(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(iT),this.isLocked=!0):(this.dispatchEvent(sT),this.isLocked=!1)}function lT(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}const Ld={type:"change"},xf={type:"start"},km={type:"end"},xa=new Pr,Nd=new Fi,cT=Math.cos(70*Rx.DEG2RAD),Kt=new O,An=2*Math.PI,Lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_c=1e-6;class uT extends Lm{constructor(e,t=null){super(e,t),this.state=Lt.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ks.ROTATE,MIDDLE:ks.DOLLY,RIGHT:ks.PAN},this.touches={ONE:mr.ROTATE,TWO:mr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Jt,this._lastTargetPosition=new O,this._quat=new Jt().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new od,this._sphericalDelta=new od,this._scale=1,this._panOffset=new O,this._rotateStart=new tt,this._rotateEnd=new tt,this._rotateDelta=new tt,this._panStart=new tt,this._panEnd=new tt,this._panDelta=new tt,this._dollyStart=new tt,this._dollyEnd=new tt,this._dollyDelta=new tt,this._dollyDirection=new O,this._mouse=new tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hT.bind(this),this._onPointerDown=fT.bind(this),this._onPointerUp=dT.bind(this),this._onContextMenu=yT.bind(this),this._onMouseWheel=gT.bind(this),this._onKeyDown=_T.bind(this),this._onTouchStart=xT.bind(this),this._onTouchMove=vT.bind(this),this._onMouseDown=pT.bind(this),this._onMouseMove=mT.bind(this),this._interceptControlDown=MT.bind(this),this._interceptControlUp=ST.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ld),this.update(),this.state=Lt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Kt.copy(t).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===Lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=An:i>Math.PI&&(i-=An),s<-Math.PI?s+=An:s>Math.PI&&(s-=An),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Kt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xa.origin.copy(this.object.position),xa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xa.direction))<cT?this.object.lookAt(this.target):(Nd.setFromNormalAndCoplanarPoint(this.object.up,this.target),xa.intersectPlane(Nd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_c||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_c||this._lastTargetPosition.distanceToSquared(this.target)>_c?(this.dispatchEvent(Ld),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?An/60*this.autoRotateSpeed*e:An/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Kt.setFromMatrixColumn(t,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,t){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(t,1):(Kt.setFromMatrixColumn(t,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Kt.copy(s).sub(this.target);let r=Kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=t-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(An*this._rotateDelta.x/t.clientHeight),this._rotateUp(An*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-An*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(An*this._rotateDelta.x/t.clientHeight),this._rotateUp(An*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new tt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function fT(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function hT(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function dT(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(km),this.state=Lt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function pT(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case ks.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Lt.DOLLY;break;case ks.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Lt.ROTATE}break;case ks.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Lt.PAN}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(xf)}function mT(n){switch(this.state){case Lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function gT(n){this.enabled===!1||this.enableZoom===!1||this.state!==Lt.NONE||(n.preventDefault(),this.dispatchEvent(xf),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(km))}function _T(n){this.enabled!==!1&&this._handleKeyDown(n)}function xT(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case mr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Lt.TOUCH_ROTATE;break;case mr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Lt.TOUCH_PAN;break;default:this.state=Lt.NONE}break;case 2:switch(this.touches.TWO){case mr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Lt.TOUCH_DOLLY_PAN;break;case mr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Lt.TOUCH_DOLLY_ROTATE;break;default:this.state=Lt.NONE}break;default:this.state=Lt.NONE}this.state!==Lt.NONE&&this.dispatchEvent(xf)}function vT(n){switch(this._trackPointer(n),this.state){case Lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Lt.NONE}}function yT(n){this.enabled!==!1&&n.preventDefault()}function MT(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ST(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class bT extends Lr{constructor(e){super(e),this.littleEndian=!0}load(e,t,i,s){const r=this,o=new Hv(r.manager);o.setPath(r.path),o.setResponseType("arraybuffer"),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}_getDataView(e,t,i,s){switch(i){case"F":return s===8?e.getFloat64(t,this.littleEndian):e.getFloat32(t,this.littleEndian);case"I":return s===1?e.getInt8(t):s===2?e.getInt16(t,this.littleEndian):e.getInt32(t,this.littleEndian);case"U":return s===1?e.getUint8(t):s===2?e.getUint16(t,this.littleEndian):e.getUint32(t,this.littleEndian)}}parse(e){function t(d,p){const v=d.length,g=new Uint8Array(p);let m=0,x=0,M,S,w;do if(M=d[m++],M<32){if(M++,x+M>p)throw new Error("Output buffer is not large enough");if(m+M>v)throw new Error("Invalid compressed data");do g[x++]=d[m++];while(--M)}else{if(S=M>>5,w=x-((M&31)<<8)-1,m>=v)throw new Error("Invalid compressed data");if(S===7&&(S+=d[m++],m>=v))throw new Error("Invalid compressed data");if(w-=d[m++],x+S+2>p)throw new Error("Output buffer is not large enough");if(w<0)throw new Error("Invalid compressed data");if(w>=x)throw new Error("Invalid compressed data");do g[x++]=g[w++];while(--S+2)}while(m<v);return g}function i(d){const p={},v=new Uint8Array(d);let g="",m="",x=0,M=!1;const S=v.length;for(;x<S&&M===!1;){const y=String.fromCharCode(v[x++]);y===`
`||y==="\r"?(m.trim().toLowerCase().startsWith("data")&&(M=!0),m=""):m+=y,g+=y}const w=g.search(/[\r\n]DATA\s(\S*)\s/i),P=/[\r\n]DATA\s(\S*)\s/i.exec(g.slice(w-1));if(p.data=P[1],p.headerLen=P[0].length+w,p.str=g.slice(0,p.headerLen),p.str=p.str.replace(/#.*/gi,""),p.version=/^VERSION (.*)/im.exec(p.str),p.fields=/^FIELDS (.*)/im.exec(p.str),p.size=/^SIZE (.*)/im.exec(p.str),p.type=/^TYPE (.*)/im.exec(p.str),p.count=/^COUNT (.*)/im.exec(p.str),p.width=/^WIDTH (.*)/im.exec(p.str),p.height=/^HEIGHT (.*)/im.exec(p.str),p.viewpoint=/^VIEWPOINT (.*)/im.exec(p.str),p.points=/^POINTS (.*)/im.exec(p.str),p.version!==null&&(p.version=parseFloat(p.version[1])),p.fields=p.fields!==null?p.fields[1].split(" "):[],p.type!==null&&(p.type=p.type[1].split(" ")),p.width!==null&&(p.width=parseInt(p.width[1])),p.height!==null&&(p.height=parseInt(p.height[1])),p.viewpoint!==null&&(p.viewpoint=p.viewpoint[1]),p.points!==null&&(p.points=parseInt(p.points[1],10)),p.points===null&&(p.points=p.width*p.height),p.size!==null&&(p.size=p.size[1].split(" ").map(function(y){return parseInt(y,10)})),p.count!==null)p.count=p.count[1].split(" ").map(function(y){return parseInt(y,10)});else{p.count=[];for(let y=0,b=p.fields.length;y<b;y++)p.count.push(1)}p.offset={};let L=0;for(let y=0,b=p.fields.length;y<b;y++)p.data==="ascii"?p.offset[p.fields[y]]=y:(p.offset[p.fields[y]]=L,L+=p.size[y]*p.count[y]);return p.rowSize=L,p}const s=i(e),r=[],o=[],a=[],l=[],c=[],u=new rt;if(s.data==="ascii"){const d=s.offset,g=new TextDecoder().decode(e).slice(s.headerLen).split(`
`);for(let m=0,x=g.length;m<x;m++){if(g[m]==="")continue;const M=g[m].split(" ");if(d.x!==void 0&&(r.push(parseFloat(M[d.x])),r.push(parseFloat(M[d.y])),r.push(parseFloat(M[d.z]))),d.rgb!==void 0){const S=s.fields.findIndex(D=>D==="rgb"),w=s.type[S],P=parseFloat(M[d.rgb]);let L=P;if(w==="F"){const D=new Float32Array(1);D[0]=P,L=new Int32Array(D.buffer)[0]}const y=(L>>16&255)/255,b=(L>>8&255)/255,W=(L>>0&255)/255;u.setRGB(y,b,W,Mn),a.push(u.r,u.g,u.b)}d.normal_x!==void 0&&(o.push(parseFloat(M[d.normal_x])),o.push(parseFloat(M[d.normal_y])),o.push(parseFloat(M[d.normal_z]))),d.intensity!==void 0&&l.push(parseFloat(M[d.intensity])),d.label!==void 0&&c.push(parseInt(M[d.label]))}}if(s.data==="binary_compressed"){const d=new Uint32Array(e.slice(s.headerLen,s.headerLen+8)),p=d[0],v=d[1],g=t(new Uint8Array(e,s.headerLen+8,p),v),m=new DataView(g.buffer),x=s.offset;for(let M=0;M<s.points;M++){if(x.x!==void 0){const S=s.fields.indexOf("x"),w=s.fields.indexOf("y"),P=s.fields.indexOf("z");r.push(this._getDataView(m,s.points*x.x+s.size[S]*M,s.type[S],s.size[S])),r.push(this._getDataView(m,s.points*x.y+s.size[w]*M,s.type[w],s.size[w])),r.push(this._getDataView(m,s.points*x.z+s.size[P]*M,s.type[P],s.size[P]))}if(x.rgb!==void 0){const S=s.fields.indexOf("rgb"),w=m.getUint8(s.points*x.rgb+s.size[S]*M+2)/255,P=m.getUint8(s.points*x.rgb+s.size[S]*M+1)/255,L=m.getUint8(s.points*x.rgb+s.size[S]*M+0)/255;u.setRGB(w,P,L,Mn),a.push(u.r,u.g,u.b)}if(x.normal_x!==void 0){const S=s.fields.indexOf("normal_x"),w=s.fields.indexOf("normal_y"),P=s.fields.indexOf("normal_z");o.push(this._getDataView(m,s.points*x.normal_x+s.size[S]*M,s.type[S],s.size[S])),o.push(this._getDataView(m,s.points*x.normal_y+s.size[w]*M,s.type[w],s.size[w])),o.push(this._getDataView(m,s.points*x.normal_z+s.size[P]*M,s.type[P],s.size[P]))}if(x.intensity!==void 0){const S=s.fields.indexOf("intensity");l.push(this._getDataView(m,s.points*x.intensity+s.size[S]*M,s.type[S],s.size[S]))}if(x.label!==void 0){const S=s.fields.indexOf("label");c.push(this._getDataView(m,s.points*x.label+s.size[S]*M,s.type[S],s.size[S]))}}}if(s.data==="binary"){const d=new DataView(e,s.headerLen),p=s.offset;for(let v=0,g=0;v<s.points;v++,g+=s.rowSize){if(p.x!==void 0){const m=s.fields.indexOf("x"),x=s.fields.indexOf("y"),M=s.fields.indexOf("z");r.push(this._getDataView(d,g+p.x,s.type[m],s.size[m])),r.push(this._getDataView(d,g+p.y,s.type[x],s.size[x])),r.push(this._getDataView(d,g+p.z,s.type[M],s.size[M]))}if(p.rgb!==void 0){const m=d.getUint8(g+p.rgb+2)/255,x=d.getUint8(g+p.rgb+1)/255,M=d.getUint8(g+p.rgb+0)/255;u.setRGB(m,x,M,Mn),a.push(u.r,u.g,u.b)}if(p.normal_x!==void 0){const m=s.fields.indexOf("normal_x"),x=s.fields.indexOf("normal_y"),M=s.fields.indexOf("normal_z");o.push(this._getDataView(d,g+p.normal_x,s.type[m],s.size[m])),o.push(this._getDataView(d,g+p.normal_y,s.type[x],s.size[x])),o.push(this._getDataView(d,g+p.normal_z,s.type[M],s.size[M]))}if(p.intensity!==void 0){const m=s.fields.indexOf("intensity");l.push(this._getDataView(d,g+p.intensity,s.type[m],s.size[m]))}if(p.label!==void 0){const m=s.fields.indexOf("label");c.push(this._getDataView(d,g+p.label,s.type[m],s.size[m]))}}}const f=new Xt;r.length>0&&f.setAttribute("position",new Tt(r,3)),o.length>0&&f.setAttribute("normal",new Tt(o,3)),a.length>0&&f.setAttribute("color",new Tt(a,3)),l.length>0&&f.setAttribute("intensity",new Tt(l,1)),c.length>0&&f.setAttribute("label",new Xx(c,1)),f.computeBoundingSphere();const h=new Ya({size:.005});return a.length>0&&(h.vertexColors=!0),new Eu(f,h)}}function ET(n,e,t){const i=new O().subVectors(e,n),s=new O().subVectors(t,n),r=new O().crossVectors(i,s).normalize(),o=-r.dot(n);return{normal:r,d:o}}function TT(n,e,t){return Math.abs(e.dot(n)+t)}function wT(n,e,t,i={}){const{maxDisplayPoints:s=1/0}=i,r=n.getAttribute("position"),o=n.getAttribute("color"),a=!!o,l=e.size+t.size,c=l>0?s*e.size/l:0,u=l>0?s*t.size/l:0,f=l>s&&c>0?Math.max(1,Math.floor(e.size/c)):1,h=l>s&&u>0?Math.max(1,Math.floor(t.size/u)):1,d=[],p=[],v=[],g=[];let m=0;for(const w of e)m++%f===0&&(d.push(r.getX(w),r.getY(w),r.getZ(w)),a?p.push(o.getX(w),o.getY(w),o.getZ(w)):p.push(.75,.75,.75));let x=0;for(const w of t)x++%h===0&&(v.push(r.getX(w),r.getY(w),r.getZ(w)),a?g.push(o.getX(w),o.getY(w),o.getZ(w)):g.push(.75,.75,.75));const M=new Xt;M.setAttribute("position",new Tt(d,3)),M.setAttribute("color",new Tt(p,3)),M.computeBoundingSphere();const S=new Xt;return S.setAttribute("position",new Tt(v,3)),S.setAttribute("color",new Tt(g,3)),S.computeBoundingSphere(),{floorGeo:M,obstacleGeo:S}}function AT(n=12345){let e=n;return()=>(e=e*1664525+1013904223>>>0,e/4294967296)}function CT(n){return[...n].sort((e,t)=>{if(t.indices.size!==e.indices.size)return t.indices.size-e.indices.size;const i=e.centroid,s=t.centroid;return i.x!==s.x?i.x-s.x:i.y!==s.y?i.y-s.y:i.z-s.z})}function RT(n,e={}){const{distanceThreshold:t=.05,maxIterations:i=150,minPlanePoints:s=20,maxPlanes:r=8,randomSeed:o=12345}=e,a=n.getAttribute("position");if(!a||a.count===0)return{planes:[],remainingIndices:new Set};const l=[];for(let d=0;d<a.count;d++)l.push(new O(a.getX(d),a.getY(d),a.getZ(d)));const c=AT(o),u=[];let f=new Set([...Array(l.length).keys()]);for(let d=0;d<r&&!(f.size<s*3);d++){const p=[...f];let v=[],g=null,m=0;const x=S=>Math.floor(c()*S);for(let S=0;S<i;S++){const w=p[x(p.length)];let P=p[x(p.length)],L=p[x(p.length)];for(;P===w;)P=p[x(p.length)];for(;L===w||L===P;)L=p[x(p.length)];const{normal:y,d:b}=ET(l[w],l[P],l[L]),W=[];for(const D of f)TT(l[D],y,b)<=t&&W.push(D);W.length>v.length&&(v=W,g=y.clone(),m=b)}if(v.length<s)break;const M=new O(0,0,0);for(const S of v)M.add(l[S]);M.divideScalar(v.length),u.push({indices:new Set(v),normal:g,d:m,centroid:M});for(const S of v)f.delete(S)}const h=[];for(const d of u){let p=!1;for(const v of h){const g=d.normal.dot(v.normal),m=Math.abs(d.normal.dot(v.centroid)+d.d);if(g>.98&&m<t*2){d.indices.forEach(x=>v.indices.add(x)),p=!0;break}}p||h.push(d)}return{planes:CT(h),remainingIndices:f}}function PT(n,e){const t=n.filter(s=>Math.abs(s.normal.y)>.7),i=t.length>0?t:n;return i.sort((s,r)=>{if(r.indices.size!==s.indices.size)return r.indices.size-s.indices.size;const o=[...s.indices].reduce((l,c)=>l+e[c].y,0)/s.indices.size,a=[...r.indices].reduce((l,c)=>l+e[c].y,0)/r.indices.size;return o-a}),i[0]||n[0]}function DT(n){if(n.length<2)return new Jt;let e=0,t=0,i=0,s=0,r=0;for(const w of n)e+=w.x,t+=w.z,i+=w.x*w.x,s+=w.z*w.z,r+=w.x*w.z;const o=n.length,a=e/o,l=t/o,c=i/o-a*a,u=s/o-l*l,f=r/o-a*l,h=c+u,d=c*u-f*f,v=h/2+Math.sqrt(h*h/4-d)-c,g=f,m=Math.sqrt(g*g+v*v)||1e-6,x=m<1e-6?1:g/m,M=m<1e-6?0:v/m,S=-Math.atan2(M,x);return new Jt().setFromAxisAngle(new O(0,1,0),S)}function Ud(n,e){const t=e.clone().normalize(),i=t.dot(n);return n.clone().sub(t.multiplyScalar(i))}function Fd(n){const e=new O(0,1,0),t=n.clone().normalize(),i=t.dot(e),s=new Jt;return i>.9999?s.identity():i<-.9999?(s.setFromAxisAngle(new O(1,0,0),Math.PI),s):(s.setFromUnitVectors(t,e),s)}function va(){return new Jt().setFromAxisAngle(new O(1,0,0),Math.PI)}const $a="slam-ar-robot-work-area-v3",ya={fill:16775620,fillOpacity:.62,outline:16361509},IT={inside:2278750};function LT(n){if(!Array.isArray(n)||n.length<3)return null;const e=n.map(t=>({x:Number(t.x),z:Number(t.z)})).filter(t=>Number.isFinite(t.x)&&Number.isFinite(t.z));return e.length>=3?e:null}function NT(){try{const n=localStorage.getItem($a);return n?LT(JSON.parse(n)?.points):null}catch{return null}}function UT(n){if(!n||n.length<3){localStorage.removeItem($a);return}localStorage.setItem($a,JSON.stringify({points:n,savedAt:Date.now()}))}function FT(){localStorage.removeItem($a)}function Ps(n){if(n==null||n==="")return null;const e=Number(n);return Number.isFinite(e)?e:null}const OT=!0,BT="/map-transform.json";let Da=null,Za=null,Ka=null;function zT(n){if(!n||typeof n!="object")throw new Error("map-transform.json 根节点必须是对象");const e=n.layoutCentroid_C;if(!e||typeof e!="object")throw new Error("缺少 layoutCentroid_C");const t=Ps(e.x),i=Ps(e.y),s=Ps(e.z);if(t===null||i===null||s===null)throw new Error("layoutCentroid_C.x/y/z 无效");const r=n.sceneRotation?.quaternion;if(!r||typeof r!="object")throw new Error("缺少 sceneRotation.quaternion");const o=Ps(r.x),a=Ps(r.y),l=Ps(r.z),c=Ps(r.w);if(o===null||a===null||l===null||c===null)throw new Error("sceneRotation.quaternion 分量无效");const u=new Jt(o,a,l,c);return Math.abs(u.length()-1)>.01&&u.normalize(),{layoutCentroid_C:new O(t,i,s),sceneRotation:u}}async function kT(n=BT){if(Da)return Da;const e=await fetch(n,{cache:"no-cache"});if(!e.ok)throw new Error(`加载 ${n} 失败: HTTP ${e.status}`);const t=await e.json(),i=zT(t);return Da=t,Za=i.layoutCentroid_C,Ka=i.sceneRotation,t}function VT(){return Za?Za.clone():null}function HT(){return Ka?Ka.clone():null}function GT(){Da=null,Za=null,Ka=null}const WT=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},XT={class:"relative w-full h-full touch-none"},YT={key:0,class:"absolute inset-0 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm"},qT={class:"text-center w-[min(22rem,calc(100vw-2rem))] px-4"},jT={class:"text-slate-200 text-lg mb-1"},$T={class:"h-2.5 w-full rounded-full bg-slate-700/90 overflow-hidden border border-slate-600/60 mb-3"},ZT={key:0,class:"text-slate-400 text-sm tabular-nums"},KT={key:1,class:"text-slate-300 text-sm leading-relaxed px-1"},JT={key:1,class:"absolute inset-0 flex items-center justify-center bg-slate-900/90"},QT={class:"max-w-md p-6 bg-slate-800 rounded-xl border border-slate-600"},ew={class:"text-amber-400 mb-4"},tw={key:2,class:"absolute top-4 left-4 z-20 flex max-w-[calc(100vw-2rem)] flex-col gap-2"},nw={key:0,class:"flex flex-wrap gap-1"},iw=["onClick"],sw={class:"flex flex-wrap gap-1 items-center"},rw={key:1,class:"flex flex-wrap gap-1 items-center"},ow={key:2,class:"max-w-xs rounded-lg border border-yellow-500/40 bg-slate-900/90 px-3 py-2 text-xs text-yellow-100/95"},aw={key:0,class:"text-red-300"},lw={key:1,class:"text-yellow-200/80"},cw={key:2,class:"text-slate-400"},uw={key:3,class:"absolute bottom-4 left-4 px-4 py-2 bg-slate-800/90 rounded-lg text-slate-200 text-sm border border-slate-600"},fw={key:0,class:"absolute inset-0 flex items-center justify-center pointer-events-none"},hw={class:"interaction-switch-header-main"},dw={class:"interaction-switch-icon"},pw={key:0,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},mw={key:1,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},gw={key:2,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},_w={key:3,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},xw={class:"interaction-switch-title"},vw={key:0,class:"interaction-fan-speed"},yw={class:"interaction-fan-speed-value"},Mw={class:"interaction-switch-body"},Sw={class:"interaction-switch-label-row"},bw={class:"interaction-switch-label"},Ew={key:0,class:"tech-glow-dot"},Tw={class:"interaction-auto-row"},ww={key:4,class:"absolute inset-0 flex items-center justify-center pointer-events-none"},Aw={key:5,class:"absolute top-4 right-4 flex flex-col items-end gap-2 pointer-events-none z-10"},Cw={class:"map-telemetry-temp px-3 py-2 bg-slate-800/92 rounded-lg border border-cyan-500/40 text-right shadow-lg shadow-cyan-900/20"},Rw={class:"text-slate-50 text-xl font-semibold tabular-nums leading-tight"},Pw=`
varying vec2 vLocalXY;
void main() {
  vLocalXY = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Dw=`
varying vec2 vLocalXY;
uniform vec3 uColor;
uniform float uRadius;
uniform float uOpacityScale;
uniform float uLightGain;

void main() {
  float r = length(vLocalXY);
  float t = clamp(r / max(uRadius, 1e-4), 0.0, 1.0);
  float fog = 1.0 - smoothstep(0.02, 1.0, t);
  fog = pow(fog, 1.5);
  float n = sin(vLocalXY.x * 3.7 + vLocalXY.y * 2.9) * sin(vLocalXY.y * 4.1 - vLocalXY.x * 1.8);
  fog = clamp(fog + n * 0.04 * fog, 0.0, 1.0);
  vec3 rgb = uColor * uLightGain;
  float a = fog * uOpacityScale;
  gl_FragColor = vec4(rgb, a);
}
`,Od=.06,Iw=1.2,Lw=.02,Bd=.2,Nw=.08,Uw=1,Fw={__name:"PCDMapViewer",props:{pcdUrl:{type:String,default:"/map.pcd"},pointSize:{type:Number,default:.02},floorDistanceThreshold:{type:Number,default:.05},planeDetectionSeed:{type:Number,default:12345},onlyWalkingPlaneNumber:{type:Number,default:null},moveSpeed:{type:Number,default:.15},cameraHeightAboveFloor:{type:Number,default:2.5},maxDisplayPoints:{type:Number,default:0},interactionDistanceThreshold:{type:Number,default:1.5},interactionZones:{type:Array,default:()=>[]},spawnCanonical:{type:Object,default:null,validator:n=>n==null||typeof n=="object"&&typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"},useCanonicalCoords:{type:Boolean,default:!0},collisionRadius:{type:Number,default:.4},jumpForce:{type:Number,default:.12},gravity:{type:Number,default:.012},syncedDeviceState:{default:void 0,validator:n=>n==null||typeof n=="object"&&!Array.isArray(n)},telemetry:{type:Object,default:()=>({})},robotEnabled:{type:Boolean,default:!1},robotModelUrl:{type:String,default:"/robot.glb"},robotWaypoints:{type:Array,default:()=>[]},robotPose:{type:Object,default:null,validator:n=>n==null||typeof n=="object"&&typeof n.x=="number"&&typeof n.y=="number"&&typeof n.z=="number"},robotMoveSpeed:{type:Number,default:6}},emits:["pointClick","pointHover","switchToggle","autoToggle","mapReady","workAreaSaved"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=bt(null),o=bt(!0),a=bt(0),l=bt("download"),c=bt(""),u=bt(null),f=bt(null),h=bt(!1),d=bt({}),p=bt({风扇:!1,大门:!1,灯:!1}),v=bt(null);let g=null,m,x,M,S,w,P,L,y=null,b=new O,W=12;const D=new O,F=new Jt,z=new O;let V=null;const j={value:1e9};function H(){if(!ne?.geometry?.boundingBox||!oe?.geometry?.boundingBox)return;ne.geometry.computeBoundingBox(),oe.geometry.computeBoundingBox();const R=ne.geometry.boundingBox.max.y,U=oe.geometry.boundingBox.max.y,Q=Math.max(U-R,.25);j.value=R+Q*.42}function k(R){if(!oe?.material)return;const U=oe.material;R?(H(),U.onBeforeCompile=Q=>{Q.uniforms.uCeilingClipY=j,Q.vertexShader=`uniform float uCeilingClipY;
`+Q.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
          vec4 _obWorld = modelMatrix * vec4(transformed, 1.0);
          if (_obWorld.y > uCeilingClipY) {
            gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
            gl_PointSize = 0.0;
          }`)},U.needsUpdate=!0):(j.value=1e9,U.onBeforeCompile=null,U.needsUpdate=!0)}let ne=null,oe=null,we=[],Ae=[],de=null,Ke=[];const vt=new O,ft=new Jt;let le=!1;const ye=bt(!1);let Me=[],Ze=null,ie=null;const me=R=>{const U=M.domElement.getBoundingClientRect();L.x=(R.clientX-U.left)/U.width*2-1,L.y=-((R.clientY-U.top)/U.height)*2+1},C=()=>(P.setFromCamera(L,x),P.params.Points.threshold=i.pointSize*2,P.intersectObjects([ne,oe].filter(Boolean))),I=()=>{if(!oe?.geometry)return;const R=oe.geometry.getAttribute("position");if(!R)return;const U=Math.max(1,Math.floor(R.count/5e3));we=[];for(let Q=0;Q<R.count;Q+=U)we.push(R.getX(Q),R.getY(Q),R.getZ(Q))},X=()=>{if(!ne?.geometry)return;const R=ne.geometry.getAttribute("position");if(!R)return;const U=Math.max(1,Math.floor(R.count/3e3));Ae=[];for(let Q=0;Q<R.count;Q+=U)Ae.push(R.getX(Q),R.getY(Q),R.getZ(Q))},se=(R,U)=>{if(Ae.length===0)return-q;const Q=.8,ue=Q*Q;let fe=1/0,Ce=!1;for(let Re=0;Re<Ae.length;Re+=3){const ke=R-Ae[Re],it=U-Ae[Re+2];if(ke*ke+it*it<ue){const Ge=Ae[Re+1];Ge<fe&&(fe=Ge,Ce=!0)}}return Ce?fe:-q},Y=(R,U)=>{const Q=-q;if(Ae.length===0)return Q;const ue=.5,fe=ue*ue;let Ce=-1/0,Re=!1;for(let ke=0;ke<Ae.length;ke+=3){const it=R-Ae[ke],Ge=U-Ae[ke+2];if(it*it+Ge*Ge<fe){const at=Ae[ke+1];at>Ce&&(Ce=at),Re=!0}}return Re?Math.max(Q,Ce):Q},ae=()=>Math.max(.015,i.pointSize*2.5);function A(R){const U=typeof R.yaw=="number"?R.yaw:0,Q=new O(Math.sin(U),0,Math.cos(U));return i.useCanonicalCoords&&Q.applyQuaternion($),Q.y=0,Q.lengthSq()<1e-8?new Jt:(Q.normalize(),new Jt().setFromUnitVectors(new O(0,0,1),Q))}const pe=R=>{if(we.length===0)return!1;const U=i.collisionRadius**2;for(let Q=0;Q<we.length;Q+=3){const ue=R.x-we[Q],fe=R.y-we[Q+1],Ce=R.z-we[Q+2];if(ue*ue+fe*fe+Ce*Ce<U)return!0}return!1};let ce=null,re=null,he=new Set;const E=bt([]),_=bt(0);let N=new O(0,1,0),q=0,$=new Jt,Z=null;const Ee={forward:!1,backward:!1,left:!1,right:!1,jump:!1};let _e=0,ze=performance.now();const We=bt(!1);let ge=null,Se=null,Pe=!1;const Fe=()=>S&&S.isLocked,ve=bt(!1),Ye=bt("temperature"),B=bt([]),Te=bt(!1),be=bt("");let De=null,xe=null,ee=[];const He=new Fi,et=new O,Ct=cs(()=>i.maxDisplayPoints>0?i.maxDisplayPoints:1/0),gt=cs(()=>{const R=f.value?.zone?.label;return R?!!d.value[R]:!1}),wn=cs(()=>{const R=f.value?.zone?.label;return R?!!p.value[R]:!1}),Yn=cs(()=>{const R=i.telemetry?.fanSpeed;return R==null||Number.isNaN(Number(R))?"--":`${Math.round(Number(R))}%`}),Ro=cs(()=>{const R=i.telemetry?.tempC;return R==null||Number.isNaN(Number(R))?"--":`${Number(R).toFixed(2)} °C`});function Ur(R){const U=new Jn;U.name=R.name||"robot",R.position.set(0,0,0),U.add(R),U.updateWorldMatrix(!0,!0);const Q=new ji().setFromObject(U);return!Q.isEmpty()&&Number.isFinite(Q.min.y)&&(R.position.y=-Q.min.y),U}function gl(){const R=new Jn;R.name="robot";const U=new Ns({color:440020}),Q=new Ns({color:16498468}),ue=new Ns({color:3359061}),fe=.06,Ce=.04,Re=new hf(fe,fe,Ce,12),ke=fe,it=[[-.14,ke,.16],[.14,ke,.16],[-.14,ke,-.16],[.14,ke,-.16]];for(const[Ne,Nt,Ut]of it){const zt=new nn(Re,ue);zt.rotation.z=Math.PI/2,zt.position.set(Ne,Nt,Ut),R.add(zt)}const Ge=.2,at=new nn(new Hs(.36,Ge,.48),U);at.position.y=fe*2+Ge/2;const pt=new nn(new Hs(.08,.08,.12),Q);return pt.position.set(0,at.position.y+Ge/2-.04,.28),R.add(at,pt),R}function Po(){if(!m||Ke.length)return;const R=new $v(16777215,.65),U=new jv(16777215,.85);U.position.set(4,8,6),m.add(R,U),Ke.push(R,U)}function Do(){if(m){for(const R of Ke)m.remove(R);Ke=[]}}function li(){Do(),de&&(m?.remove(de),de.traverse(R=>{if(!R.isMesh)return;R.geometry?.dispose();const U=Array.isArray(R.material)?R.material:[R.material];for(const Q of U)Q?.dispose?.()}),de=null,le=!1)}async function Fr(){if(!i.robotEnabled||!m||de)return;const R=i.robotModelUrl?.trim();if(R)try{const{GLTFLoader:U}=await A0(async()=>{const{GLTFLoader:fe}=await import("./GLTFLoader-Bolvgo_m.js");return{GLTFLoader:fe}},[]),Q=new U,ue=await new Promise((fe,Ce)=>{Q.load(R,fe,void 0,Ce)});de=Ur(ue.scene),Po()}catch(U){console.warn("机器人模型加载失败，使用占位几何体:",U)}de||(de=gl()),m.add(de)}function Io(R){const U=i.useCanonicalCoords?new O(R.x,R.y,R.z).applyQuaternion($):new O(R.x,R.y,R.z),Q=Y(U.x,U.z);U.y=Q+ae();const ue=A(R);return{pos:U,quat:ue}}function _s(R,U=!1){if(!de||!R||ye.value!==!0||typeof R.x!="number"||typeof R.y!="number"||typeof R.z!="number")return!1;const{pos:Q,quat:ue}=Io(R);return vt.copy(Q),ft.copy(ue),le=!0,U&&(de.position.copy(Q),de.quaternion.copy(ue),No({force:!0,resetOnJump:!0})),!0}function xs(R){if(!de||!le)return;const U=1-Math.exp(-i.robotMoveSpeed*R);de.position.lerp(vt,U),de.quaternion.slerp(ft,U);const Q=Y(de.position.x,de.position.z);de.position.y=Q+ae(),de.position.distanceToSquared(vt)<4e-4&&de.quaternion.angleTo(ft)<.04&&(de.position.copy(vt),de.position.y=Y(de.position.x,de.position.z)+ae(),de.quaternion.copy(ft)),No()}function Lo(R){return _s(R,!0)}function Zi(){if(!ie||!m){ie=null;return}m.remove(ie),ie.traverse(R=>{R.geometry&&R.geometry.dispose(),R.material&&R.material.dispose()}),ie=null}function qs(){Me=[],Ze=null,Zi()}function vs(){if(Zi(),!m||!i.robotEnabled||!ve.value||Me.length<2)return;const R=-q+Lw,U=[],Q=[];let ue=0;for(let Re=0;Re<Me.length-1;Re++){const ke=Me[Re].x,it=Me[Re].z,Ge=Me[Re+1].x,at=Me[Re+1].z,pt=Ge-ke,Ne=at-it,Nt=Math.hypot(pt,Ne);if(Nt<1e-6)continue;const Ut=-Ne/Nt*Bd,zt=pt/Nt*Bd;U.push(ke+Ut,R,it+zt,ke-Ut,R,it-zt,Ge+Ut,R,at+zt,Ge-Ut,R,at-zt),Q.push(ue,ue+1,ue+2,ue+1,ue+3,ue+2),ue+=4}if(Q.length===0)return;const fe=new Xt;fe.setAttribute("position",new Tt(U,3)),fe.setIndex(Q);const Ce=new nn(fe,new Ns({color:IT.inside,transparent:!0,opacity:.92,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:Hn}));Ce.renderOrder=21,ie=new Jn,ie.name="robotTrail",ie.add(Ce),m.add(ie)}function No({force:R=!1,resetOnJump:U=!1}={}){if(!de||!i.robotEnabled||ye.value!==!0)return;const Q={x:de.position.x,z:de.position.z};if(Ze){const ue=Q.x-Ze.x,fe=Q.z-Ze.z,Ce=ue*ue+fe*fe;if(U&&Ce>Iw**2)Me=[],Ze=null;else if(!R&&Ce<Od*Od)return}Me.push(Q),Ze=Q,ve.value&&vs()}const _l=()=>{if(!r.value)return;const R=r.value.clientWidth,U=r.value.clientHeight;m=new Gx,m.background=new rt(988970),x=new Pn(60,R/U,.1,1e3),x.position.set(5,5,5),M=new tT({antialias:!0}),M.setSize(R,U),M.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.value.appendChild(M.domElement),S=new rT(x,M.domElement),S.pointerSpeed=.8,P=new ay,L=new tt(-1e3,-1e3),te(),Mf(),window.addEventListener("resize",Or),M.domElement.addEventListener("click",vf),M.domElement.addEventListener("mousemove",yf),M.domElement.addEventListener("pointerdown",jt),M.domElement.addEventListener("pointermove",qn),M.domElement.addEventListener("pointerup",Gt),M.domElement.addEventListener("pointercancel",Gt),document.addEventListener("keydown",Uo),document.addEventListener("keyup",Fo),S.domElement.ownerDocument.addEventListener("pointerlockchange",Oo)},Uo=R=>{switch(R.code){case"ArrowUp":case"KeyW":R.preventDefault(),Ee.forward=!0;break;case"ArrowDown":case"KeyS":R.preventDefault(),Ee.backward=!0;break;case"ArrowLeft":case"KeyA":R.preventDefault(),Ee.left=!0;break;case"ArrowRight":case"KeyD":R.preventDefault(),Ee.right=!0;break;case"Space":R.preventDefault(),Ee.jump=!0;break}},Fo=R=>{switch(R.code){case"ArrowUp":case"KeyW":Ee.forward=!1;break;case"ArrowDown":case"KeyS":Ee.backward=!1;break;case"ArrowLeft":case"KeyA":Ee.left=!1;break;case"ArrowRight":case"KeyD":Ee.right=!1;break;case"Space":Ee.jump=!1;break}},Oo=()=>{We.value=!!document.pointerLockElement,We.value&&(Pe=!0)};function xl(R,U,Q){const ue=new O;for(const fe of[R,U]){const Ce=fe.getAttribute("position");for(let Re=0;Re<Ce.count;Re++)ue.set(Ce.getX(Re),Ce.getY(Re),Ce.getZ(Re)).applyQuaternion(Q),Ce.setXYZ(Re,ue.x,ue.y,ue.z);Ce.needsUpdate=!0,fe.computeBoundingSphere()}}function T(R,U,Q){$=Fd(Q.normal);const ue=R.getAttribute("position"),fe=new O;let Ce=0,Re=0;for(let Ne=0;Ne<ue.count;Ne++)fe.set(ue.getX(Ne),ue.getY(Ne),ue.getZ(Ne)).applyQuaternion($),ue.setXYZ(Ne,fe.x,fe.y,fe.z),Ce+=fe.y;ue.needsUpdate=!0,R.computeBoundingSphere();const ke=U.getAttribute("position");for(let Ne=0;Ne<ke.count;Ne++)fe.set(ke.getX(Ne),ke.getY(Ne),ke.getZ(Ne)).applyQuaternion($),ke.setXYZ(Ne,fe.x,fe.y,fe.z),Re+=fe.y;ke.needsUpdate=!0,U.computeBoundingSphere();const it=ue.count?Ce/ue.count:0,Ge=ke.count?Re/ke.count:0;if(it>Ge){$.premultiply(va());for(let Ne=0;Ne<ue.count;Ne++)fe.set(ue.getX(Ne),ue.getY(Ne),ue.getZ(Ne)).applyQuaternion(va()),ue.setXYZ(Ne,fe.x,fe.y,fe.z);for(let Ne=0;Ne<ke.count;Ne++)fe.set(ke.getX(Ne),ke.getY(Ne),ke.getZ(Ne)).applyQuaternion(va()),ke.setXYZ(Ne,fe.x,fe.y,fe.z);ue.needsUpdate=!0,ke.needsUpdate=!0,R.computeBoundingSphere(),U.computeBoundingSphere()}const at=[];for(let Ne=0;Ne<ue.count;Ne++)at.push(new O(ue.getX(Ne),ue.getY(Ne),ue.getZ(Ne)));const pt=DT(at);$.premultiply(pt);for(let Ne=0;Ne<ue.count;Ne++)fe.set(ue.getX(Ne),ue.getY(Ne),ue.getZ(Ne)).applyQuaternion(pt),ue.setXYZ(Ne,fe.x,fe.y,fe.z);for(let Ne=0;Ne<ke.count;Ne++)fe.set(ke.getX(Ne),ke.getY(Ne),ke.getZ(Ne)).applyQuaternion(pt),ke.setXYZ(Ne,fe.x,fe.y,fe.z);ue.needsUpdate=!0,ke.needsUpdate=!0,R.computeBoundingSphere(),U.computeBoundingSphere()}async function G(R,U){const Q={size:i.pointSize,sizeAttenuation:!0,vertexColors:!0};ne=new Eu(R,new Ya(Q)),ne.name="floor",oe=new Eu(U,new Ya(Q)),oe.name="obstacle",m.add(ne),m.add(oe),I(),X(),ne.geometry.computeBoundingBox(),K(),ve.value&&oe&&(H(),k(!0)),R.computeBoundingBox(),U.computeBoundingBox();const ue=-q,fe=[[0,0],[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1]],Ce=i.spawnCanonical,Re=Ce&&typeof Ce.x=="number"&&typeof Ce.y=="number"&&typeof Ce.z=="number";let ke,it;if(Re){const Ge=i.useCanonicalCoords?new O(Ce.x,Ce.y,Ce.z).applyQuaternion($):new O(Ce.x,Ce.y,Ce.z),at=se(Ge.x,Ge.z);it=new O(Ge.x,at+i.cameraHeightAboveFloor,Ge.z);for(const[pt,Ne]of fe){const Nt=new O(Ge.x+pt,at+i.cameraHeightAboveFloor,Ge.z+Ne);if(!pe(Nt)){it=Nt;break}}ke=new O(Ge.x,at,Ge.z)}else{ke=R.boundingBox.clone().union(U.boundingBox).getCenter(new O),it=new O(ke.x,ue+i.cameraHeightAboveFloor,ke.z);for(const[at,pt]of fe){const Ne=new O(ke.x+at,ue+i.cameraHeightAboveFloor,ke.z+pt);if(!pe(Ne)){it=Ne;break}}}if(ge=it,Se=Re?new O(it.x,it.y,it.z+1):ke.clone().add(new O(0,0,1)),x.position.copy(ge),x.up.set(0,1,0),x.lookAt(Se),ye.value=!0,i.robotEnabled){await Fr();const Ge=i.spawnCanonical,at=i.robotWaypoints?.[0],pt=Ge&&typeof Ge.x=="number"&&typeof Ge.y=="number"&&typeof Ge.z=="number"?{x:Ge.x,y:Ge.y,z:Ge.z,yaw:typeof at?.yaw=="number"?at.yaw:0}:at;pt&&_s(pt,!0)}s("mapReady",!0),Bn()}const te=async()=>{o.value=!0,a.value=0,l.value="download",c.value="",ye.value=!1,s("mapReady",!1),GT(),li(),qs(),E.value=[],Pe=!1,Z=null,ne&&(m.remove(ne),ne.geometry.dispose(),ne.material.dispose(),ne=null),oe&&(m.remove(oe),oe.geometry.dispose(),oe.material.dispose(),oe=null);const R=new bT;try{const U=await new Promise((st,Ht)=>{R.load(i.pcdUrl,zn=>st(zn),zn=>{zn.lengthComputable&&zn.total>0&&(a.value=Math.min(100,zn.loaded/zn.total*100))},Ht)});l.value="processing",a.value=100,await hp(),await new Promise(st=>requestAnimationFrame(st)),await new Promise(st=>requestAnimationFrame(st)),U.geometry.computeBoundingSphere();const{planes:Q,remainingIndices:ue}=RT(U.geometry,{distanceThreshold:i.floorDistanceThreshold,maxIterations:200,minPlanePoints:20,maxPlanes:8,randomSeed:i.planeDetectionSeed});if(Q.length===0){c.value="未检测到可行走的平面，请检查 PCD 文件",o.value=!1;return}const fe=U.geometry.getAttribute("position"),Ce=[];for(let st=0;st<fe.count;st++)Ce.push(new O(fe.getX(st),fe.getY(st),fe.getZ(st)));let Re=null,ke=!1;const it=PT(Q,Ce);if(OT)try{await kT(),Re=VT();const st=HT();Re&&st&&($=st,Z=st.clone(),ke=!0)}catch(st){console.warn("[PCDMapViewer] map-transform.json 加载失败，回退到在线计算:",st)}Re||(Re=it.centroid.clone());const Ge=i.onlyWalkingPlaneNumber,at=Ge!=null&&Number.isFinite(Number(Ge))&&Number(Ge)>=1;let pt,Ne;if(at){const st=Math.floor(Number(Ge))-1;if(st>=Q.length){c.value=`需要「面 ${Math.floor(Number(Ge))}」作为行走面，但只检测到 ${Q.length} 个平面`,o.value=!1;return}pt=Q[st],Ne=0}else pt=it,Ne=Q.indexOf(pt);for(let st=0;st<fe.count;st++)fe.setX(st,fe.getX(st)-Re.x),fe.setY(st,fe.getY(st)-Re.y),fe.setZ(st,fe.getZ(st)-Re.z);fe.needsUpdate=!0;for(const st of Q)st.centroid.sub(Re);const Nt=U.geometry.getAttribute("color");ce=new Float32Array(fe.array),re=Nt?new Float32Array(Nt.array):null,he=ue,E.value=at?[pt]:Q,_.value=Ne;const Ut=pt.indices,zt=new Set([...ue]);for(let st=0;st<Q.length;st++)Q[st]!==pt&&Q[st].indices.forEach(Ht=>zt.add(Ht));let{floorGeo:ln,obstacleGeo:ui}=wT(U.geometry,Ut,zt,{maxDisplayPoints:Ct.value});ke?xl(ln,ui,$):T(ln,ui,pt),N.set(0,1,0),q=-pt.centroid.clone().applyQuaternion($).y,U.geometry.dispose(),U.material.dispose(),await G(ln,ui)}catch(U){console.error("PCD 加载失败:",U),c.value=`地图加载失败: ${U.message}。请将 PCD 文件放入 public 文件夹，命名为 map.pcd`}finally{o.value=!1}},J=R=>{if(R<0||R>=E.value.length||!ce)return;_.value=R;const U=E.value,Q=U[R];Z?$=Z.clone():$=Fd(Q.normal);const ue=ce.length/3,fe=Ct.value,Ce=ue>fe?Math.max(1,Math.floor(ue/fe)):1,Re=new O;if(!Z){let Ht=0,zn=0,bf=0,vl=0;for(let js=0;js<ue;js+=Ce)Re.set(ce[js*3],ce[js*3+1],ce[js*3+2]),Re.applyQuaternion($),Q.indices.has(js)?(Ht+=Re.y,zn++):(bf+=Re.y,vl++);const qm=zn?Ht/zn:0,jm=vl?bf/vl:0;qm>jm&&$.premultiply(va())}N.set(0,1,0),q=-Q.centroid.clone().applyQuaternion($).y;const it=Q.indices,Ge=new Set([...he]);for(let Ht=0;Ht<U.length;Ht++)Ht!==R&&U[Ht].indices.forEach(zn=>Ge.add(zn));const at=[],pt=[],Ne=[],Nt=[];for(let Ht=0;Ht<ue;Ht+=Ce)Re.set(ce[Ht*3],ce[Ht*3+1],ce[Ht*3+2]),Re.applyQuaternion($),it.has(Ht)?(at.push(Re.x,Re.y,Re.z),re?pt.push(re[Ht*3],re[Ht*3+1],re[Ht*3+2]):pt.push(.75,.75,.75)):(Ne.push(Re.x,Re.y,Re.z),re?Nt.push(re[Ht*3],re[Ht*3+1],re[Ht*3+2]):Nt.push(.75,.75,.75));const Ut=new Xt;Ut.setAttribute("position",new Tt(at,3)),Ut.setAttribute("color",new Tt(pt,3)),Ut.computeBoundingSphere();const zt=new Xt;zt.setAttribute("position",new Tt(Ne,3)),zt.setAttribute("color",new Tt(Nt,3)),zt.computeBoundingSphere(),ne.geometry.dispose(),ne.geometry=Ut,oe.geometry.dispose(),oe.geometry=zt,ne.geometry.computeBoundingBox(),oe.geometry.computeBoundingBox(),I(),X(),K();const ui=ne.geometry.boundingBox.clone().union(oe.geometry.boundingBox).getCenter(new O),st=-q;ge=new O(ui.x,st+i.cameraHeightAboveFloor,ui.z),Se=ui.clone().add(new O(0,0,1)),x.position.copy(ge),x.up.set(0,1,0),x.lookAt(Se),ve.value&&oe&&(H(),k(!0))},K=()=>{if(!ne?.geometry?.boundingBox)return;const R=ne.geometry.boundingBox;b.copy(R.getCenter(new O));const U=R.getSize(new O);W=Math.max(U.x,U.z,6)},Ie=R=>{const U=new O(R.x,R.y,R.z);return i.useCanonicalCoords&&$&&U.applyQuaternion($),U},Be=()=>{!V||!m||(m.remove(V),V.traverse(R=>{R.geometry&&R.geometry.dispose(),R.material&&R.material.dispose()}),V=null)};function Le(R){if(R==null||R==="")return NaN;const U=Number(R);return Number.isFinite(U)?U:NaN}const Ve=()=>{if(!V)return;const R=Ye.value,U=Le(i.telemetry?.tempC),Q=Number.isFinite(U),ue=!!(d.value.灯??(i.syncedDeviceState&&i.syncedDeviceState.灯)),fe=16436245,Ce=3.2,Re=Ge=>Ge*3.8,ke=new rt(2450411),it=new rt(14427686);V.children.forEach(Ge=>{const{matFog:at,light:pt,spread:Ne}=Ge.userData;let Nt=9741240,Ut=1,zt=Ne*3.8,ln=.48;if(R==="temperature"){if(Ge.userData.label==="大门")Nt=3900150,Ut=1.35,ln=.42;else if(Ge.userData.label==="灯")Nt=14753096,Ut=1.45,ln=.44;else if(Ge.userData.label==="风扇")if(!Q)Nt=ke.getHex(),Ut=1,ln=.4;else{const st=Math.max(0,Math.min(1,(U-25)/5));Nt=ke.clone().lerp(it,st).getHex(),Ut=.75+st*2.1,ln=.38+st*.22}}else Ge.userData.label==="大门"?(Nt=657930,Ut=.12,zt=Ne*2.2,ln=.35):Ge.userData.label==="风扇"?(Nt=fe,Ut=Ce,zt=Re(Ne),ln=.55):Ge.userData.label==="灯"&&(ue?(Nt=fe,Ut=Ce,zt=Re(Ne),ln=.55):(Nt=1710618,Ut=.15,zt=Ne*2.4,ln=.38));const ui=new rt(Nt);at.uniforms.uColor.value.copy(ui),at.uniforms.uOpacityScale.value=ln,at.uniforms.uLightGain.value=Math.min(Ut,3.6),at.uniforms.uRadius.value=Ne,pt.color.copy(ui),pt.intensity=Ut*.35,pt.distance=zt})},qe=()=>{if(Be(),!(!m||!i.interactionZones?.length)){V=new Jn,V.name="topViewZones",V.visible=ve.value;for(const R of i.interactionZones){const U=Ie(R),Q=se(U.x,U.z);U.y=Q+.07;const fe=(R.radius??1)*3.55,Ce=new ff(fe,96),Re=new oi({uniforms:{uColor:{value:new rt(9741240)},uRadius:{value:fe},uOpacityScale:{value:.48},uLightGain:{value:1}},vertexShader:Pw,fragmentShader:Dw,transparent:!0,depthWrite:!1,side:Hn}),ke=new nn(Ce,Re);ke.rotation.x=-Math.PI/2,ke.position.copy(U);const it=new Yv(16777215,.35,fe*3.8,1.75);it.position.set(U.x,U.y+.55,U.z);const Ge=new Jn;Ge.add(ke,it),Ge.userData={label:R.label,matFog:Re,light:it,spread:fe},V.add(Ge)}m.add(V),Ve()}};function nt(R,U){if(!M||!x)return null;const Q=M.domElement.getBoundingClientRect();L.x=(R-Q.left)/Q.width*2-1,L.y=-((U-Q.top)/Q.height)*2+1,P.setFromCamera(L,x);const ue=-q;return He.set(new O(0,1,0),-ue),P.ray.intersectPlane(He,et)?et.clone():null}function ot(R){const U=R.clone();return i.useCanonicalCoords&&$&&U.applyQuaternion($.clone().invert()),{x:U.x,y:U.y,z:U.z}}function je(R){const U=new O(R.x,Number.isFinite(R.y)?R.y:0,R.z);return i.useCanonicalCoords&&$&&U.applyQuaternion($),{x:U.x,z:U.z}}function yt(){if(!w)return;const R=Ye.value==="workArea"&&Te.value;w.enabled=ve.value&&!R,Ye.value==="workArea"?w.mouseButtons.LEFT=null:w.mouseButtons.LEFT=ks.ROTATE,M?.domElement&&(M.domElement.style.cursor=ve.value&&Ye.value==="workArea"?"crosshair":"")}function Bt(){!xe||!m||(m.remove(xe),xe.traverse(R=>{R.geometry&&R.geometry.dispose(),R.material&&R.material.dispose()}),xe=null)}function Vt(R){return R.map(U=>je(U))}function St(R,U,{preview:Q=!1}={}){if(R.length<3)return null;const ue=R.map(it=>new tt(it.x,it.z));let fe;try{fe=df.triangulateShape(ue,[])}catch{return null}if(!fe?.length)return null;const Ce=[];for(const it of fe)for(const Ge of it){const at=ue[Ge];Ce.push(at.x,U,at.y)}const Re=new Xt;Re.setAttribute("position",new Tt(Ce,3));const ke=new nn(Re,new Ns({color:ya.fill,transparent:!0,opacity:Q?.38:ya.fillOpacity,depthWrite:!1,depthTest:!0,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,side:Hn}));return ke.renderOrder=Q?21:20,ke}function Zt(R,U,{closed:Q=!0}={}){if(R.length<2)return null;const ue=R.map(Re=>new O(Re.x,U+.02,Re.z)),fe=new Xt().setFromPoints(ue),Ce=Q?new iv(fe,new Su({color:ya.outline,depthWrite:!1,depthTest:!0})):new uf(fe,new Su({color:ya.outline,depthWrite:!1,depthTest:!0}));return Ce.renderOrder=22,Ce}function Xe(R){return!R||R.length<3?!1:R[0].distanceTo(R[R.length-1])<=Uw}function on(){if(Bt(),!m||ee.length<2)return;const R=-q+.15,U=ee.map(fe=>({x:fe.x,z:fe.z})),Q=Xe(ee);xe=new Jn,xe.name="workAreaPreview";const ue=Zt(U,R,{closed:Q});if(ue&&xe.add(ue),Q){const fe=St(U,R,{preview:!0});fe&&xe.add(fe)}m.add(xe)}function dt(){Bt(),!(!De||!m)&&(m.remove(De),De.traverse(R=>{R.geometry&&R.geometry.dispose(),R.material&&R.material.dispose()}),De=null)}function an(R){if(dt(),!m||!R||R.length<3)return;const U=-q+.15,Q=Vt(R);De=new Jn,De.name="workArea",De.renderOrder=20;const ue=St(Q,U);ue&&De.add(ue);const fe=Zt(Q,U,{closed:!0});fe&&De.add(fe),De.visible=ve.value,m.add(De)}function Bn(){const R=NT();B.value=R??[],ye.value&&R?.length>=3&&an(R)}function Ti(R){!R||R.length<3||(B.value=R,be.value="",UT(R),an(R),vs(),s("workAreaSaved",{points:R}))}function Ki(){Te.value=!1,ee=[],be.value="",B.value=[],FT(),dt(),qs(),s("workAreaSaved",{points:[]})}function Rt(){if(!Te.value)return;if(Te.value=!1,yt(),Bt(),ee.length<3){ee=[],be.value="至少需要 3 个点",s("workAreaSaved",{points:[],error:"圈选点数不足"});return}if(!Xe(ee)){ee=[],be.value="未闭合：请拖回起点附近，出现淡黄填充后再松开",s("workAreaSaved",{points:[],error:"圈选未闭合，请拖回起点附近再松开"});return}const R=ee.map(U=>ot(U));ee=[],Ti(R)}function jt(R){if(!ve.value||Ye.value!=="workArea"||R.button!==0)return;R.preventDefault(),M?.domElement?.setPointerCapture?.(R.pointerId),w&&(w.enabled=!1),Te.value=!0,be.value="",ee=[];const U=nt(R.clientX,R.clientY);U&&ee.push(U),on()}function qn(R){if(!Te.value)return;R.preventDefault();const U=nt(R.clientX,R.clientY);if(!U)return;const Q=ee[ee.length-1];Q&&Q.distanceTo(U)<Nw||(ee.push(U),on())}function Gt(R){Te.value&&R.button===0&&(R.preventDefault(),M?.domElement?.releasePointerCapture?.(R.pointerId),Rt())}const ci=()=>{if(!x||!M||!ne)return;document.exitPointerLock?.(),K(),D.copy(x.position),F.copy(x.quaternion),w?z.copy(w.target):z.copy(b),w||(w=new uT(x,M.domElement),w.enableDamping=!0,w.dampingFactor=.06,w.minPolarAngle=.08,w.maxPolarAngle=Math.PI/2-.03,w.minDistance=Math.max(W*.35,4),w.maxDistance=Math.max(W*4,80),w.target.copy(b)),w.enabled=!0,w.target.copy(b);const R=Math.max(W*1.32,16);x.position.set(b.x,b.y+R,b.z+W*.02),x.up.set(0,1,0),x.lookAt(b),w.update(),ve.value=!0,qe(),B.value.length>=3&&an(B.value),yt()},Ji=()=>{x&&(w&&(w.enabled=!1),x.position.copy(D),x.quaternion.copy(F),w&&w.target.copy(z),ve.value=!1,Te.value=!1,ee=[],Be(),dt(),yt())},Or=()=>{if(!r.value||!x||!M)return;const R=r.value.clientWidth,U=r.value.clientHeight;x.aspect=R/U,x.updateProjectionMatrix(),M.setSize(R,U),w?.update()},vf=R=>{if(!ne||!x||ve.value)return;if(!document.pointerLockElement){M.domElement.requestPointerLock();return}me(R);const U=C();if(U.length>0){const Q=U[0],ue=Q.point,fe=Q.object.name==="floor";s("pointClick",{x:ue.x,y:ue.y,z:ue.z,isFloor:fe})}},Hm=R=>{if(!i.interactionZones?.length)return{zone:null,inZone:!0};let U=R;i.useCanonicalCoords&&$&&(U=R.clone().applyQuaternion($.clone().invert()));const Q=i.interactionZones.find(ue=>{const fe=U.x-ue.x,Ce=U.y-ue.y,Re=U.z-ue.z;return fe*fe+Ce*Ce+Re*Re<=(ue.radius??.5)**2});return{zone:Q??null,inZone:!!Q}},yf=R=>{if(!ne||!x)return;if(ve.value){u.value=null,f.value=null,h.value=!1;return}me(R);const U=C();if(U.length>0){const Q=U[0],ue=Q.point,fe=Q.object.name==="floor",Ce=i.useCanonicalCoords&&$?ue.clone().applyQuaternion($.clone().invert()):ue,Re=i.useCanonicalCoords?Ce:ue;u.value=`位置: (${Re.x.toFixed(2)}, ${Re.y.toFixed(2)}, ${Re.z.toFixed(2)}) · ${fe?"地板":"障碍物"}${i.useCanonicalCoords?" [固定坐标]":""}`;const{zone:ke,inZone:it}=Hm(ue);it?(f.value={x:ue.x,y:ue.y,z:ue.z,isFloor:fe,zone:ke},s("pointHover",{x:Ce.x,y:Ce.y,z:Ce.z,isFloor:fe,device:ke?.label})):(f.value=null,h.value=!1)}else u.value=null,f.value=null,h.value=!1},Mf=()=>{y=requestAnimationFrame(Mf);const R=Math.min((performance.now()-ze)/1e3,.1);if(ve.value){w&&w.update(),h.value=!1,xs(R),ze=performance.now(),M?.render(m,x);return}if(x&&f.value){const U=f.value,Q=x.position.distanceTo(new O(U.x,U.y,U.z));h.value=Q<i.interactionDistanceThreshold}if(!Fe()&&ge&&!Pe)x.position.copy(ge),x.lookAt(Se);else if(Fe()){const U=R;let Q=x.position.clone();const ue=(Ee.forward?1:0)-(Ee.backward?1:0),fe=(Ee.right?1:0)-(Ee.left?1:0);if(Math.abs(ue)>1e-4||Math.abs(fe)>1e-4){const it=new O(0,0,-1).applyQuaternion(x.quaternion),Ge=new O(1,0,0).applyQuaternion(x.quaternion),at=Ud(it,N),pt=Ud(Ge,N);at.lengthSq()>1e-4&&at.normalize(),pt.lengthSq()>1e-4&&pt.normalize();const Ne=at.clone().multiplyScalar(ue).add(pt.clone().multiplyScalar(fe));if(Ne.lengthSq()>1e-8){Ne.normalize();const Nt=Math.min(Math.hypot(ue,fe),1),Ut=i.moveSpeed*Nt*Math.min(60*U,1.2),zt=Ne.clone().multiplyScalar(Ut),ln=Q.clone().add(zt);pe(ln)||Q.add(zt)}}const Re=se(Q.x,Q.z)+i.cameraHeightAboveFloor;_e===0&&Math.abs(x.position.y-Re)<.02&&Ee.jump&&(_e=i.jumpForce),_e!==0?(Q.y=x.position.y+_e*60*U,_e-=i.gravity*60*U,Q.y<=Re&&(Q.y=Re,_e=0),pe(Q)&&(_e=0,Q.copy(x.position),Q.y=Math.max(Q.y,Re)),x.position.copy(Q)):(Q.y=Re,x.position.copy(Q))}xs(R),ze=performance.now(),M?.render(m,x)},Gm=()=>{const R=f.value?.zone?.label;if(!R)return;const U=!gt.value;d.value={...d.value,[R]:U},wn.value&&(p.value={...p.value,[R]:!1}),s("switchToggle",{position:{x:f.value.x,y:f.value.y,z:f.value.z},isFloor:f.value.isFloor,isOn:U,device:R})},Wm=()=>{const R=f.value?.zone?.label;if(!R)return;const U=!wn.value;p.value={...p.value,[R]:U},s("autoToggle",{device:R,isAutoOn:U})},Xm=()=>{cancelAnimationFrame(g),g=null,window.removeEventListener("resize",Or),document.removeEventListener("keydown",Uo),document.removeEventListener("keyup",Fo),M?.domElement?.removeEventListener("click",vf),M?.domElement?.removeEventListener("mousemove",yf),M?.domElement?.removeEventListener("pointerdown",jt),M?.domElement?.removeEventListener("pointermove",qn),M?.domElement?.removeEventListener("pointerup",Gt),M?.domElement?.removeEventListener("pointercancel",Gt),dt(),qs(),S?.domElement?.ownerDocument?.removeEventListener("pointerlockchange",Oo),cancelAnimationFrame(y),Be(),li(),k(!1),w?.dispose(),w=null,M?.dispose(),S?.dispose()};xn(()=>i.robotPose,R=>{R&&_s(R,!1)},{deep:!0}),xn(B,()=>{vs()},{deep:!0}),xn(Ye,()=>{yt(),ve.value&&Ye.value!=="workArea"&&Ve(),ve.value&&Ye.value==="workArea"&&B.value.length>=3&&an(B.value),De&&(De.visible=ve.value)}),xn(()=>i.telemetry,()=>{ve.value&&Ye.value==="temperature"&&Ve()},{deep:!0}),xn(()=>i.syncedDeviceState,()=>{ve.value&&Ye.value==="light"&&Ve()},{deep:!0}),xn(d,()=>{ve.value&&Ye.value==="light"&&Ve()},{deep:!0}),xn(ve,R=>{V&&(V.visible=R),R?vs():Zi(),oe&&(R?(H(),k(!0)):k(!1))}),xn(()=>i.interactionZones,()=>{ve.value&&qe()},{deep:!0}),xn(()=>i.pcdUrl,()=>{te()}),xn(()=>i.syncedDeviceState,R=>{!R||typeof R!="object"||(d.value={...d.value,...R})},{deep:!0}),xn(()=>i.telemetry,R=>{if(!R||typeof R!="object")return;const U=p.value;p.value={风扇:"fanAuto"in R?!!R.fanAuto:U.风扇,大门:"gateAuto"in R?!!R.gateAuto:U.大门,灯:"lightAuto"in R?!!R.lightAuto:U.灯}},{deep:!0,immediate:!0});const Ym=(()=>{const U=[];for(let Q=0;Q<50;Q++)U.push({x:Math.random()*2-1,y:Math.random()*2-1,r:.15+Math.random()*.35,vx:(Math.random()-.5)*.005,vy:(Math.random()-.5)*.005,opacity:.4+Math.random()*.4});return U})(),Sf=()=>{const R=v.value;if(!R||!h.value)return;const U=R.getContext("2d"),Q=R.width=R.offsetWidth,ue=R.height=R.offsetHeight;U.clearRect(0,0,Q,ue);const fe=U.createLinearGradient(0,0,0,ue);fe.addColorStop(0,"rgba(30, 27, 75, 0.85)"),fe.addColorStop(1,"rgba(15, 23, 42, 0.9)"),U.fillStyle=fe,U.fillRect(0,0,Q,ue),Ym.forEach(Ce=>{Ce.x+=Ce.vx,Ce.y+=Ce.vy,(Ce.x<-1.2||Ce.x>1.2)&&(Ce.vx*=-1),(Ce.y<-1.2||Ce.y>1.2)&&(Ce.vy*=-1);const Re=(Ce.x*.5+.5)*Q,ke=(Ce.y*.5+.5)*ue,it=Ce.r*Math.min(Q,ue)*.08,Ge=U.createRadialGradient(Re,ke,0,Re,ke,it);Ge.addColorStop(0,`rgba(34, 211, 238, ${Ce.opacity})`),Ge.addColorStop(.5,`rgba(6, 182, 212, ${Ce.opacity*.4})`),Ge.addColorStop(1,"transparent"),U.fillStyle=Ge,U.beginPath(),U.arc(Re,ke,it,0,Math.PI*2),U.fill()}),g=requestAnimationFrame(Sf)};return xn(h,R=>{R?setTimeout(()=>Sf(),50):(cancelAnimationFrame(g),g=null)}),ol(_l),al(Xm),e({setRobotTarget:_s,teleportRobotTo:Lo,mapReady:ye}),(R,U)=>(_t(),xt("div",XT,[Oe("div",{ref_key:"containerRef",ref:r,class:"h-full w-full cursor-crosshair touch-none"},null,512),o.value?(_t(),xt("div",YT,[Oe("div",qT,[U[4]||(U[4]=Oe("div",{class:"inline-block w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mb-4"},null,-1)),Oe("p",jT,yn(l.value==="download"?"正在下载地图…":"正在加载地图…"),1),Oe("div",$T,[Oe("div",{class:vn(["h-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400 transition-[width] duration-200 ease-out",l.value==="processing"?"animate-pulse":""]),style:tl({width:l.value==="processing"?"100%":`${Math.round(a.value)}%`})},null,6)]),l.value==="download"?(_t(),xt("p",ZT,yn(Math.round(a.value))+"% ",1)):(_t(),xt("p",KT," 文件较大，正在渲染中，请耐心等待 "))])])):c.value?(_t(),xt("div",JT,[Oe("div",QT,[Oe("p",ew,yn(c.value),1)])])):(_t(),xt("div",tw,[E.value.length>1?(_t(),xt("div",nw,[U[5]||(U[5]=Oe("span",{class:"text-slate-400 text-sm self-center"},"切换行走面：",-1)),(_t(!0),xt(Nn,null,Ec(E.value,(Q,ue)=>(_t(),xt("button",{key:ue,class:vn(["px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",_.value===ue?"bg-emerald-600 text-white":"bg-slate-700/90 text-slate-200 hover:bg-slate-600"]),onClick:fe=>J(ue)}," 面 "+yn(ue+1),11,iw))),128))])):Kn("",!0),Oe("div",sw,[U[6]||(U[6]=Oe("span",{class:"text-slate-400 text-sm"},"俯视：",-1)),ve.value?(_t(),xt("button",{key:1,type:"button",class:"px-3 py-1.5 rounded-lg text-sm font-medium transition-colors bg-slate-600 text-white hover:bg-slate-500",onClick:Ji}," 退出俯视 ")):(_t(),xt("button",{key:0,type:"button",class:"px-3 py-1.5 rounded-lg text-sm font-medium transition-colors bg-indigo-600 text-white hover:bg-indigo-500",onClick:ci}," 俯视图 "))]),ve.value?(_t(),xt("div",rw,[U[7]||(U[7]=Oe("span",{class:"text-slate-400 text-sm"},"区域状态：",-1)),Oe("button",{type:"button",class:vn(["px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",Ye.value==="temperature"?"bg-sky-600 text-white":"bg-slate-700/90 text-slate-200 hover:bg-slate-600"]),onClick:U[0]||(U[0]=Q=>Ye.value="temperature")}," 温度 ",2),Oe("button",{type:"button",class:vn(["px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",Ye.value==="light"?"bg-amber-500 text-slate-900":"bg-slate-700/90 text-slate-200 hover:bg-slate-600"]),onClick:U[1]||(U[1]=Q=>Ye.value="light")}," 灯光 ",2),Oe("button",{type:"button",class:vn(["px-3 py-1.5 rounded-lg text-sm font-medium transition-colors",Ye.value==="workArea"?"bg-yellow-400 text-slate-900":"bg-slate-700/90 text-slate-200 hover:bg-slate-600"]),onClick:U[2]||(U[2]=Q=>Ye.value="workArea")}," 选择工作范围 ",2)])):Kn("",!0),ve.value&&Ye.value==="workArea"?(_t(),xt("div",ow,[U[8]||(U[8]=Oe("p",{class:"mb-1.5"},null,-1)),be.value?(_t(),xt("p",aw,yn(be.value),1)):B.value.length>=3?(_t(),xt("p",lw," 已圈选（"+yn(B.value.length)+" 点） ",1)):(_t(),xt("p",cw,"尚未圈选工作区")),B.value.length>=3?(_t(),xt("button",{key:3,type:"button",class:"mt-2 rounded bg-slate-700 px-2 py-1 text-[11px] text-slate-200 hover:bg-slate-600",onClick:Ki}," 清除圈选 ")):Kn("",!0)])):Kn("",!0)])),u.value?(_t(),xt("div",uw,yn(u.value),1)):Kn("",!0),Tn(K_,{name:"switch-fade"},{default:_p(()=>[h.value?(_t(),xt("div",fw,[Oe("div",{class:"pointer-events-auto interaction-switch-card",onClick:U[3]||(U[3]=Ll(()=>{},["stop"]))},[Oe("canvas",{ref_key:"particleCanvasRef",ref:v,class:"interaction-switch-card-particles"},null,512),Oe("div",{class:vn(["interaction-switch-header",{"interaction-switch-header--with-speed":f.value?.zone?.label==="风扇"}])},[Oe("div",hw,[Oe("div",dw,[f.value?.zone?.label==="风扇"?(_t(),xt("svg",pw,[...U[9]||(U[9]=[Oe("path",{d:"M12 2v4M12 18v4M2 12h4M18 12h4"},null,-1),Oe("path",{d:"M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"},null,-1),Oe("circle",{cx:"12",cy:"12",r:"3"},null,-1)])])):f.value?.zone?.label==="灯"?(_t(),xt("svg",mw,[...U[10]||(U[10]=[Oe("path",{d:"M9 18h6"},null,-1),Oe("path",{d:"M10 22h4"},null,-1),Oe("path",{d:"M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"},null,-1)])])):f.value?.zone?.label==="大门"?(_t(),xt("svg",gw,[...U[11]||(U[11]=[Oe("rect",{x:"3",y:"4",width:"18",height:"16",rx:"2"},null,-1),Oe("path",{d:"M12 10v8"},null,-1)])])):(_t(),xt("svg",_w,[...U[12]||(U[12]=[Oe("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},null,-1),Oe("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"},null,-1)])]))]),Oe("div",xw,yn(f.value?.zone?.label||"设备控制"),1),U[13]||(U[13]=Oe("div",{class:"interaction-switch-subtitle"},"点击切换开关状态",-1))]),f.value?.zone?.label==="风扇"?(_t(),xt("div",vw,[U[14]||(U[14]=Oe("span",{class:"interaction-fan-speed-label"},"风速",-1)),Oe("span",yw,yn(Yn.value),1)])):Kn("",!0)],2),Oe("div",Mw,[Oe("div",Sw,[Oe("div",bw,[Oe("span",{class:vn(["status-dot",gt.value?"status-on":"status-off"])},null,2),jp(" "+yn(gt.value?"已开启":"已关闭"),1)]),Oe("div",{class:"tech-switch-container",onClick:Ll(Gm,["stop"])},[Oe("div",{class:vn(["tech-switch-label",gt.value&&"tech-switch-on"])},[U[15]||(U[15]=Oe("span",{class:"tech-scanline"},null,-1)),U[16]||(U[16]=Oe("span",{class:"tech-status-on"},"ON",-1)),U[17]||(U[17]=Oe("span",{class:"tech-status-off"},"OFF",-1)),Oe("span",{class:vn(["tech-slider",gt.value&&"tech-slider-on"])},null,2)],2),gt.value?(_t(),xt("div",Ew)):Kn("",!0)])]),Oe("div",Tw,[U[20]||(U[20]=Oe("div",{class:"interaction-auto-label"},[Oe("span",{class:"interaction-auto-tag"},"AUTO"),Oe("span",null,"自动模式")],-1)),Oe("div",{class:"tech-switch-container tech-switch-container--sm",onClick:Ll(Wm,["stop"])},[Oe("div",{class:vn(["tech-switch-label tech-switch-label--sm",wn.value&&"tech-switch-on"])},[U[18]||(U[18]=Oe("span",{class:"tech-status-on tech-status-on--sm"},"开",-1)),U[19]||(U[19]=Oe("span",{class:"tech-status-off tech-status-off--sm"},"关",-1)),Oe("span",{class:vn(["tech-slider tech-slider--sm",wn.value&&"tech-slider-on"])},null,2)],2)])])])])])):Kn("",!0)]),_:1}),!o.value&&!c.value&&!We.value&&!ve.value?(_t(),xt("div",ww,[...U[21]||(U[21]=[Oe("div",{class:"max-w-[min(22rem,calc(100vw-2rem))] rounded-lg bg-slate-800/80 px-6 py-3 text-center text-slate-300"},[Oe("div",{class:"mb-1 font-medium"},"点击进入行走模式"),Oe("div",{class:"text-sm text-slate-400"},"鼠标控制视角 · 方向键/WASD 行走 · Space 跳跃")],-1)])])):Kn("",!0),!o.value&&!c.value?(_t(),xt("div",Aw,[Oe("div",Cw,[U[22]||(U[22]=Oe("div",{class:"text-cyan-400/90 text-[10px] font-semibold tracking-widest uppercase"}," DS18 温度 ",-1)),Oe("div",Rw,yn(Ro.value),1)]),U[23]||(U[23]=Oe("div",{class:"px-3 py-1.5 bg-slate-800/85 rounded-lg text-slate-400 text-xs border border-slate-600/80"}," SLAM AR 场景交互 ",-1))])):Kn("",!0)]))}},Ow=WT(Fw,[["__scopeId","data-v-d838665b"]]),Vm="home",Bw=1,fs=[{id:"home",label:"起点",x:.62,y:4.42,z:-1.22,yaw:0},{id:"fan",label:"风扇",x:-2.5,y:9.46,z:.04,yaw:1.57},{id:"gate",label:"大门",x:7.36,y:3.05,z:-.26,yaw:3.14},{id:"light",label:"灯",x:1.21,y:-1.15,z:.29,yaw:.78}];function zw(){const n=fs.find(e=>e.id===Vm)??fs[0];return n?{x:n.x,y:n.y,z:n.z}:null}function kw(){return fs.filter(n=>n.id!==Vm).map(n=>({x:n.x,y:n.y,z:n.z,radius:Bw,label:n.label}))}const Vw={class:"relative w-full h-screen"},Hw={key:0,class:"pointer-events-none fixed bottom-3 left-3 z-[60] flex max-w-[min(14rem,calc(100vw-1.5rem))] flex-col items-start gap-1"},Gw={class:"pointer-events-auto w-full overflow-hidden rounded-lg border border-cyan-600/50 bg-slate-900/92 shadow-lg shadow-cyan-900/20 backdrop-blur-sm"},Ww={class:"flex flex-col gap-1 p-2"},Xw=["disabled","onClick"],Yw={key:0,class:"px-1 pt-0.5 text-[10px] text-slate-500"},qw={class:"pointer-events-none fixed bottom-3 right-3 z-[60] flex max-w-[min(22rem,calc(100vw-1.5rem))] flex-col items-end gap-1"},jw={class:"pointer-events-auto max-h-[min(40vh,20rem)] w-full overflow-hidden rounded-lg border border-slate-600/80 bg-slate-900/92 shadow-lg shadow-black/40 backdrop-blur-sm"},$w={class:"flex items-center justify-between gap-2 border-b border-slate-600/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400"},Zw=["disabled"],Kw={class:"max-h-[min(36vh,18rem)] overflow-y-auto px-2 py-2 text-left text-[11px] leading-relaxed text-slate-200"},Jw={key:0,class:"py-2 text-slate-500"},Qw=27.5,eA=2.5,tA=120,nA=12e3,zd=80,iA={__name:"App",setup(n){const t="/robot.glb",s=Math.max(900,2e3),o=Object.fromEntries(Object.entries({fan:"风扇",gate:"大门",light:"灯"}).map(([ie,me])=>[me,ie])),a=[["风扇","fan_mode","fan_auto","fanAuto"],["大门","gate_mode","gate_auto","gateAuto"],["灯","light_mode","light_auto","lightAuto"]],l=bt(null),c=bt({tempC:null,fanSpeed:null,fanAuto:!1,gateAuto:!1,lightAuto:!1}),u=bt(null);let f=null,h=null,d=null,p=null,v=0,g=1;const m=bt(fs[0]?.id??null),x=bt(!1),M=cs(()=>zw()),S=cs(()=>kw());function w(ie){if(x.value=ie,!ie||u.value)return;const me=fs[0];me&&(u.value={x:me.x,y:me.y,z:me.z,yaw:typeof me.yaw=="number"?me.yaw:0})}function P(){if(u.value)return{...u.value};const ie=fs[0];return ie?{x:ie.x,y:ie.y,z:ie.z,yaw:typeof ie.yaw=="number"?ie.yaw:0}:null}function L(ie,me,C){return ie+(me-ie)*C}function y(ie,me,C){let I=me-ie;for(;I>Math.PI;)I-=Math.PI*2;for(;I<-Math.PI;)I+=Math.PI*2;return ie+I*C}function b(){h!=null&&(clearInterval(h),h=null),d=null,p=null,v=0,g=1}function W(){if(!d||!p){b();return}v+=1;const ie=Math.min(1,v/g),me=d,C=p,I=typeof me.yaw=="number"?me.yaw:0,X=typeof C.yaw=="number"?C.yaw:I;u.value={x:L(me.x,C.x,ie),y:L(me.y,C.y,ie),z:L(me.z,C.z,ie),yaw:y(I,X,ie)},ie>=1&&b()}function D(ie){const me=P();if(!me)return;b();const C={x:ie.x,y:ie.y,z:ie.z,yaw:typeof ie.yaw=="number"?ie.yaw:me.yaw??0};d=me,p=C;const I=Math.hypot(C.x-me.x,C.y-me.y,C.z-me.z),se=Math.max(300*2,I/.8*1e3);g=Math.max(1,Math.ceil(se/300)),v=0,W(),h=window.setInterval(W,300)}function F(ie){if(x.value){m.value=ie.id,ft(`机器人 → ${ie.label}`);{D(ie);return}}}function z({points:ie,error:me}){if(me){ft(me);return}ie?.length>=3&&ft(`工作区已保存（${ie.length} 个点）`)}function V(){f==null&&(f=window.setInterval(()=>{const ie=Date.now()/nA*Math.PI*2,me=Qw+eA*Math.sin(ie);c.value={...c.value,tempC:Math.round(me*100)/100}},tA))}function j(){f!=null&&(clearInterval(f),f=null)}const H=bt({}),k=bt({}),ne=bt({}),oe=bt({});function we(ie,me){const C=o[ie]||ie;return`/control?device=${encodeURIComponent(C)}&state=${me}`}function Ae(ie,me,C,I){}const de=bt([]);function Ke(ie=new Date){const me=ie.getFullYear(),C=String(ie.getMonth()+1).padStart(2,"0"),I=String(ie.getDate()).padStart(2,"0"),X=String(ie.getHours()).padStart(2,"0"),se=String(ie.getMinutes()).padStart(2,"0"),Y=String(ie.getSeconds()).padStart(2,"0");return`${me}年${C}月${I}日 ${X}:${se}:${Y}`}function vt(){const ie=new Date,me=ie.getFullYear(),C=ie.getMonth(),I=ie.getDate(),X=new Date(me,C,I-2),se=new Date(me,C,I-1),Y=(A,pe,ce,re,he)=>({t:new Date(A.getFullYear(),A.getMonth(),A.getDate(),pe,ce,re),message:he}),ae=[Y(X,7,25,0,"风扇 开启"),Y(X,18,20,0,"风扇 关闭"),Y(X,19,50,0,"灯 开启"),Y(X,22,15,0,"灯 关闭"),Y(X,23,5,0,"风扇 开启"),Y(X,23,48,0,"风扇 关闭"),Y(X,23,52,0,"灯 开启"),Y(X,23,58,40,"灯 关闭"),Y(se,8,30,0,"风扇 开启"),Y(se,21,10,0,"风扇 关闭"),Y(se,21,25,0,"灯 开启"),Y(se,23,55,0,"灯 关闭"),Y(se,23,56,0,"风扇 开启"),Y(se,23,59,10,"风扇 关闭")];return ae.sort((A,pe)=>A.t-pe.t),ae.map((A,pe)=>({id:`seed-hist-${pe}-${A.t.getTime()}`,text:`${Ke(A.t)} ${A.message}`})).reverse()}function ft(ie){const me=`${Date.now()}-${Math.random().toString(36).slice(2,9)}`;de.value=[{id:me,text:`${Ke()} ${ie}`},...de.value].slice(0,zd)}const le=bt(!1);async function ye(){if(!le.value){ft("【AI】未配置 VITE_DEEPSEEK_API_KEY，请在 .env.local 中设置");return}}const Me=({device:ie,isOn:me})=>{if(!ie)return;ft(`${ie} ${me?"开启":"关闭"}`);const C=a.find(([Y])=>Y===ie);if(C){const Y=C[3];if(c.value[Y]){const ae=Date.now()+s;k.value={...k.value,[ie]:{expected:!1,deadline:ae}},c.value={...c.value,[Y]:!1},oe.value={...oe.value,[ie]:!0}}}const I=Date.now()+s;H.value={...H.value,[ie]:{expected:me,deadline:I}};const X=l.value&&typeof l.value=="object"?{...l.value}:{};l.value={...X,[ie]:me},we(ie,me?"on":"off")},Ze=({device:ie,isAutoOn:me})=>{if(!ie)return;ft(`${ie} ${me?"自动模式 开启":"自动模式 关闭（手动）"}`);const C=a.find(([Y])=>Y===ie);if(!C)return;const I=C[3],X=Date.now()+s;if(k.value={...k.value,[ie]:{expected:me,deadline:X}},c.value={...c.value,[I]:me},!me)oe.value={...oe.value,[ie]:!0};else{const Y={...ne.value};delete Y[ie],ne.value=Y;const ae={...oe.value};delete ae[ie],oe.value=ae}we(ie,me?"auto":"manual")};return ol(async()=>{de.value=[...vt(),...de.value].slice(0,zd),V()}),al(()=>{j(),b()}),(ie,me)=>(_t(),xt("div",Vw,[Tn(Ow,{"pcd-url":"/map.pcd","spawn-canonical":M.value,"only-walking-plane-number":2,"point-size":.02,"max-display-points":0,"move-speed":.1,"camera-height-above-floor":1.2,"collision-radius":.3,"interaction-distance-threshold":1,"synced-device-state":l.value??void 0,telemetry:c.value,"robot-pose":u.value,"robot-enabled":!0,"robot-model-url":Ma(t),"robot-waypoints":Ma(fs),"interaction-zones":S.value,onSwitchToggle:Me,onAutoToggle:Ze,onMapReady:w,onWorkAreaSaved:z},null,8,["spawn-canonical","synced-device-state","telemetry","robot-pose","robot-model-url","robot-waypoints","interaction-zones"]),(_t(),xt("div",Hw,[Oe("div",Gw,[me[0]||(me[0]=Oe("div",{class:"border-b border-cyan-700/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-400/90"}," 工作终点 ",-1)),Oe("div",Ww,[(_t(!0),xt(Nn,null,Ec(Ma(fs),C=>(_t(),xt("button",{key:C.id,type:"button",class:vn(["rounded px-3 py-1.5 text-left text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-45",m.value===C.id?"bg-cyan-600 text-white":"bg-slate-700/90 text-slate-200 hover:bg-slate-600"]),disabled:!x.value,onClick:I=>F(C)},yn(C.label),11,Xw))),128)),x.value?Kn("",!0):(_t(),xt("p",Yw,"地图加载中…"))])])])),Oe("div",qw,[Oe("div",jw,[Oe("div",$w,[me[1]||(me[1]=Oe("span",null,"操作记录",-1)),Oe("button",{type:"button",class:"pointer-events-auto rounded border border-slate-500/80 bg-slate-800/90 px-2 py-0.5 text-[10px] font-medium normal-case tracking-normal text-slate-200 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50",disabled:le.value,onClick:ye},yn(le.value?"分析中…":"AI 分析"),9,Zw)]),Oe("ul",Kw,[de.value.length===0?(_t(),xt("li",Jw,"暂无操作")):(_t(!0),xt(Nn,{key:1},Ec(de.value,C=>(_t(),xt("li",{key:C.id,class:"whitespace-pre-wrap break-words border-b border-slate-700/50 py-1.5 pl-1 last:border-b-0"},yn(C.text),1))),128))])])])]))}};S0(iA).mount("#app");export{Kx as $,cA as A,On as B,rt as C,jv as D,nn as E,Hv as F,fA as G,uf as H,uA as I,iv as J,Eu as K,Lr as L,hA as M,Vo as N,Yt as O,Yv as P,Jt as Q,kc as R,Mn as S,rA as T,Jn as U,tt as V,Pn as W,Rx as X,mf as Y,Sm as Z,dA as _,aA as a,ka as a0,yu as a1,Mm as a2,pn as a3,ja as a4,qa as a5,hl as a6,Mt as a7,gs as a8,Co as a9,ji as aa,$i as ab,oA as b,gA as c,wr as d,mA as e,mt as f,O as g,kh as h,pA as i,_A as j,lA as k,Fs as l,Fl as m,J0 as n,hn as o,rn as p,Vc as q,Bi as r,Ya as s,Ys as t,Su as u,Cv as v,Hn as w,Ns as x,It as y,Xt as z};
