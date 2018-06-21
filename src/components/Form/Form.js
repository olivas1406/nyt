import React from "react";
import "./Form.css";

const Form = props => <div className="nytForm">{props.children}
      
     <form role="form">
        <div className="form-group">
        <label for="search">Search Term:</label>
        <input type="text" className="form-control" id="search-term"></input>
        </div>

        <div className="form-group">
            <label for="pwd">Number of Records to Retrieve:</label>
            <select className="form-control" id="article-count">
            <option value="1">1</option>
            <option value="5" selected>5</option>
            <option value="10">10</option>
            </select>
        </div>

        <div className="form-group">
            <label for="start-year">Start Year (Optional):</label>
            <input type="text" className="form-control" id="start-year"></input>
        </div>

        
        <div className="form-group">
            <label for="end-year">End Year (Optional):</label>
            <input type="text" className="form-control" id="end-year"></input>
        </div>

    
        <button type="submit" className="btn btn-default" id="run-search">
            <i className="fa fa-search"></i> Search</button>
            <button type="button" className="btn btn-default" id="clear-all">
            <i className="fa fa-trash"></i> Clear Results</button>

    </form>
</div>

export default Form;