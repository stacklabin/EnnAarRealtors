import {getSession} from 'next-auth/client'
import {connectToDatabase} from '../../../../../utils/mongodb'
import { ObjectID as ObjectId } from 'bson';

export default async (req, res) => {
  const {
    query: { id },
  } = req;

    const session = await getSession({req});
    const {db} = await connectToDatabase(); 
    const collection = await db.collection("blog");

    const query = { slug: id };
    console.log("query ",query)
    const result = await collection.findOne(query);
    // console.log(result)
    if (result) {
        return res.status(200).send(result)
    } else {
        return res.status(404).send('Document Not Found')
    }
};