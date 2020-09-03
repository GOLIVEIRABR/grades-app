import axios from 'axios';

//Define a URL base da origem para consumo do servico
let baseURL = '';
if(process.env.BASE_API){
   baseURL = process.env.BASE_API; 
}else{
   baseURL = 'http://localhost/3005';
}

export default axios.create({
  baseURL: baseURL,
  headers: {
    'Content-type': 'application/json',
  },
});
