import Header from './components/Header';
import UserTable from './components/UserTable';
import NewForm from './components/NewForm';
import { useState } from 'react';

function App() {
  const [userInput, setInput]= useState(null);
  const calculateHandler = (Input) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
setInput(Input)
  }
  if(userInput){
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
  
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
 

  // do something with yearlyData ...

  return (
    <div>
    
     <Header />
     <NewForm  onCalculate={calculateHandler}/>
     {!userInput && <p>No Investment found.</p>}
    {userInput &&  <UserTable data={yearlyData}/>}
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      </div>)
};

export default App;
