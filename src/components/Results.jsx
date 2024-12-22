import { calculateInvestmentResults, formatter } from '../util/investment.js'



export default function Results({infoObj}) {
    function deriveResult(infoObj) {
        const adaptedObj = {
            "initialInvestment": +infoObj["INITIAL INVESTMENT"],
            "annualInvestment": +infoObj["ANNUAL INVESTMENT"],
            "expectedReturn": +infoObj["EXPECTED RETURN"],
            "duration": +infoObj["DURATION"],
        }
        console.log(adaptedObj)
        return calculateInvestmentResults(adaptedObj);
    }

    const result = deriveResult(infoObj);
    const initialInvestment = result[0].valueEndOfYear = result[0].interest - result[0].annualInvestment;

    return (
        <table id='result'>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            <tbody>
                {result.map((yearData)=>{
                    const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                    return(
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}