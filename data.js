    var config = {
        container: "#sanad",

        animateOnInit: true,
        
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connemuhammadrsAnimation: "bounce",
            connemuhammadrsSpeed: 700
        }
    },
    allah = {
		HTMLclass: 'wahi',
        text: {
            name: "رب العزة",
        },
        image: "pix/1.png"
	},
    jebril = {
        parent: allah,
		HTMLclass: 'wahi',
        text:{
            name: "جبريل",
        },
        image: "pix/2.png"
    },
    muhammad = {
        parent: jebril,
		HTMLclass: 'wahi',
        text:{
            name: "رسول الله",
        },
        image: "pix/3.png"
    },
    zaid_bin_thabet = {
        parent: muhammad,
		HTMLclass: 'sahabi',
		childrenDropLevel: 0,
        text:{
            name: "زيد بن ثابت"
        }
    },
    ali_bin_abitaleb = {
        parent: muhammad,
		HTMLclass: 'sahabi',
		childrenDropLevel: 1,
        text:{
            name: "علي بن أبي طالب"
        }
    },
    othman_bin_affan = {
        parent: muhammad,
		HTMLclass: 'sahabi',
		childrenDropLevel: 1,
        text:{
            name: "عثمان بن عفان"
        }
    },
    abdullah_bin_masood = {
        parent: muhammad,
		HTMLclass: 'sahabi',
		childrenDropLevel: 1,
        text:{
            name: "عبد الله بن مسعود"
        }
    },	
	omar_bin_alkhattab = {
		HTMLclass: 'sahabi',
        parent: muhammad,
        text:{
            name: "عمر بن الخطاب"
        }
    },	
    obay_bin_kaab = {
        parent: muhammad,
		HTMLclass: 'sahabi',
        text:{
            name: "أبي بن كعب"
        },
    },
	abo_mosa_alashaari = {
        parent: muhammad,
		HTMLclass: 'sahabi',
        text:{
            name: "أبو موسى الأشعري"
        },
    },
    zir_bin_hubaish = {
        parent: ali_bin_abitaleb,
        text:{
            name: "زر بن حبيش"
        }
    },
    eldoali = {
        parent: ali_bin_abitaleb,
        text:{
            name: "أبو الأسود الدؤلي"
        }
    },	
    abo_horaira = {
        parent: obay_bin_kaab,
		HTMLclass: 'sahabi',
        text:{
            name: "أبو هريرة"
        }
    },
    abdullah_bin_abbas = {
        parent: obay_bin_kaab,
		HTMLclass: 'sahabi',
        text:{
            name: "عبد الله بن عباس"
        }
    },
	derbas_mawla_bin_abbas = {
        parent: abdullah_bin_abbas,
        text:{
            name: "درباس مولى بن عباس"
        }
    },
    abdullah_bin_abi_ayyash = {
        parent: obay_bin_kaab,
		HTMLclass: 'sahabi',
        text:{
            name: "عبد الله بن أبي عياش"
        }
    },	
    abdullah_elsulami = {
        parent: zaid_bin_thabet,
		childrenDropLevel: 1,
		HTMLclass: 'sahabi',
        text:{
            name: "عبد الله حبيب السلمي"
        }
    },	
    saad_elshaibany = {
        parent: abdullah_bin_masood,
        text:{
            name: "سعد بن إياس الشيباني"
        },
    },
    assem = {
        parent: abdullah_elsulami,
		childrenDropLevel: 2,
		HTMLclass: 'qari7',
        text:{
            name: "عاصم بن أبي النجود"
        }
    },
    hafs = {
        parent: assem,
 		HTMLclass: 'rawi',
        text:{
            name: "حفص"
        }
    },	
    shoba = {
        parent: assem,
 		HTMLclass: 'rawi',
        text:{
            name: "شعبة"
        },
    },
	alaaraj = {
        parent: abo_horaira,
        text:{
            name: "الأعرج"
        },
    },
	abo_gaafar_almadani_pseudo = {
        parent: abdullah_bin_abbas,
		pseudo: true,
    },
	abo_gaafar_almadani = {
        parent: abo_gaafar_almadani_pseudo,
		HTMLclass: 'qari10',
		childrenDropLevel: 2,
        text:{
            name: "أبو جعفر المدني"
        },
    },
	ibn_werdan = {
        parent: abo_gaafar_almadani,
		HTMLclass: 'rawi',
        text:{
            name: "ابن وردان"
        },
    },
	ibn_jumaz = {
        parent: abo_gaafar_almadani,
		HTMLclass: 'rawi',
        text:{
            name: "ابن جماز"
        },
    },
	nafee = {
        parent: alaaraj,
		childrenDropLevel: 2,
		HTMLclass: 'qari7',
        text:{
            name: "نافع المدني"
        },
    },
	qaloon = {
        parent: nafee,
 		HTMLclass: 'rawi',
        text:{
            name: "قالون"
        },
    },
	warsh = {
        parent: nafee,
 		HTMLclass: 'rawi',
        text:{
            name: "ورش"
        },
    },
	ibn_katheer = {
        parent: derbas_mawla_bin_abbas,
		childrenDropLevel: 1,
		HTMLclass: 'qari7',
        text:{
            name: "ابن كثير المكي"
        },
    },
	ahmad_alnabbal = {
        parent: ibn_katheer,
        text:{
            name: "أحمد النبال"
        },
    },	
	konbol = {
        parent: ahmad_alnabbal,
 		HTMLclass: 'rawi',
        text:{
            name: "قنبل"
        },
    },
	ekrema_bin_soliman = {
        parent: ibn_katheer,
        text:{
            name: "عكرمة بن سليمان"
        },
    },
	albazzei = {
        parent: ekrema_bin_soliman,
 		HTMLclass: 'rawi',
        text:{
            name: "البزي"
        },
    },
	saeed_bin_jubair = {
        parent: abdullah_bin_abbas,
        text:{
            name: "سعيد بن جبير"
        },
    },
	abi_amr = {
        parent: saeed_bin_jubair,
		HTMLclass: 'qari7',
		childrenDropLevel: 1,
        text:{
            name: "أبي عمرو البصري"
        },
    },
    yahia_ibn_almubarak = {
       parent: abi_amr,
	   text:{
            name: "يحيى بن المبارك"
        },
    },
	eldoori = {
        parent: yahia_ibn_almubarak,
 		HTMLclass: 'rawi',
        text:{
            name: "الدوري"
        },
    },
	elsoosi = {
        parent: yahia_ibn_almubarak,
 		HTMLclass: 'rawi',
        text:{
            name: "السوسي"
        },
    },
    almogheera_bin_abi_shehab = {
        parent: othman_bin_affan,
        text:{
            name: "المغيرة بن أبي شهاب"
        },
    },
	ibn_amer_elshamy = {
		HTMLclass: 'qari7',
        parent: almogheera_bin_abi_shehab,
        text:{
            name: "ابن عامر الشامي"
        },
    },
    yahia_bin_alharith_althammary = {
        parent: ibn_amer_elshamy,
        text:{
            name: "يحيى بن الحارث الذماري"
        },
    },			
    ayoub_bin_tameem = {
        parent: yahia_bin_alharith_althammary,
        text:{
            name: "أيوب بن تميم"
        },
    },
    hisham_bin_ammar = {
        parent: ayoub_bin_tameem,
 		HTMLclass: 'rawi',
        text:{
            name: "هشام"
        },
    },	
	ibn_thakwan = {
        parent: ayoub_bin_tameem,
 		HTMLclass: 'rawi',
        text:{
            name: "ابن ذكوان"
        },
    },
	ibn_abi_laila = {
        parent: ali_bin_abitaleb,
        text:{
            name: "ابن أبي ليلى"
        },
    },
	alaamash = {
        parent: abdullah_bin_masood,
        text:{
            name: "الأعمش"
        },
    },	
	hamza = {
        parent: alaamash,
		HTMLclass: 'qari7',
        text:{
            name: "حمزة الكوفي"
        },
    },	
	solaim = {
        parent: hamza,
		childrenDropLevel: 0,
        text:{
            name: "سليم بن عيسى"
        },
    },
	khalaf_pseudo = {
		parent: solaim,
		pseudo: true,
	},	
	khalaf = {
        parent: khalaf_pseudo,
 		HTMLclass: 'rawi',
        text:{
            name: "خلف"
        },
    },
	khallad_pseudo = {
		parent: solaim,
		pseudo: true,
	},		
	khallad = {
        parent: khallad_pseudo,
 		HTMLclass: 'rawi',
        text:{
            name: "خلاد"
        },
    },	
	abo_yaaqoob_alazraq = {
        parent: warsh,
        text:{
            name: "ابو يعقوب الأزرق"
        },
    },	
	alasbahany = {
        parent: warsh,
        text:{
            name: "محمد الأصبهاني"
        },
    },		
	alkasaaei = {
        parent: hamza,
		HTMLclass: 'qari7',
		childrenDropLevel: 1,
        text:{
            name: "الكسائي"
        },
    },	
	abo_elharith = {
        parent: alkasaaei,
 		HTMLclass: 'rawi',
        text:{
            name: "أبو الحارث"
        },
    },
	hafs_eldoori = {
        parent: alkasaaei,
 		HTMLclass: 'rawi',
       text:{
            name: "الدوري"
        },
    },
	omran_bin_melhan = {
        parent: abo_mosa_alashaari,
 		HTMLclass: 'sahabi',
        text:{
            name: "عمران بن ملحان"
        },
    },
	abo_elashhab_elatared = {
        parent: omran_bin_melhan,
       text:{
            name: "أبو الأشهب العطارد"
        },
    },
	yaaqoob_elhadrami = {
        parent: abo_elashhab_elatared,
 		HTMLclass: 'qari10',
		childrenDropLevel: 2,
       text:{
            name: "يعقوب الحضرمي"
        },
    },
	rooh = {
        parent: yaaqoob_elhadrami,
 		HTMLclass: 'rawi',
       text:{
            name: "روح"
        },
    },
	rowais = {
        parent: yaaqoob_elhadrami,
 		HTMLclass: 'rawi',
       text:{
            name: "رويس"
        },
    },
	khalaf_bin_hesham = {
        parent: solaim,
 		HTMLclass: 'qari10',
       text:{
            name: "خلف بن هشام"
        },
    },
	isaac_alwarraq = {
        parent: khalaf_bin_hesham,
 		HTMLclass: 'rawi',
       text:{
            name: "إسحاق"
        },
    },	
	edrees_alhaddad = {
        parent: khalaf_bin_hesham,
 		HTMLclass: 'rawi',
       text:{
            name: "إدريس"
        },
    },
	
    chart_config = [
        config,
        allah,
		jebril,
        muhammad,
        zaid_bin_thabet,
        obay_bin_kaab,
		abo_mosa_alashaari,
		omar_bin_alkhattab,
		ali_bin_abitaleb,
		othman_bin_affan,
		abdullah_bin_masood,
		abo_horaira,
		abdullah_bin_abbas,
		abdullah_bin_abi_ayyash,
		zir_bin_hubaish,
		abdullah_elsulami,
		saad_elshaibany,
		assem,
		hafs,
		shoba,
		alaaraj,
		abo_gaafar_almadani_pseudo,
		abo_gaafar_almadani,
		ibn_werdan,
		ibn_jumaz,
		nafee,
		qaloon,
		warsh,
		derbas_mawla_bin_abbas,
		ibn_katheer,
		ahmad_alnabbal,
		konbol,
		ekrema_bin_soliman,
		albazzei,
		eldoali,
		saeed_bin_jubair,
		abi_amr,
		yahia_ibn_almubarak,
		eldoori,
		elsoosi,
		almogheera_bin_abi_shehab,
		ibn_amer_elshamy,
		hisham_bin_ammar,
		ibn_thakwan,
		ibn_abi_laila,
		alaamash,
		hamza,
		solaim,
		khalaf_pseudo,
		khallad_pseudo,
		khalaf,
		khallad,
		yahia_bin_alharith_althammary,
		ayoub_bin_tameem,
		abo_yaaqoob_alazraq,
		alasbahany,
		alkasaaei,
		abo_elharith,
		hafs_eldoori,
		omran_bin_melhan,
		abo_elashhab_elatared,
		yaaqoob_elhadrami,
		rooh,
		rowais,
		khalaf_bin_hesham,
		isaac_alwarraq,
		edrees_alhaddad,
		
    ];