

//change the string to every letter with with second letter aster that letter
//eg-  a-converted into c x-converted into-z


function changeTheLetter(str) {
    let change = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'z') {
            change += str[i]
            continue
        }
        if (str[i] === 'y') {
            change += 'z'
            continue
        }
        let s = str[i].charCodeAt(0) + 2

        change += String.fromCharCode(s)
    }

    return change
}

let string = 'hai'


console.log(changeTheLetter(string));