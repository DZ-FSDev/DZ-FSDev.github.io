anychart.onDocumentReady(function () {
    let data = localStorage.getItem('preatorian');
    // set the data
    table = anychart.data.table();
    table.addData(data != null ? JSON.parse(data) :
        [
        ['2004-01-04', 500, 500, 500, 500, 700, 700, 700, 700]
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

const TPCC = 100;
var tpc = 0;
var date;

function startStream(table, chart) {
    // set interval of data stream
    date = new Date(table.oc.b[table.oc.b.length - 1].values[0]);

    let r = function () {
        if (tpc++ == TPCC) {
            date = date.addDays(tpc = 1);
            let nc = [];
            nc.push(table.oc.b[table.oc.b.length - 1].values.slice());
            nc[0][0] = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
            nc[0][1] = nc[0][2] = nc[0][3] = Math.random() < 0.1 ? (nc[0][4] = (Math.random() < 0.5 ? 0.98 : 1.02) * nc[0][4]) : nc[0][4];
            nc[0][5] = nc[0][6] = nc[0][7] = Math.random() < 0.05 ? (nc[0][8] = (Math.random() < 0.5 ? 0.97 : 1.03) * nc[0][8]) : nc[0][8];
            table.addData(nc, table.oc.b.length > 150, 1);

            let cDat = [];
            table.oc.b.forEach(v => cDat.push(v.values));

            localStorage.setItem('preatorian', JSON.stringify(cDat));
        } else {
            let cc = [];
            cc.push(table.oc.b[table.oc.b.length - 1].values);
            cc[0][4] = (table.oc.b[table.oc.b.length - 1].values[1] * (Math.floor(cc[0][1])%13==0?0.98:1.001) + 2
                + Math.random() * 2.2 * Math.sin(Date.now() / 37000)
                + Math.random() * 2.3 * Math.sin(Date.now() / 47000)
                + Math.random() * 2.4 * Math.sin(Date.now() / 57000)
                + Math.random() * 2.5 * Math.sin(Date.now() / 67000)
                + Math.max(Math.min(Math.tan(Date.now() / 730000),0.1),-0.1)
                + Math.random() * 5 * Math.sin(Date.now() / 350)
                + 3 * Math.sin(Date.now() / 5700)
                + Math.random() * Math.pow(Math.cos(Date.now() / 157000), 7) * 10
            ).toFixed(2);
            cc[0][2] = Math.max(cc[0][4], cc[0][2]).toFixed(2);
            cc[0][3] = Math.min(cc[0][4], cc[0][3]).toFixed(2);

            cc[0][8] = (table.oc.b[table.oc.b.length - 1].values[5] * (Math.floor(cc[0][5])%13==0?0.97:1.002) + 2
                + Math.random() * 2.2 * Math.cos(Date.now() / 37000)
                + Math.random() * 2.3 * Math.cos(Date.now() / 47000)
                + Math.random() * 2.4 * Math.cos(Date.now() / 57000)
                + Math.random() * 2.5 * Math.cos(Date.now() / 67000)
                + Math.max(Math.min(Math.tan(Date.now() / 810000),0.15),-0.15)
                + Math.random() * 5 * Math.cos(Date.now() / 300)
                + 3 * Math.cos(Date.now() / 5700)
                + Math.random() * Math.pow(Math.sin(Date.now() / 157000), 7) * 5
            ).toFixed(2);
            cc[0][6] = Math.max(cc[0][8], cc[0][6]).toFixed(2);
            cc[0][7] = Math.min(cc[0][8], cc[0][7]).toFixed(2);
            table.addData(cc);
        }
        window.requestAnimationFrame(r);
    };

    window.requestAnimationFrame(r);
}

$().ready(
    () => setTimeout(() => location.reload(), 90000)
);

function clearStorage() {
    localStorage.clear();
}