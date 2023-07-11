import React from 'react';

import Button from '../../components/atoms/Button/Button';
import Input from '../../components/atoms/Input';


const Home = () => {
  function test(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <Button text='TEST' action={test} className='is-responsive is-primary'/>
      <Input labelText='test Input' className= 'is-primary' type='text' setValue={test} value={''} placeholder='test input'/>
    </div>
  );
};

export default Home;
