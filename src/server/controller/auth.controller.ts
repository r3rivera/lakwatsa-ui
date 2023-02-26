import { Body, Controller, Post } from "@nestjs/common";
import { ApiEndpoint } from "../endpoints/api-endpoint";




@Controller()
export class AuthController{


    @Post(ApiEndpoint.AUTH_API)
    getAuth(@Body() authUser:any):{}{
        console.info("AUTH LOGIN");
        console.info(authUser);
        return { message :"Token-123"};
    }

}