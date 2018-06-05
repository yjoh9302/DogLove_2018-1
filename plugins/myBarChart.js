export default function(elementName){
    var container = document.getElementById(elementName);
    var data = {
        categories: ['June', 'July', 'Aug', 'Sep', 'Oct', 'Nov'],
        series: [
            {
                name: 'Budget',
                data: [5000, 3000, 5000, 7000, 6000, 4000]
            },
            {
                name: 'Income',
                data: [8000, 1000, 7000, 2000, 5000, 3000]
            }]
    };
    tui.chart.barChart(container, data, options);
};