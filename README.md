# Northstar Portfoy

Bu surum, Midas uzerinden yaptigin ABD hisse islemlerini daha duzenli bir web panelinde takip etmek icin hazirlandi.

## Su anda neler var?

- Gonderdigin ekran goruntusundeki islemlerden baslangic veri seti
- Daha modern bir panel arayuzu
- Manuel islem ekleme
- Tarih + sembole gore otomatik fiyat doldurma
- Fiyat ve komisyon alanlarini elle degistirebilme
- `Update` ile guncel fiyat cekme
- Maliyeti cikarmak icin satilacak adet hesabi

## Islem ekleme akisi

1. Sembol gir
2. Alis veya satis sec
3. Tarih ve adet gir
4. `Tarihe Gore Otomatik Doldur` ile fiyati getir
5. Istersen fiyat veya komisyonu elle duzelt
6. Islemi ekle

## Yayin modeli

Bu proje statik bir web uygulamasi olarak hazirlandi. Bu sayede Cloudflare Pages gibi ucretsiz servislerde yayinlanabilir.

Onemli nokta:

- Ilk yayin icin ucretli domain zorunlu degil
- Cloudflare Pages varsayilan olarak bir `*.pages.dev` adresi verir
- Ayni projeyi tekrar yayinladiginda ayni adres korunur
- Yani sonraki revizyonlarda yeni link uretmek gerekmez

## GitHub'a gecis notu

Cloudflare'in resmi dokumantasyonuna gore `Direct Upload` ile baslayan bir proje sonradan Git entegrasyonuna cevrilemez. GitHub baglantili bir akisa gecmek icin yeni bir Pages projesi olusturmak gerekir.

Bu yuzden GitHub akisi su sekilde olmalidir:

1. GitHub'da yeni bir repo olustur
2. Bu klasordeki dosyalari repoya yukle
3. Cloudflare'da `Pages > Connect to Git` ile bu repoyu bagla
4. Sonraki revizyonlarda sadece GitHub repo guncellenir, Cloudflare otomatik deploy eder

Bu geciste mevcut `workers.dev` adresi korunmayabilir. Ayni sabit adresi korumak istersen o zaman ozel domain tanimlamak gerekir.

Resmi kaynaklar:

- [Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/)
- [Twelve Data docs](https://twelvedata.com/docs)

## Fiyat servisi

Uygulama iki farkli amac icin Twelve Data kullanir:

- Guncel fiyat: `quote`
- Tarihsel fiyat: `time_series`

Bu nedenle bir API key girmen gerekir.

## Not

Canli adresi gercekten olusturmak icin bir yayin hesabina ihtiyac var. Teknik olarak uygulama buna hazir; bir Cloudflare Pages projesine koydugumuzda ayni adres uzerinden revize etmeye devam edebiliriz.
