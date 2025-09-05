console.log("Hello, World!");

function greet(name, age) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
}

console.log(greet("Hazem", 20));

function add(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    if (i === end) {
        return "Done";
    }
}
}

console.log(add(2005, 2025));