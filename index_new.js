// document.getElementById('background').addEventListener('mouseenter',()=>{
//     document.getElementById('background').style.backgroundColor = 'yellow';
//     document.getElementById('hole1').style.backgroundColor = 'yellow';
//     document.getElementById('hole2').style.backgroundColor = 'yellow';
//     document.getElementById('hole3').style.backgroundColor = 'yellow';
//     document.getElementById('hole4').style.backgroundColor = 'yellow';
//     document.getElementById('hole5').style.backgroundColor = 'yellow';
// })


document.getElementById('background').style.display = 'flex'

document.getElementById('background').addEventListener('mouseenter',()=>{
    document.getElementById('greet').style.visibility = 'visible';
    document.getElementById('greet').style.opacity = 1;
    let idList =['background','hole1','hole2','hole3','hole4','hole5']
    for(i of idList){
        document.getElementById(i).style.backgroundColor = 'yellow'
    }
})

document.getElementById('background').addEventListener('mouseleave',()=>{
    document.getElementById('greet').style.visibility = 'hidden';
    document.getElementById('greet').style.opacity = 0;
    let idList =['background','hole1','hole2','hole3','hole4','hole5']
    for(i of idList){
        document.getElementById(i).style.backgroundColor = 'white'
    }
})