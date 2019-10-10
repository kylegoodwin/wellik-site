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
      <video  onLoadedData={this.videoLoaded} id={"img-loaded" } autoPlay muted loop src={this.props.url}></video>
      {/*<span className="bottom-text">but don’t remove the poetry</span>*/}
    </div>)
  }


}


const one =  (
  <div>
    <div className="main-image">
    <LoadVideo url="/home.mp4"></LoadVideo>
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
          </div>
  )

const two = (
    <div className="slide-two">
      <LoadVideo url="/new.mp4" />
    </div>
    
)

const three = (
    <div className="slide-three">
    {<div className="left-text"><p>pare down to the essence</p></div>}
    <LoadVideo url="/two2.mp4" />
    {<div className="bottom-text">pare down to the essence</div>}
    </div>

)

const four = (
  <div className="slide-four">
    <LoadVideo url="/three.mp4"></LoadVideo>
  </div>
)

const five = (
  <LoadVideo url="/four.mp4"></LoadVideo>
)

const slides = [
    one,
    three,
    two,
    four,
    five
]



    export default slides;