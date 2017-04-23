import * as React from "react";
import { Container, ContainerSettings } from './Container';
import { CustomComponent } from './CustomComponent';

export class Main extends React.Component<any, any>{
    constructor() {
        super();

        this.state = {
            settings: {
                generalFeatures: {}
            }
        }
    }

    componentDidMount() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'http://localhost:3798/components/grid.json', true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);

            this.setState({
                fullScreen: data.generalFeatures.fullScreen,
                refresh: data.generalFeatures.manualRefresh,
                settings: data
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
                        settings={this.state.settings}
                        onRefreshCallback={this.onRefresh.bind(this)}>

                        <CustomComponent
                            settings={this.state.settings}
                            shouldRefresh={this.state.shouldRefresh} />

                    </Container>
                </div>
                <div className="col-md-4">
                    2
                </div>
                <div className="col-md-4">
                    3
                </div>
            </div>
        )
    }
}