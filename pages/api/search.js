import {connectToDatabase} from '../../utils/mongodb'
export default async (req, res) => {
  const {
    search,
    filter,
    type
  } = req.query;
    
    const {db} = await connectToDatabase(); 
    const collection = await db.collection("property");
    var query={};
    const options = {
        sort: { featured: -1, priority: -1 },
        };
    try{
        var match = new RegExp(search, 'gi' );
        // console.log("match is ",match)
        // let query = { title: match };
        if(type)
        {            
            if(search && filter)
            {
                switch(filter)
                {
                    case "two":
                    {
                        // query={type,"two":true,title:match,developer:match}
                        query={type, "two":true, $or:[{title:match},{developer:match}]}
                        break;
                    }
                    case "three":
                    {
                        // query={type,"three":true,title:match,developer:match}
                        
                        query={type, "three":true, $or:[{title:match},{developer:match}]}
                        break;
                    }
                    case "four":
                    {
                        // query={type,"four":true,title:match,developer:match}
                        
                        query={type, "four":true, $or:[{title:match},{developer:match}]}
                        break;
                    }
                    case "five":
                    {
                        // query={type,"five":true,title:match,developer:match}
                        query={type, "five":true, $or:[{title:match},{developer:match}]}
                        break;
                    }
                    case "plot":
                    {
                        // query={type,"plot":true,title:match,developer:match}
                        
                        query={type, "plot":true, $or:[{title:match},{developer:match}]}
                        break;
                    }
                    case "villa":
                    {
                        // query={type,"plot":true,title:match,developer:match}
                        
                        query={type, "villa":true, $or:[{title:match},{developer:match}]}
                        break;
                    }
                }
            }
            else if (search && !filter)
            {
                query = {$or:[{name:match},{developer:match}], type}
            }
            else if(filter && !search)
            {
                switch(filter)
                {
                    case "two":
                    {
                        // query={type,"two":true,title:match,developer:match}
                        query={type, "two":true}
                        break;
                    }
                    case "three":
                    {
                        // query={type,"three":true,title:match,developer:match}
                        
                        query={type, "three":true}
                        break;
                    }
                    case "four":
                    {
                        // query={type,"four":true,title:match,developer:match}
                        
                        query={type, "four":true}
                        break;
                    }
                    case "five":
                    {
                        // query={type,"five":true,title:match,developer:match}
                        query={type, "five":true}
                        break;
                    }
                    case "plot":
                    {
                        // query={type,"plot":true,title:match,developer:match}
                        
                        query={type, "plot":true}
                        break;
                    }
                    case "villa":
                    {
                        // query={type,"plot":true,title:match,developer:match}
                        
                        query={type, "villa":true, $or:[{title:match},{developer:match}]}
                        break;
                    }
                }
            }
        }
        else
        {
            if(filter)
            {
                query = {$or:[{name:match},{developer:match}], filter: true}
            }
            else
            {
                query = {$or:[{name:match},{developer:match}]}
            }
        }
        let cursor;
        console.log(query)
        cursor = await collection.find(query,options);
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