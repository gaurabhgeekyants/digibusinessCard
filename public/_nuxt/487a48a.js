(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{296:function(e,t){var r='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M34 138a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0v-12Z" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px" transform="translate(-28 -132)"/><path d="M34 138a2 2 0 1 1 4 0v12a2 2 0 1 1-4 0v-12Z" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px" transform="translate(-20 -132)"/></svg>';e.exports=r,t.default=r},297:function(e,t){var r='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M7 6.663a1.998 1.998 0 0 1 3.082-1.682l8.301 5.337a2 2 0 0 1 0 3.364l-8.301 5.337A1.998 1.998 0 0 1 7 17.337V6.663Z" style="fill:none;stroke:#fff;stroke-width:2px"/></svg>';e.exports=r,t.default=r},332:function(e,t,r){"use strict";r.r(t);r(106),r(134),r(15),r(109);var o={props:["media","type","colors","PreviewMode","togglePlay"],methods:{getTitle:function(e){return e.toLowerCase().split(" ").join("_")},setProgress:function(e){var t=this.$refs.mediaSource,time=t.duration*(e.target.value/100);t.currentTime=time},updateSeek:function(){var e=this.$refs.mediaSource,t=e.currentTime,r=this.$refs.seekbar,o=this.$refs.bubble,l=100/e.duration*t;r.value=l;var n=Math.floor(t/60),s=Math.floor(t%60);n.toString().length<2&&(n="0"+n),s.toString().length<2&&(s="0"+s),o.value=n+":"+s,100==l&&(this.isPlaying=!1,r.value=0,this.$refs.play.style.display="block",this.$refs.pause.style.display="none")}},mounted:function(){this.$refs.pCtrl.style.display="flex"}},l=r(78),component=Object(l.a)(o,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mediaC"},[t("video",{directives:[{name:"show",rawName:"v-show",value:"video"==e.type,expression:"type == 'video'"}],ref:"mediaSource",staticClass:"source",style:{pointerEvents:e.PreviewMode?"none":"auto"},attrs:{controlsList:"nodownload nofullscreen noremoteplayback",disablePictureInPicture:"",controls:!e.PreviewMode,preload:"metadata"},on:{timeupdate:function(t){return e.updateSeek()}}},[t("source",{attrs:{src:e.PreviewMode?e.media.dataURI+"#t=0.2":"./media/".concat(e.getTitle(e.media.title),".").concat(e.media.ext)}})]),e._v(" "),"music"==e.type&&e.media.coverDataURI?t("img",{attrs:{src:e.PreviewMode?e.media.coverDataURI:"./media/".concat(e.getTitle(e.media.title),".").concat(e.media.coverExt),alt:"cover"}}):e._e(),e._v(" "),t("div",{staticClass:"controls cardColor"},[t("p",{staticClass:"title"},[e._v("\n      "+e._s(e.media.title)+"\n    ")]),e._v(" "),e.media.artist?t("p",{staticClass:"sub"},[t("span",[e._v(e._s(e.media.artist))]),e._v(" "),e.media.album?t("span",[e._v(" - "+e._s(e.media.album))]):e._e()]):e._e(),e._v(" "),t("div",{ref:"pCtrl",staticClass:"pCtrl",style:{display:e.PreviewMode?"flex":"none"}},[t("output",{ref:"bubble",staticClass:"currentTime sub"},[e._v("00:00")]),e._v(" "),t("a",{staticClass:"playPause",style:{backgroundColor:"".concat(e.colors.buttonBg.color)},on:{click:function(t){return e.togglePlay(e.$refs.mediaSource)}}},[t("div",{ref:"play",staticClass:"icon play iconColor",domProps:{innerHTML:e._s(r(297))}}),e._v(" "),t("div",{ref:"pause",staticClass:"icon pause iconColor",domProps:{innerHTML:e._s(r(296))}})]),e._v(" "),t("input",{ref:"seekbar",staticClass:"seekBar seekbarColor",attrs:{type:"range",value:"0"},on:{change:function(t){return e.setProgress(t)}}})])])])}),[],!1,null,null,null);t.default=component.exports}}]);