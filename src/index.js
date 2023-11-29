import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
import { books } from './data'
import Book from './Book'



// old approach to make component
//component always should return something

// function Welcome(){
  //   return (
    //     <div>
    //       <h1>
//       Hello World
//       </h1>
//       <p>Hello WorldHello World</p>
//     </div>
//   )
// }


//javascript(js)
// let title = 'This is the Title of the Book';
// let price = 55.9
      
// let img = 'https://images-na.ssl-images-amazon.com/images/I/81WklxcuSZL._AC_UL254_SR254,254_.jpg'
// let info ='This is the info of book'



// new approach to make component
const BooKList = () => {
  return(
    <div className='container'>
      {/* data passes through props in parent class and accesss in child class */}
      {/* <Book image="https://images-na.ssl-images-amazon.com/images/I/81WklxcuSZL._AC_UL254_SR254,254_.jpg" title = "Book1" price = {55.9}  info ="This is the info of book1" /> */}
      {/* <Book image="https://images-na.ssl-images-amazon.com/images/I/91Xs-143DlL._AC_UL254_SR254,254_.jpg" title = "Book2" price = {25.7}  info ="This is the info of book2" />
      <Book image="https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL254_SR254,254_.jpg" title = "Book3" price = {40.7}  info ="This is the info of book3" /> */}

      {books.map((b)=>{
        return <Book key={b.id} {...b} />
      })} 

    </div>
  )
}
 
ReactDOM.render(<BooKList/>,document.querySelector('#root'))