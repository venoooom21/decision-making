function ticket(){
    let age=prompt("please enter your age! ")
    age=Number(age);
    let price;
    if (age<=12){
         price="12$";
    }
    else if(age >= 13 && age <= 17){
        price= "15$";
    }
    else{
        price="20$";
    }
    return price;
}
console.log(ticket());

function clothing(){
    let weather=prompt("what's the weather today? ")
    weather=String(weather);
    let clothes;
    if (weather="cold"){
        clothes="wear a coat";
    }
    else if(weather="sunny"){
        clothes="wear a shirt with a jacket";
    }
    else if(weather="hot"){
        clothes="wear a t-shirt and shorts";
    }
    return clothes;
}
console.log(clothing());

function fibonacci(n){
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5));