(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{437:function(t,e,n){},438:function(t,e,n){"use strict";var r=n(437);n.n(r).a},439:function(t,e,n){"use strict";n.r(e);n(53);var r=n(9);var o={layout:"main",asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,r=e.params,t.next=3,n.$get("/posts/".concat(r.postNo));case 3:return o=t.sent,t.abrupt("return",{post:o});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),methods:{dateToSimpleString:function(t){return function(t){return new Date(t).toDateString()}(t)}},head:function(){var t=this.post;return{title:"".concat(t.title),meta:[{hid:"iOSUrl",property:"al:ios:url"},{hid:"description",name:"description"}]}}},c=(n(438),n(6)),component=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"post"}},[n("div",{attrs:{id:"titleHeader"}},[t._v("\n    Created by "),n("span",{staticClass:"whiteColor"},[t._v("Xavy")]),t._v(" on "),n("span",{staticClass:"whiteColor"},[t._v(t._s(t.dateToSimpleString(t.post.registerYmdt)))]),n("br"),t._v("\n    Related to "),n("span",{staticClass:"whiteColor"},[t._v(t._s(t.post.category.name))])]),t._v(" "),n("div",{attrs:{id:"title"}},[t._v("\n    "+t._s(t.post.title)+"\n  ")]),t._v(" "),n("div",{attrs:{id:"description"}},[t._v("\n    "+t._s(t.post.description)+"\n  ")]),t._v(" "),n("div",{attrs:{id:"body"}},[n("TuiViewer",{attrs:{value:t.post.body}})],1),t._v(" "),n("div",{attrs:{id:"tags"}},t._l(t.post.tags,function(e){return n("span",{key:e.tagNo,staticClass:"tag"},[t._v("\n      "+t._s(e.name.trim())+"\n    ")])}),0)])},[],!1,null,null,null);e.default=component.exports}}]);