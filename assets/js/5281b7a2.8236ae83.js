"use strict";(self.webpackChunkcatenax_ng=self.webpackChunkcatenax_ng||[]).push([[927],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1527:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return m}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:2,title:"Architecture"},c=void 0,u={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"High Level Architecture",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/product-knowledge/docs/architecture",editUrl:"https://github.com/catenax-ng/product-knowledge/edit/main/docs/architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/product-knowledge/docs/intro"},next:{title:"How To (Pilot)",permalink:"/product-knowledge/docs/howto"}},p={},m=[{value:"High Level Architecture",id:"high-level-architecture",level:2},{value:"Component Architecture",id:"component-architecture",level:2},{value:"Technology Stack",id:"technology-stack",level:2}],s={toc:m};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"high-level-architecture"},"High Level Architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Architecture High-Level",src:r(3376).Z,width:"1331",height:"991"})),(0,o.kt)("h2",{id:"component-architecture"},"Component Architecture"),(0,o.kt)("p",null,"The logical and technical architecture consists of three modules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ontology-Based Semantic Model and EDC Federated Data Catalogue"),(0,o.kt)("li",{parentName:"ul"},"EDC-Compatible Agent Backends",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Provider Agent "),(0,o.kt)("li",{parentName:"ul"},"Inference Agent"),(0,o.kt)("li",{parentName:"ul"},"Function Agent"))),(0,o.kt)("li",{parentName:"ul"},"EDC-Compatible UX components",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Skill (Consumer) Framework "),(0,o.kt)("li",{parentName:"ul"},"Knowledge Explorer"),(0,o.kt)("li",{parentName:"ul"},"Skill Development Environment")))),(0,o.kt)("h2",{id:"technology-stack"},"Technology Stack"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provider-Side Programming Language: Java > 12",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Eclipse Dataspace Connector"),(0,o.kt)("li",{parentName:"ul"},"Provider Agent: OnTop"),(0,o.kt)("li",{parentName:"ul"},"Inference Agent: Fuseki"),(0,o.kt)("li",{parentName:"ul"},"Function Agent: ..."))),(0,o.kt)("li",{parentName:"ul"},"Consumer-Side Programming Language: Typescript",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Skill Framework: React/Redux"),(0,o.kt)("li",{parentName:"ul"},"Knowledge Explorer: React/Redux & Catena-X Portal"),(0,o.kt)("li",{parentName:"ul"},"Skill Development Environment: React/Redux & Catena-X Portal")))))}d.isMDXComponent=!0},3376:function(e,t,r){t.Z=r.p+"assets/images/knowledge_agent_architecture-15fd310f1a667afd2468806a1803c95b.png"}}]);