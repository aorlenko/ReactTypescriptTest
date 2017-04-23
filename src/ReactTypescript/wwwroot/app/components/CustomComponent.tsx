import * as React from "react";
import { Container, ContainerSettings } from './Container';
import { Grid } from './Grid';
import { PieChart } from './PieChart';

export class CustomComponent extends React.Component<any, any>{
    render() {
        if (this.props.settings.type === "grid") {
            return <Grid shouldRefresh={this.props.shouldRefresh} settings={this.props.settings} />
        }
        else if (this.props.settings.type === "pieChart") {
            return <PieChart settings={this.props.settings} />
        }
        else {
            return <div />
        }
    }
}