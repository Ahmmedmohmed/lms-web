// ======================================================================================================
// ******************************************************************************************************
export const formatDateX = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(new Date(date));

export const formatDateCity = (date) =>
    new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    }).format(new Date(date));

// ======================================================================================================
// ******************************************************************************************************
//
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function formatDuration(duration) {
    return duration;
}

export const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("ar-SA");
};

// ======================================================================================================
// ******************************************************************************************************
//
// دالة التحقق من صحة رابط الصورة
export const validateImageUrl = (url) => {
    if (!url) return true; // السماح بحقل فارغ
    const pattern =
        /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))(?:[\?#].*)?$/i;
    return (
        pattern.test(url) ||
        "الرابط غير صالح، يجب أن يكون رابط صورة (png, jpg, jpeg, gif, webp, svg)"
    );
};

// export const validateImageUrl = (url) => {
//     if (!url) return true; // السماح بحقل فارغ

//     const pattern =
//         /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|tiff))(?:[\?#].*)?$/i;

//     if (pattern.test(url)) {
//         return true;
//     } else {
//         return "الرابط غير صالح، يجب أن يكون رابط صورة (png, jpg, jpeg, gif, webp, svg, bmp, tiff)";
//     }
// };

// ======================================================================================================
// ******************************************************************************************************
//
export const formatDateAR = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("ar-EG", options);
};

// ======================================================================================================
// ******************************************************************************************************
//
export const formatDateDay = (dateString) => {
    const date = new Date(dateString);
    const days = [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت",
    ];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${dayName} ${day}/${month}/${year}`;
};

// ======================================================================================================
// ******************************************************************************************************
//
export const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
};

// ======================================================================================================
// ******************************************************************************************************
// 

export const formatDateTimeLiveQuran = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('ar-EG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};


// ======================================================================================================
// ******************************************************************************************************

// ======================================================================================================
// ******************************************************************************************************
