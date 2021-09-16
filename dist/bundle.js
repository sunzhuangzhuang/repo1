!function(){"use strict";var e={433:function(e,t,n){var o=n(645),i=n.n(o)()((function(e){return e[1]}));i.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  font: bold 20px 'Courier';\n}\n#main {\n  width: 360px;\n  height: 420px;\n  background-color: #b7d4a8;\n  margin: 100px auto;\n  border: 10px solid black;\n  border-radius: 40px;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n  justify-content: space-around;\n}\n#main #stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n}\n#main #stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#main #stage #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 20px;\n  left: 30px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  align-content: space-between;\n}\n#main #stage #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n  transform: rotate(45deg);\n}\n#main #score-panel {\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n}\n",""]),t.Z=i},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:function(e){var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],s=0;s<e.length;s++){var c=e[s],l=o.base?c[0]+o.base:c[0],u=r[l]||0,f="".concat(l," ").concat(u);r[l]=u+1;var h=n(f),d={css:c[1],media:c[2],sourceMap:c[3]};-1!==h?(t[h].references++,t[h].updater(d)):t.push({identifier:f,updater:i(d,o),references:1}),a.push(f)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=n(r[a]);t[s].references--}for(var c=o(e,i),l=0;l<r.length;l++){var u=n(r[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=c}}},569:function(e){var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=n(379),t=n.n(e),o=n(795),i=n.n(o),r=n(569),a=n.n(r),s=n(565),c=n.n(s),l=n(216),u=n.n(l),f=n(589),h=n.n(f),d=n(433),p={};function v(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}p.styleTagTransform=h(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=i(),p.insertStyleElement=u(),t()(d.Z,p),d.Z&&d.Z.locals&&d.Z.locals;var m=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.head=document.querySelector("#snake > div"),this.element=document.getElementById("snake"),this.bodies=this.element.getElementsByTagName("div")}var t,n;return t=e,(n=[{key:"X",get:function(){return this.head.offsetLeft},set:function(e){if(this.X!==e){if(e<0||e>290)throw new Error("蛇撞墙了");this.bodies[1]&&this.bodies[1].offsetLeft===e&&(console.log("水平方向发生掉头"),e=e>this.X?this.X-10:this.X+10),this.moveBody(),this.head.style.left="".concat(e,"px"),this.checkHeadBody()}}},{key:"Y",get:function(){return this.head.offsetTop},set:function(e){if(console.log(e),this.Y!==e){if(e<0||e>290)throw new Error("蛇撞墙了");this.bodies[1]&&this.bodies[1].offsetTop===e&&(console.log("水平方向发生掉头"),e=e>this.Y?this.Y-10:this.Y+10),this.moveBody(),this.head.style.top="".concat(e,"px"),this.checkHeadBody()}}},{key:"addBody",value:function(){this.element.insertAdjacentHTML("beforeend","<div></div>")}},{key:"moveBody",value:function(){for(var e=this.bodies.length-1;e>0;e--){var t=this.bodies[e-1].offsetLeft,n=this.bodies[e-1].offsetTop;this.bodies[e].style.left=t+"px",this.bodies[e].style.top=n+"px"}}},{key:"checkHeadBody",value:function(){for(var e=1;e<this.bodies.length;e++){var t=this.bodies[e];if(this.X===t.offsetLeft&&this.Y===t.offsetTop)throw new Error("撞到自己了")}}}])&&v(t.prototype,n),e}();function y(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.getElementById("food")}var t,n;return t=e,(n=[{key:"X",get:function(){return this.element.offsetLeft}},{key:"Y",get:function(){return this.element.offsetTop}},{key:"change",value:function(){var e=10*Math.round(29*Math.random()),t=10*Math.round(29*Math.random());this.element.style.left="".concat(t,"px"),this.element.style.top="".concat(e,"px")}}])&&y(t.prototype,n),e}(),g=b;function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(new b).change();var x=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;w(this,e),this.score=0,this.level=1,this.scoreEle=document.getElementById("score"),this.levelEle=document.getElementById("level"),this.maxlevel=t,this.upScore=n}var t,n;return t=e,(n=[{key:"addScore",value:function(){this.scoreEle.innerHTML=++this.score+"",this.score%this.upScore==0&&this.levelUp()}},{key:"levelUp",value:function(){this.level<this.maxlevel&&(this.levelEle.innerHTML=++this.level+"")}}])&&k(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.direction="",this.isLive=!0,this.snake=new m,this.food=new g,this.ScroePanel=new x(10,2),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),this.run()}},{key:"keydownHandler",value:function(e){console.log(e.key),this.direction=e.key}},{key:"run",value:function(){var e=this.snake.X,t=this.snake.Y;switch(this.direction){case"ArrowUp":case"Up":t-=10;break;case"ArrowDown":case"Down":t+=10;break;case"ArrowLeft":case"Left":e-=10;break;case"ArrowRight":case"Right":e+=10}this.checkEat(e,t);try{this.snake.Y=t,this.snake.X=e}catch(e){alert(e.message+"GEAM ORVER"),this.isLive=!1}this.isLive&&setTimeout(this.run.bind(this),300-30*(this.ScroePanel.level-1))}},{key:"checkEat",value:function(e,t){e===this.food.X&&t===this.food.Y&&(console.log("吃到食物了"),this.food.change(),this.ScroePanel.addScore(),this.snake.addBody())}}])&&E(t.prototype,n),e}())}()}();