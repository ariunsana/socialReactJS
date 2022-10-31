import{useState} from 'react';

import './App.css';

const App=()=>{
  const name ='john';
  const isNameShowing = false;
  const lol = null; 
  const [counter , setcounter] = useState(0);
  return(
    <div className='App'>
      <h1>hello ,{name}!</h1>
      <h1>hello ,{isNameShowing ? name : 'someone'}!</h1>
      <h1>hello {2+2}!</h1>
      <h1>hello react</h1>
      <h1>hello jsm</h1>
      {name ? (
        <>test</>
      ):(
        test
      )}
      {
        lol ?(
          <>test</>
        ):(
          <>
          <h1>test</h1>
          <h2>there is no name</h2></>
        )
      }
      <Person naadh={'haska'} last={'nar'} age={'25'}/>
      <Person naadh="jook" last="doe" age="20"/>
      <Person naadh= "jeak" last="big" age= {10+ 10}/>
      <>
      <button onClick={()=> setcounter((prevCount) => prevCount -1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> setcounter((prevCount) => prevCount +1)}>+</button>
      </>
    </div>
  )
}
const Person =(props)=>{
  return (
    <>
    <h1>Name: {props.naadh}</h1>
    <h2>last: {props.last}</h2>
    <h2>Age : {props.age}</h2>
    </>
  )
}



export default App;
