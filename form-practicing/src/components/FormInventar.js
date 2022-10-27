import { useState } from 'react';
import axios from 'axios'


const CarInventar = () => {
  const preset = {
    make: "",
    model: "",
    color: "",
    year: ""
  }
  const [formState, setFormState] = useState(preset);

  //universal handle change
  const handleChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormState({
      ...formState,
      [name]: value
    })
  };

  const handleClickSubmit = () => {
    console.log("Submit", formState);
    const url = "http://localhost:3034/cars"
    const data = {
      ...formState
    }
    axios.post(url, data)
  };

  return (
    <div className='for-flex'>
      <div className="car-inventory">
        <h1>Add new car</h1>
        <form>
          <div className='make-model-color-year'>
            <div className='make'>
              <label>Make </label>
              <input
               placeholder="--Choose make--"
                type="text"
                name="make"
                value={formState.make}
                onChange={handleChange}
              />
            </div>
            <div className='model'>
              <label>Model </label>
              <input
              placeholder="--Choose model--"
                type="text"
                name="model"
                value={formState.model}
                onChange={handleChange}
              />
            </div>
            <div className='color'>
              <label>Color </label>
              <select
                name="color"
                value={formState.color}
                onChange={handleChange}
              >

                <option value="red" >
                  Red
                </option>
                <option value="blue">
                  Blue
                </option>
                <option value="green">
                  Green
                </option>
                <option value="brown" >
                  Brown
                </option>
                <option value="grey">
                  Grey
                </option>
                <option value="white">
                  White
                </option>
                <option value="yellow" >
                  Yellow
                </option>
                <option value="black">
                  Black
                </option>
                <option value="orange">
                  Orange
                </option>
              </select>
              <div>
                <div className='year'>
                  <label>Year </label>
                  <select
                    name="year"
                    value={formState.year}
                    onChange={handleChange}
                  >
                    <option value="2022">
                      2022
                    </option>
                    <option value="2021">
                      2021
                    </option>
                    <option value="2020">
                      2020
                    </option>
                    <option value="2019">
                      2019
                    </option>
                    <option value="2018">
                      2018
                    </option>
                    <option value="2017">
                      2017
                    </option>
                    <option value="2016">
                      2016
                    </option>
                    <option value="2015">
                      2015
                    </option>
                    <option value="2014">
                      2014
                    </option>
                    <option value="2013">
                      2013
                    </option>
                    <option value="2012">
                      2012
                    </option>
                    <option value="2011">
                      2011
                    </option>
                    <option value="2010">
                      2010
                    </option>
                    <option value="2009">
                      2009
                    </option>
                    <option value="2008">
                      2008
                    </option>
                    <option value="2007">
                      2007
                    </option>
                  </select>
                </div>
                <div className='button-submit'>
                  <button type="button" onClick={handleClickSubmit}>Submit</button>
                </div>
              </div>
            </div>
          </div>
        </form >
      </div>
    </div >
  );
};
export default CarInventar;