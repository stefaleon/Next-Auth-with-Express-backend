import axios from 'axios';
import cookie from 'cookie';
import { API_URL } from 'config/index';

export default async function login(req, res) {
  try {
    // using the Basic Express external API, register with POST to /api/users/login
    const axiosRes = await axios.post(`${API_URL}/api/users/login`, req.body);
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('token', axiosRes.data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60 * 6, // 6 hours
        sameSite: 'strict',
        path: '/',
      })
    );
    res.status(200).json(axiosRes.data);
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Login failed', error });
  }
}
