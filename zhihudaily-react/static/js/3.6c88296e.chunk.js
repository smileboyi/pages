(window["webpackJsonpzhihudaily-react"]=window["webpackJsonpzhihudaily-react"]||[]).push([[3],{94:function(e,a,t){e.exports=t.p+"static/media/fold.36aaa468.svg"},95:function(e,a,t){e.exports=t.p+"static/media/like.9cf10b17.svg"},96:function(e,a,t){},98:function(e,a,t){"use strict";t.r(a);var c=t(12),n=t(0),s=t.n(n),m=t(7),l=t(22),i=t.n(l),o=t(11),r=t(9),d=t(94),u=t.n(d),p=t(95),h=t.n(p),v=(t(96),Object(n.memo)((function(){var e=Object(n.useState)([]),a=Object(c.a)(e,2),t=a[0],l=a[1],d=Object(n.useState)([]),p=Object(c.a)(d,2),v=p[0],E=p[1],N=Object(n.useContext)(r.a),f=N.appState,b=N.appDispatch,g=Object(n.useState)(!1),O=Object(c.a)(g,2),y=O[0],k=O[1],j=Object(m.h)().id,S=Object(m.f)(),w=Object(m.g)(),x=Object(n.useMemo)((function(){return y?{}:{height:0,visibility:"hidden",overflow:"hidden"}}),[y]);return Object(n.useEffect)((function(){f.sideBarInfo.data||b({type:"SET_SIDEBAR_INFO",payload:{type:"comment",data:{}}}),i.a.get("https://zhihu-daily.leanapp.cn/api/v1/contents/".concat(j,"/long-comments")).then((function(e){200===e.status&&l(e.data.COMMENTS.comments)})).catch((function(e){console.log(e)})),i.a.get("https://zhihu-daily.leanapp.cn/api/v1/contents/".concat(j,"/short-comments")).then((function(e){200===e.status&&E(e.data.COMMENTS.comments)})).catch((function(e){console.log(e)}))}),[]),s.a.createElement("div",{className:"storie-comment fe ovh"},s.a.createElement("div",{className:"comment-box h100 ovys"},s.a.createElement("div",{className:"head"},s.a.createElement("span",{className:"text"},t.length,"\u6761\u957f\u8bc4")),s.a.createElement("div",{className:"list"},t.map((function(e,a){return s.a.createElement("div",{className:"item",key:a},s.a.createElement("i",{className:"avatar",style:{backgroundImage:"url(".concat(e.avatar,")")}}),s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"bar"},s.a.createElement("span",{className:"name"},e.author),s.a.createElement("span",{className:"like"},s.a.createElement(o.a,{className:"like-svg",src:h.a}),e.likes)),s.a.createElement("div",{className:"content"},e.content),s.a.createElement("div",{className:"datetime"},e.time)))}))),s.a.createElement("div",{className:"head",id:"shortCommentsBae"},s.a.createElement("span",{className:"text"},v.length,"\u6761\u77ed\u8bc4"),s.a.createElement(o.a,{className:"fold-svg",src:u.a,style:{transform:"rotate(".concat(y?0:180,"deg)")},onClick:function(){k(!y),S.replace(w.pathname+"#shortCommentsBae")}})),s.a.createElement("div",{className:"list",style:x},v.map((function(e,a){return s.a.createElement("div",{className:"item",key:a},s.a.createElement("i",{className:"avatar",style:{backgroundImage:"url(".concat(e.avatar,")")}}),s.a.createElement("div",{className:"main"},s.a.createElement("div",{className:"bar"},s.a.createElement("span",{className:"name"},e.author),s.a.createElement("span",{className:"like"},s.a.createElement(o.a,{className:"like-svg",src:h.a}),e.likes)),s.a.createElement("div",{className:"content"},e.content),s.a.createElement("div",{className:"datetime"},e.time)))})))))})));a.default=v}}]);
//# sourceMappingURL=3.6c88296e.chunk.js.map