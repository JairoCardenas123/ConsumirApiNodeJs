import { getClientes/* nuevoCliente */ } from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargaClientes();
})

async function cargaClientes(){
    const clientes = await getClientes();
    console.log(clientes);
    const tablaClientes = document.querySelector("#categories")
    clientes.forEach(element=>{
        const {CategoriaID ,CategoriaNombre, Descripcion ,Imagen} = element
        tablaClientes.innerHTML +=`
                          
        <tr>
        <th scope="row">${CategoriaID}</th>
        <td>${CategoriaNombre}</td>
        <td>${Descripcion}</td>
        <td>${Imagen}</td>
    
     
        
      </tr>
      `
    })
}

/* LISTAR CATEGORIAS  - CRUD (R) */



/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */



/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)


