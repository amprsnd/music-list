class PerPage extends React.Component {
    /*
    constructor() {
        super();
        this.state = {
            perPage: 10
        };
    }
    */

    render() {
        return (
            <span className="c-input-group">
                <button className="c-button c-button--brand">10</button>
                <button className="c-button">25</button>
                <button className="c-button">50</button>
                <button className="c-button">100</button>
            </span>
        );
    }
}
