var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let newArray =[];
for(let i=0; i <= mix.length; i++){
    let item = typeof mix[i];
    newArray.push(item)
}

console.log(newArray);

