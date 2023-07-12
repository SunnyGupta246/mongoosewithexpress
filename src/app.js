import express from 'express'
const app =express();

app.get('/',(req,res)=>{
console.log("hello world");
})
app.get('/about',(req, res)=>{
    console.log("about page ");
})
export default app;