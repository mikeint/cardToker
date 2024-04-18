import { useEffect, useState } from "react";
import './AddCard.css';

const AddCard = ({ onDataChange }) => {

    const [state, setState] = useState({
        strain: '',
        type: '',
        name: '',
        nameCross: '',
        thc: '',
        cbd: '',
        description: '',
        amount: '',
        price: '',
        data_id: '',
        thumbnail: '',
        isTypeVape: '',
		company_image_new: null,
        newCheckBtn: false,
        recommendCheckBtn: false,
        saleItem: false,
        fontSize: 10,
    });

    const {
        strain,
        type,
        name,
        nameCross,
        thc,
        cbd,
        description,
        amount,
        newCheckBtn,
        recommendCheckBtn,
        saleItem,
        price,
        fontSize,
    } = state;

    useEffect(() => {
        onDataChange(state);
    },[state])

    const handleState = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setState({
            ...state,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
		const data = new FileReader();
		data.addEventListener('load', () => {
			setState({
				...state,
				company_image_new: data.result,
			});
		})
		data.readAsDataURL(e.target.files[0]);
    };

    return (
        <div className="cardsContainer">

            <div className="setNewContainer">
                    <input type="checkbox" className="newCheckBtn" name="newCheckBtn" onChange={handleState} checked={newCheckBtn} />
                    <label htmlFor="newCheckBtn" className="newCheckLbl">
                        New
                    </label>
                    <input
                        type="checkbox"
                        className="newCheckBtn reccoCheckBtn"
                        name="recommendCheckBtn"
                        onChange={handleState}
                        checked={recommendCheckBtn}
                    />
                    <label htmlFor="recommendCheckBtn" className="newCheckLbl">
                        Recommend
                    </label>
                    <input type="checkbox" className="newCheckBtn" name="saleItem" onChange={handleState} checked={saleItem} />
                    <label htmlFor="newCheckBtn" className="newCheckLbl">
                        Sale
                    </label>
                </div>


            <div className="card card_static">
                <div className="front">
                    <section>
                        <div className={'card__topContainer card__topContainer_static ' + strain}>
                            <div className="card__strain">
                                <select
                                    name="strain"
                                    type="text"
                                    className={'form-strain ' + strain}
                                    onChange={handleState}
                                    value={strain}
                                >
                                    <option value="">Choose...</option>
                                    <option value="Indica">Indica</option>
                                    <option value="Sativa">Sativa</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div className={'card__strain-smtext ' + strain}>
                                <select
                                    name="type"
                                    type="text"
                                    className={'form-type form-sub-name ' + type}
                                    onChange={handleState}
                                    value={type}
                                >
                                    <option value="Pre-roll">Pre-roll</option>
                                    <option value="Flower">Flower</option>
                                    <option value="Edible">Edible</option>
                                    <option value="Vape">Vape</option> 
                                    <option value="Oil">Oil</option>
                                    <option value="Beverage">Beverage</option>
                                    <option value="Concentrate">Concentrate</option>
                                </select>
                            </div>
                        </div>
                        <div className="card__bottomContainer">
                            <div className="card__name card__name_static">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Strain Name"
                                    className="form-name"
                                    onChange={handleState}
                                    value={name}
                                />
                            </div>
                            <div className="card__name card__name_static">
                                <input
                                    name="nameCross"
                                    type="text"
                                    placeholder="Cross Name"
                                    className="form-name"
                                    onChange={handleState}
                                    value={nameCross}
                                />
                            </div>

                            <div className="card__values-container">
                                <div className={'card__values-thc card__values-thc_static ' + strain}>
                                    <div className="card__values-thc-name card__values-thc-name_static">THC</div>
                                    <div className="card__values-thc-value">
                                        <input
                                            name="thc"
                                            type="text"
                                            placeholder="thc"
                                            className="form-thc"
                                            onChange={handleState}
                                            value={thc}
                                        />
                                    </div>
                                </div>
                                <div className={'card__values-cbd card__values-thc_static ' + strain}>
                                    <div className="card__values-thc-name card__values-thc-name_static">CBD</div>
                                    <div className="card__values-thc-value">
                                        <input
                                            name="cbd"
                                            type="text"
                                            placeholder="cbd"
                                            className="form-thc"
                                            onChange={handleState}
                                            value={cbd}
                                        />
                                    </div>
                                </div>
                            </div>

                            <input type="range" className="input-slider" name="fontSize" min="10" max="30" step="1" value={fontSize} onChange={handleState} />
                            <label for="input-slider" class="number--label">{fontSize}</label>
                        
                            <div className="card__description card__description_static">
                                <textarea
                                    name="description"
                                    type="text"
                                    placeholder="description"
                                    className="form-description"
                                    onChange={handleState}
                                    value={description}
                                />
                            </div>
                            <div className="card__image card__image_static">
                                <div className="addImgContainer">
                                    <div className="imgContainer imgContainer_static">
                                        <input
                                            type="file"
                                            name="company_image"
                                            id="company_image"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                        /> 
                                        {/* <img className="imgStyle" src={company_image_new} alt={'preview'} /> */}
                                    </div>
                                </div>
                            </div>
                            <div className="card__price-container card__price-container_static">
                                <div className="card__grams">
                                    <input
                                        name="amount"
                                        type="text"
                                        placeholder="amount"
                                        className="form-amount"
                                        onChange={handleState}
                                        value={amount}
                                    />
                                </div>
                                <div className="card__price">
                                    $
                                    <input
                                        name="price"
                                        type="text"
                                        placeholder="price"
                                        className="form-price"
                                        onChange={handleState}
                                        value={price}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="back">
                    <section>
                        <div className="weed_image"></div>
                    </section>
                </div>
            </div>
        </div>
    )
}
    

export default AddCard;
