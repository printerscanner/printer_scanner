import { useParams } from 'react-router-dom'
import { useEffect } from "react";


import data from './data/api.js'

const CSS_COLOR_NAMES = {
	Azure: '#F0FFFF',
	Black: '#171717',
	DarkBlue: '#1b1b50',
	DarkerBlue: '#0e2e46',
	DarkGrey: '#262626',
	DarkSlateGrey: '#2F4F4F',
	GhostWhite: '#F8F8FF',
	GreenYellow: '#ADFF2F',
	Indigo: '#4B0082',
	Lime: '#00FF00',
	Magenta: '#8B008B',
	Orange: '#FFA500',
	SeaShell: '#FFF5EE',
	Snow: '#FFFAFA',
  };
  
  const randomProperty = function (obj) {
	const keys = Object.keys(obj);
	return obj[keys[ keys.length * Math.random() << 0]];
  };
  
  const color = randomProperty(CSS_COLOR_NAMES)

function Post() {
	useEffect(() => {
	document.body.style.color = color;
	}, []);

	const { id } = useParams();
	const product = data[id]
	return (
		<article>
			<div className="blog">
				<a href="/" className="home-button"><u>←</u></a>
					<h2>{product.title}</h2>
					<h5>{product.subtitle}</h5>
					<p>{product.description}</p>
					<div dangerouslySetInnerHTML={{__html: product.content }} />
					<a className={product.downloadLink ? '' : 'hidden'} href={product.downloadLink}><u>↗ Get a Copy</u></a>
				</div>
				<div className="grid-layout large-grid">
					{product.img1 && <div className="grid-item span-2"><img className="product-subhero" src={product.img1} alt={product.title} loading="lazy"></img></div>}
					{product.img2 && <div className="grid-item span-2"><img className="product-subhero" src={product.img2} alt={product.title} loading="lazy"></img></div>}
					{product.img3 && <div className="grid-item span-2"><img className="product-subhero" src={product.img3} alt={product.title} loading="lazy"></img></div>}
					{product.img4 && <div className="grid-item span-2"><img className="product-subhero" alt={product.title} src={product.img4} loading="lazy"></img></div>}
					{product.img5 && <div className="grid-item span-2"><img className="product-subhero" alt={product.title} src={product.img5} loading="lazy"></img></div>}
					{product.img6 && <div className="grid-item span-2"><img className="product-subhero" alt={product.title} src={product.img6} loading="lazy"></img></div>}
					{product.mov && <div className="grid-item span-2"><video autoPlay={true} loop={true} muted={true} width="400px" height="auto"><source autoPlay loop src={product.mov} type="video/mp4" /></video></div>}
				</div>
		</article>
	)
	}

export default Post
