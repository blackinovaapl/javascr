let input = prompt(" Enter your grade: ");

let grade= Number(input);


if(grade>= 80 && grade <= 100){
    alert("your grade is A");
}
if (grade >= 70 && grade < 89){

    alert("your grade is B");
}
if (grade >=60 && grade < 69){
    alert("your grade is c");
}
if (grade >= 50 && grade < 59){
    alert("your grade is D");
}
if (grade < 50 && grade >= 0){
    alert("your grade is F");
}