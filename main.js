const obj1 = {
    a: "a",
    b: "b",
    c: {
        d: "d",
        e: "e",
    }
};

//const obj2 = {};
// for (prop in obj1){
//     obj2[prop] = obj1[prop];
// }

// const obj3 = Object.assign({}, obj1);
// const obj4 = Object.create(obj1);


/*Clase 7*/
//const stringifiedComplexObj = JSON.stringify(obj1);
//const obj2 = JSON.parse(stringifiedComplexObj);

/*Recursividad*/
// function recursiva(){
//     if (/* validacion */){
//         //llamados recursivos
//     } else {
//         //llamados normales, sin recursividad
//     }
// }

const numeros = [0,1,2,3,4,5,6,7,8,9,123,2342,65];
// let numero = 0;
// for (let i=0; i<numeros.length; i++){
//     numero=numeros[i];
//     console.log({i, numero});
// }

function recursiva(numbersArray){
    if(numbersArray.length !=0){
        const firstNumber = numbersArray[0];
        console.log(firstNumber);
        
        numbersArray.shift();
        recursiva(numbersArray);
    }
}

