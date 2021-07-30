import {getSession} from 'next-auth/client'
import Developer from '../../models/developer'
import {connectToDatabase} from '../../../../utils/mongodb'
import nextConnect from 'next-connect';

const add = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

add.post(async(req, res) => {
    const session = await getSession({req});
    const {db} = await connectToDatabase();
        if(req.method === 'POST'){
            const {
            title,
            description,
            imageUrl,
            priority
            } = req.body;    
            const collection = await db.collection("developer");
                if(title && imageUrl &&  session)
                {
                    
                    try{
                        const query = { title };
                        const check = await collection.findOne(query, {});
                        var developer = new Developer({    
                            title,
                            description,
                            imageUrl,
                            priority
                        });
                        if(!check)
                        {
                            const result = await collection.insertOne(developer);
                            return res.status(200).json({ message: 'Details added successfully' });
                        }
                        return res.status(400).send('This developer already exists in database');
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

export default add;