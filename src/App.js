
import { useState } from 'react';
import './App.css';

function App(){

const [inputdata, setInputdata] = useState("");
const [arrayadata, setArraydata] = useState([]);
const [indexvalue, setIndexvalue] = useState(null);
const [isVisible, setIsVisible] = useState(false);

const AddData = (e)=>{
  setInputdata(e.target.value);

}

const Submitdata=()=>{
  setArraydata(()=>[...arrayadata,inputdata])  // spread the data and push
  setInputdata("");
  return console.log(arrayadata)
}


const deletedata = (data, index)=>{

  console.log(data)

  const deletedata = arrayadata.filter((element,index1)=>{ //filter is used to create a new array filled vth elements
    if(index1  !==index){

      return true //Include element in the new array 
    }

return false 


  })
  console.log("deletedata:-", deletedata);
  setArraydata(() => [...deletedata]);
}
 
const editfn =(data, index)=>{

  setInputdata(data);
  setIndexvalue(index);
  setIsVisible(true);
  

}
 const updatedata=()=>{
  arrayadata[indexvalue] = inputdata;
  console.log(arrayadata[indexvalue]);
  setArraydata(()=>[...arrayadata])
  setInputdata("");
  setIsVisible(false);
  
 }



  return(
   <div className='App'>
    <h1>To Do List</h1>
    <hr/>
    <input type='text' name='inputbox' placeholder='Additem...' value={inputdata}  onChange={AddData}/>
   {isVisible ? " ": <button onClick={Submitdata}>Add</button>}
    {isVisible ? <button onClick={updatedata}>Update</button>: " "}
    
    {
      arrayadata.map((data,index)=>{
      return(
      
     <div>
    <ul>
      <li key={index}>{data} <button onClick={()=>deletedata(data,index)}>Delete</button>
       <button onClick={()=>editfn(data,index)}>Edit</button></li>
    </ul>



     </div>





      )
   



      }) 




    }




   </div>

  )



}
 export default App;