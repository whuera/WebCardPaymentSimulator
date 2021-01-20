import axios from 'axios';

export class UserService{
    baseUrl = "http://localhost:8080/users";
    getAll(){
        return axios.get(this.baseUrl).then(res => res.data);
    }
}