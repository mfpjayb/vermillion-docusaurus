(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),l=(n(0),n(74)),c={id:"cli-commands.md",title:"Commands",sidebar_label:"Commands",slug:"/cli-commands"},o={unversionedId:"cli-commands.md",id:"cli-commands.md",isDocsHomePage:!1,title:"Commands",description:"Here is a list of available commands for vermillion cli:",source:"@site/docs\\cli-commands.md",slug:"/cli-commands",permalink:"/vermillion-docusaurus/docs/cli-commands",editUrl:"https://github.com/mfpjayb/vermillion-docusaurus/blob/master/docs/cli-commands.md",version:"current",sidebar_label:"Commands",sidebar:"someSidebar",previous:{title:"Installation",permalink:"/vermillion-docusaurus/docs/cli-installation"}},i=[{value:"Generate types",id:"generate-types",children:[]}],b={rightToc:i};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Here is a list of available commands for vermillion cli:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Command"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Syntax"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"new"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"vm new <project_name>")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate a new vermillion application.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"serve"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"vm serve")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Serve the application locally for development.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"generate"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"vm generate <type> <name>")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate a vermillion file based on the given type and name. See ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/cli-commands#generate-types"}),"generate types")," section for more info.")))),Object(l.b)("h2",{id:"generate-types"},"Generate types"),Object(l.b)("p",null,"Here's a list of available types for the generate command:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"component"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate a component file.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"middleware"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate a middleware file.")))),Object(l.b)("p",null,"Here's an example on how to use the generate command:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"vm generate component Sidebar\n")),Object(l.b)("p",null,"This will generate a component file in ",Object(l.b)("inlineCode",{parentName:"p"},"src/Sidebar.js"),"."))}m.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),m=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=m(n),s=a,u=p["".concat(c,".").concat(s)]||p[s]||d[s]||l;return n?r.a.createElement(u,o(o({ref:t},b),{},{components:n})):r.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<l;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);