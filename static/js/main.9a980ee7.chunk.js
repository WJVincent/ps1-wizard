(this["webpackJsonpps1-wizard"]=this["webpackJsonpps1-wizard"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(6),o=n.n(a),s=n(2),l=n(0),i=Object(c.createContext)(),j=function(){return Object(c.useContext)(i)},u=function(e){var t=Object(c.useState)(1),n=Object(s.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(1),j=Object(s.a)(o,2),u=j[0],h=j[1],b=Object(c.useState)("full"),p=Object(s.a)(b,2),O=p[0],d=p[1],x=Object(c.useState)(1),m=Object(s.a)(x,2),f=m[0],C=m[1],v=Object(c.useState)("white"),_=Object(s.a)(v,2),g=_[0],S=_[1],y=Object(c.useState)("white"),k=Object(s.a)(y,2),P=k[0],w=k[1],F=Object(c.useState)("white"),B=Object(s.a)(F,2),N=B[0],H=B[1],A=Object(c.useState)("white"),U=Object(s.a)(A,2),E=U[0],z=U[1];return Object(l.jsx)(i.Provider,{value:{colors:{black:"\\[\\e[30m\\]",blue:"\\[\\e[34m\\]",cyan:"\\[\\e[36m\\]",green:"\\[\\e[32m\\]",purple:"\\[\\e[35m\\]",red:"\\[\\e[31m\\]",white:"\\[\\e[37m\\]",yellow:"\\[\\e[33m\\]"},user:r,setUser:a,host:u,setHost:h,path:O,setPath:d,branch:f,setBranch:C,userColor:g,setUserColor:S,hostColor:P,setHostColor:w,pathColor:N,setPathColor:H,branchColor:E,setBranchColor:z},children:e.children})},h=function(){var e=j(),t=e.colors,n=e.user,c=e.setUser,r=e.host,a=e.setHost,o=e.path,s=e.setPath,i=e.branch,u=e.setBranch,h=e.userColor,b=e.setUserColor,p=e.hostColor,O=e.setHostColor,d=e.pathColor,x=e.setPathColor,m=e.branchColor,f=e.setBranchColor,C=Object.keys(t),v=function(e,t){t(1===e?-1:1)};return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Sections Form"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"username",children:"Username:"}),Object(l.jsx)("input",{type:"checkbox",name:"username",checked:1===n,onChange:function(){return v(n,c)}}),1===n&&Object(l.jsx)("select",{onChange:function(e){return b(e.target.value)},value:h,children:C.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"hostname",children:"Hostname:"}),Object(l.jsx)("input",{type:"checkbox",name:"hostname",checked:1===r,onChange:function(){return v(r,a)}}),1===r&&Object(l.jsx)("select",{onChange:function(e){return O(e.target.value)},value:p,children:C.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"git-branch",children:"Display Git Branch"}),Object(l.jsx)("input",{type:"checkbox",name:"git-branch",checked:1===i,onChange:function(){return v(i,u)}}),1===i&&Object(l.jsx)("select",{onChange:function(e){return f(e.target.value)},value:m,children:C.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"Full or partial path"}),Object(l.jsx)("label",{htmlFor:"full",children:"Full:"}),Object(l.jsx)("input",{type:"radio",value:"full",name:"path",checked:"full"===o,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("label",{htmlFor:"partial",children:"Partial:"}),Object(l.jsx)("input",{type:"radio",value:"partial",name:"path",checked:"partial"===o,onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("select",{onChange:function(e){return x(e.target.value)},value:d,children:C.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))})]}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{children:"Next"})})]})},b=n(7),p=n(5),O=n.n(p),d=function(){var e=j(),t=e.colors,n=e.user,r=e.host,a=e.path,o=e.branch,i=e.userColor,u=e.hostColor,h=e.pathColor,p=e.branchColor,d=Object(c.useState)(null),x=Object(s.a)(d,2),m=x[0],f=x[1],C=Object(c.useState)(null),v=Object(s.a)(C,2),_=v[0],g=v[1],S=Object(c.useState)(null),y=Object(s.a)(S,2),k=y[0],P=y[1],w=Object(c.useState)(null),F=Object(s.a)(w,2),B=F[0],N=F[1];return Object(c.useEffect)((function(){var e=1===n?"\\u":"";f(""!==e?t[i]+e:e)}),[n,i,t]),Object(c.useEffect)((function(){var e=1===r?"\\H":"";g(""!==e?t[u]+e:e)}),[r,t,u]),Object(c.useEffect)((function(){var e="full"===a?"\\w ":"\\W ";P(t[h]+e)}),[a,h,t]),Object(c.useEffect)((function(){var e=1===o?"\\$(parse_git_branch)":"";N(""!==e?t[p]+e:e)}),[o,t,p]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("textarea",{className:O.a.prompt,readOnly:!0,value:1===o?"\nfunction parse_git_branch {\n  git branch 2> /dev/null sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/'\n} \n\nexport PS1=\"".concat(m).concat(1===n&&1===r?"@":"").concat(_," ").concat(k," ").concat(B,'"'):'export PS1="'.concat(m).concat(1===n&&1===r?"@":"").concat(_," ").concat(k," ").concat(B,'"')}),Object(l.jsx)(b.CopyToClipboard,{text:1===o?"\nfunction parse_git_branch {\n  git branch 2> /dev/null sed -e '/^[^*]/d' -e 's/* \\(.*\\)/(\\1)/'\n} \n\nexport PS1=\"".concat(m).concat(1===n&&1===r?"@":"").concat(_," ").concat(k," ").concat(B,'"'):'export PS1="'.concat(m).concat(1===n&&1===r?"@":"").concat(_," ").concat(k," ").concat(B,'"'),children:Object(l.jsx)("button",{className:O.a.copyButton,children:"Copy"})})]})},x=n(3),m=n.n(x),f=function(){return Object(l.jsxs)("div",{className:m.a.mainContainer,children:[Object(l.jsx)("div",{className:m.a.header,children:Object(l.jsx)("h1",{children:"Make Your Prompt Awesome"})}),Object(l.jsxs)("div",{className:m.a.contentContainer,children:[Object(l.jsx)("div",{className:m.a.formContainer,children:Object(l.jsx)(h,{})}),Object(l.jsx)("div",{className:m.a.promptContainer,children:Object(l.jsx)(d,{})})]}),Object(l.jsxs)("div",{className:m.a.footer,children:[Object(l.jsx)("p",{children:"Links"}),Object(l.jsx)("p",{children:"and"}),Object(l.jsx)("p",{children:"Stuff"})]})]})},C=(n(16),function(){return Object(l.jsx)(u,{children:Object(l.jsx)(f,{})})});o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={mainContainer:"App_mainContainer__2o5r7",header:"App_header__3ZZ1n",contentContainer:"App_contentContainer__1Uo_h",formContainer:"App_formContainer__2yBgz",promptContainer:"App_promptContainer__2HFzQ",footer:"App_footer__29Fsv"}},5:function(e,t,n){e.exports={prompt:"PromptOutput_prompt__2b0D0",copyButton:"PromptOutput_copyButton__3KqcH"}}},[[17,1,2]]]);
//# sourceMappingURL=main.9a980ee7.chunk.js.map