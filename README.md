# Cloud Resume Challenge

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## Overview

This repository contains my implementation of the [AWS Cloud Resume Challenge](https://cloudresumechallenge.dev/), a hands-on project designed to help showcase cloud skills. My portfolio is built with modern frontend technologies and deployed using a robust cloud architecture on AWS, demonstrating my skills in both web development and cloud infrastructure.

Visit my portfolio: [yash.dev](https://yash.dev)

## 📋 Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Interactive UI**: Smooth animations and transitions enhanced with Framer Motion
- **Dynamic Content**: Project showcase, skills and certification displays
- **Visitor Counter**: Tracks and displays site visitors using AWS backend
- **Dark/Light Mode**: Automatically adapts to system preferences

## 🏗️ Architecture

This project implements a serverless architecture on AWS:

```
                      +------------+
                      |  Route 53  |
                      +------------+
                            |
                            v
                      +------------+
                      | CloudFront |
                      +------------+
                            |
                            v
                      +------------+
                      |     S3     |
                      +------------+
                            |
                            v
+------------+        +------------+        +------------+
|    API     |------->|   Lambda   |------->|  DynamoDB  |
| Gateway    |        | Function   |        |            |
+------------+        +------------+        +------------+
```

## 🛠️ Technologies Used

### Frontend
- **React**: UI component library
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Vite**: Next-generation frontend tooling

### Backend
- **AWS Lambda**: Serverless function for visitor counter
- **DynamoDB**: NoSQL database for storing visitor count
- **API Gateway**: RESTful API endpoints
- **S3**: Static website hosting
- **CloudFront**: Content delivery network
- **Route 53**: DNS management
- **Certificate Manager**: SSL/TLS certificates

### DevOps
- **GitHub Actions**: CI/CD pipeline
- **AWS CLI**: Infrastructure automation
- **AWS SDK**: Programmatic access to AWS services

## 🚀 CI/CD Pipeline

This project uses GitHub Actions for continuous integration and continuous deployment:

1. **Automated Testing**: Runs tests on code changes
2. **Build Process**: Compiles and bundles the application
3. **S3 Deployment**: Pushes built files to S3 bucket
4. **CloudFront Invalidation**: Ensures the newest content is served to visitors

## 📝 Implementation Details

### Frontend
- Single-page application built with React and TypeScript
- Responsive design with Tailwind CSS
- Interactive animations with Framer Motion
- Optimized for performance and accessibility

### Backend
- Lambda function to handle visitor counter API
- DynamoDB table to persistently store visitor count
- API Gateway configured with CORS support

### Infrastructure
- S3 bucket configured for static website hosting
- CloudFront distribution for global content delivery
- Domain configuration with Route 53
- SSL/TLS certificate for secure HTTPS connection

## 🧠 What I Learned

- Building serverless applications on AWS
- Setting up CI/CD pipelines with GitHub Actions
- Managing infrastructure as code
- Implementing secure and scalable web applications
- Optimizing website performance and user experience

## 🏁 Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- AWS CLI (configured with appropriate credentials)

### Local Development

```bash
# Clone the repository
git clone https://github.com/yashbiyani/cloud-canvas-motion-folio.git
cd cloud-canvas-motion-folio

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Deployment

The project is automatically deployed when changes are pushed to the main branch. To manually deploy:

```bash
# Build the project
npm run build

# Deploy to AWS (requires AWS CLI and credentials)
aws s3 sync dist/ s3://your-bucket-name --delete
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [Cloud Resume Challenge](https://cloudresumechallenge.dev/) for the project idea
- AWS for the cloud infrastructure
- The amazing open-source community for the tools and libraries used in this project
