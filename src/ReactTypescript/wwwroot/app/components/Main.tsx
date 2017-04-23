import * as React from "react";
import { Container, ContainerSettings } from './Container';

export class Main extends React.Component<any, any>{
    constructor() {
        super();

        this.state = {
        fullScreen:false
        }
    }

    componentDidMount() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', 'http://localhost:3798/components/grid.json', true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            console.log(data);

            this.setState({
                fullScreen: data.generalFeatures.fullScreen,
                refresh: data.generalFeatures.manualRefresh
            });

            console.log(this.state);

        }.bind(this);
        xhr.send();
    }

    render() {
        

        return (
            <div className="row">
                <div className="col-md-4">
                    <Container
                        fullScreen={this.state.fullScreen}
                        refresh={this.state.refresh}>
                        <div>hello ffrom container</div>
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