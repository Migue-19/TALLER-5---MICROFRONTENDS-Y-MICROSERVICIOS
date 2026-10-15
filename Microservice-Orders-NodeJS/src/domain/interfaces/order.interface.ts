/**
 * Interfaz que representa un pedido.
 *
 * Contiene la información básica necesaria para mostrar un pedido
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada pedido debe tener un `id` único, el nombre del `customer`,
 * el `product` solicitado, la `quantity` de unidades, el `total`
 * en pesos y un `status` válido.
 *
 * @example
 * ```ts
 * const pedido: Order = {
 *   id: 1,
 *   customer: 'Carlos Ramírez',
 *   product: 'Leche entera',
 *   quantity: 2,
 *   total: 9000,
 *   status: 'Pendiente'
 * };
 * ```
 */
export interface Order {
    /** Identificador único del pedido */
    id: number;

    /** Nombre del cliente que realiza el pedido */
    customer: string;

    /** Nombre del producto solicitado */
    product: string;

    /** Cantidad de unidades solicitadas */
    quantity: number;

    /** Valor total del pedido en pesos */
    total: number;

    /** Estado actual del pedido */
    status: OrderStatus;
}

/**
 * Tipo de estado de un pedido.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Pendiente'
 * - 'Enviado'
 * - 'Entregado'
 * - 'Cancelado'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: OrderStatus = 'Enviado';
 * ```
 */
export type OrderStatus = 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado';
