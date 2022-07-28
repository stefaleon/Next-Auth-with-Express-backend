import axios from 'axios';
import cookie from 'cookie';
import { API_URL } from 'config/index';

export default async function Me(req, res) {
  if (!req.headers.cookie) {
    res.status(401).json({ message: 'Not Authorized' });
    return;
  }

  const { token } = cookie.parse(req.headers.cookie);

  try {
    const axiosRes = await axios.get(`${API_URL}/api/users/me`, {
      headers: {
        Authorization: token,
      },
    });
    res.status(200).json({ data: axiosRes.data });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: 'Not Authorized', error });
  }
}
