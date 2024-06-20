function rollDice(){
    let inputValue = document.getElementById("diceInput").value;
    inputValue = Number(inputValue)
    let diceResult = document.getElementById("result")
    let diceImages = document.getElementById("images")

    const values = []
    const images = []

    for(let i=1; i <= inputValue; i++){
        let value = Math.floor((Math.random())*6 + 1)
        values.push(value)
        images.push(`<img src="images/${value}.png" alt="Dice ${value}">`)
    }

    diceResult.textContent = `Dice Values ${values.join(", ")}`
    diceImages.innerHTML = images.join("")
}