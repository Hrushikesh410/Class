import React,{useState} from 'react'

const Home = ({send}) => {
  const [first, setfirst] = useState("Hi")
  send(first);


  return (
    <>
      <div className='ml-5 mt-5 bg-gray-50'>Vanakam
    
    </div>
    {/* <h1>{props.name}</h1> */}
    </>

  )
}

export default Home