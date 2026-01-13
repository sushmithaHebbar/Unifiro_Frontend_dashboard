"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="bottom-left"
      autoClose={1000}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme="dark"
      toastClassName="unifiro-toast"
      progressClassName="unifiro-toast-progress"
    />
  );
}
