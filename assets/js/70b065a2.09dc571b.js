"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["999014"],{980846:function(e,n,a){a.r(n),a.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>t});var l=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-slice","title":"ARRAY_SLICE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/array-functions/array-slice.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-slice","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-slice","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_SLICE","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_REMOVE","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-remove"},"next":{"title":"ARRAY_SORT","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-sort"}}'),r=a("785893"),s=a("250065");let t={title:"ARRAY_SLICE",language:"en"},i=void 0,c={},o=[{value:"array_slice",id:"array_slice",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"array_slice",children:"array_slice"}),"\n",(0,r.jsx)(n.p,{children:"array_slice"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ARRAY<T> array_slice(ARRAY<T> arr, BIGINT off, BIGINT len)"})}),"\n",(0,r.jsx)(n.p,{children:"Returns a slice of the array."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"A positive off indicates an indent on the left\nA negative off indicates an indent on the right.\nAn empty array is returned when the off is not within the actual range of the array.\nA negative len will be treated as 0.\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> select k2, k2[2:2] from array_type_table_nullable;\n+-----------------+-------------------------+\n| k2              | array_slice(`k2`, 2, 2) |\n+-----------------+-------------------------+\n| [1, 2, 3]       | [2, 3]                  |\n| [1, NULL, 3]    | [NULL, 3]               |\n| [2, 3]          | [3]                     |\n| NULL            | NULL                    |\n+-----------------+-------------------------+\n\nmysql> select k2, array_slice(k2, 2, 2) from array_type_table_nullable;\n+-----------------+-------------------------+\n| k2              | array_slice(`k2`, 2, 2) |\n+-----------------+-------------------------+\n| [1, 2, 3]       | [2, 3]                  |\n| [1, NULL, 3]    | [NULL, 3]               |\n| [2, 3]          | [3]                     |\n| NULL            | NULL                    |\n+-----------------+-------------------------+\n\nmysql> select k2, k2[2:2] from array_type_table_nullable_varchar;\n+----------------------------+-------------------------+\n| k2                         | array_slice(`k2`, 2, 2) |\n+----------------------------+-------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']        |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']        |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n+----------------------------+-------------------------+\n\nmysql> select k2, array_slice(k2, 2, 2) from array_type_table_nullable_varchar;\n+----------------------------+-------------------------+\n| k2                         | array_slice(`k2`, 2, 2) |\n+----------------------------+-------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']        |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']        |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']         |\n+----------------------------+-------------------------+\n"})}),"\n",(0,r.jsx)(n.p,{children:"Negative off:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> select k2, k2[-2:1] from array_type_table_nullable;\n+-----------+--------------------------+\n| k2        | array_slice(`k2`, -2, 1) |\n+-----------+--------------------------+\n| [1, 2, 3] | [2]                      |\n| [1, 2, 3] | [2]                      |\n| [2, 3]    | [2]                      |\n| [2, 3]    | [2]                      |\n+-----------+--------------------------+\n\nmysql> select k2, array_slice(k2, -2, 1) from array_type_table_nullable;\n+-----------+--------------------------+\n| k2        | array_slice(`k2`, -2, 1) |\n+-----------+--------------------------+\n| [1, 2, 3] | [2]                      |\n| [1, 2, 3] | [2]                      |\n| [2, 3]    | [2]                      |\n| [2, 3]    | [2]                      |\n+-----------+--------------------------+\n\nmysql> select k2, k2[-2:2] from array_type_table_nullable_varchar;\n+----------------------------+--------------------------+\n| k2                         | array_slice(`k2`, -2, 2) |\n+----------------------------+--------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']         |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n+----------------------------+--------------------------+\n\nmysql> select k2, array_slice(k2, -2, 2) from array_type_table_nullable_varchar;\n+----------------------------+--------------------------+\n| k2                         | array_slice(`k2`, -2, 2) |\n+----------------------------+--------------------------+\n| ['hello', 'world', 'c++']  | ['world', 'c++']         |\n| ['a1', 'equals', 'b1']     | ['equals', 'b1']         |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n| ['hasnull', NULL, 'value'] | [NULL, 'value']          |\n+----------------------------+--------------------------+\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"mysql> select k2, array_slice(k2, 0) from array_type_table;\n+-----------+-------------------------+\n| k2        | array_slice(`k2`, 0) |\n+-----------+-------------------------+\n| [1, 2, 3] | []                      |\n+-----------+-------------------------+\n\nmysql> select k2, array_slice(k2, -5) from array_type_table;\n+-----------+----------------------+\n| k2        | array_slice(`k2`, -5) |\n+-----------+----------------------+\n| [1, 2, 3] | []                   |\n+-----------+----------------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.p,{children:"ARRAY,SLICE,ARRAY_SLICE"})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return t}});var l=a(667294);let r={},s=l.createContext(r);function t(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);