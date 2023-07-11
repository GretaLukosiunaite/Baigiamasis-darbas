import React from 'react';

import Button from '../../components/atoms/Button/Button';


const Home = () => {
  function test(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <Button text='TEST' action={test} className='button is-responsive is-primary'/>
    </div>
  );
};

export default Home;
