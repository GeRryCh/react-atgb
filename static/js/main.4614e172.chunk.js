(this["webpackJsonpreact-atgb"]=this["webpackJsonpreact-atgb"]||[]).push([[0],{14:function(e,t,r){e.exports=r(25)},19:function(e,t,r){},20:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(1),c=r.n(o),s=(r(19),r(4)),u=r(5),i=r(13),l=r(12),h=(r(20),r(9)),f=r.n(h);var m=function(){return a.a.createElement(f.a,{type:"spinningBubbles",color:"#555555",className:"center mv3",height:"32px",width:"32px"})},p=function(e){var t=e.error;return a.a.createElement("h2",{className:"error-color i"},"Oops. An error has occured \ud83e\udd37\ud83c\udffb\u200d\u2640\ufe0f",a.a.createElement("br",null),t.message)},v=function(e){var t=e.country,r=e.status,n=e.error;if(!t)return null;if(n)return a.a.createElement(p,{error:n});if(null===r)return a.a.createElement(m,null);switch(r){case!0:return a.a.createElement("h1",{className:"f1 pos-color"},"YES");default:return a.a.createElement("h1",{className:"f1 neg-color"},"NO")}},d=r(11),w=function(e){var t=e.data,r=e.onSelect,n=e.error;return!t&&n?a.a.createElement(p,{error:n}):t?a.a.createElement(d.a,{className:"tl mw7 mt4 center black-color",classNamePrefix:"react-select",placeholderClassName:"black-color",options:t,onChange:r,placeholder:"Select a country"}):a.a.createElement(m,null)},g=(r(23),r(3)),b=r.n(g),y=r(7),E=function(e){var t=e.getMonth()+1,r=e.getDate(),n=t<10&&"0".concat(t)||t,a=r<10&&"0".concat(r)||r,o=e.getFullYear();return"".concat(o,"-").concat(n,"-").concat(a,"T00:00:00Z")},C=function(){function e(){Object(s.a)(this,e)}return Object(u.a)(e,null,[{key:"fetchCountries",value:function(){var e=Object(y.a)(b.a.mark((function e(){var t,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.covid19api.com/countries",{headers:{"Access-Control-Allow-Origin":"*"}});case 2:return t=e.sent,e.next=5,t.json();case 5:if(r=e.sent,console.log("countries",r),0!==r.length){e.next=9;break}throw new Error("Unable to retrieve countries");case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchStatistics",value:function(){var e=Object(y.a)(b.a.mark((function e(t){var r,n,a,o,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new Date,(n=new Date(r)).setDate(r.getDate()-3),a="from=".concat(E(n),"&to=").concat(E(r)),o="https://api.covid19api.com/country/".concat(t.value,"/status/confirmed?").concat(a),console.log("requestURL",o),e.next=8,fetch(o,{headers:{"Access-Control-Allow-Origin":"*"}});case 8:return c=e.sent,e.next=11,c.json();case 11:if(0!==(s=e.sent).length){e.next=14;break}throw new Error("Unable to retrieve statistics");case 14:return e.abrupt("return",s);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();var k=function(e){var t=function(e){var t,r,n=(t="Date",r="Cases",e.reduce((function(e,n){return e[n[t]]=e[n[t]]||0,e[n[t]]+=n[r],e}),{}));return Object.values(n).reduce((function(e,t){return 0===e.prev?(e.prev=t,e):(e.growth.push((t-e.prev)/t),e.prev=t,e)}),{growth:[],prev:0}).growth}(e);if(t.count<2)throw new Error("Unable to retrieve statistics");return console.log("growth",t),t[1]<t[0]},S=function(e){Object(i.a)(r,e);var t=Object(l.a)(r);function r(){var e;return Object(s.a)(this,r),(e=t.call(this)).onCountrySelect=function(t){e.setState({selectedCountry:t,status:null,error:null}),C.fetchStatistics(t).then((function(e){return k(e)})).catch((function(t){return e.setState({error:t})})).then((function(t){e.setState({status:t})}))},e.state={},e}return Object(u.a)(r,[{key:"componentDidMount",value:function(){var e=this;C.fetchCountries().catch((function(t){return e.setState({error:t})})).then((function(t){return e.setState({countries:t.sort((function(e,t){return e.Country>t.Country?1:e.Country<t.Country?-1:0})).map((function(e){return{label:e.Country,value:e.Slug}}))})}))}},{key:"render",value:function(){var e=this.state,t=e.countries,r=e.selectedCountry,n=e.status,o=e.error;return a.a.createElement("div",{className:"main tc mt5 pl3 pr3"},a.a.createElement("header",{className:"f2"},"Are things getting better in your country?"),a.a.createElement(w,{data:t,onSelect:this.onCountrySelect,error:o}),a.a.createElement(v,{country:r,status:n,error:o}),a.a.createElement("p",{className:"f3 fw4"},"Do the news regarding COVID-19 situation in the world make you anxious, sad or intimidated, while the only information you've been looking is to know if the situation has improved? ",a.a.createElement("br",null),a.a.createElement("br",null),"Then this site is for you. It produces an answer based on a daily statistics."),a.a.createElement("footer",{className:"mv5"},"For more information check ",a.a.createElement("a",{href:"https://www.worldometers.info/coronavirus/"},"Corona Virus Updates")," for your country"))}}]),r}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.4614e172.chunk.js.map