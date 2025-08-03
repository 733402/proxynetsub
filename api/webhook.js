export default async function handler(req, res) {
  const { user, type, fields } = req.body;

  const description = Object.entries(fields)
    .map(([key, value]) => `**${key}:** ${value}`)
    .join('\n');

  await fetch(process.env.DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      embeds: [{
        title: `New ${type} submission`,
        description,
        color: 0x5865F2,
        footer: { text: `From ${user.username}#${user.discriminator} (${user.id})` },
        timestamp: new Date()
      }]
    })
  });

  res.status(200).json({ success: true });
}
