/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       description: Representa un pedido del sistema
 *       required:
 *         - id
 *         - customer
 *         - product
 *         - quantity
 *         - total
 *         - status
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         customer:
 *           type: string
 *           example: Carlos Ramírez
 *         product:
 *           type: string
 *           example: Leche entera
 *         quantity:
 *           type: number
 *           example: 2
 *         total:
 *           type: number
 *           example: 9000
 *         status:
 *           type: string
 *           enum:
 *             - Pendiente
 *             - Enviado
 *             - Entregado
 *             - Cancelado
 *           example: Pendiente
 */
export {};
