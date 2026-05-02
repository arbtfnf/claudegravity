// [name, desc, distance_km, rating, tags[], bestTime, type, emoji, highlight]
type PlaceTuple = [string,string,number,number,string[],string,string,string,string];

const raw: PlaceTuple[] = [
["Nandi Hills","Iconic sunrise point & biker haven with hairpin bends",60,4.8,["bike","scenic","family"],"Oct-Mar, 5AM sunrise","ride","🌄","Stunning sunrise above clouds"],
["Savandurga","Largest monolith hill in Asia with trekking trails",50,4.5,["bike","adventure","offbeat"],"Nov-Feb","trek","⛰️","Night treks possible"],
["Skandagiri","Night trek paradise with starlit trails",70,4.7,["bike","adventure","offbeat"],"Oct-Jan, night treks","trek","🌌","Stargazing + camping"],
["Anthargange","Volcanic rock formations & cave exploration",70,4.4,["bike","adventure","offbeat"],"Oct-Mar","trek","🪨","Underground cave crawling"],
["Manchanabele Dam","Serene reservoir with coracle rides",40,4.2,["bike","family","scenic"],"Aug-Feb","dam","🚣","Coracle rides at sunset"],
["Ramanagara","Sholay filming location & rock climbing hub",55,4.3,["bike","adventure","family"],"Year-round","adventure","🧗","Rappelling & zip-lining"],
["Bheemeshwari","Fishing camp & nature retreat on Cauvery",100,4.6,["bike","car","family","scenic"],"Oct-Jun","camp","🎣","Mahseer fishing"],
["Shivanasamudra Falls","Twin waterfalls with Gaganachukki & Bharachukki",130,4.7,["bike","car","scenic"],"Jul-Jan","waterfall","💧","Best after monsoon"],
["Mekedatu","Where the river flows through a gorge",100,4.5,["bike","adventure","offbeat"],"Oct-May","gorge","🏞️","Natural rock gorge"],
["Hogenakkal Falls","Niagara of India, coracle rides in Tamil Nadu border",135,4.6,["bike","car","family"],"Jul-Jan","waterfall","🌊","Oil bath massage by falls"],
["Talakadu","Ancient sand-buried temples on Cauvery banks",140,4.3,["bike","heritage","offbeat"],"Oct-Mar","heritage","🏛️","5 buried Shiva temples"],
["Mysore Palace","Grand royal palace with light shows",145,4.8,["car","family","heritage"],"Oct (Dasara)","heritage","👑","Dasara illumination"],
["Chamundi Hills","Hilltop temple with Nandi bull statue",150,4.4,["bike","heritage","family"],"Year-round","temple","🐂","1000 steps to top"],
["Coorg (Madikeri)","Scotland of India, coffee plantations",250,4.9,["bike","car","family","scenic"],"Oct-Mar","hill-station","☕","Coffee trail rides"],
["Chikmagalur","Western Ghats coffee country & Mullayanagiri",245,4.8,["bike","car","scenic","adventure"],"Sep-Feb","hill-station","🏔️","Highest peak in Karnataka"],
["BR Hills","Biligiri Rangaswamy Temple wildlife sanctuary",180,4.5,["bike","adventure","offbeat"],"Oct-May","wildlife","🐘","Elephant safari"],
["Kabini","Premier wildlife & river safari destination",220,4.7,["car","family","scenic"],"Oct-Jun","wildlife","🐅","Tiger spotting river safaris"],
["Sakleshpur","Green route railway trek through Western Ghats",220,4.6,["bike","adventure","offbeat"],"Oct-Mar","trek","🚂","Abandoned railway trek"],
["Lepakshi","Hanging pillar temple & Nandi sculpture",120,4.4,["bike","heritage","offbeat"],"Year-round","heritage","🪔","Mysterious hanging pillar"],
["Kunti Betta","Twin hills for night treks near Pandavapura",130,4.2,["bike","adventure","offbeat"],"Oct-Feb","trek","🌙","Moonlight treks"],
["Yelagiri","Quiet Tamil Nadu hill station with lake",160,4.1,["bike","car","family"],"Year-round","hill-station","🏕️","Paragliding available"],
["Hessaraghatta Lake","Birding hotspot & grasslands near city",35,4.0,["bike","family","scenic"],"Nov-Feb","lake","🦅","300+ bird species"],
["Devarayanadurga","Hill fortress with twin temples",70,4.2,["bike","heritage","scenic"],"Year-round","fort","🏰","Yoga Narasimha temple"],
["Makalidurga","Railway track trek to hilltop fort",60,4.3,["bike","adventure","offbeat"],"Oct-Feb","trek","🛤️","Walk along active railway"],
["Kanakapura","Scenic road with caves, hills & nature camps",60,4.1,["bike","scenic","family"],"Year-round","road","🛣️","Best ride road from BLR"],
["Avalabetta","Sunrise hilltop with cross monument",90,4.3,["bike","scenic","offbeat"],"Oct-Mar, sunrise","hilltop","✝️","Panoramic sunrise views"],
["Gudibande Fort","13th century fort with 3 lakes",100,4.0,["bike","heritage","offbeat"],"Oct-Feb","fort","🏰","Least crowded fort trek"],
["Shivagange","Hill shaped like Shiva lingam with temple",55,4.1,["bike","heritage","adventure"],"Year-round","temple","🕉️","Rock climbing routes"],
["Uttari Betta","Quick sunrise trek near Nandi Hills",75,4.2,["bike","adventure"],"Oct-Mar","trek","🌅","Less crowded Nandi alternative"],
["Muthathi","Remote Cauvery riverside camping spot",105,4.4,["bike","offbeat","adventure"],"Oct-May","camp","🏕️","Crocodile spotting"],
["Ranganthittu Bird Sanctuary","River island bird sanctuary",130,4.5,["car","family","scenic"],"Jun-Nov","wildlife","🦜","Boat rides among nesting birds"],
["Bannerghatta Bio Park","Safari & butterfly park in city limits",25,4.3,["car","family"],"Year-round","wildlife","🦁","Lion & tiger safari"],
["Dodda Alada Mara","400-year-old banyan tree spread over acres",28,3.9,["bike","family"],"Year-round","nature","🌳","Covers 3 acres"],
["Janapada Loka","Folk arts museum with rural Karnataka culture",55,4.0,["car","family","heritage"],"Year-round","museum","🎭","Folk dance performances"],
["Chunchi Falls","Cascading waterfall near Mekedatu",100,4.2,["bike","adventure","scenic"],"Aug-Jan","waterfall","🌊","Natural pool swimming"],
["Pearl Valley","Lush valley near Maddur with riverside",95,4.0,["bike","scenic","offbeat"],"Oct-Feb","valley","💎","Hidden gem valley"],
["Kaivara","Ancient pilgrimage town with hilltop views",75,4.1,["bike","heritage","offbeat"],"Year-round","temple","🛕","Amara Narayana temple"],
["Pyramid Valley","Meditation pyramid & spiritual retreat",35,3.8,["car","family","offbeat"],"Year-round","spiritual","🔺","World's largest meditation pyramid"],
["Balmuri & Edmuri Falls","Gentle waterfalls near Mysore",140,4.0,["bike","car","family"],"Jul-Dec","waterfall","💦","Safe for family swimming"],
["Channapatna","Toy town famous for lacquerware toys",60,3.9,["car","family","heritage"],"Year-round","town","🧸","GI-tagged wooden toys"],
["Sangama","Confluence of Arkavathy & Cauvery rivers",95,4.3,["bike","scenic","adventure"],"Oct-May","river","🏞️","Kayaking at confluence"],
["Turahalli Forest","Urban forest for quick MTB rides",15,4.0,["bike","adventure"],"Year-round","forest","🌲","Mountain biking trails"],
["Ramnagar","Rock climbing & bouldering hotspot",55,4.1,["bike","adventure"],"Oct-Mar","climb","🧗‍♂️","Bolting routes available"],
["Jog Falls","India's highest plunge waterfall (daytrip)",380,4.8,["bike","car","scenic"],"Aug-Dec","waterfall","🌊","Raja, Rani, Rover, Rocket falls"],
["Hampi","UNESCO World Heritage boulder kingdom",340,4.9,["bike","heritage","offbeat","adventure"],"Oct-Feb","heritage","🛕","Ruins + bouldering"],
["Gokarna","Beach town with hidden trail beaches",480,4.7,["bike","scenic","offbeat"],"Oct-Mar","beach","🏖️","Om Beach trek"],
["Pondicherry","French quarter & surf culture",310,4.6,["bike","car","family","scenic"],"Oct-Mar","beach","🇫🇷","ECR coastal ride"],
["Ooty","Queen of Nilgiris with tea gardens",280,4.5,["car","family","scenic"],"Mar-Jun, Sep-Nov","hill-station","🍵","36 hairpin bends ride"],
["Wayanad","Misty mountains with spice plantations",280,4.6,["bike","car","family","scenic"],"Oct-May","hill-station","🌿","Edakkal caves"],
["Kodaikanal","Princess of hill stations",460,4.5,["car","family","scenic"],"Apr-Jun, Sep-Nov","hill-station","⛅","Coaker's Walk"],

// PIT STOPS - FOOD
["Kamath Lokaruchi","Legendary highway dosa joint at Bidadi",35,4.6,["food","bike","car","family"],"Year-round","food","🥘","Filter coffee & set dosa"],
["Hotel Mayura","KSTDC highway stop with thali meals",60,4.0,["food","car","family"],"Year-round","food","🍛","Affordable thali"],
["Maddur Tiffanies","Famous for Maddur vada & filter coffee",80,4.5,["food","bike","car"],"Year-round","food","☕","Iconic Maddur Vada"],
["Kadamba Veg","Mysore road pit stop with North Karnataka food",90,4.2,["food","car","family"],"Year-round","food","🍲","Jolada rotti meals"],
["Benne Dose Camp","Davangere benne dose at highway stops",100,4.4,["food","bike"],"Year-round","food","🫓","Butter-soaked dosas"],
["RRR Restaurant Mysore","Non-veg highway legend near Mysore",135,4.5,["food","bike","car"],"Year-round","food","🍗","Andhra-style biryani"],
["Aramane Coffee","Estate coffee & snacks on Coorg road",180,4.3,["food","bike","scenic","coffee"],"Year-round","food","☕","Plantation fresh coffee"],
["Nalpak","Ragi mudde & country chicken specialists",85,4.3,["food","offbeat"],"Year-round","food","🍖","Authentic Karnataka meals"],
["Vidyarthi Bhavan","Legendary Bangalore dosa since 1943",5,4.8,["food","family","heritage"],"Year-round","food","🥞","Crispy masala dosa"],
["CTR Malleshwaram","Butter-soaked benne masala dosa institution",8,4.7,["food","family"],"Year-round","food","🧈","Queue-worthy dosas"],
["Taaza Thindi","Idli-vada paradise in VV Puram food street",6,4.5,["food","family"],"Year-round","food","🥣","Evening food street walk"],
["Airlines Hotel","1950s Bangalore institution for South Indian meals",10,4.4,["food","family","heritage"],"Year-round","food","✈️","Ghee pudi dosa"],
["Brahmin's Coffee Bar","No-frills idli-vada-coffee legend",7,4.6,["food","heritage","coffee"],"Year-round","food","☕","Standing & eating tradition"],
["Windmills Craftworks","Microbrewery with wood-fired pizza",12,4.3,["food","car"],"Year-round","food","🍺","Craft beer + pizza"],
["Raasta Cafe Chikmagalur","Biker café in coffee country",245,4.5,["food","bike","scenic","coffee"],"Year-round","food","🏍️","Biker community hub"],
["The Grub Bus Sakleshpur","Roadside container café on green route",200,4.2,["food","bike","offbeat"],"Year-round","food","🚌","Instagram-worthy stop"],

// ADVENTURE & ACTIVITIES
["Kolar Gold Fields","Abandoned British-era gold mines",100,4.1,["bike","heritage","offbeat"],"Year-round","heritage","⛏️","Deepest gold mine in India"],
["Dandeli","White water rafting & forest camps",450,4.6,["bike","car","adventure"],"Oct-May","adventure","🚣","Class II-III rapids"],
["Netrani Island","Scuba diving off Karnataka coast",400,4.5,["adventure","offbeat"],"Oct-May","diving","🤿","Coral reef diving"],
["Yana Rocks","Mysterious black rock formations in forest",490,4.4,["bike","offbeat","adventure"],"Oct-Mar","geology","🗿","Karst rock pillars"],
["Murudeshwar","Giant Shiva statue by the sea",500,4.5,["bike","car","heritage","scenic"],"Oct-May","temple","🔱","World's 2nd tallest Shiva"],
["Agumbe","Cherrapunji of South with rainforest treks",360,4.5,["bike","adventure","offbeat","scenic"],"Jun-Sep for rain","rainforest","🌧️","King Cobra habitat"],
["Kudremukh","Horse-face peak with grassland treks",330,4.7,["bike","adventure","scenic"],"Oct-Mar","trek","🐴","Rolling green meadows"],
["Honnamana Halla Falls","Hidden waterfall near Shimoga",310,4.2,["bike","offbeat","scenic"],"Jul-Nov","waterfall","🌊","Rappelling by waterfall"],
["Badami Caves","Chalukya rock-cut cave temples",460,4.6,["bike","heritage","car"],"Oct-Mar","heritage","🏛️","6th century rock art"],
["Aihole & Pattadakal","Cradle of Indian temple architecture",470,4.5,["car","heritage"],"Oct-Feb","heritage","🛕","UNESCO World Heritage"],
["Chitradurga Fort","Stone fortress with incredible engineering",200,4.5,["bike","heritage","adventure"],"Year-round","fort","🏰","Onake Obavva's fortress"],
["Madhugiri Fort","Largest monolith fort in Asia",110,4.2,["bike","adventure","heritage"],"Oct-Mar","fort","🪨","Single rock fortress"],
["Sira Fort","Hidden Adil Shahi fort with mosque",120,3.9,["bike","heritage","offbeat"],"Year-round","fort","🕌","Rarely visited gem"],
["Channarayana Durga","Dramatic hilltop fort ruins",85,4.1,["bike","adventure","offbeat"],"Oct-Mar","fort","⚔️","360° views from top"],
["Ghati Subramanya","Cave temple dedicated to Lord Subramanya",30,4.0,["bike","heritage","family"],"Year-round","temple","🐍","Ancient cave shrine"],
["Devanahalli Fort","Tipu Sultan's birthplace fort",35,4.0,["bike","heritage"],"Year-round","fort","🏰","Near BLR airport"],
["Nrityagram","Classical dance village & cultural retreat",30,4.3,["car","family","heritage"],"Year-round, Fri tours","culture","💃","Living dance village"],
["Art of Living Ashram","Spiritual retreat & meditation center",25,4.2,["car","family"],"Year-round","spiritual","🧘","Meditation programs"],
["Wonderla","Amusement & water park",28,4.4,["car","family"],"Year-round","park","🎢","Best waterpark in BLR"],
["Innovative Film City","Theme park with movie sets",40,4.0,["car","family"],"Year-round","park","🎬","Dino park & wax museum"],
["Lumbini Gardens","Lakeside park with boating",10,3.8,["family"],"Year-round","park","🚤","Evening boating"],
["Ulsoor Lake","Urban lake with island temple",5,3.9,["bike","family"],"Year-round","lake","🏝️","Sunrise walks"],
["Cubbon Park","Green lung of Bangalore",3,4.3,["family"],"Year-round","park","🌳","Heritage walks"],
["Lal Bagh","Botanical garden since 1760",5,4.5,["family","heritage"],"Year-round","park","🌺","Glass house flower shows"],
["Tipu Sultan's Palace","Teak palace in city center",6,4.1,["heritage","family"],"Year-round","heritage","🏯","Indo-Islamic architecture"],
["ISKCON Temple","Hilltop Krishna temple complex",8,4.4,["family","heritage"],"Year-round","temple","🙏","Evening aarti"],
["Hebbal Lake","Urban birding & cycling spot",10,3.7,["bike","family"],"Nov-Feb","lake","🦢","Migratory birds"],

// MORE RIDES & ROUTES
["Kanakpura - Sangama Loop","Best weekend loop ride from Bangalore",95,4.6,["bike","scenic"],"Year-round","ride","🛣️","Perfect curves & greenery"],
["Bangalore - Mysore Expressway","Smooth 120km expressway blast",145,4.3,["bike","car"],"Year-round","ride","🏎️","India's first expressway"],
["Bangalore - Yercaud","Twisty ghat road to Salem hills",220,4.4,["bike","scenic"],"Oct-Mar","ride","🌀","78 hairpin bends"],
["Bangalore - Kolli Hills","70 hairpin thriller ride",350,4.5,["bike","adventure"],"Oct-Mar","ride","💀","Most thrilling ghat"],
["Bandipur Forest Route","Wildlife corridor ride to Ooty",220,4.6,["bike","car","scenic"],"Year-round daylight","ride","🐾","Spot elephants on road"],
["Bangalore - Valparai","Tea estate paradise via Pollachi",480,4.5,["bike","car","scenic"],"Year-round","ride","🍃","40 hairpin bends"],
["Old Madras Road","Heritage highway with pit stops",45,4.0,["bike"],"Year-round","ride","📍","Classic BLR ride"],
["Tumkur Road to Chitradurga","Long straight highway bliss",200,4.2,["bike","car"],"Year-round","ride","🌾","Sunflower fields en route"],
["Nice Road Loop","Peripheral ring road evening ride",40,4.1,["bike"],"Year-round, evenings","ride","🌃","City lights loop"],
["Magadi Road Loop","Quick scenic loop past Savandurga",60,4.2,["bike","scenic"],"Year-round","ride","🏞️","Reservoir views"],
["ECR Chennai","East Coast Road coastal ride",350,4.5,["bike","scenic"],"Oct-Mar","ride","🌊","Beach after beach"],
["Belur & Halebidu","Hoysala temple masterpieces",220,4.6,["bike","car","heritage","family"],"Year-round","heritage","🛕","12th century sculptures"],
["Srirangapatna","Tipu's island fortress",130,4.3,["bike","heritage","family"],"Year-round","heritage","⚔️","Island fort & Gumbaz"],
["Bylakuppe","Tibetan settlement with golden temple",225,4.4,["bike","car","family","offbeat"],"Year-round","culture","🏯","Mini Tibet in Karnataka"],
["Dubare Elephant Camp","Elephant bathing & interaction",240,4.3,["car","family"],"Year-round","wildlife","🐘","Bathe elephants in river"],
["Coffee Day Square Chikmagalur","CCD founder's estate café",245,4.2,["food","bike","car","coffee"],"Year-round","food","☕","Origin of CCD"],
["Thatte Idli at Bidadi","Highway thatte idli stop",35,4.4,["food","bike"],"Year-round","food","🍚","Giant plate idlis"],
["Janapada Loka Folk Museum","Rural arts showcase",55,4.0,["car","family","heritage"],"Year-round","museum","🎨","Puppet shows"],
["Rangasthala Park","Nature park near Kunigal",70,3.8,["car","family"],"Year-round","park","🌿","Deer park & boating"],
["Kokrebellur","Pelican & stork village sanctuary",120,4.1,["bike","offbeat","scenic"],"Dec-Jun","wildlife","🦩","Villagers protect birds"],
];

export interface Place {
  id: number; name: string; desc: string; distance: number; rating: number;
  tags: string[]; bestTime: string; type: string; emoji: string; highlight: string;
  simStats: {
    bike: string;
    biker: string;
    topSpeed: number;
    maxRPM: number;
  }
}

const superbikes = ["Kawasaki Ninja H2R", "Suzuki Hayabusa", "BMW S1000RR", "Ducati Panigale V4", "Yamaha YZF-R1", "Honda CBR1000RR-R", "Aprilia RSV4", "MV Agusta F4"];
const indianBikers = ["Arjun 'The Ghost' Varma", "Rohan 'Throttle' Sharma", "Vikram 'Nitro' Iyer", "Sameer 'Apex' Khan", "Aryan 'Redline' Das", "Ishaan 'Drift' Malhotra", "Vivaan 'Turbo' Nair", "Yash 'Burnout' Patil"];

export const places: Place[] = raw.map((r, i) => ({
  id: i, name: r[0], desc: r[1], distance: r[2], rating: r[3],
  tags: r[4], bestTime: r[5], type: r[6], emoji: r[7], highlight: r[8],
  simStats: {
    bike: superbikes[Math.floor(Math.random() * superbikes.length)],
    biker: indianBikers[Math.floor(Math.random() * indianBikers.length)],
    topSpeed: 180 + Math.floor(Math.random() * 140),
    maxRPM: 12000 + Math.floor(Math.random() * 4000)
  }
}));
