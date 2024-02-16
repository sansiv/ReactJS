import { createContext, useReducer, useState } from "react";

export const EmployeeContext= createContext({
    data: [],
    onSaveEmpData: () => {}
})

function empReducer(state,action){
    const updatedEmpData = [...state]

    if( action.type === 'ADD_EMPLOYEE'){
        const empData= {
            ...action.payload,
            id: Math.random.toString()
        }

        updatedEmpData.push(empData)
    }
    return updatedEmpData;
}

export default function EmployeeContextProvider({children}) {

    const employees= [
        {id: "e1", name: "Sangeeth Sivan", DOB: new Date(2001, 11, 1), exp: '4'},
        {id: "e2", name: "Sindhu Sivan", DOB: new Date(1974, 4, 128), exp: '8'},
        {id: "e3", name: "Sivan Venga", DOB: new Date(1968, 5, 27), exp: '9'},
        {id: "e4", name: "Harikrishnan", DOB: new Date(2001, 10, 17), exp: '3'},
        {id: "e5", name: "Rajeeev Batia", DOB: new Date(1995, 6, 25), exp: '9'},
      ]

    const [emps, dispatch] = useReducer(empReducer, employees);
    
    const addEmpDataHandler= (data) =>{
        dispatch(
            {
                type: 'ADD_EMPLOYEE',
                payload: data
            }
        )
    }

    const contextValue= {
        data: emps,
        onSaveEmpData: addEmpDataHandler
    }

    return <EmployeeContext.Provider value={contextValue}>
        {children}
    </EmployeeContext.Provider>
}