import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from "@emotion/react";
import { global, reset } from "./styles";
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import { EditProduct } from './pages/editProducts-page';
import { ShowProduct } from './pages/showProduct-page';
import { CreateProduct } from './pages/createProduct-page';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // el secure mode hace que dos veces se repita
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<App/>} />
        <Route path='edit'>
          <Route path=':editId' element={<EditProduct/>}/>
        </Route>
        <Route path='show'>
          <Route path=':showId' element={<ShowProduct/>}/>
        </Route>
        <Route path='create' element={<CreateProduct/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
