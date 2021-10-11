import { Expose } from "class-transformer";
import HttpCode from "../enums/HttpCode";

export default class Return<T = undefined>
{
	@Expose({ name: "code" })
	HttpCode: HttpCode;

	@Expose({ name: "message" })
	Message: string;

	@Expose({ name: "content" })
	Content?: T;

	constructor(httpCode: HttpCode = 200, message: string = 'OK', content?: T) {
		this.HttpCode = httpCode;
		this.Message = message;
		this.Content = content;
	}
}
