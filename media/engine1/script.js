// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_kenburns(q,k,d){var f=jQuery;var b=document.createElement("canvas").getContext;var p=q.paths||[{from:[0,0,1],to:[0,0,1.2]},{from:[0,0,1.2],to:[0,0,1]},{from:[1,0,1],to:[1,0,1.2]},{from:[0,1,1.2],to:[0,1,1]},{from:[1,1,1],to:[1,1,1.2]},{from:[0.5,1,1],to:[0.5,1,1.3]},{from:[1,0.5,1.2],to:[1,0.5,1]},{from:[1,0.5,1],to:[1,0.5,1.2]},{from:[0,0.5,1.2],to:[0,0.5,1]},{from:[1,0.5,1.2],to:[1,0.5,1]},{from:[0.5,0.5,1],to:[0.5,0.5,1.2]},{from:[0.5,0.5,1.3],to:[0.5,0.5,1]},{from:[0.5,1,1],to:[0.5,0,1.15]}];function r(h){return p[h?Math.floor(Math.random()*(b?p.length:Math.min(5,p.length))):0]}function e(w,t){var v,h=0,s=40/t;var x=setInterval(function(){if(h<1){if(!v){v=1;w(h);v=0}h+=s}else{u(1)}},40);function u(y){clearInterval(x);if(y){w(1)}}return{stop:u}}var n=q.width,g=q.height;var j,a;var o,m;function i(){o=f('<div style="width:100%;height:100%"></div>').css({"z-index":8,position:"absolute",left:0,top:0}).appendTo(d)}i();function c(v,s,h){var t={width:100*v[2]+"%"};t[s?"right":"left"]=-100*(v[2]-1)*(s?(1-v[0]):v[0])+"%";t[h?"bottom":"top"]=-100*(v[2]-1)*(h?(1-v[1]):v[1])+"%";if(!b){for(var u in t){if(/\%/.test(t[u])){t[u]=(/right|left|width/.test(u)?n:g)*parseFloat(t[u])/100+"px"}}}return t}function l(t,y,v){if(b){if(a){a.stop(1)}a=j}if(m){m.remove()}m=o;i();if(v){o.hide();m.stop(true,true)}if(b){var s,h;var u,x;u=f('<canvas width="'+n+'" height="'+g+'"/>');u.css({position:"absolute",left:0,top:0,width:"100%",height:"100%"}).appendTo(o);s=u.get(0).getContext("2d");x=u.clone().appendTo(o);h=x.get(0).getContext("2d");j=new e(function(z){var B=[y.from[0]*(1-z)+z*y.to[0],y.from[1]*(1-z)+z*y.to[1],y.from[2]*(1-z)+z*y.to[2]];h.drawImage(t,-n*(B[2]-1)*B[0],-g*(B[2]-1)*B[1],n*B[2],g*B[2]);s.clearRect(0,0,n,g);var A=s;s=h;h=A},q.duration+q.delay*2)}else{var w=f('<img src="'+t.src+'"/>').css({position:"absolute",left:"auto",right:"auto",top:"auto",bottom:"auto"}).appendTo(o).css(c(y.from,y.from[0]>0.5,y.from[1]>0.5)).animate(c(y.to,y.from[0]>0.5,y.from[1]>0.5),{easing:"linear",queue:false,duration:(1.5*q.duration+q.delay)})}if(v){o.fadeIn(q.duration)}}k.each(function(h){f(this).css({visibility:"hidden"});if(h==q.startSlide){l(this,r(0),0)}});this.go=function(h,s){l(k.get(h),r(h),1);return h}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.0
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"kenburns",prev:"",next:"",duration:20*100,delay:20*100,width:540,height:358,autoPlay:true,playPause:false,stopOnHover:false,loop:false,bullets:true,caption:false,captionEffect:"slide",controls:true,onBeforeStep:0,images:0});