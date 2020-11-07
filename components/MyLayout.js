import Header from './Header';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Layout = props => {
  
  const router = useRouter();
  const pageName = router.pathname.substring(1).toLowerCase()
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  return(
    <div>
      <Head>
        <title>Michael's {pageName}</title>
      </Head>
      <Header />
      {props.children}
    </div>  
  );
};

export default Layout;