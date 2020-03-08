import BaseService from "./base.service";

class _PostService extends BaseService {
    getAllPosts() {        
        return this.get('http://localhost:3200/post');
    }
}

const PostService = new _PostService();
Object.freeze(PostService);
export default PostService;