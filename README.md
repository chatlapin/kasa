# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  folder-work
  terminal npm create vite@latest
  y
  Kasa
  kasa
  React
  Javascript
  
cd Kasa
npm install
npm run dev

eg.sample form src>App.jsx  h1 change Kasa

jsx: quasi-html  "class" X but using "ClassName"

delete "App.css" and "asset" 

Check -> Figma, Data
src>data>logements.json

App.jsx -- import data from 

Sep052024

étape1 initialisez le projet
summary
1.open command window
2.make a folder, mkdir
3. npx creat-react-app appname
4. code .
5. new terminal
6. cd appname    npm start
7. one div tag, eliminate all
8. save by ctrl + s
9. install bootrap
npm install react-bootstrap bootsrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
className='row row-cols-1 row-cols-sm-2 row-cols-md-3g-""

1. npm version check: npm -v

2. react version check: create-react-app -V

3. creat the react at the folder: create-react-app .

4. open VS and terminal: "npm run start"

a. preview: terminal; "npm start"

b. VS explore: node_modules; library, public; static file storage (e.g. images), SRC; making codes here, app.js; main, app.js role; app.js linking to html, package.json; project description 

c. app.js: make a blank page by eliminating all except for one div

d. using JSX grammer (1); "className"

app.js: import './App.css';

e.  using JSX grammer (2)

  let post = '강남 고기 맛집';
  
{} instead of document.querySelector('h4').innerHTML=post;

e.g. Data Binding in React

1. <h4 style={{color:'red', fontSize : '16px'}} id={post}>{post}</h4>   object data

style={{스타일명:'값'}}

-가 자바에서는 마이너스이기 때문에 폰트사이즈 붙여 쓰고 카멜케이스

인스펙터 콘솔에서 에러 메세지 확인

리턴내에 div는 하나

2. JS Destructuring:

let [a, b] = useState('남자 코트 추천'); // state를 만들어주는 함수

 <h4> {a}</h4>

 e.g. array에서 자료 뽑는 문법

 let num=[1,2];

 let[a,c] = [1,2];
 
 //let a=num[0];
 
  //let b=num[1];
 
변수와 state의 차이점. 왜 state 써야함
변동시 state 쓰던 html이 자동렌더링

3. let[글제목, b] = useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);

   let [따봉] = useState(0);

이벤트핸들러 온클릭 onClick={}안엔 함수를 넣어야함. <h4>{글제목[0]} <span onClik={}</h4>

eliminate warning messages: /* eslint-disable*/

4. et[글제목, 글제목변경 ] = useState(['남자코트 추천','강남 우동맛집','파이썬 독학']);

  <button onClick={()=>{
      글제목[0]="여자코트 추천";
      글제목변경(글제목);
    }}>글수정</button>

    array and object: reference type 
    console.log(copy==글제목);

        <button onClick={()=>{
      let copy = [...글제목];
      copy[0]="여자코트 추천";
      글제목변경(copy);
    }}>글수정</button>

 5. component
<Modal></Modal>

function Modal(){
return(
<div className="modal">
  <h4>{글제목[0]}</h4>
  <p>날짜</p>
  <p>상세내용</p>
</div>
)
 }

 const Modal=()=>{}

 let Modal=()=>{
 return(
 <div></div>
 )
 }
 error: Modal=123;

 -React Router
 Brower or Hashtag type
it can be made by bootstrap samples

 import {
    createBrowserRouter
} from "react-router-dom";

import Page404 from './pages/404.jsx';
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Layout from './pages/Layout.jsx';
import Logement from './pages/Logement';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/logement/:id",
                element: <Logement />,
            }, {
                path: "*",
                element: <Page404 />
            }

        ]
    }
]);

export default router;
    

____extra
folder "kasa" creation at Desktop

 open: click mouse (right)

create-react-app launch: npm install -g create-react-app

---error: sudo npm install create-react-app

npm update inflight uid-number fstream-ignore rimraf glob fstream tar

sudo npm install



