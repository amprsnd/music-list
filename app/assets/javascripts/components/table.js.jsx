
function Head(props) {

    return (
        <th className="c-table__cell">
            {props.title}
            <a href="#" className={`arrow ${props.sort}`} onClick={props.click}></a>
        </th>
    )
}

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

    constructor(props) {
        super(props);
        this.state = {
            sortBy: 'artist', //title, genre, year
            sortMethod: 'ASC' //DESC
        };

        this.sortTable = this.sortTable.bind(this)

    }

    sortTable(e) {
        e.preventDefault();
        console.log('SORT');
    }

    render() {
        return (
            <div>
                <h3 className="c-heading">Плейлист</h3>
                <table className="c-table c-table--striped">
                    <thead className="c-table__head">
                    <tr className="c-table__row c-table__row--heading">
                        <Head title="Исполнитель" slug="artist" sort="ASC" click={(e) => this.sortTable(e)} />
                        <Head title="Песня" slug="song"         sort="ASC" click={(e) => this.sortTable(e)} />
                        <Head title="Жанр" slug="genre"         sort="ASC" click={(e) => this.sortTable(e)} />
                        <Head title="Год" slug="year"           sort="ASC" click={(e) => this.sortTable(e)} />
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
