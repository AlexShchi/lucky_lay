/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});

/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */

;(function($) {

  var defaults = {

    // GENERAL
    mode: 'horizontal',
    slideSelector: '',
    infiniteLoop: true,
    hideControlOnEnd: false,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: false,
    captions: false,
    ticker: false,
    tickerHover: false,
    adaptiveHeight: false,
    adaptiveHeightSpeed: 500,
    video: false,
    useCSS: true,
    preloadImages: 'visible',
    responsive: true,
    slideZIndex: 50,
    wrapperClass: 'bx-wrapper',

    // TOUCH
    touchEnabled: true,
    swipeThreshold: 50,
    oneToOneTouch: true,
    preventDefaultSwipeX: true,
    preventDefaultSwipeY: false,

    // ACCESSIBILITY
    ariaLive: true,
    ariaHidden: true,

    // KEYBOARD
    keyboardEnabled: false,

    // PAGER
    pager: true,
    pagerType: 'full',
    pagerShortSeparator: ' / ',
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,

    // CONTROLS
    controls: true,
    nextText: 'Next',
    prevText: 'Prev',
    nextSelector: null,
    prevSelector: null,
    autoControls: false,
    startText: 'Start',
    stopText: 'Stop',
    autoControlsCombine: false,
    autoControlsSelector: null,

    // AUTO
    auto: false,
    pause: 4000,
    autoStart: true,
    autoDirection: 'next',
    stopAutoOnClick: false,
    autoHover: false,
    autoDelay: 0,
    autoSlideForOnePage: false,

    // CAROUSEL
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: false,

    // CALLBACKS
    onSliderLoad: function() { return true; },
    onSlideBefore: function() { return true; },
    onSlideAfter: function() { return true; },
    onSlideNext: function() { return true; },
    onSlidePrev: function() { return true; },
    onSliderResize: function() { return true; },
	onAutoChange: function() { return true; } //calls when auto slides starts and stops
  };

  $.fn.bxSlider = function(options) {

    if (this.length === 0) {
      return this;
    }

    // support multiple elements
    if (this.length > 1) {
      this.each(function() {
        $(this).bxSlider(options);
      });
      return this;
    }

    // create a namespace to be used throughout the plugin
    var slider = {},
    // set a reference to our slider element
    el = this,
    // get the original window dimens (thanks a lot IE)
    windowWidth = $(window).width(),
    windowHeight = $(window).height();

    // Return if slider is already initialized
    if ($(el).data('bxSlider')) { return; }

    /**
     * ===================================================================================
     * = PRIVATE FUNCTIONS
     * ===================================================================================
     */

    /**
     * Initializes namespace settings to be used throughout plugin
     */
    var init = function() {
      // Return if slider is already initialized
      if ($(el).data('bxSlider')) { return; }
      // merge user-supplied options with the defaults
      slider.settings = $.extend({}, defaults, options);
      // parse slideWidth setting
      slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
      // store the original children
      slider.children = el.children(slider.settings.slideSelector);
      // check if actual number of slides is less than minSlides / maxSlides
      if (slider.children.length < slider.settings.minSlides) { slider.settings.minSlides = slider.children.length; }
      if (slider.children.length < slider.settings.maxSlides) { slider.settings.maxSlides = slider.children.length; }
      // if random start, set the startSlide setting to random number
      if (slider.settings.randomStart) { slider.settings.startSlide = Math.floor(Math.random() * slider.children.length); }
      // store active slide information
      slider.active = { index: slider.settings.startSlide };
      // store if the slider is in carousel mode (displaying / moving multiple slides)
      slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1 ? true : false;
      // if carousel, force preloadImages = 'all'
      if (slider.carousel) { slider.settings.preloadImages = 'all'; }
      // calculate the min / max width thresholds based on min / max number of slides
      // used to setup and update carousel slides dimensions
      slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
      slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
      // store the current state of the slider (if currently animating, working is true)
      slider.working = false;
      // initialize the controls object
      slider.controls = {};
      // initialize an auto interval
      slider.interval = null;
      // determine which property to use for transitions
      slider.animProp = slider.settings.mode === 'vertical' ? 'top' : 'left';
      // determine if hardware acceleration can be used
      slider.usingCSS = slider.settings.useCSS && slider.settings.mode !== 'fade' && (function() {
        // create our test div element
        var div = document.createElement('div'),
        // css transition properties
        props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
        // test for each property
        for (var i = 0; i < props.length; i++) {
          if (div.style[props[i]] !== undefined) {
            slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
            slider.animProp = '-' + slider.cssPrefix + '-transform';
            return true;
          }
        }
        return false;
      }());
      // if vertical mode always make maxSlides and minSlides equal
      if (slider.settings.mode === 'vertical') { slider.settings.maxSlides = slider.settings.minSlides; }
      // save original style data
      el.data('origStyle', el.attr('style'));
      el.children(slider.settings.slideSelector).each(function() {
        $(this).data('origStyle', $(this).attr('style'));
      });

      // perform all DOM / CSS modifications
      setup();
    };

    /**
     * Performs all DOM and CSS modifications
     */
    var setup = function() {
      var preloadSelector = slider.children.eq(slider.settings.startSlide); // set the default preload selector (visible)

      // wrap el in a wrapper
      el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
      // store a namespace reference to .bx-viewport
      slider.viewport = el.parent();

      // add aria-live if the setting is enabled and ticker mode is disabled
      if (slider.settings.ariaLive && !slider.settings.ticker) {
        slider.viewport.attr('aria-live', 'polite');
      }
      // add a loading div to display while images are loading
      slider.loader = $('<div class="bx-loading" />');
      slider.viewport.prepend(slider.loader);
      // set el to a massive width, to hold any needed slides
      // also strip any margin and padding from el
      el.css({
        width: slider.settings.mode === 'horizontal' ? (slider.children.length * 1000 + 215) + '%' : 'auto',
        position: 'relative'
      });
      // if using CSS, add the easing property
      if (slider.usingCSS && slider.settings.easing) {
        el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
      // if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
      } else if (!slider.settings.easing) {
        slider.settings.easing = 'swing';
      }
      // make modifications to the viewport (.bx-viewport)
      slider.viewport.css({
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
      });
      slider.viewport.parent().css({
        maxWidth: getViewportMaxWidth()
      });
      // apply css to all slider children
      slider.children.css({
        // the float attribute is a reserved word in compressors like YUI compressor and need to be quoted #48
        'float': slider.settings.mode === 'horizontal' ? 'left' : 'none',
        listStyle: 'none',
        position: 'relative'
      });
      // apply the calculated width after the float is applied to prevent scrollbar interference
      slider.children.css('width', getSlideWidth());
      // if slideMargin is supplied, add the css
      if (slider.settings.mode === 'horizontal' && slider.settings.slideMargin > 0) { slider.children.css('marginRight', slider.settings.slideMargin); }
      if (slider.settings.mode === 'vertical' && slider.settings.slideMargin > 0) { slider.children.css('marginBottom', slider.settings.slideMargin); }
      // if "fade" mode, add positioning and z-index CSS
      if (slider.settings.mode === 'fade') {
        slider.children.css({
          position: 'absolute',
          zIndex: 0,
          display: 'none'
        });
        // prepare the z-index on the showing element
        slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
      }
      // create an element to contain all slider controls (pager, start / stop, etc)
      slider.controls.el = $('<div class="bx-controls" />');
      // if captions are requested, add them
      if (slider.settings.captions) { appendCaptions(); }
      // check if startSlide is last slide
      slider.active.last = slider.settings.startSlide === getPagerQty() - 1;
      // if video is true, set up the fitVids plugin
      if (slider.settings.video) { el.fitVids(); }
      if (slider.settings.preloadImages === 'all' || slider.settings.ticker) { preloadSelector = slider.children; }
      // only check for control addition if not in "ticker" mode
      if (!slider.settings.ticker) {
        // if controls are requested, add them
        if (slider.settings.controls) { appendControls(); }
        // if auto is true, and auto controls are requested, add them
        if (slider.settings.auto && slider.settings.autoControls) { appendControlsAuto(); }
        // if pager is requested, add it
        if (slider.settings.pager) { appendPager(); }
        // if any control option is requested, add the controls wrapper
        if (slider.settings.controls || slider.settings.autoControls || slider.settings.pager) { slider.viewport.after(slider.controls.el); }
      // if ticker mode, do not allow a pager
      } else {
        slider.settings.pager = false;
      }
      loadElements(preloadSelector, start);
    };

    var loadElements = function(selector, callback) {
      var total = selector.find('img:not([src=""]), iframe').length,
      count = 0;
      if (total === 0) {
        callback();
        return;
      }
      selector.find('img:not([src=""]), iframe').each(function() {
        $(this).one('load error', function() {
          if (++count === total) { callback(); }
        }).each(function() {
          if (this.complete || this.src == '') { $(this).trigger('load'); }
        });
      });
    };

    /**
     * Start the slider
     */
    var start = function() {
      // if infinite loop, prepare additional slides
      if (slider.settings.infiniteLoop && slider.settings.mode !== 'fade' && !slider.settings.ticker) {
        var slice    = slider.settings.mode === 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides,
        sliceAppend  = slider.children.slice(0, slice).clone(true).addClass('bx-clone'),
        slicePrepend = slider.children.slice(-slice).clone(true).addClass('bx-clone');
        if (slider.settings.ariaHidden) {
          sliceAppend.attr('aria-hidden', true);
          slicePrepend.attr('aria-hidden', true);
        }
        el.append(sliceAppend).prepend(slicePrepend);
      }
      // remove the loading DOM element
      slider.loader.remove();
      // set the left / top position of "el"
      setSlidePosition();
      // if "vertical" mode, always use adaptiveHeight to prevent odd behavior
      if (slider.settings.mode === 'vertical') { slider.settings.adaptiveHeight = true; }
      // set the viewport height
      slider.viewport.height(getViewportHeight());
      // make sure everything is positioned just right (same as a window resize)
      el.redrawSlider();
      // onSliderLoad callback
      slider.settings.onSliderLoad.call(el, slider.active.index);
      // slider has been fully initialized
      slider.initialized = true;
      // bind the resize call to the window
      if (slider.settings.responsive) { $(window).bind('resize', resizeWindow); }
      // if auto is true and has more than 1 page, start the show
      if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) { initAuto(); }
      // if ticker is true, start the ticker
      if (slider.settings.ticker) { initTicker(); }
      // if pager is requested, make the appropriate pager link active
      if (slider.settings.pager) { updatePagerActive(slider.settings.startSlide); }
      // check for any updates to the controls (like hideControlOnEnd updates)
      if (slider.settings.controls) { updateDirectionControls(); }
      // if touchEnabled is true, setup the touch events
      if (slider.settings.touchEnabled && !slider.settings.ticker) { initTouch(); }
      // if keyboardEnabled is true, setup the keyboard events
      if (slider.settings.keyboardEnabled && !slider.settings.ticker) {
        $(document).keydown(keyPress);
      }
    };

    /**
     * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
     */
    var getViewportHeight = function() {
      var height = 0;
      // first determine which children (slides) should be used in our height calculation
      var children = $();
      // if mode is not "vertical" and adaptiveHeight is false, include all children
      if (slider.settings.mode !== 'vertical' && !slider.settings.adaptiveHeight) {
        children = slider.children;
      } else {
        // if not carousel, return the single active child
        if (!slider.carousel) {
          children = slider.children.eq(slider.active.index);
        // if carousel, return a slice of children
        } else {
          // get the individual slide index
          var currentIndex = slider.settings.moveSlides === 1 ? slider.active.index : slider.active.index * getMoveBy();
          // add the current slide to the children
          children = slider.children.eq(currentIndex);
          // cycle through the remaining "showing" slides
          for (i = 1; i <= slider.settings.maxSlides - 1; i++) {
            // if looped back to the start
            if (currentIndex + i >= slider.children.length) {
              children = children.add(slider.children.eq(i - 1));
            } else {
              children = children.add(slider.children.eq(currentIndex + i));
            }
          }
        }
      }
      // if "vertical" mode, calculate the sum of the heights of the children
      if (slider.settings.mode === 'vertical') {
        children.each(function(index) {
          height += $(this).outerHeight();
        });
        // add user-supplied margins
        if (slider.settings.slideMargin > 0) {
          height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
        }
      // if not "vertical" mode, calculate the max height of the children
      } else {
        height = Math.max.apply(Math, children.map(function() {
          return $(this).outerHeight(false);
        }).get());
      }

      if (slider.viewport.css('box-sizing') === 'border-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
              parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
      } else if (slider.viewport.css('box-sizing') === 'padding-box') {
        height += parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
      }

      return height;
    };

    /**
     * Returns the calculated width to be used for the outer wrapper / viewport
     */
    var getViewportMaxWidth = function() {
      var width = '100%';
      if (slider.settings.slideWidth > 0) {
        if (slider.settings.mode === 'horizontal') {
          width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
        } else {
          width = slider.settings.slideWidth;
        }
      }
      return width;
    };

    /**
     * Returns the calculated width to be applied to each slide
     */
    var getSlideWidth = function() {
      var newElWidth = slider.settings.slideWidth, // start with any user-supplied slide width
      wrapWidth      = slider.viewport.width();    // get the current viewport width
      // if slide width was not supplied, or is larger than the viewport use the viewport width
      if (slider.settings.slideWidth === 0 ||
        (slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
        slider.settings.mode === 'vertical') {
        newElWidth = wrapWidth;
      // if carousel, use the thresholds to determine the width
      } else if (slider.settings.maxSlides > 1 && slider.settings.mode === 'horizontal') {
        if (wrapWidth > slider.maxThreshold) {
          return newElWidth;
        } else if (wrapWidth < slider.minThreshold) {
          newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
        } else if (slider.settings.shrinkItems) {
          newElWidth = Math.floor((wrapWidth + slider.settings.slideMargin) / (Math.ceil((wrapWidth + slider.settings.slideMargin) / (newElWidth + slider.settings.slideMargin))) - slider.settings.slideMargin);
        }
      }
      return newElWidth;
    };

    /**
     * Returns the number of slides currently visible in the viewport (includes partially visible slides)
     */
    var getNumberSlidesShowing = function() {
      var slidesShowing = 1,
      childWidth = null;
      if (slider.settings.mode === 'horizontal' && slider.settings.slideWidth > 0) {
        // if viewport is smaller than minThreshold, return minSlides
        if (slider.viewport.width() < slider.minThreshold) {
          slidesShowing = slider.settings.minSlides;
        // if viewport is larger than maxThreshold, return maxSlides
        } else if (slider.viewport.width() > slider.maxThreshold) {
          slidesShowing = slider.settings.maxSlides;
        // if viewport is between min / max thresholds, divide viewport width by first child width
        } else {
          childWidth = slider.children.first().width() + slider.settings.slideMargin;
          slidesShowing = Math.floor((slider.viewport.width() +
            slider.settings.slideMargin) / childWidth) || 1;
        }
      // if "vertical" mode, slides showing will always be minSlides
      } else if (slider.settings.mode === 'vertical') {
        slidesShowing = slider.settings.minSlides;
      }
      return slidesShowing;
    };

    /**
     * Returns the number of pages (one full viewport of slides is one "page")
     */
    var getPagerQty = function() {
      var pagerQty = 0,
      breakPoint = 0,
      counter = 0;
      // if moveSlides is specified by the user
      if (slider.settings.moveSlides > 0) {
        if (slider.settings.infiniteLoop) {
          pagerQty = Math.ceil(slider.children.length / getMoveBy());
        } else {
          // when breakpoint goes above children length, counter is the number of pages
          while (breakPoint < slider.children.length) {
            ++pagerQty;
            breakPoint = counter + getNumberSlidesShowing();
            counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
          }
		  return counter;
        }
      // if moveSlides is 0 (auto) divide children length by sides showing, then round up
      } else {
        pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
      }
      return pagerQty;
    };

    /**
     * Returns the number of individual slides by which to shift the slider
     */
    var getMoveBy = function() {
      // if moveSlides was set by the user and moveSlides is less than number of slides showing
      if (slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()) {
        return slider.settings.moveSlides;
      }
      // if moveSlides is 0 (auto)
      return getNumberSlidesShowing();
    };

    /**
     * Sets the slider's (el) left or top position
     */
    var setSlidePosition = function() {
      var position, lastChild, lastShowingIndex;
      // if last slide, not infinite loop, and number of children is larger than specified maxSlides
      if (slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop) {
        if (slider.settings.mode === 'horizontal') {
          // get the last child's position
          lastChild = slider.children.last();
          position = lastChild.position();
          // set the left position
          setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
        } else if (slider.settings.mode === 'vertical') {
          // get the last showing index's position
          lastShowingIndex = slider.children.length - slider.settings.minSlides;
          position = slider.children.eq(lastShowingIndex).position();
          // set the top position
          setPositionProperty(-position.top, 'reset', 0);
        }
      // if not last slide
      } else {
        // get the position of the first showing slide
        position = slider.children.eq(slider.active.index * getMoveBy()).position();
        // check for last slide
        if (slider.active.index === getPagerQty() - 1) { slider.active.last = true; }
        // set the respective position
        if (position !== undefined) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
    };

    /**
     * Sets the el's animating property position (which in turn will sometimes animate el).
     * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
     *
     * @param value (int)
     *  - the animating property's value
     *
     * @param type (string) 'slide', 'reset', 'ticker'
     *  - the type of instance for which the function is being
     *
     * @param duration (int)
     *  - the amount of time (in ms) the transition should occupy
     *
     * @param params (array) optional
     *  - an optional parameter containing any variables that need to be passed in
     */
    var setPositionProperty = function(value, type, duration, params) {
      var animateObj, propValue;
      // use CSS transform
      if (slider.usingCSS) {
        // determine the translate3d value
        propValue = slider.settings.mode === 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
        // add the CSS transition-duration
        el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
        if (type === 'slide') {
          // set the property value
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            // bind a callback method - executes when CSS transition completes
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              updateAfterSlideTransition();
            });
          } else { //duration = 0
            updateAfterSlideTransition();
          }
        } else if (type === 'reset') {
          el.css(slider.animProp, propValue);
        } else if (type === 'ticker') {
          // make the transition use 'linear'
          el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
          el.css(slider.animProp, propValue);
          if (duration !== 0) {
            el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e) {
              //make sure it's the correct one
              if (!$(e.target).is(el)) { return; }
              // unbind the callback
              el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
              // reset the position
              setPositionProperty(params.resetValue, 'reset', 0);
              // start the loop again
              tickerLoop();
            });
          } else { //duration = 0
            setPositionProperty(params.resetValue, 'reset', 0);
            tickerLoop();
          }
        }
      // use JS animate
      } else {
        animateObj = {};
        animateObj[slider.animProp] = value;
        if (type === 'slide') {
          el.animate(animateObj, duration, slider.settings.easing, function() {
            updateAfterSlideTransition();
          });
        } else if (type === 'reset') {
          el.css(slider.animProp, value);
        } else if (type === 'ticker') {
          el.animate(animateObj, duration, 'linear', function() {
            setPositionProperty(params.resetValue, 'reset', 0);
            // run the recursive loop after animation
            tickerLoop();
          });
        }
      }
    };

    /**
     * Populates the pager with proper amount of pages
     */
    var populatePager = function() {
      var pagerHtml = '',
      linkContent = '',
      pagerQty = getPagerQty();
      // loop through each pager item
      for (var i = 0; i < pagerQty; i++) {
        linkContent = '';
        // if a buildPager function is supplied, use it to get pager link value, else use index + 1
        if (slider.settings.buildPager && $.isFunction(slider.settings.buildPager) || slider.settings.pagerCustom) {
          linkContent = slider.settings.buildPager(i);
          slider.pagerEl.addClass('bx-custom-pager');
        } else {
          linkContent = i + 1;
          slider.pagerEl.addClass('bx-default-pager');
        }
        // var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
        // add the markup to the string
        pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
      }
      // populate the pager element with pager links
      slider.pagerEl.html(pagerHtml);
    };

    /**
     * Appends the pager to the controls element
     */
    var appendPager = function() {
      if (!slider.settings.pagerCustom) {
        // create the pager DOM element
        slider.pagerEl = $('<div class="bx-pager" />');
        // if a pager selector was supplied, populate it with the pager
        if (slider.settings.pagerSelector) {
          $(slider.settings.pagerSelector).html(slider.pagerEl);
        // if no pager selector was supplied, add it after the wrapper
        } else {
          slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
        }
        // populate the pager
        populatePager();
      } else {
        slider.pagerEl = $(slider.settings.pagerCustom);
      }
      // assign the pager click binding
      slider.pagerEl.on('click touchend', 'a', clickPagerBind);
    };

    /**
     * Appends prev / next controls to the controls element
     */
    var appendControls = function() {
      slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
      slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
      // bind click actions to the controls
      slider.controls.next.bind('click touchend', clickNextBind);
      slider.controls.prev.bind('click touchend', clickPrevBind);
      // if nextSelector was supplied, populate it
      if (slider.settings.nextSelector) {
        $(slider.settings.nextSelector).append(slider.controls.next);
      }
      // if prevSelector was supplied, populate it
      if (slider.settings.prevSelector) {
        $(slider.settings.prevSelector).append(slider.controls.prev);
      }
      // if no custom selectors were supplied
      if (!slider.settings.nextSelector && !slider.settings.prevSelector) {
        // add the controls to the DOM
        slider.controls.directionEl = $('<div class="bx-controls-direction" />');
        // add the control elements to the directionEl
        slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
        // slider.viewport.append(slider.controls.directionEl);
        slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
      }
    };

    /**
     * Appends start / stop auto controls to the controls element
     */
    var appendControlsAuto = function() {
      slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
      slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
      // add the controls to the DOM
      slider.controls.autoEl = $('<div class="bx-controls-auto" />');
      // bind click actions to the controls
      slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
      slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
      // if autoControlsCombine, insert only the "start" control
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.append(slider.controls.start);
      // if autoControlsCombine is false, insert both controls
      } else {
        slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
      }
      // if auto controls selector was supplied, populate it with the controls
      if (slider.settings.autoControlsSelector) {
        $(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
      // if auto controls selector was not supplied, add it after the wrapper
      } else {
        slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
      }
      // update the auto controls
      updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
    };

    /**
     * Appends image captions to the DOM
     */
    var appendCaptions = function() {
      // cycle through each child
      slider.children.each(function(index) {
        // get the image title attribute
        var title = $(this).find('img:first').attr('title');
        // append the caption
        if (title !== undefined && ('' + title).length) {
          $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
        }
      });
    };

    /**
     * Click next binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickNextBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToNextSlide();
    };

    /**
     * Click prev binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPrevBind = function(e) {
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) { return; }
      // if auto show is running, stop it
      if (slider.settings.auto && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      el.goToPrevSlide();
    };

    /**
     * Click start binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStartBind = function(e) {
      el.startAuto();
      e.preventDefault();
    };

    /**
     * Click stop binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickStopBind = function(e) {
      el.stopAuto();
      e.preventDefault();
    };

    /**
     * Click pager binding
     *
     * @param e (event)
     *  - DOM event object
     */
    var clickPagerBind = function(e) {
      var pagerLink, pagerIndex;
      e.preventDefault();
      if (slider.controls.el.hasClass('disabled')) {
        return;
      }
      // if auto show is running, stop it
      if (slider.settings.auto  && slider.settings.stopAutoOnClick) { el.stopAuto(); }
      pagerLink = $(e.currentTarget);
      if (pagerLink.attr('data-slide-index') !== undefined) {
        pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
        // if clicked pager link is not active, continue with the goToSlide call
        if (pagerIndex !== slider.active.index) { el.goToSlide(pagerIndex); }
      }
    };

    /**
     * Updates the pager links with an active class
     *
     * @param slideIndex (int)
     *  - index of slide to make active
     */
    var updatePagerActive = function(slideIndex) {
      // if "short" pager type
      var len = slider.children.length; // nb of children
      if (slider.settings.pagerType === 'short') {
        if (slider.settings.maxSlides > 1) {
          len = Math.ceil(slider.children.length / slider.settings.maxSlides);
        }
        slider.pagerEl.html((slideIndex + 1) + slider.settings.pagerShortSeparator + len);
        return;
      }
      // remove all pager active classes
      slider.pagerEl.find('a').removeClass('active');
      // apply the active class for all pagers
      slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
    };

    /**
     * Performs needed actions after a slide transition
     */
    var updateAfterSlideTransition = function() {
      // if infinite loop is true
      if (slider.settings.infiniteLoop) {
        var position = '';
        // first slide
        if (slider.active.index === 0) {
          // set the new position
          position = slider.children.eq(0).position();
        // carousel, last slide
        } else if (slider.active.index === getPagerQty() - 1 && slider.carousel) {
          position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
        // last slide
        } else if (slider.active.index === slider.children.length - 1) {
          position = slider.children.eq(slider.children.length - 1).position();
        }
        if (position) {
          if (slider.settings.mode === 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
          else if (slider.settings.mode === 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
        }
      }
      // declare that the transition is complete
      slider.working = false;
      // onSlideAfter callback
      slider.settings.onSlideAfter.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
    };

    /**
     * Updates the auto controls state (either active, or combined switch)
     *
     * @param state (string) "start", "stop"
     *  - the new state of the auto show
     */
    var updateAutoControls = function(state) {
      // if autoControlsCombine is true, replace the current control with the new state
      if (slider.settings.autoControlsCombine) {
        slider.controls.autoEl.html(slider.controls[state]);
      // if autoControlsCombine is false, apply the "active" class to the appropriate control
      } else {
        slider.controls.autoEl.find('a').removeClass('active');
        slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
      }
    };

    /**
     * Updates the direction controls (checks if either should be hidden)
     */
    var updateDirectionControls = function() {
      if (getPagerQty() === 1) {
        slider.controls.prev.addClass('disabled');
        slider.controls.next.addClass('disabled');
      } else if (!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd) {
        // if first slide
        if (slider.active.index === 0) {
          slider.controls.prev.addClass('disabled');
          slider.controls.next.removeClass('disabled');
        // if last slide
        } else if (slider.active.index === getPagerQty() - 1) {
          slider.controls.next.addClass('disabled');
          slider.controls.prev.removeClass('disabled');
        // if any slide in the middle
        } else {
          slider.controls.prev.removeClass('disabled');
          slider.controls.next.removeClass('disabled');
        }
      }
    };
	/* auto start and stop functions */
	var windowFocusHandler = function() { el.startAuto(); };
	var windowBlurHandler = function() { el.stopAuto(); };
    /**
     * Initializes the auto process
     */
    var initAuto = function() {
      // if autoDelay was supplied, launch the auto show using a setTimeout() call
      if (slider.settings.autoDelay > 0) {
        var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
      // if autoDelay was not supplied, start the auto show normally
      } else {
        el.startAuto();

        //add focus and blur events to ensure its running if timeout gets paused
        $(window).focus(windowFocusHandler).blur(windowBlurHandler);
      }
      // if autoHover is requested
      if (slider.settings.autoHover) {
        // on el hover
        el.hover(function() {
          // if the auto show is currently playing (has an active interval)
          if (slider.interval) {
            // stop the auto show and pass true argument which will prevent control update
            el.stopAuto(true);
            // create a new autoPaused value which will be used by the relative "mouseout" event
            slider.autoPaused = true;
          }
        }, function() {
          // if the autoPaused value was created be the prior "mouseover" event
          if (slider.autoPaused) {
            // start the auto show and pass true argument which will prevent control update
            el.startAuto(true);
            // reset the autoPaused value
            slider.autoPaused = null;
          }
        });
      }
    };

    /**
     * Initializes the ticker process
     */
    var initTicker = function() {
      var startPosition = 0,
      position, transform, value, idx, ratio, property, newSpeed, totalDimens;
      // if autoDirection is "next", append a clone of the entire slider
      if (slider.settings.autoDirection === 'next') {
        el.append(slider.children.clone().addClass('bx-clone'));
      // if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
      } else {
        el.prepend(slider.children.clone().addClass('bx-clone'));
        position = slider.children.first().position();
        startPosition = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      }
      setPositionProperty(startPosition, 'reset', 0);
      // do not allow controls in ticker mode
      slider.settings.pager = false;
      slider.settings.controls = false;
      slider.settings.autoControls = false;
      // if autoHover is requested
      if (slider.settings.tickerHover) {
        if (slider.usingCSS) {
          idx = slider.settings.mode === 'horizontal' ? 4 : 5;
          slider.viewport.hover(function() {
            transform = el.css('-' + slider.cssPrefix + '-transform');
            value = parseFloat(transform.split(',')[idx]);
            setPositionProperty(value, 'reset', 0);
          }, function() {
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(value))));
            tickerLoop(newSpeed);
          });
        } else {
          // on el hover
          slider.viewport.hover(function() {
            el.stop();
          }, function() {
            // calculate the total width of children (used to calculate the speed ratio)
            totalDimens = 0;
            slider.children.each(function(index) {
              totalDimens += slider.settings.mode === 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
            });
            // calculate the speed ratio (used to determine the new speed to finish the paused animation)
            ratio = slider.settings.speed / totalDimens;
            // determine which property to use
            property = slider.settings.mode === 'horizontal' ? 'left' : 'top';
            // calculate the new speed
            newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
            tickerLoop(newSpeed);
          });
        }
      }
      // start the ticker loop
      tickerLoop();
    };

    /**
     * Runs a continuous loop, news ticker-style
     */
    var tickerLoop = function(resumeSpeed) {
      var speed = resumeSpeed ? resumeSpeed : slider.settings.speed,
      position = {left: 0, top: 0},
      reset = {left: 0, top: 0},
      animateProperty, resetValue, params;

      // if "next" animate left position to last child, then reset left to 0
      if (slider.settings.autoDirection === 'next') {
        position = el.find('.bx-clone').first().position();
      // if "prev" animate left position to 0, then reset left to first non-clone child
      } else {
        reset = slider.children.first().position();
      }
      animateProperty = slider.settings.mode === 'horizontal' ? -position.left : -position.top;
      resetValue = slider.settings.mode === 'horizontal' ? -reset.left : -reset.top;
      params = {resetValue: resetValue};
      setPositionProperty(animateProperty, 'ticker', speed, params);
    };

    /**
     * Check if el is on screen
     */
    var isOnScreen = function(el) {
      var win = $(window),
      viewport = {
        top: win.scrollTop(),
        left: win.scrollLeft()
      },
      bounds = el.offset();

      viewport.right = viewport.left + win.width();
      viewport.bottom = viewport.top + win.height();
      bounds.right = bounds.left + el.outerWidth();
      bounds.bottom = bounds.top + el.outerHeight();

      return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    };

    /**
     * Initializes keyboard events
     */
    var keyPress = function(e) {
      var activeElementTag = document.activeElement.tagName.toLowerCase(),
      tagFilters = 'input|textarea',
      p = new RegExp(activeElementTag,['i']),
      result = p.exec(tagFilters);

      if (result == null && isOnScreen(el)) {
        if (e.keyCode === 39) {
          clickNextBind(e);
          return false;
        } else if (e.keyCode === 37) {
          clickPrevBind(e);
          return false;
        }
      }
    };

    /**
     * Initializes touch events
     */
    var initTouch = function() {
      // initialize object to contain all touch values
      slider.touch = {
        start: {x: 0, y: 0},
        end: {x: 0, y: 0}
      };
      slider.viewport.bind('touchstart MSPointerDown pointerdown', onTouchStart);

      //for browsers that have implemented pointer events and fire a click after
      //every pointerup regardless of whether pointerup is on same screen location as pointerdown or not
      slider.viewport.on('click', '.bxslider a', function(e) {
        if (slider.viewport.hasClass('click-disabled')) {
          e.preventDefault();
          slider.viewport.removeClass('click-disabled');
        }
      });
    };

    /**
     * Event handler for "touchstart"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchStart = function(e) {
      //disable slider controls while user is interacting with slides to avoid slider freeze that happens on touch devices when a slide swipe happens immediately after interacting with slider controls
      slider.controls.el.addClass('disabled');

      if (slider.working) {
        e.preventDefault();
        slider.controls.el.removeClass('disabled');
      } else {
        // record the original position when touch starts
        slider.touch.originalPos = el.position();
        var orig = e.originalEvent,
        touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig];
        // record the starting touch x, y coordinates
        slider.touch.start.x = touchPoints[0].pageX;
        slider.touch.start.y = touchPoints[0].pageY;

        if (slider.viewport.get(0).setPointerCapture) {
          slider.pointerId = orig.pointerId;
          slider.viewport.get(0).setPointerCapture(slider.pointerId);
        }
        // bind a "touchmove" event to the viewport
        slider.viewport.bind('touchmove MSPointerMove pointermove', onTouchMove);
        // bind a "touchend" event to the viewport
        slider.viewport.bind('touchend MSPointerUp pointerup', onTouchEnd);
        slider.viewport.bind('MSPointerCancel pointercancel', onPointerCancel);
      }
    };

    /**
     * Cancel Pointer for Windows Phone
     *
     * @param e (event)
     *  - DOM event object
     */
    var onPointerCancel = function(e) {
      /* onPointerCancel handler is needed to deal with situations when a touchend
      doesn't fire after a touchstart (this happens on windows phones only) */
      setPositionProperty(slider.touch.originalPos.left, 'reset', 0);

      //remove handlers
      slider.controls.el.removeClass('disabled');
      slider.viewport.unbind('MSPointerCancel pointercancel', onPointerCancel);
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Event handler for "touchmove"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchMove = function(e) {
      var orig = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      // if scrolling on y axis, do not prevent default
      xMovement = Math.abs(touchPoints[0].pageX - slider.touch.start.x),
      yMovement = Math.abs(touchPoints[0].pageY - slider.touch.start.y),
      value = 0,
      change = 0;

      // x axis swipe
      if ((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX) {
        e.preventDefault();
      // y axis swipe
      } else if ((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY) {
        e.preventDefault();
      }
      if (slider.settings.mode !== 'fade' && slider.settings.oneToOneTouch) {
        // if horizontal, drag along x axis
        if (slider.settings.mode === 'horizontal') {
          change = touchPoints[0].pageX - slider.touch.start.x;
          value = slider.touch.originalPos.left + change;
        // if vertical, drag along y axis
        } else {
          change = touchPoints[0].pageY - slider.touch.start.y;
          value = slider.touch.originalPos.top + change;
        }
        setPositionProperty(value, 'reset', 0);
      }
    };

    /**
     * Event handler for "touchend"
     *
     * @param e (event)
     *  - DOM event object
     */
    var onTouchEnd = function(e) {
      slider.viewport.unbind('touchmove MSPointerMove pointermove', onTouchMove);
      //enable slider controls as soon as user stops interacing with slides
      slider.controls.el.removeClass('disabled');
      var orig    = e.originalEvent,
      touchPoints = (typeof orig.changedTouches !== 'undefined') ? orig.changedTouches : [orig],
      value       = 0,
      distance    = 0;
      // record end x, y positions
      slider.touch.end.x = touchPoints[0].pageX;
      slider.touch.end.y = touchPoints[0].pageY;
      // if fade mode, check if absolute x distance clears the threshold
      if (slider.settings.mode === 'fade') {
        distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
        if (distance >= slider.settings.swipeThreshold) {
          if (slider.touch.start.x > slider.touch.end.x) {
            el.goToNextSlide();
          } else {
            el.goToPrevSlide();
          }
          el.stopAuto();
        }
      // not fade mode
      } else {
        // calculate distance and el's animate property
        if (slider.settings.mode === 'horizontal') {
          distance = slider.touch.end.x - slider.touch.start.x;
          value = slider.touch.originalPos.left;
        } else {
          distance = slider.touch.end.y - slider.touch.start.y;
          value = slider.touch.originalPos.top;
        }
        // if not infinite loop and first / last slide, do not attempt a slide transition
        if (!slider.settings.infiniteLoop && ((slider.active.index === 0 && distance > 0) || (slider.active.last && distance < 0))) {
          setPositionProperty(value, 'reset', 200);
        } else {
          // check if distance clears threshold
          if (Math.abs(distance) >= slider.settings.swipeThreshold) {
            if (distance < 0) {
              el.goToNextSlide();
            } else {
              el.goToPrevSlide();
            }
            el.stopAuto();
          } else {
            // el.animate(property, 200);
            setPositionProperty(value, 'reset', 200);
          }
        }
      }
      slider.viewport.unbind('touchend MSPointerUp pointerup', onTouchEnd);
      if (slider.viewport.get(0).releasePointerCapture) {
        slider.viewport.get(0).releasePointerCapture(slider.pointerId);
      }
    };

    /**
     * Window resize event callback
     */
    var resizeWindow = function(e) {
      // don't do anything if slider isn't initialized.
      if (!slider.initialized) { return; }
      // Delay if slider working.
      if (slider.working) {
        window.setTimeout(resizeWindow, 10);
      } else {
        // get the new window dimens (again, thank you IE)
        var windowWidthNew = $(window).width(),
        windowHeightNew = $(window).height();
        // make sure that it is a true window resize
        // *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
        // are resized. Can you just die already?*
        if (windowWidth !== windowWidthNew || windowHeight !== windowHeightNew) {
          // set the new window dimens
          windowWidth = windowWidthNew;
          windowHeight = windowHeightNew;
          // update all dynamic elements
          el.redrawSlider();
          // Call user resize handler
          slider.settings.onSliderResize.call(el, slider.active.index);
        }
      }
    };

    /**
     * Adds an aria-hidden=true attribute to each element
     *
     * @param startVisibleIndex (int)
     *  - the first visible element's index
     */
    var applyAriaHiddenAttributes = function(startVisibleIndex) {
      var numberOfSlidesShowing = getNumberSlidesShowing();
      // only apply attributes if the setting is enabled and not in ticker mode
      if (slider.settings.ariaHidden && !slider.settings.ticker) {
        // add aria-hidden=true to all elements
        slider.children.attr('aria-hidden', 'true');
        // get the visible elements and change to aria-hidden=false
        slider.children.slice(startVisibleIndex, startVisibleIndex + numberOfSlidesShowing).attr('aria-hidden', 'false');
      }
    };

    /**
     * Returns index according to present page range
     *
     * @param slideOndex (int)
     *  - the desired slide index
     */
    var setSlideIndex = function(slideIndex) {
      if (slideIndex < 0) {
        if (slider.settings.infiniteLoop) {
          return getPagerQty() - 1;
        }else {
          //we don't go to undefined slides
          return slider.active.index;
        }
      // if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
      } else if (slideIndex >= getPagerQty()) {
        if (slider.settings.infiniteLoop) {
          return 0;
        } else {
          //we don't move to undefined pages
          return slider.active.index;
        }
      // set active index to requested slide
      } else {
        return slideIndex;
      }
    };

    /**
     * ===================================================================================
     * = PUBLIC FUNCTIONS
     * ===================================================================================
     */

    /**
     * Performs slide transition to the specified slide
     *
     * @param slideIndex (int)
     *  - the destination slide's index (zero-based)
     *
     * @param direction (string)
     *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
     */
    el.goToSlide = function(slideIndex, direction) {
      // onSlideBefore, onSlideNext, onSlidePrev callbacks
      // Allow transition canceling based on returned value
      var performTransition = true,
      moveBy = 0,
      position = {left: 0, top: 0},
      lastChild = null,
      lastShowingIndex, eq, value, requestEl;
      // store the old index
      slider.oldIndex = slider.active.index;
      //set new index
      slider.active.index = setSlideIndex(slideIndex);

      // if plugin is currently in motion, ignore request
      if (slider.working || slider.active.index === slider.oldIndex) { return; }
      // declare that plugin is in motion
      slider.working = true;

      performTransition = slider.settings.onSlideBefore.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);

      // If transitions canceled, reset and return
      if (typeof (performTransition) !== 'undefined' && !performTransition) {
        slider.active.index = slider.oldIndex; // restore old index
        slider.working = false; // is not in motion
        return;
      }

      if (direction === 'next') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlideNext.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      } else if (direction === 'prev') {
        // Prevent canceling in future functions or lack there-of from negating previous commands to cancel
        if (!slider.settings.onSlidePrev.call(el, slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index)) {
          performTransition = false;
        }
      }

      // check if last slide
      slider.active.last = slider.active.index >= getPagerQty() - 1;
      // update the pager with active class
      if (slider.settings.pager || slider.settings.pagerCustom) { updatePagerActive(slider.active.index); }
      // // check for direction control update
      if (slider.settings.controls) { updateDirectionControls(); }
      // if slider is set to mode: "fade"
      if (slider.settings.mode === 'fade') {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // fade out the visible child and reset its z-index value
        slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
        // fade in the newly requested slide
        slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex + 1).fadeIn(slider.settings.speed, function() {
          $(this).css('zIndex', slider.settings.slideZIndex);
          updateAfterSlideTransition();
        });
      // slider mode is not "fade"
      } else {
        // if adaptiveHeight is true and next height is different from current height, animate to the new height
        if (slider.settings.adaptiveHeight && slider.viewport.height() !== getViewportHeight()) {
          slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
        }
        // if carousel and not infinite loop
        if (!slider.settings.infiniteLoop && slider.carousel && slider.active.last) {
          if (slider.settings.mode === 'horizontal') {
            // get the last child position
            lastChild = slider.children.eq(slider.children.length - 1);
            position = lastChild.position();
            // calculate the position of the last slide
            moveBy = slider.viewport.width() - lastChild.outerWidth();
          } else {
            // get last showing index position
            lastShowingIndex = slider.children.length - slider.settings.minSlides;
            position = slider.children.eq(lastShowingIndex).position();
          }
          // horizontal carousel, going previous while on first slide (infiniteLoop mode)
        } else if (slider.carousel && slider.active.last && direction === 'prev') {
          // get the last child position
          eq = slider.settings.moveSlides === 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
          lastChild = el.children('.bx-clone').eq(eq);
          position = lastChild.position();
        // if infinite loop and "Next" is clicked on the last slide
        } else if (direction === 'next' && slider.active.index === 0) {
          // get the last clone position
          position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
          slider.active.last = false;
        // normal non-zero requests
        } else if (slideIndex >= 0) {
          //parseInt is applied to allow floats for slides/page
          requestEl = slideIndex * parseInt(getMoveBy());
          position = slider.children.eq(requestEl).position();
        }

        /* If the position doesn't exist
         * (e.g. if you destroy the slider on a next click),
         * it doesn't throw an error.
         */
        if (typeof (position) !== 'undefined') {
          value = slider.settings.mode === 'horizontal' ? -(position.left - moveBy) : -position.top;
          // plugin values to be animated
          setPositionProperty(value, 'slide', slider.settings.speed);
        }
        slider.working = false;
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Transitions to the next slide in the show
     */
    el.goToNextSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.last) { return; }
	  if (slider.working == true){ return ;}
      var pagerIndex = parseInt(slider.active.index) + 1;
      el.goToSlide(pagerIndex, 'next');
    };

    /**
     * Transitions to the prev slide in the show
     */
    el.goToPrevSlide = function() {
      // if infiniteLoop is false and last page is showing, disregard call
      if (!slider.settings.infiniteLoop && slider.active.index === 0) { return; }
	  if (slider.working == true){ return ;}
      var pagerIndex = parseInt(slider.active.index) - 1;
      el.goToSlide(pagerIndex, 'prev');
    };

    /**
     * Starts the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.startAuto = function(preventControlUpdate) {
      // if an interval already exists, disregard call
      if (slider.interval) { return; }
      // create an interval
      slider.interval = setInterval(function() {
        if (slider.settings.autoDirection === 'next') {
          el.goToNextSlide();
        } else {
          el.goToPrevSlide();
        }
      }, slider.settings.pause);
	  //allback for when the auto rotate status changes
	  slider.settings.onAutoChange.call(el, true);
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('stop'); }
    };

    /**
     * Stops the auto show
     *
     * @param preventControlUpdate (boolean)
     *  - if true, auto controls state will not be updated
     */
    el.stopAuto = function(preventControlUpdate) {
      // if no interval exists, disregard call
      if (!slider.interval) { return; }
      // clear the interval
      clearInterval(slider.interval);
      slider.interval = null;
	  //allback for when the auto rotate status changes
	  slider.settings.onAutoChange.call(el, false);
      // if auto controls are displayed and preventControlUpdate is not true
      if (slider.settings.autoControls && preventControlUpdate !== true) { updateAutoControls('start'); }
    };

    /**
     * Returns current slide index (zero-based)
     */
    el.getCurrentSlide = function() {
      return slider.active.index;
    };

    /**
     * Returns current slide element
     */
    el.getCurrentSlideElement = function() {
      return slider.children.eq(slider.active.index);
    };

    /**
     * Returns a slide element
     * @param index (int)
     *  - The index (zero-based) of the element you want returned.
     */
    el.getSlideElement = function(index) {
      return slider.children.eq(index);
    };

    /**
     * Returns number of slides in show
     */
    el.getSlideCount = function() {
      return slider.children.length;
    };

    /**
     * Return slider.working variable
     */
    el.isWorking = function() {
      return slider.working;
    };

    /**
     * Update all dynamic slider elements
     */
    el.redrawSlider = function() {
      // resize all children in ratio to new screen size
      slider.children.add(el.find('.bx-clone')).outerWidth(getSlideWidth());
      // adjust the height
      slider.viewport.css('height', getViewportHeight());
      // update the slide position
      if (!slider.settings.ticker) { setSlidePosition(); }
      // if active.last was true before the screen resize, we want
      // to keep it last no matter what screen size we end on
      if (slider.active.last) { slider.active.index = getPagerQty() - 1; }
      // if the active index (page) no longer exists due to the resize, simply set the index as last
      if (slider.active.index >= getPagerQty()) { slider.active.last = true; }
      // if a pager is being displayed and a custom pager is not being used, update it
      if (slider.settings.pager && !slider.settings.pagerCustom) {
        populatePager();
        updatePagerActive(slider.active.index);
      }
      if (slider.settings.ariaHidden) { applyAriaHiddenAttributes(slider.active.index * getMoveBy()); }
    };

    /**
     * Destroy the current instance of the slider (revert everything back to original state)
     */
    el.destroySlider = function() {
      // don't do anything if slider has already been destroyed
      if (!slider.initialized) { return; }
      slider.initialized = false;
      $('.bx-clone', this).remove();
      slider.children.each(function() {
        if ($(this).data('origStyle') !== undefined) {
          $(this).attr('style', $(this).data('origStyle'));
        } else {
          $(this).removeAttr('style');
        }
      });
      if ($(this).data('origStyle') !== undefined) {
        this.attr('style', $(this).data('origStyle'));
      } else {
        $(this).removeAttr('style');
      }
      $(this).unwrap().unwrap();
      if (slider.controls.el) { slider.controls.el.remove(); }
      if (slider.controls.next) { slider.controls.next.remove(); }
      if (slider.controls.prev) { slider.controls.prev.remove(); }
      if (slider.pagerEl && slider.settings.controls && !slider.settings.pagerCustom) { slider.pagerEl.remove(); }
      $('.bx-caption', this).remove();
      if (slider.controls.autoEl) { slider.controls.autoEl.remove(); }
      clearInterval(slider.interval);
      if (slider.settings.responsive) { $(window).unbind('resize', resizeWindow); }
      if (slider.settings.keyboardEnabled) { $(document).unbind('keydown', keyPress); }
      //remove self reference in data
      $(this).removeData('bxSlider');
	  // remove global window handlers
	  $(window).off('blur', windowBlurHandler).off('focus', windowFocusHandler);
    };

    /**
     * Reload the slider (revert all DOM changes, and re-initialize)
     */
    el.reloadSlider = function(settings) {
      if (settings !== undefined) { options = settings; }
      el.destroySlider();
      init();
      //store reference to self in order to access public functions later
      $(el).data('bxSlider', this);
    };

    init();

    $(el).data('bxSlider', this);

    // returns the current jQuery object
    return this;
  };

})(jQuery);

/**
 * Owl Carousel v2.2.0
 * Copyright 2013-2016 David Deutsch
 * Licensed under MIT (https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE)
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			throw 'Can not detect viewport width.';
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url(' + url + ')',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.Vue=e()}(this,function(){"use strict";function t(t){return void 0===t||null===t}function e(t){return void 0!==t&&null!==t}function n(t){return!0===t}function r(t){return"string"==typeof t||"number"==typeof t||"symbol"==typeof t||"boolean"==typeof t}function i(t){return null!==t&&"object"==typeof t}function o(t){return"[object Object]"===Nn.call(t)}function a(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function s(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function c(t){var e=parseFloat(t);return isNaN(e)?t:e}function u(t,e){for(var n=Object.create(null),r=t.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}function l(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}function f(t,e){return Mn.call(t,e)}function p(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}function d(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function v(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function h(t,e){for(var n in e)t[n]=e[n];return t}function m(t){for(var e={},n=0;n<t.length;n++)t[n]&&h(e,t[n]);return e}function y(t,e,n){}function g(t,e){if(t===e)return!0;var n=i(t),r=i(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{var o=Array.isArray(t),a=Array.isArray(e);if(o&&a)return t.length===e.length&&t.every(function(t,n){return g(t,e[n])});if(o||a)return!1;var s=Object.keys(t),c=Object.keys(e);return s.length===c.length&&s.every(function(n){return g(t[n],e[n])})}catch(t){return!1}}function _(t,e){for(var n=0;n<t.length;n++)if(g(t[n],e))return n;return-1}function b(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}function $(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function C(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function w(t){return"function"==typeof t&&/native code/.test(t.toString())}function x(t){return new mr(void 0,void 0,void 0,String(t))}function k(t,e){var n=t.componentOptions,r=new mr(t.tag,t.data,t.children,t.text,t.elm,t.context,n,t.asyncFactory);return r.ns=t.ns,r.isStatic=t.isStatic,r.key=t.key,r.isComment=t.isComment,r.fnContext=t.fnContext,r.fnOptions=t.fnOptions,r.fnScopeId=t.fnScopeId,r.isCloned=!0,e&&(t.children&&(r.children=A(t.children,!0)),n&&n.children&&(n.children=A(n.children,!0))),r}function A(t,e){for(var n=t.length,r=new Array(n),i=0;i<n;i++)r[i]=k(t[i],e);return r}function O(t,e,n){t.__proto__=e}function S(t,e,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];C(t,o,e[o])}}function T(t,e){if(i(t)&&!(t instanceof mr)){var n;return f(t,"__ob__")&&t.__ob__ instanceof wr?n=t.__ob__:Cr.shouldConvert&&!ur()&&(Array.isArray(t)||o(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new wr(t)),e&&n&&n.vmCount++,n}}function E(t,e,n,r,i){var o=new vr,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!i&&T(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return vr.target&&(o.depend(),u&&(u.dep.depend(),Array.isArray(e)&&I(e))),e},set:function(e){var r=s?s.call(t):n;e===r||e!=e&&r!=r||(c?c.call(t,e):n=e,u=!i&&T(e),o.notify())}})}}function j(t,e,n){if(Array.isArray(t)&&a(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(E(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function N(t,e){if(Array.isArray(t)&&a(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||f(t,e)&&(delete t[e],n&&n.dep.notify())}}function I(t){for(var e=void 0,n=0,r=t.length;n<r;n++)(e=t[n])&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&I(e)}function L(t,e){if(!e)return t;for(var n,r,i,a=Object.keys(e),s=0;s<a.length;s++)r=t[n=a[s]],i=e[n],f(t,n)?o(r)&&o(i)&&L(r,i):j(t,n,i);return t}function M(t,e,n){return n?function(){var r="function"==typeof e?e.call(n,n):e,i="function"==typeof t?t.call(n,n):t;return r?L(r,i):i}:e?t?function(){return L("function"==typeof e?e.call(this,this):e,"function"==typeof t?t.call(this,this):t)}:e:t}function D(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function P(t,e,n,r){var i=Object.create(t||null);return e?h(i,e):i}function F(t,e,n){function r(r){var i=xr[r]||Or;u[r]=i(t[r],e[r],n,r)}"function"==typeof e&&(e=e.options),function(t,e){var n=t.props;if(n){var r,i,a={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(a[Pn(i)]={type:null});else if(o(n))for(var s in n)i=n[s],a[Pn(s)]=o(i)?i:{type:i};t.props=a}}(e),function(t,e){var n=t.inject;if(n){var r=t.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(o(n))for(var a in n){var s=n[a];r[a]=o(s)?h({from:a},s):{from:s}}}}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e);var i=e.extends;if(i&&(t=F(t,i,n)),e.mixins)for(var a=0,s=e.mixins.length;a<s;a++)t=F(t,e.mixins[a],n);var c,u={};for(c in t)r(c);for(c in e)f(t,c)||r(c);return u}function R(t,e,n,r){if("string"==typeof n){var i=t[e];if(f(i,n))return i[n];var o=Pn(n);if(f(i,o))return i[o];var a=Fn(o);if(f(i,a))return i[a];return i[n]||i[o]||i[a]}}function H(t,e,n,r){var i=e[t],o=!f(n,t),a=n[t];if(U(Boolean,i.type)&&(o&&!f(i,"default")?a=!1:U(String,i.type)||""!==a&&a!==Hn(t)||(a=!0)),void 0===a){a=function(t,e,n){if(!f(e,"default"))return;var r=e.default;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof r&&"Function"!==B(e.type)?r.call(t):r}(r,i,t);var s=Cr.shouldConvert;Cr.shouldConvert=!0,T(a),Cr.shouldConvert=s}return a}function B(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function U(t,e){if(!Array.isArray(e))return B(e)===B(t);for(var n=0,r=e.length;n<r;n++)if(B(e[n])===B(t))return!0;return!1}function V(t,e,n){if(e)for(var r=e;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{if(!1===i[o].call(r,t,e,n))return}catch(t){z(t,r,"errorCaptured hook")}}z(t,e,n)}function z(t,e,n){if(Jn.errorHandler)try{return Jn.errorHandler.call(null,t,e,n)}catch(t){K(t,null,"config.errorHandler")}K(t,e,n)}function K(t,e,n){if(!Gn&&!Zn||"undefined"==typeof console)throw t;console.error(t)}function J(){Tr=!1;var t=Sr.slice(0);Sr.length=0;for(var e=0;e<t.length;e++)t[e]()}function q(t,e){var n;if(Sr.push(function(){if(t)try{t.call(e)}catch(t){V(t,e,"nextTick")}else n&&n(e)}),Tr||(Tr=!0,Er?Ar():kr()),!t&&"undefined"!=typeof Promise)return new Promise(function(t){n=t})}function W(t){G(t,Mr),Mr.clear()}function G(t,e){var n,r,o=Array.isArray(t);if((o||i(t))&&!Object.isFrozen(t)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(o)for(n=t.length;n--;)G(t[n],e);else for(n=(r=Object.keys(t)).length;n--;)G(t[r[n]],e)}}function Z(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,t)}return e.fns=t,e}function X(e,n,r,i,o){var a,s,c,u;for(a in e)s=e[a],c=n[a],u=Dr(a),t(s)||(t(c)?(t(s.fns)&&(s=e[a]=Z(s)),r(u.name,s,u.once,u.capture,u.passive,u.params)):s!==c&&(c.fns=s,e[a]=c));for(a in n)t(e[a])&&i((u=Dr(a)).name,n[a],u.capture)}function Y(r,i,o){function a(){o.apply(this,arguments),l(s.fns,a)}r instanceof mr&&(r=r.data.hook||(r.data.hook={}));var s,c=r[i];t(c)?s=Z([a]):e(c.fns)&&n(c.merged)?(s=c).fns.push(a):s=Z([c,a]),s.merged=!0,r[i]=s}function Q(t,n,r,i,o){if(e(n)){if(f(n,r))return t[r]=n[r],o||delete n[r],!0;if(f(n,i))return t[r]=n[i],o||delete n[i],!0}return!1}function tt(t){return e(t)&&e(t.text)&&function(t){return!1===t}(t.isComment)}function et(i,o){var a,s,c,u,l=[];for(a=0;a<i.length;a++)t(s=i[a])||"boolean"==typeof s||(u=l[c=l.length-1],Array.isArray(s)?s.length>0&&(tt((s=et(s,(o||"")+"_"+a))[0])&&tt(u)&&(l[c]=x(u.text+s[0].text),s.shift()),l.push.apply(l,s)):r(s)?tt(u)?l[c]=x(u.text+s):""!==s&&l.push(x(s)):tt(s)&&tt(u)?l[c]=x(u.text+s.text):(n(i._isVList)&&e(s.tag)&&t(s.key)&&e(o)&&(s.key="__vlist"+o+"_"+a+"__"),l.push(s)));return l}function nt(t,e){return(t.__esModule||fr&&"Module"===t[Symbol.toStringTag])&&(t=t.default),i(t)?e.extend(t):t}function rt(t){return t.isComment&&t.asyncFactory}function it(t){if(Array.isArray(t))for(var n=0;n<t.length;n++){var r=t[n];if(e(r)&&(e(r.componentOptions)||rt(r)))return r}}function ot(t,e,n){n?Lr.$once(t,e):Lr.$on(t,e)}function at(t,e){Lr.$off(t,e)}function st(t,e,n){Lr=t,X(e,n||{},ot,at),Lr=void 0}function ct(t,e){var n={};if(!t)return n;for(var r=0,i=t.length;r<i;r++){var o=t[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==e&&o.fnContext!==e||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var u in n)n[u].every(ut)&&delete n[u];return n}function ut(t){return t.isComment&&!t.asyncFactory||" "===t.text}function lt(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?lt(t[n],e):e[t[n].key]=t[n].fn;return e}function ft(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function pt(t,e){if(e){if(t._directInactive=!1,ft(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)pt(t.$children[n]);vt(t,"activated")}}function dt(t,e){if(!(e&&(t._directInactive=!0,ft(t))||t._inactive)){t._inactive=!0;for(var n=0;n<t.$children.length;n++)dt(t.$children[n]);vt(t,"deactivated")}}function vt(t,e){var n=t.$options[e];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(t)}catch(n){V(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}function ht(){Ur=!0;var t,e;for(Fr.sort(function(t,e){return t.id-e.id}),Vr=0;Vr<Fr.length;Vr++)e=(t=Fr[Vr]).id,Hr[e]=null,t.run();var n=Rr.slice(),r=Fr.slice();Vr=Fr.length=Rr.length=0,Hr={},Br=Ur=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,pt(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&vt(r,"updated")}}(r),lr&&Jn.devtools&&lr.emit("flush")}function mt(t,e,n){Jr.get=function(){return this[e][n]},Jr.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jr)}function yt(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},i=t.$options._propKeys=[],o=!t.$parent;Cr.shouldConvert=o;var a=function(o){i.push(o);var a=H(o,e,n,t);E(r,o,a),o in t||mt(t,"_props",o)};for(var s in e)a(s);Cr.shouldConvert=!0}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?y:d(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;e=t._data="function"==typeof e?function(t,e){try{return t.call(e,e)}catch(t){return V(t,e,"data()"),{}}}(e,t):e||{},o(e)||(e={});var n=Object.keys(e),r=t.$options.props,i=(t.$options.methods,n.length);for(;i--;){var a=n[i];r&&f(r,a)||$(a)||mt(t,"_data",a)}T(e,!0)}(t):T(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null),r=ur();for(var i in e){var o=e[i],a="function"==typeof o?o:o.get;r||(n[i]=new Kr(t,a||y,y,qr)),i in t||gt(t,i,o)}}(t,e.computed),e.watch&&e.watch!==ir&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)bt(t,n,r[i]);else bt(t,n,r)}}(t,e.watch)}function gt(t,e,n){var r=!ur();"function"==typeof n?(Jr.get=r?_t(e):n,Jr.set=y):(Jr.get=n.get?r&&!1!==n.cache?_t(e):n.get:y,Jr.set=n.set?n.set:y),Object.defineProperty(t,e,Jr)}function _t(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),vr.target&&e.depend(),e.value}}function bt(t,e,n,r){return o(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function $t(t,e){if(t){for(var n=Object.create(null),r=fr?Reflect.ownKeys(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}):Object.keys(t),i=0;i<r.length;i++){for(var o=r[i],a=t[o].from,s=e;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in t[o]){var c=t[o].default;n[o]="function"==typeof c?c.call(e):c}}return n}}function Ct(t,n){var r,o,a,s,c;if(Array.isArray(t)||"string"==typeof t)for(r=new Array(t.length),o=0,a=t.length;o<a;o++)r[o]=n(t[o],o);else if("number"==typeof t)for(r=new Array(t),o=0;o<t;o++)r[o]=n(o+1,o);else if(i(t))for(s=Object.keys(t),r=new Array(s.length),o=0,a=s.length;o<a;o++)c=s[o],r[o]=n(t[c],c,o);return e(r)&&(r._isVList=!0),r}function wt(t,e,n,r){var i,o=this.$scopedSlots[t];if(o)n=n||{},r&&(n=h(h({},r),n)),i=o(n)||e;else{var a=this.$slots[t];a&&(a._rendered=!0),i=a||e}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function xt(t){return R(this.$options,"filters",t)||Un}function kt(t,e,n,r){var i=Jn.keyCodes[e]||n;return i?Array.isArray(i)?-1===i.indexOf(t):i!==t:r?Hn(r)!==e:void 0}function At(t,e,n,r,o){if(n)if(i(n)){Array.isArray(n)&&(n=m(n));var a,s=function(i){if("class"===i||"style"===i||Ln(i))a=t;else{var s=t.attrs&&t.attrs.type;a=r||Jn.mustUseProp(e,s,i)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}if(!(i in a)&&(a[i]=n[i],o)){(t.on||(t.on={}))["update:"+i]=function(t){n[i]=t}}};for(var c in n)s(c)}else;return t}function Ot(t,e){var n=this._staticTrees||(this._staticTrees=[]),r=n[t];return r&&!e?Array.isArray(r)?A(r):k(r):(r=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Tt(r,"__static__"+t,!1),r)}function St(t,e,n){return Tt(t,"__once__"+e+(n?"_"+n:""),!0),t}function Tt(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Et(t[r],e+"_"+r,n);else Et(t,e,n)}function Et(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function jt(t,e){if(e)if(o(e)){var n=t.on=t.on?h({},t.on):{};for(var r in e){var i=n[r],a=e[r];n[r]=i?[].concat(i,a):a}}else;return t}function Nt(t){t._o=St,t._n=c,t._s=s,t._l=Ct,t._t=wt,t._q=g,t._i=_,t._m=Ot,t._f=xt,t._k=kt,t._b=At,t._v=x,t._e=gr,t._u=lt,t._g=jt}function It(t,e,r,i,o){var a=o.options;this.data=t,this.props=e,this.children=r,this.parent=i,this.listeners=t.on||jn,this.injections=$t(a.inject,i),this.slots=function(){return ct(r,i)};var s=Object.create(i),c=n(a._compiled),u=!c;c&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=t.scopedSlots||jn),a._scopeId?this._c=function(t,e,n,r){var o=Dt(s,t,e,n,r,u);return o&&(o.fnScopeId=a._scopeId,o.fnContext=i),o}:this._c=function(t,e,n,r){return Dt(s,t,e,n,r,u)}}function Lt(t,e){for(var n in e)t[Pn(n)]=e[n]}function Mt(r,o,a,s,c){if(!t(r)){var u=a.$options._base;if(i(r)&&(r=u.extend(r)),"function"==typeof r){var l;if(t(r.cid)&&(l=r,void 0===(r=function(r,o,a){if(n(r.error)&&e(r.errorComp))return r.errorComp;if(e(r.resolved))return r.resolved;if(n(r.loading)&&e(r.loadingComp))return r.loadingComp;if(!e(r.contexts)){var s=r.contexts=[a],c=!0,u=function(){for(var t=0,e=s.length;t<e;t++)s[t].$forceUpdate()},l=b(function(t){r.resolved=nt(t,o),c||u()}),f=b(function(t){e(r.errorComp)&&(r.error=!0,u())}),p=r(l,f);return i(p)&&("function"==typeof p.then?t(r.resolved)&&p.then(l,f):e(p.component)&&"function"==typeof p.component.then&&(p.component.then(l,f),e(p.error)&&(r.errorComp=nt(p.error,o)),e(p.loading)&&(r.loadingComp=nt(p.loading,o),0===p.delay?r.loading=!0:setTimeout(function(){t(r.resolved)&&t(r.error)&&(r.loading=!0,u())},p.delay||200)),e(p.timeout)&&setTimeout(function(){t(r.resolved)&&f(null)},p.timeout))),c=!1,r.loading?r.loadingComp:r.resolved}r.contexts.push(a)}(l,u,a))))return function(t,e,n,r,i){var o=gr();return o.asyncFactory=t,o.asyncMeta={data:e,context:n,children:r,tag:i},o}(l,o,a,s,c);o=o||{},Ft(r),e(o.model)&&function(t,n){var r=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(n.props||(n.props={}))[r]=n.model.value;var o=n.on||(n.on={});e(o[i])?o[i]=[n.model.callback].concat(o[i]):o[i]=n.model.callback}(r.options,o);var f=function(n,r,i){var o=r.options.props;if(!t(o)){var a={},s=n.attrs,c=n.props;if(e(s)||e(c))for(var u in o){var l=Hn(u);Q(a,c,u,l,!0)||Q(a,s,u,l,!1)}return a}}(o,r);if(n(r.options.functional))return function(t,n,r,i,o){var a=t.options,s={},c=a.props;if(e(c))for(var u in c)s[u]=H(u,c,n||jn);else e(r.attrs)&&Lt(s,r.attrs),e(r.props)&&Lt(s,r.props);var l=new It(r,s,o,i,t),f=a.render.call(null,l._c,l);return f instanceof mr&&(f.fnContext=i,f.fnOptions=a,r.slot&&((f.data||(f.data={})).slot=r.slot)),f}(r,f,o,a,s);var p=o.on;if(o.on=o.nativeOn,n(r.options.abstract)){var d=o.slot;o={},d&&(o.slot=d)}!function(t){t.hook||(t.hook={});for(var e=0;e<Gr.length;e++){var n=Gr[e],r=t.hook[n],i=Wr[n];t.hook[n]=r?function(t,e){return function(n,r,i,o){t(n,r,i,o),e(n,r,i,o)}}(i,r):i}}(o);var v=r.options.name||c;return new mr("vue-component-"+r.cid+(v?"-"+v:""),o,void 0,void 0,void 0,a,{Ctor:r,propsData:f,listeners:p,tag:c,children:s},l)}}}function Dt(t,i,o,a,s,c){return(Array.isArray(o)||r(o))&&(s=a,a=o,o=void 0),n(c)&&(s=Xr),function(t,n,i,o,a){if(e(i)&&e(i.__ob__))return gr();e(i)&&e(i.is)&&(n=i.is);if(!n)return gr();Array.isArray(o)&&"function"==typeof o[0]&&((i=i||{}).scopedSlots={default:o[0]},o.length=0);a===Xr?o=function(t){return r(t)?[x(t)]:Array.isArray(t)?et(t):void 0}(o):a===Zr&&(o=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(o));var s,c;if("string"==typeof n){var u;c=t.$vnode&&t.$vnode.ns||Jn.getTagNamespace(n),s=Jn.isReservedTag(n)?new mr(Jn.parsePlatformTagName(n),i,o,void 0,void 0,t):e(u=R(t.$options,"components",n))?Mt(u,i,t,o,n):new mr(n,i,o,void 0,void 0,t)}else s=Mt(n,i,t,o);return e(s)?(c&&Pt(s,c),s):gr()}(t,i,o,a,s)}function Pt(r,i,o){if(r.ns=i,"foreignObject"===r.tag&&(i=void 0,o=!0),e(r.children))for(var a=0,s=r.children.length;a<s;a++){var c=r.children[a];e(c.tag)&&(t(c.ns)||n(o))&&Pt(c,i,o)}}function Ft(t){var e=t.options;if(t.super){var n=Ft(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.extendOptions,i=t.sealedOptions;for(var o in n)n[o]!==i[o]&&(e||(e={}),e[o]=function(t,e,n){{if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var i=0;i<t.length;i++)(e.indexOf(t[i])>=0||n.indexOf(t[i])<0)&&r.push(t[i]);return r}return t}}(n[o],r[o],i[o]));return e}(t);r&&h(t.extendOptions,r),(e=t.options=F(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function Rt(t){this._init(t)}function Ht(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,i=t._Ctor||(t._Ctor={});if(i[r])return i[r];var o=t.name||n.options.name,a=function(t){this._init(t)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=e++,a.options=F(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)mt(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)gt(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,zn.forEach(function(t){a[t]=n[t]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=h({},a.options),i[r]=a,a}}function Bt(t){return t&&(t.Ctor.options.name||t.tag)}function Ut(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:!!function(t){return"[object RegExp]"===Nn.call(t)}(t)&&t.test(e)}function Vt(t,e){var n=t.cache,r=t.keys,i=t._vnode;for(var o in n){var a=n[o];if(a){var s=Bt(a.componentOptions);s&&!e(s)&&zt(n,o,r,i)}}}function zt(t,e,n,r){var i=t[e];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),t[e]=null,l(n,e)}function Kt(t){for(var n=t.data,r=t,i=t;e(i.componentInstance);)(i=i.componentInstance._vnode)&&i.data&&(n=Jt(i.data,n));for(;e(r=r.parent);)r&&r.data&&(n=Jt(n,r.data));return function(t,n){if(e(t)||e(n))return qt(t,Wt(n));return""}(n.staticClass,n.class)}function Jt(t,n){return{staticClass:qt(t.staticClass,n.staticClass),class:e(t.class)?[t.class,n.class]:n.class}}function qt(t,e){return t?e?t+" "+e:t:e||""}function Wt(t){return Array.isArray(t)?function(t){for(var n,r="",i=0,o=t.length;i<o;i++)e(n=Wt(t[i]))&&""!==n&&(r&&(r+=" "),r+=n);return r}(t):i(t)?function(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}(t):"string"==typeof t?t:""}function Gt(t){return bi(t)?"svg":"math"===t?"math":void 0}function Zt(t){if("string"==typeof t){var e=document.querySelector(t);return e||document.createElement("div")}return t}function Xt(t,e){var n=t.data.ref;if(n){var r=t.context,i=t.componentInstance||t.elm,o=r.$refs;e?Array.isArray(o[n])?l(o[n],i):o[n]===i&&(o[n]=void 0):t.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}function Yt(r,i){return r.key===i.key&&(r.tag===i.tag&&r.isComment===i.isComment&&e(r.data)===e(i.data)&&function(t,n){if("input"!==t.tag)return!0;var r,i=e(r=t.data)&&e(r=r.attrs)&&r.type,o=e(r=n.data)&&e(r=r.attrs)&&r.type;return i===o||wi(i)&&wi(o)}(r,i)||n(r.isAsyncPlaceholder)&&r.asyncFactory===i.asyncFactory&&t(i.asyncFactory.error))}function Qt(t,n,r){var i,o,a={};for(i=n;i<=r;++i)e(o=t[i].key)&&(a[o]=i);return a}function te(t,e){(t.data.directives||e.data.directives)&&function(t,e){var n,r,i,o=t===Ai,a=e===Ai,s=ee(t.data.directives,t.context),c=ee(e.data.directives,e.context),u=[],l=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,ne(i,"update",e,t),i.def&&i.def.componentUpdated&&l.push(i)):(ne(i,"bind",e,t),i.def&&i.def.inserted&&u.push(i));if(u.length){var f=function(){for(var n=0;n<u.length;n++)ne(u[n],"inserted",e,t)};o?Y(e,"insert",f):f()}l.length&&Y(e,"postpatch",function(){for(var n=0;n<l.length;n++)ne(l[n],"componentUpdated",e,t)});if(!o)for(n in s)c[n]||ne(s[n],"unbind",t,t,a)}(t,e)}function ee(t,e){var n=Object.create(null);if(!t)return n;var r,i;for(r=0;r<t.length;r++)(i=t[r]).modifiers||(i.modifiers=Ti),n[function(t){return t.rawName||t.name+"."+Object.keys(t.modifiers||{}).join(".")}(i)]=i,i.def=R(e.$options,"directives",i.name);return n}function ne(t,e,n,r,i){var o=t.def&&t.def[e];if(o)try{o(n.elm,t,n,r,i)}catch(r){V(r,n.context,"directive "+t.name+" "+e+" hook")}}function re(n,r){var i=r.componentOptions;if(!(e(i)&&!1===i.Ctor.options.inheritAttrs||t(n.data.attrs)&&t(r.data.attrs))){var o,a,s=r.elm,c=n.data.attrs||{},u=r.data.attrs||{};e(u.__ob__)&&(u=r.data.attrs=h({},u));for(o in u)a=u[o],c[o]!==a&&ie(s,o,a);(Qn||er)&&u.value!==c.value&&ie(s,"value",u.value);for(o in c)t(u[o])&&(hi(o)?s.removeAttributeNS(vi,mi(o)):pi(o)||s.removeAttribute(o))}}function ie(t,e,n){if(di(e))yi(n)?t.removeAttribute(e):(n="allowfullscreen"===e&&"EMBED"===t.tagName?"true":e,t.setAttribute(e,n));else if(pi(e))t.setAttribute(e,yi(n)||"false"===n?"false":"true");else if(hi(e))yi(n)?t.removeAttributeNS(vi,mi(e)):t.setAttributeNS(vi,e,n);else if(yi(n))t.removeAttribute(e);else{if(Qn&&!tr&&"TEXTAREA"===t.tagName&&"placeholder"===e&&!t.__ieph){var r=function(e){e.stopImmediatePropagation(),t.removeEventListener("input",r)};t.addEventListener("input",r),t.__ieph=!0}t.setAttribute(e,n)}}function oe(n,r){var i=r.elm,o=r.data,a=n.data;if(!(t(o.staticClass)&&t(o.class)&&(t(a)||t(a.staticClass)&&t(a.class)))){var s=Kt(r),c=i._transitionClasses;e(c)&&(s=qt(s,Wt(c))),s!==i._prevClass&&(i.setAttribute("class",s),i._prevClass=s)}}function ae(t){function e(){(a||(a=[])).push(t.slice(v,i).trim()),v=i+1}var n,r,i,o,a,s=!1,c=!1,u=!1,l=!1,f=0,p=0,d=0,v=0;for(i=0;i<t.length;i++)if(r=n,n=t.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(u)96===n&&92!==r&&(u=!1);else if(l)47===n&&92!==r&&(l=!1);else if(124!==n||124===t.charCodeAt(i+1)||124===t.charCodeAt(i-1)||f||p||d){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:u=!0;break;case 40:d++;break;case 41:d--;break;case 91:p++;break;case 93:p--;break;case 123:f++;break;case 125:f--}if(47===n){for(var h=i-1,m=void 0;h>=0&&" "===(m=t.charAt(h));h--);m&&Ii.test(m)||(l=!0)}}else void 0===o?(v=i+1,o=t.slice(0,i).trim()):e();if(void 0===o?o=t.slice(0,i).trim():0!==v&&e(),a)for(i=0;i<a.length;i++)o=function(t,e){var n=e.indexOf("(");{if(n<0)return'_f("'+e+'")('+t+")";var r=e.slice(0,n),i=e.slice(n+1);return'_f("'+r+'")('+t+","+i}}(o,a[i]);return o}function se(t){console.error("[Vue compiler]: "+t)}function ce(t,e){return t?t.map(function(t){return t[e]}).filter(function(t){return t}):[]}function ue(t,e,n){(t.props||(t.props=[])).push({name:e,value:n}),t.plain=!1}function le(t,e,n){(t.attrs||(t.attrs=[])).push({name:e,value:n}),t.plain=!1}function fe(t,e,n){t.attrsMap[e]=n,t.attrsList.push({name:e,value:n})}function pe(t,e,n,r,i,o){(t.directives||(t.directives=[])).push({name:e,rawName:n,value:r,arg:i,modifiers:o}),t.plain=!1}function de(t,e,n,r,i,o){(r=r||jn).capture&&(delete r.capture,e="!"+e),r.once&&(delete r.once,e="~"+e),r.passive&&(delete r.passive,e="&"+e),"click"===e&&(r.right?(e="contextmenu",delete r.right):r.middle&&(e="mouseup"));var a;r.native?(delete r.native,a=t.nativeEvents||(t.nativeEvents={})):a=t.events||(t.events={});var s={value:n};r!==jn&&(s.modifiers=r);var c=a[e];Array.isArray(c)?i?c.unshift(s):c.push(s):a[e]=c?i?[s,c]:[c,s]:s,t.plain=!1}function ve(t,e,n){var r=he(t,":"+e)||he(t,"v-bind:"+e);if(null!=r)return ae(r);if(!1!==n){var i=he(t,e);if(null!=i)return JSON.stringify(i)}}function he(t,e,n){var r;if(null!=(r=t.attrsMap[e]))for(var i=t.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===e){i.splice(o,1);break}return n&&delete t.attrsMap[e],r}function me(t,e,n){var r=n||{},i="$$v";r.trim&&(i="(typeof $$v === 'string'? $$v.trim(): $$v)"),r.number&&(i="_n("+i+")");var o=ye(e,i);t.model={value:"("+e+")",expression:'"'+e+'"',callback:"function ($$v) {"+o+"}"}}function ye(t,e){var n=function(t){if(ei=t.length,t.indexOf("[")<0||t.lastIndexOf("]")<ei-1)return(ii=t.lastIndexOf("."))>-1?{exp:t.slice(0,ii),key:'"'+t.slice(ii+1)+'"'}:{exp:t,key:null};ni=t,ii=oi=ai=0;for(;!_e();)be(ri=ge())?$e(ri):91===ri&&function(t){var e=1;oi=ii;for(;!_e();)if(t=ge(),be(t))$e(t);else if(91===t&&e++,93===t&&e--,0===e){ai=ii;break}}(ri);return{exp:t.slice(0,oi),key:t.slice(oi+1,ai)}}(t);return null===n.key?t+"="+e:"$set("+n.exp+", "+n.key+", "+e+")"}function ge(){return ni.charCodeAt(++ii)}function _e(){return ii>=ei}function be(t){return 34===t||39===t}function $e(t){for(var e=t;!_e()&&(t=ge())!==e;);}function Ce(t,e,n,r,i){e=function(t){return t._withTask||(t._withTask=function(){Er=!0;var e=t.apply(null,arguments);return Er=!1,e})}(e),n&&(e=function(t,e,n){var r=si;return function i(){null!==t.apply(null,arguments)&&we(e,i,n,r)}}(e,t,r)),si.addEventListener(t,e,or?{capture:r,passive:i}:r)}function we(t,e,n,r){(r||si).removeEventListener(t,e._withTask||e,n)}function xe(n,r){if(!t(n.data.on)||!t(r.data.on)){var i=r.data.on||{},o=n.data.on||{};si=r.elm,function(t){if(e(t[Li])){var n=Qn?"change":"input";t[n]=[].concat(t[Li],t[n]||[]),delete t[Li]}e(t[Mi])&&(t.change=[].concat(t[Mi],t.change||[]),delete t[Mi])}(i),X(i,o,Ce,we,r.context),si=void 0}}function ke(n,r){if(!t(n.data.domProps)||!t(r.data.domProps)){var i,o,a=r.elm,s=n.data.domProps||{},u=r.data.domProps||{};e(u.__ob__)&&(u=r.data.domProps=h({},u));for(i in s)t(u[i])&&(a[i]="");for(i in u){if(o=u[i],"textContent"===i||"innerHTML"===i){if(r.children&&(r.children.length=0),o===s[i])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===i){a._value=o;var l=t(o)?"":String(o);(function(t,n){return!t.composing&&("OPTION"===t.tagName||function(t,e){var n=!0;try{n=document.activeElement!==t}catch(t){}return n&&t.value!==e}(t,n)||function(t,n){var r=t.value,i=t._vModifiers;if(e(i)){if(i.lazy)return!1;if(i.number)return c(r)!==c(n);if(i.trim)return r.trim()!==n.trim()}return r!==n}(t,n))})(a,l)&&(a.value=l)}else a[i]=o}}}function Ae(t){var e=Oe(t.style);return t.staticStyle?h(t.staticStyle,e):e}function Oe(t){return Array.isArray(t)?m(t):"string"==typeof t?Fi(t):t}function Se(n,r){var i=r.data,o=n.data;if(!(t(i.staticStyle)&&t(i.style)&&t(o.staticStyle)&&t(o.style))){var a,s,c=r.elm,u=o.staticStyle,l=o.normalizedStyle||o.style||{},f=u||l,p=Oe(r.data.style)||{};r.data.normalizedStyle=e(p.__ob__)?h({},p):p;var d=function(t,e){var n,r={};if(e)for(var i=t;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=Ae(i.data))&&h(r,n);(n=Ae(t.data))&&h(r,n);for(var o=t;o=o.parent;)o.data&&(n=Ae(o.data))&&h(r,n);return r}(r,!0);for(s in f)t(d[s])&&Bi(c,s,"");for(s in d)(a=d[s])!==f[s]&&Bi(c,s,null==a?"":a)}}function Te(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.add(e)}):t.classList.add(e);else{var n=" "+(t.getAttribute("class")||"")+" ";n.indexOf(" "+e+" ")<0&&t.setAttribute("class",(n+e).trim())}}function Ee(t,e){if(e&&(e=e.trim()))if(t.classList)e.indexOf(" ")>-1?e.split(/\s+/).forEach(function(e){return t.classList.remove(e)}):t.classList.remove(e),t.classList.length||t.removeAttribute("class");else{for(var n=" "+(t.getAttribute("class")||"")+" ",r=" "+e+" ";n.indexOf(r)>=0;)n=n.replace(r," ");(n=n.trim())?t.setAttribute("class",n):t.removeAttribute("class")}}function je(t){if(t){if("object"==typeof t){var e={};return!1!==t.css&&h(e,Ki(t.name||"v")),h(e,t),e}return"string"==typeof t?Ki(t):void 0}}function Ne(t){Qi(function(){Qi(t)})}function Ie(t,e){var n=t._transitionClasses||(t._transitionClasses=[]);n.indexOf(e)<0&&(n.push(e),Te(t,e))}function Le(t,e){t._transitionClasses&&l(t._transitionClasses,e),Ee(t,e)}function Me(t,e,n){var r=De(t,e),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===qi?Zi:Yi,c=0,u=function(){t.removeEventListener(s,l),n()},l=function(e){e.target===t&&++c>=a&&u()};setTimeout(function(){c<a&&u()},o+1),t.addEventListener(s,l)}function De(t,e){var n,r=window.getComputedStyle(t),i=r[Gi+"Delay"].split(", "),o=r[Gi+"Duration"].split(", "),a=Pe(i,o),s=r[Xi+"Delay"].split(", "),c=r[Xi+"Duration"].split(", "),u=Pe(s,c),l=0,f=0;e===qi?a>0&&(n=qi,l=a,f=o.length):e===Wi?u>0&&(n=Wi,l=u,f=c.length):f=(n=(l=Math.max(a,u))>0?a>u?qi:Wi:null)?n===qi?o.length:c.length:0;return{type:n,timeout:l,propCount:f,hasTransform:n===qi&&to.test(r[Gi+"Property"])}}function Pe(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max.apply(null,e.map(function(e,n){return Fe(e)+Fe(t[n])}))}function Fe(t){return 1e3*Number(t.slice(0,-1))}function Re(n,r){var o=n.elm;e(o._leaveCb)&&(o._leaveCb.cancelled=!0,o._leaveCb());var a=je(n.data.transition);if(!t(a)&&!e(o._enterCb)&&1===o.nodeType){for(var s=a.css,u=a.type,l=a.enterClass,f=a.enterToClass,p=a.enterActiveClass,d=a.appearClass,v=a.appearToClass,h=a.appearActiveClass,m=a.beforeEnter,y=a.enter,g=a.afterEnter,_=a.enterCancelled,$=a.beforeAppear,C=a.appear,w=a.afterAppear,x=a.appearCancelled,k=a.duration,A=Pr,O=Pr.$vnode;O&&O.parent;)A=(O=O.parent).context;var S=!A._isMounted||!n.isRootInsert;if(!S||C||""===C){var T=S&&d?d:l,E=S&&h?h:p,j=S&&v?v:f,N=S?$||m:m,I=S&&"function"==typeof C?C:y,L=S?w||g:g,M=S?x||_:_,D=c(i(k)?k.enter:k),P=!1!==s&&!tr,F=Ue(I),R=o._enterCb=b(function(){P&&(Le(o,j),Le(o,E)),R.cancelled?(P&&Le(o,T),M&&M(o)):L&&L(o),o._enterCb=null});n.data.show||Y(n,"insert",function(){var t=o.parentNode,e=t&&t._pending&&t._pending[n.key];e&&e.tag===n.tag&&e.elm._leaveCb&&e.elm._leaveCb(),I&&I(o,R)}),N&&N(o),P&&(Ie(o,T),Ie(o,E),Ne(function(){Ie(o,j),Le(o,T),R.cancelled||F||(Be(D)?setTimeout(R,D):Me(o,u,R))})),n.data.show&&(r&&r(),I&&I(o,R)),P||F||R()}}}function He(n,r){function o(){x.cancelled||(n.data.show||((a.parentNode._pending||(a.parentNode._pending={}))[n.key]=n),v&&v(a),$&&(Ie(a,f),Ie(a,d),Ne(function(){Ie(a,p),Le(a,f),x.cancelled||C||(Be(w)?setTimeout(x,w):Me(a,l,x))})),h&&h(a,x),$||C||x())}var a=n.elm;e(a._enterCb)&&(a._enterCb.cancelled=!0,a._enterCb());var s=je(n.data.transition);if(t(s)||1!==a.nodeType)return r();if(!e(a._leaveCb)){var u=s.css,l=s.type,f=s.leaveClass,p=s.leaveToClass,d=s.leaveActiveClass,v=s.beforeLeave,h=s.leave,m=s.afterLeave,y=s.leaveCancelled,g=s.delayLeave,_=s.duration,$=!1!==u&&!tr,C=Ue(h),w=c(i(_)?_.leave:_),x=a._leaveCb=b(function(){a.parentNode&&a.parentNode._pending&&(a.parentNode._pending[n.key]=null),$&&(Le(a,p),Le(a,d)),x.cancelled?($&&Le(a,f),y&&y(a)):(r(),m&&m(a)),a._leaveCb=null});g?g(o):o()}}function Be(t){return"number"==typeof t&&!isNaN(t)}function Ue(n){if(t(n))return!1;var r=n.fns;return e(r)?Ue(Array.isArray(r)?r[0]:r):(n._length||n.length)>1}function Ve(t,e){!0!==e.data.show&&Re(e)}function ze(t,e,n){Ke(t,e,n),(Qn||er)&&setTimeout(function(){Ke(t,e,n)},0)}function Ke(t,e,n){var r=e.value,i=t.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=t.options.length;s<c;s++)if(a=t.options[s],i)o=_(r,qe(a))>-1,a.selected!==o&&(a.selected=o);else if(g(qe(a),r))return void(t.selectedIndex!==s&&(t.selectedIndex=s));i||(t.selectedIndex=-1)}}function Je(t,e){return e.every(function(e){return!g(e,t)})}function qe(t){return"_value"in t?t._value:t.value}function We(t){t.target.composing=!0}function Ge(t){t.target.composing&&(t.target.composing=!1,Ze(t.target,"input"))}function Ze(t,e){var n=document.createEvent("HTMLEvents");n.initEvent(e,!0,!0),t.dispatchEvent(n)}function Xe(t){return!t.componentInstance||t.data&&t.data.transition?t:Xe(t.componentInstance._vnode)}function Ye(t){var e=t&&t.componentOptions;return e&&e.Ctor.options.abstract?Ye(it(e.children)):t}function Qe(t){var e={},n=t.$options;for(var r in n.propsData)e[r]=t[r];var i=n._parentListeners;for(var o in i)e[Pn(o)]=i[o];return e}function tn(t,e){if(/\d-keep-alive$/.test(e.tag))return t("keep-alive",{props:e.componentOptions.propsData})}function en(t){t.elm._moveCb&&t.elm._moveCb(),t.elm._enterCb&&t.elm._enterCb()}function nn(t){t.data.newPos=t.elm.getBoundingClientRect()}function rn(t){var e=t.data.pos,n=t.data.newPos,r=e.left-n.left,i=e.top-n.top;if(r||i){t.data.moved=!0;var o=t.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function on(t,e){var n=e?zo:Vo;return t.replace(n,function(t){return Uo[t]})}function an(t,e,n){return{type:1,tag:t,attrsList:e,attrsMap:function(t){for(var e={},n=0,r=t.length;n<r;n++)e[t[n].name]=t[n].value;return e}(e),parent:n,children:[]}}function sn(t,e){function n(t){t.pre&&(s=!1),Lo(t.tag)&&(c=!1);for(var n=0;n<Io.length;n++)Io[n](t,e)}To=e.warn||se,Lo=e.isPreTag||Bn,Mo=e.mustUseProp||Bn,Do=e.getTagNamespace||Bn,jo=ce(e.modules,"transformNode"),No=ce(e.modules,"preTransformNode"),Io=ce(e.modules,"postTransformNode"),Eo=e.delimiters;var r,i,o=[],a=!1!==e.preserveWhitespace,s=!1,c=!1;return function(t,e){function n(e){l+=e,t=t.substring(e)}function r(t,n,r){var i,s;if(null==n&&(n=l),null==r&&(r=l),t&&(s=t.toLowerCase()),t)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)e.end&&e.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?e.start&&e.start(t,[],!0,n,r):"p"===s&&(e.start&&e.start(t,[],!1,n,r),e.end&&e.end(t,n,r))}for(var i,o,a=[],s=e.expectHTML,c=e.isUnaryTag||Bn,u=e.canBeLeftOpenTag||Bn,l=0;t;){if(i=t,o&&Ho(o)){var f=0,p=o.toLowerCase(),d=Bo[p]||(Bo[p]=new RegExp("([\\s\\S]*?)(</"+p+"[^>]*>)","i")),v=t.replace(d,function(t,n,r){return f=r.length,Ho(p)||"noscript"===p||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Jo(p,n)&&(n=n.slice(1)),e.chars&&e.chars(n),""});l+=t.length-v.length,t=v,r(p,l-f,l)}else{var h=t.indexOf("<");if(0===h){if(Ao.test(t)){var m=t.indexOf("--\x3e");if(m>=0){e.shouldKeepComment&&e.comment(t.substring(4,m)),n(m+3);continue}}if(Oo.test(t)){var y=t.indexOf("]>");if(y>=0){n(y+2);continue}}var g=t.match(ko);if(g){n(g[0].length);continue}var _=t.match(xo);if(_){var b=l;n(_[0].length),r(_[1],b,l);continue}var $=function(){var e=t.match(Co);if(e){var r={tagName:e[1],attrs:[],start:l};n(e[0].length);for(var i,o;!(i=t.match(wo))&&(o=t.match(_o));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=l,r}}();if($){!function(t){var n=t.tagName,i=t.unarySlash;s&&("p"===o&&go(n)&&r(o),u(n)&&o===n&&r(n));for(var l=c(n)||!!i,f=t.attrs.length,p=new Array(f),d=0;d<f;d++){var v=t.attrs[d];So&&-1===v[0].indexOf('""')&&(""===v[3]&&delete v[3],""===v[4]&&delete v[4],""===v[5]&&delete v[5]);var h=v[3]||v[4]||v[5]||"",m="a"===n&&"href"===v[1]?e.shouldDecodeNewlinesForHref:e.shouldDecodeNewlines;p[d]={name:v[1],value:on(h,m)}}l||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:p}),o=n),e.start&&e.start(n,p,l,t.start,t.end)}($),Jo(o,t)&&n(1);continue}}var C=void 0,w=void 0,x=void 0;if(h>=0){for(w=t.slice(h);!(xo.test(w)||Co.test(w)||Ao.test(w)||Oo.test(w)||(x=w.indexOf("<",1))<0);)h+=x,w=t.slice(h);C=t.substring(0,h),n(h)}h<0&&(C=t,t=""),e.chars&&C&&e.chars(C)}if(t===i){e.chars&&e.chars(t);break}}r()}(t,{warn:To,expectHTML:e.expectHTML,isUnaryTag:e.isUnaryTag,canBeLeftOpenTag:e.canBeLeftOpenTag,shouldDecodeNewlines:e.shouldDecodeNewlines,shouldDecodeNewlinesForHref:e.shouldDecodeNewlinesForHref,shouldKeepComment:e.comments,start:function(t,a,u){var l=i&&i.ns||Do(t);Qn&&"svg"===l&&(a=function(t){for(var e=[],n=0;n<t.length;n++){var r=t[n];na.test(r.name)||(r.name=r.name.replace(ra,""),e.push(r))}return e}(a));var f=an(t,a,i);l&&(f.ns=l),function(t){return"style"===t.tag||"script"===t.tag&&(!t.attrsMap.type||"text/javascript"===t.attrsMap.type)}(f)&&!ur()&&(f.forbidden=!0);for(var p=0;p<No.length;p++)f=No[p](f,e)||f;if(s||(!function(t){null!=he(t,"v-pre")&&(t.pre=!0)}(f),f.pre&&(s=!0)),Lo(f.tag)&&(c=!0),s?function(t){var e=t.attrsList.length;if(e)for(var n=t.attrs=new Array(e),r=0;r<e;r++)n[r]={name:t.attrsList[r].name,value:JSON.stringify(t.attrsList[r].value)};else t.pre||(t.plain=!0)}(f):f.processed||(un(f),function(t){var e=he(t,"v-if");if(e)t.if=e,ln(t,{exp:e,block:t});else{null!=he(t,"v-else")&&(t.else=!0);var n=he(t,"v-else-if");n&&(t.elseif=n)}}(f),function(t){null!=he(t,"v-once")&&(t.once=!0)}(f),cn(f,e)),r?o.length||r.if&&(f.elseif||f.else)&&ln(r,{exp:f.elseif,block:f}):r=f,i&&!f.forbidden)if(f.elseif||f.else)!function(t,e){var n=function(t){var e=t.length;for(;e--;){if(1===t[e].type)return t[e];t.pop()}}(e.children);n&&n.if&&ln(n,{exp:t.elseif,block:t})}(f,i);else if(f.slotScope){i.plain=!1;var d=f.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[d]=f}else i.children.push(f),f.parent=i;u?n(f):(i=f,o.push(f))},end:function(){var t=o[o.length-1],e=t.children[t.children.length-1];e&&3===e.type&&" "===e.text&&!c&&t.children.pop(),o.length-=1,i=o[o.length-1],n(t)},chars:function(t){if(i&&(!Qn||"textarea"!==i.tag||i.attrsMap.placeholder!==t)){var e=i.children;if(t=c||t.trim()?function(t){return"script"===t.tag||"style"===t.tag}(i)?t:ea(t):a&&e.length?" ":""){var n;!s&&" "!==t&&(n=function(t,e){var n=e?fo(e):uo;if(n.test(t)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(t);){(i=r.index)>c&&(s.push(o=t.slice(c,i)),a.push(JSON.stringify(o)));var u=ae(r[1].trim());a.push("_s("+u+")"),s.push({"@binding":u}),c=i+r[0].length}return c<t.length&&(s.push(o=t.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}(t,Eo))?e.push({type:2,expression:n.expression,tokens:n.tokens,text:t}):" "===t&&e.length&&" "===e[e.length-1].text||e.push({type:3,text:t})}}},comment:function(t){i.children.push({type:3,text:t,isComment:!0})}}),r}function cn(t,e){!function(t){var e=ve(t,"key");e&&(t.key=e)}(t),t.plain=!t.key&&!t.attrsList.length,function(t){var e=ve(t,"ref");e&&(t.ref=e,t.refInFor=function(t){var e=t;for(;e;){if(void 0!==e.for)return!0;e=e.parent}return!1}(t))}(t),function(t){if("slot"===t.tag)t.slotName=ve(t,"name");else{var e;"template"===t.tag?(e=he(t,"scope"),t.slotScope=e||he(t,"slot-scope")):(e=he(t,"slot-scope"))&&(t.slotScope=e);var n=ve(t,"slot");n&&(t.slotTarget='""'===n?'"default"':n,"template"===t.tag||t.slotScope||le(t,"slot",n))}}(t),function(t){var e;(e=ve(t,"is"))&&(t.component=e);null!=he(t,"inline-template")&&(t.inlineTemplate=!0)}(t);for(var n=0;n<jo.length;n++)t=jo[n](t,e)||t;!function(t){var e,n,r,i,o,a,s,c=t.attrsList;for(e=0,n=c.length;e<n;e++)if(r=i=c[e].name,o=c[e].value,Wo.test(r))if(t.hasBindings=!0,(a=function(t){var e=t.match(ta);if(e){var n={};return e.forEach(function(t){n[t.slice(1)]=!0}),n}}(r))&&(r=r.replace(ta,"")),Qo.test(r))r=r.replace(Qo,""),o=ae(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=Pn(r))&&(r="innerHTML")),a.camel&&(r=Pn(r)),a.sync&&de(t,"update:"+Pn(r),ye(o,"$event"))),s||!t.component&&Mo(t.tag,t.attrsMap.type,r)?ue(t,r,o):le(t,r,o);else if(qo.test(r))r=r.replace(qo,""),de(t,r,o,a,!1);else{var u=(r=r.replace(Wo,"")).match(Yo),l=u&&u[1];l&&(r=r.slice(0,-(l.length+1))),pe(t,r,i,o,l,a)}else le(t,r,JSON.stringify(o)),!t.component&&"muted"===r&&Mo(t.tag,t.attrsMap.type,r)&&ue(t,r,"true")}(t)}function un(t){var e;if(e=he(t,"v-for")){var n=function(t){var e=t.match(Go);if(!e)return;var n={};n.for=e[2].trim();var r=e[1].trim().replace(Xo,""),i=r.match(Zo);i?(n.alias=r.replace(Zo,""),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r;return n}(e);n&&h(t,n)}}function ln(t,e){t.ifConditions||(t.ifConditions=[]),t.ifConditions.push(e)}function fn(t){return an(t.tag,t.attrsList.slice(),t.parent)}function pn(t){if(t.static=function(t){if(2===t.type)return!1;if(3===t.type)return!0;return!(!t.pre&&(t.hasBindings||t.if||t.for||In(t.tag)||!Fo(t.tag)||function(t){for(;t.parent;){if("template"!==(t=t.parent).tag)return!1;if(t.for)return!0}return!1}(t)||!Object.keys(t).every(Po)))}(t),1===t.type){if(!Fo(t.tag)&&"slot"!==t.tag&&null==t.attrsMap["inline-template"])return;for(var e=0,n=t.children.length;e<n;e++){var r=t.children[e];pn(r),r.static||(t.static=!1)}if(t.ifConditions)for(var i=1,o=t.ifConditions.length;i<o;i++){var a=t.ifConditions[i].block;pn(a),a.static||(t.static=!1)}}}function dn(t,e){if(1===t.type){if((t.static||t.once)&&(t.staticInFor=e),t.static&&t.children.length&&(1!==t.children.length||3!==t.children[0].type))return void(t.staticRoot=!0);if(t.staticRoot=!1,t.children)for(var n=0,r=t.children.length;n<r;n++)dn(t.children[n],e||!!t.for);if(t.ifConditions)for(var i=1,o=t.ifConditions.length;i<o;i++)dn(t.ifConditions[i].block,e)}}function vn(t,e,n){var r=e?"nativeOn:{":"on:{";for(var i in t)r+='"'+i+'":'+hn(i,t[i])+",";return r.slice(0,-1)+"}"}function hn(t,e){if(!e)return"function(){}";if(Array.isArray(e))return"["+e.map(function(e){return hn(t,e)}).join(",")+"]";var n=ca.test(e.value),r=sa.test(e.value);if(e.modifiers){var i="",o="",a=[];for(var s in e.modifiers)if(fa[s])o+=fa[s],ua[s]&&a.push(s);else if("exact"===s){var c=e.modifiers;o+=la(["ctrl","shift","alt","meta"].filter(function(t){return!c[t]}).map(function(t){return"$event."+t+"Key"}).join("||"))}else a.push(s);a.length&&(i+=function(t){return"if(!('button' in $event)&&"+t.map(mn).join("&&")+")return null;"}(a)),o&&(i+=o);return"function($event){"+i+(n?e.value+"($event)":r?"("+e.value+")($event)":e.value)+"}"}return n||r?e.value:"function($event){"+e.value+"}"}function mn(t){var e=parseInt(t,10);if(e)return"$event.keyCode!=="+e;var n=ua[t];return"_k($event.keyCode,"+JSON.stringify(t)+","+JSON.stringify(n)+",$event.key)"}function yn(t,e){var n=new da(e);return{render:"with(this){return "+(t?gn(t,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function gn(t,e){if(t.staticRoot&&!t.staticProcessed)return _n(t,e);if(t.once&&!t.onceProcessed)return bn(t,e);if(t.for&&!t.forProcessed)return function(t,e,n,r){var i=t.for,o=t.alias,a=t.iterator1?","+t.iterator1:"",s=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||gn)(t,e)+"})"}(t,e);if(t.if&&!t.ifProcessed)return $n(t,e);if("template"!==t.tag||t.slotTarget){if("slot"===t.tag)return function(t,e){var n=t.slotName||'"default"',r=kn(t,e),i="_t("+n+(r?","+r:""),o=t.attrs&&"{"+t.attrs.map(function(t){return Pn(t.name)+":"+t.value}).join(",")+"}",a=t.attrsMap["v-bind"];!o&&!a||r||(i+=",null");o&&(i+=","+o);a&&(i+=(o?"":",null")+","+a);return i+")"}(t,e);var n;if(t.component)n=function(t,e,n){var r=e.inlineTemplate?null:kn(e,n,!0);return"_c("+t+","+wn(e,n)+(r?","+r:"")+")"}(t.component,t,e);else{var r=t.plain?void 0:wn(t,e),i=t.inlineTemplate?null:kn(t,e,!0);n="_c('"+t.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<e.transforms.length;o++)n=e.transforms[o](t,n);return n}return kn(t,e)||"void 0"}function _n(t,e){return t.staticProcessed=!0,e.staticRenderFns.push("with(this){return "+gn(t,e)+"}"),"_m("+(e.staticRenderFns.length-1)+(t.staticInFor?",true":"")+")"}function bn(t,e){if(t.onceProcessed=!0,t.if&&!t.ifProcessed)return $n(t,e);if(t.staticInFor){for(var n="",r=t.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+gn(t,e)+","+e.onceId+++","+n+")":gn(t,e)}return _n(t,e)}function $n(t,e,n,r){return t.ifProcessed=!0,Cn(t.ifConditions.slice(),e,n,r)}function Cn(t,e,n,r){function i(t){return n?n(t,e):t.once?bn(t,e):gn(t,e)}if(!t.length)return r||"_e()";var o=t.shift();return o.exp?"("+o.exp+")?"+i(o.block)+":"+Cn(t,e,n,r):""+i(o.block)}function wn(t,e){var n="{",r=function(t,e){var n=t.directives;if(!n)return;var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var u=e.directives[o.name];u&&(a=!!u(t,o,e.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}if(c)return s.slice(0,-1)+"]"}(t,e);r&&(n+=r+","),t.key&&(n+="key:"+t.key+","),t.ref&&(n+="ref:"+t.ref+","),t.refInFor&&(n+="refInFor:true,"),t.pre&&(n+="pre:true,"),t.component&&(n+='tag:"'+t.tag+'",');for(var i=0;i<e.dataGenFns.length;i++)n+=e.dataGenFns[i](t);if(t.attrs&&(n+="attrs:{"+On(t.attrs)+"},"),t.props&&(n+="domProps:{"+On(t.props)+"},"),t.events&&(n+=vn(t.events,!1,e.warn)+","),t.nativeEvents&&(n+=vn(t.nativeEvents,!0,e.warn)+","),t.slotTarget&&!t.slotScope&&(n+="slot:"+t.slotTarget+","),t.scopedSlots&&(n+=function(t,e){return"scopedSlots:_u(["+Object.keys(t).map(function(n){return xn(n,t[n],e)}).join(",")+"])"}(t.scopedSlots,e)+","),t.model&&(n+="model:{value:"+t.model.value+",callback:"+t.model.callback+",expression:"+t.model.expression+"},"),t.inlineTemplate){var o=function(t,e){var n=t.children[0];if(1===n.type){var r=yn(n,e.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(t){return"function(){"+t+"}"}).join(",")+"]}"}}(t,e);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",t.wrapData&&(n=t.wrapData(n)),t.wrapListeners&&(n=t.wrapListeners(n)),n}function xn(t,e,n){if(e.for&&!e.forProcessed)return function(t,e,n){var r=e.for,i=e.alias,o=e.iterator1?","+e.iterator1:"",a=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,"_l(("+r+"),function("+i+o+a+"){return "+xn(t,e,n)+"})"}(t,e,n);return"{key:"+t+",fn:"+("function("+String(e.slotScope)+"){return "+("template"===e.tag?e.if?e.if+"?"+(kn(e,n)||"undefined")+":undefined":kn(e,n)||"undefined":gn(e,n))+"}")+"}"}function kn(t,e,n,r,i){var o=t.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||gn)(a,e);var s=n?function(t,e){for(var n=0,r=0;r<t.length;r++){var i=t[r];if(1===i.type){if(An(i)||i.ifConditions&&i.ifConditions.some(function(t){return An(t.block)})){n=2;break}(e(i)||i.ifConditions&&i.ifConditions.some(function(t){return e(t.block)}))&&(n=1)}}return n}(o,e.maybeComponent):0,c=i||function(t,e){if(1===t.type)return gn(t,e);return 3===t.type&&t.isComment?function(t){return"_e("+JSON.stringify(t.text)+")"}(t):function(t){return"_v("+(2===t.type?t.expression:Sn(JSON.stringify(t.text)))+")"}(t)};return"["+o.map(function(t){return c(t,e)}).join(",")+"]"+(s?","+s:"")}}function An(t){return void 0!==t.for||"template"===t.tag||"slot"===t.tag}function On(t){for(var e="",n=0;n<t.length;n++){var r=t[n];e+='"'+r.name+'":'+Sn(r.value)+","}return e.slice(0,-1)}function Sn(t){return t.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Tn(t,e){try{return new Function(t)}catch(n){return e.push({err:n,code:t}),y}}function En(t){return Ro=Ro||document.createElement("div"),Ro.innerHTML=t?'<a href="\n"/>':'<div a="\n"/>',Ro.innerHTML.indexOf("&#10;")>0}var jn=Object.freeze({}),Nn=Object.prototype.toString,In=u("slot,component",!0),Ln=u("key,ref,slot,slot-scope,is"),Mn=Object.prototype.hasOwnProperty,Dn=/-(\w)/g,Pn=p(function(t){return t.replace(Dn,function(t,e){return e?e.toUpperCase():""})}),Fn=p(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),Rn=/\B([A-Z])/g,Hn=p(function(t){return t.replace(Rn,"-$1").toLowerCase()}),Bn=function(t,e,n){return!1},Un=function(t){return t},Vn="data-server-rendered",zn=["component","directive","filter"],Kn=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],Jn={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:Bn,isReservedAttr:Bn,isUnknownElement:Bn,getTagNamespace:y,parsePlatformTagName:Un,mustUseProp:Bn,_lifecycleHooks:Kn},qn=/[^\w.$]/,Wn="__proto__"in{},Gn="undefined"!=typeof window,Zn="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,Xn=Zn&&WXEnvironment.platform.toLowerCase(),Yn=Gn&&window.navigator.userAgent.toLowerCase(),Qn=Yn&&/msie|trident/.test(Yn),tr=Yn&&Yn.indexOf("msie 9.0")>0,er=Yn&&Yn.indexOf("edge/")>0,nr=Yn&&Yn.indexOf("android")>0||"android"===Xn,rr=Yn&&/iphone|ipad|ipod|ios/.test(Yn)||"ios"===Xn,ir=(Yn&&/chrome\/\d+/.test(Yn),{}.watch),or=!1;if(Gn)try{var ar={};Object.defineProperty(ar,"passive",{get:function(){or=!0}}),window.addEventListener("test-passive",null,ar)}catch(t){}var sr,cr,ur=function(){return void 0===sr&&(sr=!Gn&&"undefined"!=typeof global&&"server"===global.process.env.VUE_ENV),sr},lr=Gn&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,fr="undefined"!=typeof Symbol&&w(Symbol)&&"undefined"!=typeof Reflect&&w(Reflect.ownKeys);cr="undefined"!=typeof Set&&w(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var pr=y,dr=0,vr=function(){this.id=dr++,this.subs=[]};vr.prototype.addSub=function(t){this.subs.push(t)},vr.prototype.removeSub=function(t){l(this.subs,t)},vr.prototype.depend=function(){vr.target&&vr.target.addDep(this)},vr.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},vr.target=null;var hr=[],mr=function(t,e,n,r,i,o,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},yr={child:{configurable:!0}};yr.child.get=function(){return this.componentInstance},Object.defineProperties(mr.prototype,yr);var gr=function(t){void 0===t&&(t="");var e=new mr;return e.text=t,e.isComment=!0,e},_r=Array.prototype,br=Object.create(_r);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=_r[t];C(br,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var $r=Object.getOwnPropertyNames(br),Cr={shouldConvert:!0},wr=function(t){if(this.value=t,this.dep=new vr,this.vmCount=0,C(t,"__ob__",this),Array.isArray(t)){(Wn?O:S)(t,br,$r),this.observeArray(t)}else this.walk(t)};wr.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)E(t,e[n],t[e[n]])},wr.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)T(t[e])};var xr=Jn.optionMergeStrategies;xr.data=function(t,e,n){return n?M(t,e,n):e&&"function"!=typeof e?t:M(t,e)},Kn.forEach(function(t){xr[t]=D}),zn.forEach(function(t){xr[t+"s"]=P}),xr.watch=function(t,e,n,r){if(t===ir&&(t=void 0),e===ir&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var i={};h(i,t);for(var o in e){var a=i[o],s=e[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},xr.props=xr.methods=xr.inject=xr.computed=function(t,e,n,r){if(!t)return e;var i=Object.create(null);return h(i,t),e&&h(i,e),i},xr.provide=M;var kr,Ar,Or=function(t,e){return void 0===e?t:e},Sr=[],Tr=!1,Er=!1;if("undefined"!=typeof setImmediate&&w(setImmediate))Ar=function(){setImmediate(J)};else if("undefined"==typeof MessageChannel||!w(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())Ar=function(){setTimeout(J,0)};else{var jr=new MessageChannel,Nr=jr.port2;jr.port1.onmessage=J,Ar=function(){Nr.postMessage(1)}}if("undefined"!=typeof Promise&&w(Promise)){var Ir=Promise.resolve();kr=function(){Ir.then(J),rr&&setTimeout(y)}}else kr=Ar;var Lr,Mr=new cr,Dr=p(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return t=r?t.slice(1):t,{name:t,once:n,capture:r,passive:e}}),Pr=null,Fr=[],Rr=[],Hr={},Br=!1,Ur=!1,Vr=0,zr=0,Kr=function(t,e,n,r,i){this.vm=t,i&&(t._watcher=this),t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++zr,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new cr,this.newDepIds=new cr,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!qn.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};Kr.prototype.get=function(){!function(t){vr.target&&hr.push(vr.target),vr.target=t}(this);var t,e=this.vm;try{t=this.getter.call(e,e)}catch(t){if(!this.user)throw t;V(t,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&W(t),vr.target=hr.pop(),this.cleanupDeps()}return t},Kr.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Kr.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Kr.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==Hr[e]){if(Hr[e]=!0,Ur){for(var n=Fr.length-1;n>Vr&&Fr[n].id>t.id;)n--;Fr.splice(n+1,0,t)}else Fr.push(t);Br||(Br=!0,q(ht))}}(this)},Kr.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||i(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){V(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Kr.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Kr.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},Kr.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||l(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var Jr={enumerable:!0,configurable:!0,get:y,set:y},qr={lazy:!0};Nt(It.prototype);var Wr={init:function(t,n,r,i){if(!t.componentInstance||t.componentInstance._isDestroyed){(t.componentInstance=function(t,n,r,i){var o={_isComponent:!0,parent:n,_parentVnode:t,_parentElm:r||null,_refElm:i||null},a=t.data.inlineTemplate;return e(a)&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),new t.componentOptions.Ctor(o)}(t,Pr,r,i)).$mount(n?t.elm:void 0,n)}else if(t.data.keepAlive){var o=t;Wr.prepatch(o,o)}},prepatch:function(t,e){var n=e.componentOptions;!function(t,e,n,r,i){var o=!!(i||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==jn);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=i,t.$attrs=r.data&&r.data.attrs||jn,t.$listeners=n||jn,e&&t.$options.props){Cr.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=H(u,t.$options.props,e,t)}Cr.shouldConvert=!0,t.$options.propsData=e}if(n){var l=t.$options._parentListeners;t.$options._parentListeners=n,st(t,n,l)}o&&(t.$slots=ct(i,r.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(n._isMounted=!0,vt(n,"mounted")),t.data.keepAlive&&(e._isMounted?function(t){t._inactive=!1,Rr.push(t)}(n):pt(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?dt(e,!0):e.$destroy())}},Gr=Object.keys(Wr),Zr=1,Xr=2,Yr=0;!function(t){t.prototype._init=function(t){this._uid=Yr++,this._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options),r=e._parentVnode;n.parent=e.parent,n._parentVnode=r,n._parentElm=e._parentElm,n._refElm=e._refElm;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(this,t):this.$options=F(Ft(this.constructor),t||{},this),this._renderProxy=this,this._self=this,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(this),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&st(t,e)}(this),function(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,r=n&&n.context;t.$slots=ct(e._renderChildren,r),t.$scopedSlots=jn,t._c=function(e,n,r,i){return Dt(t,e,n,r,i,!1)},t.$createElement=function(e,n,r,i){return Dt(t,e,n,r,i,!0)};var i=n&&n.data;E(t,"$attrs",i&&i.attrs||jn,0,!0),E(t,"$listeners",e._parentListeners||jn,0,!0)}(this),vt(this,"beforeCreate"),function(t){var e=$t(t.$options.inject,t);e&&(Cr.shouldConvert=!1,Object.keys(e).forEach(function(n){E(t,n,e[n])}),Cr.shouldConvert=!0)}(this),yt(this),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(this),vt(this,"created"),this.$options.el&&this.$mount(this.$options.el)}}(Rt),function(t){var e={};e.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=j,t.prototype.$delete=N,t.prototype.$watch=function(t,e,n){if(o(e))return bt(this,t,e,n);(n=n||{}).user=!0;var r=new Kr(this,t,e,n);return n.immediate&&e.call(this,r.value),function(){r.teardown()}}}(Rt),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){if(Array.isArray(t))for(var r=0,i=t.length;r<i;r++)this.$on(t[r],n);else(this._events[t]||(this._events[t]=[])).push(n),e.test(t)&&(this._hasHookEvent=!0);return this},t.prototype.$once=function(t,e){function n(){r.$off(t,n),e.apply(r,arguments)}var r=this;return n.fn=e,r.$on(t,n),r},t.prototype.$off=function(t,e){if(!arguments.length)return this._events=Object.create(null),this;if(Array.isArray(t)){for(var n=0,r=t.length;n<r;n++)this.$off(t[n],e);return this}var i=this._events[t];if(!i)return this;if(!e)return this._events[t]=null,this;if(e)for(var o,a=i.length;a--;)if((o=i[a])===e||o.fn===e){i.splice(a,1);break}return this},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?v(n):n;for(var r=v(arguments,1),i=0,o=n.length;i<o;i++)try{n[i].apply(e,r)}catch(n){V(n,e,'event handler for "'+t+'"')}}return e}}(Rt),function(t){t.prototype._update=function(t,e){this._isMounted&&vt(this,"beforeUpdate");var n=this.$el,r=this._vnode,i=Pr;Pr=this,this._vnode=t,r?this.$el=this.__patch__(r,t):(this.$el=this.__patch__(this.$el,t,e,!1,this.$options._parentElm,this.$options._refElm),this.$options._parentElm=this.$options._refElm=null),Pr=i,n&&(n.__vue__=null),this.$el&&(this.$el.__vue__=this),this.$vnode&&this.$parent&&this.$vnode===this.$parent._vnode&&(this.$parent.$el=this.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){if(!this._isBeingDestroyed){vt(this,"beforeDestroy"),this._isBeingDestroyed=!0;var t=this.$parent;!t||t._isBeingDestroyed||this.$options.abstract||l(t.$children,this),this._watcher&&this._watcher.teardown();for(var e=this._watchers.length;e--;)this._watchers[e].teardown();this._data.__ob__&&this._data.__ob__.vmCount--,this._isDestroyed=!0,this.__patch__(this._vnode,null),vt(this,"destroyed"),this.$off(),this.$el&&(this.$el.__vue__=null),this.$vnode&&(this.$vnode.parent=null)}}}(Rt),function(t){Nt(t.prototype),t.prototype.$nextTick=function(t){return q(t,this)},t.prototype._render=function(){var t=this,e=t.$options,n=e.render,r=e._parentVnode;if(t._isMounted)for(var i in t.$slots){var o=t.$slots[i];(o._rendered||o[0]&&o[0].elm)&&(t.$slots[i]=A(o,!0))}t.$scopedSlots=r&&r.data.scopedSlots||jn,t.$vnode=r;var a;try{a=n.call(t._renderProxy,t.$createElement)}catch(e){V(e,t,"render"),a=t._vnode}return a instanceof mr||(a=gr()),a.parent=r,a}}(Rt);var Qr=[String,RegExp,Array],ti={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Qr,exclude:Qr,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)zt(this.cache,t,this.keys)},watch:{include:function(t){Vt(this,function(e){return Ut(t,e)})},exclude:function(t){Vt(this,function(e){return!Ut(t,e)})}},render:function(){var t=this.$slots.default,e=it(t),n=e&&e.componentOptions;if(n){var r=Bt(n),i=this.include,o=this.exclude;if(i&&(!r||!Ut(i,r))||o&&r&&Ut(o,r))return e;var a=this.cache,s=this.keys,c=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;a[c]?(e.componentInstance=a[c].componentInstance,l(s,c),s.push(c)):(a[c]=e,s.push(c),this.max&&s.length>parseInt(this.max)&&zt(a,s[0],s,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}}};!function(t){var e={};e.get=function(){return Jn},Object.defineProperty(t,"config",e),t.util={warn:pr,extend:h,mergeOptions:F,defineReactive:E},t.set=j,t.delete=N,t.nextTick=q,t.options=Object.create(null),zn.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,h(t.options.components,ti),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=v(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=F(this.options,t),this}}(t),Ht(t),function(t){zn.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&o(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(Rt),Object.defineProperty(Rt.prototype,"$isServer",{get:ur}),Object.defineProperty(Rt.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Rt.version="2.5.13";var ei,ni,ri,ii,oi,ai,si,ci,ui=u("style,class"),li=u("input,textarea,option,select,progress"),fi=function(t,e,n){return"value"===n&&li(t)&&"button"!==e||"selected"===n&&"option"===t||"checked"===n&&"input"===t||"muted"===n&&"video"===t},pi=u("contenteditable,draggable,spellcheck"),di=u("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),vi="http://www.w3.org/1999/xlink",hi=function(t){return":"===t.charAt(5)&&"xlink"===t.slice(0,5)},mi=function(t){return hi(t)?t.slice(6,t.length):""},yi=function(t){return null==t||!1===t},gi={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},_i=u("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),bi=u("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),$i=function(t){return _i(t)||bi(t)},Ci=Object.create(null),wi=u("text,number,password,search,email,tel,url"),xi=Object.freeze({createElement:function(t,e){var n=document.createElement(t);return"select"!==t?n:(e.data&&e.data.attrs&&void 0!==e.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)},createElementNS:function(t,e){return document.createElementNS(gi[t],e)},createTextNode:function(t){return document.createTextNode(t)},createComment:function(t){return document.createComment(t)},insertBefore:function(t,e,n){t.insertBefore(e,n)},removeChild:function(t,e){t.removeChild(e)},appendChild:function(t,e){t.appendChild(e)},parentNode:function(t){return t.parentNode},nextSibling:function(t){return t.nextSibling},tagName:function(t){return t.tagName},setTextContent:function(t,e){t.textContent=e},setAttribute:function(t,e,n){t.setAttribute(e,n)}}),ki={create:function(t,e){Xt(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Xt(t,!0),Xt(e))},destroy:function(t){Xt(t,!0)}},Ai=new mr("",{},[]),Oi=["create","activate","update","remove","destroy"],Si={create:te,update:te,destroy:function(t){te(t,Ai)}},Ti=Object.create(null),Ei=[ki,Si],ji={create:re,update:re},Ni={create:oe,update:oe},Ii=/[\w).+\-_$\]]/,Li="__r",Mi="__c",Di={create:xe,update:xe},Pi={create:ke,update:ke},Fi=p(function(t){var e={},n=/:(.+)/;return t.split(/;(?![^(]*\))/g).forEach(function(t){if(t){var r=t.split(n);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}),Ri=/^--/,Hi=/\s*!important$/,Bi=function(t,e,n){if(Ri.test(e))t.style.setProperty(e,n);else if(Hi.test(n))t.style.setProperty(e,n.replace(Hi,""),"important");else{var r=Vi(e);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)t.style[r]=n[i];else t.style[r]=n}},Ui=["Webkit","Moz","ms"],Vi=p(function(t){if(ci=ci||document.createElement("div").style,"filter"!==(t=Pn(t))&&t in ci)return t;for(var e=t.charAt(0).toUpperCase()+t.slice(1),n=0;n<Ui.length;n++){var r=Ui[n]+e;if(r in ci)return r}}),zi={create:Se,update:Se},Ki=p(function(t){return{enterClass:t+"-enter",enterToClass:t+"-enter-to",enterActiveClass:t+"-enter-active",leaveClass:t+"-leave",leaveToClass:t+"-leave-to",leaveActiveClass:t+"-leave-active"}}),Ji=Gn&&!tr,qi="transition",Wi="animation",Gi="transition",Zi="transitionend",Xi="animation",Yi="animationend";Ji&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Gi="WebkitTransition",Zi="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Xi="WebkitAnimation",Yi="webkitAnimationEnd"));var Qi=Gn?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(t){return t()},to=/\b(transform|all)(,|$)/,eo=function(i){function o(t){var n=A.parentNode(t);e(n)&&A.removeChild(n,t)}function a(t,r,i,o,a){if(t.isRootInsert=!a,!function(t,r,i,o){var a=t.data;if(e(a)){var u=e(t.componentInstance)&&a.keepAlive;if(e(a=a.hook)&&e(a=a.init)&&a(t,!1,i,o),e(t.componentInstance))return s(t,r),n(u)&&function(t,n,r,i){for(var o,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,e(o=a.data)&&e(o=o.transition)){for(o=0;o<x.activate.length;++o)x.activate[o](Ai,a);n.push(a);break}c(r,t.elm,i)}(t,r,i,o),!0}}(t,r,i,o)){var u=t.data,f=t.children,v=t.tag;e(v)?(t.elm=t.ns?A.createElementNS(t.ns,v):A.createElement(v,t),d(t),l(t,f,r),e(u)&&p(t,r),c(i,t.elm,o)):n(t.isComment)?(t.elm=A.createComment(t.text),c(i,t.elm,o)):(t.elm=A.createTextNode(t.text),c(i,t.elm,o))}}function s(t,n){e(t.data.pendingInsert)&&(n.push.apply(n,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,f(t)?(p(t,n),d(t)):(Xt(t),n.push(t))}function c(t,n,r){e(t)&&(e(r)?r.parentNode===t&&A.insertBefore(t,n,r):A.appendChild(t,n))}function l(t,e,n){if(Array.isArray(e))for(var i=0;i<e.length;++i)a(e[i],n,t.elm,null,!0);else r(t.text)&&A.appendChild(t.elm,A.createTextNode(String(t.text)))}function f(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return e(t.tag)}function p(t,n){for(var r=0;r<x.create.length;++r)x.create[r](Ai,t);e(C=t.data.hook)&&(e(C.create)&&C.create(Ai,t),e(C.insert)&&n.push(t))}function d(t){var n;if(e(n=t.fnScopeId))A.setAttribute(t.elm,n,"");else for(var r=t;r;)e(n=r.context)&&e(n=n.$options._scopeId)&&A.setAttribute(t.elm,n,""),r=r.parent;e(n=Pr)&&n!==t.context&&n!==t.fnContext&&e(n=n.$options._scopeId)&&A.setAttribute(t.elm,n,"")}function v(t,e,n,r,i,o){for(;r<=i;++r)a(n[r],o,t,e)}function h(t){var n,r,i=t.data;if(e(i))for(e(n=i.hook)&&e(n=n.destroy)&&n(t),n=0;n<x.destroy.length;++n)x.destroy[n](t);if(e(n=t.children))for(r=0;r<t.children.length;++r)h(t.children[r])}function m(t,n,r,i){for(;r<=i;++r){var a=n[r];e(a)&&(e(a.tag)?(y(a),h(a)):o(a.elm))}}function y(t,n){if(e(n)||e(t.data)){var r,i=x.remove.length+1;for(e(n)?n.listeners+=i:n=function(t,e){function n(){0==--n.listeners&&o(t)}return n.listeners=e,n}(t.elm,i),e(r=t.componentInstance)&&e(r=r._vnode)&&e(r.data)&&y(r,n),r=0;r<x.remove.length;++r)x.remove[r](t,n);e(r=t.data.hook)&&e(r=r.remove)?r(t,n):n()}else o(t.elm)}function g(n,r,i,o,s){for(var c,u,l,f=0,p=0,d=r.length-1,h=r[0],y=r[d],g=i.length-1,b=i[0],$=i[g],C=!s;f<=d&&p<=g;)t(h)?h=r[++f]:t(y)?y=r[--d]:Yt(h,b)?(_(h,b,o),h=r[++f],b=i[++p]):Yt(y,$)?(_(y,$,o),y=r[--d],$=i[--g]):Yt(h,$)?(_(h,$,o),C&&A.insertBefore(n,h.elm,A.nextSibling(y.elm)),h=r[++f],$=i[--g]):Yt(y,b)?(_(y,b,o),C&&A.insertBefore(n,y.elm,h.elm),y=r[--d],b=i[++p]):(t(c)&&(c=Qt(r,f,d)),t(u=e(b.key)?c[b.key]:function(t,n,r,i){for(var o=r;o<i;o++){var a=n[o];if(e(a)&&Yt(t,a))return o}}(b,r,f,d))?a(b,o,n,h.elm):Yt(l=r[u],b)?(_(l,b,o),r[u]=void 0,C&&A.insertBefore(n,l.elm,h.elm)):a(b,o,n,h.elm),b=i[++p]);f>d?v(n,t(i[g+1])?null:i[g+1].elm,i,p,g,o):p>g&&m(0,r,f,d)}function _(r,i,o,a){if(r!==i){var s=i.elm=r.elm;if(n(r.isAsyncPlaceholder))e(i.asyncFactory.resolved)?$(r.elm,i,o):i.isAsyncPlaceholder=!0;else if(n(i.isStatic)&&n(r.isStatic)&&i.key===r.key&&(n(i.isCloned)||n(i.isOnce)))i.componentInstance=r.componentInstance;else{var c,u=i.data;e(u)&&e(c=u.hook)&&e(c=c.prepatch)&&c(r,i);var l=r.children,p=i.children;if(e(u)&&f(i)){for(c=0;c<x.update.length;++c)x.update[c](r,i);e(c=u.hook)&&e(c=c.update)&&c(r,i)}t(i.text)?e(l)&&e(p)?l!==p&&g(s,l,p,o,a):e(p)?(e(r.text)&&A.setTextContent(s,""),v(s,null,p,0,p.length-1,o)):e(l)?m(0,l,0,l.length-1):e(r.text)&&A.setTextContent(s,""):r.text!==i.text&&A.setTextContent(s,i.text),e(u)&&e(c=u.hook)&&e(c=c.postpatch)&&c(r,i)}}}function b(t,r,i){if(n(i)&&e(t.parent))t.parent.data.pendingInsert=r;else for(var o=0;o<r.length;++o)r[o].data.hook.insert(r[o])}function $(t,r,i,o){var a,c=r.tag,u=r.data,f=r.children;if(o=o||u&&u.pre,r.elm=t,n(r.isComment)&&e(r.asyncFactory))return r.isAsyncPlaceholder=!0,!0;if(e(u)&&(e(a=u.hook)&&e(a=a.init)&&a(r,!0),e(a=r.componentInstance)))return s(r,i),!0;if(e(c)){if(e(f))if(t.hasChildNodes())if(e(a=u)&&e(a=a.domProps)&&e(a=a.innerHTML)){if(a!==t.innerHTML)return!1}else{for(var d=!0,v=t.firstChild,h=0;h<f.length;h++){if(!v||!$(v,f[h],i,o)){d=!1;break}v=v.nextSibling}if(!d||v)return!1}else l(r,f,i);if(e(u)){var m=!1;for(var y in u)if(!O(y)){m=!0,p(r,i);break}!m&&u.class&&W(u.class)}}else t.data!==r.text&&(t.data=r.text);return!0}var C,w,x={},k=i.modules,A=i.nodeOps;for(C=0;C<Oi.length;++C)for(x[Oi[C]]=[],w=0;w<k.length;++w)e(k[w][Oi[C]])&&x[Oi[C]].push(k[w][Oi[C]]);var O=u("attrs,class,staticClass,staticStyle,key");return function(r,i,o,s,c,u){if(!t(i)){var l=!1,p=[];if(t(r))l=!0,a(i,p,c,u);else{var d=e(r.nodeType);if(!d&&Yt(r,i))_(r,i,p,s);else{if(d){if(1===r.nodeType&&r.hasAttribute(Vn)&&(r.removeAttribute(Vn),o=!0),n(o)&&$(r,i,p))return b(i,p,!0),r;r=function(t){return new mr(A.tagName(t).toLowerCase(),{},[],void 0,t)}(r)}var v=r.elm,y=A.parentNode(v);if(a(i,p,v._leaveCb?null:y,A.nextSibling(v)),e(i.parent))for(var g=i.parent,C=f(i);g;){for(var w=0;w<x.destroy.length;++w)x.destroy[w](g);if(g.elm=i.elm,C){for(var k=0;k<x.create.length;++k)x.create[k](Ai,g);var O=g.data.hook.insert;if(O.merged)for(var S=1;S<O.fns.length;S++)O.fns[S]()}else Xt(g);g=g.parent}e(y)?m(0,[r],0,0):e(r.tag)&&h(r)}}return b(i,p,l),i.elm}e(r)&&h(r)}}({nodeOps:xi,modules:[ji,Ni,Di,Pi,zi,Gn?{create:Ve,activate:Ve,remove:function(t,e){!0!==t.data.show?He(t,e):e()}}:{}].concat(Ei)});tr&&document.addEventListener("selectionchange",function(){var t=document.activeElement;t&&t.vmodel&&Ze(t,"input")});var no={inserted:function(t,e,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?Y(n,"postpatch",function(){no.componentUpdated(t,e,n)}):ze(t,e,n.context),t._vOptions=[].map.call(t.options,qe)):("textarea"===n.tag||wi(t.type))&&(t._vModifiers=e.modifiers,e.modifiers.lazy||(t.addEventListener("change",Ge),nr||(t.addEventListener("compositionstart",We),t.addEventListener("compositionend",Ge)),tr&&(t.vmodel=!0)))},componentUpdated:function(t,e,n){if("select"===n.tag){ze(t,e,n.context);var r=t._vOptions,i=t._vOptions=[].map.call(t.options,qe);if(i.some(function(t,e){return!g(t,r[e])})){(t.multiple?e.value.some(function(t){return Je(t,i)}):e.value!==e.oldValue&&Je(e.value,i))&&Ze(t,"change")}}}},ro={model:no,show:{bind:function(t,e,n){var r=e.value,i=(n=Xe(n)).data&&n.data.transition,o=t.__vOriginalDisplay="none"===t.style.display?"":t.style.display;r&&i?(n.data.show=!0,Re(n,function(){t.style.display=o})):t.style.display=r?o:"none"},update:function(t,e,n){var r=e.value;if(r!==e.oldValue){(n=Xe(n)).data&&n.data.transition?(n.data.show=!0,r?Re(n,function(){t.style.display=t.__vOriginalDisplay}):He(n,function(){t.style.display="none"})):t.style.display=r?t.__vOriginalDisplay:"none"}},unbind:function(t,e,n,r,i){i||(t.style.display=t.__vOriginalDisplay)}}},io={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},oo={name:"transition",props:io,abstract:!0,render:function(t){var e=this,n=this.$slots.default;if(n&&(n=n.filter(function(t){return t.tag||rt(t)})).length){var i=this.mode,o=n[0];if(function(t){for(;t=t.parent;)if(t.data.transition)return!0}(this.$vnode))return o;var a=Ye(o);if(!a)return o;if(this._leaving)return tn(t,o);var s="__transition-"+this._uid+"-";a.key=null==a.key?a.isComment?s+"comment":s+a.tag:r(a.key)?0===String(a.key).indexOf(s)?a.key:s+a.key:a.key;var c=(a.data||(a.data={})).transition=Qe(this),u=this._vnode,l=Ye(u);if(a.data.directives&&a.data.directives.some(function(t){return"show"===t.name})&&(a.data.show=!0),l&&l.data&&!function(t,e){return e.key===t.key&&e.tag===t.tag}(a,l)&&!rt(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var f=l.data.transition=h({},c);if("out-in"===i)return this._leaving=!0,Y(f,"afterLeave",function(){e._leaving=!1,e.$forceUpdate()}),tn(t,o);if("in-out"===i){if(rt(a))return u;var p,d=function(){p()};Y(c,"afterEnter",d),Y(c,"enterCancelled",d),Y(f,"delayLeave",function(t){p=t})}}return o}}},ao=h({tag:String,moveClass:String},io);delete ao.mode;var so={Transition:oo,TransitionGroup:{props:ao,render:function(t){for(var e=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Qe(this),s=0;s<i.length;s++){var c=i[s];c.tag&&null!=c.key&&0!==String(c.key).indexOf("__vlist")&&(o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a)}if(r){for(var u=[],l=[],f=0;f<r.length;f++){var p=r[f];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?u.push(p):l.push(p)}this.kept=t(e,null,u),this.removed=l}return t(e,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var t=this.prevChildren,e=this.moveClass||(this.name||"v")+"-move";t.length&&this.hasMove(t[0].elm,e)&&(t.forEach(en),t.forEach(nn),t.forEach(rn),this._reflow=document.body.offsetHeight,t.forEach(function(t){if(t.data.moved){var n=t.elm,r=n.style;Ie(n,e),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Zi,n._moveCb=function t(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Zi,t),n._moveCb=null,Le(n,e))})}}))},methods:{hasMove:function(t,e){if(!Ji)return!1;if(this._hasMove)return this._hasMove;var n=t.cloneNode();t._transitionClasses&&t._transitionClasses.forEach(function(t){Ee(n,t)}),Te(n,e),n.style.display="none",this.$el.appendChild(n);var r=De(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}}};Rt.config.mustUseProp=fi,Rt.config.isReservedTag=$i,Rt.config.isReservedAttr=ui,Rt.config.getTagNamespace=Gt,Rt.config.isUnknownElement=function(t){if(!Gn)return!0;if($i(t))return!1;if(t=t.toLowerCase(),null!=Ci[t])return Ci[t];var e=document.createElement(t);return t.indexOf("-")>-1?Ci[t]=e.constructor===window.HTMLUnknownElement||e.constructor===window.HTMLElement:Ci[t]=/HTMLUnknownElement/.test(e.toString())},h(Rt.options.directives,ro),h(Rt.options.components,so),Rt.prototype.__patch__=Gn?eo:y,Rt.prototype.$mount=function(t,e){return t=t&&Gn?Zt(t):void 0,function(t,e,n){t.$el=e,t.$options.render||(t.$options.render=gr),vt(t,"beforeMount");var r;return r=function(){t._update(t._render(),n)},new Kr(t,r,y,null,!0),n=!1,null==t.$vnode&&(t._isMounted=!0,vt(t,"mounted")),t}(this,t,e)},Rt.nextTick(function(){Jn.devtools&&lr&&lr.emit("init",Rt)},0);var co,uo=/\{\{((?:.|\n)+?)\}\}/g,lo=/[-.*+?^${}()|[\]\/\\]/g,fo=p(function(t){var e=t[0].replace(lo,"\\$&"),n=t[1].replace(lo,"\\$&");return new RegExp(e+"((?:.|\\n)+?)"+n,"g")}),po={staticKeys:["staticClass"],transformNode:function(t,e){e.warn;var n=he(t,"class");n&&(t.staticClass=JSON.stringify(n));var r=ve(t,"class",!1);r&&(t.classBinding=r)},genData:function(t){var e="";return t.staticClass&&(e+="staticClass:"+t.staticClass+","),t.classBinding&&(e+="class:"+t.classBinding+","),e}},vo={staticKeys:["staticStyle"],transformNode:function(t,e){e.warn;var n=he(t,"style");n&&(t.staticStyle=JSON.stringify(Fi(n)));var r=ve(t,"style",!1);r&&(t.styleBinding=r)},genData:function(t){var e="";return t.staticStyle&&(e+="staticStyle:"+t.staticStyle+","),t.styleBinding&&(e+="style:("+t.styleBinding+"),"),e}},ho=function(t){return co=co||document.createElement("div"),co.innerHTML=t,co.textContent},mo=u("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),yo=u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),go=u("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),_o=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,bo="[a-zA-Z_][\\w\\-\\.]*",$o="((?:"+bo+"\\:)?"+bo+")",Co=new RegExp("^<"+$o),wo=/^\s*(\/?)>/,xo=new RegExp("^<\\/"+$o+"[^>]*>"),ko=/^<!DOCTYPE [^>]+>/i,Ao=/^<!--/,Oo=/^<!\[/,So=!1;"x".replace(/x(.)?/g,function(t,e){So=""===e});var To,Eo,jo,No,Io,Lo,Mo,Do,Po,Fo,Ro,Ho=u("script,style,textarea",!0),Bo={},Uo={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},Vo=/&(?:lt|gt|quot|amp);/g,zo=/&(?:lt|gt|quot|amp|#10|#9);/g,Ko=u("pre,textarea",!0),Jo=function(t,e){return t&&Ko(t)&&"\n"===e[0]},qo=/^@|^v-on:/,Wo=/^v-|^@|^:/,Go=/(.*?)\s+(?:in|of)\s+(.*)/,Zo=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Xo=/^\(|\)$/g,Yo=/:(.*)$/,Qo=/^:|^v-bind:/,ta=/\.[^.]+/g,ea=p(ho),na=/^xmlns:NS\d+/,ra=/^NS\d+:/,ia=[po,vo,{preTransformNode:function(t,e){if("input"===t.tag){var n=t.attrsMap;if(n["v-model"]&&(n["v-bind:type"]||n[":type"])){var r=ve(t,"type"),i=he(t,"v-if",!0),o=i?"&&("+i+")":"",a=null!=he(t,"v-else",!0),s=he(t,"v-else-if",!0),c=fn(t);un(c),fe(c,"type","checkbox"),cn(c,e),c.processed=!0,c.if="("+r+")==='checkbox'"+o,ln(c,{exp:c.if,block:c});var u=fn(t);he(u,"v-for",!0),fe(u,"type","radio"),cn(u,e),ln(c,{exp:"("+r+")==='radio'"+o,block:u});var l=fn(t);return he(l,"v-for",!0),fe(l,":type",r),cn(l,e),ln(c,{exp:i,block:l}),a?c.else=!0:s&&(c.elseif=s),c}}}}],oa={expectHTML:!0,modules:ia,directives:{model:function(t,e,n){var r=e.value,i=e.modifiers,o=t.tag,a=t.attrsMap.type;if(t.component)return me(t,r,i),!1;if("select"===o)!function(t,e,n){var r='var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(n&&n.number?"_n(val)":"val")+"});";r=r+" "+ye(e,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),de(t,"change",r,null,!0)}(t,r,i);else if("input"===o&&"checkbox"===a)!function(t,e,n){var r=n&&n.number,i=ve(t,"value")||"null",o=ve(t,"true-value")||"true",a=ve(t,"false-value")||"false";ue(t,"checked","Array.isArray("+e+")?_i("+e+","+i+")>-1"+("true"===o?":("+e+")":":_q("+e+","+o+")")),de(t,"change","var $$a="+e+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+e+"=$$a.concat([$$v]))}else{$$i>-1&&("+e+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+ye(e,"$$c")+"}",null,!0)}(t,r,i);else if("input"===o&&"radio"===a)!function(t,e,n){var r=n&&n.number,i=ve(t,"value")||"null";ue(t,"checked","_q("+e+","+(i=r?"_n("+i+")":i)+")"),de(t,"change",ye(e,i),null,!0)}(t,r,i);else if("input"===o||"textarea"===o)!function(t,e,n){var r=t.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,u=o?"change":"range"===r?Li:"input",l="$event.target.value";s&&(l="$event.target.value.trim()"),a&&(l="_n("+l+")");var f=ye(e,l);c&&(f="if($event.target.composing)return;"+f),ue(t,"value","("+e+")"),de(t,u,f,null,!0),(s||a)&&de(t,"blur","$forceUpdate()")}(t,r,i);else if(!Jn.isReservedTag(o))return me(t,r,i),!1;return!0},text:function(t,e){e.value&&ue(t,"textContent","_s("+e.value+")")},html:function(t,e){e.value&&ue(t,"innerHTML","_s("+e.value+")")}},isPreTag:function(t){return"pre"===t},isUnaryTag:mo,mustUseProp:fi,canBeLeftOpenTag:yo,isReservedTag:$i,getTagNamespace:Gt,staticKeys:function(t){return t.reduce(function(t,e){return t.concat(e.staticKeys||[])},[]).join(",")}(ia)},aa=p(function(t){return u("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(t?","+t:""))}),sa=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,ca=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,ua={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},la=function(t){return"if("+t+")return null;"},fa={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:la("$event.target !== $event.currentTarget"),ctrl:la("!$event.ctrlKey"),shift:la("!$event.shiftKey"),alt:la("!$event.altKey"),meta:la("!$event.metaKey"),left:la("'button' in $event && $event.button !== 0"),middle:la("'button' in $event && $event.button !== 1"),right:la("'button' in $event && $event.button !== 2")},pa={on:function(t,e){t.wrapListeners=function(t){return"_g("+t+","+e.value+")"}},bind:function(t,e){t.wrapData=function(n){return"_b("+n+",'"+t.tag+"',"+e.value+","+(e.modifiers&&e.modifiers.prop?"true":"false")+(e.modifiers&&e.modifiers.sync?",true":"")+")"}},cloak:y},da=function(t){this.options=t,this.warn=t.warn||se,this.transforms=ce(t.modules,"transformCode"),this.dataGenFns=ce(t.modules,"genData"),this.directives=h(h({},pa),t.directives);var e=t.isReservedTag||Bn;this.maybeComponent=function(t){return!e(t.tag)},this.onceId=0,this.staticRenderFns=[]},va=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),function(t){return function(e){function n(n,r){var i=Object.create(e),o=[],a=[];if(i.warn=function(t,e){(e?a:o).push(t)},r){r.modules&&(i.modules=(e.modules||[]).concat(r.modules)),r.directives&&(i.directives=h(Object.create(e.directives||null),r.directives));for(var s in r)"modules"!==s&&"directives"!==s&&(i[s]=r[s])}var c=t(n,i);return c.errors=o,c.tips=a,c}return{compile:n,compileToFunctions:function(t){var e=Object.create(null);return function(n,r,i){(r=h({},r)).warn,delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(e[o])return e[o];var a=t(n,r),s={},c=[];return s.render=Tn(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(t){return Tn(t,c)}),e[o]=s}}(n)}}}(function(t,e){var n=sn(t.trim(),e);!1!==e.optimize&&function(t,e){t&&(Po=aa(e.staticKeys||""),Fo=e.isReservedTag||Bn,pn(t),dn(t,!1))}(n,e);var r=yn(n,e);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})(oa).compileToFunctions),ha=!!Gn&&En(!1),ma=!!Gn&&En(!0),ya=p(function(t){var e=Zt(t);return e&&e.innerHTML}),ga=Rt.prototype.$mount;return Rt.prototype.$mount=function(t,e){if((t=t&&Zt(t))===document.body||t===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=ya(r));else{if(!r.nodeType)return this;r=r.innerHTML}else t&&(r=function(t){if(t.outerHTML)return t.outerHTML;var e=document.createElement("div");return e.appendChild(t.cloneNode(!0)),e.innerHTML}(t));if(r){var i=va(r,{shouldDecodeNewlines:ha,shouldDecodeNewlinesForHref:ma,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return ga.call(this,t,e)},Rt.compile=va,Rt});
var scrollComponent = (function(){

    var scrollPosition = {
        current : 0,
        previous : 0,
        backup : 0
    };

    // PRIVATE =========================================================================================================

    scrollCheck = function () {
        scrollPosition.previous = scrollPosition.current;
        scrollPosition.current = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
    };

    /* scroll to */
    scrollMoveTo = function (position) {
        window.scrollTo( 0, position );
    };

    /* save scroll position */
    scrollSave = function () {
        scrollPosition.backup = document.documentElement.scrollTop || window.pageYOffset || window.scrollY;
    };

    /* scroll enable */
    scrollEnable = function () {
        document.body.style.overflowY = '';
        document.body.style.position = '';
    };

    /* scroll disable */
    scrollDisable = function () {
        document.body.style.overflowY = 'hidden';
        document.body.style.position = 'fixed';
    };

    /* return down || up */
    scrollDirection = function () {
        return ( scrollPosition.current >= scrollPosition.previous ) ? 'down' : 'up';
    };


    // INIT ============================================================================================================

    scrollCheck();
    window.addEventListener('scroll', function() {
        scrollCheck();
    });


    // PUBLIC ==========================================================================================================

    return {
        current : function(value){
            if(typeof value !== "undefined"){
                scrollMoveTo(value);
                scrollCheck();
            }
            else {
                scrollCheck();
                return scrollPosition.current;
            }
        },
        direction : function(){ return scrollDirection() },
        enable : function(){
            scrollEnable();
            scrollMoveTo(scrollPosition.backup);
        },
        disable : function(){
            scrollSave();
            scrollDisable();
        }
    }
}());
var goalComponent = (function(){

    var services = {
        yaCounterID : false,
        mailRuID : false,
        gaUsed : true,
        fbqUsed : true
    };

    // PRIVATE =========================================================================================================

    goalDone = function (goalName) {
        if(services.yaCounterID !=='' &&  typeof window['yaCounter' + services.yaCounterID] !== "undefined"){
            window['yaCounter' + services.yaCounterID].reachGoal(goalName, function () {});
        }
        if(services.mailRuID !=='' && typeof _tmr !== "undefined"){
            _tmr.push({ id: services.mailRuID, type: 'reachGoal', goal: goalName });
        }
        if(services.gaUsed && typeof ga !== "undefined"){
            ga('send', 'event', 'button', goalName);
        }
        if(services.fbqUsed && typeof fbq !== "undefined"){
            fbq('track', goalName, { });
        }
    };

    debug = function () {
        window.onload = function() {
            console.log( 'yaCounterID: ' + (typeof window['yaCounter' + services.yaCounterID] !== "undefined") );
            console.log( 'gaUsed: ' + (typeof ga !== "undefined") );
            console.log( 'fbqUsed: ' + (typeof fbq !== "undefined") );
            console.log( 'mailRuID: ' + (typeof _tmr !== "undefined") );
        }
    };

    // PUBLIC ==========================================================================================================

    return {
        reach : function(goalName, event){
            event = event || '';
            if( event === ""){ goalDone(goalName); }
            if( event === "onload"){ window.onload = function() { goalDone(goalName); } }
        },
        debug : function(){ debug(); }
    }
}());



(function() {
    window.app = {
        methods:{},
        scroll: {},
        goal: {},
        modal: {}
    };

}());

app.scroll = scrollComponent;
// app.scroll.current(value) - get/set value
// app.scroll.direction() - return 'down'|'up'
// app.scroll.disable() - disable scroll
// app.scroll.enable() - enable scroll;
// - app.scroll.speed() - return scroll speed value

app.goal = goalComponent;
// app.goal.reach(goalName, event) - trigger reach goal  ( event="onload" for window.load )
// app.goal.debug()



function MediaEventListener(queryOption){
    var _self = this;
    _self.resolutionCurr = window.innerWidth;
    _self.resolutionLast = 0;
    // default device breakpoints или из опций при инициализации
    _self.queries = (typeof queryOption !== undefined) ? queryOption :[
        {
            name: 'mobile',
            minResolution: 0,
            maxResolution: 419,
            isActive: false,
            isEach: false,
            callback: []
        },
        {
            name: 'landscape',
            minResolution: 420,
            maxResolution: 1023,
            isActive: false,
            isEach: false,
            callback: []
        },
        {
            name: 'desktop',
            minResolution: 1024,
            maxResolution: 1920,
            isActive: false,
            isEach: false,
            callback: []
        },
        {
            name: 'each-resize',
            minResolution: 0,
            maxResolution: 19200,
            isActive: false,
            isEach: true,
            callback: []
        }
    ];

    // добавление функций на разные разрешения
    _self.addQueryAction = function(queryName, func){
        _self.queries.forEach(function(item){
            if( item.name === queryName){
                item.callback.push(func);
            }
        });
    };

    // выполняем скрипты для перехода на конкретное разршенеие
    _self.doQueryAction = function(queryName){
        _self.queries.forEach(function(item){
            // ищем нужное разрешение
            if( item.name === queryName){
                // запускаем все колбэки
                item.callback.forEach(function(item){ item(); });
            }
        });

    };

    // проверка активных медиа запросов
    _self.resize = function () {
        // определяем текущее разрешение
        _self.resolutionCurr = window.innerWidth;
        // проходим по всем разрешениям
        _self.queries.forEach(function(screen){
            if( screen.minResolution <= _self.resolutionCurr && _self.resolutionCurr <= screen.maxResolution ){

                // выполняем подвешеные скрипты, если на этом разрешение их нужно выполнять при каждом ресайзе
                if(screen.isEach){ _self.doQueryAction(screen.name); }

                // если сменилось на активное, то выполняем подвешеные скрипты
                if(!screen.isActive && !screen.isEach){ _self.doQueryAction(screen.name); }
                screen.isActive = true;

            } else {
                // иначе переключаем флаг, если разрешение неактивно
                screen.isActive = false;
            }
        });
        // запоминаем разрешение
        _self.resolutionLast =  _self.resolutionCurr;

    };

    // инициализация
    _self.init = function(){
        // запускаем проход по всем разрешениям для первой загрузки
        _self.resize();
        // и вешаем обработчик на все последущюие ресайзы
        window.onresize =  function resize(){
            _self.resize();
        }

    };

    _self.debug = function () {
        console.log( _self.queries );
    };

}




(function( $ ){

    var defaults = {
        // дефолтные опции
        minResolution: 1000,
        extraWidth: 61
    };
    var states ={
        hasExtra: false
    };

    var methods = {

        init : function( options ) {

            options = $.extend({}, defaults, options);

            this.each(function() {

                var container = $(this);
                var menuRoot = $(this).find('ul').not('ul ul');
                var menuItems = menuRoot.find('li').not('li li');
                var containerWidth = menuRoot.width();

                methods.addExtraBar(menuRoot, menuItems);

                containerWidth = menuRoot.width();
                methods.hideItem(menuRoot, menuItems, containerWidth, options.extraWidth);

                window.addEventListener("resize", function() {
                    // containerWidth = menuRoot.width();
                    containerWidth = menuRoot.width();
                    if(window.innerWidth > options.minResolution){
                        methods.hideItem(menuRoot, menuItems, containerWidth, options.extraWidth);
                    }
                });

            });
        },

        resize : function () {

        },

        addExtraBar: function (menuRoot, menuItems) {
            var extrabarContent = '';
            for(var i = 0; i < menuItems.length; i++){
                extrabarContent = extrabarContent + menuItems.eq(i).get(0).outerHTML;
            }

            menuRoot.append(
                '<li class="menu-top__item -extraBar -has-drop-down -drop-down-inverse">' +
                '<button class="menu-top__item-name">...</button>' +
                '<div class="menu-top__drop-down">' +
                '<ul class="menu-top__list">' +
                extrabarContent +
                '</ul>' +
                '</div>' +
                '</li>'
            );
            menuRoot.find('.-extraBar .menu-top__drop-down .menu-top__drop-down').remove();
        },

        // удаляет дополнительную выпадашку
        removeExtraBar : function (menuRoot) {
            menuRoot.find('.-extraBar').remove();
        },


        // проверяет элементы, если элементу не хватает места, то скрывает его
        hideItem : function (menuRoot, menuItems, containerWidth, extraWidth) {
            // подготавливаем выпадашку дублёра
            var dubler = menuRoot.find('.-extraBar');
            var dublerList = dubler.find('.menu-top__item');
            // console.log(dublerList);
            dubler.removeClass('-hidden');
            menuItems.removeClass('-hidden');
            var debugLog = false;

            // console.log('containerWidth ' + containerWidth);

            var width = containerWidth;
            var sumWidth = 0;
            states.hasExtra = false;
            for(var i = 0; i < menuItems.length; i++){
                var elWidth = menuItems.eq(i).width();
                if(debugLog){console.log(menuItems.eq(i).children('a').html(), elWidth, sumWidth + elWidth);}
                // проверяем влазит ли текущий пункт
                if(sumWidth + elWidth <= width){
                    // да:
                    // проверяем это последний пункт
                    if(debugLog){console.log('проверяем влазит ли текущий пункт -  да');}
                    if(i === menuItems.length-1){
                        // да: удаляем многоточие
                        dubler.removeClass('-hidden');
                        // dublerList.eq(i).addClass('-hidden');
                        if(debugLog){console.log('проверяем это последний пункт -  да');}
                    } else {
                        // нет:
                        // проверяем осталось ли место для многоточия
                        if(debugLog){console.log('проверяем это последний пункт -  нет');}
                        if(sumWidth + elWidth + extraWidth <= width){
                            // да: переходим к следующему пункту
                            if(debugLog){console.log('проверяем осталось ли место для многоточия -  да');}
                            dublerList.eq(i).addClass('-hidden');
                        } else {
                            // нет: показываем многоточие вместо этого пункта
                            menuItems.eq(i).addClass('-hidden');
                            if(debugLog){console.log('проверяем осталось ли место для многоточия -  нет');}
                        }
                    }

                } else {
                    // нет: показываем многоточие вместо этого пункта
                    if(debugLog){console.log('проверяем влазит ли текущий пункт -  нет');}
                    menuItems.eq(i).addClass('-hidden');
                    states.hasExtra = true;
                }

                sumWidth = sumWidth + elWidth;
                if(debugLog){console.log('-------------------------------------------------');}
            }

            if(!states.hasExtra){
                dubler.addClass('-hidden');
            }


        }

    };

    $.fn.menuSmart = function(method) {

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод ' +  method + ' не существует в jQuery.menuSmart' );
        }

    };

})( jQuery );
function initMenuMobile(id, data) {

    var menuMobile = new Vue({
        el: '#menu-mobile-' + id,
        data: {
            el: '#menu-mobile-' + id,
            tree: data,
            activeNode: {
                id: data[0].id,
                name: data[0].name,
                parentId: data[0].parentId
            },
            show: false
        },
        template:
        '<transition name="menu-mobile-toggle" mode="out-in">' +
            '<div class="menu-mobile" id="menu-mobile-' + id + '" v-if="show">' +

                // menu-mobile-header begin
                '<transition name="menu-mobile-header-toggle">' +
                    '<div class="menu-mobile__header">' +
                        '<div class="menu-mobile__title">' +
                            '<button class="menu-mobile__title-btn" :data-node="activeNode.id" v-on:click.prevent="activeParentNode">' +
                                '<i class="menu-mobile__icon-arrow-right" v-if="activeNode.id"></i>' +
                                '{{ activeNode.name }}' +
                            '</button>' +
                        '</div>' +
                        '<button class="menu-mobile__switcher-btn" v-on:click.prevent="closeMenu"><span></span></button>' +
                    '</div>' +
                '</transition>' +

                // menu-mobile__list begin
                '<ul class="menu-mobile__list">' +
                    '<template  v-for="item in tree">' +
                    '<menu-mobile-item v-if="item.parentId === activeNode.id" v-bind:item="item" :key="item.id" ></menu-mobile-item>' +
                    '</template>' +
                '</ul>' +

            '</div>' +
        '</transition>',
        methods: {
            getNodeParam: function (input) {
                var result = {};
                result.id = input.id;
                result.name = input.name;
                result.parentId = input.parentId;
                return result;
            },
            closeMenu: function () {
                // $( this.el).hide();
                this.activeNode = menuMobile.getNodeParam( this.tree[0] );
                app.scroll.enable();
                this.show = false;
            },
            activeParentNode: function (event) {
                if( this.activeNode.parentId !== null ){
                    var parentId = this.activeNode.parentId;
                    for(var i = 0; i < menuMobile.tree.length; i++){
                        if (menuMobile.tree[i].id === parentId) {
                            menuMobile.activeNode = menuMobile.getNodeParam( menuMobile.tree[i] );
                        }
                    }
                } else {
                    menuMobile.closeMenu();
                }
            }
        },
        components: {
            'menu-mobile-item': {
                props: ['item', 'activeNode'],
                template:
                '<transition name="menu-mobile-item-show" mode="out-in">' +
                    '<li class="menu-mobile__item">' +
                        '<a class="menu-mobile__item-name" v-bind:href="item.href">' +
                            '{{ item.name }}' +
                            // иконка со стрелкой, для элементов без потомков
                                '<span v-if="!item.hasChild" class="menu-mobile__item-btn">' +
                                    '<i class="menu-mobile__icon-arrow-left"></i>' +
                                '</span>' +
                            '</a>' +
                            // для элементов с подкатегориями добавляем кнопочку показывающую эти подразделы
                            '<button v-if="item.hasChild" class="menu-mobile__item-btn hasChild"  v-on:click.prevent="showChild">' +
                            '<i class="menu-mobile__icon-more"></i>' +
                        '</button>' +
                    '</li>' +
                '</transition>',
                methods: {
                    showChild: function (event) {
                        menuMobile.activeNode = menuMobile.getNodeParam( this._props.item );
                    }
                }
            }
        }
    });

    return menuMobile;
}



function MenuMobile(options){

    // Дерево меню, включает в себя только узлы, листья игнорируются


    var text = {
        rootTitle: 'Меню'
    };

    var selectors = {
        container: '.js-menu-mobile',
        nodeRoot: '[data-menu-mobile--root]',
        nodeLink: '[data-menu-mobile--item-name]',
        node: 'data-menu-mobile--has-drop-down',
        btnToggle: '[data-menu-mobile--switcher-btn]'
    };

    var id = Math.round( Math.random()*10000);


    // переопределяем переменные если надо ============================================================================/

    // переопределяем свойства, если это необходимо
    function setOptions(container){
        // text = $.extend({}, selectors, options.text);
        // selectors = $.extend({}, selectors, options.selectors);
        text.rootTitle = $(container).find(selectors.btnToggle).text();
    }

    // работа с деревом ===============================================================================================/

    function buildMenu(nodeRoot){
        var tree = [];
        var _id = 0;
        // задаём корень
        tree.push({ id: _id, name: text.rootTitle, elementLink: nodeRoot, hasChild: true, parentId: null });
        // рекурсивно строим остальное дерево
        function build(parentNode){
            var parent = $(parentNode.elementLink);
            var el = parent.find('li').not( parent.find('li li'));
            el.each(function () {
                _id++;
                var currNode = {
                    id: _id,
                    name: $(this).children(selectors.nodeLink).text(),
                    href: $(this).children(selectors.nodeLink).attr('href'),
                    elementLink: $(this),
                    hasChild:  $(this).attr(selectors.node) != null,
                    parentId: parentNode.id
                };
                tree.push(currNode);
                if(currNode.hasChild){  build(currNode) }
            });
        }
        build( getNodeRoot(tree) );

        return tree;
    }

    function renderMenu(tree){
        // console.log(tree);
        $('body').append('' +
            '<menu-mobile class="menu-mobile" id="menu-mobile-' + id + '"></menu-mobile>'
        );
        var vueMenuMobile = initMenuMobile(id, tree);
        return vueMenuMobile;
    }

    // вспомогательные ================================================================================================/

    // Получения узла по ID
    function getNodeById(id, tree){
        var result = null;
        //ищем элемент с заданным id
        tree.forEach(function(item){
            if( item.id == id ){
                result = item;
                return false;
            }
        });
        // если элемента с таким id нет, то возвращаем null
        return result;
    }

    // Получения корня
    function getNodeRoot(tree){
        return getNodeById(0, tree);
    }


    // Обработка событий ==============================================================================================/

    function addHandlerToggleBtn(container, vueMenuMobile){
        $(container).on('click', selectors.btnToggle, function () {
            vueMenuMobile.show = true;
            app.scroll.disable();
        });
    }

    // initialize =====================================================================================================/
    $(selectors.container).each(function () {
        setOptions($(this));  // переопределяем свойства, если это необходимо
        var tree = buildMenu($(this).find(selectors.nodeRoot));  // создаём модель меню
        var vueMenuMobile = renderMenu(tree);   // ренедерим меню, колбэком навешиваем обработчики
        addHandlerToggleBtn(this, vueMenuMobile);
    });

    // public =========================================================================================================/
    return {
        init: function () {

        }
    };
}

(function( $ ){

    var defaults = {
        // дефолтные опции
        animation: ''
    };
    var states ={
        hasExtra: false
    };

    var methods = {

        init : function( options ) {

            options = $.extend({}, defaults, options);

            this.each(function() {
                var modalId = 'modal-' + Math.round(Math.random()*999999);
                $(this)
                .on('click', function (e) {
                    e.preventDefault();

                    var AJAX_LOADER  = '<img class="btn__loader" src="/assets/images/loader.svg" width="20" height="20">';
                    var $link = $(this);

                    if ($link.data('clicked')) {
                        return;
                    }

                    var linkContent = $link.html();
                    $link.data('clicked', true).html(AJAX_LOADER);

                    $.ajax({
                        url: $link.attr('href')
                    }).done(function (html) {
                        
                        $('body').append(
                            '<div class="modal ' + $link.attr('data-class') + '" id="' + modalId + '">' +
                                '<div class="modal__wrapper">' +
                                    '<div class="modal__bg"></div>' +
                                    '<button class="modal__btn-close">Close</button>' +
                                    '<div class="modal__container">' +
                                        '<div class="modal__scroll">' +
                                            html +
                                        '</div>' +
                                    '</div>' +
                                    '<div class="modal__loader"></div>' +
                                '</div>' +
                            '</div>'
                        );
                        setTimeout(function(){
                            app.scroll.disable();
                            methods.addEventListener($('#' + modalId));
                        }, 10);
                    }).always(function () {
                        $link.removeData('clicked').html(linkContent);
                        $('.modal__loader').css({'opacity': 0, 'pointerEvents': 'none'});
                    }).fail(function () {
                        console.warn('Ajax fail');
                    });
                })
                
                
            });
        },

        addEventListener : function (modal) {
            $(modal)
            .on('click', '.modal__bg', function (e) {
                if (e.target === this) {
                    $(this).find('.modal__btn-close').trigger('click');
                }
            })
            .on('click', '.modal__btn-close', function (e) {
                e.preventDefault();
                app.scroll.enable();
                $('.modal').addClass('closing');
                setTimeout(function () {
                    $('.modal').remove();
                    $('body').css('position', 'static'); 
                }, 1350);
            });
        },

        // проверяет элементы, если элементу не хватает места, то скрывает его
        hideItem : function () {
            
        }

    };

    $.fn.modalAjax = function(method) {

        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Метод ' +  method + ' не существует в jQuery.modalAjax' );
        }

    };

})( jQuery );
var Tables = (function(){

    // private =============================================================
    wrapTables = function (tableSelector){
        $(tableSelector).each(function () {
            var currTable = $(this);
            // var className = "table-responsive";
            // if(currTable.attr('data-view-type') == 'horizontal'){ className += ' -horizontal'; }
            currTable.wrap("<div class='table-responsive'><div class='table-responsive__scroll'></div></div>");
        })
    };

    // public =============================================================
    return {
        addMobileView: function(tableSelector){
            wrapTables(tableSelector);
        }
    };
}());
// js-spoiler-area - скрывает область под спойлер
//
// исходный код
// <div class="js-spoiler-area hidden-md"
// data-mobile-only="true"
// data-text-opened="Скрыть"
// data-text-closed="Показать полностью">
//  <!-- тут контент который нужно скрывать -->
// </div>

//  сегнерированый код
//  <div class="spoiler">
//      <div  class="spoiler js-spoiler-area"><!-- тут контент который нужно скрывать --></div>
//      <button class="spoiler__btn" ><span>Btn</span></button>
//  </div>

$('.js-spoiler-area').each(function () {

    var self = $(this);

    // кэшируем data-атрибуты, подставляя значения по умолчанию, если атрибуты не заданы
    var btnTextOpened = self.attr('data-text-opened') ? self.attr('data-text-opened') : 'Скрыть',
        btnTextClosed = self.attr('data-text-closed') ? self.attr('data-text-closed') : 'Смотреть полностью',
        btnClass = self.attr('data-btn-class') ? self.attr('data-btn-class') : '' ;

    // добавляем необходимый html
    self.addClass('spoiler__content');
    self.wrap('<div class="spoiler"></div>');
    self.parent().append('<button class="spoiler__btn btn ' + btnClass + '"><span>' + btnTextClosed + '</span></button>');

    // кэшируем элементы
    var container = self.parent(),
        content = self,
        btn = container.find('.spoiler__btn');


    // добавляем класс hidden-*/visible-* для кнопки если надо
    // класс добавляется, если у контента есть класс hidden-*
    var classList = content.attr('class').split(/\s+/),
        isResponse = false;
    $.each(classList, function(index, item) {
        if (item.substring(0,7) === 'hidden-') {
            btn.addClass('hidden visible-' + item.substring(7,9));
            isResponse = true;
        }
    });
    if(!isResponse){
        content.addClass('hidden');
    }

    // вешаем события
    btn.on('click', function(){
        content.slideToggle();
        btn.toggleClass('is-opened');
        if(btn.hasClass('is-opened')){
            btn.find('span').text(btnTextOpened);
        } else {
            btn.find('span').text(btnTextClosed);
        }
    });
});


$('.js-spoiler-items').each(function () {

    var self = $(this);

    // кэшируем data-атрибуты, подставляя значения по умолчанию, если атрибуты не заданы
    var btnTextOpened = self.attr('data-text-opened') ? self.attr('data-text-opened') : 'Скрыть',
        btnTextClosed = self.attr('data-text-closed') ? self.attr('data-text-closed') : 'Смотреть полностью',
        btnClass = self.attr('data-btn-class') ? self.attr('data-btn-class') : '' ;

    // добавляем необходимый html
    self.addClass('spoiler__content');
    self.wrap('<div class="spoiler"></div>');
    self.parent().append('<button class="spoiler__btn btn ' + btnClass + '"><span>' + btnTextClosed + '</span></button>');


});
console.time('extends-js');
/*=========================================================================*/
/* mediaEventListener кастомизируем breakpoint'ы */
var mediaEventListener = new MediaEventListener([
    { name: 'mobile',  minResolution: 0,    maxResolution: 1023,  isActive: false, isEach: false, callback: [] },
    { name: 'desktop', minResolution: 1024, maxResolution: 1920,  isActive: false, isEach: false, callback: [] },
    { name: 'resize',  minResolution: 0,    maxResolution: 19200, isActive: false, isEach: true,  callback: [] }
]);


/*=========================================================================*/
/* задаём каим именно табилцам нужно добавлять обертки .table-responsive для адаптива */
Tables.addMobileView('table');

$('.js-ajax').modalAjax();

// Base-1 Denis ------------------------------------------------------------------------------------------------------*/

var menuMobile = new MenuMobile({});
$('.js-menu-smart').menuSmart();

(function sliderHeader() {
    var sliderHeader = {
        carousel : $(".js-slider-header .owl-carousel"),
        nextBtn : $(".js-slider-header .js-nav-next"),
        prevBtn : $(".js-slider-header .js-nav-prev"),
        counter : $(".js-slider-header .js-nav-counter"),
        direction : 'forward'   // inverse
    };
    sliderHeader.carousel.owlCarousel({
        autoplay: true,
        autoplayTimeout: 6000,
        loop:true,
        margin:0,
        nav:false,
        dots: false,
        items: 1,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        onInitialized: renderCounter,
        onTranslate: renderCounter
    });

    function renderCounter(event) {
        // normalize index
        if( sliderHeader.direction === 'inverse' && event.item.index-1 === 0){
            sliderHeader.counter.html( event.item.count + '/' + event.item.count);
        } else {
            sliderHeader.counter.html(event.item.index-1 + '/' + event.item.count);
        }
    }

    sliderHeader.nextBtn.click(function() {
        sliderHeader.direction = 'forward';
        sliderHeader.carousel.trigger('next.owl.carousel');
    });
    sliderHeader.prevBtn.click(function() {
        sliderHeader.direction = 'inverse';
        sliderHeader.carousel.trigger('prev.owl.carousel');
    });
}());

(function advantages() {
    var advantages = {
        carousel : $(".js-advantages .owl-carousel"),
        nextBtn : $(".js-advantages .js-nav-next"),
        prevBtn : $(".js-advantages .js-nav-prev")
    };
    $(advantages.carousel).imagesLoaded()
        .always( function( instance ) {
            advantages.carousel.owlCarousel({
                nav: false,
                dots: false,
                loop: true,
                items: 4,
                responsive : {
                    0: { items: 1},
                    480: { items: 2},
                    768: { items: 3},
                    1024: { items: 4}
                }
            });
            advantages.nextBtn.click(function() {
                advantages.carousel.trigger('next.owl.carousel');
            });
            advantages.prevBtn.click(function() {
                advantages.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + advantages.carousel.selector);
        });

}());

(function hitsWidget() {
    var hitsWidget = {
        carousel : $(".js-hits-widget .owl-carousel"),
        nextBtn : $(".js-hits-widget .js-nav-next"),
        prevBtn : $(".js-hits-widget .js-nav-prev")
    };
    $(hitsWidget.carousel).imagesLoaded()
        .always( function( instance ) {
            hitsWidget.carousel.owlCarousel({
                center: true,
                nav: false,
                dots: false,
                loop: true,
                autoWidth: true,
                margin: 22,
                responsive: {
                    0: {
                        dots: true,
                        items:1
                    },
                    980: {
                        dots: false,
                        margin: 22
                    }
                }
            });
            hitsWidget.nextBtn.click(function() {
                hitsWidget.carousel.trigger('next.owl.carousel');
            });
            hitsWidget.prevBtn.click(function() {
                hitsWidget.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + hitsWidget.carousel.selector);
        });

}());

(function articlesWidget() {
    var articlesWidget = {
        carousel : $(".js-articles-widget .owl-carousel"),
        nextBtn : $(".js-articles-widget .js-nav-next"),
        prevBtn : $(".js-articles-widget .js-nav-prev")
    };
    $(articlesWidget.carousel).imagesLoaded()
        .always( function( instance ) {
            articlesWidget.carousel.owlCarousel({
                center: true,
                nav: false,
                dots: false,
                loop: true,
                autoWidth: true,
                margin: 22,
                responsive: {
                    0: {
                        dots: true,
                        items:1
                    },
                    980: {
                        dots: false,
                        margin: 22
                    }
                }
            });
            articlesWidget.nextBtn.click(function() {
                articlesWidget.carousel.trigger('next.owl.carousel');
            });
            articlesWidget.prevBtn.click(function() {
                articlesWidget.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + articlesWidget.carousel.selector);
        });

}());

(function newsWidget() {
    var newsWidget = {
        carousel : $(".js-news-widget .news-widget__carousel.owl-carousel"),
        nextBtn : $(".js-news-widget .js-nav-next"),
        prevBtn : $(".js-news-widget .js-nav-prev")
    };
    $(newsWidget.carousel).imagesLoaded()
        .always( function( instance ) {
            newsWidget.carousel.owlCarousel({
                center: true,
                nav: false,
                dots: false,
                loop: true,
                autoWidth: true,
                margin: 22,
                responsive: {
                    0: {
                        dots: true,
                        items:1
                    },
                    980: {
                        dots: false,
                        margin: 22
                    }
                }
            });
            newsWidget.nextBtn.click(function() {
                newsWidget.carousel.trigger('next.owl.carousel');
            });
            newsWidget.prevBtn.click(function() {
                newsWidget.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + newsWidget.carousel);
        });

}());

(function bannersWidget() {
    var bannersWidget = {
        carousel : $(".js-news-widget .banners__carousel.owl-carousel"),
    };
    $(bannersWidget.carousel).imagesLoaded()
        .always( function( instance ) {
            bannersWidget.carousel.owlCarousel({
                center: true,
                nav: false,
                dots: false,
                loop: true,
                autoWidth: true,
                margin: 22,
                responsive: {
                    0: {
                        dots: true,
                        items:1
                    },
                    980: {
                        dots: false,
                        margin: 22
                    }
                }
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + bannersWidget.carousel);
        });
}());

(function galeryFullwidthCentered() {
    var galeryFullwidthCentered = {
        carousel : $(".js-galery-fullwidth-centered .owl-carousel"),
        nextBtn : $(".js-galery-fullwidth-centered .js-nav-next"),
        prevBtn : $(".js-galery-fullwidth-centered .js-nav-prev")
    };
    $(galeryFullwidthCentered.carousel).imagesLoaded()
        .always( function( instance ) {
            galeryFullwidthCentered.carousel.owlCarousel({
                center: true,
                nav: false,
                dots: false,
                loop: true,
                autoWidth: true,
                margin: 2
            });
            galeryFullwidthCentered.nextBtn.click(function() {
                galeryFullwidthCentered.carousel.trigger('next.owl.carousel');
            });
            galeryFullwidthCentered.prevBtn.click(function() {
                galeryFullwidthCentered.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + galeryFullwidthCentered.carousel.selector);
        });

}());

(function certificates() {
    var certificates = {
        carousel : $(".js-certificates .owl-carousel"),
        nextBtn : $(".js-certificates .js-nav-next"),
        prevBtn : $(".js-certificates .js-nav-prev")
    };
    $(certificates.carousel).imagesLoaded()
        .always( function( instance ) {
            certificates.carousel.owlCarousel({
                nav: false,
                dots: false,
                loop: true,
                autoWidth:true,
                margin: 20,
                responsive: {
                    0: {
                        dots: true,
                        items:1
                    },
                    980: {
                        dots: false,
                        margin: 22
                    }
                }
            });
            certificates.nextBtn.click(function() {
                certificates.carousel.trigger('next.owl.carousel');
            });
            certificates.prevBtn.click(function() {
                certificates.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + certificates.carousel.selector);
        });

}());
(function partners() {
    var partners = {
        carousel : $(".js-partners .owl-carousel"),
        nextBtn : $(".js-partners .js-nav-next"),
        prevBtn : $(".js-partners .js-nav-prev")
    };
    $(partners.carousel).imagesLoaded()
        .always( function( instance ) {
            partners.carousel.owlCarousel({
                nav: false,
                dots: false,
                loop: true,
                autoWidth:true,
                margin: 25,
                responsive: {
                    0: {
                        dots: true,
                        items:1
                    },
                    980: {
                        dots: false,
                        margin: 22
                    }
                }
            });
            partners.nextBtn.click(function() {
                partners.carousel.trigger('next.owl.carousel');
            });
            partners.prevBtn.click(function() {
                partners.carousel.trigger('prev.owl.carousel');
            });
        })
        .fail( function() {
            console.warn('one or more images is broken in ' + partners.carousel);
        });

}());

(function testimonialsWidget() {
    var testimonialsWidget = {
        carousel : $(".js-testimonials-widget .bxslider"),
        nextBtn : $(".js-testimonials-widget .js-nav-next"),
        prevBtn : $(".js-testimonials-widget .js-nav-prev")
    };
    // сохраняем слайдер в testimonialsWidget.carousel
    testimonialsWidget.carousel.bxSlider();

    testimonialsWidget.nextBtn.click(function() {
        testimonialsWidget.carousel.goToNextSlide();
    });
    testimonialsWidget.prevBtn.click(function() {
        testimonialsWidget.carousel.goToPrevSlide();
    });

    mediaEventListener.addQueryAction('mobile', function(){
        testimonialsWidget.carousel.reloadSlider({
            mode: 'horizontal',
            infiniteLoop: true,
            easing: "ease-in",
            pager: true,
            controls: false,
            minSlides: 1,
            maxSlides: 1,
            adaptiveHeight: false
        });
    });

    mediaEventListener.addQueryAction('desktop', function(){
        testimonialsWidget.carousel.reloadSlider({
            mode: 'vertical',
            infiniteLoop: true,
            easing: "ease-in",
            pager: false,
            controls: false,
            minSlides: 2,
            maxSlides: 2,
            adaptiveHeight: false
        });
    });
}());


// Base-1 Denis End --------------------------------------------------------------------------------------------------*/


/*=========================================================================*/
/* Window Resize с mediaEventListener */
// навешиваем скрипты на разные разрешения
mediaEventListener.addQueryAction('mobile', function(){
    // console.log('mobile 1');
});
mediaEventListener.addQueryAction('desktop', function(){
    // console.log('desktop 2');
});
mediaEventListener.addQueryAction('resize', function(){
    // console.log('resize');
});
// mediaEventListener.addQueryAction('resize', function(){
//     console.log('resize');
//


console.timeEnd('extends-js');
console.log('main');
/*=========================================================================*/
// mediaEventListener инициализируем после всех добавлений,
// скрипты подвешеные позже не отработают при первой загрузке
mediaEventListener.init();
/*=========================================================================*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpxdWVyeS5taW4uanMiLCJpbWFnZXNsb2FkZWQucGtnZC5qcyIsImpxdWVyeS5ieHNsaWRlci5qcyIsIm93bC5jYXJvdXNlbC5qcyIsInZ1ZS5taW4uanMiLCJjb3JlLWNvbXBvbmVudHMvc2Nyb2xsLmNvbXBvbmVudC5qcyIsImNvcmUtY29tcG9uZW50cy9nb2FsLmNvbXBvbmVudC5qcyIsImNvcmUuanMiLCJtZWRpYS1ldmVudC1saXN0ZW5lci5qcyIsImpxdWVyeS5tZW51LXNtYXJ0LmpzIiwibWVudS1tb2JpbGUudnVlLmpzIiwibWVudS1tb2JpbGUuanMiLCJqcXVlcnkubW9kYWwtYWpheC5qcyIsInRhYmxlcy5qcyIsInNwb2lsZXIuanMiLCJfZXh0ZW5kcy5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9faGVhZGVyL2hlYWRlci5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9ob21lcGFnZS9zbGlkZXIvc2xpZGVyLmpzIiwiLi4vLi4vdGVtcGxhdGUtYmxvY2svYmFzZS0xL2hvbWVwYWdlL2FkdmFudGFnZXMvYWR2YW50YWdlcy5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9ob21lcGFnZS9oaXRzLXdpZGdldC9oaXRzLXdpZGdldC5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9ob21lcGFnZS9hcnRpY2xlcy13aWRnZXQvYXJ0aWNsZXMtd2lkZ2V0LmpzIiwiLi4vLi4vdGVtcGxhdGUtYmxvY2svYmFzZS0xL2hvbWVwYWdlL25ld3Mtd2lkZ2V0LWFuZC1iYW5uZXJzL25ld3Mtd2lkZ2V0LWFuZC1iYW5uZXJzLmpzIiwiLi4vLi4vdGVtcGxhdGUtYmxvY2svYmFzZS0xL2hvbWVwYWdlL2dhbGVyeS1mdWxsd2lkdGgvZ2FsZXJ5LWZ1bGx3aWR0aC5qcyIsIi4uLy4uL3RlbXBsYXRlLWJsb2NrL2Jhc2UtMS9ob21lcGFnZS9jZXJ0aWZpY2F0ZXMtYW5kLXBhcnRuZXJzL2NlcnRpZmljYXRlcy1hbmQtcGFydG5lcnMuanMiLCIuLi8uLi90ZW1wbGF0ZS1ibG9jay9iYXNlLTEvaG9tZXBhZ2UvdGVzdGltb25pYWxzLXdpZGdldC90ZXN0aW1vbmlhbHMtd2lkZ2V0LmpzIiwibWFpbi5qcyIsIm1lZGlhLWV2ZW50LWxpc3RlbmVyLWluaXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDamZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMva0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDenNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FEa0JBO0FFbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FGbEJBO0FHckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUhSQTtBSXZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FKWkE7QUt6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBTFZBO0FNM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QU50Q0E7QU83QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QVBJQTtBUS9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FSeENBO0FTakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FUUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QVV4REE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBqUXVlcnkgdjEuMTIuNCB8IChjKSBqUXVlcnkgRm91bmRhdGlvbiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1hLmRvY3VtZW50LGU9Yy5zbGljZSxmPWMuY29uY2F0LGc9Yy5wdXNoLGg9Yy5pbmRleE9mLGk9e30saj1pLnRvU3RyaW5nLGs9aS5oYXNPd25Qcm9wZXJ0eSxsPXt9LG09XCIxLjEyLjRcIixuPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBuLmZuLmluaXQoYSxiKX0sbz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2cscD0vXi1tcy0vLHE9Ly0oW1xcZGEtel0pL2dpLHI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtuLmZuPW4ucHJvdG90eXBlPXtqcXVlcnk6bSxjb25zdHJ1Y3RvcjpuLHNlbGVjdG9yOlwiXCIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBlLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT8wPmE/dGhpc1thK3RoaXMubGVuZ3RoXTp0aGlzW2FdOmUuY2FsbCh0aGlzKX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPW4ubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxiLmNvbnRleHQ9dGhpcy5jb250ZXh0LGJ9LGVhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZWFjaCh0aGlzLGEpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4ubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZS5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKygwPmE/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYj5jP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IoKX0scHVzaDpnLHNvcnQ6Yy5zb3J0LHNwbGljZTpjLnNwbGljZX0sbi5leHRlbmQ9bi5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZz1hcmd1bWVudHNbMF18fHt9LGg9MSxpPWFyZ3VtZW50cy5sZW5ndGgsaj0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBnJiYoaj1nLGc9YXJndW1lbnRzW2hdfHx7fSxoKyspLFwib2JqZWN0XCI9PXR5cGVvZiBnfHxuLmlzRnVuY3Rpb24oZyl8fChnPXt9KSxoPT09aSYmKGc9dGhpcyxoLS0pO2k+aDtoKyspaWYobnVsbCE9KGU9YXJndW1lbnRzW2hdKSlmb3IoZCBpbiBlKWE9Z1tkXSxjPWVbZF0sZyE9PWMmJihqJiZjJiYobi5pc1BsYWluT2JqZWN0KGMpfHwoYj1uLmlzQXJyYXkoYykpKT8oYj8oYj0hMSxmPWEmJm4uaXNBcnJheShhKT9hOltdKTpmPWEmJm4uaXNQbGFpbk9iamVjdChhKT9hOnt9LGdbZF09bi5leHRlbmQoaixmLGMpKTp2b2lkIDAhPT1jJiYoZ1tkXT1jKSk7cmV0dXJuIGd9LG4uZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKG0rTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09bi50eXBlKGEpfSxpc0FycmF5OkFycmF5LmlzQXJyYXl8fGZ1bmN0aW9uKGEpe3JldHVyblwiYXJyYXlcIj09PW4udHlwZShhKX0saXNXaW5kb3c6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7dmFyIGI9YSYmYS50b1N0cmluZygpO3JldHVybiFuLmlzQXJyYXkoYSkmJmItcGFyc2VGbG9hdChiKSsxPj0wfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoIWF8fFwib2JqZWN0XCIhPT1uLnR5cGUoYSl8fGEubm9kZVR5cGV8fG4uaXNXaW5kb3coYSkpcmV0dXJuITE7dHJ5e2lmKGEuY29uc3RydWN0b3ImJiFrLmNhbGwoYSxcImNvbnN0cnVjdG9yXCIpJiYhay5jYWxsKGEuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKSlyZXR1cm4hMX1jYXRjaChjKXtyZXR1cm4hMX1pZighbC5vd25GaXJzdClmb3IoYiBpbiBhKXJldHVybiBrLmNhbGwoYSxiKTtmb3IoYiBpbiBhKTtyZXR1cm4gdm9pZCAwPT09Ynx8ay5jYWxsKGEsYil9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2lbai5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihiKXtiJiZuLnRyaW0oYikmJihhLmV4ZWNTY3JpcHR8fGZ1bmN0aW9uKGIpe2EuZXZhbC5jYWxsKGEsYil9KShiKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UocCxcIm1zLVwiKS5yZXBsYWNlKHEscil9LG5vZGVOYW1lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MDtpZihzKGEpKXtmb3IoYz1hLmxlbmd0aDtjPmQ7ZCsrKWlmKGIuY2FsbChhW2RdLGQsYVtkXSk9PT0hMSlicmVha31lbHNlIGZvcihkIGluIGEpaWYoYi5jYWxsKGFbZF0sZCxhW2RdKT09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShvLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHMoT2JqZWN0KGEpKT9uLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmcuY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtpZihiKXtpZihoKXJldHVybiBoLmNhbGwoYixhLGMpO2ZvcihkPWIubGVuZ3RoLGM9Yz8wPmM/TWF0aC5tYXgoMCxkK2MpOmM6MDtkPmM7YysrKWlmKGMgaW4gYiYmYltjXT09PWEpcmV0dXJuIGN9cmV0dXJuLTF9LG1lcmdlOmZ1bmN0aW9uKGEsYil7dmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO3doaWxlKGM+ZClhW2UrK109YltkKytdO2lmKGMhPT1jKXdoaWxlKHZvaWQgMCE9PWJbZF0pYVtlKytdPWJbZCsrXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2c+ZjtmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxnPTAsaD1bXTtpZihzKGEpKWZvcihkPWEubGVuZ3RoO2Q+ZztnKyspZT1iKGFbZ10sZyxjKSxudWxsIT1lJiZoLnB1c2goZSk7ZWxzZSBmb3IoZyBpbiBhKWU9YihhW2ddLGcsYyksbnVsbCE9ZSYmaC5wdXNoKGUpO3JldHVybiBmLmFwcGx5KFtdLGgpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGY7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihmPWFbYl0sYj1hLGE9Ziksbi5pc0Z1bmN0aW9uKGEpPyhjPWUuY2FsbChhcmd1bWVudHMsMiksZD1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsYy5jb25jYXQoZS5jYWxsKGFyZ3VtZW50cykpKX0sZC5ndWlkPWEuZ3VpZD1hLmd1aWR8fG4uZ3VpZCsrLGQpOnZvaWQgMH0sbm93OmZ1bmN0aW9uKCl7cmV0dXJuK25ldyBEYXRlfSxzdXBwb3J0Omx9KSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJihuLmZuW1N5bWJvbC5pdGVyYXRvcl09Y1tTeW1ib2wuaXRlcmF0b3JdKSxuLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2lbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHMoYSl7dmFyIGI9ISFhJiZcImxlbmd0aFwiaW4gYSYmYS5sZW5ndGgsYz1uLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiPT09Y3x8bi5pc1dpbmRvdyhhKT8hMTpcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGF9dmFyIHQ9ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdT1cInNpenpsZVwiKzEqbmV3IERhdGUsdj1hLmRvY3VtZW50LHc9MCx4PTAseT1nYSgpLHo9Z2EoKSxBPWdhKCksQj1mdW5jdGlvbihhLGIpe3JldHVybiBhPT09YiYmKGw9ITApLDB9LEM9MTw8MzEsRD17fS5oYXNPd25Qcm9wZXJ0eSxFPVtdLEY9RS5wb3AsRz1FLnB1c2gsSD1FLnB1c2gsST1FLnNsaWNlLEo9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspaWYoYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9LEs9XCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLEw9XCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLE09XCIoPzpcXFxcXFxcXC58W1xcXFx3LV18W15cXFxceDAwLVxcXFx4YTBdKStcIixOPVwiXFxcXFtcIitMK1wiKihcIitNK1wiKSg/OlwiK0wrXCIqKFsqXiR8IX5dPz0pXCIrTCtcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiK00rXCIpKXwpXCIrTCtcIipcXFxcXVwiLE89XCI6KFwiK00rXCIpKD86XFxcXCgoKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8KCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiK04rXCIpKil8LiopXFxcXCl8KVwiLFA9bmV3IFJlZ0V4cChMK1wiK1wiLFwiZ1wiKSxRPW5ldyBSZWdFeHAoXCJeXCIrTCtcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIrTCtcIiskXCIsXCJnXCIpLFI9bmV3IFJlZ0V4cChcIl5cIitMK1wiKixcIitMK1wiKlwiKSxTPW5ldyBSZWdFeHAoXCJeXCIrTCtcIiooWz4rfl18XCIrTCtcIilcIitMK1wiKlwiKSxUPW5ldyBSZWdFeHAoXCI9XCIrTCtcIiooW15cXFxcXSdcXFwiXSo/KVwiK0wrXCIqXFxcXF1cIixcImdcIiksVT1uZXcgUmVnRXhwKE8pLFY9bmV3IFJlZ0V4cChcIl5cIitNK1wiJFwiKSxXPXtJRDpuZXcgUmVnRXhwKFwiXiMoXCIrTStcIilcIiksQ0xBU1M6bmV3IFJlZ0V4cChcIl5cXFxcLihcIitNK1wiKVwiKSxUQUc6bmV3IFJlZ0V4cChcIl4oXCIrTStcInxbKl0pXCIpLEFUVFI6bmV3IFJlZ0V4cChcIl5cIitOKSxQU0VVRE86bmV3IFJlZ0V4cChcIl5cIitPKSxDSElMRDpuZXcgUmVnRXhwKFwiXjoob25seXxmaXJzdHxsYXN0fG50aHxudGgtbGFzdCktKGNoaWxkfG9mLXR5cGUpKD86XFxcXChcIitMK1wiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIrTCtcIiooPzooWystXXwpXCIrTCtcIiooXFxcXGQrKXwpKVwiK0wrXCIqXFxcXCl8KVwiLFwiaVwiKSxib29sOm5ldyBSZWdFeHAoXCJeKD86XCIrSytcIikkXCIsXCJpXCIpLG5lZWRzQ29udGV4dDpuZXcgUmVnRXhwKFwiXlwiK0wrXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiK0wrXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiK0wrXCIqXFxcXCl8KSg/PVteLV18JClcIixcImlcIil9LFg9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxZPS9eaFxcZCQvaSxaPS9eW157XStcXHtcXHMqXFxbbmF0aXZlIFxcdy8sJD0vXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxfPS9bK35dLyxhYT0vJ3xcXFxcL2csYmE9bmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiK0wrXCI/fChcIitMK1wiKXwuKVwiLFwiaWdcIiksY2E9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwiMHhcIitiLTY1NTM2O3JldHVybiBkIT09ZHx8Yz9iOjA+ZD9TdHJpbmcuZnJvbUNoYXJDb2RlKGQrNjU1MzYpOlN0cmluZy5mcm9tQ2hhckNvZGUoZD4+MTB8NTUyOTYsMTAyMyZkfDU2MzIwKX0sZGE9ZnVuY3Rpb24oKXttKCl9O3RyeXtILmFwcGx5KEU9SS5jYWxsKHYuY2hpbGROb2Rlcyksdi5jaGlsZE5vZGVzKSxFW3YuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlfWNhdGNoKGVhKXtIPXthcHBseTpFLmxlbmd0aD9mdW5jdGlvbihhLGIpe0cuYXBwbHkoYSxJLmNhbGwoYikpfTpmdW5jdGlvbihhLGIpe3ZhciBjPWEubGVuZ3RoLGQ9MDt3aGlsZShhW2MrK109YltkKytdKTthLmxlbmd0aD1jLTF9fX1mdW5jdGlvbiBmYShhLGIsZCxlKXt2YXIgZixoLGosayxsLG8scixzLHc9YiYmYi5vd25lckRvY3VtZW50LHg9Yj9iLm5vZGVUeXBlOjk7aWYoZD1kfHxbXSxcInN0cmluZ1wiIT10eXBlb2YgYXx8IWF8fDEhPT14JiY5IT09eCYmMTEhPT14KXJldHVybiBkO2lmKCFlJiYoKGI/Yi5vd25lckRvY3VtZW50fHxiOnYpIT09biYmbShiKSxiPWJ8fG4scCkpe2lmKDExIT09eCYmKG89JC5leGVjKGEpKSlpZihmPW9bMV0pe2lmKDk9PT14KXtpZighKGo9Yi5nZXRFbGVtZW50QnlJZChmKSkpcmV0dXJuIGQ7aWYoai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2UgaWYodyYmKGo9dy5nZXRFbGVtZW50QnlJZChmKSkmJnQoYixqKSYmai5pZD09PWYpcmV0dXJuIGQucHVzaChqKSxkfWVsc2V7aWYob1syXSlyZXR1cm4gSC5hcHBseShkLGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYSkpLGQ7aWYoKGY9b1szXSkmJmMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXJldHVybiBILmFwcGx5KGQsYi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGYpKSxkfWlmKGMucXNhJiYhQVthK1wiIFwiXSYmKCFxfHwhcS50ZXN0KGEpKSl7aWYoMSE9PXgpdz1iLHM9YTtlbHNlIGlmKFwib2JqZWN0XCIhPT1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkpeyhrPWIuZ2V0QXR0cmlidXRlKFwiaWRcIikpP2s9ay5yZXBsYWNlKGFhLFwiXFxcXCQmXCIpOmIuc2V0QXR0cmlidXRlKFwiaWRcIixrPXUpLHI9ZyhhKSxoPXIubGVuZ3RoLGw9Vi50ZXN0KGspP1wiI1wiK2s6XCJbaWQ9J1wiK2srXCInXVwiO3doaWxlKGgtLSlyW2hdPWwrXCIgXCIrcWEocltoXSk7cz1yLmpvaW4oXCIsXCIpLHc9Xy50ZXN0KGEpJiZvYShiLnBhcmVudE5vZGUpfHxifWlmKHMpdHJ5e3JldHVybiBILmFwcGx5KGQsdy5xdWVyeVNlbGVjdG9yQWxsKHMpKSxkfWNhdGNoKHkpe31maW5hbGx5e2s9PT11JiZiLnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpfX19cmV0dXJuIGkoYS5yZXBsYWNlKFEsXCIkMVwiKSxiLGQsZSl9ZnVuY3Rpb24gZ2EoKXt2YXIgYT1bXTtmdW5jdGlvbiBiKGMsZSl7cmV0dXJuIGEucHVzaChjK1wiIFwiKT5kLmNhY2hlTGVuZ3RoJiZkZWxldGUgYlthLnNoaWZ0KCldLGJbYytcIiBcIl09ZX1yZXR1cm4gYn1mdW5jdGlvbiBoYShhKXtyZXR1cm4gYVt1XT0hMCxhfWZ1bmN0aW9uIGlhKGEpe3ZhciBiPW4uY3JlYXRlRWxlbWVudChcImRpdlwiKTt0cnl7cmV0dXJuISFhKGIpfWNhdGNoKGMpe3JldHVybiExfWZpbmFsbHl7Yi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYiksYj1udWxsfX1mdW5jdGlvbiBqYShhLGIpe3ZhciBjPWEuc3BsaXQoXCJ8XCIpLGU9Yy5sZW5ndGg7d2hpbGUoZS0tKWQuYXR0ckhhbmRsZVtjW2VdXT1ifWZ1bmN0aW9uIGthKGEsYil7dmFyIGM9YiYmYSxkPWMmJjE9PT1hLm5vZGVUeXBlJiYxPT09Yi5ub2RlVHlwZSYmKH5iLnNvdXJjZUluZGV4fHxDKS0ofmEuc291cmNlSW5kZXh8fEMpO2lmKGQpcmV0dXJuIGQ7aWYoYyl3aGlsZShjPWMubmV4dFNpYmxpbmcpaWYoYz09PWIpcmV0dXJuLTE7cmV0dXJuIGE/MTotMX1mdW5jdGlvbiBsYShhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWMmJmIudHlwZT09PWF9fWZ1bmN0aW9uIG1hKGEpe3JldHVybiBmdW5jdGlvbihiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuKFwiaW5wdXRcIj09PWN8fFwiYnV0dG9uXCI9PT1jKSYmYi50eXBlPT09YX19ZnVuY3Rpb24gbmEoYSl7cmV0dXJuIGhhKGZ1bmN0aW9uKGIpe3JldHVybiBiPStiLGhhKGZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hKFtdLGMubGVuZ3RoLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWNbZT1mW2ddXSYmKGNbZV09IShkW2VdPWNbZV0pKX0pfSl9ZnVuY3Rpb24gb2EoYSl7cmV0dXJuIGEmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmdldEVsZW1lbnRzQnlUYWdOYW1lJiZhfWM9ZmEuc3VwcG9ydD17fSxmPWZhLmlzWE1MPWZ1bmN0aW9uKGEpe3ZhciBiPWEmJihhLm93bmVyRG9jdW1lbnR8fGEpLmRvY3VtZW50RWxlbWVudDtyZXR1cm4gYj9cIkhUTUxcIiE9PWIubm9kZU5hbWU6ITF9LG09ZmEuc2V0RG9jdW1lbnQ9ZnVuY3Rpb24oYSl7dmFyIGIsZSxnPWE/YS5vd25lckRvY3VtZW50fHxhOnY7cmV0dXJuIGchPT1uJiY5PT09Zy5ub2RlVHlwZSYmZy5kb2N1bWVudEVsZW1lbnQ/KG49ZyxvPW4uZG9jdW1lbnRFbGVtZW50LHA9IWYobiksKGU9bi5kZWZhdWx0VmlldykmJmUudG9wIT09ZSYmKGUuYWRkRXZlbnRMaXN0ZW5lcj9lLmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIixkYSwhMSk6ZS5hdHRhY2hFdmVudCYmZS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZGEpKSxjLmF0dHJpYnV0ZXM9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuY2xhc3NOYW1lPVwiaVwiLCFhLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKX0pLGMuZ2V0RWxlbWVudHNCeVRhZ05hbWU9aWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuYXBwZW5kQ2hpbGQobi5jcmVhdGVDb21tZW50KFwiXCIpKSwhYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RofSksYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lPVoudGVzdChuLmdldEVsZW1lbnRzQnlDbGFzc05hbWUpLGMuZ2V0QnlJZD1pYShmdW5jdGlvbihhKXtyZXR1cm4gby5hcHBlbmRDaGlsZChhKS5pZD11LCFuLmdldEVsZW1lbnRzQnlOYW1lfHwhbi5nZXRFbGVtZW50c0J5TmFtZSh1KS5sZW5ndGh9KSxjLmdldEJ5SWQ/KGQuZmluZC5JRD1mdW5jdGlvbihhLGIpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBiLmdldEVsZW1lbnRCeUlkJiZwKXt2YXIgYz1iLmdldEVsZW1lbnRCeUlkKGEpO3JldHVybiBjP1tjXTpbXX19LGQuZmlsdGVyLklEPWZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSk7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhLmdldEF0dHJpYnV0ZShcImlkXCIpPT09Yn19KTooZGVsZXRlIGQuZmluZC5JRCxkLmZpbHRlci5JRD1mdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2UoYmEsY2EpO3JldHVybiBmdW5jdGlvbihhKXt2YXIgYz1cInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGVOb2RlJiZhLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtyZXR1cm4gYyYmYy52YWx1ZT09PWJ9fSksZC5maW5kLlRBRz1jLmdldEVsZW1lbnRzQnlUYWdOYW1lP2Z1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeVRhZ05hbWU/Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTpjLnFzYT9iLnF1ZXJ5U2VsZWN0b3JBbGwoYSk6dm9pZCAwfTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT0wLGY9Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShhKTtpZihcIipcIj09PWEpe3doaWxlKGM9ZltlKytdKTE9PT1jLm5vZGVUeXBlJiZkLnB1c2goYyk7cmV0dXJuIGR9cmV0dXJuIGZ9LGQuZmluZC5DTEFTUz1jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUmJmZ1bmN0aW9uKGEsYil7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSYmcD9iLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYSk6dm9pZCAwfSxyPVtdLHE9W10sKGMucXNhPVoudGVzdChuLnF1ZXJ5U2VsZWN0b3JBbGwpKSYmKGlhKGZ1bmN0aW9uKGEpe28uYXBwZW5kQ2hpbGQoYSkuaW5uZXJIVE1MPVwiPGEgaWQ9J1wiK3UrXCInPjwvYT48c2VsZWN0IGlkPSdcIit1K1wiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCIsYS5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoJiZxLnB1c2goXCJbKl4kXT1cIitMK1wiKig/OicnfFxcXCJcXFwiKVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbc2VsZWN0ZWRdXCIpLmxlbmd0aHx8cS5wdXNoKFwiXFxcXFtcIitMK1wiKig/OnZhbHVlfFwiK0srXCIpXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltpZH49XCIrdStcIi1dXCIpLmxlbmd0aHx8cS5wdXNoKFwifj1cIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiOmNoZWNrZWRcIikubGVuZ3RofHxxLnB1c2goXCI6Y2hlY2tlZFwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiK3UrXCIrKlwiKS5sZW5ndGh8fHEucHVzaChcIi4jLitbK35dXCIpfSksaWEoZnVuY3Rpb24oYSl7dmFyIGI9bi5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJoaWRkZW5cIiksYS5hcHBlbmRDaGlsZChiKS5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJEXCIpLGEucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCYmcS5wdXNoKFwibmFtZVwiK0wrXCIqWypeJHwhfl0/PVwiKSxhLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGh8fHEucHVzaChcIjplbmFibGVkXCIsXCI6ZGlzYWJsZWRcIiksYS5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKSxxLnB1c2goXCIsLio6XCIpfSkpLChjLm1hdGNoZXNTZWxlY3Rvcj1aLnRlc3Qocz1vLm1hdGNoZXN8fG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHxvLm1vek1hdGNoZXNTZWxlY3Rvcnx8by5vTWF0Y2hlc1NlbGVjdG9yfHxvLm1zTWF0Y2hlc1NlbGVjdG9yKSkmJmlhKGZ1bmN0aW9uKGEpe2MuZGlzY29ubmVjdGVkTWF0Y2g9cy5jYWxsKGEsXCJkaXZcIikscy5jYWxsKGEsXCJbcyE9JyddOnhcIiksci5wdXNoKFwiIT1cIixPKX0pLHE9cS5sZW5ndGgmJm5ldyBSZWdFeHAocS5qb2luKFwifFwiKSkscj1yLmxlbmd0aCYmbmV3IFJlZ0V4cChyLmpvaW4oXCJ8XCIpKSxiPVoudGVzdChvLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKSx0PWJ8fFoudGVzdChvLmNvbnRhaW5zKT9mdW5jdGlvbihhLGIpe3ZhciBjPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1kfHwhKCFkfHwxIT09ZC5ub2RlVHlwZXx8IShjLmNvbnRhaW5zP2MuY29udGFpbnMoZCk6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmMTYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihkKSkpfTpmdW5jdGlvbihhLGIpe2lmKGIpd2hpbGUoYj1iLnBhcmVudE5vZGUpaWYoYj09PWEpcmV0dXJuITA7cmV0dXJuITF9LEI9Yj9mdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGQ9IWEuY29tcGFyZURvY3VtZW50UG9zaXRpb24tIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247cmV0dXJuIGQ/ZDooZD0oYS5vd25lckRvY3VtZW50fHxhKT09PShiLm93bmVyRG9jdW1lbnR8fGIpP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik6MSwxJmR8fCFjLnNvcnREZXRhY2hlZCYmYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihhKT09PWQ/YT09PW58fGEub3duZXJEb2N1bWVudD09PXYmJnQodixhKT8tMTpiPT09bnx8Yi5vd25lckRvY3VtZW50PT09diYmdCh2LGIpPzE6az9KKGssYSktSihrLGIpOjA6NCZkPy0xOjEpfTpmdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiBsPSEwLDA7dmFyIGMsZD0wLGU9YS5wYXJlbnROb2RlLGY9Yi5wYXJlbnROb2RlLGc9W2FdLGg9W2JdO2lmKCFlfHwhZilyZXR1cm4gYT09PW4/LTE6Yj09PW4/MTplPy0xOmY/MTprP0ooayxhKS1KKGssYik6MDtpZihlPT09ZilyZXR1cm4ga2EoYSxiKTtjPWE7d2hpbGUoYz1jLnBhcmVudE5vZGUpZy51bnNoaWZ0KGMpO2M9Yjt3aGlsZShjPWMucGFyZW50Tm9kZSloLnVuc2hpZnQoYyk7d2hpbGUoZ1tkXT09PWhbZF0pZCsrO3JldHVybiBkP2thKGdbZF0saFtkXSk6Z1tkXT09PXY/LTE6aFtkXT09PXY/MTowfSxuKTpufSxmYS5tYXRjaGVzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGZhKGEsbnVsbCxudWxsLGIpfSxmYS5tYXRjaGVzU2VsZWN0b3I9ZnVuY3Rpb24oYSxiKXtpZigoYS5vd25lckRvY3VtZW50fHxhKSE9PW4mJm0oYSksYj1iLnJlcGxhY2UoVCxcIj0nJDEnXVwiKSxjLm1hdGNoZXNTZWxlY3RvciYmcCYmIUFbYitcIiBcIl0mJighcnx8IXIudGVzdChiKSkmJighcXx8IXEudGVzdChiKSkpdHJ5e3ZhciBkPXMuY2FsbChhLGIpO2lmKGR8fGMuZGlzY29ubmVjdGVkTWF0Y2h8fGEuZG9jdW1lbnQmJjExIT09YS5kb2N1bWVudC5ub2RlVHlwZSlyZXR1cm4gZH1jYXRjaChlKXt9cmV0dXJuIGZhKGIsbixudWxsLFthXSkubGVuZ3RoPjB9LGZhLmNvbnRhaW5zPWZ1bmN0aW9uKGEsYil7cmV0dXJuKGEub3duZXJEb2N1bWVudHx8YSkhPT1uJiZtKGEpLHQoYSxiKX0sZmEuYXR0cj1mdW5jdGlvbihhLGIpeyhhLm93bmVyRG9jdW1lbnR8fGEpIT09biYmbShhKTt2YXIgZT1kLmF0dHJIYW5kbGVbYi50b0xvd2VyQ2FzZSgpXSxmPWUmJkQuY2FsbChkLmF0dHJIYW5kbGUsYi50b0xvd2VyQ2FzZSgpKT9lKGEsYiwhcCk6dm9pZCAwO3JldHVybiB2b2lkIDAhPT1mP2Y6Yy5hdHRyaWJ1dGVzfHwhcD9hLmdldEF0dHJpYnV0ZShiKTooZj1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZmLnNwZWNpZmllZD9mLnZhbHVlOm51bGx9LGZhLmVycm9yPWZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciwgdW5yZWNvZ25pemVkIGV4cHJlc3Npb246IFwiK2EpfSxmYS51bmlxdWVTb3J0PWZ1bmN0aW9uKGEpe3ZhciBiLGQ9W10sZT0wLGY9MDtpZihsPSFjLmRldGVjdER1cGxpY2F0ZXMsaz0hYy5zb3J0U3RhYmxlJiZhLnNsaWNlKDApLGEuc29ydChCKSxsKXt3aGlsZShiPWFbZisrXSliPT09YVtmXSYmKGU9ZC5wdXNoKGYpKTt3aGlsZShlLS0pYS5zcGxpY2UoZFtlXSwxKX1yZXR1cm4gaz1udWxsLGF9LGU9ZmEuZ2V0VGV4dD1mdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGY9YS5ub2RlVHlwZTtpZihmKXtpZigxPT09Znx8OT09PWZ8fDExPT09Zil7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEudGV4dENvbnRlbnQpcmV0dXJuIGEudGV4dENvbnRlbnQ7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWMrPWUoYSl9ZWxzZSBpZigzPT09Znx8ND09PWYpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9ZShiKTtyZXR1cm4gY30sZD1mYS5zZWxlY3RvcnM9e2NhY2hlTGVuZ3RoOjUwLGNyZWF0ZVBzZXVkbzpoYSxtYXRjaDpXLGF0dHJIYW5kbGU6e30sZmluZDp7fSxyZWxhdGl2ZTp7XCI+XCI6e2RpcjpcInBhcmVudE5vZGVcIixmaXJzdDohMH0sXCIgXCI6e2RpcjpcInBhcmVudE5vZGVcIn0sXCIrXCI6e2RpcjpcInByZXZpb3VzU2libGluZ1wiLGZpcnN0OiEwfSxcIn5cIjp7ZGlyOlwicHJldmlvdXNTaWJsaW5nXCJ9fSxwcmVGaWx0ZXI6e0FUVFI6ZnVuY3Rpb24oYSl7cmV0dXJuIGFbMV09YVsxXS5yZXBsYWNlKGJhLGNhKSxhWzNdPShhWzNdfHxhWzRdfHxhWzVdfHxcIlwiKS5yZXBsYWNlKGJhLGNhKSxcIn49XCI9PT1hWzJdJiYoYVszXT1cIiBcIithWzNdK1wiIFwiKSxhLnNsaWNlKDAsNCl9LENISUxEOmZ1bmN0aW9uKGEpe3JldHVybiBhWzFdPWFbMV0udG9Mb3dlckNhc2UoKSxcIm50aFwiPT09YVsxXS5zbGljZSgwLDMpPyhhWzNdfHxmYS5lcnJvcihhWzBdKSxhWzRdPSsoYVs0XT9hWzVdKyhhWzZdfHwxKToyKihcImV2ZW5cIj09PWFbM118fFwib2RkXCI9PT1hWzNdKSksYVs1XT0rKGFbN10rYVs4XXx8XCJvZGRcIj09PWFbM10pKTphWzNdJiZmYS5lcnJvcihhWzBdKSxhfSxQU0VVRE86ZnVuY3Rpb24oYSl7dmFyIGIsYz0hYVs2XSYmYVsyXTtyZXR1cm4gVy5DSElMRC50ZXN0KGFbMF0pP251bGw6KGFbM10/YVsyXT1hWzRdfHxhWzVdfHxcIlwiOmMmJlUudGVzdChjKSYmKGI9ZyhjLCEwKSkmJihiPWMuaW5kZXhPZihcIilcIixjLmxlbmd0aC1iKS1jLmxlbmd0aCkmJihhWzBdPWFbMF0uc2xpY2UoMCxiKSxhWzJdPWMuc2xpY2UoMCxiKSksYS5zbGljZSgwLDMpKX19LGZpbHRlcjp7VEFHOmZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShiYSxjYSkudG9Mb3dlckNhc2UoKTtyZXR1cm5cIipcIj09PWE/ZnVuY3Rpb24oKXtyZXR1cm4hMH06ZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWJ9fSxDTEFTUzpmdW5jdGlvbihhKXt2YXIgYj15W2ErXCIgXCJdO3JldHVybiBifHwoYj1uZXcgUmVnRXhwKFwiKF58XCIrTCtcIilcIithK1wiKFwiK0wrXCJ8JClcIikpJiZ5KGEsZnVuY3Rpb24oYSl7cmV0dXJuIGIudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYS5jbGFzc05hbWUmJmEuY2xhc3NOYW1lfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgYS5nZXRBdHRyaWJ1dGUmJmEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpfSl9LEFUVFI6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihkKXt2YXIgZT1mYS5hdHRyKGQsYSk7cmV0dXJuIG51bGw9PWU/XCIhPVwiPT09YjpiPyhlKz1cIlwiLFwiPVwiPT09Yj9lPT09YzpcIiE9XCI9PT1iP2UhPT1jOlwiXj1cIj09PWI/YyYmMD09PWUuaW5kZXhPZihjKTpcIio9XCI9PT1iP2MmJmUuaW5kZXhPZihjKT4tMTpcIiQ9XCI9PT1iP2MmJmUuc2xpY2UoLWMubGVuZ3RoKT09PWM6XCJ+PVwiPT09Yj8oXCIgXCIrZS5yZXBsYWNlKFAsXCIgXCIpK1wiIFwiKS5pbmRleE9mKGMpPi0xOlwifD1cIj09PWI/ZT09PWN8fGUuc2xpY2UoMCxjLmxlbmd0aCsxKT09PWMrXCItXCI6ITEpOiEwfX0sQ0hJTEQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZj1cIm50aFwiIT09YS5zbGljZSgwLDMpLGc9XCJsYXN0XCIhPT1hLnNsaWNlKC00KSxoPVwib2YtdHlwZVwiPT09YjtyZXR1cm4gMT09PWQmJjA9PT1lP2Z1bmN0aW9uKGEpe3JldHVybiEhYS5wYXJlbnROb2RlfTpmdW5jdGlvbihiLGMsaSl7dmFyIGosayxsLG0sbixvLHA9ZiE9PWc/XCJuZXh0U2libGluZ1wiOlwicHJldmlvdXNTaWJsaW5nXCIscT1iLnBhcmVudE5vZGUscj1oJiZiLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkscz0haSYmIWgsdD0hMTtpZihxKXtpZihmKXt3aGlsZShwKXttPWI7d2hpbGUobT1tW3BdKWlmKGg/bS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09cjoxPT09bS5ub2RlVHlwZSlyZXR1cm4hMTtvPXA9XCJvbmx5XCI9PT1hJiYhbyYmXCJuZXh0U2libGluZ1wifXJldHVybiEwfWlmKG89W2c/cS5maXJzdENoaWxkOnEubGFzdENoaWxkXSxnJiZzKXttPXEsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biYmalsyXSxtPW4mJnEuY2hpbGROb2Rlc1tuXTt3aGlsZShtPSsrbiYmbSYmbVtwXXx8KHQ9bj0wKXx8by5wb3AoKSlpZigxPT09bS5ub2RlVHlwZSYmKyt0JiZtPT09Yil7a1thXT1bdyxuLHRdO2JyZWFrfX1lbHNlIGlmKHMmJihtPWIsbD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksaj1rW2FdfHxbXSxuPWpbMF09PT13JiZqWzFdLHQ9biksdD09PSExKXdoaWxlKG09KytuJiZtJiZtW3BdfHwodD1uPTApfHxvLnBvcCgpKWlmKChoP20ubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PXI6MT09PW0ubm9kZVR5cGUpJiYrK3QmJihzJiYobD1tW3VdfHwobVt1XT17fSksaz1sW20udW5pcXVlSURdfHwobFttLnVuaXF1ZUlEXT17fSksa1thXT1bdyx0XSksbT09PWIpKWJyZWFrO3JldHVybiB0LT1lLHQ9PT1kfHx0JWQ9PT0wJiZ0L2Q+PTB9fX0sUFNFVURPOmZ1bmN0aW9uKGEsYil7dmFyIGMsZT1kLnBzZXVkb3NbYV18fGQuc2V0RmlsdGVyc1thLnRvTG93ZXJDYXNlKCldfHxmYS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIrYSk7cmV0dXJuIGVbdV0/ZShiKTplLmxlbmd0aD4xPyhjPVthLGEsXCJcIixiXSxkLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoYS50b0xvd2VyQ2FzZSgpKT9oYShmdW5jdGlvbihhLGMpe3ZhciBkLGY9ZShhLGIpLGc9Zi5sZW5ndGg7d2hpbGUoZy0tKWQ9SihhLGZbZ10pLGFbZF09IShjW2RdPWZbZ10pfSk6ZnVuY3Rpb24oYSl7cmV0dXJuIGUoYSwwLGMpfSk6ZX19LHBzZXVkb3M6e25vdDpoYShmdW5jdGlvbihhKXt2YXIgYj1bXSxjPVtdLGQ9aChhLnJlcGxhY2UoUSxcIiQxXCIpKTtyZXR1cm4gZFt1XT9oYShmdW5jdGlvbihhLGIsYyxlKXt2YXIgZixnPWQoYSxudWxsLGUsW10pLGg9YS5sZW5ndGg7d2hpbGUoaC0tKShmPWdbaF0pJiYoYVtoXT0hKGJbaF09ZikpfSk6ZnVuY3Rpb24oYSxlLGYpe3JldHVybiBiWzBdPWEsZChiLG51bGwsZixjKSxiWzBdPW51bGwsIWMucG9wKCl9fSksaGFzOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gZmEoYSxiKS5sZW5ndGg+MH19KSxjb250YWluczpoYShmdW5jdGlvbihhKXtyZXR1cm4gYT1hLnJlcGxhY2UoYmEsY2EpLGZ1bmN0aW9uKGIpe3JldHVybihiLnRleHRDb250ZW50fHxiLmlubmVyVGV4dHx8ZShiKSkuaW5kZXhPZihhKT4tMX19KSxsYW5nOmhhKGZ1bmN0aW9uKGEpe3JldHVybiBWLnRlc3QoYXx8XCJcIil8fGZhLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIrYSksYT1hLnJlcGxhY2UoYmEsY2EpLnRvTG93ZXJDYXNlKCksZnVuY3Rpb24oYil7dmFyIGM7ZG8gaWYoYz1wP2IubGFuZzpiLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpfHxiLmdldEF0dHJpYnV0ZShcImxhbmdcIikpcmV0dXJuIGM9Yy50b0xvd2VyQ2FzZSgpLGM9PT1hfHwwPT09Yy5pbmRleE9mKGErXCItXCIpO3doaWxlKChiPWIucGFyZW50Tm9kZSkmJjE9PT1iLm5vZGVUeXBlKTtyZXR1cm4hMX19KSx0YXJnZXQ6ZnVuY3Rpb24oYil7dmFyIGM9YS5sb2NhdGlvbiYmYS5sb2NhdGlvbi5oYXNoO3JldHVybiBjJiZjLnNsaWNlKDEpPT09Yi5pZH0scm9vdDpmdW5jdGlvbihhKXtyZXR1cm4gYT09PW99LGZvY3VzOmZ1bmN0aW9uKGEpe3JldHVybiBhPT09bi5hY3RpdmVFbGVtZW50JiYoIW4uaGFzRm9jdXN8fG4uaGFzRm9jdXMoKSkmJiEhKGEudHlwZXx8YS5ocmVmfHx+YS50YWJJbmRleCl9LGVuYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMX0sZGlzYWJsZWQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuZGlzYWJsZWQ9PT0hMH0sY2hlY2tlZDpmdW5jdGlvbihhKXt2YXIgYj1hLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09YiYmISFhLmNoZWNrZWR8fFwib3B0aW9uXCI9PT1iJiYhIWEuc2VsZWN0ZWR9LHNlbGVjdGVkOmZ1bmN0aW9uKGEpe3JldHVybiBhLnBhcmVudE5vZGUmJmEucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LGEuc2VsZWN0ZWQ9PT0hMH0sZW1wdHk6ZnVuY3Rpb24oYSl7Zm9yKGE9YS5maXJzdENoaWxkO2E7YT1hLm5leHRTaWJsaW5nKWlmKGEubm9kZVR5cGU8NilyZXR1cm4hMTtyZXR1cm4hMH0scGFyZW50OmZ1bmN0aW9uKGEpe3JldHVybiFkLnBzZXVkb3MuZW1wdHkoYSl9LGhlYWRlcjpmdW5jdGlvbihhKXtyZXR1cm4gWS50ZXN0KGEubm9kZU5hbWUpfSxpbnB1dDpmdW5jdGlvbihhKXtyZXR1cm4gWC50ZXN0KGEubm9kZU5hbWUpfSxidXR0b246ZnVuY3Rpb24oYSl7dmFyIGI9YS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVyblwiaW5wdXRcIj09PWImJlwiYnV0dG9uXCI9PT1hLnR5cGV8fFwiYnV0dG9uXCI9PT1ifSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiO3JldHVyblwiaW5wdXRcIj09PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKSYmXCJ0ZXh0XCI9PT1hLnR5cGUmJihudWxsPT0oYj1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpfHxcInRleHRcIj09PWIudG9Mb3dlckNhc2UoKSl9LGZpcnN0Om5hKGZ1bmN0aW9uKCl7cmV0dXJuWzBdfSksbGFzdDpuYShmdW5jdGlvbihhLGIpe3JldHVybltiLTFdfSksZXE6bmEoZnVuY3Rpb24oYSxiLGMpe3JldHVyblswPmM/YytiOmNdfSksZXZlbjpuYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLG9kZDpuYShmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0xO2I+YztjKz0yKWEucHVzaChjKTtyZXR1cm4gYX0pLGx0Om5hKGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MD5jP2MrYjpjOy0tZD49MDspYS5wdXNoKGQpO3JldHVybiBhfSksZ3Q6bmEoZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZD0wPmM/YytiOmM7KytkPGI7KWEucHVzaChkKTtyZXR1cm4gYX0pfX0sZC5wc2V1ZG9zLm50aD1kLnBzZXVkb3MuZXE7Zm9yKGIgaW57cmFkaW86ITAsY2hlY2tib3g6ITAsZmlsZTohMCxwYXNzd29yZDohMCxpbWFnZTohMH0pZC5wc2V1ZG9zW2JdPWxhKGIpO2ZvcihiIGlue3N1Ym1pdDohMCxyZXNldDohMH0pZC5wc2V1ZG9zW2JdPW1hKGIpO2Z1bmN0aW9uIHBhKCl7fXBhLnByb3RvdHlwZT1kLmZpbHRlcnM9ZC5wc2V1ZG9zLGQuc2V0RmlsdGVycz1uZXcgcGEsZz1mYS50b2tlbml6ZT1mdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnLGgsaSxqLGs9elthK1wiIFwiXTtpZihrKXJldHVybiBiPzA6ay5zbGljZSgwKTtoPWEsaT1bXSxqPWQucHJlRmlsdGVyO3doaWxlKGgpe2MmJiEoZT1SLmV4ZWMoaCkpfHwoZSYmKGg9aC5zbGljZShlWzBdLmxlbmd0aCl8fGgpLGkucHVzaChmPVtdKSksYz0hMSwoZT1TLmV4ZWMoaCkpJiYoYz1lLnNoaWZ0KCksZi5wdXNoKHt2YWx1ZTpjLHR5cGU6ZVswXS5yZXBsYWNlKFEsXCIgXCIpfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7Zm9yKGcgaW4gZC5maWx0ZXIpIShlPVdbZ10uZXhlYyhoKSl8fGpbZ10mJiEoZT1qW2ddKGUpKXx8KGM9ZS5zaGlmdCgpLGYucHVzaCh7dmFsdWU6Yyx0eXBlOmcsbWF0Y2hlczplfSksaD1oLnNsaWNlKGMubGVuZ3RoKSk7aWYoIWMpYnJlYWt9cmV0dXJuIGI/aC5sZW5ndGg6aD9mYS5lcnJvcihhKTp6KGEsaSkuc2xpY2UoMCl9O2Z1bmN0aW9uIHFhKGEpe2Zvcih2YXIgYj0wLGM9YS5sZW5ndGgsZD1cIlwiO2M+YjtiKyspZCs9YVtiXS52YWx1ZTtyZXR1cm4gZH1mdW5jdGlvbiByYShhLGIsYyl7dmFyIGQ9Yi5kaXIsZT1jJiZcInBhcmVudE5vZGVcIj09PWQsZj14Kys7cmV0dXJuIGIuZmlyc3Q/ZnVuY3Rpb24oYixjLGYpe3doaWxlKGI9YltkXSlpZigxPT09Yi5ub2RlVHlwZXx8ZSlyZXR1cm4gYShiLGMsZil9OmZ1bmN0aW9uKGIsYyxnKXt2YXIgaCxpLGosaz1bdyxmXTtpZihnKXt3aGlsZShiPWJbZF0paWYoKDE9PT1iLm5vZGVUeXBlfHxlKSYmYShiLGMsZykpcmV0dXJuITB9ZWxzZSB3aGlsZShiPWJbZF0paWYoMT09PWIubm9kZVR5cGV8fGUpe2lmKGo9Ylt1XXx8KGJbdV09e30pLGk9altiLnVuaXF1ZUlEXXx8KGpbYi51bmlxdWVJRF09e30pLChoPWlbZF0pJiZoWzBdPT09dyYmaFsxXT09PWYpcmV0dXJuIGtbMl09aFsyXTtpZihpW2RdPWssa1syXT1hKGIsYyxnKSlyZXR1cm4hMH19fWZ1bmN0aW9uIHNhKGEpe3JldHVybiBhLmxlbmd0aD4xP2Z1bmN0aW9uKGIsYyxkKXt2YXIgZT1hLmxlbmd0aDt3aGlsZShlLS0paWYoIWFbZV0oYixjLGQpKXJldHVybiExO3JldHVybiEwfTphWzBdfWZ1bmN0aW9uIHRhKGEsYixjKXtmb3IodmFyIGQ9MCxlPWIubGVuZ3RoO2U+ZDtkKyspZmEoYSxiW2RdLGMpO3JldHVybiBjfWZ1bmN0aW9uIHVhKGEsYixjLGQsZSl7Zm9yKHZhciBmLGc9W10saD0wLGk9YS5sZW5ndGgsaj1udWxsIT1iO2k+aDtoKyspKGY9YVtoXSkmJihjJiYhYyhmLGQsZSl8fChnLnB1c2goZiksaiYmYi5wdXNoKGgpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gdmEoYSxiLGMsZCxlLGYpe3JldHVybiBkJiYhZFt1XSYmKGQ9dmEoZCkpLGUmJiFlW3VdJiYoZT12YShlLGYpKSxoYShmdW5jdGlvbihmLGcsaCxpKXt2YXIgaixrLGwsbT1bXSxuPVtdLG89Zy5sZW5ndGgscD1mfHx0YShifHxcIipcIixoLm5vZGVUeXBlP1toXTpoLFtdKSxxPSFhfHwhZiYmYj9wOnVhKHAsbSxhLGgsaSkscj1jP2V8fChmP2E6b3x8ZCk/W106ZzpxO2lmKGMmJmMocSxyLGgsaSksZCl7aj11YShyLG4pLGQoaixbXSxoLGkpLGs9ai5sZW5ndGg7d2hpbGUoay0tKShsPWpba10pJiYocltuW2tdXT0hKHFbbltrXV09bCkpfWlmKGYpe2lmKGV8fGEpe2lmKGUpe2o9W10saz1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJmoucHVzaChxW2tdPWwpO2UobnVsbCxyPVtdLGosaSl9az1yLmxlbmd0aDt3aGlsZShrLS0pKGw9cltrXSkmJihqPWU/SihmLGwpOm1ba10pPi0xJiYoZltqXT0hKGdbal09bCkpfX1lbHNlIHI9dWEocj09PWc/ci5zcGxpY2UobyxyLmxlbmd0aCk6ciksZT9lKG51bGwsZyxyLGkpOkguYXBwbHkoZyxyKX0pfWZ1bmN0aW9uIHdhKGEpe2Zvcih2YXIgYixjLGUsZj1hLmxlbmd0aCxnPWQucmVsYXRpdmVbYVswXS50eXBlXSxoPWd8fGQucmVsYXRpdmVbXCIgXCJdLGk9Zz8xOjAsaz1yYShmdW5jdGlvbihhKXtyZXR1cm4gYT09PWJ9LGgsITApLGw9cmEoZnVuY3Rpb24oYSl7cmV0dXJuIEooYixhKT4tMX0saCwhMCksbT1bZnVuY3Rpb24oYSxjLGQpe3ZhciBlPSFnJiYoZHx8YyE9PWopfHwoKGI9Yykubm9kZVR5cGU/ayhhLGMsZCk6bChhLGMsZCkpO3JldHVybiBiPW51bGwsZX1dO2Y+aTtpKyspaWYoYz1kLnJlbGF0aXZlW2FbaV0udHlwZV0pbT1bcmEoc2EobSksYyldO2Vsc2V7aWYoYz1kLmZpbHRlclthW2ldLnR5cGVdLmFwcGx5KG51bGwsYVtpXS5tYXRjaGVzKSxjW3VdKXtmb3IoZT0rK2k7Zj5lO2UrKylpZihkLnJlbGF0aXZlW2FbZV0udHlwZV0pYnJlYWs7cmV0dXJuIHZhKGk+MSYmc2EobSksaT4xJiZxYShhLnNsaWNlKDAsaS0xKS5jb25jYXQoe3ZhbHVlOlwiIFwiPT09YVtpLTJdLnR5cGU/XCIqXCI6XCJcIn0pKS5yZXBsYWNlKFEsXCIkMVwiKSxjLGU+aSYmd2EoYS5zbGljZShpLGUpKSxmPmUmJndhKGE9YS5zbGljZShlKSksZj5lJiZxYShhKSl9bS5wdXNoKGMpfXJldHVybiBzYShtKX1mdW5jdGlvbiB4YShhLGIpe3ZhciBjPWIubGVuZ3RoPjAsZT1hLmxlbmd0aD4wLGY9ZnVuY3Rpb24oZixnLGgsaSxrKXt2YXIgbCxvLHEscj0wLHM9XCIwXCIsdD1mJiZbXSx1PVtdLHY9aix4PWZ8fGUmJmQuZmluZC5UQUcoXCIqXCIsaykseT13Kz1udWxsPT12PzE6TWF0aC5yYW5kb20oKXx8LjEsej14Lmxlbmd0aDtmb3IoayYmKGo9Zz09PW58fGd8fGspO3MhPT16JiZudWxsIT0obD14W3NdKTtzKyspe2lmKGUmJmwpe289MCxnfHxsLm93bmVyRG9jdW1lbnQ9PT1ufHwobShsKSxoPSFwKTt3aGlsZShxPWFbbysrXSlpZihxKGwsZ3x8bixoKSl7aS5wdXNoKGwpO2JyZWFrfWsmJih3PXkpfWMmJigobD0hcSYmbCkmJnItLSxmJiZ0LnB1c2gobCkpfWlmKHIrPXMsYyYmcyE9PXIpe289MDt3aGlsZShxPWJbbysrXSlxKHQsdSxnLGgpO2lmKGYpe2lmKHI+MCl3aGlsZShzLS0pdFtzXXx8dVtzXXx8KHVbc109Ri5jYWxsKGkpKTt1PXVhKHUpfUguYXBwbHkoaSx1KSxrJiYhZiYmdS5sZW5ndGg+MCYmcitiLmxlbmd0aD4xJiZmYS51bmlxdWVTb3J0KGkpfXJldHVybiBrJiYodz15LGo9diksdH07cmV0dXJuIGM/aGEoZik6Zn1yZXR1cm4gaD1mYS5jb21waWxlPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPVtdLGY9QVthK1wiIFwiXTtpZighZil7Ynx8KGI9ZyhhKSksYz1iLmxlbmd0aDt3aGlsZShjLS0pZj13YShiW2NdKSxmW3VdP2QucHVzaChmKTplLnB1c2goZik7Zj1BKGEseGEoZSxkKSksZi5zZWxlY3Rvcj1hfXJldHVybiBmfSxpPWZhLnNlbGVjdD1mdW5jdGlvbihhLGIsZSxmKXt2YXIgaSxqLGssbCxtLG49XCJmdW5jdGlvblwiPT10eXBlb2YgYSYmYSxvPSFmJiZnKGE9bi5zZWxlY3Rvcnx8YSk7aWYoZT1lfHxbXSwxPT09by5sZW5ndGgpe2lmKGo9b1swXT1vWzBdLnNsaWNlKDApLGoubGVuZ3RoPjImJlwiSURcIj09PShrPWpbMF0pLnR5cGUmJmMuZ2V0QnlJZCYmOT09PWIubm9kZVR5cGUmJnAmJmQucmVsYXRpdmVbalsxXS50eXBlXSl7aWYoYj0oZC5maW5kLklEKGsubWF0Y2hlc1swXS5yZXBsYWNlKGJhLGNhKSxiKXx8W10pWzBdLCFiKXJldHVybiBlO24mJihiPWIucGFyZW50Tm9kZSksYT1hLnNsaWNlKGouc2hpZnQoKS52YWx1ZS5sZW5ndGgpfWk9Vy5uZWVkc0NvbnRleHQudGVzdChhKT8wOmoubGVuZ3RoO3doaWxlKGktLSl7aWYoaz1qW2ldLGQucmVsYXRpdmVbbD1rLnR5cGVdKWJyZWFrO2lmKChtPWQuZmluZFtsXSkmJihmPW0oay5tYXRjaGVzWzBdLnJlcGxhY2UoYmEsY2EpLF8udGVzdChqWzBdLnR5cGUpJiZvYShiLnBhcmVudE5vZGUpfHxiKSkpe2lmKGouc3BsaWNlKGksMSksYT1mLmxlbmd0aCYmcWEoaiksIWEpcmV0dXJuIEguYXBwbHkoZSxmKSxlO2JyZWFrfX19cmV0dXJuKG58fGgoYSxvKSkoZixiLCFwLGUsIWJ8fF8udGVzdChhKSYmb2EoYi5wYXJlbnROb2RlKXx8YiksZX0sYy5zb3J0U3RhYmxlPXUuc3BsaXQoXCJcIikuc29ydChCKS5qb2luKFwiXCIpPT09dSxjLmRldGVjdER1cGxpY2F0ZXM9ISFsLG0oKSxjLnNvcnREZXRhY2hlZD1pYShmdW5jdGlvbihhKXtyZXR1cm4gMSZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKG4uY3JlYXRlRWxlbWVudChcImRpdlwiKSl9KSxpYShmdW5jdGlvbihhKXtyZXR1cm4gYS5pbm5lckhUTUw9XCI8YSBocmVmPScjJz48L2E+XCIsXCIjXCI9PT1hLmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0pfHxqYShcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGM/dm9pZCAwOmEuZ2V0QXR0cmlidXRlKGIsXCJ0eXBlXCI9PT1iLnRvTG93ZXJDYXNlKCk/MToyKX0pLGMuYXR0cmlidXRlcyYmaWEoZnVuY3Rpb24oYSl7cmV0dXJuIGEuaW5uZXJIVE1MPVwiPGlucHV0Lz5cIixhLmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxcIlwiPT09YS5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpfSl8fGphKFwidmFsdWVcIixmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGN8fFwiaW5wdXRcIiE9PWEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT92b2lkIDA6YS5kZWZhdWx0VmFsdWV9KSxpYShmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YS5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKX0pfHxqYShLLGZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYz92b2lkIDA6YVtiXT09PSEwP2IudG9Mb3dlckNhc2UoKTooZD1hLmdldEF0dHJpYnV0ZU5vZGUoYikpJiZkLnNwZWNpZmllZD9kLnZhbHVlOm51bGx9KSxmYX0oYSk7bi5maW5kPXQsbi5leHByPXQuc2VsZWN0b3JzLG4uZXhwcltcIjpcIl09bi5leHByLnBzZXVkb3Msbi51bmlxdWVTb3J0PW4udW5pcXVlPXQudW5pcXVlU29ydCxuLnRleHQ9dC5nZXRUZXh0LG4uaXNYTUxEb2M9dC5pc1hNTCxuLmNvbnRhaW5zPXQuY29udGFpbnM7dmFyIHU9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJm4oYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSx2PWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfSx3PW4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQseD0vXjwoW1xcdy1dKylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8seT0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24geihhLGIsYyl7aWYobi5pc0Z1bmN0aW9uKGIpKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTtpZihiLm5vZGVUeXBlKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKHkudGVzdChiKSlyZXR1cm4gbi5maWx0ZXIoYixhLGMpO2I9bi5maWx0ZXIoYixhKX1yZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIG4uaW5BcnJheShhLGIpPi0xIT09Y30pfW4uZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9uLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOm4uZmluZC5tYXRjaGVzKGEsbi5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxuLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjPVtdLGQ9dGhpcyxlPWQubGVuZ3RoO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhuKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7ZT5iO2IrKylpZihuLmNvbnRhaW5zKGRbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGI9MDtlPmI7YisrKW4uZmluZChhLGRbYl0sYyk7cmV0dXJuIGM9dGhpcy5wdXNoU3RhY2soZT4xP24udW5pcXVlKGMpOmMpLGMuc2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiK2E6YSxjfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHoodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKHoodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIXoodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmdy50ZXN0KGEpP24oYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgQSxCPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEM9bi5mbi5pbml0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZSxmO2lmKCFhKXJldHVybiB0aGlzO2lmKGM9Y3x8QSxcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoZT1cIjxcIj09PWEuY2hhckF0KDApJiZcIj5cIj09PWEuY2hhckF0KGEubGVuZ3RoLTEpJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkIuZXhlYyhhKSwhZXx8IWVbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxjKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihlWzFdKXtpZihiPWIgaW5zdGFuY2VvZiBuP2JbMF06YixuLm1lcmdlKHRoaXMsbi5wYXJzZUhUTUwoZVsxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpkLCEwKSkseC50ZXN0KGVbMV0pJiZuLmlzUGxhaW5PYmplY3QoYikpZm9yKGUgaW4gYiluLmlzRnVuY3Rpb24odGhpc1tlXSk/dGhpc1tlXShiW2VdKTp0aGlzLmF0dHIoZSxiW2VdKTtyZXR1cm4gdGhpc31pZihmPWQuZ2V0RWxlbWVudEJ5SWQoZVsyXSksZiYmZi5wYXJlbnROb2RlKXtpZihmLmlkIT09ZVsyXSlyZXR1cm4gQS5maW5kKGEpO3RoaXMubGVuZ3RoPTEsdGhpc1swXT1mfXJldHVybiB0aGlzLmNvbnRleHQ9ZCx0aGlzLnNlbGVjdG9yPWEsdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpcy5jb250ZXh0PXRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOm4uaXNGdW5jdGlvbihhKT9cInVuZGVmaW5lZFwiIT10eXBlb2YgYy5yZWFkeT9jLnJlYWR5KGEpOmEobik6KHZvaWQgMCE9PWEuc2VsZWN0b3ImJih0aGlzLnNlbGVjdG9yPWEuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWEuY29udGV4dCksbi5tYWtlQXJyYXkoYSx0aGlzKSl9O0MucHJvdG90eXBlPW4uZm4sQT1uKGQpO3ZhciBEPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEU9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07bi5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYixjPW4oYSx0aGlzKSxkPWMubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7ZD5iO2IrKylpZihuLmNvbnRhaW5zKHRoaXMsY1tiXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9dy50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9uKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZuLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bi51bmlxdWVTb3J0KGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9uLmluQXJyYXkodGhpc1swXSxuKGEpKTpuLmluQXJyYXkoYS5qcXVlcnk/YVswXTphLHRoaXMpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4udW5pcXVlU29ydChuLm1lcmdlKHRoaXMuZ2V0KCksbihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBGKGEsYil7ZG8gYT1hW2JdO3doaWxlKGEmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1uLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHUoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRihhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEYoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIHUoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdShhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiB2KChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gdihhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwiaWZyYW1lXCIpP2EuY29udGVudERvY3VtZW50fHxhLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ6bi5tZXJnZShbXSxhLmNoaWxkTm9kZXMpfX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9bi5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9bi5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKEVbYV18fChlPW4udW5pcXVlU29ydChlKSksRC50ZXN0KGEpJiYoZT1lLnJldmVyc2UoKSkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBHPS9cXFMrL2c7ZnVuY3Rpb24gSChhKXt2YXIgYj17fTtyZXR1cm4gbi5lYWNoKGEubWF0Y2goRyl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9bi5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9IKGEpOm4uZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGY9W10sZz1bXSxoPS0xLGk9ZnVuY3Rpb24oKXtmb3IoZT1hLm9uY2UsZD1iPSEwO2cubGVuZ3RoO2g9LTEpe2M9Zy5zaGlmdCgpO3doaWxlKCsraDxmLmxlbmd0aClmW2hdLmFwcGx5KGNbMF0sY1sxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSYmKGg9Zi5sZW5ndGgsYz0hMSl9YS5tZW1vcnl8fChjPSExKSxiPSExLGUmJihmPWM/W106XCJcIil9LGo9e2FkZDpmdW5jdGlvbigpe3JldHVybiBmJiYoYyYmIWImJihoPWYubGVuZ3RoLTEsZy5wdXNoKGMpKSxmdW5jdGlvbiBkKGIpe24uZWFjaChiLGZ1bmN0aW9uKGIsYyl7bi5pc0Z1bmN0aW9uKGMpP2EudW5pcXVlJiZqLmhhcyhjKXx8Zi5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09bi50eXBlKGMpJiZkKGMpfSl9KGFyZ3VtZW50cyksYyYmIWImJmkoKSksdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIG4uZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1uLmluQXJyYXkoYixmLGMpKT4tMSlmLnNwbGljZShjLDEpLGg+PWMmJmgtLX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9uLmluQXJyYXkoYSxmKT4tMTpmLmxlbmd0aD4wfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBmJiYoZj1bXSksdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBlPWc9W10sZj1jPVwiXCIsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hZn0sbG9jazpmdW5jdGlvbigpe3JldHVybiBlPSEwLGN8fGouZGlzYWJsZSgpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiEhZX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxjKXtyZXR1cm4gZXx8KGM9Y3x8W10sYz1bYSxjLnNsaWNlP2Muc2xpY2UoKTpjXSxnLnB1c2goYyksYnx8aSgpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGouZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFkfX07cmV0dXJuIGp9LG4uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG4uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG4uRGVmZXJyZWQoZnVuY3Rpb24oYyl7bi5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1uLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLnByb2dyZXNzKGMubm90aWZ5KS5kb25lKGMucmVzb2x2ZSkuZmFpbChjLnJlamVjdCk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9uLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG4uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWUuY2FsbChhcmd1bWVudHMpLGQ9Yy5sZW5ndGgsZj0xIT09ZHx8YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZDowLGc9MT09PWY/YTpuLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGQpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9lLmNhbGwoYXJndW1lbnRzKTpkLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZD4xKWZvcihpPW5ldyBBcnJheShkKSxqPW5ldyBBcnJheShkKSxrPW5ldyBBcnJheShkKTtkPmI7YisrKWNbYl0mJm4uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLnByb2dyZXNzKGgoYixqLGkpKS5kb25lKGgoYixrLGMpKS5mYWlsKGcucmVqZWN0KTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSTtuLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBuLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG4uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP24ucmVhZHlXYWl0Kys6bi5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1uLnJlYWR5V2FpdDpuLmlzUmVhZHkpfHwobi5pc1JlYWR5PSEwLGEhPT0hMCYmLS1uLnJlYWR5V2FpdD4wfHwoSS5yZXNvbHZlV2l0aChkLFtuXSksbi5mbi50cmlnZ2VySGFuZGxlciYmKG4oZCkudHJpZ2dlckhhbmRsZXIoXCJyZWFkeVwiKSxuKGQpLm9mZihcInJlYWR5XCIpKSkpfX0pO2Z1bmN0aW9uIEooKXtkLmFkZEV2ZW50TGlzdGVuZXI/KGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixLKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsSykpOihkLmRldGFjaEV2ZW50KFwib25yZWFkeXN0YXRlY2hhbmdlXCIsSyksYS5kZXRhY2hFdmVudChcIm9ubG9hZFwiLEspKX1mdW5jdGlvbiBLKCl7KGQuYWRkRXZlbnRMaXN0ZW5lcnx8XCJsb2FkXCI9PT1hLmV2ZW50LnR5cGV8fFwiY29tcGxldGVcIj09PWQucmVhZHlTdGF0ZSkmJihKKCksbi5yZWFkeSgpKX1uLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24oYil7aWYoIUkpaWYoST1uLkRlZmVycmVkKCksXCJjb21wbGV0ZVwiPT09ZC5yZWFkeVN0YXRlfHxcImxvYWRpbmdcIiE9PWQucmVhZHlTdGF0ZSYmIWQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsKWEuc2V0VGltZW91dChuLnJlYWR5KTtlbHNlIGlmKGQuYWRkRXZlbnRMaXN0ZW5lcilkLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsSyksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEspO2Vsc2V7ZC5hdHRhY2hFdmVudChcIm9ucmVhZHlzdGF0ZWNoYW5nZVwiLEspLGEuYXR0YWNoRXZlbnQoXCJvbmxvYWRcIixLKTt2YXIgYz0hMTt0cnl7Yz1udWxsPT1hLmZyYW1lRWxlbWVudCYmZC5kb2N1bWVudEVsZW1lbnR9Y2F0Y2goZSl7fWMmJmMuZG9TY3JvbGwmJiFmdW5jdGlvbiBmKCl7aWYoIW4uaXNSZWFkeSl7dHJ5e2MuZG9TY3JvbGwoXCJsZWZ0XCIpfWNhdGNoKGIpe3JldHVybiBhLnNldFRpbWVvdXQoZiw1MCl9SigpLG4ucmVhZHkoKX19KCl9cmV0dXJuIEkucHJvbWlzZShiKX0sbi5yZWFkeS5wcm9taXNlKCk7dmFyIEw7Zm9yKEwgaW4gbihsKSlicmVhaztsLm93bkZpcnN0PVwiMFwiPT09TCxsLmlubGluZUJsb2NrTmVlZHNMYXlvdXQ9ITEsbihmdW5jdGlvbigpe3ZhciBhLGIsYyxlO2M9ZC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0sYyYmYy5zdHlsZSYmKGI9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGUuc3R5bGUuY3NzVGV4dD1cInBvc2l0aW9uOmFic29sdXRlO2JvcmRlcjowO3dpZHRoOjA7aGVpZ2h0OjA7dG9wOjA7bGVmdDotOTk5OXB4XCIsYy5hcHBlbmRDaGlsZChlKS5hcHBlbmRDaGlsZChiKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgYi5zdHlsZS56b29tJiYoYi5zdHlsZS5jc3NUZXh0PVwiZGlzcGxheTppbmxpbmU7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzoxcHg7d2lkdGg6MXB4O3pvb206MVwiLGwuaW5saW5lQmxvY2tOZWVkc0xheW91dD1hPTM9PT1iLm9mZnNldFdpZHRoLGEmJihjLnN0eWxlLnpvb209MSkpLGMucmVtb3ZlQ2hpbGQoZSkpfSksZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7bC5kZWxldGVFeHBhbmRvPSEwO3RyeXtkZWxldGUgYS50ZXN0fWNhdGNoKGIpe2wuZGVsZXRlRXhwYW5kbz0hMX1hPW51bGx9KCk7dmFyIE09ZnVuY3Rpb24oYSl7dmFyIGI9bi5ub0RhdGFbKGEubm9kZU5hbWUrXCIgXCIpLnRvTG93ZXJDYXNlKCldLGM9K2Eubm9kZVR5cGV8fDE7cmV0dXJuIDEhPT1jJiY5IT09Yz8hMTohYnx8YiE9PSEwJiZhLmdldEF0dHJpYnV0ZShcImNsYXNzaWRcIik9PT1ifSxOPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxPPS8oW0EtWl0pL2c7ZnVuY3Rpb24gUChhLGIsYyl7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpe3ZhciBkPVwiZGF0YS1cIitiLnJlcGxhY2UoTyxcIi0kMVwiKS50b0xvd2VyQ2FzZSgpO2lmKGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVwidHJ1ZVwiPT09Yz8hMDpcImZhbHNlXCI9PT1jPyExOlwibnVsbFwiPT09Yz9udWxsOitjK1wiXCI9PT1jPytjOk4udGVzdChjKT9uLnBhcnNlSlNPTihjKTpjfWNhdGNoKGUpe31uLmRhdGEoYSxiLGMpfWVsc2UgYz12b2lkIDA7XG59cmV0dXJuIGN9ZnVuY3Rpb24gUShhKXt2YXIgYjtmb3IoYiBpbiBhKWlmKChcImRhdGFcIiE9PWJ8fCFuLmlzRW1wdHlPYmplY3QoYVtiXSkpJiZcInRvSlNPTlwiIT09YilyZXR1cm4hMTtyZXR1cm4hMH1mdW5jdGlvbiBSKGEsYixkLGUpe2lmKE0oYSkpe3ZhciBmLGcsaD1uLmV4cGFuZG8saT1hLm5vZGVUeXBlLGo9aT9uLmNhY2hlOmEsaz1pP2FbaF06YVtoXSYmaDtpZihrJiZqW2tdJiYoZXx8altrXS5kYXRhKXx8dm9pZCAwIT09ZHx8XCJzdHJpbmdcIiE9dHlwZW9mIGIpcmV0dXJuIGt8fChrPWk/YVtoXT1jLnBvcCgpfHxuLmd1aWQrKzpoKSxqW2tdfHwoaltrXT1pP3t9Ont0b0pTT046bi5ub29wfSksXCJvYmplY3RcIiE9dHlwZW9mIGImJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGJ8fChlP2pba109bi5leHRlbmQoaltrXSxiKTpqW2tdLmRhdGE9bi5leHRlbmQoaltrXS5kYXRhLGIpKSxnPWpba10sZXx8KGcuZGF0YXx8KGcuZGF0YT17fSksZz1nLmRhdGEpLHZvaWQgMCE9PWQmJihnW24uY2FtZWxDYXNlKGIpXT1kKSxcInN0cmluZ1wiPT10eXBlb2YgYj8oZj1nW2JdLG51bGw9PWYmJihmPWdbbi5jYW1lbENhc2UoYildKSk6Zj1nLGZ9fWZ1bmN0aW9uIFMoYSxiLGMpe2lmKE0oYSkpe3ZhciBkLGUsZj1hLm5vZGVUeXBlLGc9Zj9uLmNhY2hlOmEsaD1mP2Fbbi5leHBhbmRvXTpuLmV4cGFuZG87aWYoZ1toXSl7aWYoYiYmKGQ9Yz9nW2hdOmdbaF0uZGF0YSkpe24uaXNBcnJheShiKT9iPWIuY29uY2F0KG4ubWFwKGIsbi5jYW1lbENhc2UpKTpiIGluIGQ/Yj1bYl06KGI9bi5jYW1lbENhc2UoYiksYj1iIGluIGQ/W2JdOmIuc3BsaXQoXCIgXCIpKSxlPWIubGVuZ3RoO3doaWxlKGUtLSlkZWxldGUgZFtiW2VdXTtpZihjPyFRKGQpOiFuLmlzRW1wdHlPYmplY3QoZCkpcmV0dXJufShjfHwoZGVsZXRlIGdbaF0uZGF0YSxRKGdbaF0pKSkmJihmP24uY2xlYW5EYXRhKFthXSwhMCk6bC5kZWxldGVFeHBhbmRvfHxnIT1nLndpbmRvdz9kZWxldGUgZ1toXTpnW2hdPXZvaWQgMCl9fX1uLmV4dGVuZCh7Y2FjaGU6e30sbm9EYXRhOntcImFwcGxldCBcIjohMCxcImVtYmVkIFwiOiEwLFwib2JqZWN0IFwiOlwiY2xzaWQ6RDI3Q0RCNkUtQUU2RC0xMWNmLTk2QjgtNDQ0NTUzNTQwMDAwXCJ9LGhhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5ub2RlVHlwZT9uLmNhY2hlW2Fbbi5leHBhbmRvXV06YVtuLmV4cGFuZG9dLCEhYSYmIVEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBSKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe3JldHVybiBTKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUihhLGIsYywhMCl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFMoYSxiLCEwKX19KSxuLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPW4uZGF0YShmKSwxPT09Zi5ub2RlVHlwZSYmIW4uX2RhdGEoZixcInBhcnNlZEF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9bi5jYW1lbENhc2UoZC5zbGljZSg1KSksUChmLGQsZVtkXSkpKTtuLl9kYXRhKGYsXCJwYXJzZWRBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRhdGEodGhpcyxhKX0pOmFyZ3VtZW50cy5sZW5ndGg+MT90aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRhdGEodGhpcyxhLGIpfSk6Zj9QKGYsYSxuLmRhdGEoZixhKSk6dm9pZCAwfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLnJlbW92ZURhdGEodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGE/KGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9bi5fZGF0YShhLGIpLGMmJighZHx8bi5pc0FycmF5KGMpP2Q9bi5fZGF0YShhLGIsbi5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW4ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bi5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtuLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBuLl9kYXRhKGEsYyl8fG4uX2RhdGEoYSxjLHtlbXB0eTpuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe24uX3JlbW92ZURhdGEoYSxiK1wicXVldWVcIiksbi5fcmVtb3ZlRGF0YShhLGMpfSl9KX19KSxuLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP24ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bi5xdWV1ZSh0aGlzLGEsYik7bi5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bi5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9bi5fZGF0YShmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pLGZ1bmN0aW9uKCl7dmFyIGE7bC5zaHJpbmtXcmFwQmxvY2tzPWZ1bmN0aW9uKCl7aWYobnVsbCE9YSlyZXR1cm4gYTthPSExO3ZhciBiLGMsZTtyZXR1cm4gYz1kLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXSxjJiZjLnN0eWxlPyhiPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKSxlLnN0eWxlLmNzc1RleHQ9XCJwb3NpdGlvbjphYnNvbHV0ZTtib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweFwiLGMuYXBwZW5kQ2hpbGQoZSkuYXBwZW5kQ2hpbGQoYiksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGIuc3R5bGUuem9vbSYmKGIuc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MXB4O3dpZHRoOjFweDt6b29tOjFcIixiLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSkuc3R5bGUud2lkdGg9XCI1cHhcIixhPTMhPT1iLm9mZnNldFdpZHRoKSxjLnJlbW92ZUNoaWxkKGUpLGEpOnZvaWQgMH19KCk7dmFyIFQ9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLFU9bmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIrVCtcIikoW2EteiVdKikkXCIsXCJpXCIpLFY9W1wiVG9wXCIsXCJSaWdodFwiLFwiQm90dG9tXCIsXCJMZWZ0XCJdLFc9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1ifHxhLFwibm9uZVwiPT09bi5jc3MoYSxcImRpc3BsYXlcIil8fCFuLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKX07ZnVuY3Rpb24gWChhLGIsYyxkKXt2YXIgZSxmPTEsZz0yMCxoPWQ/ZnVuY3Rpb24oKXtyZXR1cm4gZC5jdXIoKX06ZnVuY3Rpb24oKXtyZXR1cm4gbi5jc3MoYSxiLFwiXCIpfSxpPWgoKSxqPWMmJmNbM118fChuLmNzc051bWJlcltiXT9cIlwiOlwicHhcIiksaz0obi5jc3NOdW1iZXJbYl18fFwicHhcIiE9PWomJitpKSYmVS5leGVjKG4uY3NzKGEsYikpO2lmKGsmJmtbM10hPT1qKXtqPWp8fGtbM10sYz1jfHxbXSxrPStpfHwxO2RvIGY9Znx8XCIuNVwiLGsvPWYsbi5zdHlsZShhLGIsaytqKTt3aGlsZShmIT09KGY9aCgpL2kpJiYxIT09ZiYmLS1nKX1yZXR1cm4gYyYmKGs9K2t8fCtpfHwwLGU9Y1sxXT9rKyhjWzFdKzEpKmNbMl06K2NbMl0sZCYmKGQudW5pdD1qLGQuc3RhcnQ9ayxkLmVuZD1lKSksZX12YXIgWT1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1uLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYylZKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLG4uaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChuKGEpLGMpfSkpLGIpKWZvcig7aT5oO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9LFo9L14oPzpjaGVja2JveHxyYWRpbykkL2ksJD0vPChbXFx3Oi1dKykvLF89L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxhYT0vXlxccysvLGJhPVwiYWJicnxhcnRpY2xlfGFzaWRlfGF1ZGlvfGJkaXxjYW52YXN8ZGF0YXxkYXRhbGlzdHxkZXRhaWxzfGRpYWxvZ3xmaWdjYXB0aW9ufGZpZ3VyZXxmb290ZXJ8aGVhZGVyfGhncm91cHxtYWlufG1hcmt8bWV0ZXJ8bmF2fG91dHB1dHxwaWN0dXJlfHByb2dyZXNzfHNlY3Rpb258c3VtbWFyeXx0ZW1wbGF0ZXx0aW1lfHZpZGVvXCI7ZnVuY3Rpb24gY2EoYSl7dmFyIGI9YmEuc3BsaXQoXCJ8XCIpLGM9YS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7aWYoYy5jcmVhdGVFbGVtZW50KXdoaWxlKGIubGVuZ3RoKWMuY3JlYXRlRWxlbWVudChiLnBvcCgpKTtyZXR1cm4gY30hZnVuY3Rpb24oKXt2YXIgYT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksYj1kLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxjPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2EuaW5uZXJIVE1MPVwiICA8bGluay8+PHRhYmxlPjwvdGFibGU+PGEgaHJlZj0nL2EnPmE8L2E+PGlucHV0IHR5cGU9J2NoZWNrYm94Jy8+XCIsbC5sZWFkaW5nV2hpdGVzcGFjZT0zPT09YS5maXJzdENoaWxkLm5vZGVUeXBlLGwudGJvZHk9IWEuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKS5sZW5ndGgsbC5odG1sU2VyaWFsaXplPSEhYS5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIikubGVuZ3RoLGwuaHRtbDVDbG9uZT1cIjw6bmF2PjwvOm5hdj5cIiE9PWQuY3JlYXRlRWxlbWVudChcIm5hdlwiKS5jbG9uZU5vZGUoITApLm91dGVySFRNTCxjLnR5cGU9XCJjaGVja2JveFwiLGMuY2hlY2tlZD0hMCxiLmFwcGVuZENoaWxkKGMpLGwuYXBwZW5kQ2hlY2tlZD1jLmNoZWNrZWQsYS5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsbC5ub0Nsb25lQ2hlY2tlZD0hIWEuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlLGIuYXBwZW5kQ2hpbGQoYSksYz1kLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGMuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksYS5hcHBlbmRDaGlsZChjKSxsLmNoZWNrQ2xvbmU9YS5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsbC5ub0Nsb25lRXZlbnQ9ISFhLmFkZEV2ZW50TGlzdGVuZXIsYVtuLmV4cGFuZG9dPTEsbC5hdHRyaWJ1dGVzPSFhLmdldEF0dHJpYnV0ZShuLmV4cGFuZG8pfSgpO3ZhciBkYT17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLGxlZ2VuZDpbMSxcIjxmaWVsZHNldD5cIixcIjwvZmllbGRzZXQ+XCJdLGFyZWE6WzEsXCI8bWFwPlwiLFwiPC9tYXA+XCJdLHBhcmFtOlsxLFwiPG9iamVjdD5cIixcIjwvb2JqZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjx0Ym9keT48L3Rib2R5Pjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpsLmh0bWxTZXJpYWxpemU/WzAsXCJcIixcIlwiXTpbMSxcIlg8ZGl2PlwiLFwiPC9kaXY+XCJdfTtkYS5vcHRncm91cD1kYS5vcHRpb24sZGEudGJvZHk9ZGEudGZvb3Q9ZGEuY29sZ3JvdXA9ZGEuY2FwdGlvbj1kYS50aGVhZCxkYS50aD1kYS50ZDtmdW5jdGlvbiBlYShhLGIpe3ZhciBjLGQsZT0wLGY9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOnZvaWQgMDtpZighZilmb3IoZj1bXSxjPWEuY2hpbGROb2Rlc3x8YTtudWxsIT0oZD1jW2VdKTtlKyspIWJ8fG4ubm9kZU5hbWUoZCxiKT9mLnB1c2goZCk6bi5tZXJnZShmLGVhKGQsYikpO3JldHVybiB2b2lkIDA9PT1ifHxiJiZuLm5vZGVOYW1lKGEsYik/bi5tZXJnZShbYV0sZik6Zn1mdW5jdGlvbiBmYShhLGIpe2Zvcih2YXIgYyxkPTA7bnVsbCE9KGM9YVtkXSk7ZCsrKW4uX2RhdGEoYyxcImdsb2JhbEV2YWxcIiwhYnx8bi5fZGF0YShiW2RdLFwiZ2xvYmFsRXZhbFwiKSl9dmFyIGdhPS88fCYjP1xcdys7LyxoYT0vPHRib2R5L2k7ZnVuY3Rpb24gaWEoYSl7Wi50ZXN0KGEudHlwZSkmJihhLmRlZmF1bHRDaGVja2VkPWEuY2hlY2tlZCl9ZnVuY3Rpb24gamEoYSxiLGMsZCxlKXtmb3IodmFyIGYsZyxoLGksaixrLG0sbz1hLmxlbmd0aCxwPWNhKGIpLHE9W10scj0wO28+cjtyKyspaWYoZz1hW3JdLGd8fDA9PT1nKWlmKFwib2JqZWN0XCI9PT1uLnR5cGUoZykpbi5tZXJnZShxLGcubm9kZVR5cGU/W2ddOmcpO2Vsc2UgaWYoZ2EudGVzdChnKSl7aT1pfHxwLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksaj0oJC5leGVjKGcpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxtPWRhW2pdfHxkYS5fZGVmYXVsdCxpLmlubmVySFRNTD1tWzFdK24uaHRtbFByZWZpbHRlcihnKSttWzJdLGY9bVswXTt3aGlsZShmLS0paT1pLmxhc3RDaGlsZDtpZighbC5sZWFkaW5nV2hpdGVzcGFjZSYmYWEudGVzdChnKSYmcS5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoYWEuZXhlYyhnKVswXSkpLCFsLnRib2R5KXtnPVwidGFibGVcIiE9PWp8fGhhLnRlc3QoZyk/XCI8dGFibGU+XCIhPT1tWzFdfHxoYS50ZXN0KGcpPzA6aTppLmZpcnN0Q2hpbGQsZj1nJiZnLmNoaWxkTm9kZXMubGVuZ3RoO3doaWxlKGYtLSluLm5vZGVOYW1lKGs9Zy5jaGlsZE5vZGVzW2ZdLFwidGJvZHlcIikmJiFrLmNoaWxkTm9kZXMubGVuZ3RoJiZnLnJlbW92ZUNoaWxkKGspfW4ubWVyZ2UocSxpLmNoaWxkTm9kZXMpLGkudGV4dENvbnRlbnQ9XCJcIjt3aGlsZShpLmZpcnN0Q2hpbGQpaS5yZW1vdmVDaGlsZChpLmZpcnN0Q2hpbGQpO2k9cC5sYXN0Q2hpbGR9ZWxzZSBxLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShnKSk7aSYmcC5yZW1vdmVDaGlsZChpKSxsLmFwcGVuZENoZWNrZWR8fG4uZ3JlcChlYShxLFwiaW5wdXRcIiksaWEpLHI9MDt3aGlsZShnPXFbcisrXSlpZihkJiZuLmluQXJyYXkoZyxkKT4tMSllJiZlLnB1c2goZyk7ZWxzZSBpZihoPW4uY29udGFpbnMoZy5vd25lckRvY3VtZW50LGcpLGk9ZWEocC5hcHBlbmRDaGlsZChnKSxcInNjcmlwdFwiKSxoJiZmYShpKSxjKXtmPTA7d2hpbGUoZz1pW2YrK10pXy50ZXN0KGcudHlwZXx8XCJcIikmJmMucHVzaChnKX1yZXR1cm4gaT1udWxsLHB9IWZ1bmN0aW9uKCl7dmFyIGIsYyxlPWQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtmb3IoYiBpbntzdWJtaXQ6ITAsY2hhbmdlOiEwLGZvY3VzaW46ITB9KWM9XCJvblwiK2IsKGxbYl09YyBpbiBhKXx8KGUuc2V0QXR0cmlidXRlKGMsXCJ0XCIpLGxbYl09ZS5hdHRyaWJ1dGVzW2NdLmV4cGFuZG89PT0hMSk7ZT1udWxsfSgpO3ZhciBrYT0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYSkkL2ksbGE9L15rZXkvLG1hPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxuYT0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sb2E9L14oW14uXSopKD86XFwuKC4rKXwpLztmdW5jdGlvbiBwYSgpe3JldHVybiEwfWZ1bmN0aW9uIHFhKCl7cmV0dXJuITF9ZnVuY3Rpb24gcmEoKXt0cnl7cmV0dXJuIGQuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fWZ1bmN0aW9uIHNhKGEsYixjLGQsZSxmKXt2YXIgZyxoO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBiKXtcInN0cmluZ1wiIT10eXBlb2YgYyYmKGQ9ZHx8YyxjPXZvaWQgMCk7Zm9yKGggaW4gYilzYShhLGgsYyxkLGJbaF0sZik7cmV0dXJuIGF9aWYobnVsbD09ZCYmbnVsbD09ZT8oZT1jLGQ9Yz12b2lkIDApOm51bGw9PWUmJihcInN0cmluZ1wiPT10eXBlb2YgYz8oZT1kLGQ9dm9pZCAwKTooZT1kLGQ9YyxjPXZvaWQgMCkpLGU9PT0hMSllPXFhO2Vsc2UgaWYoIWUpcmV0dXJuIGE7cmV0dXJuIDE9PT1mJiYoZz1lLGU9ZnVuY3Rpb24oYSl7cmV0dXJuIG4oKS5vZmYoYSksZy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUuZ3VpZD1nLmd1aWR8fChnLmd1aWQ9bi5ndWlkKyspKSxhLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LmFkZCh0aGlzLGIsZSxkLGMpfSl9bi5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1uLl9kYXRhKGEpO2lmKHIpe2MuaGFuZGxlciYmKGk9YyxjPWkuaGFuZGxlcixlPWkuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGc9ci5ldmVudHMpfHwoZz1yLmV2ZW50cz17fSksKGs9ci5oYW5kbGUpfHwoaz1yLmhhbmRsZT1mdW5jdGlvbihhKXtyZXR1cm5cInVuZGVmaW5lZFwiPT10eXBlb2Ygbnx8YSYmbi5ldmVudC50cmlnZ2VyZWQ9PT1hLnR5cGU/dm9pZCAwOm4uZXZlbnQuZGlzcGF0Y2guYXBwbHkoay5lbGVtLGFyZ3VtZW50cyl9LGsuZWxlbT1hKSxiPShifHxcIlwiKS5tYXRjaChHKXx8W1wiXCJdLGg9Yi5sZW5ndGg7d2hpbGUoaC0tKWY9b2EuZXhlYyhiW2hdKXx8W10sbz1xPWZbMV0scD0oZlsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvJiYoaj1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGU/ai5kZWxlZ2F0ZVR5cGU6ai5iaW5kVHlwZSl8fG8saj1uLmV2ZW50LnNwZWNpYWxbb118fHt9LGw9bi5leHRlbmQoe3R5cGU6byxvcmlnVHlwZTpxLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmbi5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpwLmpvaW4oXCIuXCIpfSxpKSwobT1nW29dKXx8KG09Z1tvXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxqLnNldHVwJiZqLnNldHVwLmNhbGwoYSxkLHAsaykhPT0hMXx8KGEuYWRkRXZlbnRMaXN0ZW5lcj9hLmFkZEV2ZW50TGlzdGVuZXIobyxrLCExKTphLmF0dGFjaEV2ZW50JiZhLmF0dGFjaEV2ZW50KFwib25cIitvLGspKSksai5hZGQmJihqLmFkZC5jYWxsKGEsbCksbC5oYW5kbGVyLmd1aWR8fChsLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsbCk6bS5wdXNoKGwpLG4uZXZlbnQuZ2xvYmFsW29dPSEwKTthPW51bGx9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9bi5oYXNEYXRhKGEpJiZuLl9kYXRhKGEpO2lmKHImJihrPXIuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goRyl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPW9hLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyl7bD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbT1rW29dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitwLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxpPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWc9bVtmXSwhZSYmcSE9PWcub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWcuZ3VpZHx8aCYmIWgudGVzdChnLm5hbWVzcGFjZSl8fGQmJmQhPT1nLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWcuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxnLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGcpKTtpJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxwLHIuaGFuZGxlKSE9PSExfHxuLnJlbW92ZUV2ZW50KGEsbyxyLmhhbmRsZSksZGVsZXRlIGtbb10pfWVsc2UgZm9yKG8gaW4gayluLmV2ZW50LnJlbW92ZShhLG8rYltqXSxjLGQsITApO24uaXNFbXB0eU9iamVjdChrKSYmKGRlbGV0ZSByLmhhbmRsZSxuLl9yZW1vdmVEYXRhKGEsXCJldmVudHNcIikpfX0sdHJpZ2dlcjpmdW5jdGlvbihiLGMsZSxmKXt2YXIgZyxoLGksaixsLG0sbyxwPVtlfHxkXSxxPWsuY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixyPWsuY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihpPW09ZT1lfHxkLDMhPT1lLm5vZGVUeXBlJiY4IT09ZS5ub2RlVHlwZSYmIW5hLnRlc3QocStuLmV2ZW50LnRyaWdnZXJlZCkmJihxLmluZGV4T2YoXCIuXCIpPi0xJiYocj1xLnNwbGl0KFwiLlwiKSxxPXIuc2hpZnQoKSxyLnNvcnQoKSksaD1xLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitxLGI9YltuLmV4cGFuZG9dP2I6bmV3IG4uRXZlbnQocSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9Zj8yOjMsYi5uYW1lc3BhY2U9ci5qb2luKFwiLlwiKSxiLnJuYW1lc3BhY2U9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Iuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZSksYz1udWxsPT1jP1tiXTpuLm1ha2VBcnJheShjLFtiXSksbD1uLmV2ZW50LnNwZWNpYWxbcV18fHt9LGZ8fCFsLnRyaWdnZXJ8fGwudHJpZ2dlci5hcHBseShlLGMpIT09ITEpKXtpZighZiYmIWwubm9CdWJibGUmJiFuLmlzV2luZG93KGUpKXtmb3Ioaj1sLmRlbGVnYXRlVHlwZXx8cSxuYS50ZXN0KGorcSl8fChpPWkucGFyZW50Tm9kZSk7aTtpPWkucGFyZW50Tm9kZSlwLnB1c2goaSksbT1pO209PT0oZS5vd25lckRvY3VtZW50fHxkKSYmcC5wdXNoKG0uZGVmYXVsdFZpZXd8fG0ucGFyZW50V2luZG93fHxhKX1vPTA7d2hpbGUoKGk9cFtvKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9bz4xP2o6bC5iaW5kVHlwZXx8cSxnPShuLl9kYXRhKGksXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZuLl9kYXRhKGksXCJoYW5kbGVcIiksZyYmZy5hcHBseShpLGMpLGc9aCYmaVtoXSxnJiZnLmFwcGx5JiZNKGkpJiYoYi5yZXN1bHQ9Zy5hcHBseShpLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7aWYoYi50eXBlPXEsIWYmJiFiLmlzRGVmYXVsdFByZXZlbnRlZCgpJiYoIWwuX2RlZmF1bHR8fGwuX2RlZmF1bHQuYXBwbHkocC5wb3AoKSxjKT09PSExKSYmTShlKSYmaCYmZVtxXSYmIW4uaXNXaW5kb3coZSkpe209ZVtoXSxtJiYoZVtoXT1udWxsKSxuLmV2ZW50LnRyaWdnZXJlZD1xO3RyeXtlW3FdKCl9Y2F0Y2gocyl7fW4uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxtJiYoZVtoXT1tKX1yZXR1cm4gYi5yZXN1bHR9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXthPW4uZXZlbnQuZml4KGEpO3ZhciBiLGMsZCxmLGcsaD1bXSxpPWUuY2FsbChhcmd1bWVudHMpLGo9KG4uX2RhdGEodGhpcyxcImV2ZW50c1wiKXx8e30pW2EudHlwZV18fFtdLGs9bi5ldmVudC5zcGVjaWFsW2EudHlwZV18fHt9O2lmKGlbMF09YSxhLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGEpIT09ITEpe2g9bi5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYSxqKSxiPTA7d2hpbGUoKGY9aFtiKytdKSYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7YS5jdXJyZW50VGFyZ2V0PWYuZWxlbSxjPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tjKytdKSYmIWEuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSlhLnJuYW1lc3BhY2UmJiFhLnJuYW1lc3BhY2UudGVzdChnLm5hbWVzcGFjZSl8fChhLmhhbmRsZU9iaj1nLGEuZGF0YT1nLmRhdGEsZD0oKG4uZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZCYmKGEucmVzdWx0PWQpPT09ITEmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGEpLGEucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPVtdLGg9Yi5kZWxlZ2F0ZUNvdW50LGk9YS50YXJnZXQ7aWYoaCYmaS5ub2RlVHlwZSYmKFwiY2xpY2tcIiE9PWEudHlwZXx8aXNOYU4oYS5idXR0b24pfHxhLmJ1dHRvbjwxKSlmb3IoO2khPXRoaXM7aT1pLnBhcmVudE5vZGV8fHRoaXMpaWYoMT09PWkubm9kZVR5cGUmJihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSkpe2ZvcihkPVtdLGM9MDtoPmM7YysrKWY9YltjXSxlPWYuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09ZFtlXSYmKGRbZV09Zi5uZWVkc0NvbnRleHQ/bihlLHRoaXMpLmluZGV4KGkpPi0xOm4uZmluZChlLHRoaXMsbnVsbCxbaV0pLmxlbmd0aCksZFtlXSYmZC5wdXNoKGYpO2QubGVuZ3RoJiZnLnB1c2goe2VsZW06aSxoYW5kbGVyczpkfSl9cmV0dXJuIGg8Yi5sZW5ndGgmJmcucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOmIuc2xpY2UoaCl9KSxnfSxmaXg6ZnVuY3Rpb24oYSl7aWYoYVtuLmV4cGFuZG9dKXJldHVybiBhO3ZhciBiLGMsZSxmPWEudHlwZSxnPWEsaD10aGlzLmZpeEhvb2tzW2ZdO2h8fCh0aGlzLmZpeEhvb2tzW2ZdPWg9bWEudGVzdChmKT90aGlzLm1vdXNlSG9va3M6bGEudGVzdChmKT90aGlzLmtleUhvb2tzOnt9KSxlPWgucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQoaC5wcm9wcyk6dGhpcy5wcm9wcyxhPW5ldyBuLkV2ZW50KGcpLGI9ZS5sZW5ndGg7d2hpbGUoYi0tKWM9ZVtiXSxhW2NdPWdbY107cmV0dXJuIGEudGFyZ2V0fHwoYS50YXJnZXQ9Zy5zcmNFbGVtZW50fHxkKSwzPT09YS50YXJnZXQubm9kZVR5cGUmJihhLnRhcmdldD1hLnRhcmdldC5wYXJlbnROb2RlKSxhLm1ldGFLZXk9ISFhLm1ldGFLZXksaC5maWx0ZXI/aC5maWx0ZXIoYSxnKTphfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGRldGFpbCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09YS53aGljaCYmKGEud2hpY2g9bnVsbCE9Yi5jaGFyQ29kZT9iLmNoYXJDb2RlOmIua2V5Q29kZSksYX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGZyb21FbGVtZW50IG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZixnPWIuYnV0dG9uLGg9Yi5mcm9tRWxlbWVudDtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoZT1hLnRhcmdldC5vd25lckRvY3VtZW50fHxkLGY9ZS5kb2N1bWVudEVsZW1lbnQsYz1lLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGYmJmYuc2Nyb2xsTGVmdHx8YyYmYy5zY3JvbGxMZWZ0fHwwKS0oZiYmZi5jbGllbnRMZWZ0fHxjJiZjLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhmJiZmLnNjcm9sbFRvcHx8YyYmYy5zY3JvbGxUb3B8fDApLShmJiZmLmNsaWVudFRvcHx8YyYmYy5jbGllbnRUb3B8fDApKSwhYS5yZWxhdGVkVGFyZ2V0JiZoJiYoYS5yZWxhdGVkVGFyZ2V0PWg9PT1hLnRhcmdldD9iLnRvRWxlbWVudDpoKSxhLndoaWNofHx2b2lkIDA9PT1nfHwoYS53aGljaD0xJmc/MToyJmc/Mzo0Jmc/MjowKSxhfX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7aWYodGhpcyE9PXJhKCkmJnRoaXMuZm9jdXMpdHJ5e3JldHVybiB0aGlzLmZvY3VzKCksITF9Y2F0Y2goYSl7fX0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1yYSgpJiZ0aGlzLmJsdXI/KHRoaXMuYmx1cigpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIG4ubm9kZU5hbWUodGhpcyxcImlucHV0XCIpJiZcImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2s/KHRoaXMuY2xpY2soKSwhMSk6dm9pZCAwfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gbi5ub2RlTmFtZShhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9bi5leHRlbmQobmV3IG4uRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwfSk7bi5ldmVudC50cmlnZ2VyKGQsbnVsbCxiKSxkLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSxuLnJlbW92ZUV2ZW50PWQucmVtb3ZlRXZlbnRMaXN0ZW5lcj9mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjKX06ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVwib25cIitiO2EuZGV0YWNoRXZlbnQmJihcInVuZGVmaW5lZFwiPT10eXBlb2YgYVtkXSYmKGFbZF09bnVsbCksYS5kZXRhY2hFdmVudChkLGMpKX0sbi5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbi5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/cGE6cWEpOnRoaXMudHlwZT1hLGImJm4uZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fG4ubm93KCksdm9pZCh0aGlzW24uZXhwYW5kb109ITApKTpuZXcgbi5FdmVudChhLGIpfSxuLkV2ZW50LnByb3RvdHlwZT17Y29uc3RydWN0b3I6bi5FdmVudCxpc0RlZmF1bHRQcmV2ZW50ZWQ6cWEsaXNQcm9wYWdhdGlvblN0b3BwZWQ6cWEsaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6cWEscHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9cGEsYSYmKGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOmEucmV0dXJuVmFsdWU9ITEpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1wYSxhJiYhdGhpcy5pc1NpbXVsYXRlZCYmKGEuc3RvcFByb3BhZ2F0aW9uJiZhLnN0b3BQcm9wYWdhdGlvbigpLGEuY2FuY2VsQnViYmxlPSEwKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9cGEsYSYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24mJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LG4uZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihhLGIpe24uZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuIGUmJihlPT09ZHx8bi5jb250YWlucyhkLGUpKXx8KGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksbC5zdWJtaXR8fChuLmV2ZW50LnNwZWNpYWwuc3VibWl0PXtzZXR1cDpmdW5jdGlvbigpe3JldHVybiBuLm5vZGVOYW1lKHRoaXMsXCJmb3JtXCIpPyExOnZvaWQgbi5ldmVudC5hZGQodGhpcyxcImNsaWNrLl9zdWJtaXQga2V5cHJlc3MuX3N1Ym1pdFwiLGZ1bmN0aW9uKGEpe3ZhciBiPWEudGFyZ2V0LGM9bi5ub2RlTmFtZShiLFwiaW5wdXRcIil8fG4ubm9kZU5hbWUoYixcImJ1dHRvblwiKT9uLnByb3AoYixcImZvcm1cIik6dm9pZCAwO2MmJiFuLl9kYXRhKGMsXCJzdWJtaXRcIikmJihuLmV2ZW50LmFkZChjLFwic3VibWl0Ll9zdWJtaXRcIixmdW5jdGlvbihhKXthLl9zdWJtaXRCdWJibGU9ITB9KSxuLl9kYXRhKGMsXCJzdWJtaXRcIiwhMCkpfSl9LHBvc3REaXNwYXRjaDpmdW5jdGlvbihhKXthLl9zdWJtaXRCdWJibGUmJihkZWxldGUgYS5fc3VibWl0QnViYmxlLHRoaXMucGFyZW50Tm9kZSYmIWEuaXNUcmlnZ2VyJiZuLmV2ZW50LnNpbXVsYXRlKFwic3VibWl0XCIsdGhpcy5wYXJlbnROb2RlLGEpKX0sdGVhcmRvd246ZnVuY3Rpb24oKXtyZXR1cm4gbi5ub2RlTmFtZSh0aGlzLFwiZm9ybVwiKT8hMTp2b2lkIG4uZXZlbnQucmVtb3ZlKHRoaXMsXCIuX3N1Ym1pdFwiKX19KSxsLmNoYW5nZXx8KG4uZXZlbnQuc3BlY2lhbC5jaGFuZ2U9e3NldHVwOmZ1bmN0aW9uKCl7cmV0dXJuIGthLnRlc3QodGhpcy5ub2RlTmFtZSk/KFwiY2hlY2tib3hcIiE9PXRoaXMudHlwZSYmXCJyYWRpb1wiIT09dGhpcy50eXBlfHwobi5ldmVudC5hZGQodGhpcyxcInByb3BlcnR5Y2hhbmdlLl9jaGFuZ2VcIixmdW5jdGlvbihhKXtcImNoZWNrZWRcIj09PWEub3JpZ2luYWxFdmVudC5wcm9wZXJ0eU5hbWUmJih0aGlzLl9qdXN0Q2hhbmdlZD0hMCl9KSxuLmV2ZW50LmFkZCh0aGlzLFwiY2xpY2suX2NoYW5nZVwiLGZ1bmN0aW9uKGEpe3RoaXMuX2p1c3RDaGFuZ2VkJiYhYS5pc1RyaWdnZXImJih0aGlzLl9qdXN0Q2hhbmdlZD0hMSksbi5ldmVudC5zaW11bGF0ZShcImNoYW5nZVwiLHRoaXMsYSl9KSksITEpOnZvaWQgbi5ldmVudC5hZGQodGhpcyxcImJlZm9yZWFjdGl2YXRlLl9jaGFuZ2VcIixmdW5jdGlvbihhKXt2YXIgYj1hLnRhcmdldDtrYS50ZXN0KGIubm9kZU5hbWUpJiYhbi5fZGF0YShiLFwiY2hhbmdlXCIpJiYobi5ldmVudC5hZGQoYixcImNoYW5nZS5fY2hhbmdlXCIsZnVuY3Rpb24oYSl7IXRoaXMucGFyZW50Tm9kZXx8YS5pc1NpbXVsYXRlZHx8YS5pc1RyaWdnZXJ8fG4uZXZlbnQuc2ltdWxhdGUoXCJjaGFuZ2VcIix0aGlzLnBhcmVudE5vZGUsYSl9KSxuLl9kYXRhKGIsXCJjaGFuZ2VcIiwhMCkpfSl9LGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYj1hLnRhcmdldDtyZXR1cm4gdGhpcyE9PWJ8fGEuaXNTaW11bGF0ZWR8fGEuaXNUcmlnZ2VyfHxcInJhZGlvXCIhPT1iLnR5cGUmJlwiY2hlY2tib3hcIiE9PWIudHlwZT9hLmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKTp2b2lkIDB9LHRlYXJkb3duOmZ1bmN0aW9uKCl7cmV0dXJuIG4uZXZlbnQucmVtb3ZlKHRoaXMsXCIuX2NoYW5nZVwiKSwha2EudGVzdCh0aGlzLm5vZGVOYW1lKX19KSxsLmZvY3VzaW58fG4uZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7bi5ldmVudC5zaW11bGF0ZShiLGEudGFyZ2V0LG4uZXZlbnQuZml4KGEpKX07bi5ldmVudC5zcGVjaWFsW2JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPW4uX2RhdGEoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxuLl9kYXRhKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9bi5fZGF0YShkLGIpLTE7ZT9uLl9kYXRhKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksbi5fcmVtb3ZlRGF0YShkLGIpKX19fSksbi5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBzYSh0aGlzLGEsYixjLGQpfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHNhKHRoaXMsYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLG4oYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGIhPT0hMSYmXCJmdW5jdGlvblwiIT10eXBlb2YgYnx8KGM9YixiPXZvaWQgMCksYz09PSExJiYoYz1xYSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX0sdHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtyZXR1cm4gYz9uLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApOnZvaWQgMH19KTt2YXIgdGE9LyBqUXVlcnlcXGQrPVwiKD86bnVsbHxcXGQrKVwiL2csdWE9bmV3IFJlZ0V4cChcIjwoPzpcIitiYStcIilbXFxcXHMvPl1cIixcImlcIiksdmE9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzotXSspW14+XSopXFwvPi9naSx3YT0vPHNjcmlwdHw8c3R5bGV8PGxpbmsvaSx4YT0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLHlhPS9edHJ1ZVxcLyguKikvLHphPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZyxBYT1jYShkKSxCYT1BYS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO2Z1bmN0aW9uIENhKGEsYil7cmV0dXJuIG4ubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZuLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YS5hcHBlbmRDaGlsZChhLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpKTphfWZ1bmN0aW9uIERhKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1uLmZpbmQuYXR0cihhLFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24gRWEoYSl7dmFyIGI9eWEuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIEZhKGEsYil7aWYoMT09PWIubm9kZVR5cGUmJm4uaGFzRGF0YShhKSl7dmFyIGMsZCxlLGY9bi5fZGF0YShhKSxnPW4uX2RhdGEoYixmKSxoPWYuZXZlbnRzO2lmKGgpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoYyBpbiBoKWZvcihkPTAsZT1oW2NdLmxlbmd0aDtlPmQ7ZCsrKW4uZXZlbnQuYWRkKGIsYyxoW2NdW2RdKX1nLmRhdGEmJihnLmRhdGE9bi5leHRlbmQoe30sZy5kYXRhKSl9fWZ1bmN0aW9uIEdhKGEsYil7dmFyIGMsZCxlO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKSwhbC5ub0Nsb25lRXZlbnQmJmJbbi5leHBhbmRvXSl7ZT1uLl9kYXRhKGIpO2ZvcihkIGluIGUuZXZlbnRzKW4ucmVtb3ZlRXZlbnQoYixkLGUuaGFuZGxlKTtiLnJlbW92ZUF0dHJpYnV0ZShuLmV4cGFuZG8pfVwic2NyaXB0XCI9PT1jJiZiLnRleHQhPT1hLnRleHQ/KERhKGIpLnRleHQ9YS50ZXh0LEVhKGIpKTpcIm9iamVjdFwiPT09Yz8oYi5wYXJlbnROb2RlJiYoYi5vdXRlckhUTUw9YS5vdXRlckhUTUwpLGwuaHRtbDVDbG9uZSYmYS5pbm5lckhUTUwmJiFuLnRyaW0oYi5pbm5lckhUTUwpJiYoYi5pbm5lckhUTUw9YS5pbm5lckhUTUwpKTpcImlucHV0XCI9PT1jJiZaLnRlc3QoYS50eXBlKT8oYi5kZWZhdWx0Q2hlY2tlZD1iLmNoZWNrZWQ9YS5jaGVja2VkLGIudmFsdWUhPT1hLnZhbHVlJiYoYi52YWx1ZT1hLnZhbHVlKSk6XCJvcHRpb25cIj09PWM/Yi5kZWZhdWx0U2VsZWN0ZWQ9Yi5zZWxlY3RlZD1hLmRlZmF1bHRTZWxlY3RlZDpcImlucHV0XCIhPT1jJiZcInRleHRhcmVhXCIhPT1jfHwoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfX1mdW5jdGlvbiBIYShhLGIsYyxkKXtiPWYuYXBwbHkoW10sYik7dmFyIGUsZyxoLGksaixrLG09MCxvPWEubGVuZ3RoLHA9by0xLHE9YlswXSxyPW4uaXNGdW5jdGlvbihxKTtpZihyfHxvPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBxJiYhbC5jaGVja0Nsb25lJiZ4YS50ZXN0KHEpKXJldHVybiBhLmVhY2goZnVuY3Rpb24oZSl7dmFyIGY9YS5lcShlKTtyJiYoYlswXT1xLmNhbGwodGhpcyxlLGYuaHRtbCgpKSksSGEoZixiLGMsZCl9KTtpZihvJiYoaz1qYShiLGFbMF0ub3duZXJEb2N1bWVudCwhMSxhLGQpLGU9ay5maXJzdENoaWxkLDE9PT1rLmNoaWxkTm9kZXMubGVuZ3RoJiYoaz1lKSxlfHxkKSl7Zm9yKGk9bi5tYXAoZWEoayxcInNjcmlwdFwiKSxEYSksaD1pLmxlbmd0aDtvPm07bSsrKWc9ayxtIT09cCYmKGc9bi5jbG9uZShnLCEwLCEwKSxoJiZuLm1lcmdlKGksZWEoZyxcInNjcmlwdFwiKSkpLGMuY2FsbChhW21dLGcsbSk7aWYoaClmb3Ioaj1pW2kubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsbi5tYXAoaSxFYSksbT0wO2g+bTttKyspZz1pW21dLF8udGVzdChnLnR5cGV8fFwiXCIpJiYhbi5fZGF0YShnLFwiZ2xvYmFsRXZhbFwiKSYmbi5jb250YWlucyhqLGcpJiYoZy5zcmM/bi5fZXZhbFVybCYmbi5fZXZhbFVybChnLnNyYyk6bi5nbG9iYWxFdmFsKChnLnRleHR8fGcudGV4dENvbnRlbnR8fGcuaW5uZXJIVE1MfHxcIlwiKS5yZXBsYWNlKHphLFwiXCIpKSk7az1lPW51bGx9cmV0dXJuIGF9ZnVuY3Rpb24gSWEoYSxiLGMpe2Zvcih2YXIgZCxlPWI/bi5maWx0ZXIoYixhKTphLGY9MDtudWxsIT0oZD1lW2ZdKTtmKyspY3x8MSE9PWQubm9kZVR5cGV8fG4uY2xlYW5EYXRhKGVhKGQpKSxkLnBhcmVudE5vZGUmJihjJiZuLmNvbnRhaW5zKGQub3duZXJEb2N1bWVudCxkKSYmZmEoZWEoZCxcInNjcmlwdFwiKSksZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGQpKTtyZXR1cm4gYX1uLmV4dGVuZCh7aHRtbFByZWZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHZhLFwiPCQxPjwvJDI+XCIpfSxjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKGwuaHRtbDVDbG9uZXx8bi5pc1hNTERvYyhhKXx8IXVhLnRlc3QoXCI8XCIrYS5ub2RlTmFtZStcIj5cIik/Zj1hLmNsb25lTm9kZSghMCk6KEJhLmlubmVySFRNTD1hLm91dGVySFRNTCxCYS5yZW1vdmVDaGlsZChmPUJhLmZpcnN0Q2hpbGQpKSwhKGwubm9DbG9uZUV2ZW50JiZsLm5vQ2xvbmVDaGVja2VkfHwxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxuLmlzWE1MRG9jKGEpKSlmb3IoZD1lYShmKSxoPWVhKGEpLGc9MDtudWxsIT0oZT1oW2ddKTsrK2cpZFtnXSYmR2EoZSxkW2ddKTtpZihiKWlmKGMpZm9yKGg9aHx8ZWEoYSksZD1kfHxlYShmKSxnPTA7bnVsbCE9KGU9aFtnXSk7ZysrKUZhKGUsZFtnXSk7ZWxzZSBGYShhLGYpO3JldHVybiBkPWVhKGYsXCJzY3JpcHRcIiksZC5sZW5ndGg+MCYmZmEoZCwhaSYmZWEoYSxcInNjcmlwdFwiKSksZD1oPWU9bnVsbCxmfSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGQsZSxmLGcsaD0wLGk9bi5leHBhbmRvLGo9bi5jYWNoZSxrPWwuYXR0cmlidXRlcyxtPW4uZXZlbnQuc3BlY2lhbDtudWxsIT0oZD1hW2hdKTtoKyspaWYoKGJ8fE0oZCkpJiYoZj1kW2ldLGc9ZiYmaltmXSkpe2lmKGcuZXZlbnRzKWZvcihlIGluIGcuZXZlbnRzKW1bZV0/bi5ldmVudC5yZW1vdmUoZCxlKTpuLnJlbW92ZUV2ZW50KGQsZSxnLmhhbmRsZSk7altmXSYmKGRlbGV0ZSBqW2ZdLGt8fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBkLnJlbW92ZUF0dHJpYnV0ZT9kW2ldPXZvaWQgMDpkLnJlbW92ZUF0dHJpYnV0ZShpKSxjLnB1c2goZikpfX19KSxuLmZuLmV4dGVuZCh7ZG9tTWFuaXA6SGEsZGV0YWNoOmZ1bmN0aW9uKGEpe3JldHVybiBJYSh0aGlzLGEsITApfSxyZW1vdmU6ZnVuY3Rpb24oYSl7cmV0dXJuIElhKHRoaXMsYSl9LHRleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFkodGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9uLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmFwcGVuZCgodGhpc1swXSYmdGhpc1swXS5vd25lckRvY3VtZW50fHxkKS5jcmVhdGVUZXh0Tm9kZShhKSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIEhhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1DYSh0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gSGEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPUNhKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gSGEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gSGEodGhpcyxhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKyl7MT09PWEubm9kZVR5cGUmJm4uY2xlYW5EYXRhKGVhKGEsITEpKTt3aGlsZShhLmZpcnN0Q2hpbGQpYS5yZW1vdmVDaGlsZChhLmZpcnN0Q2hpbGQpO2Eub3B0aW9ucyYmbi5ub2RlTmFtZShhLFwic2VsZWN0XCIpJiYoYS5vcHRpb25zLmxlbmd0aD0wKX1yZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsPT1hPyExOmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBuLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBZKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSlyZXR1cm4gMT09PWIubm9kZVR5cGU/Yi5pbm5lckhUTUwucmVwbGFjZSh0YSxcIlwiKTp2b2lkIDA7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiF3YS50ZXN0KGEpJiYobC5odG1sU2VyaWFsaXplfHwhdWEudGVzdChhKSkmJihsLmxlYWRpbmdXaGl0ZXNwYWNlfHwhYWEudGVzdChhKSkmJiFkYVsoJC5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9bi5odG1sUHJlZmlsdGVyKGEpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKGVhKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9W107cmV0dXJuIEhhKHRoaXMsYXJndW1lbnRzLGZ1bmN0aW9uKGIpe3ZhciBjPXRoaXMucGFyZW50Tm9kZTtuLmluQXJyYXkodGhpcyxhKTwwJiYobi5jbGVhbkRhdGEoZWEodGhpcykpLGMmJmMucmVwbGFjZUNoaWxkKGIsdGhpcykpfSxhKX19KSxuLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPTAsZT1bXSxmPW4oYSksaD1mLmxlbmd0aC0xO2g+PWQ7ZCsrKWM9ZD09PWg/dGhpczp0aGlzLmNsb25lKCEwKSxuKGZbZF0pW2JdKGMpLGcuYXBwbHkoZSxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEphLEthPXtIVE1MOlwiYmxvY2tcIixCT0RZOlwiYmxvY2tcIn07ZnVuY3Rpb24gTGEoYSxiKXt2YXIgYz1uKGIuY3JlYXRlRWxlbWVudChhKSkuYXBwZW5kVG8oYi5ib2R5KSxkPW4uY3NzKGNbMF0sXCJkaXNwbGF5XCIpO3JldHVybiBjLmRldGFjaCgpLGR9ZnVuY3Rpb24gTWEoYSl7dmFyIGI9ZCxjPUthW2FdO3JldHVybiBjfHwoYz1MYShhLGIpLFwibm9uZVwiIT09YyYmY3x8KEphPShKYXx8bihcIjxpZnJhbWUgZnJhbWVib3JkZXI9JzAnIHdpZHRoPScwJyBoZWlnaHQ9JzAnLz5cIikpLmFwcGVuZFRvKGIuZG9jdW1lbnRFbGVtZW50KSxiPShKYVswXS5jb250ZW50V2luZG93fHxKYVswXS5jb250ZW50RG9jdW1lbnQpLmRvY3VtZW50LGIud3JpdGUoKSxiLmNsb3NlKCksYz1MYShhLGIpLEphLmRldGFjaCgpKSxLYVthXT1jKSxjfXZhciBOYT0vXm1hcmdpbi8sT2E9bmV3IFJlZ0V4cChcIl4oXCIrVCtcIikoPyFweClbYS16JV0rJFwiLFwiaVwiKSxQYT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9e307Zm9yKGYgaW4gYilnW2ZdPWEuc3R5bGVbZl0sYS5zdHlsZVtmXT1iW2ZdO2U9Yy5hcHBseShhLGR8fFtdKTtmb3IoZiBpbiBiKWEuc3R5bGVbZl09Z1tmXTtyZXR1cm4gZX0sUWE9ZC5kb2N1bWVudEVsZW1lbnQ7IWZ1bmN0aW9uKCl7dmFyIGIsYyxlLGYsZyxoLGk9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGo9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2lmKGouc3R5bGUpe2ouc3R5bGUuY3NzVGV4dD1cImZsb2F0OmxlZnQ7b3BhY2l0eTouNVwiLGwub3BhY2l0eT1cIjAuNVwiPT09ai5zdHlsZS5vcGFjaXR5LGwuY3NzRmxvYXQ9ISFqLnN0eWxlLmNzc0Zsb2F0LGouc3R5bGUuYmFja2dyb3VuZENsaXA9XCJjb250ZW50LWJveFwiLGouY2xvbmVOb2RlKCEwKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcD1cIlwiLGwuY2xlYXJDbG9uZVN0eWxlPVwiY29udGVudC1ib3hcIj09PWouc3R5bGUuYmFja2dyb3VuZENsaXAsaT1kLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksaS5zdHlsZS5jc3NUZXh0PVwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtwYWRkaW5nOjA7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIixqLmlubmVySFRNTD1cIlwiLGkuYXBwZW5kQ2hpbGQoaiksbC5ib3hTaXppbmc9XCJcIj09PWouc3R5bGUuYm94U2l6aW5nfHxcIlwiPT09ai5zdHlsZS5Nb3pCb3hTaXppbmd8fFwiXCI9PT1qLnN0eWxlLldlYmtpdEJveFNpemluZyxuLmV4dGVuZChsLHtyZWxpYWJsZUhpZGRlbk9mZnNldHM6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YiYmaygpLGZ9LGJveFNpemluZ1JlbGlhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWImJmsoKSxlfSxwaXhlbE1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWImJmsoKSxjfSxwaXhlbFBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWImJmsoKSxifSxyZWxpYWJsZU1hcmdpblJpZ2h0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGw9PWImJmsoKSxnfSxyZWxpYWJsZU1hcmdpbkxlZnQ6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbD09YiYmaygpLGh9fSk7ZnVuY3Rpb24gaygpe3ZhciBrLGwsbT1kLmRvY3VtZW50RWxlbWVudDttLmFwcGVuZENoaWxkKGkpLGouc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO21hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7dG9wOjElO3dpZHRoOjUwJVwiLGI9ZT1oPSExLGM9Zz0hMCxhLmdldENvbXB1dGVkU3R5bGUmJihsPWEuZ2V0Q29tcHV0ZWRTdHlsZShqKSxiPVwiMSVcIiE9PShsfHx7fSkudG9wLGg9XCIycHhcIj09PShsfHx7fSkubWFyZ2luTGVmdCxlPVwiNHB4XCI9PT0obHx8e3dpZHRoOlwiNHB4XCJ9KS53aWR0aCxqLnN0eWxlLm1hcmdpblJpZ2h0PVwiNTAlXCIsYz1cIjRweFwiPT09KGx8fHttYXJnaW5SaWdodDpcIjRweFwifSkubWFyZ2luUmlnaHQsaz1qLmFwcGVuZENoaWxkKGQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksay5zdHlsZS5jc3NUZXh0PWouc3R5bGUuY3NzVGV4dD1cIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MFwiLGsuc3R5bGUubWFyZ2luUmlnaHQ9ay5zdHlsZS53aWR0aD1cIjBcIixqLnN0eWxlLndpZHRoPVwiMXB4XCIsZz0hcGFyc2VGbG9hdCgoYS5nZXRDb21wdXRlZFN0eWxlKGspfHx7fSkubWFyZ2luUmlnaHQpLGoucmVtb3ZlQ2hpbGQoaykpLGouc3R5bGUuZGlzcGxheT1cIm5vbmVcIixmPTA9PT1qLmdldENsaWVudFJlY3RzKCkubGVuZ3RoLGYmJihqLnN0eWxlLmRpc3BsYXk9XCJcIixqLmlubmVySFRNTD1cIjx0YWJsZT48dHI+PHRkPjwvdGQ+PHRkPnQ8L3RkPjwvdHI+PC90YWJsZT5cIixqLmNoaWxkTm9kZXNbMF0uc3R5bGUuYm9yZGVyQ29sbGFwc2U9XCJzZXBhcmF0ZVwiLGs9ai5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRkXCIpLGtbMF0uc3R5bGUuY3NzVGV4dD1cIm1hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MDtkaXNwbGF5Om5vbmVcIixmPTA9PT1rWzBdLm9mZnNldEhlaWdodCxmJiYoa1swXS5zdHlsZS5kaXNwbGF5PVwiXCIsa1sxXS5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLGY9MD09PWtbMF0ub2Zmc2V0SGVpZ2h0KSksbS5yZW1vdmVDaGlsZChpKX19fSgpO3ZhciBSYSxTYSxUYT0vXih0b3B8cmlnaHR8Ym90dG9tfGxlZnQpJC87YS5nZXRDb21wdXRlZFN0eWxlPyhSYT1mdW5jdGlvbihiKXt2YXIgYz1iLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7cmV0dXJuIGMmJmMub3BlbmVyfHwoYz1hKSxjLmdldENvbXB1dGVkU3R5bGUoYil9LFNhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuc3R5bGU7cmV0dXJuIGM9Y3x8UmEoYSksZz1jP2MuZ2V0UHJvcGVydHlWYWx1ZShiKXx8Y1tiXTp2b2lkIDAsXCJcIiE9PWcmJnZvaWQgMCE9PWd8fG4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpfHwoZz1uLnN0eWxlKGEsYikpLGMmJiFsLnBpeGVsTWFyZ2luUmlnaHQoKSYmT2EudGVzdChnKSYmTmEudGVzdChiKSYmKGQ9aC53aWR0aCxlPWgubWluV2lkdGgsZj1oLm1heFdpZHRoLGgubWluV2lkdGg9aC5tYXhXaWR0aD1oLndpZHRoPWcsZz1jLndpZHRoLGgud2lkdGg9ZCxoLm1pbldpZHRoPWUsaC5tYXhXaWR0aD1mKSx2b2lkIDA9PT1nP2c6ZytcIlwifSk6UWEuY3VycmVudFN0eWxlJiYoUmE9ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY3VycmVudFN0eWxlfSxTYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLnN0eWxlO3JldHVybiBjPWN8fFJhKGEpLGc9Yz9jW2JdOnZvaWQgMCxudWxsPT1nJiZoJiZoW2JdJiYoZz1oW2JdKSxPYS50ZXN0KGcpJiYhVGEudGVzdChiKSYmKGQ9aC5sZWZ0LGU9YS5ydW50aW1lU3R5bGUsZj1lJiZlLmxlZnQsZiYmKGUubGVmdD1hLmN1cnJlbnRTdHlsZS5sZWZ0KSxoLmxlZnQ9XCJmb250U2l6ZVwiPT09Yj9cIjFlbVwiOmcsZz1oLnBpeGVsTGVmdCtcInB4XCIsaC5sZWZ0PWQsZiYmKGUubGVmdD1mKSksdm9pZCAwPT09Zz9nOmcrXCJcInx8XCJhdXRvXCJ9KTtmdW5jdGlvbiBVYShhLGIpe3JldHVybntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gYSgpP3ZvaWQgZGVsZXRlIHRoaXMuZ2V0Oih0aGlzLmdldD1iKS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9fX12YXIgVmE9L2FscGhhXFwoW14pXSpcXCkvaSxXYT0vb3BhY2l0eVxccyo9XFxzKihbXildKikvaSxYYT0vXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sWWE9bmV3IFJlZ0V4cChcIl4oXCIrVCtcIikoLiopJFwiLFwiaVwiKSxaYT17cG9zaXRpb246XCJhYnNvbHV0ZVwiLHZpc2liaWxpdHk6XCJoaWRkZW5cIixkaXNwbGF5OlwiYmxvY2tcIn0sJGE9e2xldHRlclNwYWNpbmc6XCIwXCIsZm9udFdlaWdodDpcIjQwMFwifSxfYT1bXCJXZWJraXRcIixcIk9cIixcIk1velwiLFwibXNcIl0sYWI9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO2Z1bmN0aW9uIGJiKGEpe2lmKGEgaW4gYWIpcmV0dXJuIGE7dmFyIGI9YS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnNsaWNlKDEpLGM9X2EubGVuZ3RoO3doaWxlKGMtLSlpZihhPV9hW2NdK2IsYSBpbiBhYilyZXR1cm4gYX1mdW5jdGlvbiBjYihhLGIpe2Zvcih2YXIgYyxkLGUsZj1bXSxnPTAsaD1hLmxlbmd0aDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoZltnXT1uLl9kYXRhKGQsXCJvbGRkaXNwbGF5XCIpLGM9ZC5zdHlsZS5kaXNwbGF5LGI/KGZbZ118fFwibm9uZVwiIT09Y3x8KGQuc3R5bGUuZGlzcGxheT1cIlwiKSxcIlwiPT09ZC5zdHlsZS5kaXNwbGF5JiZXKGQpJiYoZltnXT1uLl9kYXRhKGQsXCJvbGRkaXNwbGF5XCIsTWEoZC5ub2RlTmFtZSkpKSk6KGU9VyhkKSwoYyYmXCJub25lXCIhPT1jfHwhZSkmJm4uX2RhdGEoZCxcIm9sZGRpc3BsYXlcIixlP2M6bi5jc3MoZCxcImRpc3BsYXlcIikpKSk7Zm9yKGc9MDtoPmc7ZysrKWQ9YVtnXSxkLnN0eWxlJiYoYiYmXCJub25lXCIhPT1kLnN0eWxlLmRpc3BsYXkmJlwiXCIhPT1kLnN0eWxlLmRpc3BsYXl8fChkLnN0eWxlLmRpc3BsYXk9Yj9mW2ddfHxcIlwiOlwibm9uZVwiKSk7cmV0dXJuIGF9ZnVuY3Rpb24gZGIoYSxiLGMpe3ZhciBkPVlhLmV4ZWMoYik7cmV0dXJuIGQ/TWF0aC5tYXgoMCxkWzFdLShjfHwwKSkrKGRbMl18fFwicHhcIik6Yn1mdW5jdGlvbiBlYihhLGIsYyxkLGUpe2Zvcih2YXIgZj1jPT09KGQ/XCJib3JkZXJcIjpcImNvbnRlbnRcIik/NDpcIndpZHRoXCI9PT1iPzE6MCxnPTA7ND5mO2YrPTIpXCJtYXJnaW5cIj09PWMmJihnKz1uLmNzcyhhLGMrVltmXSwhMCxlKSksZD8oXCJjb250ZW50XCI9PT1jJiYoZy09bi5jc3MoYSxcInBhZGRpbmdcIitWW2ZdLCEwLGUpKSxcIm1hcmdpblwiIT09YyYmKGctPW4uY3NzKGEsXCJib3JkZXJcIitWW2ZdK1wiV2lkdGhcIiwhMCxlKSkpOihnKz1uLmNzcyhhLFwicGFkZGluZ1wiK1ZbZl0sITAsZSksXCJwYWRkaW5nXCIhPT1jJiYoZys9bi5jc3MoYSxcImJvcmRlclwiK1ZbZl0rXCJXaWR0aFwiLCEwLGUpKSk7cmV0dXJuIGd9ZnVuY3Rpb24gZmIoYSxiLGMpe3ZhciBkPSEwLGU9XCJ3aWR0aFwiPT09Yj9hLm9mZnNldFdpZHRoOmEub2Zmc2V0SGVpZ2h0LGY9UmEoYSksZz1sLmJveFNpemluZyYmXCJib3JkZXItYm94XCI9PT1uLmNzcyhhLFwiYm94U2l6aW5nXCIsITEsZik7aWYoMD49ZXx8bnVsbD09ZSl7aWYoZT1TYShhLGIsZiksKDA+ZXx8bnVsbD09ZSkmJihlPWEuc3R5bGVbYl0pLE9hLnRlc3QoZSkpcmV0dXJuIGU7ZD1nJiYobC5ib3hTaXppbmdSZWxpYWJsZSgpfHxlPT09YS5zdHlsZVtiXSksZT1wYXJzZUZsb2F0KGUpfHwwfXJldHVybiBlK2ViKGEsYixjfHwoZz9cImJvcmRlclwiOlwiY29udGVudFwiKSxkLGYpK1wicHhcIn1uLmV4dGVuZCh7Y3NzSG9va3M6e29wYWNpdHk6e2dldDpmdW5jdGlvbihhLGIpe2lmKGIpe3ZhciBjPVNhKGEsXCJvcGFjaXR5XCIpO3JldHVyblwiXCI9PT1jP1wiMVwiOmN9fX19LGNzc051bWJlcjp7YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6ITAsY29sdW1uQ291bnQ6ITAsZmlsbE9wYWNpdHk6ITAsZmxleEdyb3c6ITAsZmxleFNocmluazohMCxmb250V2VpZ2h0OiEwLGxpbmVIZWlnaHQ6ITAsb3BhY2l0eTohMCxvcmRlcjohMCxvcnBoYW5zOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMH0sY3NzUHJvcHM6e1wiZmxvYXRcIjpsLmNzc0Zsb2F0P1wiY3NzRmxvYXRcIjpcInN0eWxlRmxvYXRcIn0sc3R5bGU6ZnVuY3Rpb24oYSxiLGMsZCl7aWYoYSYmMyE9PWEubm9kZVR5cGUmJjghPT1hLm5vZGVUeXBlJiZhLnN0eWxlKXt2YXIgZSxmLGcsaD1uLmNhbWVsQ2FzZShiKSxpPWEuc3R5bGU7aWYoYj1uLmNzc1Byb3BzW2hdfHwobi5jc3NQcm9wc1toXT1iYihoKXx8aCksZz1uLmNzc0hvb2tzW2JdfHxuLmNzc0hvb2tzW2hdLHZvaWQgMD09PWMpcmV0dXJuIGcmJlwiZ2V0XCJpbiBnJiZ2b2lkIDAhPT0oZT1nLmdldChhLCExLGQpKT9lOmlbYl07aWYoZj10eXBlb2YgYyxcInN0cmluZ1wiPT09ZiYmKGU9VS5leGVjKGMpKSYmZVsxXSYmKGM9WChhLGIsZSksZj1cIm51bWJlclwiKSxudWxsIT1jJiZjPT09YyYmKFwibnVtYmVyXCI9PT1mJiYoYys9ZSYmZVszXXx8KG4uY3NzTnVtYmVyW2hdP1wiXCI6XCJweFwiKSksbC5jbGVhckNsb25lU3R5bGV8fFwiXCIhPT1jfHwwIT09Yi5pbmRleE9mKFwiYmFja2dyb3VuZFwiKXx8KGlbYl09XCJpbmhlcml0XCIpLCEoZyYmXCJzZXRcImluIGcmJnZvaWQgMD09PShjPWcuc2V0KGEsYyxkKSkpKSl0cnl7aVtiXT1jfWNhdGNoKGope319fSxjc3M6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGg9bi5jYW1lbENhc2UoYik7cmV0dXJuIGI9bi5jc3NQcm9wc1toXXx8KG4uY3NzUHJvcHNbaF09YmIoaCl8fGgpLGc9bi5jc3NIb29rc1tiXXx8bi5jc3NIb29rc1toXSxnJiZcImdldFwiaW4gZyYmKGY9Zy5nZXQoYSwhMCxjKSksdm9pZCAwPT09ZiYmKGY9U2EoYSxiLGQpKSxcIm5vcm1hbFwiPT09ZiYmYiBpbiAkYSYmKGY9JGFbYl0pLFwiXCI9PT1jfHxjPyhlPXBhcnNlRmxvYXQoZiksYz09PSEwfHxpc0Zpbml0ZShlKT9lfHwwOmYpOmZ9fSksbi5lYWNoKFtcImhlaWdodFwiLFwid2lkdGhcIl0sZnVuY3Rpb24oYSxiKXtuLmNzc0hvb2tzW2JdPXtnZXQ6ZnVuY3Rpb24oYSxjLGQpe3JldHVybiBjP1hhLnRlc3Qobi5jc3MoYSxcImRpc3BsYXlcIikpJiYwPT09YS5vZmZzZXRXaWR0aD9QYShhLFphLGZ1bmN0aW9uKCl7cmV0dXJuIGZiKGEsYixkKX0pOmZiKGEsYixkKTp2b2lkIDB9LHNldDpmdW5jdGlvbihhLGMsZCl7dmFyIGU9ZCYmUmEoYSk7cmV0dXJuIGRiKGEsYyxkP2ViKGEsYixkLGwuYm94U2l6aW5nJiZcImJvcmRlci1ib3hcIj09PW4uY3NzKGEsXCJib3hTaXppbmdcIiwhMSxlKSxlKTowKX19fSksbC5vcGFjaXR5fHwobi5jc3NIb29rcy5vcGFjaXR5PXtnZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gV2EudGVzdCgoYiYmYS5jdXJyZW50U3R5bGU/YS5jdXJyZW50U3R5bGUuZmlsdGVyOmEuc3R5bGUuZmlsdGVyKXx8XCJcIik/LjAxKnBhcnNlRmxvYXQoUmVnRXhwLiQxKStcIlwiOmI/XCIxXCI6XCJcIn0sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9YS5zdHlsZSxkPWEuY3VycmVudFN0eWxlLGU9bi5pc051bWVyaWMoYik/XCJhbHBoYShvcGFjaXR5PVwiKzEwMCpiK1wiKVwiOlwiXCIsZj1kJiZkLmZpbHRlcnx8Yy5maWx0ZXJ8fFwiXCI7Yy56b29tPTEsKGI+PTF8fFwiXCI9PT1iKSYmXCJcIj09PW4udHJpbShmLnJlcGxhY2UoVmEsXCJcIikpJiZjLnJlbW92ZUF0dHJpYnV0ZSYmKGMucmVtb3ZlQXR0cmlidXRlKFwiZmlsdGVyXCIpLFwiXCI9PT1ifHxkJiYhZC5maWx0ZXIpfHwoYy5maWx0ZXI9VmEudGVzdChmKT9mLnJlcGxhY2UoVmEsZSk6ZitcIiBcIitlKX19KSxuLmNzc0hvb2tzLm1hcmdpblJpZ2h0PVVhKGwucmVsaWFibGVNYXJnaW5SaWdodCxmdW5jdGlvbihhLGIpe3JldHVybiBiP1BhKGEse2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn0sU2EsW2EsXCJtYXJnaW5SaWdodFwiXSk6dm9pZCAwfSksbi5jc3NIb29rcy5tYXJnaW5MZWZ0PVVhKGwucmVsaWFibGVNYXJnaW5MZWZ0LGZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/KHBhcnNlRmxvYXQoU2EoYSxcIm1hcmdpbkxlZnRcIikpfHwobi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk/YS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0LVBhKGEse1xubWFyZ2luTGVmdDowfSxmdW5jdGlvbigpe3JldHVybiBhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnR9KTowKSkrXCJweFwiOnZvaWQgMH0pLG4uZWFjaCh7bWFyZ2luOlwiXCIscGFkZGluZzpcIlwiLGJvcmRlcjpcIldpZHRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5jc3NIb29rc1thK2JdPXtleHBhbmQ6ZnVuY3Rpb24oYyl7Zm9yKHZhciBkPTAsZT17fSxmPVwic3RyaW5nXCI9PXR5cGVvZiBjP2Muc3BsaXQoXCIgXCIpOltjXTs0PmQ7ZCsrKWVbYStWW2RdK2JdPWZbZF18fGZbZC0yXXx8ZlswXTtyZXR1cm4gZX19LE5hLnRlc3QoYSl8fChuLmNzc0hvb2tzW2ErYl0uc2V0PWRiKX0pLG4uZm4uZXh0ZW5kKHtjc3M6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gWSh0aGlzLGZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9e30sZz0wO2lmKG4uaXNBcnJheShiKSl7Zm9yKGQ9UmEoYSksZT1iLmxlbmd0aDtlPmc7ZysrKWZbYltnXV09bi5jc3MoYSxiW2ddLCExLGQpO3JldHVybiBmfXJldHVybiB2b2lkIDAhPT1jP24uc3R5bGUoYSxiLGMpOm4uY3NzKGEsYil9LGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxzaG93OmZ1bmN0aW9uKCl7cmV0dXJuIGNiKHRoaXMsITApfSxoaWRlOmZ1bmN0aW9uKCl7cmV0dXJuIGNiKHRoaXMpfSx0b2dnbGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBhP2E/dGhpcy5zaG93KCk6dGhpcy5oaWRlKCk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7Vyh0aGlzKT9uKHRoaXMpLnNob3coKTpuKHRoaXMpLmhpZGUoKX0pfX0pO2Z1bmN0aW9uIGdiKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBnYi5wcm90b3R5cGUuaW5pdChhLGIsYyxkLGUpfW4uVHdlZW49Z2IsZ2IucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpnYixpbml0OmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt0aGlzLmVsZW09YSx0aGlzLnByb3A9Yyx0aGlzLmVhc2luZz1lfHxuLmVhc2luZy5fZGVmYXVsdCx0aGlzLm9wdGlvbnM9Yix0aGlzLnN0YXJ0PXRoaXMubm93PXRoaXMuY3VyKCksdGhpcy5lbmQ9ZCx0aGlzLnVuaXQ9Znx8KG4uY3NzTnVtYmVyW2NdP1wiXCI6XCJweFwiKX0sY3VyOmZ1bmN0aW9uKCl7dmFyIGE9Z2IucHJvcEhvb2tzW3RoaXMucHJvcF07cmV0dXJuIGEmJmEuZ2V0P2EuZ2V0KHRoaXMpOmdiLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyl9LHJ1bjpmdW5jdGlvbihhKXt2YXIgYixjPWdiLnByb3BIb29rc1t0aGlzLnByb3BdO3JldHVybiB0aGlzLm9wdGlvbnMuZHVyYXRpb24/dGhpcy5wb3M9Yj1uLmVhc2luZ1t0aGlzLmVhc2luZ10oYSx0aGlzLm9wdGlvbnMuZHVyYXRpb24qYSwwLDEsdGhpcy5vcHRpb25zLmR1cmF0aW9uKTp0aGlzLnBvcz1iPWEsdGhpcy5ub3c9KHRoaXMuZW5kLXRoaXMuc3RhcnQpKmIrdGhpcy5zdGFydCx0aGlzLm9wdGlvbnMuc3RlcCYmdGhpcy5vcHRpb25zLnN0ZXAuY2FsbCh0aGlzLmVsZW0sdGhpcy5ub3csdGhpcyksYyYmYy5zZXQ/Yy5zZXQodGhpcyk6Z2IucHJvcEhvb2tzLl9kZWZhdWx0LnNldCh0aGlzKSx0aGlzfX0sZ2IucHJvdG90eXBlLmluaXQucHJvdG90eXBlPWdiLnByb3RvdHlwZSxnYi5wcm9wSG9va3M9e19kZWZhdWx0OntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIDEhPT1hLmVsZW0ubm9kZVR5cGV8fG51bGwhPWEuZWxlbVthLnByb3BdJiZudWxsPT1hLmVsZW0uc3R5bGVbYS5wcm9wXT9hLmVsZW1bYS5wcm9wXTooYj1uLmNzcyhhLmVsZW0sYS5wcm9wLFwiXCIpLGImJlwiYXV0b1wiIT09Yj9iOjApfSxzZXQ6ZnVuY3Rpb24oYSl7bi5meC5zdGVwW2EucHJvcF0/bi5meC5zdGVwW2EucHJvcF0oYSk6MSE9PWEuZWxlbS5ub2RlVHlwZXx8bnVsbD09YS5lbGVtLnN0eWxlW24uY3NzUHJvcHNbYS5wcm9wXV0mJiFuLmNzc0hvb2tzW2EucHJvcF0/YS5lbGVtW2EucHJvcF09YS5ub3c6bi5zdHlsZShhLmVsZW0sYS5wcm9wLGEubm93K2EudW5pdCl9fX0sZ2IucHJvcEhvb2tzLnNjcm9sbFRvcD1nYi5wcm9wSG9va3Muc2Nyb2xsTGVmdD17c2V0OmZ1bmN0aW9uKGEpe2EuZWxlbS5ub2RlVHlwZSYmYS5lbGVtLnBhcmVudE5vZGUmJihhLmVsZW1bYS5wcm9wXT1hLm5vdyl9fSxuLmVhc2luZz17bGluZWFyOmZ1bmN0aW9uKGEpe3JldHVybiBhfSxzd2luZzpmdW5jdGlvbihhKXtyZXR1cm4uNS1NYXRoLmNvcyhhKk1hdGguUEkpLzJ9LF9kZWZhdWx0Olwic3dpbmdcIn0sbi5meD1nYi5wcm90b3R5cGUuaW5pdCxuLmZ4LnN0ZXA9e307dmFyIGhiLGliLGpiPS9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxrYj0vcXVldWVIb29rcyQvO2Z1bmN0aW9uIGxiKCl7cmV0dXJuIGEuc2V0VGltZW91dChmdW5jdGlvbigpe2hiPXZvaWQgMH0pLGhiPW4ubm93KCl9ZnVuY3Rpb24gbWIoYSxiKXt2YXIgYyxkPXtoZWlnaHQ6YX0sZT0wO2ZvcihiPWI/MTowOzQ+ZTtlKz0yLWIpYz1WW2VdLGRbXCJtYXJnaW5cIitjXT1kW1wicGFkZGluZ1wiK2NdPWE7cmV0dXJuIGImJihkLm9wYWNpdHk9ZC53aWR0aD1hKSxkfWZ1bmN0aW9uIG5iKGEsYixjKXtmb3IodmFyIGQsZT0ocWIudHdlZW5lcnNbYl18fFtdKS5jb25jYXQocWIudHdlZW5lcnNbXCIqXCJdKSxmPTAsZz1lLmxlbmd0aDtnPmY7ZisrKWlmKGQ9ZVtmXS5jYWxsKGMsYixhKSlyZXR1cm4gZH1mdW5jdGlvbiBvYihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosayxtPXRoaXMsbz17fSxwPWEuc3R5bGUscT1hLm5vZGVUeXBlJiZXKGEpLHI9bi5fZGF0YShhLFwiZnhzaG93XCIpO2MucXVldWV8fChoPW4uX3F1ZXVlSG9va3MoYSxcImZ4XCIpLG51bGw9PWgudW5xdWV1ZWQmJihoLnVucXVldWVkPTAsaT1oLmVtcHR5LmZpcmUsaC5lbXB0eS5maXJlPWZ1bmN0aW9uKCl7aC51bnF1ZXVlZHx8aSgpfSksaC51bnF1ZXVlZCsrLG0uYWx3YXlzKGZ1bmN0aW9uKCl7bS5hbHdheXMoZnVuY3Rpb24oKXtoLnVucXVldWVkLS0sbi5xdWV1ZShhLFwiZnhcIikubGVuZ3RofHxoLmVtcHR5LmZpcmUoKX0pfSkpLDE9PT1hLm5vZGVUeXBlJiYoXCJoZWlnaHRcImluIGJ8fFwid2lkdGhcImluIGIpJiYoYy5vdmVyZmxvdz1bcC5vdmVyZmxvdyxwLm92ZXJmbG93WCxwLm92ZXJmbG93WV0saj1uLmNzcyhhLFwiZGlzcGxheVwiKSxrPVwibm9uZVwiPT09aj9uLl9kYXRhKGEsXCJvbGRkaXNwbGF5XCIpfHxNYShhLm5vZGVOYW1lKTpqLFwiaW5saW5lXCI9PT1rJiZcIm5vbmVcIj09PW4uY3NzKGEsXCJmbG9hdFwiKSYmKGwuaW5saW5lQmxvY2tOZWVkc0xheW91dCYmXCJpbmxpbmVcIiE9PU1hKGEubm9kZU5hbWUpP3Auem9vbT0xOnAuZGlzcGxheT1cImlubGluZS1ibG9ja1wiKSksYy5vdmVyZmxvdyYmKHAub3ZlcmZsb3c9XCJoaWRkZW5cIixsLnNocmlua1dyYXBCbG9ja3MoKXx8bS5hbHdheXMoZnVuY3Rpb24oKXtwLm92ZXJmbG93PWMub3ZlcmZsb3dbMF0scC5vdmVyZmxvd1g9Yy5vdmVyZmxvd1sxXSxwLm92ZXJmbG93WT1jLm92ZXJmbG93WzJdfSkpO2ZvcihkIGluIGIpaWYoZT1iW2RdLGpiLmV4ZWMoZSkpe2lmKGRlbGV0ZSBiW2RdLGY9Znx8XCJ0b2dnbGVcIj09PWUsZT09PShxP1wiaGlkZVwiOlwic2hvd1wiKSl7aWYoXCJzaG93XCIhPT1lfHwhcnx8dm9pZCAwPT09cltkXSljb250aW51ZTtxPSEwfW9bZF09ciYmcltkXXx8bi5zdHlsZShhLGQpfWVsc2Ugaj12b2lkIDA7aWYobi5pc0VtcHR5T2JqZWN0KG8pKVwiaW5saW5lXCI9PT0oXCJub25lXCI9PT1qP01hKGEubm9kZU5hbWUpOmopJiYocC5kaXNwbGF5PWopO2Vsc2V7cj9cImhpZGRlblwiaW4gciYmKHE9ci5oaWRkZW4pOnI9bi5fZGF0YShhLFwiZnhzaG93XCIse30pLGYmJihyLmhpZGRlbj0hcSkscT9uKGEpLnNob3coKTptLmRvbmUoZnVuY3Rpb24oKXtuKGEpLmhpZGUoKX0pLG0uZG9uZShmdW5jdGlvbigpe3ZhciBiO24uX3JlbW92ZURhdGEoYSxcImZ4c2hvd1wiKTtmb3IoYiBpbiBvKW4uc3R5bGUoYSxiLG9bYl0pfSk7Zm9yKGQgaW4gbylnPW5iKHE/cltkXTowLGQsbSksZCBpbiByfHwocltkXT1nLnN0YXJ0LHEmJihnLmVuZD1nLnN0YXJ0LGcuc3RhcnQ9XCJ3aWR0aFwiPT09ZHx8XCJoZWlnaHRcIj09PWQ/MTowKSl9fWZ1bmN0aW9uIHBiKGEsYil7dmFyIGMsZCxlLGYsZztmb3IoYyBpbiBhKWlmKGQ9bi5jYW1lbENhc2UoYyksZT1iW2RdLGY9YVtjXSxuLmlzQXJyYXkoZikmJihlPWZbMV0sZj1hW2NdPWZbMF0pLGMhPT1kJiYoYVtkXT1mLGRlbGV0ZSBhW2NdKSxnPW4uY3NzSG9va3NbZF0sZyYmXCJleHBhbmRcImluIGcpe2Y9Zy5leHBhbmQoZiksZGVsZXRlIGFbZF07Zm9yKGMgaW4gZiljIGluIGF8fChhW2NdPWZbY10sYltjXT1lKX1lbHNlIGJbZF09ZX1mdW5jdGlvbiBxYihhLGIsYyl7dmFyIGQsZSxmPTAsZz1xYi5wcmVmaWx0ZXJzLmxlbmd0aCxoPW4uRGVmZXJyZWQoKS5hbHdheXMoZnVuY3Rpb24oKXtkZWxldGUgaS5lbGVtfSksaT1mdW5jdGlvbigpe2lmKGUpcmV0dXJuITE7Zm9yKHZhciBiPWhifHxsYigpLGM9TWF0aC5tYXgoMCxqLnN0YXJ0VGltZStqLmR1cmF0aW9uLWIpLGQ9Yy9qLmR1cmF0aW9ufHwwLGY9MS1kLGc9MCxpPWoudHdlZW5zLmxlbmd0aDtpPmc7ZysrKWoudHdlZW5zW2ddLnJ1bihmKTtyZXR1cm4gaC5ub3RpZnlXaXRoKGEsW2osZixjXSksMT5mJiZpP2M6KGgucmVzb2x2ZVdpdGgoYSxbal0pLCExKX0saj1oLnByb21pc2Uoe2VsZW06YSxwcm9wczpuLmV4dGVuZCh7fSxiKSxvcHRzOm4uZXh0ZW5kKCEwLHtzcGVjaWFsRWFzaW5nOnt9LGVhc2luZzpuLmVhc2luZy5fZGVmYXVsdH0sYyksb3JpZ2luYWxQcm9wZXJ0aWVzOmIsb3JpZ2luYWxPcHRpb25zOmMsc3RhcnRUaW1lOmhifHxsYigpLGR1cmF0aW9uOmMuZHVyYXRpb24sdHdlZW5zOltdLGNyZWF0ZVR3ZWVuOmZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi5Ud2VlbihhLGoub3B0cyxiLGMsai5vcHRzLnNwZWNpYWxFYXNpbmdbYl18fGoub3B0cy5lYXNpbmcpO3JldHVybiBqLnR3ZWVucy5wdXNoKGQpLGR9LHN0b3A6ZnVuY3Rpb24oYil7dmFyIGM9MCxkPWI/ai50d2VlbnMubGVuZ3RoOjA7aWYoZSlyZXR1cm4gdGhpcztmb3IoZT0hMDtkPmM7YysrKWoudHdlZW5zW2NdLnJ1bigxKTtyZXR1cm4gYj8oaC5ub3RpZnlXaXRoKGEsW2osMSwwXSksaC5yZXNvbHZlV2l0aChhLFtqLGJdKSk6aC5yZWplY3RXaXRoKGEsW2osYl0pLHRoaXN9fSksaz1qLnByb3BzO2ZvcihwYihrLGoub3B0cy5zcGVjaWFsRWFzaW5nKTtnPmY7ZisrKWlmKGQ9cWIucHJlZmlsdGVyc1tmXS5jYWxsKGosYSxrLGoub3B0cykpcmV0dXJuIG4uaXNGdW5jdGlvbihkLnN0b3ApJiYobi5fcXVldWVIb29rcyhqLmVsZW0sai5vcHRzLnF1ZXVlKS5zdG9wPW4ucHJveHkoZC5zdG9wLGQpKSxkO3JldHVybiBuLm1hcChrLG5iLGopLG4uaXNGdW5jdGlvbihqLm9wdHMuc3RhcnQpJiZqLm9wdHMuc3RhcnQuY2FsbChhLGopLG4uZngudGltZXIobi5leHRlbmQoaSx7ZWxlbTphLGFuaW06aixxdWV1ZTpqLm9wdHMucXVldWV9KSksai5wcm9ncmVzcyhqLm9wdHMucHJvZ3Jlc3MpLmRvbmUoai5vcHRzLmRvbmUsai5vcHRzLmNvbXBsZXRlKS5mYWlsKGoub3B0cy5mYWlsKS5hbHdheXMoai5vcHRzLmFsd2F5cyl9bi5BbmltYXRpb249bi5leHRlbmQocWIse3R3ZWVuZXJzOntcIipcIjpbZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNyZWF0ZVR3ZWVuKGEsYik7cmV0dXJuIFgoYy5lbGVtLGEsVS5leGVjKGIpLGMpLGN9XX0sdHdlZW5lcjpmdW5jdGlvbihhLGIpe24uaXNGdW5jdGlvbihhKT8oYj1hLGE9W1wiKlwiXSk6YT1hLm1hdGNoKEcpO2Zvcih2YXIgYyxkPTAsZT1hLmxlbmd0aDtlPmQ7ZCsrKWM9YVtkXSxxYi50d2VlbmVyc1tjXT1xYi50d2VlbmVyc1tjXXx8W10scWIudHdlZW5lcnNbY10udW5zaGlmdChiKX0scHJlZmlsdGVyczpbb2JdLHByZWZpbHRlcjpmdW5jdGlvbihhLGIpe2I/cWIucHJlZmlsdGVycy51bnNoaWZ0KGEpOnFiLnByZWZpbHRlcnMucHVzaChhKX19KSxuLnNwZWVkPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hJiZcIm9iamVjdFwiPT10eXBlb2YgYT9uLmV4dGVuZCh7fSxhKTp7Y29tcGxldGU6Y3x8IWMmJmJ8fG4uaXNGdW5jdGlvbihhKSYmYSxkdXJhdGlvbjphLGVhc2luZzpjJiZifHxiJiYhbi5pc0Z1bmN0aW9uKGIpJiZifTtyZXR1cm4gZC5kdXJhdGlvbj1uLmZ4Lm9mZj8wOlwibnVtYmVyXCI9PXR5cGVvZiBkLmR1cmF0aW9uP2QuZHVyYXRpb246ZC5kdXJhdGlvbiBpbiBuLmZ4LnNwZWVkcz9uLmZ4LnNwZWVkc1tkLmR1cmF0aW9uXTpuLmZ4LnNwZWVkcy5fZGVmYXVsdCxudWxsIT1kLnF1ZXVlJiZkLnF1ZXVlIT09ITB8fChkLnF1ZXVlPVwiZnhcIiksZC5vbGQ9ZC5jb21wbGV0ZSxkLmNvbXBsZXRlPWZ1bmN0aW9uKCl7bi5pc0Z1bmN0aW9uKGQub2xkKSYmZC5vbGQuY2FsbCh0aGlzKSxkLnF1ZXVlJiZuLmRlcXVldWUodGhpcyxkLnF1ZXVlKX0sZH0sbi5mbi5leHRlbmQoe2ZhZGVUbzpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5maWx0ZXIoVykuY3NzKFwib3BhY2l0eVwiLDApLnNob3coKS5lbmQoKS5hbmltYXRlKHtvcGFjaXR5OmJ9LGEsYyxkKX0sYW5pbWF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmlzRW1wdHlPYmplY3QoYSksZj1uLnNwZWVkKGIsYyxkKSxnPWZ1bmN0aW9uKCl7dmFyIGI9cWIodGhpcyxuLmV4dGVuZCh7fSxhKSxmKTsoZXx8bi5fZGF0YSh0aGlzLFwiZmluaXNoXCIpKSYmYi5zdG9wKCEwKX07cmV0dXJuIGcuZmluaXNoPWcsZXx8Zi5xdWV1ZT09PSExP3RoaXMuZWFjaChnKTp0aGlzLnF1ZXVlKGYucXVldWUsZyl9LHN0b3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWEuc3RvcDtkZWxldGUgYS5zdG9wLGIoYyl9O3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYz1iLGI9YSxhPXZvaWQgMCksYiYmYSE9PSExJiZ0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9ITAsZT1udWxsIT1hJiZhK1wicXVldWVIb29rc1wiLGY9bi50aW1lcnMsZz1uLl9kYXRhKHRoaXMpO2lmKGUpZ1tlXSYmZ1tlXS5zdG9wJiZkKGdbZV0pO2Vsc2UgZm9yKGUgaW4gZylnW2VdJiZnW2VdLnN0b3AmJmtiLnRlc3QoZSkmJmQoZ1tlXSk7Zm9yKGU9Zi5sZW5ndGg7ZS0tOylmW2VdLmVsZW0hPT10aGlzfHxudWxsIT1hJiZmW2VdLnF1ZXVlIT09YXx8KGZbZV0uYW5pbS5zdG9wKGMpLGI9ITEsZi5zcGxpY2UoZSwxKSk7IWImJmN8fG4uZGVxdWV1ZSh0aGlzLGEpfSl9LGZpbmlzaDpmdW5jdGlvbihhKXtyZXR1cm4gYSE9PSExJiYoYT1hfHxcImZ4XCIpLHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBiLGM9bi5fZGF0YSh0aGlzKSxkPWNbYStcInF1ZXVlXCJdLGU9Y1thK1wicXVldWVIb29rc1wiXSxmPW4udGltZXJzLGc9ZD9kLmxlbmd0aDowO2ZvcihjLmZpbmlzaD0hMCxuLnF1ZXVlKHRoaXMsYSxbXSksZSYmZS5zdG9wJiZlLnN0b3AuY2FsbCh0aGlzLCEwKSxiPWYubGVuZ3RoO2ItLTspZltiXS5lbGVtPT09dGhpcyYmZltiXS5xdWV1ZT09PWEmJihmW2JdLmFuaW0uc3RvcCghMCksZi5zcGxpY2UoYiwxKSk7Zm9yKGI9MDtnPmI7YisrKWRbYl0mJmRbYl0uZmluaXNoJiZkW2JdLmZpbmlzaC5jYWxsKHRoaXMpO2RlbGV0ZSBjLmZpbmlzaH0pfX0pLG4uZWFjaChbXCJ0b2dnbGVcIixcInNob3dcIixcImhpZGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYz1uLmZuW2JdO24uZm5bYl09ZnVuY3Rpb24oYSxkLGUpe3JldHVybiBudWxsPT1hfHxcImJvb2xlYW5cIj09dHlwZW9mIGE/Yy5hcHBseSh0aGlzLGFyZ3VtZW50cyk6dGhpcy5hbmltYXRlKG1iKGIsITApLGEsZCxlKX19KSxuLmVhY2goe3NsaWRlRG93bjptYihcInNob3dcIiksc2xpZGVVcDptYihcImhpZGVcIiksc2xpZGVUb2dnbGU6bWIoXCJ0b2dnbGVcIiksZmFkZUluOntvcGFjaXR5Olwic2hvd1wifSxmYWRlT3V0OntvcGFjaXR5OlwiaGlkZVwifSxmYWRlVG9nZ2xlOntvcGFjaXR5OlwidG9nZ2xlXCJ9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSxjLGQpe3JldHVybiB0aGlzLmFuaW1hdGUoYixhLGMsZCl9fSksbi50aW1lcnM9W10sbi5meC50aWNrPWZ1bmN0aW9uKCl7dmFyIGEsYj1uLnRpbWVycyxjPTA7Zm9yKGhiPW4ubm93KCk7YzxiLmxlbmd0aDtjKyspYT1iW2NdLGEoKXx8YltjXSE9PWF8fGIuc3BsaWNlKGMtLSwxKTtiLmxlbmd0aHx8bi5meC5zdG9wKCksaGI9dm9pZCAwfSxuLmZ4LnRpbWVyPWZ1bmN0aW9uKGEpe24udGltZXJzLnB1c2goYSksYSgpP24uZnguc3RhcnQoKTpuLnRpbWVycy5wb3AoKX0sbi5meC5pbnRlcnZhbD0xMyxuLmZ4LnN0YXJ0PWZ1bmN0aW9uKCl7aWJ8fChpYj1hLnNldEludGVydmFsKG4uZngudGljayxuLmZ4LmludGVydmFsKSl9LG4uZnguc3RvcD1mdW5jdGlvbigpe2EuY2xlYXJJbnRlcnZhbChpYiksaWI9bnVsbH0sbi5meC5zcGVlZHM9e3Nsb3c6NjAwLGZhc3Q6MjAwLF9kZWZhdWx0OjQwMH0sbi5mbi5kZWxheT1mdW5jdGlvbihiLGMpe3JldHVybiBiPW4uZng/bi5meC5zcGVlZHNbYl18fGI6YixjPWN8fFwiZnhcIix0aGlzLnF1ZXVlKGMsZnVuY3Rpb24oYyxkKXt2YXIgZT1hLnNldFRpbWVvdXQoYyxiKTtkLnN0b3A9ZnVuY3Rpb24oKXthLmNsZWFyVGltZW91dChlKX19KX0sZnVuY3Rpb24oKXt2YXIgYSxiPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGM9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGU9ZC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGY9ZS5hcHBlbmRDaGlsZChkLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2M9ZC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGMuc2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIsXCJ0XCIpLGMuaW5uZXJIVE1MPVwiICA8bGluay8+PHRhYmxlPjwvdGFibGU+PGEgaHJlZj0nL2EnPmE8L2E+PGlucHV0IHR5cGU9J2NoZWNrYm94Jy8+XCIsYT1jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXSxiLnNldEF0dHJpYnV0ZShcInR5cGVcIixcImNoZWNrYm94XCIpLGMuYXBwZW5kQ2hpbGQoYiksYT1jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYVwiKVswXSxhLnN0eWxlLmNzc1RleHQ9XCJ0b3A6MXB4XCIsbC5nZXRTZXRBdHRyaWJ1dGU9XCJ0XCIhPT1jLmNsYXNzTmFtZSxsLnN0eWxlPS90b3AvLnRlc3QoYS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKSksbC5ocmVmTm9ybWFsaXplZD1cIi9hXCI9PT1hLmdldEF0dHJpYnV0ZShcImhyZWZcIiksbC5jaGVja09uPSEhYi52YWx1ZSxsLm9wdFNlbGVjdGVkPWYuc2VsZWN0ZWQsbC5lbmN0eXBlPSEhZC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKS5lbmN0eXBlLGUuZGlzYWJsZWQ9ITAsbC5vcHREaXNhYmxlZD0hZi5kaXNhYmxlZCxiPWQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGIuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiKSxsLmlucHV0PVwiXCI9PT1iLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpLGIudmFsdWU9XCJ0XCIsYi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxsLnJhZGlvVmFsdWU9XCJ0XCI9PT1iLnZhbHVlfSgpO3ZhciByYj0vXFxyL2csc2I9L1tcXHgyMFxcdFxcclxcblxcZl0rL2c7bi5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPW4uaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxuKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6bi5pc0FycmF5KGUpJiYoZT1uLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9bi52YWxIb29rc1t0aGlzLnR5cGVdfHxuLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPW4udmFsSG9va3NbZS50eXBlXXx8bi52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2UocmIsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxuLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOm4udHJpbShuLnRleHQoYSkpLnJlcGxhY2Uoc2IsXCIgXCIpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZD1hLm9wdGlvbnMsZT1hLnNlbGVjdGVkSW5kZXgsZj1cInNlbGVjdC1vbmVcIj09PWEudHlwZXx8MD5lLGc9Zj9udWxsOltdLGg9Zj9lKzE6ZC5sZW5ndGgsaT0wPmU/aDpmP2U6MDtoPmk7aSsrKWlmKGM9ZFtpXSwoYy5zZWxlY3RlZHx8aT09PWUpJiYobC5vcHREaXNhYmxlZD8hYy5kaXNhYmxlZDpudWxsPT09Yy5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkmJighYy5wYXJlbnROb2RlLmRpc2FibGVkfHwhbi5ub2RlTmFtZShjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9bihjKS52YWwoKSxmKXJldHVybiBiO2cucHVzaChiKX1yZXR1cm4gZ30sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPW4ubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWlmKGQ9ZVtnXSxuLmluQXJyYXkobi52YWxIb29rcy5vcHRpb24uZ2V0KGQpLGYpPi0xKXRyeXtkLnNlbGVjdGVkPWM9ITB9Y2F0Y2goaCl7ZC5zY3JvbGxIZWlnaHR9ZWxzZSBkLnNlbGVjdGVkPSExO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxlfX19fSksbi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe24udmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmlzQXJyYXkoYik/YS5jaGVja2VkPW4uaW5BcnJheShuKGEpLnZhbCgpLGIpPi0xOnZvaWQgMH19LGwuY2hlY2tPbnx8KG4udmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSk7dmFyIHRiLHViLHZiPW4uZXhwci5hdHRySGFuZGxlLHdiPS9eKD86Y2hlY2tlZHxzZWxlY3RlZCkkL2kseGI9bC5nZXRTZXRBdHRyaWJ1dGUseWI9bC5pbnB1dDtuLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBZKHRoaXMsbi5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVyblwidW5kZWZpbmVkXCI9PXR5cGVvZiBhLmdldEF0dHJpYnV0ZT9uLnByb3AoYSxiLGMpOigxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9Yi50b0xvd2VyQ2FzZSgpLGU9bi5hdHRySG9va3NbYl18fChuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP3ViOnRiKSksdm9pZCAwIT09Yz9udWxsPT09Yz92b2lkIG4ucmVtb3ZlQXR0cihhLGIpOmUmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6KGQ9bi5maW5kLmF0dHIoYSxiKSxudWxsPT1kP3ZvaWQgMDpkKSl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWwucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9MCxmPWImJmIubWF0Y2goRyk7aWYoZiYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1mW2UrK10pZD1uLnByb3BGaXhbY118fGMsbi5leHByLm1hdGNoLmJvb2wudGVzdChjKT95YiYmeGJ8fCF3Yi50ZXN0KGMpP2FbZF09ITE6YVtuLmNhbWVsQ2FzZShcImRlZmF1bHQtXCIrYyldPWFbZF09ITE6bi5hdHRyKGEsYyxcIlwiKSxhLnJlbW92ZUF0dHJpYnV0ZSh4Yj9jOmQpfX0pLHViPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/bi5yZW1vdmVBdHRyKGEsYyk6eWImJnhifHwhd2IudGVzdChjKT9hLnNldEF0dHJpYnV0ZSgheGImJm4ucHJvcEZpeFtjXXx8YyxjKTphW24uY2FtZWxDYXNlKFwiZGVmYXVsdC1cIitjKV09YVtjXT0hMCxjfX0sbi5lYWNoKG4uZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPXZiW2JdfHxuLmZpbmQuYXR0cjt5YiYmeGJ8fCF3Yi50ZXN0KGIpP3ZiW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmO3JldHVybiBkfHwoZj12YltiXSx2YltiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsdmJbYl09ZiksZX06dmJbYl09ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjP3ZvaWQgMDphW24uY2FtZWxDYXNlKFwiZGVmYXVsdC1cIitiKV0/Yi50b0xvd2VyQ2FzZSgpOm51bGx9fSkseWImJnhifHwobi5hdHRySG9va3MudmFsdWU9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4ubm9kZU5hbWUoYSxcImlucHV0XCIpP3ZvaWQoYS5kZWZhdWx0VmFsdWU9Yik6dGImJnRiLnNldChhLGIsYyl9fSkseGJ8fCh0Yj17c2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1hLmdldEF0dHJpYnV0ZU5vZGUoYyk7cmV0dXJuIGR8fGEuc2V0QXR0cmlidXRlTm9kZShkPWEub3duZXJEb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoYykpLGQudmFsdWU9Yis9XCJcIixcInZhbHVlXCI9PT1jfHxiPT09YS5nZXRBdHRyaWJ1dGUoYyk/Yjp2b2lkIDB9fSx2Yi5pZD12Yi5uYW1lPXZiLmNvb3Jkcz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGM/dm9pZCAwOihkPWEuZ2V0QXR0cmlidXRlTm9kZShiKSkmJlwiXCIhPT1kLnZhbHVlP2QudmFsdWU6bnVsbH0sbi52YWxIb29rcy5idXR0b249e2dldDpmdW5jdGlvbihhLGIpe3ZhciBjPWEuZ2V0QXR0cmlidXRlTm9kZShiKTtyZXR1cm4gYyYmYy5zcGVjaWZpZWQ/Yy52YWx1ZTp2b2lkIDB9LHNldDp0Yi5zZXR9LG4uYXR0ckhvb2tzLmNvbnRlbnRlZGl0YWJsZT17c2V0OmZ1bmN0aW9uKGEsYixjKXt0Yi5zZXQoYSxcIlwiPT09Yj8hMTpiLGMpfX0sbi5lYWNoKFtcIndpZHRoXCIsXCJoZWlnaHRcIl0sZnVuY3Rpb24oYSxiKXtuLmF0dHJIb29rc1tiXT17c2V0OmZ1bmN0aW9uKGEsYyl7cmV0dXJuXCJcIj09PWM/KGEuc2V0QXR0cmlidXRlKGIsXCJhdXRvXCIpLGMpOnZvaWQgMH19fSkpLGwuc3R5bGV8fChuLmF0dHJIb29rcy5zdHlsZT17Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLnN0eWxlLmNzc1RleHR8fHZvaWQgMH0sc2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuc3R5bGUuY3NzVGV4dD1iK1wiXCJ9fSk7dmFyIHpiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbnxvYmplY3QpJC9pLEFiPS9eKD86YXxhcmVhKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBZKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiBhPW4ucHJvcEZpeFthXXx8YSx0aGlzLmVhY2goZnVuY3Rpb24oKXt0cnl7dGhpc1thXT12b2lkIDAsZGVsZXRlIHRoaXNbYV19Y2F0Y2goYil7fX0pfX0pLG4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZigzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiAxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9bi5wcm9wRml4W2JdfHxiLGU9bi5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidGFiaW5kZXhcIik7cmV0dXJuIGI/cGFyc2VJbnQoYiwxMCk6emIudGVzdChhLm5vZGVOYW1lKXx8QWIudGVzdChhLm5vZGVOYW1lKSYmYS5ocmVmPzA6LTF9fX0scHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn19KSxsLmhyZWZOb3JtYWxpemVkfHxuLmVhY2goW1wiaHJlZlwiLFwic3JjXCJdLGZ1bmN0aW9uKGEsYil7bi5wcm9wSG9va3NbYl09e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYiw0KX19fSksbC5vcHRTZWxlY3RlZHx8KG4ucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYoYi5zZWxlY3RlZEluZGV4LGIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgpLG51bGx9LHNldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7YiYmKGIuc2VsZWN0ZWRJbmRleCxiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4KX19KSxuLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bi5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pLGwuZW5jdHlwZXx8KG4ucHJvcEZpeC5lbmN0eXBlPVwiZW5jb2RpbmdcIik7dmFyIEJiPS9bXFx0XFxyXFxuXFxmXS9nO2Z1bmN0aW9uIENiKGEpe3JldHVybiBuLmF0dHIoYSxcImNsYXNzXCIpfHxcIlwifW4uZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaCxpPTA7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLENiKHRoaXMpKSl9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmYSl7Yj1hLm1hdGNoKEcpfHxbXTt3aGlsZShjPXRoaXNbaSsrXSlpZihlPUNiKGMpLGQ9MT09PWMubm9kZVR5cGUmJihcIiBcIitlK1wiIFwiKS5yZXBsYWNlKEJiLFwiIFwiKSl7Zz0wO3doaWxlKGY9YltnKytdKWQuaW5kZXhPZihcIiBcIitmK1wiIFwiKTwwJiYoZCs9ZitcIiBcIik7aD1uLnRyaW0oZCksZSE9PWgmJm4uYXR0cihjLFwiY2xhc3NcIixoKX19cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9MDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIsQ2IodGhpcykpKX0pO2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLFwiXCIpO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhKXtiPWEubWF0Y2goRyl8fFtdO3doaWxlKGM9dGhpc1tpKytdKWlmKGU9Q2IoYyksZD0xPT09Yy5ub2RlVHlwZSYmKFwiIFwiK2UrXCIgXCIpLnJlcGxhY2UoQmIsXCIgXCIpKXtnPTA7d2hpbGUoZj1iW2crK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2YrXCIgXCIpPi0xKWQ9ZC5yZXBsYWNlKFwiIFwiK2YrXCIgXCIsXCIgXCIpO2g9bi50cmltKGQpLGUhPT1oJiZuLmF0dHIoYyxcImNsYXNzXCIsaCl9fXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6bi5pc0Z1bmN0aW9uKGEpP3RoaXMuZWFjaChmdW5jdGlvbihjKXtuKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMsQ2IodGhpcyksYiksYil9KTp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYixkLGUsZjtpZihcInN0cmluZ1wiPT09Yyl7ZD0wLGU9bih0aGlzKSxmPWEubWF0Y2goRyl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2Ugdm9pZCAwIT09YSYmXCJib29sZWFuXCIhPT1jfHwoYj1DYih0aGlzKSxiJiZuLl9kYXRhKHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsYiksbi5hdHRyKHRoaXMsXCJjbGFzc1wiLGJ8fGE9PT0hMT9cIlwiOm4uX2RhdGEodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQ9MDtiPVwiIFwiK2ErXCIgXCI7d2hpbGUoYz10aGlzW2QrK10paWYoMT09PWMubm9kZVR5cGUmJihcIiBcIitDYihjKStcIiBcIikucmVwbGFjZShCYixcIiBcIikuaW5kZXhPZihiKT4tMSlyZXR1cm4hMDtyZXR1cm4hMX19KSxuLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksbi5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfX0pO3ZhciBEYj1hLmxvY2F0aW9uLEViPW4ubm93KCksRmI9L1xcPy8sR2I9LygsKXwoXFxbfHspfCh9fF0pfFwiKD86W15cIlxcXFxcXHJcXG5dfFxcXFxbXCJcXFxcXFwvYmZucnRdfFxcXFx1W1xcZGEtZkEtRl17NH0pKlwiXFxzKjo/fHRydWV8ZmFsc2V8bnVsbHwtPyg/ITBcXGQpXFxkKyg/OlxcLlxcZCt8KSg/OltlRV1bKy1dP1xcZCt8KS9nO24ucGFyc2VKU09OPWZ1bmN0aW9uKGIpe2lmKGEuSlNPTiYmYS5KU09OLnBhcnNlKXJldHVybiBhLkpTT04ucGFyc2UoYitcIlwiKTt2YXIgYyxkPW51bGwsZT1uLnRyaW0oYitcIlwiKTtyZXR1cm4gZSYmIW4udHJpbShlLnJlcGxhY2UoR2IsZnVuY3Rpb24oYSxiLGUsZil7cmV0dXJuIGMmJmImJihkPTApLDA9PT1kP2E6KGM9ZXx8YixkKz0hZi0hZSxcIlwiKX0pKT9GdW5jdGlvbihcInJldHVybiBcIitlKSgpOm4uZXJyb3IoXCJJbnZhbGlkIEpTT046IFwiK2IpfSxuLnBhcnNlWE1MPWZ1bmN0aW9uKGIpe3ZhciBjLGQ7aWYoIWJ8fFwic3RyaW5nXCIhPXR5cGVvZiBiKXJldHVybiBudWxsO3RyeXthLkRPTVBhcnNlcj8oZD1uZXcgYS5ET01QYXJzZXIsYz1kLnBhcnNlRnJvbVN0cmluZyhiLFwidGV4dC94bWxcIikpOihjPW5ldyBhLkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MRE9NXCIpLGMuYXN5bmM9XCJmYWxzZVwiLGMubG9hZFhNTChiKSl9Y2F0Y2goZSl7Yz12b2lkIDB9cmV0dXJuIGMmJmMuZG9jdW1lbnRFbGVtZW50JiYhYy5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aHx8bi5lcnJvcihcIkludmFsaWQgWE1MOiBcIitiKSxjfTt2YXIgSGI9LyMuKiQvLEliPS8oWz8mXSlfPVteJl0qLyxKYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKilcXHI/JC9nbSxLYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxMYj0vXig/OkdFVHxIRUFEKSQvLE1iPS9eXFwvXFwvLyxOYj0vXihbXFx3ListXSs6KSg/OlxcL1xcLyg/OlteXFwvPyNdKkB8KShbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxPYj17fSxQYj17fSxRYj1cIiovXCIuY29uY2F0KFwiKlwiKSxSYj1EYi5ocmVmLFNiPU5iLmV4ZWMoUmIudG9Mb3dlckNhc2UoKSl8fFtdO2Z1bmN0aW9uIFRiKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChHKXx8W107aWYobi5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZC5jaGFyQXQoMCk/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBVYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1QYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG4uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIFZiKGEsYil7dmFyIGMsZCxlPW4uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoZCBpbiBiKXZvaWQgMCE9PWJbZF0mJigoZVtkXT9hOmN8fChjPXt9KSlbZF09YltkXSk7cmV0dXJuIGMmJm4uZXh0ZW5kKCEwLGEsYyksYX1mdW5jdGlvbiBXYihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1lJiYoZT1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihlKWZvcihnIGluIGgpaWYoaFtnXSYmaFtnXS50ZXN0KGUpKXtpLnVuc2hpZnQoZyk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGcgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tnK1wiIFwiK2lbMF1dKXtmPWc7YnJlYWt9ZHx8KGQ9Zyl9Zj1mfHxkfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiBYYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW4uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpSYix0eXBlOlwiR0VUXCIsaXNMb2NhbDpLYi50ZXN0KFNiWzFdKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpRYix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi9cXGJ4bWxcXGIvLGh0bWw6L1xcYmh0bWwvLGpzb246L1xcYmpzb25cXGIvfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6bi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOm4ucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP1ZiKFZiKGEsbi5hamF4U2V0dGluZ3MpLGIpOlZiKG4uYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOlRiKE9iKSxhamF4VHJhbnNwb3J0OlRiKFBiKSxhamF4OmZ1bmN0aW9uKGIsYyl7XCJvYmplY3RcIj09dHlwZW9mIGImJihjPWIsYj12b2lkIDApLGM9Y3x8e307dmFyIGQsZSxmLGcsaCxpLGosayxsPW4uYWpheFNldHVwKHt9LGMpLG09bC5jb250ZXh0fHxsLG89bC5jb250ZXh0JiYobS5ub2RlVHlwZXx8bS5qcXVlcnkpP24obSk6bi5ldmVudCxwPW4uRGVmZXJyZWQoKSxxPW4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikscj1sLnN0YXR1c0NvZGV8fHt9LHM9e30sdD17fSx1PTAsdj1cImNhbmNlbGVkXCIsdz17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKDI9PT11KXtpZighayl7az17fTt3aGlsZShiPUpiLmV4ZWMoZykpa1tiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1rW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXU/ZzpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YS50b0xvd2VyQ2FzZSgpO3JldHVybiB1fHwoYT10W2NdPXRbY118fGEsc1thXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiB1fHwobC5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoMj51KWZvcihiIGluIGEpcltiXT1bcltiXSxhW2JdXTtlbHNlIHcuYWx3YXlzKGFbdy5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8djtyZXR1cm4gaiYmai5hYm9ydChiKSx5KDAsYiksdGhpc319O2lmKHAucHJvbWlzZSh3KS5jb21wbGV0ZT1xLmFkZCx3LnN1Y2Nlc3M9dy5kb25lLHcuZXJyb3I9dy5mYWlsLGwudXJsPSgoYnx8bC51cmx8fFJiKStcIlwiKS5yZXBsYWNlKEhiLFwiXCIpLnJlcGxhY2UoTWIsU2JbMV0rXCIvL1wiKSxsLnR5cGU9Yy5tZXRob2R8fGMudHlwZXx8bC5tZXRob2R8fGwudHlwZSxsLmRhdGFUeXBlcz1uLnRyaW0obC5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goRyl8fFtcIlwiXSxudWxsPT1sLmNyb3NzRG9tYWluJiYoZD1OYi5leGVjKGwudXJsLnRvTG93ZXJDYXNlKCkpLGwuY3Jvc3NEb21haW49ISghZHx8ZFsxXT09PVNiWzFdJiZkWzJdPT09U2JbMl0mJihkWzNdfHwoXCJodHRwOlwiPT09ZFsxXT9cIjgwXCI6XCI0NDNcIikpPT09KFNiWzNdfHwoXCJodHRwOlwiPT09U2JbMV0/XCI4MFwiOlwiNDQzXCIpKSkpLGwuZGF0YSYmbC5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIGwuZGF0YSYmKGwuZGF0YT1uLnBhcmFtKGwuZGF0YSxsLnRyYWRpdGlvbmFsKSksVWIoT2IsbCxjLHcpLDI9PT11KXJldHVybiB3O2k9bi5ldmVudCYmbC5nbG9iYWwsaSYmMD09PW4uYWN0aXZlKysmJm4uZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxsLnR5cGU9bC50eXBlLnRvVXBwZXJDYXNlKCksbC5oYXNDb250ZW50PSFMYi50ZXN0KGwudHlwZSksZj1sLnVybCxsLmhhc0NvbnRlbnR8fChsLmRhdGEmJihmPWwudXJsKz0oRmIudGVzdChmKT9cIiZcIjpcIj9cIikrbC5kYXRhLGRlbGV0ZSBsLmRhdGEpLGwuY2FjaGU9PT0hMSYmKGwudXJsPUliLnRlc3QoZik/Zi5yZXBsYWNlKEliLFwiJDFfPVwiK0ViKyspOmYrKEZiLnRlc3QoZik/XCImXCI6XCI/XCIpK1wiXz1cIitFYisrKSksbC5pZk1vZGlmaWVkJiYobi5sYXN0TW9kaWZpZWRbZl0mJncuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsbi5sYXN0TW9kaWZpZWRbZl0pLG4uZXRhZ1tmXSYmdy5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLG4uZXRhZ1tmXSkpLChsLmRhdGEmJmwuaGFzQ29udGVudCYmbC5jb250ZW50VHlwZSE9PSExfHxjLmNvbnRlbnRUeXBlKSYmdy5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsbC5jb250ZW50VHlwZSksdy5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsbC5kYXRhVHlwZXNbMF0mJmwuYWNjZXB0c1tsLmRhdGFUeXBlc1swXV0/bC5hY2NlcHRzW2wuZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1sLmRhdGFUeXBlc1swXT9cIiwgXCIrUWIrXCI7IHE9MC4wMVwiOlwiXCIpOmwuYWNjZXB0c1tcIipcIl0pO2ZvcihlIGluIGwuaGVhZGVycyl3LnNldFJlcXVlc3RIZWFkZXIoZSxsLmhlYWRlcnNbZV0pO2lmKGwuYmVmb3JlU2VuZCYmKGwuYmVmb3JlU2VuZC5jYWxsKG0sdyxsKT09PSExfHwyPT09dSkpcmV0dXJuIHcuYWJvcnQoKTt2PVwiYWJvcnRcIjtmb3IoZSBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSl3W2VdKGxbZV0pO2lmKGo9VWIoUGIsbCxjLHcpKXtpZih3LnJlYWR5U3RhdGU9MSxpJiZvLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt3LGxdKSwyPT09dSlyZXR1cm4gdztsLmFzeW5jJiZsLnRpbWVvdXQ+MCYmKGg9YS5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dy5hYm9ydChcInRpbWVvdXRcIil9LGwudGltZW91dCkpO3RyeXt1PTEsai5zZW5kKHMseSl9Y2F0Y2goeCl7aWYoISgyPnUpKXRocm93IHg7eSgtMSx4KX19ZWxzZSB5KC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIHkoYixjLGQsZSl7dmFyIGsscyx0LHYseCx5PWM7MiE9PXUmJih1PTIsaCYmYS5jbGVhclRpbWVvdXQoaCksaj12b2lkIDAsZz1lfHxcIlwiLHcucmVhZHlTdGF0ZT1iPjA/NDowLGs9Yj49MjAwJiYzMDA+Ynx8MzA0PT09YixkJiYodj1XYihsLHcsZCkpLHY9WGIobCx2LHcsayksaz8obC5pZk1vZGlmaWVkJiYoeD13LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx4JiYobi5sYXN0TW9kaWZpZWRbZl09eCkseD13LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx4JiYobi5ldGFnW2ZdPXgpKSwyMDQ9PT1ifHxcIkhFQURcIj09PWwudHlwZT95PVwibm9jb250ZW50XCI6MzA0PT09Yj95PVwibm90bW9kaWZpZWRcIjooeT12LnN0YXRlLHM9di5kYXRhLHQ9di5lcnJvcixrPSF0KSk6KHQ9eSwhYiYmeXx8KHk9XCJlcnJvclwiLDA+YiYmKGI9MCkpKSx3LnN0YXR1cz1iLHcuc3RhdHVzVGV4dD0oY3x8eSkrXCJcIixrP3AucmVzb2x2ZVdpdGgobSxbcyx5LHddKTpwLnJlamVjdFdpdGgobSxbdyx5LHRdKSx3LnN0YXR1c0NvZGUocikscj12b2lkIDAsaSYmby50cmlnZ2VyKGs/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW3csbCxrP3M6dF0pLHEuZmlyZVdpdGgobSxbdyx5XSksaSYmKG8udHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFt3LGxdKSwtLW4uYWN0aXZlfHxuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiB3fSxnZXRKU09OOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5nZXQoYSxiLGMsXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5nZXQoYSx2b2lkIDAsYixcInNjcmlwdFwiKX19KSxuLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGEsYil7bltiXT1mdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGMpJiYoZT1lfHxkLGQ9YyxjPXZvaWQgMCksbi5hamF4KG4uZXh0ZW5kKHt1cmw6YSx0eXBlOmIsZGF0YVR5cGU6ZSxkYXRhOmMsc3VjY2VzczpkfSxuLmlzUGxhaW5PYmplY3QoYSkmJmEpKX19KSxuLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiBuLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGNhY2hlOiEwLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9LG4uZm4uZXh0ZW5kKHt3cmFwQWxsOmZ1bmN0aW9uKGEpe2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykud3JhcEFsbChhLmNhbGwodGhpcyxiKSl9KTtpZih0aGlzWzBdKXt2YXIgYj1uKGEsdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSghMCk7dGhpc1swXS5wYXJlbnROb2RlJiZiLmluc2VydEJlZm9yZSh0aGlzWzBdKSxiLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXM7d2hpbGUoYS5maXJzdENoaWxkJiYxPT09YS5maXJzdENoaWxkLm5vZGVUeXBlKWE9YS5maXJzdENoaWxkO3JldHVybiBhfSkuYXBwZW5kKHRoaXMpfXJldHVybiB0aGlzfSx3cmFwSW5uZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uaXNGdW5jdGlvbihhKT90aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS53cmFwSW5uZXIoYS5jYWxsKHRoaXMsYikpfSk6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGI9bih0aGlzKSxjPWIuY29udGVudHMoKTtjLmxlbmd0aD9jLndyYXBBbGwoYSk6Yi5hcHBlbmQoYSl9KX0sd3JhcDpmdW5jdGlvbihhKXt2YXIgYj1uLmlzRnVuY3Rpb24oYSk7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXtuKHRoaXMpLndyYXBBbGwoYj9hLmNhbGwodGhpcyxjKTphKX0pfSx1bndyYXA6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wYXJlbnQoKS5lYWNoKGZ1bmN0aW9uKCl7bi5ub2RlTmFtZSh0aGlzLFwiYm9keVwiKXx8bih0aGlzKS5yZXBsYWNlV2l0aCh0aGlzLmNoaWxkTm9kZXMpfSkuZW5kKCl9fSk7ZnVuY3Rpb24gWWIoYSl7cmV0dXJuIGEuc3R5bGUmJmEuc3R5bGUuZGlzcGxheXx8bi5jc3MoYSxcImRpc3BsYXlcIil9ZnVuY3Rpb24gWmIoYSl7aWYoIW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50fHxkLGEpKXJldHVybiEwO3doaWxlKGEmJjE9PT1hLm5vZGVUeXBlKXtpZihcIm5vbmVcIj09PVliKGEpfHxcImhpZGRlblwiPT09YS50eXBlKXJldHVybiEwO2E9YS5wYXJlbnROb2RlfXJldHVybiExfW4uZXhwci5maWx0ZXJzLmhpZGRlbj1mdW5jdGlvbihhKXtyZXR1cm4gbC5yZWxpYWJsZUhpZGRlbk9mZnNldHMoKT9hLm9mZnNldFdpZHRoPD0wJiZhLm9mZnNldEhlaWdodDw9MCYmIWEuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGg6WmIoYSl9LG4uZXhwci5maWx0ZXJzLnZpc2libGU9ZnVuY3Rpb24oYSl7cmV0dXJuIW4uZXhwci5maWx0ZXJzLmhpZGRlbihhKX07dmFyICRiPS8lMjAvZyxfYj0vXFxbXFxdJC8sYWM9L1xccj9cXG4vZyxiYz0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksY2M9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIGRjKGEsYixjLGQpe3ZhciBlO2lmKG4uaXNBcnJheShiKSluLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fF9iLnRlc3QoYSk/ZChhLGUpOmRjKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlJiZudWxsIT1lP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09bi50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpZGMoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1uLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7Yj1uLmlzRnVuY3Rpb24oYik/YigpOm51bGw9PWI/XCJcIjpiLGRbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYil9O2lmKHZvaWQgMD09PWImJihiPW4uYWpheFNldHRpbmdzJiZuLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksbi5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIW4uaXNQbGFpbk9iamVjdChhKSluLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKWRjKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpLnJlcGxhY2UoJGIsXCIrXCIpfSxuLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1uLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP24ubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIW4odGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJmNjLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFiYy50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhWi50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPW4odGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpuLmlzQXJyYXkoYyk/bi5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKGFjLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoYWMsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksbi5hamF4U2V0dGluZ3MueGhyPXZvaWQgMCE9PWEuQWN0aXZlWE9iamVjdD9mdW5jdGlvbigpe3JldHVybiB0aGlzLmlzTG9jYWw/aWMoKTpkLmRvY3VtZW50TW9kZT44P2hjKCk6L14oZ2V0fHBvc3R8aGVhZHxwdXR8ZGVsZXRlfG9wdGlvbnMpJC9pLnRlc3QodGhpcy50eXBlKSYmaGMoKXx8aWMoKX06aGM7dmFyIGVjPTAsZmM9e30sZ2M9bi5hamF4U2V0dGluZ3MueGhyKCk7YS5hdHRhY2hFdmVudCYmYS5hdHRhY2hFdmVudChcIm9udW5sb2FkXCIsZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gZmMpZmNbYV0odm9pZCAwLCEwKX0pLGwuY29ycz0hIWdjJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gZ2MsZ2M9bC5hamF4PSEhZ2MsZ2MmJm4uYWpheFRyYW5zcG9ydChmdW5jdGlvbihiKXtpZighYi5jcm9zc0RvbWFpbnx8bC5jb3JzKXt2YXIgYztyZXR1cm57c2VuZDpmdW5jdGlvbihkLGUpe3ZhciBmLGc9Yi54aHIoKSxoPSsrZWM7aWYoZy5vcGVuKGIudHlwZSxiLnVybCxiLmFzeW5jLGIudXNlcm5hbWUsYi5wYXNzd29yZCksYi54aHJGaWVsZHMpZm9yKGYgaW4gYi54aHJGaWVsZHMpZ1tmXT1iLnhockZpZWxkc1tmXTtiLm1pbWVUeXBlJiZnLm92ZXJyaWRlTWltZVR5cGUmJmcub3ZlcnJpZGVNaW1lVHlwZShiLm1pbWVUeXBlKSxiLmNyb3NzRG9tYWlufHxkW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGRbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGYgaW4gZCl2b2lkIDAhPT1kW2ZdJiZnLnNldFJlcXVlc3RIZWFkZXIoZixkW2ZdK1wiXCIpO2cuc2VuZChiLmhhc0NvbnRlbnQmJmIuZGF0YXx8bnVsbCksYz1mdW5jdGlvbihhLGQpe3ZhciBmLGksajtpZihjJiYoZHx8ND09PWcucmVhZHlTdGF0ZSkpaWYoZGVsZXRlIGZjW2hdLGM9dm9pZCAwLGcub25yZWFkeXN0YXRlY2hhbmdlPW4ubm9vcCxkKTQhPT1nLnJlYWR5U3RhdGUmJmcuYWJvcnQoKTtlbHNle2o9e30sZj1nLnN0YXR1cyxcInN0cmluZ1wiPT10eXBlb2YgZy5yZXNwb25zZVRleHQmJihqLnRleHQ9Zy5yZXNwb25zZVRleHQpO3RyeXtpPWcuc3RhdHVzVGV4dH1jYXRjaChrKXtpPVwiXCJ9Znx8IWIuaXNMb2NhbHx8Yi5jcm9zc0RvbWFpbj8xMjIzPT09ZiYmKGY9MjA0KTpmPWoudGV4dD8yMDA6NDA0fWomJmUoZixpLGosZy5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSl9LGIuYXN5bmM/ND09PWcucmVhZHlTdGF0ZT9hLnNldFRpbWVvdXQoYyk6Zy5vbnJlYWR5c3RhdGVjaGFuZ2U9ZmNbaF09YzpjKCl9LGFib3J0OmZ1bmN0aW9uKCl7YyYmYyh2b2lkIDAsITApfX19fSk7ZnVuY3Rpb24gaGMoKXt0cnl7cmV0dXJuIG5ldyBhLlhNTEh0dHBSZXF1ZXN0fWNhdGNoKGIpe319ZnVuY3Rpb24gaWMoKXt0cnl7cmV0dXJuIG5ldyBhLkFjdGl2ZVhPYmplY3QoXCJNaWNyb3NvZnQuWE1MSFRUUFwiKX1jYXRjaChiKXt9fW4uYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGEpe3JldHVybiBuLmdsb2JhbEV2YWwoYSksYX19fSksbi5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7dm9pZCAwPT09YS5jYWNoZSYmKGEuY2FjaGU9ITEpLGEuY3Jvc3NEb21haW4mJihhLnR5cGU9XCJHRVRcIixhLmdsb2JhbD0hMSl9KSxuLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihhKXtpZihhLmNyb3NzRG9tYWluKXt2YXIgYixjPWQuaGVhZHx8bihcImhlYWRcIilbMF18fGQuZG9jdW1lbnRFbGVtZW50O3JldHVybntzZW5kOmZ1bmN0aW9uKGUsZil7Yj1kLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi5hc3luYz0hMCxhLnNjcmlwdENoYXJzZXQmJihiLmNoYXJzZXQ9YS5zY3JpcHRDaGFyc2V0KSxiLnNyYz1hLnVybCxiLm9ubG9hZD1iLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbihhLGMpeyhjfHwhYi5yZWFkeVN0YXRlfHwvbG9hZGVkfGNvbXBsZXRlLy50ZXN0KGIucmVhZHlTdGF0ZSkpJiYoYi5vbmxvYWQ9Yi5vbnJlYWR5c3RhdGVjaGFuZ2U9bnVsbCxiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSxiPW51bGwsY3x8ZigyMDAsXCJzdWNjZXNzXCIpKX0sYy5pbnNlcnRCZWZvcmUoYixjLmZpcnN0Q2hpbGQpfSxhYm9ydDpmdW5jdGlvbigpe2ImJmIub25sb2FkKHZvaWQgMCwhMCl9fX19KTt2YXIgamM9W10sa2M9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztuLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1qYy5wb3AoKXx8bi5leHBhbmRvK1wiX1wiK0ViKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKGtjLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmMD09PShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZrYy50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW4uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKGtjLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KEZiLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG4uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe3ZvaWQgMD09PWY/bihhKS5yZW1vdmVQcm9wKGUpOmFbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxqYy5wdXNoKGUpKSxnJiZuLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLG4ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8ZDt2YXIgZT14LmV4ZWMoYSksZj0hYyYmW107cmV0dXJuIGU/W2IuY3JlYXRlRWxlbWVudChlWzFdKV06KGU9amEoW2FdLGIsZiksZiYmZi5sZW5ndGgmJm4oZikucmVtb3ZlKCksbi5tZXJnZShbXSxlLmNoaWxkTm9kZXMpKX07dmFyIGxjPW4uZm4ubG9hZDtuLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhJiZsYylyZXR1cm4gbGMuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPi0xJiYoZD1uLnRyaW0oYS5zbGljZShoLGEubGVuZ3RoKSksYT1hLnNsaWNlKDAsaCkpLG4uaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJm4uYWpheCh7dXJsOmEsdHlwZTplfHxcIkdFVFwiLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/bihcIjxkaXY+XCIpLmFwcGVuZChuLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmFsd2F5cyhjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChmdW5jdGlvbigpe2MuYXBwbHkodGhpcyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KX0pLHRoaXN9LG4uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG4uZXhwci5maWx0ZXJzLmFuaW1hdGVkPWZ1bmN0aW9uKGEpe3JldHVybiBuLmdyZXAobi50aW1lcnMsZnVuY3Rpb24oYil7cmV0dXJuIGE9PT1iLmVsZW19KS5sZW5ndGh9O2Z1bmN0aW9uIG1jKGEpe3JldHVybiBuLmlzV2luZG93KGEpP2E6OT09PWEubm9kZVR5cGU/YS5kZWZhdWx0Vmlld3x8YS5wYXJlbnRXaW5kb3c6ITF9bi5vZmZzZXQ9e3NldE9mZnNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaCxpLGosaz1uLmNzcyhhLFwicG9zaXRpb25cIiksbD1uKGEpLG09e307XCJzdGF0aWNcIj09PWsmJihhLnN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksaD1sLm9mZnNldCgpLGY9bi5jc3MoYSxcInRvcFwiKSxpPW4uY3NzKGEsXCJsZWZ0XCIpLGo9KFwiYWJzb2x1dGVcIj09PWt8fFwiZml4ZWRcIj09PWspJiZuLmluQXJyYXkoXCJhdXRvXCIsW2YsaV0pPi0xLGo/KGQ9bC5wb3NpdGlvbigpLGc9ZC50b3AsZT1kLmxlZnQpOihnPXBhcnNlRmxvYXQoZil8fDAsZT1wYXJzZUZsb2F0KGkpfHwwKSxuLmlzRnVuY3Rpb24oYikmJihiPWIuY2FsbChhLGMsbi5leHRlbmQoe30saCkpKSxudWxsIT1iLnRvcCYmKG0udG9wPWIudG9wLWgudG9wK2cpLG51bGwhPWIubGVmdCYmKG0ubGVmdD1iLmxlZnQtaC5sZWZ0K2UpLFwidXNpbmdcImluIGI/Yi51c2luZy5jYWxsKGEsbSk6bC5jc3MobSl9fSxuLmZuLmV4dGVuZCh7b2Zmc2V0OmZ1bmN0aW9uKGEpe2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHZvaWQgMD09PWE/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oYil7bi5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsYSxiKX0pO3ZhciBiLGMsZD17dG9wOjAsbGVmdDowfSxlPXRoaXNbMF0sZj1lJiZlLm93bmVyRG9jdW1lbnQ7aWYoZilyZXR1cm4gYj1mLmRvY3VtZW50RWxlbWVudCxuLmNvbnRhaW5zKGIsZSk/KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCYmKGQ9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSksYz1tYyhmKSx7dG9wOmQudG9wKyhjLnBhZ2VZT2Zmc2V0fHxiLnNjcm9sbFRvcCktKGIuY2xpZW50VG9wfHwwKSxsZWZ0OmQubGVmdCsoYy5wYWdlWE9mZnNldHx8Yi5zY3JvbGxMZWZ0KS0oYi5jbGllbnRMZWZ0fHwwKX0pOmR9LHBvc2l0aW9uOmZ1bmN0aW9uKCl7aWYodGhpc1swXSl7dmFyIGEsYixjPXt0b3A6MCxsZWZ0OjB9LGQ9dGhpc1swXTtyZXR1cm5cImZpeGVkXCI9PT1uLmNzcyhkLFwicG9zaXRpb25cIik/Yj1kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOihhPXRoaXMub2Zmc2V0UGFyZW50KCksYj10aGlzLm9mZnNldCgpLG4ubm9kZU5hbWUoYVswXSxcImh0bWxcIil8fChjPWEub2Zmc2V0KCkpLGMudG9wKz1uLmNzcyhhWzBdLFwiYm9yZGVyVG9wV2lkdGhcIiwhMCksYy5sZWZ0Kz1uLmNzcyhhWzBdLFwiYm9yZGVyTGVmdFdpZHRoXCIsITApKSx7dG9wOmIudG9wLWMudG9wLW4uY3NzKGQsXCJtYXJnaW5Ub3BcIiwhMCksbGVmdDpiLmxlZnQtYy5sZWZ0LW4uY3NzKGQsXCJtYXJnaW5MZWZ0XCIsITApfX19LG9mZnNldFBhcmVudDpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPXRoaXMub2Zmc2V0UGFyZW50O3doaWxlKGEmJiFuLm5vZGVOYW1lKGEsXCJodG1sXCIpJiZcInN0YXRpY1wiPT09bi5jc3MoYSxcInBvc2l0aW9uXCIpKWE9YS5vZmZzZXRQYXJlbnQ7cmV0dXJuIGF8fFFhfSl9fSksbi5lYWNoKHtzY3JvbGxMZWZ0OlwicGFnZVhPZmZzZXRcIixzY3JvbGxUb3A6XCJwYWdlWU9mZnNldFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPS9ZLy50ZXN0KGIpO24uZm5bYV09ZnVuY3Rpb24oZCl7cmV0dXJuIFkodGhpcyxmdW5jdGlvbihhLGQsZSl7dmFyIGY9bWMoYSk7cmV0dXJuIHZvaWQgMD09PWU/Zj9iIGluIGY/ZltiXTpmLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtkXTphW2RdOnZvaWQoZj9mLnNjcm9sbFRvKGM/bihmKS5zY3JvbGxMZWZ0KCk6ZSxjP2U6bihmKS5zY3JvbGxUb3AoKSk6YVtkXT1lKX0sYSxkLGFyZ3VtZW50cy5sZW5ndGgsbnVsbCl9fSksbi5lYWNoKFtcInRvcFwiLFwibGVmdFwiXSxmdW5jdGlvbihhLGIpe24uY3NzSG9va3NbYl09VWEobC5waXhlbFBvc2l0aW9uLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGM/KGM9U2EoYSxiKSxPYS50ZXN0KGMpP24oYSkucG9zaXRpb24oKVtiXStcInB4XCI6Yyk6dm9pZCAwfSl9KSxuLmVhY2goe0hlaWdodDpcImhlaWdodFwiLFdpZHRoOlwid2lkdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmVhY2goe1xucGFkZGluZzpcImlubmVyXCIrYSxjb250ZW50OmIsXCJcIjpcIm91dGVyXCIrYX0sZnVuY3Rpb24oYyxkKXtuLmZuW2RdPWZ1bmN0aW9uKGQsZSl7dmFyIGY9YXJndW1lbnRzLmxlbmd0aCYmKGN8fFwiYm9vbGVhblwiIT10eXBlb2YgZCksZz1jfHwoZD09PSEwfHxlPT09ITA/XCJtYXJnaW5cIjpcImJvcmRlclwiKTtyZXR1cm4gWSh0aGlzLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZTtyZXR1cm4gbi5pc1dpbmRvdyhiKT9iLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFtcImNsaWVudFwiK2FdOjk9PT1iLm5vZGVUeXBlPyhlPWIuZG9jdW1lbnRFbGVtZW50LE1hdGgubWF4KGIuYm9keVtcInNjcm9sbFwiK2FdLGVbXCJzY3JvbGxcIithXSxiLmJvZHlbXCJvZmZzZXRcIithXSxlW1wib2Zmc2V0XCIrYV0sZVtcImNsaWVudFwiK2FdKSk6dm9pZCAwPT09ZD9uLmNzcyhiLGMsZyk6bi5zdHlsZShiLGMsZCxnKX0sYixmP2Q6dm9pZCAwLGYsbnVsbCl9fSl9KSxuLmZuLmV4dGVuZCh7YmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfX0pLG4uZm4uc2l6ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmxlbmd0aH0sbi5mbi5hbmRTZWxmPW4uZm4uYWRkQmFjayxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG59KTt2YXIgbmM9YS5qUXVlcnksb2M9YS4kO3JldHVybiBuLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PW4mJihhLiQ9b2MpLGImJmEualF1ZXJ5PT09biYmKGEualF1ZXJ5PW5jKSxufSxifHwoYS5qUXVlcnk9YS4kPW4pLG59KTtcbiIsIi8qIVxuICogaW1hZ2VzTG9hZGVkIFBBQ0tBR0VEIHY0LjEuNFxuICogSmF2YVNjcmlwdCBpcyBhbGwgbGlrZSBcIllvdSBpbWFnZXMgYXJlIGRvbmUgeWV0IG9yIHdoYXQ/XCJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuLyoqXG4gKiBFdkVtaXR0ZXIgdjEuMS4wXG4gKiBMaWwnIGV2ZW50IGVtaXR0ZXJcbiAqIE1JVCBMaWNlbnNlXG4gKi9cblxuLyoganNoaW50IHVudXNlZDogdHJ1ZSwgdW5kZWY6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xuXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxuICAvKiBqc2hpbnQgc3RyaWN0OiBmYWxzZSAqLyAvKiBnbG9iYWxzIGRlZmluZSwgbW9kdWxlLCB3aW5kb3cgKi9cbiAgaWYgKCB0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCApIHtcbiAgICAvLyBBTUQgLSBSZXF1aXJlSlNcbiAgICBkZWZpbmUoICdldi1lbWl0dGVyL2V2LWVtaXR0ZXInLGZhY3RvcnkgKTtcbiAgfSBlbHNlIGlmICggdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cyApIHtcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICBnbG9iYWwuRXZFbWl0dGVyID0gZmFjdG9yeSgpO1xuICB9XG5cbn0oIHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbigpIHtcblxuXG5cbmZ1bmN0aW9uIEV2RW1pdHRlcigpIHt9XG5cbnZhciBwcm90byA9IEV2RW1pdHRlci5wcm90b3R5cGU7XG5cbnByb3RvLm9uID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHNldCBldmVudHMgaGFzaFxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzID0gdGhpcy5fZXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgbGlzdGVuZXJzIGFycmF5XG4gIHZhciBsaXN0ZW5lcnMgPSBldmVudHNbIGV2ZW50TmFtZSBdID0gZXZlbnRzWyBldmVudE5hbWUgXSB8fCBbXTtcbiAgLy8gb25seSBhZGQgb25jZVxuICBpZiAoIGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApID09IC0xICkge1xuICAgIGxpc3RlbmVycy5wdXNoKCBsaXN0ZW5lciApO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5wcm90by5vbmNlID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XG4gIGlmICggIWV2ZW50TmFtZSB8fCAhbGlzdGVuZXIgKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGFkZCBldmVudFxuICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XG4gIC8vIHNldCBvbmNlIGZsYWdcbiAgLy8gc2V0IG9uY2VFdmVudHMgaGFzaFxuICB2YXIgb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzIHx8IHt9O1xuICAvLyBzZXQgb25jZUxpc3RlbmVycyBvYmplY3RcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSA9IG9uY2VFdmVudHNbIGV2ZW50TmFtZSBdIHx8IHt9O1xuICAvLyBzZXQgZmxhZ1xuICBvbmNlTGlzdGVuZXJzWyBsaXN0ZW5lciBdID0gdHJ1ZTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLm9mZiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzICYmIHRoaXMuX2V2ZW50c1sgZXZlbnROYW1lIF07XG4gIGlmICggIWxpc3RlbmVycyB8fCAhbGlzdGVuZXJzLmxlbmd0aCApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YoIGxpc3RlbmVyICk7XG4gIGlmICggaW5kZXggIT0gLTEgKSB7XG4gICAgbGlzdGVuZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxucHJvdG8uZW1pdEV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgYXJncyApIHtcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50cyAmJiB0aGlzLl9ldmVudHNbIGV2ZW50TmFtZSBdO1xuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIGNvcHkgb3ZlciB0byBhdm9pZCBpbnRlcmZlcmVuY2UgaWYgLm9mZigpIGluIGxpc3RlbmVyXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycy5zbGljZSgwKTtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG4gIC8vIG9uY2Ugc3R1ZmZcbiAgdmFyIG9uY2VMaXN0ZW5lcnMgPSB0aGlzLl9vbmNlRXZlbnRzICYmIHRoaXMuX29uY2VFdmVudHNbIGV2ZW50TmFtZSBdO1xuXG4gIGZvciAoIHZhciBpPTA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKysgKSB7XG4gICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldXG4gICAgdmFyIGlzT25jZSA9IG9uY2VMaXN0ZW5lcnMgJiYgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICBpZiAoIGlzT25jZSApIHtcbiAgICAgIC8vIHJlbW92ZSBsaXN0ZW5lclxuICAgICAgLy8gcmVtb3ZlIGJlZm9yZSB0cmlnZ2VyIHRvIHByZXZlbnQgcmVjdXJzaW9uXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xuICAgICAgLy8gdW5zZXQgb25jZSBmbGFnXG4gICAgICBkZWxldGUgb25jZUxpc3RlbmVyc1sgbGlzdGVuZXIgXTtcbiAgICB9XG4gICAgLy8gdHJpZ2dlciBsaXN0ZW5lclxuICAgIGxpc3RlbmVyLmFwcGx5KCB0aGlzLCBhcmdzICk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbnByb3RvLmFsbE9mZiA9IGZ1bmN0aW9uKCkge1xuICBkZWxldGUgdGhpcy5fZXZlbnRzO1xuICBkZWxldGUgdGhpcy5fb25jZUV2ZW50cztcbn07XG5cbnJldHVybiBFdkVtaXR0ZXI7XG5cbn0pKTtcblxuLyohXG4gKiBpbWFnZXNMb2FkZWQgdjQuMS40XG4gKiBKYXZhU2NyaXB0IGlzIGFsbCBsaWtlIFwiWW91IGltYWdlcyBhcmUgZG9uZSB5ZXQgb3Igd2hhdD9cIlxuICogTUlUIExpY2Vuc2VcbiAqL1xuXG4oIGZ1bmN0aW9uKCB3aW5kb3csIGZhY3RvcnkgKSB7ICd1c2Ugc3RyaWN0JztcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXG5cbiAgLypnbG9iYWwgZGVmaW5lOiBmYWxzZSwgbW9kdWxlOiBmYWxzZSwgcmVxdWlyZTogZmFsc2UgKi9cblxuICBpZiAoIHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kICkge1xuICAgIC8vIEFNRFxuICAgIGRlZmluZSggW1xuICAgICAgJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcidcbiAgICBdLCBmdW5jdGlvbiggRXZFbWl0dGVyICkge1xuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyICk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XG4gICAgLy8gQ29tbW9uSlNcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJylcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXG4gICAgd2luZG93LmltYWdlc0xvYWRlZCA9IGZhY3RvcnkoXG4gICAgICB3aW5kb3csXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyXG4gICAgKTtcbiAgfVxuXG59KSggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzLFxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgZmFjdG9yeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBmYWN0b3J5KCB3aW5kb3csIEV2RW1pdHRlciApIHtcblxuXG5cbnZhciAkID0gd2luZG93LmpRdWVyeTtcbnZhciBjb25zb2xlID0gd2luZG93LmNvbnNvbGU7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLy8gZXh0ZW5kIG9iamVjdHNcbmZ1bmN0aW9uIGV4dGVuZCggYSwgYiApIHtcbiAgZm9yICggdmFyIHByb3AgaW4gYiApIHtcbiAgICBhWyBwcm9wIF0gPSBiWyBwcm9wIF07XG4gIH1cbiAgcmV0dXJuIGE7XG59XG5cbnZhciBhcnJheVNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xuXG4vLyB0dXJuIGVsZW1lbnQgb3Igbm9kZUxpc3QgaW50byBhbiBhcnJheVxuZnVuY3Rpb24gbWFrZUFycmF5KCBvYmogKSB7XG4gIGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSB7XG4gICAgLy8gdXNlIG9iamVjdCBpZiBhbHJlYWR5IGFuIGFycmF5XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHZhciBpc0FycmF5TGlrZSA9IHR5cGVvZiBvYmogPT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5sZW5ndGggPT0gJ251bWJlcic7XG4gIGlmICggaXNBcnJheUxpa2UgKSB7XG4gICAgLy8gY29udmVydCBub2RlTGlzdCB0byBhcnJheVxuICAgIHJldHVybiBhcnJheVNsaWNlLmNhbGwoIG9iaiApO1xuICB9XG5cbiAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XG4gIHJldHVybiBbIG9iaiBdO1xufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpbWFnZXNMb2FkZWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuLyoqXG4gKiBAcGFyYW0ge0FycmF5LCBFbGVtZW50LCBOb2RlTGlzdCwgU3RyaW5nfSBlbGVtXG4gKiBAcGFyYW0ge09iamVjdCBvciBGdW5jdGlvbn0gb3B0aW9ucyAtIGlmIGZ1bmN0aW9uLCB1c2UgYXMgY2FsbGJhY2tcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQWx3YXlzIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAqL1xuZnVuY3Rpb24gSW1hZ2VzTG9hZGVkKCBlbGVtLCBvcHRpb25zLCBvbkFsd2F5cyApIHtcbiAgLy8gY29lcmNlIEltYWdlc0xvYWRlZCgpIHdpdGhvdXQgbmV3LCB0byBiZSBuZXcgSW1hZ2VzTG9hZGVkKClcbiAgaWYgKCAhKCB0aGlzIGluc3RhbmNlb2YgSW1hZ2VzTG9hZGVkICkgKSB7XG4gICAgcmV0dXJuIG5ldyBJbWFnZXNMb2FkZWQoIGVsZW0sIG9wdGlvbnMsIG9uQWx3YXlzICk7XG4gIH1cbiAgLy8gdXNlIGVsZW0gYXMgc2VsZWN0b3Igc3RyaW5nXG4gIHZhciBxdWVyeUVsZW0gPSBlbGVtO1xuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xuICAgIHF1ZXJ5RWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIGVsZW0gKTtcbiAgfVxuICAvLyBiYWlsIGlmIGJhZCBlbGVtZW50XG4gIGlmICggIXF1ZXJ5RWxlbSApIHtcbiAgICBjb25zb2xlLmVycm9yKCAnQmFkIGVsZW1lbnQgZm9yIGltYWdlc0xvYWRlZCAnICsgKCBxdWVyeUVsZW0gfHwgZWxlbSApICk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdGhpcy5lbGVtZW50cyA9IG1ha2VBcnJheSggcXVlcnlFbGVtICk7XG4gIHRoaXMub3B0aW9ucyA9IGV4dGVuZCgge30sIHRoaXMub3B0aW9ucyApO1xuICAvLyBzaGlmdCBhcmd1bWVudHMgaWYgbm8gb3B0aW9ucyBzZXRcbiAgaWYgKCB0eXBlb2Ygb3B0aW9ucyA9PSAnZnVuY3Rpb24nICkge1xuICAgIG9uQWx3YXlzID0gb3B0aW9ucztcbiAgfSBlbHNlIHtcbiAgICBleHRlbmQoIHRoaXMub3B0aW9ucywgb3B0aW9ucyApO1xuICB9XG5cbiAgaWYgKCBvbkFsd2F5cyApIHtcbiAgICB0aGlzLm9uKCAnYWx3YXlzJywgb25BbHdheXMgKTtcbiAgfVxuXG4gIHRoaXMuZ2V0SW1hZ2VzKCk7XG5cbiAgaWYgKCAkICkge1xuICAgIC8vIGFkZCBqUXVlcnkgRGVmZXJyZWQgb2JqZWN0XG4gICAgdGhpcy5qcURlZmVycmVkID0gbmV3ICQuRGVmZXJyZWQoKTtcbiAgfVxuXG4gIC8vIEhBQ0sgY2hlY2sgYXN5bmMgdG8gYWxsb3cgdGltZSB0byBiaW5kIGxpc3RlbmVyc1xuICBzZXRUaW1lb3V0KCB0aGlzLmNoZWNrLmJpbmQoIHRoaXMgKSApO1xufVxuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXZFbWl0dGVyLnByb3RvdHlwZSApO1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLm9wdGlvbnMgPSB7fTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5nZXRJbWFnZXMgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWFnZXMgPSBbXTtcblxuICAvLyBmaWx0ZXIgJiBmaW5kIGl0ZW1zIGlmIHdlIGhhdmUgYW4gaXRlbSBzZWxlY3RvclxuICB0aGlzLmVsZW1lbnRzLmZvckVhY2goIHRoaXMuYWRkRWxlbWVudEltYWdlcywgdGhpcyApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge05vZGV9IGVsZW1lbnRcbiAqL1xuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRFbGVtZW50SW1hZ2VzID0gZnVuY3Rpb24oIGVsZW0gKSB7XG4gIC8vIGZpbHRlciBzaWJsaW5nc1xuICBpZiAoIGVsZW0ubm9kZU5hbWUgPT0gJ0lNRycgKSB7XG4gICAgdGhpcy5hZGRJbWFnZSggZWxlbSApO1xuICB9XG4gIC8vIGdldCBiYWNrZ3JvdW5kIGltYWdlIG9uIGVsZW1lbnRcbiAgaWYgKCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCA9PT0gdHJ1ZSApIHtcbiAgICB0aGlzLmFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzKCBlbGVtICk7XG4gIH1cblxuICAvLyBmaW5kIGNoaWxkcmVuXG4gIC8vIG5vIG5vbi1lbGVtZW50IG5vZGVzLCAjMTQzXG4gIHZhciBub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG4gIGlmICggIW5vZGVUeXBlIHx8ICFlbGVtZW50Tm9kZVR5cGVzWyBub2RlVHlwZSBdICkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY2hpbGRJbWdzID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKTtcbiAgLy8gY29uY2F0IGNoaWxkRWxlbXMgdG8gZmlsdGVyRm91bmQgYXJyYXlcbiAgZm9yICggdmFyIGk9MDsgaSA8IGNoaWxkSW1ncy5sZW5ndGg7IGkrKyApIHtcbiAgICB2YXIgaW1nID0gY2hpbGRJbWdzW2ldO1xuICAgIHRoaXMuYWRkSW1hZ2UoIGltZyApO1xuICB9XG5cbiAgLy8gZ2V0IGNoaWxkIGJhY2tncm91bmQgaW1hZ2VzXG4gIGlmICggdHlwZW9mIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kID09ICdzdHJpbmcnICkge1xuICAgIHZhciBjaGlsZHJlbiA9IGVsZW0ucXVlcnlTZWxlY3RvckFsbCggdGhpcy5vcHRpb25zLmJhY2tncm91bmQgKTtcbiAgICBmb3IgKCBpPTA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKyApIHtcbiAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgdGhpcy5hZGRFbGVtZW50QmFja2dyb3VuZEltYWdlcyggY2hpbGQgKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBlbGVtZW50Tm9kZVR5cGVzID0ge1xuICAxOiB0cnVlLFxuICA5OiB0cnVlLFxuICAxMTogdHJ1ZVxufTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRFbGVtZW50QmFja2dyb3VuZEltYWdlcyA9IGZ1bmN0aW9uKCBlbGVtICkge1xuICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG4gIGlmICggIXN0eWxlICkge1xuICAgIC8vIEZpcmVmb3ggcmV0dXJucyBudWxsIGlmIGluIGEgaGlkZGVuIGlmcmFtZSBodHRwczovL2J1Z3ppbC5sYS81NDgzOTdcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gZ2V0IHVybCBpbnNpZGUgdXJsKFwiLi4uXCIpXG4gIHZhciByZVVSTCA9IC91cmxcXCgoWydcIl0pPyguKj8pXFwxXFwpL2dpO1xuICB2YXIgbWF0Y2hlcyA9IHJlVVJMLmV4ZWMoIHN0eWxlLmJhY2tncm91bmRJbWFnZSApO1xuICB3aGlsZSAoIG1hdGNoZXMgIT09IG51bGwgKSB7XG4gICAgdmFyIHVybCA9IG1hdGNoZXMgJiYgbWF0Y2hlc1syXTtcbiAgICBpZiAoIHVybCApIHtcbiAgICAgIHRoaXMuYWRkQmFja2dyb3VuZCggdXJsLCBlbGVtICk7XG4gICAgfVxuICAgIG1hdGNoZXMgPSByZVVSTC5leGVjKCBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgKTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0ltYWdlfSBpbWdcbiAqL1xuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRJbWFnZSA9IGZ1bmN0aW9uKCBpbWcgKSB7XG4gIHZhciBsb2FkaW5nSW1hZ2UgPSBuZXcgTG9hZGluZ0ltYWdlKCBpbWcgKTtcbiAgdGhpcy5pbWFnZXMucHVzaCggbG9hZGluZ0ltYWdlICk7XG59O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmFkZEJhY2tncm91bmQgPSBmdW5jdGlvbiggdXJsLCBlbGVtICkge1xuICB2YXIgYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKCB1cmwsIGVsZW0gKTtcbiAgdGhpcy5pbWFnZXMucHVzaCggYmFja2dyb3VuZCApO1xufTtcblxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICB0aGlzLnByb2dyZXNzZWRDb3VudCA9IDA7XG4gIHRoaXMuaGFzQW55QnJva2VuID0gZmFsc2U7XG4gIC8vIGNvbXBsZXRlIGlmIG5vIGltYWdlc1xuICBpZiAoICF0aGlzLmltYWdlcy5sZW5ndGggKSB7XG4gICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUHJvZ3Jlc3MoIGltYWdlLCBlbGVtLCBtZXNzYWdlICkge1xuICAgIC8vIEhBQ0sgLSBDaHJvbWUgdHJpZ2dlcnMgZXZlbnQgYmVmb3JlIG9iamVjdCBwcm9wZXJ0aWVzIGhhdmUgY2hhbmdlZC4gIzgzXG4gICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XG4gICAgICBfdGhpcy5wcm9ncmVzcyggaW1hZ2UsIGVsZW0sIG1lc3NhZ2UgKTtcbiAgICB9KTtcbiAgfVxuXG4gIHRoaXMuaW1hZ2VzLmZvckVhY2goIGZ1bmN0aW9uKCBsb2FkaW5nSW1hZ2UgKSB7XG4gICAgbG9hZGluZ0ltYWdlLm9uY2UoICdwcm9ncmVzcycsIG9uUHJvZ3Jlc3MgKTtcbiAgICBsb2FkaW5nSW1hZ2UuY2hlY2soKTtcbiAgfSk7XG59O1xuXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24oIGltYWdlLCBlbGVtLCBtZXNzYWdlICkge1xuICB0aGlzLnByb2dyZXNzZWRDb3VudCsrO1xuICB0aGlzLmhhc0FueUJyb2tlbiA9IHRoaXMuaGFzQW55QnJva2VuIHx8ICFpbWFnZS5pc0xvYWRlZDtcbiAgLy8gcHJvZ3Jlc3MgZXZlbnRcbiAgdGhpcy5lbWl0RXZlbnQoICdwcm9ncmVzcycsIFsgdGhpcywgaW1hZ2UsIGVsZW0gXSApO1xuICBpZiAoIHRoaXMuanFEZWZlcnJlZCAmJiB0aGlzLmpxRGVmZXJyZWQubm90aWZ5ICkge1xuICAgIHRoaXMuanFEZWZlcnJlZC5ub3RpZnkoIHRoaXMsIGltYWdlICk7XG4gIH1cbiAgLy8gY2hlY2sgaWYgY29tcGxldGVkXG4gIGlmICggdGhpcy5wcm9ncmVzc2VkQ291bnQgPT0gdGhpcy5pbWFnZXMubGVuZ3RoICkge1xuICAgIHRoaXMuY29tcGxldGUoKTtcbiAgfVxuXG4gIGlmICggdGhpcy5vcHRpb25zLmRlYnVnICYmIGNvbnNvbGUgKSB7XG4gICAgY29uc29sZS5sb2coICdwcm9ncmVzczogJyArIG1lc3NhZ2UsIGltYWdlLCBlbGVtICk7XG4gIH1cbn07XG5cbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGV2ZW50TmFtZSA9IHRoaXMuaGFzQW55QnJva2VuID8gJ2ZhaWwnIDogJ2RvbmUnO1xuICB0aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICB0aGlzLmVtaXRFdmVudCggZXZlbnROYW1lLCBbIHRoaXMgXSApO1xuICB0aGlzLmVtaXRFdmVudCggJ2Fsd2F5cycsIFsgdGhpcyBdICk7XG4gIGlmICggdGhpcy5qcURlZmVycmVkICkge1xuICAgIHZhciBqcU1ldGhvZCA9IHRoaXMuaGFzQW55QnJva2VuID8gJ3JlamVjdCcgOiAncmVzb2x2ZSc7XG4gICAgdGhpcy5qcURlZmVycmVkWyBqcU1ldGhvZCBdKCB0aGlzICk7XG4gIH1cbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xuXG5mdW5jdGlvbiBMb2FkaW5nSW1hZ2UoIGltZyApIHtcbiAgdGhpcy5pbWcgPSBpbWc7XG59XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgLy8gSWYgY29tcGxldGUgaXMgdHJ1ZSBhbmQgYnJvd3NlciBzdXBwb3J0cyBuYXR1cmFsIHNpemVzLFxuICAvLyB0cnkgdG8gY2hlY2sgZm9yIGltYWdlIHN0YXR1cyBtYW51YWxseS5cbiAgdmFyIGlzQ29tcGxldGUgPSB0aGlzLmdldElzSW1hZ2VDb21wbGV0ZSgpO1xuICBpZiAoIGlzQ29tcGxldGUgKSB7XG4gICAgLy8gcmVwb3J0IGJhc2VkIG9uIG5hdHVyYWxXaWR0aFxuICAgIHRoaXMuY29uZmlybSggdGhpcy5pbWcubmF0dXJhbFdpZHRoICE9PSAwLCAnbmF0dXJhbFdpZHRoJyApO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIElmIG5vbmUgb2YgdGhlIGNoZWNrcyBhYm92ZSBtYXRjaGVkLCBzaW11bGF0ZSBsb2FkaW5nIG9uIGRldGFjaGVkIGVsZW1lbnQuXG4gIHRoaXMucHJveHlJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICB0aGlzLnByb3h5SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMucHJveHlJbWFnZS5hZGRFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG4gIC8vIGJpbmQgdG8gaW1hZ2UgYXMgd2VsbCBmb3IgRmlyZWZveC4gIzE5MVxuICB0aGlzLmltZy5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xuICB0aGlzLnByb3h5SW1hZ2Uuc3JjID0gdGhpcy5pbWcuc3JjO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5nZXRJc0ltYWdlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgLy8gY2hlY2sgZm9yIG5vbi16ZXJvLCBub24tdW5kZWZpbmVkIG5hdHVyYWxXaWR0aFxuICAvLyBmaXhlcyBTYWZhcmkrSW5maW5pdGVTY3JvbGwrTWFzb25yeSBidWcgaW5maW5pdGUtc2Nyb2xsIzY3MVxuICByZXR1cm4gdGhpcy5pbWcuY29tcGxldGUgJiYgdGhpcy5pbWcubmF0dXJhbFdpZHRoO1xufTtcblxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5jb25maXJtID0gZnVuY3Rpb24oIGlzTG9hZGVkLCBtZXNzYWdlICkge1xuICB0aGlzLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG4gIHRoaXMuZW1pdEV2ZW50KCAncHJvZ3Jlc3MnLCBbIHRoaXMsIHRoaXMuaW1nLCBtZXNzYWdlIF0gKTtcbn07XG5cbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xuXG4vLyB0cmlnZ2VyIHNwZWNpZmllZCBoYW5kbGVyIGZvciBldmVudCB0eXBlXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuICB2YXIgbWV0aG9kID0gJ29uJyArIGV2ZW50LnR5cGU7XG4gIGlmICggdGhpc1sgbWV0aG9kIF0gKSB7XG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XG4gIH1cbn07XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuY29uZmlybSggdHJ1ZSwgJ29ubG9hZCcgKTtcbiAgdGhpcy51bmJpbmRFdmVudHMoKTtcbn07XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmNvbmZpcm0oIGZhbHNlLCAnb25lcnJvcicgKTtcbiAgdGhpcy51bmJpbmRFdmVudHMoKTtcbn07XG5cbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUudW5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMucHJveHlJbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcbiAgdGhpcy5wcm94eUltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgdGhpcy5pbWcucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJhY2tncm91bmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuZnVuY3Rpb24gQmFja2dyb3VuZCggdXJsLCBlbGVtZW50ICkge1xuICB0aGlzLnVybCA9IHVybDtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5pbWcgPSBuZXcgSW1hZ2UoKTtcbn1cblxuLy8gaW5oZXJpdCBMb2FkaW5nSW1hZ2UgcHJvdG90eXBlXG5CYWNrZ3JvdW5kLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIExvYWRpbmdJbWFnZS5wcm90b3R5cGUgKTtcblxuQmFja2dyb3VuZC5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcbiAgdGhpcy5pbWcuc3JjID0gdGhpcy51cmw7XG4gIC8vIGNoZWNrIGlmIGltYWdlIGlzIGFscmVhZHkgY29tcGxldGVcbiAgdmFyIGlzQ29tcGxldGUgPSB0aGlzLmdldElzSW1hZ2VDb21wbGV0ZSgpO1xuICBpZiAoIGlzQ29tcGxldGUgKSB7XG4gICAgdGhpcy5jb25maXJtKCB0aGlzLmltZy5uYXR1cmFsV2lkdGggIT09IDAsICduYXR1cmFsV2lkdGgnICk7XG4gICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgfVxufTtcblxuQmFja2dyb3VuZC5wcm90b3R5cGUudW5iaW5kRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xuICB0aGlzLmltZy5yZW1vdmVFdmVudExpc3RlbmVyKCAnZXJyb3InLCB0aGlzICk7XG59O1xuXG5CYWNrZ3JvdW5kLnByb3RvdHlwZS5jb25maXJtID0gZnVuY3Rpb24oIGlzTG9hZGVkLCBtZXNzYWdlICkge1xuICB0aGlzLmlzTG9hZGVkID0gaXNMb2FkZWQ7XG4gIHRoaXMuZW1pdEV2ZW50KCAncHJvZ3Jlc3MnLCBbIHRoaXMsIHRoaXMuZWxlbWVudCwgbWVzc2FnZSBdICk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBqUXVlcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxuSW1hZ2VzTG9hZGVkLm1ha2VKUXVlcnlQbHVnaW4gPSBmdW5jdGlvbiggalF1ZXJ5ICkge1xuICBqUXVlcnkgPSBqUXVlcnkgfHwgd2luZG93LmpRdWVyeTtcbiAgaWYgKCAhalF1ZXJ5ICkge1xuICAgIHJldHVybjtcbiAgfVxuICAvLyBzZXQgbG9jYWwgdmFyaWFibGVcbiAgJCA9IGpRdWVyeTtcbiAgLy8gJCgpLmltYWdlc0xvYWRlZCgpXG4gICQuZm4uaW1hZ2VzTG9hZGVkID0gZnVuY3Rpb24oIG9wdGlvbnMsIGNhbGxiYWNrICkge1xuICAgIHZhciBpbnN0YW5jZSA9IG5ldyBJbWFnZXNMb2FkZWQoIHRoaXMsIG9wdGlvbnMsIGNhbGxiYWNrICk7XG4gICAgcmV0dXJuIGluc3RhbmNlLmpxRGVmZXJyZWQucHJvbWlzZSggJCh0aGlzKSApO1xuICB9O1xufTtcbi8vIHRyeSBtYWtpbmcgcGx1Z2luXG5JbWFnZXNMb2FkZWQubWFrZUpRdWVyeVBsdWdpbigpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cblxucmV0dXJuIEltYWdlc0xvYWRlZDtcblxufSk7XG5cbiIsIi8qKlxuICogYnhTbGlkZXIgdjQuMi4xMlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSBTdGV2ZW4gV2FuZGVyc2tpXG4gKiBXcml0dGVuIHdoaWxlIGRyaW5raW5nIEJlbGdpYW4gYWxlcyBhbmQgbGlzdGVuaW5nIHRvIGphenpcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVClcbiAqL1xuXG47KGZ1bmN0aW9uKCQpIHtcblxuICB2YXIgZGVmYXVsdHMgPSB7XG5cbiAgICAvLyBHRU5FUkFMXG4gICAgbW9kZTogJ2hvcml6b250YWwnLFxuICAgIHNsaWRlU2VsZWN0b3I6ICcnLFxuICAgIGluZmluaXRlTG9vcDogdHJ1ZSxcbiAgICBoaWRlQ29udHJvbE9uRW5kOiBmYWxzZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIGVhc2luZzogbnVsbCxcbiAgICBzbGlkZU1hcmdpbjogMCxcbiAgICBzdGFydFNsaWRlOiAwLFxuICAgIHJhbmRvbVN0YXJ0OiBmYWxzZSxcbiAgICBjYXB0aW9uczogZmFsc2UsXG4gICAgdGlja2VyOiBmYWxzZSxcbiAgICB0aWNrZXJIb3ZlcjogZmFsc2UsXG4gICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgIGFkYXB0aXZlSGVpZ2h0U3BlZWQ6IDUwMCxcbiAgICB2aWRlbzogZmFsc2UsXG4gICAgdXNlQ1NTOiB0cnVlLFxuICAgIHByZWxvYWRJbWFnZXM6ICd2aXNpYmxlJyxcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHNsaWRlWkluZGV4OiA1MCxcbiAgICB3cmFwcGVyQ2xhc3M6ICdieC13cmFwcGVyJyxcblxuICAgIC8vIFRPVUNIXG4gICAgdG91Y2hFbmFibGVkOiB0cnVlLFxuICAgIHN3aXBlVGhyZXNob2xkOiA1MCxcbiAgICBvbmVUb09uZVRvdWNoOiB0cnVlLFxuICAgIHByZXZlbnREZWZhdWx0U3dpcGVYOiB0cnVlLFxuICAgIHByZXZlbnREZWZhdWx0U3dpcGVZOiBmYWxzZSxcblxuICAgIC8vIEFDQ0VTU0lCSUxJVFlcbiAgICBhcmlhTGl2ZTogdHJ1ZSxcbiAgICBhcmlhSGlkZGVuOiB0cnVlLFxuXG4gICAgLy8gS0VZQk9BUkRcbiAgICBrZXlib2FyZEVuYWJsZWQ6IGZhbHNlLFxuXG4gICAgLy8gUEFHRVJcbiAgICBwYWdlcjogdHJ1ZSxcbiAgICBwYWdlclR5cGU6ICdmdWxsJyxcbiAgICBwYWdlclNob3J0U2VwYXJhdG9yOiAnIC8gJyxcbiAgICBwYWdlclNlbGVjdG9yOiBudWxsLFxuICAgIGJ1aWxkUGFnZXI6IG51bGwsXG4gICAgcGFnZXJDdXN0b206IG51bGwsXG5cbiAgICAvLyBDT05UUk9MU1xuICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgIG5leHRUZXh0OiAnTmV4dCcsXG4gICAgcHJldlRleHQ6ICdQcmV2JyxcbiAgICBuZXh0U2VsZWN0b3I6IG51bGwsXG4gICAgcHJldlNlbGVjdG9yOiBudWxsLFxuICAgIGF1dG9Db250cm9sczogZmFsc2UsXG4gICAgc3RhcnRUZXh0OiAnU3RhcnQnLFxuICAgIHN0b3BUZXh0OiAnU3RvcCcsXG4gICAgYXV0b0NvbnRyb2xzQ29tYmluZTogZmFsc2UsXG4gICAgYXV0b0NvbnRyb2xzU2VsZWN0b3I6IG51bGwsXG5cbiAgICAvLyBBVVRPXG4gICAgYXV0bzogZmFsc2UsXG4gICAgcGF1c2U6IDQwMDAsXG4gICAgYXV0b1N0YXJ0OiB0cnVlLFxuICAgIGF1dG9EaXJlY3Rpb246ICduZXh0JyxcbiAgICBzdG9wQXV0b09uQ2xpY2s6IGZhbHNlLFxuICAgIGF1dG9Ib3ZlcjogZmFsc2UsXG4gICAgYXV0b0RlbGF5OiAwLFxuICAgIGF1dG9TbGlkZUZvck9uZVBhZ2U6IGZhbHNlLFxuXG4gICAgLy8gQ0FST1VTRUxcbiAgICBtaW5TbGlkZXM6IDEsXG4gICAgbWF4U2xpZGVzOiAxLFxuICAgIG1vdmVTbGlkZXM6IDAsXG4gICAgc2xpZGVXaWR0aDogMCxcbiAgICBzaHJpbmtJdGVtczogZmFsc2UsXG5cbiAgICAvLyBDQUxMQkFDS1NcbiAgICBvblNsaWRlckxvYWQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICBvblNsaWRlQmVmb3JlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgb25TbGlkZUFmdGVyOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgb25TbGlkZU5leHQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSxcbiAgICBvblNsaWRlUHJldjogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9LFxuICAgIG9uU2xpZGVyUmVzaXplOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRydWU7IH0sXG5cdG9uQXV0b0NoYW5nZTogZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9IC8vY2FsbHMgd2hlbiBhdXRvIHNsaWRlcyBzdGFydHMgYW5kIHN0b3BzXG4gIH07XG5cbiAgJC5mbi5ieFNsaWRlciA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcblxuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gc3VwcG9ydCBtdWx0aXBsZSBlbGVtZW50c1xuICAgIGlmICh0aGlzLmxlbmd0aCA+IDEpIHtcbiAgICAgIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5ieFNsaWRlcihvcHRpb25zKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gY3JlYXRlIGEgbmFtZXNwYWNlIHRvIGJlIHVzZWQgdGhyb3VnaG91dCB0aGUgcGx1Z2luXG4gICAgdmFyIHNsaWRlciA9IHt9LFxuICAgIC8vIHNldCBhIHJlZmVyZW5jZSB0byBvdXIgc2xpZGVyIGVsZW1lbnRcbiAgICBlbCA9IHRoaXMsXG4gICAgLy8gZ2V0IHRoZSBvcmlnaW5hbCB3aW5kb3cgZGltZW5zICh0aGFua3MgYSBsb3QgSUUpXG4gICAgd2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKSxcbiAgICB3aW5kb3dIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cbiAgICAvLyBSZXR1cm4gaWYgc2xpZGVyIGlzIGFscmVhZHkgaW5pdGlhbGl6ZWRcbiAgICBpZiAoJChlbCkuZGF0YSgnYnhTbGlkZXInKSkgeyByZXR1cm47IH1cblxuICAgIC8qKlxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICogPSBQUklWQVRFIEZVTkNUSU9OU1xuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyBuYW1lc3BhY2Ugc2V0dGluZ3MgdG8gYmUgdXNlZCB0aHJvdWdob3V0IHBsdWdpblxuICAgICAqL1xuICAgIHZhciBpbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBSZXR1cm4gaWYgc2xpZGVyIGlzIGFscmVhZHkgaW5pdGlhbGl6ZWRcbiAgICAgIGlmICgkKGVsKS5kYXRhKCdieFNsaWRlcicpKSB7IHJldHVybjsgfVxuICAgICAgLy8gbWVyZ2UgdXNlci1zdXBwbGllZCBvcHRpb25zIHdpdGggdGhlIGRlZmF1bHRzXG4gICAgICBzbGlkZXIuc2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgLy8gcGFyc2Ugc2xpZGVXaWR0aCBzZXR0aW5nXG4gICAgICBzbGlkZXIuc2V0dGluZ3Muc2xpZGVXaWR0aCA9IHBhcnNlSW50KHNsaWRlci5zZXR0aW5ncy5zbGlkZVdpZHRoKTtcbiAgICAgIC8vIHN0b3JlIHRoZSBvcmlnaW5hbCBjaGlsZHJlblxuICAgICAgc2xpZGVyLmNoaWxkcmVuID0gZWwuY2hpbGRyZW4oc2xpZGVyLnNldHRpbmdzLnNsaWRlU2VsZWN0b3IpO1xuICAgICAgLy8gY2hlY2sgaWYgYWN0dWFsIG51bWJlciBvZiBzbGlkZXMgaXMgbGVzcyB0aGFuIG1pblNsaWRlcyAvIG1heFNsaWRlc1xuICAgICAgaWYgKHNsaWRlci5jaGlsZHJlbi5sZW5ndGggPCBzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzKSB7IHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXMgPSBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoOyB9XG4gICAgICBpZiAoc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCA8IHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMpIHsgc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyA9IHNsaWRlci5jaGlsZHJlbi5sZW5ndGg7IH1cbiAgICAgIC8vIGlmIHJhbmRvbSBzdGFydCwgc2V0IHRoZSBzdGFydFNsaWRlIHNldHRpbmcgdG8gcmFuZG9tIG51bWJlclxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5yYW5kb21TdGFydCkgeyBzbGlkZXIuc2V0dGluZ3Muc3RhcnRTbGlkZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNsaWRlci5jaGlsZHJlbi5sZW5ndGgpOyB9XG4gICAgICAvLyBzdG9yZSBhY3RpdmUgc2xpZGUgaW5mb3JtYXRpb25cbiAgICAgIHNsaWRlci5hY3RpdmUgPSB7IGluZGV4OiBzbGlkZXIuc2V0dGluZ3Muc3RhcnRTbGlkZSB9O1xuICAgICAgLy8gc3RvcmUgaWYgdGhlIHNsaWRlciBpcyBpbiBjYXJvdXNlbCBtb2RlIChkaXNwbGF5aW5nIC8gbW92aW5nIG11bHRpcGxlIHNsaWRlcylcbiAgICAgIHNsaWRlci5jYXJvdXNlbCA9IHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXMgPiAxIHx8IHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgPiAxID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgLy8gaWYgY2Fyb3VzZWwsIGZvcmNlIHByZWxvYWRJbWFnZXMgPSAnYWxsJ1xuICAgICAgaWYgKHNsaWRlci5jYXJvdXNlbCkgeyBzbGlkZXIuc2V0dGluZ3MucHJlbG9hZEltYWdlcyA9ICdhbGwnOyB9XG4gICAgICAvLyBjYWxjdWxhdGUgdGhlIG1pbiAvIG1heCB3aWR0aCB0aHJlc2hvbGRzIGJhc2VkIG9uIG1pbiAvIG1heCBudW1iZXIgb2Ygc2xpZGVzXG4gICAgICAvLyB1c2VkIHRvIHNldHVwIGFuZCB1cGRhdGUgY2Fyb3VzZWwgc2xpZGVzIGRpbWVuc2lvbnNcbiAgICAgIHNsaWRlci5taW5UaHJlc2hvbGQgPSAoc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcyAqIHNsaWRlci5zZXR0aW5ncy5zbGlkZVdpZHRoKSArICgoc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcyAtIDEpICogc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luKTtcbiAgICAgIHNsaWRlci5tYXhUaHJlc2hvbGQgPSAoc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyAqIHNsaWRlci5zZXR0aW5ncy5zbGlkZVdpZHRoKSArICgoc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyAtIDEpICogc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luKTtcbiAgICAgIC8vIHN0b3JlIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzbGlkZXIgKGlmIGN1cnJlbnRseSBhbmltYXRpbmcsIHdvcmtpbmcgaXMgdHJ1ZSlcbiAgICAgIHNsaWRlci53b3JraW5nID0gZmFsc2U7XG4gICAgICAvLyBpbml0aWFsaXplIHRoZSBjb250cm9scyBvYmplY3RcbiAgICAgIHNsaWRlci5jb250cm9scyA9IHt9O1xuICAgICAgLy8gaW5pdGlhbGl6ZSBhbiBhdXRvIGludGVydmFsXG4gICAgICBzbGlkZXIuaW50ZXJ2YWwgPSBudWxsO1xuICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3BlcnR5IHRvIHVzZSBmb3IgdHJhbnNpdGlvbnNcbiAgICAgIHNsaWRlci5hbmltUHJvcCA9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnID8gJ3RvcCcgOiAnbGVmdCc7XG4gICAgICAvLyBkZXRlcm1pbmUgaWYgaGFyZHdhcmUgYWNjZWxlcmF0aW9uIGNhbiBiZSB1c2VkXG4gICAgICBzbGlkZXIudXNpbmdDU1MgPSBzbGlkZXIuc2V0dGluZ3MudXNlQ1NTICYmIHNsaWRlci5zZXR0aW5ncy5tb2RlICE9PSAnZmFkZScgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjcmVhdGUgb3VyIHRlc3QgZGl2IGVsZW1lbnRcbiAgICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLFxuICAgICAgICAvLyBjc3MgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzXG4gICAgICAgIHByb3BzID0gWydXZWJraXRQZXJzcGVjdGl2ZScsICdNb3pQZXJzcGVjdGl2ZScsICdPUGVyc3BlY3RpdmUnLCAnbXNQZXJzcGVjdGl2ZSddO1xuICAgICAgICAvLyB0ZXN0IGZvciBlYWNoIHByb3BlcnR5XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZGl2LnN0eWxlW3Byb3BzW2ldXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzbGlkZXIuY3NzUHJlZml4ID0gcHJvcHNbaV0ucmVwbGFjZSgnUGVyc3BlY3RpdmUnLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHNsaWRlci5hbmltUHJvcCA9ICctJyArIHNsaWRlci5jc3NQcmVmaXggKyAnLXRyYW5zZm9ybSc7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSgpKTtcbiAgICAgIC8vIGlmIHZlcnRpY2FsIG1vZGUgYWx3YXlzIG1ha2UgbWF4U2xpZGVzIGFuZCBtaW5TbGlkZXMgZXF1YWxcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJykgeyBzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzID0gc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlczsgfVxuICAgICAgLy8gc2F2ZSBvcmlnaW5hbCBzdHlsZSBkYXRhXG4gICAgICBlbC5kYXRhKCdvcmlnU3R5bGUnLCBlbC5hdHRyKCdzdHlsZScpKTtcbiAgICAgIGVsLmNoaWxkcmVuKHNsaWRlci5zZXR0aW5ncy5zbGlkZVNlbGVjdG9yKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmRhdGEoJ29yaWdTdHlsZScsICQodGhpcykuYXR0cignc3R5bGUnKSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gcGVyZm9ybSBhbGwgRE9NIC8gQ1NTIG1vZGlmaWNhdGlvbnNcbiAgICAgIHNldHVwKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGFsbCBET00gYW5kIENTUyBtb2RpZmljYXRpb25zXG4gICAgICovXG4gICAgdmFyIHNldHVwID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcHJlbG9hZFNlbGVjdG9yID0gc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5zZXR0aW5ncy5zdGFydFNsaWRlKTsgLy8gc2V0IHRoZSBkZWZhdWx0IHByZWxvYWQgc2VsZWN0b3IgKHZpc2libGUpXG5cbiAgICAgIC8vIHdyYXAgZWwgaW4gYSB3cmFwcGVyXG4gICAgICBlbC53cmFwKCc8ZGl2IGNsYXNzPVwiJyArIHNsaWRlci5zZXR0aW5ncy53cmFwcGVyQ2xhc3MgKyAnXCI+PGRpdiBjbGFzcz1cImJ4LXZpZXdwb3J0XCI+PC9kaXY+PC9kaXY+Jyk7XG4gICAgICAvLyBzdG9yZSBhIG5hbWVzcGFjZSByZWZlcmVuY2UgdG8gLmJ4LXZpZXdwb3J0XG4gICAgICBzbGlkZXIudmlld3BvcnQgPSBlbC5wYXJlbnQoKTtcblxuICAgICAgLy8gYWRkIGFyaWEtbGl2ZSBpZiB0aGUgc2V0dGluZyBpcyBlbmFibGVkIGFuZCB0aWNrZXIgbW9kZSBpcyBkaXNhYmxlZFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hcmlhTGl2ZSAmJiAhc2xpZGVyLnNldHRpbmdzLnRpY2tlcikge1xuICAgICAgICBzbGlkZXIudmlld3BvcnQuYXR0cignYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuICAgICAgfVxuICAgICAgLy8gYWRkIGEgbG9hZGluZyBkaXYgdG8gZGlzcGxheSB3aGlsZSBpbWFnZXMgYXJlIGxvYWRpbmdcbiAgICAgIHNsaWRlci5sb2FkZXIgPSAkKCc8ZGl2IGNsYXNzPVwiYngtbG9hZGluZ1wiIC8+Jyk7XG4gICAgICBzbGlkZXIudmlld3BvcnQucHJlcGVuZChzbGlkZXIubG9hZGVyKTtcbiAgICAgIC8vIHNldCBlbCB0byBhIG1hc3NpdmUgd2lkdGgsIHRvIGhvbGQgYW55IG5lZWRlZCBzbGlkZXNcbiAgICAgIC8vIGFsc28gc3RyaXAgYW55IG1hcmdpbiBhbmQgcGFkZGluZyBmcm9tIGVsXG4gICAgICBlbC5jc3Moe1xuICAgICAgICB3aWR0aDogc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/IChzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoICogMTAwMCArIDIxNSkgKyAnJScgOiAnYXV0bycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICB9KTtcbiAgICAgIC8vIGlmIHVzaW5nIENTUywgYWRkIHRoZSBlYXNpbmcgcHJvcGVydHlcbiAgICAgIGlmIChzbGlkZXIudXNpbmdDU1MgJiYgc2xpZGVyLnNldHRpbmdzLmVhc2luZykge1xuICAgICAgICBlbC5jc3MoJy0nICsgc2xpZGVyLmNzc1ByZWZpeCArICctdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nLCBzbGlkZXIuc2V0dGluZ3MuZWFzaW5nKTtcbiAgICAgIC8vIGlmIG5vdCB1c2luZyBDU1MgYW5kIG5vIGVhc2luZyB2YWx1ZSB3YXMgc3VwcGxpZWQsIHVzZSB0aGUgZGVmYXVsdCBKUyBhbmltYXRpb24gZWFzaW5nIChzd2luZylcbiAgICAgIH0gZWxzZSBpZiAoIXNsaWRlci5zZXR0aW5ncy5lYXNpbmcpIHtcbiAgICAgICAgc2xpZGVyLnNldHRpbmdzLmVhc2luZyA9ICdzd2luZyc7XG4gICAgICB9XG4gICAgICAvLyBtYWtlIG1vZGlmaWNhdGlvbnMgdG8gdGhlIHZpZXdwb3J0ICguYngtdmlld3BvcnQpXG4gICAgICBzbGlkZXIudmlld3BvcnQuY3NzKHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgfSk7XG4gICAgICBzbGlkZXIudmlld3BvcnQucGFyZW50KCkuY3NzKHtcbiAgICAgICAgbWF4V2lkdGg6IGdldFZpZXdwb3J0TWF4V2lkdGgoKVxuICAgICAgfSk7XG4gICAgICAvLyBhcHBseSBjc3MgdG8gYWxsIHNsaWRlciBjaGlsZHJlblxuICAgICAgc2xpZGVyLmNoaWxkcmVuLmNzcyh7XG4gICAgICAgIC8vIHRoZSBmbG9hdCBhdHRyaWJ1dGUgaXMgYSByZXNlcnZlZCB3b3JkIGluIGNvbXByZXNzb3JzIGxpa2UgWVVJIGNvbXByZXNzb3IgYW5kIG5lZWQgdG8gYmUgcXVvdGVkICM0OFxuICAgICAgICAnZmxvYXQnOiBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnID8gJ2xlZnQnIDogJ25vbmUnLFxuICAgICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZSdcbiAgICAgIH0pO1xuICAgICAgLy8gYXBwbHkgdGhlIGNhbGN1bGF0ZWQgd2lkdGggYWZ0ZXIgdGhlIGZsb2F0IGlzIGFwcGxpZWQgdG8gcHJldmVudCBzY3JvbGxiYXIgaW50ZXJmZXJlbmNlXG4gICAgICBzbGlkZXIuY2hpbGRyZW4uY3NzKCd3aWR0aCcsIGdldFNsaWRlV2lkdGgoKSk7XG4gICAgICAvLyBpZiBzbGlkZU1hcmdpbiBpcyBzdXBwbGllZCwgYWRkIHRoZSBjc3NcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnICYmIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbiA+IDApIHsgc2xpZGVyLmNoaWxkcmVuLmNzcygnbWFyZ2luUmlnaHQnLCBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4pOyB9XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcgJiYgc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luID4gMCkgeyBzbGlkZXIuY2hpbGRyZW4uY3NzKCdtYXJnaW5Cb3R0b20nLCBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4pOyB9XG4gICAgICAvLyBpZiBcImZhZGVcIiBtb2RlLCBhZGQgcG9zaXRpb25pbmcgYW5kIHotaW5kZXggQ1NTXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdmYWRlJykge1xuICAgICAgICBzbGlkZXIuY2hpbGRyZW4uY3NzKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICB6SW5kZXg6IDAsXG4gICAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBwcmVwYXJlIHRoZSB6LWluZGV4IG9uIHRoZSBzaG93aW5nIGVsZW1lbnRcbiAgICAgICAgc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5zZXR0aW5ncy5zdGFydFNsaWRlKS5jc3Moe3pJbmRleDogc2xpZGVyLnNldHRpbmdzLnNsaWRlWkluZGV4LCBkaXNwbGF5OiAnYmxvY2snfSk7XG4gICAgICB9XG4gICAgICAvLyBjcmVhdGUgYW4gZWxlbWVudCB0byBjb250YWluIGFsbCBzbGlkZXIgY29udHJvbHMgKHBhZ2VyLCBzdGFydCAvIHN0b3AsIGV0YylcbiAgICAgIHNsaWRlci5jb250cm9scy5lbCA9ICQoJzxkaXYgY2xhc3M9XCJieC1jb250cm9sc1wiIC8+Jyk7XG4gICAgICAvLyBpZiBjYXB0aW9ucyBhcmUgcmVxdWVzdGVkLCBhZGQgdGhlbVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5jYXB0aW9ucykgeyBhcHBlbmRDYXB0aW9ucygpOyB9XG4gICAgICAvLyBjaGVjayBpZiBzdGFydFNsaWRlIGlzIGxhc3Qgc2xpZGVcbiAgICAgIHNsaWRlci5hY3RpdmUubGFzdCA9IHNsaWRlci5zZXR0aW5ncy5zdGFydFNsaWRlID09PSBnZXRQYWdlclF0eSgpIC0gMTtcbiAgICAgIC8vIGlmIHZpZGVvIGlzIHRydWUsIHNldCB1cCB0aGUgZml0VmlkcyBwbHVnaW5cbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MudmlkZW8pIHsgZWwuZml0VmlkcygpOyB9XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnByZWxvYWRJbWFnZXMgPT09ICdhbGwnIHx8IHNsaWRlci5zZXR0aW5ncy50aWNrZXIpIHsgcHJlbG9hZFNlbGVjdG9yID0gc2xpZGVyLmNoaWxkcmVuOyB9XG4gICAgICAvLyBvbmx5IGNoZWNrIGZvciBjb250cm9sIGFkZGl0aW9uIGlmIG5vdCBpbiBcInRpY2tlclwiIG1vZGVcbiAgICAgIGlmICghc2xpZGVyLnNldHRpbmdzLnRpY2tlcikge1xuICAgICAgICAvLyBpZiBjb250cm9scyBhcmUgcmVxdWVzdGVkLCBhZGQgdGhlbVxuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmNvbnRyb2xzKSB7IGFwcGVuZENvbnRyb2xzKCk7IH1cbiAgICAgICAgLy8gaWYgYXV0byBpcyB0cnVlLCBhbmQgYXV0byBjb250cm9scyBhcmUgcmVxdWVzdGVkLCBhZGQgdGhlbVxuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG8gJiYgc2xpZGVyLnNldHRpbmdzLmF1dG9Db250cm9scykgeyBhcHBlbmRDb250cm9sc0F1dG8oKTsgfVxuICAgICAgICAvLyBpZiBwYWdlciBpcyByZXF1ZXN0ZWQsIGFkZCBpdFxuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnBhZ2VyKSB7IGFwcGVuZFBhZ2VyKCk7IH1cbiAgICAgICAgLy8gaWYgYW55IGNvbnRyb2wgb3B0aW9uIGlzIHJlcXVlc3RlZCwgYWRkIHRoZSBjb250cm9scyB3cmFwcGVyXG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuY29udHJvbHMgfHwgc2xpZGVyLnNldHRpbmdzLmF1dG9Db250cm9scyB8fCBzbGlkZXIuc2V0dGluZ3MucGFnZXIpIHsgc2xpZGVyLnZpZXdwb3J0LmFmdGVyKHNsaWRlci5jb250cm9scy5lbCk7IH1cbiAgICAgIC8vIGlmIHRpY2tlciBtb2RlLCBkbyBub3QgYWxsb3cgYSBwYWdlclxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVyLnNldHRpbmdzLnBhZ2VyID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBsb2FkRWxlbWVudHMocHJlbG9hZFNlbGVjdG9yLCBzdGFydCk7XG4gICAgfTtcblxuICAgIHZhciBsb2FkRWxlbWVudHMgPSBmdW5jdGlvbihzZWxlY3RvciwgY2FsbGJhY2spIHtcbiAgICAgIHZhciB0b3RhbCA9IHNlbGVjdG9yLmZpbmQoJ2ltZzpub3QoW3NyYz1cIlwiXSksIGlmcmFtZScpLmxlbmd0aCxcbiAgICAgIGNvdW50ID0gMDtcbiAgICAgIGlmICh0b3RhbCA9PT0gMCkge1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWxlY3Rvci5maW5kKCdpbWc6bm90KFtzcmM9XCJcIl0pLCBpZnJhbWUnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLm9uZSgnbG9hZCBlcnJvcicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICgrK2NvdW50ID09PSB0b3RhbCkgeyBjYWxsYmFjaygpOyB9XG4gICAgICAgIH0pLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY29tcGxldGUgfHwgdGhpcy5zcmMgPT0gJycpIHsgJCh0aGlzKS50cmlnZ2VyKCdsb2FkJyk7IH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3RhcnQgdGhlIHNsaWRlclxuICAgICAqL1xuICAgIHZhciBzdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gaWYgaW5maW5pdGUgbG9vcCwgcHJlcGFyZSBhZGRpdGlvbmFsIHNsaWRlc1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5pbmZpbml0ZUxvb3AgJiYgc2xpZGVyLnNldHRpbmdzLm1vZGUgIT09ICdmYWRlJyAmJiAhc2xpZGVyLnNldHRpbmdzLnRpY2tlcikge1xuICAgICAgICB2YXIgc2xpY2UgICAgPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJyA/IHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXMgOiBzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzLFxuICAgICAgICBzbGljZUFwcGVuZCAgPSBzbGlkZXIuY2hpbGRyZW4uc2xpY2UoMCwgc2xpY2UpLmNsb25lKHRydWUpLmFkZENsYXNzKCdieC1jbG9uZScpLFxuICAgICAgICBzbGljZVByZXBlbmQgPSBzbGlkZXIuY2hpbGRyZW4uc2xpY2UoLXNsaWNlKS5jbG9uZSh0cnVlKS5hZGRDbGFzcygnYngtY2xvbmUnKTtcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hcmlhSGlkZGVuKSB7XG4gICAgICAgICAgc2xpY2VBcHBlbmQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgICBzbGljZVByZXBlbmQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbC5hcHBlbmQoc2xpY2VBcHBlbmQpLnByZXBlbmQoc2xpY2VQcmVwZW5kKTtcbiAgICAgIH1cbiAgICAgIC8vIHJlbW92ZSB0aGUgbG9hZGluZyBET00gZWxlbWVudFxuICAgICAgc2xpZGVyLmxvYWRlci5yZW1vdmUoKTtcbiAgICAgIC8vIHNldCB0aGUgbGVmdCAvIHRvcCBwb3NpdGlvbiBvZiBcImVsXCJcbiAgICAgIHNldFNsaWRlUG9zaXRpb24oKTtcbiAgICAgIC8vIGlmIFwidmVydGljYWxcIiBtb2RlLCBhbHdheXMgdXNlIGFkYXB0aXZlSGVpZ2h0IHRvIHByZXZlbnQgb2RkIGJlaGF2aW9yXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcpIHsgc2xpZGVyLnNldHRpbmdzLmFkYXB0aXZlSGVpZ2h0ID0gdHJ1ZTsgfVxuICAgICAgLy8gc2V0IHRoZSB2aWV3cG9ydCBoZWlnaHRcbiAgICAgIHNsaWRlci52aWV3cG9ydC5oZWlnaHQoZ2V0Vmlld3BvcnRIZWlnaHQoKSk7XG4gICAgICAvLyBtYWtlIHN1cmUgZXZlcnl0aGluZyBpcyBwb3NpdGlvbmVkIGp1c3QgcmlnaHQgKHNhbWUgYXMgYSB3aW5kb3cgcmVzaXplKVxuICAgICAgZWwucmVkcmF3U2xpZGVyKCk7XG4gICAgICAvLyBvblNsaWRlckxvYWQgY2FsbGJhY2tcbiAgICAgIHNsaWRlci5zZXR0aW5ncy5vblNsaWRlckxvYWQuY2FsbChlbCwgc2xpZGVyLmFjdGl2ZS5pbmRleCk7XG4gICAgICAvLyBzbGlkZXIgaGFzIGJlZW4gZnVsbHkgaW5pdGlhbGl6ZWRcbiAgICAgIHNsaWRlci5pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAvLyBiaW5kIHRoZSByZXNpemUgY2FsbCB0byB0aGUgd2luZG93XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnJlc3BvbnNpdmUpIHsgJCh3aW5kb3cpLmJpbmQoJ3Jlc2l6ZScsIHJlc2l6ZVdpbmRvdyk7IH1cbiAgICAgIC8vIGlmIGF1dG8gaXMgdHJ1ZSBhbmQgaGFzIG1vcmUgdGhhbiAxIHBhZ2UsIHN0YXJ0IHRoZSBzaG93XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG8gJiYgc2xpZGVyLnNldHRpbmdzLmF1dG9TdGFydCAmJiAoZ2V0UGFnZXJRdHkoKSA+IDEgfHwgc2xpZGVyLnNldHRpbmdzLmF1dG9TbGlkZUZvck9uZVBhZ2UpKSB7IGluaXRBdXRvKCk7IH1cbiAgICAgIC8vIGlmIHRpY2tlciBpcyB0cnVlLCBzdGFydCB0aGUgdGlja2VyXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnRpY2tlcikgeyBpbml0VGlja2VyKCk7IH1cbiAgICAgIC8vIGlmIHBhZ2VyIGlzIHJlcXVlc3RlZCwgbWFrZSB0aGUgYXBwcm9wcmlhdGUgcGFnZXIgbGluayBhY3RpdmVcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MucGFnZXIpIHsgdXBkYXRlUGFnZXJBY3RpdmUoc2xpZGVyLnNldHRpbmdzLnN0YXJ0U2xpZGUpOyB9XG4gICAgICAvLyBjaGVjayBmb3IgYW55IHVwZGF0ZXMgdG8gdGhlIGNvbnRyb2xzIChsaWtlIGhpZGVDb250cm9sT25FbmQgdXBkYXRlcylcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuY29udHJvbHMpIHsgdXBkYXRlRGlyZWN0aW9uQ29udHJvbHMoKTsgfVxuICAgICAgLy8gaWYgdG91Y2hFbmFibGVkIGlzIHRydWUsIHNldHVwIHRoZSB0b3VjaCBldmVudHNcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MudG91Y2hFbmFibGVkICYmICFzbGlkZXIuc2V0dGluZ3MudGlja2VyKSB7IGluaXRUb3VjaCgpOyB9XG4gICAgICAvLyBpZiBrZXlib2FyZEVuYWJsZWQgaXMgdHJ1ZSwgc2V0dXAgdGhlIGtleWJvYXJkIGV2ZW50c1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5rZXlib2FyZEVuYWJsZWQgJiYgIXNsaWRlci5zZXR0aW5ncy50aWNrZXIpIHtcbiAgICAgICAgJChkb2N1bWVudCkua2V5ZG93bihrZXlQcmVzcyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhbGN1bGF0ZWQgaGVpZ2h0IG9mIHRoZSB2aWV3cG9ydCwgdXNlZCB0byBkZXRlcm1pbmUgZWl0aGVyIGFkYXB0aXZlSGVpZ2h0IG9yIHRoZSBtYXhIZWlnaHQgdmFsdWVcbiAgICAgKi9cbiAgICB2YXIgZ2V0Vmlld3BvcnRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBoZWlnaHQgPSAwO1xuICAgICAgLy8gZmlyc3QgZGV0ZXJtaW5lIHdoaWNoIGNoaWxkcmVuIChzbGlkZXMpIHNob3VsZCBiZSB1c2VkIGluIG91ciBoZWlnaHQgY2FsY3VsYXRpb25cbiAgICAgIHZhciBjaGlsZHJlbiA9ICQoKTtcbiAgICAgIC8vIGlmIG1vZGUgaXMgbm90IFwidmVydGljYWxcIiBhbmQgYWRhcHRpdmVIZWlnaHQgaXMgZmFsc2UsIGluY2x1ZGUgYWxsIGNoaWxkcmVuXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgIT09ICd2ZXJ0aWNhbCcgJiYgIXNsaWRlci5zZXR0aW5ncy5hZGFwdGl2ZUhlaWdodCkge1xuICAgICAgICBjaGlsZHJlbiA9IHNsaWRlci5jaGlsZHJlbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGlmIG5vdCBjYXJvdXNlbCwgcmV0dXJuIHRoZSBzaW5nbGUgYWN0aXZlIGNoaWxkXG4gICAgICAgIGlmICghc2xpZGVyLmNhcm91c2VsKSB7XG4gICAgICAgICAgY2hpbGRyZW4gPSBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLmFjdGl2ZS5pbmRleCk7XG4gICAgICAgIC8vIGlmIGNhcm91c2VsLCByZXR1cm4gYSBzbGljZSBvZiBjaGlsZHJlblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGdldCB0aGUgaW5kaXZpZHVhbCBzbGlkZSBpbmRleFxuICAgICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBzbGlkZXIuc2V0dGluZ3MubW92ZVNsaWRlcyA9PT0gMSA/IHNsaWRlci5hY3RpdmUuaW5kZXggOiBzbGlkZXIuYWN0aXZlLmluZGV4ICogZ2V0TW92ZUJ5KCk7XG4gICAgICAgICAgLy8gYWRkIHRoZSBjdXJyZW50IHNsaWRlIHRvIHRoZSBjaGlsZHJlblxuICAgICAgICAgIGNoaWxkcmVuID0gc2xpZGVyLmNoaWxkcmVuLmVxKGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgLy8gY3ljbGUgdGhyb3VnaCB0aGUgcmVtYWluaW5nIFwic2hvd2luZ1wiIHNsaWRlc1xuICAgICAgICAgIGZvciAoaSA9IDE7IGkgPD0gc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyAtIDE7IGkrKykge1xuICAgICAgICAgICAgLy8gaWYgbG9vcGVkIGJhY2sgdG8gdGhlIHN0YXJ0XG4gICAgICAgICAgICBpZiAoY3VycmVudEluZGV4ICsgaSA+PSBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGRyZW4uYWRkKHNsaWRlci5jaGlsZHJlbi5lcShpIC0gMSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY2hpbGRyZW4gPSBjaGlsZHJlbi5hZGQoc2xpZGVyLmNoaWxkcmVuLmVxKGN1cnJlbnRJbmRleCArIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGlmIFwidmVydGljYWxcIiBtb2RlLCBjYWxjdWxhdGUgdGhlIHN1bSBvZiB0aGUgaGVpZ2h0cyBvZiB0aGUgY2hpbGRyZW5cbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBjaGlsZHJlbi5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgaGVpZ2h0ICs9ICQodGhpcykub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGFkZCB1c2VyLXN1cHBsaWVkIG1hcmdpbnNcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbiA+IDApIHtcbiAgICAgICAgICBoZWlnaHQgKz0gc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luICogKHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXMgLSAxKTtcbiAgICAgICAgfVxuICAgICAgLy8gaWYgbm90IFwidmVydGljYWxcIiBtb2RlLCBjYWxjdWxhdGUgdGhlIG1heCBoZWlnaHQgb2YgdGhlIGNoaWxkcmVuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1heC5hcHBseShNYXRoLCBjaGlsZHJlbi5tYXAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuICQodGhpcykub3V0ZXJIZWlnaHQoZmFsc2UpO1xuICAgICAgICB9KS5nZXQoKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzbGlkZXIudmlld3BvcnQuY3NzKCdib3gtc2l6aW5nJykgPT09ICdib3JkZXItYm94Jykge1xuICAgICAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChzbGlkZXIudmlld3BvcnQuY3NzKCdwYWRkaW5nLXRvcCcpKSArIHBhcnNlRmxvYXQoc2xpZGVyLnZpZXdwb3J0LmNzcygncGFkZGluZy1ib3R0b20nKSkgK1xuICAgICAgICAgICAgICBwYXJzZUZsb2F0KHNsaWRlci52aWV3cG9ydC5jc3MoJ2JvcmRlci10b3Atd2lkdGgnKSkgKyBwYXJzZUZsb2F0KHNsaWRlci52aWV3cG9ydC5jc3MoJ2JvcmRlci1ib3R0b20td2lkdGgnKSk7XG4gICAgICB9IGVsc2UgaWYgKHNsaWRlci52aWV3cG9ydC5jc3MoJ2JveC1zaXppbmcnKSA9PT0gJ3BhZGRpbmctYm94Jykge1xuICAgICAgICBoZWlnaHQgKz0gcGFyc2VGbG9hdChzbGlkZXIudmlld3BvcnQuY3NzKCdwYWRkaW5nLXRvcCcpKSArIHBhcnNlRmxvYXQoc2xpZGVyLnZpZXdwb3J0LmNzcygncGFkZGluZy1ib3R0b20nKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhbGN1bGF0ZWQgd2lkdGggdG8gYmUgdXNlZCBmb3IgdGhlIG91dGVyIHdyYXBwZXIgLyB2aWV3cG9ydFxuICAgICAqL1xuICAgIHZhciBnZXRWaWV3cG9ydE1heFdpZHRoID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgd2lkdGggPSAnMTAwJSc7XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnNsaWRlV2lkdGggPiAwKSB7XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgd2lkdGggPSAoc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyAqIHNsaWRlci5zZXR0aW5ncy5zbGlkZVdpZHRoKSArICgoc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyAtIDEpICogc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aWR0aCA9IHNsaWRlci5zZXR0aW5ncy5zbGlkZVdpZHRoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gd2lkdGg7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNhbGN1bGF0ZWQgd2lkdGggdG8gYmUgYXBwbGllZCB0byBlYWNoIHNsaWRlXG4gICAgICovXG4gICAgdmFyIGdldFNsaWRlV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuZXdFbFdpZHRoID0gc2xpZGVyLnNldHRpbmdzLnNsaWRlV2lkdGgsIC8vIHN0YXJ0IHdpdGggYW55IHVzZXItc3VwcGxpZWQgc2xpZGUgd2lkdGhcbiAgICAgIHdyYXBXaWR0aCAgICAgID0gc2xpZGVyLnZpZXdwb3J0LndpZHRoKCk7ICAgIC8vIGdldCB0aGUgY3VycmVudCB2aWV3cG9ydCB3aWR0aFxuICAgICAgLy8gaWYgc2xpZGUgd2lkdGggd2FzIG5vdCBzdXBwbGllZCwgb3IgaXMgbGFyZ2VyIHRoYW4gdGhlIHZpZXdwb3J0IHVzZSB0aGUgdmlld3BvcnQgd2lkdGhcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3Muc2xpZGVXaWR0aCA9PT0gMCB8fFxuICAgICAgICAoc2xpZGVyLnNldHRpbmdzLnNsaWRlV2lkdGggPiB3cmFwV2lkdGggJiYgIXNsaWRlci5jYXJvdXNlbCkgfHxcbiAgICAgICAgc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgbmV3RWxXaWR0aCA9IHdyYXBXaWR0aDtcbiAgICAgIC8vIGlmIGNhcm91c2VsLCB1c2UgdGhlIHRocmVzaG9sZHMgdG8gZGV0ZXJtaW5lIHRoZSB3aWR0aFxuICAgICAgfSBlbHNlIGlmIChzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzID4gMSAmJiBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgIGlmICh3cmFwV2lkdGggPiBzbGlkZXIubWF4VGhyZXNob2xkKSB7XG4gICAgICAgICAgcmV0dXJuIG5ld0VsV2lkdGg7XG4gICAgICAgIH0gZWxzZSBpZiAod3JhcFdpZHRoIDwgc2xpZGVyLm1pblRocmVzaG9sZCkge1xuICAgICAgICAgIG5ld0VsV2lkdGggPSAod3JhcFdpZHRoIC0gKHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbiAqIChzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzIC0gMSkpKSAvIHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXM7XG4gICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLnNldHRpbmdzLnNocmlua0l0ZW1zKSB7XG4gICAgICAgICAgbmV3RWxXaWR0aCA9IE1hdGguZmxvb3IoKHdyYXBXaWR0aCArIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbikgLyAoTWF0aC5jZWlsKCh3cmFwV2lkdGggKyBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4pIC8gKG5ld0VsV2lkdGggKyBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4pKSkgLSBzbGlkZXIuc2V0dGluZ3Muc2xpZGVNYXJnaW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3RWxXaWR0aDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHNsaWRlcyBjdXJyZW50bHkgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnQgKGluY2x1ZGVzIHBhcnRpYWxseSB2aXNpYmxlIHNsaWRlcylcbiAgICAgKi9cbiAgICB2YXIgZ2V0TnVtYmVyU2xpZGVzU2hvd2luZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHNsaWRlc1Nob3dpbmcgPSAxLFxuICAgICAgY2hpbGRXaWR0aCA9IG51bGw7XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyAmJiBzbGlkZXIuc2V0dGluZ3Muc2xpZGVXaWR0aCA+IDApIHtcbiAgICAgICAgLy8gaWYgdmlld3BvcnQgaXMgc21hbGxlciB0aGFuIG1pblRocmVzaG9sZCwgcmV0dXJuIG1pblNsaWRlc1xuICAgICAgICBpZiAoc2xpZGVyLnZpZXdwb3J0LndpZHRoKCkgPCBzbGlkZXIubWluVGhyZXNob2xkKSB7XG4gICAgICAgICAgc2xpZGVzU2hvd2luZyA9IHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXM7XG4gICAgICAgIC8vIGlmIHZpZXdwb3J0IGlzIGxhcmdlciB0aGFuIG1heFRocmVzaG9sZCwgcmV0dXJuIG1heFNsaWRlc1xuICAgICAgICB9IGVsc2UgaWYgKHNsaWRlci52aWV3cG9ydC53aWR0aCgpID4gc2xpZGVyLm1heFRocmVzaG9sZCkge1xuICAgICAgICAgIHNsaWRlc1Nob3dpbmcgPSBzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzO1xuICAgICAgICAvLyBpZiB2aWV3cG9ydCBpcyBiZXR3ZWVuIG1pbiAvIG1heCB0aHJlc2hvbGRzLCBkaXZpZGUgdmlld3BvcnQgd2lkdGggYnkgZmlyc3QgY2hpbGQgd2lkdGhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGlsZFdpZHRoID0gc2xpZGVyLmNoaWxkcmVuLmZpcnN0KCkud2lkdGgoKSArIHNsaWRlci5zZXR0aW5ncy5zbGlkZU1hcmdpbjtcbiAgICAgICAgICBzbGlkZXNTaG93aW5nID0gTWF0aC5mbG9vcigoc2xpZGVyLnZpZXdwb3J0LndpZHRoKCkgK1xuICAgICAgICAgICAgc2xpZGVyLnNldHRpbmdzLnNsaWRlTWFyZ2luKSAvIGNoaWxkV2lkdGgpIHx8IDE7XG4gICAgICAgIH1cbiAgICAgIC8vIGlmIFwidmVydGljYWxcIiBtb2RlLCBzbGlkZXMgc2hvd2luZyB3aWxsIGFsd2F5cyBiZSBtaW5TbGlkZXNcbiAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgc2xpZGVzU2hvd2luZyA9IHNsaWRlci5zZXR0aW5ncy5taW5TbGlkZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2xpZGVzU2hvd2luZztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHBhZ2VzIChvbmUgZnVsbCB2aWV3cG9ydCBvZiBzbGlkZXMgaXMgb25lIFwicGFnZVwiKVxuICAgICAqL1xuICAgIHZhciBnZXRQYWdlclF0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBhZ2VyUXR5ID0gMCxcbiAgICAgIGJyZWFrUG9pbnQgPSAwLFxuICAgICAgY291bnRlciA9IDA7XG4gICAgICAvLyBpZiBtb3ZlU2xpZGVzIGlzIHNwZWNpZmllZCBieSB0aGUgdXNlclxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb3ZlU2xpZGVzID4gMCkge1xuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmluZmluaXRlTG9vcCkge1xuICAgICAgICAgIHBhZ2VyUXR5ID0gTWF0aC5jZWlsKHNsaWRlci5jaGlsZHJlbi5sZW5ndGggLyBnZXRNb3ZlQnkoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gd2hlbiBicmVha3BvaW50IGdvZXMgYWJvdmUgY2hpbGRyZW4gbGVuZ3RoLCBjb3VudGVyIGlzIHRoZSBudW1iZXIgb2YgcGFnZXNcbiAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IHNsaWRlci5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICsrcGFnZXJRdHk7XG4gICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIGdldE51bWJlclNsaWRlc1Nob3dpbmcoKTtcbiAgICAgICAgICAgIGNvdW50ZXIgKz0gc2xpZGVyLnNldHRpbmdzLm1vdmVTbGlkZXMgPD0gZ2V0TnVtYmVyU2xpZGVzU2hvd2luZygpID8gc2xpZGVyLnNldHRpbmdzLm1vdmVTbGlkZXMgOiBnZXROdW1iZXJTbGlkZXNTaG93aW5nKCk7XG4gICAgICAgICAgfVxuXHRcdCAgcmV0dXJuIGNvdW50ZXI7XG4gICAgICAgIH1cbiAgICAgIC8vIGlmIG1vdmVTbGlkZXMgaXMgMCAoYXV0bykgZGl2aWRlIGNoaWxkcmVuIGxlbmd0aCBieSBzaWRlcyBzaG93aW5nLCB0aGVuIHJvdW5kIHVwXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYWdlclF0eSA9IE1hdGguY2VpbChzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoIC8gZ2V0TnVtYmVyU2xpZGVzU2hvd2luZygpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwYWdlclF0eTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGluZGl2aWR1YWwgc2xpZGVzIGJ5IHdoaWNoIHRvIHNoaWZ0IHRoZSBzbGlkZXJcbiAgICAgKi9cbiAgICB2YXIgZ2V0TW92ZUJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBpZiBtb3ZlU2xpZGVzIHdhcyBzZXQgYnkgdGhlIHVzZXIgYW5kIG1vdmVTbGlkZXMgaXMgbGVzcyB0aGFuIG51bWJlciBvZiBzbGlkZXMgc2hvd2luZ1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb3ZlU2xpZGVzID4gMCAmJiBzbGlkZXIuc2V0dGluZ3MubW92ZVNsaWRlcyA8PSBnZXROdW1iZXJTbGlkZXNTaG93aW5nKCkpIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlci5zZXR0aW5ncy5tb3ZlU2xpZGVzO1xuICAgICAgfVxuICAgICAgLy8gaWYgbW92ZVNsaWRlcyBpcyAwIChhdXRvKVxuICAgICAgcmV0dXJuIGdldE51bWJlclNsaWRlc1Nob3dpbmcoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2xpZGVyJ3MgKGVsKSBsZWZ0IG9yIHRvcCBwb3NpdGlvblxuICAgICAqL1xuICAgIHZhciBzZXRTbGlkZVBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgcG9zaXRpb24sIGxhc3RDaGlsZCwgbGFzdFNob3dpbmdJbmRleDtcbiAgICAgIC8vIGlmIGxhc3Qgc2xpZGUsIG5vdCBpbmZpbml0ZSBsb29wLCBhbmQgbnVtYmVyIG9mIGNoaWxkcmVuIGlzIGxhcmdlciB0aGFuIHNwZWNpZmllZCBtYXhTbGlkZXNcbiAgICAgIGlmIChzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoID4gc2xpZGVyLnNldHRpbmdzLm1heFNsaWRlcyAmJiBzbGlkZXIuYWN0aXZlLmxhc3QgJiYgIXNsaWRlci5zZXR0aW5ncy5pbmZpbml0ZUxvb3ApIHtcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAvLyBnZXQgdGhlIGxhc3QgY2hpbGQncyBwb3NpdGlvblxuICAgICAgICAgIGxhc3RDaGlsZCA9IHNsaWRlci5jaGlsZHJlbi5sYXN0KCk7XG4gICAgICAgICAgcG9zaXRpb24gPSBsYXN0Q2hpbGQucG9zaXRpb24oKTtcbiAgICAgICAgICAvLyBzZXQgdGhlIGxlZnQgcG9zaXRpb25cbiAgICAgICAgICBzZXRQb3NpdGlvblByb3BlcnR5KC0ocG9zaXRpb24ubGVmdCAtIChzbGlkZXIudmlld3BvcnQud2lkdGgoKSAtIGxhc3RDaGlsZC5vdXRlcldpZHRoKCkpKSwgJ3Jlc2V0JywgMCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgICAgICAvLyBnZXQgdGhlIGxhc3Qgc2hvd2luZyBpbmRleCdzIHBvc2l0aW9uXG4gICAgICAgICAgbGFzdFNob3dpbmdJbmRleCA9IHNsaWRlci5jaGlsZHJlbi5sZW5ndGggLSBzbGlkZXIuc2V0dGluZ3MubWluU2xpZGVzO1xuICAgICAgICAgIHBvc2l0aW9uID0gc2xpZGVyLmNoaWxkcmVuLmVxKGxhc3RTaG93aW5nSW5kZXgpLnBvc2l0aW9uKCk7XG4gICAgICAgICAgLy8gc2V0IHRoZSB0b3AgcG9zaXRpb25cbiAgICAgICAgICBzZXRQb3NpdGlvblByb3BlcnR5KC1wb3NpdGlvbi50b3AsICdyZXNldCcsIDApO1xuICAgICAgICB9XG4gICAgICAvLyBpZiBub3QgbGFzdCBzbGlkZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3Qgc2hvd2luZyBzbGlkZVxuICAgICAgICBwb3NpdGlvbiA9IHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuYWN0aXZlLmluZGV4ICogZ2V0TW92ZUJ5KCkpLnBvc2l0aW9uKCk7XG4gICAgICAgIC8vIGNoZWNrIGZvciBsYXN0IHNsaWRlXG4gICAgICAgIGlmIChzbGlkZXIuYWN0aXZlLmluZGV4ID09PSBnZXRQYWdlclF0eSgpIC0gMSkgeyBzbGlkZXIuYWN0aXZlLmxhc3QgPSB0cnVlOyB9XG4gICAgICAgIC8vIHNldCB0aGUgcmVzcGVjdGl2ZSBwb3NpdGlvblxuICAgICAgICBpZiAocG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7IHNldFBvc2l0aW9uUHJvcGVydHkoLXBvc2l0aW9uLmxlZnQsICdyZXNldCcsIDApOyB9XG4gICAgICAgICAgZWxzZSBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICd2ZXJ0aWNhbCcpIHsgc2V0UG9zaXRpb25Qcm9wZXJ0eSgtcG9zaXRpb24udG9wLCAncmVzZXQnLCAwKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsJ3MgYW5pbWF0aW5nIHByb3BlcnR5IHBvc2l0aW9uICh3aGljaCBpbiB0dXJuIHdpbGwgc29tZXRpbWVzIGFuaW1hdGUgZWwpLlxuICAgICAqIElmIHVzaW5nIENTUywgc2V0cyB0aGUgdHJhbnNmb3JtIHByb3BlcnR5LiBJZiBub3QgdXNpbmcgQ1NTLCBzZXRzIHRoZSB0b3AgLyBsZWZ0IHByb3BlcnR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlIChpbnQpXG4gICAgICogIC0gdGhlIGFuaW1hdGluZyBwcm9wZXJ0eSdzIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdHlwZSAoc3RyaW5nKSAnc2xpZGUnLCAncmVzZXQnLCAndGlja2VyJ1xuICAgICAqICAtIHRoZSB0eXBlIG9mIGluc3RhbmNlIGZvciB3aGljaCB0aGUgZnVuY3Rpb24gaXMgYmVpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiAoaW50KVxuICAgICAqICAtIHRoZSBhbW91bnQgb2YgdGltZSAoaW4gbXMpIHRoZSB0cmFuc2l0aW9uIHNob3VsZCBvY2N1cHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbXMgKGFycmF5KSBvcHRpb25hbFxuICAgICAqICAtIGFuIG9wdGlvbmFsIHBhcmFtZXRlciBjb250YWluaW5nIGFueSB2YXJpYWJsZXMgdGhhdCBuZWVkIHRvIGJlIHBhc3NlZCBpblxuICAgICAqL1xuICAgIHZhciBzZXRQb3NpdGlvblByb3BlcnR5ID0gZnVuY3Rpb24odmFsdWUsIHR5cGUsIGR1cmF0aW9uLCBwYXJhbXMpIHtcbiAgICAgIHZhciBhbmltYXRlT2JqLCBwcm9wVmFsdWU7XG4gICAgICAvLyB1c2UgQ1NTIHRyYW5zZm9ybVxuICAgICAgaWYgKHNsaWRlci51c2luZ0NTUykge1xuICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIHRyYW5zbGF0ZTNkIHZhbHVlXG4gICAgICAgIHByb3BWYWx1ZSA9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAndmVydGljYWwnID8gJ3RyYW5zbGF0ZTNkKDAsICcgKyB2YWx1ZSArICdweCwgMCknIDogJ3RyYW5zbGF0ZTNkKCcgKyB2YWx1ZSArICdweCwgMCwgMCknO1xuICAgICAgICAvLyBhZGQgdGhlIENTUyB0cmFuc2l0aW9uLWR1cmF0aW9uXG4gICAgICAgIGVsLmNzcygnLScgKyBzbGlkZXIuY3NzUHJlZml4ICsgJy10cmFuc2l0aW9uLWR1cmF0aW9uJywgZHVyYXRpb24gLyAxMDAwICsgJ3MnKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzbGlkZScpIHtcbiAgICAgICAgICAvLyBzZXQgdGhlIHByb3BlcnR5IHZhbHVlXG4gICAgICAgICAgZWwuY3NzKHNsaWRlci5hbmltUHJvcCwgcHJvcFZhbHVlKTtcbiAgICAgICAgICBpZiAoZHVyYXRpb24gIT09IDApIHtcbiAgICAgICAgICAgIC8vIGJpbmQgYSBjYWxsYmFjayBtZXRob2QgLSBleGVjdXRlcyB3aGVuIENTUyB0cmFuc2l0aW9uIGNvbXBsZXRlc1xuICAgICAgICAgICAgZWwuYmluZCgndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgLy9tYWtlIHN1cmUgaXQncyB0aGUgY29ycmVjdCBvbmVcbiAgICAgICAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5pcyhlbCkpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgIC8vIHVuYmluZCB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgZWwudW5iaW5kKCd0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kJyk7XG4gICAgICAgICAgICAgIHVwZGF0ZUFmdGVyU2xpZGVUcmFuc2l0aW9uKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2UgeyAvL2R1cmF0aW9uID0gMFxuICAgICAgICAgICAgdXBkYXRlQWZ0ZXJTbGlkZVRyYW5zaXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3Jlc2V0Jykge1xuICAgICAgICAgIGVsLmNzcyhzbGlkZXIuYW5pbVByb3AsIHByb3BWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RpY2tlcicpIHtcbiAgICAgICAgICAvLyBtYWtlIHRoZSB0cmFuc2l0aW9uIHVzZSAnbGluZWFyJ1xuICAgICAgICAgIGVsLmNzcygnLScgKyBzbGlkZXIuY3NzUHJlZml4ICsgJy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbicsICdsaW5lYXInKTtcbiAgICAgICAgICBlbC5jc3Moc2xpZGVyLmFuaW1Qcm9wLCBwcm9wVmFsdWUpO1xuICAgICAgICAgIGlmIChkdXJhdGlvbiAhPT0gMCkge1xuICAgICAgICAgICAgZWwuYmluZCgndHJhbnNpdGlvbmVuZCB3ZWJraXRUcmFuc2l0aW9uRW5kIG9UcmFuc2l0aW9uRW5kIE1TVHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgLy9tYWtlIHN1cmUgaXQncyB0aGUgY29ycmVjdCBvbmVcbiAgICAgICAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5pcyhlbCkpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgIC8vIHVuYmluZCB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgZWwudW5iaW5kKCd0cmFuc2l0aW9uZW5kIHdlYmtpdFRyYW5zaXRpb25FbmQgb1RyYW5zaXRpb25FbmQgTVNUcmFuc2l0aW9uRW5kJyk7XG4gICAgICAgICAgICAgIC8vIHJlc2V0IHRoZSBwb3NpdGlvblxuICAgICAgICAgICAgICBzZXRQb3NpdGlvblByb3BlcnR5KHBhcmFtcy5yZXNldFZhbHVlLCAncmVzZXQnLCAwKTtcbiAgICAgICAgICAgICAgLy8gc3RhcnQgdGhlIGxvb3AgYWdhaW5cbiAgICAgICAgICAgICAgdGlja2VyTG9vcCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHsgLy9kdXJhdGlvbiA9IDBcbiAgICAgICAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkocGFyYW1zLnJlc2V0VmFsdWUsICdyZXNldCcsIDApO1xuICAgICAgICAgICAgdGlja2VyTG9vcCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgLy8gdXNlIEpTIGFuaW1hdGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFuaW1hdGVPYmogPSB7fTtcbiAgICAgICAgYW5pbWF0ZU9ialtzbGlkZXIuYW5pbVByb3BdID0gdmFsdWU7XG4gICAgICAgIGlmICh0eXBlID09PSAnc2xpZGUnKSB7XG4gICAgICAgICAgZWwuYW5pbWF0ZShhbmltYXRlT2JqLCBkdXJhdGlvbiwgc2xpZGVyLnNldHRpbmdzLmVhc2luZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB1cGRhdGVBZnRlclNsaWRlVHJhbnNpdGlvbigpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZXNldCcpIHtcbiAgICAgICAgICBlbC5jc3Moc2xpZGVyLmFuaW1Qcm9wLCB2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3RpY2tlcicpIHtcbiAgICAgICAgICBlbC5hbmltYXRlKGFuaW1hdGVPYmosIGR1cmF0aW9uLCAnbGluZWFyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBzZXRQb3NpdGlvblByb3BlcnR5KHBhcmFtcy5yZXNldFZhbHVlLCAncmVzZXQnLCAwKTtcbiAgICAgICAgICAgIC8vIHJ1biB0aGUgcmVjdXJzaXZlIGxvb3AgYWZ0ZXIgYW5pbWF0aW9uXG4gICAgICAgICAgICB0aWNrZXJMb29wKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUG9wdWxhdGVzIHRoZSBwYWdlciB3aXRoIHByb3BlciBhbW91bnQgb2YgcGFnZXNcbiAgICAgKi9cbiAgICB2YXIgcG9wdWxhdGVQYWdlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHBhZ2VySHRtbCA9ICcnLFxuICAgICAgbGlua0NvbnRlbnQgPSAnJyxcbiAgICAgIHBhZ2VyUXR5ID0gZ2V0UGFnZXJRdHkoKTtcbiAgICAgIC8vIGxvb3AgdGhyb3VnaCBlYWNoIHBhZ2VyIGl0ZW1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFnZXJRdHk7IGkrKykge1xuICAgICAgICBsaW5rQ29udGVudCA9ICcnO1xuICAgICAgICAvLyBpZiBhIGJ1aWxkUGFnZXIgZnVuY3Rpb24gaXMgc3VwcGxpZWQsIHVzZSBpdCB0byBnZXQgcGFnZXIgbGluayB2YWx1ZSwgZWxzZSB1c2UgaW5kZXggKyAxXG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYnVpbGRQYWdlciAmJiAkLmlzRnVuY3Rpb24oc2xpZGVyLnNldHRpbmdzLmJ1aWxkUGFnZXIpIHx8IHNsaWRlci5zZXR0aW5ncy5wYWdlckN1c3RvbSkge1xuICAgICAgICAgIGxpbmtDb250ZW50ID0gc2xpZGVyLnNldHRpbmdzLmJ1aWxkUGFnZXIoaSk7XG4gICAgICAgICAgc2xpZGVyLnBhZ2VyRWwuYWRkQ2xhc3MoJ2J4LWN1c3RvbS1wYWdlcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpbmtDb250ZW50ID0gaSArIDE7XG4gICAgICAgICAgc2xpZGVyLnBhZ2VyRWwuYWRkQ2xhc3MoJ2J4LWRlZmF1bHQtcGFnZXInKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB2YXIgbGlua0NvbnRlbnQgPSBzbGlkZXIuc2V0dGluZ3MuYnVpbGRQYWdlciAmJiAkLmlzRnVuY3Rpb24oc2xpZGVyLnNldHRpbmdzLmJ1aWxkUGFnZXIpID8gc2xpZGVyLnNldHRpbmdzLmJ1aWxkUGFnZXIoaSkgOiBpICsgMTtcbiAgICAgICAgLy8gYWRkIHRoZSBtYXJrdXAgdG8gdGhlIHN0cmluZ1xuICAgICAgICBwYWdlckh0bWwgKz0gJzxkaXYgY2xhc3M9XCJieC1wYWdlci1pdGVtXCI+PGEgaHJlZj1cIlwiIGRhdGEtc2xpZGUtaW5kZXg9XCInICsgaSArICdcIiBjbGFzcz1cImJ4LXBhZ2VyLWxpbmtcIj4nICsgbGlua0NvbnRlbnQgKyAnPC9hPjwvZGl2Pic7XG4gICAgICB9XG4gICAgICAvLyBwb3B1bGF0ZSB0aGUgcGFnZXIgZWxlbWVudCB3aXRoIHBhZ2VyIGxpbmtzXG4gICAgICBzbGlkZXIucGFnZXJFbC5odG1sKHBhZ2VySHRtbCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgdGhlIHBhZ2VyIHRvIHRoZSBjb250cm9scyBlbGVtZW50XG4gICAgICovXG4gICAgdmFyIGFwcGVuZFBhZ2VyID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIXNsaWRlci5zZXR0aW5ncy5wYWdlckN1c3RvbSkge1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHBhZ2VyIERPTSBlbGVtZW50XG4gICAgICAgIHNsaWRlci5wYWdlckVsID0gJCgnPGRpdiBjbGFzcz1cImJ4LXBhZ2VyXCIgLz4nKTtcbiAgICAgICAgLy8gaWYgYSBwYWdlciBzZWxlY3RvciB3YXMgc3VwcGxpZWQsIHBvcHVsYXRlIGl0IHdpdGggdGhlIHBhZ2VyXG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MucGFnZXJTZWxlY3Rvcikge1xuICAgICAgICAgICQoc2xpZGVyLnNldHRpbmdzLnBhZ2VyU2VsZWN0b3IpLmh0bWwoc2xpZGVyLnBhZ2VyRWwpO1xuICAgICAgICAvLyBpZiBubyBwYWdlciBzZWxlY3RvciB3YXMgc3VwcGxpZWQsIGFkZCBpdCBhZnRlciB0aGUgd3JhcHBlclxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlci5jb250cm9scy5lbC5hZGRDbGFzcygnYngtaGFzLXBhZ2VyJykuYXBwZW5kKHNsaWRlci5wYWdlckVsKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBwb3B1bGF0ZSB0aGUgcGFnZXJcbiAgICAgICAgcG9wdWxhdGVQYWdlcigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVyLnBhZ2VyRWwgPSAkKHNsaWRlci5zZXR0aW5ncy5wYWdlckN1c3RvbSk7XG4gICAgICB9XG4gICAgICAvLyBhc3NpZ24gdGhlIHBhZ2VyIGNsaWNrIGJpbmRpbmdcbiAgICAgIHNsaWRlci5wYWdlckVsLm9uKCdjbGljayB0b3VjaGVuZCcsICdhJywgY2xpY2tQYWdlckJpbmQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHByZXYgLyBuZXh0IGNvbnRyb2xzIHRvIHRoZSBjb250cm9scyBlbGVtZW50XG4gICAgICovXG4gICAgdmFyIGFwcGVuZENvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG4gICAgICBzbGlkZXIuY29udHJvbHMubmV4dCA9ICQoJzxhIGNsYXNzPVwiYngtbmV4dFwiIGhyZWY9XCJcIj4nICsgc2xpZGVyLnNldHRpbmdzLm5leHRUZXh0ICsgJzwvYT4nKTtcbiAgICAgIHNsaWRlci5jb250cm9scy5wcmV2ID0gJCgnPGEgY2xhc3M9XCJieC1wcmV2XCIgaHJlZj1cIlwiPicgKyBzbGlkZXIuc2V0dGluZ3MucHJldlRleHQgKyAnPC9hPicpO1xuICAgICAgLy8gYmluZCBjbGljayBhY3Rpb25zIHRvIHRoZSBjb250cm9sc1xuICAgICAgc2xpZGVyLmNvbnRyb2xzLm5leHQuYmluZCgnY2xpY2sgdG91Y2hlbmQnLCBjbGlja05leHRCaW5kKTtcbiAgICAgIHNsaWRlci5jb250cm9scy5wcmV2LmJpbmQoJ2NsaWNrIHRvdWNoZW5kJywgY2xpY2tQcmV2QmluZCk7XG4gICAgICAvLyBpZiBuZXh0U2VsZWN0b3Igd2FzIHN1cHBsaWVkLCBwb3B1bGF0ZSBpdFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5uZXh0U2VsZWN0b3IpIHtcbiAgICAgICAgJChzbGlkZXIuc2V0dGluZ3MubmV4dFNlbGVjdG9yKS5hcHBlbmQoc2xpZGVyLmNvbnRyb2xzLm5leHQpO1xuICAgICAgfVxuICAgICAgLy8gaWYgcHJldlNlbGVjdG9yIHdhcyBzdXBwbGllZCwgcG9wdWxhdGUgaXRcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MucHJldlNlbGVjdG9yKSB7XG4gICAgICAgICQoc2xpZGVyLnNldHRpbmdzLnByZXZTZWxlY3RvcikuYXBwZW5kKHNsaWRlci5jb250cm9scy5wcmV2KTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIG5vIGN1c3RvbSBzZWxlY3RvcnMgd2VyZSBzdXBwbGllZFxuICAgICAgaWYgKCFzbGlkZXIuc2V0dGluZ3MubmV4dFNlbGVjdG9yICYmICFzbGlkZXIuc2V0dGluZ3MucHJldlNlbGVjdG9yKSB7XG4gICAgICAgIC8vIGFkZCB0aGUgY29udHJvbHMgdG8gdGhlIERPTVxuICAgICAgICBzbGlkZXIuY29udHJvbHMuZGlyZWN0aW9uRWwgPSAkKCc8ZGl2IGNsYXNzPVwiYngtY29udHJvbHMtZGlyZWN0aW9uXCIgLz4nKTtcbiAgICAgICAgLy8gYWRkIHRoZSBjb250cm9sIGVsZW1lbnRzIHRvIHRoZSBkaXJlY3Rpb25FbFxuICAgICAgICBzbGlkZXIuY29udHJvbHMuZGlyZWN0aW9uRWwuYXBwZW5kKHNsaWRlci5jb250cm9scy5wcmV2KS5hcHBlbmQoc2xpZGVyLmNvbnRyb2xzLm5leHQpO1xuICAgICAgICAvLyBzbGlkZXIudmlld3BvcnQuYXBwZW5kKHNsaWRlci5jb250cm9scy5kaXJlY3Rpb25FbCk7XG4gICAgICAgIHNsaWRlci5jb250cm9scy5lbC5hZGRDbGFzcygnYngtaGFzLWNvbnRyb2xzLWRpcmVjdGlvbicpLmFwcGVuZChzbGlkZXIuY29udHJvbHMuZGlyZWN0aW9uRWwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIHN0YXJ0IC8gc3RvcCBhdXRvIGNvbnRyb2xzIHRvIHRoZSBjb250cm9scyBlbGVtZW50XG4gICAgICovXG4gICAgdmFyIGFwcGVuZENvbnRyb2xzQXV0byA9IGZ1bmN0aW9uKCkge1xuICAgICAgc2xpZGVyLmNvbnRyb2xzLnN0YXJ0ID0gJCgnPGRpdiBjbGFzcz1cImJ4LWNvbnRyb2xzLWF1dG8taXRlbVwiPjxhIGNsYXNzPVwiYngtc3RhcnRcIiBocmVmPVwiXCI+JyArIHNsaWRlci5zZXR0aW5ncy5zdGFydFRleHQgKyAnPC9hPjwvZGl2PicpO1xuICAgICAgc2xpZGVyLmNvbnRyb2xzLnN0b3AgPSAkKCc8ZGl2IGNsYXNzPVwiYngtY29udHJvbHMtYXV0by1pdGVtXCI+PGEgY2xhc3M9XCJieC1zdG9wXCIgaHJlZj1cIlwiPicgKyBzbGlkZXIuc2V0dGluZ3Muc3RvcFRleHQgKyAnPC9hPjwvZGl2PicpO1xuICAgICAgLy8gYWRkIHRoZSBjb250cm9scyB0byB0aGUgRE9NXG4gICAgICBzbGlkZXIuY29udHJvbHMuYXV0b0VsID0gJCgnPGRpdiBjbGFzcz1cImJ4LWNvbnRyb2xzLWF1dG9cIiAvPicpO1xuICAgICAgLy8gYmluZCBjbGljayBhY3Rpb25zIHRvIHRoZSBjb250cm9sc1xuICAgICAgc2xpZGVyLmNvbnRyb2xzLmF1dG9FbC5vbignY2xpY2snLCAnLmJ4LXN0YXJ0JywgY2xpY2tTdGFydEJpbmQpO1xuICAgICAgc2xpZGVyLmNvbnRyb2xzLmF1dG9FbC5vbignY2xpY2snLCAnLmJ4LXN0b3AnLCBjbGlja1N0b3BCaW5kKTtcbiAgICAgIC8vIGlmIGF1dG9Db250cm9sc0NvbWJpbmUsIGluc2VydCBvbmx5IHRoZSBcInN0YXJ0XCIgY29udHJvbFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvQ29udHJvbHNDb21iaW5lKSB7XG4gICAgICAgIHNsaWRlci5jb250cm9scy5hdXRvRWwuYXBwZW5kKHNsaWRlci5jb250cm9scy5zdGFydCk7XG4gICAgICAvLyBpZiBhdXRvQ29udHJvbHNDb21iaW5lIGlzIGZhbHNlLCBpbnNlcnQgYm90aCBjb250cm9sc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLmF1dG9FbC5hcHBlbmQoc2xpZGVyLmNvbnRyb2xzLnN0YXJ0KS5hcHBlbmQoc2xpZGVyLmNvbnRyb2xzLnN0b3ApO1xuICAgICAgfVxuICAgICAgLy8gaWYgYXV0byBjb250cm9scyBzZWxlY3RvciB3YXMgc3VwcGxpZWQsIHBvcHVsYXRlIGl0IHdpdGggdGhlIGNvbnRyb2xzXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG9Db250cm9sc1NlbGVjdG9yKSB7XG4gICAgICAgICQoc2xpZGVyLnNldHRpbmdzLmF1dG9Db250cm9sc1NlbGVjdG9yKS5odG1sKHNsaWRlci5jb250cm9scy5hdXRvRWwpO1xuICAgICAgLy8gaWYgYXV0byBjb250cm9scyBzZWxlY3RvciB3YXMgbm90IHN1cHBsaWVkLCBhZGQgaXQgYWZ0ZXIgdGhlIHdyYXBwZXJcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNsaWRlci5jb250cm9scy5lbC5hZGRDbGFzcygnYngtaGFzLWNvbnRyb2xzLWF1dG8nKS5hcHBlbmQoc2xpZGVyLmNvbnRyb2xzLmF1dG9FbCk7XG4gICAgICB9XG4gICAgICAvLyB1cGRhdGUgdGhlIGF1dG8gY29udHJvbHNcbiAgICAgIHVwZGF0ZUF1dG9Db250cm9scyhzbGlkZXIuc2V0dGluZ3MuYXV0b1N0YXJ0ID8gJ3N0b3AnIDogJ3N0YXJ0Jyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgaW1hZ2UgY2FwdGlvbnMgdG8gdGhlIERPTVxuICAgICAqL1xuICAgIHZhciBhcHBlbmRDYXB0aW9ucyA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gY3ljbGUgdGhyb3VnaCBlYWNoIGNoaWxkXG4gICAgICBzbGlkZXIuY2hpbGRyZW4uZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAvLyBnZXQgdGhlIGltYWdlIHRpdGxlIGF0dHJpYnV0ZVxuICAgICAgICB2YXIgdGl0bGUgPSAkKHRoaXMpLmZpbmQoJ2ltZzpmaXJzdCcpLmF0dHIoJ3RpdGxlJyk7XG4gICAgICAgIC8vIGFwcGVuZCB0aGUgY2FwdGlvblxuICAgICAgICBpZiAodGl0bGUgIT09IHVuZGVmaW5lZCAmJiAoJycgKyB0aXRsZSkubGVuZ3RoKSB7XG4gICAgICAgICAgJCh0aGlzKS5hcHBlbmQoJzxkaXYgY2xhc3M9XCJieC1jYXB0aW9uXCI+PHNwYW4+JyArIHRpdGxlICsgJzwvc3Bhbj48L2Rpdj4nKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsaWNrIG5leHQgYmluZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGUgKGV2ZW50KVxuICAgICAqICAtIERPTSBldmVudCBvYmplY3RcbiAgICAgKi9cbiAgICB2YXIgY2xpY2tOZXh0QmluZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChzbGlkZXIuY29udHJvbHMuZWwuaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHsgcmV0dXJuOyB9XG4gICAgICAvLyBpZiBhdXRvIHNob3cgaXMgcnVubmluZywgc3RvcCBpdFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvICYmIHNsaWRlci5zZXR0aW5ncy5zdG9wQXV0b09uQ2xpY2spIHsgZWwuc3RvcEF1dG8oKTsgfVxuICAgICAgZWwuZ29Ub05leHRTbGlkZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGljayBwcmV2IGJpbmRpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIChldmVudClcbiAgICAgKiAgLSBET00gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgdmFyIGNsaWNrUHJldkJpbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoc2xpZGVyLmNvbnRyb2xzLmVsLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7IHJldHVybjsgfVxuICAgICAgLy8gaWYgYXV0byBzaG93IGlzIHJ1bm5pbmcsIHN0b3AgaXRcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0byAmJiBzbGlkZXIuc2V0dGluZ3Muc3RvcEF1dG9PbkNsaWNrKSB7IGVsLnN0b3BBdXRvKCk7IH1cbiAgICAgIGVsLmdvVG9QcmV2U2xpZGUoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xpY2sgc3RhcnQgYmluZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGUgKGV2ZW50KVxuICAgICAqICAtIERPTSBldmVudCBvYmplY3RcbiAgICAgKi9cbiAgICB2YXIgY2xpY2tTdGFydEJpbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgICBlbC5zdGFydEF1dG8oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xpY2sgc3RvcCBiaW5kaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAoZXZlbnQpXG4gICAgICogIC0gRE9NIGV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIHZhciBjbGlja1N0b3BCaW5kID0gZnVuY3Rpb24oZSkge1xuICAgICAgZWwuc3RvcEF1dG8oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xpY2sgcGFnZXIgYmluZGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGUgKGV2ZW50KVxuICAgICAqICAtIERPTSBldmVudCBvYmplY3RcbiAgICAgKi9cbiAgICB2YXIgY2xpY2tQYWdlckJpbmQgPSBmdW5jdGlvbihlKSB7XG4gICAgICB2YXIgcGFnZXJMaW5rLCBwYWdlckluZGV4O1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKHNsaWRlci5jb250cm9scy5lbC5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBpZiBhdXRvIHNob3cgaXMgcnVubmluZywgc3RvcCBpdFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvICAmJiBzbGlkZXIuc2V0dGluZ3Muc3RvcEF1dG9PbkNsaWNrKSB7IGVsLnN0b3BBdXRvKCk7IH1cbiAgICAgIHBhZ2VyTGluayA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIGlmIChwYWdlckxpbmsuYXR0cignZGF0YS1zbGlkZS1pbmRleCcpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFnZXJJbmRleCA9IHBhcnNlSW50KHBhZ2VyTGluay5hdHRyKCdkYXRhLXNsaWRlLWluZGV4JykpO1xuICAgICAgICAvLyBpZiBjbGlja2VkIHBhZ2VyIGxpbmsgaXMgbm90IGFjdGl2ZSwgY29udGludWUgd2l0aCB0aGUgZ29Ub1NsaWRlIGNhbGxcbiAgICAgICAgaWYgKHBhZ2VySW5kZXggIT09IHNsaWRlci5hY3RpdmUuaW5kZXgpIHsgZWwuZ29Ub1NsaWRlKHBhZ2VySW5kZXgpOyB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBhZ2VyIGxpbmtzIHdpdGggYW4gYWN0aXZlIGNsYXNzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2xpZGVJbmRleCAoaW50KVxuICAgICAqICAtIGluZGV4IG9mIHNsaWRlIHRvIG1ha2UgYWN0aXZlXG4gICAgICovXG4gICAgdmFyIHVwZGF0ZVBhZ2VyQWN0aXZlID0gZnVuY3Rpb24oc2xpZGVJbmRleCkge1xuICAgICAgLy8gaWYgXCJzaG9ydFwiIHBhZ2VyIHR5cGVcbiAgICAgIHZhciBsZW4gPSBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoOyAvLyBuYiBvZiBjaGlsZHJlblxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5wYWdlclR5cGUgPT09ICdzaG9ydCcpIHtcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgPiAxKSB7XG4gICAgICAgICAgbGVuID0gTWF0aC5jZWlsKHNsaWRlci5jaGlsZHJlbi5sZW5ndGggLyBzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzKTtcbiAgICAgICAgfVxuICAgICAgICBzbGlkZXIucGFnZXJFbC5odG1sKChzbGlkZUluZGV4ICsgMSkgKyBzbGlkZXIuc2V0dGluZ3MucGFnZXJTaG9ydFNlcGFyYXRvciArIGxlbik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIHJlbW92ZSBhbGwgcGFnZXIgYWN0aXZlIGNsYXNzZXNcbiAgICAgIHNsaWRlci5wYWdlckVsLmZpbmQoJ2EnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAvLyBhcHBseSB0aGUgYWN0aXZlIGNsYXNzIGZvciBhbGwgcGFnZXJzXG4gICAgICBzbGlkZXIucGFnZXJFbC5lYWNoKGZ1bmN0aW9uKGksIGVsKSB7ICQoZWwpLmZpbmQoJ2EnKS5lcShzbGlkZUluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7IH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBuZWVkZWQgYWN0aW9ucyBhZnRlciBhIHNsaWRlIHRyYW5zaXRpb25cbiAgICAgKi9cbiAgICB2YXIgdXBkYXRlQWZ0ZXJTbGlkZVRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGlmIGluZmluaXRlIGxvb3AgaXMgdHJ1ZVxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5pbmZpbml0ZUxvb3ApIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gJyc7XG4gICAgICAgIC8vIGZpcnN0IHNsaWRlXG4gICAgICAgIGlmIChzbGlkZXIuYWN0aXZlLmluZGV4ID09PSAwKSB7XG4gICAgICAgICAgLy8gc2V0IHRoZSBuZXcgcG9zaXRpb25cbiAgICAgICAgICBwb3NpdGlvbiA9IHNsaWRlci5jaGlsZHJlbi5lcSgwKS5wb3NpdGlvbigpO1xuICAgICAgICAvLyBjYXJvdXNlbCwgbGFzdCBzbGlkZVxuICAgICAgICB9IGVsc2UgaWYgKHNsaWRlci5hY3RpdmUuaW5kZXggPT09IGdldFBhZ2VyUXR5KCkgLSAxICYmIHNsaWRlci5jYXJvdXNlbCkge1xuICAgICAgICAgIHBvc2l0aW9uID0gc2xpZGVyLmNoaWxkcmVuLmVxKChnZXRQYWdlclF0eSgpIC0gMSkgKiBnZXRNb3ZlQnkoKSkucG9zaXRpb24oKTtcbiAgICAgICAgLy8gbGFzdCBzbGlkZVxuICAgICAgICB9IGVsc2UgaWYgKHNsaWRlci5hY3RpdmUuaW5kZXggPT09IHNsaWRlci5jaGlsZHJlbi5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgcG9zaXRpb24gPSBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLmNoaWxkcmVuLmxlbmd0aCAtIDEpLnBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHsgc2V0UG9zaXRpb25Qcm9wZXJ0eSgtcG9zaXRpb24ubGVmdCwgJ3Jlc2V0JywgMCk7IH1cbiAgICAgICAgICBlbHNlIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ3ZlcnRpY2FsJykgeyBzZXRQb3NpdGlvblByb3BlcnR5KC1wb3NpdGlvbi50b3AsICdyZXNldCcsIDApOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGRlY2xhcmUgdGhhdCB0aGUgdHJhbnNpdGlvbiBpcyBjb21wbGV0ZVxuICAgICAgc2xpZGVyLndvcmtpbmcgPSBmYWxzZTtcbiAgICAgIC8vIG9uU2xpZGVBZnRlciBjYWxsYmFja1xuICAgICAgc2xpZGVyLnNldHRpbmdzLm9uU2xpZGVBZnRlci5jYWxsKGVsLCBzbGlkZXIuY2hpbGRyZW4uZXEoc2xpZGVyLmFjdGl2ZS5pbmRleCksIHNsaWRlci5vbGRJbmRleCwgc2xpZGVyLmFjdGl2ZS5pbmRleCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIGF1dG8gY29udHJvbHMgc3RhdGUgKGVpdGhlciBhY3RpdmUsIG9yIGNvbWJpbmVkIHN3aXRjaClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdGF0ZSAoc3RyaW5nKSBcInN0YXJ0XCIsIFwic3RvcFwiXG4gICAgICogIC0gdGhlIG5ldyBzdGF0ZSBvZiB0aGUgYXV0byBzaG93XG4gICAgICovXG4gICAgdmFyIHVwZGF0ZUF1dG9Db250cm9scyA9IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAvLyBpZiBhdXRvQ29udHJvbHNDb21iaW5lIGlzIHRydWUsIHJlcGxhY2UgdGhlIGN1cnJlbnQgY29udHJvbCB3aXRoIHRoZSBuZXcgc3RhdGVcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0b0NvbnRyb2xzQ29tYmluZSkge1xuICAgICAgICBzbGlkZXIuY29udHJvbHMuYXV0b0VsLmh0bWwoc2xpZGVyLmNvbnRyb2xzW3N0YXRlXSk7XG4gICAgICAvLyBpZiBhdXRvQ29udHJvbHNDb21iaW5lIGlzIGZhbHNlLCBhcHBseSB0aGUgXCJhY3RpdmVcIiBjbGFzcyB0byB0aGUgYXBwcm9wcmlhdGUgY29udHJvbFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLmF1dG9FbC5maW5kKCdhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICBzbGlkZXIuY29udHJvbHMuYXV0b0VsLmZpbmQoJ2E6bm90KC5ieC0nICsgc3RhdGUgKyAnKScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZGlyZWN0aW9uIGNvbnRyb2xzIChjaGVja3MgaWYgZWl0aGVyIHNob3VsZCBiZSBoaWRkZW4pXG4gICAgICovXG4gICAgdmFyIHVwZGF0ZURpcmVjdGlvbkNvbnRyb2xzID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoZ2V0UGFnZXJRdHkoKSA9PT0gMSkge1xuICAgICAgICBzbGlkZXIuY29udHJvbHMucHJldi5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLm5leHQuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICB9IGVsc2UgaWYgKCFzbGlkZXIuc2V0dGluZ3MuaW5maW5pdGVMb29wICYmIHNsaWRlci5zZXR0aW5ncy5oaWRlQ29udHJvbE9uRW5kKSB7XG4gICAgICAgIC8vIGlmIGZpcnN0IHNsaWRlXG4gICAgICAgIGlmIChzbGlkZXIuYWN0aXZlLmluZGV4ID09PSAwKSB7XG4gICAgICAgICAgc2xpZGVyLmNvbnRyb2xzLnByZXYuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgc2xpZGVyLmNvbnRyb2xzLm5leHQucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIC8vIGlmIGxhc3Qgc2xpZGVcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZXIuYWN0aXZlLmluZGV4ID09PSBnZXRQYWdlclF0eSgpIC0gMSkge1xuICAgICAgICAgIHNsaWRlci5jb250cm9scy5uZXh0LmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgIHNsaWRlci5jb250cm9scy5wcmV2LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAvLyBpZiBhbnkgc2xpZGUgaW4gdGhlIG1pZGRsZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNsaWRlci5jb250cm9scy5wcmV2LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgIHNsaWRlci5jb250cm9scy5uZXh0LnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblx0LyogYXV0byBzdGFydCBhbmQgc3RvcCBmdW5jdGlvbnMgKi9cblx0dmFyIHdpbmRvd0ZvY3VzSGFuZGxlciA9IGZ1bmN0aW9uKCkgeyBlbC5zdGFydEF1dG8oKTsgfTtcblx0dmFyIHdpbmRvd0JsdXJIYW5kbGVyID0gZnVuY3Rpb24oKSB7IGVsLnN0b3BBdXRvKCk7IH07XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIGF1dG8gcHJvY2Vzc1xuICAgICAqL1xuICAgIHZhciBpbml0QXV0byA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gaWYgYXV0b0RlbGF5IHdhcyBzdXBwbGllZCwgbGF1bmNoIHRoZSBhdXRvIHNob3cgdXNpbmcgYSBzZXRUaW1lb3V0KCkgY2FsbFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvRGVsYXkgPiAwKSB7XG4gICAgICAgIHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChlbC5zdGFydEF1dG8sIHNsaWRlci5zZXR0aW5ncy5hdXRvRGVsYXkpO1xuICAgICAgLy8gaWYgYXV0b0RlbGF5IHdhcyBub3Qgc3VwcGxpZWQsIHN0YXJ0IHRoZSBhdXRvIHNob3cgbm9ybWFsbHlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLnN0YXJ0QXV0bygpO1xuXG4gICAgICAgIC8vYWRkIGZvY3VzIGFuZCBibHVyIGV2ZW50cyB0byBlbnN1cmUgaXRzIHJ1bm5pbmcgaWYgdGltZW91dCBnZXRzIHBhdXNlZFxuICAgICAgICAkKHdpbmRvdykuZm9jdXMod2luZG93Rm9jdXNIYW5kbGVyKS5ibHVyKHdpbmRvd0JsdXJIYW5kbGVyKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmIGF1dG9Ib3ZlciBpcyByZXF1ZXN0ZWRcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0b0hvdmVyKSB7XG4gICAgICAgIC8vIG9uIGVsIGhvdmVyXG4gICAgICAgIGVsLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIGlmIHRoZSBhdXRvIHNob3cgaXMgY3VycmVudGx5IHBsYXlpbmcgKGhhcyBhbiBhY3RpdmUgaW50ZXJ2YWwpXG4gICAgICAgICAgaWYgKHNsaWRlci5pbnRlcnZhbCkge1xuICAgICAgICAgICAgLy8gc3RvcCB0aGUgYXV0byBzaG93IGFuZCBwYXNzIHRydWUgYXJndW1lbnQgd2hpY2ggd2lsbCBwcmV2ZW50IGNvbnRyb2wgdXBkYXRlXG4gICAgICAgICAgICBlbC5zdG9wQXV0byh0cnVlKTtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIG5ldyBhdXRvUGF1c2VkIHZhbHVlIHdoaWNoIHdpbGwgYmUgdXNlZCBieSB0aGUgcmVsYXRpdmUgXCJtb3VzZW91dFwiIGV2ZW50XG4gICAgICAgICAgICBzbGlkZXIuYXV0b1BhdXNlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBpZiB0aGUgYXV0b1BhdXNlZCB2YWx1ZSB3YXMgY3JlYXRlZCBiZSB0aGUgcHJpb3IgXCJtb3VzZW92ZXJcIiBldmVudFxuICAgICAgICAgIGlmIChzbGlkZXIuYXV0b1BhdXNlZCkge1xuICAgICAgICAgICAgLy8gc3RhcnQgdGhlIGF1dG8gc2hvdyBhbmQgcGFzcyB0cnVlIGFyZ3VtZW50IHdoaWNoIHdpbGwgcHJldmVudCBjb250cm9sIHVwZGF0ZVxuICAgICAgICAgICAgZWwuc3RhcnRBdXRvKHRydWUpO1xuICAgICAgICAgICAgLy8gcmVzZXQgdGhlIGF1dG9QYXVzZWQgdmFsdWVcbiAgICAgICAgICAgIHNsaWRlci5hdXRvUGF1c2VkID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplcyB0aGUgdGlja2VyIHByb2Nlc3NcbiAgICAgKi9cbiAgICB2YXIgaW5pdFRpY2tlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSAwLFxuICAgICAgcG9zaXRpb24sIHRyYW5zZm9ybSwgdmFsdWUsIGlkeCwgcmF0aW8sIHByb3BlcnR5LCBuZXdTcGVlZCwgdG90YWxEaW1lbnM7XG4gICAgICAvLyBpZiBhdXRvRGlyZWN0aW9uIGlzIFwibmV4dFwiLCBhcHBlbmQgYSBjbG9uZSBvZiB0aGUgZW50aXJlIHNsaWRlclxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5hdXRvRGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgZWwuYXBwZW5kKHNsaWRlci5jaGlsZHJlbi5jbG9uZSgpLmFkZENsYXNzKCdieC1jbG9uZScpKTtcbiAgICAgIC8vIGlmIGF1dG9EaXJlY3Rpb24gaXMgXCJwcmV2XCIsIHByZXBlbmQgYSBjbG9uZSBvZiB0aGUgZW50aXJlIHNsaWRlciwgYW5kIHNldCB0aGUgbGVmdCBwb3NpdGlvblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwucHJlcGVuZChzbGlkZXIuY2hpbGRyZW4uY2xvbmUoKS5hZGRDbGFzcygnYngtY2xvbmUnKSk7XG4gICAgICAgIHBvc2l0aW9uID0gc2xpZGVyLmNoaWxkcmVuLmZpcnN0KCkucG9zaXRpb24oKTtcbiAgICAgICAgc3RhcnRQb3NpdGlvbiA9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAtcG9zaXRpb24ubGVmdCA6IC1wb3NpdGlvbi50b3A7XG4gICAgICB9XG4gICAgICBzZXRQb3NpdGlvblByb3BlcnR5KHN0YXJ0UG9zaXRpb24sICdyZXNldCcsIDApO1xuICAgICAgLy8gZG8gbm90IGFsbG93IGNvbnRyb2xzIGluIHRpY2tlciBtb2RlXG4gICAgICBzbGlkZXIuc2V0dGluZ3MucGFnZXIgPSBmYWxzZTtcbiAgICAgIHNsaWRlci5zZXR0aW5ncy5jb250cm9scyA9IGZhbHNlO1xuICAgICAgc2xpZGVyLnNldHRpbmdzLmF1dG9Db250cm9scyA9IGZhbHNlO1xuICAgICAgLy8gaWYgYXV0b0hvdmVyIGlzIHJlcXVlc3RlZFxuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy50aWNrZXJIb3Zlcikge1xuICAgICAgICBpZiAoc2xpZGVyLnVzaW5nQ1NTKSB7XG4gICAgICAgICAgaWR4ID0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/IDQgOiA1O1xuICAgICAgICAgIHNsaWRlci52aWV3cG9ydC5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybSA9IGVsLmNzcygnLScgKyBzbGlkZXIuY3NzUHJlZml4ICsgJy10cmFuc2Zvcm0nKTtcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh0cmFuc2Zvcm0uc3BsaXQoJywnKVtpZHhdKTtcbiAgICAgICAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkodmFsdWUsICdyZXNldCcsIDApO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdG90YWxEaW1lbnMgPSAwO1xuICAgICAgICAgICAgc2xpZGVyLmNoaWxkcmVuLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgdG90YWxEaW1lbnMgKz0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/ICQodGhpcykub3V0ZXJXaWR0aCh0cnVlKSA6ICQodGhpcykub3V0ZXJIZWlnaHQodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgc3BlZWQgcmF0aW8gKHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBuZXcgc3BlZWQgdG8gZmluaXNoIHRoZSBwYXVzZWQgYW5pbWF0aW9uKVxuICAgICAgICAgICAgcmF0aW8gPSBzbGlkZXIuc2V0dGluZ3Muc3BlZWQgLyB0b3RhbERpbWVucztcbiAgICAgICAgICAgIC8vIGRldGVybWluZSB3aGljaCBwcm9wZXJ0eSB0byB1c2VcbiAgICAgICAgICAgIHByb3BlcnR5ID0gc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdob3Jpem9udGFsJyA/ICdsZWZ0JyA6ICd0b3AnO1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBuZXcgc3BlZWRcbiAgICAgICAgICAgIG5ld1NwZWVkID0gcmF0aW8gKiAodG90YWxEaW1lbnMgLSAoTWF0aC5hYnMocGFyc2VJbnQodmFsdWUpKSkpO1xuICAgICAgICAgICAgdGlja2VyTG9vcChuZXdTcGVlZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gb24gZWwgaG92ZXJcbiAgICAgICAgICBzbGlkZXIudmlld3BvcnQuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBlbC5zdG9wKCk7XG4gICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHRvdGFsIHdpZHRoIG9mIGNoaWxkcmVuICh1c2VkIHRvIGNhbGN1bGF0ZSB0aGUgc3BlZWQgcmF0aW8pXG4gICAgICAgICAgICB0b3RhbERpbWVucyA9IDA7XG4gICAgICAgICAgICBzbGlkZXIuY2hpbGRyZW4uZWFjaChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICB0b3RhbERpbWVucyArPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnID8gJCh0aGlzKS5vdXRlcldpZHRoKHRydWUpIDogJCh0aGlzKS5vdXRlckhlaWdodCh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBzcGVlZCByYXRpbyAodXNlZCB0byBkZXRlcm1pbmUgdGhlIG5ldyBzcGVlZCB0byBmaW5pc2ggdGhlIHBhdXNlZCBhbmltYXRpb24pXG4gICAgICAgICAgICByYXRpbyA9IHNsaWRlci5zZXR0aW5ncy5zcGVlZCAvIHRvdGFsRGltZW5zO1xuICAgICAgICAgICAgLy8gZGV0ZXJtaW5lIHdoaWNoIHByb3BlcnR5IHRvIHVzZVxuICAgICAgICAgICAgcHJvcGVydHkgPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnID8gJ2xlZnQnIDogJ3RvcCc7XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIG5ldyBzcGVlZFxuICAgICAgICAgICAgbmV3U3BlZWQgPSByYXRpbyAqICh0b3RhbERpbWVucyAtIChNYXRoLmFicyhwYXJzZUludChlbC5jc3MocHJvcGVydHkpKSkpKTtcbiAgICAgICAgICAgIHRpY2tlckxvb3AobmV3U3BlZWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBzdGFydCB0aGUgdGlja2VyIGxvb3BcbiAgICAgIHRpY2tlckxvb3AoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUnVucyBhIGNvbnRpbnVvdXMgbG9vcCwgbmV3cyB0aWNrZXItc3R5bGVcbiAgICAgKi9cbiAgICB2YXIgdGlja2VyTG9vcCA9IGZ1bmN0aW9uKHJlc3VtZVNwZWVkKSB7XG4gICAgICB2YXIgc3BlZWQgPSByZXN1bWVTcGVlZCA/IHJlc3VtZVNwZWVkIDogc2xpZGVyLnNldHRpbmdzLnNwZWVkLFxuICAgICAgcG9zaXRpb24gPSB7bGVmdDogMCwgdG9wOiAwfSxcbiAgICAgIHJlc2V0ID0ge2xlZnQ6IDAsIHRvcDogMH0sXG4gICAgICBhbmltYXRlUHJvcGVydHksIHJlc2V0VmFsdWUsIHBhcmFtcztcblxuICAgICAgLy8gaWYgXCJuZXh0XCIgYW5pbWF0ZSBsZWZ0IHBvc2l0aW9uIHRvIGxhc3QgY2hpbGQsIHRoZW4gcmVzZXQgbGVmdCB0byAwXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG9EaXJlY3Rpb24gPT09ICduZXh0Jykge1xuICAgICAgICBwb3NpdGlvbiA9IGVsLmZpbmQoJy5ieC1jbG9uZScpLmZpcnN0KCkucG9zaXRpb24oKTtcbiAgICAgIC8vIGlmIFwicHJldlwiIGFuaW1hdGUgbGVmdCBwb3NpdGlvbiB0byAwLCB0aGVuIHJlc2V0IGxlZnQgdG8gZmlyc3Qgbm9uLWNsb25lIGNoaWxkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNldCA9IHNsaWRlci5jaGlsZHJlbi5maXJzdCgpLnBvc2l0aW9uKCk7XG4gICAgICB9XG4gICAgICBhbmltYXRlUHJvcGVydHkgPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnID8gLXBvc2l0aW9uLmxlZnQgOiAtcG9zaXRpb24udG9wO1xuICAgICAgcmVzZXRWYWx1ZSA9IHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcgPyAtcmVzZXQubGVmdCA6IC1yZXNldC50b3A7XG4gICAgICBwYXJhbXMgPSB7cmVzZXRWYWx1ZTogcmVzZXRWYWx1ZX07XG4gICAgICBzZXRQb3NpdGlvblByb3BlcnR5KGFuaW1hdGVQcm9wZXJ0eSwgJ3RpY2tlcicsIHNwZWVkLCBwYXJhbXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiBlbCBpcyBvbiBzY3JlZW5cbiAgICAgKi9cbiAgICB2YXIgaXNPblNjcmVlbiA9IGZ1bmN0aW9uKGVsKSB7XG4gICAgICB2YXIgd2luID0gJCh3aW5kb3cpLFxuICAgICAgdmlld3BvcnQgPSB7XG4gICAgICAgIHRvcDogd2luLnNjcm9sbFRvcCgpLFxuICAgICAgICBsZWZ0OiB3aW4uc2Nyb2xsTGVmdCgpXG4gICAgICB9LFxuICAgICAgYm91bmRzID0gZWwub2Zmc2V0KCk7XG5cbiAgICAgIHZpZXdwb3J0LnJpZ2h0ID0gdmlld3BvcnQubGVmdCArIHdpbi53aWR0aCgpO1xuICAgICAgdmlld3BvcnQuYm90dG9tID0gdmlld3BvcnQudG9wICsgd2luLmhlaWdodCgpO1xuICAgICAgYm91bmRzLnJpZ2h0ID0gYm91bmRzLmxlZnQgKyBlbC5vdXRlcldpZHRoKCk7XG4gICAgICBib3VuZHMuYm90dG9tID0gYm91bmRzLnRvcCArIGVsLm91dGVySGVpZ2h0KCk7XG5cbiAgICAgIHJldHVybiAoISh2aWV3cG9ydC5yaWdodCA8IGJvdW5kcy5sZWZ0IHx8IHZpZXdwb3J0LmxlZnQgPiBib3VuZHMucmlnaHQgfHwgdmlld3BvcnQuYm90dG9tIDwgYm91bmRzLnRvcCB8fCB2aWV3cG9ydC50b3AgPiBib3VuZHMuYm90dG9tKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIGtleWJvYXJkIGV2ZW50c1xuICAgICAqL1xuICAgIHZhciBrZXlQcmVzcyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHZhciBhY3RpdmVFbGVtZW50VGFnID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICB0YWdGaWx0ZXJzID0gJ2lucHV0fHRleHRhcmVhJyxcbiAgICAgIHAgPSBuZXcgUmVnRXhwKGFjdGl2ZUVsZW1lbnRUYWcsWydpJ10pLFxuICAgICAgcmVzdWx0ID0gcC5leGVjKHRhZ0ZpbHRlcnMpO1xuXG4gICAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgaXNPblNjcmVlbihlbCkpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICBjbGlja05leHRCaW5kKGUpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XG4gICAgICAgICAgY2xpY2tQcmV2QmluZChlKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdG91Y2ggZXZlbnRzXG4gICAgICovXG4gICAgdmFyIGluaXRUb3VjaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gaW5pdGlhbGl6ZSBvYmplY3QgdG8gY29udGFpbiBhbGwgdG91Y2ggdmFsdWVzXG4gICAgICBzbGlkZXIudG91Y2ggPSB7XG4gICAgICAgIHN0YXJ0OiB7eDogMCwgeTogMH0sXG4gICAgICAgIGVuZDoge3g6IDAsIHk6IDB9XG4gICAgICB9O1xuICAgICAgc2xpZGVyLnZpZXdwb3J0LmJpbmQoJ3RvdWNoc3RhcnQgTVNQb2ludGVyRG93biBwb2ludGVyZG93bicsIG9uVG91Y2hTdGFydCk7XG5cbiAgICAgIC8vZm9yIGJyb3dzZXJzIHRoYXQgaGF2ZSBpbXBsZW1lbnRlZCBwb2ludGVyIGV2ZW50cyBhbmQgZmlyZSBhIGNsaWNrIGFmdGVyXG4gICAgICAvL2V2ZXJ5IHBvaW50ZXJ1cCByZWdhcmRsZXNzIG9mIHdoZXRoZXIgcG9pbnRlcnVwIGlzIG9uIHNhbWUgc2NyZWVuIGxvY2F0aW9uIGFzIHBvaW50ZXJkb3duIG9yIG5vdFxuICAgICAgc2xpZGVyLnZpZXdwb3J0Lm9uKCdjbGljaycsICcuYnhzbGlkZXIgYScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKHNsaWRlci52aWV3cG9ydC5oYXNDbGFzcygnY2xpY2stZGlzYWJsZWQnKSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBzbGlkZXIudmlld3BvcnQucmVtb3ZlQ2xhc3MoJ2NsaWNrLWRpc2FibGVkJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGVyIGZvciBcInRvdWNoc3RhcnRcIlxuICAgICAqXG4gICAgICogQHBhcmFtIGUgKGV2ZW50KVxuICAgICAqICAtIERPTSBldmVudCBvYmplY3RcbiAgICAgKi9cbiAgICB2YXIgb25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZSkge1xuICAgICAgLy9kaXNhYmxlIHNsaWRlciBjb250cm9scyB3aGlsZSB1c2VyIGlzIGludGVyYWN0aW5nIHdpdGggc2xpZGVzIHRvIGF2b2lkIHNsaWRlciBmcmVlemUgdGhhdCBoYXBwZW5zIG9uIHRvdWNoIGRldmljZXMgd2hlbiBhIHNsaWRlIHN3aXBlIGhhcHBlbnMgaW1tZWRpYXRlbHkgYWZ0ZXIgaW50ZXJhY3Rpbmcgd2l0aCBzbGlkZXIgY29udHJvbHNcbiAgICAgIHNsaWRlci5jb250cm9scy5lbC5hZGRDbGFzcygnZGlzYWJsZWQnKTtcblxuICAgICAgaWYgKHNsaWRlci53b3JraW5nKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2xpZGVyLmNvbnRyb2xzLmVsLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gcmVjb3JkIHRoZSBvcmlnaW5hbCBwb3NpdGlvbiB3aGVuIHRvdWNoIHN0YXJ0c1xuICAgICAgICBzbGlkZXIudG91Y2gub3JpZ2luYWxQb3MgPSBlbC5wb3NpdGlvbigpO1xuICAgICAgICB2YXIgb3JpZyA9IGUub3JpZ2luYWxFdmVudCxcbiAgICAgICAgdG91Y2hQb2ludHMgPSAodHlwZW9mIG9yaWcuY2hhbmdlZFRvdWNoZXMgIT09ICd1bmRlZmluZWQnKSA/IG9yaWcuY2hhbmdlZFRvdWNoZXMgOiBbb3JpZ107XG4gICAgICAgIC8vIHJlY29yZCB0aGUgc3RhcnRpbmcgdG91Y2ggeCwgeSBjb29yZGluYXRlc1xuICAgICAgICBzbGlkZXIudG91Y2guc3RhcnQueCA9IHRvdWNoUG9pbnRzWzBdLnBhZ2VYO1xuICAgICAgICBzbGlkZXIudG91Y2guc3RhcnQueSA9IHRvdWNoUG9pbnRzWzBdLnBhZ2VZO1xuXG4gICAgICAgIGlmIChzbGlkZXIudmlld3BvcnQuZ2V0KDApLnNldFBvaW50ZXJDYXB0dXJlKSB7XG4gICAgICAgICAgc2xpZGVyLnBvaW50ZXJJZCA9IG9yaWcucG9pbnRlcklkO1xuICAgICAgICAgIHNsaWRlci52aWV3cG9ydC5nZXQoMCkuc2V0UG9pbnRlckNhcHR1cmUoc2xpZGVyLnBvaW50ZXJJZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmluZCBhIFwidG91Y2htb3ZlXCIgZXZlbnQgdG8gdGhlIHZpZXdwb3J0XG4gICAgICAgIHNsaWRlci52aWV3cG9ydC5iaW5kKCd0b3VjaG1vdmUgTVNQb2ludGVyTW92ZSBwb2ludGVybW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgICAgLy8gYmluZCBhIFwidG91Y2hlbmRcIiBldmVudCB0byB0aGUgdmlld3BvcnRcbiAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmJpbmQoJ3RvdWNoZW5kIE1TUG9pbnRlclVwIHBvaW50ZXJ1cCcsIG9uVG91Y2hFbmQpO1xuICAgICAgICBzbGlkZXIudmlld3BvcnQuYmluZCgnTVNQb2ludGVyQ2FuY2VsIHBvaW50ZXJjYW5jZWwnLCBvblBvaW50ZXJDYW5jZWwpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDYW5jZWwgUG9pbnRlciBmb3IgV2luZG93cyBQaG9uZVxuICAgICAqXG4gICAgICogQHBhcmFtIGUgKGV2ZW50KVxuICAgICAqICAtIERPTSBldmVudCBvYmplY3RcbiAgICAgKi9cbiAgICB2YXIgb25Qb2ludGVyQ2FuY2VsID0gZnVuY3Rpb24oZSkge1xuICAgICAgLyogb25Qb2ludGVyQ2FuY2VsIGhhbmRsZXIgaXMgbmVlZGVkIHRvIGRlYWwgd2l0aCBzaXR1YXRpb25zIHdoZW4gYSB0b3VjaGVuZFxuICAgICAgZG9lc24ndCBmaXJlIGFmdGVyIGEgdG91Y2hzdGFydCAodGhpcyBoYXBwZW5zIG9uIHdpbmRvd3MgcGhvbmVzIG9ubHkpICovXG4gICAgICBzZXRQb3NpdGlvblByb3BlcnR5KHNsaWRlci50b3VjaC5vcmlnaW5hbFBvcy5sZWZ0LCAncmVzZXQnLCAwKTtcblxuICAgICAgLy9yZW1vdmUgaGFuZGxlcnNcbiAgICAgIHNsaWRlci5jb250cm9scy5lbC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgIHNsaWRlci52aWV3cG9ydC51bmJpbmQoJ01TUG9pbnRlckNhbmNlbCBwb2ludGVyY2FuY2VsJywgb25Qb2ludGVyQ2FuY2VsKTtcbiAgICAgIHNsaWRlci52aWV3cG9ydC51bmJpbmQoJ3RvdWNobW92ZSBNU1BvaW50ZXJNb3ZlIHBvaW50ZXJtb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgc2xpZGVyLnZpZXdwb3J0LnVuYmluZCgndG91Y2hlbmQgTVNQb2ludGVyVXAgcG9pbnRlcnVwJywgb25Ub3VjaEVuZCk7XG4gICAgICBpZiAoc2xpZGVyLnZpZXdwb3J0LmdldCgwKS5yZWxlYXNlUG9pbnRlckNhcHR1cmUpIHtcbiAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmdldCgwKS5yZWxlYXNlUG9pbnRlckNhcHR1cmUoc2xpZGVyLnBvaW50ZXJJZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEV2ZW50IGhhbmRsZXIgZm9yIFwidG91Y2htb3ZlXCJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlIChldmVudClcbiAgICAgKiAgLSBET00gZXZlbnQgb2JqZWN0XG4gICAgICovXG4gICAgdmFyIG9uVG91Y2hNb3ZlID0gZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIG9yaWcgPSBlLm9yaWdpbmFsRXZlbnQsXG4gICAgICB0b3VjaFBvaW50cyA9ICh0eXBlb2Ygb3JpZy5jaGFuZ2VkVG91Y2hlcyAhPT0gJ3VuZGVmaW5lZCcpID8gb3JpZy5jaGFuZ2VkVG91Y2hlcyA6IFtvcmlnXSxcbiAgICAgIC8vIGlmIHNjcm9sbGluZyBvbiB5IGF4aXMsIGRvIG5vdCBwcmV2ZW50IGRlZmF1bHRcbiAgICAgIHhNb3ZlbWVudCA9IE1hdGguYWJzKHRvdWNoUG9pbnRzWzBdLnBhZ2VYIC0gc2xpZGVyLnRvdWNoLnN0YXJ0LngpLFxuICAgICAgeU1vdmVtZW50ID0gTWF0aC5hYnModG91Y2hQb2ludHNbMF0ucGFnZVkgLSBzbGlkZXIudG91Y2guc3RhcnQueSksXG4gICAgICB2YWx1ZSA9IDAsXG4gICAgICBjaGFuZ2UgPSAwO1xuXG4gICAgICAvLyB4IGF4aXMgc3dpcGVcbiAgICAgIGlmICgoeE1vdmVtZW50ICogMykgPiB5TW92ZW1lbnQgJiYgc2xpZGVyLnNldHRpbmdzLnByZXZlbnREZWZhdWx0U3dpcGVYKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIHkgYXhpcyBzd2lwZVxuICAgICAgfSBlbHNlIGlmICgoeU1vdmVtZW50ICogMykgPiB4TW92ZW1lbnQgJiYgc2xpZGVyLnNldHRpbmdzLnByZXZlbnREZWZhdWx0U3dpcGVZKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSAhPT0gJ2ZhZGUnICYmIHNsaWRlci5zZXR0aW5ncy5vbmVUb09uZVRvdWNoKSB7XG4gICAgICAgIC8vIGlmIGhvcml6b250YWwsIGRyYWcgYWxvbmcgeCBheGlzXG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgY2hhbmdlID0gdG91Y2hQb2ludHNbMF0ucGFnZVggLSBzbGlkZXIudG91Y2guc3RhcnQueDtcbiAgICAgICAgICB2YWx1ZSA9IHNsaWRlci50b3VjaC5vcmlnaW5hbFBvcy5sZWZ0ICsgY2hhbmdlO1xuICAgICAgICAvLyBpZiB2ZXJ0aWNhbCwgZHJhZyBhbG9uZyB5IGF4aXNcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGFuZ2UgPSB0b3VjaFBvaW50c1swXS5wYWdlWSAtIHNsaWRlci50b3VjaC5zdGFydC55O1xuICAgICAgICAgIHZhbHVlID0gc2xpZGVyLnRvdWNoLm9yaWdpbmFsUG9zLnRvcCArIGNoYW5nZTtcbiAgICAgICAgfVxuICAgICAgICBzZXRQb3NpdGlvblByb3BlcnR5KHZhbHVlLCAncmVzZXQnLCAwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRXZlbnQgaGFuZGxlciBmb3IgXCJ0b3VjaGVuZFwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZSAoZXZlbnQpXG4gICAgICogIC0gRE9NIGV2ZW50IG9iamVjdFxuICAgICAqL1xuICAgIHZhciBvblRvdWNoRW5kID0gZnVuY3Rpb24oZSkge1xuICAgICAgc2xpZGVyLnZpZXdwb3J0LnVuYmluZCgndG91Y2htb3ZlIE1TUG9pbnRlck1vdmUgcG9pbnRlcm1vdmUnLCBvblRvdWNoTW92ZSk7XG4gICAgICAvL2VuYWJsZSBzbGlkZXIgY29udHJvbHMgYXMgc29vbiBhcyB1c2VyIHN0b3BzIGludGVyYWNpbmcgd2l0aCBzbGlkZXNcbiAgICAgIHNsaWRlci5jb250cm9scy5lbC5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgIHZhciBvcmlnICAgID0gZS5vcmlnaW5hbEV2ZW50LFxuICAgICAgdG91Y2hQb2ludHMgPSAodHlwZW9mIG9yaWcuY2hhbmdlZFRvdWNoZXMgIT09ICd1bmRlZmluZWQnKSA/IG9yaWcuY2hhbmdlZFRvdWNoZXMgOiBbb3JpZ10sXG4gICAgICB2YWx1ZSAgICAgICA9IDAsXG4gICAgICBkaXN0YW5jZSAgICA9IDA7XG4gICAgICAvLyByZWNvcmQgZW5kIHgsIHkgcG9zaXRpb25zXG4gICAgICBzbGlkZXIudG91Y2guZW5kLnggPSB0b3VjaFBvaW50c1swXS5wYWdlWDtcbiAgICAgIHNsaWRlci50b3VjaC5lbmQueSA9IHRvdWNoUG9pbnRzWzBdLnBhZ2VZO1xuICAgICAgLy8gaWYgZmFkZSBtb2RlLCBjaGVjayBpZiBhYnNvbHV0ZSB4IGRpc3RhbmNlIGNsZWFycyB0aGUgdGhyZXNob2xkXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLm1vZGUgPT09ICdmYWRlJykge1xuICAgICAgICBkaXN0YW5jZSA9IE1hdGguYWJzKHNsaWRlci50b3VjaC5zdGFydC54IC0gc2xpZGVyLnRvdWNoLmVuZC54KTtcbiAgICAgICAgaWYgKGRpc3RhbmNlID49IHNsaWRlci5zZXR0aW5ncy5zd2lwZVRocmVzaG9sZCkge1xuICAgICAgICAgIGlmIChzbGlkZXIudG91Y2guc3RhcnQueCA+IHNsaWRlci50b3VjaC5lbmQueCkge1xuICAgICAgICAgICAgZWwuZ29Ub05leHRTbGlkZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbC5nb1RvUHJldlNsaWRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsLnN0b3BBdXRvKCk7XG4gICAgICAgIH1cbiAgICAgIC8vIG5vdCBmYWRlIG1vZGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNhbGN1bGF0ZSBkaXN0YW5jZSBhbmQgZWwncyBhbmltYXRlIHByb3BlcnR5XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgZGlzdGFuY2UgPSBzbGlkZXIudG91Y2guZW5kLnggLSBzbGlkZXIudG91Y2guc3RhcnQueDtcbiAgICAgICAgICB2YWx1ZSA9IHNsaWRlci50b3VjaC5vcmlnaW5hbFBvcy5sZWZ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3RhbmNlID0gc2xpZGVyLnRvdWNoLmVuZC55IC0gc2xpZGVyLnRvdWNoLnN0YXJ0Lnk7XG4gICAgICAgICAgdmFsdWUgPSBzbGlkZXIudG91Y2gub3JpZ2luYWxQb3MudG9wO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIG5vdCBpbmZpbml0ZSBsb29wIGFuZCBmaXJzdCAvIGxhc3Qgc2xpZGUsIGRvIG5vdCBhdHRlbXB0IGEgc2xpZGUgdHJhbnNpdGlvblxuICAgICAgICBpZiAoIXNsaWRlci5zZXR0aW5ncy5pbmZpbml0ZUxvb3AgJiYgKChzbGlkZXIuYWN0aXZlLmluZGV4ID09PSAwICYmIGRpc3RhbmNlID4gMCkgfHwgKHNsaWRlci5hY3RpdmUubGFzdCAmJiBkaXN0YW5jZSA8IDApKSkge1xuICAgICAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkodmFsdWUsICdyZXNldCcsIDIwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGlzdGFuY2UgY2xlYXJzIHRocmVzaG9sZFxuICAgICAgICAgIGlmIChNYXRoLmFicyhkaXN0YW5jZSkgPj0gc2xpZGVyLnNldHRpbmdzLnN3aXBlVGhyZXNob2xkKSB7XG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCAwKSB7XG4gICAgICAgICAgICAgIGVsLmdvVG9OZXh0U2xpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsLmdvVG9QcmV2U2xpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsLnN0b3BBdXRvKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGVsLmFuaW1hdGUocHJvcGVydHksIDIwMCk7XG4gICAgICAgICAgICBzZXRQb3NpdGlvblByb3BlcnR5KHZhbHVlLCAncmVzZXQnLCAyMDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc2xpZGVyLnZpZXdwb3J0LnVuYmluZCgndG91Y2hlbmQgTVNQb2ludGVyVXAgcG9pbnRlcnVwJywgb25Ub3VjaEVuZCk7XG4gICAgICBpZiAoc2xpZGVyLnZpZXdwb3J0LmdldCgwKS5yZWxlYXNlUG9pbnRlckNhcHR1cmUpIHtcbiAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmdldCgwKS5yZWxlYXNlUG9pbnRlckNhcHR1cmUoc2xpZGVyLnBvaW50ZXJJZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFdpbmRvdyByZXNpemUgZXZlbnQgY2FsbGJhY2tcbiAgICAgKi9cbiAgICB2YXIgcmVzaXplV2luZG93ID0gZnVuY3Rpb24oZSkge1xuICAgICAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgc2xpZGVyIGlzbid0IGluaXRpYWxpemVkLlxuICAgICAgaWYgKCFzbGlkZXIuaW5pdGlhbGl6ZWQpIHsgcmV0dXJuOyB9XG4gICAgICAvLyBEZWxheSBpZiBzbGlkZXIgd29ya2luZy5cbiAgICAgIGlmIChzbGlkZXIud29ya2luZykge1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChyZXNpemVXaW5kb3csIDEwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGdldCB0aGUgbmV3IHdpbmRvdyBkaW1lbnMgKGFnYWluLCB0aGFuayB5b3UgSUUpXG4gICAgICAgIHZhciB3aW5kb3dXaWR0aE5ldyA9ICQod2luZG93KS53aWR0aCgpLFxuICAgICAgICB3aW5kb3dIZWlnaHROZXcgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGl0IGlzIGEgdHJ1ZSB3aW5kb3cgcmVzaXplXG4gICAgICAgIC8vICp3ZSBtdXN0IGNoZWNrIHRoaXMgYmVjYXVzZSBvdXIgZGlub3NhdXIgZnJpZW5kIElFIGZpcmVzIGEgd2luZG93IHJlc2l6ZSBldmVudCB3aGVuIGNlcnRhaW4gRE9NIGVsZW1lbnRzXG4gICAgICAgIC8vIGFyZSByZXNpemVkLiBDYW4geW91IGp1c3QgZGllIGFscmVhZHk/KlxuICAgICAgICBpZiAod2luZG93V2lkdGggIT09IHdpbmRvd1dpZHRoTmV3IHx8IHdpbmRvd0hlaWdodCAhPT0gd2luZG93SGVpZ2h0TmV3KSB7XG4gICAgICAgICAgLy8gc2V0IHRoZSBuZXcgd2luZG93IGRpbWVuc1xuICAgICAgICAgIHdpbmRvd1dpZHRoID0gd2luZG93V2lkdGhOZXc7XG4gICAgICAgICAgd2luZG93SGVpZ2h0ID0gd2luZG93SGVpZ2h0TmV3O1xuICAgICAgICAgIC8vIHVwZGF0ZSBhbGwgZHluYW1pYyBlbGVtZW50c1xuICAgICAgICAgIGVsLnJlZHJhd1NsaWRlcigpO1xuICAgICAgICAgIC8vIENhbGwgdXNlciByZXNpemUgaGFuZGxlclxuICAgICAgICAgIHNsaWRlci5zZXR0aW5ncy5vblNsaWRlclJlc2l6ZS5jYWxsKGVsLCBzbGlkZXIuYWN0aXZlLmluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGFyaWEtaGlkZGVuPXRydWUgYXR0cmlidXRlIHRvIGVhY2ggZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHN0YXJ0VmlzaWJsZUluZGV4IChpbnQpXG4gICAgICogIC0gdGhlIGZpcnN0IHZpc2libGUgZWxlbWVudCdzIGluZGV4XG4gICAgICovXG4gICAgdmFyIGFwcGx5QXJpYUhpZGRlbkF0dHJpYnV0ZXMgPSBmdW5jdGlvbihzdGFydFZpc2libGVJbmRleCkge1xuICAgICAgdmFyIG51bWJlck9mU2xpZGVzU2hvd2luZyA9IGdldE51bWJlclNsaWRlc1Nob3dpbmcoKTtcbiAgICAgIC8vIG9ubHkgYXBwbHkgYXR0cmlidXRlcyBpZiB0aGUgc2V0dGluZyBpcyBlbmFibGVkIGFuZCBub3QgaW4gdGlja2VyIG1vZGVcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXJpYUhpZGRlbiAmJiAhc2xpZGVyLnNldHRpbmdzLnRpY2tlcikge1xuICAgICAgICAvLyBhZGQgYXJpYS1oaWRkZW49dHJ1ZSB0byBhbGwgZWxlbWVudHNcbiAgICAgICAgc2xpZGVyLmNoaWxkcmVuLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICAgICAgLy8gZ2V0IHRoZSB2aXNpYmxlIGVsZW1lbnRzIGFuZCBjaGFuZ2UgdG8gYXJpYS1oaWRkZW49ZmFsc2VcbiAgICAgICAgc2xpZGVyLmNoaWxkcmVuLnNsaWNlKHN0YXJ0VmlzaWJsZUluZGV4LCBzdGFydFZpc2libGVJbmRleCArIG51bWJlck9mU2xpZGVzU2hvd2luZykuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBpbmRleCBhY2NvcmRpbmcgdG8gcHJlc2VudCBwYWdlIHJhbmdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2xpZGVPbmRleCAoaW50KVxuICAgICAqICAtIHRoZSBkZXNpcmVkIHNsaWRlIGluZGV4XG4gICAgICovXG4gICAgdmFyIHNldFNsaWRlSW5kZXggPSBmdW5jdGlvbihzbGlkZUluZGV4KSB7XG4gICAgICBpZiAoc2xpZGVJbmRleCA8IDApIHtcbiAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5pbmZpbml0ZUxvb3ApIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UGFnZXJRdHkoKSAtIDE7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAvL3dlIGRvbid0IGdvIHRvIHVuZGVmaW5lZCBzbGlkZXNcbiAgICAgICAgICByZXR1cm4gc2xpZGVyLmFjdGl2ZS5pbmRleDtcbiAgICAgICAgfVxuICAgICAgLy8gaWYgc2xpZGVJbmRleCBpcyBncmVhdGVyIHRoYW4gY2hpbGRyZW4gbGVuZ3RoLCBzZXQgYWN0aXZlIGluZGV4IHRvIDAgKHRoaXMgaGFwcGVucyBkdXJpbmcgaW5maW5pdGUgbG9vcClcbiAgICAgIH0gZWxzZSBpZiAoc2xpZGVJbmRleCA+PSBnZXRQYWdlclF0eSgpKSB7XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuaW5maW5pdGVMb29wKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy93ZSBkb24ndCBtb3ZlIHRvIHVuZGVmaW5lZCBwYWdlc1xuICAgICAgICAgIHJldHVybiBzbGlkZXIuYWN0aXZlLmluZGV4O1xuICAgICAgICB9XG4gICAgICAvLyBzZXQgYWN0aXZlIGluZGV4IHRvIHJlcXVlc3RlZCBzbGlkZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNsaWRlSW5kZXg7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICogPSBQVUJMSUMgRlVOQ1RJT05TXG4gICAgICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIHNsaWRlIHRyYW5zaXRpb24gdG8gdGhlIHNwZWNpZmllZCBzbGlkZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNsaWRlSW5kZXggKGludClcbiAgICAgKiAgLSB0aGUgZGVzdGluYXRpb24gc2xpZGUncyBpbmRleCAoemVyby1iYXNlZClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkaXJlY3Rpb24gKHN0cmluZylcbiAgICAgKiAgLSBJTlRFUk5BTCBVU0UgT05MWSAtIHRoZSBkaXJlY3Rpb24gb2YgdHJhdmVsIChcInByZXZcIiAvIFwibmV4dFwiKVxuICAgICAqL1xuICAgIGVsLmdvVG9TbGlkZSA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgsIGRpcmVjdGlvbikge1xuICAgICAgLy8gb25TbGlkZUJlZm9yZSwgb25TbGlkZU5leHQsIG9uU2xpZGVQcmV2IGNhbGxiYWNrc1xuICAgICAgLy8gQWxsb3cgdHJhbnNpdGlvbiBjYW5jZWxpbmcgYmFzZWQgb24gcmV0dXJuZWQgdmFsdWVcbiAgICAgIHZhciBwZXJmb3JtVHJhbnNpdGlvbiA9IHRydWUsXG4gICAgICBtb3ZlQnkgPSAwLFxuICAgICAgcG9zaXRpb24gPSB7bGVmdDogMCwgdG9wOiAwfSxcbiAgICAgIGxhc3RDaGlsZCA9IG51bGwsXG4gICAgICBsYXN0U2hvd2luZ0luZGV4LCBlcSwgdmFsdWUsIHJlcXVlc3RFbDtcbiAgICAgIC8vIHN0b3JlIHRoZSBvbGQgaW5kZXhcbiAgICAgIHNsaWRlci5vbGRJbmRleCA9IHNsaWRlci5hY3RpdmUuaW5kZXg7XG4gICAgICAvL3NldCBuZXcgaW5kZXhcbiAgICAgIHNsaWRlci5hY3RpdmUuaW5kZXggPSBzZXRTbGlkZUluZGV4KHNsaWRlSW5kZXgpO1xuXG4gICAgICAvLyBpZiBwbHVnaW4gaXMgY3VycmVudGx5IGluIG1vdGlvbiwgaWdub3JlIHJlcXVlc3RcbiAgICAgIGlmIChzbGlkZXIud29ya2luZyB8fCBzbGlkZXIuYWN0aXZlLmluZGV4ID09PSBzbGlkZXIub2xkSW5kZXgpIHsgcmV0dXJuOyB9XG4gICAgICAvLyBkZWNsYXJlIHRoYXQgcGx1Z2luIGlzIGluIG1vdGlvblxuICAgICAgc2xpZGVyLndvcmtpbmcgPSB0cnVlO1xuXG4gICAgICBwZXJmb3JtVHJhbnNpdGlvbiA9IHNsaWRlci5zZXR0aW5ncy5vblNsaWRlQmVmb3JlLmNhbGwoZWwsIHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuYWN0aXZlLmluZGV4KSwgc2xpZGVyLm9sZEluZGV4LCBzbGlkZXIuYWN0aXZlLmluZGV4KTtcblxuICAgICAgLy8gSWYgdHJhbnNpdGlvbnMgY2FuY2VsZWQsIHJlc2V0IGFuZCByZXR1cm5cbiAgICAgIGlmICh0eXBlb2YgKHBlcmZvcm1UcmFuc2l0aW9uKSAhPT0gJ3VuZGVmaW5lZCcgJiYgIXBlcmZvcm1UcmFuc2l0aW9uKSB7XG4gICAgICAgIHNsaWRlci5hY3RpdmUuaW5kZXggPSBzbGlkZXIub2xkSW5kZXg7IC8vIHJlc3RvcmUgb2xkIGluZGV4XG4gICAgICAgIHNsaWRlci53b3JraW5nID0gZmFsc2U7IC8vIGlzIG5vdCBpbiBtb3Rpb25cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcbiAgICAgICAgLy8gUHJldmVudCBjYW5jZWxpbmcgaW4gZnV0dXJlIGZ1bmN0aW9ucyBvciBsYWNrIHRoZXJlLW9mIGZyb20gbmVnYXRpbmcgcHJldmlvdXMgY29tbWFuZHMgdG8gY2FuY2VsXG4gICAgICAgIGlmICghc2xpZGVyLnNldHRpbmdzLm9uU2xpZGVOZXh0LmNhbGwoZWwsIHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuYWN0aXZlLmluZGV4KSwgc2xpZGVyLm9sZEluZGV4LCBzbGlkZXIuYWN0aXZlLmluZGV4KSkge1xuICAgICAgICAgIHBlcmZvcm1UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAncHJldicpIHtcbiAgICAgICAgLy8gUHJldmVudCBjYW5jZWxpbmcgaW4gZnV0dXJlIGZ1bmN0aW9ucyBvciBsYWNrIHRoZXJlLW9mIGZyb20gbmVnYXRpbmcgcHJldmlvdXMgY29tbWFuZHMgdG8gY2FuY2VsXG4gICAgICAgIGlmICghc2xpZGVyLnNldHRpbmdzLm9uU2xpZGVQcmV2LmNhbGwoZWwsIHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuYWN0aXZlLmluZGV4KSwgc2xpZGVyLm9sZEluZGV4LCBzbGlkZXIuYWN0aXZlLmluZGV4KSkge1xuICAgICAgICAgIHBlcmZvcm1UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgbGFzdCBzbGlkZVxuICAgICAgc2xpZGVyLmFjdGl2ZS5sYXN0ID0gc2xpZGVyLmFjdGl2ZS5pbmRleCA+PSBnZXRQYWdlclF0eSgpIC0gMTtcbiAgICAgIC8vIHVwZGF0ZSB0aGUgcGFnZXIgd2l0aCBhY3RpdmUgY2xhc3NcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MucGFnZXIgfHwgc2xpZGVyLnNldHRpbmdzLnBhZ2VyQ3VzdG9tKSB7IHVwZGF0ZVBhZ2VyQWN0aXZlKHNsaWRlci5hY3RpdmUuaW5kZXgpOyB9XG4gICAgICAvLyAvLyBjaGVjayBmb3IgZGlyZWN0aW9uIGNvbnRyb2wgdXBkYXRlXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmNvbnRyb2xzKSB7IHVwZGF0ZURpcmVjdGlvbkNvbnRyb2xzKCk7IH1cbiAgICAgIC8vIGlmIHNsaWRlciBpcyBzZXQgdG8gbW9kZTogXCJmYWRlXCJcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2ZhZGUnKSB7XG4gICAgICAgIC8vIGlmIGFkYXB0aXZlSGVpZ2h0IGlzIHRydWUgYW5kIG5leHQgaGVpZ2h0IGlzIGRpZmZlcmVudCBmcm9tIGN1cnJlbnQgaGVpZ2h0LCBhbmltYXRlIHRvIHRoZSBuZXcgaGVpZ2h0XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYWRhcHRpdmVIZWlnaHQgJiYgc2xpZGVyLnZpZXdwb3J0LmhlaWdodCgpICE9PSBnZXRWaWV3cG9ydEhlaWdodCgpKSB7XG4gICAgICAgICAgc2xpZGVyLnZpZXdwb3J0LmFuaW1hdGUoe2hlaWdodDogZ2V0Vmlld3BvcnRIZWlnaHQoKX0sIHNsaWRlci5zZXR0aW5ncy5hZGFwdGl2ZUhlaWdodFNwZWVkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBmYWRlIG91dCB0aGUgdmlzaWJsZSBjaGlsZCBhbmQgcmVzZXQgaXRzIHotaW5kZXggdmFsdWVcbiAgICAgICAgc2xpZGVyLmNoaWxkcmVuLmZpbHRlcignOnZpc2libGUnKS5mYWRlT3V0KHNsaWRlci5zZXR0aW5ncy5zcGVlZCkuY3NzKHt6SW5kZXg6IDB9KTtcbiAgICAgICAgLy8gZmFkZSBpbiB0aGUgbmV3bHkgcmVxdWVzdGVkIHNsaWRlXG4gICAgICAgIHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuYWN0aXZlLmluZGV4KS5jc3MoJ3pJbmRleCcsIHNsaWRlci5zZXR0aW5ncy5zbGlkZVpJbmRleCArIDEpLmZhZGVJbihzbGlkZXIuc2V0dGluZ3Muc3BlZWQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQodGhpcykuY3NzKCd6SW5kZXgnLCBzbGlkZXIuc2V0dGluZ3Muc2xpZGVaSW5kZXgpO1xuICAgICAgICAgIHVwZGF0ZUFmdGVyU2xpZGVUcmFuc2l0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgLy8gc2xpZGVyIG1vZGUgaXMgbm90IFwiZmFkZVwiXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBpZiBhZGFwdGl2ZUhlaWdodCBpcyB0cnVlIGFuZCBuZXh0IGhlaWdodCBpcyBkaWZmZXJlbnQgZnJvbSBjdXJyZW50IGhlaWdodCwgYW5pbWF0ZSB0byB0aGUgbmV3IGhlaWdodFxuICAgICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmFkYXB0aXZlSGVpZ2h0ICYmIHNsaWRlci52aWV3cG9ydC5oZWlnaHQoKSAhPT0gZ2V0Vmlld3BvcnRIZWlnaHQoKSkge1xuICAgICAgICAgIHNsaWRlci52aWV3cG9ydC5hbmltYXRlKHtoZWlnaHQ6IGdldFZpZXdwb3J0SGVpZ2h0KCl9LCBzbGlkZXIuc2V0dGluZ3MuYWRhcHRpdmVIZWlnaHRTcGVlZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgY2Fyb3VzZWwgYW5kIG5vdCBpbmZpbml0ZSBsb29wXG4gICAgICAgIGlmICghc2xpZGVyLnNldHRpbmdzLmluZmluaXRlTG9vcCAmJiBzbGlkZXIuY2Fyb3VzZWwgJiYgc2xpZGVyLmFjdGl2ZS5sYXN0KSB7XG4gICAgICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5tb2RlID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgIC8vIGdldCB0aGUgbGFzdCBjaGlsZCBwb3NpdGlvblxuICAgICAgICAgICAgbGFzdENoaWxkID0gc2xpZGVyLmNoaWxkcmVuLmVxKHNsaWRlci5jaGlsZHJlbi5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHBvc2l0aW9uID0gbGFzdENoaWxkLnBvc2l0aW9uKCk7XG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBsYXN0IHNsaWRlXG4gICAgICAgICAgICBtb3ZlQnkgPSBzbGlkZXIudmlld3BvcnQud2lkdGgoKSAtIGxhc3RDaGlsZC5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGdldCBsYXN0IHNob3dpbmcgaW5kZXggcG9zaXRpb25cbiAgICAgICAgICAgIGxhc3RTaG93aW5nSW5kZXggPSBzbGlkZXIuY2hpbGRyZW4ubGVuZ3RoIC0gc2xpZGVyLnNldHRpbmdzLm1pblNsaWRlcztcbiAgICAgICAgICAgIHBvc2l0aW9uID0gc2xpZGVyLmNoaWxkcmVuLmVxKGxhc3RTaG93aW5nSW5kZXgpLnBvc2l0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGhvcml6b250YWwgY2Fyb3VzZWwsIGdvaW5nIHByZXZpb3VzIHdoaWxlIG9uIGZpcnN0IHNsaWRlIChpbmZpbml0ZUxvb3AgbW9kZSlcbiAgICAgICAgfSBlbHNlIGlmIChzbGlkZXIuY2Fyb3VzZWwgJiYgc2xpZGVyLmFjdGl2ZS5sYXN0ICYmIGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSB7XG4gICAgICAgICAgLy8gZ2V0IHRoZSBsYXN0IGNoaWxkIHBvc2l0aW9uXG4gICAgICAgICAgZXEgPSBzbGlkZXIuc2V0dGluZ3MubW92ZVNsaWRlcyA9PT0gMSA/IHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMgLSBnZXRNb3ZlQnkoKSA6ICgoZ2V0UGFnZXJRdHkoKSAtIDEpICogZ2V0TW92ZUJ5KCkpIC0gKHNsaWRlci5jaGlsZHJlbi5sZW5ndGggLSBzbGlkZXIuc2V0dGluZ3MubWF4U2xpZGVzKTtcbiAgICAgICAgICBsYXN0Q2hpbGQgPSBlbC5jaGlsZHJlbignLmJ4LWNsb25lJykuZXEoZXEpO1xuICAgICAgICAgIHBvc2l0aW9uID0gbGFzdENoaWxkLnBvc2l0aW9uKCk7XG4gICAgICAgIC8vIGlmIGluZmluaXRlIGxvb3AgYW5kIFwiTmV4dFwiIGlzIGNsaWNrZWQgb24gdGhlIGxhc3Qgc2xpZGVcbiAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICduZXh0JyAmJiBzbGlkZXIuYWN0aXZlLmluZGV4ID09PSAwKSB7XG4gICAgICAgICAgLy8gZ2V0IHRoZSBsYXN0IGNsb25lIHBvc2l0aW9uXG4gICAgICAgICAgcG9zaXRpb24gPSBlbC5maW5kKCc+IC5ieC1jbG9uZScpLmVxKHNsaWRlci5zZXR0aW5ncy5tYXhTbGlkZXMpLnBvc2l0aW9uKCk7XG4gICAgICAgICAgc2xpZGVyLmFjdGl2ZS5sYXN0ID0gZmFsc2U7XG4gICAgICAgIC8vIG5vcm1hbCBub24temVybyByZXF1ZXN0c1xuICAgICAgICB9IGVsc2UgaWYgKHNsaWRlSW5kZXggPj0gMCkge1xuICAgICAgICAgIC8vcGFyc2VJbnQgaXMgYXBwbGllZCB0byBhbGxvdyBmbG9hdHMgZm9yIHNsaWRlcy9wYWdlXG4gICAgICAgICAgcmVxdWVzdEVsID0gc2xpZGVJbmRleCAqIHBhcnNlSW50KGdldE1vdmVCeSgpKTtcbiAgICAgICAgICBwb3NpdGlvbiA9IHNsaWRlci5jaGlsZHJlbi5lcShyZXF1ZXN0RWwpLnBvc2l0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBJZiB0aGUgcG9zaXRpb24gZG9lc24ndCBleGlzdFxuICAgICAgICAgKiAoZS5nLiBpZiB5b3UgZGVzdHJveSB0aGUgc2xpZGVyIG9uIGEgbmV4dCBjbGljayksXG4gICAgICAgICAqIGl0IGRvZXNuJ3QgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgICAqL1xuICAgICAgICBpZiAodHlwZW9mIChwb3NpdGlvbikgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgdmFsdWUgPSBzbGlkZXIuc2V0dGluZ3MubW9kZSA9PT0gJ2hvcml6b250YWwnID8gLShwb3NpdGlvbi5sZWZ0IC0gbW92ZUJ5KSA6IC1wb3NpdGlvbi50b3A7XG4gICAgICAgICAgLy8gcGx1Z2luIHZhbHVlcyB0byBiZSBhbmltYXRlZFxuICAgICAgICAgIHNldFBvc2l0aW9uUHJvcGVydHkodmFsdWUsICdzbGlkZScsIHNsaWRlci5zZXR0aW5ncy5zcGVlZCk7XG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVyLndvcmtpbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXJpYUhpZGRlbikgeyBhcHBseUFyaWFIaWRkZW5BdHRyaWJ1dGVzKHNsaWRlci5hY3RpdmUuaW5kZXggKiBnZXRNb3ZlQnkoKSk7IH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbnMgdG8gdGhlIG5leHQgc2xpZGUgaW4gdGhlIHNob3dcbiAgICAgKi9cbiAgICBlbC5nb1RvTmV4dFNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBpZiBpbmZpbml0ZUxvb3AgaXMgZmFsc2UgYW5kIGxhc3QgcGFnZSBpcyBzaG93aW5nLCBkaXNyZWdhcmQgY2FsbFxuICAgICAgaWYgKCFzbGlkZXIuc2V0dGluZ3MuaW5maW5pdGVMb29wICYmIHNsaWRlci5hY3RpdmUubGFzdCkgeyByZXR1cm47IH1cblx0ICBpZiAoc2xpZGVyLndvcmtpbmcgPT0gdHJ1ZSl7IHJldHVybiA7fVxuICAgICAgdmFyIHBhZ2VySW5kZXggPSBwYXJzZUludChzbGlkZXIuYWN0aXZlLmluZGV4KSArIDE7XG4gICAgICBlbC5nb1RvU2xpZGUocGFnZXJJbmRleCwgJ25leHQnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVHJhbnNpdGlvbnMgdG8gdGhlIHByZXYgc2xpZGUgaW4gdGhlIHNob3dcbiAgICAgKi9cbiAgICBlbC5nb1RvUHJldlNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBpZiBpbmZpbml0ZUxvb3AgaXMgZmFsc2UgYW5kIGxhc3QgcGFnZSBpcyBzaG93aW5nLCBkaXNyZWdhcmQgY2FsbFxuICAgICAgaWYgKCFzbGlkZXIuc2V0dGluZ3MuaW5maW5pdGVMb29wICYmIHNsaWRlci5hY3RpdmUuaW5kZXggPT09IDApIHsgcmV0dXJuOyB9XG5cdCAgaWYgKHNsaWRlci53b3JraW5nID09IHRydWUpeyByZXR1cm4gO31cbiAgICAgIHZhciBwYWdlckluZGV4ID0gcGFyc2VJbnQoc2xpZGVyLmFjdGl2ZS5pbmRleCkgLSAxO1xuICAgICAgZWwuZ29Ub1NsaWRlKHBhZ2VySW5kZXgsICdwcmV2Jyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgYXV0byBzaG93XG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJldmVudENvbnRyb2xVcGRhdGUgKGJvb2xlYW4pXG4gICAgICogIC0gaWYgdHJ1ZSwgYXV0byBjb250cm9scyBzdGF0ZSB3aWxsIG5vdCBiZSB1cGRhdGVkXG4gICAgICovXG4gICAgZWwuc3RhcnRBdXRvID0gZnVuY3Rpb24ocHJldmVudENvbnRyb2xVcGRhdGUpIHtcbiAgICAgIC8vIGlmIGFuIGludGVydmFsIGFscmVhZHkgZXhpc3RzLCBkaXNyZWdhcmQgY2FsbFxuICAgICAgaWYgKHNsaWRlci5pbnRlcnZhbCkgeyByZXR1cm47IH1cbiAgICAgIC8vIGNyZWF0ZSBhbiBpbnRlcnZhbFxuICAgICAgc2xpZGVyLmludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0b0RpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgICAgICAgZWwuZ29Ub05leHRTbGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsLmdvVG9QcmV2U2xpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSwgc2xpZGVyLnNldHRpbmdzLnBhdXNlKTtcblx0ICAvL2FsbGJhY2sgZm9yIHdoZW4gdGhlIGF1dG8gcm90YXRlIHN0YXR1cyBjaGFuZ2VzXG5cdCAgc2xpZGVyLnNldHRpbmdzLm9uQXV0b0NoYW5nZS5jYWxsKGVsLCB0cnVlKTtcbiAgICAgIC8vIGlmIGF1dG8gY29udHJvbHMgYXJlIGRpc3BsYXllZCBhbmQgcHJldmVudENvbnRyb2xVcGRhdGUgaXMgbm90IHRydWVcbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXV0b0NvbnRyb2xzICYmIHByZXZlbnRDb250cm9sVXBkYXRlICE9PSB0cnVlKSB7IHVwZGF0ZUF1dG9Db250cm9scygnc3RvcCcpOyB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSBhdXRvIHNob3dcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcmV2ZW50Q29udHJvbFVwZGF0ZSAoYm9vbGVhbilcbiAgICAgKiAgLSBpZiB0cnVlLCBhdXRvIGNvbnRyb2xzIHN0YXRlIHdpbGwgbm90IGJlIHVwZGF0ZWRcbiAgICAgKi9cbiAgICBlbC5zdG9wQXV0byA9IGZ1bmN0aW9uKHByZXZlbnRDb250cm9sVXBkYXRlKSB7XG4gICAgICAvLyBpZiBubyBpbnRlcnZhbCBleGlzdHMsIGRpc3JlZ2FyZCBjYWxsXG4gICAgICBpZiAoIXNsaWRlci5pbnRlcnZhbCkgeyByZXR1cm47IH1cbiAgICAgIC8vIGNsZWFyIHRoZSBpbnRlcnZhbFxuICAgICAgY2xlYXJJbnRlcnZhbChzbGlkZXIuaW50ZXJ2YWwpO1xuICAgICAgc2xpZGVyLmludGVydmFsID0gbnVsbDtcblx0ICAvL2FsbGJhY2sgZm9yIHdoZW4gdGhlIGF1dG8gcm90YXRlIHN0YXR1cyBjaGFuZ2VzXG5cdCAgc2xpZGVyLnNldHRpbmdzLm9uQXV0b0NoYW5nZS5jYWxsKGVsLCBmYWxzZSk7XG4gICAgICAvLyBpZiBhdXRvIGNvbnRyb2xzIGFyZSBkaXNwbGF5ZWQgYW5kIHByZXZlbnRDb250cm9sVXBkYXRlIGlzIG5vdCB0cnVlXG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLmF1dG9Db250cm9scyAmJiBwcmV2ZW50Q29udHJvbFVwZGF0ZSAhPT0gdHJ1ZSkgeyB1cGRhdGVBdXRvQ29udHJvbHMoJ3N0YXJ0Jyk7IH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBjdXJyZW50IHNsaWRlIGluZGV4ICh6ZXJvLWJhc2VkKVxuICAgICAqL1xuICAgIGVsLmdldEN1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNsaWRlci5hY3RpdmUuaW5kZXg7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgY3VycmVudCBzbGlkZSBlbGVtZW50XG4gICAgICovXG4gICAgZWwuZ2V0Q3VycmVudFNsaWRlRWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHNsaWRlci5jaGlsZHJlbi5lcShzbGlkZXIuYWN0aXZlLmluZGV4KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHNsaWRlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gaW5kZXggKGludClcbiAgICAgKiAgLSBUaGUgaW5kZXggKHplcm8tYmFzZWQpIG9mIHRoZSBlbGVtZW50IHlvdSB3YW50IHJldHVybmVkLlxuICAgICAqL1xuICAgIGVsLmdldFNsaWRlRWxlbWVudCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICByZXR1cm4gc2xpZGVyLmNoaWxkcmVuLmVxKGluZGV4KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBudW1iZXIgb2Ygc2xpZGVzIGluIHNob3dcbiAgICAgKi9cbiAgICBlbC5nZXRTbGlkZUNvdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2xpZGVyLmNoaWxkcmVuLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHNsaWRlci53b3JraW5nIHZhcmlhYmxlXG4gICAgICovXG4gICAgZWwuaXNXb3JraW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gc2xpZGVyLndvcmtpbmc7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBhbGwgZHluYW1pYyBzbGlkZXIgZWxlbWVudHNcbiAgICAgKi9cbiAgICBlbC5yZWRyYXdTbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIHJlc2l6ZSBhbGwgY2hpbGRyZW4gaW4gcmF0aW8gdG8gbmV3IHNjcmVlbiBzaXplXG4gICAgICBzbGlkZXIuY2hpbGRyZW4uYWRkKGVsLmZpbmQoJy5ieC1jbG9uZScpKS5vdXRlcldpZHRoKGdldFNsaWRlV2lkdGgoKSk7XG4gICAgICAvLyBhZGp1c3QgdGhlIGhlaWdodFxuICAgICAgc2xpZGVyLnZpZXdwb3J0LmNzcygnaGVpZ2h0JywgZ2V0Vmlld3BvcnRIZWlnaHQoKSk7XG4gICAgICAvLyB1cGRhdGUgdGhlIHNsaWRlIHBvc2l0aW9uXG4gICAgICBpZiAoIXNsaWRlci5zZXR0aW5ncy50aWNrZXIpIHsgc2V0U2xpZGVQb3NpdGlvbigpOyB9XG4gICAgICAvLyBpZiBhY3RpdmUubGFzdCB3YXMgdHJ1ZSBiZWZvcmUgdGhlIHNjcmVlbiByZXNpemUsIHdlIHdhbnRcbiAgICAgIC8vIHRvIGtlZXAgaXQgbGFzdCBubyBtYXR0ZXIgd2hhdCBzY3JlZW4gc2l6ZSB3ZSBlbmQgb25cbiAgICAgIGlmIChzbGlkZXIuYWN0aXZlLmxhc3QpIHsgc2xpZGVyLmFjdGl2ZS5pbmRleCA9IGdldFBhZ2VyUXR5KCkgLSAxOyB9XG4gICAgICAvLyBpZiB0aGUgYWN0aXZlIGluZGV4IChwYWdlKSBubyBsb25nZXIgZXhpc3RzIGR1ZSB0byB0aGUgcmVzaXplLCBzaW1wbHkgc2V0IHRoZSBpbmRleCBhcyBsYXN0XG4gICAgICBpZiAoc2xpZGVyLmFjdGl2ZS5pbmRleCA+PSBnZXRQYWdlclF0eSgpKSB7IHNsaWRlci5hY3RpdmUubGFzdCA9IHRydWU7IH1cbiAgICAgIC8vIGlmIGEgcGFnZXIgaXMgYmVpbmcgZGlzcGxheWVkIGFuZCBhIGN1c3RvbSBwYWdlciBpcyBub3QgYmVpbmcgdXNlZCwgdXBkYXRlIGl0XG4gICAgICBpZiAoc2xpZGVyLnNldHRpbmdzLnBhZ2VyICYmICFzbGlkZXIuc2V0dGluZ3MucGFnZXJDdXN0b20pIHtcbiAgICAgICAgcG9wdWxhdGVQYWdlcigpO1xuICAgICAgICB1cGRhdGVQYWdlckFjdGl2ZShzbGlkZXIuYWN0aXZlLmluZGV4KTtcbiAgICAgIH1cbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3MuYXJpYUhpZGRlbikgeyBhcHBseUFyaWFIaWRkZW5BdHRyaWJ1dGVzKHNsaWRlci5hY3RpdmUuaW5kZXggKiBnZXRNb3ZlQnkoKSk7IH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzdHJveSB0aGUgY3VycmVudCBpbnN0YW5jZSBvZiB0aGUgc2xpZGVyIChyZXZlcnQgZXZlcnl0aGluZyBiYWNrIHRvIG9yaWdpbmFsIHN0YXRlKVxuICAgICAqL1xuICAgIGVsLmRlc3Ryb3lTbGlkZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGRvbid0IGRvIGFueXRoaW5nIGlmIHNsaWRlciBoYXMgYWxyZWFkeSBiZWVuIGRlc3Ryb3llZFxuICAgICAgaWYgKCFzbGlkZXIuaW5pdGlhbGl6ZWQpIHsgcmV0dXJuOyB9XG4gICAgICBzbGlkZXIuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICQoJy5ieC1jbG9uZScsIHRoaXMpLnJlbW92ZSgpO1xuICAgICAgc2xpZGVyLmNoaWxkcmVuLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ29yaWdTdHlsZScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnU3R5bGUnKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ29yaWdTdHlsZScpICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5hdHRyKCdzdHlsZScsICQodGhpcykuZGF0YSgnb3JpZ1N0eWxlJykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJCh0aGlzKS5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgfVxuICAgICAgJCh0aGlzKS51bndyYXAoKS51bndyYXAoKTtcbiAgICAgIGlmIChzbGlkZXIuY29udHJvbHMuZWwpIHsgc2xpZGVyLmNvbnRyb2xzLmVsLnJlbW92ZSgpOyB9XG4gICAgICBpZiAoc2xpZGVyLmNvbnRyb2xzLm5leHQpIHsgc2xpZGVyLmNvbnRyb2xzLm5leHQucmVtb3ZlKCk7IH1cbiAgICAgIGlmIChzbGlkZXIuY29udHJvbHMucHJldikgeyBzbGlkZXIuY29udHJvbHMucHJldi5yZW1vdmUoKTsgfVxuICAgICAgaWYgKHNsaWRlci5wYWdlckVsICYmIHNsaWRlci5zZXR0aW5ncy5jb250cm9scyAmJiAhc2xpZGVyLnNldHRpbmdzLnBhZ2VyQ3VzdG9tKSB7IHNsaWRlci5wYWdlckVsLnJlbW92ZSgpOyB9XG4gICAgICAkKCcuYngtY2FwdGlvbicsIHRoaXMpLnJlbW92ZSgpO1xuICAgICAgaWYgKHNsaWRlci5jb250cm9scy5hdXRvRWwpIHsgc2xpZGVyLmNvbnRyb2xzLmF1dG9FbC5yZW1vdmUoKTsgfVxuICAgICAgY2xlYXJJbnRlcnZhbChzbGlkZXIuaW50ZXJ2YWwpO1xuICAgICAgaWYgKHNsaWRlci5zZXR0aW5ncy5yZXNwb25zaXZlKSB7ICQod2luZG93KS51bmJpbmQoJ3Jlc2l6ZScsIHJlc2l6ZVdpbmRvdyk7IH1cbiAgICAgIGlmIChzbGlkZXIuc2V0dGluZ3Mua2V5Ym9hcmRFbmFibGVkKSB7ICQoZG9jdW1lbnQpLnVuYmluZCgna2V5ZG93bicsIGtleVByZXNzKTsgfVxuICAgICAgLy9yZW1vdmUgc2VsZiByZWZlcmVuY2UgaW4gZGF0YVxuICAgICAgJCh0aGlzKS5yZW1vdmVEYXRhKCdieFNsaWRlcicpO1xuXHQgIC8vIHJlbW92ZSBnbG9iYWwgd2luZG93IGhhbmRsZXJzXG5cdCAgJCh3aW5kb3cpLm9mZignYmx1cicsIHdpbmRvd0JsdXJIYW5kbGVyKS5vZmYoJ2ZvY3VzJywgd2luZG93Rm9jdXNIYW5kbGVyKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVsb2FkIHRoZSBzbGlkZXIgKHJldmVydCBhbGwgRE9NIGNoYW5nZXMsIGFuZCByZS1pbml0aWFsaXplKVxuICAgICAqL1xuICAgIGVsLnJlbG9hZFNsaWRlciA9IGZ1bmN0aW9uKHNldHRpbmdzKSB7XG4gICAgICBpZiAoc2V0dGluZ3MgIT09IHVuZGVmaW5lZCkgeyBvcHRpb25zID0gc2V0dGluZ3M7IH1cbiAgICAgIGVsLmRlc3Ryb3lTbGlkZXIoKTtcbiAgICAgIGluaXQoKTtcbiAgICAgIC8vc3RvcmUgcmVmZXJlbmNlIHRvIHNlbGYgaW4gb3JkZXIgdG8gYWNjZXNzIHB1YmxpYyBmdW5jdGlvbnMgbGF0ZXJcbiAgICAgICQoZWwpLmRhdGEoJ2J4U2xpZGVyJywgdGhpcyk7XG4gICAgfTtcblxuICAgIGluaXQoKTtcblxuICAgICQoZWwpLmRhdGEoJ2J4U2xpZGVyJywgdGhpcyk7XG5cbiAgICAvLyByZXR1cm5zIHRoZSBjdXJyZW50IGpRdWVyeSBvYmplY3RcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxufSkoalF1ZXJ5KTtcbiIsIi8qKlxuICogT3dsIENhcm91c2VsIHYyLjIuMFxuICogQ29weXJpZ2h0IDIwMTMtMjAxNiBEYXZpZCBEZXV0c2NoXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9Pd2xDYXJvdXNlbDIvT3dsQ2Fyb3VzZWwyL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKi9cbi8qKlxuICogT3dsIGNhcm91c2VsXG4gKiBAdmVyc2lvbiAyLjEuNlxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBAdG9kbyBMYXp5IExvYWQgSWNvblxuICogQHRvZG8gcHJldmVudCBhbmltYXRpb25lbmQgYnVibGluZ1xuICogQHRvZG8gaXRlbXNTY2FsZVVwXG4gKiBAdG9kbyBUZXN0IFplcHRvXG4gKiBAdG9kbyBzdGFnZVBhZGRpbmcgY2FsY3VsYXRlIHdyb25nIGFjdGl2ZSBjbGFzc2VzXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBjYXJvdXNlbC5cblx0ICogQGNsYXNzIFRoZSBPd2wgQ2Fyb3VzZWwuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl9IGVsZW1lbnQgLSBUaGUgZWxlbWVudCB0byBjcmVhdGUgdGhlIGNhcm91c2VsIGZvci5cblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIFRoZSBvcHRpb25zXG5cdCAqL1xuXHRmdW5jdGlvbiBPd2woZWxlbWVudCwgb3B0aW9ucykge1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzZXR0aW5ncyBmb3IgdGhlIGNhcm91c2VsLlxuXHRcdCAqIEBwdWJsaWNcblx0XHQgKi9cblx0XHR0aGlzLnNldHRpbmdzID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgb3B0aW9ucyBzZXQgYnkgdGhlIGNhbGxlciBpbmNsdWRpbmcgZGVmYXVsdHMuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdHRoaXMub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBPd2wuRGVmYXVsdHMsIG9wdGlvbnMpO1xuXG5cdFx0LyoqXG5cdFx0ICogUGx1Z2luIGVsZW1lbnQuXG5cdFx0ICogQHB1YmxpY1xuXHRcdCAqL1xuXHRcdHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0LyoqXG5cdFx0ICogUHJveGllZCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZXMgdG8gdGhlIHJ1bm5pbmcgcGx1Z2lucyBvZiB0aGlzIGNhcm91c2VsLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9wbHVnaW5zID0ge307XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50bHkgc3VwcHJlc3NlZCBldmVudHMgdG8gcHJldmVudCB0aGVtIGZyb20gYmVlaW5nIHJldHJpZ2dlcmVkLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9zdXByZXNzID0ge307XG5cblx0XHQvKipcblx0XHQgKiBBYnNvbHV0ZSBjdXJyZW50IHBvc2l0aW9uLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9jdXJyZW50ID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFuaW1hdGlvbiBzcGVlZCBpbiBtaWxsaXNlY29uZHMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX3NwZWVkID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIENvb3JkaW5hdGVzIG9mIGFsbCBpdGVtcyBpbiBwaXhlbC5cblx0XHQgKiBAdG9kbyBUaGUgbmFtZSBvZiB0aGlzIG1lbWJlciBpcyBtaXNzbGVhZGluZy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fY29vcmRpbmF0ZXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEN1cnJlbnQgYnJlYWtwb2ludC5cblx0XHQgKiBAdG9kbyBSZWFsIG1lZGlhIHF1ZXJpZXMgd291bGQgYmUgbmljZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fYnJlYWtwb2ludCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHdpZHRoIG9mIHRoZSBwbHVnaW4gZWxlbWVudC5cblx0XHQgKi9cblx0XHR0aGlzLl93aWR0aCA9IG51bGw7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgcmVhbCBpdGVtcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5faXRlbXMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBjbG9uZWQgaXRlbXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX2Nsb25lcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogTWVyZ2UgdmFsdWVzIG9mIGFsbCBpdGVtcy5cblx0XHQgKiBAdG9kbyBNYXliZSB0aGlzIGNvdWxkIGJlIHBhcnQgb2YgYSBwbHVnaW4uXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqL1xuXHRcdHRoaXMuX21lcmdlcnMgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIFdpZHRocyBvZiBhbGwgaXRlbXMuXG5cdFx0ICovXG5cdFx0dGhpcy5fd2lkdGhzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBJbnZhbGlkYXRlZCBwYXJ0cyB3aXRoaW4gdGhlIHVwZGF0ZSBwcm9jZXNzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9pbnZhbGlkYXRlZCA9IHt9O1xuXG5cdFx0LyoqXG5cdFx0ICogT3JkZXJlZCBsaXN0IG9mIHdvcmtlcnMgZm9yIHRoZSB1cGRhdGUgcHJvY2Vzcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fcGlwZSA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzdGF0ZSBpbmZvcm1hdGlvbiBmb3IgdGhlIGRyYWcgb3BlcmF0aW9uLlxuXHRcdCAqIEB0b2RvICMyNjFcblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICovXG5cdFx0dGhpcy5fZHJhZyA9IHtcblx0XHRcdHRpbWU6IG51bGwsXG5cdFx0XHR0YXJnZXQ6IG51bGwsXG5cdFx0XHRwb2ludGVyOiBudWxsLFxuXHRcdFx0c3RhZ2U6IHtcblx0XHRcdFx0c3RhcnQ6IG51bGwsXG5cdFx0XHRcdGN1cnJlbnQ6IG51bGxcblx0XHRcdH0sXG5cdFx0XHRkaXJlY3Rpb246IG51bGxcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3VycmVudCBzdGF0ZSBpbmZvcm1hdGlvbiBhbmQgdGhlaXIgdGFncy5cblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKi9cblx0XHR0aGlzLl9zdGF0ZXMgPSB7XG5cdFx0XHRjdXJyZW50OiB7fSxcblx0XHRcdHRhZ3M6IHtcblx0XHRcdFx0J2luaXRpYWxpemluZyc6IFsgJ2J1c3knIF0sXG5cdFx0XHRcdCdhbmltYXRpbmcnOiBbICdidXN5JyBdLFxuXHRcdFx0XHQnZHJhZ2dpbmcnOiBbICdpbnRlcmFjdGluZycgXVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQkLmVhY2goWyAnb25SZXNpemUnLCAnb25UaHJvdHRsZWRSZXNpemUnIF0sICQucHJveHkoZnVuY3Rpb24oaSwgaGFuZGxlcikge1xuXHRcdFx0dGhpcy5faGFuZGxlcnNbaGFuZGxlcl0gPSAkLnByb3h5KHRoaXNbaGFuZGxlcl0sIHRoaXMpO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdCQuZWFjaChPd2wuUGx1Z2lucywgJC5wcm94eShmdW5jdGlvbihrZXksIHBsdWdpbikge1xuXHRcdFx0dGhpcy5fcGx1Z2luc1trZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBrZXkuc2xpY2UoMSldXG5cdFx0XHRcdD0gbmV3IHBsdWdpbih0aGlzKTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHQkLmVhY2goT3dsLldvcmtlcnMsICQucHJveHkoZnVuY3Rpb24ocHJpb3JpdHksIHdvcmtlcikge1xuXHRcdFx0dGhpcy5fcGlwZS5wdXNoKHtcblx0XHRcdFx0J2ZpbHRlcic6IHdvcmtlci5maWx0ZXIsXG5cdFx0XHRcdCdydW4nOiAkLnByb3h5KHdvcmtlci5ydW4sIHRoaXMpXG5cdFx0XHR9KTtcblx0XHR9LCB0aGlzKSk7XG5cblx0XHR0aGlzLnNldHVwKCk7XG5cdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdH1cblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zIGZvciB0aGUgY2Fyb3VzZWwuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5EZWZhdWx0cyA9IHtcblx0XHRpdGVtczogMyxcblx0XHRsb29wOiBmYWxzZSxcblx0XHRjZW50ZXI6IGZhbHNlLFxuXHRcdHJld2luZDogZmFsc2UsXG5cblx0XHRtb3VzZURyYWc6IHRydWUsXG5cdFx0dG91Y2hEcmFnOiB0cnVlLFxuXHRcdHB1bGxEcmFnOiB0cnVlLFxuXHRcdGZyZWVEcmFnOiBmYWxzZSxcblxuXHRcdG1hcmdpbjogMCxcblx0XHRzdGFnZVBhZGRpbmc6IDAsXG5cblx0XHRtZXJnZTogZmFsc2UsXG5cdFx0bWVyZ2VGaXQ6IHRydWUsXG5cdFx0YXV0b1dpZHRoOiBmYWxzZSxcblxuXHRcdHN0YXJ0UG9zaXRpb246IDAsXG5cdFx0cnRsOiBmYWxzZSxcblxuXHRcdHNtYXJ0U3BlZWQ6IDI1MCxcblx0XHRmbHVpZFNwZWVkOiBmYWxzZSxcblx0XHRkcmFnRW5kU3BlZWQ6IGZhbHNlLFxuXG5cdFx0cmVzcG9uc2l2ZToge30sXG5cdFx0cmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAyMDAsXG5cdFx0cmVzcG9uc2l2ZUJhc2VFbGVtZW50OiB3aW5kb3csXG5cblx0XHRmYWxsYmFja0Vhc2luZzogJ3N3aW5nJyxcblxuXHRcdGluZm86IGZhbHNlLFxuXG5cdFx0bmVzdGVkSXRlbVNlbGVjdG9yOiBmYWxzZSxcblx0XHRpdGVtRWxlbWVudDogJ2RpdicsXG5cdFx0c3RhZ2VFbGVtZW50OiAnZGl2JyxcblxuXHRcdHJlZnJlc2hDbGFzczogJ293bC1yZWZyZXNoJyxcblx0XHRsb2FkZWRDbGFzczogJ293bC1sb2FkZWQnLFxuXHRcdGxvYWRpbmdDbGFzczogJ293bC1sb2FkaW5nJyxcblx0XHRydGxDbGFzczogJ293bC1ydGwnLFxuXHRcdHJlc3BvbnNpdmVDbGFzczogJ293bC1yZXNwb25zaXZlJyxcblx0XHRkcmFnQ2xhc3M6ICdvd2wtZHJhZycsXG5cdFx0aXRlbUNsYXNzOiAnb3dsLWl0ZW0nLFxuXHRcdHN0YWdlQ2xhc3M6ICdvd2wtc3RhZ2UnLFxuXHRcdHN0YWdlT3V0ZXJDbGFzczogJ293bC1zdGFnZS1vdXRlcicsXG5cdFx0Z3JhYkNsYXNzOiAnb3dsLWdyYWInXG5cdH07XG5cblx0LyoqXG5cdCAqIEVudW1lcmF0aW9uIGZvciB3aWR0aC5cblx0ICogQHB1YmxpY1xuXHQgKiBAcmVhZG9ubHlcblx0ICogQGVudW0ge1N0cmluZ31cblx0ICovXG5cdE93bC5XaWR0aCA9IHtcblx0XHREZWZhdWx0OiAnZGVmYXVsdCcsXG5cdFx0SW5uZXI6ICdpbm5lcicsXG5cdFx0T3V0ZXI6ICdvdXRlcidcblx0fTtcblxuXHQvKipcblx0ICogRW51bWVyYXRpb24gZm9yIHR5cGVzLlxuXHQgKiBAcHVibGljXG5cdCAqIEByZWFkb25seVxuXHQgKiBAZW51bSB7U3RyaW5nfVxuXHQgKi9cblx0T3dsLlR5cGUgPSB7XG5cdFx0RXZlbnQ6ICdldmVudCcsXG5cdFx0U3RhdGU6ICdzdGF0ZSdcblx0fTtcblxuXHQvKipcblx0ICogQ29udGFpbnMgYWxsIHJlZ2lzdGVyZWQgcGx1Z2lucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLlBsdWdpbnMgPSB7fTtcblxuXHQvKipcblx0ICogTGlzdCBvZiB3b3JrZXJzIGludm9sdmVkIGluIHRoZSB1cGRhdGUgcHJvY2Vzcy5cblx0ICovXG5cdE93bC5Xb3JrZXJzID0gWyB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5fd2lkdGggPSB0aGlzLiRlbGVtZW50LndpZHRoKCk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHRjYWNoZS5jdXJyZW50ID0gdGhpcy5faXRlbXMgJiYgdGhpcy5faXRlbXNbdGhpcy5yZWxhdGl2ZSh0aGlzLl9jdXJyZW50KV07XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oJy5jbG9uZWQnKS5yZW1vdmUoKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdHZhciBtYXJnaW4gPSB0aGlzLnNldHRpbmdzLm1hcmdpbiB8fCAnJyxcblx0XHRcdFx0Z3JpZCA9ICF0aGlzLnNldHRpbmdzLmF1dG9XaWR0aCxcblx0XHRcdFx0cnRsID0gdGhpcy5zZXR0aW5ncy5ydGwsXG5cdFx0XHRcdGNzcyA9IHtcblx0XHRcdFx0XHQnd2lkdGgnOiAnYXV0bycsXG5cdFx0XHRcdFx0J21hcmdpbi1sZWZ0JzogcnRsID8gbWFyZ2luIDogJycsXG5cdFx0XHRcdFx0J21hcmdpbi1yaWdodCc6IHJ0bCA/ICcnIDogbWFyZ2luXG5cdFx0XHRcdH07XG5cblx0XHRcdCFncmlkICYmIHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuY3NzKGNzcyk7XG5cblx0XHRcdGNhY2hlLmNzcyA9IGNzcztcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oY2FjaGUpIHtcblx0XHRcdHZhciB3aWR0aCA9ICh0aGlzLndpZHRoKCkgLyB0aGlzLnNldHRpbmdzLml0ZW1zKS50b0ZpeGVkKDMpIC0gdGhpcy5zZXR0aW5ncy5tYXJnaW4sXG5cdFx0XHRcdG1lcmdlID0gbnVsbCxcblx0XHRcdFx0aXRlcmF0b3IgPSB0aGlzLl9pdGVtcy5sZW5ndGgsXG5cdFx0XHRcdGdyaWQgPSAhdGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgsXG5cdFx0XHRcdHdpZHRocyA9IFtdO1xuXG5cdFx0XHRjYWNoZS5pdGVtcyA9IHtcblx0XHRcdFx0bWVyZ2U6IGZhbHNlLFxuXHRcdFx0XHR3aWR0aDogd2lkdGhcblx0XHRcdH07XG5cblx0XHRcdHdoaWxlIChpdGVyYXRvci0tKSB7XG5cdFx0XHRcdG1lcmdlID0gdGhpcy5fbWVyZ2Vyc1tpdGVyYXRvcl07XG5cdFx0XHRcdG1lcmdlID0gdGhpcy5zZXR0aW5ncy5tZXJnZUZpdCAmJiBNYXRoLm1pbihtZXJnZSwgdGhpcy5zZXR0aW5ncy5pdGVtcykgfHwgbWVyZ2U7XG5cblx0XHRcdFx0Y2FjaGUuaXRlbXMubWVyZ2UgPSBtZXJnZSA+IDEgfHwgY2FjaGUuaXRlbXMubWVyZ2U7XG5cblx0XHRcdFx0d2lkdGhzW2l0ZXJhdG9yXSA9ICFncmlkID8gdGhpcy5faXRlbXNbaXRlcmF0b3JdLndpZHRoKCkgOiB3aWR0aCAqIG1lcmdlO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl93aWR0aHMgPSB3aWR0aHM7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGNsb25lcyA9IFtdLFxuXHRcdFx0XHRpdGVtcyA9IHRoaXMuX2l0ZW1zLFxuXHRcdFx0XHRzZXR0aW5ncyA9IHRoaXMuc2V0dGluZ3MsXG5cdFx0XHRcdHZpZXcgPSBNYXRoLm1heChzZXR0aW5ncy5pdGVtcyAqIDIsIDQpLFxuXHRcdFx0XHRzaXplID0gTWF0aC5jZWlsKGl0ZW1zLmxlbmd0aCAvIDIpICogMixcblx0XHRcdFx0cmVwZWF0ID0gc2V0dGluZ3MubG9vcCAmJiBpdGVtcy5sZW5ndGggPyBzZXR0aW5ncy5yZXdpbmQgPyB2aWV3IDogTWF0aC5tYXgodmlldywgc2l6ZSkgOiAwLFxuXHRcdFx0XHRhcHBlbmQgPSAnJyxcblx0XHRcdFx0cHJlcGVuZCA9ICcnO1xuXG5cdFx0XHRyZXBlYXQgLz0gMjtcblxuXHRcdFx0d2hpbGUgKHJlcGVhdC0tKSB7XG5cdFx0XHRcdGNsb25lcy5wdXNoKHRoaXMubm9ybWFsaXplKGNsb25lcy5sZW5ndGggLyAyLCB0cnVlKSk7XG5cdFx0XHRcdGFwcGVuZCA9IGFwcGVuZCArIGl0ZW1zW2Nsb25lc1tjbG9uZXMubGVuZ3RoIC0gMV1dWzBdLm91dGVySFRNTDtcblx0XHRcdFx0Y2xvbmVzLnB1c2godGhpcy5ub3JtYWxpemUoaXRlbXMubGVuZ3RoIC0gMSAtIChjbG9uZXMubGVuZ3RoIC0gMSkgLyAyLCB0cnVlKSk7XG5cdFx0XHRcdHByZXBlbmQgPSBpdGVtc1tjbG9uZXNbY2xvbmVzLmxlbmd0aCAtIDFdXVswXS5vdXRlckhUTUwgKyBwcmVwZW5kO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jbG9uZXMgPSBjbG9uZXM7XG5cblx0XHRcdCQoYXBwZW5kKS5hZGRDbGFzcygnY2xvbmVkJykuYXBwZW5kVG8odGhpcy4kc3RhZ2UpO1xuXHRcdFx0JChwcmVwZW5kKS5hZGRDbGFzcygnY2xvbmVkJykucHJlcGVuZFRvKHRoaXMuJHN0YWdlKTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcnRsID0gdGhpcy5zZXR0aW5ncy5ydGwgPyAxIDogLTEsXG5cdFx0XHRcdHNpemUgPSB0aGlzLl9jbG9uZXMubGVuZ3RoICsgdGhpcy5faXRlbXMubGVuZ3RoLFxuXHRcdFx0XHRpdGVyYXRvciA9IC0xLFxuXHRcdFx0XHRwcmV2aW91cyA9IDAsXG5cdFx0XHRcdGN1cnJlbnQgPSAwLFxuXHRcdFx0XHRjb29yZGluYXRlcyA9IFtdO1xuXG5cdFx0XHR3aGlsZSAoKytpdGVyYXRvciA8IHNpemUpIHtcblx0XHRcdFx0cHJldmlvdXMgPSBjb29yZGluYXRlc1tpdGVyYXRvciAtIDFdIHx8IDA7XG5cdFx0XHRcdGN1cnJlbnQgPSB0aGlzLl93aWR0aHNbdGhpcy5yZWxhdGl2ZShpdGVyYXRvcildICsgdGhpcy5zZXR0aW5ncy5tYXJnaW47XG5cdFx0XHRcdGNvb3JkaW5hdGVzLnB1c2gocHJldmlvdXMgKyBjdXJyZW50ICogcnRsKTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5fY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3dpZHRoJywgJ2l0ZW1zJywgJ3NldHRpbmdzJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcGFkZGluZyA9IHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nLFxuXHRcdFx0XHRjb29yZGluYXRlcyA9IHRoaXMuX2Nvb3JkaW5hdGVzLFxuXHRcdFx0XHRjc3MgPSB7XG5cdFx0XHRcdFx0J3dpZHRoJzogTWF0aC5jZWlsKE1hdGguYWJzKGNvb3JkaW5hdGVzW2Nvb3JkaW5hdGVzLmxlbmd0aCAtIDFdKSkgKyBwYWRkaW5nICogMixcblx0XHRcdFx0XHQncGFkZGluZy1sZWZ0JzogcGFkZGluZyB8fCAnJyxcblx0XHRcdFx0XHQncGFkZGluZy1yaWdodCc6IHBhZGRpbmcgfHwgJydcblx0XHRcdFx0fTtcblxuXHRcdFx0dGhpcy4kc3RhZ2UuY3NzKGNzcyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHR2YXIgaXRlcmF0b3IgPSB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGgsXG5cdFx0XHRcdGdyaWQgPSAhdGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgsXG5cdFx0XHRcdGl0ZW1zID0gdGhpcy4kc3RhZ2UuY2hpbGRyZW4oKTtcblxuXHRcdFx0aWYgKGdyaWQgJiYgY2FjaGUuaXRlbXMubWVyZ2UpIHtcblx0XHRcdFx0d2hpbGUgKGl0ZXJhdG9yLS0pIHtcblx0XHRcdFx0XHRjYWNoZS5jc3Mud2lkdGggPSB0aGlzLl93aWR0aHNbdGhpcy5yZWxhdGl2ZShpdGVyYXRvcildO1xuXHRcdFx0XHRcdGl0ZW1zLmVxKGl0ZXJhdG9yKS5jc3MoY2FjaGUuY3NzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChncmlkKSB7XG5cdFx0XHRcdGNhY2hlLmNzcy53aWR0aCA9IGNhY2hlLml0ZW1zLndpZHRoO1xuXHRcdFx0XHRpdGVtcy5jc3MoY2FjaGUuY3NzKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ2l0ZW1zJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLl9jb29yZGluYXRlcy5sZW5ndGggPCAxICYmIHRoaXMuJHN0YWdlLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKGNhY2hlKSB7XG5cdFx0XHRjYWNoZS5jdXJyZW50ID0gY2FjaGUuY3VycmVudCA/IHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkuaW5kZXgoY2FjaGUuY3VycmVudCkgOiAwO1xuXHRcdFx0Y2FjaGUuY3VycmVudCA9IE1hdGgubWF4KHRoaXMubWluaW11bSgpLCBNYXRoLm1pbih0aGlzLm1heGltdW0oKSwgY2FjaGUuY3VycmVudCkpO1xuXHRcdFx0dGhpcy5yZXNldChjYWNoZS5jdXJyZW50KTtcblx0XHR9XG5cdH0sIHtcblx0XHRmaWx0ZXI6IFsgJ3Bvc2l0aW9uJyBdLFxuXHRcdHJ1bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmFuaW1hdGUodGhpcy5jb29yZGluYXRlcyh0aGlzLl9jdXJyZW50KSk7XG5cdFx0fVxuXHR9LCB7XG5cdFx0ZmlsdGVyOiBbICd3aWR0aCcsICdwb3NpdGlvbicsICdpdGVtcycsICdzZXR0aW5ncycgXSxcblx0XHRydW46IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHJ0bCA9IHRoaXMuc2V0dGluZ3MucnRsID8gMSA6IC0xLFxuXHRcdFx0XHRwYWRkaW5nID0gdGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcgKiAyLFxuXHRcdFx0XHRiZWdpbiA9IHRoaXMuY29vcmRpbmF0ZXModGhpcy5jdXJyZW50KCkpICsgcGFkZGluZyxcblx0XHRcdFx0ZW5kID0gYmVnaW4gKyB0aGlzLndpZHRoKCkgKiBydGwsXG5cdFx0XHRcdGlubmVyLCBvdXRlciwgbWF0Y2hlcyA9IFtdLCBpLCBuO1xuXG5cdFx0XHRmb3IgKGkgPSAwLCBuID0gdGhpcy5fY29vcmRpbmF0ZXMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG5cdFx0XHRcdGlubmVyID0gdGhpcy5fY29vcmRpbmF0ZXNbaSAtIDFdIHx8IDA7XG5cdFx0XHRcdG91dGVyID0gTWF0aC5hYnModGhpcy5fY29vcmRpbmF0ZXNbaV0pICsgcGFkZGluZyAqIHJ0bDtcblxuXHRcdFx0XHRpZiAoKHRoaXMub3AoaW5uZXIsICc8PScsIGJlZ2luKSAmJiAodGhpcy5vcChpbm5lciwgJz4nLCBlbmQpKSlcblx0XHRcdFx0XHR8fCAodGhpcy5vcChvdXRlciwgJzwnLCBiZWdpbikgJiYgdGhpcy5vcChvdXRlciwgJz4nLCBlbmQpKSkge1xuXHRcdFx0XHRcdG1hdGNoZXMucHVzaChpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCc6ZXEoJyArIG1hdGNoZXMuam9pbignKSwgOmVxKCcpICsgJyknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLmNlbnRlcikge1xuXHRcdFx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignLmNlbnRlcicpLnJlbW92ZUNsYXNzKCdjZW50ZXInKTtcblx0XHRcdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5lcSh0aGlzLmN1cnJlbnQoKSkuYWRkQ2xhc3MoJ2NlbnRlcicpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBdO1xuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplcyB0aGUgY2Fyb3VzZWwuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZW50ZXIoJ2luaXRpYWxpemluZycpO1xuXHRcdHRoaXMudHJpZ2dlcignaW5pdGlhbGl6ZScpO1xuXG5cdFx0dGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyh0aGlzLnNldHRpbmdzLnJ0bENsYXNzLCB0aGlzLnNldHRpbmdzLnJ0bCk7XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5hdXRvV2lkdGggJiYgIXRoaXMuaXMoJ3ByZS1sb2FkaW5nJykpIHtcblx0XHRcdHZhciBpbWdzLCBuZXN0ZWRTZWxlY3Rvciwgd2lkdGg7XG5cdFx0XHRpbWdzID0gdGhpcy4kZWxlbWVudC5maW5kKCdpbWcnKTtcblx0XHRcdG5lc3RlZFNlbGVjdG9yID0gdGhpcy5zZXR0aW5ncy5uZXN0ZWRJdGVtU2VsZWN0b3IgPyAnLicgKyB0aGlzLnNldHRpbmdzLm5lc3RlZEl0ZW1TZWxlY3RvciA6IHVuZGVmaW5lZDtcblx0XHRcdHdpZHRoID0gdGhpcy4kZWxlbWVudC5jaGlsZHJlbihuZXN0ZWRTZWxlY3Rvcikud2lkdGgoKTtcblxuXHRcdFx0aWYgKGltZ3MubGVuZ3RoICYmIHdpZHRoIDw9IDApIHtcblx0XHRcdFx0dGhpcy5wcmVsb2FkQXV0b1dpZHRoSW1hZ2VzKGltZ3MpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuJGVsZW1lbnQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRpbmdDbGFzcyk7XG5cblx0XHQvLyBjcmVhdGUgc3RhZ2Vcblx0XHR0aGlzLiRzdGFnZSA9ICQoJzwnICsgdGhpcy5zZXR0aW5ncy5zdGFnZUVsZW1lbnQgKyAnIGNsYXNzPVwiJyArIHRoaXMuc2V0dGluZ3Muc3RhZ2VDbGFzcyArICdcIi8+Jylcblx0XHRcdC53cmFwKCc8ZGl2IGNsYXNzPVwiJyArIHRoaXMuc2V0dGluZ3Muc3RhZ2VPdXRlckNsYXNzICsgJ1wiLz4nKTtcblxuXHRcdC8vIGFwcGVuZCBzdGFnZVxuXHRcdHRoaXMuJGVsZW1lbnQuYXBwZW5kKHRoaXMuJHN0YWdlLnBhcmVudCgpKTtcblxuXHRcdC8vIGFwcGVuZCBjb250ZW50XG5cdFx0dGhpcy5yZXBsYWNlKHRoaXMuJGVsZW1lbnQuY2hpbGRyZW4oKS5ub3QodGhpcy4kc3RhZ2UucGFyZW50KCkpKTtcblxuXHRcdC8vIGNoZWNrIHZpc2liaWxpdHlcblx0XHRpZiAodGhpcy4kZWxlbWVudC5pcygnOnZpc2libGUnKSkge1xuXHRcdFx0Ly8gdXBkYXRlIHZpZXdcblx0XHRcdHRoaXMucmVmcmVzaCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBpbnZhbGlkYXRlIHdpZHRoXG5cdFx0XHR0aGlzLmludmFsaWRhdGUoJ3dpZHRoJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kZWxlbWVudFxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkaW5nQ2xhc3MpXG5cdFx0XHQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmxvYWRlZENsYXNzKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5yZWdpc3RlckV2ZW50SGFuZGxlcnMoKTtcblxuXHRcdHRoaXMubGVhdmUoJ2luaXRpYWxpemluZycpO1xuXHRcdHRoaXMudHJpZ2dlcignaW5pdGlhbGl6ZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0dXBzIHRoZSBjdXJyZW50IHNldHRpbmdzLlxuXHQgKiBAdG9kbyBSZW1vdmUgcmVzcG9uc2l2ZSBjbGFzc2VzLiBXaHkgc2hvdWxkIGFkYXB0aXZlIGRlc2lnbnMgYmUgYnJvdWdodCBpbnRvIElFOD9cblx0ICogQHRvZG8gU3VwcG9ydCBmb3IgbWVkaWEgcXVlcmllcyBieSB1c2luZyBgbWF0Y2hNZWRpYWAgd291bGQgYmUgbmljZS5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5zZXR1cCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB2aWV3cG9ydCA9IHRoaXMudmlld3BvcnQoKSxcblx0XHRcdG92ZXJ3cml0ZXMgPSB0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZSxcblx0XHRcdG1hdGNoID0gLTEsXG5cdFx0XHRzZXR0aW5ncyA9IG51bGw7XG5cblx0XHRpZiAoIW92ZXJ3cml0ZXMpIHtcblx0XHRcdHNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQuZWFjaChvdmVyd3JpdGVzLCBmdW5jdGlvbihicmVha3BvaW50KSB7XG5cdFx0XHRcdGlmIChicmVha3BvaW50IDw9IHZpZXdwb3J0ICYmIGJyZWFrcG9pbnQgPiBtYXRjaCkge1xuXHRcdFx0XHRcdG1hdGNoID0gTnVtYmVyKGJyZWFrcG9pbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0c2V0dGluZ3MgPSAkLmV4dGVuZCh7fSwgdGhpcy5vcHRpb25zLCBvdmVyd3JpdGVzW21hdGNoXSk7XG5cdFx0XHRpZiAodHlwZW9mIHNldHRpbmdzLnN0YWdlUGFkZGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRzZXR0aW5ncy5zdGFnZVBhZGRpbmcgPSBzZXR0aW5ncy5zdGFnZVBhZGRpbmcoKTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBzZXR0aW5ncy5yZXNwb25zaXZlO1xuXG5cdFx0XHQvLyByZXNwb25zaXZlIGNsYXNzXG5cdFx0XHRpZiAoc2V0dGluZ3MucmVzcG9uc2l2ZUNsYXNzKSB7XG5cdFx0XHRcdHRoaXMuJGVsZW1lbnQuYXR0cignY2xhc3MnLFxuXHRcdFx0XHRcdHRoaXMuJGVsZW1lbnQuYXR0cignY2xhc3MnKS5yZXBsYWNlKG5ldyBSZWdFeHAoJygnICsgdGhpcy5vcHRpb25zLnJlc3BvbnNpdmVDbGFzcyArICctKVxcXFxTK1xcXFxzJywgJ2cnKSwgJyQxJyArIG1hdGNoKVxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcignY2hhbmdlJywgeyBwcm9wZXJ0eTogeyBuYW1lOiAnc2V0dGluZ3MnLCB2YWx1ZTogc2V0dGluZ3MgfSB9KTtcblx0XHR0aGlzLl9icmVha3BvaW50ID0gbWF0Y2g7XG5cdFx0dGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuXHRcdHRoaXMuaW52YWxpZGF0ZSgnc2V0dGluZ3MnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ2NoYW5nZWQnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdzZXR0aW5ncycsIHZhbHVlOiB0aGlzLnNldHRpbmdzIH0gfSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFVwZGF0ZXMgb3B0aW9uIGxvZ2ljIGlmIG5lY2Vzc2VyeS5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vcHRpb25zTG9naWMgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5hdXRvV2lkdGgpIHtcblx0XHRcdHRoaXMuc2V0dGluZ3Muc3RhZ2VQYWRkaW5nID0gZmFsc2U7XG5cdFx0XHR0aGlzLnNldHRpbmdzLm1lcmdlID0gZmFsc2U7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBQcmVwYXJlcyBhbiBpdGVtIGJlZm9yZSBhZGQuXG5cdCAqIEB0b2RvIFJlbmFtZSBldmVudCBwYXJhbWV0ZXIgYGNvbnRlbnRgIHRvIGBpdGVtYC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJucyB7alF1ZXJ5fEhUTUxFbGVtZW50fSAtIFRoZSBpdGVtIGNvbnRhaW5lci5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucHJlcGFyZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcblx0XHR2YXIgZXZlbnQgPSB0aGlzLnRyaWdnZXIoJ3ByZXBhcmUnLCB7IGNvbnRlbnQ6IGl0ZW0gfSk7XG5cblx0XHRpZiAoIWV2ZW50LmRhdGEpIHtcblx0XHRcdGV2ZW50LmRhdGEgPSAkKCc8JyArIHRoaXMuc2V0dGluZ3MuaXRlbUVsZW1lbnQgKyAnLz4nKVxuXHRcdFx0XHQuYWRkQ2xhc3ModGhpcy5vcHRpb25zLml0ZW1DbGFzcykuYXBwZW5kKGl0ZW0pXG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKCdwcmVwYXJlZCcsIHsgY29udGVudDogZXZlbnQuZGF0YSB9KTtcblxuXHRcdHJldHVybiBldmVudC5kYXRhO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBVcGRhdGVzIHRoZSB2aWV3LlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdG4gPSB0aGlzLl9waXBlLmxlbmd0aCxcblx0XHRcdGZpbHRlciA9ICQucHJveHkoZnVuY3Rpb24ocCkgeyByZXR1cm4gdGhpc1twXSB9LCB0aGlzLl9pbnZhbGlkYXRlZCksXG5cdFx0XHRjYWNoZSA9IHt9O1xuXG5cdFx0d2hpbGUgKGkgPCBuKSB7XG5cdFx0XHRpZiAodGhpcy5faW52YWxpZGF0ZWQuYWxsIHx8ICQuZ3JlcCh0aGlzLl9waXBlW2ldLmZpbHRlciwgZmlsdGVyKS5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHRoaXMuX3BpcGVbaV0ucnVuKGNhY2hlKTtcblx0XHRcdH1cblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHR0aGlzLl9pbnZhbGlkYXRlZCA9IHt9O1xuXG5cdFx0IXRoaXMuaXMoJ3ZhbGlkJykgJiYgdGhpcy5lbnRlcigndmFsaWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIHZpZXcuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtPd2wuV2lkdGh9IFtkaW1lbnNpb249T3dsLldpZHRoLkRlZmF1bHRdIC0gVGhlIGRpbWVuc2lvbiB0byByZXR1cm4uXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIHdpZHRoIG9mIHRoZSB2aWV3IGluIHBpeGVsLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS53aWR0aCA9IGZ1bmN0aW9uKGRpbWVuc2lvbikge1xuXHRcdGRpbWVuc2lvbiA9IGRpbWVuc2lvbiB8fCBPd2wuV2lkdGguRGVmYXVsdDtcblx0XHRzd2l0Y2ggKGRpbWVuc2lvbikge1xuXHRcdFx0Y2FzZSBPd2wuV2lkdGguSW5uZXI6XG5cdFx0XHRjYXNlIE93bC5XaWR0aC5PdXRlcjpcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3dpZHRoO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIHRoaXMuX3dpZHRoIC0gdGhpcy5zZXR0aW5ncy5zdGFnZVBhZGRpbmcgKiAyICsgdGhpcy5zZXR0aW5ncy5tYXJnaW47XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWZyZXNoZXMgdGhlIGNhcm91c2VsIHByaW1hcmlseSBmb3IgYWRhcHRpdmUgcHVycG9zZXMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuZW50ZXIoJ3JlZnJlc2hpbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3JlZnJlc2gnKTtcblxuXHRcdHRoaXMuc2V0dXAoKTtcblxuXHRcdHRoaXMub3B0aW9uc0xvZ2ljKCk7XG5cblx0XHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5yZWZyZXNoQ2xhc3MpO1xuXG5cdFx0dGhpcy51cGRhdGUoKTtcblxuXHRcdHRoaXMuJGVsZW1lbnQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJlZnJlc2hDbGFzcyk7XG5cblx0XHR0aGlzLmxlYXZlKCdyZWZyZXNoaW5nJyk7XG5cdFx0dGhpcy50cmlnZ2VyKCdyZWZyZXNoZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogQ2hlY2tzIHdpbmRvdyBgcmVzaXplYCBldmVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vblRocm90dGxlZFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0dGhpcy5yZXNpemVUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMuX2hhbmRsZXJzLm9uUmVzaXplLCB0aGlzLnNldHRpbmdzLnJlc3BvbnNpdmVSZWZyZXNoUmF0ZSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aW5kb3cgYHJlc2l6ZWAgZXZlbnQuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE93bC5wcm90b3R5cGUub25SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIXRoaXMuX2l0ZW1zLmxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLl93aWR0aCA9PT0gdGhpcy4kZWxlbWVudC53aWR0aCgpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0dGhpcy5lbnRlcigncmVzaXppbmcnKTtcblxuXHRcdGlmICh0aGlzLnRyaWdnZXIoJ3Jlc2l6ZScpLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG5cdFx0XHR0aGlzLmxlYXZlKCdyZXNpemluZycpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHRoaXMuaW52YWxpZGF0ZSgnd2lkdGgnKTtcblxuXHRcdHRoaXMucmVmcmVzaCgpO1xuXG5cdFx0dGhpcy5sZWF2ZSgncmVzaXppbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3Jlc2l6ZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGV2ZW50IGhhbmRsZXJzLlxuXHQgKiBAdG9kbyBDaGVjayBgbXNQb2ludGVyRW5hYmxlZGBcblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRIYW5kbGVycyA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICgkLnN1cHBvcnQudHJhbnNpdGlvbikge1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kICsgJy5vd2wuY29yZScsICQucHJveHkodGhpcy5vblRyYW5zaXRpb25FbmQsIHRoaXMpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlICE9PSBmYWxzZSkge1xuXHRcdFx0dGhpcy5vbih3aW5kb3csICdyZXNpemUnLCB0aGlzLl9oYW5kbGVycy5vblRocm90dGxlZFJlc2l6ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubW91c2VEcmFnKSB7XG5cdFx0XHR0aGlzLiRlbGVtZW50LmFkZENsYXNzKHRoaXMub3B0aW9ucy5kcmFnQ2xhc3MpO1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ21vdXNlZG93bi5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdTdGFydCwgdGhpcykpO1xuXHRcdFx0dGhpcy4kc3RhZ2Uub24oJ2RyYWdzdGFydC5vd2wuY29yZSBzZWxlY3RzdGFydC5vd2wuY29yZScsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2UgfSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MudG91Y2hEcmFnKXtcblx0XHRcdHRoaXMuJHN0YWdlLm9uKCd0b3VjaHN0YXJ0Lm93bC5jb3JlJywgJC5wcm94eSh0aGlzLm9uRHJhZ1N0YXJ0LCB0aGlzKSk7XG5cdFx0XHR0aGlzLiRzdGFnZS5vbigndG91Y2hjYW5jZWwub3dsLmNvcmUnLCAkLnByb3h5KHRoaXMub25EcmFnRW5kLCB0aGlzKSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIGB0b3VjaHN0YXJ0YCBhbmQgYG1vdXNlZG93bmAgZXZlbnRzLlxuXHQgKiBAdG9kbyBIb3Jpem9udGFsIHN3aXBlIHRocmVzaG9sZCBhcyBvcHRpb25cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IC0gVGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUub25EcmFnU3RhcnQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBzdGFnZSA9IG51bGw7XG5cblx0XHRpZiAoZXZlbnQud2hpY2ggPT09IDMpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoJC5zdXBwb3J0LnRyYW5zZm9ybSkge1xuXHRcdFx0c3RhZ2UgPSB0aGlzLiRzdGFnZS5jc3MoJ3RyYW5zZm9ybScpLnJlcGxhY2UoLy4qXFwofFxcKXwgL2csICcnKS5zcGxpdCgnLCcpO1xuXHRcdFx0c3RhZ2UgPSB7XG5cdFx0XHRcdHg6IHN0YWdlW3N0YWdlLmxlbmd0aCA9PT0gMTYgPyAxMiA6IDRdLFxuXHRcdFx0XHR5OiBzdGFnZVtzdGFnZS5sZW5ndGggPT09IDE2ID8gMTMgOiA1XVxuXHRcdFx0fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3RhZ2UgPSB0aGlzLiRzdGFnZS5wb3NpdGlvbigpO1xuXHRcdFx0c3RhZ2UgPSB7XG5cdFx0XHRcdHg6IHRoaXMuc2V0dGluZ3MucnRsID9cblx0XHRcdFx0XHRzdGFnZS5sZWZ0ICsgdGhpcy4kc3RhZ2Uud2lkdGgoKSAtIHRoaXMud2lkdGgoKSArIHRoaXMuc2V0dGluZ3MubWFyZ2luIDpcblx0XHRcdFx0XHRzdGFnZS5sZWZ0LFxuXHRcdFx0XHR5OiBzdGFnZS50b3Bcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXMoJ2FuaW1hdGluZycpKSB7XG5cdFx0XHQkLnN1cHBvcnQudHJhbnNmb3JtID8gdGhpcy5hbmltYXRlKHN0YWdlLngpIDogdGhpcy4kc3RhZ2Uuc3RvcCgpXG5cdFx0XHR0aGlzLmludmFsaWRhdGUoJ3Bvc2l0aW9uJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy4kZWxlbWVudC50b2dnbGVDbGFzcyh0aGlzLm9wdGlvbnMuZ3JhYkNsYXNzLCBldmVudC50eXBlID09PSAnbW91c2Vkb3duJyk7XG5cblx0XHR0aGlzLnNwZWVkKDApO1xuXG5cdFx0dGhpcy5fZHJhZy50aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cdFx0dGhpcy5fZHJhZy50YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XG5cdFx0dGhpcy5fZHJhZy5zdGFnZS5zdGFydCA9IHN0YWdlO1xuXHRcdHRoaXMuX2RyYWcuc3RhZ2UuY3VycmVudCA9IHN0YWdlO1xuXHRcdHRoaXMuX2RyYWcucG9pbnRlciA9IHRoaXMucG9pbnRlcihldmVudCk7XG5cblx0XHQkKGRvY3VtZW50KS5vbignbW91c2V1cC5vd2wuY29yZSB0b3VjaGVuZC5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdFbmQsIHRoaXMpKTtcblxuXHRcdCQoZG9jdW1lbnQpLm9uZSgnbW91c2Vtb3ZlLm93bC5jb3JlIHRvdWNobW92ZS5vd2wuY29yZScsICQucHJveHkoZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdHZhciBkZWx0YSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnBvaW50ZXIsIHRoaXMucG9pbnRlcihldmVudCkpO1xuXG5cdFx0XHQkKGRvY3VtZW50KS5vbignbW91c2Vtb3ZlLm93bC5jb3JlIHRvdWNobW92ZS5vd2wuY29yZScsICQucHJveHkodGhpcy5vbkRyYWdNb3ZlLCB0aGlzKSk7XG5cblx0XHRcdGlmIChNYXRoLmFicyhkZWx0YS54KSA8IE1hdGguYWJzKGRlbHRhLnkpICYmIHRoaXMuaXMoJ3ZhbGlkJykpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLmVudGVyKCdkcmFnZ2luZycpO1xuXHRcdFx0dGhpcy50cmlnZ2VyKCdkcmFnJyk7XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBIYW5kbGVzIHRoZSBgdG91Y2htb3ZlYCBhbmQgYG1vdXNlbW92ZWAgZXZlbnRzLlxuXHQgKiBAdG9kbyAjMjYxXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbkRyYWdNb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgbWluaW11bSA9IG51bGwsXG5cdFx0XHRtYXhpbXVtID0gbnVsbCxcblx0XHRcdHB1bGwgPSBudWxsLFxuXHRcdFx0ZGVsdGEgPSB0aGlzLmRpZmZlcmVuY2UodGhpcy5fZHJhZy5wb2ludGVyLCB0aGlzLnBvaW50ZXIoZXZlbnQpKSxcblx0XHRcdHN0YWdlID0gdGhpcy5kaWZmZXJlbmNlKHRoaXMuX2RyYWcuc3RhZ2Uuc3RhcnQsIGRlbHRhKTtcblxuXHRcdGlmICghdGhpcy5pcygnZHJhZ2dpbmcnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5sb29wKSB7XG5cdFx0XHRtaW5pbXVtID0gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1pbmltdW0oKSk7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5jb29yZGluYXRlcyh0aGlzLm1heGltdW0oKSArIDEpIC0gbWluaW11bTtcblx0XHRcdHN0YWdlLnggPSAoKChzdGFnZS54IC0gbWluaW11bSkgJSBtYXhpbXVtICsgbWF4aW11bSkgJSBtYXhpbXVtKSArIG1pbmltdW07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1pbmltdW0gPSB0aGlzLnNldHRpbmdzLnJ0bCA/IHRoaXMuY29vcmRpbmF0ZXModGhpcy5tYXhpbXVtKCkpIDogdGhpcy5jb29yZGluYXRlcyh0aGlzLm1pbmltdW0oKSk7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5zZXR0aW5ncy5ydGwgPyB0aGlzLmNvb3JkaW5hdGVzKHRoaXMubWluaW11bSgpKSA6IHRoaXMuY29vcmRpbmF0ZXModGhpcy5tYXhpbXVtKCkpO1xuXHRcdFx0cHVsbCA9IHRoaXMuc2V0dGluZ3MucHVsbERyYWcgPyAtMSAqIGRlbHRhLnggLyA1IDogMDtcblx0XHRcdHN0YWdlLnggPSBNYXRoLm1heChNYXRoLm1pbihzdGFnZS54LCBtaW5pbXVtICsgcHVsbCksIG1heGltdW0gKyBwdWxsKTtcblx0XHR9XG5cblx0XHR0aGlzLl9kcmFnLnN0YWdlLmN1cnJlbnQgPSBzdGFnZTtcblxuXHRcdHRoaXMuYW5pbWF0ZShzdGFnZS54KTtcblx0fTtcblxuXHQvKipcblx0ICogSGFuZGxlcyB0aGUgYHRvdWNoZW5kYCBhbmQgYG1vdXNldXBgIGV2ZW50cy5cblx0ICogQHRvZG8gIzI2MVxuXHQgKiBAdG9kbyBUaHJlc2hvbGQgZm9yIGNsaWNrIGV2ZW50XG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vbkRyYWdFbmQgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdHZhciBkZWx0YSA9IHRoaXMuZGlmZmVyZW5jZSh0aGlzLl9kcmFnLnBvaW50ZXIsIHRoaXMucG9pbnRlcihldmVudCkpLFxuXHRcdFx0c3RhZ2UgPSB0aGlzLl9kcmFnLnN0YWdlLmN1cnJlbnQsXG5cdFx0XHRkaXJlY3Rpb24gPSBkZWx0YS54ID4gMCBeIHRoaXMuc2V0dGluZ3MucnRsID8gJ2xlZnQnIDogJ3JpZ2h0JztcblxuXHRcdCQoZG9jdW1lbnQpLm9mZignLm93bC5jb3JlJyk7XG5cblx0XHR0aGlzLiRlbGVtZW50LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5ncmFiQ2xhc3MpO1xuXG5cdFx0aWYgKGRlbHRhLnggIT09IDAgJiYgdGhpcy5pcygnZHJhZ2dpbmcnKSB8fCAhdGhpcy5pcygndmFsaWQnKSkge1xuXHRcdFx0dGhpcy5zcGVlZCh0aGlzLnNldHRpbmdzLmRyYWdFbmRTcGVlZCB8fCB0aGlzLnNldHRpbmdzLnNtYXJ0U3BlZWQpO1xuXHRcdFx0dGhpcy5jdXJyZW50KHRoaXMuY2xvc2VzdChzdGFnZS54LCBkZWx0YS54ICE9PSAwID8gZGlyZWN0aW9uIDogdGhpcy5fZHJhZy5kaXJlY3Rpb24pKTtcblx0XHRcdHRoaXMuaW52YWxpZGF0ZSgncG9zaXRpb24nKTtcblx0XHRcdHRoaXMudXBkYXRlKCk7XG5cblx0XHRcdHRoaXMuX2RyYWcuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoZGVsdGEueCkgPiAzIHx8IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5fZHJhZy50aW1lID4gMzAwKSB7XG5cdFx0XHRcdHRoaXMuX2RyYWcudGFyZ2V0Lm9uZSgnY2xpY2sub3dsLmNvcmUnLCBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIXRoaXMuaXMoJ2RyYWdnaW5nJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLmxlYXZlKCdkcmFnZ2luZycpO1xuXHRcdHRoaXMudHJpZ2dlcignZHJhZ2dlZCcpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjbG9zZXN0IGl0ZW0gZm9yIGEgY29vcmRpbmF0ZS5cblx0ICogQHRvZG8gU2V0dGluZyBgZnJlZURyYWdgIG1ha2VzIGBjbG9zZXN0YCBub3QgcmV1c2FibGUuIFNlZSAjMTY1LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb29yZGluYXRlIC0gVGhlIGNvb3JkaW5hdGUgaW4gcGl4ZWwuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkaXJlY3Rpb24gLSBUaGUgZGlyZWN0aW9uIHRvIGNoZWNrIGZvciB0aGUgY2xvc2VzdCBpdGVtLiBFdGhlciBgbGVmdGAgb3IgYHJpZ2h0YC5cblx0ICogQHJldHVybiB7TnVtYmVyfSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY2xvc2VzdCBpdGVtLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24oY29vcmRpbmF0ZSwgZGlyZWN0aW9uKSB7XG5cdFx0dmFyIHBvc2l0aW9uID0gLTEsXG5cdFx0XHRwdWxsID0gMzAsXG5cdFx0XHR3aWR0aCA9IHRoaXMud2lkdGgoKSxcblx0XHRcdGNvb3JkaW5hdGVzID0gdGhpcy5jb29yZGluYXRlcygpO1xuXG5cdFx0aWYgKCF0aGlzLnNldHRpbmdzLmZyZWVEcmFnKSB7XG5cdFx0XHQvLyBjaGVjayBjbG9zZXN0IGl0ZW1cblx0XHRcdCQuZWFjaChjb29yZGluYXRlcywgJC5wcm94eShmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcblx0XHRcdFx0Ly8gb24gYSBsZWZ0IHB1bGwsIGNoZWNrIG9uIGN1cnJlbnQgaW5kZXhcblx0XHRcdFx0aWYgKGRpcmVjdGlvbiA9PT0gJ2xlZnQnICYmIGNvb3JkaW5hdGUgPiB2YWx1ZSAtIHB1bGwgJiYgY29vcmRpbmF0ZSA8IHZhbHVlICsgcHVsbCkge1xuXHRcdFx0XHRcdHBvc2l0aW9uID0gaW5kZXg7XG5cdFx0XHRcdC8vIG9uIGEgcmlnaHQgcHVsbCwgY2hlY2sgb24gcHJldmlvdXMgaW5kZXhcblx0XHRcdFx0Ly8gdG8gZG8gc28sIHN1YnRyYWN0IHdpZHRoIGZyb20gdmFsdWUgYW5kIHNldCBwb3NpdGlvbiA9IGluZGV4ICsgMVxuXHRcdFx0XHR9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3JpZ2h0JyAmJiBjb29yZGluYXRlID4gdmFsdWUgLSB3aWR0aCAtIHB1bGwgJiYgY29vcmRpbmF0ZSA8IHZhbHVlIC0gd2lkdGggKyBwdWxsKSB7XG5cdFx0XHRcdFx0cG9zaXRpb24gPSBpbmRleCArIDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5vcChjb29yZGluYXRlLCAnPCcsIHZhbHVlKVxuXHRcdFx0XHRcdCYmIHRoaXMub3AoY29vcmRpbmF0ZSwgJz4nLCBjb29yZGluYXRlc1tpbmRleCArIDFdIHx8IHZhbHVlIC0gd2lkdGgpKSB7XG5cdFx0XHRcdFx0cG9zaXRpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IGluZGV4ICsgMSA6IGluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBwb3NpdGlvbiA9PT0gLTE7XG5cdFx0XHR9LCB0aGlzKSk7XG5cdFx0fVxuXG5cdFx0aWYgKCF0aGlzLnNldHRpbmdzLmxvb3ApIHtcblx0XHRcdC8vIG5vbiBsb29wIGJvdW5kcmllc1xuXHRcdFx0aWYgKHRoaXMub3AoY29vcmRpbmF0ZSwgJz4nLCBjb29yZGluYXRlc1t0aGlzLm1pbmltdW0oKV0pKSB7XG5cdFx0XHRcdHBvc2l0aW9uID0gY29vcmRpbmF0ZSA9IHRoaXMubWluaW11bSgpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLm9wKGNvb3JkaW5hdGUsICc8JywgY29vcmRpbmF0ZXNbdGhpcy5tYXhpbXVtKCldKSkge1xuXHRcdFx0XHRwb3NpdGlvbiA9IGNvb3JkaW5hdGUgPSB0aGlzLm1heGltdW0oKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcG9zaXRpb247XG5cdH07XG5cblx0LyoqXG5cdCAqIEFuaW1hdGVzIHRoZSBzdGFnZS5cblx0ICogQHRvZG8gIzI3MFxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBjb29yZGluYXRlIC0gVGhlIGNvb3JkaW5hdGUgaW4gcGl4ZWxzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5hbmltYXRlID0gZnVuY3Rpb24oY29vcmRpbmF0ZSkge1xuXHRcdHZhciBhbmltYXRlID0gdGhpcy5zcGVlZCgpID4gMDtcblxuXHRcdHRoaXMuaXMoJ2FuaW1hdGluZycpICYmIHRoaXMub25UcmFuc2l0aW9uRW5kKCk7XG5cblx0XHRpZiAoYW5pbWF0ZSkge1xuXHRcdFx0dGhpcy5lbnRlcignYW5pbWF0aW5nJyk7XG5cdFx0XHR0aGlzLnRyaWdnZXIoJ3RyYW5zbGF0ZScpO1xuXHRcdH1cblxuXHRcdGlmICgkLnN1cHBvcnQudHJhbnNmb3JtM2QgJiYgJC5zdXBwb3J0LnRyYW5zaXRpb24pIHtcblx0XHRcdHRoaXMuJHN0YWdlLmNzcyh7XG5cdFx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKCcgKyBjb29yZGluYXRlICsgJ3B4LDBweCwwcHgpJyxcblx0XHRcdFx0dHJhbnNpdGlvbjogKHRoaXMuc3BlZWQoKSAvIDEwMDApICsgJ3MnXG5cdFx0XHR9KTtcblx0XHR9IGVsc2UgaWYgKGFuaW1hdGUpIHtcblx0XHRcdHRoaXMuJHN0YWdlLmFuaW1hdGUoe1xuXHRcdFx0XHRsZWZ0OiBjb29yZGluYXRlICsgJ3B4J1xuXHRcdFx0fSwgdGhpcy5zcGVlZCgpLCB0aGlzLnNldHRpbmdzLmZhbGxiYWNrRWFzaW5nLCAkLnByb3h5KHRoaXMub25UcmFuc2l0aW9uRW5kLCB0aGlzKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuJHN0YWdlLmNzcyh7XG5cdFx0XHRcdGxlZnQ6IGNvb3JkaW5hdGUgKyAncHgnXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoZSBjYXJvdXNlbCBpcyBpbiBhIHNwZWNpZmljIHN0YXRlIG9yIG5vdC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0YXRlIC0gVGhlIHN0YXRlIHRvIGNoZWNrLlxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn0gLSBUaGUgZmxhZyB3aGljaCBpbmRpY2F0ZXMgaWYgdGhlIGNhcm91c2VsIGlzIGJ1c3kuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmlzID0gZnVuY3Rpb24oc3RhdGUpIHtcblx0XHRyZXR1cm4gdGhpcy5fc3RhdGVzLmN1cnJlbnRbc3RhdGVdICYmIHRoaXMuX3N0YXRlcy5jdXJyZW50W3N0YXRlXSA+IDA7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgbmV3IGFic29sdXRlIHBvc2l0aW9uIG9yIG5vdGhpbmcgdG8gbGVhdmUgaXQgdW5jaGFuZ2VkLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBhYnNvbHV0ZSBwb3NpdGlvbiBvZiB0aGUgY3VycmVudCBpdGVtLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRwb3NpdGlvbiA9IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uKTtcblxuXHRcdGlmICh0aGlzLl9jdXJyZW50ICE9PSBwb3NpdGlvbikge1xuXHRcdFx0dmFyIGV2ZW50ID0gdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdwb3NpdGlvbicsIHZhbHVlOiBwb3NpdGlvbiB9IH0pO1xuXG5cdFx0XHRpZiAoZXZlbnQuZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUoZXZlbnQuZGF0YSk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2N1cnJlbnQgPSBwb3NpdGlvbjtcblxuXHRcdFx0dGhpcy5pbnZhbGlkYXRlKCdwb3NpdGlvbicpO1xuXG5cdFx0XHR0aGlzLnRyaWdnZXIoJ2NoYW5nZWQnLCB7IHByb3BlcnR5OiB7IG5hbWU6ICdwb3NpdGlvbicsIHZhbHVlOiB0aGlzLl9jdXJyZW50IH0gfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIEludmFsaWRhdGVzIHRoZSBnaXZlbiBwYXJ0IG9mIHRoZSB1cGRhdGUgcm91dGluZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IFtwYXJ0XSAtIFRoZSBwYXJ0IHRvIGludmFsaWRhdGUuXG5cdCAqIEByZXR1cm5zIHtBcnJheS48U3RyaW5nPn0gLSBUaGUgaW52YWxpZGF0ZWQgcGFydHMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmludmFsaWRhdGUgPSBmdW5jdGlvbihwYXJ0KSB7XG5cdFx0aWYgKCQudHlwZShwYXJ0KSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHRoaXMuX2ludmFsaWRhdGVkW3BhcnRdID0gdHJ1ZTtcblx0XHRcdHRoaXMuaXMoJ3ZhbGlkJykgJiYgdGhpcy5sZWF2ZSgndmFsaWQnKTtcblx0XHR9XG5cdFx0cmV0dXJuICQubWFwKHRoaXMuX2ludmFsaWRhdGVkLCBmdW5jdGlvbih2LCBpKSB7IHJldHVybiBpIH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZXNldHMgdGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBuZXcgaXRlbS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24pO1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9zcGVlZCA9IDA7XG5cdFx0dGhpcy5fY3VycmVudCA9IHBvc2l0aW9uO1xuXG5cdFx0dGhpcy5zdXBwcmVzcyhbICd0cmFuc2xhdGUnLCAndHJhbnNsYXRlZCcgXSk7XG5cblx0XHR0aGlzLmFuaW1hdGUodGhpcy5jb29yZGluYXRlcyhwb3NpdGlvbikpO1xuXG5cdFx0dGhpcy5yZWxlYXNlKFsgJ3RyYW5zbGF0ZScsICd0cmFuc2xhdGVkJyBdKTtcblx0fTtcblxuXHQvKipcblx0ICogTm9ybWFsaXplcyBhbiBhYnNvbHV0ZSBvciBhIHJlbGF0aXZlIHBvc2l0aW9uIG9mIGFuIGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIG9yIHJlbGF0aXZlIHBvc2l0aW9uIHRvIG5vcm1hbGl6ZS5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0aGUgZ2l2ZW4gcG9zaXRpb24gaXMgcmVsYXRpdmUgb3Igbm90LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSAtIFRoZSBub3JtYWxpemVkIHBvc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbihwb3NpdGlvbiwgcmVsYXRpdmUpIHtcblx0XHR2YXIgbiA9IHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdG0gPSByZWxhdGl2ZSA/IDAgOiB0aGlzLl9jbG9uZXMubGVuZ3RoO1xuXG5cdFx0aWYgKCF0aGlzLmlzTnVtZXJpYyhwb3NpdGlvbikgfHwgbiA8IDEpIHtcblx0XHRcdHBvc2l0aW9uID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSBpZiAocG9zaXRpb24gPCAwIHx8IHBvc2l0aW9uID49IG4gKyBtKSB7XG5cdFx0XHRwb3NpdGlvbiA9ICgocG9zaXRpb24gLSBtIC8gMikgJSBuICsgbikgJSBuICsgbSAvIDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvc2l0aW9uO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhbiBhYnNvbHV0ZSBwb3NpdGlvbiBvZiBhbiBpdGVtIGludG8gYSByZWxhdGl2ZSBvbmUuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIHRvIGNvbnZlcnQuXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9IC0gVGhlIGNvbnZlcnRlZCBwb3NpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVsYXRpdmUgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHBvc2l0aW9uIC09IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyO1xuXHRcdHJldHVybiB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIG1heGltdW0gcG9zaXRpb24gZm9yIHRoZSBjdXJyZW50IGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtCb29sZWFufSBbcmVsYXRpdmU9ZmFsc2VdIC0gV2hldGhlciB0byByZXR1cm4gYW4gYWJzb2x1dGUgcG9zaXRpb24gb3IgYSByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICogQHJldHVybnMge051bWJlcn1cblx0ICovXG5cdE93bC5wcm90b3R5cGUubWF4aW11bSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG5cdFx0dmFyIHNldHRpbmdzID0gdGhpcy5zZXR0aW5ncyxcblx0XHRcdG1heGltdW0gPSB0aGlzLl9jb29yZGluYXRlcy5sZW5ndGgsXG5cdFx0XHRpdGVyYXRvcixcblx0XHRcdHJlY2lwcm9jYWxJdGVtc1dpZHRoLFxuXHRcdFx0ZWxlbWVudFdpZHRoO1xuXG5cdFx0aWYgKHNldHRpbmdzLmxvb3ApIHtcblx0XHRcdG1heGltdW0gPSB0aGlzLl9jbG9uZXMubGVuZ3RoIC8gMiArIHRoaXMuX2l0ZW1zLmxlbmd0aCAtIDE7XG5cdFx0fSBlbHNlIGlmIChzZXR0aW5ncy5hdXRvV2lkdGggfHwgc2V0dGluZ3MubWVyZ2UpIHtcblx0XHRcdGl0ZXJhdG9yID0gdGhpcy5faXRlbXMubGVuZ3RoO1xuXHRcdFx0cmVjaXByb2NhbEl0ZW1zV2lkdGggPSB0aGlzLl9pdGVtc1stLWl0ZXJhdG9yXS53aWR0aCgpO1xuXHRcdFx0ZWxlbWVudFdpZHRoID0gdGhpcy4kZWxlbWVudC53aWR0aCgpO1xuXHRcdFx0d2hpbGUgKGl0ZXJhdG9yLS0pIHtcblx0XHRcdFx0cmVjaXByb2NhbEl0ZW1zV2lkdGggKz0gdGhpcy5faXRlbXNbaXRlcmF0b3JdLndpZHRoKCkgKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcblx0XHRcdFx0aWYgKHJlY2lwcm9jYWxJdGVtc1dpZHRoID4gZWxlbWVudFdpZHRoKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1heGltdW0gPSBpdGVyYXRvciArIDE7XG5cdFx0fSBlbHNlIGlmIChzZXR0aW5ncy5jZW50ZXIpIHtcblx0XHRcdG1heGltdW0gPSB0aGlzLl9pdGVtcy5sZW5ndGggLSAxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXhpbXVtID0gdGhpcy5faXRlbXMubGVuZ3RoIC0gc2V0dGluZ3MuaXRlbXM7XG5cdFx0fVxuXG5cdFx0aWYgKHJlbGF0aXZlKSB7XG5cdFx0XHRtYXhpbXVtIC09IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyO1xuXHRcdH1cblxuXHRcdHJldHVybiBNYXRoLm1heChtYXhpbXVtLCAwKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB0aGUgbWluaW11bSBwb3NpdGlvbiBmb3IgdGhlIGN1cnJlbnQgaXRlbS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IFtyZWxhdGl2ZT1mYWxzZV0gLSBXaGV0aGVyIHRvIHJldHVybiBhbiBhYnNvbHV0ZSBwb3NpdGlvbiBvciBhIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfVxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5taW5pbXVtID0gZnVuY3Rpb24ocmVsYXRpdmUpIHtcblx0XHRyZXR1cm4gcmVsYXRpdmUgPyAwIDogdGhpcy5fY2xvbmVzLmxlbmd0aCAvIDI7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgYW4gaXRlbSBhdCB0aGUgc3BlY2lmaWVkIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcmV0dXJuIHtqUXVlcnl8QXJyYXkuPGpRdWVyeT59IC0gVGhlIGl0ZW0gYXQgdGhlIGdpdmVuIHBvc2l0aW9uIG9yIGFsbCBpdGVtcyBpZiBubyBwb3NpdGlvbiB3YXMgZ2l2ZW4uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLml0ZW1zID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuX2l0ZW1zLnNsaWNlKCk7XG5cdFx0fVxuXG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cdFx0cmV0dXJuIHRoaXMuX2l0ZW1zW3Bvc2l0aW9uXTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyBhbiBpdGVtIGF0IHRoZSBzcGVjaWZpZWQgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtwb3NpdGlvbl0gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0uXG5cdCAqIEByZXR1cm4ge2pRdWVyeXxBcnJheS48alF1ZXJ5Pn0gLSBUaGUgaXRlbSBhdCB0aGUgZ2l2ZW4gcG9zaXRpb24gb3IgYWxsIGl0ZW1zIGlmIG5vIHBvc2l0aW9uIHdhcyBnaXZlbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUubWVyZ2VycyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLl9tZXJnZXJzLnNsaWNlKCk7XG5cdFx0fVxuXG5cdFx0cG9zaXRpb24gPSB0aGlzLm5vcm1hbGl6ZShwb3NpdGlvbiwgdHJ1ZSk7XG5cdFx0cmV0dXJuIHRoaXMuX21lcmdlcnNbcG9zaXRpb25dO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbnMgb2YgY2xvbmVzIGZvciBhbiBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcmV0dXJucyB7QXJyYXkuPE51bWJlcj59IC0gVGhlIGFic29sdXRlIHBvc2l0aW9ucyBvZiBjbG9uZXMgZm9yIHRoZSBpdGVtIG9yIGFsbCBpZiBubyBwb3NpdGlvbiB3YXMgZ2l2ZW4uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmNsb25lcyA9IGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG5cdFx0dmFyIG9kZCA9IHRoaXMuX2Nsb25lcy5sZW5ndGggLyAyLFxuXHRcdFx0ZXZlbiA9IG9kZCArIHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdG1hcCA9IGZ1bmN0aW9uKGluZGV4KSB7IHJldHVybiBpbmRleCAlIDIgPT09IDAgPyBldmVuICsgaW5kZXggLyAyIDogb2RkIC0gKGluZGV4ICsgMSkgLyAyIH07XG5cblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICQubWFwKHRoaXMuX2Nsb25lcywgZnVuY3Rpb24odiwgaSkgeyByZXR1cm4gbWFwKGkpIH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiAkLm1hcCh0aGlzLl9jbG9uZXMsIGZ1bmN0aW9uKHYsIGkpIHsgcmV0dXJuIHYgPT09IHBvc2l0aW9uID8gbWFwKGkpIDogbnVsbCB9KTtcblx0fTtcblxuXHQvKipcblx0ICogU2V0cyB0aGUgY3VycmVudCBhbmltYXRpb24gc3BlZWQuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgYW5pbWF0aW9uIHNwZWVkIGluIG1pbGxpc2Vjb25kcyBvciBub3RoaW5nIHRvIGxlYXZlIGl0IHVuY2hhbmdlZC5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgY3VycmVudCBhbmltYXRpb24gc3BlZWQgaW4gbWlsbGlzZWNvbmRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5zcGVlZCA9IGZ1bmN0aW9uKHNwZWVkKSB7XG5cdFx0aWYgKHNwZWVkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHRoaXMuX3NwZWVkID0gc3BlZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuX3NwZWVkO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBjb29yZGluYXRlIG9mIGFuIGl0ZW0uXG5cdCAqIEB0b2RvIFRoZSBuYW1lIG9mIHRoaXMgbWV0aG9kIGlzIG1pc3NsZWFuZGluZy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gd2l0aGluIGBtaW5pbXVtKClgIGFuZCBgbWF4aW11bSgpYC5cblx0ICogQHJldHVybnMge051bWJlcnxBcnJheS48TnVtYmVyPn0gLSBUaGUgY29vcmRpbmF0ZSBvZiB0aGUgaXRlbSBpbiBwaXhlbCBvciBhbGwgY29vcmRpbmF0ZXMuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmNvb3JkaW5hdGVzID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHR2YXIgbXVsdGlwbGllciA9IDEsXG5cdFx0XHRuZXdQb3NpdGlvbiA9IHBvc2l0aW9uIC0gMSxcblx0XHRcdGNvb3JkaW5hdGU7XG5cblx0XHRpZiAocG9zaXRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICQubWFwKHRoaXMuX2Nvb3JkaW5hdGVzLCAkLnByb3h5KGZ1bmN0aW9uKGNvb3JkaW5hdGUsIGluZGV4KSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvb3JkaW5hdGVzKGluZGV4KTtcblx0XHRcdH0sIHRoaXMpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZXR0aW5ncy5jZW50ZXIpIHtcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLnJ0bCkge1xuXHRcdFx0XHRtdWx0aXBsaWVyID0gLTE7XG5cdFx0XHRcdG5ld1Bvc2l0aW9uID0gcG9zaXRpb24gKyAxO1xuXHRcdFx0fVxuXG5cdFx0XHRjb29yZGluYXRlID0gdGhpcy5fY29vcmRpbmF0ZXNbcG9zaXRpb25dO1xuXHRcdFx0Y29vcmRpbmF0ZSArPSAodGhpcy53aWR0aCgpIC0gY29vcmRpbmF0ZSArICh0aGlzLl9jb29yZGluYXRlc1tuZXdQb3NpdGlvbl0gfHwgMCkpIC8gMiAqIG11bHRpcGxpZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvb3JkaW5hdGUgPSB0aGlzLl9jb29yZGluYXRlc1tuZXdQb3NpdGlvbl0gfHwgMDtcblx0XHR9XG5cblx0XHRjb29yZGluYXRlID0gTWF0aC5jZWlsKGNvb3JkaW5hdGUpO1xuXG5cdFx0cmV0dXJuIGNvb3JkaW5hdGU7XG5cdH07XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZXMgdGhlIHNwZWVkIGZvciBhIHRyYW5zbGF0aW9uLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBmcm9tIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBzdGFydCBpdGVtLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gdG8gLSBUaGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIHRhcmdldCBpdGVtLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW2ZhY3Rvcj11bmRlZmluZWRdIC0gVGhlIHRpbWUgZmFjdG9yIGluIG1pbGxpc2Vjb25kcy5cblx0ICogQHJldHVybnMge051bWJlcn0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2xhdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbihmcm9tLCB0bywgZmFjdG9yKSB7XG5cdFx0aWYgKGZhY3RvciA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KE1hdGguYWJzKHRvIC0gZnJvbSksIDEpLCA2KSAqIE1hdGguYWJzKChmYWN0b3IgfHwgdGhpcy5zZXR0aW5ncy5zbWFydFNwZWVkKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgc3BlY2lmaWVkIGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSB0aW1lIGluIG1pbGxpc2Vjb25kcyBmb3IgdGhlIHRyYW5zaXRpb24uXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnRvID0gZnVuY3Rpb24ocG9zaXRpb24sIHNwZWVkKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLmN1cnJlbnQoKSxcblx0XHRcdHJldmVydCA9IG51bGwsXG5cdFx0XHRkaXN0YW5jZSA9IHBvc2l0aW9uIC0gdGhpcy5yZWxhdGl2ZShjdXJyZW50KSxcblx0XHRcdGRpcmVjdGlvbiA9IChkaXN0YW5jZSA+IDApIC0gKGRpc3RhbmNlIDwgMCksXG5cdFx0XHRpdGVtcyA9IHRoaXMuX2l0ZW1zLmxlbmd0aCxcblx0XHRcdG1pbmltdW0gPSB0aGlzLm1pbmltdW0oKSxcblx0XHRcdG1heGltdW0gPSB0aGlzLm1heGltdW0oKTtcblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLmxvb3ApIHtcblx0XHRcdGlmICghdGhpcy5zZXR0aW5ncy5yZXdpbmQgJiYgTWF0aC5hYnMoZGlzdGFuY2UpID4gaXRlbXMgLyAyKSB7XG5cdFx0XHRcdGRpc3RhbmNlICs9IGRpcmVjdGlvbiAqIC0xICogaXRlbXM7XG5cdFx0XHR9XG5cblx0XHRcdHBvc2l0aW9uID0gY3VycmVudCArIGRpc3RhbmNlO1xuXHRcdFx0cmV2ZXJ0ID0gKChwb3NpdGlvbiAtIG1pbmltdW0pICUgaXRlbXMgKyBpdGVtcykgJSBpdGVtcyArIG1pbmltdW07XG5cblx0XHRcdGlmIChyZXZlcnQgIT09IHBvc2l0aW9uICYmIHJldmVydCAtIGRpc3RhbmNlIDw9IG1heGltdW0gJiYgcmV2ZXJ0IC0gZGlzdGFuY2UgPiAwKSB7XG5cdFx0XHRcdGN1cnJlbnQgPSByZXZlcnQgLSBkaXN0YW5jZTtcblx0XHRcdFx0cG9zaXRpb24gPSByZXZlcnQ7XG5cdFx0XHRcdHRoaXMucmVzZXQoY3VycmVudCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnJld2luZCkge1xuXHRcdFx0bWF4aW11bSArPSAxO1xuXHRcdFx0cG9zaXRpb24gPSAocG9zaXRpb24gJSBtYXhpbXVtICsgbWF4aW11bSkgJSBtYXhpbXVtO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwb3NpdGlvbiA9IE1hdGgubWF4KG1pbmltdW0sIE1hdGgubWluKG1heGltdW0sIHBvc2l0aW9uKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5zcGVlZCh0aGlzLmR1cmF0aW9uKGN1cnJlbnQsIHBvc2l0aW9uLCBzcGVlZCkpO1xuXHRcdHRoaXMuY3VycmVudChwb3NpdGlvbik7XG5cblx0XHRpZiAodGhpcy4kZWxlbWVudC5pcygnOnZpc2libGUnKSkge1xuXHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgbmV4dCBpdGVtLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE93bC5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHNwZWVkKSB7XG5cdFx0c3BlZWQgPSBzcGVlZCB8fCBmYWxzZTtcblx0XHR0aGlzLnRvKHRoaXMucmVsYXRpdmUodGhpcy5jdXJyZW50KCkpICsgMSwgc3BlZWQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIHByZXZpb3VzIGl0ZW0uXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgdGltZSBpbiBtaWxsaXNlY29uZHMgZm9yIHRoZSB0cmFuc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24oc3BlZWQpIHtcblx0XHRzcGVlZCA9IHNwZWVkIHx8IGZhbHNlO1xuXHRcdHRoaXMudG8odGhpcy5yZWxhdGl2ZSh0aGlzLmN1cnJlbnQoKSkgLSAxLCBzcGVlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEhhbmRsZXMgdGhlIGVuZCBvZiBhbiBhbmltYXRpb24uXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vblRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbihldmVudCkge1xuXG5cdFx0Ly8gaWYgY3NzMiBhbmltYXRpb24gdGhlbiBldmVudCBvYmplY3QgaXMgdW5kZWZpbmVkXG5cdFx0aWYgKGV2ZW50ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0XHQvLyBDYXRjaCBvbmx5IG93bC1zdGFnZSB0cmFuc2l0aW9uRW5kIGV2ZW50XG5cdFx0XHRpZiAoKGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50IHx8IGV2ZW50Lm9yaWdpbmFsVGFyZ2V0KSAhPT0gdGhpcy4kc3RhZ2UuZ2V0KDApKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzLmxlYXZlKCdhbmltYXRpbmcnKTtcblx0XHR0aGlzLnRyaWdnZXIoJ3RyYW5zbGF0ZWQnKTtcblx0fTtcblxuXHQvKipcblx0ICogR2V0cyB2aWV3cG9ydCB3aWR0aC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcmV0dXJuIHtOdW1iZXJ9IC0gVGhlIHdpZHRoIGluIHBpeGVsLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS52aWV3cG9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciB3aWR0aDtcblx0XHRpZiAodGhpcy5vcHRpb25zLnJlc3BvbnNpdmVCYXNlRWxlbWVudCAhPT0gd2luZG93KSB7XG5cdFx0XHR3aWR0aCA9ICQodGhpcy5vcHRpb25zLnJlc3BvbnNpdmVCYXNlRWxlbWVudCkud2lkdGgoKTtcblx0XHR9IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoKSB7XG5cdFx0XHR3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdH0gZWxzZSBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkge1xuXHRcdFx0d2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93ICdDYW4gbm90IGRldGVjdCB2aWV3cG9ydCB3aWR0aC4nO1xuXHRcdH1cblx0XHRyZXR1cm4gd2lkdGg7XG5cdH07XG5cblx0LyoqXG5cdCAqIFJlcGxhY2VzIHRoZSBjdXJyZW50IGNvbnRlbnQuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl8U3RyaW5nfSBjb250ZW50IC0gVGhlIG5ldyBjb250ZW50LlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oY29udGVudCkge1xuXHRcdHRoaXMuJHN0YWdlLmVtcHR5KCk7XG5cdFx0dGhpcy5faXRlbXMgPSBbXTtcblxuXHRcdGlmIChjb250ZW50KSB7XG5cdFx0XHRjb250ZW50ID0gKGNvbnRlbnQgaW5zdGFuY2VvZiBqUXVlcnkpID8gY29udGVudCA6ICQoY29udGVudCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yKSB7XG5cdFx0XHRjb250ZW50ID0gY29udGVudC5maW5kKCcuJyArIHRoaXMuc2V0dGluZ3MubmVzdGVkSXRlbVNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRjb250ZW50LmZpbHRlcihmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLm5vZGVUeXBlID09PSAxO1xuXHRcdH0pLmVhY2goJC5wcm94eShmdW5jdGlvbihpbmRleCwgaXRlbSkge1xuXHRcdFx0aXRlbSA9IHRoaXMucHJlcGFyZShpdGVtKTtcblx0XHRcdHRoaXMuJHN0YWdlLmFwcGVuZChpdGVtKTtcblx0XHRcdHRoaXMuX2l0ZW1zLnB1c2goaXRlbSk7XG5cdFx0XHR0aGlzLl9tZXJnZXJzLnB1c2goaXRlbS5maW5kKCdbZGF0YS1tZXJnZV0nKS5hZGRCYWNrKCdbZGF0YS1tZXJnZV0nKS5hdHRyKCdkYXRhLW1lcmdlJykgKiAxIHx8IDEpO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdHRoaXMucmVzZXQodGhpcy5pc051bWVyaWModGhpcy5zZXR0aW5ncy5zdGFydFBvc2l0aW9uKSA/IHRoaXMuc2V0dGluZ3Muc3RhcnRQb3NpdGlvbiA6IDApO1xuXG5cdFx0dGhpcy5pbnZhbGlkYXRlKCdpdGVtcycpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBBZGRzIGFuIGl0ZW0uXG5cdCAqIEB0b2RvIFVzZSBgaXRlbWAgaW5zdGVhZCBvZiBgY29udGVudGAgZm9yIHRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudHxqUXVlcnl8U3RyaW5nfSBjb250ZW50IC0gVGhlIGl0ZW0gY29udGVudCB0byBhZGQuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbcG9zaXRpb25dIC0gVGhlIHJlbGF0aXZlIHBvc2l0aW9uIGF0IHdoaWNoIHRvIGluc2VydCB0aGUgaXRlbSBvdGhlcndpc2UgdGhlIGl0ZW0gd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihjb250ZW50LCBwb3NpdGlvbikge1xuXHRcdHZhciBjdXJyZW50ID0gdGhpcy5yZWxhdGl2ZSh0aGlzLl9jdXJyZW50KTtcblxuXHRcdHBvc2l0aW9uID0gcG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IHRoaXMuX2l0ZW1zLmxlbmd0aCA6IHRoaXMubm9ybWFsaXplKHBvc2l0aW9uLCB0cnVlKTtcblx0XHRjb250ZW50ID0gY29udGVudCBpbnN0YW5jZW9mIGpRdWVyeSA/IGNvbnRlbnQgOiAkKGNvbnRlbnQpO1xuXG5cdFx0dGhpcy50cmlnZ2VyKCdhZGQnLCB7IGNvbnRlbnQ6IGNvbnRlbnQsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblxuXHRcdGNvbnRlbnQgPSB0aGlzLnByZXBhcmUoY29udGVudCk7XG5cblx0XHRpZiAodGhpcy5faXRlbXMubGVuZ3RoID09PSAwIHx8IHBvc2l0aW9uID09PSB0aGlzLl9pdGVtcy5sZW5ndGgpIHtcblx0XHRcdHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMCAmJiB0aGlzLiRzdGFnZS5hcHBlbmQoY29udGVudCk7XG5cdFx0XHR0aGlzLl9pdGVtcy5sZW5ndGggIT09IDAgJiYgdGhpcy5faXRlbXNbcG9zaXRpb24gLSAxXS5hZnRlcihjb250ZW50KTtcblx0XHRcdHRoaXMuX2l0ZW1zLnB1c2goY29udGVudCk7XG5cdFx0XHR0aGlzLl9tZXJnZXJzLnB1c2goY29udGVudC5maW5kKCdbZGF0YS1tZXJnZV0nKS5hZGRCYWNrKCdbZGF0YS1tZXJnZV0nKS5hdHRyKCdkYXRhLW1lcmdlJykgKiAxIHx8IDEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLl9pdGVtc1twb3NpdGlvbl0uYmVmb3JlKGNvbnRlbnQpO1xuXHRcdFx0dGhpcy5faXRlbXMuc3BsaWNlKHBvc2l0aW9uLCAwLCBjb250ZW50KTtcblx0XHRcdHRoaXMuX21lcmdlcnMuc3BsaWNlKHBvc2l0aW9uLCAwLCBjb250ZW50LmZpbmQoJ1tkYXRhLW1lcmdlXScpLmFkZEJhY2soJ1tkYXRhLW1lcmdlXScpLmF0dHIoJ2RhdGEtbWVyZ2UnKSAqIDEgfHwgMSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5faXRlbXNbY3VycmVudF0gJiYgdGhpcy5yZXNldCh0aGlzLl9pdGVtc1tjdXJyZW50XS5pbmRleCgpKTtcblxuXHRcdHRoaXMuaW52YWxpZGF0ZSgnaXRlbXMnKTtcblxuXHRcdHRoaXMudHJpZ2dlcignYWRkZWQnLCB7IGNvbnRlbnQ6IGNvbnRlbnQsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblx0fTtcblxuXHQvKipcblx0ICogUmVtb3ZlcyBhbiBpdGVtIGJ5IGl0cyBwb3NpdGlvbi5cblx0ICogQHRvZG8gVXNlIGBpdGVtYCBpbnN0ZWFkIG9mIGBjb250ZW50YCBmb3IgdGhlIGV2ZW50IGFyZ3VtZW50cy5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb24gLSBUaGUgcmVsYXRpdmUgcG9zaXRpb24gb2YgdGhlIGl0ZW0gdG8gcmVtb3ZlLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbihwb3NpdGlvbikge1xuXHRcdHBvc2l0aW9uID0gdGhpcy5ub3JtYWxpemUocG9zaXRpb24sIHRydWUpO1xuXG5cdFx0aWYgKHBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3JlbW92ZScsIHsgY29udGVudDogdGhpcy5faXRlbXNbcG9zaXRpb25dLCBwb3NpdGlvbjogcG9zaXRpb24gfSk7XG5cblx0XHR0aGlzLl9pdGVtc1twb3NpdGlvbl0ucmVtb3ZlKCk7XG5cdFx0dGhpcy5faXRlbXMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcblx0XHR0aGlzLl9tZXJnZXJzLnNwbGljZShwb3NpdGlvbiwgMSk7XG5cblx0XHR0aGlzLmludmFsaWRhdGUoJ2l0ZW1zJyk7XG5cblx0XHR0aGlzLnRyaWdnZXIoJ3JlbW92ZWQnLCB7IGNvbnRlbnQ6IG51bGwsIHBvc2l0aW9uOiBwb3NpdGlvbiB9KTtcblx0fTtcblxuXHQvKipcblx0ICogUHJlbG9hZHMgaW1hZ2VzIHdpdGggYXV0byB3aWR0aC5cblx0ICogQHRvZG8gUmVwbGFjZSBieSBhIG1vcmUgZ2VuZXJpYyBhcHByb2FjaFxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLnByZWxvYWRBdXRvV2lkdGhJbWFnZXMgPSBmdW5jdGlvbihpbWFnZXMpIHtcblx0XHRpbWFnZXMuZWFjaCgkLnByb3h5KGZ1bmN0aW9uKGksIGVsZW1lbnQpIHtcblx0XHRcdHRoaXMuZW50ZXIoJ3ByZS1sb2FkaW5nJyk7XG5cdFx0XHRlbGVtZW50ID0gJChlbGVtZW50KTtcblx0XHRcdCQobmV3IEltYWdlKCkpLm9uZSgnbG9hZCcsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlbGVtZW50LmF0dHIoJ3NyYycsIGUudGFyZ2V0LnNyYyk7XG5cdFx0XHRcdGVsZW1lbnQuY3NzKCdvcGFjaXR5JywgMSk7XG5cdFx0XHRcdHRoaXMubGVhdmUoJ3ByZS1sb2FkaW5nJyk7XG5cdFx0XHRcdCF0aGlzLmlzKCdwcmUtbG9hZGluZycpICYmICF0aGlzLmlzKCdpbml0aWFsaXppbmcnKSAmJiB0aGlzLnJlZnJlc2goKTtcblx0XHRcdH0sIHRoaXMpKS5hdHRyKCdzcmMnLCBlbGVtZW50LmF0dHIoJ3NyYycpIHx8IGVsZW1lbnQuYXR0cignZGF0YS1zcmMnKSB8fCBlbGVtZW50LmF0dHIoJ2RhdGEtc3JjLXJldGluYScpKTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBjYXJvdXNlbC5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cblx0XHR0aGlzLiRlbGVtZW50Lm9mZignLm93bC5jb3JlJyk7XG5cdFx0dGhpcy4kc3RhZ2Uub2ZmKCcub3dsLmNvcmUnKTtcblx0XHQkKGRvY3VtZW50KS5vZmYoJy5vd2wuY29yZScpO1xuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MucmVzcG9uc2l2ZSAhPT0gZmFsc2UpIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5yZXNpemVUaW1lcik7XG5cdFx0XHR0aGlzLm9mZih3aW5kb3csICdyZXNpemUnLCB0aGlzLl9oYW5kbGVycy5vblRocm90dGxlZFJlc2l6ZSk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSBpbiB0aGlzLl9wbHVnaW5zKSB7XG5cdFx0XHR0aGlzLl9wbHVnaW5zW2ldLmRlc3Ryb3koKTtcblx0XHR9XG5cblx0XHR0aGlzLiRzdGFnZS5jaGlsZHJlbignLmNsb25lZCcpLnJlbW92ZSgpO1xuXG5cdFx0dGhpcy4kc3RhZ2UudW53cmFwKCk7XG5cdFx0dGhpcy4kc3RhZ2UuY2hpbGRyZW4oKS5jb250ZW50cygpLnVud3JhcCgpO1xuXHRcdHRoaXMuJHN0YWdlLmNoaWxkcmVuKCkudW53cmFwKCk7XG5cblx0XHR0aGlzLiRlbGVtZW50XG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLnJlZnJlc2hDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMubG9hZGluZ0NsYXNzKVxuXHRcdFx0LnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5sb2FkZWRDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMucnRsQ2xhc3MpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmRyYWdDbGFzcylcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZ3JhYkNsYXNzKVxuXHRcdFx0LmF0dHIoJ2NsYXNzJywgdGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLm9wdGlvbnMucmVzcG9uc2l2ZUNsYXNzICsgJy1cXFxcUytcXFxccycsICdnJyksICcnKSlcblx0XHRcdC5yZW1vdmVEYXRhKCdvd2wuY2Fyb3VzZWwnKTtcblx0fTtcblxuXHQvKipcblx0ICogT3BlcmF0b3JzIHRvIGNhbGN1bGF0ZSByaWdodC10by1sZWZ0IGFuZCBsZWZ0LXRvLXJpZ2h0LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbYV0gLSBUaGUgbGVmdCBzaWRlIG9wZXJhbmQuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbb10gLSBUaGUgb3BlcmF0b3IuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbYl0gLSBUaGUgcmlnaHQgc2lkZSBvcGVyYW5kLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vcCA9IGZ1bmN0aW9uKGEsIG8sIGIpIHtcblx0XHR2YXIgcnRsID0gdGhpcy5zZXR0aW5ncy5ydGw7XG5cdFx0c3dpdGNoIChvKSB7XG5cdFx0XHRjYXNlICc8Jzpcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPiBiIDogYSA8IGI7XG5cdFx0XHRjYXNlICc+Jzpcblx0XHRcdFx0cmV0dXJuIHJ0bCA/IGEgPCBiIDogYSA+IGI7XG5cdFx0XHRjYXNlICc+PSc6XG5cdFx0XHRcdHJldHVybiBydGwgPyBhIDw9IGIgOiBhID49IGI7XG5cdFx0XHRjYXNlICc8PSc6XG5cdFx0XHRcdHJldHVybiBydGwgPyBhID49IGIgOiBhIDw9IGI7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEF0dGFjaGVzIHRvIGFuIGludGVybmFsIGV2ZW50LlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgLSBUaGUgZXZlbnQgc291cmNlLlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBUaGUgZXZlbnQgaGFuZGxlciB0byBhdHRhY2guXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gY2FwdHVyZSAtIFdldGhlciB0aGUgZXZlbnQgc2hvdWxkIGJlIGhhbmRsZWQgYXQgdGhlIGNhcHR1cmluZyBwaGFzZSBvciBub3QuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKSB7XG5cdFx0aWYgKGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcikge1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgY2FwdHVyZSk7XG5cdFx0fSBlbHNlIGlmIChlbGVtZW50LmF0dGFjaEV2ZW50KSB7XG5cdFx0XHRlbGVtZW50LmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRGV0YWNoZXMgZnJvbSBhbiBpbnRlcm5hbCBldmVudC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGV2ZW50IHNvdXJjZS5cblx0ICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IG5hbWUuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gVGhlIGF0dGFjaGVkIGV2ZW50IGhhbmRsZXIgdG8gZGV0YWNoLlxuXHQgKiBAcGFyYW0ge0Jvb2xlYW59IGNhcHR1cmUgLSBXZXRoZXIgdGhlIGF0dGFjaGVkIGV2ZW50IGhhbmRsZXIgd2FzIHJlZ2lzdGVyZWQgYXMgYSBjYXB0dXJpbmcgbGlzdGVuZXIgb3Igbm90LlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbihlbGVtZW50LCBldmVudCwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcblx0XHRpZiAoZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG5cdFx0XHRlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBjYXB0dXJlKTtcblx0XHR9IGVsc2UgaWYgKGVsZW1lbnQuZGV0YWNoRXZlbnQpIHtcblx0XHRcdGVsZW1lbnQuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBUcmlnZ2VycyBhIHB1YmxpYyBldmVudC5cblx0ICogQHRvZG8gUmVtb3ZlIGBzdGF0dXNgLCBgcmVsYXRlZFRhcmdldGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge1N0cmluZ30gbmFtZSAtIFRoZSBldmVudCBuYW1lLlxuXHQgKiBAcGFyYW0geyp9IFtkYXRhPW51bGxdIC0gVGhlIGV2ZW50IGRhdGEuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbbmFtZXNwYWNlPWNhcm91c2VsXSAtIFRoZSBldmVudCBuYW1lc3BhY2UuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBbc3RhdGVdIC0gVGhlIHN0YXRlIHdoaWNoIGlzIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXZlbnQuXG5cdCAqIEBwYXJhbSB7Qm9vbGVhbn0gW2VudGVyPWZhbHNlXSAtIEluZGljYXRlcyBpZiB0aGUgY2FsbCBlbnRlcnMgdGhlIHNwZWNpZmllZCBzdGF0ZSBvciBub3QuXG5cdCAqIEByZXR1cm5zIHtFdmVudH0gLSBUaGUgZXZlbnQgYXJndW1lbnRzLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24obmFtZSwgZGF0YSwgbmFtZXNwYWNlLCBzdGF0ZSwgZW50ZXIpIHtcblx0XHR2YXIgc3RhdHVzID0ge1xuXHRcdFx0aXRlbTogeyBjb3VudDogdGhpcy5faXRlbXMubGVuZ3RoLCBpbmRleDogdGhpcy5jdXJyZW50KCkgfVxuXHRcdH0sIGhhbmRsZXIgPSAkLmNhbWVsQ2FzZShcblx0XHRcdCQuZ3JlcChbICdvbicsIG5hbWUsIG5hbWVzcGFjZSBdLCBmdW5jdGlvbih2KSB7IHJldHVybiB2IH0pXG5cdFx0XHRcdC5qb2luKCctJykudG9Mb3dlckNhc2UoKVxuXHRcdCksIGV2ZW50ID0gJC5FdmVudChcblx0XHRcdFsgbmFtZSwgJ293bCcsIG5hbWVzcGFjZSB8fCAnY2Fyb3VzZWwnIF0uam9pbignLicpLnRvTG93ZXJDYXNlKCksXG5cdFx0XHQkLmV4dGVuZCh7IHJlbGF0ZWRUYXJnZXQ6IHRoaXMgfSwgc3RhdHVzLCBkYXRhKVxuXHRcdCk7XG5cblx0XHRpZiAoIXRoaXMuX3N1cHJlc3NbbmFtZV0pIHtcblx0XHRcdCQuZWFjaCh0aGlzLl9wbHVnaW5zLCBmdW5jdGlvbihuYW1lLCBwbHVnaW4pIHtcblx0XHRcdFx0aWYgKHBsdWdpbi5vblRyaWdnZXIpIHtcblx0XHRcdFx0XHRwbHVnaW4ub25UcmlnZ2VyKGV2ZW50KTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMucmVnaXN0ZXIoeyB0eXBlOiBPd2wuVHlwZS5FdmVudCwgbmFtZTogbmFtZSB9KTtcblx0XHRcdHRoaXMuJGVsZW1lbnQudHJpZ2dlcihldmVudCk7XG5cblx0XHRcdGlmICh0aGlzLnNldHRpbmdzICYmIHR5cGVvZiB0aGlzLnNldHRpbmdzW2hhbmRsZXJdID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHRoaXMuc2V0dGluZ3NbaGFuZGxlcl0uY2FsbCh0aGlzLCBldmVudCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBFbnRlcnMgYSBzdGF0ZS5cblx0ICogQHBhcmFtIG5hbWUgLSBUaGUgc3RhdGUgbmFtZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuZW50ZXIgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0JC5lYWNoKFsgbmFtZSBdLmNvbmNhdCh0aGlzLl9zdGF0ZXMudGFnc1tuYW1lXSB8fCBbXSksICQucHJveHkoZnVuY3Rpb24oaSwgbmFtZSkge1xuXHRcdFx0aWYgKHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5fc3RhdGVzLmN1cnJlbnRbbmFtZV0gPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9zdGF0ZXMuY3VycmVudFtuYW1lXSsrO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogTGVhdmVzIGEgc3RhdGUuXG5cdCAqIEBwYXJhbSBuYW1lIC0gVGhlIHN0YXRlIG5hbWUuXG5cdCAqL1xuXHRPd2wucHJvdG90eXBlLmxlYXZlID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdCQuZWFjaChbIG5hbWUgXS5jb25jYXQodGhpcy5fc3RhdGVzLnRhZ3NbbmFtZV0gfHwgW10pLCAkLnByb3h5KGZ1bmN0aW9uKGksIG5hbWUpIHtcblx0XHRcdHRoaXMuX3N0YXRlcy5jdXJyZW50W25hbWVdLS07XG5cdFx0fSwgdGhpcykpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYW4gZXZlbnQgb3Igc3RhdGUuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCAtIFRoZSBldmVudCBvciBzdGF0ZSB0byByZWdpc3Rlci5cblx0ICovXG5cdE93bC5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbihvYmplY3QpIHtcblx0XHRpZiAob2JqZWN0LnR5cGUgPT09IE93bC5UeXBlLkV2ZW50KSB7XG5cdFx0XHRpZiAoISQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0pIHtcblx0XHRcdFx0JC5ldmVudC5zcGVjaWFsW29iamVjdC5uYW1lXSA9IHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoISQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0ub3dsKSB7XG5cdFx0XHRcdHZhciBfZGVmYXVsdCA9ICQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0uX2RlZmF1bHQ7XG5cdFx0XHRcdCQuZXZlbnQuc3BlY2lhbFtvYmplY3QubmFtZV0uX2RlZmF1bHQgPSBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aWYgKF9kZWZhdWx0ICYmIF9kZWZhdWx0LmFwcGx5ICYmICghZS5uYW1lc3BhY2UgfHwgZS5uYW1lc3BhY2UuaW5kZXhPZignb3dsJykgPT09IC0xKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9kZWZhdWx0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBlLm5hbWVzcGFjZSAmJiBlLm5hbWVzcGFjZS5pbmRleE9mKCdvd2wnKSA+IC0xO1xuXHRcdFx0XHR9O1xuXHRcdFx0XHQkLmV2ZW50LnNwZWNpYWxbb2JqZWN0Lm5hbWVdLm93bCA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChvYmplY3QudHlwZSA9PT0gT3dsLlR5cGUuU3RhdGUpIHtcblx0XHRcdGlmICghdGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdKSB7XG5cdFx0XHRcdHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSA9IG9iamVjdC50YWdzO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdID0gdGhpcy5fc3RhdGVzLnRhZ3Nbb2JqZWN0Lm5hbWVdLmNvbmNhdChvYmplY3QudGFncyk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX3N0YXRlcy50YWdzW29iamVjdC5uYW1lXSA9ICQuZ3JlcCh0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0sICQucHJveHkoZnVuY3Rpb24odGFnLCBpKSB7XG5cdFx0XHRcdHJldHVybiAkLmluQXJyYXkodGFnLCB0aGlzLl9zdGF0ZXMudGFnc1tvYmplY3QubmFtZV0pID09PSBpO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogU3VwcHJlc3NlcyBldmVudHMuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtBcnJheS48U3RyaW5nPn0gZXZlbnRzIC0gVGhlIGV2ZW50cyB0byBzdXBwcmVzcy5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuc3VwcHJlc3MgPSBmdW5jdGlvbihldmVudHMpIHtcblx0XHQkLmVhY2goZXZlbnRzLCAkLnByb3h5KGZ1bmN0aW9uKGluZGV4LCBldmVudCkge1xuXHRcdFx0dGhpcy5fc3VwcmVzc1tldmVudF0gPSB0cnVlO1xuXHRcdH0sIHRoaXMpKTtcblx0fTtcblxuXHQvKipcblx0ICogUmVsZWFzZXMgc3VwcHJlc3NlZCBldmVudHMuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtBcnJheS48U3RyaW5nPn0gZXZlbnRzIC0gVGhlIGV2ZW50cyB0byByZWxlYXNlLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24oZXZlbnRzKSB7XG5cdFx0JC5lYWNoKGV2ZW50cywgJC5wcm94eShmdW5jdGlvbihpbmRleCwgZXZlbnQpIHtcblx0XHRcdGRlbGV0ZSB0aGlzLl9zdXByZXNzW2V2ZW50XTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdW5pZmllZCBwb2ludGVyIGNvb3JkaW5hdGVzIGZyb20gZXZlbnQuXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge0V2ZW50fSAtIFRoZSBgbW91c2Vkb3duYCBvciBgdG91Y2hzdGFydGAgZXZlbnQuXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9IC0gQ29udGFpbnMgYHhgIGFuZCBgeWAgY29vcmRpbmF0ZXMgb2YgY3VycmVudCBwb2ludGVyIHBvc2l0aW9uLlxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5wb2ludGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgcmVzdWx0ID0geyB4OiBudWxsLCB5OiBudWxsIH07XG5cblx0XHRldmVudCA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQgfHwgZXZlbnQgfHwgd2luZG93LmV2ZW50O1xuXG5cdFx0ZXZlbnQgPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID9cblx0XHRcdGV2ZW50LnRvdWNoZXNbMF0gOiBldmVudC5jaGFuZ2VkVG91Y2hlcyAmJiBldmVudC5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggP1xuXHRcdFx0XHRldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50O1xuXG5cdFx0aWYgKGV2ZW50LnBhZ2VYKSB7XG5cdFx0XHRyZXN1bHQueCA9IGV2ZW50LnBhZ2VYO1xuXHRcdFx0cmVzdWx0LnkgPSBldmVudC5wYWdlWTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0LnggPSBldmVudC5jbGllbnRYO1xuXHRcdFx0cmVzdWx0LnkgPSBldmVudC5jbGllbnRZO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG5cblx0LyoqXG5cdCAqIERldGVybWluZXMgaWYgdGhlIGlucHV0IGlzIGEgTnVtYmVyIG9yIHNvbWV0aGluZyB0aGF0IGNhbiBiZSBjb2VyY2VkIHRvIGEgTnVtYmVyXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtOdW1iZXJ8U3RyaW5nfE9iamVjdHxBcnJheXxCb29sZWFufFJlZ0V4cHxGdW5jdGlvbnxTeW1ib2x9IC0gVGhlIGlucHV0IHRvIGJlIHRlc3RlZFxuXHQgKiBAcmV0dXJucyB7Qm9vbGVhbn0gLSBBbiBpbmRpY2F0aW9uIGlmIHRoZSBpbnB1dCBpcyBhIE51bWJlciBvciBjYW4gYmUgY29lcmNlZCB0byBhIE51bWJlclxuXHQgKi9cblx0T3dsLnByb3RvdHlwZS5pc051bWVyaWMgPSBmdW5jdGlvbihudW1iZXIpIHtcblx0XHRyZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQobnVtYmVyKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIGRpZmZlcmVuY2Ugb2YgdHdvIHZlY3RvcnMuXG5cdCAqIEB0b2RvICMyNjFcblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge09iamVjdH0gLSBUaGUgZmlyc3QgdmVjdG9yLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gLSBUaGUgc2Vjb25kIHZlY3Rvci5cblx0ICogQHJldHVybnMge09iamVjdH0gLSBUaGUgZGlmZmVyZW5jZS5cblx0ICovXG5cdE93bC5wcm90b3R5cGUuZGlmZmVyZW5jZSA9IGZ1bmN0aW9uKGZpcnN0LCBzZWNvbmQpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0eDogZmlyc3QueCAtIHNlY29uZC54LFxuXHRcdFx0eTogZmlyc3QueSAtIHNlY29uZC55XG5cdFx0fTtcblx0fTtcblxuXHQvKipcblx0ICogVGhlIGpRdWVyeSBQbHVnaW4gZm9yIHRoZSBPd2wgQ2Fyb3VzZWxcblx0ICogQHRvZG8gTmF2aWdhdGlvbiBwbHVnaW4gYG5leHRgIGFuZCBgcHJldmBcblx0ICogQHB1YmxpY1xuXHQgKi9cblx0JC5mbi5vd2xDYXJvdXNlbCA9IGZ1bmN0aW9uKG9wdGlvbikge1xuXHRcdHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxuXHRcdFx0XHRkYXRhID0gJHRoaXMuZGF0YSgnb3dsLmNhcm91c2VsJyk7XG5cblx0XHRcdGlmICghZGF0YSkge1xuXHRcdFx0XHRkYXRhID0gbmV3IE93bCh0aGlzLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbik7XG5cdFx0XHRcdCR0aGlzLmRhdGEoJ293bC5jYXJvdXNlbCcsIGRhdGEpO1xuXG5cdFx0XHRcdCQuZWFjaChbXG5cdFx0XHRcdFx0J25leHQnLCAncHJldicsICd0bycsICdkZXN0cm95JywgJ3JlZnJlc2gnLCAncmVwbGFjZScsICdhZGQnLCAncmVtb3ZlJ1xuXHRcdFx0XHRdLCBmdW5jdGlvbihpLCBldmVudCkge1xuXHRcdFx0XHRcdGRhdGEucmVnaXN0ZXIoeyB0eXBlOiBPd2wuVHlwZS5FdmVudCwgbmFtZTogZXZlbnQgfSk7XG5cdFx0XHRcdFx0ZGF0YS4kZWxlbWVudC5vbihldmVudCArICcub3dsLmNhcm91c2VsLmNvcmUnLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnJlbGF0ZWRUYXJnZXQgIT09IHRoaXMpIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5zdXBwcmVzcyhbIGV2ZW50IF0pO1xuXHRcdFx0XHRcdFx0XHRkYXRhW2V2ZW50XS5hcHBseSh0aGlzLCBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xuXHRcdFx0XHRcdFx0XHR0aGlzLnJlbGVhc2UoWyBldmVudCBdKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LCBkYXRhKSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJyAmJiBvcHRpb24uY2hhckF0KDApICE9PSAnXycpIHtcblx0XHRcdFx0ZGF0YVtvcHRpb25dLmFwcGx5KGRhdGEsIGFyZ3MpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBUaGUgY29uc3RydWN0b3IgZm9yIHRoZSBqUXVlcnkgUGx1Z2luXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IgPSBPd2w7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBBdXRvUmVmcmVzaCBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMS4wXG4gKiBAYXV0aG9yIEFydHVzIEtvbGFub3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIGF1dG8gcmVmcmVzaCBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgQXV0byBSZWZyZXNoIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgQXV0b1JlZnJlc2ggPSBmdW5jdGlvbihjYXJvdXNlbCkge1xuXHRcdC8qKlxuXHRcdCAqIFJlZmVyZW5jZSB0byB0aGUgY29yZS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge093bH1cblx0XHQgKi9cblx0XHR0aGlzLl9jb3JlID0gY2Fyb3VzZWw7XG5cblx0XHQvKipcblx0XHQgKiBSZWZyZXNoIGludGVydmFsLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2ludGVydmFsID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIFdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IHZpc2libGUgb3Igbm90LlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLl92aXNpYmxlID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b1JlZnJlc2gpIHtcblx0XHRcdFx0XHR0aGlzLndhdGNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpXG5cdFx0fTtcblxuXHRcdC8vIHNldCBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQXV0b1JlZnJlc2guRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEF1dG9SZWZyZXNoLkRlZmF1bHRzID0ge1xuXHRcdGF1dG9SZWZyZXNoOiB0cnVlLFxuXHRcdGF1dG9SZWZyZXNoSW50ZXJ2YWw6IDUwMFxuXHR9O1xuXG5cdC8qKlxuXHQgKiBXYXRjaGVzIHRoZSBlbGVtZW50LlxuXHQgKi9cblx0QXV0b1JlZnJlc2gucHJvdG90eXBlLndhdGNoID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKHRoaXMuX2ludGVydmFsKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlzaWJsZSA9IHRoaXMuX2NvcmUuJGVsZW1lbnQuaXMoJzp2aXNpYmxlJyk7XG5cdFx0dGhpcy5faW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoJC5wcm94eSh0aGlzLnJlZnJlc2gsIHRoaXMpLCB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9SZWZyZXNoSW50ZXJ2YWwpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBSZWZyZXNoZXMgdGhlIGVsZW1lbnQuXG5cdCAqL1xuXHRBdXRvUmVmcmVzaC5wcm90b3R5cGUucmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICh0aGlzLl9jb3JlLiRlbGVtZW50LmlzKCc6dmlzaWJsZScpID09PSB0aGlzLl92aXNpYmxlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlzaWJsZSA9ICF0aGlzLl92aXNpYmxlO1xuXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC50b2dnbGVDbGFzcygnb3dsLWhpZGRlbicsICF0aGlzLl92aXNpYmxlKTtcblxuXHRcdHRoaXMuX3Zpc2libGUgJiYgKHRoaXMuX2NvcmUuaW52YWxpZGF0ZSgnd2lkdGgnKSAmJiB0aGlzLl9jb3JlLnJlZnJlc2goKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqL1xuXHRBdXRvUmVmcmVzaC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdHdpbmRvdy5jbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkF1dG9SZWZyZXNoID0gQXV0b1JlZnJlc2g7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBMYXp5IFBsdWdpblxuICogQHZlcnNpb24gMi4xLjBcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBsYXp5IHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBMYXp5IFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgTGF6eSA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxyZWFkeSBsb2FkZWQgaXRlbXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtBcnJheS48alF1ZXJ5Pn1cblx0XHQgKi9cblx0XHR0aGlzLl9sb2FkZWQgPSBbXTtcblxuXHRcdC8qKlxuXHRcdCAqIEV2ZW50IGhhbmRsZXJzLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T2JqZWN0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX2hhbmRsZXJzID0ge1xuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCBjaGFuZ2Uub3dsLmNhcm91c2VsIHJlc2l6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmICghZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXRoaXMuX2NvcmUuc2V0dGluZ3MgfHwgIXRoaXMuX2NvcmUuc2V0dGluZ3MubGF6eUxvYWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoKGUucHJvcGVydHkgJiYgZS5wcm9wZXJ0eS5uYW1lID09ICdwb3NpdGlvbicpIHx8IGUudHlwZSA9PSAnaW5pdGlhbGl6ZWQnKSB7XG5cdFx0XHRcdFx0dmFyIHNldHRpbmdzID0gdGhpcy5fY29yZS5zZXR0aW5ncyxcblx0XHRcdFx0XHRcdG4gPSAoc2V0dGluZ3MuY2VudGVyICYmIE1hdGguY2VpbChzZXR0aW5ncy5pdGVtcyAvIDIpIHx8IHNldHRpbmdzLml0ZW1zKSxcblx0XHRcdFx0XHRcdGkgPSAoKHNldHRpbmdzLmNlbnRlciAmJiBuICogLTEpIHx8IDApLFxuXHRcdFx0XHRcdFx0cG9zaXRpb24gPSAoZS5wcm9wZXJ0eSAmJiBlLnByb3BlcnR5LnZhbHVlICE9PSB1bmRlZmluZWQgPyBlLnByb3BlcnR5LnZhbHVlIDogdGhpcy5fY29yZS5jdXJyZW50KCkpICsgaSxcblx0XHRcdFx0XHRcdGNsb25lcyA9IHRoaXMuX2NvcmUuY2xvbmVzKCkubGVuZ3RoLFxuXHRcdFx0XHRcdFx0bG9hZCA9ICQucHJveHkoZnVuY3Rpb24oaSwgdikgeyB0aGlzLmxvYWQodikgfSwgdGhpcyk7XG5cblx0XHRcdFx0XHR3aGlsZSAoaSsrIDwgbikge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2FkKGNsb25lcyAvIDIgKyB0aGlzLl9jb3JlLnJlbGF0aXZlKHBvc2l0aW9uKSk7XG5cdFx0XHRcdFx0XHRjbG9uZXMgJiYgJC5lYWNoKHRoaXMuX2NvcmUuY2xvbmVzKHRoaXMuX2NvcmUucmVsYXRpdmUocG9zaXRpb24pKSwgbG9hZCk7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbisrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IHRoZSBkZWZhdWx0IG9wdGlvbnNcblx0XHR0aGlzLl9jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgTGF6eS5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJcblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRMYXp5LkRlZmF1bHRzID0ge1xuXHRcdGxhenlMb2FkOiBmYWxzZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBMb2FkcyBhbGwgcmVzb3VyY2VzIG9mIGFuIGl0ZW0gYXQgdGhlIHNwZWNpZmllZCBwb3NpdGlvbi5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIGFic29sdXRlIHBvc2l0aW9uIG9mIHRoZSBpdGVtLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHRMYXp5LnByb3RvdHlwZS5sb2FkID0gZnVuY3Rpb24ocG9zaXRpb24pIHtcblx0XHR2YXIgJGl0ZW0gPSB0aGlzLl9jb3JlLiRzdGFnZS5jaGlsZHJlbigpLmVxKHBvc2l0aW9uKSxcblx0XHRcdCRlbGVtZW50cyA9ICRpdGVtICYmICRpdGVtLmZpbmQoJy5vd2wtbGF6eScpO1xuXG5cdFx0aWYgKCEkZWxlbWVudHMgfHwgJC5pbkFycmF5KCRpdGVtLmdldCgwKSwgdGhpcy5fbG9hZGVkKSA+IC0xKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0JGVsZW1lbnRzLmVhY2goJC5wcm94eShmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xuXHRcdFx0dmFyICRlbGVtZW50ID0gJChlbGVtZW50KSwgaW1hZ2UsXG5cdFx0XHRcdHVybCA9ICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyA+IDEgJiYgJGVsZW1lbnQuYXR0cignZGF0YS1zcmMtcmV0aW5hJykpIHx8ICRlbGVtZW50LmF0dHIoJ2RhdGEtc3JjJyk7XG5cblx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignbG9hZCcsIHsgZWxlbWVudDogJGVsZW1lbnQsIHVybDogdXJsIH0sICdsYXp5Jyk7XG5cblx0XHRcdGlmICgkZWxlbWVudC5pcygnaW1nJykpIHtcblx0XHRcdFx0JGVsZW1lbnQub25lKCdsb2FkLm93bC5sYXp5JywgJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3MoJ29wYWNpdHknLCAxKTtcblx0XHRcdFx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ2xvYWRlZCcsIHsgZWxlbWVudDogJGVsZW1lbnQsIHVybDogdXJsIH0sICdsYXp5Jyk7XG5cdFx0XHRcdH0sIHRoaXMpKS5hdHRyKCdzcmMnLCB1cmwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aW1hZ2UgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdFx0aW1hZ2Uub25sb2FkID0gJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkZWxlbWVudC5jc3Moe1xuXHRcdFx0XHRcdFx0J2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyB1cmwgKyAnKScsXG5cdFx0XHRcdFx0XHQnb3BhY2l0eSc6ICcxJ1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignbG9hZGVkJywgeyBlbGVtZW50OiAkZWxlbWVudCwgdXJsOiB1cmwgfSwgJ2xhenknKTtcblx0XHRcdFx0fSwgdGhpcyk7XG5cdFx0XHRcdGltYWdlLnNyYyA9IHVybDtcblx0XHRcdH1cblx0XHR9LCB0aGlzKSk7XG5cblx0XHR0aGlzLl9sb2FkZWQucHVzaCgkaXRlbS5nZXQoMCkpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRMYXp5LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuaGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuaGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkxhenkgPSBMYXp5O1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogQXV0b0hlaWdodCBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMS4wXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHQvKipcblx0ICogQ3JlYXRlcyB0aGUgYXV0byBoZWlnaHQgcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIEF1dG8gSGVpZ2h0IFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgQXV0b0hlaWdodCA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwgcmVmcmVzaGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvSGVpZ2h0KSB7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b0hlaWdodCAmJiBlLnByb3BlcnR5Lm5hbWUgPT0gJ3Bvc2l0aW9uJyl7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQnbG9hZGVkLm93bC5sYXp5JzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHRcblx0XHRcdFx0XHQmJiBlLmVsZW1lbnQuY2xvc2VzdCgnLicgKyB0aGlzLl9jb3JlLnNldHRpbmdzLml0ZW1DbGFzcykuaW5kZXgoKSA9PT0gdGhpcy5fY29yZS5jdXJyZW50KCkpIHtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEF1dG9IZWlnaHQuRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEF1dG9IZWlnaHQuRGVmYXVsdHMgPSB7XG5cdFx0YXV0b0hlaWdodDogZmFsc2UsXG5cdFx0YXV0b0hlaWdodENsYXNzOiAnb3dsLWhlaWdodCdcblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgdmlldy5cblx0ICovXG5cdEF1dG9IZWlnaHQucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBzdGFydCA9IHRoaXMuX2NvcmUuX2N1cnJlbnQsXG5cdFx0XHRlbmQgPSBzdGFydCArIHRoaXMuX2NvcmUuc2V0dGluZ3MuaXRlbXMsXG5cdFx0XHR2aXNpYmxlID0gdGhpcy5fY29yZS4kc3RhZ2UuY2hpbGRyZW4oKS50b0FycmF5KCkuc2xpY2Uoc3RhcnQsIGVuZCksXG5cdFx0XHRoZWlnaHRzID0gW10sXG5cdFx0XHRtYXhoZWlnaHQgPSAwO1xuXG5cdFx0JC5lYWNoKHZpc2libGUsIGZ1bmN0aW9uKGluZGV4LCBpdGVtKSB7XG5cdFx0XHRoZWlnaHRzLnB1c2goJChpdGVtKS5oZWlnaHQoKSk7XG5cdFx0fSk7XG5cblx0XHRtYXhoZWlnaHQgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTtcblxuXHRcdHRoaXMuX2NvcmUuJHN0YWdlLnBhcmVudCgpXG5cdFx0XHQuaGVpZ2h0KG1heGhlaWdodClcblx0XHRcdC5hZGRDbGFzcyh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9IZWlnaHRDbGFzcyk7XG5cdH07XG5cblx0QXV0b0hlaWdodC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLkF1dG9IZWlnaHQgPSBBdXRvSGVpZ2h0O1xuXG59KSh3aW5kb3cuWmVwdG8gfHwgd2luZG93LmpRdWVyeSwgd2luZG93LCBkb2N1bWVudCk7XG5cbi8qKlxuICogVmlkZW8gUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjEuMFxuICogQGF1dGhvciBCYXJ0b3N6IFdvamNpZWNob3dza2lcbiAqIEBhdXRob3IgRGF2aWQgRGV1dHNjaFxuICogQGxpY2Vuc2UgVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKi9cbjsoZnVuY3Rpb24oJCwgd2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIHZpZGVvIHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBWaWRlbyBQbHVnaW5cblx0ICogQHBhcmFtIHtPd2x9IGNhcm91c2VsIC0gVGhlIE93bCBDYXJvdXNlbFxuXHQgKi9cblx0dmFyIFZpZGVvID0gZnVuY3Rpb24oY2Fyb3VzZWwpIHtcblx0XHQvKipcblx0XHQgKiBSZWZlcmVuY2UgdG8gdGhlIGNvcmUuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPd2x9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29yZSA9IGNhcm91c2VsO1xuXG5cdFx0LyoqXG5cdFx0ICogQ2FjaGUgYWxsIHZpZGVvIFVSTHMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5fdmlkZW9zID0ge307XG5cblx0XHQvKipcblx0XHQgKiBDdXJyZW50IHBsYXlpbmcgaXRlbS5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge2pRdWVyeX1cblx0XHQgKi9cblx0XHR0aGlzLl9wbGF5aW5nID0gbnVsbDtcblxuXHRcdC8qKlxuXHRcdCAqIEFsbCBldmVudCBoYW5kbGVycy5cblx0XHQgKiBAdG9kbyBUaGUgY2xvbmVkIGNvbnRlbnQgcmVtb3ZhbGUgaXMgdG9vIGxhdGVcblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYW5kbGVycyA9IHtcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlKSB7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS5yZWdpc3Rlcih7IHR5cGU6ICdzdGF0ZScsIG5hbWU6ICdwbGF5aW5nJywgdGFnczogWyAnaW50ZXJhY3RpbmcnIF0gfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3Jlc2l6ZS5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2NvcmUuc2V0dGluZ3MudmlkZW8gJiYgdGhpcy5pc0luRnVsbFNjcmVlbigpKSB7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdyZWZyZXNoZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLmlzKCdyZXNpemluZycpKSB7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS4kc3RhZ2UuZmluZCgnLmNsb25lZCAub3dsLXZpZGVvLWZyYW1lJykucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdwb3NpdGlvbicgJiYgdGhpcy5fcGxheWluZykge1xuXHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdwcmVwYXJlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKCFlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHZhciAkZWxlbWVudCA9ICQoZS5jb250ZW50KS5maW5kKCcub3dsLXZpZGVvJyk7XG5cblx0XHRcdFx0aWYgKCRlbGVtZW50Lmxlbmd0aCkge1xuXHRcdFx0XHRcdCRlbGVtZW50LmNzcygnZGlzcGxheScsICdub25lJyk7XG5cdFx0XHRcdFx0dGhpcy5mZXRjaCgkZWxlbWVudCwgJChlLmNvbnRlbnQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBWaWRlby5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGhhbmRsZXJzXG5cdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vbih0aGlzLl9oYW5kbGVycyk7XG5cblx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9uKCdjbGljay5vd2wudmlkZW8nLCAnLm93bC12aWRlby1wbGF5LWljb24nLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdHRoaXMucGxheShlKTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0VmlkZW8uRGVmYXVsdHMgPSB7XG5cdFx0dmlkZW86IGZhbHNlLFxuXHRcdHZpZGVvSGVpZ2h0OiBmYWxzZSxcblx0XHR2aWRlb1dpZHRoOiBmYWxzZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSB2aWRlbyBJRCBhbmQgdGhlIHR5cGUgKFlvdVR1YmUvVmltZW8vdnphYXIgb25seSkuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtqUXVlcnl9IHRhcmdldCAtIFRoZSB0YXJnZXQgY29udGFpbmluZyB0aGUgdmlkZW8gZGF0YS5cblx0ICogQHBhcmFtIHtqUXVlcnl9IGl0ZW0gLSBUaGUgaXRlbSBjb250YWluaW5nIHRoZSB2aWRlby5cblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uKHRhcmdldCwgaXRlbSkge1xuXHRcdFx0dmFyIHR5cGUgPSAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKHRhcmdldC5hdHRyKCdkYXRhLXZpbWVvLWlkJykpIHtcblx0XHRcdFx0XHRcdHJldHVybiAndmltZW8nO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGFyZ2V0LmF0dHIoJ2RhdGEtdnphYXItaWQnKSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuICd2emFhcidcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuICd5b3V0dWJlJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pKCksXG5cdFx0XHRcdGlkID0gdGFyZ2V0LmF0dHIoJ2RhdGEtdmltZW8taWQnKSB8fCB0YXJnZXQuYXR0cignZGF0YS15b3V0dWJlLWlkJykgfHwgdGFyZ2V0LmF0dHIoJ2RhdGEtdnphYXItaWQnKSxcblx0XHRcdFx0d2lkdGggPSB0YXJnZXQuYXR0cignZGF0YS13aWR0aCcpIHx8IHRoaXMuX2NvcmUuc2V0dGluZ3MudmlkZW9XaWR0aCxcblx0XHRcdFx0aGVpZ2h0ID0gdGFyZ2V0LmF0dHIoJ2RhdGEtaGVpZ2h0JykgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy52aWRlb0hlaWdodCxcblx0XHRcdFx0dXJsID0gdGFyZ2V0LmF0dHIoJ2hyZWYnKTtcblxuXHRcdGlmICh1cmwpIHtcblxuXHRcdFx0Lypcblx0XHRcdFx0XHRQYXJzZXMgdGhlIGlkJ3Mgb3V0IG9mIHRoZSBmb2xsb3dpbmcgdXJscyAoYW5kIHByb2JhYmx5IG1vcmUpOlxuXHRcdFx0XHRcdGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OmlkXG5cdFx0XHRcdFx0aHR0cHM6Ly95b3V0dS5iZS86aWRcblx0XHRcdFx0XHRodHRwczovL3ZpbWVvLmNvbS86aWRcblx0XHRcdFx0XHRodHRwczovL3ZpbWVvLmNvbS9jaGFubmVscy86Y2hhbm5lbC86aWRcblx0XHRcdFx0XHRodHRwczovL3ZpbWVvLmNvbS9ncm91cHMvOmdyb3VwL3ZpZGVvcy86aWRcblx0XHRcdFx0XHRodHRwczovL2FwcC52emFhci5jb20vdmlkZW9zLzppZFxuXG5cdFx0XHRcdFx0VmlzdWFsIGV4YW1wbGU6IGh0dHBzOi8vcmVnZXhwZXIuY29tLyMoaHR0cCUzQSU3Q2h0dHBzJTNBJTdDKSU1QyUyRiU1QyUyRihwbGF5ZXIuJTdDd3d3LiU3Q2FwcC4pJTNGKHZpbWVvJTVDLmNvbSU3Q3lvdXR1KGJlJTVDLmNvbSU3QyU1Qy5iZSU3Q2JlJTVDLmdvb2dsZWFwaXMlNUMuY29tKSU3Q3Z6YWFyJTVDLmNvbSklNUMlMkYodmlkZW8lNUMlMkYlN0N2aWRlb3MlNUMlMkYlN0NlbWJlZCU1QyUyRiU3Q2NoYW5uZWxzJTVDJTJGLiUyQiU1QyUyRiU3Q2dyb3VwcyU1QyUyRi4lMkIlNUMlMkYlN0N3YXRjaCU1QyUzRnYlM0QlN0N2JTVDJTJGKSUzRiglNUJBLVphLXowLTkuXyUyNS0lNUQqKSglNUMlMjYlNUNTJTJCKSUzRlxuXHRcdFx0Ki9cblxuXHRcdFx0aWQgPSB1cmwubWF0Y2goLyhodHRwOnxodHRwczp8KVxcL1xcLyhwbGF5ZXIufHd3dy58YXBwLik/KHZpbWVvXFwuY29tfHlvdXR1KGJlXFwuY29tfFxcLmJlfGJlXFwuZ29vZ2xlYXBpc1xcLmNvbSl8dnphYXJcXC5jb20pXFwvKHZpZGVvXFwvfHZpZGVvc1xcL3xlbWJlZFxcL3xjaGFubmVsc1xcLy4rXFwvfGdyb3Vwc1xcLy4rXFwvfHdhdGNoXFw/dj18dlxcLyk/KFtBLVphLXowLTkuXyUtXSopKFxcJlxcUyspPy8pO1xuXG5cdFx0XHRpZiAoaWRbM10uaW5kZXhPZigneW91dHUnKSA+IC0xKSB7XG5cdFx0XHRcdHR5cGUgPSAneW91dHViZSc7XG5cdFx0XHR9IGVsc2UgaWYgKGlkWzNdLmluZGV4T2YoJ3ZpbWVvJykgPiAtMSkge1xuXHRcdFx0XHR0eXBlID0gJ3ZpbWVvJztcblx0XHRcdH0gZWxzZSBpZiAoaWRbM10uaW5kZXhPZigndnphYXInKSA+IC0xKSB7XG5cdFx0XHRcdHR5cGUgPSAndnphYXInO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdWaWRlbyBVUkwgbm90IHN1cHBvcnRlZC4nKTtcblx0XHRcdH1cblx0XHRcdGlkID0gaWRbNl07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcignTWlzc2luZyB2aWRlbyBVUkwuJyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5fdmlkZW9zW3VybF0gPSB7XG5cdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0aWQ6IGlkLFxuXHRcdFx0d2lkdGg6IHdpZHRoLFxuXHRcdFx0aGVpZ2h0OiBoZWlnaHRcblx0XHR9O1xuXG5cdFx0aXRlbS5hdHRyKCdkYXRhLXZpZGVvJywgdXJsKTtcblxuXHRcdHRoaXMudGh1bWJuYWlsKHRhcmdldCwgdGhpcy5fdmlkZW9zW3VybF0pO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHZpZGVvIHRodW1ibmFpbC5cblx0ICogQHByb3RlY3RlZFxuXHQgKiBAcGFyYW0ge2pRdWVyeX0gdGFyZ2V0IC0gVGhlIHRhcmdldCBjb250YWluaW5nIHRoZSB2aWRlbyBkYXRhLlxuXHQgKiBAcGFyYW0ge09iamVjdH0gaW5mbyAtIFRoZSB2aWRlbyBpbmZvIG9iamVjdC5cblx0ICogQHNlZSBgZmV0Y2hgXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUudGh1bWJuYWlsID0gZnVuY3Rpb24odGFyZ2V0LCB2aWRlbykge1xuXHRcdHZhciB0bkxpbmssXG5cdFx0XHRpY29uLFxuXHRcdFx0cGF0aCxcblx0XHRcdGRpbWVuc2lvbnMgPSB2aWRlby53aWR0aCAmJiB2aWRlby5oZWlnaHQgPyAnc3R5bGU9XCJ3aWR0aDonICsgdmlkZW8ud2lkdGggKyAncHg7aGVpZ2h0OicgKyB2aWRlby5oZWlnaHQgKyAncHg7XCInIDogJycsXG5cdFx0XHRjdXN0b21UbiA9IHRhcmdldC5maW5kKCdpbWcnKSxcblx0XHRcdHNyY1R5cGUgPSAnc3JjJyxcblx0XHRcdGxhenlDbGFzcyA9ICcnLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzLFxuXHRcdFx0Y3JlYXRlID0gZnVuY3Rpb24ocGF0aCkge1xuXHRcdFx0XHRpY29uID0gJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8tcGxheS1pY29uXCI+PC9kaXY+JztcblxuXHRcdFx0XHRpZiAoc2V0dGluZ3MubGF6eUxvYWQpIHtcblx0XHRcdFx0XHR0bkxpbmsgPSAnPGRpdiBjbGFzcz1cIm93bC12aWRlby10biAnICsgbGF6eUNsYXNzICsgJ1wiICcgKyBzcmNUeXBlICsgJz1cIicgKyBwYXRoICsgJ1wiPjwvZGl2Pic7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dG5MaW5rID0gJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8tdG5cIiBzdHlsZT1cIm9wYWNpdHk6MTtiYWNrZ3JvdW5kLWltYWdlOnVybCgnICsgcGF0aCArICcpXCI+PC9kaXY+Jztcblx0XHRcdFx0fVxuXHRcdFx0XHR0YXJnZXQuYWZ0ZXIodG5MaW5rKTtcblx0XHRcdFx0dGFyZ2V0LmFmdGVyKGljb24pO1xuXHRcdFx0fTtcblxuXHRcdC8vIHdyYXAgdmlkZW8gY29udGVudCBpbnRvIG93bC12aWRlby13cmFwcGVyIGRpdlxuXHRcdHRhcmdldC53cmFwKCc8ZGl2IGNsYXNzPVwib3dsLXZpZGVvLXdyYXBwZXJcIicgKyBkaW1lbnNpb25zICsgJz48L2Rpdj4nKTtcblxuXHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmxhenlMb2FkKSB7XG5cdFx0XHRzcmNUeXBlID0gJ2RhdGEtc3JjJztcblx0XHRcdGxhenlDbGFzcyA9ICdvd2wtbGF6eSc7XG5cdFx0fVxuXG5cdFx0Ly8gY3VzdG9tIHRodW1ibmFpbFxuXHRcdGlmIChjdXN0b21Ubi5sZW5ndGgpIHtcblx0XHRcdGNyZWF0ZShjdXN0b21Ubi5hdHRyKHNyY1R5cGUpKTtcblx0XHRcdGN1c3RvbVRuLnJlbW92ZSgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICh2aWRlby50eXBlID09PSAneW91dHViZScpIHtcblx0XHRcdHBhdGggPSBcIi8vaW1nLnlvdXR1YmUuY29tL3ZpL1wiICsgdmlkZW8uaWQgKyBcIi9ocWRlZmF1bHQuanBnXCI7XG5cdFx0XHRjcmVhdGUocGF0aCk7XG5cdFx0fSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndmltZW8nKSB7XG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR0eXBlOiAnR0VUJyxcblx0XHRcdFx0dXJsOiAnLy92aW1lby5jb20vYXBpL3YyL3ZpZGVvLycgKyB2aWRlby5pZCArICcuanNvbicsXG5cdFx0XHRcdGpzb25wOiAnY2FsbGJhY2snLFxuXHRcdFx0XHRkYXRhVHlwZTogJ2pzb25wJyxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0XHRcdHBhdGggPSBkYXRhWzBdLnRodW1ibmFpbF9sYXJnZTtcblx0XHRcdFx0XHRjcmVhdGUocGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSBpZiAodmlkZW8udHlwZSA9PT0gJ3Z6YWFyJykge1xuXHRcdFx0JC5hamF4KHtcblx0XHRcdFx0dHlwZTogJ0dFVCcsXG5cdFx0XHRcdHVybDogJy8vdnphYXIuY29tL2FwaS92aWRlb3MvJyArIHZpZGVvLmlkICsgJy5qc29uJyxcblx0XHRcdFx0anNvbnA6ICdjYWxsYmFjaycsXG5cdFx0XHRcdGRhdGFUeXBlOiAnanNvbnAnLFxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XG5cdFx0XHRcdFx0cGF0aCA9IGRhdGEuZnJhbWVncmFiX3VybDtcblx0XHRcdFx0XHRjcmVhdGUocGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogU3RvcHMgdGhlIGN1cnJlbnQgdmlkZW8uXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdFZpZGVvLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdzdG9wJywgbnVsbCwgJ3ZpZGVvJyk7XG5cdFx0dGhpcy5fcGxheWluZy5maW5kKCcub3dsLXZpZGVvLWZyYW1lJykucmVtb3ZlKCk7XG5cdFx0dGhpcy5fcGxheWluZy5yZW1vdmVDbGFzcygnb3dsLXZpZGVvLXBsYXlpbmcnKTtcblx0XHR0aGlzLl9wbGF5aW5nID0gbnVsbDtcblx0XHR0aGlzLl9jb3JlLmxlYXZlKCdwbGF5aW5nJyk7XG5cdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdzdG9wcGVkJywgbnVsbCwgJ3ZpZGVvJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFN0YXJ0cyB0aGUgY3VycmVudCB2aWRlby5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge0V2ZW50fSBldmVudCAtIFRoZSBldmVudCBhcmd1bWVudHMuXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0dmFyIHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KSxcblx0XHRcdGl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnLicgKyB0aGlzLl9jb3JlLnNldHRpbmdzLml0ZW1DbGFzcyksXG5cdFx0XHR2aWRlbyA9IHRoaXMuX3ZpZGVvc1tpdGVtLmF0dHIoJ2RhdGEtdmlkZW8nKV0sXG5cdFx0XHR3aWR0aCA9IHZpZGVvLndpZHRoIHx8ICcxMDAlJyxcblx0XHRcdGhlaWdodCA9IHZpZGVvLmhlaWdodCB8fCB0aGlzLl9jb3JlLiRzdGFnZS5oZWlnaHQoKSxcblx0XHRcdGh0bWw7XG5cblx0XHRpZiAodGhpcy5fcGxheWluZykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NvcmUuZW50ZXIoJ3BsYXlpbmcnKTtcblx0XHR0aGlzLl9jb3JlLnRyaWdnZXIoJ3BsYXknLCBudWxsLCAndmlkZW8nKTtcblxuXHRcdGl0ZW0gPSB0aGlzLl9jb3JlLml0ZW1zKHRoaXMuX2NvcmUucmVsYXRpdmUoaXRlbS5pbmRleCgpKSk7XG5cblx0XHR0aGlzLl9jb3JlLnJlc2V0KGl0ZW0uaW5kZXgoKSk7XG5cblx0XHRpZiAodmlkZW8udHlwZSA9PT0gJ3lvdXR1YmUnKSB7XG5cdFx0XHRodG1sID0gJzxpZnJhbWUgd2lkdGg9XCInICsgd2lkdGggKyAnXCIgaGVpZ2h0PVwiJyArIGhlaWdodCArICdcIiBzcmM9XCIvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICtcblx0XHRcdFx0dmlkZW8uaWQgKyAnP2F1dG9wbGF5PTEmdj0nICsgdmlkZW8uaWQgKyAnXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XG5cdFx0fSBlbHNlIGlmICh2aWRlby50eXBlID09PSAndmltZW8nKSB7XG5cdFx0XHRodG1sID0gJzxpZnJhbWUgc3JjPVwiLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLycgKyB2aWRlby5pZCArXG5cdFx0XHRcdCc/YXV0b3BsYXk9MVwiIHdpZHRoPVwiJyArIHdpZHRoICsgJ1wiIGhlaWdodD1cIicgKyBoZWlnaHQgK1xuXHRcdFx0XHQnXCIgZnJhbWVib3JkZXI9XCIwXCIgd2Via2l0YWxsb3dmdWxsc2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+Jztcblx0XHR9IGVsc2UgaWYgKHZpZGVvLnR5cGUgPT09ICd2emFhcicpIHtcblx0XHRcdGh0bWwgPSAnPGlmcmFtZSBmcmFtZWJvcmRlcj1cIjBcIicgKyAnaGVpZ2h0PVwiJyArIGhlaWdodCArICdcIicgKyAnd2lkdGg9XCInICsgd2lkdGggK1xuXHRcdFx0XHQnXCIgYWxsb3dmdWxsc2NyZWVuIG1vemFsbG93ZnVsbHNjcmVlbiB3ZWJraXRBbGxvd0Z1bGxTY3JlZW4gJyArXG5cdFx0XHRcdCdzcmM9XCIvL3ZpZXcudnphYXIuY29tLycgKyB2aWRlby5pZCArICcvcGxheWVyP2F1dG9wbGF5PXRydWVcIj48L2lmcmFtZT4nO1xuXHRcdH1cblxuXHRcdCQoJzxkaXYgY2xhc3M9XCJvd2wtdmlkZW8tZnJhbWVcIj4nICsgaHRtbCArICc8L2Rpdj4nKS5pbnNlcnRBZnRlcihpdGVtLmZpbmQoJy5vd2wtdmlkZW8nKSk7XG5cblx0XHR0aGlzLl9wbGF5aW5nID0gaXRlbS5hZGRDbGFzcygnb3dsLXZpZGVvLXBsYXlpbmcnKTtcblx0fTtcblxuXHQvKipcblx0ICogQ2hlY2tzIHdoZXRoZXIgYW4gdmlkZW8gaXMgY3VycmVudGx5IGluIGZ1bGwgc2NyZWVuIG1vZGUgb3Igbm90LlxuXHQgKiBAdG9kbyBCYWQgc3R5bGUgYmVjYXVzZSBsb29rcyBsaWtlIGEgcmVhZG9ubHkgbWV0aG9kIGJ1dCBjaGFuZ2VzIG1lbWJlcnMuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHJldHVybnMge0Jvb2xlYW59XG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUuaXNJbkZ1bGxTY3JlZW4gPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgZWxlbWVudCA9IGRvY3VtZW50LmZ1bGxzY3JlZW5FbGVtZW50IHx8IGRvY3VtZW50Lm1vekZ1bGxTY3JlZW5FbGVtZW50IHx8XG5cdFx0XHRcdGRvY3VtZW50LndlYmtpdEZ1bGxzY3JlZW5FbGVtZW50O1xuXG5cdFx0cmV0dXJuIGVsZW1lbnQgJiYgJChlbGVtZW50KS5wYXJlbnQoKS5oYXNDbGFzcygnb3dsLXZpZGVvLWZyYW1lJyk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqL1xuXHRWaWRlby5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKCdjbGljay5vd2wudmlkZW8nKTtcblxuXHRcdGZvciAoaGFuZGxlciBpbiB0aGlzLl9oYW5kbGVycykge1xuXHRcdFx0dGhpcy5fY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5faGFuZGxlcnNbaGFuZGxlcl0pO1xuXHRcdH1cblx0XHRmb3IgKHByb3BlcnR5IGluIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG5cdFx0XHR0eXBlb2YgdGhpc1twcm9wZXJ0eV0gIT0gJ2Z1bmN0aW9uJyAmJiAodGhpc1twcm9wZXJ0eV0gPSBudWxsKTtcblx0XHR9XG5cdH07XG5cblx0JC5mbi5vd2xDYXJvdXNlbC5Db25zdHJ1Y3Rvci5QbHVnaW5zLlZpZGVvID0gVmlkZW87XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBBbmltYXRlIFBsdWdpblxuICogQHZlcnNpb24gMi4xLjBcbiAqIEBhdXRob3IgQmFydG9zeiBXb2pjaWVjaG93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBhbmltYXRlIHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBOYXZpZ2F0aW9uIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gc2NvcGUgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgQW5pbWF0ZSA9IGZ1bmN0aW9uKHNjb3BlKSB7XG5cdFx0dGhpcy5jb3JlID0gc2NvcGU7XG5cdFx0dGhpcy5jb3JlLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQW5pbWF0ZS5EZWZhdWx0cywgdGhpcy5jb3JlLm9wdGlvbnMpO1xuXHRcdHRoaXMuc3dhcHBpbmcgPSB0cnVlO1xuXHRcdHRoaXMucHJldmlvdXMgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy5uZXh0ID0gdW5kZWZpbmVkO1xuXG5cdFx0dGhpcy5oYW5kbGVycyA9IHtcblx0XHRcdCdjaGFuZ2Uub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT0gJ3Bvc2l0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMucHJldmlvdXMgPSB0aGlzLmNvcmUuY3VycmVudCgpO1xuXHRcdFx0XHRcdHRoaXMubmV4dCA9IGUucHJvcGVydHkudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2RyYWcub3dsLmNhcm91c2VsIGRyYWdnZWQub3dsLmNhcm91c2VsIHRyYW5zbGF0ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHRoaXMuc3dhcHBpbmcgPSBlLnR5cGUgPT0gJ3RyYW5zbGF0ZWQnO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCd0cmFuc2xhdGUub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLnN3YXBwaW5nICYmICh0aGlzLmNvcmUub3B0aW9ucy5hbmltYXRlT3V0IHx8IHRoaXMuY29yZS5vcHRpb25zLmFuaW1hdGVJbikpIHtcblx0XHRcdFx0XHR0aGlzLnN3YXAoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0dGhpcy5jb3JlLiRlbGVtZW50Lm9uKHRoaXMuaGFuZGxlcnMpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZWZhdWx0IG9wdGlvbnMuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEFuaW1hdGUuRGVmYXVsdHMgPSB7XG5cdFx0YW5pbWF0ZU91dDogZmFsc2UsXG5cdFx0YW5pbWF0ZUluOiBmYWxzZVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBUb2dnbGVzIHRoZSBhbmltYXRpb24gY2xhc3NlcyB3aGVuZXZlciBhbiB0cmFuc2xhdGlvbnMgc3RhcnRzLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtCb29sZWFufHVuZGVmaW5lZH1cblx0ICovXG5cdEFuaW1hdGUucHJvdG90eXBlLnN3YXAgPSBmdW5jdGlvbigpIHtcblxuXHRcdGlmICh0aGlzLmNvcmUuc2V0dGluZ3MuaXRlbXMgIT09IDEpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoISQuc3VwcG9ydC5hbmltYXRpb24gfHwgISQuc3VwcG9ydC50cmFuc2l0aW9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dGhpcy5jb3JlLnNwZWVkKDApO1xuXG5cdFx0dmFyIGxlZnQsXG5cdFx0XHRjbGVhciA9ICQucHJveHkodGhpcy5jbGVhciwgdGhpcyksXG5cdFx0XHRwcmV2aW91cyA9IHRoaXMuY29yZS4kc3RhZ2UuY2hpbGRyZW4oKS5lcSh0aGlzLnByZXZpb3VzKSxcblx0XHRcdG5leHQgPSB0aGlzLmNvcmUuJHN0YWdlLmNoaWxkcmVuKCkuZXEodGhpcy5uZXh0KSxcblx0XHRcdGluY29taW5nID0gdGhpcy5jb3JlLnNldHRpbmdzLmFuaW1hdGVJbixcblx0XHRcdG91dGdvaW5nID0gdGhpcy5jb3JlLnNldHRpbmdzLmFuaW1hdGVPdXQ7XG5cblx0XHRpZiAodGhpcy5jb3JlLmN1cnJlbnQoKSA9PT0gdGhpcy5wcmV2aW91cykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChvdXRnb2luZykge1xuXHRcdFx0bGVmdCA9IHRoaXMuY29yZS5jb29yZGluYXRlcyh0aGlzLnByZXZpb3VzKSAtIHRoaXMuY29yZS5jb29yZGluYXRlcyh0aGlzLm5leHQpO1xuXHRcdFx0cHJldmlvdXMub25lKCQuc3VwcG9ydC5hbmltYXRpb24uZW5kLCBjbGVhcilcblx0XHRcdFx0LmNzcyggeyAnbGVmdCc6IGxlZnQgKyAncHgnIH0gKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2FuaW1hdGVkIG93bC1hbmltYXRlZC1vdXQnKVxuXHRcdFx0XHQuYWRkQ2xhc3Mob3V0Z29pbmcpO1xuXHRcdH1cblxuXHRcdGlmIChpbmNvbWluZykge1xuXHRcdFx0bmV4dC5vbmUoJC5zdXBwb3J0LmFuaW1hdGlvbi5lbmQsIGNsZWFyKVxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2FuaW1hdGVkIG93bC1hbmltYXRlZC1pbicpXG5cdFx0XHRcdC5hZGRDbGFzcyhpbmNvbWluZyk7XG5cdFx0fVxuXHR9O1xuXG5cdEFuaW1hdGUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24oZSkge1xuXHRcdCQoZS50YXJnZXQpLmNzcyggeyAnbGVmdCc6ICcnIH0gKVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdhbmltYXRlZCBvd2wtYW5pbWF0ZWQtb3V0IG93bC1hbmltYXRlZC1pbicpXG5cdFx0XHQucmVtb3ZlQ2xhc3ModGhpcy5jb3JlLnNldHRpbmdzLmFuaW1hdGVJbilcblx0XHRcdC5yZW1vdmVDbGFzcyh0aGlzLmNvcmUuc2V0dGluZ3MuYW5pbWF0ZU91dCk7XG5cdFx0dGhpcy5jb3JlLm9uVHJhbnNpdGlvbkVuZCgpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBEZXN0cm95cyB0aGUgcGx1Z2luLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBbmltYXRlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhhbmRsZXIsIHByb3BlcnR5O1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuaGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuY29yZS4kZWxlbWVudC5vZmYoaGFuZGxlciwgdGhpcy5oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuQW5pbWF0ZSA9IEFuaW1hdGU7XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBBdXRvcGxheSBQbHVnaW5cbiAqIEB2ZXJzaW9uIDIuMS4wXG4gKiBAYXV0aG9yIEJhcnRvc3ogV29qY2llY2hvd3NraVxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBhdXRvcGxheSBwbHVnaW4uXG5cdCAqIEBjbGFzcyBUaGUgQXV0b3BsYXkgUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBzY29wZSAtIFRoZSBPd2wgQ2Fyb3VzZWxcblx0ICovXG5cdHZhciBBdXRvcGxheSA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBhdXRvcGxheSB0aW1lb3V0LlxuXHRcdCAqIEB0eXBlIHtUaW1lb3V0fVxuXHRcdCAqL1xuXHRcdHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuXG5cdFx0LyoqXG5cdFx0ICogSW5kaWNhdGVzIHdoZW5ldmVyIHRoZSBhdXRvcGxheSBpcyBwYXVzZWQuXG5cdFx0ICogQHR5cGUge0Jvb2xlYW59XG5cdFx0ICovXG5cdFx0dGhpcy5fcGF1c2VkID0gZmFsc2U7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnY2hhbmdlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PT0gJ3NldHRpbmdzJykge1xuXHRcdFx0XHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGUubmFtZXNwYWNlICYmIGUucHJvcGVydHkubmFtZSA9PT0gJ3Bvc2l0aW9uJykge1xuXHRcdFx0XHRcdC8vY29uc29sZS5sb2coJ3BsYXk/JywgZSk7XG5cdFx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXkpIHtcblx0XHRcdFx0XHRcdHRoaXMuX3NldEF1dG9QbGF5SW50ZXJ2YWwoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2luaXRpYWxpemVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheSkge1xuXHRcdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdwbGF5Lm93bC5hdXRvcGxheSc6ICQucHJveHkoZnVuY3Rpb24oZSwgdCwgcykge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXkodCwgcyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3N0b3Aub3dsLmF1dG9wbGF5JzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSkge1xuXHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdtb3VzZW92ZXIub3dsLmF1dG9wbGF5JzogJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlICYmIHRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdFx0XHR0aGlzLnBhdXNlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J21vdXNlbGVhdmUub3dsLmF1dG9wbGF5JzogJC5wcm94eShmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlIb3ZlclBhdXNlICYmIHRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdFx0XHR0aGlzLnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQndG91Y2hzdGFydC5vd2wuY29yZSc6ICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5SG92ZXJQYXVzZSAmJiB0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG5cdFx0XHRcdFx0dGhpcy5wYXVzZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCd0b3VjaGVuZC5vd2wuY29yZSc6ICQucHJveHkoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICh0aGlzLl9jb3JlLnNldHRpbmdzLmF1dG9wbGF5SG92ZXJQYXVzZSkge1xuXHRcdFx0XHRcdHRoaXMucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyByZWdpc3RlciBldmVudCBoYW5kbGVyc1xuXHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub24odGhpcy5faGFuZGxlcnMpO1xuXG5cdFx0Ly8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBBdXRvcGxheS5EZWZhdWx0cywgdGhpcy5fY29yZS5vcHRpb25zKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqL1xuXHRBdXRvcGxheS5EZWZhdWx0cyA9IHtcblx0XHRhdXRvcGxheTogZmFsc2UsXG5cdFx0YXV0b3BsYXlUaW1lb3V0OiA1MDAwLFxuXHRcdGF1dG9wbGF5SG92ZXJQYXVzZTogZmFsc2UsXG5cdFx0YXV0b3BsYXlTcGVlZDogZmFsc2Vcblx0fTtcblxuXHQvKipcblx0ICogU3RhcnRzIHRoZSBhdXRvcGxheS5cblx0ICogQHB1YmxpY1xuXHQgKiBAcGFyYW0ge051bWJlcn0gW3RpbWVvdXRdIC0gVGhlIGludGVydmFsIGJlZm9yZSB0aGUgbmV4dCBhbmltYXRpb24gc3RhcnRzLlxuXHQgKiBAcGFyYW0ge051bWJlcn0gW3NwZWVkXSAtIFRoZSBhbmltYXRpb24gc3BlZWQgZm9yIHRoZSBhbmltYXRpb25zLlxuXHQgKi9cblx0QXV0b3BsYXkucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbih0aW1lb3V0LCBzcGVlZCkge1xuXHRcdHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xuXG5cdFx0aWYgKHRoaXMuX2NvcmUuaXMoJ3JvdGF0aW5nJykpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR0aGlzLl9jb3JlLmVudGVyKCdyb3RhdGluZycpO1xuXG5cdFx0dGhpcy5fc2V0QXV0b1BsYXlJbnRlcnZhbCgpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIGEgbmV3IHRpbWVvdXRcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IFt0aW1lb3V0XSAtIFRoZSBpbnRlcnZhbCBiZWZvcmUgdGhlIG5leHQgYW5pbWF0aW9uIHN0YXJ0cy5cblx0ICogQHBhcmFtIHtOdW1iZXJ9IFtzcGVlZF0gLSBUaGUgYW5pbWF0aW9uIHNwZWVkIGZvciB0aGUgYW5pbWF0aW9ucy5cblx0ICogQHJldHVybiB7VGltZW91dH1cblx0ICovXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5fZ2V0TmV4dFRpbWVvdXQgPSBmdW5jdGlvbih0aW1lb3V0LCBzcGVlZCkge1xuXHRcdGlmICggdGhpcy5fdGltZW91dCApIHtcblx0XHRcdHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fdGltZW91dCk7XG5cdFx0fVxuXHRcdHJldHVybiB3aW5kb3cuc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKHRoaXMuX3BhdXNlZCB8fCB0aGlzLl9jb3JlLmlzKCdidXN5JykgfHwgdGhpcy5fY29yZS5pcygnaW50ZXJhY3RpbmcnKSB8fCBkb2N1bWVudC5oaWRkZW4pIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY29yZS5uZXh0KHNwZWVkIHx8IHRoaXMuX2NvcmUuc2V0dGluZ3MuYXV0b3BsYXlTcGVlZCk7XG5cdFx0fSwgdGhpcyksIHRpbWVvdXQgfHwgdGhpcy5fY29yZS5zZXR0aW5ncy5hdXRvcGxheVRpbWVvdXQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTZXRzIGF1dG9wbGF5IGluIG1vdGlvbi5cblx0ICogQHByaXZhdGVcblx0ICovXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5fc2V0QXV0b1BsYXlJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX3RpbWVvdXQgPSB0aGlzLl9nZXROZXh0VGltZW91dCgpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdG9wcyB0aGUgYXV0b3BsYXkuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF0aGlzLl9jb3JlLmlzKCdyb3RhdGluZycpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0d2luZG93LmNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcblx0XHR0aGlzLl9jb3JlLmxlYXZlKCdyb3RhdGluZycpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTdG9wcyB0aGUgYXV0b3BsYXkuXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEF1dG9wbGF5LnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy5fY29yZS5pcygncm90YXRpbmcnKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHRoaXMuX3BhdXNlZCA9IHRydWU7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqL1xuXHRBdXRvcGxheS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBwcm9wZXJ0eTtcblxuXHRcdHRoaXMuc3RvcCgpO1xuXG5cdFx0Zm9yIChoYW5kbGVyIGluIHRoaXMuX2hhbmRsZXJzKSB7XG5cdFx0XHR0aGlzLl9jb3JlLiRlbGVtZW50Lm9mZihoYW5kbGVyLCB0aGlzLl9oYW5kbGVyc1toYW5kbGVyXSk7XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuYXV0b3BsYXkgPSBBdXRvcGxheTtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIE5hdmlnYXRpb24gUGx1Z2luXG4gKiBAdmVyc2lvbiAyLjEuMFxuICogQGF1dGhvciBBcnR1cyBLb2xhbm93c2tpXG4gKiBAYXV0aG9yIERhdmlkIERldXRzY2hcbiAqIEBsaWNlbnNlIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICovXG47KGZ1bmN0aW9uKCQsIHdpbmRvdywgZG9jdW1lbnQsIHVuZGVmaW5lZCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgdGhlIG5hdmlnYXRpb24gcGx1Z2luLlxuXHQgKiBAY2xhc3MgVGhlIE5hdmlnYXRpb24gUGx1Z2luXG5cdCAqIEBwYXJhbSB7T3dsfSBjYXJvdXNlbCAtIFRoZSBPd2wgQ2Fyb3VzZWwuXG5cdCAqL1xuXHR2YXIgTmF2aWdhdGlvbiA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBwbHVnaW4gaXMgaW5pdGlhbGl6ZWQgb3Igbm90LlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7Qm9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuXG5cdFx0LyoqXG5cdFx0ICogVGhlIGN1cnJlbnQgcGFnaW5nIGluZGV4ZXMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtBcnJheX1cblx0XHQgKi9cblx0XHR0aGlzLl9wYWdlcyA9IFtdO1xuXG5cdFx0LyoqXG5cdFx0ICogQWxsIERPTSBlbGVtZW50cyBvZiB0aGUgdXNlciBpbnRlcmZhY2UuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5fY29udHJvbHMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIE1hcmt1cCBmb3IgYW4gaW5kaWNhdG9yLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7QXJyYXkuPFN0cmluZz59XG5cdFx0ICovXG5cdFx0dGhpcy5fdGVtcGxhdGVzID0gW107XG5cblx0XHQvKipcblx0XHQgKiBUaGUgY2Fyb3VzZWwgZWxlbWVudC5cblx0XHQgKiBAdHlwZSB7alF1ZXJ5fVxuXHRcdCAqL1xuXHRcdHRoaXMuJGVsZW1lbnQgPSB0aGlzLl9jb3JlLiRlbGVtZW50O1xuXG5cdFx0LyoqXG5cdFx0ICogT3ZlcnJpZGRlbiBtZXRob2RzIG9mIHRoZSBjYXJvdXNlbC5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9vdmVycmlkZXMgPSB7XG5cdFx0XHRuZXh0OiB0aGlzLl9jb3JlLm5leHQsXG5cdFx0XHRwcmV2OiB0aGlzLl9jb3JlLnByZXYsXG5cdFx0XHR0bzogdGhpcy5fY29yZS50b1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQncHJlcGFyZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLmRvdHNEYXRhKSB7XG5cdFx0XHRcdFx0dGhpcy5fdGVtcGxhdGVzLnB1c2goJzxkaXYgY2xhc3M9XCInICsgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RDbGFzcyArICdcIj4nICtcblx0XHRcdFx0XHRcdCQoZS5jb250ZW50KS5maW5kKCdbZGF0YS1kb3RdJykuYWRkQmFjaygnW2RhdGEtZG90XScpLmF0dHIoJ2RhdGEtZG90JykgKyAnPC9kaXY+Jyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2FkZGVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RzRGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5zcGxpY2UoZS5wb3NpdGlvbiwgMCwgdGhpcy5fdGVtcGxhdGVzLnBvcCgpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyksXG5cdFx0XHQncmVtb3ZlLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UgJiYgdGhpcy5fY29yZS5zZXR0aW5ncy5kb3RzRGF0YSkge1xuXHRcdFx0XHRcdHRoaXMuX3RlbXBsYXRlcy5zcGxpY2UoZS5wb3NpdGlvbiwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT0gJ3Bvc2l0aW9uJykge1xuXHRcdFx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKSxcblx0XHRcdCdpbml0aWFsaXplZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmICF0aGlzLl9pbml0aWFsaXplZCkge1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcignaW5pdGlhbGl6ZScsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdFx0dGhpcy5pbml0aWFsaXplKCk7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0XHR0aGlzLmRyYXcoKTtcblx0XHRcdFx0XHR0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdpbml0aWFsaXplZCcsIG51bGwsICduYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3JlZnJlc2hlZC5vd2wuY2Fyb3VzZWwnOiAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0aWYgKGUubmFtZXNwYWNlICYmIHRoaXMuX2luaXRpYWxpemVkKSB7XG5cdFx0XHRcdFx0dGhpcy5fY29yZS50cmlnZ2VyKCdyZWZyZXNoJywgbnVsbCwgJ25hdmlnYXRpb24nKTtcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdFx0XHRcdHRoaXMuZHJhdygpO1xuXHRcdFx0XHRcdHRoaXMuX2NvcmUudHJpZ2dlcigncmVmcmVzaGVkJywgbnVsbCwgJ25hdmlnYXRpb24nKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcylcblx0XHR9O1xuXG5cdFx0Ly8gc2V0IGRlZmF1bHQgb3B0aW9uc1xuXHRcdHRoaXMuX2NvcmUub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBOYXZpZ2F0aW9uLkRlZmF1bHRzLCB0aGlzLl9jb3JlLm9wdGlvbnMpO1xuXG5cdFx0Ly8gcmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblx0fTtcblxuXHQvKipcblx0ICogRGVmYXVsdCBvcHRpb25zLlxuXHQgKiBAcHVibGljXG5cdCAqIEB0b2RvIFJlbmFtZSBgc2xpZGVCeWAgdG8gYG5hdkJ5YFxuXHQgKi9cblx0TmF2aWdhdGlvbi5EZWZhdWx0cyA9IHtcblx0XHRuYXY6IGZhbHNlLFxuXHRcdG5hdlRleHQ6IFsgJ3ByZXYnLCAnbmV4dCcgXSxcblx0XHRuYXZTcGVlZDogZmFsc2UsXG5cdFx0bmF2RWxlbWVudDogJ2RpdicsXG5cdFx0bmF2Q29udGFpbmVyOiBmYWxzZSxcblx0XHRuYXZDb250YWluZXJDbGFzczogJ293bC1uYXYnLFxuXHRcdG5hdkNsYXNzOiBbICdvd2wtcHJldicsICdvd2wtbmV4dCcgXSxcblx0XHRzbGlkZUJ5OiAxLFxuXHRcdGRvdENsYXNzOiAnb3dsLWRvdCcsXG5cdFx0ZG90c0NsYXNzOiAnb3dsLWRvdHMnLFxuXHRcdGRvdHM6IHRydWUsXG5cdFx0ZG90c0VhY2g6IGZhbHNlLFxuXHRcdGRvdHNEYXRhOiBmYWxzZSxcblx0XHRkb3RzU3BlZWQ6IGZhbHNlLFxuXHRcdGRvdHNDb250YWluZXI6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIEluaXRpYWxpemVzIHRoZSBsYXlvdXQgb2YgdGhlIHBsdWdpbiBhbmQgZXh0ZW5kcyB0aGUgY2Fyb3VzZWwuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLmluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgb3ZlcnJpZGUsXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3M7XG5cblx0XHQvLyBjcmVhdGUgRE9NIHN0cnVjdHVyZSBmb3IgcmVsYXRpdmUgbmF2aWdhdGlvblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRyZWxhdGl2ZSA9IChzZXR0aW5ncy5uYXZDb250YWluZXIgPyAkKHNldHRpbmdzLm5hdkNvbnRhaW5lcilcblx0XHRcdDogJCgnPGRpdj4nKS5hZGRDbGFzcyhzZXR0aW5ncy5uYXZDb250YWluZXJDbGFzcykuYXBwZW5kVG8odGhpcy4kZWxlbWVudCkpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXG5cdFx0dGhpcy5fY29udHJvbHMuJHByZXZpb3VzID0gJCgnPCcgKyBzZXR0aW5ncy5uYXZFbGVtZW50ICsgJz4nKVxuXHRcdFx0LmFkZENsYXNzKHNldHRpbmdzLm5hdkNsYXNzWzBdKVxuXHRcdFx0Lmh0bWwoc2V0dGluZ3MubmF2VGV4dFswXSlcblx0XHRcdC5wcmVwZW5kVG8odGhpcy5fY29udHJvbHMuJHJlbGF0aXZlKVxuXHRcdFx0Lm9uKCdjbGljaycsICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHR0aGlzLnByZXYoc2V0dGluZ3MubmF2U3BlZWQpO1xuXHRcdFx0fSwgdGhpcykpO1xuXHRcdHRoaXMuX2NvbnRyb2xzLiRuZXh0ID0gJCgnPCcgKyBzZXR0aW5ncy5uYXZFbGVtZW50ICsgJz4nKVxuXHRcdFx0LmFkZENsYXNzKHNldHRpbmdzLm5hdkNsYXNzWzFdKVxuXHRcdFx0Lmh0bWwoc2V0dGluZ3MubmF2VGV4dFsxXSlcblx0XHRcdC5hcHBlbmRUbyh0aGlzLl9jb250cm9scy4kcmVsYXRpdmUpXG5cdFx0XHQub24oJ2NsaWNrJywgJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHRoaXMubmV4dChzZXR0aW5ncy5uYXZTcGVlZCk7XG5cdFx0XHR9LCB0aGlzKSk7XG5cblx0XHQvLyBjcmVhdGUgRE9NIHN0cnVjdHVyZSBmb3IgYWJzb2x1dGUgbmF2aWdhdGlvblxuXHRcdGlmICghc2V0dGluZ3MuZG90c0RhdGEpIHtcblx0XHRcdHRoaXMuX3RlbXBsYXRlcyA9IFsgJCgnPGRpdj4nKVxuXHRcdFx0XHQuYWRkQ2xhc3Moc2V0dGluZ3MuZG90Q2xhc3MpXG5cdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykpXG5cdFx0XHRcdC5wcm9wKCdvdXRlckhUTUwnKSBdO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZSA9IChzZXR0aW5ncy5kb3RzQ29udGFpbmVyID8gJChzZXR0aW5ncy5kb3RzQ29udGFpbmVyKVxuXHRcdFx0OiAkKCc8ZGl2PicpLmFkZENsYXNzKHNldHRpbmdzLmRvdHNDbGFzcykuYXBwZW5kVG8odGhpcy4kZWxlbWVudCkpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuXG5cdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLm9uKCdjbGljaycsICdkaXYnLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBpbmRleCA9ICQoZS50YXJnZXQpLnBhcmVudCgpLmlzKHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZSlcblx0XHRcdFx0PyAkKGUudGFyZ2V0KS5pbmRleCgpIDogJChlLnRhcmdldCkucGFyZW50KCkuaW5kZXgoKTtcblxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR0aGlzLnRvKGluZGV4LCBzZXR0aW5ncy5kb3RzU3BlZWQpO1xuXHRcdH0sIHRoaXMpKTtcblxuXHRcdC8vIG92ZXJyaWRlIHB1YmxpYyBtZXRob2RzIG9mIHRoZSBjYXJvdXNlbFxuXHRcdGZvciAob3ZlcnJpZGUgaW4gdGhpcy5fb3ZlcnJpZGVzKSB7XG5cdFx0XHR0aGlzLl9jb3JlW292ZXJyaWRlXSA9ICQucHJveHkodGhpc1tvdmVycmlkZV0sIHRoaXMpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRGVzdHJveXMgdGhlIHBsdWdpbi5cblx0ICogQHByb3RlY3RlZFxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBoYW5kbGVyLCBjb250cm9sLCBwcm9wZXJ0eSwgb3ZlcnJpZGU7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChjb250cm9sIGluIHRoaXMuX2NvbnRyb2xzKSB7XG5cdFx0XHR0aGlzLl9jb250cm9sc1tjb250cm9sXS5yZW1vdmUoKTtcblx0XHR9XG5cdFx0Zm9yIChvdmVycmlkZSBpbiB0aGlzLm92ZXJpZGVzKSB7XG5cdFx0XHR0aGlzLl9jb3JlW292ZXJyaWRlXSA9IHRoaXMuX292ZXJyaWRlc1tvdmVycmlkZV07XG5cdFx0fVxuXHRcdGZvciAocHJvcGVydHkgaW4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcykpIHtcblx0XHRcdHR5cGVvZiB0aGlzW3Byb3BlcnR5XSAhPSAnZnVuY3Rpb24nICYmICh0aGlzW3Byb3BlcnR5XSA9IG51bGwpO1xuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogVXBkYXRlcyB0aGUgaW50ZXJuYWwgc3RhdGUuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBpLCBqLCBrLFxuXHRcdFx0bG93ZXIgPSB0aGlzLl9jb3JlLmNsb25lcygpLmxlbmd0aCAvIDIsXG5cdFx0XHR1cHBlciA9IGxvd2VyICsgdGhpcy5fY29yZS5pdGVtcygpLmxlbmd0aCxcblx0XHRcdG1heGltdW0gPSB0aGlzLl9jb3JlLm1heGltdW0odHJ1ZSksXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRzaXplID0gc2V0dGluZ3MuY2VudGVyIHx8IHNldHRpbmdzLmF1dG9XaWR0aCB8fCBzZXR0aW5ncy5kb3RzRGF0YVxuXHRcdFx0XHQ/IDEgOiBzZXR0aW5ncy5kb3RzRWFjaCB8fCBzZXR0aW5ncy5pdGVtcztcblxuXHRcdGlmIChzZXR0aW5ncy5zbGlkZUJ5ICE9PSAncGFnZScpIHtcblx0XHRcdHNldHRpbmdzLnNsaWRlQnkgPSBNYXRoLm1pbihzZXR0aW5ncy5zbGlkZUJ5LCBzZXR0aW5ncy5pdGVtcyk7XG5cdFx0fVxuXG5cdFx0aWYgKHNldHRpbmdzLmRvdHMgfHwgc2V0dGluZ3Muc2xpZGVCeSA9PSAncGFnZScpIHtcblx0XHRcdHRoaXMuX3BhZ2VzID0gW107XG5cblx0XHRcdGZvciAoaSA9IGxvd2VyLCBqID0gMCwgayA9IDA7IGkgPCB1cHBlcjsgaSsrKSB7XG5cdFx0XHRcdGlmIChqID49IHNpemUgfHwgaiA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMuX3BhZ2VzLnB1c2goe1xuXHRcdFx0XHRcdFx0c3RhcnQ6IE1hdGgubWluKG1heGltdW0sIGkgLSBsb3dlciksXG5cdFx0XHRcdFx0XHRlbmQ6IGkgLSBsb3dlciArIHNpemUgLSAxXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0aWYgKE1hdGgubWluKG1heGltdW0sIGkgLSBsb3dlcikgPT09IG1heGltdW0pIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRqID0gMCwgKytrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGogKz0gdGhpcy5fY29yZS5tZXJnZXJzKHRoaXMuX2NvcmUucmVsYXRpdmUoaSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogRHJhd3MgdGhlIHVzZXIgaW50ZXJmYWNlLlxuXHQgKiBAdG9kbyBUaGUgb3B0aW9uIGBkb3RzRGF0YWAgd29udCB3b3JrLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGRpZmZlcmVuY2UsXG5cdFx0XHRzZXR0aW5ncyA9IHRoaXMuX2NvcmUuc2V0dGluZ3MsXG5cdFx0XHRkaXNhYmxlZCA9IHRoaXMuX2NvcmUuaXRlbXMoKS5sZW5ndGggPD0gc2V0dGluZ3MuaXRlbXMsXG5cdFx0XHRpbmRleCA9IHRoaXMuX2NvcmUucmVsYXRpdmUodGhpcy5fY29yZS5jdXJyZW50KCkpLFxuXHRcdFx0bG9vcCA9IHNldHRpbmdzLmxvb3AgfHwgc2V0dGluZ3MucmV3aW5kO1xuXG5cdFx0dGhpcy5fY29udHJvbHMuJHJlbGF0aXZlLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFzZXR0aW5ncy5uYXYgfHwgZGlzYWJsZWQpO1xuXG5cdFx0aWYgKHNldHRpbmdzLm5hdikge1xuXHRcdFx0dGhpcy5fY29udHJvbHMuJHByZXZpb3VzLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsICFsb29wICYmIGluZGV4IDw9IHRoaXMuX2NvcmUubWluaW11bSh0cnVlKSk7XG5cdFx0XHR0aGlzLl9jb250cm9scy4kbmV4dC50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCAhbG9vcCAmJiBpbmRleCA+PSB0aGlzLl9jb3JlLm1heGltdW0odHJ1ZSkpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS50b2dnbGVDbGFzcygnZGlzYWJsZWQnLCAhc2V0dGluZ3MuZG90cyB8fCBkaXNhYmxlZCk7XG5cblx0XHRpZiAoc2V0dGluZ3MuZG90cykge1xuXHRcdFx0ZGlmZmVyZW5jZSA9IHRoaXMuX3BhZ2VzLmxlbmd0aCAtIHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLmxlbmd0aDtcblxuXHRcdFx0aWYgKHNldHRpbmdzLmRvdHNEYXRhICYmIGRpZmZlcmVuY2UgIT09IDApIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmh0bWwodGhpcy5fdGVtcGxhdGVzLmpvaW4oJycpKTtcblx0XHRcdH0gZWxzZSBpZiAoZGlmZmVyZW5jZSA+IDApIHtcblx0XHRcdFx0dGhpcy5fY29udHJvbHMuJGFic29sdXRlLmFwcGVuZChuZXcgQXJyYXkoZGlmZmVyZW5jZSArIDEpLmpvaW4odGhpcy5fdGVtcGxhdGVzWzBdKSk7XG5cdFx0XHR9IGVsc2UgaWYgKGRpZmZlcmVuY2UgPCAwKSB7XG5cdFx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLnNsaWNlKGRpZmZlcmVuY2UpLnJlbW92ZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLl9jb250cm9scy4kYWJzb2x1dGUuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdHRoaXMuX2NvbnRyb2xzLiRhYnNvbHV0ZS5jaGlsZHJlbigpLmVxKCQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBFeHRlbmRzIGV2ZW50IGRhdGEuXG5cdCAqIEBwcm90ZWN0ZWRcblx0ICogQHBhcmFtIHtFdmVudH0gZXZlbnQgLSBUaGUgZXZlbnQgb2JqZWN0IHdoaWNoIGdldHMgdGhyb3duLlxuXHQgKi9cblx0TmF2aWdhdGlvbi5wcm90b3R5cGUub25UcmlnZ2VyID0gZnVuY3Rpb24oZXZlbnQpIHtcblx0XHR2YXIgc2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0ZXZlbnQucGFnZSA9IHtcblx0XHRcdGluZGV4OiAkLmluQXJyYXkodGhpcy5jdXJyZW50KCksIHRoaXMuX3BhZ2VzKSxcblx0XHRcdGNvdW50OiB0aGlzLl9wYWdlcy5sZW5ndGgsXG5cdFx0XHRzaXplOiBzZXR0aW5ncyAmJiAoc2V0dGluZ3MuY2VudGVyIHx8IHNldHRpbmdzLmF1dG9XaWR0aCB8fCBzZXR0aW5ncy5kb3RzRGF0YVxuXHRcdFx0XHQ/IDEgOiBzZXR0aW5ncy5kb3RzRWFjaCB8fCBzZXR0aW5ncy5pdGVtcylcblx0XHR9O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBjdXJyZW50IHBhZ2UgcG9zaXRpb24gb2YgdGhlIGNhcm91c2VsLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5jdXJyZW50ID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGN1cnJlbnQgPSB0aGlzLl9jb3JlLnJlbGF0aXZlKHRoaXMuX2NvcmUuY3VycmVudCgpKTtcblx0XHRyZXR1cm4gJC5ncmVwKHRoaXMuX3BhZ2VzLCAkLnByb3h5KGZ1bmN0aW9uKHBhZ2UsIGluZGV4KSB7XG5cdFx0XHRyZXR1cm4gcGFnZS5zdGFydCA8PSBjdXJyZW50ICYmIHBhZ2UuZW5kID49IGN1cnJlbnQ7XG5cdFx0fSwgdGhpcykpLnBvcCgpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBjdXJyZW50IHN1Y2Nlc29yL3ByZWRlY2Vzc29yIHBvc2l0aW9uLlxuXHQgKiBAcHJvdGVjdGVkXG5cdCAqIEByZXR1cm5zIHtOdW1iZXJ9XG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKHN1Y2Nlc3Nvcikge1xuXHRcdHZhciBwb3NpdGlvbiwgbGVuZ3RoLFxuXHRcdFx0c2V0dGluZ3MgPSB0aGlzLl9jb3JlLnNldHRpbmdzO1xuXG5cdFx0aWYgKHNldHRpbmdzLnNsaWRlQnkgPT0gJ3BhZ2UnKSB7XG5cdFx0XHRwb3NpdGlvbiA9ICQuaW5BcnJheSh0aGlzLmN1cnJlbnQoKSwgdGhpcy5fcGFnZXMpO1xuXHRcdFx0bGVuZ3RoID0gdGhpcy5fcGFnZXMubGVuZ3RoO1xuXHRcdFx0c3VjY2Vzc29yID8gKytwb3NpdGlvbiA6IC0tcG9zaXRpb247XG5cdFx0XHRwb3NpdGlvbiA9IHRoaXMuX3BhZ2VzWygocG9zaXRpb24gJSBsZW5ndGgpICsgbGVuZ3RoKSAlIGxlbmd0aF0uc3RhcnQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHBvc2l0aW9uID0gdGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSk7XG5cdFx0XHRsZW5ndGggPSB0aGlzLl9jb3JlLml0ZW1zKCkubGVuZ3RoO1xuXHRcdFx0c3VjY2Vzc29yID8gcG9zaXRpb24gKz0gc2V0dGluZ3Muc2xpZGVCeSA6IHBvc2l0aW9uIC09IHNldHRpbmdzLnNsaWRlQnk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvc2l0aW9uO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIG5leHQgaXRlbSBvciBwYWdlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWQ9ZmFsc2VdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLmdldFBvc2l0aW9uKHRydWUpLCBzcGVlZCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIFNsaWRlcyB0byB0aGUgcHJldmlvdXMgaXRlbSBvciBwYWdlLlxuXHQgKiBAcHVibGljXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWQ9ZmFsc2VdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICovXG5cdE5hdmlnYXRpb24ucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbihzcGVlZCkge1xuXHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLmdldFBvc2l0aW9uKGZhbHNlKSwgc3BlZWQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBTbGlkZXMgdG8gdGhlIHNwZWNpZmllZCBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwdWJsaWNcblx0ICogQHBhcmFtIHtOdW1iZXJ9IHBvc2l0aW9uIC0gVGhlIHBvc2l0aW9uIG9mIHRoZSBpdGVtIG9yIHBhZ2UuXG5cdCAqIEBwYXJhbSB7TnVtYmVyfSBbc3BlZWRdIC0gVGhlIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGZvciB0aGUgdHJhbnNpdGlvbi5cblx0ICogQHBhcmFtIHtCb29sZWFufSBbc3RhbmRhcmQ9ZmFsc2VdIC0gV2hldGhlciB0byB1c2UgdGhlIHN0YW5kYXJkIGJlaGF2aW91ciBvciBub3QuXG5cdCAqL1xuXHROYXZpZ2F0aW9uLnByb3RvdHlwZS50byA9IGZ1bmN0aW9uKHBvc2l0aW9uLCBzcGVlZCwgc3RhbmRhcmQpIHtcblx0XHR2YXIgbGVuZ3RoO1xuXG5cdFx0aWYgKCFzdGFuZGFyZCAmJiB0aGlzLl9wYWdlcy5sZW5ndGgpIHtcblx0XHRcdGxlbmd0aCA9IHRoaXMuX3BhZ2VzLmxlbmd0aDtcblx0XHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKSh0aGlzLl9wYWdlc1soKHBvc2l0aW9uICUgbGVuZ3RoKSArIGxlbmd0aCkgJSBsZW5ndGhdLnN0YXJ0LCBzcGVlZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCQucHJveHkodGhpcy5fb3ZlcnJpZGVzLnRvLCB0aGlzLl9jb3JlKShwb3NpdGlvbiwgc3BlZWQpO1xuXHRcdH1cblx0fTtcblxuXHQkLmZuLm93bENhcm91c2VsLkNvbnN0cnVjdG9yLlBsdWdpbnMuTmF2aWdhdGlvbiA9IE5hdmlnYXRpb247XG5cbn0pKHdpbmRvdy5aZXB0byB8fCB3aW5kb3cualF1ZXJ5LCB3aW5kb3csIGRvY3VtZW50KTtcblxuLyoqXG4gKiBIYXNoIFBsdWdpblxuICogQHZlcnNpb24gMi4xLjBcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIHRoZSBoYXNoIHBsdWdpbi5cblx0ICogQGNsYXNzIFRoZSBIYXNoIFBsdWdpblxuXHQgKiBAcGFyYW0ge093bH0gY2Fyb3VzZWwgLSBUaGUgT3dsIENhcm91c2VsXG5cdCAqL1xuXHR2YXIgSGFzaCA9IGZ1bmN0aW9uKGNhcm91c2VsKSB7XG5cdFx0LyoqXG5cdFx0ICogUmVmZXJlbmNlIHRvIHRoZSBjb3JlLlxuXHRcdCAqIEBwcm90ZWN0ZWRcblx0XHQgKiBAdHlwZSB7T3dsfVxuXHRcdCAqL1xuXHRcdHRoaXMuX2NvcmUgPSBjYXJvdXNlbDtcblxuXHRcdC8qKlxuXHRcdCAqIEhhc2ggaW5kZXggZm9yIHRoZSBpdGVtcy5cblx0XHQgKiBAcHJvdGVjdGVkXG5cdFx0ICogQHR5cGUge09iamVjdH1cblx0XHQgKi9cblx0XHR0aGlzLl9oYXNoZXMgPSB7fTtcblxuXHRcdC8qKlxuXHRcdCAqIFRoZSBjYXJvdXNlbCBlbGVtZW50LlxuXHRcdCAqIEB0eXBlIHtqUXVlcnl9XG5cdFx0ICovXG5cdFx0dGhpcy4kZWxlbWVudCA9IHRoaXMuX2NvcmUuJGVsZW1lbnQ7XG5cblx0XHQvKipcblx0XHQgKiBBbGwgZXZlbnQgaGFuZGxlcnMuXG5cdFx0ICogQHByb3RlY3RlZFxuXHRcdCAqIEB0eXBlIHtPYmplY3R9XG5cdFx0ICovXG5cdFx0dGhpcy5faGFuZGxlcnMgPSB7XG5cdFx0XHQnaW5pdGlhbGl6ZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiB0aGlzLl9jb3JlLnNldHRpbmdzLnN0YXJ0UG9zaXRpb24gPT09ICdVUkxIYXNoJykge1xuXHRcdFx0XHRcdCQod2luZG93KS50cmlnZ2VyKCdoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J3ByZXBhcmVkLm93bC5jYXJvdXNlbCc6ICQucHJveHkoZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoZS5uYW1lc3BhY2UpIHtcblx0XHRcdFx0XHR2YXIgaGFzaCA9ICQoZS5jb250ZW50KS5maW5kKCdbZGF0YS1oYXNoXScpLmFkZEJhY2soJ1tkYXRhLWhhc2hdJykuYXR0cignZGF0YS1oYXNoJyk7XG5cblx0XHRcdFx0XHRpZiAoIWhhc2gpIHtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLl9oYXNoZXNbaGFzaF0gPSBlLmNvbnRlbnQ7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpLFxuXHRcdFx0J2NoYW5nZWQub3dsLmNhcm91c2VsJzogJC5wcm94eShmdW5jdGlvbihlKSB7XG5cdFx0XHRcdGlmIChlLm5hbWVzcGFjZSAmJiBlLnByb3BlcnR5Lm5hbWUgPT09ICdwb3NpdGlvbicpIHtcblx0XHRcdFx0XHR2YXIgY3VycmVudCA9IHRoaXMuX2NvcmUuaXRlbXModGhpcy5fY29yZS5yZWxhdGl2ZSh0aGlzLl9jb3JlLmN1cnJlbnQoKSkpLFxuXHRcdFx0XHRcdFx0aGFzaCA9ICQubWFwKHRoaXMuX2hhc2hlcywgZnVuY3Rpb24oaXRlbSwgaGFzaCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaXRlbSA9PT0gY3VycmVudCA/IGhhc2ggOiBudWxsO1xuXHRcdFx0XHRcdFx0fSkuam9pbigpO1xuXG5cdFx0XHRcdFx0aWYgKCFoYXNoIHx8IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnNsaWNlKDEpID09PSBoYXNoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKVxuXHRcdH07XG5cblx0XHQvLyBzZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0dGhpcy5fY29yZS5vcHRpb25zID0gJC5leHRlbmQoe30sIEhhc2guRGVmYXVsdHMsIHRoaXMuX2NvcmUub3B0aW9ucyk7XG5cblx0XHQvLyByZWdpc3RlciB0aGUgZXZlbnQgaGFuZGxlcnNcblx0XHR0aGlzLiRlbGVtZW50Lm9uKHRoaXMuX2hhbmRsZXJzKTtcblxuXHRcdC8vIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyIGZvciBoYXNoIG5hdmlnYXRpb25cblx0XHQkKHdpbmRvdykub24oJ2hhc2hjaGFuZ2Uub3dsLm5hdmlnYXRpb24nLCAkLnByb3h5KGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpLFxuXHRcdFx0XHRpdGVtcyA9IHRoaXMuX2NvcmUuJHN0YWdlLmNoaWxkcmVuKCksXG5cdFx0XHRcdHBvc2l0aW9uID0gdGhpcy5faGFzaGVzW2hhc2hdICYmIGl0ZW1zLmluZGV4KHRoaXMuX2hhc2hlc1toYXNoXSk7XG5cblx0XHRcdGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8IHBvc2l0aW9uID09PSB0aGlzLl9jb3JlLmN1cnJlbnQoKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX2NvcmUudG8odGhpcy5fY29yZS5yZWxhdGl2ZShwb3NpdGlvbiksIGZhbHNlLCB0cnVlKTtcblx0XHR9LCB0aGlzKSk7XG5cdH07XG5cblx0LyoqXG5cdCAqIERlZmF1bHQgb3B0aW9ucy5cblx0ICogQHB1YmxpY1xuXHQgKi9cblx0SGFzaC5EZWZhdWx0cyA9IHtcblx0XHRVUkxoYXNoTGlzdGVuZXI6IGZhbHNlXG5cdH07XG5cblx0LyoqXG5cdCAqIERlc3Ryb3lzIHRoZSBwbHVnaW4uXG5cdCAqIEBwdWJsaWNcblx0ICovXG5cdEhhc2gucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgaGFuZGxlciwgcHJvcGVydHk7XG5cblx0XHQkKHdpbmRvdykub2ZmKCdoYXNoY2hhbmdlLm93bC5uYXZpZ2F0aW9uJyk7XG5cblx0XHRmb3IgKGhhbmRsZXIgaW4gdGhpcy5faGFuZGxlcnMpIHtcblx0XHRcdHRoaXMuX2NvcmUuJGVsZW1lbnQub2ZmKGhhbmRsZXIsIHRoaXMuX2hhbmRsZXJzW2hhbmRsZXJdKTtcblx0XHR9XG5cdFx0Zm9yIChwcm9wZXJ0eSBpbiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzKSkge1xuXHRcdFx0dHlwZW9mIHRoaXNbcHJvcGVydHldICE9ICdmdW5jdGlvbicgJiYgKHRoaXNbcHJvcGVydHldID0gbnVsbCk7XG5cdFx0fVxuXHR9O1xuXG5cdCQuZm4ub3dsQ2Fyb3VzZWwuQ29uc3RydWN0b3IuUGx1Z2lucy5IYXNoID0gSGFzaDtcblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vKipcbiAqIFN1cHBvcnQgUGx1Z2luXG4gKlxuICogQHZlcnNpb24gMi4xLjBcbiAqIEBhdXRob3IgVml2aWQgUGxhbmV0IFNvZnR3YXJlIEdtYkhcbiAqIEBhdXRob3IgQXJ0dXMgS29sYW5vd3NraVxuICogQGF1dGhvciBEYXZpZCBEZXV0c2NoXG4gKiBAbGljZW5zZSBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuXHR2YXIgc3R5bGUgPSAkKCc8c3VwcG9ydD4nKS5nZXQoMCkuc3R5bGUsXG5cdFx0cHJlZml4ZXMgPSAnV2Via2l0IE1veiBPIG1zJy5zcGxpdCgnICcpLFxuXHRcdGV2ZW50cyA9IHtcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0ZW5kOiB7XG5cdFx0XHRcdFx0V2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuXHRcdFx0XHRcdE1velRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcblx0XHRcdFx0XHRPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCdcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGFuaW1hdGlvbjoge1xuXHRcdFx0XHRlbmQ6IHtcblx0XHRcdFx0XHRXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdE1vekFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCcsXG5cdFx0XHRcdFx0T0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuXHRcdFx0XHRcdGFuaW1hdGlvbjogJ2FuaW1hdGlvbmVuZCdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0dGVzdHMgPSB7XG5cdFx0XHRjc3N0cmFuc2Zvcm1zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgndHJhbnNmb3JtJyk7XG5cdFx0XHR9LFxuXHRcdFx0Y3NzdHJhbnNmb3JtczNkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgncGVyc3BlY3RpdmUnKTtcblx0XHRcdH0sXG5cdFx0XHRjc3N0cmFuc2l0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIXRlc3QoJ3RyYW5zaXRpb24nKTtcblx0XHRcdH0sXG5cdFx0XHRjc3NhbmltYXRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhdGVzdCgnYW5pbWF0aW9uJyk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRmdW5jdGlvbiB0ZXN0KHByb3BlcnR5LCBwcmVmaXhlZCkge1xuXHRcdHZhciByZXN1bHQgPSBmYWxzZSxcblx0XHRcdHVwcGVyID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuXHRcdCQuZWFjaCgocHJvcGVydHkgKyAnICcgKyBwcmVmaXhlcy5qb2luKHVwcGVyICsgJyAnKSArIHVwcGVyKS5zcGxpdCgnICcpLCBmdW5jdGlvbihpLCBwcm9wZXJ0eSkge1xuXHRcdFx0aWYgKHN0eWxlW3Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHByZWZpeGVkID8gcHJvcGVydHkgOiB0cnVlO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gcHJlZml4ZWQocHJvcGVydHkpIHtcblx0XHRyZXR1cm4gdGVzdChwcm9wZXJ0eSwgdHJ1ZSk7XG5cdH1cblxuXHRpZiAodGVzdHMuY3NzdHJhbnNpdGlvbnMoKSkge1xuXHRcdC8qIGpzaGludCAtVzA1MyAqL1xuXHRcdCQuc3VwcG9ydC50cmFuc2l0aW9uID0gbmV3IFN0cmluZyhwcmVmaXhlZCgndHJhbnNpdGlvbicpKVxuXHRcdCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCA9IGV2ZW50cy50cmFuc2l0aW9uLmVuZFsgJC5zdXBwb3J0LnRyYW5zaXRpb24gXTtcblx0fVxuXG5cdGlmICh0ZXN0cy5jc3NhbmltYXRpb25zKCkpIHtcblx0XHQvKiBqc2hpbnQgLVcwNTMgKi9cblx0XHQkLnN1cHBvcnQuYW5pbWF0aW9uID0gbmV3IFN0cmluZyhwcmVmaXhlZCgnYW5pbWF0aW9uJykpXG5cdFx0JC5zdXBwb3J0LmFuaW1hdGlvbi5lbmQgPSBldmVudHMuYW5pbWF0aW9uLmVuZFsgJC5zdXBwb3J0LmFuaW1hdGlvbiBdO1xuXHR9XG5cblx0aWYgKHRlc3RzLmNzc3RyYW5zZm9ybXMoKSkge1xuXHRcdC8qIGpzaGludCAtVzA1MyAqL1xuXHRcdCQuc3VwcG9ydC50cmFuc2Zvcm0gPSBuZXcgU3RyaW5nKHByZWZpeGVkKCd0cmFuc2Zvcm0nKSk7XG5cdFx0JC5zdXBwb3J0LnRyYW5zZm9ybTNkID0gdGVzdHMuY3NzdHJhbnNmb3JtczNkKCk7XG5cdH1cblxufSkod2luZG93LlplcHRvIHx8IHdpbmRvdy5qUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuIiwiLyohXG4gKiBWdWUuanMgdjIuNS4xM1xuICogKGMpIDIwMTQtMjAxNyBFdmFuIFlvdVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICovXG4hZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKTp0LlZ1ZT1lKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQpe3JldHVybiB2b2lkIDA9PT10fHxudWxsPT09dH1mdW5jdGlvbiBlKHQpe3JldHVybiB2b2lkIDAhPT10JiZudWxsIT09dH1mdW5jdGlvbiBuKHQpe3JldHVybiEwPT09dH1mdW5jdGlvbiByKHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0fHxcIm51bWJlclwiPT10eXBlb2YgdHx8XCJzeW1ib2xcIj09dHlwZW9mIHR8fFwiYm9vbGVhblwiPT10eXBlb2YgdH1mdW5jdGlvbiBpKHQpe3JldHVybiBudWxsIT09dCYmXCJvYmplY3RcIj09dHlwZW9mIHR9ZnVuY3Rpb24gbyh0KXtyZXR1cm5cIltvYmplY3QgT2JqZWN0XVwiPT09Tm4uY2FsbCh0KX1mdW5jdGlvbiBhKHQpe3ZhciBlPXBhcnNlRmxvYXQoU3RyaW5nKHQpKTtyZXR1cm4gZT49MCYmTWF0aC5mbG9vcihlKT09PWUmJmlzRmluaXRlKHQpfWZ1bmN0aW9uIHModCl7cmV0dXJuIG51bGw9PXQ/XCJcIjpcIm9iamVjdFwiPT10eXBlb2YgdD9KU09OLnN0cmluZ2lmeSh0LG51bGwsMik6U3RyaW5nKHQpfWZ1bmN0aW9uIGModCl7dmFyIGU9cGFyc2VGbG9hdCh0KTtyZXR1cm4gaXNOYU4oZSk/dDplfWZ1bmN0aW9uIHUodCxlKXtmb3IodmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKSxyPXQuc3BsaXQoXCIsXCIpLGk9MDtpPHIubGVuZ3RoO2krKyluW3JbaV1dPSEwO3JldHVybiBlP2Z1bmN0aW9uKHQpe3JldHVybiBuW3QudG9Mb3dlckNhc2UoKV19OmZ1bmN0aW9uKHQpe3JldHVybiBuW3RdfX1mdW5jdGlvbiBsKHQsZSl7aWYodC5sZW5ndGgpe3ZhciBuPXQuaW5kZXhPZihlKTtpZihuPi0xKXJldHVybiB0LnNwbGljZShuLDEpfX1mdW5jdGlvbiBmKHQsZSl7cmV0dXJuIE1uLmNhbGwodCxlKX1mdW5jdGlvbiBwKHQpe3ZhciBlPU9iamVjdC5jcmVhdGUobnVsbCk7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBlW25dfHwoZVtuXT10KG4pKX19ZnVuY3Rpb24gZCh0LGUpe2Z1bmN0aW9uIG4obil7dmFyIHI9YXJndW1lbnRzLmxlbmd0aDtyZXR1cm4gcj9yPjE/dC5hcHBseShlLGFyZ3VtZW50cyk6dC5jYWxsKGUsbik6dC5jYWxsKGUpfXJldHVybiBuLl9sZW5ndGg9dC5sZW5ndGgsbn1mdW5jdGlvbiB2KHQsZSl7ZT1lfHwwO2Zvcih2YXIgbj10Lmxlbmd0aC1lLHI9bmV3IEFycmF5KG4pO24tLTspcltuXT10W24rZV07cmV0dXJuIHJ9ZnVuY3Rpb24gaCh0LGUpe2Zvcih2YXIgbiBpbiBlKXRbbl09ZVtuXTtyZXR1cm4gdH1mdW5jdGlvbiBtKHQpe2Zvcih2YXIgZT17fSxuPTA7bjx0Lmxlbmd0aDtuKyspdFtuXSYmaChlLHRbbl0pO3JldHVybiBlfWZ1bmN0aW9uIHkodCxlLG4pe31mdW5jdGlvbiBnKHQsZSl7aWYodD09PWUpcmV0dXJuITA7dmFyIG49aSh0KSxyPWkoZSk7aWYoIW58fCFyKXJldHVybiFuJiYhciYmU3RyaW5nKHQpPT09U3RyaW5nKGUpO3RyeXt2YXIgbz1BcnJheS5pc0FycmF5KHQpLGE9QXJyYXkuaXNBcnJheShlKTtpZihvJiZhKXJldHVybiB0Lmxlbmd0aD09PWUubGVuZ3RoJiZ0LmV2ZXJ5KGZ1bmN0aW9uKHQsbil7cmV0dXJuIGcodCxlW25dKX0pO2lmKG98fGEpcmV0dXJuITE7dmFyIHM9T2JqZWN0LmtleXModCksYz1PYmplY3Qua2V5cyhlKTtyZXR1cm4gcy5sZW5ndGg9PT1jLmxlbmd0aCYmcy5ldmVyeShmdW5jdGlvbihuKXtyZXR1cm4gZyh0W25dLGVbbl0pfSl9Y2F0Y2godCl7cmV0dXJuITF9fWZ1bmN0aW9uIF8odCxlKXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKylpZihnKHRbbl0sZSkpcmV0dXJuIG47cmV0dXJuLTF9ZnVuY3Rpb24gYih0KXt2YXIgZT0hMTtyZXR1cm4gZnVuY3Rpb24oKXtlfHwoZT0hMCx0LmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9fWZ1bmN0aW9uICQodCl7dmFyIGU9KHQrXCJcIikuY2hhckNvZGVBdCgwKTtyZXR1cm4gMzY9PT1lfHw5NT09PWV9ZnVuY3Rpb24gQyh0LGUsbixyKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTpuLGVudW1lcmFibGU6ISFyLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH0pfWZ1bmN0aW9uIHcodCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdCYmL25hdGl2ZSBjb2RlLy50ZXN0KHQudG9TdHJpbmcoKSl9ZnVuY3Rpb24geCh0KXtyZXR1cm4gbmV3IG1yKHZvaWQgMCx2b2lkIDAsdm9pZCAwLFN0cmluZyh0KSl9ZnVuY3Rpb24gayh0LGUpe3ZhciBuPXQuY29tcG9uZW50T3B0aW9ucyxyPW5ldyBtcih0LnRhZyx0LmRhdGEsdC5jaGlsZHJlbix0LnRleHQsdC5lbG0sdC5jb250ZXh0LG4sdC5hc3luY0ZhY3RvcnkpO3JldHVybiByLm5zPXQubnMsci5pc1N0YXRpYz10LmlzU3RhdGljLHIua2V5PXQua2V5LHIuaXNDb21tZW50PXQuaXNDb21tZW50LHIuZm5Db250ZXh0PXQuZm5Db250ZXh0LHIuZm5PcHRpb25zPXQuZm5PcHRpb25zLHIuZm5TY29wZUlkPXQuZm5TY29wZUlkLHIuaXNDbG9uZWQ9ITAsZSYmKHQuY2hpbGRyZW4mJihyLmNoaWxkcmVuPUEodC5jaGlsZHJlbiwhMCkpLG4mJm4uY2hpbGRyZW4mJihuLmNoaWxkcmVuPUEobi5jaGlsZHJlbiwhMCkpKSxyfWZ1bmN0aW9uIEEodCxlKXtmb3IodmFyIG49dC5sZW5ndGgscj1uZXcgQXJyYXkobiksaT0wO2k8bjtpKyspcltpXT1rKHRbaV0sZSk7cmV0dXJuIHJ9ZnVuY3Rpb24gTyh0LGUsbil7dC5fX3Byb3RvX189ZX1mdW5jdGlvbiBTKHQsZSxuKXtmb3IodmFyIHI9MCxpPW4ubGVuZ3RoO3I8aTtyKyspe3ZhciBvPW5bcl07Qyh0LG8sZVtvXSl9fWZ1bmN0aW9uIFQodCxlKXtpZihpKHQpJiYhKHQgaW5zdGFuY2VvZiBtcikpe3ZhciBuO3JldHVybiBmKHQsXCJfX29iX19cIikmJnQuX19vYl9fIGluc3RhbmNlb2Ygd3I/bj10Ll9fb2JfXzpDci5zaG91bGRDb252ZXJ0JiYhdXIoKSYmKEFycmF5LmlzQXJyYXkodCl8fG8odCkpJiZPYmplY3QuaXNFeHRlbnNpYmxlKHQpJiYhdC5faXNWdWUmJihuPW5ldyB3cih0KSksZSYmbiYmbi52bUNvdW50Kyssbn19ZnVuY3Rpb24gRSh0LGUsbixyLGkpe3ZhciBvPW5ldyB2cixhPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxlKTtpZighYXx8ITEhPT1hLmNvbmZpZ3VyYWJsZSl7dmFyIHM9YSYmYS5nZXQsYz1hJiZhLnNldCx1PSFpJiZUKG4pO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3ZhciBlPXM/cy5jYWxsKHQpOm47cmV0dXJuIHZyLnRhcmdldCYmKG8uZGVwZW5kKCksdSYmKHUuZGVwLmRlcGVuZCgpLEFycmF5LmlzQXJyYXkoZSkmJkkoZSkpKSxlfSxzZXQ6ZnVuY3Rpb24oZSl7dmFyIHI9cz9zLmNhbGwodCk6bjtlPT09cnx8ZSE9ZSYmciE9cnx8KGM/Yy5jYWxsKHQsZSk6bj1lLHU9IWkmJlQoZSksby5ub3RpZnkoKSl9fSl9fWZ1bmN0aW9uIGoodCxlLG4pe2lmKEFycmF5LmlzQXJyYXkodCkmJmEoZSkpcmV0dXJuIHQubGVuZ3RoPU1hdGgubWF4KHQubGVuZ3RoLGUpLHQuc3BsaWNlKGUsMSxuKSxuO2lmKGUgaW4gdCYmIShlIGluIE9iamVjdC5wcm90b3R5cGUpKXJldHVybiB0W2VdPW4sbjt2YXIgcj10Ll9fb2JfXztyZXR1cm4gdC5faXNWdWV8fHImJnIudm1Db3VudD9uOnI/KEUoci52YWx1ZSxlLG4pLHIuZGVwLm5vdGlmeSgpLG4pOih0W2VdPW4sbil9ZnVuY3Rpb24gTih0LGUpe2lmKEFycmF5LmlzQXJyYXkodCkmJmEoZSkpdC5zcGxpY2UoZSwxKTtlbHNle3ZhciBuPXQuX19vYl9fO3QuX2lzVnVlfHxuJiZuLnZtQ291bnR8fGYodCxlKSYmKGRlbGV0ZSB0W2VdLG4mJm4uZGVwLm5vdGlmeSgpKX19ZnVuY3Rpb24gSSh0KXtmb3IodmFyIGU9dm9pZCAwLG49MCxyPXQubGVuZ3RoO248cjtuKyspKGU9dFtuXSkmJmUuX19vYl9fJiZlLl9fb2JfXy5kZXAuZGVwZW5kKCksQXJyYXkuaXNBcnJheShlKSYmSShlKX1mdW5jdGlvbiBMKHQsZSl7aWYoIWUpcmV0dXJuIHQ7Zm9yKHZhciBuLHIsaSxhPU9iamVjdC5rZXlzKGUpLHM9MDtzPGEubGVuZ3RoO3MrKylyPXRbbj1hW3NdXSxpPWVbbl0sZih0LG4pP28ocikmJm8oaSkmJkwocixpKTpqKHQsbixpKTtyZXR1cm4gdH1mdW5jdGlvbiBNKHQsZSxuKXtyZXR1cm4gbj9mdW5jdGlvbigpe3ZhciByPVwiZnVuY3Rpb25cIj09dHlwZW9mIGU/ZS5jYWxsKG4sbik6ZSxpPVwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dC5jYWxsKG4sbik6dDtyZXR1cm4gcj9MKHIsaSk6aX06ZT90P2Z1bmN0aW9uKCl7cmV0dXJuIEwoXCJmdW5jdGlvblwiPT10eXBlb2YgZT9lLmNhbGwodGhpcyx0aGlzKTplLFwiZnVuY3Rpb25cIj09dHlwZW9mIHQ/dC5jYWxsKHRoaXMsdGhpcyk6dCl9OmU6dH1mdW5jdGlvbiBEKHQsZSl7cmV0dXJuIGU/dD90LmNvbmNhdChlKTpBcnJheS5pc0FycmF5KGUpP2U6W2VdOnR9ZnVuY3Rpb24gUCh0LGUsbixyKXt2YXIgaT1PYmplY3QuY3JlYXRlKHR8fG51bGwpO3JldHVybiBlP2goaSxlKTppfWZ1bmN0aW9uIEYodCxlLG4pe2Z1bmN0aW9uIHIocil7dmFyIGk9eHJbcl18fE9yO3Vbcl09aSh0W3JdLGVbcl0sbixyKX1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlJiYoZT1lLm9wdGlvbnMpLGZ1bmN0aW9uKHQsZSl7dmFyIG49dC5wcm9wcztpZihuKXt2YXIgcixpLGE9e307aWYoQXJyYXkuaXNBcnJheShuKSlmb3Iocj1uLmxlbmd0aDtyLS07KVwic3RyaW5nXCI9PXR5cGVvZihpPW5bcl0pJiYoYVtQbihpKV09e3R5cGU6bnVsbH0pO2Vsc2UgaWYobyhuKSlmb3IodmFyIHMgaW4gbilpPW5bc10sYVtQbihzKV09byhpKT9pOnt0eXBlOml9O3QucHJvcHM9YX19KGUpLGZ1bmN0aW9uKHQsZSl7dmFyIG49dC5pbmplY3Q7aWYobil7dmFyIHI9dC5pbmplY3Q9e307aWYoQXJyYXkuaXNBcnJheShuKSlmb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKylyW25baV1dPXtmcm9tOm5baV19O2Vsc2UgaWYobyhuKSlmb3IodmFyIGEgaW4gbil7dmFyIHM9blthXTtyW2FdPW8ocyk/aCh7ZnJvbTphfSxzKTp7ZnJvbTpzfX19fShlKSxmdW5jdGlvbih0KXt2YXIgZT10LmRpcmVjdGl2ZXM7aWYoZSlmb3IodmFyIG4gaW4gZSl7dmFyIHI9ZVtuXTtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiYoZVtuXT17YmluZDpyLHVwZGF0ZTpyfSl9fShlKTt2YXIgaT1lLmV4dGVuZHM7aWYoaSYmKHQ9Rih0LGksbikpLGUubWl4aW5zKWZvcih2YXIgYT0wLHM9ZS5taXhpbnMubGVuZ3RoO2E8czthKyspdD1GKHQsZS5taXhpbnNbYV0sbik7dmFyIGMsdT17fTtmb3IoYyBpbiB0KXIoYyk7Zm9yKGMgaW4gZSlmKHQsYyl8fHIoYyk7cmV0dXJuIHV9ZnVuY3Rpb24gUih0LGUsbixyKXtpZihcInN0cmluZ1wiPT10eXBlb2Ygbil7dmFyIGk9dFtlXTtpZihmKGksbikpcmV0dXJuIGlbbl07dmFyIG89UG4obik7aWYoZihpLG8pKXJldHVybiBpW29dO3ZhciBhPUZuKG8pO2lmKGYoaSxhKSlyZXR1cm4gaVthXTtyZXR1cm4gaVtuXXx8aVtvXXx8aVthXX19ZnVuY3Rpb24gSCh0LGUsbixyKXt2YXIgaT1lW3RdLG89IWYobix0KSxhPW5bdF07aWYoVShCb29sZWFuLGkudHlwZSkmJihvJiYhZihpLFwiZGVmYXVsdFwiKT9hPSExOlUoU3RyaW5nLGkudHlwZSl8fFwiXCIhPT1hJiZhIT09SG4odCl8fChhPSEwKSksdm9pZCAwPT09YSl7YT1mdW5jdGlvbih0LGUsbil7aWYoIWYoZSxcImRlZmF1bHRcIikpcmV0dXJuO3ZhciByPWUuZGVmYXVsdDtpZih0JiZ0LiRvcHRpb25zLnByb3BzRGF0YSYmdm9pZCAwPT09dC4kb3B0aW9ucy5wcm9wc0RhdGFbbl0mJnZvaWQgMCE9PXQuX3Byb3BzW25dKXJldHVybiB0Ll9wcm9wc1tuXTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZcIkZ1bmN0aW9uXCIhPT1CKGUudHlwZSk/ci5jYWxsKHQpOnJ9KHIsaSx0KTt2YXIgcz1Dci5zaG91bGRDb252ZXJ0O0NyLnNob3VsZENvbnZlcnQ9ITAsVChhKSxDci5zaG91bGRDb252ZXJ0PXN9cmV0dXJuIGF9ZnVuY3Rpb24gQih0KXt2YXIgZT10JiZ0LnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb24gKFxcdyspLyk7cmV0dXJuIGU/ZVsxXTpcIlwifWZ1bmN0aW9uIFUodCxlKXtpZighQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gQihlKT09PUIodCk7Zm9yKHZhciBuPTAscj1lLmxlbmd0aDtuPHI7bisrKWlmKEIoZVtuXSk9PT1CKHQpKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIFYodCxlLG4pe2lmKGUpZm9yKHZhciByPWU7cj1yLiRwYXJlbnQ7KXt2YXIgaT1yLiRvcHRpb25zLmVycm9yQ2FwdHVyZWQ7aWYoaSlmb3IodmFyIG89MDtvPGkubGVuZ3RoO28rKyl0cnl7aWYoITE9PT1pW29dLmNhbGwocix0LGUsbikpcmV0dXJufWNhdGNoKHQpe3oodCxyLFwiZXJyb3JDYXB0dXJlZCBob29rXCIpfX16KHQsZSxuKX1mdW5jdGlvbiB6KHQsZSxuKXtpZihKbi5lcnJvckhhbmRsZXIpdHJ5e3JldHVybiBKbi5lcnJvckhhbmRsZXIuY2FsbChudWxsLHQsZSxuKX1jYXRjaCh0KXtLKHQsbnVsbCxcImNvbmZpZy5lcnJvckhhbmRsZXJcIil9Syh0LGUsbil9ZnVuY3Rpb24gSyh0LGUsbil7aWYoIUduJiYhWm58fFwidW5kZWZpbmVkXCI9PXR5cGVvZiBjb25zb2xlKXRocm93IHQ7Y29uc29sZS5lcnJvcih0KX1mdW5jdGlvbiBKKCl7VHI9ITE7dmFyIHQ9U3Iuc2xpY2UoMCk7U3IubGVuZ3RoPTA7Zm9yKHZhciBlPTA7ZTx0Lmxlbmd0aDtlKyspdFtlXSgpfWZ1bmN0aW9uIHEodCxlKXt2YXIgbjtpZihTci5wdXNoKGZ1bmN0aW9uKCl7aWYodCl0cnl7dC5jYWxsKGUpfWNhdGNoKHQpe1YodCxlLFwibmV4dFRpY2tcIil9ZWxzZSBuJiZuKGUpfSksVHJ8fChUcj0hMCxFcj9BcigpOmtyKCkpLCF0JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUHJvbWlzZSlyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24odCl7bj10fSl9ZnVuY3Rpb24gVyh0KXtHKHQsTXIpLE1yLmNsZWFyKCl9ZnVuY3Rpb24gRyh0LGUpe3ZhciBuLHIsbz1BcnJheS5pc0FycmF5KHQpO2lmKChvfHxpKHQpKSYmIU9iamVjdC5pc0Zyb3plbih0KSl7aWYodC5fX29iX18pe3ZhciBhPXQuX19vYl9fLmRlcC5pZDtpZihlLmhhcyhhKSlyZXR1cm47ZS5hZGQoYSl9aWYobylmb3Iobj10Lmxlbmd0aDtuLS07KUcodFtuXSxlKTtlbHNlIGZvcihuPShyPU9iamVjdC5rZXlzKHQpKS5sZW5ndGg7bi0tOylHKHRbcltuXV0sZSl9fWZ1bmN0aW9uIFoodCl7ZnVuY3Rpb24gZSgpe3ZhciB0PWFyZ3VtZW50cyxuPWUuZm5zO2lmKCFBcnJheS5pc0FycmF5KG4pKXJldHVybiBuLmFwcGx5KG51bGwsYXJndW1lbnRzKTtmb3IodmFyIHI9bi5zbGljZSgpLGk9MDtpPHIubGVuZ3RoO2krKylyW2ldLmFwcGx5KG51bGwsdCl9cmV0dXJuIGUuZm5zPXQsZX1mdW5jdGlvbiBYKGUsbixyLGksbyl7dmFyIGEscyxjLHU7Zm9yKGEgaW4gZSlzPWVbYV0sYz1uW2FdLHU9RHIoYSksdChzKXx8KHQoYyk/KHQocy5mbnMpJiYocz1lW2FdPVoocykpLHIodS5uYW1lLHMsdS5vbmNlLHUuY2FwdHVyZSx1LnBhc3NpdmUsdS5wYXJhbXMpKTpzIT09YyYmKGMuZm5zPXMsZVthXT1jKSk7Zm9yKGEgaW4gbil0KGVbYV0pJiZpKCh1PURyKGEpKS5uYW1lLG5bYV0sdS5jYXB0dXJlKX1mdW5jdGlvbiBZKHIsaSxvKXtmdW5jdGlvbiBhKCl7by5hcHBseSh0aGlzLGFyZ3VtZW50cyksbChzLmZucyxhKX1yIGluc3RhbmNlb2YgbXImJihyPXIuZGF0YS5ob29rfHwoci5kYXRhLmhvb2s9e30pKTt2YXIgcyxjPXJbaV07dChjKT9zPVooW2FdKTplKGMuZm5zKSYmbihjLm1lcmdlZCk/KHM9YykuZm5zLnB1c2goYSk6cz1aKFtjLGFdKSxzLm1lcmdlZD0hMCxyW2ldPXN9ZnVuY3Rpb24gUSh0LG4scixpLG8pe2lmKGUobikpe2lmKGYobixyKSlyZXR1cm4gdFtyXT1uW3JdLG98fGRlbGV0ZSBuW3JdLCEwO2lmKGYobixpKSlyZXR1cm4gdFtyXT1uW2ldLG98fGRlbGV0ZSBuW2ldLCEwfXJldHVybiExfWZ1bmN0aW9uIHR0KHQpe3JldHVybiBlKHQpJiZlKHQudGV4dCkmJmZ1bmN0aW9uKHQpe3JldHVybiExPT09dH0odC5pc0NvbW1lbnQpfWZ1bmN0aW9uIGV0KGksbyl7dmFyIGEscyxjLHUsbD1bXTtmb3IoYT0wO2E8aS5sZW5ndGg7YSsrKXQocz1pW2FdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBzfHwodT1sW2M9bC5sZW5ndGgtMV0sQXJyYXkuaXNBcnJheShzKT9zLmxlbmd0aD4wJiYodHQoKHM9ZXQocywob3x8XCJcIikrXCJfXCIrYSkpWzBdKSYmdHQodSkmJihsW2NdPXgodS50ZXh0K3NbMF0udGV4dCkscy5zaGlmdCgpKSxsLnB1c2guYXBwbHkobCxzKSk6cihzKT90dCh1KT9sW2NdPXgodS50ZXh0K3MpOlwiXCIhPT1zJiZsLnB1c2goeChzKSk6dHQocykmJnR0KHUpP2xbY109eCh1LnRleHQrcy50ZXh0KToobihpLl9pc1ZMaXN0KSYmZShzLnRhZykmJnQocy5rZXkpJiZlKG8pJiYocy5rZXk9XCJfX3ZsaXN0XCIrbytcIl9cIithK1wiX19cIiksbC5wdXNoKHMpKSk7cmV0dXJuIGx9ZnVuY3Rpb24gbnQodCxlKXtyZXR1cm4odC5fX2VzTW9kdWxlfHxmciYmXCJNb2R1bGVcIj09PXRbU3ltYm9sLnRvU3RyaW5nVGFnXSkmJih0PXQuZGVmYXVsdCksaSh0KT9lLmV4dGVuZCh0KTp0fWZ1bmN0aW9uIHJ0KHQpe3JldHVybiB0LmlzQ29tbWVudCYmdC5hc3luY0ZhY3Rvcnl9ZnVuY3Rpb24gaXQodCl7aWYoQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtpZihlKHIpJiYoZShyLmNvbXBvbmVudE9wdGlvbnMpfHxydChyKSkpcmV0dXJuIHJ9fWZ1bmN0aW9uIG90KHQsZSxuKXtuP0xyLiRvbmNlKHQsZSk6THIuJG9uKHQsZSl9ZnVuY3Rpb24gYXQodCxlKXtMci4kb2ZmKHQsZSl9ZnVuY3Rpb24gc3QodCxlLG4pe0xyPXQsWChlLG58fHt9LG90LGF0KSxMcj12b2lkIDB9ZnVuY3Rpb24gY3QodCxlKXt2YXIgbj17fTtpZighdClyZXR1cm4gbjtmb3IodmFyIHI9MCxpPXQubGVuZ3RoO3I8aTtyKyspe3ZhciBvPXRbcl0sYT1vLmRhdGE7aWYoYSYmYS5hdHRycyYmYS5hdHRycy5zbG90JiZkZWxldGUgYS5hdHRycy5zbG90LG8uY29udGV4dCE9PWUmJm8uZm5Db250ZXh0IT09ZXx8IWF8fG51bGw9PWEuc2xvdCkobi5kZWZhdWx0fHwobi5kZWZhdWx0PVtdKSkucHVzaChvKTtlbHNle3ZhciBzPWEuc2xvdCxjPW5bc118fChuW3NdPVtdKTtcInRlbXBsYXRlXCI9PT1vLnRhZz9jLnB1c2guYXBwbHkoYyxvLmNoaWxkcmVufHxbXSk6Yy5wdXNoKG8pfX1mb3IodmFyIHUgaW4gbiluW3VdLmV2ZXJ5KHV0KSYmZGVsZXRlIG5bdV07cmV0dXJuIG59ZnVuY3Rpb24gdXQodCl7cmV0dXJuIHQuaXNDb21tZW50JiYhdC5hc3luY0ZhY3Rvcnl8fFwiIFwiPT09dC50ZXh0fWZ1bmN0aW9uIGx0KHQsZSl7ZT1lfHx7fTtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKylBcnJheS5pc0FycmF5KHRbbl0pP2x0KHRbbl0sZSk6ZVt0W25dLmtleV09dFtuXS5mbjtyZXR1cm4gZX1mdW5jdGlvbiBmdCh0KXtmb3IoO3QmJih0PXQuJHBhcmVudCk7KWlmKHQuX2luYWN0aXZlKXJldHVybiEwO3JldHVybiExfWZ1bmN0aW9uIHB0KHQsZSl7aWYoZSl7aWYodC5fZGlyZWN0SW5hY3RpdmU9ITEsZnQodCkpcmV0dXJufWVsc2UgaWYodC5fZGlyZWN0SW5hY3RpdmUpcmV0dXJuO2lmKHQuX2luYWN0aXZlfHxudWxsPT09dC5faW5hY3RpdmUpe3QuX2luYWN0aXZlPSExO2Zvcih2YXIgbj0wO248dC4kY2hpbGRyZW4ubGVuZ3RoO24rKylwdCh0LiRjaGlsZHJlbltuXSk7dnQodCxcImFjdGl2YXRlZFwiKX19ZnVuY3Rpb24gZHQodCxlKXtpZighKGUmJih0Ll9kaXJlY3RJbmFjdGl2ZT0hMCxmdCh0KSl8fHQuX2luYWN0aXZlKSl7dC5faW5hY3RpdmU9ITA7Zm9yKHZhciBuPTA7bjx0LiRjaGlsZHJlbi5sZW5ndGg7bisrKWR0KHQuJGNoaWxkcmVuW25dKTt2dCh0LFwiZGVhY3RpdmF0ZWRcIil9fWZ1bmN0aW9uIHZ0KHQsZSl7dmFyIG49dC4kb3B0aW9uc1tlXTtpZihuKWZvcih2YXIgcj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl0cnl7bltyXS5jYWxsKHQpfWNhdGNoKG4pe1Yobix0LGUrXCIgaG9va1wiKX10Ll9oYXNIb29rRXZlbnQmJnQuJGVtaXQoXCJob29rOlwiK2UpfWZ1bmN0aW9uIGh0KCl7VXI9ITA7dmFyIHQsZTtmb3IoRnIuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiB0LmlkLWUuaWR9KSxWcj0wO1ZyPEZyLmxlbmd0aDtWcisrKWU9KHQ9RnJbVnJdKS5pZCxIcltlXT1udWxsLHQucnVuKCk7dmFyIG49UnIuc2xpY2UoKSxyPUZyLnNsaWNlKCk7VnI9RnIubGVuZ3RoPVJyLmxlbmd0aD0wLEhyPXt9LEJyPVVyPSExLGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKXRbZV0uX2luYWN0aXZlPSEwLHB0KHRbZV0sITApfShuKSxmdW5jdGlvbih0KXt2YXIgZT10Lmxlbmd0aDtmb3IoO2UtLTspe3ZhciBuPXRbZV0scj1uLnZtO3IuX3dhdGNoZXI9PT1uJiZyLl9pc01vdW50ZWQmJnZ0KHIsXCJ1cGRhdGVkXCIpfX0ociksbHImJkpuLmRldnRvb2xzJiZsci5lbWl0KFwiZmx1c2hcIil9ZnVuY3Rpb24gbXQodCxlLG4pe0pyLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzW2VdW25dfSxKci5zZXQ9ZnVuY3Rpb24odCl7dGhpc1tlXVtuXT10fSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLEpyKX1mdW5jdGlvbiB5dCh0KXt0Ll93YXRjaGVycz1bXTt2YXIgZT10LiRvcHRpb25zO2UucHJvcHMmJmZ1bmN0aW9uKHQsZSl7dmFyIG49dC4kb3B0aW9ucy5wcm9wc0RhdGF8fHt9LHI9dC5fcHJvcHM9e30saT10LiRvcHRpb25zLl9wcm9wS2V5cz1bXSxvPSF0LiRwYXJlbnQ7Q3Iuc2hvdWxkQ29udmVydD1vO3ZhciBhPWZ1bmN0aW9uKG8pe2kucHVzaChvKTt2YXIgYT1IKG8sZSxuLHQpO0UocixvLGEpLG8gaW4gdHx8bXQodCxcIl9wcm9wc1wiLG8pfTtmb3IodmFyIHMgaW4gZSlhKHMpO0NyLnNob3VsZENvbnZlcnQ9ITB9KHQsZS5wcm9wcyksZS5tZXRob2RzJiZmdW5jdGlvbih0LGUpe3QuJG9wdGlvbnMucHJvcHM7Zm9yKHZhciBuIGluIGUpdFtuXT1udWxsPT1lW25dP3k6ZChlW25dLHQpfSh0LGUubWV0aG9kcyksZS5kYXRhP2Z1bmN0aW9uKHQpe3ZhciBlPXQuJG9wdGlvbnMuZGF0YTtlPXQuX2RhdGE9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9mdW5jdGlvbih0LGUpe3RyeXtyZXR1cm4gdC5jYWxsKGUsZSl9Y2F0Y2godCl7cmV0dXJuIFYodCxlLFwiZGF0YSgpXCIpLHt9fX0oZSx0KTplfHx7fSxvKGUpfHwoZT17fSk7dmFyIG49T2JqZWN0LmtleXMoZSkscj10LiRvcHRpb25zLnByb3BzLGk9KHQuJG9wdGlvbnMubWV0aG9kcyxuLmxlbmd0aCk7Zm9yKDtpLS07KXt2YXIgYT1uW2ldO3ImJmYocixhKXx8JChhKXx8bXQodCxcIl9kYXRhXCIsYSl9VChlLCEwKX0odCk6VCh0Ll9kYXRhPXt9LCEwKSxlLmNvbXB1dGVkJiZmdW5jdGlvbih0LGUpe3ZhciBuPXQuX2NvbXB1dGVkV2F0Y2hlcnM9T2JqZWN0LmNyZWF0ZShudWxsKSxyPXVyKCk7Zm9yKHZhciBpIGluIGUpe3ZhciBvPWVbaV0sYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBvP286by5nZXQ7cnx8KG5baV09bmV3IEtyKHQsYXx8eSx5LHFyKSksaSBpbiB0fHxndCh0LGksbyl9fSh0LGUuY29tcHV0ZWQpLGUud2F0Y2gmJmUud2F0Y2ghPT1pciYmZnVuY3Rpb24odCxlKXtmb3IodmFyIG4gaW4gZSl7dmFyIHI9ZVtuXTtpZihBcnJheS5pc0FycmF5KHIpKWZvcih2YXIgaT0wO2k8ci5sZW5ndGg7aSsrKWJ0KHQsbixyW2ldKTtlbHNlIGJ0KHQsbixyKX19KHQsZS53YXRjaCl9ZnVuY3Rpb24gZ3QodCxlLG4pe3ZhciByPSF1cigpO1wiZnVuY3Rpb25cIj09dHlwZW9mIG4/KEpyLmdldD1yP190KGUpOm4sSnIuc2V0PXkpOihKci5nZXQ9bi5nZXQ/ciYmITEhPT1uLmNhY2hlP190KGUpOm4uZ2V0OnksSnIuc2V0PW4uc2V0P24uc2V0OnkpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUsSnIpfWZ1bmN0aW9uIF90KHQpe3JldHVybiBmdW5jdGlvbigpe3ZhciBlPXRoaXMuX2NvbXB1dGVkV2F0Y2hlcnMmJnRoaXMuX2NvbXB1dGVkV2F0Y2hlcnNbdF07aWYoZSlyZXR1cm4gZS5kaXJ0eSYmZS5ldmFsdWF0ZSgpLHZyLnRhcmdldCYmZS5kZXBlbmQoKSxlLnZhbHVlfX1mdW5jdGlvbiBidCh0LGUsbixyKXtyZXR1cm4gbyhuKSYmKHI9bixuPW4uaGFuZGxlciksXCJzdHJpbmdcIj09dHlwZW9mIG4mJihuPXRbbl0pLHQuJHdhdGNoKGUsbixyKX1mdW5jdGlvbiAkdCh0LGUpe2lmKHQpe2Zvcih2YXIgbj1PYmplY3QuY3JlYXRlKG51bGwpLHI9ZnI/UmVmbGVjdC5vd25LZXlzKHQpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KTpPYmplY3Qua2V5cyh0KSxpPTA7aTxyLmxlbmd0aDtpKyspe2Zvcih2YXIgbz1yW2ldLGE9dFtvXS5mcm9tLHM9ZTtzOyl7aWYocy5fcHJvdmlkZWQmJmEgaW4gcy5fcHJvdmlkZWQpe25bb109cy5fcHJvdmlkZWRbYV07YnJlYWt9cz1zLiRwYXJlbnR9aWYoIXMmJlwiZGVmYXVsdFwiaW4gdFtvXSl7dmFyIGM9dFtvXS5kZWZhdWx0O25bb109XCJmdW5jdGlvblwiPT10eXBlb2YgYz9jLmNhbGwoZSk6Y319cmV0dXJuIG59fWZ1bmN0aW9uIEN0KHQsbil7dmFyIHIsbyxhLHMsYztpZihBcnJheS5pc0FycmF5KHQpfHxcInN0cmluZ1wiPT10eXBlb2YgdClmb3Iocj1uZXcgQXJyYXkodC5sZW5ndGgpLG89MCxhPXQubGVuZ3RoO288YTtvKyspcltvXT1uKHRbb10sbyk7ZWxzZSBpZihcIm51bWJlclwiPT10eXBlb2YgdClmb3Iocj1uZXcgQXJyYXkodCksbz0wO288dDtvKyspcltvXT1uKG8rMSxvKTtlbHNlIGlmKGkodCkpZm9yKHM9T2JqZWN0LmtleXModCkscj1uZXcgQXJyYXkocy5sZW5ndGgpLG89MCxhPXMubGVuZ3RoO288YTtvKyspYz1zW29dLHJbb109bih0W2NdLGMsbyk7cmV0dXJuIGUocikmJihyLl9pc1ZMaXN0PSEwKSxyfWZ1bmN0aW9uIHd0KHQsZSxuLHIpe3ZhciBpLG89dGhpcy4kc2NvcGVkU2xvdHNbdF07aWYobyluPW58fHt9LHImJihuPWgoaCh7fSxyKSxuKSksaT1vKG4pfHxlO2Vsc2V7dmFyIGE9dGhpcy4kc2xvdHNbdF07YSYmKGEuX3JlbmRlcmVkPSEwKSxpPWF8fGV9dmFyIHM9biYmbi5zbG90O3JldHVybiBzP3RoaXMuJGNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiLHtzbG90OnN9LGkpOml9ZnVuY3Rpb24geHQodCl7cmV0dXJuIFIodGhpcy4kb3B0aW9ucyxcImZpbHRlcnNcIix0KXx8VW59ZnVuY3Rpb24ga3QodCxlLG4scil7dmFyIGk9Sm4ua2V5Q29kZXNbZV18fG47cmV0dXJuIGk/QXJyYXkuaXNBcnJheShpKT8tMT09PWkuaW5kZXhPZih0KTppIT09dDpyP0huKHIpIT09ZTp2b2lkIDB9ZnVuY3Rpb24gQXQodCxlLG4scixvKXtpZihuKWlmKGkobikpe0FycmF5LmlzQXJyYXkobikmJihuPW0obikpO3ZhciBhLHM9ZnVuY3Rpb24oaSl7aWYoXCJjbGFzc1wiPT09aXx8XCJzdHlsZVwiPT09aXx8TG4oaSkpYT10O2Vsc2V7dmFyIHM9dC5hdHRycyYmdC5hdHRycy50eXBlO2E9cnx8Sm4ubXVzdFVzZVByb3AoZSxzLGkpP3QuZG9tUHJvcHN8fCh0LmRvbVByb3BzPXt9KTp0LmF0dHJzfHwodC5hdHRycz17fSl9aWYoIShpIGluIGEpJiYoYVtpXT1uW2ldLG8pKXsodC5vbnx8KHQub249e30pKVtcInVwZGF0ZTpcIitpXT1mdW5jdGlvbih0KXtuW2ldPXR9fX07Zm9yKHZhciBjIGluIG4pcyhjKX1lbHNlO3JldHVybiB0fWZ1bmN0aW9uIE90KHQsZSl7dmFyIG49dGhpcy5fc3RhdGljVHJlZXN8fCh0aGlzLl9zdGF0aWNUcmVlcz1bXSkscj1uW3RdO3JldHVybiByJiYhZT9BcnJheS5pc0FycmF5KHIpP0Eocik6ayhyKToocj1uW3RdPXRoaXMuJG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zW3RdLmNhbGwodGhpcy5fcmVuZGVyUHJveHksbnVsbCx0aGlzKSxUdChyLFwiX19zdGF0aWNfX1wiK3QsITEpLHIpfWZ1bmN0aW9uIFN0KHQsZSxuKXtyZXR1cm4gVHQodCxcIl9fb25jZV9fXCIrZSsobj9cIl9cIituOlwiXCIpLCEwKSx0fWZ1bmN0aW9uIFR0KHQsZSxuKXtpZihBcnJheS5pc0FycmF5KHQpKWZvcih2YXIgcj0wO3I8dC5sZW5ndGg7cisrKXRbcl0mJlwic3RyaW5nXCIhPXR5cGVvZiB0W3JdJiZFdCh0W3JdLGUrXCJfXCIrcixuKTtlbHNlIEV0KHQsZSxuKX1mdW5jdGlvbiBFdCh0LGUsbil7dC5pc1N0YXRpYz0hMCx0LmtleT1lLHQuaXNPbmNlPW59ZnVuY3Rpb24ganQodCxlKXtpZihlKWlmKG8oZSkpe3ZhciBuPXQub249dC5vbj9oKHt9LHQub24pOnt9O2Zvcih2YXIgciBpbiBlKXt2YXIgaT1uW3JdLGE9ZVtyXTtuW3JdPWk/W10uY29uY2F0KGksYSk6YX19ZWxzZTtyZXR1cm4gdH1mdW5jdGlvbiBOdCh0KXt0Ll9vPVN0LHQuX249Yyx0Ll9zPXMsdC5fbD1DdCx0Ll90PXd0LHQuX3E9Zyx0Ll9pPV8sdC5fbT1PdCx0Ll9mPXh0LHQuX2s9a3QsdC5fYj1BdCx0Ll92PXgsdC5fZT1ncix0Ll91PWx0LHQuX2c9anR9ZnVuY3Rpb24gSXQodCxlLHIsaSxvKXt2YXIgYT1vLm9wdGlvbnM7dGhpcy5kYXRhPXQsdGhpcy5wcm9wcz1lLHRoaXMuY2hpbGRyZW49cix0aGlzLnBhcmVudD1pLHRoaXMubGlzdGVuZXJzPXQub258fGpuLHRoaXMuaW5qZWN0aW9ucz0kdChhLmluamVjdCxpKSx0aGlzLnNsb3RzPWZ1bmN0aW9uKCl7cmV0dXJuIGN0KHIsaSl9O3ZhciBzPU9iamVjdC5jcmVhdGUoaSksYz1uKGEuX2NvbXBpbGVkKSx1PSFjO2MmJih0aGlzLiRvcHRpb25zPWEsdGhpcy4kc2xvdHM9dGhpcy5zbG90cygpLHRoaXMuJHNjb3BlZFNsb3RzPXQuc2NvcGVkU2xvdHN8fGpuKSxhLl9zY29wZUlkP3RoaXMuX2M9ZnVuY3Rpb24odCxlLG4scil7dmFyIG89RHQocyx0LGUsbixyLHUpO3JldHVybiBvJiYoby5mblNjb3BlSWQ9YS5fc2NvcGVJZCxvLmZuQ29udGV4dD1pKSxvfTp0aGlzLl9jPWZ1bmN0aW9uKHQsZSxuLHIpe3JldHVybiBEdChzLHQsZSxuLHIsdSl9fWZ1bmN0aW9uIEx0KHQsZSl7Zm9yKHZhciBuIGluIGUpdFtQbihuKV09ZVtuXX1mdW5jdGlvbiBNdChyLG8sYSxzLGMpe2lmKCF0KHIpKXt2YXIgdT1hLiRvcHRpb25zLl9iYXNlO2lmKGkocikmJihyPXUuZXh0ZW5kKHIpKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiByKXt2YXIgbDtpZih0KHIuY2lkKSYmKGw9cix2b2lkIDA9PT0ocj1mdW5jdGlvbihyLG8sYSl7aWYobihyLmVycm9yKSYmZShyLmVycm9yQ29tcCkpcmV0dXJuIHIuZXJyb3JDb21wO2lmKGUoci5yZXNvbHZlZCkpcmV0dXJuIHIucmVzb2x2ZWQ7aWYobihyLmxvYWRpbmcpJiZlKHIubG9hZGluZ0NvbXApKXJldHVybiByLmxvYWRpbmdDb21wO2lmKCFlKHIuY29udGV4dHMpKXt2YXIgcz1yLmNvbnRleHRzPVthXSxjPSEwLHU9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9MCxlPXMubGVuZ3RoO3Q8ZTt0Kyspc1t0XS4kZm9yY2VVcGRhdGUoKX0sbD1iKGZ1bmN0aW9uKHQpe3IucmVzb2x2ZWQ9bnQodCxvKSxjfHx1KCl9KSxmPWIoZnVuY3Rpb24odCl7ZShyLmVycm9yQ29tcCkmJihyLmVycm9yPSEwLHUoKSl9KSxwPXIobCxmKTtyZXR1cm4gaShwKSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHAudGhlbj90KHIucmVzb2x2ZWQpJiZwLnRoZW4obCxmKTplKHAuY29tcG9uZW50KSYmXCJmdW5jdGlvblwiPT10eXBlb2YgcC5jb21wb25lbnQudGhlbiYmKHAuY29tcG9uZW50LnRoZW4obCxmKSxlKHAuZXJyb3IpJiYoci5lcnJvckNvbXA9bnQocC5lcnJvcixvKSksZShwLmxvYWRpbmcpJiYoci5sb2FkaW5nQ29tcD1udChwLmxvYWRpbmcsbyksMD09PXAuZGVsYXk/ci5sb2FkaW5nPSEwOnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0KHIucmVzb2x2ZWQpJiZ0KHIuZXJyb3IpJiYoci5sb2FkaW5nPSEwLHUoKSl9LHAuZGVsYXl8fDIwMCkpLGUocC50aW1lb3V0KSYmc2V0VGltZW91dChmdW5jdGlvbigpe3Qoci5yZXNvbHZlZCkmJmYobnVsbCl9LHAudGltZW91dCkpKSxjPSExLHIubG9hZGluZz9yLmxvYWRpbmdDb21wOnIucmVzb2x2ZWR9ci5jb250ZXh0cy5wdXNoKGEpfShsLHUsYSkpKSlyZXR1cm4gZnVuY3Rpb24odCxlLG4scixpKXt2YXIgbz1ncigpO3JldHVybiBvLmFzeW5jRmFjdG9yeT10LG8uYXN5bmNNZXRhPXtkYXRhOmUsY29udGV4dDpuLGNoaWxkcmVuOnIsdGFnOml9LG99KGwsbyxhLHMsYyk7bz1vfHx7fSxGdChyKSxlKG8ubW9kZWwpJiZmdW5jdGlvbih0LG4pe3ZhciByPXQubW9kZWwmJnQubW9kZWwucHJvcHx8XCJ2YWx1ZVwiLGk9dC5tb2RlbCYmdC5tb2RlbC5ldmVudHx8XCJpbnB1dFwiOyhuLnByb3BzfHwobi5wcm9wcz17fSkpW3JdPW4ubW9kZWwudmFsdWU7dmFyIG89bi5vbnx8KG4ub249e30pO2Uob1tpXSk/b1tpXT1bbi5tb2RlbC5jYWxsYmFja10uY29uY2F0KG9baV0pOm9baV09bi5tb2RlbC5jYWxsYmFja30oci5vcHRpb25zLG8pO3ZhciBmPWZ1bmN0aW9uKG4scixpKXt2YXIgbz1yLm9wdGlvbnMucHJvcHM7aWYoIXQobykpe3ZhciBhPXt9LHM9bi5hdHRycyxjPW4ucHJvcHM7aWYoZShzKXx8ZShjKSlmb3IodmFyIHUgaW4gbyl7dmFyIGw9SG4odSk7UShhLGMsdSxsLCEwKXx8UShhLHMsdSxsLCExKX1yZXR1cm4gYX19KG8scik7aWYobihyLm9wdGlvbnMuZnVuY3Rpb25hbCkpcmV0dXJuIGZ1bmN0aW9uKHQsbixyLGksbyl7dmFyIGE9dC5vcHRpb25zLHM9e30sYz1hLnByb3BzO2lmKGUoYykpZm9yKHZhciB1IGluIGMpc1t1XT1IKHUsYyxufHxqbik7ZWxzZSBlKHIuYXR0cnMpJiZMdChzLHIuYXR0cnMpLGUoci5wcm9wcykmJkx0KHMsci5wcm9wcyk7dmFyIGw9bmV3IEl0KHIscyxvLGksdCksZj1hLnJlbmRlci5jYWxsKG51bGwsbC5fYyxsKTtyZXR1cm4gZiBpbnN0YW5jZW9mIG1yJiYoZi5mbkNvbnRleHQ9aSxmLmZuT3B0aW9ucz1hLHIuc2xvdCYmKChmLmRhdGF8fChmLmRhdGE9e30pKS5zbG90PXIuc2xvdCkpLGZ9KHIsZixvLGEscyk7dmFyIHA9by5vbjtpZihvLm9uPW8ubmF0aXZlT24sbihyLm9wdGlvbnMuYWJzdHJhY3QpKXt2YXIgZD1vLnNsb3Q7bz17fSxkJiYoby5zbG90PWQpfSFmdW5jdGlvbih0KXt0Lmhvb2t8fCh0Lmhvb2s9e30pO2Zvcih2YXIgZT0wO2U8R3IubGVuZ3RoO2UrKyl7dmFyIG49R3JbZV0scj10Lmhvb2tbbl0saT1XcltuXTt0Lmhvb2tbbl09cj9mdW5jdGlvbih0LGUpe3JldHVybiBmdW5jdGlvbihuLHIsaSxvKXt0KG4scixpLG8pLGUobixyLGksbyl9fShpLHIpOml9fShvKTt2YXIgdj1yLm9wdGlvbnMubmFtZXx8YztyZXR1cm4gbmV3IG1yKFwidnVlLWNvbXBvbmVudC1cIityLmNpZCsodj9cIi1cIit2OlwiXCIpLG8sdm9pZCAwLHZvaWQgMCx2b2lkIDAsYSx7Q3RvcjpyLHByb3BzRGF0YTpmLGxpc3RlbmVyczpwLHRhZzpjLGNoaWxkcmVuOnN9LGwpfX19ZnVuY3Rpb24gRHQodCxpLG8sYSxzLGMpe3JldHVybihBcnJheS5pc0FycmF5KG8pfHxyKG8pKSYmKHM9YSxhPW8sbz12b2lkIDApLG4oYykmJihzPVhyKSxmdW5jdGlvbih0LG4saSxvLGEpe2lmKGUoaSkmJmUoaS5fX29iX18pKXJldHVybiBncigpO2UoaSkmJmUoaS5pcykmJihuPWkuaXMpO2lmKCFuKXJldHVybiBncigpO0FycmF5LmlzQXJyYXkobykmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG9bMF0mJigoaT1pfHx7fSkuc2NvcGVkU2xvdHM9e2RlZmF1bHQ6b1swXX0sby5sZW5ndGg9MCk7YT09PVhyP289ZnVuY3Rpb24odCl7cmV0dXJuIHIodCk/W3godCldOkFycmF5LmlzQXJyYXkodCk/ZXQodCk6dm9pZCAwfShvKTphPT09WnImJihvPWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wO2U8dC5sZW5ndGg7ZSsrKWlmKEFycmF5LmlzQXJyYXkodFtlXSkpcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sdCk7cmV0dXJuIHR9KG8pKTt2YXIgcyxjO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBuKXt2YXIgdTtjPXQuJHZub2RlJiZ0LiR2bm9kZS5uc3x8Sm4uZ2V0VGFnTmFtZXNwYWNlKG4pLHM9Sm4uaXNSZXNlcnZlZFRhZyhuKT9uZXcgbXIoSm4ucGFyc2VQbGF0Zm9ybVRhZ05hbWUobiksaSxvLHZvaWQgMCx2b2lkIDAsdCk6ZSh1PVIodC4kb3B0aW9ucyxcImNvbXBvbmVudHNcIixuKSk/TXQodSxpLHQsbyxuKTpuZXcgbXIobixpLG8sdm9pZCAwLHZvaWQgMCx0KX1lbHNlIHM9TXQobixpLHQsbyk7cmV0dXJuIGUocyk/KGMmJlB0KHMsYykscyk6Z3IoKX0odCxpLG8sYSxzKX1mdW5jdGlvbiBQdChyLGksbyl7aWYoci5ucz1pLFwiZm9yZWlnbk9iamVjdFwiPT09ci50YWcmJihpPXZvaWQgMCxvPSEwKSxlKHIuY2hpbGRyZW4pKWZvcih2YXIgYT0wLHM9ci5jaGlsZHJlbi5sZW5ndGg7YTxzO2ErKyl7dmFyIGM9ci5jaGlsZHJlblthXTtlKGMudGFnKSYmKHQoYy5ucyl8fG4obykpJiZQdChjLGksbyl9fWZ1bmN0aW9uIEZ0KHQpe3ZhciBlPXQub3B0aW9ucztpZih0LnN1cGVyKXt2YXIgbj1GdCh0LnN1cGVyKTtpZihuIT09dC5zdXBlck9wdGlvbnMpe3Quc3VwZXJPcHRpb25zPW47dmFyIHI9ZnVuY3Rpb24odCl7dmFyIGUsbj10Lm9wdGlvbnMscj10LmV4dGVuZE9wdGlvbnMsaT10LnNlYWxlZE9wdGlvbnM7Zm9yKHZhciBvIGluIG4pbltvXSE9PWlbb10mJihlfHwoZT17fSksZVtvXT1mdW5jdGlvbih0LGUsbil7e2lmKEFycmF5LmlzQXJyYXkodCkpe3ZhciByPVtdO249QXJyYXkuaXNBcnJheShuKT9uOltuXSxlPUFycmF5LmlzQXJyYXkoZSk/ZTpbZV07Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspKGUuaW5kZXhPZih0W2ldKT49MHx8bi5pbmRleE9mKHRbaV0pPDApJiZyLnB1c2godFtpXSk7cmV0dXJuIHJ9cmV0dXJuIHR9fShuW29dLHJbb10saVtvXSkpO3JldHVybiBlfSh0KTtyJiZoKHQuZXh0ZW5kT3B0aW9ucyxyKSwoZT10Lm9wdGlvbnM9RihuLHQuZXh0ZW5kT3B0aW9ucykpLm5hbWUmJihlLmNvbXBvbmVudHNbZS5uYW1lXT10KX19cmV0dXJuIGV9ZnVuY3Rpb24gUnQodCl7dGhpcy5faW5pdCh0KX1mdW5jdGlvbiBIdCh0KXt0LmNpZD0wO3ZhciBlPTE7dC5leHRlbmQ9ZnVuY3Rpb24odCl7dD10fHx7fTt2YXIgbj10aGlzLHI9bi5jaWQsaT10Ll9DdG9yfHwodC5fQ3Rvcj17fSk7aWYoaVtyXSlyZXR1cm4gaVtyXTt2YXIgbz10Lm5hbWV8fG4ub3B0aW9ucy5uYW1lLGE9ZnVuY3Rpb24odCl7dGhpcy5faW5pdCh0KX07cmV0dXJuIGEucHJvdG90eXBlPU9iamVjdC5jcmVhdGUobi5wcm90b3R5cGUpLGEucHJvdG90eXBlLmNvbnN0cnVjdG9yPWEsYS5jaWQ9ZSsrLGEub3B0aW9ucz1GKG4ub3B0aW9ucyx0KSxhLnN1cGVyPW4sYS5vcHRpb25zLnByb3BzJiZmdW5jdGlvbih0KXt2YXIgZT10Lm9wdGlvbnMucHJvcHM7Zm9yKHZhciBuIGluIGUpbXQodC5wcm90b3R5cGUsXCJfcHJvcHNcIixuKX0oYSksYS5vcHRpb25zLmNvbXB1dGVkJiZmdW5jdGlvbih0KXt2YXIgZT10Lm9wdGlvbnMuY29tcHV0ZWQ7Zm9yKHZhciBuIGluIGUpZ3QodC5wcm90b3R5cGUsbixlW25dKX0oYSksYS5leHRlbmQ9bi5leHRlbmQsYS5taXhpbj1uLm1peGluLGEudXNlPW4udXNlLHpuLmZvckVhY2goZnVuY3Rpb24odCl7YVt0XT1uW3RdfSksbyYmKGEub3B0aW9ucy5jb21wb25lbnRzW29dPWEpLGEuc3VwZXJPcHRpb25zPW4ub3B0aW9ucyxhLmV4dGVuZE9wdGlvbnM9dCxhLnNlYWxlZE9wdGlvbnM9aCh7fSxhLm9wdGlvbnMpLGlbcl09YSxhfX1mdW5jdGlvbiBCdCh0KXtyZXR1cm4gdCYmKHQuQ3Rvci5vcHRpb25zLm5hbWV8fHQudGFnKX1mdW5jdGlvbiBVdCh0LGUpe3JldHVybiBBcnJheS5pc0FycmF5KHQpP3QuaW5kZXhPZihlKT4tMTpcInN0cmluZ1wiPT10eXBlb2YgdD90LnNwbGl0KFwiLFwiKS5pbmRleE9mKGUpPi0xOiEhZnVuY3Rpb24odCl7cmV0dXJuXCJbb2JqZWN0IFJlZ0V4cF1cIj09PU5uLmNhbGwodCl9KHQpJiZ0LnRlc3QoZSl9ZnVuY3Rpb24gVnQodCxlKXt2YXIgbj10LmNhY2hlLHI9dC5rZXlzLGk9dC5fdm5vZGU7Zm9yKHZhciBvIGluIG4pe3ZhciBhPW5bb107aWYoYSl7dmFyIHM9QnQoYS5jb21wb25lbnRPcHRpb25zKTtzJiYhZShzKSYmenQobixvLHIsaSl9fX1mdW5jdGlvbiB6dCh0LGUsbixyKXt2YXIgaT10W2VdOyFpfHxyJiZpLnRhZz09PXIudGFnfHxpLmNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCksdFtlXT1udWxsLGwobixlKX1mdW5jdGlvbiBLdCh0KXtmb3IodmFyIG49dC5kYXRhLHI9dCxpPXQ7ZShpLmNvbXBvbmVudEluc3RhbmNlKTspKGk9aS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUpJiZpLmRhdGEmJihuPUp0KGkuZGF0YSxuKSk7Zm9yKDtlKHI9ci5wYXJlbnQpOylyJiZyLmRhdGEmJihuPUp0KG4sci5kYXRhKSk7cmV0dXJuIGZ1bmN0aW9uKHQsbil7aWYoZSh0KXx8ZShuKSlyZXR1cm4gcXQodCxXdChuKSk7cmV0dXJuXCJcIn0obi5zdGF0aWNDbGFzcyxuLmNsYXNzKX1mdW5jdGlvbiBKdCh0LG4pe3JldHVybntzdGF0aWNDbGFzczpxdCh0LnN0YXRpY0NsYXNzLG4uc3RhdGljQ2xhc3MpLGNsYXNzOmUodC5jbGFzcyk/W3QuY2xhc3Msbi5jbGFzc106bi5jbGFzc319ZnVuY3Rpb24gcXQodCxlKXtyZXR1cm4gdD9lP3QrXCIgXCIrZTp0OmV8fFwiXCJ9ZnVuY3Rpb24gV3QodCl7cmV0dXJuIEFycmF5LmlzQXJyYXkodCk/ZnVuY3Rpb24odCl7Zm9yKHZhciBuLHI9XCJcIixpPTAsbz10Lmxlbmd0aDtpPG87aSsrKWUobj1XdCh0W2ldKSkmJlwiXCIhPT1uJiYociYmKHIrPVwiIFwiKSxyKz1uKTtyZXR1cm4gcn0odCk6aSh0KT9mdW5jdGlvbih0KXt2YXIgZT1cIlwiO2Zvcih2YXIgbiBpbiB0KXRbbl0mJihlJiYoZSs9XCIgXCIpLGUrPW4pO3JldHVybiBlfSh0KTpcInN0cmluZ1wiPT10eXBlb2YgdD90OlwiXCJ9ZnVuY3Rpb24gR3QodCl7cmV0dXJuIGJpKHQpP1wic3ZnXCI6XCJtYXRoXCI9PT10P1wibWF0aFwiOnZvaWQgMH1mdW5jdGlvbiBadCh0KXtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7dmFyIGU9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0KTtyZXR1cm4gZXx8ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKX1yZXR1cm4gdH1mdW5jdGlvbiBYdCh0LGUpe3ZhciBuPXQuZGF0YS5yZWY7aWYobil7dmFyIHI9dC5jb250ZXh0LGk9dC5jb21wb25lbnRJbnN0YW5jZXx8dC5lbG0sbz1yLiRyZWZzO2U/QXJyYXkuaXNBcnJheShvW25dKT9sKG9bbl0saSk6b1tuXT09PWkmJihvW25dPXZvaWQgMCk6dC5kYXRhLnJlZkluRm9yP0FycmF5LmlzQXJyYXkob1tuXSk/b1tuXS5pbmRleE9mKGkpPDAmJm9bbl0ucHVzaChpKTpvW25dPVtpXTpvW25dPWl9fWZ1bmN0aW9uIFl0KHIsaSl7cmV0dXJuIHIua2V5PT09aS5rZXkmJihyLnRhZz09PWkudGFnJiZyLmlzQ29tbWVudD09PWkuaXNDb21tZW50JiZlKHIuZGF0YSk9PT1lKGkuZGF0YSkmJmZ1bmN0aW9uKHQsbil7aWYoXCJpbnB1dFwiIT09dC50YWcpcmV0dXJuITA7dmFyIHIsaT1lKHI9dC5kYXRhKSYmZShyPXIuYXR0cnMpJiZyLnR5cGUsbz1lKHI9bi5kYXRhKSYmZShyPXIuYXR0cnMpJiZyLnR5cGU7cmV0dXJuIGk9PT1vfHx3aShpKSYmd2kobyl9KHIsaSl8fG4oci5pc0FzeW5jUGxhY2Vob2xkZXIpJiZyLmFzeW5jRmFjdG9yeT09PWkuYXN5bmNGYWN0b3J5JiZ0KGkuYXN5bmNGYWN0b3J5LmVycm9yKSl9ZnVuY3Rpb24gUXQodCxuLHIpe3ZhciBpLG8sYT17fTtmb3IoaT1uO2k8PXI7KytpKWUobz10W2ldLmtleSkmJihhW29dPWkpO3JldHVybiBhfWZ1bmN0aW9uIHRlKHQsZSl7KHQuZGF0YS5kaXJlY3RpdmVzfHxlLmRhdGEuZGlyZWN0aXZlcykmJmZ1bmN0aW9uKHQsZSl7dmFyIG4scixpLG89dD09PUFpLGE9ZT09PUFpLHM9ZWUodC5kYXRhLmRpcmVjdGl2ZXMsdC5jb250ZXh0KSxjPWVlKGUuZGF0YS5kaXJlY3RpdmVzLGUuY29udGV4dCksdT1bXSxsPVtdO2ZvcihuIGluIGMpcj1zW25dLGk9Y1tuXSxyPyhpLm9sZFZhbHVlPXIudmFsdWUsbmUoaSxcInVwZGF0ZVwiLGUsdCksaS5kZWYmJmkuZGVmLmNvbXBvbmVudFVwZGF0ZWQmJmwucHVzaChpKSk6KG5lKGksXCJiaW5kXCIsZSx0KSxpLmRlZiYmaS5kZWYuaW5zZXJ0ZWQmJnUucHVzaChpKSk7aWYodS5sZW5ndGgpe3ZhciBmPWZ1bmN0aW9uKCl7Zm9yKHZhciBuPTA7bjx1Lmxlbmd0aDtuKyspbmUodVtuXSxcImluc2VydGVkXCIsZSx0KX07bz9ZKGUsXCJpbnNlcnRcIixmKTpmKCl9bC5sZW5ndGgmJlkoZSxcInBvc3RwYXRjaFwiLGZ1bmN0aW9uKCl7Zm9yKHZhciBuPTA7bjxsLmxlbmd0aDtuKyspbmUobFtuXSxcImNvbXBvbmVudFVwZGF0ZWRcIixlLHQpfSk7aWYoIW8pZm9yKG4gaW4gcyljW25dfHxuZShzW25dLFwidW5iaW5kXCIsdCx0LGEpfSh0LGUpfWZ1bmN0aW9uIGVlKHQsZSl7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZighdClyZXR1cm4gbjt2YXIgcixpO2ZvcihyPTA7cjx0Lmxlbmd0aDtyKyspKGk9dFtyXSkubW9kaWZpZXJzfHwoaS5tb2RpZmllcnM9VGkpLG5bZnVuY3Rpb24odCl7cmV0dXJuIHQucmF3TmFtZXx8dC5uYW1lK1wiLlwiK09iamVjdC5rZXlzKHQubW9kaWZpZXJzfHx7fSkuam9pbihcIi5cIil9KGkpXT1pLGkuZGVmPVIoZS4kb3B0aW9ucyxcImRpcmVjdGl2ZXNcIixpLm5hbWUpO3JldHVybiBufWZ1bmN0aW9uIG5lKHQsZSxuLHIsaSl7dmFyIG89dC5kZWYmJnQuZGVmW2VdO2lmKG8pdHJ5e28obi5lbG0sdCxuLHIsaSl9Y2F0Y2gocil7VihyLG4uY29udGV4dCxcImRpcmVjdGl2ZSBcIit0Lm5hbWUrXCIgXCIrZStcIiBob29rXCIpfX1mdW5jdGlvbiByZShuLHIpe3ZhciBpPXIuY29tcG9uZW50T3B0aW9ucztpZighKGUoaSkmJiExPT09aS5DdG9yLm9wdGlvbnMuaW5oZXJpdEF0dHJzfHx0KG4uZGF0YS5hdHRycykmJnQoci5kYXRhLmF0dHJzKSkpe3ZhciBvLGEscz1yLmVsbSxjPW4uZGF0YS5hdHRyc3x8e30sdT1yLmRhdGEuYXR0cnN8fHt9O2UodS5fX29iX18pJiYodT1yLmRhdGEuYXR0cnM9aCh7fSx1KSk7Zm9yKG8gaW4gdSlhPXVbb10sY1tvXSE9PWEmJmllKHMsbyxhKTsoUW58fGVyKSYmdS52YWx1ZSE9PWMudmFsdWUmJmllKHMsXCJ2YWx1ZVwiLHUudmFsdWUpO2ZvcihvIGluIGMpdCh1W29dKSYmKGhpKG8pP3MucmVtb3ZlQXR0cmlidXRlTlModmksbWkobykpOnBpKG8pfHxzLnJlbW92ZUF0dHJpYnV0ZShvKSl9fWZ1bmN0aW9uIGllKHQsZSxuKXtpZihkaShlKSl5aShuKT90LnJlbW92ZUF0dHJpYnV0ZShlKToobj1cImFsbG93ZnVsbHNjcmVlblwiPT09ZSYmXCJFTUJFRFwiPT09dC50YWdOYW1lP1widHJ1ZVwiOmUsdC5zZXRBdHRyaWJ1dGUoZSxuKSk7ZWxzZSBpZihwaShlKSl0LnNldEF0dHJpYnV0ZShlLHlpKG4pfHxcImZhbHNlXCI9PT1uP1wiZmFsc2VcIjpcInRydWVcIik7ZWxzZSBpZihoaShlKSl5aShuKT90LnJlbW92ZUF0dHJpYnV0ZU5TKHZpLG1pKGUpKTp0LnNldEF0dHJpYnV0ZU5TKHZpLGUsbik7ZWxzZSBpZih5aShuKSl0LnJlbW92ZUF0dHJpYnV0ZShlKTtlbHNle2lmKFFuJiYhdHImJlwiVEVYVEFSRUFcIj09PXQudGFnTmFtZSYmXCJwbGFjZWhvbGRlclwiPT09ZSYmIXQuX19pZXBoKXt2YXIgcj1mdW5jdGlvbihlKXtlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIscil9O3QuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsciksdC5fX2llcGg9ITB9dC5zZXRBdHRyaWJ1dGUoZSxuKX19ZnVuY3Rpb24gb2UobixyKXt2YXIgaT1yLmVsbSxvPXIuZGF0YSxhPW4uZGF0YTtpZighKHQoby5zdGF0aWNDbGFzcykmJnQoby5jbGFzcykmJih0KGEpfHx0KGEuc3RhdGljQ2xhc3MpJiZ0KGEuY2xhc3MpKSkpe3ZhciBzPUt0KHIpLGM9aS5fdHJhbnNpdGlvbkNsYXNzZXM7ZShjKSYmKHM9cXQocyxXdChjKSkpLHMhPT1pLl9wcmV2Q2xhc3MmJihpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIscyksaS5fcHJldkNsYXNzPXMpfX1mdW5jdGlvbiBhZSh0KXtmdW5jdGlvbiBlKCl7KGF8fChhPVtdKSkucHVzaCh0LnNsaWNlKHYsaSkudHJpbSgpKSx2PWkrMX12YXIgbixyLGksbyxhLHM9ITEsYz0hMSx1PSExLGw9ITEsZj0wLHA9MCxkPTAsdj0wO2ZvcihpPTA7aTx0Lmxlbmd0aDtpKyspaWYocj1uLG49dC5jaGFyQ29kZUF0KGkpLHMpMzk9PT1uJiY5MiE9PXImJihzPSExKTtlbHNlIGlmKGMpMzQ9PT1uJiY5MiE9PXImJihjPSExKTtlbHNlIGlmKHUpOTY9PT1uJiY5MiE9PXImJih1PSExKTtlbHNlIGlmKGwpNDc9PT1uJiY5MiE9PXImJihsPSExKTtlbHNlIGlmKDEyNCE9PW58fDEyND09PXQuY2hhckNvZGVBdChpKzEpfHwxMjQ9PT10LmNoYXJDb2RlQXQoaS0xKXx8Znx8cHx8ZCl7c3dpdGNoKG4pe2Nhc2UgMzQ6Yz0hMDticmVhaztjYXNlIDM5OnM9ITA7YnJlYWs7Y2FzZSA5Njp1PSEwO2JyZWFrO2Nhc2UgNDA6ZCsrO2JyZWFrO2Nhc2UgNDE6ZC0tO2JyZWFrO2Nhc2UgOTE6cCsrO2JyZWFrO2Nhc2UgOTM6cC0tO2JyZWFrO2Nhc2UgMTIzOmYrKzticmVhaztjYXNlIDEyNTpmLS19aWYoNDc9PT1uKXtmb3IodmFyIGg9aS0xLG09dm9pZCAwO2g+PTAmJlwiIFwiPT09KG09dC5jaGFyQXQoaCkpO2gtLSk7bSYmSWkudGVzdChtKXx8KGw9ITApfX1lbHNlIHZvaWQgMD09PW8/KHY9aSsxLG89dC5zbGljZSgwLGkpLnRyaW0oKSk6ZSgpO2lmKHZvaWQgMD09PW8/bz10LnNsaWNlKDAsaSkudHJpbSgpOjAhPT12JiZlKCksYSlmb3IoaT0wO2k8YS5sZW5ndGg7aSsrKW89ZnVuY3Rpb24odCxlKXt2YXIgbj1lLmluZGV4T2YoXCIoXCIpO3tpZihuPDApcmV0dXJuJ19mKFwiJytlKydcIikoJyt0K1wiKVwiO3ZhciByPWUuc2xpY2UoMCxuKSxpPWUuc2xpY2UobisxKTtyZXR1cm4nX2YoXCInK3IrJ1wiKSgnK3QrXCIsXCIraX19KG8sYVtpXSk7cmV0dXJuIG99ZnVuY3Rpb24gc2UodCl7Y29uc29sZS5lcnJvcihcIltWdWUgY29tcGlsZXJdOiBcIit0KX1mdW5jdGlvbiBjZSh0LGUpe3JldHVybiB0P3QubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0W2VdfSkuZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0fSk6W119ZnVuY3Rpb24gdWUodCxlLG4peyh0LnByb3BzfHwodC5wcm9wcz1bXSkpLnB1c2goe25hbWU6ZSx2YWx1ZTpufSksdC5wbGFpbj0hMX1mdW5jdGlvbiBsZSh0LGUsbil7KHQuYXR0cnN8fCh0LmF0dHJzPVtdKSkucHVzaCh7bmFtZTplLHZhbHVlOm59KSx0LnBsYWluPSExfWZ1bmN0aW9uIGZlKHQsZSxuKXt0LmF0dHJzTWFwW2VdPW4sdC5hdHRyc0xpc3QucHVzaCh7bmFtZTplLHZhbHVlOm59KX1mdW5jdGlvbiBwZSh0LGUsbixyLGksbyl7KHQuZGlyZWN0aXZlc3x8KHQuZGlyZWN0aXZlcz1bXSkpLnB1c2goe25hbWU6ZSxyYXdOYW1lOm4sdmFsdWU6cixhcmc6aSxtb2RpZmllcnM6b30pLHQucGxhaW49ITF9ZnVuY3Rpb24gZGUodCxlLG4scixpLG8peyhyPXJ8fGpuKS5jYXB0dXJlJiYoZGVsZXRlIHIuY2FwdHVyZSxlPVwiIVwiK2UpLHIub25jZSYmKGRlbGV0ZSByLm9uY2UsZT1cIn5cIitlKSxyLnBhc3NpdmUmJihkZWxldGUgci5wYXNzaXZlLGU9XCImXCIrZSksXCJjbGlja1wiPT09ZSYmKHIucmlnaHQ/KGU9XCJjb250ZXh0bWVudVwiLGRlbGV0ZSByLnJpZ2h0KTpyLm1pZGRsZSYmKGU9XCJtb3VzZXVwXCIpKTt2YXIgYTtyLm5hdGl2ZT8oZGVsZXRlIHIubmF0aXZlLGE9dC5uYXRpdmVFdmVudHN8fCh0Lm5hdGl2ZUV2ZW50cz17fSkpOmE9dC5ldmVudHN8fCh0LmV2ZW50cz17fSk7dmFyIHM9e3ZhbHVlOm59O3IhPT1qbiYmKHMubW9kaWZpZXJzPXIpO3ZhciBjPWFbZV07QXJyYXkuaXNBcnJheShjKT9pP2MudW5zaGlmdChzKTpjLnB1c2gocyk6YVtlXT1jP2k/W3MsY106W2Msc106cyx0LnBsYWluPSExfWZ1bmN0aW9uIHZlKHQsZSxuKXt2YXIgcj1oZSh0LFwiOlwiK2UpfHxoZSh0LFwidi1iaW5kOlwiK2UpO2lmKG51bGwhPXIpcmV0dXJuIGFlKHIpO2lmKCExIT09bil7dmFyIGk9aGUodCxlKTtpZihudWxsIT1pKXJldHVybiBKU09OLnN0cmluZ2lmeShpKX19ZnVuY3Rpb24gaGUodCxlLG4pe3ZhciByO2lmKG51bGwhPShyPXQuYXR0cnNNYXBbZV0pKWZvcih2YXIgaT10LmF0dHJzTGlzdCxvPTAsYT1pLmxlbmd0aDtvPGE7bysrKWlmKGlbb10ubmFtZT09PWUpe2kuc3BsaWNlKG8sMSk7YnJlYWt9cmV0dXJuIG4mJmRlbGV0ZSB0LmF0dHJzTWFwW2VdLHJ9ZnVuY3Rpb24gbWUodCxlLG4pe3ZhciByPW58fHt9LGk9XCIkJHZcIjtyLnRyaW0mJihpPVwiKHR5cGVvZiAkJHYgPT09ICdzdHJpbmcnPyAkJHYudHJpbSgpOiAkJHYpXCIpLHIubnVtYmVyJiYoaT1cIl9uKFwiK2krXCIpXCIpO3ZhciBvPXllKGUsaSk7dC5tb2RlbD17dmFsdWU6XCIoXCIrZStcIilcIixleHByZXNzaW9uOidcIicrZSsnXCInLGNhbGxiYWNrOlwiZnVuY3Rpb24gKCQkdikge1wiK28rXCJ9XCJ9fWZ1bmN0aW9uIHllKHQsZSl7dmFyIG49ZnVuY3Rpb24odCl7aWYoZWk9dC5sZW5ndGgsdC5pbmRleE9mKFwiW1wiKTwwfHx0Lmxhc3RJbmRleE9mKFwiXVwiKTxlaS0xKXJldHVybihpaT10Lmxhc3RJbmRleE9mKFwiLlwiKSk+LTE/e2V4cDp0LnNsaWNlKDAsaWkpLGtleTonXCInK3Quc2xpY2UoaWkrMSkrJ1wiJ306e2V4cDp0LGtleTpudWxsfTtuaT10LGlpPW9pPWFpPTA7Zm9yKDshX2UoKTspYmUocmk9Z2UoKSk/JGUocmkpOjkxPT09cmkmJmZ1bmN0aW9uKHQpe3ZhciBlPTE7b2k9aWk7Zm9yKDshX2UoKTspaWYodD1nZSgpLGJlKHQpKSRlKHQpO2Vsc2UgaWYoOTE9PT10JiZlKyssOTM9PT10JiZlLS0sMD09PWUpe2FpPWlpO2JyZWFrfX0ocmkpO3JldHVybntleHA6dC5zbGljZSgwLG9pKSxrZXk6dC5zbGljZShvaSsxLGFpKX19KHQpO3JldHVybiBudWxsPT09bi5rZXk/dCtcIj1cIitlOlwiJHNldChcIituLmV4cCtcIiwgXCIrbi5rZXkrXCIsIFwiK2UrXCIpXCJ9ZnVuY3Rpb24gZ2UoKXtyZXR1cm4gbmkuY2hhckNvZGVBdCgrK2lpKX1mdW5jdGlvbiBfZSgpe3JldHVybiBpaT49ZWl9ZnVuY3Rpb24gYmUodCl7cmV0dXJuIDM0PT09dHx8Mzk9PT10fWZ1bmN0aW9uICRlKHQpe2Zvcih2YXIgZT10OyFfZSgpJiYodD1nZSgpKSE9PWU7KTt9ZnVuY3Rpb24gQ2UodCxlLG4scixpKXtlPWZ1bmN0aW9uKHQpe3JldHVybiB0Ll93aXRoVGFza3x8KHQuX3dpdGhUYXNrPWZ1bmN0aW9uKCl7RXI9ITA7dmFyIGU9dC5hcHBseShudWxsLGFyZ3VtZW50cyk7cmV0dXJuIEVyPSExLGV9KX0oZSksbiYmKGU9ZnVuY3Rpb24odCxlLG4pe3ZhciByPXNpO3JldHVybiBmdW5jdGlvbiBpKCl7bnVsbCE9PXQuYXBwbHkobnVsbCxhcmd1bWVudHMpJiZ3ZShlLGksbixyKX19KGUsdCxyKSksc2kuYWRkRXZlbnRMaXN0ZW5lcih0LGUsb3I/e2NhcHR1cmU6cixwYXNzaXZlOml9OnIpfWZ1bmN0aW9uIHdlKHQsZSxuLHIpeyhyfHxzaSkucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LGUuX3dpdGhUYXNrfHxlLG4pfWZ1bmN0aW9uIHhlKG4scil7aWYoIXQobi5kYXRhLm9uKXx8IXQoci5kYXRhLm9uKSl7dmFyIGk9ci5kYXRhLm9ufHx7fSxvPW4uZGF0YS5vbnx8e307c2k9ci5lbG0sZnVuY3Rpb24odCl7aWYoZSh0W0xpXSkpe3ZhciBuPVFuP1wiY2hhbmdlXCI6XCJpbnB1dFwiO3Rbbl09W10uY29uY2F0KHRbTGldLHRbbl18fFtdKSxkZWxldGUgdFtMaV19ZSh0W01pXSkmJih0LmNoYW5nZT1bXS5jb25jYXQodFtNaV0sdC5jaGFuZ2V8fFtdKSxkZWxldGUgdFtNaV0pfShpKSxYKGksbyxDZSx3ZSxyLmNvbnRleHQpLHNpPXZvaWQgMH19ZnVuY3Rpb24ga2UobixyKXtpZighdChuLmRhdGEuZG9tUHJvcHMpfHwhdChyLmRhdGEuZG9tUHJvcHMpKXt2YXIgaSxvLGE9ci5lbG0scz1uLmRhdGEuZG9tUHJvcHN8fHt9LHU9ci5kYXRhLmRvbVByb3BzfHx7fTtlKHUuX19vYl9fKSYmKHU9ci5kYXRhLmRvbVByb3BzPWgoe30sdSkpO2ZvcihpIGluIHMpdCh1W2ldKSYmKGFbaV09XCJcIik7Zm9yKGkgaW4gdSl7aWYobz11W2ldLFwidGV4dENvbnRlbnRcIj09PWl8fFwiaW5uZXJIVE1MXCI9PT1pKXtpZihyLmNoaWxkcmVuJiYoci5jaGlsZHJlbi5sZW5ndGg9MCksbz09PXNbaV0pY29udGludWU7MT09PWEuY2hpbGROb2Rlcy5sZW5ndGgmJmEucmVtb3ZlQ2hpbGQoYS5jaGlsZE5vZGVzWzBdKX1pZihcInZhbHVlXCI9PT1pKXthLl92YWx1ZT1vO3ZhciBsPXQobyk/XCJcIjpTdHJpbmcobyk7KGZ1bmN0aW9uKHQsbil7cmV0dXJuIXQuY29tcG9zaW5nJiYoXCJPUFRJT05cIj09PXQudGFnTmFtZXx8ZnVuY3Rpb24odCxlKXt2YXIgbj0hMDt0cnl7bj1kb2N1bWVudC5hY3RpdmVFbGVtZW50IT09dH1jYXRjaCh0KXt9cmV0dXJuIG4mJnQudmFsdWUhPT1lfSh0LG4pfHxmdW5jdGlvbih0LG4pe3ZhciByPXQudmFsdWUsaT10Ll92TW9kaWZpZXJzO2lmKGUoaSkpe2lmKGkubGF6eSlyZXR1cm4hMTtpZihpLm51bWJlcilyZXR1cm4gYyhyKSE9PWMobik7aWYoaS50cmltKXJldHVybiByLnRyaW0oKSE9PW4udHJpbSgpfXJldHVybiByIT09bn0odCxuKSl9KShhLGwpJiYoYS52YWx1ZT1sKX1lbHNlIGFbaV09b319fWZ1bmN0aW9uIEFlKHQpe3ZhciBlPU9lKHQuc3R5bGUpO3JldHVybiB0LnN0YXRpY1N0eWxlP2godC5zdGF0aWNTdHlsZSxlKTplfWZ1bmN0aW9uIE9lKHQpe3JldHVybiBBcnJheS5pc0FycmF5KHQpP20odCk6XCJzdHJpbmdcIj09dHlwZW9mIHQ/RmkodCk6dH1mdW5jdGlvbiBTZShuLHIpe3ZhciBpPXIuZGF0YSxvPW4uZGF0YTtpZighKHQoaS5zdGF0aWNTdHlsZSkmJnQoaS5zdHlsZSkmJnQoby5zdGF0aWNTdHlsZSkmJnQoby5zdHlsZSkpKXt2YXIgYSxzLGM9ci5lbG0sdT1vLnN0YXRpY1N0eWxlLGw9by5ub3JtYWxpemVkU3R5bGV8fG8uc3R5bGV8fHt9LGY9dXx8bCxwPU9lKHIuZGF0YS5zdHlsZSl8fHt9O3IuZGF0YS5ub3JtYWxpemVkU3R5bGU9ZShwLl9fb2JfXyk/aCh7fSxwKTpwO3ZhciBkPWZ1bmN0aW9uKHQsZSl7dmFyIG4scj17fTtpZihlKWZvcih2YXIgaT10O2kuY29tcG9uZW50SW5zdGFuY2U7KShpPWkuY29tcG9uZW50SW5zdGFuY2UuX3Zub2RlKSYmaS5kYXRhJiYobj1BZShpLmRhdGEpKSYmaChyLG4pOyhuPUFlKHQuZGF0YSkpJiZoKHIsbik7Zm9yKHZhciBvPXQ7bz1vLnBhcmVudDspby5kYXRhJiYobj1BZShvLmRhdGEpKSYmaChyLG4pO3JldHVybiByfShyLCEwKTtmb3IocyBpbiBmKXQoZFtzXSkmJkJpKGMscyxcIlwiKTtmb3IocyBpbiBkKShhPWRbc10pIT09ZltzXSYmQmkoYyxzLG51bGw9PWE/XCJcIjphKX19ZnVuY3Rpb24gVGUodCxlKXtpZihlJiYoZT1lLnRyaW0oKSkpaWYodC5jbGFzc0xpc3QpZS5pbmRleE9mKFwiIFwiKT4tMT9lLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gdC5jbGFzc0xpc3QuYWRkKGUpfSk6dC5jbGFzc0xpc3QuYWRkKGUpO2Vsc2V7dmFyIG49XCIgXCIrKHQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIpK1wiIFwiO24uaW5kZXhPZihcIiBcIitlK1wiIFwiKTwwJiZ0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsKG4rZSkudHJpbSgpKX19ZnVuY3Rpb24gRWUodCxlKXtpZihlJiYoZT1lLnRyaW0oKSkpaWYodC5jbGFzc0xpc3QpZS5pbmRleE9mKFwiIFwiKT4tMT9lLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbihlKXtyZXR1cm4gdC5jbGFzc0xpc3QucmVtb3ZlKGUpfSk6dC5jbGFzc0xpc3QucmVtb3ZlKGUpLHQuY2xhc3NMaXN0Lmxlbmd0aHx8dC5yZW1vdmVBdHRyaWJ1dGUoXCJjbGFzc1wiKTtlbHNle2Zvcih2YXIgbj1cIiBcIisodC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKXx8XCJcIikrXCIgXCIscj1cIiBcIitlK1wiIFwiO24uaW5kZXhPZihyKT49MDspbj1uLnJlcGxhY2UocixcIiBcIik7KG49bi50cmltKCkpP3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIixuKTp0LnJlbW92ZUF0dHJpYnV0ZShcImNsYXNzXCIpfX1mdW5jdGlvbiBqZSh0KXtpZih0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgdCl7dmFyIGU9e307cmV0dXJuITEhPT10LmNzcyYmaChlLEtpKHQubmFtZXx8XCJ2XCIpKSxoKGUsdCksZX1yZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdD9LaSh0KTp2b2lkIDB9fWZ1bmN0aW9uIE5lKHQpe1FpKGZ1bmN0aW9uKCl7UWkodCl9KX1mdW5jdGlvbiBJZSh0LGUpe3ZhciBuPXQuX3RyYW5zaXRpb25DbGFzc2VzfHwodC5fdHJhbnNpdGlvbkNsYXNzZXM9W10pO24uaW5kZXhPZihlKTwwJiYobi5wdXNoKGUpLFRlKHQsZSkpfWZ1bmN0aW9uIExlKHQsZSl7dC5fdHJhbnNpdGlvbkNsYXNzZXMmJmwodC5fdHJhbnNpdGlvbkNsYXNzZXMsZSksRWUodCxlKX1mdW5jdGlvbiBNZSh0LGUsbil7dmFyIHI9RGUodCxlKSxpPXIudHlwZSxvPXIudGltZW91dCxhPXIucHJvcENvdW50O2lmKCFpKXJldHVybiBuKCk7dmFyIHM9aT09PXFpP1ppOllpLGM9MCx1PWZ1bmN0aW9uKCl7dC5yZW1vdmVFdmVudExpc3RlbmVyKHMsbCksbigpfSxsPWZ1bmN0aW9uKGUpe2UudGFyZ2V0PT09dCYmKytjPj1hJiZ1KCl9O3NldFRpbWVvdXQoZnVuY3Rpb24oKXtjPGEmJnUoKX0sbysxKSx0LmFkZEV2ZW50TGlzdGVuZXIocyxsKX1mdW5jdGlvbiBEZSh0LGUpe3ZhciBuLHI9d2luZG93LmdldENvbXB1dGVkU3R5bGUodCksaT1yW0dpK1wiRGVsYXlcIl0uc3BsaXQoXCIsIFwiKSxvPXJbR2krXCJEdXJhdGlvblwiXS5zcGxpdChcIiwgXCIpLGE9UGUoaSxvKSxzPXJbWGkrXCJEZWxheVwiXS5zcGxpdChcIiwgXCIpLGM9cltYaStcIkR1cmF0aW9uXCJdLnNwbGl0KFwiLCBcIiksdT1QZShzLGMpLGw9MCxmPTA7ZT09PXFpP2E+MCYmKG49cWksbD1hLGY9by5sZW5ndGgpOmU9PT1XaT91PjAmJihuPVdpLGw9dSxmPWMubGVuZ3RoKTpmPShuPShsPU1hdGgubWF4KGEsdSkpPjA/YT51P3FpOldpOm51bGwpP249PT1xaT9vLmxlbmd0aDpjLmxlbmd0aDowO3JldHVybnt0eXBlOm4sdGltZW91dDpsLHByb3BDb3VudDpmLGhhc1RyYW5zZm9ybTpuPT09cWkmJnRvLnRlc3QocltHaStcIlByb3BlcnR5XCJdKX19ZnVuY3Rpb24gUGUodCxlKXtmb3IoO3QubGVuZ3RoPGUubGVuZ3RoOyl0PXQuY29uY2F0KHQpO3JldHVybiBNYXRoLm1heC5hcHBseShudWxsLGUubWFwKGZ1bmN0aW9uKGUsbil7cmV0dXJuIEZlKGUpK0ZlKHRbbl0pfSkpfWZ1bmN0aW9uIEZlKHQpe3JldHVybiAxZTMqTnVtYmVyKHQuc2xpY2UoMCwtMSkpfWZ1bmN0aW9uIFJlKG4scil7dmFyIG89bi5lbG07ZShvLl9sZWF2ZUNiKSYmKG8uX2xlYXZlQ2IuY2FuY2VsbGVkPSEwLG8uX2xlYXZlQ2IoKSk7dmFyIGE9amUobi5kYXRhLnRyYW5zaXRpb24pO2lmKCF0KGEpJiYhZShvLl9lbnRlckNiKSYmMT09PW8ubm9kZVR5cGUpe2Zvcih2YXIgcz1hLmNzcyx1PWEudHlwZSxsPWEuZW50ZXJDbGFzcyxmPWEuZW50ZXJUb0NsYXNzLHA9YS5lbnRlckFjdGl2ZUNsYXNzLGQ9YS5hcHBlYXJDbGFzcyx2PWEuYXBwZWFyVG9DbGFzcyxoPWEuYXBwZWFyQWN0aXZlQ2xhc3MsbT1hLmJlZm9yZUVudGVyLHk9YS5lbnRlcixnPWEuYWZ0ZXJFbnRlcixfPWEuZW50ZXJDYW5jZWxsZWQsJD1hLmJlZm9yZUFwcGVhcixDPWEuYXBwZWFyLHc9YS5hZnRlckFwcGVhcix4PWEuYXBwZWFyQ2FuY2VsbGVkLGs9YS5kdXJhdGlvbixBPVByLE89UHIuJHZub2RlO08mJk8ucGFyZW50OylBPShPPU8ucGFyZW50KS5jb250ZXh0O3ZhciBTPSFBLl9pc01vdW50ZWR8fCFuLmlzUm9vdEluc2VydDtpZighU3x8Q3x8XCJcIj09PUMpe3ZhciBUPVMmJmQ/ZDpsLEU9UyYmaD9oOnAsaj1TJiZ2P3Y6ZixOPVM/JHx8bTptLEk9UyYmXCJmdW5jdGlvblwiPT10eXBlb2YgQz9DOnksTD1TP3d8fGc6ZyxNPVM/eHx8XzpfLEQ9YyhpKGspP2suZW50ZXI6ayksUD0hMSE9PXMmJiF0cixGPVVlKEkpLFI9by5fZW50ZXJDYj1iKGZ1bmN0aW9uKCl7UCYmKExlKG8saiksTGUobyxFKSksUi5jYW5jZWxsZWQ/KFAmJkxlKG8sVCksTSYmTShvKSk6TCYmTChvKSxvLl9lbnRlckNiPW51bGx9KTtuLmRhdGEuc2hvd3x8WShuLFwiaW5zZXJ0XCIsZnVuY3Rpb24oKXt2YXIgdD1vLnBhcmVudE5vZGUsZT10JiZ0Ll9wZW5kaW5nJiZ0Ll9wZW5kaW5nW24ua2V5XTtlJiZlLnRhZz09PW4udGFnJiZlLmVsbS5fbGVhdmVDYiYmZS5lbG0uX2xlYXZlQ2IoKSxJJiZJKG8sUil9KSxOJiZOKG8pLFAmJihJZShvLFQpLEllKG8sRSksTmUoZnVuY3Rpb24oKXtJZShvLGopLExlKG8sVCksUi5jYW5jZWxsZWR8fEZ8fChCZShEKT9zZXRUaW1lb3V0KFIsRCk6TWUobyx1LFIpKX0pKSxuLmRhdGEuc2hvdyYmKHImJnIoKSxJJiZJKG8sUikpLFB8fEZ8fFIoKX19fWZ1bmN0aW9uIEhlKG4scil7ZnVuY3Rpb24gbygpe3guY2FuY2VsbGVkfHwobi5kYXRhLnNob3d8fCgoYS5wYXJlbnROb2RlLl9wZW5kaW5nfHwoYS5wYXJlbnROb2RlLl9wZW5kaW5nPXt9KSlbbi5rZXldPW4pLHYmJnYoYSksJCYmKEllKGEsZiksSWUoYSxkKSxOZShmdW5jdGlvbigpe0llKGEscCksTGUoYSxmKSx4LmNhbmNlbGxlZHx8Q3x8KEJlKHcpP3NldFRpbWVvdXQoeCx3KTpNZShhLGwseCkpfSkpLGgmJmgoYSx4KSwkfHxDfHx4KCkpfXZhciBhPW4uZWxtO2UoYS5fZW50ZXJDYikmJihhLl9lbnRlckNiLmNhbmNlbGxlZD0hMCxhLl9lbnRlckNiKCkpO3ZhciBzPWplKG4uZGF0YS50cmFuc2l0aW9uKTtpZih0KHMpfHwxIT09YS5ub2RlVHlwZSlyZXR1cm4gcigpO2lmKCFlKGEuX2xlYXZlQ2IpKXt2YXIgdT1zLmNzcyxsPXMudHlwZSxmPXMubGVhdmVDbGFzcyxwPXMubGVhdmVUb0NsYXNzLGQ9cy5sZWF2ZUFjdGl2ZUNsYXNzLHY9cy5iZWZvcmVMZWF2ZSxoPXMubGVhdmUsbT1zLmFmdGVyTGVhdmUseT1zLmxlYXZlQ2FuY2VsbGVkLGc9cy5kZWxheUxlYXZlLF89cy5kdXJhdGlvbiwkPSExIT09dSYmIXRyLEM9VWUoaCksdz1jKGkoXyk/Xy5sZWF2ZTpfKSx4PWEuX2xlYXZlQ2I9YihmdW5jdGlvbigpe2EucGFyZW50Tm9kZSYmYS5wYXJlbnROb2RlLl9wZW5kaW5nJiYoYS5wYXJlbnROb2RlLl9wZW5kaW5nW24ua2V5XT1udWxsKSwkJiYoTGUoYSxwKSxMZShhLGQpKSx4LmNhbmNlbGxlZD8oJCYmTGUoYSxmKSx5JiZ5KGEpKToocigpLG0mJm0oYSkpLGEuX2xlYXZlQ2I9bnVsbH0pO2c/ZyhvKTpvKCl9fWZ1bmN0aW9uIEJlKHQpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiB0JiYhaXNOYU4odCl9ZnVuY3Rpb24gVWUobil7aWYodChuKSlyZXR1cm4hMTt2YXIgcj1uLmZucztyZXR1cm4gZShyKT9VZShBcnJheS5pc0FycmF5KHIpP3JbMF06cik6KG4uX2xlbmd0aHx8bi5sZW5ndGgpPjF9ZnVuY3Rpb24gVmUodCxlKXshMCE9PWUuZGF0YS5zaG93JiZSZShlKX1mdW5jdGlvbiB6ZSh0LGUsbil7S2UodCxlLG4pLChRbnx8ZXIpJiZzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7S2UodCxlLG4pfSwwKX1mdW5jdGlvbiBLZSh0LGUsbil7dmFyIHI9ZS52YWx1ZSxpPXQubXVsdGlwbGU7aWYoIWl8fEFycmF5LmlzQXJyYXkocikpe2Zvcih2YXIgbyxhLHM9MCxjPXQub3B0aW9ucy5sZW5ndGg7czxjO3MrKylpZihhPXQub3B0aW9uc1tzXSxpKW89XyhyLHFlKGEpKT4tMSxhLnNlbGVjdGVkIT09byYmKGEuc2VsZWN0ZWQ9byk7ZWxzZSBpZihnKHFlKGEpLHIpKXJldHVybiB2b2lkKHQuc2VsZWN0ZWRJbmRleCE9PXMmJih0LnNlbGVjdGVkSW5kZXg9cykpO2l8fCh0LnNlbGVjdGVkSW5kZXg9LTEpfX1mdW5jdGlvbiBKZSh0LGUpe3JldHVybiBlLmV2ZXJ5KGZ1bmN0aW9uKGUpe3JldHVybiFnKGUsdCl9KX1mdW5jdGlvbiBxZSh0KXtyZXR1cm5cIl92YWx1ZVwiaW4gdD90Ll92YWx1ZTp0LnZhbHVlfWZ1bmN0aW9uIFdlKHQpe3QudGFyZ2V0LmNvbXBvc2luZz0hMH1mdW5jdGlvbiBHZSh0KXt0LnRhcmdldC5jb21wb3NpbmcmJih0LnRhcmdldC5jb21wb3Npbmc9ITEsWmUodC50YXJnZXQsXCJpbnB1dFwiKSl9ZnVuY3Rpb24gWmUodCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFdmVudChcIkhUTUxFdmVudHNcIik7bi5pbml0RXZlbnQoZSwhMCwhMCksdC5kaXNwYXRjaEV2ZW50KG4pfWZ1bmN0aW9uIFhlKHQpe3JldHVybiF0LmNvbXBvbmVudEluc3RhbmNlfHx0LmRhdGEmJnQuZGF0YS50cmFuc2l0aW9uP3Q6WGUodC5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUpfWZ1bmN0aW9uIFllKHQpe3ZhciBlPXQmJnQuY29tcG9uZW50T3B0aW9ucztyZXR1cm4gZSYmZS5DdG9yLm9wdGlvbnMuYWJzdHJhY3Q/WWUoaXQoZS5jaGlsZHJlbikpOnR9ZnVuY3Rpb24gUWUodCl7dmFyIGU9e30sbj10LiRvcHRpb25zO2Zvcih2YXIgciBpbiBuLnByb3BzRGF0YSllW3JdPXRbcl07dmFyIGk9bi5fcGFyZW50TGlzdGVuZXJzO2Zvcih2YXIgbyBpbiBpKWVbUG4obyldPWlbb107cmV0dXJuIGV9ZnVuY3Rpb24gdG4odCxlKXtpZigvXFxkLWtlZXAtYWxpdmUkLy50ZXN0KGUudGFnKSlyZXR1cm4gdChcImtlZXAtYWxpdmVcIix7cHJvcHM6ZS5jb21wb25lbnRPcHRpb25zLnByb3BzRGF0YX0pfWZ1bmN0aW9uIGVuKHQpe3QuZWxtLl9tb3ZlQ2ImJnQuZWxtLl9tb3ZlQ2IoKSx0LmVsbS5fZW50ZXJDYiYmdC5lbG0uX2VudGVyQ2IoKX1mdW5jdGlvbiBubih0KXt0LmRhdGEubmV3UG9zPXQuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpfWZ1bmN0aW9uIHJuKHQpe3ZhciBlPXQuZGF0YS5wb3Msbj10LmRhdGEubmV3UG9zLHI9ZS5sZWZ0LW4ubGVmdCxpPWUudG9wLW4udG9wO2lmKHJ8fGkpe3QuZGF0YS5tb3ZlZD0hMDt2YXIgbz10LmVsbS5zdHlsZTtvLnRyYW5zZm9ybT1vLldlYmtpdFRyYW5zZm9ybT1cInRyYW5zbGF0ZShcIityK1wicHgsXCIraStcInB4KVwiLG8udHJhbnNpdGlvbkR1cmF0aW9uPVwiMHNcIn19ZnVuY3Rpb24gb24odCxlKXt2YXIgbj1lP3pvOlZvO3JldHVybiB0LnJlcGxhY2UobixmdW5jdGlvbih0KXtyZXR1cm4gVW9bdF19KX1mdW5jdGlvbiBhbih0LGUsbil7cmV0dXJue3R5cGU6MSx0YWc6dCxhdHRyc0xpc3Q6ZSxhdHRyc01hcDpmdW5jdGlvbih0KXtmb3IodmFyIGU9e30sbj0wLHI9dC5sZW5ndGg7bjxyO24rKyllW3Rbbl0ubmFtZV09dFtuXS52YWx1ZTtyZXR1cm4gZX0oZSkscGFyZW50Om4sY2hpbGRyZW46W119fWZ1bmN0aW9uIHNuKHQsZSl7ZnVuY3Rpb24gbih0KXt0LnByZSYmKHM9ITEpLExvKHQudGFnKSYmKGM9ITEpO2Zvcih2YXIgbj0wO248SW8ubGVuZ3RoO24rKylJb1tuXSh0LGUpfVRvPWUud2Fybnx8c2UsTG89ZS5pc1ByZVRhZ3x8Qm4sTW89ZS5tdXN0VXNlUHJvcHx8Qm4sRG89ZS5nZXRUYWdOYW1lc3BhY2V8fEJuLGpvPWNlKGUubW9kdWxlcyxcInRyYW5zZm9ybU5vZGVcIiksTm89Y2UoZS5tb2R1bGVzLFwicHJlVHJhbnNmb3JtTm9kZVwiKSxJbz1jZShlLm1vZHVsZXMsXCJwb3N0VHJhbnNmb3JtTm9kZVwiKSxFbz1lLmRlbGltaXRlcnM7dmFyIHIsaSxvPVtdLGE9ITEhPT1lLnByZXNlcnZlV2hpdGVzcGFjZSxzPSExLGM9ITE7cmV0dXJuIGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbihlKXtsKz1lLHQ9dC5zdWJzdHJpbmcoZSl9ZnVuY3Rpb24gcih0LG4scil7dmFyIGkscztpZihudWxsPT1uJiYobj1sKSxudWxsPT1yJiYocj1sKSx0JiYocz10LnRvTG93ZXJDYXNlKCkpLHQpZm9yKGk9YS5sZW5ndGgtMTtpPj0wJiZhW2ldLmxvd2VyQ2FzZWRUYWchPT1zO2ktLSk7ZWxzZSBpPTA7aWYoaT49MCl7Zm9yKHZhciBjPWEubGVuZ3RoLTE7Yz49aTtjLS0pZS5lbmQmJmUuZW5kKGFbY10udGFnLG4scik7YS5sZW5ndGg9aSxvPWkmJmFbaS0xXS50YWd9ZWxzZVwiYnJcIj09PXM/ZS5zdGFydCYmZS5zdGFydCh0LFtdLCEwLG4scik6XCJwXCI9PT1zJiYoZS5zdGFydCYmZS5zdGFydCh0LFtdLCExLG4sciksZS5lbmQmJmUuZW5kKHQsbixyKSl9Zm9yKHZhciBpLG8sYT1bXSxzPWUuZXhwZWN0SFRNTCxjPWUuaXNVbmFyeVRhZ3x8Qm4sdT1lLmNhbkJlTGVmdE9wZW5UYWd8fEJuLGw9MDt0Oyl7aWYoaT10LG8mJkhvKG8pKXt2YXIgZj0wLHA9by50b0xvd2VyQ2FzZSgpLGQ9Qm9bcF18fChCb1twXT1uZXcgUmVnRXhwKFwiKFtcXFxcc1xcXFxTXSo/KSg8L1wiK3ArXCJbXj5dKj4pXCIsXCJpXCIpKSx2PXQucmVwbGFjZShkLGZ1bmN0aW9uKHQsbixyKXtyZXR1cm4gZj1yLmxlbmd0aCxIbyhwKXx8XCJub3NjcmlwdFwiPT09cHx8KG49bi5yZXBsYWNlKC88IS0tKFtcXHNcXFNdKj8pLS0+L2csXCIkMVwiKS5yZXBsYWNlKC88IVxcW0NEQVRBXFxbKFtcXHNcXFNdKj8pXV0+L2csXCIkMVwiKSksSm8ocCxuKSYmKG49bi5zbGljZSgxKSksZS5jaGFycyYmZS5jaGFycyhuKSxcIlwifSk7bCs9dC5sZW5ndGgtdi5sZW5ndGgsdD12LHIocCxsLWYsbCl9ZWxzZXt2YXIgaD10LmluZGV4T2YoXCI8XCIpO2lmKDA9PT1oKXtpZihBby50ZXN0KHQpKXt2YXIgbT10LmluZGV4T2YoXCItLVxceDNlXCIpO2lmKG0+PTApe2Uuc2hvdWxkS2VlcENvbW1lbnQmJmUuY29tbWVudCh0LnN1YnN0cmluZyg0LG0pKSxuKG0rMyk7Y29udGludWV9fWlmKE9vLnRlc3QodCkpe3ZhciB5PXQuaW5kZXhPZihcIl0+XCIpO2lmKHk+PTApe24oeSsyKTtjb250aW51ZX19dmFyIGc9dC5tYXRjaChrbyk7aWYoZyl7bihnWzBdLmxlbmd0aCk7Y29udGludWV9dmFyIF89dC5tYXRjaCh4byk7aWYoXyl7dmFyIGI9bDtuKF9bMF0ubGVuZ3RoKSxyKF9bMV0sYixsKTtjb250aW51ZX12YXIgJD1mdW5jdGlvbigpe3ZhciBlPXQubWF0Y2goQ28pO2lmKGUpe3ZhciByPXt0YWdOYW1lOmVbMV0sYXR0cnM6W10sc3RhcnQ6bH07bihlWzBdLmxlbmd0aCk7Zm9yKHZhciBpLG87IShpPXQubWF0Y2god28pKSYmKG89dC5tYXRjaChfbykpOyluKG9bMF0ubGVuZ3RoKSxyLmF0dHJzLnB1c2gobyk7aWYoaSlyZXR1cm4gci51bmFyeVNsYXNoPWlbMV0sbihpWzBdLmxlbmd0aCksci5lbmQ9bCxyfX0oKTtpZigkKXshZnVuY3Rpb24odCl7dmFyIG49dC50YWdOYW1lLGk9dC51bmFyeVNsYXNoO3MmJihcInBcIj09PW8mJmdvKG4pJiZyKG8pLHUobikmJm89PT1uJiZyKG4pKTtmb3IodmFyIGw9YyhuKXx8ISFpLGY9dC5hdHRycy5sZW5ndGgscD1uZXcgQXJyYXkoZiksZD0wO2Q8ZjtkKyspe3ZhciB2PXQuYXR0cnNbZF07U28mJi0xPT09dlswXS5pbmRleE9mKCdcIlwiJykmJihcIlwiPT09dlszXSYmZGVsZXRlIHZbM10sXCJcIj09PXZbNF0mJmRlbGV0ZSB2WzRdLFwiXCI9PT12WzVdJiZkZWxldGUgdls1XSk7dmFyIGg9dlszXXx8dls0XXx8dls1XXx8XCJcIixtPVwiYVwiPT09biYmXCJocmVmXCI9PT12WzFdP2Uuc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmOmUuc2hvdWxkRGVjb2RlTmV3bGluZXM7cFtkXT17bmFtZTp2WzFdLHZhbHVlOm9uKGgsbSl9fWx8fChhLnB1c2goe3RhZzpuLGxvd2VyQ2FzZWRUYWc6bi50b0xvd2VyQ2FzZSgpLGF0dHJzOnB9KSxvPW4pLGUuc3RhcnQmJmUuc3RhcnQobixwLGwsdC5zdGFydCx0LmVuZCl9KCQpLEpvKG8sdCkmJm4oMSk7Y29udGludWV9fXZhciBDPXZvaWQgMCx3PXZvaWQgMCx4PXZvaWQgMDtpZihoPj0wKXtmb3Iodz10LnNsaWNlKGgpOyEoeG8udGVzdCh3KXx8Q28udGVzdCh3KXx8QW8udGVzdCh3KXx8T28udGVzdCh3KXx8KHg9dy5pbmRleE9mKFwiPFwiLDEpKTwwKTspaCs9eCx3PXQuc2xpY2UoaCk7Qz10LnN1YnN0cmluZygwLGgpLG4oaCl9aDwwJiYoQz10LHQ9XCJcIiksZS5jaGFycyYmQyYmZS5jaGFycyhDKX1pZih0PT09aSl7ZS5jaGFycyYmZS5jaGFycyh0KTticmVha319cigpfSh0LHt3YXJuOlRvLGV4cGVjdEhUTUw6ZS5leHBlY3RIVE1MLGlzVW5hcnlUYWc6ZS5pc1VuYXJ5VGFnLGNhbkJlTGVmdE9wZW5UYWc6ZS5jYW5CZUxlZnRPcGVuVGFnLHNob3VsZERlY29kZU5ld2xpbmVzOmUuc2hvdWxkRGVjb2RlTmV3bGluZXMsc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmOmUuc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmLHNob3VsZEtlZXBDb21tZW50OmUuY29tbWVudHMsc3RhcnQ6ZnVuY3Rpb24odCxhLHUpe3ZhciBsPWkmJmkubnN8fERvKHQpO1FuJiZcInN2Z1wiPT09bCYmKGE9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPVtdLG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtuYS50ZXN0KHIubmFtZSl8fChyLm5hbWU9ci5uYW1lLnJlcGxhY2UocmEsXCJcIiksZS5wdXNoKHIpKX1yZXR1cm4gZX0oYSkpO3ZhciBmPWFuKHQsYSxpKTtsJiYoZi5ucz1sKSxmdW5jdGlvbih0KXtyZXR1cm5cInN0eWxlXCI9PT10LnRhZ3x8XCJzY3JpcHRcIj09PXQudGFnJiYoIXQuYXR0cnNNYXAudHlwZXx8XCJ0ZXh0L2phdmFzY3JpcHRcIj09PXQuYXR0cnNNYXAudHlwZSl9KGYpJiYhdXIoKSYmKGYuZm9yYmlkZGVuPSEwKTtmb3IodmFyIHA9MDtwPE5vLmxlbmd0aDtwKyspZj1Ob1twXShmLGUpfHxmO2lmKHN8fCghZnVuY3Rpb24odCl7bnVsbCE9aGUodCxcInYtcHJlXCIpJiYodC5wcmU9ITApfShmKSxmLnByZSYmKHM9ITApKSxMbyhmLnRhZykmJihjPSEwKSxzP2Z1bmN0aW9uKHQpe3ZhciBlPXQuYXR0cnNMaXN0Lmxlbmd0aDtpZihlKWZvcih2YXIgbj10LmF0dHJzPW5ldyBBcnJheShlKSxyPTA7cjxlO3IrKyluW3JdPXtuYW1lOnQuYXR0cnNMaXN0W3JdLm5hbWUsdmFsdWU6SlNPTi5zdHJpbmdpZnkodC5hdHRyc0xpc3Rbcl0udmFsdWUpfTtlbHNlIHQucHJlfHwodC5wbGFpbj0hMCl9KGYpOmYucHJvY2Vzc2VkfHwodW4oZiksZnVuY3Rpb24odCl7dmFyIGU9aGUodCxcInYtaWZcIik7aWYoZSl0LmlmPWUsbG4odCx7ZXhwOmUsYmxvY2s6dH0pO2Vsc2V7bnVsbCE9aGUodCxcInYtZWxzZVwiKSYmKHQuZWxzZT0hMCk7dmFyIG49aGUodCxcInYtZWxzZS1pZlwiKTtuJiYodC5lbHNlaWY9bil9fShmKSxmdW5jdGlvbih0KXtudWxsIT1oZSh0LFwidi1vbmNlXCIpJiYodC5vbmNlPSEwKX0oZiksY24oZixlKSkscj9vLmxlbmd0aHx8ci5pZiYmKGYuZWxzZWlmfHxmLmVsc2UpJiZsbihyLHtleHA6Zi5lbHNlaWYsYmxvY2s6Zn0pOnI9ZixpJiYhZi5mb3JiaWRkZW4paWYoZi5lbHNlaWZ8fGYuZWxzZSkhZnVuY3Rpb24odCxlKXt2YXIgbj1mdW5jdGlvbih0KXt2YXIgZT10Lmxlbmd0aDtmb3IoO2UtLTspe2lmKDE9PT10W2VdLnR5cGUpcmV0dXJuIHRbZV07dC5wb3AoKX19KGUuY2hpbGRyZW4pO24mJm4uaWYmJmxuKG4se2V4cDp0LmVsc2VpZixibG9jazp0fSl9KGYsaSk7ZWxzZSBpZihmLnNsb3RTY29wZSl7aS5wbGFpbj0hMTt2YXIgZD1mLnNsb3RUYXJnZXR8fCdcImRlZmF1bHRcIic7KGkuc2NvcGVkU2xvdHN8fChpLnNjb3BlZFNsb3RzPXt9KSlbZF09Zn1lbHNlIGkuY2hpbGRyZW4ucHVzaChmKSxmLnBhcmVudD1pO3U/bihmKTooaT1mLG8ucHVzaChmKSl9LGVuZDpmdW5jdGlvbigpe3ZhciB0PW9bby5sZW5ndGgtMV0sZT10LmNoaWxkcmVuW3QuY2hpbGRyZW4ubGVuZ3RoLTFdO2UmJjM9PT1lLnR5cGUmJlwiIFwiPT09ZS50ZXh0JiYhYyYmdC5jaGlsZHJlbi5wb3AoKSxvLmxlbmd0aC09MSxpPW9bby5sZW5ndGgtMV0sbih0KX0sY2hhcnM6ZnVuY3Rpb24odCl7aWYoaSYmKCFRbnx8XCJ0ZXh0YXJlYVwiIT09aS50YWd8fGkuYXR0cnNNYXAucGxhY2Vob2xkZXIhPT10KSl7dmFyIGU9aS5jaGlsZHJlbjtpZih0PWN8fHQudHJpbSgpP2Z1bmN0aW9uKHQpe3JldHVyblwic2NyaXB0XCI9PT10LnRhZ3x8XCJzdHlsZVwiPT09dC50YWd9KGkpP3Q6ZWEodCk6YSYmZS5sZW5ndGg/XCIgXCI6XCJcIil7dmFyIG47IXMmJlwiIFwiIT09dCYmKG49ZnVuY3Rpb24odCxlKXt2YXIgbj1lP2ZvKGUpOnVvO2lmKG4udGVzdCh0KSl7Zm9yKHZhciByLGksbyxhPVtdLHM9W10sYz1uLmxhc3RJbmRleD0wO3I9bi5leGVjKHQpOyl7KGk9ci5pbmRleCk+YyYmKHMucHVzaChvPXQuc2xpY2UoYyxpKSksYS5wdXNoKEpTT04uc3RyaW5naWZ5KG8pKSk7dmFyIHU9YWUoclsxXS50cmltKCkpO2EucHVzaChcIl9zKFwiK3UrXCIpXCIpLHMucHVzaCh7XCJAYmluZGluZ1wiOnV9KSxjPWkrclswXS5sZW5ndGh9cmV0dXJuIGM8dC5sZW5ndGgmJihzLnB1c2gobz10LnNsaWNlKGMpKSxhLnB1c2goSlNPTi5zdHJpbmdpZnkobykpKSx7ZXhwcmVzc2lvbjphLmpvaW4oXCIrXCIpLHRva2VuczpzfX19KHQsRW8pKT9lLnB1c2goe3R5cGU6MixleHByZXNzaW9uOm4uZXhwcmVzc2lvbix0b2tlbnM6bi50b2tlbnMsdGV4dDp0fSk6XCIgXCI9PT10JiZlLmxlbmd0aCYmXCIgXCI9PT1lW2UubGVuZ3RoLTFdLnRleHR8fGUucHVzaCh7dHlwZTozLHRleHQ6dH0pfX19LGNvbW1lbnQ6ZnVuY3Rpb24odCl7aS5jaGlsZHJlbi5wdXNoKHt0eXBlOjMsdGV4dDp0LGlzQ29tbWVudDohMH0pfX0pLHJ9ZnVuY3Rpb24gY24odCxlKXshZnVuY3Rpb24odCl7dmFyIGU9dmUodCxcImtleVwiKTtlJiYodC5rZXk9ZSl9KHQpLHQucGxhaW49IXQua2V5JiYhdC5hdHRyc0xpc3QubGVuZ3RoLGZ1bmN0aW9uKHQpe3ZhciBlPXZlKHQsXCJyZWZcIik7ZSYmKHQucmVmPWUsdC5yZWZJbkZvcj1mdW5jdGlvbih0KXt2YXIgZT10O2Zvcig7ZTspe2lmKHZvaWQgMCE9PWUuZm9yKXJldHVybiEwO2U9ZS5wYXJlbnR9cmV0dXJuITF9KHQpKX0odCksZnVuY3Rpb24odCl7aWYoXCJzbG90XCI9PT10LnRhZyl0LnNsb3ROYW1lPXZlKHQsXCJuYW1lXCIpO2Vsc2V7dmFyIGU7XCJ0ZW1wbGF0ZVwiPT09dC50YWc/KGU9aGUodCxcInNjb3BlXCIpLHQuc2xvdFNjb3BlPWV8fGhlKHQsXCJzbG90LXNjb3BlXCIpKTooZT1oZSh0LFwic2xvdC1zY29wZVwiKSkmJih0LnNsb3RTY29wZT1lKTt2YXIgbj12ZSh0LFwic2xvdFwiKTtuJiYodC5zbG90VGFyZ2V0PSdcIlwiJz09PW4/J1wiZGVmYXVsdFwiJzpuLFwidGVtcGxhdGVcIj09PXQudGFnfHx0LnNsb3RTY29wZXx8bGUodCxcInNsb3RcIixuKSl9fSh0KSxmdW5jdGlvbih0KXt2YXIgZTsoZT12ZSh0LFwiaXNcIikpJiYodC5jb21wb25lbnQ9ZSk7bnVsbCE9aGUodCxcImlubGluZS10ZW1wbGF0ZVwiKSYmKHQuaW5saW5lVGVtcGxhdGU9ITApfSh0KTtmb3IodmFyIG49MDtuPGpvLmxlbmd0aDtuKyspdD1qb1tuXSh0LGUpfHx0OyFmdW5jdGlvbih0KXt2YXIgZSxuLHIsaSxvLGEscyxjPXQuYXR0cnNMaXN0O2ZvcihlPTAsbj1jLmxlbmd0aDtlPG47ZSsrKWlmKHI9aT1jW2VdLm5hbWUsbz1jW2VdLnZhbHVlLFdvLnRlc3QocikpaWYodC5oYXNCaW5kaW5ncz0hMCwoYT1mdW5jdGlvbih0KXt2YXIgZT10Lm1hdGNoKHRhKTtpZihlKXt2YXIgbj17fTtyZXR1cm4gZS5mb3JFYWNoKGZ1bmN0aW9uKHQpe25bdC5zbGljZSgxKV09ITB9KSxufX0ocikpJiYocj1yLnJlcGxhY2UodGEsXCJcIikpLFFvLnRlc3Qocikpcj1yLnJlcGxhY2UoUW8sXCJcIiksbz1hZShvKSxzPSExLGEmJihhLnByb3AmJihzPSEwLFwiaW5uZXJIdG1sXCI9PT0ocj1QbihyKSkmJihyPVwiaW5uZXJIVE1MXCIpKSxhLmNhbWVsJiYocj1QbihyKSksYS5zeW5jJiZkZSh0LFwidXBkYXRlOlwiK1BuKHIpLHllKG8sXCIkZXZlbnRcIikpKSxzfHwhdC5jb21wb25lbnQmJk1vKHQudGFnLHQuYXR0cnNNYXAudHlwZSxyKT91ZSh0LHIsbyk6bGUodCxyLG8pO2Vsc2UgaWYocW8udGVzdChyKSlyPXIucmVwbGFjZShxbyxcIlwiKSxkZSh0LHIsbyxhLCExKTtlbHNle3ZhciB1PShyPXIucmVwbGFjZShXbyxcIlwiKSkubWF0Y2goWW8pLGw9dSYmdVsxXTtsJiYocj1yLnNsaWNlKDAsLShsLmxlbmd0aCsxKSkpLHBlKHQscixpLG8sbCxhKX1lbHNlIGxlKHQscixKU09OLnN0cmluZ2lmeShvKSksIXQuY29tcG9uZW50JiZcIm11dGVkXCI9PT1yJiZNbyh0LnRhZyx0LmF0dHJzTWFwLnR5cGUscikmJnVlKHQscixcInRydWVcIil9KHQpfWZ1bmN0aW9uIHVuKHQpe3ZhciBlO2lmKGU9aGUodCxcInYtZm9yXCIpKXt2YXIgbj1mdW5jdGlvbih0KXt2YXIgZT10Lm1hdGNoKEdvKTtpZighZSlyZXR1cm47dmFyIG49e307bi5mb3I9ZVsyXS50cmltKCk7dmFyIHI9ZVsxXS50cmltKCkucmVwbGFjZShYbyxcIlwiKSxpPXIubWF0Y2goWm8pO2k/KG4uYWxpYXM9ci5yZXBsYWNlKFpvLFwiXCIpLG4uaXRlcmF0b3IxPWlbMV0udHJpbSgpLGlbMl0mJihuLml0ZXJhdG9yMj1pWzJdLnRyaW0oKSkpOm4uYWxpYXM9cjtyZXR1cm4gbn0oZSk7biYmaCh0LG4pfX1mdW5jdGlvbiBsbih0LGUpe3QuaWZDb25kaXRpb25zfHwodC5pZkNvbmRpdGlvbnM9W10pLHQuaWZDb25kaXRpb25zLnB1c2goZSl9ZnVuY3Rpb24gZm4odCl7cmV0dXJuIGFuKHQudGFnLHQuYXR0cnNMaXN0LnNsaWNlKCksdC5wYXJlbnQpfWZ1bmN0aW9uIHBuKHQpe2lmKHQuc3RhdGljPWZ1bmN0aW9uKHQpe2lmKDI9PT10LnR5cGUpcmV0dXJuITE7aWYoMz09PXQudHlwZSlyZXR1cm4hMDtyZXR1cm4hKCF0LnByZSYmKHQuaGFzQmluZGluZ3N8fHQuaWZ8fHQuZm9yfHxJbih0LnRhZyl8fCFGbyh0LnRhZyl8fGZ1bmN0aW9uKHQpe2Zvcig7dC5wYXJlbnQ7KXtpZihcInRlbXBsYXRlXCIhPT0odD10LnBhcmVudCkudGFnKXJldHVybiExO2lmKHQuZm9yKXJldHVybiEwfXJldHVybiExfSh0KXx8IU9iamVjdC5rZXlzKHQpLmV2ZXJ5KFBvKSkpfSh0KSwxPT09dC50eXBlKXtpZighRm8odC50YWcpJiZcInNsb3RcIiE9PXQudGFnJiZudWxsPT10LmF0dHJzTWFwW1wiaW5saW5lLXRlbXBsYXRlXCJdKXJldHVybjtmb3IodmFyIGU9MCxuPXQuY2hpbGRyZW4ubGVuZ3RoO2U8bjtlKyspe3ZhciByPXQuY2hpbGRyZW5bZV07cG4ociksci5zdGF0aWN8fCh0LnN0YXRpYz0hMSl9aWYodC5pZkNvbmRpdGlvbnMpZm9yKHZhciBpPTEsbz10LmlmQ29uZGl0aW9ucy5sZW5ndGg7aTxvO2krKyl7dmFyIGE9dC5pZkNvbmRpdGlvbnNbaV0uYmxvY2s7cG4oYSksYS5zdGF0aWN8fCh0LnN0YXRpYz0hMSl9fX1mdW5jdGlvbiBkbih0LGUpe2lmKDE9PT10LnR5cGUpe2lmKCh0LnN0YXRpY3x8dC5vbmNlKSYmKHQuc3RhdGljSW5Gb3I9ZSksdC5zdGF0aWMmJnQuY2hpbGRyZW4ubGVuZ3RoJiYoMSE9PXQuY2hpbGRyZW4ubGVuZ3RofHwzIT09dC5jaGlsZHJlblswXS50eXBlKSlyZXR1cm4gdm9pZCh0LnN0YXRpY1Jvb3Q9ITApO2lmKHQuc3RhdGljUm9vdD0hMSx0LmNoaWxkcmVuKWZvcih2YXIgbj0wLHI9dC5jaGlsZHJlbi5sZW5ndGg7bjxyO24rKylkbih0LmNoaWxkcmVuW25dLGV8fCEhdC5mb3IpO2lmKHQuaWZDb25kaXRpb25zKWZvcih2YXIgaT0xLG89dC5pZkNvbmRpdGlvbnMubGVuZ3RoO2k8bztpKyspZG4odC5pZkNvbmRpdGlvbnNbaV0uYmxvY2ssZSl9fWZ1bmN0aW9uIHZuKHQsZSxuKXt2YXIgcj1lP1wibmF0aXZlT246e1wiOlwib246e1wiO2Zvcih2YXIgaSBpbiB0KXIrPSdcIicraSsnXCI6JytobihpLHRbaV0pK1wiLFwiO3JldHVybiByLnNsaWNlKDAsLTEpK1wifVwifWZ1bmN0aW9uIGhuKHQsZSl7aWYoIWUpcmV0dXJuXCJmdW5jdGlvbigpe31cIjtpZihBcnJheS5pc0FycmF5KGUpKXJldHVyblwiW1wiK2UubWFwKGZ1bmN0aW9uKGUpe3JldHVybiBobih0LGUpfSkuam9pbihcIixcIikrXCJdXCI7dmFyIG49Y2EudGVzdChlLnZhbHVlKSxyPXNhLnRlc3QoZS52YWx1ZSk7aWYoZS5tb2RpZmllcnMpe3ZhciBpPVwiXCIsbz1cIlwiLGE9W107Zm9yKHZhciBzIGluIGUubW9kaWZpZXJzKWlmKGZhW3NdKW8rPWZhW3NdLHVhW3NdJiZhLnB1c2gocyk7ZWxzZSBpZihcImV4YWN0XCI9PT1zKXt2YXIgYz1lLm1vZGlmaWVycztvKz1sYShbXCJjdHJsXCIsXCJzaGlmdFwiLFwiYWx0XCIsXCJtZXRhXCJdLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4hY1t0XX0pLm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIiRldmVudC5cIit0K1wiS2V5XCJ9KS5qb2luKFwifHxcIikpfWVsc2UgYS5wdXNoKHMpO2EubGVuZ3RoJiYoaSs9ZnVuY3Rpb24odCl7cmV0dXJuXCJpZighKCdidXR0b24nIGluICRldmVudCkmJlwiK3QubWFwKG1uKS5qb2luKFwiJiZcIikrXCIpcmV0dXJuIG51bGw7XCJ9KGEpKSxvJiYoaSs9byk7cmV0dXJuXCJmdW5jdGlvbigkZXZlbnQpe1wiK2krKG4/ZS52YWx1ZStcIigkZXZlbnQpXCI6cj9cIihcIitlLnZhbHVlK1wiKSgkZXZlbnQpXCI6ZS52YWx1ZSkrXCJ9XCJ9cmV0dXJuIG58fHI/ZS52YWx1ZTpcImZ1bmN0aW9uKCRldmVudCl7XCIrZS52YWx1ZStcIn1cIn1mdW5jdGlvbiBtbih0KXt2YXIgZT1wYXJzZUludCh0LDEwKTtpZihlKXJldHVyblwiJGV2ZW50LmtleUNvZGUhPT1cIitlO3ZhciBuPXVhW3RdO3JldHVyblwiX2soJGV2ZW50LmtleUNvZGUsXCIrSlNPTi5zdHJpbmdpZnkodCkrXCIsXCIrSlNPTi5zdHJpbmdpZnkobikrXCIsJGV2ZW50LmtleSlcIn1mdW5jdGlvbiB5bih0LGUpe3ZhciBuPW5ldyBkYShlKTtyZXR1cm57cmVuZGVyOlwid2l0aCh0aGlzKXtyZXR1cm4gXCIrKHQ/Z24odCxuKTonX2MoXCJkaXZcIiknKStcIn1cIixzdGF0aWNSZW5kZXJGbnM6bi5zdGF0aWNSZW5kZXJGbnN9fWZ1bmN0aW9uIGduKHQsZSl7aWYodC5zdGF0aWNSb290JiYhdC5zdGF0aWNQcm9jZXNzZWQpcmV0dXJuIF9uKHQsZSk7aWYodC5vbmNlJiYhdC5vbmNlUHJvY2Vzc2VkKXJldHVybiBibih0LGUpO2lmKHQuZm9yJiYhdC5mb3JQcm9jZXNzZWQpcmV0dXJuIGZ1bmN0aW9uKHQsZSxuLHIpe3ZhciBpPXQuZm9yLG89dC5hbGlhcyxhPXQuaXRlcmF0b3IxP1wiLFwiK3QuaXRlcmF0b3IxOlwiXCIscz10Lml0ZXJhdG9yMj9cIixcIit0Lml0ZXJhdG9yMjpcIlwiO3JldHVybiB0LmZvclByb2Nlc3NlZD0hMCwocnx8XCJfbFwiKStcIigoXCIraStcIiksZnVuY3Rpb24oXCIrbythK3MrXCIpe3JldHVybiBcIisobnx8Z24pKHQsZSkrXCJ9KVwifSh0LGUpO2lmKHQuaWYmJiF0LmlmUHJvY2Vzc2VkKXJldHVybiAkbih0LGUpO2lmKFwidGVtcGxhdGVcIiE9PXQudGFnfHx0LnNsb3RUYXJnZXQpe2lmKFwic2xvdFwiPT09dC50YWcpcmV0dXJuIGZ1bmN0aW9uKHQsZSl7dmFyIG49dC5zbG90TmFtZXx8J1wiZGVmYXVsdFwiJyxyPWtuKHQsZSksaT1cIl90KFwiK24rKHI/XCIsXCIrcjpcIlwiKSxvPXQuYXR0cnMmJlwie1wiK3QuYXR0cnMubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBQbih0Lm5hbWUpK1wiOlwiK3QudmFsdWV9KS5qb2luKFwiLFwiKStcIn1cIixhPXQuYXR0cnNNYXBbXCJ2LWJpbmRcIl07IW8mJiFhfHxyfHwoaSs9XCIsbnVsbFwiKTtvJiYoaSs9XCIsXCIrbyk7YSYmKGkrPShvP1wiXCI6XCIsbnVsbFwiKStcIixcIithKTtyZXR1cm4gaStcIilcIn0odCxlKTt2YXIgbjtpZih0LmNvbXBvbmVudCluPWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLmlubGluZVRlbXBsYXRlP251bGw6a24oZSxuLCEwKTtyZXR1cm5cIl9jKFwiK3QrXCIsXCIrd24oZSxuKSsocj9cIixcIityOlwiXCIpK1wiKVwifSh0LmNvbXBvbmVudCx0LGUpO2Vsc2V7dmFyIHI9dC5wbGFpbj92b2lkIDA6d24odCxlKSxpPXQuaW5saW5lVGVtcGxhdGU/bnVsbDprbih0LGUsITApO249XCJfYygnXCIrdC50YWcrXCInXCIrKHI/XCIsXCIrcjpcIlwiKSsoaT9cIixcIitpOlwiXCIpK1wiKVwifWZvcih2YXIgbz0wO288ZS50cmFuc2Zvcm1zLmxlbmd0aDtvKyspbj1lLnRyYW5zZm9ybXNbb10odCxuKTtyZXR1cm4gbn1yZXR1cm4ga24odCxlKXx8XCJ2b2lkIDBcIn1mdW5jdGlvbiBfbih0LGUpe3JldHVybiB0LnN0YXRpY1Byb2Nlc3NlZD0hMCxlLnN0YXRpY1JlbmRlckZucy5wdXNoKFwid2l0aCh0aGlzKXtyZXR1cm4gXCIrZ24odCxlKStcIn1cIiksXCJfbShcIisoZS5zdGF0aWNSZW5kZXJGbnMubGVuZ3RoLTEpKyh0LnN0YXRpY0luRm9yP1wiLHRydWVcIjpcIlwiKStcIilcIn1mdW5jdGlvbiBibih0LGUpe2lmKHQub25jZVByb2Nlc3NlZD0hMCx0LmlmJiYhdC5pZlByb2Nlc3NlZClyZXR1cm4gJG4odCxlKTtpZih0LnN0YXRpY0luRm9yKXtmb3IodmFyIG49XCJcIixyPXQucGFyZW50O3I7KXtpZihyLmZvcil7bj1yLmtleTticmVha31yPXIucGFyZW50fXJldHVybiBuP1wiX28oXCIrZ24odCxlKStcIixcIitlLm9uY2VJZCsrK1wiLFwiK24rXCIpXCI6Z24odCxlKX1yZXR1cm4gX24odCxlKX1mdW5jdGlvbiAkbih0LGUsbixyKXtyZXR1cm4gdC5pZlByb2Nlc3NlZD0hMCxDbih0LmlmQ29uZGl0aW9ucy5zbGljZSgpLGUsbixyKX1mdW5jdGlvbiBDbih0LGUsbixyKXtmdW5jdGlvbiBpKHQpe3JldHVybiBuP24odCxlKTp0Lm9uY2U/Ym4odCxlKTpnbih0LGUpfWlmKCF0Lmxlbmd0aClyZXR1cm4gcnx8XCJfZSgpXCI7dmFyIG89dC5zaGlmdCgpO3JldHVybiBvLmV4cD9cIihcIitvLmV4cCtcIik/XCIraShvLmJsb2NrKStcIjpcIitDbih0LGUsbixyKTpcIlwiK2koby5ibG9jayl9ZnVuY3Rpb24gd24odCxlKXt2YXIgbj1cIntcIixyPWZ1bmN0aW9uKHQsZSl7dmFyIG49dC5kaXJlY3RpdmVzO2lmKCFuKXJldHVybjt2YXIgcixpLG8sYSxzPVwiZGlyZWN0aXZlczpbXCIsYz0hMTtmb3Iocj0wLGk9bi5sZW5ndGg7cjxpO3IrKyl7bz1uW3JdLGE9ITA7dmFyIHU9ZS5kaXJlY3RpdmVzW28ubmFtZV07dSYmKGE9ISF1KHQsbyxlLndhcm4pKSxhJiYoYz0hMCxzKz0ne25hbWU6XCInK28ubmFtZSsnXCIscmF3TmFtZTpcIicrby5yYXdOYW1lKydcIicrKG8udmFsdWU/XCIsdmFsdWU6KFwiK28udmFsdWUrXCIpLGV4cHJlc3Npb246XCIrSlNPTi5zdHJpbmdpZnkoby52YWx1ZSk6XCJcIikrKG8uYXJnPycsYXJnOlwiJytvLmFyZysnXCInOlwiXCIpKyhvLm1vZGlmaWVycz9cIixtb2RpZmllcnM6XCIrSlNPTi5zdHJpbmdpZnkoby5tb2RpZmllcnMpOlwiXCIpK1wifSxcIil9aWYoYylyZXR1cm4gcy5zbGljZSgwLC0xKStcIl1cIn0odCxlKTtyJiYobis9citcIixcIiksdC5rZXkmJihuKz1cImtleTpcIit0LmtleStcIixcIiksdC5yZWYmJihuKz1cInJlZjpcIit0LnJlZitcIixcIiksdC5yZWZJbkZvciYmKG4rPVwicmVmSW5Gb3I6dHJ1ZSxcIiksdC5wcmUmJihuKz1cInByZTp0cnVlLFwiKSx0LmNvbXBvbmVudCYmKG4rPSd0YWc6XCInK3QudGFnKydcIiwnKTtmb3IodmFyIGk9MDtpPGUuZGF0YUdlbkZucy5sZW5ndGg7aSsrKW4rPWUuZGF0YUdlbkZuc1tpXSh0KTtpZih0LmF0dHJzJiYobis9XCJhdHRyczp7XCIrT24odC5hdHRycykrXCJ9LFwiKSx0LnByb3BzJiYobis9XCJkb21Qcm9wczp7XCIrT24odC5wcm9wcykrXCJ9LFwiKSx0LmV2ZW50cyYmKG4rPXZuKHQuZXZlbnRzLCExLGUud2FybikrXCIsXCIpLHQubmF0aXZlRXZlbnRzJiYobis9dm4odC5uYXRpdmVFdmVudHMsITAsZS53YXJuKStcIixcIiksdC5zbG90VGFyZ2V0JiYhdC5zbG90U2NvcGUmJihuKz1cInNsb3Q6XCIrdC5zbG90VGFyZ2V0K1wiLFwiKSx0LnNjb3BlZFNsb3RzJiYobis9ZnVuY3Rpb24odCxlKXtyZXR1cm5cInNjb3BlZFNsb3RzOl91KFtcIitPYmplY3Qua2V5cyh0KS5tYXAoZnVuY3Rpb24obil7cmV0dXJuIHhuKG4sdFtuXSxlKX0pLmpvaW4oXCIsXCIpK1wiXSlcIn0odC5zY29wZWRTbG90cyxlKStcIixcIiksdC5tb2RlbCYmKG4rPVwibW9kZWw6e3ZhbHVlOlwiK3QubW9kZWwudmFsdWUrXCIsY2FsbGJhY2s6XCIrdC5tb2RlbC5jYWxsYmFjaytcIixleHByZXNzaW9uOlwiK3QubW9kZWwuZXhwcmVzc2lvbitcIn0sXCIpLHQuaW5saW5lVGVtcGxhdGUpe3ZhciBvPWZ1bmN0aW9uKHQsZSl7dmFyIG49dC5jaGlsZHJlblswXTtpZigxPT09bi50eXBlKXt2YXIgcj15bihuLGUub3B0aW9ucyk7cmV0dXJuXCJpbmxpbmVUZW1wbGF0ZTp7cmVuZGVyOmZ1bmN0aW9uKCl7XCIrci5yZW5kZXIrXCJ9LHN0YXRpY1JlbmRlckZuczpbXCIrci5zdGF0aWNSZW5kZXJGbnMubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiZnVuY3Rpb24oKXtcIit0K1wifVwifSkuam9pbihcIixcIikrXCJdfVwifX0odCxlKTtvJiYobis9bytcIixcIil9cmV0dXJuIG49bi5yZXBsYWNlKC8sJC8sXCJcIikrXCJ9XCIsdC53cmFwRGF0YSYmKG49dC53cmFwRGF0YShuKSksdC53cmFwTGlzdGVuZXJzJiYobj10LndyYXBMaXN0ZW5lcnMobikpLG59ZnVuY3Rpb24geG4odCxlLG4pe2lmKGUuZm9yJiYhZS5mb3JQcm9jZXNzZWQpcmV0dXJuIGZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLmZvcixpPWUuYWxpYXMsbz1lLml0ZXJhdG9yMT9cIixcIitlLml0ZXJhdG9yMTpcIlwiLGE9ZS5pdGVyYXRvcjI/XCIsXCIrZS5pdGVyYXRvcjI6XCJcIjtyZXR1cm4gZS5mb3JQcm9jZXNzZWQ9ITAsXCJfbCgoXCIrcitcIiksZnVuY3Rpb24oXCIraStvK2ErXCIpe3JldHVybiBcIit4bih0LGUsbikrXCJ9KVwifSh0LGUsbik7cmV0dXJuXCJ7a2V5OlwiK3QrXCIsZm46XCIrKFwiZnVuY3Rpb24oXCIrU3RyaW5nKGUuc2xvdFNjb3BlKStcIil7cmV0dXJuIFwiKyhcInRlbXBsYXRlXCI9PT1lLnRhZz9lLmlmP2UuaWYrXCI/XCIrKGtuKGUsbil8fFwidW5kZWZpbmVkXCIpK1wiOnVuZGVmaW5lZFwiOmtuKGUsbil8fFwidW5kZWZpbmVkXCI6Z24oZSxuKSkrXCJ9XCIpK1wifVwifWZ1bmN0aW9uIGtuKHQsZSxuLHIsaSl7dmFyIG89dC5jaGlsZHJlbjtpZihvLmxlbmd0aCl7dmFyIGE9b1swXTtpZigxPT09by5sZW5ndGgmJmEuZm9yJiZcInRlbXBsYXRlXCIhPT1hLnRhZyYmXCJzbG90XCIhPT1hLnRhZylyZXR1cm4ocnx8Z24pKGEsZSk7dmFyIHM9bj9mdW5jdGlvbih0LGUpe2Zvcih2YXIgbj0wLHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGk9dFtyXTtpZigxPT09aS50eXBlKXtpZihBbihpKXx8aS5pZkNvbmRpdGlvbnMmJmkuaWZDb25kaXRpb25zLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIEFuKHQuYmxvY2spfSkpe249MjticmVha30oZShpKXx8aS5pZkNvbmRpdGlvbnMmJmkuaWZDb25kaXRpb25zLnNvbWUoZnVuY3Rpb24odCl7cmV0dXJuIGUodC5ibG9jayl9KSkmJihuPTEpfX1yZXR1cm4gbn0obyxlLm1heWJlQ29tcG9uZW50KTowLGM9aXx8ZnVuY3Rpb24odCxlKXtpZigxPT09dC50eXBlKXJldHVybiBnbih0LGUpO3JldHVybiAzPT09dC50eXBlJiZ0LmlzQ29tbWVudD9mdW5jdGlvbih0KXtyZXR1cm5cIl9lKFwiK0pTT04uc3RyaW5naWZ5KHQudGV4dCkrXCIpXCJ9KHQpOmZ1bmN0aW9uKHQpe3JldHVyblwiX3YoXCIrKDI9PT10LnR5cGU/dC5leHByZXNzaW9uOlNuKEpTT04uc3RyaW5naWZ5KHQudGV4dCkpKStcIilcIn0odCl9O3JldHVyblwiW1wiK28ubWFwKGZ1bmN0aW9uKHQpe3JldHVybiBjKHQsZSl9KS5qb2luKFwiLFwiKStcIl1cIisocz9cIixcIitzOlwiXCIpfX1mdW5jdGlvbiBBbih0KXtyZXR1cm4gdm9pZCAwIT09dC5mb3J8fFwidGVtcGxhdGVcIj09PXQudGFnfHxcInNsb3RcIj09PXQudGFnfWZ1bmN0aW9uIE9uKHQpe2Zvcih2YXIgZT1cIlwiLG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtlKz0nXCInK3IubmFtZSsnXCI6JytTbihyLnZhbHVlKStcIixcIn1yZXR1cm4gZS5zbGljZSgwLC0xKX1mdW5jdGlvbiBTbih0KXtyZXR1cm4gdC5yZXBsYWNlKC9cXHUyMDI4L2csXCJcXFxcdTIwMjhcIikucmVwbGFjZSgvXFx1MjAyOS9nLFwiXFxcXHUyMDI5XCIpfWZ1bmN0aW9uIFRuKHQsZSl7dHJ5e3JldHVybiBuZXcgRnVuY3Rpb24odCl9Y2F0Y2gobil7cmV0dXJuIGUucHVzaCh7ZXJyOm4sY29kZTp0fSkseX19ZnVuY3Rpb24gRW4odCl7cmV0dXJuIFJvPVJvfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFJvLmlubmVySFRNTD10Pyc8YSBocmVmPVwiXFxuXCIvPic6JzxkaXYgYT1cIlxcblwiLz4nLFJvLmlubmVySFRNTC5pbmRleE9mKFwiJiMxMDtcIik+MH12YXIgam49T2JqZWN0LmZyZWV6ZSh7fSksTm49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxJbj11KFwic2xvdCxjb21wb25lbnRcIiwhMCksTG49dShcImtleSxyZWYsc2xvdCxzbG90LXNjb3BlLGlzXCIpLE1uPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksRG49Ly0oXFx3KS9nLFBuPXAoZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZShEbixmdW5jdGlvbih0LGUpe3JldHVybiBlP2UudG9VcHBlckNhc2UoKTpcIlwifSl9KSxGbj1wKGZ1bmN0aW9uKHQpe3JldHVybiB0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc2xpY2UoMSl9KSxSbj0vXFxCKFtBLVpdKS9nLEhuPXAoZnVuY3Rpb24odCl7cmV0dXJuIHQucmVwbGFjZShSbixcIi0kMVwiKS50b0xvd2VyQ2FzZSgpfSksQm49ZnVuY3Rpb24odCxlLG4pe3JldHVybiExfSxVbj1mdW5jdGlvbih0KXtyZXR1cm4gdH0sVm49XCJkYXRhLXNlcnZlci1yZW5kZXJlZFwiLHpuPVtcImNvbXBvbmVudFwiLFwiZGlyZWN0aXZlXCIsXCJmaWx0ZXJcIl0sS249W1wiYmVmb3JlQ3JlYXRlXCIsXCJjcmVhdGVkXCIsXCJiZWZvcmVNb3VudFwiLFwibW91bnRlZFwiLFwiYmVmb3JlVXBkYXRlXCIsXCJ1cGRhdGVkXCIsXCJiZWZvcmVEZXN0cm95XCIsXCJkZXN0cm95ZWRcIixcImFjdGl2YXRlZFwiLFwiZGVhY3RpdmF0ZWRcIixcImVycm9yQ2FwdHVyZWRcIl0sSm49e29wdGlvbk1lcmdlU3RyYXRlZ2llczpPYmplY3QuY3JlYXRlKG51bGwpLHNpbGVudDohMSxwcm9kdWN0aW9uVGlwOiExLGRldnRvb2xzOiExLHBlcmZvcm1hbmNlOiExLGVycm9ySGFuZGxlcjpudWxsLHdhcm5IYW5kbGVyOm51bGwsaWdub3JlZEVsZW1lbnRzOltdLGtleUNvZGVzOk9iamVjdC5jcmVhdGUobnVsbCksaXNSZXNlcnZlZFRhZzpCbixpc1Jlc2VydmVkQXR0cjpCbixpc1Vua25vd25FbGVtZW50OkJuLGdldFRhZ05hbWVzcGFjZTp5LHBhcnNlUGxhdGZvcm1UYWdOYW1lOlVuLG11c3RVc2VQcm9wOkJuLF9saWZlY3ljbGVIb29rczpLbn0scW49L1teXFx3LiRdLyxXbj1cIl9fcHJvdG9fX1wiaW57fSxHbj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LFpuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBXWEVudmlyb25tZW50JiYhIVdYRW52aXJvbm1lbnQucGxhdGZvcm0sWG49Wm4mJldYRW52aXJvbm1lbnQucGxhdGZvcm0udG9Mb3dlckNhc2UoKSxZbj1HbiYmd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSxRbj1ZbiYmL21zaWV8dHJpZGVudC8udGVzdChZbiksdHI9WW4mJlluLmluZGV4T2YoXCJtc2llIDkuMFwiKT4wLGVyPVluJiZZbi5pbmRleE9mKFwiZWRnZS9cIik+MCxucj1ZbiYmWW4uaW5kZXhPZihcImFuZHJvaWRcIik+MHx8XCJhbmRyb2lkXCI9PT1Ybixycj1ZbiYmL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFluKXx8XCJpb3NcIj09PVhuLGlyPShZbiYmL2Nocm9tZVxcL1xcZCsvLnRlc3QoWW4pLHt9LndhdGNoKSxvcj0hMTtpZihHbil0cnl7dmFyIGFyPXt9O09iamVjdC5kZWZpbmVQcm9wZXJ0eShhcixcInBhc3NpdmVcIix7Z2V0OmZ1bmN0aW9uKCl7b3I9ITB9fSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0LXBhc3NpdmVcIixudWxsLGFyKX1jYXRjaCh0KXt9dmFyIHNyLGNyLHVyPWZ1bmN0aW9uKCl7cmV0dXJuIHZvaWQgMD09PXNyJiYoc3I9IUduJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZcInNlcnZlclwiPT09Z2xvYmFsLnByb2Nlc3MuZW52LlZVRV9FTlYpLHNyfSxscj1HbiYmd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX18sZnI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmdyhTeW1ib2wpJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgUmVmbGVjdCYmdyhSZWZsZWN0Lm93bktleXMpO2NyPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTZXQmJncoU2V0KT9TZXQ6ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5zZXQ9T2JqZWN0LmNyZWF0ZShudWxsKX1yZXR1cm4gdC5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKHQpe3JldHVybiEwPT09dGhpcy5zZXRbdF19LHQucHJvdG90eXBlLmFkZD1mdW5jdGlvbih0KXt0aGlzLnNldFt0XT0hMH0sdC5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLnNldD1PYmplY3QuY3JlYXRlKG51bGwpfSx0fSgpO3ZhciBwcj15LGRyPTAsdnI9ZnVuY3Rpb24oKXt0aGlzLmlkPWRyKyssdGhpcy5zdWJzPVtdfTt2ci5wcm90b3R5cGUuYWRkU3ViPWZ1bmN0aW9uKHQpe3RoaXMuc3Vicy5wdXNoKHQpfSx2ci5wcm90b3R5cGUucmVtb3ZlU3ViPWZ1bmN0aW9uKHQpe2wodGhpcy5zdWJzLHQpfSx2ci5wcm90b3R5cGUuZGVwZW5kPWZ1bmN0aW9uKCl7dnIudGFyZ2V0JiZ2ci50YXJnZXQuYWRkRGVwKHRoaXMpfSx2ci5wcm90b3R5cGUubm90aWZ5PWZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMuc3Vicy5zbGljZSgpLGU9MCxuPXQubGVuZ3RoO2U8bjtlKyspdFtlXS51cGRhdGUoKX0sdnIudGFyZ2V0PW51bGw7dmFyIGhyPVtdLG1yPWZ1bmN0aW9uKHQsZSxuLHIsaSxvLGEscyl7dGhpcy50YWc9dCx0aGlzLmRhdGE9ZSx0aGlzLmNoaWxkcmVuPW4sdGhpcy50ZXh0PXIsdGhpcy5lbG09aSx0aGlzLm5zPXZvaWQgMCx0aGlzLmNvbnRleHQ9byx0aGlzLmZuQ29udGV4dD12b2lkIDAsdGhpcy5mbk9wdGlvbnM9dm9pZCAwLHRoaXMuZm5TY29wZUlkPXZvaWQgMCx0aGlzLmtleT1lJiZlLmtleSx0aGlzLmNvbXBvbmVudE9wdGlvbnM9YSx0aGlzLmNvbXBvbmVudEluc3RhbmNlPXZvaWQgMCx0aGlzLnBhcmVudD12b2lkIDAsdGhpcy5yYXc9ITEsdGhpcy5pc1N0YXRpYz0hMSx0aGlzLmlzUm9vdEluc2VydD0hMCx0aGlzLmlzQ29tbWVudD0hMSx0aGlzLmlzQ2xvbmVkPSExLHRoaXMuaXNPbmNlPSExLHRoaXMuYXN5bmNGYWN0b3J5PXMsdGhpcy5hc3luY01ldGE9dm9pZCAwLHRoaXMuaXNBc3luY1BsYWNlaG9sZGVyPSExfSx5cj17Y2hpbGQ6e2NvbmZpZ3VyYWJsZTohMH19O3lyLmNoaWxkLmdldD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmNvbXBvbmVudEluc3RhbmNlfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhtci5wcm90b3R5cGUseXIpO3ZhciBncj1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1cIlwiKTt2YXIgZT1uZXcgbXI7cmV0dXJuIGUudGV4dD10LGUuaXNDb21tZW50PSEwLGV9LF9yPUFycmF5LnByb3RvdHlwZSxicj1PYmplY3QuY3JlYXRlKF9yKTtbXCJwdXNoXCIsXCJwb3BcIixcInNoaWZ0XCIsXCJ1bnNoaWZ0XCIsXCJzcGxpY2VcIixcInNvcnRcIixcInJldmVyc2VcIl0uZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT1fclt0XTtDKGJyLHQsZnVuY3Rpb24oKXtmb3IodmFyIG49W10scj1hcmd1bWVudHMubGVuZ3RoO3ItLTspbltyXT1hcmd1bWVudHNbcl07dmFyIGksbz1lLmFwcGx5KHRoaXMsbiksYT10aGlzLl9fb2JfXztzd2l0Y2godCl7Y2FzZVwicHVzaFwiOmNhc2VcInVuc2hpZnRcIjppPW47YnJlYWs7Y2FzZVwic3BsaWNlXCI6aT1uLnNsaWNlKDIpfXJldHVybiBpJiZhLm9ic2VydmVBcnJheShpKSxhLmRlcC5ub3RpZnkoKSxvfSl9KTt2YXIgJHI9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYnIpLENyPXtzaG91bGRDb252ZXJ0OiEwfSx3cj1mdW5jdGlvbih0KXtpZih0aGlzLnZhbHVlPXQsdGhpcy5kZXA9bmV3IHZyLHRoaXMudm1Db3VudD0wLEModCxcIl9fb2JfX1wiLHRoaXMpLEFycmF5LmlzQXJyYXkodCkpeyhXbj9POlMpKHQsYnIsJHIpLHRoaXMub2JzZXJ2ZUFycmF5KHQpfWVsc2UgdGhpcy53YWxrKHQpfTt3ci5wcm90b3R5cGUud2Fsaz1mdW5jdGlvbih0KXtmb3IodmFyIGU9T2JqZWN0LmtleXModCksbj0wO248ZS5sZW5ndGg7bisrKUUodCxlW25dLHRbZVtuXV0pfSx3ci5wcm90b3R5cGUub2JzZXJ2ZUFycmF5PWZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0wLG49dC5sZW5ndGg7ZTxuO2UrKylUKHRbZV0pfTt2YXIgeHI9Sm4ub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO3hyLmRhdGE9ZnVuY3Rpb24odCxlLG4pe3JldHVybiBuP00odCxlLG4pOmUmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIGU/dDpNKHQsZSl9LEtuLmZvckVhY2goZnVuY3Rpb24odCl7eHJbdF09RH0pLHpuLmZvckVhY2goZnVuY3Rpb24odCl7eHJbdCtcInNcIl09UH0pLHhyLndhdGNoPWZ1bmN0aW9uKHQsZSxuLHIpe2lmKHQ9PT1pciYmKHQ9dm9pZCAwKSxlPT09aXImJihlPXZvaWQgMCksIWUpcmV0dXJuIE9iamVjdC5jcmVhdGUodHx8bnVsbCk7aWYoIXQpcmV0dXJuIGU7dmFyIGk9e307aChpLHQpO2Zvcih2YXIgbyBpbiBlKXt2YXIgYT1pW29dLHM9ZVtvXTthJiYhQXJyYXkuaXNBcnJheShhKSYmKGE9W2FdKSxpW29dPWE/YS5jb25jYXQocyk6QXJyYXkuaXNBcnJheShzKT9zOltzXX1yZXR1cm4gaX0seHIucHJvcHM9eHIubWV0aG9kcz14ci5pbmplY3Q9eHIuY29tcHV0ZWQ9ZnVuY3Rpb24odCxlLG4scil7aWYoIXQpcmV0dXJuIGU7dmFyIGk9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm4gaChpLHQpLGUmJmgoaSxlKSxpfSx4ci5wcm92aWRlPU07dmFyIGtyLEFyLE9yPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHZvaWQgMD09PWU/dDplfSxTcj1bXSxUcj0hMSxFcj0hMTtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2V0SW1tZWRpYXRlJiZ3KHNldEltbWVkaWF0ZSkpQXI9ZnVuY3Rpb24oKXtzZXRJbW1lZGlhdGUoSil9O2Vsc2UgaWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIE1lc3NhZ2VDaGFubmVsfHwhdyhNZXNzYWdlQ2hhbm5lbCkmJlwiW29iamVjdCBNZXNzYWdlQ2hhbm5lbENvbnN0cnVjdG9yXVwiIT09TWVzc2FnZUNoYW5uZWwudG9TdHJpbmcoKSlBcj1mdW5jdGlvbigpe3NldFRpbWVvdXQoSiwwKX07ZWxzZXt2YXIganI9bmV3IE1lc3NhZ2VDaGFubmVsLE5yPWpyLnBvcnQyO2pyLnBvcnQxLm9ubWVzc2FnZT1KLEFyPWZ1bmN0aW9uKCl7TnIucG9zdE1lc3NhZ2UoMSl9fWlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBQcm9taXNlJiZ3KFByb21pc2UpKXt2YXIgSXI9UHJvbWlzZS5yZXNvbHZlKCk7a3I9ZnVuY3Rpb24oKXtJci50aGVuKEopLHJyJiZzZXRUaW1lb3V0KHkpfX1lbHNlIGtyPUFyO3ZhciBMcixNcj1uZXcgY3IsRHI9cChmdW5jdGlvbih0KXt2YXIgZT1cIiZcIj09PXQuY2hhckF0KDApLG49XCJ+XCI9PT0odD1lP3Quc2xpY2UoMSk6dCkuY2hhckF0KDApLHI9XCIhXCI9PT0odD1uP3Quc2xpY2UoMSk6dCkuY2hhckF0KDApO3JldHVybiB0PXI/dC5zbGljZSgxKTp0LHtuYW1lOnQsb25jZTpuLGNhcHR1cmU6cixwYXNzaXZlOmV9fSksUHI9bnVsbCxGcj1bXSxScj1bXSxIcj17fSxCcj0hMSxVcj0hMSxWcj0wLHpyPTAsS3I9ZnVuY3Rpb24odCxlLG4scixpKXt0aGlzLnZtPXQsaSYmKHQuX3dhdGNoZXI9dGhpcyksdC5fd2F0Y2hlcnMucHVzaCh0aGlzKSxyPyh0aGlzLmRlZXA9ISFyLmRlZXAsdGhpcy51c2VyPSEhci51c2VyLHRoaXMubGF6eT0hIXIubGF6eSx0aGlzLnN5bmM9ISFyLnN5bmMpOnRoaXMuZGVlcD10aGlzLnVzZXI9dGhpcy5sYXp5PXRoaXMuc3luYz0hMSx0aGlzLmNiPW4sdGhpcy5pZD0rK3pyLHRoaXMuYWN0aXZlPSEwLHRoaXMuZGlydHk9dGhpcy5sYXp5LHRoaXMuZGVwcz1bXSx0aGlzLm5ld0RlcHM9W10sdGhpcy5kZXBJZHM9bmV3IGNyLHRoaXMubmV3RGVwSWRzPW5ldyBjcix0aGlzLmV4cHJlc3Npb249XCJcIixcImZ1bmN0aW9uXCI9PXR5cGVvZiBlP3RoaXMuZ2V0dGVyPWU6KHRoaXMuZ2V0dGVyPWZ1bmN0aW9uKHQpe2lmKCFxbi50ZXN0KHQpKXt2YXIgZT10LnNwbGl0KFwiLlwiKTtyZXR1cm4gZnVuY3Rpb24odCl7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe2lmKCF0KXJldHVybjt0PXRbZVtuXV19cmV0dXJuIHR9fX0oZSksdGhpcy5nZXR0ZXJ8fCh0aGlzLmdldHRlcj1mdW5jdGlvbigpe30pKSx0aGlzLnZhbHVlPXRoaXMubGF6eT92b2lkIDA6dGhpcy5nZXQoKX07S3IucHJvdG90eXBlLmdldD1mdW5jdGlvbigpeyFmdW5jdGlvbih0KXt2ci50YXJnZXQmJmhyLnB1c2godnIudGFyZ2V0KSx2ci50YXJnZXQ9dH0odGhpcyk7dmFyIHQsZT10aGlzLnZtO3RyeXt0PXRoaXMuZ2V0dGVyLmNhbGwoZSxlKX1jYXRjaCh0KXtpZighdGhpcy51c2VyKXRocm93IHQ7Vih0LGUsJ2dldHRlciBmb3Igd2F0Y2hlciBcIicrdGhpcy5leHByZXNzaW9uKydcIicpfWZpbmFsbHl7dGhpcy5kZWVwJiZXKHQpLHZyLnRhcmdldD1oci5wb3AoKSx0aGlzLmNsZWFudXBEZXBzKCl9cmV0dXJuIHR9LEtyLnByb3RvdHlwZS5hZGREZXA9ZnVuY3Rpb24odCl7dmFyIGU9dC5pZDt0aGlzLm5ld0RlcElkcy5oYXMoZSl8fCh0aGlzLm5ld0RlcElkcy5hZGQoZSksdGhpcy5uZXdEZXBzLnB1c2godCksdGhpcy5kZXBJZHMuaGFzKGUpfHx0LmFkZFN1Yih0aGlzKSl9LEtyLnByb3RvdHlwZS5jbGVhbnVwRGVwcz1mdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLmRlcHMubGVuZ3RoO3QtLTspe3ZhciBlPXRoaXMuZGVwc1t0XTt0aGlzLm5ld0RlcElkcy5oYXMoZS5pZCl8fGUucmVtb3ZlU3ViKHRoaXMpfXZhciBuPXRoaXMuZGVwSWRzO3RoaXMuZGVwSWRzPXRoaXMubmV3RGVwSWRzLHRoaXMubmV3RGVwSWRzPW4sdGhpcy5uZXdEZXBJZHMuY2xlYXIoKSxuPXRoaXMuZGVwcyx0aGlzLmRlcHM9dGhpcy5uZXdEZXBzLHRoaXMubmV3RGVwcz1uLHRoaXMubmV3RGVwcy5sZW5ndGg9MH0sS3IucHJvdG90eXBlLnVwZGF0ZT1mdW5jdGlvbigpe3RoaXMubGF6eT90aGlzLmRpcnR5PSEwOnRoaXMuc3luYz90aGlzLnJ1bigpOmZ1bmN0aW9uKHQpe3ZhciBlPXQuaWQ7aWYobnVsbD09SHJbZV0pe2lmKEhyW2VdPSEwLFVyKXtmb3IodmFyIG49RnIubGVuZ3RoLTE7bj5WciYmRnJbbl0uaWQ+dC5pZDspbi0tO0ZyLnNwbGljZShuKzEsMCx0KX1lbHNlIEZyLnB1c2godCk7QnJ8fChCcj0hMCxxKGh0KSl9fSh0aGlzKX0sS3IucHJvdG90eXBlLnJ1bj1mdW5jdGlvbigpe2lmKHRoaXMuYWN0aXZlKXt2YXIgdD10aGlzLmdldCgpO2lmKHQhPT10aGlzLnZhbHVlfHxpKHQpfHx0aGlzLmRlZXApe3ZhciBlPXRoaXMudmFsdWU7aWYodGhpcy52YWx1ZT10LHRoaXMudXNlcil0cnl7dGhpcy5jYi5jYWxsKHRoaXMudm0sdCxlKX1jYXRjaCh0KXtWKHQsdGhpcy52bSwnY2FsbGJhY2sgZm9yIHdhdGNoZXIgXCInK3RoaXMuZXhwcmVzc2lvbisnXCInKX1lbHNlIHRoaXMuY2IuY2FsbCh0aGlzLnZtLHQsZSl9fX0sS3IucHJvdG90eXBlLmV2YWx1YXRlPWZ1bmN0aW9uKCl7dGhpcy52YWx1ZT10aGlzLmdldCgpLHRoaXMuZGlydHk9ITF9LEtyLnByb3RvdHlwZS5kZXBlbmQ9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcy5kZXBzLmxlbmd0aDt0LS07KXRoaXMuZGVwc1t0XS5kZXBlbmQoKX0sS3IucHJvdG90eXBlLnRlYXJkb3duPWZ1bmN0aW9uKCl7aWYodGhpcy5hY3RpdmUpe3RoaXMudm0uX2lzQmVpbmdEZXN0cm95ZWR8fGwodGhpcy52bS5fd2F0Y2hlcnMsdGhpcyk7Zm9yKHZhciB0PXRoaXMuZGVwcy5sZW5ndGg7dC0tOyl0aGlzLmRlcHNbdF0ucmVtb3ZlU3ViKHRoaXMpO3RoaXMuYWN0aXZlPSExfX07dmFyIEpyPXtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6eSxzZXQ6eX0scXI9e2xhenk6ITB9O050KEl0LnByb3RvdHlwZSk7dmFyIFdyPXtpbml0OmZ1bmN0aW9uKHQsbixyLGkpe2lmKCF0LmNvbXBvbmVudEluc3RhbmNlfHx0LmNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCl7KHQuY29tcG9uZW50SW5zdGFuY2U9ZnVuY3Rpb24odCxuLHIsaSl7dmFyIG89e19pc0NvbXBvbmVudDohMCxwYXJlbnQ6bixfcGFyZW50Vm5vZGU6dCxfcGFyZW50RWxtOnJ8fG51bGwsX3JlZkVsbTppfHxudWxsfSxhPXQuZGF0YS5pbmxpbmVUZW1wbGF0ZTtyZXR1cm4gZShhKSYmKG8ucmVuZGVyPWEucmVuZGVyLG8uc3RhdGljUmVuZGVyRm5zPWEuc3RhdGljUmVuZGVyRm5zKSxuZXcgdC5jb21wb25lbnRPcHRpb25zLkN0b3Iobyl9KHQsUHIscixpKSkuJG1vdW50KG4/dC5lbG06dm9pZCAwLG4pfWVsc2UgaWYodC5kYXRhLmtlZXBBbGl2ZSl7dmFyIG89dDtXci5wcmVwYXRjaChvLG8pfX0scHJlcGF0Y2g6ZnVuY3Rpb24odCxlKXt2YXIgbj1lLmNvbXBvbmVudE9wdGlvbnM7IWZ1bmN0aW9uKHQsZSxuLHIsaSl7dmFyIG89ISEoaXx8dC4kb3B0aW9ucy5fcmVuZGVyQ2hpbGRyZW58fHIuZGF0YS5zY29wZWRTbG90c3x8dC4kc2NvcGVkU2xvdHMhPT1qbik7aWYodC4kb3B0aW9ucy5fcGFyZW50Vm5vZGU9cix0LiR2bm9kZT1yLHQuX3Zub2RlJiYodC5fdm5vZGUucGFyZW50PXIpLHQuJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuPWksdC4kYXR0cnM9ci5kYXRhJiZyLmRhdGEuYXR0cnN8fGpuLHQuJGxpc3RlbmVycz1ufHxqbixlJiZ0LiRvcHRpb25zLnByb3BzKXtDci5zaG91bGRDb252ZXJ0PSExO2Zvcih2YXIgYT10Ll9wcm9wcyxzPXQuJG9wdGlvbnMuX3Byb3BLZXlzfHxbXSxjPTA7YzxzLmxlbmd0aDtjKyspe3ZhciB1PXNbY107YVt1XT1IKHUsdC4kb3B0aW9ucy5wcm9wcyxlLHQpfUNyLnNob3VsZENvbnZlcnQ9ITAsdC4kb3B0aW9ucy5wcm9wc0RhdGE9ZX1pZihuKXt2YXIgbD10LiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7dC4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzPW4sc3QodCxuLGwpfW8mJih0LiRzbG90cz1jdChpLHIuY29udGV4dCksdC4kZm9yY2VVcGRhdGUoKSl9KGUuY29tcG9uZW50SW5zdGFuY2U9dC5jb21wb25lbnRJbnN0YW5jZSxuLnByb3BzRGF0YSxuLmxpc3RlbmVycyxlLG4uY2hpbGRyZW4pfSxpbnNlcnQ6ZnVuY3Rpb24odCl7dmFyIGU9dC5jb250ZXh0LG49dC5jb21wb25lbnRJbnN0YW5jZTtuLl9pc01vdW50ZWR8fChuLl9pc01vdW50ZWQ9ITAsdnQobixcIm1vdW50ZWRcIikpLHQuZGF0YS5rZWVwQWxpdmUmJihlLl9pc01vdW50ZWQ/ZnVuY3Rpb24odCl7dC5faW5hY3RpdmU9ITEsUnIucHVzaCh0KX0obik6cHQobiwhMCkpfSxkZXN0cm95OmZ1bmN0aW9uKHQpe3ZhciBlPXQuY29tcG9uZW50SW5zdGFuY2U7ZS5faXNEZXN0cm95ZWR8fCh0LmRhdGEua2VlcEFsaXZlP2R0KGUsITApOmUuJGRlc3Ryb3koKSl9fSxHcj1PYmplY3Qua2V5cyhXciksWnI9MSxYcj0yLFlyPTA7IWZ1bmN0aW9uKHQpe3QucHJvdG90eXBlLl9pbml0PWZ1bmN0aW9uKHQpe3RoaXMuX3VpZD1ZcisrLHRoaXMuX2lzVnVlPSEwLHQmJnQuX2lzQ29tcG9uZW50P2Z1bmN0aW9uKHQsZSl7dmFyIG49dC4kb3B0aW9ucz1PYmplY3QuY3JlYXRlKHQuY29uc3RydWN0b3Iub3B0aW9ucykscj1lLl9wYXJlbnRWbm9kZTtuLnBhcmVudD1lLnBhcmVudCxuLl9wYXJlbnRWbm9kZT1yLG4uX3BhcmVudEVsbT1lLl9wYXJlbnRFbG0sbi5fcmVmRWxtPWUuX3JlZkVsbTt2YXIgaT1yLmNvbXBvbmVudE9wdGlvbnM7bi5wcm9wc0RhdGE9aS5wcm9wc0RhdGEsbi5fcGFyZW50TGlzdGVuZXJzPWkubGlzdGVuZXJzLG4uX3JlbmRlckNoaWxkcmVuPWkuY2hpbGRyZW4sbi5fY29tcG9uZW50VGFnPWkudGFnLGUucmVuZGVyJiYobi5yZW5kZXI9ZS5yZW5kZXIsbi5zdGF0aWNSZW5kZXJGbnM9ZS5zdGF0aWNSZW5kZXJGbnMpfSh0aGlzLHQpOnRoaXMuJG9wdGlvbnM9RihGdCh0aGlzLmNvbnN0cnVjdG9yKSx0fHx7fSx0aGlzKSx0aGlzLl9yZW5kZXJQcm94eT10aGlzLHRoaXMuX3NlbGY9dGhpcyxmdW5jdGlvbih0KXt2YXIgZT10LiRvcHRpb25zLG49ZS5wYXJlbnQ7aWYobiYmIWUuYWJzdHJhY3Qpe2Zvcig7bi4kb3B0aW9ucy5hYnN0cmFjdCYmbi4kcGFyZW50OyluPW4uJHBhcmVudDtuLiRjaGlsZHJlbi5wdXNoKHQpfXQuJHBhcmVudD1uLHQuJHJvb3Q9bj9uLiRyb290OnQsdC4kY2hpbGRyZW49W10sdC4kcmVmcz17fSx0Ll93YXRjaGVyPW51bGwsdC5faW5hY3RpdmU9bnVsbCx0Ll9kaXJlY3RJbmFjdGl2ZT0hMSx0Ll9pc01vdW50ZWQ9ITEsdC5faXNEZXN0cm95ZWQ9ITEsdC5faXNCZWluZ0Rlc3Ryb3llZD0hMX0odGhpcyksZnVuY3Rpb24odCl7dC5fZXZlbnRzPU9iamVjdC5jcmVhdGUobnVsbCksdC5faGFzSG9va0V2ZW50PSExO3ZhciBlPXQuJG9wdGlvbnMuX3BhcmVudExpc3RlbmVycztlJiZzdCh0LGUpfSh0aGlzKSxmdW5jdGlvbih0KXt0Ll92bm9kZT1udWxsLHQuX3N0YXRpY1RyZWVzPW51bGw7dmFyIGU9dC4kb3B0aW9ucyxuPXQuJHZub2RlPWUuX3BhcmVudFZub2RlLHI9biYmbi5jb250ZXh0O3QuJHNsb3RzPWN0KGUuX3JlbmRlckNoaWxkcmVuLHIpLHQuJHNjb3BlZFNsb3RzPWpuLHQuX2M9ZnVuY3Rpb24oZSxuLHIsaSl7cmV0dXJuIER0KHQsZSxuLHIsaSwhMSl9LHQuJGNyZWF0ZUVsZW1lbnQ9ZnVuY3Rpb24oZSxuLHIsaSl7cmV0dXJuIER0KHQsZSxuLHIsaSwhMCl9O3ZhciBpPW4mJm4uZGF0YTtFKHQsXCIkYXR0cnNcIixpJiZpLmF0dHJzfHxqbiwwLCEwKSxFKHQsXCIkbGlzdGVuZXJzXCIsZS5fcGFyZW50TGlzdGVuZXJzfHxqbiwwLCEwKX0odGhpcyksdnQodGhpcyxcImJlZm9yZUNyZWF0ZVwiKSxmdW5jdGlvbih0KXt2YXIgZT0kdCh0LiRvcHRpb25zLmluamVjdCx0KTtlJiYoQ3Iuc2hvdWxkQ29udmVydD0hMSxPYmplY3Qua2V5cyhlKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe0UodCxuLGVbbl0pfSksQ3Iuc2hvdWxkQ29udmVydD0hMCl9KHRoaXMpLHl0KHRoaXMpLGZ1bmN0aW9uKHQpe3ZhciBlPXQuJG9wdGlvbnMucHJvdmlkZTtlJiYodC5fcHJvdmlkZWQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lLmNhbGwodCk6ZSl9KHRoaXMpLHZ0KHRoaXMsXCJjcmVhdGVkXCIpLHRoaXMuJG9wdGlvbnMuZWwmJnRoaXMuJG1vdW50KHRoaXMuJG9wdGlvbnMuZWwpfX0oUnQpLGZ1bmN0aW9uKHQpe3ZhciBlPXt9O2UuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2RhdGF9O3ZhciBuPXt9O24uZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3Byb3BzfSxPYmplY3QuZGVmaW5lUHJvcGVydHkodC5wcm90b3R5cGUsXCIkZGF0YVwiLGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LnByb3RvdHlwZSxcIiRwcm9wc1wiLG4pLHQucHJvdG90eXBlLiRzZXQ9aix0LnByb3RvdHlwZS4kZGVsZXRlPU4sdC5wcm90b3R5cGUuJHdhdGNoPWZ1bmN0aW9uKHQsZSxuKXtpZihvKGUpKXJldHVybiBidCh0aGlzLHQsZSxuKTsobj1ufHx7fSkudXNlcj0hMDt2YXIgcj1uZXcgS3IodGhpcyx0LGUsbik7cmV0dXJuIG4uaW1tZWRpYXRlJiZlLmNhbGwodGhpcyxyLnZhbHVlKSxmdW5jdGlvbigpe3IudGVhcmRvd24oKX19fShSdCksZnVuY3Rpb24odCl7dmFyIGU9L15ob29rOi87dC5wcm90b3R5cGUuJG9uPWZ1bmN0aW9uKHQsbil7aWYoQXJyYXkuaXNBcnJheSh0KSlmb3IodmFyIHI9MCxpPXQubGVuZ3RoO3I8aTtyKyspdGhpcy4kb24odFtyXSxuKTtlbHNlKHRoaXMuX2V2ZW50c1t0XXx8KHRoaXMuX2V2ZW50c1t0XT1bXSkpLnB1c2gobiksZS50ZXN0KHQpJiYodGhpcy5faGFzSG9va0V2ZW50PSEwKTtyZXR1cm4gdGhpc30sdC5wcm90b3R5cGUuJG9uY2U9ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7ci4kb2ZmKHQsbiksZS5hcHBseShyLGFyZ3VtZW50cyl9dmFyIHI9dGhpcztyZXR1cm4gbi5mbj1lLHIuJG9uKHQsbikscn0sdC5wcm90b3R5cGUuJG9mZj1mdW5jdGlvbih0LGUpe2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLl9ldmVudHM9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzO2lmKEFycmF5LmlzQXJyYXkodCkpe2Zvcih2YXIgbj0wLHI9dC5sZW5ndGg7bjxyO24rKyl0aGlzLiRvZmYodFtuXSxlKTtyZXR1cm4gdGhpc312YXIgaT10aGlzLl9ldmVudHNbdF07aWYoIWkpcmV0dXJuIHRoaXM7aWYoIWUpcmV0dXJuIHRoaXMuX2V2ZW50c1t0XT1udWxsLHRoaXM7aWYoZSlmb3IodmFyIG8sYT1pLmxlbmd0aDthLS07KWlmKChvPWlbYV0pPT09ZXx8by5mbj09PWUpe2kuc3BsaWNlKGEsMSk7YnJlYWt9cmV0dXJuIHRoaXN9LHQucHJvdG90eXBlLiRlbWl0PWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj1lLl9ldmVudHNbdF07aWYobil7bj1uLmxlbmd0aD4xP3Yobik6bjtmb3IodmFyIHI9dihhcmd1bWVudHMsMSksaT0wLG89bi5sZW5ndGg7aTxvO2krKyl0cnl7bltpXS5hcHBseShlLHIpfWNhdGNoKG4pe1YobixlLCdldmVudCBoYW5kbGVyIGZvciBcIicrdCsnXCInKX19cmV0dXJuIGV9fShSdCksZnVuY3Rpb24odCl7dC5wcm90b3R5cGUuX3VwZGF0ZT1mdW5jdGlvbih0LGUpe3RoaXMuX2lzTW91bnRlZCYmdnQodGhpcyxcImJlZm9yZVVwZGF0ZVwiKTt2YXIgbj10aGlzLiRlbCxyPXRoaXMuX3Zub2RlLGk9UHI7UHI9dGhpcyx0aGlzLl92bm9kZT10LHI/dGhpcy4kZWw9dGhpcy5fX3BhdGNoX18ocix0KToodGhpcy4kZWw9dGhpcy5fX3BhdGNoX18odGhpcy4kZWwsdCxlLCExLHRoaXMuJG9wdGlvbnMuX3BhcmVudEVsbSx0aGlzLiRvcHRpb25zLl9yZWZFbG0pLHRoaXMuJG9wdGlvbnMuX3BhcmVudEVsbT10aGlzLiRvcHRpb25zLl9yZWZFbG09bnVsbCksUHI9aSxuJiYobi5fX3Z1ZV9fPW51bGwpLHRoaXMuJGVsJiYodGhpcy4kZWwuX192dWVfXz10aGlzKSx0aGlzLiR2bm9kZSYmdGhpcy4kcGFyZW50JiZ0aGlzLiR2bm9kZT09PXRoaXMuJHBhcmVudC5fdm5vZGUmJih0aGlzLiRwYXJlbnQuJGVsPXRoaXMuJGVsKX0sdC5wcm90b3R5cGUuJGZvcmNlVXBkYXRlPWZ1bmN0aW9uKCl7dGhpcy5fd2F0Y2hlciYmdGhpcy5fd2F0Y2hlci51cGRhdGUoKX0sdC5wcm90b3R5cGUuJGRlc3Ryb3k9ZnVuY3Rpb24oKXtpZighdGhpcy5faXNCZWluZ0Rlc3Ryb3llZCl7dnQodGhpcyxcImJlZm9yZURlc3Ryb3lcIiksdGhpcy5faXNCZWluZ0Rlc3Ryb3llZD0hMDt2YXIgdD10aGlzLiRwYXJlbnQ7IXR8fHQuX2lzQmVpbmdEZXN0cm95ZWR8fHRoaXMuJG9wdGlvbnMuYWJzdHJhY3R8fGwodC4kY2hpbGRyZW4sdGhpcyksdGhpcy5fd2F0Y2hlciYmdGhpcy5fd2F0Y2hlci50ZWFyZG93bigpO2Zvcih2YXIgZT10aGlzLl93YXRjaGVycy5sZW5ndGg7ZS0tOyl0aGlzLl93YXRjaGVyc1tlXS50ZWFyZG93bigpO3RoaXMuX2RhdGEuX19vYl9fJiZ0aGlzLl9kYXRhLl9fb2JfXy52bUNvdW50LS0sdGhpcy5faXNEZXN0cm95ZWQ9ITAsdGhpcy5fX3BhdGNoX18odGhpcy5fdm5vZGUsbnVsbCksdnQodGhpcyxcImRlc3Ryb3llZFwiKSx0aGlzLiRvZmYoKSx0aGlzLiRlbCYmKHRoaXMuJGVsLl9fdnVlX189bnVsbCksdGhpcy4kdm5vZGUmJih0aGlzLiR2bm9kZS5wYXJlbnQ9bnVsbCl9fX0oUnQpLGZ1bmN0aW9uKHQpe050KHQucHJvdG90eXBlKSx0LnByb3RvdHlwZS4kbmV4dFRpY2s9ZnVuY3Rpb24odCl7cmV0dXJuIHEodCx0aGlzKX0sdC5wcm90b3R5cGUuX3JlbmRlcj1mdW5jdGlvbigpe3ZhciB0PXRoaXMsZT10LiRvcHRpb25zLG49ZS5yZW5kZXIscj1lLl9wYXJlbnRWbm9kZTtpZih0Ll9pc01vdW50ZWQpZm9yKHZhciBpIGluIHQuJHNsb3RzKXt2YXIgbz10LiRzbG90c1tpXTsoby5fcmVuZGVyZWR8fG9bMF0mJm9bMF0uZWxtKSYmKHQuJHNsb3RzW2ldPUEobywhMCkpfXQuJHNjb3BlZFNsb3RzPXImJnIuZGF0YS5zY29wZWRTbG90c3x8am4sdC4kdm5vZGU9cjt2YXIgYTt0cnl7YT1uLmNhbGwodC5fcmVuZGVyUHJveHksdC4kY3JlYXRlRWxlbWVudCl9Y2F0Y2goZSl7VihlLHQsXCJyZW5kZXJcIiksYT10Ll92bm9kZX1yZXR1cm4gYSBpbnN0YW5jZW9mIG1yfHwoYT1ncigpKSxhLnBhcmVudD1yLGF9fShSdCk7dmFyIFFyPVtTdHJpbmcsUmVnRXhwLEFycmF5XSx0aT17S2VlcEFsaXZlOntuYW1lOlwia2VlcC1hbGl2ZVwiLGFic3RyYWN0OiEwLHByb3BzOntpbmNsdWRlOlFyLGV4Y2x1ZGU6UXIsbWF4OltTdHJpbmcsTnVtYmVyXX0sY3JlYXRlZDpmdW5jdGlvbigpe3RoaXMuY2FjaGU9T2JqZWN0LmNyZWF0ZShudWxsKSx0aGlzLmtleXM9W119LGRlc3Ryb3llZDpmdW5jdGlvbigpe2Zvcih2YXIgdCBpbiB0aGlzLmNhY2hlKXp0KHRoaXMuY2FjaGUsdCx0aGlzLmtleXMpfSx3YXRjaDp7aW5jbHVkZTpmdW5jdGlvbih0KXtWdCh0aGlzLGZ1bmN0aW9uKGUpe3JldHVybiBVdCh0LGUpfSl9LGV4Y2x1ZGU6ZnVuY3Rpb24odCl7VnQodGhpcyxmdW5jdGlvbihlKXtyZXR1cm4hVXQodCxlKX0pfX0scmVuZGVyOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy4kc2xvdHMuZGVmYXVsdCxlPWl0KHQpLG49ZSYmZS5jb21wb25lbnRPcHRpb25zO2lmKG4pe3ZhciByPUJ0KG4pLGk9dGhpcy5pbmNsdWRlLG89dGhpcy5leGNsdWRlO2lmKGkmJighcnx8IVV0KGkscikpfHxvJiZyJiZVdChvLHIpKXJldHVybiBlO3ZhciBhPXRoaXMuY2FjaGUscz10aGlzLmtleXMsYz1udWxsPT1lLmtleT9uLkN0b3IuY2lkKyhuLnRhZz9cIjo6XCIrbi50YWc6XCJcIik6ZS5rZXk7YVtjXT8oZS5jb21wb25lbnRJbnN0YW5jZT1hW2NdLmNvbXBvbmVudEluc3RhbmNlLGwocyxjKSxzLnB1c2goYykpOihhW2NdPWUscy5wdXNoKGMpLHRoaXMubWF4JiZzLmxlbmd0aD5wYXJzZUludCh0aGlzLm1heCkmJnp0KGEsc1swXSxzLHRoaXMuX3Zub2RlKSksZS5kYXRhLmtlZXBBbGl2ZT0hMH1yZXR1cm4gZXx8dCYmdFswXX19fTshZnVuY3Rpb24odCl7dmFyIGU9e307ZS5nZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gSm59LE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiY29uZmlnXCIsZSksdC51dGlsPXt3YXJuOnByLGV4dGVuZDpoLG1lcmdlT3B0aW9uczpGLGRlZmluZVJlYWN0aXZlOkV9LHQuc2V0PWosdC5kZWxldGU9Tix0Lm5leHRUaWNrPXEsdC5vcHRpb25zPU9iamVjdC5jcmVhdGUobnVsbCksem4uZm9yRWFjaChmdW5jdGlvbihlKXt0Lm9wdGlvbnNbZStcInNcIl09T2JqZWN0LmNyZWF0ZShudWxsKX0pLHQub3B0aW9ucy5fYmFzZT10LGgodC5vcHRpb25zLmNvbXBvbmVudHMsdGkpLGZ1bmN0aW9uKHQpe3QudXNlPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuX2luc3RhbGxlZFBsdWdpbnN8fCh0aGlzLl9pbnN0YWxsZWRQbHVnaW5zPVtdKTtpZihlLmluZGV4T2YodCk+LTEpcmV0dXJuIHRoaXM7dmFyIG49dihhcmd1bWVudHMsMSk7cmV0dXJuIG4udW5zaGlmdCh0aGlzKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0Lmluc3RhbGw/dC5pbnN0YWxsLmFwcGx5KHQsbik6XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdC5hcHBseShudWxsLG4pLGUucHVzaCh0KSx0aGlzfX0odCksZnVuY3Rpb24odCl7dC5taXhpbj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5vcHRpb25zPUYodGhpcy5vcHRpb25zLHQpLHRoaXN9fSh0KSxIdCh0KSxmdW5jdGlvbih0KXt6bi5mb3JFYWNoKGZ1bmN0aW9uKGUpe3RbZV09ZnVuY3Rpb24odCxuKXtyZXR1cm4gbj8oXCJjb21wb25lbnRcIj09PWUmJm8obikmJihuLm5hbWU9bi5uYW1lfHx0LG49dGhpcy5vcHRpb25zLl9iYXNlLmV4dGVuZChuKSksXCJkaXJlY3RpdmVcIj09PWUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPXtiaW5kOm4sdXBkYXRlOm59KSx0aGlzLm9wdGlvbnNbZStcInNcIl1bdF09bixuKTp0aGlzLm9wdGlvbnNbZStcInNcIl1bdF19fSl9KHQpfShSdCksT2JqZWN0LmRlZmluZVByb3BlcnR5KFJ0LnByb3RvdHlwZSxcIiRpc1NlcnZlclwiLHtnZXQ6dXJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoUnQucHJvdG90eXBlLFwiJHNzckNvbnRleHRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJHZub2RlJiZ0aGlzLiR2bm9kZS5zc3JDb250ZXh0fX0pLFJ0LnZlcnNpb249XCIyLjUuMTNcIjt2YXIgZWksbmkscmksaWksb2ksYWksc2ksY2ksdWk9dShcInN0eWxlLGNsYXNzXCIpLGxpPXUoXCJpbnB1dCx0ZXh0YXJlYSxvcHRpb24sc2VsZWN0LHByb2dyZXNzXCIpLGZpPWZ1bmN0aW9uKHQsZSxuKXtyZXR1cm5cInZhbHVlXCI9PT1uJiZsaSh0KSYmXCJidXR0b25cIiE9PWV8fFwic2VsZWN0ZWRcIj09PW4mJlwib3B0aW9uXCI9PT10fHxcImNoZWNrZWRcIj09PW4mJlwiaW5wdXRcIj09PXR8fFwibXV0ZWRcIj09PW4mJlwidmlkZW9cIj09PXR9LHBpPXUoXCJjb250ZW50ZWRpdGFibGUsZHJhZ2dhYmxlLHNwZWxsY2hlY2tcIiksZGk9dShcImFsbG93ZnVsbHNjcmVlbixhc3luYyxhdXRvZm9jdXMsYXV0b3BsYXksY2hlY2tlZCxjb21wYWN0LGNvbnRyb2xzLGRlY2xhcmUsZGVmYXVsdCxkZWZhdWx0Y2hlY2tlZCxkZWZhdWx0bXV0ZWQsZGVmYXVsdHNlbGVjdGVkLGRlZmVyLGRpc2FibGVkLGVuYWJsZWQsZm9ybW5vdmFsaWRhdGUsaGlkZGVuLGluZGV0ZXJtaW5hdGUsaW5lcnQsaXNtYXAsaXRlbXNjb3BlLGxvb3AsbXVsdGlwbGUsbXV0ZWQsbm9ocmVmLG5vcmVzaXplLG5vc2hhZGUsbm92YWxpZGF0ZSxub3dyYXAsb3BlbixwYXVzZW9uZXhpdCxyZWFkb25seSxyZXF1aXJlZCxyZXZlcnNlZCxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc29ydGFibGUsdHJhbnNsYXRlLHRydWVzcGVlZCx0eXBlbXVzdG1hdGNoLHZpc2libGVcIiksdmk9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsaGk9ZnVuY3Rpb24odCl7cmV0dXJuXCI6XCI9PT10LmNoYXJBdCg1KSYmXCJ4bGlua1wiPT09dC5zbGljZSgwLDUpfSxtaT1mdW5jdGlvbih0KXtyZXR1cm4gaGkodCk/dC5zbGljZSg2LHQubGVuZ3RoKTpcIlwifSx5aT1mdW5jdGlvbih0KXtyZXR1cm4gbnVsbD09dHx8ITE9PT10fSxnaT17c3ZnOlwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixtYXRoOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwifSxfaT11KFwiaHRtbCxib2R5LGJhc2UsaGVhZCxsaW5rLG1ldGEsc3R5bGUsdGl0bGUsYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsaDEsaDIsaDMsaDQsaDUsaDYsaGdyb3VwLG5hdixzZWN0aW9uLGRpdixkZCxkbCxkdCxmaWdjYXB0aW9uLGZpZ3VyZSxwaWN0dXJlLGhyLGltZyxsaSxtYWluLG9sLHAscHJlLHVsLGEsYixhYmJyLGJkaSxiZG8sYnIsY2l0ZSxjb2RlLGRhdGEsZGZuLGVtLGksa2JkLG1hcmsscSxycCxydCxydGMscnVieSxzLHNhbXAsc21hbGwsc3BhbixzdHJvbmcsc3ViLHN1cCx0aW1lLHUsdmFyLHdicixhcmVhLGF1ZGlvLG1hcCx0cmFjayx2aWRlbyxlbWJlZCxvYmplY3QscGFyYW0sc291cmNlLGNhbnZhcyxzY3JpcHQsbm9zY3JpcHQsZGVsLGlucyxjYXB0aW9uLGNvbCxjb2xncm91cCx0YWJsZSx0aGVhZCx0Ym9keSx0ZCx0aCx0cixidXR0b24sZGF0YWxpc3QsZmllbGRzZXQsZm9ybSxpbnB1dCxsYWJlbCxsZWdlbmQsbWV0ZXIsb3B0Z3JvdXAsb3B0aW9uLG91dHB1dCxwcm9ncmVzcyxzZWxlY3QsdGV4dGFyZWEsZGV0YWlscyxkaWFsb2csbWVudSxtZW51aXRlbSxzdW1tYXJ5LGNvbnRlbnQsZWxlbWVudCxzaGFkb3csdGVtcGxhdGUsYmxvY2txdW90ZSxpZnJhbWUsdGZvb3RcIiksYmk9dShcInN2ZyxhbmltYXRlLGNpcmNsZSxjbGlwcGF0aCxjdXJzb3IsZGVmcyxkZXNjLGVsbGlwc2UsZmlsdGVyLGZvbnQtZmFjZSxmb3JlaWduT2JqZWN0LGcsZ2x5cGgsaW1hZ2UsbGluZSxtYXJrZXIsbWFzayxtaXNzaW5nLWdseXBoLHBhdGgscGF0dGVybixwb2x5Z29uLHBvbHlsaW5lLHJlY3Qsc3dpdGNoLHN5bWJvbCx0ZXh0LHRleHRwYXRoLHRzcGFuLHVzZSx2aWV3XCIsITApLCRpPWZ1bmN0aW9uKHQpe3JldHVybiBfaSh0KXx8YmkodCl9LENpPU9iamVjdC5jcmVhdGUobnVsbCksd2k9dShcInRleHQsbnVtYmVyLHBhc3N3b3JkLHNlYXJjaCxlbWFpbCx0ZWwsdXJsXCIpLHhpPU9iamVjdC5mcmVlemUoe2NyZWF0ZUVsZW1lbnQ6ZnVuY3Rpb24odCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpO3JldHVyblwic2VsZWN0XCIhPT10P246KGUuZGF0YSYmZS5kYXRhLmF0dHJzJiZ2b2lkIDAhPT1lLmRhdGEuYXR0cnMubXVsdGlwbGUmJm4uc2V0QXR0cmlidXRlKFwibXVsdGlwbGVcIixcIm11bHRpcGxlXCIpLG4pfSxjcmVhdGVFbGVtZW50TlM6ZnVuY3Rpb24odCxlKXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKGdpW3RdLGUpfSxjcmVhdGVUZXh0Tm9kZTpmdW5jdGlvbih0KXtyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCl9LGNyZWF0ZUNvbW1lbnQ6ZnVuY3Rpb24odCl7cmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodCl9LGluc2VydEJlZm9yZTpmdW5jdGlvbih0LGUsbil7dC5pbnNlcnRCZWZvcmUoZSxuKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24odCxlKXt0LnJlbW92ZUNoaWxkKGUpfSxhcHBlbmRDaGlsZDpmdW5jdGlvbih0LGUpe3QuYXBwZW5kQ2hpbGQoZSl9LHBhcmVudE5vZGU6ZnVuY3Rpb24odCl7cmV0dXJuIHQucGFyZW50Tm9kZX0sbmV4dFNpYmxpbmc6ZnVuY3Rpb24odCl7cmV0dXJuIHQubmV4dFNpYmxpbmd9LHRhZ05hbWU6ZnVuY3Rpb24odCl7cmV0dXJuIHQudGFnTmFtZX0sc2V0VGV4dENvbnRlbnQ6ZnVuY3Rpb24odCxlKXt0LnRleHRDb250ZW50PWV9LHNldEF0dHJpYnV0ZTpmdW5jdGlvbih0LGUsbil7dC5zZXRBdHRyaWJ1dGUoZSxuKX19KSxraT17Y3JlYXRlOmZ1bmN0aW9uKHQsZSl7WHQoZSl9LHVwZGF0ZTpmdW5jdGlvbih0LGUpe3QuZGF0YS5yZWYhPT1lLmRhdGEucmVmJiYoWHQodCwhMCksWHQoZSkpfSxkZXN0cm95OmZ1bmN0aW9uKHQpe1h0KHQsITApfX0sQWk9bmV3IG1yKFwiXCIse30sW10pLE9pPVtcImNyZWF0ZVwiLFwiYWN0aXZhdGVcIixcInVwZGF0ZVwiLFwicmVtb3ZlXCIsXCJkZXN0cm95XCJdLFNpPXtjcmVhdGU6dGUsdXBkYXRlOnRlLGRlc3Ryb3k6ZnVuY3Rpb24odCl7dGUodCxBaSl9fSxUaT1PYmplY3QuY3JlYXRlKG51bGwpLEVpPVtraSxTaV0samk9e2NyZWF0ZTpyZSx1cGRhdGU6cmV9LE5pPXtjcmVhdGU6b2UsdXBkYXRlOm9lfSxJaT0vW1xcdykuK1xcLV8kXFxdXS8sTGk9XCJfX3JcIixNaT1cIl9fY1wiLERpPXtjcmVhdGU6eGUsdXBkYXRlOnhlfSxQaT17Y3JlYXRlOmtlLHVwZGF0ZTprZX0sRmk9cChmdW5jdGlvbih0KXt2YXIgZT17fSxuPS86KC4rKS87cmV0dXJuIHQuc3BsaXQoLzsoPyFbXihdKlxcKSkvZykuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0KXt2YXIgcj10LnNwbGl0KG4pO3IubGVuZ3RoPjEmJihlW3JbMF0udHJpbSgpXT1yWzFdLnRyaW0oKSl9fSksZX0pLFJpPS9eLS0vLEhpPS9cXHMqIWltcG9ydGFudCQvLEJpPWZ1bmN0aW9uKHQsZSxuKXtpZihSaS50ZXN0KGUpKXQuc3R5bGUuc2V0UHJvcGVydHkoZSxuKTtlbHNlIGlmKEhpLnRlc3QobikpdC5zdHlsZS5zZXRQcm9wZXJ0eShlLG4ucmVwbGFjZShIaSxcIlwiKSxcImltcG9ydGFudFwiKTtlbHNle3ZhciByPVZpKGUpO2lmKEFycmF5LmlzQXJyYXkobikpZm9yKHZhciBpPTAsbz1uLmxlbmd0aDtpPG87aSsrKXQuc3R5bGVbcl09bltpXTtlbHNlIHQuc3R5bGVbcl09bn19LFVpPVtcIldlYmtpdFwiLFwiTW96XCIsXCJtc1wiXSxWaT1wKGZ1bmN0aW9uKHQpe2lmKGNpPWNpfHxkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLFwiZmlsdGVyXCIhPT0odD1Qbih0KSkmJnQgaW4gY2kpcmV0dXJuIHQ7Zm9yKHZhciBlPXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zbGljZSgxKSxuPTA7bjxVaS5sZW5ndGg7bisrKXt2YXIgcj1VaVtuXStlO2lmKHIgaW4gY2kpcmV0dXJuIHJ9fSksemk9e2NyZWF0ZTpTZSx1cGRhdGU6U2V9LEtpPXAoZnVuY3Rpb24odCl7cmV0dXJue2VudGVyQ2xhc3M6dCtcIi1lbnRlclwiLGVudGVyVG9DbGFzczp0K1wiLWVudGVyLXRvXCIsZW50ZXJBY3RpdmVDbGFzczp0K1wiLWVudGVyLWFjdGl2ZVwiLGxlYXZlQ2xhc3M6dCtcIi1sZWF2ZVwiLGxlYXZlVG9DbGFzczp0K1wiLWxlYXZlLXRvXCIsbGVhdmVBY3RpdmVDbGFzczp0K1wiLWxlYXZlLWFjdGl2ZVwifX0pLEppPUduJiYhdHIscWk9XCJ0cmFuc2l0aW9uXCIsV2k9XCJhbmltYXRpb25cIixHaT1cInRyYW5zaXRpb25cIixaaT1cInRyYW5zaXRpb25lbmRcIixYaT1cImFuaW1hdGlvblwiLFlpPVwiYW5pbWF0aW9uZW5kXCI7SmkmJih2b2lkIDA9PT13aW5kb3cub250cmFuc2l0aW9uZW5kJiZ2b2lkIDAhPT13aW5kb3cub253ZWJraXR0cmFuc2l0aW9uZW5kJiYoR2k9XCJXZWJraXRUcmFuc2l0aW9uXCIsWmk9XCJ3ZWJraXRUcmFuc2l0aW9uRW5kXCIpLHZvaWQgMD09PXdpbmRvdy5vbmFuaW1hdGlvbmVuZCYmdm9pZCAwIT09d2luZG93Lm9ud2Via2l0YW5pbWF0aW9uZW5kJiYoWGk9XCJXZWJraXRBbmltYXRpb25cIixZaT1cIndlYmtpdEFuaW1hdGlvbkVuZFwiKSk7dmFyIFFpPUduP3dpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU/d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk6c2V0VGltZW91dDpmdW5jdGlvbih0KXtyZXR1cm4gdCgpfSx0bz0vXFxiKHRyYW5zZm9ybXxhbGwpKCx8JCkvLGVvPWZ1bmN0aW9uKGkpe2Z1bmN0aW9uIG8odCl7dmFyIG49QS5wYXJlbnROb2RlKHQpO2UobikmJkEucmVtb3ZlQ2hpbGQobix0KX1mdW5jdGlvbiBhKHQscixpLG8sYSl7aWYodC5pc1Jvb3RJbnNlcnQ9IWEsIWZ1bmN0aW9uKHQscixpLG8pe3ZhciBhPXQuZGF0YTtpZihlKGEpKXt2YXIgdT1lKHQuY29tcG9uZW50SW5zdGFuY2UpJiZhLmtlZXBBbGl2ZTtpZihlKGE9YS5ob29rKSYmZShhPWEuaW5pdCkmJmEodCwhMSxpLG8pLGUodC5jb21wb25lbnRJbnN0YW5jZSkpcmV0dXJuIHModCxyKSxuKHUpJiZmdW5jdGlvbih0LG4scixpKXtmb3IodmFyIG8sYT10O2EuY29tcG9uZW50SW5zdGFuY2U7KWlmKGE9YS5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUsZShvPWEuZGF0YSkmJmUobz1vLnRyYW5zaXRpb24pKXtmb3Iobz0wO288eC5hY3RpdmF0ZS5sZW5ndGg7KytvKXguYWN0aXZhdGVbb10oQWksYSk7bi5wdXNoKGEpO2JyZWFrfWMocix0LmVsbSxpKX0odCxyLGksbyksITB9fSh0LHIsaSxvKSl7dmFyIHU9dC5kYXRhLGY9dC5jaGlsZHJlbix2PXQudGFnO2Uodik/KHQuZWxtPXQubnM/QS5jcmVhdGVFbGVtZW50TlModC5ucyx2KTpBLmNyZWF0ZUVsZW1lbnQodix0KSxkKHQpLGwodCxmLHIpLGUodSkmJnAodCxyKSxjKGksdC5lbG0sbykpOm4odC5pc0NvbW1lbnQpPyh0LmVsbT1BLmNyZWF0ZUNvbW1lbnQodC50ZXh0KSxjKGksdC5lbG0sbykpOih0LmVsbT1BLmNyZWF0ZVRleHROb2RlKHQudGV4dCksYyhpLHQuZWxtLG8pKX19ZnVuY3Rpb24gcyh0LG4pe2UodC5kYXRhLnBlbmRpbmdJbnNlcnQpJiYobi5wdXNoLmFwcGx5KG4sdC5kYXRhLnBlbmRpbmdJbnNlcnQpLHQuZGF0YS5wZW5kaW5nSW5zZXJ0PW51bGwpLHQuZWxtPXQuY29tcG9uZW50SW5zdGFuY2UuJGVsLGYodCk/KHAodCxuKSxkKHQpKTooWHQodCksbi5wdXNoKHQpKX1mdW5jdGlvbiBjKHQsbixyKXtlKHQpJiYoZShyKT9yLnBhcmVudE5vZGU9PT10JiZBLmluc2VydEJlZm9yZSh0LG4scik6QS5hcHBlbmRDaGlsZCh0LG4pKX1mdW5jdGlvbiBsKHQsZSxuKXtpZihBcnJheS5pc0FycmF5KGUpKWZvcih2YXIgaT0wO2k8ZS5sZW5ndGg7KytpKWEoZVtpXSxuLHQuZWxtLG51bGwsITApO2Vsc2Ugcih0LnRleHQpJiZBLmFwcGVuZENoaWxkKHQuZWxtLEEuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKHQudGV4dCkpKX1mdW5jdGlvbiBmKHQpe2Zvcig7dC5jb21wb25lbnRJbnN0YW5jZTspdD10LmNvbXBvbmVudEluc3RhbmNlLl92bm9kZTtyZXR1cm4gZSh0LnRhZyl9ZnVuY3Rpb24gcCh0LG4pe2Zvcih2YXIgcj0wO3I8eC5jcmVhdGUubGVuZ3RoOysrcil4LmNyZWF0ZVtyXShBaSx0KTtlKEM9dC5kYXRhLmhvb2spJiYoZShDLmNyZWF0ZSkmJkMuY3JlYXRlKEFpLHQpLGUoQy5pbnNlcnQpJiZuLnB1c2godCkpfWZ1bmN0aW9uIGQodCl7dmFyIG47aWYoZShuPXQuZm5TY29wZUlkKSlBLnNldEF0dHJpYnV0ZSh0LmVsbSxuLFwiXCIpO2Vsc2UgZm9yKHZhciByPXQ7cjspZShuPXIuY29udGV4dCkmJmUobj1uLiRvcHRpb25zLl9zY29wZUlkKSYmQS5zZXRBdHRyaWJ1dGUodC5lbG0sbixcIlwiKSxyPXIucGFyZW50O2Uobj1QcikmJm4hPT10LmNvbnRleHQmJm4hPT10LmZuQ29udGV4dCYmZShuPW4uJG9wdGlvbnMuX3Njb3BlSWQpJiZBLnNldEF0dHJpYnV0ZSh0LmVsbSxuLFwiXCIpfWZ1bmN0aW9uIHYodCxlLG4scixpLG8pe2Zvcig7cjw9aTsrK3IpYShuW3JdLG8sdCxlKX1mdW5jdGlvbiBoKHQpe3ZhciBuLHIsaT10LmRhdGE7aWYoZShpKSlmb3IoZShuPWkuaG9vaykmJmUobj1uLmRlc3Ryb3kpJiZuKHQpLG49MDtuPHguZGVzdHJveS5sZW5ndGg7KytuKXguZGVzdHJveVtuXSh0KTtpZihlKG49dC5jaGlsZHJlbikpZm9yKHI9MDtyPHQuY2hpbGRyZW4ubGVuZ3RoOysrciloKHQuY2hpbGRyZW5bcl0pfWZ1bmN0aW9uIG0odCxuLHIsaSl7Zm9yKDtyPD1pOysrcil7dmFyIGE9bltyXTtlKGEpJiYoZShhLnRhZyk/KHkoYSksaChhKSk6byhhLmVsbSkpfX1mdW5jdGlvbiB5KHQsbil7aWYoZShuKXx8ZSh0LmRhdGEpKXt2YXIgcixpPXgucmVtb3ZlLmxlbmd0aCsxO2ZvcihlKG4pP24ubGlzdGVuZXJzKz1pOm49ZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKCl7MD09LS1uLmxpc3RlbmVycyYmbyh0KX1yZXR1cm4gbi5saXN0ZW5lcnM9ZSxufSh0LmVsbSxpKSxlKHI9dC5jb21wb25lbnRJbnN0YW5jZSkmJmUocj1yLl92bm9kZSkmJmUoci5kYXRhKSYmeShyLG4pLHI9MDtyPHgucmVtb3ZlLmxlbmd0aDsrK3IpeC5yZW1vdmVbcl0odCxuKTtlKHI9dC5kYXRhLmhvb2spJiZlKHI9ci5yZW1vdmUpP3IodCxuKTpuKCl9ZWxzZSBvKHQuZWxtKX1mdW5jdGlvbiBnKG4scixpLG8scyl7Zm9yKHZhciBjLHUsbCxmPTAscD0wLGQ9ci5sZW5ndGgtMSxoPXJbMF0seT1yW2RdLGc9aS5sZW5ndGgtMSxiPWlbMF0sJD1pW2ddLEM9IXM7Zjw9ZCYmcDw9ZzspdChoKT9oPXJbKytmXTp0KHkpP3k9clstLWRdOll0KGgsYik/KF8oaCxiLG8pLGg9clsrK2ZdLGI9aVsrK3BdKTpZdCh5LCQpPyhfKHksJCxvKSx5PXJbLS1kXSwkPWlbLS1nXSk6WXQoaCwkKT8oXyhoLCQsbyksQyYmQS5pbnNlcnRCZWZvcmUobixoLmVsbSxBLm5leHRTaWJsaW5nKHkuZWxtKSksaD1yWysrZl0sJD1pWy0tZ10pOll0KHksYik/KF8oeSxiLG8pLEMmJkEuaW5zZXJ0QmVmb3JlKG4seS5lbG0saC5lbG0pLHk9clstLWRdLGI9aVsrK3BdKToodChjKSYmKGM9UXQocixmLGQpKSx0KHU9ZShiLmtleSk/Y1tiLmtleV06ZnVuY3Rpb24odCxuLHIsaSl7Zm9yKHZhciBvPXI7bzxpO28rKyl7dmFyIGE9bltvXTtpZihlKGEpJiZZdCh0LGEpKXJldHVybiBvfX0oYixyLGYsZCkpP2EoYixvLG4saC5lbG0pOll0KGw9clt1XSxiKT8oXyhsLGIsbyksclt1XT12b2lkIDAsQyYmQS5pbnNlcnRCZWZvcmUobixsLmVsbSxoLmVsbSkpOmEoYixvLG4saC5lbG0pLGI9aVsrK3BdKTtmPmQ/dihuLHQoaVtnKzFdKT9udWxsOmlbZysxXS5lbG0saSxwLGcsbyk6cD5nJiZtKDAscixmLGQpfWZ1bmN0aW9uIF8ocixpLG8sYSl7aWYociE9PWkpe3ZhciBzPWkuZWxtPXIuZWxtO2lmKG4oci5pc0FzeW5jUGxhY2Vob2xkZXIpKWUoaS5hc3luY0ZhY3RvcnkucmVzb2x2ZWQpPyQoci5lbG0saSxvKTppLmlzQXN5bmNQbGFjZWhvbGRlcj0hMDtlbHNlIGlmKG4oaS5pc1N0YXRpYykmJm4oci5pc1N0YXRpYykmJmkua2V5PT09ci5rZXkmJihuKGkuaXNDbG9uZWQpfHxuKGkuaXNPbmNlKSkpaS5jb21wb25lbnRJbnN0YW5jZT1yLmNvbXBvbmVudEluc3RhbmNlO2Vsc2V7dmFyIGMsdT1pLmRhdGE7ZSh1KSYmZShjPXUuaG9vaykmJmUoYz1jLnByZXBhdGNoKSYmYyhyLGkpO3ZhciBsPXIuY2hpbGRyZW4scD1pLmNoaWxkcmVuO2lmKGUodSkmJmYoaSkpe2ZvcihjPTA7Yzx4LnVwZGF0ZS5sZW5ndGg7KytjKXgudXBkYXRlW2NdKHIsaSk7ZShjPXUuaG9vaykmJmUoYz1jLnVwZGF0ZSkmJmMocixpKX10KGkudGV4dCk/ZShsKSYmZShwKT9sIT09cCYmZyhzLGwscCxvLGEpOmUocCk/KGUoci50ZXh0KSYmQS5zZXRUZXh0Q29udGVudChzLFwiXCIpLHYocyxudWxsLHAsMCxwLmxlbmd0aC0xLG8pKTplKGwpP20oMCxsLDAsbC5sZW5ndGgtMSk6ZShyLnRleHQpJiZBLnNldFRleHRDb250ZW50KHMsXCJcIik6ci50ZXh0IT09aS50ZXh0JiZBLnNldFRleHRDb250ZW50KHMsaS50ZXh0KSxlKHUpJiZlKGM9dS5ob29rKSYmZShjPWMucG9zdHBhdGNoKSYmYyhyLGkpfX19ZnVuY3Rpb24gYih0LHIsaSl7aWYobihpKSYmZSh0LnBhcmVudCkpdC5wYXJlbnQuZGF0YS5wZW5kaW5nSW5zZXJ0PXI7ZWxzZSBmb3IodmFyIG89MDtvPHIubGVuZ3RoOysrbylyW29dLmRhdGEuaG9vay5pbnNlcnQocltvXSl9ZnVuY3Rpb24gJCh0LHIsaSxvKXt2YXIgYSxjPXIudGFnLHU9ci5kYXRhLGY9ci5jaGlsZHJlbjtpZihvPW98fHUmJnUucHJlLHIuZWxtPXQsbihyLmlzQ29tbWVudCkmJmUoci5hc3luY0ZhY3RvcnkpKXJldHVybiByLmlzQXN5bmNQbGFjZWhvbGRlcj0hMCwhMDtpZihlKHUpJiYoZShhPXUuaG9vaykmJmUoYT1hLmluaXQpJiZhKHIsITApLGUoYT1yLmNvbXBvbmVudEluc3RhbmNlKSkpcmV0dXJuIHMocixpKSwhMDtpZihlKGMpKXtpZihlKGYpKWlmKHQuaGFzQ2hpbGROb2RlcygpKWlmKGUoYT11KSYmZShhPWEuZG9tUHJvcHMpJiZlKGE9YS5pbm5lckhUTUwpKXtpZihhIT09dC5pbm5lckhUTUwpcmV0dXJuITF9ZWxzZXtmb3IodmFyIGQ9ITAsdj10LmZpcnN0Q2hpbGQsaD0wO2g8Zi5sZW5ndGg7aCsrKXtpZighdnx8ISQodixmW2hdLGksbykpe2Q9ITE7YnJlYWt9dj12Lm5leHRTaWJsaW5nfWlmKCFkfHx2KXJldHVybiExfWVsc2UgbChyLGYsaSk7aWYoZSh1KSl7dmFyIG09ITE7Zm9yKHZhciB5IGluIHUpaWYoIU8oeSkpe209ITAscChyLGkpO2JyZWFrfSFtJiZ1LmNsYXNzJiZXKHUuY2xhc3MpfX1lbHNlIHQuZGF0YSE9PXIudGV4dCYmKHQuZGF0YT1yLnRleHQpO3JldHVybiEwfXZhciBDLHcseD17fSxrPWkubW9kdWxlcyxBPWkubm9kZU9wcztmb3IoQz0wO0M8T2kubGVuZ3RoOysrQylmb3IoeFtPaVtDXV09W10sdz0wO3c8ay5sZW5ndGg7Kyt3KWUoa1t3XVtPaVtDXV0pJiZ4W09pW0NdXS5wdXNoKGtbd11bT2lbQ11dKTt2YXIgTz11KFwiYXR0cnMsY2xhc3Msc3RhdGljQ2xhc3Msc3RhdGljU3R5bGUsa2V5XCIpO3JldHVybiBmdW5jdGlvbihyLGksbyxzLGMsdSl7aWYoIXQoaSkpe3ZhciBsPSExLHA9W107aWYodChyKSlsPSEwLGEoaSxwLGMsdSk7ZWxzZXt2YXIgZD1lKHIubm9kZVR5cGUpO2lmKCFkJiZZdChyLGkpKV8ocixpLHAscyk7ZWxzZXtpZihkKXtpZigxPT09ci5ub2RlVHlwZSYmci5oYXNBdHRyaWJ1dGUoVm4pJiYoci5yZW1vdmVBdHRyaWJ1dGUoVm4pLG89ITApLG4obykmJiQocixpLHApKXJldHVybiBiKGkscCwhMCkscjtyPWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgbXIoQS50YWdOYW1lKHQpLnRvTG93ZXJDYXNlKCkse30sW10sdm9pZCAwLHQpfShyKX12YXIgdj1yLmVsbSx5PUEucGFyZW50Tm9kZSh2KTtpZihhKGkscCx2Ll9sZWF2ZUNiP251bGw6eSxBLm5leHRTaWJsaW5nKHYpKSxlKGkucGFyZW50KSlmb3IodmFyIGc9aS5wYXJlbnQsQz1mKGkpO2c7KXtmb3IodmFyIHc9MDt3PHguZGVzdHJveS5sZW5ndGg7Kyt3KXguZGVzdHJveVt3XShnKTtpZihnLmVsbT1pLmVsbSxDKXtmb3IodmFyIGs9MDtrPHguY3JlYXRlLmxlbmd0aDsrK2speC5jcmVhdGVba10oQWksZyk7dmFyIE89Zy5kYXRhLmhvb2suaW5zZXJ0O2lmKE8ubWVyZ2VkKWZvcih2YXIgUz0xO1M8Ty5mbnMubGVuZ3RoO1MrKylPLmZuc1tTXSgpfWVsc2UgWHQoZyk7Zz1nLnBhcmVudH1lKHkpP20oMCxbcl0sMCwwKTplKHIudGFnKSYmaChyKX19cmV0dXJuIGIoaSxwLGwpLGkuZWxtfWUocikmJmgocil9fSh7bm9kZU9wczp4aSxtb2R1bGVzOltqaSxOaSxEaSxQaSx6aSxHbj97Y3JlYXRlOlZlLGFjdGl2YXRlOlZlLHJlbW92ZTpmdW5jdGlvbih0LGUpeyEwIT09dC5kYXRhLnNob3c/SGUodCxlKTplKCl9fTp7fV0uY29uY2F0KEVpKX0pO3RyJiZkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0aW9uY2hhbmdlXCIsZnVuY3Rpb24oKXt2YXIgdD1kb2N1bWVudC5hY3RpdmVFbGVtZW50O3QmJnQudm1vZGVsJiZaZSh0LFwiaW5wdXRcIil9KTt2YXIgbm89e2luc2VydGVkOmZ1bmN0aW9uKHQsZSxuLHIpe1wic2VsZWN0XCI9PT1uLnRhZz8oci5lbG0mJiFyLmVsbS5fdk9wdGlvbnM/WShuLFwicG9zdHBhdGNoXCIsZnVuY3Rpb24oKXtuby5jb21wb25lbnRVcGRhdGVkKHQsZSxuKX0pOnplKHQsZSxuLmNvbnRleHQpLHQuX3ZPcHRpb25zPVtdLm1hcC5jYWxsKHQub3B0aW9ucyxxZSkpOihcInRleHRhcmVhXCI9PT1uLnRhZ3x8d2kodC50eXBlKSkmJih0Ll92TW9kaWZpZXJzPWUubW9kaWZpZXJzLGUubW9kaWZpZXJzLmxhenl8fCh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIixHZSksbnJ8fCh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wb3NpdGlvbnN0YXJ0XCIsV2UpLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBvc2l0aW9uZW5kXCIsR2UpKSx0ciYmKHQudm1vZGVsPSEwKSkpfSxjb21wb25lbnRVcGRhdGVkOmZ1bmN0aW9uKHQsZSxuKXtpZihcInNlbGVjdFwiPT09bi50YWcpe3plKHQsZSxuLmNvbnRleHQpO3ZhciByPXQuX3ZPcHRpb25zLGk9dC5fdk9wdGlvbnM9W10ubWFwLmNhbGwodC5vcHRpb25zLHFlKTtpZihpLnNvbWUoZnVuY3Rpb24odCxlKXtyZXR1cm4hZyh0LHJbZV0pfSkpeyh0Lm11bHRpcGxlP2UudmFsdWUuc29tZShmdW5jdGlvbih0KXtyZXR1cm4gSmUodCxpKX0pOmUudmFsdWUhPT1lLm9sZFZhbHVlJiZKZShlLnZhbHVlLGkpKSYmWmUodCxcImNoYW5nZVwiKX19fX0scm89e21vZGVsOm5vLHNob3c6e2JpbmQ6ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUudmFsdWUsaT0obj1YZShuKSkuZGF0YSYmbi5kYXRhLnRyYW5zaXRpb24sbz10Ll9fdk9yaWdpbmFsRGlzcGxheT1cIm5vbmVcIj09PXQuc3R5bGUuZGlzcGxheT9cIlwiOnQuc3R5bGUuZGlzcGxheTtyJiZpPyhuLmRhdGEuc2hvdz0hMCxSZShuLGZ1bmN0aW9uKCl7dC5zdHlsZS5kaXNwbGF5PW99KSk6dC5zdHlsZS5kaXNwbGF5PXI/bzpcIm5vbmVcIn0sdXBkYXRlOmZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1lLnZhbHVlO2lmKHIhPT1lLm9sZFZhbHVlKXsobj1YZShuKSkuZGF0YSYmbi5kYXRhLnRyYW5zaXRpb24/KG4uZGF0YS5zaG93PSEwLHI/UmUobixmdW5jdGlvbigpe3Quc3R5bGUuZGlzcGxheT10Ll9fdk9yaWdpbmFsRGlzcGxheX0pOkhlKG4sZnVuY3Rpb24oKXt0LnN0eWxlLmRpc3BsYXk9XCJub25lXCJ9KSk6dC5zdHlsZS5kaXNwbGF5PXI/dC5fX3ZPcmlnaW5hbERpc3BsYXk6XCJub25lXCJ9fSx1bmJpbmQ6ZnVuY3Rpb24odCxlLG4scixpKXtpfHwodC5zdHlsZS5kaXNwbGF5PXQuX192T3JpZ2luYWxEaXNwbGF5KX19fSxpbz17bmFtZTpTdHJpbmcsYXBwZWFyOkJvb2xlYW4sY3NzOkJvb2xlYW4sbW9kZTpTdHJpbmcsdHlwZTpTdHJpbmcsZW50ZXJDbGFzczpTdHJpbmcsbGVhdmVDbGFzczpTdHJpbmcsZW50ZXJUb0NsYXNzOlN0cmluZyxsZWF2ZVRvQ2xhc3M6U3RyaW5nLGVudGVyQWN0aXZlQ2xhc3M6U3RyaW5nLGxlYXZlQWN0aXZlQ2xhc3M6U3RyaW5nLGFwcGVhckNsYXNzOlN0cmluZyxhcHBlYXJBY3RpdmVDbGFzczpTdHJpbmcsYXBwZWFyVG9DbGFzczpTdHJpbmcsZHVyYXRpb246W051bWJlcixTdHJpbmcsT2JqZWN0XX0sb289e25hbWU6XCJ0cmFuc2l0aW9uXCIscHJvcHM6aW8sYWJzdHJhY3Q6ITAscmVuZGVyOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10aGlzLiRzbG90cy5kZWZhdWx0O2lmKG4mJihuPW4uZmlsdGVyKGZ1bmN0aW9uKHQpe3JldHVybiB0LnRhZ3x8cnQodCl9KSkubGVuZ3RoKXt2YXIgaT10aGlzLm1vZGUsbz1uWzBdO2lmKGZ1bmN0aW9uKHQpe2Zvcig7dD10LnBhcmVudDspaWYodC5kYXRhLnRyYW5zaXRpb24pcmV0dXJuITB9KHRoaXMuJHZub2RlKSlyZXR1cm4gbzt2YXIgYT1ZZShvKTtpZighYSlyZXR1cm4gbztpZih0aGlzLl9sZWF2aW5nKXJldHVybiB0bih0LG8pO3ZhciBzPVwiX190cmFuc2l0aW9uLVwiK3RoaXMuX3VpZCtcIi1cIjthLmtleT1udWxsPT1hLmtleT9hLmlzQ29tbWVudD9zK1wiY29tbWVudFwiOnMrYS50YWc6cihhLmtleSk/MD09PVN0cmluZyhhLmtleSkuaW5kZXhPZihzKT9hLmtleTpzK2Eua2V5OmEua2V5O3ZhciBjPShhLmRhdGF8fChhLmRhdGE9e30pKS50cmFuc2l0aW9uPVFlKHRoaXMpLHU9dGhpcy5fdm5vZGUsbD1ZZSh1KTtpZihhLmRhdGEuZGlyZWN0aXZlcyYmYS5kYXRhLmRpcmVjdGl2ZXMuc29tZShmdW5jdGlvbih0KXtyZXR1cm5cInNob3dcIj09PXQubmFtZX0pJiYoYS5kYXRhLnNob3c9ITApLGwmJmwuZGF0YSYmIWZ1bmN0aW9uKHQsZSl7cmV0dXJuIGUua2V5PT09dC5rZXkmJmUudGFnPT09dC50YWd9KGEsbCkmJiFydChsKSYmKCFsLmNvbXBvbmVudEluc3RhbmNlfHwhbC5jb21wb25lbnRJbnN0YW5jZS5fdm5vZGUuaXNDb21tZW50KSl7dmFyIGY9bC5kYXRhLnRyYW5zaXRpb249aCh7fSxjKTtpZihcIm91dC1pblwiPT09aSlyZXR1cm4gdGhpcy5fbGVhdmluZz0hMCxZKGYsXCJhZnRlckxlYXZlXCIsZnVuY3Rpb24oKXtlLl9sZWF2aW5nPSExLGUuJGZvcmNlVXBkYXRlKCl9KSx0bih0LG8pO2lmKFwiaW4tb3V0XCI9PT1pKXtpZihydChhKSlyZXR1cm4gdTt2YXIgcCxkPWZ1bmN0aW9uKCl7cCgpfTtZKGMsXCJhZnRlckVudGVyXCIsZCksWShjLFwiZW50ZXJDYW5jZWxsZWRcIixkKSxZKGYsXCJkZWxheUxlYXZlXCIsZnVuY3Rpb24odCl7cD10fSl9fXJldHVybiBvfX19LGFvPWgoe3RhZzpTdHJpbmcsbW92ZUNsYXNzOlN0cmluZ30saW8pO2RlbGV0ZSBhby5tb2RlO3ZhciBzbz17VHJhbnNpdGlvbjpvbyxUcmFuc2l0aW9uR3JvdXA6e3Byb3BzOmFvLHJlbmRlcjpmdW5jdGlvbih0KXtmb3IodmFyIGU9dGhpcy50YWd8fHRoaXMuJHZub2RlLmRhdGEudGFnfHxcInNwYW5cIixuPU9iamVjdC5jcmVhdGUobnVsbCkscj10aGlzLnByZXZDaGlsZHJlbj10aGlzLmNoaWxkcmVuLGk9dGhpcy4kc2xvdHMuZGVmYXVsdHx8W10sbz10aGlzLmNoaWxkcmVuPVtdLGE9UWUodGhpcykscz0wO3M8aS5sZW5ndGg7cysrKXt2YXIgYz1pW3NdO2MudGFnJiZudWxsIT1jLmtleSYmMCE9PVN0cmluZyhjLmtleSkuaW5kZXhPZihcIl9fdmxpc3RcIikmJihvLnB1c2goYyksbltjLmtleV09YywoYy5kYXRhfHwoYy5kYXRhPXt9KSkudHJhbnNpdGlvbj1hKX1pZihyKXtmb3IodmFyIHU9W10sbD1bXSxmPTA7ZjxyLmxlbmd0aDtmKyspe3ZhciBwPXJbZl07cC5kYXRhLnRyYW5zaXRpb249YSxwLmRhdGEucG9zPXAuZWxtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLG5bcC5rZXldP3UucHVzaChwKTpsLnB1c2gocCl9dGhpcy5rZXB0PXQoZSxudWxsLHUpLHRoaXMucmVtb3ZlZD1sfXJldHVybiB0KGUsbnVsbCxvKX0sYmVmb3JlVXBkYXRlOmZ1bmN0aW9uKCl7dGhpcy5fX3BhdGNoX18odGhpcy5fdm5vZGUsdGhpcy5rZXB0LCExLCEwKSx0aGlzLl92bm9kZT10aGlzLmtlcHR9LHVwZGF0ZWQ6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLnByZXZDaGlsZHJlbixlPXRoaXMubW92ZUNsYXNzfHwodGhpcy5uYW1lfHxcInZcIikrXCItbW92ZVwiO3QubGVuZ3RoJiZ0aGlzLmhhc01vdmUodFswXS5lbG0sZSkmJih0LmZvckVhY2goZW4pLHQuZm9yRWFjaChubiksdC5mb3JFYWNoKHJuKSx0aGlzLl9yZWZsb3c9ZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQsdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2lmKHQuZGF0YS5tb3ZlZCl7dmFyIG49dC5lbG0scj1uLnN0eWxlO0llKG4sZSksci50cmFuc2Zvcm09ci5XZWJraXRUcmFuc2Zvcm09ci50cmFuc2l0aW9uRHVyYXRpb249XCJcIixuLmFkZEV2ZW50TGlzdGVuZXIoWmksbi5fbW92ZUNiPWZ1bmN0aW9uIHQocil7ciYmIS90cmFuc2Zvcm0kLy50ZXN0KHIucHJvcGVydHlOYW1lKXx8KG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihaaSx0KSxuLl9tb3ZlQ2I9bnVsbCxMZShuLGUpKX0pfX0pKX0sbWV0aG9kczp7aGFzTW92ZTpmdW5jdGlvbih0LGUpe2lmKCFKaSlyZXR1cm4hMTtpZih0aGlzLl9oYXNNb3ZlKXJldHVybiB0aGlzLl9oYXNNb3ZlO3ZhciBuPXQuY2xvbmVOb2RlKCk7dC5fdHJhbnNpdGlvbkNsYXNzZXMmJnQuX3RyYW5zaXRpb25DbGFzc2VzLmZvckVhY2goZnVuY3Rpb24odCl7RWUobix0KX0pLFRlKG4sZSksbi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiLHRoaXMuJGVsLmFwcGVuZENoaWxkKG4pO3ZhciByPURlKG4pO3JldHVybiB0aGlzLiRlbC5yZW1vdmVDaGlsZChuKSx0aGlzLl9oYXNNb3ZlPXIuaGFzVHJhbnNmb3JtfX19fTtSdC5jb25maWcubXVzdFVzZVByb3A9ZmksUnQuY29uZmlnLmlzUmVzZXJ2ZWRUYWc9JGksUnQuY29uZmlnLmlzUmVzZXJ2ZWRBdHRyPXVpLFJ0LmNvbmZpZy5nZXRUYWdOYW1lc3BhY2U9R3QsUnQuY29uZmlnLmlzVW5rbm93bkVsZW1lbnQ9ZnVuY3Rpb24odCl7aWYoIUduKXJldHVybiEwO2lmKCRpKHQpKXJldHVybiExO2lmKHQ9dC50b0xvd2VyQ2FzZSgpLG51bGwhPUNpW3RdKXJldHVybiBDaVt0XTt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KHQpO3JldHVybiB0LmluZGV4T2YoXCItXCIpPi0xP0NpW3RdPWUuY29uc3RydWN0b3I9PT13aW5kb3cuSFRNTFVua25vd25FbGVtZW50fHxlLmNvbnN0cnVjdG9yPT09d2luZG93LkhUTUxFbGVtZW50OkNpW3RdPS9IVE1MVW5rbm93bkVsZW1lbnQvLnRlc3QoZS50b1N0cmluZygpKX0saChSdC5vcHRpb25zLmRpcmVjdGl2ZXMscm8pLGgoUnQub3B0aW9ucy5jb21wb25lbnRzLHNvKSxSdC5wcm90b3R5cGUuX19wYXRjaF9fPUduP2VvOnksUnQucHJvdG90eXBlLiRtb3VudD1mdW5jdGlvbih0LGUpe3JldHVybiB0PXQmJkduP1p0KHQpOnZvaWQgMCxmdW5jdGlvbih0LGUsbil7dC4kZWw9ZSx0LiRvcHRpb25zLnJlbmRlcnx8KHQuJG9wdGlvbnMucmVuZGVyPWdyKSx2dCh0LFwiYmVmb3JlTW91bnRcIik7dmFyIHI7cmV0dXJuIHI9ZnVuY3Rpb24oKXt0Ll91cGRhdGUodC5fcmVuZGVyKCksbil9LG5ldyBLcih0LHIseSxudWxsLCEwKSxuPSExLG51bGw9PXQuJHZub2RlJiYodC5faXNNb3VudGVkPSEwLHZ0KHQsXCJtb3VudGVkXCIpKSx0fSh0aGlzLHQsZSl9LFJ0Lm5leHRUaWNrKGZ1bmN0aW9uKCl7Sm4uZGV2dG9vbHMmJmxyJiZsci5lbWl0KFwiaW5pdFwiLFJ0KX0sMCk7dmFyIGNvLHVvPS9cXHtcXHsoKD86LnxcXG4pKz8pXFx9XFx9L2csbG89L1stLiorP14ke30oKXxbXFxdXFwvXFxcXF0vZyxmbz1wKGZ1bmN0aW9uKHQpe3ZhciBlPXRbMF0ucmVwbGFjZShsbyxcIlxcXFwkJlwiKSxuPXRbMV0ucmVwbGFjZShsbyxcIlxcXFwkJlwiKTtyZXR1cm4gbmV3IFJlZ0V4cChlK1wiKCg/Oi58XFxcXG4pKz8pXCIrbixcImdcIil9KSxwbz17c3RhdGljS2V5czpbXCJzdGF0aWNDbGFzc1wiXSx0cmFuc2Zvcm1Ob2RlOmZ1bmN0aW9uKHQsZSl7ZS53YXJuO3ZhciBuPWhlKHQsXCJjbGFzc1wiKTtuJiYodC5zdGF0aWNDbGFzcz1KU09OLnN0cmluZ2lmeShuKSk7dmFyIHI9dmUodCxcImNsYXNzXCIsITEpO3ImJih0LmNsYXNzQmluZGluZz1yKX0sZ2VuRGF0YTpmdW5jdGlvbih0KXt2YXIgZT1cIlwiO3JldHVybiB0LnN0YXRpY0NsYXNzJiYoZSs9XCJzdGF0aWNDbGFzczpcIit0LnN0YXRpY0NsYXNzK1wiLFwiKSx0LmNsYXNzQmluZGluZyYmKGUrPVwiY2xhc3M6XCIrdC5jbGFzc0JpbmRpbmcrXCIsXCIpLGV9fSx2bz17c3RhdGljS2V5czpbXCJzdGF0aWNTdHlsZVwiXSx0cmFuc2Zvcm1Ob2RlOmZ1bmN0aW9uKHQsZSl7ZS53YXJuO3ZhciBuPWhlKHQsXCJzdHlsZVwiKTtuJiYodC5zdGF0aWNTdHlsZT1KU09OLnN0cmluZ2lmeShGaShuKSkpO3ZhciByPXZlKHQsXCJzdHlsZVwiLCExKTtyJiYodC5zdHlsZUJpbmRpbmc9cil9LGdlbkRhdGE6ZnVuY3Rpb24odCl7dmFyIGU9XCJcIjtyZXR1cm4gdC5zdGF0aWNTdHlsZSYmKGUrPVwic3RhdGljU3R5bGU6XCIrdC5zdGF0aWNTdHlsZStcIixcIiksdC5zdHlsZUJpbmRpbmcmJihlKz1cInN0eWxlOihcIit0LnN0eWxlQmluZGluZytcIiksXCIpLGV9fSxobz1mdW5jdGlvbih0KXtyZXR1cm4gY289Y298fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksY28uaW5uZXJIVE1MPXQsY28udGV4dENvbnRlbnR9LG1vPXUoXCJhcmVhLGJhc2UsYnIsY29sLGVtYmVkLGZyYW1lLGhyLGltZyxpbnB1dCxpc2luZGV4LGtleWdlbixsaW5rLG1ldGEscGFyYW0sc291cmNlLHRyYWNrLHdiclwiKSx5bz11KFwiY29sZ3JvdXAsZGQsZHQsbGksb3B0aW9ucyxwLHRkLHRmb290LHRoLHRoZWFkLHRyLHNvdXJjZVwiKSxnbz11KFwiYWRkcmVzcyxhcnRpY2xlLGFzaWRlLGJhc2UsYmxvY2txdW90ZSxib2R5LGNhcHRpb24sY29sLGNvbGdyb3VwLGRkLGRldGFpbHMsZGlhbG9nLGRpdixkbCxkdCxmaWVsZHNldCxmaWdjYXB0aW9uLGZpZ3VyZSxmb290ZXIsZm9ybSxoMSxoMixoMyxoNCxoNSxoNixoZWFkLGhlYWRlcixoZ3JvdXAsaHIsaHRtbCxsZWdlbmQsbGksbWVudWl0ZW0sbWV0YSxvcHRncm91cCxvcHRpb24scGFyYW0scnAscnQsc291cmNlLHN0eWxlLHN1bW1hcnksdGJvZHksdGQsdGZvb3QsdGgsdGhlYWQsdGl0bGUsdHIsdHJhY2tcIiksX289L15cXHMqKFteXFxzXCInPD5cXC89XSspKD86XFxzKig9KVxccyooPzpcIihbXlwiXSopXCIrfCcoW14nXSopJyt8KFteXFxzXCInPTw+YF0rKSkpPy8sYm89XCJbYS16QS1aX11bXFxcXHdcXFxcLVxcXFwuXSpcIiwkbz1cIigoPzpcIitibytcIlxcXFw6KT9cIitibytcIilcIixDbz1uZXcgUmVnRXhwKFwiXjxcIiskbyksd289L15cXHMqKFxcLz8pPi8seG89bmV3IFJlZ0V4cChcIl48XFxcXC9cIiskbytcIltePl0qPlwiKSxrbz0vXjwhRE9DVFlQRSBbXj5dKz4vaSxBbz0vXjwhLS0vLE9vPS9ePCFcXFsvLFNvPSExO1wieFwiLnJlcGxhY2UoL3goLik/L2csZnVuY3Rpb24odCxlKXtTbz1cIlwiPT09ZX0pO3ZhciBUbyxFbyxqbyxObyxJbyxMbyxNbyxEbyxQbyxGbyxSbyxIbz11KFwic2NyaXB0LHN0eWxlLHRleHRhcmVhXCIsITApLEJvPXt9LFVvPXtcIiZsdDtcIjpcIjxcIixcIiZndDtcIjpcIj5cIixcIiZxdW90O1wiOidcIicsXCImYW1wO1wiOlwiJlwiLFwiJiMxMDtcIjpcIlxcblwiLFwiJiM5O1wiOlwiXFx0XCJ9LFZvPS8mKD86bHR8Z3R8cXVvdHxhbXApOy9nLHpvPS8mKD86bHR8Z3R8cXVvdHxhbXB8IzEwfCM5KTsvZyxLbz11KFwicHJlLHRleHRhcmVhXCIsITApLEpvPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQmJktvKHQpJiZcIlxcblwiPT09ZVswXX0scW89L15AfF52LW9uOi8sV289L152LXxeQHxeOi8sR289LyguKj8pXFxzKyg/OmlufG9mKVxccysoLiopLyxabz0vLChbXixcXH1cXF1dKikoPzosKFteLFxcfVxcXV0qKSk/JC8sWG89L15cXCh8XFwpJC9nLFlvPS86KC4qKSQvLFFvPS9eOnxedi1iaW5kOi8sdGE9L1xcLlteLl0rL2csZWE9cChobyksbmE9L154bWxuczpOU1xcZCsvLHJhPS9eTlNcXGQrOi8saWE9W3BvLHZvLHtwcmVUcmFuc2Zvcm1Ob2RlOmZ1bmN0aW9uKHQsZSl7aWYoXCJpbnB1dFwiPT09dC50YWcpe3ZhciBuPXQuYXR0cnNNYXA7aWYobltcInYtbW9kZWxcIl0mJihuW1widi1iaW5kOnR5cGVcIl18fG5bXCI6dHlwZVwiXSkpe3ZhciByPXZlKHQsXCJ0eXBlXCIpLGk9aGUodCxcInYtaWZcIiwhMCksbz1pP1wiJiYoXCIraStcIilcIjpcIlwiLGE9bnVsbCE9aGUodCxcInYtZWxzZVwiLCEwKSxzPWhlKHQsXCJ2LWVsc2UtaWZcIiwhMCksYz1mbih0KTt1bihjKSxmZShjLFwidHlwZVwiLFwiY2hlY2tib3hcIiksY24oYyxlKSxjLnByb2Nlc3NlZD0hMCxjLmlmPVwiKFwiK3IrXCIpPT09J2NoZWNrYm94J1wiK28sbG4oYyx7ZXhwOmMuaWYsYmxvY2s6Y30pO3ZhciB1PWZuKHQpO2hlKHUsXCJ2LWZvclwiLCEwKSxmZSh1LFwidHlwZVwiLFwicmFkaW9cIiksY24odSxlKSxsbihjLHtleHA6XCIoXCIrcitcIik9PT0ncmFkaW8nXCIrbyxibG9jazp1fSk7dmFyIGw9Zm4odCk7cmV0dXJuIGhlKGwsXCJ2LWZvclwiLCEwKSxmZShsLFwiOnR5cGVcIixyKSxjbihsLGUpLGxuKGMse2V4cDppLGJsb2NrOmx9KSxhP2MuZWxzZT0hMDpzJiYoYy5lbHNlaWY9cyksY319fX1dLG9hPXtleHBlY3RIVE1MOiEwLG1vZHVsZXM6aWEsZGlyZWN0aXZlczp7bW9kZWw6ZnVuY3Rpb24odCxlLG4pe3ZhciByPWUudmFsdWUsaT1lLm1vZGlmaWVycyxvPXQudGFnLGE9dC5hdHRyc01hcC50eXBlO2lmKHQuY29tcG9uZW50KXJldHVybiBtZSh0LHIsaSksITE7aWYoXCJzZWxlY3RcIj09PW8pIWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj0ndmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLGZ1bmN0aW9uKG8pe3JldHVybiBvLnNlbGVjdGVkfSkubWFwKGZ1bmN0aW9uKG8pe3ZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWU7cmV0dXJuICcrKG4mJm4ubnVtYmVyP1wiX24odmFsKVwiOlwidmFsXCIpK1wifSk7XCI7cj1yK1wiIFwiK3llKGUsXCIkZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF1cIiksZGUodCxcImNoYW5nZVwiLHIsbnVsbCwhMCl9KHQscixpKTtlbHNlIGlmKFwiaW5wdXRcIj09PW8mJlwiY2hlY2tib3hcIj09PWEpIWZ1bmN0aW9uKHQsZSxuKXt2YXIgcj1uJiZuLm51bWJlcixpPXZlKHQsXCJ2YWx1ZVwiKXx8XCJudWxsXCIsbz12ZSh0LFwidHJ1ZS12YWx1ZVwiKXx8XCJ0cnVlXCIsYT12ZSh0LFwiZmFsc2UtdmFsdWVcIil8fFwiZmFsc2VcIjt1ZSh0LFwiY2hlY2tlZFwiLFwiQXJyYXkuaXNBcnJheShcIitlK1wiKT9faShcIitlK1wiLFwiK2krXCIpPi0xXCIrKFwidHJ1ZVwiPT09bz9cIjooXCIrZStcIilcIjpcIjpfcShcIitlK1wiLFwiK28rXCIpXCIpKSxkZSh0LFwiY2hhbmdlXCIsXCJ2YXIgJCRhPVwiK2UrXCIsJCRlbD0kZXZlbnQudGFyZ2V0LCQkYz0kJGVsLmNoZWNrZWQ/KFwiK28rXCIpOihcIithK1wiKTtpZihBcnJheS5pc0FycmF5KCQkYSkpe3ZhciAkJHY9XCIrKHI/XCJfbihcIitpK1wiKVwiOmkpK1wiLCQkaT1faSgkJGEsJCR2KTtpZigkJGVsLmNoZWNrZWQpeyQkaTwwJiYoXCIrZStcIj0kJGEuY29uY2F0KFskJHZdKSl9ZWxzZXskJGk+LTEmJihcIitlK1wiPSQkYS5zbGljZSgwLCQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkrMSkpKX19ZWxzZXtcIit5ZShlLFwiJCRjXCIpK1wifVwiLG51bGwsITApfSh0LHIsaSk7ZWxzZSBpZihcImlucHV0XCI9PT1vJiZcInJhZGlvXCI9PT1hKSFmdW5jdGlvbih0LGUsbil7dmFyIHI9biYmbi5udW1iZXIsaT12ZSh0LFwidmFsdWVcIil8fFwibnVsbFwiO3VlKHQsXCJjaGVja2VkXCIsXCJfcShcIitlK1wiLFwiKyhpPXI/XCJfbihcIitpK1wiKVwiOmkpK1wiKVwiKSxkZSh0LFwiY2hhbmdlXCIseWUoZSxpKSxudWxsLCEwKX0odCxyLGkpO2Vsc2UgaWYoXCJpbnB1dFwiPT09b3x8XCJ0ZXh0YXJlYVwiPT09bykhZnVuY3Rpb24odCxlLG4pe3ZhciByPXQuYXR0cnNNYXAudHlwZSxpPW58fHt9LG89aS5sYXp5LGE9aS5udW1iZXIscz1pLnRyaW0sYz0hbyYmXCJyYW5nZVwiIT09cix1PW8/XCJjaGFuZ2VcIjpcInJhbmdlXCI9PT1yP0xpOlwiaW5wdXRcIixsPVwiJGV2ZW50LnRhcmdldC52YWx1ZVwiO3MmJihsPVwiJGV2ZW50LnRhcmdldC52YWx1ZS50cmltKClcIiksYSYmKGw9XCJfbihcIitsK1wiKVwiKTt2YXIgZj15ZShlLGwpO2MmJihmPVwiaWYoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpcmV0dXJuO1wiK2YpLHVlKHQsXCJ2YWx1ZVwiLFwiKFwiK2UrXCIpXCIpLGRlKHQsdSxmLG51bGwsITApLChzfHxhKSYmZGUodCxcImJsdXJcIixcIiRmb3JjZVVwZGF0ZSgpXCIpfSh0LHIsaSk7ZWxzZSBpZighSm4uaXNSZXNlcnZlZFRhZyhvKSlyZXR1cm4gbWUodCxyLGkpLCExO3JldHVybiEwfSx0ZXh0OmZ1bmN0aW9uKHQsZSl7ZS52YWx1ZSYmdWUodCxcInRleHRDb250ZW50XCIsXCJfcyhcIitlLnZhbHVlK1wiKVwiKX0saHRtbDpmdW5jdGlvbih0LGUpe2UudmFsdWUmJnVlKHQsXCJpbm5lckhUTUxcIixcIl9zKFwiK2UudmFsdWUrXCIpXCIpfX0saXNQcmVUYWc6ZnVuY3Rpb24odCl7cmV0dXJuXCJwcmVcIj09PXR9LGlzVW5hcnlUYWc6bW8sbXVzdFVzZVByb3A6ZmksY2FuQmVMZWZ0T3BlblRhZzp5byxpc1Jlc2VydmVkVGFnOiRpLGdldFRhZ05hbWVzcGFjZTpHdCxzdGF0aWNLZXlzOmZ1bmN0aW9uKHQpe3JldHVybiB0LnJlZHVjZShmdW5jdGlvbih0LGUpe3JldHVybiB0LmNvbmNhdChlLnN0YXRpY0tleXN8fFtdKX0sW10pLmpvaW4oXCIsXCIpfShpYSl9LGFhPXAoZnVuY3Rpb24odCl7cmV0dXJuIHUoXCJ0eXBlLHRhZyxhdHRyc0xpc3QsYXR0cnNNYXAscGxhaW4scGFyZW50LGNoaWxkcmVuLGF0dHJzXCIrKHQ/XCIsXCIrdDpcIlwiKSl9KSxzYT0vXlxccyooW1xcdyRfXSt8XFwoW14pXSo/XFwpKVxccyo9PnxeZnVuY3Rpb25cXHMqXFwoLyxjYT0vXlxccypbQS1aYS16XyRdW1xcdyRdKig/OlxcLltBLVphLXpfJF1bXFx3JF0qfFxcWycuKj8nXXxcXFtcIi4qP1wiXXxcXFtcXGQrXXxcXFtbQS1aYS16XyRdW1xcdyRdKl0pKlxccyokLyx1YT17ZXNjOjI3LHRhYjo5LGVudGVyOjEzLHNwYWNlOjMyLHVwOjM4LGxlZnQ6MzcscmlnaHQ6MzksZG93bjo0MCxkZWxldGU6WzgsNDZdfSxsYT1mdW5jdGlvbih0KXtyZXR1cm5cImlmKFwiK3QrXCIpcmV0dXJuIG51bGw7XCJ9LGZhPXtzdG9wOlwiJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1wiLHByZXZlbnQ6XCIkZXZlbnQucHJldmVudERlZmF1bHQoKTtcIixzZWxmOmxhKFwiJGV2ZW50LnRhcmdldCAhPT0gJGV2ZW50LmN1cnJlbnRUYXJnZXRcIiksY3RybDpsYShcIiEkZXZlbnQuY3RybEtleVwiKSxzaGlmdDpsYShcIiEkZXZlbnQuc2hpZnRLZXlcIiksYWx0OmxhKFwiISRldmVudC5hbHRLZXlcIiksbWV0YTpsYShcIiEkZXZlbnQubWV0YUtleVwiKSxsZWZ0OmxhKFwiJ2J1dHRvbicgaW4gJGV2ZW50ICYmICRldmVudC5idXR0b24gIT09IDBcIiksbWlkZGxlOmxhKFwiJ2J1dHRvbicgaW4gJGV2ZW50ICYmICRldmVudC5idXR0b24gIT09IDFcIikscmlnaHQ6bGEoXCInYnV0dG9uJyBpbiAkZXZlbnQgJiYgJGV2ZW50LmJ1dHRvbiAhPT0gMlwiKX0scGE9e29uOmZ1bmN0aW9uKHQsZSl7dC53cmFwTGlzdGVuZXJzPWZ1bmN0aW9uKHQpe3JldHVyblwiX2coXCIrdCtcIixcIitlLnZhbHVlK1wiKVwifX0sYmluZDpmdW5jdGlvbih0LGUpe3Qud3JhcERhdGE9ZnVuY3Rpb24obil7cmV0dXJuXCJfYihcIituK1wiLCdcIit0LnRhZytcIicsXCIrZS52YWx1ZStcIixcIisoZS5tb2RpZmllcnMmJmUubW9kaWZpZXJzLnByb3A/XCJ0cnVlXCI6XCJmYWxzZVwiKSsoZS5tb2RpZmllcnMmJmUubW9kaWZpZXJzLnN5bmM/XCIsdHJ1ZVwiOlwiXCIpK1wiKVwifX0sY2xvYWs6eX0sZGE9ZnVuY3Rpb24odCl7dGhpcy5vcHRpb25zPXQsdGhpcy53YXJuPXQud2Fybnx8c2UsdGhpcy50cmFuc2Zvcm1zPWNlKHQubW9kdWxlcyxcInRyYW5zZm9ybUNvZGVcIiksdGhpcy5kYXRhR2VuRm5zPWNlKHQubW9kdWxlcyxcImdlbkRhdGFcIiksdGhpcy5kaXJlY3RpdmVzPWgoaCh7fSxwYSksdC5kaXJlY3RpdmVzKTt2YXIgZT10LmlzUmVzZXJ2ZWRUYWd8fEJuO3RoaXMubWF5YmVDb21wb25lbnQ9ZnVuY3Rpb24odCl7cmV0dXJuIWUodC50YWcpfSx0aGlzLm9uY2VJZD0wLHRoaXMuc3RhdGljUmVuZGVyRm5zPVtdfSx2YT0obmV3IFJlZ0V4cChcIlxcXFxiXCIrXCJkbyxpZixmb3IsbGV0LG5ldyx0cnksdmFyLGNhc2UsZWxzZSx3aXRoLGF3YWl0LGJyZWFrLGNhdGNoLGNsYXNzLGNvbnN0LHN1cGVyLHRocm93LHdoaWxlLHlpZWxkLGRlbGV0ZSxleHBvcnQsaW1wb3J0LHJldHVybixzd2l0Y2gsZGVmYXVsdCxleHRlbmRzLGZpbmFsbHksY29udGludWUsZGVidWdnZXIsZnVuY3Rpb24sYXJndW1lbnRzXCIuc3BsaXQoXCIsXCIpLmpvaW4oXCJcXFxcYnxcXFxcYlwiKStcIlxcXFxiXCIpLG5ldyBSZWdFeHAoXCJcXFxcYlwiK1wiZGVsZXRlLHR5cGVvZix2b2lkXCIuc3BsaXQoXCIsXCIpLmpvaW4oXCJcXFxccypcXFxcKFteXFxcXCldKlxcXFwpfFxcXFxiXCIpK1wiXFxcXHMqXFxcXChbXlxcXFwpXSpcXFxcKVwiKSxmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gbihuLHIpe3ZhciBpPU9iamVjdC5jcmVhdGUoZSksbz1bXSxhPVtdO2lmKGkud2Fybj1mdW5jdGlvbih0LGUpeyhlP2E6bykucHVzaCh0KX0scil7ci5tb2R1bGVzJiYoaS5tb2R1bGVzPShlLm1vZHVsZXN8fFtdKS5jb25jYXQoci5tb2R1bGVzKSksci5kaXJlY3RpdmVzJiYoaS5kaXJlY3RpdmVzPWgoT2JqZWN0LmNyZWF0ZShlLmRpcmVjdGl2ZXN8fG51bGwpLHIuZGlyZWN0aXZlcykpO2Zvcih2YXIgcyBpbiByKVwibW9kdWxlc1wiIT09cyYmXCJkaXJlY3RpdmVzXCIhPT1zJiYoaVtzXT1yW3NdKX12YXIgYz10KG4saSk7cmV0dXJuIGMuZXJyb3JzPW8sYy50aXBzPWEsY31yZXR1cm57Y29tcGlsZTpuLGNvbXBpbGVUb0Z1bmN0aW9uczpmdW5jdGlvbih0KXt2YXIgZT1PYmplY3QuY3JlYXRlKG51bGwpO3JldHVybiBmdW5jdGlvbihuLHIsaSl7KHI9aCh7fSxyKSkud2FybixkZWxldGUgci53YXJuO3ZhciBvPXIuZGVsaW1pdGVycz9TdHJpbmcoci5kZWxpbWl0ZXJzKStuOm47aWYoZVtvXSlyZXR1cm4gZVtvXTt2YXIgYT10KG4scikscz17fSxjPVtdO3JldHVybiBzLnJlbmRlcj1UbihhLnJlbmRlcixjKSxzLnN0YXRpY1JlbmRlckZucz1hLnN0YXRpY1JlbmRlckZucy5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIFRuKHQsYyl9KSxlW29dPXN9fShuKX19fShmdW5jdGlvbih0LGUpe3ZhciBuPXNuKHQudHJpbSgpLGUpOyExIT09ZS5vcHRpbWl6ZSYmZnVuY3Rpb24odCxlKXt0JiYoUG89YWEoZS5zdGF0aWNLZXlzfHxcIlwiKSxGbz1lLmlzUmVzZXJ2ZWRUYWd8fEJuLHBuKHQpLGRuKHQsITEpKX0obixlKTt2YXIgcj15bihuLGUpO3JldHVybnthc3Q6bixyZW5kZXI6ci5yZW5kZXIsc3RhdGljUmVuZGVyRm5zOnIuc3RhdGljUmVuZGVyRm5zfX0pKG9hKS5jb21waWxlVG9GdW5jdGlvbnMpLGhhPSEhR24mJkVuKCExKSxtYT0hIUduJiZFbighMCkseWE9cChmdW5jdGlvbih0KXt2YXIgZT1adCh0KTtyZXR1cm4gZSYmZS5pbm5lckhUTUx9KSxnYT1SdC5wcm90b3R5cGUuJG1vdW50O3JldHVybiBSdC5wcm90b3R5cGUuJG1vdW50PWZ1bmN0aW9uKHQsZSl7aWYoKHQ9dCYmWnQodCkpPT09ZG9jdW1lbnQuYm9keXx8dD09PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudClyZXR1cm4gdGhpczt2YXIgbj10aGlzLiRvcHRpb25zO2lmKCFuLnJlbmRlcil7dmFyIHI9bi50ZW1wbGF0ZTtpZihyKWlmKFwic3RyaW5nXCI9PXR5cGVvZiByKVwiI1wiPT09ci5jaGFyQXQoMCkmJihyPXlhKHIpKTtlbHNle2lmKCFyLm5vZGVUeXBlKXJldHVybiB0aGlzO3I9ci5pbm5lckhUTUx9ZWxzZSB0JiYocj1mdW5jdGlvbih0KXtpZih0Lm91dGVySFRNTClyZXR1cm4gdC5vdXRlckhUTUw7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtyZXR1cm4gZS5hcHBlbmRDaGlsZCh0LmNsb25lTm9kZSghMCkpLGUuaW5uZXJIVE1MfSh0KSk7aWYocil7dmFyIGk9dmEocix7c2hvdWxkRGVjb2RlTmV3bGluZXM6aGEsc2hvdWxkRGVjb2RlTmV3bGluZXNGb3JIcmVmOm1hLGRlbGltaXRlcnM6bi5kZWxpbWl0ZXJzLGNvbW1lbnRzOm4uY29tbWVudHN9LHRoaXMpLG89aS5yZW5kZXIsYT1pLnN0YXRpY1JlbmRlckZucztuLnJlbmRlcj1vLG4uc3RhdGljUmVuZGVyRm5zPWF9fXJldHVybiBnYS5jYWxsKHRoaXMsdCxlKX0sUnQuY29tcGlsZT12YSxSdH0pOyIsInZhciBzY3JvbGxDb21wb25lbnQgPSAoZnVuY3Rpb24oKXtcblxuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9IHtcbiAgICAgICAgY3VycmVudCA6IDAsXG4gICAgICAgIHByZXZpb3VzIDogMCxcbiAgICAgICAgYmFja3VwIDogMFxuICAgIH07XG5cbiAgICAvLyBQUklWQVRFID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc2Nyb2xsQ2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjcm9sbFBvc2l0aW9uLnByZXZpb3VzID0gc2Nyb2xsUG9zaXRpb24uY3VycmVudDtcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24uY3VycmVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxZO1xuICAgIH07XG5cbiAgICAvKiBzY3JvbGwgdG8gKi9cbiAgICBzY3JvbGxNb3ZlVG8gPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKCAwLCBwb3NpdGlvbiApO1xuICAgIH07XG5cbiAgICAvKiBzYXZlIHNjcm9sbCBwb3NpdGlvbiAqL1xuICAgIHNjcm9sbFNhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNjcm9sbFBvc2l0aW9uLmJhY2t1cCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgd2luZG93LnBhZ2VZT2Zmc2V0IHx8IHdpbmRvdy5zY3JvbGxZO1xuICAgIH07XG5cbiAgICAvKiBzY3JvbGwgZW5hYmxlICovXG4gICAgc2Nyb2xsRW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgfTtcblxuICAgIC8qIHNjcm9sbCBkaXNhYmxlICovXG4gICAgc2Nyb2xsRGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgfTtcblxuICAgIC8qIHJldHVybiBkb3duIHx8IHVwICovXG4gICAgc2Nyb2xsRGlyZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKCBzY3JvbGxQb3NpdGlvbi5jdXJyZW50ID49IHNjcm9sbFBvc2l0aW9uLnByZXZpb3VzICkgPyAnZG93bicgOiAndXAnO1xuICAgIH07XG5cblxuICAgIC8vIElOSVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzY3JvbGxDaGVjaygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2Nyb2xsQ2hlY2soKTtcbiAgICB9KTtcblxuXG4gICAgLy8gUFVCTElDID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnQgOiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgICBpZih0eXBlb2YgdmFsdWUgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgICAgICAgIHNjcm9sbE1vdmVUbyh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNjcm9sbENoZWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjcm9sbFBvc2l0aW9uLmN1cnJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdGlvbiA6IGZ1bmN0aW9uKCl7IHJldHVybiBzY3JvbGxEaXJlY3Rpb24oKSB9LFxuICAgICAgICBlbmFibGUgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2Nyb2xsRW5hYmxlKCk7XG4gICAgICAgICAgICBzY3JvbGxNb3ZlVG8oc2Nyb2xsUG9zaXRpb24uYmFja3VwKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZSA6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzY3JvbGxTYXZlKCk7XG4gICAgICAgICAgICBzY3JvbGxEaXNhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG59KCkpOyIsInZhciBnb2FsQ29tcG9uZW50ID0gKGZ1bmN0aW9uKCl7XG5cbiAgICB2YXIgc2VydmljZXMgPSB7XG4gICAgICAgIHlhQ291bnRlcklEIDogZmFsc2UsXG4gICAgICAgIG1haWxSdUlEIDogZmFsc2UsXG4gICAgICAgIGdhVXNlZCA6IHRydWUsXG4gICAgICAgIGZicVVzZWQgOiB0cnVlXG4gICAgfTtcblxuICAgIC8vIFBSSVZBVEUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBnb2FsRG9uZSA9IGZ1bmN0aW9uIChnb2FsTmFtZSkge1xuICAgICAgICBpZihzZXJ2aWNlcy55YUNvdW50ZXJJRCAhPT0nJyAmJiAgdHlwZW9mIHdpbmRvd1sneWFDb3VudGVyJyArIHNlcnZpY2VzLnlhQ291bnRlcklEXSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgICB3aW5kb3dbJ3lhQ291bnRlcicgKyBzZXJ2aWNlcy55YUNvdW50ZXJJRF0ucmVhY2hHb2FsKGdvYWxOYW1lLCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc2VydmljZXMubWFpbFJ1SUQgIT09JycgJiYgdHlwZW9mIF90bXIgIT09IFwidW5kZWZpbmVkXCIpe1xuICAgICAgICAgICAgX3Rtci5wdXNoKHsgaWQ6IHNlcnZpY2VzLm1haWxSdUlELCB0eXBlOiAncmVhY2hHb2FsJywgZ29hbDogZ29hbE5hbWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc2VydmljZXMuZ2FVc2VkICYmIHR5cGVvZiBnYSAhPT0gXCJ1bmRlZmluZWRcIil7XG4gICAgICAgICAgICBnYSgnc2VuZCcsICdldmVudCcsICdidXR0b24nLCBnb2FsTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoc2VydmljZXMuZmJxVXNlZCAmJiB0eXBlb2YgZmJxICE9PSBcInVuZGVmaW5lZFwiKXtcbiAgICAgICAgICAgIGZicSgndHJhY2snLCBnb2FsTmFtZSwgeyB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkZWJ1ZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coICd5YUNvdW50ZXJJRDogJyArICh0eXBlb2Ygd2luZG93Wyd5YUNvdW50ZXInICsgc2VydmljZXMueWFDb3VudGVySURdICE9PSBcInVuZGVmaW5lZFwiKSApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coICdnYVVzZWQ6ICcgKyAodHlwZW9mIGdhICE9PSBcInVuZGVmaW5lZFwiKSApO1xuICAgICAgICAgICAgY29uc29sZS5sb2coICdmYnFVc2VkOiAnICsgKHR5cGVvZiBmYnEgIT09IFwidW5kZWZpbmVkXCIpICk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyggJ21haWxSdUlEOiAnICsgKHR5cGVvZiBfdG1yICE9PSBcInVuZGVmaW5lZFwiKSApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIFBVQkxJQyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICByZXR1cm4ge1xuICAgICAgICByZWFjaCA6IGZ1bmN0aW9uKGdvYWxOYW1lLCBldmVudCl7XG4gICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8ICcnO1xuICAgICAgICAgICAgaWYoIGV2ZW50ID09PSBcIlwiKXsgZ29hbERvbmUoZ29hbE5hbWUpOyB9XG4gICAgICAgICAgICBpZiggZXZlbnQgPT09IFwib25sb2FkXCIpeyB3aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7IGdvYWxEb25lKGdvYWxOYW1lKTsgfSB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlYnVnIDogZnVuY3Rpb24oKXsgZGVidWcoKTsgfVxuICAgIH1cbn0oKSk7XG5cbiIsbnVsbCwiZnVuY3Rpb24gTWVkaWFFdmVudExpc3RlbmVyKHF1ZXJ5T3B0aW9uKXtcbiAgICB2YXIgX3NlbGYgPSB0aGlzO1xuICAgIF9zZWxmLnJlc29sdXRpb25DdXJyID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgX3NlbGYucmVzb2x1dGlvbkxhc3QgPSAwO1xuICAgIC8vIGRlZmF1bHQgZGV2aWNlIGJyZWFrcG9pbnRzINC40LvQuCDQuNC3INC+0L/RhtC40Lkg0L/RgNC4INC40L3QuNGG0LjQsNC70LjQt9Cw0YbQuNC4XG4gICAgX3NlbGYucXVlcmllcyA9ICh0eXBlb2YgcXVlcnlPcHRpb24gIT09IHVuZGVmaW5lZCkgPyBxdWVyeU9wdGlvbiA6W1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnbW9iaWxlJyxcbiAgICAgICAgICAgIG1pblJlc29sdXRpb246IDAsXG4gICAgICAgICAgICBtYXhSZXNvbHV0aW9uOiA0MTksXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBpc0VhY2g6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdsYW5kc2NhcGUnLFxuICAgICAgICAgICAgbWluUmVzb2x1dGlvbjogNDIwLFxuICAgICAgICAgICAgbWF4UmVzb2x1dGlvbjogMTAyMyxcbiAgICAgICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgIGlzRWFjaDogZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFjazogW11cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2Rlc2t0b3AnLFxuICAgICAgICAgICAgbWluUmVzb2x1dGlvbjogMTAyNCxcbiAgICAgICAgICAgIG1heFJlc29sdXRpb246IDE5MjAsXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBpc0VhY2g6IGZhbHNlLFxuICAgICAgICAgICAgY2FsbGJhY2s6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdlYWNoLXJlc2l6ZScsXG4gICAgICAgICAgICBtaW5SZXNvbHV0aW9uOiAwLFxuICAgICAgICAgICAgbWF4UmVzb2x1dGlvbjogMTkyMDAsXG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICBpc0VhY2g6IHRydWUsXG4gICAgICAgICAgICBjYWxsYmFjazogW11cbiAgICAgICAgfVxuICAgIF07XG5cbiAgICAvLyDQtNC+0LHQsNCy0LvQtdC90LjQtSDRhNGD0L3QutGG0LjQuSDQvdCwINGA0LDQt9C90YvQtSDRgNCw0LfRgNC10YjQtdC90LjRj1xuICAgIF9zZWxmLmFkZFF1ZXJ5QWN0aW9uID0gZnVuY3Rpb24ocXVlcnlOYW1lLCBmdW5jKXtcbiAgICAgICAgX3NlbGYucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgICAgaWYoIGl0ZW0ubmFtZSA9PT0gcXVlcnlOYW1lKXtcbiAgICAgICAgICAgICAgICBpdGVtLmNhbGxiYWNrLnB1c2goZnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyDQstGL0L/QvtC70L3Rj9C10Lwg0YHQutGA0LjQv9GC0Ysg0LTQu9GPINC/0LXRgNC10YXQvtC00LAg0L3QsCDQutC+0L3QutGA0LXRgtC90L7QtSDRgNCw0LfRgNGI0LXQvdC10LjQtVxuICAgIF9zZWxmLmRvUXVlcnlBY3Rpb24gPSBmdW5jdGlvbihxdWVyeU5hbWUpe1xuICAgICAgICBfc2VsZi5xdWVyaWVzLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgICAgICAvLyDQuNGJ0LXQvCDQvdGD0LbQvdC+0LUg0YDQsNC30YDQtdGI0LXQvdC40LVcbiAgICAgICAgICAgIGlmKCBpdGVtLm5hbWUgPT09IHF1ZXJ5TmFtZSl7XG4gICAgICAgICAgICAgICAgLy8g0LfQsNC/0YPRgdC60LDQtdC8INCy0YHQtSDQutC+0LvQsdGN0LrQuFxuICAgICAgICAgICAgICAgIGl0ZW0uY2FsbGJhY2suZm9yRWFjaChmdW5jdGlvbihpdGVtKXsgaXRlbSgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICB9O1xuXG4gICAgLy8g0L/RgNC+0LLQtdGA0LrQsCDQsNC60YLQuNCy0L3Ri9GFINC80LXQtNC40LAg0LfQsNC/0YDQvtGB0L7QslxuICAgIF9zZWxmLnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8g0L7Qv9GA0LXQtNC10LvRj9C10Lwg0YLQtdC60YPRidC10LUg0YDQsNC30YDQtdGI0LXQvdC40LVcbiAgICAgICAgX3NlbGYucmVzb2x1dGlvbkN1cnIgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgLy8g0L/RgNC+0YXQvtC00LjQvCDQv9C+INCy0YHQtdC8INGA0LDQt9GA0LXRiNC10L3QuNGP0LxcbiAgICAgICAgX3NlbGYucXVlcmllcy5mb3JFYWNoKGZ1bmN0aW9uKHNjcmVlbil7XG4gICAgICAgICAgICBpZiggc2NyZWVuLm1pblJlc29sdXRpb24gPD0gX3NlbGYucmVzb2x1dGlvbkN1cnIgJiYgX3NlbGYucmVzb2x1dGlvbkN1cnIgPD0gc2NyZWVuLm1heFJlc29sdXRpb24gKXtcblxuICAgICAgICAgICAgICAgIC8vINCy0YvQv9C+0LvQvdGP0LXQvCDQv9C+0LTQstC10YjQtdC90YvQtSDRgdC60YDQuNC/0YLRiywg0LXRgdC70Lgg0L3QsCDRjdGC0L7QvCDRgNCw0LfRgNC10YjQtdC90LjQtSDQuNGFINC90YPQttC90L4g0LLRi9C/0L7Qu9C90Y/RgtGMINC/0YDQuCDQutCw0LbQtNC+0Lwg0YDQtdGB0LDQudC30LVcbiAgICAgICAgICAgICAgICBpZihzY3JlZW4uaXNFYWNoKXsgX3NlbGYuZG9RdWVyeUFjdGlvbihzY3JlZW4ubmFtZSk7IH1cblxuICAgICAgICAgICAgICAgIC8vINC10YHQu9C4INGB0LzQtdC90LjQu9C+0YHRjCDQvdCwINCw0LrRgtC40LLQvdC+0LUsINGC0L4g0LLRi9C/0L7Qu9C90Y/QtdC8INC/0L7QtNCy0LXRiNC10L3Ri9C1INGB0LrRgNC40L/RgtGLXG4gICAgICAgICAgICAgICAgaWYoIXNjcmVlbi5pc0FjdGl2ZSAmJiAhc2NyZWVuLmlzRWFjaCl7IF9zZWxmLmRvUXVlcnlBY3Rpb24oc2NyZWVuLm5hbWUpOyB9XG4gICAgICAgICAgICAgICAgc2NyZWVuLmlzQWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDQuNC90LDRh9C1INC/0LXRgNC10LrQu9GO0YfQsNC10Lwg0YTQu9Cw0LMsINC10YHQu9C4INGA0LDQt9GA0LXRiNC10L3QuNC1INC90LXQsNC60YLQuNCy0L3QvlxuICAgICAgICAgICAgICAgIHNjcmVlbi5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g0LfQsNC/0L7QvNC40L3QsNC10Lwg0YDQsNC30YDQtdGI0LXQvdC40LVcbiAgICAgICAgX3NlbGYucmVzb2x1dGlvbkxhc3QgPSAgX3NlbGYucmVzb2x1dGlvbkN1cnI7XG5cbiAgICB9O1xuXG4gICAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y9cbiAgICBfc2VsZi5pbml0ID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy8g0LfQsNC/0YPRgdC60LDQtdC8INC/0YDQvtGF0L7QtCDQv9C+INCy0YHQtdC8INGA0LDQt9GA0LXRiNC10L3QuNGP0Lwg0LTQu9GPINC/0LXRgNCy0L7QuSDQt9Cw0LPRgNGD0LfQutC4XG4gICAgICAgIF9zZWxmLnJlc2l6ZSgpO1xuICAgICAgICAvLyDQuCDQstC10YjQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40Log0L3QsCDQstGB0LUg0L/QvtGB0LvQtdC00YPRidGO0LjQtSDRgNC10YHQsNC50LfRi1xuICAgICAgICB3aW5kb3cub25yZXNpemUgPSAgZnVuY3Rpb24gcmVzaXplKCl7XG4gICAgICAgICAgICBfc2VsZi5yZXNpemUoKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgIF9zZWxmLmRlYnVnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyggX3NlbGYucXVlcmllcyApO1xuICAgIH07XG5cbn1cblxuXG5cbiIsIihmdW5jdGlvbiggJCApe1xuXG4gICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAvLyDQtNC10YTQvtC70YLQvdGL0LUg0L7Qv9GG0LjQuFxuICAgICAgICBtaW5SZXNvbHV0aW9uOiAxMDAwLFxuICAgICAgICBleHRyYVdpZHRoOiA2MVxuICAgIH07XG4gICAgdmFyIHN0YXRlcyA9e1xuICAgICAgICBoYXNFeHRyYTogZmFsc2VcbiAgICB9O1xuXG4gICAgdmFyIG1ldGhvZHMgPSB7XG5cbiAgICAgICAgaW5pdCA6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG4gICAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgdmFyIG1lbnVSb290ID0gJCh0aGlzKS5maW5kKCd1bCcpLm5vdCgndWwgdWwnKTtcbiAgICAgICAgICAgICAgICB2YXIgbWVudUl0ZW1zID0gbWVudVJvb3QuZmluZCgnbGknKS5ub3QoJ2xpIGxpJyk7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lcldpZHRoID0gbWVudVJvb3Qud2lkdGgoKTtcblxuICAgICAgICAgICAgICAgIG1ldGhvZHMuYWRkRXh0cmFCYXIobWVudVJvb3QsIG1lbnVJdGVtcyk7XG5cbiAgICAgICAgICAgICAgICBjb250YWluZXJXaWR0aCA9IG1lbnVSb290LndpZHRoKCk7XG4gICAgICAgICAgICAgICAgbWV0aG9kcy5oaWRlSXRlbShtZW51Um9vdCwgbWVudUl0ZW1zLCBjb250YWluZXJXaWR0aCwgb3B0aW9ucy5leHRyYVdpZHRoKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb250YWluZXJXaWR0aCA9IG1lbnVSb290LndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoID0gbWVudVJvb3Qud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPiBvcHRpb25zLm1pblJlc29sdXRpb24pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kcy5oaWRlSXRlbShtZW51Um9vdCwgbWVudUl0ZW1zLCBjb250YWluZXJXaWR0aCwgb3B0aW9ucy5leHRyYVdpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNpemUgOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBhZGRFeHRyYUJhcjogZnVuY3Rpb24gKG1lbnVSb290LCBtZW51SXRlbXMpIHtcbiAgICAgICAgICAgIHZhciBleHRyYWJhckNvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBtZW51SXRlbXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGV4dHJhYmFyQ29udGVudCA9IGV4dHJhYmFyQ29udGVudCArIG1lbnVJdGVtcy5lcShpKS5nZXQoMCkub3V0ZXJIVE1MO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZW51Um9vdC5hcHBlbmQoXG4gICAgICAgICAgICAgICAgJzxsaSBjbGFzcz1cIm1lbnUtdG9wX19pdGVtIC1leHRyYUJhciAtaGFzLWRyb3AtZG93biAtZHJvcC1kb3duLWludmVyc2VcIj4nICtcbiAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cIm1lbnUtdG9wX19pdGVtLW5hbWVcIj4uLi48L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1lbnUtdG9wX19kcm9wLWRvd25cIj4nICtcbiAgICAgICAgICAgICAgICAnPHVsIGNsYXNzPVwibWVudS10b3BfX2xpc3RcIj4nICtcbiAgICAgICAgICAgICAgICBleHRyYWJhckNvbnRlbnQgK1xuICAgICAgICAgICAgICAgICc8L3VsPicgK1xuICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAnPC9saT4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWVudVJvb3QuZmluZCgnLi1leHRyYUJhciAubWVudS10b3BfX2Ryb3AtZG93biAubWVudS10b3BfX2Ryb3AtZG93bicpLnJlbW92ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vINGD0LTQsNC70Y/QtdGCINC00L7Qv9C+0LvQvdC40YLQtdC70YzQvdGD0Y4g0LLRi9C/0LDQtNCw0YjQutGDXG4gICAgICAgIHJlbW92ZUV4dHJhQmFyIDogZnVuY3Rpb24gKG1lbnVSb290KSB7XG4gICAgICAgICAgICBtZW51Um9vdC5maW5kKCcuLWV4dHJhQmFyJykucmVtb3ZlKCk7XG4gICAgICAgIH0sXG5cblxuICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10YIg0Y3Qu9C10LzQtdC90YLRiywg0LXRgdC70Lgg0Y3Qu9C10LzQtdC90YLRgyDQvdC1INGF0LLQsNGC0LDQtdGCINC80LXRgdGC0LAsINGC0L4g0YHQutGA0YvQstCw0LXRgiDQtdCz0L5cbiAgICAgICAgaGlkZUl0ZW0gOiBmdW5jdGlvbiAobWVudVJvb3QsIG1lbnVJdGVtcywgY29udGFpbmVyV2lkdGgsIGV4dHJhV2lkdGgpIHtcbiAgICAgICAgICAgIC8vINC/0L7QtNCz0L7RgtCw0LLQu9C40LLQsNC10Lwg0LLRi9C/0LDQtNCw0YjQutGDINC00YPQsdC70ZHRgNCwXG4gICAgICAgICAgICB2YXIgZHVibGVyID0gbWVudVJvb3QuZmluZCgnLi1leHRyYUJhcicpO1xuICAgICAgICAgICAgdmFyIGR1Ymxlckxpc3QgPSBkdWJsZXIuZmluZCgnLm1lbnUtdG9wX19pdGVtJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkdWJsZXJMaXN0KTtcbiAgICAgICAgICAgIGR1Ymxlci5yZW1vdmVDbGFzcygnLWhpZGRlbicpO1xuICAgICAgICAgICAgbWVudUl0ZW1zLnJlbW92ZUNsYXNzKCctaGlkZGVuJyk7XG4gICAgICAgICAgICB2YXIgZGVidWdMb2cgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvbnRhaW5lcldpZHRoICcgKyBjb250YWluZXJXaWR0aCk7XG5cbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgICAgICAgdmFyIHN1bVdpZHRoID0gMDtcbiAgICAgICAgICAgIHN0YXRlcy5oYXNFeHRyYSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG1lbnVJdGVtcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdmFyIGVsV2lkdGggPSBtZW51SXRlbXMuZXEoaSkud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBpZihkZWJ1Z0xvZyl7Y29uc29sZS5sb2cobWVudUl0ZW1zLmVxKGkpLmNoaWxkcmVuKCdhJykuaHRtbCgpLCBlbFdpZHRoLCBzdW1XaWR0aCArIGVsV2lkdGgpO31cbiAgICAgICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0LLQu9Cw0LfQuNGCINC70Lgg0YLQtdC60YPRidC40Lkg0L/Rg9C90LrRglxuICAgICAgICAgICAgICAgIGlmKHN1bVdpZHRoICsgZWxXaWR0aCA8PSB3aWR0aCl7XG4gICAgICAgICAgICAgICAgICAgIC8vINC00LA6XG4gICAgICAgICAgICAgICAgICAgIC8vINC/0YDQvtCy0LXRgNGP0LXQvCDRjdGC0L4g0L/QvtGB0LvQtdC00L3QuNC5INC/0YPQvdC60YJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGVidWdMb2cpe2NvbnNvbGUubG9nKCfQv9GA0L7QstC10YDRj9C10Lwg0LLQu9Cw0LfQuNGCINC70Lgg0YLQtdC60YPRidC40Lkg0L/Rg9C90LrRgiAtICDQtNCwJyk7fVxuICAgICAgICAgICAgICAgICAgICBpZihpID09PSBtZW51SXRlbXMubGVuZ3RoLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LTQsDog0YPQtNCw0LvRj9C10Lwg0LzQvdC+0LPQvtGC0L7Rh9C40LVcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1Ymxlci5yZW1vdmVDbGFzcygnLWhpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZHVibGVyTGlzdC5lcShpKS5hZGRDbGFzcygnLWhpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGVidWdMb2cpe2NvbnNvbGUubG9nKCfQv9GA0L7QstC10YDRj9C10Lwg0Y3RgtC+INC/0L7RgdC70LXQtNC90LjQuSDQv9GD0L3QutGCIC0gINC00LAnKTt9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQvdC10YI6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQv9GA0L7QstC10YDRj9C10Lwg0L7RgdGC0LDQu9C+0YHRjCDQu9C4INC80LXRgdGC0L4g0LTQu9GPINC80L3QvtCz0L7RgtC+0YfQuNGPXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkZWJ1Z0xvZyl7Y29uc29sZS5sb2coJ9C/0YDQvtCy0LXRgNGP0LXQvCDRjdGC0L4g0L/QvtGB0LvQtdC00L3QuNC5INC/0YPQvdC60YIgLSAg0L3QtdGCJyk7fVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc3VtV2lkdGggKyBlbFdpZHRoICsgZXh0cmFXaWR0aCA8PSB3aWR0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LTQsDog0L/QtdGA0LXRhdC+0LTQuNC8INC6INGB0LvQtdC00YPRjtGJ0LXQvNGDINC/0YPQvdC60YLRg1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGRlYnVnTG9nKXtjb25zb2xlLmxvZygn0L/RgNC+0LLQtdGA0Y/QtdC8INC+0YHRgtCw0LvQvtGB0Ywg0LvQuCDQvNC10YHRgtC+INC00LvRjyDQvNC90L7Qs9C+0YLQvtGH0LjRjyAtICDQtNCwJyk7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1Ymxlckxpc3QuZXEoaSkuYWRkQ2xhc3MoJy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0L3QtdGCOiDQv9C+0LrQsNC30YvQstCw0LXQvCDQvNC90L7Qs9C+0YLQvtGH0LjQtSDQstC80LXRgdGC0L4g0Y3RgtC+0LPQviDQv9GD0L3QutGC0LBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbXMuZXEoaSkuYWRkQ2xhc3MoJy1oaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihkZWJ1Z0xvZyl7Y29uc29sZS5sb2coJ9C/0YDQvtCy0LXRgNGP0LXQvCDQvtGB0YLQsNC70L7RgdGMINC70Lgg0LzQtdGB0YLQviDQtNC70Y8g0LzQvdC+0LPQvtGC0L7Rh9C40Y8gLSAg0L3QtdGCJyk7fVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDQvdC10YI6INC/0L7QutCw0LfRi9Cy0LDQtdC8INC80L3QvtCz0L7RgtC+0YfQuNC1INCy0LzQtdGB0YLQviDRjdGC0L7Qs9C+INC/0YPQvdC60YLQsFxuICAgICAgICAgICAgICAgICAgICBpZihkZWJ1Z0xvZyl7Y29uc29sZS5sb2coJ9C/0YDQvtCy0LXRgNGP0LXQvCDQstC70LDQt9C40YIg0LvQuCDRgtC10LrRg9GJ0LjQuSDQv9GD0L3QutGCIC0gINC90LXRgicpO31cbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1zLmVxKGkpLmFkZENsYXNzKCctaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlcy5oYXNFeHRyYSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3VtV2lkdGggPSBzdW1XaWR0aCArIGVsV2lkdGg7XG4gICAgICAgICAgICAgICAgaWYoZGVidWdMb2cpe2NvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7fVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighc3RhdGVzLmhhc0V4dHJhKXtcbiAgICAgICAgICAgICAgICBkdWJsZXIuYWRkQ2xhc3MoJy1oaWRkZW4nKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLm1lbnVTbWFydCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXG4gICAgICAgIGlmICggbWV0aG9kc1ttZXRob2RdICkge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHNbIG1ldGhvZCBdLmFwcGx5KCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICkpO1xuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZCApIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJC5lcnJvciggJ9Cc0LXRgtC+0LQgJyArICBtZXRob2QgKyAnINC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LIgalF1ZXJ5Lm1lbnVTbWFydCcgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufSkoIGpRdWVyeSApOyIsImZ1bmN0aW9uIGluaXRNZW51TW9iaWxlKGlkLCBkYXRhKSB7XG5cbiAgICB2YXIgbWVudU1vYmlsZSA9IG5ldyBWdWUoe1xuICAgICAgICBlbDogJyNtZW51LW1vYmlsZS0nICsgaWQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGVsOiAnI21lbnUtbW9iaWxlLScgKyBpZCxcbiAgICAgICAgICAgIHRyZWU6IGRhdGEsXG4gICAgICAgICAgICBhY3RpdmVOb2RlOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGRhdGFbMF0uaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YVswXS5uYW1lLFxuICAgICAgICAgICAgICAgIHBhcmVudElkOiBkYXRhWzBdLnBhcmVudElkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgdGVtcGxhdGU6XG4gICAgICAgICc8dHJhbnNpdGlvbiBuYW1lPVwibWVudS1tb2JpbGUtdG9nZ2xlXCIgbW9kZT1cIm91dC1pblwiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZW51LW1vYmlsZVwiIGlkPVwibWVudS1tb2JpbGUtJyArIGlkICsgJ1wiIHYtaWY9XCJzaG93XCI+JyArXG5cbiAgICAgICAgICAgICAgICAvLyBtZW51LW1vYmlsZS1oZWFkZXIgYmVnaW5cbiAgICAgICAgICAgICAgICAnPHRyYW5zaXRpb24gbmFtZT1cIm1lbnUtbW9iaWxlLWhlYWRlci10b2dnbGVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtZW51LW1vYmlsZV9faGVhZGVyXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1lbnUtbW9iaWxlX190aXRsZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwibWVudS1tb2JpbGVfX3RpdGxlLWJ0blwiIDpkYXRhLW5vZGU9XCJhY3RpdmVOb2RlLmlkXCIgdi1vbjpjbGljay5wcmV2ZW50PVwiYWN0aXZlUGFyZW50Tm9kZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJtZW51LW1vYmlsZV9faWNvbi1hcnJvdy1yaWdodFwiIHYtaWY9XCJhY3RpdmVOb2RlLmlkXCI+PC9pPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAne3sgYWN0aXZlTm9kZS5uYW1lIH19JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJtZW51LW1vYmlsZV9fc3dpdGNoZXItYnRuXCIgdi1vbjpjbGljay5wcmV2ZW50PVwiY2xvc2VNZW51XCI+PHNwYW4+PC9zcGFuPjwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJzwvdHJhbnNpdGlvbj4nICtcblxuICAgICAgICAgICAgICAgIC8vIG1lbnUtbW9iaWxlX19saXN0IGJlZ2luXG4gICAgICAgICAgICAgICAgJzx1bCBjbGFzcz1cIm1lbnUtbW9iaWxlX19saXN0XCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8dGVtcGxhdGUgIHYtZm9yPVwiaXRlbSBpbiB0cmVlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bWVudS1tb2JpbGUtaXRlbSB2LWlmPVwiaXRlbS5wYXJlbnRJZCA9PT0gYWN0aXZlTm9kZS5pZFwiIHYtYmluZDppdGVtPVwiaXRlbVwiIDprZXk9XCJpdGVtLmlkXCIgPjwvbWVudS1tb2JpbGUtaXRlbT4nICtcbiAgICAgICAgICAgICAgICAgICAgJzwvdGVtcGxhdGU+JyArXG4gICAgICAgICAgICAgICAgJzwvdWw+JyArXG5cbiAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgJzwvdHJhbnNpdGlvbj4nLFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBnZXROb2RlUGFyYW06IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgICAgICByZXN1bHQuaWQgPSBpbnB1dC5pZDtcbiAgICAgICAgICAgICAgICByZXN1bHQubmFtZSA9IGlucHV0Lm5hbWU7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBhcmVudElkID0gaW5wdXQucGFyZW50SWQ7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbG9zZU1lbnU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyAkKCB0aGlzLmVsKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVOb2RlID0gbWVudU1vYmlsZS5nZXROb2RlUGFyYW0oIHRoaXMudHJlZVswXSApO1xuICAgICAgICAgICAgICAgIGFwcC5zY3JvbGwuZW5hYmxlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZlUGFyZW50Tm9kZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXMuYWN0aXZlTm9kZS5wYXJlbnRJZCAhPT0gbnVsbCApe1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50SWQgPSB0aGlzLmFjdGl2ZU5vZGUucGFyZW50SWQ7XG4gICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBtZW51TW9iaWxlLnRyZWUubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lbnVNb2JpbGUudHJlZVtpXS5pZCA9PT0gcGFyZW50SWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZW51TW9iaWxlLmFjdGl2ZU5vZGUgPSBtZW51TW9iaWxlLmdldE5vZGVQYXJhbSggbWVudU1vYmlsZS50cmVlW2ldICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZW51TW9iaWxlLmNsb3NlTWVudSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ21lbnUtbW9iaWxlLWl0ZW0nOiB7XG4gICAgICAgICAgICAgICAgcHJvcHM6IFsnaXRlbScsICdhY3RpdmVOb2RlJ10sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6XG4gICAgICAgICAgICAgICAgJzx0cmFuc2l0aW9uIG5hbWU9XCJtZW51LW1vYmlsZS1pdGVtLXNob3dcIiBtb2RlPVwib3V0LWluXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICc8bGkgY2xhc3M9XCJtZW51LW1vYmlsZV9faXRlbVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGNsYXNzPVwibWVudS1tb2JpbGVfX2l0ZW0tbmFtZVwiIHYtYmluZDpocmVmPVwiaXRlbS5ocmVmXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3t7IGl0ZW0ubmFtZSB9fScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vINC40LrQvtC90LrQsCDRgdC+INGB0YLRgNC10LvQutC+0LksINC00LvRjyDRjdC70LXQvNC10L3RgtC+0LIg0LHQtdC3INC/0L7RgtC+0LzQutC+0LJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIHYtaWY9XCIhaXRlbS5oYXNDaGlsZFwiIGNsYXNzPVwibWVudS1tb2JpbGVfX2l0ZW0tYnRuXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGkgY2xhc3M9XCJtZW51LW1vYmlsZV9faWNvbi1hcnJvdy1sZWZ0XCI+PC9pPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9zcGFuPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2E+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LTQu9GPINGN0LvQtdC80LXQvdGC0L7QsiDRgSDQv9C+0LTQutCw0YLQtdCz0L7RgNC40Y/QvNC4INC00L7QsdCw0LLQu9GP0LXQvCDQutC90L7Qv9C+0YfQutGDINC/0L7QutCw0LfRi9Cy0LDRjtGJ0YPRjiDRjdGC0Lgg0L/QvtC00YDQsNC30LTQtdC70YtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiB2LWlmPVwiaXRlbS5oYXNDaGlsZFwiIGNsYXNzPVwibWVudS1tb2JpbGVfX2l0ZW0tYnRuIGhhc0NoaWxkXCIgIHYtb246Y2xpY2sucHJldmVudD1cInNob3dDaGlsZFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aSBjbGFzcz1cIm1lbnUtbW9iaWxlX19pY29uLW1vcmVcIj48L2k+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgICAgICc8L2xpPicgK1xuICAgICAgICAgICAgICAgICc8L3RyYW5zaXRpb24+JyxcbiAgICAgICAgICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3dDaGlsZDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51TW9iaWxlLmFjdGl2ZU5vZGUgPSBtZW51TW9iaWxlLmdldE5vZGVQYXJhbSggdGhpcy5fcHJvcHMuaXRlbSApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWVudU1vYmlsZTtcbn1cblxuXG4iLCJmdW5jdGlvbiBNZW51TW9iaWxlKG9wdGlvbnMpe1xuXG4gICAgLy8g0JTQtdGA0LXQstC+INC80LXQvdGOLCDQstC60LvRjtGH0LDQtdGCINCyINGB0LXQsdGPINGC0L7Qu9GM0LrQviDRg9C30LvRiywg0LvQuNGB0YLRjNGPINC40LPQvdC+0YDQuNGA0YPRjtGC0YHRj1xuXG5cbiAgICB2YXIgdGV4dCA9IHtcbiAgICAgICAgcm9vdFRpdGxlOiAn0JzQtdC90Y4nXG4gICAgfTtcblxuICAgIHZhciBzZWxlY3RvcnMgPSB7XG4gICAgICAgIGNvbnRhaW5lcjogJy5qcy1tZW51LW1vYmlsZScsXG4gICAgICAgIG5vZGVSb290OiAnW2RhdGEtbWVudS1tb2JpbGUtLXJvb3RdJyxcbiAgICAgICAgbm9kZUxpbms6ICdbZGF0YS1tZW51LW1vYmlsZS0taXRlbS1uYW1lXScsXG4gICAgICAgIG5vZGU6ICdkYXRhLW1lbnUtbW9iaWxlLS1oYXMtZHJvcC1kb3duJyxcbiAgICAgICAgYnRuVG9nZ2xlOiAnW2RhdGEtbWVudS1tb2JpbGUtLXN3aXRjaGVyLWJ0bl0nXG4gICAgfTtcblxuICAgIHZhciBpZCA9IE1hdGgucm91bmQoIE1hdGgucmFuZG9tKCkqMTAwMDApO1xuXG5cbiAgICAvLyDQv9C10YDQtdC+0L/RgNC10LTQtdC70Y/QtdC8INC/0LXRgNC10LzQtdC90L3Ri9C1INC10YHQu9C4INC90LDQtNC+ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vXG5cbiAgICAvLyDQv9C10YDQtdC+0L/RgNC10LTQtdC70Y/QtdC8INGB0LLQvtC50YHRgtCy0LAsINC10YHQu9C4INGN0YLQviDQvdC10L7QsdGF0L7QtNC40LzQvlxuICAgIGZ1bmN0aW9uIHNldE9wdGlvbnMoY29udGFpbmVyKXtcbiAgICAgICAgLy8gdGV4dCA9ICQuZXh0ZW5kKHt9LCBzZWxlY3RvcnMsIG9wdGlvbnMudGV4dCk7XG4gICAgICAgIC8vIHNlbGVjdG9ycyA9ICQuZXh0ZW5kKHt9LCBzZWxlY3RvcnMsIG9wdGlvbnMuc2VsZWN0b3JzKTtcbiAgICAgICAgdGV4dC5yb290VGl0bGUgPSAkKGNvbnRhaW5lcikuZmluZChzZWxlY3RvcnMuYnRuVG9nZ2xlKS50ZXh0KCk7XG4gICAgfVxuXG4gICAgLy8g0YDQsNCx0L7RgtCwINGBINC00LXRgNC10LLQvtC8ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09L1xuXG4gICAgZnVuY3Rpb24gYnVpbGRNZW51KG5vZGVSb290KXtcbiAgICAgICAgdmFyIHRyZWUgPSBbXTtcbiAgICAgICAgdmFyIF9pZCA9IDA7XG4gICAgICAgIC8vINC30LDQtNCw0ZHQvCDQutC+0YDQtdC90YxcbiAgICAgICAgdHJlZS5wdXNoKHsgaWQ6IF9pZCwgbmFtZTogdGV4dC5yb290VGl0bGUsIGVsZW1lbnRMaW5rOiBub2RlUm9vdCwgaGFzQ2hpbGQ6IHRydWUsIHBhcmVudElkOiBudWxsIH0pO1xuICAgICAgICAvLyDRgNC10LrRg9GA0YHQuNCy0L3QviDRgdGC0YDQvtC40Lwg0L7RgdGC0LDQu9GM0L3QvtC1INC00LXRgNC10LLQvlxuICAgICAgICBmdW5jdGlvbiBidWlsZChwYXJlbnROb2RlKXtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKHBhcmVudE5vZGUuZWxlbWVudExpbmspO1xuICAgICAgICAgICAgdmFyIGVsID0gcGFyZW50LmZpbmQoJ2xpJykubm90KCBwYXJlbnQuZmluZCgnbGkgbGknKSk7XG4gICAgICAgICAgICBlbC5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfaWQrKztcbiAgICAgICAgICAgICAgICB2YXIgY3Vyck5vZGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBfaWQsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICQodGhpcykuY2hpbGRyZW4oc2VsZWN0b3JzLm5vZGVMaW5rKS50ZXh0KCksXG4gICAgICAgICAgICAgICAgICAgIGhyZWY6ICQodGhpcykuY2hpbGRyZW4oc2VsZWN0b3JzLm5vZGVMaW5rKS5hdHRyKCdocmVmJyksXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRMaW5rOiAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBoYXNDaGlsZDogICQodGhpcykuYXR0cihzZWxlY3RvcnMubm9kZSkgIT0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50SWQ6IHBhcmVudE5vZGUuaWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHRyZWUucHVzaChjdXJyTm9kZSk7XG4gICAgICAgICAgICAgICAgaWYoY3Vyck5vZGUuaGFzQ2hpbGQpeyAgYnVpbGQoY3Vyck5vZGUpIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGJ1aWxkKCBnZXROb2RlUm9vdCh0cmVlKSApO1xuXG4gICAgICAgIHJldHVybiB0cmVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbmRlck1lbnUodHJlZSl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRyZWUpO1xuICAgICAgICAkKCdib2R5JykuYXBwZW5kKCcnICtcbiAgICAgICAgICAgICc8bWVudS1tb2JpbGUgY2xhc3M9XCJtZW51LW1vYmlsZVwiIGlkPVwibWVudS1tb2JpbGUtJyArIGlkICsgJ1wiPjwvbWVudS1tb2JpbGU+J1xuICAgICAgICApO1xuICAgICAgICB2YXIgdnVlTWVudU1vYmlsZSA9IGluaXRNZW51TW9iaWxlKGlkLCB0cmVlKTtcbiAgICAgICAgcmV0dXJuIHZ1ZU1lbnVNb2JpbGU7XG4gICAgfVxuXG4gICAgLy8g0LLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3Ri9C1ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS9cblxuICAgIC8vINCf0L7Qu9GD0YfQtdC90LjRjyDRg9C30LvQsCDQv9C+IElEXG4gICAgZnVuY3Rpb24gZ2V0Tm9kZUJ5SWQoaWQsIHRyZWUpe1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgLy/QuNGJ0LXQvCDRjdC70LXQvNC10L3RgiDRgSDQt9Cw0LTQsNC90L3Ri9C8IGlkXG4gICAgICAgIHRyZWUuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgICAgIGlmKCBpdGVtLmlkID09IGlkICl7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gaXRlbTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDQtdGB0LvQuCDRjdC70LXQvNC10L3RgtCwINGBINGC0LDQutC40LwgaWQg0L3QtdGCLCDRgtC+INCy0L7Qt9Cy0YDQsNGJ0LDQtdC8IG51bGxcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAvLyDQn9C+0LvRg9GH0LXQvdC40Y8g0LrQvtGA0L3Rj1xuICAgIGZ1bmN0aW9uIGdldE5vZGVSb290KHRyZWUpe1xuICAgICAgICByZXR1cm4gZ2V0Tm9kZUJ5SWQoMCwgdHJlZSk7XG4gICAgfVxuXG5cbiAgICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0YHQvtCx0YvRgtC40LkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS9cblxuICAgIGZ1bmN0aW9uIGFkZEhhbmRsZXJUb2dnbGVCdG4oY29udGFpbmVyLCB2dWVNZW51TW9iaWxlKXtcbiAgICAgICAgJChjb250YWluZXIpLm9uKCdjbGljaycsIHNlbGVjdG9ycy5idG5Ub2dnbGUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZ1ZU1lbnVNb2JpbGUuc2hvdyA9IHRydWU7XG4gICAgICAgICAgICBhcHAuc2Nyb2xsLmRpc2FibGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gaW5pdGlhbGl6ZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS9cbiAgICAkKHNlbGVjdG9ycy5jb250YWluZXIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRPcHRpb25zKCQodGhpcykpOyAgLy8g0L/QtdGA0LXQvtC/0YDQtdC00LXQu9GP0LXQvCDRgdCy0L7QudGB0YLQstCwLCDQtdGB0LvQuCDRjdGC0L4g0L3QtdC+0LHRhdC+0LTQuNC80L5cbiAgICAgICAgdmFyIHRyZWUgPSBidWlsZE1lbnUoJCh0aGlzKS5maW5kKHNlbGVjdG9ycy5ub2RlUm9vdCkpOyAgLy8g0YHQvtC30LTQsNGR0Lwg0LzQvtC00LXQu9GMINC80LXQvdGOXG4gICAgICAgIHZhciB2dWVNZW51TW9iaWxlID0gcmVuZGVyTWVudSh0cmVlKTsgICAvLyDRgNC10L3QtdC00LXRgNC40Lwg0LzQtdC90Y4sINC60L7Qu9Cx0Y3QutC+0Lwg0L3QsNCy0LXRiNC40LLQsNC10Lwg0L7QsdGA0LDQsdC+0YLRh9C40LrQuFxuICAgICAgICBhZGRIYW5kbGVyVG9nZ2xlQnRuKHRoaXMsIHZ1ZU1lbnVNb2JpbGUpO1xuICAgIH0pO1xuXG4gICAgLy8gcHVibGljID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS9cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfVxuICAgIH07XG59XG4iLCIoZnVuY3Rpb24oICQgKXtcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgLy8g0LTQtdGE0L7Qu9GC0L3Ri9C1INC+0L/RhtC40LhcbiAgICAgICAgYW5pbWF0aW9uOiAnJ1xuICAgIH07XG4gICAgdmFyIHN0YXRlcyA9e1xuICAgICAgICBoYXNFeHRyYTogZmFsc2VcbiAgICB9O1xuXG4gICAgdmFyIG1ldGhvZHMgPSB7XG5cbiAgICAgICAgaW5pdCA6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXG4gICAgICAgICAgICBvcHRpb25zID0gJC5leHRlbmQoe30sIGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBtb2RhbElkID0gJ21vZGFsLScgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqOTk5OTk5KTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgQUpBWF9MT0FERVIgID0gJzxpbWcgY2xhc3M9XCJidG5fX2xvYWRlclwiIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvYWRlci5zdmdcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIj4nO1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGxpbmsgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkbGluay5kYXRhKCdjbGlja2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciBsaW5rQ29udGVudCA9ICRsaW5rLmh0bWwoKTtcbiAgICAgICAgICAgICAgICAgICAgJGxpbmsuZGF0YSgnY2xpY2tlZCcsIHRydWUpLmh0bWwoQUpBWF9MT0FERVIpO1xuXG4gICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICRsaW5rLmF0dHIoJ2hyZWYnKVxuICAgICAgICAgICAgICAgICAgICB9KS5kb25lKGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbCAnICsgJGxpbmsuYXR0cignZGF0YS1jbGFzcycpICsgJ1wiIGlkPVwiJyArIG1vZGFsSWQgKyAnXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWxfX3dyYXBwZXJcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWxfX2JnXCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cIm1vZGFsX19idG4tY2xvc2VcIj5DbG9zZTwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbF9fY29udGFpbmVyXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJtb2RhbF9fc2Nyb2xsXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwibW9kYWxfX2xvYWRlclwiPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwLnNjcm9sbC5kaXNhYmxlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kcy5hZGRFdmVudExpc3RlbmVyKCQoJyMnICsgbW9kYWxJZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9KS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGxpbmsucmVtb3ZlRGF0YSgnY2xpY2tlZCcpLmh0bWwobGlua0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLm1vZGFsX19sb2FkZXInKS5jc3MoeydvcGFjaXR5JzogMCwgJ3BvaW50ZXJFdmVudHMnOiAnbm9uZSd9KTtcbiAgICAgICAgICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FqYXggZmFpbCcpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lciA6IGZ1bmN0aW9uIChtb2RhbCkge1xuICAgICAgICAgICAgJChtb2RhbClcbiAgICAgICAgICAgIC5vbignY2xpY2snLCAnLm1vZGFsX19iZycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLm1vZGFsX19idG4tY2xvc2UnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgJy5tb2RhbF9fYnRuLWNsb3NlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYXBwLnNjcm9sbC5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAkKCcubW9kYWwnKS5hZGRDbGFzcygnY2xvc2luZycpO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKCcubW9kYWwnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLmNzcygncG9zaXRpb24nLCAnc3RhdGljJyk7IFxuICAgICAgICAgICAgICAgIH0sIDEzNTApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8g0L/RgNC+0LLQtdGA0Y/QtdGCINGN0LvQtdC80LXQvdGC0YssINC10YHQu9C4INGN0LvQtdC80LXQvdGC0YMg0L3QtSDRhdCy0LDRgtCw0LXRgiDQvNC10YHRgtCwLCDRgtC+INGB0LrRgNGL0LLQsNC10YIg0LXQs9C+XG4gICAgICAgIGhpZGVJdGVtIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkLmZuLm1vZGFsQWpheCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXG4gICAgICAgIGlmICggbWV0aG9kc1ttZXRob2RdICkge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHNbIG1ldGhvZCBdLmFwcGx5KCB0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCggYXJndW1lbnRzLCAxICkpO1xuICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhIG1ldGhvZCApIHtcbiAgICAgICAgICAgIHJldHVybiBtZXRob2RzLmluaXQuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJC5lcnJvciggJ9Cc0LXRgtC+0LQgJyArICBtZXRob2QgKyAnINC90LUg0YHRg9GJ0LXRgdGC0LLRg9C10YIg0LIgalF1ZXJ5Lm1vZGFsQWpheCcgKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufSkoIGpRdWVyeSApOyIsInZhciBUYWJsZXMgPSAoZnVuY3Rpb24oKXtcblxuICAgIC8vIHByaXZhdGUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHdyYXBUYWJsZXMgPSBmdW5jdGlvbiAodGFibGVTZWxlY3Rvcil7XG4gICAgICAgICQodGFibGVTZWxlY3RvcikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgY3VyclRhYmxlID0gJCh0aGlzKTtcbiAgICAgICAgICAgIC8vIHZhciBjbGFzc05hbWUgPSBcInRhYmxlLXJlc3BvbnNpdmVcIjtcbiAgICAgICAgICAgIC8vIGlmKGN1cnJUYWJsZS5hdHRyKCdkYXRhLXZpZXctdHlwZScpID09ICdob3Jpem9udGFsJyl7IGNsYXNzTmFtZSArPSAnIC1ob3Jpem9udGFsJzsgfVxuICAgICAgICAgICAgY3VyclRhYmxlLndyYXAoXCI8ZGl2IGNsYXNzPSd0YWJsZS1yZXNwb25zaXZlJz48ZGl2IGNsYXNzPSd0YWJsZS1yZXNwb25zaXZlX19zY3JvbGwnPjwvZGl2PjwvZGl2PlwiKTtcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgLy8gcHVibGljID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGRNb2JpbGVWaWV3OiBmdW5jdGlvbih0YWJsZVNlbGVjdG9yKXtcbiAgICAgICAgICAgIHdyYXBUYWJsZXModGFibGVTZWxlY3Rvcik7XG4gICAgICAgIH1cbiAgICB9O1xufSgpKTsiLCIvLyBqcy1zcG9pbGVyLWFyZWEgLSDRgdC60YDRi9Cy0LDQtdGCINC+0LHQu9Cw0YHRgtGMINC/0L7QtCDRgdC/0L7QudC70LXRgFxuLy9cbi8vINC40YHRhdC+0LTQvdGL0Lkg0LrQvtC0XG4vLyA8ZGl2IGNsYXNzPVwianMtc3BvaWxlci1hcmVhIGhpZGRlbi1tZFwiXG4vLyBkYXRhLW1vYmlsZS1vbmx5PVwidHJ1ZVwiXG4vLyBkYXRhLXRleHQtb3BlbmVkPVwi0KHQutGA0YvRgtGMXCJcbi8vIGRhdGEtdGV4dC1jbG9zZWQ9XCLQn9C+0LrQsNC30LDRgtGMINC/0L7Qu9C90L7RgdGC0YzRjlwiPlxuLy8gIDwhLS0g0YLRg9GCINC60L7QvdGC0LXQvdGCINC60L7RgtC+0YDRi9C5INC90YPQttC90L4g0YHQutGA0YvQstCw0YLRjCAtLT5cbi8vIDwvZGl2PlxuXG4vLyAg0YHQtdCz0L3QtdGA0LjRgNC+0LLQsNC90YvQuSDQutC+0LRcbi8vICA8ZGl2IGNsYXNzPVwic3BvaWxlclwiPlxuLy8gICAgICA8ZGl2ICBjbGFzcz1cInNwb2lsZXIganMtc3BvaWxlci1hcmVhXCI+PCEtLSDRgtGD0YIg0LrQvtC90YLQtdC90YIg0LrQvtGC0L7RgNGL0Lkg0L3Rg9C20L3QviDRgdC60YDRi9Cy0LDRgtGMIC0tPjwvZGl2PlxuLy8gICAgICA8YnV0dG9uIGNsYXNzPVwic3BvaWxlcl9fYnRuXCIgPjxzcGFuPkJ0bjwvc3Bhbj48L2J1dHRvbj5cbi8vICA8L2Rpdj5cblxuJCgnLmpzLXNwb2lsZXItYXJlYScpLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyIHNlbGYgPSAkKHRoaXMpO1xuXG4gICAgLy8g0LrRjdGI0LjRgNGD0LXQvCBkYXRhLdCw0YLRgNC40LHRg9GC0YssINC/0L7QtNGB0YLQsNCy0LvRj9GPINC30L3QsNGH0LXQvdC40Y8g0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4sINC10YHQu9C4INCw0YLRgNC40LHRg9GC0Ysg0L3QtSDQt9Cw0LTQsNC90YtcbiAgICB2YXIgYnRuVGV4dE9wZW5lZCA9IHNlbGYuYXR0cignZGF0YS10ZXh0LW9wZW5lZCcpID8gc2VsZi5hdHRyKCdkYXRhLXRleHQtb3BlbmVkJykgOiAn0KHQutGA0YvRgtGMJyxcbiAgICAgICAgYnRuVGV4dENsb3NlZCA9IHNlbGYuYXR0cignZGF0YS10ZXh0LWNsb3NlZCcpID8gc2VsZi5hdHRyKCdkYXRhLXRleHQtY2xvc2VkJykgOiAn0KHQvNC+0YLRgNC10YLRjCDQv9C+0LvQvdC+0YHRgtGM0Y4nLFxuICAgICAgICBidG5DbGFzcyA9IHNlbGYuYXR0cignZGF0YS1idG4tY2xhc3MnKSA/IHNlbGYuYXR0cignZGF0YS1idG4tY2xhc3MnKSA6ICcnIDtcblxuICAgIC8vINC00L7QsdCw0LLQu9GP0LXQvCDQvdC10L7QsdGF0L7QtNC40LzRi9C5IGh0bWxcbiAgICBzZWxmLmFkZENsYXNzKCdzcG9pbGVyX19jb250ZW50Jyk7XG4gICAgc2VsZi53cmFwKCc8ZGl2IGNsYXNzPVwic3BvaWxlclwiPjwvZGl2PicpO1xuICAgIHNlbGYucGFyZW50KCkuYXBwZW5kKCc8YnV0dG9uIGNsYXNzPVwic3BvaWxlcl9fYnRuIGJ0biAnICsgYnRuQ2xhc3MgKyAnXCI+PHNwYW4+JyArIGJ0blRleHRDbG9zZWQgKyAnPC9zcGFuPjwvYnV0dG9uPicpO1xuXG4gICAgLy8g0LrRjdGI0LjRgNGD0LXQvCDRjdC70LXQvNC10L3RgtGLXG4gICAgdmFyIGNvbnRhaW5lciA9IHNlbGYucGFyZW50KCksXG4gICAgICAgIGNvbnRlbnQgPSBzZWxmLFxuICAgICAgICBidG4gPSBjb250YWluZXIuZmluZCgnLnNwb2lsZXJfX2J0bicpO1xuXG5cbiAgICAvLyDQtNC+0LHQsNCy0LvRj9C10Lwg0LrQu9Cw0YHRgSBoaWRkZW4tKi92aXNpYmxlLSog0LTQu9GPINC60L3QvtC/0LrQuCDQtdGB0LvQuCDQvdCw0LTQvlxuICAgIC8vINC60LvQsNGB0YEg0LTQvtCx0LDQstC70Y/QtdGC0YHRjywg0LXRgdC70Lgg0YMg0LrQvtC90YLQtdC90YLQsCDQtdGB0YLRjCDQutC70LDRgdGBIGhpZGRlbi0qXG4gICAgdmFyIGNsYXNzTGlzdCA9IGNvbnRlbnQuYXR0cignY2xhc3MnKS5zcGxpdCgvXFxzKy8pLFxuICAgICAgICBpc1Jlc3BvbnNlID0gZmFsc2U7XG4gICAgJC5lYWNoKGNsYXNzTGlzdCwgZnVuY3Rpb24oaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgaWYgKGl0ZW0uc3Vic3RyaW5nKDAsNykgPT09ICdoaWRkZW4tJykge1xuICAgICAgICAgICAgYnRuLmFkZENsYXNzKCdoaWRkZW4gdmlzaWJsZS0nICsgaXRlbS5zdWJzdHJpbmcoNyw5KSk7XG4gICAgICAgICAgICBpc1Jlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGlmKCFpc1Jlc3BvbnNlKXtcbiAgICAgICAgY29udGVudC5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgfVxuXG4gICAgLy8g0LLQtdGI0LDQtdC8INGB0L7QsdGL0YLQuNGPXG4gICAgYnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnRlbnQuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgYnRuLnRvZ2dsZUNsYXNzKCdpcy1vcGVuZWQnKTtcbiAgICAgICAgaWYoYnRuLmhhc0NsYXNzKCdpcy1vcGVuZWQnKSl7XG4gICAgICAgICAgICBidG4uZmluZCgnc3BhbicpLnRleHQoYnRuVGV4dE9wZW5lZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidG4uZmluZCgnc3BhbicpLnRleHQoYnRuVGV4dENsb3NlZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5cbiQoJy5qcy1zcG9pbGVyLWl0ZW1zJykuZWFjaChmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgc2VsZiA9ICQodGhpcyk7XG5cbiAgICAvLyDQutGN0YjQuNGA0YPQtdC8IGRhdGEt0LDRgtGA0LjQsdGD0YLRiywg0L/QvtC00YHRgtCw0LLQu9GP0Y8g0LfQvdCw0YfQtdC90LjRjyDQv9C+INGD0LzQvtC70YfQsNC90LjRjiwg0LXRgdC70Lgg0LDRgtGA0LjQsdGD0YLRiyDQvdC1INC30LDQtNCw0L3Ri1xuICAgIHZhciBidG5UZXh0T3BlbmVkID0gc2VsZi5hdHRyKCdkYXRhLXRleHQtb3BlbmVkJykgPyBzZWxmLmF0dHIoJ2RhdGEtdGV4dC1vcGVuZWQnKSA6ICfQodC60YDRi9GC0YwnLFxuICAgICAgICBidG5UZXh0Q2xvc2VkID0gc2VsZi5hdHRyKCdkYXRhLXRleHQtY2xvc2VkJykgPyBzZWxmLmF0dHIoJ2RhdGEtdGV4dC1jbG9zZWQnKSA6ICfQodC80L7RgtGA0LXRgtGMINC/0L7Qu9C90L7RgdGC0YzRjicsXG4gICAgICAgIGJ0bkNsYXNzID0gc2VsZi5hdHRyKCdkYXRhLWJ0bi1jbGFzcycpID8gc2VsZi5hdHRyKCdkYXRhLWJ0bi1jbGFzcycpIDogJycgO1xuXG4gICAgLy8g0LTQvtCx0LDQstC70Y/QtdC8INC90LXQvtCx0YXQvtC00LjQvNGL0LkgaHRtbFxuICAgIHNlbGYuYWRkQ2xhc3MoJ3Nwb2lsZXJfX2NvbnRlbnQnKTtcbiAgICBzZWxmLndyYXAoJzxkaXYgY2xhc3M9XCJzcG9pbGVyXCI+PC9kaXY+Jyk7XG4gICAgc2VsZi5wYXJlbnQoKS5hcHBlbmQoJzxidXR0b24gY2xhc3M9XCJzcG9pbGVyX19idG4gYnRuICcgKyBidG5DbGFzcyArICdcIj48c3Bhbj4nICsgYnRuVGV4dENsb3NlZCArICc8L3NwYW4+PC9idXR0b24+Jyk7XG5cblxufSk7IixudWxsLCJ2YXIgbWVudU1vYmlsZSA9IG5ldyBNZW51TW9iaWxlKHt9KTtcbiQoJy5qcy1tZW51LXNtYXJ0JykubWVudVNtYXJ0KCk7IiwiKGZ1bmN0aW9uIHNsaWRlckhlYWRlcigpIHtcbiAgICB2YXIgc2xpZGVySGVhZGVyID0ge1xuICAgICAgICBjYXJvdXNlbCA6ICQoXCIuanMtc2xpZGVyLWhlYWRlciAub3dsLWNhcm91c2VsXCIpLFxuICAgICAgICBuZXh0QnRuIDogJChcIi5qcy1zbGlkZXItaGVhZGVyIC5qcy1uYXYtbmV4dFwiKSxcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtc2xpZGVyLWhlYWRlciAuanMtbmF2LXByZXZcIiksXG4gICAgICAgIGNvdW50ZXIgOiAkKFwiLmpzLXNsaWRlci1oZWFkZXIgLmpzLW5hdi1jb3VudGVyXCIpLFxuICAgICAgICBkaXJlY3Rpb24gOiAnZm9yd2FyZCcgICAvLyBpbnZlcnNlXG4gICAgfTtcbiAgICBzbGlkZXJIZWFkZXIuY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlUaW1lb3V0OiA2MDAwLFxuICAgICAgICBsb29wOnRydWUsXG4gICAgICAgIG1hcmdpbjowLFxuICAgICAgICBuYXY6ZmFsc2UsXG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBpdGVtczogMSxcbiAgICAgICAgYW5pbWF0ZU91dDogJ3NsaWRlT3V0RG93bicsXG4gICAgICAgIGFuaW1hdGVJbjogJ2ZsaXBJblgnLFxuICAgICAgICBvbkluaXRpYWxpemVkOiByZW5kZXJDb3VudGVyLFxuICAgICAgICBvblRyYW5zbGF0ZTogcmVuZGVyQ291bnRlclxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gcmVuZGVyQ291bnRlcihldmVudCkge1xuICAgICAgICAvLyBub3JtYWxpemUgaW5kZXhcbiAgICAgICAgaWYoIHNsaWRlckhlYWRlci5kaXJlY3Rpb24gPT09ICdpbnZlcnNlJyAmJiBldmVudC5pdGVtLmluZGV4LTEgPT09IDApe1xuICAgICAgICAgICAgc2xpZGVySGVhZGVyLmNvdW50ZXIuaHRtbCggZXZlbnQuaXRlbS5jb3VudCArICcvJyArIGV2ZW50Lml0ZW0uY291bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVySGVhZGVyLmNvdW50ZXIuaHRtbChldmVudC5pdGVtLmluZGV4LTEgKyAnLycgKyBldmVudC5pdGVtLmNvdW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNsaWRlckhlYWRlci5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBzbGlkZXJIZWFkZXIuZGlyZWN0aW9uID0gJ2ZvcndhcmQnO1xuICAgICAgICBzbGlkZXJIZWFkZXIuY2Fyb3VzZWwudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICB9KTtcbiAgICBzbGlkZXJIZWFkZXIucHJldkJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgc2xpZGVySGVhZGVyLmRpcmVjdGlvbiA9ICdpbnZlcnNlJztcbiAgICAgICAgc2xpZGVySGVhZGVyLmNhcm91c2VsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gICAgfSk7XG59KCkpOyIsIihmdW5jdGlvbiBhZHZhbnRhZ2VzKCkge1xuICAgIHZhciBhZHZhbnRhZ2VzID0ge1xuICAgICAgICBjYXJvdXNlbCA6ICQoXCIuanMtYWR2YW50YWdlcyAub3dsLWNhcm91c2VsXCIpLFxuICAgICAgICBuZXh0QnRuIDogJChcIi5qcy1hZHZhbnRhZ2VzIC5qcy1uYXYtbmV4dFwiKSxcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtYWR2YW50YWdlcyAuanMtbmF2LXByZXZcIilcbiAgICB9O1xuICAgICQoYWR2YW50YWdlcy5jYXJvdXNlbCkuaW1hZ2VzTG9hZGVkKClcbiAgICAgICAgLmFsd2F5cyggZnVuY3Rpb24oIGluc3RhbmNlICkge1xuICAgICAgICAgICAgYWR2YW50YWdlcy5jYXJvdXNlbC5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICAgICAgbmF2OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb29wOiB0cnVlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiA0LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmUgOiB7XG4gICAgICAgICAgICAgICAgICAgIDA6IHsgaXRlbXM6IDF9LFxuICAgICAgICAgICAgICAgICAgICA0ODA6IHsgaXRlbXM6IDJ9LFxuICAgICAgICAgICAgICAgICAgICA3Njg6IHsgaXRlbXM6IDN9LFxuICAgICAgICAgICAgICAgICAgICAxMDI0OiB7IGl0ZW1zOiA0fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWR2YW50YWdlcy5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFkdmFudGFnZXMuY2Fyb3VzZWwudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYWR2YW50YWdlcy5wcmV2QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFkdmFudGFnZXMuY2Fyb3VzZWwudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuZmFpbCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ29uZSBvciBtb3JlIGltYWdlcyBpcyBicm9rZW4gaW4gJyArIGFkdmFudGFnZXMuY2Fyb3VzZWwuc2VsZWN0b3IpO1xuICAgICAgICB9KTtcblxufSgpKTsiLCIoZnVuY3Rpb24gaGl0c1dpZGdldCgpIHtcbiAgICB2YXIgaGl0c1dpZGdldCA9IHtcbiAgICAgICAgY2Fyb3VzZWwgOiAkKFwiLmpzLWhpdHMtd2lkZ2V0IC5vd2wtY2Fyb3VzZWxcIiksXG4gICAgICAgIG5leHRCdG4gOiAkKFwiLmpzLWhpdHMtd2lkZ2V0IC5qcy1uYXYtbmV4dFwiKSxcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtaGl0cy13aWRnZXQgLmpzLW5hdi1wcmV2XCIpXG4gICAgfTtcbiAgICAkKGhpdHNXaWRnZXQuY2Fyb3VzZWwpLmltYWdlc0xvYWRlZCgpXG4gICAgICAgIC5hbHdheXMoIGZ1bmN0aW9uKCBpbnN0YW5jZSApIHtcbiAgICAgICAgICAgIGhpdHNXaWRnZXQuY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6MVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBoaXRzV2lkZ2V0Lm5leHRCdG4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaGl0c1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCduZXh0Lm93bC5jYXJvdXNlbCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBoaXRzV2lkZ2V0LnByZXZCdG4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaGl0c1dpZGdldC5jYXJvdXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignb25lIG9yIG1vcmUgaW1hZ2VzIGlzIGJyb2tlbiBpbiAnICsgaGl0c1dpZGdldC5jYXJvdXNlbC5zZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuXG59KCkpOyIsIihmdW5jdGlvbiBhcnRpY2xlc1dpZGdldCgpIHtcbiAgICB2YXIgYXJ0aWNsZXNXaWRnZXQgPSB7XG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1hcnRpY2xlcy13aWRnZXQgLm93bC1jYXJvdXNlbFwiKSxcbiAgICAgICAgbmV4dEJ0biA6ICQoXCIuanMtYXJ0aWNsZXMtd2lkZ2V0IC5qcy1uYXYtbmV4dFwiKSxcbiAgICAgICAgcHJldkJ0biA6ICQoXCIuanMtYXJ0aWNsZXMtd2lkZ2V0IC5qcy1uYXYtcHJldlwiKVxuICAgIH07XG4gICAgJChhcnRpY2xlc1dpZGdldC5jYXJvdXNlbCkuaW1hZ2VzTG9hZGVkKClcbiAgICAgICAgLmFsd2F5cyggZnVuY3Rpb24oIGluc3RhbmNlICkge1xuICAgICAgICAgICAgYXJ0aWNsZXNXaWRnZXQuY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjIsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgICAgICAwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6MVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICA5ODA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhcnRpY2xlc1dpZGdldC5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGFydGljbGVzV2lkZ2V0LmNhcm91c2VsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFydGljbGVzV2lkZ2V0LnByZXZCdG4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgYXJ0aWNsZXNXaWRnZXQuY2Fyb3VzZWwudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuZmFpbCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ29uZSBvciBtb3JlIGltYWdlcyBpcyBicm9rZW4gaW4gJyArIGFydGljbGVzV2lkZ2V0LmNhcm91c2VsLnNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG5cbn0oKSk7IiwiKGZ1bmN0aW9uIG5ld3NXaWRnZXQoKSB7XG4gICAgdmFyIG5ld3NXaWRnZXQgPSB7XG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1uZXdzLXdpZGdldCAubmV3cy13aWRnZXRfX2Nhcm91c2VsLm93bC1jYXJvdXNlbFwiKSxcbiAgICAgICAgbmV4dEJ0biA6ICQoXCIuanMtbmV3cy13aWRnZXQgLmpzLW5hdi1uZXh0XCIpLFxuICAgICAgICBwcmV2QnRuIDogJChcIi5qcy1uZXdzLXdpZGdldCAuanMtbmF2LXByZXZcIilcbiAgICB9O1xuICAgICQobmV3c1dpZGdldC5jYXJvdXNlbCkuaW1hZ2VzTG9hZGVkKClcbiAgICAgICAgLmFsd2F5cyggZnVuY3Rpb24oIGluc3RhbmNlICkge1xuICAgICAgICAgICAgbmV3c1dpZGdldC5jYXJvdXNlbC5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDk4MDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld3NXaWRnZXQubmV4dEJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBuZXdzV2lkZ2V0LmNhcm91c2VsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5ld3NXaWRnZXQucHJldkJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBuZXdzV2lkZ2V0LmNhcm91c2VsLnRyaWdnZXIoJ3ByZXYub3dsLmNhcm91c2VsJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdvbmUgb3IgbW9yZSBpbWFnZXMgaXMgYnJva2VuIGluICcgKyBuZXdzV2lkZ2V0LmNhcm91c2VsKTtcbiAgICAgICAgfSk7XG5cbn0oKSk7XG5cbihmdW5jdGlvbiBiYW5uZXJzV2lkZ2V0KCkge1xuICAgIHZhciBiYW5uZXJzV2lkZ2V0ID0ge1xuICAgICAgICBjYXJvdXNlbCA6ICQoXCIuanMtbmV3cy13aWRnZXQgLmJhbm5lcnNfX2Nhcm91c2VsLm93bC1jYXJvdXNlbFwiKSxcbiAgICB9O1xuICAgICQoYmFubmVyc1dpZGdldC5jYXJvdXNlbCkuaW1hZ2VzTG9hZGVkKClcbiAgICAgICAgLmFsd2F5cyggZnVuY3Rpb24oIGluc3RhbmNlICkge1xuICAgICAgICAgICAgYmFubmVyc1dpZGdldC5jYXJvdXNlbC5vd2xDYXJvdXNlbCh7XG4gICAgICAgICAgICAgICAgY2VudGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMixcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDk4MDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZhaWwoIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdvbmUgb3IgbW9yZSBpbWFnZXMgaXMgYnJva2VuIGluICcgKyBiYW5uZXJzV2lkZ2V0LmNhcm91c2VsKTtcbiAgICAgICAgfSk7XG59KCkpOyIsIihmdW5jdGlvbiBnYWxlcnlGdWxsd2lkdGhDZW50ZXJlZCgpIHtcbiAgICB2YXIgZ2FsZXJ5RnVsbHdpZHRoQ2VudGVyZWQgPSB7XG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy1nYWxlcnktZnVsbHdpZHRoLWNlbnRlcmVkIC5vd2wtY2Fyb3VzZWxcIiksXG4gICAgICAgIG5leHRCdG4gOiAkKFwiLmpzLWdhbGVyeS1mdWxsd2lkdGgtY2VudGVyZWQgLmpzLW5hdi1uZXh0XCIpLFxuICAgICAgICBwcmV2QnRuIDogJChcIi5qcy1nYWxlcnktZnVsbHdpZHRoLWNlbnRlcmVkIC5qcy1uYXYtcHJldlwiKVxuICAgIH07XG4gICAgJChnYWxlcnlGdWxsd2lkdGhDZW50ZXJlZC5jYXJvdXNlbCkuaW1hZ2VzTG9hZGVkKClcbiAgICAgICAgLmFsd2F5cyggZnVuY3Rpb24oIGluc3RhbmNlICkge1xuICAgICAgICAgICAgZ2FsZXJ5RnVsbHdpZHRoQ2VudGVyZWQuY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b1dpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBnYWxlcnlGdWxsd2lkdGhDZW50ZXJlZC5uZXh0QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdhbGVyeUZ1bGx3aWR0aENlbnRlcmVkLmNhcm91c2VsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGdhbGVyeUZ1bGx3aWR0aENlbnRlcmVkLnByZXZCdG4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ2FsZXJ5RnVsbHdpZHRoQ2VudGVyZWQuY2Fyb3VzZWwudHJpZ2dlcigncHJldi5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuZmFpbCggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ29uZSBvciBtb3JlIGltYWdlcyBpcyBicm9rZW4gaW4gJyArIGdhbGVyeUZ1bGx3aWR0aENlbnRlcmVkLmNhcm91c2VsLnNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG5cbn0oKSk7IiwiKGZ1bmN0aW9uIGNlcnRpZmljYXRlcygpIHtcbiAgICB2YXIgY2VydGlmaWNhdGVzID0ge1xuICAgICAgICBjYXJvdXNlbCA6ICQoXCIuanMtY2VydGlmaWNhdGVzIC5vd2wtY2Fyb3VzZWxcIiksXG4gICAgICAgIG5leHRCdG4gOiAkKFwiLmpzLWNlcnRpZmljYXRlcyAuanMtbmF2LW5leHRcIiksXG4gICAgICAgIHByZXZCdG4gOiAkKFwiLmpzLWNlcnRpZmljYXRlcyAuanMtbmF2LXByZXZcIilcbiAgICB9O1xuICAgICQoY2VydGlmaWNhdGVzLmNhcm91c2VsKS5pbWFnZXNMb2FkZWQoKVxuICAgICAgICAuYWx3YXlzKCBmdW5jdGlvbiggaW5zdGFuY2UgKSB7XG4gICAgICAgICAgICBjZXJ0aWZpY2F0ZXMuY2Fyb3VzZWwub3dsQ2Fyb3VzZWwoe1xuICAgICAgICAgICAgICAgIG5hdjogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvV2lkdGg6dHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHtcbiAgICAgICAgICAgICAgICAgICAgMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOjFcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgOTgwOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2VydGlmaWNhdGVzLm5leHRCdG4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY2VydGlmaWNhdGVzLmNhcm91c2VsLnRyaWdnZXIoJ25leHQub3dsLmNhcm91c2VsJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNlcnRpZmljYXRlcy5wcmV2QnRuLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNlcnRpZmljYXRlcy5jYXJvdXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignb25lIG9yIG1vcmUgaW1hZ2VzIGlzIGJyb2tlbiBpbiAnICsgY2VydGlmaWNhdGVzLmNhcm91c2VsLnNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG5cbn0oKSk7XG4oZnVuY3Rpb24gcGFydG5lcnMoKSB7XG4gICAgdmFyIHBhcnRuZXJzID0ge1xuICAgICAgICBjYXJvdXNlbCA6ICQoXCIuanMtcGFydG5lcnMgLm93bC1jYXJvdXNlbFwiKSxcbiAgICAgICAgbmV4dEJ0biA6ICQoXCIuanMtcGFydG5lcnMgLmpzLW5hdi1uZXh0XCIpLFxuICAgICAgICBwcmV2QnRuIDogJChcIi5qcy1wYXJ0bmVycyAuanMtbmF2LXByZXZcIilcbiAgICB9O1xuICAgICQocGFydG5lcnMuY2Fyb3VzZWwpLmltYWdlc0xvYWRlZCgpXG4gICAgICAgIC5hbHdheXMoIGZ1bmN0aW9uKCBpbnN0YW5jZSApIHtcbiAgICAgICAgICAgIHBhcnRuZXJzLmNhcm91c2VsLm93bENhcm91c2VsKHtcbiAgICAgICAgICAgICAgICBuYXY6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b1dpZHRoOnRydWUsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyNSxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB7XG4gICAgICAgICAgICAgICAgICAgIDA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczoxXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIDk4MDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBhcnRuZXJzLm5leHRCdG4uY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcGFydG5lcnMuY2Fyb3VzZWwudHJpZ2dlcignbmV4dC5vd2wuY2Fyb3VzZWwnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcGFydG5lcnMucHJldkJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwYXJ0bmVycy5jYXJvdXNlbC50cmlnZ2VyKCdwcmV2Lm93bC5jYXJvdXNlbCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5mYWlsKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybignb25lIG9yIG1vcmUgaW1hZ2VzIGlzIGJyb2tlbiBpbiAnICsgcGFydG5lcnMuY2Fyb3VzZWwpO1xuICAgICAgICB9KTtcblxufSgpKTsiLCIoZnVuY3Rpb24gdGVzdGltb25pYWxzV2lkZ2V0KCkge1xuICAgIHZhciB0ZXN0aW1vbmlhbHNXaWRnZXQgPSB7XG4gICAgICAgIGNhcm91c2VsIDogJChcIi5qcy10ZXN0aW1vbmlhbHMtd2lkZ2V0IC5ieHNsaWRlclwiKSxcbiAgICAgICAgbmV4dEJ0biA6ICQoXCIuanMtdGVzdGltb25pYWxzLXdpZGdldCAuanMtbmF2LW5leHRcIiksXG4gICAgICAgIHByZXZCdG4gOiAkKFwiLmpzLXRlc3RpbW9uaWFscy13aWRnZXQgLmpzLW5hdi1wcmV2XCIpXG4gICAgfTtcbiAgICAvLyDRgdC+0YXRgNCw0L3Rj9C10Lwg0YHQu9Cw0LnQtNC10YAg0LIgdGVzdGltb25pYWxzV2lkZ2V0LmNhcm91c2VsXG4gICAgdGVzdGltb25pYWxzV2lkZ2V0LmNhcm91c2VsLmJ4U2xpZGVyKCk7XG5cbiAgICB0ZXN0aW1vbmlhbHNXaWRnZXQubmV4dEJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdGVzdGltb25pYWxzV2lkZ2V0LmNhcm91c2VsLmdvVG9OZXh0U2xpZGUoKTtcbiAgICB9KTtcbiAgICB0ZXN0aW1vbmlhbHNXaWRnZXQucHJldkJ0bi5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgdGVzdGltb25pYWxzV2lkZ2V0LmNhcm91c2VsLmdvVG9QcmV2U2xpZGUoKTtcbiAgICB9KTtcblxuICAgIG1lZGlhRXZlbnRMaXN0ZW5lci5hZGRRdWVyeUFjdGlvbignbW9iaWxlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdGVzdGltb25pYWxzV2lkZ2V0LmNhcm91c2VsLnJlbG9hZFNsaWRlcih7XG4gICAgICAgICAgICBtb2RlOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgICAgICBpbmZpbml0ZUxvb3A6IHRydWUsXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1pblwiLFxuICAgICAgICAgICAgcGFnZXI6IHRydWUsXG4gICAgICAgICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICAgICAgICBtaW5TbGlkZXM6IDEsXG4gICAgICAgICAgICBtYXhTbGlkZXM6IDEsXG4gICAgICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBtZWRpYUV2ZW50TGlzdGVuZXIuYWRkUXVlcnlBY3Rpb24oJ2Rlc2t0b3AnLCBmdW5jdGlvbigpe1xuICAgICAgICB0ZXN0aW1vbmlhbHNXaWRnZXQuY2Fyb3VzZWwucmVsb2FkU2xpZGVyKHtcbiAgICAgICAgICAgIG1vZGU6ICd2ZXJ0aWNhbCcsXG4gICAgICAgICAgICBpbmZpbml0ZUxvb3A6IHRydWUsXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1pblwiLFxuICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxuICAgICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgICAgbWluU2xpZGVzOiAyLFxuICAgICAgICAgICAgbWF4U2xpZGVzOiAyLFxuICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSgpKTtcbiIsImNvbnNvbGUubG9nKCdtYWluJyk7IiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8vIG1lZGlhRXZlbnRMaXN0ZW5lciDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INC/0L7RgdC70LUg0LLRgdC10YUg0LTQvtCx0LDQstC70LXQvdC40LksXG4vLyDRgdC60YDQuNC/0YLRiyDQv9C+0LTQstC10YjQtdC90YvQtSDQv9C+0LfQttC1INC90LUg0L7RgtGA0LDQsdC+0YLQsNGO0YIg0L/RgNC4INC/0LXRgNCy0L7QuSDQt9Cw0LPRgNGD0LfQutC1XG5tZWRpYUV2ZW50TGlzdGVuZXIuaW5pdCgpO1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki8iXX0=
