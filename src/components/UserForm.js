import { useState } from "react";

const UserForm =(props)=>{
    const intialContent={
        'current-savings':10000,
        'yearly-contribution':1200,
        'expected-return': 16,
        duration:10
    }
    const [userInput, setInput] = useState(intialContent);
    const submitHandler =(event)=>{
event.preventDefault();
props.onCalculate(userInput);
    }
    const inputHandler =(identifier, value)=>{
setInput((prevValue)=>{
    return {...prevValue, [identifier]:+value}
})
}

const resetHandler =()=>{
   setInput(intialContent);
}
    return <form onSubmit={submitHandler} className="form">
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input value={userInput['current-savings']} onChange={(event)=>{inputHandler('current-savings', event.target.value)}} type="number" id="current-savings" />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input value={userInput['yearly-contribution']} onChange={(event) =>{inputHandler('yearly-contribution', event.target.value)}} type="number" id="yearly-contribution" />
      </p>
    </div>
    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input  value={userInput['expected-return']} onChange={(event) =>{inputHandler('expected-return', event.target.value)}} type="number" id="expected-return" />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input value={userInput['duration']} onChange={(event) =>{inputHandler('duration', event.target.value)}} type="number" id="duration" />
      </p>
    </div>
    <p className="actions">
      <button onClick={resetHandler} type="reset" className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>

}

export default UserForm;