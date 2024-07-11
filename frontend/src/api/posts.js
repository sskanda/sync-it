const BASE_URL = "http://localhost:5000";

const getPosts = async (query) => {
  try {
    const res = await fetch(
      BASE_URL + "/api/posts?" + new URLSearchParams(query)
    );
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

const createComment = async (comment, params, user) => {
  try {
    const { id } = params;
    const res = await fetch(BASE_URL + "/api/comments/" + id, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const likePost = async (postId, user) => {
  try {
    const res = await fetch(BASE_URL + "/api/posts/like/" + postId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const unlikePost = async (postId, user) => {
  try {
    const res = await fetch(BASE_URL + "/api/posts/like/" + postId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export {
  getPosts,
  createPost,
  getPost,
  getComments,
  createComment,
  likePost,
  unlikePost,
};
