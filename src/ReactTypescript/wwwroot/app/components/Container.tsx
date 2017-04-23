import * as React from 'react';

export interface ContainerSettings extends React.Props<Container> {
    fullScreen?: boolean;
    refresh?: boolean;
}

export class Container extends React.Component<ContainerSettings, undefined>{
    constructor(props: ContainerSettings) {
        super(props);
        console.log(props);
    }

    render() {
        let padRight = {
            paddingRight: '5px'
        };
        
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">&nbsp;
                    <div className="pull-right">
                        {this.props.refresh && <span style={padRight} className="glyphicon glyphicon-refresh" aria-hidden="true"></span>}
                        {this.props.fullScreen && <span className="glyphicon glyphicon-resize-full" aria-hidden="true"></span>}
                    </div>
                </div>
                <div className="panel-body">
                    fullScreen: {String(this.props.fullScreen)}<br />
                    refresh:{String(this.props.refresh)}
                </div>
            </div>
        )
    }
}