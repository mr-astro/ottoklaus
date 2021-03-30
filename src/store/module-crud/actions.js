import firebase from 'firebase'

export function get_Juguetes({ commit }) {
    firebase
    .firestore()
    .collection("stock")
    .onSnapshot((docs) => {
        const juguetes = [];
        docs.forEach((doc) => {
            juguetes.push({
                id: doc.id,
                Codigo: doc.data().codigo,
                Nombre: doc.data().nombre,
                Precio: doc.data().precio,
                Stock: doc.data().stock,
            });
        });
        //console.log(juguetes)
        commit("GET_JUGUETES", juguetes)
    });
}

export function add_Juguete({commit}){
    
}