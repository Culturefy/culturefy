import React from 'react'

const UserLayout = ({ children }) => {
  return (
    <div>
        <Header />.
        <Sidebar />.
        <Header />.
        {children}
    </div>
  )
}

export default UserLayout
