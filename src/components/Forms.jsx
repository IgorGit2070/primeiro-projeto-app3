// rafce
import React from 'react'
import { useState } from 'react'
import './Forms.modules.css'

const Forms = (props) => {
    {/* Variáveis para guardar o que a pessoa informou no formulário */}
    const [name, setName] = useState(props ? props.name : "")
    const [email, setEmail] = useState(props ? props.email : "")
    const [desc, setDesc] = useState()
    const [tipo, setTipo] = useState()

    {/* Previne a página de ser recarregada quando envia o formulário */}
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e)
        console.log(name)
        console.log(email)
        console.log(desc)
        console.log(tipo)
        setName("")
        setEmail("")
        setDesc("")
        setTipo("")
        // alert("Campos preenchidos e enviados para o além")
    }

    {/* Função para guardar o nome que a pessoa informou no campo "nome" */}
    const handleName = (e) => {
        setName(e.target.value)
        // console.log(name)
    }
    // console.log(name)
    // console.log(email)
    // console.log(desc)

  return (
    <div>
        <h3>Forms</h3>
        <form onSubmit={handleSubmit}>
            {/* Input com htmlFor */}
            <label htmlFor='nome'> Nome: </label>
            <input type='text' id='nome' placeholder='Digite seu nome' onChange={handleName} value={name}/>

            {/* Label envolvendo o input */}
            <label>
                <span>Email:</span>
                <input type='email' name='email' placeholder='Digite seu email' onChange={e => { setEmail(e.target.value)}} value={email}></input>
            </label>

            {/* campo textarea */}
            <label>
                <span>Descrição</span>
                <textarea name='descricao' placeholder=' Se descreva a si próprio mesmo' onChange={(e) => {setDesc(e.target.value)}} value={desc}></textarea>
            </label>

            <label>
                <span> Tipo de usuário:</span>
                <select name='tipoU' onChange={(e) => {setTipo(e.target.value)}} value={tipo}>
                    <option value="user"> Usuário </option>
                    <option value="adm" selected> Administrador </option>
                    <option value="client"> Cliente </option>
                </select>
            </label>

            <input type='submit' value='Enviar'/>

        </form>
    </div>
  )
}

export default Forms