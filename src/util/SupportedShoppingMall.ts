import { ShoppingMallInfo } from "@/util/ShoppingMallInfo";
import {Optional} from "@yahvz01/monad";

const MallOfEleven =
    new ShoppingMallInfo("11번가", "11st", "mall_eleventh_street.svg", "#FF2C33");

const MallOfAuction =
    new ShoppingMallInfo("옥션", "auction", "mall_auction.svg", "#E63740");

const MallOfGmarket =
    new ShoppingMallInfo("G마켓", "gmarket", "mall_gmarket.svg", "#01A900");


export { MallOfEleven, MallOfAuction ,MallOfGmarket };

export class SupportedShoppingMall {
    static of( mallCode : string ) : Optional<ShoppingMallInfo> {
        switch (mallCode) {
            case MallOfEleven.name :
                return Optional.of(MallOfEleven);
            case MallOfAuction.name :
                return Optional.of(MallOfAuction);
            case MallOfGmarket.name :
                return Optional.of(MallOfGmarket);
            default :
                return Optional.empty()
        }
    }
}