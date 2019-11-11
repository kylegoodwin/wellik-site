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

  /*
  componentDidMount() {
    console.log("MOUNT")
  }
  */

  render(){
    return(
    <div className="video-wrap">
      {/*<span className="left-text">pare down to the essence</span>*/}
      <video  onLoadedData={this.videoLoaded} id={"img-loaded"} autoPlay muted loop src={this.props.url}></video>
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
        387 Grand Street <br></br>
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
  <div className="quote inverted">
  <div className="left-text">
  <p>
  Bethany is a dream, from helping me plan every inch of my kitchen and closets to organizing a thoughtful and beautiful playroom she has transformed our space and made living in them a joy. 
  </p>
  <p>Parisa Ramji</p>
  </div>
  <LoadVideo url="/two2.mp4" />
  </div>
)

const quoteThree = (
  <div className="quote">
<div className="left-text">
<p>
As an architect living in a micro-apartment everything, I need in my home needs to be in its place to create serenity, and Bethany was instrumental in making that happen.
</p>
<p>Suchi Reddy</p>
</div>
<LoadVideo url="/two2.mp4" />
</div>
  
)


const quoteFour = (
  <div className="quote">
  <LoadVideo url="/two2.mp4" />
<div className="right-text">
<p>
Bethany's artistic vision for my wardrobe and closet organization, plus artwork display in my home, has been life altering. 
My home is more pleasing to the eye thanks to Bethany's creative ideas and I'm excited for others to experience the many benefits of Bethany's insight. 
</p>
<p>Lisa Reising</p>
</div>
</div>
  
)

const slides = [
    one,
    quoteOne,
    two,
    quoteTwo,
    three,
    quoteThree,
    five,
    quoteFour,
    six,
]



    export default slides;