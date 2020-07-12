const express=require('express');
const app=express();
const port=8000;

//Using Express Router
app.use('/',require('./routes/index'))


app.listen(port,function(err){
    if(err){
        console.log(`Error in running server ${err}`);
    }
    console.log(`Server is running fine on port ${port}`);
})