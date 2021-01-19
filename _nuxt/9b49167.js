(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{355:function(t,e,n){},361:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"CvSkillsAndTechDisplay",props:{skills:{type:Array,default:void 0},tech:{type:Array,default:void 0}}}),o=n(27),l=n(26),c=n.n(l),d=n(328),m=n(329),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[t.skills?n("v-col",{attrs:{cols:"12",xs:"12",sm:"6"}},[n("p",{staticClass:"font-weight-medium mb-1 primary--text"},[t._v("\n      "+t._s(t.$t("page.cv.skillsTitle"))+"\n    ")]),t._v(" "),n("ul",t._l(t.skills,(function(e){return n("li",{key:e},[t._v("\n        "+t._s(t.$t("page.cv.skills."+e))+"\n      ")])})),0)]):t._e(),t._v(" "),t.tech?n("v-col",{attrs:{cols:"12",xs:"12",sm:"6"}},[n("p",{staticClass:"font-weight-medium mb-1 primary--text"},[t._v("\n      "+t._s(t.$t("page.cv.techTitle"))+"\n    ")]),t._v(" "),n("ul",t._l(t.tech,(function(e){return n("li",{key:e},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:d.a,VRow:m.a})},370:function(t,e,n){var map={"./citius.png":371,"./epfl.png":372,"./everis.png":373,"./imagames.png":374,"./stanford.png":375,"./uimp.png":376,"./usc.png":377};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=370},371:function(t,e,n){t.exports=n.p+"img/citius.9026b94.png"},372:function(t,e,n){t.exports=n.p+"img/epfl.9924e27.png"},373:function(t,e,n){t.exports=n.p+"img/everis.e74f351.png"},374:function(t,e,n){t.exports=n.p+"img/imagames.9f6eeb1.png"},375:function(t,e,n){t.exports=n.p+"img/stanford.1471121.png"},376:function(t,e,n){t.exports=n.p+"img/uimp.bb360e0.png"},377:function(t,e,n){t.exports=n.p+"img/usc.5ed254e.png"},378:function(t,e,n){"use strict";n(355)},399:function(t,e,n){"use strict";n.r(e);n(48);var r,o,l=n(0),c=n(397),d=(n(15),n(38),n(94)),m=n(400);!function(t){t.COURSE="course",t.EDUCATION="education",t.WORK="work",t.HOBBY="hobby"}(r||(r={})),function(t){t.CITIUS="citius",t.EPFL="epfl",t.EVERIS="everis",t.IMAGAMES="imagames",t.STANFORD="stanford",t.UIMP="uimp",t.USC="usc"}(o||(o={}));var v,f=n(2),h=(v={},Object(f.a)(v,r.COURSE,"green lighten-1"),Object(f.a)(v,r.EDUCATION,"purple lighten-1"),Object(f.a)(v,r.WORK,"red lighten-2"),Object(f.a)(v,r.HOBBY,"blue lighten-2"),v);function y(t){return Object(m.a)(t,"yyyy/MM",new Date)}var _=[{key:"ITDegree",org:o.USC,startDate:y("2012/09"),endDate:y("2016/09")},{key:"AIMasters",org:o.UIMP,startDate:y("2017/09"),endDate:y("2019/07")}].map((function(t){return Object.assign(t,{type:r.EDUCATION})})),C=[{key:"everis",org:o.EVERIS,startDate:y("2015/06"),endDate:y("2015/09")},{key:"citius",org:o.CITIUS,startDate:y("2016/10"),endDate:y("2018/04"),skills:["mobile","scripting","research","openSource"],tech:["Android + Kotlin","Python, NodeJS"]},{key:"imagames",org:o.IMAGAMES,startDate:y("2018/12"),endDate:void 0,skills:["infrastructure","frontend","scripting"],tech:["Docker + Compose + Kubernetes","VueJs + Typescript","Ansible + Python"]}].map((function(t){return Object.assign(t,{type:r.WORK})})),D=[{key:"machineLearning",org:o.STANFORD,startDate:void 0,endDate:y("2017/04")},{key:"scalaFP",org:o.EPFL,startDate:void 0,endDate:y("2019/06")}].map((function(t){return Object.assign(t,{type:r.COURSE})})),x=[{key:"androidRoms",org:void 0,startDate:y("2015/06"),endDate:y("2017/08"),type:r.HOBBY,skills:["openSource","mobile","scripting"],tech:["Android","Java, C","Bash, Python"]}],O=[].concat(Object(d.a)(_),Object(d.a)(C),Object(d.a)(D),x),k=n(401),S=n(361),T=l.a.extend({name:"CVTimelineItem",components:{CvSkillsAndTechDisplay:S.default},props:{item:{required:!0,type:Object},isLeft:{type:Boolean,default:!1}},computed:{color:function(){return h[this.item.type]},formattedEndDate:function(){return this.formatDate(this.item.endDate)},formattedStartDate:function(){if(this.item.startDate)return this.formatDate(this.item.startDate)},imgSize:function(){return this.$nuxt.$vuetify.breakpoint.lgAndUp?150:80},imgPath:function(){if(this.hasOrg)return n(370)("./".concat(this.item.org,".png"))},isMobile:function(){return this.$nuxt.$vuetify.breakpoint.xsOnly},dateText:function(){return this.formattedStartDate?"".concat(this.formattedStartDate," - ").concat(this.formattedEndDate):this.formattedEndDate},hasOrg:function(){return void 0!==this.item.org}},methods:{formatDate:function(t){return void 0===t?this.$tc("page.cv.present"):Object(k.a)(t,"yyyy/MM")}}}),A=(n(378),n(27)),I=n(26),V=n.n(I),w=n(188),j=n(362),E=n(346),$=n(147),M=n(394),component=Object(A.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-timeline-item",{attrs:{color:t.color,large:t.isMobile,"fill-dot":t.isMobile},scopedSlots:t._u([{key:"icon",fn:function(){return[t.hasOrg?n("v-avatar",{staticClass:"pa-2 hidden-sm-and-up",attrs:{color:"white"}},[n("v-img",{attrs:{contain:"",src:t.imgPath}})],1):t._e()]},proxy:!0}])},[t._v(" "),n("v-card",{attrs:{elevation:"1"}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between flex-xs-row",class:{"flex-lg-row-reverse":t.isLeft}},[n("div",[n("v-card-title",{staticClass:"cv-card-title primary--text",domProps:{textContent:t._s(t.$t("page.cv.items."+t.item.key+".title"))}}),t._v(" "),n("v-card-subtitle",[t.hasOrg?n("span",[t._v(t._s(t.$t("page.cv.orgs."+t.item.org)))]):t._e(),t._v(" "),n("span",{staticClass:"hidden-lg-and-up"},[n("span",{staticClass:"mx-1"},[t._v("|")]),t._v(" "),n("span",[t._v(t._s(t.dateText))])])]),t._v(" "),n("v-card-text",[n("p",{domProps:{innerHTML:t._s(t.$t("page.cv.items."+t.item.key+".shortDescription"))}}),t._v(" "),t.item.skills||t.item.tech?n("CvSkillsAndTechDisplay",{attrs:{skills:t.item.skills,tech:t.item.tech}}):t._e()],1)],1),t._v(" "),t.hasOrg?n("v-avatar",{staticClass:"ma-3 hidden-xs-only",attrs:{tile:"",size:t.imgSize}},[n("v-img",{attrs:{contain:"",src:t.imgPath}})],1):t._e()],1)]),t._v(" "),n("template",{slot:"opposite"},[n("span",{staticClass:"text-overline"},[t._v(t._s(t.dateText))])])],2)}),[],!1,null,"3e9e2704",null),F=component.exports;V()(component,{CvSkillsAndTechDisplay:n(361).default}),V()(component,{VAvatar:w.a,VCard:j.a,VCardSubtitle:E.a,VCardText:E.b,VCardTitle:E.c,VImg:$.a,VTimelineItem:M.a});n(152),n(196);var P=l.a.extend({name:"CVItemsFilter",props:{value:{type:String,default:void 0}},data:function(){return{selection:0}},computed:{typesAndColors:function(){return Object.values(r).map((function(t){return{type:t,colorClass:h[t]}}))}},watch:{value:{immediate:!0,handler:function(t){if(void 0===t)this.selection=0;else{var e=this.typesAndColors.findIndex((function(e){return e.type===t}));this.selection=e+1}}},selection:function(t){if(0===t)this.$emit("input",void 0);else{var e=this.typesAndColors[t-1].type;this.$emit("input",e)}}}}),U=n(395),R=n(396),B=Object(A.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-chip-group",{attrs:{column:"",mandatory:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("v-chip",{attrs:{filter:""}},[t._v("\n    "+t._s(t.$t("global.filter.all"))+"\n  ")]),t._v(" "),t._l(t.typesAndColors,(function(e){return n("v-chip",{key:e.type,attrs:{"text-color":"white",filter:"",color:e.colorClass}},[t._v("\n    "+t._s(t.$t("page.cv.filter."+e.type))+"\n  ")])}))],2)}),[],!1,null,null,null),L=B.exports;function N(t){var e;return null!==(e=t.startDate)&&void 0!==e?e:t.endDate}function H(a,b){var t=N(a),e=N(b);return void 0===t?-1:void 0===e?1:Object(c.a)(t,e)}V()(B,{VChip:U.a,VChipGroup:R.a});var J=l.a.extend({components:{CVItemsFilter:L,CVTimelineItemDisplay:F},data:function(){return{reverseOrder:!1,itemFilter:void 0}},computed:{sortedItems:function(){var t=this,e=O.sort(H);return this.itemFilter&&(e=e.filter((function(e){return e.type===t.itemFilter}))),this.reverseOrder&&(e=e.reverse()),e}},head:function(){return{title:this.$tc("nav.cv")}}}),K=n(114),z=n(328),G=n(187),W=n(329),Y=n(333),Q=n(398),X=Object(A.a)(J,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[n("h4",{staticClass:"text-h4 primary--text",domProps:{innerHTML:t._s(t.$t("page.cv.title"))}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"secondary--text",attrs:{color:"primary",href:"/files/AlvaroBreyVilas-cv-20210118.pdf",download:"",target:"_blank"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-file-pdf")]),t._v(" "),n("span",[t._v("PDF version")])],1)],1),t._v(" "),n("CVItemsFilter",{model:{value:t.itemFilter,callback:function(e){t.itemFilter=e},expression:"itemFilter"}}),t._v(" "),n("v-timeline",{attrs:{dense:t.$nuxt.$vuetify.breakpoint.mdAndDown}},t._l(t.sortedItems,(function(t,e){return n("CVTimelineItemDisplay",{key:t.key,attrs:{item:t,"is-left":e%2==1}})})),1)],1)],1)}),[],!1,null,null,null);e.default=X.exports;V()(X,{VBtn:K.a,VCol:z.a,VIcon:G.a,VRow:W.a,VSpacer:Y.a,VTimeline:Q.a})}}]);