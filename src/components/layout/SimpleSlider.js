import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SimpleSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true
    };

    const IMAGE =[
        {
            src : "https://sat02pap001files.storage.live.com/y4mXdp537jx1gr1cWYtnb0I8VXLj1hJFjVbGfgqF8WZ9LW5vXCI_id8lyw-LO3onIEb7aJpxBzq3ghjMmPLmvM6OoZIROVGRAClAgtQJTiV2mpMz3dOfteubhHA_ycMo3qXtGHpPzCJgarA8z__EpRR2xjeSdWQQAuDE6uytDZ3hyS6Fj4ZZ2KVxAlRIuTDI98fqv79SNYXjSX3mczYehLzDA/home.png?psid=1&width=1920&height=700"
        },
        {
            src : "https://sat02pap001files.storage.live.com/y4m5MuyFKjXcJ8uEn1QHJ94Z4ULNUDqtVLHyJe0KZhuxOEyC-fx1pWSodvnorxMXA0bnEn0g04opThm4pgT4Zdl6co6bTNrDIkLWDN7XHXze0l5SlLX8l3EOkfOtSiSYd-lcsSDtE7_G0ZlkYO5xtJc8y0Ggg59zBIWpBa8_bl8oEMSwHtm3Mzb0fwKVB3ZwuHfHjMlH1fqVQ1X4AGv5OsNBg/launching.png?psid=1&width=1920&height=700"
        },
        {
            src: "https://sat02pap001files.storage.live.com/y4moYBciwYHI1VPTHABJhOte-lq15qdogbvd0JeVhQ4eNV4jWLllrjUm9uGwNTcg1qntSOVhuncvgsR7yOrG5jtQWTzdFDaFmHc48EmYRPHczm0aYXdtJ9pVTFT8yI5arnw9Ylmyo02UQ2UqjGa68abIb7OVMIeNm-kdAQQuuj4NWmFh-8aoewKgbPi8NH1keoKVrjQOtMSDimYlIlXLaYFmA/sup.png?psid=1&width=1920&height=700"
        }
    ]

    return (
        <div>
            <br></br>
            <Slider {...settings}>
                <div>

                    <img src={IMAGE[0].src} alt=""/>
                </div>
                <div>
                    <img src={IMAGE[1].src} alt=""/>
                </div>
                <div>
                    <img src={IMAGE[2].src} alt=""/>
                </div>
            </Slider>
        </div>
    )

}

export default SimpleSlider;