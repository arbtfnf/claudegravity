import { supabase } from './supabaseClient';

export async function fetchWithAuth(url, options = {}) {
  const { data: { session } } = await supabase.auth.getSession();
  const token = session?.access_token || 'mock-demo-token';

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    'Authorization': `Bearer ${token}`
  };

  return fetch(url, {
    ...options,
    headers
  });
}
