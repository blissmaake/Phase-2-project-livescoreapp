export const fetchFixtures = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8b0a905d65msh006cf8356da27ecp14532bjsn91a76b81e7b2",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
    },
  }

  const result = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all&from=2010-05-01",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response
    })
    .catch((err) => console.error(err))

  return result
}
// const url =
//   "https://heisenbug-la-liga-live-scores-v1.p.rapidapi.com/api/laliga/team?name=Real%20Madrid"
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
//       "X-RapidAPI-Host": "heisenbug-la-liga-live-scores-v1.p.rapidapi.com",
//     },
//   }

//   const result = await fetch(
//     "https://heisenbug-la-liga-live-scores-v1.p.rapidapi.com/api/laliga/team?name=Real%20Madrid"
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       return response
//     })
//     .catch((err) => console.error(err))

//   return result
// }
