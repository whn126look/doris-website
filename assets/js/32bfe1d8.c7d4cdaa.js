"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["819720"],{496432:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>u,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range","title":"BITMAP_SUBSET_IN_RANGE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range","permalink":"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP_SUBSET_IN_RANGE","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_SUBSET_LIMIT","permalink":"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-subset-limit"},"next":{"title":"SUB_BITMAP","permalink":"/docs/dev/sql-manual/sql-functions/bitmap-functions/sub-bitmap"}}'),i=t("785893"),a=t("250065");let r={title:"BITMAP_SUBSET_IN_RANGE",language:"en"},l=void 0,o={},u=[{value:"bitmap_subset_in_range",id:"bitmap_subset_in_range",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"bitmap_subset_in_range",children:"bitmap_subset_in_range"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BITMAP BITMAP_SUBSET_IN_RANGE(BITMAP src, BIGINT range_start, BIGINT range_end)"})}),"\n",(0,i.jsx)(n.p,{children:"Return subset in specified range (not include the range_end)."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,2,3,4,5'), 0, 9)) value;\n+-----------+\n| value     |\n+-----------+\n| 1,2,3,4,5 |\n+-----------+\n\nmysql> select bitmap_to_string(bitmap_subset_in_range(bitmap_from_string('1,2,3,4,5'), 2, 3)) value;\n+-------+\n| value |\n+-------+\n| 2     |\n+-------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"BITMAP_SUBSET_IN_RANGE,BITMAP_SUBSET,BITMAP\n"})})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},a=s.createContext(i);function r(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);