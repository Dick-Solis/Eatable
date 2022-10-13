import styled from "@emotion/styled";

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  border: 1px;
  border-style: none none solid none ;
`;

const StyledLabel = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #B8B8BB;
`;

const StyledInput = styled.input`
  background-color: transparent !important;
  border: none;
  outline: none;
`;

function Input({ id, name, type="text", value, onChange, placeholder, label }) {
  return (
    <ContainerInput>
      <StyledLabel>
        {label && <label htmlFor={id || name}>{label}</label>}
      </StyledLabel>

      <StyledInput
        type={type}
        name={name}
        id={id || name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </ContainerInput>
  );
}

export default Input;
