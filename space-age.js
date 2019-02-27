export const age = (inputPlanet, inputSeconds) => {
    /*
    take input seconds, divide by conversion factor to get
    to earth years, then divide by the planet factor
    */

    //60 s/min * 60min/hr * 24 hr/day * 365.25days/yr
    const conversionFactor = 60*60*24*365.25; //31557600
    var planetFactor = {
        earth: 1,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132
    };

    var age = Math.round(((inputSeconds/conversionFactor)/planetFactor[inputPlanet])*100)/100;
    return age;


}