export function LOGIN_USER(state, usuario) {
    state.usuario = usuario
    state.login = true
    //console.log(state.usuario)
}

export function LOGOUT_USER(state, usuario) {
    state.login = null
    state.usuario = usuario  
}

