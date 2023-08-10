---
title: Dropzone
---

## Sample

### HTML

```html
<div class="drag-and-drop-box">
    <form action="upload/csvfile" class="dropzone" id="uploadcsv">
        <div class="dz-message">
            <div class="msg-row"><i class="far fa-file fa-lg"></i>&nbsp;CSVファイルをドラッグ＆ドロップ</div>
            <div class="msg-row">またはクリックしてファイルを選択してください</div>
        </div>
        <div class="background-icon"><i class="far fa-file fa-10x"></i></div>
    </form>
</div>
```

### Javascript

```js
Dropzone.options.uploadcsv = {
    paramName: "csvfile", // The name that will be used to transfer the file
    maxFilesize: 2, // MB
    uploadMultiple: false,
    maxFiles: 1,
    acceptedFiles: 'text/csv',
    autoProcessQueue: false,
    init: function() {
        this.on('maxfilesexceeded', function(file) {
            // Replace last file if the newest
            this.removeAllFiles();
            this.addFile(file);
        });
    },
    accept: function(file, done) {
        done();
    }
};
```

### CSS

Optional

```css
.drag-and-drop-box form {
    display: flex;
    position: relative;
    align-items: center;
    width: 600px;
    height: 220px;
    background-color: #a1ddff;
    border: 1px dashed #707070;
    cursor: pointer;
}

.drag-and-drop-box form .dz-message {
    width: 100%;
    z-index: 1;
}

.drag-and-drop-box form .dz-message .msg-row {
    text-align: center;
    font-size: 22px;
    margin: 10px 0;
}

.drag-and-drop-box form .background-icon {
    position: absolute;
    right: 30px;
    color: #9cd4f4;
}

.drag-and-drop-box form .dz-preview {
    display: none;
}
```
