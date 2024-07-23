import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName: "",
        email: "",
    })
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]:value});
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
            .then((Response)=>{
                console.log(Response); 
            }).catch((error)=>{
                console.log(error);
        });
    };

  return (
    <div className="flex max-w-2xl mx-auto shadow borader-b">
        <div className='px-8 py-8'>
            <div className='font-thin text-2xl tracking-wider'>
                <h1>Add New Employee</h1>
            </div>
            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                        first name
                </label>
                <input 
                    type='text'
                    name="firstName"
                    value={employee.firstName}
                    onChange={(e)=> handleChange(e)}
                    className='h-10 w-96 border mt-2' px-2 py-2></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                        last name
                </label>
                <input 
                    type='text'
                    name="lastName"
                    value={employee.lastName}
                    onChange={(e)=> handleChange(e)}
                    className='h-10 w-96 border mt-2' px-2 py-2></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4'>
                <label className='block text-gray-600 text-sm font-normal'>
                        email
                </label>
                <input 
                    type='email'
                    name="email"
                    value={employee.email}
                    onChange={(e)=> handleChange(e)}
                    className='h-10 w-96 border mt-2' px-2 py-2></input>
            </div>

            <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-600 py-2 px-6 hover:bg-green-900 '>
                        Save
                </button>
                <button className='rounded text-white font-semibold bg-red-600 py-2 px-6 hover:bg-red-900'>
                        Clear
                </button>
  
            </div>

        </div>
    </div>
  )
}

export default AddEmployee