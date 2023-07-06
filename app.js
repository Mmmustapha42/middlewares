const express = require('express')
const app = express()

app.use(logger)

app.get('/', (req, res)=>{
    res.send('welcome')
})

app.get('/users', (req,res)=>{
    res.send('users page')
})

function logger(req, res, next) {
    console.log('log')
    next()
}

function auth(req, res, next) {

    if(req.query.admin=== 'true'){
        next()
    }else {
        res.send('No Auth')
    }
}


app.listen(3000, ()=>{
    console.log('connected')
})