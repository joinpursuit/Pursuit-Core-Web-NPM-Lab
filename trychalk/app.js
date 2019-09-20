const chalk = require("chalk")

const helloBlue = () => {
    console.log(chalk.blue("Hello World!"))
}

const helloRed = () => {
    console.log(chalk.red("Hello World!"))
}

const stringToColor = (str, color, includeNewLine) => {
    let chalkColor = chalk[color]
    if (includeNewLine) {
        console.log(chalkColor(str))
    } else {
        process.stdout.write(chalkColor(str + ' '));
    }
}

const evensBlueOddsYellow = (str) => {
    const strArr = str.split(' ')
    for (let i = 0; i < strArr.length; i++) {
        let color = ""
        if (i % 2 == 0) {
            color = "blue"
        } else {
            color = "yellow"
        }
        stringToColor(strArr[i], color)        
    }
}

const angryText = (str) => {
    console.log(chalk.red.underline(str.toUpperCase()))
}

const backgroundCyan = (str) => {
    console.log(chalk.bgKeyword('cyan').white(str))
}

const boldFirstUnderlineLast = (str) => {
    const strArr = str.split(' ')
    for (let i = 0; i < strArr.length; i++) {
        const word = strArr[i]
        if (i == 0) {
            process.stdout.write(chalk.bold(word + ' '))
        } else if (i == strArr.length - 1) {
            console.log(chalk.underline(word))
        } else {
            process.stdout.write(word + ' ')
        }
    }
}

const commandLineChalk = () => {
    let color = process.argv[2]    
    for (let i = 3; i < process.argv.length; i++) {
        stringToColor(process.argv[i], color, false)
    }    
}