import React, {useState} from 'react';
import './App.css';
import {connect} from "react-redux";
import {
    addUserAction,
    getUsersThunk, setIsFetching, setPageAction,
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
    const [method, setMethod] = useState(true)
    const [isAddingMode, setIsAddingMode] = useState(false)
    let pattern = new RegExp(props.searchText, 'giu')
    // let phonePattern = new RegExp('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$', 'giy')
    const getUsers = dataLength => {
        props.getUsersThunk(dataLength)
        setIsChosen(true)
    }
    let users = []
        users = props.users
            .filter((el, i) => i >= (props.pageSize * (props.page - 1)) && i < (props.pageSize * props.page) && el)
            .map( el => {
                if (props.searchText.length === 0 || el.id.toString().match(pattern) || el.firstName.match(pattern) || el.lastName.match(pattern) || el.email.match(pattern)) {
                    return <User id={el.id} fName={el.firstName} lName={el.lastName} email={el.email}
                                 phone={el.phone} address={el.address} description={el.description}/>
                }
            })

    const filter = param => {
        props.sortUsersAction(param, method)
        setMethod(!method)
    }
    if (props.fetch) return <Preloader/>
    //TODO: Fix search peoples and add validation and fix moreinfo for new users and sort-arrows
    return (
        <div>
            <div className={SCommon.container__flex}>
                {!isChosen && <ButtonComp disabled={props.fetch} title={'Малый объем данных'} action={getUsers} arg={'low'}/> }
                {!isChosen && <ButtonComp disabled={props.fetch} title={'Большой объем данных'} action={getUsers} arg={'high'}/>}
                {isChosen && isAddingMode && <AddForm addingMode={setIsAddingMode} addUser={props.addUserAction} form={props.addingForm} updateFormdata={props.updateFormDataAction}/>}
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
        fetch: state.usersReducer.isFetching
    }
}


export const AppContainer = connect(mapStateToProps,
    {addUserAction, sortUsersAction, getUsersThunk, updateFormDataAction, updateSearchText, setPageAction, setIsFetching})(App)
