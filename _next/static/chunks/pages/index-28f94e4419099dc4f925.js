_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(t,e,r){"use strict";e.__esModule=!0,e.isInAmpMode=c,e.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var n,o=(n=r("q1tI"))&&n.__esModule?n:{default:n},a=r("lwAK");function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,r=void 0!==e&&e,n=t.hybrid,o=void 0!==n&&n,a=t.hasQuery,c=void 0!==a&&a;return r||o&&c}},"/GRZ":function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},"48fX":function(t,e,r){var n=r("qhzo");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},"5fIB":function(t,e,r){var n=r("7eYB");t.exports=function(t){if(Array.isArray(t))return n(t)}},"7eYB":function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},"8Kt/":function(t,e,r){"use strict";r("oI91");e.__esModule=!0,e.defaultHead=l,e.default=void 0;var n,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=s();if(e&&e.has(t))return e.get(t);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var a=n?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}r.default=t,e&&e.set(t,r);return r}(r("q1tI")),a=(n=r("Xuae"))&&n.__esModule?n:{default:n},c=r("lwAK"),i=r("FYa8"),u=r("/0+H");function s(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return s=function(){return t},t}function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function f(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function b(t,e){return t.reduce((function(t,e){var r=o.default.Children.toArray(e.props.children);return t.concat(r)}),[]).reduce(f,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,r=new Set,n={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var u=0,s=p.length;u<s;u++){var l=p[u];if(o.props.hasOwnProperty(l))if("charSet"===l)r.has(l)?a=!1:r.add(l);else{var f=o.props[l],b=n[l]||new Set;"name"===l&&c||!b.has(f)?(b.add(f),n[l]=b):a=!1}}}return a}}()).reverse().map((function(t,e){var r=t.key||e;return o.default.cloneElement(t,{key:r})}))}function d(t){var e=t.children,r=(0,o.useContext)(c.AmpStateContext),n=(0,o.useContext)(i.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:b,headManager:n,inAmpMode:(0,u.isInAmpMode)(r)},e)}d.rewind=function(){};var m=d;e.default=m},"C+bE":function(t,e){function r(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=r=function(t){return typeof t}:t.exports=r=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(e)}t.exports=r},FYa8:function(t,e,r){"use strict";var n;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.HeadManagerContext=o},KckH:function(t,e,r){var n=r("7eYB");t.exports=function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},Qetd:function(t,e,r){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},RNiq:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return x}));var n=r("cpVT");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var a=r("txSG"),c=r("g4pe"),i=r.n(c);function u(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}r("q1tI");function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var l=function(t){var e=t.filename,r=u(t,["filename"]);return Object(a.a)("video",function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({muted:"true",autoplay:"true",loop:"true",width:"1920",sx:{width:"100%",maxWidth:"1920px",mx:"auto",display:"block"}},r),Object(a.a)("source",{src:"https://dlu344star2bj.cloudfront.net/v/"+e+".mp4",type:"video/mp4"}))};l.defaultProps={filename:"0203a"};var f=l;function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var b=function(t){var e=o({},t);return Object(a.a)("a",function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e))};b.defaultProps={sx:{display:"block"}};var d=b;function m(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var h=function(t){var e=o({},t);return Object(a.a)("img",function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?m(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e))};h.defaultProps={sx:{display:"block",width:"100%",maxWidth:"100%"}};var O=h,y=r("hKEH"),g=r.n(y);function j(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var v=function(t){var e=o({},t);return Object(a.a)("span",function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({sx:{fontFamily:"monospace",fontSize:1,textAlign:"center",display:"block",mb:3}},e))},w=["0207d","0207c","0207b","0207a","0206c","0206b","0206a","0204d","0204c","0204b","0203c","0204b","0204a","orangewobble3","orangewobble2","orangewobble","gold","subtleripple3","slowriver","riverrunsthroughit","marble","heart-beating","pearl","sparkle","okay026","01026","gradientheight","gradientblend","pinkwaves","bendysubtlewaves","liquid-gold","purpleblob"];function x(){return Object(a.a)("div",null,Object(a.a)(i.a,null,Object(a.a)("title",null,"Adam Morse - Computational designer and generative artist"),Object(a.a)("link",{rel:"icon",href:"/favicon.ico"})),Object(a.a)("header",null),Object(a.a)("main",null,Object(a.a)(f,{filename:g()(w)}),Object(a.a)("div",{sx:{pt:4,px:3,fontSize:[2,3,4],maxWidth:"34em",mx:"auto"}},Object(a.a)("p",null,"I'm Adam Morse, a computational designer and generative artist based in Toronto. I'm currently the co-founder of ",Object(a.a)("a",{href:"https://components.ai/",title:"Components AI - Generative design tools for the web"},"Components AI"),", a startup working on new types of generative design tools."),Object(a.a)("p",null,"In the past I've helped design and build product at OPower, Stitch Fix, Salesforce, The Grid, and Cloudflare."),Object(a.a)("section",null,Object(a.a)("h3",{sx:{fontSize:3,mt:5,mb:2}},"Pen Plots"),Object(a.a)("p",null,"Generative SVG pieces are plotted with an Axidraw SE/A3 through Inkscape and the Axidraw CLI. For pens, I most often use Lamy Safari EF, Micron 01 and 005, Staedtler pigment liner 0.1. Ink: Mont Blanc, Iroshizuku, Diamine."),Object(a.a)(O,{src:"https://mrmrs.s3.us-west-2.amazonaws.com/plot-1.jpg"}),Object(a.a)(v,null,'17"x11"'),Object(a.a)(O,{src:"https://mrmrs.s3.us-west-2.amazonaws.com/plot-6.jpg"}),Object(a.a)(v,null,'17"x11"'),Object(a.a)(O,{src:"https://mrmrs.s3.us-west-2.amazonaws.com/plot-4.jpg"}),Object(a.a)(v,null,'17"x11"'),Object(a.a)(O,{src:"https://mrmrs.s3.us-west-2.amazonaws.com/plot-3.jpg"}),Object(a.a)(v,null,'17"x11"'),Object(a.a)("div",{sx:{display:"flex"}},Object(a.a)("div",{sx:{width:"50%"}},Object(a.a)(O,{src:"https://mrmrs.s3.us-west-2.amazonaws.com/plot-2.jpg"}),Object(a.a)(v,null,'11"x17"')),Object(a.a)("div",{sx:{width:"50%"}},Object(a.a)(O,{src:"https://mrmrs.s3.us-west-2.amazonaws.com/plot-5.jpg"}),Object(a.a)(v,null,'11"x17"')))),Object(a.a)("section",null,Object(a.a)("h3",null,"3D"),Object(a.a)("p",null,"Recently I've been experimenting with material shaders and procedural animations. It is an attempt to make combinations of form and motion that relax me."),Object(a.a)(f,{filename:g()(w)})),Object(a.a)("section",null,Object(a.a)("h3",{sx:{mt:5}},"Writing"),Object(a.a)(d,{href:"http://components.ai/notes/logo"},"Designing generative logos"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/components-ai/"},"Components AI"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/component-styling-api/"},"Component styling API"),Object(a.a)(d,{href:"https://color.cloudflare.design/thinking"},"Thinking about color"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/scalable-css/"},"Css and scalability"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/the-veil-of-ignorance/"},"The Veil of ignorance"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/dogma/"},"Dogma"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/too-many-tools/"},"Too many tools and frameworks"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/design-systems/"},"Design systems"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/webfonts/"},"Webfonts"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/developing-ui/"},"Developing UI"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/getting-critiqued/"},"Getting Critiqued"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/common-vim/"},"Common Vim"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/vim-as-a-design-tool/"},"Vim as a design tool"),Object(a.a)(d,{href:"http://mrmrs.cc/writing/what-are-classes-for/"},"What are classes for")),Object(a.a)("section",{sx:{pb:6}},Object(a.a)("h3",{sx:{mt:5}},"Other work"),Object(a.a)(d,{title:"Visualize your CSS",href:"https://cssstats.com"},"CSS Stats"),Object(a.a)(d,{title:"A responsive CSS toolkit for building UI",href:"http://tachyons.io"},"Tachyons"),Object(a.a)(d,{title:"Contrast accessible color combos",href:"https://randoma11y.com"},"RandomA11y"),Object(a.a)(d,{title:"Post future beats",href:"http://mrsjxn.com"},"MrsJxn")))),Object(a.a)("footer",null))}},T0f4:function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},Xuae:function(t,e,r){"use strict";var n=r("mPvQ"),o=r("/GRZ"),a=r("i2R6"),c=(r("qXWd"),r("48fX")),i=r("tCBg"),u=r("T0f4");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return i(this,r)}}e.__esModule=!0,e.default=void 0;var l=r("q1tI"),f=function(t){c(r,t);var e=s(r);function r(t){var a;return o(this,r),(a=e.call(this,t))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(l.Component);e.default=f},g4pe:function(t,e,r){t.exports=r("8Kt/")},hKEH:function(t,e){var r=9007199254740991,n="[object Arguments]",o="[object Function]",a="[object GeneratorFunction]",c=/^(?:0|[1-9]\d*)$/;function i(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,(function(e){return t[e]}))}var u,s,l=Object.prototype,f=l.hasOwnProperty,p=l.toString,b=l.propertyIsEnumerable,d=Math.floor,m=(u=Object.keys,s=Object,function(t){return u(s(t))}),h=Math.random;function O(t,e){var r=j(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&v(t)}(t)&&f.call(t,"callee")&&(!b.call(t,"callee")||p.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,a=!!o;for(var c in t)!e&&!f.call(t,c)||a&&("length"==c||g(c,o))||r.push(c);return r}function y(t){if(!function(t){var e=t&&t.constructor,r="function"==typeof e&&e.prototype||l;return t===r}(t))return m(t);var e=[];for(var r in Object(t))f.call(t,r)&&"constructor"!=r&&e.push(r);return e}function g(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||c.test(t))&&t>-1&&t%1==0&&t<e}var j=Array.isArray;function v(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!function(t){var e=function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}(t)?p.call(t):"";return e==o||e==a}(t)}t.exports=function(t){var e,r,n,o=v(t)?t:(e=t)?i(e,function(t){return v(t)?O(t):y(t)}(e)):[],a=o.length;return a>0?o[(r=0,n=a-1,r+d(h()*(n-r+1)))]:void 0}},i2R6:function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},kG2m:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},lwAK:function(t,e,r){"use strict";var n;e.__esModule=!0,e.AmpStateContext=void 0;var o=((n=r("q1tI"))&&n.__esModule?n:{default:n}).default.createContext({});e.AmpStateContext=o},mPvQ:function(t,e,r){var n=r("5fIB"),o=r("rlHP"),a=r("KckH"),c=r("kG2m");t.exports=function(t){return n(t)||o(t)||a(t)||c()}},oI91:function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},qXWd:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},qhzo:function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r},rlHP:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},tCBg:function(t,e,r){var n=r("C+bE"),o=r("qXWd");t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!==typeof e?o(t):e}},txSG:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=r("2A+t").c},vlRD:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("RNiq")}])}},[["vlRD",0,1,2]]]);