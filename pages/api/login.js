import axios from 'axios';
import { API_URL } from 'config/index';

export default async function login(req, res) {
  try {
    // using the Basic Express external API, register with POST to /api/users/login
    const axiosRes = await axios.post(`${API_URL}/api/users/login`, req.body);
    res.status(200).json(axiosRes.data);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Login failed', error });
  }
}
