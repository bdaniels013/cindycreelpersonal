export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }
  const { website, firstName, lastName, email, phone, interest, location, message } = req.body || {};
  if (website) {
    res.status(200).json({ ok: true });
    return;
  }
  const name = [firstName, lastName].filter(Boolean).join(" ");
  const cleanedPhone = String(phone || "").replace(/[^0-9+]/g, "");
  const validEmail = typeof email === "string" && /.+@.+\..+/.test(email);
  const validName = typeof name === "string" && name.trim().length >= 2;
  const validPhone = cleanedPhone.replace(/\D/g, "").length >= 10;
  if (!validName || !validEmail || !validPhone) {
    res.status(400).json({ ok: false });
    return;
  }
  const payload = {
    name,
    email,
    phone: cleanedPhone,
    interest: interest || null,
    location: location || null,
    message: message || null,
    receivedAt: new Date().toISOString(),
  };
  try {
    if (process.env.LEAD_WEBHOOK_URL) {
      await fetch(process.env.LEAD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }
    console.log("Lead", payload);
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(200).json({ ok: true });
  }
}
