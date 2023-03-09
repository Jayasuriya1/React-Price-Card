import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

function App() {
  return (
    <div className="App">
      <div className="price py-5">
        <div className="container">
          <div className="row justify-content-around">
            <Card
              price="0"
              membership="FREE"
              user="Single"
              storage="5GB"
              tickProject="✖"
              tickPhone="✖"
              tickSubdomain="✖"
              tickStatus="✖"
            />
            <Card
              price="9"
              membership="Plus"
              user="5"
              storage="50GB"
              tickProject="✔"
              tickPhone="✔"
              tickSubdomain="✔"
              tickStatus="✖"
            />
            <Card
              price="49"
              membership="Pro"
              user="Unlimited"
              storage="150GB"
              tickProject="✔"
              tickPhone="✔"
              tickSubdomain="✔"
              subdomain="Unlimited"
              tickStatus="✖"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function Card(props) {
  return (
    <div className="col-xs-12 col-sm-12 col-lg-3  card">
      <div className="card-body">
        <h5 class="card-title text-muted text-uppercase text-center">
          {props.membership}
        </h5>
        <h6 class="card-price text-center">
          ${props.price}
          <span class="period">/month</span>
        </h6>
        <hr />
      </div>
      <div class="card-body">
        <p>✔ {props.user} User</p>
        <p>✔ {props.storage} Storage</p>
        <p>✔ Unlimited Public Projects</p>
        <p>✔ Community Access</p>
        <p>
          <span>{props.tickProject}</span> Unlimited Private Projects
        </p>
        <p>
          <span>{props.tickPhone}</span> Dedicated Phone Support
        </p>
        <p>
          <span>{props.tickSubdomain}</span> {props.subdomain} Free Subdomain
        </p>
        <p>
          <span>{props.tickStatus}</span> Monthly Status Reports
        </p>
        <div className="btn-btn">
          <a href="#" class="btn btn-primary">
            BUTTON
          </a>
        </div>
      </div>
    </div>
  );
}
