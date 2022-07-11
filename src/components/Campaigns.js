import Slider from "react-slick";
function Campaigns() {

    const settings2 = {
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };

    return(
<>
<div className="w-100 p-6 bg-gray-100">
<div className="container mx-auto">
<h3 className="text-gray-700 font-semibold text-sm pb-2">Kampanyalar</h3>
<Slider {...settings2}>
          <div>
            <img className="w-full rounded-xl px-1" src="https://cdn.getir.com/misc/62837518f98a7da759f060f4_banner_tr_1657189167678.jpeg" alt="" />
          </div>
          <div>
            <img className="w-full rounded-xl px-1" src="https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1655191370129.jpeg" alt="" />
          </div>
          <div>
            <img className="w-full rounded-xl px-1" src="https://cdn.getir.com/misc/62837518f98a7da759f060f4_banner_tr_1657189167678.jpeg" alt="" />
          </div>
          <div>
            <img className="w-full rounded-xl px-1" src="https://cdn.getir.com/misc/62837518f98a7da759f060f4_banner_tr_1657189167678.jpeg" alt="" />
          </div>
          <div>
            <img className="w-full rounded-xl px-1" src="https://cdn.getir.com/misc/62837518f98a7da759f060f4_banner_tr_1657189167678.jpeg" alt="" />
          </div>
          <div>
            <img className="w-full rounded-xl px-1" src="https://cdn.getir.com/misc/62837518f98a7da759f060f4_banner_tr_1657189167678.jpeg" alt="" />
          </div>
        </Slider>
</div>
</div>
</>
    )
}
export default Campaigns