"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["642782"],{595528:function(n,t,e){e.r(t),e.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>d,assets:()=>l,toc:()=>u,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-count","title":"BITMAP_COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/bitmap-functions/bitmap-count.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-count","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-count","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"BITMAP_COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SUB_BITMAP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/bitmap-functions/sub-bitmap"},"next":{"title":"BITMAP_AND_COUNT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-count"}}'),s=e("785893"),o=e("250065");let a={title:"BITMAP_COUNT",language:"zh-CN"},c=void 0,l={},u=[{value:"bitmap_count",id:"bitmap_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function r(n){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"bitmap_count",children:"bitmap_count"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"BITMAP BITMAP_COUNT(BITMAP lhs)"})}),"\n",(0,s.jsx)(t.p,{children:"\u8FD4\u56DE\u8F93\u5165bitmap\u7684\u4E2A\u6570\u3002"}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select bitmap_count(to_bitmap(1)) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\nmysql> select bitmap_count(bitmap_and(to_bitmap(1), to_bitmap(1))) cnt;\n+------+\n| cnt  |\n+------+\n|    1 |\n+------+\n\n"})}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"BITMAP_COUNT\n"})})]})}function d(n={}){let{wrapper:t}={...(0,o.a)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(r,{...n})}):r(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return c},a:function(){return a}});var i=e(667294);let s={},o=i.createContext(s);function a(n){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function c(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);