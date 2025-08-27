# ROHBA (React)
تطبيق إدارة شامل جاهز للنشر على Netlify.

## حسابات الدخول
- المالك: `owner / owner123`
- الأدمن: `admin / admin123`
- العميل: `client / client123`

## التشغيل محليًا
```bash
npm install
npm start
```
ثم افتح: http://localhost:3000

## النشر على Netlify

### الطريقة الأولى: ربط المستودع
1. اربط مستودع GitHub الخاص بك مع Netlify
2. اختر الفرع المراد نشره (عادة `main` أو `master`)
3. إعدادات البناء ستكون تلقائية من ملف `netlify.toml`

### الطريقة الثانية: الرفع المباشر
1. قم ببناء المشروع محلياً:
   ```bash
   npm run build
   ```
2. ارفع مجلد `build` مباشرة إلى Netlify

### إعدادات البناء (تلقائية من netlify.toml)
- **Build Command:** `npm run build`
- **Publish Directory:** `build`
- **Node Version:** 18

## الميزات
- ✅ نظام تسجيل دخول متعدد الأدوار
- ✅ لوحة تحكم تفاعلية
- ✅ تصميم متجاوب (Responsive)
- ✅ دعم اللغة العربية
- ✅ إعدادات Netlify جاهزة
- ✅ معالجة Client-Side Routing

## هيكل المشروع
```
rohba-app/
├── public/
│   ├── index.html
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── LoginForm.js
│   │   └── Dashboard.js
│   ├── App.js
│   └── index.js
├── netlify.toml
└── package.json
```

## المشاكل التي تم حلها للنشر على Netlify
1. ✅ إضافة ملف `_redirects` لمعالجة Client-Side Routing
2. ✅ إنشاء ملف `netlify.toml` للإعدادات التلقائية
3. ✅ إضافة جميع ملفات React المطلوبة
4. ✅ تحديث التوثيق للنشر على Netlify
5. ✅ تحسين الأداء والتوافق
