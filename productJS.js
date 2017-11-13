/*
@Author Faizaan Chishtie
Contains functions for product page on NutriDaili website
*/

function CollectData(){
  try {
  weight = double(document.getElementsById('weight').value);
  height = double(document.getElementsById('height').value);
  age = double(document.getElementsById('age').value);
  gender = document.getElementsById('gender').value;
  exercise = double(document.getElementsByID('activity').value);
  }
 catch {
   alert("One or more of the fields contains an incorrect value!");
 }
  document.getElementsById("output").innerHTML = calculateCalories(weight,height,age,gender,exercise);
}

function calculateCalories(weight,height,age,gender,exercise){
  alert(calculateBMR(weight,height,age,gender)*exercise)
  return calculateBMR(weight,height,age,gender)*exercise;
}

function calculateBMR(weight, height, age, gender){
  if (gender=="F"){
    //Women	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
    return 10*weight + 6.25*height - 5*age - 161;
  }
  if (gender=="M"){
    //Men	BMR = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
    return 10*weight + 6.25*height - 5*age +5;
  }
}
