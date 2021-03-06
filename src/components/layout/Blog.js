import React, { Component } from 'react'

export class Blog extends Component {
  render() {
    return (
      <div id="">
        <div class="container-fluid hero">
          <div className="blog">
            <div className="dark-overlay">
              <h2 className="h2-blog">A Guide to Becoming a Full-Stack Developer</h2>

            </div>
          </div>
          <div className="jumbotron lead">
              <p className="display-5">Full-Stack Web Development, is the most popular developer occupation today.<br />
                In this article I will be providing a defnitive guide to what I believe are the most important skills required to become a Full-Stack Web Developer today and land a job if you’ve never coded before.
          </p><hr />
              <h1 class="display-4">The Definitive Guide</h1>
              <p className="lead">A Full-Stack Web Developer is someone who is able to work on both the front-end and back-end portions of an application.<br /> Front-end generally refers to the portion of an application the user will see or interact with, and the back-end is the part of the application that handles the logic, database interactions, user authentication, server con guration, etc.Being a Full-Stack Developer doesn’t mean that you have necessarily mastered everything required to work with the front-end or back-end, but it means that you are able to work on both sides and understand what is going on when building an application.</p>
              <p className="lead">If you want to become a Full-Stack Web Developer and land your frst job, below is a reference guide with a list of things you should learn.</p>
            </div>
          <div className="parallax-blog-1">
            <h2 className="h2-parallax">1. HTML/CSS</h2>
          </div><div className="jumbotron">
          <p className="lead">Almost every single program, whether online or in-person, that is teaching you how to be a web developer will start with HTML and CSS because they are the building blocks of the web. Simply put, HTML allows you to add content to a website and CSS is what allows you to style your content. <be />The following topics related to HTML/CSS come up often in interviews and on the actual job when you’re working:</p>
          </div>
          <ul className="list-group lead">
            <li className="list-group-item list-group-item-action">Semantic HTML.</li>
            <li className="list-group-item list-group-item-action">Be able to explain the CSS Box Model.</li>
            <li className="list-group-item list-group-item-action">Benefts of CSS preprocessors (you don’t necessarily need to understand how to use one on a deep level, but you should to understand what they are for and how they help with development).</li>
            <li className="list-group-item list-group-item-action">CSS Media Queries to target diferent devices and write responsive CSS.</li>
            <li className="list-group-item list-group-item-action ">Bootstrap (a framework for helping design and layout content on a page and while many online programs or schools focus heavily on teaching Bootstrap, in reality it’s more important to have a deep knowledge of fundamental CSS than specifc Bootstrap features and methods).</li>
          </ul>
          <div className="parallax-blog-2">
            <h2 className="h2-parallax">2. JavaScript</h2>
          </div><div className="jumbotron">
          <p className="lead">The JavaScript language is growing more popular every year and new libraries, frameworks, and tools are constantly being released.<br />Based on the Stack Overflow Developer Survey, JavaScript is the most popular language in both Full-Stack, Front-end, and Back-end Development. <br />It’s the only language that runs natively in the browser, and can double up as a server-side language as well (as you’ll see below with Node.js). <br />Below are some topics you need to understand as a Full- Stack Developer:</p>
          </div>
          <ul className="list-group lead">
            <li className="list-group-item list-group-item-action"> Understand how to work with the DOM. Also know what JSON is and how to manipulate it.</li>
            <li className="list-group-item list-group-item-action">Important language features such as functional composition, prototypal inheritance, closures, event delegation, scope, higher- order functions.</li>
            <li className="list-group-item list-group-item-action">Asynchronous control flow, promises, and callbacks.</li>
            <li className="list-group-item list-group-item-action">Learn how to properly structure your code and modularize parts of it, things like webpack, browserify, or build tools like gulp will defnitely be helpful to know.</li>
            <li className="list-group-item list-group-item-action">Know how to use at least one popular framework (many programs will focus heavily on teaching you a library or framework like React or AngularJS, but in reality it’s much more important to have a deep understanding of the JavaScript language and not focus so much on framework-specific features. Once you have a good understanding of JavaScript, picking up a framework that sits on top of it won’t be too hard anyway).</li>
            <li className="list-group-item list-group-item-action">Although some may argue that you should be using this less or that it’s slowly dying, jQuery code still exists in most applications and a solid understanding of it will be helpful.</li>
            <li className="list-group-item list-group-item-action">Some knowledge on testing frameworks and why they’re important (some may even claim that this topic should be optional).</li>
            <li className="list-group-item list-group-item-action">Learn about some important new ES6 features (optional).</li>
          </ul>
          <div className="parallax-blog-3">
            <h2 className="h2-parallax">3. Back-End Language</h2>
          </div><div className="jumbotron">
          <p className="lead">Once you feel you’ve gotten a good grasp on HTML/CSS and JavaScript, you’ll want to move on to a back-end language that will handle things like database operations, user authentication, and application logic. All online programs and bootcamps usually focus on a specifc back-end language, and in reality in doesn’t matter which one you learn so much as long as you understand what is going on and you learn the nuances of your chosen language. <br />You’ll get a ton of di erent responses if you ask someone which back-end language is the best to learn, so below I’ve listed a few popular combinations.<br /> An important note: whichever you decide to learn, just stick with it and learn as much as you can about it—there are jobs out there for all the languages listed below.</p>
          </div>
          <ul className="list-group lead">
            <li className="list-group-item list-group-item-action">Node.js: This is a great option because Node.js is itself just a JavaScript environment which means you don’t need to learn a new language. <br />This is a big reason why a lot of online programs and bootcamps choose to teach Node.js. <br />The most popular framework you’d most likely learn to aid you in developing web applications is Express.</li>
            <li className="list-group-item list-group-item-action">Ruby: Some popular frameworks for developing in Ruby are Rails and Sinatra. Plenty of programs teach Ruby as a frst back-end language.</li>
            <li className="list-group-item list-group-item-action">Python: Some popular frameworks for developing in Python are Django and Flask.</li>
            <li className="list-group-item list-group-item-action">Java: The Java language isn’t taught so much these days when it comes to Full-Stack Web Development, but some companies do use Java as their back-end and it is still a very in-demand language (see image above).</li>
            <li className="list-group-item list-group-item-action">PHP: PHP is rarely taught in programs these days, but just like with Java, it is still very in-demand and it is a cornerstone of the web today.</li>
          </ul>
          <div className="parallax-blog-4">
            <h2 className="h2-parallax">4. Databases & Web Storage</h2>
          </div><div className="jumbotron">
          <p className="lead">When learning to build web applications, at some point you’ll probably want to store data somewhere and then access it later. <br />You should have a good grasp on the following topics related to databases and storage.</p>
          </div>
          <ul className="list-group lead">
            <li className="list-group-item list-group-item-action">Understand the bene ts of relational data, e.g. SQL.</li>
            <li className="list-group-item list-group-item-action">Learn about NoSQL databases, e.g. MongoDB.</li>
            <li className="list-group-item list-group-item-action">Understand which would be better in certain situations.</li>
            <li className="list-group-item list-group-item-action">Know how to connect a database with your chosen back-end language (e.g. Node.js + MongoDB).</li>
            <li className="list-group-item list-group-item-action">Understand the benefits of in-memory data stores like Redis or memcached.</li>
            <li className="list-group-item list-group-item-action">Web storage to store sessions, cookies, and cached data in the browser.</li>
            <li className="list-group-item list-group-item-action">Scaling databases, ACID, and ORM (all optional).</li>
          </ul>
          <div className="parallax-blog-5">
            <h2 className="h2-parallax">5. HTTP & REST</h2>
          </div><div className="jumbotron">
          <p className="lead">HTTP is a stateless application protocol on the Internet—it’s what allows clients to communicate with servers (e.g. your JavaScript code can make an AJAX request to some back-end code you have running on a server which will happen via HTTP). <br />Some important topics you should learn about are listed below:</p>
          </div>
          <ul className="list-group lead">
            <li className="list-group-item list-group-item-action">What is REST and why is it important in regards to the HTTP protocol and web applications.</li>
            <li className="list-group-item list-group-item-action">Best practices for designing a RESTful API. POST/GET requests.</li>
            <li className="list-group-item list-group-item-action">Learning how to use Chrome DevTools can be extremely helpful.</li>
            <li className="list-group-item list-group-item-action">What are SSL Certi cates.</li>
            <li className="list-group-item list-group-item-action">HTTP/2 & SPDY (optional).</li>
            <li className="list-group-item list-group-item-action">WebSockets, Web Workers, and Service Workers (all optional).</li>
          </ul>
          <div className="parallax-blog-6">
            <h2 className="h2-parallax">6. Web Application Architecture</h2>
          </div><div className="jumbotron">
          <p className="lead">Once you think you have a grasp on HTML/CSS, JavaScript, back-end programming, databases, and HTTP/REST, then comes the tricky part. <br />At this point if you want to create a somewhat complex web application, you’ll need to know how to structure your code, how to separate your files, where to host your large media files, how to structure the data in your database, where to perform certain computational tasks (client-side vs server-side), and much more There are best practices that you can read about online on, but the best way to actually learn about application architecture is by working on a large application yourself that contains several moving parts—or even better, working on a team and together developing a somewhat large/complex application.<br />This is why, for example, someone with 7+ years of experience may not necessarily know CSS or JavaScript better than someone with 2 years of experience, but over all of those years they’ve presumably worked with all sorts of difierent applications and websites and have learned how to architect and design applications (among learning other important things) to be most eficient and can see the “big picture” when it comes to development. <br />Below are some things you can read that will help you learn how to architect your web applications eficiently:</p>
          </div>
          <ul className="list-group lead">
            <li className="list-group-item list-group-item-action">Learn about common platforms as a service, e.g. Heroku and AWS. Heroku allows you to easily upload your code and have an application up and running with very little configuration or server maintenance and AWS offers dozens of products and services to help with storage, video processing, load balancing, and much more.</li>
            <li className="list-group-item list-group-item-action">Performance optimization for applications and modern browsers.</li>
            <li className="list-group-item list-group-item-action">Some opinions on what a web application architecture should include.</li>
            <li className="list-group-item list-group-item-action"> Designing Web Applications by Microsoft.</li>
            <li className="list-group-item list-group-item-action">MVC.</li>
            <li className="list-group-item list-group-item-action">Most importantly though you should try to work on projects with people, look at codebases of popular projects on GitHub, and learn as much as you can from senior developers.</li>
          </ul>
          <div className="parallax-blog-7">
            <h2 className="h2-parallax">7. Git</h2>
          </div><div className="jumbotron">
          <p className="lead">Git is a version control system that allows developers working on a team to keep track of all the changes being made to a codebase. <br />It’s important to know a few important things related to Git so that you understand how to properly get the latest code that you’ve missed, update parts of the code, make fixes, and change other people’s code without breaking things. <br />You should de nitely learn the concept behind Git and play around with it yourself.</p>
          </div>
          <div className="parallax-blog-8">
            <h2 className="h2-parallax">8. Basic Algorithms & Data Structures</h2>
          </div><div className="jumbotron">
          <p className="lead">This topic is somewhat polarizing in the development world because there are developers who don’t think there should be such a heavy focus on computer science topics like tree traversal, sorting, algorithm analysis, matrix manipulation, etc. in web development. However, there are companies like Google that are notorious for asking these types of questions in their interviews. <br />As someone said about the Front- End engineering interview at Google: That said, as Ryan McGrath mentions, our front-end (FE) engineers are expected to have a solid CS background, like all our engineers. <br />While there are companies that practically require applicants to have a computer science degree or equivalent, there are plenty of companies that will hire people without this technical qualifcation if they can prove that they know how to develop applications and show an understanding of the whole domain. <br />But part of being a competent developer and not writing ineficient code or using the wrong tools is an understanding of some basic algorithms and data structures and being able to analyze trade-offs. <br />So here are some things you should definitely learn:</p>
          </div>
          <ul className="list-group lead"  >
            <li className="list-group-item list-group-item-action">Improving your Algorithms & Data Structure Skills.</li>
            <li className="list-group-item list-group-item-action">Study hash tables and try to understand them on a deeper level. This data structure underlies objects in JavaScript (dictionaries in Python and hashes in Ruby).</li>
            <li className="list-group-item list-group-item-action">Understand how trees and graphs can be bene cial as data structures.</li>
            <li className="list-group-item list-group-item-action">Understand the basics of Big-O analysis so you don’t do silly things like create a nested loop 3 levels down if you don’t need to!</li>
            <li className="list-group-item list-group-item-action">Know when to use an object vs an array and understand the trade-offs.</li>
            <li className="list-group-item list-group-item-action">Learn why caching is so important when working with a large amount of data. <br />Also learn the pros and cons of in-memory vs disk storage.</li>
            <li className="list-group-item list-group-item-action">Learn the difference between queues and stacks.</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Blog;
