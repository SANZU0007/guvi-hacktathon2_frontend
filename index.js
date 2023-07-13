const express = require('express')
const app = express();
let notes = [
    {
        id:1,
        content:'html is easy',
        important: true
    },
    {
        id:2,
        content:'backend applications using notejs',
        important: false
    },
    {
        id:3,
        content:'get and post method important oh http',
        important: true
    }
];

app.get('/',((request,response)=>{
    response.send('<h1>Notes app</h1>')

}
))
app.get('/api/notes',((request,response)=>{
    response.json(notes);
}))





const PORT = 3001;
app.listen(PORT);
console.log(`server running port is ${PORT}`);
