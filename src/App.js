import "./App.css";

import JobOpputrunites from "./components/JobOppurtunites/JobOppurtunities";
import Navbar from "./components/Navbar";
import Seminars from "./components/Seminars/Seminars";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Posts from "./components/JobPost/Posts";

import SeminarForm from "./components/Forms/Listing";
import SeminarForm2 from "./components/Forms/EventListing";
import HomePage from "./components/Login/HomePage";
const Jobslist = [
  {
    jobtitle: "HR",
    organization: "Reliance",
    experience: "2 years",
    salary: "Rs 45000",
    location: "Delhi",
    count: "0",
    date: "24/05.2020",
    src: "https://www.naukri.com/hotjobs/images/v3/varun_dec19.gif",
    jobDesciption:
      "loremvjwabj bjbbghbgvfcgvytfcvbhygtfvbhyugtgf ytfgvytfcgvyutgfcvytfcgv",
  },
  {
    jobtitle: "HR",
    organization: "Reliance",
    experience: "2 years",
    salary: "Rs 45000",
    location: "Delhi",
    count: "0",
    date: "24/05.2020",
    src: "https://www.naukri.com/hotjobs/images/v3/varun_dec19.gif",
    jobDesciption:
      "loremvjwabj bjbbghbgvfcgvytfcvbhygtfvbhyugtgf ytfgvytfcgvyutgfcvytfcgv",
  },
  {
    jobtitle: "HR",
    organization: "Reliance",
    experience: "2 years",
    salary: "Rs 45000",
    location: "Delhi",
    count: "0",
    date: "24/05.2020",
    src: "https://www.naukri.com/hotjobs/images/v3/varun_dec19.gif",
    jobDesciption:
      "loremvjwabj bjbbghbgvfcgvytfcvbhygtfvbhyugtgf ytfgvytfcgvyutgfcvytfcgv",
  },
  {
    jobtitle: "HR",
    organization: "Reliance",
    experience: "2 years",
    salary: "Rs 45000",
    location: "Delhi",
    count: "0",
    date: "24/05.2020",
    src: "https://www.naukri.com/hotjobs/images/v3/varun_dec19.gif",
    jobDesciption:
      "loremvjwabj bjbbghbgvfcgvytfcvbhygtfvbhyugtgf ytfgvytfcgvyutgfcvytfcgv",
  },
  {
    jobtitle: "HR",
    organization: "Reliance",
    experience: "2 years",
    salary: "Rs 45000",
    location: "Delhi",
    count: "0",
    date: "24/05.2020",
    src: "https://www.naukri.com/hotjobs/images/v3/varun_dec19.gif",
    jobDesciption:
      "loremvjwabj bjbbghbgvfcgvytfcvbhygtfvbhyugtgf ytfgvytfcgvyutgfcvytfcgv",
  },
  {
    jobtitle: "HR",
    organization: "Reliance",
    experience: "2 years",
    salary: "Rs 45000",
    location: "Delhi",
    count: "0",
    date: "24/05.2020",
    src: "https://www.naukri.com/hotjobs/images/v3/varun_dec19.gif",
    jobDesciption:
      "loremvjwabj bjbbghbgvfcgvytfcvbhygtfvbhyugtgf ytfgvytfcgvyutgfcvytfcgv",
  },
];

function App() {
  return (
    <BrowserRouter>
      <div>
            <Navbar></Navbar>
        <Routes>

          <Route exact path="/learnings" element={<Seminars seminars={[]} />}>
          
          </Route>
          <Route exact path="/" element={<HomePage/>}>
          
          </Route>
          <Route exact path="/posts" element={<Posts/>}>
          
          </Route>
          <Route exact path="/joblistings" element={<JobOpputrunites jobs={Jobslist}/>}>
          
          </Route>
          <Route exact path="/login" element={<HomePage/>}>
          
          </Route>
          <Route exact path="/addlisting" element={<SeminarForm/>}>
          
          </Route>
          <Route exact path="/eventlisting" element={<SeminarForm2/>}>
          
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;