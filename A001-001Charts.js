anychart.onDocumentReady(function () {

    // set the data
    table = anychart.data.table();
    table.addData([
        ['2004-01-02', 92.86, 93.05, 91.20, 91.55, 18.23, 19.36, 18.18, 19.31],
        ['2004-01-05', 92.00, 93.09, 92.00, 93.05, 19.50, 19.89, 19.00, 19.29],
        ['2004-01-06', 92.20, 93.19, 92.14, 93.06, 19.13, 19.15, 18.43, 18.75],
        ['2004-01-07', 93.14, 93.38, 92.47, 92.78, 18.54, 18.76, 18.27, 18.76],
        ['2004-01-08', 93.21, 93.21, 92.03, 93.04, 18.76, 19.14, 18.63, 18.76],
        ['2004-01-09', 91.75, 92.35, 91.00, 91.21, 18.97, 19.62, 18.96, 19.19],
        ['2004-01-12', 91.21, 92.14, 91.21, 91.55, 19.45, 19.70, 19.22, 19.67],
        ['2004-01-13', 91.45, 91.51, 89.01, 89.70, 19.69, 19.85, 19.37, 19.59],
        ['2004-01-14', 89.90, 90.46, 89.75, 90.31, 19.44, 19.55, 19.00, 19.35],
        ['2004-01-15', 95.07, 95.65, 93.55, 94.02, 19.21, 19.25, 18.51, 18.83],
        ['2004-01-16', 95.00, 95.35, 94.71, 95.32, 19.16, 19.78, 18.99, 19.76],
        ['2004-01-20', 96.00, 97.44, 95.73, 97.10, 19.69, 19.69, 19.00, 19.20],
        ['2004-01-21', 97.23, 98.04, 96.64, 97.70, 18.89, 18.95, 18.57, 18.61],
        ['2004-01-22', 97.84, 98.16, 97.32, 97.51, 18.59, 19.08, 18.57, 18.97],
        ['2004-01-23', 97.82, 98.21, 97.10, 97.90, 18.76, 19.19, 18.70, 18.78],
        ['2004-01-26', 97.90, 99.85, 97.56, 99.85, 18.92, 18.94, 18.47, 18.92],
        ['2004-01-27', 99.40, 99.67, 98.70, 98.80, 19.82, 21.20, 19.50, 20.91],
        ['2004-01-28', 99.15, 99.42, 97.28, 97.38, 20.55, 20.82, 20.28, 20.40],
        ['2004-01-29', 98.10, 98.60, 96.55, 98.01, 20.25, 20.27, 19.79, 19.93],
        ['2004-01-30', 98.02, 99.33, 97.84, 99.23, 20.11, 20.89, 20.06, 20.25],
        ['2004-02-02', 99.15, 99.94, 98.50, 99.39, 20.60, 21.10, 20.01, 20.26],
        ['2004-02-03', 99.00, 99.00, 98.95, 99.00, 20.19, 20.35, 19.86, 20.24],
        ['2004-02-04', 99.38, 99.43, 99.30, 99.19, 20.37, 20.40, 19.98, 20.19],
        ['2004-02-05', 99.00, 99.09, 98.26, 98.86, 20.14, 20.24, 19.64, 19.79],
        ['2004-02-06', 98.85, 99.24, 98.25, 98.94, 20.06, 20.07, 19.61, 19.79],
        ['2004-02-09', 99.31, 99.44, 98.60, 98.95, 19.96, 19.99, 19.14, 19.32],
        ['2004-02-10', 98.45, 99.97, 98.41, 99.61, 19.46, 19.64, 19.14, 19.42],
        ['2004-02-11', 99.20, 99.31, 98.80, 99.96, 19.20, 19.73, 19.01, 19.32],
        ['2004-02-12', 99.06, 99.30, 99.30, 99.30, 19.51, 20.06, 19.47, 19.89],
        ['2004-02-13', 99.10, 99.99, 99.08, 99.71, 19.92, 20.00, 19.67, 19.75],
        ['2004-02-17', 99.99, 99.00, 99.32, 99.37, 19.83, 20.23, 19.80, 20.06],
        ['2004-02-18', 99.31, 99.77, 98.15, 98.42, 20.13, 20.50, 19.98, 20.22],
        ['2004-02-19', 98.42, 99.23, 97.52, 97.80, 20.36, 20.60, 20.24, 20.60],
        ['2004-02-20', 98.60, 98.60, 97.19, 97.31, 20.51, 20.74, 20.25, 20.31],
        ['2004-02-23', 97.40, 97.51, 95.46, 95.96, 20.41, 20.69, 20.22, 20.38],
        ['2004-02-24', 95.20, 97.46, 95.20, 96.79, 20.14, 20.23, 19.51, 19.82],
        ['2004-02-25', 96.50, 97.09, 96.23, 96.54, 19.93, 20.17, 19.47, 19.75],
        ['2004-02-26', 96.27, 97.26, 96.25, 96.79, 19.54, 20.45, 19.45, 20.34],
        ['2004-02-27', 96.80, 97.38, 96.10, 96.50, 20.25, 20.60, 20.07, 20.13],
        ['2004-03-01', 96.50, 97.25, 96.15, 97.04, 20.32, 20.63, 20.05, 20.45],
        ['2004-03-02', 97.60, 97.60, 96.62, 96.82, 20.56, 20.94, 20.30, 20.89],
        ['2004-03-03', 96.57, 96.89, 95.60, 96.84, 21.00, 21.50, 20.86, 21.40],
        ['2004-03-04', 96.58, 96.92, 96.13, 96.39, 21.36, 21.98, 21.20, 21.40],
        ['2004-03-05', 95.95, 96.98, 95.56, 96.45, 21.31, 21.76, 21.29, 21.73],
        ['2004-03-08', 96.49, 96.88, 94.59, 94.59, 21.77, 21.90, 21.58, 21.83],
        ['2004-03-09', 94.30, 95.28, 93.77, 94.53, 21.96, 22.31, 21.81, 22.14],
        ['2004-03-10', 94.38, 94.74, 92.68, 93.06, 21.98, 22.32, 21.63, 22.05],
        ['2004-03-11', 92.00, 92.98, 91.15, 91.21, 22.06, 22.32, 21.88, 22.08],
        ['2004-03-12', 92.00, 93.38, 91.68, 93.30, 22.17, 22.62, 22.12, 22.55],
        ['2004-03-15', 92.60, 92.69, 90.88, 91.82, 22.59, 23.26, 22.57, 22.83],
        ['2004-03-16', 92.40, 92.70, 91.42, 92.45, 22.90, 23.38, 22.74, 23.33],
        ['2004-03-17', 92.57, 93.79, 92.45, 93.39, 23.23, 23.54, 23.02, 23.42],
        ['2004-03-18', 93.05, 93.18, 91.90, 92.85, 23.47, 24.11, 23.44, 23.45],
        ['2004-03-19', 92.86, 92.97, 91.51, 91.62, 23.50, 23.82, 23.17, 23.68],
        ['2004-03-22', 91.27, 91.48, 90.28, 91.02, 23.62, 23.69, 23.30, 23.50],
        ['2004-03-23', 91.60, 92.16, 90.68, 91.32, 24.04, 24.34, 23.75, 24.07],
        ['2004-03-24', 91.57, 92.49, 91.04, 91.77, 23.95, 23.95, 23.25, 23.28],
        ['2004-03-25', 92.15, 92.63, 91.45, 92.39, 23.38, 23.66, 23.21, 23.34],
        ['2004-03-26', 92.39, 93.25, 92.16, 92.77, 23.45, 23.75, 23.36, 23.47],
        ['2004-03-29', 92.99, 93.61, 92.18, 92.68, 23.43, 23.92, 23.20, 23.79],
        ['2004-03-30', 92.67, 92.67, 91.35, 92.32, 23.57, 23.69, 23.32, 23.35],
        ['2004-03-31', 92.07, 92.24, 91.51, 91.84, 23.60, 24.03, 23.55, 23.86]
    ]);

    // map the data for the ACME Corp. series
    mapping_acme = table.mapAs();
    mapping_acme.addField('open', 1);
    mapping_acme.addField('high', 2);
    mapping_acme.addField('low', 3);
    mapping_acme.addField('close', 4);

    // map the data for the Globex Corp. series
    mapping_globex = table.mapAs();
    mapping_globex.addField('open', 5);
    mapping_globex.addField('high', 6);
    mapping_globex.addField('low', 7);
    mapping_globex.addField('close', 8);

    // chart type
    var chart = anychart.stock();

    // set the series for ACME
    var series_acme = chart.plot(0).candlestick(mapping_acme);
    series_acme.name("Xylens Corp.");

    // set the series for Globex
    var series_globex = chart.plot(1).candlestick(mapping_globex);
    series_globex.name("Globex Corp.");

    // set the custom colors for Globex series
    series_globex.risingStroke("#336666");
    series_globex.risingFill("#33ff99");
    series_globex.fallingStroke("#660000");
    series_globex.fallingFill("#ff0033");

    // set the custom hatch fillings for ACME series
    series_acme.risingHatchFill("backward-diagonal", "#000", 2);
    series_acme.fallingHatchFill("forward-diagonal", "#000", 2);
    series_acme.risingFill("#fff");
    series_acme.fallingFill("#fff");
    series_acme.risingStroke("#fff");
    series_acme.fallingStroke("#999");

    chart.title('Comparative: Xylens Corp. vs. Globex Corp.');
    chart.background('#00000000');
    chart.container('A001-001Charts');
    $('#A001-001Charts').height('75vh');

    chart.draw();
    startStream(table, chart);
});

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function startStream(table, chart) {
    // set interval of data stream
    let date = new Date('2004-05-1');
    const TPCC = 15;
    let tpc = 0;
    var myVar = setInterval(
        function () {
            if (tpc++ == TPCC) {
                date = date.addDays(tpc=1);
                let nc = [];
                nc.push(table.oc.b[table.oc.b.length - 1].values);
                nc[0][0] = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
                table.addData(nc, table.oc.b.length > 100, 1);
            } else {
                let cc = [];
                cc.push(table.oc.b[table.oc.b.length - 1].values);
                cc[0][1] = Math.random() * 50 + 25;
                table.addData(cc);
            }
        }, 100
    );
}