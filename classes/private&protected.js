// private and protected methods in protected is assecible to class and child classes but private methods only use in class not use in child class
class Bottle {
   _waterlevel = 0;

//    private
    #privateName = "cello";

   _setWaterlevel(value){
    this._waterlevel = value;
   }

   _getwaterlevel(){
    console.log(this._waterlevel);
   }
}

let newBottle = new Bottle();

newBottle._setWaterlevel(10);
newBottle._getwaterlevel();

// console.log( newBottle.#privateName)

class Milten extends Bottle {
    newMther(){
        console.log("object")
    }
}

let obj = new Milten();

// obj.newMther()

// obj._setWaterlevel()
obj._getwaterlevel()
