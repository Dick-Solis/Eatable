import styled from "@emotion/styled";
import { RiEditBoxFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { NavLink } from "react-router-dom";

const CardContenProduct = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width: 156px;
  left: 0%;
  right: 0%;
  top: 15.2%;
  bottom: 0%;
  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
  gap: 12px;
  padding: 5px;
  flex-wrap: nowrap;
`;

const StyledImage = styled.img`
  border-radius: 100%;
  height: 130px;
  width: 130px;
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentButtons = styled.div`
  display: flex;
  gap: 67px;
  width:100%;
`;

const StyledTitle = styled.p`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
`;

const StyledPrice = styled.p`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #FA4A0C;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent !important;
`;

export function CarProducts(props) {
  return (
    <>
      <CardContenProduct>
        <NavLink to={`/show/${props.products.id}`}>
          <StyledImage src={props.products.picture_url} alt={props.products.name}></StyledImage>
        </NavLink>
        <ContentCard>
          <StyledTitle>{props.products.name}</StyledTitle>
          <StyledPrice>$ {props.products.price}</StyledPrice>
          <ContentButtons>
            <StyledButton>
              <NavLink to={`/edit/${props.products.id}`}>
                <RiEditBoxFill color="#FA4A0C" />
              </NavLink>
            </StyledButton>
            <StyledButton
              onClick={() => props.onModal(props.products.id)}>
              <AiFillDelete color="#FA4A0C" />
            </StyledButton>
          </ContentButtons>
        </ContentCard>
      </CardContenProduct>
    </>
  );
}
