import React from 'react'
import ReactDOM from 'react-dom'


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

const BooKList=()=>{
  return(
    <div>
    <Book/>
    </div>
  )
}
const Book =()=>{
  return (
    <div>
    <Image/>
    <Title/>
    </div>
  )
}

const Image = ()=>{
  return(
    <div>
      <img src='https://images-na.ssl-images-amazon.com/images/I/81WklxcuSZL._AC_UL254_SR254,254_.jpg' />
    </div>
  )
}

const Title = ()=>{
  return (
    <div>
      <h3>This is the Title</h3>
    </div>
  )
}

const Price =()=>{
  return(
    <di>
      <p></p>
    </di>
  )
}





ReactDOM.render(<BooKList/>,document.querySelector('#root'))