(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,n,i){e.exports=i(71)},36:function(e,n,i){},70:function(e,n,i){},71:function(e,n,i){"use strict";i.r(n);i(35),i(36);var o=i(0),t=i.n(o),a=i(30),s=i.n(a),l=i(7),r=i(8),c=function(){return t.a.createElement("nav",{className:"navbar-comp"},t.a.createElement(l.b,{className:"navbar-brand",to:"/"},"Flex On Your Boo Space"),t.a.createElement("div",{className:"form-inline"},t.a.createElement("ul",{className:"nav justify-content-end"},t.a.createElement("li",{className:"nav-item"},t.a.createElement(l.b,{className:"nav-link active",to:"/"},t.a.createElement("div",{className:"earth_home_button"}))))))},u={textAlign:"center",padding:"100px"},p=function(){return t.a.createElement("div",{style:u},t.a.createElement("h1",null,"Welcome to Space Boo"))},h=i(33),d=i(12),m=i(13),f=i(15),b=i(14),g=i(16),v=i(6),w=i.n(v),y=i(10),E="https://api.nasa.gov/planetary/apod?api_key=".concat("wdbUH5Fz9oiRWuwhOFV4bhiq70qbs9gfQJTFEu7M"),N=i(11),V=i.n(N),k={};k.getSpaceInfo=function(){var e=Object(y.a)(w.a.mark(function e(n){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get(E,{params:{date:n,hd:!0}}).then(function(e){return e.data});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}();var O=k,C={getHoroscopeSign:function(e){var n=e.split("-"),i=parseInt(n[1]),o=parseInt(n[2]),t="";return 1===i?t=o>=21?"Aquarius":"Capricorn":2===i?t=o>=20?"Pisces":"Aquarius":3===i?t=o>=21?"Aries":"Pisces":4===i?t=o>=21?"Taurus":"Aries":5===i?t=o>=22?"Gemini":"Taurus":6===i?t=o>=22?"Cancer":"Gemini":7===i?t=o>=23?"Leo":"Cancer":8===i?t=o>=23?"Virgo":"Leo":9===i?t=o>=24?"Libra":"Virgo":10===i?t=o>=24?"Scorpio":"Libra":11===i?t=o>=23?"Sagittarius":"Scorpio":12===i&&(t=o>=22?"Capricorn":"Sagittarius"),t}},F=C,R=Object({NODE_ENV:"production",PUBLIC_URL:"/Flex-On-Your-Space-Boo-Frontend"}).DATABASE_URL||"http://localhost:5005",x={};x.getSpaceCard=function(){var e=Object(y.a)(w.a.mark(function e(n){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("".concat(R,"/booSpace/").concat(n)).then(function(e){return e.data});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),x.getAllSpaceCards=Object(y.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("".concat(R,"/booSpace/all")).then(function(e){return e.data});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),x.createSpaceCard=function(){var e=Object(y.a)(w.a.mark(function e(n,i,o,t,a,s,l,r){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.post("".concat(R,"/booSpace/"),{toName:n,fromName:i,personalNote:o,img_url:t,horoscopeSign:a,description:l,spaceDate:s,title:r}).then(function(e){return e.data});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}));return function(n,i,o,t,a,s,l,r){return e.apply(this,arguments)}}();var z=x,S=function(e){function n(){var e,i;Object(d.a)(this,n);for(var o=arguments.length,t=new Array(o),a=0;a<o;a++)t[a]=arguments[a];return(i=Object(f.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(t)))).state={toName:"",fromName:"",personalNote:"",title:"",img_url:"",spaceDate:"",description:"",error:null},i.handleChange=function(e){i.setState(Object(h.a)({},e.target.name,e.target.value))},i.checkRequired=function(){return i.state.spaceDate.length>0},i.handleSubmit=function(e){e.preventDefault();var n=i.state,o=n.toName,t=n.fromName,a=n.personalNote,s=n.spaceDate;if(i.checkRequired()){var l=F.getHoroscopeSign(s);O.getSpaceInfo(s).then(function(e){var n=e.hdurl,i=e.explanation,r=e.title;return z.createSpaceCard(o,t,a,n,l,s,i,r)},function(){return i.setState({error:"Please provide a valid date"})}).then(function(e){var n=e.data;i.props.history.push("/spacecard/"+n[0].id)})}else i.setState({error:"Please provide a date"})},i}return Object(g.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){var e=this.state.error;return t.a.createElement("form",{className:"needs-validation",onSubmit:this.handleSubmit},t.a.createElement("div",{className:"col-4"},t.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInputGroup"},"To"),t.a.createElement("div",{className:"input-group mb-2"},t.a.createElement("div",{className:"input-group-prepend"},t.a.createElement("div",{className:"input-group-text"},"To:")),t.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleChange,name:"toName",id:"inlineFormInputGroup",placeholder:"Ya boo's name..."}))),t.a.createElement("div",{className:"col-4"},t.a.createElement("label",{className:"sr-only",htmlFor:"inlineFormInputGroup"},"From:"),t.a.createElement("div",{className:"input-group mb-2"},t.a.createElement("div",{className:"input-group-prepend"},t.a.createElement("div",{className:"input-group-text"},"From:")),t.a.createElement("input",{type:"text",className:"form-control",onChange:this.handleChange,name:"fromName",id:"inlineFormInputGroup",placeholder:"(Optional) Your name..."}))),t.a.createElement("div",{className:"ml-3"},t.a.createElement("label",null,"Choose your space fate..."),t.a.createElement("input",{type:"date",className:"ml-3 mb-2",onChange:this.handleChange,name:"spaceDate"}),e?t.a.createElement("h2",{className:"ml-2"},e):null),t.a.createElement("textarea",{className:"form-control ml-3 col-4",name:"personalNote",id:"exampleFormControlTextarea1",rows:"2"}),t.a.createElement("button",{type:"submit",className:"btn btn-primary ml-3 my-2"},"Submit"))}}]),n}(t.a.Component),I=Object(r.e)(S),A=function(e){return t.a.createElement(t.a.Fragment,null,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",t.a.createElement("div",{className:"welcome"},t.a.createElement(p,null)),"\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",t.a.createElement("div",{className:"message-info"},t.a.createElement(I,null)))},q=i(20),T=i.n(q),P=(i(70),function(e){function n(e){var i;return Object(d.a)(this,n),(i=Object(f.a)(this,Object(b.a)(n).call(this,e))).state={date:"",spaceDate:"",description:"",fromname:"",horoscropesign:"",id:"",img_url:"",personalnote:"",title:"",toname:""},i}return Object(g.a)(n,e),Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this,n=this.props.match.params.id;z.getSpaceCard(n).then(function(n){var i=n.msg,o=i.date,t=i.spaceDate,a=i.description,s=i.fromname,l=i.horoscropesign,r=i.id,c=i.img_url,u=i.personalnote,p=i.title,h=i.toname;e.setState({date:o,spaceDate:t,description:a,fromname:s,horoscropesign:l,id:r,img_url:c,personalnote:u,title:p,toname:h})})}},{key:"render",value:function(){var e=this.state,n=e.date,i=(e.spaceDate,e.description),o=e.fromname,a=e.horoscropesign,s=(e.id,e.img_url),l=e.personalnote,r=(e.title,e.toname,t.a.createElement("p",null,"Dear My Boo"));return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"container text-white mt-4 mb-4 spaceCard-container"},t.a.createElement("div",{style:{height:"200px",background:"transparent"}}),t.a.createElement("div",{style:{backgroundColor:"#cfcfd1db",boxShadow:"black 0px 16px 10px 0px"}},t.a.createElement("div",{className:"spaceCard-heart"}),t.a.createElement("div",{className:"spaceCard-imageBox",style:{backgroundImage:"url(".concat(s,")")}},t.a.createElement("p",{className:"spaceCard-center-flirt"},"I'm attracted to you like the Earth is attracted to the Sun-with a large force inversely proportional to the distance squared"),t.a.createElement("p",{className:"space-grey spaceCard-date-right"},T()(n).subtract(10,"days").calendar()),t.a.createElement("p",{className:"space-grey spaceCard-horoscope-right"},a),t.a.createElement("p",{className:"space-grey spaceCard-date-left"},T()(n).subtract(10,"days").calendar()),t.a.createElement("p",{className:"space-grey spaceCard-horoscope-left"},a)),t.a.createElement("div",{className:"spaceCard-Lorem"},t.a.createElement("h1",{className:"card-title mb-4 mt-4"},this.state.toname.length>0?"Dear "+this.state.toname:r),t.a.createElement("div",{className:"spaceCardArrow"}),t.a.createElement("p",null,"Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions. Vangelis encyclopaedia galactica a billion trillion Apollonius of Perga Orion's sword of brilliant syntheses. The carbon in our apple pies ship of the imagination the sky calls to us Rig Veda emerged into consciousness tendrils of gossamer clouds? Inconspicuous motes of rock and gas Rig Veda vanquish the impossible finite but unbounded citizens of distant epochs another world. From which we spring bits of moving fluff star stuff harvesting star light hearts of the stars citizens of distant epochs invent the universe and billions upon billions upon billions upon billions upon billions upon billions upon billions.")),t.a.createElement("div",{className:"spaceCard-Info"},t.a.createElement("p",{className:"spaceCard-personalNote"},"Personal Note:",l),t.a.createElement("p",{className:"spaceCard-nasaFact"},"Facts: ",i),o?t.a.createElement("h1",null,"From: ",o):null))))}}]),n}(t.a.Component));var j=function(){return t.a.createElement("div",{className:"app_container"},t.a.createElement(r.a,{to:"/",component:c}),t.a.createElement("div",{className:"page-container"},t.a.createElement(r.c,null,t.a.createElement(r.a,{path:"/",exact:!0,component:A}),t.a.createElement(r.a,{path:"/spaceCard/:id",exact:!0,component:P}))))};s.a.render(t.a.createElement(l.a,null,t.a.createElement(j,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.5d0031eb.chunk.js.map