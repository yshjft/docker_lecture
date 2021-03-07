const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req,res, next)=>{
    res.send('Hello World. 안녕하세요! 변경합니다!')
})

app.listen(PORT, ()=>{
    console.log(`${PORT}번 포트에서 대기중`)
})