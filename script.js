function navigateTo(page) {
    window.location.href = page;
}
// 设置分页参数
const bookmarksPerPage = 3; // 每页显示的书签数量
let currentPage = 1; // 当前页码

// 获取所有书签块
const bookmarks = document.querySelectorAll(".bookmark-block");

// 计算总页数
const totalPages = Math.ceil(bookmarks.length / bookmarksPerPage);

// 显示特定页面的书签
function showPage(page) {
    // 隐藏所有书签
    bookmarks.forEach((bookmark, index) => {
        bookmark.style.display = "none";
    });

    // 显示当前页的书签
    const start = (page - 1) * bookmarksPerPage;
    const end = start + bookmarksPerPage;
    for (let i = start; i < end && i < bookmarks.length; i++) {
        bookmarks[i].style.display = "block";
    }

    // 更新按钮状态
    document.getElementById("prevButton").disabled = (page === 1);
    document.getElementById("nextButton").disabled = (page === totalPages);
}

// 切换到上一页
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// 切换到下一页
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

// 初始加载第一页
document.addEventListener("DOMContentLoaded", () => {
    showPage(currentPage);
});

// 导航到指定页面
function navigateTo(page) {
    window.location.href = page;
}

// 平滑滚动到下一个内容区域
function scrollToContent() {
    const contentSection = document.querySelector('.about');
    contentSection.scrollIntoView({ behavior: 'smooth' });
}