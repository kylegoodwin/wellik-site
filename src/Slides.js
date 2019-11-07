import React from 'react';

class LoadVideo extends React.Component{
  
  constructor(props){
    super(props)
    this.state = {
      loaded: false
    }
  }

  videoLoaded = () => {
    this.setState({
      loaded: true
    })
  }

  render(){
    return(
    <div className="video-wrap">
      {/*<span className="left-text">pare down to the essence</span>*/}
      <video  onLoadedData={this.videoLoaded} id={this.state.loaded ? "img-loaded" : "" } autoPlay muted loop src={this.props.url}></video>
      {/*<span className="bottom-text">but don’t remove the poetry</span>*/}
    </div>)
  }
}

const one =  (
  <div>
    <div className="main-image">
    <div className="one-wrap">
    <div className="main-logo">
      <h1>bethany wellik</h1>
      <h2>productivity + organization</h2>
      </div>
    <LoadVideo url="/home.mp4"></LoadVideo>
   
      </div>
        </div>
        <div className="bottom-bar">
      <div>
        <p>
          789 Sik Block <br></br>
          New York, NY 10003
        </p>
      </div>
        </div>
          </div>
  )

const three = (
    <div className="slide-two">
      <div className="left-text">
        <p>simplicity</p> 
        <p>is the ultimate</p>
        <p>sophistication</p> 
      </div>
      <LoadVideo url="/six.mp4" />
    </div>
    
)

const two = (
    <div className="slide-three">
    {<div className="left-text"><p>pare down to the essence</p></div>}
    <LoadVideo url="/two2.mp4" />
    {<div className="bottom-text">but dont remove the poetry</div>}
    </div>

)

const five = (
  <div className="slide-three">
  {<div className="left-text"><p>pare down to the essence</p></div>}
  <LoadVideo url="/five.mp4" />
  {<div className="bottom-text">but dont remove the poetry</div>}
  </div>
)

const six = (
  <div className="slide-three alt-background">
  {<div className="top-text">an interior is a natural projection of the soul</div>}
  <LoadVideo url="/four.mp4"></LoadVideo>
  </div>
)


const quoteOne = (
<div className="slide-two quote-one">
      <div className="left-text">
        <p>"Bethany is a life saver. She is my go-to woman for all of my organizational needs.   Her keen eye for aesthetics has added exquisite order to everything. She is a delight to work with; professional, savvy and hard working. I could not recommend her more highly”</p>
        <br />
        <p>Sara Meltzer</p>
      </div>
      <LoadVideo url="/six.mp4" />
    </div>

)

const quoteTwo = (
  <div className="test">
      <LoadVideo url="/two2.mp4" />
  <div className="left-text">
  <p>
  Bethany is a dream, from helping me plan every inch of my kitchen and closets to organizing a thoughtful and beautiful playroom she has transformed our space and made living in them a joy. 
</p>
<p>Sara Meltzer</p>
  </div>
  </div>
)

const slides = [
    one,
    two,
    quoteTwo,
    three,
    quoteOne,
    five,
    six
]



    export default slides;