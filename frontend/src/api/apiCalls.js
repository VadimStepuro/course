import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Login from "../components/Authorisation/Login";

export const getProducts = async () => {
    try{
        const response = await fetch ("http://localhost:8082/api/products/getAll",
        {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            credentials: "omit"
        })
        return response.json();
      }
      catch(err){
        console.log(err);
      }
}

export const getCategories = async () => {
    try{
        const response = await fetch ("http://localhost:8082/api/categories/getAll",
        {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            credentials: "omit"
        })
        return response.json();
      }
      catch(err){
        console.log(err);
      }
}

export const deleteProduct = async (id) => {
  try{
      const response = await fetch ("http://localhost:8082/api/products/delete/"+id,
      {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
          credentials: "omit"
      })
    }
    catch(err){
      console.log(err);
    }
}

export const addProduct = async (product) => {
  try{
      const response = await fetch ("http://localhost:8082/api/products/add",
      {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          credentials: "omit",
          body:JSON.stringify(product)
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const editProduct = async (product) => {
  try{
      const response = await fetch ("http://localhost:8082/api/products/edit/"+product.product_id,
      {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          credentials: "omit",
          body:JSON.stringify(product)
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}


export const authorise = async (user) => {

  
  try{
      const response = await fetch ("http://localhost:8082/api/authentication/authorise",
      {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(res => {
        let cookies = new Cookies();

        cookies.set("accessToken", res.token, {path:"/", sameSite:"None", secure:true, expires: (new Date(Date.now() + (1000 * 60 * 60 * 24) ))});
      });
    }
    catch(err){
      return (
        history("/")
      )
    }

}

export const register = async (user) => {  
  try{
      const response = await fetch ("http://localhost:8082/api/authentication/register",
      {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body:JSON.stringify(user)
      })
      .then(res => res.json())
      .then(res => {
        let cookies = new Cookies();

        cookies.set("accessToken", res.token, {path:"/", sameSite:"none", secure:true,  expires: (new Date(Date.now() + (1000 * 60 * 60 * 24) ))});
      });
    }
    catch(err){
    }

}

export const getProcessors = async () => {
  try{
      const response = await fetch ("http://localhost:8082/api/processors/getAll",
      {
          method: "GET",
          headers: {"Content-Type": "application/json"},
          credentials: "omit"
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const addProcessor = async (processor) => {
  try{
      const response = await fetch ("http://localhost:8082/api/processors/add",
      {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          credentials: "omit",
          body:JSON.stringify(processor)
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const editProcessor = async (processor) => {
  try{
      const response = await fetch ("http://localhost:8082/api/processors/edit",
      {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          credentials: "omit",
          body:JSON.stringify(processor)
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const deleteProcessor = async (id) => {
  try{
      const response = await fetch ("http://localhost:8082/api/processors/delete/"+id,
      {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
          credentials: "omit"
      })
    }
    catch(err){
      console.log(err);
    }
}

export const getVideocards = async () => {
  try{
      const response = await fetch ("http://localhost:8082/api/videocards/getAll",
      {
          method: "GET",
          headers: {"Content-Type": "application/json"},
          credentials: "omit"
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const addVideocard = async (videocard) => {
  try{
      const response = await fetch ("http://localhost:8082/api/videocards/add",
      {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          credentials: "omit",
          body:JSON.stringify(videocard)
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const editVideocard = async (videocard) => {
  try{
      const response = await fetch ("http://localhost:8082/api/videocards/edit",
      {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          credentials: "omit",
          body:JSON.stringify(videocard)
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const deleteVideocard = async (id) => {
  try{
      const response = await fetch ("http://localhost:8082/api/videocards/delete/"+id,
      {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
          credentials: "omit"
      })
    }
    catch(err){
      console.log(err);
    }
}

export const getRam = async () => {
  try{
      const response = await fetch ("http://localhost:8082/api/ram/getAll",
      {
          method: "GET",
          headers: {"Content-Type": "application/json"},
          credentials: "omit"
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const addRam = async (ram) => {
  try{
      const response = await fetch ("http://localhost:8082/api/ram/add",
      {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          credentials: "omit",
          body:JSON.stringify(ram)
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const editRam = async (ram) => {
  try{
      const response = await fetch ("http://localhost:8082/api/ram/edit",
      {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          credentials: "omit",
          body:JSON.stringify(ram)
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const deleteRam = async (id) => {
  try{
      const response = await fetch ("http://localhost:8082/api/ram/delete/"+id,
      {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
          credentials: "omit"
      })
    }
    catch(err){
      console.log(err);
    }
}

export const getCartItem = async () => {
  try{
      const response = await fetch ("http://localhost:8082/api/cartItems/getCart",
      {
          method: "GET",
          headers: {"Content-Type": "application/json"},
          credentials: "include"
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const addCartItem = async (cartItem) => {
  try{
      const response = await fetch ("http://localhost:8082/api/cartItems/add",
      {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          credentials: "include",
          body:JSON.stringify(cartItem)
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const editCartItem = async (cartItem) => {
  try{
      const response = await fetch ("http://localhost:8082/api/cartItems/edit",
      {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          credentials: "include",
          body:JSON.stringify(cartItem)
      })
      return response.json();
    }
    catch(err){
      console.log(err);
    }
}

export const deleteCartItem = async (id) => {
  try{
      const response = await fetch ("http://localhost:8082/api/cartItems/delete/"+id,
      {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
          credentials: "include"
      })
    }
    catch(err){
      console.log(err);
    }
}
