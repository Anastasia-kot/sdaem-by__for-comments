// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import { CatalogueType } from '../../../types/catalogue_data';
import { data } from './data'


type ResponseData = {
    item?: CatalogueType
    error?: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {

    const { id } = req.query;

    const item = data.items.find(  element =>  element.id === +id );
     
    if (item) {
        res.status(200).json({item})
    } else {
        res.status(404).json({ error: 'resource not exist' })
    }

}
