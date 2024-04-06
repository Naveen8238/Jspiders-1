// Currency Program :-
// let a = Number(prompt("Enter a value"));
// if(a%10===0){
//     let b=a%2000
//     let c=a/2000;
//     console.log(`you have 2000 notes ${Math.floor(c)}`)
//     if(b%10===0){
//         let d=b%500;
//         let e=b/500;
//         console.log(`you have 500 notes ${Math.floor(e)}`);
//         if(d%10===0){
//             let f=d%200;
//             let g=d/200;
//             console.log(`you have 200 notes ${Math.floor(g)}`)
//             if(f%10===0){
//                let h=f/100;
//                 console.log(`you have 100 notes ${Math.floor(h)}`);
//             }
//         }
//     }
// }
// else{
//     console.log("Please enter exact amount ");
// }

// Current Bill program :-
// let n = Number(prompt("enter current bill units"));
// if(n>200){
//     if(n>200 || n<=250){
//         let a= 50*3;
//         let b= (n-200) *3 ;
//         if(n>=250 && n<=300){
//             a += (50*5);
//             let c = (b + (n-250) * 5)
//             if(n>300){
//                 a += (n-300) * 7;
//                 console.log(`${a}`)
//             }
//             else{
//                 console.log(`${c}`)
//             }
//         }else{
//             console.log(`${b}`)
//         }
//     }
// }else{
//     console.log("you current bill is zero")
// }

//Students marks :-
// let n = prompt("enter student Name");
// let sub1=Number(prompt("enter student marks subject-1"));
// let sub2=Number(prompt("enter student marks subject-2"));
// let sub3=Number(prompt("enter student marks subject-3"));
// let sub4=Number(prompt("enter student marks subject-4"));
// let sub5=Number(prompt("enter student marks subject-5"));
// if(sub1>35 && sub2>35 && sub3>35 && sub4>35 && sub5>35){
//     let per = ((sub1+sub2+sub3+sub4+sub5) /500 )* 100
//     if(per>90){
//         console.log(`${n} got A grade`);
//     }else if (per>=80 && per <90 ){
//         console.log(`${n} is got B grade`);
//     }else if (per>=70 && per < 80){
//         console.log(`${n} got c grade`);
//     }else if (per>=60 && per<70){
//         console.log(`${n} got D grade`);
//     }else if (per>50 && per<60){
//         console.log(`${n} got E grade`)
//     }else{
//         console.log(`${n} got F grade`)
//     }
// }else{
//     console.log(`${n} is failed`)
// }

//ATM pin program :-
// let pin=Number(prompt("enter  ATM pin "))
// if(pin===1234){
//     console.log("your pin is correct")
// }else{
//     console.log('your have enter wrong pin')
// }

//vote eligible  program :-
//  let age=Number(prompt("Enter your age"))
//  if(age>=18){
//     console.log("your eligible for vote")
//  }else{
//     console.log("your not eligible for vote")
//  }

// swap two numbers using thrid varaible
// let a= 2;
// let b=3;
// let c=null;
// c=a;
// a=b;
// b=c;
// console.log(a)
// console.log(b)

// swap two without using third varaible;
// let a=2;
// let b=3;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a);
// console.log(b);

//even number or odd number
// let n= Number(prompt('Enter a Number'));
// console.log(n%2===0 ? "even" : "odd");

//function methods :
// let name1 = {
//     firstName : "Naveen",
//     lastName : "Kumar",
// }
// let printFullname = function(hometown,state){
//     console.log(this.firstName+" "+this.lastName+"from"+hometown+state);
// }
// let name2 = {
//     firstName : "Nari",
//     lastName : "Kumar",
// }
// // printFullname.call(name1)
// printFullname.apply(name2,["Kadapa","Andhra"])

//number is positive or negative
// let n = Number(prompt("enter a number"));
// if(n>0)
// console.log("postive")
// else if (n<0)
// console.log("negative")
// else
// console.log("you have enter zero number")

//leap year or not
// let year = Number(prompt(`enter year`));
// console.log(year%4 == 0 ? "leap year" : "not leap year")

//length of number
// let num = Number(prompt("Enter a number"));
// count=0;
// while(num>0){
//     count++;
//     num=Math.floor(num/10);
// }
// console.log(count)

//sum of number
// let num = Number(prompt("enter a number"));
// let rem;
// let sum=0;
// while(num>0){
//     rem=num%10;
//     sum+=rem;
//     num=Math.floor(num/10)
// }
// console.log(sum)

//palidrom number or not
// let num = Number(prompt("enter a number"));
// let num1=num;
// let rem;
// let sum=0;
// while(num>0){
//     rem=num%10;
//     sum=sum*10+rem;
//     num=Math.floor(num/10)
// }
// if(sum == num1)
// console.log(`${num1} is palindrom`)
// else
// console.log(`${num1} is not palindrom`)

//Amstrong Number or not
// let num= Number(prompt("Enter a number"));
// let num1=num;
// let rem;
// let sum=0;
// while(num>0){
//     rem=num%10;
//     sum+=(rem*rem*rem);
//     num=Math.floor(num/10);
// }
// if(sum === num1)
// console.log(`${num1} is Amstrong`)
// else
// console.log(`${num1} is not Amstrong`)

// prime number or not
// let num = Number(prompt("Enter a Number"))
// let isPrime=true;
// if(num ==1 ){
//     console.log('1 neither prime number nor composite number')
// }
// else if (num>1){
//     for(let i=2;i<num;i++){
//         if(num%i == 0){
//             isPrime=false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(`${num} is prime number`);
//     }
//     else{
//         console.log(`${num} is not prime`)
//     }
// }else{
//     console.log(`${num} is not a number`)
// }

//factorial of number :-
// function fac(n){
//     let sum=1;
//     for(let i=n;i>=1;i--){
//         sum*=i;
//     }
//     return sum;
// }
// console.log(fac(5))

//fibonnaci series
// function fibonacciSeries(n) {
//     const series = [0, 1];
//     for (let i = 2; i < n; i++) {
//       const nextNumber = series[i - 1] + series[i - 2];
//       series.push(nextNumber);
//     }

//     return series;
//   }

//   const n = 10;
//   const result = fibonacciSeries(n);
//   console.log(result);

//use strict key in Type strict
// "use strict"
// function add(){
//     "use strict"
//     console.log(this)
// }
// add();

//Hoisting in function
// a();
// var a =()=>{
//     console.log("Hello")
// }

//splice();
// let arr=[1,2,3,4,5,6,7,8,9];
// let x= arr.splice(2,0,10,11,12,13,14);
// console.log(arr);
// console.log(x)

//arrays
// let arr=[1,2,3,4,5,6,7,8,9]
// // arr[100]=67;
// // console.log(arr)
// for(let i of arr){
//     console.log(i)
// }

//pattern program :-1
// let str=""
// for(let i=1;i<=4;i++){
//     for(let j=1;j<=4;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)
// ****
// ****
// ****
// ****

//pattern program :-2
//  let str="";
//  for(let i=1;i<=4;i++){
//     for(let j=1;j<=i;j++){
//         str+="*"
//     }
//     str+="\n"
//  }
//  console.log(str);
//*
//**
//***
//****

//pattern program:3
//  let str="";
//  for(let i=1;i<=4;i++){
//     for(let j=1;j<=4;j++){
//         4>=i+j ? str+=" " : str+="*"
//     }
//     str+="\n"
// }
// console.log(str)
//    *
//   **
//  ***
// ****

//pattern program:-4
//  let str="";
//  let rows=4;
//  for(let i=1; i<=rows; i++){
//     for(let j=1;j<=(rows*2)-1;j++){
//         j>=(rows-i+1) && j<=(rows+i-1) ? str+="*" : str+= " "
//     }
//     str+="\n"
//  }
//  console.log(str)
//       *
//      ***
//     *****
//    *******

//pattern program :-5
// str=" "
// norows=Number(prompt("Enter the row numbers"))
// for(let i=1;i<=norows;i++){
//    for(let j=i;j<=norows;j++){
//       str+="*"
//    }
//    str+="\n"
// }
// console.log(str)

// *****
// ****
// ***
// **
// *

//pattern :-6
// let str=""
// let rows = Number(prompt("enter rows"))
// for(let i=1;i<=rows;i++){
//    for(let j=i;j<=rows;j++){
//       str+=" "
//    }
//    for(let j=1;j<=i;j++){
//       str+="*"
//    }
//    str+="\n"
// }
// console.log(str)
//       *
//      **
//     ***
//    ****

//pattern:-7
// let str="";
// let rows=Number(prompt("Enter a Number"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=i;j++){
//       str+=" "
//    }
//    for(let j=i;j<=rows;j++){
//       str+="*"
//    }
//    str+="\n"
// }
// console.log(str)
// ****
//  ***
//   **
//    *

//pattern:-8
// let str="";
// let rows=Number(prompt("Enter a Number"))
// for(let i=1;i<=rows;i++){
//    for(let j=i;j<=rows;j++){
//       str+=" "
//    }
//    for(let j=1;j<i;j++){
//       str+="*"
//    }
//    for(let j=1;j<=i;j++){
//       str+="*"
//    }
//    str+="\n"
// }
// console.log(str)
//       *
//      ***
//     *****
//    *******
//   *********

//pattern :-9
// let str="";
// let rows=Number(prompt("Enter a Number"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=i;j++){
//       str+=" "
//    }
//    for(let j=i;j<rows;j++){
//       str+="*"
//    }
//    for(let j=i;j<=rows;j++){
//       str+="*"
//    }
//    str+="\n"
// }
// console.log(str)
//    *********
//     *******
//      *****
//       ***
//        *

//pattern :- 10
// let str="";
// let rows=Number(prompt("enter a number"));
// for(let i=1;i<rows;i++){
//    for(let j=i;j<=rows;j++){
//       str+=" "
//    }
//    for(let j=1;j<i;j++){
//       str+="*"
//    }
//    for(let j=1;j<=i;j++){
//       str+="*"
//    }
//    str+="\n"
// }
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=i;j++){
//       str+=" "
//    }
//    for(let j=i;j<rows;j++){
//       str+="*"
//    }
//    for(let j=i;j<=rows;j++){
//       str+="*"
//    }
//    str+="\n"
// }
// console.log(str)
//       *
//      ***
//     *****
//    *******
//   *********
//    *******
//     *****
//      ***
//       *

//pattern:-11
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=i;j++){
//       str+="A"
//    }
//    str+="\n"
// }
// console.log(str)
// A
// AA
// AAA
// AAAA

//pattern:-12
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    let character = String.fromCharCode(64+i);
//    for(let j=1;j<=i;j++){
//       str+=character;
//    }
//    str+="\n"
// }
// console.log(str)
// A
// BB
// CCC
// DDDD

//pattern :-13
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1,p="A";i<=rows;i++,p++){
//    let character = String.fromCharCode(64+i);
//    for(let j=1;j<=i;j++){
//       str+=" ";
//    }
//    for(let j=i;j<=rows;j++){
//       str+=character
//    }
//    str+="\n"
// }
// console.log(str)
// AAAA
//  BBB
//   CC
//    D

//pattern :-14
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    let character = String.fromCharCode(64+i);
//    for(let j=i;j<=rows;j++){
//       str+=" ";
//    }
//    for(let j=1;j<i;j++){
//       str+=character
//    }
//    for(let j=1;j<=i;j++){
//       str+=character
//    }
//    str+="\n"
// }
// console.log(str)
//       A
//      BBB
//     CCCCC
//    DDDDDDD
//   EEEEEEEEE

//pattern:-15
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1,p="A";i<=rows;i++,p++){
//    let character = String.fromCharCode(64+i);
//    for(let j=1;j<=i;j++){
//       str+=" ";
//    }
//    for(let j=i;j<rows;j++){
//       str+=character
//    }
//    for(let j=i;j<=rows;j++){
//       str+=character
//    }
//    str+="\n"
// }
// console.log(str)
// AAAAAAAAA
//  BBBBBBB
//   CCCCC
//    DDD
//     E

//pattern:-16
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    let character = String.fromCharCode(70-i);
//    for(let j=1;j<=i;j++){
//       str+=character;
//    }
//    str+="\n"
// }
// console.log(str)
// E
// DD
// CCC
// BBBB
// AAAAA

//pattern:-17
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    let character = String.fromCharCode(63+(2*i));
//    for(let j=1;j<=i;j++){
//       str+=character;
//    }
//    str+="\n"
// }
// console.log(str)
// C
// EE
// GGG
// IIII
// KKKKK

//pattern :-18
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=i;j++){
//       if(i%2==0){
//          str+="B"
//       }else{
//          str+="A"
//       }
//    }
//    str+="\n"
// }
// console.log(str)
// A
// BB
// AAA
// BBBB
// AAAAA

// //pattern:-19
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=i;j++){
//       str+=" "
//    }
//    for(let j=i;j<=rows;j++){
//       if(i%2==0){
//          str+="0"
//       }else{
//          str+="Z"
//       }
//    }
//    str+="\n"
// }
// console.log(str)
// ZZZZZ
//  0000
//   ZZZ
//    00
//     Z

//pattern:-20
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<rows;i++){
//    let character =String.fromCharCode(64+i)
//    for(let j=i;j<=rows;j++){
//       str+=" "
//    }
//    for(let j=1;j<i;j++){
//       str+=character
//    }
//    for(let j=1;j<=i;j++){
//       str+=character
//    }
//    str+="\n"
// }
// for(let i=1;i<=rows;i++){
//    let characters =String.fromCharCode(64+rows+i)
//    for(let j=1;j<=i;j++){
//       str+=" "
//    }
//    for(let j=i;j<rows;j++){
//       str+=characters
//    }
//    for(let j=i;j<=rows;j++){
//       str+=characters
//    }
//    str+="\n"
// }
// console.log(str)
//       A
//      BBB
//     CCCCC
//    DDDDDDD
//   FFFFFFFFF
//    GGGGGGG
//     HHHHH
//      III
//       J

//pattern:-21
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<rows;i++){
//    let character =String.fromCharCode(64+i)
//    for(let j=1;j<i;j++){
//       str+=character
//    }
//    for(let j=i;j<=rows;j++){
//       str+=" "
//    }
//    for(let j=i;j<rows;j++){
//       str+=" "
//    }
//    for(let j=1;j<=i;j++){
//       str+=character
//    }
//    str+="\n"
// }
// for(let i=1;i<=rows;i++){
//    let characters =String.fromCharCode(64+rows+i)
//    for(let j=i;j<=rows;j++){
//       str+=characters
//    }
//    for(let j=1;j<i;j++){
//       str+=" "
//    }
//    for(let j=1;j<=i;j++){
//       str+=" "
//    }
//    for(let j=i;j<=rows;j++){
//       str+=characters
//    }
//    str+="\n"
// }
// console.log(str)
// A       A
// BB     BB
// CCC   CCC
// EEEE EEEE
// FFF   FFF
// GG     GG
// H       H

//pattern:-22
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=i;j++){
//       let character = String.fromCharCode(64+j);
//       str+=character;
//    }
//    str+="\n"
// }
// console.log(str)
// A
// AB
// ABC
// ABCD

//pattern:-23
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=i;j++){
//       str+=" "
//    }
//    for(let j=i;j<=rows;j++){
//       str+= String.fromCharCode(64+j-1);

//    }
//    str+="\n"
// }
// console.log(str)
// ABCD
//  ABC
//   AB
//    A

//pattern:-24
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=i;j++){
//       str+=String.fromCharCode(70-j);
//    }
//    str+="\n"
// }
// console.log(str)
// E
// ED
// EDC
// EDCB

//pattern:-25
// let str=""
// let rows=Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=i;j++){
//       str+=" "
//    }
//    for(let j=i;j<=rows;j++){
//       str+=String.fromCharCode(70-j);
//    }
//    str+="\n"
// }
// console.log(str)
// EDCBA
//  DCBA
//   CBA
//    BA
//     A

//pattern:-26
// let str=""
// let rows=Number(prompt("enter number of rows"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=rows;j++){
//       i===j || i+j===rows+1 ? str+="*" : str+=" "
//    }
//    str+="\n"
// }
// console.log(str)
// *   *
//  * *
//   *
//  * *
// *   *

//pattern :-27
// let str=""
// let rows=Number(prompt("enter number of rows"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=rows;j++){
//       i===1 || i==rows|| j===1 || j==rows ? str+="*" : str+=" "
//    }
//    str+="\n"
// }
// console.log(str)
// *****
// *   *
// *   *
// *   *
// *****

//pattern:-28
// let str=""
// let rows= Number(prompt("enter a number"))
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=rows;j++){
//       i+j==2 || i+j==rows-1 && i+j !== rows-1 ||i==rows && j==rows||i==2 && j==2 ?  str+="1" : str+="0";
//    }
//    str+="\n"
// }
// console.log(str)
// 1000
// 0100
// 0000
// 0001

//pattern :- 29
// let str=""
// let rows= Number(prompt("enter a number"))
// for(let i=1;i<rows;i++){
//    for(let j=1;j<=i;j++){
//       str+=j
//    }
//    str+="\n"
// }
// for(let i=1;i<=rows;i++){
//    for(let j=1;j<=i;j++){
//       str+=" "
//    }
//    let k=2
//    for(let j=i;j<=rows;j++){
//       str+=k++;
//    }
//    str+="\n"
// }
// console.log(str)
// 1
// 12
// 123
//  2345
//   234
//    23
//     2

//break :-
// for(i=1;i<=20;i++){
//     if(i==13){
//         break;
//     }
//     console.log(i)
// }

// //continue
// for(i=1;i<=20;i++){
//     if(i==13){
//         continue;
//     }
//     console.log(i)
// }

//PROMISES;
// console.log('hii')
// // let x= BigInt(1234567891012)
// // let y=BigInt(1234567891012)
// let x= 1234567891012n
// let y=1234567891012n
// let result=x*y
// console.log(result)

//promises
//sync
//   let promises1 = new Promise((resolve, reject) => {
//     let x = Math.random();
//     if (x > 0.4) {
//       console.log("resolve");
//       resolve();
//     } else {
//       console.log("reject");
//       reject();
//     }
//   }).then(()=>{
//     console.log('done')
//   }).catch(()=>{
//     console.log('fail')
//   })

//1
//   promises1.then(() => {
//     console.log("promise resolved");
//   });
//   promises1.catch((err) => {
//     console.log("error ");
//   });
//2
// promises1.then(()=>{
//     console.log('resolve')
// }).catch(()=>{
//     console.log('error')
// })
//3
// function resolve()
// {
//     console.log('resolve')
// }
// function fail(err)
// {
//     console.log('hii i am error')
// }
// promises1.then(resolve,fail)

// let x = 5;
// let p2 = new Promise((resolve, reject) => {
//   if (x > 2) {
//     resolve("i am done");
//     // console.log("hello this side jsp");
//     resolve("i am done 2");
//   } else {
//     reject("i am error");
//   }
// });

// p2.then((data) => {
//   console.log(data);
// });
// p2.catch((err) => {
//   console.log(err);
// });
// p2.finally(() => {
//   console.log("i am cleanup");
// });

//finally
//    function email()
//    {
//     return new Promise((res,rej)=>{
//         let data=Math.random()
//         if(data>0.5)
//         {
//             res('MAIL REC.')
//         }
//         else{
//             rej('mail fail')
//         }
//     })
//    }
//   email().then((data)=>{console.log(data)}).catch((err)=>{ console.log(err)}).finally(()=>{
//     console.log('experimaent done')
//   })

//async
//    console.log('........start.......')
//     let p3= new Promise((res,rej)=>{
//         setTimeout(()=>{
//             let data=Math.random()
//             if( data>0.4)
//             {
//                 res('DONE')
//             }
//             else{
//                 rej('fail')
//             }
//         },2000)
//     }).then((data)=>{
//         console.log(data)
//     }).catch((err)=>{
//         console.log(err)
//     })
//     console.log('..........end...........')

// let p4=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res({name:'utsav',add:'delhi'})
//     },2000)
// })
// .then((data)=>{
//     console.log('i am from first block',data)
//     return data;
// }).then((data)=>{
//     return data.name
// })
// .then((name)=>{
//     console.log(name)
// })
// .catch((err)=>{
//     console.log(err)
// })

// async function add() {
//   console.log("....start.....");
//   let y = await "hello utsav";
//   console.log(y);
//   console.log(".....end.........");
// }
// add();

// let data = await add();
// console.log(add());
// add().then((data) => {
//   console.log(data);
// });

// function abc()
// {
//     return new Promise((res,rej)=>{
//         let x=Math.random();
//         if(x>0.4)
//         {
//             res('hello i am resolve')
//         }
//         else{
//             rej('hello i am reject')
//         }
//     })
// }
// // abc().then((data)=>{
// //     console.log(data)
// // })
// async function print()
// {
//     let data= await abc();
//     console.log(data)
// }
// print();

//async
// function demo() {
//   return new Promise((res, rej) => {
//     let data = 5;
//     setTimeout(() => {
//       res("hii i am resolve block");
//     }, 2000);
//   });
// }

// console.log("hii i am outside start");

// async function print() {
//   console.log(".....start.......");
//   setTimeout(async () => {
//     let data = await demo();

//     console.log(data);
//   }, 5000);

//   console.log(".....end......");
// }
// print();
// console.log("hii i am outside end");

// let a = 1;
// console.log(a);
// a = 2;
// setTimeout(() => {
//   a = 2;
//   console.log(a);
// }, 500);
// a = 3;
// console.log(a);
// let data = Promise.all([
//   new Promise((res, rej) => {
//     if (true) {
//       res("hello1");
//     }
//   }),
//   new Promise((res, rej) => {
//     if (true) {
//       res("hello2");
//     }
//   }),
//   new Promise((res, rej) => {
//     if (true) {
//       res("hello3");
//     }
//   }),
//   new Promise((res, rej) => {
//     if (true) {
//       res("hello4");
//     }
//   }),
// ]);
// data.then((item) => {
//   console.log(item);
// });

// let p1 = new Promise((res, rej) => {
//   if (true) {
//     res("hello1");
//   }
// });

// let p2 = new Promise((res, rej) => {
//   if (true) {
//     rej("hello2");
//   }
// });

// let p3 = new Promise((res, rej) => {
//   if (true) {
//     res("hello3");
//   }
// });
// Promise.all([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//async

// let p1= new Promise((res,rej)=>{
//     setTimeout(()=>{
//         if(true)
//         {
//             res('hello1')
//         }
//     },1000)

//     })

// let p2= new Promise((res,rej)=>{
//     setTimeout(()=>{
//         if(true)
//         {
//             rej('hello2')
//         }
//     },2000)

//     })

// let p3= new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(true)
//         {
//             res('hello3')
//         }
//         },500)
//     })
//     Promise.any([p1,p2,p3]).then((data)=>{
//         console.log(data)
//     }).catch((err)=>{
//         console.log(err)
//     })

//    let data= Promise.all([1,2,3,Promise.resolve('hello'),Promise.reject('err')])
//    data.then((item)=>{
//     console.log(item)
//    }).catch((err)=>{
//     console.log(err)
//    })

// function genrateNumber(num)
// {
//     return new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 res(num)
//             },3*1000)
//     } )
// }
// genrateNumber(10).then((data)=>{
//     console.log('this is 1',data)
//     return genrateNumber(data*2)
// }).then((data)=>{
//     console.log('this is 2',data)
//     return genrateNumber(data*2)
// }).then((data)=>{
//     console.log('this is 3',data)
//     return genrateNumber(data*3)
// })
// .then((data)=>{
//     console.log('this is 4',data)
// })

// console.log('hello')
// let url = "https://jsonplaceholder.typicode.com/posts";
// fetch(url, {
//   method: "GET",
//   headers: {
//     "content-type": "application/josn",
//   },
// })
//   .then((data) => {
//     return data.json();
//   })
//   .then((item) => {
//     console.log(item);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// let obj = { name: "utsav", add: "delhi", isActive: "true" };
// let url = "https://jsonplaceholder.typicode.com/posts";
// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(obj),
// })
//   .then((data) => {
//     return data.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// (function () {
//   console.log("hello");
// })();

// let arr = [1, 2, 3, 4, 5];
// let max = arr[0];
// for (let i = 1; i <= arr.length; i++) {
//   if (max > arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let arr = [1, 2, 3, 4, 5, 6];
// const secondLargestNumber = (data) => {
//   first = data[0];
//   second = data[0];
//   for (let i = 0; i < data.length; i++) {
//     if (first < data[i]) {
//       second = first;
//       first = data[i];
//     } else if (second < data[i]) {
//       second = data[i];
//     }
//   }
//   console.log(second);
// };
// secondLargestNumber(arr);

// function duplicateFilter(a) {
//   const map = {};
//   return a.filter((element) => {
//     if (map[element]) {
//       return false;
//     } else {
//       map[element] = true;
//       return true;
//     }
//   });
// }
// a = [1, 2, 3, 4, 1, 2, 3, 4];
// console.log(duplicateFilter(a));

// let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

// function removeDuplicates(arr) {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr));

// function removeDuplicates(arry) {
//   return arry.filter((element, index) => {
//     return arry.indexOf(element) === index;
//   });
// }
// arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1];
// console.log(removeDuplicates(arr));

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }

// if (isPalindrome("NaN")) {
//   console.log("palindrome");
// } else {
//   console.log("Not palindrome");
// }

// function findLongestWord(sentence) {
//   let words = sentence.split(" ");
//   let count = 0;
//   for (let word of words) {
//     count++;
//   }
//   return count;
// }

// console.log(
//   findLongestWord("Write a function to find the longest word in a sentence")
// );

// function titleCase(sentence) {
//   return sentence
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(
//   titleCase(
//     "Write a function to convert the first letter of each word in a sentence to uppercase."
//   )
// );

// function areAnagrams(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }
// console.log(areAnagrams("Naveen", "ee"));

//second mininum of array
// function data(arr) {
//   first = arr[0];
//   second = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (first < arr[i]) {
//       second = first;
//       first = arr[i];
//     } else if (second < arr[i]) {
//       second = arr[i];
//     }
//   }
//   console.log(second);
// }
// let arr = [1, 2, 3, 4, 5];
// data(arr);

//remove duplicates in array
// function remove(arr) {
//   return arr.filter((eachItem, Index) => arr.indexOf(eachItem) === Index);
// }
// let arr = [1, 2, 3, 4, 5, 4, 2, 3, 2];
// console.log(remove(arr));

//sorting of array ;
// let arr = [1, 2, 3, 5, 6, 7, 3, 8];
// max = arr[0];
// for (let i = 1; i <= arr.length; i++) {
//   if (max > arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

//reverse of the string
// function reverse(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverse("naveen"));

//palindrome of string
// function palindrome(str) {
//   if (str === str.split("").reverse().join("")) {
//     console.log("palindrome");
//   } else {
//     console.log("not palindrome");
//   }
// }
// palindrome("nan");

//remove duplicate element in array
// let a = ["a", "b", "c", "d", "a"];
// function remove(arr) {
//   return arr.filter((element, index) => {
//     return arr.indexOf(element) === index;
//   });
// }
// console.log(remove(a));

//longest word in the sentences
// function longest(str) {
//   let word = str.split(" ");
//   let longestWord = "";
//   for (let i of word) {
//     if (i.length > longestWord.length) {
//       longestWord = i;
//     }
//   }
//   console.log(longestWord);
// }
// longest("My name is naveen");

//words in sentences ;
// function words(str) {
//   let word = str.split(" ");
//   let count = 0;
//   for (let i in word) {
//     count++;
//   }
//   console.log(count);
// }
// words("My name is Naveen");

// Title Case :-
// function title(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }
// console.log(title("My name is naveen"));

// bubble sort

// function bubblesort(arr) {
//   let swapped;
//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapped = true;
//       }
//     }
//   } while (swapped);
//   return arr;
// }
// let arr = [1, 3, 2, 4, 5];
// console.log(bubblesort(arr));

//selection sort
// function selectionsort(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }
//   return arr;
// }
// const arr = [1, 3, 4, 2, 6, 7, 8, 2];
// console.log(selectionsort(arr));

//merge sort
// function merge(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   const mid = Math.floor(arr.length / 2);
//   const left = arr.slice(0, mid);
//   const right = arr.slice(mid);
//   return mergesort(merge(left), merge(right));
// }
// function mergesort(left, right) {
//   let result = [];
//   let i = 0;
//   let j = 0;
//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }
//   return result.concat(left.slice(i)).concat(right.slice(j));
// }
// console.log(merge(arr));

//insertion sort
// function insertion(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// }
// console.log(insertion(arr));

// console.log(!(null == NaN));

// let arr = [2, 3, 4, 5, null, undefined, "ustav"];
// mulpy = 1;

// function add(...arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (typeof arg[i] == "number") {
//       mulpy = mulpy * arr[i];
//     }
//   }
//   return mulpy;
// }
// console.log(add(arr));

//Clourses
// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }

// var z = x();
// console.log(z);
// z();

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   a = 100;
//   return y;
// }
// var z = x();
// z();

// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     return y();
//   }
//   return x();
// }
// z();

// const que = [];
// que.unshift("X");
// que.unshift("Y");
// que.unshift("Z");
// console.log(que);
// console.log(que.shift());
// console.log(que.shift());

// let x = 100;
// let y = x++;
// let z = ++x;
// let n = x == y ? z++ : z++;
// console.log(n);

// const f = new Boolean(false);
// if (f) {
//   console.log(1);
// } else {
//   console.log(2);
// }
// console.log(typeof f);
// console.log(f);

// const wMap = new WeakMap();
// function foo() {
//   wMap.set(this, 1);
// }
// const bar = () => wMap.set(this, 2);
// bar();
// foo();
// console.log(wMap.get(this));

// let a = {
//   valueOf: function () {
//     return this.x;
//   },
//   x: 1,
// };
// const b = {
//   valueOf: function () {
//     return this.y;
//   },
//   y: 3,
// };
// console.log(a + b);
// str = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 9; j++) {
//     if (j == 5) {
//       str += "1";
//     } else if (j == 4 && i != 1) {
//       str += "2";
//     } else if (j == 3 && i != 1 && i != 2) {
//       str += "3";
//     } else if (j == 2 && i != 1 && i != 2 && i != 3) {
//       str += "4";
//     } else if (j == 1 && i != 1 && i != 2 && i != 3 && i != 4) {
//       str += "5";
//     } else if (j == 6 && i != 1) {
//       str += "2";
//     } else if (j == 7 && i != 1 && i != 2) {
//       str += "3";
//     } else if (j == 8 && i != 1 && i != 2 && i !== 3) {
//       str += "4";
//     } else if (j == 9 && i != 1 && i != 2 && i != 3 && i != 4) {
//       str += "5";
//     } else {
//       str += " ";
//     }
//   }
//   str += "\n";
// }
// console.log(str);

// let a = 2;
// let b = 3;
// let c = 1;
// if (a > b && a > c) {
//   console.log(a);
// } else if (b > a && b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

// const elf = "Naveen";
// function Hi() {
//   console.log(elf);
//   const elf = "Kumar";
// }
// Hi();

// let obj = {};
// obj.value = undefined;
// console.log(Object.hasOwn(obj, "value"));

// setTimeout(foo, 1000);
// function foo() {
//   console.log(1);
// }
// function foo() {
//   console.log(2);
// }

// console.log("9" > "19");
// console.log("09" > "19");

// console.log(1 + 2 + "1");
// console.log("1" + 1 + 2);

// console.log((!+[] + [] + ![]).length)

// var a = 1;
// function foo() {
//   if (a) {
//     var a = 10;
//   }
//   console.log(a);
// }
// foo();

//      let obj = {
//         name:'utsav',
//         age:24,
//         address:"delhi"
//      }
//      let obj2 = {
//         name:'utsav',
//         age:24,
//         address:"delhi"
//      }
//      let obj3 = {
//         name:'utsav',
//         age:24,
//         address:"delhi"
//      }
//   console.log(obj.__proto__)
//   console.log(obj2.__proto__)
//   console.log(obj3.__proto__)

//   console.log(obj.__proto__==obj2.__proto__)
//   console.log(obj.__proto__==Object.prototype)
//represention of chaining and inheritance
// let details={
//      name:'utsav',
//      age:24,
//      address:'delhi'
// }
// let profile={
//      isPartofJsp:true
// }
// profile.__proto__=details;
// console.log(details.__proto__)
// console.log(profile.__proto__)
// console.log(profile)
// console.log(profile.name)
// console.log(profile.age)
// console.log(profile.address)
// console.log(profile.isPartofJsp)
//console.log(profile.hobbies)
// console.log(profile.age.toString())
// console.log('...............................')

// console.log(details.name)
// console.log(details.age)
// console.log(details.address)
// console.log(details.isPartofJsp)
// //override
// details.name="vicky"
// console.log(details.name)
// console.log(profile.name)

//  chaining
//     console.log(profile.__proto__.__proto__)
//     let arr=[1,2,3,4]
//     console.log(arr.__proto__.__proto__.__proto__)
//     arr.__proto__.map=function()
//     {
//         return 'hello utsav'
//     }
//     Object.prototype.mapx=function()
//     {
//         return "hello i am mapx"
//     }
//    console.log(arr.mapx())

// let obj={
//   name:'utsav',
//   add:'delhi',

// }
//console.log(obj.__proto__)
// Object.prototype. getName=function()
//   {
//        return ` ${this.name}+ ${this.add} `
//   }
//console.log(obj)

//constructor

// function student()
// {
//   this.name="utsav"
//   this.add="delhi"
// }
// let obj3=   new student()
// let obj4 = new student()
//chaining
// console.log(obj3.__proto__.__proto__.__proto__)
// console.log(student.prototype)

//console.log(obj3.__proto__==obj4.__proto__)
//creating prototype
//   student.prototype.print=function()
//   {
//     console.log('hii i am print')
//   }
//  obj3.print()
//  obj4.print()
//  obj3.__proto__.print2=function()
//  {
//   console.log('print2')
//  }
//  console.log(obj3)
//  console.log(obj4)

//   obj3.__proto__.__proto__.printx=function()
//   {
//     console.log('hello i am printx')
//   }
//   console.log(obj3)

//   let arr=[]
//   arr.__proto__.map=function()
//   {
//     return 'hello utsav'
//   }
//   let arr2=[1,2,3,4,5,6]
//  console.log(arr2.map())

//inheritance
// function student()
// {
//   this.name="utsav"
//   this.age=24
// }
// function teacher()
// {

//   this.isACtive=true
// }
// let stu=new student()
// let tec=new teacher()

// //inheritance
// tec.__proto__=stu
// console.log(tec.__proto__)

// console.log(stu.name)
// console.log(stu.age)
// console.log(tec.name)
// console.log(tec.age)
// console.log(tec.isACtive)

//   function student()
//   {
//     this.name="utsav"
//     this.age=24
//   }
//   function teacher()
//   {
//      teacher.prototype=student
//     this.isACtive=true
//   }
//   let stu=new student()
//   let tec=new teacher()
//  console.log(tec.name)

// function parents()
// {
//   this.parentProp='i am parent prop'
// }
// parents.prototype.parentsMethod=function()
// {
//     console.log('hii i am parents method')
// }
// function child()
// {
//   this.childProp="i am child prop"
// }
// //inherit
// child.prototype=new parents()
// child.prototype.childMethod=function()
// {
//   console.log('hii i am child method')
// }
// let childInst=new child()
// console.log(childInst.parentProp)
// console.log(childInst.childProp)
// childInst.parentsMethod()
// childInst.childMethod()

//costructor
//   class Student {
//this default constructor  : A constructor with no arguments
// constructor()
// {
//     this.x=5
//     this.y=6
//     console.log('hello i am utsav')
// }
//parametrize constructor  : Unlike the Default constructor, It contains parameters (or arguments) in the constructor definition and declaration
// constructor(name, age) {
//   this.name = name;
//   this.age = age;
// }
//copy constructor
//      constructor(details)
//      {
//         let {name,add}=details
//         this.name=name
//         this.add=add
//      }
//     print() {
//       console.log("add ", this.name + this.add);
//     }
//   }
//   let obj = new Student("utsav", 23);
// let details={
//         name:"utsav",
//         add:'delhi'
//   }
//   details.name="vicky"
//   //console.log(obj);
//   let obj = new Student(details);
//   obj.print();

//   console.log(obj .x)
//   console.log(obj.age)
//static method

//    class Test{
//     x=5
//     static display()
//     {
//         return `hello i am static method`
//     }
//     static display2()
//     {
//         return `hello i am static method2`
//     }
//     static display3()
//     {
//         return `hello i am static method3`
//     }
//     static display3()
//     {
//         console.log(this.x)
//         return `hello i am static method3 agin`
//     }
//    }
//      console.log(Test.prototype.constructor.display())
//      console.log(Test.display())
//      console.log(Test.display2())
//      console.log(Test.display3())
//    let obj= new Test()
//    console.log(obj)
//    obj.display()

//encapsulation

//   class Student{
//     constructor()
//     {
//         var name="utsav"
//         var marks="200"
//     }

//     getName()
//     {

//         return this.name
//     }
//     setName(name)
//     {

//         this.name=name
//     }
//     atmCout()
//     {
//         var pin="1245"
//         var ammountis=5468
//         function showAmmount()
//         {
//                if(pin=="1245")
//                {
//                 console.log('ammount is',ammountis)
//                }
//         }
//         showAmmount()
//     }
//   }
//   let stud=new Student()
//   let pin=prompt('enter the atm pin')
//   stud.atmCout(pin)
//   console.log(stud)
//   console.log(stud)
//   stud.setName('john')
//    console.log(stud.getName())
// console.log(this.name)
// console.log(this.marks)

function removeDuplicate(arr) {
  let newarr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let isNaN = false;
    for (let j = 0; j <= arr.length; j++) {
      if (arr[i] == newarr[j]) {
        isNaN = true;
      }
    }
    if (!isNaN) {
      newarr.push(arr[i]);
    }
  }
  return newarr;
}
console.log(removeDuplicate([1, 2, 1, 3, 4, 7, 1, 9, 2, 9, 8, 8]));
