const express = require('express')
const redis = require('redis')

//레디스 클라이언트 생성
const client = redis.createClient({
    // (도커를 사용하지 않는 경우) 레디스 서버가 작동하는 곳이 redis-server.com 인 경우 host : "https://redis-server.com"
    // (도커 환경, 도커 Compose를 사용할 때) : host 옵션을 docker-compose.yml 파일에 명시한 컨테이너 이름으로 주면된다.
    host:"redis-server",
    // 레디스 기본 포트 : 6379
    port: 6379
})

const app = express()

//수자는 0부터 시작합니다
client.set("number", 0);

app.get('/', (req, res)=>{
    client("number", (err, number)=>{
        //현재 숫자를 가져온 후에 1씩 올려줍니다.
        client.set("number", parseInt(number)+1)
        res.send("숫자가 1씩 올라갑니다. 숫자: "+number)
    })
})

app.listen(3001, ()=>{
    console.log('Server is running')
})