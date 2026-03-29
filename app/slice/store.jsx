import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./cartslice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // بيستخدم الـ localStorage كافتراضي

// إعدادات الحفظ
const persistConfig = {
  key: "root",
  storage,
};

// إنشاء Reducer "محمي" وقابل للحفظ
const persistedReducer = persistReducer(persistConfig, cartreducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  // خطوة مهمة لتجنب أخطاء الـ Middleware مع Redux Persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);