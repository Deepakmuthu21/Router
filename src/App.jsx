import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import All from './Pages/All';
import FullStack from './Pages/FullStack';
import DataScience from './Pages/DataScience';
import CyberSecurity from './Pages/CyberSecurity';
import Courses from './Pages/Courses';
import PageNotFound from './Pages/PageNotFound';
import Cards from './Components/Cards';

const App = () => {
const data = [{
  head:"Full Stack Development",
  title:"7 Unique Web Development Project Ideas for Beginners",
  Image:"https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-3.webp"

},
{
  head:"Full Stack Development",
  title:"How Long Would It Take to Be a Full Stack Developer?",
  Image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-2048x1072.webp"

},
{
  head:"Full Stack Development",
  title:"Best Full-Stack Development Project Ideas in 2024",
  Image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg"

},
{
  head:"Full Stack Development",
  title:"Top 10 Full-Stack Developer Frameworks in 2024",
  Image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg"

},
{
  head:"Data Science",
  title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
  Image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp"

},
{
  head:"Data Science",
  title:"12 Real-World Data Science Examples: Power Of Data Science",
  Image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp"

},
{
  head:"Data Science",
  title:"Roles and Responsibilities of a Data Scientist",
  Image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png"

},
{
  head:"Cyber Security",
  title:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
  Image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-2048x1152.png"

},
{
  head:"Cyber Security",
  title:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
  Image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp"

},
{
  head:"Cyber Security",
  title:"8 Different Types of Cybersecurity and Threats Involved",
  Image:"https://www.guvi.in/blog/wp-content/uploads/2022/11/Teal-Illustration-Digital-Business-Blog-Banner-1-2048x1152.png"

},
{
  head:"Cyber Security",
  title:"The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
  Image:"https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-768x402.png"

},
{
  head:"Courses",
  title:"C Programming",
  Image:"https://static.guvi.in/course-thumbnail/webps/c-programming.webp"

},
{
  head:"Courses",
  title:"Java Programming",
  Image:"https://static.guvi.in/course-thumbnail/webps/python.webp"

},{
  head:"Courses",
  title:"Python Programming",
  Image:"https://static.guvi.in/course-thumbnail/webps/python.webp"

},




]



  
  return (
    <div>
      <BrowserRouter>
<>
<Navbar/>
</>
<Routes>
  <Route path='/' element={<All data={data}/>}/>
  <Route path='/fullstack' element={<FullStack data={data}/>}/>
  <Route path='/datascience' element={<DataScience data={data}/>}/>
  <Route path='/cybersecurity' element={<CyberSecurity data={data}/>}/>
  <Route path='/courses' element={<Courses data={data}/>}/>
  <Route path='/' element={<PageNotFound/>}/>

</Routes>

</BrowserRouter>


    </div>
  );
};

export default App;