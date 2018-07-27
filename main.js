 //construtor and oops function

 const x1 = "console log function is work";
document.write(typeof x1);
document.write("<br />");
 const x2 = ["arr1","arr2","arr3","arr4","arr5","arr6","arr7","arr8"]
 document.write(typeof x2);

 document.write("<br />");
 for(var i of x2){
    document.write(i + "<br />");
 } 
 //books is object
 const book1 = {
     title: 'book MVS',
     author: 'Jhone',
     year: 2018,
     getsummery: function(){
         reture `${this.title} was written ${this.author} in ${this.year}`
     }
 } 

 const book2 = {
    title: 'book neosilica',
    author: 'Saytem',
    year: 2008,
    getsummery: function(){
        reture `${this.title} was written ${this.author} in ${this.year}`
    }
} 

// console.log(book.getsummery());
console.log(Object.values(book2));
console.log(Object.keys(book2));