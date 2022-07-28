import axios from 'axios';
import { API_URL } from 'config/index';

export default async function register(req, res) {
  try {
    // using the Basic Express external API, register with POST to /api/users
    const axiosRes = await axios.post(`${API_URL}/api/users`, req.body);
    res.status(200).json(axiosRes.data);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Register failed', error });
  }
}
