const BASE_URL = "http://localhost:5000";

const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/posts");
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const createPost = async (post, user) => {
  try {
    const res = await fetch(BASE_URL + "/api/posts", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getPost = async (postId) => {
  try {
    const res = await fetch(BASE_URL + "/api/posts/" + postId);
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const getComments = async (params) => {
  try {
    const { id } = params;
    const res = await fetch(BASE_URL + "/api/comments/post/" + id);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export { getPosts, createPost, getPost, getComments };
