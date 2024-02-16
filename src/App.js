import './App.css';
import EmpDet from './emp-det';
import NewEmpData from './new-emp-data';
import { useState } from 'react';
import EmpForm from './emp-form';
import EmployeeContextProvider from './employee-context';
import { EmployeeContext } from './employee-context';


function App() {

  return (
      <EmployeeContextProvider>
        <div>
          <h1 className='heading'> MY EMPLOYEE DETAILS </h1>  
          <NewEmpData>
            <EmpForm> </EmpForm>
          </NewEmpData>
          <EmpDet></EmpDet>
        </div>
      </EmployeeContextProvider>
      );
}

export default App;
