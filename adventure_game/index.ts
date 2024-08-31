#! /usr/bin/env node
import inquirer from "inquirer"

class Player {
    name:string;
    fuel:number = 100;
    constructor (name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 75
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
};

class Oponent {
    name: string;
    fuel:number = 100;
    constructor (name:string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 75
        this.fuel = fuel
    }
};

let player = await inquirer.prompt([{
    name:"name",
    type:"Input",
    message:"please enter your name:"

}])

let oponent = await inquirer.prompt([{
    name:"select",
    type:"list",
    message:"please enter your oponent:",
    choices:["skeleton","Allien","Zombie"]
}])

let p1 = new Player(player.name)
let o1 = new Oponent(oponent.select)

do{
    //skeleton
    if(oponent.select == "skeleton"){
        let ask = await inquirer.prompt([
          {
            name : "opt",
            type :"list",
            message : "what would you like to do ?",
            choices : ["Attack","Drink Portion","Run for your life"] 
          }

        ]);
       if(ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
         if (num > 0){
            p1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if( p1.fuel <= 0){
                console.log("you Loose, Better Luck Next Time");
                process.exit()
            }
        }
        if (num <= 0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`); 
            if( o1.fuel <= 0){
                console.log("you Win...!");
                process.exit()
            }
        }
       }
       if(ask.opt == "Drink Portion" ){
        p1.fuelIncrease()
        console.log(`you Drink Health portion your fuel is ${p1.fuel}`);
       }
       if(ask.opt == "Run for your life"){
        console.log(`You Lose, Better luck next Time`)
        process.exit()
       }
    }

    // Allien
    if(oponent.select == "Allien"){
        let ask = await inquirer.prompt([
          {
            name : "opt",
            type :"list",
            message : "what would you like to do ?",
            choices : ["Attack","Drink Portion","Run for your life"] 
          }

        ]);
       if(ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
         if (num > 0){
            p1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if( p1.fuel <= 0){
                console.log("you Loose, Better Luck Next Time");
                process.exit()
            }
        }
        if (num <= 0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`); 
            if( o1.fuel <= 0){
                console.log("you Win...!");
                process.exit()
            }
        }
       }
       if(ask.opt == "Drink Portion" ){
        p1.fuelIncrease()
        console.log(`you Drink Health portion your fuel is ${p1.fuel}`);
       }
       if(ask.opt == "Run for your life"){
        console.log(`You Lose, Better luck next Time`)
        process.exit()
       }
    }

    // zombie

    if(oponent.select == "Zombie"){
        let ask = await inquirer.prompt([
          {
            name : "opt",
            type :"list",
            message : "what would you like to do ?",
            choices : ["Attack","Drink Portion","Run for your life"] 
          }

        ]);
       if(ask.opt == "Attack"){
        let num = Math.floor(Math.random() * 2)
         if (num > 0){
            p1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`);
            if( p1.fuel <= 0){
                console.log("you Loose, Better Luck Next Time");
                process.exit()
            }
        }
        if (num <= 0){
            o1.fuelDecrease()
            console.log(`${p1.name} fuel is ${p1.fuel}`);
            console.log(`${o1.name} fuel is ${o1.fuel}`); 
            if( o1.fuel <= 0){
                console.log("you Win...!");
                process.exit()
            }
        }
       }
       if(ask.opt == "Drink Portion" ){
        p1.fuelIncrease()
        console.log(`you Drink Health portion your fuel is ${p1.fuel}`);
       }
       if(ask.opt == "Run for your life"){
        console.log(`You Lose, Better luck next Time`)
        process.exit()
       }
    }
}
while(true)
