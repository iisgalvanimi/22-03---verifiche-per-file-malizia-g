export class Post
{
    user : string;
    post : string;
    commentList : Array<string> = new Array<string>();
    constructor(user: string, post: string)
    {
        this.user = user;
        this.post = post;
    }
}