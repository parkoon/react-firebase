# 리액트와 파이어베이스

## Step 1. 폴더 구조 세팅

1. 불필요한 파일들 제거
   - cra로 프로젝트 생성 후 불필요한 파일들 제거 (.css, setup, serviceWorker 등등)
2. React Router

   - react-router-dom 설치
     ```
     $ npm install react-router-dom
     ```
   - react-router-dom 세팅

     ```js
     import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

         <Router>
            <App />
         </Router>

         <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
            </ul>
         </nav>

         <Switch>
             <Route path="/">
                 <Home/>
             </Route>
             <Route path="/about">
                 <About/>
             </Route>
         </Switch>
     ```

3. Redux & Redux Saga

   - react-redux, redux, redux-saga 설치
     ```
     npm install react-redux redux redux-saga
     ```
   - `Provider`

     ```js
     import { Provider } from 'react-redux'
     ;<Provider store={store}>
       <App />
     </Provider>
     ```

   - `store`
     > store - index.js 참고
   - `reducer`
     - ducks 패턴 활용 (actions, reducer, types를 하나의 모듈로 관리)
     - store - modules - sample 참고
   - `saga`

     - saga 등록

       ```js
       import createSagaMiddleware from 'redux-saga'
       import rootSaga from './saga'

       // sagaMiddleware 를 applyMiddleware에 등록
       const sagaMiddleware = createSagaMiddleware()

       sagaMiddleware.run(rootSaga)
       ```

     - sample saga 생성
       > sagas - sample 참고 (깊게 아는 것도 좋은데, 패턴 정도로 숙지하고 있어도 개발에 문제 없음)

4) 폴더 세팅

- `components` : 화면에 보여지는 것들
- `container` : 서비스 로직 & 리덕스 스토러에 접근하는 것들
- `helpers` : 유틸리티
- `hooks` : 커스텀 훅
- `sagas` : 사가
- `state` : 상태관리

5. prettier 세팅

   ```json
   {
     "tabWidth": 2,
     "useTabs": false,
     "semi": false,
     "singleQuote": true,
     "printWidth": 120
   }
   ```

6. Material-ui 설치
   > https://material-ui.com/getting-started/installation/ 참고

## Step 2. 배포

firebase 공식 홈페이지 참고!

1. Firebase 에서 프로젝트 생성
2. firebase tool 설치
   ```
   $ sudo npm install -g firebase-tools
   ```
3. Init
   ```
   $ firebase login
   $ firebase init
   ```
   - Hosting: Configure and deploy Firebase Hosting sites 선택
   - What do you wnat to use as your public directory ? build
4. 프로젝트 빌드
   ```
   $ npm run build
   ```
5. 배포
   ```
   $ firebase deploy
   ```
6. script로 배포 쉽게 하기 (package.json)
   ```
   firebase-deploy: "npm run build && firebase deploy"
   ```

## Step 3. Material UI Toolbar 만들기
