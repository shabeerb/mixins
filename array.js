 //data strictire 

 let a = [1,2,88,3,1,5,8,7,8,2,88,5,"test"];
 //const b = [];
 //const len = a.length;
 

//  for(let i = 0; i< len; i++){
//     if(b.indexOf(a[i]) === -1){
//         b.push(a[i]);
//     }
//  }
 

// a.sort();
// let _temp;

// for(let x = 0; x < len; x++){
//     if(a[x] !== _temp){
//         b.push(a[x]);
//         _temp = a[x];
//     }
// }

// obj = {};
// for(let i of a){
//     obj[i] = true
// }
// let b = Object.keys(obj)
//  document.write(b);
 
 //console.log([...new Set(a)]);

  
document.write("<div>" + "text javascript predifine methods" + "</div>")

//let b = [];

// for(let x = 0; x < a.length; x++){
//     b.push(a[x]);
// }

//let b = Object.assign([],a);

//let b = [...a];
//document.write(b);

// prime number is number two factor 0 1 is not 2is prime 

let isPrime = (n) => {
    if(n===2){
        return true;
    }
    if(!Number.isInteger(n) ||  n<2 || !(n%2)){
        return false;
    }
    
    for(let i = 3; i <= n-1; i++){
        if(n%i == 0){
            return false;
        }
      }   
    
      return true;
}
for(let i=0; i<20; i++){
    if(isPrime(i)){
        document.write(i + "<br />");
    }
}






















 
 