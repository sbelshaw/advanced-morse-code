input.onButtonPressed(Button.A, function () {
    LetterToSend = "" + LetterToSend + "."
    basic.showString("" + (LetterToSend))
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= morse.length; index++) {
        if (LetterToSend == morse[index]) {
            textToSend = alphabet[index]
            radio.sendString("" + (textToSend))
            basic.showString("" + (textToSend))
        }
    }
    textToSend = ""
    LetterToSend = ""
})
input.onButtonPressed(Button.B, function () {
    LetterToSend = "" + LetterToSend + "-"
    basic.showString("" + (LetterToSend))
})
radio.onReceivedStringDeprecated(function (receivedString) {
    basic.showString("" + (receivedString))
    LetterToSend = ""
})
let alphabet: string[] = []
let morse: string[] = []
let LetterToSend = ""
let textToSend = ""
textToSend = ""
LetterToSend = ""
radio.setGroup(1)
morse = [
".-",
"-...",
"-.-.",
"-..",
".",
"..-.",
"--.",
"....",
"..",
".---",
"-.-",
".-..",
"--",
"-.",
"---",
".--.",
"--.-",
".-.",
"...",
"-",
"..-",
"...-",
".--",
"-..-",
"-.--",
"--..",
".----",
"..---",
"...--",
"....-",
".....",
"-....",
"--...",
"---..",
"----.",
"-----"
]
alphabet = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0"
]
