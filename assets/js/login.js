const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
// RegisterForm
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const registerForm = document.querySelector("form.registerForm");
const username = registerForm.querySelector('input[name="username"]');
const email = registerForm.querySelector('input[name="email"]');
const password = registerForm.querySelector('input[name="password"]');
const confirmPassword = registerForm.querySelector(
  'input[name="confirmPassword"]'
);
const errorMesssage = registerForm.querySelector(".erorr_message");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMesssage.innerHTML = "";
  if (registerForm.checkVisibility()) {
    const check = validateRegisterForm();
    if (check) {
      registerUser();
      window.location.href = "index.html";
    }
  }
});
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const validateRegisterForm = () => {
  // Checkusername
  const request = window.indexedDB.open("myDatabase", 2);
  request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction("users", "readwrite");
    const objectStore = transaction.objectStore("users");
    const getRequest = objectStore.getAll();
    getRequest.onsuccess = function (event) {
      const users = event.target.result;
      users.forEach((user) => {
        if (username.value === user.username) {
          errorMesssage.innerHTML = "Tài khoản đã tồn tại";
          return false;
        }
      });
    };
  };
  // Checkpassword
  let valuePassWord = password.value;
  let valueConfirmPassWord = confirmPassword.value;
  if (valuePassWord !== valueConfirmPassWord) {
    errorMesssage.innerHTML = "Mật khẩu nhập lại không khớp";
    return false;
  }
  if (passwordPattern.test(valuePassWord) === false) {
    errorMesssage.innerHTML =
      "Mật khẩu có ít nhất một chữ hoa, một chữ thường, một chữ số và một ký tự đặc biệt";
    return false;
  }
  return true;
};

// Sign In
const signInForm = document.querySelector("form.loginForm");
const usernameSignIn = signInForm.querySelector('input[name="signInUsername"]');
const passwordSignIn = signInForm.querySelector('input[name="signInPassword"]');
const erorrMessageSignIn = signInForm.querySelector(".erorr_message");
signInForm.addEventListener("submit", (e) => {
  erorrMessageSignIn.innerHTML = "";
  e.preventDefault();
  const request = window.indexedDB.open("myDatabase", 2);
  request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction("users", "readwrite");
    const objectStore = transaction.objectStore("users");
    const getRequest = objectStore.getAll();
    getRequest.onsuccess = function (event) {
      const users = event.target.result;
      users.forEach((user) => {
        if (
          usernameSignIn.value === user.username &&
          passwordSignIn.value === user.password
        ) {
          const newUser = {
            username: user.username,
            email: user.email,
            role: user.role,
          };
          localStorage.setItem("user", JSON.stringify(newUser));
          if (user.role == "ADMIN") {
            window.location.href = "admin-dashboard.html";
            return 0;
          } else {
            window.location.href = "home.html";
            return 0;
          }
        }
      });
      erorrMessageSignIn.innerHTML = "Tài khoản và mật khẩu không đúng";
    };
  };
});

const registerUser = () => {
  const request = window.indexedDB.open("myDatabase", 2);
  request.onsuccess = function (event) {
    const db = event.target.result;
    const transaction = db.transaction("users", "readwrite");
    const objectStore = transaction.objectStore("users");
    const newUser = {
      username: username.value,
      email: email.value,
      password: password.value,
      role: "USER",
    };
    objectStore.put(newUser);
  };
};
