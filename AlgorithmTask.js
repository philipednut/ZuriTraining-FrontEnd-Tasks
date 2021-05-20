/*Answers to First Question*/

/* I'm sorry this is poor, after much explanations from peers, 
this is what my brain can carry as a beginner, i'll keep studying to understand better*/

function convertFahrToCelsius(celsius) {
    let fahrenheit = (celsius - 32) * (5/9);
    return fahrenheit.toFixed(4);
  }
  console.log(convertFahrToCelsius(0))
  console.log(convertFahrToCelsius("0"))
  console.log(convertFahrToCelsius([1,2,3]) + `! [1,2,3] is not a valid number but a/an array.`)
  console.log(convertFahrToCelsius({temp: 0}) + `! {temp: 0} is not a valid number but a/an object.`)

  console.log("[1,2,3] is not a valid number but a/an array")
  console.log("{temp: 0} is not a valid number but a/an object.")


  /*Answers to Second Question*/
  

  function checkYuGiOh(n){
      for (let i = 1; i <=10; i++) {
          if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
              console.log("Yu-Gi-Oh");
          } else if (i % 2 === 0 && i % 5 === 0) {
              console.log("Yu-Gi");
          } else if (i % 2 === 0) {
              console.log("Yu"); 
          } else if (i % 3 === 0) {
              console.log("Gi");
          } else if (i % 5 === 0) {
              console.log("Oh");
          } else if (!checkYuGiOh.isArray) {
            console.log("invalid parameter:" + n );
        }  else {
            console.log(i)
        }
      }
  }
 checkYuGiOh(5)