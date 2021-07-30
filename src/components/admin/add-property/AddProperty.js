import Header from '../../Header'
import Footer from '../../Footer'

import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {
    Button,
    Input,
    Textarea,
    Stack,
    Select,
    Checkbox,
    useToast,
    Spinner,
} from "@chakra-ui/react"

import AddDeveloper from "../AddDeveloper"

export default function  AddProperty() {
    const toast = useToast()

    const [part, setpart] = useState(1)
    const [developer, setdeveloper] = useState("")
    const [type, settype] = useState("")
    const [name, setname] = useState("")
    const [description, setdescription] = useState("")
    const [tags, settags] = useState("")
    const [location, setlocation] = useState("")
    const [featured, setfeatured] = useState(false)
    const [priority, setpriority] = useState(0)

    const [two, settwo] = useState(false)
    const [three, setthree] = useState(false)
    const [four, setfour] = useState(false)
    const [five, setfive] = useState(false)
    const [plot, setplot] = useState(false)
    const [villa, setvilla] = useState(false)
    
    const [twoarea, settwoarea] = useState("")
    const [threearea, setthreearea] = useState("")
    const [fourarea, setfourarea] = useState("")
    const [fivearea, setfivearea] = useState("")
    const [plotarea, setplotarea] = useState("")
    const [villaarea, setvillaarea] = useState("")

    const [twoimage, settwoimage] = useState("")
    const [threeimage, setthreeimage] = useState("")
    const [fourimage, setfourimage] = useState("")
    const [fiveimage, setfiveimage] = useState("")
    const [plotimage, setplotimage] = useState("")
    const [villaimage, setvillaimage] = useState("")

    const [cci, setcci] = useState("")

    const [siteplan, setsiteplan] = useState("")

    const [price, setPrice] = useState("")

    const [sp, setsp] = useState(false)
    const [jt, setjt] = useState(false)
    const [gym, setgym] = useState(false)
    const [security, setsecurity] = useState(false)
    const [cp, setcp] = useState(false)
    const [restaurant, setrestaurant] = useState(false)
    const [club, setclub] = useState(false)
    const [bc, setbc] = useState(false)
    const [ka, setka] = useState(false)
    const [ff, setff] = useState(false)
    const [sm, setsm] = useState(false)
    const [multiplexes, setmultiplexes] = useState(false)
    const [os, setos] = useState(false)
    const [fc, setfc] = useState(false)

    const [projectArea, setprojectArea] = useState("")
    const [apartments, setapartments] = useState("")

    const [image, setImage] = useState([])

    const [loading, setLoading] = useState(false)

    const [devs, setdevs] = useState([])

    useEffect(async() => {        
        await axios.get('/api/admin/developer')
        .then(res => {
            console.log("res is ",res.data)
            setdevs(res.data)
        })
        .catch(err=>{  
            console.log("error is ",err.response.data)
        })        
        }, []
    )

    const handlesubmit=async()=>{
        setLoading(true)
        
        var i;
        var imagesArray=[];
        for(i=0;i<image.length;i++)
        {
            
            const formData = new FormData();
            const config={
                headers: {'content-type':'multipart/form-data'},
                onUploadProgress: (e)=>{
                    console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
                },
            }
            formData.append('api_key','757677873513439');
            formData.append('folder','properties');
            formData.append('file', image[i]);    
            formData.append('upload_preset', 'unsigned');
            // replace cloudname with your Cloudinary cloud_name
            console.log(image[i])
            await axios.post('https://api.Cloudinary.com/v1_1/:enn-aar-group/image/upload',formData,config) //Put this inside a loop
                .then(res => {
                    console.log(res)
                    const data = res.data;
                    const image_url = data.secure_url;
                    console.log("image url is ",image_url)
                    imagesArray.push(image_url)
                    })
                .catch(err => console.log('cloudinary error',err));
        }

        console.log("ALL Images are: ",imagesArray)

        if(imagesArray.length>0)
        {
            const mongodata ={
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
                twoArea:twoarea,
                threeArea:threearea,
                fourArea:fourarea,
                fiveArea:fivearea,
                plotArea:plotarea,
                villaArea:villaarea,
                twoImage:twoimage,
                threeImage:threeimage,
                fourImage:fourimage,
                fiveImage:fiveimage,
                plotImage:plotimage,
                villaImage:villaimage,
                commercialComplexImage:cci,
                siteplanImage:siteplan,
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
            }
    
            await axios.post('/api/admin/property/add', mongodata)
                .then(res => {
                    toast({
                    title: "Adding Data Successful",
                    description: res.data.message,
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  })

                    
                    setname("")
                    setdescription("")

                    setpriority(0)
                    setfeatured(false)

                    settwo(false)
                    setthree(false)
                    setfour(false)
                    setfive(false)
                    setvilla(false)
                    setplot(false)

                    settwoarea("")
                    setthreearea("")
                    setfourarea("")
                    setfivearea("")
                    setvillaarea("")
                    setplotarea("")
                    
                    settwoimage("")
                    setthreeimage("")
                    setfourimage("")
                    setfiveimage("")
                    setvillaimage("")
                    setplotimage("")

                    setcci("")

                    setsiteplan("")

                    setPrice("")

                    setsp(false)
                    setjt(false)
                    setgym(false)
                    setsecurity(false)
                    setcp(false)
                    setrestaurant(false)
                    setclub(false)
                    setbc(false)
                    setka(false)
                    setff(false)
                    setsm(false)
                    setmultiplexes(false)
                    setos(false)
                    setfc(false)

                    setprojectArea("")
                    setapartments("")
                    
                    setImage([])

                    setpart(1)
                })
                .catch( err => {  
                    toast({
                        title: "Adding Data Failed",
                        description: err.response.data,
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                      })
                });
        }      
        setLoading(false)

    }
    return (
        <div>
            <Header/>
            <main className="mainContent bg-gray-500">
                <div className="p-4 flex justify-center items-center w-full h-full">
                    <div className=" bg-white rounded-xl w-full md:w-8/12 lg:w-6/12 p-12">
                        <Stack spacing={3}>                            
                        <h3 className="text-3xl p-6 pb-2 text-center">Add Property</h3>  
                        <div className="flex justify-center">
                            <span className="text-center px-3 py-1 bg-indigo-200 text-indigo-700 inline-block">Form Part: {part}</span> 
                        </div>            
                        {
                            part===1?(
                                <>
                                <Input
                                    onChange={(e)=>setImage(e.target.files)}
                                    type="file"
                                    placeholder="Image"
                                    size="sm"
                                    variant="flushed"
                                    name="theFiles"
                                    multiple
                                />
                                <hr className="pt-1 bg-gray-900"/>
                                <h5>Developer:</h5>
                                <Select
                                size="sm"
                                variant="flushed"                                       
                                value={developer}
                                onChange={(e)=>setdeveloper(e.target.value)}
                                >
                                    <option>Select</option>
                                    {
                                        devs.map((item) => {
                                            return (
                                                <option key={item._id} value={item.title}>{item.title}</option>
                                            );
                                        })
                                    }
                                </Select>
                                
                                <AddDeveloper/>
                                <hr className="pt-1 bg-gray-900"/>
                                <h5>Property Type:</h5>
                                <Select
                                size="sm"
                                variant="flushed"                                       
                                value={type}
                                onChange={(e)=>settype(e.target.value)}
                                required
                                >
                                    <option>Select</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                </Select>
                                <hr className="pt-1 bg-gray-900"/>
                                <Input
                                    required
                                    placeholder="Property Name"
                                    size="sm"
                                    variant="flushed"
                                    value={name}
                                    onChange={(e)=>setname(e.target.value)}
                                />
                                <hr className="pt-1 bg-gray-900"/>
                                <Textarea 
                                    placeholder="Description"
                                    size="sm"
                                    variant="flushed"                                    
                                    value={description}
                                    onChange={(e)=>setdescription(e.target.value)}
                                ></Textarea>
                                <hr className="pt-1 bg-gray-900"/>
                                <Input
                                    placeholder="Property Tags"
                                    size="sm"
                                    variant="flushed"
                                    value={tags}
                                    onChange={(e)=>settags(e.target.value)}
                                />
                                <Button disabled={!type} colorScheme="blue" onClick={()=>setpart(2)}>Next</Button>
                                </>
                            ):(<></>)
                        }
                        {
                            part===2?(<>
                                <Input
                                    placeholder="Property Location"
                                    size="sm"
                                    variant="flushed"
                                    value={location}
                                    onChange={(e)=>setlocation(e.target.value)}
                                />
                                <hr className="pt-1 bg-gray-900"/>
                                <Checkbox className="m-3 text-xs" variant="" isChecked={featured?true:false} onChange={(e)=>setfeatured(!featured)} colorScheme="green">
                                    Featured
                                </Checkbox>
                                <hr className="pt-1 bg-gray-900"/>
                                <h5>Priority</h5>
                                <Input
                                    type="number"
                                    placeholder="Priority"
                                    size="sm"
                                    variant="flushed"
                                    value={priority}
                                    onChange={(e)=>setpriority(e.target.value)}
                                />
                                <hr className="pt-1 bg-gray-900"/>
                                {
                                    type==="residential"?(<>
                                    <div className="flex flex-wrap justify-between ">
                                        <Checkbox className="m-3 text-xs" isChecked={two?true:false} onChange={(e)=>settwo(!two)} colorScheme="green">
                                            2 BHK
                                        </Checkbox>
                                        <Checkbox className="m-3 text-xs" isChecked={three?true:false} onChange={(e)=>setthree(!three)} colorScheme="green">
                                            3 BHK
                                        </Checkbox>
                                        <Checkbox className="m-3 text-xs" isChecked={four?true:false} onChange={(e)=>setfour(!four)} colorScheme="green">
                                            4 BHK
                                        </Checkbox>
                                        <Checkbox className="m-3 text-xs" isChecked={five?true:false} onChange={(e)=>setfive(!five)} colorScheme="green">
                                            5 BHK
                                        </Checkbox>
                                        <Checkbox className="m-3 text-xs" isChecked={plot?true:false} onChange={(e)=>setplot(!plot)} colorScheme="green">
                                            Plot
                                        </Checkbox>
                                        <Checkbox className="m-3 text-xs" isChecked={villa?true:false} onChange={(e)=>setvilla(!villa)} colorScheme="green">
                                            Villa
                                        </Checkbox>
                                    </div>
                                    
                                    <hr className="pt-1 bg-gray-900"/>
                                    <div>
                                        {
                                            two?(<>
                                            <Input
                                                value={twoarea}
                                                onChange={(e)=>settwoarea(e.target.value)}
                                                placeholder="2 BHK Area"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                        {
                                            three?(<>
                                            <Input
                                                value={threearea}
                                                onChange={(e)=>setthreearea(e.target.value)}
                                                placeholder="3 BHK Area"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                        {
                                            four?(<>
                                            <Input
                                                value={fourarea}
                                                onChange={(e)=>setfourarea(e.target.value)}
                                                placeholder="4 BHK Area"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                        {
                                            five?(<>
                                            <Input
                                                value={fivearea}
                                                onChange={(e)=>setfivearea(e.target.value)}
                                                placeholder="5 BHK Area"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                        {
                                            plot?(<>
                                            <Input
                                                value={plotarea}
                                                onChange={(e)=>setplotarea(e.target.value)}
                                                placeholder="Plot Area"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                        {
                                            villa?(<>
                                            <Input
                                                value={villaarea}
                                                onChange={(e)=>setvillaarea(e.target.value)}
                                                placeholder="villa Area"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                    </div>                                    
                                    {
                                        two||three||four||five||plot||villa?(<>
                                        <hr className="pt-1 bg-gray-900"/>
                                        
                                        <h5>Images:</h5>
                                        </>):(<></>)
                                    }
                                    <div>
                                        {
                                            two?(<>
                                            <Input
                                                value={twoimage}
                                                onChange={(e)=>settwoimage(e.target.value)}
                                                placeholder="2 BHK image url"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                        {
                                            three?(<>
                                            <Input
                                                value={threeimage}
                                                onChange={(e)=>setthreeimage(e.target.value)}
                                                placeholder="3 BHK image url"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                        {
                                            four?(<>
                                            <Input
                                                value={fourimage}
                                                onChange={(e)=>setfourimage(e.target.value)}
                                                placeholder="4 BHK image url"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                        {
                                            five?(<>
                                            <Input
                                                value={fiveimage}
                                                onChange={(e)=>setfiveimage(e.target.value)}
                                                placeholder="5 BHK image url"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                        {
                                            plot?(<>
                                            <Input
                                                value={plotimage}
                                                onChange={(e)=>setplotimage(e.target.value)}
                                                placeholder="Plot image url"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                        {
                                            villa?(<>
                                            <Input
                                                value={villaimage}
                                                onChange={(e)=>setvillaimage(e.target.value)}
                                                placeholder="villa image url"
                                                size="sm"
                                                variant="flushed"
                                            />
                                            </>):(<></>)
                                        }
                                    </div>
                                    </>):(<>
                                        <Input
                                            value={cci}
                                            onChange={(e)=>setcci(e.target.value)}
                                            placeholder="Commercial Complex Image Url"
                                            size="sm"
                                            variant="flushed"
                                        />
                                    </>)
                                }
                                
                                <div className="flex justify-between">
                                <Button size="sm" colorScheme="red" onClick={()=>setpart(1)}>Back</Button>
                                <Button size="sm" colorScheme="blue" onClick={()=>setpart(3)}>Next</Button>
                                </div>
                            </>):(<></>)
                        }
                        {
                            part===3?(<>
                              <Input
                                    value={siteplan}
                                    onChange={(e)=>setsiteplan(e.target.value)}
                                    placeholder="Site Plan Image Url"
                                    size="sm"
                                    variant="flushed"
                                />
                                <hr className="pt-1 bg-gray-900"/>
                                <Input
                                    value={price}
                                    onChange={(e)=>setPrice(e.target.value)}
                                    placeholder="Price"
                                    size="sm"
                                    variant="flushed"
                                />
                                <hr className="pt-1 bg-gray-900"/>
                                
                                <div className="flex flex-wrap justify-between ">
                                    <Checkbox className="m-3 text-xs" isChecked={sp?true:false} onChange={(e)=>setsp(!sp)} colorScheme="green">
                                        Swimming Pool
                                    </Checkbox>
                                    <Checkbox className="m-3 text-xs" isChecked={jt?true:false} onChange={(e)=>setjt(!jt)} colorScheme="green">
                                        Jogging Track
                                    </Checkbox>
                                    <Checkbox className="m-3 text-xs" isChecked={gym?true:false} onChange={(e)=>setgym(!gym)} colorScheme="green">
                                        GYM
                                    </Checkbox>
                                    <Checkbox className="m-3 text-xs" isChecked={security?true:false} onChange={(e)=>setsecurity(!security)} colorScheme="green">
                                        Security
                                    </Checkbox>
                                    <Checkbox className="m-3 text-xs" isChecked={cp?true:false} onChange={(e)=>setcp(!cp)} colorScheme="green">
                                        Car Parking
                                    </Checkbox>
                                    <Checkbox className="m-3 text-xs" isChecked={restaurant?true:false} onChange={(e)=>setrestaurant(!restaurant)} colorScheme="green">
                                        Restaurant
                                    </Checkbox>

                                    <Checkbox className="m-3 text-xs" isChecked={club?true:false} onChange={(e)=>setclub(!club)} colorScheme="green">
                                        Club
                                    </Checkbox>
                                    <Checkbox className="m-3 text-xs" isChecked={bc?true:false} onChange={(e)=>setbc(!bc)} colorScheme="green">
                                        Basketball Court
                                    </Checkbox>
                                    <Checkbox className="m-3 text-xs" isChecked={ka?true:false} onChange={(e)=>setka(!ka)} colorScheme="green">
                                        Kids Area
                                    </Checkbox>
                                    <Checkbox className="m-3 text-xs" isChecked={ff?true:false} onChange={(e)=>setff(!ff)} colorScheme="green">
                                        Fire Fighting
                                    </Checkbox>
                                    <Checkbox className="m-3 text-xs" isChecked={sm?true:false} onChange={(e)=>setsm(!sm)} colorScheme="green">
                                        Shopping Mall
                                    </Checkbox>
                                    <Checkbox className="m-3 text-xs" isChecked={multiplexes?true:false} onChange={(e)=>setmultiplexes(!multiplexes)} colorScheme="green">
                                        Multiplexes
                                    </Checkbox>

                                    
                                    <Checkbox className="m-3 text-xs" isChecked={os?true:false} onChange={(e)=>setos(!os)} colorScheme="green">
                                        Office Space
                                    </Checkbox>
                                    <Checkbox className="m-3 text-xs" isChecked={fc?true:false} onChange={(e)=>setfc(!fc)} colorScheme="green">
                                        Food Court
                                    </Checkbox>
                                </div>
                                <hr className="pt-1 bg-gray-900"/>
                                <Input
                                    value={projectArea}
                                    onChange={(e)=>setprojectArea(e.target.value)}
                                    placeholder="Project Area"
                                    size="sm"
                                    variant="flushed"
                                />
                                <hr className="pt-1 bg-gray-900"/>
                                <Input
                                    value={apartments}
                                    onChange={(e)=>setapartments(e.target.value)}
                                    placeholder="Apartments"
                                    size="sm"
                                    variant="flushed"
                                />
                                {
                                    !loading?(
                                        <div className="flex justify-between">
                                        <Button size="sm" colorScheme="red" onClick={()=>setpart(2)}>Back</Button>
                                        <Button size="sm" colorScheme="blue" onClick={handlesubmit}>Submit</Button>
                                        </div>
                                    ):(<Spinner size="xl"/>)
                                }
                            </>):(<></>)
                        }
                        </Stack>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}