import db from './ConfigFirebase';

//Encargado de crear nuevo pedido en firebase
export async function createDelivery(data) {
    return await db
    .collection('pedidos')
    .doc()
    .set(data);
}

//Eliminar pedido 
export async function deleteDelivery(id) {
    return await db
    .collection('pedidos')
    .doc(id)
    .delete();
}

//Actualizar pedido
export async function updateDelivery(id, data) {
    return await db
    .collection('pedidos')
    .doc(id)
    .update();
}
/* .collection('pedidos')
.onSnapshot((snapshot) => {
    const pedidos = [];

    snapshot.forEach((doc) => {
        const data = doc.data();

        data.push({
            ...data,
            id: doc.id
        })
    });
}) */