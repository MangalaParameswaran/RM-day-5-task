// task 1 => For the given JSON iterate overv all for loops (for,for in, for of)
let persDetails= [
{
    "name":"john",
    "age":"20"
},
{
    "name":"Doe",
    "age":"30"
},
{
    "name":"Wick",
    "age":"40"
}
]
//for loop
for(let i=0; i<persDetails.length; i++){
    console.log(persDetails[i].name,persDetails[i].age)
}

//for in
for(let i in persDetails){
    console.log(persDetails[i].name,persDetails[i].age)
}
//for of
for(let j of persDetails){
    console.log(j.name,j.age)
}


// task 2 => Create ur own resume data in JSON formate
let persDetails1={
    "name":"magi",
    "age":"23",
    "email":"mangala214128pa@gmail.com",
    "phone":"1234567890",
    "address":{
        "city":"cuddalore",
        "pincode":"607003",
        "state": "TN"
    },
    "education":{
        "SSLC":"90%",
        "HLC":"80%",
        "UG":"70%"
    }
}