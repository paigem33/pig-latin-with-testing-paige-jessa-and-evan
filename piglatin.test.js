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
    var string = document.getElementById('userText').value
    // declare new array of input split into individual words
    string = string.toLowerCase()
    var array = string.split(' ')
    const vowels = ['a','e','i','o','u']
    //take each word of the array and remove initial consonants, append to the end of the word and add "ay"
    const newPig = array.map(word => {
        let vowelLocal = 0
        if(vowels.includes(word[0])){
            return word + 'way'
        } else if(word[0] === 'q' && word[1] === 'u') {
            return qFunc(word)
        } else if(word.indexOf('y') !== 0 && word.indexOf('y' !== -1)){
            return yFunc(word)
        }
         else {
            for(let char of word){
                if(vowels.includes(char)){
                    vowelLocal = word.indexOf(char)
                    break
                }
            }
            return word.slice(vowelLocal) + word.slice(0, vowelLocal) + 'ay'
        }
    }).join(" ")
document.getElementById('funcOutput').innerHTML = newPig
}

//
// describe('qFunc',() => {
//     test("testing for instance of q and u",() => {
//         expect(qFunc("quilt")).toBe("iltquay")
//     })
// })
const qFunc = (str) => {
    return str.slice(2) + str.slice(0, 2) + 'ay'
}
// describe('yFunc', ()=>{
//     test('if y acts as a vowel, run correctly',() =>{
//         expect(yFunc('sky')).toBe('yskay')
//         expect(yFunc('stay')).toBe('aystay')
//     })
// })
const yFunc = (str) => {
    let vowelY = ['a','e','i','o','u','y']
    let vowelLocalY = 0
    for(let char of str){
        if(vowelY.includes(char)){
            vowelLocalY = str.indexOf(char)
            break
        }
    }
    return str.slice(vowelLocalY) + str.slice(0,vowelLocalY) + 'ay'
}
