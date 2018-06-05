<template>
    <section class="section">
        <article class="hero is-info">
            <div class="hero-body">
                <h1 class="title">애견 통계</h1>
            </div>
        </article>
        <article class="message">
            <div class="message-header">애견 산업 전망

            </div>
            <div class="message-body">
                <div id="charArea"></div>
            </div>
        </article>
    </section>
</template>

<script>
    // import myBarChart from '~/plugins/myBarChart';
    // export default{
    //     mounted(){
    //         if(process.client)myBarChart('chartArea');
    
    //     }
    // }
    if (process.client) {
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
    tui.chart.barChart(container, data,);

    }
</script>