const arr=[10,20,30,40,50];
console.log(...arr)



const arr1=[10,20,30,40,50];
const arr2=[0,...arr1];
console.log(arr2)


const arr1=[10,20,30,40,50];
const arr2=[10];
console.log([...arr1,...arr2])


//object
var marks={
    maths: 80,
    science: 90,
    english: 70
}

var total={
    totalMarks: 100,
}

var obj={
    ...marks,
    ...total
}

console.log(obj)



Rest operator
function add(...a){
    console.log(a)
}
add(10,20,30,40,50)



string methods
let str="hello world  ";
console.log(str.length)
let str1=str.trimStart()
console.log(str1.length)


console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.split(" "))
console.log(str.concat(" ","welcome"))
console.log("Mr ".concat(str))
console.log(str.indexOf("o"))
console.log(str.lastIndexOf("o"))
console.log(str.replace("world","everyone"))


Array destructing
var arr=[10,20,30,40,50];
var [a,b,c]=arr;
console.log(a+c)


Object destructing
var obj={
    name:"John",
    age:30,
    city:"New York",
    phone:1234567890
}

var {name,age,...e}=obj;
console.log(name,age,e)




Array Methods(Map,filter,Reduce)
var arr=[10,20,30,40,50];
for(var i=0;i<arr.length;i++){
    console.log(arr[i]*2)
}

var arr1=arr.map((e)=>{
    return e*2;
})
console.log(arr1)


for(var i=0;i<arr.length;i++){
    if(arr[i]>20){
        console.log(arr[i])
    }
}
var arr2=arr.filter((value)=>{
    return value>20;
})
console.log(arr2)


for(var i=0;i<arr.length;i++){
    sum+=arr[i];
}

var arr3=arr.reduce((accumulator,currvalue)=>{
    return accumulator+currvalue;
},0)
console.log(arr3)



async function getData(){
    const res=await fetch("https://dummyjson.com/products");
    const data=await res.json();
    const d=data.products.filter((e)=>{
        return e.id==28;
    })
    console.log(d)
}

getData();
