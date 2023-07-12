import React from 'react'
import Button from '../../atoms/Button'
import { StyledHeader } from './styles';

const Header = () => {
  function test(): void {
    throw new Error('Function not implemented.');
  }

  return (
    <StyledHeader><Button text='Pridėti naują' action={test} className='is-responsive is-primary'/></StyledHeader>
  )
}

export default Header