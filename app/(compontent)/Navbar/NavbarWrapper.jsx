import { cookies } from "next/headers";
import Navbar from "./navbar";

export default async function NavbarWrapper() {
  // 1. يجب استدعاء cookies() وتخزينها في متغير
  const cookieStore = await cookies();
  
  // 2. الآن يمكنك استخدام cookieStore لجلب التوكن
  const token = cookieStore.get('auth_token')?.value; 
  
  // 3. تحويل القيمة لـ Boolean (true/false)
  const isLoggedIn = !!token;

  return <Navbar isLoggedIn={isLoggedIn} />;
}