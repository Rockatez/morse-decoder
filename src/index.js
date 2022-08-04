const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '     ':  ' ',
};

function decode(expr) {
    const splitToTen = expr.match(/.{1,2}/g)
    const doubles = splitToTen.map((num) => num === "10" ? '.' : num === "11" ? "-" : num === "**" ? " " : "");
     let arrFive = [];
    for(let i=0; i < doubles.length; i=i+5){
            arrFive.push(doubles.slice(i, i+5).join(''));
    }
    return arrFive.map(item=>MORSE_TABLE[item]).join('');
    }

module.exports = {
    decode
}
