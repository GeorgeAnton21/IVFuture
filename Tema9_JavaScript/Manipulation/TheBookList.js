    var books = [
      {title: 'Coloriages mystères Disney Princesses: Coloriez les chiffres',
       img: 'https://m.media-amazon.com/images/I/51A2qeNcOrL._SX361_BO1,204,203,200_.jpg',
       author: 'Jeremy Mariez',
       alreadyRead: false
      },
      {title: 'Coloriages Mystères Disney Portraits',
       img: 'https://m.media-amazon.com/images/I/517aoUbiWTL._SX361_BO1,204,203,200_.jpg',
       author: 'Christophe-Alexis Perez',
       alreadyRead: true
      }];

    var bookList = document.createElement('ul');
    for (var i = 0; i < books.length; i++) {
      var bookItem = document.createElement('li');
      var bookImg = document.createElement('img');
      bookImg.src = books[i].img;
      bookItem.appendChild(bookImg);
      var bookDescription = document.createTextNode(books[i].title + ' by ' + books[i].author);
      bookItem.appendChild(bookDescription);
      if (books[i].alreadyRead) {
        bookItem.style.color = 'grey';
      }
      bookList.appendChild(bookItem);
    }
    document.body.appendChild(bookList);