type hero = {
    name: string;
    vulgo: string;
}

function printObjects(people: hero){
    console.log(people);
    
}

printObjects({
    name: "peter parker",
    vulgo: "homem aranha"
});

