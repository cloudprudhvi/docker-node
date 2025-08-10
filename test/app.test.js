const request = require('supertest');
const express = require('express');
let app;

describe('DevOps Training Node.js App', () => {
  beforeAll(() => {
    app = require('../server');
  });

  it('should render the home page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('DevOps Training');
    expect(res.text).toContain('Enter Training');
  });

  it('should render the tools page', async () => {
    const res = await request(app).get('/tools');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('DevOps Tools');
    expect(res.text).toContain('Git');
    expect(res.text).toContain('Jenkins');
    expect(res.text).toContain('Docker');
    expect(res.text).toContain('Kubernetes');
    expect(res.text).toContain('AWS');
    expect(res.text).toContain('Ansible');
    expect(res.text).toContain('Grafana');
    expect(res.text).toContain('Prometheus');
  });

  it('should serve a logo image', async () => {
    const res = await request(app).get('/assets/images/docker-logo.png');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/image/);
  });
});
