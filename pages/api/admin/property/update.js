import {getSession} from 'next-auth/client'
import Property from '../../models/property'
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
            developer,
            type,
            name,
            description,
            tags,
            location,
            featured,
            priority,
            two,
            three,
            four,
            five,
            plot,
            villa,
            twoArea,
            threeArea,
            fourArea,
            fiveArea,
            plotArea,
            villaArea,
            twoImage,
            threeImage,
            fourImage,
            fiveImage,
            plotImage,
            villaImage,
            commercialComplexImage,
            siteplanImage,
            price,
            sp,
            jt,
            gym,
            security,
            cp,
            restaurant,
            club,
            bc,
            ka,
            ff,
            sm,
            multiplexes,
            os,
            fc,
            projectArea,
            apartments,
            imagesArray
            } = req.body;    
            const collection = await db.collection("property");
                if(name && developer && type && location && session)
                {
                    
                    try{
                        console.log("Property ID is ",id)                        
                        // return res.status(200).json({ message: 'Taking a break' });

                        const query = { "_id": ObjectId(id) };
                        var property = new Property({                
                            developer,
                            type,
                            name,
                            description,
                            tags,
                            location,
                            featured,
                            priority,
                            two,
                            three,
                            four,
                            five,
                            plot,
                            villa,
                            twoArea,
                            threeArea,
                            fourArea,
                            fiveArea,
                            plotArea,
                            villaArea,
                            twoImage,
                            threeImage,
                            fourImage,
                            fiveImage,
                            plotImage,
                            villaImage,
                            commercialComplexImage,
                            siteplanImage,
                            price,
                            sp,
                            jt,
                            gym,
                            security,
                            cp,
                            restaurant,
                            club,
                            bc,
                            ka,
                            ff,
                            sm,
                            multiplexes,
                            os,
                            fc,
                            projectArea,
                            apartments,
                            imagesArray
                        });
                        const result = await collection.replaceOne(query, property, {});
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