import { useState } from "react";
import AddCard from "./AddCard/AddCard";
import CardsPage from "./CardsPage/CardsPage";

function App() {
	const [cards, setCards] = useState([undefined, undefined, undefined]);

	const handleDataChange = (card, i) => {
		const temp = [...cards]
		temp[i]=card;
		setCards(temp);
	}

    const showDiv = () => document.getElementById("hideorshow").style.display = "flex";
    const hideDiv = () => document.getElementById("hideorshow").style.display = "none";

	//console.log(cards)
	return (
		<div>
			<div id="hideorshow" className="addCardContainerMain">
				{
					cards.map((_,i) => {
						return <AddCard key={i} onDataChange={(card) => handleDataChange(card,i)} />
					})
				}
				<div className='hideBtn' onClick={hideDiv}>HIDE</div>
			</div>
			<div className="printContainerMain">
				{
					cards.map((card,i) => {
						return <CardsPage key={i} card={card} />
					})
				}
				<div className='showBtn' onClick={showDiv}>SHOW</div>
			</div>
		</div>
	);
}

export default App;
