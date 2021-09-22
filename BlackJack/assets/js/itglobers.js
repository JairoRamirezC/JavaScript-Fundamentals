const name = "Jairo";
const lastname = "Ramirez Castaño";
const completeName = name + ' ' + lastname;
const nickname = "jairam";


const printMessage = (completeName, nickname) => {
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

printMessage(completeName, nickname)