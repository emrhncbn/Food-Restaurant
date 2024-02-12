import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import './styles.css'



const App = () => {
  return (
    <div>
        <Header />
        <Main />
        <Footer />
    </div>
  )
}
export default App
/* Challenge: 

Bu web sayfası, HTML öğeleri vanilla JS ile DOM'a eklenerek oluşturulmuştur. Göreviniz JS'yi React JSX'e dönüştürmek ve React ile sayfaya render etmek. İşte istediğimiz şeyler: 

        1. Sayfa, JSX ile yazılmış diğer fonksiyonel bileşenlerden ve elementlerden oluşan tek bir fonksiyonel React bileşeni tarafından render edilmelidir.
        
        2. Sonuç, mevcut sayfadan farklı olmamalıdır (bonus challenge yapmadığınız sürece).
        
        3. Mevcut JS'nin tamamı sonunda silinmelidir. 
        
        4. Kod modüler ve iyi organize edilmiş olmalıdır.
*/

