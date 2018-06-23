import React from "react";
import "./Results.css";

const Results = props => <div className="nytResults">{props.children}
     <hr></hr>
     <div className="col-sm-12">
        <br></br>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong className="articles">
                <i className="fa fa-table"></i>Articles</strong>
            </h3>
          </div>
          <div className="panel-body" id="well-section">
          </div>
        </div>
      </div>
</div>

export default Results;