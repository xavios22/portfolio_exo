(function(){var window=this;var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},g;if("function"==typeof Object.setPrototypeOf)g=Object.setPrototypeOf;else{var k;a:{var ba={H:!0},ca={};try{ca.__proto__=ba;k=ca.H;break a}catch(a){}k=!1}g=k?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=g,ea=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,c);e&&Object.defineProperty(a,c,e)}else a[c]=b[c];a.I=b.prototype},m=this,p=function(a){return"string"==typeof a},ha=function(){if(null===q){a:{var a=m.document;if((a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&fa.test(a))break a;a=null}q=a||""}return q},fa=/^[\w+/_-]+[=]{0,2}$/,q=null,ia=function(){},r=function(a){a.m=void 0;a.g=function(){return a.m?a.m:a.m=new a}},t=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0,u=function(a,b){function c(){}c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.J=function(a,c,f){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[c].apply(a,e)}};var la=function(a,b){if(p(a))return p(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},v=function(a,b){for(var c=a.length,e=p(a)?a.split(""):a,d=0;d<c;d++)d in e&&b.call(void 0,e[d],d,a)},na=function(a,b){for(var c=a.length,e=[],d=0,f=p(a)?a.split(""):a,h=0;h<c;h++)if(h in f){var n=f[h];b.call(void 0,n,h,a)&&(e[d++]=n)}return e},oa=function(a,b){for(var c=a.length,e=Array(c),d=p(a)?a.split(""):a,f=0;f<c;f++)f in d&&(e[f]=b.call(void 0,d[f],f,a));return e},pa=function(a,b){a:{for(var c=a.length,e=p(a)?a.split(""):a,d=0;d<c;d++)if(d in e&&b.call(void 0,e[d],d,a)){b=d;break a}b=-1}return 0>b?null:p(a)?a.charAt(b):a[b]},qa=function(a,b){a:{var c=a.length,e=p(a)?a.split(""):a;for(--c;0<=c;c--)if(c in e&&b.call(void 0,e[c],c,a)){b=c;break a}b=-1}return 0>b?null:p(a)?a.charAt(b):a[b]};var ra=function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},sa=function(a,b){var c=0;a=ra(String(a)).split(".");b=ra(String(b)).split(".");for(var e=Math.max(a.length,b.length),d=0;0==c&&d<e;d++){var f=a[d]||"",h=b[d]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==f[0].length&&0==h[0].length)break;c=x(0==f[1].length?0:parseInt(f[1],10),0==h[1].length?0:parseInt(h[1],10))||x(0==f[2].length,0==h[2].length)||x(f[2],h[2]);f=f[3];h=h[3]}while(0==c)}return c},x=function(a,b){return a<b?-1:a>b?1:0};var y;a:{var ta=m.navigator;if(ta){var ua=ta.userAgent;if(ua){y=ua;break a}}y=""};var wa=function(){var a=va,b={},c;for(c in a)b[c]=a[c];return b};var z=function(a){z[" "](a);return a};z[" "]=ia;var A=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};var B=function(){this.b="";this.f=xa};B.prototype.c=!0;B.prototype.a=function(){return this.b};var ya=function(a){return a instanceof B&&a.constructor===B&&a.f===xa?a.b:"type_error:TrustedResourceUrl"},xa={};var C=function(){this.l="";this.G=za};C.prototype.c=!0;C.prototype.a=function(){return this.l};var Aa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,za={},Ba=function(a){var b=new C;b.l=a;return b};Ba("about:blank");var Ca=function(a,b){a.src=ya(b);(b=ha())&&a.setAttribute("nonce",b)};var Ea=function(a){Da();var b=new B;b.b=a;return b},Da=ia;var Ia=function(a,b){if(!Fa()&&!Ga()){var c=Math.random();if(c<b)return c=Ha(),a[Math.floor(c*a.length)]}return null},Ha=function(){if(!m.crypto)return Math.random();try{var a=new Uint32Array(1);m.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}},Ja=function(){var a=D(210),b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b))return!1;return!0},Ga=A(function(){return-1!=y.indexOf("Google Web Preview")||1E-4>Math.random()}),Fa=A(function(){return-1!=y.indexOf("MSIE")}),Ka=/^(-?[0-9.]{1,30})$/,La=function(a,b){return Ka.test(a)&&(a=Number(a),!isNaN(a))?a:void 0==b?null:b},Ma=function(){try{return ha()}catch(a){}};var E=function(){return m.googletag||(m.googletag={})};var F={173:"pubads.g.doubleclick.net",174:"securepubads.g.doubleclick.net",7:.02,13:1500,23:.001,24:200,37:.01,38:.001,58:1,66:1E-5,71:.05,76:"",81:.001,103:.01,104:"/pagead/js/rum.js",113:1,124:1,129:.05,134:.01,135:.1,143:.005,144:.001,187:.01,150:".google.be",179:0,211:!1,196:.001,234:.01,236:5E-4,197:.001,152:[],172:null,191:"001810270052190",192:"021810312337520",190:"011810312337520",180:null,219:[],230:{},210:{},227:{},226:[],241:{},202:"",213:1,214:.05,215:.01,217:0,220:!1,228:"//www.googletagservices.com/pubconsole/"};F[6]=function(a,b){try{for(var c=null;c!=a;c=a,a=a.parent)switch(a.location.protocol){case "https:":return!0;case "file:":return!!b;case "http:":return!1}}catch(e){}return!0}(window);F[49]=(new Date).getTime();F[36]=/^true$/.test("false");F[46]=/^true$/.test("false");F[148]=/^true$/.test("false");F[221]=/^true$/.test("true");F[204]=La("{{MOD}}",-1);var G=function(){for(var a in F)this[a]=F[a]};r(G);var D=function(a){return G.g()[a]},H=function(a,b){G.g()[a]=b},Na=E(),Oa=G.g(),Pa=Na._vars_,Qa;for(Qa in Pa)Oa[Qa]=Pa[Qa];Na._vars_=Oa;var Ra=function(){return La("2")||0},Sa=function(){return"273"},Ta=E();Ta.hasOwnProperty("getVersion")||(Ta.getVersion=Sa);var I=function(){},Ua="function"==typeof Uint8Array,K=function(a,b,c,e){a.b=null;b||(b=[]);a.K=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var d=a.a[b];if(!(null===d||"object"!=typeof d||"array"==t(d)||Ua&&d instanceof Uint8Array)){a.h=b-a.f;a.c=d;break a}}a.h=Number.MAX_VALUE}a.w={};if(c)for(b=0;b<c.length;b++)d=c[b],d<a.h?(d+=a.f,a.a[d]=a.a[d]||J):(Va(a),a.c[d]=a.c[d]||J);if(e&&e.length)for(b=0;b<e.length;b++)Wa(a,e[b])},J=[],Va=function(a){var b=a.h+a.f;a.a[b]||(a.c=a.a[b]={})},Xa=function(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===J?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===J?a.c[b]=[]:c},Ya=function(a,b){if(b<a.h){b+=a.f;var c=a.a[b];return c===J?a.a[b]=[]:c}c=a.c[b];return c===J?a.c[b]=[]:c},L=function(a,b,c){a=Xa(a,b);return null==a?c:a},Za=function(a,b,c){b<a.h?a.a[b+a.f]=c:(Va(a),a.c[b]=c)},Wa=function(a,b){for(var c,e,d=0;d<b.length;d++){var f=b[d],h=Xa(a,f);null!=h&&(c=f,e=h,Za(a,f,void 0))}return c?(Za(a,c,e),c):0},M=function(a,b,c){a.b||(a.b={});if(!a.b[c]){var e=Xa(a,c);e&&(a.b[c]=new b(e))}return a.b[c]},N=function(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var e=Ya(a,c),d=[],f=0;f<e.length;f++)d[f]=new b(e[f]);a.b[c]=d}b=a.b[c];b==J&&(b=a.b[c]=[]);return b};var $a=function(a,b){a=[a];for(var c=b.length-1;0<=c;--c)a.push(typeof b[c],b[c]);return a.join("\x0B")};var ab=function(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var O=null,bb=function(){if(null===O){O="";try{var a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);O=b?b[1]:""}}catch(c){}}return O};var db=function(a){K(this,a,cb,null)};u(db,I);var fb=function(a){K(this,a,eb,null)};u(fb,I);var P=function(a){K(this,a,gb,hb)};u(P,I);var ib=function(a){K(this,a,null,null)};u(ib,I);var kb=function(a){K(this,a,jb,null)};u(kb,I);var Q=function(a){K(this,a,lb,mb)};u(Q,I);var cb=[2],eb=[2];fb.prototype.getId=function(){return L(this,1,0)};var gb=[5],hb=[[1,2,3,6]],jb=[4],lb=[2,8],mb=[[3,4,5],[6,7]];var nb=function(a){return null!=a?!a:a},ob=function(a,b){for(var c=!1,e=0;e<a.length;e++){var d=a[e].call();if(d==b)return d;null==d&&(c=!0)}if(!c)return!b},qb=function(a,b){var c=N(a,Q,2);if(!c.length)return pb(a,b);a=L(a,1,0);if(1==a)return nb(qb(c[0],b));c=oa(c,function(a){return function(){return qb(a,b)}});switch(a){case 2:return ob(c,!1);case 3:return ob(c,!0)}},pb=function(a,b){var c=Wa(a,mb[0]);a:{switch(c){case 3:var e=L(a,3,0);break a;case 4:e=L(a,4,0);break a;case 5:e=L(a,5,0);break a}e=void 0}if(e&&(b=(b=b[c])&&b[e])){try{var d=b.apply(null,Ya(a,8))}catch(f){return}b=L(a,1,0);if(4==b)return!!d;e=null!=d;if(5==b)return e;a:{switch(c){case 4:a=+L(a,6,0);break a;case 5:a=L(a,7,"");break a}a=void 0}if(null!=a){if(6==b)return d===a;if(9==b)return 0==sa(d,a);if(e)switch(b){case 7:return d<a;case 8:return d>a;case 12:return(new RegExp(a)).test(d);case 10:return-1==sa(d,a);case 11:return 1==sa(d,a)}}}},rb=function(a,b){return!a||!(!b||!qb(a,b))};var sb=function(a,b){switch(b){case 1:return L(a,1,0);case 2:return L(a,2,0);case 3:return L(a,3,0);case 6:return L(a,6,0);default:return null}},tb=function(a,b){if(!a)return null;switch(b){case 1:return L(a,1,!1);case 2:return+L(a,2,0);case 3:return L(a,3,"");case 6:return Ya(a,4);default:return null}},ub=A(function(){var a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}var b={};if(a=(a=/\bdflags=({.*})(&|$)/.exec(a))&&a[1])try{b=JSON.parse(decodeURIComponent(a))}catch(c){}return b}),S=function(a,b,c){var e=ub();if(e[a]&&null!=e[a][b])return e[a][b];b=R.g().a[a][b];if(!b)return c;b=new P(b);b=vb(b);a=tb(b,a);return null!=a?a:c},vb=function(a){var b=R.g().b;if(b){var c=qa(N(a,ib,5),function(a){return rb(M(a,Q,1),b)});if(c)return M(c,kb,2)}return M(a,kb,4)},R=function(){var a={};this.a=(a[1]={},a[2]={},a[3]={},a[6]={},a);this.b=null};r(R);var wb=function(a){var b=R.g().a;v(a,function(a){var c=Wa(a,hb[0]),d=sb(a,c);d&&(b[c][d]=a.a)})};var xb=function(a,b){var c=this,e=void 0===b?{}:b;b=void 0===e.u?!1:e.u;var d=void 0===e.A?{}:e.A;e=void 0===e.D?[]:e.D;this.h=a;this.w=b;this.b=d;this.a=null;this.f=e;this.c={};if(a=bb())a=a.split(",")||[],v(a,function(a){(a=parseInt(a,10))&&(c.c[a]=!0)})},Ab=function(a){var b=yb.g(),c=b.h[a];c&&(delete b.h[a],v(c,function(a){a=new db(a);rb(M(a,Q,3),b.a)&&(a=zb(b,a))&&(b.f.push(a.getId()),(a=N(a,P,2))&&wb(a))}))},zb=function(a,b){var c=N(b,fb,2),e=a.a,d=e?na(c,function(a){return rb(M(a,Q,3),e)}):c,f=d.length;if(!f)return null;c=L(b,4,0);b=f*L(b,1,0);if(!c)return Bb(a,d,b/1E3);f=null!=a.b[c]?a.b[c]:1E3;if(0>=f)return null;d=Bb(a,d,b/f);a.b[c]=d?0:f-b;return d},Bb=function(a,b,c){var e=a.c,d=pa(b,function(a){return!!e[a.getId()]});return d?d:a.w?null:Ia(b,c)};var Cb=function(a){var b=!1,c=!1;c=void 0===c?!1:c;b=void 0===b?!1:b;m.google_image_requests||(m.google_image_requests=[]);var e=m.document.createElement("img");if(b){var d=function(){if(b){var a=m.google_image_requests,c=la(a,e);0<=c&&Array.prototype.splice.call(a,c,1)}e.removeEventListener&&e.removeEventListener("load",d,!1);e.removeEventListener&&e.removeEventListener("error",d,!1)};e.addEventListener&&e.addEventListener("load",d,!1);e.addEventListener&&e.addEventListener("error",d,!1)}c&&(e.referrerPolicy="no-referrer");e.src=a;m.google_image_requests.push(e)};var Db=A(function(){var a=m.navigator&&m.navigator.userAgent||"";a=a.toLowerCase();return-1!=a.indexOf("firefox/")||-1!=a.indexOf("chrome/")||-1!=a.indexOf("opr/")}),T=function(a,b,c,e,d){e=void 0===e?"":e;var f=a.createElement("link");try{f.rel=c;if(-1!=c.toLowerCase().indexOf("stylesheet"))var h=ya(b);else{if(b instanceof B)var n=ya(b);else{if(b instanceof C)var l=b instanceof C&&b.constructor===C&&b.G===za?b.l:"type_error:SafeUrl";else{if(b instanceof C)var w=b;else b="object"==typeof b&&b.c?b.a():String(b),Aa.test(b)||(b="about:invalid#zClosurez"),w=Ba(b);l=w.a()}n=l}h=n}f.href=h}catch(ma){return}e&&"preload"==c&&(f.as=e);d&&(f.nonce=d);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(f)}catch(ma){}};var Eb=/^\.google\.(com?\.)?[a-z]{2,3}$/,Fb=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/,Gb=function(a){return Eb.test(a)&&!Fb.test(a)},Hb=function(a){return a.replace(/[\W]/g,function(a){return"&#"+a.charCodeAt()+";"})},U=m,Ib=function(a,b){a="https://"+("adservice"+b+"/adsid/integrator."+a);b=["domain="+encodeURIComponent(m.location.hostname)];V[3]>=+new Date&&b.push("adsid="+encodeURIComponent(V[1]));return a+"?"+b.join("&")},V,W,X=function(){U=m;V=U.googleToken=U.googleToken||{};var a=+new Date;V[1]&&V[3]>a&&0<V[2]||(V[1]="",V[2]=-1,V[3]=-1,V[4]="",V[6]="");W=U.googleIMState=U.googleIMState||{};Gb(W[1])||(W[1]=".google.com");"array"==t(W[5])||(W[5]=[]);"boolean"==typeof W[6]||(W[6]=!1);"array"==t(W[7])||(W[7]=[]);"number"==typeof W[8]||(W[8]=0)},Jb=function(a){try{a()}catch(b){m.setTimeout(function(){throw b;},0)}},Lb=function(a){"complete"==m.document.readyState||"loaded"==m.document.readyState||m.document.currentScript&&m.document.currentScript.async?Kb(3):a()},Mb=0,Y={i:function(){return 0<W[8]},o:function(){W[8]++},B:function(){0<W[8]&&W[8]--},C:function(){W[8]=0},j:function(){},F:function(){return!1},v:function(){return W[5]},s:Jb},Z={i:function(){return W[6]},o:function(){W[6]=!0},B:function(){W[6]=!1},C:function(){W[6]=!1},j:function(){},F:function(){return".google.com"!=W[1]&&2<++Mb},v:function(){return W[7]},s:function(a){Lb(function(){Jb(a)})}},Kb=function(a){1E-5>Math.random()&&Cb("https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+a)};Y.j=function(){if(!Y.i()){var a=m.document,b=function(b){b=Ib("js",b);var c=Ma();T(a,b,"preload","script",c);c=a.createElement("script");c.type="text/javascript";c.onerror=function(){return m.processGoogleToken({},2)};b=Ea(b);Ca(c,b);try{(a.head||a.body||a.documentElement).appendChild(c),Y.o()}catch(h){}},c=W[1];b(c);".google.com"!=c&&b(".google.com");b={};var e=(b.newToken="FBT",b);m.setTimeout(function(){return m.processGoogleToken(e,1)},1E3)}};Z.j=function(){if(!Z.i()){var a=m.document,b=Ib("sync.js",W[1]);T(a,b,"preload","script");b=Hb(b);var c=z("script"),e="",d=Ma();d&&(e='nonce="'+Hb(d)+'"');var f="<"+c+' src="'+b+'" '+e+"></"+c+">"+("<"+c+" "+e+'>processGoogleTokenSync({"newToken":"FBS"},5);</'+c+">");Lb(function(){a.write(f);Z.o()})}};var Nb=function(a){X();V[3]>=+new Date&&V[2]>=+new Date||a.j()},Pb=function(){m.processGoogleToken=m.processGoogleToken||function(a,b){return Ob(Y,a,b)};Nb(Y)},Qb=function(){m.processGoogleTokenSync=m.processGoogleTokenSync||function(a,b){return Ob(Z,a,b)};Nb(Z)},Ob=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?0:c;var e=b.newToken||"",d="NT"==e,f=parseInt(b.freshLifetimeSecs||"",10),h=parseInt(b.validLifetimeSecs||"",10),n=b["1p_jar"]||"";b=b.pucrd||"";X();1==c?a.C():a.B();if(!e&&a.F())Gb(".google.com")&&(W[1]=".google.com"),a.j();else{var l=U.googleToken=U.googleToken||{},w=0==c&&e&&p(e)&&!d&&"number"==typeof f&&0<f&&"number"==typeof h&&0<h&&p(n);d=d&&!a.i()&&(!(V[3]>=+new Date)||"NT"==V[1]);var ma=!(V[3]>=+new Date)&&0!=c;if(w||d||ma)d=+new Date,f=d+1E3*f,h=d+1E3*h,Kb(c),l[5]=c,l[1]=e,l[2]=f,l[3]=h,l[4]=n,l[6]=b,X();if(w||!a.i()){c=a.v();for(e=0;e<c.length;e++)a.s(c[e]);c.length=0}}};var Rb=function(){this.a=null},Sb=function(a,b){a.a=b};Rb.prototype.b=function(a,b,c,e,d){if(Math.random()>(void 0===c?.01:c))return!1;b.error&&b.meta&&b.id||(b=new ab(b,{context:a,id:void 0===d?"gpt_exception":d}));if(e||this.a)b.meta={},this.a&&this.a(b.meta),e&&e(b.meta);m.google_js_errors=m.google_js_errors||[];m.google_js_errors.push(b);m.error_rep_loaded||(b=m.document,a=b.createElement("script"),Ca(a,Ea(m.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),(b=b.getElementsByTagName("script")[0])&&b.parentNode&&b.parentNode.insertBefore(a,b),m.error_rep_loaded=!0);return!1};var Tb=function(a,b){var c=void 0===c?a.b:c;try{b()}catch(e){if(!c.call(a,420,e,.01,void 0,"gpt_exception"))throw e;}};var Ub=function(a){if(!a.google_ltobserver){var b=new a.PerformanceObserver(function(b){var c=a.google_lt_queue=a.google_lt_queue||[];v(b.getEntries(),function(a){return c.push(a)})});b.observe({entryTypes:["longtask"]});a.google_ltobserver=b}};var Vb=[[28,null,null,[1]],[38,null,null,[1]],[null,7,null,[null,.1]],[40,null,null,[1]],[61,null,null,[1]],[46,null,null,[1]],[11,null,null,[1]],[48,null,null,[1]],[18,null,null,[1]],[39,null,null,[1]],[30,null,null,[1]],[25,null,null,[1]],[3,null,null,[1]],[null,8,null,[null,-1]],[15,null,null,[1]],[null,11,null,[null,10]],[null,2,null,[null,1E3]],[45,null,null,[]],[null,null,2,[null,null,"1-0-30"]],[21,null,null,[1]],[4,null,null,[1]],[7,null,null,[1]]];var Wb=function(){xb.call(this,D(210),{u:D(211),A:D(227),D:D(226)})};ea(Wb,xb);var Xb=function(a,b){var c=b||$a;return function(){var b=this||m;b=b.closure_memoize_cache_||(b.closure_memoize_cache_={});var d=c(a[ja]||(a[ja]=++ka),arguments);return b.hasOwnProperty(d)?b[d]:b[d]=a.apply(this,arguments)}}(function(a){return a&&a.src?/^(?:https?:)?\/\/www\.googletagservices\.com\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src)?0:1:2},function(a,b){return a+"\x0B"+(b[0]&&b[0].src)}),Yb=function(){return 0===Xb(D(172))};var Zb=function(){var a={};this[3]=(a[3]=Yb,a);a={};this[4]=(a[4]=Ra,a);a={};this[5]=(a[2]=function(){return window.location.href},a)};r(Zb);var va={3:[[1,[[20194812,[[20,null,null,[1]]]],[20194813]],null,3],[50,[[21061763],[21061764,[[5,null,null,[1]],[4,null,null,[1]]]]]],[10,[[21061803],[21061804]]],[1,[[21062011],[21062012],[21062013],[21062014],[21062015],[21062016],[21062017],[21062018],[21062019],[21062020],[21062021]]],[50,[[21062068,[[58,null,null,[1]]]],[21062069]]],[1E3,[[21062150,null,[3,[[6,null,null,1,null,19],[6,null,null,1,null,29],[6,null,null,1,null,39],[6,null,null,1,null,49]]]],[21062151,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]],[3,[[6,null,null,1,null,18],[6,null,null,1,null,28],[6,null,null,1,null,38],[6,null,null,1,null,48]]]],[21062152,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]],[3,[[6,null,null,1,null,17],[6,null,null,1,null,27],[6,null,null,1,null,37],[6,null,null,1,null,47]]]],[21062153,[[null,null,null,[null,null,null,"25 25 25 25 25 25 25 25 25 25".split(" ")],null,2]],[3,[[6,null,null,1,null,16],[6,null,null,1,null,26],[6,null,null,1,null,36],[6,null,null,1,null,46]]]]],[4,null,3]],[null,[[21062156],[21062157,[[15,null,null,[1]]]]]],[10,[[21062185],[21062186,[[24,null,null,[1]]]]]],[1,[[21062261],[21062262,[[33,null,null,[1]]]]]],[50,[[21062287],[21062288,[[56,null,null,[1]],[53,null,null,[1]],[52,null,null,[1]],[67,null,null,[1]],[27,null,null,[1]],[29,null,null,[1]],[14,null,null,[1]],[12,null,null,[1]],[63,null,null,[1]],[32,null,null,[1]]]]],null,4],[1,[[21062330],[21062331,[[null,8,null,[null,800]]]],[21062332,[[null,8,null,[null,1E4]]]]],null,3],[10,[[21062352],[21062353,[[20,null,null,[1]]]]],[1,[[4,null,1]]],3],[50,[[21062377],[21062378,[[11,null,null,[]]]]]],[50,[[21062388],[21062389,[[30,null,null,[]]]]]],[1,[[21062398],[21062399,[[null,13,null,[null,1]]]],[21062400,[[null,13,null,[null,1]]]],[21062593,[[null,13,null,[null,2]]]]]],[5,[[21062414],[21062415,[[64,null,null,[1]]]]]],[1,[[21062416],[21062417,[[37,null,null,[1]]]]]],[50,[[21062420],[21062421,[[42,null,null,[1]]]]]],[50,[[21062452],[21062453,[[43,null,null,[1]]]]]],[50,[[21062454],[21062456,[[51,null,null,[1]]]]]],[10,[[21062491,[[null,10,null,[null,2]]]],[21062492,[[null,10,null,[null,3]]]]]],[1,[[21062495],[21062496,[[47,null,null,[1]]]]]],[10,[[21062500],[21062501,[[null,6,null,[null,1]],[27,null,null,[1]],[29,null,null,[1]],[26,null,null,[1]],[14,null,null,[1]],[12,null,null,[1]],[63,null,null,[1]],[32,null,null,[1]]]]],null,4],[null,[[21062505],[21062506,[[null,2,null,[null,3E3]]]],[21062507,[[null,2,null,[null,5E3]]]]],null,5],[50,[[21062576],[21062577,[[20,null,null,[],[[[1,[[4,null,1]]],[1]]]]]]],null,3],[50,[[21062612],[21062613],[21062614]]],[50,[[21062624],[21062625,[[null,2,null,[]]]]],null,5],[1,[[21062638],[21062639,[[66,null,null,[1]]]]]],[null,[[21062652],[21062653,[[null,null,null,[null,null,null,["v","1-0-30"]],null,1]]],[21062654,[[null,null,2,[null,null,"1-0-30"]]]]]],[10,[[21062667],[21062668,[[62,null,null,[1]],[68,null,null,[1]]]]]],[1,[[21062676],[21062677,[[null,11,null,[null,25]]]],[21062678,[[null,11,null,[null,50]]]],[21062679,[[null,11,null,[null,75]]]]]],[1,[[21062693],[21062694,[[65,null,null,[1]]]]]],[null,[[21062697],[21062698,[[72,null,null,[1]]]]]],[1,[[21062717],[21062718,[[null,14,null,[null,1]]]],[21062719,[[null,14,null,[null,2]]]]]],[null,[[21062722],[21062723,[[69,null,null,[1]]]]]],[10,[[21062724],[21062725,[[67,null,null,[1]]]]]],[1E3,[[22316437,null,[2,[[8,null,null,1,null,-1],[7,null,null,1,null,5]]]],[22316438,null,[2,[[8,null,null,1,null,4],[7,null,null,1,null,10]]]]],[4,null,3]],[1,[[21062059,[[null,null,null,[null,null,null,["50","50","50","50","50"]],null,2]]],[21062060,[[null,null,null,[null,null,null,"25 25 25 25 25 25 25 25 25 25".split(" ")],null,2]]],[21062061,[[null,null,null,[null,null,null,["125","125","125","125"]],null,2]]],[22321847],[22321848,[[null,null,null,[null,null,null,"50 50 50 50 50 50 50 50 50 50".split(" ")],null,2]]],[22322161,[[null,null,null,[null,null,null,["250","250"]],null,2]]]]],[10,[[22322686],[22322687,[[null,3,null,[null,.01]]]]]],[1,[[108809132],[108809133,[[45,null,null,[1]]]]]],[null,[[370204054],[370204055,[[73,null,null,[1]]]]]]],4:[[null,[[21062304],[21062305,[[34,null,null,[1]]]]]],[null,[[21062498],[21062499,[[8,null,null,[1]]]]]]],5:[[null,[[21061212],[21061213,[[16,null,null,[1]]]],[21061214,[[17,null,null,[1]]]],[21061277,[[17,null,null,[1]],[16,null,null,[1]]]]]],[1,[[21061590,[[null,null,6,[null,null,"21061590"]]]],[21061591,[[59,null,null,[1]]]]],null,1],[1,[[21062549,[[null,null,5,[null,null,"ob"]],[null,null,6,[null,null,"ob"]]]],[21062550,[[null,null,4,[null,null,"/gpt/pubads_impl_ob_"]]]]],null,1],[400,[[21062605],[21062606,[[23,null,null,[1]]]]],[12,null,null,null,2,null,"today\\.line\\.me/.+/article"],7],[50,[[21062689],[21062690,[[23,null,null,[1]]]],[21062691],[21062692,[[23,null,null,[1]]]]],[12,null,null,null,2,null,"today\\.line\\.me/.+/article"],7],[100,[[21062715,[[null,7,null,[null,1]],[null,null,5,[null,null,"21062715"]],[null,12,null,[null,270]],[null,null,7,[null,null,"21062715"]],[60,null,null,[1]],[null,null,6,[null,null,"21062715"]]]],[21062716,[[null,7,null,[null,1]],[null,12,null,[null,271]],[null,null,7,[null,null,"21062716"]],[60,null,null,[1]]]]],null,1],[1,[[21062720,[[null,7,null,[null,1]],[null,null,5,[null,null,"21062720"]],[null,12,null,[null,270]],[null,null,7,[null,null,"21062720"]],[60,null,null,[1]],[null,null,6,[null,null,"21062720"]]]],[21062721,[[null,7,null,[null,1]],[null,12,null,[null,272]],[null,null,7,[null,null,"21062721"]],[60,null,null,[1]]]]],null,1]],6:[[10,[[21062434],[21062435,[[44,null,null,[1]]]]],[4,null,4]]],7:[[1E3,[[21062473,[[null,null,5,[null,null,"21062473"]],[null,null,6,[null,null,"21062473"]]],[6,null,null,4,null,2]],[21062474,null,[6,null,null,4,null,3]]],[4,null,3],1],[1E3,[[21062475,null,[6,null,null,4,null,1]]],[4,null,3],1]]};var yb=function(){Ja()&&H(210,wa());Wb.call(this);var a=this,b=Zb.g();b[3][6]=function(b){return 0<=la(a.f,parseInt(b,10))};this.a=b;D(219).length||H(219,Vb);R.g().b=b;H(241,b);wb(oa(D(219),function(a){return new P(a)}));H(230,R.g().a)};ea(yb,Wb);r(yb);z("partner.googleadservices.com");var $b=z("www.googletagservices.com"),ac=function(){return D(46)&&!D(6)?"http://pubads.g.doubleclick.net":"https://securepubads.g.doubleclick.net"};(function(a){var b=new Rb;Sb(b,function(a){a.methodId=420});Tb(b,function(){var b=a,e=E(),d=e.fifWin||window;b=b||d.document;var f=[],h=E();h.hasOwnProperty("cmd")||(h.cmd=f);if(e.evalScripts)e.evalScripts();else{if(!(f=b.currentScript))a:{if(f=b.scripts)for(h=0;h<f.length;h++){var n=f[h];if(-1<n.src.indexOf($b+"/tag/js/gpt")){f=n;break a}}f=null}H(172,f);Ab(7);Ab(5);S(1,59,!1)&&(H(173,$b),H(174,$b));f=D(150);X();Gb(f)&&(W[1]=f);d.PerformanceObserver&&d.PerformanceLongTaskTiming&&Ub(d);f=d;f=void 0===f?m:f;if(f=(f=f.performance)&&f.now?f.now():null)f={label:"1",type:9,value:f},d=d.google_js_reporting_queue=d.google_js_reporting_queue||[],1024>d.length&&d.push(f);if(d=D(76))var l=d;else{d=ac();f=S(3,4,"/gpt/pubads_impl_");h="";if(D(148))try{n="";try{n=m.top.location.hash}catch(w){n=m.location.hash}n&&(h=(l=n.match(/\bgptv=(\d+)/))?l[1]:"")}catch(w){}h=h||S(2,12,0)||"273";l=S(3,5,"");d=d+f+h+".js";l&&(d+="?"+l);H(76,d);l=d}d=b.currentScript;if(!("complete"==b.readyState||"loaded"==b.readyState||d&&d.async)){d="gpt-impl-"+Math.random();try{f='<script id="'+d+'" src="'+l+'">\x3c/script>',S(1,17,!1)&&Db()&&(f+='<link rel="preconnect" href="'+ac()+'">'),b.write(f)}catch(w){}b.getElementById(d)&&(e._loadStarted_=!0,H(220,!1),S(2,4,0)||Qb())}e._loadStarted_||(S(2,4,0)||Pb(),S(1,16,!1)&&T(b,l,"preload","script"),d=b.createElement("script"),d.src=l,d.async=!0,(b.head||b.body||b.documentElement).appendChild(d),S(1,17,!1)&&Db()&&T(b,ac(),"preconnect"),H(220,!0),e._loadStarted_=!0)}})})();}).call(this.googletag&&googletag.fifWin?googletag.fifWin.parent:this)
