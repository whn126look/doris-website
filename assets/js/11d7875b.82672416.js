"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["798266"],{783952:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>r,default:()=>p,assets:()=>o,toc:()=>u,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/sub-bitmap","title":"SUB_BITMAP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/bitmap-functions/sub-bitmap.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/sub-bitmap","permalink":"/docs/3.0/sql-manual/sql-functions/bitmap-functions/sub-bitmap","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SUB_BITMAP","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_SUBSET_IN_RANGE","permalink":"/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range"},"next":{"title":"BITMAP_COUNT","permalink":"/docs/3.0/sql-manual/sql-functions/bitmap-functions/bitmap-count"}}'),s=t("785893"),a=t("250065");let l={title:"SUB_BITMAP",language:"en"},r=void 0,o={},u=[{value:"sub_bitmap",id:"sub_bitmap",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"sub_bitmap",children:"sub_bitmap"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BITMAP SUB_BITMAP(BITMAP src, BIGINT offset, BIGINT cardinality_limit)"})}),"\n",(0,s.jsx)(e.p,{children:"Starting from the position specified by offset, intercept cardinality_limit bitmap elements and return a bitmap subset."}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select bitmap_to_string(sub_bitmap(bitmap_from_string('1,0,1,2,3,1,5'), 0, 3)) value;\n+-------+\n| value |\n+-------+\n| 0,1,2 |\n+-------+\n\nmysql> select bitmap_to_string(sub_bitmap(bitmap_from_string('1,0,1,2,3,1,5'), -3, 2)) value;\n+-------+\n| value |\n+-------+\n| 2,3   |\n+-------+\n\nmysql> select bitmap_to_string(sub_bitmap(bitmap_from_string('1,0,1,2,3,1,5'), 2, 100)) value;\n+-------+\n| value |\n+-------+\n| 2,3,5 |\n+-------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SUB_BITMAP,BITMAP_SUBSET,BITMAP\n"})})]})}function p(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return r},a:function(){return l}});var i=t(667294);let s={},a=i.createContext(s);function l(n){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);