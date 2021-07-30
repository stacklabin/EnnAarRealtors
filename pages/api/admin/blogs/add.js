import {getSession} from 'next-auth/client'
import Blog from '../../models/blog'
import {connectToDatabase} from '../../../../utils/mongodb'
import nextConnect from 'next-connect';
import { ObjectID as ObjectId } from 'bson';
var slugify = require('slugify')

const blog = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

blog.post(async(req, res) => {
    const session = await getSession({req});
    const {db} = await connectToDatabase();
        if(req.method === 'POST'){
            const {title, content,featured, description} = req.body;    
            const collection = await db.collection("blog");
            
            if(title && content && session && description)
            {
                
                try{
                    const slug = slugify(title)
                    // console.log(req.body)
                    // Query for a movie that has the title 'The Room'
                    const query = { slug };
                    // console.log(query)
                    const options = {
                        
                    sort: {since: -1 },
                    // Include only the `name` and `contact` fields in the returned document
                    projection: { _id: 1, title: 1},
                    };
                    const check = await collection.findOne(query, options);
                    // console.log("checking... ",check)
                    var blog = new Blog({
                        title,
                        content,
                        featured,
                        slug,
                        description
                    });
                    if(!check)
                    {
                        const result = await collection.insertOne(blog);
                        return res.status(200).json({ message: 'Details added successfully' });
                    }
                    return res.status(400).send('This blog already exists in database');
                }
                catch (error){
                    console.log(error)
                    return res.status(500).send(error.message);
                }
            }
            else{
                res.status(422).send('Fill all fields');
            }
        }
        else{
            res.status(422).send('Non supported request method');
        }
});

export default blog;

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '5mb',
      },
    },
  }