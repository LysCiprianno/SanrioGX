// Theme configuration
const themes = {
    helloKitty: {
        primary: '#ff69b4',
        secondary: '#ffffff',
        accent: '#ff1493',
        background: 'https://usagif.com/wp-content/uploads/gify/hello-kitty-usagif-animation-34.gif',
        name: 'Hello Kitty',
        operaIconColor: '#ff1493'
    },
    kuromi: {
        primary: '#4a0e4e',
        secondary: '#000000',
        accent: '#e5c5e5',
        background: 'https://64.media.tumblr.com/8174b2839fac6c9e960619b4a2407b77/ba163757c251285b-08/s640x960/d16f6fca6d84e87a9588da1d6b16bb3ab63c5298.gifv',
        name: 'Kuromi',
        operaIconColor: '#8a2be2',
        textColor: '#ffffff',
        newTabBg: '#6a1b9a'
    },
    myMelody: {
        primary: '#ffc0cb',
        secondary: '#ffffff',
        accent: '#ff69b4',
        background: 'https://www.icegif.com/wp-content/uploads/2023/06/icegif-546.gif',
        name: 'My Melody',
        operaIconColor: '#ff69b4'
    },
    cinnamoroll: {
        primary: '#e6f2ff',
        secondary: '#ffffff',
        accent: '#4da6ff',
        background: 'https://64.media.tumblr.com/46a06de8f2d8b2fb16616058cd6695d4/tumblr_osuhcxUuTZ1u080e1o2_500.gif',
        name: 'Cinnamoroll',
        operaIconColor: '#4da6ff'
    }
};

// Sidebar icons
const sidebarIcons = [
    { name: 'Home', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>', tooltip: 'Início' },
    { name: 'Search', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>', tooltip: 'Pesquisar' },
    { name: 'MessageSquare', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>', tooltip: 'Mensagens' },
    { name: 'Gamepad', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="18" y2="12"></line><line x1="12" y1="6" x2="12" y2="18"></line></svg>', tooltip: 'Jogos' },
    { name: 'ShoppingBag', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>', tooltip: 'Loja' },
    { name: 'Cpu', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>', tooltip: 'Desempenho' }
];

// Social media icons
const socialIcons = [
    { name: 'Facebook', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>', link: 'https://www.facebook.com/OperaBrowser' },
    { name: 'Instagram', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>', link: 'https://www.instagram.com/opera' },
    { name: 'Twitter', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>', link: 'https://twitter.com/opera' },
    { name: 'YouTube', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>', link: 'https://www.youtube.com/opera' },
    { name: 'Twitch', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg>', link: 'https://www.twitch.tv/operagx' },
    { name: 'Spotify', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>', link: 'https://open.spotify.com/user/operabrowser' }
];

// Theme-specific news
const themeNews = {
    helloKitty: [
        'Opera GX lança tema exclusivo da Hello Kitty',
        'Sanrio anuncia nova coleção de acessórios para computador Hello Kitty',
        'Opera atinge 350 milhões de usuários ativos mensais',
        'Hello Kitty se torna embaixadora digital da ONU para os Objetivos de Desenvolvimento Sustentável'
    ],
    kuromi: [
        'Opera GX adiciona modo escuro inspirado em Kuromi',
        'Kuromi lidera pesquisa de personagens favoritos da Sanrio',
        'Opera introduz AI Prompts para facilitar a navegação',
        'Sanrio lança linha de produtos de escritório temáticos de Kuromi'
    ],
    myMelody: [
        'Opera GX apresenta extensão de produtividade com tema My Melody',
        'Café temático My Melody abre em Tóquio com área de coworking',
        'Opera Browser adiciona VPN gratuita e ilimitada',
        'Sanrio anuncia colaboração com marca de fones de ouvido para linha My Melody'
    ],
    cinnamoroll: [
        'Opera GX cria playlist lo-fi com Cinnamoroll para estudos',
        'Cinnamoroll é eleito personagem do ano pela Sanrio',
        'Opera lança navegador dedicado para desenvolvedores: Opera One',
        'Sanrio abre pré-venda para coleção de acessórios tech Cinnamoroll'
    ]
};

let currentTheme = 'helloKitty';

// Function to set theme
function setTheme(theme) {
    currentTheme = theme;
    document.body.className = `theme-${theme}`;
    document.documentElement.style.setProperty('--primary-color', themes[theme].primary);
    document.documentElement.style.setProperty('--secondary-color', themes[theme].secondary);
    document.documentElement.style.setProperty('--accent-color', themes[theme].accent);
    document.documentElement.style.setProperty('--background-image', `url('${themes[theme].background}')`);
    document.getElementById('opera-icon').style.backgroundColor = themes[theme].operaIconColor;
    document.documentElement.style.setProperty('--text-color', themes[theme].textColor || '#333');
    document.documentElement.style.setProperty('--new-tab-bg', themes[theme].newTabBg || themes[theme].primary);
    updateNews();
}

// Function to update news
function updateNews() {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = '';
    themeNews[currentTheme].forEach(news => {
        const li = document.createElement('li');
        li.textContent = news;
        newsList.appendChild(li);
    });
}

// Initialize the page
function initializePage() {
    // Set initial theme
    setTheme(currentTheme);

    // Add sidebar icons
    const sidebarNav = document.querySelector('#sidebar nav');
    sidebarIcons.forEach(icon => {
        const div = document.createElement('div');
        div.className = 'sidebar-icon';
        div.setAttribute('data-tooltip', icon.tooltip);
        div.innerHTML = `
            <button class="p-2 rounded-md transition-colors">
                ${icon.icon}
            </button>
        `;
        sidebarNav.appendChild(div);
    });

    // Add theme selector buttons
    const themeSelector = document.getElementById('theme-selector');
    Object.keys(themes).forEach(theme => {
        const button = document.createElement('button');
        button.textContent = themes[theme].name;
        button.className = 'px-4 py-2 rounded-md text-white';
        button.style.backgroundColor = themes[theme].primary;
        button.onclick = () => setTheme(theme);
        themeSelector.appendChild(button);
    });

    // Add social media icons
    const socialIconsContainer = document.getElementById('social-icons');
    socialIcons.forEach(icon => {
        const a = document.createElement('a');
        a.href = icon.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'social-icon p-3 rounded-full transition-colors';
        a.innerHTML = icon.icon;
        socialIconsContainer.appendChild(a);
    });

    // Update news
    updateNews();

    // Set search bar placeholder
    document.getElementById('search-bar').placeholder = `Pesquisar com ${themes[currentTheme].name}...`;
}

// Initialize the page when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);

