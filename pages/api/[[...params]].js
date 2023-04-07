export default function handler(req, res) {
  const params = req.query.params;
  if (!params) {
    res.status(200).json({ message: "Found nothing" });
  }
  res.status(200).json(params);
}
