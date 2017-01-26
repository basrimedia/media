/*!
 * Theia Sticky Sidebar v1.6.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */
!function(e){e.fn.theiaStickySidebar=function(t){function a(t,a){var r=s(t,a);r||(console.log(""),e(document).scroll(function(t,a){return function(r){var i=s(t,a);i&&e(this).unbind(r)}}(t,a)),e(window).resize(function(t,a){return function(r){var i=s(t,a);i&&e(this).unbind(r)}}(t,a)))}function s(t,a){return t.initialized===!0?!0:e("body").width()<t.minWidth?!1:(r(t,a),!0)}function r(t,a){t.initialized=!0,e("head").append(e('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),a.each(function(){function a(){r.fixedScrollTop=0,r.sidebar.css({"min-height":"1px"}),r.stickySidebar.css({position:"static",width:""})}function s(t){var a=t.height();return t.children().each(function(){a=Math.max(a,e(this).height())}),a}console.log("TST: Doing init.");var r={};r.sidebar=e(this),r.options=t||{},r.container=e(r.options.containerSelector),0==r.container.size()&&(r.container=r.sidebar.parent()),r.sidebar.parents().css("-webkit-transform","none"),r.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),r.stickySidebar=r.sidebar.find(".theiaStickySidebar"),0==r.stickySidebar.length&&(r.sidebar.find("script").remove(),r.stickySidebar=e("<div>").addClass("theiaStickySidebar").append(r.sidebar.children()),r.sidebar.append(r.stickySidebar)),r.marginTop=parseInt(r.sidebar.css("margin-top")),r.marginBottom=parseInt(r.sidebar.css("margin-bottom")),r.paddingTop=parseInt(r.sidebar.css("padding-top")),r.paddingBottom=parseInt(r.sidebar.css("padding-bottom"));var i=r.stickySidebar.offset().top,n=r.stickySidebar.outerHeight();r.stickySidebar.css("padding-top",1),r.stickySidebar.css("padding-bottom",1),i-=r.stickySidebar.offset().top,n=r.stickySidebar.outerHeight()-n-i,0==i?(r.stickySidebar.css("padding-top",0),r.stickySidebarPaddingTop=0):r.stickySidebarPaddingTop=1,0==n?(r.stickySidebar.css("padding-bottom",0),r.stickySidebarPaddingBottom=0):r.stickySidebarPaddingBottom=1,r.previousScrollTop=null,r.fixedScrollTop=0,a(),r.onScroll=function(r){if(r.stickySidebar.is(":visible")){if(e("body").width()<r.options.minWidth)return void a();if(r.sidebar.outerWidth(!0)+50>r.container.width())return void a();var i=e(document).scrollTop(),n="static";if(i>=r.container.offset().top+(r.paddingTop+r.marginTop-r.options.additionalMarginTop)){var d,l=r.paddingTop+r.marginTop+t.additionalMarginTop,c=r.paddingBottom+r.marginBottom+t.additionalMarginBottom,o=r.container.offset().top,f=r.container.offset().top+s(r.container),u=0+t.additionalMarginTop,p=r.stickySidebar.outerHeight()+l+c<e(window).height();d=p?u+r.stickySidebar.outerHeight():e(window).height()-r.marginBottom-r.paddingBottom-t.additionalMarginBottom;var h=o-i+r.paddingTop+r.marginTop,v=f-i-r.paddingBottom-r.marginBottom,m=r.stickySidebar.offset().top-i,g=r.previousScrollTop-i;"fixed"==r.stickySidebar.css("position")&&"modern"==r.options.sidebarBehavior&&(m+=g),"legacy"==r.options.sidebarBehavior&&(m=d-r.stickySidebar.outerHeight(),m=Math.max(m,d-r.stickySidebar.outerHeight())),m=g>0?Math.min(m,u):Math.max(m,d-r.stickySidebar.outerHeight()),m=Math.max(m,h),m=Math.min(m,v-r.stickySidebar.outerHeight());var b=r.container.height()==r.stickySidebar.outerHeight();n=!b&&m==u||!b&&m==d-r.stickySidebar.outerHeight()?"fixed":i+m-r.sidebar.offset().top-r.paddingTop<=t.additionalMarginTop?"static":"absolute"}if("fixed"==n)r.stickySidebar.css({position:"fixed",width:r.sidebar.width(),top:m,left:r.sidebar.offset().left+parseInt(r.sidebar.css("padding-left"))});else if("absolute"==n){var y={};"absolute"!=r.stickySidebar.css("position")&&(y.position="absolute",y.top=i+m-r.sidebar.offset().top-r.stickySidebarPaddingTop-r.stickySidebarPaddingBottom),y.width=r.sidebar.width(),y.left="",r.stickySidebar.css(y)}else"static"==n&&a();"static"!=n&&1==r.options.updateSidebarHeight&&r.sidebar.css({"min-height":r.stickySidebar.outerHeight()+r.stickySidebar.offset().top-r.sidebar.offset().top+r.paddingBottom}),r.previousScrollTop=i}},r.onScroll(r),e(document).scroll(function(e){return function(){e.onScroll(e)}}(r)),e(window).resize(function(e){return function(){e.stickySidebar.css({position:"static"}),e.onScroll(e)}}(r))})}var i={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,sidebarBehavior:"modern"};t=e.extend(i,t),t.additionalMarginTop=parseInt(t.additionalMarginTop)||0,t.additionalMarginBottom=parseInt(t.additionalMarginBottom)||0,a(t,this)}}(jQuery);var month_format=[,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],no_image="http://3.bp.blogspot.com/-Yw8BIuvwoSQ/VsjkCIMoltI/AAAAAAAAC4c/s55PW6xEKn0/s1600-r/nth.png",carousel_num=6,randompost_num=3;$(".recenmag .HTML .widget-content").each(function(){var e=$(this).find("span").attr("data-label"),t="carousel",a=($(this).prev("h2").text(),$(this).parent().attr("id")),s=$(this).find("span").attr("id");s.match(t)&&$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results="+carousel_num,type:"get",dataType:"jsonp",success:function(e){for(var t="",s='<div class="main-carousel">',r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++)if("alternate"==e.feed.entry[r].link[i].rel){t=e.feed.entry[r].link[i].href;break}var n=e.feed.entry[r].title.$t,d=e.feed.entry[r].category[0].term,l=e.feed.entry[r].published.$t,c=l.substring(0,4),o=l.substring(5,7),f=l.substring(8,10),u=month_format[parseInt(o,10)]+" "+f+", "+c,p=e.feed.entry[r].content.$t,h=$("<div>").html(p);if(p.indexOf("//www.youtube.com/embed/")>-1)var v=e.feed.entry[r].media$thumbnail.url,m=v;else if(p.indexOf("<img")>-1)var g=h.find("img:first").attr("src"),m=g;else var m=no_image;s+='<li class="carousel-item"><div class="carousel-thumb"><a class="box-image" href="'+t+'" style="background:url('+m+') no-repeat center center;background-size: cover"><span class="carousel-overlay"/></a></div><div class="carousel-content"><div class="carousel-tag"><a href="/search/label/'+d+'">'+d+'</a></div><h3 class="recent-title"><a href="'+t+'">'+n+'</a></h3><span class="recent-date">'+u+"</span></div></li>"}s+="</div>",$(".recenmag .HTML .widget-content").each(function(){var e=$(this).parent().attr("id");e==a&&($(this).html(s),$(this).parent().addClass("carousel"),$(".main-carousel").owlCarousel({items:3,margin:5,smartSpeed:550,nav:!0,navText:["",""],loop:!0,autoplay:!0,autoplaySpeed:800,dots:!1,responsive:{0:{items:1,nav:!0},601:{items:2,nav:!0},701:{items:3,nav:!0}}}),$(this).find(".box-image").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/hqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}))})}})}),$("#related-ready").each(function(){var e=$(this).text();$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results=6",type:"get",dataType:"jsonp",success:function(e){for(var t="",a='<div class="related-posts">',s=0;s<e.feed.entry.length;s++){for(var r=0;r<e.feed.entry[s].link.length;r++)if("alternate"==e.feed.entry[s].link[r].rel){t=e.feed.entry[s].link[r].href;break}var i=e.feed.entry[s].title.$t,n=e.feed.entry[s].category[0].term,d=e.feed.entry[s].published.$t,l=d.substring(0,4),c=d.substring(5,7),o=d.substring(8,10),f=month_format[parseInt(c,10)]+" "+o+", "+l,u=e.feed.entry[s].content.$t,p=$("<div>").html(u);if(u.indexOf("//www.youtube.com/embed/")>-1)var h=e.feed.entry[s].media$thumbnail.url.replace("/default.jpg","/mqdefault.jpg"),v=h;else if(u.indexOf("<img")>-1)var m=p.find("img:first").attr("src").replace("s72-c","s1600"),v=m;else var v=no_image;a+='<li class="related-item"><div class="related-thumb"><a class="related-img" href="'+t+'" title="'+i+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="related-overlay"/></a></div><div class="related-content"><a class="related-tag" href="/search/label/'+n+'">'+n+'</a><h3><a href="'+t+'" title="'+i+'">'+i+'</a></h3><span class="recent-date">'+f+"</span></div></li>"}a+='</div><div class="clear"/>',$("#related-ready").html(a),$(".related-img").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/hqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})})}})}),$("img.tagpost_thumb,.PopularPosts ul li img").each(function(){$(this).attr("src",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("src",function(e,t){return t.replace("s72-c","s1600")})}),$(".ready-widget .HTML .widget-content #randomposts").each(function(){$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){e=e.feed.entry.length-3,e=Math.floor(Math.random()*(e-0+1))+0,0==e&&(e=Math.floor(Math.random()*(e-0+1))+1),$.ajax({url:"/feeds/posts/default?alt=json-in-script&start-index="+e+"&max-results="+randompost_num,type:"get",dataType:"jsonp",success:function(e){for(var t="",a='<ul class="custom-widget">',s=0;s<e.feed.entry.length;s++){for(var r=0;r<e.feed.entry[s].link.length;r++)if("alternate"==e.feed.entry[s].link[r].rel){t=e.feed.entry[s].link[r].href;break}var i=e.feed.entry[s].title.$t,n=(e.feed.entry[s].category[0].term,e.feed.entry[s].author[0].name.$t,e.feed.entry[s].published.$t),d=n.substring(0,4),l=n.substring(5,7),c=n.substring(8,10),o=month_format[parseInt(l,10)]+" "+c+", "+d,f=e.feed.entry[s].content.$t,u=$("<div>").html(f);if(f.indexOf("//www.youtube.com/embed/")>-1)var p=e.feed.entry[s].media$thumbnail.url.replace("/default.jpg","/mqdefault.jpg"),h=p;else if(f.indexOf("<img")>-1)var v=u.find("img:first").attr("src").replace("s72-c","s1600"),h=v;else var h=no_image;a+='<li><a class="rcthumb" href="'+t+'" style="background:url('+h+') no-repeat center center;background-size: cover"><span class="img-overlay"/></a><div class="post-panel"><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><span class="recent-date">'+o+"</span></div></li>"}a+="</ul>",$(".ready-widget .HTML .widget-content #randomposts").each(function(){$(this).attr("id").match("randomposts")&&$(this).parent().html(a)})}})}})}),$(".featured .HTML .widget-content").each(function(){var e=$(this).find("span").attr("data-label"),t="random",a="recent",s="label",r=$(this).find("span").attr("id");r.match(t)?$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(e){e=e.feed.entry.length-5,e=Math.floor(Math.random()*(e-0+1))+0,0==e&&(e=Math.floor(Math.random()*(e-0+1))+1),$.ajax({url:"/feeds/posts/default?alt=json-in-script&start-index="+e+"&max-results=5",type:"get",dataType:"jsonp",success:function(e){for(var t="",a='<div cass="feat-wrap">',s=0;s<e.feed.entry.length;s++){for(var r=0;r<e.feed.entry[s].link.length;r++)if("alternate"==e.feed.entry[s].link[r].rel){t=e.feed.entry[s].link[r].href;break}var i=e.feed.entry[s].title.$t,n=e.feed.entry[s].category[0].term,d=(e.feed.entry[s].author[0].name.$t,e.feed.entry[s].published.$t),l=d.substring(0,4),c=d.substring(5,7),o=d.substring(8,10),f=month_format[parseInt(c,10)]+" "+o+", "+l,u=e.feed.entry[s].content.$t,p=$("<div>").html(u);if(u.indexOf("//www.youtube.com/embed/")>-1)var h=e.feed.entry[s].media$thumbnail.url,v=h;else if(u.indexOf("<img")>-1)var m=p.find("img:first").attr("src"),v=m;else var v=no_image;a+=0==s?'<div class="feat-align feat-column1"><div class="hot-item item1"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>":1==s?'<div class="feat-align feat-column2"><div class="hot-item item2"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>":2==s?'<div class="feat-align feat-column3"><div class="hot-item item3"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>":3==s?'<div class="feat-align feat-column4"><div class="hot-item item4"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div>":'<div class="hot-item item5"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>"}a+='<div class="clear"/></div>',$(".featured .HTML .widget-content").each(function(){$(this).find("span").attr("id").match("random")&&($(this).html(a),$(this).find(".rcp-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/hqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}))})}})}}):r.match(a)?$.ajax({url:"/feeds/posts/default?alt=json-in-script",type:"get",dataType:"jsonp",success:function(){$.ajax({url:"/feeds/posts/default?alt=json-in-script&max-results=5",type:"get",dataType:"jsonp",success:function(e){for(var t="",a='<div cass="feat-wrap">',s=0;s<e.feed.entry.length;s++){for(var r=0;r<e.feed.entry[s].link.length;r++)if("alternate"==e.feed.entry[s].link[r].rel){t=e.feed.entry[s].link[r].href;break}var i=e.feed.entry[s].title.$t,n=e.feed.entry[s].category[0].term,d=(e.feed.entry[s].author[0].name.$t,e.feed.entry[s].published.$t),l=d.substring(0,4),c=d.substring(5,7),o=d.substring(8,10),f=month_format[parseInt(c,10)]+" "+o+", "+l,u=e.feed.entry[s].content.$t,p=$("<div>").html(u);if(u.indexOf("//www.youtube.com/embed/")>-1)var h=e.feed.entry[s].media$thumbnail.url,v=h;else if(u.indexOf("<img")>-1)var m=p.find("img:first").attr("src"),v=m;else var v=no_image;a+=0==s?'<div class="feat-align feat-column1"><div class="hot-item item1"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>":1==s?'<div class="feat-align feat-column2"><div class="hot-item item2"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>":2==s?'<div class="feat-align feat-column3"><div class="hot-item item3"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>":3==s?'<div class="feat-align feat-column4"><div class="hot-item item4"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div>":'<div class="hot-item item5"><div class="featured-inner"><<a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel">a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>"}a+='<div class="clear"/></div>',$(".featured .HTML .widget-content").each(function(){$(this).find("span").attr("id").match("recent")&&($(this).html(a),$(this).find(".rcp-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/hqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}))})}})}}):r.match(s)&&$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results=5",type:"get",dataType:"jsonp",success:function(e){for(var t="",a='<div cass="feat-wrap">',s=0;s<e.feed.entry.length;s++){for(var r=0;r<e.feed.entry[s].link.length;r++)if("alternate"==e.feed.entry[s].link[r].rel){t=e.feed.entry[s].link[r].href;break}var i=e.feed.entry[s].title.$t,n=e.feed.entry[s].category[0].term,d=(e.feed.entry[s].author[0].name.$t,e.feed.entry[s].published.$t),l=d.substring(0,4),c=d.substring(5,7),o=d.substring(8,10),f=month_format[parseInt(c,10)]+" "+o+", "+l,u=e.feed.entry[s].content.$t,p=$("<div>").html(u);if(u.indexOf("//www.youtube.com/embed/")>-1)var h=e.feed.entry[s].media$thumbnail.url,v=h;else if(u.indexOf("<img")>-1)var m=p.find("img:first").attr("src"),v=m;else var v=no_image;a+=0==s?'<div class="feat-align feat-column1"><div class="hot-item item1"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>":1==s?'<div class="feat-align feat-column2"><div class="hot-item item2"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>":2==s?'<div class="feat-align feat-column3"><div class="hot-item item3"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>":3==s?'<div class="feat-align feat-column4"><div class="hot-item item4"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div>":'<div class="hot-item item5"><div class="featured-inner"><a class="rcp-thumb" href="'+t+'" style="background:url('+v+') no-repeat center center;background-size: cover"><span class="featured-overlay"/></a><div class="post-panel"><a href="/search/label/'+n+'" class="post-tag">'+n+'</a><h3 class="rcp-title"><a href="'+t+'">'+i+'</a></h3><div class="featured-meta"><span class="featured-date">'+f+"</span></div></div></div></div></div>"}a+='<div class="clear"/></div>',$(".featured .HTML .widget-content").each(function(){$(this).find("span").attr("id").match("label")&&($(this).html(a),$(this).find(".rcp-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/hqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}))})}})}),$(".recent-boxes .HTML .widget-content").each(function(){var e=$(this).find("span").attr("data-label"),t=$(this).find("span").attr("data-no"),a=($(this).prev("h2").text(),$(this).parent().attr("id")),s=$(this).find("span").attr("data-type");s.match("feat")&&$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results=4",type:"get",dataType:"jsonp",success:function(e){for(var t="",s="<ul>",r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++)if("alternate"==e.feed.entry[r].link[i].rel){t=e.feed.entry[r].link[i].href;break}var n=e.feed.entry[r].title.$t,d=e.feed.entry[r].category[0].term,l=(e.feed.entry[r].author[0].name.$t,e.feed.entry[r].published.$t),c=l.substring(0,4),o=l.substring(5,7),f=l.substring(8,10),u=month_format[parseInt(o,10)]+" "+f+", "+c,p=e.feed.entry[r].content.$t,h=$("<div>").html(p);if(p.indexOf("//www.youtube.com/embed/")>-1)var v=e.feed.entry[r].media$thumbnail.url,m=v;else if(p.indexOf("<img")>-1)var g=h.find("img:first").attr("src"),m=g;else var m=no_image;s+=0==r?'<div class="bx-first"><div class="bx-item"><div class="box-thumbnail"><a class="bf-thumb" href="'+t+'" style="background:url('+m+') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="bf-content"><div class="first-tag"><a class="icon '+d+'" href="/search/label/'+d+'">'+d+'</a></div><h3 class="recent-title"><a href="'+t+'">'+n+'</a></h3><span class="recent-date">'+u+"</span></div></div></div>":'<li><div class="box-thumbnail"><a class="box-image" href="'+t+'" style="background:url('+m+') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="'+t+'">'+n+'</a></h3><span class="recent-date">'+u+'</span></div><div class="clear"/></li>'}s+="</ul>",$(".recent-boxes .HTML .widget-content").each(function(){var e=$(this).parent().attr("id");e==a&&($(this).html(s),$(this).parent().addClass("feat"),$(this).parent().addClass("boxes"),$(this).prev("h2").wrap('<div class="box-title"></div>'),$(this).find(".box-image,.bf-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}))})}}),s.match("columnleft")&&$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results="+t,type:"get",dataType:"jsonp",success:function(e){for(var t="",s="<ul>",r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++)if("alternate"==e.feed.entry[r].link[i].rel){t=e.feed.entry[r].link[i].href;break}var n=e.feed.entry[r].title.$t,d=e.feed.entry[r].category[0].term,l=(e.feed.entry[r].author[0].name.$t,e.feed.entry[r].published.$t),c=l.substring(0,4),o=l.substring(5,7),f=l.substring(8,10),u=month_format[parseInt(o,10)]+" "+f+", "+c,p=e.feed.entry[r].content.$t,h=$("<div>").html(p);if(p.indexOf("//www.youtube.com/embed/")>-1)var v=e.feed.entry[r].media$thumbnail.url,m=v;else if(p.indexOf("<img")>-1)var g=h.find("img:first").attr("src"),m=g;else var m=no_image;s+=0==r?'<div class="bx-first"><div class="box-thumbnail"><a class="bf-thumb" href="'+t+'" style="background:url('+m+') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="bf-content"><div class="first-tag"><a class="icon '+d+'" href="/search/label/'+d+'">'+d+'</a></div><h3 class="recent-title"><a href="'+t+'">'+n+'</a></h3><span class="recent-date">'+u+"</span></div></div>":'<li><div class="box-thumbnail"><a class="box-image" href="'+t+'" style="background:url('+m+') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="'+t+'">'+n+'</a></h3><span class="recent-date">'+u+'</span></div><div class="clear"/></li>'}s+="</ul>",$(".recent-boxes .HTML .widget-content").each(function(){var e=$(this).parent().attr("id");e==a&&($(this).html(s),$(this).parent().addClass("column"),$(this).parent().addClass("columnleft"),$(this).parent().addClass("boxes"),$(this).prev("h2").wrap('<div class="box-title"></div>'),$(this).find(".box-image,.bf-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}))})}}),s.match("columnright")&&$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results="+t,type:"get",dataType:"jsonp",success:function(e){for(var t="",s="<ul>",r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++)if("alternate"==e.feed.entry[r].link[i].rel){t=e.feed.entry[r].link[i].href;break}var n=e.feed.entry[r].title.$t,d=e.feed.entry[r].category[0].term,l=(e.feed.entry[r].author[0].name.$t,e.feed.entry[r].published.$t),c=l.substring(0,4),o=l.substring(5,7),f=l.substring(8,10),u=month_format[parseInt(o,10)]+" "+f+", "+c,p=e.feed.entry[r].content.$t,h=$("<div>").html(p);if(p.indexOf("//www.youtube.com/embed/")>-1)var v=e.feed.entry[r].media$thumbnail.url,m=v;else if(p.indexOf("<img")>-1)var g=h.find("img:first").attr("src"),m=g;else var m=no_image;s+=0==r?'<div class="bx-first"><div class="box-thumbnail"><a class="bf-thumb" href="'+t+'" style="background:url('+m+') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="bf-content"><div class="first-tag"><a class="icon '+d+'" href="/search/label/'+d+'">'+d+'</a></div><h3 class="recent-title"><a href="'+t+'">'+n+'</a></h3><span class="recent-date">'+u+"</span></div></div>":'<li><div class="box-thumbnail"><a class="box-image" href="'+t+'" style="background:url('+m+') no-repeat center center;background-size: cover"><span class="img-overlay"/></a></div><div class="recent-content"><h3 class="recent-title"><a href="'+t+'">'+n+'</a></h3><span class="recent-date">'+u+'</span></div><div class="clear"/></li>'}s+="</ul>",$(".recent-boxes .HTML .widget-content").each(function(){var e=$(this).parent().attr("id");e==a&&($(this).html(s),$(this).parent().addClass("column"),$(this).parent().addClass("columnright"),$(this).parent().addClass("boxes"),$(this).prev("h2").wrap('<div class="box-title"></div>'),$(this).find(".box-image,.bf-thumb").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}))})}}),s.match("gallery")&&$.ajax({url:"/feeds/posts/default/-/"+e+"?alt=json-in-script&max-results=6",type:"get",dataType:"jsonp",success:function(e){for(var t="",s="<ul>",r=0;r<e.feed.entry.length;r++){for(var i=0;i<e.feed.entry[r].link.length;i++)if("alternate"==e.feed.entry[r].link[i].rel){t=e.feed.entry[r].link[i].href;break}var n=e.feed.entry[r].title.$t,d=e.feed.entry[r].category[0].term,l=(e.feed.entry[r].author[0].name.$t,e.feed.entry[r].content.$t),c=$("<div>").html(l);if(l.indexOf("//www.youtube.com/embed/")>-1)var o=e.feed.entry[r].media$thumbnail.url,f=o;else if(l.indexOf("<img")>-1)var u=c.find("img:first").attr("src"),f=u;else var f=no_image;s+='<li><a class="box-image" href="'+t+'" style="background:url('+f+') no-repeat center center;background-size: cover"><span class="gallery-overlay"/></a><div class="category-gallery"><a class="icon '+d+'" href="/search/label/'+d+'"></a></div><div class="recent-content"><h3 class="recent-title"><a href="'+t+'">'+n+'</a></h3></div><div class="clear"/></li>'}s+="</ul>",$(".recent-boxes .HTML .widget-content").each(function(){var e=$(this).parent().attr("id");e==a&&($(this).html(s),$(this).parent().addClass("gallery"),$(this).prev("h2").wrap('<div class="box-title"></div>'),$(this).find(".box-image").each(function(){$(this).attr("style",function(e,t){return t.replace("/default.jpg","/mqdefault.jpg")}).attr("style",function(e,t){return t.replace("s72-c","s1600")})}))})}})}),jQuery(document).ready(function(){jQuery("#feawidget,.sidebar-wrapper").theiaStickySidebar({additionalMarginTop:60})}),jQuery(document).ready(function(e){var t=e("#BackToTop");e(window).scroll(function(){e(this).scrollTop()>=200?t.show(10).animate({right:"25px"},10):t.animate({right:"-80px"},10)}),t.click(function(t){t.preventDefault(),e("html,body").animate({scrollTop:0},400)})}),$(document).ready(function(){var e=$(".headerpic-wrapper").offset().top,t=function(){var t=$(window).scrollTop();t>e?$(".headerpic-wrapper").css({position:"fixed",top:0,"z-index":9999}):$(".headerpic-wrapper").css({position:"relative"})};t(),$(window).scroll(function(){t()})});
