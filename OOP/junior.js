const Developer = require("./oop.js");    //importing it here

class JuniorDeveloper extends Developer{            //extending here
    constructor(name, health, lang, iq){
        super(name, health, lang, iq);                    //help us to call the parent class
        this.excited = 100;
    }

    train(){
        console.log(`I'm training on the following languages ${this.languages}`)
    }

    supported(target){
        target.health -= this.iq
        console.log(`${this.name} supported ${target.name}, providing ${this.iq} of intelligence!`)
        console.log(`${target.name} now has ${target.health} health`)
    }

}
const junDev1 = new JuniorDeveloper("Mandvi", 10, "Swift", 10)
const junDev2 = new JuniorDeveloper("Matt", 10, "Javascript", 10)
junDev1.completedProjects("Super Ninja")
junDev1.train()
junDev1.supported(junDev2)

console.log(junDev1)
