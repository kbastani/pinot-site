(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{119:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(8),i=(n(0),n(129)),o={id:"what_is_pinot",title:"What is Pinot",sidebar_label:"What is Pinot"},s={unversionedId:"about/what_is_pinot",id:"about/what_is_pinot",isDocsHomePage:!1,title:"What is Pinot",description:"Apache Pinot is a realtime distributed OLAP datastore, which is used to deliver scalable real time analytics with low latency. It can ingest data from batch data sources (such as HDFS, S3, Azure Data Lake, Google Cloud Storage) as well as streaming sources (such as Kafka). Pinot is designed to scale horizontally, so that it can scale to larger data sets and higher query rates as needed.",source:"@site/docs/about/what_is_pinot.md",sourceDirName:"about",slug:"/about/what_is_pinot",permalink:"/docs/about/what_is_pinot",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/about/what_is_pinot.md",version:"current",sidebar_label:"What is Pinot",frontMatter:{id:"what_is_pinot",title:"What is Pinot",sidebar_label:"What is Pinot"},sidebar:"docs",next:{title:"Features of Pinot",permalink:"/docs/about/features_of_pinot"}},c=[{value:"When should I use it?",id:"when-should-i-use-it",children:[]},{value:"When should I not use it?",id:"when-should-i-not-use-it",children:[]},{value:"Quick example",id:"quick-example",children:[]},{value:"Who uses Pinot?",id:"who-uses-pinot",children:[]}],l={toc:c};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Apache Pinot is a realtime distributed OLAP datastore, which is used to deliver scalable real time analytics with low latency. It can ingest data from batch data sources (such as HDFS, S3, Azure Data Lake, Google Cloud Storage) as well as streaming sources (such as Kafka). Pinot is designed to scale horizontally, so that it can scale to larger data sets and higher query rates as needed."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Pinot",src:n(217).default})),Object(i.b)("h2",{id:"when-should-i-use-it"},"When should I use it?"),Object(i.b)("p",null,"Pinot is designed to answer OLAP queries with low latency. It is suited in contexts where fast analytics, such as aggregations, are needed on immutable data, possibly, with real-time data ingestion."),Object(i.b)("h2",{id:"when-should-i-not-use-it"},"When should I not use it?"),Object(i.b)("p",null,"Pinot is not a replacement for your database, nor a search engine. It addresses fast analytics on immutable data and it is not thought by design, to handle data updates or deletions. Joins are currently not supported, but this problem can be overcome by using ",Object(i.b)("a",{parentName:"p",href:"(https://prestodb.io/)"},"PrestoDB")," for querying Pinot."),Object(i.b)("p",null,"For more information about PrestoDB connector for Pinot see the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/incubator-pinot/tree/master/kubernetes/examples/helm#access-pinot-using-presto"},"Helm Chart of Pinot with Presto"),"\nPinot-Presto connector is avilable with version ",Object(i.b)("a",{parentName:"p",href:"https://github.com/prestodb/presto/pull/13504"},"0.229")),Object(i.b)("h2",{id:"quick-example"},"Quick example"),Object(i.b)("p",null,"Pinot works very well for querying time series data with lots of Dimensions and Metrics.\nFilters and aggregations are easy and fast."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-SQL"},"SELECT sum(clicks), sum(impressions) FROM AdAnalyticsTable\n  WHERE ((daysSinceEpoch >= 17849 AND daysSinceEpoch <= 17856)) AND accountId IN (123456789)\n  GROUP BY daysSinceEpoch TOP 100\n")),Object(i.b)("h2",{id:"who-uses-pinot"},"Who uses Pinot?"),Object(i.b)("p",null,"Pinot powers several big players, including LinkedIn, Uber, Factual, Weibo, Slack and more.."))}u.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,h=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},217:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/pinot-overview-f1b5a17c2e53228461f1510ea2fe0e9b.png"}}]);