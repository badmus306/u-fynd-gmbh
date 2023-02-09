/* Author: Badmus Segun
    The corrected code and the answers to the solution below
*/
const Converter = {
    radian() {
        return (180 / Math.PI);
    },
    deg2rad(degrees){
        return degrees / this.radian();
    },
    rad2deg(radians) {
        return radians * this.radian();
    },
    
};

let result = ''

input
    .split(",")
    .filter((t) => !!t)
    .map((i) => parseInt(i, 10))
    .forEach(ang => {
        const rad = Converter.deg2rad(ang)
        const degPlus10 = Converter.rad2deg(rad + 0.174533)
        result += `${rad} -${degPlus10}\n`
    })
    
console.log(result)


    /*  BUG REPORT

    The Converter object declaration is missing the var, let, or const keyword.
    The property radian is unable to be accessed inside the other methods.
    The rad2deg method is missing the keyword function.
    
    The Corrected code is below
    */

