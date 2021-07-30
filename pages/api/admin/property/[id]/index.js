import {connectToDatabase} from '../../../../../utils/mongodb'

export default async (req, res) => {
  const {
    query: { id },
  } = req;
    const {db} = await connectToDatabase(); 
    const collection = await db.collection("property");

    const query = { name: id };
    console.log("query ",query)
    const result = await collection.findOne(query);
    // console.log(result)
    if (result) {
        return res.status(200).send(result)
    } else {
        return res.status(404).send('Document Not Found')
    }
};