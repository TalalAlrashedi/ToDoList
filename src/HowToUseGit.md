# 🛠️ تهيئة مستودع Git جديد
git init  

# 🔗 ربط المشروع بمستودع GitHub/GitLab
git remote add origin رابط_المستودع  
git remote -v  

# 📂 إضافة الملفات إلى Git
git add .  # إضافة جميع الملفات  
git add file.txt  # إضافة ملف معين  

# 💾 حفظ التعديلات (Commit)
git commit -m "وصف التعديل"  

# 🚀 رفع التعديلات إلى المستودع البعيد
git push origin main  

# 🔄 جلب التعديلات من المستودع البعيد
git pull origin main  

# 📌 التحقق من حالة المستودع
git status  

# 📜 مشاهدة تاريخ التعديلات
git log  
git log --oneline --graph --all  

# 🔙 استرجاع ملف تم تعديله قبل الحفظ
git checkout -- file.txt  

# ⏪ التراجع عن آخر commit (قبل رفعه)
git reset --soft HEAD~1  # إبقاء التعديلات في Staging  
git reset --hard HEAD~1  # حذف التعديلات نهائيًا  

# 🗑️ حذف ملف مرفوع إلى المستودع
git rm -r --cached file.txt  
git commit -m "Removed file.txt"  
git push origin main  

# 🌿 إنشاء فرع جديد والتنقل بين الفروع
git branch new-branch  # إنشاء فرع جديد  
git checkout new-branch  # الانتقال إلى الفرع الجديد  
git switch new-branch  # بديل أحدث لـ checkout  

# 🔄 دمج فرع مع `main`
git checkout main  
git merge new-branch  
git push origin main  