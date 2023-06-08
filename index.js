const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

let result = '';

const charactersLength = characters.length;

function generateKey(length, characters){
    for(let i = 0; i < length; i++){
        result += characters.charAt(Math.random()*charactersLength)
    }
    return result
}

const key = generateKey(6, characters);
console.log(key);

