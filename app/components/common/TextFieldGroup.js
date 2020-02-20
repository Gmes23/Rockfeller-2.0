import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border-bottom: 2px solid red;
  margin: 20px;
  font-family: tablet-gothic,sans-serif;
  border-left: 0px;
  border-right: 0px;
  border-top: 0px;
`;

const TextFieldGroup = ({
  field,
  value,
  error,
  type,
  onChange,
  checkUserExists,
  placeholder
}) => (
  <div>
    <Input
      onChange={onChange}
      onBlur={checkUserExists}
      value={value}
      type={type}
      name={field}
      placeholder={placeholder}
    />
    {error && <span>{error}</span>}
  </div>
);


export default TextFieldGroup;
