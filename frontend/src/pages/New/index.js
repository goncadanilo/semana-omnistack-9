import React, { useState, useMemo } from "react";
import api from "../../services/api";

import { Container } from "./styles";
import camera from "../../assets/camera.svg";

export default function New({ history }) {
  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState("");
  const [techs, setTechs] = useState("");
  const [price, setPrice] = useState("");

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  async function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    const id = localStorage.getItem("user");

    data.append("thumbnail", thumbnail);
    data.append("company", company);
    data.append("techs", techs);
    data.append("price", price);

    await api.post("/spots", data, {
      headers: { id }
    });

    history.push("/dashboard");
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label
          id="thumbnail"
          style={{ backgroundImage: `url(${preview})` }}
          className={thumbnail ? "has-thumbnail" : ""}
        >
          <input type="file" onChange={e => setThumbnail(e.target.files[0])} />
          <img src={camera} alt="Select img" />
        </label>

        <label htmlFor="company">Empresa *</label>
        <input
          type="text"
          id="company"
          placeholder="Sua empresa incrível"
          value={company}
          onChange={e => setCompany(e.target.value)}
        />

        <label htmlFor="techs">
          Tecnologias * <span>(separadas por vígulas)</span>
        </label>
        <input
          type="text"
          id="techs"
          placeholder="Quais tecnologias usam?"
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />

        <label htmlFor="price">
          Valor da diária * <span>(em branco para GRATUITO)</span>
        </label>
        <input
          type="text"
          id="price"
          placeholder="R$ 0,00"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <button type="submit" className="btn">
          Cadastrar
        </button>
      </form>
    </Container>
  );
}
