import React from 'react';

const baseURL = "https://kylegoodwin.github.io/wellik-site"
//const baseURL = ""


export class LoadVideo extends React.Component{
  
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

  /*
  componentDidMount() {
    console.log("MOUNT")
  }
  */

  render(){

    let animation = "img-loaded";

    if(this.props.animation){
      animation = this.props.animation
    }

    return(
    <div className="video-wrap">
      <video  onLoadedData={this.videoLoaded} id={this.state.loaded ? `${animation}` : ""} playsInline autoPlay muted loop src={this.props.url}></video>
      {this.props.internalText ? <span className="internal-text">{this.props.internalText}</span> : ""}
      {this.props.internalTextTwo ? <span className="internal-text-two">{this.props.internalTextTwo}</span> : ""}
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
    <LoadVideo url={`${baseURL}/main.mp4`}></LoadVideo>
   
      </div>
        </div>
          </div>
  )

const three = (
    <div className="slide-two">
      <div className="left-text">
        <div>
        <p>simplicity is</p> 
        </div>
      </div>

      <div className="right-text">
        <div>
      <p> the ultimate sophistication</p> 
      </div>
      </div>
      <LoadVideo animation="img-alt" url={`${baseURL}/six.mp4`} />
    </div>
    
)

const two = (
    <div className="slide-three">
    {<div className="left-text"><p>pare down to the essence</p></div>}
    <LoadVideo animation="img-top" url={`${baseURL}/two2.mp4`} />
    {<div className="bottom-text">but dont remove the poetry</div>}
    </div>

)

const five = (
  <div className="slide-three five">
  <LoadVideo animation="img-fade" internalTextTwo="of function and form" internalText="beauty is the harmony" url={`${baseURL}/five.mp4`} />
  </div>
)

const six = (
  <div className="alt-background">
  <LoadVideo animation="img-fade" internalText="an interior is a natural projection of the soul" url={`${baseURL}/four.mp4`}></LoadVideo>
  </div>
)


const quoteOne = (
<div className="quote-one slide-two">
      <div className="left-text" id="left-quote">
        <div>
        <p>"Bethany is a life saver. She is my go-to woman for all of my organizational needs.   Her keen eye for aesthetics has added exquisite order to everything. She is a delight to work with; professional, savvy and hard working. I could not recommend her more highly”</p>
        <br />
        <p>Sara Meltzer</p>
        </div>
      </div>
      <LoadVideo url={`${baseURL}/home.mp4`} />
    </div>

)

const quoteTwo = (
  <div className="quote inverted">
  <LoadVideo url={`${baseURL}/two2.mp4`} />
  <div className="right-text">
  <div>
  <p>
  "Bethany is a dream, from helping me plan every inch of my kitchen and closets to organizing a thoughtful and beautiful playroom she has transformed our space and made living in them a joy."
  </p>
  <p>Parisa Ramji</p>
  </div>
  </div>
  </div>
)

const quoteThree = (
  <div className="quote">
<div className="left-text">
<div>
<p>
"As an architect living in a micro-apartment everything, I need in my home needs to be in its place to create serenity, and Bethany was instrumental in making that happen."
</p>
<p>Suchi Reddy</p>
</div>
</div>
<LoadVideo animation="img-top" url={`${baseURL}/two2.mp4`} />
</div>
  
)


const quoteFour = (
  <div className="quote">
  <LoadVideo url={`${baseURL}/two2.mp4`} />
  <div className="right-text">
  <div>
  <p>
  "Bethany's artistic vision for my wardrobe and closet organization, plus artwork display in my home, has been life altering. 
  My home is more pleasing to the eye thanks to Bethany's creative ideas and I'm excited for others to experience the many benefits of Bethany's insight." 
  </p>
  <p>Lisa Reising</p>
  </div>
  </div>
</div>
  
)

const slides = [
    one,
    two,
    quoteOne,
    three,
    quoteTwo,
    five,
    quoteThree,
    six,
    quoteFour,
]



    export default slides;