import * as React from 'react';
import ReactDOM from 'react-dom/client';

//Menu
const menu=document.querySelector("#menu")
const menuButton=document.querySelector("#menu-button")

menuButton.addEventListener('click',()=>{
  menu.classList.toggle('invisible');
})


