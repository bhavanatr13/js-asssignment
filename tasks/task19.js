
let name = 'sadhik';


function getData() {

    showData()


}

function showData() {
    console.log(name)
}

getData()


let array = [
    {
        id : 1,
        name : 'Bhavana'
    },
    {
        id : 2,
        name : 'Tara'
    },

]

let targetId = 1

let output = array.filter((ele,index) => ele.id == targetId)

console.log(output)


class Book {

    constructor(pages,author,type) {

        this.pages = pages
        this.author = author
        this.type = type




    }


    typeofbook() {
        console.log(this.pages,this.author,this.type)
    }



}

let mybook = new Book(250,'sadhik','action')

mybook.typeofbook()