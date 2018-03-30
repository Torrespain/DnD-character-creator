import React from "react"

const levels = props => {

	
	
	return(
		<div className="col-md-3">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <label className="panel-title">Level</label>
                </div>
                <div className="panel-body">
                <div className="section-content">
                      <div className="fg-line">
                        <div className="select">
                          <select className="form-control" name="levels" onChange={props.levelChange} >
                            <option value="1" defaultValue>Level 1</option>
                            <option value="2">Level 2</option>
                            <option value="3">Level 3</option>
                            <option value="4">Level 4</option>
                            <option value="5">Level 5</option>
                            <option value="6">Level 6</option>
                            <option value="7">Level 7</option>
                            <option value="8">Level 8</option>
                          </select>
                        </div>
                      </div>
                    </div>


                </div>
              </div>
            </div>






	)
}

export default levels;