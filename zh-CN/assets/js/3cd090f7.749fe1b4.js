"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["840169"],{697227:function(e,n,l){l.r(n),l.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>t});var s=JSON.parse('{"id":"data-operate/delete/batch-delete-manual","title":"\u6279\u91CF\u5220\u9664","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/data-operate/delete/batch-delete-manual.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/batch-delete-manual","permalink":"/zh-CN/docs/3.0/data-operate/delete/batch-delete-manual","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"\u6279\u91CF\u5220\u9664","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Delete \u64CD\u4F5C","permalink":"/zh-CN/docs/3.0/data-operate/delete/delete-manual"},"next":{"title":"Truncate \u64CD\u4F5C","permalink":"/zh-CN/docs/3.0/data-operate/delete/truncate-manual"}}'),r=l("785893"),d=l("250065");let t={title:"\u6279\u91CF\u5220\u9664",language:"zh-CN"},i=void 0,a={},c=[{value:"\u57FA\u672C\u539F\u7406",id:"\u57FA\u672C\u539F\u7406",level:2},{value:"\u8BED\u6CD5\u8BF4\u660E",id:"\u8BED\u6CD5\u8BF4\u660E",level:2},{value:"Stream Load",id:"stream-load",level:3},{value:"Broker Load",id:"broker-load",level:3},{value:"Routine Load",id:"routine-load",level:3},{value:"\u6CE8\u610F\u4E8B\u9879",id:"\u6CE8\u610F\u4E8B\u9879",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u67E5\u770B\u662F\u5426\u542F\u7528\u6279\u91CF\u5220\u9664\u652F\u6301",id:"\u67E5\u770B\u662F\u5426\u542F\u7528\u6279\u91CF\u5220\u9664\u652F\u6301",level:3},{value:"Stream Load \u4F7F\u7528\u793A\u4F8B",id:"stream-load-\u4F7F\u7528\u793A\u4F8B",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u6709\u4E86 Delete \u64CD\u4F5C\u4E3A\u4EC0\u4E48\u8FD8\u8981\u5F15\u5165\u57FA\u4E8E\u5BFC\u5165\u7684\u6279\u91CF\u5220\u9664\uFF1F"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Delete \u64CD\u4F5C\u7684\u5C40\u9650\u6027"})}),"\n",(0,r.jsx)(n.p,{children:"\u4F7F\u7528 Delete \u8BED\u53E5\u7684\u65B9\u5F0F\u5220\u9664\u65F6\uFF0C\u6BCF\u6267\u884C\u4E00\u6B21 Delete \u90FD\u4F1A\u751F\u6210\u4E00\u4E2A\u7A7A\u7684 rowset \u6765\u8BB0\u5F55\u5220\u9664\u6761\u4EF6\uFF0C\u5E76\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684\u6570\u636E\u7248\u672C\u3002\u6BCF\u6B21\u8BFB\u53D6\u90FD\u8981\u5BF9\u5220\u9664\u6761\u4EF6\u8FDB\u884C\u8FC7\u6EE4\uFF0C\u5982\u679C\u9891\u7E41\u5220\u9664\u6216\u8005\u5220\u9664\u6761\u4EF6\u8FC7\u591A\u65F6\uFF0C\u90FD\u4F1A\u4E25\u91CD\u5F71\u54CD\u67E5\u8BE2\u6027\u80FD\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Insert \u6570\u636E\u548C Delete \u6570\u636E\u7A7F\u63D2\u51FA\u73B0"})}),"\n",(0,r.jsx)(n.p,{children:"\u5BF9\u4E8E\u7C7B\u4F3C\u4E8E\u4ECE\u4E8B\u52A1\u6570\u636E\u5E93\u4E2D\uFF0C\u901A\u8FC7 CDC \u8FDB\u884C\u6570\u636E\u5BFC\u5165\u7684\u573A\u666F\uFF0C\u6570\u636E\u4E2D Insert \u548C Delete \u4E00\u822C\u662F\u7A7F\u63D2\u51FA\u73B0\u7684\uFF0C\u9762\u5BF9\u8FD9\u79CD\u573A\u666F\u5F53\u524D Delete \u64CD\u4F5C\u4E5F\u662F\u65E0\u6CD5\u5B9E\u73B0\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5BFC\u5165\u6570\u636E\u65F6\u6709\u51E0\u79CD\u5408\u5E76\u65B9\u5F0F\uFF1A"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"APPEND: \u6570\u636E\u5168\u90E8\u8FFD\u52A0\u5230\u73B0\u6709\u6570\u636E\u4E2D\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["DELETE: \u5220\u9664\u6240\u6709\u4E0E\u5BFC\u5165\u6570\u636E key \u5217\u503C\u76F8\u540C\u7684\u884C (\u5F53\u8868\u5B58\u5728",(0,r.jsx)(n.code,{children:"sequence"}),"\u5217\u65F6\uFF0C\u9700\u8981\u540C\u65F6\u6EE1\u8DB3\u4E3B\u952E\u76F8\u540C\u4EE5\u53CA sequence \u5217\u7684\u5927\u5C0F\u903B\u8F91\u624D\u80FD\u6B63\u786E\u5220\u9664\uFF0C\u8BE6\u89C1\u4E0B\u8FB9\u7528\u4F8B 4)\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"MERGE: \u6839\u636E DELETE ON \u7684\u51B3\u5B9A APPEND \u8FD8\u662F DELETE\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u6279\u91CF\u5220\u9664\u53EA\u5DE5\u4F5C\u5728 Unique \u6A21\u578B\u4E0A\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u57FA\u672C\u539F\u7406",children:"\u57FA\u672C\u539F\u7406"}),"\n",(0,r.jsxs)(n.p,{children:["\u901A\u8FC7\u5728 Unique \u8868\u4E0A\u589E\u52A0\u4E00\u4E2A\u9690\u85CF\u5217",(0,r.jsx)(n.code,{children:"__DORIS_DELETE_SIGN__"}),"\u6765\u5B9E\u73B0\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["FE \u89E3\u6790\u67E5\u8BE2\u65F6\uFF0C\u9047\u5230 * \u7B49\u6269\u5C55\u65F6\u53BB\u6389",(0,r.jsx)(n.code,{children:"__DORIS_DELETE_SIGN__"}),"\uFF0C\u5E76\u4E14\u9ED8\u8BA4\u52A0\u4E0A ",(0,r.jsx)(n.code,{children:"__DORIS_DELETE_SIGN__ != true"})," \u7684\u6761\u4EF6\uFF0CBE \u8BFB\u53D6\u65F6\u90FD\u4F1A\u52A0\u4E0A\u4E00\u5217\u8FDB\u884C\u5224\u65AD\uFF0C\u901A\u8FC7\u6761\u4EF6\u786E\u5B9A\u662F\u5426\u5220\u9664\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5BFC\u5165"}),"\n",(0,r.jsxs)(n.p,{children:["\u5BFC\u5165\u65F6\u5728 FE \u89E3\u6790\u65F6\u5C06\u9690\u85CF\u5217\u7684\u503C\u8BBE\u7F6E\u6210 ",(0,r.jsx)(n.code,{children:"DELETE ON"})," \u8868\u8FBE\u5F0F\u7684\u503C\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u8BFB\u53D6"}),"\n",(0,r.jsxs)(n.p,{children:["\u8BFB\u53D6\u65F6\u5728\u6240\u6709\u5B58\u5728\u9690\u85CF\u5217\u7684\u4E0A\u589E\u52A0",(0,r.jsx)(n.code,{children:"__DORIS_DELETE_SIGN__ != true"})," \u7684\u6761\u4EF6\uFF0Cbe \u4E0D\u611F\u77E5\u8FD9\u4E00\u8FC7\u7A0B\uFF0C\u6B63\u5E38\u6267\u884C\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Cumulative Compaction"}),"\n",(0,r.jsx)(n.p,{children:"Cumulative Compaction \u65F6\u5C06\u9690\u85CF\u5217\u770B\u4F5C\u6B63\u5E38\u7684\u5217\u5904\u7406\uFF0CCompaction \u903B\u8F91\u6CA1\u6709\u53D8\u5316\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Base Compaction"}),"\n",(0,r.jsx)(n.p,{children:"Base Compaction \u65F6\u8981\u5C06\u6807\u8BB0\u4E3A\u5220\u9664\u7684\u884C\u7684\u5220\u6389\uFF0C\u4EE5\u51CF\u5C11\u6570\u636E\u5360\u7528\u7684\u7A7A\u95F4\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u8BED\u6CD5\u8BF4\u660E",children:"\u8BED\u6CD5\u8BF4\u660E"}),"\n",(0,r.jsx)(n.p,{children:"\u5BFC\u5165\u7684\u8BED\u6CD5\u8BBE\u8BA1\u65B9\u9762\u4E3B\u8981\u662F\u589E\u52A0\u4E00\u4E2A\u6307\u5B9A\u5220\u9664\u6807\u8BB0\u5217\u7684\u5B57\u6BB5\u7684 column \u6620\u5C04\uFF0C\u5E76\u4E14\u9700\u8981\u5728\u5BFC\u5165\u7684\u6570\u636E\u4E2D\u589E\u52A0\u4E00\u5217\uFF0C\u5404\u79CD\u5BFC\u5165\u65B9\u5F0F\u8BBE\u7F6E\u7684\u8BED\u6CD5\u5982\u4E0B"}),"\n",(0,r.jsx)(n.h3,{id:"stream-load",children:"Stream Load"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Stream Load"})," \u7684\u5199\u6CD5\u5728 header \u4E2D\u7684 columns \u5B57\u6BB5\u589E\u52A0\u4E00\u4E2A\u8BBE\u7F6E\u5220\u9664\u6807\u8BB0\u5217\u7684\u5B57\u6BB5\uFF0C\u793A\u4F8B ",(0,r.jsx)(n.code,{children:'-H "columns: k1, k2, label_c3" -H "merge_type: [MERGE|APPEND|DELETE]" -H "delete: label_c3=1"'}),"\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"broker-load",children:"Broker Load"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Broker Load"})," \u7684\u5199\u6CD5\u5728 ",(0,r.jsx)(n.code,{children:"PROPERTIES"})," \u5904\u8BBE\u7F6E\u5220\u9664\u6807\u8BB0\u5217\u7684\u5B57\u6BB5\uFF0C\u8BED\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL db1.label1\n(\n    [MERGE|APPEND|DELETE] DATA INFILE("hdfs://abc.com:8888/user/palo/test/ml/file1")\n    INTO TABLE tbl1\n    COLUMNS TERMINATED BY ","\n    (tmp_c1,tmp_c2, label_c3)\n    SET\n    (\n        id=tmp_c2,\n        name=tmp_c1,\n    )\n    [DELETE ON label_c3=true]\n)\nWITH BROKER \'broker\'\n(\n    "username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600"\n);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"routine-load",children:"Routine Load"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Routine Load"}),"\u7684\u5199\u6CD5\u5728 ",(0,r.jsx)(n.code,{children:"columns"}),"\u5B57\u6BB5\u589E\u52A0\u6620\u5C04\uFF0C\u6620\u5C04\u65B9\u5F0F\u540C\u4E0A\uFF0C\u8BED\u6CD5\u5982\u4E0B\uFF1A"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'CREATE ROUTINE LOAD example_db.test1 ON example_tbl \n [WITH MERGE|APPEND|DELETE]\n COLUMNS(k1, k2, k3, v1, v2, label),\n WHERE k1  100 and k2 like "%doris%"\n [DELETE ON label=true]\n PROPERTIES\n (\n     "desired_concurrent_number"="3",\n     "max_batch_interval" = "20",\n     "max_batch_rows" = "300000",\n     "max_batch_size" = "209715200",\n     "strict_mode" = "false"\n )\n FROM KAFKA\n (\n     "kafka_broker_list" = "broker1:9092,broker2:9092,broker3:9092",\n     "kafka_topic" = "my_topic",\n     "kafka_partitions" = "0,1,2,3",\n     "kafka_offsets" = "101,0,0,200"\n );\n'})}),"\n",(0,r.jsx)(n.h3,{id:"\u6CE8\u610F\u4E8B\u9879",children:"\u6CE8\u610F\u4E8B\u9879"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u7531\u4E8E\u9664",(0,r.jsx)(n.code,{children:"Stream Load"})," \u5916\u7684\u5BFC\u5165\u64CD\u4F5C\u5728 doris \u5185\u90E8\u6709\u53EF\u80FD\u4E71\u5E8F\u6267\u884C\uFF0C\u56E0\u6B64\u5728\u4F7F\u7528",(0,r.jsx)(n.code,{children:"MERGE"})," \u65B9\u5F0F\u5BFC\u5165\u65F6\u5982\u679C\u4E0D\u662F",(0,r.jsx)(n.code,{children:"Stream Load"}),"\uFF0C\u9700\u8981\u4E0E load sequence \u4E00\u8D77\u4F7F\u7528\uFF0C\u5177\u4F53\u7684\u8BED\u6CD5\u53EF\u4EE5\u53C2\u7167",(0,r.jsx)(n.code,{children:"sequence"}),"\u5217 \u76F8\u5173\u7684\u6587\u6863\uFF1B"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"DELETE ON"})," \u6761\u4EF6\u53EA\u80FD\u4E0E MERGE \u4E00\u8D77\u4F7F\u7528\u3002"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679C\u5728\u6267\u884C\u5BFC\u5165\u4F5C\u4E1A\u524D\u6309\u4E0A\u6587\u6240\u8FF0\u5F00\u542F\u4E86",(0,r.jsx)(n.code,{children:"SET show_hidden_columns = true"}),"\u7684 session variable \u6765\u67E5\u770B\u8868\u662F\u5426\u652F\u6301\u6279\u91CF\u5220\u9664\uFF0C\u6309\u793A\u4F8B\u5B8C\u6210 DELETE/MERGE \u7684\u5BFC\u5165\u4F5C\u4E1A\u540E\uFF0C\u5982\u679C\u5728\u540C\u4E00\u4E2A session \u4E2D\u6267\u884C",(0,r.jsx)(n.code,{children:"select count(*) from xxx"}),"\u7B49\u8BED\u53E5\u65F6\uFF0C\u9700\u8981\u6267\u884C",(0,r.jsx)(n.code,{children:"SET show_hidden_columns = false"}),"\u6216\u8005\u5F00\u542F\u65B0\u7684 session, \u907F\u514D\u67E5\u8BE2\u7ED3\u679C\u4E2D\u5305\u542B\u90A3\u4E9B\u88AB\u6279\u91CF\u5220\u9664\u7684\u8BB0\u5F55\uFF0C\u5BFC\u81F4\u7ED3\u679C\u4E0E\u9884\u671F\u4E0D\u7B26\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsx)(n.h3,{id:"\u67E5\u770B\u662F\u5426\u542F\u7528\u6279\u91CF\u5220\u9664\u652F\u6301",children:"\u67E5\u770B\u662F\u5426\u542F\u7528\u6279\u91CF\u5220\u9664\u652F\u6301"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> CREATE TABLE IF NOT EXISTS table1 (\n    ->     siteid INT,\n    ->     citycode INT,\n    ->     username VARCHAR(64),\n    ->     pv BIGINT\n    -> ) UNIQUE KEY (siteid, citycode, username)\n    -> DISTRIBUTED BY HASH(siteid) BUCKETS 10\n    -> PROPERTIES (\n    ->     "replication_num" = "3"\n    -> );\nQuery OK, 0 rows affected (0.34 sec)\n\nmysql> SET show_hidden_columns=true;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> DESC table1;\n+-----------------------+-------------+------+-------+---------+-------+\n| Field                 | Type        | Null | Key   | Default | Extra |\n+-----------------------+-------------+------+-------+---------+-------+\n| siteid                | int         | Yes  | true  | NULL    |       |\n| citycode              | int         | Yes  | true  | NULL    |       |\n| username              | varchar(64) | Yes  | true  | NULL    |       |\n| pv                    | bigint      | Yes  | false | NULL    | NONE  |\n| __DORIS_DELETE_SIGN__ | tinyint     | No   | false | 0       | NONE  |\n| __DORIS_VERSION_COL__ | bigint      | No   | false | 0       | NONE  |\n+-----------------------+-------------+------+-------+---------+-------+\n6 rows in set (0.01 sec)\n'})}),"\n",(0,r.jsx)(n.h3,{id:"stream-load-\u4F7F\u7528\u793A\u4F8B",children:"Stream Load \u4F7F\u7528\u793A\u4F8B"}),"\n",(0,r.jsxs)(n.p,{children:["\u8BF7\u67E5\u9605",(0,r.jsx)(n.a,{href:"/zh-CN/docs/3.0/data-operate/import/import-way/stream-load-manual",children:"Stream Load\u4F7F\u7528\u624B\u518C"}),"\u4E2D\u201C\u6307\u5B9A merge_type \u8FDB\u884C Delete \u64CD\u4F5C\u201D\u548C\u201C\u6307\u5B9A merge_type \u8FDB\u884C Merge \u64CD\u4F5C\u201D\u7AE0\u8282\u7684\u5185\u5BB9\u3002"]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return i},a:function(){return t}});var s=l(667294);let r={},d=s.createContext(r);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);