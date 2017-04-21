import * as React from "react";

export class Main extends React.Component<undefined, undefined>{
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
                <div className="panel panel-default">
                    <div className="panel-body">
                        Basic panel example
                    </div>
                </div>
            </div>
        )
    }
}