(window.webpackJsonp=window.webpackJsonp||[]).push([[9,12],{275:function(e,t){var o='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M18 6 6 18M6 6l12 12" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px"/></svg>';e.exports=o,t.default=o},295:function(e,t){var o='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:2"><path style="fill:none" d="M0 0h24v24H0z"/><path d="M12 81v14" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px" transform="translate(0 -76)"/><path d="M12 81v14" style="fill:none;fill-rule:nonzero;stroke:#fff;stroke-width:2px" transform="rotate(-90 -26 50)"/><path d="M12 81v14" style="fill:none;stroke:#fff;stroke-width:2px" transform="translate(0 -76)"/></svg>';e.exports=o,t.default=o},362:function(e,t,o){"use strict";o.r(t);var n=o(490),r=o.n(n),l=(o(491),{props:["src","mime","content","resizeImage","type"],data:function(){return{cropper:{},dataURL:null,blobData:null,image:{}}},methods:{cropPhoto:function(){var e=this,t=this,canvas=this.cropper.getCroppedCanvas(),o=canvas.toDataURL(this.mime);this.content[this.type].url=o,this.content[this.type].mime=this.mime,canvas.toBlob((function(o){t.content[t.type].blob=new File([o],"photo",{type:e.mime}),t.resizeImage(t.type,t.mime),t.$emit("closeCropper")}),this.mime,.8)}},mounted:function(){this.image=this.$refs.image,this.cropper=new r.a(this.image,{zoomable:!1,scalable:!1,aspectRatio:"photo"==this.type?1:1.5,autoCropArea:1,responsive:!0,viewMode:2,highlight:!1,rotatable:!0})}}),c=o(78),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex justify-center fixed top-0 left-0 right-0 bottom-0 items-center z-30 bg-black bg-opacity-80",attrs:{id:"notificationContainer"}},[t("div",{staticClass:"flex flex-col items-center notification content bg-gray-800 text-gray-100 rounded relative z-50 max-w-sm mx-4 p-2"},[t("div",{staticClass:"mb-2 max-w-sm max-h-80"},[t("img",{ref:"image",attrs:{src:e.src}})]),e._v(" "),t("div",{staticClass:"flex"},[t("button",{staticClass:"p-3 font-extrabold rounded tracking-wide focus:outline-none select-none bg-gray-700 mr-2 hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200",on:{click:function(t){return e.$emit("closeCropper")}}},[e._v("\n        Cancel\n      ")]),e._v(" "),t("button",{staticClass:"font-extrabold leading-none tracking-wide select-none shrink-0 p-3 text-white bg-emerald-600 rounded hover:bg-emerald-500 focus:bg-emerald-500 transition-colors duration-200 focus:outline-none",on:{click:e.cropPhoto}},[e._v("\n        Crop photo\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports},530:function(e,t,o){"use strict";o.r(t);o(32),o(44),o(24),o(197);var n={props:["content","type","label","description","resizeImage","showAlert"],data:function(){return{dragOver:!1,showCropper:!1,tempURL:null,mime:null,filetype:null}},computed:{imageAttached:function(){return!!this.content[this.type].url}},methods:{closeCropper:function(){this.showCropper=!1},attachFile:function(e,t,o){o?(this.fileLoaded(e,t,!0),this.dragOver=!1):this.$refs["import".concat(t)].click()},fileLoaded:function(e,t,o){if(o&&e.dataTransfer.files.length||!o&&e.target.files.length){var n=o?e.dataTransfer.files[0]:e.target.files[0],r=n.type;"logo"!=t&&"cover"!=t||!n.type.match(/image\/(svg\+xml|png|jpeg|gif|webp)/)?n.type.match(/image\/(png|jpeg|gif|webp)/)?this.imageLoaded(n,t,r):"logo"==t||"cover"==t?this.showAlert("Unsupported file format.\nOnly jpeg, png, webp, gif and svg file can be attached."):this.showAlert("Unsupported file format.\nOnly jpeg, png, webp and gif file can be attached."):this.imageLoaded(n,t,r)}},imageLoaded:function(e,t,o){var n=this;console.log(t,o);var r=new FileReader;r.onload=function(r){var l=r.target.result,c=l.split(",")[0].split(":")[1].split("/")[1].match(/^\w+/g)[0];"logo"==t||o.match(/svg|gif|webp/)?(n.content[t]={url:l,blob:e,ext:c,mime:o,resized:e},o.match(/svg|gif|webp/)||n.resizeImage(t,o)):(n.content[t].ext=c,n.filetype=t,n.mime=o,n.tempURL=l,n.showCropper=!0)},r.readAsDataURL(e)}}},r=o(78),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex mt-6"},[t("transition",{attrs:{name:"list"}},[e.showCropper?t("Cropper",{attrs:{src:e.tempURL,content:e.content,mime:e.mime,type:e.filetype,resizeImage:e.resizeImage},on:{closeCropper:e.closeCropper}}):e._e()],1),e._v(" "),t("div",{staticClass:"flex flex-wrap items-center"},[e.imageAttached?t("img",{staticClass:"w-12 h-12 rounded object-contain",attrs:{src:e.content[e.type].url,title:"".concat("logo"==e.type?"Brand logo":"photo"==e.type?"Card holder's photo":"Cover image")}}):e._e(),e._v(" "),e.imageAttached?e._e():t("button",{staticClass:"p-3 rounded bg-gray-700 cursor-pointer hover:bg-gray-600 focus:bg-gray-600 transition-colors duration-200 focus:outline-none",class:e.dragOver?"bg-gray-900 outline-white":"bg-gray-700 border-none",attrs:{"aria-label":e.label},on:{click:function(t){return e.attachFile(null,e.type,!1)},drop:function(t){return t.preventDefault(),e.attachFile(t,e.type,!0)},dragleave:function(t){if(t.preventDefault(),t.target!==t.currentTarget)return null;e.dragOver=!1},dragover:function(t){if(t.preventDefault(),t.target!==t.currentTarget)return null;e.dragOver=!0}}},[t("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"import".concat(e.type),attrs:{type:"file",accept:".png,.jpg,.jpeg,.gif,.webp".concat("logo"==e.type||"cover"==e.type?",.svg":"")},on:{change:function(t){return e.fileLoaded(t,e.type,!1)},click:function(e){e.target.files=null}}}),e._v(" "),t("div",{staticClass:"w-6 h-6 pointer-events-none",domProps:{innerHTML:e._s(o(295))}})]),e._v(" "),e.imageAttached?t("button",{staticClass:"p-1 m-2 shrink-0 focus:outline-none rounded hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200",attrs:{"aria-label":"Remove ".concat(e.type),title:"Remove ".concat(e.type)},on:{click:function(t){e.content[e.type].url=null}}},[t("div",{staticClass:"w-6 h-6",domProps:{innerHTML:e._s(o(275))}})]):t("p",{staticClass:"ml-3 leading-none"},[e._v("\n      "+e._s(e.label)),t("span",{staticClass:"text-sm text-gray-400"},[t("br"),e._v(e._s(e.description))])])])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Cropper:o(362).default})}}]);