import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ title, description, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <div className='container'>{children}</div>

      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: 'Next Auth',
  description: 'User Authentication & Authorization',
  keywords: 'nextjs, authentication, authorization',
};
