/*******************************************
* D1.js -- Random Words Stream
********************************************/
import React from "react";
import styled from "styled-components";
import "../css/site.css";
import TextArea from "../components/TextArea";
import Container from "react-bootstrap/Container";

const HoverButton = styled.button`
        :hover {
		cursor: pointer;
		position: relative;
		top:  1px;
		left: 1px;
	}
`

class D1 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

        componentDidMount = () => {
this.words = "dog cat mouse bird ostrich Viking Martian Rubble Earthquake Tornado and stuttering moustache hungry angry upset barfing reading snoring yelling whispering riding cow chicken tastes orange blue green hairy putrid shiny delicate fragile music noise shattering donkey oak wagon dwarven oaf pickles werewolf zombie quicksand forest mountains cave woods twilight night daylight thunder lightning festival carnival spring autumn fall winter summer desert water ocean lake forest underground castle bank city village town peasant king monarch dictator brutal orc goblin elf wizard spells monk books treasure coins TurkeyLeg rocky sandy icy wet cold hot riding horseback caravan BellyDancer entertainers Knife Sword BowAndArrow CrossBow wooden stone SILENCE drunken brawling scary friendly lovely crazy and the if but only sometimes often never plenty seldom rarely first last gently roughly piggy snorting banjo oscillating burden enlightened ornary canary pirate prosthetics flying swimming cavorting seducing talkative loud cranky Giant Centipede juiciest Microscopic Gargantuan Giants vampire undead ghoul governer mayor president mead incense Frankensence hiking trail winding road street avenue desolate empty crowded tavern inn BedAndBreakfast Munchies Seductive Queen Prince Princess Royalty Poverty Taxation Levy school children women men orphan veteran dungeon dragon gold silver copper electrum bronze shield star constellation libra scales scorpion ram dove aquarian fish astronomy astrology physics calculus mathematics geometry triginometry misspelled clever dense famous next soon difference very much many so such dogecoin flask jug jar confused confusing slowly quickly steps runs walks hops slithers welcoming henceforth this that the bit in rear head elbow joint knee frog spleen innards exterior interior walls gloop ooze slime mold smells stinks perfumed drums MusicalIntruments bobcat bear mice kittens dogs puppies doges Gunther Hobbit halfling shark oyster beach coast fledgling boxing treats sponges general store none infintity zen everything nothing stream of consciousness why who where which huh UhOh frank wiener joint together apart teamwork competition left right north south east west gate wall door port opening structure building capital store FlowerShop Weather Hail CheeseMakers Spiciest Tallest Meanest Yellowest Craziest Coyest BusinessMinded Stern Cross Ship galley map FromTheAir falling down up under over Once upon a time the story goes that a frog humped to the Humpty Dumpty exhibit with the twins and a short time without the nexus of random auspiciousness Naturally punctuation comes forth only whence animals gentle feed notwithstanding forks spoons knives LongSwords Tweezers Splinters Leeches ponds icky gross slimy edible yet deliciousness covent convert converted converting seemingly sultry coarse winks pets fondles cash tomorrow today every all absolutely stone brick hidden secret panel bookcase shelf sliding beneath behind latch lever";

this.words2 = " pinky mouse is sad because said rodent has yet to see the world and the universe at large yet is familiar with cuisine not dead dying living resurrecting raising ascending jumping lifting rising risen pogo stick fossil game meat fire smoke stench attracts suspicious timing serendipitous flinches sneezes coughing sputtering whistling dancing flirting squeezing floating spinning laughter singing frolic barkeep broom good evil changing doppelganger versatile contested conquistador chili pepper SewageBucket Olives redhead blond brown mohawk plank dock nightfall myth FairyTale pine trees weeds plants flowers CarnivorousPlants DrumCircle Noisiest AWAKEN SUDDENLY WithoutWarning Growling Screeching Voices Mob pitchforks tea party cupcakes pastries ogres skin wolves sourcerer CrystalBall Dreamt Found Lost Pickpocketed stole GaveBack Fled Stormed Typhoon Tornado WishingWell BellTower Church Friar large wide castle steps eggs curves steeply around strange odor ouch bang foot arm toe finger necklace tasty golem sandman practice emperor named juicy MOIST Crispy Flame Mouth belches passes swallows inhaled generously took delivered PouncesOn keeps fence over the dallied Filbert Magnificent Loquacious simple thick Gronto Biggins Crunchworth hummingbird eggs Steve Fabrice Alfred Harry goldfish killer stalker potato cherry tomato DragonFruit nuts berries kicked spiked punted consumed delivered EveryDay EveryNight TogetherAtLast Together delicious tasty yummy yet disgusting revolting dainty Etiquette river water fire wind earth Outhouse Ladel 10FootLong gravy nougat culinary mystery sacred porridge RoadApple quiche hasty retreat karmic ranger stew souffle tail hindquarters smegma buffalo kilt homemade lovingly taste taint verdant ripe miasma trans pulsating luscious wayward flavor essense bunny poop scent farmed patty frank aperitif meets together flagship smoothie shake beverage meal delicious delightful exquisite";

		this.outwords = this.words + this.words2;
		var wordsArray = this.outwords.split(' ');
		console.info("wordsArray count = " + wordsArray.length);

		this.wsTimer = setInterval(function() { 
			this.rVal1 = parseInt(Math.random() * 188579 % wordsArray.length);
			this.rVal2 = parseInt(Math.random() * 188579 % wordsArray.length);
			this.rVal3 = parseInt(Math.random() * 188579 % wordsArray.length);
                        this.xx1 = document.getElementById("word-streamer");
			this.NewDiv1 = document.createElement("p");
			this.NewDiv1.className+= "";
			this.NewDiv1.innerHTML = 	wordsArray[this.rVal1] + ' ' + 
							wordsArray[this.rVal2] + ' ' + 
							wordsArray[this.rVal3];
			this.xx1.appendChild(this.NewDiv1);
		}, 750);
        }

	clearContents = () => {
		var xx1 = document.getElementById("word-streamer");
		while (xx1 && xx1.hasChildNodes()) {
			xx1.removeChild(xx1.lastChild);
		}
	}

	componentWillUnmount = () => {
		clearInterval(this.wsTimer);
	}

	render() {
		return (
			<Container className="official-background-color official-body" >

				<h2>Word Stream</h2>
			
				<div className="word-streamer-box">
					<div id="word-streamer" className="special-font">
					</div>
				</div>

				<HoverButton 
					onClick={this.clearContents} 
					className="official-menu-buttonstyle">CLEAR
				</HoverButton> 


			</Container>
		);
	}
}

export default D1;
