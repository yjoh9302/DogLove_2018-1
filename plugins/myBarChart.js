export default function(elementName){
    var container = document.getElementById(elementName);
    var data = {
        categories: ['2012', '2014', '2016', '2018', '2018'],
        series: [{
            name : '시장 규모 (억원)',
            data : [9000, 14000, 23000, 37000, 58000]
        }]
    };
    tui.chart.barChart(container, data);
};