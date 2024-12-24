"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["946909"],{664940:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/combinators/union","title":"UNION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/combinators/union.md","sourceDirName":"sql-manual/sql-functions/combinators","slug":"/sql-manual/sql-functions/combinators/union","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/union","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"UNION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"MERGE","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/combinators/merge"},"next":{"title":"MIN","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/min"}}'),i=t("785893"),o=t("250065");let r={title:"UNION",language:"zh-CN"},l=void 0,a={},c=[{value:"UNION",id:"union",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"union",children:"UNION"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"AGGREGATE_FUNCTION_UNION(agg_state)"}),"\n\u5C06\u591A\u4E2A\u805A\u5408\u4E2D\u95F4\u7ED3\u679C\u805A\u5408\u4E3A\u4E00\u4E2A\u3002\n\u7ED3\u679C\u7684\u7C7B\u578B\u4E3Aagg_state\uFF0C\u51FD\u6570\u7B7E\u540D\u4E0E\u5165\u53C2\u4E00\u81F4\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql [test]>select avg_merge(t) from (select avg_union(avg_state(1)) as t from d_table group by k1)p;\n+----------------+\n| avg_merge(`t`) |\n+----------------+\n|              1 |\n+----------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.p,{children:"AGG_STATE, UNION"})]})}function d(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},o=s.createContext(i);function r(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);