"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["88983"],{157422:function(e,t,s){s.r(t),s.d(t,{metadata:()=>n,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>i});var n=JSON.parse('{"id":"sql-manual/sql-statements/session/context/USE-COMPUTE-GROUP","title":"USE COMPUTE GROUP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/session/context/USE-COMPUTE-GROUP.md","sourceDirName":"sql-manual/sql-statements/session/context","slug":"/sql-manual/sql-statements/session/context/USE-COMPUTE-GROUP","permalink":"/docs/3.0/sql-manual/sql-statements/session/context/USE-COMPUTE-GROUP","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"USE COMPUTE GROUP","language":"en"},"sidebar":"docs","previous":{"title":"SHOW PROPERTY","permalink":"/docs/3.0/sql-manual/sql-statements/account-management/SHOW-PROPERTY"},"next":{"title":"SWITCH CATALOG","permalink":"/docs/3.0/sql-manual/sql-statements/session/context/SWITCH-CATALOG"}}'),r=s("785893"),l=s("250065");let i={title:"USE COMPUTE GROUP",language:"en"},o=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Examples",id:"examples",level:2},{value:"Permission Control",id:"permission-control",level:2},{value:"Notes",id:"notes",level:2}];function d(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"In the storage-and-compute-separated version, specify the compute cluster to use."}),"\n",(0,r.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"USE { [ <catalog_name>. ]<database_name>[ @<compute_group_name> ] | @<compute_group_name> }\n"})}),"\n",(0,r.jsx)(t.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"<compute_group_name>"}),"\uFF1A The name of the compute cluster."]}),"\n",(0,r.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(t.p,{children:'If the compute cluster switch is successful, it returns "Database changed"; if the switch fails, it returns the corresponding error message.'}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Specify the compute cluster ",(0,r.jsx)(t.code,{children:"compute_cluster"})," to use:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"use @compute_cluster;\nDatabase changed\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Specify both the database ",(0,r.jsx)(t.code,{children:"mysql"})," and the compute cluster ",(0,r.jsx)(t.code,{children:"compute_cluster"})," to use:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"use mysql@compute_cluster\nDatabase changed\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"permission-control",children:"Permission Control"}),"\n",(0,r.jsx)(t.p,{children:"The prerequisite for successfully executing this SQL command is to have the USAGE_PRIV permission for the compute group, refer to the permission documentation."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Privilege"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Object"}),(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"USAGE_PRIV"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Compute group"}),(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Permission to use the compute cluster"})]})})]}),"\n",(0,r.jsxs)(t.p,{children:["If a user does not have the compute group permission and tries to specify a compute group, an error will be reported. For example, ",(0,r.jsx)(t.code,{children:"test"})," is a regular user without compute group permission:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"mysql -utest -h175.40.1.1 -P9030\n\nuse @compute_cluster;\nERROR 5042 (42000): errCode = 2, detailMessage = USAGE denied to user test'@'127.0.0.1' for compute group 'compute_cluster'\n"})}),"\n",(0,r.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"If the database name or compute group name is a reserved keyword, it needs to be enclosed in backticks, for example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"use @`create`\n"})}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"If the compute group does not exist, an error message will be returned:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"mysql> use @compute_group_not_exist;\nERROR 5098 (42000): errCode = 2, detailMessage = Compute Group compute_group_not_exist not exist\n"})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return i}});var n=s(667294);let r={},l=n.createContext(r);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);