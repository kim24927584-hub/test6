import React from 'react'

function ServiceCard({card}) {
  return (
    
      <div className="col-12 col-md-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0">
          <div className={`card-thumb ${card.bg}`}>
            <i className={`bi ${card.icon}`}></i>
          </div>
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text text-muted small">HTML · CSS · Bootstrap 반응형 레이아웃</p>
            <a href="#" className={`btn btn-sm ${card.btn}`}>자세히</a>
          </div>
        </div>
      </div>

    

    
  )
}

export default ServiceCard