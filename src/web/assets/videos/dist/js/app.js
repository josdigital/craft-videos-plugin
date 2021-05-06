(function(e){function t(t){for(var o,a,s=t[0],l=t[1],d=t[2],u=0,v=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&v.push(n[a][0]),n[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);c&&c(t);while(v.length)v.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],o=!0,s=1;s<i.length;s++){var l=i[s];0!==n[l]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=i[0]))}return e}var o={},n={app:0},r=[];function a(t){if(o[t])return o[t].exports;var i=o[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=o,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(i,o,function(t){return e[t]}.bind(null,o));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="https://localhost:8090/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=l;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"08a6":function(e,t,i){},"3c24":function(e,t,i){"use strict";i("08a6")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("8bbf"),n=i.n(o),r={methods:{getCollectionUniqueKey:function(e,t,i){return e+":"+t+":"+i},t:function(e,t,i){return Craft.t(e,t,i)}}},a=i("5880"),s=i.n(a),l=i("9675"),d=i.n(l),c=(i("7db0"),i("cebe")),u=i.n(c),v={getGateways:function(){return u.a.get(Craft.getActionUrl("videos/vue/get-gateways"),{headers:{"X-CSRF-Token":Craft.csrfTokenValue}})},getVideos:function(e,t,i){var o={gateway:e,method:t};return i&&(o.options=i),u.a.post(Craft.getActionUrl("videos/vue/get-videos"),o,{headers:{"X-CSRF-Token":Craft.csrfTokenValue}})},getVideo:function(e){var t={url:e};return u.a.post(Craft.getActionUrl("videos/vue/get-video"),t,{headers:{"X-CSRF-Token":Craft.csrfTokenValue}})},getVideoEmbedHtml:function(e){var t={gateway:e.gatewayHandle,videoId:e.id};return u.a.post(Craft.getActionUrl("videos/vue/get-video-embed-html"),t,{headers:{"X-CSRF-Token":Craft.csrfTokenValue}})}},p={strict:!0,state:{videosLoading:!1,gateways:[],currentGatewayHandle:null,selectedCollection:null,selectedVideo:null,playingVideo:null,videos:[],videoUrl:null},getters:{currentGateway:function(e){return e?e.gateways.find((function(t){return t.handle===e.currentGatewayHandle})):null}},actions:{displayError:function(e,t){Craft.cp.displayError(t)},displayNotice:function(e,t){Craft.cp.displayNotice(t)},getGateways:function(e){var t=e.commit;return v.getGateways().then((function(e){t("updateGateways",e)}))},getVideos:function(e,t){var i=e.commit,o=t.gateway,n=t.method,r=t.options;return i("updateVideosLoading",!0),v.getVideos(o,n,r).then((function(e){i("updateVideosLoading",!1),i("updateVideos",{videos:e.data.videos,videosMore:e.data.videosMore,videosToken:e.data.videosToken})})).catch((function(e){throw i("updateVideosLoading",!1),i("updateVideos",{videos:[],videosMore:null,videosToken:null}),e}))},selectVideo:function(e,t){var i=e.commit;i("updateSelectedVideo",t)},updateVideoUrlWithSelectedVideo:function(e){var t=e.commit,i=e.state;if(!i.selectedVideo)return!1;t("updateVideoUrl",i.selectedVideo.url)}},mutations:{updateVideos:function(e,t){var i=t.videos,o=t.videosMore,n=t.videosToken;e.videos=i,e.videosMore=o,e.videosToken=n},updateGateways:function(e,t){e.gateways=t.data},updateCurrentGatewayHandle:function(e,t){e.currentGatewayHandle=t},updateVideosLoading:function(e,t){e.videosLoading=t},updateSelectedCollection:function(e,t){e.selectedCollection=t},updateSelectedVideo:function(e,t){e.selectedVideo=t},updatePlayingVideo:function(e,t){e.playingVideo=t},updateVideoUrl:function(e,t){e.videoUrl=t}}};n.a.use(s.a);var f=function(){return new s.a.Store(d()(p))},h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"h-full",attrs:{id:"videos"}},[i("div",{staticClass:"body",class:{"has-sidebar":!e.loading,"flex justify-center":e.loading}},[i("div",{class:{"content has-sidebar":!e.loading,"":e.loading}},[e.loading?[i("div",{staticClass:"spinner"})]:[i("sidebar"),i("div",{staticClass:"main"},[i("search",{staticClass:"mb-6"}),e.videosLoading?[i("div",{staticClass:"spinner"})]:[i("videos",{attrs:{videos:e.videos}})]],2)]],2)])])},m=[],w=i("5530"),y=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"sidebar"},[i("div",{staticClass:"px-2"},[i("div",{staticClass:"select fullwidth"},[i("select",{directives:[{name:"model",rawName:"v-model",value:e.currentGatewayHandle,expression:"currentGatewayHandle"}],on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.currentGatewayHandle=t.target.multiple?i:i[0]}}},e._l(e.gateways,(function(t,o){return i("option",{key:"gateway-"+o,domProps:{value:t.handle}},[e._v(e._s(t.name))])})),0)])]),i("nav",[i("ul",[e.currentGateway?[e._l(e.currentGateway.sections,(function(t,o){return[i("li",{key:"section-"+o,staticClass:"heading"},[i("span",[e._v(e._s(t.name))])]),e._l(t.collections,(function(t,n){return[i("li",{key:"collection-"+o+"-"+n},[i("a",{class:{sel:e.isCollectionSelected(o,n)},attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),e.handleCollectionClick(o,n,t)}}},[e._v(e._s(t.name))])])]}))]}))]:e._e()],2)])])},g=[],V={computed:Object(w["a"])(Object(w["a"])(Object(w["a"])({},Object(a["mapState"])({gateways:function(e){return e.gateways},selectedCollection:function(e){return e.selectedCollection}})),Object(a["mapGetters"])(["currentGateway"])),{},{currentGatewayHandle:{get:function(){return this.$store.state.currentGatewayHandle},set:function(e){this.$store.commit("updateCurrentGatewayHandle",e)}}}),methods:{handleCollectionClick:function(e,t,i){var o=this,n=this.getCollectionUniqueKey(this.currentGatewayHandle,e,t);this.$store.commit("updateSelectedCollection",n),this.$store.dispatch("getVideos",{gateway:this.currentGatewayHandle,method:i.method,options:i.options}).catch((function(){o.$store.dispatch("displayError","Couldn’t get videos.")}))},isCollectionSelected:function(e,t){return this.selectedCollection===this.getCollectionUniqueKey(this.currentGatewayHandle,e,t)}}},b=V,C=i("2877"),_=Object(C["a"])(b,y,g,!1,null,null,null),S=_.exports,x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.currentGateway?i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"text fullwidth",attrs:{type:"search",placeholder:e.t("videos","Search {gateway} videos…",{gateway:e.currentGateway.name})},domProps:{value:e.query},on:{input:[function(t){t.target.composing||(e.query=t.target.value)},e.debouncedSearch],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.search(t)}}})]):e._e()},k=[],O=(i("ac1f"),i("841c"),i("f7fe")),j=i.n(O),G={data:function(){return{query:""}},computed:Object(w["a"])(Object(w["a"])({},Object(a["mapGetters"])(["currentGateway"])),{},{debouncedSearch:function(){var e=this;return j()((function(){e.search()}),1e3)}}),methods:{search:function(){var e=this;this.debouncedSearch.cancel(),this.$store.commit("updateSelectedCollection",null),this.$store.dispatch("getVideos",{gateway:this.currentGateway.handle,method:"search",options:{q:this.query}}).catch((function(){e.$store.dispatch("displayError","Couldn’t get videos.")}))}}},E=G,U=Object(C["a"])(E,x,k,!1,null,null,null),M=U.exports,T=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"w-full grid grid-cols-3 grid gap-4"},[e._l(e.videos,(function(e,t){return[i("video-card",{key:"video-"+t,attrs:{video:e}})]}))],2)},H=[],L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"group",on:{click:function(t){return e.selectVideo(e.video)},dblclick:function(t){return e.useVideo(e.video)}}},[i("thumb",{attrs:{selected:e.isVideoSelected,url:e.video.thumbnail,duration:e.video.duration},on:{playVideo:function(t){return e.play(e.video)}}}),i("div",{staticClass:"mt-2 flex flex-row flex-nowrap items-center"},[e.video.private?[i("svg",{staticClass:"h-4 w-4 mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[i("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"}})])]:e._e(),i("div",{staticClass:"flex-1 line-clamp-2"},[e._v(e._s(e.video.title))])],2)],1)},B=[],P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"videos-thumb",class:{"ring ring-red-500 ring-opacity-80":e.selected}},[i("div",{staticClass:"videos-thumb-image-container"},[i("div",{staticClass:"videos-thumb-image",style:"background-image: url("+e.url+")"})]),i("div",{staticClass:"duration"},[e._v(" "+e._s(e.duration)+" ")]),i("div",{staticClass:"play",on:{click:function(t){return t.preventDefault(),e.$emit("playVideo")}}})])},q=[],A={props:{url:{type:String,default:null},duration:{type:String,default:null},selected:{type:Boolean,default:!1}}},N=A,R=Object(C["a"])(N,P,q,!1,null,null,null),F=R.exports,W={components:{Thumb:F},props:{video:{type:Object}},computed:{isVideoSelected:function(){return!!this.$store.state.selectedVideo&&this.$store.state.selectedVideo.id===this.video.id}},methods:Object(w["a"])(Object(w["a"])({},Object(a["mapActions"])(["selectVideo","updateVideoUrlWithSelectedVideo"])),{},{play:function(e){this.$root.eventBus.$emit("playVideo",{video:e})},useVideo:function(e){this.selectVideo(e),this.updateVideoUrlWithSelectedVideo(),this.$root.eventBus.$emit("useSelectedVideo")}})},z=W,D=Object(C["a"])(z,L,B,!1,null,null,null),K=D.exports,X={components:{VideoCard:K},props:{videos:{type:Array}}},J=X,I=Object(C["a"])(J,T,H,!1,null,null,null),Y=I.exports,Q={name:"videos-app",components:{Sidebar:S,Search:M,Videos:Y},data:function(){return{loading:!1}},computed:Object(w["a"])({},Object(a["mapState"])({currentGatewayHandle:function(e){return e.currentGatewayHandle},gateways:function(e){return e.gateways},videos:function(e){return e.videos},videosLoading:function(e){return e.videosLoading}})),mounted:function(){var e=this;this.loading=!0,this.$store.dispatch("getGateways").then((function(){if(e.loading=!1,e.gateways.length>0){var t=e.gateways[0];e.$store.commit("updateCurrentGatewayHandle",t.handle);var i=t.sections[0].collections[0],o=e.getCollectionUniqueKey(t.handle,0,0);e.$store.commit("updateSelectedCollection",o),e.$store.dispatch("getVideos",{gateway:t.handle,method:i.method,options:i.options}).catch((function(){e.$store.dispatch("displayError","Couldn’t get videos.")}))}}))}},Z=Q,ee=Object(C["a"])(Z,h,m,!1,null,null,null),te=ee.exports,ie=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"modal",staticClass:"videos-player-modal modal"},[i("div",{staticClass:"videos-player bg-black h-full"},[i("div",{domProps:{innerHTML:e._s(e.embed)}})])])},oe=[],ne={data:function(){return{modal:null,embed:null}},mounted:function(){var e=this,t=this.$root.video;v.getVideoEmbedHtml(t).then((function(t){e.embed=t.data.html})),this.modal=new Garnish.Modal(this.$refs.modal,{resizable:!1,onHide:function(){this.$emit("hide")}.bind(this)})},destroyed:function(){this.modal.$shade[0].remove(),this.$el.remove()}},re=ne,ae=(i("3c24"),Object(C["a"])(re,ie,oe,!1,null,null,null)),se=ae.exports,le=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"relative"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.videoUrl,expression:"videoUrl"}],staticClass:"text fullwidth",attrs:{name:e.inputName,placeholder:e.t("videos","Enter a video URL from YouTube or Vimeo")},domProps:{value:e.videoUrl},on:{input:[function(t){t.target.composing||(e.videoUrl=t.target.value)},function(t){return e.preview()}]}}),i("a",{staticClass:"absolute top-2.5 right-4 text-xs",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.browse()}}},[e._v(e._s(e.t("videos","Browse videos…")))])]),e.previewLoading?[i("div",{staticClass:"spinner mt-2"})]:[e.previewError?i("p",{staticClass:"error"},[e._v(e._s(e.previewError))]):e._e(),i("preview",{staticClass:"mt-4",attrs:{previewVideo:e.previewVideo,previewError:e.previewError},on:{playVideo:e.playVideo,removeVideo:function(t){return e.removeVideo()}}})]],2)},de=[],ce=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.previewVideo&&!e.previewError?i("div",{staticClass:"preview flex flex-nowrap items-start"},[i("div",{staticClass:"flex-shrink-0"},[i("thumb",{staticClass:"pt-0 w-44",attrs:{url:e.previewVideo.thumbnail,duration:e.previewVideo.duration},on:{playVideo:function(t){return e.$emit("playVideo",e.previewVideo)}}})],1),i("div",{staticClass:"ml-2 flex-shrink max-w-sm min-w-0"},[i("div",{staticClass:"line-clamp-2"},[i("strong",[e._v(e._s(e.previewVideo.title))])]),i("ul",[i("li",{staticClass:"truncate block"},[i("a",{attrs:{href:e.previewVideo.url}},[e._v(e._s(e.previewVideo.url))])]),i("li",{staticClass:"truncate block"},[i("a",{staticClass:"light",attrs:{"h:ref":"previewVideo.authorUrl"}},[e._v(e._s(e.previewVideo.authorName))])]),i("li",{staticClass:"truncate block"},[e._v(" "+e._s(e.t("videos","{plays} plays",{plays:e.previewVideo.plays}))+" ")]),i("li",{staticClass:"truncate block"},[i("a",{on:{click:function(t){return t.preventDefault(),e.$emit("removeVideo")}}},[e._v(e._s(e.t("videos","Remove")))])])])])]):e._e()},ue=[],ve={components:{Thumb:F},props:{previewVideo:{type:Object,default:null},previewError:{type:String,default:""}}},pe=ve,fe=Object(C["a"])(pe,ce,ue,!1,null,null,null),he=fe.exports,me={components:{Preview:he},data:function(){return{eventBus:new n.a,previewVideo:null,previewLoading:!1,previewError:null,videoSelectorModal:null,playerModal:null,fieldVariables:null}},computed:{videoUrl:{get:function(){return this.$store.state.videoUrl},set:function(e){this.$store.commit("updateVideoUrl",e)}},inputName:function(){return this.fieldVariables?this.fieldVariables.namespaceName:null}},methods:{browse:function(){var e=this,t=$('<div class="videoselectormodal modal elementselectormodal"></div>').appendTo(Garnish.$bod),i=$('<div class="new-explorer-container"/>').appendTo(t),o=$('<div class="footer"/>').appendTo(t),n=$("<div/>").appendTo(o);this.videoSelectorModal=new Garnish.Modal(t,{visible:!1,resizable:!1}),this.$nextTick((function(){var t={store:e.$store,data:{eventBus:e.eventBus}};new VideoExplorerConstructor(t).$mount(i.get(0)),new VideoSelectorActionsConstructor(t).$mount(n.get(0))}))},preview:j()((function(){var e=this;if(!this.videoUrl)return this.previewLoading=!1,this.previewVideo=null,this.previewError=null,null;this.previewLoading=!0,this.previewError=null,v.getVideo(this.videoUrl).then((function(t){t.data.error&&(e.previewLoading=!1,e.previewVideo=null,e.previewError=t.data.error),e.previewLoading=!1,e.previewVideo=t.data}))}),1e3),playVideo:function(e){this.eventBus.$emit("playVideo",{video:e})},removeVideo:function(){this.videoUrl=null,this.previewVideo=null}},mounted:function(){var e=this;this.eventBus.$on("useSelectedVideo",(function(){e.videoSelectorModal.hide(),e.preview()})),this.eventBus.$on("cancel",(function(){e.videoSelectorModal.hide()})),this.eventBus.$on("playVideo",(function(t){var i=t.video;e.videoSelectorModal&&e.videoSelectorModal.hide();var o=$('<div class="videos-player-modal modal"></div>').appendTo(Garnish.$bod),n={data:function(){return{eventBus:this.eventBus,video:i}}};e.playerModal=new VideoPlayerConstructor(n).$mount(o.get(0)),e.playerModal.$children[0].$on("hide",(function(){e.videoSelectorModal&&e.videoSelectorModal.show(),e.playerModal.$destroy(),e.playerModal=null}))})),this.$root.fieldVariables&&(this.fieldVariables=this.$root.fieldVariables,this.fieldVariables.value&&(this.$store.commit("updateVideoUrl",this.fieldVariables.value.url),this.previewVideo=this.fieldVariables.value))}},we=me,ye=Object(C["a"])(we,le,de,!1,null,null,null),ge=ye.exports,Ve=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"buttons right"},[i("div",{staticClass:"btn",on:{click:function(t){return e.cancel()}}},[e._v(e._s(e.t("videos","Cancel")))]),i("div",{staticClass:"btn submit",class:{disabled:!e.hasSelectedVideo},on:{click:function(t){return e.useSelectedVideo()}}},[e._v(e._s(e.t("videos","Select")))])])])},be=[],Ce={computed:{hasSelectedVideo:function(){return this.$store.state.selectedVideo}},methods:Object(w["a"])(Object(w["a"])({},Object(a["mapActions"])(["updateVideoUrlWithSelectedVideo"])),{},{useSelectedVideo:function(){this.updateVideoUrlWithSelectedVideo(),this.$root.eventBus.$emit("useSelectedVideo")},cancel:function(){this.$root.eventBus.$emit("cancel")}})},$e=Ce,_e=Object(C["a"])($e,Ve,be,!1,null,null,null),Se=_e.exports;i("b9e3");n.a.config.productionTip=!1,n.a.mixin(r),window.VideoExplorerConstructor=n.a.extend({render:function(e){return e(te)},store:f()}),window.VideoFieldConstructor=n.a.extend({render:function(e){return e(ge)},created:function(){this.$store=f()}}),window.VideoSelectorActionsConstructor=n.a.extend({render:function(e){return e(Se)}}),window.VideoPlayerConstructor=n.a.extend({render:function(e){return e(se)}})},5880:function(e,t){e.exports=Vuex},"8bbf":function(e,t){e.exports=Vue},b9e3:function(e,t,i){},cebe:function(e,t){e.exports=axios}});
//# sourceMappingURL=app.js.map