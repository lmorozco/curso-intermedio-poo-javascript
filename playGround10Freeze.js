const juan = {
    name: "Juanito",
    approvedCourses: ["Curso 1","Curso 2"],
    caracteristicas: {
      age: 18,
      colorCabello: 'Negro',
      gustos: {
        musica: ['rock', 'punk', 'ska'],
        peliculas: ['drama', 'horros', 'comedia'],
      },
    },
    addCourse(newCourse) {
      console.log("This", this);
      console.log("This.approvedCourses", this.approvedCourses);
      this.approvedCourses.push(newCourse);
    }
  };

// const deepFreeze = (obj) => {
//     let copyObj = {};
  
//     for (let i in obj) {
//       if (typeof obj[i] == "object") {
//         copyObj[i] = deepFreeze(Object.freeze(obj[i]));
//       } else {
//         copyObj[i] = Object.freeze(obj[i]);
//       }
//     }
//     return copyObj;
//   }

//   console.log(deepFreeze(juan))
//   const newObject = deepFreeze(juan)

function deepFreeze(obj) {
  
    for (item in obj)
      if(typeof obj[item] === 'object')
         deepFreeze(Object.freeze(obj[item]))   
     return Object.freeze(obj)
    }