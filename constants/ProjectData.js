import project4 from "../Project-img/project4.jpeg";
import project5 from "../Project-img/project5.jpeg";
import project8 from "../Project-img/project8.jpeg";
import project9 from "../Project-img/project9.png";
import project10 from "../Project-img/project10.png";
import project11 from "../Project-img/project11.png";
import project1 from "../Project-img/project1.png";
import project2 from "../Project-img/project2.png";
const date = new Date();
const ProjectData = [
  {
    projectName: "Instagram Clone",
    projectImage: project1,
    id: date.getTime(),
    details:
      "This is an instagram clone created by me using <h4>MERN Stack</h4>.In this clone there are multiple functionalities.This is a <h4>CRUD</h4> application in which user can create his account delete his account update his profile and password create post post a comment view his posts on his profile visit other user profiles and see their post and I also used <h4>Protected Routes</h4> by which user cannot create post and cannot do some other functionalities if he is not logged in and you can check other functionalities by visiting the site here <a href='https://insta-frontend-six.vercel.app/'>Visit</a>",
    link: "https://insta-frontend-six.vercel.app/",
    git: "https://github.com/HadeedTariq/insta-frontend",
  },
  {
    projectName: "Blogging CMS",
    projectImage: project2,
    id: date.getTime(),
    details:
      "This is an blogging platform and a <h4>CMS</h4> created by me using <h4>MERN Stack</h4>.In this clone there are multiple functionalities.This is a <h4>CRUD</h4> application in which user can create his account delete his account update his profile and password and create a blog post with uploading image coding functionality like a real world blog application and I also used <h4>Protected Routes</h4> by which user cannot create a blog post and cannot do some other functionalities if he is not logged in and you can check other functionalities by visiting the site here <a href='https://blogify-blogs.vercel.app/'>Visit</a>",
    link: "https://blogify-blogs.vercel.app/",
    git: "https://github.com/HadeedTariq/blog-frontend",
  },
  {
    projectName: "Nike Clone",
    projectImage: project8,
    details:
      "This is a nike clone only front end and a basic e-commerce like store with great design and you can check other functionalities by visiting the site here <a href='https://nike-web-clone.netlify.app/'>Visit</a>",
    id: date.getTime(),
    link: "https://nike-web-clone.netlify.app/",
    git: "https://github.com/HadeedTariq/nike-clone",
  },
  {
    projectName: "Ecommerce Store",
    projectImage: project9,
    details:
      "This is an ecommerce store only where user can add product to cart increase products quantity and you can check other functionalities by visiting the site here <a href='https://next-ecommerce-two-beryl.vercel.app/'>Visit</a>",
    id: date.getTime(),
    link: "https://next-ecommerce-two-beryl.vercel.app/",
    git: "https://github.com/HadeedTariq/next-ecommerce",
  },
  {
    projectName: "Tic Tac Toe",
    projectImage: project4,
    details:
      "Tis is a basic tic tac toe game you can visit here <a href='https://creative-yeot-d51fe9.netlify.app/'>Visit</a>",
    id: date.getTime(),
    link: "https://creative-yeot-d51fe9.netlify.app/",
    git: "https://github.com/HadeedTariq/Tic-Tac-Toe-Game",
  },
  {
    projectName: "Qr Code Generator",
    projectImage: project5,
    details:
      "This is a basic qr code generator for your links you can visit here <a href='https://storied-hummingbird-4ff62a.netlify.app/'>Visit</a>",
    id: date.getTime(),
    link: "https://storied-hummingbird-4ff62a.netlify.app/",
    git: "https://github.com/HadeedTariq/Qr-Code-Generator",
  },
];
export default ProjectData;
