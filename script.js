// Law details database
const lawDetails = {
    'IPC': {
        title: 'Indian Penal Code (IPC)',
        content: `
            <h3>Indian Penal Code (IPC)</h3>
            <p>The Indian Penal Code, 1860 is the main criminal law of India. It defines various crimes and punishments.</p>
            <h4>Key Sections:</h4>
            <ul>
                <li><strong>Section 304:</strong> Death by negligence - Punishment up to 2 years imprisonment</li>
                <li><strong>Section 354:</strong> Assault or criminal force to woman with intent to outrage modesty - Up to 2 years imprisonment</li>
                <li><strong>Section 376:</strong> Rape - Punishment 7 years to life imprisonment</li>
                <li><strong>Section 498A:</strong> Cruelty by husband or relatives - Up to 3 years imprisonment</li>
                <li><strong>Section 506:</strong> Criminal intimidation - Up to 2 years imprisonment</li>
                <li><strong>Section 509:</strong> Outraging modesty of a woman - Up to 3 years imprisonment</li>
            </ul>
            <p><strong>When to use:</strong> When you face any criminal offense and want to understand the applicable law and punishment.</p>
        `
    },
    'CrPC': {
        title: 'Criminal Procedure Code (CrPC)',
        content: `
            <h3>Criminal Procedure Code (CrPC)</h3>
            <p>The Code of Criminal Procedure, 1973 defines the procedure for criminal cases in India.</p>
            <h4>Key Points:</h4>
            <ul>
                <li><strong>Section 41:</strong> Rules for arrest without warrant</li>
                <li><strong>Section 58:</strong> Search of persons arrested</li>
                <li><strong>Section 161:</strong> Examination of witnesses by police</li>
                <li><strong>Section 356:</strong> Procedure for filing bail</li>
                <li><strong>Section 437:</strong> Bail in case of non-bailable offense</li>
            </ul>
            <p><strong>Key provisions:</strong> Guarantees right to legal counsel, provides bail procedures, and ensures fair trial process.</p>
        `
    },
    'POSH': {
        title: 'Protection of Women from Domestic Violence Act, 2005',
        content: `
            <h3>Domestic Violence Act, 2005</h3>
            <p>This law provides protection to women from domestic violence including physical, sexual, verbal, emotional, and economic abuse.</p>
            <h4>What constitutes Domestic Violence:</h4>
            <ul>
                <li>Physical abuse - Hitting, kicking, burning, throwing objects</li>
                <li>Sexual abuse - Non-consensual sexual acts</li>
                <li>Verbal and emotional abuse - Insulting, threatening</li>
                <li>Economic abuse - Denying access to money or resources</li>
            </ul>
            <h4>Remedies available:</h4>
            <ul>
                <li>Protection order - To prevent further abuse</li>
                <li>Residence order - Right to stay in the shared household</li>
                <li>Custody order - For children</li>
                <li>Maintenance - Financial support</li>
                <li>Compensation - For injuries and loss</li>
            </ul>
        `
    },
    'SH': {
        title: 'Sexual Harassment of Women at Workplace Act (POSH)',
        content: `
            <h3>Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</h3>
            <p>This law provides protection to women against sexual harassment at workplace.</p>
            <h4>What constitutes Sexual Harassment:</h4>
            <ul>
                <li>Unwelcome sexually determined behavior (verbal, non-verbal, physical)</li>
                <li>Casting aspersions on morality</li>
                <li>Unwelcome sexual overtures</li>
                <li>Unwelcome physical contact</li>
            </ul>
            <h4>Your Rights:</h4>
            <ul>
                <li>Report to Internal Complaints Committee (ICC)</li>
                <li>File written complaint</li>
                <li>Free and fair investigation</li>
                <li>Action against perpetrator</li>
                <li>Protection from retaliation</li>
            </ul>
        `
    },
    'ITA': {
        title: 'Information Technology Act, 2000',
        content: `
            <h3>Information Technology Act, 2000</h3>
            <p>This law covers cyber crimes and digital transactions in India.</p>
            <h4>Punishable Cyber Crimes:</h4>
            <ul>
                <li>Hacking - Accessing without permission</li>
                <li>Identity theft - Using someone else's identity</li>
                <li>Phishing - Deceptive attempts to get information</li>
                <li>Cyber bullying - Sending threatening messages online</li>
                <li>Child sexual abuse material - Creating, distributing, possessing</li>
            </ul>
            <h4>How to report:</h4>
            <ul>
                <li>Contact local cyber police cell</li>
                <li>File complaint on cybercrime.gov.in</li>
                <li>Provide evidence and proof of crime</li>
            </ul>
        `
    },
    'RTI': {
        title: 'Right to Information Act, 2005',
        content: `
            <h3>Right to Information (RTI) Act, 2005</h3>
            <p>This law gives you the right to access information held by public authorities.</p>
            <h4>What information can you request:</h4>
            <ul>
                <li>Government records and files</li>
                <li>Decisions and policies</li>
                <li>Budget and expenditure details</li>
                <li>Information about public servants</li>
            </ul>
            <h4>RTI Procedure:</h4>
            <ul>
                <li>Write to Public Information Officer (PIO)</li>
                <li>Pay fee (usually ₹10)</li>
                <li>Government must respond in 30 days</li>
                <li>Can appeal to First Appellate Authority</li>
            </ul>
            <h4>Exemptions:</h4>
            <ul>
                <li>National security information</li>
                <li>Personal information of individuals</li>
                <li>Privileged communication</li>
            </ul>
        `
    }
};

// FAQ data
const faqs = [
    {
        question: "What should I do if I'm a victim of domestic violence?",
        answer: "You can file a complaint under the Protection of Women from Domestic Violence Act, 2005. Contact your local police station or women's helpline for immediate assistance. You can also approach a lawyer to file a case for protection."
    },
    {
        question: "How do I file an FIR?",
        answer: "You can file an FIR at your local police station. You can go in person, send a written letter, or file online on the police website. Provide all relevant details and evidence. You have the right to obtain a copy of your FIR."
    },
    {
        question: "What is Right to Information (RTI)?",
        answer: "RTI is your right to request information from public authorities. You can file an RTI application with the government office. They must respond within 30 days. There's a small fee involved, typically ₹10."
    },
    {
        question: "What is cyber harassment?",
        answer: "Cyber harassment includes sending threatening messages, spreading rumors, or abusive content online. It's punishable under the IT Act. You can report it to the cyber cell and file a police complaint. Document all evidence."
    },
    {
        question: "How much time does a court case take?",
        answer: "Court cases typically take 2-5 years depending on complexity and court load. Civil cases may take longer than criminal cases. Regular follow-ups with your lawyer can help expedite the process."
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
    initializeLaws();
});

function setupEventListeners() {
    // Chat input
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Law search
    const lawSearch = document.getElementById('law-search');
    if (lawSearch) {
        lawSearch.addEventListener('input', filterLaws);
    }

    // Close modal on background click
    const modal = document.getElementById('detailModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
}

function initializeLaws() {
    const lawsList = document.getElementById('laws-list');
    if (!lawsList) return;

    const laws = Object.keys(lawDetails).map(key => ({
        id: key,
        title: lawDetails[key].title
    }));
}

function filterLaws(e) {
    const searchTerm = e.target.value.toLowerCase();
    const lawsGrid = document.getElementById('laws-list');
    
    if (!lawsGrid) return;

    const items = lawsGrid.querySelectorAll('.law-item');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
}

function showDetail(lawId) {
    const detail = lawDetails[lawId];
    if (!detail) return;

    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = detail.content;
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('show');
}

function toggleFAQ(button) {
    const faqItem = button.closest('.faq-item');
    const allFaqItems = document.querySelectorAll('.faq-item');
    
    allFaqItems.forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });
    
    faqItem.classList.toggle('active');
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!chatInput.value.trim()) return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user-message';
    userMessage.innerHTML = `<p>${escapeHtml(chatInput.value)}</p>`;
    chatMessages.appendChild(userMessage);

    const userQuery = chatInput.value.toLowerCase();
    chatInput.value = '';

    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.className = 'message bot-message';
        botMessage.innerHTML = `<p>${generateBotResponse(userQuery)}</p>`;
        chatMessages.appendChild(botMessage);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 500);
}

function generateBotResponse(query) {
    // Simple keyword-based responses
    if (query.includes('domestic violence') || query.includes('abuse')) {
        return "If you're facing domestic violence, you can file a case under the Protection of Women from Domestic Violence Act, 2005. Please contact the local police or call a women's helpline for immediate assistance.";
    }
    if (query.includes('fir') || query.includes('complaint')) {
        return "You can file an FIR at your local police station or online through the police website. An FIR is the first step in starting a criminal investigation.";
    }
    if (query.includes('rti') || query.includes('information')) {
        return "RTI (Right to Information) allows you to request information from government authorities. You need to file a formal application with the relevant government office.";
    }
    if (query.includes('cyber')) {
        return "Cyber crimes are punishable under the Information Technology Act, 2000. Report cyber harassment, hacking, or online fraud to the cyber cell or file a complaint on cybercrime.gov.in";
    }
    if (query.includes('women') || query.includes('rights')) {
        return "Women have specific legal rights including protection from harassment, equal pay, maternity benefits, and property rights. I can provide more specific information if you ask about a particular right.";
    }
    if (query.includes('divorce') || query.includes('marriage')) {
        return "For marriage and divorce related matters, you need to consult a family law attorney. Different rules apply for Hindu, Muslim, Christian, and civil marriages.";
    }
    if (query.includes('bail')) {
        return "Bail is a procedure allowing a person accused of a crime to be released from custody while awaiting trial. You have the right to apply for bail in most non-bailable offenses.";
    }
    if (query.includes('inheritance') || query.includes('property')) {
        return "Property and inheritance matters are governed by the Indian Succession Act. You should consult with a lawyer for specific advice on your situation.";
    }
    
    return "Thank you for your question. For specific legal advice about your situation, I recommend consulting with a qualified lawyer. Would you like to know about a specific law or procedure?";
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function navigateTo(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
