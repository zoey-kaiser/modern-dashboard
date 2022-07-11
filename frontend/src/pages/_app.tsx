import '../styles/globals.css';
import '../styles/preflight.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page: JSX.Element) => page);

    return getLayout(<Component {...pageProps} />);
}

export default MyApp;
