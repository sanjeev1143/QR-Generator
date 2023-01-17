
import styled from 'styled-components';
import './App.css';
import QRCode from 'react-qr-code';
import { useState } from 'react';

const MainContainer = styled.div`
.App{
  display:flex;
  flex-direction:column;
  align-items:center;

}
.qr-div{
  margin-top:50px;
  display:flex;
  flex-direction:column;
  align-items:center;
  border:1px solid black;
  height:500px;
  width:450px;
  border-radius: 12px;
}
.txt{
  margin-top:30px;

  font-style: normal;
font-weight: 700;
font-size: 22.8889px;
line-height: 150%;
text-align: center;
letter-spacing: 0.07em;

color: #000;


}
.grp{
  display: flex;
  margin-top:20px;

}
.btn{
  padding:5px 10px;
  color: white;
  background:black;
  border-radius: 8px;
  margin-left:20px;
}
.inp{
  border: 1px solid black;
  outline:none;
  width: 250px;
  border-radius: 8px;

}
`



function App() {
  const [txt,setTxt] = useState("");
  const [qr,setQr] = useState("");
  const change = (e)=>{
    setTxt(e.target.value);
  }


  return (<MainContainer>
    <div className="App">
      
      <div className='qr-div'>
      <h1>Get Your QR</h1>
      <QRCode value ={qr}/>
      <div className='txt'>Enter your url:</div>
      <div className='grp'><input type="text" className='inp' onChange={change} value={txt}/> <div className='btn' onClick={()=>setQr(txt)}>Generate</div></div>
       
      </div>
    </div>
    </MainContainer>
  );
}

export default App;
