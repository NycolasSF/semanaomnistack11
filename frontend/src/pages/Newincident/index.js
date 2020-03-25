import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

export default function NewIncidents() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [value, setValue] = useState("");


  const history = useHistory();

  
  async function handleNewIncidents(e){
    e.preventDefault();

    const ongId = localStorage.getItem('ongId');
    const data = {
      title, description, value
    }

    try {
      await api.post('incidents', data, {
        headers:{
          Authorization: ongId,
        }
      });
      history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar')
    }
  }


  return (
    <div className="incidents-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="To The Hero" />

          <h1>Cadastrar novo caso</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil sint
            quibusdam quis
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncidents}>
          <input
            placeholder="Titulo do caso"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            type="text"
            value={description}
            onChange={e => setDesc(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
