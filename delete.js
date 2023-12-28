const dbConnect = require('./mongodb');

const deleteData = async ()=>{
    let data = await dbConnect();
    let result1 = await data.deleteMany({name:'motorolla X3'})

    if(result1.acknowledged){
        console.warn("record deleted")
    }
   
}

deleteData()