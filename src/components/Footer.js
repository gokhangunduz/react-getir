import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
function Footer() {
  return (
    <>
      <div className="container mx-auto pt-10">
        <div className="grid grid-cols-5 gap-[128px]">
          <div>
            <h3 className="text-lg text-primary-color pb-4">
              Getir'i İndirin!
            </h3>
            <img
              className="pb-4"
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
            <img
              className="pb-4"
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </div>
          <div>
            <h3 className="text-lg text-primary-color pb-4">
              Getir'i Keşfedin
            </h3>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>Hakkımızda</li>
              <li>Kariyer</li>
              <li>Teknoloji Kariyerleri</li>
              <li>İletişim</li>
              <li>Covid-19 Duyuru</li>
              <li>Sosyal Sorumluluk Projeleri</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-primary-color pb-4">
              Yardıma mı ihtiyacınız var?
            </h3>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>Sıkça Sorulan Sorular</li>
              <li>Kişisel Verilerin Korunması</li>
              <li>Gizlilik Politikası</li>
              <li>Kullanım Koşulları</li>
              <li>Çerez Politikası</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg text-primary-color pb-4">
              İş Ortağımız Olun
            </h3>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>Bayimiz Olun</li>
              <li>Deponuzu Kiralayın</li>
              <li>GetirYemek Restoranı Olun</li>
              <li>GetirÇarşı İşletmesi Olun</li>
              <li>Zincir Restoranlar</li>
            </ul>
          </div>
          <div>
            <div className="p-5 w-[96px] shadow-md">
              <img
                className="h-[64px]"
                src="https://getir.com/_next/static/images/etbis-33c159729adc8b4e2b946310f038d2f4.png"
                alt="qr"
              />
            </div>
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex justify-between my-10">
          <div className="flex gap-3">
            <span>© 2022 Getir</span>
            <a href="/">Bilgi Toplumu Hizmetleri</a>
          </div>
          <div className="flex gap-4">
            <BsFacebook size={24} />
            <BsTwitter size={24} />
            <BsInstagram size={24} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
