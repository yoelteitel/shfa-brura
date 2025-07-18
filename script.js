const words = [
  {hebrew: "שלום1", english: "Hello1"},
  {hebrew: "כלב2", english: "Dog2"},
  {hebrew: "חתול3", english: "Cat3"},
  {hebrew: "מים4", english: "Water4"},
  {hebrew: "ספר5", english: "Book5"},
  {hebrew: "כיסא6", english: "Chair6"},
  {hebrew: "שולחן7", english: "Table7"},
  {hebrew: "דלת8", english: "Door8"},
  {hebrew: "חלון9", english: "Window9"},
  {hebrew: "בית10", english: "House10"},
  {hebrew: "עץ11", english: "Tree11"},
  {hebrew: "שמש12", english: "Sun12"},
  {hebrew: "ירח13", english: "Moon13"},
  {hebrew: "כוכב14", english: "Star14"},
  {hebrew: "ים15", english: "Sea15"},
  {hebrew: "נהר16", english: "River16"},
  {hebrew: "אדמה17", english: "Earth17"},
  {hebrew: "שמיים18", english: "Sky18"},
  {hebrew: "רוח19", english: "Wind19"},
  {hebrew: "גשם20", english: "Rain20"},
  {hebrew: "שלג21", english: "Snow21"},
  {hebrew: "חול22", english: "Sand22"},
  {hebrew: "רכב23", english: "Car23"},
  {hebrew: "אופניים24", english: "Bicycle24"},
  {hebrew: "מטוס25", english: "Airplane25"},
  {hebrew: "אוטובוס26", english: "Bus26"},
  {hebrew: "רכבת27", english: "Train27"},
  {hebrew: "מעלית28", english: "Elevator28"},
  {hebrew: "כביש29", english: "Road29"},
  {hebrew: "גשר30", english: "Bridge30"},
  {hebrew: "מחשב31", english: "Computer31"},
  {hebrew: "טלפון32", english: "Phone32"},
  {hebrew: "עכבר33", english: "Mouse33"},
  {hebrew: "מקלדת34", english: "Keyboard34"},
  {hebrew: "מסך35", english: "Screen35"},
  {hebrew: "עט36", english: "Pen36"},
  {hebrew: "עיפרון37", english: "Pencil37"},
  {hebrew: "נייר38", english: "Paper38"},
  {hebrew: "מחברת39", english: "Notebook39"},
  {hebrew: "תיק40", english: "Bag40"},
  {hebrew: "בגד41", english: "Clothes41"},
  {hebrew: "כובע42", english: "Hat42"},
  {hebrew: "נעל43", english: "Shoe43"},
  {hebrew: "גרב44", english: "Sock44"},
  {hebrew: "מכנסיים45", english: "Pants45"},
  {hebrew: "חולצה46", english: "Shirt46"},
  {hebrew: "שמלה47", english: "Dress47"},
  {hebrew: "מעיל48", english: "Coat48"},
  {hebrew: "צעיף49", english: "Scarf49"},
  {hebrew: "שעון50", english: "Watch50"},
  {hebrew: "אוכל51", english: "Food51"},
  {hebrew: "לחם52", english: "Bread52"},
  {hebrew: "חמאה53", english: "Butter53"},
  {hebrew: "חלב54", english: "Milk54"},
  {hebrew: "בשר55", english: "Meat55"},
  {hebrew: "דג56", english: "Fish56"},
  {hebrew: "ביצה57", english: "Egg57"},
  {hebrew: "פירות58", english: "Fruits58"},
  {hebrew: "ירקות59", english: "Vegetables59"},
  {hebrew: "תפוח60", english: "Apple60"},
  {hebrew: "בננה61", english: "Banana61"},
  {hebrew: "ענב62", english: "Grape62"},
  {hebrew: "אגס63", english: "Pear63"},
  {hebrew: "תפוז64", english: "Orange64"},
  {hebrew: "מלון65", english: "Melon65"},
  {hebrew: "עוגה66", english: "Cake66"},
  {hebrew: "סוכר67", english: "Sugar67"},
  {hebrew: "מלח68", english: "Salt68"},
  {hebrew: "פלפל69", english: "Pepper69"},
  {hebrew: "דבש70", english: "Honey70"},
  {hebrew: "שוקולד71", english: "Chocolate71"},
  {hebrew: "גלידה72", english: "Ice Cream72"},
  {hebrew: "עוגייה73", english: "Cookie73"},
  {hebrew: "קפה74", english: "Coffee74"},
  {hebrew: "תה75", english: "Tea75"},
  {hebrew: "חדר76", english: "Room76"},
  {hebrew: "סלון77", english: "Living Room77"},
  {hebrew: "מטבח78", english: "Kitchen78"},
  {hebrew: "חדר שינה79", english: "Bedroom79"},
  {hebrew: "שירותים80", english: "Bathroom80"},
  {hebrew: "מיטה81", english: "Bed81"},
  {hebrew: "כסא82", english: "Chair82"},
  {hebrew: "שולחן כתיבה83", english: "Desk83"},
  {hebrew: "ספה84", english: "Sofa84"},
  {hebrew: "מנורה85", english: "Lamp85"},
  {hebrew: "טלוויזיה86", english: "Television86"},
  {hebrew: "רדיו87", english: "Radio87"},
  {hebrew: "שעון קיר88", english: "Wall Clock88"},
  {hebrew: "מראה89", english: "Mirror89"},
  {hebrew: "שטיח90", english: "Carpet90"},
  {hebrew: "עיר91", english: "City91"},
  {hebrew: "כפר92", english: "Village92"},
  {hebrew: "רחוב93", english: "Street93"},
  {hebrew: "חנות94", english: "Shop94"},
  {hebrew: "שוק95", english: "Market95"},
  {hebrew: "ספריה96", english: "Library96"},
  {hebrew: "בית ספר97", english: "School97"},
  {hebrew: "אוניברסיטה98", english: "University98"},
  {hebrew: "חצר99", english: "Yard99"},
  {hebrew: "פארק100", english: "Park100"},
  {hebrew: "שלום101", english: "Hello101"},
  {hebrew: "כלב102", english: "Dog102"},
  {hebrew: "חתול103", english: "Cat103"},
  {hebrew: "מים104", english: "Water104"},
  {hebrew: "ספר105", english: "Book105"},
  {hebrew: "כיסא106", english: "Chair106"},
  {hebrew: "שולחן107", english: "Table107"},
  {hebrew: "דלת108", english: "Door108"},
  {hebrew: "חלון109", english: "Window109"},
  {hebrew: "בית110", english: "House110"},
  {hebrew: "עץ111", english: "Tree111"},
  {hebrew: "שמש112", english: "Sun112"},
  {hebrew: "ירח113", english: "Moon113"},
  {hebrew: "כוכב114", english: "Star114"},
  {hebrew: "ים115", english: "Sea115"},
  {hebrew: "נהר116", english: "River116"},
  {hebrew: "אדמה117", english: "Earth117"},
  {hebrew: "שמיים118", english: "Sky118"},
  {hebrew: "רוח119", english: "Wind119"},
  {hebrew: "גשם120", english: "Rain120"},
  {hebrew: "שלג121", english: "Snow121"},
  {hebrew: "חול122", english: "Sand122"},
  {hebrew: "רכב123", english: "Car123"},
  {hebrew: "אופניים124", english: "Bicycle124"},
  {hebrew: "מטוס125", english: "Airplane125"},
  {hebrew: "אוטובוס126", english: "Bus126"},
  {hebrew: "רכבת127", english: "Train127"},
  {hebrew: "מעלית128", english: "Elevator128"},
  {hebrew: "כביש129", english: "Road129"},
  {hebrew: "גשר130", english: "Bridge130"},
  {hebrew: "מחשב131", english: "Computer131"},
  {hebrew: "טלפון132", english: "Phone132"},
  {hebrew: "עכבר133", english: "Mouse133"},
  {hebrew: "מקלדת134", english: "Keyboard134"},
  {hebrew: "מסך135", english: "Screen135"},
  {hebrew: "עט136", english: "Pen136"},
  {hebrew: "עיפרון137", english: "Pencil137"},
  {hebrew: "נייר138", english: "Paper138"},
  {hebrew: "מחברת139", english: "Notebook139"},
  {hebrew: "תיק140", english: "Bag140"},
  {hebrew: "בגד141", english: "Clothes141"},
  {hebrew: "כובע142", english: "Hat142"},
  {hebrew: "נעל143", english: "Shoe143"},
  {hebrew: "גרב144", english: "Sock144"},
  {hebrew: "מכנסיים145", english: "Pants145"},
  {hebrew: "חולצה146", english: "Shirt146"},
  {hebrew: "שמלה147", english: "Dress147"},
  {hebrew: "מעיל148", english: "Coat148"},
  {hebrew: "צעיף149", english: "Scarf149"},
  {hebrew: "שעון150", english: "Watch150"},
  {hebrew: "אוכל151", english: "Food151"},
  {hebrew: "לחם152", english: "Bread152"},
  {hebrew: "חמאה153", english: "Butter153"},
  {hebrew: "חלב154", english: "Milk154"},
  {hebrew: "בשר155", english: "Meat155"},
  {hebrew: "דג156", english: "Fish156"},
  {hebrew: "ביצה157", english: "Egg157"},
  {hebrew: "פירות158", english: "Fruits158"},
  {hebrew: "ירקות159", english: "Vegetables159"},
  {hebrew: "תפוח160", english: "Apple160"},
  {hebrew: "בננה161", english: "Banana161"},
  {hebrew: "ענב162", english: "Grape162"},
  {hebrew: "אגס163", english: "Pear163"},
  {hebrew: "תפוז164", english: "Orange164"},
  {hebrew: "מלון165", english: "Melon165"},
  {hebrew: "עוגה166", english: "Cake166"},
  {hebrew: "סוכר167", english: "Sugar167"},
  {hebrew: "מלח168", english: "Salt168"},
  {hebrew: "פלפל169", english: "Pepper169"},
  {hebrew: "דבש170", english: "Honey170"},
  {hebrew: "שוקולד171", english: "Chocolate171"},
  {hebrew: "גלידה172", english: "Ice Cream172"},
  {hebrew: "עוגייה173", english: "Cookie173"},
  {hebrew: "קפה174", english: "Coffee174"},
  {hebrew: "תה175", english: "Tea175"},
  {hebrew: "חדר176", english: "Room176"},
  {hebrew: "סלון177", english: "Living Room177"},
  {hebrew: "מטבח178", english: "Kitchen178"},
  {hebrew: "חדר שינה179", english: "Bedroom179"},
  {hebrew: "שירותים180", english: "Bathroom180"},
  {hebrew: "מיטה181", english: "Bed181"},
  {hebrew: "כסא182", english: "Chair182"},
  {hebrew: "שולחן כתיבה183", english: "Desk183"},
  {hebrew: "ספה184", english: "Sofa184"},
  {hebrew: "מנורה185", english: "Lamp185"},
  {hebrew: "טלוויזיה186", english: "Television186"},
  {hebrew: "רדיו187", english: "Radio187"},
  {hebrew: "שעון קיר188", english: "Wall Clock188"},
  {hebrew: "מראה189", english: "Mirror189"},
  {hebrew: "שטיח190", english: "Carpet190"},
  {hebrew: "עיר191", english: "City191"},
  {hebrew: "כפר192", english: "Village192"},
  {hebrew: "רחוב193", english: "Street193"},
  {hebrew: "חנות194", english: "Shop194"},
  {hebrew: "שוק195", english: "Market195"},
  {hebrew: "ספריה196", english: "Library196"},
  {hebrew: "בית ספר197", english: "School197"},
  {hebrew: "אוניברסיטה198", english: "University198"},
  {hebrew: "חצר199", english: "Yard199"},
  {hebrew: "פארק200", english: "Park200"},
  {hebrew: "שלום201", english: "Hello201"},
  {hebrew: "כלב202", english: "Dog202"},
  {hebrew: "חתול203", english: "Cat203"},
  {hebrew: "מים204", english: "Water204"},
  {hebrew: "ספר205", english: "Book205"},
  {hebrew: "כיסא206", english: "Chair206"},
  {hebrew: "שולחן207", english: "Table207"},
  {hebrew: "דלת208", english: "Door208"},
  {hebrew: "חלון209", english: "Window209"},
  {hebrew: "בית210", english: "House210"},
  {hebrew: "עץ211", english: "Tree211"},
  {hebrew: "שמש212", english: "Sun212"},
  {hebrew: "ירח213", english: "Moon213"},
  {hebrew: "כוכב214", english: "Star214"},
  {hebrew: "ים215", english: "Sea215"},
  {hebrew: "נהר216", english: "River216"},
  {hebrew: "אדמה217", english: "Earth217"},
  {hebrew: "שמיים218", english: "Sky218"},
  {hebrew: "רוח219", english: "Wind219"},
  {hebrew: "גשם220", english: "Rain220"},
  {hebrew: "שלג221", english: "Snow221"},
  {hebrew: "חול222", english: "Sand222"},
  {hebrew: "רכב223", english: "Car223"},
  {hebrew: "אופניים224", english: "Bicycle224"},
  {hebrew: "מטוס225", english: "Airplane225"},
  {hebrew: "אוטובוס226", english: "Bus226"},
  {hebrew: "רכבת227", english: "Train227"},
  {hebrew: "מעלית228", english: "Elevator228"},
  {hebrew: "כביש229", english: "Road229"},
  {hebrew: "גשר230", english: "Bridge230"},
  {hebrew: "מחשב231", english: "Computer231"},
  {hebrew: "טלפון232", english: "Phone232"},
  {hebrew: "עכבר233", english: "Mouse233"},
  {hebrew: "מקלדת234", english: "Keyboard234"},
  {hebrew: "מסך235", english: "Screen235"},
  {hebrew: "עט236", english: "Pen236"},
  {hebrew: "עיפרון237", english: "Pencil237"},
  {hebrew: "נייר238", english: "Paper238"},
  {hebrew: "מחברת239", english: "Notebook239"},
  {hebrew: "תיק240", english: "Bag240"},
  {hebrew: "בגד241", english: "Clothes241"},
  {hebrew: "כובע242", english: "Hat242"},
  {hebrew: "נעל243", english: "Shoe243"},
  {hebrew: "גרב244", english: "Sock244"},
  {hebrew: "מכנסיים245", english: "Pants245"},
  {hebrew: "חולצה246", english: "Shirt246"},
  {hebrew: "שמלה247", english: "Dress247"},
  {hebrew: "מעיל248", english: "Coat248"},
  {hebrew: "צעיף249", english: "Scarf249"},
  {hebrew: "שעון250", english: "Watch250"},
  {hebrew: "אוכל251", english: "Food251"},
  {hebrew: "לחם252", english: "Bread252"},
  {hebrew: "חמאה253", english: "Butter253"},
  {hebrew: "חלב254", english: "Milk254"},
  {hebrew: "בשר255", english: "Meat255"},
  {hebrew: "דג256", english: "Fish256"},
  {hebrew: "ביצה257", english: "Egg257"},
  {hebrew: "פירות258", english: "Fruits258"},
  {hebrew: "ירקות259", english: "Vegetables259"},
  {hebrew: "תפוח260", english: "Apple260"},
  {hebrew: "בננה261", english: "Banana261"},
  {hebrew: "ענב262", english: "Grape262"},
  {hebrew: "אגס263", english: "Pear263"},
  {hebrew: "תפוז264", english: "Orange264"},
  {hebrew: "מלון265", english: "Melon265"},
  {hebrew: "עוגה266", english: "Cake266"},
  {hebrew: "סוכר267", english: "Sugar267"},
  {hebrew: "מלח268", english: "Salt268"},
  {hebrew: "פלפל269", english: "Pepper269"},
  {hebrew: "דבש270", english: "Honey270"},
  {hebrew: "שוקולד271", english: "Chocolate271"},
  {hebrew: "גלידה272", english: "Ice Cream272"},
  {hebrew: "עוגייה273", english: "Cookie273"},
  {hebrew: "קפה274", english: "Coffee274"},
  {hebrew: "תה275", english: "Tea275"},
  {hebrew: "חדר276", english: "Room276"},
  {hebrew: "סלון277", english: "Living Room277"},
  {hebrew: "מטבח278", english: "Kitchen278"},
  {hebrew: "חדר שינה279", english: "Bedroom279"},
  {hebrew: "שירותים280", english: "Bathroom280"},
  {hebrew: "מיטה281", english: "Bed281"},
  {hebrew: "כסא282", english: "Chair282"},
  {hebrew: "שולחן כתיבה283", english: "Desk283"},
  {hebrew: "ספה284", english: "Sofa284"},
  {hebrew: "מנורה285", english: "Lamp285"},
  {hebrew: "טלוויזיה286", english: "Television286"},
  {hebrew: "רדיו287", english: "Radio287"},
  {hebrew: "שעון קיר288", english: "Wall Clock288"},
  {hebrew: "מראה289", english: "Mirror289"},
  {hebrew: "שטיח290", english: "Carpet290"},
  {hebrew: "עיר291", english: "City291"},
  {hebrew: "כפר292", english: "Village292"},
  {hebrew: "רחוב293", english: "Street293"},
  {hebrew: "חנות294", english: "Shop294"},
  {hebrew: "שוק295", english: "Market295"},
  {hebrew: "ספריה296", english: "Library296"},
  {hebrew: "בית ספר297", english: "School297"},
  {hebrew: "אוניברסיטה298", english: "University298"},
  {hebrew: "חצר299", english: "Yard299"},
  {hebrew: "פארק300", english: "Park300"},
  {hebrew: "שלום301", english: "Hello301"},
  {hebrew: "כלב302", english: "Dog302"},
  {hebrew: "חתול303", english: "Cat303"},
  {hebrew: "מים304", english: "Water304"},
  {hebrew: "ספר305", english: "Book305"},
  {hebrew: "כיסא306", english: "Chair306"},
  {hebrew: "שולחן307", english: "Table307"},
  {hebrew: "דלת308", english: "Door308"},
  {hebrew: "חלון309", english: "Window309"},
  {hebrew: "בית310", english: "House310"},
  {hebrew: "עץ311", english: "Tree311"},
  {hebrew: "שמש312", english: "Sun312"},
  {hebrew: "ירח313", english: "Moon313"},
  {hebrew: "כוכב314", english: "Star314"},
  {hebrew: "ים315", english: "Sea315"},
  {hebrew: "נהר316", english: "River316"},
  {hebrew: "אדמה317", english: "Earth317"},
  {hebrew: "שמיים318", english: "Sky318"},
  {hebrew: "רוח319", english: "Wind319"},
  {hebrew: "גשם320", english: "Rain320"},
  {hebrew: "שלג321", english: "Snow321"},
  {hebrew: "חול322", english: "Sand322"},
  {hebrew: "רכב323", english: "Car323"},
  {hebrew: "אופניים324", english: "Bicycle324"},
  {hebrew: "מטוס325", english: "Airplane325"},
  {hebrew: "אוטובוס326", english: "Bus326"},
  {hebrew: "רכבת327", english: "Train327"},
  {hebrew: "מעלית328", english: "Elevator328"},
  {hebrew: "כביש329", english: "Road329"},
  {hebrew: "גשר330", english: "Bridge330"},
  {hebrew: "מחשב331", english: "Computer331"},
  {hebrew: "טלפון332", english: "Phone332"},
  {hebrew: "עכבר333", english: "Mouse333"},
  {hebrew: "מקלדת334", english: "Keyboard334"},
  {hebrew: "מסך335", english: "Screen335"},
  {hebrew: "עט336", english: "Pen336"},
  {hebrew: "עיפרון337", english: "Pencil337"},
  {hebrew: "נייר338", english: "Paper338"},
  {hebrew: "מחברת339", english: "Notebook339"},
  {hebrew: "תיק340", english: "Bag340"},
  {hebrew: "בגד341", english: "Clothes341"},
  {hebrew: "כובע342", english: "Hat342"},
  {hebrew: "נעל343", english: "Shoe343"},
  {hebrew: "גרב344", english: "Sock344"},
  {hebrew: "מכנסיים345", english: "Pants345"},
  {hebrew: "חולצה346", english: "Shirt346"},
  {hebrew: "שמלה347", english: "Dress347"},
  {hebrew: "מעיל348", english: "Coat348"},
  {hebrew: "צעיף349", english: "Scarf349"},
  {hebrew: "שעון350", english: "Watch350"},
  {hebrew: "אוכל351", english: "Food351"},
  {hebrew: "לחם352", english: "Bread352"},
  {hebrew: "חמאה353", english: "Butter353"},
  {hebrew: "חלב354", english: "Milk354"},
  {hebrew: "בשר355", english: "Meat355"},
  {hebrew: "דג356", english: "Fish356"},
  {hebrew: "ביצה357", english: "Egg357"},
  {hebrew: "פירות358", english: "Fruits358"},
  {hebrew: "ירקות359", english: "Vegetables359"},
  {hebrew: "תפוח360", english: "Apple360"},
  {hebrew: "בננה361", english: "Banana361"},
  {hebrew: "ענב362", english: "Grape362"},
  {hebrew: "אגס363", english: "Pear363"},
  {hebrew: "תפוז364", english: "Orange364"},
  {hebrew: "מלון365", english: "Melon365"},
  {hebrew: "עוגה366", english: "Cake366"},
  {hebrew: "סוכר367", english: "Sugar367"},
  {hebrew: "מלח368", english: "Salt368"},
  {hebrew: "פלפל369", english: "Pepper369"},
  {hebrew: "דבש370", english: "Honey370"},
  {hebrew: "שוקולד371", english: "Chocolate371"},
  {hebrew: "גלידה372", english: "Ice Cream372"},
  {hebrew: "עוגייה373", english: "Cookie373"},
  {hebrew: "קפה374", english: "Coffee374"},
  {hebrew: "תה375", english: "Tea375"},
  {hebrew: "חדר376", english: "Room376"},
  {hebrew: "סלון377", english: "Living Room377"},
  {hebrew: "מטבח378", english: "Kitchen378"},
  {hebrew: "חדר שינה379", english: "Bedroom379"},
  {hebrew: "שירותים380", english: "Bathroom380"},
  {hebrew: "מיטה381", english: "Bed381"},
  {hebrew: "כסא382", english: "Chair382"},
  {hebrew: "שולחן כתיבה383", english: "Desk383"},
  {hebrew: "ספה384", english: "Sofa384"},
  {hebrew: "מנורה385", english: "Lamp385"},
  {hebrew: "טלוויזיה386", english: "Television386"},
  {hebrew: "רדיו387", english: "Radio387"},
  {hebrew: "שעון קיר388", english: "Wall Clock388"},
  {hebrew: "מראה389", english: "Mirror389"},
  {hebrew: "שטיח390", english: "Carpet390"},
  {hebrew: "עיר391", english: "City391"},
  {hebrew: "כפר392", english: "Village392"},
  {hebrew: "רחוב393", english: "Street393"},
  {hebrew: "חנות394", english: "Shop394"},
  {hebrew: "שוק395", english: "Market395"},
  {hebrew: "ספריה396", english: "Library396"},
  {hebrew: "בית ספר397", english: "School397"},
  {hebrew: "אוניברסיטה398", english: "University398"},
  {hebrew: "חצר399", english: "Yard399"},
  {hebrew: "פארק400", english: "Park400"},
  {hebrew: "שלום401", english: "Hello401"},
  {hebrew: "כלב402", english: "Dog402"},
  {hebrew: "חתול403", english: "Cat403"},
  {hebrew: "מים404", english: "Water404"},
  {hebrew: "ספר405", english: "Book405"},
  {hebrew: "כיסא406", english: "Chair406"},
  {hebrew: "שולחן407", english: "Table407"},
  {hebrew: "דלת408", english: "Door408"},
  {hebrew: "חלון409", english: "Window409"},
  {hebrew: "בית410", english: "House410"},
  {hebrew: "עץ411", english: "Tree411"},
  {hebrew: "שמש412", english: "Sun412"},
  {hebrew: "ירח413", english: "Moon413"},
  {hebrew: "כוכב414", english: "Star414"},
  {hebrew: "ים415", english: "Sea415"},
  {hebrew: "נהר416", english: "River416"},
  {hebrew: "אדמה417", english: "Earth417"},
  {hebrew: "שמיים418", english: "Sky418"},
  {hebrew: "רוח419", english: "Wind419"},
  {hebrew: "גשם420", english: "Rain420"},
  {hebrew: "שלג421", english: "Snow421"},
  {hebrew: "חול422", english: "Sand422"},
  {hebrew: "רכב423", english: "Car423"},
  {hebrew: "אופניים424", english: "Bicycle424"},
  {hebrew: "מטוס425", english: "Airplane425"},
  {hebrew: "אוטובוס426", english: "Bus426"},
  {hebrew: "רכבת427", english: "Train427"},
  {hebrew: "מעלית428", english: "Elevator428"},
  {hebrew: "כביש429", english: "Road429"},
  {hebrew: "גשר430", english: "Bridge430"},
  {hebrew: "מחשב431", english: "Computer431"},
  {hebrew: "טלפון432", english: "Phone432"},
  {hebrew: "עכבר433", english: "Mouse433"},
  {hebrew: "מקלדת434", english: "Keyboard434"},
  {hebrew: "מסך435", english: "Screen435"},
  {hebrew: "עט436", english: "Pen436"},
  {hebrew: "עיפרון437", english: "Pencil437"},
  {hebrew: "נייר438", english: "Paper438"},
  {hebrew: "מחברת439", english: "Notebook439"},
  {hebrew: "תיק440", english: "Bag440"},
  {hebrew: "בגד441", english: "Clothes441"},
  {hebrew: "כובע442", english: "Hat442"},
  {hebrew: "נעל443", english: "Shoe443"},
  {hebrew: "גרב444", english: "Sock444"},
  {hebrew: "מכנסיים445", english: "Pants445"},
  {hebrew: "חולצה446", english: "Shirt446"},
  {hebrew: "שמלה447", english: "Dress447"},
  {hebrew: "מעיל448", english: "Coat448"},
  {hebrew: "צעיף449", english: "Scarf449"},
  {hebrew: "שעון450", english: "Watch450"},
  {hebrew: "אוכל451", english: "Food451"},
  {hebrew: "לחם452", english: "Bread452"},
  {hebrew: "חמאה453", english: "Butter453"},
  {hebrew: "חלב454", english: "Milk454"},
  {hebrew: "בשר455", english: "Meat455"},
  {hebrew: "דג456", english: "Fish456"},
  {hebrew: "ביצה457", english: "Egg457"},
  {hebrew: "פירות458", english: "Fruits458"},
  {hebrew: "ירקות459", english: "Vegetables459"},
  {hebrew: "תפוח460", english: "Apple460"},
  {hebrew: "בננה461", english: "Banana461"},
  {hebrew: "ענב462", english: "Grape462"},
  {hebrew: "אגס463", english: "Pear463"},
  {hebrew: "תפוז464", english: "Orange464"},
  {hebrew: "מלון465", english: "Melon465"},
  {hebrew: "עוגה466", english: "Cake466"},
  {hebrew: "סוכר467", english: "Sugar467"},
  {hebrew: "מלח468", english: "Salt468"},
  {hebrew: "פלפל469", english: "Pepper469"},
  {hebrew: "דבש470", english: "Honey470"},
  {hebrew: "שוקולד471", english: "Chocolate471"},
  {hebrew: "גלידה472", english: "Ice Cream472"},
  {hebrew: "עוגייה473", english: "Cookie473"},
  {hebrew: "קפה474", english: "Coffee474"},
  {hebrew: "תה475", english: "Tea475"},
  {hebrew: "חדר476", english: "Room476"},
  {hebrew: "סלון477", english: "Living Room477"},
  {hebrew: "מטבח478", english: "Kitchen478"},
  {hebrew: "חדר שינה479", english: "Bedroom479"},
  {hebrew: "שירותים480", english: "Bathroom480"},
  {hebrew: "מיטה481", english: "Bed481"},
  {hebrew: "כסא482", english: "Chair482"},
  {hebrew: "שולחן כתיבה483", english: "Desk483"},
  {hebrew: "ספה484", english: "Sofa484"},
  {hebrew: "מנורה485", english: "Lamp485"},
  {hebrew: "טלוויזיה486", english: "Television486"},
  {hebrew: "רדיו487", english: "Radio487"},
  {hebrew: "שעון קיר488", english: "Wall Clock488"},
  {hebrew: "מראה489", english: "Mirror489"},
  {hebrew: "שטיח490", english: "Carpet490"},
  {hebrew: "עיר491", english: "City491"},
  {hebrew: "כפר492", english: "Village492"},
  {hebrew: "רחוב493", english: "Street493"},
  {hebrew: "חנות494", english: "Shop494"},
  {hebrew: "שוק495", english: "Market495"},
  {hebrew: "ספריה496", english: "Library496"},
  {hebrew: "בית ספר497", english: "School497"},
  {hebrew: "אוניברסיטה498", english: "University498"},
  {hebrew: "חצר499", english: "Yard499"},
  {hebrew: "פארק500", english: "Park500"},
  {hebrew: "שלום501", english: "Hello501"},
  {hebrew: "כלב502", english: "Dog502"},
  {hebrew: "חתול503", english: "Cat503"},
  {hebrew: "מים504", english: "Water504"},
  {hebrew: "ספר505", english: "Book505"},
  {hebrew: "כיסא506", english: "Chair506"},
  {hebrew: "שולחן507", english: "Table507"},
  {hebrew: "דלת508", english: "Door508"},
  {hebrew: "חלון509", english: "Window509"},
  {hebrew: "בית510", english: "House510"},
  {hebrew: "עץ511", english: "Tree511"},
  {hebrew: "שמש512", english: "Sun512"},
  {hebrew: "ירח513", english: "Moon513"},
  {hebrew: "כוכב514", english: "Star514"},
  {hebrew: "ים515", english: "Sea515"},
  {hebrew: "נהר516", english: "River516"},
  {hebrew: "אדמה517", english: "Earth517"},
  {hebrew: "שמיים518", english: "Sky518"},
  {hebrew: "רוח519", english: "Wind519"},
  {hebrew: "גשם520", english: "Rain520"},
  {hebrew: "שלג521", english: "Snow521"},
  {hebrew: "חול522", english: "Sand522"},
  {hebrew: "רכב523", english: "Car523"},
  {hebrew: "אופניים524", english: "Bicycle524"},
  {hebrew: "מטוס525", english: "Airplane525"},
  {hebrew: "אוטובוס526", english: "Bus526"},
  {hebrew: "רכבת527", english: "Train527"},
  {hebrew: "מעלית528", english: "Elevator528"},
  {hebrew: "כביש529", english: "Road529"},
  {hebrew: "גשר530", english: "Bridge530"},
  {hebrew: "מחשב531", english: "Computer531"},
  {hebrew: "טלפון532", english: "Phone532"},
  {hebrew: "עכבר533", english: "Mouse533"},
  {hebrew: "מקלדת534", english: "Keyboard534"},
  {hebrew: "מסך535", english: "Screen535"},
  {hebrew: "עט536", english: "Pen536"},
  {hebrew: "עיפרון537", english: "Pencil537"},
  {hebrew: "נייר538", english: "Paper538"},
  {hebrew: "מחברת539", english: "Notebook539"},
  {hebrew: "תיק540", english: "Bag540"},
  {hebrew: "בגד541", english: "Clothes541"},
  {hebrew: "כובע542", english: "Hat542"},
  {hebrew: "נעל543", english: "Shoe543"},
  {hebrew: "גרב544", english: "Sock544"},
  {hebrew: "מכנסיים545", english: "Pants545"},
  {hebrew: "חולצה546", english: "Shirt546"},
  {hebrew: "שמלה547", english: "Dress547"},
  {hebrew: "מעיל548", english: "Coat548"},
  {hebrew: "צעיף549", english: "Scarf549"},
  {hebrew: "שעון550", english: "Watch550"},
  {hebrew: "אוכל551", english: "Food551"},
  {hebrew: "לחם552", english: "Bread552"},
  {hebrew: "חמאה553", english: "Butter553"},
  {hebrew: "חלב554", english: "Milk554"},
  {hebrew: "בשר555", english: "Meat555"},
  {hebrew: "דג556", english: "Fish556"},
  {hebrew: "ביצה557", english: "Egg557"},
  {hebrew: "פירות558", english: "Fruits558"},
  {hebrew: "ירקות559", english: "Vegetables559"},
  {hebrew: "תפוח560", english: "Apple560"},
  {hebrew: "בננה561", english: "Banana561"},
  {hebrew: "ענב562", english: "Grape562"},
  {hebrew: "אגס563", english: "Pear563"},
  {hebrew: "תפוז564", english: "Orange564"},
  {hebrew: "מלון565", english: "Melon565"},
  {hebrew: "עוגה566", english: "Cake566"},
  {hebrew: "סוכר567", english: "Sugar567"},
  {hebrew: "מלח568", english: "Salt568"},
  {hebrew: "פלפל569", english: "Pepper569"},
  {hebrew: "דבש570", english: "Honey570"},
  {hebrew: "שוקולד571", english: "Chocolate571"},
  {hebrew: "גלידה572", english: "Ice Cream572"},
  {hebrew: "עוגייה573", english: "Cookie573"},
  {hebrew: "קפה574", english: "Coffee574"},
  {hebrew: "תה575", english: "Tea575"},
  {hebrew: "חדר576", english: "Room576"},
  {hebrew: "סלון577", english: "Living Room577"},
  {hebrew: "מטבח578", english: "Kitchen578"},
  {hebrew: "חדר שינה579", english: "Bedroom579"},
  {hebrew: "שירותים580", english: "Bathroom580"},
  {hebrew: "מיטה581", english: "Bed581"},
  {hebrew: "כסא582", english: "Chair582"},
  {hebrew: "שולחן כתיבה583", english: "Desk583"},
  {hebrew: "ספה584", english: "Sofa584"},
  {hebrew: "מנורה585", english: "Lamp585"},
  {hebrew: "טלוויזיה586", english: "Television586"},
  {hebrew: "רדיו587", english: "Radio587"},
  {hebrew: "שעון קיר588", english: "Wall Clock588"},
  {hebrew: "מראה589", english: "Mirror589"},
  {hebrew: "שטיח590", english: "Carpet590"},
  {hebrew: "עיר591", english: "City591"},
  {hebrew: "כפר592", english: "Village592"},
  {hebrew: "רחוב593", english: "Street593"},
  {hebrew: "חנות594", english: "Shop594"},
  {hebrew: "שוק595", english: "Market595"},
  {hebrew: "ספריה596", english: "Library596"},
  {hebrew: "בית ספר597", english: "School597"},
  {hebrew: "אוניברסיטה598", english: "University598"},
  {hebrew: "חצר599", english: "Yard599"},
  {hebrew: "פארק600", english: "Park600"},
  {hebrew: "שלום601", english: "Hello601"},
  {hebrew: "כלב602", english: "Dog602"},
  {hebrew: "חתול603", english: "Cat603"},
  {hebrew: "מים604", english: "Water604"},
  {hebrew: "ספר605", english: "Book605"},
  {hebrew: "כיסא606", english: "Chair606"},
  {hebrew: "שולחן607", english: "Table607"},
  {hebrew: "דלת608", english: "Door608"},
  {hebrew: "חלון609", english: "Window609"},
  {hebrew: "בית610", english: "House610"},
  {hebrew: "עץ611", english: "Tree611"},
  {hebrew: "שמש612", english: "Sun612"},
  {hebrew: "ירח613", english: "Moon613"},
  {hebrew: "כוכב614", english: "Star614"},
  {hebrew: "ים615", english: "Sea615"},
  {hebrew: "נהר616", english: "River616"},
  {hebrew: "אדמה617", english: "Earth617"},
  {hebrew: "שמיים618", english: "Sky618"},
  {hebrew: "רוח619", english: "Wind619"},
  {hebrew: "גשם620", english: "Rain620"},
  {hebrew: "שלג621", english: "Snow621"},
  {hebrew: "חול622", english: "Sand622"},
  {hebrew: "רכב623", english: "Car623"},
  {hebrew: "אופניים624", english: "Bicycle624"},
  {hebrew: "מטוס625", english: "Airplane625"},
  {hebrew: "אוטובוס626", english: "Bus626"},
  {hebrew: "רכבת627", english: "Train627"},
  {hebrew: "מעלית628", english: "Elevator628"},
  {hebrew: "כביש629", english: "Road629"},
  {hebrew: "גשר630", english: "Bridge630"},
  {hebrew: "מחשב631", english: "Computer631"},
  {hebrew: "טלפון632", english: "Phone632"},
  {hebrew: "עכבר633", english: "Mouse633"},
  {hebrew: "מקלדת634", english: "Keyboard634"},
  {hebrew: "מסך635", english: "Screen635"},
  {hebrew: "עט636", english: "Pen636"},
  {hebrew: "עיפרון637", english: "Pencil637"},
  {hebrew: "נייר638", english: "Paper638"},
  {hebrew: "מחברת639", english: "Notebook639"},
  {hebrew: "תיק640", english: "Bag640"},
  {hebrew: "בגד641", english: "Clothes641"},
  {hebrew: "כובע642", english: "Hat642"},
  {hebrew: "נעל643", english: "Shoe643"},
  {hebrew: "גרב644", english: "Sock644"},
  {hebrew: "מכנסיים645", english: "Pants645"},
  {hebrew: "חולצה646", english: "Shirt646"},
  {hebrew: "שמלה647", english: "Dress647"},
  {hebrew: "מעיל648", english: "Coat648"},
  {hebrew: "צעיף649", english: "Scarf649"},
  {hebrew: "שעון650", english: "Watch650"},
  {hebrew: "אוכל651", english: "Food651"},
  {hebrew: "לחם652", english: "Bread652"},
  {hebrew: "חמאה653", english: "Butter653"},
  {hebrew: "חלב654", english: "Milk654"},
  {hebrew: "בשר655", english: "Meat655"},
  {hebrew: "דג656", english: "Fish656"},
  {hebrew: "ביצה657", english: "Egg657"},
  {hebrew: "פירות658", english: "Fruits658"},
  {hebrew: "ירקות659", english: "Vegetables659"},
  {hebrew: "תפוח660", english: "Apple660"},
  {hebrew: "בננה661", english: "Banana661"},
  {hebrew: "ענב662", english: "Grape662"},
  {hebrew: "אגס663", english: "Pear663"},
  {hebrew: "תפוז664", english: "Orange664"},
  {hebrew: "מלון665", english: "Melon665"},
  {hebrew: "עוגה666", english: "Cake666"},
  {hebrew: "סוכר667", english: "Sugar667"},
  {hebrew: "מלח668", english: "Salt668"},
  {hebrew: "פלפל669", english: "Pepper669"},
  {hebrew: "דבש670", english: "Honey670"},
  {hebrew: "שוקולד671", english: "Chocolate671"},
  {hebrew: "גלידה672", english: "Ice Cream672"},
  {hebrew: "עוגייה673", english: "Cookie673"},
  {hebrew: "קפה674", english: "Coffee674"},
  {hebrew: "תה675", english: "Tea675"},
  {hebrew: "חדר676", english: "Room676"},
  {hebrew: "סלון677", english: "Living Room677"},
  {hebrew: "מטבח678", english: "Kitchen678"},
  {hebrew: "חדר שינה679", english: "Bedroom679"},
  {hebrew: "שירותים680", english: "Bathroom680"},
  {hebrew: "מיטה681", english: "Bed681"},
  {hebrew: "כסא682", english: "Chair682"},
  {hebrew: "שולחן כתיבה683", english: "Desk683"},
  {hebrew: "ספה684", english: "Sofa684"},
  {hebrew: "מנורה685", english: "Lamp685"},
  {hebrew: "טלוויזיה686", english: "Television686"},
  {hebrew: "רדיו687", english: "Radio687"},
  {hebrew: "שעון קיר688", english: "Wall Clock688"},
  {hebrew: "מראה689", english: "Mirror689"},
  {hebrew: "שטיח690", english: "Carpet690"},
  {hebrew: "עיר691", english: "City691"},
  {hebrew: "כפר692", english: "Village692"},
  {hebrew: "רחוב693", english: "Street693"},
  {hebrew: "חנות694", english: "Shop694"},
  {hebrew: "שוק695", english: "Market695"},
  {hebrew: "ספריה696", english: "Library696"},
  {hebrew: "בית ספר697", english: "School697"},
  {hebrew: "אוניברסיטה698", english: "University698"},
  {hebrew: "חצר699", english: "Yard699"},
  {hebrew: "פארק700", english: "Park700"},
  {hebrew: "שלום701", english: "Hello701"},
  {hebrew: "כלב702", english: "Dog702"},
  {hebrew: "חתול703", english: "Cat703"},
  {hebrew: "מים704", english: "Water704"},
  {hebrew: "ספר705", english: "Book705"},
  {hebrew: "כיסא706", english: "Chair706"},
  {hebrew: "שולחן707", english: "Table707"},
  {hebrew: "דלת708", english: "Door708"},
  {hebrew: "חלון709", english: "Window709"},
  {hebrew: "בית710", english: "House710"},
  {hebrew: "עץ711", english: "Tree711"},
  {hebrew: "שמש712", english: "Sun712"},
  {hebrew: "ירח713", english: "Moon713"},
  {hebrew: "כוכב714", english: "Star714"},
  {hebrew: "ים715", english: "Sea715"},
  {hebrew: "נהר716", english: "River716"},
  {hebrew: "אדמה717", english: "Earth717"},
  {hebrew: "שמיים718", english: "Sky718"},
  {hebrew: "רוח719", english: "Wind719"},
  {hebrew: "גשם720", english: "Rain720"},
  {hebrew: "שלג721", english: "Snow721"},
  {hebrew: "חול722", english: "Sand722"},
  {hebrew: "רכב723", english: "Car723"},
  {hebrew: "אופניים724", english: "Bicycle724"},
  {hebrew: "מטוס725", english: "Airplane725"},
  {hebrew: "אוטובוס726", english: "Bus726"},
  {hebrew: "רכבת727", english: "Train727"},
  {hebrew: "מעלית728", english: "Elevator728"},
  {hebrew: "כביש729", english: "Road729"},
  {hebrew: "גשר730", english: "Bridge730"},
  {hebrew: "מחשב731", english: "Computer731"},
  {hebrew: "טלפון732", english: "Phone732"},
  {hebrew: "עכבר733", english: "Mouse733"},
  {hebrew: "מקלדת734", english: "Keyboard734"},
  {hebrew: "מסך735", english: "Screen735"},
  {hebrew: "עט736", english: "Pen736"},
  {hebrew: "עיפרון737", english: "Pencil737"},
  {hebrew: "נייר738", english: "Paper738"},
  {hebrew: "מחברת739", english: "Notebook739"},
  {hebrew: "תיק740", english: "Bag740"},
  {hebrew: "בגד741", english: "Clothes741"},
  {hebrew: "כובע742", english: "Hat742"},
  {hebrew: "נעל743", english: "Shoe743"},
  {hebrew: "גרב744", english: "Sock744"},
  {hebrew: "מכנסיים745", english: "Pants745"},
  {hebrew: "חולצה746", english: "Shirt746"},
  {hebrew: "שמלה747", english: "Dress747"},
  {hebrew: "מעיל748", english: "Coat748"},
  {hebrew: "צעיף749", english: "Scarf749"},
  {hebrew: "שעון750", english: "Watch750"},
  {hebrew: "אוכל751", english: "Food751"},
  {hebrew: "לחם752", english: "Bread752"},
  {hebrew: "חמאה753", english: "Butter753"},
  {hebrew: "חלב754", english: "Milk754"},
  {hebrew: "בשר755", english: "Meat755"},
  {hebrew: "דג756", english: "Fish756"},
  {hebrew: "ביצה757", english: "Egg757"},
  {hebrew: "פירות758", english: "Fruits758"},
  {hebrew: "ירקות759", english: "Vegetables759"},
  {hebrew: "תפוח760", english: "Apple760"},
  {hebrew: "בננה761", english: "Banana761"},
  {hebrew: "ענב762", english: "Grape762"},
  {hebrew: "אגס763", english: "Pear763"},
  {hebrew: "תפוז764", english: "Orange764"},
  {hebrew: "מלון765", english: "Melon765"},
  {hebrew: "עוגה766", english: "Cake766"},
  {hebrew: "סוכר767", english: "Sugar767"},
  {hebrew: "מלח768", english: "Salt768"},
  {hebrew: "פלפל769", english: "Pepper769"},
  {hebrew: "דבש770", english: "Honey770"},
  {hebrew: "שוקולד771", english: "Chocolate771"},
  {hebrew: "גלידה772", english: "Ice Cream772"},
  {hebrew: "עוגייה773", english: "Cookie773"},
  {hebrew: "קפה774", english: "Coffee774"},
  {hebrew: "תה775", english: "Tea775"},
  {hebrew: "חדר776", english: "Room776"},
  {hebrew: "סלון777", english: "Living Room777"},
  {hebrew: "מטבח778", english: "Kitchen778"},
  {hebrew: "חדר שינה779", english: "Bedroom779"},
  {hebrew: "שירותים780", english: "Bathroom780"},
  {hebrew: "מיטה781", english: "Bed781"},
  {hebrew: "כסא782", english: "Chair782"},
  {hebrew: "שולחן כתיבה783", english: "Desk783"},
  {hebrew: "ספה784", english: "Sofa784"},
  {hebrew: "מנורה785", english: "Lamp785"},
  {hebrew: "טלוויזיה786", english: "Television786"},
  {hebrew: "רדיו787", english: "Radio787"},
  {hebrew: "שעון קיר788", english: "Wall Clock788"},
  {hebrew: "מראה789", english: "Mirror789"},
  {hebrew: "שטיח790", english: "Carpet790"},
  {hebrew: "עיר791", english: "City791"},
  {hebrew: "כפר792", english: "Village792"},
  {hebrew: "רחוב793", english: "Street793"},
  {hebrew: "חנות794", english: "Shop794"},
  {hebrew: "שוק795", english: "Market795"},
  {hebrew: "ספריה796", english: "Library796"},
  {hebrew: "בית ספר797", english: "School797"},
  {hebrew: "אוניברסיטה798", english: "University798"},
  {hebrew: "חצר799", english: "Yard799"},
  {hebrew: "פארק800", english: "Park800"},
  {hebrew: "שלום801", english: "Hello801"},
  {hebrew: "כלב802", english: "Dog802"},
  {hebrew: "חתול803", english: "Cat803"},
  {hebrew: "מים804", english: "Water804"},
  {hebrew: "ספר805", english: "Book805"},
  {hebrew: "כיסא806", english: "Chair806"},
  {hebrew: "שולחן807", english: "Table807"},
  {hebrew: "דלת808", english: "Door808"},
  {hebrew: "חלון809", english: "Window809"},
  {hebrew: "בית810", english: "House810"},
  {hebrew: "עץ811", english: "Tree811"},
  {hebrew: "שמש812", english: "Sun812"},
  {hebrew: "ירח813", english: "Moon813"},
  {hebrew: "כוכב814", english: "Star814"},
  {hebrew: "ים815", english: "Sea815"},
  {hebrew: "נהר816", english: "River816"},
  {hebrew: "אדמה817", english: "Earth817"},
  {hebrew: "שמיים818", english: "Sky818"},
  {hebrew: "רוח819", english: "Wind819"},
  {hebrew: "גשם820", english: "Rain820"},
  {hebrew: "שלג821", english: "Snow821"},
  {hebrew: "חול822", english: "Sand822"},
  {hebrew: "רכב823", english: "Car823"},
  {hebrew: "אופניים824", english: "Bicycle824"},
  {hebrew: "מטוס825", english: "Airplane825"},
  {hebrew: "אוטובוס826", english: "Bus826"},
  {hebrew: "רכבת827", english: "Train827"},
  {hebrew: "מעלית828", english: "Elevator828"},
  {hebrew: "כביש829", english: "Road829"},
  {hebrew: "גשר830", english: "Bridge830"},
  {hebrew: "מחשב831", english: "Computer831"},
  {hebrew: "טלפון832", english: "Phone832"},
  {hebrew: "עכבר833", english: "Mouse833"},
  {hebrew: "מקלדת834", english: "Keyboard834"},
  {hebrew: "מסך835", english: "Screen835"},
  {hebrew: "עט836", english: "Pen836"},
  {hebrew: "עיפרון837", english: "Pencil837"},
  {hebrew: "נייר838", english: "Paper838"},
  {hebrew: "מחברת839", english: "Notebook839"},
  {hebrew: "תיק840", english: "Bag840"},
  {hebrew: "בגד841", english: "Clothes841"},
  {hebrew: "כובע842", english: "Hat842"},
  {hebrew: "נעל843", english: "Shoe843"},
  {hebrew: "גרב844", english: "Sock844"},
  {hebrew: "מכנסיים845", english: "Pants845"},
  {hebrew: "חולצה846", english: "Shirt846"},
  {hebrew: "שמלה847", english: "Dress847"},
  {hebrew: "מעיל848", english: "Coat848"},
  {hebrew: "צעיף849", english: "Scarf849"},
  {hebrew: "שעון850", english: "Watch850"},
  {hebrew: "אוכל851", english: "Food851"},
  {hebrew: "לחם852", english: "Bread852"},
  {hebrew: "חמאה853", english: "Butter853"},
  {hebrew: "חלב854", english: "Milk854"},
  {hebrew: "בשר855", english: "Meat855"},
  {hebrew: "דג856", english: "Fish856"},
  {hebrew: "ביצה857", english: "Egg857"},
  {hebrew: "פירות858", english: "Fruits858"},
  {hebrew: "ירקות859", english: "Vegetables859"},
  {hebrew: "תפוח860", english: "Apple860"},
  {hebrew: "בננה861", english: "Banana861"},
  {hebrew: "ענב862", english: "Grape862"},
  {hebrew: "אגס863", english: "Pear863"},
  {hebrew: "תפוז864", english: "Orange864"},
  {hebrew: "מלון865", english: "Melon865"},
  {hebrew: "עוגה866", english: "Cake866"},
  {hebrew: "סוכר867", english: "Sugar867"},
  {hebrew: "מלח868", english: "Salt868"},
  {hebrew: "פלפל869", english: "Pepper869"},
  {hebrew: "דבש870", english: "Honey870"},
  {hebrew: "שוקולד871", english: "Chocolate871"},
  {hebrew: "גלידה872", english: "Ice Cream872"},
  {hebrew: "עוגייה873", english: "Cookie873"},
  {hebrew: "קפה874", english: "Coffee874"},
  {hebrew: "תה875", english: "Tea875"},
  {hebrew: "חדר876", english: "Room876"},
  {hebrew: "סלון877", english: "Living Room877"},
  {hebrew: "מטבח878", english: "Kitchen878"},
  {hebrew: "חדר שינה879", english: "Bedroom879"},
  {hebrew: "שירותים880", english: "Bathroom880"},
  {hebrew: "מיטה881", english: "Bed881"},
  {hebrew: "כסא882", english: "Chair882"},
  {hebrew: "שולחן כתיבה883", english: "Desk883"},
  {hebrew: "ספה884", english: "Sofa884"},
  {hebrew: "מנורה885", english: "Lamp885"},
  {hebrew: "טלוויזיה886", english: "Television886"},
  {hebrew: "רדיו887", english: "Radio887"},
  {hebrew: "שעון קיר888", english: "Wall Clock888"},
  {hebrew: "מראה889", english: "Mirror889"},
  {hebrew: "שטיח890", english: "Carpet890"},
  {hebrew: "עיר891", english: "City891"},
  {hebrew: "כפר892", english: "Village892"},
  {hebrew: "רחוב893", english: "Street893"},
  {hebrew: "חנות894", english: "Shop894"},
  {hebrew: "שוק895", english: "Market895"},
  {hebrew: "ספריה896", english: "Library896"},
  {hebrew: "בית ספר897", english: "School897"},
  {hebrew: "אוניברסיטה898", english: "University898"},
  {hebrew: "חצר899", english: "Yard899"},
  {hebrew: "פארק900", english: "Park900"},
  {hebrew: "שלום901", english: "Hello901"},
  {hebrew: "כלב902", english: "Dog902"},
  {hebrew: "חתול903", english: "Cat903"},
  {hebrew: "מים904", english: "Water904"},
  {hebrew: "ספר905", english: "Book905"},
  {hebrew: "כיסא906", english: "Chair906"},
  {hebrew: "שולחן907", english: "Table907"},
  {hebrew: "דלת908", english: "Door908"},
  {hebrew: "חלון909", english: "Window909"},
  {hebrew: "בית910", english: "House910"},
  {hebrew: "עץ911", english: "Tree911"},
  {hebrew: "שמש912", english: "Sun912"},
  {hebrew: "ירח913", english: "Moon913"},
  {hebrew: "כוכב914", english: "Star914"},
  {hebrew: "ים915", english: "Sea915"},
  {hebrew: "נהר916", english: "River916"},
  {hebrew: "אדמה917", english: "Earth917"},
  {hebrew: "שמיים918", english: "Sky918"},
  {hebrew: "רוח919", english: "Wind919"},
  {hebrew: "גשם920", english: "Rain920"},
  {hebrew: "שלג921", english: "Snow921"},
  {hebrew: "חול922", english: "Sand922"},
  {hebrew: "רכב923", english: "Car923"},
  {hebrew: "אופניים924", english: "Bicycle924"},
  {hebrew: "מטוס925", english: "Airplane925"},
  {hebrew: "אוטובוס926", english: "Bus926"},
  {hebrew: "רכבת927", english: "Train927"},
  {hebrew: "מעלית928", english: "Elevator928"},
  {hebrew: "כביש929", english: "Road929"},
  {hebrew: "גשר930", english: "Bridge930"},
  {hebrew: "מחשב931", english: "Computer931"},
  {hebrew: "טלפון932", english: "Phone932"},
  {hebrew: "עכבר933", english: "Mouse933"},
  {hebrew: "מקלדת934", english: "Keyboard934"},
  {hebrew: "מסך935", english: "Screen935"},
  {hebrew: "עט936", english: "Pen936"},
  {hebrew: "עיפרון937", english: "Pencil937"},
  {hebrew: "נייר938", english: "Paper938"},
  {hebrew: "מחברת939", english: "Notebook939"},
  {hebrew: "תיק940", english: "Bag940"},
  {hebrew: "בגד941", english: "Clothes941"},
  {hebrew: "כובע942", english: "Hat942"},
  {hebrew: "נעל943", english: "Shoe943"},
  {hebrew: "גרב944", english: "Sock944"},
  {hebrew: "מכנסיים945", english: "Pants945"},
  {hebrew: "חולצה946", english: "Shirt946"},
  {hebrew: "שמלה947", english: "Dress947"},
  {hebrew: "מעיל948", english: "Coat948"},
  {hebrew: "צעיף949", english: "Scarf949"},
  {hebrew: "שעון950", english: "Watch950"},
  {hebrew: "אוכל951", english: "Food951"},
  {hebrew: "לחם952", english: "Bread952"},
  {hebrew: "חמאה953", english: "Butter953"},
  {hebrew: "חלב954", english: "Milk954"},
  {hebrew: "בשר955", english: "Meat955"},
  {hebrew: "דג956", english: "Fish956"},
  {hebrew: "ביצה957", english: "Egg957"},
  {hebrew: "פירות958", english: "Fruits958"},
  {hebrew: "ירקות959", english: "Vegetables959"},
  {hebrew: "תפוח960", english: "Apple960"},
  {hebrew: "בננה961", english: "Banana961"},
  {hebrew: "ענב962", english: "Grape962"},
  {hebrew: "אגס963", english: "Pear963"},
  {hebrew: "תפוז964", english: "Orange964"},
  {hebrew: "מלון965", english: "Melon965"},
  {hebrew: "עוגה966", english: "Cake966"},
  {hebrew: "סוכר967", english: "Sugar967"},
  {hebrew: "מלח968", english: "Salt968"},
  {hebrew: "פלפל969", english: "Pepper969"},
  {hebrew: "דבש970", english: "Honey970"},
  {hebrew: "שוקולד971", english: "Chocolate971"},
  {hebrew: "גלידה972", english: "Ice Cream972"},
  {hebrew: "עוגייה973", english: "Cookie973"},
  {hebrew: "קפה974", english: "Coffee974"},
  {hebrew: "תה975", english: "Tea975"},
  {hebrew: "חדר976", english: "Room976"},
  {hebrew: "סלון977", english: "Living Room977"},
  {hebrew: "מטבח978", english: "Kitchen978"},
  {hebrew: "חדר שינה979", english: "Bedroom979"},
  {hebrew: "שירותים980", english: "Bathroom980"},
  {hebrew: "מיטה981", english: "Bed981"},
  {hebrew: "כסא982", english: "Chair982"},
  {hebrew: "שולחן כתיבה983", english: "Desk983"},
  {hebrew: "ספה984", english: "Sofa984"},
  {hebrew: "מנורה985", english: "Lamp985"},
  {hebrew: "טלוויזיה986", english: "Television986"},
  {hebrew: "רדיו987", english: "Radio987"},
  {hebrew: "שעון קיר988", english: "Wall Clock988"},
  {hebrew: "מראה989", english: "Mirror989"},
  {hebrew: "שטיח990", english: "Carpet990"},
  {hebrew: "עיר991", english: "City991"},
  {hebrew: "כפר992", english: "Village992"},
  {hebrew: "רחוב993", english: "Street993"},
  {hebrew: "חנות994", english: "Shop994"},
  {hebrew: "שוק995", english: "Market995"},
  {hebrew: "ספריה996", english: "Library996"},
  {hebrew: "בית ספר997", english: "School997"},
  {hebrew: "אוניברסיטה998", english: "University998"},
  {hebrew: "חצר999", english: "Yard999"},
  {hebrew: "פארק1000", english: "Park1000"}
];


  {hebrew: "שלום", english: "Hello"},
  {hebrew: "כלב", english: "Dog"},
  {hebrew: "מים", english: "Water"},
  {hebrew: "תודה", english: "Thank you"},
  {hebrew: "ספר", english: "Book"}
];

let currentIndex = 0;
let stage = 1;

const wordDisplay = document.getElementById('word-display');
const userInput = document.getElementById('user-input');
const feedback = document.getElementById('feedback');
const checkBtn = document.getElementById('check-btn');
const wordList = document.getElementById('word-list');
const progressText = document.getElementById('progress-text');
const progressBar = document.getElementById('progress-bar');

function initWordList() {
  words.forEach((w, idx) => {
    const li = document.createElement('li');
    li.textContent = w.hebrew + ' – ' + w.english;
    li.dataset.index = idx;
    li.addEventListener('click', () => selectWord(idx));
    wordList.appendChild(li);
  });
  updateProgress();
}

function selectWord(idx) {
  currentIndex = idx;
  stage = 1;
  showWord();
}

function updateProgress() {
  const percent = Math.floor((currentIndex / words.length) * 100);
  progressText.textContent = `${currentIndex} מתוך ${words.length} מילים (${percent}%)`;
  progressBar.style.width = percent + '%';
}

function showWord() {
  feedback.textContent = '';
  const currentWord = words[currentIndex];
  if (stage === 1) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english}`;
  } else if (stage === 2) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english[0]}____`;
  } else if (stage === 3) {
    wordDisplay.textContent = `${currentWord.hebrew} – ${currentWord.english[0]}______`;
  } else if (stage === 4) {
    wordDisplay.textContent = currentWord.hebrew;
  }
  userInput.value = '';
  updateProgress();
}

function checkWord() {
  const currentWord = words[currentIndex];
  if (userInput.value.trim().toLowerCase() === currentWord.english.toLowerCase()) {
    feedback.textContent = "נכון!";
    stage++;
    if (stage > 4) {
      stage = 1;
      currentIndex++;
      if (currentIndex >= words.length) {
        wordDisplay.textContent = "סיימת את כל המילים!";
        userInput.style.display = 'none';
        checkBtn.style.display = 'none';
        updateProgress();
        return;
      }
    }
    showWord();
  } else {
    feedback.textContent = "נסה שוב!";
  }
}

checkBtn.addEventListener('click', checkWord);
initWordList();
showWord();

let dashboard = {
  reviews: [],
  tests: []
};

function updateDashboard(type, score) {
  if (type === 'review') {
    dashboard.reviews.push(score);
  } else if (type === 'test') {
    dashboard.tests.push(score);
  }
  renderDashboard();
}

function renderDashboard() {
  let dashDiv = document.getElementById('dashboard');
  if (!dashDiv) {
    dashDiv = document.createElement('div');
    dashDiv.id = 'dashboard';
    dashDiv.style.background = '#eef';
    dashDiv.style.padding = '10px';
    dashDiv.style.marginTop = '20px';
    document.body.appendChild(dashDiv);
  }
  dashDiv.innerHTML = '<h3>לוח בקרה</h3>' +
    '<p>חזרות: ' + (dashboard.reviews.length ? dashboard.reviews.join(', ') : 'אין') + '</p>' +
    '<p>מבחנים: ' + (dashboard.tests.length ? dashboard.tests.join(', ') : 'אין') + '</p>';
}

function startReview() {
  const start = Math.floor((currentIndex-1) / 10) * 10;
  const end = Math.min(start + 10, words.length);
  const reviewWords = words.slice(start, end);
  alert(`חזרה על מילים ${start + 1} עד ${end}`);
  // כאן אפשר לשחק משחק התאמות
  updateDashboard('review', `חזרה ${start+1}-${end}: ✓`);
}

function startBigTest() {
  const start = Math.floor((currentIndex-1) / 100) * 100;
  const end = Math.min(start + 100, words.length);
  const testWords = words.slice(start, end);

  const selected = [];
  for (let i = 0; i < 20; i++) {
    selected.push(testWords[Math.floor(Math.random() * testWords.length)]);
  }

  const testArea = document.createElement('div');
  testArea.id = 'test-area';
  testArea.innerHTML = '<h2>מבחן על 100 מילים (20 שאלות)</h2>';

  let correct = 0;
  let currentQuestion = 0;

  const question = document.createElement('p');
  const input = document.createElement('input');
  input.type = 'text';
  const button = document.createElement('button');
  button.textContent = 'בדוק';
  const feedback = document.createElement('div');

  function askQuestion() {
    if (currentQuestion >= selected.length) {
      const percent = Math.floor((correct / selected.length) * 100);
      testArea.innerHTML = '<h2>סיימת את המבחן!</h2><p>ציון: ' + correct + '/' + selected.length + ' (' + percent + '%)</p>';
      updateDashboard('test', percent + '%');
      return;
    }
    question.textContent = 'תרגם: ' + selected[currentQuestion].hebrew;
    input.value = '';
  }

  button.addEventListener('click', () => {
    if (input.value.trim().toLowerCase() === selected[currentQuestion].english.toLowerCase()) {
      correct++;
      feedback.textContent = 'נכון!';
    } else {
      feedback.textContent = 'טעות! התשובה: ' + selected[currentQuestion].english;
    }
    currentQuestion++;
    askQuestion();
  });

  testArea.appendChild(question);
  testArea.appendChild(input);
  testArea.appendChild(button);
  testArea.appendChild(feedback);
  document.body.innerHTML = '';
  document.body.appendChild(testArea);
  askQuestion();
}

function updateSummary() {
  const summaryDiv = document.getElementById('summary-progress');
  const percent = Math.floor((currentIndex / words.length) * 100);
  summaryDiv.textContent = `השלמת ${currentIndex} מתוך ${words.length} מילים – ${percent}%`;
}

function highlightWord(idx) {
  const items = document.querySelectorAll('#word-list li');
  if (items[idx]) {
    items[idx].style.backgroundColor = '#c8e6c9'; // ירוק בהיר
  }
}

function markCurrentWord() {
  highlightWord(currentIndex);
}

function skipWord() {
  currentIndex++;
  if (currentIndex >= words.length) {
    wordDisplay.textContent = "סיימת את כל המילים!";
    userInput.style.display = 'none';
    checkBtn.style.display = 'none';
    return;
  }
  showWord();
  markCurrentWord();
}

function reviewLearnedWords() {
  const items = document.querySelectorAll('#word-list li');
  const learnedIndexes = [];
  items.forEach((item, idx) => {
    if (item.style.backgroundColor === 'rgb(200, 230, 201)' || item.style.backgroundColor === '#c8e6c9') {
      learnedIndexes.push(idx);
    }
  });

  if (learnedIndexes.length === 0) {
    alert('אין מילים ירוקות לחזור עליהן');
    return;
  }

  alert('חוזרים על ' + learnedIndexes.length + ' מילים שנלמדו');
  // מציג את הראשונה מתוך הירוקות
  currentIndex = learnedIndexes[0];
  showWord();
  markCurrentWord();
}

function searchWord() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const items = document.querySelectorAll('#word-list li');
  items.forEach(item => {
    if (item.textContent.toLowerCase().includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}

let showOnlyUnlearned = false;
function toggleUnlearned() {
  showOnlyUnlearned = !showOnlyUnlearned;
  const items = document.querySelectorAll('#word-list li');
  items.forEach(item => {
    const isLearned = item.style.backgroundColor === 'rgb(200, 230, 201)' || item.style.backgroundColor === '#c8e6c9';
    if (showOnlyUnlearned && isLearned) {
      item.style.display = 'none';
    } else {
      item.style.display = '';
    }
  });
}

function playCurrentWordAudio() {
  const currentWord = words[currentIndex];
  const audio = new Audio('audio/' + currentWord.english.toLowerCase() + '.mp3');
  audio.play().catch(() => {});
}

function resetProgress() {
  currentIndex = 0;
  stage = 1;
  const items = document.querySelectorAll('#word-list li');
  items.forEach(item => {
    item.style.backgroundColor = '';
  });
  userInput.style.display = '';
  checkBtn.style.display = '';
  showWord();
  markCurrentWord();
  updateSummary();
}

function startSpeechRecognition() {
  if (!('webkitSpeechRecognition' in window)) {
    alert('דפדפן זה לא תומך בזיהוי דיבור.');
    return;
  }
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.start();
  recognition.onresult = function(event) {
    const spoken = event.results[0][0].transcript.toLowerCase();
    const expected = words[currentIndex].english.toLowerCase();
    if (spoken.includes(expected)) {
      alert('נכון!');
    } else {
      alert('שמענו: ' + spoken + ' – נסה שוב');
    }
  };
  recognition.onerror = function() {
    alert('שגיאה בזיהוי קול, נסה שוב.');
  };
}
