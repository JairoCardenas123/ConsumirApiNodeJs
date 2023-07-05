const url = 'http://localhost:4000/api/categorias'

export const getClientes = async()=>{
    try {
        const clientes = await fetch(url);
        const datosClientes = await clientes.json();
        console.log(datosClientes);
        return datosClientes; 
    } catch (error) {
        console.log(error);
    }
}

export const nuevaCategoria = async (categoria) => {
  
};


export const deleteCategory = async (id) => {
  
};



export const obtenerCategory = async (id) => {
 
};



export const editarCategory = async (category) => {
 
};





