webpackJsonp([1],{"+S+0":function(t,i,e){t.exports=e.p+"static/img/border.d743f85.png"},"+k9J":function(t,i,e){t.exports=e.p+"static/media/luckDraw.731a7a5.mp3"},ExNV:function(t,i,e){t.exports=e.p+"static/img/borderBottom.68b8420.png"},JOKS:function(t,i,e){t.exports=e.p+"static/img/borderTop.5b5340d.png"},M5qh:function(t,i,e){t.exports=e.p+"static/img/prizeImg.b81912f.png"},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e("7+uW"),n={name:"App",data:function(){return{horizontalScreenHintShow:!1}},mounted:function(){this.changeOrientation(),this.changeResize()},methods:{changeOrientation:function(){var t=this;document.documentElement.clientWidth>document.documentElement.clientHeight&&(t.horizontalScreenHintShow=!0);var i="onorientationchange"in window?"orientationchange":"resize";window.addEventListener(i,function(){t.changeResize(),setTimeout(function(){var i=document.documentElement.clientWidth,e=document.documentElement.clientHeight;t.horizontalScreenHintShow=i>e},300)},!1)},changeResize:function(){var t=document.documentElement,i=window.screen.width>window.screen.height?window.screen.height:window.screen.width,e=Math.min(i,768);e&&(t.style.fontSize=e/750*100+"px",console.log(t.style.fontSize))}}},a={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view"),this._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:this.horizontalScreenHintShow,expression:"horizontalScreenHintShow"}],staticClass:"horizontalScreenHint"},[this._m(0)])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"horizontalScreenHintDiv"},[i("img",{attrs:{src:e("OCxj")}}),this._v(" "),i("p",[this._v("为了更好的体验,为了开发的幸福,为了世界的和平,请各位大帅哥小姐姐锁定竖屏观看及操作本页面")])])}]};var s=e("VU/8")(n,a,!1,function(t){e("fZ8r")},null,null).exports,h=e("/ocq"),u=e("7t+N"),r=e.n(u),c=e("i2Qd"),d=e.n(c),g={name:"guaguaka-ui",components:{},data:function(){return{prizeCurtain:"",ctx:"",ismousedown:!1,scratchPrizeShow:!1,dotPosition:null,isSuccess:!0,touchSpotPositionY:"",touchSpotPositionX:"",touchSpotSizeNb:"",canvasShow:!0,itemDivId:{guaguaka:"",prizeCurtainImg:"",prizeImg:"",touchSpot:"",canvas:""},id:null,touchSpotShow:!1,touchSpotImg:"https://i.loli.net/2019/01/17/5c3fef16bbd5a.png",isTouch:!1,curtainHide:!0,curtainImg:d.a,prizeImg:"https://i.loli.net/2019/01/17/5c3fef16bc433.png",visibleArea:50,touchSpotSize:"20px",guaguaka_width:"246px",guaguaka_height:"132px",touchSpotImgWidth:"20px",touchSpotImgHeight:"20px",touchSpotPosition:"0.5 0.5"}},props:{guaguakaConfig:{type:Object,required:!0,default:function(){return{}}}},mounted:function(){this.setGuaguaka(this.guaguakaConfig)},methods:{setGuaguaka:function(t){var i=this;if(this.scratchPrizeShow=!1,t){if(!t.id&&null===this.id){var e=new Error("请设置刮刮卡所在div的id");return console.log(e),"请设置刮刮卡所在div的id"}var o=document.documentElement.style.fontSize.split("px")[0];this.touchSpotImg=t.touchSpotImg?t.touchSpotImg:this.touchSpotImg,this.curtainImg=t.curtainImg?t.curtainImg:this.curtainImg,this.prizeImg=t.prizeImg?t.prizeImg:this.prizeImg,this.touchSpotShow=t.touchSpotShow?t.touchSpotShow:this.touchSpotShow,this.visibleArea=t.visibleArea?t.visibleArea:this.visibleArea,this.curtainHide=!!t.curtainHide,this.touchSpotSize=t.touchSpotSize?t.touchSpotSize:this.touchSpotSize,this.guaguaka_width=t.width?t.width:this.guaguaka_width,t.width&&t.width.indexOf("rem")>-1&&(this.guaguaka_width=t.width.split("rem")[0]*o+"px"),this.guaguaka_height=t.height?t.height:this.guaguaka_height,t.height&&t.height.indexOf("rem")>-1&&(this.guaguaka_height=t.height.split("rem")[0]*o+"px"),this.touchSpotImgWidth=t.touchSpotImgWidth?t.touchSpotImgWidth:this.touchSpotImgWidth,this.touchSpotImgHeight=t.touchSpotImgHeight?t.touchSpotImgHeight:this.touchSpotImgHeight,this.touchSpotPosition=t.touchSpotPosition?t.touchSpotPosition:this.touchSpotPosition,this.isTouch=t.isTouch?t.isTouch:this.isTouch,this.id=t.id?t.id:this.id}this.touchSpotPositionX=this.touchSpotPosition.split(" ")[0],this.touchSpotPositionY=this.touchSpotPosition.split(" ")[1],r()("#"+this.id).find(".guaguaka").attr("id",this.id+"_guaguaka"),r()("#"+this.id).find(".prizeCurtainImg").attr("id",this.id+"_prizeCurtainImg"),r()("#"+this.id).find(".prizeImg").attr("id",this.id+"_prizeImg"),r()("#"+this.id).find(".canvas").attr("id",this.id+"_canvas"),this.touchSpotShow&&r()("#"+this.id).find(".touchSpot").attr("id",this.id+"_touchSpot"),this.itemDivId={guaguakaId:this.id+"_guaguaka",prizeCurtainImgId:this.id+"_prizeCurtainImg",prizeImgId:this.id+"_prizeImg",touchSpotId:this.id+"_touchSpot",canvasId:this.id+"_canvas"},r()("#"+this.itemDivId.prizeCurtainImgId).attr("src",this.curtainImg),r()("#"+this.itemDivId.prizeImgId).attr("src",this.prizeImg);var n=setInterval(function(){var t=0;r()("#"+i.itemDivId.guaguakaId).find(".loadImg").each(function(){0!==this.height&&t++}),2===t&&(i.init(),window.clearInterval(n))},300)},init:function(){this.prizeCurtain=document.getElementById(this.itemDivId.canvasId),this.prizeCurtain.width=this.prizeCurtain.clientWidth,this.prizeCurtain.height=this.prizeCurtain.clientHeight,this.ctx=this.prizeCurtain.getContext("2d"),this.prizeCurtain.addEventListener("mousemove",this.canvasEventMove,!0),this.prizeCurtain.addEventListener("mousedown",this.canvasEventDown,!0),this.prizeCurtain.addEventListener("touchstart",this.canvasEventDown,!1),this.prizeCurtain.addEventListener("touchmove",this.canvasEventMove,!1),this.prizeCurtain.addEventListener("touchend",this.canvasEventUp,!1),document.addEventListener("mouseup",this.canvasEventUp,!0),this.ctx.globalCompositeOperation="source-over",this.setPrizeCurtain()},setPrizeCurtain:function(){this.ctx.globalCompositeOperation="source-over";var t=document.getElementById(this.itemDivId.prizeCurtainImgId);this.ctx.drawImage(t,0,0,this.prizeCurtain.width,this.prizeCurtain.height),this.ctx.globalCompositeOperation="destination-out",this.isSuccess=!1,this.scratchPrizeShow=!0,this.canvasShow=!0,this.$emit("hideLoading",this.id)},canvasEventUp:function(t){if(t.preventDefault(),!this.isSuccess){for(var i=this.ctx.getImageData(0,0,this.prizeCurtain.width,this.prizeCurtain.height),e=0,o=3;o<i.data.length;o+=4)0===i.data[o]&&e++;100*e/this.visibleArea>=i.data.length/4&&(this.curtainHide&&(this.canvasShow=!1),this.isSuccess=!0,this.$emit("success",this.id))}this.ismousedown=!1,this.dotPosition=null},canvasEventMove:function(t){if(t.preventDefault(),this.ismousedown=!0,this.ismousedown&&this.isTouch&&this.scratchPrizeShow){t.changedTouches&&(t=t.changedTouches[t.changedTouches.length-1]);var i=r()(document).scrollTop(),e=r()(document).scrollLeft(),o=r()("#"+this.itemDivId.guaguakaId).offset().left,n=r()("#"+this.itemDivId.guaguakaId).offset().top,a=(t.clientX+e||t.pageX)-o||0,s=(t.clientY+i||t.pageY)-n||0;if(r()("#"+this.itemDivId.touchSpotId).css({left:a-r()("#"+this.itemDivId.touchSpotId).width()*this.touchSpotPositionX,top:s-r()("#"+this.itemDivId.touchSpotId).height()*this.touchSpotPositionY}),null===this.dotPosition)this.dotPosition={x:a,y:s};else if(this.ctx.beginPath(),this.ctx.lineWidth=this.touchSpotSizeNb,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.moveTo(this.dotPosition.x,this.dotPosition.y),this.ctx.lineTo(a,s),this.prizeCurtain.style.display="none",this.prizeCurtain.style.display="inherit",this.ctx.stroke(),this.dotPosition={x:a,y:s},!this.isSuccess){for(var h=this.ctx.getImageData(0,0,this.prizeCurtain.width,this.prizeCurtain.height),u=0,c=3;c<h.data.length;c+=4)0===h.data[c]&&u++;this.$emit("getVisibleArea",{id:this.id,visibleArea:parseInt(u/(h.data.length/4)*100)})}}},canvasEventDown:function(t){t.preventDefault(),this.isTouch&&(this.touchSpotSizeNb=r()("#"+this.id).find(".touchSpotSizeDiv").width())},setInfo:function(t){console.log(t);var i=this;if(i.touchSpotImgWidth=t.touchSpotImgWidth?t.touchSpotImgWidth:i.touchSpotImgWidth,i.touchSpotImgHeight=t.touchSpotImgHeight?t.touchSpotImgHeight:i.touchSpotImgHeight,i.touchSpotSize=t.touchSpotSize?t.touchSpotSize:i.touchSpotSize,i.touchSpotPosition=t.touchSpotPosition?t.touchSpotPosition:i.touchSpotPosition,i.touchSpotPositionX=i.touchSpotPosition.split(" ")[0],i.touchSpotPositionY=i.touchSpotPosition.split(" ")[1],t.isTouch?i.isTouch=!0:i.isTouch=!1,t.prizeImg){i.scratchPrizeShow=!1,this.prizeImg=t.prizeImg;var e=setInterval(function(){var t=0;0!==r()("#"+i.itemDivId.prizeImgId).height&&t++,1===t&&(i.setPrizeCurtain(),window.clearInterval(e))},300)}},setResize:function(t){if(t&&t.width.indexOf("px")<0){this.prizeCurtain=document.getElementById(this.itemDivId.canvasId),this.ctx=this.prizeCurtain.getContext("2d");var i=(n=this.ctx,a=n.backingStorePixelRatio||n.webkitBackingStorePixelRatio||n.mozBackingStorePixelRatio||n.msBackingStorePixelRatio||n.oBackingStorePixelRatio||n.backingStorePixelRatio||1,(window.devicePixelRatio||1)/a),e=document.createElement("canvas");e.width=this.prizeCurtain.width*i,e.height=this.prizeCurtain.height*i,e.getContext("2d").drawImage(this.prizeCurtain,0,0,this.prizeCurtain.width,this.prizeCurtain.height,0,0,this.prizeCurtain.width*i,this.prizeCurtain.height*i);var o=document.documentElement.style.fontSize.split("px")[0];this.guaguaka_width=t.width?t.width:this.guaguaka_width,t.width&&t.width.indexOf("rem")>-1&&(this.guaguaka_width=t.width.split("rem")[0]*o+"px"),this.guaguaka_height=t.height?t.height:this.guaguaka_height,t.height&&t.height.indexOf("rem")>-1&&(this.guaguaka_height=t.height.split("rem")[0]*o+"px"),this.prizeCurtain.width=this.guaguaka_width.split("px")[0],this.prizeCurtain.height=this.guaguaka_height.split("px")[0],this.ctx.drawImage(e,0,0,e.width,e.height,0,0,this.prizeCurtain.width,this.prizeCurtain.height),this.ctx.globalCompositeOperation="source-over",this.ctx.globalCompositeOperation="destination-out"}var n,a}}},p={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("div",{staticClass:"guaguaka",style:{width:t.guaguaka_width,height:t.guaguaka_height}},[e("img",{staticClass:"loadImg prizeCurtainImg",attrs:{src:t.curtainImg,alt:"prizeCurtainImg"}}),t._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:t.scratchPrizeShow,expression:"scratchPrizeShow"}],staticClass:"loadImg prizeImg",attrs:{src:t.prizeImg,alt:"prize"}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.touchSpotShow&&t.ismousedown&&t.isTouch,expression:"touchSpotShow && ismousedown && isTouch"}],staticClass:"touchSpot",style:{width:t.touchSpotImgWidth,height:t.touchSpotImgHeight,backgroundImage:"url("+t.touchSpotImg+")"}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"touchSpotSizeDiv",style:{width:t.touchSpotSize,height:t.touchSpotSize}}),t._v(" "),e("canvas",{directives:[{name:"show",rawName:"v-show",value:t.canvasShow,expression:"canvasShow"}],staticClass:"canvas"})])])},staticRenderFns:[]};var m=e("VU/8")(g,p,!1,function(t){e("ODu3")},"data-v-c4751df6",null).exports;m.install=function(t){return t.component(m.name,m)};var l=m,v=e("M5qh"),S=e.n(v),w=e("xtOa"),f=e.n(w),I=e("PbiU"),z=e.n(I),x=e("RxiK"),C=e.n(x),k=e("wnDL"),b=e.n(k),E=e("ktTG"),D=e.n(E),P=e("xnna"),O=e.n(P),A=e("+S+0"),T=e.n(A),y=e("ExNV"),R=e.n(y),N=e("JOKS"),H=e.n(N),j=e("+k9J"),_=e.n(j),V={SoundComponent:function(t){this.profile={src:"",altSrc:"",loop:!1},t&&r.a.extend(this.profile,t),this.soundObj=null,this.isIE=!-[1],this.init()}};V.SoundComponent.prototype={init:function(){this._setSrc()},_setSrc:function(){this.soundObj?this.isIE?this.soundObj[0].src=this.profile.src:this.soundObj[0].innerHTML='<source src="'+this.profile.src+'" /> <source src="'+this.profile.altSrc+'" />':this.isIE?this.soundObj=r()('<bgsound volume="-10000" loop="1" src="'+this.profile.src+'">').appendTo("body"):this.profile.loop?this.soundObj=r()('<audio preload="auto" autobuffer loop> <source src="'+this.profile.src+'" /> <source src="'+this.profile.altSrc+'" /> </audio>').appendTo("body"):this.soundObj=r()('<audio preload="auto" autobuffer> <source src="'+this.profile.src+'" /> <source src="'+this.profile.altSrc+'" /> </audio>').appendTo("body")},setSrc:function(t,i){this.profile.src=t,void 0!==i&&(this.profile.altSrc=i),this._setSrc()},play:function(){this.soundObj&&(this.isIE?(this.soundObj[0].volume=1,this.soundObj[0].src=this.profile.src):(this.soundObj.prevObject[0].currentTime=0,this.soundObj.prevObject[0].play()))},stop:function(){this.soundObj&&(this.isIE?(this.soundObj[0].volume=1,this.soundObj[0].src=this.profile.src):this.soundObj.prevObject[0].pause())}};var L=V,J=e("pFYg"),U=e.n(J),W={preloadimages:function(t){var i=[],e=function(){};function o(t){e(t)}t="object"!==(void 0===t?"undefined":U()(t))?[t]:t;for(var n=function(e){i[e]=new Image,i[e].src=t[e],i[e].onload=function(){o({src:i[e].src,status:"success"})},i[e].onerror=function(){o({src:i[e].src,status:"err"})}},a=0;a<t.length;a++)n(a);return{done:function(t){e=t||e}}}},X=W,B={name:"index",components:{guaguaka:l},data:function(){return{windowWidth:document.documentElement.style.fontSize.split("px")[0],guaguakaConfig:{id:"caihuiDiv",width:"7.5rem",height:"12.6rem",visibleArea:60,curtainImg:f.a,curtainHide:!0,prizeImg:S.a,isTouch:!0,touchSpotShow:!0,touchSpotImg:z.a,touchSpotSize:"0.32rem",touchSpotImgWidth:"1.16rem",touchSpotImgHeight:"1.56rem",touchSpotPosition:"0.26 0.15"},loadingDivCurtain:{backgroundColor:"#FDE9D0",opacity:1},loadingValue:0,luckDrawMp3:new L.SoundComponent({src:_.a,altSrc:_.a}),animationImg:C.a,loadingDivShow:!0,loadingShow:!0,guaguakaShow:!1,animationShow:!1,endDivShow:!1}},mounted:function(){var t=this,i=0,e=[b.a,D.a,C.a,f.a,S.a,z.a,O.a,T.a,R.a,H.a];X.preloadimages(e).done(function(o){if(++i>1&&(t.loadingValue=parseInt(i/e.length*100),100===t.loadingValue)){r()("#loadingDiv").on("touchstart",function(){t.loadingShow||(t.luckDrawMp3.play(),t.luckDrawMp3.stop(),r()("#loadingDiv").attr("class","hide"),setTimeout(function(){t.luckDrawMp3.play(),t.loadingDivShow=!1},2100))});var n=document.documentElement.clientHeight>document.documentElement.clientWidth?document.documentElement.clientHeight:document.documentElement.clientWidth;t.guaguakaConfig.width=n<12.06*t.windowWidth?n/t.windowWidth/12.06*7.5+"rem":"7.5rem",t.guaguakaConfig.height=n<12.06*t.windowWidth?n/t.windowWidth+"rem":"12.06rem",t.guaguakaShow=!0}})},methods:{hideLoading:function(){var t=this;this.loadingValue=100,setTimeout(function(){t.loadingShow=!1,t.loadingDivCurtain={backgroundColor:"#000000",opacity:.8}},800)},success:function(t){var i=this;setTimeout(function(){i.setAnimation(),r()("#caihuiDiv").attr("class","hide1"),setTimeout(function(){i.guaguakaShow=!1},6500),setTimeout(function(){i.animationShow=!1},7e3),setTimeout(function(){i.endDivShow=!0,r()("#endDiv").attr("class","show")},3e3)},1500)},setAnimation:function(){this.animationShow=!0;var t=0,i=setInterval(function(){(t-=7.5)<-292.5&&(t=-292.5,clearInterval(i)),r()("#animation").css({backgroundPosition:t+"rem 0"})},150)}}},Z={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{attrs:{id:"caihui"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingDivShow,expression:"loadingDivShow"}],attrs:{id:"loadingDiv"}},[o("div",{staticClass:"curtain",style:t.loadingDivCurtain}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.loadingShow,expression:"loadingShow"}],staticClass:"loadingDiv"},[o("img",{staticClass:"logo",attrs:{src:e("wnDL")}}),t._v(" "),o("img",{staticClass:"gif",attrs:{src:e("ktTG")}}),t._v(" "),o("p",[t._v(t._s(t.loadingValue)+"%")])]),t._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:!t.loadingShow,expression:"!loadingShow"}],staticClass:"touchTips",attrs:{src:e("RB0b")}})]),t._v(" "),t.guaguakaShow?o("guaguaka",{ref:"guaguaka",attrs:{guaguakaConfig:t.guaguakaConfig,id:"caihuiDiv"},on:{success:t.success,hideLoading:t.hideLoading}}):t._e(),t._v(" "),t.animationShow?o("div",{style:{width:t.guaguakaConfig.width,height:t.guaguakaConfig.height,backgroundImage:"url("+t.animationImg+")"},attrs:{id:"animation"}}):t._e(),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.endDivShow,expression:"endDivShow"}],attrs:{id:"endDiv"}},[o("div",{staticClass:"bordertop border"}),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"borderBottom border"})])],1)},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"borderContent"},[i("img",{attrs:{src:e("xnna")}})])}]};var M=e("VU/8")(B,Z,!1,function(t){e("t9//")},"data-v-6bb9fa4e",null).exports;o.a.use(h.a);var Y=new h.a({routes:[{path:"/",name:"index",component:M}]});o.a.config.productionTip=!1,new o.a({el:"#app",router:Y,components:{App:s},template:"<App/>"})},OCxj:function(t,i){t.exports="data:image/png;base64,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"},ODu3:function(t,i){},PbiU:function(t,i,e){t.exports=e.p+"static/img/touchImg.ba04392.png"},RB0b:function(t,i,e){t.exports=e.p+"static/img/touchTips.0aa7cc2.png"},RxiK:function(t,i,e){t.exports=e.p+"static/img/hua1.5dcc303.png"},fZ8r:function(t,i){},i2Qd:function(t,i,e){t.exports=e.p+"static/img/prizeCurtain.00fcea0.png"},ktTG:function(t,i,e){t.exports=e.p+"static/img/loading.7156e4b.gif"},"t9//":function(t,i){},wnDL:function(t,i,e){t.exports=e.p+"static/img/logo.3b13de4.png"},xnna:function(t,i,e){t.exports=e.p+"static/img/endContent.a7d4df9.png"},xtOa:function(t,i,e){t.exports=e.p+"static/img/curtainImg.23e5925.png"}},["NHnr"]);
//# sourceMappingURL=app.aa58e4c81a0d170d6cf5.js.map