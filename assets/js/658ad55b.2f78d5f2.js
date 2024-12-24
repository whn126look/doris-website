"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["465269"],{123082:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-data-types/data-type-overview","title":"Overview","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-data-types/data-type-overview.md","sourceDirName":"sql-manual/sql-data-types","slug":"/sql-manual/sql-data-types/data-type-overview","permalink":"/docs/3.0/sql-manual/sql-data-types/data-type-overview","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Overview","language":"en"},"sidebar":"docs","previous":{"title":"BI FAQ","permalink":"/docs/3.0/faq/bi-faq"},"next":{"title":"BOOLEAN","permalink":"/docs/3.0/sql-manual/sql-data-types/numeric/BOOLEAN"}}'),i=n("785893"),r=n("250065");let a={title:"Overview",language:"en"},l=void 0,d={},c=[{value:"Numeric Types",id:"numeric-types",level:2},{value:"BOOLEAN",id:"boolean",level:3},{value:"Integer",id:"integer",level:3},{value:"Floating-point",id:"floating-point",level:3},{value:"Fixed-point",id:"fixed-point",level:3},{value:"Date Types",id:"date-types",level:2},{value:"String Types",id:"string-types",level:2},{value:"Semi-Structured Types",id:"semi-structured-types",level:2},{value:"Aggregation Types",id:"aggregation-types",level:2},{value:"IP Types",id:"ip-types",level:2}];function o(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"numeric-types",children:"Numeric Types"}),"\n",(0,i.jsx)(s.p,{children:"Doris supports the following numeric data types:"}),"\n",(0,i.jsx)(s.h3,{id:"boolean",children:"BOOLEAN"}),"\n",(0,i.jsx)(s.p,{children:"There are two possible values: 0 represents false, and 1 represents true."}),"\n",(0,i.jsxs)(s.p,{children:["For more info, please refer ",(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/numeric/BOOLEAN",children:"BOOLEAN"}),"\u3002"]}),"\n",(0,i.jsx)(s.h3,{id:"integer",children:"Integer"}),"\n",(0,i.jsx)(s.p,{children:"All are signed integers. The differences among the INT types are the number of bytes occupied and the range of values they can represent:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/numeric/TINYINT",children:"TINYINT"})}),": 1 byte, [-128, 127]"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/numeric/SMALLINT",children:"SMALLINT"})}),": 2 bytes, [-32768, 32767]"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/numeric/INT",children:"INT"})}),": 4 bytes, [-2147483648, 2147483647]"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/numeric/BIGINT",children:"BIGINT"})}),": 8 bytes, [-9223372036854775808, 9223372036854775807]"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/numeric/LARGEINT",children:"LARGEINT"})}),": 16 bytes, [-2^127, 2^127 - 1]"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"floating-point",children:"Floating-point"}),"\n",(0,i.jsxs)(s.p,{children:["Including imprecise floating-point types ",(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/numeric/FLOAT",children:"FLOAT"})," and ",(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/numeric/DOUBLE",children:"DOUBLE"}),", corresponding to the ",(0,i.jsx)(s.code,{children:"float"})," and ",(0,i.jsx)(s.code,{children:"double"})," in common programming languages"]}),"\n",(0,i.jsx)(s.h3,{id:"fixed-point",children:"Fixed-point"}),"\n",(0,i.jsxs)(s.p,{children:["The precise fixed-point type ",(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/numeric/DECIMAL",children:"DECIMAL"}),", used in financial and other cases that require strict accuracy."]}),"\n",(0,i.jsx)(s.h2,{id:"date-types",children:"Date Types"}),"\n",(0,i.jsxs)(s.p,{children:["Date types include DATE, TIME and DATETIME, DATE type only stores the date accurate to the day, DATETIME type stores the date and time, which can be accurate to microseconds. TIME type only stores the time, and ",(0,i.jsx)(s.strong,{children:"does not support the construction of the table storage for the time being, can only be used in the query process"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Do calculation for datetime types or converting them to numeric types, please use functions like ",(0,i.jsx)(s.a,{href:"../../sql-functions/date-time-functions/time-to-sec",children:"TIME_TO_SEC"}),", ",(0,i.jsx)(s.a,{href:"../../sql-functions/date-time-functions/datediff",children:"DATE_DIFF"}),", ",(0,i.jsx)(s.a,{href:"../../sql-functions/date-time-functions/unix-timestamp",children:"UNIX_TIMESTAMP"})," . The result of directly converting them as numeric types as not guaranteed."]}),"\n",(0,i.jsxs)(s.p,{children:["For more information refer to ",(0,i.jsx)(s.a,{href:"../sql-data-types/date-time/DATE",children:"DATE"}),", ",(0,i.jsx)(s.a,{href:"../sql-data-types/date-time/TIME",children:"TIME"})," and ",(0,i.jsx)(s.a,{href:"../sql-data-types/date-time/DATETIME",children:"DATETIME"})," documents."]}),"\n",(0,i.jsx)(s.h2,{id:"string-types",children:"String Types"}),"\n",(0,i.jsx)(s.p,{children:"Doris supports both fixed-length and variable-length strings, including:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"../sql-data-types/string/CHAR.md",children:"CHAR(M)"})}),": A fixed-length string, where M is the byte length. The range for M is [1, 255]."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"../sql-data-types/string/VARCHAR.md",children:"VARCHAR(M)"})}),": A variable-length string, where M is the maximum length. The range for M is [1, 65533]."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"../sql-data-types/string/STRING.md",children:"STRING"})}),": A variable-length string with a default maximum length of 1,048,576 bytes (1 MB). This maximum length can be increased up to 2,147,483,643 bytes (2 GB) by configuring the ",(0,i.jsx)(s.code,{children:"string_type_length_soft_limit_bytes"}),"setting."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"semi-structured-types",children:"Semi-Structured Types"}),"\n",(0,i.jsx)(s.p,{children:"Doris supports different semi-structured data types for JSON data processing, each tailored to different use cases."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/semi-structured/ARRAY",children:"ARRAY"})})," / ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/semi-structured/MAP",children:"MAP"})})," / ",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"../semi-structured/STRUCT.md",children:"STRUCT"})}),": They support nested data and fixed schema, making them well-suited for analytical workloads such as user behavior and profile analysis, as well as querying data lake formats like Parquet. Due to the fixed schema, there is no overhead for dynamic schema inference, resulting in high write and analysis performance."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/semi-structured/VARIANT",children:"VARIANT"})}),": It supports nested data and flexible schema. It is well-suited for analytical workloads such as log, trace, and IoT data analysis. It can accommodate any legal JSON data, which will be automatically expanded into sub-columns in a columnar storage format. This approach enables high compression rate in storage and high performance in data aggregation, filtering, and sorting."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/semi-structured/JSON",children:"JSON"})}),": It supports nested data and flexible schema. It is optimized for high-concurrency point query use cases. The flexible schema allows for ingesting any legal JSON data, which will be stored in a binary format. Extracting fields from this binary JSON format is more than 2X faster than using regular JSON strings."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"aggregation-types",children:"Aggregation Types"}),"\n",(0,i.jsx)(s.p,{children:"The aggregation data types store aggregation results or intermediate results during aggregation. They are used for accelerating aggregation-heavy queries."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/aggregate/BITMAP",children:"BITMAP"})}),": It is used for exact deduplication, such as in (UV) statistics and audience segmentation. It works in conjunction with BITMAP functions like ",(0,i.jsx)(s.code,{children:"bitmap_union"}),", ",(0,i.jsx)(s.code,{children:"bitmap_union_count"}),", ",(0,i.jsx)(s.code,{children:"bitmap_hash"}),", and ",(0,i.jsx)(s.code,{children:"bitmap_hash64"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/aggregate/HLL",children:"HLL"})}),": It is used for approximate deduplication and provides better performance than ",(0,i.jsx)(s.code,{children:"COUNT DISTINCT"}),". It works in conjunction with HLL functions like ",(0,i.jsx)(s.code,{children:"hll_union_agg"}),", ",(0,i.jsx)(s.code,{children:"hll_raw_agg"}),", ",(0,i.jsx)(s.code,{children:"hll_cardinality"}),", and ",(0,i.jsx)(s.code,{children:"hll_hash"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"../sql-data-types/aggregate/QUANTILE_STATE.md",children:"QUANTILE_STATE"})}),": It is used for approximate percentile calculations and offers better performance than the ",(0,i.jsx)(s.code,{children:"PERCENTILE"})," function. It works with functions like ",(0,i.jsx)(s.code,{children:"QUANTILE_PERCENT"}),", ",(0,i.jsx)(s.code,{children:"QUANTILE_UNION"}),", and ",(0,i.jsx)(s.code,{children:"TO_QUANTILE_STATE"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"../sql-data-types/aggregate/AGG_STATE.md",children:"AGG_STATE"})}),": It is used to accelerate aggregations, utilized in combination with aggregation function combinators like state/merge/union."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"ip-types",children:"IP Types"}),"\n",(0,i.jsx)(s.p,{children:"IP data types store IP addresses in a binary format, which is faster and more space-efficient for querying compared to storing them as strings. There are two supported IP data types:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/ip/IPV4",children:"IPv4"})}),": It stores IPv4 addresses as a 4-byte binary value. It is used in conjunction with the ",(0,i.jsx)(s.code,{children:"ipv4_*"})," family of functions."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.a,{href:"/docs/3.0/sql-manual/sql-data-types/ip/IPV6",children:"IPv6"})}),": It stores IPv6 addresses as a 16-byte binary value. It is used in conjunction with the ",(0,i.jsx)(s.code,{children:"ipv6_*"})," family of functions."]}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return a}});var t=n(667294);let i={},r=t.createContext(i);function a(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);