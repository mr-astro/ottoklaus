export function GET_JUGUETES(state, juguetes){
    state.juguetes = juguetes
    //console.log(state.juguetes)
}

export function ELIMINARID(state, id) {
    //console.log(id)
    state.idEliminar = id
}

export function EDITARID(state, idEditar) {
    //console.log(idEditar)
    state.idEditar = idEditar
}