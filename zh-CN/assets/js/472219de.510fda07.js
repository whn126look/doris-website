"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["641764"],{599041:function(n,e,l){l.r(e),l.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-statements/transaction/SHOW-TRANSACTION","title":"SHOW TRANSACTION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/transaction/SHOW-TRANSACTION.md","sourceDirName":"sql-manual/sql-statements/transaction","slug":"/sql-manual/sql-statements/transaction/SHOW-TRANSACTION","permalink":"/zh-CN/docs/sql-manual/sql-statements/transaction/SHOW-TRANSACTION","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW TRANSACTION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ROLLBACK","permalink":"/zh-CN/docs/sql-manual/sql-statements/transaction/ROLLBACK"},"next":{"title":"CREATE CATALOG","permalink":"/zh-CN/docs/sql-manual/sql-statements/catalog/CREATE-CATALOG"}}'),i=l("785893"),t=l("250065");let a={title:"SHOW TRANSACTION",language:"zh-CN"},r=void 0,c={},d=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function o(n){let e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,i.jsx)(e.p,{children:"\u8BE5\u8BED\u6CD5\u7528\u4E8E\u67E5\u770B\u6307\u5B9A transaction id \u6216 label \u7684\u4E8B\u52A1\u8BE6\u60C5\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SHOW TRANSACTION\n[FROM db_name]\nWHERE\n[id = transaction_id]\n[label = label_name];\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u793A\u4F8B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"     TransactionId: 4005\n             Label: insert_8d807d5d-bcdd-46eb-be6d-3fa87aa4952d\n       Coordinator: FE: 10.74.167.16\n TransactionStatus: VISIBLE\n LoadJobSourceType: INSERT_STREAMING\n       PrepareTime: 2020-01-09 14:59:07\n        CommitTime: 2020-01-09 14:59:09\n        FinishTime: 2020-01-09 14:59:09\n            Reason:\nErrorReplicasCount: 0\n        ListenerId: -1\n         TimeoutMs: 300000\n"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"TransactionId\uFF1A\u4E8B\u52A1 id"}),"\n",(0,i.jsx)(e.li,{children:"Label\uFF1A\u5BFC\u5165\u4EFB\u52A1\u5BF9\u5E94\u7684 label"}),"\n",(0,i.jsx)(e.li,{children:"Coordinator\uFF1A\u8D1F\u8D23\u4E8B\u52A1\u534F\u8C03\u7684\u8282\u70B9"}),"\n",(0,i.jsxs)(e.li,{children:["TransactionStatus\uFF1A\u4E8B\u52A1\u72B6\u6001\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"PREPARE\uFF1A\u51C6\u5907\u9636\u6BB5"}),"\n",(0,i.jsx)(e.li,{children:"COMMITTED\uFF1A\u4E8B\u52A1\u6210\u529F\uFF0C\u4F46\u6570\u636E\u4E0D\u53EF\u89C1"}),"\n",(0,i.jsx)(e.li,{children:"VISIBLE\uFF1A\u4E8B\u52A1\u6210\u529F\u4E14\u6570\u636E\u53EF\u89C1"}),"\n",(0,i.jsx)(e.li,{children:"ABORTED\uFF1A\u4E8B\u52A1\u5931\u8D25"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"LoadJobSourceType\uFF1A\u5BFC\u5165\u4EFB\u52A1\u7684\u7C7B\u578B\u3002"}),"\n",(0,i.jsx)(e.li,{children:"PrepareTime\uFF1A\u4E8B\u52A1\u5F00\u59CB\u65F6\u95F4"}),"\n",(0,i.jsx)(e.li,{children:"CommitTime\uFF1A\u4E8B\u52A1\u63D0\u4EA4\u6210\u529F\u7684\u65F6\u95F4"}),"\n",(0,i.jsx)(e.li,{children:"FinishTime\uFF1A\u6570\u636E\u53EF\u89C1\u7684\u65F6\u95F4"}),"\n",(0,i.jsx)(e.li,{children:"Reason\uFF1A\u9519\u8BEF\u4FE1\u606F"}),"\n",(0,i.jsx)(e.li,{children:"ErrorReplicasCount\uFF1A\u6709\u9519\u8BEF\u7684\u526F\u672C\u6570"}),"\n",(0,i.jsx)(e.li,{children:"ListenerId\uFF1A\u76F8\u5173\u7684\u5BFC\u5165\u4F5C\u4E1A\u7684 id"}),"\n",(0,i.jsx)(e.li,{children:"TimeoutMs\uFF1A\u4E8B\u52A1\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67E5\u770B id \u4E3A 4005 \u7684\u4E8B\u52A1\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SHOW TRANSACTION WHERE ID=4005;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6307\u5B9A db \u4E2D\uFF0C\u67E5\u770B id \u4E3A 4005 \u7684\u4E8B\u52A1\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SHOW TRANSACTION FROM db WHERE ID=4005;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u67E5\u770B label \u4E3A label_name \u7684\u4E8B\u52A1\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SHOW TRANSACTION WHERE LABEL = 'label_name';\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"SHOW, TRANSACTION\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return r},a:function(){return a}});var s=l(667294);let i={},t=s.createContext(i);function a(n){let e=s.useContext(t);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);