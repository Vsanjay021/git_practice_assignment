fuction prime(num){
let count=0;
for(let i=1;i<num;i++){
if(num%i==0){
count++;
}
}if(count==2){
return true;
}return false;
}

let ans=prime(13)
if(ans==true){

cosole.log(num " is  prime")
}
else{
console.log(num "is not prime")
}