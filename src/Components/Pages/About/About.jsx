import React from 'react'
import './About.css'
import aboutimage from './about.png'
import moneyicon from './save-money.png'
import protectionicon from './protection.png'

const About = () => {
  return (
    <div className='About'>
      
      <div className="img-container">
        <div className="container">
          <img src={aboutimage} alt="about image" />
        </div>
      </div>
      
      <div className="about-content">
        
        <div className="contnt">
          <h1>Know about us</h1>
          <h2>Insurance for the better family life</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quas voluptas aut harum vel repudiandae nesciunt provident! Ullam quos dolorum sit iusto nisi itaque cum, dicta incidunt dignissimos necessitatibus? Sit!</p>

          <div className="sub-content">
            <img src={moneyicon} alt="money-icon" />
            
            <div className="small-content">
              <h1>Save your money</h1>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dignissimos veniam hic dolor explicabo nam, nihil eaque velit aspernatur quaerat aut, ratione molestias unde neque iure assumenda a odit ex.</h3>
            </div>

          </div>

          <div className="sub-content">
            <img src={protectionicon} alt="protection-icon" />
            
            <div className="small-content">
              <h1>Complete protection</h1>
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dignissimos veniam hic dolor explicabo nam, nihil eaque velit aspernatur quaerat aut, ratione molestias unde neque iure assumenda a odit ex.</h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default About