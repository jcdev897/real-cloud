import React from 'react'
import {Route, Routes} from 'react-router-dom'
import PeopleSearch from './views/peopleSearch'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/people-search" element={<PeopleSearch />}/>
      </Routes>
    </div>
  )
}

export default Router
