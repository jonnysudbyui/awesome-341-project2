const express = require('express');
const app = express();
const router = express.Router();

router.get('/home', (req, res) =>{
    res.send("Hello People, this is my website");
})

router.get('/profile', (req, res) => {
    res.send('Hello People, This is my profile page!')
});

router.get('login', (req, res) =>{
    res.send('Hello People, This is my login page');
});

router.get('/logout', (req, res) => {
    res.send('Hello People, This is the logout page');
});

app.use('/', router);
app.listen(process.env.port || 3000);
console.log('Web Server is listening at port ' + (process.env.port || 3000));