(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(t,e,a){"use strict";a.r(e);var l=a(0),i=a(165),s=a.n(i),r=a(281),c=a(143),n=function(){return l.createElement(c.StaticQuery,{query:"2838470174",render:function(t){return l.createElement("div",{id:"consumers"},l.createElement("h2",null,"Consumers"),l.createElement("div",{className:"mdl-grid"},s()(t.consumers.edges,"node.title").map(function(t){var e=t.node;return l.createElement("div",{key:e.id,className:"mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-shadow--2dp"},l.createElement("div",{className:"mdl-card__title"},l.createElement("h2",{className:"mdl-card__title-text"},e.title)),l.createElement("div",{className:"mdl-card__supporting-text"},"Maintained by ",e.author),l.createElement("div",{className:"mdl-card__actions mdl-card--border"},l.createElement("a",{className:"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",href:e.url},"Atom Package Manager"),l.createElement("a",{className:"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",href:e.code},"Source Code on GitHub")))})))},data:r})},o=a(285),p=function(){return l.createElement(c.StaticQuery,{query:"3151444894",render:function(t){return l.createElement("footer",{className:"mdl-mini-footer"},l.createElement("div",{className:"mdl-mini-footer__left-section"},l.createElement("div",{className:"mdl-logo"},t.site.siteMetadata.title)))},data:o})},u=a(286),m=a(287),g=function(){return l.createElement(c.StaticQuery,{query:"484679757",render:function(t){return l.createElement(m.Helmet,{defaultTitle:t.site.siteMetadata.title},l.createElement("meta",{name:"description",content:t.site.siteMetadata.description}),l.createElement("link",{rel:"canonical",href:t.site.siteMetadata.url}),l.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}))},data:u})},d=a(295),M=a(296),L=a.n(M),k=function(){return l.createElement(c.StaticQuery,{query:"134289982",render:function(t){return l.createElement("div",{className:"header content-grid mdl-grid"},l.createElement("img",{className:"mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone",src:L.a,alt:"",width:"200",height:"200"}),l.createElement("h1",{className:"mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},t.site.siteMetadata.title),l.createElement("h3",{className:"mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet mdl-cell--4-col-phone"},t.site.siteMetadata.description))},data:d})},j=a(297),N=function(){return l.createElement(c.StaticQuery,{query:"560389779",render:function(t){return l.createElement(l.Fragment,null,l.createElement("header",{className:"navbar mdl-layout__header"},l.createElement("div",{className:"mdl-layout__header-row"},l.createElement("span",{className:"mdl-layout-title"},"AtomLinter"),l.createElement("div",{className:"mdl-layout-spacer"}),l.createElement("nav",{className:"mdl-navigation mdl-layout--large-screen-only"},l.createElement("a",{className:"mdl-navigation__link",href:"//github.com/AtomLinter/atomlinter.github.io#adding-a-linter-provider"},"Add your Linter"),l.createElement("a",{className:"mdl-navigation__link",href:"//atom.io/packages/linter"},"Atom Package Manager"),l.createElement("a",{className:"mdl-navigation__link",href:"//atom-slack.herokuapp.com/"},"Slack"),l.createElement("a",{className:"mdl-navigation__link",href:"//github.com/AtomLinter/Linter"},"GitHub")))),l.createElement("div",{className:"mdl-layout__drawer"},l.createElement("span",{className:"mdl-layout-title"},"AtomLinter"),l.createElement("nav",{className:"mdl-navigation"},t.allProvidersYaml.edges.map(function(t){var e=t.node;return l.createElement("a",{key:e.id,className:"mdl-navigation__link",href:"#"+e.modal},e.title)}),l.createElement("a",{className:"mdl-navigation__link",href:"//github.com/AtomLinter/atomlinter.github.io#adding-a-linter-provider"},"Add your Linter"))))},data:j})},h=a(298),y=function(){return l.createElement(c.StaticQuery,{query:"731481769",render:function(t){return l.createElement(l.Fragment,null,t.providers.edges.map(function(t){var e=t.node;return l.createElement("div",{key:e.id,id:e.modal},l.createElement("h2",null,e.title),l.createElement("div",{className:"mdl-grid"},s()(e.types,"title").map(function(t){return l.createElement("div",{className:"mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-shadow--2dp",key:e.modal+"-"+t.modal,id:e.modal+"-"+t.modal},l.createElement("div",{className:"mdl-card__title"},l.createElement("h2",{className:"mdl-card__title-text"},t.title)),s()(t.packages,"title").map(function(a){return l.createElement("div",{key:e.modal+"_"+t.modal+"_"+a.title,className:"mdl-card__actions mdl-card--border"},l.createElement("a",{className:"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect",href:a.url},a.title))}))})))}))},data:h})};a(299),a(300),a(301),e.default=function(){return l.createElement(l.Fragment,null,l.createElement(g,null),l.createElement("div",{className:"mdl-layout mdl-js-layout mdl-layout--fixed-header"},l.createElement(N,null),l.createElement("main",{className:"mdl-layout__content"},l.createElement("div",{className:"page-content"},l.createElement(k,null),l.createElement(n,null),l.createElement(y,null),l.createElement(p,null)))))}},143:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return d}),a.d(e,"StaticQueryContext",function(){return m}),a.d(e,"StaticQuery",function(){return g});var l=a(0),i=a.n(l),s=a(4),r=a.n(s),c=a(144),n=a.n(c);a.d(e,"Link",function(){return n.a}),a.d(e,"withPrefix",function(){return c.withPrefix}),a.d(e,"navigate",function(){return c.navigate}),a.d(e,"push",function(){return c.push}),a.d(e,"replace",function(){return c.replace}),a.d(e,"navigateTo",function(){return c.navigateTo});var o=a(182),p=a.n(o);a.d(e,"PageRenderer",function(){return p.a});var u=a(48);a.d(e,"parsePath",function(){return u.a});var m=i.a.createContext({}),g=function(t){return i.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function d(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},182:function(t,e,a){var l;t.exports=(l=a(284))&&l.default||l},281:function(t){t.exports={data:{consumers:{edges:[{node:{id:"832b41b9-7e9e-5bec-b59a-a7d1f77eb046",author:"steelbrain",title:"linter",url:"https://atom.io/packages/linter",code:"https://github.com/steelbrain/linter"}},{node:{id:"d5e46f06-45a3-5ca5-a1f6-ab76049df5d0",author:"Facebook",title:"Nuclide",url:"https://atom.io/packages/nuclide",code:"https://github.com/facebook/nuclide"}},{node:{id:"5e0ff64c-170f-5117-87b2-6cb14b37522a",author:"Facebook & GitHub",title:"atom-ide-ui",url:"https://atom.io/packages/atom-ide-ui",code:"https://github.com/facebook/nuclide/tree/master/modules/atom-ide-ui"}}]}}}},284:function(t,e,a){"use strict";a.r(e);a(32);var l=a(0),i=a.n(l),s=a(4),r=a.n(s),c=a(68),n=a(2),o=function(t){var e=t.location,a=n.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},e.default=o},285:function(t){t.exports={data:{site:{siteMetadata:{title:"AtomLinter"}}}}},286:function(t){t.exports={data:{site:{siteMetadata:{title:"AtomLinter",description:"Lint your code with ease in Atom.",url:"https://atomlinter.github.io",color:{primary:"#efeae1",secondary:"#66595c",active:"#81c08b"}}}}}},295:function(t){t.exports={data:{site:{siteMetadata:{title:"AtomLinter",description:"Lint your code with ease in Atom."}}}}},296:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIKCSBpZD0ic3ZnNDIwMiIgaW5rc2NhcGU6dmVyc2lvbj0iMC45MSByMTM3MjUiIHNvZGlwb2RpOmRvY25hbWU9ImxvZ28uc3ZnIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpvc2I9Imh0dHA6Ly93d3cub3BlbnN3YXRjaGJvb2sub3JnL3VyaS8yMDA5L29zYiIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiCgkgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAyNCAxMDI0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe29wYWNpdHk6MC42MjtmaWxsOiNGQkVEMjE7ZW5hYmxlLWJhY2tncm91bmQ6bmV3ICAgIDt9Cgkuc3Qxe2ZpbGw6I0IyRTE5ODtmaWxsLW9wYWNpdHk6MC45NDEyO30KCS5zdDJ7ZmlsbDojMDRBMTcxO2ZpbGwtb3BhY2l0eTowLjQzMTM7fQoJLnN0M3tmaWxsOiM2NjU4NUM7fQoJLnN0NHtmaWxsOiM1ODRBNEU7ZmlsbC1vcGFjaXR5OjAuOTQxMjt9Cgkuc3Q1e2ZpbGw6IzU4NEE0RTt9Cgkuc3Q2e2ZpbGw6IzI0MzQzODt9Cgkuc3Q3e2ZpbGw6IzA4OTA4Mzt9Cgkuc3Q4e2ZpbGw6IzAyNzg2QTt9Cgkuc3Q5e2ZpbGw6IzM0NDg0Qzt9Cjwvc3R5bGU+Cjxzb2RpcG9kaTpuYW1lZHZpZXcgIGJvcmRlcmNvbG9yPSIjNjY2NjY2IiBib3JkZXJvcGFjaXR5PSIxIiBncmlkdG9sZXJhbmNlPSIxMCIgZ3VpZGV0b2xlcmFuY2U9IjEwIiBpZD0ibmFtZWR2aWV3NDIyNCIgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ic3ZnNDIwMiIgaW5rc2NhcGU6Y3g9IjMxLjkzMTI5NSIgaW5rc2NhcGU6Y3k9IjQwLjg5NTg3OSIgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAiIGlua3NjYXBlOnBhZ2VzaGFkb3c9IjIiIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjgyNiIgaW5rc2NhcGU6d2luZG93LW1heGltaXplZD0iMCIgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxNDQyIiBpbmtzY2FwZTp3aW5kb3cteD0iMCIgaW5rc2NhcGU6d2luZG93LXk9IjAiIGlua3NjYXBlOnpvb209IjEwLjA0MTAxNSIgb2JqZWN0dG9sZXJhbmNlPSIxMCIgcGFnZWNvbG9yPSIjZmZmZmZmIiBzaG93Z3JpZD0iZmFsc2UiPgoJPC9zb2RpcG9kaTpuYW1lZHZpZXc+CjxnIGlkPSJnNDIwNCI+Cgk8cGF0aCBpZD0icGF0aDQyMDYiIGNsYXNzPSJzdDAiIGQ9Ik02MjcsNzk5LjJjMTAzLjQtMTAzLjMsOTQuMS0yNzkuOC0yMC41LTM5NC40Yy0xMTQuNi0xMTQuNi0yOTEtMTIzLjgtMzk0LjQtMjAuNQoJCUMxMDguOCw0ODcuNS01Mi45LDgzNSw2MS43LDk0OS42QzE3Ni40LDEwNjQuMyw1MjMuOCw5MDIuNSw2MjcsNzk5LjIiLz4KCTxwYXRoIGlkPSJwYXRoNDIwOCIgY2xhc3M9InN0MCIgZD0iTTY1Ny4yLDY5My43Yzg1LjgtODUuOCw3OC4yLTIzMi40LTE3LTMyNy42Yy05NS4yLTk1LjItMjQxLjgtMTAyLjktMzI3LjYtMTcKCQljLTg1LjgsODUuNy0yMjAuMSwzNzQuNC0xMjQuOSw0NjkuNUMyODIuOSw5MTMuOCw1NzEuNSw3NzkuNCw2NTcuMiw2OTMuNyIvPgo8L2c+CjxwYXRoIGlkPSJwYXRoNDIxMCIgY2xhc3M9InN0MSIgZD0iTTQ0Niw1OTAuN2M5Ny43LDk3LjcsMTc2LjcsMjAwLjcsMjMzLjIsMjk4LjVjNy45LTQ5LjMsNDEtMTI2LjgsMTQwLjgtMjg5LjYKCWMxOTguMy0zMjMuMywyMTguNy01NTQuMywxOTctNTc1LjljLTAuNi0wLjctMS4zLTEuNC0yLTJjLTAuNy0wLjctMS40LTEuNC0yLjEtMmMtMjEuNi0yMS44LTI1Mi41LTEuMi01NzUuOSwxOTcKCWMtMTYyLjcsOTkuOC0yNDAuNCwxMzIuOC0yODkuNiwxNDAuOEMyNDUuMyw0MTQsMzQ4LjQsNDkzLjEsNDQ2LDU5MC43Ii8+CjxwYXRoIGlkPSJwYXRoNDIxMiIgY2xhc3M9InN0MiIgZD0iTTk1Mi40LDE0LjJDODYwLjUsMjIsNjczLjgsNzEuNiw0MzcsMjE2LjhjLTE2Mi43LDk5LjgtMjQwLjQsMTMyLjgtMjg5LjYsMTQwLjgKCWM5Ny44LDU2LjUsMjAwLjksMTM1LjYsMjk4LjUsMjMzLjJjNC4xLDQuMSw3LjksOC4zLDEyLDEyLjRDNDI3LjksMzI4LjgsNzMwLDE0Ni44LDk1Mi40LDE0LjIiLz4KPHBhdGggaWQ9InBhdGg0MjE0IiBjbGFzcz0ic3QzIiBkPSJNNTM4LjMsODU2LjdjNDkuOSw0OS45LDkwLjQsMTAyLjYsMTE5LjIsMTUyLjZjNC0yNS4yLDIwLjktNjQuOSw3MS45LTE0OC4xCglDODMwLjgsNjk2LDg0MS4zLDU3OCw4MzAuMiw1NjYuOWMtMC4zLTAuMy0wLjctMC43LTEtMXMtMC43LTAuNy0xLTFjLTExLTExLjEtMTI5LjEtMC42LTI5NC4zLDEwMC43CgljLTgzLjIsNTEtMTIyLjksNjcuOS0xNDguMSw3MS45QzQzNS43LDc2Ni4zLDQ4OC40LDgwNi44LDUzOC4zLDg1Ni43Ii8+CjxwYXRoIGlkPSJwYXRoNDIxNiIgY2xhc3M9InN0NCIgZD0iTTY2OC42LDcxOS44Yy00Mi41LDUyLjYtNzUsMTE5LjUtODMuNSwxODguMWMyOC43LDMzLjksNTMuMyw2OC4yLDcyLjUsMTAxLjQKCWM0LTI1LjIsMjAuOS02NC45LDcxLjktMTQ4LjFjODIuNS0xMzQuNSwxMDQuOC0yMzcuOCwxMDQuMi0yNzcuNEM3NzguOSw2MjkuNSw3MTQuMiw2NjMuMiw2NjguNiw3MTkuOCIvPgo8cGF0aCBpZD0icGF0aDQyMTgiIGNsYXNzPSJzdDMiIGQ9Ik0xNTIuNiw0NjkuMmM0OS45LDQ5LjksOTAuMywxMDIuNiwxMTkuMiwxNTIuNmM0LTI1LjIsMjAuOS02NC45LDcxLjktMTQ4LjEKCUM0NDUsMzA4LjUsNDU1LjUsMTkwLjQsNDQ0LjQsMTc5LjRjLTAuMy0wLjQtMC43LTAuNy0xLjEtMWMtMC40LTAuNC0wLjctMC43LTEtMWMtMTEtMTEuMS0xMjkuMS0wLjYtMjk0LjMsMTAwLjcKCUM2NC45LDMyOS4xLDI1LjIsMzQ2LTAuMSwzNTBDNTAsMzc4LjgsMTAyLjcsNDE5LjMsMTUyLjYsNDY5LjIiLz4KPHBhdGggaWQ9InBhdGg0MjIwIiBjbGFzcz0ic3Q1IiBkPSJNMjA1LjksMzU2LjVjODkuNy00MywxODMuNC05MS41LDIzOS4yLTE3NS45Yy0wLjMtMC40LTAuNC0wLjktMC40LTAuOWMtMC42LTAuNi0wLjktMC45LTEuMy0xLjMKCWMtMC40LTAuNC0wLjctMC43LTEtMWMtMTEtMTEuMS0xMjkuMS0wLjYtMjk0LjMsMTAwLjdDNjQuOSwzMjkuMSwyNS4yLDM0Ni0wLjEsMzUwYzMzLjcsMTkuNCw2OC42LDQ0LjUsMTAzLjEsNzMuOQoJQzEzMy41LDM5Ny41LDE2Ny42LDM3NC44LDIwNS45LDM1Ni41Ii8+CjxwYXRoIGlkPSJwYXRoNDIyMiIgY2xhc3M9InN0NiIgZD0iTTg1MC4yLDE5MC4yYzI3LjYsMjMuOCw1MC4zLDQ5LjQsNjcsNzRjMS4xLTEzLjEsOC4zLTM0LjEsMzEuNS03OC44CgljNDYtODguNyw0Ni45LTE0OS45LDQwLjgtMTU1LjFjLTAuMS0wLjItMC40LTAuNC0wLjYtMC41Yy0wLjEtMC4yLTAuNC0wLjQtMC42LTAuNWMtNi4xLTUuMy02Ni40LDQuNS0xNDcuNyw2Mi43CgljLTQwLjgsMjkuNC02MC42LDM5LjUtNzMuNCw0Mi41Qzc5NC4xLDE0Ny41LDgyMi44LDE2Ni40LDg1MC4yLDE5MC4yIi8+CjxnIGlkPSJnNDM0NCIgdHJhbnNmb3JtPSJtYXRyaXgoMC4zMDQ2ODYwNCwwLjI1OTE2NDg0LC0wLjI1OTE2NDg0LDAuMzA0Njg2MDQsMzkuNzk0OTYxLDQuMTY2ODI5NykiPgoJPHBhdGggaWQ9InBhdGg0MzQ2IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGFzcz0ic3Q3IiBkPSJNMTg5NC43LTgxMS40bC0xMDQuOSwwSDE3NzNoLTE2LjhsLTEwNC45LDAKCQljMCwwLTE2MS4xLTExLjYtMzg5LjcsMzIxLjNjMCwwLDc4LjcsMTU0LjgsMTY4LjcsMTM1LjVjMCwwLDU5LjktNTguNiw1OS45LDEuN0wxNDU2LjQsOS4zYzAsMC0xNSwxMjcuOCw2Ny40LDEyNy44CgkJYzAsMCwxNjkuOCw2OC42LDI0OS4yLDM5LjRjNzkuNSwyOS4yLDI0OS4xLTM5LjQsMjQ5LjEtMzkuNGM4Mi41LDAsNjcuNS0xMjcuOCw2Ny41LTEyNy44bC0zMy43LTM2Mi4yYzAtNjAuMyw1OS45LTEuNyw1OS45LTEuNwoJCWM5MCwxOS4zLDE2OC42LTEzNS41LDE2OC42LTEzNS41QzIwNTUuOS04MjMsMTg5NC43LTgxMS40LDE4OTQuNy04MTEuNCIvPgoJPGcgaWQ9Imc0MzQ4Ij4KCQk8cGF0aCBpZD0icGF0aDQzNTAiIGlua3NjYXBlOmNvbm5lY3Rvci1jdXJ2YXR1cmU9IjAiIGNsYXNzPSJzdDgiIGQ9Ik0xODk0LjctODExLjRsLTMzLjQsMGMyNi43LDAuOSwxNzguNCwxOS43LDM4NS42LDMyMS4zCgkJCWMwLDAtNTguNSwxMTUtMTMyLjMsMTM0LjNjMC43LDAuNiwxLjIsMS4yLDEuMiwxLjJjOTAsMTkuMywxNjguNy0xMzUuNSwxNjguNy0xMzUuNUMyMDU2LTgyMywxODk0LjgtODExLjQsMTg5NC43LTgxMS40Ii8+CgkJPHBhdGggaWQ9InBhdGg0MzUyIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGFzcz0ic3Q4IiBkPSJNMjA1NC4yLTM1Mi44YzAtNy43LDAuOS0xMy40LDIuNi0xNy41CgkJCWMtMTcuNS0xMS43LTQwLjMtMTkuNi00MC4zLDE3LjVsMzMuNywzNjIuM2MwLDAsMTUsMTI3LjctNjcuNCwxMjcuN2MwLDAtOTguNSwzOS43LTE4MC42LDQ1LjhjODUuNiw3LjcsMjE4LjEtNDUuOCwyMTguMS00NS44CgkJCWM4Mi40LDAsNjcuNC0xMjcuNyw2Ny40LTEyNy43TDIwNTQuMi0zNTIuOCIvPgoJCTxwYXRoIGlkPSJwYXRoNDM1NCIgaW5rc2NhcGU6Y29ubmVjdG9yLWN1cnZhdHVyZT0iMCIgY2xhc3M9InN0OCIgZD0iTTEzNzcuNi00OTBjMjI4LjYtMzMzLDM4OS43LTMyMS4zLDM4OS43LTMyMS4zaDYzLjdoLTQxLjIKCQkJSDE3NzNoLTE2LjhsLTEwNC45LDBjMCwwLTE2MS4xLTExLjYtMzg5LjcsMzIxLjNjMCwwLDc4LjcsMTU0LjgsMTY4LjcsMTM1LjVjMCwwLDE5LTE4LjYsMzUuNi0yNC4xCgkJCUMxNDE0LjEtNDE4LjMsMTM3Ny42LTQ5MCwxMzc3LjYtNDkwIi8+CgkJPHBhdGggaWQ9InBhdGg0MzU2IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGFzcz0ic3Q4IiBkPSJNMTYzOS45LDEzNy4yYy04Mi40LDAtNjcuNC0xMjcuOC02Ny40LTEyNy44bDMzLjctMzYyLjIKCQkJYzAtNjAuMy01OS45LTEuNy01OS45LTEuN2MtMTkuOCw0LjItMzksMC4xLTU3LTkuMWMwLjUsMywwLjgsNi41LDAuOCwxMC43TDE0NTYuNCw5LjRjMCwwLTE1LDEyNy44LDY3LjQsMTI3LjgKCQkJYzAsMCwxNjkuOCw2OC42LDI0OS4yLDM5LjRjMTYuMyw2LDM2LjQsNy44LDU4LDdDMTc0Ny4xLDE4MC41LDE2MzkuOSwxMzcuMiwxNjM5LjksMTM3LjIiLz4KCTwvZz4KCTxnIGlkPSJnNDM1OCI+CgkJPHBhdGggaWQ9InBhdGg0MzYwIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGFzcz0ic3Q5IiBkPSJNMTI4MS43LTUxMS44Yy0xLjItMC43LTIuMi0xLjUtMy4zLTIuMwoJCQljLTUuNiw3LjgtMTEuMiwxNS44LTE2LjksMjQuMWMwLDAsNzguNywxNTQuOCwxNjguNywxMzUuNmMwLDAsOS40LTkuMywyMC44LTE2LjZDMTM2Ny0zNjAuNywxMjkzLjgtNDg5LjMsMTI4MS43LTUxMS44Ii8+CgkJPHBhdGggaWQ9InBhdGg0MzYyIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGFzcz0ic3Q5IiBkPSJNMjI2NC4xLTUxMS44YzEuMS0wLjcsMi4yLTEuNSwzLjMtMi4zCgkJCWM1LjUsNy44LDExLjEsMTUuOCwxNi45LDI0LjFjMCwwLTc4LjcsMTU0LjgtMTY4LjcsMTM1LjZjMCwwLTkuNC05LjMtMjAuOS0xNi42QzIxNzguOS0zNjAuNywyMjUyLjEtNDg5LjMsMjI2NC4xLTUxMS44Ii8+CgkJPHBhdGggaWQ9InBhdGg0MzY0IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGFzcz0ic3Q5IiBkPSJNMTc3My03NTkuNGMtNzMuMiwwLTEzNC41LTIwLjMtMTUyLjItNDcuOQoJCQljLTMuMyw1LjItNS4zLDEwLjYtNS4zLDE2LjJjMCwzNS40LDcwLjYsNjQuMSwxNTcuNSw2NC4xYzg3LDAsMTU3LjUtMjguNywxNTcuNS02NC4xYzAtNS42LTEuOS0xMS01LjItMTYuMgoJCQlDMTkwNy41LTc3OS43LDE4NDYuMi03NTkuNCwxNzczLTc1OS40Ii8+CgkJPHBhdGggaWQ9InBhdGg0MzY2IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGFzcz0ic3Q5IiBkPSJNMTc3My04MTAuN2M3My4yLDAsMTM0LjUsOS4xLDE1Mi4yLDIxLjUKCQkJYzMuMy0yLjQsNS4yLTQuNyw1LjItNy4yYzAtMTYtNzAuNS0yOC44LTE1Ny41LTI4LjhjLTg2LjksMC0xNTcuNSwxMi44LTE1Ny41LDI4LjhjMCwyLjUsMiw0LjgsNS4zLDcuMgoJCQlDMTYzOC40LTgwMS42LDE2OTkuNy04MTAuNywxNzczLTgxMC43Ii8+CgkJPHBhdGggaWQ9InBhdGg0MzY4IiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGFzcz0ic3Q5IiBkPSJNMTc5MC4xLTYyNC44YzAsOS44LTcuNiwxNy44LTE3LjEsMTcuOAoJCQljLTkuNSwwLTE3LjEtOC0xNy4xLTE3LjhjMC05LjcsNy42LTE3LjcsMTcuMS0xNy43QzE3ODIuNS02NDIuNSwxNzkwLjEtNjM0LjUsMTc5MC4xLTYyNC44Ii8+CgkJPHBhdGggaWQ9InBhdGg0MzcwIiBpbmtzY2FwZTpjb25uZWN0b3ItY3VydmF0dXJlPSIwIiBjbGFzcz0ic3Q5IiBkPSJNMTc5MC4xLTU1OC43YzAsOS44LTcuNiwxNy44LTE3LjEsMTcuOAoJCQljLTkuNSwwLTE3LjEtOC0xNy4xLTE3LjhjMC05LjcsNy42LTE3LjcsMTcuMS0xNy43QzE3ODIuNS01NzYuNCwxNzkwLjEtNTY4LjUsMTc5MC4xLTU1OC43Ii8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},297:function(t){t.exports={data:{allProvidersYaml:{edges:[{node:{id:"bcf77a18-79e8-52c8-b7af-c6849f824e07",title:"Language Specific Linters",modal:"language"}},{node:{id:"5e6409cc-b45c-5cb0-8419-708b3f81771c",title:"Integrated Development Environments",modal:"ide"}},{node:{id:"cedcf04d-7f62-5081-8f04-0438b7c2644b",title:"Generic Linters",modal:"misc"}},{node:{id:"49ef85a3-6104-56c4-8365-fc73ba8c1397",title:"Linter Plugins",modal:"plugin"}}]}}}},298:function(t){t.exports={data:{providers:{edges:[{node:{id:"bcf77a18-79e8-52c8-b7af-c6849f824e07",title:"Language Specific Linters",plural:"Linters",modal:"language",types:[{title:"JavaScript",modal:"js",packages:[{title:"linter-jshint",url:"https://atom.io/packages/linter-jshint"},{title:"linter-jscs",url:"https://atom.io/packages/linter-jscs"},{title:"linter-eslint",url:"https://atom.io/packages/linter-eslint"},{title:"flow-ide",url:"https://atom.io/packages/flow-ide"},{title:"linter-flow",url:"https://atom.io/packages/linter-flow"},{title:"linter-js-standard",url:"https://atom.io/packages/linter-js-standard"},{title:"linter-xo",url:"https://atom.io/packages/linter-xo"},{title:"linter-marlint",url:"https://atom.io/packages/linter-marlint"},{title:"linter-liferay",url:"https://atom.io/packages/linter-liferay"},{title:"linter-gjslint",url:"https://atom.io/packages/linter-gjslint"}]},{title:"CoffeeScript",modal:"coffee",packages:[{title:"linter-coffeelint",url:"https://atom.io/packages/linter-coffeelint"},{title:"linter-coffeescript",url:"https://atom.io/packages/linter-coffeescript"}]},{title:"ColdFusion",modal:"cf",packages:[{title:"linter-cflint",url:"https://atom.io/packages/linter-cflint"}]},{title:"TypeScript",modal:"ts",packages:[{title:"linter-tslint",url:"https://atom.io/packages/linter-tslint"}]},{title:"LiveScript",modal:"ls",packages:[{title:"linter-lsc",url:"https://atom.io/packages/linter-lsc"}]},{title:"Ruby",modal:"rb",packages:[{title:"linter-rubocop",url:"https://atom.io/packages/linter-rubocop"},{title:"linter-ruby",url:"https://atom.io/packages/linter-ruby"},{title:"linter-reek",url:"https://atom.io/packages/linter-reek"},{title:"linter-ruby-reek",url:"https://atom.io/packages/linter-ruby-reek"},{title:"linter-erb",url:"https://atom.io/packages/linter-erb"}]},{title:"Embedded Ruby",modal:"erb",packages:[{title:"linter-erb",url:"https://atom.io/packages/linter-erb"}]},{title:"GAMS",modal:"gams",packages:[{title:"linter-gams",url:"https://atom.io/packages/linter-gams"}]},{title:"Haml",modal:"haml",packages:[{title:"linter-haml",url:"https://atom.io/packages/linter-haml"}]},{title:"PHP",modal:"php",packages:[{title:"linter-php",url:"https://atom.io/packages/linter-php"},{title:"linter-phpcs",url:"https://atom.io/packages/linter-phpcs"},{title:"linter-phpmd",url:"https://atom.io/packages/linter-phpmd"},{title:"atom-linter-phpstan",url:"https://atom.io/packages/atom-linter-phpstan"},{title:"linter-phan",url:"https://atom.io/packages/linter-phan"}]},{title:"Python",modal:"py",packages:[{title:"linter-pylint",url:"https://atom.io/packages/linter-pylint"},{title:"linter-pep8",url:"https://atom.io/packages/linter-pep8"},{title:"linter-pydocstyle",url:"https://atom.io/packages/linter-pydocstyle"},{title:"linter-flake8",url:"https://atom.io/packages/linter-flake8"},{title:"linter-pylama",url:"https://atom.io/packages/linter-pylama"},{title:"linter-python",url:"https://atom.io/packages/linter-python"},{title:"linter-mypy",url:"https://atom.io/packages/linter-mypy"}]},{title:"Java",modal:"java",packages:[{title:"linter-javac",url:"https://atom.io/packages/linter-javac"}]},{title:"CSS",modal:"css",packages:[{title:"linter-csslint",url:"https://atom.io/packages/linter-csslint"},{title:"linter-liferay",url:"https://atom.io/packages/linter-liferay"},{title:"linter-stylelint",url:"https://atom.io/packages/linter-stylelint"}]},{title:"R",modal:"r",packages:[{title:"linter-lintr",url:"https://atom.io/packages/linter-lintr"}]},{title:"Sass",modal:"sass",packages:[{title:"linter-scss-lint",url:"https://atom.io/packages/linter-scss-lint"},{title:"linter-9e-sass",url:"https://atom.io/packages/linter-9e-sass"},{title:"linter-sass-lint",url:"https://atom.io/packages/linter-sass-lint"}]},{title:"SCSS",modal:"scss",packages:[{title:"linter-scss-lint",url:"https://atom.io/packages/linter-scss-lint"},{title:"linter-liferay",url:"https://atom.io/packages/linter-liferay"},{title:"linter-sass-lint",url:"https://atom.io/packages/linter-sass-lint"}]},{title:"less",modal:"less",packages:[{title:"linter-less",url:"https://atom.io/packages/linter-less"}]},{title:"stylus",modal:"stylus",packages:[{title:"linter-stylint",url:"https://atom.io/packages/linter-stylint"}]},{title:"Bash",modal:"sh",packages:[{title:"linter-shellcheck",url:"https://atom.io/packages/linter-shellcheck"}]},{title:"Scala",modal:"scala",packages:[{title:"linter-scalac",url:"https://atom.io/packages/linter-scalac"},{title:"linter-scalastyle",url:"https://atom.io/packages/linter-scalastyle"}]},{title:"C",modal:"c",packages:[{title:"linter-clang",url:"https://atom.io/packages/linter-clang"},{title:"linter-cppcheck",url:"https://atom.io/packages/linter-cppcheck"},{title:"linter-gcc",url:"https://atom.io/packages/linter-gcc"},{title:"linter-moose",url:"https://atom.io/packages/linter-moose"},{title:"linter-emscripten",url:"https://atom.io/packages/linter-emscripten"}]},{title:"C++",modal:"cpp",packages:[{title:"linter-clang",url:"https://atom.io/packages/linter-clang"},{title:"linter-cppcheck",url:"https://atom.io/packages/linter-cppcheck"},{title:"linter-gcc",url:"https://atom.io/packages/linter-gcc"},{title:"linter-moose",url:"https://atom.io/packages/linter-moose"},{title:"linter-emscripten",url:"https://atom.io/packages/linter-emscripten"}]},{title:"Objective-C",modal:"m",packages:[{title:"linter-clang",url:"https://atom.io/packages/linter-clang"},{title:"linter-emscripten",url:"https://atom.io/packages/linter-emscripten"}]},{title:"Objective-C++",modal:"mm",packages:[{title:"linter-clang",url:"https://atom.io/packages/linter-clang"},{title:"linter-emscripten",url:"https://atom.io/packages/linter-emscripten"}]},{title:"Lua",modal:"lua",packages:[{title:"linter-lua",url:"https://atom.io/packages/linter-lua"},{title:"linter-luacheck",url:"https://atom.io/packages/linter-luacheck"},{title:"linter-lua-findglobals",url:"https://atom.io/packages/linter-lua-findglobals"},{title:"linter-glua",url:"https://atom.io/packages/linter-glua"},{title:"linter-luaparse",url:"https://atom.io/packages/linter-luaparse"}]},{title:"Clojure",modal:"clojure",packages:[{title:"linter-clojure",url:"https://atom.io/packages/linter-clojure"}]},{title:"Puppet",modal:"puppet",packages:[{title:"linter-puppet-lint",url:"https://atom.io/packages/linter-puppet-lint"},{title:"linter-puppet-parser",url:"https://atom.io/packages/linter-puppet-parser"},{title:"linter-puppet-parsing",url:"https://atom.io/packages/linter-puppet-parsing"}]},{title:"Yaml",modal:"yaml",packages:[{title:"linter-js-yaml",url:"https://atom.io/packages/linter-js-yaml"}]},{title:"Haskell",modal:"haskell",packages:[{title:"linter-hlint",url:"https://atom.io/packages/linter-hlint"},{title:"linter-hdevtools",url:"https://atom.io/packages/linter-hdevtools"}]},{title:"HTML",modal:"html",packages:[{title:"linter-tidy",url:"https://atom.io/packages/linter-tidy"},{title:"linter-htmlhint",url:"https://atom.io/packages/linter-htmlhint"},{title:"linter-liferay",url:"https://atom.io/packages/linter-liferay"},{title:"linter-vnu",url:"https://atom.io/packages/linter-vnu"},{title:"linter-selective",url:"https://atom.io/packages/linter-selective"},{title:"linter-htmllint",url:"https://atom.io/packages/linter-htmllint"}]},{title:"Bootstrap HTML",modal:"twbs",packages:[{title:"linter-bootlint",url:"https://atom.io/packages/linter-bootlint"}]},{title:"Rust",modal:"rust",packages:[{title:"linter-rust",url:"https://atom.io/packages/linter-rust"},{title:"linter-rust-cargo",url:"https://atom.io/packages/linter-rust-cargo"}]},{title:"Elixir",modal:"elixir",packages:[{title:"linter-elixirc",url:"https://atom.io/packages/linter-elixirc"},{title:"linter-elixir-credo",url:"https://atom.io/packages/linter-elixir-credo"}]},{title:"Erlang",modal:"erlang",packages:[{title:"linter-erlang",url:"https://atom.io/packages/linter-erlang"}]},{title:"Swift",modal:"swift",packages:[{title:"linter-swiftc",url:"https://atom.io/packages/linter-swiftc"},{title:"linter-swiftlint",url:"https://atom.io/packages/linter-swiftlint"},{title:"linter-swift-package-manager",url:"https://atom.io/packages/linter-swift-package-manager"}]},{title:"LaTeX",modal:"latex",packages:[{title:"linter-chktex",url:"https://atom.io/packages/linter-chktex"}]},{title:"Go",modal:"go",packages:[{title:"linter-golinter",url:"https://atom.io/packages/linter-golinter"},{title:"linter-revive",url:"https://atom.io/packages/linter-revive"}]},{title:"JSON",modal:"json",packages:[{title:"linter-jsonlint",url:"https://atom.io/packages/linter-jsonlint"},{title:"linter-package-json-validator",url:"https://atom.io/packages/linter-package-json-validator"}]},{title:"Handlebars",modal:"handlebars",packages:[{title:"linter-handlebars",url:"https://atom.io/packages/linter-handlebars"},{title:"linter-liferay",url:"https://atom.io/packages/linter-liferay"}]},{title:"Jolie",modal:"jolie",packages:[{title:"linter-jolie",url:"https://atom.io/packages/linter-jolie"}]},{title:"Markdown",modal:"markdown",packages:[{title:"linter-markdownlint",url:"https://atom.io/packages/linter-markdownlint"},{title:"linter-markdown",url:"https://atom.io/packages/linter-markdown"},{title:"linter-node-markdownlint",url:"https://atom.io/packages/linter-node-markdownlint"}]},{title:"Apache Velocity",modal:"velocity",packages:[{title:"linter-liferay",url:"https://atom.io/packages/linter-liferay"}]},{title:"Perl",modal:"perl",packages:[{title:"linter-perlcritic",url:"https://atom.io/packages/linter-perlcritic"},{title:"linter-perl",url:"https://atom.io/packages/linter-perl"}]},{title:"Protocol Buffer",modal:"protobuf",packages:[{title:"linter-protocol-buffer",url:"https://atom.io/packages/linter-protocol-buffer"}]},{title:"CSPM",modal:"cspm",packages:[{title:"linter-cspm",url:"https://atom.io/packages/linter-cspm"}]},{title:"Elm",modal:"elm",packages:[{title:"linter-elm-make",url:"https://atom.io/packages/linter-elm-make"},{title:"linter-elm-analyse",url:"https://atom.io/packages/linter-elm-analyse"}]},{title:"Prolog",modal:"prolog",packages:[{title:"linter-prolog",url:"https://atom.io/packages/linter-prolog"}]},{title:"Moonscript",modal:"moonscript",packages:[{title:"linter-moonscript",url:"https://atom.io/packages/linter-moonscript"}]},{title:"MATLAB",modal:"matlab",packages:[{title:"linter-matlab",url:"https://atom.io/packages/linter-matlab"}]},{title:"XML",modal:"xml",packages:[{title:"linter-xmllint",url:"https://atom.io/packages/linter-xmllint"},{title:"linter-jing",url:"https://atom.io/packages/linter-jing"}]},{title:"Processing",modal:"pde",packages:[{title:"linter-processing-java",url:"https://atom.io/packages/linter-processing-java"}]},{title:"GLSL",modal:"glsl",packages:[{title:"linter-glsl",url:"https://atom.io/packages/linter-glsl"}]},{title:"Fortran",modal:"fortran",packages:[{title:"linter-gfortran",url:"https://atom.io/packages/linter-gfortran"}]},{title:"Ansible",modal:"ansible",packages:[{title:"linter-ansible-linting",url:"https://atom.io/packages/linter-ansible-linting"},{title:"linter-ansible-syntax",url:"https://atom.io/packages/linter-ansible-syntax"}]},{title:"Twig",modal:"twig",packages:[{title:"linter-twig",url:"https://atom.io/packages/linter-twig"}]},{title:"Terraform",modal:"terraform",packages:[{title:"linter-terraform-syntax",url:"https://atom.io/packages/linter-terraform-syntax"}]},{title:"Icinga",modal:"icinga",packages:[{title:"linter-icinga-validate",url:"https://atom.io/packages/linter-icinga-validate"}]},{title:"Chef",modal:"chef",packages:[{title:"linter-cookstyle",url:"https://atom.io/packages/linter-cookstyle"}]},{title:"Julia",modal:"julia",packages:[{title:"linter-julia",url:"https://atom.io/packages/linter-julia"}]},{title:"Packer",modal:"packer",packages:[{title:"linter-packer-validate",url:"https://atom.io/packages/linter-packer-validate"}]},{title:"Reason",modal:"reason",packages:[{title:"reason-refmt",url:"https://atom.io/packages/reason-refmt"}]},{title:"Vagrant",modal:"vagrant",packages:[{title:"linter-vagrant-validate",url:"https://atom.io/packages/linter-vagrant-validate"}]},{title:"Travis CI",modal:"travis",packages:[{title:"linter-travis-lint",url:"https://atom.io/packages/linter-travis-lint"}]},{title:"Docker",modal:"docker",packages:[{title:"linter-hadolint",url:"https://atom.io/packages/linter-hadolint"},{title:"linter-docker",url:"https://atom.io/packages/linter-docker"}]},{title:"NSIS",modal:"nsis",packages:[{title:"linter-makensis",url:"https://atom.io/packages/linter-makensis"}]},{title:"Jenkins",modal:"jenkins",packages:[{title:"linter-jenkins",url:"https://atom.io/packages/linter-jenkins"}]},{title:"VHDL",modal:"vhdl",packages:[{title:"linter-vhdl",url:"https://atom.io/packages/linter-vhdl"}]},{title:"Kubernetes",modal:"kubernetes",packages:[{title:"linter-kubectl",url:"https://atom.io/packages/linter-kubectl"}]}]}},{node:{id:"5e6409cc-b45c-5cb0-8419-708b3f81771c",title:"Integrated Development Environments",plural:"IDEs",modal:"ide",types:[{title:"C#",modal:"cs",packages:[{title:"omnisharp-atom",url:"https://atom.io/packages/omnisharp-atom"},{title:"ide-csharp",url:"https://atom.io/packages/ide-csharp"}]},{title:"TypeScript",modal:"ts",packages:[{title:"atom-typescript",url:"https://atom.io/packages/atom-typescript"},{title:"ide-typescript",url:"https://atom.io/packages/ide-typescript"}]},{title:"F#",modal:"fs",packages:[{title:"ionide-installer",url:"https://atom.io/packages/ionide-installer"}]},{title:"Haskell",modal:"hs",packages:[{title:"ide-haskell",url:"https://atom.io/packages/ide-haskell"},{title:"ide-haskell-hie",url:"https://atom.io/packages/ide-haskell-hie"}]},{title:"Flow",modal:"flow",packages:[{title:"flow-ide",url:"https://atom.io/packages/flow-ide"},{title:"ide-flowtype",url:"https://atom.io/packages/ide-flowtype"}]},{title:"JavaScript",modal:"js",packages:[{title:"ide-flowtype",url:"https://atom.io/packages/ide-flowtype"},{title:"ide-typescript",url:"https://atom.io/packages/ide-typescript"}]},{title:"OCaml",modal:"ml",packages:[{title:"linter-ocaml",url:"https://atom.io/packages/linter-ocaml"},{title:"ocaml-merlin",url:"https://atom.io/packages/ocaml-merlin"},{title:"ide-reason",url:"https://atom.io/packages/ide-reason"}]},{title:"Crystal",modal:"cr",packages:[{title:"ide-crystal",url:"https://atom.io/packages/ide-crystal"}]},{title:"Java",modal:"java",packages:[{title:"ide-java",url:"https://atom.io/packages/ide-java"}]},{title:"JSON",modal:"json",packages:[{title:"ide-json",url:"https://atom.io/packages/ide-json"}]},{title:"Docker",modal:"docker",packages:[{title:"ide-docker",url:"https://atom.io/packages/ide-docker"}]},{title:"Python",modal:"py",packages:[{title:"ide-python",url:"https://atom.io/packages/ide-python"}]},{title:"ReasonML",modal:"reasonml",packages:[{title:"ide-reason",url:"https://atom.io/packages/ide-reason"}]},{title:"Rust",modal:"rs",packages:[{title:"ide-rust",url:"https://atom.io/packages/ide-rust"}]},{title:"Vue",modal:"vue",packages:[{title:"ide-vue",url:"https://atom.io/packages/ide-vue"}]},{title:"PowerShell",modal:"ps",packages:[{title:"ide-powershell",url:"https://atom.io/packages/ide-powershell"}]},{title:"Bash",modal:"sh",packages:[{title:"ide-bash",url:"https://atom.io/packages/ide-bash"}]}]}},{node:{id:"cedcf04d-7f62-5081-8f04-0438b7c2644b",title:"Generic Linters",plural:"Linters",modal:"misc",types:[{title:"Project Organization",modal:"organization",packages:[{title:"linter-flint",url:"https://atom.io/packages/linter-flint"}]},{title:"Code Quality",modal:"quality",packages:[{title:"linter-coverage",url:"https://atom.io/packages/linter-coverage"},{title:"linter-dryer",url:"https://atom.io/packages/linter-dryer"}]},{title:"Writing Assistance",modal:"writing",packages:[{title:"linter-alex",url:"https://atom.io/packages/linter-alex"},{title:"linter-write-good",url:"https://atom.io/packages/linter-write-good"},{title:"linter-just-say-no",url:"https://atom.io/packages/linter-just-say-no"},{title:"linter-proselint",url:"https://atom.io/packages/linter-proselint"},{title:"linter-ibmstyleguide",url:"https://atom.io/packages/linter-ibmstyleguide"},{title:"linter-american",url:"https://atom.io/packages/linter-american"},{title:"linter-google-styleguide",url:"https://atom.io/packages/linter-google-styleguide"}]},{title:"Spell Checking",modal:"spelling",packages:[{title:"linter-scspell",url:"https://atom.io/packages/linter-scspell"},{title:"linter-spell",url:"https://atom.io/packages/linter-spell"}]},{title:"Style",modal:"style",packages:[{title:"linter-mixed-indent",url:"https://atom.io/packages/linter-mixed-indent"}]},{title:"CloudFormation",modal:"cloudformation",packages:[{title:"atom-cfn-lint",url:"https://atom.io/packages/atom-cfn-lint"}]}]}},{node:{id:"49ef85a3-6104-56c4-8365-fc73ba8c1397",title:"Linter Plugins",plural:"Plugins",modal:"plugin",types:[{title:"Scroll Bar",modal:"scrollbar",packages:[{title:"minimap-linter",url:"https://atom.io/packages/minimap-linter"},{title:"lint-scroll-marker",url:"https://atom.io/packages/lint-scroll-marker"}]},{title:"Docking",modal:"docking",packages:[{title:"linter-manager",url:"https://atom.io/packages/linter-manager"}]},{title:"GitHub",modal:"github",packages:[{title:"pull-requests",url:"https://atom.io/packages/pull-requests"}]}]}}]}}}},299:function(t,e,a){}}]);
//# sourceMappingURL=component---src-pages-index-tsx-23405dc36b016fcc4ff9.js.map