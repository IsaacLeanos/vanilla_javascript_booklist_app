//book class - create a book

class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}


//ui class - handle ui task

class UI{
    static displayBooks(){
        const StoredBooks=[
            {title:'book1',author:'author1',isbn:'12345'},
            {title:'book2',author:'author2',isbn:'123456'}
        ]

        const books=StoredBooks;

        books.forEach(book=>UI.addBookToList(book));
    }

    static addBookToList(book){
        const list=document.querySelector('#book-list');

        const tablerow=document.createElement('tr');

        tablerow.innerHTML=`<td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td><td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;

        list.appendChild(tablerow);
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
        console.log('click the red x ;p');
    }

    static showAlert(message,className){
        const div=document.createElement('div');
        div.className=`alert alert-${className} pl-3`;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector('.container');
        const form=document.querySelector('#book-form');
        //insert div before form tag/element
        container.insertBefore(div,form);
    }

    static clearFields(){
        const title=document.querySelector('#title').value='';
        const author=document.querySelector('#author').value='';
        const isbn=document.querySelector('#isbn').value='';    
    }
}

//store class - handle storage


// event - display book

document.addEventListener('DOMContentLoaded',UI.displayBooks);

// event - add a book

document.querySelector('#book-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const title=document.querySelector('#title').value;
    const author=document.querySelector('#author').value;
    const isbn=document.querySelector('#isbn').value;

    if(title==='',author==='',isbn===''){
        UI.showAlert('Please fill in blank','danger');
    }else{
        UI.showAlert('Success','success');
        const newBook=new Book(title,author,isbn);
        console.log(newBook);
    
        UI.addBookToList(newBook);
        UI.clearFields();
    }

});

// event - remove book

document.querySelector('#book-list').addEventListener('click',(e)=>{
    const target=e.target;
    UI.deleteBook(target);
    UI.showAlert('Book Removed','warning');
});