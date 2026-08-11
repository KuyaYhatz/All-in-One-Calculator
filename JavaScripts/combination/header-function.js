function loadHeaderPage(page) {

    const canvas = document.getElementById("canvas");

    if (!canvas) {
        console.error("❌ Canvas not found!");
        return;
    }

    if (page === "about") {

        loadAboutPage(canvas);

    }

    else if (page === "faq") {

        loadFAQPage(canvas);

    }

    else if (page === "developer") {

        loadDeveloperPage(canvas);

    }

    else {

        console.error(
            "❌ Unknown header page:",
            page
        );

        return;
    }

    closeMenu();
}