function Categories() {
    const photourls = [
        "https://market-product-images-cdn.getirapi.com/category/f66f92ea-f680-4dd4-808b-8f8a71709a86.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/d43a0396-b588-4666-ac43-af4b3159fee2.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/6814548a-24f2-4ba2-9762-7ca3e96a3d40.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/4c2530e6-d2d2-4a77-96a0-917f16165f57.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/8393d053-6478-410a-a234-d1a914185b35.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/0f329100-f339-4503-bf56-095ab4c11c98.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/afee33f9-93fe-4b87-8094-6e5c7f13c064.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/35640646-a603-4b9a-96db-96918025fb61.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/b01619f2-e12e-4777-85a2-5727abb62d51.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/c594be17-998d-475e-91a5-89924798a27d.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/d7b76064-6334-43a4-aafe-ace887ec2da6.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/29bcb34e-ae77-46f8-b27c-d36e50275709.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/d737c0bd-538c-486c-9485-46aff62856d1.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/d6e1fc47-6dbe-4be0-9e21-8b3a3f9cfecd.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/907cbf21-00b7-4f94-b257-9fd8b104cf02.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/517efd09-95b6-466a-980e-55db579ebddc.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/34e1cf54-bf96-498b-ba55-680b960cfcfc.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/d6e1fc47-6dbe-4be0-9e21-8b3a3f9cfecd.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/907cbf21-00b7-4f94-b257-9fd8b104cf02.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/517efd09-95b6-466a-980e-55db579ebddc.jpeg",
        "https://market-product-images-cdn.getirapi.com/category/34e1cf54-bf96-498b-ba55-680b960cfcfc.jpeg"
    ]

    return(
        <>
        <div style={{boxShadow:"rgb(88 63 181 / 8%) 0px 2px 16px", zIndex:"0"}}>
        <div className="container mx-auto p-6" >
            <h3 className="text-gray-700 font-semibold text-sm pb-2">Kategoriler</h3>
            <div className="grid grid-cols-10 gap-2">
                {photourls.map((url, index) => (

                    <div index={index} className="flex flex-col items-center hover:cursor-pointer hover:bg-purple-100 hover:rounded-md" >
                        <img className="rounded-md mt-2 h-12" src={url} alt="Su & İçecek" />
                        <h6 className="text-gray-600 text-base font-semibold m-3 hover:text-brand-color ">Su & İçecek</h6>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </>
    )
}
export default Categories