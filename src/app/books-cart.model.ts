export module BooksCartModel {
    export class BooksDetails {
        id: string;
        author: string;
        name: string;
        price: string;
        inStock: boolean;
        cat?: Array<string>;
        series_t?: string;
        sequence_i?: number;
        genre_s?: string;
        pages_i?: number;
    }
}