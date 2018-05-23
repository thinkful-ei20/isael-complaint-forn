export const required = value => value ? undefined : 'Required';

export const isInt = value => {
    let noInt = value.split('').filter(character => isNaN(parseInt(character,10)));
    return noInt.length === 0 ? undefined : 'Needs to be numbers only';
    // console.log(noInt.length)
    // if(noInt.length === 0) return ''
}

export const minLength = value => {
    return value.length === 5 ? undefined : 'Needs to be 5 characters long';
}

export const isEmpty = value => {
    return value.length === 0 ? 'Can\'t be empty' : undefined; 
}