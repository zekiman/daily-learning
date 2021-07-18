




// //**************************************** */
// //**************************************** */
// //**************************************** */




// //*** (udemy - 218) OBJECTS & FUNCTIONS


// Javascript bir "nesne yönelimli programlama" dilidir. Yani "Object Oriented programming (OOP)""

// //* Object nedir? 
// //* Object; primitive (ilkel) tipler dışında kalandır. 

// //* Object Type:
// //* - Arrays
// //* - Functions
// //* - Objects
// //* - Dates
// //* - String & Number Object


// //* Primitive Type:
// //* tek bir değer tutan ve değer tutma haricinde ekstra özellik getirmeyen kavramlardır;
// //* - Number
// //* - Strings
// //* - Booleans
// //* - Undefined
// //* - Null




// //**  ÖRNEKLER

// let val;

// //* primitive tip ile object tipin farkı; ...

// let num= 10;
// let zekiman={
//     name:'zekiman',
//     birthYear:1994,
//     job:'marketing manager'
// }

// val = num

// console.log(val)
// console.log(typeof val)

// //* ... bu durumda console da sadece val değeri olarak "10" gelecek ve yanında bu değerden başka bir şey olmayacak. fakat...

// val = zekiman

// console.log(val)
// console.log(typeof val)

// //* ... val değerinin bir object tip olduğu bu durumda ise gelen değerlerin yanında bir de "proto" kısmı ve bu değerlere hangi methodları uygulayabileceğimiz de geliyor.

// //* bu object tipi; "Object Literal" tipidir.

// let zekiman={
//     name:'zekiman',
//     birthYear:1994,
//     job:'marketing manager'
// }

// //* bu ise; Array'dir. 

// let numbers= [10,20,30];


// //* bu ikisinin farkı ise; 
// console.log(zekiman)
// //* "zekiman" değişkeninini yazdırdığımızda, sadece proto değeri geliyor. ayrıca "__proto__: object" olarak gözüküyor.

// console.log(numbers)
// //* "numbers" değişkeninin tipi Array olduğu için, consola yazdırdığımızda proto nun yanında lenght değeri de geliyor. "__proto__: Array(0)" gözüküyor. Detaylarına tıkladığımızda en altta yine "__proto__: object" methodları geldiğini görüyoruz. Peki bu ne demek...

// //* bunun anlamı özetle şu; "numbers" değişkeni bir Array yani dizidir. Array olması sebebiyle dizilere has kullanılabilen methodları da getiriyor. Ve tipi bir Object tipi olduğu için ayrıca object methodlarını da barındırıyor.





// //**************************************** */
// //**************************************** */
// //**************************************** */




// //*** (udemy - 219) CONSTRUCTOR


// //* Belli bir kalıpta oluşturacağımız objeler için kullanılır.
// //* İçindeki değişkenlerin aynı olduğu bir object ile array oluşturacağımız zaman Constructor kullanmaktayız.

// //* Örneğin: ...

// let zekiman = {
//     name: 'zekiman',
//     birthYear: '1994',
//     job: 'marketing manager'
// }

// let kubrawoman = {
//     name: 'kubrawoman',
//     birthYear: '1994',
//     job: 'marketing manager'
// }

// //* ... ve bunun gibi içeriğinde yine aynı değişkenlere sahip birkaç kişi daha oluşturacağınız zaman bunu şöyle bir Constructor yapısı içinde kullanıyoruz:

// PERSON
// name
// birthYear
// job
// calculateAge()

// //* Bu da bir Constuctor aracılığı ile aynı değişkenlere sahip yeni kişileri oluşturmamıza yardımcı olan Instances kalıbı:

// let kübrawoman
// kübrawoman
// 1994
// designer


// let zekiman
// zekiman
// 1994
// student



// //* Constructor ve Instances Kullanımları:


// let zekiman = {
//     name:'zekiman',
//     birthYear: 1994,
//     job: 'marketing manager'
// }

// console.log(zekiman)

// //* örneğin birçok kişinin bilgilerini aynı obje yapısıysa saklamak istiyorsak bir kalıp yani constructor oluşturuyoruz;

// //* örneğin adını "Person" koyup bir function oluşturalım; ...

// function person(name, birthYear,job){
//     this.name = name;
//     this.birthYear = birthYear;
//     this.job = job;
    
//     console.log(this);
// }

// //* ... bu fonksiyon yukarıda görüldüğü üzere dışarıdan (name, birthYear ve job bilgilerini almakta) ...
// //* ... oluşturulan örnek (yani Instance) "this" ile ifade ediliyor. ...
// //* ... "this.name=name;" bu ifadenin anlamı; oluşturulacak olan instance'a bir name adında değişken ekliyorum. Name in değeri ise dışarıdan gelecek. ...
// //* ... Yani, "new Person (zeki,...)" şeklinde bir instance ürettiğimde dışarıdan eklediğim "zeki" değeri name'e ait

// let zekiman = new person('zekiman',1994,'marketing manager');
// let kubrawoman = new person('kübrawoman',1994,'designer')

// console.log(zekiman.name);
// console.log(kubrawoman.name);

// //* Sadece bilgi taşımak için değil, fonksiyon da ekleyebiliyoruz constructor'a. Örneğin;

// function staff(name,byear,department){
//     this.name=name;
//     this.byear=byear;
//     this.department=department;
//     this.calculateAge= function(){
//         return new Date().getFullYear()-this.byear;
//     } 
// }

// let zekiman = new staff('zekiman',1994,'marketing')

// console.log(zekiman.calculateAge());


// //* Ayrıca bu fonksiyon tamamen bir değişkene de atanabilir. Örneğin; ...

// let staff = function(name, birthYear, department){
//     this.name=name;
//     this.birthYear=birthYear;
//     this.department=department;
//     this.calculateAge= function(){
//         return new Date().getFullYear()-this.birthYear;
//     } 
// }

// let zekiman = new staff('zekiman',1994,'marketing')
// console.log(zekiman.name);
// console.log(zekiman.department);
// console.log(zekiman.calculateAge());

// //* bu modelde yazdığımızda da tamamen aynı sonucu alıyoruz. ES5 de construct bu şekilde oluşturuluyor.





// //**************************************** */
// //**************************************** */
// //**************************************** */




// //*** (udemy - 220) PROTOTYPE



// //* JS'de "ProtoType" nesne tabanlı programlama açısından önemli. Çünkü kalıtım, prototype aracılığıyla yapılıyor. 

// //* Kalıtım (Inheritance) Nedir?

// //* elimizde "name, birthYear, job" değişkenleri barındıran bir "person" adlı constructorımız varken, "class, number" değişkenleri olan "student" adlı bir constructor oluşturmak istiyorsak ...

// //* ... ve bu student constructor'ında person constructor'ına ait özelliklerin de barınmasını istiyorsak kalıtım yoluyla aktarabiliyoruz. Bu aktarma işlemini ise Prototype ile gerçekleştiriyoruz.

// let Person = function(name,birthYear,job){
//     this.name=name,
//     this.birthYear=birthYear,
//     this.job=job
// }

// //*new Person ile bir instance oluşturduğumuzda yukarıdaki bilgiler object olarak console'a yazdırılırken ...

// Person.prototype.age = function(){
//      return new Date().getFullYear()-this.birthYear
// }

// Person.prototype.getName = function(){
//     return this.name
// }

// //* ... prototype olarak eklediğimiz bu veriler ise console prototype ın içinde yer alır. ...

// let zekiman = new Person('zekiman',1994,'marketing manager')
// console.log(zekiman)

// //* ... kalıp olarak gelmese dahi prototype ile istediğimiz instance'a özel olarak bu verileri getirebiliriz.

// console.log(zekiman.age())





// //**************************************** */
// //**************************************** */
// //**************************************** */




// //*** (udemy - 221) UYGULAMA: CONSTRUCTOR & PROTOTYPE



// //* İki constructor'ı birleştirme, kalıtım yoluyla değişkenleri diğer objeye aktarma;


// //* Soru: Dışarıdan name ve salary bilgilerini alan Employee constructor'ı tanımlayın.

// const Employee = function(name,salary){
//     if (!(this instanceof Employee)){
//         return new Employee(name, salary)
//     }
//     this.name=name,
//     this.salary=salary,
//     console.log(this)
// }

// let zekiman = Employee('zekiman',5000)
// let kubrawoman = Employee('kübrawoman',6000)


// //* Soru-2: Yıl içinde o ana kadar alınan toplam maaş ve alınan toplam vergi tutarını hesaplayan fonksiyon oluşturun;
// //* Vergi dilimleri: 20.000'e kadar %20 --- 30.000'e kadar %25 --- 30.000 üzeri %27 vergi

// Employee.prototype.totalSalary = function(){
//     let totalSalary = new Date().getMonth()*this.salary;
//     let tax = 0;
    
//     if(totalSalary <= 20000){
//         tax = 0.2
//     }else if(totalSalary > 20000 && totalSalary<=30000){
//         tax = 0.25
//     }else{
//         tax = 0.3
//     }

//     let kesilenVergi = totalSalary*tax;
//     let net = totalSalary-kesilenVergi;

//     return {
//         alinanMaas : totalSalary,
//         tax: tax,
//         kesilenVergi : kesilenVergi,
//         net: net
//     }
    
// }

// console.log(zekiman.totalSalary());
// console.log(kubrawoman.totalSalary());


// let zekimanSalary = zekiman.totalSalary();
// let kubrawomanSalary = kubrawoman.totalSalary();

// console.log(`${zekiman.name} isimli çalışana ${new Date().getFullYear()} yılının ${new Date().getMonth()}. ayına kadar brüt toplam ${zekiman.totalSalary().alinanMaas}₺ ödenmiştir. ${zekiman.totalSalary().tax} oranında yaşanan ${zekiman.totalSalary().kesilenVergi}₺ vergi kesintisi sonucunda çalışana ${zekiman.totalSalary().net}₺ net maaş ödemesi yapılmıştır. `)





// //**************************************** */
// //**************************************** */
// //**************************************** */





// //*** (udemy - 222) OBJECT.CREATE


// let personProto = {
//     calculateAge : function(){
//         return new Date().getFullYear()-this.birthYear;
//     }
// }

// //* Object.create kullanarak PersonProto objesi yaratıyoruz...
// let zekiman = Object.create(personProto)

// //* ... bu şekilde de PersonProto objesine veri ekleyebiliyoruz...
// zekiman.name = 'zekiman';
// zekiman.birthYear = 1994;
// zekiman.job = 'marketing manager';

// //* name, birthYear, job gibi değişkenler Objenin içeriğinde yer almakta ve calculateAge fonksiyonu ise proto içinde gelmekte
// console.log(zekiman)
// console.log(zekiman.calculateAge())


// //* Object.create'in bir kullanımı;

// let kubrawoman = Object.create(personProto,{
//     name: {value: 'kübrawoman'},
//     birthYear: {value: 1994},
//     job: {value: 'designer'}
// })

// console.log(kubrawoman)





// //**************************************** */
// //**************************************** */
// //**************************************** */





// //*** (udemy - 223) PROTOTYPE TABANLI KALITIM (PROTOTYPAL INHERITANCE)

// //* birbiriyle alakası olmayan obje arasında özellik aktarımı yani prototip kalıtım nasıl yapılır?

// //* birinci obje

// let Person = function(name, birthYear, job){
//     this.name = name,
//     this.birthYear = birthYear,
//     this.job= job
// }

// Person.prototype.calculateAge = function(){
//     return new Date().getFullYear()-this.birthYear;
// }

// //* ikinci obje

// // let Teacher = function(name, birthYear, job, subject){
// //     this.name = name,
// //     this.birthYear = birthYear,
// //     this.job= job,
// //     this.subject= subject
// // }

// //* ikinci objeyi böyle yazmak yerine Person objesini çağırabiliriz;

// let Teacher = function(name, birthYear, job, subject){
//     Person.call(this,name,birthYear,job),
//     this.subject= subject
//     console.log(this)
// }


// //* fakat bu durumda henüz Person constructor'ın proto kısmı (calculateAge) Teacher'a aktarılmaz. Aktarmak için ...

// //* Inherit the Person prototype methods

// Teacher.prototype = Object.create(Person.prototype)

// let kübrawoman = new Teacher('kübrawoman',1994,'designer','graphic design')

// console.log(kübrawoman.calculateAge())
// // console.log(Teacher.prototype.constructor)


// //* Bu durumda da teacher'ın prototipi Person olarak gözükmekte.Yapılması gereken;

// Teacher.prototype.constructor= Teacher;
// // console.log(Teacher.prototype.constructor)

// Teacher.prototype.greetings = function(){
//     return 'hello my name is' +this.name;
// }





// //**************************************** */
// //**************************************** */
// //**************************************** */





// //*** (udemy - 223) PROTOTYPE TABANLI KALITIM (PROTOTYPAL INHERITANCE)


// let str1= 'Sadık';
// let str2 = new String('Sadık');

// console.log(str1)
// console.log(typeof str1)
// console.log(str2)
// console.log(typeof str2)

// if(str1 === 'Sadık'){
//     console.log('yes')
// }else{
//     console.log('no ')
// }

// //* Bu kontrolde str1 değeri ve tipi eşleştiği için Yes yazdırılacaktır.

// if(str2 === 'Sadık'){
//     console.log('yes')
// }else{
//     console.log('no ')
// }

// //* Str2 de ise değerler aynı fakat biri String bir ifade ve diğeri ise Object olduğundan tip kontrolünde eşitlik sağlanamadığı için "no" yazdırılacaktır.

// if(str2 == 'Sadık'){
//     console.log('yes')
// }else{
//     console.log('no ')
// }

// //* Tip kontrolünü sildiğimiz bu durumda ise sadece değerler kontrol edilmekte ve eşleştiği için "yes" yazdırılacaktır.


// //* String

// let str1= 'Zekiman';
// let str2 = new String('Zekiman');

// String.prototype.repeat = function(n){
//     return new Array(n+1).join(this)
// }

// //* String prototype'ı repeat fonksiyonu alarak genişletilmiş oldu.

// console.log('zekiman'.repeat(4))
// console.log(str2)


// //*****


// //* Number 

// let num1 = 10;
// let num2 = new Number(10);

// Number.prototype.repeat = function(n){
//     return new Array(n+1).join(this)
// }

// console.log(num2.repeat(3))
// console.log(num2)


// //*****


// //* Boolean

// let bool1 = true;
// let bool2 = new Boolean(true)


// //*****


// //* Object

// let obj1 = {
//     name: 'zekiman'
// }

// let obj2 = new Object({
//     name: 'zekiman'
// })


// //*****


// //* Array

// let arr1 = ['zeki','kübra','kara','akgün'];
// let arr2 = new Array('zeki','kübra','kara','akgün')

// Array.prototype.repeat = function(n){
//     return new Array(n+1).join(this)
// }


// console.log(arr2)
// console.log(arr2.repeat(2))


// Array.prototype.remove = function(n){
//     let index = this.indexOf(n)
//     if(index > -1){
//         this.splice(index,1);
//     }
//     return this;
// }

// console.log(arr2.remove('kübra'))


// //* Array objesinin prototipine remove adında bir fonksiyon ekledik. >> Dışarıdan verdiğimiz değere "n" dedik. >> index adında bir değişken atadık ve değerine; this yani özelinde arayacağımız nesnede bulunan, n içeriğinin index numarasını atadık. >> Eğer bu index -1 'den büyükse, yani arattığımız n içeriğinin bu nesnede bulunduğu anlamına gelir bu, splice methodu ile this'in index numarasına gidip böl, ve 1 adet içerik sil dedik. Bunun anlamı n içeriğinin silinmesi demektir.>> Eğer index -1 ise, yani n içeriği bulunmuyorsa this'i aynen geri dön dedik


// //* Ek not olarak, eğer bunu bu şekilde yazarsak sonradan remove methodunun eklenme ihtimaline karşı kontrol sağlamış oluruz.

// // Array.prototype.remove = Array.prototype.remove || function(n) ... 






// //**************************************** */
// //**************************************** */
// //**************************************** */





// //*** (udemy - 225) UYGULAMA: KALITIM

// //* Şu Construct Yapısını Oluşturun;

//     // Person:
//     // name
//     // introduce()

//     // Student:
//     // name
//     // introduce()
//     // number
//     // education
//     // study()

//     // Teacher:
//     // name
//     // introduce()
//     // branch
//     // school
//     // teach()

//     // Headmaster:
//     // name
//     // introduce()
//     // branch
//     // school
//     // teach()
//     // shareTask()


// //* Create Person : 
//     //* >>> person nesnesini oluşturduk 
//     //* >>> fonksiyon tanımladık (standart constructor yapısı) 
//     //* >>> dışarıdan "name" alacağını söyledik 
//     //* >>> gelecek veriye (this'e) name değişkeni ekledik ve değerine dışarıdan vereceğimiz name'i eşitledik

// let Person = function(name){
//     this.name=name,
//     console.log(this)
// }
 
//     //* >>> person nesnesinin prototipine "introduce" adlı bir fonksiyon ekleneceğini söyledik,
//     //* >>> fonsiyonun işlevi; console'a belirtilen metni yazdırmak

// Person.prototype.introduce = function(){
//     console.log(`Hello, I'm ${this.name}.`)
// }



// //* Create Student
//     //* >>> Student nesnesini oluşturduk,
//     //* >>> Dışarıdan name,number,education verilerini alacağını söyledik
//     //* >>> Person nesnesindeki bazı değişkenleri aktaracağımızı söyledik. Buna kalıtım inheritance yoluyla aktarım deniliyor. "Person.call" ile bu işlemi yaptık.
//     //* >>> Ardından aktarılan değişkenlerin hangi nesnede kullanılacağını belirtmek için "this" ekledik ve aktarılacak değişkenleri yazdık. (name)
//     //* >>> this'e number değişkeni ekledik ve dışarıdan gelecek number verisiyle eşleşeceğini söyledik,
//     //* >>> aynı şekilde this'e education değişkeni ekledik, onu da dışarıdan alacağız bu şekilde

// let Student = function(name,number,education){
//     Person.call(this,name)
//     this.number=number,
//     this.education=education
//     // console.log(this)
// }
//     //* >>> Person'daki introduce fonksiyonu constructor'ın dışında olduğu için, kalıtım ile student e aktarılması gerekiyor.
//     //* >>> Fonksiyonu aktarmak için Student nesnesinin prototipine "Object.create" ile ekleme yapıyoruz. "Person.prototype" ile person nesnesinin prototipini studente eklemiş olduk.
//     //* >>> Fakat Student constructor'ının Person gibi çalışmaması için, Student'in prototipinin constructor'ını student yap diyerek (Student.prototype.constructor = Student) fonksiyonun kalıtım ile aktarılması işlemini tamamlıyoruz.  

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;


//     //* >>> Ardından Student prototipine study adlı bir fonksiyon ekliyoruz

// Student.prototype.study = function(){
//     console.log(`I'm studying at ${this.education}.`)
// }


// //* Create Teacher

//     //* >>> Kalıtım yoluyla bazı değişkenleri Person nesnesinden aldı, nasıl olduğunu Student kısmında yazdım. Aynı işlemi burada da yaptık

// let Teacher = function(name,branch,school){
//     Person.call(this,name),
//     this.branch=branch,
//     this.school=school
//     console.log(this)
// }

//     //* >>> Kalıtım yoluyla Person nesnesinden fonksiyon aktarmak için Create Student başlığında yapılan işlemin aynısı yapıldı

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;

//     //* >>> Yine prototip genişletme işlemi. Teacher prototipine teach isimli bir fonksiyon ekleniyor.

// Teacher.prototype.teach = function(){
//     return console.log(`I'm teaching ${this.branch} at ${this.school}.`)
// }



// //* Create Headmaster

//     //* >> Yukarıdaki Create başlıklarında yapılan işlemlerin aynısı yapıldı 

// let Headmaster = function(name,branch,status,school){
//     Teacher.call(this,name,branch,school),
//     this.status=status
//     // console.log(this)
// }

//     //* Yukarıdaki create başlıklarında olduğu gibi kalıtım yoluyla fonksiyon aktarma yapıldı.
// Headmaster.prototype = Object.create(Teacher.prototype);
// Headmaster.prototype.constructor= Headmaster;

// Headmaster.prototype.shareTask = function(){
//     return console.log(`I'm also a ${this.status}.`)
// }


//     //* console'a yazdırma, sağlama işlemleri yapıldı

// let person1 = new Person('zekiman');
// person1.introduce();

// let student1 = new Student('kübrawoman','20240123598','high school')
// student1.introduce();
// student1.study();

// let teacher1 = new Teacher('kübraStraight','Din Kültürü','Trabzon İmam Hatip High School')
// teacher1.introduce();
// teacher1.teach();

// let headmaster1 = new Headmaster('zekiStraight','ahlak bilgisi','headmasterovich','rize meslek lisesi')
// headmaster1.introduce();
// headmaster1.teach();
// headmaster1.shareTask()






// //**************************************** */
// //**************************************** */
// //**************************************** */





// //*** (udemy - 226) PRIMITIVE & OBJECTS

// //* Primitive: 
// //* burada her iki sonuç 10 olarak yazdırılıyor.
// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// /////////////////////////////

// //* Object:
// //* Objelerde adres yığında değil Heap'de yani ayrı bir yerde tutuluyor. 
// //* O yüzden objede eşitleme yapıldıktan sonra bir veride değişiklik yapılırsa direkt adreste değişiklik yapıldığından her iki objede etkileniyor. Veri her ikisinde de değişiyor.

// let obj1 = {
//     name: 'Zekiman',
//     age: 10,
// }

// let obj2 = obj1;
// obj1.age = 12;

// console.log(obj1);
// console.log(obj2);

// //* burada her ikisinin sonucu da 12 olarak yazdırılıyor.


// /////////////////


// var num = 50;
// var account = {
//     name: 'Zekiman',
//     accountNumber: '123456'
// }

// function update(a,b){
//     a = 100;
//     b.accountNumber = '333333';
// }

// update(num,account);

// console.log(num);
// console.log(account);


// //* Yukarıdaki örneklerde primitive num değişkeninde veri yığının içinde tutulduğundan, update değişkenine gönderdiğimiz a verisini num a eşitlememiz sonucu değiştirmedi. yazdırılan sonuç 100 değil 50 olacaktır bu durumda.

// //* Fakat update fonksiyonuna gönderdiğimiz b verisini account ile eşitlediğimizde, b.accountNumber'a başka bir değer atadığımızda ve account objesinin son halini yazdırdığımızda account objesinde yer alan accountNumber değişkeninin update fonksiyonunda atadığımız yeni değer karşımıza gelecektir.


// /////////////////


// //* Peki bu olay ne tür durumlarda kullanılıyor? Örneğin binlerce ürün verilerinin dizi içinde objelerle tutulduğunu varsayalım;

// var products = [
//     {name: 'products1', price:1.25, type:'food'},
//     {name: 'products2', price:1.25, type:'food'},
//     {name: 'products3', price:1.25, type:'food'},
//     {name: 'products4', price:1.25, type:'food'},
//     {name: 'products5', price:1.25, type:'food'},

// ]

// //* bu ürünleri filterProducts adlı bir fonksiyona gönderiyoruz;

// function filterProducts(prd){

// }

// filterProducts(prd);

// //* bunun yapılmasındaki amaç, ürün bilgisi güncelleme, filtereleme vb işlemlerin orijinal dizinde değil de products verilerinin başka bir yere eşitlenerek, oluşturulan kopyası üzerinde yapılarak geri gönderilmesidir.






// //**************************************** */
// //**************************************** */
// //**************************************** */





// //*** (udemy - 227) CALLBACK FONKSİYONLAR

// //* aşağıdaki konuyu pekiştirmek amacıyla aynı mantıkla benzer bir döngü yazıldı. burası önemli değil fonksiyondan sonra başla okumaya

// let val;

// function squareAll(a,b,c,d){
//     let arr = [];
//     for (let i=0; i<4; i++){
//         arr[i]= arguments[i]*arguments[i]
//     }
//     return arr
// }

// val = squareAll(5,7,9,25)

// console.log(val)


//////////////////////////////////
//////////////////////////////////


// //* Aşağıdaki fonksiyonda yapılan işlemler;
// //* >>> multiple adında bir fonksiyon yapıldı ve dışarıdan a,b,c parametrelerinden oluşan bir argüman gönderildi.
// //* >>> arr adında bir değişken atandı ve değerine boş bir dizi oluşturuldu
// //* >>> bir döngü oluşturuldu, döngü içerisinde i değişkeni oluşturuldu, i 0'a eşitlendi. İ, 3ten küçük olduğu sürece 1'er 1'er artması istendi.
// //* >>> bu döngüdeki i ye karşılık gelen her bir sayı arr dizisinin indexi olarak belirlendi ve bu da argümanın i ye karşılık gelen indexlerinin 2 ile çarpılmış değerine eşitlendi. Yani arr dizisi, multiple fonksiyonuna gönderilen her bir argümanın 2 ile çarpılmış değerlerinden oluşmaktadır.
// //* >>> fonksiyonun sonunda geriye arr dizisinin dönmesi istendi

// //* val değişkeni atandı, multiple fonksiyonu çağrıldı. ve multiple fonksiyonuna 2,3,4 argümanı gönderildi. sonuç olarak gönderilen parametlerin 2 ile çarpılmış hali console'a yazdırıldı.

// let val;

// function multiple(a,b,c){
//     let arr = [];
//     for(let i=0;i<3;i++){
//         arr[i]=arguments[i]*2;
//     }
//     return arr;
// }

// val = multiple(5,10,20)

// console.log(val)


// //* basit bir artir adında fonksiyon oluşturduk. a parametresini 1 artırarak geri döndürdük. 
// function artir(a){
//     return a+1
// }

// //* bu şekilde yazdırdığımızda 11 sonucunu aldık. Peki şimdi gelelim val değişkeni ile gelen her parametreyi artir fonksiyonuyla bir artıralım. 
// // val = artir(10)
// // console.log(val)

// //* Yukarıda val'in değerini en son multiple(5,10,20) fonksiyonunun sonucuna eşitlemiştik. Bunun sonucu 10,20,40 olarak çıkacaktır.

// //* Val'in her bir değeri için for döngüsüyle artir fonksiyonu çalıştırıyoruz. 

// for(let i=0; i<val.length; i++){
//      val[i] = artir(val[i])
// }

// console.log(val)

// //* Bu durumda çıkan sonuç 11,21,41 olmakta.

// //* Fakat bu işlemleri 2 adet döngü aracılığıyla yaptık, daha sadeleştirmek için callback kullanacağız.

// //* bu son for döngüsünü sildik ve onun yapacağı işlemi aşağıda callback ile her parametreye artir fonksiyonunu çağırma yoluyla yaptık

// /////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////

// let val;

// function multiple(a,b,c, callback){

//     if(callback && typeof callback === 'function'){

//         let arr = [];
//         for(let i=0;i<3;i++){
//             arr[i]=callback(arguments[i]*2);
//         }
//         return arr;
//     }
    
// }

// //* >>> multiptle fonksiyonuna gönderilen parametrelerin yanına bir callback yazdık, bu callback ile dışarıdan bir fonskiyon çağıracağız.
// //* >>> for döngüsünün içinde de argümanlara uygulanması için callback yazıp parantez içinde hepsine etki etmesini sağladık
// //* >>> sonuç kısmında görüldüğü üzere, multiple fonksiyonunu çağırıp, 5-10-20 parametresini ve artir fonksiyonunu callback yaptığımızda çıkan sonuç her bir parametreye multiple ve artir fonksiyonu uygulanması olacaktır. 
// //* >>> bir de üst kısma bir doğrulama ekledik. bunun anlamı, eğer callback null değil ise ve aynı zamanda callback'in type'ı function'a eşit ise bu işlemleri yaptır.

// val = multiple(5,10,20,artir)

// console.log(val)

// ///////////////////////////////////

// //* >>> callback çağırdığımızda her zaman dışarıdan fonksiyon eklemek zorunda değiliz. Örneğin. multiple fonksiyonuna callback ekledik fakat daha önce dışarıda belirlediğim artir veya diğer fonksiyonları değil de tek seferlik kullanacağım anonymous isimsiz bir fonksiyon da çağırabilirim.

// val = multiple(5,10,20,function(a){
//     return a+15
// })

// console.log(val)

// //* >>> multiple fonksiyonuyla 5-10-20 parametrelerini çağırdık,  tek seferlik kullanacağımız anonymous bir function oluşturduk. a parametresini verdik. geriye parametreye 15 eklenecek şekilde dönmesini istedik.
// //* >>> arka planda multiple fonksiyonu bu isimsiz fonksiyondan sahip olduğu tüm argümanlarına da bu işlemi uygulamasını istediği için çıkan sonuç şöyle olacaktır;
// //* >>> ilk olarak multiple fonksiyonu uygulandı, [10,20,40] dizisi çıktı, sonra her birine isimsiz fonksiyon uygulandı ve [25,35,55] dizisi yazdırılmış oldu. 

// ///////////////////////////////////

// function artir(a){
//     return a+1
// }

// function artir2(a){
//     return a+2
// }

// //* >>> bu callback işleminin bize faydası şu, birden farklı sayıda fonksiyon oluşturduğumuzda, hepsini ayrı ayrı rahatlıkla kullanabiliyoruz.
// //* >>> uygulaman için yapılması gereken tek şey, multiple fonksiyonunun içinde yeni istediğimiz fonksiyonu callback yapmak multiple(5,10,20,artir2)


// ///////////////////////////////////






// //**************************************** */
// //**************************************** */
// //**************************************** */





// //*** (udemy - 228) IMMEDIATE FUNCTIONS


//  //* immediate fonksiyonlar hemen ilk satırda tek seferlik bir fonksiyon çalıştırmak istediğimizde kullanılır.

//  //* kullanıldıklarında ilk sırada çalıştırılırlar, anonimdirler. 

// //* it should be written like this;

//  (function welcome(parameter){

//  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'];
 
// const message = 'Welcome '+parameter+'. Today is '+days[new Date().getDay()]+'.'

// console.log(message)

// return message

// }('Zekiman'));






// //**************************************** */
// //**************************************** */
// //**************************************** */





// //*** (udemy - 229) FUNCTIONS THAT RETURN FUNCTION

// //* FONKSİYONDAN FONKSİYONA DÖNDÜRME



// //* >> Question fonksiyonu oluşturduk. Hobbies parametresini gönderdik.
// //* >> Switch ifadesi oluşturduk, hobbiesi dışarıdan gönderdik
// //* >> Hobbies'in 'cars' olması durumunda bir fonksiyon çağırdık. Yani fonksiyona fonksiyon döndürdük.
// //* >> döndürdüğümüz bu fonksiyon bir anonymous, isimsiz bir fonksiyon, sadece bulunduğu yerde kullanılacağı için öyle oluşturduk, fakat isteseydik dışarıdan bir fonksiyon da döndürebilirdik.
// //* >> her bir case den sonra break yazıyoruz ki, case in gerçekleşmesi halinde geri kalan case leri okumasın.

// function Question (hobbies){
//     switch(hobbies){
//         case 'cars':
//             return function(name){ 
//             console.log('Hello '+name+'. Do you like '+hobbies+'?')
//             }
//                 break;
        
//         case 'books':
//             return function(book,age){
//                 console.log('Your last book is '+book+' book, right? And your age is '+age)
//             }
//                 break;
        
//         default:
//             return function(){
//                 console.log('Your hobby is '+hobbies)
//             }
//                 break

//     }
// }

// ///////////////////////////////////

// //* >> switch statment ımızı oluşturduktan sonra test için 3 case için 3 farklı değişken atadık. 
// //* >> bu değişkenleri caselerle eşleşmesi için farklı parametrele eşitledik.

// let carsQ = Question('cars')
// let bookQ = Question('books')
// let testQ = Question('sanane')

// ///////////////////////////////////

// //* >> ardından bu fonksiyon olan değişkenleri çağırdık.
// //* >> her çağırdığımızda bize hangi case'i yazdıysak o case'e eklediğimiz parametreleri sordu. 

// carsQ('Zekiman');
// bookQ('Ali Baba',32);
// testQ()

// ///////////////////////////////////

// //* >> ve çıkan sonuç bu şekilde
// // Hello Zekiman. Do you like cars?
// // Your last book is Ali Baba book, right? And your age is 32
// // Your hobby is sanane

// ///////////////////////////////////






// //**************************************** */
// //**************************************** */
// //**************************************** */





// //*** (udemy - 230) GETTER & SETTER

// // const person = {
// //     firstName: 'Ahmet',
// //     lastName: 'Bostan'
// // }

// // console.log(`${person.firstName} ${person.lastName}`)

// //* Bu basit bir kullanım ve şu sonucu verecektir; Ahmet Bostan

// //////////////////////////////////

// //* Biz bunu ayrıca şöyle kullanabiliriz:


// // const person = {
// //     firstName: 'Ahmet',
// //     lastName: 'Bostan',
// //     fullName: function(){
// //         return `${this.firstName} ${this.lastName}`
// //     }
// // }

// // console.log(person.fullName())


// //* Person nesnesinin içine fullName adında bir değişken daha ekledik.
// //* fullName bir tane fonksiyon çalıştırmakta ve geriye Person nesnesinin Firstname + person nesnesinin lastname'ini birleştirerek döndürmekte
// //* dolayısıyla sonuç yeniden; Ahmet Bostan


// //////////////////////////////////

// //* aşağıdaki gibi biz bu nesnenin Firstname kısmını değiştirdiğimizde, sonuç değişecektir. - Fikret Bostan

// // person.firstName = 'Fikret';
// // console.log(person.fullName())

// //* ama  biz bu işlemi firstName değişkenine müdahale ederek değil de fullName fonsiyonuna müdahale ederek de gerçekleştirebiliriz.


// // const person = {
// //     firstName: 'Ahmet',
// //     lastName: 'Bostan',
// //     getFullName: function(){
// //         return `${this.firstName} ${this.lastName}`
// //     },
// //     setFullName: function(value){
// //         const parts = value.split(' ');
// //         this.firstName=parts[0];
// //         this.lastName=parts[1];
// //     }
// // }

// // person.setFullName('Mümin Yalçın');
// // console.log(person.getFullName());


// //* >>>>>>> Yukarıda yapılan işlemler:
// //* >>>>>>> fullName e etki etmek için 2 tane değişken oluşturuyoruz.
// //* >>>>>>> biri veri almak için kullanacağız, adını getFullName yapacağız,
// //* >>>>>>> bir diğeri veriyi düzenlemek için olacak. onun adı da setFullName olsun.
// //* >>>>>>> getFullName zaten basit, sadece geriye person objesinin firstName+Lastname verilerini döndürüyor.
// //* >>>>>>> setFullName de ise olay şöyle; yeni bir isim vereceğimizi varsayalım..
// //* >>>>>>> dışarıdan isim göndermek için bir parametre oluşturuyoruz, adı value olsun.
// //* >>>>>>> bu gönderdiğimiz value parametresini split methoduyla ' ' (boşluk) boşluktan böldük. Yani isim soyisim gönderdiğimizde aradaki boşluktan iki ayırdı bu değeri
// //* >>>>>>> ardından bu değere parts adında bir değişken atadık.
// //* >>>>>>> this yani bu person objesinin firtName ini, az önce parts adında oluşturduğumuz değişkenin [0] ilk elemanına eşitledik. Bu ne demek?..
// //* >>>>>>> yani isim soyisim gönderdiğimizde dışarıdan, örneğin 'Mümin Yalçın' olsun. split ile boşluktan ayırdık. elimizde iki değer kaldı. Mümin ve Yalçın. >> ve bu değerleri parts adında bir değişkene atadık. bir dizi ortaya çıktı. sonuç şöyle oldu; const parts = ['Mümin','Yalçın']
// //* >>>>>>> Son olarak, this.firstName'i parts[0] a eşitledik. bu da partsın ilk elemanına, yani Mümin'e denk gelir.
// //* >>>>>>> this.LastName'i ise parts[1]'e eşitledik. bu da parts'ın 2. elemanına, yani Yalçın'a denk gelir.

// //* >>>>>>> Dışarıda person objesine ait setFullName değişkenini, ki o da bir fonksiyondur, çağırdık.
// //* >>>>>>> Bizden istediği value parametresine yeni ekleyeceğimiz ismi girdik 'Mümin Yalçın'
// //* >>>>>>> setFullName yukarıda anlattığımız işlemi gerçekleştirdi ve consola getFullName fonksiyonunu yazdırdığımızda ise sonuç 'Mümin Yalçın' olarak çıktı.

// //////////////////////////////////

// //* >>>>>>> yazımını da şu şekilde değiştirdik; 

// //* >>>>>>> getFullName: function(){   }            >>>     get FullName(){   }
// //* >>>>>>> settFullname function(value){   }       >>>     set FullName(value){    }
// //* >>>>>>> person.setFullName('Mümin Yalçın');     >>>     person.fullName = 'Mümin Yalçın';
// //* >>>>>>> console.log(person.getFullName());      >>>     console.log(person.fullName);


// // const person = {
// //     firstName: 'Ahmet',
// //     lastName: 'Bostan',
// //     get fullName() {
// //         return `${this.firstName} ${this.lastName}`
// //     },
// //     set fullName(value){
// //         const parts = value.split(' ');
// //         this.firstName=parts[0];
// //         this.lastName=parts[1];
// //     }
// // }

// // person.fullName='Mümin Yalçın';
// // console.log(person.fullName);

// //////////////////////////////////

// //* Ayrıca şu şekilde kullanmamız da mümkündür; 

// const person = {
//     firstName: 'Ahmet',
//     lastName: 'Bostan',
// }

// Object.defineProperty(person,'fullName',{
//     get(){
//         return `${this.firstName} ${this.lastName}`
//     },
//     set(value){
//         const parts = value.split(' ');
//         this.firstName= parts[0];
//         this.lastName= parts[1];
//     }

// })

// //* >>>>>>> person değişkenini atayım isim ve soyisim bilgilerini belirttik.
// //* >>>>>>> Object.defineProperty ile nesneye bir property , bir nitelik daha ekletiyorum. 
//         //* >>> prantez için de önce hangi nesneye ekleyeceğimizi belirtiyoruz.  Object.defineProperty(person, ...)
//         //* >>> daha sonra ekleyeceğimiz property'nin adını string içinde belirtip virgün koyup süslü parantez açıyoruz.
// //* >>>>>>> get() ile getter oluşturuyoruz. ne döneceğini belirtiyoruz.
// //* >>>>>>> set() ile setter oluşturuyoruz, nasıl müdahale edeceğimizi belirtiyoruz. yukarıda anlattım bu setin içinde olanı

// console.log(person)
// //* >>>>>>> bu şekilde yazdırıldığında sonuç:   {firstName: "Ahmet", lastName: "Bostan"}    çıkacaktır.

// person.fullName='Sergen Yalçın'
// console.log(person)
// //* >>>>>>> bu şekilde yazdırıldığında sonuç:   {firstName: "Sergen", lastName: "Yalçın"}   çıkacaktır.

// //////////////////////////////////

// //* >>>>>>> Ve yeniden person nesnesine bir Property tanımlayalım;
//         //* >>> age olsun, ve değeri 50 olsun

// Object.defineProperty(person,'age',{
//     value:50,
// })

// console.log(person)
// //* >>>>>>> bu şekilde yazdırıldığında sonuç:   {firstName: "Sergen", lastName: "Yalçın", age: 50}  olacaktır.

// //* >>>>>>> şimdi de person.age'i değiştirelim ve yeniden yazdıralım.
// person.age= 61; 
// console.log(person)
// //* >>>>>>> fakat bu şekilde sonuç yine:   {firstName: "Sergen", lastName: "Yalçın", age: 50}  olacaktır. Çünkü...

// //* >>>>>>> ... bu haliyle  Object.defineProperty(person,'age',{value:50 }) sadece nesne veriyi saklamakta, üzerinde değişiklik yapamamakta. ...
// //* >>>>>>> ... yapabilmesi için;  writable:true eklememiz gerekmekte;   Object.defineProperty(person,'age',{value:50, writable:true })     

// Object.defineProperty(person,'age2',{
//     value:60,
//     writable: true
// })

// console.log(person)
// //* >>>>>>> (age2 ile farklı bir property üzerinden gösteriyorum) bu şekilde sonuç: {firstName: "Sergen", lastName: "Yalçın", age: 50, age2: 60}

// person.age2=75;
// console.log(person)
// //* >>>>>>> (age2 writable true olduğu için değiştirmeme izin verdi) ve sonuç:  {firstName: "Sergen", lastName: "Yalçın", age: 50, age2: 75}




// //*************************************/
// //*************************************/
// //*************************************/



// //*** 231. (udemy) CALL & APPLY & BIND */


// const welcome = function(age,job){
//     console.log('Welcome '+this.name+'. You are '+age+' years old and your profession is '+job+'.')
// }

// var yigit = {name:'Yiğit'}
// var mustafa = {name:'Mustafa'}
// var gamze = {name:'Gamze'}
// var cemre = {name:'Cemre'}
// var zübeyir = {name: 'Zübeyir'}
// var nimet = {name: 'Aleyna Tilki'}

// //////////////////////////////////
// //* Call ile bir fonksiyona bir obje çağırmış olduk. Ve isterseksek parametre gönderebiliyoruz.
// welcome.call(yigit,31,'tailor')
// welcome.call(mustafa,42,'teacher')
// //////////
// //* Call'un yaptığı işi yapıyor.  Apply'ın Call'dan kullanım olarak tek farkı, parametreler array dizisi içinde yazılmalı;
// welcome.apply(gamze,[20,'student'])
// welcome.apply(cemre,[56,'president'])
// //////////
// //* Bind ise Call'ın yaptığı şeyin aynısını yapıyor sadece tek farkı bunu ayrı bir fonksiyon olarak atıyor. 
// //* Böylece bind'ı çalıştırıp bir değişken atayup eşitlersek, o oluşturduğumuz yeni değişkeni çalıştırarak aynı sonuca ulaşmış oluruz.
// //* Göndereceğimiz parametreleri de yeni oluşturmuş olduğumuz fonksiyona eklemeliyiz. 
// welcomeZübeyir = welcome.bind(zübeyir)
// welcomeZübeyir(23,'driver');
// welcomeNimet = welcome.bind(nimet)
// welcomeNimet(27,'photographer');
// //////////




// //*************************************/
// //*************************************/
// //*************************************/



// //*** 232. (udemy) UYGULAMA: CALL & APPLY & BIND */

// //* Numeric Range

// //* Fonksiyona gönderdiğiniz herhangi bir sayının belli bir aralıkta olup olmadığını kontrol ediniz.

// const range = {
//     name: 'range test default: ',
//     min: 1,
//     max: 50,
//     control: function(val){
//         if(typeof val !== 'number' || val<this.min || val>this.max){
//             return console.log(this.name+false)
//         }return console.log(this.name+true)
//     }
// }

// range.control(50)  // sonuç: range test default: true

// // //////////////////////////////////
// //* Şimdi de Apply, Call ve Bind Kullanın...


// let range2 = {
//     name: 'range2 test for call: ',
//     min:60,
//     max:70
// }

// let range3 = {
//     name: 'range3 test for apply: ',
//     min:100,
//     max:150
// }

// let range4 = {
//     name: 'range4 test for bind: ',
//     min:250,
//     max:255
// }

// range.control.call(range2,70)           
// // sonuç: range2 test for call: true

// range.control.apply(range3,[151])       
// // sonuç: range3 test for apply: false

// let bindtest = range.control.bind(range4,255); bindtest();      
// // sonuç: range4 test for bind: true




// //*************************************/
// //*************************************/
// //*************************************/



// //*** 233. (udemy) ERROR HANDLING - TRY & CATCH */


// //****** Hata Türleri: ******
// //* >>>> ReferenceError 
// //* >>>> TypeError
// //* >>>> SyntaxError
// //* >>>> URIError


// //* >>>> örneğin daha önce tanımlamadığımız bir fonksiyonu yazdığımızda; ...
// // console.log(myFunction());

// //* >>>> ... beklenen sonuç şöyle olacaktır:     Uncaught ReferenceError: myFunction is not defined

// //* >>>> Hazırlık sürecinde değil de daha sonradan bu tür hatalarla karşılaşıldığında ne yapılacağını önceden söylemek amacıyla kullanılmaktadır.
// //* >>>> try{} catch{} kullanımı ile yapılır.
// //* >>>> bu ifadenin anlamı şudur, try kısmında hata oluşabilecek şeyi yazıyoruz, catch kısmında ise bu hata gerçekleştiğinde yapılacak şeyi yazıyoruz.

// let user = {
//     name: 'Ahmet Bostan'
// }

// try{
//     // console.log(myFunction())   
//     // console.log(user.name)      //* bir problem yok ama, name değil de var olmayan bir property getirmeye çalışırsak...
//     // console.log(user.age)       //* undefined  - bu bir hata değil, ama bu sonucun alınması halinde işlem yaptırmak istiyor isek kendi hata objemizi de fırlatabiliriz. Örneğin...

//     if(!user.email){
//         throw new Error('Email bilgisi alınmadı.')
//     }

//     //* meali şudur: user objesinin email property'si mevcut değilse, yani null ise..
//     //* bir Error fırlat. bunun yazılışı da; throw new Error
//     //* fırlatılacak hatanın ne olacağını da yazabiliriz, throw new Error('Email bilgisi alınmadı.')

// }
// catch(e){                       //* aşağıdaki beklenen sonuçlar try kısmında 1. sıradaki myFunction için yazılmıştır.
//     console.log(e)              //*  ReferenceError: myFunction is not defined
//     console.log(e.message)      //*  myFunction is not defined   
//     console.log(e.name)         //*  ReferenceError  
//     console.log(e instanceof ReferenceError)    //*  true         (bu bir referans error mu? - doğru)
//     console.log(e instanceof TypeError)         //*  false        (bu bir type error mu? - yanlış)
//     console.log(typeof e)       //*  object

// }
// finally{
//     console.log('finally block')
// }

// //* Sadece try kısmında hata yakalaadığında catch kısmı çalışır.
// //* Try da hata yakalaması durumunda catch de ne yapacağını söyler.
// //* En son finally bloğu ise catch veya try kısmı çalışsın veya çalışmasın, finally çalışır.




// //*************************************/
// //*************************************/
// //*************************************/



// //*** 234. (udemy) UYGULAMA: ERROR HANDLING -TRY & CATCH */


// document.getElementById('myBtn').addEventListener('click',function(e){
//     //* Butona click eventi ekledik. Bir fonksiyon gerçekleşeceğini belirttik. e parametresi verdik.
    
//     e.preventDefault();
//     //* e parametresine preventDefault() ekleyerek, bu eventin gerçekleşmesi halinde sayfanın yenilenmesini engelledik.


//     const name = document.getElementById('name');
//     //* name idli form elemanına değişken atadık.

//     const age = document.getElementById('age');
//     //* age id li form elemanına değişken atadık.

//     const errors = document.getElementById('errors');
//     //* errors idli dive değişken atadık

//     errors.innerHTML=''
//     //* Bunu yazmamızın sebebi, submit olduğunda bir hata yazdırılmakta, forma doğru bilgi girip gönderdiğinde hata ekranda yazmaya devam etmekte. Bu yüzden html kısmını sıfırlıyoruz.
    
//     //////////////////

//     try{
//     //* Try Catch şablonu oluşturduk. Try kısmında yaşanabilecek hataları belirliyoruz.

//     if(name.value.length===0){
//         throw new Error('Name is required.')
//     }
//     //* eğer name değerinin uzunluğu 0 a eşit ise (yani boşsa), hata fırlat. 


//     if(name.value.length>20){
//         throw new Error('Name is bigger than 20 characters.')
//     }
//     //* Eğer name değerinin uzunluğu 20 den fazla ise hata fırlat.


//     if(age.value.length===0){
//         throw new Error('Age is required.')
//     }
//     //* Eğer age değeri boşsa hata fırlat.


//     if(isNaN(age.value)){
//         throw new Error('Please use only digits in Age field.')
//     }
//     //* Eğer age değeri bir rakam değil ise hata fırlat

    
//     console.log('Form is submitted.')
//     //* Eğer try da belirtilen herhangi bir durumun yaşanmaması halinde gerçekleştirilecek olay. 


//     }catch(err){
//     //* Catch kısmında ise yukarıdaki try kısmında belirtilen durumların herhangi birinin yaşanması halinde gerçekleşecek olayları yazıyoruz.
//     //* err adında bir parametre belirledik.

//         errors.innerHTML= err.message;
//         //* Yukarıda errors ile belirlediğimiz div'in html'ine müdahale ediyoruz.
//         //* err parametresi yazdırıyoruz. yani try kısmında fırlatılan hatayı, yakalayıp, Errors divinin html ine yazdırıyoruz.
//         //* err.message ile yukarıda belirlediğimiz hatanın adını değil (Error demiştik adına), sadece mesajı yazdırıyoruz. 
//     }finally{
//         name.value='';
//         age.value='';
//         //* Bu işlemler ise if veya catch'in gerçekleşmesine bakılmaksızın gerçekleşecek işlemleri söyler. 
//         //* Yapacağı işlem submit butonuna basıldığı anda name ve age kısımlarındaki değerleri sıfırlamak olacaktır.
//         //* Burada kullanımı kullanıcı deneyimi açısından mantıklı değildir, çünkü bir hata fırlatılması halinde kullanıcı değeri düzeltip tekrar gönderilecekken biz bunları yazarak hata alsa dahi değerleri tamamen sıfırlamaktayız. Bu yüzden kullanıcı bir hata mesajı aldığında baştan tüm verileri girmek zorunda kalır.

//     }

// })






// //**************************************** */
// //**************************************** */
// //**************************************** */





// //*** (udemy - 235) APP QUIZ - Question Object


//* Create Constructor

let questionCon = function(question,choice,correct){
    this.question=question,
    this.choice=choice,
    this.correct=correct
}

//* Create Instances

let question1 = new questionCon('How many legs does a spider have',['Six','Eight','Ten','Twelve'],'Eight')
let question2 = new questionCon('What is the name of the toy cowboy in Toy Story?',['Andy','Woody','Molly','Rex'],'Woody')
let question3 = new questionCon('What is the real color of an emerald?',['Green','Black','Brown','White'],'Green')
let question4 = new questionCon('How many planets are in our solar system?',['Ten','Nine','Eight','Seven'],'Eight')
let question5 = new questionCon('Who is Mickey Mouse’s girlfriend?',['Minnie Mouse','Cutie Mouse','Pinky Mouse','Finley Mouse'],'Minnie Mouse')


//* Correct Answer Counter
let correctCount = 0;


//* Add a function that confirms the answer to Object's prototype
questionCon.prototype.isThatTrue = function(answer){
    if(answer===this.correct){
        console.log(answer+' correct, bravo!');
        return correctCount++
    }return console.log(answer+' is wrong, sorry :(')
}


//* Run the function with an instance
question1.isThatTrue('Eight')


//* Print the correct answer count
console.log(correctCount)


//* Show the questions after clicked to start button
// Variables
const startButton = document.getElementById('startButton')
const quizSection = document.getElementById('quiz')
const question = document.getElementById('question')
const choice = document.getElementById('choices')
const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')
const questionCount = document.getElementById('questionCount')

//Define order of question variable
let orderQuestion = 0;

//Change the questions
choice.addEventListener('click',function(e){
    e.preventDefault();
    orderQuestion++;
    console.log(orderQuestion);
   
    //Change the content of the questions
    if(orderQuestion===1){
        question.innerHTML=question2.question
        choice1.setAttribute('value', question2.choice[0])
        choice2.setAttribute('value', question2.choice[1])
        choice3.setAttribute('value', question2.choice[2])
        choice4.setAttribute('value', question2.choice[3])
        questionCount.innerHTML='Question 2/5'
    }
    if(orderQuestion===2){
        question.innerHTML=question3.question
        choice1.setAttribute('value', question3.choice[0])
        choice2.setAttribute('value', question3.choice[1])
        choice3.setAttribute('value', question3.choice[2])
        choice4.setAttribute('value', question3.choice[3])
        questionCount.innerHTML='Question 3/5'
    }
    if(orderQuestion===3){
        question.innerHTML=question4.question
        choice1.setAttribute('value', question4.choice[0])
        choice2.setAttribute('value', question4.choice[1])
        choice3.setAttribute('value', question4.choice[2])
        choice4.setAttribute('value', question4.choice[3])
        questionCount.innerHTML='Question 4/5'
    }
    if(orderQuestion===4){
        question.innerHTML=question5.question
        choice1.setAttribute('value', question5.choice[0])
        choice2.setAttribute('value', question5.choice[1])
        choice3.setAttribute('value', question5.choice[2])
        choice4.setAttribute('value', question5.choice[3])
        questionCount.innerHTML='Question 5/5'
    }

    //set the after
    if(orderQuestion>=5){
        quizSection.style.display='none';
    }
    
})

//Set the question


// Add Event Listeners : Click to Start
startButton.addEventListener('click',function(e){
    e.preventDefault();
    
    // When click to start, show the quiz div
    quizSection.style.display='block';

    // when click to start, hide the start button
    startButton.style.display='none';
    
    // when click to start, show the first question
    question.innerHTML=question1.question;

    //when click to start, show the choices of first question by change the value of submit buttons
    choice1.setAttribute('value', question1.choice[0]);
    choice2.setAttribute('value', question1.choice[1]);
    choice3.setAttribute('value', question1.choice[2]);
    choice4.setAttribute('value', question1.choice[3]);

    //Question title 0/5
    questionCount.innerHTML='Question 1/5'

})



