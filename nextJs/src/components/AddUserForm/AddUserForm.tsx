"use client";
import { User } from '@/src/Models/User';
import { addUser, fetchUser, updateUser } from '@/src/services/UsersApi';
import { useRouter } from 'next/navigation'
import React, { useState,useEffect, ChangeEvent, FormEvent } from 'react';

interface AddUserFormProps {
  id?: any; //if Present we are editing a user instead
}

const AddUserForm: React.FC<AddUserFormProps> = ({ id }) => {
  const BLANK_USER = {
    firstName: '',
    lastName: '',
    email: '',
  }
  const router = useRouter();
  const [user, setUser] = useState<User>(BLANK_USER);

  useEffect(() => {
    if(id){
      getUser(id);
    }
  }, [id]);

  const getUser = async (id) => {
    if(id){
      const foundUser = await fetchUser(id);
      setUser(foundUser);
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    id ? await updateUser(user) : await addUser(user);
    //Same here I would Usually add here a Alert or sucess toat to notify the user of success/errors
    router.push("/");
  };

  return (
    <div className='p-10'>
      <h2 className='text-xl font-bold pb-10'>{id ? 'Edit' : 'Add'} User</h2>
      <form onSubmit={handleSubmit}>
        <div className=' grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
          <div className='sm:col-span-4'>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="firstName">First Name</label>
            <div className='mt-2'>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                <input value={user.firstName} onChange={handleChange} type="text" name="firstName" id="firstName" autoComplete="firstName" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="First Name"></input>
              </div>
            </div>
          </div>
          <div className='sm:col-span-4'>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="lastName">Last Name</label>
            <div className='mt-2'>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                <input value={user.lastName} onChange={handleChange} type="text" name="lastName" id="lastName" autoComplete="lastName" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Last Name"></input>
              </div>
            </div>
          </div>
          <div className='sm:col-span-4'>
            <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="email">Email</label>
            <div className='mt-2'>
              <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                <input value={user.email} onChange={handleChange} type="text" name="email" id="email" autoComplete="email" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Email"></input>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="mt-8 py-4 px-4 rounded-lg bg-blue-500 text-white">Submit</button>
      </form>
    </div>
  );
};

export default AddUserForm;