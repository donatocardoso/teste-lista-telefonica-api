import HttpStatus from "../enums/HttpStatus";

export default class Return<T = null>
{
    StatusCode: HttpStatus;
    Message: string;
    Content: T;

	constructor(statusCode: HttpStatus = 200, message: string = 'OK', content: T = null)
	{
		this.StatusCode = statusCode;
		this.Message = message;
		this.Content = content;
	}
}
