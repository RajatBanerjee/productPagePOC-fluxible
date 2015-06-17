/** @jsx React.DOM */
var React = require('react');

var testComponent = React.createClass({

	render: function() {
		var data = this.props.titleData;
		return (
			<div className="staticTextComponent">
			<div  className="prd-title">
					<h1>{data.title}</h1>
				</div>
			</div>
		);
	}

});

module.exports = testComponent;