//Arrow functions don't bind their own 'this' value while normal function do

// //normal function
// const square=function(x){
//     return x*x
// }

// //arrow function
// const squareArrow=(x)=>{
//     return x*x
// }

// //arrow function (shorthand syntax)
// const squareArrowShorthand=(x)=>x*x

// console.log(squareArrowShorthand(9))

const event={
    name: 'Birthday party',
    guestList: ['Davide', 'Lurid Gengiv', 'Opa'],
    //ES6 syntax for normal function
    printGuestList(){
        console.log('Guest list for ' + this.name)
        
        //Here I use an arrow function because I don't want it to have its own 'this', but instead being able to access the 'this' of printGuestList
        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()