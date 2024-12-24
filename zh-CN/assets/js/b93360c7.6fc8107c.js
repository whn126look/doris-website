"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["202155"],{238291:function(e,n,i){i.r(n),i.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return h},frontMatter:function(){return o},metadata:function(){return r},toc:function(){return c}});var r=i(975969),s=i(785893),t=i(250065);let o={title:"Apache Doris Flink Connector 24.0.0  just released!",description:"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024.",summary:"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024.",date:"2024-09-25",author:"Apache Doris",tags:["Release Notes"],image:"/images/release-flink-doris-connector-24.0.jpg"},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Behavioral Changes",id:"behavioral-changes",level:2},{value:"New Features",id:"new-features",level:2},{value:"Improvements",id:"improvements",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Credits",id:"credits",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024. This release brings several enhancements and new capabilities, including support for Flink 1.20 and high-speed data retrieval from Doris via Arrow Flight SQL. Additionally, the FlinkCDC version required for full database synchronization has been upgraded to 3.1.x for optimal performance."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Download Link: ",(0,s.jsx)(n.a,{href:"https://github.com/apache/doris-flink-connector/releases/tag/24.0.0",children:"https://github.com/apache/doris-flink-connector/releases/tag/24.0.0"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"behavioral-changes",children:"Behavioral Changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["FlinkCDC Upgrade: To leverage the full potential of this release, the FlinkCDC version used for full database synchronization must be upgraded to 3.1.x. Due to the incompatibility between FlinkCDC 3.1.x and earlier versions (e.g., 2.4), running full database synchronization jobs will require a stateless restart after upgrading FlinkCDC. Please refer to the ",(0,s.jsx)(n.a,{href:"https://mp.weixin.qq.com/s/qYW5Bw0IqUHUc8bnfWOIog",children:"Apache Flink CDC 3.1.0 Release Announcement"})," for details on compatibility."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Version Renaming: To maintain consistency with other Connectors (e.g., Spark and Kafka) and account for the aforementioned incompatibilities, the Connector version has been renamed to the 24.x series. See the discussion thread ",(0,s.jsx)(n.a,{href:"https://lists.apache.org/thread/8tp215yk0tkgtdfkjdl4svvbljnmxzst",children:"DISCUSS] About the next version change of Connector"})," for more information."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"new-features",children:"New Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Supported Flink v1.20."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"DB2 Database synchronization is supported."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"CDC Schema Change enhancement supported the use of the JSQLParser framework for DDL."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Supported Stream Load with GZ compression."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Enabled Arrow Flight SQL integration for high-speed data retrieval from Doris."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"improvements",children:"Improvements"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Upgraded FlinkCDC  to 3.1.1."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"JDBC parameter configuration for DB2/Postgres/SQLServer synchronization."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Optimized batch writing mode."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Refined CDC synchronization logic."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Supported MySQL full database synchronization with ",(0,s.jsx)(n.code,{children:"INTEGER"})," type."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Resolved serialization issues with ",(0,s.jsx)(n.code,{children:"MAP"})," subtypes of ",(0,s.jsx)(n.code,{children:"DATE"}),"/ ",(0,s.jsx)(n.code,{children:"DATETIME"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fixed FlinkSQL projection pushdown bugs"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Resolved ",(0,s.jsx)(n.code,{children:"DECIMAL"})," type sync issues with MongoDB"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Compatibility update for Doris arrow-based timestamp reading"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Fixed non-effective delete events in CDC full database synchronization"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Corrected schema change logic when default values are null"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"credits",children:"Credits"}),"\n",(0,s.jsx)(n.p,{children:"@bingquanzhao\u3001@DongLiang-0\u3001@JasonLeeCoding\u3001@JNSimba@MaoMiMao\u3001@qg-lin@tmc9031\u3001@vinlee19"})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return a},a:function(){return o}});var r=i(667294);let s={},t=r.createContext(s);function o(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(t.Provider,{value:n},e.children)}},975969:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/release-flink-doris-connector-24.0.0","source":"@site/blog/release-flink-doris-connector-24.0.0.md","title":"Apache Doris Flink Connector 24.0.0  just released!","description":"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024.","date":"2024-09-25T00:00:00.000Z","tags":[{"inline":true,"label":"Release Notes","permalink":"/zh-CN/blog/tags/release-notes"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Apache Doris Flink Connector 24.0.0  just released!","description":"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024.","summary":"Dear community, We are excited to announce the official release of Apache Doris Flink Connector version 24.0.0 on September 5th, 2024.","date":"2024-09-25","author":"Apache Doris","tags":["Release Notes"],"image":"/images/release-flink-doris-connector-24.0.jpg"},"unlisted":false,"prevItem":{"title":"Apache Doris version 2.0.15 has been released","permalink":"/zh-CN/blog/release-note-2.0.15"},"nextItem":{"title":"Real-time data warehouse in TikTok based on Apache Doris","permalink":"/zh-CN/blog/real-time-data-warehouse-in-TikTok-based-on-doris"}}')}}]);