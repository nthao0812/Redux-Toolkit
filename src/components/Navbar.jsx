import React from "react";
import { createElement } from "react";
import styled from "styled-components";
import "./navbar.css";
import books from "./books";
import Book from "./Book";
// import img from "./image/java.jpg";
// const li = styled.div`
//   list-style: none;
//   background-color: #80d7dd;
// `;

// const detail = "More Description";
// const firstBook = {
//   author: "ABC",
// };

// const names = ["john", "peter"];
// const newNames = names.map((name) => {
//   console.log(name);
//   return <h1>{names}</h1>;
// });

const BookList = () => {
  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id);
  //   console.log(book);
  // };
  return (
    <section className="bookList">
      {books.map((book, index) => {
        console.log(book);
        return <Book {...book} key={book.id} number={index} />;
      })}

      {/* {newNames}
      <Book job="develop" />
      <Book title="random title" number={22} />
      <Book author={firstBook.author} /> */}
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquid
        sequi officiis excepturi alias quisquam! Dolores officiis ad corrupti
        laboriosam reprehenderit? Doloribus aut quos recusandae, consectetur
        accusantium aperiam dolorem quod.
      </p>
      <button>Click me</button> */}
    </section>
  );
};

// const Image = () => <img src={img} alt="" />;
// const Title = () => <h2>Marijn Haverbeke Eloquent JavaScript Programming</h2>;
// const Author = () => {
//   return <h4>Marijn Haverbeke </h4>;
// };
const Navbar = () => {
  return (
    <>
      {/* <h3 id="something" className="someValue">
        My Second Component
      </h3>
      <ul>
        <li>
          <a href="#">Hello world</a>
        </li>
      </ul> */}
      <BookList />
    </>
  );
};

// function Greeting(){
//   return React,createElement('h2,{},'hello world');
// };

export default Navbar;

//"https://m.media-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg"
