function Cards() {

    const photourls = [
        "https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg",
        "https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg",
        "https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg"
    ]

    return(
        <>
<div className="bg-gray-100 pb-16 pt-6">
    <div className="container pt-5 mx-auto grid grid-cols-3 gap-5">
        <div className="bg-white w-full p-10 flex flex-col items-center rounded">
            <img className="h-[150px]" src={photourls[0]} alt="Getir"/>
            <h3 className="text-primary-color text-lg font-semibold mt-6 ">Her siparişinize bir kampanya</h3>
            <p className=" text-gray-500 text-center mt-2" >Getir’de vereceğiniz her siparişe uygun bir<br/>kampanya bulabilirsiniz.</p>
        </div>
        <div className="bg-white w-full p-10 flex flex-col items-center rounded">
            <img className="h-[150px]" src={photourls[1]} alt="Getir"/>
            <h3 className="text-primary-color text-lg font-semibold mt-6 " >Her siparişinize bir kampanya</h3>
            <p className=" text-gray-500 text-center mt-2" >Getir’le siparişiniz dakikalar içinde kapınıza gelir.</p>
        </div>
        <div className="bg-white w-full p-10 flex flex-col items-center rounded">
            <img className="h-[150px]" src={photourls[2]} alt="Getir"/>
            <h3 className="text-primary-color text-lg font-semibold mt-6 " >Her siparişinize bir kampanya</h3>
            <p className=" text-gray-500 text-center mt-2" >Getir’de binlerce çeşit arasından seçiminizi<br/>yapabilirsiniz.</p>
        </div>
    </div>
</div>
        </>
    )
}
export default Cards