class Pagination extends React.Component {
    render() {
        return (
            <div className="c-pagination">
                <div className="c-pagination__controls c-pagination__controls--backward">
                    <button className="c-pagination__control">«</button>
                    <button className="c-pagination__control">‹</button>
                </div>
                <div className="c-pagination__controls">
                    <span className="c-pagination__ellipsis">…</span>
                    <button className="c-pagination__page">4</button>
                    <button className="c-pagination__page c-pagination__page--current">5</button>
                    <button className="c-pagination__page">6</button>
                    <span className="c-pagination__ellipsis">…</span>
                </div>
                <div className="c-pagination__controls c-pagination__controls--forward">
                    <button className="c-pagination__control">›</button>
                    <button className="c-pagination__control">»</button>
                </div>
            </div>
        );
    }
}
