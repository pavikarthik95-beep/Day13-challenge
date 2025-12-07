// Select all like buttons
const buttons = document.querySelectorAll(".like-btn");

buttons.forEach((btn) => {
    let liked = false;
    let count = 0;

    const countText = btn.nextElementSibling;

    btn.addEventListener("click", () => {
        liked = !liked;

        if (liked) {
            count++;
            btn.classList.add("liked");
            btn.innerHTML = "❤️ Liked";
        } else {
            count--;
            btn.classList.remove("liked");
            btn.innerHTML = "👍 Like";
        }

        countText.textContent = `${count} Likes`;
    });
});

