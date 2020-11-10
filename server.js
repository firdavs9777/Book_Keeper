const express = require('express');

const app = express();

app.get('/',(req,res) => res.json({msg:'Welcome to Book Keeper App'})
);

app.use('/api/users',require('./routes/users'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contacts',require('./routes/contacts'));


const Port = process.env.Port || 5000;


app.listen(Port,()=>console.log('Server started on port'));
