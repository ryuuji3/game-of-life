(function(e){function t(t){for(var r,a,u=t[0],c=t[1],s=t[2],f=0,h=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&h.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(h.length)h.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/game-of-life/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"062d":function(e,t,n){"use strict";var r=n("48a3"),i=n.n(r);i.a},"48a3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"game-of-life"}},[n("game",{attrs:{width:e.gameWidth,height:e.gameHeight}})],1)},o=[],a=(n("a9e3"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{ref:"game",attrs:{width:e.width,height:e.height}},[e._v(" Your browser sucks. ")])}),u=[],c=n("d4ec"),s=n("ade3");n("4160"),n("159b");function l(e,t,n,r,i,o){var a=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],u=n/i,c=r/o;e.strokeStyle="#060",e.strokeWidth="1px",t.forEach((function(t,n){e.fillStyle=t?"#050":"#000";var r=n%i,o=Math.floor(n/i);e.fillRect(r*c,o*u,c,u),a&&e.strokeRect(r*c,o*u,c,u)}))}n("d81d");function f(e,t){return e.map((function(n,r){var i=n,o=h(e,r,t);return i=i&&o>1&&o<4||!i&&3===o?1:0,i}))}function h(e,t,n){return e[t-1]+e[t+1]+e[t-n]+e[t+n]+e[t-n-1]+e[t-n+1]+e[t+n-1]+e[t+n+1]}n("cb29"),n("96cf");var d=regeneratorRuntime.mark(m);function p(e,t){var n=new Array(e*t).fill(!1),r=Math.floor(Math.random()*(e*t)),i=5,o=3;return n.map((function(t,n){var a=e-n,u=m(a,i,o,r);return 0!==n&&n%e===0&&(u=m(a,i,o,r)),u.next().value%2===0?1:0}))}function m(e){var t,n,r,i=arguments;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:t=i.length>1&&void 0!==i[1]?i[1]:1,n=i.length>2&&void 0!==i[2]?i[2]:0,r=i.length>3&&void 0!==i[3]?i[3]:0;case 3:return r=(t*r+n)%e,o.next=7,r;case 7:o.next=3;break;case 9:case"end":return o.stop()}}),d)}function g(e,t){var n,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:60,o=0,a=window.performance.now();function u(){var c=window.performance.now(),s=1/i;o+=Math.min(1,(c-a)/1e3);while(o>s)o-=s,e();t(),a=c,r&&(n=requestAnimationFrame(u))}return n=requestAnimationFrame(u),function(){r=!1,cancelAnimationFrame(n)}}var v=function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=r.rows,o=void 0===i?50:i,a=r.columns,u=void 0===a?50:a,h=r.fps,d=void 0===h?30:h,m=r.grid,v=void 0===m||m,b=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Object(c["a"])(this,e),Object(s["a"])(this,"start",(function(){n.loop=g(n.update,n.render,n.fps,30)})),Object(s["a"])(this,"update",(function(){n.cells=f(n.cells,n.rows)})),Object(s["a"])(this,"render",(function(){l(n.context,n.cells,n.height,n.width,n.rows,n.columns,n.grid)})),Object(s["a"])(this,"cancel",(function(){n.loop()}));var w=t.getContext("2d"),y=t.width,O=t.height;this.context=w,this.width=y,this.height=O,this.playing=b,this.grid=v,this.rows=o,this.columns=u,this.fps=d,this.cells=p(this.rows,this.columns)},b={name:"Game",data:function(){return{game:null}},props:{width:{type:Number,required:!0},height:{type:Number,required:!0},playing:{type:Boolean,default:!0}},computed:{canvas:function(){return this.$refs.game}},mounted:function(){this.game=new v(this.canvas),this.game.start()},beforeDestroy:function(){this.game.cancel()}},w=b,y=(n("062d"),n("2877")),O=Object(y["a"])(w,a,u,!1,null,"5fc2f430",null),j=O.exports,x={name:"GameOfLife",components:{Game:j},props:{width:{type:Number,default:400},height:{type:Number,default:400}},computed:{gameWidth:function(){return this.width},gameHeight:function(){return this.height}}},_=x,k=(n("96ca"),Object(y["a"])(_,i,o,!1,null,"aa685b7a",null)),M=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(M)}}).$mount("#game-of-life")},"96ca":function(e,t,n){"use strict";var r=n("bd5b"),i=n.n(r);i.a},bd5b:function(e,t,n){}});
//# sourceMappingURL=app.1e57acfb.js.map