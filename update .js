const dbConnect = require('./mongodb')

const updateData =  async ()=>{

    let data = await dbConnect();
    let result2 = await data.updateOne(
        {name :'iphone'},
        {$set : {name:'iphone PRO', price: 999}}
    )
    console.warn(result2)
}

updateData()

