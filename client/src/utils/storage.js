// دوال لحفظ واسترجاع بيانات المستخدم من localStorage

export const storage = {
  // حفظ بيانات المستخدم
  saveUser: (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
  },

  // جلب بيانات المستخدم
  getUser: () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  // حذف بيانات المستخدم (Logout)
  removeUser: () => {
    localStorage.removeItem('user');
  },

  // حفظ كل المستخدمين المسجلين
  saveAllUsers: (users) => {
    localStorage.setItem('allUsers', JSON.stringify(users));
  },

  // جلب كل المستخدمين
  getAllUsers: () => {
    const users = localStorage.getItem('allUsers');
    return users ? JSON.parse(users) : [];
  },

  // حفظ نتيجة الاختبار
  saveQuizResult: (userId, result) => {
    const key = `quiz_result_${userId}`;
    localStorage.setItem(key, JSON.stringify(result));
  },

  // جلب نتيجة الاختبار
  getQuizResult: (userId) => {
    const key = `quiz_result_${userId}`;
    const result = localStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  }
};