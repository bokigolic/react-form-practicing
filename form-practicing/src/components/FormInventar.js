const FormInventar = () => {
  return (
    <div className="form-inventar">
      <h1>Add new car</h1>

      <from>
        <div>
          <div>
            <label>Make </label>
            <input
            />
          </div>
          <div>
            <label>Model </label>
            <input
            />
          </div>

          <div>
            <label>Color </label>
            <select>
              <option value="red">
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
              <label>Year</label>
              <select>
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
          </div>
        </div>

      </from>
    </div>
  );
};
export default FormInventar;