import { Children } from "react";
import EmpForm from "./emp-form";
import './new-emp-data.css';

const NewEmpData= ({children}) => {

    return(
        <div className="emp-form-box">
            {children}
        </div>
    )
}

export default NewEmpData;