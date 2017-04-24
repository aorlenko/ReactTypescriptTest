import * as React from "react";

class GridItems extends React.Component<any, any>{
    render() {
        const listItems = this.props.products.map((product: any, index: number) =>
            <tr key={index}>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.inStock ?
                    <span className="label label-primary">In stock</span> :
                    <span className="label label-default">Not available</span>}</td>
            </tr>
        );

        return (
            <tbody>
                {listItems}
            </tbody>
        )
    }
}

class GridHeader extends React.Component<any, any>{
    render() {
        const headerItems = this.props.propertyNames.map((name: any, index: number) =>
            <th key={index}>{name}</th>
        );

        return (
            <tr>
                {headerItems}
            </tr>
        )
    }
}

export class Grid extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        if (!this.props.settings.dataSource) return;
        this.loadProducts();
    }

    loadProducts() {
        this.setState({ isLoading: true });
        var that = this;
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.settings.dataSource.url, true);
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var result = JSON.parse(this.responseText);
                that.setState({
                    products: result,
                    isLoading: false
                })
            }
        };

        xhr.send();
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.shouldRefresh) {
            this.loadProducts();
        }
    }

    render() {
        let loadingProgress = null;
        let grid = null;

        if (this.state.isLoading)
            loadingProgress = <div className="loader-parent"><div className="loader"></div></div>;
        else
            grid =
                <table className="table">
                    <caption>{this.props.settings.caption}</caption>
                    <thead>
                        <GridHeader propertyNames={this.props.settings.dataSource.objectProperties} />
                    </thead>
                    <GridItems products={this.state.products} />
                </table>;

        return (
            <div>
                {loadingProgress}
                {grid}
            </div>
        )
    }
}