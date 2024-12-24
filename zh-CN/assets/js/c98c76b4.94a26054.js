"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["62246"],{834639:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>m,assets:()=>s,toc:()=>d,frontMatter:()=>l});var a=JSON.parse('{"id":"table-design/index/ngram-bloomfilter-index","title":"N-Gram \u7D22\u5F15","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/table-design/index/ngram-bloomfilter-index.md","sourceDirName":"table-design/index","slug":"/table-design/index/ngram-bloomfilter-index","permalink":"/zh-CN/docs/3.0/table-design/index/ngram-bloomfilter-index","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"N-Gram \u7D22\u5F15","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BloomFilter \u7D22\u5F15","permalink":"/zh-CN/docs/3.0/table-design/index/bloomfilter"},"next":{"title":"SSD \u548C HDD \u5C42\u7EA7\u5B58\u50A8","permalink":"/zh-CN/docs/3.0/table-design/tiered-storage/diff-disk-medium-migration"}}'),i=r("785893"),t=r("250065");let l={title:"N-Gram \u7D22\u5F15",language:"zh-CN"},o=void 0,s={},d=[{value:"\u7D22\u5F15\u539F\u7406",id:"\u7D22\u5F15\u539F\u7406",level:2},{value:"\u4F7F\u7528\u573A\u666F",id:"\u4F7F\u7528\u573A\u666F",level:2},{value:"\u4F7F\u7528\u8BED\u6CD5",id:"\u4F7F\u7528\u8BED\u6CD5",level:2},{value:"\u521B\u5EFA NGram BloomFilter \u7D22\u5F15",id:"\u521B\u5EFA-ngram-bloomfilter-\u7D22\u5F15",level:3},{value:"\u67E5\u770B NGram BloomFilter \u7D22\u5F15",id:"\u67E5\u770B-ngram-bloomfilter-\u7D22\u5F15",level:3},{value:"\u5220\u9664 NGram BloomFilter \u7D22\u5F15",id:"\u5220\u9664-ngram-bloomfilter-\u7D22\u5F15",level:3},{value:"\u4FEE\u6539 NGram BloomFilter \u7D22\u5F15",id:"\u4FEE\u6539-ngram-bloomfilter-\u7D22\u5F15",level:3},{value:"\u4F7F\u7528\u793A\u4F8B",id:"\u4F7F\u7528\u793A\u4F8B",level:2},{value:"\u5EFA\u8868",id:"\u5EFA\u8868",level:3},{value:"\u5BFC\u5165\u6570\u636E",id:"\u5BFC\u5165\u6570\u636E",level:3},{value:"\u67E5\u8BE2",id:"\u67E5\u8BE2",level:3}];function c(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u7D22\u5F15\u539F\u7406",children:"\u7D22\u5F15\u539F\u7406"}),"\n",(0,i.jsx)(n.p,{children:"NGram BloomFilter \u7D22\u5F15\u548C BloomFilter \u7D22\u5F15\u7C7B\u4F3C\uFF0C\u4E5F\u662F\u57FA\u4E8E BloomFilter \u7684\u8DF3\u6570\u7D22\u5F15\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4E0E BloomFilter \u7D22\u5F15\u4E0D\u540C\u7684\u662F\uFF0CNGram BloomFilter \u7D22\u5F15\u7528\u4E8E\u52A0\u901F\u6587\u672C LIKE \u67E5\u8BE2\uFF0C\u5B83\u5B58\u5165 BloomFilter \u7684\u4E0D\u662F\u539F\u59CB\u6587\u672C\u7684\u503C\uFF0C\u800C\u662F\u5BF9\u6587\u672C\u8FDB\u884C NGram \u5206\u8BCD\uFF0C\u6BCF\u4E2A\u8BCD\u4F5C\u4E3A\u503C\u5B58\u5165 BloomFilter\u3002\u5BF9\u4E8E LIKE \u67E5\u8BE2\uFF0C\u5C06 LIKE '%pattern%' \u7684 pattern \u4E5F\u8FDB\u884C NGram \u5206\u8BCD\uFF0C\u5224\u65AD\u6BCF\u4E2A\u8BCD\u662F\u5426\u5728 BloomFilter \u4E2D\uFF0C\u5982\u679C\u67D0\u4E2A\u8BCD\u4E0D\u5728\u5219\u5BF9\u5E94\u7684\u6570\u636E\u5757\u5C31\u4E0D\u6EE1\u8DB3 LIKE \u6761\u4EF6\uFF0C\u53EF\u4EE5\u8DF3\u8FC7\u8FD9\u90E8\u5206\u6570\u636E\u51CF\u5C11IO\u52A0\u901F\u67E5\u8BE2\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u573A\u666F",children:"\u4F7F\u7528\u573A\u666F"}),"\n",(0,i.jsx)(n.p,{children:"NGram BloomFilter \u7D22\u5F15\u53EA\u80FD\u52A0\u901F\u5B57\u7B26\u4E32 LIKE \u67E5\u8BE2\uFF0C\u800C\u4E14 LIKE pattern \u4E2D\u7684\u8FDE\u7EED\u5B57\u7B26\u4E2A\u6570\u8981\u5927\u4E8E\u7B49\u4E8E\u7D22\u5F15\u5B9A\u4E49\u7684 NGram \u4E2D\u7684 N\u3002"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"NGram BloomFilter \u53EA\u652F\u6301\u5B57\u7B26\u4E32\u5217\uFF0C\u53EA\u80FD\u52A0\u901F LIKE \u67E5\u8BE2\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"NGram BloomFilter \u7D22\u5F15\u548C BloomFilter \u7D22\u5F15\u4E3A\u4E92\u65A5\u5173\u7CFB\uFF0C\u5373\u540C\u4E00\u4E2A\u5217\u53EA\u80FD\u8BBE\u7F6E\u4E24\u8005\u4E2D\u7684\u4E00\u4E2A\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"NGram BloomFilter \u7D22\u5F15\u7684\u6548\u679C\u5206\u6790\uFF0C\u8DDF BloomFilter \u7D22\u5F15\u7C7B\u4F3C\u3002"}),"\n"]}),"\n"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u8BED\u6CD5",children:"\u4F7F\u7528\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.h3,{id:"\u521B\u5EFA-ngram-bloomfilter-\u7D22\u5F15",children:"\u521B\u5EFA NGram BloomFilter \u7D22\u5F15"}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u5EFA\u8868\u8BED\u53E5\u4E2D COLUMN \u7684\u5B9A\u4E49\u4E4B\u540E\u662F\u7D22\u5F15\u5B9A\u4E49\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'  INDEX `idx_column_name` (`column_name`) USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="1024") COMMENT \'username ngram_bf index\'\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8BED\u6CD5\u8BF4\u660E\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["1. ",(0,i.jsx)(n.code,{children:"idx_column_name(column_name)"})," \u662F\u5FC5\u987B\u7684\uFF0C",(0,i.jsx)(n.code,{children:"column_name"})," \u662F\u5EFA\u7D22\u5F15\u7684\u5217\u540D\uFF0C\u5FC5\u987B\u662F\u524D\u9762\u5217\u5B9A\u4E49\u4E2D\u51FA\u73B0\u8FC7\u7684\uFF0C",(0,i.jsx)(n.code,{children:"idx_column_name"})," \u662F\u7D22\u5F15\u540D\u5B57\uFF0C\u5FC5\u987B\u8868\u7EA7\u522B\u552F\u4E00\uFF0C\u5EFA\u8BAE\u547D\u540D\u89C4\u8303\uFF1A\u5217\u540D\u524D\u9762\u52A0\u524D\u7F00 ",(0,i.jsx)(n.code,{children:"idx_"})]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["2. ",(0,i.jsx)(n.code,{children:"USING NGRAM_BF"})," \u662F\u5FC5\u987B\u7684\uFF0C\u7528\u4E8E\u6307\u5B9A\u7D22\u5F15\u7C7B\u578B\u662F NGram BloomFilter \u7D22\u5F15"]})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["3. ",(0,i.jsx)(n.code,{children:"PROPERTIES"})," \u662F\u53EF\u9009\u7684\uFF0C\u7528\u4E8E\u6307\u5B9A NGram BloomFilter \u7D22\u5F15\u7684\u989D\u5916\u5C5E\u6027\uFF0C\u76EE\u524D\u652F\u6301\u7684\u5C5E\u6027\u5982\u4E0B\uFF1A"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"gram_size\uFF1ANGram \u4E2D\u7684 N\uFF0C\u6307\u5B9A N \u4E2A\u8FDE\u7EED\u5B57\u7B26\u5206\u8BCD\u4E00\u4E2A\u8BCD\uFF0C\u6BD4\u5982 'an ngram example' \u5728 N = 3 \u7684\u65F6\u5019\u5206\u6210 'an ', 'n n', ' ng', 'ngr', 'gra', 'ram' 6 \u4E2A\u8BCD\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"bf_size\uFF1ABloomFilter \u7684\u5927\u5C0F\uFF0C\u5355\u4F4D\u662F Bit\u3002bf_size \u51B3\u5B9A\u6BCF\u4E2A\u6570\u636E\u5757\u5BF9\u5E94\u7684\u7D22\u5F15\u5927\u5C0F\uFF0C\u8FD9\u4E2A\u503C\u8D8A\u5927\u5360\u7528\u5B58\u50A8\u7A7A\u95F4\u8D8A\u5927\uFF0C\u540C\u65F6 Hash \u78B0\u649E\u7684\u6982\u7387\u4E5F\u8D8A\u4F4E\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:'gram_size \u5EFA\u8BAE\u53D6 LIKE \u67E5\u8BE2\u7684\u5B57\u7B26\u4E32\u6700\u5C0F\u957F\u5EA6\uFF0C\u4F46\u662F\u4E0D\u5EFA\u8BAE\u4F4E\u4E8E 2\u3002\u4E00\u822C\u5EFA\u8BAE\u8BBE\u7F6E "gram_size"="3", "bf_size"="1024"\uFF0C\u7136\u540E\u6839\u636E Query Profile \u8C03\u4F18\u3002'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["4. ",(0,i.jsx)(n.code,{children:"COMMENT"})," \u662F\u53EF\u9009\u7684\uFF0C\u7528\u4E8E\u6307\u5B9A\u7D22\u5F15\u6CE8\u91CA"]})}),"\n",(0,i.jsx)(n.h3,{id:"\u67E5\u770B-ngram-bloomfilter-\u7D22\u5F15",children:"\u67E5\u770B NGram BloomFilter \u7D22\u5F15"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE TABLE table_ngrambf;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5220\u9664-ngram-bloomfilter-\u7D22\u5F15",children:"\u5220\u9664 NGram BloomFilter \u7D22\u5F15"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE table_ngrambf DROP INDEX idx_ngrambf;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u4FEE\u6539-ngram-bloomfilter-\u7D22\u5F15",children:"\u4FEE\u6539 NGram BloomFilter \u7D22\u5F15"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE INDEX idx_column_name2(column_name2) ON table_ngrambf USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="1024") COMMENT \'username ngram_bf index\';\n\nALTER TABLE table_ngrambf ADD INDEX idx_column_name2(column_name2) USING NGRAM_BF PROPERTIES("gram_size"="3", "bf_size"="1024") COMMENT \'username ngram_bf index\';\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u793A\u4F8B",children:"\u4F7F\u7528\u793A\u4F8B"}),"\n",(0,i.jsx)(n.p,{children:"\u4EE5\u4E9A\u9A6C\u900A\u4EA7\u54C1\u7684\u7528\u6237\u8BC4\u8BBA\u4FE1\u606F\u7684\u6570\u636E\u96C6 amazon_reviews \u4E3A\u4F8B\u5C55\u793A NGram BloomFilter \u7D22\u5F15\u7684\u4F7F\u7528\u548C\u6548\u679C\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u5EFA\u8868",children:"\u5EFA\u8868"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `amazon_reviews` (  \n  `review_date` int(11) NULL,  \n  `marketplace` varchar(20) NULL,  \n  `customer_id` bigint(20) NULL,  \n  `review_id` varchar(40) NULL,\n  `product_id` varchar(10) NULL,\n  `product_parent` bigint(20) NULL,\n  `product_title` varchar(500) NULL,\n  `product_category` varchar(50) NULL,\n  `star_rating` smallint(6) NULL,\n  `helpful_votes` int(11) NULL,\n  `total_votes` int(11) NULL,\n  `vine` boolean NULL,\n  `verified_purchase` boolean NULL,\n  `review_headline` varchar(500) NULL,\n  `review_body` string NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`review_date`)\nCOMMENT \'OLAP\'\nDISTRIBUTED BY HASH(`review_date`) BUCKETS 16\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1",\n"compression" = "ZSTD"\n);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"\u5BFC\u5165\u6570\u636E",children:"\u5BFC\u5165\u6570\u636E"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7528 wget \u6216\u8005\u5176\u4ED6\u5DE5\u5177\u4ECE\u4E0B\u9762\u7684\u5730\u5740\u4E0B\u8F7D\u6570\u636E\u96C6"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2010.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2011.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2012.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2013.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2014.snappy.parquet\nhttps://datasets-documentation.s3.eu-west-3.amazonaws.com/amazon_reviews/amazon_reviews_2015.snappy.parquet\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7528 stream load \u5BFC\u5165\u6570\u636E"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'curl --location-trusted -u root: -T amazon_reviews_2010.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2011.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2012.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2013.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2014.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\ncurl --location-trusted -u root: -T amazon_reviews_2015.snappy.parquet -H "format:parquet" http://127.0.0.1:8030/api/${DB}/amazon_reviews/_stream_load\n'})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsx)(n.p,{children:"\u4E0A\u9762\u7684\u6587\u4EF6\u53EF\u80FD\u8D85\u8FC7 10 GB\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u8C03\u6574 be.conf \u7684 streaming_load_max_mb \u9632\u6B62\u8D85\u8FC7 stream load \u6587\u4EF6\u4E0A\u4F20\u5927\u5C0F\u7684\u9650\u5236\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u65B9\u5F0F\u52A8\u6001\u8C03\u6574"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X POST http://{be_ip}:{be_http_port}/api/update_config?streaming_load_max_mb=32768\n"})}),(0,i.jsx)(n.p,{children:"\u9700\u8981\u6BCF\u53F0 be \u90FD\u6267\u884C\u4E0A\u8FF0\u547D\u4EE4\u3002"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"SQL \u8FD0\u884C count() \u786E\u8BA4\u5BFC\u5165\u6570\u636E\u6210\u529F"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> SELECT COUNT() FROM amazon_reviews;\n+-----------+\n| count(*)  |\n+-----------+\n| 135589433 |\n+-----------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"\u67E5\u8BE2",children:"\u67E5\u8BE2"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u9996\u5148\u5728\u6CA1\u6709\u7D22\u5F15\u7684\u65F6\u5019\u8FD0\u884C\u67E5\u8BE2\uFF0CWHERE \u6761\u4EF6\u4E2D\u6709 LIKE\uFF0C\u8017\u65F67.60s"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SELECT\n    product_id,\n    any(product_title),\n    AVG(star_rating) AS rating,\n    COUNT() AS count\nFROM\n    amazon_reviews\nWHERE\n    review_body LIKE '%is super awesome%'\nGROUP BY\n    product_id\nORDER BY\n    count DESC,\n    rating DESC,\n    product_id\nLIMIT 5;\n\n\n+------------+------------------------------------------+--------------------+-------+\n| product_id | any_value(product_title)                 | rating             | count |\n+------------+------------------------------------------+--------------------+-------+\n| B00992CF6W | Minecraft                                | 4.8235294117647056 |    17 |\n| B009UX2YAC | Subway Surfers                           | 4.7777777777777777 |     9 |\n| B00DJFIMW6 | Minion Rush: Despicable Me Official Game |              4.875 |     8 |\n| B0086700CM | Temple Run                               |                  5 |     6 |\n| B00KWVZ750 | Angry Birds Epic RPG                     |                  5 |     6 |\n+------------+------------------------------------------+--------------------+-------+\n5 rows in set (7.60 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u7136\u540E\u6DFB\u52A0 NGram BloomFilter \u7D22\u5F15\uFF0C\u518D\u6B21\u8FD0\u884C\u76F8\u540C\u7684\u67E5\u8BE2\u8017\u65F60.93s\uFF0C\u6027\u80FD\u63D0\u5347\u4E868\u500D"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'ALTER TABLE amazon_reviews ADD INDEX review_body_ngram_idx(review_body) USING NGRAM_BF PROPERTIES("gram_size"="10", "bf_size"="10240");\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"+------------+------------------------------------------+--------------------+-------+\n| product_id | any_value(product_title)                 | rating             | count |\n+------------+------------------------------------------+--------------------+-------+\n| B00992CF6W | Minecraft                                | 4.8235294117647056 |    17 |\n| B009UX2YAC | Subway Surfers                           | 4.7777777777777777 |     9 |\n| B00DJFIMW6 | Minion Rush: Despicable Me Official Game |              4.875 |     8 |\n| B0086700CM | Temple Run                               |                  5 |     6 |\n| B00KWVZ750 | Angry Birds Epic RPG                     |                  5 |     6 |\n+------------+------------------------------------------+--------------------+-------+\n5 rows in set (0.93 sec)\n"})})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return l}});var a=r(667294);let i={},t=a.createContext(i);function l(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);