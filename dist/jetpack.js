var jetPack=function(e){e="object"==typeof e?e:{};var n,o,t=this,l=!0,c=!0;t.callback="function"==typeof e.callback?e.callback:null;var a={slow:2e3,medium:900,fast:400},i=a.medium,r=function(){return window.pageYOffset||n.scrollTop},u=function(){return o.scrollHeight||n.scrollHeight},f=!1;t.setDuration=function(e){i=a.medium,e&&(isNaN(e)?a.ifhasOwnProperty(optionDuration)?i=a[e]:console.warn('invalid parameter: "'+e+'" keeping default'):i=Number(e))},t.setupdateURL=function(e){"boolean"==typeof e?l=e:console.warn('invalid parameter: "'+e+'" keeping default')},t.setAnimate=function(e){"boolean"==typeof e?c=e:console.warn('invalid parameter: "'+e+'" keeping default')},t.scroll=function(e,t){(t="object"==typeof t?t:{}).callback="function"==typeof t.callback?t.callback:function(){};var l=function(e,n,o,t){return(e/=t/2)<1?o/2*e*e*e+n:o/2*((e-=2)*e*e+2)+n},a=null,f=r(),s=u()-window.innerHeight,d=f+e<s?e:s-f;if(c){var m=function(e){var c=e-(a=a||e);n.scrollTop=o.scrollTop=l(c,f,d,i),c<i?requestAnimationFrame(m):t.callback()};requestAnimationFrame(m)}else n.scrollTop=o.scrollTop=d},t.scrollTo=function(e,n){t.scroll(e-r(),n)},t.scrollToElement=function(e,n){"object"==typeof e&&e&&t.scroll(e.getBoundingClientRect().top,n)},t.hookAnchors=function(){if(!f){window.addEventListener("click",function(e){var n,o=e.target;"A"===o.nodeName&&"#"===(n=o.getAttribute("href")).charAt(0)&&(console.log(n),e.preventDefault(),n.length>1?(elem=document.getElementById(n.substring(1)))&&t.scrollToElement(elem,{callback:function(){l&&(window.location.href=n)}}):t.scrollToElement(document.body,{callback:function(){l&&(window.location.href="#")}}))}),f=!0}},t.setDuration(e.duration),t.setupdateURL(e.updateURL),t.setAnimate(e.animation),n=document.documentElement,o=document.body};