const r={props:["active","href","as"],computed:{classes(){return this.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition"}}};import{renderSlot as n,openBlock as o,createBlock as t,resolveComponent as a,withCtx as l}from"../../_snowpack/pkg/vue.js";export function render(e,i){const s=a("inertia-link");return o(),t("div",null,[e.as=="button"?(o(),t("button",{key:0,class:[e.classes,"w-full text-left"]},[n(e.$slots,"default")],2)):(o(),t(s,{key:1,href:e.href,class:e.classes},{default:l(()=>[n(e.$slots,"default")]),_:3},8,["href","class"]))])}r.render=render;export default r;
