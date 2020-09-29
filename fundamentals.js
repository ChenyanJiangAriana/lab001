const aCar = {
    owner : "Joe Bloggs",
    type : {
        make : 'Toyota',
        model : "Corolla",
        CC: 1.8
    },
    registration : {year: '201',
    county: 'WD',
    number: '1058'}
};

// Add a new property MILEAGE
aCar.mileage = 1000;
// Add a new property COLOR
aCar.color ={
    exterior: "red",
    interior:{texture: "leather", shade: "cream"}

}
console.log(aCar.owner + ' drives a ' + aCar.type.make);
console.log(
    "Reg. = "+
       aCar.registration.year +
       " " +
       aCar.registration.county +
       " " + 
       aCar.registration.number
)
console.log("It is a " +
        aCar.color.exterior +
        "," +
        aCar.mileage +
        " " + "mileage"+
        "," + "with "+
        aCar.color.interior.texture+
        " interior"
)