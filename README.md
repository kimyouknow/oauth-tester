# OAuth 및 로그인 (유지) 테스트를 위한 repo

두 가지 방법으로 oauth를 구현해보았습니다. 설명을 보기보다 직접 테스트를 원하시면 [실행 전 확인 사항](#실행-전-확인-사항)을 확인해주세요.

# 설명

## 요약

> OAuth흐름을 이해하기 위해 react와 express를 활용한 예제를 작성해보았습니다.

`callback페이지를 활용한 OAuth흐름`과 `서버에서 모든 처리를 하는 OAuth흐름`을 나누어 구현해봤습니다.

어떤 방법이든 Loading 중인 UI가 사용자에게 보여야한다고 생각합니다. 이런 의미에서 현재 구현한 두 가지 방법 중 `callback페이지를 활용한 OAuth흐름`가 `loading UI`를 보여줄 수 있어 `프론트와 백앤드 사이에 요청이 많아 번거롭지만` 사용자 관점에서 좋다고 느껴졌습니다.

## callback페이지를 활용한 OAuth흐름

![callback](https://user-images.githubusercontent.com/71386219/175968304-95227e32-65d3-427c-9e6f-ab3192612d60.gif)

Github 로그인 버튼 클릭

⬇️

Github 인증 페이지로 이동(https://github.com/login/oauth/authorize?client_id)

⬇️

Github 동의 후 등록해 둔 callback(프론트url/callback)으로 이동

⬇️

code를 받아서 서버로 요청(/api/oauth/github/callback)

⬇️

서버에서 https://github.com/login/oauth/access_token로 access token 요청

⬇️

token 저장 관련 학습 중 ....

## 서버에서 모든 처리를 하는 OAuth흐름

![server](https://user-images.githubusercontent.com/71386219/175968278-fc4b4c3a-2162-4dad-8096-e4f5e2695fde.gif)

Github 로그인 버튼 클릭

⬇️

서버로 (/api/oauth/github)로 github oauth 요청

⬇️

프론트는 서버에서 Github 인증페이지 url(https://github.com/login/oauth/authorize?client_id)을 받는다.

⬇️

받은 Github 인증 페이지로 이동

⬇️

Github 동의 후 등록해 둔 callback(백url/api/auth/github)으로 이동

⬇️

해당 uri에서 code를 받아서 github 요청(https://github.com/login/oauth/access_token)로 access token 요청

⬇️

token 저장 관련 학습 중 ....

# 추가 작업 예정

- [ ] : redirect 관련 에러 정리
- [ ] : 쿠키에 token 저장
- [ ] : ec2 배포 후 확인

## 공통

- [ ] : axios를 사용하지 않고 fetch를 이용한 api 구현
- [ ] : 단위 테스트 작성

## express

- [ ] : express 폴더 세팅
- [ ] : jwt token 생성
- [ ] : db연동

## react

- [ ] : access token과 refresh token을 활용한 로그인 유지 기능

# 실행 전 확인 사항

## github 세팅 및 환경 변수 세팅

### OAuth with Callback 용으로 등록

**Homepage URL**: http://localhost:3000/

**Authorization callback URL**: http://localhost:3000/callback

**fe/.env 생성**

```
REACT_APP_OAUTH_GITHUB_CLIENT_ID=등록한 github client id
REACT_APP_OAUTH_GITHUB_CLIENT_SECRET=등록한 github client secret
```

**be/.env 생성**

```
PORT=8081
OAUTH_GITHUB_CLIENT_ID_CALLBACK=등록한 github client id
OAUTH_GITHUB_CLIENT_SECRET_CALLBACK=등록한 github client secret
```

### OAuth with Server redirect 용으로 등록

**Homepage URL**: http://localhost:3000/

**Authorization callback URL**: http://localhost:8081/api/auth/github

**fe/.env 생성**

```
// 없음
```

**be/.env 생성**

```
PORT=8081
OAUTH_GITHUB_CLIENT_ID_REDIRECT=등록한 github client id
OAUTH_GITHUB_CLIENT_SECRET_REDIRECT=등록한 github client secret
```

# 백

> express, babel

### 1. 설치 및 실행

> npm install
> npm run server

# 프론트

> react, webpack

## 실행

### 1. 설치 및 실행

> npm install
> npm run dev
