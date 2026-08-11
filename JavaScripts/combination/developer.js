console.log("✅ developer.js loaded");

/*==================================================
 * DEVELOPER PROFILE PAGE
 * FUTURISTIC AQUA DESIGN
 *==================================================*/

function loadDeveloperPage(canvas) {

    if (!canvas) {
        console.error("❌ Developer canvas not found!");
        return;
    }

    canvas.innerHTML = `

        <section class="dev-profile-page">

            <!-- =====================================
                 HERO / PROFILE
            ====================================== -->

            <div class="dev-profile-hero">

                <div class="dev-profile-status">
                    <span class="dev-profile-status-dot"></span>
                    DEVELOPER PROFILE • SYSTEM ONLINE
                </div>

                <div class="dev-profile-photo-wrapper">

                    <div class="dev-profile-photo-ring">

                        <img
                            src="./img/logo/my-photo.png"
                            alt="Kuya Ram Profile Photo"
                            class="dev-profile-photo"
                        >

                    </div>

                </div>

                <h1 class="dev-profile-name">
                    KUYA RAM
                </h1>

                <h2 class="dev-profile-title">
                    Front-End Developer & Graphic Designer
                </h2>

                <p class="dev-profile-tagline">
                    Build <span>|</span> Design <span>|</span> Creative
                </p>

            </div>


            <!-- =====================================
                 ABOUT ME
            ====================================== -->

            <section class="dev-profile-section">

                <div class="dev-profile-section-title">
                    <span class="dev-profile-section-icon">◆</span>
                    ABOUT ME
                </div>

                <div class="dev-profile-card">

                    <p>
                        Hi! I'm Kuya Ram
                        <strong>You're friendly Kapitbahay</strong>,
                        a graduate of Bachelor of Science in Computer Science
                        and a passionate Freelance Developer dedicated to
                        creating practical and creative digital solutions.
                    </p>

                    <p>
                        I specialize in software and web development while
                        also offering a wide range of digital creative services.
                        My expertise includes graphic design, such as poster
                        design, logo creation, business cards, invitation cards,
                        banners, tarpaulin layouts, social media graphics,
                        and other digital artwork tailored to clients' needs.
                    </p>

                    <p>
                        In addition to design and development, I provide basic
                        IT support services, including computer and mobile device
                        troubleshooting, software installation, system
                        configuration, and the removal of unwanted adware and
                        malware from Android devices.
                    </p>

                    <p>
                        I also enjoy music composition and video editing,
                        allowing me to combine creativity with technology
                        to produce engaging multimedia content.
                    </p>

                    <p>
                        My goal is to deliver high-quality, reliable, and
                        professional work while continuously improving my
                        skills and keeping up with the latest trends in
                        technology and digital media.
                    </p>

                </div>

            </section>


            <!-- =====================================
                 SKILLS
            ====================================== -->

            <section class="dev-profile-section">

                <div class="dev-profile-section-title">
                    <span class="dev-profile-section-icon">◆</span>
                    SKILLS
                </div>

                <div class="dev-profile-grid">

                    <div class="dev-profile-skill">
                        <span>01</span>
                        Web Developer
                    </div>

                    <div class="dev-profile-skill">
                        <span>02</span>
                        Desktop Application
                    </div>

                    <div class="dev-profile-skill">
                        <span>03</span>
                        Network Configuration
                    </div>

                    <div class="dev-profile-skill">
                        <span>04</span>
                        Graphic Designer
                    </div>

                    <div class="dev-profile-skill">
                        <span>05</span>
                        Video Editor
                    </div>

                    <div class="dev-profile-skill">
                        <span>06</span>
                        Music Composer
                    </div>

                    <div class="dev-profile-skill">
                        <span>07</span>
                        Short Story Maker
                    </div>

                </div>

            </section>


            <!-- =====================================
                 PROGRAMMING LANGUAGES
            ====================================== -->

            <section class="dev-profile-section">

                <div class="dev-profile-section-title">
                    <span class="dev-profile-section-icon">◆</span>
                    PROGRAMMING LANGUAGES
                </div>

                <div class="dev-profile-tech-grid">

                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Bootstrap 5</span>
                    <span>Tailwind</span>
                    <span>TypeScript</span>
                    <span>Google Script</span>
                    <span>LaTeX Script</span>
                    <span>Java</span>
                    <span>C++</span>
                    <span>Python</span>
                    <span>MySQL / SQL</span>
                    <span>PHP</span>

                </div>

            </section>


            <!-- =====================================
                 WEB & GRAPHIC TOOLS
            ====================================== -->

            <section class="dev-profile-section">

                <div class="dev-profile-section-title">
                    <span class="dev-profile-section-icon">◆</span>
                    WEB & GRAPHIC TOOLS
                </div>

                <div class="dev-profile-tools">

                    <div class="dev-profile-tool">
                        <strong>VSCode</strong>
                        <small>Development</small>
                    </div>

                    <div class="dev-profile-tool">
                        <strong>Git / GitHub</strong>
                        <small>Version Control</small>
                    </div>

                    <div class="dev-profile-tool">
                        <strong>Photoshop</strong>
                        <small>Graphic Design</small>
                    </div>

                    <div class="dev-profile-tool">
                        <strong>Photopea</strong>
                        <small>Graphic Editing</small>
                    </div>

                    <div class="dev-profile-tool">
                        <strong>Canva</strong>
                        <small>Creative Design</small>
                    </div>

                </div>

            </section>


            <!-- =====================================
                 SOCIAL MEDIA
            ====================================== -->

            <section class="dev-profile-section dev-profile-social-section">

                <div class="dev-profile-section-title">
                    <span class="dev-profile-section-icon">◆</span>
                    SOCIAL MEDIA
                </div>

                <p class="dev-profile-social-description">
                    Connect with Kuya Ram through the following platforms.
                </p>

                <div class="dev-profile-socials">

                    <a
                        href="https://tinyurl.com/egm-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="dev-social-link"
                        title="Portfolio"
                        aria-label="Portfolio"
                    >
                        <img
                            src="./img/logo/my-logo.png"
                            alt="Portfolio"
                        >
                    </a>


                    <a
                        href="https://www.facebook.com/edmiralpes.developer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="dev-social-link"
                        title="Facebook"
                        aria-label="Facebook"
                    >
                        <img
                            src="./img/logo/messenger-logo.png"
                            alt="Facebook"
                        >
                    </a>


                    <a
                        href="https://www.linkedin.com/in/edmar-miralpes-b25569422"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="dev-social-link"
                        title="LinkedIn"
                        aria-label="LinkedIn"
                    >
                        <img
                            src="./img/logo/linkedIn-logo.png"
                            alt="LinkedIn"
                        >
                    </a>


                    <a
                        href="https://github.com/Kuya-Ram"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="dev-social-link"
                        title="GitHub"
                        aria-label="GitHub"
                    >
                        <img
                            src="./img/logo/github-logo.png"
                            alt="GitHub"
                        >
                    </a>


                    <a
                        href="https://www.youtube.com/@KuyaRam-tv1"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="dev-social-link"
                        title="YouTube"
                        aria-label="YouTube"
                    >
                        <img
                            src="./img/logo/yt-logo.png"
                            alt="YouTube"
                        >
                    </a>


                    <a
                        href="https://www.wattpad.com/user/Zhayt-Kua"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="dev-social-link"
                        title="Wattpad"
                        aria-label="Wattpad"
                    >
                        <img
                            src="./img/logo/wattpad-logo.png"
                            alt="Wattpad"
                        >
                    </a>

                </div>

            </section>


            <!-- =====================================
                 DEVELOPER FOOTER
            ====================================== -->

            <div class="dev-profile-end">

                <div class="dev-profile-end-line"></div>

                <span>
                    BUILD • DESIGN • CREATIVE
                </span>

                <small>
                    ALL-IN-ONE CALCULATOR • VERSION 1.0
                </small>

            </div>

        </section>

    `;

    console.log("✅ Developer Profile loaded successfully");
}


/*==================================================
 * GLOBAL REGISTRATION
 *==================================================*/

window.loadDeveloperPage = loadDeveloperPage;

console.log("✅ Developer page function registered");