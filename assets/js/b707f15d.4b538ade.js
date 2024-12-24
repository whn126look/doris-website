"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["446341"],{695981:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>o});var i=JSON.parse('{"id":"table-design/data-partitioning/auto-bucket","title":"Auto bucket","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/table-design/data-partitioning/auto-bucket.md","sourceDirName":"table-design/data-partitioning","slug":"/table-design/data-partitioning/auto-bucket","permalink":"/docs/2.0/table-design/data-partitioning/auto-bucket","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Auto bucket","language":"en"},"sidebar":"docs","previous":{"title":"Manual bucketing","permalink":"/docs/2.0/table-design/data-partitioning/manual-bucketing"},"next":{"title":"Common Issues","permalink":"/docs/2.0/table-design/data-partitioning/common-issues"}}'),a=n("785893"),s=n("250065");let o={title:"Auto bucket",language:"en"},r=void 0,c={},l=[{value:"Initial bucketing projection",id:"initial-bucketing-projection",level:2},{value:"Subsequent bucketing projection",id:"subsequent-bucketing-projection",level:2}];function u(e){let t={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Users often encounter various issues due to improper bucket settings. To address this, we provide an automated approach for setting the number of buckets, which is currently applicable only to OLAP tables."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["This feature will be disabled when synchronized by CCR. If this table is copied by CCR, that is, PROPERTIES contains ",(0,a.jsx)(t.code,{children:"is_being_synced = true"}),", it will be displayed as enabled in show create table, but will not actually take effect. When ",(0,a.jsx)(t.code,{children:"is_being_synced"})," is set to ",(0,a.jsx)(t.code,{children:"false"}),", these features will resume working, but the ",(0,a.jsx)(t.code,{children:"is_being_synced"})," property is for CCR peripheral modules only and should not be manually set during CCR synchronization."]})}),"\n",(0,a.jsx)(t.p,{children:"In the past, user had to set the number of buckets manually when creating table, but the automatic bucket feature is a way for Apache Doris to dynamically project the number of buckets, so that the number of buckets always stays within a suitable range and users don't have to worry about the minutiae of the number of buckets."}),"\n",(0,a.jsx)(t.p,{children:"For the sake of clarity, this section splits the bucket into two periods, the initial bucket and the subsequent bucket; the initial and subsequent are just terms used in this article to describe the feature clearly, there is no initial or subsequent Apache Doris bucket."}),"\n",(0,a.jsxs)(t.p,{children:["As we know from the section above on creating buckets, ",(0,a.jsx)(t.code,{children:"BUCKET_DESC"})," is very simple, but you need to specify the number of buckets; for the automatic bucket projection feature, the syntax of BUCKET_DESC directly changes the number of buckets to ",(0,a.jsx)(t.code,{children:"Auto"})," and adds a new Properties configuration."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:'-- old version of the creation syntax for specifying the number of buckets\nDISTRIBUTED BY HASH(site) BUCKETS 20\n\n-- Newer versions use the creation syntax for automatic bucket imputation\nDISTRIBUTED BY HASH(site) BUCKETS AUTO\nproperties("estimate_partition_size" = "100G")\n'})}),"\n",(0,a.jsx)(t.p,{children:"The new configuration parameter estimate_partition_size indicates the amount of data for a single partition. This parameter is optional and if not given, Doris will take the default value of estimate_partition_size to 10GB."}),"\n",(0,a.jsx)(t.p,{children:"As you know from the above, a partitioned bucket is a Tablet at the physical level, and for best performance, it is recommended that the Tablet size be in the range of 1GB - 10GB. So how does the automatic bucketing projection ensure that the Tablet size is within this range?"}),"\n",(0,a.jsx)(t.p,{children:"To summarize, there are a few principles."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If the overall data volume is small, the number of buckets should not be set too high"}),"\n",(0,a.jsx)(t.li,{children:"If the overall data volume is large, the number of buckets should be related to the total number of disk blocks, so as to fully utilize the capacity of each BE machine and each disk"}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"propertie estimate_partition_size not support alter"})}),"\n",(0,a.jsx)(t.h2,{id:"initial-bucketing-projection",children:"Initial bucketing projection"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Obtain a number of buckets N based on the data size. Initially, we divide the value of ",(0,a.jsx)(t.code,{children:"estimate_partition_size"})," by 5 (considering a data compression ratio of 5 to 1 when storing data in text format in Doris). The result obtained is"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"(, 100MB), then take N=1\n\n[100MB, 1GB), then take N=2\n\n(1GB, ), then one bucket per GB\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"2",children:["\n",(0,a.jsx)(t.li,{children:"calculate the number of buckets M based on the number of BE nodes and the disk capacity of each BE node."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Where each BE node counts as 1, and every 50G of disk capacity counts as 1.\n\nThe calculation rule for M is: M = Number of BE nodes * (Size of one disk block / 50GB) * Number of disk blocks.\n\nFor example: If there are 3 BEs, and each BE has 4 disks of 500GB, then M = 3 * (500GB / 50GB) * 4 = 120.\n\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"3",children:["\n",(0,a.jsx)(t.li,{children:"Calculation logic to get the final number of buckets."}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Calculate an intermediate value x = min(M, N, 128).\n\nIf x < N and x < the number of BE nodes, the final bucket is y.\n\nThe number of BE nodes; otherwise, the final bucket is x.\n"})}),"\n",(0,a.jsxs)(t.ol,{start:"4",children:["\n",(0,a.jsx)(t.li,{children:"x = max(x, autobucket_min_buckets), Here autobucket_min_buckets is configured in Config (where, default is 1)"}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The pseudo-code representation of the above process is as follows"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"int N = Compute the N value;\nint M = compute M value;\n\nint y = number of BE nodes;\nint x = min(M, N, 128);\n\nif (x < N && x < y) {\n  return y;\n}\nreturn x;\n"})}),"\n",(0,a.jsx)(t.p,{children:"With the above algorithm in mind, let's introduce some examples to better understand this part of the logic."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"case1:\nAmount of data 100 MB, 10 BE machines, 2TB * 3 disks\nAmount of data N = 1\nBE disks M = 10* (2TB/50GB) * 3 = 1230\nx = min(M, N, 128) = 1\nFinal: 1\n\ncase2:\nData volume 1GB, 3 BE machines, 500GB * 2 disks\nAmount of data N = 2\nBE disks M = 3* (500GB/50GB) * 2 = 60\nx = min(M, N, 128) = 2\nFinal: 2\n\ncase3:\nData volume 100GB, 3 BE machines, 500GB * 2 disks\nAmount of data N = 20\nBE disks M = 3* (500GB/50GB) * 2 = 60\nx = min(M, N, 128) = 20\nFinal: 20\n\ncase4:\nData volume 500GB, 3 BE machines, 1TB * 1 disk\nData volume N = 100\nBE disks M = 3* (1TB /50GB) * 1 = 60\nx = min(M, N, 128) = 63\nFinal: 63\n\ncase5:\nData volume 500GB, 10 BE machines, 2TB * 3 disks\nAmount of data N = 100\nBE disks M = 10* (2TB / 50GB) * 3 = 1230\nx = min(M, N, 128) = 100\nFinal: 100\n\ncase 6:\nData volume 1TB, 10 BE machines, 2TB * 3 disks\nAmount of data N = 205\nBE disks M = 10* (2TB / 50GB) * 3 = 1230\nx = min(M, N, 128) = 128\nFinal: 128\n\ncase 7:\nData volume 500GB, 1 BE machine, 100TB * 1 disk\nAmount of data N = 100\nBE disk M = 1* (100TB / 50GB) * 1 = 2048\nx = min(M, N, 128) = 100\nFinal: 100\n\ncase 8:\nData volume 1TB, 200 BE machines, 4TB * 7 disks\nAmount of data N = 205\nBE disks M = 200* (4TB / 50GB) * 7 = 114800\nx = min(M, N, 128) = 128\nFinal: 200\n"})}),"\n",(0,a.jsx)(t.h2,{id:"subsequent-bucketing-projection",children:"Subsequent bucketing projection"}),"\n",(0,a.jsx)(t.p,{children:"The above is the calculation logic for the initial bucketing. The subsequent bucketing can be evaluated based on the amount of partition data available since there is already a certain amount of partition data. The subsequent bucket size is evaluated based on the EMA[1] (short term exponential moving average) value of up to the first 7 partitions, which is used as the estimate_partition_size. At this point there are two ways to calculate the partition buckets, assuming partitioning by days, counting forward to the first day partition size of S7, counting forward to the second day partition size of S6, and so on to S1."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If the partition data in 7 days is strictly increasing daily, then the trend value will be taken at this time. There are 6 delta values, which are"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"S7 - S6 = delta1,\nS6 - S5 = delta2,\n...\nS2 - S1 = delta6\n"})}),"\n",(0,a.jsx)(t.p,{children:"This yields the ema(delta) value.Then, today's estimate_partition_size = S7 + ema(delta)"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"not the first case, this time directly take the average of the previous days EMA. Today's estimate_partition_size = EMA(S1, ... , S7) , S7)"}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"According to the above algorithm, the initial number of buckets and the number of subsequent buckets can be calculated. Unlike before when only a fixed number of buckets could be specified, due to changes in business data, it is possible that the number of buckets in the previous partition is different from the number of buckets in the next partition, which is transparent to the user, and the user does not need to care about the exact number of buckets in each partition, and this automatic extrapolation will make the number of buckets more reasonable."})})]})}function d(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return o}});var i=n(667294);let a={},s=i.createContext(a);function o(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);