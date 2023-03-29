import "./navbar.css";
const Book = (props) => {
  const { img, title, author, number } = props;
  // const getSingleBook = () => {
  //   getBook(id);
  // };
  console.log(props);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <h2>{author}</h2>
      <span className="number"># {number + 1}</span>
      {/* <button>Click me</button> */}

      {/* <Image />
      <Title />
      <Author />
      <button>{detail.toLocaleUpperCase()}</button>
      <p>{props.job}</p>
      <h4>{props.author}</h4> */}
    </article>
  );
};
export default Book;
