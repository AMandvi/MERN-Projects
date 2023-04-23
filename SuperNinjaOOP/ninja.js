class Ninja{
    constructor(name,health, speed, strength){
        this.name = name 
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName(){
        console.log(`${this.name}`)
    }
    showStats(){
        console.log(`Name: ${this.name}  Health: ${this.health} Speed: ${this.speed} Strength: ${this.speed} `)
        return this
    }
    drinkSake(){
        this.health += 10
    }

}

const ninja1 = new Ninja("Hyabusa");
console.log(ninja1)
ninja1.sayName();
ninja1.showStats();




module.exports = Ninja