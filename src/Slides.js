import React from 'react';


const one =  (
    <div className="main-image">
    <div className="main-logo">
      <h1>bethany wellik</h1>
      <h2>productivity + organization</h2>
    </div>
    <div className="bottom-bar">
          <div>
            <p>
              789 Sik Block <br></br>
              New York, NY 10003
            </p>
          </div>
        </div>
  </div>)

const two = (
    <video autoPlay muted loop className="slide-two" src="/new.mp4">
    </video>
)

const three = (
    <div className="slide-three">
    <video autoPlay muted loop src="/two.mp4">
    </video>
    </div>

)

const slides = [
    one,
    three,
    two
]



    export default slides;