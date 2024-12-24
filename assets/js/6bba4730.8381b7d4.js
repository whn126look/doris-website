"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["822049"],{419142:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>m,assets:()=>r,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-min","title":"BITMAP_MIN","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/bitmap-functions/bitmap-min.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-min","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-min","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_MIN","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_MAX","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/bitmap-max"},"next":{"title":"INTERSECT_COUNT","permalink":"/docs/sql-manual/sql-functions/bitmap-functions/intersect-count"}}'),s=t("785893"),a=t("250065");let l={title:"BITMAP_MIN",language:"en"},o=void 0,r={},c=[{value:"bitmap_min",id:"bitmap_min",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"bitmap_min",children:"bitmap_min"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BIGINT BITMAP_MIN(BITMAP input)"})}),"\n",(0,s.jsx)(e.p,{children:"Calculate and return the min values of a bitmap."}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select bitmap_min(bitmap_from_string('')) value;\n+-------+\n| value |\n+-------+\n|  NULL |\n+-------+\n\nmysql> select bitmap_min(bitmap_from_string('1,9999999999')) value;\n+-------+\n| value |\n+-------+\n|     1 |\n+-------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"BITMAP_MIN,BITMAP\n"})})]})}function m(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var i=t(667294);let s={},a=i.createContext(s);function l(n){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);