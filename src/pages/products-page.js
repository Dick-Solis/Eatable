import { useEffect, useState } from "react";
import { getProducts, removeProduct } from "../services/eatable-services";
import { NavLink, Outlet } from "react-router-dom";
import { Modal } from "../components/modal";
import styled from "@emotion/styled";
import { CarProducts } from "../components/card-Products";
import { Button } from "../components/Button";


const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  gap: 34px;
`;

const ContainerProductsCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;


const StyledButtonDelete = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  width: 262px;
  height: 47px;
  width: 262px;
  height: 47px;
  background-color: #FA4A0C;
  border: none;
  border-radius: 30px;
  color: white;
`;

const StyledButtonCancel = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 10px;
  width: 262px;
  height: 47px;
  background: #EFB60E;
  border-radius: 30px;
  border: none;
  color: white;
`;

export function ListFoods() {
  const [dataProducts, setDataProudcts] = useState([]);
  const [state, setState] = useState({
    active: false,
    id: null,
  });

  useEffect(() => {
    getProducts()
      .then((data) => setDataProudcts(data))
      .catch((errors) => console.log(errors));
  }, [state]);



  function handleModal(id_product) {
    setState({ active: true, id: id_product })
  }

  return (
    <ContainerProducts>
      <Modal state={state} newState={setState}>
        <h2>Are you sure?</h2>
        <StyledButtonDelete onClick={()=> {
          removeProduct(state.id)
          setState({ active: false, id: null })
          }}>Yes, delete it!</StyledButtonDelete>
        <StyledButtonCancel onClick={() => setState({ active: false, id: null })}>
          No, cancel!
        </StyledButtonCancel>
      </Modal>

      <h1>Products Dashboard</h1>

      <ContainerProductsCard>
        {dataProducts.map((products) => (
          <CarProducts products={products} key={products.id} onModal={handleModal}>

          </CarProducts >
        ))}
      </ContainerProductsCard>
      <Button>
        <NavLink to={`/create/`} style={{textDecoration:"none", color:"white"}}>Create Product</NavLink>
      </Button>
      <Outlet />
    </ContainerProducts>
  );
}
