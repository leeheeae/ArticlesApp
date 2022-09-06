import client from './client';

export async function register(params) {
  const response = await client.post('/auth/local/register', params);
  return response.data;
}

export async function login(params) {
  const response = await client.post('/auth/local', params);
  return response.data;
}

export async function getLoginStatus() {
  const response = await client.get('/users/me');
  return response.data;
}

interface RegisterParams {
  username: string;
  email: string;
  password: string;
}

interface LoginParams {
  indentifier: string;
  password: string;
}
