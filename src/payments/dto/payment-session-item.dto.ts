import { Type } from "class-transformer";
import { IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class PaymentSessionItemDto{
    
    @IsString()
    @MinLength(1)
    name:string;

    @IsNumber()
    @IsPositive()
    @Type(()=>Number)
    price:number;
    
    @IsNumber()
    @IsPositive()
    @Type(()=>Number)
    quantity: number;
}