"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["140660"],{709310:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>i,toc:()=>o,frontMatter:()=>s});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-compact","title":"ARRAY_COMPACT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/array-functions/array-compact.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-compact","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-compact","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_COMPACT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_PUSHBACK","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-pushback"},"next":{"title":"ARRAY_CONCAT","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-concat"}}'),c=a("785893"),t=a("250065");let s={title:"ARRAY_COMPACT",language:"en"},l=void 0,i={},o=[{value:"array_compact",id:"array_compact",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"array_compact",children:"array_compact"}),"\n",(0,c.jsx)(n.p,{children:"array_compact"}),"\n",(0,c.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,c.jsx)(n.p,{children:"Removes consecutive duplicate elements from an array. The order of result values is determined by the order in the source array."}),"\n",(0,c.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.code,{children:"Array<T> array_compact(arr)"})}),"\n",(0,c.jsx)(n.h4,{id:"arguments",children:"Arguments"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"arr"})," \u2014 The array to inspect."]}),"\n",(0,c.jsx)(n.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,c.jsx)(n.p,{children:"The array without continuous duplicate."}),"\n",(0,c.jsx)(n.p,{children:"Type: Array."}),"\n",(0,c.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{children:"select array_compact([1, 2, 3, 3, null, null, 4, 4]);\n\n+----------------------------------------------------+\n| array_compact(ARRAY(1, 2, 3, 3, NULL, NULL, 4, 4)) |\n+----------------------------------------------------+\n| [1, 2, 3, NULL, 4]                                 |\n+----------------------------------------------------+\n\nselect array_compact(['aaa','aaa','bbb','ccc','ccccc',null, null,'dddd']);\n\n+-------------------------------------------------------------------------------+\n| array_compact(ARRAY('aaa', 'aaa', 'bbb', 'ccc', 'ccccc', NULL, NULL, 'dddd')) |\n+-------------------------------------------------------------------------------+\n| ['aaa', 'bbb', 'ccc', 'ccccc', NULL, 'dddd']                                  |\n+-------------------------------------------------------------------------------+\n\nselect array_compact(['2015-03-13','2015-03-13']);\n\n+--------------------------------------------------+\n| array_compact(ARRAY('2015-03-13', '2015-03-13')) |\n+--------------------------------------------------+\n| ['2015-03-13']                                   |\n+--------------------------------------------------+\n"})}),"\n",(0,c.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,c.jsx)(n.p,{children:"ARRAY,COMPACT,ARRAY_COMPACT"})]})}function u(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return l},a:function(){return s}});var r=a(667294);let c={},t=r.createContext(c);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);