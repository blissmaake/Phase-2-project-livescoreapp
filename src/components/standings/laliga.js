import React, { useEffect, useState } from "react"
import { fetchStandings } from "../../lib/fetch-data"

import CircularProgress from "@mui/material/CircularProgress"
import Table from "./table"

export default function Laliga() {
  const [teams, setTeams] = useState([])

  const fetchInfo = async () => {
    const data = await fetchStandings(140)

    console.log(data)

    setTeams(data.response[0].league.standings[0])
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  if (teams.length === 0)
    return (
      <div className="h-screen m-auto pt-10" align="center">
        <CircularProgress />
      </div>
    )

  console.log(teams)
  return (
    <div>
      <Table clubs={teams} league="LA LIGA" leagueID={140} />
    </div>
  )
}
