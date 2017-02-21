class Filter extends React.Component {
    render() {
        return (
            <div>
                <h3 className="c-heading">Фильтр</h3>
                <div className="c-card">
                    <div className="c-card__item c-card__item--brand o-media">
                        <div className="o-media__body">
                            <h2 className="c-heading">Исполнитель</h2>
                            <p className="c-paragraph">
                                <select className="c-field">
                                    <option>Все</option>
                                    <option>Первый</option>
                                    <option>Последний</option>
                                </select>
                            </p>
                        </div>
                    </div>
                    <div className="c-card__item c-card__item--brand o-media">
                        <div className="o-media__body">
                            <h2 className="c-heading">Жанр</h2>
                            <p className="c-paragraph">
                                <select className="c-field">
                                    <option>Все</option>
                                    <option>Первый</option>
                                    <option>Последний</option>
                                </select>
                            </p>
                        </div>
                    </div>
                    <div className="c-card__item c-card__item--brand o-media">
                        <div className="o-media__body">
                            <h2 className="c-heading">Год</h2>
                            <p className="c-paragraph">
                                <select className="c-field">
                                    <option>Все</option>
                                    <option>Первый</option>
                                    <option>Последний</option>
                                </select>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
