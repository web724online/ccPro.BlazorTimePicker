# ccPro Generic TimePicker

**Version:** 1.0.0  
**Author:** ccPro  

---

## English

### Overview
`ccPro Generic TimePicker` is a reusable Blazor component for selecting time. It supports multiple types:

- `string` (nullable)
- `TimeSpan` / `TimeSpan?`
- `TimeOnly` / `TimeOnly?`

It works in **Blazor WebAssembly** and **Blazor Server**, fully supporting two-way binding (`@bind-Value`) for all types.

### Features
- Generic component using `T` for flexible value types
- Supports nullable and non-nullable values
- Bootstrap 5 compatible
- Lightweight and easy to integrate
- Step property controls input granularity (seconds)

### Installation
Install via NuGet (after publishing):

```
Install-Package ccPro.BlazorTimePicker
```

Or reference the project locally.

### Usage Examples

**String Binding**
```razor
<TimePicker T="string" @bind-Value="timeString" CssClass="form-control" Step="60" />

@code {
    private string? timeString = "09:30";
}
```

**TimeSpan Non-nullable**
```razor
<TimePicker T="TimeSpan" @bind-Value="timeSpanNonNull" CssClass="form-control" Step="60" />

@code {
    private TimeSpan timeSpanNonNull = new TimeSpan(10, 15, 0);
}
```

**TimeSpan Nullable**
```razor
<TimePicker T="TimeSpan?" @bind-Value="timeSpanNullable" CssClass="form-control" Step="60" />

@code {
    private TimeSpan? timeSpanNullable = null;
}
```

**TimeOnly Non-nullable**
```razor
<TimePicker T="TimeOnly" @bind-Value="timeOnlyNonNull" CssClass="form-control" Step="60" />

@code {
    private TimeOnly timeOnlyNonNull = new TimeOnly(11, 45);
}
```

**TimeOnly Nullable**
```razor
<TimePicker T="TimeOnly?" @bind-Value="timeOnlyNullable" CssClass="form-control" Step="60" />

@code {
    private TimeOnly? timeOnlyNullable = null;
}
```

### License
MIT License. See the LICENSE file.

---

## فارسی

### معرفی
کامپوننت `ccPro Generic TimePicker` یک **کامپوننت تایم پیکر قابل استفاده مجدد برای Blazor** است که از انواع زیر پشتیبانی می‌کند:

- `string` (nullable)  
- `TimeSpan` / `TimeSpan?`  
- `TimeOnly` / `TimeOnly?`  

این کامپوننت در **Blazor WebAssembly** و **Blazor Server** کار می‌کند و از **دوطرفه بایندینگ** (`@bind-Value`) پشتیبانی می‌کند.

### ویژگی‌ها
- کامپوننت جنریک با `T` برای انواع مقدار منعطف  
- پشتیبانی از مقادیر **nullable** و **non-nullable**  
- سازگار با **Bootstrap 5**  
- سبک و آسان برای استفاده  
- قابلیت تنظیم `Step` برای دقت انتخاب زمان (بر حسب ثانیه)

### نصب
از طریق NuGet (پس از انتشار) نصب کنید:

```
Install-Package ccPro.BlazorTimePicker
```

یا پروژه را به صورت محلی ارجاع دهید.

### نمونه استفاده

**بایندینگ String**
```razor
<TimePicker T="string" @bind-Value="timeString" CssClass="form-control" Step="60" />

@code {
    private string? timeString = "09:30";
}
```

**TimeSpan غیر-nullable**
```razor
<TimePicker T="TimeSpan" @bind-Value="timeSpanNonNull" CssClass="form-control" Step="60" />

@code {
    private TimeSpan timeSpanNonNull = new TimeSpan(10, 15, 0);
}
```

**TimeSpan nullable**
```razor
<TimePicker T="TimeSpan?" @bind-Value="timeSpanNullable" CssClass="form-control" Step="60" />

@code {
    private TimeSpan? timeSpanNullable = null;
}
```

**TimeOnly غیر-nullable**
```razor
<TimePicker T="TimeOnly" @bind-Value="timeOnlyNonNull" CssClass="form-control" Step="60" />

@code {
    private TimeOnly timeOnlyNonNull = new TimeOnly(11, 45);
}
```

**TimeOnly nullable**
```razor
<TimePicker T="TimeOnly?" @bind-Value="timeOnlyNullable" CssClass="form-control" Step="60" />

@code {
    private TimeOnly? timeOnlyNullable = null;
}
```

### لایسنس
MIT License. فایل LICENSE را مشاهده کنید.
