import './emp-dob.css'

function EmpDob(props){
  console.log(props.DOB)
  const year= props.DOB.getFullYear();
  const month= props.DOB.toLocaleString('en-US', {month: 'long'});
  const day= props.DOB.toLocaleString('em-US', {day: '2-digit'});
  return(
    <div className="emp-date-box">
        <div className='emp-dob-month'> {month}</div>
        <div className='emp-dob-year'> {year} </div>
        <div className='emp-dob-day'> {day} </div>
    </div>
  )
}

export default EmpDob;
