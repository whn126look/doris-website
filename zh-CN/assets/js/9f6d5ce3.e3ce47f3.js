"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["782841"],{281606:function(e,n,i){i.r(n),i.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>a,assets:()=>d,toc:()=>o,frontMatter:()=>t});var r=JSON.parse('{"id":"query-acceleration/query-optimizer","title":"\u67E5\u8BE2\u4F18\u5316\u5668\u4ECB\u7ECD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/query-acceleration/query-optimizer.md","sourceDirName":"query-acceleration","slug":"/query-acceleration/query-optimizer","permalink":"/zh-CN/docs/query-acceleration/query-optimizer","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u67E5\u8BE2\u4F18\u5316\u5668\u4ECB\u7ECD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HLL \u8FD1\u4F3C\u53BB\u91CD","permalink":"/zh-CN/docs/query-acceleration/distinct-counts/using-hll"},"next":{"title":"\u5E76\u884C\u6267\u884C","permalink":"/zh-CN/docs/query-acceleration/pipeline-execution-engine"}}'),s=i("785893"),l=i("250065");let t={title:"\u67E5\u8BE2\u4F18\u5316\u5668\u4ECB\u7ECD",language:"zh-CN"},c=void 0,d={},o=[{value:"\u7814\u53D1\u80CC\u666F",id:"\u7814\u53D1\u80CC\u666F",level:2},{value:"Doris \u67E5\u8BE2\u4F18\u5316\u5668\u4F18\u52BF",id:"doris-\u67E5\u8BE2\u4F18\u5316\u5668\u4F18\u52BF",level:2},{value:"\u66F4\u806A\u660E",id:"\u66F4\u806A\u660E",level:3},{value:"\u66F4\u7A33\u5B9A",id:"\u66F4\u7A33\u5B9A",level:3},{value:"\u66F4\u7075\u6D3B",id:"\u66F4\u7075\u6D3B",level:3},{value:"\u4F18\u5316\u5668\u5DE5\u4F5C\u539F\u7406",id:"\u4F18\u5316\u5668\u5DE5\u4F5C\u539F\u7406",level:2},{value:"\u6574\u4F53\u6D41\u7A0B",id:"\u6574\u4F53\u6D41\u7A0B",level:3},{value:"\u5E38\u7528\u4F1A\u8BDD\u53D8\u91CF",id:"\u5E38\u7528\u4F1A\u8BDD\u53D8\u91CF",level:2}];function h(e){let n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"\u7814\u53D1\u80CC\u666F",children:"\u7814\u53D1\u80CC\u666F"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u5F53\u524D\u7684\u4FE1\u606F\u6280\u672F\u73AF\u5883\u4E2D\uFF0C\u67E5\u8BE2\u4F18\u5316\u5668\u9762\u4E34\u7740\u591A\u91CD\u6311\u6218\uFF1A\u4E00\u65B9\u9762\uFF0C\u5B83\u4EEC\u9700\u8981\u5904\u7406\u7528\u6237\u65E5\u76CA\u590D\u6742\u7684\u67E5\u8BE2\u8BED\u53E5\u548C\u591A\u6837\u5316\u7684\u67E5\u8BE2\u573A\u666F\uFF1B\u53E6\u4E00\u65B9\u9762\uFF0C\u7528\u6237\u5BF9\u67E5\u8BE2\u5B9E\u65F6\u6027\u7684\u8981\u6C42\u6108\u53D1\u4E25\u683C\uFF0C\u6E34\u671B\u80FD\u591F\u5373\u65F6\u83B7\u53D6\u6240\u9700\u7ED3\u679C\u3002\u6B64\u5916\uFF0C\u4E3A\u4E86\u5E94\u5BF9\u4E0D\u65AD\u51FA\u73B0\u7684\u65B0\u9700\u6C42\uFF0C\u67E5\u8BE2\u4F18\u5316\u5668\u5FC5\u987B\u5177\u5907\u5FEB\u901F\u8FED\u4EE3\u4E0E\u7075\u6D3B\u9002\u5E94\u7684\u80FD\u529B\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u57FA\u4E8E\u8FD9\u6837\u7684\u80CC\u666F\uFF0CDoris \u5F00\u59CB\u7740\u624B\u7814\u53D1\u4E86\u4E00\u6B3E\u5168\u65B0\u7684\u67E5\u8BE2\u4F18\u5316\u5668\u3002\u8BE5\u4F18\u5316\u5668\u4F9D\u6258\u73B0\u4EE3\u4F18\u5316\u5668\u67B6\u6784\uFF0C\u65E8\u5728\u66F4\u9AD8\u6548\u5730\u5E94\u5BF9\u5F53\u524D Doris \u573A\u666F\u7684\u67E5\u8BE2\u8BF7\u6C42\uFF0C\u540C\u65F6\u63D0\u4F9B\u5353\u8D8A\u7684\u6269\u5C55\u6027\uFF0C\u4E3A\u672A\u6765\u53EF\u80FD\u51FA\u73B0\u7684\u66F4\u590D\u6742\u9700\u6C42\u5960\u5B9A\u575A\u5B9E\u57FA\u7840\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"doris-\u67E5\u8BE2\u4F18\u5316\u5668\u4F18\u52BF",children:"Doris \u67E5\u8BE2\u4F18\u5316\u5668\u4F18\u52BF"}),"\n",(0,s.jsx)(n.h3,{id:"\u66F4\u806A\u660E",children:"\u66F4\u806A\u660E"}),"\n",(0,s.jsx)(n.p,{children:"\u4F18\u5316\u5668\u5C06\u6BCF\u4E2A RBO\uFF08\u57FA\u4E8E\u89C4\u5219\u7684\u4F18\u5316\uFF09\u548C CBO\uFF08\u57FA\u4E8E\u6210\u672C\u7684\u4F18\u5316\uFF09\u7684\u4F18\u5316\u70B9\uFF0C\u4EE5\u89C4\u5219\u7684\u5F62\u5F0F\u6E05\u6670\u5730\u5448\u73B0\u51FA\u6765\u3002\u9488\u5BF9\u6BCF\u4E00\u4E2A\u89C4\u5219\uFF0C\u4F18\u5316\u5668\u90FD\u63D0\u4F9B\u4E86\u4E00\u7EC4\u63CF\u8FF0\u67E5\u8BE2\u8BA1\u5212\u5F62\u72B6\u7684\u6A21\u5F0F\uFF0C\u8FD9\u4E9B\u6A21\u5F0F\u80FD\u591F\u7CBE\u786E\u5730\u5339\u914D\u53EF\u4F18\u5316\u7684\u67E5\u8BE2\u8BA1\u5212\u3002\u56E0\u6B64\uFF0C\u4F18\u5316\u5668\u80FD\u591F\u66F4\u597D\u5730\u652F\u6301\u8BF8\u5982\u591A\u5C42\u5B50\u67E5\u8BE2\u5D4C\u5957\u7B49\u66F4\u4E3A\u590D\u6742\u7684\u67E5\u8BE2\u8BED\u53E5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u540C\u65F6\uFF0C\u4F18\u5316\u5668\u7684 CBO \u57FA\u4E8E\u5148\u8FDB\u7684 Cascades \u6846\u67B6\uFF0C\u5145\u5206\u5229\u7528\u4E86\u4E30\u5BCC\u7684\u6570\u636E\u7EDF\u8BA1\u4FE1\u606F\u3001\u6570\u636E\u7279\u5F81\u4FE1\u606F\u4EE5\u53CA\u7CBE\u5FC3\u8C03\u4F18\u7684\u4EE3\u4EF7\u6A21\u578B\u3002\u8FD9\u4F7F\u5F97\u4F18\u5316\u5668\u5728\u5904\u7406\u591A\u8868 Join \u7B49\u590D\u6742\u67E5\u8BE2\u65F6\uFF0C\u80FD\u591F\u6E38\u5203\u6709\u4F59\uFF0C\u8F7B\u677E\u5E94\u5BF9\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u66F4\u7A33\u5B9A",children:"\u66F4\u7A33\u5B9A"}),"\n",(0,s.jsx)(n.p,{children:"\u4F18\u5316\u5668\u7684\u6240\u6709\u4F18\u5316\u89C4\u5219\u5747\u5728\u903B\u8F91\u6267\u884C\u8BA1\u5212\u6811\u4E0A\u5B8C\u6210\u3002\u67E5\u8BE2\u8BED\u6CD5\u8BED\u4E49\u89E3\u6790\u5B8C\u6210\u540E\uFF0C\u67E5\u8BE2\u4F1A\u88AB\u8F6C\u6362\u4E3A\u6811\u72B6\u7ED3\u6784\u3002\u76F8\u6BD4\u65E7\u4F18\u5316\u5668\uFF0C\u65B0\u4F18\u5316\u5668\u7684\u5185\u90E8\u6570\u636E\u7ED3\u6784\u66F4\u4E3A\u5408\u7406\u3001\u7EDF\u4E00\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4EE5\u5B50\u67E5\u8BE2\u5904\u7406\u4E3A\u4F8B\uFF0C\u65B0\u4F18\u5316\u5668\u57FA\u4E8E\u65B0\u7684\u6570\u636E\u7ED3\u6784\uFF0C\u907F\u514D\u4E86\u65E7\u4F18\u5316\u5668\u4E2D\u4F17\u591A\u89C4\u5219\u5BF9\u5B50\u67E5\u8BE2\u7684\u5355\u72EC\u5904\u7406\uFF0C\u4ECE\u800C\u964D\u4F4E\u4E86\u4F18\u5316\u89C4\u5219\u51FA\u73B0\u903B\u8F91\u9519\u8BEF\u7684\u53EF\u80FD\u6027\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u66F4\u7075\u6D3B",children:"\u66F4\u7075\u6D3B"}),"\n",(0,s.jsx)(n.p,{children:"\u4F18\u5316\u5668\u7684\u67B6\u6784\u8BBE\u8BA1\u5408\u7406\u4E14\u73B0\u4EE3\uFF0C\u4F7F\u5F97\u6269\u5C55\u4F18\u5316\u89C4\u5219\u548C\u5904\u7406\u9636\u6BB5\u53D8\u5F97\u975E\u5E38\u65B9\u4FBF\u3002\u56E0\u6B64\uFF0C\u6211\u4EEC\u80FD\u591F\u8FC5\u901F\u589E\u52A0\u65B0\u7684\u529F\u80FD\uFF0C\u4EE5\u6EE1\u8DB3\u4E0D\u65AD\u53D8\u5316\u7684\u65B0\u9700\u6C42\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u4F18\u5316\u5668\u5DE5\u4F5C\u539F\u7406",children:"\u4F18\u5316\u5668\u5DE5\u4F5C\u539F\u7406"}),"\n",(0,s.jsx)(n.h3,{id:"\u6574\u4F53\u6D41\u7A0B",children:"\u6574\u4F53\u6D41\u7A0B"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"\u4F18\u5316\u5668\u5DE5\u4F5C\u539F\u7406",src:i(129412).Z+"",width:"2560",height:"1256"})}),"\n",(0,s.jsx)(n.p,{children:"\u4F18\u5316\u5668\u7684\u6267\u884C\u6D41\u7A0B\u5927\u81F4\u5206\u4E3A\u4EE5\u4E0B\u51E0\u4E2A\u6B65\u9AA4\uFF1A"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8BED\u6CD5\u5206\u6790\uFF1A"})," \u4F18\u5316\u5668\u4F1A\u5C1D\u8BD5\u5C06 SQL \u6587\u672C\u8F6C\u6362\u4E3A\u62BD\u8C61\u8BED\u6CD5\u6811\uFF08AST\uFF09\u3002\u5982\u679C SQL \u6587\u672C\u5408\u6CD5\uFF0C\u5219\u7EE7\u7EED\u8FDB\u884C\u540E\u7EED\u6B65\u9AA4\uFF1B\u5982\u679C\u975E\u6CD5\uFF0C\u5219\u4F1A\u62A5\u9519\u5E76\u7EC8\u6B62\u6267\u884C\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u8BED\u4E49\u5206\u6790\uFF1A"})," \u4F18\u5316\u5668\u4F1A\u5BF9 AST \u4E2D\u7684\u5143\u7D20\u8FDB\u884C\u8BED\u4E49\u5206\u6790\u3002\u8FD9\u4E00\u6B65\u9AA4\u4F1A\u68C0\u67E5 SQL \u67E5\u8BE2\u4E2D\u7684\u8868\u3001\u5217\u3001\u51FD\u6570\u7B49\u662F\u5426\u5B58\u5728\uFF0C\u4EE5\u53CA\u5B83\u4EEC\u7684\u4F7F\u7528\u662F\u5426\u7B26\u5408\u8BED\u6CD5\u548C\u8BED\u4E49\u89C4\u5219\u3002\u5982\u679C\u8BED\u4E49\u5408\u6CD5\uFF0C\u5219\u7EE7\u7EED\u6267\u884C\uFF1B\u5982\u679C\u8BED\u4E49\u975E\u6CD5\uFF0C\u5219\u4F1A\u62A5\u9519\u5E76\u7EC8\u6B62\u6267\u884C\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6539\u5199\u67E5\u8BE2\u8BA1\u5212\uFF08RBO\uFF09\uFF1A"})," \u5728\u8BED\u6CD5\u548C\u8BED\u4E49\u5206\u6790\u4E4B\u540E\uFF0C\u4F18\u5316\u5668\u4F1A\u8FDB\u884C\u57FA\u4E8E\u89C4\u5219\u7684\u4F18\u5316\uFF08RBO\uFF09\u3002\u8FD9\u4E00\u6B65\u9AA4\u4F1A\u901A\u8FC7\u4E00\u7CFB\u5217\u9884\u5B9A\u4E49\u7684\u89C4\u5219\u5BF9\u67E5\u8BE2\u8BA1\u5212\u8FDB\u884C\u6539\u5199\uFF0C\u4EE5\u786E\u5B9A\u6027\u5730\u4F18\u5316\u6267\u884C\u901F\u5EA6\u3002\u5E38\u89C1\u7684\u4F18\u5316\u624B\u6BB5\u5305\u62EC\u5217\u88C1\u526A\u3001\u8C13\u8BCD\u4E0B\u63A8\u3001\u5206\u533A\u88C1\u526A\u7B49\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4F18\u5316\u67E5\u8BE2\u8BA1\u5212\uFF08CBO\uFF09\uFF1A"})," \u6700\u540E\uFF0C\u4F18\u5316\u5668\u4F1A\u8FDB\u884C\u57FA\u4E8E\u4EE3\u4EF7\u7684\u4F18\u5316\uFF08CBO\uFF09\u3002\u5728\u8FD9\u4E00\u6B65\u9AA4\u4E2D\uFF0C\u4F18\u5316\u5668\u4F1A\u5728\u641C\u7D22\u7A7A\u95F4\u4E2D\u679A\u4E3E\u7B49\u4EF7\u7684\u8BA1\u5212\u96C6\u5408\uFF0C\u5E76\u8BC4\u4F30\u5B83\u4EEC\u7684\u6267\u884C\u4EE3\u4EF7\u3002\u901A\u8FC7\u6BD4\u8F83\u4E0D\u540C\u8BA1\u5212\u7684\u6267\u884C\u4EE3\u4EF7\uFF0C\u4F18\u5316\u5668\u4F1A\u9009\u62E9\u4EE3\u4EF7\u6700\u5C0F\u7684\u8BA1\u5212\u4F5C\u4E3A\u6700\u7EC8\u7684\u6267\u884C\u8BA1\u5212\u3002\u8FD9\u4E00\u6B65\u9AA4\u65E8\u5728\u786E\u4FDD\u67E5\u8BE2\u80FD\u591F\u4EE5\u6700\u9AD8\u6548\u7684\u65B9\u5F0F\u6267\u884C\uFF0C\u4ECE\u800C\u63D0\u4F9B\u6700\u4F73\u7684\u6027\u80FD\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5E38\u7528\u4F1A\u8BDD\u53D8\u91CF",children:"\u5E38\u7528\u4F1A\u8BDD\u53D8\u91CF"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.strong,{children:["1. \u8BBE\u7F6E\u89C4\u5212\u8D85\u65F6\u65F6\u95F4 ",(0,s.jsx)(n.code,{children:"nereids_timeout_second"})]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u6B64\u53D8\u91CF\u7528\u4E8E\u8BBE\u7F6E\u67E5\u8BE2\u89C4\u5212\u7684\u6700\u5927\u5141\u8BB8\u65F6\u95F4\u3002\u5F53\u89C4\u5212\u65F6\u95F4\u8D85\u51FA\u8BE5\u8BBE\u5B9A\u503C\u65F6\uFF0C\u67E5\u8BE2\u89C4\u5212\u5C06\u88AB\u7EC8\u6B62\uFF0C\u5E76\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\u3002\u5728\u89C4\u5212\u67E5\u8BE2\u8BED\u53E5\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u7CFB\u7EDF\u4F1A\u83B7\u53D6 SQL \u4E2D\u6D89\u53CA\u7684\u6240\u6709\u8868\u7684\u8BFB\u9501\uFF0C\u8FD9\u4E00\u673A\u5236\u7684\u4E3B\u8981\u76EE\u7684\u662F\u7EF4\u62A4\u96C6\u7FA4\u7684\u7A33\u5B9A\u6027\uFF0C\u9632\u6B62\u56E0\u89C4\u5212\u65F6\u95F4\u8FC7\u957F\u800C\u9020\u6210\u7684\u8D44\u6E90\u8FC7\u5EA6\u5360\u7528\u4EE5\u53CA\u9501\u51B2\u7A81\u95EE\u9898\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u9ED8\u8BA4\u503C\uFF1A30s"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u9002\u7528\u573A\u666F\uFF1A\u5F53\u67E5\u8BE2\u6D89\u53CA\u5927\u91CF\u5916\u90E8\u8868\u6216\u67E5\u8BE2\u8BED\u53E5\u7279\u522B\u590D\u6742\u65F6\uFF0C\u53EF\u4EE5\u9002\u5F53\u589E\u52A0\u6B64\u503C\uFF0C\u4EE5\u786E\u4FDD\u67E5\u8BE2\u80FD\u591F\u6B63\u5E38\u8FDB\u884C\u3002"}),"\n"]}),"\n"]})]})}function a(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},129412:function(e,n,i){i.d(n,{Z:function(){return r}});let r=i.p+"assets/images/cost-based-optimizer-fc98bc8cc103d7a455129ef94b21d4ae.jpg"},250065:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return t}});var r=i(667294);let s={},l=r.createContext(s);function t(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);