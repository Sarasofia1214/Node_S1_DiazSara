# Consulta SOLID contextualizada en NODE.JS

# 1. Single Responsibility Principle (SRP)

Este principio establece que una clase debe tener **solo una razón para cambiar**, es decir, debe tener **una única responsabilidad**.  

En nuestra **Book Management App**, seguiremos el SRP creando clases separadas para diferentes responsabilidades.

---

## Implementación

### `Book`
Representa una entidad libro y mantiene las propiedades relacionadas con el libro.

```JS

class Book {
  name: string;
  authorName: string;
  year: number;
  price: number;

  constructor(name: string, authorName: string, year: number, price: number, isbn: string) {
    this.name = name;
    this.authorName = authorName;
    this.year = year;
    this.price = price;
  }
}

export default Book;

```

``` JS

import Book from './book';

class BookRepository {
  private books: Book[];

  constructor() {
    this.books = [];
  }

  addBook(book: Book) {
    this.books.push(book);
  }

  getAllBooks(): Book[] {
    return this.books;
  }
}

export default BookRepository;
```


# 2. Open-Closed Principle (OCP)

Este principio establece que las clases deben estar **abiertas para extensión pero cerradas para modificación**.  Debe haber un crecimiento vertical, es Herencia ya que se enfoca en ampliar basandose en lo de atras sin tocar este.

En nuestra **Book Management App**, utilizaremos **herencia** para cumplir este principio.

---

## Implementación

Tenemos dos clases que heredan de la clase `Book`:

---

### `FictionBook`
Representa un tipo específico de libro (ficción) y extiende la clase `Book`.

```JS

import Book from './book';

class FictionBook extends Book {}

export default FictionBook;
```

```JS

import Book from './book';

class NonFictionBook extends Book {}

export default NonFictionBook;
```

# 3. Liskov Substitution Principle (LSP)

Este principio establece que los **objetos de una superclase deben poder ser reemplazados por objetos de sus subclases** sin afectar la corrección del programa.  
Se debe poder usar la subclase creada, y dede estar bien estrucutrada que debe poder funcionar sin necesidad de la clase padre.
Para esto se separan las interfaces, teniendo un estandar, algo que todos tienen en la clase super y crear otras subclases basadas en esta general ya que tienen exepciones.
En nuestra **Book Management App**, nos aseguraremos de que las subclases se comporten como se espera cuando se utilicen en lugar de la clase padre.

---

## Ejemplo

Podemos agregar un método `getType()` a cada subclase para que retorne su tipo específico.

---

### `FictionBook`

```JS
import Book from './book';

class FictionBook extends Book {
  getType(): string {
    return "Fiction Book";
  }
}

export default FictionBook;

```
```JS

import Book from './book';

class NonFictionBook extends Book {
  getType(): string {
    return "Non-Fiction Book";
  }
}

export default NonFictionBook;
```
No se comportan de igual manera(comportamiento)

# 4. Interface Segregation Principle (ISP)

Este principio establece que **una clase no debe ser obligada a implementar una interfaz que no utiliza**.  
Los metodos tienen que ver con la clase y no deben haber innecesarios.
Cuando se tiene una clase se establecen sus metodos, 


En nuestra **Book Management App**, crearemos **interfaces separadas** para asegurarnos de que cada clase implemente únicamente los métodos relevantes.

Artista = pintarCuadro, CanteCanciones, 
pintor extiende artista 
pitarCuadro();
CanteCancion();

############################################

Se debe crear interfeces mas especificas:

class Artistapintor;
class Artistcantante;
class artistabailarin;


---

## Implementación

Tenemos una interfaz llamada `BookRepositoryInterface` con dos métodos:  
- `addBook(book: Book)`  
- `getAllBooks(): Book[]`  

Al tener una interfaz específica para `BookRepository`, evitamos que clases no relacionadas implementen métodos innecesarios.

```JS
// bookRepositoryInterface.ts

import Book from './book';

interface BookRepositoryInterface {
  addBook(book: Book): void;
  getAllBooks(): Book[];
}
```

export default BookRepositoryInterface;

# 5. Dependency Inversion Principle (DIP)

Este principio establece que **los módulos de alto nivel no deben depender de los módulos de bajo nivel**.  
En su lugar, **ambos deben depender de abstracciones**.

Jererquia, crecimiento vertical hacia abajo, que el adre no dependa de los hijos.

---

## Ejemplo de Implementación

En este caso, en lugar de que el módulo principal dependa directamente de implementaciones concretas, se utiliza una abstracción (`BookRepositoryInterface`) para desacoplar las dependencias.

```Js
import Book from './book';
import FictionBook from './fictionBook';
import NonFictionBook from './nonFictionBook';
import BookRepository from './bookRepository';

const bookRepository = new BookRepository();

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 15);
const fictionBook = new FictionBook("Harry Potter", "J.K. Rowling", 1997, 20);
const nonFictionBook = new NonFictionBook(
  "Ikigai: The Japanese Secret to a Long and Happy Life",
  "Héctor García and Francesc Miralles",
  2016,
  30
);

bookRepository.addBook(book1);
bookRepository.addBook(fictionBook);
bookRepository.addBook(nonFictionBook);

const allBooks = bookRepository.getAllBooks();
console.log(allBooks);

```