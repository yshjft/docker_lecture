const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req,res, next)=>{
    res.send('Hello World')
})

app.listen(PORT, ()=>{
    console.log(`${PORT}번 포트에서 대기중`)
})