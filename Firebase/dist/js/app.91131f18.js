(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],n[r]&&f.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("64a9"),n=a.n(s);n.a},"0924":function(t,e,a){"use strict";var s=a("cb0b"),n=a.n(s);n.a},"37ca":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkY0MTY4MDdEMEMzODExRTZBOTIzQTdDRUQzMjM3MDhCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkY0MTY4MDdFMEMzODExRTZBOTIzQTdDRUQzMjM3MDhCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RjQxNjgwN0IwQzM4MTFFNkE5MjNBN0NFRDMyMzcwOEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RjQxNjgwN0MwQzM4MTFFNkE5MjNBN0NFRDMyMzcwOEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz50amNoAAAHEUlEQVR42txb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"},"3ac4":function(t,e,a){},"3cf7":function(t,e,a){},4379:function(t,e,a){"use strict";var s=a("dbeb"),n=a.n(s);n.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=i(t);return a(e)}function i(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}n.keys=function(){return Object.keys(s)},n.resolve=i,t.exports=n,n.id="4678"},4805:function(t,e,a){"use strict";var s=a("897e"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),a("br"),t._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],c={name:"HelloWorld",props:{msg:String}},l=c,d=(a("4805"),a("2877")),u=Object(d["a"])(l,r,o,!1,null,"b9167eee",null),f=u.exports,m={name:"app",components:{HelloWorld:f}},p=m,v=(a("034f"),Object(d["a"])(p,n,i,!1,null,null,null)),h=v.exports,b=a("8c4f"),g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-login"},[a("form",{staticClass:"admin-login-form"},[t._m(0),a("p",{staticStyle:{color:"red"}},[t._v(t._s(this.message))]),a("FormInput",{attrs:{type:"text",label:"Client",placeholder:"username",required:"true"},model:{value:t.client,callback:function(e){t.client=e},expression:"client"}}),a("FormInput",{attrs:{type:"password",label:"Password",placeholder:"password",required:"true"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("br"),a("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.processForm(e)}}},[t._v("Submit")]),a("router-link",{attrs:{to:{name:"adminHome"}}},[t._v("Redirect")])],1),t._v(" `\n    "),a("br"),t._m(1)])},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticStyle:{"text-align":"center","margin-bottom":"50px","margin-top":"20px"}},[s("img",{attrs:{height:"80px",src:a("cf05")}}),s("h2",[t._v("Admin Login")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",[t._v("Help")]),a("a",[t._v("Contact Us")]),a("a",[t._v("Home")])])}],_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-container"},[a("p",{staticClass:"label"},[t._v(t._s(t.label))]),"TextArea"===t.type?a("TextArea",{attrs:{placeholder:t.placeholder},on:{input:function(e){return t.$emit("input",e.target.value)}}}):a("input",{attrs:{type:t.type,placeholder:t.placeholder,required:t.required},domProps:{value:t.value},on:{change:function(e){return t.$emit("onchange",e.target.value)},input:function(e){return t.$emit("input",e.target.value)}}})],1)},C=[],y={name:"FormInput",props:["label","type","placeholder","value","required","onchange"]},A=y,w=(a("cf49"),Object(d["a"])(A,_,C,!1,null,"7590eb9e",null)),I=w.exports,D={name:"AdminLogin",components:{FormInput:I},data:function(){return{client:"",password:"",message:""}},methods:{processForm:function(){var t=this;this.message="",this.$http.post("https://easyvote-f20bf.firebaseapp.com/client/login",{client:this.client,password:this.password}).then(function(e){if(200===e.status){var a=e.data.electionBodyID;t.$router.push({name:"adminHome",params:{electionBodyID:a}})}else t.message="Unsuccessful Login"}).catch(function(e){t.message="Unsuccessful",console.log(e)})}}},k=D,x=(a("0924"),Object(d["a"])(k,g,j,!1,null,"3a2b4c94",null)),E=x.exports,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin_container"},[a("Navbar"),a("h4",[t._v("DASHBOARD")]),a("div",{staticClass:"dashboard_actions"},[a("div",[a("router-link",{attrs:{to:{name:"createElectionForm",params:{electionBodyID:t.electionBodyID}}}},[a("i",{staticClass:"ion-ios-add"}),t._v(" Create Election")])],1),t._m(0)]),a("div",{staticClass:"dashboard"},[t._m(1),a("div",{staticClass:"dashboard-card"},[a("h5",[t._v("ELECTIONS")]),t._l(t.elections,function(e){return a("div",{staticClass:"election-card"},[a("div",{staticClass:"election-card-info"},[a("router-link",{attrs:{to:{name:"viewElection",params:{electionID:e._id}}}},[t._v(t._s(e.title))]),t._m(2,!0)],1)])})],2)])],1)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",[a("i",{staticClass:"ion-md-list"}),t._v(" Go to Logs")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-card"},[a("h5",[t._v("CITIZENS ")]),a("div",{staticClass:"citzens_stats"},[a("div",{staticClass:"chart_container"},[a("h3",[t._v("Age Group")]),a("canvas",{attrs:{id:"myChart",width:"100",height:"100"}})]),a("div",{staticClass:"chart_container"},[a("h3",[t._v("Region")]),a("canvas",{attrs:{id:"myChart2",width:"100",height:"100"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"actions"},[a("a",[t._v("Edit ")]),a("a",[t._v(" Archive ")])])}],M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-bar"},[s("div",{staticClass:"logo"},[s("img",{attrs:{height:"50",src:a("cf05")}}),t._v(" EasyVote")]),s("div",{staticClass:"actions"},[s("a",{staticClass:"country"},[s("img",{attrs:{height:"24",src:a("37ca")}}),s("span")]),s("a",[s("i",{staticClass:"icon ion-md-menu"})])])])}],B={name:"Navbar"},L=B,O=(a("980c"),Object(d["a"])(L,M,H,!1,null,"3a0e50c0",null)),S=O.exports,V={name:"AdminHome",components:{TextInput:I,Navbar:S},data:function(){return{showElectionForm:!1,electionBodyID:"",elections:[]}},created:function(){var t=this;this.electionBodyID=this.$route.params.electionBodyID,this.$http.get("https://easyvote-f20bf.firebaseapp.com/election/list/".concat(this.electionBodyID)).then(function(e){t.elections=e.data.elections}).catch(function(t){console.log(t)})},mounted:function(){var t=document.getElementById("myChart").getContext("2d"),e=document.getElementById("myChart2").getContext("2d");new Chart(t,{type:"doughnut",data:{datasets:[{data:[10,20,30,40],backgroundColor:["orange","lightblue","aqua","pink"]}],labels:["18-24","25-44","45-64","65+"]},options:{responsive:!0,maintainAspectRatio:!1}}),new Chart(e,{type:"doughnut",data:{datasets:[{data:[10,20,30,40,50],backgroundColor:["orange","lightblue","aqua","pink"]}],labels:["ON","BC","AB","NS","MN"]},options:{responsive:!0,maintainAspectRatio:!1}})}},z=V,P=(a("9c27"),Object(d["a"])(z,N,F,!1,null,"72152fcc",null)),T=P.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HomeNavbar"),t._m(0),a("div",{staticClass:"section"},[a("div",{staticClass:"info"},[a("svg",{staticStyle:{width:"50px",height:"50px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#000",d:"M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z"}})]),a("p",[t._v(" Mobile.")])]),a("div",{staticClass:"info"},[a("svg",{staticStyle:{width:"50px",height:"50px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#000",d:"M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"}})]),a("p",[t._v("Secure")])]),a("div",{staticClass:"info"},[a("svg",{staticStyle:{width:"50px",height:"50px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#000",d:"M12,3C10.73,3 9.6,3.8 9.18,5H3V7H4.95L2,14C1.53,16 3,17 5.5,17C8,17 9.56,16 9,14L6.05,7H9.17C9.5,7.85 10.15,8.5 11,8.83V20H2V22H22V20H13V8.82C13.85,8.5 14.5,7.85 14.82,7H17.95L15,14C14.53,16 16,17 18.5,17C21,17 22.56,16 22,14L19.05,7H21V5H14.83C14.4,3.8 13.27,3 12,3M12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5M5.5,10.25L7,14H4L5.5,10.25M18.5,10.25L20,14H17L18.5,10.25Z"}})]),a("p",[t._v("Scalable")])]),a("div",{staticClass:"info"},[a("svg",{staticStyle:{width:"50px",height:"50px"},attrs:{viewBox:"0 0 24 24"}},[a("path",{attrs:{fill:"#000",d:"M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z"}})]),a("p",[t._v(" Simple ")])])]),t._m(1)],1)},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"background"},[s("img",{attrs:{src:a("dfdf")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("p",[t._v("\n            EasyVote is a secure mobile voting application that aims to create a better voting experience for nationwide elections.\n            "),a("a",{staticClass:"about-links",staticStyle:{"text-decoration":"underline"},attrs:{href:""}},[t._v("Check out our customers")])]),a("a",{staticClass:"about-links",attrs:{href:""}},[t._v(" Learn More "),a("i",{staticClass:"icon ion-md-arrow-dropright"})]),a("p",{staticClass:"contact-info"},[t._v("  Contact us easyvoteapp@gmail.com ")])])}],W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-bar"},[t._m(0),a("div",{staticClass:"actions"},[a("router-link",{attrs:{to:{name:"adminLogin"}}},[t._v(" Admin ")]),a("a",{staticClass:"button"},[t._v(" Register ▾")])],1)])},Z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo"},[s("img",{attrs:{height:"50",src:a("cf05")}}),t._v(" EasyVote")])}],Y={name:"HomeNavbar"},Q=Y,J=(a("4379"),Object(d["a"])(Q,W,Z,!1,null,"79a52b8e",null)),U=J.exports,X={name:"Home",components:{HomeNavbar:U,Navbar:S}},K=X,$=(a("995f"),Object(d["a"])(K,R,G,!1,null,"5fb4daf0",null)),q=$.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("div",{staticClass:"election_form_container"},[a("h3",{staticStyle:{"margin-bottom":"10px"}},[t._v("Create Election ")]),a("p",[t._v(t._s(this.messaage))]),a("form",{staticClass:"election_form"},[a("FormInput",{attrs:{label:"Title",placeholder:"Election Title (Year)"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}}),a("Datetime",{attrs:{type:"datetime"},model:{value:t.form.startDate,callback:function(e){t.$set(t.form,"startDate",e)},expression:"form.startDate"}},[a("label",{attrs:{slot:"before",for:"startDate"},slot:"before"},[t._v(" Start Date")])]),a("Datetime",{attrs:{type:"datetime"},model:{value:t.form.endDate,callback:function(e){t.$set(t.form,"endDate",e)},expression:"form.endDate"}},[a("label",{attrs:{slot:"before",for:"endDate"},slot:"before"},[t._v(" End Date")])]),a("FormInput",{attrs:{type:"TextArea",label:"Description",placeholder:"About this Election"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)]),a("Modal",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}]},[a("template",{slot:"header"},[a("h3",{staticStyle:{"text-align":"center"}},[t._v("Add a Candidate")])]),a("form",[a("div",[a("a")]),a("FormInput",{attrs:{label:"First Name",placeholder:"John"},model:{value:t.candidateForm.firstName,callback:function(e){t.$set(t.candidateForm,"firstName",e)},expression:"candidateForm.firstName"}}),a("FormInput",{attrs:{label:"Last Name",placeholder:"Don"},model:{value:t.candidateForm.lastName,callback:function(e){t.$set(t.candidateForm,"lastName",e)},expression:"candidateForm.lastName"}}),a("FormInput",{attrs:{label:"Party",placeholder:"Political party"},model:{value:t.candidateForm.party,callback:function(e){t.$set(t.candidateForm,"party",e)},expression:"candidateForm.party"}}),a("input",{attrs:{type:"file"},on:{change:function(e){return t.readURL(e)}}}),a("button",{on:{click:function(e){return e.preventDefault(),t.addCandidate(e)}}},[t._v("Add")])],1)],2),a("div",[a("br"),a("div",{staticStyle:{"text-align":"center"}},[a("a",{staticClass:"button",on:{click:function(e){t.showModal=!0}}},[a("i",{staticClass:"ion-md-add"}),t._v("  Add a candidate")])]),a("div",{staticClass:"candidates"},t._l(t.form.candidates,function(e,s){return a("div",{staticClass:"candidate_container"},[a("img",{attrs:{src:e.image}}),a("p",[a("strong",[t._v(t._s(e.firstName)+" "+t._s(e.lastName))])]),a("p",[t._v("\n                    "+t._s(e.party)+"\n                ")]),a("a",{staticClass:"button",on:{click:function(e){return t.removeCandidate(s)}}},[a("i",{staticClass:"ion-md-trash"}),t._v(" Delete")])])}),0)]),a("div",[a("div",{staticStyle:{"text-align":"center",display:"block"}},[a("a",{staticClass:"button",on:{click:t.processForm}},[a("i",{staticClass:"ion-md-checkmark"}),t._v("  Save & Exit")])])])],1)},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal"},[a("div",{staticClass:"modal_content"},[a("div",{staticClass:"header"},[t._t("header"),a("a",{staticClass:"close",on:{click:function(t){}}},[a("i",{staticClass:"ion-ios-close"})])],2),a("div",[t._t("default")],2),a("div",{staticClass:"footer"},[t._t("footer")],2)])])},st=[],nt={name:"modal"},it=nt,rt=(a("7e55"),Object(d["a"])(it,at,st,!1,null,"06558018",null)),ot=rt.exports,ct=a("859b"),lt=(a("d355"),{name:"CreateElectionForm",components:{Modal:ot,Navbar:S,FormInput:I,Datetime:ct["Datetime"]},data:function(){return{showModal:!1,form:{title:"",description:"",startDate:"",endDate:"",candidates:[]},candidateForm:{firstName:"",lastName:"",party:"",image:"",upload:""},messaage:""}},methods:{readURL:function(t){var e=this,a=t.target.files||t.dataTransfer.files;if(a.length){new Image;var s=new FileReader;s.onload=function(t){e.candidateForm.image=t.target.result},s.readAsDataURL(a[0])}},removeCandidate:function(t){this.form.candidates=this.form.candidates.filter(function(e,a){return a!==t})},processForm:function(){var t=this;this.messaage="",this.$http.post("https://easyvote-f20bf.firebaseapp.com/election/create",{title:this.form.title,description:this.form.description,startDate:this.form.startDate,endDate:this.form.endDate,candidates:this.form.candidates,electionBodyID:this.$route.params.electionBodyID}).then(function(e){200===e.status?(t.$router.push({name:"adminHome"}),t.message="Succesful login"):t.message="Unsuccessful"}).catch(function(e){t.message="Unsuccessful",console.log(e)})},addCandidate:function(){this.form.candidates.push({firstName:this.candidateForm.firstName,lastName:this.candidateForm.lastName,party:this.candidateForm.party,image:this.candidateForm.image}),this.showModal=!1}}}),dt=lt,ut=(a("df69"),Object(d["a"])(dt,tt,et,!1,null,"62fc0301",null)),ft=ut.exports,mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div"),a("div",[a("a",{staticClass:"button"},[t._v("Add Candidate")]),a("div",[a("FormInput",{attrs:{label:"First Name",placeholder:"Angela"}}),a("FormInput",{attrs:{label:"Last Name",placeholder:"Grace"}}),a("FormInput",{attrs:{label:"Other Names",placeholder:"Other Names"}}),a("FormInput",{attrs:{label:"Description",placeholder:"About the candidate"}}),a("FormInput",{attrs:{label:"Party",placeholder:"Name of party"}}),a("FormInput",{attrs:{label:"Image",placeholder:"Angela"}})],1)])])},pt=[],vt={name:"EditElectionForm.vue",components:{FormInput:I}},ht=vt,bt=Object(d["a"])(ht,mt,pt,!1,null,"74442224",null),gt=bt.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Navbar"),a("div",{staticClass:"election_container"},[a("div",{staticClass:"header_container"},[a("p",{staticStyle:{"font-size":"24px","text-transform":"uppercase","font-weight":"bold","text-align":"center"}},[t._v(t._s(t.title))]),a("div",{staticStyle:{display:"flex","justify-content":"center","margin-top":"15px"}},[a("br"),a("div",[a("p",{staticStyle:{color:"black","font-size":"20px"}},[a("i",{staticClass:"icon ion-md-time"}),t._v(" "+t._s(t.startDateFormatted)+" ")])])])]),a("section",[a("p",{staticClass:"section_header",staticStyle:{color:"red"}},[t._v("Live Analytics")]),a("div",{staticClass:"statistics"},[a("br"),a("h3",{staticStyle:{"text-align":"center"}},[t._v("Votes by Province ")]),t.provinceChartData?a("GChart",{attrs:{type:"PieChart",data:t.provinceChartData,options:t.provinceChartOptions,title:""}}):t._e(),a("h3",{staticStyle:{"text-align":"center"}},[t._v("Voters by Age Group ")]),t.provinceChartData?a("GChart",{attrs:{type:"PieChart",data:t.provinceChartData,options:t.provinceChartOptions,title:""}}):t._e()],1)]),a("p",{attrs:{id:"test"}}),a("section",[a("p",{staticClass:"section_header"},[t._v("Candidates")]),a("br"),a("div",{staticClass:"candidate_container"},t._l(t.candidates,function(e){return a("div",{staticClass:"candidate_card"},[a("div",{staticClass:"candidate_image"},[a("img",{attrs:{src:e.image}})]),a("div",{staticClass:"candidate_info"},[a("div",[a("h4",{staticStyle:{"text-transform":"capitalize"}},[t._v(t._s(e.firstName)+" "+t._s(e.lastName))]),a("p",[t._v(t._s(e.party)+" ")])])])])}),0)])])],1)},_t=[],Ct=a("c1df"),yt=a.n(Ct),At=a("cb43"),wt={name:"Election",components:{Navbar:S,GChart:At["GChart"]},created:function(){var t=this;this.electionID=this.$route.params.electionID,this.fetchAnalytics(),this.$http.get("https://easyvote-f20bf.firebaseapp.com/election/view/".concat(this.electionID)).then(function(e){t.title=e.data.title,t.startDate=e.data.startDate,t.endDate=e.data.endDate,t.candidates=e.data.candidates}).catch(function(t){console.log(t)})},data:function(){return{title:"",electionID:"",startDate:"",endDate:"",candidates:[],province:{dataPoints:[],dataLabels:[],data:[["province","percentage"]]},provinceChartData:[],provinceChartOptions:{chart:{title:"Province"}}}},methods:{fetchAnalytics:function(){var t=this;this.$http.get("https://easyvote-f20bf.firebaseapp.com/analytics/".concat(this.electionID,"/province")).then(function(e){t.province.dataPoints=e.data.dataPoints,t.province.dataLabels=e.data.dataLabels;for(var a=0;a<t.province.dataLabels.length;a++)t.province.data.push([t.province.dataLabels[a],t.province.dataPoints[a]]);t.provinceChartData=t.province.data})},ready:function(){setInterval(function(){this.fetchAnalytics()}.bind(this),1e3)}},computed:{startDateFormatted:function(){return this.startDate?yt()(this.startDate).fromNow():"-"},endDateFormatted:function(){return yt()(this.endDate).format("llll")}}},It=wt,Dt=(a("bd6d"),Object(d["a"])(It,jt,_t,!1,null,"707783f0",null)),kt=Dt.exports;s["a"].use(b["a"]);var xt=new b["a"]({routes:[{path:"/",name:"home",component:q},{path:"/admin/login",name:"adminLogin",component:E},{path:"/admin/home/:electionBodyID",name:"adminHome",component:T},{path:"/admin/election/create/:electionBodyID",name:"createElectionForm",component:ft},{path:"/admin/election/edit/:electionID",name:"editElectionForm",component:gt},{path:"/admin/election/view/:electionID",name:"viewElection",component:kt}]}),Et=a("bc3a"),Nt=a.n(Et);Nt.a.defaults.headers.common["Access-Control-Allow-Origin"]="*",Nt.a.defaults.headers.common["Content-Type"]="application/json",s["a"].prototype.$http=Nt.a,Nt.a.defaults.headers.post["Access-Control-Allow-Origin"]="*",s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(h)},router:xt}).$mount("#app")},5844:function(t,e,a){},"64a9":function(t,e,a){},"7e55":function(t,e,a){"use strict";var s=a("a865"),n=a.n(s);n.a},"890e":function(t,e,a){},"897e":function(t,e,a){},"980c":function(t,e,a){"use strict";var s=a("f918"),n=a.n(s);n.a},"995f":function(t,e,a){"use strict";var s=a("5844"),n=a.n(s);n.a},"9c27":function(t,e,a){"use strict";var s=a("3ac4"),n=a.n(s);n.a},a865:function(t,e,a){},a877:function(t,e,a){},bd6d:function(t,e,a){"use strict";var s=a("3cf7"),n=a.n(s);n.a},cb0b:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.73acdfa8.png"},cf49:function(t,e,a){"use strict";var s=a("a877"),n=a.n(s);n.a},dbeb:function(t,e,a){},df69:function(t,e,a){"use strict";var s=a("890e"),n=a.n(s);n.a},dfdf:function(t,e,a){t.exports=a.p+"img/easyvote_preview.115b916a.png"},f918:function(t,e,a){}});
//# sourceMappingURL=app.91131f18.js.map