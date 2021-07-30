import {getSession} from 'next-auth/client'
import Blog from '../../models/blog'
import {connectToDatabase} from '../../../../utils/mongodb'
import nextConnect from 'next-connect';
import { ObjectID as ObjectId } from 'bson';

const blog = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

blog.get(async(req,res)=>{
    const {db} = await connectToDatabase();
    const collection = db.collection("blog");
    // console.log(collection)
    try{
          // query for movies that have a runtime less than 15 minutes
            const query = { };
            const options = {
            // sort returned documents in ascending order by title (A->Z)
            sort: { since: -1 },
            // Include only the `title` and `imdb` fields in each returned document
            projection: { },
            };

        const cursor = await collection.find(query, options).limit(4);

        // print a message if no documents were found
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

export default blog;