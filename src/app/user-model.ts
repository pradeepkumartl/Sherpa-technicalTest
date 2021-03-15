export class userModel{
    userName: string='default';
    avatar: string;
    profileUrl: string;
}

export class detailedUserModel extends userModel{
    followers: number = 0;
    following: number = 0;
}