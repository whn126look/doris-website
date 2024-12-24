"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["189004"],{201844:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>p,assets:()=>l,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"admin-manual/open-api/be-http/reset-rpc-channel","title":"Reset Stub Cache","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/be-http/reset-rpc-channel.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/reset-rpc-channel","permalink":"/docs/admin-manual/open-api/be-http/reset-rpc-channel","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Reset Stub Cache","language":"en"},"sidebar":"docs","previous":{"title":"Check Stub Cache","permalink":"/docs/admin-manual/open-api/be-http/check-rpc-channel"},"next":{"title":"View Compaction Status","permalink":"/docs/admin-manual/open-api/be-http/compaction-status"}}'),a=t("785893"),c=t("250065");let r={title:"Reset Stub Cache",language:"en"},i="Reset Stub Cache",l={},o=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"reset-stub-cache",children:"Reset Stub Cache"})}),"\n",(0,a.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET /api/reset_rpc_channel/{endpoints}"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Reset the connection cache of brpc"}),"\n",(0,a.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"endpoints"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"all"}),": clear all caches"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"host1:port1,host2:port2"}),": clear cache of the specified target"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"None"}),"\n",(0,a.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'```\n{\n    "msg":"success",\n    "code":0,\n    "data": "no cached channel.",\n    "count":0\n}\n```\n'})}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"```\ncurl http://127.0.0.1:8040/api/reset_rpc_channel/all\n```\n\n```\ncurl http://127.0.0.1:8040/api/reset_rpc_channel/1.1.1.1:8080,2.2.2.2:8080\n```\n"})})]})}function p(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return r}});var s=t(667294);let a={},c=s.createContext(a);function r(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);