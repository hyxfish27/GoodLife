"use strict";(self["webpackChunkgood_life"]=self["webpackChunkgood_life"]||[]).push([[453],{6453:(t,e,a)=>{a.r(e),a.d(e,{default:()=>C});var n=a(3396),i={class:"d-flex flex-column min-vh-100"};function s(t,e,a,s,o,r){var c=(0,n.up)("DashboardNav"),l=(0,n.up)("router-view"),u=(0,n.up)("DashboardFooter");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(c),o.adminStatus?((0,n.wg)(),(0,n.j4)(l,{key:0})):(0,n.kq)("",!0),(0,n.Wm)(u,{class:"mt-auto"})])}a(4916),a(5306);var o=a(9242),r={class:"navbar navbar-expand-lg bg-white sticky-top py-4",id:"dashBoardNav"},c={class:"container"},l=(0,n._)("i",{class:"bi bi-flower1 h3 me-2"},null,-1),u=(0,n._)("span",{class:"h3",id:"brandName"},"女 子 x 生 活 Good Life",-1),d=(0,n._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,n._)("i",{class:"bi bi-justify navbar-toggler-icon h2 text-primary my-auto d-flex justify-content-center align-items-center"})],-1),m={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},p={class:"navbar-nav"},h=(0,n._)("p",{class:"mb-0 h6"},"產品列表",-1),v=(0,n._)("p",{class:"mb-0 h6"},"訂單管理",-1),b=(0,n._)("p",{class:"mb-0 h6"},"優惠活動",-1),g={class:"navbar-nav ms-auto"};function f(t,e,a,i,s,f){var y=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("nav",r,[(0,n._)("div",c,[(0,n.Wm)(y,{class:"navbar-brand link-primary",to:"/"},{default:(0,n.w5)((function(){return[l,u]})),_:1}),d,(0,n._)("div",m,[(0,n._)("div",p,[(0,n.Wm)(y,{class:"nav-link btn-primary border border-white text-white",to:"/admin/products"},{default:(0,n.w5)((function(){return[h]})),_:1}),(0,n.Wm)(y,{class:"nav-link btn-primary border border-white text-white",to:"/admin/orders"},{default:(0,n.w5)((function(){return[v]})),_:1}),(0,n.Wm)(y,{class:"nav-link btn-primary border border-white text-white",to:"/admin/coupons"},{default:(0,n.w5)((function(){return[b]})),_:1})]),(0,n._)("div",g,[(0,n._)("button",{type:"button",class:"nav-link btn btn-primary text-white",onClick:e[0]||(e[0]=(0,o.iM)((function(){return f.logout&&f.logout.apply(f,arguments)}),["prevent"]))}," 登出 ")])])])])}const y={inject:["emitter"],methods:{logout:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/v2","/logout");this.$http.post(e).then((function(e){e.data.success&&(document.cookie="myToken=;expires=;",t.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:"".concat("emoji-laughing")}),t.$router.replace("/"))}))}}};var k=a(89);const w=(0,k.Z)(y,[["render",f]]),x=w;var _={class:"bg-primary py-4"},j=(0,n.uE)('<div class="container-fluid"><div class="row justify-content-center align-content-start align-items-center text-white text-center"><div class="col-12 col-md-6 mb-2"><p class="mb-1 h5">聯絡我們</p><i class="bi bi-envelope h5 me-1 me-sm-2"></i><span><a href="mailto: girlxgoodlife@gmail.com">girlxgoodlife@gmail.com</a></span></div><div class="col-10 my-auto"><span class="mb-2 h6 d-none d-sm-inline-flex"> © 2022 Vicky Huang | 僅個人作品練習，無任何商業用途 </span></div></div></div>',1),$=[j];function D(t,e){return(0,n.wg)(),(0,n.iD)("footer",_,$)}const N={},A=(0,k.Z)(N,[["render",D]]),W=A,z={data:function(){return{adminStatus:!1}},components:{DashboardNav:x,DashboardFooter:W},inject:["emitter"],methods:{checkAdmin:function(){var t=this,e=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(e){this.$http.defaults.headers.common.Authorization="".concat(e);var a="".concat("https://vue3-course-api.hexschool.io/v2","/api/user/check");this.$http.post(a).then((function(){t.adminStatus=!0}))["catch"]((function(e){t.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"".concat("emoji-dizzy")}),t.$router.replace("/login")}))}else this.emitter.emit("push-message",{style:"danger",title:"請重新登入 > <",emoji:"".concat("emoji-dizzy")}),this.$router.push("/login")}},mounted:function(){this.checkAdmin()}},M=(0,k.Z)(z,[["render",s]]),C=M}}]);
//# sourceMappingURL=453.9f3de27d.js.map