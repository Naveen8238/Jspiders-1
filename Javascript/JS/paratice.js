//swap of numbers using thrid variables;
// let a=1;
// let b=2;
// let temp;
// temp=a;
// a=b;
// b=temp;
// console.log(a)
// console.log(b)

//swap of two variable without using thrid varaibles;
// let a=1;
// let b=2;
// let c=3;
// a=a+b;
// b=a-b;
// a=a-b;
// b=b+c;
// c=b-c;
// b=b-c;
// console.log(a)
// console.log(b)
// console.log(c)

//even number or odd number
// let num = Number(prompt());
// console.log(num%2==0 ?"even":"odd")

//positive or negative number
// let num = Number(prompt());
// let x = num>0 ? "positive":num<0 ? "Negative" : num==0 ? "Neither positive Nor Negative": "It is not number"
// console.log(x)

//length of the number
// let num = Number(prompt());
// let count= 0;
// while(num>0){
//     count++;
//     num=Math.floor(num/10);
// }
// console.log(count)

//length of the string
// let str=prompt();
// console.log(str.length)

//reverse of number
// let num = Number(prompt());
// let sum=0;
// while(num>0){
//     sum=sum*10+Math.floor(num%10);
//     num=Math.floor(num/10)
// }
// console.log(sum)

//palindrome number or not
// let num = Number(prompt());
// let num1=num
// let sum=0;
// while(num>0){
//     sum=sum*10+Math.floor(num%10);
//     num=Math.floor(num/10)
// }
// if(num1==sum)
// console.log("palindrome")
// else
// console.log("Not palindrome")

//reverse of string and palindrome
// let str=prompt();
// let str1=str;
// function reverse(string){
//     return string.split("").reverse().join("")
// }
// console.log(reverse(str))
// if(str1==reverse(str))
// console.log("palindrome")
// else
// console.log(" Not palindrome")

//Amstrong Number
// let num = Number(prompt())
// let num1=num
// let sum=0;
// while(num>0){
//     sum+=(Math.floor(num%10) * Math.floor(num%10) * Math.floor(num%10))
//     num = Math.floor(num/10)
// }
// if(num1==sum)
// console.log("Amstrong")
// else
// console.log("Not Amstrong")

//leap year or not
// let num= Number(prompt())
// console.log(num%4 == 0 && num%10 !== 0 ? "leap year" : " Not leap year")

//sum of numbers
// let num= Number(prompt())
// let sum=0;
// while(num>0){
//     sum+=Math.floor(num%10)
//     num=Math.floor(num/10)
// }
// console.log(sum)

//prime number or not
// let num= Number(prompt())
// let isprime= true;
// if(num==1)
// console.log("Neither prime number")
// else if(num>=2){
//     for(let i=2;i<num;i++){
//         if(num%i==0){
//             isprime=false;
//         }
//     }
//     console.log(isprime?"prime number":" Not prime number")
// }
// else
// console.log("Not a number")

//factorial
// function factorial(n){
//     let sum =1;
//     for(let i=n;i>=1;i--){
//         sum*=i
//     }
//     return sum;
// }
// console.log(factorial(5))

// function factorial(n){
//     if(n==0 || n==1){
//         return 1
//     }else{
//         return n*factorial(n-1);
//     }
// }
// console.log(factorial(5))

//fabonica series
// function fibno(n){
//     const series=[0,1]
//     for(let i=2;i<n;i++){
//         const nextNumber = series[i-1]+series[i-2];
//         series.push(nextNumber)
//     }
//     return series;
// }
// console.log(fibno(40))
// let x=fibno(40);
// let y=x.pop();
// console.log(y);

//GCD
// function gcd(a,b){
//     if(b==0){
//         return a;
//     }
//     return gcd(b,a%b)
// }
// console.log(gcd(3,5))

//pattern:-1
// let num = Number(prompt())
// let str=""
// for(let i=1;i<=num;i++){
//     for(let j=1;j<=i;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)

//pattern:-2
// let num = Number(prompt())
// let str=""
// for(let i=1;i<=num;i++){
//     for(let j=i;j<=num;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)

//pattern:-3
// let num = Number(prompt())
// let str=""
// for(let i=1;i<=num;i++){
//     for(let j=i;j<=num;j++){
//         str+=" "
//     }
//     for(let j=1;j<=i;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)

//pattern :-4
// let num = Number(prompt())
// let str=""
// for(let i=1;i<=num;i++){
//     for(let j=i;j<=num;j++){
//         str+=" "
//     }
//     for(let j=1;j<i;j++){
//         str+="*"
//     }
//     for(let j=1;j<=i;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)

//pattern :-5
// let num = Number(prompt())
// let str=""
// for(let i=1;i<num;i++){
//     for(let j=i;j<=num;j++){
//         str+=" "
//     }
//     for(let j=1;j<i;j++){
//         str+="*"
//     }
//     for(let j=1;j<=i;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// for(let i=1;i<=num;i++){
//    for(let j=1;j<=i;j++){
//     str+=" "
//    }
//    for(let j=i;j<num;j++){
//     str+="*"
//    }
//    for(let j=i;j<=num;j++){
//     str+="*"
//    }
//    str+="\n"
// }
// console.log(str)

//working on array
// let array=[[1,2,3],[4,5,6],[7,8,9]]
// let x= array.split("").reverse()
// console.log(array)

//data
// let emp=[
//     {name:"X",salary:"7800",tax:"40",dat:"70",isACtive:true},
//     {name:"y",salary:"7800",tax:"40",dat:"70",isACtive:false},
//     {name:"Z",salary:"7800",tax:"40",dat:"70",isACtive:true},
//     {name:"A",salary:"7800",tax:"40",dat:"70",isACtive:false},
// ]
// let x=emp.map((data)=>{
//     let str={}
//     str.name = data.name;
//     if(data.isACtive){
//         str.salary=data.salary
//     }else{
//         str.salary=null
//     }
//     return str

// });
// console.log(x)

//working on arrays
// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let x=arr.filter((eachItem)=>{
//     return (eachItem % 5 == 0);
// })
// console.log(x)

//working on arrays
// let x=[1,2,3,4,5,6]
// let y=x.indexOf(5,3)
// console.log(y)
// x.splice(-2,3,78,80)
// console.log(x)
// let b=[...x]
// x.push(7)
// console.log(b)
// console.log(x)

// //every
// let x= [1,2,3,4,5];
// let y=x.every((eachItem)=>{
//     return eachItem%2==0
// })
// console.log(y)

//object programs
// let obj = [{id:1,name:"ABC",salary:25000,isActive:true},
// {id:2,name:"ABC1",salary:26000,isActive:false},
// {id:3,name:"ABC2",salary:28000,isActive:true},
// {id:4,name:"ABC3",salary:29000,isActive:false}];

// let x=obj.filter((data)=>{
//     if(data.isActive){
//         console.log(data)
//     }else{

//         console.log("user not availabe")
//     }
// })
// console.log(x)

// let x= obj.map((data)=>{
//     return data.salary
// })
// console.log(x)

// let y=Math.max(...x)
// console.log(y)

// let x=obj.filter((data)=>{
//     if(data.id==3){
//         data.name="admin"
//     }
//     return data
// })
// console.log(x)

// let x= obj.map((data)=>{
//     return data.salary
// })
// let y = function (x,y){
//     return x-y;

// }
// let z=x.sort(y);
// console.log(z[(z.length)-2])

//swapping of without usig temp numbers;
// let a = 5;
// let b = 3;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a);
// console.log(b);

//length of number

//remove a element from a string

// function removeElement(str) {
//   let a = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== "e") {
//       a += str[i];
//     }
//   }
//   return a;
// }
// console.log(removeElement("Naveen"));
