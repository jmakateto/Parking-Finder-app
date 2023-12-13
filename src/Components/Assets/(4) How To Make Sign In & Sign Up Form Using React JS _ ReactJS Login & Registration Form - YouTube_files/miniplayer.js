(function(g){var window=this;'use strict';var xrb=function(a,b){g.T.call(this,{I:"button",Ma:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],W:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},V:[{I:"svg",W:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},V:[{I:"g",W:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},V:[{I:"g",W:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
V:[{I:"path",W:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.J=a;this.Qa("click",this.onClick,this);this.updateValue("title",g.lU(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});this.addOnDisposeCallback(g.jU(b.Md(),this.element))},yrb=function(a){g.T.call(this,
{I:"div",
S:"ytp-miniplayer-ui"});this.og=!1;this.player=a;this.T(a,"minimized",this.yh);this.T(a,"onStateChange",this.aS)},zrb=function(a){g.EV.call(this,a);
this.B=new g.NK(this);this.j=new yrb(this.player);this.j.hide();g.uU(this.player,this.j.element,4);a.qg()&&(this.load(),g.Nu(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(xrb,g.T);xrb.prototype.onClick=function(){this.J.jb("onExpandMiniplayer")};g.w(yrb,g.T);g.k=yrb.prototype;
g.k.KO=function(){this.tooltip=new g.YX(this.player,this);g.J(this,this.tooltip);g.uU(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Xc=new g.hW(this.player);g.J(this,this.Xc);this.Ak=new g.T({I:"div",S:"ytp-miniplayer-scrim"});g.J(this,this.Ak);this.Ak.Da(this.element);this.T(this.Ak.element,"click",this.KJ);var a=new g.T({I:"button",Ma:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},V:[g.eG()]});g.J(this,a);a.Da(this.Ak.element);this.T(a.element,"click",this.Up);
a=new xrb(this.player,this);g.J(this,a);a.Da(this.Ak.element);this.Bv=new g.T({I:"div",S:"ytp-miniplayer-controls"});g.J(this,this.Bv);this.Bv.Da(this.Ak.element);this.T(this.Bv.element,"click",this.KJ);var b=new g.T({I:"div",S:"ytp-miniplayer-button-container"});g.J(this,b);b.Da(this.Bv.element);a=new g.T({I:"div",S:"ytp-miniplayer-play-button-container"});g.J(this,a);a.Da(this.Bv.element);var c=new g.T({I:"div",S:"ytp-miniplayer-button-container"});g.J(this,c);c.Da(this.Bv.element);this.KZ=new g.kX(this.player,
this,!1);g.J(this,this.KZ);this.KZ.Da(b.element);b=new g.jX(this.player,this);g.J(this,b);b.Da(a.element);this.nextButton=new g.kX(this.player,this,!0);g.J(this,this.nextButton);this.nextButton.Da(c.element);this.Nj=new g.RX(this.player,this);g.J(this,this.Nj);this.Nj.Da(this.Ak.element);this.progressBar=new g.pX(this.player,this);g.J(this,this.progressBar);g.uU(this.player,this.progressBar.element,4);this.tJ=new g.T({I:"div",S:"ytp-miniplayer-buttons"});g.J(this,this.tJ);g.uU(this.player,this.tJ.element,
4);a=new g.T({I:"button",Ma:["ytp-miniplayer-close-button","ytp-button"],W:{"aria-label":"Close"},V:[g.eG()]});g.J(this,a);a.Da(this.tJ.element);this.T(a.element,"click",this.Up);a=new g.T({I:"button",Ma:["ytp-miniplayer-replay-button","ytp-button"],W:{"aria-label":"Close"},V:[g.Qva()]});g.J(this,a);a.Da(this.tJ.element);this.T(a.element,"click",this.l$);this.T(this.player,"presentingplayerstatechange",this.Ud);this.T(this.player,"appresize",this.Kb);this.T(this.player,"fullscreentoggled",this.Kb);
this.Kb()};
g.k.show=function(){this.wf=new g.zu(this.Lw,null,this);this.wf.start();this.og||(this.KO(),this.og=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.progressBar.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.wf&&(this.wf.dispose(),this.wf=void 0);g.T.prototype.hide.call(this);this.player.qg()||(this.og&&this.progressBar.hide(),this.player.loadModule("annotations_module"))};
g.k.xa=function(){this.wf&&(this.wf.dispose(),this.wf=void 0);g.T.prototype.xa.call(this)};
g.k.Up=function(){this.player.stopVideo();this.player.jb("onCloseMiniplayer")};
g.k.l$=function(){this.player.playVideo()};
g.k.KJ=function(a){if(a.target===this.Ak.element||a.target===this.Bv.element)g.FL(this.player.Rb())?this.player.pauseVideo():this.player.playVideo()};
g.k.yh=function(){g.Nu(this.player.getRootNode(),"ytp-player-minimized",this.player.qg())};
g.k.We=function(){this.progressBar.Hc();this.Nj.Hc()};
g.k.Lw=function(){this.We();this.wf&&this.wf.start()};
g.k.Ud=function(a){g.GG(a.state,32)&&this.tooltip.hide()};
g.k.Kb=function(){g.BX(this.progressBar,0,this.player.kb().getPlayerSize().width,!1);g.qX(this.progressBar)};
g.k.aS=function(a){this.player.qg()&&(0===a?this.hide():this.show())};
g.k.Md=function(){return this.tooltip};
g.k.Wf=function(){return!1};
g.k.Kf=function(){return!1};
g.k.gk=function(){return!1};
g.k.xB=function(){};
g.k.zp=function(){};
g.k.Rs=function(){};
g.k.An=function(){return null};
g.k.TH=function(){return null};
g.k.bO=function(){return new g.ne(0,0)};
g.k.Wk=function(){return new g.Sr(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Ir=function(a,b,c,d,e){var f=0,h=d=0,l=g.fs(a);if(b){c=g.Iu(b,"ytp-prev-button")||g.Iu(b,"ytp-next-button");var m=g.Iu(b,"ytp-play-button"),n=g.Iu(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.ds(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Iu(b,"ytp-miniplayer-button-top-left"),f=g.ds(b,this.element),b=g.fs(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.kb().getPlayerSize().width;e=f+(e||0);l=g.fe(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.qq=function(){};
g.k.Yj=function(){return!1};
g.k.vu=function(){};
g.k.Qr=function(){};
g.k.Gm=function(){};
g.k.Fm=function(){};
g.k.Dq=function(){};
g.k.Cp=function(){};
g.k.ix=function(){};
g.k.UH=function(){return null};g.w(zrb,g.EV);g.k=zrb.prototype;g.k.onVideoDataChange=function(){if(this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Nu(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.EV.prototype.create.call(this);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Ck=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.DV("miniplayer",zrb);})(_yt_player);
