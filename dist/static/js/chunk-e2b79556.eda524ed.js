(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2b79556"],{2748:function(e,r,t){"use strict";t("d745")},"73cf":function(e,r,t){"use strict";t.r(r);var s=t("7a23"),a={class:"register-form mx-2"},i={class:"register container"},n={class:"row g-0 register-row"},o={class:"text-center register-side"},c=Object(s["g"])("h1",{class:""},"Register",-1),l=Object(s["g"])("div",{class:"border-top border-primary w-50 my-2 mx-auto"},null,-1),u=Object(s["g"])("h3",null,"Please Regiseter to create your personal TODO list.",-1),g={class:"register-form-group"},m=Object(s["g"])("label",{for:"register-email",class:"w-100"},"Email",-1),d={class:"register-form-group"},p=Object(s["g"])("label",{for:"register-username",class:"w-100"},"Username",-1),f={class:"register-form-group"},b=Object(s["g"])("label",{for:"register-password",class:"w-100"},"Password",-1),w=Object(s["g"])("div",{class:"register-form-group"},[Object(s["g"])("button",{type:"submit-register-form-actual",class:"register-btn btn btn-primary text-white"},"Register Now")],-1),O=Object(s["g"])("p",null,[Object(s["f"])(" Already have an account? "),Object(s["g"])("a",{href:"/login"},"Login Here")],-1);function j(e,r,t,j,h,v){return Object(s["p"])(),Object(s["d"])("section",a,[Object(s["g"])("div",i,[Object(s["g"])("div",n,[Object(s["g"])("div",o,[c,l,u,Object(s["g"])("form",{class:"register-form-actual",onSubmit:r[4]||(r[4]=Object(s["E"])((function(){return v.RegisterNewUser&&v.RegisterNewUser.apply(v,arguments)}),["prevent"]))},[Object(s["g"])("div",g,[m,Object(s["D"])(Object(s["g"])("input",{class:"xxl-inp",type:"email",name:"register-email",placeholder:"email","onUpdate:modelValue":r[1]||(r[1]=function(e){return h.register_form.email=e}),required:""},null,512),[[s["A"],h.register_form.email]])]),Object(s["g"])("div",d,[p,Object(s["D"])(Object(s["g"])("input",{class:"xxl-inp",type:"username",name:"register-username",placeholder:"username","onUpdate:modelValue":r[2]||(r[2]=function(e){return h.register_form.username=e}),required:""},null,512),[[s["A"],h.register_form.username]])]),Object(s["g"])("div",f,[b,Object(s["D"])(Object(s["g"])("input",{class:"xxl-inp",type:"password",name:"register-password",placeholder:"password","onUpdate:modelValue":r[3]||(r[3]=function(e){return h.register_form.password=e}),required:""},null,512),[[s["A"],h.register_form.password]])]),w,O],32)])])])])}var h=t("1da1"),v=(t("96cf"),t("93c7")),y={props:["is_signed_in","authUser"],data:function(){return{register_form:{email:"",username:"",password:""}}},created:function(){},methods:{RegisterNewUser:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:v["a"].auth().createUserWithEmailAndPassword(e.register_form.email,e.register_form.password).then((function(r){console.log("Successfully created new user:",r.uid),r.user.updateProfile({displayName:e.register_form.username}),e.$router.push("/todo")})).catch((function(e){console.log("Error creating new user:",e),alert(e)}));case 1:case"end":return r.stop()}}),r)})))()}}};t("2748");y.render=j;r["default"]=y},d745:function(e,r,t){}}]);
//# sourceMappingURL=chunk-e2b79556.eda524ed.js.map