import nc from 'next-connect'
import client from '../client'
const handler = nc()
handler.get(async(req,res)=>{
    const product = await client.fetch(`*[_type == "featuredProduct" && _id == $id][0]`,{
        id:req.query.id,
    });
    res.sendData(product)
})

export default handler