import React from 'react';

interface IInputProps {
  type: 'text' | 'number' | 'email';
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  labelText?: string;
  className: string;
}

const Input = ({
  type,
  value,
  setValue,
  placeholder,
  labelText,
  className,
}: IInputProps) => {
  return (
    <div className='field'>
      <label className='label'>{labelText}</label>
      <div className='control'>
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

export default Input;
