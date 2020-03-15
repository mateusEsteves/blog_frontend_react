import BaseService from './base.service';

class _PostService extends BaseService {
  async getAllPosts() {
    const posts = await this.get('http://localhost:3200/post');
    return posts.data;
  }

  async getPostById(id) {
    const post = await this.get(`http://localhost:3200/post/${id}`);
    return post.data;
  }

  async updatePost(postData) {
    await this.patch('http://localhost:3200/post', postData);
  }
}

const PostService = new _PostService();
Object.freeze(PostService);
export default PostService;
