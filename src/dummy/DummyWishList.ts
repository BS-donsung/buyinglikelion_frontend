import {WishItemDTO} from "@/dto/ProductDTO";
import {StrictDate} from "@/util/StrictDate";

export const dummyWishList = [
    WishItemDTO.of(
        1,
        "아이노트 접이식 키보드",
        "https://shop-phinf.pstatic.net/20230425_146/1682407499838DPNcT_JPEG/3_ED8380EC9E84ED8AB9EAB080_1.jpg?type=f200",
        39000,
        StrictDate.of(2022, 11, 20)),
    WishItemDTO.of(
        2,
        "디저트 시간 고양이 미니 나무 스탬프",
        "https://shop-phinf.pstatic.net/20230424_107/1682326982056rFL6J_JPEG/28098398585796600_1762248888.jpg?type=w336",
        7000,
        StrictDate.of(2023, 1, 24)),
    WishItemDTO.of(
        3,
        "찰스퍼니처 노르딕 책상",
        "https://shop-phinf.pstatic.net/20230421_166/1682057668624nxIPf_JPEG/27814046432444405_1354056283.jpg?type=w336",
        1634000,
        StrictDate.of(2023, 2, 12)),
    WishItemDTO.of(
        4,
        "에몬스 스테이 책상",
        "https://shop-phinf.pstatic.net/20230420_242/1681975421408pxHsk_JPEG/28001522370898452_1292636700.jpg?type=w336",
        210000,
        StrictDate.ofDate())
]
