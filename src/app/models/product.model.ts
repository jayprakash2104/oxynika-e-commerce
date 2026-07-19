export interface Product {
    id: number;
    name: string;
    image: string;
    price: number;
    category: string;
    originalPrice?: number;
    rating?: number;
    badge?: string;
}