"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"PLC4X OPCUA Server","metadata":{"permalink":"/blog/PLC4X OPCUA Server","editUrl":"https://github.com/iscito/website/tree/main/blog/2022-09-12-plc4x-opcua/2022-09-12-plc4x-opcua.md","source":"@site/blog/2022-09-12-plc4x-opcua/2022-09-12-plc4x-opcua.md","title":"PLC4X OPCUA Server","description":"The PLC4X OPC-UA Server is an integration with the PLC4X","date":"2022-09-12T00:00:00.000Z","formattedDate":"September 12, 2022","tags":[{"label":"plc4x","permalink":"/blog/tags/plc-4-x"},{"label":"opcua","permalink":"/blog/tags/opcua"},{"label":"modbus","permalink":"/blog/tags/modbus"},{"label":"s7","permalink":"/blog/tags/s-7"},{"label":"ads","permalink":"/blog/tags/ads"},{"label":"eip","permalink":"/blog/tags/eip"}],"readingTime":2.73,"hasTruncateMarker":false,"authors":[{"name":"Ben Hutcheson","title":"Maintainer of iscito","url":"https://github.com/hutcheb","imageURL":"https://github.com/hutcheb.png","key":"hutcheb"}],"frontMatter":{"slug":"PLC4X OPCUA Server","title":"PLC4X OPCUA Server","authors":"hutcheb","tags":["plc4x","opcua","modbus","s7","ads","eip"]},"nextItem":{"title":"PLC4X Kafka Integration","permalink":"/blog/PLC4X Kafka Integration"}},"content":"The PLC4X OPC-UA Server is an integration with the PLC4X\\nstack which allows for communication via a number of industrial\\nprotocols, and the Eclipse Milo OPC-UA server stack.\\nThis allows you to make available via OPC-UA time series data points \\nusing any of these protocols:-\\n- Modbus\\n- Ethernet/IP (Including Rockwell)\\n- ADS (Beckhoff)\\n- S7 (Siemens)\\n- OPCUA\\n- BACNET (Building Automation)\\n- Clipsal C-Bus\\n- CANOpen\\n- KNX (Building Automation)\\n- PROFINET (In Development)\\n- and a simulation device.\\n\\n\\nPLC4X is an industrial communication open source package. It has implementations in\\nJava, Go and C (Java is the most complete, followed by Go and C). The OPC-UA server\\nuses the Java version. \\n\\nOPC-UA is the next iteration of OPC and has a number of benefits. For me the major \\npoints to migrate away from OPC are:-\\n- OPC is based on old technology (DCOM/RPC) which is being phased out by Microsoft.\\n- DCOM has always been difficult to configure to allow remote communication.\\n- OPC is primarily a Microsoft Windows technology.\\n- OPC uses any number and random TCP ports making it hard to configure inter-network\\ncommunication.\\n\\nOPC-UA has been around for a number of years now and is increasing making it\'s way into\\nthe industrial market. Most SCADA packages now support OPC-UA.\\n- OPC-UA uses only one TCP port, which makes firewall configuration simple.\\n- It can be run on linux systems allowing for smaller footprint servers. An example would\\nbe running the PLC4X OPC-UA server on a docker image.\\n- It seems to have a larger code base in the open source community.\\n- As opposed to OPC, OPCUA stacks can be run on the same device as the PLC. Allowing for PLCs\\nto support OPCUA natively (Siemens S7-1500).\\n\\nThe Eclipse Milo OPC-UA stack is an open source stack maintained primarily by Kevin Herron. I believe it is\\nthe OPC-UA stack that the Ignition SCADA package is based on.\\n\\nTo run the [PLC4X server](https://github.com/apache/plc4x), copy the config file from src/main/resources/config.yml and modify it as below.\\nYou\'ll need to build the server from with the plc4j/integrations/opcua-server directory.\\n\\n> mvn install\\n\\nrun the executable:-\\n\\n>    java -jar target/plc4x-opcua-server-0.10.0-SNAPSHOT-uber-jar.jar -c config.yml -i\\n\\nOnce the initial configuration is done via the -i switch, the service can then\\nbe run without interaction. This allows it to be run in terminal, wrapped in a service wrapper, GUI link or docker image;\\nhowever you wish.\\n\\nAn example config file is located in the PLC4X OPC Server Integrations folder.\\n\\n![PLC4X Config file](2022-09-12%2010-46-02.png)\\n\\nA directory to store the certificates needs to be specified.\\nThe connection string syntax can be found at [PLC4X Protocol Syntax](https://plc4x.apache.org),\\nwhich varies depending on the protocol and parameters available.\\n\\nOnce the server is running it can be connected to using the endpoint url \\n>   opc.tcp://localhost:53530/plc4x\\n\\nThe hostname can be any resolvable name for the host. In this example I have used the \\nUA Expert Client, but any client can be used including the PLC4X OPC UA client.\\n\\nOnce connected you\'re able to browse and subscribe to the available tags.\\n\\n![Tag Browsing](2022-09-12%2010-31-45.png)\\n\\nThe next steps are to continue the great work that Chris has put into the discovery and browse api\'s. Integrating this\\ninto the OPC-UA server should allow for the automatic population of the device\'s and addresses."},{"id":"PLC4X Kafka Integration","metadata":{"permalink":"/blog/PLC4X Kafka Integration","editUrl":"https://github.com/iscito/website/tree/main/blog/2022-09-12-plc4x-kafka/2022-09-12-plc4x-kafka.md","source":"@site/blog/2022-09-12-plc4x-kafka/2022-09-12-plc4x-kafka.md","title":"PLC4X Kafka Integration","description":"Outline","date":"2022-09-12T00:00:00.000Z","formattedDate":"September 12, 2022","tags":[{"label":"plc4x","permalink":"/blog/tags/plc-4-x"},{"label":"kafka","permalink":"/blog/tags/kafka"},{"label":"opcua","permalink":"/blog/tags/opcua"},{"label":"modbus","permalink":"/blog/tags/modbus"},{"label":"s7","permalink":"/blog/tags/s-7"},{"label":"ads","permalink":"/blog/tags/ads"},{"label":"eip","permalink":"/blog/tags/eip"}],"readingTime":2.185,"hasTruncateMarker":false,"authors":[{"name":"Ben Hutcheson","title":"Maintainer of iscito","url":"https://github.com/hutcheb","imageURL":"https://github.com/hutcheb.png","key":"hutcheb"}],"frontMatter":{"slug":"PLC4X Kafka Integration","title":"PLC4X Kafka Integration","authors":"hutcheb","tags":["plc4x","kafka","opcua","modbus","s7","ads","eip"]},"prevItem":{"title":"PLC4X OPCUA Server","permalink":"/blog/PLC4X OPCUA Server"}},"content":"### Outline\\n\\nPLC4x is an open source industrial communication protocol package that allows you to pull time series data from\\nPLCs or even SCADA packages. Kafka is an event streaming platform that allows you to publish messages (e.g. JSON messages) and have\\nthem stored in a distributed store called a topic. With the PLC4X Kafka connector you\'re able to read data from a PLC \\nand publish messages to Kafka, and vice versa, you\'re able to read messages from Kafka and write data to PLC tags.\\n\\nApache Kafka has become fairly ubiquitous as the event streaming platform, Azure Events Hub even has a Kafka compatible\\ninterface. This means that you could have a Kafka cluster on premise and then mirror data from it to Azure Events Hub,\\n(or any number of Kafka based cloud platforms e.g. Confluent) which makes it incredibly easy to integrate with other \\nAzure or online services.\\n\\nThe PLC4X Kafka integration is made of a source and sink Kafka Connect worker and allows you to specify any protocol that\\nPLC4X supports e.g. Modbus, OPCUA, S7, Ethernet/IP, more information is available on the [PLC4X Driver Page](https://plc4x.apache.org).\\nThe Connect workers are also made available within the Counfluent Hub for easy download. Additional information is available on how \\nto set it up is available at [PLC4X Kafka Integration](https://plc4x.apache.org).\\n\\nOne of the primary use cases of this is to read time series data from a PLC, do some real time analysis (averaging, \\nforecasting, ML) on it and then send it to a database or back to a PLC/SCADA package.\\n\\nOr you could poll data from an external service (weather forecast, energy price) and then send it \\nto the Kafka cluster and then in turn to a PLC or SCADA system. You could place a Kafka cluster within the integration layer and have Kafka Connect workers \\nperform this reliably and securely.\\n\\nAnother example use case would be to read data from one PLC and have that sent in realtime to another PLC. Although not a\\ntypical way of doing inter-PLC communication, it has the added benefit of having a highly redundant centralized cluster\\nthat is completely customizable. You don\xb4t have to play around with non-native communication protocols for each PLC, \\nyou can just use PLC4X. This also gives you the option to modify the messages or perform analysis before sending to the \\ndestination PLC.\\n\\nOverall having a Kafka cluster or even Azure Events Hub utilizing the PLC4X connectors as part your industrial tech \\nstack has a number of benefits and could be a worthy addition, especially if you are looking at integrating third party \\nservices with SCADA or PLC packages."}]}')}}]);