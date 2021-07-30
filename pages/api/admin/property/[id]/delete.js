import {getSession} from 'next-auth/client'
import {connectToDatabase} from '../../../../../utils/mongodb'
import { ObjectID as ObjectId } from 'bson';

export default async (req, res) => {
  const {
    query: { id },
  } = req;

    const session = await getSession({req});
    const {db} = await connectToDatabase(); 
    const collection = await db.collection("property");

    const query = { "_id": ObjectId(id) };
    // console.log(req)
    // console.log("Delete query is",query)
    if(session)
    {
        const result = await collection.deleteOne(query);
        if (result.deletedCount === 1) {
            return res.status(200).send({ message: 'Document Deleted Successfully' })
        } else {
            return res.status(404).send('Document Not Found')
        }
    }
    else
    {
        return res.status(403).send('Permission Denied')
    }
};