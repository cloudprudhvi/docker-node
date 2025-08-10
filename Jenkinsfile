pipeline {
    agent any
    environment {
        NODE_ENV = 'production'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Download Logos') {
            steps {
                sh 'chmod +x download-logos.sh && ./download-logos.sh'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t devops-training-nodejs .' 
            }
        }
        stage('Build Multi-Stage Docker Image') {
            steps {
                sh 'docker build -f Dockerfile.multi-stage -t devops-training-nodejs-multi .'
            }
        }
    }
    post {
        always {
            junit '**/test-results.xml'
        }
    }
}
