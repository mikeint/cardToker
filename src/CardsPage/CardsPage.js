import './CardsPage.css';

const CardsPage = ({card={}}) => {

    return ( 
        <div className="card">
            <div className="front">
                <section>
                    <div className={'card__topContainer ' + card.strain}>
                        <div className={'card__strain ' + card.strain}>{card.strain}</div>
                        <div className={'card__strain-smtext ' + card.strain}>{card.type}</div>
                        <div className={card.newCheckBtn ? 'card__newItem' : 'card__newItemHide'}>NEW</div>
                       <div
                            className={
                                card.recommendCheckBtn
                                    ? card.newCheckBtn
                                        ? 'card__reccoItem'
                                        : 'card__reccoItem withoutNew'
                                    : 'card__reccoItemHide'
                            }
                        >
                            STAFF PICK
                        </div>
                    </div>
                    <div className="card__bottomContainer">
                        <div className="card__name">{card.name}</div>
                        {card.nameCross ? <div className="card__nameCross">{card.nameCross}</div> : null}
                        {card.type === "Vape" ?<div className="card__nameVape">510 Thread Cartridge</div> : ''}

                        <div className="card__values-container">
                            <div className={'card__values-thc ' + card.strain}>
                                <div className="card__values-thc-name">THC</div>
                                <div className="card__values-thc-value">{card.thc}</div>
                            </div>
                            <div className={'card__values-cbd ' + card.strain}>
                                <div className="card__values-thc-name">CBD</div>
                                <div className="card__values-thc-value">{card.cbd}</div>
                            </div>
                        </div>
                        <div className="card__description">{card.description}</div>
                        {card.company_image_new ? (
                            <div className="card__image">
                                <img className="imgStyle" src={card.company_image_new} alt={'preview'} />
                            </div>
                        ) : (
                            ''
                        )}
                        <div className="card__price-container">
                            <div className="card__grams">{card.amount}</div>
                            <div className={card.saleItem ? 'card__priceYellow' : 'card__price'}>${card.price}</div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default CardsPage;
