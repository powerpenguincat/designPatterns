import { BookShelf, Book, Iterator } from "../../src/designPattern/core/iterator";

describe('１つ１つ数え上げる', ()=> {
    it('is if you count four books.', () => {
        const bookShelf: BookShelf = new BookShelf(4);
        bookShelf.appendBook(new Book("Around the World in 80 Days"));
        bookShelf.appendBook(new Book("Bible"));
        bookShelf.appendBook(new Book("Cinderella"));
        bookShelf.appendBook(new Book("Daddy-Long-Legs"));
        const it: Iterator = bookShelf.iterator();
        while (it.hasNext()) {
            const book: Book = it.next() as Book;
            console.log(book.getName());
        }
    });
});