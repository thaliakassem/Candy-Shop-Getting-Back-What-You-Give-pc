var TimeConverter = React.createClass({ displayName: "TimeConverter",
  // The only state a TimeConverter needs is a single
  // value for the current time displayed. 
  // All other values are derived from it.
  getInitialState: function () {
    return { time: 0 };
  },

  render: function () {
    // Render returns the form with all derived time values
    // Note the use of bind to pass parameters to the handler
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Facebook" }, "Time on Facebook (minutes) "), /*#__PURE__*/
    React.createElement("input", { id: "Facebook", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time })), /*#__PURE__*/


    React.createElement("br", null, /*#__PURE__*/
    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Units" }, "Units:"), /*#__PURE__*/
    React.createElement("output", { id: "Units", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.00380 })), /*#__PURE__*/


    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "amount" }, "Amount (grams):"), /*#__PURE__*/
    React.createElement("output", { id: "hours", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.0475 })), /*#__PURE__*/


    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Price" }, "Price (euros):"), /*#__PURE__*/
    React.createElement("output", { id: "Price", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.00126 }))));







  },

  // All a handler has to do is set the new state
  // using the factor and current value
  valueChanged: function (factor, e) {
    this.setState({ time: Number(e.target.value) * factor });
  } });


ReactDOM.render( /*#__PURE__*/React.createElement(TimeConverter, null), document.querySelector('main'));


///Instagram
var TimeConverter = React.createClass({ displayName: "TimeConverter",
  // The only state a TimeConverter needs is a single
  // value for the current time displayed. 
  // All other values are derived from it.
  getInitialState: function () {
    return { time: 0 };
  },

  render: function () {
    // Render returns the form with all derived time values
    // Note the use of bind to pass parameters to the handler
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Instagram" }, "Time on Instagram (minutes)"), /*#__PURE__*/
    React.createElement("input", { id: "seconds", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time })), /*#__PURE__*/


    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Units" }, "Units:"), /*#__PURE__*/
    React.createElement("output", { id: "Units", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.00157 })), /*#__PURE__*/


    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Amount1" }, "Amount (grams):"), /*#__PURE__*/
    React.createElement("output", { id: "Amount1", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.0082 })), /*#__PURE__*/


    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Price1" }, "Price (euros):"), /*#__PURE__*/
    React.createElement("output", { id: "Price1", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.00050 })));



  },

  // All a handler has to do is set the new state
  // using the factor and current value
  valueChanged: function (factor, e) {
    this.setState({ time: Number(e.target.value) * factor });
  } });


ReactDOM.render( /*#__PURE__*/React.createElement(TimeConverter, null), document.querySelector('main1'));

//Whatsapp

var TimeConverter = React.createClass({ displayName: "TimeConverter",
  // The only state a TimeConverter needs is a single
  // value for the current time displayed. 
  // All other values are derived from it.
  getInitialState: function () {
    return { time: 0 };
  },

  render: function () {
    // Render returns the form with all derived time values
    // Note the use of bind to pass parameters to the handler
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Whatsapp" }, "Time on Whatsapp (minutes) "), /*#__PURE__*/
    React.createElement("input", { id: "Whatsapp", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time })), /*#__PURE__*/


    React.createElement("br", null, /*#__PURE__*/

    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Units" }, "Units:"), /*#__PURE__*/
    React.createElement("output", { id: "Units", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.00485 })), /*#__PURE__*/


    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "amount" }, "Amount (grams):"), /*#__PURE__*/
    React.createElement("output", { id: "amount", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.0121 })), /*#__PURE__*/


    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Price" }, "Price (euros):"), /*#__PURE__*/
    React.createElement("output", { id: "Price", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.00064 }))));





  },

  // All a handler has to do is set the new state
  // using the factor and current value
  valueChanged: function (factor, e) {
    this.setState({ time: Number(e.target.value) * factor });
  } });


ReactDOM.render( /*#__PURE__*/React.createElement(TimeConverter, null), document.querySelector('main2'));

//Snapchat


var TimeConverter = React.createClass({ displayName: "TimeConverter",
  // The only state a TimeConverter needs is a single
  // value for the current time displayed. 
  // All other values are derived from it.
  getInitialState: function () {
    return { time: 0 };
  },

  render: function () {
    // Render returns the form with all derived time values
    // Note the use of bind to pass parameters to the handler
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Snapchat" }, "Time on Snapchat (minutes) "), /*#__PURE__*/
    React.createElement("input", { id: "Snapchat", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time })), /*#__PURE__*/


    React.createElement("br", null, /*#__PURE__*/

    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Units" }, "Units:"), /*#__PURE__*/
    React.createElement("output", { id: "Units", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.003511 })), /*#__PURE__*/


    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "amount" }, "Amount (grams):"), /*#__PURE__*/
    React.createElement("output", { id: "amount", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.0088 })), /*#__PURE__*/


    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Price" }, "Price (euros):"), /*#__PURE__*/
    React.createElement("output", { id: "Price", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.00046 }))));




  },

  // All a handler has to do is set the new state
  // using the factor and current value
  valueChanged: function (factor, e) {
    this.setState({ time: Number(e.target.value) * factor });
  } });


ReactDOM.render( /*#__PURE__*/React.createElement(TimeConverter, null), document.querySelector('main3'));

//Twitter

var TimeConverter = React.createClass({ displayName: "TimeConverter",
  // The only state a TimeConverter needs is a single
  // value for the current time displayed. 
  // All other values are derived from it.
  getInitialState: function () {
    return { time: 0 };
  },

  render: function () {
    // Render returns the form with all derived time values
    // Note the use of bind to pass parameters to the handler
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { className: "row" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Twitter" }, "Time on Twitter (minutes) "), /*#__PURE__*/
    React.createElement("input", { id: "Twitter", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time })), /*#__PURE__*/


    React.createElement("br", null, /*#__PURE__*/

    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Units" }, "Units:"), /*#__PURE__*/
    React.createElement("output", { id: "Units", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.030135 })), /*#__PURE__*/


    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "amount" }, "Amount (grams):"), /*#__PURE__*/
    React.createElement("output", { id: "amount", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.0753 })), /*#__PURE__*/


    React.createElement("div", { className: "row1" }, /*#__PURE__*/
    React.createElement("label", { htmlFor: "Price" }, "Price (euros):"), /*#__PURE__*/
    React.createElement("output", { id: "Price", onChange: this.valueChanged.bind(this, 1), type: "number", value: this.state.time * 0.00398 }))));



  },

  // END ////
  // All a handler has to do is set the new state
  // using the factor and current value
  valueChanged: function (factor, e) {
    this.setState({ time: Number(e.target.value) * factor });
  } });


ReactDOM.render( /*#__PURE__*/React.createElement(TimeConverter, null), document.querySelector('main4'));


function noVis() {
  document.getElementById("text1").style.display = "initial";
}

function addText(i) {
  var content = document.getElementById("text" + i);
  if (content.style.display === "initial") {
    content.style.display = "none";
  } else {
    content.style.display = "initial";
  }
}

/////////////