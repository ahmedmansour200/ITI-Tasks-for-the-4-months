
// Fetch users and create tabs
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const tabsContainer = document.getElementById('tabs');
        users.forEach((user) => {
            const tab = document.createElement('div');
            tab.className = 'tab';
            tab.innerText = user.username;
            tab.dataset.userId = user.id;
            tab.addEventListener('click', handleTabClick);
            tabsContainer.appendChild(tab);
        });
            tabsContainer.firstChild.classList.add('active');

        
       
            // fetchPosts(users[0].id).then(displayPosts);
        

    })
    .catch(error => console.error('Error users:', error));

async function handleTabClick(event) {
    const userId = event.target.dataset.userId;

    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');

    try {
        const posts = await fetchPosts(userId);
        displayPosts(posts);
    } catch (error) {
        console.error('Error posts:', error);
    }
}

async function fetchPosts(userId) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
    if (!response.ok) {
        throw new Error('error');
    }
    return response.json();
}

function displayPosts(posts) {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; 

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post-title';
        postElement.innerText = post.title;
        postsContainer.appendChild(postElement);
    });
}
// let first = fetchPosts(users[0].id);
// displayPosts(first)