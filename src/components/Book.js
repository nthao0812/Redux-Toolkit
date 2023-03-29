const Book = (props) => {
  const { img, title, author, id } = props;
  // const getSingleBook = () => {
  //   getBook(id);
  // };
  console.log(props);

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2> {title} </h2>
      <button>Click me</button>

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
