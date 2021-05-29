export interface Aggregate {
    iterator(): Iterator;
}

export interface Iterator {
    hasNext(): boolean;
    next(): Object;
}

export class Book {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName = (): string => this.name;
}

export class BookShelf implements Aggregate {
    private books: Book[];
    private last: number = 0;

    constructor(maxsize: number) {
        this.books = Array(maxsize).map(x => new Book(x));
    }

    getBookAt = (index: number): Book => this.books[index];

    appendBook = (book: Book): void => {
        this.books[this.last] = book;
        this.last++;
    }
    
    getLength = (): number => this.last;

    iterator = (): Iterator => new BookShelfIterator(this);
}

export class BookShelfIterator implements Iterator {
    private bookshelf: BookShelf;
    private index: number;

    constructor(bookShelf: BookShelf) {
        this.bookshelf = bookShelf;
        this.index = 0;
    }

    hasNext = (): boolean => this.index < this.bookshelf.getLength();

    next = (): Object  => {
        const book: Book = this.bookshelf.getBookAt(this.index);
        this.index++;
        return book;
    }
}