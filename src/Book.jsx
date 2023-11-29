
const Book =({title,price,image,info})=>{
    // destructuring thr props(obj)
    // const {title,price,image,info}= props;
    // console.log(props);
    return (
      <div className='book-card'>
      <img src={image}/>
      <h3>{title}</h3>
      <p>{info}</p>
        <h5>${price}</h5>
    
      </div>
    )
  }

//   deault export


export default Book