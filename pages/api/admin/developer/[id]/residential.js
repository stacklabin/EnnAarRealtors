import {connectToDatabase} from '../../../../../utils/mongodb'

export default async (req, res) => {
  const {
    query: { id },
  } = req;
    const {db} = await connectToDatabase(); 
    const collection = await db.collection("property");

    const query = { developer: id, type: "residential" };
    console.log("query ",query)
    const cursor = await collection.find(query);

        if ((await cursor.count()) === 0) {
            console.log("No documents found!");
            return res.status(404).send("No documents found")
        }
        // replace console.dir with your callback to access individual elements
        var result=[]
        await cursor.forEach((dir)=>result.push(dir));

        return res.status(200).send(result)
};


