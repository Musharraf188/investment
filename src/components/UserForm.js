import { useState } from "react";
import classes from './UserFrom.module.css'
const intialInput ={
    'current-savings':10000,
    'yearly-contribution': 1200,
    'expected-return':7,
    duration:10
}
const UserForm =(props)=>{
    const [userInput, setInput] = useState(intialInput)
    const submitHandler =(event)=>{
        event.preventDefault();
        props.onCalculate(userInput);
    }


const resetHandler =()=>{
    setInput(intialInput)
}

    const InputCahngeHandler =(identifier, value)=>{
       setInput((prevValue)=>{
        return {
                ...prevValue, [identifier]:+value
        }

       })
    }


    return  <form className={classes.form} onSubmit={submitHandler} >
    <div className={classes['input-group']}>
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input value={userInput['current-savings']} onChange={(event)=>InputCahngeHandler('current-savings', event.target.value )}type="number" id="current-savings" />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input value={userInput['yearly-contribution']} onChange={(event)=>InputCahngeHandler('yearly-contribution', event.target.value )} type="number" id="yearly-contribution" />
      </p>
    </div>
    <div className={classes['input-group']}>
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input value={userInput['expected-return']} onChange={(event)=>InputCahngeHandler('expected-return', event.target.value )} type="number" id="expected-return" />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input value={userInput['duration']} onChange={(event)=>InputCahngeHandler('duration', event.target.value )} type="number" id="duration" />
      </p>
    </div>
    <p className={classes.actions}>
      <button onClick={resetHandler}  type="reset" className="buttonAlt">
        Reset
      </button>
      <button type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>

}

export default UserForm;

