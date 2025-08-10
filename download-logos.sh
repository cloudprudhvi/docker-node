#!/bin/bash
set -e
cd "$(dirname "$0")/public/assets/images"

wget -O git-logo.png https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original-wordmark.svg
wget -O jenkins-logo.png https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg
wget -O docker-logo.png https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg
wget -O kubernetes-logo.png https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain-wordmark.svg
wget -O aws-logo.png https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg
wget -O ansible-logo.png https://raw.githubusercontent.com/devicons/devicon/master/icons/ansible/ansible-original-wordmark.svg
wget -O grafana-logo.png https://raw.githubusercontent.com/gilbarbara/logos/master/logos/grafana.svg
wget -O prometheus-logo.png https://raw.githubusercontent.com/gilbarbara/logos/master/logos/prometheus.svg
