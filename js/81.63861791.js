"use strict";(self["webpackChunkgood_life"]=self["webpackChunkgood_life"]||[]).push([[81],{684:(e,t,o)=>{o.r(t),o.d(t,{default:()=>we});var n=o(3396),a=o(7139),l=o(9242),s={class:"container"},i=(0,n._)("p",{class:"h2 text-center my-4"},[(0,n._)("span",{class:"text-dark bg-secondary"},"優惠活動")],-1),u={class:"row justify-content-center"},c={class:"col-10"},d={class:"text-end mt-4"},p={class:"table mt-4 d-none d-md-table"},r=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"折扣百分比"),(0,n._)("th",null,"到期日"),(0,n._)("th",null,"是否啟用"),(0,n._)("th",null,"編輯")])],-1),m={class:"row"},h={class:"col-12 col-md-6"},_={class:"form-check form-switch"},b=["id","onUpdate:modelValue","onChange"],f=["for"],y={class:"col-12 col-md-6"},C={key:0,class:"text-primary"},g={key:1,class:"text-muted"},v={class:"btn-group"},w=["onClick"],k=["onClick"],x={class:"table mt-4 align-middle d-table d-md-none"},M=(0,n._)("th",null,"名稱",-1),D=(0,n._)("th",null,"折扣百分比",-1),j=(0,n._)("th",null,"到期日",-1),z=(0,n._)("th",null,"是否啟用",-1),R={class:"form-check form-switch"},$=["id","onUpdate:modelValue","onChange"],S=["for"],U={key:0,class:"text-primary"},V={key:1,class:"text-muted"},N=(0,n._)("th",null,"操作",-1),Z={class:"btn-group"},L=["onClick"],E=["onClick"];function H(e,t,o,H,I,O){var W=(0,n.up)("Loading"),Y=(0,n.up)("CouponModal"),K=(0,n.up)("DelModal");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(W,{"is-ready":I.isReady},null,8,["is-ready"]),(0,n._)("div",s,[i,(0,n._)("div",u,[(0,n._)("div",c,[(0,n._)("div",d,[(0,n._)("button",{class:"btn btn-success",type:"button",onClick:t[0]||(t[0]=function(e){return O.openCouponModal(!0)})}," 建立新的優惠券 ")]),(0,n._)("table",p,[r,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(I.coupons,(function(t,o){return(0,n.wg)(),(0,n.iD)("tr",{key:o},[(0,n._)("td",null,(0,a.zw)(t.title),1),(0,n._)("td",null,(0,a.zw)(t.percent)+"%",1),(0,n._)("td",null,(0,a.zw)(e.$filters.timeConvert(t.due_date)),1),(0,n._)("td",null,[(0,n._)("div",m,[(0,n._)("div",h,[(0,n._)("div",_,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox",id:"enableSwitch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_enabled=e},"true-value":1,"false-value":0,onChange:function(e){return O.updateEnableStatus(t)}},null,40,b),[[l.e8,t.is_enabled]]),(0,n._)("label",{class:"form-check-label",for:"enableSwitch".concat(t.id,"}")},null,8,f)])]),(0,n._)("div",y,[t.is_enabled?((0,n.wg)(),(0,n.iD)("span",C,"啟用中")):((0,n.wg)(),(0,n.iD)("span",g,"未啟用"))])])]),(0,n._)("td",null,[(0,n._)("div",v,[(0,n._)("button",{class:"btn btn-outline-success btn-sm",onClick:function(e){return O.openCouponModal(!1,t)}}," 編輯 ",8,w),(0,n._)("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return O.openDelCouponModal(t)}}," 刪除 ",8,k)])])])})),128))])]),(0,n._)("table",x,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(I.coupons,(function(t,o){return(0,n.wg)(),(0,n.iD)("tbody",{key:o},[(0,n._)("tr",null,[M,(0,n._)("td",null,(0,a.zw)(t.title),1)]),(0,n._)("tr",null,[D,(0,n._)("td",null,(0,a.zw)(t.percent)+"%",1)]),(0,n._)("tr",null,[j,(0,n._)("td",null,(0,a.zw)(e.$filters.timeConvert(t.due_date)),1)]),(0,n._)("tr",null,[z,(0,n._)("td",null,[(0,n._)("div",R,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox",id:"enableSwitch".concat(t.id),"onUpdate:modelValue":function(e){return t.is_enabled=e},"true-value":1,"false-value":0,onChange:function(e){return O.updateEnableStatus(t)}},null,40,$),[[l.e8,t.is_enabled]]),(0,n._)("label",{class:"form-check-label",for:"enableSwitch".concat(t.id,"}")},null,8,S),t.is_enabled?((0,n.wg)(),(0,n.iD)("span",U,"啟用中")):((0,n.wg)(),(0,n.iD)("span",V,"未啟用"))])])]),(0,n._)("tr",null,[N,(0,n._)("td",null,[(0,n._)("div",Z,[(0,n._)("button",{class:"btn btn-outline-success btn-sm",onClick:function(e){return O.openCouponModal(!1,t)}}," 編輯 ",8,L),(0,n._)("button",{class:"btn btn-outline-primary btn-sm",onClick:function(e){return O.openDelCouponModal(t)}}," 刪除 ",8,E)])])])])})),128))])])])]),(0,n.Wm)(Y,{coupon:I.tempCoupon,"is-new":I.isNew,ref:"couponModal",onUpdateCoupon:O.updateCoupon},null,8,["coupon","is-new","onUpdateCoupon"]),(0,n.Wm)(K,{item:I.tempCoupon,ref:"delModal",onDelItem:O.delCoupon},null,8,["item","onDelItem"])],64)}var I=o(5082),O=(o(2222),o(3710),{class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"}),W={class:"modal-dialog",role:"document"},Y={class:"modal-content"},K={class:"modal-header bg-success text-white"},T={class:"modal-title",id:"exampleModalLabel"},B={key:0},P={key:1},q=(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),A={class:"modal-body"},F={class:"mb-3"},G=(0,n._)("label",{for:"title"},"標題",-1),J={class:"mb-3"},Q=(0,n._)("label",{for:"coupon_code"},"優惠碼",-1),X={class:"mb-3"},ee=(0,n._)("label",{for:"due_date"},"到期日",-1),te={class:"mb-3"},oe=(0,n._)("label",{for:"price"},"折扣百分比",-1),ne={class:"mb-3"},ae={class:"form-check form-switch"},le=["id"],se=["for"],ie={key:0,class:"text-primary"},ue={key:1,class:"text-muted"},ce={class:"modal-footer"},de=(0,n._)("button",{type:"button",class:"btn btn-outline-dark","data-bs-dismiss":"modal"}," 取消 ",-1);function pe(e,t,o,s,i,u){return(0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",W,[(0,n._)("div",Y,[(0,n._)("div",K,[(0,n._)("h5",T,[o.isNew?((0,n.wg)(),(0,n.iD)("span",B,"新增優惠卷")):((0,n.wg)(),(0,n.iD)("span",P,"編輯優惠卷"))]),q]),(0,n._)("div",A,[(0,n._)("div",F,[G,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=function(e){return i.tempCoupon.title=e}),placeholder:"請輸入標題"},null,512),[[l.nr,i.tempCoupon.title]])]),(0,n._)("div",J,[Q,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.tempCoupon.code=e}),placeholder:"請輸入優惠碼"},null,512),[[l.nr,i.tempCoupon.code]])]),(0,n._)("div",X,[ee,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.due_date=e})},null,512),[[l.nr,i.due_date]])]),(0,n._)("div",te,[oe,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.tempCoupon.percent=e}),placeholder:"請輸入折扣百分比"},null,512),[[l.nr,i.tempCoupon.percent,void 0,{number:!0}]])]),(0,n._)("div",ne,[(0,n._)("div",ae,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox",id:"enableSwitch".concat(i.tempCoupon.id),"onUpdate:modelValue":t[4]||(t[4]=function(e){return i.tempCoupon.is_enabled=e}),"true-value":1,"false-value":0},null,8,le),[[l.e8,i.tempCoupon.is_enabled]]),(0,n._)("label",{class:"form-check-label",for:"enableSwitch".concat(i.tempCoupon.id,"}")},null,8,se),i.tempCoupon.is_enabled?((0,n.wg)(),(0,n.iD)("span",ie," 啟用中 ")):((0,n.wg)(),(0,n.iD)("span",ue,"未啟用"))])])]),(0,n._)("div",ce,[de,(0,n._)("button",{type:"button",class:"btn btn-outline-primary",onClick:t[5]||(t[5]=function(t){return e.$emit("update-coupon",i.tempCoupon)})},(0,a.zw)(o.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512)}var re=o(6084),me=(o(4916),o(3123),o(8733),o(1339));const he={props:{coupon:{type:Object,default:function(){return{}}},isNew:{type:Boolean,default:!1}},data:function(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon:function(){this.tempCoupon=this.coupon;var e=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T"),t=(0,re.Z)(e,1);this.due_date=t[0]},due_date:function(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[me.Z]};var _e=o(89);const be=(0,_e.Z)(he,[["render",pe]]),fe=be;var ye=o(3167),Ce=o(6147);const ge={props:{config:Object},data:function(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isReady:!0,isNew:!1}},components:{CouponModal:fe,DelModal:ye.Z,Loading:Ce.Z},inject:["emitter"],methods:{getCoupons:function(){var e=this;this.isReady=!1;var t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("hyxfish27","/admin/coupons");this.$http.get(t,this.tempProduct).then((function(t){e.coupons=t.data.coupons,e.isReady=!0}))["catch"]((function(t){e.isReady=!0,e.emitter.emit("push-message",{style:"danger",title:t.response.data.message,emoji:"".concat("emoji-dizzy")})}))},updateCoupon:function(e){var t=this;this.isReady=!1;var o="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("hyxfish27","/admin/coupon"),n="post",a=e;this.isNew||(o="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("hyxfish27","/admin/coupon/").concat(this.tempCoupon.id),n="put",a=this.tempCoupon),this.$http[n](o,{data:a}).then((function(e){t.isReady=!0,t.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:"".concat("emoji-laughing")}),t.getCoupons(),t.$refs.couponModal.hideModal()}))["catch"]((function(e){t.isReady=!0,t.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"".concat("emoji-dizzy")})}))},delCoupon:function(){var e=this,t="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("hyxfish27","/admin/coupon/").concat(this.tempCoupon.id);this.isReady=!1,this.$http["delete"](t).then((function(t){e.isReady=!0,e.emitter.emit("push-message",{style:"success",title:t.data.message,emoji:"".concat("emoji-laughing")}),e.$refs.delModal.hideModal(),e.getCoupons()}))["catch"]((function(t){e.isReady=!0,e.emitter.emit("push-message",{style:"danger",title:t.response.data.message,emoji:"".concat("emoji-dizzy")})}))},updateEnableStatus:function(e){var t=this;this.isReady=!1;var o="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("hyxfish27","/admin/coupon/").concat(e.id);this.$http.put(o,{data:e}).then((function(e){t.emitter.emit("push-message",{style:"success",title:e.data.message,emoji:"".concat("emoji-laughing")}),t.getCoupons(),t.isReady=!0}))["catch"]((function(e){t.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"".concat("emoji-dizzy")}),t.isReady=!0})),this.$refs.couponModal.hideModal()},openCouponModal:function(e,t){this.isNew=e,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon=(0,I.Z)({},t),this.$refs.couponModal.openModal()},openDelCouponModal:function(e){this.tempCoupon=(0,I.Z)({},e),this.$refs.delModal.openModal()}},created:function(){this.getCoupons()}},ve=(0,_e.Z)(ge,[["render",H]]),we=ve}}]);
//# sourceMappingURL=81.63861791.js.map