import * as React from "react";
import { Container, ContainerSettings } from './Container';
import { Grid } from './Grid';

export class CustomComponent extends React.Component<any, any>{
    render() {
        if (this.props.settings.type === "grid") {
            return <Grid shouldRefresh={this.props.shouldRefresh} settings={this.props.settings} />
        }
        else if (this.props.settings.type === "chart") {
            return <div>chart</div>
        }
        else {
            return <div />
        }
    }
}