import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const employees= [
    {id: "e1", name: "Sangeeth Sivan", DOB: new Date(2001, 11, 1), exp: '4'},
    {id: "e2", name: "Sindhu Sivan", DOB: new Date(1974, 4, 128), exp: '8'},
    {id: "e3", name: "Sivan Venga", DOB: new Date(1968, 5, 27), exp: '9'},
    {id: "e4", name: "Harikrishnan", DOB: new Date(2001, 10, 17), exp: '3'},
    {id: "e5", name: "Rajeeev Batia", DOB: new Date(1995, 6, 25), exp: '9'},
  ]

  const initialState= { data: employees}

  // Defining a slice to be used
  const employeeSlice =  createSlice({
    name: 'employees',
    initialState: initialState,
    reducers: {
        // for now we use only a single reducer
        addEmployee(state, action) {
            const empData= {
                ...action.payload,
                id: Math.random.toString()
            }
            
            state.data.push(empData);
        }
    }
  })

// Defining thuks to handle dispatch actions
export const sendEmpData= (employeeData) => {
    return async (dispatch) => {
        const sendRequest= async () => {
            const response=  await fetch('https://emp-mngt-e558e-default-rtdb.firebaseio.com/employee.json', {
                method: 'PUT',
                body: JSON.stringify(employeeData)
            });

            if(!response.ok){
                throw new Error("Request Failed");
            }
        };

        try{
            await sendRequest();
        } catch(e){
            console.log(e)
        }
    }
}


const employeeStore= configureStore({
    reducer: employeeSlice.reducer
})
export default employeeStore
export const employeeActions= employeeSlice.actions;