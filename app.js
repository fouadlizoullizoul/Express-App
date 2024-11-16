const express = require('express');
const mongoose = require('mongoose');
const blogRoutes =require('./routes/blogRoutes');
//express app
const app = express();
//conect to db
// const dbURI='mongodb+srv://fouadblogs:Fouad2003@node.i60sq.mongodb.net/node?retryWrites=true&w=majority&appName=Cluster0'
const dbURI='mongodb://fouadblogs:Fouad2003@cluster0-shard-00-00.i60sq.mongodb.net:27017,cluster0-shard-00-01.i60sq.mongodb.net:27017,cluster0-shard-00-02.i60sq.mongodb.net:27017/?ssl=true&replicaSet=atlas-d48aqn-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(dbURI)
    .then((result)=> app.listen(3001 ))
    .catch((err)=> console.log("connection failed",err))
//register view engine
app.set('view engine', 'ejs');
//middleware 
app.use(express.static('public'))
app.use(express.urlencoded({ extended:true }));

//blog routes
app.use('/blogs',blogRoutes)

//rputes
app.get('/', (req, res) => {
    res.redirect("/blogs")
})


app.get('/about', (req, res) => {
    res.render('about',{title:"About"});
})



//404 page
app.use((req, res)=>{
    res.status(404).render('404',{title:"404"})
})