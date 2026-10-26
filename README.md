# AWS Certified Solutions Architect – Associate (SAA-C03) Handbook

![AWS](https://img.shields.io/badge/AWS-Solutions_Architect_Associate-FF9900?logo=amazonwebservices&logoColor=white) ![Exam](https://img.shields.io/badge/Exam-SAA--C03-232F3E?logo=amazonwebservices&logoColor=white) ![AWS CLI](https://img.shields.io/badge/AWS_CLI-v2-527FFF?logo=gnubash&logoColor=white) ![Diagrams](https://img.shields.io/badge/Diagrams-Miro-050038?logo=miro&logoColor=white)

Study notes and diagrams for the **AWS Certified Solutions Architect – Associate (SAA-C03)** exam, written as a topic-by-topic **handbook**: the key ideas, the exam scenarios and a diagram for every architecture that is easier to see than to read. Hands-on **labs**, built in a real AWS account, sit alongside the notes.

> [!NOTE]
> Personal study notes, written in my own words and checked against the AWS documentation. Third-party course materials belong to their authors and are not stored in this repo.

[Topics](#topics) · [Labs](#labs) · [Find things](#how-to-find-things) · [Templates](#templates) · [VS Code setup](#writing-notes-in-vs-code) · [License](#license)

## Repository layout

Notes and labs each have their own folder. Every topic and lab folder has a `README.md` index and keeps its images in `attachments/`.

```text
aws-saa-c03-handbook/
├── README.md                 ← you are here
├── LICENSE
├── .vscode/                  ← shared editor settings
├── notes/                    ← topic notes (main content)
│   ├── 01-cloud-fundamentals/
│   │   ├── README.md         ← topic index
│   │   ├── global-infrastructure.md
│   │   └── attachments/      ← diagrams
│   ├── 02-iam/
│   └── ...
├── labs/                     ← hands-on walkthroughs
│   ├── README.md             ← lab index
│   └── NN-what-it-builds/
│       ├── README.md
│       └── attachments/      ← console screenshots
└── templates/                ← starting points for new files
    ├── note.md
    └── lab.md
```

## Topics

Numbered in learning order, from the AWS global infrastructure to exam day. Each topic links to an index of its notes.

1. **[Cloud Fundamentals](notes/01-cloud-fundamentals/README.md)** → The exam, cloud computing basics, and AWS Regions, Availability Zones and edge locations.
2. **[IAM](notes/02-iam/README.md)** → Users, groups, roles and policies, MFA, and the ways to access AWS.
3. **[Amazon EC2](notes/03-ec2/README.md)** → Instance types, security groups, purchasing options, IP addressing, placement groups and hibernation.
4. **[EC2 Storage](notes/04-ec2-storage/README.md)** → EBS volumes and snapshots, AMIs, instance store and Amazon EFS.
5. **[High Availability and Scaling](notes/05-high-availability-and-scaling/README.md)** → Elastic Load Balancing and Auto Scaling groups.
6. **[RDS, Aurora and ElastiCache](notes/06-rds-aurora-elasticache/README.md)** → Managed relational databases, read replicas, Multi-AZ and caching.
7. **[Route 53](notes/07-route-53/README.md)** → DNS, hosted zones, health checks and routing policies.
8. **[Classic Architectures](notes/08-classic-architectures/README.md)** → Worked designs that grow from one instance to a scalable, stateful web app.
9. **[Amazon S3](notes/09-s3/README.md)** → Buckets and objects, storage classes, replication, performance and security.
10. **[CloudFront and Global Accelerator](notes/10-cloudfront-and-global-accelerator/README.md)** → Caching at the edge and routing over the AWS global network.
11. **[Storage Extras](notes/11-storage-extras/README.md)** → The Snow family, FSx, Storage Gateway, DataSync and Transfer Family.
12. **[Integration and Messaging](notes/12-integration-and-messaging/README.md)** → SQS, SNS, Kinesis, Amazon MQ and decoupling patterns.
13. **[Containers](notes/13-containers/README.md)** → ECS, Fargate, ECR, EKS and App Runner.
14. **[Serverless](notes/14-serverless/README.md)** → Lambda, DynamoDB, API Gateway, Step Functions and Cognito.
15. **[Serverless Architectures](notes/15-serverless-architectures/README.md)** → Worked serverless designs: mobile apps, websites and microservices.
16. **[Databases](notes/16-databases/README.md)** → Choosing the right database for each kind of workload.
17. **[Data and Analytics](notes/17-data-and-analytics/README.md)** → Athena, Redshift, OpenSearch, EMR, Glue, Lake Formation and streaming analytics.
18. **[Machine Learning](notes/18-machine-learning/README.md)** → The managed AI services and what each one is for.
19. **[Monitoring and Audit](notes/19-monitoring-and-audit/README.md)** → CloudWatch, EventBridge, CloudTrail and AWS Config.
20. **[Advanced Identity](notes/20-advanced-identity/README.md)** → Organizations, SCPs, IAM Identity Center and directory services.
21. **[Security and Encryption](notes/21-security-and-encryption/README.md)** → KMS, secrets, certificates, WAF, Shield and the threat-detection services.
22. **[Amazon VPC](notes/22-vpc/README.md)** → Subnets, routing, gateways, endpoints, peering and hybrid connectivity.
23. **[Disaster Recovery and Migration](notes/23-disaster-recovery-and-migration/README.md)** → RPO and RTO, DR strategies, backups and moving workloads to AWS.
24. **[More Architectures](notes/24-more-architectures/README.md)** → Event processing, caching, IP blocking and high-performance designs.
25. **[Other Services](notes/25-other-services/README.md)** → CloudFormation, Systems Manager, Batch, Amplify and other services worth knowing.
26. **[Well-Architected](notes/26-well-architected/README.md)** → The six pillars, the Well-Architected Tool and Trusted Advisor.
27. **[Exam Preparation](notes/27-exam-preparation/README.md)** → Exam strategy and a one-page service cheat sheet.

## Labs

Notes explain a subject for the exam; [labs](labs/README.md) build it step by step in a real AWS account, with screenshots, a cost warning and clean-up steps. Each lab links to the notes it puts into practice. Labs are added as they are done.

- **Where:** a personal AWS account, in Asia Pacific (Singapore), `ap-southeast-1`.
- **Tools:** the AWS console, and the AWS CLI v2 where a step is quicker from the terminal.

## How to find things

Browse by topic, skim a note, or search across everything.

- **Browse:** open a topic folder → its `README.md` lists every note. The [lab index](labs/README.md) lists every lab.
- **Skim:** every note uses the same headings — *Key ideas, Related, References* — and ends its *Key ideas* with *Exam scenarios*. Each topic's `README.md` also has a *Quick reference* listing the exam keywords that point to each service.
- **Search in VS Code:** <kbd>Cmd + Shift + F</kbd> → searches every note at once.
- **Search on GitHub:** type `repo:yx-elite/aws-saa-c03-handbook "read replica"` in the top search bar.
- **Search from the terminal:** run this in the repo folder.

```bash
grep -rn --include='*.md' 'read replica' notes/ labs/
```

## Templates

Start every new note or lab from a template, so it already has the standard headings.

- [`templates/note.md`](templates/note.md) → a topic note: *Key ideas, Related, References*.
- [`templates/lab.md`](templates/lab.md) → a lab: *Goal, Cost and clean-up, Before starting, Steps, Check it works, Clean up, What this showed*.

To use it, copy it into the topic folder, rename it and replace the placeholder text:

```bash
cp templates/note.md notes/09-s3/s3-versioning.md
```

Then add the note to the topic's `README.md`, or the lab to [`labs/README.md`](labs/README.md).

## Writing notes in VS Code

The repo includes VS Code settings (`.vscode/settings.json`) and recommended extensions (`.vscode/extensions.json`). Open the folder and install the extensions when VS Code asks. Then:

- **Paste a screenshot:** <kbd>Cmd + V</kbd> in a lab → VS Code saves it into `attachments/` and writes the image link for you.
- **Preview like GitHub:** <kbd>Cmd + Shift + V</kbd> → preview, or <kbd>Cmd + K V</kbd> → side-by-side.
- **Move or rename a note** → links that point to it update automatically.

## License

[MIT License](LICENSE) — free to reuse the notes with credit. Third-party materials are not included and belong to their authors. AWS and the AWS logo are trademarks of Amazon.com, Inc. or its affiliates; this is an unofficial study resource.

All diagrams are drawn in [Miro](https://miro.com).
