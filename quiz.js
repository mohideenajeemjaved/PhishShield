/* ==========================================================================
   PHISHSHIELD INTERACTIVE COMPLIANCE ASSESSOR - EVALUATION MATRIX
   ========================================================================== */

const complianceAssessmentSet = [
    {
        q: "1. What core security risk profile does a Phishing deployment exploit?",
        a: ["Hardware firmware injection vulnerabilities", "Human compliance psychology vulnerabilities", "Distributed Denial of Service protocols", "Weak cryptographic cipher protocols"],
        c: 1
    },
    {
        q: "2. Which behavioral flag signals the high likelihood of an active Inbound Social Lure?",
        a: ["Use of enforced end-to-end TLS encryption", "Enforced time urgency constraints paired with sensitive payload calls", "Inclusion of explicit company metadata validation tags", "Implementation of structural dark mode styles"],
        c: 1
    },
    {
        q: "3. What specific organizational scope defines a Spear Phishing deployment?",
        a: ["Untargeted global automated delivery models", "Bespoke targeting executed against specific profile nodes", "Exploitation of corporate wireless routing frameworks", "Direct interception of storage arrays"],
        c: 1
    },
    {
        q: "4. A Smishing threat vector operates via what exact channel interface?",
        a: ["Voice Over IP network communication platforms", "Short Message Service protocol channels", "Peripheral firmware deployment matrices", "Encrypted file transfer systems"],
        c: 1
    },
    {
        q: "5. What threat model defines standard Vishing deployment methodology?",
        a: ["Targeted voice channel social engineering vectors", "Malicious link deployment via mail server arrays", "Compromised DNS resolution configurations", "Active cross-site site execution operations"],
        c: 0
    },
    {
        q: "6. Evaluate the following paths. Select the destination matching secure operational profiles:",
        a: ["https://portal-verification-microsoft.xyz", "https://login.microsoftonline.com", "http://corporate-login-gateway-update.ru", "https://microsoft.security-session.com/login"],
        c: 1
    },
    {
        q: "7. Which protocol header inspection offers the highest defensive visibility prior to link execution?",
        a: ["Parsing visual font properties", "Validating matching top-level domains against source headers", "Checking background graphic rendering", "Reviewing client operating parameters"],
        c: 1
    },
    {
        q: "8. Which specific inbound asset file format features the highest danger threat index?",
        a: ["TargetPayloadArchive.pdf.exe", "SystemReportLog.csv", "ArchitectureMap.pdf", "OperationalAudioSummary.mp3"],
        c: 0
    },
    {
        q: "9. What defensive capability does Multi-Factor Authentication provide if credential sets leak?",
        a: ["It actively purges the malicious server array", "It provides a secondary authorization challenge barricade layer", "It automatically changes internal asset keys", "It decrypts the system network channel"],
        c: 1
    },
    {
        q: "10. Threat actors implement deceptive landing pages primarily to extract what asset vector?",
        a: ["Plain text identity and authorization credentials", "Local storage cache processing algorithms", "Target operating system terminal permissions", "Internal routing node configurations"],
        c: 0
    },
    {
        q: "11. What field methodology controls Social Engineering operations?",
        a: ["Manipulating target human behavioral responses and cognitive biases", "Brute-forcing high-entropy access tokens", "Parsing buffer registration boundaries", "Intercepting memory allocation cycles"],
        c: 0
    },
    {
        q: "12. What action profile characterizes a Clone Phishing operation?",
        a: ["Replicating an authentic message template and swapping valid elements with exploit payloads", "Cloning network adapter hardware tags", "Mirroring system application databases", "Duplicating external router interface maps"],
        c: 0
    },
    {
        q: "13. What is the immediate response protocol upon isolating an active Indicator of Compromise (IoC)?",
        a: ["Bypassing notice calls and archiving the object", "Forwarding the payload across the entire organization space", "Reporting the item directly to internal Security Operations personnel", "Engaging directly with the threat email address source"],
        c: 2
    },
    {
        q: "14. What strategy prevents password compromise via database breach dumps?",
        a: ["Utilizing brief phrase structures", "Reusing identical credential structures across corporate platforms", "Employing unique, high-entropy passwords managed by an explicit vault engine", "Using public numeric indicators like birthdays"],
        c: 2
    },
    {
        q: "15. What component forms the primary line of security defense against social engineering infrastructure?",
        a: ["Continuous technical awareness testing and proactive risk identification", "Total tracking dependence on operational fortune", "Bypassing network security gateway arrays", "Procuring expensive workstation hardware assets"],
        c: 0
    }
];

let targetQuestionIndex = 0;
let userScoreAccumulator = 0;

const modalBox = document.getElementById("quizModal");
const textContainer = document.getElementById("question");
const answerBox = document.getElementById("answers");
const advanceBtn = document.getElementById("nextQuestion");

document.getElementById("startQuiz").onclick = () => {
    if(modalBox) {
        modalBox.style.display = "flex";
        targetQuestionIndex = 0;
        userScoreAccumulator = 0;
        executeQuestionRender();
    }
};

document.querySelector(".closeQuiz").onclick = () => {
    if(modalBox) modalBox.style.display = "none";
};

function executeQuestionRender() {
    const currentQuestionItem = complianceAssessmentSet[targetQuestionIndex];
    textContainer.innerHTML = currentQuestionItem.q;
    answerBox.innerHTML = "";
    advanceBtn.style.display = "none";

    currentQuestionItem.a.forEach((choice, index) => {
        const optionBtn = document.createElement("button");
        optionBtn.innerHTML = choice;
        optionBtn.className = "answerBtn";
        optionBtn.onclick = () => processSelection(index);
        answerBox.appendChild(optionBtn);
    });
}

function processSelection(chosenIndex) {
    const actualCorrectIndex = complianceAssessmentSet[targetQuestionIndex].c;
    const choicesRendered = document.querySelectorAll(".answerBtn");

    choicesRendered.forEach((btn, idx) => {
        btn.disabled = true;
        if(idx === actualCorrectIndex) {
            btn.style.background = "#16a34a";
            btn.style.borderColor = "#15803d";
            btn.style.color = "#ffffff";
        }
        if(idx === chosenIndex && chosenIndex !== actualCorrectIndex) {
            btn.style.background = "#dc2626";
            btn.style.borderColor = "#b91c1c";
            btn.style.color = "#ffffff";
        }
    });

    if(chosenIndex === actualCorrectIndex) {
        userScoreAccumulator++;
        // External helper call from script.js
        if(typeof playFeedbackSound === "function") playFeedbackSound("successSound");
    } else {
        if(typeof playFeedbackSound === "function") playFeedbackSound("errorSound");
    }

    advanceBtn.style.display = "block";
}

advanceBtn.onclick = () => {
    targetQuestionIndex++;
    if(targetQuestionIndex < complianceAssessmentSet.length) {
        executeQuestionRender();
    } else {
        terminateEvaluationStage();
    }
};

function terminateEvaluationStage() {
    if(modalBox) modalBox.style.display = "none";
    const totalCount = complianceAssessmentSet.length;
    const scorePercentage = Math.round((userScoreAccumulator / totalCount) * 100);

    localStorage.setItem("phishshield_evaluation_score", `${userScoreAccumulator} / ${totalCount}`);

    alert(`Compliance Evaluation Complete.\n\nScore Metric: ${userScoreAccumulator} / ${totalCount}\nPassing Rate Achieved: ${scorePercentage}%`);

    if(scorePercentage >= 70) {
        const certModal = document.getElementById("certificateModal");
        if(certModal) certModal.style.display = "flex";
    } else {
        alert("Evaluation failed to meet passing baseline thresholds (70%). Re-examine training parameters and re-test.");
    }
}