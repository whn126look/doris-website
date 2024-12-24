"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["788084"],{390116:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>s});var i=JSON.parse('{"id":"sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FUNCTION","title":"DROP-FUNCTION","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FUNCTION.md","sourceDirName":"sql-manual/sql-reference/Data-Definition-Statements/Drop","slug":"/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FUNCTION","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FUNCTION","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"DROP-FUNCTION","language":"en"},"sidebar":"docs","previous":{"title":"DROP-MATERIALIZED-VIEW","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-MATERIALIZED-VIEW"},"next":{"title":"DROP-FILE","permalink":"/docs/2.0/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-FILE"}}'),l=t("785893"),r=t("250065");let s={title:"DROP-FUNCTION",language:"en"},a=void 0,c={},o=[{value:"DROP-FUNCTION",id:"drop-function",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"drop-function",children:"DROP-FUNCTION"}),"\n",(0,l.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,l.jsx)(n.p,{children:"DROP FUNCTION"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Delete a custom function. Function names and parameter types are exactly the same to be deleted."}),"\n",(0,l.jsx)(n.p,{children:"grammar:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP [GLOBAL] FUNCTION function_name\n     (arg_type [, ...])\n"})}),"\n",(0,l.jsx)(n.p,{children:"Parameter Description:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"function_name"}),": the name of the function to delete"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"arg_type"}),": the argument list of the function to delete"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Delete a function"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP FUNCTION my_add(INT, INT)\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Delete a global function"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"DROP GLOBAL FUNCTION my_add(INT, INT)\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:" DROP, FUNCTION\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return s}});var i=t(667294);let l={},r=i.createContext(l);function s(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);