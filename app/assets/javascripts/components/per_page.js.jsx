class PerPage extends React.Component {
    /*
    constructor() {
        super();
        this.state = {
            perPage: 10
        };
    }
    */
    const pagesSets = [10, 25, 50, 100];

    setPerPage() {
        console.log('set PerPage');
    }

    render() {
        return (
            <span className="c-input-group">
                <button className="c-button c-button--brand" onClick={this.setPerPage}>10</button>
                <button className="c-button" onClick={this.setPerPage}>25</button>
                <button className="c-button" onClick={this.setPerPage}>50</button>
                <button className="c-button" onClick={this.setPerPage}>100</button>
            </span>
        );
    }
}
