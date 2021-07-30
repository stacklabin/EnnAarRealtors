import {getSession} from 'next-auth/client'
import Developer from '../../models/developer'
import {connectToDatabase} from '../../../../utils/mongodb'
import nextConnect from 'next-connect';
import { ObjectID as ObjectId } from 'bson';

const update = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

update.post(async(req, res) => {
    const session = await getSession({req});
    const {db} = await connectToDatabase();
        if(req.method === 'POST'){
            const {
                id,
                title,
                description,
                imageUrl,
                priority
            } = req.body;    
            const collection = await db.collection("developer");
                if(title && imageUrl && session)
                {
                    
                    try{ 
                        const query = { "_id": ObjectId(id) };    
                        var developer = new Developer({                            
                            title,
                            description,
                            imageUrl,
                            priority
                        });
                        const result = await collection.replaceOne(query, developer, {});
                        if (result.modifiedCount === 0 && result.upsertedCount === 0) {
                            console.log("No changes made to the collection.");
                            return res.status(404).send("No documents found")
                          } else {
                            if (result.matchedCount === 1) {
                              console.log("Matched " + result.matchedCount + " documents.");
                            }
                            if (result.modifiedCount === 1) {
                              console.log("Updated one document.");
                              return res.status(200).send({ message: 'Details updated successfully' })
                            }
                          }
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

export default update;