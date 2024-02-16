import { createStoreHook } from 'react-redux';
import {createStore} from 'redux';

const employees= [
    {id: "e1", name: "Sangeeth Sivan", DOB: new Date(2001, 11, 1), exp: '4'},
    {id: "e2", name: "Sindhu Sivan", DOB: new Date(1974, 4, 128), exp: '8'},
    {id: "e3", name: "Sivan Venga", DOB: new Date(1968, 5, 27), exp: '9'},
    {id: "e4", name: "Harikrishnan", DOB: new Date(2001, 10, 17), exp: '3'},
    {id: "e5", name: "Rajeeev Batia", DOB: new Date(1995, 6, 25), exp: '9'},
  ]

const empReducer = (state = {data: employees}, action) => {
    const updatedEmpData= [...state.data]

    if( action.type === 'ADD_EMPLOYEE'){
        const empData= {
            ...action.payload,
            id: Math.random.toString()
        }

        updatedEmpData.push(empData)
        return {data: updatedEmpData}
    }

    return state;
}  

const employeeStore= createStore(empReducer);
 export default employeeStore;