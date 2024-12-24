"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["660806"],{300599:function(e,n,a){a.r(n),a.d(n,{metadata:()=>l,contentTitle:()=>i,default:()=>E,assets:()=>r,toc:()=>o,frontMatter:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-statements/catalog/REFRESH","title":"REFRESH","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/catalog/REFRESH.md","sourceDirName":"sql-manual/sql-statements/catalog","slug":"/sql-manual/sql-statements/catalog/REFRESH","permalink":"/zh-CN/docs/sql-manual/sql-statements/catalog/REFRESH","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REFRESH","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW CREATE CATALOG","permalink":"/zh-CN/docs/sql-manual/sql-statements/catalog/SHOW-CREATE-CATALOG"},"next":{"title":"CREATE DATABASE","permalink":"/zh-CN/docs/sql-manual/sql-statements/database/CREATE-DATABASE"}}'),t=a("785893"),s=a("250065");let c={title:"REFRESH",language:"zh-CN"},i=void 0,r={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u5237\u65B0\u6307\u5B9A Catalog/Database/Table \u7684\u5143\u6570\u636E\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"REFRESH CATALOG catalog_name;\nREFRESH DATABASE [catalog_name.]database_name;\nREFRESH TABLE [catalog_name.][database_name.]table_name;\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u5237\u65B0 Catalog \u7684\u540C\u65F6\uFF0C\u4F1A\u5F3A\u5236\u4F7F\u5BF9\u8C61\u76F8\u5173\u7684 Cache \u5931\u6548\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u5305\u62EC Partition Cache\u3001Schema Cache\u3001File Cache \u7B49\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5237\u65B0 hive catalog"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"REFRESH CATALOG hive;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5237\u65B0 database1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"REFRESH DATABASE ctl.database1;\nREFRESH DATABASE database1;\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u5237\u65B0 table1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"REFRESH TABLE ctl.db.table1;\nREFRESH TABLE db.table1;\nREFRESH TABLE table1;\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,t.jsx)(n.p,{children:"REFRESH, CATALOG, DATABASE, TABLE"}),"\n",(0,t.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function E(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return c}});var l=a(667294);let t={},s=l.createContext(t);function c(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);