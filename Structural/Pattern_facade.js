import axios from "axios";
export class PostService {
  getPosts() {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
  }

  getPostsById(id) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.data);
  }

  getIndividualPostComments(id) {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.data);
  }
}

export class PostServiceFacade {
  constructor() {
    this.postsFacade = new PostServiceBaseFacade();
  }
  getPosts() {
    return this.postsFacade.getAxiosPosts();
  }

  getPostsById(id) {
    return this.postsFacade.getAxiosPosts(id);
  }

  getIndividualPostComments(id) {
    return this.postsFacade.getAxiosPosts(id, true);
  }
}

class PostServiceBaseFacade {
  getAxiosPosts(id, comments) {
    let baseUrl = "https://jsonplaceholder.typicode.com/posts";
    if (id) baseUrl += `/${id}`;
    if (comments) baseUrl += "/comments";
    return axios.get(baseUrl).then((res) => res.data);
  }
}
