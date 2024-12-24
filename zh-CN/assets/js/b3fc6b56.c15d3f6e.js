"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["403866"],{469011:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>o,assets:()=>d,toc:()=>c,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS","title":"SHOW REPLICA STATUS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS.md","sourceDirName":"sql-manual/sql-statements/table-and-view/data-and-status-management","slug":"/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-STATUS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW REPLICA STATUS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SET REPLICA VERSION","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/SET-REPLICA-VERSION"},"next":{"title":"SHOW REPLICA DISTRIBUTION","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/data-and-status-management/SHOW-REPLICA-DISTRIBUTION"}}'),t=a("785893"),l=a("250065");let i={title:"SHOW REPLICA STATUS",language:"zh-CN"},r=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function u(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5C55\u793A\u4E00\u4E2A\u8868\u6216\u5206\u533A\u7684\u526F\u672C\u72B6\u6001\u4FE1\u606F\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW REPLICA STATUS FROM [db_name.]tbl_name [PARTITION (p1, ...)]\n[where_clause];\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8BF4\u660E"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:'where_clause:\nWHERE STATUS [!]= "replica_status"'}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"replica_status:\nOK:                         replica \u5904\u4E8E\u5065\u5EB7\u72B6\u6001\nDEAD:                     replica \u6240\u5728 Backend \u4E0D\u53EF\u7528\nVERSION_ERROR:  replica \u6570\u636E\u7248\u672C\u6709\u7F3A\u5931\nSCHEMA_ERROR:   replica \u7684 schema hash \u4E0D\u6B63\u786E\nMISSING:                 replica \u4E0D\u5B58\u5728"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B\u8868\u5168\u90E8\u7684\u526F\u672C\u72B6\u6001"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW REPLICA STATUS FROM db1.tbl1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B\u8868\u67D0\u4E2A\u5206\u533A\u72B6\u6001\u4E3A VERSION_ERROR \u7684\u526F\u672C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'SHOW REPLICA STATUS FROM tbl1 PARTITION (p1, p2)\nWHERE STATUS = "VERSION_ERROR";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u67E5\u770B\u8868\u6240\u6709\u72B6\u6001\u4E0D\u5065\u5EB7\u7684\u526F\u672C"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'SHOW REPLICA STATUS FROM tbl1\nWHERE STATUS != "OK";\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SHOW, REPLICA, STATUS\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function o(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return i}});var s=a(667294);let t={},l=s.createContext(t);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);