let num = 100;
 if (num < 100) {
console.log("Меньше");
} else if (num == 100) {
console.log("Верно");
} else {
console.log("Больше");    
} 

(num == 100) ? console.log("Равно") : console.log("Неверно");

switch (num) {
    case num < 100:
        console.log("Неверно!");
        break;
    case num > 100:
        console.log("Много!");
        break;
    case 100:
        console.log("Верно");
        break;
    default:
        console.log("Что-то не так");
        break;
}

let num = 100;
while (num <105) {
    console.log(num);
    num++;
}

let num = 100;
do {
    console.log(num);
    num++; 
}
while (num <105)

for (let i=1; i < 8; i++) {
    if (i == 6) {
        break;
    }
    console.log(i);
}

for (let i=1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}

    
