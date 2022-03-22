(function(){"use strict";var n={398:function(n,o,t){var r=t(9242),e=t(3396);const u={id:"nav"},a=(0,e.Uk)("Home"),i=(0,e.Uk)(" | "),c=(0,e.Uk)("About"),l=(0,e.Uk)(" | "),s=(0,e.Uk)("Components");function f(n,o,t,r,f,p){const m=(0,e.up)("router-link"),d=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",u,[(0,e.Wm)(m,{to:"/"},{default:(0,e.w5)((()=>[a])),_:1}),i,(0,e.Wm)(m,{to:"/about"},{default:(0,e.w5)((()=>[c])),_:1}),l,(0,e.Wm)(m,{to:"/components"},{default:(0,e.w5)((()=>[s])),_:1})]),(0,e.Wm)(d)],64)}var p={name:"App",components:{}},m=t(89);const d=(0,m.Z)(p,[["render",f]]);var v=d,h=t(7809);function g(n,o,t,r,u,a){return(0,e.wg)(),(0,e.iD)("h1",null,"This is Home")}var C={name:"HomePage",components:{}};const b=(0,m.Z)(C,[["render",g]]);var w=b;function k(n,o,t,r,u,a){return(0,e.wg)(),(0,e.iD)("h1",null,"This is About")}var y={name:"AboutPage",components:{}};const _=(0,m.Z)(y,[["render",k]]);var O=_;const x=(0,e._)("h1",null,"This is Components",-1);function B(n,o,t,r,u,a){const i=(0,e.up)("ButtonCounter"),c=(0,e.up)("RandomColorBox");return(0,e.wg)(),(0,e.iD)(e.HY,null,[x,(0,e.Wm)(i),(0,e.Wm)(c)],64)}var H=t(7139);const j={id:"button_counter"},D=(0,e._)("h2",null,"Component ButtonCounter",-1);function P(n,o,t,r,u,a){return(0,e.wg)(),(0,e.iD)("div",j,[D,(0,e._)("button",{onClick:o[0]||(o[0]=n=>u.count++)}," Count is: "+(0,H.zw)(u.count),1)])}var W={name:"ButtonCounter",props:{msg:String},data(){return{count:0}}};const Z=(0,m.Z)(W,[["render",P]]);var A=Z;const S=n=>((0,e.dD)("data-v-2ada4015"),n=n(),(0,e.Cn)(),n),T=S((()=>(0,e._)("h2",null,"Component RandomColorBox",-1)));function U(n,o,t,r,u,a){return(0,e.wg)(),(0,e.iD)(e.HY,null,[T,(0,e._)("div",{onClick:o[0]||(o[0]=(...n)=>a.getNewColor&&a.getNewColor(...n)),style:(0,H.j5)(u.colorBoxStyle),id:"random"},"Click me to change the color ",4)],64)}var R={name:"RandomColorBox",props:{msg:String},data(){return{colors:["red","green","yellow","blue"],colorBoxStyle:{backgroundColor:"#16a085"}}},methods:{getNewColor:function(){let n=Math.floor(Math.random()*this.colors.length);this.colorBoxStyle.backgroundColor=this.colors[n]}}};const M=(0,m.Z)(R,[["render",U],["__scopeId","data-v-2ada4015"]]);var N=M,Y={name:"HomePage",components:{ButtonCounter:A,RandomColorBox:N}};const z=(0,m.Z)(Y,[["render",B]]);var E=z;const F=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:O},{path:"/components",name:"Components",component:E}],I=(0,h.p7)({history:(0,h.PO)(),routes:F});var q=I;const G=(0,r.ri)(v);G.use(q),G.mount("#app")}},o={};function t(r){var e=o[r];if(void 0!==e)return e.exports;var u=o[r]={exports:{}};return n[r](u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(o,r,e,u){if(!r){var a=1/0;for(s=0;s<n.length;s++){r=n[s][0],e=n[s][1],u=n[s][2];for(var i=!0,c=0;c<r.length;c++)(!1&u||a>=u)&&Object.keys(t.O).every((function(n){return t.O[n](r[c])}))?r.splice(c--,1):(i=!1,u<a&&(a=u));if(i){n.splice(s--,1);var l=e();void 0!==l&&(o=l)}}return o}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[r,e,u]}}(),function(){t.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(o,{a:o}),o}}(),function(){t.d=function(n,o){for(var r in o)t.o(o,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:o[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){var n={143:0};t.O.j=function(o){return 0===n[o]};var o=function(o,r){var e,u,a=r[0],i=r[1],c=r[2],l=0;if(a.some((function(o){return 0!==n[o]}))){for(e in i)t.o(i,e)&&(t.m[e]=i[e]);if(c)var s=c(t)}for(o&&o(r);l<a.length;l++)u=a[l],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(s)},r=self["webpackChunkapp"]=self["webpackChunkapp"]||[];r.forEach(o.bind(null,0)),r.push=o.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(398)}));r=t.O(r)})();
//# sourceMappingURL=app.a048ade8.js.map