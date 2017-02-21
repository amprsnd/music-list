function Row(props) {
    return (
        <tr className="c-table__row">
            <td className="c-table__cell">{props.artist}</td>
            <td className="c-table__cell">{props.title}</td>
            <td className="c-table__cell">{props.genre}</td>
            <td className="c-table__cell">{props.year}</td>
        </tr>
    );
}

class Table extends React.Component {
    render() {
        return (
            <div>
                <h3 className="c-heading">Плейлист</h3>
                <table className="c-table c-table--striped">
                    <thead className="c-table__head">
                    <tr className="c-table__row c-table__row--heading">
                        <th className="c-table__cell">Исполнитель <a href="#" className="arrow up hide">&#8613;</a> <a href="#" className="arrow down">&#8615;</a></th>
                        <th className="c-table__cell">Песня <a href="#" className="arrow up hide">&#8613;</a> <a href="#" className="arrow down">&#8615;</a></th>
                        <th className="c-table__cell">Жанр <a href="#" className="arrow up hide">&#8613;</a> <a href="#" className="arrow down">&#8615;</a></th>
                        <th className="c-table__cell">Год <a href="#" className="arrow up hide">&#8613;</a> <a href="#" className="arrow down">&#8615;</a></th>
                    </tr>
                    </thead>
                    <tbody className="c-table__body">
                        <Row artist="Name" title="Title" genre="Genre" year="Year" />
                        <Row artist="Name" title="Title" genre="Genre" year="Year" />
                        <Row artist="Name" title="Title" genre="Genre" year="Year" />
                        <Row artist="Name" title="Title" genre="Genre" year="Year" />
                        <Row artist="Name" title="Title" genre="Genre" year="Year" />
                        <Row artist="Name" title="Title" genre="Genre" year="Year" />
                        <Row artist="Name" title="Title" genre="Genre" year="Year" />
                        <Row artist="Name" title="Title" genre="Genre" year="Year" />
                        <Row artist="Name" title="Title" genre="Genre" year="Year" />
                        <Row artist="Name" title="Title" genre="Genre" year="Year" />
                    </tbody>
                </table>
            </div>
        );
    }
}
