document.addEventListener('DOMContentLoaded', function() {
    const editor = document.getElementById('editor-content');
    const fontFamilySelect = document.getElementById('font-family');
    const fontSizeSelect = document.getElementById('font-size');
    const fontWeightSelect = document.getElementById('font-weight');
    const italicToggle = document.getElementById('italic-toggle');
    
    
    const savedText = localStorage.getItem('editorText');
    if (savedText) {
        editor.value = savedText;
    }

    
    const savedFontFamily = localStorage.getItem('fontFamily');
    const savedFontSize = localStorage.getItem('fontSize');
    const savedFontWeight = localStorage.getItem('fontWeight');
    const savedItalic = localStorage.getItem('italic');

    if (savedFontFamily) {
        fontFamilySelect.value = savedFontFamily;
        editor.style.fontFamily = savedFontFamily;
    }

    if (savedFontSize) {
        fontSizeSelect.value = savedFontSize;
        editor.style.fontSize = savedFontSize;
    }

    if (savedFontWeight) {
        fontWeightSelect.value = savedFontWeight;
        editor.style.fontWeight = savedFontWeight;
    }

    if (savedItalic === 'italic') {
        editor.style.fontStyle = 'italic';
        italicToggle.classList.add('active');
    }

    
    editor.addEventListener('input', function() {
        localStorage.setItem('editorText', editor.value);
    });

    
    fontFamilySelect.addEventListener('change', function() {
        const selectedFont = this.value;
        editor.style.fontFamily = selectedFont;
        localStorage.setItem('fontFamily', selectedFont);
    });

    
    fontSizeSelect.addEventListener('change', function() {
        const selectedSize = this.value;
        editor.style.fontSize = selectedSize;
        localStorage.setItem('fontSize', selectedSize);
    });

    
    fontWeightSelect.addEventListener('change', function() {
        const selectedWeight = this.value;
        editor.style.fontWeight = selectedWeight;
        localStorage.setItem('fontWeight', selectedWeight);
    });

  
    italicToggle.addEventListener('click', function() {
        const isItalic = editor.style.fontStyle === 'italic';
        editor.style.fontStyle = isItalic ? 'normal' : 'italic';
        italicToggle.classList.toggle('active');
        localStorage.setItem('italic', isItalic ? 'normal' : 'italic');
    });

   
    document.getElementById('save').addEventListener('click', function() {
        alert('Content saved!');
    });

    
    document.getElementById('reset').addEventListener('click', function() {
        editor.value = '';
        editor.style.fontFamily = 'Roboto';
        editor.style.fontSize = '16px';
        editor.style.fontWeight = '400';
        editor.style.fontStyle = 'normal';
        italicToggle.classList.remove('active');
        localStorage.clear();
    });
});
