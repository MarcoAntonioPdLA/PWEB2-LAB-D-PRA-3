function listar(){
    const a='http://localhost:3000/listaArchivos';
    fetch(a).then(
        response =>response.json()
    ).then(
        data=>{
            renderlist(data);
        }
    )
}
