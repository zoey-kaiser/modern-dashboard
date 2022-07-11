import DefaultLayout from '../layouts/DefaultLayout';

const Home: NextPageWithLayout = () => {
    return <div className="container mx-auto text-lg">Boo!</div>;
};

Home.getLayout = function getLayout(page: JSX.Element) {
    return <DefaultLayout>{page}</DefaultLayout>;
};

export default Home;
