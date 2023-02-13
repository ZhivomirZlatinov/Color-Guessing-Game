const colors = [
    {
    'name': 'tan',
    'code': '#d2b48c',
    },
    {
    'name': 'silver',
    'code': '#C0C0C0',
    },
    {
    'name': 'indigo',
    'code': '#4b0082',
    },
    {
    'name': 'maroon',
    'code': '#800000',
    },
    {
    'name': 'fuchsia',
    'code': '#FF00FF',
    },
    {
    'name': 'navy',
    'code': '#000080',
    },
    {
    'name': 'teal',
    'code': '#008080',
    },
    {
    'name': 'beige',
    'code': '#f5f5dc',
    },
    {
    'name': 'chartreuse',
    'code': '#7fff00',
    },
    {
    'name': 'firebrick',
    'code': '#b22222',
    },
    {
    'name': 'orchid',
    'code': '#da70d6',
    }
]


let context = canvas.getContext("2d")
let button1 = document.getElementById('color1')
let button2 = document.getElementById('color2')
let button3 = document.getElementById('color3')
let button4 = document.getElementById('color4')

let randomBtn = Math.floor(Math.random()*(5-1)+1)
let randomCol = Math.floor(Math.random()*(11-0)+0)

let correctButton

let score = 0;
let scoreboard = document.getElementById('scoreboard')

let Col1 = randomCol
let Col2 = randomCol
let Col3 = randomCol

let btns = document.querySelectorAll('button')
btns.forEach(element=> element.addEventListener('click', check))


function randomize(){
    randomCol = Math.floor(Math.random()*(11-0)+0)
    randomBtn = Math.floor(Math.random()*(5-1)+1)
}

function updateCorrectAnswer(){
    correctButton = document.getElementById('color'+randomBtn)
    correctButton.innerHTML=colors[randomCol].name
}

function fill(){
    context.fillStyle = colors[randomCol].code
    context.fillRect(0,0,999,150)
    }

function generateColors(){
        Col1 = Math.floor(Math.random()*(11-0)+0)
        Col2 = Math.floor(Math.random()*(11-0)+0)
        Col3 = Math.floor(Math.random()*(11-0)+0)
        if(Col1 == randomCol || Col1 == Col2 || Col1 == Col3)
        {
            generateColors()
        }
        if(Col2 == randomCol || Col2==Col3)
        {
            generateColors()
        }
        if(Col3 == randomCol)
        {
            generateColors()
        }
}

function updateColors(){
    switch(randomBtn){
        case 1:
            button2.innerHTML=colors[Col1].name
            button3.innerHTML=colors[Col2].name
            button4.innerHTML=colors[Col3].name
            break;
        case 2:
            button1.innerHTML=colors[Col1].name
            button3.innerHTML=colors[Col2].name
            button4.innerHTML=colors[Col3].name
            break;
        case 3:
            button1.innerHTML=colors[Col1].name
            button2.innerHTML=colors[Col2].name
            button4.innerHTML=colors[Col3].name
            break;
        case 4:
            button1.innerHTML=colors[Col1].name
            button2.innerHTML=colors[Col2].name
            button3.innerHTML=colors[Col3].name
            break;
    }
}

function updateScore(){
    scoreboard.innerHTML = "Score: " + score
}

function check(e){
    if(e.target.innerHTML==colors[randomCol].name){
        score++
        updateScore()
        randomize()
        updateCorrectAnswer()
        fill()
        generateColors()
        updateColors()
    }else{
        alert('Correct answer is: '+colors[randomCol].name)
        alert('GAME OVER - Final Score: '+score)
        score = 0
        updateScore()
        randomize()
        updateCorrectAnswer()
        fill()
        generateColors()
        updateColors()
    }
}

updateCorrectAnswer()
fill()
generateColors()
updateColors()