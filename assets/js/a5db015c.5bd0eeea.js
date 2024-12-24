"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["813012"],{817644:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>p,assets:()=>s,toc:()=>a,frontMatter:()=>l});var r=JSON.parse('{"id":"admin-manual/tracing","title":"tracing","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/admin-manual/tracing.md","sourceDirName":"admin-manual","slug":"/admin-manual/tracing","permalink":"/docs/1.2/admin-manual/tracing","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"tracing","language":"en"},"sidebar":"docs","previous":{"title":"Statistics of query execution","permalink":"/docs/1.2/admin-manual/query-profile"},"next":{"title":"performance optimization","permalink":"/docs/1.2/admin-manual/optimization"}}'),i=t("785893"),o=t("250065");let l={title:"tracing",language:"en"},c=void 0,s={},a=[{value:"Principle",id:"principle",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Deploy zipkin",id:"deploy-zipkin",level:3},{value:"Configuring and starting Doris",id:"configuring-and-starting-doris",level:3},{value:"Add configuration to fe.conf",id:"add-configuration-to-feconf",level:4},{value:"Add configuration to be.conf",id:"add-configuration-to-beconf",level:4},{value:"Start fe and be",id:"start-fe-and-be",level:4},{value:"Executing a query",id:"executing-a-query",level:3},{value:"View zipkin UI",id:"view-zipkin-ui",level:3},{value:"Using opentelemetry collector",id:"using-opentelemetry-collector",level:2},{value:"Deploy opentelemetry collector",id:"deploy-opentelemetry-collector",level:3},{value:"Download collector",id:"download-collector",level:4},{value:"Generate configuration file",id:"generate-configuration-file",level:4},{value:"Start collector",id:"start-collector",level:4},{value:"Configuring and starting Doris",id:"configuring-and-starting-doris-1",level:3},{value:"Add configuration to fe.conf",id:"add-configuration-to-feconf-1",level:4},{value:"Add configuration to be.conf",id:"add-configuration-to-beconf-1",level:4},{value:"Start fe and be",id:"start-fe-and-be-1",level:4},{value:"Executing a query",id:"executing-a-query-1",level:3},{value:"View zipkin UI",id:"view-zipkin-ui-1",level:3}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Tracing records the life cycle of a request execution in the system, including the request and its sub-procedure call links, execution time and statistics, which can be used for slow query location, performance bottleneck analysis, etc."}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsx)(n.p,{children:"Please note that Tracing is only supported in Doris 1.2 and is no longer avialable since Doris 2.0."})}),"\n",(0,i.jsx)(n.h2,{id:"principle",children:"Principle"}),"\n",(0,i.jsx)(n.p,{children:"doris is responsible for collecting traces and exporting them to a third-party tracing analysis system, which is responsible for the presentation and storage of traces."}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(n.p,{children:["doris currently supports exporting traces directly to ",(0,i.jsx)(n.a,{href:"https://zipkin.io/",children:"zipkin"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"deploy-zipkin",children:"Deploy zipkin"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl -sSL https://zipkin.io/quickstart.sh | bash -s\njava -jar zipkin.jar\n"})}),"\n",(0,i.jsx)(n.h3,{id:"configuring-and-starting-doris",children:"Configuring and starting Doris"}),"\n",(0,i.jsx)(n.h4,{id:"add-configuration-to-feconf",children:"Add configuration to fe.conf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"enable_tracing = true\n\n# Configure traces to export to zipkin\ntrace_export_url = http://127.0.0.1:9411/api/v2/spans\n"})}),"\n",(0,i.jsx)(n.h4,{id:"add-configuration-to-beconf",children:"Add configuration to be.conf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"enable_tracing = true\n\n# Configure traces to export to zipkin\ntrace_export_url = http://127.0.0.1:9411/api/v2/spans\n\n# Queue size for caching spans. span export will be triggered once when the number of spans reaches half of the queue capacity. spans arriving in the queue will be discarded when the queue is full.\nmax_span_queue_size=2048\n\n# The maximum number of spans to export in a single pass.\nmax_span_export_batch_size=512\n\n# Maximum interval for exporting span\nexport_span_schedule_delay_millis=500\n"})}),"\n",(0,i.jsx)(n.h4,{id:"start-fe-and-be",children:"Start fe and be"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sh fe/bin/start_fe.sh --daemon\nsh be/bin/start_be.sh --daemon\n"})}),"\n",(0,i.jsx)(n.h3,{id:"executing-a-query",children:"Executing a query"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"...\n"})}),"\n",(0,i.jsx)(n.h3,{id:"view-zipkin-ui",children:"View zipkin UI"}),"\n",(0,i.jsxs)(n.p,{children:["The browser opens ",(0,i.jsx)(n.code,{children:"http://127.0.0.1:9411/zipkin/"})," to view the query tracing."]}),"\n",(0,i.jsx)(n.h2,{id:"using-opentelemetry-collector",children:"Using opentelemetry collector"}),"\n",(0,i.jsxs)(n.p,{children:["Use the opentelemetry collector to export traces to other systems such as zipkin, jaeger, skywalking, or to database systems and files.  For more details, refer to ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/exporter",children:"collector exporter"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Meanwhile, opentelemetry collector provides a rich set of operators to process traces. For example, ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/filterprocessor",children:"filterprocessor"})," , ",(0,i.jsx)(n.a,{href:"hhttps://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor/tailsamplingprocessor",children:"tailsamplingprocessor"}),". For more details, refer to ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/processor",children:"collector processor"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"traces export path: doris->collector->zipkin etc."}),"\n",(0,i.jsx)(n.h3,{id:"deploy-opentelemetry-collector",children:"Deploy opentelemetry collector"}),"\n",(0,i.jsxs)(n.p,{children:["opentelemetry has released collector ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-collector",children:"core"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-collector-contrib",children:"contrib"}),", contrib provides richer features, here is an example of contrib version."]}),"\n",(0,i.jsx)(n.h4,{id:"download-collector",children:"Download collector"}),"\n",(0,i.jsxs)(n.p,{children:["Download otelcol-contrib, available on the official website ",(0,i.jsx)(n.a,{href:"https://github.com/open-telemetry/opentelemetry-collector-releases/releases",children:"more precompiled versions for more platforms"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.55.0/otelcol-contrib_0.55.0_linux_amd64.tar.gz\n\ntar -zxvf otelcol-contrib_0.55.0_linux_amd64.tar.gz\n"})}),"\n",(0,i.jsx)(n.h4,{id:"generate-configuration-file",children:"Generate configuration file"}),"\n",(0,i.jsxs)(n.p,{children:["The collector configuration file is divided into 5 parts: ",(0,i.jsx)(n.code,{children:"receivers"}),", ",(0,i.jsx)(n.code,{children:"processors"}),", ",(0,i.jsx)(n.code,{children:"exporters"}),", ",(0,i.jsx)(n.code,{children:"extensions"}),", and ",(0,i.jsx)(n.code,{children:"service"}),". Among them, receivers, processors and exporters define the way to receive, process and export data respectively; extensions are optional and are used to extend tasks that do not involve processing telemetry data; service specifies which components are used in the collector. See ",(0,i.jsx)(n.a,{href:"https://opentelemetry.io/docs/collector/deployment/",children:"collector configuration"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"The following configuration file uses the otlp (OpenTelemetry Protocol) protocol to receive traces data, perform batch processing and filter out traces longer than 50ms, and finally export them to zipkin and file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'cat > otel-collector-config.yaml << EOF\nreceivers:\n  otlp:\n    protocols:\n      http:\n\nexporters:\n  zipkin:\n    endpoint: "http://10.81.85.90:8791/api/v2/spans"\n  file:\n    path: ./filename.json\n\nprocessors:\n  batch:\n  tail_sampling:\n    policies:\n      {\n        name: duration_policy,\n        type: latency,\n        latency: {threshold_ms: 50}\n      }\n\nextensions:\n\nservice:\n  pipelines:\n    traces:\n      receivers: [otlp]\n      processors: [batch, tail_sampling]\n      exporters: [zipkin, file]\nEOF\n'})}),"\n",(0,i.jsx)(n.h4,{id:"start-collector",children:"Start collector"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"nohup ./otelcol-contrib --config=otel-collector-config.yaml &\n"})}),"\n",(0,i.jsx)(n.h3,{id:"configuring-and-starting-doris-1",children:"Configuring and starting Doris"}),"\n",(0,i.jsx)(n.h4,{id:"add-configuration-to-feconf-1",children:"Add configuration to fe.conf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"enable_tracing = true\n\n# enable opentelemetry collector\ntrace_exporter = collector\n\n# Configure traces export to collector, 4318 is the default port for collector otlp http\ntrace_export_url = http://127.0.0.1:4318/v1/traces\n"})}),"\n",(0,i.jsx)(n.h4,{id:"add-configuration-to-beconf-1",children:"Add configuration to be.conf"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"enable_tracing = true\n\n# enable opentelemetry collector\ntrace_exporter = collector\n\n# Configure traces export to collector, 4318 is the default port for collector otlp http\ntrace_export_url = http://127.0.0.1:4318/v1/traces\n\n# Queue size for caching spans. span export will be triggered once when the number of spans reaches half of the queue capacity. spans arriving in the queue will be discarded when the queue is full.\nmax_span_queue_size=2048\n\n# The maximum number of spans to export in a single pass.\nmax_span_export_batch_size=512\n\n# Maximum interval for exporting span\nexport_span_schedule_delay_millis=500\n"})}),"\n",(0,i.jsx)(n.h4,{id:"start-fe-and-be-1",children:"Start fe and be"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"sh fe/bin/start_fe.sh --daemon\nsh be/bin/start_be.sh --daemon\n"})}),"\n",(0,i.jsx)(n.h3,{id:"executing-a-query-1",children:"Executing a query"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"...\n"})}),"\n",(0,i.jsx)(n.h3,{id:"view-zipkin-ui-1",children:"View zipkin UI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"...\n"})})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var r=t(667294);let i={},o=r.createContext(i);function l(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);