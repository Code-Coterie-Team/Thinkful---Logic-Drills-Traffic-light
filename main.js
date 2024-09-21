function updateLight(current) {
    if (current === "green") {
        return "yellow";
    } else if (current === "yellow") {
        return "red";
    } else if (current === "red") {
        return "green";
    } else {
        return "Invalid state"; 
    }
}

console.log(updateLight("green"));  
console.log(updateLight("yellow")); 
console.log(updateLight("red"));   
console.log(updateLight("blue"));   