import { ArrayMinSize, IsArray, IsString, MinLength, minLength, ValidateNested } from "class-validator";
import { PaymentSessionItemDto } from "./payment-session-item.dto";
import { Type } from "class-transformer";

export class PaymentSessionDto{
 
    @IsString()
    @MinLength(1)
    currency:string

    @IsString()
    @MinLength(1)
    orderId:string

    @IsArray()
    @ArrayMinSize(1)
    @ValidateNested({each:true})
    @Type(()=>PaymentSessionItemDto)
    items: PaymentSessionItemDto[]

}