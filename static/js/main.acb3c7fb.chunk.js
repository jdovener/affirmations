(this.webpackJsonpaffirmations=this.webpackJsonpaffirmations||[]).push([[0],{14:function(e,t,o){},16:function(e,t,o){},17:function(e,t,o){"use strict";o.r(t);var a=o(1),n=o.n(a),u=o(8),i=o.n(u),r=(o(14),o(9)),s=o(2),c=o(3),l=o(5),m=o(4),f=o(7),d=o(0),h=function(e){Object(l.a)(o,e);var t=Object(m.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"fadeIn",style:{color:"grey"},children:Object(d.jsxs)("h1",{id:"quote",children:['"',this.props.quote,'"']})},Math.random())}}]),o}(n.a.Component),q=[{quote:"I have great friends"},{quote:"I am young"},{quote:"I am creative"},{quote:"I am healthy"},{quote:"I am capable of reaching my goals"},{quote:"I have achieved a lot"},{quote:"I am smart"},{quote:"I exist against all odds"},{quote:"I live on a beautiful planet"},{quote:"I am thoughtful"},{quote:"I stand up for my beliefs"},{quote:"I am not afraid to offer my friends contructive criticisim"},{quote:"I am dedicated"},{quote:"Everything always works out in the end"},{quote:"Help is available if I need it"},{quote:"My life is filled with opportunity"},{quote:"I am talented"},{quote:"I often step out of my comfort zone to better myself"},{quote:"None of my senses are heavily impaired"},{quote:"I take time to be mindful and present in the moment"},{quote:"None of my limbs are impaired"},{quote:"I am appreciative to the people in my life"},{quote:"I am considerate"},{quote:"I have no crippling illnesses"},{quote:"I care for the environment"},{quote:"I laugh often"},{quote:"I am insightful"},{quote:"I learn from my mistakes"},{quote:"I dream often"},{quote:"I take care of my body"},{quote:"I have a priveledged life"},{quote:"I constantly make efforts to educate myself"},{quote:"I am good with money"},{quote:"I am very open minded"},{quote:"I have had plenty of positive relations"},{quote:"I am well articulated"},{quote:"I communicate well"},{quote:"I make friends easily"},{quote:"I have good vocabulary"},{quote:"I am not the only one who struggles"},{quote:"I have a kind, functional family"},{quote:"I am a proficient musician"},{quote:"Negative thoughts detract nothing from positive thoughts"},{quote:"I am more capable than I give myself credit for"},{quote:"I am modest"},{quote:"Life goes on"},{quote:"I trust myself"},{quote:"I communicate well with my body"},{quote:"I am adept at problem solving"},{quote:"I am constantly progressing"},{quote:"I don't need other people's approval"},{quote:"I am human; I make mistakes"},{quote:"It's ok to change my mind"},{quote:"I can admit my flaws and show humility"},{quote:"I am respectful"},{quote:"Nothing is permanent"}];var I=function(e){var t=Object(a.useState)([]),o=Object(f.a)(t,2),u=o[0],i=o[1],r=Object(a.useState)(0),s=Object(f.a)(r,2),c=s[0],l=s[1];return Object(a.useEffect)((function(){for(var e=q.sort((function(){return Math.random()-.5})),t=[],o=0;o<3;o+=1)t.push(e[o]);i(t)}),[c]),document.documentElement.style.backgroundColor="black",Object(d.jsxs)("div",{style:{backgroundColor:"white"},className:"quotebox",children:[u.map((function(e){return Object(d.jsx)(n.a.Fragment,{children:Object(d.jsx)(h,{quote:e.quote})},e.quote)})),Object(d.jsx)("button",{style:{backgroundColor:"grey"},id:"newquote",onClick:function(){l(c+1)},children:"Affirmations"})]})},y=(o(16),function(e){Object(l.a)(o,e);var t=Object(m.a)(o);function o(){var e;return Object(s.a)(this,o),(e=t.call(this)).handleClick=function(){var t=e.randomQuote();e.setState({quote:t.quote,author:t.author}),e.shuffleQuotes(q)},e.state={quote:q[0].quote,author:q[0].author},e}return Object(c.a)(o,[{key:"randomQuote",value:function(){var e=Math.floor(Math.random()*q.length);return q[e]}},{key:"shuffleQuotes",value:function(e){return e.sort((function(){return Math.random()-.5}))}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(I,Object(r.a)({displayColor:this.randomColor,handleClick:this.handleClick},this.state))})}}]),o}(n.a.Component)),p=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,18)).then((function(t){var o=t.getCLS,a=t.getFID,n=t.getFCP,u=t.getLCP,i=t.getTTFB;o(e),a(e),n(e),u(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.acb3c7fb.chunk.js.map