import { useEffect, useState } from "react";
import "./Listing.css";
import Navbar from "../Navbar";

function SeminarForm() {
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
    <div className="listingjobcon">
      <Navbar></Navbar>

      <div className="containerpra">
        <form onSubmit={handleSubmit}>
          <h1 class="maintitle">Job profile</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <table class="table1">
              {/* {<p className="ppra">{formErrors.job}</p>}     */}
              <div className="field">
                <tr>
                  <td class="c">
                    <label class="ba label1">Job Name:</label>
                  </td>
                  <td>
                    <input
                      className="job, bab"
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
              {/* <p className="ppra">{formErrors.jobdescription}</p> */}
              <div className="field">
                <tr>
                  <td class="c">
                    <label class="ba label1">Job description:</label>
                  </td>
                  <td>
                    <input
                      class="jobdes, bab"
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
              {/* <p className="ppra">{formErrors.salary}</p> */}
              <div className="field">
                <tr>
                  <td class="c">
                    <label class="ba label1">Salary: </label>
                  </td>
                  <td>
                    <input
                      class="salary, bab"
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
              {/* <p className="ppra">{formErrors.specialization}</p> */}
              <div className="field">
                <tr>
                  <td class="c">
                    <label class="ba label1">Specialization:</label>
                  </td>
                  <td>
                    <input
                      class="specialization, bab"
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
              {/* <p className="ppra">{formErrors.company}</p> */}
              <div className="field">
                <tr>
                  <td class="c">
                    <label class="ba label1">Company:</label>
                  </td>
                  <td>
                    <input
                      class="company, bab"
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
                  <td class="c">
                    <label class="ba label1">Location:</label>
                  </td>
                  <td>
                    <input
                      class="location , bab"
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
                  <td class="c">
                    <label class="ba label1">Skills:</label>
                  </td>
                  <td>
                    <input
                      class="skills bab"
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
            <button className="buttpra" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SeminarForm;
