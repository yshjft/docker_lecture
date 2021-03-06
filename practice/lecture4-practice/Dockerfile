# node는 npm이 들어 있는 베이스 이미지이다
FROM node:10

# 이 부분이 없으면 에러가 발생하게 됩니다.
# npm install을 package.json에 있는 내용을 보고 의존성을 설치하게 되는데 현재 이미지를 만들 때 사용하는 임시 컨테이너에는 package.json과 다른 파일들이 없기 때문이다.
# COPY <로컬에 있는 파일> <도커 컨테이너의 지정된 장소> : 로컬에 있는 파일을 도커 컨테이너의 지정된 장소에 복사한다.
# COPY <복사 할 파일 경로> <컨테이너내에서 파일이 보사될 경로>
# COPY package*.json ./

WORKDIR  /usr/src/app

COPY package.json ./

# npm은 Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램이다
RUN npm install

COPY ./ ./

CMD ["node", "server.js"]