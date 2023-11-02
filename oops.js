console.log("**** Movie Details ****");

class Movie
{
// set default rating  as PG
    constructor(title,studio,rating = 'PG'){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    //getPG
    getPG(){
        console.log(this.rating === 'PG');   
         if(this.rating == 'PG'){
            console.log(this.rating);
         }
    }
}

const movieObj = new Movie('Casino Royale','Eon Productions','PG');
movieObj.getPG();


console.log("**** Circle Radius ****");


class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }

    getRadius(){
        console.log(this.radius);
    }

    setRadius(value){
        this.radius = value;
    }
    getColor(){
        console.log(this.color);
    }
    setColor(value){
        this.color = value;
    }
    toString(){
        console.log(this.radius,this.color);
    }

    getArea(){
        console.log(Math.PI * (this.radius * this.radius));
    }

    getCircumference(){
        console.log(2*Math.PI*this.radius);
    }
}
const circleObj = new Circle(10,'red');
circleObj.toString();


console.log("**** Person Details ****");

class Person {
    constructor(name,email,skills,address,profession){
        this.name = name;
        this.email = email;
        this.skills= skills;
        this.address = address;
        this.profession = profession;
    }

getPersonDetails(){
  console.log(`
  ${this.name.toUpperCase()} ,
  ${this.email} ,
  ${this.skills} ,
  ${this.address} ,
  ${this.profession}
  `);
}

}

const personObj = new Person('karthik','test@gmail.com','php,js,json','trichy 4 th cross','developer');
personObj.getPersonDetails();


console.log("**** Uber Calculator ****");

class UberCalculator {
        
        constructor(price,kilometer,status){
            this.price = price;
            this.kilometer = kilometer;
            this.tax =  0.05;
            this.cancelCharge = 1;
            this.status = status;
        }
        getPrice(){
                if(this.status == 'cancelled'){
                    let total = (this.price * this.kilometer) - this.cancelCharge;
                    return total.toFixed(2);
                }else{
                    let total = this.price * this.kilometer + this.tax;
                    return total.toFixed(2);
                }
        }
}
// use status success,cancelled
const  uberObj = new UberCalculator(10,20,'success');
console.log(uberObj.getPrice());