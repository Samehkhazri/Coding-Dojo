
class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;

    }


}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res -= this.power
        return target, this
    }

}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;

    }
    play(target) {
        if (target instanceof Unit) {
            if (this.stat==="resillience"){
                target.res+=this.magnitude
            }
            else if(this.stat==="power"){
                target.power+=this.magnitude
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }

}

const redBeltNenja=new Unit("red belt ninja",3,3,4);
const blackBeltNinja = new Unit ("black belt ninja",4,5,4)

const hardAlgorrithm= new Effect ("hard algorithm",2,"increase target's resillience by 3","resillience",3)
const unhandledPromiseRejection =new Effect ("unhandled Promise Rejction",1,"reduce target's resillice by 2","resilience",-2)
const pairProgramming = new Effect ("pair programming",3,"increase target's power by 2","power",2)