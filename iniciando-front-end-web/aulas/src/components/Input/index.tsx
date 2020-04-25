import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';
import { IconType } from 'react-icons/lib/cjs';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
  // icon: React.ComponentType;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const InputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: InputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input ref={InputRef} defaultValue={defaultValue} {...rest} />
    </Container>
  );
};

export default Input;
