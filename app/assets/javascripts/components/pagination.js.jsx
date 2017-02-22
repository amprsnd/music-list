class Pagination extends React.Component {
    render() {
        return (
            <div className="c-pagination">
                <div className="c-pagination__controls c-pagination__controls--backward">
                    <button className="c-pagination__control">«</button>
                    <button className="c-pagination__control">‹</button>
                </div>
                <div className="c-pagination__controls">
                    <button className="c-pagination__page">1</button>
                    <button className="c-pagination__page c-pagination__page--current">2</button>
                    <button className="c-pagination__page">3</button>
                </div>
                <div className="c-pagination__controls c-pagination__controls--forward">
                    <button className="c-pagination__control">›</button>
                    <button className="c-pagination__control">»</button>
                </div>
            </div>
        );
    }
}
