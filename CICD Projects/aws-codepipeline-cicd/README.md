# 🚀 AWS CodePipeline CI/CD Project

## 📌 Project Overview
This project demonstrates a complete CI/CD pipeline using:

- AWS CodePipeline
- AWS CodeBuild
- AWS CodeDeploy
- Amazon EC2
- GitHub

The pipeline automatically builds and deploys a Java application.

---

## 🏗️ Architecture

GitHub → CodePipeline → CodeBuild → CodeDeploy → EC2

---

## ⚙️ Prerequisites

- AWS Account
- IAM Roles configured
- EC2 with CodeDeploy agent
- Maven project

---

## 📂 Project Structure

src/ → Application code  
scripts/ → Deployment scripts  
buildspec.yml → Build steps  
appspec.yml → Deployment steps  

---

## 🚀 How It Works

1. Push code to GitHub
2. CodePipeline triggers automatically
3. CodeBuild builds the JAR
4. CodeDeploy deploys to EC2

---

## ☁️ AWS Setup – Step by Step

## 1️⃣ Create CodeCommit / GitHub Repo

Push this project:

git init
git add .
git commit -m "Initial Commit"
git remote add origin <repo-url>
git push -u origin main

---

## 2️⃣ Create EC2 for Deployment

Launch Amazon Linux EC2

Install CodeDeploy agent:

sudo yum update
sudo yum install ruby
wget https://aws-codedeploy-region.s3.region.amazonaws.com/latest/install
chmod +x install
sudo ./install auto

Attach IAM Role → AmazonEC2RoleforAWSCodeDeploy

---

## 3️⃣ Create CodeDeploy

Application → EC2/On-premises

Deployment group → Select EC2 tag

---

## 4️⃣ Create CodeBuild

Environment:

Managed image

Amazon Linux

Runtime → Corretto 11

---

## 5️⃣ Create CodePipeline

Stages:

Source → GitHub / CodeCommit

Build → CodeBuild

Deploy → CodeDeploy

---

## 🔄 Pipeline Flow

Developer Push → GitHub
        ↓
AWS CodePipeline Triggered
        ↓
CodeBuild → Build JAR
        ↓
CodeDeploy → Deploy to EC2
        ↓
Application Live 🎉

---

## 👨‍💻 Author


Mr.Aniket Firke
