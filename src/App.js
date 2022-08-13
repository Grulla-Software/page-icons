import logo from './logo.svg';
import './App.css';
import icons from  './icons.json'
import SearchReact from 'search-reactjs';
import IconsReactjs  from 'icons-reactjs';
import { useState } from 'react';
function App() {
  const[iconList,setIconList] = useState(icons.glyphs.sort(function (a, b) {
    if (a.css > b.css) {
      return 1;
    }
    if (a.css < b.css) {
      return -1;
    }
    return 0;
  }));
  const[i,setI] = useState(-1);
  const copyToClipBoard = (index) =>{
    navigator.clipboard.writeText(iconList[index].css);

    var alertElemet = document.getElementById("alert");
    alertElemet.classList.remove("displayNone");
    setTimeout(() => {
      alertElemet.classList.add("displayNone");
    }, 1000);
  }

  return (
    <div className="App App-header">
      <div className=' container'>
        <div className=' row'>
          <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12'>
            <h1>Icons Component</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <h2>icons-reactjs</h2>
          </div>
          <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12'>
            <div className=' row'> 
              <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12 mb-3'>
                <div className='search'>
                  <SearchReact
                    listObjects={icons.glyphs}
                    btnName={'Search'} 
                    placeholder={"Search by icon name"}
                    borderRadius={'2px'}
                    fontSize={'17px'}
                    searchCriteria={'css'}
                    btnHoverBackground={'blue'}
                    btnHoverTextColor={'#fff'}
                    btnColor={'#fff'}
                    hideButton={false}
                    callBack={(result)=>{setIconList(result);}}
                    btnBackground={'cornflowerblue'}
                    btnBorder={'cornflowerblue'}
                    inputWidth={'190px'}
                  />
                </div>
              </div>
              {iconList.map((icon,index) => {
                return(
                <div key={'icon'+index} className='col-md-2 col-lg-2 col-sm-2 col-xs-2'>
                    <div className='card-icon'>
                      <div className='show'>
                        <button onClick={()=>{setI(index);}} type="button" className="button-modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                          See
                        </button>
                      </div>
                      <div className='icon'>
                        <IconsReactjs icon={icon.css}/>
                      </div>
                      <div className='name'>
                        <span id={'name'+index} >{icon.css}</span>
                      </div>
                    </div>
                </div>
                )
              })}
            </div>
          </div>
         
        </div>
      </div>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h3 className="modal-title" id="staticBackdropLabel">
                Icon from {iconList[i]&&iconList[i].src}
              </h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div id='alert' className="alert alert-success d-flex align-items-center displayNone" role="alert">
                <div className="flex-shrink-0 me-2">
                  <IconsReactjs icon={'check'} fontSize={'2rem'} color={'#0f5132'}/>
                </div>
                <div className="text-alert">
                  Copy to clipboard!
                </div>
              </div>
              <div className='icon text-center'>
                <IconsReactjs icon={iconList[i]&&iconList[i].css} fontSize={'3rem'} color={'#282C34'}/>
              </div>
              <div className='nameIcon text-center '>
                <span><b>{iconList[i]&&iconList[i].css}</b></span>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={()=>{copyToClipBoard(i)}} type="button" className="btn btn-primary float-left">Copy icon name</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
