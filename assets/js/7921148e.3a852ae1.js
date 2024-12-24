"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["709677"],{414095:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-statements/account-management/SHOW-PROPERTY","title":"SHOW PROPERTY","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/account-management/SHOW-PROPERTY.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/SHOW-PROPERTY","permalink":"/docs/3.0/sql-manual/sql-statements/account-management/SHOW-PROPERTY","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW PROPERTY","language":"en"},"sidebar":"docs","previous":{"title":"SET PROPERTY","permalink":"/docs/3.0/sql-manual/sql-statements/account-management/SET-PROPERTY"},"next":{"title":"USE COMPUTE GROUP","permalink":"/docs/3.0/sql-manual/sql-statements/session/context/USE-COMPUTE-GROUP"}}'),r=s("785893"),l=s("250065");let i={title:"SHOW PROPERTY",language:"en"},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This statement is used to view the attributes of the user"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SHOW PROPERTY [FOR user] [LIKE key]\nSHOW ALL PROPERTIES [LIKE key]\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"user"})}),"\n",(0,r.jsx)(n.p,{children:"View the attributes of the specified user. If not specified, check the current user's."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"LIKE"})}),"\n",(0,r.jsx)(n.p,{children:"Fuzzy matching can be done by attribute name."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"ALL"})}),"\n",(0,r.jsx)(n.p,{children:"View the properties of all users (supported since version 2.0.3)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Return result description:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> show property like'%connection%';\n+----------------------+-------+\n| Key                  | Value |\n+----------------------+-------+\n| max_user_connections | 100   |\n+----------------------+-------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Key"})}),"\n",(0,r.jsx)(n.p,{children:"Property name."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Value"})}),"\n",(0,r.jsx)(n.p,{children:"Attribute value."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> show all properties like "%connection%";\n+-------------------+--------------------------------------+\n| User              | Properties                           |\n+-------------------+--------------------------------------+\n| root              | {"max_user_connections": "100"}      |\n| admin             | {"max_user_connections": "100"}      |\n| default_cluster:a | {"max_user_connections": "1000"}     |\n+-------------------+--------------------------------------+\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"User"})}),"\n",(0,r.jsx)(n.p,{children:"username."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"Properties"})}),"\n",(0,r.jsx)(n.p,{children:"Key: value corresponding to each property of the user."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"View the attributes of the jack user"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW PROPERTY FOR'jack';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"View the attribute of jack user connection limit"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW PROPERTY FOR'jack' LIKE'%connection%';\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"View all users importing cluster related properties"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SHOW ALL PROPERTIES LIKE '%load_cluster%'\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"SHOW, PROPERTY, ALL\n"})}),"\n",(0,r.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);