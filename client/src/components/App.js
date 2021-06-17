import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const SurveysNew = () => <h2>SurveysNew</h2>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
        <Route path="/surveys/new" component={SurveysNew} />
      </BrowserRouter>
    </div>
  );
};

export default App;
