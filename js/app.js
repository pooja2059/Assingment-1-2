
// [DAY1]
//  let a = 5.5;
//  console.log(Math.round (a)); 
// let b = prompt("Enter any number.")
// if(a == 1)
//     alert("I want to eat pizza.");
// else if(a == 2)
//     alert("I want to eat burger.");
// else
//     alert("I want to eat rice.");

//     //For_in=>object'key, For_of=>array , Foreach=>  
  

//     let fruit =[
//     {
//        id :1,
//        name:'apple',
//        price:450,
//        color:'red',
//     },
//     {
//         id:2,
//         name:'Mango',
//         price:455,
//         color:"yellow",
    
//     }
// ]
// fruit.forEach((e) =>{console.log(e)})

// FUNCTIONS
// function sayHello(){
//     console.log("Hello World")
// }
// sayHello();
// function add(){
//     let a = 4;
//     let b = 9;
//     c = a  =b;
//     console.log(c)
// }
//  add();

//   let sayNamaste = ()=>{ console.log("Namaste")};
//   sayNamaste();

//   let a = promt("Enter a number.");
//   let b = promt("Enter a number.");
// function myFunction (p1,p2){
//     return p1 * p2;
// }
// console.log("Namaste");
// let a = 5;
// console.log(a);
// console.log("POoja");

//[DUM]
// console.log(document);

//  let donkey = document.getElementById("heading");
// donkey.style.color = "Purple";
// donkey.style.textDecoration = "underline";

// donkey.style.cssText = "color:pink;text:decortaion;background-color:purple";
// donkey.innerHTML = "Hello World";

// let p = document.create("p");
// p.innerHTML = " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam repellendusvitae ratione necessitatibus molestiae eligendi. Ipsa dignissimos, amet, optio alias dolores impedit illo und doloribus similique et eaque officiis."
// document.body.appendchild(p);


// let newbox = document.getElementById("box");
// newbox.innerHTML = "Hello World";
// newbox.innerHTML = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam totam repellendusvitae ratione necessitatibus molestiae eligendi. Ipsa dignissimos, amet, optio alias dolores impedit illo und doloribus similique et eaque officiis.""
// document.body.append("newbox");

// let div =  document.createElement("div");
// div.style.cssText = "border 2px solid"
// let h1 =  document.createElement("h1");
// h1.innerHTML = "Hello World";
// let p =;


// async function fetchData(){
//     let loading = false;
//     try {
//         loading = true;
//         let response = await fetch("https://fakestoreapi.com/products")
//         if(response.ok){
//             let data = await response.json();
//             displayResult(data);
//          }
//     }catch(error){
//         console.error(error);
//     }finally{
//         loading = false;
//     }
//     function displayResult(data){
//         data.categories.forEach((m)=>{
//             let mealsContainer = document.getElementById("mealsContainer");
//             let div = document.createElement("div");
//             let h2 = document.createElement("h2");
//             h2.innerHTML = m.strCategory;          
//              let img =  document.createElement("img");
//             img.src = m.strCategoryThumb;
       
//      });
//      div.appendChild(img);
//      div.appendChild(h2);
//      div.appendChild(h1);
//      mealsContainer.appendChild(div);
//  }



// // let arr =  

// // [ DUM ]
// // let donkey = document.getElementById("heading");
// // donkey.style.cssText = "color:pink;text-decoration:underline;background-color:purple";
// // donkey.innerHTML = "Nepal  ";
// // donkey.innerHTML += "India";

// // let p = document.createElement("p");
// // p.style.color = "blue";
// // p.innerHTML = " lorem lipsum dolor, sit amet consectetur adipisicing elit. Corporis, hic dignissimos id alias numquam, ut quibusdam tempore, dolores accusantium molestias voluptatibus quisquam sequi. Enim, eaque dolorum illum fugit porro deleniti.";
// // document.body.appendChild(p);


// // [TASK 1 :]

// // let div = document.createElement("div");
// // div.style.cssText = "border:3px solid black; width:400px";
// // div.style.cssText = "color:black;text-decoration:underline;background-color:pink";
// // let h1 = document.createElement("h1");
// // h1.style.cssText = "color:black";
// // h1.innerHTML = "NEPAL";
// // let p = document.createElement("p");
// // p.style.cssText = "color:blue";
// // p.innerHTML = " Nepal is a small but very beautiful diverse country. It's also known as a landlocked county.";
// // div.appendChild(h1);
// // div.appendChild(p);
// // document.body.appendChild(div);

// // [ TASK 2 :]

// // let div = document.createElement("div");
// // div.style.cssText = "border:5px solid orange";

// // let h1 = document.createElement("h1");
// // let img = document.createElement("img");
// // h1.innerHTML = " I'm an Engineer.";
// // img.src = "https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8113.jpg?t=st=1719540696~exp=1719544296~hmac=93a4babbc52e3a31d0e7e7eeb3777d8e7f71ca71bea18bbdcc6dc6d5e08fb46f&w=1060"; 

// // div.appendChild(img);
// // div.appendChild(h1);

// // document.body.appendChild(div);



//  //   [[ DAY  3]
// Modules
// function sayHello(){
//     alert("Hello World");
// }

// let btn = document.querySelector("button");
// btn.addEventListner('click');  

// import { add } from "./demo.js";

// const btn = document.getElementById("btn")
// btn.addEventListener("click", add)

// [---DAY 4 ---]
// [-TAILWIND CSS]

