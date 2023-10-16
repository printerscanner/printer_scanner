/* eslint-disable react/prop-types */
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


const randomClass = (value) => {
  const result = Math.floor(Math.random() * value);
  if (result === 0) {
    return "grid-item";
  }
  if (result === 1) {
    return "grid-item span-2";
  } else {
    return "grid-item";
  }
};


function App() {
  useEffect(() => {
    document.body.style.color = color;
  }, []);

  let productIds = Object.keys(data);
	// productIds.sort(function() {return Math.random() - 0.5;});

  return (
    <div>
          <>
      <div className="grid-layout">
      <div className="grid-item span-2 text">
        <p>We rarely think of the website as an artistic medium, even less as the most dominant artistic medium of the 21st Century, used like the Medici's to gain and enforce power. As objects, websites face obsolescence almost immediately, sometimes even before their completion. They are unstable and degrade over time. A website can be deleted accidentally, its electrons rearranged into junk in an instant.</p>

        <p>Physical ephemera is by contrast much more long lasting. We will hold on to a scrap of paper with a drawing from our loved ones our whole lives. Even with delicate artifacts like paper, our instinct for preservation has allowed our species us to reach back thousands of years.</p>

        <p>Printing remains an expensive, inaccessible medium. Words that are printed and disseminated are still allowed only to the celebrities of the world (Prince Harry). It's hard today to even print anything! Do you have a working printer in your house? I didn't think so.</p>
        <p><b>printer_scanner</b> is a laboratory of experimentation. We explore the authority of printed and digital matter, and the worth of cataloguing and preserving. We think of the experience of art as a state of play with out conception of an end, made by choices as small as turning down a new street in a familiar city.</p>
        <p>
          If you would like to learn more or get in touch, our email is <a href="mailto:itsprinterscanner@gmail.com"> itsprinterscanner@gmail.com</a>. You can also find us on <a href="https://instagram.com/printer_scanner">Instagram</a> and on <a href="https://github.com/printerscanner">Github</a>.
        </p>
				</div>

        {productIds.map((id) => (
					<a
            className={randomClass(2)}
            href={data[id].link ? `${data[id].link}` : `work/${id}`}
            key={id}
          >
            <>
              {data[id].thumbnail && !data[id].mov && <img loading="lazy" src={data[id].thumbnail} alt={data[id].title} />}
              {data[id].mov && <video loading="lazy" autoPlay={true} muted={true}><source autoPlay src={data[id].mov} type="video/mp4" /></video>}
              <div className="text">
                <p>{data[id].link ? <span>↗ </span> : ''} <b>{data[id].title}</b></p>
                <p style={{fontSize: '12px', paddingBottom: '.5rem'}}>{data[id].subcategory ? <span className="grid-crumbs">{data[id].subcategory}</span> : ''}
                  {data[id].category ? <span className="grid-crumbs">{data[id].category}</span> : ''}
                    {data[id].year ? <span className="grid-crumbs">{data[id].year}</span> : ''} </p>
                <p>{data[id].description}</p>
              </div>
            </>
          </a>
        ))}
      </div>
    </>
    </div>
  );
}

export default App;
