import {connectToDatabase} from '../../../../utils/mongodb'
import nextConnect from 'next-connect';

const getDeveloper = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

getDeveloper.get(async(req,res)=>{
    const {db} = await connectToDatabase();
    const collection = db.collection("developer");
    try{
        const cursor = await collection.find();

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
})

export default getDeveloper;