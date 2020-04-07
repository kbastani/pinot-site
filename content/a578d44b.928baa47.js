/*! For license information please see a578d44b.928baa47.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(0),r(193)),c=(r(198),r(204),r(203),{title:"Broker",sidebar_label:"broker",description:"Broker"}),i={id:"components/broker",title:"Broker",description:"Broker",source:"@site/docs/components/broker.md",permalink:"/docs/components/broker",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/components/broker.md",sidebar_label:"broker",sidebar:"docs",previous:{title:"Install Pinot On Ubuntu",permalink:"/docs/administration/installation/operating-systems/ubuntu"},next:{title:"Cluster",permalink:"/docs/components/cluster"}},l=[],u={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Brokers are the components that handle Pinot queries. They accept queries from clients and forward them to the right servers. They collect results back from the servers and consolidate them into a single response, to sent it back to the client."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../../static/img/components/Broker.png",alt:"Broker"}))))}s.isMDXComponent=!0},193:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},f=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),b=n,m=f["".concat(c,".").concat(b)]||f[b]||p[b]||o;return r?a.a.createElement(m,i({ref:t},u,{components:r})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},194:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=a.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},198:function(e,t,r){"use strict";r(199);var n=r(0),a=r.n(n),o=r(194),c=r.n(o);r(133);t.a=function(e){var t=e.children,r=e.classNames,n=e.fill,o=e.icon,i=e.type,l=null;switch(i){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:c()(r,"alert","alert--"+i,{"alert--fill":n,"alert--icon":!1!==o}),role:"alert"},!1!==o&&a.a.createElement("i",{className:c()("feather","icon-"+(o||l))}),t)}},199:function(e,t,r){var n=r(12);n(n.P,"Array",{fill:r(200)}),r(75)("fill")},200:function(e,t,r){"use strict";var n=r(26),a=r(76),o=r(25);e.exports=function(e){for(var t=n(this),r=o(t.length),c=arguments.length,i=a(c>1?arguments[1]:void 0,r),l=c>2?arguments[2]:void 0,u=void 0===l?r:a(l,r);u>i;)t[i++]=e;return t}},202:function(e,t,r){"use strict";var n=r(0),a=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a},203:function(e,t,r){"use strict";var n=r(0),a=r.n(n);t.a=function(e){return a.a.createElement("div",null,e.children)}},204:function(e,t,r){"use strict";r(27),r(20),r(21);var n=r(0),a=r.n(n),o=r(202);var c=function(){return Object(n.useContext)(o.a)},i=r(194),l=r.n(i),u=r(134),s=r.n(u),f=37,p=39;t.a=function(e){var t=e.block,r=e.children,o=e.defaultValue,i=e.values,u=e.groupId,b=c(),m=b.tabGroupChoices,d=b.setTabGroupChoices,v=Object(n.useState)(o),h=v[0],y=v[1];if(null!=u){var O=m[u];null!=O&&O!==h&&y(O)}var g=function(e){y(e),null!=u&&d(u,e)},k=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:l()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,r=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":h===t,className:l()("tab-item",s.a.tabItem,{"tab-item--active":h===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){return function(e,t,r){switch(r.keyCode){case p:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case f:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},r)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(r).filter((function(e){return e.props.value===h}))[0]))}}}]);