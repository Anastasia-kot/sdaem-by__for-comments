import React, {  FC } from 'react';
import { New } from '../../src/pages/New/ui/New';
import { sortingNewsPerDate } from '../../src/shared/helpers/sortingFunctions';
import { Layout } from '../../src/widgets/layout/Layout';
import { NewsType } from '../../types/news_data';


export async function getServerSideProps(context: { params: { id: number } }) {
    
    const { id } = context.params;

        const res1 = await fetch(`http://localhost:3000/api/news/${id}`)

        if (res1.status === 404) {

            return { props: { 
                data: { 
                    post: null, 
                    posts: null 
                } }}

        } else {

                const data1 = await res1.json()

  

                // выбираем 3 новости, у которых id не совпадает с URL ID
                const res2 = await fetch(`http://localhost:3000/api/news`)
                const data2 = await res2.json()
                let posts: NewsType[] = []

                for (let i = 0; posts.length < 3; i++) {
                    if (+id !== sortingNewsPerDate([...data2.items])[i].id) {
                        posts = [...posts, sortingNewsPerDate([...data2.items])[i]]
                    }
                }


            return { props: { 
                data: { 
                    post: data1.post, 
                    posts 
                } 
            }}
        }
}

type Props = {
    data: { 
        post: NewsType | null
        posts: NewsType[] | null
    }  
}


const NewCard: FC<Props> = ({ data }) => <Layout> <New data={data}/> </Layout>
export default NewCard;
