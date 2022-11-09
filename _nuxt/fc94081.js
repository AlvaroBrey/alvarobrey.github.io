(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{371:function(t,e,n){},376:function(t,e,n){"use strict";n.r(e);var r=n(1).a.extend({name:"CvSkillsAndTechDisplay",props:{skills:{type:Array,default:void 0},tech:{type:Array,default:void 0}}}),o=n(25),c=n(24),l=n.n(c),d=n(341),m=n(342),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[t.skills?n("v-col",{attrs:{cols:"12",xs:"12",sm:"6"}},[n("p",{staticClass:"font-weight-medium mb-1 primary--text"},[t._v("\n      "+t._s(t.$t("page.cv.skillsTitle"))+"\n    ")]),t._v(" "),n("ul",t._l(t.skills,(function(e){return n("li",{key:e},[t._v("\n        "+t._s(t.$t("page.cv.skills."+e))+"\n      ")])})),0)]):t._e(),t._v(" "),t.tech?n("v-col",{attrs:{cols:"12",xs:"12",sm:"6"}},[n("p",{staticClass:"font-weight-medium mb-1 primary--text"},[t._v("\n      "+t._s(t.$t("page.cv.techTitle"))+"\n    ")]),t._v(" "),n("ul",t._l(t.tech,(function(e){return n("li",{key:e},[t._v("\n        "+t._s(e)+"\n      ")])})),0)]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VRow:m.a})},385:function(t,e,n){var map={"./citius.png":386,"./epfl.png":387,"./everis.png":388,"./imagames.png":389,"./nextcloud.png":390,"./parrable.png":391,"./stanford.png":392,"./uimp.png":393,"./usc.png":394};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=385},386:function(t,e,n){t.exports=n.p+"img/citius.9026b94.png"},387:function(t,e,n){t.exports=n.p+"img/epfl.9924e27.png"},388:function(t,e,n){t.exports=n.p+"img/everis.e74f351.png"},389:function(t,e,n){t.exports=n.p+"img/imagames.9f6eeb1.png"},390:function(t,e,n){t.exports=n.p+"img/nextcloud.6cc858a.png"},391:function(t,e,n){t.exports=n.p+"img/parrable.46ce35c.png"},392:function(t,e,n){t.exports=n.p+"img/stanford.1471121.png"},393:function(t,e,n){t.exports=n.p+"img/uimp.bb360e0.png"},394:function(t,e,n){t.exports=n.p+"img/usc.5ed254e.png"},395:function(t,e,n){"use strict";n(371)},413:function(t,e,n){"use strict";n.r(e);n(49);var r,o,c=n(1),l=n(411),d=n(114),m=(n(15),n(41),n(54)),v=n(414);!function(t){t.COURSE="course",t.EDUCATION="education",t.WORK="work",t.HOBBY="hobby"}(r||(r={})),function(t){t.CITIUS="citius",t.EPFL="epfl",t.EVERIS="everis",t.IMAGAMES="imagames",t.NEXTCLOUD="nextcloud",t.PARRABLE="parrable",t.STANFORD="stanford",t.UIMP="uimp",t.USC="usc"}(o||(o={}));var f,h=n(2),y=(f={},Object(h.a)(f,r.COURSE,"green lighten-1"),Object(h.a)(f,r.EDUCATION,"purple lighten-1"),Object(h.a)(f,r.WORK,"red lighten-2"),Object(h.a)(f,r.HOBBY,"blue lighten-2"),f);function _(t){return Object(v.a)(t,"yyyy/MM",new Date)}var x=[{key:"ITDegree",org:o.USC,startDate:_("2012/09"),endDate:_("2016/09")},{key:"AIMasters",org:o.UIMP,startDate:_("2017/09"),endDate:_("2019/07")}].map((function(t){return Object.assign(t,{type:r.EDUCATION})})),D=[{key:"citius",org:o.CITIUS,startDate:_("2016/10"),endDate:_("2018/04"),skills:["mobile","scripting","research","openSource"],tech:["Android + Kotlin","Python, NodeJS"]},{key:"imagames",org:o.IMAGAMES,startDate:_("2018/12"),endDate:_("2021/03"),skills:["infrastructure","mobile","frontend","scripting"],tech:["Docker + Ansible + Python","Android + Kotlin + Java","VueJs + Typescript"]},{key:"nextcloud",org:o.NEXTCLOUD,startDate:_("2021/09"),endDate:void 0,skills:["mobile","openSource","app_architecture"],tech:["Android + Kotlin + Java","Bash + Python","Github Actions"]}].map((function(t){return Object.assign(t,{type:r.WORK})})),C=[{key:"machineLearning",org:o.STANFORD,startDate:void 0,endDate:_("2017/04")},{key:"scalaFP",org:o.EPFL,startDate:void 0,endDate:_("2019/06")}].map((function(t){return Object.assign(t,{type:r.COURSE})})),O=[{key:"androidRoms",org:void 0,startDate:_("2015/06"),endDate:_("2017/08"),type:r.HOBBY,skills:["openSource","mobile","scripting"],tech:["Android","Java, C","Bash, Python"]}],k=[].concat(Object(m.a)(x),Object(m.a)(D),Object(m.a)(C),O),A=n(415),T=n(376),S=c.a.extend({name:"CVTimelineItem",components:{CvSkillsAndTechDisplay:T.default},props:{item:{required:!0,type:Object},isLeft:{type:Boolean,default:!1}},computed:{color:function(){return y[this.item.type]},formattedEndDate:function(){return this.formatDate(this.item.endDate)},formattedStartDate:function(){if(this.item.startDate)return this.formatDate(this.item.startDate)},imgSize:function(){return this.$nuxt.$vuetify.breakpoint.lgAndUp?150:80},imgPath:function(){if(this.hasOrg)return n(385)("./".concat(this.item.org,".png"))},isMobile:function(){return this.$nuxt.$vuetify.breakpoint.xsOnly},dateText:function(){return this.formattedStartDate?"".concat(this.formattedStartDate," - ").concat(this.formattedEndDate):this.formattedEndDate},hasOrg:function(){return void 0!==this.item.org},description:function(){return this.$tc("page.cv.items.".concat(this.item.key,".shortDescription"))}},methods:{formatDate:function(t){return void 0===t?this.$tc("page.cv.present"):Object(A.a)(t,"yyyy/MM")}}}),w=(n(395),n(25)),I=n(24),V=n.n(I),E=n(194),j=n(359),$=n(358),P=n(154),F=n(408),component=Object(w.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-timeline-item",{attrs:{color:t.color,large:t.isMobile,"fill-dot":t.isMobile},scopedSlots:t._u([{key:"icon",fn:function(){return[t.hasOrg?n("v-avatar",{staticClass:"pa-2 hidden-sm-and-up",attrs:{color:"white"}},[n("v-img",{attrs:{contain:"",src:t.imgPath}})],1):t._e()]},proxy:!0}])},[t._v(" "),n("v-card",{attrs:{elevation:"1"}},[n("div",{staticClass:"d-flex flex-no-wrap justify-space-between flex-xs-row",class:{"flex-lg-row-reverse":t.isLeft}},[n("div",[n("v-card-title",{staticClass:"cv-card-title primary--text",domProps:{textContent:t._s(t.$t("page.cv.items."+t.item.key+".title"))}}),t._v(" "),n("v-card-subtitle",[t.hasOrg?n("span",[t._v(t._s(t.$t("page.cv.orgs."+t.item.org)))]):t._e(),t._v(" "),n("span",{staticClass:"hidden-lg-and-up"},[n("span",{staticClass:"mx-1"},[t._v("|")]),t._v(" "),n("span",[t._v(t._s(t.dateText))])])]),t._v(" "),n("v-card-text",[t.description?n("p",{domProps:{innerHTML:t._s(t.description)}}):t._e(),t._v(" "),t.item.skills||t.item.tech?n("CvSkillsAndTechDisplay",{attrs:{skills:t.item.skills,tech:t.item.tech}}):t._e()],1)],1),t._v(" "),t.hasOrg?n("v-avatar",{staticClass:"ma-3 hidden-xs-only",attrs:{tile:"",size:t.imgSize}},[n("v-img",{attrs:{contain:"",src:t.imgPath}})],1):t._e()],1)]),t._v(" "),n("template",{slot:"opposite"},[n("span",{staticClass:"text-overline"},[t._v(t._s(t.dateText))])])],2)}),[],!1,null,"90ac13b4",null),M=component.exports;V()(component,{CvSkillsAndTechDisplay:n(376).default}),V()(component,{VAvatar:E.a,VCard:j.a,VCardSubtitle:$.a,VCardText:$.b,VCardTitle:$.c,VImg:P.a,VTimelineItem:F.a});n(160),n(204);var U=c.a.extend({name:"CVItemsFilter",props:{value:{type:String,default:void 0}},data:function(){return{selection:0}},computed:{typesAndColors:function(){return Object.values(r).map((function(t){return{type:t,colorClass:y[t]}}))}},watch:{value:{immediate:!0,handler:function(t){if(void 0===t)this.selection=0;else{var e=this.typesAndColors.findIndex((function(e){return e.type===t}));this.selection=e+1}}},selection:function(t){if(0===t)this.$emit("input",void 0);else{var e=this.typesAndColors[t-1].type;this.$emit("input",e)}}}}),R=n(409),B=n(410),L=Object(w.a)(U,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-chip-group",{attrs:{column:"",mandatory:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},[n("v-chip",{attrs:{filter:""}},[t._v("\n    "+t._s(t.$t("global.filter.all"))+"\n  ")]),t._v(" "),t._l(t.typesAndColors,(function(e){return n("v-chip",{key:e.type,attrs:{"text-color":"white",filter:"",color:e.colorClass}},[t._v("\n    "+t._s(t.$t("page.cv.filter."+e.type))+"\n  ")])}))],2)}),[],!1,null,null,null),N=L.exports;function J(t){var e;return null!==(e=t.startDate)&&void 0!==e?e:t.endDate}function K(a,b){var t=J(a),e=J(b);return void 0===t?-1:void 0===e?1:Object(l.a)(t,e)}V()(L,{VChip:R.a,VChipGroup:B.a});var H=c.a.extend({components:{CVItemsFilter:N,CVTimelineItemDisplay:M},data:function(){return{reverseOrder:!1,itemFilter:void 0,icons:{mdiFilePdf:d.c}}},computed:{sortedItems:function(){var t=this,e=k.sort(K);return this.itemFilter&&(e=e.filter((function(e){return e.type===t.itemFilter}))),this.reverseOrder&&(e=e.reverse()),e}},head:function(){return{title:this.$tc("nav.cv")}}}),G=n(118),z=n(341),W=n(193),Y=n(342),X=n(346),Q=n(412),Z=Object(w.a)(H,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12"}},[n("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[n("h4",{staticClass:"text-h4 primary--text",domProps:{innerHTML:t._s(t.$t("page.cv.title"))}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"secondary--text",attrs:{color:"primary",href:"/files/AlvaroBreyVilas-cv-20221109-02.pdf",download:"",target:"_blank"}},[n("v-icon",{attrs:{left:""}},[t._v(t._s(t.icons.mdiFilePdf))]),t._v(" "),n("span",[t._v("PDF version")])],1)],1),t._v(" "),n("CVItemsFilter",{model:{value:t.itemFilter,callback:function(e){t.itemFilter=e},expression:"itemFilter"}}),t._v(" "),n("v-timeline",{attrs:{dense:t.$nuxt.$vuetify.breakpoint.mdAndDown}},t._l(t.sortedItems,(function(t,e){return n("CVTimelineItemDisplay",{key:t.key,attrs:{item:t,"is-left":e%2==1}})})),1)],1)],1)}),[],!1,null,null,null);e.default=Z.exports;V()(Z,{VBtn:G.a,VCol:z.a,VIcon:W.a,VRow:Y.a,VSpacer:X.a,VTimeline:Q.a})}}]);