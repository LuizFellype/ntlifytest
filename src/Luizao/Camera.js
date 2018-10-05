import React, {Component} from 'react'
import Quagga from 'quagga';



export default class App extends Component {
  state = {
    s: ""
  }
  
  scan = () => {

    Quagga.init({
      inputStream : {
          name : "Live",
          type : "LiveStream",
           // Or '#yourElement' (optional)
          target: document.querySelector('#d') 
      },
      decoder : {
          readers : ["code_128_reader"]
      }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });

  Quagga.onProcessed((s) => {
    if (s !== undefined){
      Quagga.stop()
    }
    this.setState({s})
    console.log(s)
  })
  }

  showAquilo = () => console.log(this.state.s)

  render() {
    return (
      <div>
        <button onClick={this.showAquilo} style={{height: "100px", width: "100px"}} >SHOW</button>
        <div id="d" style={{border: "solid 1px"}} onClick={this.scan}>
          Div
        </div>
        <button onClick={this.stop}>Stop</button>
      </div>
    )
  }
}

