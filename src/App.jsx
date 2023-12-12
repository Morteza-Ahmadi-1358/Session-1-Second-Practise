import ProductCard from './components/ProductCard'
import './App.css'
import './assets/Fonts/iranyekan/ttf/iranyekanwebregular(fanum).ttf'
function App() {
  const products = [
    {id: 1, name:"گوشی موبایل جی ال ایکس دو سیم کارت مدل C58", price: 519000, count: 1, imageUrl:"src/assets/images/GLX-c58.jpg", discount:5},
    {id: 2, name:"گوشی موبایل هوآوی مدل nova 9 SE دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت", price: 8499000, count: 1, imageUrl:"src/assets/images/Huawei-Nova-9-SE.jpg", discount:6},
    {id: 3, name:"گوشی موبایل نوکیا مدل 8210 4G دو سیم کارت ", price: 2089000, count: 1, imageUrl:"src/assets/images/Nokia-8210.jpg", discount:5},
    {id: 4, name:"گوشی موبایل نوکیا مدل 105 2023 دو سیم‌ کارت", price: 669000, count: 1, imageUrl:"src/assets/images/Nokia-105-2023.jpg", discount:5},
    {id: 5, name:"هدفون بلوتوثی مودیو مدل ME16", price: 848000, count: 1, imageUrl:"src/assets/images/ME16.jpg", discount:21},
    {id: 6, name:"لپ تاپ 15 اینچی لنوو مدل IdeaPad 5-I5 8GB 1TB128GB MX450", price: 24299000, count: 1, imageUrl:"src/assets/images/IdeaPad-5-I5.jpg", discount:7},
    {id: 7, name:"لپ تاپ 15.6 اینچی لنوو مدل IdeaPad 3 15ITL6-i5 16GB 1HDD 256SSD MX350 - کاستوم شده", price: 25499000, count: 1, imageUrl:"src/assets/images/IdeaPad-3-15ITL6-i5.jpg", discount:4},
    {id: 8, name:"گوشی موبایل جی ال ایکس دو سیم کارت مدل C58", price: 519000, count: 1, imageUrl:"src/assets/images/GLX-c58.jpg", discount:5},
    {id: 9, name:"گوشی موبایل هوآوی مدل nova 9 SE دو سیم کارت ظرفیت 128 گیگابایت و رم 8 گیگابایت", price: 8499000, count: 1, imageUrl:"src/assets/images/Huawei-Nova-9-SE.jpg", discount:6},
    {id: 10, name:"گوشی موبایل نوکیا مدل 8210 4G دو سیم کارت ", price: 2089000, count: 1, imageUrl:"src/assets/images/Nokia-8210.jpg", discount:5},
  ];

  return (
    <div className='productsBox'>
      {products.map((item) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </div>
  )
}

export default App
