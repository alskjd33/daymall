window.addEventListener("load",function(){
            // 개발자가 설정한 특정 날짜와 시간 (예: 2024년 8월 2일 24시)
            const targetDate = new Date('2024-08-15 24:00:00').getTime();

            function startCountdown(targetDate) {
                const countdownInterval = setInterval(() => {
                    const now = Date.now();
                    const remaining = targetDate - now;
    
                    if (remaining <= 0) {
                        clearInterval(countdownInterval);
                        document.getElementById('timer').textContent = ' 세일 종료!';
                        return;
                    }
    
                    const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
                    const minutes = Math.floor((remaining / (1000 * 60)) % 60);
                    const seconds = Math.floor((remaining / 1000) % 60);
    
                    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
                    document.getElementById('timer').textContent = formattedTime;
                }, 1000);
            }
    
            // 카운트다운 시작
            startCountdown(targetDate);
})