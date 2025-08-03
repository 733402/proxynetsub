import cookie from 'cookie';

export default async function handler(req, res) {
  const code = req.query.code;
  const tokenRes = await fetch("https://discord.com/api/oauth2/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: "authorization_code",
      code,
      redirect_uri: process.env.REDIRECT_URI
    })
  });
  const tokenData = await tokenRes.json();

  const userRes = await fetch("https://discord.com/api/users/@me", {
    headers: { Authorization: `Bearer ${tokenData.access_token}` }
  });
  const user = await userRes.json();

  // Save user info in cookie (JWT preferred for production)
  res.setHeader("Set-Cookie", cookie.serialize("user", JSON.stringify(user), {
    httpOnly: true,
    secure: true,
    maxAge: 3600,
    path: "/"
  }));
  res.redirect("/dashboard");
}
