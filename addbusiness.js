document.getElementById("businessImage").addEventListener("change", function(event) {
    let reader = new FileReader();
    reader.onload = function() {
        let preview = document.getElementById("imagePreview");
        preview.src = reader.result;
        preview.style.display = "block";
    };
    reader.readAsDataURL(event.target.files[0]);
});

document.getElementById("addBusinessForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from reloading the page

    let name = document.getElementById("businessName").value;
    let category = document.getElementById("businessCategory").value;
    let description = document.getElementById("businessDescription").value;
    let contact = document.getElementById("businessContact").value;
    let image = document.getElementById("imagePreview").src;

    if (name && description && contact) {
        let businessContainer = document.getElementById("businessContainer");

        let card = document.createElement("div");
        card.classList.add("business-card");

        card.innerHTML = `
            <img src="${image}" alt="Business Logo">
            <h3>${name} (${category})</h3>
            <p>${description}</p>
            <p><strong>Contact:</strong> ${contact}</p>
        `;

        businessContainer.appendChild(card);

        document.getElementById("successMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("successMessage").style.display = "none";
        }, 3000);

        document.getElementById("addBusinessForm").reset();
        document.getElementById("imagePreview").style.display = "none";
    }
});
