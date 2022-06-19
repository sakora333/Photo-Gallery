import React, { useState } from "react";
//import CloseIcon from '@mui/icons-material/Close';
import './gallery.css';
import Img1 from './img/img1.jpeg';
import Img2 from './img/img2.jpg';
import Img3 from './img/img3.jpg';
import Img4 from './img/img4.png';
import Img5 from './img/img5.png';
import Img6 from './img/img6.jpg';


const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1
        },
        {
            id: 2,
            imgSrc: Img6
        },
        {
            id: 3,
            imgSrc: Img3
        },
        {
            id: 4,
            imgSrc: Img4
        },
        {
            id: 5,
            imgSrc: Img5
        },
        {
            id: 6,
            imgSrc: Img2
        }
    ]
    const [model, setmodel] = useState(false);
    const [tempimgsrc, settempimgsrc] = useState('');
    const getImg = (imgSrc) => {
        settempimgsrc(imgSrc);
        setmodel(true);
        console.log(model);
    }
    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempimgsrc} />
                <button onClick={() => setmodel(false)} >X</button>

            </div>
            <div className="gallery">
                {
                    data.map((item, index) => {
                        return (
                            <div className="pic" key={index}>
                                <img src={item.imgSrc} style={{ width: '100%' }} onClick={() => getImg(item.imgSrc)} />
                            </div>
                        )

                    })
                }
            </div>
        </>
    )
}
export default Gallery;