import React from 'react'

const UserLayout = ({ children, ...props }: any) => {
  console.log(props);
  
  return (
    <div>
        {/* <Header />.
        <Sidebar />.
        <Header />. */}
        {children}
        <h1>User</h1>
    </div>
  )
}

export default UserLayout
