'use strict'
// var add = function(x) {
//   return function(y) { return (x + y); };
// }

// // for(let i = 0;i < 5;i++){
// //   console.log(i);
// // }
// // for(var k = 0;k < 5;k++){
// //   console.log(k);
// // }
// function a(){
//   var i = 5;
//   b();
//   function b() {
//     console.log(i);
//     return i * i;
//   }
// } 
// a();
// var pro = new Promise((res, rej) => {
//   setTimeout(() => rej("hello"), 1000);
// });
// pro.then((val) => {
//   console.log(val);
// }).catch((val) => {
//   console.log(val);
// })


// class Polygon { constructor() { this.name = "Polygon"; } } 
// class Square extends Polygon { constructor() { super(); } }
// let newInstance = new Square(); console.log(newInstance.name); //Polygon
// // console.log(add(2)(3));

// import React from "react"
// class Home extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {};
//   }
//   render() {
//     return (
//       <div>

//       </div>
//     );
//   }
// }

// function Home(props) {
//   return (<div>

//   </div>
//   );
// }

// function solution(S) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   var canRem = false;
//   var remTimes = 0;
//   var dict = ['B','A','L','L','O','O','N'];
//   var newArr = S.split("");
//   while(S.length > 0){
//       for(var letter of dict){
//           var index = newArr.findIndex(
//             (Slet) => {return letter === Slet}
//             );
//           if(index === -1){
//               return remTimes;
//           }else{
//               newArr.splice(index,1);
//           }
//       }
//       remTimes++;
//   }
// }
// solution("BAONXXOLL");

// const fn = (a, b) => a + b;
// const reduce = (array, fn) => {
//   var sum = 0;
//   array.forEach(element => {
//     sum = fn(sum, element);
//   });
//   return sum;
// }
// console.log(reduce([1,2,3,4],fn));


// const add = (x) => {
//   return function (y) {return x + y}
// }
// console.log(add(3)(89));
// const arrGenerate = () => {
//   var res = []
//   for(let i = 1;i <= 8;i++){
//     res.push(Math.pow(12, i));
//   }
//   var res1 = [];
//   var sum1 = 0;
//   var sum2 = 0;
//   for(let i = 0;i < 4;i++){
//     sum1 += res[i];
//     sum2 += res[i + 4];
//   }
//   res1 = [sum1, sum2]; 
//   return [res, res1];
// }
// console.log(arrGenerate()[0]);
// console.log(arrGenerate()[1]);


// const numGenerate = () => {
//   var n = 1;
//   var res = [];
//   for(let i = 0;i < 20;i++){
//     let first, third, last;
//     if(n + 2 >= 10){
//       third = 0.01
//     }else{
//       third = 0.1;
//     }
//     if(n >= 10){
//       first = 100;
//     }else{
//       first = 10;
//     }
//     if(n+1 === 10){
//       first = 100;
//     }
//     if(n + 3 >= 10){
//       last = 0.001
//       if(n + 2 >= 10){
//         last = 0.0001
//       }
//     }else{
//       last = 0.01;
//     }
//     let num = n * first + (n + 1) + (n + 2) * third + (n + 3) * last;
//     res.push(num);
//     n = n + 2;
//   }
//   return res;
// }
// console.log(numGenerate().toString());


// function newNext() {
//   var arr = this.shift();
//   while(this.length > 0){
//     if(arr.length > 0){
//       let res = arr.shift();
//       if(arr.length > 0){
//         this.unshift(arr);
//       }
//       return res;
//     }else{
//       arr = this.shift();
//     }
//   }
//   return -1;
// }
// Array.prototype.next = newNext;
// var newA = [[1,2,3],[],[],[4,5],[],[6,7,8]];
// console.log(newA.next());
// console.log(newA.next());
// console.log(newA.next());
// console.log(newA.next());
// console.log(newA.next());

// const findTarget = (arr, tar) => {
//   var res = [];
//   // arr.forEach((ele, index) => {
//   //   if(ele === tar && res[0] === undefined){
//   //     res[0] = index;
//   //   }
//   //   if(ele !== tar && res[0] !== undefined && res[1] === undefined){
//   //     res[1] = index - 1;
//   //   }
//   // });
//   var left = 0, right = arr.length - 1;
//   while(left + 1 < right){
//     if(arr[left] < tar){

//     }
//   }
//   return res;
// }
// console.log(findTarget([1, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7], 2));

// const findSame = (arr1, arr2) => {
//   var res = [];
//   arr1.forEach((ele) => {
//     var index = arr2.findIndex(num => num === ele);
//     if(index !== -1){
//       arr2.splice(index,1);
//       res.push(ele);
//     }
//   });
//   return res;
// }

// const sameIndex = (arr2, tar) => {
//   let left = 0;
//   let right = arr2.length - 1;
//   while(left <= right){
//     let mid = Math.floor((left + right) / 2);
//     if(arr2[mid] === tar){
//       return mid;
//     }else if(arr2[mid] > tar){
//       right = mid - 1;
//     }else if(arr2[mid] < tar){
//       left = mid + 1;
//     }
//   }
//   return -1;
// }
// const findSame = (arr1, arr2) => {
//   arr2.sort((o1,o2) => {return o1 - o2});
//   var res = [];
//   arr1.forEach((ele) => {
//     let index = sameIndex(arr2, ele);
//     if(index !== -1){
//       arr2.splice(index, 1);
//       res.push(ele);
//     }
//   });
//   return res;
// }


// var p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success!');
//   }, 500);
  
//   // or
//   // reject(new Error("Error!"));
// });

// p1.then(value => {
//   console.log(value); // Success!
//   return new Promise((res,rej) => {
//     setTimeout(() => {
//       console.log("123");
//       res("567");
//     }, 500);
//   });
// })
// .then(v => {
//   console.log(v);
// })

function quickSort(arr, left, right) {
  var len = arr.length,
      partitionIndex,
      left = typeof left != 'number' ? 0 : left,
      right = typeof right != 'number' ? len - 1 : right;

  if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex-1);
      quickSort(arr, partitionIndex+1, right);
  }
  return arr;
}

function partition(arr, left ,right) {     // 分区操作
  var pivot = left,                      // 设定基准值（pivot）
      index = pivot + 1;
  for (var i = index; i <= right; i++) {
      if (arr[i] < arr[pivot]) {
          swap(arr, i, index);
          index++;
      }        
  }
  swap(arr, pivot, index - 1);
  return index-1;
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
// function partition2(arr, low, high) {
// let pivot = arr[low];
// while (low < high) {
//   while (low < high && arr[high] > pivot) {
//     --high;
//   }
//   arr[low] = arr[high];
//   while (low < high && arr[low] <= pivot) {
//     ++low;
//   }
//   arr[high] = arr[low];
// }
// arr[low] = pivot;
// return low;
// }

// function quickSort2(arr, low, high) {
// if (low < high) {
//   let pivot = partition2(arr, low, high);
//   quickSort2(arr, low, pivot - 1);
//   quickSort2(arr, pivot + 1, high);
// }
// return arr;
// }