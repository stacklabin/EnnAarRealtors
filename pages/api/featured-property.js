import {connectToDatabase} from '../../utils/mongodb'
export default async (req, res) => {
  const {
    limit,
    type
  } = req.query;
    
    const {db} = await connectToDatabase(); 
    const collection = await db.collection("property");
    var query={};
    const options = {
        sort: { featured: -1, priority: -1 },
        };
    if(type)
    {
        query={type};
    }
    try{
        let cursor;
        if(limit)
        {
            cursor = await collection.find(query,options).limit(Number(limit));
        }
        else{
            cursor = await collection.find(query,options);
        }
        if ((await cursor.count()) === 0) {
            console.log("No documents found!");
            return res.status(404).send("No documents found")
        }
        // replace console.dir with your callback to access individual elements
        var result=[]
        await cursor.forEach((dir)=>result.push(dir));

        return res.status(200).send(result)
    }    
    catch (error){
        console.log(error)
        return res.status(500).send(error.message);
    }
};