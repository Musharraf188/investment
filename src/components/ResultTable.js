const ResultTable =(props)=>{
    return <table className="result">
    <thead>
      <tr>
        <th>Year</th>
        <th>Total Savings</th>
        <th>Interest (Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </tr>
    </thead>
    <tbody>
        {props.data.map(yearlyData=> <tr>
        <td>{yearlyData.year}</td>
        <td>{yearlyData.savingsEndOfYear}</td>
        <td>{yearlyData.yearlyInterest}</td>
        <td>{yearlyData.savingsEndOfYear - props.intialInvestment - yearlyData.yearlyContribution * yearlyData.year}</td>
        <td>{props.intialInvestment + yearlyData.yearlyContribution * yearlyData.year}</td>
      </tr>)}
     
    </tbody>
  </table>

}

export default ResultTable;