import { useContext } from 'react';
import Link from 'next/link';
import AuthContext from 'context/AuthContext';

export default function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>Next Auth</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          {user && (
            <li>
              <Link href='/protected'>
                <a>Protected</a>
              </Link>
            </li>
          )}
        </ul>
        <ul>
          {user ? (
            <li>
              <button id='logout-button' onClick={() => logout()}>
                Logout
              </button>
            </li>
          ) : (
            <li>
              <Link href='/auth/login'>
                <a>Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
