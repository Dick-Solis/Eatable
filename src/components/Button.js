import styled from "@emotion/styled";

const StyledButton = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  height: 70px;
  min-width: 310px;
  border-radius: 30px;
  padding: 12px 16px;
  background-color: #FA4A0C;
  color: white;
  border: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items:center;
`;

export function Button(props){
  return(
    <StyledButton>{props.children}</StyledButton>
  )
}
