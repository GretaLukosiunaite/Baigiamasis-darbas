/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface IInputProps {
  type: 'text' | 'number' | 'email';
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  icon: any;
  className: string;
}

const InputSearch = ({
  type,
  value,
  setValue,
  placeholder,
  icon,
  className,
}: IInputProps) => {
  return (
    <div className='field'>
      <div className='control has-icons-left'>
        <span className='icon is-small is-left'>{icon}</span>
        <input
          className={className ? `input ${className}` : `input`}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder ? placeholder : ''}
        />
      </div>
    </div>
  );
};

export default InputSearch;
