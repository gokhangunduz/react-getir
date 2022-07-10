import Slider from "react-slick";
function Campaigns() {

    const settings2 = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };

    return(
<>
<div className="container mx-auto px-[7%]">
<Slider {...settings2}>
          <div>
            <img src="https://cdn.getir.com/misc/62837518f98a7da759f060f4_banner_tr_1657189167678.jpeg" alt="" />
          </div>
          <div>
            <img src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1655191370129.jpeg" alt="" />
          </div>
          <div>
            <img src="https://cdn.getir.com/misc/62837518f98a7da759f060f4_banner_tr_1657189167678.jpeg" alt="" />
          </div>
          <div>
            <img src="https://cdn.getir.com/misc/62837518f98a7da759f060f4_banner_tr_1657189167678.jpeg" alt="" />
          </div>
          <div>
            <img src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1655191370129.jpeg" alt="" />
          </div>
          <div>
            <img src="https://cdn.getir.com/misc/62837518f98a7da759f060f4_banner_tr_1657189167678.jpeg" alt="" />
          </div>
        </Slider>
</div>
</>
    )
}
export default Campaigns