import React from 'react'

export default function About(props) {
  return (
    <div>
      <div className="card text-bg-dark mb-3" >
  <div className="card-header">{props.header}</div>
  <div className="card-body">
    <h5 className="card-title">Dark card title</h5>
    <p className="card-text">For more straightforward sizing in CSS, we switch the global box-sizing value from 
    content-box to border-box. This ensures padding does not affect the final computed width of an element, but 
    it can cause problems with some third-party software like Google Maps and Google Custom Search Engine.
    On the rare occasion you need to override it, use something like the following:.</p>
  </div>
</div>
    </div>
  )
}
