(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,a,t){e.exports=t.p+"static/media/background.9e079cb7.jpg"},107:function(e,a,t){e.exports=t.p+"static/media/back.f0b61724.png"},110:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),r=t.n(c),m=(t(52),t(53),t(4)),i=t(10),s=t(13),o=t(14),u=t(18),E=t(15),h=t(17),d=function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:{width:"100%",margin:"auto"}},l.a.createElement(m.Grid,{className:"contact-grid"},l.a.createElement(m.Cell,{col:12},l.a.createElement("div",{className:"about-me-banner"},l.a.createElement("h1",null," About me"),l.a.createElement("p",null," ")))))}}]),a}(n.Component),b=t(43),p=t(20),g=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(u.a)(this,Object(E.a)(a).call(this,e))).state={message:"",name:"",email:""},t.handleChange=t.handleChange.bind(Object(p.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(p.a)(t)),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault();this.sendFeedback("template_t9m0xgs8",{from_name:this.state.email,message_html:this.state.message})}},{key:"render",value:function(){return l.a.createElement("div",{style:{width:"100%",height:"100%",margin:"auto"}},l.a.createElement(m.Grid,{className:"home-grid"},l.a.createElement(m.Cell,{col:12},l.a.createElement("div",{className:"email-form-banner"},l.a.createElement("h1",null," Contact me: "),l.a.createElement("form",{class:"ui form"},l.a.createElement("div",{class:"email-form"},l.a.createElement("div",{class:"field"},l.a.createElement("label",{className:"form-label"},"Name"),l.a.createElement("input",{type:"text",name:"name",placeholder:"Name",required:!0,onChange:this.handleChange,value:this.state.name})),l.a.createElement("div",{class:"field"},l.a.createElement("label",{className:"form-label"},"Email"),l.a.createElement("input",{type:"text",name:"email",placeholder:"Email",required:!0,onChange:this.handleChange,value:this.state.email})),l.a.createElement("div",{class:"field"},l.a.createElement("label",{className:"form-label"},"Message"),l.a.createElement("textarea",{name:"message",placeholder:"Enter your message here",required:!0,onChange:this.handleChange,value:this.state.message})),l.a.createElement("button",{class:"ui button",type:"submit",onClick:this.handleSubmit},"Submit")))))))}},{key:"sendFeedback",value:function(e,a){window.emailjs.send("gmail",e,a).then(function(e){console.log("Email sent!")}).catch(function(e){return console.error("Oh well, an error occured. Here's the error:",e)})}}]),a}(n.Component),f=t(44),v=t.n(f),y=(t(103),function(e){function a(){return Object(s.a)(this,a),Object(u.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.Grid,{className:"home-grid"},l.a.createElement(m.Cell,{col:12},l.a.createElement("div",{className:"home-banner-text"},l.a.createElement("img",{src:v.a,alt:"ProfilePic",className:"profile-img"}),l.a.createElement("h1",null," Hi there, I'm Silvana. Welcome to my profile!"),l.a.createElement("hr",null),l.a.createElement("p",null," 22 | Computer Science & Neuroscience recent grad | Colombian "),l.a.createElement("p",null," Currently looking for a full-time position."),l.a.createElement("br",null),l.a.createElement("h1",null," More about me: "),l.a.createElement("div",{class:"set-skills"},l.a.createElement("div",{class:"ui one column grid"},l.a.createElement("div",{class:"column"},l.a.createElement("i",{class:" huge graduation icon"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",{class:"paragraph"},"I graduated on Dec 2019 from The Ohio State University with a B.S in Computer & Information Science and Neuroscience. ")),l.a.createElement("div",{class:"column"},l.a.createElement("i",{class:"huge mobile alternate icon"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null," I'm open to working in all kinds of CS fields! I enjoy constantly learning about new technologies. ")),l.a.createElement("div",{class:"column"},l.a.createElement("i",{class:"huge globe icon"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null," I'm fluent in Spanish(native) and English. Ich spreche auch ein bisschen Deutsch! ")),l.a.createElement("div",{class:"column"},l.a.createElement("i",{class:"huge server icon"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null," I've had a fair amount of experience with database servers and feel very comfortable working with them and with SQL.  ")),l.a.createElement("div",{class:"column"},l.a.createElement("i",{class:"huge file code outline icon"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null," I'm comfortable parsing JSON formmated services and utilizing RESTful APIs. ")),l.a.createElement("div",{class:"column"},l.a.createElement("i",{class:"huge child icon"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null," Other than programming, I mostly enjoy running, reading, and dancing!")))),l.a.createElement("div",null),l.a.createElement("div",{class:"skills"},l.a.createElement("h1",null," A (very approximate) summary of my skills: "),l.a.createElement("ul",null,l.a.createElement("h3",null," Swift/iOS Dev "),l.a.createElement("span",{class:"bar"},l.a.createElement("span",{class:"ios"})),l.a.createElement("h3",null," Python "),l.a.createElement("span",{class:"bar"},l.a.createElement("span",{class:"python"})),l.a.createElement("h3",null," Java "),l.a.createElement("span",{class:"bar"},l.a.createElement("span",{class:"java"})),l.a.createElement("h3",null," MySQL "),l.a.createElement("span",{class:"bar"},l.a.createElement("span",{class:"sql"})),l.a.createElement("h3",null," HTML/CSS "),l.a.createElement("span",{class:"bar"},l.a.createElement("span",{class:"html"})))),l.a.createElement("br",null),l.a.createElement("h1",null," Social: "),l.a.createElement("div",{className:"social-links"},l.a.createElement("a",{href:"https://www.instagram.com/silvanagarcia/",target:"_blank"},l.a.createElement("i",{class:"huge instagram icon"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/silvanagarcia2019/",target:"_blank"},l.a.createElement("i",{class:"huge linkedin icon"}))),l.a.createElement("br",null)))))}}]),a}(n.Component)),w=function(){return l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:y}),l.a.createElement(i.a,{path:"/aboutme",component:d}),l.a.createElement(i.a,{path:"/contact",component:g}))},k=t(16);t(106);var C=function(){return l.a.createElement("div",null,l.a.createElement(m.Layout,{style:{backgroundImage:"url(".concat(t(107),")")}},l.a.createElement(m.Header,{transparent:!0,style:{color:"white"}},l.a.createElement(m.Navigation,null,l.a.createElement(k.b,{to:"/"},"Home"),l.a.createElement(k.b,{to:"/contact"},"Contact"))),l.a.createElement(m.Content,null,l.a.createElement("div",{className:"page-content"}),l.a.createElement(w,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(108),t(109);r.a.render(l.a.createElement(k.a,null,l.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,a,t){e.exports=t.p+"static/media/silvana.50bae1e5.jpg"},47:function(e,a,t){e.exports=t(110)},52:function(e,a,t){},53:function(e,a,t){}},[[47,1,2]]]);
//# sourceMappingURL=main.0f3cd5c4.chunk.js.map