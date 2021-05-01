import React from 'react'
import { useForm } from 'react-hook-form'
import InputMask from "react-input-mask";

import InputLabel from '../utils/InputLabel'

const FormSave =
  ({
    submit,
    nameInputProps,
    celularInputProps,
    cepInputProps,
    enderecoInputProps,
    numInputProps,
    oncancel
  }) => {


    const { register, handleSubmit, setValue, errors } = useForm();

    const onSubmitForm = data => {
      let values = data;
      submit(values);
    };




    return (
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <InputLabel
          label="Nome Completo"
          {...nameInputProps}
          onChange={e =>
            setValue(
              'nome',
              e.target.value,
            )}
        />
        <InputLabel
          label="Celular"
          {...celularInputProps}
          onChange={e =>
            setValue(
              'celular',
              e.target.value,
            )}
        />
        <InputLabel
          label="CEP"
          {...cepInputProps}
          onChange={e =>
            setValue(
              'cep',
              e.target.value,
            )}
        />
        <InputLabel
          label="Endereço"
          {...enderecoInputProps}
          onChange={e =>
            setValue(
              'endereco',
              e.target.value,
            )}
        />
        <InputLabel
          label="Nº"
          {...numInputProps}
          onChange={e =>
            setValue(
              'num',
              e.target.value,
            )}
        />
        <div className="text-center">
          <button className="btn btn-danger btn-lg mr-2" onClick={() => oncancel}>Cancelar</button>
          <button className="btn btn-success btn-lg " onClick={() =>  window.location='#finnaly'}>Continuar</button>
        </div>
      </form>
    )
  }

FormSave.defaultProps = {
  nameInputProps:{
    type:'text',
    id: 'nome',
    name: 'nome'
  },
  celularInputProps: {
    type:'text',
    id: 'celular',
    name: 'celular'
  },
  enderecoInputProps: {
    type:'text',
    id: 'endereco',
    name: 'endereco'
  },
  cepInputProps: {
    type:'text',
    id: 'cep',
    name: 'cep'
  },
  numInputProps: {
    type:'text',
    id: 'num',
    name: 'num'
  }
}

export default FormSave