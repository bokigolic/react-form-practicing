import { useState } from 'react';


const FormInventar = () => {



  const preset = {
    make: "",
    model: "",
    color: "",
    year: ""
  }

  const [formState, setFormState] = useState(preset);

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


  };


  return (
    <div className="form-inventar">
      <h1>Add new car</h1>

      <form>
        <div>
          <div>
            <label>Make </label>
            <input
              type="text"
              name="make"
              value={formState.make}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Model </label>
            <input
              type="text"
              name="model"
              value={formState.model}
              onChange={handleChange}
            />
          </div>

          <div>
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
            </select>
            <div>
              <div>
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
                </select>
              </div>
              <button type="button" onClick={handleClickSubmit}>Submit</button>
            </div>
          </div>
        </div>

      </form >
    </div >
  );
};
export default FormInventar;