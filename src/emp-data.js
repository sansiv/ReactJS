import EmpDob from "./emp-dob";
import { useState } from "react";
import './emp-data.css'

function EmpData(props){
    // const [emp_name, setEmpName] = useState(props.name)
    // const change_name= () => {
    //     setEmpName('Changed');
    // }
    return(
        
        <div className='emp-data'>
            < div className="emp-details">
                <div className='emp-name'> {props.name} </div>
                <div className='emp-dob'> <EmpDob DOB={props.DOB}></EmpDob> </div>
                <div className='emp-exp'> {props.exp} </div>
                {/*<button onClick={change_name}> Change</button>*/}
            </div>    
        </div>
        
    )
}

export default EmpData;