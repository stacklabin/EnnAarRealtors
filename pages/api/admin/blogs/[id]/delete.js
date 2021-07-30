import {getSession} from 'next-auth/client'
import {connectToDatabase} from '../../../../../utils/mongodb'
import { ObjectID as ObjectId } from 'bson';

export default async (req, res) => {
  const {
    query: { id},
  } = req;

    const session = await getSession({req});
    const {db} = await connectToDatabase(); 
    const collection = await db.collection("blog");

    const query = { "_id": ObjectId(id) };
    console.log("query ",query)
    try {      
      const result = await collection.deleteOne(query);    
        if (result.deletedCount === 1) {
          return res.status(200).send({ message: 'Document Deleted Successfully' })
      } else {
        // console.log(result)
          return res.status(404).send('Document Not Found')
      }
     } catch (e) {
       console.log(e)
      return res.status(404).send(e)
     }
  };