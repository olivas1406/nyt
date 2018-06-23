import React from "react";
import "./SavedArticles.css";

const SavedArticles = props => <div className="nytSaved">{props.children}
     <hr></hr>
     <div className="col-sm-12">
        <br></br>
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              <strong className="savedArticles">
                <i className="fa fa-table"></i>Saved Articles</strong>
            </h3>
          </div>
          <div className="panel-body" id="well-section">
          </div>
        </div>
      </div>
</div>

export default SavedArticles;