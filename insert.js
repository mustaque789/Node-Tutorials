const dbConnect = require('./mongodb')

const insertFunc = async () =>{
  const db = await dbConnect();
  const result = await db.insertMany([                                            //1. insertOne - for inserting 1 item  2.insertMany - for inserting multiple items
    {name:'motorolla X1', brand:'motorolla', price:400,category:'mobile'},
    {name:'motorolla X2', brand:'motorolla', price:500,category:'mobile'},
    {name:'motorolla X3', brand:'motorolla', price:600,category:'mobile'}
  ])
}

insertFunc();



