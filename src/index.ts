import { EventEmitter } from "events";
import fetch from "node-fetch";


/**
 * ClientOptions is an object with a password property that is a string and a name property that is a
 * string.
 * @property {string} password - The password to use when connecting to the server.
 * @property {string} name - The name of the client.
 */
export type ClientOptions = {
    password: string;
    name: string;
};

/**
 * ApiResponse is an object with a status property that is a number, a message property that is any,
 * and a by property that is a string.
 * @property {number} status - The HTTP status code of the response.
 * @property {any} message - The actual data that you from the client.
 * @property {string} by - The name of the person who added the API
 */
export type apiResponse = {
    status: number;
    message: any;
    by: string;
}

/* It's a type definition for the apiResponse object. */
export interface apiResponsData extends apiResponse {
    status: number;
    message: any;
    by: string;
}

/* It makes a request to an API and returns the response.
</code> */
export class ApiClient extends EventEmitter {

    readonly name: string;
    readonly password: string;


    constructor(options: ClientOptions) {
        super();
        this.name = options.name;
        this.password = options.password;

        if (!this.name) {
            throw new Error("No name provided");
        }
        if (!this.password) {
            throw new Error("No password provided");
        }

    }
    /**
     * It takes a string, makes a request to the Scarlex API, and returns a promise that resolves to an
     * object.
     * @param {string} endpoint - The endpoint you want to make a request to.
     * @returns {Promise<apiResponse>}The data is being returned as a promise.
     */
    public async makeRequest(endpoint: string): Promise<apiResponse> {

        let headersList = {
            "Authorization": `Basic ${Buffer.from(`${this.name}:${this.password}`).toString("base64")}`,
        }
        if (!endpoint) {
            throw new Error("No endpoint provided");
        }
        const data = fetch(`https://scarlex.org/api/v1/${endpoint}`, {
            method: "GET",
            headers: headersList
        }).then(function (response) {
            return response.text();
        }).then(async function (data) {
            try {
                return await JSON.parse(data)
            } catch (error) {
                if (error) {
                    return { code: 400, message: error.message }
                }
            }
        })

        return data

    }

}




export default ApiClient;