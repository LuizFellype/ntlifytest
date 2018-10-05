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

  Quagga.onProcessed((s) => this.state({s}))
  }

  stop = () => Quagga.stop()

  render() {
    return (
      <div>
        {this.state.s}
        <div id="d" style={{border: "solid 1px"}} onClick={this.scan}>
          diviaqui....
        </div>
        <button onClick={this.stop}>Stop</button>
      </div>
    )
  }
}

