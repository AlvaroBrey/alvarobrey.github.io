(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{369:function(t,e,o){},370:function(t,e,o){},373:function(t,e,o){"use strict";o.r(e);o(399);var r=o(25),n=o(24),l=o.n(n),c=(o(21),o(2)),d=(o(400),o(203)),h=o(128),v=o(53),m=o(38),f=o(9),_=o(1).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),y=o(4),C=o(7);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P=Object(y.a)(d.a,m.a,_).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(c.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(h.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(v.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(v.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},d.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||f.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(C.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("v-alert",{staticClass:"info-bar",attrs:{type:"info",color:"primary"}},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAlert:P})},399:function(t,e,o){"use strict";o(369)},400:function(t,e,o){},401:function(t,e,o){"use strict";o(370)},419:function(t,e,o){"use strict";o.r(e);var r=o(1),n=o(373),l=o(156),c=r.a.extend({components:{BasicPage:l.default,InfoBar:n.default},head:function(){return{title:this.$tc("nav.me")}}}),d=(o(401),o(25)),h=o(24),v=o.n(h),m=o(341),f=o(342),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("BasicPage",{attrs:{title:t.$t("page.me.title")}},[o("p",{staticClass:"body-1",domProps:{innerHTML:t._s(t.$t("page.me.paragraph1"))}}),t._v(" "),o("p",{staticClass:"body-1",domProps:{innerHTML:t._s(t.$t("page.me.paragraph2"))}}),t._v(" "),o("p",{staticClass:"body-1",domProps:{innerHTML:t._s(t.$t("page.me.paragraph3"))}}),t._v(" "),o("p",{staticClass:"body-1",domProps:{innerHTML:t._s(t.$t("page.me.paragraph4"))}}),t._v(" "),o("v-row",{attrs:{justify:"center",align:"start"}},[o("v-col",{attrs:{cols:"12",xs:"12",md:"6"}},[o("p",{staticClass:"text-overline mb-0 primary--text",domProps:{textContent:t._s(t.$t("page.me.whatIDo"))}}),t._v(" "),o("ul",[o("li",[t._v("VueJS, Typescript, NuxtJS")]),t._v(" "),o("li",[t._v("Docker, Kubernetes")]),t._v(" "),o("li",[t._v("Git")]),t._v(" "),o("li",[t._v("Kotlin")]),t._v(" "),o("li",[t._v("Python, shell")]),t._v(" "),o("li",[t._v("Ansible")]),t._v(" "),o("li",[t._v("Android")]),t._v(" "),o("li",[t._v("Linux")])])]),t._v(" "),o("v-col",{attrs:{cols:"12",xs:"12",md:"6"}},[o("p",{staticClass:"text-overline mb-0 primary--text",domProps:{textContent:t._s(t.$t("page.me.whatILike"))}}),t._v(" "),o("ul",[o("li",{domProps:{textContent:t._s(t.$t("page.me.likes.automation"))}}),t._v(" "),o("li",{domProps:{textContent:t._s(t.$t("page.me.likes.cleanCode"))}}),t._v(" "),o("li",{domProps:{textContent:t._s(t.$t("page.me.likes.openSource"))}}),t._v(" "),o("li",{domProps:{textContent:t._s(t.$t("page.me.likes.fp"))}}),t._v(" "),o("li",{domProps:{textContent:t._s(t.$t("page.me.likes.reproducible"))}}),t._v(" "),o("li",{domProps:{textContent:t._s(t.$t("page.me.likes.pairProgramming"))}})])])],1),t._v(" "),o("InfoBar",{staticClass:"mt-4"},[o("i18n",{attrs:{path:"page.me.lookingForContact",tag:"span"}},[o("nuxt-link",{attrs:{to:t.localePath({name:"contact"})},domProps:{textContent:t._s(t.$t("page.me.contactPage"))}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{InfoBar:o(373).default,BasicPage:o(156).default}),v()(component,{VCol:m.a,VRow:f.a})}}]);