// This is a serverless function (lamda function)

export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}