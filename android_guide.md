# دليل تحويل المنصة إلى تطبيق أندرويد (Android Studio)

هذا الدليل يشرح كيفية تحويل "منصة الرياضيات التفاعلية" إلى تطبيق أندرويد باستخدام Android Studio ومكون WebView.

## المتطلبات
- Android Studio مثبت على جهازك.
- JDK (Java Development Kit).

## الخطوات

### 1. إنشاء مشروع جديد
1. افتح Android Studio.
2. اختر **New Project**.
3. اختر **Empty Activity** (أو Empty Views Activity في النسخ الحديثة).
4. املأ البيانات:
   - **Name**: Math Platform
   - **Package name**: com.mathplatform.app
   - **Language**: Java
   - **Minimum SDK**: API 24 (Android 7.0) أو أحدث.
5. اضغط **Finish**.

### 2. إعداد الأذونات (Permissions)
افتح ملف `AndroidManifest.xml` (موجود في `app/src/main/AndroidManifest.xml`) وأضف إذن الإنترنت قبل وسم `<application>`:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

### 3. نسخ ملفات الموقع
1. في مشروع Android Studio، اذهب إلى المجلد `app/src/main`.
2. أنشئ مجلدًا جديدًا باسم `assets`.
3. انسخ جميع ملفات مشروع الويب (html, css, js, images) إلى داخل مجلد `assets`.
   - تأكد من أن `index.html` موجود مباشرة داخل `assets`.

### 4. إعداد WebView في MainActivity
افتح ملف `MainActivity.java` (موجود في `app/src/main/java/com/mathplatform/app/MainActivity.java`) واستبدل المحتوى بالكود التالي:

```java
package com.mathplatform.app;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {

    private WebView myWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        myWebView = (WebView) findViewById(R.id.webview);
        
        // إعدادات WebView
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        webSettings.setAllowFileAccess(true);
        
        // تحميل ملف index.html من مجلد assets
        myWebView.loadUrl("file:///android_asset/index.html");
        
        // فتح الروابط داخل التطبيق وليس في المتصفح الخارجي
        myWebView.setWebViewClient(new WebViewClient());
    }

    // التعامل مع زر الرجوع في الهاتف
    @Override
    public void onBackPressed() {
        if (myWebView.canGoBack()) {
            myWebView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
```

### 5. إعداد واجهة المستخدم (Layout)
افتح ملف `activity_main.xml` (موجود في `app/src/main/res/layout/activity_main.xml`) واستبدل المحتوى بالتالي:

```xml
<?xml version="1.0" encoding="utf-8"?>
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <WebView
        android:id="@+id/webview"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />

</RelativeLayout>
```

### 6. التشغيل
1. قم بتوصيل هاتفك أو تشغيل المحاكي (Emulator).
2. اضغط على زر التشغيل (Run 'app').
3. سيظهر التطبيق ويعرض المنصة التفاعلية.

## ملاحظات هامة
- تأكد من أن ملفات الويب متجاوبة (Responsive) لتعمل بشكل جيد على شاشات الهواتف.
- إذا كنت تستخدم خطوطًا خارجية أو مكتبات CDN، تأكد من أن الهاتف متصل بالإنترنت، أو قم بتحميل المكتبات محليًا ووضعها في مجلد `assets`.
