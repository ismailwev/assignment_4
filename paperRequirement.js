function paperRequirement(firstBook, secondBook, ThirdBook) {
    firstBookPage = 100;
    secondBookPage = 200;
    ThirdBookPage = 300;
    first = firstBook * firstBookPage;
    second = secondBook * secondBookPage;
    third = ThirdBook * ThirdBookPage;
    const total = first + second + third;
    return total;
}

const books = paperRequirement(2, 5, 1);
console.log(books)