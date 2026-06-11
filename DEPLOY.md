# Deploy على Vercel (من الصفر أو تحديث المشروع)

## قبل ما تديبلوي (محليًا)

من جذر المشروع:

```bash
npm install
npm run check:deploy
```

يجب أن ينتهي بدون أخطاء (يُنشئ مجلّد `dist` محليًا؛ لا ترفعه لـ Git — موجود في `.gitignore`).

## ديبلوي جديد تمامًا من لوحة Vercel

1. ادخل **https://vercel.com/dashboard** وسجّل دخول.
2. **Add New… → Project** (أو **Import Project**).
3. ربّط حساب **GitHub** لو مطلوب، واختر الريبو: **`ahany9710-cyber/-sodic`**.
4. إعدادات المشروع (اترك الافتراضي إذا تطابق الجدول):

   | الإعداد           | القيمة                                        |
   | ----------------- | --------------------------------------------- |
   | Framework         | **Vite** (أو Other إذا لم يكتشف — لا مشكلة)   |
   | Root Directory    | `./` (الجذر)                                   |
   | Install Command    | يُقرأ من `vercel.json` → `npm ci --no-audit --no-fund` |
   | Build Command      | يُقرأ من `vercel.json` → `npm run build`      |
   | Output Directory   | **`dist`**                                    |

5. **Environment Variables**: لا تحتاج متغيرات للبناء الحالي (الـ `config` ثابت في `src/config.js`). لو أضفت لاحقًا `VITE_*` أو أسرار، ضيفها هنا.
6. اضغط **Deploy**.

بعد أول ديبلوي، كل **push** على الفرع المتصل (مثل `main`) يُعيد البناء تلقائيًا.

## لو عندك مشروع قديم على Vercel وعايز «تصفير»

- من **Project → Settings → General**: يمكنك **Delete Project** ثم إنشاء مشروع جديد بنفس الريبو (الخطوات أعلاه).
- أو تبقي نفس المشروع وتعمل **Redeploy** من آخر commit: **Deployments → … → Redeploy**.

## لو الـ build فشل على Vercel

- افتح **Deployment → Building → Logs** وشوف أول سطر أحمر.
- تأكد أن **`package-lock.json` مرفوع** مع `package.json` (عشان `npm ci` ينجح).
- تأكد أن **Node** على Vercel ≥ 20 (المشروع يحدد `"engines": { "node": ">=20" }`).

## (اختياري) ديبلوي من التيرمنال بـ Vercel CLI

```bash
npm i -g vercel
cd /path/to/-sodic
vercel login
vercel
```

اتبع الأسئلة؛ الملف `vercel.json` في الجذر يوجّه الأوامر والـ `dist` وSPA rewrites.
