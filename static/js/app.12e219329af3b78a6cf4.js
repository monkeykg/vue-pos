webpackJsonp([1],{"0ka3":function(t,o){},"7uH7":function(t,o){},NHnr:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var a=s("7+uW"),e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"left-nav"},[s("ul",[s("li",[s("i",{staticClass:"icon iconfont icon-home2"}),t._v(" "),s("div",[t._v("收银")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-home2"}),t._v(" "),s("div",[t._v("店铺")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-home2"}),t._v(" "),s("div",[t._v("商品")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-home2"}),t._v(" "),s("div",[t._v("会员")])]),t._v(" "),s("li",[s("i",{staticClass:"icon iconfont icon-home2"}),t._v(" "),s("div",[t._v("统计")])])])])}]};var n={name:"App",components:{leftNav:s("VU/8")({name:"leftNav"},e,!1,function(t){s("uLfD")},"data-v-3d2489ec",null).exports}},i={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"app"}},[o("leftNav"),this._v(" "),o("div",{staticClass:"main"},[o("router-view")],1)],1)},staticRenderFns:[]};var l=s("VU/8")(n,i,!1,function(t){s("q9ob")},null,null).exports,c=s("/ocq"),d=s("aozt"),r=s.n(d),u={name:"pos",created:function(){var t=this;r.a.get("http://jspang.com/DemoApi/oftenGoods.php").then(function(o){console.log(o),t.oftenGoods=o.data}).catch(function(t){console.log(t),alert("网络错误，无法访问")}),r.a.get("http://jspang.com/DemoApi/typeGoods.php").then(function(o){console.log(o),t.type0Goods=o.data[0],t.type1Goods=o.data[1],t.type2Goods=o.data[2],t.type3Goods=o.data[3]}).catch(function(t){console.log(t),alert("网络错误，无法访问")})},mounted:function(){var t=document.body.clientWidth;document.getElementById("order-list").style.height=t+"px"},data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalMoney:0,totalCount:0}},methods:{delSingleGoods:function(t){this.tableData=this.tableData.filter(function(o){return o.goodsId!=t.goodsId}),this.getAllMoney()},getAllMoney:function(){if(this.totalMoney=0,this.totalCount=0,this.tableData)for(var t=0;t<this.tableData.length;t++)this.totalCount+=this.tableData[t].count,this.totalMoney=this.totalMoney+this.tableData[t].count*this.tableData[t].price},addOrderList:function(t){this.totalMoney=0,this.totalCount=0;for(var o=!1,s=0;s<this.tableData.length;s++)this.tableData[s].goodsId==t.goodsId&&(o=!0);if(o){var a=this.tableData.filter(function(o){return o.goodsId==t.goodsId});console.log(a),a[0].count++}else{var e={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(e)}this.getAllMoney()}}},v={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"pos"},[s("el-row",[s("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"点餐"}},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[s("el-table-column",{attrs:{label:"商品名称",prop:"goodsName"}},[t._v("商品名称")]),t._v(" "),s("el-table-column",{attrs:{label:"数量",prop:"count",width:"50"}},[t._v("数量")]),t._v(" "),s("el-table-column",{attrs:{label:"金额",prop:"price",width:"70"}},[t._v("金额")]),t._v(" "),s("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(o){return[s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.delSingleGoods(o.row)}}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){t.addOrderList(o.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),s("div",[t._v("\n            数量："+t._s(t.totalCount)+"    总计金额："+t._s(t.totalMoney)+"\n          ")]),t._v(" "),s("div",{staticClass:"div-btn"},[s("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),s("el-button",{attrs:{type:"danger"}},[t._v("删除")]),t._v(" "),s("el-button",{attrs:{type:"success"}},[t._v("结账")])],1)],1),t._v(" "),s("el-tab-pane",{attrs:{label:"挂单"}},[t._v("挂单")]),t._v(" "),s("el-tab-pane",{attrs:{label:"外卖"}},[t._v("外卖")])],1)],1),t._v(" "),s("el-col",{attrs:{span:17}},[s("div",{staticClass:"often-goods"},[s("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),s("div",{staticClass:"often-goods-list"},[s("ul",t._l(t.oftenGoods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"o-price"},[t._v(t._s(o.price))])])}))])]),t._v(" "),s("div",{staticClass:"goods-type"},[s("el-tabs",[s("el-tab-pane",{attrs:{label:"汉堡"}},[s("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"小食"}},[s("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"饮料"}},[s("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))]),t._v(" "),s("el-tab-pane",{attrs:{label:"套餐"}},[s("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(o){return s("li",{on:{click:function(s){t.addOrderList(o)}}},[s("span",{staticClass:"foodImg"},[s("img",{attrs:{src:o.goodsImg,width:"100%"}})]),t._v(" "),s("span",{staticClass:"foodName"},[t._v(t._s(o.goodsName))]),t._v(" "),s("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(o.price)+"元")])])}))])],1)],1)])],1)],1)},staticRenderFns:[]};var p=s("VU/8")(u,v,!1,function(t){s("7uH7")},"data-v-5db1431b",null).exports;a.default.use(c.a);var _=new c.a({routes:[{path:"/",name:"pos",component:p}]}),f=s("dVeB"),h=s.n(f);s("0ka3");a.default.use(h.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:_,components:{App:l},template:"<App/>"})},q9ob:function(t,o){},uLfD:function(t,o){}},["NHnr"]);
//# sourceMappingURL=app.12e219329af3b78a6cf4.js.map