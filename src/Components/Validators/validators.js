export const mailValidator = text => {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(text)
}

export const phoneValidator = phone => {
    let reg = /\(\d{3}\)\d{3}-\d{4}/
    return reg.test(phone)
}

export const validator = ({id, fName, lName, email, phone}) => {
    let error = {}
    let regId = /[0-9]/
    let regNames = /[a-z, A-Z]/
    let mail = mailValidator(email)
    let tel = phoneValidator(phone)
    if (!regId.test(id.toString())) error.id = 'Значение id должно состоять только из цифр !'
    if (!regNames.test(fName)) error.fName = 'Значение firstName не должно содержать цифр !'
    if (!regNames.test(lName)) error.lName = 'Значение lastName не должно содержать цифр !'
    if (!mail) error.email = 'Не тот формат ввода email ! формат x@y.z'
    if (!tel) error.phone = 'Не тот формат ввода номера телефона ! формат (xxx)yyy-zzzz'
    return error
}
