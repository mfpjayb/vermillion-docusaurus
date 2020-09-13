(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{64:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(74)),c={id:"quick-start.md",title:"Quick start",sidebar_label:"Quick start",slug:"/quick-start"},i={unversionedId:"quick-start.md",id:"quick-start.md",isDocsHomePage:!1,title:"Quick start",description:"There are many ways to setup a vermillion project.",source:"@site/docs\\quick-start.md",slug:"/quick-start",permalink:"/vermillion-docusaurus/docs/quick-start",editUrl:"https://github.com/mfpjayb/vermillion-docusaurus/docs/quick-start.md",version:"current",sidebar_label:"Quick start",sidebar:"someSidebar",previous:{title:"What is vermillion?",permalink:"/vermillion-docusaurus/docs/"},next:{title:"Module",permalink:"/vermillion-docusaurus/docs/module"}},l=[{value:"Create an app",id:"create-an-app",children:[]},{value:"Project structure",id:"project-structure",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"There are many ways to setup a vermillion project.\nOne way is to use the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/vermillion-docusaurus/docs/cli-installation"}),"CLI")," but the easiest way is to clone the starter app from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mfpjayb/vermillion-starter-app"}),"GitHub"),"."),Object(o.b)("h2",{id:"create-an-app"},"Create an app"),Object(o.b)("p",null,"Clone the starter app from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/mfpjayb/vermillion-starter-app"}),"GitHub"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/mfpjayb/vermillion-starter-app.git vm-app\n")),Object(o.b)("p",null,"After cloning the repository, change directory into the starter project"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"cd vm-app\n")),Object(o.b)("p",null,"then install the dependencies"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install\n")),Object(o.b)("p",null,"Start the local development server by running the following command:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm start\n")),Object(o.b)("p",null,"You can preview your site in your browser on ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:4000")),Object(o.b)("h2",{id:"project-structure"},"Project structure"),Object(o.b)("p",null,"After the setup is complete, you can see the file structure of project in the current directory."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"index.html\n\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 main.js\n    \u251c\u2500\u2500 App.js\n    \u2514\u2500\u2500 assets/\nnode_modules/\npackage.json\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"index.html")," as the main HTML page that is served when someone visits the site."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/App.js")," the root component. Any other components must be a child of this component."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/main.js")," the main entry point of your application. It bootstrap the root module of the entire project."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/assets")," this is the recommended directory to put all of the asset files."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"package.json")," list all the dependencies and configurations of your project."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"node_modules/")," this is where the installed node packages are located.")))}s.isMDXComponent=!0},74:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return r?a.a.createElement(d,i(i({ref:t},p),{},{components:r})):a.a.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);