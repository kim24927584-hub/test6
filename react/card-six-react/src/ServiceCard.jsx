import React from 'react'

function ServiceCard({card}) {
  return (
    <>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0">
          <img src={card.img} class="card-img-top" alt="웹 개발"></img>
          <div class="card-body">
            <h5 class="card-title">{card.title}</h5>
            <p class="card-text text-muted small">{card.text}</p>
            <a href="#" class={`btn btn-${card.btn} btn-sm`}>자세히</a>
          </div>
        </div>
      </div>


    </>
  )
}

export default ServiceCard