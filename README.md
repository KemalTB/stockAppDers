# Stock App 
Yüklü Olan Paketler
- MUI and MUI icons(tasarim islemleri icin gerekli)
- axios (veri cekmeler icin)
- react redux/redux toolkit(authentication icin yani user, stock bilgileri icin)
- react-toastify(notification(kullanici bilgilendirmeleri icin))
- react-router-dom(sayfa yonlendirmeleri icin)
- yup


PNPM KURULUMU
https://pnpm.io/installation

microsoft: 
pnpm create react-app .

mac: 
sudo npm install -g pnpm
(mac: bilgisayar sifresini isteyecek)

kurulum basarili olmusmuyu kontrol icin: 
pnpm -v

yukaridaki paketleri hem windows hemde mac icin asagidaki gibi pratik bir sekilde yükleyebiliriz
///////////////////////////////////////////////////////
pnpm add @emotion/react @emotion/styled @mui/x-data-grid@latest @mui/icons-material@latest @mui/material@latest @reduxjs/toolkit axios formik react react-dom react-redux react-router-dom react-toastify redux-persist yup @tremor/react

pnpm add -D @types/react @types/react-dom @vitejs/plugin-react vite tailwindcss postcss autoprefixer

npx tailwindcss init -p

///////////////////////////////////////////////////////////

Scripts
dev: "vite"
Uygulamayı geliştirme modunda çalıştırır. Vite, hızlı bir geliştirme sunucusudur.
build: "vite build"
Uygulamanın üretim için optimize edilmiş bir versiyonunu oluşturur.
lint: "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"
eslint kullanarak kodu statik analiz yapar ve belirtilen dosya uzantılarını kontrol eder. Ayrıca gereksiz eslint disable direktiflerini raporlar ve hata toleransını sıfırda tutar.
preview: "vite preview"
Üretim için oluşturulan uygulamayı yerel bir sunucuda ön izleme yaparak çalıştırır.
Dependencies (Uygulamanın çalışması için gereken kütüphaneler)
@emotion/react:

Emotion, CSS-in-JS (JavaScript içinde CSS) ile stil oluşturmayı sağlar. Bu paket, React ile birlikte stil yönetimini optimize etmek için kullanılır.
@emotion/styled:

Emotion'ın styled-components benzeri stil bileşeni sağlayan kütüphanesidir. CSS kodlarını bileşen tabanlı şekilde yazmanızı sağlar.
@mui/icons-material:

@mui/x-data-grid, Material-UI (MUI) tarafından sağlanan, büyük veri setlerini tablo formatında görüntülemek ve yönetmek için kullanılan, çok özelleştirilebilir ve özellik açısından zengin bir veri tablosu bileşenidir. Özellikle büyük veri setlerini görüntülemek, filtrelemek, sıralamak ve düzenlemek gerektiğinde oldukça kullanışlıdır.

@mui/x-data-grid Özellikleri:
Sayfalama: Büyük veri setleri için verimli sayfalama desteği.
Sıralama ve Filtreleme: Sütun değerlerine göre sıralama ve filtreleme yapabilme.
Seçim: Tekli veya çoklu satır seçimi.
Düzenleme: Hücre ve satır düzenlemesi için yerinde düzenleme (inline editing) desteği.
Sütun Yeniden Boyutlandırma ve Sıralama: Sütunları etkileşimli olarak yeniden boyutlandırma ve sıralama.
Özel Render Desteği: Hücre, sütun ve satırlar için özel render işlemleri yapma esnekliği.
Performans: Büyük veri setlerini verimli bir şekilde işlemek için sanallaştırma (virtualization) desteği ile yüksek performans.

Material-UI'nin ikon kütüphanesidir. Google’ın Material Design ikonlarını uygulamanızda kolayca kullanmanıza olanak tanır.
@mui/material:

Material-UI’nin React bileşen kütüphanesidir. Modern ve şık UI bileşenleri oluşturmayı kolaylaştırır.
@reduxjs/toolkit:

Redux'un modern bir API ile kullanılmasını sağlayan araç setidir. Veri yönetimini kolaylaştırır ve sadeleştirir.
axios:

Promise tabanlı HTTP istemcisidir. API taleplerini yapmak için kullanılır. Örneğin, GET, POST isteklerini kolaylaştırır.
formik:

Form yönetimini ve doğrulama işlemlerini kolaylaştıran bir React kütüphanesidir. Form alanlarını takip eder, hata yönetimi yapar ve doğrulama sağlar.
react:

React, kullanıcı arayüzleri oluşturmak için kullanılan temel JavaScript kütüphanesidir. Bileşen tabanlı yapı ile UI oluşturmanızı sağlar.
react-dom:

React bileşenlerinin gerçek DOM'a işlenmesini sağlayan kütüphanedir.
react-redux:

React uygulamalarında Redux store ile bileşenler arasındaki etkileşimi kolaylaştıran bir bağlayıcıdır.
react-router-dom:

React uygulamalarında yönlendirme (routing) işlemlerini sağlayan kütüphanedir. Farklı sayfalar arasında gezinmeyi sağlar.
react-toastify:

Bildirim mesajları (toast notifications) göstermek için kullanılan bir kütüphanedir. Örneğin, başarılı ya da hatalı işlemler sonucunda kullanıcıya bilgi vermek için kullanılır.
redux-persist:

Redux store’un state’ini kalıcı hale getiren bir kütüphanedir. Tarayıcı kapansa bile verilerin depolanmasını sağlar (localStorage gibi).
yup:

Şema tabanlı doğrulama kütüphanesidir. Form verilerini ve diğer veri tiplerini doğrulamak için Formik ile birlikte yaygın olarak kullanılır.
DevDependencies (Geliştirme sırasında kullanılan kütüphaneler)
@types/react:

React bileşenleri için TypeScript tipi tanımları sağlar. TypeScript kullanırken hata yönetimini ve otokompleti kolaylaştırır.
@types/react-dom:

React DOM bileşenleri için TypeScript tipi tanımları sağlar.
@vitejs/plugin-react:

Vite ile React uygulamalarını geliştirmek için kullanılan eklentidir. React bileşenlerini ve JSX’i optimize eder.
vite:

Modern bir frontend geliştirme aracıdır. Hızlı bir geliştirme sunucusu sunar ve üretim için optimize edilmiş build oluşturur. Vite, Webpack gibi diğer geliştirme araçlarına alternatif olarak kullanılır.




1. Redux'un Kullanım Amacı ve Tercih Sebebi:
Redux, global state yönetimini sağlamak için kullanılır. Bir projede birden fazla bileşen arasında veri paylaşımı gerektiğinde veya uygulamanın durumu (state) çok karmaşık hale geldiğinde Redux tercih edilir. Bu sayede bileşenlerin state’leri arasında bağımlılıklar olmadan merkezi bir state yapısı elde edersiniz.

Redux yerine ne tercih edilebilirdi? Redux yerine Context API veya basit state yönetimi için useState veya useReducer gibi hook'lar kullanılabilirdi. Ancak Context API, performans problemleri ve büyük ölçekli uygulamalarda karışıklık yaratabilir.

2. Redux Toolkit'in Avantajları:
Boilerplate koddan kurtulma: Pure Redux’a göre çok daha az kod yazmayı sağlar. configureStore, createSlice gibi araçlar sayesinde daha temiz ve yapılandırılabilir bir Redux kullanımı elde edilir.
Immer ile immutable state: Redux Toolkit, state’i güncellerken immutable olmasını sağlar, bu da elle state’i kopyalamak zorunda kalmaktan kurtarır.
RTK Query: API çağrıları için optimize edilmiş bir araç sunar.
3. Axios Instance Kullanımı:
Axios instance, API çağrıları için önceden yapılandırılmış bir Axios nesnesi oluşturmayı sağlar. Örneğin:

Base URL ve ortak header’lar gibi ayarları bir kez tanımlayıp, her çağrıda tekrar yazmak zorunda kalmazsınız.
Global hata yönetimi ve timeout gibi seçenekleri merkezi olarak ayarlamak kolaylaşır.
4. Formik ve Yup Tercihi:
Formik: Form yönetimi ve validasyon için kolay bir yapı sağlar. Form state'lerini ve hatalarını takip etme gibi işlemleri basitleştirir.
Yup: Form validasyonunu şemalar üzerinden yaparak daha okunabilir ve yönetilebilir validasyon kuralları oluşturmanızı sağlar.
Başka hangi paketler tercih edilebilirdi?

React Hook Form: Daha performanslı bir çözüm olabilir, özellikle büyük formlar için.
Zod: Yup yerine kullanılabilecek başka bir validasyon kütüphanesidir ve TypeScript uyumluluğu daha iyidir.
5. Nested Route Kullanımı:
Nested route yapısı, uygulamada farklı seviyelerdeki bileşenlerin ve sayfaların birbirine göre yerleşimini daha esnek ve düzenli hale getirir. Özellikle, bir ana sayfa veya gösterim alanı etrafında alt bileşenler ve alt sayfalar göstermek için idealdir. Bu yapı, uygulamanın kullanıcıya sunduğu navigasyon deneyimini daha sezgisel hale getirir.

6. Absolute Path ve Relative Path Farkı:
Relative Path: Dosya veya bileşenler arasında referans oluştururken dosya yapısına göre belirlenen yollardır.
Absolute Path: Uygulamanın kök dizinine göre belirlenen, daha düzenli ve okunabilir yollar sunar. Kodun yönetimini kolaylaştırır.
7. PrivateRoute (ProtectRoute) Kullanımı:
PrivateRoute, belirli bir sayfaya erişimin sadece yetkili kullanıcılar tarafından yapılmasını sağlar. Örneğin, kullanıcı giriş yapmamışsa login sayfasına yönlendirilir. Bu, uygulamada güvenlik ve kullanıcı deneyimi açısından önemlidir.

8. Custom Hook Kullanımı:
Custom hook’lar, belirli bir işlevselliği birden fazla yerde kullanma ihtiyacından kaynaklanır. Örneğin:

useAuthCall: Kullanıcının kimliğini doğrulamak ve oturum yönetimini sağlamak için kullanılır.
useAxios: Axios instance'ı kullanarak API çağrılarını yönetir.
useStockCall: Stok verilerini almak gibi işlemleri merkezileştirir ve tekrar kullanılabilir hale getirir.
9. Flexible ve Configurable Fonksiyonlar:
Flexible (esnek) ve configurable (yapılandırılabilir) fonksiyonlar, projenizde tekrar kullanılabilirliği artırır. Örneğin, getStockData gibi fonksiyonlar, parametrelerle farklı sorgular yapabilmeyi sağlar. Bu sayede tek bir fonksiyon farklı senaryolarda kullanılabilir hale gelir. Bu, kodun modüler ve bakımı kolay hale gelmesini sağlar.

10. Promise.all Kullanımı:
Promise.all, aynı anda birden fazla asenkron işlemi başlatıp bunları paralel olarak çalıştırmayı sağlar. Projelerde birden fazla API çağrısı yapılması gerektiğinde bu yöntem tercih edilir. Bu, performansı artırır ve zaman kazandırır.

Örneğin: Stok verisi, kullanıcı bilgisi ve sipariş verisini aynı anda almak gibi işlemlerde Promise.all avantaj sağlar.

11. Mui X Data Grid Kullanımı:
Hazır yapı kullanmanın avantajı, performans optimizasyonları ve gelişmiş özelliklere (sıralama, filtreleme, sayfalama) sahip olmasıdır. Mui X Data Grid, güçlü bir tablo yapısı sunar ve kolayca özelleştirilebilir. Kendi tablonuzu sıfırdan yazmak yerine bu tür bir kütüphane kullanmak geliştirme süresini kısaltır ve hata yapma olasılığını azaltır.