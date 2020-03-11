import BaseService from "./base.service";

class _PostService extends BaseService {
    async getAllPosts() {        
        const posts = await this.get('http://localhost:3200/post');
        return posts.data;
    }
}

const PostService = new _PostService();
Object.freeze(PostService);
export default PostService;