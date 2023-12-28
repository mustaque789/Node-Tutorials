const dbConnect = require('./mongodb')

const updateData =  async ()=>{

    let data = await dbConnect();
    let result = await data.updateOne(
        {name :'MI'},
        {$set : {name:'MI Pro', price: 999}}
    )
    console.warn("updated")
}

await updateData()

