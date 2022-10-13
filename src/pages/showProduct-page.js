import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showProduct } from "../services/eatable-services";
import styled from "@emotion/styled";
import { Button } from "../components/Button";
import { NavLink } from "react-router-dom";

const ContaineShowPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

const ContainerImage = styled.img`
  height: 241px;
  width: 241px;
  border-radius: 100%;
  box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.5);
  margin-bottom: 91px;
`;

const StyledTitle = styled.p`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  margin-bottom: 10px;
`;

const StyledPrice = styled.p`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #FA4A0C;
  margin-bottom: 27px;
`;

const StyledTitleDescription = styled.p`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #333333;
`;

const StyledDescription = styled.p`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 174px;
`;


export function ShowProduct() {
  let { showId } = useParams();
  const [dataProduct, setDataProduct] = useState([]);
  useEffect(() => {
    showProduct(parseInt(showId, 10))
      .then((data) => setDataProduct(data))
      .catch((errors) => console.log(errors));
  }, []);
  return (
    <ContaineShowPage>
      <ContainerImage src={dataProduct["picture_url"]} alt={dataProduct.name} />
      <StyledTitle>{dataProduct.name}</StyledTitle>
      <StyledPrice>$ {dataProduct.price}</StyledPrice>
      <StyledTitleDescription>Description</StyledTitleDescription>
      <StyledDescription>{dataProduct.description}</StyledDescription>
      <Button>
        <NavLink to={`/`} style={{textDecoration:"none", color:"white"}}>
          Go back
        </NavLink>
      </Button>
    </ContaineShowPage>
  );
}
