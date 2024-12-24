"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["178830"],{696145:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-union","title":"BITMAP_UNION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-union.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-union","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-union","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BITMAP_UNION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_AND","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and"},"next":{"title":"BITMAP_XOR","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-xor"}}'),s=i("785893"),o=i("250065");let l={title:"BITMAP_UNION",language:"zh-CN"},a=void 0,r={},c=[{value:"bitmap_union function",id:"bitmap_union-function",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"bitmap_union-function",children:"bitmap_union function"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.p,{children:"\u805A\u5408\u51FD\u6570\uFF0C\u7528\u4E8E\u8BA1\u7B97\u5206\u7EC4\u540E\u7684 bitmap \u5E76\u96C6\u3002\u5E38\u89C1\u4F7F\u7528\u573A\u666F\u5982\uFF1A\u8BA1\u7B97PV\uFF0CUV\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BITMAP BITMAP_UNION(BITMAP value)"})}),"\n",(0,s.jsx)(e.p,{children:"\u8F93\u5165\u4E00\u7EC4 bitmap \u503C\uFF0C\u6C42\u8FD9\u4E00\u7EC4 bitmap \u503C\u7684\u5E76\u96C6\uFF0C\u5E76\u8FD4\u56DE\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select page_id, bitmap_union(user_id) from table group by page_id;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u548C bitmap_count \u51FD\u6570\u7EC4\u5408\u4F7F\u7528\u53EF\u4EE5\u6C42\u5F97\u7F51\u9875\u7684 UV \u6570\u636E"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select page_id, bitmap_count(bitmap_union(user_id)) from table group by page_id;\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5F53 user_id \u5B57\u6BB5\u4E3A int \u65F6\uFF0C\u4E0A\u9762\u67E5\u8BE2\u8BED\u4E49\u7B49\u540C\u4E8E"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select page_id, count(distinct user_id) from table group by page_id;\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"BITMAP_UNION, BITMAP\n"})})]})}function d(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return a},a:function(){return l}});var t=i(667294);let s={},o=t.createContext(s);function l(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);