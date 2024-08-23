import React from 'react';
import resume from './Resume.pdf';
import { useTypewriter, Cursor} from 'react-simple-typewriter';

const Home = () => {
    const [typeEffect] = useTypewriter({
        words: ['Simple Web Design','Simple Website', 'Stylish Design'],
        loop: {},
        typeSpeed: 150,
        deleteSpeed: 100
    })
  return (
    <>
        <section>

<div className="container-fluid  main-div">
  <div className="row main-row ">
    <div className="col-lg-6">
      <div className=" left-section ">
<div className="left-top ">

  {/* <h1>Simple <br/> Web Design</h1>  */}
  <h1><span >{typeEffect}</span><Cursor/></h1>
</div>
<div className="left-middle pb-3">
  <div className="border-topss"></div>
  <p>Web designing is the process of planning, conceptualizing, implementing the plan for designing a website in a way.</p>
</div>

<div className="left-btn">
  <a className="btn btn-info rounded-pill btn-lg px-5 fw-semibold text-light" href={resume} download="Resume">Portfolio</a>
</div>
      </div>
    </div>
    <div className="col-lg-6 right-section  ">
      <div className="img-sec img-div  ">

{/*         <img src="/ImagesHome/pngegg.png" alt="" /> */}
            <img src="https://cdn.pixabay.com/photo/2024/03/31/14/01/ai-generated-8666751_640.png" alt="" >

      </div>
    </div>
  </div>
</div>
    </section>
    </>
  )
}

export default Home
