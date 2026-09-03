import { Helmet } from 'react-helmet'

function About() {
    return (
        <div>
            <Helmet>
                <title>Capabilities</title>
                <meta
                    name="description"
                    content="I’m an independent designer and programmer based in Berlin. I collaborate with agencies, brands, and designers to create modern, accessible and high-performing products."
                />
            </Helmet>
            <div className="grid-layout">
                <div className="grid-item text xl-grid--about"></div>
                <div className="grid-item span-most text text-l"></div>
                <div className="grid-item"></div>
                <div className="grid-item text xl-grid--about">
                    <b>Me</b>
                </div>
                <div className="grid-item span-most text text-l">
                    <p>
                        I'm a software developer from San Francisco based in
                        Berlin, known online as printer_scanner. You can find my
                        open-source work on{' '}
                        <a href="https://github.com/printerscanner">Github</a>,
                        occasional updates about my life on{' '}
                        <a href="https://www.instagram.com/printer_scanner">
                            Instagram
                        </a>
                        , and research for ongoing projects on{' '}
                        <a href="https://www.are.na/printer-scanner/">Are.na</a>
                        .
                    </p>
                </div>

                <div className="grid-item"></div>

                <div className="grid-item text xl-grid--about">
                    <b>Writing</b>
                </div>
                <div className="grid-item span-most text text-l">
                    <p>
                        I write a blog called{' '}
                        <a href="https://earthly-delights.net">
                            The Garden of Earthly Delights
                        </a>
                        , about tech, but also about manhood, scams, and
                        California. Last year I published a post called{' '}
                        <a href="https://earthly-delights.net/blog/the-east-solano-plan/">
                            The East Solano Plan
                        </a>{' '}
                        about a controversial proposed new city development in
                        Northern California. I am also the web designer for{' '}
                        <a href="https://proteanmag.com">Protean Magazine</a>,
                        an independent, ad-free leftist magazine of critical
                        essays, poetry, fiction, and art that you should
                        consider{' '}
                        <a href="https://proteanmag.com/donate/">supporting</a>.
                    </p>
                </div>

                <div className="grid-item"></div>

                <div className="grid-item text xl-grid--about">
                    <b>Open Source</b>
                </div>
                <div className="grid-item span-most text text-l">
                    <p>
                        I work at <a href="https://xyflow.com/">xyflow</a>,
                        where I develop open-source libraries for building
                        interactive node-based user interfaces under the MIT
                        license. We just released{' '}
                        <a href="https://xyflow.com/strudel-flow">
                            {' '}
                            Strudel Flow
                        </a>
                        , a visual drum machine and pattern sequencer built with{' '}
                        <a href="https://strudel.cc/">Strudel</a>.
                    </p>
                </div>

                <div className="grid-item"></div>

                <div className="grid-item text xl-grid--about">
                    <b>Previously</b>
                </div>
                <div className="grid-item span-most text text-l">
                    <p>
                        I worked at{' '}
                        <a href="https://fictivekin.com">Fictive Kin</a>, a NYC
                        product design studio building products and web systems.
                        Before that, I worked on the{' '}
                        <a href="https://en.wikipedia.org/wiki/Vera_C._Rubin_Observatory#/media/File:M1M3_mirror_group_photo.jpg">
                            {' '}
                            Vera Rubin Observatory
                        </a>
                        , an astronomical survey telescope that recently
                        achieved first light. You can read about it in the{' '}
                        <a href="https://www.nytimes.com/2025/06/23/science/vera-rubin-telescopes-first-images.html">
                            New York Times
                        </a>
                        .
                    </p>
                </div>
                <div className="grid-item"></div>
                <div className="grid-item text xl-grid--about">
                    <b>Availability</b>
                </div>
                <div className="grid-item span-most text text-l">
                    <p>
                        I'm not currently available for new projects, but I love
                        to chat. If you would like to say hi, email me at{' '}
                        <a href="mailto:itsprinterscanner@gmail.com">
                            itsprinterscanner@gmail.com
                        </a>
                        .
                    </p>
                </div>
                <div className="grid-item"></div>

                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
                <div className="grid-item"></div>
            </div>
        </div>
    )
}

export default About
