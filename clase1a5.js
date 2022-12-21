const juan = {
    name: "Juan",
    age: 18,
    approvedCourses: ["Curso1"],
    
    addCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
};

console.log(Object.keys(juan));
console.log(Object.getOwnPropertyNames(juan));
console.log(Object.entries(juan));

//Object.seal(juan);
//Object.freeze(juan);

Object.defineProperty(juan, "navigator", {
    value: "Chrome",
    enumerable: false,
    writable: true,
    configurable: true,
});
Object.defineProperty(juan, "editor", {
    value: "VSCode",
    enumerable: true,
    writable: false,
    configurable: true,
});
Object.defineProperty(juan, "terminal", {
    value: "WSL",
    enumerable: true,
    writable: true,
    configurable: false,
});
Object.defineProperty(juan, "pruebaNasa", {
    value: "extraterrestres",
    enumerable: false,
    writable: false,
    configurable: false,
});

console.log(Object.getOwnPropertyDescriptors(juan));