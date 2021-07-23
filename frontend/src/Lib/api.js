import axios from "axios";

const charactersURL = "https://rickandmortyapi.com/api/character/";
const URL = "http://localhost:8000/api";

export const getAllCharacters = async (formData) => {
  let i = 1;
  let characters = [];
  let response;

  const { name, gender, status, species } = formData;
  do {
    response = await axios.get(
      `${charactersURL}?page=${i}&name=${name ? name : ""}&gender=${
        gender ? gender : ""
      }&status=${status ? status : ""}&species=${species ? species : ""}`
    );
    i++;
    characters = characters.concat(response.data.results);
  } while (response.data.info.next !== null);

  return characters;
};
