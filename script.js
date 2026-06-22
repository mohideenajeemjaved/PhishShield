/* ==========================================================================
   PHISHSHIELD DRIVER ENGINE - UPGRADED ENTERPRISE PLATFORM CONFIGURATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
    // Phase Out Loader Screen
    const loader = document.getElementById("loader");
    if(loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            setTimeout(() => loader.style.display = "none", 500);
        }, 800);
    }

    // Fire UI Lifecycle Modules
    initTelemetryCounters();
    initScrollTracking();
    initInteractiveLab();
    initWebsiteChallenge();
    initSocialTactics();
    initUpgradeModules(); // Starts new interactive handlers

    // Attach Hero Navigation Trigger
    const startBtn = document.getElementById("startTraining");
    if(startBtn) {
        startBtn.addEventListener("click", () => {
            document.querySelector("#about").scrollIntoView({ behavior: "smooth" });
        });
    }
});

/* TELEMETRY ENGINE - ANIMATED DASHBOARD LOGS */
function initTelemetryCounters() {
    const runCounter = (id, target, duration) => {
        const el = document.getElementById(id);
        if(!el) return;
        let current = 0;
        const stepTime = Math.abs(Math.floor(duration / target));
        const timer = setInterval(() => {
            current += 1;
            if (id === "stat1") el.innerText = (current * 0.1).toFixed(1) + "B";
            else if (id === "stat2") el.innerText = current + "%";
            else if (id === "stat3") el.innerText = "$" + current + "M";
            
            if (current >= target) clearInterval(timer);
        }, stepTime || 15);
    };

    runCounter("stat1", 34, 1500); 
    runCounter("stat2", 90, 1500); 
    runCounter("stat3", 17, 1500); 
}

/* WINDOW POSITION EVALUATION - SCROLL PROGRESS OVERLAY */
function initScrollTracking() {
    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progressBar = document.getElementById("progressBar");
        if(progressBar) progressBar.style.width = scrolled + "%";
    });

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(sec => {
        sec.style.opacity = "0";
        sec.style.transform = "translateY(30px)";
        sec.style.transition = "all 0.8s ease-out";
        observer.observe(sec);
    });
}

/* INTERACTIVE LAB ONE - TECHNICAL EMAIL INSIGHTS WITH LOCALSTORAGE */
function initInteractiveLab() {
    const totalFlags = 8;
    let flagsDiscovered = parseInt(localStorage.getItem("ps_email_flags")) || 0;
    const scoreboard = document.getElementById("emailLabScore");
    const targets = document.querySelectorAll(".emailFlag");

    // Re-hydrate stored UI state if user returns later
    if(flagsDiscovered > 0 && scoreboard) {
        scoreboard.innerText = `${flagsDiscovered} / ${totalFlags} Indicators Found`;
    }

    targets.forEach((target, index) => {
        // If flag list matches stored count, or check identifier strings
        if(localStorage.getItem(`ps_email_flag_${index}`) === "found") {
            target.classList.add("flagged-IoC");
            target.style.background = "#10b981";
            target.style.color = "#ffffff";
            target.style.borderBottom = "2px solid #047857";
        }

        target.addEventListener("click", () => {
            if(target.classList.contains("flagged-IoC")) return;
            
            target.classList.add("flagged-IoC");
            flagsDiscovered++;
            localStorage.setItem("ps_email_flags", flagsDiscovered);
            localStorage.setItem(`ps_email_flag_${index}`, "found");
            
            target.style.background = "#10b981";
            target.style.color = "#ffffff";
            target.style.borderBottom = "2px solid #047857";
            
            playFeedbackSound("successSound");
            triggerToastNotification("IoC Located: " + target.getAttribute("data-tip"));
            
            if(scoreboard) scoreboard.innerText = `${flagsDiscovered} / ${totalFlags} Indicators Found`;

            if(flagsDiscovered === totalFlags) {
                setTimeout(() => {
                    alert("🎯 Investigation Complete! You identified all malicious vectors within the email header and body.");
                }, 400);
            }
        });
    });
}

/* INTERACTIVE LAB TWO - SPOOFED INTERFACE CHALLENGE WITH LOCALSTORAGE */
function initWebsiteChallenge() {
    const totalIndicators = 3;
    let indicatorsDiscovered = parseInt(localStorage.getItem("ps_web_indicators")) || 0;
    const displayScore = document.getElementById("websiteScore");
    const items = document.querySelectorAll(".fakeFlag");

    if(indicatorsDiscovered > 0 && displayScore) {
        displayScore.innerText = `Fake Website Indicators Found : ${indicatorsDiscovered} / ${totalIndicators}`;
    }

    items.forEach((item, index) => {
        if(localStorage.getItem(`ps_web_flag_${index}`) === "found") {
            item.classList.add("analyzed-IoC");
            item.style.background = "#10b981";
            item.style.color = "#ffffff";
        }

        item.addEventListener("click", () => {
            if(item.classList.contains("analyzed-IoC")) return;

            item.classList.add("analyzed-IoC");
            indicatorsDiscovered++;
            localStorage.setItem("ps_web_indicators", indicatorsDiscovered);
            localStorage.setItem(`ps_web_flag_${index}`, "found");
            
            item.style.background = "#10b981";
            item.style.color = "#ffffff";
            
            playFeedbackSound("successSound");
            triggerToastNotification("Deception Flagged: " + item.getAttribute("data-tip"));

            if(displayScore) displayScore.innerText = `Fake Website Indicators Found : ${indicatorsDiscovered} / ${totalIndicators}`;

            if(indicatorsDiscovered === totalIndicators) {
                setTimeout(() => {
                    alert("⚡ Excellent Detection Capability! You successfully unmasked the structural elements of the deceptive server.");
                }, 400);
            }
        });
    });
}

/* PARSING COMPONENT - PSYCHOLOGICAL EXPLOITATION OVERVIEW */
function initSocialTactics() {
    const cards = document.querySelectorAll(".social-card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            const vector = card.innerText.trim();
            let definitions = {
                "Fear": "Leverages technical coercion, systemic action, or legal actions to compromise critical analysis behavior.",
                "Urgency": "Imposes severe time restriction factors to force rapid action execution bypass protocols.",
                "Authority": "Impersonates executive officers, regulatory agencies, or enterprise service desk infrastructure assets.",
                "Curiosity": "Exploits data leaks, unverified access disclosures, or highly emotional information hooks.",
                "Reward": "Dangles false compliance prizes, arbitrary financial bonuses, or complimentary device upgrades.",
                "Scarcity": "Generates artificial supply constraints, prompting prompt bypass configurations to protect claims."
            };
            playFeedbackSound("clickSound");
            alert(`Vector Mapping: [${vector}]\n\nTactical Context: ${definitions[vector] || ""}`);
        });
    });
}

/* ==========================================================================
   UPGRADE ENGINE INTERFACES - SAFE INTERCEPTION & SYSTEM FORENSICS
   ========================================================================== */
function initUpgradeModules() {
    // 1. Raw Mail Header Toggle Control
    const toggleBtn = document.getElementById("toggleHeadersBtn");
    const headersPanel = document.getElementById("rawHeadersBox");

    if(toggleBtn && headersPanel) {
        toggleBtn.addEventListener("click", () => {
            playFeedbackSound("clickSound");
            if(headersPanel.style.display === "none") {
                headersPanel.style.display = "block";
                toggleBtn.innerHTML = `<i class="fa-solid fa-folder-open"></i> Hide Raw Technical Mail Headers`;
            } else {
                headersPanel.style.display = "none";
                toggleBtn.innerHTML = `<i class="fa-solid fa-code"></i> Inspect Raw Technical Mail Headers`;
            }
        });
    }

    // 2. Interactive Input Safe Submission Interceptor
    const simForm = document.getElementById("simulatorLoginForm");
    const interceptModal = document.getElementById("exploitInterceptModal");
    const closeInterceptBtn = document.getElementById("closeInterceptBtn");

    if(simForm && interceptModal) {
        simForm.addEventListener("submit", (e) => {
            e.preventDefault(); // HALT actual validation execution or page refresh
            
            const emailInput = document.getElementById("simEmail").value;
            const passInput = document.getElementById("simPassword").value;

            // Populate visual forensic logging array boxes safely inside modal
            document.getElementById("interceptedUser").innerText = emailInput;
            document.getElementById("interceptedPass").innerText = "*".repeat(passInput.length) + ` (${passInput.substring(0,2)}... Masked Security Log)`;

            playFeedbackSound("errorSound");
            interceptModal.style.display = "flex";

            // Clean input layout strings out safely
            simForm.reset();
        });
    }

    if(closeInterceptBtn && interceptModal) {
        closeInterceptBtn.addEventListener("click", () => {
            playFeedbackSound("clickSound");
            interceptModal.style.display = "none";
        });
    }
}

/* COMPLIANCE ENGINE AUDIO & NOTIFICATION HELPER FUNCTIONS */
function triggerToastNotification(msg) {
    const toast = document.getElementById("toast");
    if(!toast) return;
    toast.innerText = msg;
    toast.style.opacity = "1";
    toast.style.top = "30px";
    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.top = "-100px";
    }, 4500);
}

function playFeedbackSound(id) {
    const sound = document.getElementById(id);
    if(sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {/* Mute browser audio restriction block */});
    }
}
