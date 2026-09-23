const productData = {
  banners: {
    single: {
      title: '자취러를 위한\n다이소 자취 필수템',
      bgImage: process.env.PUBLIC_URL + '/images/pickbg_01.jpg',
      link: '/pick',
    },
    house: {
      title: '분위기를 완성해줄\n집꾸미기 아이템',
      bgImage: process.env.PUBLIC_URL + '/images/pickbg_02.jpg',
      link: '/pick',
    },
    conven: {
      title: '편리함 UP\n다이소 생활꿀템',
      bgImage: process.env.PUBLIC_URL + '/images/pickbg_03.jpg',
      link: '/pick',
    },
    popular: {
      title: '다이소의\n인기있는 아이템',
      bgImage: process.env.PUBLIC_URL + '/images/pickbg_04.jpg',
      link: '/pick',
    },
  },
  category: [
    {id: 'single', label: '자취 필수템'},
    {id: 'house', label: '집꾸미기 아이템'},
    {id: 'conven', label: '가성비 생활템'},
    {id: 'popular', label: '요즘 인기있는 아이템'},
  ],
  rankCategory: [
    {id: 'beauty', label: '뷰티/위생'},
    {id: 'kitchen', label: '주방용품'},
    {id: 'clean', label: '청소/욕실'},
    {id: 'organize', label: '수납/정리'},
    {id: 'fancy', label: '문구/팬시'},
    {id: 'interior', label: '인테리어/원예'},
    {id: 'digital', label: '공구/디지털'},
    {id: 'food', label: '식품'},
    {id: 'sports', label: '스포츠/레저/취미'},
    {id: 'fashion', label: '패션/잡화'},
    {id: 'animal', label: '반려동물'},
  ],

  products: [
    {
      id: 1,
      category: ['single', 'clean'],
      image: process.env.PUBLIC_URL + '/images/clean_01.jpg', 
      title: '배수구망 시트 15x5cm 30매입',
      price: 1000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-04-28',
      sales: 4500,
      inventory: 45,
      likes: 666,
      shares: 28,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_40.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_40.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_41.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_42.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_22.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'clean_bath0',
          rating: 5,
          content: '샤워할 때마다 배수구에 머리카락 끼는 거 극혐이었는데 이거 붙이고 신세계를 만났습니다ㅋㅋ 머리카락이 시트 위에 싹 모이니까 설거지하듯 떼서 버리기만 하면 끝이에요. 30매나 들어있어서 한 달 넘게 든든하게 쓰겠네요.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_73.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0914',
          rating: 4,
          content: '배수구 크기에 딱 맞고 접착력도 좋아서 물방울이 닿아도 밀리지 않고 잘 붙어있어요. 매일 청소 안 하고 며칠에 한 번씩 시트만 슥 교체해 주면 되니까 욕실 관리가 너무 편해졌습니다. 가성비 최고의 다이소 꿀템이네요.',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_74.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'single_room3',
          rating: 3,
          content: '이물질 걸러주는 기능은 확실히 좋은데, 물이 한 번에 확 쏟아질 때는 배수 속도가 약간 느려지는 감이 있어요. 물때나 머리카락이 너무 많이 쌓이면 물이 고일 수 있으니 매일매일 자주 갈아주는 게 위생상 좋을 것 같습니다.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'hair_killer',
          rating: 5,
          content: '진짜 배수구 청소하기 싫으신 분들은 무조건 사셔야 합니다ㅋㅋ 붙여놓으면 물 빠짐 구멍 사이로 머리카락 한 올도 안 빠져나가고 완벽하게 걸러줘요. 부착하기 전에 물기를 싹 닦고 붙여야 접착력이 오래가니 참고하세요!',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 아주 위생적인 일회용 시트입니다. 욕실뿐만 아니라 싱크대 배수구 쪽에 가볍게 붙여두는 용도로도 응용해서 쓰고 있는데 음식물 찌꺼기 잘 걸러줘서 편해요. 다 쓰면 당연히 재구매할 예정입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_75.jpg',
          ],
        },
      ]
    },
    {
      id: 2,
      category: ['single', 'organize',],
      image: process.env.PUBLIC_URL + '/images/organize_01.jpg', 
      title: '폴딩형 스틸 의류 정리대',
      price: 3000,
      tags: ['택배', '픽업'],
      date: '2026-06-02',
      sales: 1620,
      inventory: 100,
      likes: 6736,
      shares: 150,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_38.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_38.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_39.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_21.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'closet_master',
          rating: 5,
          content: '티셔츠나 니트류를 그냥 쌓아두면 무너지고 지저분했는데 이거 쓰고 옷방이 백화점 매장처럼 깔끔해졌어요! 스틸이라 가벼우면서도 엄청 튼튼해서 무거운 겨울 옷 여러 벌 올려놔도 안정감 있게 지지해 주네요.',
          date: '2026-06-22',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_71.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0822',
          rating: 4,
          content: '옷장 하단에 남는 애매한 공간에 쏙 들어가서 공간 활용하기 너무 좋습니다. 안 쓸 때는 착 접어서 틈새에 보관하면 되니까 폴딩형이라 정말 실용적이네요. 가로지르는 철사 마감도 매끄럽게 잘 되어 있어 옷 상할 걱정 없어요.',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_72.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'single_room0',
          rating: 3,
          content: '정리대 자체는 직관적이고 조립할 필요도 없어서 편해요. 다만 수평을 완벽하게 안 맞추면 무거운 옷을 한쪽에 몰아 올려뒀을 때 약간 흔들리는 감이 있네요. 양쪽 균형 잘 맞춰서 차곡차곡 쌓아두면 쓸만합니다.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'dress_clean8',
          rating: 5,
          content: '인스타 정리 꿀팁 보고 샀는데 대만족이에요ㅋㅋ 여러 개 사서 위로 적재하니까 커스텀 선반처럼 쓸 수 있어서 너무 편합니다. 격자형이라 통풍도 잘 돼서 오랫동안 옷 보관해도 퀴퀴한 냄새 안 나고 아주 마음에 듭니다.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_mom95',
          rating: 4,
          content: '배송 아주 빠르고 찌그러진 곳 없이 잘 도착했습니다. 청바지나 두꺼운 맨투맨 셔츠들 개어서 보관하는 용도로 쓰는데 흐트러지지 않아서 대만족 중입니다. 가격 대비 철제 퀄리티가 아주 훌륭한 다이소 효자템이네요.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 3,
      category: ['single', 'organize',],
      image: process.env.PUBLIC_URL + '/images/organize_02.jpg', 
      title: '논슬립 바지걸이 3벌용',
      price: 3000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-01-03',
      sales: 1962,
      inventory: 250,
      likes: 1845,
      shares: 41,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_36.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_36.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_37.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_20.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'closet_clean',
          rating: 5,
          content: '옷장이 좁아서 고민이었는데 이거 쓰고 공간이 확 넓어졌어요! 옷걸이 하나에 바지 3벌을 같이 걸 수 있으니까 정리 정돈이 너무 잘 됩니다. 논슬립이라 미끄러운 슬랙스 걸어놔도 절대 안 흘러내리고 굳건하게 붙어있네요.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_66.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_seok92',
          rating: 4,
          content: '바지 무게 때문에 휘어질까 봐 걱정했는데 프레임이 생각보다 엄청 단단하고 견고하네요. 청바지 여러 개 걸어도 끄떡없습니다. 다만 바지를 꺼낼 때 밑에 걸린 건 위에 옷에 살짝 걸려서 조심히 빼야 하긴 하는데 아주 만족스러워요.',
          date: '2026-09-11',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_67.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'single_life0',
          rating: 3,
          content: '공간 절약용으로는 최고입니다. 논슬립 코팅도 짱짱해서 옷 고정은 확실해요. 하지만 바지 3벌을 다 채우면 두께감이 꽤 묵직해져서 옷걸이 행거가 튼튼해야 할 것 같아요. 얇은 여름용 바지 위주로 걸어두면 딱 좋습니다.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_68.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'pants_lover',
          rating: 5,
          content: '출근용 정장 바지랑 슬랙스가 많아서 구매했는데 대만족 중입니다ㅋㅋ 바지 주름 안 생기게 이쁘게 잘 보관할 수 있어서 다림질 횟수가 줄었어요. 가성비 진짜 훌륭하고 방 인테리어용 옷방 정리템으로 적극 추천합니다.',
          date: '2026-08-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_69.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm04',
          rating: 4,
          content: '배송 빠르게 잘 받았고 마감 처리도 훌륭합니다. 바지 말고도 가을에 자주 매는 스카프나 넥타이 여러 개 겹쳐서 걸어두는 용도로도 아주 잘 쓰고 있어요. 다이소 3단 옷걸이 중에 퀄리티가 제일 괜찮은 편이네요.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_70.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'blue_sky88',
          rating: 5,
          content: '옷걸이 하나 가격에 바지 3개를 깔끔하게 거치할 수 있으니 안 살 이유가 없죠ㅋㅋ 논슬립 패드가 아주 제대로 제 역할을 합니다. 옷장 미니멀라이프 하기에 이만한 효자 아이템이 없네요. 조만간 몇 개 더 주문할 생각입니다.',
          date: '2026-05-24',
        },
      ]
    },
    {
      id: 4,
      category: ['single', 'clean'],
      image: process.env.PUBLIC_URL + '/images/clean_02.jpg', 
      title: '손잡이 포인트 롤크리너',
      price: 2000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-02-06',
      sales: 2010,
      inventory: 201, 
      likes: 642,
      shares: 34,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_34.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_34.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_35.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_19.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'clean_puppy',
          rating: 5,
          content: '반려견 키우는 집이라 돌돌이는 패시브인데 손잡이 컬러가 너무 귀엽게 잘 나왔어요! 접착력도 짱짱해서 이불에 붙은 강아지 털들이나 머리카락이 싹 쓸려 나갑니다. 사선 컷팅이라 다 쓰고 깔끔하게 뜯어내기도 편하네요.',
          date: '2026-06-20',
        },
        {
          reviewId: 2,
          userId: 'min_g0812',
          rating: 4,
          content: '거실에 두고 먼지 보일 때마다 슥슥 밀기 좋습니다. 세워둘 수 있는 케이스나 거치대 형태라 보관하기 편리하고 인테리어도 해치지 않아서 맘에 들어요. 리필 교체하는 법도 간단해서 가성비 좋게 막 쓰기 훌륭합니다.',
          date: '2026-09-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_62.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'single_room95',
          rating: 3,
          content: '손잡이 포인트 컬러가 이뻐서 샀는데 접착력이 너무 강해서 그런지 얇은 이불 위에서 굴릴 땐 이불이 자꾸 돌돌이에 말려 올라가요ㅋㅋ 옷이나 바닥 청소할 땐 딱 좋은데 침구류 하실 땐 힘 조절을 좀 하셔야 할 것 같습니다.',
          date: '2026-04-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_63.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'dust_killer',
          rating: 5,
          content: '외출하기 전에 코트나 슬랙스에 묻은 먼지 떼어내는 용도로 현관에 두고 쓰는데 완전 요물입니다. 그립감도 손에 착 감겨서 편하고, 가성비가 원체 좋으니까 부담 없이 한 장씩 팍팍 뜯어 쓰고 있어요. 무조건 사세요!',
          date: '2026-08-11',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_64.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_65.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm04',
          rating: 4,
          content: '배송 아주 빠르고 색상도 화면이랑 똑같이 산뜻하니 예쁩니다. 테이프 자르는 선이 사선으로 되어 있어서 한 바퀴 돌리고 나면 버벅거리지 않고 한 번에 스르륵 뜯겨서 너무 쾌적해요. 다 쓰면 리필도 구매할 예정입니다.',
          date: '2026-07-29',
        },
      ]
    },
    {
      id: 5,
      category: ['single', 'kitchen'],
      image: process.env.PUBLIC_URL + '/images/kitchen_07.jpg', 
      title: '뽑아쓰는 키친타월 2겹 150매입',
      price: 1000,
      tags: ['택배', '픽업'],
      date: '2026-03-10',
      sales: 2169,
      inventory: 110,
      likes: 874,
      shares: 17,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_32.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_32.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_33.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_18.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'kitchen_clean0',
          rating: 5,
          content: '롤형 키친타월은 요리하다가 한 손으로 뜯기 뜯기 찌저지고 불편했는데, 이건 곽티슈처럼 한 장씩 쏙쏙 뽑아 쓸 수 있어서 진짜 신세계예요! 2겹이라 도톰하고 기름기나 물기도 싹 흡수해서 프라이팬 닦을 때 최고입니다.',
          date: '2026-06-18',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_60.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_seok91',
          rating: 4,
          content: '소모품이라 가성비 보고 주문했습니다. 가스레인지 주변에 두고 쓰는데 오염이나 먼지 탈 걱정 없이 위생적으로 보관할 수 있어서 맘에 드네요. 엄청 두꺼운 편은 아니지만 데일리로 고기 기름 닦고 할 때 아낌없이 쓰기 좋아요.',
          date: '2026-09-02',
        },
        {
          reviewId: 3,
          userId: 'single_cook8',
          rating: 3,
          content: '뽑아 쓰는 방식 자체는 너무 편하고 깔끔해요. 다만 150매입이라 생각보다 금방 쓰는 느낌이 있어서 여러 개 묶음으로 쟁여두고 써야 할 것 같습니다. 종이질은 질기지 않고 적당히 무난무난하게 쓸만합니다.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_61.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'pure_cooking',
          rating: 5,
          content: '다이소 주방 추천템 중 최고인 것 같아요ㅋㅋ 튀김 요리하고 기름 받침용으로 깔아두기 딱 좋습니다. 한 장씩 밀리지 않고 부드럽게 잘 뽑혀서 요리 중간중간 손 닦는 용도로도 아주 유용하게 잘 쓰고 있습니다.',
          date: '2026-08-23',
        },
        {
          reviewId: 5,
          userId: 'park_mom04',
          rating: 4,
          content: '100% 천연펄프라 아이들 간식 내어줄 때 밑에 깔아주기도 안심이 됩니다. 무형광이라 신뢰가 가네요. 가성비도 훌륭하고 곽 디자인도 군더더기 없이 깔끔해서 주방 어디에 툭 올려두어도 지저분해 보이지 않아서 좋습니다.',
          date: '2026-07-09',
        },
      ]
    },
    {
      id: 6,
      category: ['single', 'kitchen'],
      image: process.env.PUBLIC_URL + '/images/kitchen_01.jpg', 
      title: '[개당 500원] 옥수수 망사 수세미 2개입',
      price: 1000,
      tags: ['택배'],
      date: '2026-10-18',
      sales: 208,
      inventory: 172,
      likes: 1170,
      shares: 20,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_30.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_30.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_31.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_17.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'corn_clean0',
          rating: 5,
          content: '개당 500원 꼴이라니 가성비 진짜 미쳤네요ㅋㅋ 친환경 옥수수 성분이라 미세플라스틱 걱정 없이 안심하고 쓰고 있어요. 망사 형태라 거품도 풍성하게 잘 나고 그릇에 스크래치 안 나서 좋습니다.',
          date: '2026-06-15',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_56.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'gildong_04',
          rating: 4,
          content: '망사 수세미라 설거지 끝나고 슥 헹궈서 걸어두면 물기가 엄청 빨리 말라요! 위생적이라 아주 마음에 듭니다. 다만 기름때가 많이 묻은 팬을 닦을 때는 망사 틈새로 조금 끼는 경향이 있어서 애벌설거지 후에 쓰고 있어요.',
          date: '2026-09-02',
        },
        {
          reviewId: 3,
          userId: 'park_mom91',
          rating: 3,
          content: '2개입에 이 가격이면 엄청 저렴하긴 해요. 옥수수 소재라 순해서 아이들 식기 닦기 좋습니다. 다만 기존에 쓰던 철수세미나 아크릴 수세미보다는 제형이 부드러워서 찌든 때나 눌어붙은 걸 팍팍 닦아내기엔 고정력이 살짝 약해요.',
          date: '2026-04-11',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_57.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'eco_kitchen',
          rating: 5,
          content: '인스타에서 다이소 꿀템 추천글 보고 반신반의하며 샀는데 대만족입니다. 적은 세제로도 몽글몽글 거품이 엄청 잘 일어나요. 망사 조직이 짱짱해서 쉽게 찢어지거나 구멍 나지 않고 오래 쓸 것 같습니다. 무조건 쟁여두세요.',
          date: '2026-08-20',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_58.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'choi_se022',
          rating: 4,
          content: '자취생이라 주방용품 가성비 따져가며 사는데 이건 가격이 너무 착해서 부담이 없어요. 건조가 워낙 빠르니까 수세미 특유의 퀴퀴한 냄새가 전혀 안 나서 위생적입니다. 부드러운 컵이나 밀폐용기 닦을 때 찰떡이에요.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_59.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'blue_sky99',
          rating: 5,
          content: '그립감도 부드럽고 식기 손상 없이 깨끗하게 잘 닦여서 너무 편해요. 요즘 환경 생각해서 친환경 수세미 많이 찾으시는데 1000원에 2개나 들어있으니 안 살 이유가 없네요ㅋㅋ 다 쓰면 주기적으로 계속 재구매할 예정입니다.',
          date: '2026-05-24',
        },
      ]
    },
    {
      id: 7,
      category: ['single', 'clean'],
      image: process.env.PUBLIC_URL + '/images/clean_04.jpg', 
      title: '원형 스윙 휴지통 5L',
      price: 2000,
      tags: ['택배', '픽업'],
      date: '2026-06-17',
      sales: 2398,
      inventory: 52,
      likes: 7425,
      shares: 201,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_28.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_28.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_29.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_16.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'swing_bin01',
          rating: 5,
          content: '화장대 옆에 두고 쓸 미니 휴지통 찾다가 샀는데 크기가 아주 딱이에요! 뚜껑이 부드럽게 잘 회전해서 화장솜이나 면봉 버릴 때 너무 편합니다. 디자인도 동글동글 깔끔해서 방 인테리어랑 잘 어울려요.',
          date: '2026-06-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_53.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'kim_sy95',
          rating: 4,
          content: '화장실용으로 구매했는데 5L라 공간 많이 안 차지하고 쏙 들어가네요. 플라스틱 재질이라 물때 끼어도 그냥 샤워기로 슥 씻어내면 돼서 관리가 편합니다. 뚜껑이 내부를 가려주니까 보기에도 훨씬 위생적이에요.',
          date: '2026-09-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_54.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'single_room22',
          rating: 3,
          content: '디자인은 깔끔하고 이쁜데 스윙형 뚜껑 특성상 쓰레기가 반 이상 차면 내부 쓰레기에 걸려서 뚜껑이 잘 안 돌아가네요ㅋㅋ 5L라 금방 차는 편이니 자주 비워줘야 하는 번거로움은 있지만 가볍게 쓰기엔 나쁘지 않습니다.',
          date: '2026-04-18',
        },
        {
          reviewId: 4,
          userId: 'desk_clean',
          rating: 5,
          content: '공부방 책상 밑에 두고 쓰려고 주문했습니다. 가성비 진짜 최고네요. 뚜껑 결합도 단단하게 잘 되고 한 손으로 슥 밀어서 버리기 아주 수월합니다. 다이소 최고 효자템 중 하나인 것 같아요.',
          date: '2026-08-22',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_55.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'yoon_sm90',
          rating: 4,
          content: '가볍고 튼튼한 원형 휴지통입니다. 종량제 봉투 작은 거 끼워서 쓰니까 사이즈가 얼추 맞아서 편하네요. 스윙 뚜껑이 완전히 분리되는 구조라 내부에 비닐 고정하기도 쉽고 설거지하기도 좋습니다.',
          date: '2026-07-09',
        },
        {
          reviewId: 6,
          userId: 'happy_house7',
          rating: 5,
          content: '지저분하게 쓰레기 보이는 게 싫어서 스윙형으로 샀는데 대만족입니다. 5L 용량이라 아이들 방에 하나씩 놔주기 딱 좋네요. 냄새도 어느 정도 잡아주는 것 같고 유행 안 타는 무난한 디자인이라 오래 쓸 것 같아요.',
          date: '2026-05-24',
        },
      ]
    },
    {
      id: 8,
      category: ['single', 'clean'],
      image: process.env.PUBLIC_URL + '/images/clean_05.jpg', 
      title: '뽀송뽀송 제습제 4p',
      price: 3000,
      tags: ['택배'],
      date: '2026-04-20',
      sales: 914,
      inventory: 47,
      likes: 7425,
      shares: 201,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_26.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_26.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_27.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_15.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'wet_killer00',
          rating: 5,
          content: '여름철 장마 기간 필수품이에요! 옷장이랑 신발장에 하나씩 넣어뒀는데 며칠 지나니까 물이 아래쪽에 차는 게 눈으로 바로 보여서 신기해요ㅋㅋ 습기랑 굽굽한 냄새를 싹 잡아줘서 옷들이 아주 뽀송뽀송합니다.',
          date: '2026-06-28',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_46.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'kim_sh93',
          rating: 4,
          content: '4개 세트에 이 가격이면 가성비 진짜 미쳤네요. 비싼 브랜드 제품이랑 비교해도 제습 성능 차이를 전혀 못 느끼겠습니다. 다만 위에 붙이는 은박지 뗄 때 흰색 흡습지가 같이 찢어지지 않게 조심해서 뜯어야 해요.',
          date: '2026-09-02',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_47.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'single_life88',
          rating: 3,
          content: '제습 효과는 확실히 있는 것 같은데 생각보다 염화칼슘 양이 좀 적은 건지 물이 금방 차오르는 느낌이에요. 옷장에 습기가 많아서 그런 걸 수도 있겠지만, 자주 교체해 줘야 할 것 같아 대량으로 쟁여두고 써야겠어요.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_48.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'clean_mom04',
          rating: 5,
          content: '방마다 옷걸이형이랑 이거랑 같이 두고 쓰는데 서랍장이나 가구 구석진 곳에 쏙 들어가서 공간 활용하기 너무 좋습니다. 다 차고 나면 물만 버리고 플라스틱은 분리수거하면 되니까 뒤처리도 깔끔하고 편하네요.',
          date: '2026-08-20',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_49.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jw91',
          rating: 4,
          content: '겨울철 결로 때문에 옷방이 항상 눅눅해서 주문해 봤는데 아주 만족스럽습니다. 물 차는 속도를 보니 제 기능 톡톡히 하고 있네요. 플라스틱 통도 단단해서 넘어지거나 물이 샐 염려가 없어 안심하고 사용 중입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_50.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'choi_se02',
          rating: 5,
          content: '신발장에 냄새가 좀 났었는데 제습제 넣어두니까 습기랑 같이 불쾌한 냄새도 많이 사라졌어요! 4개입이라 부엌 싱크대 밑이랑 다용도실까지 집안 곳곳에 알차게 배치했습니다. 가격 부담이 없어서 정기적으로 사려 하네요.',
          date: '2026-05-24',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_51.jpg',
          ],
        },
        {
          reviewId: 7,
          userId: 'blue_sky77',
          rating: 4,
          content: '배송 아주 빠르고 파손된 곳 없이 안전하게 잘 도착했습니다. 슬림한 디자인이라 서랍 한쪽에 넣어두기 딱 좋아요. 습기 때문에 옷에 곰팡이 필까 봐 걱정이었는데 이거 덕분에 올여름은 걱정 없이 보낼 수 있겠습니다.',
          date: '2026-03-18',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_52.jpg',
          ],
        },
      ]
    },
    {
      id: 9,
      category: ['single', 'beauty'],
      image: process.env.PUBLIC_URL + '/images/beauty_25.jpg', 
      title: '헬로 데일리 미용티슈 280매',
      price: 1000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-03-05',
      sales: 2332,
      inventory: 194,
      likes: 9999,
      shares: 498,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_24.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_24.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_25.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_14.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'tissue_love01',
          rating: 5,
          content: '280매라 그런지 곽이 묵직하고 양이 정말 많아서 오래 쓸 수 있을 것 같아요! 먼지도 거의 안 날리고 부드러워서 화장 지우거나 아침에 세수하고 얼굴 물기 닦을 때 피부 자극 없이 쓰기 딱 좋습니다.',
          date: '2026-06-18',
        },
        {
          reviewId: 2,
          userId: 'min_seong94',
          rating: 4,
          content: '매일 쓰는 소모품이라 가성비 좋은 걸로 찾다가 주문했습니다. 한 장씩 톡톡 잘 뽑히고 뭉텅이로 나오지 않아서 마음에 드네요. 티슈 두께가 아주 두꺼운 편은 아니지만 데일리로 가볍게 막 쓰기에 이만한 게 없습니다.',
          date: '2026-09-02',
        },
        {
          reviewId: 3,
          userId: 'clean_house7',
          rating: 3,
          content: '양이 많아서 경제적이긴 한데 비염 때문에 코 자주 풀기에는 살짝 빳빳한 감이 아주 조금 있어요. 그래도 먼지가 사방으로 날리지 않는 점은 괜찮습니다. 식탁 위에 두고 부담 없이 슥슥 쓰기 좋은 무난한 티슈예요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'daily_sky88',
          rating: 5,
          content: '화장대 위에 올려두고 메이크업할 때마다 쓰고 있는데 100% 천연펄프라 그런지 순하고 좋네요. 곽 디자인도 깔끔해서 인테리어 해치지 않아요. 다이소에서 파는 티슈 중에 가성비랑 품질 밸런스가 제일 좋은 것 같습니다.',
          date: '2026-08-23',
        },
        {
          reviewId: 5,
          userId: 'park_mom0',
          rating: 4,
          content: '아이가 있어서 집안 곳곳에 티슈를 두고 쓰는데 280매 대용량이라 자주 안 갈아줘도 돼서 너무 편해요ㅋㅋ 형광증백제 없다고 해서 아이들 손 닦아줄 때도 안심하고 씁니다. 다 쓰면 무조건 재구매할 예정입니다.',
          date: '2026-07-09',
        },
      ]
    },
    {
      id: 10,
      category: ['single', 'kitchen'],
      image: process.env.PUBLIC_URL + '/images/kitchen_02.jpg', 
      title: '[스텐 304] 네오플램 스텐 원형 밀폐 찬통 340 ml',
      price: 2000,
      tags: ['택배'],
      date: '2026-04-13',
      sales: 1818,
      inventory: 49,
      likes: 1472,
      shares: 12,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_22.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_22.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_23.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_13.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'posco_fan',
          rating: 5,
          content: '스텐 304 재질이라 그런지 확실히 반짝반짝하고 튼튼해 보여요! 플라스틱 찬통 쓰다가 김치 색 배고 냄새나서 다 바꿨는데 속이 다 시원합니다. 340ml라 남은 밑반찬 소량 보관하기에 크기가 아주 딱 좋습니다.',
          date: '2026-06-15',
        },
        {
          reviewId: 2,
          userId: 'park_jm91',
          rating: 4,
          content: '밀폐력이 좋아서 국물 있는 반찬을 넣어도 전혀 새지 않네요. 네오플램 제품답게 디자인도 깔끔하고 가볍습니다. 다만 스텐이라 전자레인지 사용은 안 되니 그 부분만 주의해서 쓰면 오랫동안 위생적으로 잘 쓸 것 같아요.',
          date: '2026-09-02',
        },
        {
          reviewId: 3,
          userId: 'single_cook0',
          rating: 3,
          content: '반찬통 자체는 냄새도 안 배고 좋은데 생각했던 것보다는 크기가 좀 더 아담한 느낌이에요. 1인 가구 한 끼 분량 반찬 담기에 적당합니다. 뚜껑 날개 부분이 약간 빳빳해서 처음엔 여닫을 때 힘이 조금 들어가네요.',
          date: '2026-04-11',
        },
        {
          reviewId: 4,
          userId: 'clean_kitchen',
          rating: 5,
          content: '회사에 다이어트 도시락으로 샐러드나 과일 싸 들고 다닐 용도로 샀는데 가볍고 완전 밀폐돼서 가방 안에서 안 쏟아져요! 냉장고에 넣어두면 스텐이라 그런지 확실히 신선도가 오래 유지되는 느낌입니다. 대만족이에요.',
          date: '2026-08-20',
        },
        {
          reviewId: 5,
          userId: 'yoon_ha88',
          rating: 4,
          content: '스테인리스 찬통치고 가격이 합리적이라 여러 개 구매했습니다. 연마제 제거 작업 먼저 했는데 연마제도 거의 묻어나지 않아서 세척하기 수월했어요. 위생적이고 튼튼해서 냉장고 반찬통 세트로 싹 맞추기 좋습니다.',
          date: '2026-07-05',
        },
        {
          reviewId: 6,
          userId: 'choi_se042',
          rating: 5,
          content: '고무 패킹도 짱짱하고 원형이라 설거지할 때 구석진 곳 없이 깨끗하게 닦여서 너무 편해요. 카레나 고추장 양념 가득한 반찬 며칠 동안 담아놨는데도 물들지 않아서 감동입니다. 304 스텐이라 안심하고 씁니다.',
          date: '2026-05-24',
        },
        {
          reviewId: 7,
          userId: 'blue_sky99',
          rating: 4,
          content: '아이 유아식 반찬 덜어놓는 용도로 쓰려고 구매했어요. 사이즈가 미니멀해서 냉장고 공간도 많이 안 차지하고 쌓아두기 좋습니다. 떨어뜨려도 깨질 염려가 없어서 서툴러도 안심하고 식탁에 올려둘 수 있네요.',
          date: '2026-03-18',
        },
        {
          reviewId: 8,
          userId: 'happy_mom77',
          rating: 5,
          content: '네오플램 스텐 찬통 소문 듣고 샀는데 아주 물건이네요ㅋㅋ 가볍고 견고한 데다 밀폐력이 엄청 우수해요. 마늘 장아찌 담아놨는데 냉장고에 냄새 전혀 안 퍼집니다. 조금 더 큰 용량도 추가로 주문하러 갑니다!',
          date: '2026-09-12',
        },
      ]
    },
    {
      id: 11,
      category: ['single', 'kitchen'],
      image: process.env.PUBLIC_URL + '/images/kitchen_03.jpg', 
      title: '전자레인지용 도기 계란 찜기 620ml',
      price: 3000,
      tags: ['택배'],
      date: '2026-09-27',
      sales: 1002,
      inventory: 183,
      likes: 1189,
      shares: 25,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_20.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_20.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_21.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_12.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'morning_egg',
          rating: 5,
          content: '바쁜 아침에 계란 3개 풀고 물 섞어서 전자레인지에 3~4분만 돌리면 뚝딱 완성되니까 너무 편해요! 플라스틱 용기는 환경호르몬 때문에 찜찜했는데 도기 재질이라 안심하고 씁니다. 620ml라 용량도 넉넉하고 아주 만족스럽네요.',
          date: '2026-06-12',
        },
        {
          reviewId: 2,
          userId: 'jsh_942',
          rating: 4,
          content: '자취 필수품이네요ㅋㅋ 폭탄 계란찜처럼 부풀어 오르는 건 조절이 좀 필요하지만 대충 돌려도 촉촉하고 부드럽게 잘 됩니다. 도기라서 열이 오래 가니까 다 먹을 때까지 따뜻해요. 다만 꺼낼 때 손잡이가 뜨거우니 주방장갑 꼭 끼세요.',
          date: '2026-09-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_44.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'mom_cook77',
          rating: 3,
          content: '디자인도 귀엽고 크기도 적당해서 계란찜용으로 딱 좋습니다. 다만 전자레인지 출력 조절을 잘못하면 국물이 넘쳐서 내부 청소해야 하니 용량 채울 때 조심해야 할 것 같아요. 시간 조절만 잘 맞추면 유용하게 쓸 수 있는 제품입니다.',
          date: '2026-04-18',
        },
        {
          reviewId: 4,
          userId: 'blue_sky01',
          rating: 5,
          content: '계란찜뿐만 아니라 혼자 만두 쪄먹거나 간단한 국 데우는 용도로도 아주 잘 쓰고 있어요! 설거지할 때 계란 누른 것도 물에 잠시 불려두면 슥슥 잘 닦여서 세척이 편합니다. 가성비 최고의 주방 꿀템으로 인정합니다.',
          date: '2026-08-22',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_45.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'yoon_sm88',
          rating: 4,
          content: '도기 찜기치고 가격이 너무 착해서 바로 구매했습니다. 뚜껑에 김 빠지는 구멍이 있어서 넘침이 덜한 것 같아요. 묵직하고 단단한 느낌이라 쉽게 깨질 것 같지 않아 오래 쓸 수 있을 것 같습니다. 주방 분위기랑도 잘 어울려요.',
          date: '2026-07-09',
        },
      ]
    },
    {
      id: 12,
      category: ['single', 'organize'],
      image: process.env.PUBLIC_URL + '/images/organize_03.jpg', 
      title: '어깨 뿔 방지 스틸 옷걸이 3개입',
      price: 2000,
      tags: ['택배', '픽업'],
      date: '2026-10-12',
      sales: 1939,
      inventory: 176,
      likes: 1796,
      shares: 83,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_17.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_17.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_18.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_19.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_11.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'knit_love77',
          rating: 5,
          content: '니트나 가디건 걸어두면 맨날 어깨 부분 툭 튀어나와서 스트레스였는데 이거 쓰고 신세계를 맛보고 있습니다ㅋㅋ 곡선이 완만해서 옷 형태가 그대로 유지돼요. 스틸이라 무거운 겨울 코트 걸어도 휘지 않고 튼튼합니다.',
          date: '2026-08-14',
        },
        {
          reviewId: 2,
          userId: 'chul_soo02',
          rating: 4,
          content: '어깨 라인이 둥글게 잘 빠져서 얇은 반팔 티셔츠 걸어두기 딱 좋습니다. 옷걸이 표면에 미끄럼 방지 처리가 되어 있어서 목이 넓은 옷도 안 흘러내리고 잘 고정되어 있네요. 3개입이라 가성비도 아주 훌륭합니다.',
          date: '2026-05-22',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_40.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'miso_992',
          rating: 3,
          content: '어깨 뿔 방지 효과는 확실히 좋은데 스틸 재질이라 그런지 일반 플라스틱 옷걸이보다는 무게감이 좀 묵직한 편이에요. 그리고 옷걸이 자체가 부피를 약간 차지하는 편이라 옷장이 좁으면 많이 걸기는 힘들 것 같아요.',
          date: '2026-03-11',
        },
        {
          reviewId: 4,
          userId: 'dress_room88',
          rating: 5,
          content: '인스타에서 추천받고 샀는데 왜 이제 샀나 싶어요. 다이소 가성비 꿀템 중 하나입니다. 목 늘어남이나 핏 망가짐 없이 이쁘게 보관할 수 있어서 대만족이에요. 옷장 옷걸이 전부 이걸로 바꾸려고 대량 구매 예정입니다.',
          date: '2026-09-02',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_41.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'wjs_dh12',
          rating: 4,
          content: '와이셔츠나 정장 상의 걸어두는 용도로 사용 중인데 핏이 딱 살아서 아주 마음에 듭니다. 논슬립 패드 덕분에 옷이 밀리지 않는 건 좋은데, 옷을 급하게 확 뺄 때는 오히려 잘 안 빠져서 조심히 빼야 하네요ㅋㅋ 제품은 좋습니다.',
          date: '2026-07-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_42.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'single_life0',
          rating: 5,
          content: '철제 옷걸이라 확실히 싸구려 느낌 안 나고 내구성이 좋아 보여요. 3개 세트에 이 가격이면 안 살 이유가 없네요. 티셔츠 어깨 뿔 생겨서 매번 다려 입기 귀찮으셨던 분들은 무조건 이거 사서 걸어두세요. 강추합니다!',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_43.jpg',
          ],
        },
      ]
    },
    {
      id: 13,
      category: ['single', 'organize'],
      image: process.env.PUBLIC_URL + '/images/organize_04.jpg', 
      title: '밸브형 압축팩 중형 60X90cm',
      price: 2000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-01-28',
      sales: 1239,
      inventory: 135,
      likes: 416,
      shares: 30,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_15.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_15.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_16.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_10.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'pack_master01',
          rating: 5,
          content: '철 지난 겨울 이불이랑 패딩 정리하려고 샀는데 성능 확실하네요! 청소기로 흡입하니까 순식간에 납작해져서 옷장 공간이 엄청 널널해졌습니다. 중형 사이즈라 이불 한 장 접어서 넣기 딱 좋은 크기예요.',
          date: '2026-05-18',
        },
        {
          reviewId: 2,
          userId: 'yoon_sm92',
          rating: 4,
          content: '밸브형이라 확실히 공기 빼기가 편하고 뒤로 다시 들어가지 않아서 다루기 쉽네요. 다만 비닐 재질이 아주 두꺼운 편은 아니라서 패딩 지퍼 같은 날카로운 부분에 안 긁히게 조심해서 넣어야 할 것 같아요.',
          date: '2026-09-02',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_36.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'single_room99',
          rating: 3,
          content: '처음 압축했을 때는 부피가 확 줄어서 신세계였는데, 일주일 지나니까 공기가 살짝 미세하게 들어갔는지 조금 부풀어 올랐네요. 지퍼 클립으로 입구를 다시 꽉 잠그고 청소기로 돌리니까 괜찮아졌는데 좀 더 지켜봐야겠어요.',
          date: '2026-04-21',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_37.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'happy_house0',
          rating: 5,
          content: '가성비 대박 압축팩입니다ㅋㅋ 이 가격에 60x90cm 대용량 수준의 중형팩을 살 수 있다니 다이소 최고네요. 밀폐 잘 되고 공기 빠지는 밸브 캡도 단단하게 고정돼서 대만족합니다. 옷장 정리용으로 몇 개 더 살 거예요.',
          date: '2026-08-11',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_38.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'kim_hj042',
          rating: 4,
          content: '여행 갈 때 캐리어 부피 줄이려고 구매해 봤는데 두꺼운 니트류들 다 때려 넣고 압축하니까 부피가 반으로 줄어서 짐 싸기 너무 편했습니다. 밸브 부분 고무 패킹도 튼튼하고 아주 유용하게 잘 썼습니다.',
          date: '2026-07-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_39.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'clean_mom88',
          rating: 5,
          content: '아이들 안 입는 작아진 옷들 보관해 두려고 샀는데 대만족이에요. 습기나 먼지 탈 걱정 없이 깔끔하게 밀봉되니까 마음이 편하네요. 투명해서 안에 무슨 옷이 들어있는지 한눈에 보이는 것도 큰 장점입니다.',
          date: '2026-06-14',
        },
        {
          reviewId: 7,
          userId: 'joo_hyun95',
          rating: 4,
          content: '동네 매장에 중형 사이즈 품절이라 여기서 주문했는데 배송도 빠르고 제품도 이상 없이 잘 왔습니다. 청소기 노즐이랑 딱 맞물려서 공기 빼기 수월하네요. 옷장 미니멀라이프 하기에 필수품입니다.',
          date: '2026-03-30',
        },
      ]
    },
    {
      id: 14,
      category: ['single', 'organize'],
      image: process.env.PUBLIC_URL + '/images/organize_05.jpg', 
      title: '테이프식 스텐 욕실걸이',
      price: 1000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-03-23',
      sales: 126,
      inventory: 22,
      likes: 3480,
      shares: 96,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_13.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_13.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_14.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_09.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'min_ji92',
          rating: 5,
          content: '못 안 박고 테이프로만 붙이는데도 엄청 튼튼해요! 샤워볼이랑 청소 솔 걸어뒀는데 떨어질 기미가 안 보입니다. 스텐이라 욕실 물기에도 녹슬 걱정 없어서 아주 깔끔하네요.',
          date: '2026-05-14',
        },
        {
          reviewId: 2,
          userId: 'gildong_k',
          rating: 4,
          content: '디자인이 심플하고 유광 스텐이라 고급스러워 보여요. 타일에 붙이기 전에 먼지 싹 닦고 붙였더니 고정 잘 되어 있습니다. 다만 걸이 부분이 생각보다 조금 얕아서 두꺼운 수건은 가끔 미끄러지네요.',
          date: '2026-08-02',
        },
        {
          reviewId: 3,
          userId: 'happy_day00',
          rating: 3,
          content: '제품 자체는 깔끔하고 이쁜데 부착할 때 수평 맞추기가 조금 까다로웠어요. 테이프 접착력이 너무 강해서 한 번 잘못 붙이면 다시 떼기 힘드니 신중하게 붙이셔야 합니다. 성능은 무난해요.',
          date: '2026-03-21',
        },
        {
          reviewId: 4,
          userId: 'user_9982',
          rating: 5,
          content: '월세집이라 타일 뚫기 불가능해서 샀는데 진짜 효자템입니다ㅋㅋ 붙이고 나서 하루 뒤에 물건 걸었더니 끄떡없네요. 주방에 조리도구 걸어두는 용으로도 하나 더 살까 고민 중입니다.',
          date: '2026-09-11',
        },
        {
          reviewId: 5,
          userId: 'momo_is_love',
          rating: 4,
          content: '가성비 정말 훌륭한 스텐 걸이입니다. 물때 끼어도 대충 슥 닦아내면 새것처럼 깨끗해져서 관리가 편해요. 가격이 저렴해서 여러 개 쟁여두고 욕실 곳곳에 붙여두기 좋습니다.',
          date: '2026-07-19',
        },
        {
          reviewId: 6,
          userId: 'choi_082',
          rating: 5,
          content: '샤워기 옆에 부착해서 샤워타월 걸어두는 용도로 쓰는데 물이 맨날 닿아도 굳건하게 잘 붙어있어요. 스텐 재질도 싸구려 느낌 안 나고 단단해서 마음에 듭니다. 강력 추천해요!',
          date: '2026-06-25',
        },
        {
          reviewId: 7,
          userId: 'blue_sky33',
          rating: 3,
          content: '욕실 문 뒤에 붙여놨는데 부착력은 좋습니다. 다만 마감 처리가 아주 매끄럽지는 않아서 손으로 만질 때 살짝 거친 느낌이 있네요. 그래도 가격 생각하면 스텐이라 쓸만합니다.',
          date: '2026-04-08',
        },
      ]
    },
    {
      id: 15,
      category: ['single', 'kitchen'],
      image: process.env.PUBLIC_URL + '/images/kitchen_04.jpg', 
      title: '실리콘 스푼 대형',
      price: 1000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-09-11',
      sales: 753,
      inventory: 235,
      likes: 9999,
      shares: 237,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_11.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_11.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_12.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_08.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'sj_lee041',
          rating: 4,
          content: '대형 사이즈라 볶음요리할 때 한 번에 푹푹 퍼져서 아주 편해요. 실리콘 재질이라 프라이팬 코팅 벗겨질 걱정 없어서 맘에 듭니다. 다만 생각보다 대가 조금 유연한 편이라 단단한 재료 볶을 땐 힘이 좀 들어가네요.',
          date: '2026-06-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_31.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_32.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'hany_927',
          rating: 5,
          content: '주방 요리스푼 필요해서 샀는데 가성비 최고입니다! 실리콘이라 열탕 소독도 가능해서 위생적이고, 카레 같은 양념 강한 요리해도 착색 안 되고 잘 닦여요. 색상도 깔끔해서 대만족합니다.',
          date: '2026-09-02',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_33.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'kwon_sm00',
          rating: 3,
          content: '크기는 넉넉해서 좋은데 무게감이 약간 있네요. 손잡이 끝부분 마감이 쪼금 아쉽긴 한데 가격이 워낙 저렴하니까 그냥 막 쓰기 좋습니다. 가볍게 국 덜거나 볶음밥 만들 때 유용해요.',
          date: '2026-04-21',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_34.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'pure_sky88',
          rating: 5,
          content: '볶음 요리랑 국물 서빙 둘 다 가능한 멀티 스푼이네요! 냄비 바닥 긁히는 소리 안 나서 너무 좋고 음식물도 깔끔하게 싹 쓸어 담아집니다. 자취하는 분들 주방 필수템으로 무조건 추천합니다.',
          date: '2026-08-11',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_35.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'chul_su99',
          rating: 4,
          content: '실리콘 스푼치고 가격이 너무 착해서 반신반의하며 샀는데 튼튼하고 좋습니다. 대형이라 확실히 일반 숟가락보다 훨씬 크고 깊어요. 설거지하기도 편하고 건조도 빨리 돼서 잘 쓰고 있습니다.',
          date: '2026-07-19',
        },
      ]
    },
    {
      id: 16,
      category: ['single', 'interior'],
      image: process.env.PUBLIC_URL + '/images/interior_01.jpg', 
      title: '무타공 접착식 도어 스토퍼',
      price: 2000,
      tags: ['택배', '오늘'],
      date: '2026-10-10',
      sales: 1831,
      inventory: 274,
      likes: 4229,
      shares: 259,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_09.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_09.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailMain_10.jpg',
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_07.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'raii_051',
          rating: 5,
          content: '이 가격에 국산 도어스토퍼라니~~ 접착력 좋고 특히 상자를 이용해서 맞는 높이에 설치할 수 있게 한게 정말 좋네요. 기존에 있던게 고정이 잘 안되서 새로한건데 완전 만족합니다!',
          date: '2026-05-28',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_24.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_25.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_26.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'monng0431',
          rating: 4,
          content: '현관 중문 고정용으로 말굽이 닳아서 교체했습니다. 디자인은 마음에 드는데 고정력이 좀 약해서 문이 움직여져서 바닥에 미끄럼방지 패드 붙히고 그래도 안되서 실리콘 패드와 함께 사용중입니다',
          date: '2026-08-13',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_27.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'nayyid05',
          rating: 5,
          content: '무타공으로 쉽게 도어 스토퍼 부착해서 너무 좋아요! 접착력도 좋고 디자인도 깔끔해서 맘에 듭니다!',
          date: '2026-09-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_28.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'areyou002',
          rating: 4,
          content: '가벼운 옷 장 문이 조금 열어두면 닫혀서 고정시키려고 샀습니다 높이를 잘못붙이건지 문을 조금 열고 고정시키면 점점 닫힙니다 많이 열어놓으면 잘 고정됩니다',
          date: '2026-09-16',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_29.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'quddti042',
          rating: 4,
          content: '만족하고 사용중 그전에 사용하던건 방바닥에 굴러댕겼는데 이건 문닫으면 접으면되니까',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_30.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'c450679',
          rating: 5,
          content: '도어스토퍼로 괴어 놨다가 로봇청소기 사용할 때면 치워주느라 귀찮았는데 각 방문마다 이거 부착했더니 너무 편하고 좋아요! 접착은 혹시 나중을 위해 가지고 있던 몬스터겔로만 바꿔주었구요. 다이소 효자템 중에 하나인 것 같아요. 방문과의 조화를 고려하여 베이지 컬러나 회색 등으로 나오면 좋을 것 같습니다.',
          date: '2026-07-08',
        }
      ]
    },
    {
      id: 17,
      category: ['single', 'kitchen'],
      image: process.env.PUBLIC_URL + '/images/kitchen_05.jpg', 
      title: '해바라기수세미(그린)',
      price: 1000,
      tags: ['택배', '오늘'],
      date: '2026-11-12',
      sales: 1493,
      inventory: 63,
      likes: 9999,
      shares: 396,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_06.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_06.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_07.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_08.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_06.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'min_g95',
          rating: 4,
          content: '해바라기 모양이 너무 귀여워서 주방 분위기가 사네요! 그린 색상도 산뜻하고 거품도 풍성하게 잘 나서 설거지할 때 기분이 좋습니다. 도톰해서 쉽게 찢어지지 않을 것 같아요.',
          date: '2026-04-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_17.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'korea_user88',
          rating: 3,
          content: '수세미 바꿀 때가 되어서 주문했는데 디자인은 예뻐요. 다만 생각보다 힘이 없는 제형이라 기름때가 꽉 찌든 냄비 닦을 때는 조금 겉도는 느낌이 드네요. 일반 유리컵이나 가벼운 식기 닦을 때 쓰고 있습니다.',
          date: '2026-09-18',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_18.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_19.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'ji_huuuu',
          rating: 5,
          content: '가격 대비 크기도 넉넉하고 짱짱해서 오래 쓸 수 있을 것 같아요. 찌든 때도 생각보다 잘 닦이네요. 처음에 쓸 때는 약간 빳빳한가 싶었는데 물 묻혀서 몇 번 쓰다 보니 손에 착 감겨서 설거지하기 편합니다.',
          date: '2026-02-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_20.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'sm_park01',
          rating: 4,
          content: '자취방 주방 용품 사면서 같이 샀는데 너무 귀여워요ㅋㅋ 거품도 잘 나고 기름때도 슥슥 잘 닦입니다. 친구들이 놀러 와서 수세미 어디서 샀냐고 물어보네요. 다 쓰면 재구매 의사 있습니다.',
          date: '2026-07-31',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_21.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'lovely_hyewon',
          rating: 5,
          content: '해바라기 모양 그린 컬러라 싱크대에 올려만 놔도 화사해요. 적은 양의 세제로도 거품이 쫀쫀하고 풍성하게 잘 일어나서 아주 만족스럽습니다. 그릇에 흠집 없이 부드럽게 세척되네요.',
          date: '2026-05-23',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_22.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'tae_yang99',
          rating: 3,
          content: '수세미는 귀여운데 생각보다 두께가 조금 얇은 편이라 그런지 숨이 금방 죽는 느낌이 들어서 아쉬워요. 그래도 물 빠짐이 빨라서 건조가 금방 되니까 위생적으로 자주 교체해가며 쓰기엔 나쁘지 않습니다.',
          date: '2026-08-11',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_23.jpg',
          ],
        }
      ]
    },
    {
      id: 18,
      category: ['single', 'kitchen'],
      image: process.env.PUBLIC_URL + '/images/kitchen_06.jpg', 
      title: '[100만개 판매] 네오플램 TPE 핸들 스테인리스 주방 가위',
      price: 3000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-06-16',
      sales: 9867,
      inventory: 5,
      likes: 9999,
      shares: 396,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_03.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_03.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_04.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_05.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_05.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'kimjh0823',
          rating: 5,
          content: '구매량도 많고 후기도 좋고 튼튼해보이고 색도 괜찮아서 사봤는데 튼튼하고 잘짤려요! 좋아요~',
          date: '2026-09-21',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_10.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'su_min91',
          rating: 5,
          content: '주방 가위 필요한 때에 인기제품이라해서 구입했는데 그립감도 좋고 절삭력도 좋습니다 무게도 적당합니다',
          date: '2026-09-20',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_11.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_12.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'park_mom',
          rating: 4,
          content: '3000원이라는 가격이 믿기지 않을 정도로 튼튼하고 가성비 대박입니다. 김치 썰 때도 부드럽게 잘 잘리네요. 다만 손잡이 구멍이 제 손에는 살짝 큰 감이 있어서 오래 쓰면 약간 피로하긴 한데, 전체적인 성능은 대만족입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_13.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'wjs_1004',
          rating: 5,
          content: '자취 시작하면서 주방 용품 가성비 좋은 걸로 찾다가 구매했어요. 디자인도 깔끔하고 무엇보다 절삭력이 아주 시원시원합니다. 딱딱한 냉동 재료나 두꺼운 고기도 문제없이 잘 가공되네요. 주변 자취하는 친구들에게도 추천해 주려고요.',
          date: '2026-09-02',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_14.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'lee_hy02',
          rating: 3,
          content: '인기가 많고 후기가 좋아서 기대했는데 절삭력 자체는 평범하게 좋습니다. 스테인리스라 위생적이긴 한데, 가위 날 분리형인 줄 알았는데 일체형이더라고요. 세척할 때 틈새까지 바짝 말려야 할 것 같아요. 그래도 가격 생각하면 쓸만합니다.',
          date: '2026-06-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_15.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'user_review9',
          rating: 3,
          content: '가위는 역시 잘 잘리는 게 최고인데 본연의 기능에 아주 충실한 제품입니다. TPE 핸들이라 손가락 아픈 것도 덜하고 튼튼해 보여서 오래 쓸 수 있을 것 같아요. 3천 원의 행복이네요. 주방 가위 고민 중이시면 그냥 이거 사시면 됩니다.',
          date: '2026-07-22',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_16.jpg',
          ],
        }
      ]
    },
    {
      id: 19,
      category: ['beauty'],
      image: process.env.PUBLIC_URL + '/images/beauty_01.jpg', 
      title: '[기미잡티리셋]본셉 비타씨 동결 건조 더블샷 앰플 키트',
      price: 5000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-08-05',
      sales: 5498,
      inventory: 1,
      likes: 9999,
      shares: 3376,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_01.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_01.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_02.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_01.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_02.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_03.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_04.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'kim123',
          rating: 5,
          content: '기미가 생겨서 요즘 피부가 많이 신경 쓰였는데, 꾸준히 관리해보려고 구매했어요. 간편하게 챙길 수 있어 부담 없이 사용하기 좋네요. 꾸준히 바르면서 피부 고민에 좋은 효과가 있었으면 좋겠습니다.',
          date: '2026-09-13',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_01.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_02.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_03.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'skincare_love',
          rating: 5,
          content: '동결건조 앰플이라 그런지 확실히 신선하고 영양감이 가득한 느낌이에요. 비타민 제품인데도 자극이나 따가움 전혀 없이 피부에 쫀쫀하게 잘 흡수됩니다! 일주일 정도 아침저녁으로 꾸준히 발랐더니 칙칙했던 안색이 확실히 맑아진 게 눈에 보여요.',
          date: '2026-09-15',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_04.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'daiso_holic',
          rating: 4,
          content: 'SNS에서 가성비 대박이라고 난리 나서 동네 다이소 재고 조회해 보고 겨우 구해왔습니다ㅋㅋ 5000원에 이 정도 퀄리티면 진짜 훌륭하네요. 약간의 끈적임은 남지만 밤에 듬뿍 바르고 자면 다음 날 화장이 엄청 잘 먹어서 대만족입니다!',
          date: '2026-09-16',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_05.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_06.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'pure_glow',
          rating: 5,
          content: '엄마 기미 잡티 고민 때문에 선물해 드렸는데 너무 좋아하십니다. 키트 형태로 직접 섞어 쓰니까 위생적이고 더 신뢰가 간다고 하시네요. 제형이 무겁지 않고 촉촉해서 나이대 상관없이 데일리로 쓰기 아주 좋습니다. 다 쓰면 또 사다 드리려고요.',
          date: '2026-09-17',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_07.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_08.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'user_review9',
          rating: 3,
          content: '효과는 잡티가 살짝 옅어지는 것 같고 안색도 밝아져서 만족스러운데, 생각보다 용량이 너무 적어서 금방 쓰네요ㅠㅠ 효과를 제대로 보려면 한 번에 여러 개 쟁여두고 계속 이어서 써야 할 것 같아요. 제품 자체는 순하고 좋습니다.',
          date: '2026-09-18',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_09.jpg',
          ],
        }
      ]
    },
    {
      id: 20,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_02.jpg', 
      title: '[퀵 수분충전]VT PDRN 광채 토너 200ml',
      price: 5000,
      tags: ['택배', '오늘'],
      date: '2026-03-14',
      sales: 1540,
      inventory: 1,
      likes: 9999,
      shares: 3355,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_43.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_43.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_44.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_23.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_24.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'glow_skin01',
          rating: 5,
          content: '요즘 핫한 PDRN 성분이라 기대하고 샀는데 진짜 대만족이에요! 세수하고 첫 단계에 바르면 수분이 겉돌지 않고 속까지 꽉 채워지는 느낌입니다. 인위적인 광이 아니라 피부 속에서부터 은은하게 차오르는 광채가 너무 예뻐요.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_76.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0922',
          rating: 4,
          content: '제형이 너무 무겁지 않으면서도 보습력이 오래가서 건조한 환절기에 쓰기 딱 좋습니다. 흡수시키고 나면 끈적이지 않고 쫀쫀하게 마무리돼요. 다만 향이 약간 호불호가 갈릴 수 있을 것 같은데 금방 날아가서 쓸만합니다.',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_77.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '수분 충전은 확실히 빠르게 잘 되는 것 같아요. 레이어링해서 바르면 촉촉함이 오래 유지됩니다. 근데 제 피부가 워낙 초민감성이라 그런지 처음에 바를 때 아주 살짝 따끔한 느낌이 있었어요. 트러블이 나진 않아서 좀 더 써보려고요.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_78.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_79.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'toner_pack77',
          rating: 5,
          content: '아침에 화장하기 전에 화장솜에 듬뿍 적셔서 토너팩으로 5분만 올려두면 화장이 진짜 찰떡같이 잘 먹어요ㅋㅋ 결 정리도 매끄럽게 잘 되고 피부 컨디션 떨어졌을 때 퀵 수분 충전용으로 이만한 게 없습니다. 200ml라 양도 넉넉해요.',
          date: '2026-08-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_80.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_81.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 아주 빠르고 꼼꼼하게 포장되어 잘 왔습니다. VT 제품은 믿고 쓰는데 이번 토너도 제 피부에 찰떡이네요. 유수분 밸런스를 잘 잡아줘서 그런지 피부가 한층 맑아진 기분이에요. 다 쓰면 무조건 재구매할 생각입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_82.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'moist_beauty',
          rating: 5,
          content: '물토너처럼 주르륵 흐르는 제형인데 막상 바르면 에센스 바른 것처럼 영양감이 느껴져서 신기해요. 흡수력이 진짜 빨라서 여러 번 찹토로 레이어링해도 밀림이 전혀 없습니다. 가성비 최고의 광채 토너로 임명합니다!',
          date: '2026-05-24',
        }
      ]
    },
    {
      id: 21,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_03.jpg', 
      title: '마데카21 테카 솔루션 수딩 미스트 토너 200ml',
      price: 5000,
      tags: ['택배', '오늘'],
      date: '2026-11-02',
      sales: 4321,
      inventory: 3,
      likes: 9999,
      shares: 2670,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_46.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_46.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_47.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_25.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'teca_care91',
          rating: 5,
          content: '동국제약 마데카 라인은 역시 실망시키지 않네요! 환절기라 피부 뒤집어지고 난리였는데 이거 수시로 뿌려주니까 하루 이틀 만에 붉은 기가 싹 가라앉았어요. 미스트 형식이라 세수하고 바로 뿌릴 수 있어서 정말 편합니다.',
          date: '2026-05-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_83.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'jin_soo04',
          rating: 4,
          content: '분사력이 진짜 안개처럼 곱고 미세해서 맘에 듭니다. 얼굴에 뭉치지 않고 골고루 안착돼요. 유수분 밸런스를 산뜻하게 잘 잡아주는 느낌이라 지성 피부인 제가 사계절 내내 부담 없이 쓰기 딱 좋은 미스트 토너입니다.',
          date: '2026-09-02',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_84.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_water',
          rating: 3,
          content: '피부 진정 효과는 무난하게 괜찮은 것 같아요. 성분이 순해서 그런지 자극도 전혀 없습니다. 다만 악건성 피부인 제 기준에는 수분 지속력이 살짝 아쉬워서, 뿌리고 나서 크림이나 에센스를 바로 덧발라줘야 당김이 없어요.',
          date: '2026-04-11',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_85.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'desk_skincare',
          rating: 5,
          content: '사무실 히터 때문에 건조할 때마다 뿌리려고 구매했어요ㅋㅋ 화장 위에 뿌려도 화장이 밀리거나 들뜨지 않고 오히려 자연스러운 수분광이 돌아서 너무 좋습니다. 200ml 대용량이라 가성비도 아주 훌륭해요.',
          date: '2026-08-20',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_86.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_87.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_se02',
          rating: 4,
          content: '배송 아주 빠르고 꼼꼼하게 포장되어 잘 왔습니다. 냉장고에 넣어두고 세안 후에 시원하게 뿌려주면 쿨링 진정 효과가 두 배가 되는 것 같아요ㅋㅋ 피부 결 정리도 매끄럽게 잘 돼서 다 쓰면 무조건 재구매할 생각입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_88.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'blue_mint88',
          rating: 5,
          content: '가볍고 촉촉한 제형이라 끈적임 싫어하시는 분들께 강력 추천합니다. 닦토 대신 흡수시키는 토너로 쓰기에도 좋고 장벽 개선에도 도움을 주는 것 같아요. 가성비 최고의 진정 미스트라 주변에도 추천하고 다닙니다.',
          date: '2026-06-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_89.jpg',
          ],
        }
      ]
    },
    {
      id: 22,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_04.jpg', 
      title: '본셉 레티놀 2500 IU 링클샷 퍼펙터 15ml',
      price: 5000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-05-19',
      sales: 2890,
      inventory: 45,
      likes: 9999,
      shares: 1686,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_46.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_46.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_47.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_26.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_27.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_28.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'retinol_user',
          rating: 5,
          content: '눈가랑 팔자 주름이 고민이라 집중 케어하려고 샀는데 너무 만족스러워요! 레티놀 성분이 고함량이라 그런지 바르고 나면 다음 날 피부가 쫀쫀하고 팽팽해진 느낌입니다. 15ml라 양이 적어 보였는데 소량씩 콕콕 찍어 바르니 꽤 오래 써요.',
          date: '2026-06-28',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_90.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0911',
          rating: 4,
          content: '눈밑 미세 주름 예방 차원에서 저녁마다 꾸준히 바르고 있습니다. 제형이 밀도 높고 부드럽게 밀착돼서 영양감이 가득 느껴져요. 레티놀 처음 쓰시는 분들은 격일로 바르면서 적응 기간 거치면 자극 없이 쓰기 딱 좋습니다.',
          date: '2026-09-02',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_91.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '탄력 개선 효과는 조금 있는 것 같아요. 눈가 피부가 쫀쫀해지는 기분입니다. 다만 제 피부가 워낙 얇고 민감해서 그런지 처음에 매일 발랐을 때는 살짝 붉어짐이 있었어요. 양을 아주 조금씩 조절해서 밤에만 조심히 쓰고 있습니다.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_92.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'wrinkle_care',
          rating: 5,
          content: '다이소 본셉 라인 가성비 대박이네요ㅋㅋ 2500 IU 고함량 링클샷을 이 가격에 살 수 있다니 감동입니다. 튜브 입구가 뾰족해서 원하는 국소 부위에 정교하게 짜서 바르기 너무 편해요. 일주일 썼는데 안색도 맑아진 것 같아요.',
          date: '2026-08-20',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_93.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '엄마 팔자주름 고민이시래서 선물해 드렸는데 쫀쫀하고 촉촉하다고 아주 좋아하십니다. 끈적이지 않고 쏙 흡수돼서 나이트 케어용으로 부담 없으시대요. 다 쓰시면 몇 개 더 쟁여서 선물로 사다 드리려고 합니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_94.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'anti_aging88',
          rating: 5,
          content: '목주름이랑 이마 주름 위주로 펴 바르고 있는데 확실히 피부 결이 매끄러워지고 탄력이 붙는 게 눈으로 보입니다! 밤에 듬뿍 바르고 자면 다음 날 화장이 주름 사이에 끼지 않고 매끈하게 잘 먹어서 대만족 중입니다.',
          date: '2026-05-24',
        },
        {
          reviewId: 7,
          userId: 'honey_skin99',
          rating: 4,
          content: '배송 빠르게 잘 받았고 패키지도 깔끔하네요. 모공이랑 주름 개선에 레티놀이 좋대서 샀는데 가성비 링클 케어용으로 훌륭합니다. 흡수력이 빨라서 크림 전 단계에 밀림 없이 싹 레이어링하기 좋은 꿀템입니다.',
          date: '2026-03-18',
        },
      ]
    },
    {
      id: 23,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_05.jpg', 
      title: '[피지 착붙]리더스 바이오셀 포어 제로 마스크 1매',
      price: 2000,
      tags: ['택배', '픽업'],
      date: '2026-09-27',
      sales: 840,
      inventory: 512,
      likes: 7458,
      shares: 439,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_48.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_48.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_49.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_29.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'pore_zero91',
          rating: 5,
          content: '일반 부직포 팩이랑 다르게 바이오셀룰로오스 시트라서 피부에 겔처럼 찰떡같이 달라붙어요! 움직여도 전혀 안 떨어져서 너무 편합니다. 팩 떼고 나면 코 주변에 겉돌던 피지랑 유분기가 싹 정리되면서 모공이 쫀쫀해진 게 느껴져요.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0922',
          rating: 4,
          content: '피지 착붙이라는 말답게 노폐물을 흡착해 주는 느낌이 확실히 드네요. 냉장고에 안 넣었는데도 붙이자마자 쿨링감이 장난 아니에요ㅋㅋ 피부 열감 내리면서 모공 관리용으로 쓰기에 아주 좋습니다. 에센스도 넉넉하게 들어있어요.',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_95.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '밀착력은 진짜 역대급으로 좋고 피부가 시원해져서 좋습니다. 다만 팩을 떼어내고 나서 마무리가 산뜻한 편이라, 건성 피부인 제 기준에는 수분감이 조금 부족하게 느껴져서 수분 크림을 위에 듬뿍 덧발라줘야 밸런스가 맞아요.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_96.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'sebum_killer',
          rating: 5,
          content: '다이소 꿀템이라고 해서 샀는데 리더스 마스크팩 역시 이름값 하네요ㅋㅋ 메이크업 전에 붙여주면 얼굴 피지랑 각질이 가라앉아서 그런지 화장이 들뜨지 않고 진짜 잘 먹어요. 1일 1팩용으로 대량으로 쟁여두고 쓰는 중입니다.',
          date: '2026-08-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_97.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 포장 상태도 깔끔합니다. 여름철이나 환절기에 번들거리는 유분기 잡는 데 이만한 마스크팩이 없는 것 같아요. 시트가 고급스러워서 밀착감이 훌륭하고 자극 없이 순해서 마음에 쏙 듭니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_98.jpg',
          ],
        },
      ]
    },
    {
      id: 24,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_06.jpg', 
      title: '바이 리얼베리어 세라베이스 카밍 모이스처라이징 크림 50ml',
      price: 5000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-01-15',
      sales: 6120,
      inventory: 128,
      likes: 9999,
      shares: 1734,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_50.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_50.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_51.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_30.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'barrier_care0',
          rating: 5,
          content: '역시 리얼베리어 라인이라 장벽 케어에 최고입니다! 환절기만 되면 피부가 따갑고 뒤집어지는데, 이 크림 이틀만 듬뿍 바르고 자면 붉은 기가 싹 가라앉고 피부가 건강해지는 게 느껴져요. 끈적임 없이 부드럽게 스며들어서 너무 좋습니다.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'cera_love92',
          rating: 4,
          content: '세라마이드 성분이 들어가서 그런지 보습 지속력이 장난 아니네요ㅋㅋ 아침에 바르고 출근해도 퇴근할 때까지 속당김이 전혀 없어요. 제형은 쫀쫀한 편인데 밀림 없이 부드럽게 잘 펴 발려서 데일리로 쓰기 딱 좋은 수분 장벽 크림입니다.',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_99.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky01',
          rating: 3,
          content: '진정이랑 수분 충전은 순하게 잘 되는 것 같아요. 향도 무향에 가까워서 마음에 듭니다. 다만 지성 피부인 제 기준에는 여름철에 바르기엔 영양감이 조금 과한지 오후가 되면 살짝 번들거림이 있네요. 가을, 겨울용으로 쓰면 딱 맞을 듯합니다.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_100.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'calming_cream',
          rating: 5,
          content: '다이소 바이 리얼베리어 라인 가성비 미쳤네요 진짜ㅋㅋ 올리브영에서 비싸게 주고 사던 장벽 크림이랑 퀄리티 차이가 전혀 안 느껴집니다. 피부 장벽 무너져서 각질 부각되던 게 싹 가라앉아서 화장도 엄청 잘 먹어요. 무조건 쟁이세요!',
          date: '2026-08-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_101.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 아주 빠르고 안전하게 포장되어 잘 왔습니다. 성분이 순해서 예민한 피부인데도 트러블 없이 찰떡같이 잘 맞아요. 50ml라 휴대하기도 편해서 여행 갈 때 들고 다니면서 수분 충전용으로 쓰기 아주 유용한 주방 필수 스킨케어 템입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_102.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'honey_skin88',
          rating: 5,
          content: '피부 결 개선에 도움을 많이 받았습니다. 밤에 수분팩처럼 도톰하게 얹고 자면 다음 날 아침까지 피부가 매끈매끈하고 뽀송해요. 유수분 밸런스를 딱 알맞게 잡아주니까 피부 속건조 잡는 데 이만한 크림이 없습니다. 강력 추천해요!',
          date: '2026-05-24',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_103.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_104.jpg',
          ],
        },
      ]
    },
    {
      id: 25,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_07.jpg', 
      title: '[수분충전]VT PDRN 광채 시트 마스크 1매 25g',
      price: 1000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-07-08',
      sales: 3450,
      inventory: 214,
      likes: 9999,
      shares: 1240,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_52.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_52.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_53.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_31.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_32.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'barrier_care0',
          rating: 5,
          content: '역시 리얼베리어 라인이라 장벽 케어에 최고입니다! 환절기만 되면 피부가 따갑고 뒤집어지는데, 이 크림 이틀만 듬뿍 바르고 자면 붉은 기가 싹 가라앉고 피부가 건강해지는 게 느껴져요. 끈적임 없이 부드럽게 스며들어서 너무 좋습니다.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_108.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '중요한 약속 전날 밤에 붙이고 자면 다음 날 화장 먹는 게 완전히 달라요ㅋㅋ 시트 밀착력도 우수해서 얼굴에 착 붙어있고 흘러내리지 않아 편합니다. 남은 에센스는 목이랑 팔에도 바를 수 있을 만큼 넉넉해서 가성비 최고예요.',
          date: '2026-09-02',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_109.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '수분 충전이랑 영양 공급은 확실히 잘 되는 팩입니다. 바르고 나면 피부가 되게 쫀쫀해져요. 다만 지성 피부인 제 기준에는 에센스 제형이 약간 묵직한 편이라 다 흡수시키고 나면 약간의 끈적임이 남아서 가볍게 닦아내고 크림 발라요.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_110.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_111.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'water_bomb77',
          rating: 5,
          content: '다이소 뷰티템 중에 퀄리티 진짜 역대급이네요ㅋㅋ 이 가격에 PDRN 고함량 광채 마스크를 쓸 수 있다니 무조건 쟁여야 합니다. 거칠었던 피부 결이 한 번에 보들보들해지고 수분이 꽉 채워지는 느낌이라 1일 1팩용으로 강력 추천합니다.',
          date: '2026-08-20',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_112.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_113.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 포장 상태도 아주 깔끔합니다. 성분이 착해서 민감성 피부인데도 따가움이나 트러블 전혀 없이 편안하게 잘 맞았어요. 에센스가 피부 겉에서 겉돌지 않고 쏙 스며들어서 속건조 잡는 데 아주 훌륭한 마스크팩입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_114.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'honey_skin0',
          rating: 5,
          content: '시트 자체가 도톰하면서도 부드러워서 피부에 닿는 감촉이 너무 좋습니다. 떼고 나서 가볍게 두드려주면 팩한 직후뿐만 아니라 다음 날 아침까지 피부가 탱글탱글하고 뽀송해요. 유수분 밸런스를 딱 알맞게 잡아줘서 대만족입니다!',
          date: '2026-06-14',
        },
      ]
    },
    {
      id: 26,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_08.jpg', 
      title: '더랩 바이 블랑두 클리어 히알 물광 부스터 앰플 30ml',
      price: 5000,
      tags: ['택배'],
      date: '2026-12-04',
      sales: 1980,
      inventory: 67,
      likes: 9999,
      shares: 1765,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_54.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_54.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_55.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_33.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'hyal_master',
          rating: 5,
          content: '더랩 바이 블랑두 제품답게 성분도 순하고 속건조 잡는 데 최고예요! 저분자 히알루론산이라 그런지 피부 겉에서 겉돌지 않고 싹 흡수됩니다. 바르고 나면 인위적인 오일광이 아니라 맑고 투명한 물광이 올라와서 너무 예뻐요.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_115.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0922',
          rating: 4,
          content: '끈적임 없는 워터리한 제형이라 토너 다음 단계에 부담 없이 바르기 좋습니다. 수분 부스터 역할을 톡톡히 해줘서 다음 단계 크림을 바르면 시너지가 나는 것 같아요. 다만 30ml라 금방 쓰는 느낌이라 여러 개 쟁여둬야겠어요.',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_116.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '수분 충전 자체는 엄청 산뜻하게 잘 돼요! 피부 자극도 전혀 없고 순합니다. 다만 악건성인 제 피부 기준에는 겨울철에 이것만 바르기엔 금방 건조해지는 감이 있어서, 유분기 있는 크림이랑 섞어 바르거나 덧발라줘야 밸런스가 맞아요.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_117.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'moist_bomb7',
          rating: 5,
          content: '다이소에서 이 브랜드 앰플을 만날 수 있다니 가성비 진짜 미쳤네요ㅋㅋ 메이크업 전에 한 방울 레이어링해서 발라주면 각질이 싹 가라앉아서 화장이 들뜨지 않고 진짜 찰떡같이 잘 먹습니다. 끈적임 싫어하시는 분들 무조건 사세요!',
          date: '2026-08-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_118.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 스포이드 타입이라 원하는 양만큼 깔끔하게 덜어 쓰기 편해요. 유수분 밸런스가 깨져서 번들거리던 피부였는데 이 물광 앰플로 수분 꽉 채워주니까 오히려 개기름도 덜 끼고 피부 결이 부드러워져서 대만족입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_119.jpg',
          ],
        },
      ]
    },
    {
      id: 27,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_09.jpg', 
      title: '모다모다 블루비오틴 스칼프샴푸 300ml',
      price: 5000,
      tags: ['택배', '픽업'],
      date: '2026-04-22',
      sales: 5210,
      inventory: 14,
      likes: 9999,
      shares: 1144,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_56.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_56.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_57.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_34.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'biotin_care',
          rating: 5,
          content: '모다모다에서 새로 나온 블루비오틴 라인이라 믿고 구매했습니다! 감고 나면 두피가 엄청 개운하고 가려움증이 싹 사라졌어요. 모발에 힘이 생기는지 확실히 머리 말릴 때 빠지는 양이 줄어든 게 눈으로 보여서 대만족입니다.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_120.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0922',
          rating: 4,
          content: '거품이 쫀쫀하고 풍성하게 잘 나서 적은 양으로도 샴푸하기 편해요. 스칼프 샴푸라 그런지 은은한 쿨링감이 있어서 한여름이나 땀 흘린 날 쓰기 딱 좋습니다. 300ml라 아주 대용량은 아니지만 기능이 훌륭해서 계속 쓸 것 같아요.',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_121.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '두피 세정력은 진짜 좋아서 개기름 잡는 데는 최고인 것 같아요. 비듬도 많이 줄었습니다. 다만 제 모발이 워낙 건조하고 손상모라 그런지 샴푸만 단독으로 쓰기엔 살짝 뻣뻣한 감이 있어서 트리트먼트를 꼭 같이 해줘야 해요.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_122.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'scalp_master',
          rating: 5,
          content: '다이소에서 모다모다 샴푸를 가성비 좋게 살 수 있다니 감동이네요ㅋㅋ 성분이 착해서 예민한 두피인데도 붉어지거나 트러블 나는 것 전혀 없이 순하게 잘 맞습니다. 정수리 냄새도 잘 잡아주고 모발 볼륨감도 살려줘서 너무 좋아요.',
          date: '2026-08-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_123.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 향이 자극적이지 않고 산뜻해서 마음에 듭니다. 신랑 주려고 샀는데 두피 각질이 많이 가라앉았다고 아주 좋아하네요. 유수분 밸런스를 잘 잡아주는 탈모 완화 샴푸라 온 가족 데일리용으로 추천합니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_124.jpg',
          ],
        },
      ]
    },
    {
      id: 28,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_10.jpg', 
      title: '식물원 알로에 프레시 수딩 마스크시트',
      price: 500,
      tags: ['택배', '오늘'],
      date: '2026-10-11',
      sales: 970,
      inventory: 420,
      likes: 1624,
      shares: 36,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_58.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_58.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_59.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_35.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_36.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_37.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'aloe_soothing',
          rating: 5,
          content: '피부 뒤집어지거나 햇빛 많이 받아서 열감 올라왔을 때 이만한 게 없어요! 알로에 성분이라 그런지 자극 없이 순하고 붉은 기가 금방 가라앉습니다. 냉장고에 넣어두고 시원하게 붙이면 진정 효과가 두 배예요.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_125.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0819',
          rating: 4,
          content: '에센스가 끈적이지 않고 산뜻한 젤 타입이라 마무리가 뽀송해서 맘에 듭니다. 시트도 부드럽게 얼굴에 잘 밀착되네요. 부담 없이 매일 쓸 수 있는 가성비 좋은 데일리 1일 1팩용 수분 마스크팩으로 딱입니다.',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_126.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '진정이랑 수분 충전은 가볍게 잘 되는 편이에요. 다만 제 피부가 엄청난 악건성이라 그런지 에센스가 쏙 흡수되고 나면 보습 지속력이 살짝 아쉽게 느껴져서, 팩을 떼고 수분 크림을 한 번 더 도톰하게 덧발라주고 있어요.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_127.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'water_bomb9',
          rating: 5,
          content: '네이처리퍼블릭 식물원 라인 역시 가성비 최고네요ㅋㅋ 가격 부담이 전혀 없어서 아낌없이 팍팍 쓰기 좋습니다. 아침에 메이크업 전에 5분만 붙여놔도 각질이 싹 잠재워져서 화장이 들뜨지 않고 진짜 잘 먹어요.',
          date: '2026-08-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_128.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 포장 상태도 아주 깔끔합니다. 성분이 착해서 예민한 피부인데도 따갑거나 트러블 나는 것 전혀 없이 편안하게 잘 맞았어요. 에센스 용량도 넉넉하게 들어있어서 목이랑 팔에도 바르기 좋습니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_129.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'green_nature',
          rating: 5,
          content: '향도 은은한 알로에 향이라 리프레시되는 기분이고 유수분 밸런스를 딱 알맞게 잡아주네요. 팩 떼고 가볍게 두드려주면 밀림 없이 쏙 흡수돼서 나이트 케어용으로 아주 훌륭합니다. 다 쓰면 무조건 대량으로 재구매할 거예요!',
          date: '2026-05-24',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_129.jpg',
          ],
        },
      ]
    },
    {
      id: 29,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_11.jpg', 
      title: '바이 리얼베리어 세라베이스 모이스처라이징 크림마스크 23ml',
      price: 1000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-02-28',
      sales: 2130,
      inventory: 185,
      likes: 1920,
      shares: 35,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_60.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_60.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_61.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_38.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'cera_mask95',
          rating: 5,
          content: '일반 워터 타입 마스크팩이랑 다르게 꾸덕하고 쫀쫀한 크림 에센스가 가득 들어있어서 보습력이 정말 차원이 달라요! 피부 장벽이 무너져서 거칠고 따가웠는데 이거 붙이고 나니까 속건조가 한 번에 해결되고 피부가 엄청 건강해졌습니다.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_130.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0922',
          rating: 4,
          content: '리얼베리어 크림을 시트 한 장에 그대로 녹여낸 느낌이에요ㅋㅋ 23ml라 양도 넉넉하고 시트 밀착력도 좋아서 굴곡진 부위까지 찰떡같이 잘 붙어있네요. 환절기나 겨울철에 극건성 피부 구원템으로 이만한 게 없는 것 같습니다.',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_131.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_132.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '영양감이랑 보습력은 진짜 최고라서 밤에 붙이고 자면 다음 날 아침까지 피부가 매끈매끈해요. 다만 수부지나 지성 피부인 제 기준에는 여름철에 쓰기엔 크림 제형이 살짝 무겁고 유분기가 도는 느낌이라 가을, 겨울용으로 쓰려고요.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_133.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'barrier_bomb7',
          rating: 5,
          content: '다이소 바이 리얼베리어 라인은 정말 믿고 씁니다 가성비 미쳤어요ㅋㅋ 약속 전날 밤에 이거 하고 자면 다음 날 베이스 메이크업이 들뜸 없이 착붙입니다. 성분도 착해서 민감성 피부인데 붉은 기 진정되는 데도 효과 많이 봤어요.',
          date: '2026-08-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_134.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 포장도 꼼꼼하게 잘 왔습니다. 에센스가 흐르지 않는 크림 타입이라 팩 붙이고 돌아다녀도 목으로 주르륵 흐르지 않아서 너무 편해요ㅋㅋ 유수분 밸런스를 묵직하게 잡아주는 아주 고마운 마스크팩입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_135.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'honey_skin00',
          rating: 5,
          content: '시트 자체가 도톰하면서도 엄청 부드러워서 피부 자극이 전혀 없어요. 떼고 나서 남은 크림 슥슥 흡수시켜 주면 다른 스킨케어 안 해도 될 정도로 하루 종일 뽀송하고 촉촉합니다. 퀄리티가 너무 좋아서 무조건 대량으로 쟁여두려고요!',
          date: '2026-05-24',
        },
      ]
    },
    {
      id: 30,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_12.jpg', 
      title: '어퓨 더퓨어 청사과 스칼프 헤어식초 195ml',
      price: 5000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-08-17',
      sales: 3880,
      inventory: 3,
      likes: 8832,
      shares: 388,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_62.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_62.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_63.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_39.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'apple_scalp',
          rating: 5,
          content: '정수리 냄새랑 두피 기름기 잡는 데는 헤어식초가 최고네요! 샴푸하고 마지막 단계에 두피 위주로 뿌려서 마사지해주면 엄청 시원하고 개운해요. 인위적인 식초 향이 아니라 상큼한 청사과 향이라 쓸 때마다 리프레시됩니다.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_136.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '지성 두피라 오후만 되면 머리가 떡져서 고민이었는데 이거 쓰고 유분기가 많이 줄었어요. 워터 제형이라 두피에 골고루 흡수시키기 편합니다. 다만 입구 조절을 잘못하면 눈으로 흘러내릴 수 있으니 조심히 짜서 써야 해요ㅋㅋ',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_137.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_138.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '두피가 가려울 때 뿌려주면 쿨링감이 돌면서 진정되는 느낌은 확실히 좋습니다. 머릿결도 부드러워지는 것 같아요. 다만 195ml라 생각보다 용량이 아담해서 매일 쓰다 보면 금방 비우게 될 것 같아 대량으로 사두려고요.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_139.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'clean_hair77',
          rating: 5,
          content: '다이소 어퓨 라인 가성비 진짜 미쳤네요ㅋㅋ 예전에 올리브영에서 비싼 헤어식초 썼던 거랑 비교해도 세정력이나 청량감이 전혀 뒤처지지 않습니다. 두피 각질도 많이 가라앉고 모발에서 은은하게 사과 향이 오래 남아서 맘에 쏙 들어요.',
          date: '2026-08-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_140.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 찌그러진 곳 없이 포장도 깔끔하게 잘 왔습니다. 성분이 순해서 예민한 두피인데도 따갑거나 트러블 나는 것 전혀 없이 편안하게 잘 맞았어요. 일주일에 2~3번 정도 스페셜 두피 케어용으로 쓰기 딱입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_141.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'cool_mint88',
          rating: 5,
          content: '물때나 찌든 기름때를 씻어내듯 두피의 답답함이 한 번에 싹 가라앉는 기분이에요. 린스나 트리트먼트 대용으로 쓰기에도 모발이 엉키지 않고 차분해져서 너무 좋습니다. 유수분 밸런스 잘 잡아주는 효자템이라 정착하려고요!',
          date: '2026-05-24',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_142.jpg',
          ],
        },
      ]
    },
    {
      id: 31,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_13.jpg', 
      title: '마미케어 바다포도 스킨팩 80매',
      price: 5000,
      tags: ['택배'],
      date: '2026-05-12',
      sales: 1240,
      inventory: 2,
      likes: 9999,
      shares: 5274,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_64.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_64.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_65.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_40.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'sea_grape0',
          rating: 5,
          content: '다이소 품절대란템이라 구하기 힘들었는데 써보니까 왜 난리인지 알겠네요ㅋㅋ 0.1mm 초슬림 시트라 얼굴에 붙이고 온 집안을 돌아다니고 드라이기로 머리를 말려도 절대 안 떨어집니다. 화장 전에 올리면 열감이 사악 내려가서 베이스가 찰떡같이 먹어요.',
          date: '2026-06-28',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_144.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0919',
          rating: 4,
          content: '물티슈처럼 한 장씩 쏙쏙 뽑아 쓰는 캡 형태라 사용하기 정말 편리해요. 바다포도 추출물이 들어가서 그런지 산뜻하고 쿨링감이 훌륭합니다. 다만 손으로 꺼내다 보면 가끔 2~3장씩 겹쳐 나와서 집에 남는 집게로 한 장씩 집어 쓰고 있어요.',
          date: '2026-09-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_145.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_146.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '간편하게 토너팩 대용으로 쓰기엔 좋은데 에센스 양이 아주 흥건한 편은 아니라서 그런지 시트가 생각보다 조금 빨리 마르는 느낌이에요. 딱 5~10분 정도 가볍게 모공 수렴하고 쿨링 진정용으로 쓰기에 적당한 무난무난한 팩입니다.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_147.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_148.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'make_up77',
          rating: 5,
          content: '이거 성능이랑 가격 생각하면 진짜 평생템입니다ㅋㅋ 크기도 양볼에 딱 맞춘 미니 사이즈라 아침 출근길에 양볼이랑 이마에 툭툭 올려두기 너무 좋아요. 향도 거의 무향에 가까워서 마음에 들고 80매 대용량이라 매일 써도 부담이 전혀 없네요.',
          date: '2026-08-20',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_149.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '유튜버가 추천하는 거 보고 냉큼 쟁여왔는데 아주 만족스럽습니다. 처음 개봉할 때 플라스틱 실링을 조심히 뜯어야 안에 있는 에센스가 안 넘치니 주의하셔야 해요! 밀착감이 부드럽고 따갑지 않아서 예민한 제 피부에도 순하게 잘 맞습니다.',
          date: '2026-07-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_150.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'pore_care88',
          rating: 5,
          content: '여름이랑 환절기 내내 아주 달고 살았습니다. 냉장고에 넣어뒀다가 세안하고 붙여주면 후끈했던 얼굴 열이 즉각적으로 내려가요. 후코이단이랑 히알루론산이 들어있어 피부 속건조도 잘 잡아주고 떼어내면 일시적으로 모공이 쫀쫀하게 수축되는 게 보여요.',
          date: '2026-05-24',
        },
        {
          reviewId: 7,
          userId: 'honey_skin9',
          rating: 4,
          content: '배송 아주 빠르고 위생적으로 사용할 수 있는 패키지라 좋아요. 일반 시트마스크처럼 에센스가 목으로 흘러내리지 않고 깔끔하게 딱 밀착되어서 바쁜 아침 가볍게 퀵 수분 충전용으로 최적화된 아이템입니다. 다 쓰면 또 구매하러 올게요.',
          date: '2026-03-18',
        },
        {
          reviewId: 8,
          userId: 'choi_se042',
          rating: 5,
          content: '지인들 단체로 선물해 주려고 몇 팩 더 샀어요ㅋㅋ 얇고 말랑말랑한 겔 제형이라 피부에 감기는 느낌이 너무 중독성 있습니다. 수정 화장하기 전에 들뜬 부위에 잠시 올려두는 용도로도 아주 요긴하게 잘 쓰고 있어서 강력 추천합니다!',
          date: '2026-09-02',
        },
      ]
    },
    {
      id: 32,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_14.jpg', 
      title: '리노이아 실크 트리트먼트 150ml',
      price: 3000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-01-22',
      sales: 3105,
      inventory: 40,
      likes: 3459,
      shares: 112,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_66.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_66.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_67.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_41.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'silk_hair0',
          rating: 5,
          content: '잦은 염색이랑 탈색 때문에 머릿결이 개털 그 자체였는데 이거 쓰고 심폐소생술 성공했습니다ㅋㅋ 바르고 3분 정도 있다가 헹궈내면 물미역처럼 부드러워져요. 실크 단백질이 들어가서 그런지 확실히 모발에 영양이 꽉 차는 느낌입니다.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_151.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_152.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '제형이 너무 꾸덕하지 않고 부드러워서 모발에 골고루 펴 바르기 편합니다. 헹굴 때 미끈거림이 오래 남지 않고 산뜻하게 씻겨 내려가서 맘에 들어요. 향도 고급스러운 미용실 샴푸 향이라 하루 종일 은은하게 유지돼서 기분 좋습니다.',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_153.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '머릿결이 차분해지고 정전기 방지되는 효과는 확실히 괜찮은 것 같아요. 손가락으로 빗질할 때 걸리는 게 많이 줄었습니다. 다만 극손상모인 제 기준에는 150ml 용량이 살짝 아담해서 매일 듬뿍 쓰다 보면 금방 비우게 될 것 같아요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'angel_ring7',
          rating: 5,
          content: '다이소 헤어 제품 중에 품질 진짜 최고인 것 같아요ㅋㅋ 비싼 수입 트리트먼트 썼던 거랑 비교해도 부드러움이나 윤기 면에서 전혀 뒤처지지 않습니다. 머리 말리고 나면 엉킴 없이 찰랑거려서 엔젤링이 생기는 것 같아요. 무조건 사세요!',
          date: '2026-08-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_154.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 튜브 타입이라 원하는 양만큼 깔끔하게 짜서 쓰기 편해요. 샴푸 후에 모발 끝부분 위주로 마사지하듯 발라주는데 유수분 밸런스를 잘 잡아줘서 붕 뜨지 않고 차분하게 가라앉아 대만족 중입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_155.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'cool_mint88',
          rating: 5,
          content: '가성비 정말 훌륭한 실크 트리트먼트입니다ㅋㅋ 끈적임 없이 모발 속으로 영양분이 쏙 스며드는 기분이에요. 드라이기 열판 대기 전에 바르는 헤어팩 대용으로 살짝 발라줘도 밀림 없이 부드러워서 아주 유용하게 잘 쓰고 있습니다. 추천해요!',
          date: '2026-05-24',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_156.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_157.jpg',
          ],
        },
      ]
    },
    {
      id: 33,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_15.jpg', 
      title: '에끌라 깨끗한 물티슈 캡형 150매입',
      price: 1000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-09-04',
      sales: 8420,
      inventory: 10,
      likes: 9999,
      shares: 497,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_68.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_68.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_69.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_42.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'clean_wipes',
          rating: 5,
          content: '150매 대용량이라 진짜 묵직하고 양이 많아서 든든해요! 캡형이라 마지막 한 장까지 마르지 않고 촉촉하게 쓸 수 있어서 너무 좋습니다. 정제수를 사용해서 그런지 냄새도 없고 거실이나 식탁 닦을 때 막 쓰기 최고예요.',
          date: '2026-06-18',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_158.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_159.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0902',
          rating: 4,
          content: '매일 쓰는 소모품이라 가성비 보고 주문했습니다. 한 장씩 쏙쏙 잘 뽑히고 뒤이어 줄줄이 딸려 나오지 않아서 마음에 드네요. 두께가 아주 두꺼운 엠보싱 편은 아니지만, 바닥 먼지 닦거나 일상적인 청소용으로 쓰기엔 가성비 최고입니다.',
          date: '2026-09-02',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_160.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'single_life7',
          rating: 3,
          content: '대용량에 캡형인 점은 아주 마음에 듭니다. 다만 평소에 도톰한 프리미엄 물티슈를 쓰셨던 분들이라면 두께가 조금 얇게 느껴질 수 있어요. 그래도 손 닦거나 가벼운 오염물 슥슥 닦아내는 용도로는 가격 부담 없이 쓰기 무난합니다.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'daily_clean8',
          rating: 5,
          content: '다이소 물티슈 중에 수분 밸런스가 제일 괜찮은 것 같아요ㅋㅋ 너무 흥건하지도 않고 적당히 촉촉해서 닦고 나서 물자국이 안 남습니다. 디자인도 깔끔해서 방마다 하나씩 두고 손 닿는 곳에 비치해두니 청소할 때 정말 유용하네요.',
          date: '2026-08-23',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_161.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 튜브 타입이라 원하는 양만큼 깔끔하게 짜서 쓰기 편해요. 샴푸 후에 모발 끝부분 위주로 마사지하듯 발라주는데 유수분 밸런스를 잘 잡아줘서 붕 뜨지 않고 차분하게 가라앉아 대만족 중입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_162.jpg',
          ],
        },
      ]
    },
    {
      id: 34,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_16.jpg', 
      title: '헬로키티 밴드 20매입 혼합형',
      price: 1000,
      tags: ['택배', '오늘'],
      date: '2026-07-19',
      sales: 4510,
      inventory: 5,
      likes: 1573,
      shares: 55,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_70.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_70.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_71.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_43.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'lovely_pink',
          rating: 5,
          content: '패키지부터 밴드 디자인까지 키티 일러스트가 다 다르고 너무 깜찍해요! 혼합형이라 상처 크기에 맞춰 골라 쓸 수 있는 점이 제일 편리합니다. 다이소 갈 때마다 필수로 쟁여두는 비상약품 꿀템이에요.',
          date: '2026-05-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_163.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_164.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'choi_0402',
          rating: 4,
          content: '조카가 다쳤을 때 일반 밴드는 안 붙이려고 떼를 쓰는데, 이 키티 밴드는 귀여워서 그런지 스스로 붙이겠다고 하네요ㅋㅋ 접착력도 부드러운 편이라 나중에 떼어낼 때 피부 자극이 적어서 아주 안심입니다.',
          date: '2026-09-18',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_165.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'user_9981',
          rating: 3,
          content: '디자인은 정말 마음에 드는데 손가락 마디처럼 움직임이 많고 물이 자주 닿는 부위는 끝부분이 살짝 잘 일어나는 편이에요. 방수 전용 밴드는 아니다 보니 가벼운 일상 상처 보호용으로 막 쓰기에 적당합니다.',
          date: '2026-03-22',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_166.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'happy_kitty',
          rating: 5,
          content: '새 구두 신어서 뒤꿈치 까졌을 때 붙였는데 두께감도 적당해서 쓸림을 잘 막아줬어요ㅋㅋ 지갑이나 파우치에 서너 장씩 비상용으로 넣어가지고 다니기 딱 좋습니다. 디자인이 예뻐서 인테리어 소품처럼 소장 욕구 뿜뿜해요.',
          date: '2026-08-11',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_167.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'kim_sh90',
          rating: 4,
          content: '배송 아주 빠르게 잘 받았고 유통기한도 넉넉한 제품으로 와서 만족스럽습니다. 가성비 좋은 혼합 구성이라 집에 두고 온 가족이 무난하게 쓰기 좋아요. 캐릭터 인쇄 상태도 깔끔하고 번짐 없이 퀄리티 훌륭합니다.',
          date: '2026-07-29',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_168.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_169.jpg',
          ],
        },
      ]
    },
    {
      id: 35,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_17.jpg', 
      title: '[생기충전]VT PDRN 톤온 젤리 시트 마스크 1매입',
      price: 1000,
      tags: ['택배'],
      date: '2026-09-15',
      sales: 150,
      inventory: 1,
      likes: 1172,
      shares: 36,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_72.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_72.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_73.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_44.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_45.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'jelly_glow',
          rating: 5,
          content: '에센스가 흘러내리는 워터 타입이 아니라 탱글탱글한 젤리 제형이라 팩 붙이고 돌아다녀도 목으로 안 흘러내려서 너무 편해요! 떼고 나면 푸석했던 안색이 즉각적으로 맑아지고 생기가 도는 게 눈으로 보입니다.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_170.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0912',
          rating: 4,
          content: '피부 컨디션 떨어져서 칙칙해 보일 때 저녁에 붙이고 자면 다음 날 아침에 피부가 엄청 환해져 있어요ㅋㅋ 메이크업도 찰떡같이 잘 먹습니다. 다만 젤리 제형 특성상 다 흡수되고 나면 살짝 쫀쫀한 잔여감이 남는 편이에요.',
          date: '2026-09-02',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_171.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '생기 충전이랑 톤 케어 효과는 무난하게 괜찮은 것 같아요. 시트 퀄리티도 부드럽고 밀착감이 좋습니다. 다만 지성 피부인 제 기준에는 여름철에 쓰기엔 영양감이 조금 과한 느낌이라 가을, 겨울 환절기용으로 쓰려고요.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_172.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_173.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'vt_fan77',
          rating: 5,
          content: '다이소 VT PDRN 라인은 진짜 나오는 것마다 대박이네요ㅋㅋ 가격 부담이 없어서 1일 1팩용으로 무조건 쟁여두고 쓰고 있습니다. 피부 속건조도 싹 잡아주고 팩 하고 나면 은은한 젤리광이 오래 유지돼서 너무 만족스러워요.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 포장도 꼼꼼하게 잘 왔습니다. 성분이 순해서 예민한 피부인데도 따가움이나 트러블 전혀 없이 편안하게 잘 맞았어요. 에센스 양이 워낙 넉넉해서 시트 떼고 난 뒤에도 온몸에 바르기 충분합니다.',
          date: '2026-07-05',
        },
        {
          reviewId: 6,
          userId: 'moist_skin0',
          rating: 5,
          content: '시트가 엄청 얇고 말랑해서 피부에 빈틈없이 촥 밀착되는 느낌이 너무 좋습니다. 피로해서 안색 안 좋아 보일 때 퀵으로 생기 충전하기에 이만한 마스크팩이 없는 것 같아요. 다 쓰면 당연히 재구매할 예정입니다. 강력 추천해요!',
          date: '2026-05-24',
        },
      ]
    },
    {
      id: 36,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_18.jpg', 
      title: '[프로테아]바이플라워 글로우 립스틱 by 네이처리퍼블릭',
      price: 5000,
      tags: ['택배'],
      date: '2026-04-11',
      sales: 2130,
      inventory: 55,
      likes: 5206,
      shares: 187,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_74.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_74.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_75.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_46.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'glow_lip95',
          rating: 5,
          content: '바르자마자 입술에 매끄럽게 녹아내리면서 은은한 유리알 광택이 돌아요! 끈적이지 않고 립밤처럼 촉촉해서 주머니에 넣고 데일리로 슥슥 바르기 최고입니다. 프로테아 컬러가 자연스러운 생기를 줘서 민낯에 발라도 너무 예쁘네요.',
          date: '2026-06-25',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_174.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_175.jpg',
          ],
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '입술이 워낙 건조하고 각질이 잘 일어나는 편인데 각질 부각 없이 촉촉하게 감싸줘서 맘에 듭니다. 네이처리퍼블릭 컬래버 제품이라 그런지 가성비 퀄리티가 아주 훌륭해요. 다만 맑은 발색이라 선명한 립을 원하시면 여러 번 레이어링해야 합니다.',
          date: '2026-09-12',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_176.jpg',
          ],
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '컬러감도 차분하고 촉촉해서 가볍게 쓰기 좋습니다. 자극 없이 순한 느낌이에요. 다만 멜팅 글로우 제형 특성상 마스크를 쓰거나 음료를 마실 때 묻어남이 좀 있는 편이고, 지속력이 아주 길지는 않아서 자주 덧발라주며 쓰고 있습니다.',
          date: '2026-04-14',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_177.jpg',
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_178.jpg',
          ],
        },
        {
          reviewId: 4,
          userId: 'flower_pink7',
          rating: 5,
          content: '다이소 뷰티템 중에 립스틱 퀄리티 진짜 대박이네요ㅋㅋ 텁텁함 전혀 없이 맑고 투명하게 올라와서 안색이 환해 보여요. 프로테아 색감이 웜톤 쿨톤 상관없이 무난하게 잘 어울릴 핑크 코랄 느낌이라 데일리 템으로 무조건 정착입니다.',
          date: '2026-08-19',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_179.jpg',
          ],
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 디자인도 군더더기 없이 깔끔해서 파우치에 쏙 넣어 다니기 좋아요. 매트한 립스틱 바르기 전에 베이스로 얇게 깔아주거나 입술 건조할 때 수분 충전용 립 케어로 쓰기에도 아주 유용한 꿀템입니다.',
          date: '2026-07-05',
          reviewImgs: [
            process.env.PUBLIC_URL + '/images/detail/reviewImgs_180.jpg',
          ],
        },
        {
          reviewId: 6,
          userId: 'honey_lip88',
          rating: 5,
          content: '물광 촉촉 립 원하시는 분들은 꼭 사세요! 가성비 정말 훌륭한 립스틱입니다. 주름 끼임 없이 입술 결을 매끄럽게 메워주는 느낌이 너무 마음에 들어요. 바르고 나면 입술이 탱글탱글해 보여서 주변 친구들한테도 추천하고 다닙니다.',
          date: '2026-05-24',
        },
      ]
    },
    {
      id: 37,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_19.jpg', 
      title: '올리브팜 에센셜 마스크팩 알로에',
      price: 500,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-02-28',
      sales: 6540,
      inventory: 340,
      likes: 1586,
      shares: 64,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_76.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_76.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_77.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_47.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'aloe_farm0',
          rating: 5,
          content: '피부 진정용으로 올리브팜 알로에 팩만 한 게 없어요! 햇빛 많이 받아서 얼굴 붉어지고 열감 올라왔을 때 냉장고에 넣어뒀다 붙이면 즉각적으로 시원해지면서 사악 가라앉습니다. 성분도 순해서 트러블 없이 아주 잘 맞아요.',
          date: '2026-06-18',
        },
        {
          reviewId: 2,
          userId: 'min_s0905',
          rating: 4,
          content: '끈적임 없이 산뜻한 워터 제형 에센스라 마무리가 깔끔해서 좋습니다. 시트도 부드럽게 잘 밀착되네요. 엄청 묵직한 영양감은 아니지만 가격 부담이 전혀 없어서 아침 세안 후나 저녁에 데일리 1일 1팩용 수분 충전용으로 딱입니다.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky1',
          rating: 3,
          content: '가볍게 수분 보충하고 진정시키는 용도로는 무난해요. 다만 악건성 피부인 제 기준에는 팩을 떼고 나면 수분이 금방 날아가는 느낌이 살짝 있어서, 흡수시킨 다음에 보습 크림을 도톰하게 꼭 덧발라줘야 당김이 없습니다.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'water_bomb88',
          rating: 5,
          content: '다이소 가성비 마스크팩 중에 완전 정착템이에요ㅋㅋ 메이크업 전에 5분에서 10분 정도만 붙여놔도 거칠었던 피부 결이 싹 잠재워져서 화장이 들뜨지 않고 진짜 찰떡같이 잘 먹습니다. 끈적이는 거 싫어하시는 분들께 강추해요.',
          date: '2026-08-22',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 포장도 깔끔합니다. 에센스 양도 넉넉하게 들어있어서 시트 붙이고 남은 건 목이랑 팔, 다리에도 슥슥 바르기 좋아요. 유수분 밸런스를 산뜻하게 잡아줘서 사계절 내내 부담 없이 쓰기 좋은 꿀템입니다.',
          date: '2026-07-09',
        },
      ]
    },
    {
      id: 38,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_20.jpg', 
      title: '셀더마데일리 트랜스포밍 아줄렌카밍 마스크 28g',
      price: 2000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-08-14',
      sales: 980,
      inventory: 112,
      likes: 9999,
      shares: 1061,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_78.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_78.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_79.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_48.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_49.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'azul_calming',
          rating: 5,
          content: '피부 뒤집어졌을 때 아줄렌 성분이 진짜 최고인데 이 팩 요물이네요! 28g이라 에센스가 뚝뚝 흐를 정도로 넉넉하게 들어있어서 팩 하는 내내 마르지 않고 엄청 촉촉해요. 붉은 기랑 자극받았던 피부가 금방 사악 가라앉습니다.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0914',
          rating: 4,
          content: '셀더마 제품답게 시트 밀착력이 장난 아니에요ㅋㅋ 얼굴 굴곡진 부위까지 빈틈없이 착 달라붙어 있어서 팩 붙이고 일상생활하기 너무 편합니다. 밀도 높은 에센스 제형이라 흡수시키고 나면 피부 장벽이 쫀쫀해지는 기분이에요.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '진정이랑 속건조 잡는 데는 확실히 효과가 좋은 마스크팩입니다. 다음 날까지 피부가 보들보들해요. 다만 유수분 밸런스가 묵직하게 잡히는 제형이라 그런지 복합성인 제 피부 기준에는 마무리감이 살짝 무겁고 유분기가 도는 느낌이 있어요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'celderma_fan',
          rating: 5,
          content: '다이소 꿀템 추천글 보고 반신반의하며 샀는데 퀄리티 진짜 역대급이네요ㅋㅋ 메이크업 전날 밤에 붙이고 자면 다음 날 베이스가 들뜸 없이 찰떡같이 잘 먹습니다. 은은하게 차오르는 진정 광채가 너무 맘에 들어서 대량으로 쟁여두려고요.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 포장 상태도 아주 깔끔합니다. 성분이 착해서 예민한 피부인데도 따갑거나 트러블 나는 것 전혀 없이 순하게 잘 맞았어요. 시트 떼어내고 남은 에센스로 목이랑 팔까지 수분 충전하기 넉넉해서 대만족입니다.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 39,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_21.jpg', 
      title: '본셉 레티놀 세럼 마스크 23g',
      price: 1000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-08-30',
      sales: 3420,
      inventory: 180,
      likes: 9099,
      shares: 195,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_80.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_80.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_81.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_50.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_51.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_52.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'retinol_pack',
          rating: 5,
          content: '본셉 레티놀 링클샷이랑 같이 쓰려고 구매했는데 마스크팩도 진짜 물건이네요ㅋㅋ 23g 세럼 에센스가 시트에 가득 스며들어 있어서 떼고 나면 피부가 즉각적으로 쫀쫀해지고 탱탱해지는 게 체감됩니다. 모공 관리용으로 최고예요.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0914',
          rating: 4,
          content: '푸석하고 탄력 떨어졌을 때 나이트 케어용으로 붙이기 딱 좋습니다. 세럼 제형이 밀도 높아서 흡수시키고 나면 다음 날 아침까지 피부 결이 엄청 매끄러워져 있어요. 다만 레티놀 성분이 있으니 낮보다는 밤에 쓰시는 걸 추천합니다.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '피부 탄력이 붙고 결이 맑아지는 효과는 분명히 있어요! 시트 밀착력도 우수합니다. 하지만 제 피부가 워낙 민감하고 얇은 편이라 그런지 처음에 붙였을 때 아주 미세하게 따끔한 느낌이 있었어요. 자극에 예민한 분들은 참고하셔요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'anti_aging7',
          rating: 5,
          content: '다이소 본셉 라인은 가성비가 진짜 미쳤다는 말밖에 안 나옵니다ㅋㅋ 고농축 레티놀 세럼 팩을 이 가격에 쓸 수 있다니 감동이에요. 일주일에 두 번씩 꾸준히 해주니까 나비존 모공도 묘하게 쫀쫀해진 것 같고 화장도 엄청 잘 먹어요.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 포장 상태도 찌그러짐 없이 깔끔합니다. 끈적이지 않고 쏙 흡수되는 촉촉한 세럼 타입이라 마음에 들어요. 유수분 밸런스를 탄탄하게 잡아줘서 안티에이징 홈케어 정착템으로 쟁여두고 쓰고 있습니다.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 40,
      category: ['beauty', 'organize'],
      image: process.env.PUBLIC_URL + '/images/beauty_22.jpg', 
      title: '립＆브러쉬 클리어 수납함 17분할',
      price: 3000,
      tags: ['택배', '픽업'],
      date: '2026-03-05',
      sales: 1890,
      inventory: 3,
      likes: 9999,
      shares: 531,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_82.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_82.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_83.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_53.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'clear_box95',
          rating: 5,
          content: '화장대 위에 굴러다니던 립스틱이랑 브러쉬들이 한방에 깔끔하게 정리돼서 속이 다 시원해요! 투명한 클리어 재질이라 어떤 컬러가 어디 있는지 한눈에 보이니까 아침에 화장할 때 시간도 단축되고 너무 편합니다.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '17분할이라 수납력이 생각보다 엄청 짱짱합니다ㅋㅋ 립스틱 꽂는 칸도 넉넉하고 긴 브러쉬나 아이라이너 세워두는 칸이 같이 있어서 실용적이에요. 아크릴이 두께감이 있어서 쉽게 깨질 것 같지 않고 튼튼하네요.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '정리 정돈용으로는 깔끔하고 가성비 아주 좋습니다. 화장대가 넓어졌어요. 다만 립스틱 넣는 칸 크기가 딱 기본 사이즈에 맞춰져 있어서 그런지, 요즘 나오는 뚱뚱하거나 독특한 디자인의 틴트 용기는 꽉 끼거나 안 들어가는 게 몇 개 있어서 아쉬워요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'beauty_room7',
          rating: 5,
          content: '다이소 정리함 중에 퀄리티 진짜 최고인 것 같아요ㅋㅋ 비싼 화장품 정리대 살 필요가 전혀 없습니다. 바닥 면 수평도 잘 맞고 흔들림 없이 안정적이에요. 투명하니까 화장대 인테리어도 해치지 않고 깔끔해서 대만족 중입니다.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 깨진 곳 하나 없이 안전하게 포장되어 왔습니다. 맨 뒷줄 긴 칸에는 브러쉬 세워두고 앞쪽에는 립제품 조르륵 꽂아두니 백화점 매장 진열대 부럽지 않네요ㅋㅋ 가성비 좋은 수납함 찾으시면 무조건 추천합니다.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 41,
      category: ['beauty', 'clean'],
      image: process.env.PUBLIC_URL + '/images/beauty_23.jpg', 
      title: '디즈니 주토피아 미니 포켓 물티슈 9매 X 4개입',
      price: 1000,
      tags: ['택배'],
      date: '2026-09-12',
      sales: 420,
      inventory: 2,
      likes: 310,
      shares: 7,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_84.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_84.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_85.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_54.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'zootopia_fan',
          rating: 5,
          content: '주토피아 주디랑 닉 캐릭터가 너무 귀여워서 소장 욕구 뿜뿜해요ㅋㅋ 9매씩 소포장 되어 있어서 미니백이나 바지 주머니에 쏙 들어가는 미니 사이즈라 외출할 때 하나씩 들고 다니기 가볍고 너무 편합니다.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '아이가 어린이집 갈 때 주머니에 쏙 넣어주려고 구매했습니다. 캐릭터가 예쁘니까 아이도 스스로 손 닦을 때 잘 꺼내 써요ㅋㅋ 4개입 묶음이라 가성비도 좋고 외출용 비상 물티슈로 가볍게 쓰기 딱입니다.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '디자인도 이쁘고 한 손에 쏙 들어오는 크기라 휴대성은 최고예요. 다만 미니 포켓용이라 그런지 원단 크기 자체가 일반 물티슈보다는 확실히 작고 얇은 편입니다. 가볍게 손가락 입가 닦아내는 용도로 쓰셔야 해요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'pocket_clean',
          rating: 5,
          content: '큰 물티슈 들고 다니기 무거웠는데 이거 쓰고 광명 찾았습니다ㅋㅋ 한 팩에 9장 들어있어서 하루 외출할 때 쓰고 버리면 딱 깔끔해요. 스티커 커버 접착력도 좋아서 다 쓸 때까지 마르지 않고 촉촉하게 유지됩니다.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 포장 상태도 찌그러짐 없이 안전하게 왔습니다. 4팩이 나란히 들어있어서 친구들이랑 하나씩 나눠 갖기도 좋아요. 향도 자극적이지 않고 은은해서 카페나 식당에서 손 닦는 용도로 아끼지 않고 씁니다.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 42,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_24.jpg', 
      title: '마미케어 바다포도 모공세럼 30ml',
      price: 5000,
      tags: ['택배'],
      date: '2026-06-25',
      sales: 1980,
      inventory: 42,
      likes: 9999,
      shares: 614,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_86.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_86.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_87.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_55.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'grape_pore0',
          rating: 5,
          content: '바다포도 스킨팩이랑 같이 쓰려고 샀는데 모공 쫀쫀해지는 데 효과 진짜 많이 봤어요! 제형이 끈적이지 않고 산뜻하게 쏙 스며들어서 아침에 화장하기 전에 발라도 밀림이 전혀 없습니다. 나비존 모공 결이 매끄러워진 게 보여서 대만족이에요.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '바다포도 추출물이랑 후코이단이 들어있어서 그런지 수분 충전도 되면서 부드럽게 탄력을 잡아주는 느낌이에요. 스포이드 타입이라 위생적으로 원하는 양만큼 덜어 쓰기 편합니다. 30ml라 금방 비울 것 같아서 다 쓰면 무조건 쟁여두려고요.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '피부 결이 정돈되고 유수분 밸런스를 깔끔하게 잡아주는 점은 마음에 들어요. 다만 모공 축소 드라마틱한 효과는 한 병을 다 비워봐야 알 것 같습니다ㅋㅋ 제 피부가 워낙 건조한 편이라 가을철에는 이거 바르고 수분크림을 듬뿍 얹어줘야 당김이 없어요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'sebum_zero7',
          rating: 5,
          content: '다이소 마미케어 라인 가성비 진짜 미쳤네요 진짜ㅋㅋ 유튜버 추천 영상 보고 반신반의하며 구하러 다녔는데 역시 품절 대란인 이유가 있습니다. 개기름 도는 유분기를 싹 잡아주니까 모공이 늘어지지 않고 타이트해지는 기분이 들어서 너무 좋아요.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 깨진 곳 없이 안전하게 왔습니다. 성분이 착해서 예민한 피부인데도 따갑거나 트러블 나는 것 전혀 없이 순하게 잘 맞았어요. 향도 강하지 않고 산뜻해서 더운 날씨나 환절기에 부담 없이 쓰기 좋은 모공 데일리 세럼입니다.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 43,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_25.jpg', 
      title: '모다모다 볼륨리페어 스칼프 헤어팩 90ml',
      price: 5000,
      tags: ['택배'],
      date: '2026-11-01',
      sales: 560,
      inventory: 4,
      likes: 758,
      shares: 18,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_88.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_88.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_89.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_56.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_57.jpg',
        process.env.PUBLIC_URL + '/images/detail/detailImg_58.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'volume_up95',
          rating: 5,
          content: '일반 헤어팩은 두피에 닿으면 떡질까 봐 조심스러웠는데, 이 제품은 스칼프 팩이라 두피까지 시원하게 마사지할 수 있어서 너무 좋아요! 감고 나서 드라이기로 말려보면 정수리 뿌리 볼륨이 확실히 탱글하게 살아나는 게 느껴집니다.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '모다모다 샴푸랑 세트로 쓰려고 구매했는데 모발 리페어 효과가 훌륭하네요. 푸석했던 머릿결이 차분해지면서도 가라앉지 않고 볼륨감이 유지돼서 신기해요ㅋㅋ 다만 90ml 용량이라 듬뿍 쓰다 보면 금방 비우게 될 것 같아 아쉬워요.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '두피가 가려울 때 케어용으로 사용하면 은은한 쿨링감이 돌아서 진정 효과는 만족스럽습니다. 모발도 적당히 부드러워져요. 하지만 극손상모인 제 기준에는 영양감이 약간 가벼운 느낌이라 모발 끝부분에는 오일을 덧발라주고 있어요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'scalp_care77',
          rating: 5,
          content: '다이소에서 모다모다 기능성 헤어팩을 이 가격에 살 수 있다니 감동입니다ㅋㅋ 제형이 쫀쫀해서 모발과 두피에 찹 밀착되고, 헹구고 나면 미끈거림 없이 산뜻하게 마무리돼요. 모발에 힘이 생겨서 덜 빠지는 기분이라 대만족 중입니다.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 튜브 타입이라 원하는 양만큼 깔끔하게 짜서 쓰기 편해요. 향이 자극적이지 않고 고급스러운 미용실 향이라 감고 나면 정수리 냄새도 싹 잡아줍니다. 유수분 밸런스가 좋아서 온 가족 데일리 팩으로 추천해요.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 44,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_26.jpg', 
      title: '[써니데이]바디홀릭 러브팝 솔리드 퍼퓸 키링밤 2.5g',
      price: 3000,
      tags: ['택배'],
      date: '2026-11-15',
      sales: 663,
      inventory: 4,
      likes: 250,
      shares: 4,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_90.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_90.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_91.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_59.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'perfume_key',
          rating: 5,
          content: '가방에 걸어두면 인형 키링처럼 너무 귀여운데 고체 향수까지 되는 꿀템이에요! 써니데이 향이 상큼하면서도 따뜻해서 데일리로 바르기 딱 좋습니다. 액체 향수처럼 깨질 걱정 없고 필요할 때마다 손끝으로 녹여서 손목에 슥 발라주면 은은하게 오래가요.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0822',
          rating: 4,
          content: '요즘 백팩에 키링 다는 게 유행이라 샀는데 디자인이 너무 키치하고 예쁩니다ㅋㅋ 2.5g이라 양이 아담해 보이지만 고체 밤 형태라 소량씩 바르다 보니 생각보다 오래 쓸 것 같아요. 은은한 살냄새처럼 자연스럽게 발색 및 발향 되어서 마음에 쏙 듭니다.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '디자인도 이쁘고 가방이나 파우치 고리에 달아두기 편리해서 휴대성은 최고입니다. 다만 액체 향수만큼 확 퍼지는 발향력을 기대하시면 조금 아쉬울 수 있어요. 귀 뒤나 손목에 가까이 대야 은은하게 풍기는 은근한 비누 향 스타일입니다.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'body_holic7',
          rating: 5,
          content: '다이소 바디홀릭 라인 가성비 진짜 미쳤네요 진짜ㅋㅋ 러브팝 시리즈 중에 써니데이 향이 제일 호불호 없고 상큼해서 기분 전환용으로 완전 최고입니다. 끈적이지 않고 부드럽게 멜팅되어서 목선이나 쇄골뼈 쪽에 가볍게 레이어링하기 너무 좋아요.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 고리 부분도 단단해서 쉽게 떨어질 염려가 없어 안심이에요. 친구들 생일날 가볍게 선물해 주기도 너무 좋은 디자인입니다. 알코올 향 찌르는 거 싫어하시는 분들이 부담 없이 살 냄새처럼 연출하기 좋은 고체 퍼퓸 밤이에요.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 45,
      category: 'clean',
      image: process.env.PUBLIC_URL + '/images/clean_06.jpg', 
      title: '도톰한 더블 파일 세면 타월 40 X 80cm',
      price: 3000,
      tags: ['택배'],
      date: '2026-10-30',
      sales: 599,
      inventory: 123,
      likes: 314,
      shares: 7,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_92.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_92.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_93.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_60.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'towel_love0',
          rating: 5,
          content: '더블 파일이라 그런지 확실히 일반 다이소 수건들보다 훨씬 도톰하고 푹신해요! 세수하고 얼굴 닦을 때 닿는 감촉이 너무 부드럽고, 머리 감고 말릴 때도 물기를 사악 흡수해 줘서 드라이 시간이 줄었습니다. 호텔 수건 부럽지 않네요.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0912',
          rating: 4,
          content: '40x80cm 정사이즈라 욕실 수건장에 차곡차곡 예쁘게 잘 들어갑니다. 면 100%라 피부 자극도 없고 가성비 최고네요. 다만 첫 세탁할 때는 먼지가 좀 나올 수 있으니 섬유유연제 쓰지 말고 물로만 단독 세탁 먼저 하시는 걸 추천합니다.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '두께감도 톡톡하고 크기도 무난해서 데일리 세면 타월로 쓰기 좋습니다. 다만 건조기 안 돌리고 자연 건조했더니 처음만큼의 퐁신퐁신한 볼륨감은 살짝 죽는 느낌이 있어요. 건조기 돌려서 쓰면 훨씬 도톰해지고 좋을 것 같아요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'clean_house7',
          rating: 5,
          content: '집에 있는 낡은 수건들 싹 교체하려고 대량 주문했는데 퀄리티 진짜 마음에 쏙 듭니다ㅋㅋ 마감 봉제선도 풀린 곳 없이 짱짱하고 물 빠짐이나 변형도 없네요. 두께가 묵직해서 한 장만 써도 긴 머리 물기 닦아내기 충분합니다.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 포장 상태도 아주 깔끔합니다. 그레이 색상으로 샀는데 욕실 인테리어랑도 세련되게 잘 어울려서 예뻐요. 톡톡하고 먼지 날림 적은 고품질 수건이라 가성비 좋게 수건 교체용으로 적극 추천하는 아이템입니다.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 46,
      category: 'sports',
      image: process.env.PUBLIC_URL + '/images/sports_01.jpg', 
      title: '실리콘 캐리어 바퀴 커버 8개입 대형',
      price: 1000,
      tags: ['택배'],
      date: '2026-09-28',
      sales: 356,
      inventory: 210,
      likes: 565,
      shares: 18,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_94.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_94.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_95.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_61.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'travel_go99',
          rating: 5,
          content: '캐리어 끌고 다닐 때 드르륵거리는 소음이 심해서 스트레스였는데 이거 끼우자마자 소리가 확 줄어들었어요! 실리콘 재질이라 보도블록 지나갈 때 진동도 많이 흡수해 줍니다. 8개입이라 더블 휠 바퀴 4개에 딱 맞게 풀커버할 수 있어서 최고예요.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '대형 사이즈라 제 28인치 대형 캐리어 바퀴에 짱짱하게 잘 늘어나서 맞춘 것처럼 들어갑니다. 바퀴 마모되는 것도 막아주고 여행 갔다 와서 커버만 쏙 빼서 씻으면 되니까 위생적이에요. 다만 실리콘이 뻑뻑해서 처음 끼울 땐 손가락이 좀 아파요ㅋㅋ',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '소음 방지랑 바퀴 보호 효과는 확실히 뛰어납니다. 굴릴 때 느낌이 엄청 부드러워져요. 다만 대형 규격이다 보니 미니 캐리어나 얇은 바퀴에는 겉돌거나 헐거울 수 있으니, 구매하기 전에 본인 캐리어 바퀴 지름을 꼭 확인해 보고 사셔야 할 것 같습니다.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'carrier_clean',
          rating: 5,
          content: '다이소 여행 꿀템 중에 가성비 진짜 최고인 것 같아요ㅋㅋ 공항이나 호텔 실내 바닥에서 캐리어 밀 때 소리가 아예 안 날 정도로 부드럽습니다. 실리콘 두께가 톡톡하고 내구성이 좋아서 쉽게 찢어지지 않고 오랫동안 잘 쓸 것 같아요. 무조건 사세요!',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 빠르게 잘 받았고 색상도 튀지 않는 깔끔한 블랙이라 장착해도 이질감 없이 무난하게 잘 어울립니다. 커버 안쪽에 밀림 방지 돌기가 있는지 쉽게 벗겨지지 않고 굳건하게 잘 고정되어 있네요. 가성비 좋은 캐리어 소품으로 적극 추천합니다.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 47,
      category: 'beauty',
      image: process.env.PUBLIC_URL + '/images/beauty_28.jpg', 
      title: '아치형 스탠드 거울 중형',
      price: 2000,
      tags: ['택배'],
      date: '2026-09-14',
      sales: 782,
      inventory: 496,
      likes: 155,
      shares: 2,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_96.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_96.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_97.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_62.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'mirror_room',
          rating: 5,
          content: '화장대 위에 올려두려고 샀는데 아치형이라 인테리어 소품처럼 너무 감성적이고 예뻐요! 중형 사이즈라 얼굴부터 어깨 라인까지 시원하게 잘 보여서 메이크업할 때 거울 보기 아주 편합니다. 가성비 최고예요.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '동글동글한 아치 디자인이 방 분위기를 화사하게 만들어 주네요ㅋㅋ 거울 왜곡도 전혀 없고 프레임 마감도 깔끔합니다. 뒷면 스탠드 다리가 튼튼해서 선반 위에 올려놔도 흔들림 없이 안정적으로 잘 서 있습니다.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '디자인도 이쁘고 크기도 화장대 거울로 쓰기 딱 적당해서 잘 쓰고 있어요. 다만 스탠드 각도 조절이 자유롭게 되는 형태는 아니라서 놓는 위치에 따라 눈높이를 맞추려면 바닥에 책을 한 권 고여놔야 각도가 맞네요ㅋㅋ',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'interior_fan',
          rating: 5,
          content: '다이소 거울 중에 디자인 퀄리티 진짜 제일 마음에 쏙 듭니다ㅋㅋ 오늘의집에서 비싸게 팔던 감성 거울이랑 비교해도 전혀 뒤처지지 않아요. 깨끗하게 닦아서 침대 옆 협탁에 올려두니 방 무드가 확 살아서 대만족 중입니다.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 아주 빠르고 거울 깨진 곳이나 흠집 하나 없이 안전하게 포장되어 잘 도착했습니다. 프레임 컬러가 방 인테리어랑 모던하게 잘 어우러지네요. 가성비 좋게 방 꾸미기나 메이크업용 거울 찾으시는 분들께 추천합니다.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 48,
      category: ['house', 'interior'],
      image: process.env.PUBLIC_URL + '/images/interior_02.jpg', 
      title: '전통의멋 자카드 발매트 산',
      price: 5000,
      tags: ['택배'],
      date: '2026-10-14',
      sales: 954,
      inventory: 156,
      likes: 678,
      shares: 10,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_98.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_98.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_99.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_63.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'jacquard_love',
          rating: 5,
          content: '현관문 앞에 깔아두려고 샀는데 산 모양 자카드 패턴이 엄청 고급스럽고 중후한 멋이 있네요! 73x46cm로 크기도 넉넉해서 한 발짝 디딜 때 안정감 있고 부드러워요. 부모님도 보시더니 다이소 제품 안 같고 이쁘다고 칭찬하셨습니다.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '동양적인 인테리어 소품 좋아해서 대만족 중입니다ㅋㅋ 올이 쉽게 풀리지 않는 짱짱한 자카드 원단이라 내구성도 좋아 보여요. 뒷면에 밀림 방지 처리가 되어 있어서 거실 타일 바닥 위에 깔아둬도 미끄러지지 않고 잘 고정되어 있네요.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '전통적인 디자인도 마음에 들고 거실용 발매트로 쓰기 무난합니다. 다만 일반 극세사나 수건 재질의 발매트처럼 물기를 순식간에 흡수하는 편은 아니라서, 욕실 앞 발매트보다는 현관이나 주방, 침대 밑 포인트 매트로 쓰는 게 훨씬 적합할 것 같아요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'traditional_fan',
          rating: 5,
          content: '다이소 전통의멋 시리즈 중에 퀄리티 진짜 최고로 잘 빠진 것 같아요ㅋㅋ 프레임 자수도 꼼꼼하고 산 일러스트가 차분한 톤이라 집안 분위기가 엄청 아늑하고 클래식해졌어요. 먼지도 잘 안 타고 오염물 묻어도 청소기 돌리면 슥 잘 닦여서 편합니다.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 아주 빠르고 울거나 변형된 곳 없이 튼튼한 상태로 안전하게 잘 왔습니다. 두께감도 적당해서 발 걸림이 없고 가성비 아주 훌륭한 자카드 매트네요. 고풍스러운 집안 포인트 인테리어용 매트 찾으시는 분들께 무조건 추천합니다.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 49,
      category: ['house', 'interior'],
      image: process.env.PUBLIC_URL + '/images/interior_03.jpg', 
      title: '그레이 화이트 퍼즐 매트',
      price: 5000,
      tags: ['택배', '픽업'],
      date: '2026-11-22',
      sales: 26900,
      inventory: 3,
      likes: 2738,
      shares: 371,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_100.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_100.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_101.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_64.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'puzzle_home',
          rating: 5,
          content: '그레이랑 화이트 색상이 섞여 있어서 지그재그로 조립해 놓으니까 방이 너무 화사하고 세련돼 보여요! 10개입이라 은근히 넓은 면적이 커버되고, 이음새 결합도 들뜸 없이 촥 잘 맞아서 먼지 낄 염려가 적어 대만족입니다.',
          date: '2026-06-25',
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '아이가 거실에서 장난감 떨어뜨릴 때 쿵쿵 소리 나는 것 때문에 층간소음 방지용으로 깔았는데 쿠션감이 폭신해서 마음이 한결 편해요ㅋㅋ 테두리 마감 피스도 같이 들어있어서 가장자리를 깔끔하게 정리하기 아주 좋습니다.',
          date: '2026-09-12',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '조립하기도 엄청 직관적이고 가위나 칼로 공간에 맞게 슥슥 잘 잘려서 맞춤 시공하기 편합니다. 다만 매트 두께가 아주 두꺼운 편은 아니라서 본격적인 격렬한 운동용 매트보다는, 가벼운 발걸음 소음 유발 방지나 반려견 미끄럼 방지용으로 적당해요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'clean_mat22',
          rating: 5,
          content: '다이소 퍼즐 매트 가성비 진짜 역대급이네요ㅋㅋ 음료수나 오염물이 묻어도 그냥 물티슈로 슥 닦아내거나 심하면 오염된 칸만 쏙 빼서 물로 씻으면 되니까 관리가 너무 편해요. 냄새도 안 나고 단단해서 오래 쓸 것 같습니다.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 아주 빠르고 찌그러지거나 찍힌 곳 없이 깔끔하게 래핑되어 잘 왔습니다. 침대 밑이나 서재 책상 아래 공간에 깔아두니 발바닥도 안 차갑고 아늑해서 좋아요. 가성비 좋은 홈 인테리어용 퍼즐 매트로 강력 추천합니다.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 50,
      category: ['house', 'interior'],
      image: process.env.PUBLIC_URL + '/images/interior_04.jpg', 
      title: '이중 펠트 패턴 의자 발 커버',
      price: 1000,
      tags: ['택배'],
      date: '2026-12-06',
      sales: 135,
      inventory: 364,
      likes: 61,
      shares: 1,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_102.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_102.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_103.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_65.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'happy_home33',
          rating: 5,
          content: '의자 다리에 양말 신겨놓은 것 같아서 볼 때마다 너무 귀여워요ㅋㅋ 이중 펠트라 바닥 긁힘 걱정도 완전히 사라졌고, 의자를 넣고 뺄 때 부드럽게 미끄러지듯 움직여서 층간소음 방지에 최고입니다.',
          date: '2026-02-17',
        },
        {
          reviewId: 2,
          userId: 'yoon_sm04',
          rating: 4,
          content: '집 가구 톤이랑 잘 어울리는 잔잔한 패턴이라 인테리어를 해치지 않아 맘에 듭니다. 신축성이 생각보다 좋아서 사각형 의자 다리인데도 각진 부분까지 짱짱하게 잘 감싸주네요. 가격 대비 대만족입니다.',
          date: '2026-08-29',
        },
        {
          reviewId: 3,
          userId: 'single_life9',
          rating: 3,
          content: '바닥 스크래치 안 나고 소음 잡아주는 기능 자체는 훌륭합니다. 다만 한 달 정도 매일 의자를 험하게 썼더니 내부에 먼지나 머리카락이 조금 끼는 편이라 가끔 한 번씩 벗겨서 털어내며 사용하고 있어요.',
          date: '2026-05-11',
        },
        {
          reviewId: 4,
          userId: 'silent_room',
          rating: 5,
          content: '붙이는 패드는 맨날 밀리고 찐득해져서 짜증 났었는데 이건 그냥 쏙 끼우면 끝이라 신세계네요ㅋㅋ 직물 조직이 쫀쫀하고 튼튼해서 쉽게 늘어나거나 벗겨지지 않고 단단하게 고정되어 있어서 아주 오래 쓸 것 같아요.',
          date: '2026-09-02',
        },
        {
          reviewId: 5,
          userId: 'choi_dh08',
          rating: 4,
          content: '배송 아주 빠르게 잘 받았고 포장도 군더더기 없이 깔끔하게 왔습니다. 4개입이라 의자 하나에 딱 맞춤이네요. 펠트 부분이 두꺼워서 소음을 아주 완벽하게 잘 차단해 줍니다. 가성비 좋은 인테리어 소품으로 강추해요.',
          date: '2026-03-24',
        },
      ]
    },
    {
      id: 51,
      category: ['house', 'interior'],
      image: process.env.PUBLIC_URL + '/images/interior_05.jpg', 
      title: '삼각 등받이 쿠션',
      price: 5000,
      tags: ['택배'],
      date: '2026-12-08',
      sales: 238,
      inventory: 153,
      likes: 646,
      shares: 11,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_104.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_104.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_105.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_66.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'cushion_rest',
          rating: 5,
          content: '침대 헤드에 기대서 폰 하거나 책 볼 때 허리가 늘 아팠는데 이 삼각 쿠션 대고 나니까 신세계예요! 각도가 허리를 탄탄하게 지지해 줘서 오래 기대어 있어도 뻐근함이 전혀 없습니다. 크기도 부담스럽지 않고 딱 좋아요.',
          date: '2026-03-14',
        },
        {
          reviewId: 2,
          userId: 'min_s0922',
          rating: 4,
          content: '소파 위나 방바닥에 툭 두고 기대기 아주 실용적인 쿠션입니다ㅋㅋ 솜이 엄청 빵빵하게 들어있어서 쉽게 꺼지지 않고 푹신해요. 컬러감도 차분해서 방 인테리어를 해치지 않고 모던하게 잘 어우러져 마음에 듭니다.',
          date: '2026-08-20',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '허리 받쳐주는 삼각 형태는 참 잘 나온 것 같아요. 다만 가로 세로 38x36cm라 체구가 큰 남성분들이 등 전체를 완전히 기대기에는 약간 아담하게 느껴질 수 있어서, 가벼운 허리 받침용 베개로 생각하시면 딱 맞습니다.',
          date: '2026-04-11',
        },
        {
          reviewId: 4,
          userId: 'bed_comfort',
          rating: 5,
          content: '다이소 리빙 템 중에 가성비 진짜 역대급으로 만족스러워요ㅋㅋ 원단 재질도 부드러워서 피부에 닿는 감촉이 좋고, 똑바로 세우면 등받이로 쓰고 눕히면 다리 붓기 빼는 다리 베개로도 쓸 수 있어서 완전 멀티 꿀템입니다.',
          date: '2026-09-02',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 아주 빠르고 솜 죽은 곳 없이 빵빵하게 래핑되어 잘 도착했습니다. 지퍼가 달려있어서 나중에 커버만 쏙 벗겨서 따로 세탁할 수 있으니 위생적이고 관리가 편하네요. 가성비 좋은 등받이 쿠션 찾으시면 추천합니다.',
          date: '2026-06-12',
        },
      ]
    },
    {
      id: 52,
      category: ['conven', 'organize'],
      image: process.env.PUBLIC_URL + '/images/organize_06.jpg', 
      title: '우드 핸들 메쉬 사각 바구니',
      price: 3000,
      tags: ['택배', '픽업'],
      date: '2026-06-08',
      sales: 1958,
      inventory: 215,
      likes: 8430,
      shares: 157,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_106.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_106.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_107.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_67.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'wood_mesh0',
          rating: 5,
          content: '화장대 위에 굴러다니던 향수랑 소품들 담아두려고 샀는데 우드 핸들이 포인트가 돼서 너무 감성적이고 이뻐요! 메쉬 재질이라 안이 살짝 비쳐서 물건 찾기도 편하고, 주방 양념통 정리용으로 하나 더 사고 싶네요.',
          date: '2026-05-14',
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '거실 테이블 위 잡동사니 정리함으로 쓰고 있습니다ㅋㅋ 철제 메쉬라 아주 튼튼하고 우드 손잡이 그립감도 부드럽고 좋아요. 다만 바닥 면이 철제라 유리 테이블 위에 놓을 땐 긁히지 않게 조심히 내려놓아야 할 것 같아요.',
          date: '2026-09-02',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '디자인은 깔끔하고 인테리어용 바구니로 가성비 참 좋습니다. 방 분위기가 정돈돼 보여요. 사각 형태라 수납하기도 직관적인데, 메쉬 구멍 크기가 아주 미세하진 않아서 아주 작은 실핀이나 샘플 화장품은 틈새로 빠질 수 있으니 참고하세요.',
          date: '2026-04-11',
        },
        {
          reviewId: 4,
          userId: 'interior_basket',
          rating: 5,
          content: '다이소 리빙 수납함 중에 디자인 최고로 마음에 쏙 듭니다ㅋㅋ 오늘의집에서 비싸게 팔던 철제 우드 바구니랑 비교해도 전혀 퀄리티 뒤처지지 않아요. 통풍이 잘되는 구조라 욕실 앞 수건 보관함이나 감자, 양파 같은 구황작물 담아두기에도 찰떡입니다.',
          date: '2026-08-19',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 아주 빠르고 찌그러지거나 스크래치 난 곳 없이 안전하게 잘 왔습니다. 화이트 철제에 우드 조합이라 모던하고 깔끔해서 집안 어디에 툭 올려두어도 다 잘 어울려요. 가성비 좋은 감성 수납 바구니 찾으시면 무조건 추천합니다.',
          date: '2026-07-05',
        },
      ]
    },
    {
      id: 53,
      category: ['conven', 'organize'],
      image: process.env.PUBLIC_URL + '/images/organize_07.jpg', 
      title: '틈새 수납 정리대',
      price: 3000,
      tags: ['택배', '픽업'],
      date: '2026-06-08',
      sales: 9521,
      inventory: 168,
      likes: 9999,
      shares: 367,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_108.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_108.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_109.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_68.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'clean_house9',
          rating: 5,
          content: '냉장고랑 씽크대 사이에 15cm 정도 애매한 공간이 남아서 구매했는데 맞춤 가구처럼 쏙 들어가요! 뒤죽박죽 굴러다니던 생수병이랑 양념통들이 한방에 깔끔하게 정리돼서 주방이 훨씬 넓어졌습니다. 가성비 최고예요.',
          date: '2026-02-14',
        },
        {
          reviewId: 2,
          userId: 'yoon_sm04',
          rating: 4,
          content: '세탁기 옆 틈새 공간에 두고 세제랑 섬유유연제 보관하는 용도로 쓰고 있습니다ㅋㅋ 슬림한데도 은근히 수납력이 짱짱하네요. 바퀴가 달려있어서 부드럽게 밀고 당기며 물건 꺼내기 아주 수월하고 편리합니다.',
          date: '2026-08-29',
        },
        {
          reviewId: 3,
          userId: 'single_life9',
          rating: 3,
          content: '조립하기도 엄청 쉽고 공간 활용성 면에서는 아주 만족스럽습니다. 다만 슬림하고 높이가 있는 편이라 맨 위 칸에 무거운 대용량 액체 세제 같은 걸 몰아서 올려두면 밀고 당길 때 아주 살짝 흔들리는 감이 있으니 무게 중심을 잘 잡아야 해요.',
          date: '2026-05-11',
        },
        {
          reviewId: 4,
          userId: 'silent_room',
          rating: 5,
          content: '다이소 수납 가구 중에 진짜 아이디어 꿀템인 것 같아요ㅋㅋ 화장실 변기 옆 남는 공간에 두고 수건이랑 휴지 쟁여두는 용도로 쓰는데 지저분한 게 안 보이니까 욕실이 너무 깔끔해졌어요. 플라스틱 재질이라 물때 끼어도 청소하기 쉽습니다.',
          date: '2026-09-02',
        },
        {
          reviewId: 5,
          userId: 'choi_dh08',
          rating: 4,
          content: '배송 아주 빠르고 부품 누락이나 부러진 곳 없이 안전하게 잘 도착했습니다. 끼워 맞추기만 하면 되는 방식이라 도구 없이 5분 만에 뚝딱 조립했네요ㅋㅋ 유행 안 타는 깔끔한 화이트라 집안 어디에 두어도 인테리어를 해치지 않아 좋습니다.',
          date: '2026-03-24',
        },
      ]
    },
    {
      id: 54,
      category: ['conven', 'kitchen'],
      image: process.env.PUBLIC_URL + '/images/kitchen_08.jpg', 
      title: '스텐 바트 2L',
      price: 5000,
      tags: ['택배', '픽업', '오늘'],
      date: '2026-05-10',
      sales: 36994,
      inventory: 3,
      likes: 9999,
      shares: 279,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_110.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_110.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_111.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_69.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'cook_star85',
          rating: 5,
          content: '스텐 바트 필요해서 샀는데 요리할 때 진짜 편해요! 2L라 용량도 넉넉해서 고기 재워두거나 야채 씻어서 물기 뺄 때 아주 유용합니다. 스텐이라 위생적이고 양념 물들 걱정 없어서 대만족입니다.',
          date: '2026-04-18',
        },
        {
          reviewId: 2,
          userId: 'jsh_920',
          rating: 4,
          content: '냉장고 식재료 정리용으로 깔끔하고 좋습니다. 스텐이라 냉기가 확 전달돼서 그런지 재료들이 더 신선하게 오래 보관되는 느낌이에요ㅋㅋ 처음 쓸 때 연마제 제거 작업은 꼼꼼히 해주셔야 합니다.',
          date: '2026-08-05',
        },
        {
          reviewId: 3,
          userId: 'pure_kitchen',
          rating: 3,
          content: '제품 자체는 단단하고 마감도 깔끔해서 쓸만합니다. 가격 대비 가성비는 아주 좋아요. 다만 전용 뚜껑이 포함되어 있지 않은 단품 구성이라 랩을 씌우거나 해야 해서 뚜껑도 같이 팔면 훨씬 좋았을 것 같아요.',
          date: '2026-01-22',
        },
        {
          reviewId: 4,
          userId: 'morning_m0m',
          rating: 5,
          content: '다이소 스텐 제품 중에 가성비 최고네요 진짜ㅋㅋ 베이킹할 때나 튀김 요리할 때 빵가루 묻히는 트레이로 쓰기 사이즈가 완전 딱입니다. 두께감도 제법 묵직하고 쉽게 찌그러지지 않을 것 같아 오래 쓰겠어요.',
          date: '2026-07-31',
        },
        {
          reviewId: 5,
          userId: 'single_chef',
          rating: 4,
          content: '배송 아주 빠르고 스크래치 하나 없이 안전하게 포장되어 잘 왔습니다. 플라스틱 통 쓰다가 위생적인 스텐으로 바꾸니까 속이 다 시원하네요. 적당한 깊이감에 다용도로 막 쓰기 좋은 2리터 바트라 강력 추천합니다.',
          date: '2026-05-14',
        },
      ]
    },
    {
      id: 55,
      category: ['conven', 'kitchen'],
      image: process.env.PUBLIC_URL + '/images/kitchen_09.jpg', 
      title: '유청 분리기',
      price: 2000,
      tags: ['택배', '픽업'],
      date: '2026-01-12',
      sales: 13582,
      inventory: 202,
      likes: 9999,
      shares: 1400,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_112.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_112.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_113.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_70.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'yogurt_love',
          rating: 5,
          content: '집에서 그릭요거트 만들어 먹으려고 샀는데 진짜 꾸덕하게 잘 만들어져요! 유청이 아래로 사악 빠지는 게 눈으로 보이니까 속이 다 시원합니다. 면포에 짜느라 손목 아플 일 없어서 삶의 질이 수직 상승했습니다ㅋㅋ',
          date: '2026-03-12',
        },
        {
          reviewId: 2,
          userId: 'min_s0819',
          rating: 4,
          content: '스프링이랑 누름판이 짱짱해서 압착이 아주 잘 되네요. 메쉬망도 촘촘해서 요거트가 새어 나가지 않고 깔끔하게 유청만 분리됩니다. 다만 대용량 플레인 요거트 한 통을 다 넣기에는 살짝 넘칠 수 있어서 나눠서 해야 해요.',
          date: '2026-08-20',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '가성비로 홈카페 그릭요거트 만들기엔 무난하고 좋습니다. 디자인도 깔끔해요. 다만 메쉬망 사이사이에 낀 요거트 잔여물 세척할 때 꼼꼼하게 솔질을 해줘야 해서, 설거지할 때 조금 신경 써야 하는 번거로움은 있네요.',
          date: '2026-05-14',
        },
        {
          reviewId: 4,
          userId: 'greek_master',
          rating: 5,
          content: '다이소 꿀템 중에 진짜 만족도 최고입니다ㅋㅋ 시중에 파는 비싼 유청분리기 살 필요가 전혀 없네요. 냉장고에 하루 정도 넣어두면 크림치즈 질감처럼 묵직하게 완성되는데 꿀이랑 과일 얹어 먹으면 카페 부럽지 않아요. 강추합니다!',
          date: '2026-09-02',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 아주 빠르고 부품 깨진 곳 없이 안전하게 잘 왔습니다. 플라스틱 통이 투명해서 유청 차오르는 걸 바로 확인할 수 있어 편하네요. 부품들 다 분리돼서 위생적으로 세척 및 건조가 가능하니까 아주 만족스럽습니다.',
          date: '2026-02-27',
        },
      ]
    },
    {
      id: 56,
      category: ['popular', 'beauty'],
      image: process.env.PUBLIC_URL + '/images/beauty_29.jpg', 
      title: '일본제 타나베 장인 칫솔',
      price: 2000,
      tags: ['택배', '픽업'],
      date: '2026-03-28',
      sales: 2610,
      inventory: 5,
      likes: 3925,
      shares: 148,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_114.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_114.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_115.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_71.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'dental_care8',
          rating: 5,
          content: '칫솔 헤드가 작고 아담해서 입안 깊숙한 어금니 안쪽 틈새까지 쏙 들어가서 진짜 개운하게 잘 닦여요! 장인 칫솔이라고 해서 기대했는데 잇몸에 자극도 없고 미세모가 쫀쫀해서 치석이 싹 씻겨 나가는 기분입니다.',
          date: '2026-03-14',
        },
        {
          reviewId: 2,
          userId: 'min_s0822',
          rating: 4,
          content: '평소에 사랑니나 어금니 쪽 칫솔질하기 힘들었는데 이 제품 쓰고 양치가 훨씬 수월해졌습니다ㅋㅋ 손에 쥐었을 때 그립감도 착 감겨서 힘 조절하기 편해요. 다만 일반 큰 칫솔 쓰시던 분들은 헤드가 좀 작게 느껴질 수 있어요.',
          date: '2026-08-20',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '어금니 집중 케어용으로는 헤드 크기도 딱 좋고 모질도 탄력 있어서 세정력은 아주 괜찮은 편입니다. 다만 미세모가 생각보다 조금 단단한 편이라 잇몸이 많이 약하시거나 상처가 자주 나시는 분들은 부드럽게 살살 쓰셔야 해요.',
          date: '2026-05-11',
        },
        {
          reviewId: 4,
          userId: 'clean_teeth7',
          rating: 5,
          content: '다이소에서 이 타나베 장인 칫솔 가성비 좋게 살 수 있어서 너무 좋아요ㅋㅋ 다른 칫솔 쓸 때는 어금니 뒤쪽이 덜 닦여서 찝찝했는데 이건 구석구석 꼼꼼하게 밀착되니까 양치 후 스케일링한 것처럼 매끈매끈해서 무조건 쟁여둡니다.',
          date: '2026-09-02',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 아주 빠르고 파손 없이 깔끔하게 잘 왔습니다. 일본제라 그런지 칫솔모 심어진 마감이나 내구성이 훌륭하네요. 며칠 썼는데도 모가 쉽게 벌어지지 않고 단단하게 유지돼서 오랫동안 위생적으로 잘 쓸 것 같습니다.',
          date: '2026-02-27',
        },
      ]
    },
    {
      id: 57,
      category: ['popular', 'organize'],
      image: process.env.PUBLIC_URL + '/images/organize_08.jpg', 
      title: '고무나무 1칸 다용도 꽂이',
      price: 2000,
      tags: ['택배', '픽업'],
      date: '2026-05-16',
      sales: 324,
      inventory: 125,
      likes: 273,
      shares: 8,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_116.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_116.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_117.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_72.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'wood_mood2',
          rating: 5,
          content: '거실 테이블 위에 두고 리모컨이랑 안경 꽂아두는 용도로 쓰는데 너무 깔끔하고 예뻐요! 고무나무 원목이라 따뜻한 느낌이 들고, 민무늬라 군더더기 없이 심플해서 인테리어 소품으로 아주 찰떡입니다.',
          date: '2026-03-08',
        },
        {
          reviewId: 2,
          userId: 'desk_clean0',
          rating: 4,
          content: '책상 위 펜꽂이용으로 샀는데 생각보다 수납 공간이 넉넉해서 가위나 칼까지 다 들어갑니다ㅋㅋ 원목 무게감이 적당히 묵직해서 긴 물건을 꽂아놔도 앞으로 넘어지지 않고 안정감 있게 잘 지지해 주네요.',
          date: '2026-08-14',
        },
        {
          reviewId: 3,
          userId: 'single_life1',
          rating: 3,
          content: '디자인도 무난하고 가성비 훌륭한 나무 정리대입니다. 다만 원목 특성상 나뭇결이나 톤이 제품마다 조금씩 다른 것 같아요. 제 건 한쪽 면에 옹이가 살짝 크게 들어가서 아쉽지만 뒷면으로 돌려놓고 쓰니까 쓸만해요.',
          date: '2026-05-19',
        },
        {
          reviewId: 4,
          userId: 'nature_room',
          rating: 5,
          content: '다이소 고무나무 시리즈 중에 마감 퀄리티 진짜 제일 깔끔하게 잘 빠진 것 같아요ㅋㅋ 모서리 부분도 둥글게 샌딩 처리가 잘 되어 있어서 거칠지 않고 부드럽습니다. 화장대 위에 브러쉬랑 빗 정리대로 쓰기에도 딱이에요.',
          date: '2026-09-15',
        },
        {
          reviewId: 5,
          userId: 'kim_sh092',
          rating: 4,
          content: '배송 아주 빠르고 찍히거나 갈라진 곳 없이 안전하게 래핑되어 잘 도착했습니다. 주방에 티스푼이나 포크 같은 디저트 커트러리 꽂아두는 용도로 쓰고 있는데 카페 감성 나고 이쁘네요. 가격 부담 없어서 추천합니다.',
          date: '2026-02-22',
        },
      ]
    },
    {
      id: 58,
      category: ['popular', 'kitchen'],
      image: process.env.PUBLIC_URL + '/images/kitchen_10.jpg', 
      title: '스테인리스 비닐봉지 스탠드',
      price: 2000,
      tags: ['택배', '오늘'],
      date: '2026-06-07',
      sales: 358,
      inventory: 205,
      likes: 9999,
      shares: 1251,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_118.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_118.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_119.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_73.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'happy_cooking',
          rating: 5,
          content: '싱크대 한쪽에 세워두고 요리하면서 나오는 비닐이나 쓰레기 바로바로 던져 넣기 너무 편해요! 스텐 재질이라 물이 튀어도 안심이고 위생적입니다. 공간도 많이 안 차지하고 주방 필수템이 되었어요.',
          date: '2026-01-18',
        },
        {
          reviewId: 2,
          userId: 'choi_0911',
          rating: 4,
          content: '안 쓸 때는 납작하게 접어서 싱크대 문 하단 서랍에 쏙 넣어두면 되니까 보관이 진짜 용이하네요ㅋㅋ 비닐봉지 고정용 고무 캡 덕분에 봉지가 흘러내리지 않아서 아주 탄탄하게 잘 고정됩니다.',
          date: '2026-07-02',
        },
        {
          reviewId: 3,
          userId: 'user_8832',
          rating: 3,
          content: '가성비 무난하고 디자인도 군더더기 없이 깔끔합니다. 가볍게 식탁용 미니 쓰레기통 대용으로 봉지 씌워 쓰기엔 딱이에요. 다만 너무 무겁거나 부피가 큰 쓰레기를 꾹꾹 눌러 담으면 스탠드가 살짝 뒤집어질 수 있어요.',
          date: '2026-04-14',
        },
        {
          reviewId: 4,
          userId: 'clean_house00',
          rating: 5,
          content: '다이소에서 산 주방 꿀템 중에 제일 맘에 들어요ㅋㅋ 배달 시켜 먹고 남은 비닐봉지들 크기 상관없이 대충 걸어놔도 고정이 척척 잘 됩니다. 구조가 직관적이고 튼튼해서 부러질 염려 없이 평생 쓸 것 같아요.',
          date: '2026-08-23',
        },
        {
          reviewId: 5,
          userId: 'kim_jm94',
          rating: 4,
          content: '배송 빠르게 잘 받았고 마감 처리도 훌륭합니다. 스텐이라 오염물 묻어도 주방세제로 대충 슥 닦아내면 새것처럼 깨끗해져서 세척이 편해요. 가격 부담 없이 주방 싱크대 주변 깔끔하게 정리하기 최적의 아이템입니다.',
          date: '2026-06-09',
        },
      ]
    },
    {
      id: 59,
      category: ['popular', 'clean'],
      image: process.env.PUBLIC_URL + '/images/clean_07.jpg', 
      title: '일회용 베이킹소다 수세미',
      price: 2000,
      tags: ['택배', '오늘'],
      date: '2026-08-22',
      sales: 682,
      inventory: 103,
      likes: 6477,
      shares: 443,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_120.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_120.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_121.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_74.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'baking_clean',
          rating: 5,
          content: '따로 주방세제 짤 필요 없이 물만 살짝 묻히면 베이킹소다 거품이 풍성하게 나와서 진짜 편해요! 가스레인지 기름때랑 후드 청소할 때 슥슥 닦아주니 찌든 때가 세정력 좋게 싹 날아갑니다. 일회용이라 쓰고 바로 버리면 되니 너무 위생적이에요.',
          date: '2026-03-22',
        },
        {
          reviewId: 2,
          userId: 'min_s0914',
          rating: 4,
          content: '매일 쓰는 일반 수세미는 세균 번식할까 봐 찝찝했는데 하루 한 장씩 뜯어 쓰니까 속이 다 시원하네요ㅋㅋ 엠보싱 면이 제법 빳빳해서 탄 냄비나 프라이팬 닦을 때도 유용합니다. 다만 거품이 엄청 오랫동안 지속되지는 않아서 설거지 양이 많을 땐 두 장 써야 해요.',
          date: '2026-08-19',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '기름기 닦아내고 청소하는 용도로는 가성비 무난하고 편리한 아이템입니다. 얇아서 틈새 구석구석 닦기 좋아요. 다만 수세미 자체가 조금 까슬까슬한 제형이라 코팅이 약한 고급 그릇이나 텀블러 같은 거 닦을 때는 스크래치 안 나게 조심해서 살살 문질러야 합니다.',
          date: '2026-05-11',
        },
        {
          reviewId: 4,
          userId: 'one_day_clean',
          rating: 5,
          content: '다이소 주방 추천템 중에 진짜 대만족하는 꿀템이에요ㅋㅋ 캠핑 갈 때나 여행 갈 때 세제 따로 안 챙기고 이거 몇 장 지퍼백에 넣어가지고 가면 짐도 줄고 설거지하기도 완전 최고입니다. 베이킹소다 성분이라 기름기 미끈거림을 엄청 잘 잡아줘서 뽀송해요.',
          date: '2026-09-02',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 아주 빠르고 팩 포장도 깔끔하게 잘 도착했습니다. 설거지 대충 끝내고 버리기 전에 씽크대 배수구랑 수도꼭지 주변 물때까지 싹 청소하고 버리면 청소 루틴 완벽해요ㅋㅋ 가격 부담이 전혀 없어서 주방 상비템으로 무조건 추천합니다.',
          date: '2026-02-27',
        },
      ]
    },
    {
      id: 60,
      category: ['popular', 'digital'],
      image: process.env.PUBLIC_URL + '/images/digital_01.jpg', 
      title: '템바보드 멀티탭 정리함',
      price: 3000,
      tags: ['택배', '오늘'],
      date: '2026-07-18',
      sales: 2648,
      inventory: 188,
      likes: 9999,
      shares: 506,

      mainImg: process.env.PUBLIC_URL + '/images/detail/detailMain_122.jpg',
      subImages: [
        process.env.PUBLIC_URL + '/images/detail/detailMain_122.jpg', 
        process.env.PUBLIC_URL + '/images/detail/detailMain_123.jpg', 
      ],
      detailImages: [
        process.env.PUBLIC_URL + '/images/detail/detailImg_75.jpg',
      ],
      reviews: [
        {
          reviewId: 1,
          userId: 'board_interior',
          rating: 5,
          content: '컴퓨터 책상 밑에 뒤죽박죽 꼬여있던 전선이랑 멀티탭이 한방에 깔끔해졌어요! 요즘 유행하는 템바보드 디자인이라 거실 협탁 위에 올려둬도 인테리어 소품처럼 너무 감성적이고 예쁩니다. 가성비 최고예요.',
          date: '2026-03-24',
        },
        {
          reviewId: 2,
          userId: 'min_s0812',
          rating: 4,
          content: '셋톱박스랑 멀티탭 가리는 용도로 샀는데 사이즈가 아주 넉넉해서 쏙 다 들어갑니다ㅋㅋ 양옆이랑 하단에 전선 배출 구멍이 잘 뚫려있어서 선 정리하기 직관적이고 편해요. 상단 평평한 부분에 폰 올려두고 충전하기도 좋습니다.',
          date: '2026-08-20',
        },
        {
          reviewId: 3,
          userId: 'pure_sky0',
          rating: 3,
          content: '전선 안 보이게 가려주는 기능이랑 시각적인 깔끔함은 아주 만족스럽습니다. 방이 정돈돼 보여요. 다만 플라스틱 재질에 외부만 템바보드 문양으로 가공된 거라 만졌을 때 엄청 고급스러운 철제나 우드 느낌까지는 아니니 참고하셔요.',
          date: '2026-05-11',
        },
        {
          reviewId: 4,
          userId: 'clean_desk77',
          rating: 5,
          content: '다이소 정리함 중에 진짜 제일 마음에 쏙 듭니다ㅋㅋ 오늘의집에서 비싸게 팔던 전선 정리함이랑 비교해도 퀄리티가 전혀 뒤처지지 않아요. 뚜껑 결합도 단단하게 잘 되고 먼지 쌓이는 걸 막아주니까 화재 위험도 덜할 것 같아 안심입니다.',
          date: '2026-09-12',
        },
        {
          reviewId: 5,
          userId: 'park_jm95',
          rating: 4,
          content: '배송 아주 빠르고 어디 깨지거나 찌그러진 곳 없이 안전하게 래핑되어 잘 왔습니다. 반려견이 전선 물어뜯을까 봐 걱정돼서 방 구석에 설치했는데 강아지 접근도 막아주고 보기에도 화사해서 대만족 중입니다. 강력 추천해요.',
          date: '2026-02-27',
        },
      ]
    },
  ]
}

export default productData;