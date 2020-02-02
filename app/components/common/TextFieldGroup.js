import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border-bottom: 1px solid red;
  margin: 20px;
`;

const TextFieldGroup = ({
  field,
  value,
  label,
  error,
  type,
  onChange,
  checkUserExists,
}) => (
  <div>
    <label>{label}</label>
    <Input
      onChange={onChange}
      onBlur={checkUserExists}
      value={value}
      type={type}
      name={field}
    />
    {error && <span>{error}</span>}
  </div>
);

TextFieldGroup.propTypes = {
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  checkUserExists: React.PropTypes.func,
};

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;
