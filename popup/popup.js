var App = React.createClass({
        render: function() {
            return (
                <div>
    <button type = "button" className = "btn btn-primary btn-lg" data-toggle = "modal" data-target = "#myModal">
        click here
    </button>
    <div className = "modal fade"
        id = "myModal"
        tabIndex = "-1"
        role = "dialog"
        aria-labelledby = "myModalLabel"
        aria-hidden = "true">
        <div className = "modal-dialog">
            <div className = "modal-content">
                <div className = "modal-header plain">
                    <button type = "button"
                        className = "close"
                        data-dismiss = "modal">
                        <span aria-hidden = "true" >
                            &times;
                        </span>
                        <span className="sr-only">
                            Close
                        </span>
                    </button>
                    <h4 className = "modal-title"
                        id = "myModalLabel">
                        Medication History
                    </h4>
                </div>
                <div className = "modal-body">
                    There are no medications in your history to search for lower cost alternatives for.
                </div>
                <div className = "modal-footer noPadding">
                    <button type = "button"
                        className = "btn btn-primary btn-block sharp"
                        data-dismiss = "modal">
                        OK
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
          );
        }
    });

   React.render(<App />, 
    document.body
    );
