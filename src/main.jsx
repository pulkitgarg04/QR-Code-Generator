import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home, CreateQrCode, ScanQrCode } from "./components/index.js";
import Layout from './Layout.jsx';
import ErrorPage from './ErrorElement.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="" element={<Home />} />
      <Route path="/create-qr-code" element={<CreateQrCode />} />
      <Route path="/scan-qr-code" element={<ScanQrCode />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
