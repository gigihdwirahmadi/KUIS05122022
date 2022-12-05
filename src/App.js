import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Input from './component/input/input.jsx';
import {useRef} from 'react';


function App(props) {
 const [berat,setberat]=useState(0);
 const [tinggi,settinggi]=useState(0);
 const [hasil,sethasil]=useState("");
 const inputtinggi= (e)=>{
      settinggi(e.target.value);
    }
  const inputberat= (e)=>{
    setberat(e.target.value);
  }
    function submit(){
        const total= berat/((tinggi/100)*(tinggi/100));
        if (total<18.5){
            sethasil(`${total} kurang berat badan`)
        } 
        else if (total>=18.5 && total<22){
          sethasil(`${total} normal`)
        } 
        else if (total>=23 && total<25){
          sethasil(`${total} kelebihan berat badan`)
        } 
        else if (total>=25 && total<=29.5){
          sethasil(`${total} obesitas tingkat 1`)
        } 
        else if (total>30){
          sethasil(`${total} obesitas tingkat 2`)
        }
    }
  return (
    <div className="container">
      <div class="form">
        <div class="wall">
      <Input change={inputtinggi} name="tinggi"/>
      
      <Input change={inputberat} name="Berat"/>
      
      <input type="submit " class="submit btn btn-dark" value="submit" onClick={submit}/>
      <div class="hasil ">{hasil}</div>
      </div>
      </div>
    </div>
  );

}

export default App;
