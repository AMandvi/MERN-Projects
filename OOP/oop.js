class Developer{
    constructor(name, health, lang, iq){
        this.name = name
        this.health =10
        this.languages = ["Python", "Javascript", "Java", "C#"]
        this.iq = 5      // it cant change this one 
    }
    // constructor(name, health, iq = 99){
    //     this.name = name
    //     this.health =10
    //     this.languages = ["Python", "Javascript", "Java", "C#"]
    //     this.iq = iq     
    // }
    // if we write like this it can change the iq value in instances
    sleep(){
        console.log("Zzzzzzzz")
        this.iq += 5 
        this.health += 10
        return this
    }

    completedProjects(){
        console.log(`${this.name}completed a project named ${this.languages}`)
        this.iq -= 2;
        this.health -= 4;
    }
}
// instances
// below statements cannot write the default values of the constructor if we pass new defalt values in the paranthesis 
const dev1 = new Developer("Ruben")           
const dev2 = new Developer("Kevin", 10, 5)

console.log(dev1)
dev1.sleep()
console.log(dev1)
dev1.completedProjects()

console.log(dev2)
dev2.sleep()
console.log(dev2)

// chaining methods
// dev2.sleep().sleep().sleep()

module.exports = Developer




