"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["331146"],{144539:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>i,toc:()=>m,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-statements/cluster-management/compute-management/SHOW-WORKLOAD-GROUPS","title":"SHOW WORKLOAD GROUPS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/cluster-management/compute-management/SHOW-WORKLOAD-GROUPS.md","sourceDirName":"sql-manual/sql-statements/cluster-management/compute-management","slug":"/sql-manual/sql-statements/cluster-management/compute-management/SHOW-WORKLOAD-GROUPS","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/SHOW-WORKLOAD-GROUPS","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW WORKLOAD GROUPS","language":"en"},"sidebar":"docs","previous":{"title":"DROP WORKLOAD GROUP","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/DROP-WORKLOAD-GROUP"},"next":{"title":"CREATE WORKLOAD GROUP","permalink":"/docs/3.0/sql-manual/sql-statements/cluster-management/compute-management/CREATE-WORKLOAD-POLICY"}}'),a=t("785893"),r=t("250065");let l={title:"SHOW WORKLOAD GROUPS",language:"en"},o=void 0,i={},m=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to display the resource groups for which the current user has usage_priv privileges."}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW WORKLOAD GROUPS [LIKE "pattern"];\n'})}),"\n",(0,a.jsx)(n.p,{children:"Description:"}),"\n",(0,a.jsx)(n.p,{children:"This statement only does a simple display of workload groups, for a more complex display refer to tvf workload_groups()."}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Show all workload groups:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> show workload groups;\n+----------+--------+--------------------------+---------+\n| Id       | Name   | Item                     | Value   |\n+----------+--------+--------------------------+---------+\n| 10343386 | normal | cpu_share                | 10      |\n| 10343386 | normal | memory_limit             | 30%     |\n| 10343386 | normal | enable_memory_overcommit | true    |\n| 10352416 | g1     | memory_limit             | 20%     |\n| 10352416 | g1     | cpu_share                | 10      |\n+----------+--------+--------------------------+---------+\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Show workload groups using pattern"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'mysql> show workload groups like "normal%";\n+----------+--------+--------------------------+---------+\n| Id       | Name   | Item                     | Value   |\n+----------+--------+--------------------------+---------+\n| 10343386 | normal | cpu_share                | 10      |\n| 10343386 | normal | memory_limit             | 30%     |\n| 10343386 | normal | enable_memory_overcommit | true    |\n+----------+--------+--------------------------+---------+\n'})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SHOW, WORKLOAD, GROUPS, GROUP\n"})}),"\n",(0,a.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(667294);let a={},r=s.createContext(a);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);