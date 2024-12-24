"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["893548"],{163360:function(n,t,e){e.r(t),e.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>p,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/split-part","title":"SPLIT_PART","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/string-functions/split-part.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/split-part","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/split-part","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SPLIT_PART","language":"zh-CN"},"sidebar":"docs","previous":{"title":"STRRIGHT","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/strright"},"next":{"title":"SPLIT_BY_STRING","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/split-by-string"}}'),l=e("785893"),i=e("250065");let r={title:"SPLIT_PART",language:"zh-CN"},a=void 0,p={},c=[{value:"split_part",id:"split_part",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function o(n){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"split_part",children:"split_part"}),"\n",(0,l.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.code,{children:"VARCHAR split_part(VARCHAR content, VARCHAR delimiter, INT field)"})}),"\n",(0,l.jsxs)(t.p,{children:["\u6839\u636E\u5206\u5272\u7B26\u62C6\u5206\u5B57\u7B26\u4E32, \u8FD4\u56DE\u6307\u5B9A\u7684\u5206\u5272\u90E8\u5206(\u4ECE\u4E00\u6216\u8D1F\u4E00\u5F00\u59CB\u8BA1\u6570)\u3002field\u5B57\u6BB5\u652F\u6301\u8D1F\u6570\uFF0C\u4EE3\u8868\u4ECE\u53F3\u5F80\u5DE6\u5012\u7740\u622A\u53D6\u5E76\u53D6\u6570\u3002\n",(0,l.jsx)(t.code,{children:"delimiter"})," \u548C ",(0,l.jsx)(t.code,{children:"field"})," \u53C2\u6570\u9700\u8981\u662F\u5E38\u91CF, \u4E0D\u652F\u6301\u53D8\u91CF\u3002"]}),"\n",(0,l.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"mysql> select split_part(\"hello world\", \" \", 1);\n+----------------------------------+\n| split_part('hello world', ' ', 1) |\n+----------------------------------+\n| hello                            |\n+----------------------------------+\n\n\nmysql> select split_part(\"hello world\", \" \", 2);\n+----------------------------------+\n| split_part('hello world', ' ', 2) |\n+----------------------------------+\n| world                             |\n+----------------------------------+\n\nmysql> select split_part(\"2019\u5E747\u67088\u53F7\", \"\u6708\", 1);\n+-----------------------------------------+\n| split_part('2019\u5E747\u67088\u53F7', '\u6708', 1)     |\n+-----------------------------------------+\n| 2019\u5E747                                 |\n+-----------------------------------------+\n\nmysql> select split_part(\"abca\", \"a\", 1);\n+----------------------------+\n| split_part('abca', 'a', 1) |\n+----------------------------+\n|                            |\n+----------------------------+\n\nmysql> select split_part(\"prefix_string\", \"_\", -1);\n+--------------------------------------+\n| split_part('prefix_string', '_', -1) |\n+--------------------------------------+\n| string                               |\n+--------------------------------------+\n\nmysql> select split_part(\"prefix_string\", \"_\", -2);\n+--------------------------------------+\n| split_part('prefix_string', '_', -2) |\n+--------------------------------------+\n| prefix                               |\n+--------------------------------------+\n\nmysql> select split_part(\"abc##123###234\", \"##\", -1);\n+----------------------------------------+\n| split_part('abc##123###234', '##', -1) |\n+----------------------------------------+\n| 234                                    |\n+----------------------------------------+\n\nmysql> select split_part(\"abc##123###234\", \"##\", -2);\n+----------------------------------------+\n| split_part('abc##123###234', '##', -2) |\n+----------------------------------------+\n| 123#                                   |\n+----------------------------------------+\n"})}),"\n",(0,l.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"SPLIT_PART,SPLIT,PART\n"})})]})}function d(n={}){let{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,l.jsx)(t,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return a},a:function(){return r}});var s=e(667294);let l={},i=s.createContext(l);function r(n){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),s.createElement(i.Provider,{value:t},n.children)}}}]);