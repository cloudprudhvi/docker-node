# DevOps Training Node.js App

A simple Node.js/Express web application for DevOps training. It features:

- Landing page with "Enter Training" button
- Tools grid with 8 DevOps tool logos (Git, Jenkins, Docker, Kubernetes, AWS, Ansible, Grafana, Prometheus), each linking to their official site
- All static assets (logos) served from the app
- Modern, clean UI
- Dockerfile and multi-stage Dockerfile for production deployment

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

## Project Structure
- `server.js` - Main Express server
- `views/` - EJS templates
- `public/assets/` - Static files (CSS, images)
- `download-logos.sh` - Script to fetch DevOps tool logos
- `Dockerfile` - Single-stage production build
- `Dockerfile.multi-stage` - Multi-stage production build

## License
MIT
