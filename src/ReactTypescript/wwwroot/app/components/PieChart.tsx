import * as React from 'react';

export class PieChart extends React.Component<any, any>{
    chart: any;

    componentDidMount() {

        var that = this;
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.settings.dataSource.url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var result = JSON.parse(this.responseText);

                let data = result.map(function (elem) {
                    return {
                        name: elem.year,
                        y: elem.value
                    };
                });

                that.chart = (window as any).Highcharts.chart('container', {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie'
                    },
                    title: {
                        text: that.props.settings.caption
                    },
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: data
                    }]
                });
            }
        };

        xhr.send();

        //this.chart = new Highcharts[this.props.type || "Chart"](
        //    this.props.container,
        //    this.props.options
        //);
    }

    render() {
        return (
            <div id="container"></div>
        )
    }
}