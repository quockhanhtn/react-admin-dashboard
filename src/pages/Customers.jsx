import React from 'react';

import Table from '../components/Table/Table'

const customerList = loadCustomers();
const customerTableHead = ['#', 'name', 'email', 'phone', 'total orders', 'total spend', 'location'];

const renderHead = (item, index) => <th key={index}>{item}</th>;
const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.totalOrders}</td>
    <td>{item.totalSpend}</td>
    <td>{item.location}</td>
  </tr>
);


const Customers = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="page-header">Customers</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card__body">
                <Table
                  limit='10'
                  headData={customerTableHead}
                  renderHead={(item, index) => renderHead(item, index)}
                  bodyData={customerList}
                  renderBody={(item, index) => renderBody(item, index)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function loadCustomers() {
  return [
    { id: 1, name: "Brittan Rois", email: "brois0@unicef.org", location: "Bator", phone: "+62 745 807 7685", totalSpend: "$557248.44", totalOrders: 24011 },
    { id: 2, name: "Matthew Junifer", email: "mjunifer1@buzzfeed.com", location: "Bromma", phone: "+46 993 722 3008", totalSpend: "$599864.94", totalOrders: 60195 },
    { id: 3, name: "Finlay Baylay", email: "fbaylay2@purevolume.com", location: "Atalaia", phone: "+55 232 355 3569", totalSpend: "$171337.47", totalOrders: 96328 },
    { id: 4, name: "Beryle Monelli", email: "bmonelli3@amazonaws.com", location: "Martingança", phone: "+351 734 876 8127", totalSpend: "$335862.78", totalOrders: 78768 },
    { id: 5, name: "Ilario Shoppee", email: "ishoppee4@webmd.com", location: "Lincoln", phone: "+54 410 442 6083", totalSpend: "$719845.14", totalOrders: 26045 },
    { id: 6, name: "Guglielma Haking", email: "ghaking5@icio.us", location: "Sangzhou", phone: "+86 722 902 9706", totalSpend: "$621446.73", totalOrders: 90771 },
    { id: 7, name: "Celle Acum", email: "cacum6@scribd.com", location: "Huzhen", phone: "+86 805 547 3640", totalSpend: "$640651.30", totalOrders: 97842 },
    { id: 8, name: "Ailey Haig", email: "ahaig7@live.com", location: "Gizel’", phone: "+7 623 158 0485", totalSpend: "$473255.45", totalOrders: 85298 },
    { id: 9, name: "Ebonee Robardet", email: "erobardet8@google.co.jp", location: "Uyugan", phone: "+63 406 595 5538", totalSpend: "$513918.18", totalOrders: 38959 },
    { id: 10, name: "Nancy Hallatt", email: "nhallatt9@tamu.edu", location: "Liuhao", phone: "+86 194 283 7223", totalSpend: "$862509.17", totalOrders: 48049 },
    { id: 11, name: "Savina Gardener", email: "sgardenera@mozilla.com", location: "Bosanski Brod", phone: "+387 494 626 9847", totalSpend: "$385914.28", totalOrders: 24961 },
    { id: 12, name: "Walliw Berard", email: "wberardb@state.tx.us", location: "Athy", phone: "+353 884 996 4703", totalSpend: "$33957.23", totalOrders: 24986 },
    { id: 13, name: "Bernita Moniker", email: "bmonikerc@g.co", location: "Conceição da Abóboda", phone: "+351 122 281 8005", totalSpend: "$165782.42", totalOrders: 38671 },
    { id: 14, name: "Devlen MacGibbon", email: "dmacgibbond@mashable.com", location: "Manjakandriana", phone: "+261 550 422 8564", totalSpend: "$733558.04", totalOrders: 5702 },
    { id: 15, name: "Terri O'Nion", email: "tonione@msn.com", location: "Hadžići", phone: "+387 213 246 0301", totalSpend: "$327313.11", totalOrders: 7145 },
    { id: 16, name: "Anselm Cavilla", email: "acavillaf@live.com", location: "Redcliff", phone: "+263 941 369 6625", totalSpend: "$533334.93", totalOrders: 33108 },
    { id: 17, name: "Frances Wyndham", email: "fwyndhamg@nbcnews.com", location: "Hekou", phone: "+86 922 171 8017", totalSpend: "$799425.62", totalOrders: 85286 },
    { id: 18, name: "Bennett Skermer", email: "bskermerh@reverbnation.com", location: "Sinop", phone: "+55 598 223 7882", totalSpend: "$251319.17", totalOrders: 45914 },
    { id: 19, name: "Valentine Lambertazzi", email: "vlambertazzii@eepurl.com", location: "Kolodenka", phone: "+380 633 380 2502", totalSpend: "$640365.13", totalOrders: 83235 },
    { id: 20, name: "Tremayne Tolchar", email: "ttolcharj@auda.org.au", location: "Guofu", phone: "+86 445 679 1332", totalSpend: "$917855.01", totalOrders: 51836 },
    { id: 21, name: "Estevan Jahncke", email: "ejahnckek@ox.ac.uk", location: "Benešov nad Ploučnicí", phone: "+420 856 496 9100", totalSpend: "$583555.97", totalOrders: 9523 },
    { id: 22, name: "Inness Ranyelld", email: "iranyelldl@i2i.jp", location: "Camperdown", phone: "+27 913 964 5397", totalSpend: "$410344.53", totalOrders: 96017 },
    { id: 23, name: "Ann Boise", email: "aboisem@nhs.uk", location: "Esuk Oron", phone: "+234 958 752 1521", totalSpend: "$341368.58", totalOrders: 83833 },
    { id: 24, name: "Reynard Goodacre", email: "rgoodacren@opera.com", location: "Isoka", phone: "+260 860 266 9740", totalSpend: "$362313.38", totalOrders: 15703 },
    { id: 25, name: "Corrie Guerro", email: "cguerroo@ca.gov", location: "Qingxi", phone: "+86 699 529 4527", totalSpend: "$155933.66", totalOrders: 67669 },
    { id: 26, name: "Orelee Fonteyne", email: "ofonteynep@baidu.com", location: "Shanshi", phone: "+86 910 656 7153", totalSpend: "$990947.36", totalOrders: 7629 },
    { id: 27, name: "Lil Lakeman", email: "llakemanq@weather.com", location: "Juḩr ad Dīk", phone: "+970 799 528 5168", totalSpend: "$765395.19", totalOrders: 41097 },
    { id: 28, name: "Teddie Mapstone", email: "tmapstoner@guardian.co.uk", location: "Tunoshna", phone: "+7 872 475 3601", totalSpend: "$279921.83", totalOrders: 43948 },
    { id: 29, name: "Paolo Bonds", email: "pbondss@washingtonpost.com", location: "Youchou", phone: "+86 863 508 4897", totalSpend: "$718700.08", totalOrders: 43674 },
    { id: 30, name: "Kayla Gallafant", email: "kgallafantt@technorati.com", location: "Bi’r al ‘Abd", phone: "+20 755 903 3395", totalSpend: "$959211.70", totalOrders: 37331 },
    { id: 31, name: "Maisie Mikalski", email: "mmikalskiu@alexa.com", location: "Mailsi", phone: "+92 366 853 6414", totalSpend: "$820911.51", totalOrders: 18534 },
    { id: 32, name: "Xymenes Duggon", email: "xduggonv@seattletimes.com", location: "Heredia", phone: "+506 818 346 5321", totalSpend: "$272870.81", totalOrders: 37539 },
    { id: 33, name: "Jakie Colles", email: "jcollesw@ifeng.com", location: "Upernavik", phone: "+299 126 679 5677", totalSpend: "$407794.43", totalOrders: 96742 },
    { id: 34, name: "Lew Colton", email: "lcoltonx@wikimedia.org", location: "Toba", phone: "+381 522 893 7829", totalSpend: "$43343.95", totalOrders: 74692 },
    { id: 35, name: "Theodora Barstow", email: "tbarstowy@pcworld.com", location: "Ciseda", phone: "+62 673 109 7943", totalSpend: "$661910.51", totalOrders: 77309 },
    { id: 36, name: "Ulric Kneller", email: "uknellerz@nbcnews.com", location: "Ústí nad Orlicí", phone: "+420 264 829 9892", totalSpend: "$376602.48", totalOrders: 79235 },
    { id: 37, name: "Ellwood Bearward", email: "ebearward10@reference.com", location: "Nueva Requena", phone: "+51 171 197 4985", totalSpend: "$356873.13", totalOrders: 78996 },
    { id: 38, name: "Shalna Voss", email: "svoss11@buzzfeed.com", location: "Şanā’", phone: "+967 264 158 8142", totalSpend: "$380768.49", totalOrders: 13036 },
    { id: 39, name: "Holly Iacovacci", email: "hiacovacci12@vk.com", location: "Ibaraki", phone: "+81 667 109 6968", totalSpend: "$68643.77", totalOrders: 9334 },
    { id: 40, name: "Nicolle Haggis", email: "nhaggis13@huffingtonpost.com", location: "Kuruman", phone: "+27 607 540 0504", totalSpend: "$292977.86", totalOrders: 44276 },
    { id: 41, name: "Janetta Stanett", email: "jstanett14@wiley.com", location: "Memphis", phone: "+1 901 510 8058", totalSpend: "$624477.22", totalOrders: 50590 },
    { id: 42, name: "Welch Goodin", email: "wgoodin15@examiner.com", location: "Metsavan", phone: "+374 984 762 7075", totalSpend: "$44240.56", totalOrders: 23993 },
    { id: 43, name: "Dominga De Bell", email: "dde16@usatoday.com", location: "Vysotsk", phone: "+7 139 494 7185", totalSpend: "$253636.61", totalOrders: 75048 },
    { id: 44, name: "Elga Twamley", email: "etwamley17@nps.gov", location: "Nishishinminato", phone: "+81 421 209 0703", totalSpend: "$8420.45", totalOrders: 50193 },
    { id: 45, name: "Annamaria Tuison", email: "atuison18@cpanel.net", location: "Solidaridad", phone: "+52 551 840 1861", totalSpend: "$8790.60", totalOrders: 67402 },
    { id: 46, name: "Rutter Hatrick", email: "rhatrick19@mayoclinic.com", location: "Domampot", phone: "+63 134 141 4104", totalSpend: "$563471.50", totalOrders: 90685 },
    { id: 47, name: "Teddy Crannage", email: "tcrannage1a@uiuc.edu", location: "Putrajawa", phone: "+62 347 309 9849", totalSpend: "$830225.28", totalOrders: 18308 },
    { id: 48, name: "Gaspard Hannabus", email: "ghannabus1b@wiley.com", location: "Carvalhal", phone: "+351 746 761 5629", totalSpend: "$333295.77", totalOrders: 93658 },
    { id: 49, name: "Kanya Arnolds", email: "karnolds1c@sbwire.com", location: "Dolní Černilov", phone: "+420 569 892 7749", totalSpend: "$9356.87", totalOrders: 25454 },
    { id: 50, name: "Codi Nazer", email: "cnazer1d@rediff.com", location: "Alexandria", phone: "+1 703 933 3296", totalSpend: "$881050.42", totalOrders: 65533 },
    { id: 51, name: "Stacy Acom", email: "sacom1e@addtoany.com", location: "Marondera", phone: "+263 724 289 3246", totalSpend: "$140708.36", totalOrders: 27138 },
    { id: 52, name: "Cory Blondin", email: "cblondin1f@fema.gov", location: "Chaykovskaya", phone: "+7 724 810 8399", totalSpend: "$115222.15", totalOrders: 85693 },
    { id: 53, name: "Weston Shorland", email: "wshorland1g@histats.com", location: "Shanyang", phone: "+86 515 873 6275", totalSpend: "$190855.19", totalOrders: 64141 },
    { id: 54, name: "Tammara Mannering", email: "tmannering1h@etsy.com", location: "Colima", phone: "+506 985 540 3341", totalSpend: "$403919.34", totalOrders: 24038 },
    { id: 55, name: "Javier Agglio", email: "jagglio1i@slideshare.net", location: "Yinji", phone: "+86 659 330 5270", totalSpend: "$120274.22", totalOrders: 82050 },
    { id: 56, name: "Rosalia Schoales", email: "rschoales1j@parallels.com", location: "Jiancheng", phone: "+86 272 227 4958", totalSpend: "$712884.86", totalOrders: 82839 },
    { id: 57, name: "Carla Firsby", email: "cfirsby1k@xrea.com", location: "Artur Nogueira", phone: "+55 238 356 2094", totalSpend: "$965901.20", totalOrders: 16879 },
    { id: 58, name: "Taite Oakenford", email: "toakenford1l@sun.com", location: "La Francia", phone: "+54 425 742 5491", totalSpend: "$408901.92", totalOrders: 35823 },
    { id: 59, name: "Robinet Rounds", email: "rrounds1m@arizona.edu", location: "Sé", phone: "+351 554 677 9118", totalSpend: "$794096.97", totalOrders: 67929 },
    { id: 60, name: "Christalle Ciraldo", email: "cciraldo1n@google.com", location: "Šentvid pri Stični", phone: "+386 906 510 2232", totalSpend: "$265441.66", totalOrders: 2684 },
    { id: 61, name: "Valaree Stocker", email: "vstocker1o@census.gov", location: "Shazi", phone: "+86 922 785 8999", totalSpend: "$129853.99", totalOrders: 49514 },
    { id: 62, name: "Consuelo Sutcliff", email: "csutcliff1p@gmpg.org", location: "Kargasok", phone: "+7 513 592 9428", totalSpend: "$854447.52", totalOrders: 96664 },
    { id: 63, name: "Nike Lincke", email: "nlincke1q@china.com.cn", location: "Tegalbuleud", phone: "+62 383 930 3878", totalSpend: "$978252.13", totalOrders: 67231 },
    { id: 64, name: "Shep Quilligan", email: "squilligan1r@cnn.com", location: "Nakhon Luang", phone: "+66 794 209 8355", totalSpend: "$205510.28", totalOrders: 499 },
    { id: 65, name: "Wallie Erwin", email: "werwin1s@delicious.com", location: "Edsbyn", phone: "+46 581 583 0609", totalSpend: "$410995.35", totalOrders: 74623 },
    { id: 66, name: "Zechariah Attwood", email: "zattwood1t@nifty.com", location: "Shibushi", phone: "+81 401 511 4244", totalSpend: "$63707.16", totalOrders: 86419 },
    { id: 67, name: "Stevana Tebald", email: "stebald1u@house.gov", location: "Yelyzavethradka", phone: "+380 408 617 1812", totalSpend: "$833541.06", totalOrders: 83677 },
    { id: 68, name: "Palm BURWIN", email: "pburwin1v@ameblo.jp", location: "Kertasari", phone: "+62 421 758 8843", totalSpend: "$331030.06", totalOrders: 99939 },
    { id: 69, name: "Sharl Purdey", email: "spurdey1w@arstechnica.com", location: "Hīsh", phone: "+963 365 813 0051", totalSpend: "$720913.09", totalOrders: 5869 },
    { id: 70, name: "Aloin Pembry", email: "apembry1x@google.ru", location: "Yangji", phone: "+86 339 318 7176", totalSpend: "$227153.85", totalOrders: 31960 },
    { id: 71, name: "Karoline Daud", email: "kdaud1y@ted.com", location: "Palhoça", phone: "+55 517 473 6728", totalSpend: "$852723.94", totalOrders: 79377 },
    { id: 72, name: "Mortie Futter", email: "mfutter1z@yellowbook.com", location: "Blachownia", phone: "+48 173 298 9740", totalSpend: "$509731.71", totalOrders: 37061 },
    { id: 73, name: "Schuyler Hinkens", email: "shinkens20@shareasale.com", location: "Río Hondo", phone: "+502 657 950 5432", totalSpend: "$220360.77", totalOrders: 9905 },
    { id: 74, name: "Jozef McMurty", email: "jmcmurty21@fotki.com", location: "Dalududalu", phone: "+62 491 202 8200", totalSpend: "$887874.81", totalOrders: 33691 },
    { id: 75, name: "Nara McGunley", email: "nmcgunley22@qq.com", location: "Alicante/Alacant", phone: "+34 792 752 4796", totalSpend: "$276972.46", totalOrders: 87254 },
    { id: 76, name: "Marleah Timson", email: "mtimson23@nature.com", location: "Paniówki", phone: "+48 211 545 0147", totalSpend: "$234963.55", totalOrders: 64181 },
    { id: 77, name: "Ketty Blucher", email: "kblucher24@booking.com", location: "Xiangyanglu", phone: "+86 548 699 1455", totalSpend: "$84086.90", totalOrders: 68525 },
    { id: 78, name: "Murray Arndtsen", email: "marndtsen25@wp.com", location: "Shizuoka-shi", phone: "+81 586 415 9966", totalSpend: "$954698.49", totalOrders: 95142 },
    { id: 79, name: "Benson Boothby", email: "bboothby26@simplemachines.org", location: "Los Cóndores", phone: "+54 161 829 2347", totalSpend: "$966525.39", totalOrders: 75052 },
    { id: 80, name: "Shaylah Gerrit", email: "sgerrit27@sitemeter.com", location: "Paingar", phone: "+86 573 121 9461", totalSpend: "$609097.00", totalOrders: 55581 },
    { id: 81, name: "Betteann Hawyes", email: "bhawyes28@un.org", location: "Cihua", phone: "+86 545 455 0770", totalSpend: "$8958.92", totalOrders: 58310 },
    { id: 82, name: "Reynolds Slemming", email: "rslemming29@bloglines.com", location: "Dawu Chengguanzhen", phone: "+86 740 215 8983", totalSpend: "$764434.83", totalOrders: 5454 },
    { id: 83, name: "Arlen Abernethy", email: "aabernethy2a@google.nl", location: "Abbeville", phone: "+33 155 902 8183", totalSpend: "$771130.66", totalOrders: 23440 },
    { id: 84, name: "Bernardine Eade", email: "beade2b@columbia.edu", location: "Plato", phone: "+57 498 368 3733", totalSpend: "$339268.83", totalOrders: 17501 },
    { id: 85, name: "Ian Causley", email: "icausley2c@virginia.edu", location: "Acton Vale", phone: "+1 992 294 1907", totalSpend: "$995374.27", totalOrders: 25553 },
    { id: 86, name: "Abagail Garth", email: "agarth2d@wiley.com", location: "Melfi", phone: "+235 627 502 0870", totalSpend: "$830054.12", totalOrders: 56715 },
    { id: 87, name: "Tome Sessuns", email: "tsessuns2e@desdev.cn", location: "General Alvear", phone: "+54 890 389 9195", totalSpend: "$568999.17", totalOrders: 52444 },
    { id: 88, name: "Sly Godbold", email: "sgodbold2f@miitbeian.gov.cn", location: "Arvayheer", phone: "+976 574 510 5888", totalSpend: "$915158.93", totalOrders: 55259 },
    { id: 89, name: "Lane Wheatcroft", email: "lwheatcroft2g@netlog.com", location: "Terpsithéa", phone: "+30 802 453 1790", totalSpend: "$170027.54", totalOrders: 63611 },
    { id: 90, name: "Bard Scutchin", email: "bscutchin2h@usatoday.com", location: "Ganxi", phone: "+86 823 166 6095", totalSpend: "$679196.04", totalOrders: 93350 },
    { id: 91, name: "Alister Batten", email: "abatten2i@google.com.au", location: "Petaling Jaya", phone: "+60 560 404 2745", totalSpend: "$10542.24", totalOrders: 7586 },
    { id: 92, name: "Blanche Emery", email: "bemery2j@loc.gov", location: "Pau", phone: "+33 814 263 4404", totalSpend: "$479717.40", totalOrders: 49842 },
    { id: 93, name: "Kyla Bertomieu", email: "kbertomieu2k@biglobe.ne.jp", location: "Tabwakea Village", phone: "+686 287 696 5776", totalSpend: "$536886.07", totalOrders: 59480 },
    { id: 94, name: "Hugh Livick", email: "hlivick2l@wiley.com", location: "Phù Mỹ", phone: "+84 585 419 2646", totalSpend: "$447424.97", totalOrders: 2668 },
    { id: 95, name: "Emera Daintry", email: "edaintry2m@ustream.tv", location: "Sámara", phone: "+506 371 708 7960", totalSpend: "$850767.23", totalOrders: 56769 },
    { id: 96, name: "Arnuad Dinneen", email: "adinneen2n@sitemeter.com", location: "Llacanora", phone: "+51 722 599 3677", totalSpend: "$361343.72", totalOrders: 87255 },
    { id: 97, name: "Krystalle Whittlesea", email: "kwhittlesea2o@list-manage.com", location: "Bantardawa", phone: "+62 122 286 5695", totalSpend: "$376281.52", totalOrders: 25818 },
    { id: 98, name: "Jessie Yeudall", email: "jyeudall2p@wikimedia.org", location: "Jargalant", phone: "+976 154 383 3816", totalSpend: "$592993.68", totalOrders: 39010 },
    { id: 99, name: "Carlin Baden", email: "cbaden2q@shop-pro.jp", location: "Santa Fe", phone: "+63 702 332 2827", totalSpend: "$434732.89", totalOrders: 49922 },
    { id: 100, name: "Abagael McVrone", email: "amcvrone2r@ihg.com", location: "Dongfeng", phone: "+86 630 450 6014", totalSpend: "$920279.19", totalOrders: 32514 }
  ];
}

export default Customers;
