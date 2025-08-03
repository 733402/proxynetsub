export default function handler(req, res) {
  const redirectUri = encodeURIComponent(process.env.REDIRECT_URI);
  const clientId = process.env.DISCORD_CLIENT_ID;
  const scope = "identify";
  res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`);
}
