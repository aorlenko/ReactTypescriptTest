import * as React from "react";
import { Container, ContainerSettings } from './Container';
import { CustomComponent } from './CustomComponent';

export class Main extends React.Component<any, any>{
    constructor() {
        super();

        this.state = {
            component1Settings: {
            },
            component2Settings: {
            }
        }
    }

    componentDidMount() {
        this.loadComponent1();
        this.loadComponent2();
    }

    loadComponent1() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'http://localhost:3798/components/grid.json', true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);

            this.setState({
                component1Settings: data
            });

        }.bind(this);
        xhr.send();
    }

    loadComponent2() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'http://localhost:3798/components/pieChart.json', true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);

            this.setState({
                component2Settings: data
            });
        }.bind(this);
        xhr.send();
    }

    onRefresh(e: any) {
        e.preventDefault();
        this.setState({
            shouldRefresh: true
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <Container
                        settings={this.state.component1Settings}
                        onRefreshCallback={this.onRefresh.bind(this)}>

                        <CustomComponent
                            settings={this.state.component1Settings}
                            shouldRefresh={this.state.shouldRefresh} />

                    </Container>
                </div>
                <div className="col-md-4">
                    <Container settings={this.state.component2Settings}>
                        <CustomComponent settings={this.state.component2Settings} />
                    </Container>
                </div>
                <div className="col-md-4">
                    <div className="panel panel-primary">
                        <div className="panel-heading">&nbsp;
                        </div>
                        <div className="panel-body">
                            3-rd component
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}