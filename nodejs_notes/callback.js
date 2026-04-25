function greet(name , callback){
    console.log("hello " + name);
    callback();
};

function sayhi(){
    console.log("hi lovely , today is awesome day for you");
}

greet("Monika",sayhi);

