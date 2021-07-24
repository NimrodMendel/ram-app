import axios from "axios";
import moment from "moment";

const URL = "http://localhost:8000/api";

export const getAll = async (formData) => {
  const { name, gender, status, species } = formData;

  const data = await axios.get(`${URL}/feed`, {
    headers: {
      "Content-type": "application/json",
    },
    params: {
      name,
      gender,
      status,
      species,
    },
  });

  return data;
};

export const likeCharacter = async (character) => {
  const data = await axios.post(`${URL}/favorites`, {
    headers: {
      "Content-type": "application/json",
    },
    body: {
      id: character.id,
      name: character.name,
      location: character.location.name,
      image: character.image,
      origin: character.origin.name,
      status: character.status,
      gender: character.gender,
      species: character.species,
      character_type: character.type,
      created_at: moment(character.created).format("YYYY-MM-DD"),
    },
  });

  return data;
};
