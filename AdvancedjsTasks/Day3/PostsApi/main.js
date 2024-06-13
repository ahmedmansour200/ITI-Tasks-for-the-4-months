var svg = document.getElementsByTagName("svg")[0];
var postsContainer = document.getElementById("postsContainer");

document.getElementById("postsButton").addEventListener('click' , fetchPosts);


var  xhrPoste = new XMLHttpRequest();

function fetchPosts() {
    xhrPoste.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhrPoste.send();
    
    xhrPoste.addEventListener('readystatechange' , function(){
        // console.log(xhrPoste.response);
        if(xhrPoste.readyState == 3){
            svg.style.display = 'block';
        }
        if(xhrPoste.readyState == 4){
            svg.style.display = 'none';
            if(xhrPoste.status == 200){
                var postsArr = JSON.parse(xhrPoste.response);
                // console.log(postsArr[0].title);
                if(postsArr.length > 0){
                    displayPosts(postsArr)
                }else{
                    postsContainer.innerHTML = "<p>Users not found</p>";
                }
            }else{
                document.images[0].src ="1.webp";
            }
        }
    })

}

function displayPosts(posts) {
    postsContainer.innerHTML = ''; // Clear the container before adding new posts

    posts.forEach(post => {
        var postElement = document.createElement('div');
        postElement.classList.add('post');

        var postTitle = document.createElement('h2');
        postTitle.textContent = post.title;

        var postBody = document.createElement('p');
        postBody.textContent = post.body;

        postElement.appendChild(postTitle);
        postElement.appendChild(postBody);
        postsContainer.appendChild(postElement);
    });
}
