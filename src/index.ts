type hero = {
    name: string;
    vulgo: string;
}

function printObject(people: hero){
    console.log(people);
    
}

printObject({
    name: "peter parker",
    vulgo: "homem aranha"
});

