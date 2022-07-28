export default async function checkCookie(req, res) {
  res.status(200).json({ cookie: req.headers.cookie });
}
