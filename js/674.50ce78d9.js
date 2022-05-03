"use strict";(self["webpackChunkgood_life"]=self["webpackChunkgood_life"]||[]).push([[674],{3451:(t,e,i)=>{i.d(e,{Z:()=>u});var s=i(3396),r=i(7139),a={class:"header text-white text-center d-flex justify-content-center align-items-center"},n={class:"h1 px-5 py-3 my-0 text-white border border-white border-3 bg-secondary bg-opacity-25"};function o(t,e,i,o,c,l){return(0,s.wg)(),(0,s.iD)("div",a,[(0,s._)("p",n,(0,r.zw)(i.title),1)])}const c={props:["title"]};var l=i(89);const d=(0,l.Z)(c,[["render",o]]),u=d},6147:(t,e,i)=>{i.d(e,{Z:()=>h});var s=i(3396);const r=i.p+"img/loader.bf1579b8.svg";var a={key:0,class:"loader",id:"loader"},n=(0,s._)("img",{src:r,alt:"loading..."},null,-1),o=[n];function c(t,e,i,r,n,c){return t.isReady?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("div",a,o))}const l={props:["is-ready"]};var d=i(89);const u=(0,d.Z)(l,[["render",c]]),h=u},1065:(t,e,i)=>{i.r(e),i.d(e,{default:()=>S});var s=i(3396),r=i(9242),a=i(7139),n={class:"container"},o={key:0,class:"table align-middle text-center border border-secondary border-5 mt-4"},c=(0,s._)("thead",{class:"bg-secondary text-dark"},[(0,s._)("tr",null,[(0,s._)("th"),(0,s._)("th",null,"圖片"),(0,s._)("th",null,"商品"),(0,s._)("th",null,"價格"),(0,s._)("th")])],-1),l=["onClick"],d=(0,s._)("i",{class:"bi bi-heart-fill h6 me-2"},null,-1),u=(0,s._)("span",{class:"h6"},"移除",-1),h=[d,u],p=["onClick"],g={key:0,class:"h5"},m={key:1},v={class:"h6"},y={class:"h5"},f={class:"btn-group btn-group-sm"},b=["onClick","disabled"],_=(0,s._)("i",{class:"bi bi-bag-fill h6 me-1 me-md-2"},null,-1),w=(0,s._)("span",{class:"h6"},"加入購物車",-1),k=[_,w],x={key:1,class:"row justify-content-center py-5 text-center"},j=(0,s._)("div",{class:"col-12"},[(0,s._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"150",height:"150",fill:"currentColor",class:"bi bi-search-heart text-secondary",viewBox:"0 0 16 16"},[(0,s._)("path",{d:"M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z"}),(0,s._)("path",{d:"M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"})])],-1),z={class:"col-12"},C=(0,s._)("h4",{class:"my-3 h4 text-dark"},"還沒有喜歡的商品嗎? 快來逛逛收藏",-1),L=(0,s._)("button",{type:"button",class:"btn btn-primary h4",style:{width:"9rem"}},[(0,s.Uk)(" 前往選購"),(0,s._)("i",{class:"bi bi-arrow-right-circle-fill ms-2 h4"})],-1);function R(t,e,i,d,u,_){var w=this,R=(0,s.up)("Loading"),Z=(0,s.up)("HeaderPic"),D=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(R,{"is-ready":u.isReady},null,8,["is-ready"]),(0,s.Wm)(Z,{title:u.title},null,8,["title"]),(0,s._)("div",n,[u.favorites.length>0?((0,s.wg)(),(0,s.iD)("table",o,[c,(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.likedProducts,(function(t){return(0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,[(0,s._)("button",{class:"btn btn-success text-center text-white text-nowrap",onClick:(0,r.iM)((function(e){return _.removeLiked(t.id)}),["stop"])},h,8,l)]),(0,s._)("td",{style:{width:"120px"},onClick:function(e){return w.$router.push("/product/".concat(t.id))}},[(0,s._)("div",{style:(0,a.j5)([{backgroundImage:"url(".concat(t.imageUrl,")")},{height:"100px","background-size":"cover","background-position":"center",cursor:"pointer"}])},null,4)],8,p),(0,s._)("td",null,(0,a.zw)(t.title),1),(0,s._)("td",null,[t.price===t.origin_price?((0,s.wg)(),(0,s.iD)("div",g,(0,a.zw)(t.price)+" 元 ",1)):((0,s.wg)(),(0,s.iD)("div",m,[(0,s._)("del",v,"原價 "+(0,a.zw)(t.origin_price)+" 元",1),(0,s._)("div",y,"特價 "+(0,a.zw)(t.price)+" 元",1)]))]),(0,s._)("td",null,[(0,s._)("div",f,[(0,s._)("button",{class:"btn btn-primary w-100 text-center text-white text-nowrap",onClick:(0,r.iM)((function(e){return _.addToCart(t.id)}),["stop"]),disabled:u.isLoading===t.id},k,8,b)])])])})),128))])])):((0,s.wg)(),(0,s.iD)("div",x,[j,(0,s._)("div",z,[C,(0,s.Wm)(D,{to:"/products"},{default:(0,s.w5)((function(){return[L]})),_:1})])]))])],64)}i(2222),i(7327),i(1539),i(6699),i(2023),i(2772),i(561),i(8862);var Z=i(3451),D=i(6147);const P={data:function(){return{title:"收藏清單",favorites:[],products:[],likedProducts:[],isReady:!0,isLoading:""}},components:{HeaderPic:Z.Z,Loading:D.Z},inject:["emitter"],methods:{getProducts:function(){var t=this;this.isReady=!1;var e="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("hyxfish27","/products/all");this.$http.get(e).then((function(e){t.products=e.data.products,t.getLiked(),t.isReady=!0}))["catch"]((function(e){t.emitter.emit("push-message",{style:"danger",title:e.response.data.message,emoji:"".concat("emoji-dizzy")})}))},getFavorites:function(){this.favorites=JSON.parse(localStorage.getItem("favorites"))},getLiked:function(){var t=this;this.likedProducts=this.products.filter((function(e){return t.favorites.includes(e.id)}))},removeLiked:function(t){this.isReady=!1;var e=this.favorites.indexOf(t);-1!==e&&this.favorites.splice(e,1),this.emitter.emit("push-message",{style:"dark",title:"移除收藏",emoji:"".concat("emoji-dizzy")}),this.isReady=!0,this.getLiked(),localStorage.setItem("favorites",JSON.stringify(this.favorites))},addToCart:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.isReady=!1;var s="".concat("https://vue3-course-api.hexschool.io/v2","/api/").concat("hyxfish27","/cart");this.isLoading=t;var r={product_id:t,qty:i};this.$http.post(s,{data:r}).then((function(t){e.emitter.emit("push-message",{style:"success",title:t.data.message,emoji:"".concat("emoji-heart-eyes")}),e.isLoading="",e.isReady=!0}))["catch"]((function(t){e.emitter.emit("push-message",{style:"danger",title:t.response.data.message,emoji:"".concat("emoji-dizzy")}),e.isReady=!0}))}},mounted:function(){this.getProducts(),this.getFavorites()}};var M=i(89);const H=(0,M.Z)(P,[["render",R]]),S=H}}]);
//# sourceMappingURL=674.50ce78d9.js.map