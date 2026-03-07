
# 🚀 CI/CD Projects Portfolio

Welcome to the **CI/CD Projects Repository** — a hands-on DevOps portfolio showcasing real-world Continuous Integration and Continuous Deployment implementations using AWS, Docker, Kubernetes, and Infrastructure as Code.

This repository demonstrates production-style deployment workflows from development to monitoring with zero-downtime strategies.

---

# 🌟 Repository Highlights

- 🔄 Fully Automated CI/CD Pipelines  
- 🐳 Containerized Application Deployments  
- ☁️ AWS Cloud-Native Architecture  
- 🏗️ Infrastructure as Code (Terraform)  
- 🔵🟢 Blue-Green Deployment Strategy  
- 📊 Monitoring, Logging & Observability  
- 🚀 Zero-Downtime Release Management  

---

# 📁 Projects Overview

| # | Project | Core Focus |
|---|----------|------------|
| 1 | AWS CodePipeline for Automated Deployments| CI/CD pipeline using CodePipeline, CodeBuild, and CodeDeploy to automatically build and deploy applications to AWS |
| 2 | GitHub Actions + AWS ECS (Fargate) Deployment| Automating Docker build, push to ECR, and deployment to ECS Fargate using GitHub Actions |
| 3 | Jenkins CI/CD with Terraform on AWS| Infrastructure provisioning with Terraform and automated build/deploy pipelines using Jenkins |
| 4 | Kubernetes GitOps with ArgoCD on AWS EKS | Continuous delivery using GitOps principles with ArgoCD managing Kubernetes deployments on EKS |
| 5 | Lambda-Based Serverless CI/CD on AWS | Event-driven CI/CD pipeline using AWS Lambda, S3, and other serverless services |
| 6 | Multi-Account CI/CD Pipeline with AWS CodePipeline | Secure CI/CD across multiple AWS accounts using cross-account roles and CodePipeline |
| 7 | Containerized Deployment with AWS Fargate | Building Docker images, storing in ECR, and running containers serverlessly using ECS Fargate |
| 8 | Blue-Green Deployment on AWS ECS| Zero-downtime deployment strategy on ECS using CodeDeploy blue-green deployment |

---
# 🏗️ Project 1: AWS CodePipeline for Automated Deployments

### 🎯 Objective
Automate the application build and deployment process using AWS CodePipeline for continuous integration and delivery.

### 🛠️ Tools
- AWS CodePipeline  
- AWS CodeBuild  
- AWS CodeDeploy  
- Amazon EC2  
- GitHub  

### 🔄 Architecture Flow

```mermaid
flowchart LR
    A[Developer Push Code] --> B[GitHub Repository]
    B --> C[AWS CodePipeline Triggered]
    C --> D[CodeBuild Build Stage]
    D --> E[CodeDeploy Deploy to EC2]
    E --> F[Application Live]
```
---


# ⚙️ Project 2: GitHub Actions + AWS ECS (Fargate) Deployment

### 🎯 Objective

Automate Docker build and deployment to AWS ECS Fargate using GitHub Actions.

### 🔄 Pipeline Flow

```mermaid
flowchart LR
    A[Code Push] -->|Trigger| B[GitHub Actions]
    B --> C[Build Docker Image]
    C --> D[Push Image to Amazon ECR]
    D --> E[Deploy to ECS Fargate]

    style A fill:#ffcc00,stroke:#333
    style B fill:#00c3ff,stroke:#333
    style C fill:#28a745,stroke:#333
    style D fill:#ff5733,stroke:#333
    style E fill:#8e44ad,stroke:#333
```
---

# 🐳 Project 3: Jenkins CI/CD with Terraform on AWS

### 🎯 Objective

Automate infrastructure provisioning using Terraform and implement CI/CD pipelines with Jenkins on AWS.

```mermaid
flowchart LR
    A[Developer Push Code] --> B[Jenkins Pipeline Triggered]
    B --> C[Terraform Init & Plan]
    C --> D[Terraform Apply]
    D --> E[AWS Infrastructure Provisioned]
```

---

# ☸️ Project 4: Kubernetes GitOps with ArgoCD on AWS EKS

### 🎯 Objective

Implement GitOps-based continuous deployment using ArgoCD to automatically sync Kubernetes applications on AWS EKS.

```mermaid
flowchart LR
    A[Developer Push Code] --> B[GitHub Repository]
    B --> C[ArgoCD Detects Changes]
    C --> D[Sync to EKS Cluster]
    D --> E[Kubernetes Pods Updated]
```

---

# 🏗️ Project 5: Lambda-Based Serverless CI/CD on AWS

### 🎯 Objective

Implement a serverless CI/CD pipeline using AWS Lambda to automate deployment workflows.

```mermaid
flowchart LR
    A[Developer Push Code] --> B[GitHub / CodeCommit]
    B --> C[EventBridge Trigger]
    C --> D[AWS CodePipeline]
    D --> E[Deploy to AWS Lambda]
    E --> F[Application Running]
```

---

# 🚀 Project 6: Multi-Account CI/CD Pipeline with AWS CodePipeline

### 🎯 Objective

Implement a secure CI/CD pipeline that deploys applications across multiple AWS accounts (Dev, Staging, Production).

```mermaid
flowchart LR
    A[Developer Push Code] --> B[Source Repository]
    B --> C[AWS CodePipeline]
    C --> D[Build in Management Account]
    D --> E[Deploy to Staging Account]
    E --> F[Manual Approval]
    F --> G[Deploy to Production Account]
```

---

# 📊 Project 7: Containerized Deployment with AWS Fargate

### 🎯 Objective

Deploy containerized applications on AWS Fargate without managing underlying servers.

```mermaid
flowchart LR
    A[Application Code] --> B[Docker Build]
    B --> C[Push Image to Amazon ECR]
    C --> D[ECS Task Definition]
    D --> E[Fargate Launch]
    E --> F[Application Running]
```

---

# 🔵🟢 Project 8: Blue-Green Deployment on AWS ECS

### 🎯 Objective

Deploy new application versions with zero downtime using Blue-Green deployment strategy on AWS ECS.

```mermaid
flowchart LR
    A[Users] --> B[Application Load Balancer]
    B --> C[Blue Environment - Current Version]
    B -.Traffic Shift.-> D[Green Environment - New Version]

    style C fill:#3498db,stroke:#000,color:#fff
    style D fill:#2ecc71,stroke:#000,color:#fff
```

---


# 🧠 DevOps Skills Demonstrated

* AWS CodePipeline for Automated Deployments
* GitHub Actions CI/CD with AWS ECS (Fargate)
* Jenkins CI/CD Pipeline with Terraform on AWS
* Kubernetes GitOps Deployment using ArgoCD on AWS EKS
* Serverless CI/CD using AWS Lambda
* Multi-Account CI/CD Pipeline with AWS CodePipeline
* Containerized Deployment using Docker, ECR, and AWS Fargate
* Blue-Green Deployment Strategy on AWS ECS

---

# 📌 CI/CD Master Flow

```mermaid
flowchart LR
    A[Developer Push Code] --> B[Version Control - GitHub]
    B --> C[CI Pipeline Triggered]
    C --> D[Build & Test]
    D --> E[Docker Container Build]
    E --> F[Push to Container Registry]
    F --> G[Deploy to Cloud Infrastructure]
    G --> H[Monitoring & Logging]
    H --> I[Rollback if Failure]

    style A fill:#f39c12,stroke:#333,color:#fff
    style B fill:#3498db,stroke:#333,color:#fff
    style C fill:#9b59b6,stroke:#333,color:#fff
    style D fill:#1abc9c,stroke:#333,color:#fff
    style E fill:#e67e22,stroke:#333,color:#fff
    style F fill:#2ecc71,stroke:#333,color:#fff
    style G fill:#16a085,stroke:#333,color:#fff
    style H fill:#2980b9,stroke:#333,color:#fff
    style I fill:#e74c3c,stroke:#333,color:#fff
```
---

# 👨‍💻 Author
<a href = "https://cinch-revamp-60906406.figma.site/"> Mr.Aniket A Firke</a>
<br>
DevOps & Cloud Engineer
<br>
CI/CD Enthusiast
<br>
AWS Practitioner

---

⭐ If this repository helped you, consider starring the project!

Happy Deploying 🚀



Just tell me which one you want 👌

