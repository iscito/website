"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[222],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(a),m=r,h=f["".concat(s,".").concat(m)]||f[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},5968:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={slug:"PLC4X Kafka Integration",title:"PLC4X Kafka Integration",authors:"hutcheb",tags:["plc4x","kafka","opcua","modbus","s7","ads","eip"]},i=void 0,l={permalink:"/blog/PLC4X Kafka Integration",editUrl:"https://github.com/iscito/website/tree/main/blog/2022-09-12-plc4x-kafka/2022-09-12-plc4x-kafka.md",source:"@site/blog/2022-09-12-plc4x-kafka/2022-09-12-plc4x-kafka.md",title:"PLC4X Kafka Integration",description:"Outline",date:"2022-09-12T00:00:00.000Z",formattedDate:"September 12, 2022",tags:[{label:"plc4x",permalink:"/blog/tags/plc-4-x"},{label:"kafka",permalink:"/blog/tags/kafka"},{label:"opcua",permalink:"/blog/tags/opcua"},{label:"modbus",permalink:"/blog/tags/modbus"},{label:"s7",permalink:"/blog/tags/s-7"},{label:"ads",permalink:"/blog/tags/ads"},{label:"eip",permalink:"/blog/tags/eip"}],readingTime:2.185,hasTruncateMarker:!1,authors:[{name:"Ben Hutcheson",title:"Maintainer of iscito",url:"https://github.com/hutcheb",imageURL:"https://github.com/hutcheb.png",key:"hutcheb"}],frontMatter:{slug:"PLC4X Kafka Integration",title:"PLC4X Kafka Integration",authors:"hutcheb",tags:["plc4x","kafka","opcua","modbus","s7","ads","eip"]},prevItem:{title:"PLC4X OPCUA Server",permalink:"/blog/PLC4X OPCUA Server"}},s={authorsImageUrls:[void 0]},c=[{value:"Outline",id:"outline",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"outline"},"Outline"),(0,r.kt)("p",null,"PLC4x is an open source industrial communication protocol package that allows you to pull time series data from\nPLCs or even SCADA packages. Kafka is an event streaming platform that allows you to publish messages (e.g. JSON messages) and have\nthem stored in a distributed store called a topic. With the PLC4X Kafka connector you're able to read data from a PLC\nand publish messages to Kafka, and vice versa, you're able to read messages from Kafka and write data to PLC tags."),(0,r.kt)("p",null,"Apache Kafka has become fairly ubiquitous as the event streaming platform, Azure Events Hub even has a Kafka compatible\ninterface. This means that you could have a Kafka cluster on premise and then mirror data from it to Azure Events Hub,\n(or any number of Kafka based cloud platforms e.g. Confluent) which makes it incredibly easy to integrate with other\nAzure or online services."),(0,r.kt)("p",null,"The PLC4X Kafka integration is made of a source and sink Kafka Connect worker and allows you to specify any protocol that\nPLC4X supports e.g. Modbus, OPCUA, S7, Ethernet/IP, more information is available on the ",(0,r.kt)("a",{parentName:"p",href:"https://plc4x.apache.org"},"PLC4X Driver Page"),".\nThe Connect workers are also made available within the Counfluent Hub for easy download. Additional information is available on how\nto set it up is available at ",(0,r.kt)("a",{parentName:"p",href:"https://plc4x.apache.org"},"PLC4X Kafka Integration"),"."),(0,r.kt)("p",null,"One of the primary use cases of this is to read time series data from a PLC, do some real time analysis (averaging,\nforecasting, ML) on it and then send it to a database or back to a PLC/SCADA package."),(0,r.kt)("p",null,"Or you could poll data from an external service (weather forecast, energy price) and then send it\nto the Kafka cluster and then in turn to a PLC or SCADA system. You could place a Kafka cluster within the integration layer and have Kafka Connect workers\nperform this reliably and securely."),(0,r.kt)("p",null,"Another example use case would be to read data from one PLC and have that sent in realtime to another PLC. Although not a\ntypical way of doing inter-PLC communication, it has the added benefit of having a highly redundant centralized cluster\nthat is completely customizable. You don\xb4t have to play around with non-native communication protocols for each PLC,\nyou can just use PLC4X. This also gives you the option to modify the messages or perform analysis before sending to the\ndestination PLC."),(0,r.kt)("p",null,"Overall having a Kafka cluster or even Azure Events Hub utilizing the PLC4X connectors as part your industrial tech\nstack has a number of benefits and could be a worthy addition, especially if you are looking at integrating third party\nservices with SCADA or PLC packages."))}p.isMDXComponent=!0}}]);