import axios from 'axios';

export const onCep = data => axios.get(`https://viacep.com.br/ws/${data}/json/`)