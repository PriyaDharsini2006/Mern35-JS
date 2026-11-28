// console.log(fetch("https://jsonplaceholder.typicode.com/posts"));


// async function getData() {
//     return "Hello Students";
// }

// getData();

// async function getData() {
//     const data=await "Hello Students";
//     console.log(data);
// }

// getData();


//Why two .then() methods?

// Because there are two asynchronous operations:
// 1. Getting the response from the server.
// 2. Converting the response body into JSON.


// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });

// async function getData(){
//     const res=await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data=await res.json();
//     console.log(data);
// }

// getData();



// async function getData(){
//     try{
//         const res=await fetch("https://jsonplaceholder.typicode.com/posts");
//         const data=await res.json();
//         console.log(data);
//     }catch(err){
//         console.log(err);
//     }
// }

// getData();