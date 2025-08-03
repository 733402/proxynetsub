import cookie from 'cookie';

export function getUser(req) {
  const cookies = cookie.parse(req.headers.cookie || "");
  if (!cookies.user) return null;
  try {
    return JSON.parse(cookies.user);
  } catch {
    return null;
  }
}
