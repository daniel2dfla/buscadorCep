import React from 'react';
import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { Container, ContainerSearch, ContainerInfo, Search } from './styles'
import api from '../Services/api'

const Index = () => {

  const [input, setInput] = useState("");
  const [info, setInfo] = useState({});

  const  handleSearch = async (e) => {
    if(input === ""){
      alert("Preencha algum cep")
    }
    try{
      const response = await api.get(`${input}/json`)
      setInfo(response.data)
      console.log(info)
      setInput("")
    }catch{
      alert("Ops, erro ao buscar cep!");
      setInput("")
    }
  }
 
  return (
    <Container>
        <ContainerSearch>
            <h1>
                Buscador de cep!
            </h1>
            <Search>
              <input 
                type="text" 
                placeholder='Digite seu cep...'
                value={input}
                onChange={(e) => setInput(e.target.value)}></input>
              <button onClick={handleSearch}><BsSearch size={25}hover={1.3}/></button>
            </Search>
        </ContainerSearch>
        <ContainerInfo>
          {Object.keys(info).length > 0 && 
          (
          <>
            <h2>Cep:{info.cep}</h2>
            <span>Rua: {info.logradouro}</span>
            <span>Bairro: {info.bairro}</span>
            <span>Complemento: {info.complemento}</span>
            <span>Cidade: {info.localidade}</span>
            <span>UF: {info.uf}</span>
            <span>DDD: {info.ddd}</span>
           </>)
           }
        </ContainerInfo>
    </Container>
  )
}

export default Index