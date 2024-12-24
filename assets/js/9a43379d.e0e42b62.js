"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["741486"],{642698:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>r,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>s});var n=JSON.parse('{"id":"ecosystem/automq-load","title":"AutoMQ Load","description":"AutoMQ is a cloud-native fork of Kafka by separating storage to object storage like S3. It remains 100% compatible with Apache Kafka\xae while offering users up to a 10x cost-effective and 100x elasticity . Through its innovative shared storage architecture, it achieves capabilities such as reassign partitions in seconds, self-balancing and auto scaling in seconds while ensuring high throughput and low latency.","source":"@site/docs/ecosystem/automq-load.md","sourceDirName":"ecosystem","slug":"/ecosystem/automq-load","permalink":"/docs/dev/ecosystem/automq-load","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"AutoMQ Load","language":"en"},"sidebar":"docs","previous":{"title":"Fluent Bit Doris Output Plugin","permalink":"/docs/dev/ecosystem/fluentbit"},"next":{"title":"Hive Bitmap UDF","permalink":"/docs/dev/ecosystem/hive-bitmap-udf"}}'),o=a("785893"),i=a("250065");let s={title:"AutoMQ Load",language:"en"},r=void 0,c={},d=[{value:"Environment Preparation",id:"environment-preparation",level:2},{value:"Prepare Apache Doris and Test Data",id:"prepare-apache-doris-and-test-data",level:3},{value:"Prepare Kafka Command Line Tools",id:"prepare-kafka-command-line-tools",level:3},{value:"Prepare AutoMQ and test data",id:"prepare-automq-and-test-data",level:3},{value:"Create a Routine Load import job",id:"create-a-routine-load-import-job",level:2},{value:"Verify data import",id:"verify-data-import",level:2}];function l(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/AutoMQ/automq",children:"AutoMQ"})," is a cloud-native fork of Kafka by separating storage to object storage like S3. It remains 100% compatible with Apache Kafka\xae while offering users up to a 10x cost-effective and 100x elasticity . Through its innovative shared storage architecture, it achieves capabilities such as reassign partitions in seconds, self-balancing and auto scaling in seconds while ensuring high throughput and low latency.\n",(0,o.jsx)(t.img,{alt:"AutoMQ Storage Architecture",src:a(192628).Z+"",width:"828",height:"948"})]}),"\n",(0,o.jsxs)(t.p,{children:["This article will explain how to use Apache Doris Routine Load to import data from AutoMQ into Doris. For more details on Routine Load, please refer to the ",(0,o.jsx)(t.a,{href:"https://doris.apache.org/docs/data-operate/import/routine-load-manual/",children:"Routine Load"})," document."]}),"\n",(0,o.jsx)(t.h2,{id:"environment-preparation",children:"Environment Preparation"}),"\n",(0,o.jsx)(t.h3,{id:"prepare-apache-doris-and-test-data",children:"Prepare Apache Doris and Test Data"}),"\n",(0,o.jsxs)(t.p,{children:["Ensure that a working Apache Doris cluster is already set up. For demonstration purposes, we have deployed a test Apache Doris environment on Linux following the ",(0,o.jsx)(t.a,{href:"https://doris.apache.org/docs/install/cluster-deployment/run-docker-cluster",children:"Deploying with Docker"})," document.\nCreate databases and test tables:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"create database automq_db;\nCREATE TABLE automq_db.users (\n                                 id bigint NOT NULL,\n                                 name string NOT NULL,\n                                 timestamp string NULL,\n                                 status string NULL\n\n) DISTRIBUTED BY hash (id) PROPERTIES ('replication_num' = '1');\n"})}),"\n",(0,o.jsx)(t.h3,{id:"prepare-kafka-command-line-tools",children:"Prepare Kafka Command Line Tools"}),"\n",(0,o.jsxs)(t.p,{children:["Download the latest TGZ package from ",(0,o.jsx)(t.a,{href:"https://github.com/AutoMQ/automq",children:"AutoMQ Releases"})," and extract it. Assuming the extraction directory is $AUTOMQ_HOME, this article will use the scripts under $AUTOMQ_HOME/bin to create topics and generate test data."]}),"\n",(0,o.jsx)(t.h3,{id:"prepare-automq-and-test-data",children:"Prepare AutoMQ and test data"}),"\n",(0,o.jsxs)(t.p,{children:["Refer to the AutoMQ ",(0,o.jsx)(t.a,{href:"https://docs.automq.com/docs/automq-opensource/EvqhwAkpriAomHklOUzcUtybn7g",children:"official deployment documentation"})," to deploy a functional cluster, ensuring network connectivity between AutoMQ and Apache Doris.\nQuickly create a topic named example_topic in AutoMQ and write a test JSON data to it by following these steps."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Create Topic"})}),"\n",(0,o.jsx)(t.p,{children:"Use the Apache Kafka\xae command line tool in AutoMQ to create the topic, ensuring that you have access to a Kafka environment and that the Kafka service is running. Here is an example command to create a topic:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"$AUTOMQ_HOME/bin/kafka-topics.sh --create --topic exampleto_topic --bootstrap-server 127.0.0.1:9092  --partitions 1 --replication-factor 1\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Tips: When executing the command, replace ",(0,o.jsx)(t.code,{children:"topic"})," and ",(0,o.jsx)(t.code,{children:"bootstarp-server"})," with the actual AutoMQ Bootstrap Server address."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"After creating the topic, you can use the following command to verify that the topic has been successfully created."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"$AUTOMQ_HOME/bin/kafka-topics.sh --describe example_topic --bootstrap-server 127.0.0.1:9092\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Generate test data"})}),"\n",(0,o.jsx)(t.p,{children:"Create a JSON-formatted test data entry, corresponding to the table mentioned earlier."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'{\n  "id": 1,\n  "name": "testuser",\n  "timestamp": "2023-11-10T12:00:00",\n  "status": "active"\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Write test data"})}),"\n",(0,o.jsxs)(t.p,{children:["Use Kafka's command-line tools or a programming approach to write the test data to a topic named ",(0,o.jsx)(t.code,{children:"example_topic"}),". Below is an example using the command-line tool:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'echo \'{"id": 1, "name": "testuser", "timestamp": "2023-11-10T12:00:00", "status": "active"}\' | sh kafka-console-producer.sh --broker-list 127.0.0.1:9092 --topic example_topic\n'})}),"\n",(0,o.jsx)(t.p,{children:"To view the data just written to the topic, use the following command:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"sh $AUTOMQ_HOME/bin/kafka-console-consumer.sh --bootstrap-server 127.0.0.1:9092 --topic example_topic --from-beginning\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Tips: When executing the command, replace ",(0,o.jsx)(t.code,{children:"topic"})," and ",(0,o.jsx)(t.code,{children:"bootstarp-server"})," with the actual AutoMQ Bootstrap Server address."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"create-a-routine-load-import-job",children:"Create a Routine Load import job"}),"\n",(0,o.jsx)(t.p,{children:"In the Apache Doris command line, create a Routine Load job that accepts JSON data to continuously import data from an AutoMQ Kafka topic. For detailed parameter information of Routine Load, please refer to [Doris Routine Load]."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'CREATE ROUTINE LOAD automq_example_load ON users\nCOLUMNS(id, name, timestamp, status)\nPROPERTIES\n(\n    "format" = "json",\n    "jsonpaths" = "[\\"$.id\\",\\"$.name\\",\\"$.timestamp\\",\\"$.status\\"]"\n )\nFROM KAFKA\n(\n    "kafka_broker_list" = "127.0.0.1:9092",\n    "kafka_topic" = "example_topic",\n    "property.kafka_default_offsets" = "OFFSET_BEGINNING"\n);\n'})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Tips: When executing the command, you need to replace kafka_broker_list with the actual AutoMQ Bootstrap Server address."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"verify-data-import",children:"Verify data import"}),"\n",(0,o.jsx)(t.p,{children:"First, check the status of the Routine Load import job to ensure that the task is running."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"show routine load\\G;\n"})}),"\n",(0,o.jsx)(t.p,{children:"Then query the relevant tables in the Apache Doris database, and you will see that the data has been successfully imported."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"select * from users;\n+------+--------------+---------------------+--------+\n| id   | name         | timestamp           | status |\n+------+--------------+---------------------+--------+\n|    1 | testuser     | 2023-11-10T12:00:00 | active |\n|    2 | testuser     | 2023-11-10T12:00:00 | active |\n+------+--------------+---------------------+--------+\n2 rows in set (0.01 sec)\n"})})]})}function p(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},192628:function(e,t,a){a.d(t,{Z:function(){return n}});let n=a.p+"assets/images/automq_storage_architecture-ae9745cd9eb2b4c42ef8e10d44e9fe7a.png"},250065:function(e,t,a){a.d(t,{Z:function(){return r},a:function(){return s}});var n=a(667294);let o={},i=n.createContext(o);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);