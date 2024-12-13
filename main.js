document.addEventListener('DOMContentLoaded', function() {
    // 登录页面逻辑
    const loginForm = document.getElementById('loginForm');
    const getCodeBtn = document.getElementById('getCode');
    
    if (getCodeBtn) {
        getCodeBtn.addEventListener('click', function() {
            const phone = document.getElementById('phone').value;
            if (validatePhone(phone)) {
                // 发送验证码
                sendVerificationCode(phone);
                startCountdown(getCodeBtn);
            } else {
                alert('请输入有效的手机号码');
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const phone = document.getElementById('phone').value;
            const code = document.getElementById('verificationCode').value;
            
            // 验证登录
            verifyLogin(phone, code);
        });
    }

    // 主页面逻辑
    const startBtn = document.getElementById('startBtn');
    const stopBtn = document.getElementById('stopBtn');
    
    if (startBtn && stopBtn) {
        startBtn.addEventListener('click', startTask);
        stopBtn.addEventListener('click', stopTask);
    }
});

function validatePhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone);
}

function sendVerificationCode(phone) {
    // 这里添加发送验证码的API调用
    console.log('发送验证码到：', phone);
}

function startCountdown(button) {
    let countdown = 60;
    button.disabled = true;
    const timer = setInterval(() => {
        button.textContent = `${countdown}秒后重试`;
        countdown--;
        if (countdown < 0) {
            clearInterval(timer);
            button.disabled = false;
            button.textContent = '获取验证码';
        }
    }, 1000);
}

function verifyLogin(phone, code) {
    // 这里添加验证登录的API调用
    console.log('验证登录：', phone, code);
    // 登录成功后跳转到主页
    window.location.href = 'index.html';
}

function startTask() {
    const targetPhone = document.getElementById('targetPhone').value;
    const duration = document.getElementById('duration').value;
    
    if (!validatePhone(targetPhone) || !duration) {
        alert('请输入有效的手机号码和执行时间');
        return;
    }
    
    document.getElementById('status').textContent = '状态：执行中';
    startBtn.disabled = true;
    stopBtn.disabled = false;
    
    // 这里添加开始任务的API调用
    console.log('开始任务：', targetPhone, duration);
}

function stopTask() {
    document.getElementById('status').textContent = '状态：已停止';
    startBtn.disabled = false;
    stopBtn.disabled = true;
    
    // 这里添加停止任务的API调用
    console.log('停止任务');
} 