# 안프런 도커 강의

## 강의 내용 정리

### 도커를 사용하는 아유

프로그램을 받는 과정을 간단하게 만들기 위해서 사용한다.

### 도커란 무엇인가

- 컨테이너를 사용하여 응용 프로그램을 더 쉽게 만들고 배포하고 실행할 수 있도록 설계된 도구이다
- 컨테이너 기반의 오픈소스 가상화 플랫폼이며 생태계이다.

### 컨태이너란 무엇인가?

- 프로그램을 쉽게 이동, 배포 및 관리할 수 있도록 해준다.
- 도커 컨테이너는 도커 이미지를 기반으로 만들어 진다. 따라서 이미지의 인스턴스라고 하기도 한다.
- 이미지를 기반으로 만들어진 컨테이너 안에서 프로그램이 실행된다.

### 컨테이너 이미지

- 응용 프로그램을 실행하는데 필요한 설정과 종속성을 포함하고 있다.

### 도커의 흐름

- 도커 CLI : 커맨드가 입력됨
- 도커 server(Deamon) : 압력된 커맨드에 따라서 작업을 진행함

- ex) docker run hello-world  
  도커 클라이언트(커맨드 전달: docker run hello-world)  
  도커 서버(hello-world라는 이미지가 캐시되어 있는지 로컬에서 확인, 없으면 도커 허브에서 hello-world라는 이미지를 가지고 온다)

### 가상화 기술 이전 VS VM(하이퍼바이저 기반) VS 도커

1. 가상화 기술 이전
   한대의 서버를 하나의 용도로만 사용  
   남는 서버 공간 그대로 방치  
   하나의 서버에 하나의 운영체제, 하나의 프로그램만 운영  
   안정적이나 비효율적이다!

2. VM(하이퍼바이저 기반)

- 하이퍼 바이저란?  
  호스트 시스템(윈동우, Linux)에서 다수의 게스트 OS를 구동할 수 있게 하는 소프트웨어  
  하드웨어를 가상화하며 하드웨어와 각각의 VM 모니터링

- 네이티브 하이퍼 바이저 & 호스트형 하이퍼 바이저  
  (네이티브 하이퍼 바이저) : 하이퍼바잊저가 하드웨어를 직접 제어한다. 자원을 효율적으로 사용할 수 있으며 오버헤드가 적다. 하지만 설치가 어렵다.  
  (호스트형 하이퍼 바이저) : 가장 일바적으로 사용된다. 오버헤득 크지만 OS 제약이 없으며 구현이 쉽다.

- VM은 VM마다 독립된 가상 하드웨어 자원을 할당하기 때문에 다른 VM으로 에러가 퍼지지 않는다.

3. 도커

- 게스트 OS X, 하이퍼바이저 X  
  오버헤드가 적다.

- 도커의 VM의 공통점과 차이점  
  (공통점) : 기본 하드웨어에서 격리된 환경내에 어플리케이션을 배치하는 방법이라는 공통점을 가진다.  
  (차이점) : 격리된 환경을 얼마나 격리시키는가에서 차이점을 가진다.

- 도커  
  호스트 OS 위에 이미지를 배포한다.(동일한 커널을 공유)  
  컨테이너 내부에서 실행되는 프로세스는 호스트 시스템에서 볼 수 있다.

- VM  
  어플리케이션 실행시 VM 띄우고 자원을 할당한다. 이후 게스트 OS를 부팅하는 과정을 거친다.  
  오버헤드가 크지만 사용방법이 쉽다.

- 컨테이너 격리 방법
  도커는 VM에서 발전된 것이므로 Cgrop과 namespace를 사용하여 컨테이너를 격리한다.  
  (Cgroup) : 프로세스 그룹의 시스템 리소스(CPU, 메모리 ....)를 관리한다.  
  (namespace) : 하나의 시스템에서 프로세스를 격리시킬 수 있는 가상화 기술이다.

### 이미지로 컨테이너 만들기

1. 이미지  
   이미지에는 응용 프로그램이 실행될 때 필요한 모든 것을 가지고 있다.

   - 시작시 실행 될 명령어
   - 파일 스냅샷(디렉토리나 파일을 카피한 것)

2. 이미지로 컨테이너 만들기

   - 이미지에 있는 실행 파일(스냅샷)이 컨테이너 하드디스크로 이동
   - 이미지에 있는 명령어 컨테이너로 이동
   - 프로세스 작동

### Cgroup, 네임스페이스를 쓸 수 있는 이유

현재 사용자 컴퓨터의 운영체제가 리눅스가 아님에도 리눅스의 기능인 Cgroup과 네임스페이스를 도커 컨테이너에서 사용할 수 있는 이유는 컨테이너 안에 리눅스 VM이 있기 때문이다.

### 도커 명령어

1. 이미지 내부 파일 시스템 구조 보기 : docker run (이미지 이름) ls

   - 이미지에 ls라는 명령어를 실행할 수 있는 명령어를 실행할 수 있는 파일이 있어야 ls를 실행할 수 있다.
   - (현재 ls 명령어가 있는 위치에 다른 명령어를 작성하게 될 경우 시작 명령어를 무시하고 해당 위치에 있는 명령어를 실행하게 된다.)

2. 현재 실행 중인 컨테이너들 나열하기 : docker ps

   - ps : process status
   - containerID
   - Image
   - commmand : 컨테이너가 시작될 때 어떠한 커맨드로 시작되었는지 알려준다
   - created : 컨테이너 상태 (up: 실행 중, exited: 종료, pause: 일시정지)
   - ports: 컨테이너가 개방한 포트, 호슽에 연결한 포트
   - names: 커테이너의 고유한 이름

3. 원하는 항목만 보기

   - ex) docker ps --format 'table{{.Names}} \t table{{.Images}}'

4. 모든 컨테이너 나열 : docker ps -a
