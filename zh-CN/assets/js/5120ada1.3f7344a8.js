"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["110186"],{703458:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>r});var s=JSON.parse('{"id":"admin-manual/open-api/be-http/check-tablet-segment","title":"\u68C0\u67E5 tablet \u6587\u4EF6\u4E22\u5931","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/open-api/be-http/check-tablet-segment.md","sourceDirName":"admin-manual/open-api/be-http","slug":"/admin-manual/open-api/be-http/check-tablet-segment","permalink":"/zh-CN/docs/admin-manual/open-api/be-http/check-tablet-segment","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u68C0\u67E5 tablet \u6587\u4EF6\u4E22\u5931","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u505A\u5FEB\u7167","permalink":"/zh-CN/docs/admin-manual/open-api/be-http/snapshot"},"next":{"title":"BE \u7684\u914D\u7F6E\u4FE1\u606F","permalink":"/zh-CN/docs/admin-manual/open-api/be-http/config"}}'),i=t("785893"),l=t("250065");let r={title:"\u68C0\u67E5 tablet \u6587\u4EF6\u4E22\u5931",language:"zh-CN"},a=void 0,c={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST /api/check_tablet_segment_lost?repair={bool}"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 BE \u8282\u70B9\u4E0A\uFF0C\u53EF\u80FD\u4F1A\u56E0\u4E3A\u4E00\u4E9B\u5F02\u5E38\u60C5\u51B5\u5BFC\u81F4\u6570\u636E\u6587\u4EF6\u4E22\u5931\uFF0C\u4F46\u662F\u5143\u6570\u636E\u663E\u793A\u6B63\u5E38\uFF0C\u8FD9\u79CD\u526F\u672C\u5F02\u5E38\u4E0D\u4F1A\u88AB FE \u68C0\u6D4B\u5230\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u4FEE\u590D\u3002\n\u5F53\u7528\u6237\u67E5\u8BE2\u65F6\uFF0C\u4F1A\u62A5\u9519",(0,i.jsx)(n.code,{children:"failed to initialize storage reader"}),"\u3002\u8BE5\u63A5\u53E3\u7684\u529F\u80FD\u662F\u68C0\u6D4B\u51FA\u5F53\u524D BE \u8282\u70B9\u4E0A\u6240\u6709\u5B58\u5728\u6587\u4EF6\u4E22\u5931\u7684 tablet\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"repair"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8BBE\u7F6E\u4E3A",(0,i.jsx)(n.code,{children:"true"}),"\u65F6\uFF0C\u5B58\u5728\u6587\u4EF6\u4E22\u5931\u7684 tablet \u90FD\u4F1A\u88AB\u8BBE\u4E3A",(0,i.jsx)(n.code,{children:"SHUTDOWN"}),"\u72B6\u6001\uFF0C\u8BE5\u526F\u672C\u4F1A\u88AB\u4F5C\u4E3A\u574F\u526F\u672C\u5904\u7406\uFF0C\u8FDB\u800C\u80FD\u591F\u88AB FE \u68C0\u6D4B\u548C\u4FEE\u590D\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8BBE\u7F6E\u4E3A",(0,i.jsx)(n.code,{children:"false"}),"\u65F6\uFF0C\u53EA\u4F1A\u8FD4\u56DE\u6240\u6709\u5B58\u5728\u6587\u4EF6\u4E22\u5931\u7684 tablet\uFF0C\u5E76\u4E0D\u505A\u4EFB\u4F55\u5904\u7406\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"\u65E0"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'\u8FD4\u56DE\u503C\u662F\u5F53\u524DBE\u8282\u70B9\u4E0A\u6240\u6709\u5B58\u5728\u6587\u4EF6\u4E22\u5931\u7684tablet\n\n```\n{\n    status: "Success",\n    msg: "Succeed to check all tablet segment",\n    num: 3,\n    bad_tablets: [\n        11190,\n        11210,\n        11216\n    ],\n    set_bad: true,\n    host: "172.3.0.101"\n}\n```\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"```shell\ncurl -X POST http://127.0.0.1:8040/api/check_tablet_segment_lost?repair=false\n```\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);