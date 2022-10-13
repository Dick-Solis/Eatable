import styled from "@emotion/styled";
import { useState } from "react";
import Input from "../components/inputs";
import { createProduct } from "../services/eatable-services";

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


export function CreateProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    picture_url: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(formData);
    createProduct(formData)
      .then((data) => setFormData(data))
      .catch((error) => console.log(error));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <StyledContentEditPage>
      <TitlePage>Create Product</TitlePage>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Name"
        />
        <Input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          label="Price"
        />
        <Input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          label="Description"
        />
        <Input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          label="Category"
        />
        <Input
          type="text"
          name="picture_url"
          value={formData.picture_url}
          onChange={handleChange}
          label="Picture URL"
        />
        <ContenButton>
          <StyledButton type="submit">Create </StyledButton>
        </ContenButton>
      </form>
    </StyledContentEditPage>
  );
}
