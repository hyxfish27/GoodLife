"use strict";(self["webpackChunkgood_life"]=self["webpackChunkgood_life"]||[]).push([[92],{8092:(e,n,o)=>{o.r(n),o.d(n,{default:()=>_});var s=o(3396),t=o(9242),r={class:"container-fluid min-vh-100 d-flex flex-column justify-content-center",id:"login_bg"},a=(0,s._)("h3",{class:"h3 text-center text-white mb-4"},"請先登入",-1),i={class:"row justify-content-center"},l={class:"col-10 col-md-8 col-lg-6"},c={id:"form",class:"form-signin"},u={class:"form-floating mb-3"},d=(0,s._)("label",{for:"username"},"Email address",-1),p={class:"form-floating"},m=(0,s._)("label",{for:"password"},"Password",-1);function f(e,n,o,f,h,w){return(0,s.wg)(),(0,s.iD)("div",r,[a,(0,s._)("div",i,[(0,s._)("div",l,[(0,s._)("form",c,[(0,s._)("div",u,[(0,s.wy)((0,s._)("input",{type:"email",class:"form-control rounded-pill px-3",id:"username","onUpdate:modelValue":n[0]||(n[0]=function(e){return h.user.username=e}),placeholder:"name@example.com",required:"",autofocus:""},null,512),[[t.nr,h.user.username]]),d]),(0,s._)("div",p,[(0,s.wy)((0,s._)("input",{type:"password",class:"form-control rounded-pill px-3",id:"password","onUpdate:modelValue":n[1]||(n[1]=function(e){return h.user.password=e}),placeholder:"Password",required:""},null,512),[[t.nr,h.user.password]]),m]),(0,s._)("button",{class:"btn btn-lg btn-primary text-white rounded-pill w-100 mt-3",onClick:n[2]||(n[2]=function(){return w.signIn&&w.signIn.apply(w,arguments)}),type:"button"}," 登入 ")])])])])}o(2222),o(3710);const h={data:function(){return{user:{username:"",password:""}}},methods:{signIn:function(){var e=this,n="".concat("https://vue3-course-api.hexschool.io/v2","/admin/signin");this.$http.post(n,this.user).then((function(n){var o=n.data,s=o.token,t=o.expired;document.cookie="myToken = ".concat(s,"; expires = ").concat(new Date(t)),e.$router.push("/admin/products")}))["catch"]((function(e){console.dir(e.response.data.message)}))}}};var w=o(89);const g=(0,w.Z)(h,[["render",f]]),_=g}}]);
//# sourceMappingURL=92.3e21d343.js.map