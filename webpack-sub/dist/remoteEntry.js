var subApp;(()=>{"use strict";var e,r,t,o,n={},i={};function a(e){var r=i[e];if(void 0!==r)return r.exports;var t=i[e]={exports:{}};return n[e](t,t.exports,a),t.exports}a.m=n,a.d=(e,r)=>{for(var t in r)a.o(r,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((r,t)=>(a.f[t](e,r),r)),[])),a.u=e=>e+".js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="my-webpack-project:",a.l=(t,o,n,i)=>{if(e[t])e[t].push(o);else{var s,u;if(void 0!==n)for(var p=document.getElementsByTagName("script"),l=0;l<p.length;l++){var c=p[l];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==r+n){s=c;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+n),s.src=t),e[t]=[o];var d=(r,o)=>{s.onerror=s.onload=null,clearTimeout(f);var n=e[t];if(delete e[t],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),r)return r(o)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t={},o={},a.f.remotes=(e,r)=>{a.o(t,e)&&t[e].forEach((e=>{var t=a.R;t||(t=[]);var n=o[e];if(!(t.indexOf(n)>=0)){if(t.push(n),n.p)return r.push(n.p);var i=r=>{r||(r=new Error("Container missing")),"string"==typeof r.message&&(r.message+='\nwhile loading "'+n[1]+'" from '+n[2]),a.m[e]=()=>{throw r},n.p=0},s=(e,t,o,a,s,u)=>{try{var p=e(t,o);if(!p||!p.then)return s(p,a,u);var l=p.then((e=>s(e,a)),i);if(!u)return l;r.push(n.p=l)}catch(e){i(e)}},u=(e,r,o)=>s(r.get,n[1],t,0,p,o),p=r=>{n.p=1,a.m[e]=e=>{e.exports=r()}};s(a,n[2],0,0,((e,r,t)=>e?s(a.I,n[0],0,e,u,t):i()),1)}}))},(()=>{a.S={};var e={},r={};a.I=(t,o)=>{o||(o=[]);var n=r[t];if(n||(n=r[t]={}),!(o.indexOf(n)>=0)){if(o.push(n),e[t])return e[t];a.o(a.S,t)||(a.S[t]={}),a.S[t];var i=[];return e[t]=i.length?Promise.all(i).then((()=>e[t]=1)):1}}})(),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var r=a.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={264:0};a.f.j=(r,t)=>{var o=a.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var i=a.p+a.u(r),s=new Error;a.l(i,(t=>{if(a.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+r+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,o[1](s)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[i,s,u]=t,p=0;if(i.some((r=>0!==e[r]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);u&&u(a)}for(r&&r(t);p<i.length;p++)n=i[p],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var s,u,p,l,c={};s=c,u={"./subExposed":()=>a.e(54).then((()=>()=>a(54)))},p=(e,r)=>(a.R=r,r=a.o(u,e)?u[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),a.R=void 0,r),l=(e,r)=>{if(a.S){var t="default",o=a.S[t];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return a.S[t]=e,a.I(t,r)}},a.d(s,{get:()=>p,init:()=>l}),subApp=c})();