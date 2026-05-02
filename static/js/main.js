// Global notification function
function showNotification(message, type = 'success') {
    // Remove any existing notification
    const existing = document.querySelector('.notification-toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = 'notification-toast';
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    
    // Add styles dynamically
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #1E293B;
        border-left: 4px solid ${type === 'success' ? '#22C55E' : '#EF4444'};
        padding: 12px 20px;
        border-radius: 12px;
        color: white;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.4);
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 8px;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast && toast.remove) toast.remove();
    }, 3000);
}

// Add animation styles if not present
if (!document.querySelector('#toast-animation-style')) {
    const style = document.createElement('style');
    style.id = 'toast-animation-style';
    style.textContent = `
        @keyframes slideInRight {
            from { opacity: 0; transform: translateX(100px); }
            to { opacity: 1; transform: translateX(0); }
        }
    `;
    document.head.appendChild(style);
}
