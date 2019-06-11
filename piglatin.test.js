// describe('pigLatPrime', ()=>{
//     test('takes in a string entered by user and returns in pig latin',()=>{
//         expect(pigLatPrime('out')).toBe('outway')
//         expect(pigLatPrime('quick')).toBe('ickquay')
//         expect(pigLatPrime('Qatar')).toBe('atarqay')
//         expect(pigLatPrime('shy')).toBe('yshay')
//         expect(pigLatPrime('slay')).toBe('ayslay')
//         expect(pigLatPrime('yellow')).toBe('ellowyay')
//         expect(pigLatPrime('throw')).toBe('owthray')
//     })
// }) //end describe



//declare function with 1 argument
pigLatPrime = (string) => {
    // create variable takes a string from user input
    var string = document.getElementById('userText').value
    // declare new arrays of input split into individual words
    string = string.toLowerCase()
    var array = string.split(' ')
    // create vowel array to use finding vowels
    const vowels = ['a','e','i','o','u']
    // creating a map to look through entire array
    const newPig = array.map(word => {
        let vowelLocal = 0
        // checking to see if the first letter is a vowel, returns word with way at the end if true
        if(vowels.includes(word[0])){
            return word + 'way'
        // if the word includes qu, then run qFunc
        } else if(word.includes('qu')) {
            return qFunc(word)
        // if y is in the word but not the first letter, then run yFunc
        } else if(word.indexOf('y') !== 0 && word.indexOf('y' !== -1)){
            return yFunc(word)
        // otherwise loop through each char in the user input word to determine where the first vowel is located and ends the loop when finds first instance of a vowel
        } else {
            for(let char of word){
                if(vowels.includes(char)){
                    vowelLocal = word.indexOf(char)
                    break
                }
            }
            // slice all the consonants before the first vowel, append them to the end and add ay
            return word.slice(vowelLocal) + word.slice(0, vowelLocal) + 'ay'
        }
    // converting the array created by .split back into a string of words created by .map
    }).join(" ")
// result of pigLatPrime being pushed into html document
document.getElementById('funcOutput').innerHTML = newPig
}

//
// describe('qFunc',() => {
//     test("testing for instance of q and u",() => {
//         expect(qFunc("quilt")).toBe("iltquay")
//     })
// })

// declare a function that pigLatPrime calls for q words
const qFunc = (str) => {
    // declare a variable to replace qu in a string to keep "u" from interfering with finding the first vowel but to not affect indexes
    let qu = 'qq'
    // qLocal stores the index of the first q
    let qLocal = 0
    // qWord is a container to store the user input word replacing 'qu' with the variable qu
    let qWord = ''
    const vowels = ['a','e','i','o','u']
    // vowelLocal is the index of the first vowel
    let vowelLocal = 0
    // if the first letter is 'q' take off 'qu' from the front and append 'quay'
    if(str[0] === 'q'){
        // return the string from the third letter to the last letter then append the first two letters + 'ay'
        return str.slice(2) + str.slice(0, 2) + 'ay'
    // if 'q' is not the first letter then find the first vowel
    } else {
        // run through each char of str to find the index of first 'q'
        for(let char of str){
            if(char === 'q'){
                // set index of 'q' to qLocal
                qLocal = str.indexOf(char)
                break
            }
        }
        // assign qWord the value of str with the 'qu' replace by the variable qu
        qWord = str.slice(0, qLocal) + qu + str.slice(qLocal + 2)
        // iterating each char of qWord to find the index of the first vowel
        for(let char of qWord){
            // if char is included in vowels
            if(vowels.includes(char)){
                // setting the first vowel index to vowelLocal
                vowelLocal = qWord.indexOf(char)
                break
            }
        }
        // return the string to pigLatinPrime from the first vowel to the end of str + first letter of str until the first vowel + 'ay'
        return str.slice(vowelLocal) + str.slice(0, vowelLocal) + 'ay'
    }
}
// describe('yFunc', ()=>{
//     test('if y acts as a vowel, run correctly',() =>{
//         expect(yFunc('sky')).toBe('yskay')
//         expect(yFunc('stay')).toBe('aystay')
//     })
// })

// declare function to be called by pigLatPrime for words with 'y' as a vowel
const yFunc = (str) => {
    // add y to array of vowels
    let vowelY = ['a','e','i','o','u','y']
    // declare the index of vowelLocalY as 0
    let vowelLocalY = 0
    // iterating through every char of str to find the index of first vowel
    for(let char of str){
        // if char is included in vowelY
        if(vowelY.includes(char)){
            // setting the variable vowelLocalY to the index of the first vowel
            vowelLocalY = str.indexOf(char)
            break
        }
    }
    // return the str to pigLatinPrime from the first vowelY to the end of str + first letter of str until the first vowelY + 'ay'
    return str.slice(vowelLocalY) + str.slice(0,vowelLocalY) + 'ay'
}

var pigTalk = document.getElementById('firstPig');
pigTalk.onmouseover = function(){
    document.getElementById('pig1Talk').style.display = 'block';
}
pigTalk.onmouseout = function(){
    document.getElementById('pig1Talk').style.display = 'none';
}
var pigTalk1 = document.getElementById('secondPig');
pigTalk1.onmouseover = function(){
    document.getElementById('pig2Talk').style.display = 'block';
}
pigTalk1.onmouseout = function(){
    document.getElementById('pig2Talk').style.display = 'none';
}
