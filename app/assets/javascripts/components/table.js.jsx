class Table extends React.Component {
    render() {
        return (
            <div>
                <h3 className="c-heading">Плейлист</h3>
                <table className="c-table c-table--striped">
                    <thead className="c-table__head">
                    <tr className="c-table__row c-table__row--heading">
                        <th className="c-table__cell">Исполнитель</th>
                        <th className="c-table__cell">Песня</th>
                        <th className="c-table__cell">Жанр</th>
                        <th className="c-table__cell">Год</th>
                    </tr>
                    </thead>
                    <tbody className="c-table__body">
                    <tr className="c-table__row">
                        <td className="c-table__cell">Name</td>
                        <td className="c-table__cell">Song</td>
                        <td className="c-table__cell">genre</td>
                        <td className="c-table__cell">year</td>
                    </tr>
                    <tr className="c-table__row">
                        <td className="c-table__cell">Name</td>
                        <td className="c-table__cell">Song</td>
                        <td className="c-table__cell">genre</td>
                        <td className="c-table__cell">year</td>
                    </tr>
                    <tr className="c-table__row">
                        <td className="c-table__cell">Name</td>
                        <td className="c-table__cell">Song</td>
                        <td className="c-table__cell">genre</td>
                        <td className="c-table__cell">year</td>
                    </tr>
                    <tr className="c-table__row">
                        <td className="c-table__cell">Name</td>
                        <td className="c-table__cell">Song</td>
                        <td className="c-table__cell">genre</td>
                        <td className="c-table__cell">year</td>
                    </tr>
                    <tr className="c-table__row">
                        <td className="c-table__cell">Name</td>
                        <td className="c-table__cell">Song</td>
                        <td className="c-table__cell">genre</td>
                        <td className="c-table__cell">year</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
