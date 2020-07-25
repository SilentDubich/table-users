import * as axios from "axios";


const instanceLowData = axios.create({
    baseURL: 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
})
const instanceHighData = axios.create({
    baseURL: 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
})


export const API = {
    getUsers: (data) => {
        switch (data) {
            case 'low':
                return instanceLowData.get().then(response => {
                    return response.data
                })
            case 'high':
                return instanceHighData.get().then(response => {
                    return response.data
                })
        }
    }
}
