/*  Original Licensing Copyright
 * 
 *  Copyright (C) 2022  DZ-FSDev
 *  
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

anychart.onDocumentReady(function () {
    var data = [
        { "x": "Mandarin Chinese", "value": 1090000000, category: "Sino-Tibetan" },
        { "x": "English", "value": 983000000, category: "Indo-European" },
        { "x": "Hindustani", "value": 544000000, category: "Indo-European" },
        { "x": "Spanish", "value": 527000000, category: "Indo-European" },
        { "x": "Arabic", "value": 422000000, category: "Afro-Asiatic" },
        { "x": "Malay", "value": 281000000, category: "Austronesian" },
        { "x": "Russian", "value": 267000000, category: "Indo-European" },
        { "x": "Bengali", "value": 261000000, category: "Indo-European" },
        { "x": "Portuguese", "value": 229000000, category: "Indo-European" },
        { "x": "French", "value": 229000000, category: "Indo-European" },
        { "x": "Hausa", "value": 150000000, category: "Afro-Asiatic" },
        { "x": "Punjabi", "value": 148000000, category: "Indo-European" },
        { "x": "Japanese", "value": 129000000, category: "Japonic" },
        { "x": "German", "value": 129000000, category: "Indo-European" },
        { "x": "Persian", "value": 121000000, category: "Indo-European" }
    ];

    // create a tag (word) cloud chart
    var chart = anychart.tagCloud(data);

    // set an array of angles at which the words will be laid out
    chart.angles([0])
    // enable a color range
    chart.colorRange(true);
    // set the color range length
    chart.colorRange().length('80%');

    // display the word cloud chart
    chart.container("langCloudContainer");
    chart.draw();
});

anychart.onDocumentReady(function () {
    anychart.data.loadJsonFile('https://gist.githubusercontent.com/shacheeswadia/17dc3b3d4ac9b63ac5ac6833944f3a94/raw/07c4bec103d22ec2824453a33d41868fd476db3d/dataPackedCircles.json',
        function (data) {

            // add data
            var treeData = anychart.data.tree(data, 'as-table');

            // create a circle packing chart instance
            var chart = anychart.circlePacking(treeData);

            // draw
            chart.container('songGenreContainer');
            chart.draw();

        }
    );
});

anychart.onDocumentReady(function () {
    // load the json file
    anychart.data.loadJsonFile(
        'https://gist.githubusercontent.com/shacheeswadia/56f3867eb6f8fcc4532e7ac458c8d9f7/raw/702f30b457cc1b573093c6977a69958fb741ede6/calendarData.json',

        // create a function with the data parameter
        function (data) {

            // define a dataset variable to store the data
            var dataset = anychart.data.set(data);
            // map the data
            var mapping = dataset.mapAs({
                x: 'date',
                value: 'level'
            });

            // pass the mapped data to the calendar function
            var chart = anychart.calendar(mapping);

            // draw
            chart.container('contribContainer');
            chart.draw();
        }

    );
});

anychart.onDocumentReady(function () {
    var stage = acgraph.create('container');

    $('#container').append(
        '<div class="seat-map-title">' +
        '<h1>Boeing 737</h1>' +
        '<p>Source <a href="https://cdn.anychart.com/svg-data/seat-map/boeing_737.svg"' +
        'target="_blank">SVG Image</a></p></div>'
    );

    // get svg file
    $.ajax({
        type: 'GET',
        url: 'https://cdn.anychart.com/svg-data/seat-map/boeing_737.svg',
        // The data that have been used for this sample can be taken from the CDN
        // load SVG image using jQuery ajax
        success: function (svgData) {
            // data for creating a SeatMap
            // from the CDN https://cdn.anychart.com/csv-data/boeing_737.js to data file
            var data = boeingData();
            var chart = anychart.seatMap(data);
            // set svg data,
            chart.geoData(svgData);
            chart
                .padding([105, 0, 20, 0])
                // load svg-file how it looked(colors stroke/fill except
                // for elements of series)
                .unboundRegions('as-is');

            var series = chart.getSeries(0);
            // sets fill series
            series
                .fill(function () {
                    var attrs = this.attributes;

                    return attrs ? attrs.fill : this.sourceColor;
                })
                // sets stroke series
                .stroke(function () {
                    var attrs = this.attributes;

                    return attrs ? attrs.stroke : this.sourceColor;
                });

            // sets fill on hover series and select series
            series.hovered().fill(returnColorHoverAndSelect);
            series.selected().fill(returnColorHoverAndSelect);

            // Create chart tooltip own title
            series.tooltip().titleFormat('Place');

            // Create chart tooltip own text
            series.tooltip().format('{%Id}');

            // create label zoom
            var zoomLabel = chart.label(0);
            zoomLabel
                .text('2x Zoom.')
                .background('#9E9E9E')
                .fontColor('#fff')
                .padding(5)
                .position('center-top')
                .offsetX(5)
                .offsetY(60);

            zoomLabel.listen('click', function () {
                // zoom map in 2 times
                chart.zoom(2);
            });

            // set color for label hover
            zoomLabel.listen('mouseOver', mouseOverLabel);
            zoomLabel.listen('mouseOut', mouseOutLabel);

            // create label zoom to
            var zoomToLabel = chart.label(1);
            zoomToLabel
                .text('1x Zoom.')
                .background('#9E9E9E')
                .fontColor('#fff')
                .position('center-top')
                .padding(5)
                .offsetX(-75)
                .offsetY(60);

            zoomToLabel.listen('click', function () {
                // zoomTo map
                chart.zoomTo(1);
            });

            // set color for label hover
            zoomToLabel.listen('mouseOver', mouseOverLabel);
            zoomToLabel.listen('mouseOut', mouseOutLabel);

            // label hover info
            var labelHoverPlaceInfo = chart.label(2);
            var labelHoverPlaceInfoFormat =
                '<span style="color: #545f69; font-size: 14px">' +
                '<b>Class</b>: %s<br/><b>Place</b>: %s<br/><b>Price</b>: %s</span>';
            labelHoverPlaceInfo
                .useHtml(true)
                .padding(10)
                .hAlign('left')
                .position('right-top')
                .anchor('right-top')
                .offsetY(85)
                .offsetX(20)
                .width(250);
            labelHoverPlaceInfo.background({
                fill: '#FCFCFC',
                stroke: '#E1E1E1',
                corners: 3,
                cornerType: 'ROUND'
            });
            labelHoverPlaceInfo.text(
                anychart.format.subs(labelHoverPlaceInfoFormat, '-', '-', '0')
            );

            // label select info
            var labelSelectPlace = chart.label(3);
            var labelSelectPlaceFormat =
                '<span style="color: #545f69; font-size: 14px">' +
                '<b>Seat Reservation<br/></b><b>Places</b>: %s<br/><b>Total Price</b>: %s</span>';
            labelSelectPlace
                .useHtml(true)
                .padding(10)
                .hAlign('left')
                .position('right-top')
                .anchor('right-top')
                .offsetY(160)
                .offsetX(20)
                .width(250);
            labelSelectPlace.background({
                fill: '#FCFCFC',
                stroke: '#E1E1E1',
                corners: 3,
                cornerType: 'ROUND'
            });
            labelSelectPlace.text(
                anychart.format.subs(labelSelectPlaceFormat, '-', '0')
            );

            // label info
            var labelInfo = chart.label(4);
            labelInfo
                .useHtml(true)
                .padding(10)
                .hAlign('left')
                .position('left-top')
                .anchor('left-top')
                .offsetY(85)
                .offsetX(20)
                .width(270);
            labelInfo.background({
                fill: '#FCFCFC',
                stroke: '#E1E1E1',
                corners: 3,
                cornerType: 'ROUND'
            });
            labelInfo
                .text(
                    '<span style="color: #545f69; font-size: 14px"><b>Please select a location.' +
                    '</b><br><br>You can do this by clicking on the<br>desired location , so you can select' +
                    '<br>multiple locations with the aid<br>of a combination of keys:<br><b><i>shift/ctrl' +
                    ' + target place</i></b>.</span>'
                )
                .useHtml(true);

            // add pointsHover listener to get hovered place info
            chart.listen('pointsHover', function (point) {
                var placeInfo;
                if (point.seriesStatus[0].points[0] !== undefined) {
                    placeInfo = placeInfoFunc(point.seriesStatus[0].points[0].id);
                    labelHoverPlaceInfo.text(
                        anychart.format.subs(
                            labelHoverPlaceInfoFormat,
                            placeInfo.class,
                            placeInfo.place,
                            placeInfo.price
                        )
                    );
                }
            });

            // add pointsSelect listener to get select place info
            chart.listen('pointsSelect', function (points) {
                var placesInfo = points.seriesStatus[0].points;
                var placesId = [];
                var totalPrice = 0;

                if (chart.getSelectedPoints().length) {
                    for (var i = 0; i < placesInfo.length; i++) {
                        placesId.push(points.seriesStatus[0].points[i].id);
                        totalPrice += parseInt(
                            placeInfoFunc(points.seriesStatus[0].points[i].id).price
                        );
                    }

                    totalPrice += '$';

                    labelSelectPlace
                        .text(
                            anychart.format.subs(
                                labelSelectPlaceFormat,
                                placesId,
                                totalPrice
                            )
                        )
                        .background({
                            fill: '#E5EEF5'
                        });
                }
            });

            // add chartClick listener to reset labelSelectPlace values
            chart.listen('click', function () {
                if (chart.getSelectedPoints().length === 0) {
                    labelSelectPlace.background({
                        fill: '#FCFCFC'
                    });
                    labelHoverPlaceInfo.text(
                        anychart.format.subs(labelHoverPlaceInfoFormat, '-', '-', '0')
                    );
                    labelSelectPlace.text(
                        anychart.format.subs(labelSelectPlaceFormat, '-', '0')
                    );
                }
            });

            // set container id for the chart
            chart.container('boeingContainer');
            // initiate chart drawing
            chart.draw();
        }
    });
});

function returnColorHoverAndSelect() {
    return '#64b5f6';
}

function mouseOverLabel() {
    this.background(anychart.color.darken('#9E9E9E', 0.35));
}

function mouseOutLabel() {
    this.background('#9E9E9E');
}

function placeInfoFunc(id) {
    var ECONOM_PLUS_ROW_MIN = 21;
    var regBusinessClass = /[1-3]{1}-(A|B|E|F)/;
    var regeconomClass = /([7-9]{1}|[0-9]{2})-(A|B|C|D|E|F)/;

    var businessClass = id.match(regBusinessClass)
        ? id.match(regBusinessClass)[0]
        : false;
    var economPlusClass =
        id.match(regeconomClass) &&
            id.match(regeconomClass)[1] <= ECONOM_PLUS_ROW_MIN
            ? id.match(regeconomClass)[0]
            : false;
    var economClass =
        id.match(regeconomClass) &&
            id.match(regeconomClass)[1] > ECONOM_PLUS_ROW_MIN
            ? id.match(regeconomClass)[0]
            : false;

    switch (id) {
        case businessClass:
            return {
                place: id,
                class: 'Business Class',
                price: '350$'
            };
        case economPlusClass:
            return {
                place: id,
                class: 'Econom-Plus Class',
                price: '250$'
            };
        case economClass:
            return {
                place: id,
                class: 'Econom Class',
                price: '150$'
            };
        default:
    }
}