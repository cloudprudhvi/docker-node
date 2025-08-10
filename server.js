const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const TOOLS = [
  { name: 'Git', logo: 'git-logo.png', url: 'https://git-scm.com/' },
  { name: 'Jenkins', logo: 'jenkins-logo.png', url: 'https://www.jenkins.io/' },
  { name: 'Docker', logo: 'docker-logo.png', url: 'https://www.docker.com/' },
  { name: 'Kubernetes', logo: 'kubernetes-logo.png', url: 'https://kubernetes.io/' },
  { name: 'AWS', logo: 'aws-logo.png', url: 'https://aws.amazon.com/' },
  { name: 'Ansible', logo: 'ansible-logo.png', url: 'https://www.ansible.com/' },
  { name: 'Grafana', logo: 'grafana-logo.png', url: 'https://grafana.com/' },
  { name: 'Prometheus', logo: 'prometheus-logo.png', url: 'https://prometheus.io/' },
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/tools', (req, res) => {
  res.render('tools', { tools: TOOLS });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
