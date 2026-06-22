/* ==========================================================================
   PHISHSHIELD DRIVER ENGINE - INTEGRATED PLATFORM CONFIGURATION
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

    runCounter("stat1", 34, 1500); // Maps visually to 3.4B
    runCounter("stat2", 90, 1500); // Maps visually to 90%
    runCounter("stat3", 17, 1500); // Maps visually to $17M
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

    // Content Animation Sequence using Intersection Observer
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

/* INTERACTIVE LAB ONE - TECHNICAL EMAIL INSIGHTS */
function initInteractiveLab() {
    let flagsDiscovered = 0;
    const totalFlags = 8;
    const targets = document.querySelectorAll(".emailFlag");
    const scoreboard = document.getElementById("emailLabScore");

    targets.forEach(target => {
        target.addEventListener("click", () => {
            if(target.classList.contains("flagged-IoC")) return;
            
            target.classList.add("flagged-IoC");
            flagsDiscovered++;
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

/* INTERACTIVE LAB TWO - SPOOFED INTERFACE CHALLENGE */
function initWebsiteChallenge() {
    let indicatorsDiscovered = 0;
    const totalIndicators = 3;
    const items = document.querySelectorAll(".fakeFlag");
    const displayScore = document.getElementById("websiteScore");

    items.forEach(item => {
        item.addEventListener("click", () => {
            if(item.classList.contains("analyzed-IoC")) return;

            item.classList.add("analyzed-IoC");
            indicatorsDiscovered++;
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