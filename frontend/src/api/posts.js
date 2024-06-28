const getPosts = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/posts");
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
export { getPosts };
