const textArea = document.getElementById("textArea")

const charCounter = document.getElementById("charCount")

const remaining = document.getElementById("remaining")

const maxLength = 150;

textArea.addEventListener("input", ()=>{

    if(textArea.value.length > maxLength){
        textArea.value = textArea.value.substring(0, maxLength) 
    }

    const length = textArea.value.length;

    charCounter.textContent = length;

    remaining.textContent = maxLength - length;

    if(length >= maxLength){
        charCounter.style.color="red"
        remaining.style.color="red"
    }
    else if(length >= maxLength - 10 ){
         charCounter.style.color="orange"
        remaining.style.color="orange"
    }
    else{
         charCounter.style.color=""
        remaining.style.color=""
    }
})
