"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["461400"],{721494:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>i,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-statements/account-management/REFRESH-LDAP","title":"REFRESH LDAP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/account-management/REFRESH-LDAP.md","sourceDirName":"sql-manual/sql-statements/account-management","slug":"/sql-manual/sql-statements/account-management/REFRESH-LDAP","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/REFRESH-LDAP","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"REFRESH LDAP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SHOW GRANTS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/SHOW-GRANTS"},"next":{"title":"SET LDAP_ADMIN_PASSWORD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/account-management/SET-LDAP_ADMIN_PASSWORD"}}'),l=s("785893"),a=s("250065");let r={title:"REFRESH LDAP",language:"zh-CN"},c=void 0,i={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsxs)(n.p,{children:["\u8BE5\u8BED\u53E5\u7528\u4E8E\u5237\u65B0 Doris \u4E2D LDAP \u7684\u7F13\u5B58\u4FE1\u606F\u3002\u4FEE\u6539 LDAP \u670D\u52A1\u4E2D\u7528\u6237\u4FE1\u606F\u6216\u8005\u4FEE\u6539 Doris \u4E2D LDAP \u7528\u6237\u7EC4\u5BF9\u5E94\u7684 role \u6743\u9650\uFF0C\u53EF\u80FD\u56E0\u4E3A\u7F13\u5B58\u7684\u539F\u56E0\u4E0D\u4F1A\u7ACB\u5373\u751F\u6548\uFF0C\u53EF\u901A\u8FC7\u8BE5\u8BED\u53E5\u5237\u65B0\u7F13\u5B58\u3002Doris \u4E2D LDAP \u4FE1\u606F\u7F13\u5B58\u9ED8\u8BA4\u65F6\u95F4\u4E3A 12 \u5C0F\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 ",(0,l.jsx)(n.code,{children:"SHOW FRONTEND CONFIG LIKE 'ldap_user_cache_timeout_s';"})," \u67E5\u770B\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"REFRESH LDAP ALL;\nREFRESH LDAP [for user_name];\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5237\u65B0\u6240\u6709 LDAP \u7528\u6237\u7F13\u5B58\u4FE1\u606F"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"REFRESH LDAP ALL;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5237\u65B0\u5F53\u524D LDAP \u7528\u6237\u7684\u7F13\u5B58\u4FE1\u606F"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"REFRESH LDAP;\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u5237\u65B0\u6307\u5B9A LDAP \u7528\u6237 user1 \u7684\u7F13\u5B58\u4FE1\u606F"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"REFRESH LDAP for user1;\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,l.jsx)(n.p,{children:"REFRESH, LDAP"}),"\n",(0,l.jsx)(n.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return r}});var t=s(667294);let l={},a=t.createContext(l);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);