// Aca guardamos los datos en objetos

const usuarios = [
    { nombre: "admin", clave: "12345", tipo: "admin" },
    { nombre: "cliente", clave: "54321", tipo: "comun" },
]
  
const productos = [
    { id: "0", tipo: "jeanHombre", modelo: "Jean Kansas", precio: 2200 , img: "multimedia/kansas-2b.jpg"},
    {  id: "1", tipo: "jeanHombre", modelo: "Jean Texas", precio: 2200 , img: "multimedia/texas-2.jpg"},
    {  id: "2", tipo: "jeanHombre", modelo: "Jean Washington", precio: 2200 , img: "multimedia/washington-2.jpg"},
    {  id: "3", tipo: "jeanMujer", modelo: "Jean Indiana", precio: 2000 , img: "multimedia/Jean-Indiana-1.jpg"},
    { id: "4", tipo: "jeanMujer", modelo: "Jean Luisina", precio: 2000 , img: "multimedia/Jean-Luisina-1.jpg"},
    { id: "5", tipo: "jeanMujer", modelo: "Jean Virginia", precio: 2000 , img: "multimedia/Jean-virginia-1.jpg"},
    { id: "6", tipo: "buzo", modelo: "Buzo Hope", precio: 2450 , img: "multimedia/buzo-hope.jpg"},
    { id: "7", tipo: "buzo", modelo: "Buzo Rustico First", precio: 2500 , img: "multimedia/buzo-rustico-1.jpg"},
    { id: "8", tipo: "buzo", modelo: "Buzo Rustico Second", precio: 2500 , img: "multimedia/buzo-rustico-2.jpg"},
];
  
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];