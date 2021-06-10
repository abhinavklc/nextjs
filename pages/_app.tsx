import { AppProps } from 'next/app';
import Layout from '../components/layout';
import '../styles/index.scss';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Layout>
      <div className="page_content">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
};

export default MyApp;
