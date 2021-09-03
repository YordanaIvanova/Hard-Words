function solve(array) {
    let text = array[0]
    let words = array[1]
    let counter = 0    

    for(i = 0; i < text.length; i++){
        let el = text[i]
        if(el === '_'){
            counter ++            
        }

        if (el !== '_' && counter !== 0) {
            for(word of words){
                if(word.length === counter){
                    let currStr = '' 
                    for (let i = 0; i < counter; i++) {
                        currStr += '_'                        
                    }
                    
                    text = text.replace(currStr, word)
                    break
                }
            } 
            

            counter = 0
        } 
    } 

    console.log(text)
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)