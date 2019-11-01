package com.example.devicelog;
import android.util.Log;

public class DeviceLog {
    public void logInfo() {
        Log.i("JS", "NativeScript Native info log");
        Log.d("JS", "NativeScript Native debug log");
        Log.e("JS", "NativeScript Native error log");
        Log.w("JS", "NativeScript Native warning log");
        Log.v("JS", "NativeScript Native verbose log");
    }

    public void throwAnException() {
        throw new NullPointerException("demo"); 
    }
}