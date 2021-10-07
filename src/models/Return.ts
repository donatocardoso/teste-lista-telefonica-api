import HttpCode from "../enums/HttpCode";

export default class Return<T = undefined>
{
    HttpCode: HttpCode;
    Message: string;
    Content?: T;

	constructor(httpCode: HttpCode = 200, message: string = 'OK', content?: T)
	{
		this.HttpCode = httpCode;
		this.Message = message;
		this.Content = content;
	}
}
