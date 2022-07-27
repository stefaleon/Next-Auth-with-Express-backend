import Link from 'next/link';

export default function Header() {
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
          <li>
            <Link href='/protected'>
              <a>Protected</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href='/auth/login'>
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
