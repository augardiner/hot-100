(this["webpackJsonptop-100"]=this["webpackJsonptop-100"]||[]).push([[0],{130:function(e,t,a){},132:function(e){e.exports=JSON.parse('[{"title":"Tempo","desctiption":"The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration."},{"title":"Energy","desctiption":"A measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy."},{"title":"Danceability","desctiption":"Describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable."},{"title":"Instrumentalness","desctiption":"Predicts whether a track contains no vocals. \u201cOoh\u201d and \u201caah\u201d sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly \u201cvocal\u201d. The closer the instrumentalness value is to 1.0, the greater likelihood the track contains no vocal content. Values above 0.5 are intended to represent instrumental tracks, but confidence is higher as the value approaches 1.0."},{"title":"Liveness","desctiption":"Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. A value above 0.8 provides strong likelihood that the track is live."},{"title":"Speechiness","desctiption":"Detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value. Values above 0.66 describe tracks that are probably made entirely of spoken words. Values between 0.33 and 0.66 describe tracks that may contain both music and speech, either in sections or layered, including such cases as rap music. Values below 0.33 most likely represent music and other non-speech-like tracks."},{"title":"Acousticness","desctiption":"A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic."}]')},134:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),s=a(120),i=a.n(s),c=(a(130),a(52)),l=a(86),o=a.n(l),d=a(112),u=a(16),h=function(e){var t=e.initValue,a=e.submitFunc,r=Object(n.useState)(t),s=Object(c.a)(r,2),i=s[0],l=s[1],o=(new Date).toISOString().slice(0,10);return Object(u.jsxs)("form",{className:"topBar",onSubmit:function(e){e.preventDefault(),i&&a(i)},children:[Object(u.jsx)("input",{className:"inputField",type:"date",value:i,onChange:function(e){var t=e.target.value;l(t)},min:"1958-07-27",max:o}),Object(u.jsx)("input",{className:"inputBtn",type:"submit",value:"Go"})]})},b=a(41),p=a(53),j=a(116);b.d(j.a);var m=function(e){var t=e.data,a="radialChart",n=b.b(a,p.e);n.data=t,n.startAngle=-90,n.endAngle=180,n.innerRadius=b.c(30),n.numberFormatter.numberFormat="###";var r=n.yAxes.push(new p.a);r.dataFields.category="feature",r.renderer.grid.template.strokeOpacity=0,r.renderer.labels.template.horizontalCenter="right",r.renderer.labels.template.fontSize=16,r.renderer.labels.template.adapter.add("fill",(function(e,t){return t.dataItem.index>=0?n.colors.getIndex(t.dataItem.index):e})),r.renderer.minGridDistance=10;var s=n.xAxes.push(new p.g);s.renderer.grid.template.strokeOpacity=0,s.min=0,s.max=100,s.strictMinMax=!0,s.renderer.labels.template.fontSize=11,s.renderer.labels.template.fill=b.a("rgb(230, 230, 230)"),s.renderer.labels.template.fillOpacity=.8;var i=n.series.push(new p.f);i.dataFields.valueX="full",i.dataFields.categoryY="feature",i.clustered=!1,i.columns.template.fill=new b.a("#262626"),i.columns.template.strokeWidth=0,i.columns.template.radarColumn.cornerRadius=5;var c=n.series.push(new p.f);return c.dataFields.valueX="mean",c.dataFields.categoryY="feature",c.columns.template.strokeWidth=0,c.columns.template.tooltipText="{mean}",c.columns.template.radarColumn.cornerRadius=5,c.columns.template.adapter.add("fill",(function(e,t){return n.colors.getIndex(t.dataItem.index)})),Object(u.jsx)("div",{id:a,style:{width:"50%",height:"300px"}})},x=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(c.a)(s,2),l=i[0],b=i[1],p=Object(n.useState)(null),j=Object(c.a)(p,2),x=j[0],f=j[1],v=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!1),f(!1),"week",a="".concat(t),e.next=6,fetch("/api/".concat("week","/").concat(a));case 6:if(!((n=e.sent).status>299)){e.next=11;break}return b(!0),f(n.statusText),e.abrupt("return");case 11:return e.next=13,n.json();case 13:0===(s=e.sent).length?(f("No Data Found"),b(!0)):(r(s),b(!0));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v((new Date).toISOString().slice(0,10))}),[]),Object(u.jsxs)("div",{className:"section",children:[Object(u.jsx)(h,{submitFunc:v,initValue:(new Date).toISOString().slice(0,10)}),Object(u.jsx)("div",{className:"chartSection",children:Object(u.jsx)(m,{data:a.averages})}),Object(u.jsxs)("div",{className:"scroll",children:[x&&Object(u.jsx)("h1",{className:"error",children:x}),!l&&Object(u.jsx)("h1",{className:"loading",children:". . ."}),l&&!x&&a.songs.map((function(e,t){return Object(u.jsxs)("div",{className:"trackRow",children:[Object(u.jsx)("h1",{className:"rowEl rank",children:e.rank}),Object(u.jsxs)("span",{className:"trackData",children:[Object(u.jsx)("h4",{className:"rowEl artist",children:e.artist}),Object(u.jsx)("h5",{className:"rowEl track",children:e.track})]})]},t)}))]})]})},f=function(e){var t=e.submitFunc,a=Object(n.useState)(),r=Object(c.a)(a,2),s=r[0],i=r[1];return Object(u.jsxs)("form",{className:"topBar",onSubmit:function(e){e.preventDefault(),s&&t(s)},children:[Object(u.jsxs)("select",{name:"feature",className:"inputField",onChange:function(e){var t=e.target.value;i(t)},children:[Object(u.jsx)("option",{value:"tempo",children:"Tempo"}),Object(u.jsx)("option",{value:"energy",children:"Energy"}),Object(u.jsx)("option",{value:"danceability",children:"Danceability"}),Object(u.jsx)("option",{value:"instrumentalness",children:"Instrumentalness"}),Object(u.jsx)("option",{value:"liveness",children:"Liveness"}),Object(u.jsx)("option",{value:"speechiness",children:"Speechiness"}),Object(u.jsx)("option",{value:"acousticness",children:"Acousticness"})]}),Object(u.jsx)("input",{className:"inputBtn",type:"submit",value:"Go"})]})};b.d(j.a);var v,O,g,y=function(e){var t=e.data,a="featureChart",n="rgb(230, 230, 230)",r=b.b(a,p.h);r.data=t,r.dateFormatter.dateFormat="yyyy";var s=r.xAxes.push(new p.b);s.gridIntervals.setAll([{timeUnit:"year",count:1},{timeUnit:"year",count:5},{timeUnit:"year",count:10}]),s.renderer.grid.template.stroke=b.a(n),s.renderer.labels.template.fontSize=12,s.renderer.labels.template.fill=b.a(n),s.renderer.labels.template.opacity=.9;var i=r.yAxes.push(new p.g);i.renderer.grid.template.stroke=b.a(n),i.renderer.labels.template.fontSize=11,i.renderer.labels.template.fill=b.a(n),i.renderer.labels.template.opacity=.9;var c=r.series.push(new p.d);c.dataFields.dateX="year",c.dataFields.valueY="value",c.strokeWidth=2,c.tensionX=.8,c.legendSettings.labelText="Annual Average",c.stroke=b.a("rgb(68, 54, 119)"),c.strokeDasharray="3,3";var l=r.series.push(new p.d);return l.dataFields.dateX="year",l.dataFields.valueY="rolling",l.strokeWidth=2,l.tensionX=.8,l.legendSettings.labelText="3 Year Rolling Average",l.stroke=b.a("rgb(128,103,220)"),r.cursor=new p.i,r.cursor.xAxis=s,r.cursor.lineX.stroke=b.a(n),r.cursor.lineX.strokeWidth=2,r.cursor.lineX.strokeDasharray="2,2",r.cursor.lineY.stroke=b.a(n),r.cursor.lineY.strokeWidth=2,r.cursor.lineY.strokeDasharray="2,2",r.cursor.snapToSeries=[c,l],r.legend=new p.c,r.legend.position="bottom",r.legend.contentAlign="right",r.legend.labels.template.fontSize=14,r.legend.labels.template.fontWeight=300,r.legend.labels.template.fill=b.a(n),r.legend.labels.template.opacity=.9,r.legend.itemContainers.template.paddingTop=0,r.legend.itemContainers.template.paddingBottom=0,Object(u.jsx)("div",{id:a,style:{width:"100%",height:"350px",marginTop:"10px"}})},k=a(132),w=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),i=Object(c.a)(s,2),l=i[0],h=i[1],b=Object(n.useState)(null),p=Object(c.a)(b,2),j=p[0],m=p[1],x=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!1),m(!1),"analysis",a="".concat(t),e.next=6,fetch("/api/".concat("analysis","/").concat(a));case 6:if(!((n=e.sent).status>299)){e.next=11;break}return h(!0),m(n.statusText),e.abrupt("return");case 11:return e.next=13,n.json();case 13:0===(s=e.sent).length?(m("No Data Found"),h(!0)):(r(s),h(!0));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x("tempo")}),[]),Object(u.jsxs)("div",{className:"section",children:[Object(u.jsx)(f,{submitFunc:x,initValue:"tempo"}),j&&Object(u.jsx)("h1",{className:"error",children:j}),!l&&Object(u.jsx)("h1",{className:"loading",children:". . ."}),Object(u.jsx)("div",{className:"chartSection",children:Object(u.jsx)(y,{data:a.data})}),Object(u.jsxs)("h4",{className:"audioFeatures",children:["Audio Features (",Object(u.jsx)("a",{className:"sourceLink",target:"_blank",rel:"noopener noreferrer",href:"https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject",children:"Source"}),")"]}),Object(u.jsx)("div",{className:"featureDescription scroll",children:k.map((function(e,t){return Object(u.jsxs)("p",{children:[Object(u.jsxs)("b",{children:[e.title,": "]}),e.desctiption]})}))})]})},N=function(){return Object(u.jsx)("div",{className:"section",children:Object(u.jsxs)("div",{className:"aboutContent scroll",children:[Object(u.jsx)("h2",{children:"The Billboard Hot 100"}),Object(u.jsxs)("div",{className:"aboutSection",children:[Object(u.jsxs)("p",{children:["The"," ",Object(u.jsx)("a",{href:"https://www.billboard.com/charts/hot-100",children:"Billboard Hot 100"})," ","is the music industry standard record chart in the United States for songs, published weekly by Billboard magazine. Chart rankings are based on sales (physical and digital), radio play, and online streaming in the United States."]}),Object(u.jsx)("p",{children:'The first number one song of the Billboard Hot 100 was "Poor Little Fool" by Ricky Nelson, on August 4, 1958.'}),Object(u.jsx)("a",{href:"https://en.wikipedia.org/wiki/Billboard_Hot_100",children:"Source"})]}),Object(u.jsxs)("div",{className:"aboutSection",children:[Object(u.jsx)("h2",{children:"API"}),Object(u.jsx)("p",{children:"The API is written in Python with the Flask framework."}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Tracks: "}),"There is a separate weekly script, running weekly, which scrapes the Billboard site page and adds each song into the database."]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Data: "}),"The weekly script uses the"," ",Object(u.jsx)("a",{href:"https://spotipy.readthedocs.io/en/2.18.0/",children:"Spotipy"})," ","library to get"," ",Object(u.jsx)("a",{href:"https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject",children:"Spotify Audio Features"})," ","for each track, used for visualizations."]}),Object(u.jsx)("p",{children:Object(u.jsx)("b",{children:"Endpoints:"})}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["/api/week/","<week>"," : get songs ranked 0-100 for ","<week>"," in YYYY-MM-DD format"]}),Object(u.jsxs)("li",{children:["/api/artist/","<artist>"," : get all appeareances where the artist column contains ","<artist>"]}),Object(u.jsxs)("li",{children:["/api/track/","<spotify_id>"," : get all appeareances of track where the spotify_id column equals ","<spotify_id>"]}),Object(u.jsxs)("li",{children:["/api/analysis/","<feature>"," : get the annual average and 3 year rolling average for ","<feature>"]})]})]}),Object(u.jsxs)("div",{className:"aboutSection",children:[Object(u.jsx)("h2",{children:"Front End"}),Object(u.jsx)("p",{children:"The front end is written in Javascript with the React library."}),Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Visualizations: "}),"Visualizations are created using the"," ",Object(u.jsx)("a",{href:"https://www.amcharts.com/",children:"amCharts"})," library."]})]}),Object(u.jsx)("a",{href:"https://github.com/augardiner/hot-100",className:"githubLink",children:"Source Code"})]})})},S=a(88),T=a(89),F=T.a.div(v||(v=Object(S.a)(["\n  ","\n"])),(function(e){return e.activeTab?"":"display:none"})),A=T.a.div(O||(O=Object(S.a)(["\n  margin: 5px 0;\n  padding: 0 10px;\n  text-align: right;\n  font-size: 25px;\n  font-weight: 700;\n  cursor: pointer;\n  border-radius: 3px;\n  ",";\n\n  :hover {\n    ",";\n  }\n"])),(function(e){return e.activeTab?"color: rgb(128, 103, 220)":""}),(function(e){return e.activeTab?"":"color: rgb(128, 103, 220)"})),C=T.a.div(g||(g=Object(S.a)(["\n  margin: 5px 0;\n  padding: 0 10px;\n  text-align: right;\n  font-size: 20px;\n  font-weight: 700;\n  cursor: pointer;\n  border-radius: 3px;\n  ",";\n\n  :hover {\n    ",";\n  }\n"])),(function(e){return e.activeTab?"color: rgb(128, 103, 220)":""}),(function(e){return e.activeTab?"":"color: rgb(128, 103, 220)"})),D=function(e){var t=e.handleClick,a=e.activeTab;return Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsx)("div",{className:"titleContainer",children:Object(u.jsx)("div",{className:"titleContent",children:"Hot 100"})}),Object(u.jsxs)("div",{className:"tabContainer",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)(A,{onClick:t,activeTab:0===a,id:0,children:"Tracks"}),Object(u.jsx)(A,{onClick:t,activeTab:1===a,id:1,children:"Trends"})]}),Object(u.jsx)("div",{className:"lowerTabs",children:Object(u.jsx)(C,{onClick:t,activeTab:3===a,id:3,children:"About"})})]})]})};var I=function(){var e=Object(n.useState)(0),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)("div",{className:"app",children:[Object(u.jsx)(D,{handleClick:function(e){var t=parseInt(e.target.id,0);t!==a&&r(t)},activeTab:a}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(F,{activeTab:0===a,children:Object(u.jsx)(x,{})}),Object(u.jsx)(F,{activeTab:1===a,children:Object(u.jsx)(w,{})}),Object(u.jsx)(F,{activeTab:3===a,children:Object(u.jsx)(N,{})})]}),Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("span",{className:"footerContainer",children:Object(u.jsx)("p",{className:"sig",children:"AUG | 2021"})})})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root"))}},[[134,1,4]]]);
//# sourceMappingURL=main.dcedb714.chunk.js.map