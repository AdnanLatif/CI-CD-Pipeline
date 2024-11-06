const request = require('supertest');
const app = require('../src/index'); // Assuming your server is exported from index.js

describe('GET /', () => {
  it('should return status 200 and "Hello, World from the backend!"', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200); // Check if status is 200
    expect(response.text).toBe('Hello, World from the backend!'); // Check if the response body matches
  });
});

describe('Test Server Running', () => {
  it('should return 404 for an undefined route', async () => {
    const response = await request(app).get('/non-existent-route');

    expect(response.status).toBe(404); // Check if status is 404 for undefined routes
  });
});
