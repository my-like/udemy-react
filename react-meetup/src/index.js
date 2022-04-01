import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';

/**
 * React v18 이후로는 ReactDomClient.createRoot를 이용하여
 * root 컴포넌트를 사용하여 render 하도록 권장한다.
 * render 함수 마지막에 context를 입력하던 파라미터가 사라졌다.
 */
const container = document.getElementById("root");
const root      = ReactDOMClient.createRoot(container);
root.render(<BrowserRouter><App /></BrowserRouter>);