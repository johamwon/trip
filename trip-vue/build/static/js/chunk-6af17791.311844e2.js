(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6af17791","chunk-683399a1"],{"012c":function(t,i,e){"use strict";e("66a3")},"1c62":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"Home"}},[e("div",{attrs:{id:"search"}},[e("inputbox",{attrs:{input_text:"搜目的地/攻略/游记"}})],1),e("div",{attrs:{id:"Home_content_bg"}},[e("div",{attrs:{id:"Home_content"}},[e("FiltrateVlog",{ref:"vlog"}),e("FiltrateArticle",{ref:"article"})],1)]),e("footerpage")],1)},a=[],n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"filtrateVlog"}},[s("div",{attrs:{id:"filtrateVlog_title"}},[s("div",[t._v("热门景点")]),t._m(0),s("div",{attrs:{id:"create_vlog"},on:{click:t.req}},[s("img",{attrs:{src:e("21b5"),alt:"",srcset:""}}),s("span",[t._v("创作vlog")])])]),s("div",{attrs:{id:"filtrateVlog_img"}},[s("el-carousel",{attrs:{interval:4e3,type:"card",height:"300px"}},t._l(t.imgdata,(function(i,e){return s("el-carousel-item",{key:e},[s("img",{attrs:{src:i.url,alt:""},on:{click:function(i){return t.linkto()}}})])})),1)],1),t._m(1)])},c=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("i",{staticClass:"el-icon-menu"}),e("span",[t._v("筛选")])])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"filtrateVlog_change"}},[s("img",{attrs:{src:e("5d6e"),alt:""}}),s("span",[t._v("换一换")])])}],l={data:function(){return{imgdata:[{url:e("d053")},{url:e("d574")},{url:e("6325")}],message:"你好"}},methods:{linkto:function(){this.$router.push("/vip")},req:function(){this.axios.get("http://47.103.198.84:5000/login").then((function(t){console.log(t)}))},change:function(t){this.imgdata=[],this.imgdata=t,this.message=t},vlog:function(t){this.imgdata=[],this.imgdata=t}},mounted:function(){this.$bus.$on("updateVlog",(function(t,i){console.log("vlog",t,i),change(t)}))},watch:{}},r=l,o=(e("ae96"),e("2877")),u=Object(o["a"])(r,n,c,!1,null,null,null),d=u.exports,v=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"filtrateArticle"}},[t._m(0),s("div",{attrs:{id:"hotArticles"}},t._l(t.Articles,(function(i,a){return s("div",{key:i.url,staticClass:"Article_item"},[s("div",{staticClass:"Article_item_img"},[s("img",{attrs:{src:i.url,alt:""}})]),s("div",{staticClass:"Article_item_content"},[s("div",{staticClass:"Article_item_title",on:{click:function(i){return t.tolink()}}},[t._v(t._s(i.title))]),s("div",{staticClass:"Article_item_details"},[t._v(t._s(i.details))]),s("div",{staticClass:"Article_item_bottom"},[s("span",{staticClass:"Article_item_local"},[t._v(t._s(i.local)+" /")]),s("span",{staticClass:"Article_item_time"},[t._v(t._s(i.time))]),s("span",{staticClass:"Article_item_viewNumber"},[t._v(" 浏览·"+t._s(i.viewsNumber))]),s("div",{staticClass:"Article_item_islike",on:{click:function(i){return t.changeLike(a)}}},[i.islike?s("img",{attrs:{src:e("4598"),alt:""}}):s("img",{attrs:{src:e("d990"),alt:""}})])])])])})),0),s("div",{attrs:{id:"filtrateArticle_more"}},[t._v(" 更多 >> ")])])},_=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"filtrateArticle_title"}},[s("div",[t._v("热门游记")]),s("div",[s("i",{staticClass:"el-icon-menu"}),s("span",[t._v("筛选")])]),s("div",[t._v("最新发表")]),s("div",{attrs:{id:"create_vlog"}},[s("img",{attrs:{src:e("21b5"),alt:"",srcset:""}}),s("span",[t._v("写游记")])])])}],f={data:function(){return{Articles:[{url:e("5813"),title:"新疆 | 7月南疆人文自驾环线攻略中...走遍中国还差一个你",details:"新疆，一块国内游最难啃的地方，远，太远了，懒惰的我一直都未将新疆纳入计划，总找接口...",local:"新疆",time:"2021-4-9",viewsNumber:"18689",islike:!1},{url:e("d574"),title:"武汉赏樱 | 十日樱花作意开，绕花岂惜日千回？",details:"行程第一天，初见武汉9点半的飞剑，免不了在机场拍拍拍。12:05我们准时到武汉...",local:"武汉",time:"2021-3-2",viewsNumber:"2429",islike:!1},{url:e("6325"),title:"稻城亚丁 | 天谴神功，底蕴香醇，惊世园田。网神山三枯，观音祥善，金刚威猛，师利超然。",details:"本人学生党，没事喜欢到处走走，瞅准了清明假期跟同学商量了一下...",local:"稻城",time:"2020-5-24",viewsNumber:"5876",islike:!1}]}},methods:{changeLike:function(t){this.Articles[t].islike=!this.Articles[t].islike},article:function(t){this.Articles=[],this.Articles=t,console.log(this.Articles)},tolink:function(){this.$router.push("/detail/nanjiang")}},mounted:function(){this.$bus.$on("updatearticle",(function(t){this.Articles=t,console.log("article",t)}))}},m=f,g=(e("012c"),Object(o["a"])(m,v,_,!1,null,null,null)),p=g.exports,h=e("6b17"),b=e("9160"),x={data:function(){return{homedata:{}}},components:{FiltrateVlog:d,FiltrateArticle:p,footerpage:h["default"],inputbox:b["a"]},created:function(){var t=this;console.log(this.$store.state.username),this.axios.get("http://47.103.198.84:5000/recommend",{params:{uid:this.$store.state.username}}).then((function(i){console.log(i.data),t.homedata=i.data,t.$refs.vlog.vlog(i.data.scenery),t.$refs.article.article(i.data.artical)})).catch((function(t){console.log(t)}))}},k=x,A=(e("b76c"),Object(o["a"])(k,s,a,!1,null,null,null));i["default"]=A.exports},"21b5":function(t,i,e){t.exports=e.p+"static/img/vlog.6077c4bd.png"},2618:function(t,i,e){},"36cd":function(t,i,e){},4452:function(t,i,e){t.exports=e.p+"static/img/wx1.98f729ba.jpg"},4598:function(t,i,e){t.exports=e.p+"static/img/like.06ebee36.png"},5120:function(t,i,e){},5813:function(t,i,e){t.exports=e.p+"static/img/南疆1.c9575388.png"},"5d6e":function(t,i,e){t.exports=e.p+"static/img/change.bc5ce522.png"},6325:function(t,i,e){t.exports=e.p+"static/img/test3.81d9c0cb.png"},"66a3":function(t,i,e){},"6b17":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"footer_page"}},[s("div",{staticClass:"links"},[s("div",{staticClass:"abouts"},[s("div",[s("a",[t._v("关于我们")])]),s("div",[s("a",[t._v("联系我们")])]),s("div",[s("a",[t._v("隐私政策商标声明")])]),s("div",[s("a",[t._v("服务协议")])]),s("div",[s("a",[t._v("商城平台服务协议")])]),s("div",[s("a",[t._v("网络信息侵权通知指引")])]),s("div",[s("a",[t._v("5u旅游网服务监督员")])]),s("div",[s("a",[t._v("网站地图加入5u")])])]),s("div",{staticClass:"server"},[s("div",[s("a",[t._v("旅行服务")])]),s("div",[s("a",[t._v("旅游攻略")]),s("a",[t._v("酒店预订")])]),s("div",[s("a",[t._v("旅游特价")]),s("a",[t._v("国际租车")])]),s("div",[s("a",[t._v("旅游问答")]),s("a",[t._v("旅游保险")])]),s("div",[s("a",[t._v("旅游指南")]),s("a",[t._v("订火车票")])]),s("div",[s("a",[t._v("旅游咨询")]),s("a",[t._v("APP下载")])])])]),s("div",{staticClass:"wx"},[s("img",{attrs:{src:e("4452"),alt:""}})]),s("div",{staticClass:"copyright"},[t._v(" Copyright © 2021by52feidianStudio All rights reserved. ")])])}],n={},c=n,l=(e("c237"),e("2877")),r=Object(l["a"])(c,s,a,!1,null,null,null);i["default"]=r.exports},"7b51":function(t,i,e){"use strict";e("2618")},9160:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"input_box"},[e("div",{staticClass:"input_text"},[t._t("default")],2),e("input",{staticClass:"input_search",attrs:{type:"text",placeholder:t.input_text}}),t._m(0)])},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("button",{staticClass:"submit_search"},[s("img",{attrs:{src:e("cab5"),alt:""}})])}],n={props:["input_text"]},c=n,l=(e("7b51"),e("2877")),r=Object(l["a"])(c,s,a,!1,null,null,null);i["a"]=r.exports},ae96:function(t,i,e){"use strict";e("5120")},b76c:function(t,i,e){"use strict";e("36cd")},c202:function(t,i,e){},c237:function(t,i,e){"use strict";e("c202")},d053:function(t,i,e){t.exports=e.p+"static/img/黄鹤楼3.f2cd81a9.jpeg"},d574:function(t,i,e){t.exports=e.p+"static/img/test2.76abca53.png"},d990:function(t,i,e){t.exports=e.p+"static/img/unlike.0791543f.png"}}]);
//# sourceMappingURL=chunk-6af17791.311844e2.js.map