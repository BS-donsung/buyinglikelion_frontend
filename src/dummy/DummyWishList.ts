import {WishItem, WishItemDTO} from "@/dto/RegisteredProductDTO";
import {StrictDate} from "@/util/StrictDate";
import {AccountItem, mapAccountDTOToItem} from "@/dto/AccountItemDTO";

export const dummyWishList = [
    WishItem.of(
        0,
        "갤럭시 탭 S7 FE",
        "https://shop-phinf.pstatic.net/20220103_5/1641196786773SFdqo_JPEG/42332629267768510_2144250560.jpg?type=m1000",
        659000,
        StrictDate.of(2022, 11, 20)),
    WishItem.of(
        1,
        "디저트 시간 고양이 미니 나무 스탬프",
        "https://shop-phinf.pstatic.net/20230424_107/1682326982056rFL6J_JPEG/28098398585796600_1762248888.jpg?type=w336",
        7000,
        StrictDate.of(2023, 1, 24)),
    WishItem.of(
        2,
        "찰스퍼니처 노르딕 책상",
        "https://shop-phinf.pstatic.net/20230421_166/1682057668624nxIPf_JPEG/27814046432444405_1354056283.jpg?type=w336",
        1634000,
        StrictDate.of(2023, 2, 12)),
    WishItem.of(
        3,
        "에몬스 스테이 책상",
        "https://shop-phinf.pstatic.net/20230420_242/1681975421408pxHsk_JPEG/28001522370898452_1292636700.jpg?type=w336",
        210000,
        StrictDate.ofDate()),
    WishItem.of(
        4,
        "J라운드넥, 반팔 니트",
        "https://shop-phinf.pstatic.net/20220519_10/1652919938821qBaGU_JPEG/113407_7.jpg?type=m1000",
        49000,
        StrictDate.ofDate()),
    WishItem.of(
        5,
        "브룩스 브라더스 남자 반팔 폴로 카라티",
        "https://shop-phinf.pstatic.net/20220414_17/1649919602830RQ0tT_JPEG/51055498463343136_804194652.jpeg?type=m1000",
        109000,
        StrictDate.ofDate())
]

export const dummyAccountList : AccountItem[] = [
    {
        "id": 0,
        "product": "보다나 글램웨이브 봉고데기 핑크",
        "image": "https://shopping-phinf.pstatic.net/main_1571599/15715996570.20210521141203.jpg",
        "price": 70300,
        "choice_date": "2022/05/08"
    },
    {
        "id": 1,
        "product": "루이까또즈 미니버킷백 HN3FM07FB8BL",
        "image": "https://shopping-phinf.pstatic.net/main_2928684/29286847845.20230505134823.jpg",
        "price": 152490,
        "choice_date": "2023/05/04"
    },
    {
        "id": 2,
        "product": "우르오스 올인원 모이스처라이저 스킨 로션 200ml(지복합)",
        "image": "https://shopping-phinf.pstatic.net/main_6249875/6249875706.20200212170533.jpg",
        "price": 19540,
        "choice_date": "2023/05/02"
    },
    {
        "id": 3,
        "product": "정장 코디에 심플한 남자 넥타이",
        "image": "https://shopping-phinf.pstatic.net/main_3228869/32288692531.20220514045113.jpg",
        "price": 9800,
        "choice_date": "2023/05/01"
    },
    {
        "id": 4,
        "product": "디베아 ALLNEW29000",
        "image": "https://shopping-phinf.pstatic.net/main_2675839/26758397523.20230502092823.jpg",
        "price": 248000,
        "choice_date": "2022/04/23"
    },
    {
        "id": 5,
        "product": "코지마 러너블 목어깨 마사지기 CMN-130WL",
        "image": "https://shopping-phinf.pstatic.net/main_2406428/24064286354.20220808122128.jpg",
        "price": 89000,
        "choice_date": "2023/04/15"
    },
    {
        "id": 6,
        "product" : "엠브렛 쉬즈 클러치백 25",
        "image" : "https://shop-phinf.pstatic.net/20230503_270/1683078948973uMmqR_JPEG/31610204765125114_684492662.jpg?type=m1000",
        "price" : 190000,
        "choice_date": "2023/04/11"
    },
    {
        "id": 7,
        "product" : "맘스터치 치킨가라아게",
        "image" : "https://shop-phinf.pstatic.net/20230316_101/1678925438399JSXa6_JPEG/80061272212954318_1838545542.jpg?type=m1000",
        "price" : 10300,
        "choice_date": "2023/04/10"
    },
    {
        "id": 8,
        "product" : "애플워치 에르메스",
        "image" : "https://shop-phinf.pstatic.net/20200608_211/15915928624406zzjS_JPEG/28953601074294475_2002520017.jpeg?type=m1000",
        "price" : 10300,
        "choice_date": "2023/04/01"
    },
    {
        "id": 9,
        "product" : "한경희 무선 선풍기",
        "image" : "https://shop-phinf.pstatic.net/20230509_52/1683601302428vmuOp_JPEG/17628624335611071_987081974.jpg?type=m1000",
        "price" : 92000,
        "choice_date": "2023/03/10"
    },
    {
        "id": 10,
        "product" : "1인용 컴퓨터 책상 GD001",
        "image" : "https://shop-phinf.pstatic.net/20201124_198/1606184178488Qr40l_JPEG/7320006311071643_1975634149.jpg?type=m1000",
        "price" : 74000,
        "choice_date": "2023/03/07"
    },
].map(mapAccountDTOToItem)



