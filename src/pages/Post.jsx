import { useParams } from 'react-router-dom';
import data from '../data/api.js';

function Post() {
    const { id } = useParams();
    const product = data[id];

    return (
        <>
            <article>
                <div className="grid-layout large-grid">
                    <div className="blog grid-item span-2 text">
                        <h1 className='logo'>{product.title}</h1>
                        <h5>{product.subtitle}</h5>
                        <p>{product.description}</p>
                        <div className={product.content ? '' : 'visually-hidden'} dangerouslySetInnerHTML={{ __html: product.content }} />
                        <a className={product.downloadLink ? '' : 'visually-hidden'} href={product.downloadLink}><u>↗ Download</u></a>
                        <a className={product.githubLink ? '' : 'visually-hidden'} href={product.githubLink}><u>↗ Fork it on Github</u></a>
                        <a className={product.listen ? '' : 'visually-hidden'} href={product.listen}><u>↗ Listen</u></a>
                    </div>
                    {product.img1 && <div className="grid-item span-2"><img className="product-subhero" src={product.img1} alt={product.title} loading="lazy" /></div>}
                    {product.img2 && <div className="grid-item span-2"><img className="product-subhero" src={product.img2} alt={product.title} loading="lazy" /></div>}
                    {product.img3 && <div className="grid-item span-2"><img className="product-subhero" src={product.img3} alt={product.title} loading="lazy" /></div>}
                    {product.img4 && <div className="grid-item span-2"><img className="product-subhero" alt={product.title} src={product.img4} loading="lazy" /></div>}
                    {product.img5 && <div className="grid-item span-2"><img className="product-subhero" alt={product.title} src={product.img5} loading="lazy" /></div>}
                    {product.img6 && <div className="grid-item span-2"><img className="product-subhero" alt={product.title} src={product.img6} loading="lazy" /></div>}
                    {product.mov && <div className="grid-item span-2"><video autoPlay={true} loop={true} muted={true} width="400px" height="auto"><source autoPlay loop src={product.mov} type="video/mp4" /></video></div>}
                </div>
            </article>
        </>
    );
}

export default Post;