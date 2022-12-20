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

console.log(Object.getOwnPropertyDescriptors(juan));

Object.defineProperty(juan, "pruebaNASA", {
    value: "extraterrestres",
    writable: true,
    enumerable: true,
    configurable: true,
});