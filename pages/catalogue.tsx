  import { FC } from 'react';
  import { Catalogue } from '../src/pages/Catalogue/ui/Catalogue'
  import { GetServerSideProps } from 'next';
  import { CatalogueState } from '../types/catalogue_data';
  import { Layout } from '../src/widgets/layout/Layout';







  export const getServerSideProps: GetServerSideProps = async () => {

    try {
      const res = await fetch(`http://localhost:3000/api/catalogue`)
      const data = await res.json()
      return { props: { data } }

    } catch (err) {
      return { props: { data: {items: null, totalCount: null} } }
    }

  }


  type Props = {
    data: CatalogueState
  }


  const Home: FC<Props> = ({ data }) => <Layout>  <Catalogue data={data}/>  </Layout>
  export default Home