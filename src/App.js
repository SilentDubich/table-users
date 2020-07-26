import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import {
    addUserAction,
    getUsersThunk, setAddFormErrors, setIsFetching, setPageAction,
    sortUsersAction,
    updateFormDataAction,
    updateSearchText
} from "./Redux/Reducers/usersReducer";
import {User} from "./Components/User/user";
import {Header} from "./Components/Header/header";
import {ButtonComp} from "./Components/Button/button";
import SCommon from "./commonStyles.module.css"
import {AddForm} from "./Components/Forms/AddForm/addForm";
import {SearchForm} from "./Components/Forms/SearchForm/searchForm";
import {Paginator} from "./Components/Paginator/paginator";
import {Preloader} from "./Components/Preloader/preloader";

export const App = (props) => {
    const [isChosen, setIsChosen] = useState(false)
    const [isAddingMode, setIsAddingMode] = useState(false)
    //Отправляет запрос на получение пользователей
    const getUsers = dataLength => {
        props.getUsersThunk(dataLength)
        setIsChosen(true)
    }
    let users = []
        users = props.users
            // Первая строка фильтра позволяет искать нужную строку по всему массиву
            .filter((el, i) => props.searchText.length !== 0 ||
                i >= (props.pageSize * (props.page - 1)) && i < (props.pageSize * props.page) && el)
            .map( (el, i) => {
                let man = el.id + ' ' + el.firstName + ' ' + el.lastName + ' ' + el.email + ' ' + el.phone
                if (props.searchText.length === 0 || man.toUpperCase().includes(props.searchText.toUpperCase()))
                {
                    return <User id={el.id} fName={el.firstName} lName={el.lastName} email={el.email}
                                 phone={el.phone} address={el.address} description={el.description}/>
                }
            })
    // По нажатию на стрелку сортирует столбец param - название столбца, method - по возрастанию или по убыванию
    const filter = (param, method) => {
        props.sortUsersAction(param, method)
    }
    if (props.fetch) return <Preloader/>
    return (
        <div>
            <div className={SCommon.container__flex}>
                {!isChosen && <ButtonComp disabled={props.fetch} title={'Малый объем данных'} action={getUsers} arg={'low'}/> }
                {!isChosen && <ButtonComp disabled={props.fetch} title={'Большой объем данных'} action={getUsers} arg={'high'}/>}
                {isChosen && isAddingMode && <AddForm setErrors={props.setAddFormErrors} error={props.errors} addingMode={setIsAddingMode} addUser={props.addUserAction} form={props.addingForm} updateFormdata={props.updateFormDataAction}/>}
                {isChosen && !isAddingMode && <ButtonComp title={'Добавить'} action={setIsAddingMode} arg={true}/>}
            </div>
            <div>
                {isChosen && <Paginator setPageAction={props.setPageAction} totalUsers={props.totalUsers} portionSize={props.portionSize} pageSize={props.pageSize}/>}
                {isChosen && <SearchForm text={props.searchText} updateText={props.updateSearchText}/>}
                {isChosen && <Header filter={filter}/>}
                {isChosen && users}
            </div>
        </div>

    );
}


let mapStateToProps = state => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        addingForm: state.usersReducer.addingForm,
        searchText: state.usersReducer.searchText,
        totalUsers: state.usersReducer.totalUsers,
        portionSize: state.usersReducer.portionSize,
        page: state.usersReducer.currentPage,
        fetch: state.usersReducer.isFetching,
        errors: state.usersReducer.errors
    }
}


export const AppContainer = connect(mapStateToProps,
    {addUserAction, sortUsersAction, getUsersThunk, updateFormDataAction, updateSearchText,
        setPageAction, setIsFetching, setAddFormErrors})(App)
