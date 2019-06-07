(function(e){function t(t){for(var n,l,s=t[0],d=t[1],u=t[2],c=0,f=[];c<s.length;c++)l=s[c],r[l]&&f.push(r[l][0]),r[l]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);a&&a(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,s=1;s<o.length;s++){var d=o[s];0!==r[d]&&(n=!1)}n&&(i.splice(t--,1),e=l(l.s=o[0]))}return e}var n={},r={app:0},i=[];function l(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=n,l.d=function(e,t,o){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(o,n,function(t){return e[t]}.bind(null,n));return o},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var a=d;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"list"},[o("h1",{staticClass:"header"},[e._v("Vue - To do.")]),o("Form",{on:{saveNewTodo:e.saveNewTodo}}),o("br"),o("Todos",{attrs:{todos:e.todos},on:{deleteTodo:e.deleteTodo,saveToggledTodo:e.saveToggledTodo}})],1)},i=[],l=(o("20d6"),o("6b54"),function(e,t,o){function n(){try{return"localStorage"in window&&null!==window["localStorage"]}catch(e){return!1}}if(!n())return alert("NO Local Storage functionality!");function r(){var e=localStorage.getItem(o);return JSON.parse(e)||[]}function i(){return localStorage.setItem(o,JSON.stringify(t)),!0}function l(){var t=Date.now();return t=t<=e?++e:t,t.toString(16)}return t=r(),{getAll:function(){return t},set:function(e){return!(!e.title||"undefined"===typeof e.done)&&(e.id=l(),t.unshift(e),i(),e)},get:function(e){for(var o=0;o<t.length;o++)if(t[o].id==e)return t[o]},put:function(e){for(var o=0;o<t.length;o++)if(t[o].id==e.id)return t[o]=e,i(),t[o]},del:function(e){for(var o={},n=0;n<t.length;n++)if(t[n].id==e){o=t[n];return t.splice(n,1),i(),o}}}}(0,{},"APP_TODO")),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("form",{staticClass:"item-add",on:{submit:function(t){return t.preventDefault(),e.formSubmit(t)}}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],staticClass:"input",attrs:{type:"text",name:"title",placeholder:"Type a new item here.",autocomplete:"off",required:"",maxlength:"48"},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),o("input",{staticClass:"submit",attrs:{type:"submit",value:"Add"}})])},d=[],u={data:function(){return{title:""}},methods:{formSubmit:function(){this.$emit("saveNewTodo",{title:this.title,done:!1}),this.title=""}}},a=u,c=o("2877"),f=Object(c["a"])(a,s,d,!1,null,null,null),p=f.exports,v=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",{staticClass:"items"},e._l(e.todos,function(t){return o("TodoItem",{key:t.id,attrs:{todo:t},on:{deleteTodo:e.deleteTodo,saveToggledTodo:e.saveToggledTodo}})}),1)},g=[],T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",[o("span",{staticClass:"item",class:e.isDone()},[e._v("\n\t\t"+e._s(e.todo.title)+"\n\t")]),o("a",{staticClass:"del-button",class:e.toHide(),on:{click:e.deleteTodo}},[e._v(" X ")]),o("a",{staticClass:"done-button",on:{click:e.saveToggledTodo}},[e._v(" "+e._s(e.todo.done?"Undone":"Done"))])])},h=[],m={props:["todo"],methods:{isDone:function(){return{done:this.todo.done}},toHide:function(){return{hide:!this.todo.done}},deleteTodo:function(){this.$emit("deleteTodo",this.todo)},saveToggledTodo:function(){this.todo.done=!this.todo.done,this.$emit("saveToggledTodo",this.todo)}}},b=m,y=Object(c["a"])(b,T,h,!1,null,null,null),w=y.exports,_={components:{TodoItem:w},props:{todos:{type:Array,required:!0,default:function(){return[]}}},methods:{deleteTodo:function(e){console.log("$event in Todos (deleteTodo)"),this.$emit("deleteTodo",e)},saveToggledTodo:function(e){console.log("$event in Todos (saveToggledTodo)"),this.$emit("saveToggledTodo",e)}}},O=_,S=Object(c["a"])(O,v,g,!1,null,null,null),$=S.exports,x={name:"App",components:{Form:p,Todos:$},data:function(){return{todos:[]}},mounted:function(){this.todos=Object.assign([],l.getAll())},methods:{saveNewTodo:function(e){console.log("$event in App (saveNewTodo)"),this.todos.push(l.set(e))},deleteTodo:function(e){console.log("$event in App (deleteTodo)"),l.del(e.id);var t=this.todos.findIndex(function(t){return t.id==e.id});t>-1&&this.todos.splice(t,1)},saveToggledTodo:function(e){console.log("$event in App (saveToggledTodo)"),l.put(e)}}},j=x,A=Object(c["a"])(j,r,i,!1,null,null,null),C=A.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(C)}}).$mount("#app")}});
//# sourceMappingURL=app.3f8c9fc3.js.map