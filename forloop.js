let arr = [5,7,8,9,1,4,12,14,18,55,45];

for (let i = 0; i < arr.length; i++) {
    console.log(i);   
}

for (let value in arr) {
    console.log(arr[value]);
}

for (let value of arr) {
    console.log(value);
}

arr.forEach((value) => {
    console.log(value);
})