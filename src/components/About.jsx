import React from 'react'

const About = () => {
  return (
    <>
          <section className="container-fluid">
      <div className="row main-about">
        <div className="col-lg-6 left-about">
          <div className="left-section2">
            <h1 className="pb-2">ABOUT US</h1>
            <p className="pb-4">
              Welcome to Shetty Tech – where innovation meets excellence!
            </p>
            <h3 className="pb-2">OUR STORY</h3>
            <p className="pb-4">
              At Shetty Tech, our journey began in a small garage with a big
              dream: to revolutionize the way technology enhances our daily
              lives. Founded in 2015 by Sanket Shetty, a visionary tech
              enthusiast with a knack for solving complex problems, Shetty Tech
              started as a modest software development firm with a mission to
              make cutting-edge technology accessible to everyone. <br />
              <br />

              Sanket's passion for technology was evident from a young age.
              After years of working with top tech firms and honing his skills,
              he decided it was time to create something new, something that
              would push boundaries and redefine industry standards. With a
              small but dedicated team, Sanket launched Shetty Tech with a
              single goal – to bridge the gap between emerging technology and
              real-world applications.
            </p>

            <h3 className="pb-2">OUR MISSION</h3>
            <p>
              At Shetty Tech, our mission is simple: to deliver innovative
              technology solutions that drive progress and empower businesses.
              We specialize in developing custom software, mobile applications,
              and IT consulting services that are not only state-of-the-art but
              also tailored to meet the unique needs of our clients.
            </p>
          </div>
        </div>
        <div className="col-lg-6 right-section">
          <div className="img-sec img-div img-div-about">
{/*             <img src="/ImagesHome/sdev.png" alt="" /> */}
                 <img src="https://cdn.pixabay.com/photo/2024/03/31/14/00/ai-generated-8666749_640.png" alt="Front End Developer" />

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default About
