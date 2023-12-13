(function(g){var window=this;'use strict';var oqb=function(a,b){a.jb("onAutonavCoundownStarted",b)},e6=function(a,b,c){g.Nu(a.element,"ytp-suggestion-set",!!b.videoId);
var d=b.playlistId;c=b.Rg(c?c:"mqdefault.jpg");var e=null,f=null;b instanceof g.NS&&(b.lengthText?(e=b.lengthText||null,f=b.ww||null):b.lengthSeconds&&(e=g.QG(b.lengthSeconds),f=g.QG(b.lengthSeconds,!0)));var h=!!d;d=h&&"RD"===g.IQa(d).type;var l=b instanceof g.NS?b.isLivePlayback:null,m=b instanceof g.NS?b.isUpcoming:null,n=b.author,p=b.shortViewCount,q=b.publishedTimeText,r=[],t=[];n&&r.push(n);p&&(r.push(p),t.push(p));q&&t.push(q);c={title:b.title,author:n,author_and_views:r.join(" \u2022 "),aria_label:b.ariaLabel||
g.dK("Watch $TITLE",{TITLE:b.title}),duration:e,timestamp:f,url:b.Xk(),is_live:l,is_upcoming:m,is_list:h,is_mix:d,background:c?"background-image: url("+c+")":"",views_and_publish_time:t.join(" \u2022 "),autoplayAlternativeHeader:b.Es};b instanceof g.MS&&(c.playlist_length=b.playlistLength);a.update(c)},f6=function(a){var b=a.U(),c=b.D;
g.T.call(this,{I:"a",S:"ytp-autonav-suggestion-card",W:{href:"{{url}}",target:c?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",Ma:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],W:{style:"{{background}}"},V:[{I:"div",W:{"aria-label":"{{timestamp}}"},Ma:["ytp-autonav-timestamp"],ya:"{{duration}}"},{I:"div",Ma:["ytp-autonav-live-stamp"],ya:"Live"},{I:"div",
Ma:["ytp-autonav-upcoming-stamp"],ya:"Upcoming"},{I:"div",S:"ytp-autonav-list-overlay",V:[{I:"div",S:"ytp-autonav-mix-text",ya:"Mix"},{I:"div",S:"ytp-autonav-mix-icon"}]}]},{I:"div",Ma:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],ya:"{{title}}"},{I:"div",Ma:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],ya:"{{author}}"},{I:"div",Ma:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],ya:"{{views_and_publish_time}}"}]});this.J=a;this.suggestion=
null;this.j=c;this.Qa("click",this.onClick);this.Qa("keypress",this.onKeyPress)},g6=function(a,b){b=void 0===b?!1:b;
g.T.call(this,{I:"div",S:"ytp-autonav-endscreen-countdown-overlay"});var c=this;this.N=b;this.G=this.K=void 0;this.C=0;this.container=new g.T({I:"div",S:"ytp-autonav-endscreen-countdown-container"});g.J(this,this.container);this.container.Da(this.element);b=a.U();var d=b.D;this.J=a;this.suggestion=null;this.onVideoDataChange("newdata",this.J.getVideoData());this.T(a,"videodatachange",this.onVideoDataChange);this.j=new g.T({I:"div",S:"ytp-autonav-endscreen-upnext-container",W:{"aria-label":"{{aria_label}}",
"data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-header"},{I:"div",S:"ytp-autonav-endscreen-upnext-alternative-header",ya:"{{autoplayAlternativeHeader}}"},{I:"a",S:"ytp-autonav-endscreen-link-container",W:{href:"{{url}}",target:d?b.Y:""},V:[{I:"div",S:"ytp-autonav-endscreen-upnext-thumbnail",W:{style:"{{background}}"},V:[{I:"div",W:{"aria-label":"{{timestamp}}"},Ma:["ytp-autonav-timestamp"],
ya:"{{duration}}"},{I:"div",Ma:["ytp-autonav-live-stamp"],ya:"Live"},{I:"div",Ma:["ytp-autonav-upcoming-stamp"],ya:"Upcoming"}]},{I:"div",S:"ytp-autonav-endscreen-video-info",V:[{I:"div",S:"ytp-autonav-endscreen-premium-badge"},{I:"div",S:"ytp-autonav-endscreen-upnext-title",ya:"{{title}}"},{I:"div",S:"ytp-autonav-endscreen-upnext-author",ya:"{{author}}"},{I:"div",S:"ytp-autonav-view-and-date",ya:"{{views_and_publish_time}}"},{I:"div",S:"ytp-autonav-author-and-view",ya:"{{author_and_views}}"}]}]}]});
g.J(this,this.j);this.j.Da(this.container.element);d||this.T(this.j.Fa("ytp-autonav-endscreen-link-container"),"click",this.YS);this.J.createClientVe(this.container.element,this,115127);this.J.createClientVe(this.j.Fa("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.T({I:"div",S:"ytp-autonav-overlay"});g.J(this,this.overlay);this.overlay.Da(this.container.element);this.B=new g.T({I:"div",S:"ytp-autonav-endscreen-button-container"});g.J(this,this.B);this.B.Da(this.container.element);
this.cancelButton=new g.T({I:"button",Ma:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button",b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],W:{"aria-label":"Cancel auto-play"},ya:"Cancel"});g.J(this,this.cancelButton);this.cancelButton.Da(this.B.element);this.cancelButton.Qa("click",this.R1,this);this.J.createClientVe(this.cancelButton.element,this,115129);this.playButton=new g.T({I:"a",Ma:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button",
b.L("web_modern_buttons")?"ytp-autonav-endscreen-upnext-button-rounded":""],W:{href:"{{url}}",role:"button","aria-label":"Play next video"},ya:"Play now"});g.J(this,this.playButton);this.playButton.Da(this.B.element);this.playButton.Qa("click",this.YS,this);this.J.L("web_player_autonav_next_button_renderer")?(this.J.createServerVe(this.playButton.element,this.playButton,!0),(b=this.J.getVideoData())&&pqb(this,b)):this.J.createClientVe(this.playButton.element,this,115130);this.D=new g.Bu(function(){qqb(c)},
500);
g.J(this,this.D);this.XS();this.T(a,"autonavvisibility",this.XS);this.J.L("web_autonav_color_transition")&&(this.T(a,"autonavchange",this.Q1),this.T(a,"onAutonavCoundownStarted",this.N8))},h6=function(a){var b=a.J.Wk(!0,a.J.isFullscreen());
g.Nu(a.container.element,"ytp-autonav-endscreen-small-mode",a.Kf(b));g.Nu(a.container.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.PK);g.Nu(a.J.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.J.xf());g.Nu(a.J.getRootNode(),"countdown-running",a.bl());g.Nu(a.container.element,"ytp-player-content",a.J.xf());g.Vr(a.overlay.element,{width:b.width+"px"});if(!a.bl()){a.J.xf()?rqb(a,Math.round(sqb(a)/1E3)):rqb(a);b=!!a.suggestion&&!!a.suggestion.Es;var c=a.J.xf()||!b;
g.Nu(a.container.element,"ytp-autonav-endscreen-upnext-alternative-header-only",!c&&b);g.Nu(a.container.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.XF(a.B,a.J.xf());g.Nu(a.element,"ytp-enable-w2w-color-transitions",tqb(a))}},qqb=function(a){var b=sqb(a),c=Math,d=c.min;
var e=a.C?Date.now()-a.C:0;c=d.call(c,e,b);rqb(a,Math.ceil((b-c)/1E3));500>=b-c&&a.bl()?a.select(!0):a.bl()&&a.D.start()},sqb=function(a){if(a.J.isFullscreen()){var b;
a=null==(b=a.J.getVideoData())?void 0:b.YB;return-1===a||void 0===a?8E3:a}return 0<=a.J.Xs()?a.J.Xs():g.rJ(a.J.U().experiments,"autoplay_time")||1E4},pqb=function(a,b){a.J.L("web_player_autonav_next_button_renderer");
b=b.y5;a.K=null==b?void 0:b.navigationEndpoint;b=null==b?void 0:b.trackingParams;a.playButton&&b&&a.J.setTrackingParams(a.playButton.element,b)},tqb=function(a){var b;
return!(null==(b=a.J.getVideoData())||!b.watchToWatchTransitionRenderer)},rqb=function(a,b){b=void 0===b?-1:b;
a=a.j.Fa("ytp-autonav-endscreen-upnext-header");g.lf(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(RegExp("\\$SECONDS","gi"))[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.bf("Up next in $SECONDS".slice(0,d)));var e=g.af("span");g.Hu(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.qf(e,b);a.appendChild(e);a.appendChild(g.bf("Up next in $SECONDS".slice(d+c.length)));return}}g.qf(a,"Up next")},i6=function(a,b){g.T.call(this,{I:"div",
Ma:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},j6=function(a){g.T.call(this,{I:"div",
Ma:["ytp-upnext","ytp-player-content"],W:{"aria-label":"{{aria_label}}"},V:[{I:"div",S:"ytp-cued-thumbnail-overlay-image",W:{style:"{{background}}"}},{I:"span",S:"ytp-upnext-top",V:[{I:"span",S:"ytp-upnext-header",ya:"Up Next"},{I:"span",S:"ytp-upnext-title",ya:"{{title}}"},{I:"span",S:"ytp-upnext-author",ya:"{{author}}"}]},{I:"a",S:"ytp-upnext-autoplay-icon",W:{role:"button",href:"{{url}}","aria-label":"Play next video"},V:[{I:"svg",W:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
V:[{I:"circle",S:"ytp-svg-autoplay-circle",W:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{I:"circle",S:"ytp-svg-autoplay-ring",W:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{I:"path",S:"ytp-svg-fill",W:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{I:"span",S:"ytp-upnext-bottom",V:[{I:"span",S:"ytp-upnext-cancel"},{I:"span",S:"ytp-upnext-paused",
ya:"Auto-play is paused"}]}]});this.api=a;this.cancelButton=null;this.G=this.Fa("ytp-svg-autoplay-ring");this.C=this.notification=this.j=this.suggestion=null;this.D=new g.Bu(this.kH,5E3,this);this.B=0;var b=this.Fa("ytp-upnext-cancel");this.cancelButton=new g.T({I:"button",Ma:["ytp-upnext-cancel-button","ytp-button"],W:{tabindex:"0","aria-label":"Cancel auto-play"},ya:"Cancel"});g.J(this,this.cancelButton);this.cancelButton.Qa("click",this.S1,this);this.cancelButton.Da(b);this.cancelButton&&this.api.createClientVe(this.cancelButton.element,
this,115129);g.J(this,this.D);this.api.createClientVe(this.element,this,18788);b=this.Fa("ytp-upnext-autoplay-icon");this.T(b,"click",this.T1);this.api.createClientVe(b,this,115130);this.ZS();this.T(a,"autonavvisibility",this.ZS);this.T(a,"mdxnowautoplaying",this.z9);this.T(a,"mdxautoplaycanceled",this.A9);g.Nu(this.element,"ytp-upnext-mobile",this.api.U().B)},uqb=function(a,b){if(b)return b;
if(a.api.isFullscreen()){var c;a=null==(c=a.api.getVideoData())?void 0:c.YB;return-1===a||void 0===a?8E3:a}return 0<=a.api.Xs()?a.api.Xs():g.rJ(a.api.U().experiments,"autoplay_time")||1E4},vqb=function(a,b){b=uqb(a,b);
var c=Math,d=c.min;var e=(0,g.sD)()-a.B;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.G.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.bl()&&3!==a.api.getPresentingPlayerType()?a.select(!0):a.bl()&&a.j.start()},k6=function(a){i6.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=null;this.table=new g.T({I:"div",S:"ytp-suggestion-panel",V:[{I:"div",Ma:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],ya:"More videos"}]});this.N=new g.T({I:"div",S:"ytp-suggestions-container"});this.videos=[];this.C=null;this.G=this.K=!1;this.B=new g6(this.player);g.J(this,this.B);this.B.Da(this.element);a.getVideoData().Qf?this.j=this.B:(this.j=new j6(a),g.uU(this.player,this.j.element,4),g.J(this,this.j));this.overlay=new g.T({I:"div",
S:"ytp-autonav-overlay-cancelled-state"});g.J(this,this.overlay);this.overlay.Da(this.element);this.D=new g.NK(this);g.J(this,this.D);g.J(this,this.table);this.table.Da(this.element);this.table.show();g.J(this,this.N);this.N.Da(this.table.element);this.hide()},l6=function(a){var b=a.xf();
b!==a.G&&(a.G=b,a.player.oa("autonavvisibility"),a.G?(a.B!==a.j&&a.B.hide(),a.table.hide()):(a.B!==a.j&&a.B.show(),a.table.show()))},m6=function(a,b){g.T.call(this,{I:"button",
Ma:["ytp-watch-on-youtube-button","ytp-button"],ya:"{{content}}"});this.J=a;this.buttonType=this.buttonType=b;this.t_();2===this.buttonType&&g.Ju(this.element,"ytp-continue-watching-button");this.Qa("click",this.onClick);this.Qa("videodatachange",this.t_);g.XF(this,!0)},n6=function(a,b){i6.call(this,a,"embeds-lite-endscreen");
this.J=a;this.pd=b;this.J.createClientVe(this.element,this,156943);this.watchButton=new m6(a,2);g.J(this,this.watchButton);this.watchButton.Da(this.element);this.hide()},wqb=function(a){i6.call(this,a,"subscribecard-endscreen");
this.j=new g.T({I:"div",S:"ytp-subscribe-card",V:[{I:"img",S:"ytp-author-image",W:{src:"{{profilePicture}}"}},{I:"div",S:"ytp-subscribe-card-right",V:[{I:"div",S:"ytp-author-name",ya:"{{author}}"},{I:"div",S:"html5-subscribe-button-container"}]}]});g.J(this,this.j);this.j.Da(this.element);var b=a.getVideoData();this.subscribeButton=new g.mW("Subscribe",null,"Unsubscribe",null,!0,!1,b.Kl,b.subscribed,"trailer-endscreen",null,a,!1);g.J(this,this.subscribeButton);this.subscribeButton.Da(this.j.Fa("html5-subscribe-button-container"));
this.T(a,"videodatachange",this.Sa);this.Sa();this.hide()},o6=function(a){var b=a.U(),c=g.KK||g.YR?{style:"will-change: opacity"}:void 0,d=b.D,e=["ytp-videowall-still"];
b.B&&e.push("ytp-videowall-show-text");g.T.call(this,{I:"a",Ma:e,W:{href:"{{url}}",target:d?b.Y:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},V:[{I:"div",S:"ytp-videowall-still-image",W:{style:"{{background}}"}},{I:"span",S:"ytp-videowall-still-info",W:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-info-bg",V:[{I:"span",S:"ytp-videowall-still-info-content",W:c,V:[{I:"span",S:"ytp-videowall-still-info-title",ya:"{{title}}"},
{I:"span",S:"ytp-videowall-still-info-author",ya:"{{author_and_views}}"},{I:"span",S:"ytp-videowall-still-info-live",ya:"Live"},{I:"span",S:"ytp-videowall-still-info-duration",ya:"{{duration}}"}]}]}]},{I:"span",Ma:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],W:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-icon"},"Playlist",{I:"span",S:"ytp-videowall-still-listlabel-length",V:[" (",{I:"span",ya:"{{playlist_length}}"},")"]}]},{I:"span",Ma:["ytp-videowall-still-listlabel-mix",
"ytp-videowall-still-listlabel"],W:{"aria-hidden":"true"},V:[{I:"span",S:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{I:"span",S:"ytp-videowall-still-listlabel-length",ya:" (50+)"}]}]});this.suggestion=null;this.B=d;this.api=a;this.j=new g.NK(this);g.J(this,this.j);this.Qa("click",this.onClick);this.Qa("keypress",this.onKeyPress);this.j.T(a,"videodatachange",this.onVideoDataChange);a.createServerVe(this.element,this);this.onVideoDataChange()},p6=function(a){i6.call(this,a,"videowall-endscreen");
var b=this;this.J=a;this.C=0;this.stills=[];this.D=this.videoData=null;this.G=this.N=!1;this.Y=null;this.B=new g.NK(this);g.J(this,this.B);this.K=new g.Bu(function(){g.Ju(b.element,"ytp-show-tiles")},0);
g.J(this,this.K);var c=new g.T({I:"button",Ma:["ytp-button","ytp-endscreen-previous"],W:{"aria-label":"Previous"},V:[g.cG()]});g.J(this,c);c.Da(this.element);c.Qa("click",this.X1,this);this.table=new g.UF({I:"div",S:"ytp-endscreen-content"});g.J(this,this.table);this.table.Da(this.element);c=new g.T({I:"button",Ma:["ytp-button","ytp-endscreen-next"],W:{"aria-label":"Next"},V:[g.dG()]});g.J(this,c);c.Da(this.element);c.Qa("click",this.W1,this);a.getVideoData().Qf?this.j=new g6(a,!0):this.j=new j6(a);
g.J(this,this.j);g.uU(this.player,this.j.element,4);a.createClientVe(this.element,this,158789);this.hide()},q6=function(a){return g.vU(a.player)&&a.SC()&&!a.D},r6=function(a){var b=a.xf();
b!==a.N&&(a.N=b,a.player.oa("autonavvisibility"))},s6=function(a){i6.call(this,a,"watch-again-on-youtube-endscreen");
this.watchButton=new m6(a,1);g.J(this,this.watchButton);this.watchButton.Da(this.element);g.Neb(a)&&(this.j=new g.t2(a),g.J(this,this.j),this.B=new g.T({I:"div",Ma:["ytp-watch-again-on-youtube-endscreen-more-videos-container"],W:{tabIndex:"-1"},V:[this.j]}),g.J(this,this.B),this.j.Da(this.B.element),this.B.Da(this.element));a.createClientVe(this.element,this,156914);this.hide()},Aqb=function(a){g.EV.call(this,a);
var b=this;this.endScreen=null;this.B=this.j=this.C=this.D=!1;this.listeners=new g.NK(this);g.J(this,this.listeners);var c=a.U(),d=a.getVideoData();d=d&&0!==d.limitedPlaybackDurationInSeconds;g.sC(g.hS(c))&&d&&!g.qU(a)?(this.B=!0,this.endScreen=new n6(a,g.hU(a))):g.rU(a)?this.endScreen=new s6(a):xqb(a)?(this.D=!0,yqb(this),this.j?this.endScreen=new k6(a):this.endScreen=new p6(a)):c.lh?this.endScreen=new wqb(a):this.endScreen=new i6(a);g.J(this,this.endScreen);g.uU(a,this.endScreen.element,4);zqb(this);
this.listeners.T(a,"videodatachange",this.onVideoDataChange,this);this.listeners.T(a,g.YJ("endscreen"),function(e){b.onCueRangeEnter(e)});
this.listeners.T(a,g.ZJ("endscreen"),function(e){b.onCueRangeExit(e)})},yqb=function(a){var b=a.player.getVideoData();
if(!b||a.j===b.Ml&&a.C===b.Qf)return!1;a.j=b.Ml;a.C=b.Qf;return!0},xqb=function(a){a=a.U();
return a.Ed&&!a.lh},zqb=function(a){a.player.kf("endscreen");
var b=a.player.getVideoData();b=new g.XJ(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.XJ(0x8000000000000,0x8000000000000,{id:"load",priority:8,namespace:"endscreen"});a.player.sf([b,c])};
g.mU.prototype.Xs=g.ba(16,function(){return this.app.Xs()});
g.S0.prototype.Xs=g.ba(15,function(){return this.getVideoData().GU});
g.iU.prototype.Fm=g.ba(14,function(a){this.oh().Fm(a)});
g.NW.prototype.Fm=g.ba(13,function(a){this.j!==a&&(this.j=a,this.Sa())});
g.ZX.prototype.Fm=g.ba(12,function(a){this.overflowButton&&this.overflowButton.Fm(a)});
g.iU.prototype.Gm=g.ba(11,function(a){this.oh().Gm(a)});
g.SW.prototype.Gm=g.ba(10,function(a){this.j!==a&&(this.j=a,this.Sa())});
g.ZX.prototype.Gm=g.ba(9,function(a){this.shareButton&&this.shareButton.Gm(a)});
g.iU.prototype.vu=g.ba(8,function(a){this.oh().vu(a)});
g.eW.prototype.vu=g.ba(7,function(a){this.EQ!==a&&(this.EQ=a,this.tq())});
g.iU.prototype.Qr=g.ba(6,function(a){this.oh().Qr(a)});
g.ZX.prototype.Qr=g.ba(5,function(a){this.DQ!==a&&(this.DQ=a,this.Gk())});g.w(f6,g.T);f6.prototype.select=function(){this.J.Ko(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.mD||void 0)&&this.J.logClick(this.element)};
f6.prototype.onClick=function(a){g.NU(a,this.J,this.j,this.suggestion.sessionData||void 0)&&this.select()};
f6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};g.w(g6,g.T);g.k=g6.prototype;g.k.sG=function(a){this.suggestion!==a&&(this.suggestion=a,e6(this.j,a),this.playButton.updateValue("url",this.suggestion.Xk()),h6(this))};
g.k.bl=function(){return 0<this.C};
g.k.FB=function(){this.bl()||(this.C=Date.now(),qqb(this),oqb(this.J,sqb(this)),g.Nu(this.J.getRootNode(),"countdown-running",this.bl()))};
g.k.Uw=function(){this.kq();qqb(this);var a=this.j.Fa("ytp-autonav-endscreen-upnext-header");a&&g.qf(a,"Up next")};
g.k.kq=function(){this.bl()&&(this.D.stop(),this.C=0)};
g.k.select=function(a){this.J.nextVideo(!1,void 0===a?!1:a);this.kq()};
g.k.YS=function(a){g.NU(a,this.J)&&(a.currentTarget===this.playButton.element?this.J.logClick(this.playButton.element):a.currentTarget===this.j.Fa("ytp-autonav-endscreen-link-container")&&(a=this.j.Fa("ytp-autonav-endscreen-link-container"),this.J.logVisibility(a,!0),this.J.logClick(a)),this.J.L("web_player_autonav_next_button_renderer")&&this.K?(this.J.jb("innertubeCommand",this.K),this.kq()):this.select())};
g.k.R1=function(){this.J.logClick(this.cancelButton.element);g.oU(this.J,!0);this.G&&this.J.jb("innertubeCommand",this.G)};
g.k.onVideoDataChange=function(a,b){this.J.L("web_player_autonav_next_button_renderer")&&pqb(this,b);var c;this.G=null==(c=b.W4)?void 0:c.command};
g.k.N8=function(a){if(tqb(this)){var b=this.J.getVideoData().watchToWatchTransitionRenderer,c=null==b?void 0:b.fromColorPaletteDark;b=null==b?void 0:b.toColorPaletteDark;if(c&&b){var d=this.element;d.style.setProperty("--w2w-start-background-color",g.YG(c.surgeColor));d.style.setProperty("--w2w-start-primary-text-color",g.YG(c.primaryTitleColor));d.style.setProperty("--w2w-start-secondary-text-color",g.YG(c.secondaryTitleColor));d.style.setProperty("--w2w-end-background-color",g.YG(b.surgeColor));
d.style.setProperty("--w2w-end-primary-text-color",g.YG(b.primaryTitleColor));d.style.setProperty("--w2w-end-secondary-text-color",g.YG(b.secondaryTitleColor));d.style.setProperty("--w2w-animation-duration",a+"ms")}g.Nu(this.element,"ytp-w2w-animate",!0)}};
g.k.Q1=function(a){this.J.L("web_autonav_color_transition")&&2!==a&&g.Nu(this.element,"ytp-w2w-animate",!1)};
g.k.XS=function(){var a=this.J.xf();this.N&&this.Eb!==a&&g.XF(this,a);h6(this);this.J.logVisibility(this.container.element,a);this.J.logVisibility(this.cancelButton.element,a);this.J.logVisibility(this.j.Fa("ytp-autonav-endscreen-link-container"),a);this.J.logVisibility(this.playButton.element,a)};
g.k.Kf=function(a){return 400>a.width||459>a.height};g.w(i6,g.T);g.k=i6.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.SC=function(){return!1};
g.k.xf=function(){return!1};
g.k.JX=function(){return!1};g.w(j6,g.T);g.k=j6.prototype;g.k.kH=function(){this.notification&&(this.D.stop(),this.Lc(this.C),this.C=null,this.notification.close(),this.notification=null)};
g.k.sG=function(a){this.suggestion=a;e6(this,a,"hqdefault.jpg")};
g.k.ZS=function(){g.XF(this,this.api.xf());this.api.logVisibility(this.element,this.api.xf());this.api.logVisibility(this.Fa("ytp-upnext-autoplay-icon"),this.api.xf());this.cancelButton&&this.api.logVisibility(this.cancelButton.element,this.api.xf())};
g.k.I9=function(){window.focus();this.kH()};
g.k.FB=function(a){var b=this;this.bl()||(g.BE("a11y-announce","Up Next "+this.suggestion.title),this.B=(0,g.sD)(),this.j=new g.Bu(function(){vqb(b,a)},25),vqb(this,a),oqb(this.api,uqb(this,a)));
g.Lu(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.T.prototype.hide.call(this)};
g.k.bl=function(){return!!this.j};
g.k.Uw=function(){this.kq();this.B=(0,g.sD)();vqb(this);g.Ju(this.element,"ytp-upnext-autoplay-paused")};
g.k.kq=function(){this.bl()&&(this.j.dispose(),this.j=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(this.api.U().L("autonav_notifications")&&a&&window.Notification&&"function"===typeof document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(this.kH(),this.notification=new Notification("Up Next",{body:this.suggestion.title,icon:this.suggestion.Rg()}),this.C=this.T(this.notification,"click",this.I9),this.D.start())}this.kq();this.api.nextVideo(!1,a)};
g.k.T1=function(a){!g.pf(this.cancelButton.element,a.target)&&g.NU(a,this.api)&&(this.api.xf()&&this.api.logClick(this.Fa("ytp-upnext-autoplay-icon")),this.select())};
g.k.S1=function(){this.api.xf()&&this.cancelButton&&this.api.logClick(this.cancelButton.element);g.oU(this.api,!0)};
g.k.z9=function(a){this.api.getPresentingPlayerType();this.show();this.FB(a)};
g.k.A9=function(){this.api.getPresentingPlayerType();this.kq();this.hide()};
g.k.xa=function(){this.kq();this.kH();g.T.prototype.xa.call(this)};g.w(k6,i6);g.k=k6.prototype;g.k.create=function(){i6.prototype.create.call(this);this.D.T(this.player,"appresize",this.gC);this.D.T(this.player,"onVideoAreaChange",this.gC);this.D.T(this.player,"videodatachange",this.onVideoDataChange);this.D.T(this.player,"autonavchange",this.aT);this.D.T(this.player,"onAutonavCancelled",this.U1);this.onVideoDataChange()};
g.k.show=function(){i6.prototype.show.call(this);(this.K||this.C&&this.C!==this.videoData.clientPlaybackNonce)&&g.oU(this.player,!1);g.vU(this.player)&&this.SC()&&!this.C?(l6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.FB():3===this.videoData.autonavState&&this.j.Uw()):(g.oU(this.player,!0),l6(this));this.gC()};
g.k.hide=function(){i6.prototype.hide.call(this);this.j.Uw();l6(this)};
g.k.gC=function(){var a=this.player.Wk(!0,this.player.isFullscreen());l6(this);h6(this.B);g.Nu(this.element,"ytp-autonav-cancelled-small-mode",this.Kf(a));g.Nu(this.element,"ytp-autonav-cancelled-tiny-mode",this.TI(a));g.Nu(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Vr(this.overlay.element,{width:a.width+"px"});if(!this.G)for(a=0;a<this.videos.length;a++)g.Nu(this.videos[a].element,"ytp-suggestion-card-with-margin",1===a%2)};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((a=this.videoData.suggestions)&&a.length||this.player.L("web_player_autonav_empty_suggestions_fix")){var b=g.nT(this.videoData);b&&(this.j.sG(b),this.j!==this.B&&this.B.sG(b))}if(a&&a.length)for(b=0;b<Bqb.length;++b){var c=Bqb[b];if(a&&a[c]){this.videos[b]=new f6(this.player);var d=this.videos[b];c=a[c];d.suggestion!==c&&(d.suggestion=c,e6(d,c));g.J(this,this.videos[b]);this.videos[b].Da(this.N.element)}}this.gC()}};
g.k.aT=function(a){1===a?(this.K=!1,this.C=this.videoData.clientPlaybackNonce,this.j.kq(),this.Eb&&this.gC()):(this.K=!0,this.xf()&&(2===a?this.j.FB():3===a&&this.j.Uw()))};
g.k.U1=function(a){a?this.aT(1):(this.C=null,this.K=!1)};
g.k.SC=function(){return 1!==this.videoData.autonavState};
g.k.Kf=function(a){return(910>a.width||459>a.height)&&!this.TI(a)&&!(400>=a.width||360>=a.height)};
g.k.TI=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.xf=function(){return this.Eb&&g.vU(this.player)&&this.SC()&&!this.C};
var Bqb=[1,3,2,4];g.w(m6,g.T);g.k=m6.prototype;g.k.t_=function(){switch(this.buttonType){case 1:var a="Watch again on YouTube";var b=156915;break;case 2:a="Continue watching on YouTube";b=156942;break;default:a="Continue watching on YouTube",b=156942}this.update({content:a});this.J.hasVe(this.element)&&this.J.destroyVe(this.element);this.J.createClientVe(this.element,this,b)};
g.k.onClick=function(a){this.J.L("web_player_log_click_before_generating_ve_conversion_params")&&this.J.logClick(this.element);g.OU(this.getVideoUrl(),this.J,a);this.J.L("web_player_log_click_before_generating_ve_conversion_params")||this.J.logClick(this.element)};
g.k.getVideoUrl=function(){var a=!0;switch(this.buttonType){case 1:a=!0;break;case 2:a=!1}a=this.J.getVideoUrl(a,!1,!1,!0);var b=this.J.U();if(g.ZR(b)||g.gS(b)){var c={};g.ZR(b)&&g.bU(this.J,"addEmbedsConversionTrackingParams",[c]);a:{switch(this.buttonType){case 2:b="emb_ytp_continue_watching";break a}b="emb_ytp_watch_again"}g.xP(c,b);a=g.Ll(a,c)}return a};
g.k.logVisibility=function(){this.J.logVisibility(this.element,this.Eb&&this.Z)};
g.k.show=function(){g.T.prototype.show.call(this);this.logVisibility()};
g.k.hide=function(){g.T.prototype.hide.call(this);this.logVisibility()};
g.k.ac=function(a){g.T.prototype.ac.call(this,a);this.logVisibility()};g.w(n6,i6);n6.prototype.show=function(){3!==this.player.getPlayerState()&&(i6.prototype.show.call(this),this.pd.Qr(!0),this.pd.Gm(!0),this.J.U().Ye||this.pd.Fm(!0),this.J.logVisibility(this.element,!0),this.watchButton.ac(!0))};
n6.prototype.hide=function(){i6.prototype.hide.call(this);this.pd.Qr(!1);this.pd.Gm(!1);this.pd.Fm(!1);this.J.logVisibility(this.element,!1);this.watchButton.ac(!1)};g.w(wqb,i6);wqb.prototype.Sa=function(){var a=this.player.getVideoData();this.j.update({profilePicture:a.profilePicture,author:a.author});this.subscribeButton.channelId=a.Kl;var b=this.subscribeButton;a.subscribed?b.j():b.B()};g.w(o6,g.T);o6.prototype.select=function(){this.api.Ko(this.suggestion.videoId,this.suggestion.sessionData,this.suggestion.playlistId,void 0,void 0,this.suggestion.mD||void 0)&&this.api.logClick(this.element)};
o6.prototype.onClick=function(a){if(g.ZR(this.api.U())&&this.api.L("web_player_log_click_before_generating_ve_conversion_params")){this.api.logClick(this.element);var b=this.suggestion.Xk(),c={};g.eTa(this.api,c,"emb_rel_end");b=g.Ll(b,c);g.OU(b,this.api,a)}else g.NU(a,this.api,this.B,this.suggestion.sessionData||void 0)&&this.select()};
o6.prototype.onKeyPress=function(a){switch(a.keyCode){case 13:case 32:a.defaultPrevented||(this.select(),a.preventDefault())}};
o6.prototype.onVideoDataChange=function(){var a=this.api.getVideoData(),b=this.api.U();this.B=a.Jf?!1:b.D};g.w(p6,i6);g.k=p6.prototype;g.k.create=function(){i6.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.videoData=a);this.xq();this.B.T(this.player,"appresize",this.xq);this.B.T(this.player,"onVideoAreaChange",this.xq);this.B.T(this.player,"videodatachange",this.onVideoDataChange);this.B.T(this.player,"autonavchange",this.GL);this.B.T(this.player,"onAutonavCancelled",this.V1);a=this.videoData.autonavState;a!==this.Y&&this.GL(a);this.B.T(this.element,"transitionend",this.Y$)};
g.k.destroy=function(){g.HC(this.B);g.ub(this.stills);this.stills=[];i6.prototype.destroy.call(this);g.Lu(this.element,"ytp-show-tiles");this.K.stop();this.Y=this.videoData.autonavState};
g.k.SC=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){var a=this.Eb;i6.prototype.show.call(this);g.Lu(this.element,"ytp-show-tiles");this.player.U().B?g.Du(this.K):this.K.start();(this.G||this.D&&this.D!==this.videoData.clientPlaybackNonce)&&g.oU(this.player,!1);q6(this)?(r6(this),2===this.videoData.autonavState?3===this.player.getVisibilityState()?this.j.select(!0):this.j.FB():3===this.videoData.autonavState&&this.j.Uw()):(g.oU(this.player,!0),r6(this));a!==this.Eb&&this.player.logVisibility(this.element,!0)};
g.k.hide=function(){var a=this.Eb;i6.prototype.hide.call(this);this.j.Uw();r6(this);a!==this.Eb&&this.player.logVisibility(this.element,!1)};
g.k.Y$=function(a){a.target===this.element&&this.xq()};
g.k.xq=function(){var a,b,c,d;var e=(null==(a=this.videoData)?0:null==(b=a.suggestions)?0:b.length)?null==(c=this.videoData)?void 0:c.suggestions:[null==(d=this.videoData)?void 0:g.nT(d)];if(e.length){g.Ju(this.element,"ytp-endscreen-paginate");var f=this.J.Wk(!0,this.J.isFullscreen());if(a=g.hU(this.J))a=a.Wf()?48:32,f.width-=2*a;var h=f.width/f.height;d=96/54;b=a=2;var l=Math.max(f.width/96,2),m=Math.max(f.height/54,2);c=e.length;var n=Math.pow(2,2);var p=c*n+(Math.pow(2,2)-n);p+=Math.pow(2,2)-
n;for(p-=n;0<p&&(a<l||b<m);){var q=a/2,r=b/2,t=a<=l-2&&p>=r*n,u=b<=m-2&&p>=q*n;if((q+1)/r*d/h>h/(q/(r+1)*d)&&u)p-=q*n,b+=2;else if(t)p-=r*n,a+=2;else if(u)p-=q*n,b+=2;else break}d=!1;p>=3*n&&6>=c*n-p&&(4<=b||4<=a)&&(d=!0);n=96*a;p=54*b;h=n/p<h?f.height/p:f.width/n;h=Math.min(h,2);n=Math.floor(Math.min(f.width,n*h));p=Math.floor(Math.min(f.height,p*h));f=this.table.element;f.ariaLive="polite";g.es(f,n,p);g.Vr(f,{marginLeft:n/-2+"px",marginTop:p/-2+"px"});this.j.sG(g.nT(this.videoData));this.j instanceof
g6&&h6(this.j);g.Nu(this.element,"ytp-endscreen-takeover",q6(this));r6(this);n+=4;p+=4;h=0;f.ariaBusy="true";for(l=0;l<a;l++)for(m=0;m<b;m++)if(q=h,t=0,d&&l>=a-2&&m>=b-2?t=1:0===m%2&&0===l%2&&(2>m&&2>l?0===m&&0===l&&(t=2):t=2),q=g.je(q+this.C,c),0!==t){r=this.stills[h];r||(r=new o6(this.player),this.stills[h]=r,f.appendChild(r.element));u=Math.floor(p*m/b);var x=Math.floor(n*l/a),B=Math.floor(p*(m+t)/b)-u-4,F=Math.floor(n*(l+t)/a)-x-4;g.as(r.element,x,u);g.es(r.element,F,B);g.Vr(r.element,"transitionDelay",
(m+l)/20+"s");g.Nu(r.element,"ytp-videowall-still-mini",1===t);g.Nu(r.element,"ytp-videowall-still-large",2<t);t=Math.max(F,B);g.Nu(r.element,"ytp-videowall-still-round-large",256<=t);g.Nu(r.element,"ytp-videowall-still-round-medium",96<t&&256>t);g.Nu(r.element,"ytp-videowall-still-round-small",96>=t);q=e[q];r.suggestion!==q&&(r.suggestion=q,t=r.api.U(),u=g.Iu(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",e6(r,q,u),g.ZR(t)&&!r.api.L("web_player_log_click_before_generating_ve_conversion_params")&&
(t=q.Xk(),u={},g.bU(r.api,"addEmbedsConversionTrackingParams",[u]),t=g.Ll(t,g.xP(u,"emb_rel_end")),r.updateValue("url",t)),(q=(q=q.sessionData)&&q.itct)&&r.api.setTrackingParams(r.element,q));h++}f.ariaBusy="false";g.Nu(this.element,"ytp-endscreen-paginate",h<c);for(e=this.stills.length-1;e>=h;e--)a=this.stills[e],g.nf(a.element),g.rb(a);this.stills.length=h}};
g.k.onVideoDataChange=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.C=0,this.videoData=a,this.xq())};
g.k.W1=function(){this.C+=this.stills.length;this.xq()};
g.k.X1=function(){this.C-=this.stills.length;this.xq()};
g.k.JX=function(){return this.j.bl()};
g.k.GL=function(a){1===a?(this.G=!1,this.D=this.videoData.clientPlaybackNonce,this.j.kq(),this.Eb&&this.xq()):(this.G=!0,this.Eb&&q6(this)&&(2===a?this.j.FB():3===a&&this.j.Uw()))};
g.k.V1=function(a){if(a){for(a=0;a<this.stills.length;a++)this.J.logVisibility(this.stills[a].element,!0);this.GL(1)}else this.D=null,this.G=!1;this.xq()};
g.k.xf=function(){return this.Eb&&q6(this)};g.w(s6,i6);s6.prototype.aE=function(){var a;return null==(a=this.j)?void 0:a.aE()};
s6.prototype.show=function(){if(3!==this.player.getPlayerState()){i6.prototype.show.call(this);var a=this.B;if(a){var b=this.j.aE();g.Nu(this.element,"ytp-shorts-branded-ui",b);b?a.show():a.hide()}var c;null==(c=g.hU(this.player))||c.vu(!0);this.player.logVisibility(this.element,!0);this.watchButton.ac(!0)}};
s6.prototype.hide=function(){i6.prototype.hide.call(this);var a;null==(a=g.hU(this.player))||a.vu(!1);this.player.logVisibility(this.element,!1);this.watchButton.ac(!1)};g.w(Aqb,g.EV);g.k=Aqb.prototype;g.k.yu=function(){var a=this.player.getVideoData(),b=a.mutedAutoplay;if((g.rU(this.player)||this.B)&&!b)return!0;var c;var d=!!((null==a?0:g.nT(a))||(null==a?0:null==(c=a.suggestions)?0:c.length));d=!xqb(this.player)||d;a=a.yj||g.gS(a.Ha);c=this.player.zD();return d&&!a&&!c&&!b};
g.k.xf=function(){return this.endScreen.xf()};
g.k.B7=function(){return this.xf()?this.endScreen.JX():!1};
g.k.xa=function(){this.player.kf("endscreen");g.EV.prototype.xa.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.transitionEndpointAtEndOfStream;if(b&&b.videoId){var c=this.player.zb().me.get("heartbeat"),d=g.nT(a);!d||b.videoId!==d.videoId||a.JS?(this.player.Ko(b.videoId,void 0,void 0,!0,!0,b),c&&c.cJ("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0):a=!1}else a=!1;a||(g.EV.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.EV.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.onCueRangeEnter=function(a){this.yu()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.onCueRangeExit=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.onVideoDataChange=function(){zqb(this);this.D&&yqb(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.j?this.endScreen=new k6(this.player):this.endScreen=new p6(this.player),g.J(this,this.endScreen),g.uU(this.player,this.endScreen.element,4))};g.DV("endscreen",Aqb);})(_yt_player);
