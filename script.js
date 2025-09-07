function changeText() {
    const intro = document.getElementById('intro');
    const messages = [
        '작은 웹 프로젝트도 실제 서비스처럼 만들어 보는 것이 목표입니다.',
        '웹 개발을 공부하며 사용자 친화적인 UI/UX를 구현하고 있습니다.',
        'JavaScript와 CSS로 인터랙티브 웹사이트를 만들 수 있습니다.'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    intro.textContent = randomMessage;
}

// 페이지 로드 시 환영 메시지
window.addEventListener('load', () => {
    console.log('웹사이트가 성공적으로 로드되었습니다!');
});