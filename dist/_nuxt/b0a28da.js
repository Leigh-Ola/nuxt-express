(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{233:function(t,e,n){var content=n(240);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("06bfdaf5",content,!0,{sourceMap:!1})},239:function(t,e,n){"use strict";var o=n(233);n.n(o).a},240:function(t,e,n){(e=n(17)(!1)).push([t.i,".contact-enter-active,.contact-leave-active{position:relative;transition:all .5s ease 0s}.contact-enter{margin-left:800px;position:relative}.contact-leave{margin-right:800px;position:relative}main{display:flex;width:100vw;align-items:center;flex-flow:column nowrap}h1{margin:20px auto;color:#1e7878}table{padding:10px;overflow:hidden;background:rgba(30,120,120,.3);border:2px solid #1e7878;box-sizing:border-box;margin:0 auto}table thead,table tr{display:flex;width:300px;justify-content:space-between}table thead:first-of-type{border-bottom:2px solid #1e7878}table thead>*,table tr>*{width:50%;padding:15px 35px;display:flex;text-transform:capitalize;justify-content:center}table td:not(:last-child),table th:not(:last-child){border-right:1px solid #1e7878;margin:0;box-sizing:border-box}",""]),t.exports=e},259:function(t,e,n){"use strict";n.r(e);n(19);var o=n(2),r=n(50),c=n.n(r),l={name:"contact",transition:"contact",data:function(){return{}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.error,e.abrupt("return",c.a.get("/api/contact").then((function(t){return{contact:t.data}})).catch((function(t){console.log("Error fetching contact details : %o",t),n({statusCode:404,message:"Contact info not found"})})));case 2:case"end":return e.stop()}}),e)})))()}},d=(n(239),n(11)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("h1",[t._v("Contact Me")]),t._v(" "),n("table",{staticClass:"shadow-xl"},[t._m(0),t._v(" "),t._l(t.contact,(function(e,o){return n("tbody",{key:o},[n("tr",[n("td",[t._v(t._s(o))]),t._v(" "),n("td",[t._v(t._s(e))])])])}))],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("thead",{staticClass:"bg-blue text-white-900"},[e("th",[this._v("platform")]),this._v(" "),e("th",[this._v("handle")])])}],!1,null,null,null);e.default=component.exports}}]);