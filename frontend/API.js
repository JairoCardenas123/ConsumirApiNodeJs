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
    try {
        await fetch (url,{
            method:'POST',
            body:JSON.stringify(categoria),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = "index.html"        
    } catch (error) {
        console.log(error);
    }
};


export const deleteCategory = async (id) => {
    try {
        await fetch(`${url},${id}`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
};



export const editarCategory = async (category,id) => {
    try {
        await fetch(`${url}/${id}`,{
            method:'POST',
            body:JSON.stringify(category),
            headers:{
                'Content-Type':'application/json'
            }
        })
        window.location.href = 'index.html'
    } catch (error) {
        console.log(error);
    }
 
};



export const obtenerCategory = async (id) => {
 
};





