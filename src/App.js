import './App.css';
import { useState, useEffect,useRef,useMemo } from 'react';
// import { Gradient } from "javascript-color-gradient";
import 'bootstrap/dist/css/bootstrap.min.css';
import yinyang from "./img/yy.jpg";
import distop from "./img/distop.jpeg";
import utop from "./img/wallpaperflare.com_wallpaper.jpg";
import fma from "./img/107277.jpg";
// eslint-disable-next-line import/no-anonymous-default-export
export default function() {

const [divStyle,setDivStyle] = useState({
  height:"1000vh",
  width:"100%",
  color:"white",
  overflow:"hidden",
  backgroundImage: `url(${yinyang})`,
});
const [poemsStyle] = useState({
  boxShadow: "0 0 1rem 0 rgba(0, 0, 0, .2)",
  borderRadius: "5px",
  backgroundColor: "rgba(255, 255, 255, .15)",
  backdropFilter: "blur(5px)",
});



const ref1 = useRef(null);
const isInViewport1 = useIsInViewport(ref1);

const ref2 = useRef(null);
const isInViewport2 = useIsInViewport(ref2);

const ref3 = useRef(null);
const isInViewport3 = useIsInViewport(ref3);

const ref4 = useRef(null);
const isInViewport4 = useIsInViewport(ref4);


console.log('isInViewport1: ', isInViewport1);
console.log('isInViewport1: ', isInViewport2);


function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}




function scrollHandler(){

  if(isInViewport1){
    setDivStyle({...divStyle,backgroundImage: `url(${yinyang})`})
  }
  if(isInViewport2){
    setDivStyle({...divStyle,backgroundImage: `url(${distop})`})
  }
  if(isInViewport3){
    setDivStyle({...divStyle,backgroundImage: `url(${utop})`})
  }
  if(isInViewport4){
    setDivStyle({...divStyle,backgroundImage: `url(${fma})`})
  }

}






useEffect(() => {

  const handleScroll = event => {
    scrollHandler()
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
})

  return (
    <>
    <div >
    <div className="section-1 box" style={divStyle} >
    <div style={{height:"40vh"}}>
      {/* Distance */}
    </div>
    <div className='row justify-content-center' ref={ref1}style={{height:"20vh"}} >
      <div className='col'></div>
      <div className='col-6' style={poemsStyle}>
        <div>
          <h1>Poem Anthology</h1>
          <p>Yin-Yang</p>
        </div>
      </div>
      <div className='col'></div>
    </div>
    <div style={{height:"40vh"}}>
      {/* Distance */}
    </div>
    <div style={{height:"100vh",background:"#ffffff"}}>
      {/* PLack */}
    </div>
    <div style={{height:"20vh"}}>
      {/* Distance */}
    </div>
    <div className='row justify-content-center' ref={ref2} >
      <div className='col'></div>
      <div className='col-6' style={poemsStyle}>
        <div>
          <a style={{textDecoration:"none", color:"#ffffff"}}  href="https://hellopoetry.com/poem/1325638/dystopia/"><h3>Dystopia</h3></a>
          <p>
                    Outside it's raining fire <br></br>
                    Inside we're burning snow<br></br>
                    The world seemed like a safe place once<br></br>
                    Now I don't really know.<br></br>
                    <br></br>
                    My people fall around me<br></br>
                    Their blood the color of the sky<br></br>
                    Crimson clouds dot the horizon<br></br>
                    I have no more tears to cry.<br></br>

                    The wind picks up it's forces<br></br>
                    I look on to see them go<br></br>
                    Skeletal carriages drawn by dead horses<br></br>
                    And they wonder why they descend so slow.<br></br>
                    <br></br>
                    I open my eyes and see it<br></br>
                    In the field of red and green<br></br>
                    She stands there cracked wide open<br></br>
                    Our beautiful, dying queen.<br></br>
                    <br></br>
                    I thought that I could fix this<br></br>
                    Whatever this may be<br></br>
                    But sweat and tears make oceans<br></br>
                    And now we're drifting off to sea.<br></br>
          </p>
          <h4>-Marry K</h4>
        </div>
      </div>
      <div className='col'></div>
    </div>
    <div style={{height:"20vh"}}>
      {/* Distance */}
    </div>
    <div className="section-2 box" style={{height:"100vh",background:"#ffffff"}}>
      {/* PLack */}
    </div>
    <div style={{height:"20vh"}}>
      {/* Distance */}
    </div>

    <div className='row justify-content-center' ref={ref3}>
      <div className='col'></div>
      <div className='col-6' style={poemsStyle}>
        <div>
          <a style={{textDecoration:"none", color:"#ffffff"}}  href="https://hellopoetry.com/poem/248276/utopia/"><h3>Utopia</h3></a>
          <p>
          I don't want to live in utopia<br></br>
          For once you peak, you decline.<br></br>
          However, aiming for a world that's better than yours is hardly a waste of time.<br></br>
          <br></br>
          My utopia is a world<br></br>
          Where I'm happy with myself<br></br>
          Where myself and the people around me<br></br>
          Are happy and in perfect health.<br></br>
          <br></br>
          My utopia is a place<br></br>
          Where there's always a reason to smile<br></br>
          And finally it is a place<br></br>
          Where utopia lasts a long while<br></br>

          </p>
          <h4>-Cameron Godfrey</h4>
        </div>
      </div>
      <div className='col'></div>
    </div>
    <div style={{height:"20vh"}}>
      {/* Distance */}
    </div>

    <div className="section-2 box" style={{height:"100vh",background:"#ffffff"}}>
      {/* PLack */}
    </div>
    <div style={{height:"20vh"}}>
      {/* Distance */}
    </div>

    <div className='row justify-content-center' ref={ref4}>
      <div className='col'></div>
      <div className='col-6' style={poemsStyle}>
        <div>
          <a style={{textDecoration:"none", color:"#ffffff"}}  href="https://drive.google.com/file/d/16KBXgg-0vw5uf9yjwZ5Tvf3eHBwQke4u/view?usp=share_link"><h3>Alchemy</h3></a>
          <p>
          World of equivalent exchange it considered is<br></br>
          World of equivalence it not will be<br></br>
          <br></br>
          Everyone supposed to be equal that is<br></br>
          Everyone though not will be <br></br>
          <br></br>
          Chosen a path which fair is<br></br>
          Chosen a path which neither will be <br></br>
          <br></br>
          Just as blessed a life is<br></br>
          Just as cursed living it will be<br></br>
          <br></br>
          A dream which dreamt to be is<br></br>
          A reality if it becomes a dream not it will be<br></br>


          </p>
          <h4>-Yash Mohod</h4>
        </div>
      </div>
      <div className='col'></div>
    </div>
    <div style={{height:"20vh"}}>
      {/* Distance */}
    </div>
    <div className="section-2 box" style={{height:"100vh",background:"#ffffff"}}>
      {/* PLack */}
    </div>
    <div style={{height:"20vh"}}>
      {/* Distance */}
    </div>

    <div className='row justify-content-center' >
      <div className='col'></div>
      <div className='col-6' style={poemsStyle}>
        <div>
          <a style={{textDecoration:"none", color:"#ffffff"}}  ><h3>some</h3></a>
          <p>
        

          </p>
          <h4>-someone</h4>
        </div>
      </div>
      <div className='col'></div>
    </div>


    </div>
    </div>
    </>
  )
}
