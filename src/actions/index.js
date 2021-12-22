import axios from 'axios';
const getSecretWord=()=>{
    return axios.get('http://localhost:3000/')
    .then((response)=>{
        console.log(response.data)
    })
}
export {getSecretWord}

