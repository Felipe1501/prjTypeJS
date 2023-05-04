let power:boolean = false;
let nm:string = 'felipe';
let year:number = 30;
let nr:number = 30.15;

let nulo:null = null;

let indef:undefined = undefined;

let retorno:void;
let retornoview:any = false;

let testing:object = {
    nome: "felipe",
    city: "monga",
    facul: "unisantos"
}

type produto = {
    nome: string;
    preco: number;
    unid: number;
}

let nmProdut:produto = {
    nome: "mouse gamer",
    preco: 98.89,
    unid: 15
}

let dados:string[] = ["felipe", "roger guedes", "peter parker", "drake"];
let dados2: Array<string> = ["felipe", "roger guedes", "peter parker", "drake"];

let boleto:(string | number)[] =  [3222, "felipe"];

let boleto1:[string, number, number]= ["conta do gás", 111.10, 12131554154];

let niver:Date = new Date("2023-15-01 16:48");
console.log(niver.toString());


function addNumber(x: number, y:number):number{
    return x + y;
}

let soma: number = addNumber(15, 1);

console.log(soma);

function addToHello(name: string): string{
    return `Hello Hello ${name}`; 
}

console.log(addToHello("Felipe"));

function CallToPhone(phone: number | string): number | string{
    return phone;
}

console.log(CallToPhone("1134141414"));

async function getDatabase(id: number): Promise<string> {
    return "felipe";
}

type robot = {
    id: number;
    name: string;
}

interface robot2 {
    readonly id: number;
    name: string;
    sayHello():string;
}

const robo: robot = {
     id: 1,
    name: "Alexa"
}

class Pessoa implements robot2{
    id: number;
    name: string;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `hello hello ${this.name}`;
        
    }
}

const people = new Pessoa(1, "yuri alberto");
console.log(people.sayHello());


class Character {
   private name?: string;
   public streght: number;
   protected readonly skill: number;

    constructor(name: string, streght: number, skill: number){
        this.name = name;
        this.streght = streght;
        this.skill = skill;
    }

    public attack():void{
        console.log(`Attack with ${this.streght} points`);
        
    }
}

class Magincian extends Character{
    magicPoints:number;
    constructor(
        name: string, 
        streght: number, 
        skill: number, 
        magicPoints: number
        ){
        super(name, streght, skill);
        this.magicPoints = magicPoints;

    }
}

const p1 = new Character("Hulk",10, 1501);
const p2 = new Magincian("Doutor Estranho",14, 189, 100);
p1.attack();
