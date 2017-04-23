import * as React from 'react';

export interface ContainerSettings extends React.Props<any> {
    fullScreen?: boolean;
    refresh?: boolean;
    settings?: any;
}

export class Container extends React.Component<any, undefined>{
    constructor(props: ContainerSettings) {
        super(props);
        console.log(props);
    }

    onRefresh(e:any) {
        e.preventDefault;
        this.forceUpdate();
    }

    render() {
        if (!this.props.settings || !this.props.settings.position) {
            return (<div></div>)
        }

        let toolbarBtnCss = {
            paddingRight: '5px',
            cursor: 'pointer'
        };
        console.log(this.props)
        let containerHeightCss = {
            height: this.props.settings.position.height + 'px'
        };

        return (
            <div className="panel panel-primary" style={containerHeightCss}>
                <div className="panel-heading">&nbsp;
                    <div className="pull-right">
                        {this.props.settings.generalFeatures.manualRefresh
                            && <span style={toolbarBtnCss} onClick={this.props.onRefreshCallback} className="glyphicon glyphicon-refresh" aria-hidden="true"></span>}
                        {this.props.settings.generalFeatures.fullScreen
                            && <span style={toolbarBtnCss} className="glyphicon glyphicon-resize-full" aria-hidden="true"></span>}
                    </div>
                </div>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}