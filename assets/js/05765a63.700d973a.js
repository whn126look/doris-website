"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["762820"],{653911:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>d,frontMatter:()=>a});var s=JSON.parse('{"id":"admin-manual/data-admin/restore","title":"Data Restore","description":"\x3c!--","source":"@site/docs/admin-manual/data-admin/restore.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/restore","permalink":"/docs/dev/admin-manual/data-admin/restore","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Data Restore","language":"en"},"sidebar":"docs","previous":{"title":"Data Backup","permalink":"/docs/dev/admin-manual/data-admin/backup"},"next":{"title":"Overview","permalink":"/docs/dev/admin-manual/data-admin/ccr/overview"}}'),r=t("785893"),o=t("250065");let a={title:"Data Restore",language:"en"},i="Data Recovery",l={},d=[{value:"Brief principle description",id:"brief-principle-description",level:2},{value:"Start Restore",id:"start-restore",level:2},{value:"Related Commands",id:"related-commands",level:2},{value:"Common mistakes",id:"common-mistakes",level:2},{value:"More Help",id:"more-help",level:2}];function c(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"data-recovery",children:"Data Recovery"})}),"\n",(0,r.jsx)(n.p,{children:"Doris supports backing up the current data in the form of files to the remote storage system through the broker. Afterwards, you can restore data from the remote storage system to any Doris cluster through the restore command. Through this function, Doris can support periodic snapshot backup of data. You can also use this function to migrate data between different clusters."}),"\n",(0,r.jsx)(n.p,{children:"This feature requires Doris version 0.8.2+"}),"\n",(0,r.jsxs)(n.p,{children:["To use this function, you need to deploy the broker corresponding to the remote storage. Such as BOS, HDFS, etc. You can view the currently deployed broker through ",(0,r.jsx)(n.code,{children:"SHOW BROKER;"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"brief-principle-description",children:"Brief principle description"}),"\n",(0,r.jsx)(n.p,{children:"The restore operation needs to specify an existing backup in the remote warehouse, and then restore the content of the backup to the local cluster. When the user submits the Restore request, the system will perform the following operations:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Create the corresponding metadata locally"}),"\n",(0,r.jsx)(n.p,{children:"This step will first create and restore the corresponding table partition and other structures in the local cluster. After creation, the table is visible, but not accessible."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Local snapshot"}),"\n",(0,r.jsx)(n.p,{children:"This step is to take a snapshot of the table created in the previous step. This is actually an empty snapshot (because the table just created has no data), and its purpose is to generate the corresponding snapshot directory on the Backend for later receiving the snapshot file downloaded from the remote warehouse."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Download snapshot"}),"\n",(0,r.jsx)(n.p,{children:"The snapshot files in the remote warehouse will be downloaded to the corresponding snapshot directory generated in the previous step. This step is done concurrently by each Backend."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Effective snapshot"}),"\n",(0,r.jsx)(n.p,{children:"After the snapshot download is complete, we need to map each snapshot to the metadata of the current local table. These snapshots are then reloaded to take effect, completing the final recovery job."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"start-restore",children:"Start Restore"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Restore the table backup_tbl in backup snapshot_1 from example_repo to database example_db1, the time version is "2018-05-04-16-45-08". Revert to 1 copy:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'RESTORE SNAPSHOT example_db1.`snapshot_1`\nFROM `example_repo`\nON ( `backup_tbl` )\nPROPERTIES\n(\n    "backup_timestamp"="2022-04-08-15-52-29",\n    "replication_num" = "1"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Restore partitions p1 and p2 of table backup_tbl in backup snapshot_2 from example_repo, and table backup_tbl2 to database example_db1, and rename it to new_tbl with time version "2018-05-04-17-11-01". The default reverts to 3 replicas:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'RESTORE SNAPSHOT example_db1.`snapshot_2`\nFROM `example_repo`\nON\n(\n    `backup_tbl` PARTITION (`p1`, `p2`),\n    `backup_tbl2` AS `new_tbl`\n)\nPROPERTIES\n(\n    "backup_timestamp"="2022-04-08-15-55-43"\n);\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"View the execution of the restore job:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'mysql> SHOW RESTORE\\G;\n*************************** 1. row ***************************\n               JobId: 17891851\n               Label: snapshot_label1\n           Timestamp: 2022-04-08-15-52-29\n              DbName: default_cluster:example_db1\n               State: FINISHED\n           AllowLoad: false\n      ReplicationNum: 3\n         RestoreObjs: {\n  "name": "snapshot_label1",\n  "database": "example_db",\n  "backup_time": 1649404349050,\n  "content": "ALL",\n  "olap_table_list": [\n    {\n      "name": "backup_tbl",\n      "partition_names": [\n        "p1",\n        "p2"\n      ]\n    }\n  ],\n  "view_list": [],\n  "odbc_table_list": [],\n  "odbc_resource_list": []\n}\n          CreateTime: 2022-04-08 15:59:01\n    MetaPreparedTime: 2022-04-08 15:59:02\nSnapshotFinishedTime: 2022-04-08 15:59:05\nDownloadFinishedTime: 2022-04-08 15:59:12\n        FinishedTime: 2022-04-08 15:59:18\n     UnfinishedTasks:\n            Progress:\n          TaskErrMsg:\n              Status: [OK]\n             Timeout: 86400\n1 row in set (0.01 sec)\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For detailed usage of RESTORE, please refer to ",(0,r.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE",children:"here"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"related-commands",children:"Related Commands"}),"\n",(0,r.jsxs)(n.p,{children:["The commands related to the backup and restore function are as follows. For the following commands, you can use ",(0,r.jsx)(n.code,{children:"help cmd;"})," to view detailed help after connecting to Doris through mysql-client."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"CREATE REPOSITORY"}),"\n",(0,r.jsxs)(n.p,{children:["Create a remote repository path for backup or restore. This command needs to use the Broker process to access the remote storage. Different brokers need to provide different parameters. For details, please refer to ",(0,r.jsx)(n.a,{href:"../../data-operate/import/broker-load-manual",children:"Broker documentation"}),", or you can directly back up to support through the S3 protocol For the remote storage of AWS S3 protocol, directly back up to HDFS, please refer to ",(0,r.jsx)(n.a,{href:"../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",children:"Create Remote Warehouse Documentation"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"RESTORE"}),"\n",(0,r.jsx)(n.p,{children:"Perform a restore operation."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SHOW RESTORE"}),"\n",(0,r.jsx)(n.p,{children:"View the execution of the most recent restore job, including:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"JobId: The id of the current recovery job."}),"\n",(0,r.jsx)(n.li,{children:"Label: The name (Label) of the backup in the warehouse specified by the user."}),"\n",(0,r.jsx)(n.li,{children:"Timestamp: The timestamp of the backup in the user-specified repository."}),"\n",(0,r.jsx)(n.li,{children:"DbName: Database corresponding to the restore job."}),"\n",(0,r.jsxs)(n.li,{children:["State: The current stage of the recovery job:\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"PENDING: The initial status of the job."}),"\n",(0,r.jsx)(n.li,{children:"SNAPSHOTING: The snapshot operation of the newly created table is in progress."}),"\n",(0,r.jsx)(n.li,{children:"DOWNLOAD: Sending download snapshot task."}),"\n",(0,r.jsx)(n.li,{children:"DOWNLOADING: Snapshot is downloading."}),"\n",(0,r.jsx)(n.li,{children:"COMMIT: Prepare the downloaded snapshot to take effect."}),"\n",(0,r.jsx)(n.li,{children:"COMMITTING: Validating downloaded snapshots."}),"\n",(0,r.jsx)(n.li,{children:"FINISHED: Recovery is complete."}),"\n",(0,r.jsx)(n.li,{children:"CANCELLED: Recovery failed or was canceled."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"AllowLoad: Whether to allow import during restore."}),"\n",(0,r.jsx)(n.li,{children:"ReplicationNum: Restores the specified number of replicas."}),"\n",(0,r.jsx)(n.li,{children:"RestoreObjs: List of tables and partitions involved in this restore."}),"\n",(0,r.jsx)(n.li,{children:"CreateTime: Job creation time."}),"\n",(0,r.jsx)(n.li,{children:"MetaPreparedTime: Local metadata generation completion time."}),"\n",(0,r.jsx)(n.li,{children:"SnapshotFinishedTime: The local snapshot completion time."}),"\n",(0,r.jsx)(n.li,{children:"DownloadFinishedTime: The time when the remote snapshot download is completed."}),"\n",(0,r.jsx)(n.li,{children:"FinishedTime: The completion time of this job."}),"\n",(0,r.jsxs)(n.li,{children:["UnfinishedTasks: During ",(0,r.jsx)(n.code,{children:"SNAPSHOTTING"}),", ",(0,r.jsx)(n.code,{children:"DOWNLOADING"}),", ",(0,r.jsx)(n.code,{children:"COMMITTING"})," and other stages, there will be multiple subtasks going on at the same time. The current stage shown here is the task id of the unfinished subtasks."]}),"\n",(0,r.jsx)(n.li,{children:"TaskErrMsg: If there is an error in the execution of a subtask, the error message of the corresponding subtask will be displayed here."}),"\n",(0,r.jsx)(n.li,{children:"Status: Used to record some status information that may appear during the entire job process."}),"\n",(0,r.jsx)(n.li,{children:"Timeout: The timeout period of the job, in seconds."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"CANCEL RESTORE"}),"\n",(0,r.jsx)(n.p,{children:"Cancel the currently executing restore job."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"DROP REPOSITORY"}),"\n",(0,r.jsx)(n.p,{children:"Delete the created remote repository. Deleting a warehouse only deletes the mapping of the warehouse in Doris, and does not delete the actual warehouse data."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"common-mistakes",children:"Common mistakes"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Restore Report An Error:[20181: invalid md5 of downloaded file: /data/doris.HDD/snapshot/20220607095111.862.86400/19962/668322732/19962.hdr, expected: f05b63cca5533ea0466f62a9897289b5, get: d41d8cd98f00b204e9800998ecf8427e]"}),"\n",(0,r.jsxs)(n.p,{children:["If the number of copies of the table backed up and restored is inconsistent, you need to specify the number of copies when executing the restore command. For specific commands, please refer to ",(0,r.jsx)(n.a,{href:"../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE",children:"RESTORE"})," command manual"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Restore Report An Error:[COMMON_ERROR, msg: Could not set meta version to 97 since it is lower than minimum required version 100]"}),"\n",(0,r.jsxs)(n.p,{children:["Backup and restore are not caused by the same version, use the specified meta_version to read the metadata of the previous backup. Note that this parameter is used as a temporary solution and is only used to restore the data backed up by the old version of Doris. The latest version of the backup data already contains the meta version, so there is no need to specify it. For the specific solution to the above error, specify meta_version = 100. For specific commands, please refer to ",(0,r.jsx)(n.a,{href:"../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE",children:"RESTORE"})," command manual"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"more-help",children:"More Help"}),"\n",(0,r.jsxs)(n.p,{children:["For more detailed syntax and best practices used by RESTORE, please refer to the ",(0,r.jsx)(n.a,{href:"../../sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE",children:"RESTORE"})," command manual, You can also type ",(0,r.jsx)(n.code,{children:"HELP RESTORE"})," on the MySql client command line for more help."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var s=t(667294);let r={},o=s.createContext(r);function a(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);