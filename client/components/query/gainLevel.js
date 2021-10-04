import axios from 'axios';


const gainExp = async (character, email) => {
  try {

    //console.log(character);
    const response =  await axios.put('/updateTeam', [email, character]);
    console.log('response sent', response);
  } catch (error) {
    console.log(error);
  }

}

export { gainExp };
