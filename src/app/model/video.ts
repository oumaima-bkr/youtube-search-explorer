

export class Video{
    public id !:Number;
    public titre!:string;
    public thumbnailUrl!:string
    public videoLink!:string 
    public likes!:number
    public dislikes!:number
    public channelTitle!:string


    constructor(
        id: number,
        titre: string,
        thumbnailUrl: string,
        videoLink: string,
        likes: number,
        dislikes: number,
        channelTitle:string
      ) {
        this.id = id;
        this.titre = titre;
        this.thumbnailUrl = thumbnailUrl;
        this.videoLink = videoLink;
        this.likes = likes;
        this.dislikes = dislikes;
        this.channelTitle=channelTitle
      }


}