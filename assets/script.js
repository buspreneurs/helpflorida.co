(window.NREUM||(NREUM={})).loader_config={xpid:"UQcOWVBACgQCV1FW"};window.NREUM||(NREUM={}),__nr_require=function a(b,c,d){function e(f){if(!c[f]){var g=c[f]={exports:{}};b[f][0].call(g.exports,function(a){var c=b[f][1][a];return e(c?c:a)},g,g.exports,a,b,c,d)}return c[f].exports}for(var f=0;f<d.length;f++)e(d[f]);return e}({1:[function(a,b){function c(a,b,c){c||(c={});for(var d=f[a],e=d&&d.length||0,h=c[g]||(c[g]={}),i=0;e>i;i++)d[i].apply(h,b);return h}function d(a,b){var c=f[a]||(f[a]=[]);c.push(b)}function e(a){return delete a[g]}var f={},g="nr@context";b.exports={on:d,emit:c,clear:e}},{}],2:[function(a){function b(a,b,e,g,i){return h?h-=1:c("err",[i||new UncaughtException(a,b,e)]),"function"==typeof f?f.apply(this,d(arguments)):!1}function UncaughtException(a,b,c){this.message=a||"Uncaught error with no additional information",this.sourceURL=b,this.line=c}var c=a("handle"),d=a("lodash._slice"),e=a("../../../contextual-ee"),f=window.onerror,g=!1,h=0;a("loader").features.push("err"),window.onerror=b;try{throw new Error}catch(i){"stack"in i&&(a("../../wrap-timer"),a("../../wrap-raf"),"addEventListener"in window&&a("../../wrap-events"),window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&a("../../wrap-xhr"),g=!0)}e.on("fn-start",function(){g&&(h+=1)}),e.on("fn-err",function(a,b,d){g&&(this.thrown=!0,c("err",[d,(new Date).getTime()]))}),e.on("fn-end",function(){g&&!this.thrown&&h>0&&(h-=1)})},{"../../../contextual-ee":1,"../../wrap-events":3,"../../wrap-raf":4,"../../wrap-timer":5,"../../wrap-xhr":6,handle:"4O2Y62",loader:"YLUGVp","lodash._slice":14}],3:[function(a){function b(a){d.inPlace(a,["addEventListener","removeEventListener"],"-",c)}function c(a){return a[1]}var d=a("../wrap-function"),e=(a("lodash._slice"),a("../contextual-ee"));if(b(window),"getPrototypeOf"in Object){for(var f=document;f&&!f.hasOwnProperty("addEventListener");)f=Object.getPrototypeOf(f);f&&b(f);for(var g=XMLHttpRequest.prototype;g&&!g.hasOwnProperty("addEventListener");)g=Object.getPrototypeOf(g);g&&b(g)}else XMLHttpRequest.prototype.hasOwnProperty("addEventListener")&&b(XMLHttpRequest.prototype);e.on("addEventListener-start",function(a){if(a[1]){var b=a[1];"function"==typeof b?this.wrapped=b["nr@wrapped"]?a[1]=b["nr@wrapped"]:b["nr@wrapped"]=a[1]=d(b,"fn-"):"function"==typeof b.handleEvent&&d.inPlace(b,["handleEvent"],"fn-")}}),e.on("removeEventListener-start",function(a){var b=this.wrapped;b&&(a[1]=b)})},{"../contextual-ee":1,"../wrap-function":15,"lodash._slice":14}],4:[function(a){var b=(a("lodash._slice"),a("../wrap-function")),c=a("../contextual-ee");b.inPlace(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","msRequestAnimationFrame"],"raf-"),c.on("raf-start",function(a){a[0]=b(a[0],"fn-")})},{"../contextual-ee":1,"../wrap-function":15,"lodash._slice":14}],5:[function(a){function b(a){var b=a[0];"string"==typeof b&&(b=new Function(b)),a[0]=c(b,"fn-")}var c=(a("lodash._slice"),a("../wrap-function")),d=a("../contextual-ee");c.inPlace(window,["setTimeout","setInterval","setImmediate"],"setTimer-"),d.on("setTimer-start",b)},{"../contextual-ee":1,"../wrap-function":15,"lodash._slice":14}],6:[function(a){function b(){c.inPlace(this,f,"fn-")}var c=a("../wrap-function"),d=a("../contextual-ee"),e=window.XMLHttpRequest,f=["onload","onerror","onabort","onloadstart","onloadend","onprogress","onreadystatechange","ontimeout"];window.XMLHttpRequest=function(a){var f=new e(a);return d.emit("new-xhr",[],f),c.inPlace(f,["addEventListener","removeEventListener"],"-",function(a,b){return b}),f.addEventListener("readystatechange",b,!1),f},window.XMLHttpRequest.prototype=e.prototype},{"../contextual-ee":1,"../wrap-function":15}],7:[function(a){function b(a){var b=this.params,c=this.metrics;if(!this.ended){this.ended=!0;for(var d=0;j>d;d++)a.removeEventListener(i[d],this.listener,!1);if(!b.aborted){if(c.duration=(new Date).getTime()-this.startTime,4===a.readyState){if(b.status=a.status,a.responseText&&a.responseText.length&&(c.rxSize=a.responseText.length),this.sameOrigin){var f=a.getResponseHeader("X-NewRelic-App-Data");f&&(b.cat=f.split(", ").pop())}}else b.status=0;c.cbTime=this.cbTime,e("xhr",[b,c])}}}function c(a,b){var c=f(b),d=a.params;d.host=c.hostname+":"+c.port,d.pathname=c.pathname,a.sameOrigin=c.sameOrigin}function d(a,b){return b}if(window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&!/CriOS/.test(navigator.userAgent)){a("loader").features.push("xhr");var e=a("handle"),f=a("./parse-url.js"),g=a("../../../wrap-function"),h=a("../../../contextual-ee"),i=["load","error","abort","timeout"],j=i.length,k=a("../../../loader/id");a("../../wrap-events"),a("../../wrap-xhr"),h.on("new-xhr",function(){this.totalCbs=0,this.called=0,this.cbTime=0,this.end=b,this.ended=!1,this.xhrGuids={}}),g.inPlace(XMLHttpRequest.prototype,["open","send"],"-xhr-",d),h.on("open-xhr-start",function(a){this.params={method:a[0]},c(this,a[1]),this.metrics={}}),h.on("open-xhr-end",function(a,b){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&b.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),h.on("send-xhr-start",function(a,b){var c=this.metrics,d=a[0],e=this;c&&d&&d.length&&(c.txSize=d.length),this.startTime=(new Date).getTime(),this.listener=function(a){"abort"===a.type&&(e.params.aborted=!0),("load"!==a.type||e.called===e.totalCbs&&(e.onloadCalled||"function"!=typeof b.onload))&&e.end(b)};for(var f=0;j>f;f++)b.addEventListener(i[f],this.listener,!1)}),h.on("xhr-cb-time",function(a,b,c){this.cbTime+=a,b?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof c.onload||this.end(c)}),h.on("xhr-load-added",function(a,b){var c=""+k(a)+!!b;this.xhrGuids&&!this.xhrGuids[c]&&(this.xhrGuids[c]=!0,this.totalCbs+=1)}),h.on("xhr-load-removed",function(a,b){var c=""+k(a)+!!b;this.xhrGuids&&this.xhrGuids[c]&&(delete this.xhrGuids[c],this.totalCbs-=1)}),h.on("addEventListener-end",function(a,b){b instanceof XMLHttpRequest&&"load"===a[0]&&h.emit("xhr-load-added",[a[1],a[2]],b)}),h.on("removeEventListener-end",function(a,b){b instanceof XMLHttpRequest&&"load"===a[0]&&h.emit("xhr-load-removed",[a[1],a[2]],b)}),h.on("fn-start",function(a,b,c){b instanceof XMLHttpRequest&&("onload"===c&&(this.onload=!0),("load"===(a[0]&&a[0].type)||this.onload)&&(this.xhrCbStart=(new Date).getTime()))}),h.on("fn-end",function(a,b){this.xhrCbStart&&h.emit("xhr-cb-time",[(new Date).getTime()-this.xhrCbStart,this.onload,b],b)})}},{"../../../contextual-ee":1,"../../../loader/id":11,"../../../wrap-function":15,"../../wrap-events":3,"../../wrap-xhr":6,"./parse-url.js":8,handle:"4O2Y62",loader:"YLUGVp"}],8:[function(a,b){b.exports=function(a){var b=document.createElement("a"),c=window.location,d={};b.href=a,d.port=b.port;var e=b.href.split("://");return!d.port&&e[1]&&(d.port=e[1].split("/")[0].split(":")[1]),d.port&&"0"!==d.port||(d.port="https"===e[0]?"443":"80"),d.hostname=b.hostname||c.hostname,d.pathname=b.pathname,"/"!==d.pathname.charAt(0)&&(d.pathname="/"+d.pathname),d.sameOrigin=!b.hostname||b.hostname===document.domain&&b.port===c.port&&b.protocol===c.protocol,d}},{}],handle:[function(a,b){b.exports=a("4O2Y62")},{}],"4O2Y62":[function(a,b){function c(a,b){var c=d[a];return c?c.apply(this,b):(e[a]||(e[a]=[]),void e[a].push(b))}var d={},e={};b.exports=c,c.queues=e,c.handlers=d},{}],11:[function(a,b){function c(a){if(!a||"object"!=typeof a&&"function"!=typeof a)return-1;if(a===window)return 0;if(e.call(a,"__nr"))return a.__nr;try{return Object.defineProperty(a,"__nr",{value:d,writable:!0,enumerable:!1}),d}catch(b){return a.__nr=d,d}finally{d+=1}}var d=1,e=Object.prototype.hasOwnProperty;b.exports=c},{}],loader:[function(a,b){b.exports=a("YLUGVp")},{}],YLUGVp:[function(a,b){function c(){var a=m.info=NREUM.info;if(a&&a.agent&&a.licenseKey&&a.applicationID){m.proto="https"===l.split(":")[0]||a.sslForHttp?"https://":"http://",g("mark",["onload",f()]);var b=i.createElement("script");b.src=m.proto+a.agent,i.body.appendChild(b)}}function d(){"complete"===i.readyState&&e()}function e(){g("mark",["domContent",f()])}function f(){return(new Date).getTime()}var g=a("handle"),h=window,i=h.document,j="addEventListener",k="attachEvent",l=(""+location).split("?")[0],m=b.exports={offset:f(),origin:l,features:[]};i[j]?(i[j]("DOMContentLoaded",e,!1),h[j]("load",c,!1)):(i[k]("onreadystatechange",d),h[k]("onload",c)),g("mark",["firstbyte",f()])},{handle:"4O2Y62"}],14:[function(a,b){function c(a,b,c){b||(b=0),"undefined"==typeof c&&(c=a?a.length:0);for(var d=-1,e=c-b||0,f=Array(0>e?0:e);++d<e;)f[d]=a[b+d];return f}b.exports=c},{}],15:[function(a,b){function c(a,b,c,d){function nrWrapper(){var g,h=f(arguments),i=this,j=c&&c(h,i)||{};try{e.emit(b+"start",[h,i,d],j)}catch(k){}try{return g=a.apply(i,h)}catch(l){throw e.emit(b+"err",[h,i,l],j),l}finally{try{e.emit(b+"end",[h,i,g],j)}catch(k){}}}return a&&"function"==typeof a&&a.apply&&!a._wrapped?(b||(b=""),nrWrapper._wrapped=!0,nrWrapper):a}function d(a,b,d,e){d||(d="");var f,g,h,i="-"===d.charAt(0);for(h=0;h<b.length;h++)g=b[h],f=a[g],f&&"function"==typeof f&&f.apply&&!f._wrapped&&(a[g]=c(f,i?g+d:d,e,g,a))}var e=a("../contextual-ee"),f=a("lodash._slice");b.exports=c,c.inPlace=d},{"../contextual-ee":1,"lodash._slice":14}]},{},["YLUGVp",2,7]);