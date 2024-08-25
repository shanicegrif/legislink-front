import axios from "axios";
const serverURL = import.meta.env.VITE_BASE_URL;
const congressApiKey = import.meta.env.VITE_BASE_CONGRESS_API_KEY;
const baseUrl = `https://api.congress.gov/v3/member/congress/118/NY?api_key=${congressApiKey}&format=json&limit=40`;
const civicAPIKey = import.meta.env.VITE_BASE_CIVIC_KEY;
/**
 * ToDo : need to check routers.
 */

/**
 * postAuth()
 * =============================================
 * POST the back-end server for authentication using w/ axios.
 * The param "body" is an object that we want to send to the back-end as a parameter (does not require for header.)
 *
 * @param {Object} body
 * @returns
 */
export async function postAuth(body) {
  console.log(body);
  return await axios.post(`${serverURL}/users/login`, body);
}

export async function postNewUser(body) {
  return await axios.post(`${serverURL}/users`, body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export async function putExistingUser(id, body) {
  return await axios.put(`${serverURL}/users/${id}`, body, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}

export async function getSingleUser(id) {
  return await axios.get(`${serverURL}/users/${id}`);
}

export async function deleteAccount(id) {
  return await axios.delete(`${serverURL}/users/${id}`);
}

// Function to recursively fetch all members, handling pagination
const fetchAllMembers = async (url, accumulatedMembers = []) => {
    try {
      const res = await axios.get(url);
      const members = accumulatedMembers.concat(res.data.members);
  
      if (res.data.pagination.next) {
        // Delay between requests to avoid hitting rate limits
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return fetchAllMembers(res.data.pagination.next, members);
      } else {
        return members;
      }
    } catch (error) {
      console.error('Error fetching members:', error);
      return accumulatedMembers;
    }
  };
  
  // Function to initiate fetching all members
  export const getAllMembers = async () => {
    const members = await fetchAllMembers(baseUrl);
    console.log('Total members fetched:', members.length);
    return members;
  };

// export async function fetchAllCongressMembers() {
//   return await axios.get(
//     `https://api.congress.gov/v3/member/congress/118/NY?api_key=${congressApiKey}&format=json`
//   );
// }

// export async function fetchForHouse() {
//   return await axios.get("https://api.congress.gov/v3/congress", {
//     headers: {
//       "X-API-Key": `${congressApiKey}`,
//     },
//   });
// }

// export async function fetchHouseNY() {
//   return await axios.get(
//     `https://api.propublica.org/congress/v1/members/house/NY/current.json`,
//     {
//       headers: {
//         "X-API-Key": `${congressApiKey}`,
//       },
//     }
//   );
// }

// export async function fetchForSenate() {
//   return await axios.get(
//     "https://api.propublica.org/congress/v1/118/senate/members.json",
//     {
//       headers: {
//         "X-API-Key": `${congressApiKey}`,
//       },
//     }
//   );
// }

// export async function fetchForBills(query = "", offset = "0"){
//     if(query){
//         return await axios.get(`https://api.propublica.org/congress/v1/bills/search.json?query="${query}"&offset=${offset}` , {headers: {
//             "X-API-Key": `${congressApiKey}`,
//         }});
//     } else {
//         return await axios.get(`https://api.propublica.org/congress/v1/bills/search.json?&offset=${offset}` , {headers: {
//             "X-API-Key": `${congressApiKey}`,
//         }});
//     }
// };

// export async function fetchVoterInfo(address, electionId, apiKey) {
//     try {

//         const url = `https://www.googleapis.com/civicinfo/v2/voterinfo?key=${apiKey}&address=${encodeURIComponent(address)}&electionId=${electionId}`;

//         return await axios.get(url);
//     } catch (error) {
//         console.error('Error fetching voter information:', error);
//         throw error;
//     }
// }
