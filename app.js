const express = require('express');
//express app
const app = express();

//register view engine

app.set('view engine', 'ejs');


//listen fro request
app.listen(3002,()=>{
    console.log('Server is running on port 3002');
});
app.get('/', (req, res) => {
    const blogs =[
        {title:'Yoshi finds eggs',snippet:"lorem Ipsum is just fine content "},
        {title:'Mario finds rocks',snippet:"lorem Ipsum is just fine content "},
        {title:'Luigi finds stars',snippet:"lorem Ipsum is just fine content "},
        {title:'Peach finds sand',snippet:"lorem Ipsum is just fine content "},
        {title:'Bowser finds bubbles',snippet:"lorem Ipsum is just fine content "}
    ]
    res.render('index',{title:"Home",blogs})
})
app.get('/about', (req, res) => {
    res.render('about',{title:"About"});
})
app.get('/blogs/create',(req, res) => {
    res.render('create',{title:"Creat a new blog"});
})
//404 page
app.use((req, res)=>{
    res.status(404).render('404',{title:"404"})
})