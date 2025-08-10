# DevOps Training Node.js App

A simple Node.js/Express web application for DevOps training. It features:

- Landing page with "Enter Training" button
- Tools grid with 8 DevOps tool logos (Git, Jenkins, Docker, Kubernetes, AWS, Ansible, Grafana, Prometheus), each linking to their official site
- All static assets (logos) served from the app
- Modern, clean UI
- Dockerfile and multi-stage Dockerfile for production deployment
- Automated tests with Jest and Supertest

## Badges

![Node.js CI](https://img.shields.io/badge/node.js-20%2B-brightgreen)
![Docker](https://img.shields.io/badge/docker-ready-blue)
![Jest](https://img.shields.io/badge/tests-passing-brightgreen)

## Features
- Node.js/Express web app
- EJS templating
- DevOps tool grid with logos and links
- Modern CSS UI
- Automated tests (Jest + Supertest)
- Docker & multi-stage Docker support
- Jenkinsfile for CI/CD

## Getting Started

### Prerequisites
- Node.js 20+
- npm
- Docker (optional, for containerized deployment)

### Install & Run Locally
```bash
npm install
npm start
```
Visit [http://localhost:3000](http://localhost:3000)

### Download Logos
Logos are downloaded automatically by running:
```bash
chmod +x download-logos.sh && ./download-logos.sh
```

### Run Tests
```bash
npm test
```

### Docker Build & Run
#### Single-stage
```bash
docker build -t devops-training-nodejs .
docker run -d -p 3000:3000 devops-training-nodejs
```

#### Multi-stage
```bash
chmod +x download-logos.sh && ./download-logos.sh
docker build -f Dockerfile.multi-stage -t devops-training-nodejs-multi .
docker run -d -p 3001:3000 devops-training-nodejs-multi
```

## CI/CD

This project includes a Jenkinsfile for automated CI/CD. The pipeline performs:
- Checkout
- Dependency install
- Logo download
- Automated tests (Jest)
- Docker and multi-stage Docker builds

To use, configure your Jenkins job to use this repository and a Docker-enabled agent.

## Project Structure
- `server.js` - Main Express server
- `views/` - EJS templates
- `public/assets/` - Static files (CSS, images)
- `download-logos.sh` - Script to fetch DevOps tool logos
- `Dockerfile` - Single-stage production build
- `Dockerfile.multi-stage` - Multi-stage production build
- `test/` - Automated tests
