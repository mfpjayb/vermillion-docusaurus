(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{53:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(6),i=(r(0),r(74)),o={id:"navigate.md",title:"Navigate",sidebar_label:"Navigate",slug:"/navigate"},l={unversionedId:"navigate.md",id:"navigate.md",isDocsHomePage:!1,title:"Navigate",description:"Navigate allows us to redirect to a route programmatically.",source:"@site/docs\\navigate.md",slug:"/navigate",permalink:"/vermillion-docusaurus/docs/navigate",editUrl:"https://github.com/mfpjayb/vermillion-docusaurus/docs/navigate.md",version:"current",sidebar_label:"Navigate",sidebar:"someSidebar",previous:{title:"Router",permalink:"/vermillion-docusaurus/docs/router"},next:{title:"Store",permalink:"/vermillion-docusaurus/docs/store"}},c=[{value:"Register the plugin",id:"register-the-plugin",children:[]},{value:"Programmatically navigate",id:"programmatically-navigate",children:[]},{value:"Navigate parameters",id:"navigate-parameters",children:[]}],u={rightToc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Navigate allows us to redirect to a route programmatically."),Object(i.b)("h2",{id:"register-the-plugin"},"Register the plugin"),Object(i.b)("p",null,"Navigate plugin needs to be registered in a module before we can use it."),Object(i.b)("p",null,"Here's an example on how to register this plugin:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Module, Navigate } from 'vermillion';\n\nconst module = new Module({\n    ...\n});\n\nmodule.plugin(Navigate);\n...\n")),Object(i.b)("h2",{id:"programmatically-navigate"},"Programmatically navigate"),Object(i.b)("p",null,"Here's an example on how to navigate to a route programmatically:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"<template>\n    ...\n</template>\n\nexport default class SampleComponent {\n    btnClick() {\n        ...\n        this.$navigate('/route/path');\n    }\n}\n")),Object(i.b)("h2",{id:"navigate-parameters"},"Navigate parameters"),Object(i.b)("p",null,"Navigate has three parameters, first is the url, second is the state and third is the title.\nThe second and third parameters are optional."),Object(i.b)("p",null,"For more information on url, state and title please follow this link at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/History/pushState"}),"developer.mozilla.org"),"."))}p.isMDXComponent=!0},74:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return g}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),p=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,g=s["".concat(o,".").concat(d)]||s[d]||m[d]||i;return r?n.a.createElement(g,l(l({ref:t},u),{},{components:r})):n.a.createElement(g,l({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);