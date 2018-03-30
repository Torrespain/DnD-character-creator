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
                            <option value="1" defaultValue>level1</option>
                            <option value="2">level2</option>
                            <option value="3">level3</option>
                            <option value="4">level4</option>
                            <option value="5">level5</option>
                            <option value="6">level6</option>
                            <option value="7">level7</option>
                            <option value="8">level8</option>
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