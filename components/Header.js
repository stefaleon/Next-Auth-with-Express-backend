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
            <li id='email-logout-container'>
              <div id='user-email'>{user.email}</div>
              <div>
                <button id='logout-button' onClick={() => logout()}>
                  Logout
                </button>
              </div>
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
