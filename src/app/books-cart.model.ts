export module BooksCartModel {
    export class BooksDetails {
        id: string;
        author: string;
        name: string;
        price: string;
        inStock: boolean;
        pages_i?: number;
    }
}