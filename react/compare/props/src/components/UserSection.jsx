import React from 'react'
import UserInfo from './UserInfo'

function UserSection({
    user, updateUserName,updateUserAge
}) {
  return (
    <section className="section">
      <h2>사용자정보</h2>
      <UserInfo user={user} updateUserName={updateUserName} updateUserAge={updateUserAge}></UserInfo>
      
    </section>
  )
}

export default UserSection