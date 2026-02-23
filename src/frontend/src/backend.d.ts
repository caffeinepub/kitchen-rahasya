import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Order {
    customerName: string;
    productName: string;
    orderId: bigint;
    selectedWeight: string;
    address: string;
    price: bigint;
}
export interface OrderInput {
    customerName: string;
    productName: string;
    selectedWeight: string;
    address: string;
    price: bigint;
}
export interface backendInterface {
    getAllOrders(): Promise<Array<Order>>;
    getOrderById(orderId: bigint): Promise<Order | null>;
    submitOrder(orderInput: OrderInput): Promise<bigint>;
}
