"use strict";(self["webpackChunkgood_life"]=self["webpackChunkgood_life"]||[]).push([[263],{5969:(e,t,l)=>{l.d(t,{Z:()=>f});var a=l(3396),n=l(7139),i=l(9242),s={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},d=(0,a._)("span",{"aria-hidden":"true"},"«",-1),o=[d],u={key:0,class:"page-link"},c=["onClick"],p=(0,a._)("span",{"aria-hidden":"true"},"»",-1),_=[p];function m(e,t,l,d,p,m){return(0,a.wg)(),(0,a.iD)("nav",s,[(0,a._)("ul",r,[(0,a._)("li",{class:(0,n.C_)([{disabled:!l.pages.has_pre},"page-item"])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,i.iM)((function(e){return m.updatePage(l.pages.current_page-1)}),["prevent"]))},o)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l.pages.total_pages,(function(e){return(0,a.wg)(),(0,a.iD)("li",{class:(0,n.C_)(["page-item",{active:l.pages.current_page===e}]),key:e},[e===l.pages.current_page?((0,a.wg)(),(0,a.iD)("span",u,(0,n.zw)(e),1)):((0,a.wg)(),(0,a.iD)("a",{key:1,class:"page-link",href:"#",onClick:(0,i.iM)((function(t){return m.updatePage(e)}),["prevent"])},(0,n.zw)(e),9,c))],2)})),128)),(0,a._)("li",{class:(0,n.C_)(["page-item",{disabled:!l.pages.has_next}])},[(0,a._)("a",{class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,i.iM)((function(e){return m.updatePage(l.pages.current_page+1)}),["prevent"]))},_)],2)])])}const h={props:["pages"],methods:{updatePage:function(e){this.$emit("emit-pages",e)}}};var g=l(89);const b=(0,g.Z)(h,[["render",m]]),f=b},7570:(e,t,l)=>{l.r(t),l.d(t,{default:()=>Ge});var a=l(3396),n=l(7139),i=l(9242),s={class:"container"},r=(0,a._)("p",{class:"h2 text-center my-4"},[(0,a._)("span",{class:"text-dark bg-secondary"},"訂單管理")],-1),d={class:"row justify-content-center"},o={class:"col-10"},u={class:"table align-middle bg-white rounded-3 d-none d-lg-table"},c=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"購買時間"),(0,a._)("th",null,"Email"),(0,a._)("th",null,"購買品項"),(0,a._)("th",null,"應付金額"),(0,a._)("th",null,"是否付款"),(0,a._)("th",null,"操作")])],-1),p={style:{width:"100px"}},_={class:"row"},m={class:"col-12 col-md-6"},h={class:"form-check form-switch"},g=["id","onUpdate:modelValue","onChange"],b=["for"],f={class:"col-12 col-md-6"},y={key:0,class:"text-primary"},w={key:1,class:"text-light"},v={class:"btn-group btn-group-sm"},k=["onClick","disabled"],O=["onClick","disabled"],x={class:"fas fa-spinner fa-pulse"},D=(0,a.Uk)(" 刪除 "),z={class:"table align-middle bg-white rounded-3 d-inline-table d-lg-none"},C=(0,a._)("th",{style:{width:"100px"}},"購買時間",-1),M=(0,a._)("th",null,"Email",-1),$=(0,a._)("th",null,"購買品項",-1),j=(0,a._)("th",null,"應付金額",-1),R=(0,a._)("th",null,"是否付款",-1),S={class:"form-check form-switch"},E=["id","onUpdate:modelValue","onChange"],L=["for"],P={key:0,class:"text-primary"},Z={key:1,class:"text-light"},H=(0,a._)("th",null,"操作",-1),U={class:"btn-group btn-group-sm"},Y=["onClick","disabled"],K=["onClick","disabled"],V={class:"fas fa-spinner fa-pulse"},q=(0,a.Uk)(" 刪除 ");function W(e,t,l,W,F,G){var I=(0,a.up)("Loading"),N=(0,a.up)("Pagination"),A=(0,a.up)("OrderModal"),B=(0,a.up)("DelModal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(I,{"is-ready":F.isReady},null,8,["is-ready"]),(0,a._)("div",s,[r,(0,a._)("div",d,[(0,a._)("div",o,[(0,a._)("table",u,[c,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(F.orders,(function(t){return(0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",p,(0,n.zw)(e.$filters.timeConvert(t.create_at)),1),(0,a._)("td",null,(0,n.zw)(t.user.email),1),(0,a._)("td",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.products,(function(e){return(0,a.wg)(),(0,a.iD)("tr",{key:t.id+e.id},(0,n.zw)(e.product.title)+" "+(0,n.zw)(e.qty)+" / "+(0,n.zw)(e.product.unit),1)})),128))]),(0,a._)("td",null,(0,n.zw)(e.$filters.currency(t.total)),1),(0,a._)("td",null,[(0,a._)("div",_,[(0,a._)("div",m,[(0,a._)("div",h,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",id:"enableSwitch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_paid=e},"true-value":!0,"false-value":!1,onChange:function(e){return G.updateEnableStatus(t)}},null,40,g),[[i.e8,t.is_paid]]),(0,a._)("label",{class:"form-check-label",for:"enableSwitch".concat(t.id,"}")},null,8,b)])]),(0,a._)("div",f,[t.is_paid?((0,a.wg)(),(0,a.iD)("span",y,"已付款")):((0,a.wg)(),(0,a.iD)("span",w,"未付款"))])])]),(0,a._)("td",null,[(0,a._)("div",v,[(0,a._)("button",{type:"button",class:"btn btn-outline-success",onClick:function(e){return G.openModal(t)},disabled:F.isLoading===t.id}," 檢視 ",8,k),(0,a._)("button",{type:"button",class:"btn btn-outline-primary",onClick:function(e){return G.openDelModal(t)},disabled:F.isLoading===t.id},[(0,a.wy)((0,a._)("i",x,null,512),[[i.F8,F.isLoading===t.id]]),D],8,O)])])])})),128))])]),(0,a._)("table",z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(F.orders,(function(t){return(0,a.wg)(),(0,a.iD)("tbody",{key:t.id},[(0,a._)("tr",null,[C,(0,a._)("td",null,(0,n.zw)(e.$filters.timeConvert(t.create_at)),1)]),(0,a._)("tr",null,[M,(0,a._)("td",null,(0,n.zw)(t.user.email),1)]),(0,a._)("tr",null,[$,(0,a._)("td",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.products,(function(e){return(0,a.wg)(),(0,a.iD)("tr",{key:t.id+e.id},(0,n.zw)(e.product.title)+" "+(0,n.zw)(e.qty)+"/"+(0,n.zw)(e.product.unit),1)})),128))])]),(0,a._)("tr",null,[j,(0,a._)("td",null,(0,n.zw)(e.$filters.currency(t.total)),1)]),(0,a._)("tr",null,[R,(0,a._)("td",null,[(0,a._)("div",S,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",id:"enableSwitch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_paid=e},"true-value":!0,"false-value":!1,onChange:function(e){return G.updateEnableStatus(t)}},null,40,E),[[i.e8,t.is_paid]]),(0,a._)("label",{class:"form-check-label",for:"enableSwitch".concat(t.id,"}")},null,8,L),t.is_paid?((0,a.wg)(),(0,a.iD)("span",P,"已付款")):((0,a.wg)(),(0,a.iD)("span",Z,"未付款"))])])]),(0,a._)("tr",null,[H,(0,a._)("td",null,[(0,a._)("div",U,[(0,a._)("button",{type:"button",class:"btn btn-outline-success",onClick:function(e){return G.openModal(t)},disabled:F.isLoading===t.id}," 檢視 ",8,Y),(0,a._)("button",{type:"button",class:"btn btn-outline-primary",onClick:function(e){return G.openDelModal(t)},disabled:F.isLoading===t.id},[(0,a.wy)((0,a._)("i",V,null,512),[[i.F8,F.isLoading===t.id]]),q],8,K)])])])])})),128))])])]),(0,a.Wm)(N,{pages:F.pagination,onEmitPages:G.getOrders},null,8,["pages","onEmitPages"]),(0,a.Wm)(A,{"temp-order":F.tempOrder,onGetOrders:G.getOrders,onEnableStatus:G.updateEnableStatus,ref:"adminOrder"},null,8,["temp-order","onGetOrders","onEnableStatus"]),(0,a.Wm)(B,{"del-item":F.tempOrder,onRemoveItem:G.removeOrder,ref:"delModal"},null,8,["del-item","onRemoveItem"])])],64)}var F=l(5082),G=(l(2222),l(8309),{class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),I={class:"modal-dialog modal-xl",role:"document"},N={class:"modal-content border-0"},A=(0,a._)("div",{class:"modal-header bg-success text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"訂單細節")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),B={class:"modal-body"},J={class:"row"},Q={class:"col-12"},T=(0,a._)("h3",null,"用戶資料",-1),X={class:"table"},ee={key:0},te=(0,a._)("th",{style:{width:"100px"}},"姓名",-1),le=(0,a._)("th",null,"Email",-1),ae=(0,a._)("th",null,"電話",-1),ne=(0,a._)("th",null,"地址",-1),ie={class:"col-12"},se=(0,a._)("h3",null,"訂單細節",-1),re={class:"table"},de=(0,a._)("th",{style:{width:"100px"}},"訂單編號",-1),oe=(0,a._)("th",null,"下單時間",-1),ue=(0,a._)("th",null,"付款時間",-1),ce={key:0},pe={key:1},_e=(0,a._)("th",null,"付款狀態",-1),me={key:0,class:"text-success"},he={key:1,class:"text-muted"},ge=(0,a._)("th",null,"總金額",-1),be={class:"col-12"},fe=(0,a._)("h3",null,"選購商品",-1),ye={class:"table"},we=(0,a._)("thead",null,[(0,a._)("tr")],-1),ve={class:"text-end"},ke={class:"col-12"},Oe={class:"d-flex justify-content-end"},xe={class:"row"},De={class:"col-12 col-md-6"},ze={class:"form-check form-switch"},Ce=["id"],Me=["for"],$e={class:"col-12 col-md-6"},je={key:0,class:"text-primary"},Re={key:1,class:"text-light"},Se={class:"modal-footer"},Ee=(0,a._)("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1);function Le(e,t,l,s,r,d){return(0,a.wg)(),(0,a.iD)("div",G,[(0,a._)("div",I,[(0,a._)("div",N,[A,(0,a._)("div",B,[(0,a._)("div",J,[(0,a._)("div",Q,[T,(0,a._)("table",X,[e.tempOrder.user?((0,a.wg)(),(0,a.iD)("tbody",ee,[(0,a._)("tr",null,[te,(0,a._)("td",null,(0,n.zw)(e.tempOrder.user.name),1)]),(0,a._)("tr",null,[le,(0,a._)("td",null,(0,n.zw)(e.tempOrder.user.email),1)]),(0,a._)("tr",null,[ae,(0,a._)("td",null,(0,n.zw)(e.tempOrder.user.tel),1)]),(0,a._)("tr",null,[ne,(0,a._)("td",null,(0,n.zw)(e.tempOrder.user.address),1)])])):(0,a.kq)("",!0)])]),(0,a._)("div",ie,[se,(0,a._)("table",re,[(0,a._)("tbody",null,[(0,a._)("tr",null,[de,(0,a._)("td",null,(0,n.zw)(e.tempOrder.id),1)]),(0,a._)("tr",null,[oe,(0,a._)("td",null,(0,n.zw)(e.$filters.timeConvert(e.tempOrder.create_at)),1)]),(0,a._)("tr",null,[ue,(0,a._)("td",null,[e.tempOrder.paid_date?((0,a.wg)(),(0,a.iD)("span",ce,(0,n.zw)(e.$filters.timeConvert(e.tempOrder.paid_date)),1)):((0,a.wg)(),(0,a.iD)("span",pe,"時間不正確"))])]),(0,a._)("tr",null,[_e,(0,a._)("td",null,[e.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("strong",me,"已付款")):((0,a.wg)(),(0,a.iD)("span",he,"尚未付款"))])]),(0,a._)("tr",null,[ge,(0,a._)("td",null,(0,n.zw)(e.$filters.currency(e.tempOrder.total)),1)])])])]),(0,a._)("div",be,[fe,(0,a._)("table",ye,[we,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.tempOrder.products,(function(t){return(0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("th",null,(0,n.zw)(t.product.title),1),(0,a._)("td",null,(0,n.zw)(t.qty)+" / "+(0,n.zw)(t.product.unit),1),(0,a._)("td",ve,(0,n.zw)(e.$filters.currency(t.product.price)),1)])})),128))])])]),(0,a._)("div",ke,[(0,a._)("div",Oe,[(0,a._)("div",xe,[(0,a._)("div",De,[(0,a._)("div",ze,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",id:"enableSwitch".concat(e.tempOrder.id),"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.tempOrder.is_paid=t}),"true-value":!0,"false-value":!1},null,8,Ce),[[i.e8,e.tempOrder.is_paid]]),(0,a._)("label",{class:"form-check-label",for:"enableSwitch".concat(e.tempOrder.id,"}")},null,8,Me)])]),(0,a._)("div",$e,[e.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("span",je,"已付款")):((0,a.wg)(),(0,a.iD)("span",Re,"未付款"))])])])])])]),(0,a._)("div",Se,[Ee,(0,a._)("button",{type:"button",class:"btn btn-outline-primary",onClick:t[1]||(t[1]=function(t){return e.$emit("enable-status",e.tempOrder)})}," 修改付款狀態 ")])])])],512)}var Pe=l(1339);const Ze={props:["temp-order"],mixins:[Pe.Z]};var He=l(89);const Ue=(0,He.Z)(Ze,[["render",Le]]),Ye=Ue;var Ke=l(3167),Ve=l(5969),qe=l(6147);const We={data:function(){return{orders:[],tempOrder:{},pagination:{},isReady:!1,isLoading:"",OrderModal:""}},inject:["emitter"],components:{OrderModal:Ye,DelModal:Ke.Z,Pagination:Ve.Z,Loading:qe.Z},methods:{getOrders:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isReady=!1;var l="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("hyxfish27","/admin/orders?page=").concat(t);this.$http.get(l).then((function(t){e.orders=t.data.orders,e.pagination=t.data.pagination,e.isReady=!0}))["catch"]((function(t){e.emitter.emit("push-message",{style:"danger",title:t.response.data.message,emoji:"".concat("emoji-dizzy")})}))},removeOrder:function(e){var t=this;this.isReady=!1;var l="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("hyxfish27","/admin/order/").concat(e);this.$http["delete"](l).then((function(e){t.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:"".concat("emoji-laughing")}),t.getOrders(),t.isReady=!0}))["catch"]((function(e){t.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"".concat("emoji-dizzy")}),t.isReady=!0})),this.$refs.delModal.hideModal()},updateEnableStatus:function(e){var t=this;this.isReady=!1;var l="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("hyxfish27","/admin/order/").concat(e.id),a={is_paid:e.is_paid};this.$http.put(l,{data:a}).then((function(e){t.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:"".concat("emoji-laughing")}),t.getOrders(t.pagination.current_page),t.isReady=!0}))["catch"]((function(e){t.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"".concat("emoji-dizzy")}),t.isReady=!0})),this.$refs.adminOrder.hideModal()},openModal:function(e){this.tempOrder=(0,F.Z)({},e),this.$refs.adminOrder.openModal()},openDelModal:function(e){this.tempOrder=(0,F.Z)({},e),this.$refs.delModal.openModal()}},mounted:function(){this.getOrders()}},Fe=(0,He.Z)(We,[["render",W]]),Ge=Fe}}]);
//# sourceMappingURL=263.ff7cfeaa.js.map