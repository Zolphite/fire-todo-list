(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-118cced2"],{5954:function(e,t,n){"use strict";n("9f44")},"9f44":function(e,t,n){},a55b:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),r=Object(o["F"])("data-v-7ce2f390");Object(o["s"])("data-v-7ce2f390");var a={class:"login-form mx-2"},c={class:"container"},s={class:"row g-0 login-row my-3"},l={class:"text-center login-side"},i=Object(o["g"])("h1",{class:""},"Login",-1),u=Object(o["g"])("div",{class:"border-top border-primary w-50 my-3 mx-auto"},null,-1),g=Object(o["g"])("h3",null,"Welcome back",-1),d={class:"login-form-group"},m=Object(o["g"])("label",{for:"login-email",class:"w-100"},"Email",-1),p={class:"login-form-group"},b=Object(o["g"])("label",{for:"login-password",class:"w-100"},"Password",-1),f=Object(o["g"])("div",{class:"login-form-group"},[Object(o["g"])("button",{type:"submit-login-form-actual",class:"login-btn btn btn-primary text-white"},"Login Now")],-1),j=Object(o["g"])("p",null,[Object(o["f"])(" Don't have an account? "),Object(o["g"])("a",{href:"/register"},"Register Here")],-1);Object(o["q"])();var O=r((function(e,t,n,r,O,w){return Object(o["p"])(),Object(o["d"])("section",a,[Object(o["g"])("div",c,[Object(o["g"])("div",s,[Object(o["g"])("div",l,[i,u,g,Object(o["g"])("form",{class:"login-form-actual my-3",onSubmit:t[3]||(t[3]=Object(o["E"])((function(){return w.loginButtonPressed&&w.loginButtonPressed.apply(w,arguments)}),["prevent"]))},[Object(o["g"])("div",d,[m,Object(o["D"])(Object(o["g"])("input",{class:"xxl-inp",type:"email",name:"login-email",placeholder:"Email","onUpdate:modelValue":t[1]||(t[1]=function(e){return O.login_form.email=e}),required:""},null,512),[[o["A"],O.login_form.email]])]),Object(o["g"])("div",p,[b,Object(o["D"])(Object(o["g"])("input",{class:"xxl-inp",type:"password",name:"login-password",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=function(e){return O.login_form.password=e}),required:""},null,512),[[o["A"],O.login_form.password]])]),f,j],32)])])])])})),w=n("1da1"),v=(n("96cf"),n("93c7")),h={props:["socket","authUser"],data:function(){return{login_form:{email:"",username:"",password:""}}},created:function(){},methods:{loginButtonPressed:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v["a"].auth().signInWithEmailAndPassword(e.login_form.email,e.login_form.password);case 3:n=t.sent,o=n.user,console.log(o),e.$router.push("/todo"),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0),alert(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})))()}}};n("5954");h.render=O,h.__scopeId="data-v-7ce2f390";t["default"]=h}}]);
//# sourceMappingURL=chunk-118cced2.c7453a07.js.map