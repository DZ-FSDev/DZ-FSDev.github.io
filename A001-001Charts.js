anychart.onDocumentReady(function () {
    let data = localStorage.getItem('preatorian');
    // set the data
    table = anychart.data.table();
    table.addData(data != null ? JSON.parse(data) :
        [['2004-01-02', 92.86, 93.05, 91.20, 91.55, 18.23, 19.36, 18.18, 19.31],
        ['2004-01-05', 92.00, 93.09, 92.00, 93.05, 19.50, 19.89, 19.00, 19.29]
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
    let date = new Date(table.oc.b[table.oc.b.length - 1].values[0]);
    date.setMonth(date.getMonth()+1);
    const TPCC = 50;
    let tpc = 0;
    var myVar = setInterval(
        function () {
            if (tpc++ == TPCC) {
                date = date.addDays(tpc=1);
                let nc = [];
                nc.push(table.oc.b[table.oc.b.length - 1].values.slice());
                nc[0][0] = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
                nc[0][1] = nc[0][2] = nc[0][3] = nc[0][4];
                nc[0][5] = nc[0][6] = nc[0][7] = nc[0][8];
                table.addData(nc, table.oc.b.length > 100, 1);

                let cDat = [];
                table.oc.b.forEach(v=>cDat.push(v.values));

                localStorage.setItem('preatorian', JSON.stringify(cDat));
            } else {
                let cc = [];
                cc.push(table.oc.b[table.oc.b.length - 1].values);
                cc[0][4] = (table.oc.b[table.oc.b.length - 1].values[1] * 1.001 + 0.01
                    + Math.random() * 1.2 * Math.sin(Date.now()/19000)
                    + Math.random() * 1.3 * Math.sin(Date.now()/23000)
                    + Math.random() * 1.4 * Math.sin(Date.now()/31000)
                    + Math.random() * 1.5 * Math.sin(Date.now()/37000)
                    + Math.random() * 2 * Math.sin(Date.now()/200)
                    + 3 * Math.sin(Date.now()/5700)
                    + Math.random() * Math.pow(Math.cos(Date.now()/157000),7) * 10
                    ).toFixed(2);
                cc[0][2] = Math.max(cc[0][4], cc[0][2]).toFixed(2);
                cc[0][3] = Math.min(cc[0][4], cc[0][3]).toFixed(2);

                cc[0][8] = (table.oc.b[table.oc.b.length - 1].values[5] * 1.002 + 0.01
                    + Math.random() * 1.2 * Math.cos(Date.now()/19000)
                    + Math.random() * 1.3 * Math.cos(Date.now()/23000)
                    + Math.random() * 1.4 * Math.cos(Date.now()/31000)
                    + Math.random() * 1.5 * Math.cos(Date.now()/37000)
                    + Math.random() * 2 * Math.cos(Date.now()/200)
                    + 3 * Math.cos(Date.now()/5700)
                    + Math.random() * Math.pow(Math.sin(Date.now()/157000),7) * 10
                    ).toFixed(2);
                cc[0][6] = Math.max(cc[0][8], cc[0][6]).toFixed(2);
                cc[0][7] = Math.min(cc[0][8], cc[0][7]).toFixed(2);
                table.addData(cc);
            }
        }, 100
    );
}

function clearStorage(){
    localStorage.clear();
}