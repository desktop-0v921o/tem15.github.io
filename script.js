const professions = {
    frontend: {
        title: "Frontend розробник",
        description: "Розробляє інтерфейси користувача та забезпечує їхню візуальну привабливість.",
        skills: ["HTML, CSS, JavaScript", "React, Vue або Angular", "Адаптивний дизайн", "Git", "Оптимізація фронтенду"]
    },
    backend: {
        title: "Backend розробник",
        description: "Створює серверну логіку, бази даних та API для додатків.",
        skills: ["Python, Java, Node.js", "SQL/NoSQL", "REST/GraphQL", "Серверне адміністрування", "Безпека"]
    },
    devops: {
        title: "DevOps інженер",
        description: "Автоматизує процеси розробки та підтримує інфраструктуру.",
        skills: ["Docker, Kubernetes", "CI/CD", "AWS/Azure/GCP", "Bash/Python", "Моніторинг"]
    },
    qa: {
        title: "Тестувальник (QA)",
        description: "Перевіряє якість продукту та знаходить помилки.",
        skills: ["Ручне тестування", "Selenium/Cypress", "Тест-кейси", "Jira", "API-тестування"]
    },
    data: {
        title: "Data Scientist",
        description: "Аналізує дані та будує прогнозні моделі.",
        skills: ["Python (Pandas, NumPy)", "TensorFlow/Scikit-learn", "SQL", "Візуалізація даних", "Статистика"]
    },
    cyber: {
        title: "Спеціаліст з кібербезпеки",
        description: "Захищає системи від загроз та атак.",
        skills: ["Мережева безпека", "Криптографія", "Penetration testing", "Linux", "SIEM"]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.profession-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.profession-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const profession = btn.getAttribute('data-profession');
            const details = professions[profession];
            document.getElementById('profession-details').innerHTML = `
                <h3>${details.title}</h3>
                <p>${details.description}</p>
                <ul>${details.skills.map(skill => `<li>${skill}</li>`).join('')}</ul>
            `;
        });
    });

    const ctaButton = document.querySelector('.cta');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            const professionsSection = document.getElementById('professions');
            if (professionsSection) {
                professionsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const sectionId = href.substring(1);
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.location.href = href;
            }
        });
    });

    document.querySelectorAll('.roadmap-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.boxShadow = '0 0 20px #66bb6a';
        });
        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = 'none';
        });
    });
});