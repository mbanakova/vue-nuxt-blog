(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,4],{242:function(t,e,o){var content=o(249);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("15c55db8",content,!0,{sourceMap:!1})},244:function(t,e,o){var content=o(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("68723bdd",content,!0,{sourceMap:!1})},248:function(t,e,o){"use strict";o(242)},249:function(t,e,o){var n=o(34)(!1);n.push([t.i,".post-preview[data-v-75818cea]{border:1px solid #ccc;box-shadow:0 2px 2px #ccc;background-color:#fff;width:90%}a[data-v-75818cea]{text-decoration:none;color:#000}@media (min-width:850px){.post-preview[data-v-75818cea]{width:400px;margin:10px}}.post-thumbnail[data-v-75818cea]{width:100%;height:200px;background-position:50%;background-size:cover}.post-content[data-v-75818cea]{padding:10px;text-align:center}a:active .post-content[data-v-75818cea],a:hover .post-content[data-v-75818cea]{background-color:#ccc}",""]),t.exports=n},252:function(t,e,o){"use strict";o.r(e);var n={name:"PostPreview",props:{id:{type:String,required:!0},isAdmin:{type:Boolean,required:!0},title:{type:String,required:!0},previewText:{type:String,required:!0},thumbnail:{type:String,required:!0}},computed:{postLink:function(){return this.isAdmin?"/admin/"+this.id:"/posts/"+this.id}}},r=(o(248),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"post-preview",attrs:{to:t.postLink}},[o("article",[o("div",{staticClass:"post-thumbnail",style:{backgroundImage:"url("+t.thumbnail+")"}}),t._v(" "),o("div",{staticClass:"post-content"},[o("h1",[t._v(t._s(t.title))]),t._v(" "),o("p",[t._v(t._s(t.previewText))])])])])}),[],!1,null,"75818cea",null);e.default=component.exports},254:function(t,e,o){"use strict";o(244)},255:function(t,e,o){var n=o(34)(!1);n.push([t.i,".post-list{display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}",""]),t.exports=n},256:function(t,e,o){"use strict";o.r(e);var n={components:{PostPreview:o(252).default},props:{isAdmin:{type:Boolean,default:!1}}},r=(o(254),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"post-list"},[o("PostPreview",{attrs:{id:"1","is-admin":t.isAdmin,thumbnail:"https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/28201/retina_500x200_0718_Which_Framework_Lina_Newsletter-70f8619445119a8b09a7791f8ea288b2.png",title:"Hello",previewText:"My 1st post"}}),t._v(" "),o("PostPreview",{attrs:{id:"2","is-admin":t.isAdmin,thumbnail:"https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/28201/retina_500x200_0718_Which_Framework_Lina_Newsletter-70f8619445119a8b09a7791f8ea288b2.png",title:"Hello 2",previewText:"My 2nd post"}}),t._v(" "),o("PostPreview",{attrs:{id:"3","is-admin":t.isAdmin,thumbnail:"https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/28201/retina_500x200_0718_Which_Framework_Lina_Newsletter-70f8619445119a8b09a7791f8ea288b2.png",title:"Hello 3",previewText:"My 3rd post"}})],1)}),[],!1,null,null,null);e.default=component.exports},265:function(t,e,o){var content=o(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(35).default)("7bbb1809",content,!0,{sourceMap:!1})},280:function(t,e,o){"use strict";o(265)},281:function(t,e,o){var n=o(34),r=o(282),c=o(283),l=n(!1),d=r(c);l.push([t.i,".intro[data-v-6a167c35]{height:300px;position:relative;padding:30px;background-image:url("+d+");background-position:50%;background-size:cover}.intro[data-v-6a167c35],.intro h1[data-v-6a167c35]{box-sizing:border-box}.intro h1[data-v-6a167c35]{position:absolute;top:10%;left:5%;width:90%;font-size:1.5rem;color:#000;background-color:#d3d3d3;padding:10px;border-radius:10px;box-shadow:3px 3px 3px #000;border:1px solid #000}@media (min-width:768px){.intro h1[data-v-6a167c35]{font-size:2rem}}.featured-posts[data-v-6a167c35]{display:flex;padding:20px;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center}",""]),t.exports=l},282:function(t,e,o){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},283:function(t,e,o){t.exports=o.p+"img/main-page-bg.d3d2664.png"},290:function(t,e,o){"use strict";o.r(e);var n={components:{PostList:o(256).default}},r=(o(280),o(14)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home-page"},[t._m(0),t._v(" "),o("PostList")],1)}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"intro"},[o("h1",[t._v("Get the latest tech news!")])])}],!1,null,"6a167c35",null);e.default=component.exports}}]);