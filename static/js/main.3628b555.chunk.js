(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{345:function(e,t,n){},346:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){"use strict";n.r(t);var i=n(5),a=n.n(i),c=n(56),o=n.n(c),s=n(14),r=(n(62),n(63),n(64),n(1));function l(){var e=Object(i.useRef)(null),t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(i.useState)(window.location.href.includes("#")&&window.location.href.split("#").pop()||""),l=Object(s.a)(o,2),d=l[0],j=l[1];function u(){c(!a)}function m(e,t,n){return Object(r.jsxs)("li",{className:(i=t,"home"===i&&""===d||i===d?"heder-active-link":""),onClick:a?u:function(){},children:[n,Object(r.jsx)("a",{className:"hover-underline-animation",href:"#".concat(t),children:e})]});var i}return Object(i.useEffect)((function(){var t=0;window.addEventListener("hashchange",(function(e){var t,n;j((null===e||void 0===e||null===(t=e.newURL)||void 0===t||null===(n=t.split("#"))||void 0===n?void 0:n.pop())||"")})),window.onscroll=function(){if(e.current){var n=window.pageYOffset;e.current.style.cssText=t>n?0===n?"":"top: 0px;\n                        --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),\n                            0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;\n                        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),\n                            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow) !important; ":"top: -200px;",t=n}}}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("header",{ref:function(t){return e.current=t},className:"app-header",children:[Object(r.jsx)("img",{className:"app-logo",src:"/icons/apple-touch-icon.png",alt:""}),Object(r.jsx)("div",{style:{flex:1}}),Object(r.jsxs)("div",{onClick:u,className:"hamberger-menu ".concat(a?"open":""),children:[Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{}),Object(r.jsx)("span",{})]}),Object(r.jsx)("aside",{onClick:function(e){return e.stopPropagation()},className:"drawer-menu ".concat(a?"drawer-menu-open":""),children:Object(r.jsxs)("ol",{className:"drawer-list",children:[m("Home","home",Object(r.jsx)(N,{className:"menu-io-icon"})),m("About","about",Object(r.jsx)(y,{className:"menu-io-icon"})),m("Experience","experience",Object(r.jsx)(k,{className:"menu-io-icon"})),m("Projects","projects",Object(r.jsx)(L,{className:"menu-io-icon"})),m("Contact","contact",Object(r.jsx)(F,{className:"menu-io-icon"}))]})}),a&&Object(r.jsx)("div",{onClick:function(e){e.stopPropagation(),u()},className:"background-cover-layer"})]})})}var d={home:{wish:"Hi There, I'm",name:"Lijo Vijayan",description1:"I loves to bring happiness with technology.",description2:"I\u2019m a software developer specializing in development of web and mobile applications with exceptional digital experiences.",directLinkText:"Get In Touch"},about:{title:"About Me",description:["Hello, My name is Lijo. I'm a self-taught developer focusing on developing software that revolutionizes the cosmos. \n            My primary area of interest is web application development; besides, I love to create interactive hybrid mobile applications.\n            ","My passion for software development has begun during my college studies and decided to become \n                a successful solution architect in near future and I'm heading towards it. \n            For the last few years, I had the opportunity to work with amazing and ambitious developers \n                and we developed softwares that bring happiness to the users.","Here are a few technologies I\u2019ve been working with recently:"],frameworks:[{name:"React.Js",rating:8.5},{name:"Angular",rating:8.5},{name:"Node.Js",rating:8.5},{name:"React Native",rating:8.5},{name:"Flutter",rating:8.5},{name:"Tailwind CSS",rating:7}]},experience:{title:"Where I\u2019ve Worked",firms:[{shortName:"Blue Ripples",longName:"Blue Ripples Technologies",designation:"Software Developer",url:"https://www.blueripples.com",from:"July 2019",to:"Present",experiences:["Collaborated with project managers and creative teams to develop, \n                    re-architect and deliver performance optimized and \n                    user-friendly single page web applications.","Provided prompt solutions for complex problems as a software \n                    developer of the development team.","Followed Design patterns to enhance code reuse and accommodate change by supplying \n                    well-tested mechanisms for delegation and composition, and other component-based\n                    reuse techniques.","Followed Design patterns to enhance code reuse and accommodate change by supplying \n                    well-tested mechanisms for delegation and composition, and other component-based\n                    reuse techniques."]}]},projects:{title:"Projects",featured:[{name:"Channel Logix",description:"Channel logix is a enterprise resource planning platform for sales professionals. \n                    Its a cloud based application to manage various workflows that allows manufacturing \n                    and distribution businesses the abolity to gain greater visibility into all operations \n                    while increasing speed, efficency, and overall customer satisfication.",technologies:["React","Redux","Antd"],imageURL:"".concat("","/images/1.jpg")},{name:"Client Details Protected by NDA",description:"An analytics and reporting platform for trading and banking services \n                    which provides detailed performance and business level analysis of trading \n                    flows and market data for ultimalte visibility.",technologies:["Angular","Node.js","Sequelize","Maria DB","SQLite"],imageURL:"".concat("","/images/2.jpg"),gitURL:"https://github.com/lijovijayan"},{name:"Personal Portfolio",description:"A minimal and elegant portfolio which is adaptive to various devices and browsers.",technologies:["React","Tailwind CSS","Jest","Particles.Js"],imageURL:"".concat("","/images/3.jpg"),gitURL:"https://github.com/lijovijayan"}],noteworthyProjects:"Other Noteworthy Projects",other:[{name:"Slate",description:"E-learning platform UI developed with Flutter framework. It's an application \n                    for schools and teaching professionals to share educational content and \n                    evaluate students through a virtual classroom environment.",technologies:["Flutter","Delta player","Provider"]},{name:"Darkhold",description:"Simple and outstanding app to organize day-to-day tasks with a very easy-to-use interface. \n                Users can create, group, update and remove tasks based on needs. implemented smooth animations on controls \n                that provide the user an interactive experience.",technologies:["Flutter","SQLite","Provider"],gitURL:"https://github.com/lijovijayan/darkhold",demoURL:"https://itsallwidgets.com/darkhold"},{name:"Delta player",description:"A video player plugin for Flutter framework with custom animation controls. \n                    This plugin enhances the video player interactivity \n                    and visual representation of video player controls with smooth animations. \n                    Delta player plugin will support on both android and iOS devices.",technologies:["Flutter"],demoURL:"https://github.com/lijovijayan"},{name:"VDV Digital",description:"An interactive hybrid mobile application for cable tv users to manage packages \n                and make payments over the application, integrated payment gateway with webview \n                for seamless transactions. Users can report and track concerns through complaints panel, \n                minimal and elegant UI provides a smooth experience for the users.",technologies:["Flutter","Webview","Dio","Provider"],gitURL:"https://github.com/lijovijayan",demoURL:"https://github.com/lijovijayan"},{name:"Vote X",description:"Multi-purpose online voting system powered by blockchain-inspired technology to secure polling records. \n                    Users can create polls and manage voters and candidates list with interactive UI, voters will have \n                    unique identification besides that, polling can be done virtually over the Web page - done as an academic project.",technologies:["Vannila Js","PHP","MySQL","Bootstrap"]},{name:"Providence",description:"A Hospital management software to manage patient records and to deal with day-to-day \n                operations and management of the hospital activities - done as an academic project.",technologies:["Java","MySQL","Netbeans"],gitURL:"https://github.com/lijovijayan"},{name:"Localization Demo App",description:"Simple demo application developed with flutter that supports I18N support from server content. \n                    localization records will be fetched from a remote server and locally cache for performance improvements.",technologies:["Flutter","Provider"]},{name:"Tic-Tac-Toe",description:"An interactive Tic-Tac-toe(noughts and crosses, or Xs and Os) game developed with Angular framework. \n                This classic game contributes to brain development in numerous ways including the understanding of predictability, \n                problem-solving, spatial reasoning, and turn-taking.",technologies:["Flutter"]},{name:"Content Listing App Demo",description:"Responsive content listing app demo with React and Redux for beginners to learn Redux, \n                Redux-thunk, and lazy loading of contents to improve application performance.",technologies:["React","Redux","Tailwind CSS"],gitURL:"https://github.com/lijovijayan/react-content-listing",demoURL:"https://lijovijayan.github.io/react-content-listing"},{name:"Collatz conjucture visualizer",description:"Collatz conjucture series visualizer with Charts.Js",technologies:["React","Redux","Tailwind CSS"],gitURL:"https://github.com/lijovijayan/collatz-conjecture",demoURL:"https://lijovijayan.github.io/collatz-conjecture"},{name:"Instagram Clone UI",description:"Instagram clone UI developed with React-Native.",technologies:["React-Native"]}],showMore:"Show More",showLess:"Show Less"},contact:{title:"Get In Touch",description:"I\u2019m currently open for new opportunities, my inbox is always open. \n        Whether you have a question or just want to say hi, I\u2019ll try my best to get back to you!",linkText:"Say Hello!"},links:{github:"https://github.com/lijovijayan",linkedIn:"https://www.linkedin.com/in/lijovijayan/",email:"lijovijayan00@gmail.com",twitter:"https://twitter.com/lijovijayan00",instagram:"https://instagram.com/lijovijayan",facebook:""}};n(66);function j(){return Object(r.jsx)("div",{className:"email-wrapper",children:Object(r.jsx)("a",{href:"mailto:".concat(d.links.email),className:"email-link",children:d.links.email})})}n(67);var u=n(17);function m(e){window.open(e,"_blank","noopener,noreferrer")}function p(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){fetch(d.links.instagram).then((function(){return a(!0)})).catch((function(e){return a(!1)}))})),Object(r.jsxs)("div",{className:"links-wrapper",children:[Object(r.jsx)(u.c,{className:"my-3 icon",onClick:function(){return m(d.links.linkedIn)}}),Object(r.jsx)(u.e,{className:"my-3 icon",onClick:function(){return m(d.links.twitter)}}),Object(r.jsx)(u.a,{className:"my-3 icon",onClick:function(){return m(d.links.github)}}),Object(r.jsx)(u.b,{className:"my-3 icon ".concat(n?"":"disabled"),onClick:function(){return n&&m(d.links.instagram)}}),Object(r.jsx)("div",{className:"h-4"})]})}var h;n(68);function b(e){var t=e.name,n=e.description,i=e.technologies,a=e.imageURL,c=e.gitURL,o=e.direction;return Object(r.jsxs)("div",{className:"featured-project-card-wrapper ".concat(o===h.LEFT?"featured-align-left":""),children:[Object(r.jsxs)("div",{className:"featured-thumb",children:[Object(r.jsx)("img",{draggable:!1,src:a,alt:""}),Object(r.jsx)("div",{className:"thumb-filter"})]}),Object(r.jsxs)("div",{className:"featured-content",children:[Object(r.jsx)("header",{className:"featured-title",children:"Featured Project"}),Object(r.jsx)("title",{className:"featured-header",children:t}),Object(r.jsx)("div",{className:"featured-description",children:n}),Object(r.jsx)("ol",{className:"featured-technologies",children:i.map((function(e,t){return Object(r.jsx)("li",{className:"featured-technology",children:e},"comp-featured-proj-card-item-".concat(t))}))}),Object(r.jsx)("footer",{className:"featured-footer",children:c&&Object(r.jsx)(u.a,{className:"featured-git-icon",onClick:function(){return m(c)}})})]})]})}!function(e){e.RIGHT="RIGHT",e.LEFT="LEFT"}(h||(h={}));var f=n(21);n(69);function v(e){var t=e.name,n=e.gitURL,i=e.description,a=e.demoURL,c=e.technologies;return Object(r.jsxs)("div",{className:"project-card-wrapper",children:[Object(r.jsxs)("div",{className:"project-card-header",children:[Object(r.jsx)(u.d,{className:"project-main-icon"}),n&&Object(r.jsx)(u.a,{className:"project-git-icon",onClick:function(){return m(n)}}),a&&Object(r.jsx)(f.d,{className:"project-demo-icon",onClick:function(){return m(a)}})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:"project-card-title hover-underline-animation",children:t}),Object(r.jsx)("div",{className:"project-card-content",children:i})]}),Object(r.jsx)("div",{className:"project-card-footer",children:Object(r.jsx)("ol",{className:"project-card-tech",children:c.map((function(e,t){return Object(r.jsx)("li",{className:"project-card-tech-item",children:e},"comp-proj-card-item-".concat(t))}))})})]})}n(70);function x(){return Object(r.jsxs)("footer",{className:"app-footer",children:["Developed by \xa0",Object(r.jsx)("span",{onClick:function(){return m(d.links.linkedIn)},className:"app-footer-link hover-underline-animation",children:"Lijo Vijayan"}),"\xa0| UX credits goes to\xa0",Object(r.jsx)("span",{onClick:function(){return m("https://www.linkedin.com/in/bchiang7")},className:"app-footer-link hover-underline-animation",children:"Brittany Chiang"})]})}n(71);function O(e){var t=e.children,n=e.delay,a=void 0===n?"0s":n,c=e.duration,o=void 0===c?"0.5s":c,s=e.slideFrom,l=void 0===s?300:s,d=Object(i.useRef)(null),j=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e=new IntersectionObserver((function(e,t){var n=e[0];d.current&&j.current&&n.isIntersecting&&(console.log("animation started"),j.current.className+=" slide-into-view",d.current&&t.unobserve(d.current))}));d.current&&e.observe(d.current)}),[]),Object(r.jsx)("div",{ref:function(e){return d.current=e},className:"animation-wrapper",children:Object(r.jsx)("div",{ref:function(e){return j.current=e},style:{transitionDelay:a,transitionDuration:o,transform:"translateY(".concat(l,"px)")},className:"content-wrapper",children:t})})}n(72);function g(){return Object(r.jsx)("div",{className:"splash-screen",children:Object(r.jsxs)("div",{className:"multi-ripple",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:"app-logo",src:"/icons/apple-touch-icon.png",alt:""})})]})})}var w=n(15);function N(e){return Object(r.jsx)(f.c,Object(w.a)({},e))}function y(e){return Object(r.jsx)(f.f,Object(w.a)({},e))}function k(e){return Object(r.jsx)(f.a,Object(w.a)({},e))}function L(e){return Object(r.jsx)(f.b,Object(w.a)({},e))}function F(e){return Object(r.jsx)(f.e,Object(w.a)({},e))}n(73);function R(e){var t=e.longName,n=e.designation,i=e.url,a=e.from,c=e.to,o=e.experiences;return Object(r.jsxs)("div",{className:"experience-card",children:[Object(r.jsxs)("section",{className:"title",children:[Object(r.jsxs)("span",{className:"designation",children:[n," "]}),Object(r.jsxs)("span",{className:"organization hover-underline-animation",onClick:function(){return m(i)},children:["@ ",t]})]}),Object(r.jsx)("section",{className:"sub-title",children:"".concat(a,"-").concat(c)}),Object(r.jsx)("section",{className:"content",children:Object(r.jsx)("ol",{children:o.map((function(e,t){return Object(r.jsx)(O,{slideFrom:50,children:Object(r.jsx)("li",{className:"content-item",children:e})},"exp-desc-item-".concat(t))}))})})]})}function C(){var e=Object(i.useMemo)((function(){return d.experience.firms}),[]),t=Object(i.useState)(0),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.jsx)("section",{id:"experience",className:"experience-module",children:Object(r.jsxs)("div",{className:"experience-wrapper",children:[Object(r.jsx)(O,{slideFrom:20,children:Object(r.jsxs)("title",{className:"header",children:[Object(r.jsx)(k,{className:"section-header-icon"}),d.experience.title]})}),Object(r.jsx)(O,{delay:"0.5s",slideFrom:50,children:Object(r.jsxs)("div",{className:"experience-content",children:[Object(r.jsxs)("div",{className:"org-name-wrapper",children:[Object(r.jsx)("div",{className:"line exp-tab-line",children:Object(r.jsx)("div",{className:"line-marker marker-".concat(a)})}),Object(r.jsx)("div",{className:"org-name-container",children:e.map((function(e,t){return Object(r.jsx)("button",{onClick:function(){return c(t)},className:"org-name ".concat(a===t?"active-btn":""),children:e.shortName},"exp-org-item-".concat(t))}))})]}),Object(r.jsx)(R,Object(w.a)({},e[a]))]})})]})})}n(74);function I(){return Object(r.jsxs)("div",{className:"welcome-measage",children:[Object(r.jsx)(O,{slideFrom:20,children:Object(r.jsx)("div",{className:"header",children:d.home.wish})}),Object(r.jsx)(O,{delay:"0.3s",slideFrom:20,children:Object(r.jsxs)("div",{className:"title-1",children:[Object(r.jsx)("span",{className:"hover-underline-animation",children:d.home.name}),"."]})}),Object(r.jsx)(O,{delay:"1.2s",slideFrom:20,children:Object(r.jsx)("div",{className:"title-2",children:d.home.description1})}),Object(r.jsx)(O,{delay:"1.5s",slideFrom:20,children:Object(r.jsx)("div",{className:"content",children:d.home.description2})}),Object(r.jsx)(O,{delay:"2s",slideFrom:20,children:Object(r.jsx)("div",{onClick:function(){return m(d.links.linkedIn)},className:"home-action-button app-button",children:Object(r.jsx)("span",{className:"hover-underline-animation",children:d.home.directLinkText})})})]})}var T=n(57),S=n.n(T);function U(e){var t=e.isContentLoaded,n=Object(i.useState)(!1),a=Object(s.a)(n,2),c=a[0],o=a[1];return console.log(c),Object(r.jsxs)("section",{id:"home",className:"home-module",children:[Object(r.jsx)(P,{setPartilesLoaded:function(){setTimeout((function(){t(),setTimeout((function(){o(!0)}),800)}),3e3)}}),c&&Object(r.jsx)(I,{})]})}var P=a.a.memo(z,(function(){return!0}));function z(e){var t=e.setPartilesLoaded;return Object(r.jsx)(S.a,{id:"tsparticles",init:function(e){console.log(e)},loaded:function(e){t()},options:{background:{color:{value:"transparant"}},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!0,mode:"bubble"},resize:!0},modes:{bubble:{color:"#64ffda",distance:200,duration:1,opacity:.8,size:4},push:{quantity:1}}},particles:{color:{value:"#8892b0"},links:{color:"#8892b0",distance:150,enable:!0,opacity:.1,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:1,straight:!1},number:{density:{enable:!0,value_area:800},value:80},opacity:{value:.1},shape:{type:"circle"},size:{random:!0,value:3}},detectRetina:!0}})}n(345);function D(){var e=Object(i.useMemo)((function(){return d.about.frameworks}),[]);return Object(r.jsxs)("div",{className:"about-card",children:[Object(r.jsx)("section",{className:"content",children:d.about.description.map((function(e,t){return Object(r.jsx)(O,{slideFrom:50,children:Object(r.jsx)("p",{children:e})},"about-desc-item-".concat(t))}))}),Object(r.jsx)("section",{className:"footer",children:Object(r.jsx)(O,{slideFrom:50,children:Object(r.jsx)("ol",{className:"technologies-list",children:e.map((function(e,t){return Object(r.jsx)("li",{className:"technology-item",children:e.name},"about-tech-item-".concat(t))}))})})})]})}function M(){return Object(r.jsx)("section",{id:"about",className:"about-module",children:Object(r.jsxs)("div",{className:"about-wrapper",children:[Object(r.jsx)(O,{slideFrom:20,children:Object(r.jsxs)("section",{className:"header",children:[Object(r.jsx)(y,{className:"section-header-icon"}),d.about.title]})}),Object(r.jsx)(O,{delay:"0.5s",slideFrom:50,children:Object(r.jsx)(D,{})})]})})}n(346);function A(){var e=Object(i.useMemo)((function(){return d.projects.featured}),[]);return Object(r.jsxs)("div",{className:"featured-projects",children:[Object(r.jsx)(O,{slideFrom:20,children:Object(r.jsxs)("div",{className:"project-screen-title",children:[Object(r.jsx)(L,{className:"section-header-icon"}),d.projects.title]})}),e.map((function(e,t){return Object(r.jsx)(O,{slideFrom:70,delay:"0.3s",children:Object(r.jsx)(b,Object(w.a)(Object(w.a)({},e),{},{direction:t%2===0?h.RIGHT:h.LEFT}))},"proj-featured-item-".concat(t))}))]})}function E(){var e=Object(i.useState)(1),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(i.useMemo)((function(){return d.projects.other.slice(0,6*n)}),[n]),o=Object(i.useMemo)((function(){return d.projects.other.length>6*n}),[n]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O,{slideFrom:20,children:Object(r.jsx)("div",{className:"other-projects-title",children:d.projects.noteworthyProjects})}),Object(r.jsx)("ol",{className:"other-projects",children:c.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)(O,{slideFrom:70,delay:"0.3s",children:Object(r.jsx)(v,Object(w.a)({},e))})},"proj-other-item-".concat(t))}))}),Object(r.jsx)(O,{delay:"2s",slideFrom:20,children:Object(r.jsx)("div",{onClick:function(){a(o?n+1:n-1)},className:"projects-more-button app-button",children:Object(r.jsx)("span",{className:"hover-underline-animation",children:o?d.projects.showMore:d.projects.showLess})})})]})}function H(){return Object(r.jsxs)("section",{id:"projects",className:"projects-module",children:[Object(r.jsx)(A,{}),Object(r.jsx)(E,{})]})}n(347);function J(){return Object(r.jsx)("div",{className:"about-card",children:Object(r.jsx)("section",{className:"content",children:d.contact.description})})}function B(){return Object(r.jsx)("section",{id:"contact",className:"contact-module",children:Object(r.jsxs)("div",{className:"contact-wrapper",children:[Object(r.jsx)(O,{slideFrom:20,children:Object(r.jsxs)("title",{className:"title",children:[Object(r.jsx)(F,{className:"section-header-icon"}),d.contact.title]})}),Object(r.jsx)(O,{delay:"0.5s",slideFrom:50,children:Object(r.jsx)(J,{})}),Object(r.jsx)(O,{delay:"2s",slideFrom:20,children:Object(r.jsx)("div",{onClick:function(){return m(d.links.linkedIn)},className:"contact-action-button app-button",children:Object(r.jsx)("span",{className:"hover-underline-animation",children:d.contact.linkText})})})]})})}var q=function(){var e=Object(i.useState)(!0),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)(r.Fragment,{children:[n&&Object(r.jsx)(g,{}),Object(r.jsxs)("div",{className:"app-container ".concat(n?"content-loading":""),children:[Object(r.jsx)(l,{}),Object(r.jsx)(j,{}),Object(r.jsx)(p,{}),Object(r.jsxs)("div",{className:"app-content-wrapper",children:[Object(r.jsx)(U,{isContentLoaded:function(){a(!1)}}),Object(r.jsx)(M,{}),Object(r.jsx)(C,{}),Object(r.jsx)(H,{}),Object(r.jsx)(B,{}),Object(r.jsx)(x,{})]})]})]})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,349)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),c(e),o(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(q,{})}),document.getElementById("root")),V()},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){}},[[348,1,2]]]);
//# sourceMappingURL=main.3628b555.chunk.js.map