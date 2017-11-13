/*
@Author Faizaan Chishtie
Contains functions for product page on NutriDaili website
*/

function CollectData(){
    document.getElementById("output").innerHTML = "hi";
    weight = document.getElementById('weight').value;
    height = document.getElementById('height').value;
    age = document.getElementById('age').value;
    gender = document.getElementById('gender').value;
    exercise = document.getElementById('activity').value;
    s = "" + weight + ", " + height + ", " + age + ", " + gender + ", " + exercise + ".";
    out = "You should be eating: " + calculateCalories(weight,height,age,gender,exercise) + " Calories a day!";
    document.getElementById("output").innerHTML =  out;
  };

  function calculateCalories(weight,height,age,gender,exercise){
    return calculateBMR(weight,height,age,gender)*exercise;
  };

  function calculateBMR(weight, height, age, gender){
    if (gender=="F"){
      //Women	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
      return 10*weight + 6.25*height - 5*age - 161;
    }
    if (gender=="M"){
      //Men	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
      return 10*weight + 6.25*height - 5*age +5;
    }

  };
