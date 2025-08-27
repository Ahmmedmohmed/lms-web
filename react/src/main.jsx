import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Style
import "./index.css";

// App
import App from "./App.jsx";

//
const style = ["font-family: system-ui", "font-size: 1.2em", "color: red"].join(
    ";"
);
console.log(
    `%cانتبه! ميزة المتصفح هذه موجهة للمطورين. إذا طلب منك شخص ما نسخ ولصق أي شيء هنا لتمكين ميزة على موقعنا أو "اختراق" حساب شخص آخر، فإن هذه محاولة احتيالية وستتيح له الوصول إلى حساب مركز الفاتح الخاص بك.`,
    style
);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
