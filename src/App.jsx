import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';




function App() {

  const[height,setHeight]=useState("")
  const[weight,setWeight]=useState("")
  const[bmi,setBmi]=useState(null)
  const[bmiStatus,setBmiStatus]=useState("")
  const[error,setError]=useState("")

  const clearAll =()=>{
    setHeight("")
    setWeight("")
    setBmiStatus("")
    setBmi(null)

  }

  const CalculateBmi=() => {
    const isValidHeight=/^\d+$/.test(height)
    const isValidWeight=/^\d+$/.test(weight)
    console.log(isValidHeight);

    if(isValidHeight && isValidWeight){
      const heightM =height/100
      const bmiValue=weight/(heightM*heightM)
      setBmi(bmiValue.toFixed(2))

      if(bmiValue < 18.5){
        setBmiStatus("UnderWeight")
      }
      else if(bmiValue >= 18.5 && bmiValue <24.9){
        setBmiStatus("Normal")
      }
      else if(bmiValue >= 25 && bmiValue < 29.9){
        setBmiStatus("OverWeight")
      }
      else {
        setBmiStatus("Obese")
      }
      setError("")
    }
    else{
      setBmi(null)
      setBmiStatus("")
      setError("Please enter valid Height and Weight")
    }
  }

  return (
    <>
    <Container>
    <h1 className="text-success text-center">BMI CALCULATOR</h1>

      <Row>
        <Col lg={1}></Col>
        <Col  lg={4}>
        <div className="data bg-light  my-4">
              <h4 className="text-success text-center">Check your Body Mass Index (BMI)</h4>
               {error && <p className='error text-danger'>{error}</p>}
              <div className="input flex-column">
                <label htmlFor="height">Height</label>
                <input type="text" id="height" 
                 value={height} onChange={(e)=>setHeight(e.target.value)}
                 placeholder="Enter your height (CM)"/>
              </div>
              <div className="input flex-column">
                <label htmlFor="weight">Weight</label>
                <input type="text" id="weight"
                 value={weight} onChange={(e)=>setWeight(e.target.value)}
                placeholder="Enter your weight(KG)"/>
              </div>
              <div className='d-flex align-items-center justify-content-center flex-column'>
                <button className="btn btn-success mt-3 w-100 " 
                  onClick={CalculateBmi}
                >Calculate</button>
                <button type="button" onClick={clearAll}
                 className="btn btn-success mt-3 w-100 ">Clear</button>
              </div>
          </div>
        </Col>

        <Col lg={2}></Col>
        <Col lg={4}>
        <div className="data bg-light my-4">
              <h4 className="text-success text-center">Result</h4>
              {/* {bmi!==null && ( */}
                <div className="input flex-column text-center">
                <h4><b> Bmi : {bmi}</b></h4>
                <p className='fs-5'>Status :{bmiStatus}</p>
              </div>
              {/* )} */}
              <div className='d-flex align-items-center justify-content-center flex-column textdta'>
                <p className='fs-5'>Healthy BMI range: 18.5 kg/m2 - 25 kg/m2</p>
                <p>
              BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m2.
                </p>
              </div>
          </div>
        </Col>
        <Col lg={1}></Col>



      </Row>
    </Container>
    <Container>
      <Row>
      <Col lg={4}>
      <div className="data bg-light my-4">
              <h4 className="text-success text-center"> BMI</h4>
              <div className="input flex-column text-center">
              Body mass index (BMI) is a value derived from the mass (weight) and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m2, resulting from mass in kilograms (kg) and height in metres (m).              </div>
          </div>
      </Col>

        <Col lg={4}>
        <div className="data bg-light my-4">
              <h4 className="text-success text-center"> Risks associated with being overweight</h4>
              <div className="input flex-column text-center">
              Being overweight increases the risk of a number of serious diseases and health conditions.According to the Centers for Disease Control and Prevention (CDC):
              High blood pressure,
              Stroke,Gallbladder disease,Low quality of life,Certain cancers and so on
              </div>
          </div>
        </Col>

        <Col lg={4}>
        <div className="data bg-light my-4">
              <h4 className="text-success text-center"> How to calculate BMI</h4>
              <div className="input flex-column text-center">
              If you want to calculate your BMI, you have to find out your weight and height first. then,
                <ul>
                  <li>Multiply your height by itself (height X height).</li>
                  <li>Divide your weight by the answer you get in the first step.</li>
                </ul>
              </div>
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
