import firebase from 'firebase'

export function login_User({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then( (result) => {
            const user = result.user;
            const usuario = { nombre: user.displayName, imagen: user.photoURL}
            //console.log(user)
             commit("LOGIN_USER", usuario)
            this.$router.push('/mantenedor')
            
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
        });
}

export function logout_User({commit}) {
    firebase
        .auth()
        .signOut()
        .then(() => {
            //console.log("Deslogueado");
            const usuario = { nombre: "", imagen: "" }
            commit("LOGOUT_USER", usuario)
            this.$router.push("/")
        })
}