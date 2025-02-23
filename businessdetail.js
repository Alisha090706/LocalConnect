function addReview() {
    let reviewInput = document.getElementById('review-input').value;
    if (reviewInput.trim() !== "") {
        let newReview = document.createElement('li');
        newReview.innerHTML = `<strong>You:</strong> ${reviewInput} ⭐⭐⭐⭐⭐`;
        document.getElementById('reviews-list').appendChild(newReview);
        document.getElementById('review-input').value = "";
    }
}

function toggleBookmark() {
    let btn = document.getElementById('bookmark-btn');
    if (btn.innerText.includes("🔖")) {
        btn.innerText = "✅ Bookmarked";
        btn.style.backgroundColor = "#28a745";
    } else {
        btn.innerText = "🔖 Bookmark";
        btn.style.backgroundColor = "#6a5acd";
    }
}
