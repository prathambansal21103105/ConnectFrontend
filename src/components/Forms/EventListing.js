import { useEffect, useState } from "react";
import "./EventListing.css";

function SeminarForm2() {
  const initialValues = {
    job: "",
    description: "",
    income: "",
    specialization: "",
    company: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\$@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.job) {
      errors.job = "job is required!";
    }
    if (!values.description) {
      errors.description = "description is required!";
    }
    if (!values.income) {
      errors.income = "income is required!";
    }
    if (!values.specialization) {
      errors.specialization = "specialization is required!";
    }
    if (!values.company) {
      errors.company = "company is required!";
    }
    return errors;
  };
  return (
    <div className="contgt">
      <div className="containerdaksh">
        <form onSubmit={handleSubmit}>
          <h1 class="maintitle">Seminar</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <table className="table1">
            
              <div className="field">
                <tr>
                  <td className="c">
                    <label className="ba">Title:</label>
                  </td>
                  <td>
                    <input
                      className="job bab"
                      type="text"
                      name="job"
                      placeholder=""
                      value={formValues.job}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </div>
              <br />
             
              <div className="field">
                <tr>
                  <td className="c">
                    <label className="ba">Event Date:</label>
                  </td>
                  <td>
                    <input
                      className="jobdes bab"
                      type="text"
                      name="description"
                      placeholder=""
                      value={formValues.description}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </div>
              <br />
             
              <div className="field">
                <tr>
                  <td className="c">
                    <label className="ba">Event Time: </label>
                  </td>
                  <td>
                    <input
                      className="salary, bab"
                      type="text"
                      name="salary"
                      placeholder=""
                      value={formValues.income}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </div>
              <br />
              
              <div className="field">
                <tr>
                  <td className="c">
                    <label className="ba">Video Link:</label>
                  </td>
                  <td>
                    <input
                      className="specialization bab"
                      type="text"
                      name="specialization"
                      placeholder=""
                      value={formValues.specialization}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </div>
              <br />
              <div className="field">
                <tr>
                  <td className="c">
                    <label className="ba">Image Link:</label>
                  </td>
                  <td>
                    <input
                      className="specialization bab"
                      type="text"
                      name="specialization"
                      placeholder=""
                      value={formValues.specialization}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </div>
              <br />
              <div className="field">
                <tr>
                  <td className="c">
                    <label className="ba">Platform:</label>
                  </td>
                  <td>
                    <input
                      className="specialization bab"
                      type="text"
                      name="specialization"
                      placeholder=""
                      value={formValues.specialization}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </div>
              <br />
              
              <div className="field">
                <tr>
                  <td className="c">
                    <label className="ba">Location:</label>
                  </td>
                  <td>
                    <input
                      className="company bab"
                      type="text"
                      name="company"
                      placeholder=""
                      value={formValues.company}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </div>
              <br />
              <div className="field">
                <tr>
                  <td className="c">
                    <label className="ba">Description</label>
                  </td>
                  <td>
                    <input
                      className="location  bab"
                      type="text"
                      name="location"
                      placeholder=""
                      value={formValues.company}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              </div>
              <br />
              <tr>
                <div className="field">
                  <td className="c">
                    <label className="ba">Skills:</label>
                  </td>
                  <td>
                    <input
                      className="skills bab"
                      type="text"
                      name="skills"
                      placeholder=""
                      value={formValues.company}
                      onChange={handleChange}
                    />
                  </td>
                </div>
              </tr>
            </table>
            <button className="va buttonpra" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SeminarForm2;
