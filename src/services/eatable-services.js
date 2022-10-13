import apiFetch from "./api-fetch";

export function getProducts(){
  // respuesta que trae todos los productos
  return apiFetch(`/products`)
  // de acuerdo a la respuesa de apifectch
  // .then(res => res.json());
}

export function showProduct(id){
  return apiFetch(`/products/${id}`)
}

export function updateProduct(newProduct, id){
  return apiFetch(`/products/${id}`, {method: 'PATCH', body: newProduct})
}

export function createProduct(dataProduct){
  return apiFetch(`/products`,{body: dataProduct})
}

export function removeProduct(id){
  return apiFetch(`/products/${id}`, {method: 'DELETE'})
}
