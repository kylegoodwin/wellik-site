(window["webpackJsonpwellness-site"]=window["webpackJsonpwellness-site"]||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(19),o=a.n(l),s=a(9),r=a(10),c=a(12),m=a(11),u=a(13),d=(a(27),function(e){return Object(n.useEffect)((function(){e.test()}),[]),i.a.createElement("div",{className:"about"},i.a.createElement("div",{className:"left-container"},i.a.createElement("div",{className:"text-container"},i.a.createElement("p",null," Creativity, peace, and the ability to get the most from our time requires beauty, seamless interactions, and stimulating systems. "),i.a.createElement("p",null,"By sorting through the necessary components and introducing steps that will evolve and refine our everyday, we can elevate your environment, expand your available time, and most importantly, broaden and invigorate the conscious experience.  "),i.a.createElement("p",null,"Let\u2019s find clarity and discover a new way of interacting with our days. "))),i.a.createElement("div",{className:"right-container"},i.a.createElement("img",{src:"about.png"})),i.a.createElement("div",{className:"about-bottom"},i.a.createElement("p",null,"Bethany Wellik is a lifestyle and productivity designer based in New York City."),i.a.createElement("p",null,"With vast experience in working with individuals and households of the world\u2019s leading creatives to the UNHW, she understands the required refinement and necessary adjustments to innovate and elevate our daily lives. Her unique insight and discretion positions her as one of the most sought after, in-demand personalities in her field.")))}),b=function(e){return Object(n.useEffect)((function(){e.test()}),[]),i.a.createElement("div",null,"contact in progress")},h=i.a.createElement("div",{className:"main-image"},i.a.createElement("div",{className:"main-logo"},i.a.createElement("h1",null,"bethany wellik"),i.a.createElement("h2",null,"productivity + organization")),i.a.createElement("div",{className:"bottom-bar"},i.a.createElement("div",null,i.a.createElement("p",null,"789 Sik Block ",i.a.createElement("br",null),"New York, NY 10003")))),p=i.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,className:"slide-two",src:"https://kylegoodwin.github.io/wellik-site/new.mp4"}),v=[h,i.a.createElement("div",{className:"slide-three"},i.a.createElement("video",{autoPlay:!0,muted:!0,loop:!0,src:"https://kylegoodwin.github.io/wellik-site/two.mp4"})),p],g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleNext=function(){var e=0;e=a.props.slideNumber==v.length-1?0:a.props.slideNumber+1,a.updateLogo(e),a.props.setSlideNumber(e)},a.updateLogo=function(e){0==e?a.props.makeLogoInvisible():a.props.makeLogoVisible()},a.handleBack=function(){var e=0;e=0==a.props.slideNumber?v.length-1:a.props.slideNumber-1,a.updateLogo(e),a.props.setSlideNumber(e)},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Main"},i.a.createElement("div",{id:"next",onClick:this.handleNext}),i.a.createElement("div",{id:"back",onClick:this.handleBack}),v[this.props.slideNumber])}}]),t}(i.a.Component),E=a(8),f=a(5),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).setSlideNumber=function(e){a.setState({slideNumber:e})},a.makeLogoVisible=function(){a.setState({logoVisible:!0})},a.makeLogoInvisible=function(){a.setState({logoVisible:!1})},a.handleReset=function(){a.setState({slideNumber:0,logoVisible:!1})},a.state={logoVisible:!1,slideNumber:0},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(E.a,null,i.a.createElement("div",{className:"top-bar"},i.a.createElement("div",{className:"about"},i.a.createElement(E.b,{to:"/about"},"about")),this.state.logoVisible?i.a.createElement("h1",null,i.a.createElement(E.b,{onClick:this.handleReset,to:{pathname:"/"}},"bethany wellik")):"",i.a.createElement("div",{className:"contact"},i.a.createElement(E.b,{to:"/contact"},"contact"))),i.a.createElement(f.c,null,i.a.createElement(f.a,{path:"/about"},i.a.createElement(d,{test:this.makeLogoVisible})),i.a.createElement(f.a,{path:"/contact"},i.a.createElement(b,{test:this.makeLogoVisible})),i.a.createElement(f.a,{path:"/"},i.a.createElement(g,{setSlideNumber:this.setSlideNumber,slideNumber:this.state.slideNumber,makeLogoInvisible:this.makeLogoInvisible,makeLogoVisible:this.makeLogoVisible}))))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.984287b9.chunk.js.map