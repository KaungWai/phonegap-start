webpackJsonp([1],{FZnW:function(e,t){},JKFQ:function(e,t){},Ksfs:function(e,t){},Lb7s:function(e,t){},MBJZ:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a=n("/ocq"),o=n("mvHQ"),i=n.n(o),r=n("gRE1"),l=n.n(r),c=n("yviF");n("hZls");c.initializeApp({apiKey:"AIzaSyCc7Bq_nvsxFedV6RUod8DgeP9EKHblEdA",authDomain:"readynewsindonesia.firebaseapp.com",databaseURL:"https://readynewsindonesia.firebaseio.com",projectId:"readynewsindonesia",storageBucket:"readynewsindonesia.appspot.com",messagingSenderId:"893091182388",appId:"1:893091182388:web:eea28fd54679bbd8"});var u=c.database(),d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-ons-toolbar",[t("div",{staticClass:"left"},[t("v-ons-toolbar-button",{on:{click:this.action}},[t("v-ons-icon",{attrs:{icon:"ion-navicon, material:md-menu"}})],1)],1),this._v(" "),t("div",{staticClass:"center"},[this._v(this._s(this.title))])])},staticRenderFns:[]};var v=n("VU/8")({name:"Toolbar",components:{},props:["title","action"],data:function(){return{key:"value",openSide:!0}},computed:{},mounted:function(){}},d,!1,function(e){n("iDYC")},"data-v-aa2fd910",null).exports,p={name:"Business",components:{"custom-toolbar":v},props:["toggleMenu","articles_business","loading"],data:function(){return{}},computed:{},methods:{openNewsTab:function(e,t){sessionStorage.setItem("lastClickedNews",t),window.open(e,"_blank","location=no,hidden=yes,closebuttoncaption=Done,toolbar=no")}},mounted:function(){sessionStorage.setItem("lastViewdPage","Business")}},m={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("custom-toolbar",{attrs:{title:"Business",action:e.toggleMenu}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[n("ons-progress-bar",{attrs:{indeterminate:""}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},e._l(e.articles_business,function(t,s){return n("v-ons-card",{key:s,attrs:{id:s}},[n("ul",[n("li",{staticClass:"newsTitle"},[e._v(e._s(t.title))])]),e._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.urlToImage,expression:"article.urlToImage"}],staticStyle:{width:"100%"},attrs:{src:t.urlToImage,alt:"Onsen UI"}}),e._v(" "),n("div",{staticClass:"content"},[n("ul",[n("li",[n("span",{staticClass:"badge"},[e._v(e._s(t.publishedAt.split("T")[0]))])]),e._v(" "),n("li",[e._v(e._s(t.description))]),e._v(" "),n("li",[n("br"),n("ons-button",{attrs:{modifier:"default"},on:{click:function(n){return e.openNewsTab(t.url,s)}}},[e._v("READ MORE")])],1)])])])}),1)],1)},staticRenderFns:[]};var g={name:"Entertainment",components:{"custom-toolbar":v},props:["toggleMenu","articles_entertainment","loading"],data:function(){return{}},computed:{},methods:{openNewsTab:function(e,t){sessionStorage.setItem("lastClickedNews",t),window.open(e,"_blank","location=no,hidden=yes,closebuttoncaption=Done,toolbar=no")}},mounted:function(){sessionStorage.setItem("lastViewdPage","Entertainment")}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("custom-toolbar",{attrs:{title:"Entertainment",action:e.toggleMenu}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[n("ons-progress-bar",{attrs:{indeterminate:""}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},e._l(e.articles_entertainment,function(t,s){return n("v-ons-card",{key:s,attrs:{id:s}},[n("ul",[n("li",{staticClass:"newsTitle"},[e._v(e._s(t.title))])]),e._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.urlToImage,expression:"article.urlToImage"}],staticStyle:{width:"100%"},attrs:{src:t.urlToImage,alt:"Onsen UI"}}),e._v(" "),n("div",{staticClass:"content"},[n("ul",[n("li",[n("span",{staticClass:"badge"},[e._v(e._s(t.publishedAt.split("T")[0]))])]),e._v(" "),n("li",[e._v(e._s(t.description))]),e._v(" "),n("li",[n("br"),n("ons-button",{attrs:{modifier:"default"},on:{click:function(n){return e.openNewsTab(t.url,s)}}},[e._v("READ MORE")])],1)])])])}),1)],1)},staticRenderFns:[]};var _={name:"Health",components:{"custom-toolbar":v},props:["toggleMenu","articles_health","loading"],data:function(){return{}},computed:{},methods:{openNewsTab:function(e,t){sessionStorage.setItem("lastClickedNews",t),window.open(e,"_blank","location=no,hidden=yes,closebuttoncaption=Done,toolbar=no")}},mounted:function(){sessionStorage.setItem("lastViewdPage","Health")}},f={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("custom-toolbar",{attrs:{title:"Health",action:e.toggleMenu}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[n("ons-progress-bar",{attrs:{indeterminate:""}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},e._l(e.articles_health,function(t,s){return n("v-ons-card",{key:s,attrs:{id:s}},[n("ul",[n("li",{staticClass:"newsTitle"},[e._v(e._s(t.title))])]),e._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.urlToImage,expression:"article.urlToImage"}],staticStyle:{width:"100%"},attrs:{src:t.urlToImage,alt:"Onsen UI"}}),e._v(" "),n("div",{staticClass:"content"},[n("ul",[n("li",[n("span",{staticClass:"badge"},[e._v(e._s(t.publishedAt.split("T")[0]))])]),e._v(" "),n("li",[e._v(e._s(t.description))]),e._v(" "),n("li",[n("br"),n("ons-button",{attrs:{modifier:"default"},on:{click:function(n){return e.openNewsTab(t.url,s)}}},[e._v("READ MORE")])],1)])])])}),1)],1)},staticRenderFns:[]};var w={name:"Science",components:{"custom-toolbar":v},props:["toggleMenu","articles_science","loading"],data:function(){return{}},computed:{},methods:{openNewsTab:function(e,t){sessionStorage.setItem("lastClickedNews",t),window.open(e,"_blank","location=no,hidden=yes,closebuttoncaption=Done,toolbar=no")}},mounted:function(){sessionStorage.setItem("lastViewdPage","Science")}},b={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("custom-toolbar",{attrs:{title:"Science",action:e.toggleMenu}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[n("ons-progress-bar",{attrs:{indeterminate:""}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},e._l(e.articles_science,function(t,s){return n("v-ons-card",{key:s,attrs:{id:s}},[n("ul",[n("li",{staticClass:"newsTitle"},[e._v(e._s(t.title))])]),e._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.urlToImage,expression:"article.urlToImage"}],staticStyle:{width:"100%"},attrs:{src:t.urlToImage,alt:"Onsen UI"}}),e._v(" "),n("div",{staticClass:"content"},[n("ul",[n("li",[n("span",{staticClass:"badge"},[e._v(e._s(t.publishedAt.split("T")[0]))])]),e._v(" "),n("li",[e._v(e._s(t.description))]),e._v(" "),n("li",[n("br"),n("ons-button",{attrs:{modifier:"default"},on:{click:function(n){return e.openNewsTab(t.url,s)}}},[e._v("READ MORE")])],1)])])])}),1)],1)},staticRenderFns:[]};var y={name:"Sports",components:{"custom-toolbar":v},props:["toggleMenu","articles_sports","loading"],data:function(){return{}},computed:{},methods:{openNewsTab:function(e,t){sessionStorage.setItem("lastClickedNews",t),window.open(e,"_blank","location=no,hidden=yes,closebuttoncaption=Done,toolbar=no")}},mounted:function(){sessionStorage.setItem("lastViewdPage","Sports")}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("custom-toolbar",{attrs:{title:"Sports",action:e.toggleMenu}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[n("ons-progress-bar",{attrs:{indeterminate:""}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},e._l(e.articles_sports,function(t,s){return n("v-ons-card",{key:s,attrs:{id:s}},[n("ul",[n("li",{staticClass:"newsTitle"},[e._v(e._s(t.title))])]),e._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.urlToImage,expression:"article.urlToImage"}],staticStyle:{width:"100%"},attrs:{src:t.urlToImage,alt:"Onsen UI"}}),e._v(" "),n("div",{staticClass:"content"},[n("ul",[n("li",[n("span",{staticClass:"badge"},[e._v(e._s(t.publishedAt.split("T")[0]))])]),e._v(" "),n("li",[e._v(e._s(t.description))]),e._v(" "),n("li",[n("br"),n("ons-button",{attrs:{modifier:"default"},on:{click:function(n){return e.openNewsTab(t.url,s)}}},[e._v("READ MORE")])],1)])])])}),1)],1)},staticRenderFns:[]};var T={name:"Technology",components:{"custom-toolbar":v},props:["toggleMenu","articles_technology","loading"],data:function(){return{}},computed:{},methods:{openNewsTab:function(e,t){sessionStorage.setItem("lastClickedNews",t),window.open(e,"_blank","location=no,hidden=yes,closebuttoncaption=Done,toolbar=no")}},mounted:function(){sessionStorage.setItem("lastViewdPage","Technology")}},I={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("custom-toolbar",{attrs:{title:"Technology",action:e.toggleMenu}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}]},[n("ons-progress-bar",{attrs:{indeterminate:""}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}]},e._l(e.articles_technology,function(t,s){return n("v-ons-card",{key:s,attrs:{id:s}},[n("ul",[n("li",{staticClass:"newsTitle"},[e._v(e._s(t.title))])]),e._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:t.urlToImage,expression:"article.urlToImage"}],staticStyle:{width:"100%"},attrs:{src:t.urlToImage,alt:"Photo not available"}}),e._v(" "),n("div",{staticClass:"content"},[n("ul",[n("li",[n("span",{staticClass:"badge"},[e._v(e._s(t.publishedAt.split("T")[0]))])]),e._v(" "),n("li",[e._v(e._s(t.description))]),e._v(" "),n("li",[n("br"),n("ons-button",{attrs:{modifier:"default"},on:{click:function(n){return e.openNewsTab(t.url,s)}}},[e._v("READ MORE")])],1)])])])}),1)],1)},staticRenderFns:[]};var N={name:"About",components:{"custom-toolbar":v},props:["toggleMenu"],data:function(){return{}},computed:{},mounted:function(){sessionStorage.setItem("lastViewdPage","About")}},x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-page",[n("custom-toolbar",{attrs:{title:"About",action:e.toggleMenu}}),e._v(" "),n("p",{staticStyle:{"text-align":"center"}},[n("br"),e._v(" "),n("br"),e._v(" "),n("span",{staticStyle:{"font-size":"1.3em","font-weight":"bold"}},[e._v("Ready News Indonesia")]),e._v(" "),n("br"),e._v(" "),n("br"),e._v("\n    Version : 1.0\n    "),n("br"),n("br"),e._v("\n    Developed by Idiots Studio\n    "),n("br"),n("br"),e._v("\n    Powered by "),n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"https://newsapi.org"}},[e._v("newsapi.org")])])],1)},staticRenderFns:[]};var k={name:"Main",components:{Business:n("VU/8")(p,m,!1,function(e){n("Lb7s")},"data-v-07ce3934",null).exports,Entertainment:n("VU/8")(g,h,!1,function(e){n("xkaA")},"data-v-cc1db9e8",null).exports,Health:n("VU/8")(_,f,!1,function(e){n("MBJZ")},"data-v-33ea5bc4",null).exports,Science:n("VU/8")(w,b,!1,function(e){n("RhV8")},"data-v-89ad8e58",null).exports,Sports:n("VU/8")(y,S,!1,function(e){n("FZnW")},"data-v-275378d0",null).exports,Technology:n("VU/8")(T,I,!1,function(e){n("Yhsi")},"data-v-5307ea1e",null).exports,About:n("VU/8")(N,x,!1,function(e){n("JKFQ")},"data-v-dfdf862c",null).exports},data:function(){return{currentPage:"",pages:["Business","Entertainment","Health","Science","Sports","Technology","About"],openSide:!1,articles:[],loading:!0}},methods:{todayIs:function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0");return e=e.getFullYear()+"-"+n+"-"+t},fetchData:function(){var e=u.ref("news/"+this.todayIs());if(sessionStorage.getItem("snapshotVal")){this.articles=l()(JSON.parse(sessionStorage.snapshotVal)),this.loading=!1;var t=sessionStorage.lastClickedNews;setTimeout(function(){location.href="#"+t},1500)}else e.once("value",function(e){sessionStorage.setItem("snapshotVal",i()(e.val())),this.articles=l()(e.val()),this.loading=!1}.bind(this))},showPage:function(){var e=sessionStorage.getItem("lastViewdPage");e||(e="Business"),this.currentPage=e}},computed:{articles_business:function(){for(var e=[],t=0;t<this.articles.length;t++)"business"==this.articles[t].category&&e.push(this.articles[t]);return e},articles_entertainment:function(){for(var e=[],t=0;t<this.articles.length;t++)"entertainment"==this.articles[t].category&&e.push(this.articles[t]);return e},articles_health:function(){for(var e=[],t=0;t<this.articles.length;t++)"health"==this.articles[t].category&&e.push(this.articles[t]);return e},articles_science:function(){for(var e=[],t=0;t<this.articles.length;t++)"science"==this.articles[t].category&&e.push(this.articles[t]);return e},articles_sports:function(){for(var e=[],t=0;t<this.articles.length;t++)"sports"==this.articles[t].category&&e.push(this.articles[t]);return e},articles_technology:function(){for(var e=[],t=0;t<this.articles.length;t++)"technology"==this.articles[t].category&&e.push(this.articles[t]);return e}},created:function(){this.showPage(),this.fetchData()}},E={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-ons-splitter",[n("v-ons-splitter-side",{attrs:{swipeable:"",width:"150px",collapse:"",side:"left",open:e.openSide},on:{"update:open":function(t){e.openSide=t}}},[n("v-ons-page",[n("v-ons-list",e._l(e.pages,function(t,s){return n("v-ons-list-item",{key:s,attrs:{tappable:"",modifier:"chevron"},on:{click:function(n){e.currentPage=t,e.openSide=!1}}},[n("div",{staticClass:"center"},[e._v(e._s(t))])])}),1)],1)],1),e._v(" "),n("v-ons-splitter-content",[n(e.currentPage,{tag:"component",attrs:{"toggle-menu":function(){return e.openSide=!e.openSide},articles_business:e.articles_business,articles_entertainment:e.articles_entertainment,articles_health:e.articles_health,articles_science:e.articles_science,articles_sports:e.articles_sports,articles_technology:e.articles_technology,loading:e.loading}})],1)],1)},staticRenderFns:[]};var C=n("VU/8")(k,E,!1,function(e){n("reWe")},null,null).exports;s.a.use(a.a);var M=new a.a({routes:[{path:"/",name:"Main",component:C}]}),R={name:"App",components:{Main:C}},A={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Main")],1)},staticRenderFns:[]};var V=n("VU/8")(R,A,!1,function(e){n("Ksfs")},null,null).exports,D=n("EOUi"),P=n.n(D);n("Xrl+"),n("fLmE");s.a.use(P.a),s.a.config.productionTip=!0,new s.a({el:"#app",router:M,components:{App:V},template:"<App/>"})},RhV8:function(e,t){},"Xrl+":function(e,t){},Yhsi:function(e,t){},fLmE:function(e,t){},iDYC:function(e,t){},reWe:function(e,t){},xkaA:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b6b9e0ce0bdb921f7906.js.map