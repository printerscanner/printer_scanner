import collages from '../data/collage.js'
let imageData = Object.values(collages)
import { Helmet } from 'react-helmet';



function Collage() {
	return(
		<>
		<h1 className='visually-hidden'>Collages</h1>		
		<Helmet>
			<title>Collages</title>
			<meta name="description" content="I taught my computer to make collages for me. Here's everything it made." />
		</Helmet>
		<article>
			<div className="blog">
			<a href="/" className="home-button"><u>←</u></a>
			<h1>Collage Generator</h1>
			<p>I taught my computer to make collages for me. Here’s everything it made.</p>
			<a href="https://github.com/printerscanner/collage-generator">↗ <u>View on Github</u></a>
			</div>

			<div>
				<div className="grid-layout collage">
				{
					imageData.map(
					(image, index) =>    <div key={index} className='grid-item' style={{filter: "invert()", border: "0px"}}><img key={index} src={image} alt="info"></img></div>
					)
				}
				</div>
			</div>
		</article>
		</>

	)
}

export default Collage;
