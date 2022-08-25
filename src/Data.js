const products=[
  {
    'id':1,
    'title':'Sandesh',
    'type':'Chhena',
    'filename':'https://c.ndtvimg.com/2019-10/c66kbmr8_durga-puja-2019-sandesh-recipe_625x300_01_October_19.jpg',
    'price':499,
    'rating':4,
    'description':'A true blue Bengali dessert, Sandesh (or sandesh) is one dessert without which your festive celebration would be incomplete. Be it Durga puja or Diwali, this festive treat is sure to make you drool for long. Find the recipe of sandesh here.'
},{
    'id':2,
    'title':'Rasgulla',
    'type':'Chhena',
    'filename':'https://i.ndtvimg.com/i/2017-10/rasgulla-recipe_620x330_51508133855.jpg',
    'price':750,
    'rating':4,
    'description':'Is there any celebration without a generous serving of sugar-laden rasgulla?! Another takeaway from the rich Bengali cuisine, rasgullas (or roshogollas) are spongy balls made of chhena and dipped in sugar syrup. Find the recipe of rasgulla here.'
},{
    'id':3,
    'title':'Chhena Murki',
    'type':'Chhena',
    'filename':'https://www.ndtv.com/cooks/images/chenna-murkhi_med.jpg',
    'price':1000,
    'rating':4,
    'description':'Bite-sized sugary delights, chhena murki is a popular sweet that would simply melt in your mouth. It is a simple and quick sweet recipe that requires just a few ingredients and would be perfect to prepare for the upcoming festival.'
},{
    'id':4,
    'title':'Channar Payesh',
    'type':'Chhena',
    'filename':'https://static.toiimg.com/thumb/59576721.cms?imgsize=304779&width=800&height=800',
    'price':1000,
    'rating':4,
    'description':'Relishing a luscious kheer or pudding is never a bad idea during the festive season. Channar payesh is a quick and easy pudding recipe made with chhena, milk, cardamom, rose water, sugar and loads of dry fruits.'
},{
    'id':5,
    'title':'Rasmalai',
    'type':'Chhena',
    'filename':'https://c.ndtvimg.com/2019-01/tghm4oco_rasmalai_625x300_31_January_19.jpg',
    'price':1200,
    'rating':4,
    'description':"Aren't you already slurping at the mere mention of this delectable Bengali dessert? Rasmalai literally translates to 'juice' from 'ras' and 'cream' from 'malai', and makes for a mouth-watering treat no matter what the occasion is. The creamy, luscious rabdi with semi-flattened rasgullas dipped in it is exactly what dessert lovers dream of."
},{
  "id": 6,
  "title": "Motichur",
  "filename": "https://5.imimg.com/data5/MY/JI/MY-17063658/motichoor-laddu-1kg-500x500.png",
  "price":160,
  'rating':4,
  'type':'Laddoo',
  'description':"Commonly offered as prasad, Motichoor Ladoo is a favourite festive treat across India. Admit it, once you start having it, you cannot just hold back at one. Motichoor Ladoo or Motichur Ladoo is a round-shaped sweetmeat made from fine, tiny balls of besan. The chickpea flour globules is fried in ghee or oil, and soaked in sugar syrup. The sweet, pearl-like balls are then moulded into ladoos."
},
{
  "id": 7,
  "title": "Ragi Coconut Laddoo",
  "filename": "https://www.lifeberrys.com/img/article/ragi-coconut-ladoo-recipe-1631209167-lb.jpg",
  "price":140,
  'description':"An immensely popular dish found in India, Ragi Coconut Ladoo is nutritionally rich due to the high protein and mineral value present in its main ingredient, Ragi. Here's a yummy ladoo recipe that is wholesome, healthy and produced with coconut, jaggery and crunchy peanuts.",
  'rating':4,
  'type':'Laddoo'
},
{
  "id": 8,
  "title": "Besan Ke Laddoo",
  "filename": "https://i.ndtvimg.com/i/2017-05/desserts-besan-ladoo_620x350_71494239743.jpg",
  "price":150,
  'description':"Gram flour or besan roasted with ghee in a kadhai, flavored with sugar and cardamom and shaped into tight round balls, decorated with almonds and pistachios. Besan ka ladoo is an Indian dessert usually made during festive times. If stored well, besan ke ladoo has a long shelf life so you can relish them for many days.",
  'rating':4,
  'type':'Laddoo'
},
{
  "id": 9,
  "title": "Boondi Ke Laddoo",
  "filename": "https://i.ndtvimg.com/i/2016-02/boondikeladoo_625x350_41455271162.jpg",
  "price":140,
  'description':"A very famous Indian dessert usually made during festive times like Diwali. Also known as Motichoor ke ladoo, it is a sweet treat with cashews, raisins, saffron and the light flavour of cardamom. Boondi ke ladoos are a mix of small boondis and are relished equally by kids and adults. Mouth-watering much? Get going and try this now!",
  'rating':4,
  'type':'Laddoo'
},
{
  "id": 10,
  "title": "Aate Ke Laddoo",
  "filename": "https://i.ndtvimg.com/i/2017-10/atta-ladoo-recipe_620x350_71508236021.jpg",
  'price':90,
  'type':'Laddoo',
  'description':"Atta Ladoo is a simple recipe with few ingredients, but the texture and taste is amazing! A whole wheat sweet commonly made in the Indian households, atta ladoo is loaded with ghee and filled with so many nuts making it crunchy, nutritious and super yummy.",
  'rating':4
},
{
  "id": 11,
  "title": "Til ke Laddoo",
  "filename": "https://i.ndtvimg.com/i/2018-01/til-ladoo_620x330_41515586167.jpg",
  "price":155,
  'type':'Laddoo',
  'description':"A festive treat, 'Til Ladoos' are usually prepared to celebrate Lohri, Makar Sankranti or Janmashtmi. This delicate sweet is made with roasted sesame seeds and jaggery and flavoured with saffron and will leave you asking for more.",
  'rating':4
},
{
  "id": 12,
  "title": "Menthi ke laddo",
  "filename": "https://i.ndtvimg.com/i/2018-01/sonth-methi-ladoo_620x330_51515661830.jpg",
  "price":170,
  'type':'Laddoo',
  'description':"Ladoos made with fenugreek seeds, ginger, saunf and jaggery. aSonth aur Methi ke Ladoo are a healthy snack option, specifically good for pregnant or lactating women and also provide warmth to the body thus being a great winter special snack.",
  'rating':4
},
{
  "id": 13,
  "title": "Murmura Ladoo",
  "filename": "https://i.ndtvimg.com/i/2017-03/coconut-til-laddoo_620x330_61490875134.jpg",
  "price":175,
  'type':'Laddoo',
  'description':"Crispy ladoos made with puffed rice and molten jaggery, crunchy savoury that will not let you stop from eating just one. Murmura ladoo is quite filling and are among one of the most loved sweet treats around.",
  'rating':4
},
{
  "id": 14,
  "title": " Panjiri Ladoo",
  "filename": "https://i.ndtvimg.com/i/2017-11/ladoo-gondh-620_620x350_81510910984.jpg",
  "price":180,
  'type':'Laddoo',
  'description':"Made with wheat flour along with semolina and packed with goodness of makhana and dry fruits like almonds and cashew nuts. This treat is all what you need to satisfy your sweet tooth cravings.",
  'rating':4
},
{
  "id": 15,
  "title": "Dates Laddoo",
  "filename": "https://c.ndtvimg.com/2018-09/aqhak6gg_ladoo_625x300_27_September_18.jpg",
  "price":200,
  'type':'Laddoo',
  'description':"Healthy balls of nuts and dates, this ladoo recipe is the perfect snack to binge as a snack. Made with just three ingredients, you can get these delicious ladoos that will keep you full for long. ",
  'rating':4
},
{
  "id": 16,
  "title": "Kaju Katli",
  "filename": "https://i.ndtvimg.com/i/2017-09/kaju-katli_620x333_71505992427.jpg",
  "price":700,
  'description':"Recreate the sweet sensation of Kaju Katli right in the comfort of your kitchen. Quick, easy and an absolute favourite of all.",
  'type':'Barfi',
  'rating':4
},
{
  "id": 17,
  "title": "Besan Ki Barfi",
  "filename": "https://i.ndtvimg.com/i/2017-05/desserts-besan-barfi_620x350_71494239616.jpg",
  "price":350,
  'description':"Make this favorite sweet at home with three simple ingredients gram flour (besan), ghee and sugar syrup.",
  'type':'Barfi',
  'rating':4
},
{
  "id": 18,
  "title": "Moong Dal Ki Barfi",
  "filename": "https://i.ndtvimg.com/i/2016-06/besan-barfi_625x350_61464849934.jpg",
  "price":450,
  'description':"A sweet treat made with moong dal, khoya and almonds. So delicious that you are sure to go for seconds.",
  'type':'Barfi',
  'rating':4
},
{
  "id": 19,
  "title": "Badam Barfi",
  "filename": "https://c.ndtvimg.com/2018-11/3g0ifedo_badam-ki-barfi_625x300_05_November_18.jpg",
  "price":550,
  'description':"This traditional Badam Barfi comes with a fruity punch of papayas. An inventive treat that your guests would love to indulge in.",
  'type':'Barfi',
  'rating':4
},
{
  "id": 20,
  "title": "Nachni Barfi",
  "filename": "https://i.ndtvimg.com/i/2017-10/nachni-barfi_620x330_51507023146.jpg",
  "price":400,
  'description':"Recreate the sweet sensation of Kaju Katli right in the comfort of your kitchen. Quick, easy and an absolute favourite of all.",
  'type':'Barfi',
  'rating':4
},
{
  "id": 21,
  "title": "Nariyal ki Barfi",
  "filename": "https://i.ndtvimg.com/i/2017-03/nariyal-barfi_620x330_81490875034.jpg",
  "price":375,
  'description':"A sweet temptation made with fine coconuts, khoya, ghee and sugar. Make this traditional sweet at home with just five simple ingredients.",
  'type':'Barfi',
  'rating':4
},
{
  "id": 22,
  "title": "Lauki Gulkand Barfi",
  "filename": "https://c.ndtvimg.com/2018-10/7030nd58_lauki-gulkand-barfi_625x300_31_October_18.jpg",
  "price":300,
  'description':"The distinct flavours of bottle gourd and gulkand come together to make this unique dessert that will surprise everyone.",
  'type':'Barfi',
  'rating':4
},
{
  "id": 23,
  "title": "Badaam ki Barfi",
  "filename": "https://c.ndtvimg.com/2018-10/1oq67c5_faldhari-barfi_625x300_11_October_18.jpg",
  "price":600,
  'description':"A popular Indian sweet made with the goodness of almonds. Made with a few ingredients, this can be your go-to recipe for an Indian sweet. Perfect for the festive season or other special occasions.",
  'type':'Barfi',
  'rating':4
},
{
  "id": 24,
  "title": "Kaju Rose Barfi",
  "filename": "https://c.ndtvimg.com/2021-09/66br56b8_kaju-barfi_625x300_03_September_21.jpg",
  "price":655,
  'description':"This recipe of Kaju Rose barfi is going to become your number one favourite as it is easy to make and yummy in the taste. Make this barfi for any party, event or occasion, and people of all ages will love to gorge on it.",
  'type':'Barfi',
  'rating':4
},
{
  "id": 25,
  "title": "Sattu Cashew Barfi",
  "filename": "https://c.ndtvimg.com/2021-11/ncskj818_sattu-cashew-barfi_625x300_01_November_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
  "price":740,
  'description':"Till now, we have most commonly heard about Kaju ki barfi, badam barfi, moong dal barfi and so on. But this recipe of sattu cashew ki barfi is going to become your number one favourite as it is easy to make and yummy in its taste. Make this barfi for any party, event or occasion, and people of all ages will love to gorge on it.",
  'type':'Barfi',
  'rating':4
},
{"id": 26,
  "title": "Mango Kulfi",
  "filename": "https://i.ndtvimg.com/i/2015-05/kulfi_625x350_71432203959.jpg",
  "price":240,
  'description':"This one's a seasonal delight. Use fresh, sweet mangoes for a burst of flavour. This recipe used condensed milk, so you cut down on time and labour.",
  'type':'Kulfi',
  'rating':4
},
{"id": 27,
  "title": "Trio of Kulfis",
  "filename": "https://i.ndtvimg.com/i/2015-05/kulfi_625x350_61432203874.jpg",
  "price":200,
  'description':"Three unconventional flavours that everyone will love you for - kaju katli, guava and lassi. Flavoured kulfis are trendy and great to show off some culinary moves and impress your guests.",
  'type':'Kulfi',
  'rating':4
},
{"id": 28,
  "title": "Almond Malai Kulfi",
  "filename": "https://i.ndtvimg.com/i/2015-05/kulfi_625x350_41432204482.jpg",
  "price":250,
  'description':" Kulfi is a very famous Indian dessert and people of all age groups love it. Condensed milk, saffron, dry fruits are teamed together, chilled and served in a matki.",
  'type':'Kulfi',
  'rating':4
},
{"id": 29,
  "title": "Pista Kulfi",
  "filename": "https://i.ndtvimg.com/i/2018-03/kulfi_620x350_51521531449.jpg",
  "price":250,
  'description':" The original recipe which uses full fat milk that is simmered till reduced. The traditional kulfi stands out due to the dense, creamy flavour.",
  'type':'Kulfi',
  'rating':4
},
{"id": 30,
  "title": "Cranberry Kulfi",
  "filename": "https://i.ndtvimg.com/i/2015-05/kulfi_625x350_61432203833.jpg",
  "price":250,
  'description':" An easy summer dessert made with fresh mangoes, sweet cranberries and lime. Indian Accent serves the traditional kulfi in a modern avatar.",
  'type':'Kulfi',
  'rating':4
},
{"id": 31,
  "title": "Kesar Kulfi",
  "filename": "https://i.ndtvimg.com/i/2017-03/kulfi_620x350_51490945811.jpg",
  "price":250,
  'description':" Goodness of saffron along with almonds, cashews and cardamom makes for this delectable kesar kulfi that you can easily prepare at home in no more than 40 minutes!",
  'type':'Kulfi',
  'rating':4
}

]
export default products