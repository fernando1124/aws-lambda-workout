import { APIGatewayProxyHandler, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import 'source-map-support/register';
import {User} from "../models/User";

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    console.log("event", event)

    return {
        statusCode: 200,
        body: JSON.stringify(mockUserData),
    }
}

const mockUserData: User = {
    email: "mock-fernando+2@gmail.com",
    firstname: "Luis Fernando",
    lastname: "Salazar Garcia",
    account: {
        username: "fernando",
        characters: [
            {
                name: "SrTripa",
                hp: 200,
                mana: 10,
                level: 1
            }
        ]
    }
}