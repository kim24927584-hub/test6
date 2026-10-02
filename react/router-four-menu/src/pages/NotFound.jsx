import React from 'react'
import {Link} from "react-router-dom"
function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>잘못된 페이지 요청입니다</p>
      <Link to="/">홈으로 이동</Link>
    </div>
  )
}

export default NotFound