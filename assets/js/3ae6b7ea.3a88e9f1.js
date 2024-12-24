"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["827624"],{39660:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD","title":"BROKER-LOAD","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD.md","sourceDirName":"sql-manual/sql-reference/Data-Manipulation-Statements/Load","slug":"/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD","permalink":"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/BROKER-LOAD","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"BROKER-LOAD","language":"en"},"sidebar":"docs","previous":{"title":"PAUSE-SYNC-JOB","permalink":"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/PAUSE-SYNC-JOB"},"next":{"title":"CREATE-SYNC-JOB","permalink":"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CREATE-SYNC-JOB"}}'),i=t("785893"),r=t("250065");let a={title:"BROKER-LOAD",language:"en"},o=void 0,l={},d=[{value:"BROKER-LOAD",id:"broker-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function c(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",version:"version",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"broker-load",children:"BROKER-LOAD"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"BROKER LOAD"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This command is mainly used to import data on remote storage (such as S3, HDFS) through the Broker service process."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL load_label\n(\ndata_desc1[, data_desc2, ...]\n)\nWITH BROKER broker_name\n[broker_properties]\n[load_properties]\n[COMMENT "comment"];\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"load_label"})}),"\n",(0,i.jsx)(n.p,{children:"Each import needs to specify a unique Label. You can use this label to view the progress of the job later."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"[database.]label_name"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"data_desc1"})}),"\n",(0,i.jsx)(n.p,{children:"Used to describe a set of files that need to be imported."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'[MERGE|APPEND|DELETE]\nDATA INFILE\n(\n"file_path1"[, file_path2, ...]\n)\n[NEGATIVE]\nINTO TABLE `table_name`\n[PARTITION (p1, p2, ...)]\n[COLUMNS TERMINATED BY "column_separator"]\n[FORMAT AS "file_type"]\n[(column_list)]\n[COLUMNS FROM PATH AS (c1, c2, ...)]\n[SET (column_mapping)]\n[PRECEDING FILTER predicate]\n[WHERE predicate]\n[DELETE ON expr]\n[ORDER BY source_sequence]\n[PROPERTIES ("key1"="value1", ...)]\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"[MERGE|APPEND|DELETE]"})}),"\n",(0,i.jsxs)(n.p,{children:["Data merge type. The default is APPEND, indicating that this import is a normal append write operation. The MERGE and DELETE types are only available for Unique Key model tables. The MERGE type needs to be used with the ",(0,i.jsx)(n.code,{children:"[DELETE ON]"})," statement to mark the Delete Flag column. The DELETE type indicates that all data imported this time are deleted data."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DATA INFILE"})}),"\n",(0,i.jsx)(n.p,{children:"Specify the file path to be imported. Can be multiple. Wildcards can be used. The path must eventually match to a file, if it only matches a directory the import will fail."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"NEGATIVE"})}),"\n",(0,i.jsx)(n.p,{children:'This keyword is used to indicate that this import is a batch of "negative" imports. This method is only for aggregate data tables with integer SUM aggregate type. This method will reverse the integer value corresponding to the SUM aggregate column in the imported data. Mainly used to offset previously imported wrong data.'}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"PARTITION(p1, p2, ...)"})}),"\n",(0,i.jsx)(n.p,{children:"You can specify to import only certain partitions of the table. Data that is no longer in the partition range will be ignored."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"COLUMNS TERMINATED BY"})}),"\n",(0,i.jsx)(n.p,{children:"Specifies the column separator. Only valid in CSV format. Only single-byte delimiters can be specified."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"FORMAT AS"})}),"\n",(0,i.jsx)(n.p,{children:"Specifies the file type, CSV, PARQUET and ORC formats are supported. Default is CSV."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"column list"})}),"\n",(0,i.jsxs)(n.p,{children:["Used to specify the column order in the original file. For a detailed introduction to this part, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/1.2/data-operate/import/import-scenes/load-data-convert",children:"Column Mapping, Conversion and Filtering"})," document."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"(k1, k2, tmpk1)"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"COLUMNS FROM PATH AS"})}),"\n",(0,i.jsx)(n.p,{children:"Specifies the columns to extract from the import file path."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"SET (column_mapping)"})}),"\n",(0,i.jsx)(n.p,{children:"Specifies the conversion function for the column."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"PRECEDING FILTER predicate"})}),"\n",(0,i.jsxs)(n.p,{children:["Pre-filter conditions. The data is first concatenated into raw data rows in order according to ",(0,i.jsx)(n.code,{children:"column list"})," and ",(0,i.jsx)(n.code,{children:"COLUMNS FROM PATH AS"}),". Then filter according to the pre-filter conditions. For a detailed introduction to this part, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/1.2/data-operate/import/import-scenes/load-data-convert",children:"Column Mapping, Conversion and Filtering"})," document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"WHERE predicate"})}),"\n",(0,i.jsxs)(n.p,{children:["Filter imported data based on conditions. For a detailed introduction to this part, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/1.2/data-operate/import/import-scenes/load-data-convert",children:"Column Mapping, Conversion and Filtering"})," document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"DELETE ON expr"})}),"\n",(0,i.jsx)(n.p,{children:"It needs to be used with the MEREGE import mode, only for the table of the Unique Key model. Used to specify the columns and calculated relationships in the imported data that represent the Delete Flag."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"ORDER BY"})}),"\n",(0,i.jsx)(n.p,{children:"Tables only for the Unique Key model. Used to specify the column in the imported data that represents the Sequence Col. Mainly used to ensure data order when importing."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'PROPERTIES ("key1"="value1", ...)'})}),"\n",(0,i.jsxs)(n.p,{children:["Specify some parameters of the imported format. For example, if the imported file is in ",(0,i.jsx)(n.code,{children:"json"})," format, you can specify parameters such as ",(0,i.jsx)(n.code,{children:"json_root"}),", ",(0,i.jsx)(n.code,{children:"jsonpaths"}),", ",(0,i.jsx)(n.code,{children:"fuzzy parse"}),", etc."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"WITH BROKER broker_name"})}),"\n",(0,i.jsxs)(n.p,{children:["Specify the Broker service name to be used. In the public cloud Doris. Broker service name is ",(0,i.jsx)(n.code,{children:"bos"})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"broker_properties"})}),"\n",(0,i.jsxs)(n.p,{children:["Specifies the information required by the broker. This information is usually used by the broker to be able to access remote storage systems. Such as BOS or HDFS. See the ",(0,i.jsx)(n.a,{href:"/docs/1.2/advanced/broker",children:"Broker"})," documentation for specific information."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:'(\n    "key1" = "val1",\n    "key2" = "val2",\n    ...\n)\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"load_properties"})}),"\n",(0,i.jsx)(n.p,{children:"Specifies import-related parameters. The following parameters are currently supported:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"timeout"})}),"\n",(0,i.jsx)(n.p,{children:"Import timeout. The default is 4 hours. in seconds."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"max_filter_ratio"})}),"\n",(0,i.jsx)(n.p,{children:"The maximum tolerable proportion of data that can be filtered (for reasons such as data irregularity). Zero tolerance by default. The value range is 0 to 1."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"exec_mem_limit"})}),"\n",(0,i.jsx)(n.p,{children:"Load memory limit. Default is 2GB. The unit is bytes."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"strict_mode"})}),"\n",(0,i.jsx)(n.p,{children:"Whether to impose strict restrictions on data. Defaults to false."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"timezone"})}),"\n",(0,i.jsxs)(n.p,{children:["Specify the time zone for some functions that are affected by time zones, such as ",(0,i.jsx)(n.code,{children:"strftime/alignment_timestamp/from_unixtime"}),", etc. Please refer to the ",(0,i.jsx)(n.a,{href:"/docs/1.2/advanced/time-zone",children:"timezone"}),' documentation for details. If not specified, the "Asia/Shanghai" timezone is used']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"load_parallelism"})}),"\n",(0,i.jsx)(n.p,{children:"It allows the user to set the parallelism of the load execution plan\non a single node when the broker load is submitted, default value is 1."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"send_batch_parallelism"})}),"\n",(0,i.jsxs)(n.p,{children:["Used to set the default parallelism for sending batch, if the value for parallelism exceed ",(0,i.jsx)(n.code,{children:"max_send_batch_parallelism_per_job"})," in BE config, then the coordinator BE will use the value of ",(0,i.jsx)(n.code,{children:"max_send_batch_parallelism_per_job"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"load_to_single_tablet"})}),"\n",(0,i.jsx)(n.p,{children:"Boolean type, True means that one task can only load data to one tablet in the corresponding partition at a time. The default value is false. The number of tasks for the job depends on the overall concurrency. This parameter can only be set when loading data into the OLAP table with random partition."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.version,{since:"1.2.3",type:"inline",children:" comment "}),"\nSpecify the comment for the import job. The comment can be viewed in the ",(0,i.jsx)(n.code,{children:"show load"})," statement."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Import a batch of data from HDFS"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label1\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file.txt")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY ","\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Import the file ",(0,i.jsx)(n.code,{children:"file.txt"}),", separated by commas, into the table ",(0,i.jsx)(n.code,{children:"my_table"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Import data from HDFS, using wildcards to match two batches of files in two batches. into two tables separately."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label2\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-10*")\n    INTO TABLE `my_table1`\n    PARTITION (p1)\n    COLUMNS TERMINATED BY ","\n    (k1, tmp_k2, tmp_k3)\n    SET (\n        k2 = tmp_k2 + 1,\n        k3 = tmp_k3 + 1\n    )\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file-20*")\n    INTO TABLE `my_table2`\n    COLUMNS TERMINATED BY ","\n    (k1, k2, k3)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Import two batches of files ",(0,i.jsx)(n.code,{children:"file-10*"})," and ",(0,i.jsx)(n.code,{children:"file-20*"})," using wildcard matching. Imported into two tables ",(0,i.jsx)(n.code,{children:"my_table1"})," and ",(0,i.jsx)(n.code,{children:"my_table2"})," respectively. Where ",(0,i.jsx)(n.code,{children:"my_table1"})," specifies to import into partition ",(0,i.jsx)(n.code,{children:"p1"}),", and will import the values of the second and third columns in the source file +1."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Import a batch of data from HDFS."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label3\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/user/doris/data/*/*")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY "\\\\x01"\n)\nWITH BROKER my_hdfs_broker\n(\n    "username" = "",\n    "password" = "",\n    "dfs.nameservices" = "my_ha",\n    "dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "dfs.client.failover.proxy.provider.my_ha" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Specify the delimiter as Hive's default delimiter ",(0,i.jsx)(n.code,{children:"\\\\x01"}),", and use the wildcard * to specify all files in all directories under the ",(0,i.jsx)(n.code,{children:"data"})," directory. Use simple authentication while configuring namenode HA."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Import data in Parquet format and specify FORMAT as parquet. The default is to judge by the file suffix"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label4\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/file")\n    INTO TABLE `my_table`\n    FORMAT AS "parquet"\n    (k1, k2, k3)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Import the data and extract the partition field in the file path"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label10\n(\n    DATA INFILE("hdfs://hdfs_host:hdfs_port/input/city=beijing/*/*")\n    INTO TABLE `my_table`\n    FORMAT AS "csv"\n    (k1, k2, k3)\n    COLUMNS FROM PATH AS (city, utc_date)\n)\nWITH BROKER hdfs\n(\n    "username"="hdfs_user",\n    "password"="hdfs_password"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The columns in the ",(0,i.jsx)(n.code,{children:"my_table"})," table are ",(0,i.jsx)(n.code,{children:"k1, k2, k3, city, utc_date"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"hdfs://hdfs_host:hdfs_port/user/doris/data/input/dir/city=beijing"})," directory includes the following files:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"hdfs://hdfs_host:hdfs_port/input/city=beijing/utc_date=2020-10-01/0000.csv\nhdfs://hdfs_host:hdfs_port/input/city=beijing/utc_date=2020-10-02/0000.csv\nhdfs://hdfs_host:hdfs_port/input/city=tianji/utc_date=2020-10-03/0000.csv\nhdfs://hdfs_host:hdfs_port/input/city=tianji/utc_date=2020-10-04/0000.csv\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The file only contains three columns of ",(0,i.jsx)(n.code,{children:"k1, k2, k3"}),", and the two columns of ",(0,i.jsx)(n.code,{children:"city, utc_date"})," will be extracted from the file path."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Filter the data to be imported."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label6\n(\n    DATA INFILE("hdfs://host:port/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, k3)\n    SET (\n        k2 = k2 + 1\n    )\n    PRECEDING FILTER k1 = 1\n    WHERE k1 > k2\n)\nWITH BROKER hdfs\n(\n    "username"="user",\n    "password"="pass"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Only in the original data, k1 = 1, and after transformation, rows with k1 > k2 will be imported."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Import data, extract the time partition field in the file path, and the time contains %3A (in the hdfs path, ':' is not allowed, all ':' will be replaced by %3A)"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label7\n(\n    DATA INFILE("hdfs://host:port/user/data/*/test.txt")\n    INTO TABLE `tbl12`\n    COLUMNS TERMINATED BY ","\n    (k2,k3)\n    COLUMNS FROM PATH AS (data_time)\n    SET (\n        data_time=str_to_date(data_time, \'%Y-%m-%d %H%%3A%i%%3A%s\')\n    )\n)\nWITH BROKER hdfs\n(\n    "username"="user",\n    "password"="pass"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"There are the following files in the path:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"/user/data/data_time=2020-02-17 00%3A00%3A00/test.txt\n/user/data/data_time=2020-02-18 00%3A00%3A00/test.txt\n"})}),"\n",(0,i.jsx)(n.p,{children:"The table structure is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"data_time DATETIME,\nk2 INT,\nk3 INT\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Import a batch of data from HDFS, specify the timeout and filter ratio. Broker with clear text my_hdfs_broker. Simple authentication. And delete the columns in the original data that match the columns with v2 greater than 100 in the imported data, and other columns are imported normally"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label8\n(\n    MERGE DATA INFILE("HDFS://test:802/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, k3, v2, v1)\n    DELETE ON v2 > 100\n)\nWITH HDFS\n(\n    "hadoop.username"="user",\n    "password"="pass"\n)\nPROPERTIES\n(\n    "timeout" = "3600",\n    "max_filter_ratio" = "0.1"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Import using the MERGE method. ",(0,i.jsx)(n.code,{children:"my_table"})," must be a table with Unique Key. When the value of the v2 column in the imported data is greater than 100, the row is considered a delete row."]}),"\n",(0,i.jsx)(n.p,{children:"The import task timeout is 3600 seconds, and the error rate is allowed to be within 10%."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Specify the source_sequence column when importing to ensure the replacement order in the UNIQUE_KEYS table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label9\n(\n    DATA INFILE("HDFS://test:802/input/file")\n    INTO TABLE `my_table`\n    COLUMNS TERMINATED BY ","\n    (k1,k2,source_sequence,v1,v2)\n    ORDER BY source_sequence\n)\nWITH HDFS\n(\n    "hadoop.username"="user",\n    "password"="pass"\n)\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"my_table"})," must be an Unqiue Key model table with Sequence Col specified. The data will be ordered according to the value of the ",(0,i.jsx)(n.code,{children:"source_sequence"})," column in the source data."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Import a batch of data from HDFS, specify the file format as ",(0,i.jsx)(n.code,{children:"json"}),", and specify parameters of ",(0,i.jsx)(n.code,{children:"json_root"})," and ",(0,i.jsx)(n.code,{children:"jsonpaths"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label10\n(\n    DATA INFILE("HDFS://test:port/input/file.json")\n    INTO TABLE `my_table`\n    FORMAT AS "json"\n    PROPERTIES(\n      "json_root" = "$.item",\n      "jsonpaths" = "[$.id, $.city, $.code]"\n    )       \n)\nwith HDFS (\n"hadoop.username" = "user"\n"password" = ""\n)\nPROPERTIES\n(\n"timeout"="1200",\n"max_filter_ratio"="0.1"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"jsonpaths"})," can be use with ",(0,i.jsx)(n.code,{children:"column list"})," and ",(0,i.jsx)(n.code,{children:"SET(column_mapping)"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'LOAD LABEL example_db.label10\n(\n    DATA INFILE("HDFS://test:port/input/file.json")\n    INTO TABLE `my_table`\n    FORMAT AS "json"\n    (id, code, city)\n    SET (id = id * 10)\n    PROPERTIES(\n      "json_root" = "$.item",\n      "jsonpaths" = "[$.id, $.code, $.city]"\n    )       \n)\nwith HDFS (\n"hadoop.username" = "user"\n"password" = ""\n)\nPROPERTIES\n(\n"timeout"="1200",\n"max_filter_ratio"="0.1"\n);\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Load data in csv format from cos(Tencent Cloud Object Storage)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL example_db.label10\n(\nDATA INFILE("cosn://my_bucket/input/file.csv")\nINTO TABLE `my_table`\n(k1, k2, k3)\n)\nWITH BROKER "broker_name"\n(\n    "fs.cosn.userinfo.secretId" = "xxx",\n    "fs.cosn.userinfo.secretKey" = "xxxx",\n    "fs.cosn.bucket.endpoint_suffix" = "cos.xxxxxxxxx.myqcloud.com"\n)\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Load CSV date and trim double quotes and skip first 5 lines"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-SQL",children:'LOAD LABEL example_db.label12\n(\nDATA INFILE("cosn://my_bucket/input/file.csv")\nINTO TABLE `my_table`\n(k1, k2, k3)\nPROPERTIES("trim_double_quotes" = "true", "skip_lines" = "5")\n)\nWITH BROKER "broker_name"\n(\n    "fs.cosn.userinfo.secretId" = "xxx",\n    "fs.cosn.userinfo.secretKey" = "xxxx",\n    "fs.cosn.bucket.endpoint_suffix" = "cos.xxxxxxxxx.myqcloud.com"\n)\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"BROKER, LOAD\n"})}),"\n",(0,i.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Check the import task status"}),"\n",(0,i.jsxs)(n.p,{children:["Broker Load is an asynchronous import process. The successful execution of the statement only means that the import task is submitted successfully, and does not mean that the data import is successful. The import status needs to be viewed through the ",(0,i.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-LOAD",children:"SHOW LOAD"})," command."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Cancel the import task"}),"\n",(0,i.jsxs)(n.p,{children:["Import tasks that have been submitted but not yet completed can be canceled by the ",(0,i.jsx)(n.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Manipulation-Statements/Load/CANCEL-LOAD",children:"CANCEL LOAD"})," command. After cancellation, the written data will also be rolled back and will not take effect."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Label, import transaction, multi-table atomicity"}),"\n",(0,i.jsxs)(n.p,{children:["All import tasks in Doris are atomic. And the import of multiple tables in the same import task can also guarantee atomicity. At the same time, Doris can also use the Label mechanism to ensure that the data imported is not lost or heavy. For details, see the ",(0,i.jsx)(n.a,{href:"/docs/1.2/data-operate/import/import-scenes/load-atomicity",children:"Import Transactions and Atomicity"})," documentation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Column mapping, derived columns and filtering"}),"\n",(0,i.jsxs)(n.p,{children:["Doris can support very rich column transformation and filtering operations in import statements. Most built-in functions and UDFs are supported. For how to use this function correctly, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/1.2/data-operate/import/import-scenes/load-data-convert",children:"Column Mapping, Conversion and Filtering"})," document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Error data filtering"}),"\n",(0,i.jsxs)(n.p,{children:["Doris' import tasks can tolerate a portion of malformed data. Tolerated via ",(0,i.jsx)(n.code,{children:"max_filter_ratio"})," setting. The default is 0, which means that the entire import task will fail when there is an error data. If the user wants to ignore some problematic data rows, the secondary parameter can be set to a value between 0 and 1, and Doris will automatically skip the rows with incorrect data format."]}),"\n",(0,i.jsxs)(n.p,{children:["For some calculation methods of the tolerance rate, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/1.2/data-operate/import/import-scenes/load-data-convert",children:"Column Mapping, Conversion and Filtering"})," document."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Strict Mode"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"strict_mode"})," attribute is used to set whether the import task runs in strict mode. The format affects the results of column mapping, transformation, and filtering. For a detailed description of strict mode, see the ",(0,i.jsx)(n.a,{href:"/docs/1.2/data-operate/import/import-scenes/load-strict-mode",children:"strict mode"})," documentation."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Timeout"}),"\n",(0,i.jsx)(n.p,{children:"The default timeout for Broker Load is 4 hours. from the time the task is submitted. If it does not complete within the timeout period, the task fails."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Limits on data volume and number of tasks"}),"\n",(0,i.jsx)(n.p,{children:"Broker Load is suitable for importing data within 100GB in one import task. Although theoretically there is no upper limit on the amount of data imported in one import task. But committing an import that is too large results in a longer run time, and the cost of retrying after a failure increases."}),"\n",(0,i.jsx)(n.p,{children:"At the same time, limited by the size of the cluster, we limit the maximum amount of imported data to the number of ComputeNode nodes * 3GB. In order to ensure the rational use of system resources. If there is a large amount of data to be imported, it is recommended to divide it into multiple import tasks."}),"\n",(0,i.jsx)(n.p,{children:"Doris also limits the number of import tasks running simultaneously in the cluster, usually ranging from 3 to 10. Import jobs submitted after that are queued. The maximum queue length is 100. Subsequent submissions will be rejected outright. Note that the queue time is also calculated into the total job time. If it times out, the job is canceled. Therefore, it is recommended to reasonably control the frequency of job submission by monitoring the running status of the job."}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var s=t(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);