// code your solution here
function saturdayFun(activity = 'roller-skate') {
    const message = `This Saturday, I want to ${activity}!`
    switch (activity) {
        case 'go bowling':
            return message
        case 'play videogames':
            return message
        default:
            return message
        }
}

function mondayWork(activity = 'go to the office') {
    switch (activity) {
        case 'work from home':
            return `This Monday, I will ${activity}.`
        default:
            return `This Monday, I will ${activity}.`
    }
}

function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`
    }
}