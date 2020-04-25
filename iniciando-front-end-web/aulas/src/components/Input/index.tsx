import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';
import { IconType } from 'react-icons/lib/cjs';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: IconType;
  // icon: React.ComponentType;
}

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...rest} />
  </Container>
);

export default Input;
