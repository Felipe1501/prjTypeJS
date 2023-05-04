function concatArray(...itens: any[]): any[]{
    return new Array().concat(...itens);
}

const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["yuri", "alberto"], ["felipe"]);

numArray.push("saitama");
console.log(numArray);
console.log(stgArray);
