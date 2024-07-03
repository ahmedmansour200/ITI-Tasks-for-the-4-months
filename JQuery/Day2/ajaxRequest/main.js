$(document).ready(function() {

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        success: function(users) {
            const $tabsContainer = $('#tabs');
            users.forEach(user => {
                const $tab = $('<div>').addClass('tab').text(user.username).data('userId', user.id);
                $tab.on('click', handleTabClick);
                $tabsContainer.append($tab);
            });

           
            $tabsContainer.children().first().addClass('active');
            fetchPosts(users[0].id).then(displayPosts);
        },
        error: function() {
            console.error('Error fetching users');
        }
    });

    function handleTabClick(event) {
        const $target = $(event.target);
        const userId = $target.data('userId');

        $('.tab').removeClass('active');
        $target.addClass('active');

        fetchPosts(userId).then(displayPosts).catch(function() {
            console.error('Error fetching posts');
        });
    }

    function fetchPosts(userId) {
        return $.ajax({
            url: `https://jsonplaceholder.typicode.com/posts`,
            method: 'GET',
            data: { userId: userId }
        });
    }

    function displayPosts(posts) {
        const $postsContainer = $('#posts');
        $postsContainer.empty();

        posts.forEach(post => {
            const $postElement = $('<div>').addClass('post-title').text(post.title);
            $postsContainer.append($postElement);
        });
    }
}); 