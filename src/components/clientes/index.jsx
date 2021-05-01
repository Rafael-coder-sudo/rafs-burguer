import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { mask} from "remask";
import InputLabel from '../utils/InputLabel'

const FormSave =
  ({
    submit,
    nameInputProps,
    celularInputProps,
    cepInputProps,
    enderecoInputProps,
    numInputProps,
    oncancel,
    onBuscCep,
    endereco
  }) => {


   


    const onSubmitForm = data => {
      if(endereco.logradouro){
        setValue('endereco', `${endereco.logradouro}-${endereco.bairro}-${endereco.localidade}`)
      }
      console.log(data)
      let values = data;
      submit(values);
      
      window.location='#finnaly'
    };

    const [cel, setCel] = useState('')
    const [cep, setCep] = useState('')

    const maskCel = (e) => {
      setCel(mask(e.target.value, ['99999-9999']))
      setValue('cel', e.target.value)
    }
    const maskCep = (e) => {
      setCep(mask(e.target.value, ['99999-999']))
      setValue('cep', e.target.value)
    }

    const { register, handleSubmit, setValue, errors } = useForm();
    
    const isValid = () => {
      if(endereco.logradouro){
        setValue('endereco', `${endereco.logradouro}-${endereco.bairro}-${endereco.localidade}`)
      }

    }

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
            {...nameInputProps}
        />
        <InputLabel
          label="Celular"
          {...celularInputProps}
          value={cel}
          onChange={e => maskCel(e)}
        />
        <InputLabel
          label="CEP"
          {...cepInputProps}
          value={cep}
          onBlur= {(e) => onBuscCep(e)}
          onChange={e => maskCep(e)}
        />
        <InputLabel
          label="Endereço"
          {...enderecoInputProps}
          value={endereco.logradouro}
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
          <button className="btn btn-danger btn-lg mr-2" onClick={oncancel }>Cancelar</button>
          <button className="btn btn-success btn-lg " type="submit" onClick={() => isValid()}>Continuar</button>
        </div>
      </form>
    )
  }

FormSave.defaultProps = {
  nameInputProps:{
    type:'text',
    id: 'nome',
    name: 'nome',
    required: true
  },
  celularInputProps: {
    type:'text',
    id: 'celular',
    name: 'celular',
    required: true
  },
  enderecoInputProps: {
    type:'text',
    id: 'endereco',
    name: 'endereco',
    required: true
  },
  cepInputProps: {
    type:'text',
    id: 'cep',
    name: 'cep',
    required: true
  },
  numInputProps: {
    type:'text',
    id: 'num',
    name: 'num',
    required: true
  }
}

export default FormSave