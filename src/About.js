import React, { useEffect } from 'react';

const baseURL = "https://kylegoodwin.github.io/wellik-site"
//const baseURL = ""

const About = (props) => {

    useEffect( () => {
        props.test();
      }, [])

return(<div className="about">

        <div className="left-container">
            <div className="text">
            <p> Creativity, peace, and the ability to get the most from our time requires beauty, seamless interactions, and stimulating systems. </p>
            <p>By sorting through the necessary components and introducing steps that will evolve and refine our everyday, we can elevate your environment, expand your available time, and most importantly, broaden and invigorate the conscious experience.  </p>
            <p>Let’s find clarity and discover a new way of interacting with our days. </p>
            </div>
        </div>


        <div className="right-container">
            <img src="contact.JPG"></img>
        </div>


        <div className="about-bottom">
            <p>Bethany Wellik is a lifestyle and productivity designer based in New York City.
            <br />
            <br />
            With vast experience in working with individuals and households, she understands the required refinement and necessary adjustments to innovate and elevate our daily lives. 
            Her unique insight and discretion positions her as one of the most sought after, in-demand personalities in her field.</p>
            <img src={`${baseURL}/napo.png`}></img>
        </div>


    </div>)
}

export {About};