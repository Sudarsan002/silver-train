import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Button from "./components/Button";
import Title from "./components/Title";
import Input from "./components/Input";
import Heading from "./Heading";
import Heading2 from "./components/Heading2";
import Gender from "./components/Gender";


const Component1 =()=>{
    return (
    <div>
        <Header/>

        <Title/>
        <Heading type="text" label="First Name"/>
        <div>
        <Input />
        </div>
        
        <Heading2/>
        
       
        <div>
        <Input/>
        </div>
        
        <br> 
        </br>
        <Gender/>

        
        <Button label='SUBMIT' backgroundColor='#8D19FF'/>
        <Button label='Choose File'/>
    </div>
    )
}
const App = ()=>{
    return <div><Component1/></div>
}

ReactDOM.render(<App/>,document.getElementById("app"));