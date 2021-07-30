var nodemailer = require('nodemailer');
import nextConnect from 'next-connect';
import {getSession} from 'next-auth/client'
import Enquiry from '../api/models/enquiry'
import {connectToDatabase} from '../../utils/mongodb'
import { ObjectID as ObjectId } from 'bson';
var slugify = require('slugify')

const enquiry = nextConnect({
  // Handle any other HTTP method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

enquiry.post(async(req, res) => {
        if(req.method === 'POST'){
            const {name, contact, email, message} = req.body;
            const collection = await db.collection("enquiry");

            // save details to db
            if(name && contact && email && message)
            {
                
                try{
                    const slug = slugify(name)
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
                    var enquiry = new Enquiry({
                        name, contact, email, message
                    });
                    if(!check)
                    {
                        const result = await collection.insertOne(enquiry);
                        return res.status(200).json({ message: 'Your information has been submitted successfully' });
                    }
                    return res.status(400).send('Your information already exists in database');
                }
                catch (error){
                    console.log(error)
                    return res.status(500).send(error.message);
                }
            }
            else{
                res.status(422).send('Fill all fields');
            }
            // save details to db

            var transporter = nodemailer.createTransport({
                host: "smtp.mailgun.org",
                port: 587,
                secure: true, // upgrade later with STARTTLS
                auth: {
                    user: "",
                    pass: ""
                }
              });
              
              var mailOptions = {
                from: 'admin@pathakankit.com',
                // to: 'ankitpathak143192@gmail.com',
                to: 'shrish.aminrup@gmail.com',
                subject: name+" has filled the contact us form",
                html: "Name: "+name+" <br/>Email: "+email+" <br/>contact: "+contact+" <br/>Message: "+message,
              };
              
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                console.log(error);
                return res.status(400).send('Some problem occured. Try again later.');            
                } else {
                    return res.status(200).json({ message: 'Your information has been submitted successfully' });
                console.log('Email sent: ' + info.response);
                }
            });
        }
        else{
            res.status(422).send('Non supported request method');
        }
});

export default contact;