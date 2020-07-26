import {usersInstructions, addUserAction, setPageAction, setIsFetching} from "../Redux/Reducers/usersReducer"
let state = {
    users: [],
    pageSize: 50,
    totalUsers: 0,
    portionSize: 10,
    currentPage: 1,
    isFetching: false,
    addingForm: {},
    errors: {},
    searchText: ''
}


it('should be users count increment to 1 ', () => {
    // 1. data
    let action = addUserAction({id: 125, firstName: 'Kirill', lastName: 'Dubov', email: 'kir@mail.ru', phone: '(900)000-0000'})
    // 2. action
    let testAction = usersInstructions(state, action)
    //3. exception
    expect(testAction.users.length).toBe(1)
});
it('should be page number is 2 ', () => {
    // 1. data
    let action = setPageAction(2)
    // 2. action
    let testAction = usersInstructions(state, action)
    //3. exception
    expect(testAction.currentPage).toBe(2)
});
it('should be fetch is true ', () => {
    // 1. data
    let action = setIsFetching(true)
    // 2. action
    let testAction = usersInstructions(state, action)
    //3. exception
    expect(testAction.isFetching).toBe(true)
});


