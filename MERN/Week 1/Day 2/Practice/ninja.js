
    class Ninja {
        // CONSTRUCTOR
        constructor(name){
            // Attributes
            this.name = name
            this.health = 90
            this.speed = 3
            this.strength = 3
            
        }
        sayName(){
            console.log(`name: ${this.name}`)
            return this
        }
        showStats(){
            console.log(`stats : health: ${this.health},speed :${this.speed},strength:${this.strength}`);
            return this
        }
        drinkSake(){
            this.health +=10
            return this
        }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName().showStats().drinkSake().showStats()



