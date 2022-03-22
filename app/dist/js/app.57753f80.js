(function(){"use strict";var n={7379:function(n,o,t){var e=t(9242),r=t(3396);const a={id:"nav"};function i(n,o,t,e,i,c){const u=(0,r.up)("NavBar"),s=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",a,[(0,r.Wm)(u),(0,r.Wm)(s)])}const c={id:"nav"},u=(0,r.uE)('<nav class="navbar navbar-expand-lg navbar-dark bg-dark"><div class="container"><a class="navbar-brand" href="/">Fun with Vue</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarTogglerDemo02"><ul class="navbar-nav ms-auto"><li class="nav-item"><a class="nav-link" href="/">Home</a></li><li class="nav-item"><a class="nav-link" href="/about">About</a></li><li class="nav-item"><a class="nav-link" href="/components">Components</a></li></ul></div></div></nav>',1),s=[u];function l(n,o,t,e,a,i){return(0,r.wg)(),(0,r.iD)("div",c,s)}var v={name:"NavBar",components:{}},d=t(89);const f=(0,d.Z)(v,[["render",l]]);var p=f,m={name:"App",components:{NavBar:p}};const g=(0,d.Z)(m,[["render",i]]);var b=g,h=t(7809);const w={class:"container"},C=(0,r._)("div",{class:"row"},[(0,r._)("h1",null,"This is Home")],-1),_=[C];function y(n,o,t,e,a,i){return(0,r.wg)(),(0,r.iD)("div",w,_)}var k={name:"HomePage",components:{}};const x=(0,d.Z)(k,[["render",y]]);var O=x;const B={class:"container"},D=(0,r._)("div",{class:"row"},[(0,r._)("h1",null,"This is About")],-1),T=[D];function S(n,o,t,e,a,i){return(0,r.wg)(),(0,r.iD)("div",B,T)}var j={name:"AboutPage",components:{}};const P=(0,d.Z)(j,[["render",S]]);var Z=P;const A={class:"container"},N={class:"row"},H=(0,r._)("h1",null,"This is Components",-1);function M(n,o,t,e,a,i){const c=(0,r.up)("ButtonCounter"),u=(0,r.up)("RandomColorBox");return(0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("div",N,[H,(0,r.Wm)(c),(0,r.Wm)(u)])])}var R=t(7139);const W={id:"button_counter"},E=(0,r._)("h2",null,"Component ButtonCounter",-1);function F(n,o,t,e,a,i){return(0,r.wg)(),(0,r.iD)("div",W,[E,(0,r._)("button",{onClick:o[0]||(o[0]=n=>a.count++)}," Count is: "+(0,R.zw)(a.count),1)])}var z={name:"ButtonCounter",props:{msg:String},data(){return{count:0}}};const I=(0,d.Z)(z,[["render",F]]);var V=I;const q=n=>((0,r.dD)("data-v-7e96135a"),n=n(),(0,r.Cn)(),n),G={id:"random_color_box"},J=q((()=>(0,r._)("h2",null,"Component RandomColorBox",-1)));function K(n,o,t,e,a,i){return(0,r.wg)(),(0,r.iD)("div",G,[J,(0,r._)("div",{onClick:o[0]||(o[0]=(...n)=>i.getNewColor&&i.getNewColor(...n)),style:(0,R.j5)(a.colorBoxStyle),id:"random"},"Click me to change the color ",4)])}var L={name:"RandomColorBox",props:{msg:String},data(){return{colors:["red","green","yellow","blue"],colorBoxStyle:{backgroundColor:"#16a085"}}},methods:{getNewColor:function(){let n=Math.floor(Math.random()*this.colors.length);this.colorBoxStyle.backgroundColor=this.colors[n]}}};const Q=(0,d.Z)(L,[["render",K],["__scopeId","data-v-7e96135a"]]);var U=Q,X={name:"HomePage",components:{ButtonCounter:V,RandomColorBox:U}};const Y=(0,d.Z)(X,[["render",M]]);var $=Y;function nn(n,o){return(0,r.wg)(),(0,r.iD)("h1",null,"Oops, it looks like the page you're looking for doesn't exist.")}const on={},tn=(0,d.Z)(on,[["render",nn]]);var en=tn;const rn=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:Z},{path:"/components",name:"Components",component:$},{path:"/:catchAll(.*)",component:en}],an=(0,h.p7)({history:(0,h.PO)("/fun-with-vue/"),routes:rn});var cn=an;t(8937);const un=(0,e.ri)(b);un.use(cn),un.mount("#app")}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var a=o[e]={exports:{}};return n[e](a,a.exports,t),a.exports}t.m=n,function(){var n=[];t.O=function(o,e,r,a){if(!e){var i=1/0;for(l=0;l<n.length;l++){e=n[l][0],r=n[l][1],a=n[l][2];for(var c=!0,u=0;u<e.length;u++)(!1&a||i>=a)&&Object.keys(t.O).every((function(n){return t.O[n](e[u])}))?e.splice(u--,1):(c=!1,a<i&&(i=a));if(c){n.splice(l--,1);var s=r();void 0!==s&&(o=s)}}return o}a=a||0;for(var l=n.length;l>0&&n[l-1][2]>a;l--)n[l]=n[l-1];n[l]=[e,r,a]}}(),function(){t.n=function(n){var o=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(o,{a:o}),o}}(),function(){t.d=function(n,o){for(var e in o)t.o(o,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:o[e]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};t.O.j=function(o){return 0===n[o]};var o=function(o,e){var r,a,i=e[0],c=e[1],u=e[2],s=0;if(i.some((function(o){return 0!==n[o]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var l=u(t)}for(o&&o(e);s<i.length;s++)a=i[s],t.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return t.O(l)},e=self["webpackChunkfun_with_vue"]=self["webpackChunkfun_with_vue"]||[];e.forEach(o.bind(null,0)),e.push=o.bind(null,e.push.bind(e))}();var e=t.O(void 0,[998],(function(){return t(7379)}));e=t.O(e)})();
//# sourceMappingURL=app.57753f80.js.map