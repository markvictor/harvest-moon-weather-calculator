(()=>{var t={447:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=r.p+"images//hmsi_blizzard.png"},17:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=r.p+"images//hmsi_clear.png"},469:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=r.p+"images//hmsi_cloudy.png"},969:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=r.p+"images//hmsi_drizzle.png"},237:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=r.p+"images//hmsi_hurricane.png"},59:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=r.p+"images//hmsi_rainy.png"},565:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=r.p+"images//hmsi_snowy.png"},953:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>n});const n=r.p+"images//hmsi_sunny.png"},467:(t,e,r)=>{var n={"./hmsi_blizzard.png":447,"./hmsi_clear.png":17,"./hmsi_cloudy.png":469,"./hmsi_drizzle.png":969,"./hmsi_hurricane.png":237,"./hmsi_rainy.png":59,"./hmsi_snowy.png":565,"./hmsi_sunny.png":953};function s(t){var e=i(t);return r(e)}function i(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=i,t.exports=s,s.id=467}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t})(),(()=>{"use strict";r.p;const t=[{weather:"sunny",sun:3,water:0},{weather:"clear",sun:1,water:0},{weather:"cloudy",sun:0,water:0},{weather:"drizzle",sun:0,water:1},{weather:"rainy",sun:0,water:2},{weather:"snowy",sun:0,water:2},{weather:"blizzard",sun:0,water:3},{weather:"hurricane",sun:0,water:3}];r(467);const e=new class{constructor(){this.seed={days:4,sun:{min:7,max:29},water:{min:3,max:11}},this.sprout={days:3,sun:{min:5,max:23},water:{min:2,max:7}},this.sprout2={days:2,sun:{min:4,max:17},water:{min:2,max:9}},this.ages=[this.seed,this.sprout,this.sprout2],this.currentAge=0}getAge(){return this.ages[this.currentAge]}nextDay(){}};console.log(e.getAge());const n=function(){let t=0,e=0;return{getSun:()=>t,getWater:()=>e,increaseTotals:function(r){t+=r.sun,e+=r.water}}}(),s=function(){const e=this.closest(".weather-button"),r=t.find((t=>t.weather===e.getAttribute("data-weather")));var s;s=r,n.increaseTotals(s),document.getElementById("sun-points-total").textContent=n.getSun(),document.getElementById("water-points-total").textContent=n.getWater()};document.querySelectorAll(".weather-button img").forEach((t=>{t.addEventListener("click",s)}))})()})();