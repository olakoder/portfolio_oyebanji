let menu = document.querySelector('.menu-button')
let exit = document.querySelector('.close')

menu.addEventListener('click', () => {
    document.querySelector('.navigation').classList.add('active');
    document.querySelector('.menu-button').classList.add('hide');
    document.querySelector('.close').classList.add('show');
})

exit.addEventListener('click', () => {
    document.querySelector('.navigation').classList.remove('active')
    document.querySelector('.menu-button').classList.remove('hide');
    document.querySelector('.close').classList.remove('show');
    // document.querySelector('.close').classList.add('show');
})


let skill = document.querySelector('#skill')
let education = document.querySelector('#education')
let experience = document.querySelector('#experience')

skill.addEventListener('click', () => {
    document.querySelector('.skills-solution').classList.toggle('active')
})

education.addEventListener('click', () => {
    document.querySelector('.edu').classList.toggle('showSkills')
    // console.log('why naira')
})

experience.addEventListener('click', () => {
    document.querySelector('#experiences').classList.toggle('showSkills')
    // console.log('why naira')
})
