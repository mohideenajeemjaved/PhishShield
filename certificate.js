/* ==========================================================================
   PHISHSHIELD CREDENTIAL LAYER - SECURE WEB WINDOW GENERATION
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const triggerDocBtn = document.getElementById("generateCertificate");
    const certModalDisplay = document.getElementById("certificateModal");

    if(triggerDocBtn) {
        triggerDocBtn.addEventListener("click", () => {
            const participantNameInput = document.getElementById("username").value.trim();

            if(participantNameInput === "") {
                alert("Identity field configuration failure: Input structural validation name.");
                return;
            }

            const timestamp = new Date();
            const formattedDateString = `${timestamp.getDate()}/${timestamp.getMonth() + 1}/${timestamp.getFullYear()}`;
            const retrievedScore = localStorage.getItem("phishshield_evaluation_score") || "15 / 15";

            // Spawn separate browsing asset sandbox window
            const generationSandbox = window.open("", "_blank");

            generationSandbox.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Certificate of Achievement - PhishShield</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #090d1a;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            color: #1e293b;
        }
        .cert-frame {
            width: 800px;
            background: #ffffff;
            padding: 50px;
            border: 20px solid #050816;
            outline: 6px solid #00e5ff;
            text-align: center;
            box-shadow: 0 20px 50px rgba(0,0,0,0.6);
            position: relative;
        }
        .cert-frame::before {
            content: "";
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            border: 2px solid #0078d4;
            box-sizing: border-box;
            pointer-events: none;
        }
        h1 {
            font-size: 46px;
            color: #050816;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 18px;
            color: #64748b;
            font-style: italic;
            margin-bottom: 30px;
        }
        h2 {
            font-size: 38px;
            color: #0078d4;
            border-bottom: 2px solid #cbd5e1;
            display: inline-block;
            padding-bottom: 10px;
            margin: 20px 0;
            min-width: 400px;
        }
        .summary-text {
            font-size: 16px;
            line-height: 28px;
            max-width: 600px;
            margin: 20px auto;
            color: #334155;
        }
        .meta-grid {
            margin-top: 40px;
            display: flex;
            justify-content: space-around;
            font-size: 14px;
        }
        .meta-field span {
            display: block;
            font-weight: bold;
            color: #050816;
            margin-bottom: 5px;
        }
        .action-container {
            margin-top: 40px;
        }
        .print-trigger {
            padding: 12px 35px;
            font-size: 16px;
            background: #00e5ff;
            color: #050816;
            border: none;
            cursor: pointer;
            font-weight: bold;
            border-radius: 4px;
            box-shadow: 0 4px 10px rgba(0,229,255,0.3);
            transition: background 0.2s;
        }
        .print-trigger:hover {
            background: #00b4d8;
        }
        @media print {
            .print-trigger { display: none; }
            body { background: #ffffff; }
            .cert-frame { border: 20px solid #050816; outline: none; box-shadow: none; }
        }
    </style>
</head>
<body>
    <div class="cert-frame">
        <h1>Certificate of Completion</h1>
        <p class="subtitle">PhishShield Cybersecurity Awareness Verification</p>
        <p>This document validates that validation benchmarks were verified for</p>
        <h2>${participantNameInput}</h2>
        <p class="summary-text">
            For successfully demonstrating operational knowledge criteria and incident mitigation strategies across 
            the advanced interactive social engineering vector sets, network deception, and analytical evaluation labs.
        </p>
        <div class="meta-grid">
            <div class="meta-field">
                <span>Score Metrics Passed</span>
                ${retrievedScore}
            </div>
            <div class="meta-field">
                <span>Verification Code</span>
                PS-${Math.floor(100000 + Math.random() * 900000)}
            </div>
            <div class="meta-field">
                <span>Validation Date</span>
                ${formattedDateString}
            </div>
        </div>
        <div class="action-container">
            <button class="print-trigger" onclick="window.print()">Export Secure PDF / Print</button>
        </div>
    </div>
</body>
</html>
            `);

            generationSandbox.document.close();
            if(certModalDisplay) certModalDisplay.style.display = "none";
        });
    }

    // Modal Exit Boundary Watcher
    window.addEventListener("click", (e) => {
        if(e.target === certModalDisplay) {
            certModalDisplay.style.display = "none";
        }
    });
});