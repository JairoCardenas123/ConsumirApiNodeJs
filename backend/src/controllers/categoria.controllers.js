import getConnection from "./../db/database.js"

const getCategorias = async (req,res) => {
    try {
        const connection = await getConnection();
    const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}

const getCategoria = async (req,res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE categoriaID = ?", id);
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}

const addCategories = async(req,res)=>{
    try {
        const {CategoriaNombre,Descripcion,Imagen} = (req.body);

        const category ={CategoriaNombre,Descripcion,Imagen}       
        const connection = await getConnection();

        const result = await connection.query("INSERT INTO categorias SET ?",category)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
}
const deleteCategoria = async (req,res) => {
    try {
    const {id} = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM categorias WHERE CategoriaID = ?", id);
    console.log(result);
    res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
    
}

const updateCategories = async (req, res)=>{
    try {
        const {id} = req.params;

        const {CategoriaNombre, Descripcion, Imagen} = req.body;

        const category = {CategoriaNombre, Descripcion,Imagen}       
        const connection = await getConnection();

        const result = await connection.query("UPDATE categorias SET ? WHERE CategoriaID = ?",[category, id])
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.mensaje);
    }
}

export const methodsHTTP = {
    getCategorias,
    addCategories,
    getCategoria,
    deleteCategoria,
    updateCategories
}   

