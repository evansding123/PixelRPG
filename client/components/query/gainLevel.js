import axios from 'axios';


const gainExp = async (character, email) => {
  try {
    const response =  axios.put('/updateTeam', character);
    console.log(response);
  } catch (error) {
    console.log(error);
  }

}

export { gainExp };
