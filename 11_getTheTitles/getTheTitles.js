const getTheTitles = function(bookList) {
    let titles = [];
    bookList.forEach(book => {
        titles.push(book.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
