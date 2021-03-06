// Welcome to the RazorFlow Dashbord Quickstart. Simply copy this "dashboard_quickstart"
// to somewhere in your computer/web-server to have a dashboard ready to use.
// This is a great way to get started with RazorFlow with minimal time in setup.
// However, once you're ready to go into deployment consult our documentation on tips for how to 
// maintain the most stable and secure 

StandaloneDashboard(function(db){
	// YOU CAN DELETE THE ENTIRE CONTENTS OF THIS FUNCTION AND CUSTOMIZE
	// AS PER YOUR REQUIREMENT. 
	// These components are simply here to give you a quick introduction of how RazorFlow Works

	// db.setDashboardTitle ("Neo BI");

	// Add a chart to the dashboard. This is a simple chart with no customization.
	var chart = new ChartComponent();
	chart.setCaption("Sales");
	chart.setDimensions (6, 6);
	chart.setLabels (["2013", "2014", "2015", "2016"]);
	chart.addSeries ([3151, 1121, 4982, 5555]);
	db.addComponent (chart);

	// You can add multiple charts to the same dashboard. In fact you can add many 
	// different types of components. Check out the docs at razorflow.com/docs 
	// to read about all the types of components.
	// 
	// This is another chart with additional parameters passed to "addSeries" to 
	// make customizations like change it to a line chart, and add "$" to indicate currency
	var chart2 = new ChartComponent();
	chart2.setCaption("Sales");
	chart2.setDimensions (6, 6);	
	chart2.setLabels (["2013", "2014", "2015"]);
	chart2.addSeries ([3151, 1121, 4982], {
		numberPrefix: "$",
		seriesDisplayType: "line"
	});
	db.addComponent (chart2);

	var chart3 = new ChartComponent();
  chart3.setDimensions (4, 4);
  chart3.setCaption("My First Chart");
  chart3.setLabels (["Jan", "Feb", "Mar"]);
  chart3.addSeries ("beverages", "Beverages", [1355, 1916, 1150]);
  chart3.addSeries ("packaged_foods", "Packaged Foods", [1513, 976, 1321]);
  db.addComponent (chart3);

});