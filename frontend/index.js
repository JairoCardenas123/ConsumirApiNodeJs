import { getClientes,nuevaCategoria,deleteCategory,editarCategory } from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargaClientes();
})
const tablaClientes = document.querySelector("#categories")


async function cargaClientes(){
    const clientes = await getClientes();
    console.log(clientes);
    clientes.forEach(element=>{
        const {CategoriaID ,CategoriaNombre, Descripcion ,Imagen} = element
        tablaClientes.innerHTML +=`
                          
        <tr>
        <th scope="row">${CategoriaID}</th>
        <td>${CategoriaNombre}</td>
        <td>${Descripcion}</td>
        <td>${Imagen}</td>
        <td> <button class="btn btn-danger delete" id="${CategoriaID}">Delete</button></td>
        <td><button type="button" class="btn btn-warning update" id=""${CategoriaID} data-bs-toggle="modal" data-bs-target="#exampleModal">update</button></td>
      </tr>
      `
    })
}

tablaClientes.addEventListener('click',(e)=>{
    if(e.target.classlist.contains('delete')){
        const id=e.target.getAttribute('id');
        borrar(id);
    }else if(e.target.classlist.contains('update')){
        const id=e.target.getAttribute('id');
        getCategoria(id);
    }
})

const borrar=(id)=>{
    const confir = confirm("desea eliminarlo");
    if(confir){
        console.log("uno");
        delet(id);
    }
}

/* LISTAR CATEGORIAS  - CRUD (R) */



/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */

const formInsert=document.querySelector('#insertFormulario')

formInsert.addEventListener('submit',(e)=>{
    insert(e);
})

const insert=(e)=>{
    e.preventDefault();
    const CategoriaNombre=document.querySelector('#name').value;
    const Descripcion=document.querySelector('#description').value;
    const Imagen=document.querySelector('#image').value;
    const categoria = {
        CategoriaNombre,
        Descripcion,
        Imagen,
    }
    console.log(categoria);

    if(validation(categoria)){
        alert("todos los datos son obligatorios")
    }return nuevaCategoria(categoria);
}
function validation(Objecto){
    return !Object.values(Objecto).every(element=>element != '')
}


/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)

/* alert("todos los datos son obligatorios")

        return nuevaCategoria(categoria);

 */


