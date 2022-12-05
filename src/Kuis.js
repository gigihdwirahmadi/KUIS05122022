import logo from './logo.svg';
import { useState } from 'react';
import CustomInput from './component/input/CustomInput.jsx';



function Kuis(props) {
    const [A,setA]=useState("");
    const [B,setB]=useState("");
    const [AB,setAB]=useState("");
    const [BC,setBC]=useState("");
    const [C,setC]=useState("");
    const [D,setD]=useState("");
    const[Hasil,setHasil]=useState("");
 const [Matematika,setMatematika]=useState(0);
 const [Saintek,setSaintek]=useState(0);
 const [Fisika,setFisika]=useState(0);
 const [Biologi,setBiologi]=useState(0);
 const [Kimia,setKimia]=useState(0);
 const scrMatematika= (e)=>{
      setMatematika(e.target.value);
    
    }
  const scrSaintek= (e)=>{
    setSaintek(e.target.value);
  }
  const scrBiologi= (e)=>{
    setBiologi(e.target.value);
  }
  const scrFisika= (e)=>{
    setFisika(e.target.value);
  }
  const scrKimia= (e)=>{
    setKimia(e.target.value);
  }
  //nilai ABCDE
  const FA= (e)=>{
    setA(e.target.value);
  }
  const FAB= (e)=>{
    setAB(e.target.value);
  }
  const FB= (e)=>{
    setB(e.target.value);
  }
  const FBC= (e)=>{
    setBC(e.target.value);
  }
  const FC= (e)=>{
    setC(e.target.value);
  }
  const FD= (e)=>{
    setD(e.target.value);
  }
    function submit(){
        const total= (Number(Matematika) + Number(Saintek) + Number(Fisika) + Number(Kimia) + Number(Biologi))/5;
        console.log(total);
        if (total>=A){
            setHasil("A")
        }
        else if(total>=AB && total< A){
            setHasil("AB")
        }
        else if(total>=B && total< AB){
            setHasil("B")
        }
        else if(total>=BC && total< B){
            setHasil("BC")
        }
        else if(total>=C && total< BC){
            setHasil("C")
        }
        else if(total>=D && total< C){
            setHasil("D")
        }
        else if(total<=D){
            setHasil("E")
        }
    }
  return (
    <div className="container">
          
      <div class="wall">
        
      <CustomInput change={scrMatematika} name="Matematika"/>
      <CustomInput change={scrSaintek} name="Saintek"/>
      <CustomInput change={scrFisika} name="Fisika"/>
      <CustomInput change={scrBiologi} name="Biologi"/>
      <CustomInput change={scrKimia} name="Kimia"/>
      <input type="submit " class="submit btn btn-dark" value="submit" onClick={submit}/>
   
      
      </div>
      <div class="wall">
      <CustomInput change={FA} name="Batas nilai A"/>
      <CustomInput change={FAB} name="Batas nilai AB"/>
      <CustomInput change={FB} name="Batas nilai B"/>
      <CustomInput change={FBC} name="Batas nilai BC"/>
      <CustomInput change={FC} name="Batas nilai C"/>
      <CustomInput change={FD} name="Batas nilai D"/>
      </div>
      <div class="hasil ">
            <div class="hasil1">Result</div>
            <div class="hasil2">
            {Hasil}
            </div>
            </div>
    </div>

  );

}

export default Kuis;
