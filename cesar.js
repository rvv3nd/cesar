const ascii = [
    "NULL","SOH","STX","ETX", "EOT",
    "ENQ","ACK", "BEL", "BS", "HT",
    "LF", "VT",  "FF",  "CR", "SO",
    "SI", "DLE", "DC1", "DC2","DC3",    
    "DC4","NAK", "SYN", "ETB","CAN",
    "EM", "SUB", "ESC", "FS", "GS",
    "RS", "US",  "DEL", 
    " ",   "!",   "\"", "#",    
    "$",  "%",   "&",   "'",  "(",    
    ")",  "*",   "+",   ",",  "-",    
    ".",  "/",   "0",   "1",  "2",    
    "3",  "4",   "5",   "6",  "7",    
    "8",  "9",   ":",   ";",  "<",    
    "=",  ">",   "?",   "@",  "A",    
    "B",  "C",   "D",   "E",  "F",    
    "G",  "H",   "I",   "J",  "K",    
    "L",  "M",   "N",   "O",  "P",    
    "Q",  "R",   "S",   "T",  "U",    
    "V",  "W",   "X",   "Y",  "Z",    
    "[",  "\\",  "]",   "^",  "_",    
    "`",  "a",   "b",   "c",  "d",    
    "e",  "f",   "g",   "h",  "i",    
    "j",  "k",   "l",   "m",  "n",    
    "o",  "p",   "q",   "r",  "s",    
    "t",  "u",   "v",   "w",  "x",    
    "y",  "z",   "{",   "|",  "}",    
    "~",  "" ,   "Ç",   "ü",  "é",
    "â",  "ä",   "à",   "å",  "ç",
    "ê",  "ë",   "è",   "ï",  "î",
    "ì",  "Ä",   "Å",   "É",  "æ",
    "Æ",  "ô",   "ö",   "ò",  "û",
    "ù",  "ÿ",   "Ö",   "Ü",  "ø",
    "£",  "Ø",   "×",   "ƒ",  "á",    
    "í",  "ó",   "ú",   "ñ",  "Ñ",   
    "ª",  "º",   "¿",   "®",  "¬",    
    "½",  "¼",   "¡",   "«",  "»",    
    "░",  "▒",   "▓",   "│",  "┤",
    "Á",  "Â",   "À",   "©",  "╣",
    "║",  "╗",   "╝",   "¢",  "¥",
    "─",  "┼",   "ã",   "Ã",  "╚",
    "╔",  "╩",   "╦",   "╠",  "═",
    "╬",  "¤",   "ð",   "Ð",  "Ê",
    "Ë",  "È",   "ı",   "Í",  "Î",
    "Ï",  "┘",   "┌",   "█",  "▄",
    "¦",  "Ì",   "▀",   "Ó",  "ß",
    "Ô",  "Ò",   "õ",   "Õ",  "µ",
    "þ",  "Þ",   "Ú",   "Û",  "Ù",
    "ý",  "Ý",   "¯",   "´",  "≡",
    "±",  "‗",   "¾",   "¶",  "§",
    "÷",  "¸",   "°",   "¨",  "·",
    "¹",  "³",   "²",   "■",  " "
]

const limit = (ascii.length)-1


function codifica(textoPlano, n){
    var index
    var textocodificado = ""
    for(letra of textoPlano){
        index = ascii.indexOf(letra) + n
        //console.log(`prev: ${index}`)
        if (index > limit){
            index -= limit
        }
        //console.log(`real: ${index}`)
        //ascii[index]
        textocodificado += ascii[index]
    }
    return textocodificado
}

function decodifica(textoCodificado,n){
    var index
    var textoDecodificado = ""
    for(letra of textoCodificado){
        index = ascii.indexOf(letra) - n
        // console.log(`prev: ${index}`) 
        if (index < 0){
            index += limit
        }
        // console.log(`real: ${index}`)
        // ascii[index]
        textoDecodificado+= ascii[index]
    }
    return textoDecodificado
}

function codificaTexto(){
    const texto = document.getElementById("InputTextoPlano");
    const textoPlano = texto.value;
    const input = document.getElementById("InputN");
    const value = Number(input.value);
    if(!value > 0 || value >= 256){
        alert("Debes ingresar n mayor que cero y menor que 256")
    }else{
        //console.log(value)
        const res = codifica(String(textoPlano),value)
        resultado.value = res;
    }
}

function decodificaTexto(){
    const texto = document.getElementById("InputTextoCodificado");
    const textoCodificado = texto.value;
    const input = document.getElementById("InputN");
    const value = Number(input.value);
    if(!value > 0 || value >= 256){
        alert("Debes ingresar n mayor que cero y menor que 256")
    }else{
        //console.log(value)
        const res = decodifica(String(textoCodificado),value)
        resultado.value = res;
    }
}