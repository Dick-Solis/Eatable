import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Input from "../components/inputs";
import { showProduct, updateProduct } from "../services/eatable-services";
import styled from "@emotion/styled";

const StyledContentEditPage =  styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

const TitlePage = styled.p`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  display: flex;
  justify-content:center;
  margin-bottom: 50px;
`;

const StyledButton = styled.button`
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
  margin-top: 70px;
`;

const ContenButton = styled.div`
  display: flex;
  justify-content: center;

`;


export function EditProduct(){
  const {editId} = useParams();

  const [dataProduct, setDataProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    url: "",
  });


  useEffect(() => {
    showProduct(parseInt(editId,10))
    .then((data) => setDataProduct(data))
    .catch((errors) => console.log(errors));
  },[])

  function handleChange(event) {
    console.log(event.target.value);
    const { name, value } = event.target;
    setDataProduct({ ...dataProduct, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateProduct(dataProduct,(parseInt(editId,10)))
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  return (
    <StyledContentEditPage>
      <TitlePage>Edit Product</TitlePage>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={dataProduct.name}
          onChange={handleChange}
          label="Name"
        />
        <Input
          type="text"
          name="price"
          value={dataProduct.price}
          onChange={handleChange}
          label="Price"
        />
        <Input
          type="text"
          name="description"
          value={dataProduct.description}
          onChange={handleChange}
          label="Description"
        />
        <Input
          type="text"
          name="category"
          value={dataProduct.category}
          onChange={handleChange}
          label="Category"
        />
        <Input
          type="text"
          name="picture_url"
          value={dataProduct.picture_url}
          onChange={handleChange}
          label="Picture URL"
        />
        <ContenButton>
          <StyledButton type="submit">Save </StyledButton>
        </ContenButton>
      </form>
    </StyledContentEditPage>
  )
}


