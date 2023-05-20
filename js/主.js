// 获取元素
const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');

// 注册表单提交事件
registerForm.addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单默认提交行为
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // 表单验证
  if (!username || !password) {
    alert('请填写完整的注册信息');
    return;
  }

  // 存储用户信息
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  alert('注册成功，请登录');
  // 跳转到登录页面
  loginLink.click();
});

// 登录表单提交事件
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); // 阻止表单默认提交行为
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // 表单验证
  if (!username || !password) {
    alert('请填写完整的登录信息');
    return;
  }

  // 验证用户信息
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');
  if (username !== savedUsername || password !== savedPassword) {
    alert('用户名或密码错误');
    return;
  }

  alert('登录成功');
  // 跳转到首页
  window.location.href = '0113陆沛然.html';
});

// 点击登录链接跳转到登录页面
loginLink.addEventListener('click', function(event) {
  event.preventDefault();
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
});

// 点击注册链接跳转到注册页面
registerLink.addEventListener('click', function(event) {
  event.preventDefault();
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});