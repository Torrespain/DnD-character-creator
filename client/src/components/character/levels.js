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
                      <select className="form-control" name="levels" readOnly onChange={props.levelChange} >
                        <option value="" defaultValue>Level</option>
                        <option value="1">Level 1</option>
                        <option value="2">Level 2</option>
                        <option value="3">Level 3</option>
                        <option value="4">Level 4</option>
                        <option value="5">Level 5</option>
                        <option value="6">Level 6</option>
                        <option value="7">Level 7</option>
                        <option value="8">Level 8</option>
                        <option value="9">Level 9</option>
                        <option value="10">Level 10</option>
                        <option value="11">Level 11</option>
                        <option value="12">Level 12</option>
                        <option value="13">Level 13</option>
                        <option value="14">Level 14</option>
                        <option value="15">Level 15</option>
                        <option value="16">Level 16</option>
                        <option value="17">Level 17</option>
                        <option value="18">Level 18</option>
                        <option value="19">Level 19</option>
                        <option value="20">Level 20</option>
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