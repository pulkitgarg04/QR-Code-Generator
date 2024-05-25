import './App.css'
import { useState } from 'react'
import { saveAs } from 'file-saver'

function App() {

  const init = 'https://api.qrserver.com/v1/create-qr-code/?size=500&margin=null&color=000000&bgcolor=ffffff&format=png&data=pulkitgarg04';
  const [qrData, setQrData] = useState('')
  const [qrCode, setQrCode] = useState(init)
  const handleTextChange = (e) => {
    e.preventDefault;
    setQrData(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault;
    setQrCode(`https://api.qrserver.com/v1/create-qr-code/?size=500&margin=null&color=000000&bgcolor=ffffff&format=png&data=${qrData}`)
  }

  const handleDownload = () => {
    saveAs(qrCode, `qrcode.png`)

    // fetch({qrCode})
    //   .then(response => response.blob())
    //   .then(blob => {
    //     const blobURL = URL.createObjectURL(blob);
    //     const a = document.createElement("a");
    //     a.href = blobURL;
    //     a.style = "display: none";
    //     a.download = "qrcode";
    //     document.body.appendChild(a);
    //     a.click();
    //   })
  }

  return (
    <>
      <div>
        <img src={qrCode} alt="" height={400} />
        <br /><br />
        <button onClick={handleDownload}>Click to Download</button>
      </div>
      <br /><br />
      <div>
        <label htmlFor="text">Enter your Text: </label>
        <input name="text" id="text" type="text" placeholder='Enter your Text' onChange={handleTextChange}></input>
      </div>
      <br /><br />
      <button onClick={handleSubmit}>Generator QR Code</button>
    </>
  )
}

export default App
