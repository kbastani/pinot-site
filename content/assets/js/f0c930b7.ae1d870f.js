/*! For license information please see f0c930b7.ae1d870f.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(129)),i=n(137),u={title:"Java",sidebar_label:"java",description:"Pinot Java Client"},l={unversionedId:"user-guide/clients/java",id:"user-guide/clients/java",isDocsHomePage:!1,title:"Java",description:"Pinot Java Client",source:"@site/docs/user-guide/clients/java.md",sourceDirName:"user-guide/clients",slug:"/user-guide/clients/java",permalink:"/docs/user-guide/clients/java",editUrl:"https://github.com/apache/incubator-pinot/edit/master/website/docs/user-guide/clients/java.md",version:"current",sidebar_label:"java",frontMatter:{title:"Java",sidebar_label:"java",description:"Pinot Java Client"}},s=[],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The java client can be found in pinot-clients/pinot-java-client. Here's an example of how to use the pinot-java-client to query Pinot."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'import org.apache.pinot.client.Connection;\nimport org.apache.pinot.client.ConnectionFactory;\nimport org.apache.pinot.client.Request;\nimport org.apache.pinot.client.ResultSetGroup;\nimport org.apache.pinot.client.ResultSet;\n\n/**\n * Demonstrates the use of the pinot-client to query Pinot from Java\n */\npublic class PinotClientExample {\n\n  public static void main(String[] args) {\n\n    // pinot connection\n    String zkUrl = "localhost:2181";\n    String pinotClusterName = "PinotCluster";\n    Connection pinotConnection = ConnectionFactory.fromZookeeper(zkUrl + "/" + pinotClusterName);\n  \n    String query = "SELECT COUNT(*) FROM myTable GROUP BY foo";\n\n    // set queryType=sql for querying the sql endpoint\n    Request pinotClientRequest = new Request("sql", query);\n    ResultSetGroup pinotResultSetGroup = pinotConnection.execute(pinotClientRequest);\n    ResultSet resultTableResultSet = pinotResultSetGroup.getResultSet(0);\n\n    int numRows = resultTableResultSet.getRowCount();\n    int numColumns = resultTableResultSet.getColumnCount();\n    String columnValue = resultTableResultSet.getString(0, 1);\n    String columnName = resultTableResultSet.getColumnName(1);\n\n    System.out.println("ColumnName: " + columnName + ", ColumnValue: " + columnValue);\n  }\n}\n')),Object(a.b)("p",null,"Connections to Pinot are created using the ConnectionFactory class' utility methods to create connections to a Pinot cluster given a Zookeeper URL, a Java Properties object or a list of broker addresses to connect to."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'Connection connection = ConnectionFactory.fromZookeeper\n  ("some-zookeeper-server:2191/zookeeperPath");\n\nConnection connection = ConnectionFactory.fromProperties("demo.properties");\n\nConnection connection = ConnectionFactory.fromHostList\n  ("some-server:1234", "some-other-server:1234", ...);\n')),Object(a.b)("p",null,"Queries can be sent directly to the Pinot cluster using the ",Object(a.b)("inlineCode",{parentName:"p"},"Connection.execute(org.apache.pinot.client.Request)")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Connection.executeAsync(org.apache.pinot.client.Request)")," methods of Connection:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'ResultSetGroup resultSetGroup =\n  connection.execute(new Request("sql", "select * from foo..."));\n// OR\nFuture<ResultSetGroup> futureResultSetGroup =\n  connection.executeAsync(new Request("sql", "select * from foo..."));\n')),Object(a.b)("p",null,"Queries can also use a ",Object(a.b)("inlineCode",{parentName:"p"},"PreparedStatement")," to escape query parameters:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'PreparedStatement statement =\n    connection.prepareStatement(new Request("sql", "select * from foo where a = ?"));\nstatement.setString(1, "bar");\n\nResultSetGroup resultSetGroup = statement.execute();\n// OR\nFuture<ResultSetGroup> futureResultSetGroup = statement.executeAsync();\n')),Object(a.b)("p",null,"Results can be obtained with the various get methods in the first ResultSet, obtained through the getResultSet(int) method:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'Request request = new Request("sql", "select foo, bar from baz where quux = \'quuux\'");\nResultSetGroup resultSetGroup = connection.execute(request);\nResultSet resultTableResultSet = pinotResultSetGroup.getResultSet(0);\n\nfor (int i = 0; i < resultSet.getRowCount(); ++i) {\n  System.out.println("foo: " + resultSet.getString(i, 0));\n  System.out.println("bar: " + resultSet.getInt(i, 1));\n}\n')),Object(a.b)(i.a,{type:"info",mdxType:"Alert"}," The examples for the sections below this note, are for querying the PQL endpoint, which is deprecated and will be deleted soon. For more information about the 2 endpoints, visit [Querying Pinot](/docs/user-guide/query-pinot)."),Object(a.b)("p",null,"If queryFormat pql is used in the Request,  there are some differences in how the results can be accessed, depending on the query.\nIn the case of aggregation, each aggregation function is within its own ResultSet. A query with multiple aggregation function will return one result set per aggregation function, as they are computed in parallel."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'ResultSetGroup resultSetGroup =\n    connection.execute(new Request("pql", "select max(foo), min(foo) from bar"));\n\nSystem.out.println("Number of result groups:" +\n    resultSetGroup.getResultSetCount(); // 2, min(foo) and max(foo)\nResultSet resultSetMax = resultSetGroup.getResultSet(0);\nSystem.out.println("Max foo: " + resultSetMax.getInt(0));\nResultSet resultSetMin = resultSetGroup.getResultSet(1);\nSystem.out.println("Min foo: " + resultSetMin.getInt(0));\n')),Object(a.b)("p",null,"In case of aggregation group by, there will be as many ResultSets as the number of aggregations, each of which will contain multiple results grouped by a group key."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'ResultSetGroup resultSetGroup =\n    connection.execute(\n        new Request("pql", "select min(foo), max(foo) from bar group by baz"));\n\nSystem.out.println("Number of result groups:" +\n    resultSetGroup.getResultSetCount(); // 2, min(foo) and max(foo)\n\nResultSet minResultSet = resultSetGroup.getResultSet(0);\nfor(int i = 0; i < minResultSet.length(); ++i) {\n    System.out.println("Minimum foo for " + minResultSet.getGroupKeyString(i, 1) +\n        ": " + minResultSet.getInt(i));\n}\n\nResultSet maxResultSet = resultSetGroup.getResultSet(1);\nfor(int i = 0; i < maxResultSet.length(); ++i) {\n    System.out.println("Maximum foo for " + maxResultSet.getGroupKeyString(i, 1) +\n        ": " + maxResultSet.getInt(i));\n}\n')))}p.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,b=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return n?o.a.createElement(b,u(u({ref:t},s),{},{components:n})):o.a.createElement(b,u({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},130:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var u in r)n.call(r,u)&&r[u]&&e.push(u);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},137:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(130),i=n.n(a);n(58);t.a=function(e){var t=e.children,n=e.classNames,r=e.fill,a=e.icon,u=e.type,l=null;switch(u){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return o.a.createElement("div",{className:i()(n,"alert","alert--"+u,{"alert--fill":r,"alert--icon":!1!==a}),role:"alert"},!1!==a&&o.a.createElement("i",{className:i()("feather","icon-"+(a||l))}),t)}}}]);