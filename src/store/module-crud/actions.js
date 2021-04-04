import firebase from 'firebase'

export function get_Juguetes({ commit }) {
    firebase
        .firestore()
        .collection("stock")
        .where("stock",">","0")
        .onSnapshot((docs) => {
            const juguetes = [];
            docs.forEach((doc) => {
                juguetes.push({
                    id: doc.id,
                    data: doc.data()
                });
            });
            //console.log(juguetes)
            commit("GET_JUGUETES", juguetes)
        });
}

export function add_Juguete(context, juguete) {
    firebase
        .firestore()
        .collection('stock')
        .add(juguete);
}

export function delete_Juguete(context, idEliminar) {
    //console.log(idEliminar)
    firebase
        .firestore()
        .collection('stock')
        .doc(idEliminar)
        .delete()
}

export async function edit_Juguete(constext, data) {
    const { juguete, id } = data
    await firebase
        .firestore()
        .collection('stock')
        .doc(id)
        .update(juguete)
}
