import React from 'react';


import Input from '../../components/atoms/Input';


const Home = () => {
  function test(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
    
      <Input labelText='test Input' className= 'is-primary' type='text' setValue={test} value={''} placeholder='test input'/>
    </div>
  );
};

export default Home;
