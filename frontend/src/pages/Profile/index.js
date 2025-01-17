import React, {useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from '../../services/api';
import "./styles.css";

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  
  const history = useHistory();

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");
  
  useEffect(()=>{
   
    api.get("profile", {
        headers: {
          Authorization: ongId,
        }
      })
      .then(res => {
        setIncidents(res.data);
      });
  },[ongId]);

  async function handleDeleteIncident(id) {    
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });
      setIncidents(incidents.filter(incidents => incidents.id !== id));
    } catch (error) {
      alert("Deu erro");
    }
  }
  async function handleLogout(){
    localStorage.clear();
    history.push('/');
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span>Bem Vindo, {ongName}</span>

        <Link className="button" to="/incidents/new">
          Cadastra novo caso
        </Link>
        <button onClick={handleLogout} type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Casos cadatrados</h1>

      <ul>
        {incidents.map(incidents => (
          <li key={incidents.id}>
            <strong>Caso:</strong>
            <p>{incidents.title}</p>

            <strong>Descrição:</strong>
            <p>{incidents.description}</p>

            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incidents.value)}
            </p>

            <button
              onClick={() => handleDeleteIncident(incidents.id)}
              type="button"
            >
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
