import React from 'react';

import { Container } from './styles';
import { useToast } from '../../hooks/toast';

import { Toast } from './Toast';

interface ToastMessage {
  id: string;
  type?: 'info' | 'sucess' | 'error';
  title: string;
  description?: string;
}

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();

  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} toast={message} removeToast={removeToast} />
      ))}
    </Container>
  );
};

export default ToastContainer;
