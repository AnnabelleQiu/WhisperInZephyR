// Navigate to a specified page
function navigateTo(page) {
    window.location.href = page;
}

// Settings for pagination
const bookmarksPerPage = 3; // Number jof bookmarks per page
let currentPage = 1; // Current page number

// Function to update bookmarks and total pages dynamically
function updateBookmarks() {
    // Refresh the list of bookmarks and total pages
    const bookmarks = document.querySelectorAll(".bookmark-block");
    window.totalPages = Math.ceil(bookmarks.length / bookmarksPerPage);
    return bookmarks;
}

// Function to display a specific page of bookmarks
function showPage(page) {
    // Refresh bookmarks dynamically
    const bookmarks = updateBookmarks();

    // Hide all bookmarks initially
    bookmarks.forEach((bookmark) => {
        bookmark.style.display = "none";
    });

    // Calculate start and end index for current page
    const start = (page - 1) * bookmarksPerPage;
    const end = start + bookmarksPerPage;

    // Show bookmarks for the current page
    for (let i = start; i < end && i < bookmarks.length; i++) {
        bookmarks[i].style.display = "block";
    }

    // Update button states
    document.getElementById("prevButton").disabled = (page === 1);
    document.getElementById("nextButton").disabled = (page === totalPages);
}

// Function to go to the previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Function to go to the next page
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

// Initialize pagination when the document is loaded
document.addEventListener("DOMContentLoaded", () => {
    updateBookmarks();
    showPage(currentPage);
});

// Smooth scroll to the next content section
function scrollToContent() {
    const contentSection = document.querySelector('.about');
    contentSection.scrollIntoView({ behavior: 'smooth' });
}

// Show the bookmark form
function showBookmarkForm() {
    document.getElementById("bookmarkForm").style.display = "block";
}

// Hide the bookmark form and reset its inputs
function hideBookmarkForm() {
    document.getElementById("bookmarkForm").style.display = "none";
    document.getElementById("newBookmarkTitle").value = "";
    document.getElementById("newBookmarkContent").value = "";
}
