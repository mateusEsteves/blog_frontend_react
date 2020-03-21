import BaseService from './base.service';

class _PostService extends BaseService {
  async getAllPosts() {
    // const posts = await this.get('http://localhost:3200/post');
    // return posts.data;

    return Promise.resolve([
      {
        id: '1',
        title: 'Titulo do post',
        text: 'Texto do postaaaaaa',
        authorId: '0',
      },
    ]);
  }

  async getPostById() {
    // const post = await this.get(`http://localhost:3200/post/${id}`);
    // return post.data;

    return Promise.resolve({
      id: '1',
      title: 'Titulo do post',
      text: 'Texto do postaaaaaa',
      authorId: '0',
    });
  }

  updatePost() {
    // return this.patch('http://localhost:3200/post', postData);
  }

  deletePost() {
    // return this.delete(`http://localhost:3200/post/${postId}`);
  }
}

const PostService = new _PostService();
Object.freeze(PostService);
export default PostService;
