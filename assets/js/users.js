const users = [
  {
    username: "TongVietHoang",
    email: "TongVietHoang@gmail.com",
    password: "Hoang123123@",
    role: "",
  },
  {
    username: "MaiXuanAn",
    email: "MaiXuanAn@gmail.com",
    password: "An123123@",
    role: "ADMIN",
  },
  {
    username: "DauQuangHieu",
    email: "DauQuangHieu@gmail.com",
    password: "Hieu123123@",
    role: "ADMIN",
  },
  {
    username: "LeGiaHuy",
    email: "LeGiaHuy@gmail.com",
    password: "Huy123123@",
    role: "ADMIN",
  },
  {
    username: "DuongTuanNam",
    email: "DuongTuanNam@gmail.com",
    password: "Nam123123@",
    role: "USER",
  },
];

const request = window.indexedDB.open("myDatabase", 2);
request.onupgradeneeded = function (event) {
  const db = event.target.result;
  if (!db.objectStoreNames.contains("ten-bang")) {
    db.createObjectStore("users", { keyPath: "username" });
  }
};
request.onsuccess = function (event) {
  const db = event.target.result;
  const transaction = db.transaction("users", "readwrite");
  const objectStore = transaction.objectStore("users");
  users.forEach((user) => {
    objectStore.put(user);
  });
};
