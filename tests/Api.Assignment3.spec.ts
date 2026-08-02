import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.API_KEY;
const baseUrl = 'https://reqres.in';

test('Get user profile success', async ({ request }) => {

  // Send GET request
  const response = await request.get(`${baseUrl}/api/users/12`, {
    headers: {
      'x-api-key': API_KEY!,
    },
  });

  // Verify response status code
  expect(response.status()).toBe(200);

  // Get response body
  const body = await response.json();

  // Verify response body
  expect(body.data.id).toBe(12);
  expect(body.data.email).toBe('rachel.howell@reqres.in');
  expect(body.data.first_name).toBe('Rachel');
  expect(body.data.last_name).toBe('Howell');
  expect(body.data.avatar).toBe('https://reqres.in/img/faces/12-image.jpg');
});


test('Get user profile but user not found', async ({ request }) => {

    const response = await request.get(`${baseUrl}/api/users/1234`, {
        headers: {
            'x-api-key': API_KEY!
        }
    });

    // Verify status code
    expect(response.status()).toBe(404);

    // Verify response body
    const body = await response.json();

    expect(body).toEqual({});
});