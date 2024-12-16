async function getPosts() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
}

async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
}

async function getPhotos() {
    let response = await fetch('https://jsonplaceholder.typicode.com/photos');
    return await response.json();
}

async function getComments() {
    let response = await fetch('https://jsonplaceholder.typicode.com/comments');
    return await response.json();
}

async function displayPosts() {
    const postsContainer = document.getElementById('posts-container');
    const posts = await getPosts();
    const users = await getUsers();
    const photos = await getPhotos();
    const comments = await getComments();

    for (let i = 0; i < 8; i++) {
        const post = posts[i];
        const user = users.find(x => x.id === post.userId);
        const photo = photos.find(x => x.id === post.id);
        const postComments = comments.filter(x => x.postId === post.id);

        postsContainer.innerHTML += `
        <div class="post">
            <div class="post-header">
                <div class="profile">
                    <img src="https://via.placeholder.com/40" alt="Profile Picture">
                    <h4>${user.username}</h4>
                </div>
                <div class="menu">...</div>
            </div>
            <img class="image" src="${photo.url}" alt="Post Image">
            <div class="icons">
                <div class="left-icons">
                    <i class="fa-regular fa-heart"></i>
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-regular fa-paper-plane"></i>
                </div>
                <div class="right-icon">
                    <i class="fa-regular fa-bookmark"></i>
                </div>
            </div>
            <div class="caption">
                ${user.username}: ${post.body}
            </div>
            <div class="comments">
                ${postComments.slice(0, 3).map(comment => `
                    <p>${comment.name}: ${comment.body}</p>
                `).join('')}
            </div>
        </div>
        `;
    }
}

displayPosts();