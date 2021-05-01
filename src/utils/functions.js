
export const formatNumber = cep=> {
	cep = cep.replace(/[a-z]{0,3}/g, "");

  //realizar a formatação...
    return cep.replace(/(\d{5})(\d{3})/, "$1-$2");
};

