import {getSession} from 'next-auth/client'
import Property from '../../models/property'
import {connectToDatabase} from '../../../../utils/mongodb'
import nextConnect from 'next-connect';
var cloudinary = require('cloudinary').v2;
var CLOUDINARY_URL="cloudinary://491118498872778:SX0DwKrZqJ5x-yVDORS46hwvzD0@ak99"
var key="491118498872778"
var secret="SX0DwKrZqJ5x-yVDORS46hwvzD0"
var cloudName="ak99"

cloudinary.config({ 
    cloud_name: cloudName, 
    api_key: key, 
    api_secret: secret
  });

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
                        console.log("Image is ",imagesArray)                        
                        // return res.status(200).json({ message: 'Taking a break' });

                        const query = { name };
                        const check = await collection.findOne(query, {});
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
                        if(!check)
                        {
                            const result = await collection.insertOne(property);
                            return res.status(200).json({ message: 'Details added successfully' });
                        }
                        return res.status(400).send('This property already exists in database');
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