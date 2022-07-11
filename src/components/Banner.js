function Banner() {
    return(
    <>
        <div className="bg-gray-100">
            <div style={{backgroundImage: "url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)"}} className="container rounded-md mx-auto flex justify-between h-[306px] bg-primary-color">
                <div className="flex flex-col justify-center pl-10">
                    <h3 className="text-white font-semibold text-2xl">Getir'i indirin!</h3>
                    <span className="text-white font-semibold text-s">İstediğiniz ürünleri dakikalar içinde kapınıza<br/>getirelim.</span>
                    <div className="flex gap-2">
                        <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" />
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                        <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" />
                    </div>
                </div>
                <div>
                    <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="Getir App" />
                </div>
                          
            </div>
        </div>
    </>
    )
}
export default Banner