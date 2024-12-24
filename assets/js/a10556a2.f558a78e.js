"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["12608"],{561354:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>o});var s=JSON.parse('{"id":"ecosystem/logstash","title":"Logstash Doris Output Plugin","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/ecosystem/logstash.md","sourceDirName":"ecosystem","slug":"/ecosystem/logstash","permalink":"/docs/2.0/ecosystem/logstash","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Logstash Doris Output Plugin","language":"en"},"sidebar":"docs","previous":{"title":"Kyuubi","permalink":"/docs/2.0/ecosystem/kyuubi"},"next":{"title":"Beats Doris Output Plugin","permalink":"/docs/2.0/ecosystem/beats"}}'),i=t("785893"),a=t("250065");let o={title:"Logstash Doris Output Plugin",language:"en"},r="Logstash Doris output plugin",l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Obtaining the Plugin",id:"obtaining-the-plugin",level:3},{value:"Installing the Plugin",id:"installing-the-plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"TEXT Log Collection Example",id:"text-log-collection-example",level:3},{value:"JSON Log Collection Example",id:"json-log-collection-example",level:3}];function c(e){let n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"logstash-doris-output-plugin",children:"Logstash Doris output plugin"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Logstash is a log ETL framework (collect, preprocess, send to storage systems) that supports custom output plugins to write data into storage systems. The Logstash Doris output plugin is a plugin for outputting data to Doris."}),"\n",(0,i.jsxs)(n.p,{children:["The Logstash Doris output plugin calls the ",(0,i.jsx)(n.a,{href:"/docs/2.0/data-operate/import/stream-load-manual",children:"Doris Stream Load"})," HTTP interface to write data into Doris in real-time, offering capabilities such as multi-threaded concurrency, failure retries, custom Stream Load formats and parameters, and output write speed."]}),"\n",(0,i.jsx)(n.p,{children:"Using the Logstash Doris output plugin mainly involves three steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Install the plugin into Logstash"}),"\n",(0,i.jsx)(n.li,{children:"Configure the Doris output address and other parameters"}),"\n",(0,i.jsx)(n.li,{children:"Start Logstash to write data into Doris in real-time"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.h3,{id:"obtaining-the-plugin",children:"Obtaining the Plugin"}),"\n",(0,i.jsx)(n.p,{children:"You can download the plugin from the official website or compile it from the source code yourself."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Download from the official website"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Installation package without dependencies\n",(0,i.jsx)(n.a,{href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.gem",children:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.gem"})]}),"\n",(0,i.jsxs)(n.li,{children:["Installation package with dependencies\n",(0,i.jsx)(n.a,{href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.zip",children:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.zip"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Compile from source code"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd extension/logstash/\n\ngem build logstash-output-doris.gemspec\n"})}),"\n",(0,i.jsx)(n.h3,{id:"installing-the-plugin",children:"Installing the Plugin"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Standard Installation"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"${LOGSTASH_HOME}"})," is the installation directory of Logstash. Run the ",(0,i.jsx)(n.code,{children:"bin/logstash-plugin"})," command under it to install the plugin."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"${LOGSTASH_HOME}/bin/logstash-plugin install logstash-output-doris-1.0.0.gem\n\nValidating logstash-output-doris-1.0.0.gem\nInstalling logstash-output-doris\nInstallation successful\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The standard installation mode will automatically install the ruby modules that the plugin depends on. In cases where the network is not available, it will get stuck and cannot complete. In such cases, you can download the zip installation package with dependencies for a completely offline installation, noting that you need to use ",(0,i.jsx)(n.code,{children:"file://"})," to specify the local file system."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Offline Installation"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"${LOGSTASH_HOME}/bin/logstash-plugin install file:///tmp/logstash-output-doris-1.0.0.zip\n\nInstalling file: logstash-output-doris-1.0.0.zip\nResolving dependencies.........................\nInstall successful\n"})}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsx)(n.p,{children:"The configuration for the Logstash Doris output plugin is as follows:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Configuration"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"http_hosts"})}),(0,i.jsx)(n.td,{children:'Stream Load HTTP address, formatted as a string array, can have one or more elements, each element is host:port. For example: ["http://fe1:8030", "http://fe2:8030"]'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"user"})}),(0,i.jsx)(n.td,{children:"Doris username, this user needs to have import permissions for the corresponding Doris database and table"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"password"})}),(0,i.jsx)(n.td,{children:"Password for the Doris user"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"db"})}),(0,i.jsx)(n.td,{children:"The Doris database name to write into"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"table"})}),(0,i.jsx)(n.td,{children:"The Doris table name to write into"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"label_prefix"})}),(0,i.jsxs)(n.td,{children:["Doris Stream Load Label prefix, the final generated Label is ",(0,i.jsxs)(n.em,{children:["{label_prefix}",(0,i.jsx)(n.em,{children:"{db}"}),"{table}",(0,i.jsx)(n.em,{children:"{yyyymmdd_hhmmss}"}),"{uuid}"]}),", the default value is logstash"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"headers"})}),(0,i.jsx)(n.td,{children:'Doris Stream Load headers parameter, the syntax format is a ruby map, for example: headers => { "format" => "json", "read_json_by_line" => "true" }'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"mapping"})}),(0,i.jsx)(n.td,{children:"Mapping from Logstash fields to Doris table fields, refer to the usage examples in the subsequent sections"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"message_only"})}),(0,i.jsx)(n.td,{children:"A special form of mapping, only outputs the Logstash @message field to Doris, default is false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"max_retries"})}),(0,i.jsx)(n.td,{children:"Number of retries for Doris Stream Load requests on failure, default is -1 for infinite retries to ensure data reliability"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"log_request"})}),(0,i.jsx)(n.td,{children:"Whether to output Doris Stream Load request and response metadata in logs for troubleshooting, default is false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"log_speed_interval"})}),(0,i.jsx)(n.td,{children:"Time interval for outputting speed in logs, unit is seconds, default is 10, setting to 0 can disable this type of logging"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,i.jsx)(n.h3,{id:"text-log-collection-example",children:"TEXT Log Collection Example"}),"\n",(0,i.jsx)(n.p,{children:"This example demonstrates TEXT log collection using Doris FE logs as an example."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. Data"})}),"\n",(0,i.jsx)(n.p,{children:"FE log files are typically located at the fe/log/fe.log file under the Doris installation directory. They are typical Java program logs, including fields such as timestamp, log level, thread name, code location, and log content. Not only do they contain normal logs, but also exception logs with stacktraces, which are multiline. Log collection and storage need to combine the main log and stacktrace into a single log entry."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"2024-07-08 21:18:01,432 INFO (Statistics Job Appender|61) [StatisticsJobAppender.runAfterCatalogReady():70] Stats table not available, skip\n2024-07-08 21:18:53,710 WARN (STATS_FETCH-0|208) [StmtExecutor.executeInternalQuery():3332] Failed to run internal SQL: OriginStatement{originStmt='SELECT * FROM __internal_schema.column_statistics WHERE part_id is NULL  ORDER BY update_time DESC LIMIT 500000', idx=0}\norg.apache.doris.common.UserException: errCode = 2, detailMessage = tablet 10031 has no queryable replicas. err: replica 10032's backend 10008 does not exist or not alive\n        at org.apache.doris.planner.OlapScanNode.addScanRangeLocations(OlapScanNode.java:931) ~[doris-fe.jar:1.2-SNAPSHOT]\n        at org.apache.doris.planner.OlapScanNode.computeTabletInfo(OlapScanNode.java:1197) ~[doris-fe.jar:1.2-SNAPSHOT]\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. Table Creation"})}),"\n",(0,i.jsx)(n.p,{children:"The table structure includes fields such as the log's creation time, collection time, hostname, log file path, log type, log level, thread name, code location, and log content."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'CREATE TABLE `doris_log` (\n  `log_time` datetime NULL COMMENT \'log content time\',\n  `collect_time` datetime NULL COMMENT \'log agent collect time\',\n  `host` text NULL COMMENT \'hostname or ip\',\n  `path` text NULL COMMENT \'log file path\',\n  `type` text NULL COMMENT \'log type\',\n  `level` text NULL COMMENT \'log level\',\n  `thread` text NULL COMMENT \'log thread\',\n  `position` text NULL COMMENT \'log code position\',\n  `message` text NULL COMMENT \'log message\',\n  INDEX idx_host (`host`) USING INVERTED COMMENT \'\',\n  INDEX idx_path (`path`) USING INVERTED COMMENT \'\',\n  INDEX idx_type (`type`) USING INVERTED COMMENT \'\',\n  INDEX idx_level (`level`) USING INVERTED COMMENT \'\',\n  INDEX idx_thread (`thread`) USING INVERTED COMMENT \'\',\n  INDEX idx_position (`position`) USING INVERTED COMMENT \'\',\n  INDEX idx_message (`message`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true") COMMENT \'\'\n) ENGINE=OLAP\nDUPLICATE KEY(`log_time`)\nCOMMENT \'OLAP\'\nPARTITION BY RANGE(`log_time`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-7",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.create_history_partition" = "true",\n"compaction_policy" = "time_series"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. Logstash Configuration"})}),"\n",(0,i.jsx)(n.p,{children:"Logstash mainly has two types of configuration files: one for the entire Logstash system and another for a specific log collection."}),"\n",(0,i.jsx)(n.p,{children:"The configuration file for the entire Logstash system is usually located at config/logstash.yml. To improve performance when writing to Doris, it is necessary to modify the batch size and batch delay. For logs with an average size of a few hundred bytes per line, a batch size of 1,000,000 lines and a batch delay of 10 seconds are recommended."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"pipeline.batch.size: 1000000\npipeline.batch.delay: 10000\n"})}),"\n",(0,i.jsx)(n.p,{children:"The configuration file for a specific log collection, such as logstash_doris_log.conf, mainly consists of three parts corresponding to the various stages of ETL:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Input is responsible for reading the raw data."}),"\n",(0,i.jsx)(n.li,{children:"Filter is responsible for data transformation."}),"\n",(0,i.jsx)(n.li,{children:"Output is responsible for sending the data to the output destination."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'# 1. input is responsible for reading raw data\n# File input is an input plugin that can be configured to read the log file of the configured path. It uses the multiline codec to concatenate lines that do not start with a timestamp to the end of the previous line, achieving the effect of merging stacktraces with the main log. File input saves the log content in the @message field, and there are also some metadata fields such as host, log.file.path. Here, we manually add a field named type through add_field, with its value set to fe.log.\ninput {\n    file {\n        path => "/mnt/disk2/xiaokang/opt/doris_master/fe/log/fe.log"\n        add_field => {"type" => "fe.log"}\n        codec => multiline {\n            # valid line starts with timestamp\n            pattern => "^%{TIMESTAMP_ISO8601} "\n            # any line not starting with a timestamp should be merged with the previous line\n            negate => true\n            what => "previous"\n        }\n    }\n}\n\n# 2. filter section is responsible for data transformation\n# grok is a commonly used data transformation plugin that has some built-in patterns, such as TIMESTAMP_ISO8601 for parsing timestamps, and also supports writing regular expressions to extract fields.\nfilter {\n    grok {\n        match => {\n            # parse log_time, level, thread, position fields from message\n            "message" => "%{TIMESTAMP_ISO8601:log_time} (?<level>[A-Z]+) \\((?<thread>[^\\[]*)\\) \\[(?<position>[^\\]]*)\\]"\n        }\n    }\n}\n\n# 3. output section is responsible for data output\n# Doris output sends data to Doris using the Stream Load HTTP interface. The data format for Stream Load is specified as JSON through the headers parameter, and the mapping parameter specifies the mapping from Logstash fields to JSON fields. Since headers specify "format" => "json", Stream Load will automatically parse the JSON fields and write them into the corresponding fields of the Doris table.\noutput {\n    doris {\n        http_hosts => ["http://localhost:8630"]\n        user => "root"\n        password => ""\n        db => "log_db"\n        table => "doris_log"\n        headers => {\n          "format" => "json"\n          "read_json_by_line" => "true"\n          "load_to_single_tablet" => "true"\n        }\n        mapping => {\n          "log_time" => "%{log_time}"\n          "collect_time" => "%{@timestamp}"\n          "host" => "%{[host][name]}"\n          "path" => "%{[log][file][path]}"\n          "type" => "%{type}"\n          "level" => "%{level}"\n          "thread" => "%{thread}"\n          "position" => "%{position}"\n          "message" => "%{message}"\n        }\n        log_request => true\n    }\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"4. Running Logstash"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'\n${LOGSTASH_HOME}/bin/logstash -f config/logstash_doris_log.conf\n\n# When log_request is set to true, the log will output the request parameters and response results of each Stream Load.\n[2024-07-08T22:35:34,772][INFO ][logstash.outputs.doris   ][main][e44d2a24f17d764647ce56f5fed24b9bbf08d3020c7fddcc3298800daface80a] doris stream load response:\n{\n    "TxnId": 45464,\n    "Label": "logstash_log_db_doris_log_20240708_223532_539_6c20a0d1-dcab-4b8e-9bc0-76b46a929bd1",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 452,\n    "NumberLoadedRows": 452,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 277230,\n    "LoadTimeMs": 1797,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 18,\n    "ReadDataTimeMs": 9,\n    "WriteDataTimeMs": 1758,\n    "CommitAndPublishTimeMs": 18\n}\n\n# By default, speed information is logged every 10 seconds, including the amount of data since startup (in MB and ROWS), the total speed (in MB/s and R/s), and the speed in the last 10 seconds.\n\n[2024-07-08T22:35:38,285][INFO ][logstash.outputs.doris   ][main] total 11 MB 18978 ROWS, total speed 0 MB/s 632 R/s, last 10 seconds speed 1 MB/s 1897 R/s\n'})}),"\n",(0,i.jsx)(n.h3,{id:"json-log-collection-example",children:"JSON Log Collection Example"}),"\n",(0,i.jsx)(n.p,{children:"This example demonstrates JSON log collection using data from the GitHub events archive."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"1. Data"})}),"\n",(0,i.jsxs)(n.p,{children:["The GitHub events archive contains archived data of GitHub user actions, formatted as JSON. It can be downloaded from ",(0,i.jsx)(n.a,{href:"https://data.gharchive.org/",children:"here"}),", for example, the data for January 1, 2024, at 3 PM."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"wget https://data.gharchive.org/2024-01-01-15.json.gz\n"})}),"\n",(0,i.jsx)(n.p,{children:"Below is a sample of the data. Normally, each piece of data is on a single line, but for ease of display, it has been formatted here."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "id": "37066529221",\n  "type": "PushEvent",\n  "actor": {\n    "id": 46139131,\n    "login": "Bard89",\n    "display_login": "Bard89",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/Bard89",\n    "avatar_url": "https://avatars.githubusercontent.com/u/46139131?"\n  },\n  "repo": {\n    "id": 780125623,\n    "name": "Bard89/talk-to-me",\n    "url": "https://api.github.com/repos/Bard89/talk-to-me"\n  },\n  "payload": {\n    "repository_id": 780125623,\n    "push_id": 17799451992,\n    "size": 1,\n    "distinct_size": 1,\n    "ref": "refs/heads/add_mvcs",\n    "head": "f03baa2de66f88f5f1754ce3fa30972667f87e81",\n    "before": "85e6544ede4ae3f132fe2f5f1ce0ce35a3169d21"\n  },\n  "public": true,\n  "created_at": "2024-04-01T23:00:00Z"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"2. Table Creation"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'CREATE DATABASE log_db;\nUSE log_db;\n\n\nCREATE TABLE github_events\n(\n  `created_at` DATETIME,\n  `id` BIGINT,\n  `type` TEXT,\n  `public` BOOLEAN,\n  `actor.id` BIGINT,\n  `actor.login` TEXT,\n  `actor.display_login` TEXT,\n  `actor.gravatar_id` TEXT,\n  `actor.url` TEXT,\n  `actor.avatar_url` TEXT,\n  `repo.id` BIGINT,\n  `repo.name` TEXT,\n  `repo.url` TEXT,\n  `payload` TEXT,\n  `host` TEXT,\n  `path` TEXT,\n  INDEX `idx_id` (`id`) USING INVERTED,\n  INDEX `idx_type` (`type`) USING INVERTED,\n  INDEX `idx_actor.id` (`actor.id`) USING INVERTED,\n  INDEX `idx_actor.login` (`actor.login`) USING INVERTED,\n  INDEX `idx_repo.id` (`repo.id`) USING INVERTED,\n  INDEX `idx_repo.name` (`repo.name`) USING INVERTED,\n  INDEX `idx_host` (`host`) USING INVERTED,\n  INDEX `idx_path` (`path`) USING INVERTED,\n  INDEX `idx_payload` (`payload`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true")\n)\nENGINE = OLAP\nDUPLICATE KEY(`created_at`)\nPARTITION BY RANGE(`created_at`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"compaction_policy" = "time_series",\n"enable_single_replica_compaction" = "true",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.create_history_partition" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-30",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.replication_num" = "1"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"3. Logstash Configuration"})}),"\n",(0,i.jsx)(n.p,{children:"The configuration file differs from the previous TEXT log collection in the following aspects:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The codec parameter for file input is json. Logstash will parse each line of text as JSON format and use the parsed fields for subsequent processing."}),"\n",(0,i.jsx)(n.li,{children:"No filter plugin is used because no additional processing or transformation is needed."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'input {\n    file {\n        path => "/tmp/github_events/2024-04-01-23.json"\n        codec => json\n    }\n}\n\noutput {\n    doris {\n        http_hosts => ["http://fe1:8630", "http://fe2:8630", "http://fe3:8630"]\n        user => "root"\n        password => ""\n        db => "log_db"\n        table => "github_events"\n        headers => {\n          "format" => "json"\n          "read_json_by_line" => "true"\n          "load_to_single_tablet" => "true"\n        }\n        mapping => {\n          "created_at" => "%{created_at}"\n          "id" => "%{id}"\n          "type" => "%{type}"\n          "public" => "%{public}"\n          "actor.id" => "%{[actor][id]}"\n          "actor.login" => "%{[actor][login]}"\n          "actor.display_login" => "%{[actor][display_login]}"\n          "actor.gravatar_id" => "%{[actor][gravatar_id]}"\n          "actor.url" => "%{[actor][url]}"\n          "actor.avatar_url" => "%{[actor][avatar_url]}"\n          "repo.id" => "%{[repo][id]}"\n          "repo.name" => "%{[repo][name]}"\n          "repo.url" => "%{[repo][url]}"\n          "payload" => "%{[payload]}"\n          "host" => "%{[host][name]}"\n          "path" => "%{[log][file][path]}"\n        }\n        log_request => true\n    }\n}\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"4. Running Logstash"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"${LOGSTASH_HOME}/bin/logstash -f logstash_github_events.conf\n"})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var s=t(667294);let i={},a=s.createContext(i);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);