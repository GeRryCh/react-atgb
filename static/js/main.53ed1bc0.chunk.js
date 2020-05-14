(this["webpackJsonpreact-atgb"]=this["webpackJsonpreact-atgb"]||[]).push([[0],{14:function(e,t,r){e.exports=r(25)},19:function(e,t,r){},21:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(2),c=r.n(o),s=(r(19),r(1)),u=r.n(s),i=r(4),l=r(7),h=r(8),f=r(13),m=r(12),p=(r(21),r(9)),v=r.n(p);var w=function(){return a.a.createElement(v.a,{type:"spinningBubbles",color:"#555555",className:"center mv3",height:"32px",width:"32px"})},d=function(e){var t=e.error;return a.a.createElement("h2",{className:"error-color i"},"Oops. An error has occured \ud83e\udd37\ud83c\udffb\u200d\u2640\ufe0f",a.a.createElement("br",null),t.message)},g=function(e){var t=e.country,r=e.status,n=e.error;if(!t)return null;if(n)return a.a.createElement(d,{error:n});if(null===r)return a.a.createElement(w,null);switch(r){case!0:return a.a.createElement("h1",{className:"f1 pos-color"},"YES");default:return a.a.createElement("h1",{className:"f1 neg-color"},"NO")}},y=r(11),b=function(e){var t=e.data,r=e.onSelect,n=e.error;return!t&&n?a.a.createElement(d,{error:n}):t?a.a.createElement(y.a,{className:"tl mw7 mt4 center black-color",classNamePrefix:"react-select",placeholderClassName:"black-color",options:t,onChange:r,placeholder:"Select a country"}):a.a.createElement(w,null)},E=(r(24),function(e){Object(f.a)(r,e);var t=Object(m.a)(r);function r(){var e;return Object(l.a)(this,r),(e=t.call(this)).onCountrySelect=function(t){e.setState({selectedCountry:t,status:null}),e.fetchStatistics(t)},e.state={},e}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.fetchCountries().catch((function(t){return e.setState({error:t})}))}},{key:"fetchCountries",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){return(r=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/countries",{headers:{"Access-Control-Allow-Origin":"*"}});case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},t=function(){return r.apply(this,arguments)},e.next=4,t();case 4:if(n=e.sent,this.log("countries",n),0!==n.length){e.next=8;break}throw new Error("Unable to retrieve countries");case 8:this.setState({countries:n.sort((function(e,t){return e.Country>t.Country?1:e.Country<t.Country?-1:0})).map((function(e){return{label:e.Country,value:e.Slug}}))});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchStatistics",value:function(){var e=Object(i.a)(u.a.mark((function e(t){var r,n,a,o,c=this;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){if(e.count<2)throw new Error("Unable to retrieve statistics");return e[1]<e[0]},n=function(e){var t,r,n=(t="Date",r="Cases",e.reduce((function(e,n){return e[n[t]]=e[n[t]]||0,e[n[t]]+=n[r],e}),{}));return Object.values(n).reduce((function(e,t){return 0===e.prev?(e.prev=t,e):(e.growth.push((t-e.prev)/t),e.prev=t,e)}),{growth:[],prev:0}).growth},r=function(){return(r=Object(i.a)(u.a.mark((function e(t){var r,n,a,o,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(e){var t=e.getMonth()+1,r=e.getDate(),n=t<10&&"0".concat(t)||t,a=r<10&&"0".concat(r)||r,o=e.getFullYear();return"".concat(o,"-").concat(n,"-").concat(a,"T00:00:00Z")},n=new Date,(a=new Date(n)).setDate(n.getDate()-3),o="from=".concat(r(a),"&to=").concat(r(n)),e.next=7,fetch("https://api.covid19api.com/country/".concat(t.value,"/status/confirmed?").concat(o),{headers:{"Access-Control-Allow-Origin":"*"}});case 7:return c=e.sent,e.abrupt("return",c.json());case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)},0!==(o=function(e){return r.apply(this,arguments)}(t)).length){e.next=8;break}throw new Error("Unable to retrieve statistics");case 8:o.then((function(e){return c.log("statistics",e)})).then(n).then((function(e){return c.log("growth",e)})).then(a).then((function(e){return c.log("status",e)})).catch((function(e){return c.setState({error:e})})).then((function(e){c.setState({status:e})}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"log",value:function(e,t){return console.log(e,t),t}},{key:"render",value:function(){var e=this.state,t=e.countries,r=e.selectedCountry,n=e.status,o=e.error;return a.a.createElement("div",{className:"main tc mt5 pl3 pr3"},a.a.createElement("header",{className:"f2"},"Are things getting better in your country?"),a.a.createElement(b,{data:t,onSelect:this.onCountrySelect,error:o}),a.a.createElement(g,{country:r,status:n,error:o}),a.a.createElement("p",{className:"f3 fw4"},"Do the news regarding COVID-19 situation in the world make you anxious, sad or intimidated, while the only information you've been looking is to know if the situation has improved? ",a.a.createElement("br",null),a.a.createElement("br",null),"Then this site is for you. It calculates an answer to this question based on a daily statistics."),a.a.createElement("footer",{className:"mv5"},"For more information check ",a.a.createElement("a",{href:"https://www.worldometers.info/coronavirus/"},"Corona Virus Updates")," for your country"))}}]),r}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.53ed1bc0.chunk.js.map