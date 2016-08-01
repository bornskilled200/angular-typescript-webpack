import {Tweet} from "../../entities/Tweet";
export class TweetService {
    private tweets:Array<Tweet> = [];

    constructor() {
        for (var i: number = 0; i < 5; i++) {
            this.tweets.push(new Tweet("@user", "Content", false));
        }
    }

    public getAll(): Array<Tweet> {
        return this.tweets;
    }
}