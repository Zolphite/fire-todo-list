(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function u(e){return c.p+"static/js/"+({about:"about"}[e]||e)+"."+{about:"2aa758b5","chunk-118cced2":"c7453a07","chunk-e2b79556":"eda524ed"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,"chunk-118cced2":1,"chunk-e2b79556":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="static/css/"+({about:"about"}[e]||e)+"."+{about:"9c2e8a0e","chunk-118cced2":"49ebea50","chunk-e2b79556":"f63b88c6"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var d=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"27b9":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"nav"};function o(e,t,n,o,i,u){var c=Object(r["w"])("top-bar"),s=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",a,[Object(r["g"])(c,{authUser:i.authUser,is_signed_in:i.is_signed_in,username:i.username},null,8,["authUser","is_signed_in","username"])]),Object(r["g"])(s,{authUser:i.authUser},null,8,["authUser"])],64)}var i={class:"top-bar"},u=Object(r["g"])("div",{class:"title"},[Object(r["g"])("i",{class:"fas fa-tasks logo"}),Object(r["f"])("Fire TODO List")],-1),c={class:"nav-links"},s=Object(r["f"])("Todo"),l={key:0,class:"display-hud text-capitalize"},d={key:2,class:"loged-out-links"},f=Object(r["f"])(" Login "),p=Object(r["f"])(" | "),b=Object(r["f"])(" Register ");function h(e,t,n,a,o,h){var g=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",i,[u,Object(r["g"])("div",c,[Object(r["g"])(g,{to:"/todo"},{default:Object(r["C"])((function(){return[s]})),_:1}),1==n.is_signed_in?(Object(r["p"])(),Object(r["d"])("div",l," welcome "+Object(r["y"])(n.username),1)):Object(r["e"])("",!0),1==n.is_signed_in?(Object(r["p"])(),Object(r["d"])("a",{key:1,class:"logout-btn text-capitalize",onClick:t[1]||(t[1]=function(){return h.LogoutUser&&h.LogoutUser.apply(h,arguments)})}," Log Out ")):Object(r["e"])("",!0),0==n.is_signed_in?(Object(r["p"])(),Object(r["d"])("div",d,[Object(r["g"])(g,{to:"/login",class:"login-btn text-capitalize px-2"},{default:Object(r["C"])((function(){return[f]})),_:1}),p,Object(r["g"])(g,{to:"/register",class:"register-btn text-capitalize px-2"},{default:Object(r["C"])((function(){return[b]})),_:1})])):Object(r["e"])("",!0)])])}var g=n("93c7"),m={props:["is_signed_in","authUser","username"],methods:{LogoutUser:function(){var e=this;g["a"].auth().signOut().then((function(){e.$router.push("/login")})).catch((function(e){console.log(e)}))}}};n("de70");m.render=h;var v=m,O={name:"App",components:{topBar:v},data:function(){return{is_signed_in:!1,username:null,authUser:{}}},mounted:function(){this.firebaseAuthCheck()},methods:{firebaseAuthCheck:function(){var e=this;g["a"].auth().onAuthStateChanged((function(t){t?(console.log("Signed In"),e.is_signed_in=!0,e.authUser=t,e.username=e.authUser.displayName,console.log(t)):(console.log("Signed Out"),e.is_signed_in=!1,e.username,e.authUser={})}))}}};n("763e");O.render=o;var j=O,y=(n("7b17"),n("ab8b"),n("15f5"),n("7051"),n("1da1")),_=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("6c02")),k={class:"home"},w=Object(r["g"])("h3",{class:"pt-2"},"Home",-1),x=Object(r["g"])("p",null,"Welcome to the TODO list app. Please visit the todo list page from the nav bar if you are signed in.",-1);function U(e,t,n,a,o,i){return Object(r["p"])(),Object(r["d"])("div",k,[w,x])}var A={name:"Home",props:["authUser"],mounted:function(){this.$router.push("Todo")}};A.render=U;var C=A,S=[{path:"/",name:"Home",component:C,meta:{requiresAuth:!0}},{path:"/todo",name:"TodoList",component:function(){return n.e("about").then(n.bind(null,"a7b9"))},meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("chunk-118cced2").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-e2b79556").then(n.bind(null,"73cf"))}}],L=Object(_["a"])({history:Object(_["b"])("/"),routes:S});L.beforeEach(function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=t.matched.some((function(e){return e.meta.requiresAuth})),g["a"].auth().currentUser,e.t0=a,!e.t0){e.next=7;break}return e.next=6,g["a"].getCurrentUser();case 6:e.t0=!e.sent;case 7:if(!e.t0){e.next=11;break}r("/login"),e.next=12;break;case 11:r();case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),L.afterEach(function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:"TodoList"==t.name&&"Register"==n.name&&document.location.reload();case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());var P=L;Object(r["c"])(j).use(P).mount("#app")},"6bf6":function(e,t,n){},"763e":function(e,t,n){"use strict";n("27b9")},"93c7":function(e,t,n){"use strict";n("d3b7");var r=n("260b"),a=(n("000b"),n("ea7b"),n("588e"),{apiKey:"AIzaSyABJePhxxo3W52UUKzzkcI6B3MxM__7294",authDomain:"fire-todo-list-2a94b.firebaseapp.com",projectId:"fire-todo-list-2a94b",storageBucket:"fire-todo-list-2a94b.appspot.com",messagingSenderId:"467882020049",appId:"1:467882020049:web:46d17cbd94f8caff0809f0"});r["a"].initializeApp(a),r["a"].getCurrentUser=function(){return new Promise((function(e,t){var n=r["a"].auth().onAuthStateChanged((function(t){n(),e(t)}),t)}))},t["a"]=r["a"]},de70:function(e,t,n){"use strict";n("6bf6")}});
//# sourceMappingURL=app.ecb5d4aa.js.map