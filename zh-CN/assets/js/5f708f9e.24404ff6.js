"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["511944"],{800474:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>c,default:()=>d,assets:()=>r,toc:()=>a,frontMatter:()=>o});var i=JSON.parse('{"id":"sql-manual/sql-functions/conditional-functions/if","title":"IF","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/conditional-functions/if.md","sourceDirName":"sql-manual/sql-functions/conditional-functions","slug":"/sql-manual/sql-functions/conditional-functions/if","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/conditional-functions/if","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"IF","language":"zh-CN"},"sidebar":"docs","previous":{"title":"COALESCE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/conditional-functions/coalesce"},"next":{"title":"IFNULL","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/conditional-functions/ifnull"}}'),l=t("785893"),s=t("250065");let o={title:"IF",language:"zh-CN"},c=void 0,r={},a=[{value:"if",id:"if",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"if",children:"if"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"if(boolean condition, type valueTrue, type valueFalseOrNull)"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679C\u8868\u8FBE\u5F0F condition \u6210\u7ACB\uFF0C\u8FD4\u56DE\u7ED3\u679C valueTrue\uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE\u7ED3\u679C valueFalseOrNull\n\u8FD4\u56DE\u7C7B\u578B\uFF1A valueTrue \u8868\u8FBE\u5F0F\u7ED3\u679C\u7684\u7C7B\u578B"}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'mysql> select  user_id, if(user_id = 1, "true", "false") test_if from test;\n+---------+---------+\n| user_id | test_if |\n+---------+---------+\n| 1       | true    |\n| 2       | false   |\n+---------+---------+\n'})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.p,{children:"IF"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return c},a:function(){return o}});var i=t(667294);let l={},s=i.createContext(l);function o(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:o(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);