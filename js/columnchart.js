google.charts.load("current", { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);


function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" }],
        ["JAN", 4, "#CCEBFF"],
        ["FEB", 4, "#CCEBFF"],
        ["MAR", 12, "#B2E1FF"],
        ["APR", 69, "#66C4FF"],
        ["MAY", 307, "#33B0FF"],
        ["JUN", 879, "#008DE5"],
        ["JUL", 969, "#007DCC"],
        ["AUG", 874, "#009DFF"],
        ["SEPT", 409, "#19A6FF"],
        ["OCT", 122, "#4CBAFF"],
        ["NOV", 39, "#7FCEFF"],
        ["DEC", 18, "#99D7FF"],
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
        {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
        },
        2
    ]);

    var options = {
        title: "Number of Chalybion californicum observed in a year",
        width: 900,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },

    };

    var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
    chart.draw(view, options);
}