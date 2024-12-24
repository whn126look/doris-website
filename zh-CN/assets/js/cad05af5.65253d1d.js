"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["975389"],{904487:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>s,default:()=>p,assets:()=>o,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/get-ddl-stmt-action","title":"Get DDL Statement Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/open-api/fe-http/get-ddl-stmt-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/get-ddl-stmt-action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/get-ddl-stmt-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Get DDL Statement Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Fe Version Info Action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/fe-version-info-action"},"next":{"title":"Get Load Info Action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/get-load-info-action"}}'),r=t("785893"),a=t("250065");let l={title:"Get DDL Statement Action",language:"zh-CN"},s=void 0,o={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function c(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /api/_get_ddl"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u6307\u5B9A\u8868\u7684\u5EFA\u8868\u8BED\u53E5\u3001\u5EFA\u5206\u533A\u8BED\u53E5\u548C\u5EFA rollup \u8BED\u53E5\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"db"})}),"\n",(0,r.jsx)(n.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"table"})}),"\n",(0,r.jsx)(n.p,{children:"\u6307\u5B9A\u8868"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"\u65E0"}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"msg": "OK",\n	"code": 0,\n	"data": {\n		"create_partition": ["ALTER TABLE `tbl1` ADD PARTITION ..."],\n		"create_table": ["CREATE TABLE `tbl1` ...],\n		"create_rollup": ["ALTER TABLE `tbl1` ADD ROLLUP ..."]\n	},\n	"count": 0\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A\u8868\u7684 DDL \u8BED\u53E5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'GET GET /api/_get_ddl?db=db1&table=tbl1\n\nResponse\n{\n	"msg": "OK",\n	"code": 0,\n	"data": {\n		"create_partition": [],\n		"create_table": ["CREATE TABLE `tbl1` (\\n  `k1` int(11) NULL COMMENT \\"\\",\\n  `k2` int(11) NULL COMMENT \\"\\"\\n) ENGINE=OLAP\\nDUPLICATE KEY(`k1`, `k2`)\\nCOMMENT \\"OLAP\\"\\nDISTRIBUTED BY HASH(`k1`) BUCKETS 1\\nPROPERTIES (\\n\\"replication_num\\" = \\"1\\",\\n\\"version_info\\" = \\"1,0\\",\\n\\"in_memory\\" = \\"false\\",\\n\\"storage_format\\" = \\"DEFAULT\\"\\n);"],\n		"create_rollup": []\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return l}});var i=t(667294);let r={},a=i.createContext(r);function l(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);