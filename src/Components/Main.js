import React from 'react'
import Keypad from './Keypad'
import Result from './Result'
import '../App.css'

const Main = () =>{
    const [result,setResult] = React.useState("")

    const onClick = (button) =>{
        if(button === "="){
            FindResult()
            // console.log(button);
        }

        else if(button === "C"){
            reset()
            // console.log(button);
        }
        else if(button === "CE"){
            backspace()
            // console.log(button);
        }

        else {
            setResult(result + button)
            // console.log(result)
            // console.log(button)
        }
    }


   const FindResult = () => {
        var checkResult = ''
        if(result.includes('--')){
            checkResult = result.replace('--','+')
        }

        else {
            checkResult = result
        }

        try {
            let temp = (eval(checkResult) || "" ) + "";
            setResult(temp)
        } catch (e) {
            setResult({
                result: "error"
            })

        }
    };

   const reset = () => {
        setResult("")
    };

   const backspace = () => {
        setResult(result.slice(0, -1))
    };



    return (
        <div>
            <div className="calculator-body"> 
                <h1>SIMPLE CALCULATOR</h1>
                <Result result = {result}/>
                <Keypad onClick = {onClick}/>
            </div>
        </div>
    )
}

export default Main;