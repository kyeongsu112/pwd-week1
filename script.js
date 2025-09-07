function changeText() {
    const intro = document.getElementById('intro');
    const messages = [
        '안녕하세요. 저는 웹 개발을 공부하고 있는 진경수입니다.',
        'HTML, CSS, JavaScript를 활용해 작은 프로젝트를 만들고 있습니다.',
        '앞으로는 React와 백엔드까지 배워서 멋진 서비스를 만드는 것이 목표입니다.'
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    intro.textContent = randomMessage;
}

// 페이지 로드 시 환영 메시지
window.addEventListener('load', () => {
    console.log('웹사이트가 성공적으로 로드되었습니다!');
});