import { Order } from "../interfaces/orders.interface";

export const ORDERS_MOCK: Order[] = [
    {
        id: 1,
        customer: 'Carlos Ramírez',
        product: 'Leche entera',
        quantity: 2,
        total: 9000,
        status: 'Pendiente',
    },
    {
        id: 2,
        customer: 'Ana Gómez',
        product: 'Manzana roja',
        quantity: 5,
        total: 16000,
        status: 'Entregado',
    }
];
