import './App.css';
import EmpDet from './emp-det';
import NewEmpData from './new-emp-data';
import { useState, useEffect} from 'react';
import EmpForm from './emp-form';
import EmployeeContextProvider from './employee-context';
import { EmployeeContext } from './employee-context';
import { useDispatch, useSelector } from 'react-redux';
import { sendEmpData } from './store';


function App() {

  const data=  useSelector(state => state.data);
  const dispatch= useDispatch();

  useEffect(() => {
    dispatch(sendEmpData(data))
  } ,[data,dispatch])

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
