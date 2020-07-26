import {mailValidator, phoneValidator, validator} from "../Components/Validators/validators";

const validatingData = {
    id: 125,
    firstName: 'Kirill',
    lastName: 'Dubov',
    email: 'kir@mail.ru',
    phone: '(900)000-0000'
}

it('Validator should be return 0 errors ', () => {
    // 1. data
    let action = validatingData
    // 2. action
    let testAction = validator({id: action.id, fName: action.firstName, lName: action.lastName, email: action.email, phone: action.phone})
    //3. exception
    expect(Object.keys(testAction).length).toBe(0)
});
it('Mail validator should be return true ', () => {
    // 1. data
    let action = validatingData
    // 2. action
    let testAction = mailValidator(action.email)
    //3. exception
    expect(testAction).toBe(true)
});
it('Phone validator should be return true ', () => {
    // 1. data
    let action = validatingData
    // 2. action
    let testAction = phoneValidator(action.phone)
    //3. exception
    expect(testAction).toBe(true)
});
