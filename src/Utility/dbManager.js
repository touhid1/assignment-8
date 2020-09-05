async function getPostById(id){
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await fetch(url)
    const data = await response.json();
    return data;
}
async function getCommentsById(id){
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    const response = await fetch(url)
    const data = await response.json();
    return data;
}
export { getPostById,getCommentsById }