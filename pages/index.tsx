    import { Main } from '../src/pages/Main/ui/Main'
    import { Layout } from '../src/widgets/layout/Layout';

    import { FC } from 'react';
    import { GetServerSideProps } from 'next';
    import { CatalogueState } from '../types/catalogue_data';
    import { NewsState } from '../types/news_data';


    export const getServerSideProps: GetServerSideProps = async () => {

        try {
            const res1 = await fetch(`http://localhost:3000/api/catalogue`)
            const catalogue = await res1.json()


            const res2 = await fetch(`http://localhost:3000/api/news`)
            const news = await res2.json()
            return { props: { catalogue, news } }




        } catch (err) {
            return { props: { 
                catalogue: { items: null, totalCount: null },
                news:  { items: null, totalCount: null }
            } }
        }
    }

    type Props = {
        catalogue: CatalogueState
        news: NewsState
    }

    const Home: FC<Props> = ({ catalogue, news }) => <Layout> <Main catalogue={catalogue} news={news}/> </Layout> 
    export default Home