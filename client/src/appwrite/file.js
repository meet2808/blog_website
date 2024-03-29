import conf from "../conf/conf";
import { Client, ID, Storage } from "appwrite";

export class Image{
    client = new Client();
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appWriteUrl)
        .setProject(conf.appWriteProjectId);
        this.bucket = new Storage(this.client);
    }

    async uploadImage(img){
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                img
            )
        } catch (error) {
            console.log("Appwrite service :: uploadImage :: error", error);
            return false;
        }
    }

    getImagePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            fileId
        )
    }
}

const image = new Image();
export default image;