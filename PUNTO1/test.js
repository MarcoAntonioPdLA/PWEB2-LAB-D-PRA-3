function listar(){
    const a='http://localhost:3000/listaArchivos';
    fetch(u).then(
        response =>response.json()
    ).then(
        data=>{
            renderlist(data);
        }
    )
}