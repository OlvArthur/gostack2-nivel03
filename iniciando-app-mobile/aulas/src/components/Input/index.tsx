import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import { TextInputProps, TextInput as RNTextInput } from 'react-native';
import { useField } from '@unform/core';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}
const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  { name, icon, ...rest },
  ref
) => {
  const textInputRef = useRef<RNTextInput>(null);
  const { fieldName, defaultValue = '', error, registerField } = useField(name);

  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useImperativeHandle(ref, () => ({
    focus() {
      textInputRef.current?.focus();
    },
  }));

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(reference: any, value: string) {
        inputValueRef.current.value = value;
        textInputRef.current?.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        textInputRef.current?.clear();
      },
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      <Icon name={icon} size={20} color="#666360" />

      <TextInput
        ref={textInputRef}
        placeholderTextColor="#666360"
        keyboardAppearance="dark"
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        defaultValue={defaultValue}
        {...rest}
      />
    </Container>
  );
};
export default forwardRef(Input);
