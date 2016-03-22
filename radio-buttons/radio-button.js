var RadioButtons = React.createClass({
      render: function() {
        return (
          <div>
          <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
          Radio popup
          </button>
          <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className = "modal-dialog">
          <div className = "modal-content">
          <div className = "modal-header plain">
          <button type="button" className="close"
          data-dismiss="modal">
          <span aria-hidden ="true">&times;</span>
          </button>
          <h4 className = "modal-title"
        id = "myModalLabel">
        Select Quantity </h4>
        </div>
        <div className = "modal-body noPadding">
            <label>
             <input type="radio" name="package" value="pacakge1" id="rd1"/> 
            1 Package</label><br/>
            <label>
           <input type="radio" name="package" value="pacakge2" id="rd2"/>
        2 Packages</label><br/>
            <label>
        <input type="radio" name="package" value="pacakge3"id="rd3"/> 
        3 Packages</label><br/>
            <label>
        <input type="radio" name="package" value="pacakge4" id="rd4" defaultChecked />
        4 Packages</label><br/> 
            <label>
        <input type="radio" name="package" value="pacakge5" id="rd5"/> 
        5 Packages</label><br/> 
            <label>
        <input type="radio" name="package" value="pacakge6" id="rd6"/> 
      6 Packages</label><br/> 
            <label>
        <input type="radio" name="package" value="pacakge7" id="rd7"/>
        7 Packages</label>
    </div>
        <div className = "modal-footer noPadding">
        <button type = "button"
        className = "btn btn-primary btn-block sharp"
        data-dismiss = "modal">
        OK </button>
        
        </div>
        </div>
        </div>
        </div>
        </div>
          );
      }
    });

    React.render(
      <RadioButtons/>,
      document.body
      );