"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["556591"],{122736:function(t,e,n){n.r(e),n.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>d});var l=JSON.parse('{"id":"admin-manual/system-tables/internal_schema/column_statistics","title":"column_statistics","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/system-tables/internal_schema/column_statistics.md","sourceDirName":"admin-manual/system-tables/internal_schema","slug":"/admin-manual/system-tables/internal_schema/column_statistics","permalink":"/zh-CN/docs/admin-manual/system-tables/internal_schema/column_statistics","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"column_statistics","language":"zh-CN"},"sidebar":"docs","previous":{"title":"audit_log","permalink":"/zh-CN/docs/admin-manual/system-tables/internal_schema/audit_log"},"next":{"title":"partition_statistics","permalink":"/zh-CN/docs/admin-manual/system-tables/internal_schema/partition_statistics"}}'),s=n("785893"),i=n("250065");let d={title:"column_statistics",language:"zh-CN"},r=void 0,c={},a=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6240\u5C5E\u6570\u636E\u5E93",id:"\u6240\u5C5E\u6570\u636E\u5E93",level:2},{value:"\u8868\u4FE1\u606F",id:"\u8868\u4FE1\u606F",level:2}];function x(t){let e={code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u5217\u7EDF\u8BA1\u4FE1\u606F"}),"\n",(0,s.jsx)(e.h2,{id:"\u6240\u5C5E\u6570\u636E\u5E93",children:"\u6240\u5C5E\u6570\u636E\u5E93"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"__internal_schema"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8868\u4FE1\u606F",children:"\u8868\u4FE1\u606F"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5217\u540D"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u7C7B\u578B"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"id"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(4096)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u552F\u4E00 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"catalog_id"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Catalog \u7684 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"db_id"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Database \u7684 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"tbl_id"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Table \u7684 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"idx_id"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Index \u7684 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"col_id"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5217\u7684 ID\uFF0C\u5F53\u524D\u5B58\u50A8\u7684\u662F\u5217\u540D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"part_id"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(64)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Partition \u7684 ID\uFF0C\u6C38\u8FDC\u4E3A\u7A7A"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"count"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u884C\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"ndv"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4E0D\u540C\u503C\u7684\u6570\u91CF"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"null_count"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"NULL \u7684\u6570\u91CF"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"min"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(65533)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u6700\u5C0F\u503C"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"max"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(65533)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u6700\u5927\u503C"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"data_size_in_bytes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4EE5\u5B57\u8282\u8BA1\u7B97\u7684\u6570\u636E\u91CF"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"update_time"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"datetime"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5F53\u524D\u7EDF\u8BA1\u4FE1\u606F\u7684\u66F4\u65B0\u65F6\u95F4"})]})]})]})]})}function h(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(x,{...t})}):x(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return r},a:function(){return d}});var l=n(667294);let s={},i=l.createContext(s);function d(t){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:d(t.components),l.createElement(i.Provider,{value:e},t.children)}}}]);