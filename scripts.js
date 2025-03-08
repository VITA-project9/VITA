document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts");

    const posts = [
        {
            title: "First Blog Post",
            content: "This is the content of the first blog post. Stay tuned for more updates!",
            date: "March 8, 2025"
        },
        {
            title: "Progress Update",
            content: "The project is evolving well, and new features are being added!",
            date: "March 15, 2025"
        }
    ];

    function displayPosts() {
        postsContainer.innerHTML = "";
        posts.forEach(post => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p><em>${post.date}</em></p>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    displayPosts();
});
