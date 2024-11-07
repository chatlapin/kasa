# React + Vite

Step-by-Step Guide
Setting up your environment
Using React Router
Creating components
Styling your application
Handling data or user interactions

1. Initialization:
Set up a new React project using Create React App.
Add the JSON data file.
Ensure the app runs correctly.
2. Routing: Install React Router.
Create routes for different pages (home, property details, error page).
Implement navigation between pages.
3. Component Creation: Build components for banners, cards, carousels, and collapses.
Ensure components are reusable and efficient.
Style components using Sass.
4. Data Fetching and Display: Fetch data from the JSON file and display it in the appropriate components.
Implement dynamic updates based on user interactions (e.g., clicking on a card).
5. Error Handling: Handle invalid URLs and display an error page.
6. Testing and Refinement: Thoroughly test the application.
Ensure it matches the design specifications.
Fix any bugs or issues.

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

vérifiez le nom de projet en package.json / npm install / react install

1. npm version check: npm -v

2. react version check: create-react-app -v (package.json)

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

-SCSS to CSS

In this CSS code, .button is a class selector. It targets any HTML element with the class attribute "button".

CSS
body {
  font-family: Arial, sans-serif;
  color: #333;
}

.button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

In this SCSS example, the .button class still targets elements with the "button" class. The @include button-style directive includes a mixin that defines common button styles, making the code more concise and reusable.

SCSS
$primary-color: #333;
$secondary-color: #4CAF50;

@mixin button-style {
  border: 1px solid $primary-color;
  border-radius: 5px;
  padding: 10px 20px;
}

body {
  font-family: Arial, sans-serif;
  color: $primary-color;

  .button {
    @include button-style;
    background-color: $secondary-color;
    color: white;
  }
}

CSS (Cascading Style Sheets):

Selectors: Target specific HTML elements to style. (e.g., p, h1, .button)
Properties: Define the style attributes (e.g., color, font-size, background-color)
Values: Assign values to properties (e.g., red, 16px, url(image.jpg))
SCSS (Sassy CSS):

Superset of CSS: It includes all CSS features and adds powerful extensions.
Variables: Define reusable values.
Nesting: Nest selectors for better organization.
Mixins: Create reusable blocks of CSS.
Functions: Define custom functions for calculations and transformations.
Partials: Organize your SCSS code into smaller, modular files.

Steps to Write CSS/SCSS
Understand the HTML Structure:

Analyze the HTML elements you want to style.
Identify the specific elements you need to target with your CSS/SCSS.
Plan Your Styles:

Decide on the overall look and feel of your website.
Sketch out a basic design or use a wireframe tool.
Consider typography, color palette, layout, and responsiveness.
Write the CSS/SCSS:

CSS:
Directly write CSS rules targeting the HTML elements.
Use specific selectors and properties to achieve the desired styles.
SCSS:
Define variables for colors, fonts, and other reusable values.
Use nesting to organize your CSS and improve readability.
Create mixins for common styles.
Use functions for calculations and transformations.
Import partial files to modularize your SCSS code.
Test and Refine:

Browser Testing:
Test your styles in different browsers to ensure cross-browser compatibility.
Use browser developer tools to inspect and debug your CSS.
Responsive Design:
Ensure your styles look good on different screen sizes.
Use media queries to adjust styles for specific screen sizes.
Performance Optimization:
Minimize file size by using CSS minification.
Optimize image sizes and use efficient CSS techniques.

Create a Partial File:

Create a new file with a _ prefix, for example, _mixins.scss.
Write your mixins, functions, or variables in this file.
Import the Partial:

Use the @import rule to import the partial file into your main SCSS file.

_mixins.scss:

SCSS
@mixin button-style {
  border: 1px solid $primary-color;
  border-radius: 5px;
  padding: 10px 20px;
}

main.scss:

SCSS
@import "_mixins";

$primary-color: #333;

body {
  font-family: Arial, sans-serif;
  color: $primary-color;

  .button {
    @include button-style;
    background-color: $primary-color;
    color: white;
  }
}

Linking Your Compiled SCSS to CSS
1. Install a Preprocessor: npm install -g node-sass
2. Compile SCSS to CSS: node-sass main.scss main.css
3. Link the CSS File to Your HTML:
<head>
    <link rel="stylesheet" href="main.css">
</head>


