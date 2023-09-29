import collages from './data/collage.js'
let imageData = Object.values(collages)

function Collage() {
	return(
		<article>
			<div className="blog">
			<a href="/" className="home-button"><u>←</u></a>
			<h1>Collage Generator</h1>
			<p>I taught my computer to make collages for me. Here's everything it made.</p>
			<div>
				<div className="grid-layout collage">
				{
					imageData.map(
					(image, index) =>    <div key={index} className='grid-item' style={{filter: "invert()", border: "0px"}}><img key={index} src={image} alt="info"></img></div>
					)
				}
				</div>
			</div>
			</div>
		</article>
	)
}

export default Collage;
