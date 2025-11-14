window.onload = function() {
    const tips = [
        "'Tip #1: Adopt the 13-Period Year Mindset. Don’t just budget monthly. Think in 13 four-week periods. This simple shift makes cash flow forecasting more accurate and helps you better manage the financial ebbs and flows of a full year.'",
        "'Tip #2: Invoice Immediately, Follow Up Diligently. The moment a job is done or a product is delivered, send the invoice. Use calendar reminders or accounting software for polite but firm follow-ups. Speed in invoicing is key to healthy cash flow.'",
        "'Tip #3: Cultivate a Deposit Culture. For large projects or custom orders, always require a deposit (e.g., 30-50%). This improves your cash inflow upfront, covers initial costs, and secures client commitment.'",
        "'Tip #4: Negotiate Supplier Terms, Don’t Just Accept Them. Proactively manage your payables. Negotiate with suppliers for extended payment terms (e.g., net-30 or net-60). Strong relationships can often secure you better credit, easing cash flow pressure.'",
        "'Tip #5: Maintain a Strategic Cash Flow Cushion. Aim to keep enough cash in reserve to cover 3–6 months of core operating expenses. This buffer is your primary defense against unexpected slow periods, client defaults, or economic shifts.'",

        "'Tip #6: Know the Critical Difference: Avoidance vs. Evasion. Tax avoidance (using legal deductions and incentives) is smart financial planning. Tax evasion (willfully hiding income) is a crime with severe penalties. Always choose the path of full compliance.'",
        "'Tip #7: Be Proactive with Legitimate Deductions. Meticulously keep receipts for all business-related expenses including vehicle use (log your mileage!), home office costs, professional development, and business meals. These legally reduce your taxable income.'",
        "'Tip #8: The Golden Rule: Separate Personal and Business Banking. Commingling funds is a major red flag for tax authorities. A dedicated business bank account creates a clear audit trail, proves business intent, and simplifies tax preparation.'",
        "'Tip #9: Prioritize On-Time Filing and Payments. Late filing penalties and interest can cripple a small business. Use digital calendars or accounting software alerts to stay on top of all tax deadlines.'",
        "'Tip #10: Schedule an Annual Check-up with a Tax Advisor. Tax laws change frequently. An annual consultation with a qualified accountant can uncover new deductions and confirm that your business structure is still tax-efficient.'",

        "'Tip #11: Build Scenarios into Your Budget. Don’t rely on one forecast. Create best-case, worst-case, and most-likely-case scenarios to prepare for market volatility and sudden cost changes.'",
        "'Tip #12: Always Budget for a Contingency Fund. Include a 10–15% contingency line for unexpected expenses. This prevents your budget from derailing when emergencies arise.'",
        "'Tip #13: Use the Digital Envelope System for Discretionary Spending. Allocate fixed monthly budgets for flexible expenses such as marketing and supplies. Stop spending once a category’s “envelope” is empty.'",
        "'Tip #14: Harness the Power of Zero-Based Budgeting. Justify every expense anew each period. This method forces efficiency and better aligns spending with current goals.'",
        "'Tip #15: Create Bottom-Up Budgets with Team Input. Involve department leaders when forecasting expenses. Their insights improve accuracy and build ownership in the budgeting process.'",

        "'Tip #16: Embrace Digital Tools, But Have a Backup Plan. Use cloud-based accounting software daily, but maintain organized physical backups for critical documents.'",
        "'Tip #17: Implement the One-Touch Receipt Rule. Process receipts immediately by photographing and uploading them. This prevents backlog and ensures all deductions are captured.'",
        "'Tip #18: Reconcile Bank Accounts Weekly. Weekly reconciliation catches errors and fraud early while giving you a real-time picture of your cash position.'",
        "'Tip #19: Standardize Your Chart of Accounts. A clear, consistent list of income and expense categories makes your financial statements meaningful, comparable, and easy to analyze.'",
        "'Tip #20: Document the Business Purpose for Every Expense. Add short notes to receipts or memo fields explaining the purpose. This creates a strong audit trail and supports deductions.'",

        "'Tip #21: Map Your Core Financial Cycles. Visually outline your Order-to-Cash (receivables) and Procure-to-Pay (payables) cycles to identify inefficiencies and bottlenecks.'",
        "'Tip #22: Enforce a Three-Way Match for Supplier Payments. Match every invoice with the Purchase Order and Goods Received Note before paying. This protects against fraud and overpayment.'",
        "'Tip #23: Use Sequential Numbering for All Documents. Number invoices, receipts, and purchase orders in order to ensure completeness and make missing documents easy to identify.'",
        "'Tip #24: Automate Recurring Transactions. Schedule automatic entries for fixed monthly expenses like rent and subscriptions to save time and reduce manual-entry errors.'",
        "'Tip #25: Establish a Strict Month-End Closing Checklist. A standardized monthly closing checklist ensures accuracy, timeliness, and completeness in your financial reporting.'",

        "'Tip #26: Identify and Monitor Your KPIs. Track critical indicators like Gross Profit Margin, Accounts Receivable Days, and Inventory Turnover to understand your business’s financial health.'",
        "'Tip #27: Conduct Profitability Analysis by Segment. Identify which products, services, or clients generate the most profit and allocate resources strategically.'",
        "'Tip #28: Use Aged Receivable Reports as an Action Tool. Follow up immediately on clients aging into the 31–60 day category to prevent delinquent payments.'",
        "'Tip #29: Seek Out Industry Benchmarks. Compare your performance to industry averages to spot strengths, weaknesses, and areas for improvement.'",
        "'Tip #30: Schedule a Monthly Financial Review Meeting. Dedicate time each month to review financial statements and use insights to guide strategic decision-making.'"
    ];


    let index = 0;
    const tipElement = document.getElementById("tip-text");

    // Show first tip immediately
    tipElement.textContent = tips[index];
    index = (index + 1) % tips.length;

    setInterval(() => {
        // Fade out first
        tipElement.style.opacity = 0;

        // Wait for the fade-out to complete
        setTimeout(() => {
            // Update text
            tipElement.textContent = tips[index];
            index = (index + 1) % tips.length;

            // Fade back in
            tipElement.style.opacity = 1;
        }, 1000); // must match CSS transition duration
    }, 7000);
};


//--------------------------LINE ADJUSTMENT CODE-------------------------------------------
const lines = document.querySelectorAll('.line');

function updateLineLength() {
    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;

    lines.forEach(line => {
        const rect = line.getBoundingClientRect();

        // Distance from top of line to center of viewport
        let distance = rect.top - viewportCenter;

        // Map distance to 0–1 progress
        const maxDistance = viewportHeight / 2;
        let progress = 1 - Math.abs(distance) / maxDistance;

        // Clamp between 0 and 1
        progress = Math.min(Math.max(progress, 0), 1);

        // **Optional: don't let the line shrink once fully grown**
        const currentWidth = parseFloat(line.style.width) || 0;
        const maxWidth = line.parentElement.offsetWidth * 1.2;

        // Only grow, never shrink
        const newWidth = Math.max(currentWidth, progress * maxWidth);
        line.style.width = `${newWidth}px`;
    });
}

window.addEventListener('scroll', updateLineLength);
window.addEventListener('resize', updateLineLength);
window.addEventListener('load', updateLineLength);


//--------------------------------HAMBURGER------------------------------------
// Hamburger
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.dropdown');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

//--------------------------------COPYRIGHT YEAR----------------------------------
document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('copyright-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
});

//-------------------------------CALENDLY-----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // Get elements
    const overlay = document.getElementById("calendlyOverlay");
    const closeBtn = document.getElementById("closeCalendly");

    // Open Calendly modal when "Book Consult" is clicked
    document.querySelectorAll(".book-consult").forEach(button => {
        button.addEventListener("click", () => {
            overlay.style.display = "flex";
            document.body.style.overflow = "hidden"; // Prevent scrolling in background
        });
    });

    // Open Calendly modal when "Let's Get Started" is clicked
    document.querySelectorAll(".get-started").forEach(button => {
        button.addEventListener("click", () => {
            overlay.style.display = "flex";
            document.body.style.overflow = "hidden"; // Prevent scrolling in background
        });
    });

    // Close modal
    closeBtn.addEventListener("click", () => {
        overlay.style.display = "none";
        document.body.style.overflow = "auto";
    });

    // Close when clicking outside modal
    overlay.addEventListener("click", e => {
        if (e.target === overlay) {
            overlay.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });

});

//----------------------SERVICES-SERVICE PAGE----------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const services = document.querySelectorAll(".service");

    // Set initial hidden state
    services.forEach(service => {
        service.style.opacity = "0";
        service.style.transform = "translateY(40px)";
        service.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    // Observer for fade-in animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // fade in only once
            }
        });
    }, {
        threshold: 0.2 // trigger when 20% visible
    });

    // Observe each service element
    services.forEach(service => observer.observe(service));
});
