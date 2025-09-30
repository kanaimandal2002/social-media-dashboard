const mockTwitterData = [
    {
        username: "TechNews",
        handle: "@technews",
        content: "Breaking: New AI model breaks performance records in language understanding tasks.",
        timestamp: "2 hours ago",
        likes: 245,
        retweets: 89,
        comments: 32
    },
    {
        username: "WebDev Tips",
        handle: "@webdevtips",
        content: "Just published a comprehensive guide to CSS Grid. Check it out!",
        timestamp: "5 hours ago",
        likes: 120,
        retweets: 45,
        comments: 18
    },
    {
        username: "JavaScript Daily",
        handle: "@jsdaily",
        content: "The new ES2023 features are now available in most major browsers.",
        timestamp: "1 day ago",
        likes: 342,
        retweets: 156,
        comments: 47
    }
];

const mockRedditData = [
    {
        subreddit: "r/programming",
        username: "u/code_wizard",
        title: "I built a social media dashboard that aggregates feeds from multiple platforms",
        content: "What do you think about this approach? Would you use something like this?",
        timestamp: "3 hours ago",
        upvotes: 124,
        comments: 28
    },
    {
        subreddit: "r/webdev",
        username: "u/frontend_fan",
        title: "Showoff Saturday: My new portfolio website built with vanilla JS",
        content: "",
        timestamp: "7 hours ago",
        upvotes: 89,
        comments: 15
    },
    {
        subreddit: "r/technology",
        username: "u/tech_enthusiast",
        title: "Major social media platforms announce new API policies",
        content: "This could affect many third-party applications that rely on these APIs.",
        timestamp: "1 day ago",
        upvotes: 542,
        comments: 103
    }
];

const mockFacebookData = [
    {
        username: "Web Development Group",
        content: "Our next online meetup is scheduled for next Friday. Topic: Advanced CSS Techniques.",
        timestamp: "4 hours ago",
        likes: 56,
        comments: 12,
        shares: 5
    },
    {
        username: "Tech Conference 2023",
        content: "Early bird tickets are now available! Don't miss out on our biggest event yet.",
        timestamp: "1 day ago",
        likes: 234,
        comments: 34,
        shares: 28
    }
];

const mockInstagramData = [
    {
        username: "ui.design",
        content: "Check out this beautiful dashboard design I created for a client project.",
        image: "https://picsum.photos/400/300?random=1",
        timestamp: "6 hours ago",
        likes: 1245,
        comments: 87
    },
    {
        username: "web.inspiration",
        content: "Minimalist design inspiration for your next project.",
        image: "https://picsum.photos/400/300?random=2",
        timestamp: "1 day ago",
        likes: 2890,
        comments: 134
    }
];

// Function to render posts for each platform
function renderTwitterPosts() {
    const container = document.getElementById('twitter-feed');
    container.innerHTML = '';
    
    mockTwitterData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        postElement.innerHTML = `
            <div class="post-header">
                <div class="avatar">${post.username.charAt(0)}</div>
                <div class="post-info">
                    <div class="username">${post.username} ${post.handle}</div>
                    <div class="timestamp">${post.timestamp}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-stats">
                <div class="stat">
                    <i class="far fa-comment"></i> ${post.comments}
                </div>
                <div class="stat">
                    <i class="fas fa-retweet"></i> ${post.retweets}
                </div>
                <div class="stat">
                    <i class="far fa-heart"></i> ${post.likes}
                </div>
            </div>
        `;
        
        container.appendChild(postElement);
    });
}

function renderRedditPosts() {
    const container = document.getElementById('reddit-feed');
    container.innerHTML = '';
    
    mockRedditData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        postElement.innerHTML = `
            <div class="post-header">
                <div class="avatar">${post.username.charAt(0)}</div>
                <div class="post-info">
                    <div class="username">${post.subreddit} • ${post.username}</div>
                    <div class="timestamp">${post.timestamp}</div>
                </div>
            </div>
            <div class="post-content">
                <strong>${post.title}</strong>
                ${post.content ? `<p>${post.content}</p>` : ''}
            </div>
            <div class="post-stats">
                <div class="stat">
                    <i class="fas fa-arrow-up"></i> ${post.upvotes}
                </div>
                <div class="stat">
                    <i class="far fa-comment"></i> ${post.comments}
                </div>
            </div>
        `;
        
        container.appendChild(postElement);
    });
}

function renderFacebookPosts() {
    const container = document.getElementById('facebook-feed');
    container.innerHTML = '';
    
    mockFacebookData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        postElement.innerHTML = `
            <div class="post-header">
                <div class="avatar">${post.username.charAt(0)}</div>
                <div class="post-info">
                    <div class="username">${post.username}</div>
                    <div class="timestamp">${post.timestamp}</div>
                </div>
            </div>
            <div class="post-content">${post.content}</div>
            <div class="post-stats">
                <div class="stat">
                    <i class="far fa-thumbs-up"></i> ${post.likes}
                </div>
                <div class="stat">
                    <i class="far fa-comment"></i> ${post.comments}
                </div>
                <div class="stat">
                    <i class="far fa-share-square"></i> ${post.shares}
                </div>
            </div>
        `;
        
        container.appendChild(postElement);
    });
}

function renderInstagramPosts() {
    const container = document.getElementById('instagram-feed');
    container.innerHTML = '';
    
    mockInstagramData.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'post';
        
        postElement.innerHTML = `
            <div class="post-header">
                <div class="avatar">${post.username.charAt(0)}</div>
                <div class="post-info">
                    <div class="username">${post.username}</div>
                    <div class="timestamp">${post.timestamp}</div>
                </div>
            </div>
            <div class="post-content">
                <p>${post.content}</p>
                <img src="${post.image}" alt="Instagram post" class="post-image">
            </div>
            <div class="post-stats">
                <div class="stat">
                    <i class="far fa-heart"></i> ${post.likes}
                </div>
                <div class="stat">
                    <i class="far fa-comment"></i> ${post.comments}
                </div>
            </div>
        `;
        
        container.appendChild(postElement);
    });
}

// Function to simulate loading data
function loadAllFeeds() {
    // Simulate API delay
    setTimeout(() => {
        renderTwitterPosts();
        renderRedditPosts();
        renderFacebookPosts();
        renderInstagramPosts();
    }, 1000);
}

// Event listeners
document.getElementById('refreshBtn').addEventListener('click', () => {
    // Show loading states
    document.querySelectorAll('.card-content').forEach(container => {
        container.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
    });
    
    // Reload feeds after a short delay
    setTimeout(loadAllFeeds, 1500);
});

document.getElementById('settingsBtn').addEventListener('click', () => {
    alert('In a real implementation, this would open settings to configure API keys and preferences.');
});

// Initialize the dashboard
loadAllFeeds();
